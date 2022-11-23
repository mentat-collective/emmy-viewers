goog.provide('sicmutils.numerical.quadrature.riemann');
/**
 * Takes:
 * 
 *   - `area-fn`, a function of the left and right endpoints of some integration
 *   slice
 *   - definite integration bounds `a` and `b`
 * 
 *   and returns a function of `n`, the number of slices to use for an integration
 *   estimate.
 * 
 *   `area-fn` should return an estimate of the area under some curve between the
 *   `l` and `r` bounds it receives.
 */
sicmutils.numerical.quadrature.riemann.windowed_sum = (function sicmutils$numerical$quadrature$riemann$windowed_sum(area_fn,a,b){
return (function (n){
var width = ((b - a) / n);
var grid_points = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$3(a,b,width),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null));
return sicmutils.util.aggregate.sum.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(area_fn,grid_points,cljs.core.rest(grid_points)));
});
});
sicmutils.numerical.quadrature.riemann.left_sum_STAR_ = (function sicmutils$numerical$quadrature$riemann$left_sum_STAR_(f,a,b){
return sicmutils.numerical.quadrature.riemann.windowed_sum((function (l,r){
return ((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(l) : f.call(null,l)) * (r - l));
}),a,b);
});
/**
 * Returns a function of `n`, some number of slices of the total integration
 *   range, that returns an estimate for the definite integral of $f$ over the
 *   range $[a, b)$ using a left Riemann sum.
 */
sicmutils.numerical.quadrature.riemann.left_sum = (function sicmutils$numerical$quadrature$riemann$left_sum(f,a,b){
var width = (b - a);
return (function (n){
var h = (width / n);
var fx = (function (i){
var G__102456 = (a + (i * h));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__102456) : f.call(null,G__102456));
});
return (h * sicmutils.util.aggregate.sum.cljs$core$IFn$_invoke$arity$3(fx,(0),n));
});
});
sicmutils.numerical.quadrature.riemann.right_sum_STAR_ = (function sicmutils$numerical$quadrature$riemann$right_sum_STAR_(f,a,b){
return sicmutils.numerical.quadrature.riemann.windowed_sum((function (l,r){
return ((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(r) : f.call(null,r)) * (r - l));
}),a,b);
});
/**
 * Returns a function of `n`, some number of slices of the total integration
 *   range, that returns an estimate for the definite integral of $f$ over the
 *   range $(a, b]$ using a right Riemann sum.
 */
sicmutils.numerical.quadrature.riemann.right_sum = (function sicmutils$numerical$quadrature$riemann$right_sum(f,a,b){
var width = (b - a);
return (function (n){
var h = (width / n);
var start = (a + h);
var fx = (function (i){
var G__102461 = (start + (i * h));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__102461) : f.call(null,G__102461));
});
return (h * sicmutils.util.aggregate.sum.cljs$core$IFn$_invoke$arity$3(fx,(0),n));
});
});
/**
 * Returns an estimate for the definite integral of $f$ over the range $[a, b]$
 *   using an upper Riemann sum.
 * 
 *   This function may or may not make an evaluation at the endpoints $a$ or $b$,
 *   depending on whether or not the function is increasing or decreasing at the
 *   endpoints.
 */
sicmutils.numerical.quadrature.riemann.upper_sum = (function sicmutils$numerical$quadrature$riemann$upper_sum(f,a,b){
return sicmutils.numerical.quadrature.riemann.windowed_sum((function (l,r){
return ((r - l) * (function (){var x__4336__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(l) : f.call(null,l));
var y__4337__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(r) : f.call(null,r));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})());
}),a,b);
});
/**
 * Returns an estimate for the definite integral of $f$ over the range $[a, b]$
 *   using a lower Riemann sum.
 * 
 *   This function may or may not make an evaluation at the endpoints $a$ or $b$,
 *   depending on whether or not the function is increasing or decreasing at the
 *   endpoints.
 */
