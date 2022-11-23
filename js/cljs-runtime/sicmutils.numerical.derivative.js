goog.provide('sicmutils.numerical.derivative');
sicmutils.numerical.derivative.show = (function sicmutils$numerical$derivative$show(e){
var G__103134 = sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(e);
return (sicmutils.expression.render.__GT_infix.cljs$core$IFn$_invoke$arity$1 ? sicmutils.expression.render.__GT_infix.cljs$core$IFn$_invoke$arity$1(G__103134) : sicmutils.expression.render.__GT_infix.call(null,G__103134));
});
sicmutils.numerical.derivative.func = sicmutils.abstract$.function$.literal_function.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"f","f",43394975,null));
sicmutils.numerical.derivative.fx_PLUS_h = sicmutils.series.sum((function (){var G__103143 = new cljs.core.Symbol(null,"h","h",-1544777029,null);
var fexpr__103142 = sicmutils.calculus.derivative.taylor_series.cljs$core$IFn$_invoke$arity$variadic(sicmutils.numerical.derivative.func,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"x","x",-555367584,null)], 0));
return (fexpr__103142.cljs$core$IFn$_invoke$arity$1 ? fexpr__103142.cljs$core$IFn$_invoke$arity$1(G__103143) : fexpr__103142.call(null,G__103143));
})(),(4));
/**
 * Returns a single-variable function of a step size `h` that calculates the
 *   forward-difference estimate of the the first derivative of `f` at point `x`:
 * 
 *   ```
 *   f'(x) = [f(x + h) - f(x)] / h
 *   ```
 * 
 *   Optionally accepts a third argument `fx == (f x)`, in case you've already
 *   calculated it elsewhere and would like to save a function evaluation.
 */
sicmutils.numerical.derivative.forward_difference = (function sicmutils$numerical$derivative$forward_difference(var_args){
var G__103152 = arguments.length;
switch (G__103152) {
case 2:
return sicmutils.numerical.derivative.forward_difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.numerical.derivative.forward_difference.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.derivative.forward_difference.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return sicmutils.numerical.derivative.forward_difference.cljs$core$IFn$_invoke$arity$3(f,x,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)));
}));

(sicmutils.numerical.derivative.forward_difference.cljs$core$IFn$_invoke$arity$3 = (function (f,x,fx){
return (function (h){
return (((function (){var G__103155 = (x + h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__103155) : f.call(null,G__103155));
})() - fx) / h);
});
}));

(sicmutils.numerical.derivative.forward_difference.cljs$lang$maxFixedArity = 3);

sicmutils.numerical.derivative.fx_h = sicmutils.series.sum((function (){var G__103157 = sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"h","h",-1544777029,null));
var fexpr__103156 = sicmutils.calculus.derivative.taylor_series.cljs$core$IFn$_invoke$arity$variadic(sicmutils.numerical.derivative.func,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"x","x",-555367584,null)], 0));
return (fexpr__103156.cljs$core$IFn$_invoke$arity$1 ? fexpr__103156.cljs$core$IFn$_invoke$arity$1(G__103157) : fexpr__103156.call(null,G__103157));
})(),(4));
/**
 * Returns a single-variable function of a step size `h` that calculates the
 *   backward-difference estimate of the first derivative of `f` at point `x`:
 * 
 *   ```
 *   f'(x) = [f(x) - f(x - h)] / h
 *   ```
 * 
 *   Optionally accepts a third argument `fx == (f x)`, in case you've already
 *   calculated it elsewhere and would like to save a function evaluation.
 */
sicmutils.numerical.derivative.backward_difference = (function sicmutils$numerical$derivative$backward_difference(var_args){
var G__103159 = arguments.length;
switch (G__103159) {
case 2:
return sicmutils.numerical.derivative.backward_difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.numerical.derivative.backward_difference.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.derivative.backward_difference.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return sicmutils.numerical.derivative.backward_difference.cljs$core$IFn$_invoke$arity$3(f,x,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)));
}));

(sicmutils.numerical.derivative.backward_difference.cljs$core$IFn$_invoke$arity$3 = (function (f,x,fx){
return (function (h){
return ((fx - (function (){var G__103160 = (x - h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__103160) : f.call(null,G__103160));
})()) / h);
});
}));

(sicmutils.numerical.derivative.backward_difference.cljs$lang$maxFixedArity = 3);

/**
 * Returns a single-variable function of a step size `h` that calculates the
 *   central-difference estimate of the first derivative of `f` at point `x`:
 * 
 *   ```
 *   f'(x) = [f(x + h) - f(x - h)] / 2h
 *   ```
 */
