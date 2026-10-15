// Browser test of the backends notebook (dev/backends/raster_vs_js.clj).
//
// Opens the static build in headless Chromium and checks that
//
// - the page raises no errors and loads no script from another origin (the
//   viewer bundle is the one shadow-cljs compiled from this checkout);
// - every :raster kernel instantiated its WebAssembly module and runs on it
//   (f.wasm() is true: no silent :js fallback);
// - each :raster kernel agrees with its :js twin, per point and in batch, and
//   the Mafs paths the two backends drew agree point for point, within 1e-4;
// - moving a Leva control re-evaluates the raster plots with the new
//   parameters without compiling or instantiating a new module.
//
// Build first, then run (or `bb raster-e2e`, which does both):
//
//   clojure -J-Xmx2g -X:nextjournal/clerk:cljs:raster:raster-e2e
//   node dev/e2e/raster_render.mjs
//
// CHROMIUM sets the browser binary; screenshots go to target/raster-e2e/.

import { chromium } from "playwright-core";
import { createServer } from "node:http";
import { readFile, mkdir, stat } from "node:fs/promises";
import { existsSync, readdirSync } from "node:fs";
import { join, extname, resolve } from "node:path";
import { homedir } from "node:os";

const ROOT = resolve(process.env.RASTER_E2E_BUILD ?? "target/raster-e2e/build");
const SHOTS = resolve(process.env.RASTER_E2E_SHOTS ?? "target/raster-e2e/screenshots");
const TOL = 1e-4; // the PR's libm tolerance (sin/cos within 5e-6, atan within 3e-5)

// Expected kernels per backend: of-x (fixed, param), parametric, of-xy,
// parametric-surface, ode-curve (f' and state->xyz).
const EXPECTED_KERNELS = 7;

function chromiumPath() {
  if (process.env.CHROMIUM) return process.env.CHROMIUM;
  const base = join(homedir(), ".cache/ms-playwright");
  for (const dir of readdirSync(base).filter((d) => /^chromium-\d+$/.test(d)).sort().reverse()) {
    for (const sub of ["chrome-linux64", "chrome-linux"]) {
      const p = join(base, dir, sub, "chrome");
      if (existsSync(p)) return p;
    }
  }
  throw new Error("No Chromium found; set CHROMIUM");
}

const TYPES = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png",
  ".woff2": "font/woff2", ".woff": "font/woff", ".wasm": "application/wasm",
};

function serve(root) {
  const server = createServer(async (req, res) => {
    try {
      let p = join(root, decodeURIComponent(new URL(req.url, "http://x").pathname));
      if (!p.startsWith(root)) throw new Error("outside root");
      if ((await stat(p)).isDirectory()) p = join(p, "index.html");
      const body = await readFile(p);
      res.writeHead(200, { "content-type": TYPES[extname(p)] ?? "application/octet-stream" });
      res.end(body);
    } catch {
      res.writeHead(404);
      res.end();
    }
  });
  return new Promise((ok) => server.listen(0, "127.0.0.1", () => ok(server)));
}

