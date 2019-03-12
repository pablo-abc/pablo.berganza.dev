(set-env!
 :source-paths #{"src"}
 :resource-paths #{"resources"}
 :dependencies '[[perun "0.4.3-SNAPSHOT" :scope "test"]
                 [hiccup "1.0.5" :exclusions [org.clojure/clojure]]
                 [pandeiro/boot-http "0.8.3"
                  :exclusions [org.clojure/clojure]]])

(require '[io.perun :as perun]
         '[pandeiro.boot-http :refer [serve]])

(deftask build
  "Builds files"
  []
  (comp (perun/markdown)
        (perun/render :renderer 'site.index/render)
        (target)))

(deftask dev
  "Start dev server"
  []
  (comp (watch)
        (build)
        (serve :resource-root "public")))
