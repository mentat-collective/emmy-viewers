goog.provide('sicmutils.numerical.unimin.golden');
/**
 * $\phi$, the golden ratio.
 */
sicmutils.numerical.unimin.golden.phi = ((sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1((5)) + (1)) / (2));
/**
 * $1 \over \phi$. Multiply by this to scale some distance down to the
 * larger-sized golden ratio piece.
 */
sicmutils.numerical.unimin.golden.inv_phi = ((sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1((5)) - (1)) / (2));
/**
 * $1 \over \phi^2$. Scales down twice, compared to [[inv-phi]].
 */
sicmutils.numerical.unimin.golden.inv_phi2 = ((1) - sicmutils.numerical.unimin.golden.inv_phi);
/**
 * Returns the point between `from` and `to` that cuts the region between the two
 *   into two sections in golden-ratioed proportion to each other.
 * 
 *   For example, depending on the ordering of `from` and `to`, `x` would be
 *   either:
 * 
 *   ```
 *   from------x1---to
 *   to---x2------from
 *   ```
 * 
 *   Such that `from->x1 / from->to == to->x2 / from->x1`.
 */
sicmutils.numerical.unimin.golden.golden_cut = (function sicmutils$numerical$unimin$golden$golden_cut(from,to){
return ((sicmutils.numerical.unimin.golden.inv_phi2 * from) + (sicmutils.numerical.unimin.golden.inv_phi * to));
});
/**
 * generate a new point by extending x away from `away-from`. The invariant is
 *   that `x` sits between the new point and `away-from` at the golden ratio
 *   point.
 */
sicmutils.numerical.unimin.golden.extend_pt = (function sicmutils$numerical$unimin$golden$extend_pt(x,away_from){
return (x + (sicmutils.numerical.unimin.golden.phi * (x - away_from)));
});
/**
 * Takes four pairs of test (x, f(x)) and narrows the interval down by choosing
 *   the minimum of `l` or `r` and bracketing around that.
 * 
 *   NOTE there's a guard internally against the items getting out of order; over
 *   many repeated evaluations, the points can get out of whack with the golden
 *   ratio. The slight guard is that we check internally that the interior points
 *   can never get past each other.
 */
sicmutils.numerical.unimin.golden.shrink_interval = (function sicmutils$numerical$unimin$golden$shrink_interval(f,p__101927,p__101929,p__101930,p__101931){
var vec__101934 = p__101927;
var xa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101934,(0),null);
var a = vec__101934;
var vec__101937 = p__101929;
var xl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101937,(0),null);
var fl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101937,(1),null);
var l = vec__101937;
var vec__101940 = p__101930;
var xr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101940,(0),null);
var fr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101940,(1),null);
var r = vec__101940;
var vec__101943 = p__101931;
var xb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101943,(0),null);
var b = vec__101943;
if((((xa < xl)) && ((((xl < xr)) && ((xr < xb)))))){
} else {
throw (new Error("Assert failed: (< xa xl xr xb)"));
}

var _PERCENT_ = (((fl < fr))?(function (){var new_l = sicmutils.numerical.unimin.golden.golden_cut(xr,xa);
if((new_l < xl)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_l,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(new_l) : f.call(null,new_l))], null),l,r], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,l,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_l,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(new_l) : f.call(null,new_l))], null),r], null);
}
})():(function (){var new_r = sicmutils.numerical.unimin.golden.golden_cut(xl,xb);
if((xr < new_r)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_r,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(new_r) : f.call(null,new_r))], null),b], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_r,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(new_r) : f.call(null,new_r))], null),r,b], null);
}
})());
if(cljs.core.truth_((function() { 
var G__102107__delegate = function (rest__101914_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT_,rest__101914_SHARP_);
};
var G__102107 = function (var_args){
var rest__101914_SHARP_ = null;
if (arguments.length > 0) {
var G__102108__i = 0, G__102108__a = new Array(arguments.length -  0);
while (G__102108__i < G__102108__a.length) {G__102108__a[G__102108__i] = arguments[G__102108__i + 0]; ++G__102108__i;}
  rest__101914_SHARP_ = new cljs.core.IndexedSeq(G__102108__a,0,null);
} 
return G__102107__delegate.call(this,rest__101914_SHARP_);};
G__102107.cljs$lang$maxFixedArity = 0;
G__102107.cljs$lang$applyTo = (function (arglist__102109){
var rest__101914_SHARP_ = cljs.core.seq(arglist__102109);
return G__102107__delegate(rest__101914_SHARP_);
});
G__102107.cljs$core$IFn$_invoke$arity$variadic = G__102107__delegate;
return G__102107;
})()
)){
} else {
throw (new Error("Assert failed: (fn* [& rest__101914#] (apply < rest__101914#))"));
}

