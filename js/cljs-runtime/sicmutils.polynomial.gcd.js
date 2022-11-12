goog.provide('sicmutils.polynomial.gcd');
/**
 * Pair of the form [number
 *   Keyword], where keyword is one of the supported units from
 *   [[sicmutils.util.stopwatch]]. If Euclidean GCD takes longer than this time
 *   limit, the system will bail out by throwing an exception.
 */
sicmutils.polynomial.gcd._STAR_poly_gcd_time_limit_STAR_ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),new cljs.core.Keyword(null,"millis","millis",-1338288387)], null);
sicmutils.polynomial.gcd._STAR_clock_STAR_ = null;
/**
 * When true, multivariate GCD will cache each recursive step in the
 *   Euclidean GCD algorithm, and attempt to shortcut out on a successful cache
 *   hit. True by default.
 */
sicmutils.polynomial.gcd._STAR_poly_gcd_cache_enable_STAR_ = true;
/**
 * When true, multivariate GCD will log each `u` and `v` input and the
 *   result of each step, along with the recursive level of the logged GCD
 *   computation. False by default.
 */
sicmutils.polynomial.gcd._STAR_poly_gcd_debug_STAR_ = false;
sicmutils.polynomial.gcd.gcd_memo = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
sicmutils.polynomial.gcd.gcd_cache_hit = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
sicmutils.polynomial.gcd.gcd_cache_miss = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
sicmutils.polynomial.gcd.gcd_trivial_constant = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
sicmutils.polynomial.gcd.gcd_monomials = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
/**
 * When called, logs statistics about the GCD memoization cache, and the number of
 *   times the system has encountered monomial or other trivial GCDs. 
 */
sicmutils.polynomial.gcd.gcd_stats = (function sicmutils$polynomial$gcd$gcd_stats(){
var memo_count_86817 = cljs.core.count(cljs.core.deref(sicmutils.polynomial.gcd.gcd_memo));
if((memo_count_86817 > (0))){
var hits_86820 = cljs.core.deref(sicmutils.polynomial.gcd.gcd_cache_hit);
var misses_86821 = cljs.core.deref(sicmutils.polynomial.gcd.gcd_cache_miss);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"sicmutils.polynomial.gcd",null,72,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.string.format("GCD cache hit rate %.2f%% (%d entries)",((100) * (hits_86820 / (hits_86820 + misses_86821))),memo_count_86817)], null);
}),null)),null,763957704,null);
} else {
}

return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"sicmutils.polynomial.gcd",null,77,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.string.format("GCD triv %d mono %d",cljs.core.deref(sicmutils.polynomial.gcd.gcd_trivial_constant),cljs.core.deref(sicmutils.polynomial.gcd.gcd_monomials))], null);
}),null)),null,-1967635785,null);
});
/**
 * Generates a DEBUG logging statement guarded by the [[*poly-gcd-debug*]] dynamic
 *   variable.
 */
sicmutils.polynomial.gcd.dbg = (function sicmutils$polynomial$gcd$dbg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___86826 = arguments.length;
var i__4865__auto___86829 = (0);
while(true){
if((i__4865__auto___86829 < len__4864__auto___86826)){
args__4870__auto__.push((arguments[i__4865__auto___86829]));

var G__86830 = (i__4865__auto___86829 + (1));
i__4865__auto___86829 = G__86830;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sicmutils.polynomial.gcd.dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sicmutils.polynomial.gcd.dbg.cljs$core$IFn$_invoke$arity$variadic = (function (level,where,xs){
if(cljs.core.truth_(sicmutils.polynomial.gcd._STAR_poly_gcd_debug_STAR_)){
var xs__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,xs);
var xs_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [where,level], null),xs__$1);
var xs_s = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",xs_SINGLEQUOTE_);
var prefix = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(level,"  "));
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"sicmutils.polynomial.gcd",null,91,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefix,xs_s], null);
}),null)),null,-1054648718,null);
} else {
return null;
}
}));

(sicmutils.polynomial.gcd.dbg.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sicmutils.polynomial.gcd.dbg.cljs$lang$applyTo = (function (seq86650){
var G__86651 = cljs.core.first(seq86650);
var seq86650__$1 = cljs.core.next(seq86650);
var G__86652 = cljs.core.first(seq86650__$1);
var seq86650__$2 = cljs.core.next(seq86650__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__86651,G__86652,seq86650__$2);
}));

