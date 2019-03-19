(ns site.core
  (:require [hiccup.page :as hp :refer [include-css]]
            [hiccup.util :as hu :refer [url-encode]]
            [clojure.string :as string]))

(def ability-images
  '(["https://cdn.svgporn.com/logos/javascript.svg" "JavaScript"]
    ["https://cdn.svgporn.com/logos/typescript-icon.svg" "TypeScript"]
    ["https://cdn.svgporn.com/logos/clojure.svg" "Clojure"]
    ["https://raw.githubusercontent.com/cljs/logo/master/cljs-white.png"
     "ClojureScript"]
    ["https://cdn.svgporn.com/logos/python.svg" "Python"]
    ["https://cdn.svgporn.com/logos/docker.svg" "Docker"]))

(defn get-lang [entry]
  (condp re-find (:permalink entry)
    #"/es/" :es
    :en))

(defn get-alt-link [meta entry]
  (let [lang (:lang meta)]
    (if (or (= lang "en") (nil? lang))
      (str "/es" (:permalink entry))
      (string/replace (:permalink entry) #"^/es" ""))))

(get-alt-link {:link-prefix ""
               :lang "en"}
              {:permalink "/blog"})

(defn- add-language [meta entry]
  (let [lang (name (get-lang entry))]
    (-> meta
       (assoc :lang lang)
       (assoc :link-prefix (if (= "en" lang)
                             ""
                             (str "/" lang))))))

(defn- ability-colors [quantity]
  (flatten
   (map vector
        (repeat quantity "color-1") (repeat quantity "color-2"))))

(def navbar-links {:en {:blog "Blog"
                        :contact "Contact Me"}
                   :es {:blog "Blog"
                        :contact "Contáctame"}})

(defn navbar [meta entry]
  (let [prefix (or (:link-prefix meta) "")
        lang (or (keyword (:lang meta)) :en)]
    [:nav
     [:div.left-nav
      [:div.logo
       [:a#logo {:href (str prefix "/")}
        [:span "Pablo"]
        [:span "Berganza"]]]
      [:div.nav-items
       [:a.nav-item {:href (str prefix "/blog")}
        (:blog (lang navbar-links))] " | "
       [:a.nav-item {:href (str prefix "/contact")}
        (:contact (lang navbar-links))]]]
     [:div.right-nav
      [:a.nav-item {:href (get-alt-link meta entry)}
       (if (= lang :en) "es" "en")]
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
        :title "Facebook"}
       [:i.fab.fa-linkedin]]
      [:a.nav-item.sm
       {:href "https://twitter.com/Pablo_ABC"
        :target "_blank" :rel "noopener noreferrer"
        :title "Twitter"}
       [:i.fab.fa-twitter]]]]))

(defn blog? [file]
  (re-find #"/blog/" (or (:permalink file) "")))

(defn head [title meta entry]
  (let [lang (or (keyword (:lang meta)) :en)
        full-title (str title " | " (:site-title meta))
        description (or
                     (:introduction entry)
                     (if (= lang :en)
                       "Personal site and blog for Pablo Berganza."
                       "Sitio y blog personal de Pablo Berganza."))
        url (str (:base-url meta) (subs (or (:permalink entry) " ") 1))]
    [:head
     [:meta {:charset "utf-8"}]
     [:meta {:name "pocket-site-verification"
             :content "d7bd427abed5c350943503bc567601"}]
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
  (hp/html5 {:lang (or (:lang meta) "en")}
            (head title meta entry)
            [:body
             [:header#nav-menu
              (navbar meta entry)]
             (into [:main#page] content)]))

(defn- home-img-attr [attr]
  (-> {}
     (assoc :src (attr 0))
     (assoc :alt (attr 1))))

(defn home [{:keys [meta entry]}]
  (render "Home" (add-language meta entry) entry
          [:section.main
           [:section.main-info
            [:div#profile-box
             [:img#profile-pic {:src (str "https://scontent.fsal2-1.fna.fbcdn.net/"
                                          "v/t1.0-9/30516719_10216530245715580_95"
                                          "9662321477615616_n.jpg?_nc_cat=109&_nc_"
                                          "ht=scontent.fsal2-1.fna&oh=6c0dc7645989"
                                          "74ffae0215fb767e92b6&oe=5CB5AD16")
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
  (render "Blog" (add-language meta entry) entry
          [:section.blog-posts
           [:header.title
            [:h1 "Blog"]]
           [:section#blog-list
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

(defn share-buttons [meta entry]
  (let [lang (or (keyword (:lang meta)) :en)
        url (str (:base-url meta) (subs (or (:permalink entry) " ") 1))
        encoded (url-encode url)]
    [:ul {:class "share-buttons"}
     [:li (if (= lang :es) "Compártelo:" "Share this:")]
     [:li
      [:a {:href (str "https://www.facebook.com/sharer/sharer.php?u="
                      encoded
                      "&quote="
                      (:introduction entry)),
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
                      (:introduction entry)
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
                      (:title entry)),
           :target "_blank", :title "Add to Pocket"}
       [:i {:class "fab fab fa-get-pocket fa-2x", :aria-hidden "true"}]
       [:span {:class "sr-only"}
        "Add to Pocket"]
       ]]
     [:li
      [:a {:href (str "http://www.reddit.com/submit?url="
                      encoded
                      "&title="
                      (:title entry)),
           :target "_blank", :title "Submit to Reddit"}
       [:i {:class "fab fa-reddit-square fa-2x", :aria-hidden "true"}]
       [:span {:class "sr-only"}
        "Submit to Reddit"]
       ]]
     [:li
      [:a {:href (str "http://www.linkedin.com/shareArticle?mini=true&url="
                      encoded
                      "&title="
                      (:title entry)
                      "&summary="
                      (:introduction entry)
                      "&source="
                      encoded),
           :target "_blank", :title "Share on LinkedIn"}
       [:i {:class "fab fa-linkedin fa-2x", :aria-hidden "true"}]
       [:span {:class "sr-only"}
        "Share on LinkedIn"]
       ]]]))

(defn blog [{:keys [entry meta]}]
  (render
   (:title entry) (add-language meta entry) entry
   [:article#blog
    [:header.title
     [:h1 (:title entry)]
     [:p.introduction (:introduction entry)]]
    (when (:banner entry)
      [:img.banner {:src (:banner entry)
                    :alt (:bannertitle entry)
                    :title (:bannertitle entry)}])
    [:div.ttr-created
     [:span.ttr [:i.far.fa-clock] " " (:ttr entry) " min"]
     [:span.created [:i.far.fa-calendar-alt] " " (:created entry)]]
    (let [content (:content entry)]
      [:section.content content])
    [:footer
     (share-buttons (add-language meta entry) entry)]]))

(defn contact [{:keys [meta entry]}]
  (render
   "Contact Me" (add-language meta entry) entry
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
