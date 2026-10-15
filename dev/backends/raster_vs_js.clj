^{:nextjournal.clerk/visibility {:code :hide}}
(ns backends.raster-vs-js
  "Every viewer family that compiles through `emmy.viewer.compile/compiled-fn`,
  rendered twice: once with `*backend*` bound to `:raster` (WebAssembly) and
  once with `:js`. Both copies of a plot share one atom and one Leva folder, so a
  slider moves them together.

  This notebook needs raster on the classpath, so it is not part of the static
  site (`user/notebooks`). Build it with `bb raster-e2e:build`; the browser test
  `dev/e2e/raster_render.mjs` drives the result."
  #:nextjournal.clerk{:toc true}
  (:refer-clojure
   :exclude [+ - * / = zero? compare numerator denominator ref partial
             infinite? abs])
  (:require [emmy.clerk :as ec]
            [emmy.env :refer :all]
            [emmy.leva :as leva]
            [emmy.mafs :as mafs]
            [emmy.mathbox.physics :as ph]
            [emmy.mathbox.plot :as plot]
            [emmy.viewer :as ev]
            [emmy.viewer.compile :as vc]
            [emmy.viewer.raster]))

{:nextjournal.clerk/width :wide}

^{:nextjournal.clerk/visibility {:code :hide :result :hide}}
(ec/install!)

;; # Raster and `:js`, side by side
;;
;; Each section below builds the same viewer twice. The left copy is compiled
;; with `emmy.viewer.compile/*backend*` bound to `:raster`, so its functions
;; reach the browser as WebAssembly modules; the right copy uses the default
;; `:js` backend. The binding only matters while the viewer is built on the
;; JVM:
;;
;; ```clojure
;; (binding [vc/*backend* :raster]
;;   (mafs/of-x f))
;; ```

