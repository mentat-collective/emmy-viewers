import "./cljs_env.js";
goog.provide('nextjournal.clerk.render.code');
var module$node_modules$$codemirror$language$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$language$dist$index_cjs", {});
var module$node_modules$$lezer$highlight$dist$index_cjs=shadow.js.require("module$node_modules$$lezer$highlight$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$nextjournal$lang_clojure$dist$index_cjs=shadow.js.require("module$node_modules$$nextjournal$lang_clojure$dist$index_cjs", {});
nextjournal.clerk.render.code.highlight_style = module$node_modules$$codemirror$language$dist$index_cjs.HighlightStyle.define(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.meta,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-meta"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.link,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-link"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.heading,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-heading"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.emphasis,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-italic"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.strong,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-strong"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.strikethrough,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-strikethrough"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.keyword,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-keyword"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.atom,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-atom"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.bool,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-bool"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.url,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-url"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.contentSeparator,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-contentSeparator"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.labelName,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-labelName"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.literal,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-literal"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.inserted,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-inserted"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.string,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-string"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.deleted,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-deleted"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.regexp,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-regexp"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.escape,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-escape"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.special(module$node_modules$$lezer$highlight$dist$index_cjs.tags.string),new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-string"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.definition(module$node_modules$$lezer$highlight$dist$index_cjs.tags.variableName),new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-variableName"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.local(module$node_modules$$lezer$highlight$dist$index_cjs.tags.variableName),new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-variableName"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.typeName,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-typeName"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.namespace,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-namespace"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.className,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-className"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.special(module$node_modules$$lezer$highlight$dist$index_cjs.tags.variableName),new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-variableName"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.macroName,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-macroName"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.definition(module$node_modules$$lezer$highlight$dist$index_cjs.tags.propertyName),new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-propertyName"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.comment,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-comment"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),module$node_modules$$lezer$highlight$dist$index_cjs.tags.invalid,new cljs.core.Keyword(null,"class","class",-2030961996),"cmt-invalid"], null)], null)));
/**
 * Returns a lazy-seq of ranges inside a RangeSet (like a Decoration set)
 */
nextjournal.clerk.render.code.rangeset_seq = (function nextjournal$clerk$render$code$rangeset_seq(var_args){
var G__75450 = arguments.length;
switch (G__75450) {
case 1:
return nextjournal.clerk.render.code.rangeset_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.render.code.rangeset_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.render.code.rangeset_seq.cljs$core$IFn$_invoke$arity$1 = (function (rset){
return nextjournal.clerk.render.code.rangeset_seq.cljs$core$IFn$_invoke$arity$2(rset,(0));
}));

(nextjournal.clerk.render.code.rangeset_seq.cljs$core$IFn$_invoke$arity$2 = (function (rset,from){
var iterator = rset.iter(from);
return (function nextjournal$clerk$render$code$step(){
var temp__5757__auto__ = iterator.value;
if((temp__5757__auto__ == null)){
return null;
} else {
var val = temp__5757__auto__;
var from__$1 = iterator.from;
var to = iterator.to;
iterator.next();

return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),from__$1,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"val","val",128701612),val], null),(new cljs.core.LazySeq(null,(function (){
return nextjournal$clerk$render$code$step();
}),null,null)));
}
})();
}));

(nextjournal.clerk.render.code.rangeset_seq.cljs$lang$maxFixedArity = 2);

nextjournal.clerk.render.code.style_markup = (function nextjournal$clerk$render$code$style_markup(text,p__75455){
var map__75456 = p__75455;
var map__75456__$1 = cljs.core.__destructure_map(map__75456);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75456__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75456__$1,new cljs.core.Keyword(null,"to","to",192099007));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75456__$1,new cljs.core.Keyword(null,"val","val",128701612));
var map__75464 = val;
var map__75464__$1 = (((((!((map__75464 == null))))?(((((map__75464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75464):map__75464);
var tagName = (function (){var obj75467 = map__75464__$1;
if((!((obj75467 == null)))){
return (obj75467["tagName"]);
} else {
return undefined;
}
})();
var class$ = (function (){var obj75468 = map__75464__$1;
if((!((obj75468 == null)))){
return (obj75468["class"]);
} else {
return undefined;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,tagName,(cljs.core.truth_(class$)?cljs.core.cons(".",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(".",clojure.string.split.cljs$core$IFn$_invoke$arity$2(class$,/ /))):null))),text.sliceString(from,to)], null);
});
nextjournal.clerk.render.code.style_line = (function nextjournal$clerk$render$code$style_line(decos,text,i){
var map__75471 = text.line(i);
var map__75471__$1 = (((((!((map__75471 == null))))?(((((map__75471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75471):map__75471);
var from = (function (){var obj75473 = map__75471__$1;
if((!((obj75473 == null)))){
return (obj75473["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj75479 = map__75471__$1;
if((!((obj75479 == null)))){
return (obj75479["to"]);
} else {
return undefined;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cm-line","div.cm-line",-882561882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.6",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"15px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"\"Fira Mono\", monospace"], null)], null)], null),(function (){var pos = from;
var lds = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (pos,map__75471,map__75471__$1,from,to){
return (function (p1__75470_SHARP_){
return (new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__75470_SHARP_) <= to);
});})(pos,map__75471,map__75471__$1,from,to))
,nextjournal.clerk.render.code.rangeset_seq.cljs$core$IFn$_invoke$arity$2(decos,from));
var buf = cljs.core.List.EMPTY;
while(true){
var temp__5755__auto__ = cljs.core.first(lds);
if((temp__5755__auto__ == null)){
var G__75522 = buf;
if((pos < to)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(G__75522,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [text.sliceString(pos,to)], null));
} else {
return G__75522;
}
} else {
var map__75523 = temp__5755__auto__;
var map__75523__$1 = cljs.core.__destructure_map(map__75523);
var d = map__75523__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75523__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75523__$1,new cljs.core.Keyword(null,"to","to",192099007));
var G__75572 = end;
var G__75573 = cljs.core.next(lds);
var G__75574 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(buf,(function (){var G__75528 = (new cljs.core.List(null,nextjournal.clerk.render.code.style_markup(text,d),null,(1),null));
if((pos < start)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__75528,text.sliceString(pos,start));
} else {
return G__75528;
}
})());
pos = G__75572;
lds = G__75573;
buf = G__75574;
continue;
}
break;
}
})());
});
nextjournal.clerk.render.code.render_code = (function nextjournal$clerk$render$code$render_code(code){
var builder = (new module$node_modules$$codemirror$state$dist$index_cjs.RangeSetBuilder());
var _ = module$node_modules$$lezer$highlight$dist$index_cjs.highlightTree(module$node_modules$$nextjournal$lang_clojure$dist$index_cjs.clojureLanguage.parser.parse(code),nextjournal.clerk.render.code.highlight_style,(function (from,to,style){
return builder.add(from,to,module$node_modules$$codemirror$view$dist$index_cjs.Decoration.mark(({"class":style})));
}));
var decorations_rangeset = builder.finish();
var text = module$node_modules$$codemirror$state$dist$index_cjs.Text.of(code.split("\n"));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cm-editor","div.cm-editor",-325076497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cm-scroller","cm-scroller",144210605),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cm-content.whitespace-pre","div.cm-content.whitespace-pre",-803572291)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.render.code.style_line,decorations_rangeset,text)),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(text.lines + (1))))], null)], null);
});

//# sourceMappingURL=nextjournal.clerk.render.code.js.map
