(ns ldncljweb.server
  (:require [noir.server :as server]
            [noir.fetch.remotes :as remotes])
  (:gen-class))

(server/load-views "src/ldncljweb/views/")
(server/add-middleware remotes/wrap-remotes)

(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))
        port (Integer. (get (System/getenv) "PORT" "8080"))]
    (server/start port {:mode mode
                        :ns 'ldncljweb})))
