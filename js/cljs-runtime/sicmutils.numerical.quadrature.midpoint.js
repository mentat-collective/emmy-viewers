goog.provide('sicmutils.numerical.quadrature.midpoint');
sicmutils.numerical.quadrature.midpoint.single_midpoint = (function sicmutils$numerical$quadrature$midpoint$single_midpoint(f,a,b){
var width = sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(b,a);
var half_width = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(width,(2));
var midpoint = sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(a,half_width);
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(width,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(midpoint) : f.call(null,midpoint)));
});
sicmutils.numerical.quadrature.midpoint.midpoint_sum_STAR_ = (function sicmutils$numerical$quadrature$midpoint$midpoint_sum_STAR_(f,a,b){
var area_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sicmutils.numerical.quadrature.midpoint.single_midpoint,f);
return sicmutils.numerical.quadrature.riemann.windowed_sum(area_fn,a,b);
});
sicmutils.numerical.quadrature.midpoint.Sn__GT_S3n = (function sicmutils$numerical$quadrature$midpoint$Sn__GT_S3n(f,a,b){
var width = (b - a);
return (function (Sn,n){
var h = (width / n);
var delta = (h / (6));
var l_offset = (a + delta);
var r_offset = (a + ((5) * delta));
var fx = (function (i){
var ih = (i * h);
return ((function (){var G__90413 = (l_offset + ih);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__90413) : f.call(null,G__90413));
})() + (function (){var G__90414 = (r_offset + ih);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__90414) : f.call(null,G__90414));
})());
});
return ((Sn + (h * sicmutils.util.aggregate.sum.cljs$core$IFn$_invoke$arity$3(fx,(0),n))) / 3.0);
});
});
/**
 * Returns a (lazy) sequence of successively refined estimates of the integral of
 *   `f` over the open interval $(a, b)$ using the Midpoint method.
 * 
 *   ### Optional arguments:
 * 
 *   `:n`: If `:n` is a number, returns estimates with $n, 3n, 9n, ...$ slices,
 *   geometrically increasing by a factor of 3 with each estimate.
 * 
 *   If `:n` is a sequence, the resulting sequence will hold an estimate for each
 *   integer number of slices in that sequence.
 * 
 *   `:accelerate?`: if supplied (and `n` is a number), attempts to accelerate
 *   convergence using Richardson extrapolation. If `n` is a sequence this option
 *   is ignored.
 */
sicmutils.numerical.quadrature.midpoint.midpoint_sequence = (function sicmutils$numerical$quadrature$midpoint$midpoint_sequence(var_args){
var G__90416 = arguments.length;
switch (G__90416) {
case 3:
return sicmutils.numerical.quadrature.midpoint.midpoint_sequence.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sicmutils.numerical.quadrature.midpoint.midpoint_sequence.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.quadrature.midpoint.midpoint_sequence.cljs$core$IFn$_invoke$arity$3 = (function (f,a,b){
return sicmutils.numerical.quadrature.midpoint.midpoint_sequence.cljs$core$IFn$_invoke$arity$4(f,a,b,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(1)], null));
}));

(sicmutils.numerical.quadrature.midpoint.midpoint_sequence.cljs$core$IFn$_invoke$arity$4 = (function (f,a,b,p__90417){
var map__90418 = p__90417;
var map__90418__$1 = cljs.core.__destructure_map(map__90418);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__90418__$1,new cljs.core.Keyword(null,"n","n",562130025),(1));
var accelerate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90418__$1,new cljs.core.Keyword(null,"accelerate?","accelerate?",-29657518));
var S = sicmutils.numerical.quadrature.riemann.midpoint_sum(f,a,b);
var next_S = sicmutils.numerical.quadrature.midpoint.Sn__GT_S3n(f,a,b);
var xs = sicmutils.numerical.quadrature.riemann.incrementalize(S,next_S,(3),n);
if(cljs.core.truth_((function (){var and__4251__auto__ = accelerate_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return typeof n === 'number';
} else {
return and__4251__auto__;
}
})())){
return sicmutils.polynomial.richardson.richardson_sequence.cljs$core$IFn$_invoke$arity$4(xs,(3),(2),(2));
} else {
return xs;
}
}));

(sicmutils.numerical.quadrature.midpoint.midpoint_sequence.cljs$lang$maxFixedArity = 4);

/**
 * Returns an estimate of the integral of `f` over the open interval $(a, b)$
 *   using the Midpoint method with $1, 3, 9 ... 3^n$ windows for each estimate.
 * 
 *   Optionally accepts `opts`, a dict of optional arguments. All of these get
 *   passed on to `us/seq-limit` to configure convergence checking.
 * 
 *   See [[midpoint-sequence]] for information on the optional args in `opts` that
 *   customize this function's behavior.
 */
sicmutils.numerical.quadrature.midpoint.integral = sicmutils.numerical.quadrature.common.make_integrator_fn(sicmutils.numerical.quadrature.midpoint.single_midpoint,sicmutils.numerical.quadrature.midpoint.midpoint_sequence);

//# sourceMappingURL=sicmutils.numerical.quadrature.midpoint.js.map
