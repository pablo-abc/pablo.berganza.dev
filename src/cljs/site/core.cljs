(ns site.core
  (:require ["@barba/core" :as barba]))

(defn barba-init! []
  (.init barba (clj->js {:transitions
                        [{:enter (fn [_] (.scrollTo js/window 0 0))}]})))

(defn init! [& args]
  (barba-init!))