sicmutils.numerical.quadrature.riemann.lower_sum = (function sicmutils$numerical$quadrature$riemann$lower_sum(f,a,b){
return sicmutils.numerical.quadrature.riemann.windowed_sum((function (l,r){
return ((r - l) * (function (){var x__4339__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(l) : f.call(null,l));
var y__4340__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(r) : f.call(null,r));
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})());
}),a,b);
});
/**
 * NOTE - this is only appropriate for Richardson-accelerating sequences with t=2,
 *   p=q=1.
 * 
 *   This only applies to the Riemann sequences in this namespace!
 */
sicmutils.numerical.quadrature.riemann.accelerate = (function sicmutils$numerical$quadrature$riemann$accelerate(estimate_seq,p__102476){
var map__102477 = p__102476;
var map__102477__$1 = cljs.core.__destructure_map(map__102477);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102477__$1,new cljs.core.Keyword(null,"n","n",562130025),(1));
var accelerate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102477__$1,new cljs.core.Keyword(null,"accelerate?","accelerate?",-29657518));
if(cljs.core.truth_((function (){var and__4251__auto__ = accelerate_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return typeof n === 'number';
} else {
return and__4251__auto__;
}
})())){
return sicmutils.polynomial.richardson.richardson_sequence.cljs$core$IFn$_invoke$arity$4(estimate_seq,(2),(1),(1));
} else {
return estimate_seq;
}
});
/**
 * Returns a function of `n`, some number of slices of the total integration
 *   range, that returns an estimate for the definite integral of $f$ over the
 *   range $(a, b)$ using midpoint estimates.
 */
sicmutils.numerical.quadrature.riemann.midpoint_sum = (function sicmutils$numerical$quadrature$riemann$midpoint_sum(f,a,b){
var width = (b - a);
return (function (n){
var h = (width / n);
var offset = (a + (h / 2.0));
var fx = (function (i){
var G__102479 = (offset + (i * h));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__102479) : f.call(null,G__102479));
});
return (h * sicmutils.util.aggregate.sum.cljs$core$IFn$_invoke$arity$3(fx,(0),n));
});
});
/**
 * Returns a function of:
 * 
 *   - `Sn`: a sum estimate for `n` partitions, and
 *   - `n`: the number of partitions
 * 
 *   And returns a new estimate for $S_{2n}$ by sampling the midpoints of each
 *   slice. This incremental update rule is valid for left and right Riemann sums,
 *   as well as the midpoint method.
 */
sicmutils.numerical.quadrature.riemann.Sn__GT_S2n = (function sicmutils$numerical$quadrature$riemann$Sn__GT_S2n(f,a,b){
var midpoints = sicmutils.numerical.quadrature.riemann.midpoint_sum(f,a,b);
return (function (Sn,n){
return ((Sn + midpoints(n)) / 2.0);
});
});
sicmutils.numerical.quadrature.riemann.left_sequence_STAR_ = (function sicmutils$numerical$quadrature$riemann$left_sequence_STAR_(f,a,b,n0){
var first_S = sicmutils.numerical.quadrature.riemann.left_sum(f,a,b)(n0);
var steps = sicmutils.util.stream.powers.cljs$core$IFn$_invoke$arity$2((2),n0);
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(sicmutils.numerical.quadrature.riemann.Sn__GT_S2n(f,a,b),first_S,steps);
});
/**
 * Accepts:
 * 
 *   - `S-fn`: a function of `n` that generates a numerical integral estimate from
 *   `n` slices of some region, and
 *   - `next-S-fn`: a function of (previous estimate, previous `n`) => new estimate
 *   - `factor`: the factor by which `n` increases for successive estimates
 *   - `n0`: the initial `n` to pass to `S-fn`
 * 
 *   The new estimate returned b `next-S-fn` should be of `factor * n` slices.
 */
