(ns ldncljweb.repl
  (:require [fetch.remotes :as remotes]
            [crate.core :as crate])
  (:use [jayq.core :only [$ append delegate data clj->js]])
  (:use-macros [crate.def-macros :only [defpartial]]))

;; borrowed from ibdknox/jayq
(defn map->js [m]
  (let [out (js-obj)]
    (doseq [[k v] m]
      (aset out (name k) v))
    out))



(def document ($))
(def $repl-div ($ :#repl-in-container))
(def $repl-input ($ :#repl-command))
(def $repl-out ($ :#repl-out-container))
(def $repl-command (first ($ :#repl-command)))
(def $repl-output (first ($ :#repl-output)))
(def history (atom []))
(def curr-history (atom  -1))
(declare editor)
(declare results)


;;;;;;;;;;;; REPL POP UP ;;;;;;;;;;;;
(def $repl-container($ :#repl))
(def $try-repl ($ :#try-link))

(delegate $try-repl nil :click
          (fn [e]
            (.lightbox_me $repl-container (map->js {
                          "centered" true
                          "onLoad" (fn []
																			(def editor
  																					(if-not (nil? js/CodeMirror) (.fromTextArea  js/CodeMirror $repl-command
                                      				(map->js  {:mode "text/x-clojure"
                                              				   :lineNumbers true
                                                 				 :autofocus true
                                                         :theme "blackboard"
                                                 			   :extraKeys (map->js {"Ctrl-Enter" repl-submit
                                                                              "Up" history-up
                                                                              "Down" history-down})}))))
                                     (.setSize editor 600 100)
                                     
                                     (def results 
                                        		(if-not (nil? js/CodeMirror) 
                                              	(new js/CodeMirror $repl-output (map->js {:readOnly true
                                                                                          :theme "blackboard"}))))
                                     (.setSize results 600 200))}))
            (.preventDefault e)))


;;;;;;;;;;; REPL EDITOR ;;;;;;;;;;;;;;;;;


(defn set-editor [txt]
  (.setValue editor txt))


(defn repl-submit
"Called by either pressing Ctrl+Enter or clicking on the 'Evaluate' button"
  [_]
  (let [param (apply str  (.getValue editor))]
       (reset! curr-history -1)
       (swap! history conj param)
       (remotes/remote-callback "repl" [param] repl-callback)
       (set-editor "")))


(defn history-up [key]
  (if (not (nil? @history))
    (swap! curr-history dec)
    (if (<= @curr-history -1)
      (reset! curr-history (- (count @history) 1)))
    (set-editor  (nth @history @curr-history))))

(defn history-down [key]
  (if (not (nil? @history))
    (swap! curr-history inc)
    (if (= @curr-history (count @history))
      (reset! curr-history 0))
    (set-editor  (nth @history @curr-history))))


(defpartial button [{:keys [label action param]}]
  [:a.button {:href "#"} label])

(append $repl-div (button {:label "Evaluate"}))

(defn repl-callback
"Function called back after calling the remote providing the result of the expression."
  [data]
  (let [curr-history (.getValue results)
        new-expr  (str "user => " (:expr data) "\n" (get data :message (:result data)))]
    (.setValue results (str curr-history "\n" new-expr))
    (let [line-nums (.lineCount results)]
      (try
        (.setLineClass results "repl-error")
        (.setCursor results (+ line-nums 1))
        (catch Error e (js/alert "Error while setting the cursor " e))))))


(delegate $repl-div button :click
          (fn [e]
            (.preventDefault e)
            (repl-submit)
             (this-as me)))


