goog.provide('sicmutils.numerical.multimin.nelder_mead');
/**
 * add two vectors elementwise.
 */
sicmutils.numerical.multimin.nelder_mead.v_PLUS_ = (function sicmutils$numerical$multimin$nelder_mead$v_PLUS_(l,r){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,l,r);
});
/**
 * subtract two vectors elementwise.
 */
sicmutils.numerical.multimin.nelder_mead.v_ = (function sicmutils$numerical$multimin$nelder_mead$v_(l,r){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._,l,r);
});
/**
 * multiply vector v by scalar s.
 */
sicmutils.numerical.multimin.nelder_mead.v_STAR_ = (function sicmutils$numerical$multimin$nelder_mead$v_STAR_(s,v){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__88031_SHARP_){
return (s * p1__88031_SHARP_);
}),v);
});
/**
 * Takes an n-vector x0 and returns a list of n+1 n-vectors, of which x0 is the
 *   first, and the remainder are formed by perturbing each coordinate in turn.
 */
sicmutils.numerical.multimin.nelder_mead.initial_simplex = (function sicmutils$numerical$multimin$nelder_mead$initial_simplex(x0,p__88036){
var map__88037 = p__88036;
var map__88037__$1 = cljs.core.__destructure_map(map__88037);
var nonzero_delta = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88037__$1,new cljs.core.Keyword(null,"nonzero-delta","nonzero-delta",-794646863),0.05);
var zero_delta = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88037__$1,new cljs.core.Keyword(null,"zero-delta","zero-delta",-2009573292),2.5E-4);
var x0__$1 = cljs.core.vec(x0);
var scale = (nonzero_delta + (1));
var f = (function (i,xi){
var perturbed = (((xi === (0)))?zero_delta:(scale * xi));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x0__$1,i,perturbed);
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0__$1], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(f,x0__$1));
});
/**
 * Returns the absolute value of the distance of the individual coordinate in any
 *   simplex farthest from its corresponding point in x0.
 */
sicmutils.numerical.multimin.nelder_mead.sup_norm = (function sicmutils$numerical$multimin$nelder_mead$sup_norm(p__88044){
var vec__88049 = p__88044;
var x0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88049,(0),null);
var simplex = vec__88049;
var coords = ((cljs.core.sequential_QMARK_(x0))?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__88042_SHARP_){
return sicmutils.numerical.multimin.nelder_mead.v_(p1__88042_SHARP_,x0);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simplex], 0)):cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__88043_SHARP_){
return (p1__88043_SHARP_ - x0);
}),simplex));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.util.compute_abs,coords));
});
/**
 * Takes a function and returns a pair of:
 *   - an atom that keeps track of fn invocation counts,
 *   - the instrumented fn
 */
sicmutils.numerical.multimin.nelder_mead.counted = (function sicmutils$numerical$multimin$nelder_mead$counted(f){
var count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [count,(function (x){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(count,cljs.core.inc);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
})], null);
});
/**
 * Returns the two inputs `simplex` and `f(simplex)` sorted in ascending order by
 *   function value.
 *   Dimension must == the length of each element in the simplex.
 */
sicmutils.numerical.multimin.nelder_mead.sort_by_f = (function sicmutils$numerical$multimin$nelder_mead$sort_by_f(var_args){
var G__88059 = arguments.length;
switch (G__88059) {
case 2:
return sicmutils.numerical.multimin.nelder_mead.sort_by_f.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.numerical.multimin.nelder_mead.sort_by_f.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.multimin.nelder_mead.sort_by_f.cljs$core$IFn$_invoke$arity$2 = (function (simplex,f_simplex){
return sicmutils.numerical.multimin.nelder_mead.sort_by_f.cljs$core$IFn$_invoke$arity$3(simplex,f_simplex,cljs.core.count(cljs.core.peek(simplex)));
}));

(sicmutils.numerical.multimin.nelder_mead.sort_by_f.cljs$core$IFn$_invoke$arity$3 = (function (simplex,f_simplex,dimension){
var indices_by_f = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.nth,f_simplex),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(dimension + (1))));
var sorted_simplex = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(simplex,indices_by_f);
var sorted_fsimplex = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(f_simplex,indices_by_f);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sorted_simplex,sorted_fsimplex], null);
}));

