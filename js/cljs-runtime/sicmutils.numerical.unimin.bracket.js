goog.provide('sicmutils.numerical.unimin.bracket');
sicmutils.numerical.unimin.bracket.epsilon = 1.0E-21;
/**
 * Returns the points ordered as f(a) < f(b)
 */
sicmutils.numerical.unimin.bracket.ascending_by = (function sicmutils$numerical$unimin$bracket$ascending_by(f,a,b){
var fa = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
var fb = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(b) : f.call(null,b));
if((fa < fb)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,fa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,fb], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,fb], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,fa], null)], null);
}
});
/**
 * Accepts three pairs of `[x, (f x)]`, fits a quadratic function to all three
 *   points and returns the step from `xb` (the coordinate of the second argument)
 *   to the minimum of the fitted quadratic.
 * 
 *   Returns the numerator and denominator `p` and `q` of the required step. If `q`
 *   is 0, then the supplied points were colinear.
 * 
 *   `q` is guaranteed to be `>= 0`, while `p` might be negative.
 * 
 *   See these notes for the derivation of this method:
 *   http://fourier.eng.hmc.edu/e176/lectures/NM/node25.html
 */
sicmutils.numerical.unimin.bracket.parabolic_pieces = (function sicmutils$numerical$unimin$bracket$parabolic_pieces(p__88245,p__88246,p__88247){
var vec__88248 = p__88245;
var xa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88248,(0),null);
var fa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88248,(1),null);
var vec__88251 = p__88246;
var xb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88251,(0),null);
var fb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88251,(1),null);
var vec__88254 = p__88247;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88254,(0),null);
var fc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88254,(1),null);
var _PERCENT_ = (function (){var tmp1 = ((xb - xa) * (fb - fc));
var tmp2 = ((xb - xc) * (fb - fa));
var v = (tmp2 - tmp1);
var p = (((xb - xc) * tmp2) - ((xb - xa) * tmp1));
var q = (2.0 * v);
if((q > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(p),q], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(q)], null);
}
})();
if(cljs.core.truth_((function (p1__88239_SHARP_){
return (cljs.core.second(p1__88239_SHARP_) >= (0));
}))){
} else {
throw (new Error("Assert failed: (fn* [p1__88239#] (>= (second p1__88239#) 0))"));
}

return _PERCENT_;
});
/**
 * Fits a parabola through all three points, and returns the coordinate of the
 *   minimum of the parabola.
 * 
 *   If the supplied points are colinear, returns a point that takes a large jump
 *   in the direction of the downward slope of the line.
 */
sicmutils.numerical.unimin.bracket.parabolic_step = (function sicmutils$numerical$unimin$bracket$parabolic_step(a,p__88259,c){
var vec__88260 = p__88259;
var xb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88260,(0),null);
var b = vec__88260;
var two_eps = (2.0 * sicmutils.numerical.unimin.bracket.epsilon);
var vec__88263 = sicmutils.numerical.unimin.bracket.parabolic_pieces(a,b,c);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88263,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88263,(1),null);
var q__$1 = (((q < two_eps))?two_eps:q);
return (xb + (p / q__$1));
});
/**
 * Returns a function that performs steps of bracket extension.
 * 
 *   :grow-limit is the maximum factor that the parabolic interpolation can jump
 *   the function.
 */