sicmutils.numerical.quadrature.riemann.geometric_estimate_seq = (function sicmutils$numerical$quadrature$riemann$geometric_estimate_seq(S_fn,next_S_fn,factor,n0){
var first_S = (S_fn.cljs$core$IFn$_invoke$arity$1 ? S_fn.cljs$core$IFn$_invoke$arity$1(n0) : S_fn.call(null,n0));
var steps = sicmutils.util.stream.powers.cljs$core$IFn$_invoke$arity$2(factor,n0);
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(next_S_fn,first_S,steps);
});
/**
 * Returns a (lazy) sequence of successively refined estimates of the integral of
 *   `f` over the closed-open interval $a, b$ by taking left-Riemann sums with
 * 
 *   n0, 2n0, 4n0, ...
 * 
 *   slices.
 */
sicmutils.numerical.quadrature.riemann.left_sequence_STAR__STAR_ = (function sicmutils$numerical$quadrature$riemann$left_sequence_STAR__STAR_(var_args){
var G__102491 = arguments.length;
switch (G__102491) {
case 3:
return sicmutils.numerical.quadrature.riemann.left_sequence_STAR__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sicmutils.numerical.quadrature.riemann.left_sequence_STAR__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.quadrature.riemann.left_sequence_STAR__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,a,b){
return sicmutils.numerical.quadrature.riemann.left_sequence_STAR__STAR_.cljs$core$IFn$_invoke$arity$4(f,a,b,(1));
}));

(sicmutils.numerical.quadrature.riemann.left_sequence_STAR__STAR_.cljs$core$IFn$_invoke$arity$4 = (function (f,a,b,n0){
return sicmutils.numerical.quadrature.riemann.geometric_estimate_seq(sicmutils.numerical.quadrature.riemann.left_sum(f,a,b),sicmutils.numerical.quadrature.riemann.Sn__GT_S2n(f,a,b),(2),n0);
}));

(sicmutils.numerical.quadrature.riemann.left_sequence_STAR__STAR_.cljs$lang$maxFixedArity = 4);

/**
 * Accepts:
 * 
 *   - `S-fn`: a function of `n` that generates a numerical integral estimate from
 *   `n` slices of some region, and
 *   - `next-S-fn`: a function of (previous estimate, previous `n`) => new estimate
 *   - `factor`: the factor by which `next-S-fn` increases `n` in its returned estimate
 *   - `n-seq`: a monotonically increasing sequence of `n` slices to use.
 * 
 *   Returns a sequence of estimates of returned by either function for each `n` in
 *   `n-seq`. Internally decides whether or not to use `S-fn` or `next-S-fn` to
 *   generate successive estimates.
 */
sicmutils.numerical.quadrature.riemann.general_estimate_seq = (function sicmutils$numerical$quadrature$riemann$general_estimate_seq(S_fn,next_S_fn,factor,n_seq){
var f = (function (p__102492,n){
var vec__102493 = p__102492;
var cache = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102493,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102493,(1),null);
var Sn = (((cljs.core.rem(n,factor) === (0)))?(function (){var prev = cljs.core.quot(n,factor);
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,prev);
if(cljs.core.truth_(temp__5751__auto__)){
var S_prev = temp__5751__auto__;
return (next_S_fn.cljs$core$IFn$_invoke$arity$2 ? next_S_fn.cljs$core$IFn$_invoke$arity$2(S_prev,prev) : next_S_fn.call(null,S_prev,prev));
} else {
return (S_fn.cljs$core$IFn$_invoke$arity$1 ? S_fn.cljs$core$IFn$_invoke$arity$1(n) : S_fn.call(null,n));
}
})():(S_fn.cljs$core$IFn$_invoke$arity$1 ? S_fn.cljs$core$IFn$_invoke$arity$1(n) : S_fn.call(null,n)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,n,Sn),Sn], null);
});
return cljs.core.rest(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,null], null),n_seq)));
});
/**
 * Function that generalizes the ability to create successively-refined estimates
 *   of an integral, given:
 * 
 *   - `S-fn`: a function of `n` that generates a numerical integral estimate from
 *   `n` slices of some region, and
 *   - `next-S-fn`: a function of (previous estimate, previous `n`) => new estimate
 *   - `factor`: the factor by which `next-S-fn` increases `n` in its returned estimate
 *   - `n`: EITHER a number, or a monotonically increasing sequence of `n` slices to use.
 * 
 *   If `n` is a sequence, returns a (lazy) sequence of estimates generated for
 *   each entry in `n`.
 * 
 *   If `n` is a number, returns a lazy sequence of estimates generated for each
 *   entry in a geometrically increasing series of inputs $n, n(factor),
 *   n(factor^2), ....$
 * 
 *   Internally decides whether or not to use `S-fn` or `next-S-fn` to generate
 *   successive estimates.
 */
