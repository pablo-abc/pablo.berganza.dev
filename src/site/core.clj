(ns site.core
  (:require [hiccup.page :as hp :refer [include-css]]))

(def ability-images
  '("https://cdn.svgporn.com/logos/javascript.svg"
    "https://cdn.svgporn.com/logos/typescript-icon.svg"
    "https://cdn.svgporn.com/logos/clojure.svg"
    "https://raw.githubusercontent.com/cljs/logo/master/cljs-white.png"
    "https://cdn.svgporn.com/logos/python.svg"
    "https://cdn.svgporn.com/logos/docker.svg"))

(defn- loader [color]
  (vec (conj (take 4 (repeat [:div {:class (str "lds-" color)}]))
             :div.lds-ellipsis)))

(defn- ability-colors [quantity]
  (flatten
   (map vector
        (repeat quantity "color-1") (repeat quantity "color-2"))))

(defn navbar []
  [:nav
   [:div.left-nav
    [:div.logo
     [:a#logo {:href "/"} "Pablo Berganza"]]
    [:div.nav-items
     [:a.nav-item {:href "/blog"} "Blog"] " | "
     [:a.nav-item {:href "/contact"} "Contact me"]]]
   [:div.right-nav
    [:a.nav-item [:i.fab.fa-github]]
    [:a.nav-item [:i.fab.fa-instagram]]
    [:a.nav-item [:i.fab.fa-facebook]]
    [:a.nav-item [:i.fab.fa-twitter]]]])

(defn head [title site-title]
  [:head
   [:title (str title " | " site-title)]
   [:link {:type "text/css"
           :crossorigin "anonymous"
           :integrity "sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
           :href "https://use.fontawesome.com/releases/v5.7.0/css/all.css"
           :rel "stylesheet"}]
   (include-css "/css/site.css")])

(defn render [title title-site & content]
  (hp/html5
   (head title title-site)
   [:body
    [:header#nav-menu
     (navbar)]
    (into [:section#page] content)]))

(defn page [{:keys [entry meta] :as obj}]
  (render (:title entry) (:site-title meta)
          [:h1 (:title entry)]
          [:p (:content entry)]))

(defn- home-img-attr [source]
  (cond-> {}
    source (assoc :src source)))

(defn home [{:keys [meta]}]
  (render "Home" (:site-title meta)
          [:section.main
           [:section.main-info
            [:div#profile-box
             [:img#profile-pic {:src (str "https://scontent.fsal2-1.fna.fbcdn.net/"
                                          "v/t1.0-9/30516719_10216530245715580_95"
                                          "9662321477615616_n.jpg?_nc_cat=109&_nc_"
                                          "ht=scontent.fsal2-1.fna&oh=6c0dc7645989"
                                          "74ffae0215fb767e92b6&oe=5CB5AD16")}]
             [:h3#profile-bubble "Hi, I make web stuff! Welcome!"]]]
           [:section.abilities
            [:h2 "My Abilities"]
            (vec (conj
                  (map #(vector :section.ability {:class %2}
                                [:img
                                 (home-img-attr %1)])
                       ability-images
                       (ability-colors (count ability-images)))
                  :section.box-abilities))]]))

(defn blogs [{:keys [entries meta]}]
  (render "Blog" (:site-title meta)
          [:section.blog-posts
           [:header
            [:h1 "Blog"]]
           [:section#blog-list
            (for [blog (sort-by :index entries)]
              [:a.blog-item {:href (:permalink blog)}
               [:article
                [:h3 (:title blog)]
                [:p.created (:created blog)]
                [:p.introduction (:introduction blog)]]])]]))

(defn blog [{:keys [entry meta]}]
  (render
   (:title entry) (:site-title meta)
   [:article#blog
    [:header
     [:h1 (:title entry)]
     [:p.introduction (:introduction entry)]]
    [:p.created  (:created entry)]
    (let [content (:content entry)]
      [:section.content content])]))

(defn contact [{:keys [meta]}]
  (render
   "Contact Me" (:site-title meta)
   [:section.contact
    [:header
     [:h1 "Contact Me"]]]))


(defn not-found [{:keys [meta]}]
  (render
   "Not Found" (:site-title meta)
   [:section.not-found
    [:h1 "404"]
    [:p "I'm sorry, it seems you got lost."]
    [:p "Maybe try some of the links above?"]]))
