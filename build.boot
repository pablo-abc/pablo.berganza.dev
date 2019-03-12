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
         '[deraen.boot-livereload :refer [livereload]])

(task-options!
 pom {:project 'pablo.berganza.dev :version "0.1.0"})

(defn blog? [file] (= "blog" (:type file)))

(deftask build
  "Builds files"
  []
  (comp (sass)
        (perun/global-metadata)
        (perun/markdown)
        (perun/ttr)
        (perun/permalink)))

(deftask render
  "Render files"
  []
  (comp (perun/render :renderer 'site.core/blog :filterer blog?)
        (perun/static :renderer 'site.core/home :page "index.html")
        (perun/static :renderer 'site.core/contact :page "contact.html")
        (perun/collection :renderer 'site.core/blogs
                          :filterer blog?
                          :page "blog/index.html")))

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
