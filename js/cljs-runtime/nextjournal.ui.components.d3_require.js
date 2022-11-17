goog.provide('nextjournal.ui.components.d3_require');
var module$node_modules$d3_require$dist$d3_require=shadow.js.require("module$node_modules$d3_require$dist$d3_require", {});
nextjournal.ui.components.d3_require.with$ = (function nextjournal$ui$components$d3_require$with(p__94824,f){
var map__94826 = p__94824;
var map__94826__$1 = cljs.core.__destructure_map(map__94826);
var package$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94826__$1,new cljs.core.Keyword(null,"package","package",1189062786));
var loading_view = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94826__$1,new cljs.core.Keyword(null,"loading-view","loading-view",1386748874),"Loading...");
var with_let94827 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let94827","with-let94827",950830401));
var temp__5757__auto___94847 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___94847 == null)){
} else {
var c__85371__auto___94849 = temp__5757__auto___94847;
if((with_let94827.generation === c__85371__auto___94849.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let94827.generation = c__85371__auto___94849.ratomGeneration);
}

var init94828 = (with_let94827.length === (0));
var _BANG_package = ((((init94828) || (cljs.core.not(with_let94827.hasOwnProperty((0))))))?(with_let94827[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let94827[(0)]));
var res94829 = (function (){var G__94839 = cljs.core.deref(_BANG_package);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__94839)){
cljs.core.reset_BANG_(_BANG_package,new cljs.core.Keyword(null,"loading","loading",-737050189));

var obj__83643__auto___94853 = ((typeof package$ === 'string')?module$node_modules$d3_require$dist$d3_require.require(package$):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(module$node_modules$d3_require$dist$d3_require.require,package$));
var f__83644__auto___94854 = (obj__83643__auto___94853["then"]);
f__83644__auto___94854.call(obj__83643__auto___94853,(function (p1__94818_SHARP_){
return cljs.core.reset_BANG_(_BANG_package,p1__94818_SHARP_);
}));

return loading_view;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading","loading",-737050189),G__94839)){
return loading_view;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$1((function (){var G__94844 = cljs.core.deref(_BANG_package);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__94844) : f.call(null,G__94844));
})());

}
}
})();
return res94829;
});

//# sourceMappingURL=nextjournal.ui.components.d3_require.js.map
