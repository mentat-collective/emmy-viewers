goog.provide('sicmutils.numerical.unimin.brent');
/**
 * Brent's method terminates (ie converges) when `a` and `b` are narrow enough
 *   that `x` falls within `2 * tolerance` of both `a` and `b`, ie:
 * 
 *   `max(x - a, b - x) <= 2tol`
 * 
 *   From Numerical Recipes:
 * 
 *   "A typical ending configuration for Brent's method is that $a$ and $b$
 *   are `(* 2 midpoint tol)` apart, with $x$ (the best abscissa) at the midpoint
 *   of $a$ and $b$, and therefore fractionally accurate to +-tol." ~Numerical
 *   Recipes, 397.
 *   
 */
sicmutils.numerical.unimin.brent.terminate_QMARK_ = (function sicmutils$numerical$unimin$brent$terminate_QMARK_(a,x,b,tol2){
var half_ab = (0.5 * (b - a));
var mid = (0.5 * (a + b));
var mid__GT_x = sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1((x - mid));
return ((mid__GT_x + half_ab) <= tol2);
});
/**
 * Returns a pair of:
 * 
 *   - The interval width between the new `a` and `b` after the algorithm completes
 *  this golden step
 *   - The delta that needs to be applied to `x` to take it into the larger of the
 *  two gaps between `a` and `b,` ie, to `new_x`:
 * 
 *   `xa---------new_x<---xx------xb`
 * 
 *   NOTE that in Brent's algorithm, a golden section step wipes out the tracked
 *   history of `p/q` parabolic steps that the algorithm uses to decide between
 *   parabolic and golden section steps.
 * 
 *   The goal of the dance is to force a golden section step every $log_2((b - a) /
 *   tol1)$ steps by allowing a parabolic step as long as it halves the step taken
 *   two iterations ago. Without this reset the algorithm would attempt fewer
 *   beneficial parabolic steps.
 */
sicmutils.numerical.unimin.brent.golden_section_step = (function sicmutils$numerical$unimin$brent$golden_section_step(a,x,b){
var midpoint = (0.5 * (a + b));
var new_width = (((x >= midpoint))?(a - x):(b - x));
var step = (sicmutils.numerical.unimin.golden.inv_phi2 * new_width);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_width,step], null);
});
/**
 * The parabolic step `p/q` is valid if the step:
 * 
 *   - keeps the candidate point `x` inbounds, ie, `a < x + p/q < b`
 *   - is at least 1/2 of `target`.
 * 
 *   `target` is a slightly tricky quantity, and depends on the type of step taken
 *   in the previous two iterations:
 * 
 *   -  *, golden: `target` == the full `(a, b)` interval `b - a`
 *   -  golden, *: `target` == the size of the step taken by the previous golden
 *   - para, para: `target` == `p/q` from two steps ago
 * 
 *   The idea is to force a golden section step every so often by narrowing the
 *   allowed jump that a parabolic step is allowed to take, and then widening the
 *   band to the full range whenever a golden section step occurs.
 * 
 *   Why the step before last? Experimentally (according to Brent) it works better
 *   than considering only the previous step, and aesthetically it feels right to
 *   give parabolic interpolation more than one try to do a nice job.
 */
sicmutils.numerical.unimin.brent.parabola_valid_QMARK_ = (function sicmutils$numerical$unimin$brent$parabola_valid_QMARK_(a,x,b,target,p,q){
var inbounds_QMARK_ = (((p > (q * (a - x)))) && ((p < (q * (b - x)))));
var lt_half_target_QMARK_ = (sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(p) < sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(((0.5 * q) * target)));
return ((inbounds_QMARK_) && (lt_half_target_QMARK_));
});
/**
 * Returns `x + delta`, guarding against any `delta` addition that would return a
 *   value outside of `(a, b)`. Specifically guards against these two cases:
 * 
 *   - If `x` + the supplied `delta` results in a point within 2*tol of either
 *  edge, `delta` is replaced with `tol1` pointing back toward the center of the
 *  interval `(a, b)`.
 * 
 *   - If `delta < tol1`, returns `x + tol1` in the direction of `delta`, to force
 *  a step of at least `tol1`.
 * 
 *   NOTE tol2 == 2*tol1.
 */
sicmutils.numerical.unimin.brent.apply_delta = (function sicmutils$numerical$unimin$brent$apply_delta(a,x,b,delta,tol1,tol2){
var x_PLUS_delta = (x + delta);
var near_edge_QMARK_ = ((((x_PLUS_delta - a) < tol2)) || (((b - x_PLUS_delta) < tol2)));
if(near_edge_QMARK_){
var middle = (0.5 * (a + b));
if((x <= middle)){
return (x + tol1);
} else {
return (x - tol1);
}
} else {
if((sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(delta) < tol1)){
if((delta > (0))){
return (x + tol1);
} else {
return (x - tol1);
}
} else {
return x_PLUS_delta;

}
}
});
/**
 * Brent's method tracks the two best (non-candidate) points, so they can be used
 *   to fit a candidate parabolic step.
 * 
 *   This function accepts:
 * 
 *   - `x2` and `x1`, the previous two best non-candidates;
 *   - `x`, the previous candidate
 *   - `new-pt` the current new point
 * 
 *   and returns the third- and second-best points, ie, the new `[x2, x1]`.
 * 
 *   NOTE on the implementation: the assumption is that `x2` and `x1` will be
 *   initialized to `x`, and that they'll be replaced by potentially WORSE values
 *   that appear for the first two steps.
 *   
 */