(sicmutils.numerical.multimin.nelder_mead.sort_by_f.cljs$lang$maxFixedArity = 3);

/**
 * Generates the options required for a step of Nelder-Mead.
 * 
 *   `:adaptive?` controls the set of defaults. If true, they're generated using
 *   the supplied dimension; else, they're static.
 */
sicmutils.numerical.multimin.nelder_mead.step_defaults = (function sicmutils$numerical$multimin$nelder_mead$step_defaults(dimension,p__88060){
var map__88061 = p__88060;
var map__88061__$1 = cljs.core.__destructure_map(map__88061);
var m = map__88061__$1;
var adaptive_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88061__$1,new cljs.core.Keyword(null,"adaptive?","adaptive?",-259268570),true);
var base = (cljs.core.truth_(adaptive_QMARK_)?new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"alpha","alpha",-1574982441),1.0,new cljs.core.Keyword(null,"beta","beta",455605892),(1.0 + (2.0 / dimension)),new cljs.core.Keyword(null,"gamma","gamma",1883969687),(0.75 - ((1) / (2.0 * dimension))),new cljs.core.Keyword(null,"sigma","sigma",-63715703),(1.0 - ((1) / dimension))], null):new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"alpha","alpha",-1574982441),1.0,new cljs.core.Keyword(null,"beta","beta",455605892),2.0,new cljs.core.Keyword(null,"gamma","gamma",1883969687),0.5,new cljs.core.Keyword(null,"sigma","sigma",-63715703),0.5], null));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base,cljs.core.select_keys(m,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"beta","beta",455605892),new cljs.core.Keyword(null,"gamma","gamma",1883969687),new cljs.core.Keyword(null,"sigma","sigma",-63715703)], null))], 0));
});
/**
 * Returns a function that performs a single step of nelder-mead. The function
 *   expects a sorted simplex and f-simplex, and returns sorted results - a pair of
 *   - [simplex, f(simplex)]
 *   [This Scholarpedia
 *   page](http://www.scholarpedia.org/article/Nelder-Mead_algorithm) provides a
 *   nice overview of the algorithm.
 *   The parameters in opts follow the convention from [Gao and Han's
 *   paper](https://www.researchgate.net/publication/225691623_Implementing_the_Nelder-Mead_simplex_algorithm_with_adaptive_parameters)
 *   introducing the adaptive parameter version of Nelder-Mead:
 *   :alpha - reflection cefficient
 *   :beta  - expansion coefficient
 *   :gamma - contraction coefficient
 *   :sigma - shrink coefficient
 *   
 */
