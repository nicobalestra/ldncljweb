(ns ldncljweb.views.root
  (:use [noir.core :only [defpage defpartial]]
        [noir.response :only [content-type]]
        [hiccup.core :only [html]]
        [hiccup.page :only [include-js]]
        [net.cgrand.enlive-html :only [deftemplate append html-snippet html-content]])
  (:require [noir.session :as session]
            [ldncljweb.models.posts :as posts])
  (:import [java.util Date]))

(defpartial login-panel [{:keys [email] :as user-info }]
  (if user-info
    [:p  email]
    [:a {:href "#" :id "browserid"} "Sign In"]
    )
  )

(deftemplate main "public/index.html" [user-info message]
  [:#login-status]
  (html-content

    (login-panel user-info))
    [:#posts]
             (html-content (html message)))




(defpage "/" []
  (content-type "text/html"
    (main (session/get :user-info) (html (map (fn [p] [:div {:class "post"}
                              [:h1 (p :title)]
                              [:p {:class "date"} (p :date)]
                              [:p {:class "post-body"} (p :body)]])
                     (posts/find-most-recent-five))))))




(deftemplate repl "public/repl.html" [user-info message]
  [:#login-status]
     (html-content (login-panel user-info))
   [:div#repl]
             (html-content message))

(comment (defpage repl-get "/repl" {:keys [res]}
  (content-type "text/html"
                (repl (session/get :user-info)
                      (html
                       [:h1 "Clojure REPL"]
                       [:div#repl-out-container
                        [:div {:id "repl-output"}
                         ]]
                       [:div "Ctrl+Enter/click on 'Evaluate' to submit an expression. Up/Down to navigate the history."]
                       [:div#repl-in-container
                        [:label {:for "repl-command"}] [:textarea {:id "repl-command" :name "repl-command" :value res}]])))))
