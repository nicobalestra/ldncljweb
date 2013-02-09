(ns ldncljweb.views.repl
  (:require [noir.core :as c]
            [noir.response :as resp]
            [clojail.core :as cj]
            [clojail.testers :as cjt]
            [ldncljweb.models.repl :as repl]
            [ldncljweb.views.root :as root]
            [noir.fetch.remotes :as nf]
            [hiccup.core :as h]))


(comment
  (c/defpage repl-post [:post "/repl"] {:keys [params]}
    (println "PARAMS: " params)
    (
     let [{:keys [expr result error message] :as res} (repl/evaluate-request params)
          data (if error
                 res
                 (let [[out res] result]
                   {:expr (pr-str expr)
                    :result (str out (pr-str res))}))]

      (c/render [:get "/repl"] {:res data})
      )))


(nf/defremote repl [eval-expr]
  (let [{:keys [expr result error message] :as res} (repl/evaluate-request eval-expr)
        data (if error
               (merge  res {:expr eval-expr})
               (let [[out res] result]
                 {:expr (pr-str expr)
                  :result (str out (pr-str res))}))]
    (println "Returning " data)
    data))
