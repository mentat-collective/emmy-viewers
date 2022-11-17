goog.provide('sicmutils.simplify.rules');
/**
 * If true, allows the following simplification to proceed:
 * 
 * ```clojure
 * (log (exp x)) => x.
 * ```
 * 
 * Because `exp(i*x) == exp(i*(x+n*2pi))` for all integral `n`, this setting can
 * confuse `x` with `x+n*2pi`.
 */
sicmutils.simplify.rules._STAR_log_exp_simplify_QMARK__STAR_ = true;
/**
 * Allows `(x^a)^b => x^(a*b)`.
 * 
 * This is dangerous, because can lose or gain a root:
 * 
 * ```
 * x = (x^(1/2))^2 != ((x^2)^1/2)=+-x
 * ```
 */
sicmutils.simplify.rules._STAR_exponent_product_simplify_QMARK__STAR_ = true;
/**
 *  Traditionally, `sqrt(x)` is the positive square root, but
 * `x^(1/2)` is both positive and negative roots.
 * 
 * Setting [[*expt-half->sqrt?*]] to `true` maps `x^(1/2)` to `sqrt(x)`,
 * potentially losing a root.
 */
sicmutils.simplify.rules._STAR_expt_half__GT_sqrt_QMARK__STAR_ = true;
/**
 * If x is real, then `(sqrt (square x)) = (abs x)`.
 * 
 *   Setting [[*sqrt-expt-simplify?*]] to `true` allows `(sqrt (square x)) = x`,
 *   potentially causing a problem if `x` is in fact negative.
 */
sicmutils.simplify.rules._STAR_sqrt_expt_simplify_QMARK__STAR_ = true;
/**
 * If `x` and `y` are real and non-negative, then
 * 
 * ```
 * (* (sqrt x) (sqrt y)) = (sqrt (* x y))
 * ```
 * 
 * This is not true for negative factors. Setting [[*sqrt-factor-simplify?*]] to
 * true enables this simplification, causing a problem if `x` or `y` are in fact
 * negative.
 */
sicmutils.simplify.rules._STAR_sqrt_factor_simplify_QMARK__STAR_ = true;
/**
 * When `true`, allows:
 * 
 * ```
 * (atan y x) => (atan (/ y d) (/ x d))
 * ```
 * 
 * where `d=(gcd x y)`.
 * 
 * This is fine if `d` is a number (Numeric `gcd` is always positive), but may lose
 * quadrant information if `d` is a symbolic expression that can be negative for
 * some values of its variables.
 */
sicmutils.simplify.rules._STAR_aggressive_atan_simplify_QMARK__STAR_ = true;
/**
 * When `true`, allows trigonometric inverse functions to simplify:
 * 
 * ```
 * (asin (sin x)) => x
 * ```
 * 
 * Because trigonometric functions like `sin` and `cos` are cyclic, this can lose
 * multi-value info (as with [[*log-exp-simplify*]]).
 */
sicmutils.simplify.rules._STAR_inverse_simplify_QMARK__STAR_ = true;
/**
 * When `true`, allows arguments of `sin`, `cos` and `tan` that are
 *   rational multiples of `'pi` to be reduced. See [[trig:special]] for these
 *   rules.
 */
sicmutils.simplify.rules._STAR_sin_cos_simplify_QMARK__STAR_ = true;
/**
 * When `true`, enables the half-angle reductions described in [[half-angle]].
 * 
 * Note from GJS: 'Sign of result is hairy!'
 */
sicmutils.simplify.rules._STAR_half_angle_simplify_QMARK__STAR_ = true;
/**
 * When true, allows commutation of partial derivatives so that partial derivatives appear in order.
 * 
 * For example:
 * 
 * ```clojure
 * (((* (partial 2 1) (partial 1 1)) FF) (up t (up x y) (down p_x p_y)))
 * ```
 * 
 * Since the partial indices in the outer derivative are lexically greater than
 * those of the inner, we canonicalize by swapping the order:
 * 
 * ```clojure
 * (((* (partial 1 1) (partial 2 1)) FF) (up t (up x y) (down p_x p_y)))
 * ```
 * 
 * When the components selected by the partials are unstructured (e.g. real), this
 * is okay due to the 'equality of mixed partials'.
 */
sicmutils.simplify.rules._STAR_commute_partials_QMARK__STAR_ = true;
/**
 * When `true`, allows division through the numerator by numbers in
 *     the denominator:
 * 
 * ```
 * (/ (+ (* 4 x) 5) 3) => (+ (* 4/3 x) 5/3)
 * ```
 * 
 * This setting is `true` by default.
 */
sicmutils.simplify.rules._STAR_divide_numbers_through_simplify_QMARK__STAR_ = true;
/**
 * Transforms products of trig functions into functions of sums of
 *     angles.
 * 
 * For example:
 * 
 * ```
 * (* (sin x) (cos y))
 * ;;=>
 *  (+ (* 1/2 (sin (+ x y)))
 *  (* 1/2 (sin (+ x (* -1 y)))) )
 * ```
 */
sicmutils.simplify.rules._STAR_trig_product_to_sum_simplify_QMARK__STAR_ = false;
sicmutils.simplify.rules.negative_number_QMARK_ = (function sicmutils$simplify$rules$negative_number_QMARK_(x){
var and__4251__auto__ = sicmutils.value.number_QMARK_(x);
if(and__4251__auto__){
return sicmutils.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(x);
} else {
return and__4251__auto__;
}
});
/**
 * Returns true if `z` is a complex number with nonzero imaginary part and zero
 *   real part, false otherwise.
 */
sicmutils.simplify.rules.imaginary_number_QMARK_ = (function sicmutils$simplify$rules$imaginary_number_QMARK_(z){
return ((sicmutils.complex.complex_QMARK_(z)) && ((((!(sicmutils.value.zero_QMARK_(z)))) && (sicmutils.value.zero_QMARK_(sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1(z))))));
});
/**
 * Returns true if `z` is a complex number with nonzero real AND imaginary parts,
 *   false otherwise.
 */
sicmutils.simplify.rules.complex_number_QMARK_ = (function sicmutils$simplify$rules$complex_number_QMARK_(z){
return ((sicmutils.complex.complex_QMARK_(z)) && ((((!(sicmutils.value.zero_QMARK_(sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1(z))))) && ((!(sicmutils.value.zero_QMARK_(sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1(z))))))));
});
/**
 * Returns true if `z` is an imaginary number with an integral (or VERY close to
 *   integral) imaginary part, false otherwise.
 */
sicmutils.simplify.rules.imaginary_integer_QMARK_ = (function sicmutils$simplify$rules$imaginary_integer_QMARK_(z){
return ((sicmutils.simplify.rules.imaginary_number_QMARK_(z)) && (sicmutils.value.almost_integral_QMARK_(sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1(z))));
});
sicmutils.simplify.rules.not_integral_QMARK_ = (function sicmutils$simplify$rules$not_integral_QMARK_(x){
return (!(sicmutils.value.integral_QMARK_(x)));
});
sicmutils.simplify.rules.even_QMARK_ = (function sicmutils$simplify$rules$even_QMARK_(x){
return sicmutils.value.zero_QMARK_(sicmutils.generic.modulo.cljs$core$IFn$_invoke$arity$2(x,(2)));
});
sicmutils.simplify.rules.odd_QMARK_ = (function sicmutils$simplify$rules$odd_QMARK_(x){
return sicmutils.value.one_QMARK_(sicmutils.generic.modulo.cljs$core$IFn$_invoke$arity$2(x,(2)));
});
sicmutils.simplify.rules.even_integer_QMARK_ = (function sicmutils$simplify$rules$even_integer_QMARK_(x){
return ((sicmutils.value.integral_QMARK_(x)) && (sicmutils.simplify.rules.even_QMARK_(x)));
});
sicmutils.simplify.rules.odd_integer_QMARK_ = (function sicmutils$simplify$rules$odd_integer_QMARK_(x){
return ((sicmutils.value.integral_QMARK_(x)) && (sicmutils.simplify.rules.odd_QMARK_(x)));
});
sicmutils.simplify.rules.odd_positive_integer_QMARK_ = (function sicmutils$simplify$rules$odd_positive_integer_QMARK_(x){
return ((sicmutils.simplify.rules.odd_integer_QMARK_(x)) && ((x > (2))));
});
sicmutils.simplify.rules.more_than_two_QMARK_ = (function sicmutils$simplify$rules$more_than_two_QMARK_(x){
return ((sicmutils.value.number_QMARK_(x)) && ((x > (2))));
});
sicmutils.simplify.rules.at_least_two_QMARK_ = (function sicmutils$simplify$rules$at_least_two_QMARK_(x){
return ((sicmutils.value.number_QMARK_(x)) && ((x >= (2))));
});
/**
 * Takes a sequence `ops` of operator symbols like `'+`, `'*` and returns a rule
 *   that strips these operations off of unary applications.
 * 
 *   ```clojure
 *   (let [rule (unary-elimination '+ '*)
 *      f    (rule-simplifier rule)]
 *  (f '(+ x y (* z) (+ a))))
 *   ;;=> (+ x y z a)
 *   ```
 */
sicmutils.simplify.rules.unary_elimination = (function sicmutils$simplify$rules$unary_elimination(var_args){
var args__4870__auto__ = [];
var len__4864__auto___99606 = arguments.length;
var i__4865__auto___99607 = (0);
while(true){
if((i__4865__auto___99607 < len__4864__auto___99606)){
args__4870__auto__.push((arguments[i__4865__auto___99607]));

var G__99608 = (i__4865__auto___99607 + (1));
i__4865__auto___99607 = G__99608;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sicmutils.simplify.rules.unary_elimination.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sicmutils.simplify.rules.unary_elimination.cljs$core$IFn$_invoke$arity$variadic = (function (ops){
var op_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,ops);
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,op_set,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98426){
var r__20948__auto__ = (function (){var fexpr__98432 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98432.cljs$core$IFn$_invoke$arity$1 ? fexpr__98432.cljs$core$IFn$_invoke$arity$1(G__98426) : fexpr__98432.call(null,G__98426));
})();
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0));
}));

(sicmutils.simplify.rules.unary_elimination.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.simplify.rules.unary_elimination.cljs$lang$applyTo = (function (seq98389){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq98389));
}));

/**
 * Takes an operator symbol `op` and an identity element `constant` and returns a
 *   rule that eliminates instances of `constant` inside any-arity forms like
 * 
 *   ```clojure
 *   (<op> ,,,args,,,)
 *   ```
 */
sicmutils.simplify.rules.constant_elimination = (function sicmutils$simplify$rules$constant_elimination(op,constant){
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,op,(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98460){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [op], null),(function (p__98466){
var map__98467 = p__98466;
var map__98467__$1 = cljs.core.__destructure_map(map__98467);
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98467__$1,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([constant]),xs);
})(G__98460)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0));
});
/**
 * Takes an operator symbol `op` and an identity element `constant` and returns a
 *   rule that turns binary forms with `constant` on either side into `constant`.
 * 
 *   This rule is useful for commutative annihilators like:
 * 
 *   ```clojure
 *   (* 0 <anything>) => 0
 *   (and false <anything>) => false
 *   (or true <anything>) => true
 *   ```
 */
sicmutils.simplify.rules.constant_promotion = (function sicmutils$simplify$rules$constant_promotion(op,constant){
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,op,(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,constant,null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98475){
var r__20948__auto__ = constant;
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,op,(new cljs.core.List(null,constant,(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98476){
var r__20948__auto__ = constant;
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0));
});
/**
 * Takes any number of operator symbols `ops` like `'+`, `'*` and returns a rule
 *   that collapses nested applications of each operation into a single
 *   sequence. (The associative property lets us strip parentheses.)
 * 
 *   ```clojure
 *   (let [rule (associative '+ '*)
 *      f    (rule-simplifier rule)]
 *  (= (+ x y z a (* b c d) cake face)
 *     (f '(+ x (+ y (+ z a) (* b (* c d))
 *                 (+ cake face))))))
 *   ```
 */
sicmutils.simplify.rules.associative = (function sicmutils$simplify$rules$associative(var_args){
var args__4870__auto__ = [];
var len__4864__auto___99609 = arguments.length;
var i__4865__auto___99610 = (0);
while(true){
if((i__4865__auto___99610 < len__4864__auto___99609)){
args__4870__auto__.push((arguments[i__4865__auto___99610]));

var G__99611 = (i__4865__auto___99610 + (1));
i__4865__auto___99610 = G__99611;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sicmutils.simplify.rules.associative.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sicmutils.simplify.rules.associative.cljs$core$IFn$_invoke$arity$variadic = (function (ops){
var op_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,ops);
var flatten = (function (op){
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,op,(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98481){
var r__20948__auto__ = cljs.core.vec((function (){var fexpr__98482 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__98482.cljs$core$IFn$_invoke$arity$1 ? fexpr__98482.cljs$core$IFn$_invoke$arity$1(G__98481) : fexpr__98482.call(null,G__98481));
})());
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"?x","?x",-555096650,null),pattern.rule._EQ__GT_),(function (G__98483){
var r__20948__auto__ = cljs.core.vec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__98484 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98484.cljs$core$IFn$_invoke$arity$1 ? fexpr__98484.cljs$core$IFn$_invoke$arity$1(G__98483) : fexpr__98484.call(null,G__98483));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0));
});
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,op_set,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),pattern.rule._EQ__GT_),(function (G__98485){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__98486 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__98486.cljs$core$IFn$_invoke$arity$1 ? fexpr__98486.cljs$core$IFn$_invoke$arity$1(G__98485) : fexpr__98486.call(null,G__98485));
})()], null),(function (){var fexpr__98487 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__98487.cljs$core$IFn$_invoke$arity$1 ? fexpr__98487.cljs$core$IFn$_invoke$arity$1(G__98485) : fexpr__98487.call(null,G__98485));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__98488){
var map__98489 = p__98488;
var map__98489__$1 = cljs.core.__destructure_map(map__98489);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98489__$1,new cljs.core.Symbol(null,"?op","?op",-135731883,null));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98489__$1,new cljs.core.Symbol(null,"??b","??b",254504576,null));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98489__$1,new cljs.core.Symbol(null,"??c","??c",1219586074,null));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(flatten(op),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.concat.cljs$core$IFn$_invoke$arity$2(b,c)], 0));
})(G__98485)], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0));
}));

(sicmutils.simplify.rules.associative.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.simplify.rules.associative.cljs$lang$applyTo = (function (seq98480){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq98480));
}));

/**
 * Takes any number of operator symbols `ops` like `'+`, `'*` and returns a rule
 *   that sorts the argument list of any multiple-arity call to any of the supplied
 *   operators. Sorting is accomplished with [[sicmutils.expression/sort]].
 * 
 *   For example:
 * 
 *   ```clojure
 *   (let [rule (commutative '* '+)]
 *  (= '(* 2 3 a b c (+ c a b))
 *     (rule '(* c a b (+ c a b) 3 2))))
 *   ```
 */
sicmutils.simplify.rules.commutative = (function sicmutils$simplify$rules$commutative(var_args){
var args__4870__auto__ = [];
var len__4864__auto___99613 = arguments.length;
var i__4865__auto___99614 = (0);
while(true){
if((i__4865__auto___99614 < len__4864__auto___99613)){
args__4870__auto__.push((arguments[i__4865__auto___99614]));

var G__99615 = (i__4865__auto___99614 + (1));
i__4865__auto___99614 = G__99615;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sicmutils.simplify.rules.commutative.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sicmutils.simplify.rules.commutative.cljs$core$IFn$_invoke$arity$variadic = (function (ops){
var op_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,ops);
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,op_set,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98494){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__98495 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__98495.cljs$core$IFn$_invoke$arity$1 ? fexpr__98495.cljs$core$IFn$_invoke$arity$1(G__98494) : fexpr__98495.call(null,G__98494));
})()], null),(function (p1__98492_SHARP_){
return sicmutils.expression.sort((function (){var G__98496 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (p1__98492_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__98492_SHARP_.cljs$core$IFn$_invoke$arity$1(G__98496) : p1__98492_SHARP_.call(null,G__98496));
})());
})(G__98494)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0));
}));

(sicmutils.simplify.rules.commutative.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.simplify.rules.commutative.cljs$lang$applyTo = (function (seq98493){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq98493));
}));

/**
 * Returns a simplifier that will remove consecutive duplicate arguments to any
 *   of the operations supplied as `ops`. Acts as identity otherwise.
 * 
 *   ```clojure
 *   (let [rule (idempotent 'and)]
 *  (= '(and a b c d)
 *     (rule '(and a b b c c c d))))
 *   ```
 */
sicmutils.simplify.rules.idempotent = (function sicmutils$simplify$rules$idempotent(var_args){
var args__4870__auto__ = [];
var len__4864__auto___99616 = arguments.length;
var i__4865__auto___99617 = (0);
while(true){
if((i__4865__auto___99617 < len__4864__auto___99616)){
args__4870__auto__.push((arguments[i__4865__auto___99617]));

var G__99618 = (i__4865__auto___99617 + (1));
i__4865__auto___99617 = G__99618;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sicmutils.simplify.rules.idempotent.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sicmutils.simplify.rules.idempotent.cljs$core$IFn$_invoke$arity$variadic = (function (ops){
var op_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,ops);
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,op_set,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??post","??post",1092296697,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),pattern.rule._EQ__GT_),(function (G__98499){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__98500 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__98500.cljs$core$IFn$_invoke$arity$1 ? fexpr__98500.cljs$core$IFn$_invoke$arity$1(G__98499) : fexpr__98500.call(null,G__98499));
})()], null),(function (m){
return cljs.core.dedupe.cljs$core$IFn$_invoke$arity$1((function (){var G__98502 = m;
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__98503 = new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null);
return (fexpr__98503.cljs$core$IFn$_invoke$arity$1 ? fexpr__98503.cljs$core$IFn$_invoke$arity$1(G__98502) : fexpr__98503.call(null,G__98502));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__98504 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98504.cljs$core$IFn$_invoke$arity$1 ? fexpr__98504.cljs$core$IFn$_invoke$arity$1(G__98502) : fexpr__98504.call(null,G__98502));
})()], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98505 = new cljs.core.Symbol(null,"??post","??post",1092296697,null);
return (fexpr__98505.cljs$core$IFn$_invoke$arity$1 ? fexpr__98505.cljs$core$IFn$_invoke$arity$1(G__98502) : fexpr__98505.call(null,G__98502));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})());
})(G__98499)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0));
}));

(sicmutils.simplify.rules.idempotent.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.simplify.rules.idempotent.cljs$lang$applyTo = (function (seq98497){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq98497));
}));

/**
 * Set of rules that collect adjacent products, exponents and nested
 *  exponents into exponent terms.
 */
sicmutils.simplify.rules.exponent_contract = pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98511){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98512 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__98512.cljs$core$IFn$_invoke$arity$1 ? fexpr__98512.cljs$core$IFn$_invoke$arity$1(G__98511) : fexpr__98512.call(null,G__98511));
})(),(function (p1__98506_SHARP_){
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__98513 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__98506_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__98506_SHARP_.cljs$core$IFn$_invoke$arity$1(G__98513) : p1__98506_SHARP_.call(null,G__98513));
})(),(function (){var G__98514 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (p1__98506_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__98506_SHARP_.cljs$core$IFn$_invoke$arity$1(G__98514) : p1__98506_SHARP_.call(null,G__98514));
})());
})(G__98511)], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??post","??post",1092296697,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),pattern.rule._EQ__GT_),(function (G__98516){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98517 = new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null);
return (fexpr__98517.cljs$core$IFn$_invoke$arity$1 ? fexpr__98517.cljs$core$IFn$_invoke$arity$1(G__98516) : fexpr__98517.call(null,G__98516));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98518 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__98518.cljs$core$IFn$_invoke$arity$1 ? fexpr__98518.cljs$core$IFn$_invoke$arity$1(G__98516) : fexpr__98518.call(null,G__98516));
})(),(function (p1__98507_SHARP_){
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__98519 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__98507_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__98507_SHARP_.cljs$core$IFn$_invoke$arity$1(G__98519) : p1__98507_SHARP_.call(null,G__98519));
})(),(function (){var G__98520 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (p1__98507_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__98507_SHARP_.cljs$core$IFn$_invoke$arity$1(G__98520) : p1__98507_SHARP_.call(null,G__98520));
})());
})(G__98516)], null))], null),(function (){var fexpr__98521 = new cljs.core.Symbol(null,"??post","??post",1092296697,null);
return (fexpr__98521.cljs$core$IFn$_invoke$arity$1 ? fexpr__98521.cljs$core$IFn$_invoke$arity$1(G__98516) : fexpr__98521.call(null,G__98516));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??post","??post",1092296697,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),pattern.rule._EQ__GT_),(function (G__98522){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98523 = new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null);
return (fexpr__98523.cljs$core$IFn$_invoke$arity$1 ? fexpr__98523.cljs$core$IFn$_invoke$arity$1(G__98522) : fexpr__98523.call(null,G__98522));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98524 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__98524.cljs$core$IFn$_invoke$arity$1 ? fexpr__98524.cljs$core$IFn$_invoke$arity$1(G__98522) : fexpr__98524.call(null,G__98522));
})(),(function (p1__98509_SHARP_){
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__98525 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__98509_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__98509_SHARP_.cljs$core$IFn$_invoke$arity$1(G__98525) : p1__98509_SHARP_.call(null,G__98525));
})(),(1));
})(G__98522)], null))], null),(function (){var fexpr__98526 = new cljs.core.Symbol(null,"??post","??post",1092296697,null);
return (fexpr__98526.cljs$core$IFn$_invoke$arity$1 ? fexpr__98526.cljs$core$IFn$_invoke$arity$1(G__98522) : fexpr__98526.call(null,G__98522));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??post","??post",1092296697,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),pattern.rule._EQ__GT_),(function (G__98527){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98528 = new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null);
return (fexpr__98528.cljs$core$IFn$_invoke$arity$1 ? fexpr__98528.cljs$core$IFn$_invoke$arity$1(G__98527) : fexpr__98528.call(null,G__98527));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98529 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__98529.cljs$core$IFn$_invoke$arity$1 ? fexpr__98529.cljs$core$IFn$_invoke$arity$1(G__98527) : fexpr__98529.call(null,G__98527));
})(),(function (p1__98510_SHARP_){
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__98530 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__98510_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__98510_SHARP_.cljs$core$IFn$_invoke$arity$1(G__98530) : p1__98510_SHARP_.call(null,G__98530));
})(),(1));
})(G__98527)], null))], null),(function (){var fexpr__98532 = new cljs.core.Symbol(null,"??post","??post",1092296697,null);
return (fexpr__98532.cljs$core$IFn$_invoke$arity$1 ? fexpr__98532.cljs$core$IFn$_invoke$arity$1(G__98527) : fexpr__98532.call(null,G__98527));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??post","??post",1092296697,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),pattern.rule._EQ__GT_),(function (G__98533){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98534 = new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null);
return (fexpr__98534.cljs$core$IFn$_invoke$arity$1 ? fexpr__98534.cljs$core$IFn$_invoke$arity$1(G__98533) : fexpr__98534.call(null,G__98533));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98535 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__98535.cljs$core$IFn$_invoke$arity$1 ? fexpr__98535.cljs$core$IFn$_invoke$arity$1(G__98533) : fexpr__98535.call(null,G__98533));
})(),(2)], null))], null),(function (){var fexpr__98536 = new cljs.core.Symbol(null,"??post","??post",1092296697,null);
return (fexpr__98536.cljs$core$IFn$_invoke$arity$1 ? fexpr__98536.cljs$core$IFn$_invoke$arity$1(G__98533) : fexpr__98536.call(null,G__98533));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0));
/**
 * Returns a rule simplifier that attempts to simplify nested exp and log forms.
 * 
 *   You can tune the behavior of this simplifier with [[*log-exp-simplify?*]]
 *   and [[*sqrt-expt-simplify?*]].
 * 
 *   NOTE: [[logexp]] returns a `rule-simplifier`, which memoizes its traversal
 *   through the supplied expression. This means that if you try to
 *   customize [[logexp]] with dynamic binding variables AFTER passing an
 *   expression into it, you may get a memoized result which used the previous
 *   dynamic binding.
 * 
 *   This is a problem we should address!
 */
