^{:nextjournal.clerk/visibility {:code :hide}}
(ns emmy-viewers.jsxgraph
  #:nextjournal.clerk
  {:toc true :no-cache true}
  (:require [emmy.clerk :as ec]
            [emmy.jsxgraph :as jsx]
            [emmy.viewer :as ev]
            [nextjournal.clerk :as-alias clerk]))

;; # JSXGraph Demo

^{::clerk/visibility {:code :hide :result :hide}}
(ec/install!)


(ev/with-let [!state {:circumcenter true
                      :orthocenter true
                      :centroid true}]
  (let [centroid? `(fn [] ~(ev/get !state :centroid))
        orthocenter? `(fn [] ~(ev/get !state :orthocenter))
        circumcenter? `(fn [] ~(ev/get !state :circumcenter))
        cerise {:strokeColor "#901B77"
                :fillColor "#CA147A"}
        grass {:strokeColor "#009256"
               :fillColor "#65B72E"
               :visible true
               :withLabel true}
        perpendicular {:strokeColor "black"
                       :visible orthocenter?
                       :dash 1
                       :strokeWidth 1}
        median {:strokeWidth 1
                :strokeColor "#333333"
                :dash 2}]

    (jsx/jsxgraph
     {:boundingbox [-1.5 2 1.5 -1]
      :showCopyright false
      :keepaspectratio true}
     (jsx/checkbox {:parents [-2 1.5 "Circumcenter"]
                    :checked (ev/get !state :circumcenter)
                    :on {:up `#(swap! ~!state assoc :circumcenter (not (.Value %)))}})
     (jsx/checkbox {:parents [-2 1.3 "Orthocenter"]
                    :checked (ev/get !state :orthocenter)
                    :on {:up `#(swap! ~!state assoc :orthocenter (not (.Value %)))}})
     (jsx/checkbox {:parents [-2 1.1 "Centroid"]
                    :checked (ev/get !state :centroid)
                    :on {:up `#(swap! ~!state assoc :centroid (not (.Value %)))}})

     ;; Triangle
     (jsx/point (assoc cerise :parents [1 0] :id "A"))
     (jsx/point (assoc cerise :parents [-1 0] :id "B"))
     (jsx/point (assoc cerise :parents [0.65 1.45] :id "C"))
     (jsx/polygon
      {:parents ["A" "B" "C"]
       :borders {:ids ["pol_0" "pol_1" "pol_2"]}
       :fillColor "#FFFF00"
       :lines {:strokeWidth 2
               :strokeColor "#009256"}})

     ;; ## Circumcircle
     (jsx/circumcircle
      {:parents ["A" "B" "C"]
       :strokeColor "#000000"
       :visible circumcenter?
       :dash 3
       :strokeWidth 1
       :center (assoc grass
                      :name "U"
                      :visible circumcenter?)})

     ;; ## Orthocenter
     ;;
     ;; Altitudes
     (jsx/perpendicular
      (assoc perpendicular :parents ["pol_0" "C"] :id "pABC"))
     (jsx/intersection
      (assoc cerise
             :parents ["pol_0" "pABC"]
             :visible orthocenter?
             :name "H_c"))

     (jsx/perpendicular
      (assoc perpendicular :parents ["pol_1" "A"] :id "pBCA"))
     (jsx/intersection
      (assoc cerise
             :parents ["pol_1" "pBCA"]
             :visible orthocenter?
             :name "H_a"))

     (jsx/perpendicular
      (assoc perpendicular :parents ["pol_2" "B"] :id "pCAB"))
     (jsx/intersection
      (assoc cerise
             :parents ["pol_2" "pCAB"]
             :visible orthocenter?
             :name "H_b"))

     ;; Intersection of Altitudes
     (jsx/intersection
      (assoc grass
             :visible orthocenter?
             :id "i1"
             :name "H"
             :parents ["pABC" "pCAB" 0]))

     ;; ## Centroid
     ;;
     ;; Medians
     (jsx/midpoint
      (assoc cerise :name "M_a"
             :visible centroid?
             :parents ["B" "C"]))
     (jsx/segment
      (assoc median :id "ma"
             :visible centroid?
             :parents ["M_a" "A"]))

     (jsx/midpoint
      (assoc cerise :name "M_b"
             :visible centroid?
             :parents ["C" "A"]))
     (jsx/segment
      (assoc median :id "mb"
             :visible centroid?
             :parents ["M_b" "B"]))

     (jsx/midpoint
      (assoc cerise :name "M_c"
             :visible centroid?
             :parents ["A" "B"]))
     (jsx/segment
      (assoc median :id "mc"
             :visible centroid?
             :parents ["M_c" "C"]))

     ;; Intersection of Medians
     (jsx/intersection
      (assoc grass :id "i2"
             :visible centroid?
             :name "S" :parents ["ma" "mc" 0]))

     ;; Euler's Line (intersection of orthocenter and median, but the
     ;; circumcenter lies on this line as well).
     (jsx/line
      {:parents ["i1" "i2"]
       :strokeWidth 2
       :strokeColor "#901B77"}))))



;; ## A 5 Circle Incidence Theorem

;; This is a visualization of A 5-Circle Incidence Theorem by J. Chris Fisher,
;; Larry Hoehn and Eberhard. M. Schröder From [ Mathematics Magazine, Volume 87,
;; 2014 - Issue
;; 1](https://www.tandfonline.com/doi/abs/10.4169/math.mag.87.1.44?journalCode=umma20).

(defn circle-theorem [coords]
  (apply
   jsx/jsxgraph
   {:boundingbox [-5 5 5 -5]
    :showCopyright false
    :keepaspectratio true}
   (concat
    (map-indexed
     (fn [k p]
       (jsx/point
        {:name "" :id (str "A_" k) :strokeColor "#7355ff" :fillColor "#7355ff"
         :parents p}))
     coords)

    (map (fn [k]
           (jsx/segment
            {:id (str "s_" k)
             :strokeColor "blue" :strokeWidth 1
             :parents [(str "A_" k)
                       (str "A_" (mod (+ k 2) 5))]}))
         (range 5))

    (map (fn [k]
           (jsx/intersection
            {:id (str "B_" k) :name "" :strokeColor "#EA0000" :fillColor "#EA0000"
             :parents [(str "s_" k)
                       (str "s_" (mod (+ (dec k) 5) 5))
                       0]}))
         (range 5))

    (map (fn [k]
           (jsx/circle
            {:id (str "c_" k) :strokeColor "#aaaaaa" :strokeWidth 1
             :parents [(str "A_" k)
                       (str "B_" k)
                       (str "A_" (mod (inc k) 5))]}))
         (range 5))

    (map (fn [k]
           (jsx/radical-axis
            {:strokeColor "#ff0000" :strokeWidth 2
             :parents [(str "c_" k)
                       (str "c_" (mod (+ (dec k) 5) 5))]}))
         (range 5)))))

;; From the abstract:
;;
;; > We state and prove a surprising incidence theorem that was discovered with
;; > the help of a computer graphics program. The theorem involves sixteen
;; > points on ten lines and five circles; our proof relies on theorems of
;; > Euclid, Menelaus, and Ceva. The result bears a striking resemblance to
;; > Miquel's 5-circle theorem, but as far as we can determine, the relationship
;; > of our result to known incidence theorems is superficial.
;;
;; Unfortunately the article is stuck behind a paywall... I'll see what I can do
;; to get it out.
;;
;; Here are our points:

(def points
  [[2.5 -3]
   [2 4]
   [-2.5 3]
   [-4 -2]
   [0 -4]])

;; And our viewer:
(circle-theorem points)