sicmutils.numerical.derivative.central_difference = (function sicmutils$numerical$derivative$central_difference(f,x){
return (function (h){
return (((function (){var G__103161 = (x + h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__103161) : f.call(null,G__103161));
})() - (function (){var G__103162 = (x - h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__103162) : f.call(null,G__103162));
})()) / ((2) * h));
});
});
/**
 * Returns a single-variable function of a step size `h` that calculates the
 *   central-difference estimate of the second derivative of `f` at point `x`:
 * 
 *   f''(x) = [f(x + h) - 2f(x) + f(x - h)] / h^2
 * 
 *   Optionally accepts a third argument `fx == (f x)`, in case you've already
 *   calculated it elsewhere and would like to save a function evaluation.
 */
sicmutils.numerical.derivative.central_difference_d2 = (function sicmutils$numerical$derivative$central_difference_d2(var_args){
var G__103164 = arguments.length;
switch (G__103164) {
case 2:
return sicmutils.numerical.derivative.central_difference_d2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.numerical.derivative.central_difference_d2.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.derivative.central_difference_d2.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return sicmutils.numerical.derivative.central_difference_d2.cljs$core$IFn$_invoke$arity$3(f,x,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)));
}));

(sicmutils.numerical.derivative.central_difference_d2.cljs$core$IFn$_invoke$arity$3 = (function (f,x,fx){
var fx_STAR_2 = ((2) * fx);
return (function (h){
return ((((function (){var G__103169 = (x + h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__103169) : f.call(null,G__103169));
})() + (function (){var G__103170 = (x - h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__103170) : f.call(null,G__103170));
})()) - fx_STAR_2) / (h * h));
});
}));

(sicmutils.numerical.derivative.central_difference_d2.cljs$lang$maxFixedArity = 3);

sicmutils.numerical.derivative.make_derivative_fn = (function sicmutils$numerical$derivative$make_derivative_fn(f){
return (function (x){
var h = 1.0E-5;
return sicmutils.numerical.derivative.central_difference(f,x)(h);
});
});
sicmutils.numerical.derivative.central_diff_stream = (function sicmutils$numerical$derivative$central_diff_stream(f,x,h){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.numerical.derivative.central_difference(f,x),sicmutils.util.stream.zeno.cljs$core$IFn$_invoke$arity$2((2),h));
});
/**
 * Returns the number of 'roundoff units', ie, multiples of the machine epsilon,
 *   that roundoff error contributes to the total relative error, given a relative
 *   error percentage estimated for some initial step size $h$.
 */
sicmutils.numerical.derivative.roundoff_units = (function sicmutils$numerical$derivative$roundoff_units(rel_error_ratio){
return (Math.floor(Math.abs(rel_error_ratio)) + (1));
});
/**
 * Solution for `n`, in:
 * 
 *   `initial-error` * 2^n <= `tolerance`
 */
sicmutils.numerical.derivative.max_iterations = (function sicmutils$numerical$derivative$max_iterations(units,tolerance){
var initial_error = (sicmutils.value.machine_epsilon * units);
return Math.floor((Math.log((tolerance / initial_error)) / Math.log((2))));
});
/**
 * Generates a default max number of terms, based on roundoff error estimates.
 */
sicmutils.numerical.derivative.terms_before_roundoff = (function sicmutils$numerical$derivative$terms_before_roundoff(ratio,tolerance){
return (sicmutils.numerical.derivative.max_iterations(sicmutils.numerical.derivative.roundoff_units(ratio),tolerance) + (1));
});
cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var h = 0.1;
var p = (2);
var q = (2);
return sicmutils.util.stream.seq_limit.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.richardson.richardson_sequence.cljs$core$IFn$_invoke$arity$4(sicmutils.numerical.derivative.central_diff_stream(sicmutils.generic.sqrt,(1),h),h,p,q),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tolerance","tolerance",406811818),1.0E-13], null));
})(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),true,new cljs.core.Keyword(null,"terms-checked","terms-checked",1046419519),(5),new cljs.core.Keyword(null,"result","result",1415092211),0.5000000000000159], null));
sicmutils.numerical.derivative.valid_methods = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"central","central",467059073),null,new cljs.core.Keyword(null,"central-d2","central-d2",1063418821),null,new cljs.core.Keyword(null,"forward","forward",-557345303),null,new cljs.core.Keyword(null,"backward","backward",554036364),null], null), null);
sicmutils.numerical.derivative.configs = (function sicmutils$numerical$derivative$configs(method,f,x,fx){
var G__103175 = method;
var G__103175__$1 = (((G__103175 instanceof cljs.core.Keyword))?G__103175.fqn:null);
switch (G__103175__$1) {
case "forward":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p","p",151049309),(1),new cljs.core.Keyword(null,"q","q",689001697),(1),new cljs.core.Keyword(null,"function","function",-2127255473),sicmutils.numerical.derivative.forward_difference.cljs$core$IFn$_invoke$arity$3(f,x,fx),new cljs.core.Keyword(null,"ratio-fn","ratio-fn",1226148920),(function (h){
return (fx / ((function (){var G__103176 = (x + h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__103176) : f.call(null,G__103176));
})() - fx));
})], null);

