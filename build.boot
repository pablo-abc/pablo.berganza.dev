(set-env!
 :source-paths #{"src"}
 :resource-paths #{"resources"}
 :dependencies '[[perun "0.4.3-SNAPSHOT" :scope "test"]
                 [hiccup "1.0.5" :exclusions [org.clojure/clojure]]
                 [pandeiro/boot-http "0.8.3"
                  :exclusions [org.clojure/clojure]]
                 [deraen/boot-sass "0.3.1" :scope "test"]
                 [deraen/boot-livereload "0.2.1" :scope "test"]
                 [org.slf4j/slf4j-nop "1.7.26" :scope "test"]])

(require '[io.perun :as perun]
         '[pandeiro.boot-http :refer [serve]]
         '[deraen.boot-sass :refer [sass]]
         '[deraen.boot-livereload :refer [livereload]]
         '[clojure.string :as string]
         '[site.core :refer [get-lang]])

(task-options!
 pom {:project 'pablo.berganza.dev :version "0.1.3"})

(defn spy [thing] (prn thing) thing)

(defn blog? [file]
  (re-find #"/blog/" (:permalink file)))

(defn lang? [lang file]
  (= lang (get-lang file)))

(def english? (partial lang? :en))

(def spanish? (partial lang? :es))

(defn translate [global {permalink :permalink slug :slug}]
  (let [split-slug (string/split slug #"\.")
        lang (when (> (count split-slug) 1) (split-slug 1))]
    (if (nil? lang)
      permalink
      (str "/" lang
           (string/replace permalink (re-pattern (str "\\." lang)) "")))))

(defn index? [file] (= "index" (:slug file)))

(defn is-type [type file]
  (= type (:type file)))

(defn rm-dir-date [global {permalink :permalink}]
  (string/replace permalink #"[0-9]{4}-[0-9]{2}-[0-9]{2}-" ""))

(deftask build
  "Builds files"
  []
  (comp (sass)
        (perun/global-metadata)
        (perun/markdown :md-exts {:smartypants true})
        (perun/ttr)
        (perun/permalink :permalink-fn translate)
        (perun/permalink :permalink-fn rm-dir-date)
        (perun/permalink :filterer (complement index?))))

(deftask render
  "Render files"
  []
  (comp (perun/render :renderer 'site.core/blog :filterer blog?)
        (perun/highlight :filterer blog?)
        (perun/render :renderer 'site.core/home
                      :filterer (partial is-type "home"))
        (perun/render :renderer 'site.core/contact
                      :filterer (partial is-type "contact"))
        (perun/static :renderer 'site.core/not-found :page "404.html")
        (perun/collection :renderer 'site.core/blogs
                          :filterer (every-pred blog? english?)
                          :page "blog/index.html")
        (perun/collection :renderer 'site.core/blogs
                          :filterer (every-pred blog? spanish?)
                          :page "es/blog/index.html")))

(deftask build-dev
  "Builds with livereload"
  []
  (comp (build)
        (render)
        (livereload :snippet true)
        (target)))

(deftask publish
  "Build and generate files"
  []
  (comp (build)
        (perun/draft)
        (render)
        (target)))

(deftask dev
  "Start dev server"
  []
  (comp (watch)
        (build-dev)
        (serve :resource-root "public")))