sicmutils.numerical.unimin.brent.update_history = (function sicmutils$numerical$unimin$brent$update_history(p__88478,p__88479,p__88480,p__88481){
var vec__88483 = p__88478;
var xx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88483,(0),null);
var fx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88483,(1),null);
var x2 = vec__88483;
var vec__88486 = p__88479;
var xx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88486,(0),null);
var fx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88486,(1),null);
var x1 = vec__88486;
var vec__88489 = p__88480;
var xx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88489,(0),null);
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88489,(1),null);
var x = vec__88489;
var vec__88492 = p__88481;
var xnew = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88492,(0),null);
var fnew = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88492,(1),null);
if((fnew <= fx)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,x], null);
} else {
if((((fnew <= fx1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xx1,xx)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xnew,fnew], null)], null);
} else {
if((((fnew <= fx2)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xx2,xx)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xx2,xx1)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xnew,fnew], null),x1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,x1], null);

}
}
}
});
/**
 * Find the minimum of the function f: R -> R in the interval [a,b] using Brent's
 *   Method, described by Richard Brent in [Algorithms for Minimization without
 *   Derivatives](https://books.google.com/books?id=AITCAgAAQBAJ&q=Brent%E2%80%99s#v=onepage&q=Parabolic&f=false).
 * 
 *   Brent's method is a combination of a golden section search with a parabolic
 *   interpolation step. Parabolic interpolation can go wild if the candidate point
 *   is close to colinear with the search bounds, or of the points are too close
 *   together.
 * 
 *   Brent's method prevents this by applying an internal test that forces a golden
 *   section step every so often. (If you want the details, see `parabola-valid?`
 *   above.)
 * 
 *   Supports the following optional keyword arguments:
 * 
 *   `:callback` if supplied, the supplied fn will be invoked at each intermediate
 *   point with the iteration count and the values of x and f(x) at each search
 *   step.
 * 
 *   `:relative-threshold` defaults to around 1.49e8, the sqrt of the machine
 *   tolerance. You won't gain any benefit attempting to set the value less than
 *   the default.
 * 
 *   `:absolute-threshold` a smaller absolute threshold that applies when the
 *   candidate minimum point is close to 0.
 * 
 *   `:maxiter` Maximum number of iterations allowed for the minimizer. Defaults to
 *   1000.
 * 
 *   `:maxfun` Maximum number of times the function can be evaluated before
 *   exiting. Defaults to `(inc maxiter)`.
 *   
 */
sicmutils.numerical.unimin.brent.brent_min = (function sicmutils$numerical$unimin$brent$brent_min(var_args){
var G__88505 = arguments.length;
switch (G__88505) {
case 3:
return sicmutils.numerical.unimin.brent.brent_min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sicmutils.numerical.unimin.brent.brent_min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.unimin.brent.brent_min.cljs$core$IFn$_invoke$arity$3 = (function (f,a,b){
return sicmutils.numerical.unimin.brent.brent_min.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.numerical.unimin.brent.brent_min.cljs$core$IFn$_invoke$arity$4 = (function (f,a,b,p__88509){
var map__88510 = p__88509;
var map__88510__$1 = cljs.core.__destructure_map(map__88510);
var relative_threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88510__$1,new cljs.core.Keyword(null,"relative-threshold","relative-threshold",-1866138970),sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.value.machine_epsilon));
var absolute_threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88510__$1,new cljs.core.Keyword(null,"absolute-threshold","absolute-threshold",842199714),1.0E-11);
var maxiter = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88510__$1,new cljs.core.Keyword(null,"maxiter","maxiter",-1867223754),(1000));
var maxfun = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88510__$1,new cljs.core.Keyword(null,"maxfun","maxfun",-50301814));
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88510__$1,new cljs.core.Keyword(null,"callback","callback",-705136228),cljs.core.constantly(null));
var maxfun__$1 = (function (){var or__4253__auto__ = maxfun;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (maxiter + (1));
}
})();
var vec__88512 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4339__auto__ = a;
var y__4340__auto__ = b;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})(),(function (){var x__4336__auto__ = a;
var y__4337__auto__ = b;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})()], null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88512,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88512,(1),null);
var vec__88515 = sicmutils.util.counted.cljs$core$IFn$_invoke$arity$1(f);
var f_counter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88515,(0),null);
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88515,(1),null);
var xmid = (0.5 * (a__$1 + b__$1));
var mid = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xmid,(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xmid) : f__$1.call(null,xmid))], null);
var G__88530 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,mid,b__$1], null);
var vec__88532 = G__88530;
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88532,(0),null);
var vec__88535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88532,(1),null);
var xx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88535,(0),null);
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88535,(1),null);
var x = vec__88535;
var b__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88532,(2),null);
var G__88531 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mid,mid], null);
var vec__88538 = G__88531;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88538,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88538,(1),null);
var target = (0);
var delta = (0);
var iteration = (0);
var G__88530__$1 = G__88530;
var G__88531__$1 = G__88531;
var target__$1 = target;
var delta__$1 = delta;
var iteration__$1 = iteration;
while(true){
var vec__88590 = G__88530__$1;
var a__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88590,(0),null);
var vec__88593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88590,(1),null);
var xx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88593,(0),null);
var fx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88593,(1),null);
var x__$1 = vec__88593;
var b__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88590,(2),null);
var vec__88596 = G__88531__$1;
var x2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88596,(0),null);
var x1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88596,(1),null);
var target__$2 = target__$1;
var delta__$2 = delta__$1;
var iteration__$2 = iteration__$1;
var tol = (absolute_threshold + (relative_threshold * sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(xx__$1)));
var tol2 = ((2) * tol);
var converged_QMARK_ = sicmutils.numerical.unimin.brent.terminate_QMARK_(a__$3,xx__$1,b__$3,tol2);
(callback.cljs$core$IFn$_invoke$arity$3 ? callback.cljs$core$IFn$_invoke$arity$3(iteration__$2,xx__$1,fx__$1) : callback.call(null,iteration__$2,xx__$1,fx__$1));

