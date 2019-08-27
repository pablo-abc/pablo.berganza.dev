(ns site.core
  (:require ["@barba/core" :as barba]
            ["lozad" :as lozad]
            [clojure.string :as string]))

(def observer (lozad))

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
                          :enter (fn [data]
                                   (update-lang-link! data)
                                   (.observe ^js observer))}]})))

(defn init! [& args]
  (.observe ^js observer)
  (barba-init!))