/**
 * Returns true if the [[*clock*]] dynamic variable contains a Stopwatch with an
 *   elapsed time that's passed the limit allowed by the
 *   dynamic [[*poly-gcd-time-limit*]], false otherwise.
 */
sicmutils.polynomial.gcd.time_expired_QMARK_ = (function sicmutils$polynomial$gcd$time_expired_QMARK_(){
var and__4251__auto__ = sicmutils.polynomial.gcd._STAR_clock_STAR_;
if(cljs.core.truth_(and__4251__auto__)){
var vec__86665 = sicmutils.polynomial.gcd._STAR_poly_gcd_time_limit_STAR_;
var ticks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86665,(0),null);
var units = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86665,(1),null);
return (sicmutils.util.stopwatch.elapsed.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.gcd._STAR_clock_STAR_,units) > ticks);
} else {
return and__4251__auto__;
}
});
/**
 * When called, if [[time-expired?]] returns `true`, logs a warning and throws a
 *   TimeoutException, signaling that the GCD process has gone on past its allowed
 *   time limit.
 */
sicmutils.polynomial.gcd.maybe_bail_out_BANG_ = (function sicmutils$polynomial$gcd$maybe_bail_out_BANG_(description){
if(cljs.core.truth_(sicmutils.polynomial.gcd.time_expired_QMARK_())){
var s = goog.string.format("Timed out: %s after %s",description,sicmutils.util.stopwatch.repr(sicmutils.polynomial.gcd._STAR_clock_STAR_));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"sicmutils.polynomial.gcd",null,109,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
}),null)),null,4634021,null);

return sicmutils.util.timeout_ex(s);
} else {
return null;
}
});
/**
 * Given an explicit `timeout` and a no-argument function `thunk`, calls `thunk`
 *   in a context where [[*poly-gcd-time-limit*]] is dynamically bound to
 *   `timeout`. Calling [[time-expired?]] or [[maybe-bail-out!]] inside `thunk`
 *   will signal failure appropriately if `thunk` has taken longer than `timeout`.
 */
sicmutils.polynomial.gcd.with_limited_time = (function sicmutils$polynomial$gcd$with_limited_time(timeout,thunk){
var _STAR_poly_gcd_time_limit_STAR__orig_val__86670 = sicmutils.polynomial.gcd._STAR_poly_gcd_time_limit_STAR_;
var _STAR_clock_STAR__orig_val__86671 = sicmutils.polynomial.gcd._STAR_clock_STAR_;
var _STAR_poly_gcd_time_limit_STAR__temp_val__86672 = timeout;
var _STAR_clock_STAR__temp_val__86673 = sicmutils.util.stopwatch.stopwatch();
(sicmutils.polynomial.gcd._STAR_poly_gcd_time_limit_STAR_ = _STAR_poly_gcd_time_limit_STAR__temp_val__86672);

(sicmutils.polynomial.gcd._STAR_clock_STAR_ = _STAR_clock_STAR__temp_val__86673);

try{return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
}finally {(sicmutils.polynomial.gcd._STAR_clock_STAR_ = _STAR_clock_STAR__orig_val__86671);

(sicmutils.polynomial.gcd._STAR_poly_gcd_time_limit_STAR_ = _STAR_poly_gcd_time_limit_STAR__orig_val__86670);
}});
/**
 * Attempts to call `f` with arguments `u` and `v`, but only after checking that
 *   `[u v]` is not present in the global GCD memoization cache. If not, calls `(f
 *   u v)` and registers the result in [[gcd-memo]] before returning the result.
 * 
 *   Use the [[*poly-gcd-cache-enable*]] dynamic variable to turn the cache on and
 *   off.
 */
sicmutils.polynomial.gcd.cached = (function sicmutils$polynomial$gcd$cached(f,u,v){
var temp__5751__auto__ = (function (){var and__4251__auto__ = sicmutils.polynomial.gcd._STAR_poly_gcd_cache_enable_STAR_;
if(cljs.core.truth_(and__4251__auto__)){
var G__86675 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v], null);
var fexpr__86674 = cljs.core.deref(sicmutils.polynomial.gcd.gcd_memo);
return (fexpr__86674.cljs$core$IFn$_invoke$arity$1 ? fexpr__86674.cljs$core$IFn$_invoke$arity$1(G__86675) : fexpr__86674.call(null,G__86675));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var g = temp__5751__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.gcd.gcd_cache_hit,cljs.core.inc);

return g;
} else {
var result = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,v) : f.call(null,u,v));
if(cljs.core.truth_(sicmutils.polynomial.gcd._STAR_poly_gcd_cache_enable_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.gcd.gcd_cache_miss,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sicmutils.polynomial.gcd.gcd_memo,cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v], null),result);
} else {
}