// Installed before any page script: counts WebAssembly compilation and
// records every kernel the viewers build. A kernel reaches the page as
// `((new Function("fb", <contract source>)) <:js function>)`; the raster
// source defines `f.wasm`, the :js adapter `fb.batch`. Each kernel is wrapped
// in a Proxy that records its calls and parameters and forwards the rest.
function hooks() {
  const W = WebAssembly;
  const wasm = (window.__wasm = { modules: 0, instances: 0, instantiate: 0, compile: 0, bytes: [] });
  const OM = W.Module, OI = W.Instance, Oinst = W.instantiate, Ocomp = W.compile;
  W.Module = new Proxy(OM, {
    construct(t, a) { wasm.modules++; wasm.bytes.push(a[0]?.byteLength ?? -1); return Reflect.construct(t, a, t); },
  });
  W.Instance = new Proxy(OI, {
    construct(t, a) { wasm.instances++; return Reflect.construct(t, a, t); },
  });
  W.instantiate = function (...a) { wasm.instantiate++; wasm.bytes.push(a[0]?.byteLength ?? -1); return Oinst.apply(W, a); };
  W.compile = function (...a) { wasm.compile++; return Ocomp.apply(W, a); };

  const kernels = (window.__kernels = []);
  const copy = (ps) => (ps == null ? null : Array.from(ps));
  const OF = Function;
  const PF = new Proxy(OF, {
    construct(t, a) {
      const made = Reflect.construct(t, a, t);
      if (a.length !== 2 || a[0] !== "fb" || typeof a[1] !== "string") return made;
      const src = a[1];
      const kind = src.includes("f.wasm = ") ? "raster" : src.includes("fb.batch = function") ? "js" : null;
      if (!kind) return made;
      return function (fb) {
        const k = made(fb);
        const rec = { kind, src, fb, k, calls: 0, lastPs: null, batches: 0, lastBatchPs: null, born: performance.now() };
        const batch = k.batch;
        const wrapped = new Proxy(k, {
          apply(t, self, args) {
            rec.calls++;
            const ps = args.length >= 2 ? args[args.length - 1] : null;
            if (ps != null && typeof ps === "object") rec.lastPs = copy(ps);
            return Reflect.apply(t, self, args);
          },
          get(t, p) {
            if (p === "batch") {
              return function (xs, n, ps, out) {
                rec.batches++;
                rec.lastBatchPs = copy(ps);
                return batch.call(t, xs, n, ps, out);
              };
            }
            return Reflect.get(t, p);
          },
        });
        rec.wrapped = wrapped;
        kernels.push(rec);
        return wrapped;
      };
    },
  });
  globalThis.Function = PF;
}

// Evaluated in the page: each raster kernel against its :js twin (paired by
// the :js source both carry), per point and in batch, on a fixed sample set.
function compareKernels() {
  const recs = window.__kernels;
  const raster = recs.filter((r) => r.kind === "raster");
  const js = recs.filter((r) => r.kind === "js");
  const key = (r) => r.fb.toString();
  const convention = (src) =>
    src.includes("function(ys, yps, ps)") ? "primitive" : src.includes("function(state, ps)") ? "structure" : "native";
  const out = [];
  const used = new Set();
  for (const r of raster) {
    const twin = js.find((j) => !used.has(j) && key(j) === key(r));
    if (!twin) { out.push({ error: "no :js twin", src: key(r).slice(0, 200) }); continue; }
    used.add(twin);
    const d = r.k.dims, conv = convention(r.src);
    const n = 401;
    const xs = new Float64Array(n * d.state);
    for (let i = 0; i < n; i++)
      for (let s = 0; s < d.state; s++) xs[i * d.state + s] = -3 + (6 * i) / (n - 1) + 0.37 * s * Math.sin(i);
    const ps = Array.from({ length: d.params }, (_, i) => 0.6 + 0.45 * i);
    const point = (f, i) => {
      const st = Array.from(xs.subarray(i * d.state, (i + 1) * d.state));
      if (conv === "primitive") { const o = new Array(d.outputs).fill(0); f(st, o, ps); return o; }
      if (conv === "structure") { const v = f(d.state === 1 && !Array.isArray(st) ? st[0] : st, ps); return [v].flat(Infinity); }
      return [f(...st)].flat(Infinity);
    };
    let maxBatch = 0, maxPoint = 0, maxSelf = 0;
    const rb = r.k.batch(xs, n, ps, null), jb = twin.k.batch(xs, n, ps, null);
    for (let i = 0; i < n * d.outputs; i++) {
      maxBatch = Math.max(maxBatch, Math.abs(rb[i] - jb[i]));
    }
    for (let i = 0; i < n; i++) {
      const rp = point(r.k, i), jp = point(twin.k, i);
      for (let m = 0; m < d.outputs; m++) {
        maxPoint = Math.max(maxPoint, Math.abs(rp[m] - jp[m]));
        maxSelf = Math.max(maxSelf, Math.abs(rp[m] - rb[i * d.outputs + m]));
      }
    }
    out.push({
      convention: conv, dims: { state: d.state, outputs: d.outputs, params: d.params },
      wasm: r.k.wasm(), ready: r.k.ready(), jsReady: twin.k.ready(), sync: !r.src.includes("WebAssembly.instantiate("),
      maxBatch, maxPoint, maxSelf, finite: Array.from(rb).every(Number.isFinite),
    });
  }
  return { pairs: out, raster: raster.length, js: js.length, unpairedJs: js.length - used.size };
}

