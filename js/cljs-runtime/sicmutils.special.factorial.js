goog.provide('sicmutils.special.factorial');
/**
 * If `x` is a fixed-precision integer, returns a [[sicmutils.util/bigint]]
 *   version of `x`. Else, acts as identity.
 * 
 *   This is useful in cases where you may want to multiply `x` by other large
 *   numbers, but don't want to try and convert something that can't overflow,
 *   like a symbol, into `bigint`.
 */
sicmutils.special.factorial.__GT_bigint = (function sicmutils$special$factorial$__GT_bigint(x){
if(cljs.core.int_QMARK_(x)){
return sicmutils.util.bigint(x);
} else {
return x;
}
});
/**
 * Returns the factorial of `n`, ie, the product of 1 to `n` (inclusive).
 * 
 *   [[factorial]] will return a platform-specific [[sicmutils.util/bigint]] given
 *   some `n` that causes integer overflow.
 */
sicmutils.special.factorial.factorial = (function sicmutils$special$factorial$factorial(n){
if(sicmutils.value.native_integral_QMARK_(n)){
} else {
throw (new Error("Assert failed: (v/native-integral? n)"));
}

if((n >= (0))){
} else {
throw (new Error("Assert failed: (>= n 0)"));
}

var elems = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1)));
if((n <= (20))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,elems);
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(sicmutils.util.bigint),sicmutils.generic._STAR_,elems);
}
});
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.special !== 'undefined') && (typeof sicmutils.special.factorial !== 'undefined') && (typeof sicmutils.special.factorial.falling_factorial !== 'undefined')){
} else {
/**
 * generic falling-factorial.
 * 
 * Returns the [falling
 *   factorial](https://en.wikipedia.org/wiki/Falling_and_rising_factorials), of
 *   `a` to the `b`, defined as the polynomial
 * 
 *   $$(a)_b = a^{\underline{b}} = a(a - 1)(a - 2) \cdots (a - b - 1)$$
 * 
 *   Given a negative `b`, `([[falling-factorial]] a b)` is equivalent
 *   to `(invert ([[rising-factorial]] (inc a) (- b)))`, or `##Inf` if the
 *   denominator evaluates to 0.
 * 
 *   The coefficients that appear in the expansions of [[falling-factorial]] called
 *   with a symbolic first argument and positive integral second argument are the
 *   Stirling numbers of the first kind (see [[stirling-first-kind]]).
 */
sicmutils.special.factorial.falling_factorial = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__82470 = cljs.core.get_global_hierarchy;
return (fexpr__82470.cljs$core$IFn$_invoke$arity$0 ? fexpr__82470.cljs$core$IFn$_invoke$arity$0() : fexpr__82470.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.special.factorial","falling-factorial"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.special.factorial.falling_factorial.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__82471 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"falling-factorial","falling-factorial",1649395235,null)], null);
return (fexpr__82471.cljs$core$IFn$_invoke$arity$1 ? fexpr__82471.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__82471.call(null,k__77664__auto__));
}));
/**
 * Alias for [[falling-factorial]].
 */