return result;
}
});
/**
 * Takes two polynomials `u` and `v` and any number of 'continuation' functions,
 *   and returns the result of threading `u` and `v` through all continuation
 *   functions.
 * 
 *   Each function, except the last, should have signature `[p q k]`, where `p` and
 *   `q` are polynomials and k is a continuation of the same type.
 * 
 *   The last function should have signature `[p q]` without a continuation
 *   argument.
 * 
 *   For example, the following forms are equivalent:
 * 
 *   ```clojure
 *   (cont-> u v f1 f2 f3)
 *   (f1 u v (fn [u' v']
 *          (f2 u' v' f3)))
 *   ```
 */
sicmutils.polynomial.gcd.cont__GT_ = (function sicmutils$polynomial$gcd$cont__GT_(var_args){
var G__86696 = arguments.length;
switch (G__86696) {
case 1:
return sicmutils.polynomial.gcd.cont__GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.polynomial.gcd.cont__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.polynomial.gcd.cont__GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___86848 = arguments.length;
var i__4865__auto___86849 = (0);
while(true){
if((i__4865__auto___86849 < len__4864__auto___86848)){
args_arr__4885__auto__.push((arguments[i__4865__auto___86849]));

var G__86850 = (i__4865__auto___86849 + (1));
i__4865__auto___86849 = G__86850;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((3)),(0),null));
return sicmutils.polynomial.gcd.cont__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4886__auto__);

}
});

(sicmutils.polynomial.gcd.cont__GT_.cljs$core$IFn$_invoke$arity$1 = (function (p__86697){
var vec__86698 = p__86697;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86698,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86698,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v], null);
}));

(sicmutils.polynomial.gcd.cont__GT_.cljs$core$IFn$_invoke$arity$2 = (function (p__86701,f){
var vec__86702 = p__86701;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86702,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86702,(1),null);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,v) : f.call(null,u,v));
}));

(sicmutils.polynomial.gcd.cont__GT_.cljs$core$IFn$_invoke$arity$3 = (function (p__86706,f1,f2){
var vec__86707 = p__86706;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86707,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86707,(1),null);
return (f1.cljs$core$IFn$_invoke$arity$3 ? f1.cljs$core$IFn$_invoke$arity$3(u,v,f2) : f1.call(null,u,v,f2));
}));

(sicmutils.polynomial.gcd.cont__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (p__86710,f1,f2,more){
var vec__86711 = p__86710;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86711,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86711,(1),null);
var G__86715 = u;
var G__86716 = v;
var G__86717 = (function (u_SINGLEQUOTE_,v_SINGLEQUOTE_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sicmutils.polynomial.gcd.cont__GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u_SINGLEQUOTE_,v_SINGLEQUOTE_], null),f2,more);
});
return (f1.cljs$core$IFn$_invoke$arity$3 ? f1.cljs$core$IFn$_invoke$arity$3(G__86715,G__86716,G__86717) : f1.call(null,G__86715,G__86716,G__86717));
}));

/** @this {Function} */
(sicmutils.polynomial.gcd.cont__GT_.cljs$lang$applyTo = (function (seq86692){
var G__86693 = cljs.core.first(seq86692);
var seq86692__$1 = cljs.core.next(seq86692);
var G__86694 = cljs.core.first(seq86692__$1);
var seq86692__$2 = cljs.core.next(seq86692__$1);
var G__86695 = cljs.core.first(seq86692__$2);
var seq86692__$3 = cljs.core.next(seq86692__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__86693,G__86694,G__86695,seq86692__$3);
}));

(sicmutils.polynomial.gcd.cont__GT_.cljs$lang$maxFixedArity = (3));

/**
 * Given a sequence of polynomial terms, returns a pair of functions of one
 *   polynomial argument that respectively sort and unsort the variables in the
 *   polynomial by increasing degree.
 */
