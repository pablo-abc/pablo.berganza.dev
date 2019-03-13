(ns site.core
  (:require [hiccup.page :as hp :refer [include-css]]))

(def ability-images
  '("https://cdn.svgporn.com/logos/javascript.svg"
    "https://cdn.svgporn.com/logos/typescript-icon.svg"
    "https://cdn.svgporn.com/logos/clojure.svg"
    "https://raw.githubusercontent.com/cljs/logo/master/cljs-white.png"
    "https://cdn.svgporn.com/logos/python.svg"
    "https://cdn.svgporn.com/logos/docker.svg"))

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
    [:a.nav-item {:href "https://github.com/pablo-abc" :target "_blank"}
     [:i.fab.fa-github]]
    [:a.nav-item {:href "https://www.instagram.com/berganzapablo/"
                  :target "_blank"}
     [:i.fab.fa-instagram]]
    [:a.nav-item {:href "https://www.facebook.com/Pablo.ABC"
                  :target "_blank"}
     [:i.fab.fa-facebook]]
    [:a.nav-item {:href "https://twitter.com/Pablo_ABC" :target "_blank"}
     [:i.fab.fa-twitter]]]])

(defn head
  ([title meta] (head title meta nil))
  ([title meta entry]
   [:head
    [:meta {:charset "utf-8"}]
    [:meta {:name "viewport"
            :content "width=device-width, initial-scale=1"}]
    [:meta {:name "author"
            :content (:author meta)}]
    [:title (str title " | " (:site-title meta))]
    [:link {:type "text/css"
            :crossorigin "anonymous"
            :integrity "sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
            :href "https://use.fontawesome.com/releases/v5.7.0/css/all.css"
            :rel "stylesheet"}]
    (include-css "/css/site.css")]))

(defn render [title title-site & content]
  (hp/html5
   (head title title-site)
   [:body
    [:header#nav-menu
     (navbar)]
    (into [:section#page] content)]))

(defn page [{:keys [entry meta] :as obj}]
  (render (:title entry) meta
          [:h1 (:title entry)]
          [:p (:content entry)]))

(defn- home-img-attr [source]
  (cond-> {}
    source (assoc :src source)))

(defn home [{:keys [meta]}]
  (render "Home" meta
          [:section.main
           [:section.main-info
            [:div#profile-box
             [:img#profile-pic {:src (str "https://scontent.fsal2-1.fna.fbcdn.net/"
                                          "v/t1.0-9/30516719_10216530245715580_95"
                                          "9662321477615616_n.jpg?_nc_cat=109&_nc_"
                                          "ht=scontent.fsal2-1.fna&oh=6c0dc7645989"
                                          "74ffae0215fb767e92b6&oe=5CB5AD16")}]
             [:h3#profile-bubble "Hi, I make web stuff! Welcome!"]]]
           [:section.about-me
            [:h2 "About Me"]
            [:p "Hello! My name is Pablo Berganza, and I am a web developer established in El Salvador."]]
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
  (render "Blog" meta
          [:section.blog-posts
           [:header.title
            [:h1 "Blog"]]
           [:section#blog-list
            (if (pos? (count entries))
              (for [blog (sort-by :index entries)]
                [:a.blog-item {:href (:permalink blog)}
                 [:article
                  [:h3 (:title blog)]
                  [:p.created (:created blog)]
                  [:p.introduction (:introduction blog)]]])
              [:h2 "It seems there's nothing here... yet."])]]))

(defn blog [{:keys [entry meta]}]
  (render
   (:title entry) meta
   [:article#blog
    [:header.title
     [:h1 (:title entry)]
     [:p.introduction (:introduction entry)]]
    [:p.created  (:created entry)]
    (let [content (:content entry)]
      [:section.content content])]))

(defn contact [{:keys [meta]}]
  (render
   "Contact Me" meta
   [:section.contact
    [:header.title
     [:h1 "Contact Me"]]
    [:section
     [:p "If you have an idea you would like to give life to,"
      " like a web site or a web application,"
      " I can help you make it. You can contact me via any of"
      " the following:"]
     [:dl
      [:dt "Social Media"]
      [:dd
       [:i.fab.fa-github] " "
       [:a {:href "https://github.com/pablo-abc" :target "_blank"}
        "GitHub"]]
      [:dd [:i.fab.fa-twitter] " "
       [:a {:href "https://twitter.com/Pablo_ABC" :target "_blank"}
        "Twitter"]]
      [:dd [:i.fab.fa-instagram] " "
       [:a {:href "https://www.instagram.com/berganzapablo/"
            :target "_blank"}
        "Instagram"]]
      [:dd [:i.fab.fa-facebook] " "
       [:a {:href "https://www.facebook.com/Pablo.ABC" :target "_blank"}
        "Facebook"]]
      [:dt "E-Mail"]
      [:dd
       [:i.fas.fa-at] " "
       [:a
        {:href "mailto:pablo@berganza.dev?subject=[SITE]%20Consultation"}
        "pablo@berganza.dev"]]]]]))


(defn not-found [{:keys [meta]}]
  (render
   "Not Found" meta
   [:section.not-found
    [:header
     [:h1 "404"]]
    [:section.message
     [:p "I'm sorry, it seems you got lost."]
     [:p "Maybe try some of the links above?"]]]))