^{:nextjournal.clerk/visibility {:code :hide :result :hide}}
(defn side-by-side
  "A two-column layout of `(build :raster)` and `(build :js)`, each built with
  `*backend*` bound to its backend."
  [build]
  (into [:div {:style {:display "grid"
                       :grid-template-columns "1fr 1fr"
                       :gap "1rem"}}]
        (for [backend [:raster :js]]
          [:div {:data-backend (name backend)}
           [:p {:style {:font-family "monospace"}} (str backend)]
           (binding [vc/*backend* backend]
             (build backend))])))

^{:nextjournal.clerk/visibility {:code :hide :result :hide}}
(defn tag
  "The `data-plot` attribute of a plot's SVG path: its name and backend."
  [plot backend]
  {:data-plot (str plot "-" (name backend))})

;; Each section's body is one Reagent fragment: the Leva folder, then the two
;; copies.

^{:nextjournal.clerk/visibility {:code :hide :result :hide}}
(defn panel
  "One section's fragment: its Leva `controls`, then `body`."
  [controls body]
  (ev/fragment [:div controls body]))

;; ## Mafs: `of-x`
;;
;; A fixed function (`:native` calling convention) and a parametrized one
;; (`:structure` convention, parameters from the Leva folder "of-x"). Sampling
;; depth is fixed so that both copies sample the same abscissae.

(ev/with-let [!p {:a1 1.0 :b1 2.0}]
  (panel
   (leva/controls
    {:atom !p
     :folder {:name "of-x"}
     :schema {:a1 {:min 0.1 :max 3 :step 0.01}
              :b1 {:min 0.1 :max 5 :step 0.01}}})
   (side-by-side
    (fn [backend]
      (mafs/mafs
       {:height 300}
       (mafs/cartesian)
       (mafs/of-x
        {:y (fn [x] (* x (sin x)))
         :color :blue
         :min-sampling-depth 8
         :max-sampling-depth 8
         :svg-path-props (tag "ofx-fixed" backend)})
       (mafs/of-x
        {:y (ev/with-params {:atom !p :params [:a1 :b1]}
              (fn [a b]
                (fn [x]
                  (+ (* a (sin (* b x)))
                     (* 1/10 (square x))))))
         :color :red
         :min-sampling-depth 8
         :max-sampling-depth 8
         :svg-path-props (tag "ofx-param" backend)}))))))

;; ## Mafs: `parametric`
;;
;; A Lissajous-like curve with a radius and a frequency from the Leva folder
;; "parametric".

(ev/with-let [!p {:r2 2.0 :k2 3.0}]
  (panel
   (leva/controls
    {:atom !p
     :folder {:name "parametric"}
     :schema {:r2 {:min 0.5 :max 4 :step 0.01}
              :k2 {:min 1 :max 6 :step 0.01}}})
   (side-by-side
    (fn [backend]
      (mafs/mafs
       {:height 300}
       (mafs/cartesian)
       (mafs/parametric
        {:xy (ev/with-params {:atom !p :params [:r2 :k2]}
               (fn [r k]
                 (fn [t]
                   (up (* r (cos t))
                       (* r (sin (* k t)))))))
         :t [0 (* 2 Math/PI)]
         :color :green
         :min-sampling-depth 9
         :max-sampling-depth 9
         :svg-path-props (tag "parametric" backend)}))))))

;; ## MathBox: `of-xy`
;;
;; An explicit surface over explicit ranges, so the viewer samples the whole
;; grid with one `batch` call per update (the grid sampler path of
;; `emmy.viewer.kernel/area-expr`). Amplitude and frequency come from the Leva
;; folder "of-xy".

(ev/with-let [!p {:a3 1.0 :w3 1.0}]
  (panel
   (leva/controls
    {:atom !p
     :folder {:name "of-xy"}
     :schema {:a3 {:min 0 :max 2 :step 0.01}
              :w3 {:min 0.2 :max 3 :step 0.01}}})
   (side-by-side
    (fn [_]
      (plot/scene
       {:range [[-3 3] [-3 3] [-3 3]]}
       (plot/of-xy
        {:x-range [-3 3]
         :y-range [-3 3]
         :x-samples 64
         :y-samples 64
         :z (ev/with-params {:atom !p :params [:a3 :w3]}
              (fn [a w]
                (fn [[x y]]
                  (* a (sin (* w x)) (cos y)))))}))))))

;; ## MathBox: `parametric-surface`
;;
;; A torus whose tube radius comes from the Leva folder "surface"
;; (`:primitive` calling convention).

(ev/with-let [!p {:s4 0.8}]
  (panel
   (leva/controls
    {:atom !p
     :folder {:name "surface"}
     :schema {:s4 {:min 0.2 :max 1.5 :step 0.01}}})
   (side-by-side
    (fn [_]
      (plot/scene
       {:range [[-4 4] [-4 4] [-4 4]]}
       (plot/parametric-surface
        {:u [0 (* 2 Math/PI)]
         :v [0 (* 2 Math/PI)]
         :u-samples 48
         :v-samples 48
         :f (ev/with-params {:atom !p :params [:s4]}
              (fn [s]
                (fn [[u v]]
                  [(* (+ 2 (* s (cos v))) (cos u))
                   (* (+ 2 (* s (cos v))) (sin u))
                   (* s (sin v))])))}))))))

;; ## MathBox physics: `ode-curve`
;;
;; A pendulum's phase curve, integrated by odex from the state derivative that
;; `emmy.viewer.physics/ode-compile` compiles; gravity comes from the Leva
;; folder "pendulum".

(ev/with-let [!p {:g5 1.0}]
  (panel
   (leva/controls
    {:atom !p
     :folder {:name "pendulum"}
     :schema {:g5 {:min 0.1 :max 4 :step 0.01}}})
   (side-by-side
    (fn [_]
      (plot/scene
       {:range [[0 10] [-3 3] [-3 3]]}
       (ph/ode-curve
        {:f' (ev/with-params {:atom !p :params [:g5]}
               (fn [g]
                 (fn [[_ theta omega]]
                   [1 omega (- (* g (sin theta)))])))
         :state->xyz (fn [[t theta omega]] [t theta omega])
         :initial-state [0 1 0]
         :steps 300
         :dt 0.03}))))))
