goog.provide('nextjournal.viewer.plotly');
nextjournal.viewer.plotly.default_layout = (function (){var G__94884 = new cljs.core.PersistentArrayMap(null, 3, ["font",new cljs.core.PersistentArrayMap(null, 3, ["family","'Verlag A', 'Verlag B', -apple-system, '.SFNSText-Regular', 'San Francisco', 'Roboto', 'Segoe UI', 'Helvetica Neue', 'Arial', sans-serif","size",(14),"color","#343434"], null),"height",(450),"autosize",false], null);
if(cljs.core.truth_((function (){var and__4251__auto__ = (typeof window !== 'undefined');
if(and__4251__auto__){
return window.hasOwnProperty("ontouchstart");
} else {
return and__4251__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__94884,"dragmode",false);
} else {
return G__94884;
}
})();
nextjournal.viewer.plotly.default_graph_options = ({"displayModeBar": false, "displayLogo": false});
nextjournal.viewer.plotly.default_min_margin = new cljs.core.PersistentArrayMap(null, 4, ["r",(0),"l",(30),"b",(0),"t",(20)], null);
nextjournal.viewer.plotly.adjust_layout_margins = (function nextjournal$viewer$plotly$adjust_layout_margins(layout){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(layout,"margin",(function (margin){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.max,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.viewer.plotly.default_min_margin,margin,(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(layout,"title"))?new cljs.core.PersistentArrayMap(null, 1, ["t",(60)], null):null)], 0));
}));
});
/**
 * Like merge, but merges maps recursively.
 */
nextjournal.viewer.plotly.deep_merge_maps = (function nextjournal$viewer$plotly$deep_merge_maps(m1,m2){
if(((cljs.core.map_QMARK_(m1)) && (cljs.core.map_QMARK_(m2)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(nextjournal.viewer.plotly.deep_merge_maps,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m1,m2], 0));
} else {
return m2;
}
});
nextjournal.viewer.plotly.graph_layout_with_defaults = (function nextjournal$viewer$plotly$graph_layout_with_defaults(layout){
var layout__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(layout);
var layout__$2 = ((cljs.core.empty_QMARK_(layout__$1))?cljs.core.PersistentArrayMap.EMPTY:layout__$1);
return cljs.core.clj__GT_js(nextjournal.viewer.plotly.adjust_layout_margins(nextjournal.viewer.plotly.deep_merge_maps(nextjournal.viewer.plotly.default_layout,layout__$2)));
});
nextjournal.viewer.plotly.coerce_val = (function nextjournal$viewer$plotly$coerce_val(value){
if(typeof value === 'string'){
return JSON.parse(value);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.clj__GT_js(value);
} else {
return value;

}
}
});
nextjournal.viewer.plotly.viewer_STAR_ = (function nextjournal$viewer$plotly$viewer_STAR_(value){
var this$ = reagent.core.current_component();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.ui.components.d3_require.with$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"package","package",1189062786),"plotly.js-dist@1.51.1"], null),(function (p__94902){
var map__94907 = p__94902;
var map__94907__$1 = (((((!((map__94907 == null))))?(((((map__94907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94907):map__94907);
var Plotly = map__94907__$1;
var relayout = (function (){var obj94909 = map__94907__$1;
if((!((obj94909 == null)))){
return (obj94909["relayout"]);
} else {
return undefined;
}
})();
var Plots = (function (){var obj94910 = map__94907__$1;
if((!((obj94910 == null)))){
return (obj94910["Plots"]);
} else {
return undefined;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-plotly-result","div.code-plotly-result",705541007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-center items-center",new cljs.core.Keyword(null,"ref","ref",1289896967),(function (plotly_el){
if(cljs.core.truth_(plotly_el)){
var map__94911 = nextjournal.viewer.plotly.coerce_val(value);
var map__94911__$1 = (((((!((map__94911 == null))))?(((((map__94911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94911):map__94911);
var coerced = map__94911__$1;
var layout = (function (){var obj94913 = map__94911__$1;
if((!((obj94913 == null)))){
return (obj94913["layout"]);
} else {
return undefined;
}
})();
var value_object = (function (){var obj94914 = (function (){var obj94915 = coerced;
if((!((obj94915 == null)))){
var out94916 = ({});
var k__83941__auto___94957 = "data";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__83941__auto___94957,obj94915)){
var obj94919_94958 = out94916;
(obj94919_94958[k__83941__auto___94957] = (obj94915[k__83941__auto___94957]));

} else {
}

var k__83941__auto___94959 = "frames";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__83941__auto___94959,obj94915)){
var obj94923_94961 = out94916;
(obj94923_94961[k__83941__auto___94959] = (obj94915[k__83941__auto___94959]));

} else {
}

return out94916;
} else {
return ({});
}
})();
var obj94926 = (function (){var obj94927 = (((!((obj94914 == null))))?obj94914:({}));
(obj94927["layout"] = nextjournal.viewer.plotly.graph_layout_with_defaults(layout));

return obj94927;
})();
(obj94926["config"] = nextjournal.viewer.plotly.default_graph_options);

return obj94926;
})();
var obj94930_94963 = this$;
var obj94931_94964 = (((!((obj94930_94963 == null))))?obj94930_94963:({}));
(obj94931_94964["resize-listener"] = goog.functions.debounce((function (){
var G__94934_94965 = plotly_el;
var G__94935_94966 = cljs.core.clj__GT_js(nextjournal.viewer.plotly.graph_layout_with_defaults(layout));
(relayout.cljs$core$IFn$_invoke$arity$2 ? relayout.cljs$core$IFn$_invoke$arity$2(G__94934_94965,G__94935_94966) : relayout.call(null,G__94934_94965,G__94935_94966));

return Plots.resize(plotly_el);
}),(100)));


var obj__84046__auto___94967 = (function (){var obj__84046__auto___94967 = Plotly;
var f__84047__auto___94968 = (obj__84046__auto___94967["newPlot"]);
return f__84047__auto___94968.call(obj__84046__auto___94967,plotly_el,value_object);
})();
var f__84047__auto___94968 = (obj__84046__auto___94967["catch"]);
f__84047__auto___94968.call(obj__84046__auto___94967,(function nextjournal$viewer$plotly$viewer_STAR__$_new_plot_error(reason){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("nextjournal.viewer.plotly",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("nextjournal.viewer.plotly","insert-plot","nextjournal.viewer.plotly/insert-plot",-1087984347),"Plotly Error",new cljs.core.Keyword(null,"el","el",-1618201118),plotly_el,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason,new cljs.core.Keyword(null,"line","line",212345235),79], null)),null);
}));

return window.addEventListener("resize",(function (){var obj94937 = this$;
if((!((obj94937 == null)))){
return (obj94937["resize-listener"]);
} else {
return undefined;
}
})());
} else {
return window.removeEventListener("resize",(function (){var obj94939 = this$;
if((!((obj94939 == null)))){
return (obj94939["resize-listener"]);
} else {
return undefined;
}
})());
}
})], null)], null);
})], null);
});
nextjournal.viewer.plotly.viewer = (function nextjournal$viewer$plotly$viewer(value){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.plotly.viewer_STAR_,value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),new cljs.core.Keyword(null,"reagent","reagent",2131627322)], null));
});

//# sourceMappingURL=nextjournal.viewer.plotly.js.map