sicmutils.numerical.multimin.nelder_mead.step_fn = (function sicmutils$numerical$multimin$nelder_mead$step_fn(f,dimension,opts){
var map__88064 = sicmutils.numerical.multimin.nelder_mead.step_defaults(dimension,opts);
var map__88064__$1 = cljs.core.__destructure_map(map__88064);
var alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88064__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var beta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88064__$1,new cljs.core.Keyword(null,"beta","beta",455605892));
var sigma = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88064__$1,new cljs.core.Keyword(null,"sigma","sigma",-63715703));
var gamma = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88064__$1,new cljs.core.Keyword(null,"gamma","gamma",1883969687));
var centroid_pt = (function sicmutils$numerical$multimin$nelder_mead$step_fn_$_centroid_pt(simplex){
return sicmutils.numerical.multimin.nelder_mead.v_STAR_(((1) / dimension),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(sicmutils.numerical.multimin.nelder_mead.v_PLUS_,cljs.core.pop(simplex)));
});
var reflect = (function sicmutils$numerical$multimin$nelder_mead$step_fn_$_reflect(simplex,centroid){
return sicmutils.numerical.multimin.nelder_mead.v_(sicmutils.numerical.multimin.nelder_mead.v_STAR_((alpha + (1)),centroid),sicmutils.numerical.multimin.nelder_mead.v_STAR_(alpha,cljs.core.peek(simplex)));
});
var reflect_expand = (function sicmutils$numerical$multimin$nelder_mead$step_fn_$_reflect_expand(simplex,centroid){
return sicmutils.numerical.multimin.nelder_mead.v_(sicmutils.numerical.multimin.nelder_mead.v_STAR_(((alpha * beta) + (1)),centroid),sicmutils.numerical.multimin.nelder_mead.v_STAR_((alpha * beta),cljs.core.peek(simplex)));
});
var reflect_contract = (function sicmutils$numerical$multimin$nelder_mead$step_fn_$_reflect_contract(simplex,centroid){
return sicmutils.numerical.multimin.nelder_mead.v_(sicmutils.numerical.multimin.nelder_mead.v_STAR_(((gamma * alpha) + (1)),centroid),sicmutils.numerical.multimin.nelder_mead.v_STAR_((gamma * alpha),cljs.core.peek(simplex)));
});
var contract = (function sicmutils$numerical$multimin$nelder_mead$step_fn_$_contract(simplex,centroid){
return sicmutils.numerical.multimin.nelder_mead.v_PLUS_(sicmutils.numerical.multimin.nelder_mead.v_STAR_(((1) - gamma),centroid),sicmutils.numerical.multimin.nelder_mead.v_STAR_(gamma,cljs.core.peek(simplex)));
});
var shrink = (function sicmutils$numerical$multimin$nelder_mead$step_fn_$_shrink(p__88074){
var vec__88075 = p__88074;
var seq__88076 = cljs.core.seq(vec__88075);
var first__88077 = cljs.core.first(seq__88076);
var seq__88076__$1 = cljs.core.next(seq__88076);
var s0 = first__88077;
var rest = seq__88076__$1;
var scale_toward_s0 = (function (p1__88062_SHARP_){
return sicmutils.numerical.multimin.nelder_mead.v_PLUS_(s0,sicmutils.numerical.multimin.nelder_mead.v_STAR_(sigma,sicmutils.numerical.multimin.nelder_mead.v_(p1__88062_SHARP_,s0)));
});
var s = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s0], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(scale_toward_s0,rest));
return sicmutils.numerical.multimin.nelder_mead.sort_by_f.cljs$core$IFn$_invoke$arity$3(s,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(f,s),dimension);
});
return (function (simplex,p__88078){
var vec__88079 = p__88078;
var f_best = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88079,(0),null);
var f_simplex = vec__88079;
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT__EQ_,f_simplex))){
} else {
throw (new Error("Assert failed: (apply <= f-simplex)"));
}

var _PERCENT_ = (function (){var swap_worst = (function (elem,f_elem){
var s = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(simplex),elem);
var fs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(f_simplex),f_elem);
return sicmutils.numerical.multimin.nelder_mead.sort_by_f.cljs$core$IFn$_invoke$arity$3(s,fs,dimension);
});
var f_worst = cljs.core.peek(f_simplex);
var f_butworst = cljs.core.peek(cljs.core.pop(f_simplex));
var centroid = centroid_pt(simplex);
var reflected = reflect(simplex,centroid);
var fr = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(reflected) : f.call(null,reflected));
if((fr < f_best)){
var expanded = reflect_expand(simplex,centroid);
var fe = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(expanded) : f.call(null,expanded));
if((fe < fr)){
return swap_worst(expanded,fe);
} else {
return swap_worst(reflected,fr);
}
} else {
if((fr < f_butworst)){
return swap_worst(reflected,fr);
} else {
if((fr < f_worst)){
var r_contracted = reflect_contract(simplex,centroid);
var frc = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(r_contracted) : f.call(null,r_contracted));
if((frc <= fr)){
return swap_worst(r_contracted,frc);
} else {
return shrink(simplex);
}
} else {
var contracted = contract(simplex,centroid);
var fc = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(contracted) : f.call(null,contracted));
if((fc < f_worst)){
return swap_worst(contracted,fc);
} else {
return shrink(simplex);
}

}
}
}
})();
if(cljs.core.truth_((function (p1__88063_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT__EQ_,cljs.core.second(p1__88063_SHARP_));
}))){
} else {
throw (new Error("Assert failed: (fn* [p1__88063#] (apply <= (second p1__88063#)))"));
}