sicmutils.numerical.unimin.bracket.bracket_step_fn = (function sicmutils$numerical$unimin$bracket$bracket_step_fn(f,p__88267){
var map__88268 = p__88267;
var map__88268__$1 = cljs.core.__destructure_map(map__88268);
var grow_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88268__$1,new cljs.core.Keyword(null,"grow-limit","grow-limit",2130208943),110.0);
return (function (a,p__88269,p__88270){
var vec__88271 = p__88269;
var xb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88271,(0),null);
var fb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88271,(1),null);
var b = vec__88271;
var vec__88274 = p__88270;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88274,(0),null);
var fc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88274,(1),null);
var c = vec__88274;
var wlim = (xb + (grow_limit * (xc - xb)));
var w = sicmutils.numerical.unimin.bracket.parabolic_step(a,b,c);
if((((xb <= w)) && ((w <= xc)))){
var fw = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(w) : f.call(null,w));
if((fw < fc)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,fw], null),c], null);
} else {
if((fw > fb)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,fw], null)], null);
} else {
var new_c = sicmutils.numerical.unimin.golden.extend_pt(xc,xb);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_c,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(new_c) : f.call(null,new_c))], null)], null);

}
}
} else {
if((((xc <= w)) && ((w <= wlim)))){
var fw = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(w) : f.call(null,w));
if((fw < fc)){
var new_c = sicmutils.numerical.unimin.golden.extend_pt(w,xc);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,fw], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_c,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(new_c) : f.call(null,new_c))], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,fw], null)], null);
}
} else {
if((((xc <= wlim)) && ((wlim <= w)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wlim,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(wlim) : f.call(null,wlim))], null)], null);
} else {
var new_c = sicmutils.numerical.unimin.golden.extend_pt(xc,xb);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_c,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(new_c) : f.call(null,new_c))], null)], null);

}
}
}
});
});
/**
 * Generates an interval `[lo, hi]` that is guaranteed to contain a minimum of the
 *   function `f`, along with a candidate point `[mid, (f mid)]` that the user can
 *   use to start a minimum search.
 * 
 *   Returns a dictionary of the form:
 * 
 *   {:lo `lower end of the bracket`
 * :mid `candidate point`
 * :hi `upper end of the bracket`
 * :fncalls `# of fn evaluations so far`
 * :iterations `total iterations`}
 * 
 *   `:lo`, `:mid` and `:hi` are each pairs of the form `[x, (f x)]`.
 * 
 *   The implementation works by growing the bounds using either:
 * 
 *   - a step outside the bounds that places one bound at the golden-ratio cut
 *   point between the new bounds, or
 *   - a parabola with a minimum interpolated outside the current bounds, bounded b
 *   a max.
 * 
 *   This implementation was ported from `scipy.optimize.optimize.bracket`:
 *   https://github.com/scipy/scipy/blob/v1.5.2/scipy/optimize/optimize.py#L2450
 * 
 *   `bracket-min` supports the following optional keyword arguments:
 * 
 *   `:xa` the initial guess for the lower end of the bracket. Defaults to 0.0.
 * 
 *   `:xb` the initial guess for the upper end of the bracket. Defaults to 1.0. (If
 *   these points aren't supplied in sorted order they'll be switched.)
 * 
 *   `:grow-limit` The maximum factor that the parabolic interpolation can jump the
 *   function. Defaults to 110.0.
 * 
 *   `:maxiter` Maximum number of iterations allowed for the minimizer. Defaults to
 *   1000.
 * 
 *   `:maxfun` Maximum number of times the function can be evaluated before exiting.
 *   Defaults to 1000.
 *   
 */