sicmutils.simplify.rules.logexp = (function sicmutils$simplify$rules$logexp(simplify){
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98541){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98542 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98542.cljs$core$IFn$_invoke$arity$1 ? fexpr__98542.cljs$core$IFn$_invoke$arity$1(G__98541) : fexpr__98542.call(null,G__98541));
})(),(function (){var fexpr__98543 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__98543.cljs$core$IFn$_invoke$arity$1 ? fexpr__98543.cljs$core$IFn$_invoke$arity$1(G__98541) : fexpr__98543.call(null,G__98541));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98544){
var r__20948__auto__ = (function (){var fexpr__98545 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98545.cljs$core$IFn$_invoke$arity$1 ? fexpr__98545.cljs$core$IFn$_invoke$arity$1(G__98544) : fexpr__98545.call(null,G__98544));
})();
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.guard((function (_){
return sicmutils.simplify.rules._STAR_log_exp_simplify_QMARK__STAR_;
}),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null))),(function (p__98546){
var map__98547 = p__98546;
var map__98547__$1 = cljs.core.__destructure_map(map__98547);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98547__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var and__4251__auto__ = sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),xs], null))], null)),xs], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})(),new cljs.core.Symbol(null,"logexp1","logexp1",-1360132001,null));
if(cljs.core.truth_(and__4251__auto__)){
return x;
} else {
return and__4251__auto__;
}
}))),pattern.rule.guard((function (_){
return sicmutils.simplify.rules._STAR_sqrt_expt_simplify_QMARK__STAR_;
}),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null))),(function (p__98548){
var map__98549 = p__98548;
var map__98549__$1 = cljs.core.__destructure_map(map__98549);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98549__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var and__4251__auto__ = sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),xs], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),xs,(2)], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})(),new cljs.core.Symbol(null,"logexp2","logexp2",-1768907713,null));
if(cljs.core.truth_(and__4251__auto__)){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),x,(2)], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
} else {
return and__4251__auto__;
}
}))),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98550){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__98551 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98551.cljs$core$IFn$_invoke$arity$1 ? fexpr__98551.cljs$core$IFn$_invoke$arity$1(G__98550) : fexpr__98551.call(null,G__98550));
})()], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
});
/**
 * Rule simplifier for forms that contain `magnitude` entries.
 */
sicmutils.simplify.rules.magnitude = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.real_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98554){
var r__20948__auto__ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.magnitude,new cljs.core.Symbol(null,"?n","?n",-2053238410,null))(G__98554);
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98555){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (p__98558){
var map__98559 = p__98558;
var map__98559__$1 = cljs.core.__destructure_map(map__98559);
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98559__$1,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__98552_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,p1__98552_SHARP_,null,(1),null)),(2),null));
}),xs);
})(G__98555)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(1),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98563){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(function (){var fexpr__98564 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98564.cljs$core$IFn$_invoke$arity$1 ? fexpr__98564.cljs$core$IFn$_invoke$arity$1(G__98563) : fexpr__98564.call(null,G__98563));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.even_integer_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98568){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98572 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98572.cljs$core$IFn$_invoke$arity$1 ? fexpr__98572.cljs$core$IFn$_invoke$arity$1(G__98568) : fexpr__98572.call(null,G__98568));
})(),(function (){var fexpr__98573 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__98573.cljs$core$IFn$_invoke$arity$1 ? fexpr__98573.cljs$core$IFn$_invoke$arity$1(G__98568) : fexpr__98573.call(null,G__98568));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98574){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(function (){var fexpr__98575 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98575.cljs$core$IFn$_invoke$arity$1 ? fexpr__98575.cljs$core$IFn$_invoke$arity$1(G__98574) : fexpr__98575.call(null,G__98574));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98576 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98576.cljs$core$IFn$_invoke$arity$1 ? fexpr__98576.cljs$core$IFn$_invoke$arity$1(G__98574) : fexpr__98576.call(null,G__98574));
})(),(function (p1__98553_SHARP_){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__98577 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__98553_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__98553_SHARP_.cljs$core$IFn$_invoke$arity$1(G__98577) : p1__98553_SHARP_.call(null,G__98577));
})(),(1));
})(G__98574)], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
/**
 * Simplifications for various exponent forms (assuming commutative multiplication).
 * 
 *   NOTE that we have some similarities to [[exponent-contract]] above - that
 *   function works for non-commutative multiplication - AND that this needs a new
 *   name.
 */
sicmutils.simplify.rules.miscsimp = (function sicmutils$simplify$rules$miscsimp(simplify){
var sym_COLON__STAR_ = sicmutils.numsymb.symbolic_operator(new cljs.core.Symbol(null,"*","*",345799209,null));
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,(0),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98580){
var r__20948__auto__ = (1);
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(1),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98583){
var r__20948__auto__ = (function (){var fexpr__98584 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98584.cljs$core$IFn$_invoke$arity$1 ? fexpr__98584.cljs$core$IFn$_invoke$arity$1(G__98583) : fexpr__98584.call(null,G__98583));
})();
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,sicmutils.complex.I,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98587){
var r__20948__auto__ = (function (p1__98578_SHARP_){
var G__98592 = cljs.core.mod((function (){var G__98593 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__98578_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__98578_SHARP_.cljs$core$IFn$_invoke$arity$1(G__98593) : p1__98578_SHARP_.call(null,G__98593));
})(),(4));
var fexpr__98591 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),sicmutils.complex.I,(-1),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I)], null);
return (fexpr__98591.cljs$core$IFn$_invoke$arity$1 ? fexpr__98591.cljs$core$IFn$_invoke$arity$1(G__98592) : fexpr__98591.call(null,G__98592));
})(G__98587);
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?b","?b",1575118075,null),null,(1),null)),(2),null)),(3),null)),(function (p__98603){
var map__98604 = p__98603;
var map__98604__$1 = cljs.core.__destructure_map(map__98604);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98604__$1,new cljs.core.Symbol(null,"?a","?a",1314302913,null));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98604__$1,new cljs.core.Symbol(null,"?b","?b",1575118075,null));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98604__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var as = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(a) : simplify.call(null,a));
var bs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(b) : simplify.call(null,b));
if(cljs.core.truth_((function (){var or__4253__auto__ = ((sicmutils.value.integral_QMARK_(as)) && (sicmutils.value.integral_QMARK_(bs)));
if(or__4253__auto__){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = ((sicmutils.simplify.rules.even_integer_QMARK_(bs)) && (sicmutils.value.integral_QMARK_((function (){var G__98608 = (sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(as,bs) : sym_COLON__STAR_.call(null,as,bs));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__98608) : simplify.call(null,G__98608));
})())));
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
var and__4251__auto__ = sicmutils.simplify.rules._STAR_exponent_product_simplify_QMARK__STAR_;
if(cljs.core.truth_(and__4251__auto__)){
return sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),x,as], null)),bs], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),x,(sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(as,bs) : sym_COLON__STAR_.call(null,as,bs))], null))], null));
var or__4253__auto____$2 = r__20948__auto__;
if(or__4253__auto____$2){
return or__4253__auto____$2;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})(),new cljs.core.Symbol(null,"exponent-product","exponent-product",134982023,null));
} else {
return and__4251__auto__;
}
}
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?ab","?ab",-380882607,null),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(a,b)], null);
} else {
return null;
}
})),(function (G__98609){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98610 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98610.cljs$core$IFn$_invoke$arity$1 ? fexpr__98610.cljs$core$IFn$_invoke$arity$1(G__98609) : fexpr__98610.call(null,G__98609));
})(),(function (){var fexpr__98611 = new cljs.core.Symbol(null,"?ab","?ab",-380882607,null);
return (fexpr__98611.cljs$core$IFn$_invoke$arity$1 ? fexpr__98611.cljs$core$IFn$_invoke$arity$1(G__98609) : fexpr__98611.call(null,G__98609));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(function (_){
return sicmutils.simplify.rules._STAR_expt_half__GT_sqrt_QMARK__STAR_;
})),(function (G__98612){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98613 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98613.cljs$core$IFn$_invoke$arity$1 ? fexpr__98613.cljs$core$IFn$_invoke$arity$1(G__98612) : fexpr__98613.call(null,G__98612));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs1*","??fs1*",1798735663,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__98614){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98615 = new cljs.core.Symbol(null,"??fs1","??fs1",-1584583474,null);
return (fexpr__98615.cljs$core$IFn$_invoke$arity$1 ? fexpr__98615.cljs$core$IFn$_invoke$arity$1(G__98614) : fexpr__98615.call(null,G__98614));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98616 = new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null);
return (fexpr__98616.cljs$core$IFn$_invoke$arity$1 ? fexpr__98616.cljs$core$IFn$_invoke$arity$1(G__98614) : fexpr__98616.call(null,G__98614));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98617 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98617.cljs$core$IFn$_invoke$arity$1 ? fexpr__98617.cljs$core$IFn$_invoke$arity$1(G__98614) : fexpr__98617.call(null,G__98614));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(function (){var fexpr__98618 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__98618.cljs$core$IFn$_invoke$arity$1 ? fexpr__98618.cljs$core$IFn$_invoke$arity$1(G__98614) : fexpr__98618.call(null,G__98614));
})()], null))], null))], null),(function (){var fexpr__98619 = new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null);
return (fexpr__98619.cljs$core$IFn$_invoke$arity$1 ? fexpr__98619.cljs$core$IFn$_invoke$arity$1(G__98614) : fexpr__98619.call(null,G__98614));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs1","??fs1",-1584583474,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__98620){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98621 = new cljs.core.Symbol(null,"??fs1","??fs1",-1584583474,null);
return (fexpr__98621.cljs$core$IFn$_invoke$arity$1 ? fexpr__98621.cljs$core$IFn$_invoke$arity$1(G__98620) : fexpr__98621.call(null,G__98620));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98622 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98622.cljs$core$IFn$_invoke$arity$1 ? fexpr__98622.cljs$core$IFn$_invoke$arity$1(G__98620) : fexpr__98622.call(null,G__98620));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(function (){var fexpr__98623 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__98623.cljs$core$IFn$_invoke$arity$1 ? fexpr__98623.cljs$core$IFn$_invoke$arity$1(G__98620) : fexpr__98623.call(null,G__98620));
})()], null))], null))], null),(function (){var fexpr__98624 = new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null);
return (fexpr__98624.cljs$core$IFn$_invoke$arity$1 ? fexpr__98624.cljs$core$IFn$_invoke$arity$1(G__98620) : fexpr__98624.call(null,G__98620));
})(),(function (){var fexpr__98625 = new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null);
return (fexpr__98625.cljs$core$IFn$_invoke$arity$1 ? fexpr__98625.cljs$core$IFn$_invoke$arity$1(G__98620) : fexpr__98625.call(null,G__98620));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs1","??fs1",-1584583474,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y1","?y1",1237029156,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y2","?y2",731715171,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__98626){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98627 = new cljs.core.Symbol(null,"??fs1","??fs1",-1584583474,null);
return (fexpr__98627.cljs$core$IFn$_invoke$arity$1 ? fexpr__98627.cljs$core$IFn$_invoke$arity$1(G__98626) : fexpr__98627.call(null,G__98626));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98628 = new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null);
return (fexpr__98628.cljs$core$IFn$_invoke$arity$1 ? fexpr__98628.cljs$core$IFn$_invoke$arity$1(G__98626) : fexpr__98628.call(null,G__98626));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98629 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98629.cljs$core$IFn$_invoke$arity$1 ? fexpr__98629.cljs$core$IFn$_invoke$arity$1(G__98626) : fexpr__98629.call(null,G__98626));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__98630 = new cljs.core.Symbol(null,"?y1","?y1",1237029156,null);
return (fexpr__98630.cljs$core$IFn$_invoke$arity$1 ? fexpr__98630.cljs$core$IFn$_invoke$arity$1(G__98626) : fexpr__98630.call(null,G__98626));
})(),(function (){var fexpr__98631 = new cljs.core.Symbol(null,"?y2","?y2",731715171,null);
return (fexpr__98631.cljs$core$IFn$_invoke$arity$1 ? fexpr__98631.cljs$core$IFn$_invoke$arity$1(G__98626) : fexpr__98631.call(null,G__98626));
})()], null))], null))], null),(function (){var fexpr__98632 = new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null);
return (fexpr__98632.cljs$core$IFn$_invoke$arity$1 ? fexpr__98632.cljs$core$IFn$_invoke$arity$1(G__98626) : fexpr__98632.call(null,G__98626));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
});
sicmutils.simplify.rules.simplify_square_roots = (function sicmutils$simplify$rules$simplify_square_roots(simplify){
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.even_integer_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98635){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98636 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98636.cljs$core$IFn$_invoke$arity$1 ? fexpr__98636.cljs$core$IFn$_invoke$arity$1(G__98635) : fexpr__98636.call(null,G__98635));
})(),(function (p1__98633_SHARP_){
return sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((function (){var G__98638 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__98633_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__98633_SHARP_.cljs$core$IFn$_invoke$arity$1(G__98638) : p1__98633_SHARP_.call(null,G__98638));
})(),(2));
})(G__98635)], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.guard((function (_){
return sicmutils.simplify.rules._STAR_sqrt_expt_simplify_QMARK__STAR_;
}),pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.even_integer_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(function (p__98640){
var map__98644 = p__98640;
var map__98644__$1 = cljs.core.__destructure_map(map__98644);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98644__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98644__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var half_n = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(n,(2));
if(cljs.core.truth_(sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),xs,n], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),xs,half_n], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})(),new cljs.core.Symbol(null,"simsqrt1","simsqrt1",-1069513157,null)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?new-n","?new-n",-1095502685,null),half_n], null);
} else {
return null;
}
})),(function (G__98645){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98646 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98646.cljs$core$IFn$_invoke$arity$1 ? fexpr__98646.cljs$core$IFn$_invoke$arity$1(G__98645) : fexpr__98646.call(null,G__98645));
})(),(function (){var fexpr__98649 = new cljs.core.Symbol(null,"?new-n","?new-n",-1095502685,null);
return (fexpr__98649.cljs$core$IFn$_invoke$arity$1 ? fexpr__98649.cljs$core$IFn$_invoke$arity$1(G__98645) : fexpr__98649.call(null,G__98645));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.odd_positive_integer_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(function (p__98650){
var map__98651 = p__98650;
var map__98651__$1 = cljs.core.__destructure_map(map__98651);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98651__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98651__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var half_dec_n = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(n,(1)),(2));
if(cljs.core.truth_(sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),xs,n], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),xs,half_dec_n], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})(),new cljs.core.Symbol(null,"simsqrt2","simsqrt2",-1794028771,null)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?new-n","?new-n",-1095502685,null),half_dec_n], null);
} else {
return null;
}
})),(function (G__98654){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98655 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98655.cljs$core$IFn$_invoke$arity$1 ? fexpr__98655.cljs$core$IFn$_invoke$arity$1(G__98654) : fexpr__98655.call(null,G__98654));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98656 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98656.cljs$core$IFn$_invoke$arity$1 ? fexpr__98656.cljs$core$IFn$_invoke$arity$1(G__98654) : fexpr__98656.call(null,G__98654));
})(),(function (){var fexpr__98657 = new cljs.core.Symbol(null,"?new-n","?new-n",-1095502685,null);
return (fexpr__98657.cljs$core$IFn$_invoke$arity$1 ? fexpr__98657.cljs$core$IFn$_invoke$arity$1(G__98654) : fexpr__98657.call(null,G__98654));
})()], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0)))], 0)),pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.odd_integer_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98658){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98659 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98659.cljs$core$IFn$_invoke$arity$1 ? fexpr__98659.cljs$core$IFn$_invoke$arity$1(G__98658) : fexpr__98659.call(null,G__98658));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98665 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98665.cljs$core$IFn$_invoke$arity$1 ? fexpr__98665.cljs$core$IFn$_invoke$arity$1(G__98658) : fexpr__98665.call(null,G__98658));
})(),(function (p1__98634_SHARP_){
return sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__98666 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__98634_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__98634_SHARP_.cljs$core$IFn$_invoke$arity$1(G__98666) : p1__98634_SHARP_.call(null,G__98666));
})(),(1)),(2));
})(G__98658)], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98670){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98671 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98671.cljs$core$IFn$_invoke$arity$1 ? fexpr__98671.cljs$core$IFn$_invoke$arity$1(G__98670) : fexpr__98671.call(null,G__98670));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98672){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98673 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98673.cljs$core$IFn$_invoke$arity$1 ? fexpr__98673.cljs$core$IFn$_invoke$arity$1(G__98672) : fexpr__98673.call(null,G__98672));
})()], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98674){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98675 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__98675.cljs$core$IFn$_invoke$arity$1 ? fexpr__98675.cljs$core$IFn$_invoke$arity$1(G__98674) : fexpr__98675.call(null,G__98674));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98676 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98676.cljs$core$IFn$_invoke$arity$1 ? fexpr__98676.cljs$core$IFn$_invoke$arity$1(G__98674) : fexpr__98676.call(null,G__98674));
})()], null))], null),(function (){var fexpr__98677 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__98677.cljs$core$IFn$_invoke$arity$1 ? fexpr__98677.cljs$core$IFn$_invoke$arity$1(G__98674) : fexpr__98677.call(null,G__98674));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98678){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98679 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__98679.cljs$core$IFn$_invoke$arity$1 ? fexpr__98679.cljs$core$IFn$_invoke$arity$1(G__98678) : fexpr__98679.call(null,G__98678));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98680 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__98680.cljs$core$IFn$_invoke$arity$1 ? fexpr__98680.cljs$core$IFn$_invoke$arity$1(G__98678) : fexpr__98680.call(null,G__98678));
})()], 0))),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98681 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98681.cljs$core$IFn$_invoke$arity$1 ? fexpr__98681.cljs$core$IFn$_invoke$arity$1(G__98678) : fexpr__98681.call(null,G__98678));
})()], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98682){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98683 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98683.cljs$core$IFn$_invoke$arity$1 ? fexpr__98683.cljs$core$IFn$_invoke$arity$1(G__98682) : fexpr__98683.call(null,G__98682));
})()], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98684 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__98684.cljs$core$IFn$_invoke$arity$1 ? fexpr__98684.cljs$core$IFn$_invoke$arity$1(G__98682) : fexpr__98684.call(null,G__98682));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98685 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__98685.cljs$core$IFn$_invoke$arity$1 ? fexpr__98685.cljs$core$IFn$_invoke$arity$1(G__98682) : fexpr__98685.call(null,G__98682));
})()], 0)))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98686){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98687 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__98687.cljs$core$IFn$_invoke$arity$1 ? fexpr__98687.cljs$core$IFn$_invoke$arity$1(G__98686) : fexpr__98687.call(null,G__98686));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98688 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98688.cljs$core$IFn$_invoke$arity$1 ? fexpr__98688.cljs$core$IFn$_invoke$arity$1(G__98686) : fexpr__98688.call(null,G__98686));
})()], null))], null),(function (){var fexpr__98689 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__98689.cljs$core$IFn$_invoke$arity$1 ? fexpr__98689.cljs$core$IFn$_invoke$arity$1(G__98686) : fexpr__98689.call(null,G__98686));
})()], 0)))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??p","??p",1112654910,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??q","??q",253374785,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98690){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98691 = new cljs.core.Symbol(null,"??p","??p",1112654910,null);
return (fexpr__98691.cljs$core$IFn$_invoke$arity$1 ? fexpr__98691.cljs$core$IFn$_invoke$arity$1(G__98690) : fexpr__98691.call(null,G__98690));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98692 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98692.cljs$core$IFn$_invoke$arity$1 ? fexpr__98692.cljs$core$IFn$_invoke$arity$1(G__98690) : fexpr__98692.call(null,G__98690));
})()], null))], null),(function (){var fexpr__98693 = new cljs.core.Symbol(null,"??q","??q",253374785,null);
return (fexpr__98693.cljs$core$IFn$_invoke$arity$1 ? fexpr__98693.cljs$core$IFn$_invoke$arity$1(G__98690) : fexpr__98693.call(null,G__98690));
})()], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98694 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__98694.cljs$core$IFn$_invoke$arity$1 ? fexpr__98694.cljs$core$IFn$_invoke$arity$1(G__98690) : fexpr__98694.call(null,G__98690));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98695 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__98695.cljs$core$IFn$_invoke$arity$1 ? fexpr__98695.cljs$core$IFn$_invoke$arity$1(G__98690) : fexpr__98695.call(null,G__98690));
})()], 0)))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??p","??p",1112654910,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??q","??q",253374785,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98696){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98697 = new cljs.core.Symbol(null,"??p","??p",1112654910,null);
return (fexpr__98697.cljs$core$IFn$_invoke$arity$1 ? fexpr__98697.cljs$core$IFn$_invoke$arity$1(G__98696) : fexpr__98697.call(null,G__98696));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98698 = new cljs.core.Symbol(null,"??q","??q",253374785,null);
return (fexpr__98698.cljs$core$IFn$_invoke$arity$1 ? fexpr__98698.cljs$core$IFn$_invoke$arity$1(G__98696) : fexpr__98698.call(null,G__98696));
})()], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98699 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__98699.cljs$core$IFn$_invoke$arity$1 ? fexpr__98699.cljs$core$IFn$_invoke$arity$1(G__98696) : fexpr__98699.call(null,G__98696));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98700 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98700.cljs$core$IFn$_invoke$arity$1 ? fexpr__98700.cljs$core$IFn$_invoke$arity$1(G__98696) : fexpr__98700.call(null,G__98696));
})()], null))], null),(function (){var fexpr__98701 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__98701.cljs$core$IFn$_invoke$arity$1 ? fexpr__98701.cljs$core$IFn$_invoke$arity$1(G__98696) : fexpr__98701.call(null,G__98696));
})()], 0)))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
});
/**
 * Takes one or two simplified expressions `x` and `y` and a symbolic identifier
 *   `id` and registers an assumption that both sides are non-negative.
 * 
 *   Returns the conjuction of both assumptions in the two argument case, or the
 *   single assumption in the one-argument case.
 */
sicmutils.simplify.rules.non_negative_factors_BANG_ = (function sicmutils$simplify$rules$non_negative_factors_BANG_(var_args){
var G__98703 = arguments.length;
switch (G__98703) {
case 2:
return sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,id){
return sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"non-negative?","non-negative?",1248641804,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),id,(function (){
return false;
}));
}));

(sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,id){
return ((sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"non-negative?","non-negative?",1248641804,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),id,(function (){
return false;
}))) && (sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"non-negative?","non-negative?",1248641804,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),id,(function (){
return false;
}))));
}));

(sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Returns a rule simplifier that distributes the radical sign across products and
 *   quotients. The companion rule [[sqrt-contract]] reassembles what remains.
 * 
 *   NOTE that doing this may allow equal subexpressions within the radicals to
 *   cancel in various ways.
 * 
 *   Turn this simplifier on and off with [[*sqrt-factor-simplify?*]].
 */
sicmutils.simplify.rules.sqrt_expand = (function sicmutils$simplify$rules$sqrt_expand(simplify){
var pred = (function sicmutils$simplify$rules$sqrt_expand_$_pred(label){
return (function (p__98706){
var map__98707 = p__98706;
var map__98707__$1 = cljs.core.__destructure_map(map__98707);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98707__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98707__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(xs,ys))){
return sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2(xs,label);
} else {
return sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3(xs,ys,label);
}
});
});
return pattern.rule.attempt(pattern.rule.guard((function (_){
return sicmutils.simplify.rules._STAR_sqrt_factor_simplify_QMARK__STAR_;
}),pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pred(new cljs.core.Symbol(null,"e1","e1",-732861271,null))),(function (G__98708){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98709 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98709.cljs$core$IFn$_invoke$arity$1 ? fexpr__98709.cljs$core$IFn$_invoke$arity$1(G__98708) : fexpr__98709.call(null,G__98708));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98710 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__98710.cljs$core$IFn$_invoke$arity$1 ? fexpr__98710.cljs$core$IFn$_invoke$arity$1(G__98708) : fexpr__98710.call(null,G__98708));
})()], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pred(new cljs.core.Symbol(null,"e2","e2",1288255343,null))),(function (G__98711){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98712 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98712.cljs$core$IFn$_invoke$arity$1 ? fexpr__98712.cljs$core$IFn$_invoke$arity$1(G__98711) : fexpr__98712.call(null,G__98711));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__98713 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__98713.cljs$core$IFn$_invoke$arity$1 ? fexpr__98713.cljs$core$IFn$_invoke$arity$1(G__98711) : fexpr__98713.call(null,G__98711));
})()], null),(function (){var fexpr__98714 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__98714.cljs$core$IFn$_invoke$arity$1 ? fexpr__98714.cljs$core$IFn$_invoke$arity$1(G__98711) : fexpr__98714.call(null,G__98711));
})()))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pred(new cljs.core.Symbol(null,"e3","e3",980159791,null))),(function (G__98715){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98716 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98716.cljs$core$IFn$_invoke$arity$1 ? fexpr__98716.cljs$core$IFn$_invoke$arity$1(G__98715) : fexpr__98716.call(null,G__98715));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98717 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__98717.cljs$core$IFn$_invoke$arity$1 ? fexpr__98717.cljs$core$IFn$_invoke$arity$1(G__98715) : fexpr__98717.call(null,G__98715));
})()], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pred(new cljs.core.Symbol(null,"e4","e4",-714258248,null))),(function (G__98718){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98719 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98719.cljs$core$IFn$_invoke$arity$1 ? fexpr__98719.cljs$core$IFn$_invoke$arity$1(G__98718) : fexpr__98719.call(null,G__98718));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__98720 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__98720.cljs$core$IFn$_invoke$arity$1 ? fexpr__98720.cljs$core$IFn$_invoke$arity$1(G__98718) : fexpr__98720.call(null,G__98718));
})()], null),(function (){var fexpr__98721 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__98721.cljs$core$IFn$_invoke$arity$1 ? fexpr__98721.cljs$core$IFn$_invoke$arity$1(G__98718) : fexpr__98721.call(null,G__98718));
})()))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0))));
});
sicmutils.simplify.rules.sqrt_contract = (function sicmutils$simplify$rules$sqrt_contract(simplify){
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null))),(function (p__98722){
var map__98723 = p__98722;
var map__98723__$1 = cljs.core.__destructure_map(map__98723);
var m = map__98723__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98723__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98723__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(xs,ys))){
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.Symbol(null,"c1","c1",-1521904966,null));
if(and__4251__auto__){
var G__98724 = m;
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98725 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__98725.cljs$core$IFn$_invoke$arity$1 ? fexpr__98725.cljs$core$IFn$_invoke$arity$1(G__98724) : fexpr__98725.call(null,G__98724));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs], null),(function (){var fexpr__98726 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__98726.cljs$core$IFn$_invoke$arity$1 ? fexpr__98726.cljs$core$IFn$_invoke$arity$1(G__98724) : fexpr__98726.call(null,G__98724));
})(),(function (){var fexpr__98727 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__98727.cljs$core$IFn$_invoke$arity$1 ? fexpr__98727.cljs$core$IFn$_invoke$arity$1(G__98724) : fexpr__98727.call(null,G__98724));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
} else {
return and__4251__auto__;
}
} else {
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3(xs,ys,new cljs.core.Symbol(null,"c1","c1",-1521904966,null));
if(and__4251__auto__){
var G__98728 = m;
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98729 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__98729.cljs$core$IFn$_invoke$arity$1 ? fexpr__98729.cljs$core$IFn$_invoke$arity$1(G__98728) : fexpr__98729.call(null,G__98728));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),xs,ys], null))], null))], null),(function (){var fexpr__98730 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__98730.cljs$core$IFn$_invoke$arity$1 ? fexpr__98730.cljs$core$IFn$_invoke$arity$1(G__98728) : fexpr__98730.call(null,G__98728));
})(),(function (){var fexpr__98731 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__98731.cljs$core$IFn$_invoke$arity$1 ? fexpr__98731.cljs$core$IFn$_invoke$arity$1(G__98728) : fexpr__98731.call(null,G__98728));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
} else {
return and__4251__auto__;
}
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null))),(function (p__98732){
var map__98733 = p__98732;
var map__98733__$1 = cljs.core.__destructure_map(map__98733);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98733__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98733__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(xs,ys))){
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.Symbol(null,"c2","c2",78651156,null));
if(and__4251__auto__){
return (1);
} else {
return and__4251__auto__;
}
} else {
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3(xs,ys,new cljs.core.Symbol(null,"c2","c2",78651156,null));
if(and__4251__auto__){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),xs,ys], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
} else {
return and__4251__auto__;
}
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null))),(function (p__98734){
var map__98735 = p__98734;
var map__98735__$1 = cljs.core.__destructure_map(map__98735);
var m = map__98735__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98735__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98735__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(xs,ys))){
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.Symbol(null,"c3","c3",468715789,null));
if(and__4251__auto__){
var G__98736 = m;
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98737 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__98737.cljs$core$IFn$_invoke$arity$1 ? fexpr__98737.cljs$core$IFn$_invoke$arity$1(G__98736) : fexpr__98737.call(null,G__98736));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98738 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__98738.cljs$core$IFn$_invoke$arity$1 ? fexpr__98738.cljs$core$IFn$_invoke$arity$1(G__98736) : fexpr__98738.call(null,G__98736));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
} else {
return and__4251__auto__;
}
} else {
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3(xs,ys,new cljs.core.Symbol(null,"c3","c3",468715789,null));
if(and__4251__auto__){
var G__98739 = m;
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98740 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__98740.cljs$core$IFn$_invoke$arity$1 ? fexpr__98740.cljs$core$IFn$_invoke$arity$1(G__98739) : fexpr__98740.call(null,G__98739));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),xs,ys], null))], null))], null),(function (){var fexpr__98741 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__98741.cljs$core$IFn$_invoke$arity$1 ? fexpr__98741.cljs$core$IFn$_invoke$arity$1(G__98739) : fexpr__98741.call(null,G__98739));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
} else {
return and__4251__auto__;
}
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null))),(function (p__98742){
var map__98743 = p__98742;
var map__98743__$1 = cljs.core.__destructure_map(map__98743);
var m = map__98743__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98743__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98743__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(xs,ys))){
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.Symbol(null,"c4","c4",-1626390159,null));
if(and__4251__auto__){
var G__98744 = m;
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98745 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__98745.cljs$core$IFn$_invoke$arity$1 ? fexpr__98745.cljs$core$IFn$_invoke$arity$1(G__98744) : fexpr__98745.call(null,G__98744));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98746 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__98746.cljs$core$IFn$_invoke$arity$1 ? fexpr__98746.cljs$core$IFn$_invoke$arity$1(G__98744) : fexpr__98746.call(null,G__98744));
})()], 0)))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
} else {
return and__4251__auto__;
}
} else {
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3(xs,ys,new cljs.core.Symbol(null,"c4","c4",-1626390159,null));
if(and__4251__auto__){
var G__98747 = m;
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),xs,ys], null))], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98748 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__98748.cljs$core$IFn$_invoke$arity$1 ? fexpr__98748.cljs$core$IFn$_invoke$arity$1(G__98747) : fexpr__98748.call(null,G__98747));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98749 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__98749.cljs$core$IFn$_invoke$arity$1 ? fexpr__98749.cljs$core$IFn$_invoke$arity$1(G__98747) : fexpr__98749.call(null,G__98747));
})()], 0)))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
} else {
return and__4251__auto__;
}
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??d","??d",-581862453,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null))),(function (p__98750){
var map__98751 = p__98750;
var map__98751__$1 = cljs.core.__destructure_map(map__98751);
var m = map__98751__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98751__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98751__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(xs,ys))){
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.Symbol(null,"c5","c5",1025457982,null));
if(and__4251__auto__){
var G__98752 = m;
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98753 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__98753.cljs$core$IFn$_invoke$arity$1 ? fexpr__98753.cljs$core$IFn$_invoke$arity$1(G__98752) : fexpr__98753.call(null,G__98752));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98754 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__98754.cljs$core$IFn$_invoke$arity$1 ? fexpr__98754.cljs$core$IFn$_invoke$arity$1(G__98752) : fexpr__98754.call(null,G__98752));
})()], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98755 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__98755.cljs$core$IFn$_invoke$arity$1 ? fexpr__98755.cljs$core$IFn$_invoke$arity$1(G__98752) : fexpr__98755.call(null,G__98752));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98756 = new cljs.core.Symbol(null,"??d","??d",-581862453,null);
return (fexpr__98756.cljs$core$IFn$_invoke$arity$1 ? fexpr__98756.cljs$core$IFn$_invoke$arity$1(G__98752) : fexpr__98756.call(null,G__98752));
})()], 0)))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
} else {
return and__4251__auto__;
}
} else {
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3(xs,ys,new cljs.core.Symbol(null,"c5","c5",1025457982,null));
if(and__4251__auto__){
var G__98757 = m;
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98758 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__98758.cljs$core$IFn$_invoke$arity$1 ? fexpr__98758.cljs$core$IFn$_invoke$arity$1(G__98757) : fexpr__98758.call(null,G__98757));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),xs,ys], null))], null))], null),(function (){var fexpr__98759 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__98759.cljs$core$IFn$_invoke$arity$1 ? fexpr__98759.cljs$core$IFn$_invoke$arity$1(G__98757) : fexpr__98759.call(null,G__98757));
})()], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98760 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__98760.cljs$core$IFn$_invoke$arity$1 ? fexpr__98760.cljs$core$IFn$_invoke$arity$1(G__98757) : fexpr__98760.call(null,G__98757));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98761 = new cljs.core.Symbol(null,"??d","??d",-581862453,null);
return (fexpr__98761.cljs$core$IFn$_invoke$arity$1 ? fexpr__98761.cljs$core$IFn$_invoke$arity$1(G__98757) : fexpr__98761.call(null,G__98757));
})()], 0)))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
} else {
return and__4251__auto__;
}
}
}))], 0))], 0));
});
sicmutils.simplify.rules.specfun__GT_logexp = (function (){var two_i = sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$2(0.0,2.0);
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98762){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__98763 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98763.cljs$core$IFn$_invoke$arity$1 ? fexpr__98763.cljs$core$IFn$_invoke$arity$1(G__98762) : fexpr__98763.call(null,G__98762));
})()], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98764){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__98765 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__98765.cljs$core$IFn$_invoke$arity$1 ? fexpr__98765.cljs$core$IFn$_invoke$arity$1(G__98764) : fexpr__98765.call(null,G__98764));
})()], null))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__98766 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__98766.cljs$core$IFn$_invoke$arity$1 ? fexpr__98766.cljs$core$IFn$_invoke$arity$1(G__98764) : fexpr__98766.call(null,G__98764));
})()], null))], null))], null))], null)),two_i], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98767){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__98768 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__98768.cljs$core$IFn$_invoke$arity$1 ? fexpr__98768.cljs$core$IFn$_invoke$arity$1(G__98767) : fexpr__98768.call(null,G__98767));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98769 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__98769.cljs$core$IFn$_invoke$arity$1 ? fexpr__98769.cljs$core$IFn$_invoke$arity$1(G__98767) : fexpr__98769.call(null,G__98767));
})(),(2)], null))], null))], null))], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98770){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__98771 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__98771.cljs$core$IFn$_invoke$arity$1 ? fexpr__98771.cljs$core$IFn$_invoke$arity$1(G__98770) : fexpr__98771.call(null,G__98770));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98772 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__98772.cljs$core$IFn$_invoke$arity$1 ? fexpr__98772.cljs$core$IFn$_invoke$arity$1(G__98770) : fexpr__98772.call(null,G__98770));
})(),(2)], null))], null))], null))], null))], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?u","?u",749886731,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98773){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__98774 = new cljs.core.Symbol(null,"?u","?u",749886731,null);
return (fexpr__98774.cljs$core$IFn$_invoke$arity$1 ? fexpr__98774.cljs$core$IFn$_invoke$arity$1(G__98773) : fexpr__98774.call(null,G__98773));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-1),(function (){var fexpr__98775 = new cljs.core.Symbol(null,"?u","?u",749886731,null);
return (fexpr__98775.cljs$core$IFn$_invoke$arity$1 ? fexpr__98775.cljs$core$IFn$_invoke$arity$1(G__98773) : fexpr__98775.call(null,G__98773));
})()], null))], null))], null)),(2)], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?u","?u",749886731,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98776){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__98777 = new cljs.core.Symbol(null,"?u","?u",749886731,null);
return (fexpr__98777.cljs$core$IFn$_invoke$arity$1 ? fexpr__98777.cljs$core$IFn$_invoke$arity$1(G__98776) : fexpr__98777.call(null,G__98776));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-1),(function (){var fexpr__98778 = new cljs.core.Symbol(null,"?u","?u",749886731,null);
return (fexpr__98778.cljs$core$IFn$_invoke$arity$1 ? fexpr__98778.cljs$core$IFn$_invoke$arity$1(G__98776) : fexpr__98778.call(null,G__98776));
})()], null))], null))], null)),(2)], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,sicmutils.simplify.rules.not_integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98779){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__98780 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__98780.cljs$core$IFn$_invoke$arity$1 ? fexpr__98780.cljs$core$IFn$_invoke$arity$1(G__98779) : fexpr__98780.call(null,G__98779));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__98781 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98781.cljs$core$IFn$_invoke$arity$1 ? fexpr__98781.cljs$core$IFn$_invoke$arity$1(G__98779) : fexpr__98781.call(null,G__98779));
})()], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
})();
sicmutils.simplify.rules.logexp__GT_specfun = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98782){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98783 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98783.cljs$core$IFn$_invoke$arity$1 ? fexpr__98783.cljs$core$IFn$_invoke$arity$1(G__98782) : fexpr__98783.call(null,G__98782));
})(),(-1)], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98784){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98785 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98785.cljs$core$IFn$_invoke$arity$1 ? fexpr__98785.cljs$core$IFn$_invoke$arity$1(G__98784) : fexpr__98785.call(null,G__98784));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98786){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98787 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98787.cljs$core$IFn$_invoke$arity$1 ? fexpr__98787.cljs$core$IFn$_invoke$arity$1(G__98786) : fexpr__98787.call(null,G__98786));
})()], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(3),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98788){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98789 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98789.cljs$core$IFn$_invoke$arity$1 ? fexpr__98789.cljs$core$IFn$_invoke$arity$1(G__98788) : fexpr__98789.call(null,G__98788));
})()], null)),(3)], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(-3),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98790){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98791 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98791.cljs$core$IFn$_invoke$arity$1 ? fexpr__98791.cljs$core$IFn$_invoke$arity$1(G__98790) : fexpr__98791.call(null,G__98790));
})()], null)),(-3)], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98792){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98793 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98793.cljs$core$IFn$_invoke$arity$1 ? fexpr__98793.cljs$core$IFn$_invoke$arity$1(G__98792) : fexpr__98793.call(null,G__98792));
})(),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98794 = new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null);
return (fexpr__98794.cljs$core$IFn$_invoke$arity$1 ? fexpr__98794.cljs$core$IFn$_invoke$arity$1(G__98792) : fexpr__98794.call(null,G__98792));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98795 = new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null);
return (fexpr__98795.cljs$core$IFn$_invoke$arity$1 ? fexpr__98795.cljs$core$IFn$_invoke$arity$1(G__98792) : fexpr__98795.call(null,G__98792));
})()], 0)))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.log_contract = (function sicmutils$simplify$rules$log_contract(simplify){
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x3","??x3",-411077265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x4","?x4",94899597,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x5","??x5",1822045235,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__98796){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__98797 = new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null);
return (fexpr__98797.cljs$core$IFn$_invoke$arity$1 ? fexpr__98797.cljs$core$IFn$_invoke$arity$1(G__98796) : fexpr__98797.call(null,G__98796));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98798 = new cljs.core.Symbol(null,"??x3","??x3",-411077265,null);
return (fexpr__98798.cljs$core$IFn$_invoke$arity$1 ? fexpr__98798.cljs$core$IFn$_invoke$arity$1(G__98796) : fexpr__98798.call(null,G__98796));
})(),(function (){var fexpr__98799 = new cljs.core.Symbol(null,"??x5","??x5",1822045235,null);
return (fexpr__98799.cljs$core$IFn$_invoke$arity$1 ? fexpr__98799.cljs$core$IFn$_invoke$arity$1(G__98796) : fexpr__98799.call(null,G__98796));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__98800 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__98800.cljs$core$IFn$_invoke$arity$1 ? fexpr__98800.cljs$core$IFn$_invoke$arity$1(G__98796) : fexpr__98800.call(null,G__98796));
})(),(function (){var fexpr__98801 = new cljs.core.Symbol(null,"?x4","?x4",94899597,null);
return (fexpr__98801.cljs$core$IFn$_invoke$arity$1 ? fexpr__98801.cljs$core$IFn$_invoke$arity$1(G__98796) : fexpr__98801.call(null,G__98796));
})()], null))], null))], null)], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98802){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__98803 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98803.cljs$core$IFn$_invoke$arity$1 ? fexpr__98803.cljs$core$IFn$_invoke$arity$1(G__98802) : fexpr__98803.call(null,G__98802));
})(),(function (){var fexpr__98804 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__98804.cljs$core$IFn$_invoke$arity$1 ? fexpr__98804.cljs$core$IFn$_invoke$arity$1(G__98802) : fexpr__98804.call(null,G__98802));
})()], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f2","??f2",745277317,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x2","??x2",169445330,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f3","??f3",-1809203400,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f4","??f4",1817370441,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x3","??x3",-411077265,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(function (m){
var s1 = (function (){var G__98805 = (function (){var G__98806 = m;
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98807 = new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null);
return (fexpr__98807.cljs$core$IFn$_invoke$arity$1 ? fexpr__98807.cljs$core$IFn$_invoke$arity$1(G__98806) : fexpr__98807.call(null,G__98806));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98808 = new cljs.core.Symbol(null,"??f2","??f2",745277317,null);
return (fexpr__98808.cljs$core$IFn$_invoke$arity$1 ? fexpr__98808.cljs$core$IFn$_invoke$arity$1(G__98806) : fexpr__98808.call(null,G__98806));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__98805) : simplify.call(null,G__98805));
})();
var s2 = (function (){var G__98809 = (function (){var G__98810 = m;
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98811 = new cljs.core.Symbol(null,"??f3","??f3",-1809203400,null);
return (fexpr__98811.cljs$core$IFn$_invoke$arity$1 ? fexpr__98811.cljs$core$IFn$_invoke$arity$1(G__98810) : fexpr__98811.call(null,G__98810));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98812 = new cljs.core.Symbol(null,"??f4","??f4",1817370441,null);
return (fexpr__98812.cljs$core$IFn$_invoke$arity$1 ? fexpr__98812.cljs$core$IFn$_invoke$arity$1(G__98810) : fexpr__98812.call(null,G__98810));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__98809) : simplify.call(null,G__98809));
})();
if(sicmutils.value.exact_zero_QMARK_((function (){var G__98813 = (new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,s1,(new cljs.core.List(null,s2,null,(1),null)),(2),null)),(3),null));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__98813) : simplify.call(null,G__98813));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"??s1","??s1",753911801,null),s1], null);
} else {
return null;
}
})),(function (G__98814){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__98815 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98815.cljs$core$IFn$_invoke$arity$1 ? fexpr__98815.cljs$core$IFn$_invoke$arity$1(G__98814) : fexpr__98815.call(null,G__98814));
})(),(function (){var fexpr__98816 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__98816.cljs$core$IFn$_invoke$arity$1 ? fexpr__98816.cljs$core$IFn$_invoke$arity$1(G__98814) : fexpr__98816.call(null,G__98814));
})()], null))], null))], null),(function (){var fexpr__98817 = new cljs.core.Symbol(null,"??s1","??s1",753911801,null);
return (fexpr__98817.cljs$core$IFn$_invoke$arity$1 ? fexpr__98817.cljs$core$IFn$_invoke$arity$1(G__98814) : fexpr__98817.call(null,G__98814));
})()))], null),(function (){var fexpr__98818 = new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null);
return (fexpr__98818.cljs$core$IFn$_invoke$arity$1 ? fexpr__98818.cljs$core$IFn$_invoke$arity$1(G__98814) : fexpr__98818.call(null,G__98814));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98819 = new cljs.core.Symbol(null,"??x2","??x2",169445330,null);
return (fexpr__98819.cljs$core$IFn$_invoke$arity$1 ? fexpr__98819.cljs$core$IFn$_invoke$arity$1(G__98814) : fexpr__98819.call(null,G__98814));
})(),(function (){var fexpr__98820 = new cljs.core.Symbol(null,"??x3","??x3",-411077265,null);
return (fexpr__98820.cljs$core$IFn$_invoke$arity$1 ? fexpr__98820.cljs$core$IFn$_invoke$arity$1(G__98814) : fexpr__98820.call(null,G__98814));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
});
sicmutils.simplify.rules.log_expand = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x1","?x1",697080023,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98821){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__98822 = new cljs.core.Symbol(null,"?x1","?x1",697080023,null);
return (fexpr__98822.cljs$core$IFn$_invoke$arity$1 ? fexpr__98822.cljs$core$IFn$_invoke$arity$1(G__98821) : fexpr__98822.call(null,G__98821));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__98823 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__98823.cljs$core$IFn$_invoke$arity$1 ? fexpr__98823.cljs$core$IFn$_invoke$arity$1(G__98821) : fexpr__98823.call(null,G__98821));
})()], null),(function (){var fexpr__98824 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__98824.cljs$core$IFn$_invoke$arity$1 ? fexpr__98824.cljs$core$IFn$_invoke$arity$1(G__98821) : fexpr__98824.call(null,G__98821));
})()))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x1","?x1",697080023,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98825){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__98826 = new cljs.core.Symbol(null,"?x1","?x1",697080023,null);
return (fexpr__98826.cljs$core$IFn$_invoke$arity$1 ? fexpr__98826.cljs$core$IFn$_invoke$arity$1(G__98825) : fexpr__98826.call(null,G__98825));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__98827 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__98827.cljs$core$IFn$_invoke$arity$1 ? fexpr__98827.cljs$core$IFn$_invoke$arity$1(G__98825) : fexpr__98827.call(null,G__98825));
})()], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?e","?e",-1194391683,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98828){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__98829 = new cljs.core.Symbol(null,"?e","?e",-1194391683,null);
return (fexpr__98829.cljs$core$IFn$_invoke$arity$1 ? fexpr__98829.cljs$core$IFn$_invoke$arity$1(G__98828) : fexpr__98829.call(null,G__98828));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__98830 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98830.cljs$core$IFn$_invoke$arity$1 ? fexpr__98830.cljs$core$IFn$_invoke$arity$1(G__98828) : fexpr__98830.call(null,G__98828));
})()], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.log_extra = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f2","??f2",745277317,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),pattern.rule._EQ__GT_),(function (G__98831){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98832 = new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null);
return (fexpr__98832.cljs$core$IFn$_invoke$arity$1 ? fexpr__98832.cljs$core$IFn$_invoke$arity$1(G__98831) : fexpr__98832.call(null,G__98831));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98833 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98833.cljs$core$IFn$_invoke$arity$1 ? fexpr__98833.cljs$core$IFn$_invoke$arity$1(G__98831) : fexpr__98833.call(null,G__98831));
})(),(function (){var fexpr__98834 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__98834.cljs$core$IFn$_invoke$arity$1 ? fexpr__98834.cljs$core$IFn$_invoke$arity$1(G__98831) : fexpr__98834.call(null,G__98831));
})()], null))], null))], null),(function (){var fexpr__98835 = new cljs.core.Symbol(null,"??f2","??f2",745277317,null);
return (fexpr__98835.cljs$core$IFn$_invoke$arity$1 ? fexpr__98835.cljs$core$IFn$_invoke$arity$1(G__98831) : fexpr__98835.call(null,G__98831));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.canonicalize_partials = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98836){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__98837 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__98837.cljs$core$IFn$_invoke$arity$1 ? fexpr__98837.cljs$core$IFn$_invoke$arity$1(G__98836) : fexpr__98837.call(null,G__98836));
})())),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__98838 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__98838.cljs$core$IFn$_invoke$arity$1 ? fexpr__98838.cljs$core$IFn$_invoke$arity$1(G__98836) : fexpr__98838.call(null,G__98836));
})()))], null)),(function (){var fexpr__98839 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__98839.cljs$core$IFn$_invoke$arity$1 ? fexpr__98839.cljs$core$IFn$_invoke$arity$1(G__98836) : fexpr__98839.call(null,G__98836));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??more","??more",-1836200365,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98840){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__98841 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__98841.cljs$core$IFn$_invoke$arity$1 ? fexpr__98841.cljs$core$IFn$_invoke$arity$1(G__98840) : fexpr__98841.call(null,G__98840));
})())),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__98842 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__98842.cljs$core$IFn$_invoke$arity$1 ? fexpr__98842.cljs$core$IFn$_invoke$arity$1(G__98840) : fexpr__98842.call(null,G__98840));
})()))], null),(function (){var fexpr__98843 = new cljs.core.Symbol(null,"??more","??more",-1836200365,null);
return (fexpr__98843.cljs$core$IFn$_invoke$arity$1 ? fexpr__98843.cljs$core$IFn$_invoke$arity$1(G__98840) : fexpr__98843.call(null,G__98840));
})())),(function (){var fexpr__98844 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__98844.cljs$core$IFn$_invoke$arity$1 ? fexpr__98844.cljs$core$IFn$_invoke$arity$1(G__98840) : fexpr__98844.call(null,G__98840));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98845){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__98846 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__98846.cljs$core$IFn$_invoke$arity$1 ? fexpr__98846.cljs$core$IFn$_invoke$arity$1(G__98845) : fexpr__98846.call(null,G__98845));
})())),(function (){var fexpr__98847 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__98847.cljs$core$IFn$_invoke$arity$1 ? fexpr__98847.cljs$core$IFn$_invoke$arity$1(G__98845) : fexpr__98847.call(null,G__98845));
})()], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__98848 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__98848.cljs$core$IFn$_invoke$arity$1 ? fexpr__98848.cljs$core$IFn$_invoke$arity$1(G__98845) : fexpr__98848.call(null,G__98845));
})()))], null)),(function (){var fexpr__98849 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__98849.cljs$core$IFn$_invoke$arity$1 ? fexpr__98849.cljs$core$IFn$_invoke$arity$1(G__98845) : fexpr__98849.call(null,G__98845));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98850){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__98851 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__98851.cljs$core$IFn$_invoke$arity$1 ? fexpr__98851.cljs$core$IFn$_invoke$arity$1(G__98850) : fexpr__98851.call(null,G__98850));
})())),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__98852 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__98852.cljs$core$IFn$_invoke$arity$1 ? fexpr__98852.cljs$core$IFn$_invoke$arity$1(G__98850) : fexpr__98852.call(null,G__98850));
})())),(function (){var fexpr__98853 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__98853.cljs$core$IFn$_invoke$arity$1 ? fexpr__98853.cljs$core$IFn$_invoke$arity$1(G__98850) : fexpr__98853.call(null,G__98850));
})()], null))], null)),(function (){var fexpr__98854 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__98854.cljs$core$IFn$_invoke$arity$1 ? fexpr__98854.cljs$core$IFn$_invoke$arity$1(G__98850) : fexpr__98854.call(null,G__98850));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98855){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__98856 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__98856.cljs$core$IFn$_invoke$arity$1 ? fexpr__98856.cljs$core$IFn$_invoke$arity$1(G__98855) : fexpr__98856.call(null,G__98855));
})())),(function (){var fexpr__98857 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__98857.cljs$core$IFn$_invoke$arity$1 ? fexpr__98857.cljs$core$IFn$_invoke$arity$1(G__98855) : fexpr__98857.call(null,G__98855));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__98858 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__98858.cljs$core$IFn$_invoke$arity$1 ? fexpr__98858.cljs$core$IFn$_invoke$arity$1(G__98855) : fexpr__98858.call(null,G__98855));
})())),(function (){var fexpr__98859 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__98859.cljs$core$IFn$_invoke$arity$1 ? fexpr__98859.cljs$core$IFn$_invoke$arity$1(G__98855) : fexpr__98859.call(null,G__98855));
})()], null))], null)),(function (){var fexpr__98860 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__98860.cljs$core$IFn$_invoke$arity$1 ? fexpr__98860.cljs$core$IFn$_invoke$arity$1(G__98855) : fexpr__98860.call(null,G__98855));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??more","??more",-1836200365,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98861){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__98862 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__98862.cljs$core$IFn$_invoke$arity$1 ? fexpr__98862.cljs$core$IFn$_invoke$arity$1(G__98861) : fexpr__98862.call(null,G__98861));
})())),(function (){var fexpr__98863 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__98863.cljs$core$IFn$_invoke$arity$1 ? fexpr__98863.cljs$core$IFn$_invoke$arity$1(G__98861) : fexpr__98863.call(null,G__98861));
})()], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__98864 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__98864.cljs$core$IFn$_invoke$arity$1 ? fexpr__98864.cljs$core$IFn$_invoke$arity$1(G__98861) : fexpr__98864.call(null,G__98861));
})()))], null),(function (){var fexpr__98865 = new cljs.core.Symbol(null,"??more","??more",-1836200365,null);
return (fexpr__98865.cljs$core$IFn$_invoke$arity$1 ? fexpr__98865.cljs$core$IFn$_invoke$arity$1(G__98861) : fexpr__98865.call(null,G__98861));
})())),(function (){var fexpr__98866 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__98866.cljs$core$IFn$_invoke$arity$1 ? fexpr__98866.cljs$core$IFn$_invoke$arity$1(G__98861) : fexpr__98866.call(null,G__98861));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??more","??more",-1836200365,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98867){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__98868 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__98868.cljs$core$IFn$_invoke$arity$1 ? fexpr__98868.cljs$core$IFn$_invoke$arity$1(G__98867) : fexpr__98868.call(null,G__98867));
})())),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__98869 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__98869.cljs$core$IFn$_invoke$arity$1 ? fexpr__98869.cljs$core$IFn$_invoke$arity$1(G__98867) : fexpr__98869.call(null,G__98867));
})())),(function (){var fexpr__98870 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__98870.cljs$core$IFn$_invoke$arity$1 ? fexpr__98870.cljs$core$IFn$_invoke$arity$1(G__98867) : fexpr__98870.call(null,G__98867));
})()], null))], null),(function (){var fexpr__98871 = new cljs.core.Symbol(null,"??more","??more",-1836200365,null);
return (fexpr__98871.cljs$core$IFn$_invoke$arity$1 ? fexpr__98871.cljs$core$IFn$_invoke$arity$1(G__98867) : fexpr__98871.call(null,G__98867));
})())),(function (){var fexpr__98872 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__98872.cljs$core$IFn$_invoke$arity$1 ? fexpr__98872.cljs$core$IFn$_invoke$arity$1(G__98867) : fexpr__98872.call(null,G__98867));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??more","??more",-1836200365,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98873){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__98874 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__98874.cljs$core$IFn$_invoke$arity$1 ? fexpr__98874.cljs$core$IFn$_invoke$arity$1(G__98873) : fexpr__98874.call(null,G__98873));
})())),(function (){var fexpr__98875 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__98875.cljs$core$IFn$_invoke$arity$1 ? fexpr__98875.cljs$core$IFn$_invoke$arity$1(G__98873) : fexpr__98875.call(null,G__98873));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__98876 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__98876.cljs$core$IFn$_invoke$arity$1 ? fexpr__98876.cljs$core$IFn$_invoke$arity$1(G__98873) : fexpr__98876.call(null,G__98873));
})())),(function (){var fexpr__98877 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__98877.cljs$core$IFn$_invoke$arity$1 ? fexpr__98877.cljs$core$IFn$_invoke$arity$1(G__98873) : fexpr__98877.call(null,G__98873));
})()], null))], null),(function (){var fexpr__98878 = new cljs.core.Symbol(null,"??more","??more",-1836200365,null);
return (fexpr__98878.cljs$core$IFn$_invoke$arity$1 ? fexpr__98878.cljs$core$IFn$_invoke$arity$1(G__98873) : fexpr__98878.call(null,G__98873));
})())),(function (){var fexpr__98879 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__98879.cljs$core$IFn$_invoke$arity$1 ? fexpr__98879.cljs$core$IFn$_invoke$arity$1(G__98873) : fexpr__98879.call(null,G__98873));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0)),pattern.rule.guard((function (_){
return sicmutils.simplify.rules._STAR_commute_partials_QMARK__STAR_;
}),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??zs","??zs",1863806627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??args","??args",-2100991912,null),null,(1),null)),(2),null)),(function (p__98880){
var map__98881 = p__98880;
var map__98881__$1 = cljs.core.__destructure_map(map__98881);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98881__$1,new cljs.core.Symbol(null,"??i","??i",-474049037,null));
var j = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98881__$1,new cljs.core.Symbol(null,"??j","??j",1098328567,null));
return (cljs.core.compare(cljs.core.vec(i),cljs.core.vec(j)) > (0));
})),(function (G__98882){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98883 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__98883.cljs$core$IFn$_invoke$arity$1 ? fexpr__98883.cljs$core$IFn$_invoke$arity$1(G__98882) : fexpr__98883.call(null,G__98882));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__98884 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__98884.cljs$core$IFn$_invoke$arity$1 ? fexpr__98884.cljs$core$IFn$_invoke$arity$1(G__98882) : fexpr__98884.call(null,G__98882));
})()))], null),(function (){var fexpr__98885 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__98885.cljs$core$IFn$_invoke$arity$1 ? fexpr__98885.cljs$core$IFn$_invoke$arity$1(G__98882) : fexpr__98885.call(null,G__98882));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__98886 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__98886.cljs$core$IFn$_invoke$arity$1 ? fexpr__98886.cljs$core$IFn$_invoke$arity$1(G__98882) : fexpr__98886.call(null,G__98882));
})()))], null),(function (){var fexpr__98887 = new cljs.core.Symbol(null,"??zs","??zs",1863806627,null);
return (fexpr__98887.cljs$core$IFn$_invoke$arity$1 ? fexpr__98887.cljs$core$IFn$_invoke$arity$1(G__98882) : fexpr__98887.call(null,G__98882));
})()], 0))),(function (){var fexpr__98888 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__98888.cljs$core$IFn$_invoke$arity$1 ? fexpr__98888.cljs$core$IFn$_invoke$arity$1(G__98882) : fexpr__98888.call(null,G__98882));
})()], null))], null),(function (){var fexpr__98889 = new cljs.core.Symbol(null,"??args","??args",-2100991912,null);
return (fexpr__98889.cljs$core$IFn$_invoke$arity$1 ? fexpr__98889.cljs$core$IFn$_invoke$arity$1(G__98882) : fexpr__98889.call(null,G__98882));
})()));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})))], 0));
sicmutils.simplify.rules.trig__GT_sincos = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98890){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__98891 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98891.cljs$core$IFn$_invoke$arity$1 ? fexpr__98891.cljs$core$IFn$_invoke$arity$1(G__98890) : fexpr__98891.call(null,G__98890));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__98892 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98892.cljs$core$IFn$_invoke$arity$1 ? fexpr__98892.cljs$core$IFn$_invoke$arity$1(G__98890) : fexpr__98892.call(null,G__98890));
})()], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cot","cot",-1635649012,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98893){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__98894 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98894.cljs$core$IFn$_invoke$arity$1 ? fexpr__98894.cljs$core$IFn$_invoke$arity$1(G__98893) : fexpr__98894.call(null,G__98893));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__98895 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98895.cljs$core$IFn$_invoke$arity$1 ? fexpr__98895.cljs$core$IFn$_invoke$arity$1(G__98893) : fexpr__98895.call(null,G__98893));
})()], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sec","sec",60154974,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98896){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__98897 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98897.cljs$core$IFn$_invoke$arity$1 ? fexpr__98897.cljs$core$IFn$_invoke$arity$1(G__98896) : fexpr__98897.call(null,G__98896));
})()], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"csc","csc",-427853492,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98898){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__98899 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98899.cljs$core$IFn$_invoke$arity$1 ? fexpr__98899.cljs$core$IFn$_invoke$arity$1(G__98898) : fexpr__98899.call(null,G__98898));
})()], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98900){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(function (){var fexpr__98901 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__98901.cljs$core$IFn$_invoke$arity$1 ? fexpr__98901.cljs$core$IFn$_invoke$arity$1(G__98900) : fexpr__98901.call(null,G__98900));
})(),(function (){var fexpr__98902 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98902.cljs$core$IFn$_invoke$arity$1 ? fexpr__98902.cljs$core$IFn$_invoke$arity$1(G__98900) : fexpr__98902.call(null,G__98900));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98903){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(function (){var fexpr__98904 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__98904.cljs$core$IFn$_invoke$arity$1 ? fexpr__98904.cljs$core$IFn$_invoke$arity$1(G__98903) : fexpr__98904.call(null,G__98903));
})(),(1)], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.sincos__GT_trig = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98905){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(function (){var fexpr__98906 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98906.cljs$core$IFn$_invoke$arity$1 ? fexpr__98906.cljs$core$IFn$_invoke$arity$1(G__98905) : fexpr__98906.call(null,G__98905));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98907){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98908 = new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null);
return (fexpr__98908.cljs$core$IFn$_invoke$arity$1 ? fexpr__98908.cljs$core$IFn$_invoke$arity$1(G__98907) : fexpr__98908.call(null,G__98907));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(function (){var fexpr__98909 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98909.cljs$core$IFn$_invoke$arity$1 ? fexpr__98909.cljs$core$IFn$_invoke$arity$1(G__98907) : fexpr__98909.call(null,G__98907));
})()], null))], null),(function (){var fexpr__98910 = new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null);
return (fexpr__98910.cljs$core$IFn$_invoke$arity$1 ? fexpr__98910.cljs$core$IFn$_invoke$arity$1(G__98907) : fexpr__98910.call(null,G__98907));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??d1","??d1",1286203826,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??d2","??d2",525254907,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98911){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(function (){var fexpr__98912 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98912.cljs$core$IFn$_invoke$arity$1 ? fexpr__98912.cljs$core$IFn$_invoke$arity$1(G__98911) : fexpr__98912.call(null,G__98911));
})()], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98913 = new cljs.core.Symbol(null,"??d1","??d1",1286203826,null);
return (fexpr__98913.cljs$core$IFn$_invoke$arity$1 ? fexpr__98913.cljs$core$IFn$_invoke$arity$1(G__98911) : fexpr__98913.call(null,G__98911));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98914 = new cljs.core.Symbol(null,"??d2","??d2",525254907,null);
return (fexpr__98914.cljs$core$IFn$_invoke$arity$1 ? fexpr__98914.cljs$core$IFn$_invoke$arity$1(G__98911) : fexpr__98914.call(null,G__98911));
})()], 0)))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??d1","??d1",1286203826,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??d2","??d2",525254907,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98915){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98916 = new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null);
return (fexpr__98916.cljs$core$IFn$_invoke$arity$1 ? fexpr__98916.cljs$core$IFn$_invoke$arity$1(G__98915) : fexpr__98916.call(null,G__98915));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(function (){var fexpr__98917 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98917.cljs$core$IFn$_invoke$arity$1 ? fexpr__98917.cljs$core$IFn$_invoke$arity$1(G__98915) : fexpr__98917.call(null,G__98915));
})()], null))], null),(function (){var fexpr__98918 = new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null);
return (fexpr__98918.cljs$core$IFn$_invoke$arity$1 ? fexpr__98918.cljs$core$IFn$_invoke$arity$1(G__98915) : fexpr__98918.call(null,G__98915));
})()], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98919 = new cljs.core.Symbol(null,"??d1","??d1",1286203826,null);
return (fexpr__98919.cljs$core$IFn$_invoke$arity$1 ? fexpr__98919.cljs$core$IFn$_invoke$arity$1(G__98915) : fexpr__98919.call(null,G__98915));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98920 = new cljs.core.Symbol(null,"??d2","??d2",525254907,null);
return (fexpr__98920.cljs$core$IFn$_invoke$arity$1 ? fexpr__98920.cljs$core$IFn$_invoke$arity$1(G__98915) : fexpr__98920.call(null,G__98915));
})()], 0)))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.triginv = (function sicmutils$simplify$rules$triginv(simplify){
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var sym_COLON_atan = sicmutils.numsymb.symbolic_operator(new cljs.core.Symbol(null,"atan","atan",-1026550135,null));
return pattern.rule.guard((function (_){
return sicmutils.simplify.rules._STAR_aggressive_atan_simplify_QMARK__STAR_;
}),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(3),null))),(function (p__98921){
var map__98922 = p__98921;
var map__98922__$1 = cljs.core.__destructure_map(map__98922);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98922__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98922__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(ys,xs))){
if(sicmutils.value.number_QMARK_(ys)){
if(cljs.core.truth_(sicmutils.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(ys))){
return cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(3),new cljs.core.Symbol(null,"pi","pi",176774184,null)),(4)));
} else {
return cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(4));
}
} else {
var and__4251__auto__ = sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"positive?","positive?",1455224686,null),(new cljs.core.List(null,xs,null,(1),null)),(2),null)),new cljs.core.Symbol(null,"aggressive-atan-1","aggressive-atan-1",-730258103,null));
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(4));
} else {
return and__4251__auto__;
}
}
} else {
if(((sicmutils.value.number_QMARK_(ys)) && (sicmutils.value.number_QMARK_(xs)))){
return (sym_COLON_atan.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_atan.cljs$core$IFn$_invoke$arity$2(ys,xs) : sym_COLON_atan.call(null,ys,xs));
} else {
var s = (function (){var G__98923 = (new cljs.core.List(null,new cljs.core.Symbol(null,"gcd","gcd",1659909537,null),(new cljs.core.List(null,ys,(new cljs.core.List(null,xs,null,(1),null)),(2),null)),(3),null));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__98923) : simplify.call(null,G__98923));
})();
if(sicmutils.value.one_QMARK_(s)){
return null;
} else {
var and__4251__auto__ = sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"positive?","positive?",1455224686,null),(new cljs.core.List(null,s,null,(1),null)),(2),null)),new cljs.core.Symbol(null,"aggressive-atan-2","aggressive-atan-2",-628426094,null));
if(cljs.core.truth_(and__4251__auto__)){
var yv = (function (){var G__98924 = (new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,ys,(new cljs.core.List(null,s,null,(1),null)),(2),null)),(3),null));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__98924) : simplify.call(null,G__98924));
})();
var xv = (function (){var G__98925 = (new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,xs,(new cljs.core.List(null,s,null,(1),null)),(2),null)),(3),null));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__98925) : simplify.call(null,G__98925));
})();
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),yv,xv], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
} else {
return and__4251__auto__;
}
}
}
}
})));
})(),pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98926){
var r__20948__auto__ = (function (){var fexpr__98927 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98927.cljs$core$IFn$_invoke$arity$1 ? fexpr__98927.cljs$core$IFn$_invoke$arity$1(G__98926) : fexpr__98927.call(null,G__98926));
})();
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98928){
var r__20948__auto__ = (function (){var fexpr__98929 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98929.cljs$core$IFn$_invoke$arity$1 ? fexpr__98929.cljs$core$IFn$_invoke$arity$1(G__98928) : fexpr__98929.call(null,G__98928));
})();
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98930){
var r__20948__auto__ = (function (){var fexpr__98931 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98931.cljs$core$IFn$_invoke$arity$1 ? fexpr__98931.cljs$core$IFn$_invoke$arity$1(G__98930) : fexpr__98931.call(null,G__98930));
})();
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98932){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98933 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98933.cljs$core$IFn$_invoke$arity$1 ? fexpr__98933.cljs$core$IFn$_invoke$arity$1(G__98932) : fexpr__98933.call(null,G__98932));
})(),(2)], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98934){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98935 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__98935.cljs$core$IFn$_invoke$arity$1 ? fexpr__98935.cljs$core$IFn$_invoke$arity$1(G__98934) : fexpr__98935.call(null,G__98934));
})(),(2)], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98936){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__98937 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__98937.cljs$core$IFn$_invoke$arity$1 ? fexpr__98937.cljs$core$IFn$_invoke$arity$1(G__98936) : fexpr__98937.call(null,G__98936));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98938 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__98938.cljs$core$IFn$_invoke$arity$1 ? fexpr__98938.cljs$core$IFn$_invoke$arity$1(G__98936) : fexpr__98938.call(null,G__98936));
})(),(2)], null))], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98939){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98940 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98940.cljs$core$IFn$_invoke$arity$1 ? fexpr__98940.cljs$core$IFn$_invoke$arity$1(G__98939) : fexpr__98940.call(null,G__98939));
})(),(2)], null))], null))], null)),(function (){var fexpr__98941 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98941.cljs$core$IFn$_invoke$arity$1 ? fexpr__98941.cljs$core$IFn$_invoke$arity$1(G__98939) : fexpr__98941.call(null,G__98939));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?b","?b",1575118075,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98942){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__98943 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__98943.cljs$core$IFn$_invoke$arity$1 ? fexpr__98943.cljs$core$IFn$_invoke$arity$1(G__98942) : fexpr__98943.call(null,G__98942));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98944 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__98944.cljs$core$IFn$_invoke$arity$1 ? fexpr__98944.cljs$core$IFn$_invoke$arity$1(G__98942) : fexpr__98944.call(null,G__98942));
})(),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98945 = new cljs.core.Symbol(null,"?b","?b",1575118075,null);
return (fexpr__98945.cljs$core$IFn$_invoke$arity$1 ? fexpr__98945.cljs$core$IFn$_invoke$arity$1(G__98942) : fexpr__98945.call(null,G__98942));
})(),(2)], null))], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?b","?b",1575118075,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98946){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__98947 = new cljs.core.Symbol(null,"?b","?b",1575118075,null);
return (fexpr__98947.cljs$core$IFn$_invoke$arity$1 ? fexpr__98947.cljs$core$IFn$_invoke$arity$1(G__98946) : fexpr__98947.call(null,G__98946));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98948 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__98948.cljs$core$IFn$_invoke$arity$1 ? fexpr__98948.cljs$core$IFn$_invoke$arity$1(G__98946) : fexpr__98948.call(null,G__98946));
})(),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98949 = new cljs.core.Symbol(null,"?b","?b",1575118075,null);
return (fexpr__98949.cljs$core$IFn$_invoke$arity$1 ? fexpr__98949.cljs$core$IFn$_invoke$arity$1(G__98946) : fexpr__98949.call(null,G__98946));
})(),(2)], null))], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0)),pattern.rule.guard((function (_){
return sicmutils.simplify.rules._STAR_inverse_simplify_QMARK__STAR_;
}),pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(function (p__98950){
var map__98951 = p__98950;
var map__98951__$1 = cljs.core.__destructure_map(map__98951);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98951__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"asin","asin",-904130570,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),xs], null))], null)),xs], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})(),new cljs.core.Symbol(null,"asin-sin","asin-sin",1881703610,null));
})),(function (G__98952){
var r__20948__auto__ = (function (){var fexpr__98953 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98953.cljs$core$IFn$_invoke$arity$1 ? fexpr__98953.cljs$core$IFn$_invoke$arity$1(G__98952) : fexpr__98953.call(null,G__98952));
})();
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(function (p__98954){
var map__98955 = p__98954;
var map__98955__$1 = cljs.core.__destructure_map(map__98955);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98955__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"acos","acos",353741763,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),xs], null))], null)),xs], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})(),new cljs.core.Symbol(null,"acos-cos","acos-cos",-652558231,null));
})),(function (G__98956){
var r__20948__auto__ = (function (){var fexpr__98957 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98957.cljs$core$IFn$_invoke$arity$1 ? fexpr__98957.cljs$core$IFn$_invoke$arity$1(G__98956) : fexpr__98957.call(null,G__98956));
})();
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(function (p__98958){
var map__98959 = p__98958;
var map__98959__$1 = cljs.core.__destructure_map(map__98959);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98959__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tan","tan",-1380825876,null),xs], null))], null)),xs], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})(),new cljs.core.Symbol(null,"atan-tan","atan-tan",-478846145,null));
})),(function (G__98960){
var r__20948__auto__ = (function (){var fexpr__98961 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98961.cljs$core$IFn$_invoke$arity$1 ? fexpr__98961.cljs$core$IFn$_invoke$arity$1(G__98960) : fexpr__98961.call(null,G__98960));
})();
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(function (p__98962){
var map__98963 = p__98962;
var map__98963__$1 = cljs.core.__destructure_map(map__98963);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98963__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),xs], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),xs], null))], null)),xs], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})(),new cljs.core.Symbol(null,"atan-sin-cos","atan-sin-cos",-761958387,null));
})),(function (G__98964){
var r__20948__auto__ = (function (){var fexpr__98965 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98965.cljs$core$IFn$_invoke$arity$1 ? fexpr__98965.cljs$core$IFn$_invoke$arity$1(G__98964) : fexpr__98965.call(null,G__98964));
})();
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(function (p__98966){
var map__98967 = p__98966;
var map__98967__$1 = cljs.core.__destructure_map(map__98967);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98967__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"asin","asin",-904130570,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),xs], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null)),xs], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})(),new cljs.core.Symbol(null,"asin-cos","asin-cos",-28391344,null));
})),(function (G__98968){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null)),(function (){var fexpr__98969 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98969.cljs$core$IFn$_invoke$arity$1 ? fexpr__98969.cljs$core$IFn$_invoke$arity$1(G__98968) : fexpr__98969.call(null,G__98968));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(function (p__98970){
var map__98971 = p__98970;
var map__98971__$1 = cljs.core.__destructure_map(map__98971);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98971__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"acos","acos",353741763,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),xs], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null)),xs], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})(),new cljs.core.Symbol(null,"acos-sin","acos-sin",1513257305,null));
})),(function (G__98972){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null)),(function (){var fexpr__98973 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98973.cljs$core$IFn$_invoke$arity$1 ? fexpr__98973.cljs$core$IFn$_invoke$arity$1(G__98972) : fexpr__98973.call(null,G__98972));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0)))], 0));
});
/**
 * TODO consolidate the symbolic checkers here with the constructor
 *   simplifications in [[trig:special]]. 
 */
