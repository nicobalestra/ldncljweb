(defproject ldncljweb "0.1.0-SNAPSHOT"
            :description "FIXME: write this!"
            :dependencies [[org.clojure/clojure "1.4.0"]
                           [noir "1.3.0-beta1"]
                           [enlive "1.0.0"]
                           [congomongo "0.1.9"]
                           [clj-time "0.4.2"]

                           ;; ClojureScript
                           [jayq "0.1.0-alpha2"]
                           [cheshire "4.0.0"]
                           [clj-http "0.4.3"]
                           [clojail "1.0.3"]
                           [fetch "0.1.0-alpha2"]
                           [jayq "0.3.2"]
                           [crate "0.2.2"]]


            :plugins [[lein-cljsbuild "0.2.9"]]
            :cljsbuild  {:builds
                         [{:builds nil,
                           :source-path "src-cljs",
                           :compiler {:pretty-print true,
                                      :output-to "resources/public/js/cljs.js",
                                      :optimizations :simple}}]}

            :main ldncljweb.server)
