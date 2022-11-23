goog.provide('sicmutils.numerical.quadrature.trapezoid');
sicmutils.numerical.quadrature.trapezoid.single_trapezoid = (function sicmutils$numerical$quadrature$trapezoid$single_trapezoid(f,xl,xr){
return sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(xr,xl),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(xl) : f.call(null,xl)),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(xr) : f.call(null,xr)))),(2));
});
sicmutils.numerical.quadrature.trapezoid.trapezoid_sum_STAR_ = (function sicmutils$numerical$quadrature$trapezoid$trapezoid_sum_STAR_(f,a,b){
return sicmutils.numerical.quadrature.riemann.windowed_sum(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sicmutils.numerical.quadrature.trapezoid.single_trapezoid,f),a,b);
});
sicmutils.numerical.quadrature.trapezoid.pi_estimator_STAR_ = (function (){var f = (function (x){
return ((4) / ((1) + (x * x)));
});
return sicmutils.numerical.quadrature.trapezoid.trapezoid_sum_STAR_(f,0.0,1.0);
})();
sicmutils.numerical.quadrature.trapezoid.basically_identical_QMARK_ = (function sicmutils$numerical$quadrature$trapezoid$basically_identical_QMARK_(l_seq,r_seq){
return cljs.core.every_QMARK_((function (p1__102588_SHARP_){
return (p1__102588_SHARP_ < 1.0E-15);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,l_seq,r_seq));
});
/**
 * Returns a function of `n`, some number of slices of the total integration
 *   range, that returns an estimate for the definite integral of $f$ over the
 *   range $(a, b)$ using the trapezoid method.
 */
sicmutils.numerical.quadrature.trapezoid.trapezoid_sum = (function sicmutils$numerical$quadrature$trapezoid$trapezoid_sum(f,a,b){
var width = (b - a);
return (function (n){
var h = (width / n);
var fx = (function (i){
var G__102593 = (a + (i * h));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__102593) : f.call(null,G__102593));
});
return (h * ((((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a)) + (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(b) : f.call(null,b))) / (2)) + sicmutils.util.aggregate.sum.cljs$core$IFn$_invoke$arity$3(fx,(1),n)));
});
});
sicmutils.numerical.quadrature.trapezoid.pi_estimator = (function (){var f = (function (x){
return ((4) / ((1) + (x * x)));
});
return sicmutils.numerical.quadrature.trapezoid.trapezoid_sum_STAR_(f,0.0,1.0);
})();
/**
 * Returns a (lazy) sequence of successively refined estimates of the integral of
 *   `f` over the open interval $(a, b)$ using the Trapezoid method.
 * 
 *   ### Optional arguments:
 * 
 *   `:n`: If `:n` is a number, returns estimates with $n, 2n, 4n, ...$ slices,
 *   geometrically increasing by a factor of 2 with each estimate.
 * 
 *   If `:n` is a sequence, the resulting sequence will hold an estimate for each
 *   integer number of slices in that sequence.
 * 
 *   `:accelerate?`: if supplied (and `n` is a number), attempts to accelerate
 *   convergence using Richardson extrapolation. If `n` is a sequence this option
 *   is ignored.
 */
sicmutils.numerical.quadrature.trapezoid.trapezoid_sequence = (function sicmutils$numerical$quadrature$trapezoid$trapezoid_sequence(var_args){
var G__102597 = arguments.length;
switch (G__102597) {
case 3:
return sicmutils.numerical.quadrature.trapezoid.trapezoid_sequence.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sicmutils.numerical.quadrature.trapezoid.trapezoid_sequence.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.quadrature.trapezoid.trapezoid_sequence.cljs$core$IFn$_invoke$arity$3 = (function (f,a,b){
return sicmutils.numerical.quadrature.trapezoid.trapezoid_sequence.cljs$core$IFn$_invoke$arity$4(f,a,b,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(1)], null));
}));

(sicmutils.numerical.quadrature.trapezoid.trapezoid_sequence.cljs$core$IFn$_invoke$arity$4 = (function (f,a,b,p__102607){
var map__102608 = p__102607;
var map__102608__$1 = cljs.core.__destructure_map(map__102608);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102608__$1,new cljs.core.Keyword(null,"n","n",562130025),(1));
var accelerate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102608__$1,new cljs.core.Keyword(null,"accelerate?","accelerate?",-29657518));
var S = sicmutils.numerical.quadrature.trapezoid.trapezoid_sum(f,a,b);
var next_S = sicmutils.numerical.quadrature.riemann.Sn__GT_S2n(f,a,b);
var xs = sicmutils.numerical.quadrature.riemann.incrementalize(S,next_S,(2),n);
if(cljs.core.truth_((function (){var and__4251__auto__ = accelerate_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return typeof n === 'number';
} else {
return and__4251__auto__;
}
})())){
return sicmutils.polynomial.richardson.richardson_sequence.cljs$core$IFn$_invoke$arity$4(xs,(2),(2),(2));
} else {
return xs;
}
}));

(sicmutils.numerical.quadrature.trapezoid.trapezoid_sequence.cljs$lang$maxFixedArity = 4);

/**
 * Returns an estimate of the integral of `f` over the closed interval $[a, b]$
 *   using the Trapezoid method with $1, 2, 4 ... 2^n$ windows for each estimate.
 * 
 *   Optionally accepts `opts`, a dict of optional arguments. All of these get
 *   passed on to [[sicmutils.util.stream/seq-limit]] to configure convergence
 *   checking.
 * 
 *   See [[trapezoid-sequence]] for information on the optional args in `opts` that
 *   customize this function's behavior.
 */
sicmutils.numerical.quadrature.trapezoid.integral = sicmutils.numerical.quadrature.common.make_integrator_fn(sicmutils.numerical.quadrature.trapezoid.single_trapezoid,sicmutils.numerical.quadrature.trapezoid.trapezoid_sequence);

//# sourceMappingURL=sicmutils.numerical.quadrature.trapezoid.js.map