sicmutils.numerical.quadrature.riemann.incrementalize = (function sicmutils$numerical$quadrature$riemann$incrementalize(S_fn,next_S_fn,factor,n){
var f = ((typeof n === 'number')?sicmutils.numerical.quadrature.riemann.geometric_estimate_seq:sicmutils.numerical.quadrature.riemann.general_estimate_seq);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(S_fn,next_S_fn,factor,n) : f.call(null,S_fn,next_S_fn,factor,n));
});
/**
 * Returns a (lazy) sequence of successively refined estimates of the integral of
 *   `f` over the closed-open interval $a, b$ by taking left-Riemann sums.
 * 
 *   ### Optional Arguments
 * 
 *   `:n`: If `n` is a number, returns estimates with $n, 2n, 4n, ...$ slices,
 *   geometrically increasing by a factor of 2 with each estimate.
 * 
 *   If `n` is a sequence, the resulting sequence will hold an estimate for each
 *   integer number of slices in that sequence.
 * 
 *   `:accelerate?`: if supplied (and `n` is a number), attempts to accelerate
 *   convergence using Richardson extrapolation. If `n` is a sequence this option
 *   is ignored.
 */
sicmutils.numerical.quadrature.riemann.left_sequence = (function sicmutils$numerical$quadrature$riemann$left_sequence(var_args){
var G__102498 = arguments.length;
switch (G__102498) {
case 3:
return sicmutils.numerical.quadrature.riemann.left_sequence.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sicmutils.numerical.quadrature.riemann.left_sequence.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.quadrature.riemann.left_sequence.cljs$core$IFn$_invoke$arity$3 = (function (f,a,b){
return sicmutils.numerical.quadrature.riemann.left_sequence.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.numerical.quadrature.riemann.left_sequence.cljs$core$IFn$_invoke$arity$4 = (function (f,a,b,opts){
var S = sicmutils.numerical.quadrature.riemann.left_sum(f,a,b);
var next_S = sicmutils.numerical.quadrature.riemann.Sn__GT_S2n(f,a,b);
return sicmutils.numerical.quadrature.riemann.accelerate(sicmutils.numerical.quadrature.riemann.incrementalize(S,next_S,(2),new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$2(opts,(1))),opts);
}));

(sicmutils.numerical.quadrature.riemann.left_sequence.cljs$lang$maxFixedArity = 4);

/**
 * Returns a (lazy) sequence of successively refined estimates of the integral of
 *   `f` over the closed-open interval $a, b$ by taking right-Riemann sums.
 * 
 *   ### Optional Arguments
 * 
 *   `:n`: If `n` is a number, returns estimates with $n, 2n, 4n, ...$ slices,
 *   geometrically increasing by a factor of 2 with each estimate.
 * 
 *   If `n` is a sequence, the resulting sequence will hold an estimate for each
 *   integer number of slices in that sequence.
 * 
 *   `:accelerate?`: if supplied (and `n` is a number), attempts to accelerate
 *   convergence using Richardson extrapolation. If `n` is a sequence this option
 *   is ignored.
 */
sicmutils.numerical.quadrature.riemann.right_sequence = (function sicmutils$numerical$quadrature$riemann$right_sequence(var_args){
var G__102503 = arguments.length;
switch (G__102503) {
case 3:
return sicmutils.numerical.quadrature.riemann.right_sequence.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sicmutils.numerical.quadrature.riemann.right_sequence.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.quadrature.riemann.right_sequence.cljs$core$IFn$_invoke$arity$3 = (function (f,a,b){
return sicmutils.numerical.quadrature.riemann.right_sequence.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.numerical.quadrature.riemann.right_sequence.cljs$core$IFn$_invoke$arity$4 = (function (f,a,b,opts){
var S = sicmutils.numerical.quadrature.riemann.right_sum(f,a,b);
var next_S = sicmutils.numerical.quadrature.riemann.Sn__GT_S2n(f,a,b);
return sicmutils.numerical.quadrature.riemann.accelerate(sicmutils.numerical.quadrature.riemann.incrementalize(S,next_S,(2),new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$2(opts,(1))),opts);
}));

(sicmutils.numerical.quadrature.riemann.right_sequence.cljs$lang$maxFixedArity = 4);

/**
 * Returns a (lazy) sequence of successively refined estimates of the integral of
 *   `f` over the closed interval $(a, b)$ by taking lower-Riemann sums.
 * 
 *   ### Optional Arguments
 * 
 *   `:n`: If `n` is a number, returns estimates with $n, 2n, 4n, ...$ slices,
 *   geometrically increasing by a factor of 2 with each estimate.
 * 
 *   If `n` is a sequence, the resulting sequence will hold an estimate for each
 *   integer number of slices in that sequence.
 * 
 *   `:accelerate?`: if supplied (and `n` is a number), attempts to accelerate
 *   convergence using Richardson extrapolation. If `n` is a sequence this option
 *   is ignored.
 */
sicmutils.numerical.quadrature.riemann.lower_sequence = (function sicmutils$numerical$quadrature$riemann$lower_sequence(var_args){
var G__102519 = arguments.length;
switch (G__102519) {
case 3:
return sicmutils.numerical.quadrature.riemann.lower_sequence.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sicmutils.numerical.quadrature.riemann.lower_sequence.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.quadrature.riemann.lower_sequence.cljs$core$IFn$_invoke$arity$3 = (function (f,a,b){
return sicmutils.numerical.quadrature.riemann.lower_sequence.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.numerical.quadrature.riemann.lower_sequence.cljs$core$IFn$_invoke$arity$4 = (function (f,a,b,p__102553){
var map__102554 = p__102553;
var map__102554__$1 = cljs.core.__destructure_map(map__102554);
var opts = map__102554__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102554__$1,new cljs.core.Keyword(null,"n","n",562130025),(1));
var n_seq = ((typeof n === 'number')?sicmutils.util.stream.powers.cljs$core$IFn$_invoke$arity$2((2),n):n);
return sicmutils.numerical.quadrature.riemann.accelerate(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.numerical.quadrature.riemann.lower_sum(f,a,b),n_seq),opts);
}));

(sicmutils.numerical.quadrature.riemann.lower_sequence.cljs$lang$maxFixedArity = 4);

/**
 * Returns a (lazy) sequence of successively refined estimates of the integral of
 *   `f` over the closed interval $(a, b)$ by taking upper-Riemann sums.
 * 
 *   ### Optional Arguments
 * 
 *   `:n`: If `n` is a number, returns estimates with $n, 2n, 4n, ...$ slices,
 *   geometrically increasing by a factor of 2 with each estimate.
 * 
 *   If `n` is a sequence, the resulting sequence will hold an estimate for each
 *   integer number of slices in that sequence.
 * 
 *   `:accelerate?`: if supplied (and `n` is a number), attempts to accelerate
 *   convergence using Richardson extrapolation. If `n` is a sequence this option
 *   is ignored.
 */
sicmutils.numerical.quadrature.riemann.upper_sequence = (function sicmutils$numerical$quadrature$riemann$upper_sequence(var_args){
var G__102559 = arguments.length;
switch (G__102559) {
case 3:
return sicmutils.numerical.quadrature.riemann.upper_sequence.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sicmutils.numerical.quadrature.riemann.upper_sequence.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.quadrature.riemann.upper_sequence.cljs$core$IFn$_invoke$arity$3 = (function (f,a,b){
return sicmutils.numerical.quadrature.riemann.upper_sequence.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.numerical.quadrature.riemann.upper_sequence.cljs$core$IFn$_invoke$arity$4 = (function (f,a,b,p__102564){
var map__102565 = p__102564;
var map__102565__$1 = cljs.core.__destructure_map(map__102565);
var opts = map__102565__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102565__$1,new cljs.core.Keyword(null,"n","n",562130025),(1));
var n_seq = ((typeof n === 'number')?sicmutils.util.stream.powers.cljs$core$IFn$_invoke$arity$2((2),n):n);
return sicmutils.numerical.quadrature.riemann.accelerate(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.numerical.quadrature.riemann.upper_sum(f,a,b),n_seq),opts);
}));

(sicmutils.numerical.quadrature.riemann.upper_sequence.cljs$lang$maxFixedArity = 4);

/**
 * Returns an estimate of the integral of `f` across the closed-open interval $a,
 *   b$ using a left-Riemann sum with $1, 2, 4 ... 2^n$ windows for each estimate.
 * 
 *   Optionally accepts `opts`, a dict of optional arguments. All of these get
 *   passed on to `us/seq-limit` to configure convergence checking.
 * 
 *   See `left-sequence` for information on the optional args in `opts` that
 *   customize this function's behavior.
 */
sicmutils.numerical.quadrature.riemann.left_integral = sicmutils.numerical.quadrature.common.make_integrator_fn((function (f,a,b){
return ((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a)) * (b - a));
}),sicmutils.numerical.quadrature.riemann.left_sequence);
/**
 * Returns an estimate of the integral of `f` across the closed-open interval $a,
 *   b$ using a right-Riemann sum with $1, 2, 4 ... 2^n$ windows for each estimate.
 * 
 *   Optionally accepts `opts`, a dict of optional arguments. All of these get
 *   passed on to `us/seq-limit` to configure convergence checking.
 * 
 *   See `right-sequence` for information on the optional args in `opts` that
 *   customize this function's behavior.
 */
sicmutils.numerical.quadrature.riemann.right_integral = sicmutils.numerical.quadrature.common.make_integrator_fn((function (f,a,b){
return ((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(b) : f.call(null,b)) * (b - a));
}),sicmutils.numerical.quadrature.riemann.right_sequence);
/**
 * Returns an estimate of the integral of `f` across the closed-open interval $a,
 *   b$ using a lower-Riemann sum with $1, 2, 4 ... 2^n$ windows for each estimate.
 * 
 *   Optionally accepts `opts`, a dict of optional arguments. All of these get
 *   passed on to `us/seq-limit` to configure convergence checking.
 * 
 *   See `lower-sequence` for information on the optional args in `opts` that
 *   customize this function's behavior.
 */
sicmutils.numerical.quadrature.riemann.lower_integral = sicmutils.numerical.quadrature.common.make_integrator_fn((function (f,a,b){
return ((function (){var x__4339__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
var y__4340__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(b) : f.call(null,b));
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})() * (b - a));
}),sicmutils.numerical.quadrature.riemann.lower_sequence);
/**
 * Returns an estimate of the integral of `f` across the closed-open interval $a,
 *   b$ using an upper-Riemann sum with $1, 2, 4 ... 2^n$ windows for each estimate.
 * 
 *   Optionally accepts `opts`, a dict of optional arguments. All of these get
 *   passed on to `us/seq-limit` to configure convergence checking.
 * 
 *   See `upper-sequence` for information on the optional args in `opts` that
 *   customize this function's behavior.
 */
sicmutils.numerical.quadrature.riemann.upper_integral = sicmutils.numerical.quadrature.common.make_integrator_fn((function (f,a,b){
return ((function (){var x__4336__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
var y__4337__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(b) : f.call(null,b));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})() * (b - a));
}),sicmutils.numerical.quadrature.riemann.upper_sequence);

//# sourceMappingURL=sicmutils.numerical.quadrature.riemann.js.map
