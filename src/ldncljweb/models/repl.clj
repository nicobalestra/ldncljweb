(ns ldncljweb.models.repl
  (:require [clojail.core :as cj]
            [clojail.testers :as cjt]
            [noir.session :as session]
            [clojure.stacktrace :as cs]
            )
  (:import java.io.StringWriter
           java.util.concurrent.TimeoutException))


(def ldncljweb-tester (conj cjt/secure-tester-without-def (cjt/blanket "ldncljweb" "noir" )))

(defn make-sandbox []
  (cj/sandbox ldncljweb-tester
              :timeout 5000
              :init (do (require '[clojure.repl :refer [doc source]])
                        (future (Thread/sleep 600000)
                              (-> *ns* .getName remove-ns)))))




(defn eval-form [form sb]
  (with-open [out (StringWriter.)]
    (let [result (sb form {#'*out* out})]
      {:expr form
       :result [out result]}))
)

(defn eval-string [expr sandbox]
  (let [form (binding [*read-eval* false] (read-string expr))]
    (eval-form form sandbox))
  )

(defn find-sandbox [old]
  ( if-let [sandbox (get old "sandbox")]
    old
    (assoc old "sandbox" (make-sandbox))
    ))

(defn get-sandbox []
  (get (session/swap! find-sandbox) "sandbox"))

(defn evaluate-request
  "Evaluate the given expression and returns a map with the results
TODO: DEFINE THE MAP STRUCTURE"
  [expr]
  (println "DEBUG " expr)
  (try
    (eval-string  expr (get-sandbox))
    (catch TimeoutException _
      {:error true :message "Timeout!"})
    (catch Exception e
      {:error true :message (str (cs/root-cause e))})))