return _PERCENT_;
});
});
/**
 * Returns a function that returns true if the supplied simplex and simplex
 *   evaluations signal convergence, false otherwise.
 */
sicmutils.numerical.multimin.nelder_mead.convergence_fn = (function sicmutils$numerical$multimin$nelder_mead$convergence_fn(p__88102){
var map__88104 = p__88102;
var map__88104__$1 = cljs.core.__destructure_map(map__88104);
var simplex_tolerance = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88104__$1,new cljs.core.Keyword(null,"simplex-tolerance","simplex-tolerance",1524945145),1.0E-4);
var fn_tolerance = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88104__$1,new cljs.core.Keyword(null,"fn-tolerance","fn-tolerance",-1445606164),1.0E-4);
return (function (simplex,f_simplex){
return (((sicmutils.numerical.multimin.nelder_mead.sup_norm(simplex) <= simplex_tolerance)) && ((sicmutils.numerical.multimin.nelder_mead.sup_norm(f_simplex) <= fn_tolerance)));
});
});
/**
 * Takes an atom that, when dereferenced, returns a function call count, and the
 *   dimension of the simplex.
 *   Returns a function of `iterations` that returns true if the iteration and
 *   function call limits signal stopping, false otherwise.
 */
sicmutils.numerical.multimin.nelder_mead.stop_fn = (function sicmutils$numerical$multimin$nelder_mead$stop_fn(f_counter,dimension,p__88107){
var map__88109 = p__88107;
var map__88109__$1 = cljs.core.__destructure_map(map__88109);
var maxiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88109__$1,new cljs.core.Keyword(null,"maxiter","maxiter",-1867223754));
var maxfun = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88109__$1,new cljs.core.Keyword(null,"maxfun","maxfun",-50301814));
var maxiter__$1 = (function (){var or__4253__auto__ = maxiter;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (dimension * (200));
}
})();
var maxfun__$1 = (function (){var or__4253__auto__ = maxfun;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (dimension * (200));
}
})();
return (function (iterations){
return (((iterations > maxiter__$1)) || ((cljs.core.deref(f_counter) > maxfun__$1)));
});
});
/**
 * Find the minimum of the function f: R^n -> R, given an initial point q ∈ R^n.
 *   Supports the following optional keyword arguments:
 * 
 *   `:callback` if supplied, the supplied fn will be invoked with iteration count,
 *   the values of X and the value of f(X) at each intermediate point of
 *   evaluation.
 * 
 *   `:info?` if true, wraps the result with evaluation information.
 * 
 *   `:adaptive?` if true, the Nelder-Mead parameters for contraction, expansion,
 *   reflection and shrinking will be set adaptively, as functions of the number of
 *   dimensions. If false they stay constant.
 * 
 *   `:alpha` sets the reflection coefficient used for each step of Nelder-Mead.
 * 
 *   `:beta` sets the expansion coefficient used for each step of Nelder-Mead.
 * 
 *   `:gamma` sets the contraction coefficient used for each step of Nelder-Mead.
 * 
 *   `:sigma` sets the shrink coefficient used for each step of Nelder-Mead.
 * 
 *   `:maxiter` Maximum number of iterations allowed for the minimizer. Defaults to
 *   200*dimension.
 * 
 *   `:maxfun` Maximum number of times the function can be evaluated before exiting.
 *   Defaults to 200*dimension.
 * 
 *   `:simplex-tolerance` When the absolute value of the max difference between the
 *   best point and any point in the simplex falls below this tolerance, the
 *   minimizer stops. Defaults to 1e-4.
 * 
 *   `:fn-tolerance` When the absolute value of the max difference between the best
 *   point's function value and the fn value of any point in the simplex falls
 *   below this tolerance, the minimizer stops. Defaults to 1e-4.
 * 
 *   `:zero-delta` controls the value to which 0 entries in the initial vector are
 *   set during initial simplex generation. Defaults to 0.00025.
 * 
 *   `:nonzero-delta` factor by which entries in the initial vector are perturbed to
 *   generate the initial simplex. Defaults to 0.05.
 * 
 *   See Gao, F. and Han, L.
 *    Implementing the Nelder-Mead simplex algorithm with adaptive
 *    parameters. 2012. Computational Optimization and Applications.
 *    51:1, pp. 259-277
 *   I gratefully acknowledge the [Python implementation in
 *   SciPy](https://github.com/scipy/scipy/blob/589c9afe41774ee96ec121f1867361146add8276/scipy/optimize/optimize.py#L556:5)
 *   which I have imitated here.
 *   
 */