sicmutils.simplify.rules.trig_COLON_special = (function sicmutils$simplify$rules$trig_COLON_special(simplify){
var sym_COLON__PLUS_ = sicmutils.numsymb.symbolic_operator(new cljs.core.Symbol(null,"+","+",-740910886,null));
var sym_COLON__ = sicmutils.numsymb.symbolic_operator(new cljs.core.Symbol(null,"-","-",-471816912,null));
var sym_COLON__STAR_ = sicmutils.numsymb.symbolic_operator(new cljs.core.Symbol(null,"*","*",345799209,null));
var sym_COLON_div = sicmutils.numsymb.symbolic_operator(new cljs.core.Symbol(null,"/","/",-1371932971,null));
var zero_mod_pi_QMARK_ = (function sicmutils$simplify$rules$trig_COLON_special_$_zero_mod_pi_QMARK_(x){
var or__4253__auto__ = (sicmutils.numsymb.zero_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.zero_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb.zero_mod_pi_QMARK_.call(null,x));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.value.integral_QMARK_((function (){var G__99028 = (function (){var G__99029 = x;
var G__99030 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99029,G__99030) : sym_COLON_div.call(null,G__99029,G__99030));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99028) : simplify.call(null,G__99028));
})());
}
});
var pi_over_2_mod_2pi_QMARK_ = (function sicmutils$simplify$rules$trig_COLON_special_$_pi_over_2_mod_2pi_QMARK_(x){
var or__4253__auto__ = (sicmutils.numsymb.pi_over_2_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.pi_over_2_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb.pi_over_2_mod_2pi_QMARK_.call(null,x));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.value.integral_QMARK_((function (){var G__99031 = (function (){var G__99032 = (function (){var G__99034 = x;
var G__99035 = (function (){var G__99036 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
var G__99037 = (2);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99036,G__99037) : sym_COLON_div.call(null,G__99036,G__99037));
})();
return (sym_COLON__.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__.cljs$core$IFn$_invoke$arity$2(G__99034,G__99035) : sym_COLON__.call(null,G__99034,G__99035));
})();
var G__99033 = (function (){var G__99038 = (2);
var G__99039 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(G__99038,G__99039) : sym_COLON__STAR_.call(null,G__99038,G__99039));
})();
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99032,G__99033) : sym_COLON_div.call(null,G__99032,G__99033));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99031) : simplify.call(null,G__99031));
})());
}
});
var _pi_over_2_mod_2pi_QMARK_ = (function sicmutils$simplify$rules$trig_COLON_special_$__pi_over_2_mod_2pi_QMARK_(x){
var or__4253__auto__ = (sicmutils.numsymb._pi_over_2_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb._pi_over_2_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb._pi_over_2_mod_2pi_QMARK_.call(null,x));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.value.integral_QMARK_((function (){var G__99040 = (function (){var G__99041 = (function (){var G__99043 = x;
var G__99044 = (function (){var G__99045 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
var G__99046 = (2);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99045,G__99046) : sym_COLON_div.call(null,G__99045,G__99046));
})();
return (sym_COLON__PLUS_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__PLUS_.cljs$core$IFn$_invoke$arity$2(G__99043,G__99044) : sym_COLON__PLUS_.call(null,G__99043,G__99044));
})();
var G__99042 = (function (){var G__99047 = (2);
var G__99048 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(G__99047,G__99048) : sym_COLON__STAR_.call(null,G__99047,G__99048));
})();
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99041,G__99042) : sym_COLON_div.call(null,G__99041,G__99042));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99040) : simplify.call(null,G__99040));
})());
}
});
var pi_over_2_mod_pi_QMARK_ = (function sicmutils$simplify$rules$trig_COLON_special_$_pi_over_2_mod_pi_QMARK_(x){
var or__4253__auto__ = (sicmutils.numsymb.pi_over_2_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.pi_over_2_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb.pi_over_2_mod_pi_QMARK_.call(null,x));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.value.integral_QMARK_((function (){var G__99049 = (function (){var G__99050 = (function (){var G__99052 = x;
var G__99053 = (function (){var G__99054 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
var G__99055 = (2);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99054,G__99055) : sym_COLON_div.call(null,G__99054,G__99055));
})();
return (sym_COLON__.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__.cljs$core$IFn$_invoke$arity$2(G__99052,G__99053) : sym_COLON__.call(null,G__99052,G__99053));
})();
var G__99051 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99050,G__99051) : sym_COLON_div.call(null,G__99050,G__99051));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99049) : simplify.call(null,G__99049));
})());
}
});
var zero_mod_2pi_QMARK_ = (function sicmutils$simplify$rules$trig_COLON_special_$_zero_mod_2pi_QMARK_(x){
var or__4253__auto__ = (sicmutils.numsymb.zero_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.zero_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb.zero_mod_2pi_QMARK_.call(null,x));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.value.integral_QMARK_((function (){var G__99056 = (function (){var G__99057 = x;
var G__99058 = (function (){var G__99059 = (2);
var G__99060 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(G__99059,G__99060) : sym_COLON__STAR_.call(null,G__99059,G__99060));
})();
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99057,G__99058) : sym_COLON_div.call(null,G__99057,G__99058));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99056) : simplify.call(null,G__99056));
})());
}
});
var pi_mod_2pi_QMARK_ = (function sicmutils$simplify$rules$trig_COLON_special_$_pi_mod_2pi_QMARK_(x){
var or__4253__auto__ = (sicmutils.numsymb.pi_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.pi_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb.pi_mod_2pi_QMARK_.call(null,x));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.value.integral_QMARK_((function (){var G__99061 = (function (){var G__99062 = (function (){var G__99064 = x;
var G__99065 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON__.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__.cljs$core$IFn$_invoke$arity$2(G__99064,G__99065) : sym_COLON__.call(null,G__99064,G__99065));
})();
var G__99063 = (function (){var G__99066 = (2);
var G__99067 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(G__99066,G__99067) : sym_COLON__STAR_.call(null,G__99066,G__99067));
})();
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99062,G__99063) : sym_COLON_div.call(null,G__99062,G__99063));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99061) : simplify.call(null,G__99061));
})());
}
});
var pi_over_4_mod_pi_QMARK_ = (function sicmutils$simplify$rules$trig_COLON_special_$_pi_over_4_mod_pi_QMARK_(x){
var or__4253__auto__ = (sicmutils.numsymb.pi_over_4_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.pi_over_4_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb.pi_over_4_mod_pi_QMARK_.call(null,x));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.value.integral_QMARK_((function (){var G__99068 = (function (){var G__99069 = (function (){var G__99071 = x;
var G__99072 = (function (){var G__99073 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
var G__99074 = (4);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99073,G__99074) : sym_COLON_div.call(null,G__99073,G__99074));
})();
return (sym_COLON__.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__.cljs$core$IFn$_invoke$arity$2(G__99071,G__99072) : sym_COLON__.call(null,G__99071,G__99072));
})();
var G__99070 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99069,G__99070) : sym_COLON_div.call(null,G__99069,G__99070));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99068) : simplify.call(null,G__99068));
})());
}
});
var _pi_over_4_mod_pi_QMARK_ = (function sicmutils$simplify$rules$trig_COLON_special_$__pi_over_4_mod_pi_QMARK_(x){
var or__4253__auto__ = (sicmutils.numsymb._pi_over_4_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb._pi_over_4_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb._pi_over_4_mod_pi_QMARK_.call(null,x));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.value.integral_QMARK_((function (){var G__99075 = (function (){var G__99076 = (function (){var G__99078 = x;
var G__99079 = (function (){var G__99080 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
var G__99081 = (4);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99080,G__99081) : sym_COLON_div.call(null,G__99080,G__99081));
})();
return (sym_COLON__PLUS_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__PLUS_.cljs$core$IFn$_invoke$arity$2(G__99078,G__99079) : sym_COLON__PLUS_.call(null,G__99078,G__99079));
})();
var G__99077 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99076,G__99077) : sym_COLON_div.call(null,G__99076,G__99077));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99075) : simplify.call(null,G__99075));
})());
}
});
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,zero_mod_pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99082){
var r__20948__auto__ = (0);
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,pi_over_2_mod_2pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99083){
var r__20948__auto__ = (1);
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,_pi_over_2_mod_2pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99084){
var r__20948__auto__ = (-1);
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,pi_over_2_mod_pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99085){
var r__20948__auto__ = (0);
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,zero_mod_2pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99086){
var r__20948__auto__ = (1);
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,pi_mod_2pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99087){
var r__20948__auto__ = (-1);
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,zero_mod_pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99088){
var r__20948__auto__ = (0);
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,pi_over_4_mod_pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99089){
var r__20948__auto__ = (1);
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,_pi_over_4_mod_pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99090){
var r__20948__auto__ = (-1);
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
});
/**
 * `sin` is odd, and `cos` is even. we canonicalize by moving the sign
 * out of the first term of the argument.
 */
