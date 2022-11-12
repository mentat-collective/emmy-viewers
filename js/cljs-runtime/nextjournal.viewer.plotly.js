goog.provide('nextjournal.viewer.plotly');
nextjournal.viewer.plotly.default_layout = (function (){var G__77259 = new cljs.core.PersistentArrayMap(null, 3, ["font",new cljs.core.PersistentArrayMap(null, 3, ["family","'Verlag A', 'Verlag B', -apple-system, '.SFNSText-Regular', 'San Francisco', 'Roboto', 'Segoe UI', 'Helvetica Neue', 'Arial', sans-serif","size",(14),"color","#343434"], null),"height",(450),"autosize",false], null);
if(cljs.core.truth_((function (){var and__4251__auto__ = (typeof window !== 'undefined');
if(and__4251__auto__){
return window.hasOwnProperty("ontouchstart");
} else {
return and__4251__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77259,"dragmode",false);
} else {
return G__77259;
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.ui.components.d3_require.with$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"package","package",1189062786),"plotly.js-dist@1.51.1"], null),(function (p__77265){
var map__77269 = p__77265;
var map__77269__$1 = (((((!((map__77269 == null))))?(((((map__77269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77269):map__77269);
var Plotly = map__77269__$1;
var relayout = (function (){var obj77273 = map__77269__$1;
if((!((obj77273 == null)))){
return (obj77273["relayout"]);
} else {
return undefined;
}
})();
var Plots = (function (){var obj77275 = map__77269__$1;
if((!((obj77275 == null)))){
return (obj77275["Plots"]);
} else {
return undefined;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-plotly-result","div.code-plotly-result",705541007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-center items-center",new cljs.core.Keyword(null,"ref","ref",1289896967),(function (plotly_el){
if(cljs.core.truth_(plotly_el)){
var map__77277 = nextjournal.viewer.plotly.coerce_val(value);
var map__77277__$1 = (((((!((map__77277 == null))))?(((((map__77277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77277):map__77277);
var coerced = map__77277__$1;
var layout = (function (){var obj77281 = map__77277__$1;
if((!((obj77281 == null)))){
return (obj77281["layout"]);
} else {
return undefined;
}
})();
var value_object = (function (){var obj77283 = (function (){var obj77284 = coerced;
if((!((obj77284 == null)))){
var out77285 = ({});
var k__60734__auto___77331 = "data";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__60734__auto___77331,obj77284)){
var obj77290_77332 = out77285;
(obj77290_77332[k__60734__auto___77331] = (obj77284[k__60734__auto___77331]));

} else {
}

var k__60734__auto___77334 = "frames";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__60734__auto___77334,obj77284)){
var obj77291_77336 = out77285;
(obj77291_77336[k__60734__auto___77334] = (obj77284[k__60734__auto___77334]));

} else {
}

return out77285;
} else {
return ({});
}
})();
var obj77296 = (function (){var obj77297 = (((!((obj77283 == null))))?obj77283:({}));
(obj77297["layout"] = nextjournal.viewer.plotly.graph_layout_with_defaults(layout));

return obj77297;
})();
(obj77296["config"] = nextjournal.viewer.plotly.default_graph_options);

return obj77296;
})();
var obj77302_77337 = this$;
var obj77305_77338 = (((!((obj77302_77337 == null))))?obj77302_77337:({}));
(obj77305_77338["resize-listener"] = goog.functions.debounce((function (){
var G__77310_77341 = plotly_el;
var G__77311_77342 = cljs.core.clj__GT_js(nextjournal.viewer.plotly.graph_layout_with_defaults(layout));
(relayout.cljs$core$IFn$_invoke$arity$2 ? relayout.cljs$core$IFn$_invoke$arity$2(G__77310_77341,G__77311_77342) : relayout.call(null,G__77310_77341,G__77311_77342));

return Plots.resize(plotly_el);
}),(100)));


var obj__60830__auto___77343 = (function (){var obj__60830__auto___77343 = Plotly;
var f__60831__auto___77344 = (obj__60830__auto___77343["newPlot"]);
return f__60831__auto___77344.call(obj__60830__auto___77343,plotly_el,value_object);
})();
var f__60831__auto___77344 = (obj__60830__auto___77343["catch"]);
f__60831__auto___77344.call(obj__60830__auto___77343,(function nextjournal$viewer$plotly$viewer_STAR__$_new_plot_error(reason){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("nextjournal.viewer.plotly",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("nextjournal.viewer.plotly","insert-plot","nextjournal.viewer.plotly/insert-plot",-1087984347),"Plotly Error",new cljs.core.Keyword(null,"el","el",-1618201118),plotly_el,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason,new cljs.core.Keyword(null,"line","line",212345235),79], null)),null);
}));

return window.addEventListener("resize",(function (){var obj77318 = this$;
if((!((obj77318 == null)))){
return (obj77318["resize-listener"]);
} else {
return undefined;
}
})());
} else {
return window.removeEventListener("resize",(function (){var obj77322 = this$;
if((!((obj77322 == null)))){
return (obj77322["resize-listener"]);
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
