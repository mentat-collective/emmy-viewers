^#:nextjournal.clerk
{:toc true
 :visibility :hide-ns}
(ns examples.simulation.cylinder-flow
  (:require
   [nextjournal.clerk #?(:clj :as :cljs :as-alias) clerk]
   [mentat.clerk-utils.show :refer [show-cljs]]
   #?@(:cljs [[demo.mathbox]
              [mathbox.core]
              [reagent.core]
              [leva.core]
              [mathbox.primitives :as mb]])))

;; ## Taylor-Couette
;;
;; https://en.wikipedia.org/wiki/Taylor%E2%80%93Couette_flow

(show-cljs
 (def vertexPassthrough "
  // Enable STPQ mapping
  #define POSITION_STPQ
  void getPosition(inout vec4 xyzw, inout vec4 stpq) {
    // Store XYZ per vertex in STPQ
    stpq = xyzw;
    xyzw.z = 0.0;
  }")

 (def fragmentContourSurface
   "
  #extension GL_OES_standard_derivatives : enable

  uniform float resolution;
  uniform float levels;
  uniform float alpha;

  uniform float threshold;

  float WIDTH = 1.0;

  // Enable STPQ mapping from vertex shader so we can access the (lerped) data per pixel
  #define POSITION_STPQ

  // Draw surface with contour lines
  vec4 getColor(vec4 rgba, inout vec4 stpq) {
    float data = min(2.0, stpq.z);

    // LEVELS of division per unit
    float level = abs(fract(data * levels) - .5) * 2.0;

    // Make line width uniform in screen space
    float deriv = max(abs(dFdx(data)), abs(dFdy(data)));
    float ratio = 1.0 / (4.0 * deriv * levels);
    float grid = clamp(WIDTH - level * 2.0 * ratio, 0.0, 1.0);

    vec3 color = stpq.z < threshold ? vec3(.5) : vec3(0.0);

    return vec4(color + grid * alpha, rgba.a);
  }")

 (defn clamp [x a b]
   (Math/max a (Math/min b x)))

 (defn ^:export Cylinder [{:keys [params schema]}]
   (reagent.core/with-let
     [!params (reagent.core/atom params)
      _dt (/ 1 20)
      vorticular
      (fn [_ r z]
        (let [{ri :innerRadius
               ro :outerRadius
               v  :vorticity
               omega_i :innerRotation
               omega_o :outerRotation}
              (.-state !params)
              eta    (/ ri ro)
              eta**2 (* eta eta)
              omega  (- omega_i omega_o)
              A (/ (* (- omega) eta**2)
                   (- 1 eta**2))
              B (/ (* omega ri ri)
                   (- 1 eta**2))

              ;; Laminar
              v_theta (+ (* A r) (/ B r))

              ;; Vortex center radial
              rr (/ (- ro ri) 2)
              rc (/ (+ ro ri) 2)

              ;; Vortex center axial
              i (Math/round (/ z rr 2))
              zc (* i rr 2)

              dr (- z zc)
              dz (- (- r rc))
              rd (clamp (inc (- 1 (* (- r rc) 2)))
                        0 1)
              s (if (zero? (mod i 2))
                  (- rd)
                  rd)]
          [v_theta (* v dr s) (* v dz s)]))]
     (let [inner-origin [0 (:innerRadius @!params) -2]
           outer-origin [0 (:outerRadius @!params) -2]]
       [:<>
        [leva.core/Controls
         {:atom !params
          :schema schema}]
        [mathbox.core/MathBox
         {:container  {:style {:height "600px" :width "100%"}}
          :threestrap {:plugins ["core" "controls" "cursor" "stats"]}
          :renderer   {:background-color 0x000000}}
         [mathbox.primitives/Camera
          {:proxy true
           :position [3 4 6]
           :fov 15}]
         [mathbox.primitives/Unit
          {:scale 720
           :focus 6}
          [mathbox.primitives/Cartesian
           {:id "top"
            :range [[-1 1]
                    [-1 1]
                    [-1 1]]
            :scale [0.8 0.8 0.8]
            :position [0 0 0]
            :quaternion [-0.707 0 0 0.707]}

           [mathbox.primitives/Polar
            {:range [[(- Math/PI) Math/PI] [-2 2] [-2 2]]
             :scale [1 1 1]
             :bend 1}
            [mathbox.primitives/Grid
             {:color 0x808080
              :detailX 64
              :unitX Math/PI
              :baseX 2
              :origin outer-origin}]
            [mathbox.primitives/Grid
             {:color 0x808080
              :axes "xz"
              :detailX 64
              :unitX Math/PI
              :baseX 2
              :origin outer-origin}]
            [mathbox.primitives/Grid
             {:color 0x808080
              :axes "xz"
              :detailX 64
              :unitX Math/PI
              :baseX 2
              :origin inner-origin}]

            [mathbox.primitives/Axis
             {:axis "x"
              :color 0xffffff
              :detail 64
              :origin inner-origin}]
            [mathbox.primitives/Axis
             {:axis "x"
              :color 0xffffff
              :detail 64
              :origin outer-origin}]
            [mathbox.primitives/Scale
             {:axis "x"
              :divide 5
              :unit Math/PI
              :base 2
              :start true
              :end true
              :origin outer-origin}]
            [mathbox.primitives/Format
             {:expr (fn [x]
                      (str (demo.mathbox/format-number (/ x Math/PI))
                           "π"))
              :font ["Helvetica"]}]
            [mathbox.primitives/Label
             {:color 0xffffff
              :background 0x000000
              :depth 0.5
              :zIndex 1
              :zOrder 5
              :size 10}]
            [mathbox.primitives/Axis
             {:axis "y"
              :color 0xffffff
              :origin outer-origin}]
            [mathbox.primitives/Scale
             {:axis "y"
              :divide 5
              :unit 1
              :base 10
              :start true
              :end true
              :zero false
              :origin outer-origin}]
            [mathbox.primitives/Format
             {:expr demo.mathbox/format-number
              :font ["Helvetica"]}]
            [mathbox.primitives/Label
             {:color 0xffffff
              :background 0x000000
              :depth 0.5
              :zIndex 1
              :zOrder 5
              :size 10
              :offset [20 0]}]

            ;; Blind
            [mathbox.primitives/Area
             {:width 2
              :height 2
              :channels 3
              :axes 'xz'
              :expr (fn [emit x z]
                      (emit x (:innerRadius @!params) z))}]
            [mathbox.primitives/Lerp
             {:width 64}]
            [mathbox.primitives/Surface
             {:color 0x000000
              :shaded false
              :zOrder 10
              :opacity 0.5}]

            ;; Vector
            [mathbox.primitives/Volume
             {:width  1
              :height 8
              :depth  16
              :rangeX [0 1]
              :centeredX true
              :centeredY true
              :centeredZ true
              :channels 3
              :items 2
              :rangeY [(:innerRadius @!params) (:outerRadius @!params)]
              :live false
              :expr (let [scale (:scale @!params)]
                      (fn [emit θ r z]
                        (let [dv (vorticular θ r z)]
                          (emit θ r z)
                          (emit (+ θ (* (nth dv 0) scale))
                                (+ r (* (nth dv 1) scale))
                                (+ z (* (nth dv 2) scale))))))}]
            [mathbox.primitives/Lerp
             {:items 4}]
            [mathbox.primitives/Vector
             {:width 3
              :color 0xffffff
              :end true}]]]]]]))))


#?(:clj
   ^{::clerk/width :wide
     ::clerk/viewer
     {:transform-fn
      (comp clerk/mark-presented
            (clerk/update-val
             (fn [m] m)))
      :render-fn
      '(fn [opts]
         [js/examples.simulation.cylinder_flow.Cylinder opts])}}
   {:params
    {:innerRadius 1
     :outerRadius 2
     :innerRotation 0.4
     :outerRotation 0
     :vorticity 1
     :scale 0.25}

    :schema
    {:innerRadius {:min 0 :max 1 :step 0.01}
     :outerRadius {:min 1 :max 2 :step 0.01}
     :innerRotation {:min 0 :max 2 :step 0.01}
     :outerRotation {:min 0 :max 1 :step 0.01}
     :vorticity {:min 0 :max 1 :step 0.01}
     :scale {:min 0 :max 1 :step 0.01}}})