break;
case "central":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p","p",151049309),(2),new cljs.core.Keyword(null,"q","q",689001697),(2),new cljs.core.Keyword(null,"function","function",-2127255473),sicmutils.numerical.derivative.central_difference(f,x),new cljs.core.Keyword(null,"ratio-fn","ratio-fn",1226148920),(function (h){
return (fx / ((function (){var G__103177 = (x + h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__103177) : f.call(null,G__103177));
})() - (function (){var G__103179 = (x - h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__103179) : f.call(null,G__103179));
})()));
})], null);

break;
case "backward":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p","p",151049309),(1),new cljs.core.Keyword(null,"q","q",689001697),(1),new cljs.core.Keyword(null,"function","function",-2127255473),sicmutils.numerical.derivative.backward_difference.cljs$core$IFn$_invoke$arity$3(f,x,fx),new cljs.core.Keyword(null,"ratio-fn","ratio-fn",1226148920),(function (h){
return (fx / (fx - (function (){var G__103180 = (x - h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__103180) : f.call(null,G__103180));
})()));
})], null);

break;
case "central-d2":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p","p",151049309),(2),new cljs.core.Keyword(null,"q","q",689001697),(2),new cljs.core.Keyword(null,"function","function",-2127255473),sicmutils.numerical.derivative.central_difference_d2.cljs$core$IFn$_invoke$arity$3(f,x,fx),new cljs.core.Keyword(null,"ratio-fn","ratio-fn",1226148920),(function (h){
return (((function (){var G__103181 = (x + h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__103181) : f.call(null,G__103181));
})() + (function (){var G__103183 = (x - h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__103183) : f.call(null,G__103183));
})()) - ((2) * fx));
})], null);

break;
default:
return sicmutils.util.illegal(["Invalid method: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method),". Please try one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.numerical.derivative.valid_methods)].join(''));

}
});
/**
 * Fills in default values required by `D-numeric`. Any option not used by
 *   `D-numeric` gets passed on to `us/seq-limit`.
 */
sicmutils.numerical.derivative.fill_defaults = (function sicmutils$numerical$derivative$fill_defaults(m){
var defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tolerance","tolerance",406811818),sicmutils.value.sqrt_machine_epsilon,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"central","central",467059073)], null);
var map__103184 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,m], 0));
var map__103184__$1 = cljs.core.__destructure_map(map__103184);
var opts = map__103184__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103184__$1,new cljs.core.Keyword(null,"method","method",55703592));
if(cljs.core.contains_QMARK_(sicmutils.numerical.derivative.valid_methods,method)){
} else {
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)," is not a valid method. Please try one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.numerical.derivative.valid_methods)].join(''),"\n","(contains? valid-methods method)"].join('')));
}

return opts;
});
/**
 * Takes a function `f: R => R` (function of a single real variable), and returns
 *   a new function of `x` that approximates the derivative $Df(x)$ (or $D^2f(x)$
 *   if you pass `:method :central-d2`).
 * 
 *   Returns the estimated value of the derivative at `x`. If you pass `:info?
 *   true`, the fn returns a dictionary of the results of `us/seq-limit`:
 * 
 *   ```clojure
 *   {:converged? <boolean>
 * :terms-checked <int>
 * :result <derivative estimate>}
 *   ```
 * 
 *   Make sure to visit [[sicmutils.calculus.derivative/D]] if you want symbolic or
 *   automatic differentiation.
 * 
 *   ### Roundoff Estimate
 * 
 *   The returned function will attempt to estimate how many times it can halve the
 *   step size used to estimate the derivative before roundoff error swamps the
 *   calculation, and force the function to return (with `:converged? false`, if
 *   you pass `:info?`)
 * 
 *   ### Optional Arguments
 * 
 *   `D-numeric` takes optional args as its second param. Any of these can be
 *   overridden by passing a second argument to the function returned by
 *   `D-numeric`; helpful for setting defaults and then overriding them later.
 * 
 *   The returned function passes through these and any other options to
 *   `us/seq-limit`, where they control the sequence of richardson
 *   extrapolation-accelerated estimates.
 * 
 *   Options:
 * 
 *   - `:method`: one of `:central`, `:central-d2`, `:forward` or `:backward`.
 *   `:central-d2` forces a second derivative estimate; the other methods configure
 *   a first derivative estimator.
 * 
 *   - `:info?` if false (default), returns the estimated value of `x`. If true,
 *   returns a dictionary with more information (see `D-numeric`'s docstring for
 *   more info.)
 * 
 *   - `:initial-h`: the initial `h` to use for derivative estimates before $h 	o
 *   0$. Defaults to `0.1 * abs(x)`.
 * 
 *   - `:tolerance`: see `us/stream-limit` for a discussion of how this value
 *   handles relative vs absolute tolerance. $\sqrt(\epsilon)$ by default, where
 *   $\epsilon$ = machine tolerance.
 * 
 *   - `:maxterms`: the maximum number of terms to consider when hunting for a
 *   derivative estimate. This defaults to an estimate generated internally,
 *   designed to prevent roundoff error from swamping the result. If you want to
 *   disable this feature, set `:maxterms` to something moderately large, like
 *   `:maxterms 100`. But do so carefully! See the surrounding namespace for a
 *   larger discussion.
 */
