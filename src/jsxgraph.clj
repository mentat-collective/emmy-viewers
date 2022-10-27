^{:nextjournal.clerk/visibility {:code :hide}}
(ns jsxgraph
  (:require [nextjournal.clerk :as clerk]))

;; ## JSXGraph

;; What we want to do here is modify this example so that I can actually specify
;; some of the shapes on this side, and then send them over as configuring data
;; structures to the JS side. That will just update if anything changes. I think
;; that is fine.

(def jsx-viewer
  {:transform-fn clerk/mark-presented
   :render-fn
   '(fn [m]
      ;; NOTES: this works great but if we do NOT do a reagent atom, we won't
      ;; get a re-render of anyting. but internally things that have their own
      ;; lifecycle that access the data are just fine.
      ;;
      ;; if I am just storing refs and DON'T want to deal with those updates
      ;; and re-renders, then I could always just push a ref into a
      ;; non-updating atom and get at it later.
      ;;
      ;; the function binding thing is super annoying. maybe there is some
      ;; shorthand here for the usual udpates you want, so isntead of pushing a
      ;; function?
      ;;
      ;; how do I get data off of something like a riemann sum, where I want to
      ;; query it but there is no obvious event?
      ;;
      ;; The whole name of the game here is letting OTHER systems talk about
      ;; state, and getting state out of jsxgraph land.
      ;;
      ;; next step... try and get refs going... maybe with something like
      ;; createRef, figure out where to put that in the lifecycle. and then get
      ;; a function going that can push the ref into the
      ;;
      ;;## MORE NOTE S
      ;;
      ;; - we can probably manage with a global board on update for each
      ;;   component, that kills them whenever we unmount a particular
      ;;   instance.
      ;;
      ;; - in mathbox and everywhere we should put the ref function into a let
      ;;   binding!
      ;;
      ;; - is there a way to simply UPDATE the props? Maybe not the coordinates...

      ;;
      ;; TODO NEXT:
      ;;
      ;; - get the update handlers going. keep a set of handlers registered for
      ;;   `on-`, except the special on, `:on-board-update`, that gets board
      ;;   updates BUT passes in the component.
      ;;
      ;; - we have a bug here, where using the :render-fn etc form causes a
      ;; - re-render each time I reload.
      ;;
      ;; I also think there is a bug, maybe, where if the board DOES re-mount
      ;; then the re-mount process does not go well.
      ;;
      ;; - FIGURE OUT how to get a re-mount working well when the outer jsxgraph
      ;; - instance gets destroyed.
      (reagent/with-let [!state (reagent/atom {:my-point m
                                               :start -1
                                               :end 10
                                               :n 5})
                         n-update (fn [s] (swap! !state assoc :n (.Value s)))
                         start-update (fn [s] (swap! !state assoc :start (.Value s)))
                         end-update (fn [s] (swap! !state assoc :end (.Value s)))
                         riemann-update (fn [s] (swap! !state assoc :riemann (.Value s)))
                         sin #(Math/sin %)
                         x (:x (:my-point @!state))
                         y (:y (:my-point @!state))
                         on-drag (fn [point] (swap! !state assoc :my-point {:x (.X point) :y (.Y point)}))
                         -yf #(- (:y (:my-point @!state)))
                         -xf #(- (:x (:my-point @!state)))
                         nf #(:n @!state)
                         startf #(:start @!state)
                         endf #(:end @!state)
                         xf #(:x (:my-point @!state))
                         yf #(:y (:my-point @!state))
                         leftf (fn [] "left")
                         sumf (fn [] (str "Sum=" (jsx/to-fixed (:riemann @!state) 4)))
                         store-riemann (fn [r] (swap! !state assoc :riemann r))]
        (v/html
         [:<>
          [jsx/JSXGraph {:boundingbox [-8 4 8 -5]
                         :showCopyright false
                         :axis true}
           [jsx/Slider
            [[1 3] [5 3] [1 5 50]]
            {:name "n"
             :snapWidth 1
             :on-drag n-update}]

           [jsx/Slider
            [[1 2]  [5 2]  [-10 -3 0]]
            {:name "start"
             :on-drag start-update}]

           [jsx/Slider
            [[1 1] [5 1] [0 (* 2 Math/PI) 10]]
            {:name "end"
             :on-drag end-update}]

           [jsx/FunctionGraph [sin startf endf] {:on-drag on-drag}]

           ;; will this work? TODO can we call the function by name??
           [jsx/RiemannSum
            [sin nf leftf startf endf]
            {:on-drag riemann-update}]

           ;; TODO can we use select on the board to get the element we want??
           ;; http://jsxgraph.org/docs/symbols/JXG.Board.html#select
           [jsx/Text [-6 -3 sumf] {:on-drag on-drag}]

           ;; my fun points...
           [jsx/Point [x y]
            {:name "A"
             :strokecolor "red"
             :on-drag on-drag}]

           [jsx/Point [-xf -yf]
            {:name "B"
             :strokecolor "blue"
             :on-drag on-drag}]

           [jsx/Point [0 0]
            {:name "C"
             :strokecolor "blue"
             :on-drag on-drag}]

           ;; nice, this angle can reference other items by their names. TODO If
           ;; I recreate one of the points above, the angle does indeed get
           ;; killed if it's just going by name. So find a way to recreate the
           ;; above... or ask Wasserman if there is some way to reconcile when
           ;; things get recreated.
           [jsx/Angle ["A" "C" "B"] {:cake on-drag}]]
          [v/inspect @!state]])))})

;; We can then use the above viewer using metadata:
;;
;; TODO note that we have a clerk bug with viewer on metadata, forces a
;; re-render every time.
^{::clerk/width :wide}
(clerk/with-viewer jsx-viewer
  {:x -1 :y -2})