return _PERCENT_;
});
/**
 * Default selection function for the best possible point. This function chooses
 *   the point out of (a, l, r, b) with the minimum function value.
 */
sicmutils.numerical.unimin.golden.best_of = (function sicmutils$numerical$unimin$golden$best_of(var_args){
var args__4870__auto__ = [];
var len__4864__auto___102110 = arguments.length;
var i__4865__auto___102111 = (0);
while(true){
if((i__4865__auto___102111 < len__4864__auto___102110)){
args__4870__auto__.push((arguments[i__4865__auto___102111]));

var G__102112 = (i__4865__auto___102111 + (1));
i__4865__auto___102111 = G__102112;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sicmutils.numerical.unimin.golden.best_of.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sicmutils.numerical.unimin.golden.best_of.cljs$core$IFn$_invoke$arity$variadic = (function (pairs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.min_key,cljs.core.second,pairs);
}));

(sicmutils.numerical.unimin.golden.best_of.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.numerical.unimin.golden.best_of.cljs$lang$applyTo = (function (seq101953){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq101953));
}));

/**
 * Returns a function that returns true if the max interior value is within
 *   `epsilon` of the smallest bound, false otherwise.
 */
sicmutils.numerical.unimin.golden.fn_tolerance_fn = (function sicmutils$numerical$unimin$golden$fn_tolerance_fn(epsilon){
var close_QMARK_ = sicmutils.value.within(epsilon);
return (function (p__101957,p__101958,p__101959,p__101960,_){
var vec__101962 = p__101957;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101962,(0),null);
var fa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101962,(1),null);
var vec__101965 = p__101958;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101965,(0),null);
var fl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101965,(1),null);
var vec__101968 = p__101959;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101968,(0),null);
var fr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101968,(1),null);
var vec__101971 = p__101960;
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101971,(0),null);
var fb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101971,(1),null);
return close_QMARK_((function (){var x__4336__auto__ = fa;
var y__4337__auto__ = fb;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})(),(function (){var x__4339__auto__ = fl;
var y__4340__auto__ = fr;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})());
});
});
/**
 * Returns a fn that returns true if the coordinates of the outer bounds are
 *   within `epsilon` absolute distance, false otherwise.
 */
sicmutils.numerical.unimin.golden.arg_tolerance_fn = (function sicmutils$numerical$unimin$golden$arg_tolerance_fn(epsilon){
var close_QMARK_ = sicmutils.value.within(epsilon);
return (function (p__101978,_,___$1,p__101979,___$2){
var vec__101980 = p__101978;
var xa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101980,(0),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101980,(1),null);
var vec__101983 = p__101979;
var xb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101983,(0),null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101983,(1),null);
return close_QMARK_(xa,xb);
});
});
/**
 * Returns a fn that returns true if the number of iterations has exceeded
 *   `max-count`, false otherwise. 
 */
sicmutils.numerical.unimin.golden.counter_fn = (function sicmutils$numerical$unimin$golden$counter_fn(max_count){
return (function (_,___$1,___$2,___$3,iterations){
return (max_count < iterations);
});
});
/**
 * Returns a fn that returns true if any of the following are true:
 * 
 *   - the max interior value is within `fn-tolerance` of the smallest bound,
 *   - `convergence?` (if supplied) returns true
 *   - the bounds are within `arg-tolerance` absolute distance,
 * 
 *   false otherwise.
 */