sicmutils.polynomial.gcd.terms__GT_sort_PLUS_unsort = (function sicmutils$polynomial$gcd$terms__GT_sort_PLUS_unsort(terms){
if((cljs.core.count(terms) <= (1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,cljs.core.identity], null);
} else {
return sicmutils.polynomial.exponent.__GT_sort_PLUS_unsort(cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(sicmutils.polynomial.impl.exponents),sicmutils.polynomial.exponent.lcm,terms));
}
});
/**
 * Accepts two polynomials `u` and `v` and calls `continuation` with the variable
 *   indices in each polynomial rearranged to make GCD go faster. Undoes the
 *   rearrangement on return.
 * 
 *   When passed either non-polynomials or univariate polynomials,
 *   returns `(continue u v)` unchanged.
 * 
 *   Variables are sorted by increasing degree, where the degree is considered
 *   across terms of both `u` and `v`. Discussed in ['Evaluation of the Heuristic
 *   Polynomial
 *   GCD'](https://people.eecs.berkeley.edu/~fateman/282/readings/liao.pdf) by Liao
 *   and Fateman [1995].
 */
sicmutils.polynomial.gcd.with_optimized_variable_order = (function sicmutils$polynomial$gcd$with_optimized_variable_order(u,v,continue$){
if(((sicmutils.polynomial.multivariate_QMARK_(u)) || (sicmutils.polynomial.multivariate_QMARK_(v)))){
var l_terms = ((sicmutils.polynomial.polynomial_QMARK_(u))?sicmutils.polynomial.bare_terms(u):cljs.core.PersistentVector.EMPTY);
var r_terms = ((sicmutils.polynomial.polynomial_QMARK_(v))?sicmutils.polynomial.bare_terms(v):cljs.core.PersistentVector.EMPTY);
var vec__86720 = sicmutils.polynomial.gcd.terms__GT_sort_PLUS_unsort(cljs.core.into.cljs$core$IFn$_invoke$arity$2(l_terms,r_terms));
var sort = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86720,(0),null);
var unsort = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86720,(1),null);
return sicmutils.polynomial.map_exponents.cljs$core$IFn$_invoke$arity$2(unsort,(function (){var G__86723 = sicmutils.polynomial.map_exponents.cljs$core$IFn$_invoke$arity$2(sort,u);
var G__86724 = sicmutils.polynomial.map_exponents.cljs$core$IFn$_invoke$arity$2(sort,v);
return (continue$.cljs$core$IFn$_invoke$arity$2 ? continue$.cljs$core$IFn$_invoke$arity$2(G__86723,G__86724) : continue$.call(null,G__86723,G__86724));
})());
} else {
return (continue$.cljs$core$IFn$_invoke$arity$2 ? continue$.cljs$core$IFn$_invoke$arity$2(u,v) : continue$.call(null,u,v));
}
});
/**
 * Given some polynomial `p`, and a multi-arity `gcd` function for its
 *   coefficients, returns a pair of the polynomial's content and primitive.
 * 
 *   The 'content' of a polynomial is the greatest common divisor of its
 *   coefficients. The 'primitive part' of a polynomial is the quotient of the
 *   polynomial by its content.
 * 
 *   See Wikipedia's ['Primitive Part and
 *   Content'](https://en.wikipedia.org/wiki/Primitive_part_and_content) page for
 *   more details. 
 */
sicmutils.polynomial.gcd.__GT_content_PLUS_primitive = (function sicmutils$polynomial$gcd$__GT_content_PLUS_primitive(p,gcd){
var coeffs = sicmutils.polynomial.coefficients(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(coeffs))){
var content = cljs.core.first(coeffs);
var primitive = sicmutils.polynomial.map_coefficients((function (_){
return (1);
}),p);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [content,primitive], null);
} else {
var content = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(gcd,coeffs);
var primitive = ((sicmutils.value.one_QMARK_(content))?p:sicmutils.polynomial.map_coefficients((function (p1__86725_SHARP_){
return sicmutils.generic.exact_divide.cljs$core$IFn$_invoke$arity$2(p1__86725_SHARP_,content);
}),p));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [content,primitive], null);
}
});
/**
 * Given a multi-arity `gcd` routine, returns a function of polynomials `u` and
 *   `v` and a continuation `continue`.
 * 
 *   The returned function calls the `continue` continuation with the [primitive
 *   parts](https://en.wikipedia.org/wiki/Primitive_part_and_content) of `u` and
 *   `v` respectively.
 * 
 *   On return, [[with-content-removed]]'s returned function scales the result back
 *   up by the `gcd` of the contents of `u` and `v` (ie, the greatest common
 *   divisor across the coefficients of both polynomials).
 * 
 *   [[with-content-removed]] is intended for use with multivariate polynomials. In
 *   this case, `u` and `v` are considered to be univariate polynomials with
 *   polynomial coefficients.
 */
