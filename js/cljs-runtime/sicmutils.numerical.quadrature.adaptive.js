goog.provide('sicmutils.numerical.quadrature.adaptive');
sicmutils.numerical.quadrature.adaptive._STAR_adaptive_maxterms_STAR_ = (10);
sicmutils.numerical.quadrature.adaptive._STAR_neighborhood_width_STAR_ = 0.05;
/**
 * Returns a point within`fuzz-factor` of the midpoint of the interval $[a, b]$.
 *   `fuzz-factor` defaults to 0 (ie, `split-point` returns the midpoint).
 */
sicmutils.numerical.quadrature.adaptive.split_point = (function sicmutils$numerical$quadrature$adaptive$split_point(var_args){
var G__102455 = arguments.length;
switch (G__102455) {
case 2:
return sicmutils.numerical.quadrature.adaptive.split_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.numerical.quadrature.adaptive.split_point.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.quadrature.adaptive.split_point.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return sicmutils.numerical.quadrature.adaptive.split_point.cljs$core$IFn$_invoke$arity$3(a,b,(0));
}));

(sicmutils.numerical.quadrature.adaptive.split_point.cljs$core$IFn$_invoke$arity$3 = (function (a,b,fuzz_factor){
if((fuzz_factor >= (0))){
} else {
throw (new Error("Assert failed: (>= fuzz-factor 0)"));
}

if((fuzz_factor < (1))){
} else {
throw (new Error("Assert failed: (< fuzz-factor 1)"));
}

var width = (b - a);
var offset = (((fuzz_factor === (0)))?0.5:(0.5 + (fuzz_factor * (cljs.core.rand.cljs$core$IFn$_invoke$arity$1(2.0) - (1)))));
return (a + (offset * width));
}));

(sicmutils.numerical.quadrature.adaptive.split_point.cljs$lang$maxFixedArity = 3);

/**
 * Populates the supplied `opts` dictionary with defaults required by `adaptive`.
 *   Two of these have values controlled by dynamic variables in `adaptive.cljc`.
 */
sicmutils.numerical.quadrature.adaptive.fill_defaults = (function sicmutils$numerical$quadrature$adaptive$fill_defaults(opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"maxterms","maxterms",951779603),sicmutils.numerical.quadrature.adaptive._STAR_adaptive_maxterms_STAR_,new cljs.core.Keyword(null,"adaptive-neighborhood-width","adaptive-neighborhood-width",791007094),sicmutils.numerical.quadrature.adaptive._STAR_neighborhood_width_STAR_,new cljs.core.Keyword(null,"interval","interval",1708495417),sicmutils.numerical.quadrature.common.open], null),opts], 0));
});
/**
 * Accepts one or two 'integrators', ie, functions of:
 * 
 *   - `f`: some integrand
 *   - `a` and `b`: the lower and upper endpoints of integration
 *   - `opts`, a dictionary of configuration options
 * 
 *   And returns a new integrator that adaptively subdivides the region $a, b$ into
 *   intervals if integration fails to converge. If two integrators are supplied,
 *   the first is applied to any interval that's not explicitly closed on both
 *   ends, and the second integrator is applied to explicitly closed intervals.
 *   This behavior depends on the interval set in the supplied `opts` dictionary.
 * 
 *   All `opts` will be passed through to the supplied `integrate` functions.
 * 
 *   ### Optional arguments relevant to `adaptive`:
 * 
 *   `:maxterms`: defaults to `*adaptive-maxterms*`. This is passed to the
 *   underlying integrators, and determines how long each interval attempts to
 *   converge before a subdivision.
 * 
 *   `:adaptive-neighborhood-width`: When dividing an interval, the split point
 *   will be within this factor of the midpoint. Set `:adaptive-neighborhood-width`
 *   to 0 for deterministic splitting.
 */