sicmutils.numerical.derivative.D_numeric = (function sicmutils$numerical$derivative$D_numeric(var_args){
var G__103190 = arguments.length;
switch (G__103190) {
case 1:
return sicmutils.numerical.derivative.D_numeric.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.numerical.derivative.D_numeric.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.derivative.D_numeric.cljs$core$IFn$_invoke$arity$1 = (function (f){
return sicmutils.numerical.derivative.D_numeric.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.numerical.derivative.D_numeric.cljs$core$IFn$_invoke$arity$2 = (function (f,opts){
var opts__$1 = sicmutils.numerical.derivative.fill_defaults(opts);
return (function() {
var sicmutils$numerical$derivative$df = null;
var sicmutils$numerical$derivative$df__1 = (function (x){
return sicmutils$numerical$derivative$df.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentArrayMap.EMPTY);
});
var sicmutils$numerical$derivative$df__2 = (function (x,overrides){
var map__103195 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__$1,overrides], 0));
var map__103195__$1 = cljs.core.__destructure_map(map__103195);
var opts__$2 = map__103195__$1;
var maxterms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103195__$1,new cljs.core.Keyword(null,"maxterms","maxterms",951779603));
var tolerance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103195__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818));
var initial_h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103195__$1,new cljs.core.Keyword(null,"initial-h","initial-h",213105060));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103195__$1,new cljs.core.Keyword(null,"method","method",55703592));
var info_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103195__$1,new cljs.core.Keyword(null,"info?","info?",361925553));
var map__103196 = sicmutils.numerical.derivative.configs(method,f,x,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)));
var map__103196__$1 = cljs.core.__destructure_map(map__103196);
var ratio_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103196__$1,new cljs.core.Keyword(null,"ratio-fn","ratio-fn",1226148920));
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103196__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103196__$1,new cljs.core.Keyword(null,"p","p",151049309));
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103196__$1,new cljs.core.Keyword(null,"q","q",689001697));
var h = (function (){var or__4253__auto__ = initial_h;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0.1 * sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(x));
}
})();
var n = (function (){var or__4253__auto__ = maxterms;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.numerical.derivative.terms_before_roundoff((ratio_fn.cljs$core$IFn$_invoke$arity$1 ? ratio_fn.cljs$core$IFn$_invoke$arity$1(h) : ratio_fn.call(null,h)),tolerance);
}
})();
var estimates = cljs.core.map.cljs$core$IFn$_invoke$arity$2(function$,sicmutils.util.stream.zeno.cljs$core$IFn$_invoke$arity$2((2),h));
var result = sicmutils.util.stream.seq_limit.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.richardson.richardson_sequence.cljs$core$IFn$_invoke$arity$4(estimates,(2),p,q),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$2,new cljs.core.Keyword(null,"maxterms","maxterms",951779603),n));
if(cljs.core.truth_(info_QMARK_)){
return result;
} else {
return new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result);
}
});
sicmutils$numerical$derivative$df = function(x,overrides){
switch(arguments.length){
case 1:
return sicmutils$numerical$derivative$df__1.call(this,x);
case 2:
return sicmutils$numerical$derivative$df__2.call(this,x,overrides);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sicmutils$numerical$derivative$df.cljs$core$IFn$_invoke$arity$1 = sicmutils$numerical$derivative$df__1;
sicmutils$numerical$derivative$df.cljs$core$IFn$_invoke$arity$2 = sicmutils$numerical$derivative$df__2;
return sicmutils$numerical$derivative$df;
})()
}));

(sicmutils.numerical.derivative.D_numeric.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sicmutils.numerical.derivative.js.map