sicmutils.polynomial.gcd.with_content_removed = (function sicmutils$polynomial$gcd$with_content_removed(gcd){
return (function (u,v,continue$){
var vec__86735 = sicmutils.polynomial.gcd.__GT_content_PLUS_primitive(u,gcd);
var ku = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86735,(0),null);
var pu = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86735,(1),null);
var vec__86738 = sicmutils.polynomial.gcd.__GT_content_PLUS_primitive(v,gcd);
var kv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86738,(0),null);
var pv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86738,(1),null);
var d = (gcd.cljs$core$IFn$_invoke$arity$2 ? gcd.cljs$core$IFn$_invoke$arity$2(ku,kv) : gcd.call(null,ku,kv));
var result = (continue$.cljs$core$IFn$_invoke$arity$2 ? continue$.cljs$core$IFn$_invoke$arity$2(pu,pv) : continue$.call(null,pu,pv));
var result__$1 = ((sicmutils.polynomial.polynomial_QMARK_(result))?result:sicmutils.polynomial.constant.cljs$core$IFn$_invoke$arity$2((1),result));
return sicmutils.polynomial.scale_l(d,result__$1);
});
});
/**
 * Given a multi-arity `gcd` routine, returns a function of polynomials `u` and
 *   `v` and a continuation `continue`.
 * 
 *   This function determines whether or not `u` and `v` have any variables in
 *   common. If they don't, then it's not possible for any common divisor to share
 *   variables; the function returns the `gcd` of the coefficients of `u` and `v`.
 * 
 *   If they do, the function returns `(continue u v)`.
 */
sicmutils.polynomial.gcd.with_trivial_constant_gcd_check = (function sicmutils$polynomial$gcd$with_trivial_constant_gcd_check(gcd){
return (function (u,v,continue$){
if(sicmutils.polynomial.polynomial_QMARK_(u)){
} else {
throw (new Error("Assert failed: (p/polynomial? u)"));
}

if(sicmutils.polynomial.polynomial_QMARK_(v)){
} else {
throw (new Error("Assert failed: (p/polynomial? v)"));
}

var u_vars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sicmutils.util.keyset,sicmutils.polynomial.impl.exponents),sicmutils.polynomial.bare_terms(u)));
var v_vars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sicmutils.util.keyset,sicmutils.polynomial.impl.exponents),sicmutils.polynomial.bare_terms(v)));
if(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(u_vars,v_vars))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.gcd.gcd_trivial_constant,cljs.core.inc);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(gcd,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.coefficients(u),sicmutils.polynomial.coefficients(v)));
} else {
return (continue$.cljs$core$IFn$_invoke$arity$2 ? continue$.cljs$core$IFn$_invoke$arity$2(u,v) : continue$.call(null,u,v));
}
});
});
/**
 * Given a `binary-gcd` function for computing greatest common divisors, returns a
 *   multi-arity function that returns `0` when called with no arguments, and
 *   reduces multiple arguments with `binary-gcd`, aborting if any `one?` is
 *   reached.
 * 
 *   NOTE: This is only appropriate if you don't expect rational coefficients; the
 *   GCD of 1 and a rational number IS that other number, so the `v/one?` guard is
 *   not appropriate.
 */
sicmutils.polynomial.gcd.__GT_gcd = (function sicmutils$polynomial$gcd$__GT_gcd(binary_gcd){
return sicmutils.util.aggregate.monoid.cljs$core$IFn$_invoke$arity$3(binary_gcd,(0),sicmutils.value.one_QMARK_);
});
sicmutils.polynomial.gcd.primitive_gcd = sicmutils.polynomial.gcd.__GT_gcd((function (l,r){
if(((sicmutils.value.number_QMARK_(l)) && (sicmutils.value.number_QMARK_(r)))){
return sicmutils.generic.gcd.cljs$core$IFn$_invoke$arity$2(l,r);
} else {
return (1);
}
}));
/**
 * Returns the GCD of some polynomial `p` and a non-polynomial `n`; this is simply
 *   the GCD of `n` and all coefficients of `p`.
 */
