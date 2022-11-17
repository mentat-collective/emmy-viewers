goog.provide('nextjournal.viewer.plotly');
nextjournal.viewer.plotly.default_layout = (function (){var G__94880 = new cljs.core.PersistentArrayMap(null, 3, ["font",new cljs.core.PersistentArrayMap(null, 3, ["family","'Verlag A', 'Verlag B', -apple-system, '.SFNSText-Regular', 'San Francisco', 'Roboto', 'Segoe UI', 'Helvetica Neue', 'Arial', sans-serif","size",(14),"color","#343434"], null),"height",(450),"autosize",false], null);
if(cljs.core.truth_((function (){var and__4251__auto__ = (typeof window !== 'undefined');
if(and__4251__auto__){
return window.hasOwnProperty("ontouchstart");
} else {
return and__4251__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__94880,"dragmode",false);
} else {
return G__94880;
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.ui.components.d3_require.with$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"package","package",1189062786),"plotly.js-dist@1.51.1"], null),(function (p__94899){
var map__94903 = p__94899;
var map__94903__$1 = (((((!((map__94903 == null))))?(((((map__94903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94903):map__94903);
var Plotly = map__94903__$1;
var relayout = (function (){var obj94905 = map__94903__$1;
if((!((obj94905 == null)))){
return (obj94905["relayout"]);
} else {
return undefined;
}
})();
var Plots = (function (){var obj94906 = map__94903__$1;
if((!((obj94906 == null)))){
return (obj94906["Plots"]);
} else {
return undefined;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-plotly-result","div.code-plotly-result",705541007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-center items-center",new cljs.core.Keyword(null,"ref","ref",1289896967),(function (plotly_el){
if(cljs.core.truth_(plotly_el)){
var map__94907 = nextjournal.viewer.plotly.coerce_val(value);
var map__94907__$1 = (((((!((map__94907 == null))))?(((((map__94907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94907):map__94907);
var coerced = map__94907__$1;
var layout = (function (){var obj94909 = map__94907__$1;
if((!((obj94909 == null)))){
return (obj94909["layout"]);
} else {
return undefined;
}
})();
var value_object = (function (){var obj94910 = (function (){var obj94911 = coerced;
if((!((obj94911 == null)))){
var out94912 = ({});
var k__83550__auto___94954 = "data";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__83550__auto___94954,obj94911)){
var obj94915_94955 = out94912;
(obj94915_94955[k__83550__auto___94954] = (obj94911[k__83550__auto___94954]));

} else {
}

var k__83550__auto___94956 = "frames";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__83550__auto___94956,obj94911)){
var obj94916_94957 = out94912;
(obj94916_94957[k__83550__auto___94956] = (obj94911[k__83550__auto___94956]));

} else {
}

return out94912;
} else {
return ({});
}
})();
var obj94919 = (function (){var obj94920 = (((!((obj94910 == null))))?obj94910:({}));
(obj94920["layout"] = nextjournal.viewer.plotly.graph_layout_with_defaults(layout));

return obj94920;
})();
(obj94919["config"] = nextjournal.viewer.plotly.default_graph_options);

return obj94919;
})();
var obj94923_94961 = this$;
var obj94924_94962 = (((!((obj94923_94961 == null))))?obj94923_94961:({}));
(obj94924_94962["resize-listener"] = goog.functions.debounce((function (){
var G__94927_94963 = plotly_el;
var G__94928_94964 = cljs.core.clj__GT_js(nextjournal.viewer.plotly.graph_layout_with_defaults(layout));
(relayout.cljs$core$IFn$_invoke$arity$2 ? relayout.cljs$core$IFn$_invoke$arity$2(G__94927_94963,G__94928_94964) : relayout.call(null,G__94927_94963,G__94928_94964));

return Plots.resize(plotly_el);
}),(100)));


var obj__83643__auto___94965 = (function (){var obj__83643__auto___94965 = Plotly;
var f__83644__auto___94966 = (obj__83643__auto___94965["newPlot"]);
return f__83644__auto___94966.call(obj__83643__auto___94965,plotly_el,value_object);
})();
var f__83644__auto___94966 = (obj__83643__auto___94965["catch"]);
f__83644__auto___94966.call(obj__83643__auto___94965,(function nextjournal$viewer$plotly$viewer_STAR__$_new_plot_error(reason){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("nextjournal.viewer.plotly",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("nextjournal.viewer.plotly","insert-plot","nextjournal.viewer.plotly/insert-plot",-1087984347),"Plotly Error",new cljs.core.Keyword(null,"el","el",-1618201118),plotly_el,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason,new cljs.core.Keyword(null,"line","line",212345235),79], null)),null);
}));

return window.addEventListener("resize",(function (){var obj94930 = this$;
if((!((obj94930 == null)))){
return (obj94930["resize-listener"]);
} else {
return undefined;
}
})());
} else {
return window.removeEventListener("resize",(function (){var obj94931 = this$;
if((!((obj94931 == null)))){
return (obj94931["resize-listener"]);
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
