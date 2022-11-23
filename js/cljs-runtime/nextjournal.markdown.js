goog.provide('nextjournal.markdown');
var module$js$markdown=shadow.js.require("module$js$markdown", {});
var module$node_modules$markdown_it$lib$token=shadow.js.require("module$node_modules$markdown_it$lib$token", {});
(module$node_modules$markdown_it$lib$token.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL);

(module$node_modules$markdown_it$lib$token.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,key){
var this$__$1 = this;
var obj85930 = this$__$1;
if((!((obj85930 == null)))){
return (obj85930[applied_science.js_interop.impl.wrap_key(key)]);
} else {
return undefined;
}
}));
nextjournal.markdown.tokenize = module$js$markdown.tokenize;
/**
 * Turns a markdown string into a nested clojure structure.
 */
nextjournal.markdown.parse = (function nextjournal$markdown$parse(markdown_text){
return nextjournal.markdown.parser.parse.cljs$core$IFn$_invoke$arity$1((nextjournal.markdown.tokenize.cljs$core$IFn$_invoke$arity$1 ? nextjournal.markdown.tokenize.cljs$core$IFn$_invoke$arity$1(markdown_text) : nextjournal.markdown.tokenize.call(null,markdown_text)));
});
/**
 * Turns a markdown string into hiccup.
 */
nextjournal.markdown.__GT_hiccup = (function nextjournal$markdown$__GT_hiccup(var_args){
var G__85933 = arguments.length;
switch (G__85933) {
case 1:
return nextjournal.markdown.__GT_hiccup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.markdown.__GT_hiccup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.markdown.__GT_hiccup.cljs$core$IFn$_invoke$arity$1 = (function (markdown_text){
return nextjournal.markdown.__GT_hiccup.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.default_hiccup_renderers,markdown_text);
}));

(nextjournal.markdown.__GT_hiccup.cljs$core$IFn$_invoke$arity$2 = (function (ctx,markdown_text){
return nextjournal.markdown.transform.__GT_hiccup.cljs$core$IFn$_invoke$arity$2(ctx,nextjournal.markdown.parse(markdown_text));
}));

(nextjournal.markdown.__GT_hiccup.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=nextjournal.markdown.js.map
