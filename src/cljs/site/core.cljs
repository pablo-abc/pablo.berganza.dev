(ns site.core
  (:require ["@barba/core" :as barba]
            [clojure.string :as string]))

(defn update-lang-link! [data]
  (let [path (.-path (.-url (.-next data)))
        lang-nav (.getElementById js/document "lang-nav")
        new-lang (.-innerHTML lang-nav)
        new-path (if (= new-lang "en")
                   (string/replace path #"^/es" "")
                   (str "/es" path))]
    (set! (.-href lang-nav) new-path)))

(defn barba-init! []
  (.init barba (clj->js {:transitions
                        [{:leave (fn [_] (.scrollTo js/window 0 0))
                          :enter update-lang-link!}]})))

(defn init! [& args]
  (barba-init!))