sicmutils.numerical.unimin.bracket.bracket_min = (function sicmutils$numerical$unimin$bracket$bracket_min(var_args){
var G__88279 = arguments.length;
switch (G__88279) {
case 1:
return sicmutils.numerical.unimin.bracket.bracket_min.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.numerical.unimin.bracket.bracket_min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.unimin.bracket.bracket_min.cljs$core$IFn$_invoke$arity$1 = (function (f){
return sicmutils.numerical.unimin.bracket.bracket_min.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.numerical.unimin.bracket.bracket_min.cljs$core$IFn$_invoke$arity$2 = (function (f,p__88280){
var map__88281 = p__88280;
var map__88281__$1 = cljs.core.__destructure_map(map__88281);
var opts = map__88281__$1;
var xa = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88281__$1,new cljs.core.Keyword(null,"xa","xa",-251918777),0.0);
var xb = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88281__$1,new cljs.core.Keyword(null,"xb","xb",-1641297359),1.0);
var maxiter = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88281__$1,new cljs.core.Keyword(null,"maxiter","maxiter",-1867223754),(1000));
var maxfun = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88281__$1,new cljs.core.Keyword(null,"maxfun","maxfun",-50301814),(1000));
var vec__88282 = sicmutils.util.counted.cljs$core$IFn$_invoke$arity$1(f);
var f_counter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88282,(0),null);
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88282,(1),null);
var step = sicmutils.numerical.unimin.bracket.bracket_step_fn(f__$1,opts);
var stop_fn = (function (_,p__88294,p__88295,iteration){
var vec__88296 = p__88294;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88296,(0),null);
var fb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88296,(1),null);
var vec__88299 = p__88295;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88299,(0),null);
var fc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88299,(1),null);
return (((iteration > maxiter)) || ((((cljs.core.deref(f_counter) > maxfun)) || ((fb <= fc)))));
});
var complete = (function (p__88305,b,p__88306,iterations){
var vec__88307 = p__88305;
var xa__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88307,(0),null);
var a = vec__88307;
var vec__88310 = p__88306;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88310,(0),null);
var c = vec__88310;
var m = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lo","lo",-931799889),a,new cljs.core.Keyword(null,"mid","mid",-2123385246),b,new cljs.core.Keyword(null,"hi","hi",-1821422114),c,new cljs.core.Keyword(null,"fncalls","fncalls",-71376182),cljs.core.deref(f_counter),new cljs.core.Keyword(null,"iterations","iterations",-1402710890),iterations], null);
if((xc < xa__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"lo","lo",-931799889),c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hi","hi",-1821422114),a], 0));
} else {
return m;
}
});
var vec__88285 = sicmutils.numerical.unimin.bracket.ascending_by(f__$1,xa,xb);
var vec__88288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88285,(0),null);
var xb__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88288,(0),null);
var b = vec__88288;
var vec__88291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88285,(1),null);
var xa__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88291,(0),null);
var a = vec__88291;
var xc = sicmutils.numerical.unimin.golden.extend_pt(xb__$1,xa__$1);
var fc = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xc) : f__$1.call(null,xc));
var G__88317 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,fc], null)], null);
var vec__88318 = G__88317;
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88318,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88318,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88318,(2),null);
var iteration = (0);
var G__88317__$1 = G__88317;
var iteration__$1 = iteration;
while(true){
var vec__88330 = G__88317__$1;
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88330,(0),null);
var b__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88330,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88330,(2),null);
var iteration__$2 = iteration__$1;
if(stop_fn(a__$2,b__$2,c__$1,iteration__$2)){
return complete(a__$2,b__$2,c__$1,iteration__$2);
} else {
var G__88466 = step(a__$2,b__$2,c__$1);
var G__88467 = (iteration__$2 + (1));
G__88317__$1 = G__88466;
iteration__$1 = G__88467;
continue;
}
break;
}
}));

(sicmutils.numerical.unimin.bracket.bracket_min.cljs$lang$maxFixedArity = 2);

/**
 * Identical to bracket-min, except brackets a maximum of the supplied fn.
 */
