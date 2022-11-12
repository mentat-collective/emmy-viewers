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
sicmutils.numerical.unimin.golden.shrink_interval = (function sicmutils$numerical$unimin$golden$shrink_interval(f,p__88086,p__88087,p__88088,p__88089){
var vec__88090 = p__88086;
var xa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88090,(0),null);
var a = vec__88090;
var vec__88093 = p__88087;
var xl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88093,(0),null);
var fl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88093,(1),null);
var l = vec__88093;
var vec__88096 = p__88088;
var xr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88096,(0),null);
var fr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88096,(1),null);
var r = vec__88096;
var vec__88099 = p__88089;
var xb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88099,(0),null);
var b = vec__88099;
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
var G__88222__delegate = function (rest__88082_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT_,rest__88082_SHARP_);
};
var G__88222 = function (var_args){
var rest__88082_SHARP_ = null;
if (arguments.length > 0) {
var G__88223__i = 0, G__88223__a = new Array(arguments.length -  0);
while (G__88223__i < G__88223__a.length) {G__88223__a[G__88223__i] = arguments[G__88223__i + 0]; ++G__88223__i;}
  rest__88082_SHARP_ = new cljs.core.IndexedSeq(G__88223__a,0,null);
} 
return G__88222__delegate.call(this,rest__88082_SHARP_);};
G__88222.cljs$lang$maxFixedArity = 0;
G__88222.cljs$lang$applyTo = (function (arglist__88224){
var rest__88082_SHARP_ = cljs.core.seq(arglist__88224);
return G__88222__delegate(rest__88082_SHARP_);
});
G__88222.cljs$core$IFn$_invoke$arity$variadic = G__88222__delegate;
return G__88222;
})()
)){
} else {
throw (new Error("Assert failed: (fn* [& rest__88082#] (apply < rest__88082#))"));
}

return _PERCENT_;
});
/**
 * Default selection function for the best possible point. This function chooses
 *   the point out of (a, l, r, b) with the minimum function value.
 */
