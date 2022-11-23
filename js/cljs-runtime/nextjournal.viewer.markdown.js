goog.provide('nextjournal.viewer.markdown');
nextjournal.viewer.markdown.inspect_STAR_ = (function nextjournal$viewer$markdown$inspect_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___94767 = arguments.length;
var i__4865__auto___94768 = (0);
while(true){
if((i__4865__auto___94768 < len__4864__auto___94767)){
args__4870__auto__.push((arguments[i__4865__auto___94768]));

var G__94769 = (i__4865__auto___94768 + (1));
i__4865__auto___94768 = G__94769;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return nextjournal.viewer.markdown.inspect_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(nextjournal.viewer.markdown.inspect_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var i = (((typeof nextjournal !== 'undefined') && (typeof nextjournal.viewer !== 'undefined') && (typeof nextjournal.viewer.inspect !== 'undefined'))?(new cljs.core.Var((function (){
return nextjournal.viewer.inspect;
}),cljs.core.with_meta(new cljs.core.Symbol("nextjournal.viewer","inspect","nextjournal.viewer/inspect",-1133746572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),null)):null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(i,args);
}));

(nextjournal.viewer.markdown.inspect_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nextjournal.viewer.markdown.inspect_STAR_.cljs$lang$applyTo = (function (seq94678){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq94678));
}));

nextjournal.viewer.markdown.eval_form_STAR_ = (function nextjournal$viewer$markdown$eval_form_STAR_(f){
var ef = (((typeof nextjournal !== 'undefined') && (typeof nextjournal.viewer !== 'undefined') && (typeof nextjournal.viewer.notebook !== 'undefined') && (typeof nextjournal.viewer.notebook.eval_form !== 'undefined'))?(new cljs.core.Var((function (){
return nextjournal.viewer.notebook.eval_form;
}),cljs.core.with_meta(new cljs.core.Symbol("nextjournal.viewer.notebook","eval-form","nextjournal.viewer.notebook/eval-form",921296552,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),null)):null);
return (ef.cljs$core$IFn$_invoke$arity$1 ? ef.cljs$core$IFn$_invoke$arity$1(f) : ef.call(null,f));
});
nextjournal.viewer.markdown.sidenote_click_handler = (function nextjournal$viewer$markdown$sidenote_click_handler(e){
if(cljs.core.truth_(e.target.classList.contains("sidenote-ref"))){
return e.target.classList.toggle("expanded");
} else {
return null;
}
});
nextjournal.viewer.markdown.code_viewer = (function nextjournal$viewer$markdown$code_viewer(node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-code.not-prose","div.viewer-code.not-prose",1657992558),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.markdown.inspect_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),nextjournal.markdown.transform.__GT_text(node)], null)], null)], null);
});
nextjournal.viewer.markdown.default_renderers = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(nextjournal.markdown.transform.default_hiccup_renderers,new cljs.core.Keyword(null,"doc","doc",1913296891),(function (ctx,p__94747){
var map__94749 = p__94747;
var map__94749__$1 = cljs.core.__destructure_map(map__94749);
var doc = map__94749__$1;
var sidenotes_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94749__$1,new cljs.core.Keyword(null,"sidenotes?","sidenotes?",-1418896412));
return nextjournal.markdown.transform.into_markup(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(sidenotes_QMARK_)?"contains-sidenotes":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),nextjournal.viewer.markdown.sidenote_click_handler], null)], null),ctx,doc);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"code","code",1586293142),(function (_ctx,node){
return nextjournal.viewer.markdown.code_viewer(node);
}),new cljs.core.Keyword(null,"todo-item","todo-item",-1060924804),(function (ctx,p__94755){
var map__94756 = p__94755;
var map__94756__$1 = cljs.core.__destructure_map(map__94756);
var node = map__94756__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94756__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return nextjournal.markdown.transform.into_markup(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(attrs)], null)], null)], null),ctx,node);
}),new cljs.core.Keyword(null,"formula","formula",-1059725192),(function (_ctx,node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),nextjournal.viewer.katex.to_html_string.cljs$core$IFn$_invoke$arity$1(nextjournal.markdown.transform.__GT_text(node))], null)], null)], null);
}),new cljs.core.Keyword(null,"block-formula","block-formula",-1790528301),(function (_ctx,node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),nextjournal.viewer.katex.to_html_string.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.__GT_text(node),({"displayMode": true}))], null)], null)], null);
})], 0));
nextjournal.viewer.markdown.viewer = (function nextjournal$viewer$markdown$viewer(value){
if(cljs.core.truth_(value)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),nextjournal.markdown.__GT_hiccup.cljs$core$IFn$_invoke$arity$2(nextjournal.viewer.markdown.default_renderers,value),new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238)], null);
} else {
return null;
}
});
nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-markdown","div.viewer-markdown",-559117844),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.markdown.inspect_STAR_,nextjournal.viewer.markdown.viewer("\nInline $\\phi_\\alpha$ and block\n\n$$\\int_a^b f(t) dt$$\n\nformulas")], null)], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer.markdown",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"formulas"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-markdown","div.viewer-markdown",-559117844),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.markdown.inspect_STAR_,nextjournal.viewer.markdown.viewer("\n1. Lorem ipsum dolor sit amet\n2. Consectetur adipiscing elit\n3. Integer molestie lorem at massa")], null)], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer.markdown",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"numbered-lists"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"List should be able to start from an offset, e.g. 2., 3., 4. instead of 1., 2., 3., ...",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-markdown","div.viewer-markdown",-559117844),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.markdown.inspect_STAR_,nextjournal.viewer.markdown.viewer("\n2. Lorem ipsum dolor sit amet\n3. Consectetur adipiscing elit\n4. Integer molestie lorem at massa")], null)], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer.markdown",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"numbered-lists-offset"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"Non-sequential numbered test, e.g. using the same counter over and over again, should result in sequentially numbered lists.",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-markdown","div.viewer-markdown",-559117844),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.markdown.inspect_STAR_,nextjournal.viewer.markdown.viewer("\n1. Lorem ipsum dolor sit amet\n1. Consectetur adipiscing elit\n1. Integer molestie lorem at massa")], null)], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer.markdown",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"numbered-lists-non-sequential"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"Non-sequential numbered test, e.g. using the same counter over and over again, should result in sequentially numbered lists.",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-markdown","div.viewer-markdown",-559117844),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.markdown.inspect_STAR_,nextjournal.viewer.markdown.viewer("# Internal Links\n- [x] play well with our todo list plugin\n- [x] an internal link looks like this [[wikistyle]]\n- [x] play well with [[TOC]] marker")], null)], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer.markdown",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"internal-links"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-markdown","div.viewer-markdown",-559117844),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.markdown.inspect_STAR_,nextjournal.viewer.markdown.viewer("# Markdown Default Rendering\n## Sidenotes\n\nOne of the most distinctive features of Tufte\u2019s style is his extensive use of sidenotes.\nSidenotes[^1] are like footnotes, except they don\u2019t force the reader to jump their eye to\nthe bottom of the page, but instead display off to the side in the margin.[^longnote]\n\n[^1]: Here\u2019s a sidenote.\n\n[^longnote]: And here is another one with more text that wraps over multiple lines.\n\nSidenotes are a great example of the web not being like print. On sufficiently large viewports,\nTufte CSS uses the margin for sidenotes, margin notes, and small figures. On smaller viewports,\nelements that would go in the margin are hidden until the user toggles them into view.\n\nThe goal is to present related but not necessary information such as asides or citations as\nclose as possible to the text that references them. At the same time, this secondary information\nshould stay out of the way of the eye, not interfering with the progression of ideas in the\nmain text.\n\n## Tags\n\nYou might want to #hashtag this document for #good #fun123.\n\n## Todos\n\n- [x] Checked\n- [x] Unchecked\n  - [ ] Nested unchecked\n\n## Code\n\n```clj\n(like what)\n```\n\n### Block Formulas\n\n$$\\int_{\\omega} \\phi d\\omega$$\n\n### Formulas inside tables\n\n| Syntax |  JVM                     | JavaScript                                    |\n|:-------|:------------------------:|----------------------------------------------:|\n| foo    |  Local_Date_             | goog.date.Date                                |\n| bar    |  java.time.LocalDateTime | $\\bigoplus_{\\alpha < \\omega}\\phi_\\alpha$ |\n")], null)], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer.markdown",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"default-markdown"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","state","nextjournal.devcards/state",1376810469),"### Dark Mode Support\nHere is some code that provides a custom wrapper with styles to e.g. set the text color\nand background if dark mode is enabled in your system."], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"Provide custom styles to e.g. support dark mode.",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),-149836403,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (markdown){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.markdown.inspect_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),nextjournal.markdown.__GT_hiccup.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.viewer.markdown.default_renderers,new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-markdown.dark:bg-gray-900.dark:text-white.rounded.shadow-sm.p-4","div.viewer-markdown.dark:bg-gray-900.dark:text-white.rounded.shadow-sm.p-4",-1196220273)], null))),cljs.core.deref(markdown))], null)], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer.markdown",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"dark-mode"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","state","nextjournal.devcards/state",1376810469),"# Custom `.cljs` Code Eval\n\nOverrides the default `:code` renderer to add an extra sci pass for fenced code blocks with a `cljs` language info\n\n```cljs\n{:foo (reduce + 0 (range 10)) }\n```\n\nCan show what markdown parser actually do\n\n```cljs\n(nextjournal.markdown/parse \"# \uD83D\uDC4B\uD83C\uDFFB Hello markdown parsing\n- [x] with\n- [ ] some\n- [ ] fun\n\")\n\n```\nsame for hiccup transform\n```cljs\n(nextjournal.markdown/->hiccup \"# \uD83D\uDC4B\uD83C\uDFFB Hello markdown parsing\n- [x] with\n- [ ] some\n- [ ] fun\n\")\n\n```\n\ncode in other languages than clojurescript is just inert:\n\n```python\nimport sys\nsys.version\n```\n\n"], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),-1731605391,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (markdown){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-markdown","div.viewer-markdown",-559117844),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.markdown.inspect_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),nextjournal.markdown.__GT_hiccup.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.viewer.markdown.default_renderers,new cljs.core.Keyword(null,"code","code",1586293142),(function (_,p__94764){
var map__94765 = p__94764;
var map__94765__$1 = cljs.core.__destructure_map(map__94765);
var node = map__94765__$1;
var language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94765__$1,new cljs.core.Keyword(null,"language","language",-1591107564));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),nextjournal.viewer.markdown.code_viewer(node),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("cljs",language))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-result.mt-3","div.viewer-result.mt-3",-941802642),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.markdown.inspect_STAR_,nextjournal.viewer.markdown.eval_form_STAR_(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(nextjournal.markdown.transform.__GT_text(node)))], null)], null):null)], null);
})),cljs.core.deref(markdown))], null)], null)], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer.markdown",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"custom-code-eval"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","state","nextjournal.devcards/state",1376810469),"# Built-in Table of Contents\n\n[[TOC]]\n\n## Section 1\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n\n### Section 1.1\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n\n## Section 2\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n\n### Section 2.1\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n\n#### Section 2.1.1\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n\n### Section 2.2\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n\n## Section 3\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n"], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),1724300324,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (markdown){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-markdown","div.viewer-markdown",-559117844),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.markdown.inspect_STAR_,nextjournal.viewer.markdown.viewer(cljs.core.deref(markdown))], null)], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer.markdown",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"table-of-contents"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","state","nextjournal.devcards/state",1376810469),new cljs.core.Keyword(null,"toc","toc",2050089251).cljs$core$IFn$_invoke$arity$1(nextjournal.markdown.parse("# My Document\n## Section 1\n### Section 1.1\n## Section 2\n### Section 2.1\n"))], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"Shows how to render the TOC of a document",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),846347784,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (toc){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-markdown","div.viewer-markdown",-559117844),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.markdown.inspect_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),nextjournal.markdown.transform.__GT_hiccup.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(toc))], null)], null)], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer.markdown",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"toc-standalone"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","state","nextjournal.devcards/state",1376810469),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"toc","toc",2050089251).cljs$core$IFn$_invoke$arity$1(nextjournal.markdown.parse("# My Document\n## Section 1\n### Section 1.1\n## Section 2\n### Section 2.1\n")))),new cljs.core.Keyword(null,"content","content",15833224))], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"Shows how to drop top h1 entry from TOC",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),-515760467,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (toc){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-markdown","div.viewer-markdown",-559117844),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.markdown.inspect_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),nextjournal.markdown.transform.__GT_hiccup.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(toc))], null)], null)], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer.markdown",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"toc-standalone-dropping-title"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","state","nextjournal.devcards/state",1376810469),"# Referenz\n\n## Abs\u00E4tze\n\nNormaler Text wird als Absatz interpretiert. Ein doppelter Zeilenabstand beginnt\neinen neuen Absatz.\n\n## Formatierung\n\n* `**fett**` wird zu **fett**\n* `_kursiv_` wird zu _kursiv_\n* `~~durchgestrichen~~` wird zu ~~durchgestrichen~~\n* `[Linktext](https://nextjournal.com/)` wird zu [Linktext](https://nextjournal.com/)\n\n## \u00DCberschriften\n\n\u00DCberschriften beginnen mit `#`. Mehrere aufeinanderfolgende `#`\ndefinieren das Level der \u00DCberschrift.\n\n    # \u00DCberschrift 1\n    ## \u00DCberschrift 2\n    ### \u00DCberschrift 3\n    #### \u00DCberschrift 4\n\n## Listen\n\n### Aufz\u00E4hlungen\n\nNormale Aufz\u00E4hlungen beginnen mit einem `*` und k\u00F6nnen verschachtelt sein.\n\n    * K\u00FChlschrank\n        * Butter\n        * Eier\n        * Milch\n    * Vorratsschrank\n        * Brot\n        * Backpapier\n        * Alufolie\n\nwird zu\n\n* K\u00FChlschrank\n    * Butter\n    * Eier\n    * Milch\n* Vorratsschrank\n    * Brot\n    * Backpapier\n    * Alufolie\n\n### Nummerierte Aufz\u00E4hlungen\n\nNummerierte Aufz\u00E4hlungen beginnen mit `1.` und k\u00F6nnen ebenfalls verschachtelt sein.\nVerschachtelte Aufz\u00E4hlungen beginnen wieder mit `1.` (anstelle z.B. `1.1.`) und nehmen automatisch die\n\u00FCbergeordneten Indizes mit.\n\n    1. Gr\u00FCnpflanzen\n        1. Charophyten\n        2. Chlorophyten\n    2. Landpflanzen\n        1. Lebermoose\n        2. Laubmoose\n        3. Hornmoose\n\nwird zu\n\n1. Gr\u00FCnpflanzen\n   1. Charophyten\n   2. Chlorophyten\n2. Landpflanzen\n   1. Lebermoose\n   2. Laubmoose\n   3. Hornmoose\n\n### Todo Listen\n\nTodo Listen beginnen mit `* [ ]` oder `* [x]` wobei das `x` markiert ob\ndas Todo erledigt ist. Todo Listen k\u00F6nnen ebenfalls verschachtelt sein.\n\n    * [ ] Lebensmittel\n        * [x] Butter\n        * [ ] Eier\n        * [ ] Milch\n    * [x] Werkstatt\n        * [x] Schrauben Torx M6\n        * [x] Torx Bitsatz\n\nwird zu\n\n* [ ] Lebensmittel\n    * [x] Butter\n    * [ ] Eier\n    * [ ] Milch\n* [x] Werkstatt\n    * [x] Schrauben Torx M6\n    * [x] Torx Bitsatz\n\n## Tabellen\n\nDoppelpunkte k\u00F6nnen verwendet werden um den Text in Spalten links,\nrechts oder zentriert auszurichten.\n\n\n    | Spalte 1     | Spalte 2            | Spalte 3 |\n    | ------------ |:-------------------:| --------:|\n    | Spalte 1 ist | links ausgerichtet  |   1600 \u20AC |\n    | Spalte 2 ist | zentriert           |     12 \u20AC |\n    | Spalte 3 ist | rechts ausgerichtet |      1 \u20AC |\n\nwird zu\n\n| Spalte 1     | Spalte 2            | Spalte 3 |\n| ------------ |:-------------------:| --------:|\n| Spalte 1 ist | links ausgerichtet  |   1600 \u20AC |\n| Spalte 2 ist | zentriert           |     12 \u20AC |\n| Spalte 3 ist | rechts ausgerichtet |      1 \u20AC |\n\n## Bilder\n\n    ![ARS Altmann Waggon](https://www.ars-altmann.de/wp-content/uploads/2017/12/Schiene2.jpg)\n\nwird zu\n\n![ARS Altmann Waggon](https://www.ars-altmann.de/wp-content/uploads/2017/12/Schiene2.jpg)\n\n## Zitate\n\n    > \u201CThe purpose of computation is insight, not numbers.\u201D\n    >\n    > \u2015 Richard Hamming\n\nwird zu\n\n> \u201CThe purpose of computation is insight, not numbers.\u201D\n>\n> \u2015 Richard Hamming\n\n## Trennlinien\n\nVerschiedene Sektionen k\u00F6nnen durch Trennlinien verdeutlicht werden.\n`---` produziert eine Linie \u00FCber die volle Breite des Dokuments.\n\n    #### Sektion 1\n\n    Hier ist ein Absatz zur Sektion 1.\n\n    ---\n\n    #### Sektion 2\n\n    Hier ist ein Absatz zur Sektion 2.\n\nwird zu\n\n#### Sektion 1\n\nHier ist ein Absatz zur Sektion 1.\n\n---\n\n#### Sektion 2\n\nHier ist ein Absatz zur Sektion 2.\n\n## Inhaltsverzeichnis\n\nEin Inhaltsverzeichnis \u00FCber alle \u00DCberschriften kann an jeder beliebigen\nStelle mit `[[toc]]` eingef\u00FCgt werden.\n\n    [[toc]]\n\nwird zu\n\n[[toc]]\n"], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),2121955120,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (markdown){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-markdown","div.viewer-markdown",-559117844),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.markdown.inspect_STAR_,nextjournal.viewer.markdown.viewer(cljs.core.deref(markdown))], null)], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer.markdown",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"reference"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","state","nextjournal.devcards/state",1376810469),"# Tables\n\n | Heading 1  | Heading 2\n | ---------- | ---------\n | Cell 1     | **Cell 2**\n | `Cell\\|3` | _Cell 4_\n"], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"Pipes in tables need to be escaped",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),282823534,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (md){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-markdown","div.viewer-markdown",-559117844),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.markdown.inspect_STAR_,nextjournal.viewer.markdown.viewer(cljs.core.deref(md))], null)], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer.markdown",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"tables"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","state","nextjournal.devcards/state",1376810469),"### Loose Lists\n\nLists with more than one paragraph per list item\n\n- List Item 1\n\n  with a paragraph inside that should have proper paragraph-like margins around it\n\n  and another paragraph inside that should have proper paragraph-like margins around it\n- List Item 2\n\n### Tight lists\n\nText in list items is not wrapped in a `<p>`\n\n- List Item 1\n  - List Item 1.1\n- List Item 2\n  - List item 2.1\n  - List item 2.2\n\nSee [Commonmark Spec](https://spec.commonmark.org/0.30/#loose)\n  "], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),-405623842,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (md){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-markdown","div.viewer-markdown",-559117844),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(500)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.markdown.inspect_STAR_,nextjournal.viewer.markdown.viewer(cljs.core.deref(md))], null)], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer.markdown",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"tight-lists"], 0)));


//# sourceMappingURL=nextjournal.viewer.markdown.js.map