sicmutils.special.factorial.factorial_power = sicmutils.special.factorial.falling_factorial;
sicmutils.special.factorial.falling_factorial.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x,n){
if(sicmutils.value.native_integral_QMARK_(n)){
} else {
throw (new Error("Assert failed: (v/native-integral? n)"));
}

if((n === (0))){
return (1);
} else {
if((n < (0))){
var denom = (function (){var G__82473 = sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(x,(1));
var G__82474 = sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(n);
return (sicmutils.special.factorial.rising_factorial.cljs$core$IFn$_invoke$arity$2 ? sicmutils.special.factorial.rising_factorial.cljs$core$IFn$_invoke$arity$2(G__82473,G__82474) : sicmutils.special.factorial.rising_factorial.call(null,G__82473,G__82474));
})();
if(sicmutils.value.zero_QMARK_(denom)){
return Infinity;
} else {
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(denom);
}
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__82472_SHARP_){
return sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(x,sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(p1__82472_SHARP_));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(sicmutils.special.factorial.__GT_bigint)),sicmutils.generic._STAR_,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));

}
}
}));
sicmutils.special.factorial.falling_factorial.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146),new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),(function (x,n){
if((n === (0))){
return (1);
} else {
if((n < (0))){
var denom = (function (){var G__82476 = (x + (1));
var G__82477 = (- n);
return (sicmutils.special.factorial.rising_factorial.cljs$core$IFn$_invoke$arity$2 ? sicmutils.special.factorial.rising_factorial.cljs$core$IFn$_invoke$arity$2(G__82476,G__82477) : sicmutils.special.factorial.rising_factorial.call(null,G__82476,G__82477));
})();
if(sicmutils.value.zero_QMARK_(denom)){
return Infinity;
} else {
return sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),denom);
}
} else {
var elems = cljs.core.range.cljs$core$IFn$_invoke$arity$3(x,(x - n),(-1));
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(sicmutils.util.bigint),sicmutils.generic._STAR_,elems);

}
}
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.special !== 'undefined') && (typeof sicmutils.special.factorial !== 'undefined') && (typeof sicmutils.special.factorial.rising_factorial !== 'undefined')){
} else {
/**
 * generic rising-factorial.
 * 
 * Returns the [rising
 *   factorial](https://en.wikipedia.org/wiki/Falling_and_rising_factorials), of
 *   `a` to the `b`, defined as the polynomial
 * 
 *   $$(a)^b = a^{\overline{b}} = a(a + 1)(a + 2) \cdots (a + b - 1)$$
 * 
 *   Given a negative `b`, `([[rising-factorial]] a b)` is equivalent
 *   to `(invert ([[falling-factorial]] (dec a) (- b)))`, or `##Inf` if the
 *   denominator evaluates to 0.
 */
sicmutils.special.factorial.rising_factorial = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__82486 = cljs.core.get_global_hierarchy;
return (fexpr__82486.cljs$core$IFn$_invoke$arity$0 ? fexpr__82486.cljs$core$IFn$_invoke$arity$0() : fexpr__82486.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.special.factorial","rising-factorial"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.special.factorial.rising_factorial.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__82487 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"rising-factorial","rising-factorial",-1445656103,null)], null);
return (fexpr__82487.cljs$core$IFn$_invoke$arity$1 ? fexpr__82487.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__82487.call(null,k__77664__auto__));
}));
/**
 * Alias for [[falling-factorial]].
 */
sicmutils.special.factorial.pochhammer = sicmutils.special.factorial.rising_factorial;
sicmutils.special.factorial.rising_factorial.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x,n){
if(sicmutils.value.native_integral_QMARK_(n)){
} else {
throw (new Error("Assert failed: (v/native-integral? n)"));
}

if((n === (0))){
return (1);
} else {
if((n < (0))){
var denom = sicmutils.special.factorial.falling_factorial.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(x,(1)),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(n));
if(sicmutils.value.zero_QMARK_(denom)){
return Infinity;
} else {
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(denom);
}
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__82490_SHARP_){
return sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(x,p1__82490_SHARP_);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(sicmutils.special.factorial.__GT_bigint)),sicmutils.generic._STAR_,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));

}
}
}));
sicmutils.special.factorial.rising_factorial.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146),new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),(function (x,n){
if((n === (0))){
return (1);
} else {
if((n < (0))){
var denom = sicmutils.special.factorial.falling_factorial.cljs$core$IFn$_invoke$arity$2((x - (1)),(- n));
if(sicmutils.value.zero_QMARK_(denom)){
return Infinity;
} else {
return sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),denom);
}
} else {
var elems = cljs.core.range.cljs$core$IFn$_invoke$arity$2(x,(x + n));
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(sicmutils.util.bigint),sicmutils.generic._STAR_,elems);

}
}
}));
/**
 * Returns the product of the positive integers up to `n` that are congruent
 *   to `(mod n k)`.
 * 
 *   When `k` equals 1, equivalent to `([[factorial]] n)`.
 * 
 *   See the [Wikipedia page on generalizations
 *   of [[double-factorial]]](https://en.wikipedia.org/wiki/Double_factorial#Generalizations)
 *   for more detail.
 * 
 *   If you need to extend [[multi-factorial]] to negative `n` or `k`, that page
 *   has suggestions for generalization.
 */
