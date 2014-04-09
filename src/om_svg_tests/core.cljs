(ns om-svg-tests.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.events :as events])
  (:import [goog.events EventType]))

(enable-console-print!)

(def app-state (atom {:o {:p1 {:x 101, :y 137}, 
                          :p2 {:x 121, :y 83}}, 
                      :m [{:x 164, :y 193} 
                          {:x 179, :y 113} 
                          {:x 205, :y 115} 
                          {:x 235, :y 110} 
                          {:x 263, :y 137} 
                          {:x 296, :y 149}]}))

(defn drag-move-fn [app]
  (fn [evt]
    (om/update! app {:x (.-clientX evt)
                     :y (.-clientY evt)})))

(defn drag-end-fn [drag-move drag-end]
  (fn [evt]
    (events/unlisten js/window EventType.MOUSEMOVE drag-move)
    (events/unlisten js/window EventType.MOUSEUP @drag-end)))

(defn dragging [app]
  (let [drag-move (drag-move-fn app)
        drag-end-atom (atom nil)
        drag-end (drag-end-fn drag-move drag-end-atom)]
    (reset! drag-end-atom drag-end)
    (events/listen js/window EventType.MOUSEMOVE drag-move)
    (events/listen js/window EventType.MOUSEUP drag-end)))

(defn point [app owner]
  (dom/circle 
   #js {:cx (:x app)
        :cy (:y app)
        :r 5
        :strokeWidth 2
        :fill "black"
        :stroke "blue"
        :onMouseDown #(dragging app)}))

(defn square [x]
  (* x x))

(defn dist [x1 y1 x2 y2]
  (js/Math.sqrt (+ (square (- x2 x1))
                   (square (- y2 y1)))))

(defn circle [{:keys [p1 p2]} owner]
  (reify om/IRender
    (render [this]
      (let [{cx :x cy :y} p1
            {px :x py :y} p2]
        (dom/g nil
               (dom/circle
                #js {:cx cx
                     :cy cy
                     :r (dist cx cy px py)
                     :fill "none"
                     :stroke "black"
                     :strokeWidth 4})
               (om/build point p1)
               (om/build point p2))))))

(defn bezier-string [points]
  (let [[p1 & ps] points
        start-str (str "M " (:x p1) " " (:y p1) " ")
        rest-str (reduce (fn [s p]
                           (str s "T " (:x p) " " (:y p) " "))
                         ""
                         ps)]
    (str start-str rest-str)))

(defn bezier [[& control-points :as app] owner]
  (reify om/IRender
    (render [this]
      (apply dom/g 
             nil 
             (dom/path
              #js {:d (bezier-string control-points)
                   :stroke "black"
                   :fill "none"
                   :strokeWidth 4})
             (om/build-all point app)))))

(om/root
 (fn [app owner]
   (dom/svg #js {:width "100%" :height "100%"}
            (om/build circle (:o app))
            (om/build bezier (:m app))))
  app-state
  {:target (. js/document (getElementById "app"))})