sicmutils.numerical.unimin.golden.best_of = (function sicmutils$numerical$unimin$golden$best_of(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88225 = arguments.length;
var i__4865__auto___88226 = (0);
while(true){
if((i__4865__auto___88226 < len__4864__auto___88225)){
args__4870__auto__.push((arguments[i__4865__auto___88226]));

var G__88227 = (i__4865__auto___88226 + (1));
i__4865__auto___88226 = G__88227;
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
(sicmutils.numerical.unimin.golden.best_of.cljs$lang$applyTo = (function (seq88106){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88106));
}));

/**
 * Returns a function that returns true if the max interior value is within
 *   `epsilon` of the smallest bound, false otherwise.
 */
sicmutils.numerical.unimin.golden.fn_tolerance_fn = (function sicmutils$numerical$unimin$golden$fn_tolerance_fn(epsilon){
var close_QMARK_ = sicmutils.value.within(epsilon);
return (function (p__88111,p__88112,p__88113,p__88114,_){
var vec__88115 = p__88111;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88115,(0),null);
var fa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88115,(1),null);
var vec__88118 = p__88112;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88118,(0),null);
var fl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88118,(1),null);
var vec__88121 = p__88113;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88121,(0),null);
var fr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88121,(1),null);
var vec__88124 = p__88114;
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88124,(0),null);
var fb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88124,(1),null);
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
return (function (p__88135,_,___$1,p__88136,___$2){
var vec__88138 = p__88135;
var xa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88138,(0),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88138,(1),null);
var vec__88141 = p__88136;
var xb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88141,(0),null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88141,(1),null);
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
sicmutils.numerical.unimin.golden.convergence_fn = (function sicmutils$numerical$unimin$golden$convergence_fn(p__88155){
var map__88157 = p__88155;
var map__88157__$1 = cljs.core.__destructure_map(map__88157);
var converged_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88157__$1,new cljs.core.Keyword(null,"converged?","converged?",1779059976));
var fn_tolerance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88157__$1,new cljs.core.Keyword(null,"fn-tolerance","fn-tolerance",-1445606164));
var arg_tolerance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88157__$1,new cljs.core.Keyword(null,"arg-tolerance","arg-tolerance",1681183780));
return (function() { 
var G__88228__delegate = function (args){
return cljs.core.some((function (p1__88154_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(p1__88154_SHARP_,args);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4253__auto__ = converged_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.constantly(false);
}
})(),sicmutils.numerical.unimin.golden.arg_tolerance_fn(arg_tolerance),sicmutils.numerical.unimin.golden.fn_tolerance_fn(fn_tolerance)], null));
};
var G__88228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__88230__i = 0, G__88230__a = new Array(arguments.length -  0);
while (G__88230__i < G__88230__a.length) {G__88230__a[G__88230__i] = arguments[G__88230__i + 0]; ++G__88230__i;}
  args = new cljs.core.IndexedSeq(G__88230__a,0,null);
} 
return G__88228__delegate.call(this,args);};
G__88228.cljs$lang$maxFixedArity = 0;
G__88228.cljs$lang$applyTo = (function (arglist__88231){
var args = cljs.core.seq(arglist__88231);
return G__88228__delegate(args);
});
G__88228.cljs$core$IFn$_invoke$arity$variadic = G__88228__delegate;
return G__88228;
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
sicmutils.numerical.unimin.golden.stop_fn = (function sicmutils$numerical$unimin$golden$stop_fn(p__88169){
var map__88170 = p__88169;
var map__88170__$1 = cljs.core.__destructure_map(map__88170);
var maxiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88170__$1,new cljs.core.Keyword(null,"maxiter","maxiter",-1867223754));
var maxfun = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88170__$1,new cljs.core.Keyword(null,"maxfun","maxfun",-50301814));
var fn_counter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88170__$1,new cljs.core.Keyword(null,"fn-counter","fn-counter",-1395388762));
return (function() { 
var G__88232__delegate = function (args){
return cljs.core.some((function (p1__88168_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(p1__88168_SHARP_,args);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function() { 
var G__88233__delegate = function (_){
return (cljs.core.deref(fn_counter) > maxfun);
};
var G__88233 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__88234__i = 0, G__88234__a = new Array(arguments.length -  0);
while (G__88234__i < G__88234__a.length) {G__88234__a[G__88234__i] = arguments[G__88234__i + 0]; ++G__88234__i;}
  _ = new cljs.core.IndexedSeq(G__88234__a,0,null);
} 
return G__88233__delegate.call(this,_);};
G__88233.cljs$lang$maxFixedArity = 0;
G__88233.cljs$lang$applyTo = (function (arglist__88235){
var _ = cljs.core.seq(arglist__88235);
return G__88233__delegate(_);
});
G__88233.cljs$core$IFn$_invoke$arity$variadic = G__88233__delegate;
return G__88233;
})()
,sicmutils.numerical.unimin.golden.counter_fn(maxiter)], null));
};
var G__88232 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__88236__i = 0, G__88236__a = new Array(arguments.length -  0);
while (G__88236__i < G__88236__a.length) {G__88236__a[G__88236__i] = arguments[G__88236__i + 0]; ++G__88236__i;}
  args = new cljs.core.IndexedSeq(G__88236__a,0,null);
} 
return G__88232__delegate.call(this,args);};
G__88232.cljs$lang$maxFixedArity = 0;
G__88232.cljs$lang$applyTo = (function (arglist__88237){
var args = cljs.core.seq(arglist__88237);
return G__88232__delegate(args);
});
G__88232.cljs$core$IFn$_invoke$arity$variadic = G__88232__delegate;
return G__88232;
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
var G__88181 = arguments.length;
switch (G__88181) {
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

(sicmutils.numerical.unimin.golden.golden_section_min.cljs$core$IFn$_invoke$arity$4 = (function (f,xa,xb,p__88182){
var map__88184 = p__88182;
var map__88184__$1 = cljs.core.__destructure_map(map__88184);
var opts = map__88184__$1;
var choose = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88184__$1,new cljs.core.Keyword(null,"choose","choose",1680203305),sicmutils.numerical.unimin.golden.best_of);
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88184__$1,new cljs.core.Keyword(null,"callback","callback",-705136228),cljs.core.constantly(null));
var vec__88188 = sicmutils.util.counted.cljs$core$IFn$_invoke$arity$1(f);
var fn_counter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88188,(0),null);
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88188,(1),null);
var vec__88191 = ((cljs.core.vector_QMARK_(xa))?xa:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xa,(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xa) : f__$1.call(null,xa))], null));
var xa__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88191,(0),null);
var a = vec__88191;
var vec__88194 = ((cljs.core.vector_QMARK_(xb))?xb:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xb,(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xb) : f__$1.call(null,xb))], null));
var xb__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88194,(0),null);
var b = vec__88194;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"maxfun","maxfun",-50301814),(1000),new cljs.core.Keyword(null,"maxiter","maxiter",-1867223754),(1000),new cljs.core.Keyword(null,"fn-tolerance","fn-tolerance",-1445606164),1.0E-8,new cljs.core.Keyword(null,"arg-tolerance","arg-tolerance",1681183780),1.0E-8,new cljs.core.Keyword(null,"fn-counter","fn-counter",-1395388762),fn_counter], null),opts], 0));
var xl = sicmutils.numerical.unimin.golden.golden_cut(xb__$1,xa__$1);
var xr = sicmutils.numerical.unimin.golden.golden_cut(xa__$1,xb__$1);
var convergence_QMARK_ = sicmutils.numerical.unimin.golden.convergence_fn(opts__$1);
var stop_QMARK_ = sicmutils.numerical.unimin.golden.stop_fn(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"fn-counter","fn-counter",-1395388762),fn_counter));
var G__88200 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xl,(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xl) : f__$1.call(null,xl))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xr,(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xr) : f__$1.call(null,xr))], null),b], null);
var vec__88201 = G__88200;
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88201,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88201,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88201,(2),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88201,(3),null);
var iteration = (0);
var G__88200__$1 = G__88200;
var iteration__$1 = iteration;
while(true){
var vec__88204 = G__88200__$1;
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88204,(0),null);
var l__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88204,(1),null);
var r__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88204,(2),null);
var b__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88204,(3),null);
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
var vec__88207 = (choose.cljs$core$IFn$_invoke$arity$4 ? choose.cljs$core$IFn$_invoke$arity$4(a__$2,l__$1,r__$1,b__$2) : choose.call(null,a__$2,l__$1,r__$1,b__$2));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88207,(0),null);
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88207,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"result","result",1415092211),x,new cljs.core.Keyword(null,"value","value",305978217),fx,new cljs.core.Keyword(null,"converged?","converged?",1779059976),cljs.core.boolean$(converged_QMARK_),new cljs.core.Keyword(null,"iterations","iterations",-1402710890),iteration__$2,new cljs.core.Keyword(null,"fncalls","fncalls",-71376182),cljs.core.deref(fn_counter)], null);
} else {
var G__88242 = sicmutils.numerical.unimin.golden.shrink_interval(f__$1,a__$2,l__$1,r__$1,b__$2);
var G__88243 = (iteration__$2 + (1));
G__88200__$1 = G__88242;
iteration__$1 = G__88243;
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
var G__88211 = arguments.length;
switch (G__88211) {
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