sicmutils.simplify.rules.angular_parity = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99097){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (p1__99091_SHARP_){
return (- (function (){var G__99098 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99091_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99091_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99098) : p1__99091_SHARP_.call(null,G__99098));
})());
})(G__99097)], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x","??x",-1924511736,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99099){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99092_SHARP_){
return (- (function (){var G__99100 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99092_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99092_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99100) : p1__99092_SHARP_.call(null,G__99100));
})());
})(G__99099)], null),(function (){var fexpr__99101 = new cljs.core.Symbol(null,"??x","??x",-1924511736,null);
return (fexpr__99101.cljs$core$IFn$_invoke$arity$1 ? fexpr__99101.cljs$core$IFn$_invoke$arity$1(G__99099) : fexpr__99101.call(null,G__99099));
})()))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x","??x",-1924511736,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99102){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99093_SHARP_){
return (- (function (){var G__99103 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99093_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99093_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99103) : p1__99093_SHARP_.call(null,G__99103));
})());
})(G__99102)], null),(function (){var fexpr__99104 = new cljs.core.Symbol(null,"??x","??x",-1924511736,null);
return (fexpr__99104.cljs$core$IFn$_invoke$arity$1 ? fexpr__99104.cljs$core$IFn$_invoke$arity$1(G__99102) : fexpr__99104.call(null,G__99102));
})()))], null),(function (){var fexpr__99105 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__99105.cljs$core$IFn$_invoke$arity$1 ? fexpr__99105.cljs$core$IFn$_invoke$arity$1(G__99102) : fexpr__99105.call(null,G__99102));
})()))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99106){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (p1__99094_SHARP_){
return (- (function (){var G__99107 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99094_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99094_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99107) : p1__99094_SHARP_.call(null,G__99107));
})());
})(G__99106)], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x","??x",-1924511736,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99108){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99095_SHARP_){
return (- (function (){var G__99109 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99095_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99095_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99109) : p1__99095_SHARP_.call(null,G__99109));
})());
})(G__99108)], null),(function (){var fexpr__99110 = new cljs.core.Symbol(null,"??x","??x",-1924511736,null);
return (fexpr__99110.cljs$core$IFn$_invoke$arity$1 ? fexpr__99110.cljs$core$IFn$_invoke$arity$1(G__99108) : fexpr__99110.call(null,G__99108));
})()))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x","??x",-1924511736,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99111){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99096_SHARP_){
return (- (function (){var G__99112 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99096_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99096_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99112) : p1__99096_SHARP_.call(null,G__99112));
})());
})(G__99111)], null),(function (){var fexpr__99113 = new cljs.core.Symbol(null,"??x","??x",-1924511736,null);
return (fexpr__99113.cljs$core$IFn$_invoke$arity$1 ? fexpr__99113.cljs$core$IFn$_invoke$arity$1(G__99111) : fexpr__99113.call(null,G__99111));
})()))], null),(function (){var fexpr__99114 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__99114.cljs$core$IFn$_invoke$arity$1 ? fexpr__99114.cljs$core$IFn$_invoke$arity$1(G__99111) : fexpr__99114.call(null,G__99111));
})()))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.expand_multiangle = (function (){var exact_integer_GT_3_QMARK_ = (function sicmutils$simplify$rules$exact_integer_GT_3_QMARK_(x){
return ((sicmutils.value.integral_QMARK_(x)) && (((sicmutils.value.exact_QMARK_(x)) && ((x > (3))))));
});
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(2),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99119){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99120 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99120.cljs$core$IFn$_invoke$arity$1 ? fexpr__99120.cljs$core$IFn$_invoke$arity$1(G__99119) : fexpr__99120.call(null,G__99119));
})()], null),(function (){var fexpr__99121 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__99121.cljs$core$IFn$_invoke$arity$1 ? fexpr__99121.cljs$core$IFn$_invoke$arity$1(G__99119) : fexpr__99121.call(null,G__99119));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99122 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99122.cljs$core$IFn$_invoke$arity$1 ? fexpr__99122.cljs$core$IFn$_invoke$arity$1(G__99119) : fexpr__99122.call(null,G__99119));
})()], null),(function (){var fexpr__99123 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__99123.cljs$core$IFn$_invoke$arity$1 ? fexpr__99123.cljs$core$IFn$_invoke$arity$1(G__99119) : fexpr__99123.call(null,G__99119));
})()))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(2),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99124){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99125 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99125.cljs$core$IFn$_invoke$arity$1 ? fexpr__99125.cljs$core$IFn$_invoke$arity$1(G__99124) : fexpr__99125.call(null,G__99124));
})()], null),(function (){var fexpr__99126 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__99126.cljs$core$IFn$_invoke$arity$1 ? fexpr__99126.cljs$core$IFn$_invoke$arity$1(G__99124) : fexpr__99126.call(null,G__99124));
})()))], null)),(2)], null))], null)),(1)], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(3),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99127){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(3),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99128 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99128.cljs$core$IFn$_invoke$arity$1 ? fexpr__99128.cljs$core$IFn$_invoke$arity$1(G__99127) : fexpr__99128.call(null,G__99127));
})()], null),(function (){var fexpr__99129 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__99129.cljs$core$IFn$_invoke$arity$1 ? fexpr__99129.cljs$core$IFn$_invoke$arity$1(G__99127) : fexpr__99129.call(null,G__99127));
})()))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-4),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99130 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99130.cljs$core$IFn$_invoke$arity$1 ? fexpr__99130.cljs$core$IFn$_invoke$arity$1(G__99127) : fexpr__99130.call(null,G__99127));
})()], null),(function (){var fexpr__99131 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__99131.cljs$core$IFn$_invoke$arity$1 ? fexpr__99131.cljs$core$IFn$_invoke$arity$1(G__99127) : fexpr__99131.call(null,G__99127));
})()))], null)),(3)], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(3),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99132){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(4),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99133 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99133.cljs$core$IFn$_invoke$arity$1 ? fexpr__99133.cljs$core$IFn$_invoke$arity$1(G__99132) : fexpr__99133.call(null,G__99132));
})()], null),(function (){var fexpr__99134 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__99134.cljs$core$IFn$_invoke$arity$1 ? fexpr__99134.cljs$core$IFn$_invoke$arity$1(G__99132) : fexpr__99134.call(null,G__99132));
})()))], null)),(3)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-3),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99135 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99135.cljs$core$IFn$_invoke$arity$1 ? fexpr__99135.cljs$core$IFn$_invoke$arity$1(G__99132) : fexpr__99135.call(null,G__99132));
})()], null),(function (){var fexpr__99136 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__99136.cljs$core$IFn$_invoke$arity$1 ? fexpr__99136.cljs$core$IFn$_invoke$arity$1(G__99132) : fexpr__99136.call(null,G__99132));
})()))], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,exact_integer_GT_3_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99137){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99115_SHARP_){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__99138 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99115_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99115_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99138) : p1__99115_SHARP_.call(null,G__99138));
})(),(1));
})(G__99137),(function (){var fexpr__99139 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__99139.cljs$core$IFn$_invoke$arity$1 ? fexpr__99139.cljs$core$IFn$_invoke$arity$1(G__99137) : fexpr__99139.call(null,G__99137));
})()], null),(function (){var fexpr__99140 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__99140.cljs$core$IFn$_invoke$arity$1 ? fexpr__99140.cljs$core$IFn$_invoke$arity$1(G__99137) : fexpr__99140.call(null,G__99137));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99141 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__99141.cljs$core$IFn$_invoke$arity$1 ? fexpr__99141.cljs$core$IFn$_invoke$arity$1(G__99137) : fexpr__99141.call(null,G__99137));
})()], null),(function (){var fexpr__99142 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__99142.cljs$core$IFn$_invoke$arity$1 ? fexpr__99142.cljs$core$IFn$_invoke$arity$1(G__99137) : fexpr__99142.call(null,G__99137));
})()))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99116_SHARP_){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__99143 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99116_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99116_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99143) : p1__99116_SHARP_.call(null,G__99143));
})(),(1));
})(G__99137),(function (){var fexpr__99144 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__99144.cljs$core$IFn$_invoke$arity$1 ? fexpr__99144.cljs$core$IFn$_invoke$arity$1(G__99137) : fexpr__99144.call(null,G__99137));
})()], null),(function (){var fexpr__99145 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__99145.cljs$core$IFn$_invoke$arity$1 ? fexpr__99145.cljs$core$IFn$_invoke$arity$1(G__99137) : fexpr__99145.call(null,G__99137));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99146 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__99146.cljs$core$IFn$_invoke$arity$1 ? fexpr__99146.cljs$core$IFn$_invoke$arity$1(G__99137) : fexpr__99146.call(null,G__99137));
})()], null),(function (){var fexpr__99147 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__99147.cljs$core$IFn$_invoke$arity$1 ? fexpr__99147.cljs$core$IFn$_invoke$arity$1(G__99137) : fexpr__99147.call(null,G__99137));
})()))], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99148){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__99149 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99149.cljs$core$IFn$_invoke$arity$1 ? fexpr__99149.cljs$core$IFn$_invoke$arity$1(G__99148) : fexpr__99149.call(null,G__99148));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99150 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99150.cljs$core$IFn$_invoke$arity$1 ? fexpr__99150.cljs$core$IFn$_invoke$arity$1(G__99148) : fexpr__99150.call(null,G__99148));
})()], null),(function (){var fexpr__99151 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__99151.cljs$core$IFn$_invoke$arity$1 ? fexpr__99151.cljs$core$IFn$_invoke$arity$1(G__99148) : fexpr__99151.call(null,G__99148));
})()))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__99152 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99152.cljs$core$IFn$_invoke$arity$1 ? fexpr__99152.cljs$core$IFn$_invoke$arity$1(G__99148) : fexpr__99152.call(null,G__99148));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99153 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99153.cljs$core$IFn$_invoke$arity$1 ? fexpr__99153.cljs$core$IFn$_invoke$arity$1(G__99148) : fexpr__99153.call(null,G__99148));
})()], null),(function (){var fexpr__99154 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__99154.cljs$core$IFn$_invoke$arity$1 ? fexpr__99154.cljs$core$IFn$_invoke$arity$1(G__99148) : fexpr__99154.call(null,G__99148));
})()))], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"n","n",-2092305744,null),(new cljs.core.List(null,exact_integer_GT_3_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99155){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99117_SHARP_){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__99156 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99117_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99117_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99156) : p1__99117_SHARP_.call(null,G__99156));
})(),(1));
})(G__99155),(function (){var fexpr__99157 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__99157.cljs$core$IFn$_invoke$arity$1 ? fexpr__99157.cljs$core$IFn$_invoke$arity$1(G__99155) : fexpr__99157.call(null,G__99155));
})()], null),(function (){var fexpr__99158 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__99158.cljs$core$IFn$_invoke$arity$1 ? fexpr__99158.cljs$core$IFn$_invoke$arity$1(G__99155) : fexpr__99158.call(null,G__99155));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99159 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__99159.cljs$core$IFn$_invoke$arity$1 ? fexpr__99159.cljs$core$IFn$_invoke$arity$1(G__99155) : fexpr__99159.call(null,G__99155));
})()], null),(function (){var fexpr__99160 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__99160.cljs$core$IFn$_invoke$arity$1 ? fexpr__99160.cljs$core$IFn$_invoke$arity$1(G__99155) : fexpr__99160.call(null,G__99155));
})()))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99118_SHARP_){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__99161 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99118_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99118_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99161) : p1__99118_SHARP_.call(null,G__99161));
})(),(1));
})(G__99155),(function (){var fexpr__99162 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__99162.cljs$core$IFn$_invoke$arity$1 ? fexpr__99162.cljs$core$IFn$_invoke$arity$1(G__99155) : fexpr__99162.call(null,G__99155));
})()], null),(function (){var fexpr__99163 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__99163.cljs$core$IFn$_invoke$arity$1 ? fexpr__99163.cljs$core$IFn$_invoke$arity$1(G__99155) : fexpr__99163.call(null,G__99155));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99164 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__99164.cljs$core$IFn$_invoke$arity$1 ? fexpr__99164.cljs$core$IFn$_invoke$arity$1(G__99155) : fexpr__99164.call(null,G__99155));
})()], null),(function (){var fexpr__99165 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__99165.cljs$core$IFn$_invoke$arity$1 ? fexpr__99165.cljs$core$IFn$_invoke$arity$1(G__99155) : fexpr__99165.call(null,G__99155));
})()))], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99166){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__99167 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99167.cljs$core$IFn$_invoke$arity$1 ? fexpr__99167.cljs$core$IFn$_invoke$arity$1(G__99166) : fexpr__99167.call(null,G__99166));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99168 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99168.cljs$core$IFn$_invoke$arity$1 ? fexpr__99168.cljs$core$IFn$_invoke$arity$1(G__99166) : fexpr__99168.call(null,G__99166));
})()], null),(function (){var fexpr__99169 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__99169.cljs$core$IFn$_invoke$arity$1 ? fexpr__99169.cljs$core$IFn$_invoke$arity$1(G__99166) : fexpr__99169.call(null,G__99166));
})()))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__99170 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99170.cljs$core$IFn$_invoke$arity$1 ? fexpr__99170.cljs$core$IFn$_invoke$arity$1(G__99166) : fexpr__99170.call(null,G__99166));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99171 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99171.cljs$core$IFn$_invoke$arity$1 ? fexpr__99171.cljs$core$IFn$_invoke$arity$1(G__99166) : fexpr__99171.call(null,G__99166));
})()], null),(function (){var fexpr__99172 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__99172.cljs$core$IFn$_invoke$arity$1 ? fexpr__99172.cljs$core$IFn$_invoke$arity$1(G__99166) : fexpr__99172.call(null,G__99166));
})()))], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
})();
sicmutils.simplify.rules.trig_COLON_sum__GT_product = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__99173){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99174 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99174.cljs$core$IFn$_invoke$arity$1 ? fexpr__99174.cljs$core$IFn$_invoke$arity$1(G__99173) : fexpr__99174.call(null,G__99173));
})(),(function (){var fexpr__99175 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99175.cljs$core$IFn$_invoke$arity$1 ? fexpr__99175.cljs$core$IFn$_invoke$arity$1(G__99173) : fexpr__99175.call(null,G__99173));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99176 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99176.cljs$core$IFn$_invoke$arity$1 ? fexpr__99176.cljs$core$IFn$_invoke$arity$1(G__99173) : fexpr__99176.call(null,G__99173));
})(),(function (){var fexpr__99177 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99177.cljs$core$IFn$_invoke$arity$1 ? fexpr__99177.cljs$core$IFn$_invoke$arity$1(G__99173) : fexpr__99177.call(null,G__99173));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__99178 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__99178.cljs$core$IFn$_invoke$arity$1 ? fexpr__99178.cljs$core$IFn$_invoke$arity$1(G__99173) : fexpr__99178.call(null,G__99173));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99179 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__99179.cljs$core$IFn$_invoke$arity$1 ? fexpr__99179.cljs$core$IFn$_invoke$arity$1(G__99173) : fexpr__99179.call(null,G__99173));
})(),(function (){var fexpr__99180 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__99180.cljs$core$IFn$_invoke$arity$1 ? fexpr__99180.cljs$core$IFn$_invoke$arity$1(G__99173) : fexpr__99180.call(null,G__99173));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__99181){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99182 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99182.cljs$core$IFn$_invoke$arity$1 ? fexpr__99182.cljs$core$IFn$_invoke$arity$1(G__99181) : fexpr__99182.call(null,G__99181));
})(),(function (){var fexpr__99183 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99183.cljs$core$IFn$_invoke$arity$1 ? fexpr__99183.cljs$core$IFn$_invoke$arity$1(G__99181) : fexpr__99183.call(null,G__99181));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99184 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99184.cljs$core$IFn$_invoke$arity$1 ? fexpr__99184.cljs$core$IFn$_invoke$arity$1(G__99181) : fexpr__99184.call(null,G__99181));
})(),(function (){var fexpr__99185 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99185.cljs$core$IFn$_invoke$arity$1 ? fexpr__99185.cljs$core$IFn$_invoke$arity$1(G__99181) : fexpr__99185.call(null,G__99181));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__99186 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__99186.cljs$core$IFn$_invoke$arity$1 ? fexpr__99186.cljs$core$IFn$_invoke$arity$1(G__99181) : fexpr__99186.call(null,G__99181));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99187 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__99187.cljs$core$IFn$_invoke$arity$1 ? fexpr__99187.cljs$core$IFn$_invoke$arity$1(G__99181) : fexpr__99187.call(null,G__99181));
})(),(function (){var fexpr__99188 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__99188.cljs$core$IFn$_invoke$arity$1 ? fexpr__99188.cljs$core$IFn$_invoke$arity$1(G__99181) : fexpr__99188.call(null,G__99181));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__99189){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99190 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99190.cljs$core$IFn$_invoke$arity$1 ? fexpr__99190.cljs$core$IFn$_invoke$arity$1(G__99189) : fexpr__99190.call(null,G__99189));
})(),(function (){var fexpr__99191 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99191.cljs$core$IFn$_invoke$arity$1 ? fexpr__99191.cljs$core$IFn$_invoke$arity$1(G__99189) : fexpr__99191.call(null,G__99189));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99192 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99192.cljs$core$IFn$_invoke$arity$1 ? fexpr__99192.cljs$core$IFn$_invoke$arity$1(G__99189) : fexpr__99192.call(null,G__99189));
})(),(function (){var fexpr__99193 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99193.cljs$core$IFn$_invoke$arity$1 ? fexpr__99193.cljs$core$IFn$_invoke$arity$1(G__99189) : fexpr__99193.call(null,G__99189));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__99194 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__99194.cljs$core$IFn$_invoke$arity$1 ? fexpr__99194.cljs$core$IFn$_invoke$arity$1(G__99189) : fexpr__99194.call(null,G__99189));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99195 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__99195.cljs$core$IFn$_invoke$arity$1 ? fexpr__99195.cljs$core$IFn$_invoke$arity$1(G__99189) : fexpr__99195.call(null,G__99189));
})(),(function (){var fexpr__99196 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__99196.cljs$core$IFn$_invoke$arity$1 ? fexpr__99196.cljs$core$IFn$_invoke$arity$1(G__99189) : fexpr__99196.call(null,G__99189));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__99197){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99198 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99198.cljs$core$IFn$_invoke$arity$1 ? fexpr__99198.cljs$core$IFn$_invoke$arity$1(G__99197) : fexpr__99198.call(null,G__99197));
})(),(function (){var fexpr__99199 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99199.cljs$core$IFn$_invoke$arity$1 ? fexpr__99199.cljs$core$IFn$_invoke$arity$1(G__99197) : fexpr__99199.call(null,G__99197));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99200 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99200.cljs$core$IFn$_invoke$arity$1 ? fexpr__99200.cljs$core$IFn$_invoke$arity$1(G__99197) : fexpr__99200.call(null,G__99197));
})(),(function (){var fexpr__99201 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99201.cljs$core$IFn$_invoke$arity$1 ? fexpr__99201.cljs$core$IFn$_invoke$arity$1(G__99197) : fexpr__99201.call(null,G__99197));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__99202 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__99202.cljs$core$IFn$_invoke$arity$1 ? fexpr__99202.cljs$core$IFn$_invoke$arity$1(G__99197) : fexpr__99202.call(null,G__99197));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99203 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__99203.cljs$core$IFn$_invoke$arity$1 ? fexpr__99203.cljs$core$IFn$_invoke$arity$1(G__99197) : fexpr__99203.call(null,G__99197));
})(),(function (){var fexpr__99204 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__99204.cljs$core$IFn$_invoke$arity$1 ? fexpr__99204.cljs$core$IFn$_invoke$arity$1(G__99197) : fexpr__99204.call(null,G__99197));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__99205){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99206 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99206.cljs$core$IFn$_invoke$arity$1 ? fexpr__99206.cljs$core$IFn$_invoke$arity$1(G__99205) : fexpr__99206.call(null,G__99205));
})(),(function (){var fexpr__99207 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99207.cljs$core$IFn$_invoke$arity$1 ? fexpr__99207.cljs$core$IFn$_invoke$arity$1(G__99205) : fexpr__99207.call(null,G__99205));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99208 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99208.cljs$core$IFn$_invoke$arity$1 ? fexpr__99208.cljs$core$IFn$_invoke$arity$1(G__99205) : fexpr__99208.call(null,G__99205));
})(),(function (){var fexpr__99209 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99209.cljs$core$IFn$_invoke$arity$1 ? fexpr__99209.cljs$core$IFn$_invoke$arity$1(G__99205) : fexpr__99209.call(null,G__99205));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__99210 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__99210.cljs$core$IFn$_invoke$arity$1 ? fexpr__99210.cljs$core$IFn$_invoke$arity$1(G__99205) : fexpr__99210.call(null,G__99205));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99211 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__99211.cljs$core$IFn$_invoke$arity$1 ? fexpr__99211.cljs$core$IFn$_invoke$arity$1(G__99205) : fexpr__99211.call(null,G__99205));
})(),(function (){var fexpr__99212 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__99212.cljs$core$IFn$_invoke$arity$1 ? fexpr__99212.cljs$core$IFn$_invoke$arity$1(G__99205) : fexpr__99212.call(null,G__99205));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__99213){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99214 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99214.cljs$core$IFn$_invoke$arity$1 ? fexpr__99214.cljs$core$IFn$_invoke$arity$1(G__99213) : fexpr__99214.call(null,G__99213));
})(),(function (){var fexpr__99215 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99215.cljs$core$IFn$_invoke$arity$1 ? fexpr__99215.cljs$core$IFn$_invoke$arity$1(G__99213) : fexpr__99215.call(null,G__99213));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99216 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99216.cljs$core$IFn$_invoke$arity$1 ? fexpr__99216.cljs$core$IFn$_invoke$arity$1(G__99213) : fexpr__99216.call(null,G__99213));
})(),(function (){var fexpr__99217 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99217.cljs$core$IFn$_invoke$arity$1 ? fexpr__99217.cljs$core$IFn$_invoke$arity$1(G__99213) : fexpr__99217.call(null,G__99213));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__99218 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__99218.cljs$core$IFn$_invoke$arity$1 ? fexpr__99218.cljs$core$IFn$_invoke$arity$1(G__99213) : fexpr__99218.call(null,G__99213));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99219 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__99219.cljs$core$IFn$_invoke$arity$1 ? fexpr__99219.cljs$core$IFn$_invoke$arity$1(G__99213) : fexpr__99219.call(null,G__99213));
})(),(function (){var fexpr__99220 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__99220.cljs$core$IFn$_invoke$arity$1 ? fexpr__99220.cljs$core$IFn$_invoke$arity$1(G__99213) : fexpr__99220.call(null,G__99213));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.trig_COLON_product__GT_sum = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??w","??w",1245275022,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__99221){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99222 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99222.cljs$core$IFn$_invoke$arity$1 ? fexpr__99222.cljs$core$IFn$_invoke$arity$1(G__99221) : fexpr__99222.call(null,G__99221));
})(),(function (){var fexpr__99223 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99223.cljs$core$IFn$_invoke$arity$1 ? fexpr__99223.cljs$core$IFn$_invoke$arity$1(G__99221) : fexpr__99223.call(null,G__99221));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99224 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99224.cljs$core$IFn$_invoke$arity$1 ? fexpr__99224.cljs$core$IFn$_invoke$arity$1(G__99221) : fexpr__99224.call(null,G__99221));
})(),(function (){var fexpr__99225 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99225.cljs$core$IFn$_invoke$arity$1 ? fexpr__99225.cljs$core$IFn$_invoke$arity$1(G__99221) : fexpr__99225.call(null,G__99221));
})()], null))], null))], null))], null),(function (){var fexpr__99226 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__99226.cljs$core$IFn$_invoke$arity$1 ? fexpr__99226.cljs$core$IFn$_invoke$arity$1(G__99221) : fexpr__99226.call(null,G__99221));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99227 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__99227.cljs$core$IFn$_invoke$arity$1 ? fexpr__99227.cljs$core$IFn$_invoke$arity$1(G__99221) : fexpr__99227.call(null,G__99221));
})(),(function (){var fexpr__99228 = new cljs.core.Symbol(null,"??w","??w",1245275022,null);
return (fexpr__99228.cljs$core$IFn$_invoke$arity$1 ? fexpr__99228.cljs$core$IFn$_invoke$arity$1(G__99221) : fexpr__99228.call(null,G__99221));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??w","??w",1245275022,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__99229){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99230 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99230.cljs$core$IFn$_invoke$arity$1 ? fexpr__99230.cljs$core$IFn$_invoke$arity$1(G__99229) : fexpr__99230.call(null,G__99229));
})(),(function (){var fexpr__99231 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99231.cljs$core$IFn$_invoke$arity$1 ? fexpr__99231.cljs$core$IFn$_invoke$arity$1(G__99229) : fexpr__99231.call(null,G__99229));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99232 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99232.cljs$core$IFn$_invoke$arity$1 ? fexpr__99232.cljs$core$IFn$_invoke$arity$1(G__99229) : fexpr__99232.call(null,G__99229));
})(),(function (){var fexpr__99233 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99233.cljs$core$IFn$_invoke$arity$1 ? fexpr__99233.cljs$core$IFn$_invoke$arity$1(G__99229) : fexpr__99233.call(null,G__99229));
})()], null))], null))], null))], null),(function (){var fexpr__99234 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__99234.cljs$core$IFn$_invoke$arity$1 ? fexpr__99234.cljs$core$IFn$_invoke$arity$1(G__99229) : fexpr__99234.call(null,G__99229));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99235 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__99235.cljs$core$IFn$_invoke$arity$1 ? fexpr__99235.cljs$core$IFn$_invoke$arity$1(G__99229) : fexpr__99235.call(null,G__99229));
})(),(function (){var fexpr__99236 = new cljs.core.Symbol(null,"??w","??w",1245275022,null);
return (fexpr__99236.cljs$core$IFn$_invoke$arity$1 ? fexpr__99236.cljs$core$IFn$_invoke$arity$1(G__99229) : fexpr__99236.call(null,G__99229));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??w","??w",1245275022,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__99237){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99238 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99238.cljs$core$IFn$_invoke$arity$1 ? fexpr__99238.cljs$core$IFn$_invoke$arity$1(G__99237) : fexpr__99238.call(null,G__99237));
})(),(function (){var fexpr__99239 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99239.cljs$core$IFn$_invoke$arity$1 ? fexpr__99239.cljs$core$IFn$_invoke$arity$1(G__99237) : fexpr__99239.call(null,G__99237));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99240 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99240.cljs$core$IFn$_invoke$arity$1 ? fexpr__99240.cljs$core$IFn$_invoke$arity$1(G__99237) : fexpr__99240.call(null,G__99237));
})(),(function (){var fexpr__99241 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99241.cljs$core$IFn$_invoke$arity$1 ? fexpr__99241.cljs$core$IFn$_invoke$arity$1(G__99237) : fexpr__99241.call(null,G__99237));
})()], null))], null))], null))], null),(function (){var fexpr__99242 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__99242.cljs$core$IFn$_invoke$arity$1 ? fexpr__99242.cljs$core$IFn$_invoke$arity$1(G__99237) : fexpr__99242.call(null,G__99237));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99243 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__99243.cljs$core$IFn$_invoke$arity$1 ? fexpr__99243.cljs$core$IFn$_invoke$arity$1(G__99237) : fexpr__99243.call(null,G__99237));
})(),(function (){var fexpr__99244 = new cljs.core.Symbol(null,"??w","??w",1245275022,null);
return (fexpr__99244.cljs$core$IFn$_invoke$arity$1 ? fexpr__99244.cljs$core$IFn$_invoke$arity$1(G__99237) : fexpr__99244.call(null,G__99237));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??w","??w",1245275022,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__99245){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99246 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99246.cljs$core$IFn$_invoke$arity$1 ? fexpr__99246.cljs$core$IFn$_invoke$arity$1(G__99245) : fexpr__99246.call(null,G__99245));
})(),(function (){var fexpr__99247 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99247.cljs$core$IFn$_invoke$arity$1 ? fexpr__99247.cljs$core$IFn$_invoke$arity$1(G__99245) : fexpr__99247.call(null,G__99245));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99248 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99248.cljs$core$IFn$_invoke$arity$1 ? fexpr__99248.cljs$core$IFn$_invoke$arity$1(G__99245) : fexpr__99248.call(null,G__99245));
})(),(function (){var fexpr__99249 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99249.cljs$core$IFn$_invoke$arity$1 ? fexpr__99249.cljs$core$IFn$_invoke$arity$1(G__99245) : fexpr__99249.call(null,G__99245));
})()], null))], null))], null))], null),(function (){var fexpr__99250 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__99250.cljs$core$IFn$_invoke$arity$1 ? fexpr__99250.cljs$core$IFn$_invoke$arity$1(G__99245) : fexpr__99250.call(null,G__99245));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99251 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__99251.cljs$core$IFn$_invoke$arity$1 ? fexpr__99251.cljs$core$IFn$_invoke$arity$1(G__99245) : fexpr__99251.call(null,G__99245));
})(),(function (){var fexpr__99252 = new cljs.core.Symbol(null,"??w","??w",1245275022,null);
return (fexpr__99252.cljs$core$IFn$_invoke$arity$1 ? fexpr__99252.cljs$core$IFn$_invoke$arity$1(G__99245) : fexpr__99252.call(null,G__99245));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.contract_expt_trig = (function (){var exact_integer_GT_1_QMARK_ = (function sicmutils$simplify$rules$exact_integer_GT_1_QMARK_(x){
return ((sicmutils.value.integral_QMARK_(x)) && (((sicmutils.value.exact_QMARK_(x)) && ((x > (1))))));
});
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,exact_integer_GT_1_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99255){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__99256 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99256.cljs$core$IFn$_invoke$arity$1 ? fexpr__99256.cljs$core$IFn$_invoke$arity$1(G__99255) : fexpr__99256.call(null,G__99255));
})()], null)),(function (p1__99253_SHARP_){
return ((function (){var G__99257 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99253_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99253_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99257) : p1__99253_SHARP_.call(null,G__99257));
})() - (2));
})(G__99255)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),(function (){var fexpr__99258 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99258.cljs$core$IFn$_invoke$arity$1 ? fexpr__99258.cljs$core$IFn$_invoke$arity$1(G__99255) : fexpr__99258.call(null,G__99255));
})()], null))], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,exact_integer_GT_1_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99259){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__99260 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99260.cljs$core$IFn$_invoke$arity$1 ? fexpr__99260.cljs$core$IFn$_invoke$arity$1(G__99259) : fexpr__99260.call(null,G__99259));
})()], null)),(function (p1__99254_SHARP_){
return ((function (){var G__99261 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99254_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99254_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99261) : p1__99254_SHARP_.call(null,G__99261));
})() - (2));
})(G__99259)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),(function (){var fexpr__99262 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99262.cljs$core$IFn$_invoke$arity$1 ? fexpr__99262.cljs$core$IFn$_invoke$arity$1(G__99259) : fexpr__99262.call(null,G__99259));
})()], null))], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
})();
sicmutils.simplify.rules.half_angle = (function sicmutils$simplify$rules$half_angle(simplify){
var sin_half_angle_formula = (function sicmutils$simplify$rules$half_angle_$_sin_half_angle_formula(theta){
var thetas = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(theta) : simplify.call(null,theta));
var and__4251__auto__ = sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"non-negative?","non-negative?",1248641804,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-1),thetas], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(4),new cljs.core.Symbol(null,"pi","pi",176774184,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor","floor",-772394748,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),thetas,cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(4),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null))], null))], null))], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})(),new cljs.core.Symbol(null,"sin-half-angle-formula","sin-half-angle-formula",1943828750,null));
if(cljs.core.truth_(and__4251__auto__)){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),theta], null))], null)),(2)], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
} else {
return and__4251__auto__;
}
});
var cos_half_angle_formula = (function sicmutils$simplify$rules$half_angle_$_cos_half_angle_formula(theta){
var thetas = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(theta) : simplify.call(null,theta));
var and__4251__auto__ = sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"non-negative?","non-negative?",1248641804,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),thetas,cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(4),new cljs.core.Symbol(null,"pi","pi",176774184,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor","floor",-772394748,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),thetas], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(4),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null))], null))], null))], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})(),new cljs.core.Symbol(null,"cos-half-angle-formula","cos-half-angle-formula",-1744663300,null));
if(cljs.core.truth_(and__4251__auto__)){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),theta], null))], null)),(2)], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
} else {
return and__4251__auto__;
}
});
return pattern.rule.attempt(pattern.rule.guard((function (_){
return sicmutils.simplify.rules._STAR_half_angle_simplify_QMARK__STAR_;
}),pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null))),(function (p1__99263_SHARP_){
return sin_half_angle_formula((function (){var G__99267 = p1__99263_SHARP_;
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99268 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99268.cljs$core$IFn$_invoke$arity$1 ? fexpr__99268.cljs$core$IFn$_invoke$arity$1(G__99267) : fexpr__99268.call(null,G__99267));
})()], null),(function (){var fexpr__99269 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__99269.cljs$core$IFn$_invoke$arity$1 ? fexpr__99269.cljs$core$IFn$_invoke$arity$1(G__99267) : fexpr__99269.call(null,G__99267));
})()));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})());
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null))),(function (p1__99264_SHARP_){
return sin_half_angle_formula((function (){var G__99270 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__99264_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99264_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99270) : p1__99264_SHARP_.call(null,G__99270));
})());
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null))),(function (p1__99265_SHARP_){
return cos_half_angle_formula((function (){var G__99271 = p1__99265_SHARP_;
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99272 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99272.cljs$core$IFn$_invoke$arity$1 ? fexpr__99272.cljs$core$IFn$_invoke$arity$1(G__99271) : fexpr__99272.call(null,G__99271));
})()], null),(function (){var fexpr__99273 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__99273.cljs$core$IFn$_invoke$arity$1 ? fexpr__99273.cljs$core$IFn$_invoke$arity$1(G__99271) : fexpr__99273.call(null,G__99271));
})()));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})());
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null))),(function (p1__99266_SHARP_){
return cos_half_angle_formula((function (){var G__99274 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__99266_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99266_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99274) : p1__99266_SHARP_.call(null,G__99274));
})());
}))], 0))], 0))));
});
sicmutils.simplify.rules.sin_sq__GT_cos_sq = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99276){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__99277 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99277.cljs$core$IFn$_invoke$arity$1 ? fexpr__99277.cljs$core$IFn$_invoke$arity$1(G__99276) : fexpr__99277.call(null,G__99276));
})()], null)),(function (p1__99275_SHARP_){
return ((function (){var G__99278 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99275_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99275_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99278) : p1__99275_SHARP_.call(null,G__99278));
})() - (2));
})(G__99276)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__99279 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99279.cljs$core$IFn$_invoke$arity$1 ? fexpr__99279.cljs$core$IFn$_invoke$arity$1(G__99276) : fexpr__99279.call(null,G__99276));
})()], null)),(2)], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.cos_sq__GT_sin_sq = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99281){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__99282 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99282.cljs$core$IFn$_invoke$arity$1 ? fexpr__99282.cljs$core$IFn$_invoke$arity$1(G__99281) : fexpr__99282.call(null,G__99281));
})()], null)),(function (p1__99280_SHARP_){
return ((function (){var G__99283 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99280_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99280_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99283) : p1__99280_SHARP_.call(null,G__99283));
})() - (2));
})(G__99281)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__99284 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99284.cljs$core$IFn$_invoke$arity$1 ? fexpr__99284.cljs$core$IFn$_invoke$arity$1(G__99281) : fexpr__99284.call(null,G__99281));
})()], null)),(2)], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.split_high_degree_sincos = (function (){var remaining = (function sicmutils$simplify$rules$remaining(p__99293){
var map__99294 = p__99293;
var map__99294__$1 = cljs.core.__destructure_map(map__99294);
var m = map__99294__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99294__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var n_2 = sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(n,(2));
if(sicmutils.value.one_QMARK_(n_2)){
var G__99295 = m;
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__99296 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__99296.cljs$core$IFn$_invoke$arity$1 ? fexpr__99296.cljs$core$IFn$_invoke$arity$1(G__99295) : fexpr__99296.call(null,G__99295));
})(),(function (){var fexpr__99297 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99297.cljs$core$IFn$_invoke$arity$1 ? fexpr__99297.cljs$core$IFn$_invoke$arity$1(G__99295) : fexpr__99297.call(null,G__99295));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
} else {
var G__99298 = m;
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__99299 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__99299.cljs$core$IFn$_invoke$arity$1 ? fexpr__99299.cljs$core$IFn$_invoke$arity$1(G__99298) : fexpr__99299.call(null,G__99298));
})(),(function (){var fexpr__99300 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99300.cljs$core$IFn$_invoke$arity$1 ? fexpr__99300.cljs$core$IFn$_invoke$arity$1(G__99298) : fexpr__99300.call(null,G__99298));
})()], null)),n_2], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}
});
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null], null), null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.more_than_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f2","??f2",745277317,null),null,(1),null)),(2),null)),(3),null)),(4),null)),pattern.rule._EQ__GT_),(function (G__99301){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99302 = new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null);
return (fexpr__99302.cljs$core$IFn$_invoke$arity$1 ? fexpr__99302.cljs$core$IFn$_invoke$arity$1(G__99301) : fexpr__99302.call(null,G__99301));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__99303 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__99303.cljs$core$IFn$_invoke$arity$1 ? fexpr__99303.cljs$core$IFn$_invoke$arity$1(G__99301) : fexpr__99303.call(null,G__99301));
})(),(function (){var fexpr__99304 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99304.cljs$core$IFn$_invoke$arity$1 ? fexpr__99304.cljs$core$IFn$_invoke$arity$1(G__99301) : fexpr__99304.call(null,G__99301));
})()], null)),(2)], null)),remaining(G__99301)], null),(function (){var fexpr__99305 = new cljs.core.Symbol(null,"??f2","??f2",745277317,null);
return (fexpr__99305.cljs$core$IFn$_invoke$arity$1 ? fexpr__99305.cljs$core$IFn$_invoke$arity$1(G__99301) : fexpr__99305.call(null,G__99301));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null], null), null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.more_than_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),null,(1),null)),(2),null)),(3),null)),(4),null)),pattern.rule._EQ__GT_),(function (G__99306){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__99307 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__99307.cljs$core$IFn$_invoke$arity$1 ? fexpr__99307.cljs$core$IFn$_invoke$arity$1(G__99306) : fexpr__99307.call(null,G__99306));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__99308 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__99308.cljs$core$IFn$_invoke$arity$1 ? fexpr__99308.cljs$core$IFn$_invoke$arity$1(G__99306) : fexpr__99308.call(null,G__99306));
})(),(function (){var fexpr__99309 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99309.cljs$core$IFn$_invoke$arity$1 ? fexpr__99309.cljs$core$IFn$_invoke$arity$1(G__99306) : fexpr__99309.call(null,G__99306));
})()], null)),(2)], null)),remaining(G__99306)], null))], null),(function (){var fexpr__99310 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__99310.cljs$core$IFn$_invoke$arity$1 ? fexpr__99310.cljs$core$IFn$_invoke$arity$1(G__99306) : fexpr__99310.call(null,G__99306));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
})();
sicmutils.simplify.rules.flush_obvious_ones = (function sicmutils$simplify$rules$flush_obvious_ones(simplify){
var _QMARK_op = pattern.match.bind.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"?op","?op",-135731883,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null], null), null));
var _QMARK_flipped = pattern.match.or.cljs$core$IFn$_invoke$arity$variadic(pattern.match.and.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.match.frame_predicate((function (p1__99311_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var G__99313 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (p1__99311_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99311_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99313) : p1__99311_SHARP_.call(null,G__99313));
})());
}))], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.match.and.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.match.frame_predicate((function (p1__99312_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var G__99314 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (p1__99312_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99312_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99314) : p1__99312_SHARP_.call(null,G__99314));
})());
}))], 0))], 0));
var pred = (function sicmutils$simplify$rules$flush_obvious_ones_$_pred(m){
var s1 = (function (){var G__99324 = (function (){var G__99325 = m;
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99326 = new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null);
return (fexpr__99326.cljs$core$IFn$_invoke$arity$1 ? fexpr__99326.cljs$core$IFn$_invoke$arity$1(G__99325) : fexpr__99326.call(null,G__99325));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99327 = new cljs.core.Symbol(null,"??f2","??f2",745277317,null);
return (fexpr__99327.cljs$core$IFn$_invoke$arity$1 ? fexpr__99327.cljs$core$IFn$_invoke$arity$1(G__99325) : fexpr__99327.call(null,G__99325));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99324) : simplify.call(null,G__99324));
})();
var s2 = (function (){var G__99328 = (function (){var G__99329 = m;
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99330 = new cljs.core.Symbol(null,"??f3","??f3",-1809203400,null);
return (fexpr__99330.cljs$core$IFn$_invoke$arity$1 ? fexpr__99330.cljs$core$IFn$_invoke$arity$1(G__99329) : fexpr__99330.call(null,G__99329));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99331 = new cljs.core.Symbol(null,"??f4","??f4",1817370441,null);
return (fexpr__99331.cljs$core$IFn$_invoke$arity$1 ? fexpr__99331.cljs$core$IFn$_invoke$arity$1(G__99329) : fexpr__99331.call(null,G__99329));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99328) : simplify.call(null,G__99328));
})();
if(sicmutils.value.exact_zero_QMARK_((function (){var G__99332 = (new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,s1,(new cljs.core.List(null,s2,null,(1),null)),(2),null)),(3),null));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99332) : simplify.call(null,G__99332));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?s1","?s1",-1174751069,null),s1], null);
} else {
return null;
}
});
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,_QMARK_op,(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,_QMARK_flipped,(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__99333){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1)], null),(function (){var fexpr__99334 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__99334.cljs$core$IFn$_invoke$arity$1 ? fexpr__99334.cljs$core$IFn$_invoke$arity$1(G__99333) : fexpr__99334.call(null,G__99333));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99335 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__99335.cljs$core$IFn$_invoke$arity$1 ? fexpr__99335.cljs$core$IFn$_invoke$arity$1(G__99333) : fexpr__99335.call(null,G__99333));
})(),(function (){var fexpr__99336 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__99336.cljs$core$IFn$_invoke$arity$1 ? fexpr__99336.cljs$core$IFn$_invoke$arity$1(G__99333) : fexpr__99336.call(null,G__99333));
})()], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,_QMARK_op,(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f2","??f2",745277317,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f3","??f3",-1809203400,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,_QMARK_flipped,(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f4","??f4",1817370441,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pred),(function (G__99337){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__99338 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__99338.cljs$core$IFn$_invoke$arity$1 ? fexpr__99338.cljs$core$IFn$_invoke$arity$1(G__99337) : fexpr__99338.call(null,G__99337));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99339 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__99339.cljs$core$IFn$_invoke$arity$1 ? fexpr__99339.cljs$core$IFn$_invoke$arity$1(G__99337) : fexpr__99339.call(null,G__99337));
})(),(function (){var fexpr__99340 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__99340.cljs$core$IFn$_invoke$arity$1 ? fexpr__99340.cljs$core$IFn$_invoke$arity$1(G__99337) : fexpr__99340.call(null,G__99337));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__99341 = new cljs.core.Symbol(null,"?s1","?s1",-1174751069,null);
return (fexpr__99341.cljs$core$IFn$_invoke$arity$1 ? fexpr__99341.cljs$core$IFn$_invoke$arity$1(G__99337) : fexpr__99341.call(null,G__99337));
})()], null)], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
});
sicmutils.simplify.rules.sincos_flush_ones = (function sicmutils$simplify$rules$sincos_flush_ones(simplify){
return pattern.rule.pipe.cljs$core$IFn$_invoke$arity$variadic(sicmutils.simplify.rules.split_high_degree_sincos,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.simplify.rules.flush_obvious_ones(simplify)], 0));
});
sicmutils.simplify.rules.sincos_random = (function sicmutils$simplify$rules$sincos_random(simplify){
var simplifies_to_zero_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sicmutils.value.zero_QMARK_,simplify);
var ops = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null], null), null);
var flip = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),new cljs.core.Symbol(null,"sin","sin",1721439389,null),new cljs.core.Symbol(null,"sin","sin",1721439389,null),new cljs.core.Symbol(null,"cos","cos",-1452677493,null)], null);
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var pred = (function sicmutils$simplify$rules$sincos_random_$_pred(p__99348){
var map__99349 = p__99348;
var map__99349__$1 = cljs.core.__destructure_map(map__99349);
var m = map__99349__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99349__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99349__$1,new cljs.core.Symbol(null,"?op","?op",-135731883,null));
if(cljs.core.truth_(simplifies_to_zero_QMARK_((function (){var G__99350 = m;
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99351 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__99351.cljs$core$IFn$_invoke$arity$1 ? fexpr__99351.cljs$core$IFn$_invoke$arity$1(G__99350) : fexpr__99351.call(null,G__99350));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__99352 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__99352.cljs$core$IFn$_invoke$arity$1 ? fexpr__99352.cljs$core$IFn$_invoke$arity$1(G__99350) : fexpr__99352.call(null,G__99350));
})(),(function (){var fexpr__99353 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99353.cljs$core$IFn$_invoke$arity$1 ? fexpr__99353.cljs$core$IFn$_invoke$arity$1(G__99350) : fexpr__99353.call(null,G__99350));
})()], null)),sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(n,(2))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})()))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null),(flip.cljs$core$IFn$_invoke$arity$1 ? flip.cljs$core$IFn$_invoke$arity$1(op) : flip.call(null,op))], null);
} else {
return null;
}
});
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,ops,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pred),(function (G__99354){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__99355 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__99355.cljs$core$IFn$_invoke$arity$1 ? fexpr__99355.cljs$core$IFn$_invoke$arity$1(G__99354) : fexpr__99355.call(null,G__99354));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99356 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__99356.cljs$core$IFn$_invoke$arity$1 ? fexpr__99356.cljs$core$IFn$_invoke$arity$1(G__99354) : fexpr__99356.call(null,G__99354));
})(),(function (){var fexpr__99357 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__99357.cljs$core$IFn$_invoke$arity$1 ? fexpr__99357.cljs$core$IFn$_invoke$arity$1(G__99354) : fexpr__99357.call(null,G__99354));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99358 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__99358.cljs$core$IFn$_invoke$arity$1 ? fexpr__99358.cljs$core$IFn$_invoke$arity$1(G__99354) : fexpr__99358.call(null,G__99354));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__99359 = new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null);
return (fexpr__99359.cljs$core$IFn$_invoke$arity$1 ? fexpr__99359.cljs$core$IFn$_invoke$arity$1(G__99354) : fexpr__99359.call(null,G__99354));
})(),(function (){var fexpr__99360 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99360.cljs$core$IFn$_invoke$arity$1 ? fexpr__99360.cljs$core$IFn$_invoke$arity$1(G__99354) : fexpr__99360.call(null,G__99354));
})()], null)),(2)], null))], null))], null)], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,ops,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pred),(function (G__99361){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__99362 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__99362.cljs$core$IFn$_invoke$arity$1 ? fexpr__99362.cljs$core$IFn$_invoke$arity$1(G__99361) : fexpr__99362.call(null,G__99361));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99363 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__99363.cljs$core$IFn$_invoke$arity$1 ? fexpr__99363.cljs$core$IFn$_invoke$arity$1(G__99361) : fexpr__99363.call(null,G__99361));
})(),(function (){var fexpr__99364 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__99364.cljs$core$IFn$_invoke$arity$1 ? fexpr__99364.cljs$core$IFn$_invoke$arity$1(G__99361) : fexpr__99364.call(null,G__99361));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99365 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__99365.cljs$core$IFn$_invoke$arity$1 ? fexpr__99365.cljs$core$IFn$_invoke$arity$1(G__99361) : fexpr__99365.call(null,G__99361));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__99366 = new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null);
return (fexpr__99366.cljs$core$IFn$_invoke$arity$1 ? fexpr__99366.cljs$core$IFn$_invoke$arity$1(G__99361) : fexpr__99366.call(null,G__99361));
})(),(function (){var fexpr__99367 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99367.cljs$core$IFn$_invoke$arity$1 ? fexpr__99367.cljs$core$IFn$_invoke$arity$1(G__99361) : fexpr__99367.call(null,G__99361));
})()], null)),(2)], null))], null))], null)], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0));
})(),(function (){var pred = (function sicmutils$simplify$rules$sincos_random_$_pred(p__99376){
var map__99377 = p__99376;
var map__99377__$1 = cljs.core.__destructure_map(map__99377);
var m = map__99377__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99377__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99377__$1,new cljs.core.Symbol(null,"?op","?op",-135731883,null));
if(cljs.core.truth_(simplifies_to_zero_QMARK_((function (){var G__99378 = m;
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99379 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__99379.cljs$core$IFn$_invoke$arity$1 ? fexpr__99379.cljs$core$IFn$_invoke$arity$1(G__99378) : fexpr__99379.call(null,G__99378));
})(),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99380 = new cljs.core.Symbol(null,"??b1","??b1",-1771260238,null);
return (fexpr__99380.cljs$core$IFn$_invoke$arity$1 ? fexpr__99380.cljs$core$IFn$_invoke$arity$1(G__99378) : fexpr__99380.call(null,G__99378));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99381 = new cljs.core.Symbol(null,"??b2","??b2",1805392567,null);
return (fexpr__99381.cljs$core$IFn$_invoke$arity$1 ? fexpr__99381.cljs$core$IFn$_invoke$arity$1(G__99378) : fexpr__99381.call(null,G__99378));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__99382 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__99382.cljs$core$IFn$_invoke$arity$1 ? fexpr__99382.cljs$core$IFn$_invoke$arity$1(G__99378) : fexpr__99382.call(null,G__99378));
})(),(function (){var fexpr__99383 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99383.cljs$core$IFn$_invoke$arity$1 ? fexpr__99383.cljs$core$IFn$_invoke$arity$1(G__99378) : fexpr__99383.call(null,G__99378));
})()], null)),sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(n,(2))], null))], null)], 0)))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})()))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null),(flip.cljs$core$IFn$_invoke$arity$1 ? flip.cljs$core$IFn$_invoke$arity$1(op) : flip.call(null,op))], null);
} else {
return null;
}
});
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b1","??b1",-1771260238,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,ops,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b2","??b2",1805392567,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pred),(function (G__99384){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__99385 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__99385.cljs$core$IFn$_invoke$arity$1 ? fexpr__99385.cljs$core$IFn$_invoke$arity$1(G__99384) : fexpr__99385.call(null,G__99384));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99386 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__99386.cljs$core$IFn$_invoke$arity$1 ? fexpr__99386.cljs$core$IFn$_invoke$arity$1(G__99384) : fexpr__99386.call(null,G__99384));
})(),(function (){var fexpr__99387 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__99387.cljs$core$IFn$_invoke$arity$1 ? fexpr__99387.cljs$core$IFn$_invoke$arity$1(G__99384) : fexpr__99387.call(null,G__99384));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99388 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__99388.cljs$core$IFn$_invoke$arity$1 ? fexpr__99388.cljs$core$IFn$_invoke$arity$1(G__99384) : fexpr__99388.call(null,G__99384));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__99389 = new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null);
return (fexpr__99389.cljs$core$IFn$_invoke$arity$1 ? fexpr__99389.cljs$core$IFn$_invoke$arity$1(G__99384) : fexpr__99389.call(null,G__99384));
})(),(function (){var fexpr__99390 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99390.cljs$core$IFn$_invoke$arity$1 ? fexpr__99390.cljs$core$IFn$_invoke$arity$1(G__99384) : fexpr__99390.call(null,G__99384));
})()], null)),(2)], null))], null))], null)], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b1","??b1",-1771260238,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,ops,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b2","??b2",1805392567,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pred),(function (G__99391){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__99392 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__99392.cljs$core$IFn$_invoke$arity$1 ? fexpr__99392.cljs$core$IFn$_invoke$arity$1(G__99391) : fexpr__99392.call(null,G__99391));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99393 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__99393.cljs$core$IFn$_invoke$arity$1 ? fexpr__99393.cljs$core$IFn$_invoke$arity$1(G__99391) : fexpr__99393.call(null,G__99391));
})(),(function (){var fexpr__99394 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__99394.cljs$core$IFn$_invoke$arity$1 ? fexpr__99394.cljs$core$IFn$_invoke$arity$1(G__99391) : fexpr__99394.call(null,G__99391));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99395 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__99395.cljs$core$IFn$_invoke$arity$1 ? fexpr__99395.cljs$core$IFn$_invoke$arity$1(G__99391) : fexpr__99395.call(null,G__99391));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__99396 = new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null);
return (fexpr__99396.cljs$core$IFn$_invoke$arity$1 ? fexpr__99396.cljs$core$IFn$_invoke$arity$1(G__99391) : fexpr__99396.call(null,G__99391));
})(),(function (){var fexpr__99397 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99397.cljs$core$IFn$_invoke$arity$1 ? fexpr__99397.cljs$core$IFn$_invoke$arity$1(G__99391) : fexpr__99397.call(null,G__99391));
})()], null)),(2)], null))], null))], null)], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0));
})()], 0));
});
sicmutils.simplify.rules.sincos__GT_exp1 = (function (){var _I = sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I);
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99398){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__99399 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99399.cljs$core$IFn$_invoke$arity$1 ? fexpr__99399.cljs$core$IFn$_invoke$arity$1(G__99398) : fexpr__99399.call(null,G__99398));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),_I,(function (){var fexpr__99400 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99400.cljs$core$IFn$_invoke$arity$1 ? fexpr__99400.cljs$core$IFn$_invoke$arity$1(G__99398) : fexpr__99400.call(null,G__99398));
})()], null))], null))], null)),sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$2(0.0,2.0)], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99401){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__99402 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99402.cljs$core$IFn$_invoke$arity$1 ? fexpr__99402.cljs$core$IFn$_invoke$arity$1(G__99401) : fexpr__99402.call(null,G__99401));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),_I,(function (){var fexpr__99403 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99403.cljs$core$IFn$_invoke$arity$1 ? fexpr__99403.cljs$core$IFn$_invoke$arity$1(G__99401) : fexpr__99403.call(null,G__99401));
})()], null))], null))], null)),(2)], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
})();
sicmutils.simplify.rules.sincos__GT_exp2 = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99404){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__99405 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99405.cljs$core$IFn$_invoke$arity$1 ? fexpr__99405.cljs$core$IFn$_invoke$arity$1(G__99404) : fexpr__99405.call(null,G__99404));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__99406 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99406.cljs$core$IFn$_invoke$arity$1 ? fexpr__99406.cljs$core$IFn$_invoke$arity$1(G__99404) : fexpr__99406.call(null,G__99404));
})()], null))], null))], null))], null)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),sicmutils.complex.I)], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99407){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__99408 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99408.cljs$core$IFn$_invoke$arity$1 ? fexpr__99408.cljs$core$IFn$_invoke$arity$1(G__99407) : fexpr__99408.call(null,G__99407));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__99409 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99409.cljs$core$IFn$_invoke$arity$1 ? fexpr__99409.cljs$core$IFn$_invoke$arity$1(G__99407) : fexpr__99409.call(null,G__99407));
})()], null))], null))], null))], null)),(2)], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.exp__GT_sincos = (function (){var positive_QMARK_ = (function sicmutils$simplify$rules$positive_QMARK_(x){
return cljs.core.not((function (){var or__4253__auto__ = sicmutils.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.value.zero_QMARK_(x);
}
})());
});
var pos_pred = (function sicmutils$simplify$rules$pos_pred(m){
var im = sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99425 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(G__99425) : m.call(null,G__99425));
})());
if(cljs.core.truth_(positive_QMARK_(im))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?im","?im",120320525,null),im], null);
} else {
return null;
}
});
var neg_pred = (function sicmutils$simplify$rules$neg_pred(m){
var im = sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99426 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(G__99426) : m.call(null,G__99426));
})());
if(cljs.core.truth_(sicmutils.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(im))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?im","?im",120320525,null),im], null);
} else {
return null;
}
});
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,sicmutils.simplify.rules.imaginary_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pos_pred),(function (G__99427){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__99428 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__99428.cljs$core$IFn$_invoke$arity$1 ? fexpr__99428.cljs$core$IFn$_invoke$arity$1(G__99427) : fexpr__99428.call(null,G__99427));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__99429 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__99429.cljs$core$IFn$_invoke$arity$1 ? fexpr__99429.cljs$core$IFn$_invoke$arity$1(G__99427) : fexpr__99429.call(null,G__99427));
})()], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,sicmutils.simplify.rules.imaginary_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),neg_pred),(function (G__99430){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (p1__99410_SHARP_){
return (- (function (){var G__99431 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__99410_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99410_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99431) : p1__99410_SHARP_.call(null,G__99431));
})());
})(G__99430)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (p1__99411_SHARP_){
return (- (function (){var G__99432 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__99411_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99411_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99432) : p1__99411_SHARP_.call(null,G__99432));
})());
})(G__99430)], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,sicmutils.simplify.rules.imaginary_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f","??f",-94026515,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pos_pred),(function (G__99433){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99434 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__99434.cljs$core$IFn$_invoke$arity$1 ? fexpr__99434.cljs$core$IFn$_invoke$arity$1(G__99433) : fexpr__99434.call(null,G__99433));
})()], null),(function (){var fexpr__99435 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__99435.cljs$core$IFn$_invoke$arity$1 ? fexpr__99435.cljs$core$IFn$_invoke$arity$1(G__99433) : fexpr__99435.call(null,G__99433));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99436 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__99436.cljs$core$IFn$_invoke$arity$1 ? fexpr__99436.cljs$core$IFn$_invoke$arity$1(G__99433) : fexpr__99436.call(null,G__99433));
})()], null),(function (){var fexpr__99437 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__99437.cljs$core$IFn$_invoke$arity$1 ? fexpr__99437.cljs$core$IFn$_invoke$arity$1(G__99433) : fexpr__99437.call(null,G__99433));
})()))], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,sicmutils.simplify.rules.imaginary_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f","??f",-94026515,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),neg_pred),(function (G__99438){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__99412_SHARP_){
return sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99439 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (p1__99412_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99412_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99439) : p1__99412_SHARP_.call(null,G__99439));
})());
})(G__99438)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99413_SHARP_){
return (- (function (){var G__99440 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__99413_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99413_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99440) : p1__99413_SHARP_.call(null,G__99440));
})());
})(G__99438)], null),(function (){var fexpr__99441 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__99441.cljs$core$IFn$_invoke$arity$1 ? fexpr__99441.cljs$core$IFn$_invoke$arity$1(G__99438) : fexpr__99441.call(null,G__99438));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99414_SHARP_){
return (- (function (){var G__99442 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__99414_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99414_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99442) : p1__99414_SHARP_.call(null,G__99442));
})());
})(G__99438)], null),(function (){var fexpr__99443 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__99443.cljs$core$IFn$_invoke$arity$1 ? fexpr__99443.cljs$core$IFn$_invoke$arity$1(G__99438) : fexpr__99443.call(null,G__99438));
})()))], null))], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,sicmutils.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pos_pred),(function (G__99444){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__99415_SHARP_){
return sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99445 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (p1__99415_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99415_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99445) : p1__99415_SHARP_.call(null,G__99445));
})());
})(G__99444)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__99446 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__99446.cljs$core$IFn$_invoke$arity$1 ? fexpr__99446.cljs$core$IFn$_invoke$arity$1(G__99444) : fexpr__99446.call(null,G__99444));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__99447 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__99447.cljs$core$IFn$_invoke$arity$1 ? fexpr__99447.cljs$core$IFn$_invoke$arity$1(G__99444) : fexpr__99447.call(null,G__99444));
})()], null))], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,sicmutils.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),neg_pred),(function (G__99448){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__99416_SHARP_){
return sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99449 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (p1__99416_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99416_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99449) : p1__99416_SHARP_.call(null,G__99449));
})());
})(G__99448)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (p1__99417_SHARP_){
return (- (function (){var G__99450 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__99417_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99417_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99450) : p1__99417_SHARP_.call(null,G__99450));
})());
})(G__99448)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (p1__99418_SHARP_){
return (- (function (){var G__99451 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__99418_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99418_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99451) : p1__99418_SHARP_.call(null,G__99451));
})());
})(G__99448)], null))], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,sicmutils.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f","??f",-94026515,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pos_pred),(function (G__99452){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__99419_SHARP_){
return sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99453 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (p1__99419_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99419_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99453) : p1__99419_SHARP_.call(null,G__99453));
})());
})(G__99452)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99454 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__99454.cljs$core$IFn$_invoke$arity$1 ? fexpr__99454.cljs$core$IFn$_invoke$arity$1(G__99452) : fexpr__99454.call(null,G__99452));
})()], null),(function (){var fexpr__99455 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__99455.cljs$core$IFn$_invoke$arity$1 ? fexpr__99455.cljs$core$IFn$_invoke$arity$1(G__99452) : fexpr__99455.call(null,G__99452));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99456 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__99456.cljs$core$IFn$_invoke$arity$1 ? fexpr__99456.cljs$core$IFn$_invoke$arity$1(G__99452) : fexpr__99456.call(null,G__99452));
})()], null),(function (){var fexpr__99457 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__99457.cljs$core$IFn$_invoke$arity$1 ? fexpr__99457.cljs$core$IFn$_invoke$arity$1(G__99452) : fexpr__99457.call(null,G__99452));
})()))], null))], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,sicmutils.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f","??f",-94026515,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),neg_pred),(function (G__99458){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__99420_SHARP_){
return sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99459 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (p1__99420_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99420_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99459) : p1__99420_SHARP_.call(null,G__99459));
})());
})(G__99458)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99421_SHARP_){
return (- (function (){var G__99460 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__99421_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99421_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99460) : p1__99421_SHARP_.call(null,G__99460));
})());
})(G__99458)], null),(function (){var fexpr__99461 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__99461.cljs$core$IFn$_invoke$arity$1 ? fexpr__99461.cljs$core$IFn$_invoke$arity$1(G__99458) : fexpr__99461.call(null,G__99458));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99422_SHARP_){
return (- (function (){var G__99462 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__99422_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99422_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99462) : p1__99422_SHARP_.call(null,G__99462));
})());
})(G__99458)], null),(function (){var fexpr__99463 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__99463.cljs$core$IFn$_invoke$arity$1 ? fexpr__99463.cljs$core$IFn$_invoke$arity$1(G__99458) : fexpr__99463.call(null,G__99458));
})()))], null))], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
})();
sicmutils.simplify.rules.exp_contract = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x3","??x3",-411077265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x4","?x4",94899597,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x5","??x5",1822045235,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__99464){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99465 = new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null);
return (fexpr__99465.cljs$core$IFn$_invoke$arity$1 ? fexpr__99465.cljs$core$IFn$_invoke$arity$1(G__99464) : fexpr__99465.call(null,G__99464));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99466 = new cljs.core.Symbol(null,"??x3","??x3",-411077265,null);
return (fexpr__99466.cljs$core$IFn$_invoke$arity$1 ? fexpr__99466.cljs$core$IFn$_invoke$arity$1(G__99464) : fexpr__99466.call(null,G__99464));
})(),(function (){var fexpr__99467 = new cljs.core.Symbol(null,"??x5","??x5",1822045235,null);
return (fexpr__99467.cljs$core$IFn$_invoke$arity$1 ? fexpr__99467.cljs$core$IFn$_invoke$arity$1(G__99464) : fexpr__99467.call(null,G__99464));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99468 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__99468.cljs$core$IFn$_invoke$arity$1 ? fexpr__99468.cljs$core$IFn$_invoke$arity$1(G__99464) : fexpr__99468.call(null,G__99464));
})(),(function (){var fexpr__99469 = new cljs.core.Symbol(null,"?x4","?x4",94899597,null);
return (fexpr__99469.cljs$core$IFn$_invoke$arity$1 ? fexpr__99469.cljs$core$IFn$_invoke$arity$1(G__99464) : fexpr__99469.call(null,G__99464));
})()], null))], null))], null)], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?p","?p",-10896580,null),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99470){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99471 = new cljs.core.Symbol(null,"?p","?p",-10896580,null);
return (fexpr__99471.cljs$core$IFn$_invoke$arity$1 ? fexpr__99471.cljs$core$IFn$_invoke$arity$1(G__99470) : fexpr__99471.call(null,G__99470));
})(),(function (){var fexpr__99472 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99472.cljs$core$IFn$_invoke$arity$1 ? fexpr__99472.cljs$core$IFn$_invoke$arity$1(G__99470) : fexpr__99472.call(null,G__99470));
})()], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99473){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99474 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99474.cljs$core$IFn$_invoke$arity$1 ? fexpr__99474.cljs$core$IFn$_invoke$arity$1(G__99473) : fexpr__99474.call(null,G__99473));
})(),(function (){var fexpr__99475 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99475.cljs$core$IFn$_invoke$arity$1 ? fexpr__99475.cljs$core$IFn$_invoke$arity$1(G__99473) : fexpr__99475.call(null,G__99473));
})()], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x2","??x2",169445330,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99476){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99477 = new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null);
return (fexpr__99477.cljs$core$IFn$_invoke$arity$1 ? fexpr__99477.cljs$core$IFn$_invoke$arity$1(G__99476) : fexpr__99477.call(null,G__99476));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99478 = new cljs.core.Symbol(null,"??x2","??x2",169445330,null);
return (fexpr__99478.cljs$core$IFn$_invoke$arity$1 ? fexpr__99478.cljs$core$IFn$_invoke$arity$1(G__99476) : fexpr__99478.call(null,G__99476));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99479 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99479.cljs$core$IFn$_invoke$arity$1 ? fexpr__99479.cljs$core$IFn$_invoke$arity$1(G__99476) : fexpr__99479.call(null,G__99476));
})(),(function (){var fexpr__99480 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99480.cljs$core$IFn$_invoke$arity$1 ? fexpr__99480.cljs$core$IFn$_invoke$arity$1(G__99476) : fexpr__99480.call(null,G__99476));
})()], null))], null))], null)], 0)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y1","??y1",-1969315695,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y2","??y2",-796250797,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99481){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99482 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99482.cljs$core$IFn$_invoke$arity$1 ? fexpr__99482.cljs$core$IFn$_invoke$arity$1(G__99481) : fexpr__99482.call(null,G__99481));
})(),(function (){var fexpr__99483 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99483.cljs$core$IFn$_invoke$arity$1 ? fexpr__99483.cljs$core$IFn$_invoke$arity$1(G__99481) : fexpr__99483.call(null,G__99481));
})()], null))], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99484 = new cljs.core.Symbol(null,"??y1","??y1",-1969315695,null);
return (fexpr__99484.cljs$core$IFn$_invoke$arity$1 ? fexpr__99484.cljs$core$IFn$_invoke$arity$1(G__99481) : fexpr__99484.call(null,G__99481));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99485 = new cljs.core.Symbol(null,"??y2","??y2",-796250797,null);
return (fexpr__99485.cljs$core$IFn$_invoke$arity$1 ? fexpr__99485.cljs$core$IFn$_invoke$arity$1(G__99481) : fexpr__99485.call(null,G__99481));
})()], 0)))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x2","??x2",169445330,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y1","??y1",-1969315695,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y2","??y2",-796250797,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99486){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99487 = new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null);
return (fexpr__99487.cljs$core$IFn$_invoke$arity$1 ? fexpr__99487.cljs$core$IFn$_invoke$arity$1(G__99486) : fexpr__99487.call(null,G__99486));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99488 = new cljs.core.Symbol(null,"??x2","??x2",169445330,null);
return (fexpr__99488.cljs$core$IFn$_invoke$arity$1 ? fexpr__99488.cljs$core$IFn$_invoke$arity$1(G__99486) : fexpr__99488.call(null,G__99486));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99489 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99489.cljs$core$IFn$_invoke$arity$1 ? fexpr__99489.cljs$core$IFn$_invoke$arity$1(G__99486) : fexpr__99489.call(null,G__99486));
})(),(function (){var fexpr__99490 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99490.cljs$core$IFn$_invoke$arity$1 ? fexpr__99490.cljs$core$IFn$_invoke$arity$1(G__99486) : fexpr__99490.call(null,G__99486));
})()], null))], null))], null)], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99491 = new cljs.core.Symbol(null,"??y1","??y1",-1969315695,null);
return (fexpr__99491.cljs$core$IFn$_invoke$arity$1 ? fexpr__99491.cljs$core$IFn$_invoke$arity$1(G__99486) : fexpr__99491.call(null,G__99486));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99492 = new cljs.core.Symbol(null,"??y2","??y2",-796250797,null);
return (fexpr__99492.cljs$core$IFn$_invoke$arity$1 ? fexpr__99492.cljs$core$IFn$_invoke$arity$1(G__99486) : fexpr__99492.call(null,G__99486));
})()], 0)))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.exp_expand = (function (){var exact_integer_QMARK_ = (function (x){
return ((sicmutils.value.integral_QMARK_(x)) && (sicmutils.value.exact_QMARK_(x)));
});
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x1","?x1",697080023,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99504){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__99505 = new cljs.core.Symbol(null,"?x1","?x1",697080023,null);
return (fexpr__99505.cljs$core$IFn$_invoke$arity$1 ? fexpr__99505.cljs$core$IFn$_invoke$arity$1(G__99504) : fexpr__99505.call(null,G__99504));
})()], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x1","?x1",697080023,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99506){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__99507 = new cljs.core.Symbol(null,"?x1","?x1",697080023,null);
return (fexpr__99507.cljs$core$IFn$_invoke$arity$1 ? fexpr__99507.cljs$core$IFn$_invoke$arity$1(G__99506) : fexpr__99507.call(null,G__99506));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__99508 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__99508.cljs$core$IFn$_invoke$arity$1 ? fexpr__99508.cljs$core$IFn$_invoke$arity$1(G__99506) : fexpr__99508.call(null,G__99506));
})()], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x1","?x1",697080023,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99509){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__99510 = new cljs.core.Symbol(null,"?x1","?x1",697080023,null);
return (fexpr__99510.cljs$core$IFn$_invoke$arity$1 ? fexpr__99510.cljs$core$IFn$_invoke$arity$1(G__99509) : fexpr__99510.call(null,G__99509));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99511 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__99511.cljs$core$IFn$_invoke$arity$1 ? fexpr__99511.cljs$core$IFn$_invoke$arity$1(G__99509) : fexpr__99511.call(null,G__99509));
})()], null),(function (){var fexpr__99512 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__99512.cljs$core$IFn$_invoke$arity$1 ? fexpr__99512.cljs$core$IFn$_invoke$arity$1(G__99509) : fexpr__99512.call(null,G__99509));
})()))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,sicmutils.simplify.rules.imaginary_integer_QMARK_,(new cljs.core.List(null,(function (p1__99493_SHARP_){
return (sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1(p1__99493_SHARP_) > (1));
}),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99513){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I], null),(function (){var fexpr__99514 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__99514.cljs$core$IFn$_invoke$arity$1 ? fexpr__99514.cljs$core$IFn$_invoke$arity$1(G__99513) : fexpr__99514.call(null,G__99513));
})()))], null)),(function (p1__99494_SHARP_){
return sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99515 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__99494_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99494_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99515) : p1__99494_SHARP_.call(null,G__99515));
})());
})(G__99513)], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,sicmutils.simplify.rules.imaginary_integer_QMARK_,(new cljs.core.List(null,(function (p1__99495_SHARP_){
return (sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1(p1__99495_SHARP_) < (-1));
}),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99516){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I)], null),(function (){var fexpr__99517 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__99517.cljs$core$IFn$_invoke$arity$1 ? fexpr__99517.cljs$core$IFn$_invoke$arity$1(G__99516) : fexpr__99517.call(null,G__99516));
})()))], null)),(function (p1__99496_SHARP_){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99518 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__99496_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99496_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99518) : p1__99496_SHARP_.call(null,G__99518));
})()));
})(G__99516)], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,exact_integer_QMARK_,(new cljs.core.List(null,(function (p1__99497_SHARP_){
return (p1__99497_SHARP_ > (1));
}),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99519){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99520 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__99520.cljs$core$IFn$_invoke$arity$1 ? fexpr__99520.cljs$core$IFn$_invoke$arity$1(G__99519) : fexpr__99520.call(null,G__99519));
})()))], null)),(function (){var fexpr__99521 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__99521.cljs$core$IFn$_invoke$arity$1 ? fexpr__99521.cljs$core$IFn$_invoke$arity$1(G__99519) : fexpr__99521.call(null,G__99519));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,exact_integer_QMARK_,(new cljs.core.List(null,(function (p1__99498_SHARP_){
return (p1__99498_SHARP_ < (-1));
}),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99522){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-1)], null),(function (){var fexpr__99523 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__99523.cljs$core$IFn$_invoke$arity$1 ? fexpr__99523.cljs$core$IFn$_invoke$arity$1(G__99522) : fexpr__99523.call(null,G__99522));
})()))], null)),(function (p1__99499_SHARP_){
return (- (function (){var G__99524 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99499_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99499_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99524) : p1__99499_SHARP_.call(null,G__99524));
})());
})(G__99522)], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,sicmutils.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99525){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__99500_SHARP_){
return sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99526 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__99500_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99500_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99526) : p1__99500_SHARP_.call(null,G__99526));
})());
})(G__99525)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__99501_SHARP_){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99527 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__99501_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99501_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99527) : p1__99501_SHARP_.call(null,G__99527));
})()),(cljs.core.unquote.cljs$core$IFn$_invoke$arity$1 ? cljs.core.unquote.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I) : cljs.core.unquote.call(null,sicmutils.complex.I)));
})(G__99525)], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,sicmutils.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99528){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99502_SHARP_){
return sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99529 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__99502_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99502_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99529) : p1__99502_SHARP_.call(null,G__99529));
})());
})(G__99528)], null),(function (){var fexpr__99530 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__99530.cljs$core$IFn$_invoke$arity$1 ? fexpr__99530.cljs$core$IFn$_invoke$arity$1(G__99528) : fexpr__99530.call(null,G__99528));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99503_SHARP_){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99531 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__99503_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99503_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99531) : p1__99503_SHARP_.call(null,G__99531));
})()),(cljs.core.unquote.cljs$core$IFn$_invoke$arity$1 ? cljs.core.unquote.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I) : cljs.core.unquote.call(null,sicmutils.complex.I)));
})(G__99528)], null),(function (){var fexpr__99532 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__99532.cljs$core$IFn$_invoke$arity$1 ? fexpr__99532.cljs$core$IFn$_invoke$arity$1(G__99528) : fexpr__99532.call(null,G__99528));
})()))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
})();
sicmutils.simplify.rules.complex_trig = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,sicmutils.complex.I,null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99533){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),(1)], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),(new cljs.core.List(null,sicmutils.complex.I,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99534){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),(function (){var fexpr__99535 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__99535.cljs$core$IFn$_invoke$arity$1 ? fexpr__99535.cljs$core$IFn$_invoke$arity$1(G__99534) : fexpr__99535.call(null,G__99534));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,sicmutils.complex.I,(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99536){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),(function (){var fexpr__99537 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__99537.cljs$core$IFn$_invoke$arity$1 ? fexpr__99537.cljs$core$IFn$_invoke$arity$1(G__99536) : fexpr__99537.call(null,G__99536));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),(new cljs.core.List(null,sicmutils.complex.I,(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99538){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99539 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__99539.cljs$core$IFn$_invoke$arity$1 ? fexpr__99539.cljs$core$IFn$_invoke$arity$1(G__99538) : fexpr__99539.call(null,G__99538));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99540 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__99540.cljs$core$IFn$_invoke$arity$1 ? fexpr__99540.cljs$core$IFn$_invoke$arity$1(G__99538) : fexpr__99540.call(null,G__99538));
})()], 0)))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,sicmutils.complex.I,null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99541){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),(1)], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),(new cljs.core.List(null,sicmutils.complex.I,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99542){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),(function (){var fexpr__99543 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__99543.cljs$core$IFn$_invoke$arity$1 ? fexpr__99543.cljs$core$IFn$_invoke$arity$1(G__99542) : fexpr__99543.call(null,G__99542));
})()], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,sicmutils.complex.I,(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99544){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),(function (){var fexpr__99545 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__99545.cljs$core$IFn$_invoke$arity$1 ? fexpr__99545.cljs$core$IFn$_invoke$arity$1(G__99544) : fexpr__99545.call(null,G__99544));
})()], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),(new cljs.core.List(null,sicmutils.complex.I,(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99546){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99547 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__99547.cljs$core$IFn$_invoke$arity$1 ? fexpr__99547.cljs$core$IFn$_invoke$arity$1(G__99546) : fexpr__99547.call(null,G__99546));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99548 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__99548.cljs$core$IFn$_invoke$arity$1 ? fexpr__99548.cljs$core$IFn$_invoke$arity$1(G__99546) : fexpr__99548.call(null,G__99546));
})()], 0)))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.complex_rules = (function (){var ctor = cljs.core.list(new cljs.core.Symbol(null,"?","?",-62633706,null),new cljs.core.Symbol(null,"?op","?op",-135731883,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"make-rectangular","make-rectangular",-1494662174,null),"null",new cljs.core.Symbol(null,"complex","complex",-1238824944,null),"null"], null), null));
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,ctor,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?theta","?theta",-893896091,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?theta","?theta",-893896091,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99549){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__99550 = new cljs.core.Symbol(null,"?theta","?theta",-893896091,null);
return (fexpr__99550.cljs$core$IFn$_invoke$arity$1 ? fexpr__99550.cljs$core$IFn$_invoke$arity$1(G__99549) : fexpr__99550.call(null,G__99549));
})()], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"real-part","real-part",-2001752061,null),(new cljs.core.List(null,(new cljs.core.List(null,ctor,(new cljs.core.List(null,new cljs.core.Symbol(null,"?re","?re",118270068,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99551){
var r__20948__auto__ = (function (){var fexpr__99552 = new cljs.core.Symbol(null,"?re","?re",118270068,null);
return (fexpr__99552.cljs$core$IFn$_invoke$arity$1 ? fexpr__99552.cljs$core$IFn$_invoke$arity$1(G__99551) : fexpr__99552.call(null,G__99551));
})();
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"imag-part","imag-part",2028041294,null),(new cljs.core.List(null,(new cljs.core.List(null,ctor,(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?im","?im",120320525,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99553){
var r__20948__auto__ = (function (){var fexpr__99554 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__99554.cljs$core$IFn$_invoke$arity$1 ? fexpr__99554.cljs$core$IFn$_invoke$arity$1(G__99553) : fexpr__99554.call(null,G__99553));
})();
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,ctor,(new cljs.core.List(null,new cljs.core.Symbol(null,"?re","?re",118270068,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?im","?im",120320525,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99555){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__99556 = new cljs.core.Symbol(null,"?re","?re",118270068,null);
return (fexpr__99556.cljs$core$IFn$_invoke$arity$1 ? fexpr__99556.cljs$core$IFn$_invoke$arity$1(G__99555) : fexpr__99556.call(null,G__99555));
})(),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__99557 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__99557.cljs$core$IFn$_invoke$arity$1 ? fexpr__99557.cljs$core$IFn$_invoke$arity$1(G__99555) : fexpr__99557.call(null,G__99555));
})(),(2)], null))], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"angle","angle",-1032341515,null),(new cljs.core.List(null,(new cljs.core.List(null,ctor,(new cljs.core.List(null,new cljs.core.Symbol(null,"?re","?re",118270068,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?im","?im",120320525,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99558){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(function (){var fexpr__99559 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__99559.cljs$core$IFn$_invoke$arity$1 ? fexpr__99559.cljs$core$IFn$_invoke$arity$1(G__99558) : fexpr__99559.call(null,G__99558));
})(),(function (){var fexpr__99560 = new cljs.core.Symbol(null,"?re","?re",118270068,null);
return (fexpr__99560.cljs$core$IFn$_invoke$arity$1 ? fexpr__99560.cljs$core$IFn$_invoke$arity$1(G__99558) : fexpr__99560.call(null,G__99558));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"real-part","real-part",-2001752061,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99561){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99562 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__99562.cljs$core$IFn$_invoke$arity$1 ? fexpr__99562.cljs$core$IFn$_invoke$arity$1(G__99561) : fexpr__99562.call(null,G__99561));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__99563 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__99563.cljs$core$IFn$_invoke$arity$1 ? fexpr__99563.cljs$core$IFn$_invoke$arity$1(G__99561) : fexpr__99563.call(null,G__99561));
})()], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"imag-part","imag-part",2028041294,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99564){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99565 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__99565.cljs$core$IFn$_invoke$arity$1 ? fexpr__99565.cljs$core$IFn$_invoke$arity$1(G__99564) : fexpr__99565.call(null,G__99564));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__99566 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__99566.cljs$core$IFn$_invoke$arity$1 ? fexpr__99566.cljs$core$IFn$_invoke$arity$1(G__99564) : fexpr__99566.call(null,G__99564));
})()], null))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99567){
var r__20948__auto__ = (function (){var fexpr__99568 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__99568.cljs$core$IFn$_invoke$arity$1 ? fexpr__99568.cljs$core$IFn$_invoke$arity$1(G__99567) : fexpr__99568.call(null,G__99567));
})();
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"angle","angle",-1032341515,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99569){
var r__20948__auto__ = (function (){var fexpr__99570 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__99570.cljs$core$IFn$_invoke$arity$1 ? fexpr__99570.cljs$core$IFn$_invoke$arity$1(G__99569) : fexpr__99570.call(null,G__99569));
})();
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
})();
sicmutils.simplify.rules.divide_numbers_through = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,new cljs.core.Symbol(null,"?factor","?factor",598737740,null),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99574){
var r__20948__auto__ = (function (){var fexpr__99575 = new cljs.core.Symbol(null,"?factor","?factor",598737740,null);
return (fexpr__99575.cljs$core$IFn$_invoke$arity$1 ? fexpr__99575.cljs$core$IFn$_invoke$arity$1(G__99574) : fexpr__99575.call(null,G__99574));
})();
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99576){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99577 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__99577.cljs$core$IFn$_invoke$arity$1 ? fexpr__99577.cljs$core$IFn$_invoke$arity$1(G__99576) : fexpr__99577.call(null,G__99576));
})()));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99578){
var r__20948__auto__ = (function (p__99579){
var map__99580 = p__99579;
var map__99580__$1 = cljs.core.__destructure_map(map__99580);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99580__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99580__$1,new cljs.core.Symbol(null,"?d","?d",-1851543854,null));
return sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(n,d);
})(G__99578);
var or__4253__auto__ = r__20948__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??terms","??terms",1737460425,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99581){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (p1__99571_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
var G__99582 = p1__99571_SHARP_;
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),n,(function (){var fexpr__99583 = new cljs.core.Symbol(null,"?d","?d",-1851543854,null);
return (fexpr__99583.cljs$core$IFn$_invoke$arity$1 ? fexpr__99583.cljs$core$IFn$_invoke$arity$1(G__99582) : fexpr__99583.call(null,G__99582));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}),(function (){var G__99584 = new cljs.core.Symbol(null,"??terms","??terms",1737460425,null);
return (p1__99571_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99571_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99584) : p1__99571_SHARP_.call(null,G__99584));
})());
})(G__99581)));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99585){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p__99586){
var map__99587 = p__99586;
var map__99587__$1 = cljs.core.__destructure_map(map__99587);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99587__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99587__$1,new cljs.core.Symbol(null,"?d","?d",-1851543854,null));
return sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(n,d);
})(G__99585)], null),(function (){var fexpr__99588 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__99588.cljs$core$IFn$_invoke$arity$1 ? fexpr__99588.cljs$core$IFn$_invoke$arity$1(G__99585) : fexpr__99588.call(null,G__99585));
})()));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99589){
var r__20948__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99572_SHARP_){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1((function (){var G__99590 = new cljs.core.Symbol(null,"?d","?d",-1851543854,null);
return (p1__99572_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99572_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99590) : p1__99572_SHARP_.call(null,G__99590));
})());
})(G__99589)], null),(function (){var fexpr__99591 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__99591.cljs$core$IFn$_invoke$arity$1 ? fexpr__99591.cljs$core$IFn$_invoke$arity$1(G__99589) : fexpr__99591.call(null,G__99589));
})()));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?factor","?factor",598737740,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99592){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__99593 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__99593.cljs$core$IFn$_invoke$arity$1 ? fexpr__99593.cljs$core$IFn$_invoke$arity$1(G__99592) : fexpr__99593.call(null,G__99592));
})(),(function (){var fexpr__99594 = new cljs.core.Symbol(null,"?d","?d",-1851543854,null);
return (fexpr__99594.cljs$core$IFn$_invoke$arity$1 ? fexpr__99594.cljs$core$IFn$_invoke$arity$1(G__99592) : fexpr__99594.call(null,G__99592));
})()], null)),(function (){var fexpr__99595 = new cljs.core.Symbol(null,"?factor","?factor",598737740,null);
return (fexpr__99595.cljs$core$IFn$_invoke$arity$1 ? fexpr__99595.cljs$core$IFn$_invoke$arity$1(G__99592) : fexpr__99595.call(null,G__99592));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99596){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__99597 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__99597.cljs$core$IFn$_invoke$arity$1 ? fexpr__99597.cljs$core$IFn$_invoke$arity$1(G__99596) : fexpr__99597.call(null,G__99596));
})(),(function (){var fexpr__99598 = new cljs.core.Symbol(null,"?d","?d",-1851543854,null);
return (fexpr__99598.cljs$core$IFn$_invoke$arity$1 ? fexpr__99598.cljs$core$IFn$_invoke$arity$1(G__99596) : fexpr__99598.call(null,G__99596));
})()], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99599 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__99599.cljs$core$IFn$_invoke$arity$1 ? fexpr__99599.cljs$core$IFn$_invoke$arity$1(G__99596) : fexpr__99599.call(null,G__99596));
})()))], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99600){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99573_SHARP_){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1((function (){var G__99601 = new cljs.core.Symbol(null,"?d","?d",-1851543854,null);
return (p1__99573_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99573_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99601) : p1__99573_SHARP_.call(null,G__99601));
})());
})(G__99600),(function (){var fexpr__99602 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__99602.cljs$core$IFn$_invoke$arity$1 ? fexpr__99602.cljs$core$IFn$_invoke$arity$1(G__99600) : fexpr__99602.call(null,G__99600));
})()], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.occurs_in_QMARK_ = (function sicmutils$simplify$rules$occurs_in_QMARK_(syms,all){
return cljs.core.boolean$(cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(syms,all)));
});
/**
 * Returns a rule simplifier of rules that are almost always helpful.
 */