sicmutils.polynomial.gcd.gcd_poly_number = (function sicmutils$polynomial$gcd$gcd_poly_number(p,n){
if(sicmutils.polynomial.polynomial_QMARK_(p)){
} else {
throw (new Error("Assert failed: (p/polynomial? p)"));
}

if(sicmutils.polynomial.coeff_QMARK_(n)){
} else {
throw (new Error("Assert failed: (p/coeff? n)"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sicmutils.polynomial.gcd.primitive_gcd,n,sicmutils.polynomial.coefficients(p));
});
/**
 * Given two polynomials `u` and `v`, attempts to return the greatest common
 *   divisor of `u` and `v` by testing for trivial cases. If no trivial case
 *   applies, returns `nil`.
 */
sicmutils.polynomial.gcd.trivial_gcd = (function sicmutils$polynomial$gcd$trivial_gcd(u,v){
if(sicmutils.value.zero_QMARK_(u)){
return sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(v);
} else {
if(sicmutils.value.zero_QMARK_(v)){
return sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(u);
} else {
if(sicmutils.polynomial.coeff_QMARK_(u)){
if(sicmutils.polynomial.coeff_QMARK_(v)){
return sicmutils.polynomial.gcd.primitive_gcd(u,v);
} else {
return sicmutils.polynomial.gcd.gcd_poly_number(v,u);
}
} else {
if(sicmutils.polynomial.coeff_QMARK_(v)){
return sicmutils.polynomial.gcd.gcd_poly_number(u,v);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(u,v)){
return sicmutils.polynomial.abs(u);
} else {
return null;

}
}
}
}
}
});
/**
 * Returns the greatest common divisor of some monomial `m` and a polynomial `p`.
 *   The GCD of these two inputs is a monomial (or bare coefficient) with:
 * 
 *   - coefficient portion equal to the GCD of the coefficient of both sides
 *   - power product equal to the GCD of the power products of all `p` terms with
 *  the power product of `m`
 */
sicmutils.polynomial.gcd.monomial_gcd = (function sicmutils$polynomial$gcd$monomial_gcd(m,p){
if(sicmutils.polynomial.monomial_QMARK_(m)){
} else {
throw (new Error("Assert failed: (p/monomial? m)"));
}

if(sicmutils.polynomial.polynomial_QMARK_(p)){
} else {
throw (new Error("Assert failed: (p/polynomial? p)"));
}

var vec__86752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.bare_terms(m),(0));
var mono_expts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86752,(0),null);
var mono_coeff = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86752,(1),null);
var expts = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(sicmutils.polynomial.impl.exponents),sicmutils.polynomial.exponent.gcd,mono_expts,sicmutils.polynomial.bare_terms(p));
var coeff = sicmutils.polynomial.gcd.gcd_poly_number(p,mono_coeff);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.gcd.gcd_monomials,cljs.core.inc);

return sicmutils.polynomial.terms__GT_polynomial(sicmutils.polynomial.bare_arity(m),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(expts,coeff)], null));
});
/**
 * Given some multivariate `gcd` function, returns a function of polynomials `u`
 *   and `v` that returns greatest common divisor of `u` and `v` using
 *   the [Euclidean algorithm for multivariate
 *   polynomials](https://en.wikipedia.org/wiki/Polynomial_greatest_common_divisor#Euclidean_algorithm).
 * 
 *   `u` and `v` are assumed to be either non-polynomial coefficients or univariate
 *   polynomials. To use [[euclidean-gcd]] for multivariate polynomials, convert
 *   the polynomial to univariate first using [[p/lower-arity]] recursively.
 */
sicmutils.polynomial.gcd.euclidean_gcd = (function sicmutils$polynomial$gcd$euclidean_gcd(gcd){
return (function (u,v){
while(true){
sicmutils.polynomial.gcd.maybe_bail_out_BANG_("euclid inner loop");

var or__4253__auto__ = sicmutils.polynomial.gcd.trivial_gcd(u,v);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var vec__86757 = sicmutils.polynomial.pseudo_remainder(u,v);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86757,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86757,(1),null);
if(sicmutils.value.zero_QMARK_(r)){
return sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(v);
} else {
var vec__86760 = sicmutils.polynomial.gcd.__GT_content_PLUS_primitive(r,gcd);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86760,(0),null);
var prim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86760,(1),null);
var G__86902 = v;
var G__86903 = prim;
u = G__86902;
v = G__86903;
continue;
}
}
break;
}
});
});
/**
 * Given two univariate polynomials `u` and `v`, returns the greatest common
 *   divisor of `u` and `v` calculated using Knuth's algorithm 4.6.1E.
 */