if((((iteration__$2 > maxiter)) || ((((cljs.core.deref(f_counter) > maxfun__$1)) || (converged_QMARK_))))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"result","result",1415092211),xx__$1,new cljs.core.Keyword(null,"value","value",305978217),fx__$1,new cljs.core.Keyword(null,"iterations","iterations",-1402710890),iteration__$2,new cljs.core.Keyword(null,"converged?","converged?",1779059976),converged_QMARK_,new cljs.core.Keyword(null,"fncalls","fncalls",-71376182),cljs.core.deref(f_counter)], null);
} else {
var vec__88611 = (((sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(target__$2) <= tol))?sicmutils.numerical.unimin.brent.golden_section_step(a__$3,xx__$1,b__$3):(function (){var vec__88624 = sicmutils.numerical.unimin.bracket.parabolic_pieces(x1__$1,x__$1,x2__$1);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88624,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88624,(1),null);
if(sicmutils.numerical.unimin.brent.parabola_valid_QMARK_(a__$3,xx__$1,b__$3,target__$2,p,q)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [delta__$2,(p / q)], null);
} else {
return sicmutils.numerical.unimin.brent.golden_section_step(a__$3,xx__$1,b__$3);
}
})());
var new_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88611,(0),null);
var new_delta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88611,(1),null);
var xnew = sicmutils.numerical.unimin.brent.apply_delta(a__$3,xx__$1,b__$3,new_delta,tol,tol2);
var new_pt = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xnew,(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xnew) : f__$1.call(null,xnew))], null);
var vec__88614 = (((xnew < xx__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_pt,x__$1], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,new_pt], null));
var vec__88617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88614,(0),null);
var xl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88617,(0),null);
var fl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88617,(1),null);
var l = vec__88617;
var vec__88620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88614,(1),null);
var xr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88620,(0),null);
var fr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88620,(1),null);
var r = vec__88620;
var G__88652 = (((fl <= fr))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$3,l,xr], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xl,r,b__$3], null));
var G__88653 = sicmutils.numerical.unimin.brent.update_history(x2__$1,x1__$1,x__$1,new_pt);
var G__88654 = new_target;
var G__88655 = new_delta;
var G__88656 = (iteration__$2 + (1));
G__88530__$1 = G__88652;
G__88531__$1 = G__88653;
target__$1 = G__88654;
delta__$1 = G__88655;
iteration__$1 = G__88656;
continue;
}
break;
}
}));

(sicmutils.numerical.unimin.brent.brent_min.cljs$lang$maxFixedArity = 4);

/**
 * For convenience, we also provide the sister-procedure for finding the maximum
 *   of a unimodal function using Brent's method.
 * 
 *   Negate the function, minimize, negate the result.
 */
sicmutils.numerical.unimin.brent.brent_max = (function sicmutils$numerical$unimin$brent$brent_max(f,a,b,opts){
var _f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.negate,f);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(sicmutils.numerical.unimin.brent.brent_min.cljs$core$IFn$_invoke$arity$4(_f,a,b,opts),new cljs.core.Keyword(null,"value","value",305978217),sicmutils.generic.negate);
});

//# sourceMappingURL=sicmutils.numerical.unimin.brent.js.map
