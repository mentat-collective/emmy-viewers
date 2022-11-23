goog.provide('nextjournal.ui.components.d3_require');
var module$node_modules$d3_require$dist$d3_require=shadow.js.require("module$node_modules$d3_require$dist$d3_require", {});
nextjournal.ui.components.d3_require.with$ = (function nextjournal$ui$components$d3_require$with(p__94857,f){
var map__94858 = p__94857;
var map__94858__$1 = cljs.core.__destructure_map(map__94858);
var package$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94858__$1,new cljs.core.Keyword(null,"package","package",1189062786));
var loading_view = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94858__$1,new cljs.core.Keyword(null,"loading-view","loading-view",1386748874),"Loading...");
var with_let94859 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let94859","with-let94859",423165021));
var temp__5757__auto___94868 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___94868 == null)){
} else {
var c__85826__auto___94869 = temp__5757__auto___94868;
if((with_let94859.generation === c__85826__auto___94869.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let94859.generation = c__85826__auto___94869.ratomGeneration);
}

var init94860 = (with_let94859.length === (0));
var _BANG_package = ((((init94860) || (cljs.core.not(with_let94859.hasOwnProperty((0))))))?(with_let94859[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let94859[(0)]));
var res94861 = (function (){var G__94862 = cljs.core.deref(_BANG_package);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__94862)){
cljs.core.reset_BANG_(_BANG_package,new cljs.core.Keyword(null,"loading","loading",-737050189));

var obj__84046__auto___94870 = ((typeof package$ === 'string')?module$node_modules$d3_require$dist$d3_require.require(package$):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(module$node_modules$d3_require$dist$d3_require.require,package$));
var f__84047__auto___94871 = (obj__84046__auto___94870["then"]);
f__84047__auto___94871.call(obj__84046__auto___94870,(function (p1__94856_SHARP_){
return cljs.core.reset_BANG_(_BANG_package,p1__94856_SHARP_);
}));

return loading_view;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading","loading",-737050189),G__94862)){
return loading_view;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$1((function (){var G__94864 = cljs.core.deref(_BANG_package);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__94864) : f.call(null,G__94864));
})());

}
}
})();
return res94861;
});

//# sourceMappingURL=nextjournal.ui.components.d3_require.js.map