// The coordinates of each Mafs path, raster against :js, in math units.
// (Evaluated in the page, so it is self-contained.)
function compareMafs(tags) {
  const pathNumbers = (tag) => {
    const p = document.querySelector(`path[data-plot="${tag}"]`);
    if (!p) return null;
    return (p.getAttribute("d").match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi) ?? []).map(Number);
  };
  const res = {};
  for (const t of tags) {
    const a = pathNumbers(`${t}-raster`), b = pathNumbers(`${t}-js`);
    if (!a || !b) { res[t] = { error: "path missing", raster: !!a, js: !!b }; continue; }
    let max = 0;
    for (let i = 0; i < Math.min(a.length, b.length); i++) max = Math.max(max, Math.abs(a[i] - b[i]));
    res[t] = { raster: a.length, js: b.length, max };
  }
  return res;
}

const failures = [];
const check = (ok, msg) => { console.log(`${ok ? "ok  " : "FAIL"} ${msg}`); if (!ok) failures.push(msg); };

async function setLeva(page, key, value) {
  // The Leva row for `key`: its label, and the number field next to it.
  const input = page.locator(`input#${key}, input[id$=".${key}"]`).first();
  if ((await input.count()) === 0) throw new Error(`no Leva input for ${key}`);
  await input.click({ clickCount: 3 });
  await input.fill(String(value));
  await input.press("Enter");
}