sicmutils.numerical.quadrature.adaptive.adaptive = (function sicmutils$numerical$quadrature$adaptive$adaptive(var_args){
var G__102462 = arguments.length;
switch (G__102462) {
case 1:
return sicmutils.numerical.quadrature.adaptive.adaptive.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.numerical.quadrature.adaptive.adaptive.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.quadrature.adaptive.adaptive.cljs$core$IFn$_invoke$arity$1 = (function (integrator){
return sicmutils.numerical.quadrature.adaptive.adaptive.cljs$core$IFn$_invoke$arity$2(integrator,integrator);
}));

(sicmutils.numerical.quadrature.adaptive.adaptive.cljs$core$IFn$_invoke$arity$2 = (function (open_integrator,closed_integrator){
return (function() {
var sicmutils$numerical$quadrature$adaptive$rec = null;
var sicmutils$numerical$quadrature$adaptive$rec__3 = (function (f,a,b){
return sicmutils$numerical$quadrature$adaptive$rec.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.PersistentArrayMap.EMPTY);
});
var sicmutils$numerical$quadrature$adaptive$rec__4 = (function (f,a,b,opts){
var opts__$1 = sicmutils.numerical.quadrature.adaptive.fill_defaults(opts);
var integrate = (function (l,r,interval){
if(sicmutils.numerical.quadrature.common.closed_QMARK_(interval)){
return (closed_integrator.cljs$core$IFn$_invoke$arity$4 ? closed_integrator.cljs$core$IFn$_invoke$arity$4(f,l,r,opts__$1) : closed_integrator.call(null,f,l,r,opts__$1));
} else {
return (open_integrator.cljs$core$IFn$_invoke$arity$4 ? open_integrator.cljs$core$IFn$_invoke$arity$4(f,l,r,opts__$1) : open_integrator.call(null,f,l,r,opts__$1));
}
});
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,new cljs.core.Keyword(null,"interval","interval",1708495417).cljs$core$IFn$_invoke$arity$1(opts__$1)], null)], null);
var sum = sicmutils.util.aggregate._STAR_fold_STAR_.call(null);
var iteration = (0);
while(true){
if(cljs.core.empty_QMARK_(stack)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),true,new cljs.core.Keyword(null,"iterations","iterations",-1402710890),iteration,new cljs.core.Keyword(null,"result","result",1415092211),sicmutils.util.aggregate._STAR_fold_STAR_.call(null,sum)], null);
} else {
var vec__102472 = cljs.core.peek(stack);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102472,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102472,(1),null);
var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102472,(2),null);
var remaining = cljs.core.pop(stack);
var map__102475 = integrate(l,r,interval);
var map__102475__$1 = cljs.core.__destructure_map(map__102475);
var converged_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102475__$1,new cljs.core.Keyword(null,"converged?","converged?",1779059976));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102475__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core.truth_(converged_QMARK_)){
var G__102483 = remaining;
var G__102484 = sicmutils.util.aggregate._STAR_fold_STAR_.call(null,sum,result);
var G__102485 = (iteration + (1));
stack = G__102483;
sum = G__102484;
iteration = G__102485;
continue;
} else {
var midpoint = sicmutils.numerical.quadrature.adaptive.split_point.cljs$core$IFn$_invoke$arity$3(l,r,new cljs.core.Keyword(null,"adaptive-neighborhood-width","adaptive-neighborhood-width",791007094).cljs$core$IFn$_invoke$arity$1(opts__$1));
var G__102486 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(remaining,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [midpoint,r,sicmutils.numerical.quadrature.common.close_l(interval)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,midpoint,sicmutils.numerical.quadrature.common.close_r(interval)], null)], 0));
var G__102487 = sum;
var G__102488 = (iteration + (1));
stack = G__102486;
sum = G__102487;
iteration = G__102488;
continue;
}
}
break;
}
});
sicmutils$numerical$quadrature$adaptive$rec = function(f,a,b,opts){
switch(arguments.length){
case 3:
return sicmutils$numerical$quadrature$adaptive$rec__3.call(this,f,a,b);
case 4:
return sicmutils$numerical$quadrature$adaptive$rec__4.call(this,f,a,b,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sicmutils$numerical$quadrature$adaptive$rec.cljs$core$IFn$_invoke$arity$3 = sicmutils$numerical$quadrature$adaptive$rec__3;
sicmutils$numerical$quadrature$adaptive$rec.cljs$core$IFn$_invoke$arity$4 = sicmutils$numerical$quadrature$adaptive$rec__4;
return sicmutils$numerical$quadrature$adaptive$rec;
})()
}));

(sicmutils.numerical.quadrature.adaptive.adaptive.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sicmutils.numerical.quadrature.adaptive.js.map
