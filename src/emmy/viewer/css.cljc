(ns emmy.viewer.css)

(def css-map
  "Map of package keyword to a sequence of the CSS urls required to render viewers
  from that package.

  These will be moved into subprojects at some point, so don't rely directly on
  this var!"
  {:mafs ["https://unpkg.com/computer-modern@0.1.2/cmu-serif.css"
          "https://unpkg.com/mafs@0.16.0/core.css"
          "https://unpkg.com/mafs@0.16.0/font.css"]
   :jsxgraph ["https://cdn.jsdelivr.net/npm/jsxgraph@1.5.0/distrib/jsxgraph.css"]
   :mathbox ["https://unpkg.com/mathbox@2.3.1/build/mathbox.css"]
   :mathlive ["https://unpkg.com/mathlive@0.85.1/dist/mathlive-static.css"
              "https://unpkg.com/mathlive@0.85.1/dist/mathlive-fonts.css"]})