sicmutils.simplify.rules.universal_reductions = (function sicmutils$simplify$rules$universal_reductions(simplify){
var misc = sicmutils.simplify.rules.miscsimp(simplify);
var le = sicmutils.simplify.rules.logexp(simplify);
var st = sicmutils.simplify.rules.trig_COLON_special(simplify);
var ti = sicmutils.simplify.rules.triginv(simplify);
var sim_root = sicmutils.simplify.rules.simplify_square_roots(simplify);
return (function (expr){
var syms = sicmutils.expression.variables_in(expr);
var sincos_QMARK_ = sicmutils.simplify.rules.occurs_in_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null], null), null),syms);
var invtrig_QMARK_ = sicmutils.simplify.rules.occurs_in_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),null,new cljs.core.Symbol(null,"acos","acos",353741763,null),null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),null], null), null),syms);
var logexp_QMARK_ = sicmutils.simplify.rules.occurs_in_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"log","log",45015523,null),null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),null], null), null),syms);
var sqrt_QMARK_ = cljs.core.contains_QMARK_(syms,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null));
var mag_QMARK_ = cljs.core.contains_QMARK_(syms,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null));
var expr_SINGLEQUOTE_ = (function (){var G__99603 = (misc.cljs$core$IFn$_invoke$arity$1 ? misc.cljs$core$IFn$_invoke$arity$1(expr) : misc.call(null,expr));
var G__99603__$1 = ((logexp_QMARK_)?(le.cljs$core$IFn$_invoke$arity$1 ? le.cljs$core$IFn$_invoke$arity$1(G__99603) : le.call(null,G__99603)):G__99603);
var G__99603__$2 = ((mag_QMARK_)?(sicmutils.simplify.rules.magnitude.cljs$core$IFn$_invoke$arity$1 ? sicmutils.simplify.rules.magnitude.cljs$core$IFn$_invoke$arity$1(G__99603__$1) : sicmutils.simplify.rules.magnitude.call(null,G__99603__$1)):G__99603__$1);
var G__99603__$3 = ((invtrig_QMARK_)?(ti.cljs$core$IFn$_invoke$arity$1 ? ti.cljs$core$IFn$_invoke$arity$1(G__99603__$2) : ti.call(null,G__99603__$2)):G__99603__$2);
if(cljs.core.truth_((function (){var and__4251__auto__ = sincos_QMARK_;
if(and__4251__auto__){
return sicmutils.simplify.rules._STAR_sin_cos_simplify_QMARK__STAR_;
} else {
return and__4251__auto__;
}
})())){
return (st.cljs$core$IFn$_invoke$arity$1 ? st.cljs$core$IFn$_invoke$arity$1(G__99603__$3) : st.call(null,G__99603__$3));
} else {
return G__99603__$3;
}
})();
if(((sincos_QMARK_) && (invtrig_QMARK_))){
var G__99604 = (ti.cljs$core$IFn$_invoke$arity$1 ? ti.cljs$core$IFn$_invoke$arity$1(expr_SINGLEQUOTE_) : ti.call(null,expr_SINGLEQUOTE_));
return (sim_root.cljs$core$IFn$_invoke$arity$1 ? sim_root.cljs$core$IFn$_invoke$arity$1(G__99604) : sim_root.call(null,G__99604));
} else {
if(sqrt_QMARK_){
return (sim_root.cljs$core$IFn$_invoke$arity$1 ? sim_root.cljs$core$IFn$_invoke$arity$1(expr_SINGLEQUOTE_) : sim_root.call(null,expr_SINGLEQUOTE_));
} else {
return expr_SINGLEQUOTE_;

}
}
});
});

//# sourceMappingURL=sicmutils.simplify.rules.js.map