sicmutils.special.factorial.multi_factorial = (function sicmutils$special$factorial$multi_factorial(n,k){
if(sicmutils.value.native_integral_QMARK_(n)){
} else {
throw (new Error("Assert failed: (v/native-integral? n)"));
}

if(sicmutils.value.native_integral_QMARK_(k)){
} else {
throw (new Error("Assert failed: (v/native-integral? k)"));
}

if((n >= (0))){
} else {
throw (new Error("Assert failed: (>= n 0)"));
}

if((k > (0))){
} else {
throw (new Error("Assert failed: (> k 0)"));
}

var elems = cljs.core.range.cljs$core$IFn$_invoke$arity$3(n,(0),(- k));
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(sicmutils.util.bigint),sicmutils.generic._STAR_,elems);
});
/**
 * Returns the product of all integers from 1 up to `n` that have the same
 *   parity (odd or even) as `n`.
 * 
 *   `([[double-factorial]] 0)` is defined as an empty product and equal to 1.
 * 
 *   [[double-factorial]] with argument `n` is equivalent to `([[multi-factorial]]
 *   n 2)`, but slightly more general in that it can handle negative values of
 *   `n`.
 * 
 *   If `n` is negative and even, returns `##Inf`.
 * 
 *   If `n` is negative and odd, returns `(/ (double-factorial (+ n 2)) (+ n 2))`.
 * 
 *   For justification, see the [Wikipedia page on the extension of double
 *   factorial to negative
 *   arguments](https://en.wikipedia.org/wiki/Double_factorial#Negative_arguments).
 */
sicmutils.special.factorial.double_factorial = (function sicmutils$special$factorial$double_factorial(n){
if(sicmutils.value.native_integral_QMARK_(n)){
} else {
throw (new Error("Assert failed: (v/native-integral? n)"));
}

if((n === (0))){
return (1);
} else {
if((n > (0))){
return sicmutils.special.factorial.multi_factorial(n,(2));
} else {
if(cljs.core.even_QMARK_(n)){
return Infinity;
} else {
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2((function (){var G__82495 = (n + (2));
return (sicmutils.special.factorial.double_factorial.cljs$core$IFn$_invoke$arity$1 ? sicmutils.special.factorial.double_factorial.cljs$core$IFn$_invoke$arity$1(G__82495) : sicmutils.special.factorial.double_factorial.call(null,G__82495));
})(),(n + (2)));

}
}
}
});
/**
 * Returns the number of permutations of `n` objects in which no object appears in
 *   its original position. (Each of these permutations is called
 *   a ['derangement'](https://en.wikipedia.org/wiki/Derangement) of the set.)
 * 
 *   ## References
 * 
 *   - [Subfactorial page at Wolfram Mathworld](https://mathworld.wolfram.com/Subfactorial.html)
 *   - John Cook, [Variations on Factorial](https://www.johndcook.com/blog/2010/09/21/variations-on-factorial/)
 *   - John Cook, [Subfactorial](https://www.johndcook.com/blog/2010/04/06/subfactorial/)
 *   - ['Derangement' on Wikipedia](https://en.wikipedia.org/wiki/Derangement)
 */
sicmutils.special.factorial.subfactorial = (function sicmutils$special$factorial$subfactorial(n){
if((n === (0))){
return (1);
} else {
var nf_div_e = sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.special.factorial.factorial(n),Math.E);
return sicmutils.generic.floor.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(0.5,nf_div_e));
}
});
var mul_82560 = sicmutils.generic._STAR_;
var div_82561 = sicmutils.generic._SLASH_;
/**
 * Returns the [binomial
 *   coefficient](https://en.wikipedia.org/wiki/Binomial_coefficient), ie, the
 *   coefficient of the $x^k$ term in the polynomial expansion of the binomial
 *   power $(1 + x)^n$.
 * 
 *   This quantity is sometimes pronounced "n choose k".
 * 
 *   For negative `n` or `k`, [[binomial-coefficient]] matches the behavior
 *   provided by Mathematica, described at [this
 *   page](https://mathworld.wolfram.com/BinomialCoefficient.html). Given negative
 *   `n`, returns
 * 
 *   ```clj
 *   ;; for k >= 0
 *   (* (expt -1 k)
 *   (binomial-coefficient (+ (- n) k -1) k))
 * 
 *   ;; for k >= 0
 *   (* (expt -1 (- n k))
 *   (binomial-coefficient (+ (- k) -1) (- n k)))
 * 
 *   ;; otherwise:
 *   0
 *   ```
 */
