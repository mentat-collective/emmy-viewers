goog.provide('nextjournal.clojure_mode');
var module$node_modules$$lezer$highlight$dist$index_cjs=shadow.js.require("module$node_modules$$lezer$highlight$dist$index_cjs", {});
var module$node_modules$$codemirror$language$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$language$dist$index_cjs", {});
var module$node_modules$lezer_clojure$dist$index_cjs=shadow.js.require("module$node_modules$lezer_clojure$dist$index_cjs", {});
nextjournal.clojure_mode.fold_node_props = (function (){var coll_span = (function (tree){
return ({"from": (nextjournal.clojure_mode.node.start(tree) + (1)), "to": (nextjournal.clojure_mode.node.end(tree) - (1))});
});
return ({"Vector":coll_span,"Map":coll_span,"List":coll_span});
})();
nextjournal.clojure_mode.style_tags = cljs.core.clj__GT_js(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"LineComment","LineComment",1087879618),new cljs.core.Keyword(null,"NS","NS",-764805694),"\"\\\"\"","VarName/Symbol","DocString/...",new cljs.core.Keyword(null,"Boolean","Boolean",20610060),new cljs.core.Keyword(null,"Keyword","Keyword",1804369776),new cljs.core.Keyword(null,"Number","Number",2146289584),new cljs.core.Keyword(null,"RegExp","RegExp",137681940),new cljs.core.Keyword(null,"StringContent","StringContent",-877262859),"Operator/Symbol",new cljs.core.Keyword(null,"Discard!","Discard!",-1586397699),new cljs.core.Keyword(null,"DefLike","DefLike",851541087),new cljs.core.Keyword(null,"Nil","Nil",-1671759041)],[module$node_modules$$lezer$highlight$dist$index_cjs.tags.lineComment,module$node_modules$$lezer$highlight$dist$index_cjs.tags.keyword,module$node_modules$$lezer$highlight$dist$index_cjs.tags.string,module$node_modules$$lezer$highlight$dist$index_cjs.tags.definition(module$node_modules$$lezer$highlight$dist$index_cjs.tags.variableName),module$node_modules$$lezer$highlight$dist$index_cjs.tags.emphasis,module$node_modules$$lezer$highlight$dist$index_cjs.tags.atom,module$node_modules$$lezer$highlight$dist$index_cjs.tags.atom,module$node_modules$$lezer$highlight$dist$index_cjs.tags.number,module$node_modules$$lezer$highlight$dist$index_cjs.tags.regexp,module$node_modules$$lezer$highlight$dist$index_cjs.tags.string,module$node_modules$$lezer$highlight$dist$index_cjs.tags.keyword,module$node_modules$$lezer$highlight$dist$index_cjs.tags.comment,module$node_modules$$lezer$highlight$dist$index_cjs.tags.keyword,module$node_modules$$lezer$highlight$dist$index_cjs.tags.null]));
nextjournal.clojure_mode.parser = module$node_modules$lezer_clojure$dist$index_cjs.parser;
nextjournal.clojure_mode.syntax = (function nextjournal$clojure_mode$syntax(var_args){
var G__89292 = arguments.length;
switch (G__89292) {
case 0:
return nextjournal.clojure_mode.syntax.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return nextjournal.clojure_mode.syntax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.syntax.cljs$core$IFn$_invoke$arity$0 = (function (){
return nextjournal.clojure_mode.syntax.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.parser);
}));

(nextjournal.clojure_mode.syntax.cljs$core$IFn$_invoke$arity$1 = (function (parser){
return module$node_modules$$codemirror$language$dist$index_cjs.LRLanguage.define(({"parser": parser.configure(({"props": [nextjournal.clojure_mode.extensions.formatting.props,module$node_modules$$codemirror$language$dist$index_cjs.foldNodeProp.add(nextjournal.clojure_mode.fold_node_props),module$node_modules$$lezer$highlight$dist$index_cjs.styleTags(nextjournal.clojure_mode.style_tags)]}))}));
}));

(nextjournal.clojure_mode.syntax.cljs$lang$maxFixedArity = 1);

nextjournal.clojure_mode.complete_keymap = nextjournal.clojure_mode.keymap.complete;
nextjournal.clojure_mode.builtin_keymap = nextjournal.clojure_mode.keymap.builtin;
nextjournal.clojure_mode.paredit_keymap = nextjournal.clojure_mode.keymap.paredit;
nextjournal.clojure_mode.default_extensions = [nextjournal.clojure_mode.syntax.cljs$core$IFn$_invoke$arity$1(module$node_modules$lezer_clojure$dist$index_cjs.parser),nextjournal.clojure_mode.extensions.close_brackets.extension(),nextjournal.clojure_mode.extensions.match_brackets.extension(),nextjournal.clojure_mode.extensions.selection_history.extension(),nextjournal.clojure_mode.extensions.formatting.ext_format_changed_lines(),nextjournal.clojure_mode.extensions.eval_region.extension(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifier","modifier",1634442788),"Alt"], null))];

//# sourceMappingURL=nextjournal.clojure_mode.js.map
