(ns site.core
  (:require ["@barba/core" :as barba]
            [clojure.string :as string]))

(defn current-lang []
  (.. js/document -documentElement -lang))

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

(defn redirect-lang! []
  (let [pref-lang (.getItem js/localStorage "pref-lang")
        curr-lang (current-lang)
        url (js/URL. (.-href js/location))
        pathname (.-pathname url)]
    (when (and pref-lang (not= pref-lang curr-lang))
      (if (= pref-lang "es")
        (set! (.-pathname url) (str "/es" pathname))
        (set! (.-pathname url) (string/replace pathname #"^/es" "")))
      (.replace js/location (.-href url)))))

(defn set-pref-lang! []
  (let [curr-lang (current-lang)
        pref-lang (if (= curr-lang "en") "es" "en")]
    (.setItem js/localStorage "pref-lang" pref-lang)))

(defn init! [& args]
  (redirect-lang!)
  (set! (.-onclick (.getElementById js/document "lang-nav")) set-pref-lang!)
  (barba-init!))
