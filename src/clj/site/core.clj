(ns site.core
  (:require [hiccup.page :as hp :refer [include-css]]
            [hiccup.util :as hu :refer [url-encode]]
            [clojure.string :as string]))

(def ability-images
  '(["https://cdn.svgporn.com/logos/javascript.svg" "JavaScript"]
    ["https://cdn.svgporn.com/logos/typescript-icon.svg" "TypeScript"]
    ["https://cdn.svgporn.com/logos/clojure.svg" "Clojure"]
    ["/img/cljs-white.svg"
     "ClojureScript"]
    ["https://cdn.svgporn.com/logos/python.svg" "Python"]
    ["https://cdn.svgporn.com/logos/docker.svg" "Docker"]))

(defn get-lang [entry]
  (condp re-find (:permalink entry)
    #"/es/" "es"
    "en"))

(defn get-alt-link [meta entry]
  (let [lang (:lang entry)]
    (if (or (= lang "en") (nil? lang))
      (str "/es" (:permalink entry))
      (string/replace (:permalink entry) #"^/es" ""))))

(defn- ability-colors [quantity]
  (flatten
   (map vector
        (repeat quantity "color-1") (repeat quantity "color-2"))))

(def navbar-links {"en" {:blog "Blog"
                        :contact "Contact Me"}
                   "es" {:blog "Blog"
                        :contact "Contáctame"}})

(defn navbar [meta entry]
  (let [lang (or (:lang entry) "en")
        prefix (if (= "en" lang)
                 ""
                 (str "/" lang))]
    [:nav
     [:div.left-nav
      [:div.logo
       [:a#logo {:href (str prefix "/")}
        [:span "Pablo"]
        [:span "Berganza"]]]
      [:div.nav-items
       [:a#blog-nav.nav-item {:href (str prefix "/blog/")}
        (:blog (get navbar-links lang))] " | "
       [:a#contact-nav.nav-item {:href (str prefix "/contact/")}
        (:contact (get navbar-links lang))]]]
     [:div.right-nav
      [:a#lang-nav.nav-item {:href (get-alt-link meta entry)
                             :rel "alternate"
                             :hreflang (if (= lang "en") "es" "en")
                             :data-barba-prevent "self"}
       (if (= lang "en") "es" "en")]
      [:a.nav-item.sm
       {:href "https://github.com/pablo-abc"
        :target "_blank" :rel "noopener noreferrer"
        :title "GitHub"}
       [:i.fab.fa-github]]
      [:a.nav-item.sm
       {:href "https://www.instagram.com/berganzapablo/"
        :target "_blank" :rel "noopener noreferrer"
        :title "Instagram"}
       [:i.fab.fa-instagram]]
      [:a.nav-item.sm
       {:href "https://www.linkedin.com/in/PabloABC"
        :target "_blank" :rel "noopener noreferrer"
        :title "LinkedIn"}
       [:i.fab.fa-linkedin]]
      [:a.nav-item.sm
       {:href "https://twitter.com/Pablo_ABC"
        :target "_blank" :rel "noopener noreferrer"
        :title "Twitter"}
       [:i.fab.fa-twitter]]]]))

(defn blog? [file]
  (re-find #"/blog/" (or (:permalink file) "")))

(defn head [title meta entry]
  (let [lang (or (keyword (:lang entry)) :en)
        full-title (str title " | " (:site-title meta))
        description (or
                     (:introduction entry)
                     (if (= lang :en)
                       "Personal site and blog for Pablo Berganza."
                       "Sitio y blog personal de Pablo Berganza."))
        url (str (:base-url meta) (subs (or (:permalink entry) " ") 1))]
    [:head
     [:meta {:charset "utf-8"}]
     [:link {:href "https://toot.cafe/@pberganza" :rel "me"}]
     [:link {:href "https://sivar.cafe/@pablo" :rel "me"}]
     ;; FAVICON
     [:link {:rel "apple-touch-icon", :sizes "57x57", :href "/apple-icon-57x57.png"}]
     [:link {:rel "apple-touch-icon", :sizes "60x60", :href "/apple-icon-60x60.png"}]
     [:link {:rel "apple-touch-icon", :sizes "72x72", :href "/apple-icon-72x72.png"}]
     [:link {:rel "apple-touch-icon", :sizes "76x76", :href "/apple-icon-76x76.png"}]
     [:link {:rel "apple-touch-icon", :sizes "114x114", :href "/apple-icon-114x114.png"}]
     [:link {:rel "apple-touch-icon", :sizes "120x120", :href "/apple-icon-120x120.png"}]
     [:link {:rel "apple-touch-icon", :sizes "144x144", :href "/apple-icon-144x144.png"}]
     [:link {:rel "apple-touch-icon", :sizes "152x152", :href "/apple-icon-152x152.png"}]
     [:link {:rel "apple-touch-icon", :sizes "180x180", :href "/apple-icon-180x180.png"}]
     [:link {:rel "icon", :type "image/png", :sizes "192x192", :href "/android-icon-192x192.png"}]
     [:link {:rel "icon", :type "image/png", :sizes "32x32", :href "/favicon-32x32.png"}]
     [:link {:rel "icon", :type "image/png", :sizes "96x96", :href "/favicon-96x96.png"}]
     [:link {:rel "icon", :type "image/png", :sizes "16x16", :href "/favicon-16x16.png"}]
     [:link {:rel "manifest", :href "/manifest.json"}]
     [:meta {:name "msapplication-TileColor", :content "#E34495"}]
     [:meta {:name "msapplication-TileImage", :content "/ms-icon-144x144.png"}]
     [:meta {:name "theme-color", :content "#E34495"}]
     ;; REST
     [:meta {:name "viewport"
             :content "width=device-width, initial-scale=1"}]
     [:meta {:name "author"
             :content (:author meta)}]
     [:meta {:name "description"
             :content description}]
     [:meta {:itemprop "name" :content full-title}]
     [:meta {:itemprop "description" :content description}]
     (when (:banner entry)
       [:meta {:itemprop "image" :content (:banner entry)}])
     [:meta {:name "twitter:card" :content "summary"}]
     [:meta {:name "twitter:title" :content full-title}]
     [:meta {:name "twitter:description" :content description}]
     [:meta {:name "twitter:site" :content "Pablo_ABC"}]
     [:meta {:name "twitter:creator" :content "Pablo_ABC"}]
     (when (:banner entry)
       [:meta {:name "twitter:image:src" :content (:banner entry)}])
     [:meta {:property "og:title" :content full-title}]
     [:meta {:property "og:url" :content url}]
     [:meta {:property "og:site_name" :content (:site-title meta)}]
     [:meta {:property "og:description" :content description}]
     [:meta {:property "og:locale" :content lang}]
     [:meta {:property "fb:admins" :content "1441268341"}]
     [:meta {:property "fb:app_id" :content "2097322913669232"}]
     [:meta {:property "og:type"
             :content
             (if (blog? entry)
               "article"
               "website")}]
     (when (blog? entry)
       [:meta {:property "article:author" :content (:author meta)}])
     (when (:created entry)
       [:meta {:property "article:published_time"
               :content (:created entry)}])
     (when (:banner entry)
       [:meta {:property "og:image" :content (:banner entry)}])
     [:link {:href (get-alt-link meta entry)
             :rel "alternate"
             :hreflang (if (= lang :en) "es" "en")}]
     [:title full-title]
     [:link {:type "text/css"
             :crossorigin "anonymous"
             :integrity "sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
             :href "https://use.fontawesome.com/releases/v5.7.0/css/all.css"
             :rel "stylesheet"}]
     (include-css "/css/site.css")]))

(defn render [title meta entry & content]
  (hp/html5 {:lang (or (:lang entry) "en")}
            (head title meta entry)
            [:body {:data-barba "wrapper"}
             [:header#nav-menu
              (navbar meta entry)]
             (into [:main#page {:data-barba "container"}] content)]))

(defn- home-img-attr [attr]
  (-> {}
     (assoc :src (attr 0))
     (assoc :alt (attr 1))))

(defn home [{:keys [meta entry]}]
  (render "Home" meta entry
          [:section.main
           [:section.main-info
            [:div#profile-box
             [:img#profile-pic {:src "/img/profile-pic.jpeg"
                                :alt "Profile picture"}]
             [:h3#profile-bubble (:welcome entry)]]]
           [:section.about-me
            [:h2 (:aboutme entry)]
            (:content entry)]
           [:section.abilities
            [:h2 (:myabilities entry)]
            (vec (conj
                  (map #(vector :section.ability {:class %2}
                                [:img
                                 (home-img-attr %1)])
                       ability-images
                       (ability-colors (count ability-images)))
                  :section.box-abilities))]]))

(defn- date->num [entry]
  (Integer/valueOf (string/replace (:created entry) #"-" "")))

(defn blogs [{:keys [entries meta entry]}]
  (render "Blog" meta entry
          [:section.blog-posts
           [:header.title
            [:h1 "Blog"]]
           [:section.blog-list
            (if (pos? (count entries))
              (for [blog (sort-by date->num > entries)]
                [:a.blog-item {:href (:permalink blog)}
                 [:article
                  [:h3 (:title blog)]
                  [:p.ttr-created
                   [:span.ttr [:i.far.fa-clock] " " (:ttr blog) " min"]
                   [:span.created [:i.far.fa-calendar-alt] " " (:created blog)]]
                  [:p.introduction (:introduction blog)]]])
              [:h2 "It seems there's nothing here... yet."])]]))

(defn tags [{:keys [entries meta entry]}]
  (let [permalink (str "/blog"
                       (first (string/split (:permalink entry) #"\.")))
        new-entry (assoc entry :permalink permalink)]
    (render (string/capitalize (:tag entry)) meta new-entry
            [:section.blog-posts
             [:header.title
              [:h1 (string/capitalize (:tag entry))]]
             [:section.blog-list
              (for [blog (sort-by date->num > entries)]
                [:a.blog-item {:href (:permalink blog)}
                 [:article
                  [:h3 (:title blog)]
                  [:p.ttr-created
                   [:span.ttr [:i.far.fa-clock] " " (:ttr blog) " min"]
                   [:span.created [:i.far.fa-calendar-alt] " " (:created blog)]]
                  [:p.introduction (:introduction blog)]]])]])))

(defn share-buttons [meta entry]
  (let [lang (or (keyword (:lang entry)) :en)
        url (str (:base-url meta) (subs (or (:permalink entry) " ") 1))
        encoded (url-encode url)
        introduction (url-encode (:introduction entry))
        title (url-encode (:title entry))]
    [:ul {:class "share-buttons"}
     [:li (if (= lang :es) "Compártelo:" "Share this:")]
     [:li
      [:a {:href (str "https://www.facebook.com/sharer/sharer.php?u="
                      encoded
                      "&quote="
                      introduction),
           :target "_blank",
           :title "Share on Facebook"}
       [:i {:class "fab fa-facebook-square fa-2x", :aria-hidden "true"}]
       [:span {:class "sr-only"}
        "Share on Facebook"]
       ]]
     [:li
      [:a {:href (str "https://twitter.com/intent/tweet?source="
                      encoded
                      "&text="
                      introduction
                      ":%20"
                      encoded
                      "&via=Pablo_ABC"),
           :target "_blank", :title "Tweet"}
       [:i {:class "fab fa-twitter-square fa-2x", :aria-hidden "true"}]
       [:span {:class "sr-only"}
        "Tweet"]
       ]]
     [:li
      [:a {:href (str "https://getpocket.com/save?url="
                      encoded
                      "&title="
                      title),
           :target "_blank", :title "Add to Pocket"}
       [:i {:class "fab fab fa-get-pocket fa-2x", :aria-hidden "true"}]
       [:span {:class "sr-only"}
        "Add to Pocket"]
       ]]
     [:li
      [:a {:href (str "http://www.reddit.com/submit?url="
                      encoded
                      "&title="
                      title),
           :target "_blank", :title "Submit to Reddit"}
       [:i {:class "fab fa-reddit-square fa-2x", :aria-hidden "true"}]
       [:span {:class "sr-only"}
        "Submit to Reddit"]
       ]]
     [:li
      [:a {:href (str "http://www.linkedin.com/shareArticle?mini=true&url="
                      encoded
                      "&title="
                      title
                      "&summary="
                      introduction
                      "&source="
                      encoded),
           :target "_blank", :title "Share on LinkedIn"}
       [:i {:class "fab fa-linkedin fa-2x", :aria-hidden "true"}]
       [:span {:class "sr-only"}
        "Share on LinkedIn"]
       ]]]))

(defn blog [{:keys [entry meta]}]
  (let [lang (or (:lang entry) "en")
        prefix (if (= "en" lang)
                 "/"
                 (str "/" lang "/"))]
    (render
     (:title entry) meta entry
     [:article#blog
      [:header.title
       [:h1 (:title entry)]
       [:h4.introduction (:introduction entry)]]
      (when (:banner entry)
        [:img.banner {:src (:banner entry)
                      :alt (:bannertitle entry)
                      :title (:bannertitle entry)}])
      [:div.ttr-created
       [:span.ttr [:i.far.fa-clock] " " (:ttr entry) " min"]
       [:span.created [:i.far.fa-calendar-alt] " " (:created entry)]]
      [:div.tag-links
       (if (= lang "en") "Tags:" "Etiquetas:")
       (for [tag (:tags entry)]
         [:a.tag-link {:href (str prefix "blog/" tag "/")} tag])]
      (let [content (:content entry)]
        [:section.content content])
      [:footer
       (share-buttons meta entry)]])))

(defn contact [{:keys [meta entry]}]
  (render
   "Contact Me" meta entry
   [:section.contact
    [:header.title
     [:h1 (:contactme entry)]]
    [:section
     [:p (:content entry)]
     [:dl
      [:dt (:socialmedia entry)]
      [:dd
       [:i.fab.fa-github] " "
       [:a {:href "https://github.com/pablo-abc" :target "_blank"
            :rel "noopener noreferrer"}
        "GitHub"]]
      [:dd [:i.fab.fa-twitter] " "
       [:a {:href "https://twitter.com/Pablo_ABC" :target "_blank"
            :rel "noopener noreferrer"}
        "Twitter"]]
      [:dd [:i.fab.fa-instagram] " "
       [:a {:href "https://www.instagram.com/berganzapablo/"
            :target "_blank" :rel "noopener noreferrer"}
        "Instagram"]]
      [:dd [:i.fab.fa-linkedin] " "
       [:a {:href "https://www.linkedin.com/in/PabloABC" :target "_blank"
            :rel "noopener noreferrer"}
        "Facebook"]]
      [:dt (:email entry)]
      [:dd
       [:i.fas.fa-envelope] " "
       [:a
        {:href "mailto:pablo@berganza.dev"}
        "pablo@berganza.dev"]]]]]))

(defn not-found [{:keys [meta entry]}]
  (render
   "Not Found" meta entry
   [:section.not-found
    [:header
     [:h1 "404"]]
    [:section.message
     [:h3 "It seems you're lost."]
     [:h3 "Maybe try some of the links above?"]]]))