sicmutils.numerical.unimin.bracket.bracket_max = (function sicmutils$numerical$unimin$bracket$bracket_max(var_args){
var G__88336 = arguments.length;
switch (G__88336) {
case 1:
return sicmutils.numerical.unimin.bracket.bracket_max.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.numerical.unimin.bracket.bracket_max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.unimin.bracket.bracket_max.cljs$core$IFn$_invoke$arity$1 = (function (f){
return sicmutils.numerical.unimin.bracket.bracket_max.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.numerical.unimin.bracket.bracket_max.cljs$core$IFn$_invoke$arity$2 = (function (f,opts){
var _f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.negate,f);
return sicmutils.numerical.unimin.bracket.bracket_min.cljs$core$IFn$_invoke$arity$2(_f,opts);
}));

(sicmutils.numerical.unimin.bracket.bracket_max.cljs$lang$maxFixedArity = 2);

/**
 *  Given a function f, a starting point and a step size, try to bracket a local
 *   extremum for f.
 * 
 *   Return a list (retcode a b c fa fb fc iter-count) where a < b < c, and fa, fb,
 *   fc are the function values at these points. In the case of a minimum, fb
 *   <= (min fa fc); the opposite inequality holds in the case of a maximum.
 * 
 *   iter-count is the number of function evaluations required. retcode is 'okay if
 *   the search succeeded, or 'maxcount if it was abandoned.
 *   
 */
sicmutils.numerical.unimin.bracket.bracket_min_scmutils = (function sicmutils$numerical$unimin$bracket$bracket_min_scmutils(var_args){
var G__88342 = arguments.length;
switch (G__88342) {
case 1:
return sicmutils.numerical.unimin.bracket.bracket_min_scmutils.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.numerical.unimin.bracket.bracket_min_scmutils.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.unimin.bracket.bracket_min_scmutils.cljs$core$IFn$_invoke$arity$1 = (function (f){
return sicmutils.numerical.unimin.bracket.bracket_min_scmutils.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.numerical.unimin.bracket.bracket_min_scmutils.cljs$core$IFn$_invoke$arity$2 = (function (f,p__88344){
var map__88345 = p__88344;
var map__88345__$1 = cljs.core.__destructure_map(map__88345);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88345__$1,new cljs.core.Keyword(null,"start","start",-355208981),(0));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88345__$1,new cljs.core.Keyword(null,"step","step",1288888124),(10));
var maxiter = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88345__$1,new cljs.core.Keyword(null,"maxiter","maxiter",-1867223754),(1000));
var vec__88347 = sicmutils.util.counted.cljs$core$IFn$_invoke$arity$1(f);
var f_counter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88347,(0),null);
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88347,(1),null);
var stop_fn = (function (p__88362,p__88363,p__88364,iteration){
var vec__88365 = p__88362;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88365,(0),null);
var fa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88365,(1),null);
var vec__88368 = p__88363;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88368,(0),null);
var fb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88368,(1),null);
var vec__88371 = p__88364;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88371,(0),null);
var fc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88371,(1),null);
return (((iteration > maxiter)) || ((fb <= (function (){var x__4339__auto__ = fa;
var y__4340__auto__ = fc;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})())));
});
var complete = (function (p__88375,b,p__88376,iterations){
var vec__88378 = p__88375;
var xa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88378,(0),null);
var a = vec__88378;
var vec__88381 = p__88376;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88381,(0),null);
var c = vec__88381;
var m = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"lo","lo",-931799889),a,new cljs.core.Keyword(null,"mid","mid",-2123385246),b,new cljs.core.Keyword(null,"hi","hi",-1821422114),c,new cljs.core.Keyword(null,"fncalls","fncalls",-71376182),cljs.core.deref(f_counter),new cljs.core.Keyword(null,"converged?","converged?",1779059976),(iterations <= maxiter),new cljs.core.Keyword(null,"iterations","iterations",-1402710890),iterations], null);
if((xc < xa)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"lo","lo",-931799889),c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hi","hi",-1821422114),a], 0));
} else {
return m;
}
});
var run = (function (p__88387,b,p__88388,iter){
while(true){
var vec__88393 = p__88387;
var xa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88393,(0),null);
var a = vec__88393;
var vec__88396 = p__88388;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88396,(0),null);
var c = vec__88396;
if(stop_fn(a,b,c,iter)){
return complete(a,b,c,iter);
} else {
var xd = (xc + (xc - xa));
var G__88474 = b;
var G__88475 = c;
var G__88476 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xd,(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xd) : f__$1.call(null,xd))], null);
var G__88477 = (iter + (1));
p__88387 = G__88474;
b = G__88475;
p__88388 = G__88476;
iter = G__88477;
continue;
}
break;
}
});
var vec__88350 = sicmutils.numerical.unimin.bracket.ascending_by(f__$1,start,(start + step));
var vec__88353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88350,(0),null);
var xb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88353,(0),null);
var b = vec__88353;
var vec__88356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88350,(1),null);
var xa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88356,(0),null);
var a = vec__88356;
var xc = (xb + (xb - xa));
return run(a,b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xc) : f__$1.call(null,xc))], null),(0));
}));

(sicmutils.numerical.unimin.bracket.bracket_min_scmutils.cljs$lang$maxFixedArity = 2);

/**
 * Identical to bracket-min-scmutils, except brackets a maximum of the supplied
 *   fn.
 */
sicmutils.numerical.unimin.bracket.bracket_max_scmutils = (function sicmutils$numerical$unimin$bracket$bracket_max_scmutils(var_args){
var G__88402 = arguments.length;
switch (G__88402) {
case 1:
return sicmutils.numerical.unimin.bracket.bracket_max_scmutils.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.numerical.unimin.bracket.bracket_max_scmutils.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.unimin.bracket.bracket_max_scmutils.cljs$core$IFn$_invoke$arity$1 = (function (f){
return sicmutils.numerical.unimin.bracket.bracket_max_scmutils.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.numerical.unimin.bracket.bracket_max_scmutils.cljs$core$IFn$_invoke$arity$2 = (function (f,opts){
var _f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.negate,f);
return sicmutils.numerical.unimin.bracket.bracket_min.cljs$core$IFn$_invoke$arity$2(_f,opts);
}));

(sicmutils.numerical.unimin.bracket.bracket_max_scmutils.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sicmutils.numerical.unimin.bracket.js.map
