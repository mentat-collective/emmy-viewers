// Node side of emmy.viewer.raster.bench: four Kernel contract paths over identical
// points. A surface-64 pass evaluates one complete 64x64 grid.
//
//   node bench_runner.mjs <config.json>
//
// Prints {node, cases: [{id, variants: {js, js-batch, raster,
// raster-batch}, maxAbsDiff}]}; timings are ns per point.

import { readFileSync } from "node:fs";

const config = JSON.parse(readFileSync(process.argv[2], "utf8"));
const { trials, minTrialMs } = config;

let sink = 0; // consumed at the end, so no call is dead code

const sum = (v) => {
  if (typeof v === "number") return v;
  let s = 0;
  for (const x of v) s += sum(x);
  return s;
};

const flat = (v, out = []) => {
  if (typeof v === "number") out.push(v);
  else for (const x of v) flat(x, out);
  return out;
};

// Runs `pass` (one sweep over the inputs) repeatedly; returns ns per call.
function measure(pass, callsPerPass) {
  for (let i = 0; i < 5; i++) pass(); // warm up the JIT
  let reps = 1;
  for (;;) {
    const t0 = process.hrtime.bigint();
    for (let r = 0; r < reps; r++) pass();
    const ms = Number(process.hrtime.bigint() - t0) / 1e6;
    if (ms >= minTrialMs) break;
    reps *= 2;
  }
  const samples = [];
  for (let t = 0; t < trials; t++) {
    const t0 = process.hrtime.bigint();
    for (let r = 0; r < reps; r++) pass();
    samples.push(Number(process.hrtime.bigint() - t0) / (reps * callsPerPass));
  }
  samples.sort((a, b) => a - b);
  const q = (p) => samples[Math.min(samples.length - 1, Math.floor(p * samples.length))];
  return { median: q(0.5), p10: q(0.1), p90: q(0.9) };
}

function runCase(c) {
  const fb = new Function(...c.jsArgs, c.jsBody);
  const j = new Function("fb", c.adapter)(fb);
  const f = new Function("fb", c.glue)(fb);
  if (!f.ready() || !j.ready()) throw new Error(`${c.id}: kernels not ready`);
  const inputs = c.inputs;
  const P = c.params;
  const n = inputs.length;
  const m = c.nOut;
  const out = new Array(m).fill(0);
  // Single-argument points as plain numbers, so neither side pays for spread.
  const x1 = inputs.map((x) => x[0]);
  const X = Float64Array.from(inputs.flat());
  const JO = new Float64Array(n * m);
  const O = new Float64Array(n * m);
  let js, raster, results;

  if (c.convention === "native" && inputs[0].length === 1) {
    js = () => { for (let i = 0; i < n; i++) sink += sum(j(x1[i])); };
    raster = () => { for (let i = 0; i < n; i++) sink += sum(f(x1[i])); };
    results = (g) => x1.map((x) => flat(g(x)));
  } else if (c.convention === "native") {
    js = () => { for (let i = 0; i < n; i++) sink += sum(j(...inputs[i])); };
    raster = () => { for (let i = 0; i < n; i++) sink += sum(f(...inputs[i])); };
    results = (g) => inputs.map((x) => flat(g(...x)));
  } else if (c.convention === "structure") {
    js = () => { for (let i = 0; i < n; i++) sink += sum(j(inputs[i], P)); };
    raster = () => { for (let i = 0; i < n; i++) sink += sum(f(inputs[i], P)); };
    results = (g) => inputs.map((x) => flat(g(x, P)));
  } else {
    js = () => { for (let i = 0; i < n; i++) { j(inputs[i], out, P); sink += out[0]; } };
    raster = () => { for (let i = 0; i < n; i++) { f(inputs[i], out, P); sink += out[0]; } };
    results = (g) => inputs.map((x) => { const o = new Array(m).fill(0); g(x, o, P); return o; });
  }
  // Every point in one call: what a viewer sampling a curve or grid can use.
  const jsBatch = () => { j.batch(X, n, P, JO); sink += JO[0]; };
  const rasterBatch = () => { f.batch(X, n, P, O); sink += O[0]; };

  let maxAbsDiff = 0;
  const a = results(j), b = results(f);
  for (let i = 0; i < n; i++)
    for (let j = 0; j < a[i].length; j++)
      maxAbsDiff = Math.max(maxAbsDiff, Math.abs(a[i][j] - b[i][j]));
  j.batch(X, n, P, JO);
  f.batch(X, n, P, O);
  for (let i = 0; i < n; i++)
    for (let k = 0; k < m; k++) {
      maxAbsDiff = Math.max(maxAbsDiff, Math.abs(a[i][k] - JO[i * m + k]));
      maxAbsDiff = Math.max(maxAbsDiff, Math.abs(a[i][k] - O[i * m + k]));
    }

  return {
    id: c.id,
    variants: { js: measure(js, n), "js-batch": measure(jsBatch, n),
      raster: measure(raster, n), "raster-batch": measure(rasterBatch, n) },
    maxAbsDiff,
  };
}

const cases = config.cases.map(runCase);
console.log(JSON.stringify({ node: process.version, cases, sink: Number.isFinite(sink) }));
