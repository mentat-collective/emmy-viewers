goog.provide('sicmutils.numerical.quadrature.simpson');
/**
 * Returns a (lazy) sequence of successively refined estimates of the integral of
 *   `f` over the closed interval $[a, b]$ using Simpson's rule.
 * 
 *   Simpson's rule is equivalent to the trapezoid method subject to one refinement
 *   of Richardson extrapolation. The trapezoid method fits a line to each
 *   integration slice. Simpson's rule fits a quadratic to each slice.
 * 
 *   Returns estimates with $n, 2n, 4n, ...$ slices, geometrically increasing by a
 *   factor of 2 with each estimate.
 * 
 *   ### Optional arguments:
 * 
 *   If supplied, `:n` (default 1) specifies the initial number of slices to use.
 */
sicmutils.numerical.quadrature.simpson.simpson_sequence = (function sicmutils$numerical$quadrature$simpson$simpson_sequence(var_args){
var G__102878 = arguments.length;
switch (G__102878) {
case 3:
return sicmutils.numerical.quadrature.simpson.simpson_sequence.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sicmutils.numerical.quadrature.simpson.simpson_sequence.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.quadrature.simpson.simpson_sequence.cljs$core$IFn$_invoke$arity$3 = (function (f,a,b){
return sicmutils.numerical.quadrature.simpson.simpson_sequence.cljs$core$IFn$_invoke$arity$4(f,a,b,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(1)], null));
}));

(sicmutils.numerical.quadrature.simpson.simpson_sequence.cljs$core$IFn$_invoke$arity$4 = (function (f,a,b,p__102879){
var map__102880 = p__102879;
var map__102880__$1 = cljs.core.__destructure_map(map__102880);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102880__$1,new cljs.core.Keyword(null,"n","n",562130025),(1));
if(typeof n === 'number'){
} else {
throw (new Error("Assert failed: (number? n)"));
}

return sicmutils.polynomial.richardson.richardson_column.cljs$core$IFn$_invoke$arity$5(sicmutils.numerical.quadrature.trapezoid.trapezoid_sequence.cljs$core$IFn$_invoke$arity$4(f,a,b,n),(1),(2),(2),(2));
}));

(sicmutils.numerical.quadrature.simpson.simpson_sequence.cljs$lang$maxFixedArity = 4);

/**
 * Returns an estimate of the integral of `f` over the closed interval $[a, b]$
 *   using Simpson's rule with $1, 2, 4 ... 2^n$ windows for each estimate.
 * 
 *   Optionally accepts `opts`, a dict of optional arguments. All of these get
 *   passed on to `us/seq-limit` to configure convergence checking.
 * 
 *   See [[simpson-sequence]] for more information about Simpson's rule, caveats that
 *   might apply when using this integration method and information on the optional
 *   args in `opts` that customize this function's behavior.
 */
sicmutils.numerical.quadrature.simpson.integral = sicmutils.numerical.quadrature.common.make_integrator_fn(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,sicmutils.numerical.quadrature.simpson.simpson_sequence),sicmutils.numerical.quadrature.simpson.simpson_sequence);

//# sourceMappingURL=sicmutils.numerical.quadrature.simpson.js.map
