goog.provide('sicmutils.numerical.minimize');
/**
 * Find the minimum of the function `f: R -> R` in the interval `[a, b]`.
 * 
 *   If an `observe` function is supplied, it will be invoked with the iteration
 *   count and the values of x and f(x) at each search step.
 */
sicmutils.numerical.minimize.minimize = (function sicmutils$numerical$minimize$minimize(var_args){
var G__90337 = arguments.length;
switch (G__90337) {
case 3:
return sicmutils.numerical.minimize.minimize.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sicmutils.numerical.minimize.minimize.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.minimize.minimize.cljs$core$IFn$_invoke$arity$3 = (function (f,a,b){
return sicmutils.numerical.minimize.minimize.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.constantly(null));
}));

(sicmutils.numerical.minimize.minimize.cljs$core$IFn$_invoke$arity$4 = (function (f,a,b,observe){
return sicmutils.numerical.unimin.brent.brent_min.cljs$core$IFn$_invoke$arity$4(f,a,b,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),observe], null));
}));

(sicmutils.numerical.minimize.minimize.cljs$lang$maxFixedArity = 4);

/**
 * Entrypoint for multidimensional minimization routines.
 * 
 *   See [[sicmutils.numerical.multimin.nelder-mead/nelder-mead]] for the only
 *   supported option.
 */
sicmutils.numerical.minimize.multidimensional_minimize = (function sicmutils$numerical$minimize$multidimensional_minimize(var_args){
var args__4870__auto__ = [];
var len__4864__auto___90347 = arguments.length;
var i__4865__auto___90348 = (0);
while(true){
if((i__4865__auto___90348 < len__4864__auto___90347)){
args__4870__auto__.push((arguments[i__4865__auto___90348]));

var G__90349 = (i__4865__auto___90348 + (1));
i__4865__auto___90348 = G__90349;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sicmutils.numerical.minimize.multidimensional_minimize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sicmutils.numerical.minimize.multidimensional_minimize.cljs$core$IFn$_invoke$arity$variadic = (function (func,x0,p__90342){
var map__90343 = p__90342;
var map__90343__$1 = cljs.core.__destructure_map(map__90343);
var opts = map__90343__$1;
var info_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90343__$1,new cljs.core.Keyword(null,"info?","info?",361925553));
var result = sicmutils.numerical.multimin.nelder_mead.nelder_mead(func,x0,opts);
if(cljs.core.truth_(new cljs.core.Keyword(null,"converged?","converged?",1779059976).cljs$core$IFn$_invoke$arity$1(result))){
if(cljs.core.truth_(info_QMARK_)){
return result;
} else {
return new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result);
}
} else {
return sicmutils.util.failure_to_converge(["multidimensional-minimize failed to converge: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)].join(''));
}
}));

(sicmutils.numerical.minimize.multidimensional_minimize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sicmutils.numerical.minimize.multidimensional_minimize.cljs$lang$applyTo = (function (seq90338){
var G__90339 = cljs.core.first(seq90338);
var seq90338__$1 = cljs.core.next(seq90338);
var G__90340 = cljs.core.first(seq90338__$1);
var seq90338__$2 = cljs.core.next(seq90338__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__90339,G__90340,seq90338__$2);
}));


//# sourceMappingURL=sicmutils.numerical.minimize.js.map