sicmutils.numerical.unimin.golden.convergence_fn = (function sicmutils$numerical$unimin$golden$convergence_fn(p__101992){
var map__101994 = p__101992;
var map__101994__$1 = cljs.core.__destructure_map(map__101994);
var converged_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101994__$1,new cljs.core.Keyword(null,"converged?","converged?",1779059976));
var fn_tolerance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101994__$1,new cljs.core.Keyword(null,"fn-tolerance","fn-tolerance",-1445606164));
var arg_tolerance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101994__$1,new cljs.core.Keyword(null,"arg-tolerance","arg-tolerance",1681183780));
return (function() { 
var G__102115__delegate = function (args){
return cljs.core.some((function (p1__101990_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(p1__101990_SHARP_,args);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4253__auto__ = converged_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.constantly(false);
}
})(),sicmutils.numerical.unimin.golden.arg_tolerance_fn(arg_tolerance),sicmutils.numerical.unimin.golden.fn_tolerance_fn(fn_tolerance)], null));
};
var G__102115 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__102117__i = 0, G__102117__a = new Array(arguments.length -  0);
while (G__102117__i < G__102117__a.length) {G__102117__a[G__102117__i] = arguments[G__102117__i + 0]; ++G__102117__i;}
  args = new cljs.core.IndexedSeq(G__102117__a,0,null);
} 
return G__102115__delegate.call(this,args);};
G__102115.cljs$lang$maxFixedArity = 0;
G__102115.cljs$lang$applyTo = (function (arglist__102118){
var args = cljs.core.seq(arglist__102118);
return G__102115__delegate(args);
});
G__102115.cljs$core$IFn$_invoke$arity$variadic = G__102115__delegate;
return G__102115;
})()
;
});
/**
 * Returns a fn that returns true if any of the following are true::
 * 
 *   - the supplied `fn-counter` atom contains a value > `maxfun`
 *   - the loop has exceeded `maxiter` iterations
 * 
 *   false otherwise.
 *   
 */
sicmutils.numerical.unimin.golden.stop_fn = (function sicmutils$numerical$unimin$golden$stop_fn(p__101999){
var map__102000 = p__101999;
var map__102000__$1 = cljs.core.__destructure_map(map__102000);
var maxiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102000__$1,new cljs.core.Keyword(null,"maxiter","maxiter",-1867223754));
var maxfun = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102000__$1,new cljs.core.Keyword(null,"maxfun","maxfun",-50301814));
var fn_counter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102000__$1,new cljs.core.Keyword(null,"fn-counter","fn-counter",-1395388762));
return (function() { 
var G__102121__delegate = function (args){
return cljs.core.some((function (p1__101998_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(p1__101998_SHARP_,args);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function() { 
var G__102122__delegate = function (_){
return (cljs.core.deref(fn_counter) > maxfun);
};
var G__102122 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__102123__i = 0, G__102123__a = new Array(arguments.length -  0);
while (G__102123__i < G__102123__a.length) {G__102123__a[G__102123__i] = arguments[G__102123__i + 0]; ++G__102123__i;}
  _ = new cljs.core.IndexedSeq(G__102123__a,0,null);
} 
return G__102122__delegate.call(this,_);};
G__102122.cljs$lang$maxFixedArity = 0;
G__102122.cljs$lang$applyTo = (function (arglist__102124){
var _ = cljs.core.seq(arglist__102124);
return G__102122__delegate(_);
});
G__102122.cljs$core$IFn$_invoke$arity$variadic = G__102122__delegate;
return G__102122;
})()
,sicmutils.numerical.unimin.golden.counter_fn(maxiter)], null));
};
var G__102121 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__102126__i = 0, G__102126__a = new Array(arguments.length -  0);
while (G__102126__i < G__102126__a.length) {G__102126__a[G__102126__i] = arguments[G__102126__i + 0]; ++G__102126__i;}
  args = new cljs.core.IndexedSeq(G__102126__a,0,null);
} 
return G__102121__delegate.call(this,args);};
G__102121.cljs$lang$maxFixedArity = 0;
G__102121.cljs$lang$applyTo = (function (arglist__102127){
var args = cljs.core.seq(arglist__102127);
return G__102121__delegate(args);
});
G__102121.cljs$core$IFn$_invoke$arity$variadic = G__102121__delegate;
return G__102121;
})()
;
});
/**
 * Golden Section search attempts to locate the minimum of the supplied function
 *   `f` by evaluating points located at golden-ratioed intervals between the two
 *   starting endpoints `a` and `b`. This method is slow, steady and reliable.
 * 
 *   Supports the following optional keyword arguments:
 * 
 *   `:converged?` is an optional predicate accepting five arguments:
 * 
 *   - `[a fa]`
 *   - `[l fl]`
 *   - `[r fr]`
 *   - `[b fb]`
 *   - `current-iteration`
 * 
 *   If the supplied `fn` returns true, it will signal convergence and the
 *   optimizer will return. Returning false will continue.
 * 
 *   `:choose` is called at the final step of optimization with all 4 points and
 *   their fn values (see the first four arguments to `:converged?`), and returns
 *   the final choice.
 * 
 *   `:callback` receives all 5 arguments on every iteration.
 * 
 *   `:maxiter` Maximum number of iterations allowed for the minimizer. Defaults to
 *   1000.
 * 
 *   `:maxfun` Maximum number of times the function can be evaluated before exiting.
 *   Defaults to 1000.
 * 
 *   `:fn-tolerance` check that the minimal value of any of the checked points is
 *   within the maximum of f(a) or f(b).
 * 
 *   `:arg-tolerance` check that `a` and `b` are within this supplied absolute
 *   distance.
 */