sicmutils.polynomial.gcd.univariate_gcd = (function sicmutils$polynomial$gcd$univariate_gcd(u,v){
if(sicmutils.polynomial.univariate_QMARK_(u)){
} else {
throw (new Error("Assert failed: (p/univariate? u)"));
}

if(sicmutils.polynomial.univariate_QMARK_(v)){
} else {
throw (new Error("Assert failed: (p/univariate? v)"));
}

return sicmutils.polynomial.gcd.cont__GT_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v], null),sicmutils.polynomial.gcd.with_content_removed(sicmutils.polynomial.gcd.primitive_gcd),sicmutils.polynomial.gcd.euclidean_gcd(sicmutils.polynomial.gcd.primitive_gcd));
});
/**
 * Given two polynomials `u` and `v` (potentially multivariate) with
 *   non-polynomial coefficients, returns the greatest common divisor of `u` and
 *   `v` calculated using a multivariate extension of Knuth's algorithm 4.6.1E.
 * 
 *   Optionally takes a debugging `level`. To see the debugging logs generated over
 *   the course of the run, set [[*poly-gcd-debug*]] to true.
 * 
 *   NOTE: [[full-gcd]] Internally checks that it hasn't run out a stopwatch set
 *   with [[with-limited-time]]; you can wrap a call to [[full-gcd]] in this
 *   function to limit its execution time.
 * 
 *   For example, this form will throw a TimeoutException after 1 second:
 * 
 *   ```clojure
 *   (with-limited-time [1 :seconds]
 *  (fn [] (full-gcd u v)))
 *   ```
 */
sicmutils.polynomial.gcd.full_gcd = (function sicmutils$polynomial$gcd$full_gcd(var_args){
var G__86765 = arguments.length;
switch (G__86765) {
case 2:
return sicmutils.polynomial.gcd.full_gcd.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.polynomial.gcd.full_gcd.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.polynomial.gcd.full_gcd.cljs$core$IFn$_invoke$arity$2 = (function (u,v){
return sicmutils.polynomial.gcd.full_gcd.cljs$core$IFn$_invoke$arity$3((0),u,v);
}));

(sicmutils.polynomial.gcd.full_gcd.cljs$core$IFn$_invoke$arity$3 = (function (level,u,v){
var attempt = (function sicmutils$polynomial$gcd$attempt(u__$1,v__$1){
var or__4253__auto__ = sicmutils.polynomial.gcd.trivial_gcd(u__$1,v__$1);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var arity = sicmutils.polynomial.check_same_arity(u__$1,v__$1);
if(sicmutils.polynomial.monomial_QMARK_(u__$1)){
return sicmutils.polynomial.gcd.monomial_gcd(u__$1,v__$1);
} else {
if(sicmutils.polynomial.monomial_QMARK_(v__$1)){
return sicmutils.polynomial.gcd.monomial_gcd(v__$1,u__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arity,(1))){
return sicmutils.polynomial.gcd.univariate_gcd(u__$1,v__$1);
} else {
var rec = (function (u__$2,v__$2){
return sicmutils.polynomial.gcd.full_gcd.cljs$core$IFn$_invoke$arity$3((level + (1)),u__$2,v__$2);
});
var next_gcd = sicmutils.polynomial.gcd.__GT_gcd(rec);
sicmutils.polynomial.gcd.maybe_bail_out_BANG_("full-gcd");

return sicmutils.polynomial.gcd.cont__GT_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1], null),sicmutils.polynomial.with_lower_arity,sicmutils.polynomial.gcd.with_content_removed(next_gcd),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.polynomial.gcd.euclidean_gcd(next_gcd)], 0));

}
}
}
}
});
sicmutils.polynomial.gcd.dbg.cljs$core$IFn$_invoke$arity$variadic(level,"full-gcd",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([u,v], 0));

var result = sicmutils.polynomial.gcd.cached(attempt,u,v);
sicmutils.polynomial.gcd.dbg.cljs$core$IFn$_invoke$arity$variadic(level,"<-",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));

return result;
}));

(sicmutils.polynomial.gcd.full_gcd.cljs$lang$maxFixedArity = 3);

/**
 * Higher-level wrapper around [[full-gcd]] that:
 * 
 *   - optimizes the case where `u` and `v` share no variables
 *   - sorts the variables in `u` and `v` in order of increasing degree
 * 
 *   before attempting [[full-gcd]]. See [[full-gcd]] for a full description.
 */
