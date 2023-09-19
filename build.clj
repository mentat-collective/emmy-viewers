(ns build
  "tools.build declarations for the emmy-viewers library."
  (:require [clojure.data.xml :as xml]
            [clojure.tools.build.api :as b]
            [clojure.tools.build.tasks.write-pom :as write-pom]))

(xml/alias-uri 'pom "http://maven.apache.org/POM/4.0.0")

(alter-var-root
 #'write-pom/to-dep
 (fn [old]
   (fn [[_ {:keys [mvn/scope]} :as pair]]
     (cond-> (old pair)
       scope
       (conj [::pom/scope scope])))))

;; ## Variables

(def lib 'org.mentat/emmy-viewers)
(def version "0.3.1")
(def pom-deps
  {'org.babashka/sci
   {:mvn/version "0.7.39"
    :mvn/scope "provided"}
   'io.github.nextjournal/clerk
   {:mvn/version "0.14.919"
    :mvn/scope "provided"}
   'djblue/portal
   {:mvn/version "0.42.1"
    :mvn/scope "provided"}
   'lambdaisland/deep-diff2
   {:mvn/version "2.8.190"
    :mvn/scope "provided"}
   'hickory/hickory
   {:mvn/version "0.7.1"
    :mvn/scope "provided"}})

(defn- ->version
  ([] version)
  ([suffix]
   (if suffix
     (format "%s-%s" version suffix)
     version)))

;; source for jar creation.
(def class-dir "target/classes")
(def basis
  (b/create-basis
   {:project "deps.edn"
    :extra {:deps pom-deps}}))

(defn ->jar-file [version]
  (format "target/%s-%s.jar" (name lib) version))

;; ## Tasks

(defn clean [opts]
  (println "\nCleaning target...")
  (b/delete {:path "target"})
  opts)

(defn jar
  "Builds a jar containing all library code and

  Optionally supply a string via `:version-suffix` to append `-<suffix>` to the
  generated version."
  [{:keys [version-suffix] :as opts}]
  (let [version  (->version version-suffix)
        jar-file (->jar-file version)]
    (b/write-pom {:class-dir class-dir
                  :lib lib
                  :version version
                  :scm
                  {:tag (str "v" version)
                   :connection "scm:git:git://github.com/mentat-collective/emmy-viewers.git"
                   :developConnection "scm:git:ssh://git@github.com/mentat-collective/emmy-viewers.git"
                   :url "https://github.com/mentat-collective/emmy-viewers"}
                  :basis basis
                  :src-pom "template/pom.xml"
                  :src-dirs ["src"]
                  :resource-dirs ["resources"]})
    (doseq [f ["README.md" "LICENSE" "deps.edn"]]
      (b/copy-file {:src f :target (format "%s/%s" class-dir f)}))
    (b/copy-dir {:src-dirs ["src" "resources"]
                 :target-dir class-dir})
    (b/jar {:class-dir class-dir
            :jar-file jar-file})
    (println (str "Created " jar-file "."))
    (assoc opts
           :jar-file jar-file
           :built-jar-version version)))

(defn install
  "Clean, generate a jar and install the jar into the local Maven repository."
  [opts]
  (clean opts)
  (let [{:keys [built-jar-version jar-file]} (jar opts)]
    (b/install {:class-dir class-dir
                :lib lib
                :version built-jar-version
                :basis basis
                :jar-file jar-file})
    (println (str "Installed " jar-file " to local Maven repository."))
    opts))

(defn publish
  "Generates a jar with all project sources and resources and publishes it to
  Clojars."
  [opts]
  (clean opts)
  (let [{:keys [jar-file]} (jar opts)]
    (println (str "Publishing " jar-file " to Clojars!"))
    ((requiring-resolve 'deps-deploy.deps-deploy/deploy)
     (merge {:installer :remote
             :sign-releases? false
             :artifact jar-file
             :pom-file (b/pom-path {:lib lib :class-dir class-dir})}
            opts))
    ;; TODO put a catch here if the version already exists?
    (println "Published.")
    opts))