sicmutils.numerical.unimin.golden.golden_section_min = (function sicmutils$numerical$unimin$golden$golden_section_min(var_args){
var G__102020 = arguments.length;
switch (G__102020) {
case 3:
return sicmutils.numerical.unimin.golden.golden_section_min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sicmutils.numerical.unimin.golden.golden_section_min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.unimin.golden.golden_section_min.cljs$core$IFn$_invoke$arity$3 = (function (f,xa,xb){
return sicmutils.numerical.unimin.golden.golden_section_min.cljs$core$IFn$_invoke$arity$4(f,xa,xb,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.numerical.unimin.golden.golden_section_min.cljs$core$IFn$_invoke$arity$4 = (function (f,xa,xb,p__102022){
var map__102023 = p__102022;
var map__102023__$1 = cljs.core.__destructure_map(map__102023);
var opts = map__102023__$1;
var choose = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102023__$1,new cljs.core.Keyword(null,"choose","choose",1680203305),sicmutils.numerical.unimin.golden.best_of);
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102023__$1,new cljs.core.Keyword(null,"callback","callback",-705136228),cljs.core.constantly(null));
var vec__102024 = sicmutils.util.counted.cljs$core$IFn$_invoke$arity$1(f);
var fn_counter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102024,(0),null);
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102024,(1),null);
var vec__102027 = ((cljs.core.vector_QMARK_(xa))?xa:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xa,(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xa) : f__$1.call(null,xa))], null));
var xa__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102027,(0),null);
var a = vec__102027;
var vec__102030 = ((cljs.core.vector_QMARK_(xb))?xb:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xb,(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xb) : f__$1.call(null,xb))], null));
var xb__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102030,(0),null);
var b = vec__102030;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"maxfun","maxfun",-50301814),(1000),new cljs.core.Keyword(null,"maxiter","maxiter",-1867223754),(1000),new cljs.core.Keyword(null,"fn-tolerance","fn-tolerance",-1445606164),1.0E-8,new cljs.core.Keyword(null,"arg-tolerance","arg-tolerance",1681183780),1.0E-8,new cljs.core.Keyword(null,"fn-counter","fn-counter",-1395388762),fn_counter], null),opts], 0));
var xl = sicmutils.numerical.unimin.golden.golden_cut(xb__$1,xa__$1);
var xr = sicmutils.numerical.unimin.golden.golden_cut(xa__$1,xb__$1);
var convergence_QMARK_ = sicmutils.numerical.unimin.golden.convergence_fn(opts__$1);
var stop_QMARK_ = sicmutils.numerical.unimin.golden.stop_fn(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"fn-counter","fn-counter",-1395388762),fn_counter));
var G__102042 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xl,(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xl) : f__$1.call(null,xl))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xr,(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xr) : f__$1.call(null,xr))], null),b], null);
var vec__102043 = G__102042;
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102043,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102043,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102043,(2),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102043,(3),null);
var iteration = (0);
var G__102042__$1 = G__102042;
var iteration__$1 = iteration;
while(true){
var vec__102048 = G__102042__$1;
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102048,(0),null);
var l__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102048,(1),null);
var r__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102048,(2),null);
var b__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102048,(3),null);
var iteration__$2 = iteration__$1;
(callback.cljs$core$IFn$_invoke$arity$5 ? callback.cljs$core$IFn$_invoke$arity$5(a__$2,l__$1,r__$1,b__$2,iteration__$2) : callback.call(null,a__$2,l__$1,r__$1,b__$2,iteration__$2));

