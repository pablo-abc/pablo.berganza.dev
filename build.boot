(set-env!
 :source-paths #{"src"}
 :resource-paths #{"resources"}
 :dependencies '[[perun "0.4.3-SNAPSHOT" :scope "test"]
                 [hiccup "1.0.5" :exclusions [org.clojure/clojure]]
                 [pandeiro/boot-http "0.8.3"
                  :exclusions [org.clojure/clojure]]
                 [deraen/boot-sass "0.3.1" :scope "test"]
                 [deraen/boot-livereload "0.2.1" :scope "test"]
                 [org.slf4j/slf4j-nop "1.7.26" :scope "test"]
                 [org.clojure/clojure "1.10.0"]])

(require '[io.perun :as perun]
         '[io.perun.core :as pc]
         '[io.perun.meta :as pm]
         '[pandeiro.boot-http :refer [serve]]
         '[deraen.boot-sass :refer [sass]]
         '[deraen.boot-livereload :refer [livereload]]
         '[clojure.string :as string]
         '[site.core :refer [get-lang blog?]])

(task-options!
 pom {:project 'pablo.berganza.dev :version "0.1.3"})

(defn spy [thing] (prn thing) thing)

(defn lang? [lang file]
  (= lang (get-lang file)))

(def english? (partial lang? :en))

(def spanish? (partial lang? :es))

(defn translate [{default-lang :default-lang} {:keys [lang permalink]}]
  (if (or (= lang default-lang) (nil? lang))
    permalink
    (str "/" lang
         (string/replace permalink (re-pattern (str "\\." lang)) ""))))

(defn index? [file] (= "index" (:slug file)))

(defn is-type [type file]
  (= type (:type file)))

(defn rm-dir-date [global {permalink :permalink}]
  (string/replace permalink #"[0-9]{4}-[0-9]{2}-[0-9]{2}-" ""))

(defn- get-lang-from-ext [_ {slug :slug}]
  (when slug
    (let [split-slug (string/split slug #"\.")]
      (when (> (count split-slug) 1) (split-slug 1)))))

(def ^:private +lang-defaults+
  {:filterer identity
   :extensions [".html"]
   :default-lang "en"})

(deftask lang
  "Add language based on extension."
  [_ filterer FILTER code "predicate used to select entries (default: identity)"
   e extensions EXTENSIONS [str] "extensions of files to include"
   l default-lang LANG str "default language for files"]
  (let [{default-lang :default-lang :as options} (merge +lang-defaults+ *opts*)]
    (with-pre-wrap fileset
      (let [global-meta (pm/get-global-meta fileset)
            meta-contents (perun/filter-meta-by-ext fileset options)
            updated-metas (->> meta-contents
                             (map #(assoc % :lang
                                          (or (get-lang-from-ext global-meta %)
                                              default-lang))))
            updated-fs (pm/set-meta fileset updated-metas)
            new-global-meta (assoc global-meta :default-lang default-lang)]
        (pc/report-info "lang" "added lang to %s files" (count updated-metas))
        (pm/set-global-meta updated-fs new-global-meta)))))

(deftask build
  "Builds files"
  []
  (comp (sass)
        (perun/global-metadata)
        (perun/markdown :md-exts {:smartypants true})
        (perun/ttr :filterer blog?)
        (lang)
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