sicmutils.special.factorial.binomial_coefficient = (function sicmutils$special$factorial$binomial_coefficient(n,k){
if(sicmutils.value.native_integral_QMARK_(n)){
} else {
throw (new Error("Assert failed: (v/native-integral? n)"));
}

if(sicmutils.value.native_integral_QMARK_(k)){
} else {
throw (new Error("Assert failed: (v/native-integral? k)"));
}

if((k === (0))){
return (1);
} else {
if((n < (0))){
if((k > (0))){
var G__82496 = ((cljs.core.even_QMARK_(k))?(1):(-1));
var G__82497 = (function (){var G__82498 = (((- n) + k) + (-1));
var G__82499 = k;
return (sicmutils.special.factorial.binomial_coefficient.cljs$core$IFn$_invoke$arity$2 ? sicmutils.special.factorial.binomial_coefficient.cljs$core$IFn$_invoke$arity$2(G__82498,G__82499) : sicmutils.special.factorial.binomial_coefficient.call(null,G__82498,G__82499));
})();
return (mul_82560.cljs$core$IFn$_invoke$arity$2 ? mul_82560.cljs$core$IFn$_invoke$arity$2(G__82496,G__82497) : mul_82560.call(null,G__82496,G__82497));
} else {
if((k <= n)){
var n_k = (n - k);
var G__82500 = ((cljs.core.even_QMARK_(n_k))?(1):(-1));
var G__82501 = (function (){var G__82502 = ((- k) - (1));
var G__82503 = n_k;
return (sicmutils.special.factorial.binomial_coefficient.cljs$core$IFn$_invoke$arity$2 ? sicmutils.special.factorial.binomial_coefficient.cljs$core$IFn$_invoke$arity$2(G__82502,G__82503) : sicmutils.special.factorial.binomial_coefficient.call(null,G__82502,G__82503));
})();
return (mul_82560.cljs$core$IFn$_invoke$arity$2 ? mul_82560.cljs$core$IFn$_invoke$arity$2(G__82500,G__82501) : mul_82560.call(null,G__82500,G__82501));
} else {
return (0);

}
}
} else {
if((k < (0))){
return (0);
} else {
if((k > n)){
return (0);
} else {
var k__$1 = (function (){var x__4339__auto__ = k;
var y__4340__auto__ = (n - k);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var G__82504 = sicmutils.special.factorial.falling_factorial.cljs$core$IFn$_invoke$arity$2(n,k__$1);
var G__82505 = sicmutils.special.factorial.factorial(k__$1);
return (div_82561.cljs$core$IFn$_invoke$arity$2 ? div_82561.cljs$core$IFn$_invoke$arity$2(G__82504,G__82505) : div_82561.call(null,G__82504,G__82505));

}
}
}
}
});
var add_82563 = sicmutils.generic._PLUS_;
var mul_82564 = sicmutils.generic._STAR_;
/**
 * Given `n` and `k`, returns the number of permutations of `n` elements which
 *   contain exactly `k` [permutation
 *   cycles](https://mathworld.wolfram.com/PermutationCycle.html). This is called
 *   the [Stirling number s(n, k) of the first
 *   kind](https://en.wikipedia.org/wiki/Stirling_numbers_of_the_first_kind).
 * 
 *   By default, returns the [signed Stirling number of the first
 *   kind](https://en.wikipedia.org/wiki/Stirling_numbers_of_the_first_kind#Signs).
 *   Pass the `:unsigned? true` keyword option to retrieve the signed Stirling
 *   number. (Or take the absolute value of the result...)
 * 
 *   ```clj
 *   (stirling-first-kind 13 2)
 *   ;;=> -1486442880
 * 
 *   (stirling-first-kind 13 2 :unsigned? true)
 *   ;;=> 1486442880
 *   ```
 */
sicmutils.special.factorial.stirling_first_kind = (function sicmutils$special$factorial$stirling_first_kind(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82565 = arguments.length;
var i__4865__auto___82566 = (0);
while(true){
if((i__4865__auto___82566 < len__4864__auto___82565)){
args__4870__auto__.push((arguments[i__4865__auto___82566]));

var G__82567 = (i__4865__auto___82566 + (1));
i__4865__auto___82566 = G__82567;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sicmutils.special.factorial.stirling_first_kind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sicmutils.special.factorial.stirling_first_kind.cljs$core$IFn$_invoke$arity$variadic = (function (n,k,p__82511){
var map__82512 = p__82511;
var map__82512__$1 = cljs.core.__destructure_map(map__82512);
var unsigned_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82512__$1,new cljs.core.Keyword(null,"unsigned?","unsigned?",-502764154));
if(sicmutils.value.native_integral_QMARK_(n)){
} else {
throw (new Error("Assert failed: (v/native-integral? n)"));
}

if(sicmutils.value.native_integral_QMARK_(k)){
} else {
throw (new Error("Assert failed: (v/native-integral? k)"));
}

if(((0) <= k)){
} else {
throw (new Error("Assert failed: (<= 0 k)"));
}

if(((0) <= n)){
} else {
throw (new Error("Assert failed: (<= 0 n)"));
}

var rec = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var rec_STAR_ = (function (n__$1,k__$1){
if((n__$1 === (0))){
if((k__$1 === (0))){
return (1);
} else {
return (0);
}
} else {
var n_1 = (n__$1 - (1));
var factor = (cljs.core.truth_(unsigned_QMARK_)?n_1:(- n_1));
if((factor === (0))){
var G__82516 = n_1;
var G__82517 = (k__$1 - (1));
var fexpr__82515 = cljs.core.deref(rec);
return (fexpr__82515.cljs$core$IFn$_invoke$arity$2 ? fexpr__82515.cljs$core$IFn$_invoke$arity$2(G__82516,G__82517) : fexpr__82515.call(null,G__82516,G__82517));
} else {
var G__82519 = (function (){var G__82523 = n_1;
var G__82524 = (k__$1 - (1));
var fexpr__82522 = cljs.core.deref(rec);
return (fexpr__82522.cljs$core$IFn$_invoke$arity$2 ? fexpr__82522.cljs$core$IFn$_invoke$arity$2(G__82523,G__82524) : fexpr__82522.call(null,G__82523,G__82524));
})();
var G__82520 = (function (){var G__82525 = factor;
var G__82526 = sicmutils.util.bigint((function (){var fexpr__82527 = cljs.core.deref(rec);
return (fexpr__82527.cljs$core$IFn$_invoke$arity$2 ? fexpr__82527.cljs$core$IFn$_invoke$arity$2(n_1,k__$1) : fexpr__82527.call(null,n_1,k__$1));
})());
return (mul_82564.cljs$core$IFn$_invoke$arity$2 ? mul_82564.cljs$core$IFn$_invoke$arity$2(G__82525,G__82526) : mul_82564.call(null,G__82525,G__82526));
})();
return (add_82563.cljs$core$IFn$_invoke$arity$2 ? add_82563.cljs$core$IFn$_invoke$arity$2(G__82519,G__82520) : add_82563.call(null,G__82519,G__82520));
}
}
});
cljs.core.reset_BANG_(rec,cljs.core.memoize(rec_STAR_));

if((k === (0))){
if((n === (0))){
return (1);
} else {
return (0);
}
} else {
if((k > n)){
return (0);
} else {
var fexpr__82529 = cljs.core.deref(rec);
return (fexpr__82529.cljs$core$IFn$_invoke$arity$2 ? fexpr__82529.cljs$core$IFn$_invoke$arity$2(n,k) : fexpr__82529.call(null,n,k));

}
}
}));

(sicmutils.special.factorial.stirling_first_kind.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sicmutils.special.factorial.stirling_first_kind.cljs$lang$applyTo = (function (seq82507){
var G__82508 = cljs.core.first(seq82507);
var seq82507__$1 = cljs.core.next(seq82507);
var G__82509 = cljs.core.first(seq82507__$1);
var seq82507__$2 = cljs.core.next(seq82507__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82508,G__82509,seq82507__$2);
}));


/**
 * Returns $S(n,k)$, the number of ways to partition a set of `n` objects into `k`
 *   non-empty subsets.
 * 
 *   This is called a [Stirling number of the second
 *   kind](https://en.wikipedia.org/wiki/Stirling_numbers_of_the_second_kind).
 */
sicmutils.special.factorial.stirling_second_kind = (function sicmutils$special$factorial$stirling_second_kind(n,k){
if(sicmutils.value.native_integral_QMARK_(n)){
} else {
throw (new Error("Assert failed: (v/native-integral? n)"));
}

if(sicmutils.value.native_integral_QMARK_(k)){
} else {
throw (new Error("Assert failed: (v/native-integral? k)"));
}

if(((0) <= k)){
} else {
throw (new Error("Assert failed: (<= 0 k)"));
}

if(((0) <= n)){
} else {
throw (new Error("Assert failed: (<= 0 n)"));
}

var rec = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var rec_STAR_ = (function (n__$1,k__$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k__$1,(1))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,k__$1)){
return (1);
} else {
var n_1 = (n__$1 - (1));
var G__82530 = (function (){var G__82532 = k__$1;
var G__82533 = sicmutils.util.bigint((function (){var fexpr__82534 = cljs.core.deref(rec);
return (fexpr__82534.cljs$core$IFn$_invoke$arity$2 ? fexpr__82534.cljs$core$IFn$_invoke$arity$2(n_1,k__$1) : fexpr__82534.call(null,n_1,k__$1));
})());
return (mul_82564.cljs$core$IFn$_invoke$arity$2 ? mul_82564.cljs$core$IFn$_invoke$arity$2(G__82532,G__82533) : mul_82564.call(null,G__82532,G__82533));
})();
var G__82531 = (function (){var G__82536 = n_1;
var G__82537 = (k__$1 - (1));
var fexpr__82535 = cljs.core.deref(rec);
return (fexpr__82535.cljs$core$IFn$_invoke$arity$2 ? fexpr__82535.cljs$core$IFn$_invoke$arity$2(G__82536,G__82537) : fexpr__82535.call(null,G__82536,G__82537));
})();
return (add_82563.cljs$core$IFn$_invoke$arity$2 ? add_82563.cljs$core$IFn$_invoke$arity$2(G__82530,G__82531) : add_82563.call(null,G__82530,G__82531));

}
}
});
cljs.core.reset_BANG_(rec,cljs.core.memoize(rec_STAR_));

if((k === (0))){
if((n === (0))){
return (1);
} else {
return (0);
}
} else {
if((k > n)){
return (0);
} else {
var fexpr__82539 = cljs.core.deref(rec);
return (fexpr__82539.cljs$core$IFn$_invoke$arity$2 ? fexpr__82539.cljs$core$IFn$_invoke$arity$2(n,k) : fexpr__82539.call(null,n,k));

}
}
});

/**
 * Returns the `n`th [Bell number](https://en.wikipedia.org/wiki/Bell_number), ie,
 *   the number of ways a set of `n` elements can be partitioned into nonempty
 *   subsets.
 * 
 *   The `n`th Bell number is denoted $B_n$.
 */
sicmutils.special.factorial.bell = (function sicmutils$special$factorial$bell(n){
if((n >= (0))){
} else {
throw (new Error("Assert failed: (>= n 0)"));
}

var xform = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__82506_SHARP_){
return sicmutils.special.factorial.stirling_second_kind(n,p1__82506_SHARP_);
}));
var ks = cljs.core.range.cljs$core$IFn$_invoke$arity$1((n + (1)));
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,add_82563,ks);
});

//# sourceMappingURL=sicmutils.special.factorial.js.map