var converged_QMARK_ = convergence_QMARK_(a__$2,l__$1,r__$1,b__$2,iteration__$2);
if(cljs.core.truth_((function (){var or__4253__auto__ = converged_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return stop_QMARK_(a__$2,l__$1,r__$1,b__$2,iteration__$2);
}
})())){
var vec__102051 = (choose.cljs$core$IFn$_invoke$arity$4 ? choose.cljs$core$IFn$_invoke$arity$4(a__$2,l__$1,r__$1,b__$2) : choose.call(null,a__$2,l__$1,r__$1,b__$2));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102051,(0),null);
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102051,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"result","result",1415092211),x,new cljs.core.Keyword(null,"value","value",305978217),fx,new cljs.core.Keyword(null,"converged?","converged?",1779059976),cljs.core.boolean$(converged_QMARK_),new cljs.core.Keyword(null,"iterations","iterations",-1402710890),iteration__$2,new cljs.core.Keyword(null,"fncalls","fncalls",-71376182),cljs.core.deref(fn_counter)], null);
} else {
var G__102135 = sicmutils.numerical.unimin.golden.shrink_interval(f__$1,a__$2,l__$1,r__$1,b__$2);
var G__102136 = (iteration__$2 + (1));
G__102042__$1 = G__102135;
iteration__$1 = G__102136;
continue;
}
break;
}
}));

(sicmutils.numerical.unimin.golden.golden_section_min.cljs$lang$maxFixedArity = 4);

/**
 * For convenience, we also provide the sister-procedure for finding
 *   the maximum of a unimodal function using the golden section method.
 * 
 *   Negate the function, minimize, negate the result.
 */
sicmutils.numerical.unimin.golden.golden_section_max = (function sicmutils$numerical$unimin$golden$golden_section_max(var_args){
var G__102056 = arguments.length;
switch (G__102056) {
case 3:
return sicmutils.numerical.unimin.golden.golden_section_max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sicmutils.numerical.unimin.golden.golden_section_max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.unimin.golden.golden_section_max.cljs$core$IFn$_invoke$arity$3 = (function (f,xa,xb){
return sicmutils.numerical.unimin.golden.golden_section_max.cljs$core$IFn$_invoke$arity$4(f,xa,xb,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.numerical.unimin.golden.golden_section_max.cljs$core$IFn$_invoke$arity$4 = (function (f,xa,xb,opts){
var _f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.negate,f);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(sicmutils.numerical.unimin.golden.golden_section_min.cljs$core$IFn$_invoke$arity$4(_f,xa,xb,opts),new cljs.core.Keyword(null,"value","value",305978217),sicmutils.generic.negate);
}));

(sicmutils.numerical.unimin.golden.golden_section_max.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=sicmutils.numerical.unimin.golden.js.map