async function main() {
  if (!existsSync(join(ROOT, "index.html"))) throw new Error(`no build at ${ROOT}; run bb raster-e2e:build`);
  await mkdir(SHOTS, { recursive: true });
  const server = await serve(ROOT);
  const origin = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({
    executablePath: chromiumPath(),
    args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"],
  });
  try {
    const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
    const errors = [], consoleErrors = [], remote = [], scripts = [];
    page.on("pageerror", (e) => errors.push(String(e)));
    page.on("console", (m) => { if (m.type() === "error") consoleErrors.push(m.text()); });
    page.on("request", (r) => {
      const u = r.url();
      if (r.resourceType() === "script") scripts.push(u);
      if (!u.startsWith(origin) && !u.startsWith("data:") && !u.startsWith("blob:")) remote.push(`${r.resourceType()} ${u}`);
    });
    // Clerk's static page links Tailwind's CDN script; no remote script may
    // run, so each remote script is answered locally: Tailwind with the one
    // global Clerk's inline script configures (the page loses Tailwind's
    // styling, nothing else), anything else with an abort. Remote stylesheets
    // and fonts may load.
    const blocked = [];
    await page.route("**/*", (route) => {
      const r = route.request();
      if (r.resourceType() === "script" && !r.url().startsWith(origin)) {
        blocked.push(r.url());
        if (new URL(r.url()).hostname === "cdn.tailwindcss.com")
          return route.fulfill({ contentType: "text/javascript", body: "window.tailwind = {config: {}};" });
        return route.abort();
      }
      return route.continue();
    });
    await page.addInitScript(hooks);

    await page.goto(`${origin}/`, { waitUntil: "load" });
    await page.waitForFunction(
      (n) => window.__kernels && window.__kernels.filter((r) => r.kind === "raster").length >= n
        && document.querySelectorAll("canvas").length >= 6,
      EXPECTED_KERNELS, { timeout: 120000 });
    // Let asynchronously compiled modules settle and MathBox draw a few frames.
    await page.waitForFunction(() => window.__kernels.filter((r) => r.kind === "raster").every((r) => r.k.wasm()), null, { timeout: 30000 }).catch(() => {});
    await page.waitForTimeout(2500);
    await page.screenshot({ path: join(SHOTS, "page.png"), fullPage: true });

    // Provenance: every script that ran came from this server; the viewer
    // bundle is the shadow-cljs output of this checkout.
    const ranRemote = scripts.filter((u) => !u.startsWith(origin) && !blocked.includes(u));
    check(ranRemote.length === 0, `no remote script ran (${scripts.length - blocked.length} local; remote answered locally: ${blocked.join(", ") || "none"})`);
    const local = scripts.filter((u) => u.startsWith(origin));
    const bundleSrc = resolve(process.env.RASTER_E2E_BUNDLE ?? ".clerk/shadow-cljs/main.js");
    if (existsSync(bundleSrc)) {
      const want = await readFile(bundleSrc);
      let same = false;
      for (const u of local) {
        const f = join(ROOT, new URL(u).pathname);
        if (existsSync(f) && (await readFile(f)).equals(want)) same = true;
      }
      check(same, `the page loads the bundle shadow-cljs wrote to ${bundleSrc}`);
    }
    check(!remote.some((u) => u.includes("clerk.garden")), "nothing requested from *.clerk.garden");
    const bundle = scripts.filter((u) => /\.js(\?|$)/.test(u));
    console.log(`     scripts: ${bundle.map((u) => u.replace(origin, "")).join(", ")}`);
    if (remote.length) console.log(`     other remote requests (not scripts): ${[...new Set(remote)].join(", ")}`);

    // WebAssembly: one module per raster kernel, all running on wasm.
    const w0 = await page.evaluate(() => ({ ...window.__wasm, bytes: undefined }));
    const cmp = await page.evaluate(compareKernels);
    console.log(`     wasm: ${JSON.stringify(w0)}`);
    check(cmp.raster === EXPECTED_KERNELS && cmp.js === EXPECTED_KERNELS,
          `${cmp.raster} raster and ${cmp.js} :js kernels built (expected ${EXPECTED_KERNELS} each)`);
    check(w0.modules + w0.instantiate === cmp.raster, `${w0.modules + w0.instantiate} WebAssembly modules compiled, one per raster kernel`);
    check(cmp.unpairedJs === 0, "every :js kernel has a raster twin");
    for (const [i, p] of cmp.pairs.entries()) {
      if (p.error) { check(false, `kernel ${i}: ${p.error}`); continue; }
      check(p.wasm && p.ready, `kernel ${i} (${p.convention}, ${p.dims.state}->${p.dims.outputs}, ${p.dims.params} params, ${p.sync ? "sync" : "async"}): f.wasm() true`);
      check(p.finite && p.maxBatch <= TOL && p.maxPoint <= TOL && p.maxSelf <= TOL,
            `kernel ${i}: raster vs :js max |d| batch ${p.maxBatch.toExponential(2)}, per point ${p.maxPoint.toExponential(2)}; raster point vs batch ${p.maxSelf.toExponential(2)}`);
    }
    const used = await page.evaluate(() => window.__kernels.filter((r) => r.kind === "raster").map((r) => r.calls + r.batches));
    check(used.every((c) => c > 0), `every raster kernel was called by its viewer (calls+batches: ${used.join(", ")})`);

    // The paths Mafs drew from each backend.
    const tags = ["ofx-fixed", "ofx-param", "parametric"];
    const m0 = await page.evaluate(compareMafs, tags);
    for (const t of tags) {
      const r = m0[t];
      check(!r.error && r.raster === r.js && r.raster > 100 && r.max <= TOL,
            `Mafs ${t}: ${r.error ?? `${r.raster} vs ${r.js} coordinates, max |d| ${r.max?.toExponential(2)}`}`);
    }
    for (const [i, el] of (await page.locator("[data-backend]").all()).entries()) {
      await el.screenshot({ path: join(SHOTS, `plot-${String(i).padStart(2, "0")}.png`) }).catch(() => {});
    }

    // Leva: change one parameter per section; the raster kernels must see it
    // without a new module or kernel, and the pictures must still agree.
    const before = await page.evaluate(() => ({ kernels: window.__kernels.length, wasm: window.__wasm.modules + window.__wasm.instantiate }));
    const dOld = await page.evaluate(() => document.querySelector('path[data-plot="ofx-param-raster"]').getAttribute("d"));
    const moves = [["a1", 2.35], ["b1", 3.1], ["k2", 4.5], ["a3", 1.7], ["s4", 1.2], ["g5", 2.5]];
    for (const [k, v] of moves) {
      await setLeva(page, k, v);
      await page.waitForTimeout(400);
    }
    await page.waitForTimeout(1500);
    await page.screenshot({ path: join(SHOTS, "page-after-leva.png"), fullPage: true });
    const after = await page.evaluate(() => ({ kernels: window.__kernels.length, wasm: window.__wasm.modules + window.__wasm.instantiate }));
    check(after.kernels === before.kernels, `no kernel rebuilt by the Leva changes (${before.kernels} -> ${after.kernels})`);
    check(after.wasm === before.wasm, `no WebAssembly module compiled by the Leva changes (${before.wasm} -> ${after.wasm})`);
    const dNew = await page.evaluate(() => document.querySelector('path[data-plot="ofx-param-raster"]').getAttribute("d"));
    check(dNew !== dOld, "the raster of-x path changed with a1/b1");
    const seen = await page.evaluate(() => window.__kernels.filter((r) => r.kind === "raster").map((r) => ({
      ps: r.lastBatchPs ?? r.lastPs, wasm: r.k.wasm(),
    })));
    const has = (vals) => seen.some((s) => s.wasm && s.ps && vals.every((v) => s.ps.some((p) => Math.abs(p - v) < 1e-9)));
    check(has([2.35, 3.1]), "a raster kernel ran on wasm with of-x's new (a1, b1)");
    check(has([2.0, 4.5]), "a raster kernel ran on wasm with parametric's new (r2, k2)");
    check(has([1.7, 1.0]), "a raster kernel ran on wasm with of-xy's new (a3, w3)");
    check(has([1.2]), "a raster kernel ran on wasm with the surface's new s4");
    check(has([2.5]), "a raster kernel ran on wasm with the pendulum's new g5");
    const m1 = await page.evaluate(compareMafs, tags);
    for (const t of tags) {
      const r = m1[t];
      check(!r.error && r.raster === r.js && r.max <= TOL, `after Leva, Mafs ${t}: ${r.error ?? `max |d| ${r.max?.toExponential(2)}`}`);
    }
    const cmp1 = await page.evaluate(compareKernels);
    check(cmp1.pairs.every((p) => !p.error && p.wasm && p.maxBatch <= TOL && p.maxPoint <= TOL),
          "after Leva, every raster kernel still on wasm and within 1e-4 of :js");

    check(errors.length === 0, `no page errors${errors.length ? ": " + errors.join(" | ") : ""}`);
    if (consoleErrors.length) console.log(`     console errors (not page errors): ${consoleErrors.slice(0, 5).join(" | ")}`);
  } finally {
    await browser.close();
    server.close();
  }
  console.log(failures.length ? `\n${failures.length} check(s) failed` : "\nall checks passed");
  console.log(`screenshots: ${SHOTS}`);
  process.exit(failures.length ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(1); });