sicmutils.polynomial.gcd.classical_gcd = (function sicmutils$polynomial$gcd$classical_gcd(u,v){
return sicmutils.polynomial.gcd.cont__GT_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v], null),sicmutils.polynomial.gcd.with_trivial_constant_gcd_check(sicmutils.polynomial.gcd.primitive_gcd),sicmutils.polynomial.gcd.with_optimized_variable_order,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.polynomial.gcd.full_gcd], 0));
});
/**
 * Dispatches to [[classical-gcd]] with an enforced time limit
 *   of [[*poly-gcd-time-limit*]].
 * 
 *   NOTE this function is the place to add support for other GCD methods, like
 *   sparse polynomial GCD, that are coming down the pipe.
 */
sicmutils.polynomial.gcd.gcd_dispatch = (function sicmutils$polynomial$gcd$gcd_dispatch(u,v){
var or__4253__auto__ = sicmutils.polynomial.gcd.trivial_gcd(u,v);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.polynomial.gcd.with_limited_time(sicmutils.polynomial.gcd._STAR_poly_gcd_time_limit_STAR_,(function (){
return sicmutils.polynomial.gcd.classical_gcd(u,v);
}));
}
});
/**
 * Returns the greatest common divisor of `u` and `v`, calculated by a
 *   multivariate extension to the [Euclidean algorithm for multivariate
 *   polynomials](https://en.wikipedia.org/wiki/Polynomial_greatest_common_divisor#Euclidean_algorithm).
 * 
 *   `u` and `v` can be polynomials or non-polynomials coefficients.
 */
sicmutils.polynomial.gcd.gcd = sicmutils.util.aggregate.monoid.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.gcd.gcd_dispatch,(0));
/**
 * Returns the least common multiple of (possibly polynomial) arguments `u` and
 *   `v`, using [[gcd]] to calculate the gcd portion of
 * 
 *   ```
 *   (/ (g/abs (* u v))
 *   (gcd u v))
 *   ```
 */
sicmutils.polynomial.gcd.lcm = (function sicmutils$polynomial$gcd$lcm(u,v){
if(((sicmutils.polynomial.polynomial_QMARK_(u)) || (sicmutils.polynomial.polynomial_QMARK_(v)))){
var g = sicmutils.polynomial.gcd.gcd_dispatch(u,v);
return sicmutils.polynomial.abs(sicmutils.polynomial.mul(sicmutils.polynomial.evenly_divide(u,g),v));
} else {
return sicmutils.generic.lcm.cljs$core$IFn$_invoke$arity$2(u,v);
}
});
/**
 * Returns the greatest common divisor of all partial derivatives of the
 *   polynomial `p` using binary applications of the [[gcd]] algorithm between each
 *   partial derivative.
 * 
 *   This algorithm assumes that all coefficients are integral, and halts when it
 *   encounters a result that responds true to [[sicmutils.value/one?]].
 * 
 *   If a non-[[p/Polynomial]] is supplied, returns 1.
 */
sicmutils.polynomial.gcd.gcd_Dp = (function sicmutils$polynomial$gcd$gcd_Dp(p){
if(sicmutils.polynomial.polynomial_QMARK_(p)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.halt_when.cljs$core$IFn$_invoke$arity$1(sicmutils.value.one_QMARK_),sicmutils.polynomial.gcd.gcd,sicmutils.polynomial.partial_derivatives(p));
} else {
return (1);
}
});
sicmutils.polynomial.defbinary(sicmutils.generic.lcm,sicmutils.polynomial.gcd.lcm);
sicmutils.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683),new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683)], null),(function (u,v){
return sicmutils.polynomial.gcd.gcd_dispatch(u,v);
}));
sicmutils.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683),new cljs.core.Keyword("sicmutils.polynomial","coeff","sicmutils.polynomial/coeff",-1161263509)], null),(function (u,v){
if(sicmutils.value.zero_QMARK_(v)){
return u;
} else {
return sicmutils.polynomial.gcd.gcd_poly_number(u,v);
}
}));
sicmutils.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.polynomial","coeff","sicmutils.polynomial/coeff",-1161263509),new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683)], null),(function (u,v){
if(sicmutils.value.zero_QMARK_(u)){
return v;
} else {
return sicmutils.polynomial.gcd.gcd_poly_number(v,u);
}
}));

//# sourceMappingURL=sicmutils.polynomial.gcd.js.map
