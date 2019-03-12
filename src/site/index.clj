(ns site.index
  (:require [hiccup.page :as hp]))

(defn render [{post :entry}]
  (hp/html5
   [:body
    [:h1 (:title post)]
    [:div (:content post)]]))