sicmutils.numerical.multimin.nelder_mead.nelder_mead = (function sicmutils$numerical$multimin$nelder_mead$nelder_mead(func,x0,p__88127){
var map__88128 = p__88127;
var map__88128__$1 = cljs.core.__destructure_map(map__88128);
var opts = map__88128__$1;
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88128__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var callback__$1 = (function (){var or__4253__auto__ = callback;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.constantly(null);
}
})();
var dimension = cljs.core.count(x0);
var vec__88131 = sicmutils.numerical.multimin.nelder_mead.counted(func);
var f_counter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88131,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88131,(1),null);
var step = sicmutils.numerical.multimin.nelder_mead.step_fn(f,dimension,opts);
var convergence_QMARK_ = sicmutils.numerical.multimin.nelder_mead.convergence_fn(opts);
var stop_QMARK_ = sicmutils.numerical.multimin.nelder_mead.stop_fn(f_counter,dimension,opts);
var simplex = sicmutils.numerical.multimin.nelder_mead.initial_simplex(x0,opts);
var f_simplex = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(f,simplex);
var G__88153 = sicmutils.numerical.multimin.nelder_mead.sort_by_f.cljs$core$IFn$_invoke$arity$3(simplex,f_simplex,dimension);
var vec__88158 = G__88153;
var vec__88161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88158,(0),null);
var s0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88161,(0),null);
var simplex__$1 = vec__88161;
var vec__88164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88158,(1),null);
var f0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88164,(0),null);
var f_simplex__$1 = vec__88164;
var iteration = (0);
var G__88153__$1 = G__88153;
var iteration__$1 = iteration;
while(true){
var vec__88213 = G__88153__$1;
var vec__88216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88213,(0),null);
var s0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88216,(0),null);
var simplex__$2 = vec__88216;
var vec__88219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88213,(1),null);
var f0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88219,(0),null);
var f_simplex__$2 = vec__88219;
var iteration__$2 = iteration__$1;
(callback__$1.cljs$core$IFn$_invoke$arity$3 ? callback__$1.cljs$core$IFn$_invoke$arity$3(iteration__$2,s0__$1,f0__$1) : callback__$1.call(null,iteration__$2,s0__$1,f0__$1));

var converged_QMARK_ = convergence_QMARK_(simplex__$2,f_simplex__$2);
if(cljs.core.truth_((function (){var or__4253__auto__ = converged_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return stop_QMARK_(iteration__$2);
}
})())){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"result","result",1415092211),s0__$1,new cljs.core.Keyword(null,"value","value",305978217),f0__$1,new cljs.core.Keyword(null,"converged?","converged?",1779059976),converged_QMARK_,new cljs.core.Keyword(null,"iterations","iterations",-1402710890),iteration__$2,new cljs.core.Keyword(null,"fncalls","fncalls",-71376182),cljs.core.deref(f_counter)], null);
} else {
var G__88333 = (step.cljs$core$IFn$_invoke$arity$2 ? step.cljs$core$IFn$_invoke$arity$2(simplex__$2,f_simplex__$2) : step.call(null,simplex__$2,f_simplex__$2));
var G__88334 = (iteration__$2 + (1));
G__88153__$1 = G__88333;
iteration__$1 = G__88334;
continue;
}
break;
}
});

//# sourceMappingURL=sicmutils.numerical.multimin.nelder_mead.js.map
