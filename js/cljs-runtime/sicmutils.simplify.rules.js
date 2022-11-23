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
var len__4864__auto___99940 = arguments.length;
var i__4865__auto___99941 = (0);
while(true){
if((i__4865__auto___99941 < len__4864__auto___99940)){
args__4870__auto__.push((arguments[i__4865__auto___99941]));

var G__99942 = (i__4865__auto___99941 + (1));
i__4865__auto___99941 = G__99942;
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
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,op_set,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98589){
var r__21102__auto__ = (function (){var fexpr__98591 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98591.cljs$core$IFn$_invoke$arity$1 ? fexpr__98591.cljs$core$IFn$_invoke$arity$1(G__98589) : fexpr__98591.call(null,G__98589));
})();
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0));
}));

(sicmutils.simplify.rules.unary_elimination.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.simplify.rules.unary_elimination.cljs$lang$applyTo = (function (seq98588){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq98588));
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
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,op,(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98593){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [op], null),(function (p__98594){
var map__98595 = p__98594;
var map__98595__$1 = cljs.core.__destructure_map(map__98595);
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98595__$1,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([constant]),xs);
})(G__98593)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
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
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,op,(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,constant,null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98597){
var r__21102__auto__ = constant;
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,op,(new cljs.core.List(null,constant,(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98598){
var r__21102__auto__ = constant;
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
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
var len__4864__auto___99944 = arguments.length;
var i__4865__auto___99945 = (0);
while(true){
if((i__4865__auto___99945 < len__4864__auto___99944)){
args__4870__auto__.push((arguments[i__4865__auto___99945]));

var G__99946 = (i__4865__auto___99945 + (1));
i__4865__auto___99945 = G__99946;
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
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,op,(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98601){
var r__21102__auto__ = cljs.core.vec((function (){var fexpr__98602 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__98602.cljs$core$IFn$_invoke$arity$1 ? fexpr__98602.cljs$core$IFn$_invoke$arity$1(G__98601) : fexpr__98602.call(null,G__98601));
})());
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"?x","?x",-555096650,null),pattern.rule._EQ__GT_),(function (G__98603){
var r__21102__auto__ = cljs.core.vec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__98604 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98604.cljs$core$IFn$_invoke$arity$1 ? fexpr__98604.cljs$core$IFn$_invoke$arity$1(G__98603) : fexpr__98604.call(null,G__98603));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0));
});
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,op_set,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),pattern.rule._EQ__GT_),(function (G__98606){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__98608 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__98608.cljs$core$IFn$_invoke$arity$1 ? fexpr__98608.cljs$core$IFn$_invoke$arity$1(G__98606) : fexpr__98608.call(null,G__98606));
})()], null),(function (){var fexpr__98609 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__98609.cljs$core$IFn$_invoke$arity$1 ? fexpr__98609.cljs$core$IFn$_invoke$arity$1(G__98606) : fexpr__98609.call(null,G__98606));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__98610){
var map__98611 = p__98610;
var map__98611__$1 = cljs.core.__destructure_map(map__98611);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98611__$1,new cljs.core.Symbol(null,"?op","?op",-135731883,null));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98611__$1,new cljs.core.Symbol(null,"??b","??b",254504576,null));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98611__$1,new cljs.core.Symbol(null,"??c","??c",1219586074,null));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(flatten(op),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.concat.cljs$core$IFn$_invoke$arity$2(b,c)], 0));
})(G__98606)], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0));
}));

(sicmutils.simplify.rules.associative.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.simplify.rules.associative.cljs$lang$applyTo = (function (seq98600){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq98600));
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
var len__4864__auto___99947 = arguments.length;
var i__4865__auto___99948 = (0);
while(true){
if((i__4865__auto___99948 < len__4864__auto___99947)){
args__4870__auto__.push((arguments[i__4865__auto___99948]));

var G__99949 = (i__4865__auto___99948 + (1));
i__4865__auto___99948 = G__99949;
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
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,op_set,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98616){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__98620 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__98620.cljs$core$IFn$_invoke$arity$1 ? fexpr__98620.cljs$core$IFn$_invoke$arity$1(G__98616) : fexpr__98620.call(null,G__98616));
})()], null),(function (p1__98612_SHARP_){
return sicmutils.expression.sort((function (){var G__98622 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (p1__98612_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__98612_SHARP_.cljs$core$IFn$_invoke$arity$1(G__98622) : p1__98612_SHARP_.call(null,G__98622));
})());
})(G__98616)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0));
}));

(sicmutils.simplify.rules.commutative.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.simplify.rules.commutative.cljs$lang$applyTo = (function (seq98614){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq98614));
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
var len__4864__auto___99950 = arguments.length;
var i__4865__auto___99951 = (0);
while(true){
if((i__4865__auto___99951 < len__4864__auto___99950)){
args__4870__auto__.push((arguments[i__4865__auto___99951]));

var G__99952 = (i__4865__auto___99951 + (1));
i__4865__auto___99951 = G__99952;
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
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,op_set,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??post","??post",1092296697,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),pattern.rule._EQ__GT_),(function (G__98631){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__98633 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__98633.cljs$core$IFn$_invoke$arity$1 ? fexpr__98633.cljs$core$IFn$_invoke$arity$1(G__98631) : fexpr__98633.call(null,G__98631));
})()], null),(function (m){
return cljs.core.dedupe.cljs$core$IFn$_invoke$arity$1((function (){var G__98634 = m;
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__98635 = new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null);
return (fexpr__98635.cljs$core$IFn$_invoke$arity$1 ? fexpr__98635.cljs$core$IFn$_invoke$arity$1(G__98634) : fexpr__98635.call(null,G__98634));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__98636 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98636.cljs$core$IFn$_invoke$arity$1 ? fexpr__98636.cljs$core$IFn$_invoke$arity$1(G__98634) : fexpr__98636.call(null,G__98634));
})()], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98637 = new cljs.core.Symbol(null,"??post","??post",1092296697,null);
return (fexpr__98637.cljs$core$IFn$_invoke$arity$1 ? fexpr__98637.cljs$core$IFn$_invoke$arity$1(G__98634) : fexpr__98637.call(null,G__98634));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})());
})(G__98631)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0));
}));

(sicmutils.simplify.rules.idempotent.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.simplify.rules.idempotent.cljs$lang$applyTo = (function (seq98624){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq98624));
}));

/**
 * Set of rules that collect adjacent products, exponents and nested
 *  exponents into exponent terms.
 */
sicmutils.simplify.rules.exponent_contract = pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98650){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98651 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__98651.cljs$core$IFn$_invoke$arity$1 ? fexpr__98651.cljs$core$IFn$_invoke$arity$1(G__98650) : fexpr__98651.call(null,G__98650));
})(),(function (p1__98642_SHARP_){
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__98652 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__98642_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__98642_SHARP_.cljs$core$IFn$_invoke$arity$1(G__98652) : p1__98642_SHARP_.call(null,G__98652));
})(),(function (){var G__98653 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (p1__98642_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__98642_SHARP_.cljs$core$IFn$_invoke$arity$1(G__98653) : p1__98642_SHARP_.call(null,G__98653));
})());
})(G__98650)], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??post","??post",1092296697,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),pattern.rule._EQ__GT_),(function (G__98658){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98659 = new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null);
return (fexpr__98659.cljs$core$IFn$_invoke$arity$1 ? fexpr__98659.cljs$core$IFn$_invoke$arity$1(G__98658) : fexpr__98659.call(null,G__98658));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98660 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__98660.cljs$core$IFn$_invoke$arity$1 ? fexpr__98660.cljs$core$IFn$_invoke$arity$1(G__98658) : fexpr__98660.call(null,G__98658));
})(),(function (p1__98643_SHARP_){
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__98661 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__98643_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__98643_SHARP_.cljs$core$IFn$_invoke$arity$1(G__98661) : p1__98643_SHARP_.call(null,G__98661));
})(),(function (){var G__98662 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (p1__98643_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__98643_SHARP_.cljs$core$IFn$_invoke$arity$1(G__98662) : p1__98643_SHARP_.call(null,G__98662));
})());
})(G__98658)], null))], null),(function (){var fexpr__98664 = new cljs.core.Symbol(null,"??post","??post",1092296697,null);
return (fexpr__98664.cljs$core$IFn$_invoke$arity$1 ? fexpr__98664.cljs$core$IFn$_invoke$arity$1(G__98658) : fexpr__98664.call(null,G__98658));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??post","??post",1092296697,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),pattern.rule._EQ__GT_),(function (G__98669){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98670 = new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null);
return (fexpr__98670.cljs$core$IFn$_invoke$arity$1 ? fexpr__98670.cljs$core$IFn$_invoke$arity$1(G__98669) : fexpr__98670.call(null,G__98669));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98671 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__98671.cljs$core$IFn$_invoke$arity$1 ? fexpr__98671.cljs$core$IFn$_invoke$arity$1(G__98669) : fexpr__98671.call(null,G__98669));
})(),(function (p1__98644_SHARP_){
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__98672 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__98644_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__98644_SHARP_.cljs$core$IFn$_invoke$arity$1(G__98672) : p1__98644_SHARP_.call(null,G__98672));
})(),(1));
})(G__98669)], null))], null),(function (){var fexpr__98673 = new cljs.core.Symbol(null,"??post","??post",1092296697,null);
return (fexpr__98673.cljs$core$IFn$_invoke$arity$1 ? fexpr__98673.cljs$core$IFn$_invoke$arity$1(G__98669) : fexpr__98673.call(null,G__98669));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??post","??post",1092296697,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),pattern.rule._EQ__GT_),(function (G__98678){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98679 = new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null);
return (fexpr__98679.cljs$core$IFn$_invoke$arity$1 ? fexpr__98679.cljs$core$IFn$_invoke$arity$1(G__98678) : fexpr__98679.call(null,G__98678));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98680 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__98680.cljs$core$IFn$_invoke$arity$1 ? fexpr__98680.cljs$core$IFn$_invoke$arity$1(G__98678) : fexpr__98680.call(null,G__98678));
})(),(function (p1__98645_SHARP_){
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__98682 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__98645_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__98645_SHARP_.cljs$core$IFn$_invoke$arity$1(G__98682) : p1__98645_SHARP_.call(null,G__98682));
})(),(1));
})(G__98678)], null))], null),(function (){var fexpr__98685 = new cljs.core.Symbol(null,"??post","??post",1092296697,null);
return (fexpr__98685.cljs$core$IFn$_invoke$arity$1 ? fexpr__98685.cljs$core$IFn$_invoke$arity$1(G__98678) : fexpr__98685.call(null,G__98678));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??post","??post",1092296697,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),pattern.rule._EQ__GT_),(function (G__98693){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98701 = new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null);
return (fexpr__98701.cljs$core$IFn$_invoke$arity$1 ? fexpr__98701.cljs$core$IFn$_invoke$arity$1(G__98693) : fexpr__98701.call(null,G__98693));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98702 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__98702.cljs$core$IFn$_invoke$arity$1 ? fexpr__98702.cljs$core$IFn$_invoke$arity$1(G__98693) : fexpr__98702.call(null,G__98693));
})(),(2)], null))], null),(function (){var fexpr__98708 = new cljs.core.Symbol(null,"??post","??post",1092296697,null);
return (fexpr__98708.cljs$core$IFn$_invoke$arity$1 ? fexpr__98708.cljs$core$IFn$_invoke$arity$1(G__98693) : fexpr__98708.call(null,G__98693));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
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
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98746){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98752 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98752.cljs$core$IFn$_invoke$arity$1 ? fexpr__98752.cljs$core$IFn$_invoke$arity$1(G__98746) : fexpr__98752.call(null,G__98746));
})(),(function (){var fexpr__98754 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__98754.cljs$core$IFn$_invoke$arity$1 ? fexpr__98754.cljs$core$IFn$_invoke$arity$1(G__98746) : fexpr__98754.call(null,G__98746));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98769){
var r__21102__auto__ = (function (){var fexpr__98775 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98775.cljs$core$IFn$_invoke$arity$1 ? fexpr__98775.cljs$core$IFn$_invoke$arity$1(G__98769) : fexpr__98775.call(null,G__98769));
})();
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.guard((function (_){
return sicmutils.simplify.rules._STAR_log_exp_simplify_QMARK__STAR_;
}),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null))),(function (p__98786){
var map__98789 = p__98786;
var map__98789__$1 = cljs.core.__destructure_map(map__98789);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98789__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var and__4251__auto__ = sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),xs], null))], null)),xs], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})(),new cljs.core.Symbol(null,"logexp1","logexp1",-1360132001,null));
if(cljs.core.truth_(and__4251__auto__)){
return x;
} else {
return and__4251__auto__;
}
}))),pattern.rule.guard((function (_){
return sicmutils.simplify.rules._STAR_sqrt_expt_simplify_QMARK__STAR_;
}),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null))),(function (p__98809){
var map__98810 = p__98809;
var map__98810__$1 = cljs.core.__destructure_map(map__98810);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98810__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var and__4251__auto__ = sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),xs], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),xs,(2)], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})(),new cljs.core.Symbol(null,"logexp2","logexp2",-1768907713,null));
if(cljs.core.truth_(and__4251__auto__)){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),x,(2)], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
} else {
return and__4251__auto__;
}
}))),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98816){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__98817 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98817.cljs$core$IFn$_invoke$arity$1 ? fexpr__98817.cljs$core$IFn$_invoke$arity$1(G__98816) : fexpr__98817.call(null,G__98816));
})()], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0))], 0));
});
/**
 * Rule simplifier for forms that contain `magnitude` entries.
 */
sicmutils.simplify.rules.magnitude = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.real_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98825){
var r__21102__auto__ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.magnitude,new cljs.core.Symbol(null,"?n","?n",-2053238410,null))(G__98825);
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98826){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (p__98831){
var map__98832 = p__98831;
var map__98832__$1 = cljs.core.__destructure_map(map__98832);
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98832__$1,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__98819_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,p1__98819_SHARP_,null,(1),null)),(2),null));
}),xs);
})(G__98826)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(1),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98833){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(function (){var fexpr__98834 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98834.cljs$core$IFn$_invoke$arity$1 ? fexpr__98834.cljs$core$IFn$_invoke$arity$1(G__98833) : fexpr__98834.call(null,G__98833));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.even_integer_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98835){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98836 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98836.cljs$core$IFn$_invoke$arity$1 ? fexpr__98836.cljs$core$IFn$_invoke$arity$1(G__98835) : fexpr__98836.call(null,G__98835));
})(),(function (){var fexpr__98837 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__98837.cljs$core$IFn$_invoke$arity$1 ? fexpr__98837.cljs$core$IFn$_invoke$arity$1(G__98835) : fexpr__98837.call(null,G__98835));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__98838){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(function (){var fexpr__98841 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98841.cljs$core$IFn$_invoke$arity$1 ? fexpr__98841.cljs$core$IFn$_invoke$arity$1(G__98838) : fexpr__98841.call(null,G__98838));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98842 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98842.cljs$core$IFn$_invoke$arity$1 ? fexpr__98842.cljs$core$IFn$_invoke$arity$1(G__98838) : fexpr__98842.call(null,G__98838));
})(),(function (p1__98822_SHARP_){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__98844 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__98822_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__98822_SHARP_.cljs$core$IFn$_invoke$arity$1(G__98844) : p1__98822_SHARP_.call(null,G__98844));
})(),(1));
})(G__98838)], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
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
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,(0),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98846){
var r__21102__auto__ = (1);
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(1),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98847){
var r__21102__auto__ = (function (){var fexpr__98848 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98848.cljs$core$IFn$_invoke$arity$1 ? fexpr__98848.cljs$core$IFn$_invoke$arity$1(G__98847) : fexpr__98848.call(null,G__98847));
})();
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,sicmutils.complex.I,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98849){
var r__21102__auto__ = (function (p1__98845_SHARP_){
var G__98851 = cljs.core.mod((function (){var G__98852 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__98845_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__98845_SHARP_.cljs$core$IFn$_invoke$arity$1(G__98852) : p1__98845_SHARP_.call(null,G__98852));
})(),(4));
var fexpr__98850 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),sicmutils.complex.I,(-1),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I)], null);
return (fexpr__98850.cljs$core$IFn$_invoke$arity$1 ? fexpr__98850.cljs$core$IFn$_invoke$arity$1(G__98851) : fexpr__98850.call(null,G__98851));
})(G__98849);
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?b","?b",1575118075,null),null,(1),null)),(2),null)),(3),null)),(function (p__98853){
var map__98854 = p__98853;
var map__98854__$1 = cljs.core.__destructure_map(map__98854);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98854__$1,new cljs.core.Symbol(null,"?a","?a",1314302913,null));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98854__$1,new cljs.core.Symbol(null,"?b","?b",1575118075,null));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98854__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var as = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(a) : simplify.call(null,a));
var bs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(b) : simplify.call(null,b));
if(cljs.core.truth_((function (){var or__4253__auto__ = ((sicmutils.value.integral_QMARK_(as)) && (sicmutils.value.integral_QMARK_(bs)));
if(or__4253__auto__){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = ((sicmutils.simplify.rules.even_integer_QMARK_(bs)) && (sicmutils.value.integral_QMARK_((function (){var G__98855 = (sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(as,bs) : sym_COLON__STAR_.call(null,as,bs));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__98855) : simplify.call(null,G__98855));
})())));
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
var and__4251__auto__ = sicmutils.simplify.rules._STAR_exponent_product_simplify_QMARK__STAR_;
if(cljs.core.truth_(and__4251__auto__)){
return sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),x,as], null)),bs], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),x,(sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(as,bs) : sym_COLON__STAR_.call(null,as,bs))], null))], null));
var or__4253__auto____$2 = r__21102__auto__;
if(or__4253__auto____$2){
return or__4253__auto____$2;
} else {
return pattern.consequence.succeed(r__21102__auto__);
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
})),(function (G__98856){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98857 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98857.cljs$core$IFn$_invoke$arity$1 ? fexpr__98857.cljs$core$IFn$_invoke$arity$1(G__98856) : fexpr__98857.call(null,G__98856));
})(),(function (){var fexpr__98858 = new cljs.core.Symbol(null,"?ab","?ab",-380882607,null);
return (fexpr__98858.cljs$core$IFn$_invoke$arity$1 ? fexpr__98858.cljs$core$IFn$_invoke$arity$1(G__98856) : fexpr__98858.call(null,G__98856));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(function (_){
return sicmutils.simplify.rules._STAR_expt_half__GT_sqrt_QMARK__STAR_;
})),(function (G__98859){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98860 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98860.cljs$core$IFn$_invoke$arity$1 ? fexpr__98860.cljs$core$IFn$_invoke$arity$1(G__98859) : fexpr__98860.call(null,G__98859));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs1*","??fs1*",1798735663,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__98861){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98862 = new cljs.core.Symbol(null,"??fs1","??fs1",-1584583474,null);
return (fexpr__98862.cljs$core$IFn$_invoke$arity$1 ? fexpr__98862.cljs$core$IFn$_invoke$arity$1(G__98861) : fexpr__98862.call(null,G__98861));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98863 = new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null);
return (fexpr__98863.cljs$core$IFn$_invoke$arity$1 ? fexpr__98863.cljs$core$IFn$_invoke$arity$1(G__98861) : fexpr__98863.call(null,G__98861));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98864 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98864.cljs$core$IFn$_invoke$arity$1 ? fexpr__98864.cljs$core$IFn$_invoke$arity$1(G__98861) : fexpr__98864.call(null,G__98861));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(function (){var fexpr__98865 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__98865.cljs$core$IFn$_invoke$arity$1 ? fexpr__98865.cljs$core$IFn$_invoke$arity$1(G__98861) : fexpr__98865.call(null,G__98861));
})()], null))], null))], null),(function (){var fexpr__98866 = new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null);
return (fexpr__98866.cljs$core$IFn$_invoke$arity$1 ? fexpr__98866.cljs$core$IFn$_invoke$arity$1(G__98861) : fexpr__98866.call(null,G__98861));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs1","??fs1",-1584583474,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__98870){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98871 = new cljs.core.Symbol(null,"??fs1","??fs1",-1584583474,null);
return (fexpr__98871.cljs$core$IFn$_invoke$arity$1 ? fexpr__98871.cljs$core$IFn$_invoke$arity$1(G__98870) : fexpr__98871.call(null,G__98870));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98872 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98872.cljs$core$IFn$_invoke$arity$1 ? fexpr__98872.cljs$core$IFn$_invoke$arity$1(G__98870) : fexpr__98872.call(null,G__98870));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(function (){var fexpr__98873 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__98873.cljs$core$IFn$_invoke$arity$1 ? fexpr__98873.cljs$core$IFn$_invoke$arity$1(G__98870) : fexpr__98873.call(null,G__98870));
})()], null))], null))], null),(function (){var fexpr__98874 = new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null);
return (fexpr__98874.cljs$core$IFn$_invoke$arity$1 ? fexpr__98874.cljs$core$IFn$_invoke$arity$1(G__98870) : fexpr__98874.call(null,G__98870));
})(),(function (){var fexpr__98875 = new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null);
return (fexpr__98875.cljs$core$IFn$_invoke$arity$1 ? fexpr__98875.cljs$core$IFn$_invoke$arity$1(G__98870) : fexpr__98875.call(null,G__98870));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs1","??fs1",-1584583474,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y1","?y1",1237029156,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y2","?y2",731715171,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__98876){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98877 = new cljs.core.Symbol(null,"??fs1","??fs1",-1584583474,null);
return (fexpr__98877.cljs$core$IFn$_invoke$arity$1 ? fexpr__98877.cljs$core$IFn$_invoke$arity$1(G__98876) : fexpr__98877.call(null,G__98876));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98878 = new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null);
return (fexpr__98878.cljs$core$IFn$_invoke$arity$1 ? fexpr__98878.cljs$core$IFn$_invoke$arity$1(G__98876) : fexpr__98878.call(null,G__98876));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98879 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98879.cljs$core$IFn$_invoke$arity$1 ? fexpr__98879.cljs$core$IFn$_invoke$arity$1(G__98876) : fexpr__98879.call(null,G__98876));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__98880 = new cljs.core.Symbol(null,"?y1","?y1",1237029156,null);
return (fexpr__98880.cljs$core$IFn$_invoke$arity$1 ? fexpr__98880.cljs$core$IFn$_invoke$arity$1(G__98876) : fexpr__98880.call(null,G__98876));
})(),(function (){var fexpr__98881 = new cljs.core.Symbol(null,"?y2","?y2",731715171,null);
return (fexpr__98881.cljs$core$IFn$_invoke$arity$1 ? fexpr__98881.cljs$core$IFn$_invoke$arity$1(G__98876) : fexpr__98881.call(null,G__98876));
})()], null))], null))], null),(function (){var fexpr__98882 = new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null);
return (fexpr__98882.cljs$core$IFn$_invoke$arity$1 ? fexpr__98882.cljs$core$IFn$_invoke$arity$1(G__98876) : fexpr__98882.call(null,G__98876));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0))], 0));
});
sicmutils.simplify.rules.simplify_square_roots = (function sicmutils$simplify$rules$simplify_square_roots(simplify){
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.even_integer_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98886){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98888 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98888.cljs$core$IFn$_invoke$arity$1 ? fexpr__98888.cljs$core$IFn$_invoke$arity$1(G__98886) : fexpr__98888.call(null,G__98886));
})(),(function (p1__98883_SHARP_){
return sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((function (){var G__98890 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__98883_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__98883_SHARP_.cljs$core$IFn$_invoke$arity$1(G__98890) : p1__98883_SHARP_.call(null,G__98890));
})(),(2));
})(G__98886)], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.guard((function (_){
return sicmutils.simplify.rules._STAR_sqrt_expt_simplify_QMARK__STAR_;
}),pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.even_integer_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(function (p__98891){
var map__98892 = p__98891;
var map__98892__$1 = cljs.core.__destructure_map(map__98892);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98892__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98892__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var half_n = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(n,(2));
if(cljs.core.truth_(sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),xs,n], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),xs,half_n], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})(),new cljs.core.Symbol(null,"simsqrt1","simsqrt1",-1069513157,null)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?new-n","?new-n",-1095502685,null),half_n], null);
} else {
return null;
}
})),(function (G__98893){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98894 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98894.cljs$core$IFn$_invoke$arity$1 ? fexpr__98894.cljs$core$IFn$_invoke$arity$1(G__98893) : fexpr__98894.call(null,G__98893));
})(),(function (){var fexpr__98895 = new cljs.core.Symbol(null,"?new-n","?new-n",-1095502685,null);
return (fexpr__98895.cljs$core$IFn$_invoke$arity$1 ? fexpr__98895.cljs$core$IFn$_invoke$arity$1(G__98893) : fexpr__98895.call(null,G__98893));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.odd_positive_integer_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(function (p__98896){
var map__98897 = p__98896;
var map__98897__$1 = cljs.core.__destructure_map(map__98897);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98897__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98897__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var half_dec_n = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(n,(1)),(2));
if(cljs.core.truth_(sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),xs,n], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),xs,half_dec_n], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})(),new cljs.core.Symbol(null,"simsqrt2","simsqrt2",-1794028771,null)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?new-n","?new-n",-1095502685,null),half_dec_n], null);
} else {
return null;
}
})),(function (G__98900){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98902 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98902.cljs$core$IFn$_invoke$arity$1 ? fexpr__98902.cljs$core$IFn$_invoke$arity$1(G__98900) : fexpr__98902.call(null,G__98900));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98903 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98903.cljs$core$IFn$_invoke$arity$1 ? fexpr__98903.cljs$core$IFn$_invoke$arity$1(G__98900) : fexpr__98903.call(null,G__98900));
})(),(function (){var fexpr__98904 = new cljs.core.Symbol(null,"?new-n","?new-n",-1095502685,null);
return (fexpr__98904.cljs$core$IFn$_invoke$arity$1 ? fexpr__98904.cljs$core$IFn$_invoke$arity$1(G__98900) : fexpr__98904.call(null,G__98900));
})()], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0)))], 0)),pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.odd_integer_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98905){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98906 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98906.cljs$core$IFn$_invoke$arity$1 ? fexpr__98906.cljs$core$IFn$_invoke$arity$1(G__98905) : fexpr__98906.call(null,G__98905));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__98907 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98907.cljs$core$IFn$_invoke$arity$1 ? fexpr__98907.cljs$core$IFn$_invoke$arity$1(G__98905) : fexpr__98907.call(null,G__98905));
})(),(function (p1__98884_SHARP_){
return sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__98908 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__98884_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__98884_SHARP_.cljs$core$IFn$_invoke$arity$1(G__98908) : p1__98884_SHARP_.call(null,G__98908));
})(),(1)),(2));
})(G__98905)], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98909){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98910 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98910.cljs$core$IFn$_invoke$arity$1 ? fexpr__98910.cljs$core$IFn$_invoke$arity$1(G__98909) : fexpr__98910.call(null,G__98909));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98914){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98918 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98918.cljs$core$IFn$_invoke$arity$1 ? fexpr__98918.cljs$core$IFn$_invoke$arity$1(G__98914) : fexpr__98918.call(null,G__98914));
})()], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98924){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98928 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__98928.cljs$core$IFn$_invoke$arity$1 ? fexpr__98928.cljs$core$IFn$_invoke$arity$1(G__98924) : fexpr__98928.call(null,G__98924));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98929 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98929.cljs$core$IFn$_invoke$arity$1 ? fexpr__98929.cljs$core$IFn$_invoke$arity$1(G__98924) : fexpr__98929.call(null,G__98924));
})()], null))], null),(function (){var fexpr__98930 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__98930.cljs$core$IFn$_invoke$arity$1 ? fexpr__98930.cljs$core$IFn$_invoke$arity$1(G__98924) : fexpr__98930.call(null,G__98924));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98934){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98935 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__98935.cljs$core$IFn$_invoke$arity$1 ? fexpr__98935.cljs$core$IFn$_invoke$arity$1(G__98934) : fexpr__98935.call(null,G__98934));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98936 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__98936.cljs$core$IFn$_invoke$arity$1 ? fexpr__98936.cljs$core$IFn$_invoke$arity$1(G__98934) : fexpr__98936.call(null,G__98934));
})()], 0))),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98937 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98937.cljs$core$IFn$_invoke$arity$1 ? fexpr__98937.cljs$core$IFn$_invoke$arity$1(G__98934) : fexpr__98937.call(null,G__98934));
})()], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98941){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98942 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98942.cljs$core$IFn$_invoke$arity$1 ? fexpr__98942.cljs$core$IFn$_invoke$arity$1(G__98941) : fexpr__98942.call(null,G__98941));
})()], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98946 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__98946.cljs$core$IFn$_invoke$arity$1 ? fexpr__98946.cljs$core$IFn$_invoke$arity$1(G__98941) : fexpr__98946.call(null,G__98941));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98947 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__98947.cljs$core$IFn$_invoke$arity$1 ? fexpr__98947.cljs$core$IFn$_invoke$arity$1(G__98941) : fexpr__98947.call(null,G__98941));
})()], 0)))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98948){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98949 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__98949.cljs$core$IFn$_invoke$arity$1 ? fexpr__98949.cljs$core$IFn$_invoke$arity$1(G__98948) : fexpr__98949.call(null,G__98948));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98950 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98950.cljs$core$IFn$_invoke$arity$1 ? fexpr__98950.cljs$core$IFn$_invoke$arity$1(G__98948) : fexpr__98950.call(null,G__98948));
})()], null))], null),(function (){var fexpr__98951 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__98951.cljs$core$IFn$_invoke$arity$1 ? fexpr__98951.cljs$core$IFn$_invoke$arity$1(G__98948) : fexpr__98951.call(null,G__98948));
})()], 0)))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??p","??p",1112654910,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??q","??q",253374785,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98952){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98953 = new cljs.core.Symbol(null,"??p","??p",1112654910,null);
return (fexpr__98953.cljs$core$IFn$_invoke$arity$1 ? fexpr__98953.cljs$core$IFn$_invoke$arity$1(G__98952) : fexpr__98953.call(null,G__98952));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98954 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98954.cljs$core$IFn$_invoke$arity$1 ? fexpr__98954.cljs$core$IFn$_invoke$arity$1(G__98952) : fexpr__98954.call(null,G__98952));
})()], null))], null),(function (){var fexpr__98955 = new cljs.core.Symbol(null,"??q","??q",253374785,null);
return (fexpr__98955.cljs$core$IFn$_invoke$arity$1 ? fexpr__98955.cljs$core$IFn$_invoke$arity$1(G__98952) : fexpr__98955.call(null,G__98952));
})()], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98956 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__98956.cljs$core$IFn$_invoke$arity$1 ? fexpr__98956.cljs$core$IFn$_invoke$arity$1(G__98952) : fexpr__98956.call(null,G__98952));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98957 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__98957.cljs$core$IFn$_invoke$arity$1 ? fexpr__98957.cljs$core$IFn$_invoke$arity$1(G__98952) : fexpr__98957.call(null,G__98952));
})()], 0)))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??p","??p",1112654910,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??q","??q",253374785,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__98958){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98959 = new cljs.core.Symbol(null,"??p","??p",1112654910,null);
return (fexpr__98959.cljs$core$IFn$_invoke$arity$1 ? fexpr__98959.cljs$core$IFn$_invoke$arity$1(G__98958) : fexpr__98959.call(null,G__98958));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__98960 = new cljs.core.Symbol(null,"??q","??q",253374785,null);
return (fexpr__98960.cljs$core$IFn$_invoke$arity$1 ? fexpr__98960.cljs$core$IFn$_invoke$arity$1(G__98958) : fexpr__98960.call(null,G__98958));
})()], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__98961 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__98961.cljs$core$IFn$_invoke$arity$1 ? fexpr__98961.cljs$core$IFn$_invoke$arity$1(G__98958) : fexpr__98961.call(null,G__98958));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98962 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98962.cljs$core$IFn$_invoke$arity$1 ? fexpr__98962.cljs$core$IFn$_invoke$arity$1(G__98958) : fexpr__98962.call(null,G__98958));
})()], null))], null),(function (){var fexpr__98963 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__98963.cljs$core$IFn$_invoke$arity$1 ? fexpr__98963.cljs$core$IFn$_invoke$arity$1(G__98958) : fexpr__98963.call(null,G__98958));
})()], 0)))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
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
var G__98965 = arguments.length;
switch (G__98965) {
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
return (function (p__98968){
var map__98969 = p__98968;
var map__98969__$1 = cljs.core.__destructure_map(map__98969);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98969__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98969__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
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
}),pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pred(new cljs.core.Symbol(null,"e1","e1",-732861271,null))),(function (G__98971){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98972 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98972.cljs$core$IFn$_invoke$arity$1 ? fexpr__98972.cljs$core$IFn$_invoke$arity$1(G__98971) : fexpr__98972.call(null,G__98971));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98973 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__98973.cljs$core$IFn$_invoke$arity$1 ? fexpr__98973.cljs$core$IFn$_invoke$arity$1(G__98971) : fexpr__98973.call(null,G__98971));
})()], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pred(new cljs.core.Symbol(null,"e2","e2",1288255343,null))),(function (G__98976){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98977 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98977.cljs$core$IFn$_invoke$arity$1 ? fexpr__98977.cljs$core$IFn$_invoke$arity$1(G__98976) : fexpr__98977.call(null,G__98976));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__98978 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__98978.cljs$core$IFn$_invoke$arity$1 ? fexpr__98978.cljs$core$IFn$_invoke$arity$1(G__98976) : fexpr__98978.call(null,G__98976));
})()], null),(function (){var fexpr__98979 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__98979.cljs$core$IFn$_invoke$arity$1 ? fexpr__98979.cljs$core$IFn$_invoke$arity$1(G__98976) : fexpr__98979.call(null,G__98976));
})()))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pred(new cljs.core.Symbol(null,"e3","e3",980159791,null))),(function (G__98980){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98981 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98981.cljs$core$IFn$_invoke$arity$1 ? fexpr__98981.cljs$core$IFn$_invoke$arity$1(G__98980) : fexpr__98981.call(null,G__98980));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98982 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__98982.cljs$core$IFn$_invoke$arity$1 ? fexpr__98982.cljs$core$IFn$_invoke$arity$1(G__98980) : fexpr__98982.call(null,G__98980));
})()], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pred(new cljs.core.Symbol(null,"e4","e4",-714258248,null))),(function (G__98984){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__98986 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__98986.cljs$core$IFn$_invoke$arity$1 ? fexpr__98986.cljs$core$IFn$_invoke$arity$1(G__98984) : fexpr__98986.call(null,G__98984));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__98987 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__98987.cljs$core$IFn$_invoke$arity$1 ? fexpr__98987.cljs$core$IFn$_invoke$arity$1(G__98984) : fexpr__98987.call(null,G__98984));
})()], null),(function (){var fexpr__98988 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__98988.cljs$core$IFn$_invoke$arity$1 ? fexpr__98988.cljs$core$IFn$_invoke$arity$1(G__98984) : fexpr__98988.call(null,G__98984));
})()))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0))], 0))));
});
sicmutils.simplify.rules.sqrt_contract = (function sicmutils$simplify$rules$sqrt_contract(simplify){
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null))),(function (p__98994){
var map__98995 = p__98994;
var map__98995__$1 = cljs.core.__destructure_map(map__98995);
var m = map__98995__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98995__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98995__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(xs,ys))){
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.Symbol(null,"c1","c1",-1521904966,null));
if(and__4251__auto__){
var G__99003 = m;
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99004 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__99004.cljs$core$IFn$_invoke$arity$1 ? fexpr__99004.cljs$core$IFn$_invoke$arity$1(G__99003) : fexpr__99004.call(null,G__99003));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs], null),(function (){var fexpr__99005 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__99005.cljs$core$IFn$_invoke$arity$1 ? fexpr__99005.cljs$core$IFn$_invoke$arity$1(G__99003) : fexpr__99005.call(null,G__99003));
})(),(function (){var fexpr__99006 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__99006.cljs$core$IFn$_invoke$arity$1 ? fexpr__99006.cljs$core$IFn$_invoke$arity$1(G__99003) : fexpr__99006.call(null,G__99003));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
} else {
return and__4251__auto__;
}
} else {
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3(xs,ys,new cljs.core.Symbol(null,"c1","c1",-1521904966,null));
if(and__4251__auto__){
var G__99007 = m;
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99008 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__99008.cljs$core$IFn$_invoke$arity$1 ? fexpr__99008.cljs$core$IFn$_invoke$arity$1(G__99007) : fexpr__99008.call(null,G__99007));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),xs,ys], null))], null))], null),(function (){var fexpr__99009 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__99009.cljs$core$IFn$_invoke$arity$1 ? fexpr__99009.cljs$core$IFn$_invoke$arity$1(G__99007) : fexpr__99009.call(null,G__99007));
})(),(function (){var fexpr__99010 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__99010.cljs$core$IFn$_invoke$arity$1 ? fexpr__99010.cljs$core$IFn$_invoke$arity$1(G__99007) : fexpr__99010.call(null,G__99007));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
} else {
return and__4251__auto__;
}
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null))),(function (p__99011){
var map__99012 = p__99011;
var map__99012__$1 = cljs.core.__destructure_map(map__99012);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99012__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99012__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
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
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),xs,ys], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
} else {
return and__4251__auto__;
}
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null))),(function (p__99016){
var map__99017 = p__99016;
var map__99017__$1 = cljs.core.__destructure_map(map__99017);
var m = map__99017__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99017__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99017__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(xs,ys))){
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.Symbol(null,"c3","c3",468715789,null));
if(and__4251__auto__){
var G__99018 = m;
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99019 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__99019.cljs$core$IFn$_invoke$arity$1 ? fexpr__99019.cljs$core$IFn$_invoke$arity$1(G__99018) : fexpr__99019.call(null,G__99018));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99020 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__99020.cljs$core$IFn$_invoke$arity$1 ? fexpr__99020.cljs$core$IFn$_invoke$arity$1(G__99018) : fexpr__99020.call(null,G__99018));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
} else {
return and__4251__auto__;
}
} else {
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3(xs,ys,new cljs.core.Symbol(null,"c3","c3",468715789,null));
if(and__4251__auto__){
var G__99021 = m;
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99022 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__99022.cljs$core$IFn$_invoke$arity$1 ? fexpr__99022.cljs$core$IFn$_invoke$arity$1(G__99021) : fexpr__99022.call(null,G__99021));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),xs,ys], null))], null))], null),(function (){var fexpr__99023 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__99023.cljs$core$IFn$_invoke$arity$1 ? fexpr__99023.cljs$core$IFn$_invoke$arity$1(G__99021) : fexpr__99023.call(null,G__99021));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
} else {
return and__4251__auto__;
}
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null))),(function (p__99024){
var map__99025 = p__99024;
var map__99025__$1 = cljs.core.__destructure_map(map__99025);
var m = map__99025__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99025__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99025__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(xs,ys))){
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.Symbol(null,"c4","c4",-1626390159,null));
if(and__4251__auto__){
var G__99026 = m;
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99027 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__99027.cljs$core$IFn$_invoke$arity$1 ? fexpr__99027.cljs$core$IFn$_invoke$arity$1(G__99026) : fexpr__99027.call(null,G__99026));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99028 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__99028.cljs$core$IFn$_invoke$arity$1 ? fexpr__99028.cljs$core$IFn$_invoke$arity$1(G__99026) : fexpr__99028.call(null,G__99026));
})()], 0)))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
} else {
return and__4251__auto__;
}
} else {
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3(xs,ys,new cljs.core.Symbol(null,"c4","c4",-1626390159,null));
if(and__4251__auto__){
var G__99029 = m;
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),xs,ys], null))], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99030 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__99030.cljs$core$IFn$_invoke$arity$1 ? fexpr__99030.cljs$core$IFn$_invoke$arity$1(G__99029) : fexpr__99030.call(null,G__99029));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99031 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__99031.cljs$core$IFn$_invoke$arity$1 ? fexpr__99031.cljs$core$IFn$_invoke$arity$1(G__99029) : fexpr__99031.call(null,G__99029));
})()], 0)))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
} else {
return and__4251__auto__;
}
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??d","??d",-581862453,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null))),(function (p__99032){
var map__99033 = p__99032;
var map__99033__$1 = cljs.core.__destructure_map(map__99033);
var m = map__99033__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99033__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99033__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(xs,ys))){
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.Symbol(null,"c5","c5",1025457982,null));
if(and__4251__auto__){
var G__99034 = m;
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99035 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__99035.cljs$core$IFn$_invoke$arity$1 ? fexpr__99035.cljs$core$IFn$_invoke$arity$1(G__99034) : fexpr__99035.call(null,G__99034));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99036 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__99036.cljs$core$IFn$_invoke$arity$1 ? fexpr__99036.cljs$core$IFn$_invoke$arity$1(G__99034) : fexpr__99036.call(null,G__99034));
})()], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99037 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__99037.cljs$core$IFn$_invoke$arity$1 ? fexpr__99037.cljs$core$IFn$_invoke$arity$1(G__99034) : fexpr__99037.call(null,G__99034));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99038 = new cljs.core.Symbol(null,"??d","??d",-581862453,null);
return (fexpr__99038.cljs$core$IFn$_invoke$arity$1 ? fexpr__99038.cljs$core$IFn$_invoke$arity$1(G__99034) : fexpr__99038.call(null,G__99034));
})()], 0)))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
} else {
return and__4251__auto__;
}
} else {
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3(xs,ys,new cljs.core.Symbol(null,"c5","c5",1025457982,null));
if(and__4251__auto__){
var G__99039 = m;
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99040 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__99040.cljs$core$IFn$_invoke$arity$1 ? fexpr__99040.cljs$core$IFn$_invoke$arity$1(G__99039) : fexpr__99040.call(null,G__99039));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),xs,ys], null))], null))], null),(function (){var fexpr__99041 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__99041.cljs$core$IFn$_invoke$arity$1 ? fexpr__99041.cljs$core$IFn$_invoke$arity$1(G__99039) : fexpr__99041.call(null,G__99039));
})()], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99042 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__99042.cljs$core$IFn$_invoke$arity$1 ? fexpr__99042.cljs$core$IFn$_invoke$arity$1(G__99039) : fexpr__99042.call(null,G__99039));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99043 = new cljs.core.Symbol(null,"??d","??d",-581862453,null);
return (fexpr__99043.cljs$core$IFn$_invoke$arity$1 ? fexpr__99043.cljs$core$IFn$_invoke$arity$1(G__99039) : fexpr__99043.call(null,G__99039));
})()], 0)))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
} else {
return and__4251__auto__;
}
}
}))], 0))], 0));
});
sicmutils.simplify.rules.specfun__GT_logexp = (function (){var two_i = sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$2(0.0,2.0);
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99044){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__99045 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99045.cljs$core$IFn$_invoke$arity$1 ? fexpr__99045.cljs$core$IFn$_invoke$arity$1(G__99044) : fexpr__99045.call(null,G__99044));
})()], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99046){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__99047 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__99047.cljs$core$IFn$_invoke$arity$1 ? fexpr__99047.cljs$core$IFn$_invoke$arity$1(G__99046) : fexpr__99047.call(null,G__99046));
})()], null))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__99048 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__99048.cljs$core$IFn$_invoke$arity$1 ? fexpr__99048.cljs$core$IFn$_invoke$arity$1(G__99046) : fexpr__99048.call(null,G__99046));
})()], null))], null))], null))], null)),two_i], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99049){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__99050 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__99050.cljs$core$IFn$_invoke$arity$1 ? fexpr__99050.cljs$core$IFn$_invoke$arity$1(G__99049) : fexpr__99050.call(null,G__99049));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__99051 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__99051.cljs$core$IFn$_invoke$arity$1 ? fexpr__99051.cljs$core$IFn$_invoke$arity$1(G__99049) : fexpr__99051.call(null,G__99049));
})(),(2)], null))], null))], null))], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99052){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99053 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__99053.cljs$core$IFn$_invoke$arity$1 ? fexpr__99053.cljs$core$IFn$_invoke$arity$1(G__99052) : fexpr__99053.call(null,G__99052));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__99054 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__99054.cljs$core$IFn$_invoke$arity$1 ? fexpr__99054.cljs$core$IFn$_invoke$arity$1(G__99052) : fexpr__99054.call(null,G__99052));
})(),(2)], null))], null))], null))], null))], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?u","?u",749886731,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99055){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__99056 = new cljs.core.Symbol(null,"?u","?u",749886731,null);
return (fexpr__99056.cljs$core$IFn$_invoke$arity$1 ? fexpr__99056.cljs$core$IFn$_invoke$arity$1(G__99055) : fexpr__99056.call(null,G__99055));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-1),(function (){var fexpr__99057 = new cljs.core.Symbol(null,"?u","?u",749886731,null);
return (fexpr__99057.cljs$core$IFn$_invoke$arity$1 ? fexpr__99057.cljs$core$IFn$_invoke$arity$1(G__99055) : fexpr__99057.call(null,G__99055));
})()], null))], null))], null)),(2)], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?u","?u",749886731,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99058){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__99059 = new cljs.core.Symbol(null,"?u","?u",749886731,null);
return (fexpr__99059.cljs$core$IFn$_invoke$arity$1 ? fexpr__99059.cljs$core$IFn$_invoke$arity$1(G__99058) : fexpr__99059.call(null,G__99058));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-1),(function (){var fexpr__99060 = new cljs.core.Symbol(null,"?u","?u",749886731,null);
return (fexpr__99060.cljs$core$IFn$_invoke$arity$1 ? fexpr__99060.cljs$core$IFn$_invoke$arity$1(G__99058) : fexpr__99060.call(null,G__99058));
})()], null))], null))], null)),(2)], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,sicmutils.simplify.rules.not_integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99061){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99062 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99062.cljs$core$IFn$_invoke$arity$1 ? fexpr__99062.cljs$core$IFn$_invoke$arity$1(G__99061) : fexpr__99062.call(null,G__99061));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__99063 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99063.cljs$core$IFn$_invoke$arity$1 ? fexpr__99063.cljs$core$IFn$_invoke$arity$1(G__99061) : fexpr__99063.call(null,G__99061));
})()], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0))], 0));
})();
sicmutils.simplify.rules.logexp__GT_specfun = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99064){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__99065 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99065.cljs$core$IFn$_invoke$arity$1 ? fexpr__99065.cljs$core$IFn$_invoke$arity$1(G__99064) : fexpr__99065.call(null,G__99064));
})(),(-1)], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99066){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__99067 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99067.cljs$core$IFn$_invoke$arity$1 ? fexpr__99067.cljs$core$IFn$_invoke$arity$1(G__99066) : fexpr__99067.call(null,G__99066));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99068){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__99069 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99069.cljs$core$IFn$_invoke$arity$1 ? fexpr__99069.cljs$core$IFn$_invoke$arity$1(G__99068) : fexpr__99069.call(null,G__99068));
})()], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(3),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99070){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__99071 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99071.cljs$core$IFn$_invoke$arity$1 ? fexpr__99071.cljs$core$IFn$_invoke$arity$1(G__99070) : fexpr__99071.call(null,G__99070));
})()], null)),(3)], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(-3),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99072){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__99073 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99073.cljs$core$IFn$_invoke$arity$1 ? fexpr__99073.cljs$core$IFn$_invoke$arity$1(G__99072) : fexpr__99073.call(null,G__99072));
})()], null)),(-3)], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99074){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__99075 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99075.cljs$core$IFn$_invoke$arity$1 ? fexpr__99075.cljs$core$IFn$_invoke$arity$1(G__99074) : fexpr__99075.call(null,G__99074));
})(),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99076 = new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null);
return (fexpr__99076.cljs$core$IFn$_invoke$arity$1 ? fexpr__99076.cljs$core$IFn$_invoke$arity$1(G__99074) : fexpr__99076.call(null,G__99074));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99077 = new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null);
return (fexpr__99077.cljs$core$IFn$_invoke$arity$1 ? fexpr__99077.cljs$core$IFn$_invoke$arity$1(G__99074) : fexpr__99077.call(null,G__99074));
})()], 0)))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.log_contract = (function sicmutils$simplify$rules$log_contract(simplify){
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x3","??x3",-411077265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x4","?x4",94899597,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x5","??x5",1822045235,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__99078){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__99079 = new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null);
return (fexpr__99079.cljs$core$IFn$_invoke$arity$1 ? fexpr__99079.cljs$core$IFn$_invoke$arity$1(G__99078) : fexpr__99079.call(null,G__99078));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99080 = new cljs.core.Symbol(null,"??x3","??x3",-411077265,null);
return (fexpr__99080.cljs$core$IFn$_invoke$arity$1 ? fexpr__99080.cljs$core$IFn$_invoke$arity$1(G__99078) : fexpr__99080.call(null,G__99078));
})(),(function (){var fexpr__99081 = new cljs.core.Symbol(null,"??x5","??x5",1822045235,null);
return (fexpr__99081.cljs$core$IFn$_invoke$arity$1 ? fexpr__99081.cljs$core$IFn$_invoke$arity$1(G__99078) : fexpr__99081.call(null,G__99078));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99082 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__99082.cljs$core$IFn$_invoke$arity$1 ? fexpr__99082.cljs$core$IFn$_invoke$arity$1(G__99078) : fexpr__99082.call(null,G__99078));
})(),(function (){var fexpr__99083 = new cljs.core.Symbol(null,"?x4","?x4",94899597,null);
return (fexpr__99083.cljs$core$IFn$_invoke$arity$1 ? fexpr__99083.cljs$core$IFn$_invoke$arity$1(G__99078) : fexpr__99083.call(null,G__99078));
})()], null))], null))], null)], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99084){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__99085 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99085.cljs$core$IFn$_invoke$arity$1 ? fexpr__99085.cljs$core$IFn$_invoke$arity$1(G__99084) : fexpr__99085.call(null,G__99084));
})(),(function (){var fexpr__99086 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99086.cljs$core$IFn$_invoke$arity$1 ? fexpr__99086.cljs$core$IFn$_invoke$arity$1(G__99084) : fexpr__99086.call(null,G__99084));
})()], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f2","??f2",745277317,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x2","??x2",169445330,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f3","??f3",-1809203400,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f4","??f4",1817370441,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x3","??x3",-411077265,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(function (m){
var s1 = (function (){var G__99087 = (function (){var G__99088 = m;
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99089 = new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null);
return (fexpr__99089.cljs$core$IFn$_invoke$arity$1 ? fexpr__99089.cljs$core$IFn$_invoke$arity$1(G__99088) : fexpr__99089.call(null,G__99088));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99090 = new cljs.core.Symbol(null,"??f2","??f2",745277317,null);
return (fexpr__99090.cljs$core$IFn$_invoke$arity$1 ? fexpr__99090.cljs$core$IFn$_invoke$arity$1(G__99088) : fexpr__99090.call(null,G__99088));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99087) : simplify.call(null,G__99087));
})();
var s2 = (function (){var G__99091 = (function (){var G__99092 = m;
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99093 = new cljs.core.Symbol(null,"??f3","??f3",-1809203400,null);
return (fexpr__99093.cljs$core$IFn$_invoke$arity$1 ? fexpr__99093.cljs$core$IFn$_invoke$arity$1(G__99092) : fexpr__99093.call(null,G__99092));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99094 = new cljs.core.Symbol(null,"??f4","??f4",1817370441,null);
return (fexpr__99094.cljs$core$IFn$_invoke$arity$1 ? fexpr__99094.cljs$core$IFn$_invoke$arity$1(G__99092) : fexpr__99094.call(null,G__99092));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99091) : simplify.call(null,G__99091));
})();
if(sicmutils.value.exact_zero_QMARK_((function (){var G__99095 = (new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,s1,(new cljs.core.List(null,s2,null,(1),null)),(2),null)),(3),null));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99095) : simplify.call(null,G__99095));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"??s1","??s1",753911801,null),s1], null);
} else {
return null;
}
})),(function (G__99096){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99097 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99097.cljs$core$IFn$_invoke$arity$1 ? fexpr__99097.cljs$core$IFn$_invoke$arity$1(G__99096) : fexpr__99097.call(null,G__99096));
})(),(function (){var fexpr__99098 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99098.cljs$core$IFn$_invoke$arity$1 ? fexpr__99098.cljs$core$IFn$_invoke$arity$1(G__99096) : fexpr__99098.call(null,G__99096));
})()], null))], null))], null),(function (){var fexpr__99099 = new cljs.core.Symbol(null,"??s1","??s1",753911801,null);
return (fexpr__99099.cljs$core$IFn$_invoke$arity$1 ? fexpr__99099.cljs$core$IFn$_invoke$arity$1(G__99096) : fexpr__99099.call(null,G__99096));
})()))], null),(function (){var fexpr__99100 = new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null);
return (fexpr__99100.cljs$core$IFn$_invoke$arity$1 ? fexpr__99100.cljs$core$IFn$_invoke$arity$1(G__99096) : fexpr__99100.call(null,G__99096));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99101 = new cljs.core.Symbol(null,"??x2","??x2",169445330,null);
return (fexpr__99101.cljs$core$IFn$_invoke$arity$1 ? fexpr__99101.cljs$core$IFn$_invoke$arity$1(G__99096) : fexpr__99101.call(null,G__99096));
})(),(function (){var fexpr__99102 = new cljs.core.Symbol(null,"??x3","??x3",-411077265,null);
return (fexpr__99102.cljs$core$IFn$_invoke$arity$1 ? fexpr__99102.cljs$core$IFn$_invoke$arity$1(G__99096) : fexpr__99102.call(null,G__99096));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0))], 0));
});
sicmutils.simplify.rules.log_expand = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x1","?x1",697080023,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99103){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__99104 = new cljs.core.Symbol(null,"?x1","?x1",697080023,null);
return (fexpr__99104.cljs$core$IFn$_invoke$arity$1 ? fexpr__99104.cljs$core$IFn$_invoke$arity$1(G__99103) : fexpr__99104.call(null,G__99103));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99105 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__99105.cljs$core$IFn$_invoke$arity$1 ? fexpr__99105.cljs$core$IFn$_invoke$arity$1(G__99103) : fexpr__99105.call(null,G__99103));
})()], null),(function (){var fexpr__99106 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__99106.cljs$core$IFn$_invoke$arity$1 ? fexpr__99106.cljs$core$IFn$_invoke$arity$1(G__99103) : fexpr__99106.call(null,G__99103));
})()))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x1","?x1",697080023,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99107){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__99108 = new cljs.core.Symbol(null,"?x1","?x1",697080023,null);
return (fexpr__99108.cljs$core$IFn$_invoke$arity$1 ? fexpr__99108.cljs$core$IFn$_invoke$arity$1(G__99107) : fexpr__99108.call(null,G__99107));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__99109 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__99109.cljs$core$IFn$_invoke$arity$1 ? fexpr__99109.cljs$core$IFn$_invoke$arity$1(G__99107) : fexpr__99109.call(null,G__99107));
})()], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?e","?e",-1194391683,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99110){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99111 = new cljs.core.Symbol(null,"?e","?e",-1194391683,null);
return (fexpr__99111.cljs$core$IFn$_invoke$arity$1 ? fexpr__99111.cljs$core$IFn$_invoke$arity$1(G__99110) : fexpr__99111.call(null,G__99110));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__99112 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99112.cljs$core$IFn$_invoke$arity$1 ? fexpr__99112.cljs$core$IFn$_invoke$arity$1(G__99110) : fexpr__99112.call(null,G__99110));
})()], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.log_extra = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f2","??f2",745277317,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),pattern.rule._EQ__GT_),(function (G__99113){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99114 = new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null);
return (fexpr__99114.cljs$core$IFn$_invoke$arity$1 ? fexpr__99114.cljs$core$IFn$_invoke$arity$1(G__99113) : fexpr__99114.call(null,G__99113));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__99115 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99115.cljs$core$IFn$_invoke$arity$1 ? fexpr__99115.cljs$core$IFn$_invoke$arity$1(G__99113) : fexpr__99115.call(null,G__99113));
})(),(function (){var fexpr__99116 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__99116.cljs$core$IFn$_invoke$arity$1 ? fexpr__99116.cljs$core$IFn$_invoke$arity$1(G__99113) : fexpr__99116.call(null,G__99113));
})()], null))], null))], null),(function (){var fexpr__99117 = new cljs.core.Symbol(null,"??f2","??f2",745277317,null);
return (fexpr__99117.cljs$core$IFn$_invoke$arity$1 ? fexpr__99117.cljs$core$IFn$_invoke$arity$1(G__99113) : fexpr__99117.call(null,G__99113));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.canonicalize_partials = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99130){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__99131 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__99131.cljs$core$IFn$_invoke$arity$1 ? fexpr__99131.cljs$core$IFn$_invoke$arity$1(G__99130) : fexpr__99131.call(null,G__99130));
})())),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__99132 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__99132.cljs$core$IFn$_invoke$arity$1 ? fexpr__99132.cljs$core$IFn$_invoke$arity$1(G__99130) : fexpr__99132.call(null,G__99130));
})()))], null)),(function (){var fexpr__99138 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__99138.cljs$core$IFn$_invoke$arity$1 ? fexpr__99138.cljs$core$IFn$_invoke$arity$1(G__99130) : fexpr__99138.call(null,G__99130));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??more","??more",-1836200365,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99146){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__99147 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__99147.cljs$core$IFn$_invoke$arity$1 ? fexpr__99147.cljs$core$IFn$_invoke$arity$1(G__99146) : fexpr__99147.call(null,G__99146));
})())),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__99148 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__99148.cljs$core$IFn$_invoke$arity$1 ? fexpr__99148.cljs$core$IFn$_invoke$arity$1(G__99146) : fexpr__99148.call(null,G__99146));
})()))], null),(function (){var fexpr__99149 = new cljs.core.Symbol(null,"??more","??more",-1836200365,null);
return (fexpr__99149.cljs$core$IFn$_invoke$arity$1 ? fexpr__99149.cljs$core$IFn$_invoke$arity$1(G__99146) : fexpr__99149.call(null,G__99146));
})())),(function (){var fexpr__99150 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__99150.cljs$core$IFn$_invoke$arity$1 ? fexpr__99150.cljs$core$IFn$_invoke$arity$1(G__99146) : fexpr__99150.call(null,G__99146));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99152){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__99156 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__99156.cljs$core$IFn$_invoke$arity$1 ? fexpr__99156.cljs$core$IFn$_invoke$arity$1(G__99152) : fexpr__99156.call(null,G__99152));
})())),(function (){var fexpr__99157 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__99157.cljs$core$IFn$_invoke$arity$1 ? fexpr__99157.cljs$core$IFn$_invoke$arity$1(G__99152) : fexpr__99157.call(null,G__99152));
})()], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__99158 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__99158.cljs$core$IFn$_invoke$arity$1 ? fexpr__99158.cljs$core$IFn$_invoke$arity$1(G__99152) : fexpr__99158.call(null,G__99152));
})()))], null)),(function (){var fexpr__99159 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__99159.cljs$core$IFn$_invoke$arity$1 ? fexpr__99159.cljs$core$IFn$_invoke$arity$1(G__99152) : fexpr__99159.call(null,G__99152));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99162){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__99169 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__99169.cljs$core$IFn$_invoke$arity$1 ? fexpr__99169.cljs$core$IFn$_invoke$arity$1(G__99162) : fexpr__99169.call(null,G__99162));
})())),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__99170 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__99170.cljs$core$IFn$_invoke$arity$1 ? fexpr__99170.cljs$core$IFn$_invoke$arity$1(G__99162) : fexpr__99170.call(null,G__99162));
})())),(function (){var fexpr__99171 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__99171.cljs$core$IFn$_invoke$arity$1 ? fexpr__99171.cljs$core$IFn$_invoke$arity$1(G__99162) : fexpr__99171.call(null,G__99162));
})()], null))], null)),(function (){var fexpr__99172 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__99172.cljs$core$IFn$_invoke$arity$1 ? fexpr__99172.cljs$core$IFn$_invoke$arity$1(G__99162) : fexpr__99172.call(null,G__99162));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99173){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__99174 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__99174.cljs$core$IFn$_invoke$arity$1 ? fexpr__99174.cljs$core$IFn$_invoke$arity$1(G__99173) : fexpr__99174.call(null,G__99173));
})())),(function (){var fexpr__99175 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__99175.cljs$core$IFn$_invoke$arity$1 ? fexpr__99175.cljs$core$IFn$_invoke$arity$1(G__99173) : fexpr__99175.call(null,G__99173));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__99176 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__99176.cljs$core$IFn$_invoke$arity$1 ? fexpr__99176.cljs$core$IFn$_invoke$arity$1(G__99173) : fexpr__99176.call(null,G__99173));
})())),(function (){var fexpr__99177 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__99177.cljs$core$IFn$_invoke$arity$1 ? fexpr__99177.cljs$core$IFn$_invoke$arity$1(G__99173) : fexpr__99177.call(null,G__99173));
})()], null))], null)),(function (){var fexpr__99178 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__99178.cljs$core$IFn$_invoke$arity$1 ? fexpr__99178.cljs$core$IFn$_invoke$arity$1(G__99173) : fexpr__99178.call(null,G__99173));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??more","??more",-1836200365,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99181){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__99182 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__99182.cljs$core$IFn$_invoke$arity$1 ? fexpr__99182.cljs$core$IFn$_invoke$arity$1(G__99181) : fexpr__99182.call(null,G__99181));
})())),(function (){var fexpr__99183 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__99183.cljs$core$IFn$_invoke$arity$1 ? fexpr__99183.cljs$core$IFn$_invoke$arity$1(G__99181) : fexpr__99183.call(null,G__99181));
})()], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__99184 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__99184.cljs$core$IFn$_invoke$arity$1 ? fexpr__99184.cljs$core$IFn$_invoke$arity$1(G__99181) : fexpr__99184.call(null,G__99181));
})()))], null),(function (){var fexpr__99185 = new cljs.core.Symbol(null,"??more","??more",-1836200365,null);
return (fexpr__99185.cljs$core$IFn$_invoke$arity$1 ? fexpr__99185.cljs$core$IFn$_invoke$arity$1(G__99181) : fexpr__99185.call(null,G__99181));
})())),(function (){var fexpr__99186 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__99186.cljs$core$IFn$_invoke$arity$1 ? fexpr__99186.cljs$core$IFn$_invoke$arity$1(G__99181) : fexpr__99186.call(null,G__99181));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??more","??more",-1836200365,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99187){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__99192 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__99192.cljs$core$IFn$_invoke$arity$1 ? fexpr__99192.cljs$core$IFn$_invoke$arity$1(G__99187) : fexpr__99192.call(null,G__99187));
})())),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__99193 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__99193.cljs$core$IFn$_invoke$arity$1 ? fexpr__99193.cljs$core$IFn$_invoke$arity$1(G__99187) : fexpr__99193.call(null,G__99187));
})())),(function (){var fexpr__99194 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__99194.cljs$core$IFn$_invoke$arity$1 ? fexpr__99194.cljs$core$IFn$_invoke$arity$1(G__99187) : fexpr__99194.call(null,G__99187));
})()], null))], null),(function (){var fexpr__99195 = new cljs.core.Symbol(null,"??more","??more",-1836200365,null);
return (fexpr__99195.cljs$core$IFn$_invoke$arity$1 ? fexpr__99195.cljs$core$IFn$_invoke$arity$1(G__99187) : fexpr__99195.call(null,G__99187));
})())),(function (){var fexpr__99196 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__99196.cljs$core$IFn$_invoke$arity$1 ? fexpr__99196.cljs$core$IFn$_invoke$arity$1(G__99187) : fexpr__99196.call(null,G__99187));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??more","??more",-1836200365,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99199){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__99206 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__99206.cljs$core$IFn$_invoke$arity$1 ? fexpr__99206.cljs$core$IFn$_invoke$arity$1(G__99199) : fexpr__99206.call(null,G__99199));
})())),(function (){var fexpr__99207 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__99207.cljs$core$IFn$_invoke$arity$1 ? fexpr__99207.cljs$core$IFn$_invoke$arity$1(G__99199) : fexpr__99207.call(null,G__99199));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__99208 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__99208.cljs$core$IFn$_invoke$arity$1 ? fexpr__99208.cljs$core$IFn$_invoke$arity$1(G__99199) : fexpr__99208.call(null,G__99199));
})())),(function (){var fexpr__99209 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__99209.cljs$core$IFn$_invoke$arity$1 ? fexpr__99209.cljs$core$IFn$_invoke$arity$1(G__99199) : fexpr__99209.call(null,G__99199));
})()], null))], null),(function (){var fexpr__99210 = new cljs.core.Symbol(null,"??more","??more",-1836200365,null);
return (fexpr__99210.cljs$core$IFn$_invoke$arity$1 ? fexpr__99210.cljs$core$IFn$_invoke$arity$1(G__99199) : fexpr__99210.call(null,G__99199));
})())),(function (){var fexpr__99211 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__99211.cljs$core$IFn$_invoke$arity$1 ? fexpr__99211.cljs$core$IFn$_invoke$arity$1(G__99199) : fexpr__99211.call(null,G__99199));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0)),pattern.rule.guard((function (_){
return sicmutils.simplify.rules._STAR_commute_partials_QMARK__STAR_;
}),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??zs","??zs",1863806627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??args","??args",-2100991912,null),null,(1),null)),(2),null)),(function (p__99212){
var map__99213 = p__99212;
var map__99213__$1 = cljs.core.__destructure_map(map__99213);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99213__$1,new cljs.core.Symbol(null,"??i","??i",-474049037,null));
var j = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99213__$1,new cljs.core.Symbol(null,"??j","??j",1098328567,null));
return (cljs.core.compare(cljs.core.vec(i),cljs.core.vec(j)) > (0));
})),(function (G__99214){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99215 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__99215.cljs$core$IFn$_invoke$arity$1 ? fexpr__99215.cljs$core$IFn$_invoke$arity$1(G__99214) : fexpr__99215.call(null,G__99214));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__99216 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__99216.cljs$core$IFn$_invoke$arity$1 ? fexpr__99216.cljs$core$IFn$_invoke$arity$1(G__99214) : fexpr__99216.call(null,G__99214));
})()))], null),(function (){var fexpr__99217 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__99217.cljs$core$IFn$_invoke$arity$1 ? fexpr__99217.cljs$core$IFn$_invoke$arity$1(G__99214) : fexpr__99217.call(null,G__99214));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__99218 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__99218.cljs$core$IFn$_invoke$arity$1 ? fexpr__99218.cljs$core$IFn$_invoke$arity$1(G__99214) : fexpr__99218.call(null,G__99214));
})()))], null),(function (){var fexpr__99219 = new cljs.core.Symbol(null,"??zs","??zs",1863806627,null);
return (fexpr__99219.cljs$core$IFn$_invoke$arity$1 ? fexpr__99219.cljs$core$IFn$_invoke$arity$1(G__99214) : fexpr__99219.call(null,G__99214));
})()], 0))),(function (){var fexpr__99220 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__99220.cljs$core$IFn$_invoke$arity$1 ? fexpr__99220.cljs$core$IFn$_invoke$arity$1(G__99214) : fexpr__99220.call(null,G__99214));
})()], null))], null),(function (){var fexpr__99221 = new cljs.core.Symbol(null,"??args","??args",-2100991912,null);
return (fexpr__99221.cljs$core$IFn$_invoke$arity$1 ? fexpr__99221.cljs$core$IFn$_invoke$arity$1(G__99214) : fexpr__99221.call(null,G__99214));
})()));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})))], 0));
sicmutils.simplify.rules.trig__GT_sincos = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99222){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__99223 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99223.cljs$core$IFn$_invoke$arity$1 ? fexpr__99223.cljs$core$IFn$_invoke$arity$1(G__99222) : fexpr__99223.call(null,G__99222));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__99224 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99224.cljs$core$IFn$_invoke$arity$1 ? fexpr__99224.cljs$core$IFn$_invoke$arity$1(G__99222) : fexpr__99224.call(null,G__99222));
})()], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cot","cot",-1635649012,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99225){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__99226 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99226.cljs$core$IFn$_invoke$arity$1 ? fexpr__99226.cljs$core$IFn$_invoke$arity$1(G__99225) : fexpr__99226.call(null,G__99225));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__99227 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99227.cljs$core$IFn$_invoke$arity$1 ? fexpr__99227.cljs$core$IFn$_invoke$arity$1(G__99225) : fexpr__99227.call(null,G__99225));
})()], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sec","sec",60154974,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99228){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__99229 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99229.cljs$core$IFn$_invoke$arity$1 ? fexpr__99229.cljs$core$IFn$_invoke$arity$1(G__99228) : fexpr__99229.call(null,G__99228));
})()], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"csc","csc",-427853492,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99230){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__99231 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99231.cljs$core$IFn$_invoke$arity$1 ? fexpr__99231.cljs$core$IFn$_invoke$arity$1(G__99230) : fexpr__99231.call(null,G__99230));
})()], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99232){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(function (){var fexpr__99233 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99233.cljs$core$IFn$_invoke$arity$1 ? fexpr__99233.cljs$core$IFn$_invoke$arity$1(G__99232) : fexpr__99233.call(null,G__99232));
})(),(function (){var fexpr__99234 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99234.cljs$core$IFn$_invoke$arity$1 ? fexpr__99234.cljs$core$IFn$_invoke$arity$1(G__99232) : fexpr__99234.call(null,G__99232));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99235){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(function (){var fexpr__99236 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99236.cljs$core$IFn$_invoke$arity$1 ? fexpr__99236.cljs$core$IFn$_invoke$arity$1(G__99235) : fexpr__99236.call(null,G__99235));
})(),(1)], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.sincos__GT_trig = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99238){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(function (){var fexpr__99239 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99239.cljs$core$IFn$_invoke$arity$1 ? fexpr__99239.cljs$core$IFn$_invoke$arity$1(G__99238) : fexpr__99239.call(null,G__99238));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99240){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99241 = new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null);
return (fexpr__99241.cljs$core$IFn$_invoke$arity$1 ? fexpr__99241.cljs$core$IFn$_invoke$arity$1(G__99240) : fexpr__99241.call(null,G__99240));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(function (){var fexpr__99242 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99242.cljs$core$IFn$_invoke$arity$1 ? fexpr__99242.cljs$core$IFn$_invoke$arity$1(G__99240) : fexpr__99242.call(null,G__99240));
})()], null))], null),(function (){var fexpr__99243 = new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null);
return (fexpr__99243.cljs$core$IFn$_invoke$arity$1 ? fexpr__99243.cljs$core$IFn$_invoke$arity$1(G__99240) : fexpr__99243.call(null,G__99240));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??d1","??d1",1286203826,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??d2","??d2",525254907,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99244){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(function (){var fexpr__99245 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99245.cljs$core$IFn$_invoke$arity$1 ? fexpr__99245.cljs$core$IFn$_invoke$arity$1(G__99244) : fexpr__99245.call(null,G__99244));
})()], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99246 = new cljs.core.Symbol(null,"??d1","??d1",1286203826,null);
return (fexpr__99246.cljs$core$IFn$_invoke$arity$1 ? fexpr__99246.cljs$core$IFn$_invoke$arity$1(G__99244) : fexpr__99246.call(null,G__99244));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99247 = new cljs.core.Symbol(null,"??d2","??d2",525254907,null);
return (fexpr__99247.cljs$core$IFn$_invoke$arity$1 ? fexpr__99247.cljs$core$IFn$_invoke$arity$1(G__99244) : fexpr__99247.call(null,G__99244));
})()], 0)))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??d1","??d1",1286203826,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??d2","??d2",525254907,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99248){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99249 = new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null);
return (fexpr__99249.cljs$core$IFn$_invoke$arity$1 ? fexpr__99249.cljs$core$IFn$_invoke$arity$1(G__99248) : fexpr__99249.call(null,G__99248));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(function (){var fexpr__99250 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99250.cljs$core$IFn$_invoke$arity$1 ? fexpr__99250.cljs$core$IFn$_invoke$arity$1(G__99248) : fexpr__99250.call(null,G__99248));
})()], null))], null),(function (){var fexpr__99251 = new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null);
return (fexpr__99251.cljs$core$IFn$_invoke$arity$1 ? fexpr__99251.cljs$core$IFn$_invoke$arity$1(G__99248) : fexpr__99251.call(null,G__99248));
})()], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99252 = new cljs.core.Symbol(null,"??d1","??d1",1286203826,null);
return (fexpr__99252.cljs$core$IFn$_invoke$arity$1 ? fexpr__99252.cljs$core$IFn$_invoke$arity$1(G__99248) : fexpr__99252.call(null,G__99248));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99253 = new cljs.core.Symbol(null,"??d2","??d2",525254907,null);
return (fexpr__99253.cljs$core$IFn$_invoke$arity$1 ? fexpr__99253.cljs$core$IFn$_invoke$arity$1(G__99248) : fexpr__99253.call(null,G__99248));
})()], 0)))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.triginv = (function sicmutils$simplify$rules$triginv(simplify){
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var sym_COLON_atan = sicmutils.numsymb.symbolic_operator(new cljs.core.Symbol(null,"atan","atan",-1026550135,null));
return pattern.rule.guard((function (_){
return sicmutils.simplify.rules._STAR_aggressive_atan_simplify_QMARK__STAR_;
}),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(3),null))),(function (p__99254){
var map__99255 = p__99254;
var map__99255__$1 = cljs.core.__destructure_map(map__99255);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99255__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99255__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
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
var s = (function (){var G__99256 = (new cljs.core.List(null,new cljs.core.Symbol(null,"gcd","gcd",1659909537,null),(new cljs.core.List(null,ys,(new cljs.core.List(null,xs,null,(1),null)),(2),null)),(3),null));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99256) : simplify.call(null,G__99256));
})();
if(sicmutils.value.one_QMARK_(s)){
return null;
} else {
var and__4251__auto__ = sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"positive?","positive?",1455224686,null),(new cljs.core.List(null,s,null,(1),null)),(2),null)),new cljs.core.Symbol(null,"aggressive-atan-2","aggressive-atan-2",-628426094,null));
if(cljs.core.truth_(and__4251__auto__)){
var yv = (function (){var G__99257 = (new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,ys,(new cljs.core.List(null,s,null,(1),null)),(2),null)),(3),null));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99257) : simplify.call(null,G__99257));
})();
var xv = (function (){var G__99258 = (new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,xs,(new cljs.core.List(null,s,null,(1),null)),(2),null)),(3),null));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99258) : simplify.call(null,G__99258));
})();
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),yv,xv], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
} else {
return and__4251__auto__;
}
}
}
}
})));
})(),pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99259){
var r__21102__auto__ = (function (){var fexpr__99260 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99260.cljs$core$IFn$_invoke$arity$1 ? fexpr__99260.cljs$core$IFn$_invoke$arity$1(G__99259) : fexpr__99260.call(null,G__99259));
})();
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99261){
var r__21102__auto__ = (function (){var fexpr__99262 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99262.cljs$core$IFn$_invoke$arity$1 ? fexpr__99262.cljs$core$IFn$_invoke$arity$1(G__99261) : fexpr__99262.call(null,G__99261));
})();
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99263){
var r__21102__auto__ = (function (){var fexpr__99264 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99264.cljs$core$IFn$_invoke$arity$1 ? fexpr__99264.cljs$core$IFn$_invoke$arity$1(G__99263) : fexpr__99264.call(null,G__99263));
})();
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99265){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__99266 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99266.cljs$core$IFn$_invoke$arity$1 ? fexpr__99266.cljs$core$IFn$_invoke$arity$1(G__99265) : fexpr__99266.call(null,G__99265));
})(),(2)], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99267){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__99268 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99268.cljs$core$IFn$_invoke$arity$1 ? fexpr__99268.cljs$core$IFn$_invoke$arity$1(G__99267) : fexpr__99268.call(null,G__99267));
})(),(2)], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99269){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__99270 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99270.cljs$core$IFn$_invoke$arity$1 ? fexpr__99270.cljs$core$IFn$_invoke$arity$1(G__99269) : fexpr__99270.call(null,G__99269));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__99271 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99271.cljs$core$IFn$_invoke$arity$1 ? fexpr__99271.cljs$core$IFn$_invoke$arity$1(G__99269) : fexpr__99271.call(null,G__99269));
})(),(2)], null))], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99272){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__99273 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99273.cljs$core$IFn$_invoke$arity$1 ? fexpr__99273.cljs$core$IFn$_invoke$arity$1(G__99272) : fexpr__99273.call(null,G__99272));
})(),(2)], null))], null))], null)),(function (){var fexpr__99274 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99274.cljs$core$IFn$_invoke$arity$1 ? fexpr__99274.cljs$core$IFn$_invoke$arity$1(G__99272) : fexpr__99274.call(null,G__99272));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?b","?b",1575118075,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99275){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__99276 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__99276.cljs$core$IFn$_invoke$arity$1 ? fexpr__99276.cljs$core$IFn$_invoke$arity$1(G__99275) : fexpr__99276.call(null,G__99275));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__99277 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__99277.cljs$core$IFn$_invoke$arity$1 ? fexpr__99277.cljs$core$IFn$_invoke$arity$1(G__99275) : fexpr__99277.call(null,G__99275));
})(),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__99278 = new cljs.core.Symbol(null,"?b","?b",1575118075,null);
return (fexpr__99278.cljs$core$IFn$_invoke$arity$1 ? fexpr__99278.cljs$core$IFn$_invoke$arity$1(G__99275) : fexpr__99278.call(null,G__99275));
})(),(2)], null))], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?b","?b",1575118075,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99279){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__99280 = new cljs.core.Symbol(null,"?b","?b",1575118075,null);
return (fexpr__99280.cljs$core$IFn$_invoke$arity$1 ? fexpr__99280.cljs$core$IFn$_invoke$arity$1(G__99279) : fexpr__99280.call(null,G__99279));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__99281 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__99281.cljs$core$IFn$_invoke$arity$1 ? fexpr__99281.cljs$core$IFn$_invoke$arity$1(G__99279) : fexpr__99281.call(null,G__99279));
})(),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__99282 = new cljs.core.Symbol(null,"?b","?b",1575118075,null);
return (fexpr__99282.cljs$core$IFn$_invoke$arity$1 ? fexpr__99282.cljs$core$IFn$_invoke$arity$1(G__99279) : fexpr__99282.call(null,G__99279));
})(),(2)], null))], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0)),pattern.rule.guard((function (_){
return sicmutils.simplify.rules._STAR_inverse_simplify_QMARK__STAR_;
}),pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(function (p__99283){
var map__99284 = p__99283;
var map__99284__$1 = cljs.core.__destructure_map(map__99284);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99284__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"asin","asin",-904130570,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),xs], null))], null)),xs], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})(),new cljs.core.Symbol(null,"asin-sin","asin-sin",1881703610,null));
})),(function (G__99285){
var r__21102__auto__ = (function (){var fexpr__99286 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99286.cljs$core$IFn$_invoke$arity$1 ? fexpr__99286.cljs$core$IFn$_invoke$arity$1(G__99285) : fexpr__99286.call(null,G__99285));
})();
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(function (p__99287){
var map__99288 = p__99287;
var map__99288__$1 = cljs.core.__destructure_map(map__99288);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99288__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"acos","acos",353741763,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),xs], null))], null)),xs], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})(),new cljs.core.Symbol(null,"acos-cos","acos-cos",-652558231,null));
})),(function (G__99289){
var r__21102__auto__ = (function (){var fexpr__99290 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99290.cljs$core$IFn$_invoke$arity$1 ? fexpr__99290.cljs$core$IFn$_invoke$arity$1(G__99289) : fexpr__99290.call(null,G__99289));
})();
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(function (p__99291){
var map__99292 = p__99291;
var map__99292__$1 = cljs.core.__destructure_map(map__99292);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99292__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tan","tan",-1380825876,null),xs], null))], null)),xs], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})(),new cljs.core.Symbol(null,"atan-tan","atan-tan",-478846145,null));
})),(function (G__99293){
var r__21102__auto__ = (function (){var fexpr__99294 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99294.cljs$core$IFn$_invoke$arity$1 ? fexpr__99294.cljs$core$IFn$_invoke$arity$1(G__99293) : fexpr__99294.call(null,G__99293));
})();
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(function (p__99295){
var map__99296 = p__99295;
var map__99296__$1 = cljs.core.__destructure_map(map__99296);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99296__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),xs], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),xs], null))], null)),xs], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})(),new cljs.core.Symbol(null,"atan-sin-cos","atan-sin-cos",-761958387,null));
})),(function (G__99297){
var r__21102__auto__ = (function (){var fexpr__99298 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99298.cljs$core$IFn$_invoke$arity$1 ? fexpr__99298.cljs$core$IFn$_invoke$arity$1(G__99297) : fexpr__99298.call(null,G__99297));
})();
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(function (p__99299){
var map__99300 = p__99299;
var map__99300__$1 = cljs.core.__destructure_map(map__99300);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99300__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"asin","asin",-904130570,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),xs], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null)),xs], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})(),new cljs.core.Symbol(null,"asin-cos","asin-cos",-28391344,null));
})),(function (G__99301){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null)),(function (){var fexpr__99302 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99302.cljs$core$IFn$_invoke$arity$1 ? fexpr__99302.cljs$core$IFn$_invoke$arity$1(G__99301) : fexpr__99302.call(null,G__99301));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(function (p__99303){
var map__99304 = p__99303;
var map__99304__$1 = cljs.core.__destructure_map(map__99304);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99304__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"acos","acos",353741763,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),xs], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null)),xs], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})(),new cljs.core.Symbol(null,"acos-sin","acos-sin",1513257305,null));
})),(function (G__99305){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null)),(function (){var fexpr__99306 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99306.cljs$core$IFn$_invoke$arity$1 ? fexpr__99306.cljs$core$IFn$_invoke$arity$1(G__99305) : fexpr__99306.call(null,G__99305));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
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
return sicmutils.value.integral_QMARK_((function (){var G__99361 = (function (){var G__99362 = x;
var G__99363 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99362,G__99363) : sym_COLON_div.call(null,G__99362,G__99363));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99361) : simplify.call(null,G__99361));
})());
}
});
var pi_over_2_mod_2pi_QMARK_ = (function sicmutils$simplify$rules$trig_COLON_special_$_pi_over_2_mod_2pi_QMARK_(x){
var or__4253__auto__ = (sicmutils.numsymb.pi_over_2_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.pi_over_2_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb.pi_over_2_mod_2pi_QMARK_.call(null,x));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.value.integral_QMARK_((function (){var G__99364 = (function (){var G__99365 = (function (){var G__99367 = x;
var G__99368 = (function (){var G__99369 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
var G__99370 = (2);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99369,G__99370) : sym_COLON_div.call(null,G__99369,G__99370));
})();
return (sym_COLON__.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__.cljs$core$IFn$_invoke$arity$2(G__99367,G__99368) : sym_COLON__.call(null,G__99367,G__99368));
})();
var G__99366 = (function (){var G__99371 = (2);
var G__99372 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(G__99371,G__99372) : sym_COLON__STAR_.call(null,G__99371,G__99372));
})();
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99365,G__99366) : sym_COLON_div.call(null,G__99365,G__99366));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99364) : simplify.call(null,G__99364));
})());
}
});
var _pi_over_2_mod_2pi_QMARK_ = (function sicmutils$simplify$rules$trig_COLON_special_$__pi_over_2_mod_2pi_QMARK_(x){
var or__4253__auto__ = (sicmutils.numsymb._pi_over_2_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb._pi_over_2_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb._pi_over_2_mod_2pi_QMARK_.call(null,x));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.value.integral_QMARK_((function (){var G__99373 = (function (){var G__99374 = (function (){var G__99376 = x;
var G__99377 = (function (){var G__99378 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
var G__99379 = (2);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99378,G__99379) : sym_COLON_div.call(null,G__99378,G__99379));
})();
return (sym_COLON__PLUS_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__PLUS_.cljs$core$IFn$_invoke$arity$2(G__99376,G__99377) : sym_COLON__PLUS_.call(null,G__99376,G__99377));
})();
var G__99375 = (function (){var G__99380 = (2);
var G__99381 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(G__99380,G__99381) : sym_COLON__STAR_.call(null,G__99380,G__99381));
})();
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99374,G__99375) : sym_COLON_div.call(null,G__99374,G__99375));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99373) : simplify.call(null,G__99373));
})());
}
});
var pi_over_2_mod_pi_QMARK_ = (function sicmutils$simplify$rules$trig_COLON_special_$_pi_over_2_mod_pi_QMARK_(x){
var or__4253__auto__ = (sicmutils.numsymb.pi_over_2_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.pi_over_2_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb.pi_over_2_mod_pi_QMARK_.call(null,x));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.value.integral_QMARK_((function (){var G__99382 = (function (){var G__99383 = (function (){var G__99385 = x;
var G__99386 = (function (){var G__99387 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
var G__99388 = (2);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99387,G__99388) : sym_COLON_div.call(null,G__99387,G__99388));
})();
return (sym_COLON__.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__.cljs$core$IFn$_invoke$arity$2(G__99385,G__99386) : sym_COLON__.call(null,G__99385,G__99386));
})();
var G__99384 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99383,G__99384) : sym_COLON_div.call(null,G__99383,G__99384));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99382) : simplify.call(null,G__99382));
})());
}
});
var zero_mod_2pi_QMARK_ = (function sicmutils$simplify$rules$trig_COLON_special_$_zero_mod_2pi_QMARK_(x){
var or__4253__auto__ = (sicmutils.numsymb.zero_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.zero_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb.zero_mod_2pi_QMARK_.call(null,x));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.value.integral_QMARK_((function (){var G__99389 = (function (){var G__99390 = x;
var G__99391 = (function (){var G__99392 = (2);
var G__99393 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(G__99392,G__99393) : sym_COLON__STAR_.call(null,G__99392,G__99393));
})();
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99390,G__99391) : sym_COLON_div.call(null,G__99390,G__99391));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99389) : simplify.call(null,G__99389));
})());
}
});
var pi_mod_2pi_QMARK_ = (function sicmutils$simplify$rules$trig_COLON_special_$_pi_mod_2pi_QMARK_(x){
var or__4253__auto__ = (sicmutils.numsymb.pi_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.pi_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb.pi_mod_2pi_QMARK_.call(null,x));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.value.integral_QMARK_((function (){var G__99394 = (function (){var G__99395 = (function (){var G__99397 = x;
var G__99398 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON__.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__.cljs$core$IFn$_invoke$arity$2(G__99397,G__99398) : sym_COLON__.call(null,G__99397,G__99398));
})();
var G__99396 = (function (){var G__99399 = (2);
var G__99400 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(G__99399,G__99400) : sym_COLON__STAR_.call(null,G__99399,G__99400));
})();
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99395,G__99396) : sym_COLON_div.call(null,G__99395,G__99396));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99394) : simplify.call(null,G__99394));
})());
}
});
var pi_over_4_mod_pi_QMARK_ = (function sicmutils$simplify$rules$trig_COLON_special_$_pi_over_4_mod_pi_QMARK_(x){
var or__4253__auto__ = (sicmutils.numsymb.pi_over_4_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.pi_over_4_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb.pi_over_4_mod_pi_QMARK_.call(null,x));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.value.integral_QMARK_((function (){var G__99401 = (function (){var G__99402 = (function (){var G__99404 = x;
var G__99405 = (function (){var G__99406 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
var G__99407 = (4);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99406,G__99407) : sym_COLON_div.call(null,G__99406,G__99407));
})();
return (sym_COLON__.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__.cljs$core$IFn$_invoke$arity$2(G__99404,G__99405) : sym_COLON__.call(null,G__99404,G__99405));
})();
var G__99403 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99402,G__99403) : sym_COLON_div.call(null,G__99402,G__99403));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99401) : simplify.call(null,G__99401));
})());
}
});
var _pi_over_4_mod_pi_QMARK_ = (function sicmutils$simplify$rules$trig_COLON_special_$__pi_over_4_mod_pi_QMARK_(x){
var or__4253__auto__ = (sicmutils.numsymb._pi_over_4_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb._pi_over_4_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb._pi_over_4_mod_pi_QMARK_.call(null,x));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.value.integral_QMARK_((function (){var G__99408 = (function (){var G__99409 = (function (){var G__99411 = x;
var G__99412 = (function (){var G__99413 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
var G__99414 = (4);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99413,G__99414) : sym_COLON_div.call(null,G__99413,G__99414));
})();
return (sym_COLON__PLUS_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__PLUS_.cljs$core$IFn$_invoke$arity$2(G__99411,G__99412) : sym_COLON__PLUS_.call(null,G__99411,G__99412));
})();
var G__99410 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__99409,G__99410) : sym_COLON_div.call(null,G__99409,G__99410));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99408) : simplify.call(null,G__99408));
})());
}
});
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,zero_mod_pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99415){
var r__21102__auto__ = (0);
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,pi_over_2_mod_2pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99416){
var r__21102__auto__ = (1);
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,_pi_over_2_mod_2pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99417){
var r__21102__auto__ = (-1);
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,pi_over_2_mod_pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99418){
var r__21102__auto__ = (0);
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,zero_mod_2pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99419){
var r__21102__auto__ = (1);
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,pi_mod_2pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99420){
var r__21102__auto__ = (-1);
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,zero_mod_pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99421){
var r__21102__auto__ = (0);
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,pi_over_4_mod_pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99422){
var r__21102__auto__ = (1);
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,_pi_over_4_mod_pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99423){
var r__21102__auto__ = (-1);
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0))], 0));
});
/**
 * `sin` is odd, and `cos` is even. we canonicalize by moving the sign
 * out of the first term of the argument.
 */
sicmutils.simplify.rules.angular_parity = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99430){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (p1__99424_SHARP_){
return (- (function (){var G__99431 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99424_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99424_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99431) : p1__99424_SHARP_.call(null,G__99431));
})());
})(G__99430)], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x","??x",-1924511736,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99432){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99425_SHARP_){
return (- (function (){var G__99433 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99425_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99425_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99433) : p1__99425_SHARP_.call(null,G__99433));
})());
})(G__99432)], null),(function (){var fexpr__99434 = new cljs.core.Symbol(null,"??x","??x",-1924511736,null);
return (fexpr__99434.cljs$core$IFn$_invoke$arity$1 ? fexpr__99434.cljs$core$IFn$_invoke$arity$1(G__99432) : fexpr__99434.call(null,G__99432));
})()))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x","??x",-1924511736,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99435){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99426_SHARP_){
return (- (function (){var G__99436 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99426_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99426_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99436) : p1__99426_SHARP_.call(null,G__99436));
})());
})(G__99435)], null),(function (){var fexpr__99437 = new cljs.core.Symbol(null,"??x","??x",-1924511736,null);
return (fexpr__99437.cljs$core$IFn$_invoke$arity$1 ? fexpr__99437.cljs$core$IFn$_invoke$arity$1(G__99435) : fexpr__99437.call(null,G__99435));
})()))], null),(function (){var fexpr__99438 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__99438.cljs$core$IFn$_invoke$arity$1 ? fexpr__99438.cljs$core$IFn$_invoke$arity$1(G__99435) : fexpr__99438.call(null,G__99435));
})()))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99439){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (p1__99427_SHARP_){
return (- (function (){var G__99440 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99427_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99427_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99440) : p1__99427_SHARP_.call(null,G__99440));
})());
})(G__99439)], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x","??x",-1924511736,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99441){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99428_SHARP_){
return (- (function (){var G__99442 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99428_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99428_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99442) : p1__99428_SHARP_.call(null,G__99442));
})());
})(G__99441)], null),(function (){var fexpr__99443 = new cljs.core.Symbol(null,"??x","??x",-1924511736,null);
return (fexpr__99443.cljs$core$IFn$_invoke$arity$1 ? fexpr__99443.cljs$core$IFn$_invoke$arity$1(G__99441) : fexpr__99443.call(null,G__99441));
})()))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x","??x",-1924511736,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99444){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99429_SHARP_){
return (- (function (){var G__99445 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99429_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99429_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99445) : p1__99429_SHARP_.call(null,G__99445));
})());
})(G__99444)], null),(function (){var fexpr__99446 = new cljs.core.Symbol(null,"??x","??x",-1924511736,null);
return (fexpr__99446.cljs$core$IFn$_invoke$arity$1 ? fexpr__99446.cljs$core$IFn$_invoke$arity$1(G__99444) : fexpr__99446.call(null,G__99444));
})()))], null),(function (){var fexpr__99447 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__99447.cljs$core$IFn$_invoke$arity$1 ? fexpr__99447.cljs$core$IFn$_invoke$arity$1(G__99444) : fexpr__99447.call(null,G__99444));
})()))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.expand_multiangle = (function (){var exact_integer_GT_3_QMARK_ = (function sicmutils$simplify$rules$exact_integer_GT_3_QMARK_(x){
return ((sicmutils.value.integral_QMARK_(x)) && (((sicmutils.value.exact_QMARK_(x)) && ((x > (3))))));
});
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(2),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99452){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99453 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99453.cljs$core$IFn$_invoke$arity$1 ? fexpr__99453.cljs$core$IFn$_invoke$arity$1(G__99452) : fexpr__99453.call(null,G__99452));
})()], null),(function (){var fexpr__99454 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__99454.cljs$core$IFn$_invoke$arity$1 ? fexpr__99454.cljs$core$IFn$_invoke$arity$1(G__99452) : fexpr__99454.call(null,G__99452));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99455 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99455.cljs$core$IFn$_invoke$arity$1 ? fexpr__99455.cljs$core$IFn$_invoke$arity$1(G__99452) : fexpr__99455.call(null,G__99452));
})()], null),(function (){var fexpr__99456 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__99456.cljs$core$IFn$_invoke$arity$1 ? fexpr__99456.cljs$core$IFn$_invoke$arity$1(G__99452) : fexpr__99456.call(null,G__99452));
})()))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(2),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99457){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99458 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99458.cljs$core$IFn$_invoke$arity$1 ? fexpr__99458.cljs$core$IFn$_invoke$arity$1(G__99457) : fexpr__99458.call(null,G__99457));
})()], null),(function (){var fexpr__99459 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__99459.cljs$core$IFn$_invoke$arity$1 ? fexpr__99459.cljs$core$IFn$_invoke$arity$1(G__99457) : fexpr__99459.call(null,G__99457));
})()))], null)),(2)], null))], null)),(1)], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(3),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99460){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(3),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99461 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99461.cljs$core$IFn$_invoke$arity$1 ? fexpr__99461.cljs$core$IFn$_invoke$arity$1(G__99460) : fexpr__99461.call(null,G__99460));
})()], null),(function (){var fexpr__99462 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__99462.cljs$core$IFn$_invoke$arity$1 ? fexpr__99462.cljs$core$IFn$_invoke$arity$1(G__99460) : fexpr__99462.call(null,G__99460));
})()))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-4),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99463 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99463.cljs$core$IFn$_invoke$arity$1 ? fexpr__99463.cljs$core$IFn$_invoke$arity$1(G__99460) : fexpr__99463.call(null,G__99460));
})()], null),(function (){var fexpr__99464 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__99464.cljs$core$IFn$_invoke$arity$1 ? fexpr__99464.cljs$core$IFn$_invoke$arity$1(G__99460) : fexpr__99464.call(null,G__99460));
})()))], null)),(3)], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(3),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99465){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(4),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99466 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99466.cljs$core$IFn$_invoke$arity$1 ? fexpr__99466.cljs$core$IFn$_invoke$arity$1(G__99465) : fexpr__99466.call(null,G__99465));
})()], null),(function (){var fexpr__99467 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__99467.cljs$core$IFn$_invoke$arity$1 ? fexpr__99467.cljs$core$IFn$_invoke$arity$1(G__99465) : fexpr__99467.call(null,G__99465));
})()))], null)),(3)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-3),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99468 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99468.cljs$core$IFn$_invoke$arity$1 ? fexpr__99468.cljs$core$IFn$_invoke$arity$1(G__99465) : fexpr__99468.call(null,G__99465));
})()], null),(function (){var fexpr__99469 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__99469.cljs$core$IFn$_invoke$arity$1 ? fexpr__99469.cljs$core$IFn$_invoke$arity$1(G__99465) : fexpr__99469.call(null,G__99465));
})()))], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,exact_integer_GT_3_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99470){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99448_SHARP_){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__99471 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99448_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99448_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99471) : p1__99448_SHARP_.call(null,G__99471));
})(),(1));
})(G__99470),(function (){var fexpr__99472 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__99472.cljs$core$IFn$_invoke$arity$1 ? fexpr__99472.cljs$core$IFn$_invoke$arity$1(G__99470) : fexpr__99472.call(null,G__99470));
})()], null),(function (){var fexpr__99473 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__99473.cljs$core$IFn$_invoke$arity$1 ? fexpr__99473.cljs$core$IFn$_invoke$arity$1(G__99470) : fexpr__99473.call(null,G__99470));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99474 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__99474.cljs$core$IFn$_invoke$arity$1 ? fexpr__99474.cljs$core$IFn$_invoke$arity$1(G__99470) : fexpr__99474.call(null,G__99470));
})()], null),(function (){var fexpr__99475 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__99475.cljs$core$IFn$_invoke$arity$1 ? fexpr__99475.cljs$core$IFn$_invoke$arity$1(G__99470) : fexpr__99475.call(null,G__99470));
})()))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99449_SHARP_){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__99476 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99449_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99449_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99476) : p1__99449_SHARP_.call(null,G__99476));
})(),(1));
})(G__99470),(function (){var fexpr__99477 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__99477.cljs$core$IFn$_invoke$arity$1 ? fexpr__99477.cljs$core$IFn$_invoke$arity$1(G__99470) : fexpr__99477.call(null,G__99470));
})()], null),(function (){var fexpr__99478 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__99478.cljs$core$IFn$_invoke$arity$1 ? fexpr__99478.cljs$core$IFn$_invoke$arity$1(G__99470) : fexpr__99478.call(null,G__99470));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99479 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__99479.cljs$core$IFn$_invoke$arity$1 ? fexpr__99479.cljs$core$IFn$_invoke$arity$1(G__99470) : fexpr__99479.call(null,G__99470));
})()], null),(function (){var fexpr__99480 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__99480.cljs$core$IFn$_invoke$arity$1 ? fexpr__99480.cljs$core$IFn$_invoke$arity$1(G__99470) : fexpr__99480.call(null,G__99470));
})()))], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99481){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__99482 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99482.cljs$core$IFn$_invoke$arity$1 ? fexpr__99482.cljs$core$IFn$_invoke$arity$1(G__99481) : fexpr__99482.call(null,G__99481));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99483 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99483.cljs$core$IFn$_invoke$arity$1 ? fexpr__99483.cljs$core$IFn$_invoke$arity$1(G__99481) : fexpr__99483.call(null,G__99481));
})()], null),(function (){var fexpr__99484 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__99484.cljs$core$IFn$_invoke$arity$1 ? fexpr__99484.cljs$core$IFn$_invoke$arity$1(G__99481) : fexpr__99484.call(null,G__99481));
})()))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__99485 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99485.cljs$core$IFn$_invoke$arity$1 ? fexpr__99485.cljs$core$IFn$_invoke$arity$1(G__99481) : fexpr__99485.call(null,G__99481));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99486 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99486.cljs$core$IFn$_invoke$arity$1 ? fexpr__99486.cljs$core$IFn$_invoke$arity$1(G__99481) : fexpr__99486.call(null,G__99481));
})()], null),(function (){var fexpr__99487 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__99487.cljs$core$IFn$_invoke$arity$1 ? fexpr__99487.cljs$core$IFn$_invoke$arity$1(G__99481) : fexpr__99487.call(null,G__99481));
})()))], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"n","n",-2092305744,null),(new cljs.core.List(null,exact_integer_GT_3_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99488){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99450_SHARP_){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__99489 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99450_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99450_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99489) : p1__99450_SHARP_.call(null,G__99489));
})(),(1));
})(G__99488),(function (){var fexpr__99490 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__99490.cljs$core$IFn$_invoke$arity$1 ? fexpr__99490.cljs$core$IFn$_invoke$arity$1(G__99488) : fexpr__99490.call(null,G__99488));
})()], null),(function (){var fexpr__99491 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__99491.cljs$core$IFn$_invoke$arity$1 ? fexpr__99491.cljs$core$IFn$_invoke$arity$1(G__99488) : fexpr__99491.call(null,G__99488));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99492 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__99492.cljs$core$IFn$_invoke$arity$1 ? fexpr__99492.cljs$core$IFn$_invoke$arity$1(G__99488) : fexpr__99492.call(null,G__99488));
})()], null),(function (){var fexpr__99493 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__99493.cljs$core$IFn$_invoke$arity$1 ? fexpr__99493.cljs$core$IFn$_invoke$arity$1(G__99488) : fexpr__99493.call(null,G__99488));
})()))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99451_SHARP_){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__99494 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99451_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99451_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99494) : p1__99451_SHARP_.call(null,G__99494));
})(),(1));
})(G__99488),(function (){var fexpr__99495 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__99495.cljs$core$IFn$_invoke$arity$1 ? fexpr__99495.cljs$core$IFn$_invoke$arity$1(G__99488) : fexpr__99495.call(null,G__99488));
})()], null),(function (){var fexpr__99496 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__99496.cljs$core$IFn$_invoke$arity$1 ? fexpr__99496.cljs$core$IFn$_invoke$arity$1(G__99488) : fexpr__99496.call(null,G__99488));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99497 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__99497.cljs$core$IFn$_invoke$arity$1 ? fexpr__99497.cljs$core$IFn$_invoke$arity$1(G__99488) : fexpr__99497.call(null,G__99488));
})()], null),(function (){var fexpr__99498 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__99498.cljs$core$IFn$_invoke$arity$1 ? fexpr__99498.cljs$core$IFn$_invoke$arity$1(G__99488) : fexpr__99498.call(null,G__99488));
})()))], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99499){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__99500 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99500.cljs$core$IFn$_invoke$arity$1 ? fexpr__99500.cljs$core$IFn$_invoke$arity$1(G__99499) : fexpr__99500.call(null,G__99499));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99501 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99501.cljs$core$IFn$_invoke$arity$1 ? fexpr__99501.cljs$core$IFn$_invoke$arity$1(G__99499) : fexpr__99501.call(null,G__99499));
})()], null),(function (){var fexpr__99502 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__99502.cljs$core$IFn$_invoke$arity$1 ? fexpr__99502.cljs$core$IFn$_invoke$arity$1(G__99499) : fexpr__99502.call(null,G__99499));
})()))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__99503 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99503.cljs$core$IFn$_invoke$arity$1 ? fexpr__99503.cljs$core$IFn$_invoke$arity$1(G__99499) : fexpr__99503.call(null,G__99499));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99504 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99504.cljs$core$IFn$_invoke$arity$1 ? fexpr__99504.cljs$core$IFn$_invoke$arity$1(G__99499) : fexpr__99504.call(null,G__99499));
})()], null),(function (){var fexpr__99505 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__99505.cljs$core$IFn$_invoke$arity$1 ? fexpr__99505.cljs$core$IFn$_invoke$arity$1(G__99499) : fexpr__99505.call(null,G__99499));
})()))], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0))], 0));
})();
sicmutils.simplify.rules.trig_COLON_sum__GT_product = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__99506){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99507 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99507.cljs$core$IFn$_invoke$arity$1 ? fexpr__99507.cljs$core$IFn$_invoke$arity$1(G__99506) : fexpr__99507.call(null,G__99506));
})(),(function (){var fexpr__99508 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99508.cljs$core$IFn$_invoke$arity$1 ? fexpr__99508.cljs$core$IFn$_invoke$arity$1(G__99506) : fexpr__99508.call(null,G__99506));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99509 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99509.cljs$core$IFn$_invoke$arity$1 ? fexpr__99509.cljs$core$IFn$_invoke$arity$1(G__99506) : fexpr__99509.call(null,G__99506));
})(),(function (){var fexpr__99510 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99510.cljs$core$IFn$_invoke$arity$1 ? fexpr__99510.cljs$core$IFn$_invoke$arity$1(G__99506) : fexpr__99510.call(null,G__99506));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__99511 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__99511.cljs$core$IFn$_invoke$arity$1 ? fexpr__99511.cljs$core$IFn$_invoke$arity$1(G__99506) : fexpr__99511.call(null,G__99506));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99512 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__99512.cljs$core$IFn$_invoke$arity$1 ? fexpr__99512.cljs$core$IFn$_invoke$arity$1(G__99506) : fexpr__99512.call(null,G__99506));
})(),(function (){var fexpr__99513 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__99513.cljs$core$IFn$_invoke$arity$1 ? fexpr__99513.cljs$core$IFn$_invoke$arity$1(G__99506) : fexpr__99513.call(null,G__99506));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__99514){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99515 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99515.cljs$core$IFn$_invoke$arity$1 ? fexpr__99515.cljs$core$IFn$_invoke$arity$1(G__99514) : fexpr__99515.call(null,G__99514));
})(),(function (){var fexpr__99516 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99516.cljs$core$IFn$_invoke$arity$1 ? fexpr__99516.cljs$core$IFn$_invoke$arity$1(G__99514) : fexpr__99516.call(null,G__99514));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99517 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99517.cljs$core$IFn$_invoke$arity$1 ? fexpr__99517.cljs$core$IFn$_invoke$arity$1(G__99514) : fexpr__99517.call(null,G__99514));
})(),(function (){var fexpr__99518 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99518.cljs$core$IFn$_invoke$arity$1 ? fexpr__99518.cljs$core$IFn$_invoke$arity$1(G__99514) : fexpr__99518.call(null,G__99514));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__99519 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__99519.cljs$core$IFn$_invoke$arity$1 ? fexpr__99519.cljs$core$IFn$_invoke$arity$1(G__99514) : fexpr__99519.call(null,G__99514));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99520 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__99520.cljs$core$IFn$_invoke$arity$1 ? fexpr__99520.cljs$core$IFn$_invoke$arity$1(G__99514) : fexpr__99520.call(null,G__99514));
})(),(function (){var fexpr__99521 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__99521.cljs$core$IFn$_invoke$arity$1 ? fexpr__99521.cljs$core$IFn$_invoke$arity$1(G__99514) : fexpr__99521.call(null,G__99514));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__99522){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99523 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99523.cljs$core$IFn$_invoke$arity$1 ? fexpr__99523.cljs$core$IFn$_invoke$arity$1(G__99522) : fexpr__99523.call(null,G__99522));
})(),(function (){var fexpr__99524 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99524.cljs$core$IFn$_invoke$arity$1 ? fexpr__99524.cljs$core$IFn$_invoke$arity$1(G__99522) : fexpr__99524.call(null,G__99522));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99525 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99525.cljs$core$IFn$_invoke$arity$1 ? fexpr__99525.cljs$core$IFn$_invoke$arity$1(G__99522) : fexpr__99525.call(null,G__99522));
})(),(function (){var fexpr__99526 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99526.cljs$core$IFn$_invoke$arity$1 ? fexpr__99526.cljs$core$IFn$_invoke$arity$1(G__99522) : fexpr__99526.call(null,G__99522));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__99527 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__99527.cljs$core$IFn$_invoke$arity$1 ? fexpr__99527.cljs$core$IFn$_invoke$arity$1(G__99522) : fexpr__99527.call(null,G__99522));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99528 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__99528.cljs$core$IFn$_invoke$arity$1 ? fexpr__99528.cljs$core$IFn$_invoke$arity$1(G__99522) : fexpr__99528.call(null,G__99522));
})(),(function (){var fexpr__99529 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__99529.cljs$core$IFn$_invoke$arity$1 ? fexpr__99529.cljs$core$IFn$_invoke$arity$1(G__99522) : fexpr__99529.call(null,G__99522));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__99530){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99531 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99531.cljs$core$IFn$_invoke$arity$1 ? fexpr__99531.cljs$core$IFn$_invoke$arity$1(G__99530) : fexpr__99531.call(null,G__99530));
})(),(function (){var fexpr__99532 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99532.cljs$core$IFn$_invoke$arity$1 ? fexpr__99532.cljs$core$IFn$_invoke$arity$1(G__99530) : fexpr__99532.call(null,G__99530));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99533 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99533.cljs$core$IFn$_invoke$arity$1 ? fexpr__99533.cljs$core$IFn$_invoke$arity$1(G__99530) : fexpr__99533.call(null,G__99530));
})(),(function (){var fexpr__99534 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99534.cljs$core$IFn$_invoke$arity$1 ? fexpr__99534.cljs$core$IFn$_invoke$arity$1(G__99530) : fexpr__99534.call(null,G__99530));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__99535 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__99535.cljs$core$IFn$_invoke$arity$1 ? fexpr__99535.cljs$core$IFn$_invoke$arity$1(G__99530) : fexpr__99535.call(null,G__99530));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99536 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__99536.cljs$core$IFn$_invoke$arity$1 ? fexpr__99536.cljs$core$IFn$_invoke$arity$1(G__99530) : fexpr__99536.call(null,G__99530));
})(),(function (){var fexpr__99537 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__99537.cljs$core$IFn$_invoke$arity$1 ? fexpr__99537.cljs$core$IFn$_invoke$arity$1(G__99530) : fexpr__99537.call(null,G__99530));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__99538){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99539 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99539.cljs$core$IFn$_invoke$arity$1 ? fexpr__99539.cljs$core$IFn$_invoke$arity$1(G__99538) : fexpr__99539.call(null,G__99538));
})(),(function (){var fexpr__99540 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99540.cljs$core$IFn$_invoke$arity$1 ? fexpr__99540.cljs$core$IFn$_invoke$arity$1(G__99538) : fexpr__99540.call(null,G__99538));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99541 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99541.cljs$core$IFn$_invoke$arity$1 ? fexpr__99541.cljs$core$IFn$_invoke$arity$1(G__99538) : fexpr__99541.call(null,G__99538));
})(),(function (){var fexpr__99542 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99542.cljs$core$IFn$_invoke$arity$1 ? fexpr__99542.cljs$core$IFn$_invoke$arity$1(G__99538) : fexpr__99542.call(null,G__99538));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__99543 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__99543.cljs$core$IFn$_invoke$arity$1 ? fexpr__99543.cljs$core$IFn$_invoke$arity$1(G__99538) : fexpr__99543.call(null,G__99538));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99544 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__99544.cljs$core$IFn$_invoke$arity$1 ? fexpr__99544.cljs$core$IFn$_invoke$arity$1(G__99538) : fexpr__99544.call(null,G__99538));
})(),(function (){var fexpr__99545 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__99545.cljs$core$IFn$_invoke$arity$1 ? fexpr__99545.cljs$core$IFn$_invoke$arity$1(G__99538) : fexpr__99545.call(null,G__99538));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__99546){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99547 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99547.cljs$core$IFn$_invoke$arity$1 ? fexpr__99547.cljs$core$IFn$_invoke$arity$1(G__99546) : fexpr__99547.call(null,G__99546));
})(),(function (){var fexpr__99548 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99548.cljs$core$IFn$_invoke$arity$1 ? fexpr__99548.cljs$core$IFn$_invoke$arity$1(G__99546) : fexpr__99548.call(null,G__99546));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99549 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99549.cljs$core$IFn$_invoke$arity$1 ? fexpr__99549.cljs$core$IFn$_invoke$arity$1(G__99546) : fexpr__99549.call(null,G__99546));
})(),(function (){var fexpr__99550 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99550.cljs$core$IFn$_invoke$arity$1 ? fexpr__99550.cljs$core$IFn$_invoke$arity$1(G__99546) : fexpr__99550.call(null,G__99546));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__99551 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__99551.cljs$core$IFn$_invoke$arity$1 ? fexpr__99551.cljs$core$IFn$_invoke$arity$1(G__99546) : fexpr__99551.call(null,G__99546));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99552 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__99552.cljs$core$IFn$_invoke$arity$1 ? fexpr__99552.cljs$core$IFn$_invoke$arity$1(G__99546) : fexpr__99552.call(null,G__99546));
})(),(function (){var fexpr__99553 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__99553.cljs$core$IFn$_invoke$arity$1 ? fexpr__99553.cljs$core$IFn$_invoke$arity$1(G__99546) : fexpr__99553.call(null,G__99546));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.trig_COLON_product__GT_sum = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??w","??w",1245275022,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__99554){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99555 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99555.cljs$core$IFn$_invoke$arity$1 ? fexpr__99555.cljs$core$IFn$_invoke$arity$1(G__99554) : fexpr__99555.call(null,G__99554));
})(),(function (){var fexpr__99556 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99556.cljs$core$IFn$_invoke$arity$1 ? fexpr__99556.cljs$core$IFn$_invoke$arity$1(G__99554) : fexpr__99556.call(null,G__99554));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99557 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99557.cljs$core$IFn$_invoke$arity$1 ? fexpr__99557.cljs$core$IFn$_invoke$arity$1(G__99554) : fexpr__99557.call(null,G__99554));
})(),(function (){var fexpr__99558 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99558.cljs$core$IFn$_invoke$arity$1 ? fexpr__99558.cljs$core$IFn$_invoke$arity$1(G__99554) : fexpr__99558.call(null,G__99554));
})()], null))], null))], null))], null),(function (){var fexpr__99559 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__99559.cljs$core$IFn$_invoke$arity$1 ? fexpr__99559.cljs$core$IFn$_invoke$arity$1(G__99554) : fexpr__99559.call(null,G__99554));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99560 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__99560.cljs$core$IFn$_invoke$arity$1 ? fexpr__99560.cljs$core$IFn$_invoke$arity$1(G__99554) : fexpr__99560.call(null,G__99554));
})(),(function (){var fexpr__99561 = new cljs.core.Symbol(null,"??w","??w",1245275022,null);
return (fexpr__99561.cljs$core$IFn$_invoke$arity$1 ? fexpr__99561.cljs$core$IFn$_invoke$arity$1(G__99554) : fexpr__99561.call(null,G__99554));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??w","??w",1245275022,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__99562){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99563 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99563.cljs$core$IFn$_invoke$arity$1 ? fexpr__99563.cljs$core$IFn$_invoke$arity$1(G__99562) : fexpr__99563.call(null,G__99562));
})(),(function (){var fexpr__99564 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99564.cljs$core$IFn$_invoke$arity$1 ? fexpr__99564.cljs$core$IFn$_invoke$arity$1(G__99562) : fexpr__99564.call(null,G__99562));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99565 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99565.cljs$core$IFn$_invoke$arity$1 ? fexpr__99565.cljs$core$IFn$_invoke$arity$1(G__99562) : fexpr__99565.call(null,G__99562));
})(),(function (){var fexpr__99566 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99566.cljs$core$IFn$_invoke$arity$1 ? fexpr__99566.cljs$core$IFn$_invoke$arity$1(G__99562) : fexpr__99566.call(null,G__99562));
})()], null))], null))], null))], null),(function (){var fexpr__99567 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__99567.cljs$core$IFn$_invoke$arity$1 ? fexpr__99567.cljs$core$IFn$_invoke$arity$1(G__99562) : fexpr__99567.call(null,G__99562));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99568 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__99568.cljs$core$IFn$_invoke$arity$1 ? fexpr__99568.cljs$core$IFn$_invoke$arity$1(G__99562) : fexpr__99568.call(null,G__99562));
})(),(function (){var fexpr__99569 = new cljs.core.Symbol(null,"??w","??w",1245275022,null);
return (fexpr__99569.cljs$core$IFn$_invoke$arity$1 ? fexpr__99569.cljs$core$IFn$_invoke$arity$1(G__99562) : fexpr__99569.call(null,G__99562));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??w","??w",1245275022,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__99570){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99571 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99571.cljs$core$IFn$_invoke$arity$1 ? fexpr__99571.cljs$core$IFn$_invoke$arity$1(G__99570) : fexpr__99571.call(null,G__99570));
})(),(function (){var fexpr__99572 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99572.cljs$core$IFn$_invoke$arity$1 ? fexpr__99572.cljs$core$IFn$_invoke$arity$1(G__99570) : fexpr__99572.call(null,G__99570));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99573 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99573.cljs$core$IFn$_invoke$arity$1 ? fexpr__99573.cljs$core$IFn$_invoke$arity$1(G__99570) : fexpr__99573.call(null,G__99570));
})(),(function (){var fexpr__99574 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99574.cljs$core$IFn$_invoke$arity$1 ? fexpr__99574.cljs$core$IFn$_invoke$arity$1(G__99570) : fexpr__99574.call(null,G__99570));
})()], null))], null))], null))], null),(function (){var fexpr__99575 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__99575.cljs$core$IFn$_invoke$arity$1 ? fexpr__99575.cljs$core$IFn$_invoke$arity$1(G__99570) : fexpr__99575.call(null,G__99570));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99576 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__99576.cljs$core$IFn$_invoke$arity$1 ? fexpr__99576.cljs$core$IFn$_invoke$arity$1(G__99570) : fexpr__99576.call(null,G__99570));
})(),(function (){var fexpr__99577 = new cljs.core.Symbol(null,"??w","??w",1245275022,null);
return (fexpr__99577.cljs$core$IFn$_invoke$arity$1 ? fexpr__99577.cljs$core$IFn$_invoke$arity$1(G__99570) : fexpr__99577.call(null,G__99570));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??w","??w",1245275022,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__99578){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99579 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99579.cljs$core$IFn$_invoke$arity$1 ? fexpr__99579.cljs$core$IFn$_invoke$arity$1(G__99578) : fexpr__99579.call(null,G__99578));
})(),(function (){var fexpr__99580 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99580.cljs$core$IFn$_invoke$arity$1 ? fexpr__99580.cljs$core$IFn$_invoke$arity$1(G__99578) : fexpr__99580.call(null,G__99578));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99581 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99581.cljs$core$IFn$_invoke$arity$1 ? fexpr__99581.cljs$core$IFn$_invoke$arity$1(G__99578) : fexpr__99581.call(null,G__99578));
})(),(function (){var fexpr__99582 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99582.cljs$core$IFn$_invoke$arity$1 ? fexpr__99582.cljs$core$IFn$_invoke$arity$1(G__99578) : fexpr__99582.call(null,G__99578));
})()], null))], null))], null))], null),(function (){var fexpr__99583 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__99583.cljs$core$IFn$_invoke$arity$1 ? fexpr__99583.cljs$core$IFn$_invoke$arity$1(G__99578) : fexpr__99583.call(null,G__99578));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99584 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__99584.cljs$core$IFn$_invoke$arity$1 ? fexpr__99584.cljs$core$IFn$_invoke$arity$1(G__99578) : fexpr__99584.call(null,G__99578));
})(),(function (){var fexpr__99585 = new cljs.core.Symbol(null,"??w","??w",1245275022,null);
return (fexpr__99585.cljs$core$IFn$_invoke$arity$1 ? fexpr__99585.cljs$core$IFn$_invoke$arity$1(G__99578) : fexpr__99585.call(null,G__99578));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.contract_expt_trig = (function (){var exact_integer_GT_1_QMARK_ = (function sicmutils$simplify$rules$exact_integer_GT_1_QMARK_(x){
return ((sicmutils.value.integral_QMARK_(x)) && (((sicmutils.value.exact_QMARK_(x)) && ((x > (1))))));
});
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,exact_integer_GT_1_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99588){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__99589 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99589.cljs$core$IFn$_invoke$arity$1 ? fexpr__99589.cljs$core$IFn$_invoke$arity$1(G__99588) : fexpr__99589.call(null,G__99588));
})()], null)),(function (p1__99586_SHARP_){
return ((function (){var G__99590 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99586_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99586_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99590) : p1__99586_SHARP_.call(null,G__99590));
})() - (2));
})(G__99588)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),(function (){var fexpr__99591 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99591.cljs$core$IFn$_invoke$arity$1 ? fexpr__99591.cljs$core$IFn$_invoke$arity$1(G__99588) : fexpr__99591.call(null,G__99588));
})()], null))], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,exact_integer_GT_1_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99592){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__99593 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99593.cljs$core$IFn$_invoke$arity$1 ? fexpr__99593.cljs$core$IFn$_invoke$arity$1(G__99592) : fexpr__99593.call(null,G__99592));
})()], null)),(function (p1__99587_SHARP_){
return ((function (){var G__99594 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99587_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99587_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99594) : p1__99587_SHARP_.call(null,G__99594));
})() - (2));
})(G__99592)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),(function (){var fexpr__99595 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99595.cljs$core$IFn$_invoke$arity$1 ? fexpr__99595.cljs$core$IFn$_invoke$arity$1(G__99592) : fexpr__99595.call(null,G__99592));
})()], null))], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0))], 0));
})();
sicmutils.simplify.rules.half_angle = (function sicmutils$simplify$rules$half_angle(simplify){
var sin_half_angle_formula = (function sicmutils$simplify$rules$half_angle_$_sin_half_angle_formula(theta){
var thetas = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(theta) : simplify.call(null,theta));
var and__4251__auto__ = sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"non-negative?","non-negative?",1248641804,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-1),thetas], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(4),new cljs.core.Symbol(null,"pi","pi",176774184,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor","floor",-772394748,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),thetas,cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(4),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null))], null))], null))], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})(),new cljs.core.Symbol(null,"sin-half-angle-formula","sin-half-angle-formula",1943828750,null));
if(cljs.core.truth_(and__4251__auto__)){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),theta], null))], null)),(2)], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
} else {
return and__4251__auto__;
}
});
var cos_half_angle_formula = (function sicmutils$simplify$rules$half_angle_$_cos_half_angle_formula(theta){
var thetas = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(theta) : simplify.call(null,theta));
var and__4251__auto__ = sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"non-negative?","non-negative?",1248641804,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),thetas,cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(4),new cljs.core.Symbol(null,"pi","pi",176774184,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor","floor",-772394748,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),thetas], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(4),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null))], null))], null))], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})(),new cljs.core.Symbol(null,"cos-half-angle-formula","cos-half-angle-formula",-1744663300,null));
if(cljs.core.truth_(and__4251__auto__)){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),theta], null))], null)),(2)], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
} else {
return and__4251__auto__;
}
});
return pattern.rule.attempt(pattern.rule.guard((function (_){
return sicmutils.simplify.rules._STAR_half_angle_simplify_QMARK__STAR_;
}),pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null))),(function (p1__99596_SHARP_){
return sin_half_angle_formula((function (){var G__99600 = p1__99596_SHARP_;
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99601 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99601.cljs$core$IFn$_invoke$arity$1 ? fexpr__99601.cljs$core$IFn$_invoke$arity$1(G__99600) : fexpr__99601.call(null,G__99600));
})()], null),(function (){var fexpr__99602 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__99602.cljs$core$IFn$_invoke$arity$1 ? fexpr__99602.cljs$core$IFn$_invoke$arity$1(G__99600) : fexpr__99602.call(null,G__99600));
})()));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})());
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null))),(function (p1__99597_SHARP_){
return sin_half_angle_formula((function (){var G__99603 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__99597_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99597_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99603) : p1__99597_SHARP_.call(null,G__99603));
})());
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null))),(function (p1__99598_SHARP_){
return cos_half_angle_formula((function (){var G__99604 = p1__99598_SHARP_;
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99605 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99605.cljs$core$IFn$_invoke$arity$1 ? fexpr__99605.cljs$core$IFn$_invoke$arity$1(G__99604) : fexpr__99605.call(null,G__99604));
})()], null),(function (){var fexpr__99606 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__99606.cljs$core$IFn$_invoke$arity$1 ? fexpr__99606.cljs$core$IFn$_invoke$arity$1(G__99604) : fexpr__99606.call(null,G__99604));
})()));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})());
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null))),(function (p1__99599_SHARP_){
return cos_half_angle_formula((function (){var G__99607 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__99599_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99599_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99607) : p1__99599_SHARP_.call(null,G__99607));
})());
}))], 0))], 0))));
});
sicmutils.simplify.rules.sin_sq__GT_cos_sq = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99609){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__99610 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99610.cljs$core$IFn$_invoke$arity$1 ? fexpr__99610.cljs$core$IFn$_invoke$arity$1(G__99609) : fexpr__99610.call(null,G__99609));
})()], null)),(function (p1__99608_SHARP_){
return ((function (){var G__99611 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99608_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99608_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99611) : p1__99608_SHARP_.call(null,G__99611));
})() - (2));
})(G__99609)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__99612 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99612.cljs$core$IFn$_invoke$arity$1 ? fexpr__99612.cljs$core$IFn$_invoke$arity$1(G__99609) : fexpr__99612.call(null,G__99609));
})()], null)),(2)], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.cos_sq__GT_sin_sq = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99614){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__99615 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99615.cljs$core$IFn$_invoke$arity$1 ? fexpr__99615.cljs$core$IFn$_invoke$arity$1(G__99614) : fexpr__99615.call(null,G__99614));
})()], null)),(function (p1__99613_SHARP_){
return ((function (){var G__99616 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99613_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99613_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99616) : p1__99613_SHARP_.call(null,G__99616));
})() - (2));
})(G__99614)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__99617 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99617.cljs$core$IFn$_invoke$arity$1 ? fexpr__99617.cljs$core$IFn$_invoke$arity$1(G__99614) : fexpr__99617.call(null,G__99614));
})()], null)),(2)], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.split_high_degree_sincos = (function (){var remaining = (function sicmutils$simplify$rules$remaining(p__99626){
var map__99627 = p__99626;
var map__99627__$1 = cljs.core.__destructure_map(map__99627);
var m = map__99627__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99627__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var n_2 = sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(n,(2));
if(sicmutils.value.one_QMARK_(n_2)){
var G__99628 = m;
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__99629 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__99629.cljs$core$IFn$_invoke$arity$1 ? fexpr__99629.cljs$core$IFn$_invoke$arity$1(G__99628) : fexpr__99629.call(null,G__99628));
})(),(function (){var fexpr__99630 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99630.cljs$core$IFn$_invoke$arity$1 ? fexpr__99630.cljs$core$IFn$_invoke$arity$1(G__99628) : fexpr__99630.call(null,G__99628));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
} else {
var G__99631 = m;
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__99632 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__99632.cljs$core$IFn$_invoke$arity$1 ? fexpr__99632.cljs$core$IFn$_invoke$arity$1(G__99631) : fexpr__99632.call(null,G__99631));
})(),(function (){var fexpr__99633 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99633.cljs$core$IFn$_invoke$arity$1 ? fexpr__99633.cljs$core$IFn$_invoke$arity$1(G__99631) : fexpr__99633.call(null,G__99631));
})()], null)),n_2], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}
});
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null], null), null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.more_than_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f2","??f2",745277317,null),null,(1),null)),(2),null)),(3),null)),(4),null)),pattern.rule._EQ__GT_),(function (G__99634){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99635 = new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null);
return (fexpr__99635.cljs$core$IFn$_invoke$arity$1 ? fexpr__99635.cljs$core$IFn$_invoke$arity$1(G__99634) : fexpr__99635.call(null,G__99634));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__99636 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__99636.cljs$core$IFn$_invoke$arity$1 ? fexpr__99636.cljs$core$IFn$_invoke$arity$1(G__99634) : fexpr__99636.call(null,G__99634));
})(),(function (){var fexpr__99637 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99637.cljs$core$IFn$_invoke$arity$1 ? fexpr__99637.cljs$core$IFn$_invoke$arity$1(G__99634) : fexpr__99637.call(null,G__99634));
})()], null)),(2)], null)),remaining(G__99634)], null),(function (){var fexpr__99638 = new cljs.core.Symbol(null,"??f2","??f2",745277317,null);
return (fexpr__99638.cljs$core$IFn$_invoke$arity$1 ? fexpr__99638.cljs$core$IFn$_invoke$arity$1(G__99634) : fexpr__99638.call(null,G__99634));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null], null), null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.more_than_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),null,(1),null)),(2),null)),(3),null)),(4),null)),pattern.rule._EQ__GT_),(function (G__99639){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__99640 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__99640.cljs$core$IFn$_invoke$arity$1 ? fexpr__99640.cljs$core$IFn$_invoke$arity$1(G__99639) : fexpr__99640.call(null,G__99639));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__99641 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__99641.cljs$core$IFn$_invoke$arity$1 ? fexpr__99641.cljs$core$IFn$_invoke$arity$1(G__99639) : fexpr__99641.call(null,G__99639));
})(),(function (){var fexpr__99642 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99642.cljs$core$IFn$_invoke$arity$1 ? fexpr__99642.cljs$core$IFn$_invoke$arity$1(G__99639) : fexpr__99642.call(null,G__99639));
})()], null)),(2)], null)),remaining(G__99639)], null))], null),(function (){var fexpr__99643 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__99643.cljs$core$IFn$_invoke$arity$1 ? fexpr__99643.cljs$core$IFn$_invoke$arity$1(G__99639) : fexpr__99643.call(null,G__99639));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0))], 0));
})();
sicmutils.simplify.rules.flush_obvious_ones = (function sicmutils$simplify$rules$flush_obvious_ones(simplify){
var _QMARK_op = pattern.match.bind.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"?op","?op",-135731883,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null], null), null));
var _QMARK_flipped = pattern.match.or.cljs$core$IFn$_invoke$arity$variadic(pattern.match.and.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.match.frame_predicate((function (p1__99644_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var G__99646 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (p1__99644_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99644_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99646) : p1__99644_SHARP_.call(null,G__99646));
})());
}))], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.match.and.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.match.frame_predicate((function (p1__99645_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var G__99647 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (p1__99645_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99645_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99647) : p1__99645_SHARP_.call(null,G__99647));
})());
}))], 0))], 0));
var pred = (function sicmutils$simplify$rules$flush_obvious_ones_$_pred(m){
var s1 = (function (){var G__99657 = (function (){var G__99658 = m;
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99659 = new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null);
return (fexpr__99659.cljs$core$IFn$_invoke$arity$1 ? fexpr__99659.cljs$core$IFn$_invoke$arity$1(G__99658) : fexpr__99659.call(null,G__99658));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99660 = new cljs.core.Symbol(null,"??f2","??f2",745277317,null);
return (fexpr__99660.cljs$core$IFn$_invoke$arity$1 ? fexpr__99660.cljs$core$IFn$_invoke$arity$1(G__99658) : fexpr__99660.call(null,G__99658));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99657) : simplify.call(null,G__99657));
})();
var s2 = (function (){var G__99661 = (function (){var G__99662 = m;
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99663 = new cljs.core.Symbol(null,"??f3","??f3",-1809203400,null);
return (fexpr__99663.cljs$core$IFn$_invoke$arity$1 ? fexpr__99663.cljs$core$IFn$_invoke$arity$1(G__99662) : fexpr__99663.call(null,G__99662));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99664 = new cljs.core.Symbol(null,"??f4","??f4",1817370441,null);
return (fexpr__99664.cljs$core$IFn$_invoke$arity$1 ? fexpr__99664.cljs$core$IFn$_invoke$arity$1(G__99662) : fexpr__99664.call(null,G__99662));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99661) : simplify.call(null,G__99661));
})();
if(sicmutils.value.exact_zero_QMARK_((function (){var G__99665 = (new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,s1,(new cljs.core.List(null,s2,null,(1),null)),(2),null)),(3),null));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__99665) : simplify.call(null,G__99665));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?s1","?s1",-1174751069,null),s1], null);
} else {
return null;
}
});
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,_QMARK_op,(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,_QMARK_flipped,(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__99666){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1)], null),(function (){var fexpr__99667 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__99667.cljs$core$IFn$_invoke$arity$1 ? fexpr__99667.cljs$core$IFn$_invoke$arity$1(G__99666) : fexpr__99667.call(null,G__99666));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99668 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__99668.cljs$core$IFn$_invoke$arity$1 ? fexpr__99668.cljs$core$IFn$_invoke$arity$1(G__99666) : fexpr__99668.call(null,G__99666));
})(),(function (){var fexpr__99669 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__99669.cljs$core$IFn$_invoke$arity$1 ? fexpr__99669.cljs$core$IFn$_invoke$arity$1(G__99666) : fexpr__99669.call(null,G__99666));
})()], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,_QMARK_op,(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f2","??f2",745277317,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f3","??f3",-1809203400,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,_QMARK_flipped,(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f4","??f4",1817370441,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pred),(function (G__99670){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__99671 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__99671.cljs$core$IFn$_invoke$arity$1 ? fexpr__99671.cljs$core$IFn$_invoke$arity$1(G__99670) : fexpr__99671.call(null,G__99670));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99672 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__99672.cljs$core$IFn$_invoke$arity$1 ? fexpr__99672.cljs$core$IFn$_invoke$arity$1(G__99670) : fexpr__99672.call(null,G__99670));
})(),(function (){var fexpr__99673 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__99673.cljs$core$IFn$_invoke$arity$1 ? fexpr__99673.cljs$core$IFn$_invoke$arity$1(G__99670) : fexpr__99673.call(null,G__99670));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__99674 = new cljs.core.Symbol(null,"?s1","?s1",-1174751069,null);
return (fexpr__99674.cljs$core$IFn$_invoke$arity$1 ? fexpr__99674.cljs$core$IFn$_invoke$arity$1(G__99670) : fexpr__99674.call(null,G__99670));
})()], null)], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
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
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var pred = (function sicmutils$simplify$rules$sincos_random_$_pred(p__99681){
var map__99682 = p__99681;
var map__99682__$1 = cljs.core.__destructure_map(map__99682);
var m = map__99682__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99682__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99682__$1,new cljs.core.Symbol(null,"?op","?op",-135731883,null));
if(cljs.core.truth_(simplifies_to_zero_QMARK_((function (){var G__99683 = m;
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99684 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__99684.cljs$core$IFn$_invoke$arity$1 ? fexpr__99684.cljs$core$IFn$_invoke$arity$1(G__99683) : fexpr__99684.call(null,G__99683));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__99685 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__99685.cljs$core$IFn$_invoke$arity$1 ? fexpr__99685.cljs$core$IFn$_invoke$arity$1(G__99683) : fexpr__99685.call(null,G__99683));
})(),(function (){var fexpr__99686 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99686.cljs$core$IFn$_invoke$arity$1 ? fexpr__99686.cljs$core$IFn$_invoke$arity$1(G__99683) : fexpr__99686.call(null,G__99683));
})()], null)),sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(n,(2))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})()))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null),(flip.cljs$core$IFn$_invoke$arity$1 ? flip.cljs$core$IFn$_invoke$arity$1(op) : flip.call(null,op))], null);
} else {
return null;
}
});
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,ops,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pred),(function (G__99687){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__99688 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__99688.cljs$core$IFn$_invoke$arity$1 ? fexpr__99688.cljs$core$IFn$_invoke$arity$1(G__99687) : fexpr__99688.call(null,G__99687));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99689 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__99689.cljs$core$IFn$_invoke$arity$1 ? fexpr__99689.cljs$core$IFn$_invoke$arity$1(G__99687) : fexpr__99689.call(null,G__99687));
})(),(function (){var fexpr__99690 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__99690.cljs$core$IFn$_invoke$arity$1 ? fexpr__99690.cljs$core$IFn$_invoke$arity$1(G__99687) : fexpr__99690.call(null,G__99687));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99691 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__99691.cljs$core$IFn$_invoke$arity$1 ? fexpr__99691.cljs$core$IFn$_invoke$arity$1(G__99687) : fexpr__99691.call(null,G__99687));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__99692 = new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null);
return (fexpr__99692.cljs$core$IFn$_invoke$arity$1 ? fexpr__99692.cljs$core$IFn$_invoke$arity$1(G__99687) : fexpr__99692.call(null,G__99687));
})(),(function (){var fexpr__99693 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99693.cljs$core$IFn$_invoke$arity$1 ? fexpr__99693.cljs$core$IFn$_invoke$arity$1(G__99687) : fexpr__99693.call(null,G__99687));
})()], null)),(2)], null))], null))], null)], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,ops,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pred),(function (G__99694){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__99695 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__99695.cljs$core$IFn$_invoke$arity$1 ? fexpr__99695.cljs$core$IFn$_invoke$arity$1(G__99694) : fexpr__99695.call(null,G__99694));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99696 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__99696.cljs$core$IFn$_invoke$arity$1 ? fexpr__99696.cljs$core$IFn$_invoke$arity$1(G__99694) : fexpr__99696.call(null,G__99694));
})(),(function (){var fexpr__99697 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__99697.cljs$core$IFn$_invoke$arity$1 ? fexpr__99697.cljs$core$IFn$_invoke$arity$1(G__99694) : fexpr__99697.call(null,G__99694));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99698 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__99698.cljs$core$IFn$_invoke$arity$1 ? fexpr__99698.cljs$core$IFn$_invoke$arity$1(G__99694) : fexpr__99698.call(null,G__99694));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__99699 = new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null);
return (fexpr__99699.cljs$core$IFn$_invoke$arity$1 ? fexpr__99699.cljs$core$IFn$_invoke$arity$1(G__99694) : fexpr__99699.call(null,G__99694));
})(),(function (){var fexpr__99700 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99700.cljs$core$IFn$_invoke$arity$1 ? fexpr__99700.cljs$core$IFn$_invoke$arity$1(G__99694) : fexpr__99700.call(null,G__99694));
})()], null)),(2)], null))], null))], null)], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0));
})(),(function (){var pred = (function sicmutils$simplify$rules$sincos_random_$_pred(p__99709){
var map__99710 = p__99709;
var map__99710__$1 = cljs.core.__destructure_map(map__99710);
var m = map__99710__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99710__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99710__$1,new cljs.core.Symbol(null,"?op","?op",-135731883,null));
if(cljs.core.truth_(simplifies_to_zero_QMARK_((function (){var G__99711 = m;
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99712 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__99712.cljs$core$IFn$_invoke$arity$1 ? fexpr__99712.cljs$core$IFn$_invoke$arity$1(G__99711) : fexpr__99712.call(null,G__99711));
})(),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99713 = new cljs.core.Symbol(null,"??b1","??b1",-1771260238,null);
return (fexpr__99713.cljs$core$IFn$_invoke$arity$1 ? fexpr__99713.cljs$core$IFn$_invoke$arity$1(G__99711) : fexpr__99713.call(null,G__99711));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99714 = new cljs.core.Symbol(null,"??b2","??b2",1805392567,null);
return (fexpr__99714.cljs$core$IFn$_invoke$arity$1 ? fexpr__99714.cljs$core$IFn$_invoke$arity$1(G__99711) : fexpr__99714.call(null,G__99711));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__99715 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__99715.cljs$core$IFn$_invoke$arity$1 ? fexpr__99715.cljs$core$IFn$_invoke$arity$1(G__99711) : fexpr__99715.call(null,G__99711));
})(),(function (){var fexpr__99716 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99716.cljs$core$IFn$_invoke$arity$1 ? fexpr__99716.cljs$core$IFn$_invoke$arity$1(G__99711) : fexpr__99716.call(null,G__99711));
})()], null)),sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(n,(2))], null))], null)], 0)))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})()))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null),(flip.cljs$core$IFn$_invoke$arity$1 ? flip.cljs$core$IFn$_invoke$arity$1(op) : flip.call(null,op))], null);
} else {
return null;
}
});
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b1","??b1",-1771260238,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,ops,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b2","??b2",1805392567,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pred),(function (G__99717){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__99718 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__99718.cljs$core$IFn$_invoke$arity$1 ? fexpr__99718.cljs$core$IFn$_invoke$arity$1(G__99717) : fexpr__99718.call(null,G__99717));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99719 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__99719.cljs$core$IFn$_invoke$arity$1 ? fexpr__99719.cljs$core$IFn$_invoke$arity$1(G__99717) : fexpr__99719.call(null,G__99717));
})(),(function (){var fexpr__99720 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__99720.cljs$core$IFn$_invoke$arity$1 ? fexpr__99720.cljs$core$IFn$_invoke$arity$1(G__99717) : fexpr__99720.call(null,G__99717));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99721 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__99721.cljs$core$IFn$_invoke$arity$1 ? fexpr__99721.cljs$core$IFn$_invoke$arity$1(G__99717) : fexpr__99721.call(null,G__99717));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__99722 = new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null);
return (fexpr__99722.cljs$core$IFn$_invoke$arity$1 ? fexpr__99722.cljs$core$IFn$_invoke$arity$1(G__99717) : fexpr__99722.call(null,G__99717));
})(),(function (){var fexpr__99723 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99723.cljs$core$IFn$_invoke$arity$1 ? fexpr__99723.cljs$core$IFn$_invoke$arity$1(G__99717) : fexpr__99723.call(null,G__99717));
})()], null)),(2)], null))], null))], null)], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b1","??b1",-1771260238,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,ops,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b2","??b2",1805392567,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pred),(function (G__99724){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__99725 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__99725.cljs$core$IFn$_invoke$arity$1 ? fexpr__99725.cljs$core$IFn$_invoke$arity$1(G__99724) : fexpr__99725.call(null,G__99724));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99726 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__99726.cljs$core$IFn$_invoke$arity$1 ? fexpr__99726.cljs$core$IFn$_invoke$arity$1(G__99724) : fexpr__99726.call(null,G__99724));
})(),(function (){var fexpr__99727 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__99727.cljs$core$IFn$_invoke$arity$1 ? fexpr__99727.cljs$core$IFn$_invoke$arity$1(G__99724) : fexpr__99727.call(null,G__99724));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99728 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__99728.cljs$core$IFn$_invoke$arity$1 ? fexpr__99728.cljs$core$IFn$_invoke$arity$1(G__99724) : fexpr__99728.call(null,G__99724));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__99729 = new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null);
return (fexpr__99729.cljs$core$IFn$_invoke$arity$1 ? fexpr__99729.cljs$core$IFn$_invoke$arity$1(G__99724) : fexpr__99729.call(null,G__99724));
})(),(function (){var fexpr__99730 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99730.cljs$core$IFn$_invoke$arity$1 ? fexpr__99730.cljs$core$IFn$_invoke$arity$1(G__99724) : fexpr__99730.call(null,G__99724));
})()], null)),(2)], null))], null))], null)], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0));
})()], 0));
});
sicmutils.simplify.rules.sincos__GT_exp1 = (function (){var _I = sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I);
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99731){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__99732 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99732.cljs$core$IFn$_invoke$arity$1 ? fexpr__99732.cljs$core$IFn$_invoke$arity$1(G__99731) : fexpr__99732.call(null,G__99731));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),_I,(function (){var fexpr__99733 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99733.cljs$core$IFn$_invoke$arity$1 ? fexpr__99733.cljs$core$IFn$_invoke$arity$1(G__99731) : fexpr__99733.call(null,G__99731));
})()], null))], null))], null)),sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$2(0.0,2.0)], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99734){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__99735 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99735.cljs$core$IFn$_invoke$arity$1 ? fexpr__99735.cljs$core$IFn$_invoke$arity$1(G__99734) : fexpr__99735.call(null,G__99734));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),_I,(function (){var fexpr__99736 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99736.cljs$core$IFn$_invoke$arity$1 ? fexpr__99736.cljs$core$IFn$_invoke$arity$1(G__99734) : fexpr__99736.call(null,G__99734));
})()], null))], null))], null)),(2)], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0))], 0));
})();
sicmutils.simplify.rules.sincos__GT_exp2 = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99737){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__99738 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99738.cljs$core$IFn$_invoke$arity$1 ? fexpr__99738.cljs$core$IFn$_invoke$arity$1(G__99737) : fexpr__99738.call(null,G__99737));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__99739 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99739.cljs$core$IFn$_invoke$arity$1 ? fexpr__99739.cljs$core$IFn$_invoke$arity$1(G__99737) : fexpr__99739.call(null,G__99737));
})()], null))], null))], null))], null)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),sicmutils.complex.I)], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99740){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__99741 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99741.cljs$core$IFn$_invoke$arity$1 ? fexpr__99741.cljs$core$IFn$_invoke$arity$1(G__99740) : fexpr__99741.call(null,G__99740));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__99742 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99742.cljs$core$IFn$_invoke$arity$1 ? fexpr__99742.cljs$core$IFn$_invoke$arity$1(G__99740) : fexpr__99742.call(null,G__99740));
})()], null))], null))], null))], null)),(2)], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
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
var im = sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99758 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(G__99758) : m.call(null,G__99758));
})());
if(cljs.core.truth_(positive_QMARK_(im))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?im","?im",120320525,null),im], null);
} else {
return null;
}
});
var neg_pred = (function sicmutils$simplify$rules$neg_pred(m){
var im = sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99759 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(G__99759) : m.call(null,G__99759));
})());
if(cljs.core.truth_(sicmutils.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(im))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?im","?im",120320525,null),im], null);
} else {
return null;
}
});
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,sicmutils.simplify.rules.imaginary_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pos_pred),(function (G__99760){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__99761 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__99761.cljs$core$IFn$_invoke$arity$1 ? fexpr__99761.cljs$core$IFn$_invoke$arity$1(G__99760) : fexpr__99761.call(null,G__99760));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__99762 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__99762.cljs$core$IFn$_invoke$arity$1 ? fexpr__99762.cljs$core$IFn$_invoke$arity$1(G__99760) : fexpr__99762.call(null,G__99760));
})()], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,sicmutils.simplify.rules.imaginary_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),neg_pred),(function (G__99763){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (p1__99743_SHARP_){
return (- (function (){var G__99764 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__99743_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99743_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99764) : p1__99743_SHARP_.call(null,G__99764));
})());
})(G__99763)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (p1__99744_SHARP_){
return (- (function (){var G__99765 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__99744_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99744_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99765) : p1__99744_SHARP_.call(null,G__99765));
})());
})(G__99763)], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,sicmutils.simplify.rules.imaginary_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f","??f",-94026515,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pos_pred),(function (G__99766){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99767 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__99767.cljs$core$IFn$_invoke$arity$1 ? fexpr__99767.cljs$core$IFn$_invoke$arity$1(G__99766) : fexpr__99767.call(null,G__99766));
})()], null),(function (){var fexpr__99768 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__99768.cljs$core$IFn$_invoke$arity$1 ? fexpr__99768.cljs$core$IFn$_invoke$arity$1(G__99766) : fexpr__99768.call(null,G__99766));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99769 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__99769.cljs$core$IFn$_invoke$arity$1 ? fexpr__99769.cljs$core$IFn$_invoke$arity$1(G__99766) : fexpr__99769.call(null,G__99766));
})()], null),(function (){var fexpr__99770 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__99770.cljs$core$IFn$_invoke$arity$1 ? fexpr__99770.cljs$core$IFn$_invoke$arity$1(G__99766) : fexpr__99770.call(null,G__99766));
})()))], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,sicmutils.simplify.rules.imaginary_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f","??f",-94026515,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),neg_pred),(function (G__99771){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__99745_SHARP_){
return sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99772 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (p1__99745_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99745_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99772) : p1__99745_SHARP_.call(null,G__99772));
})());
})(G__99771)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99746_SHARP_){
return (- (function (){var G__99773 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__99746_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99746_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99773) : p1__99746_SHARP_.call(null,G__99773));
})());
})(G__99771)], null),(function (){var fexpr__99774 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__99774.cljs$core$IFn$_invoke$arity$1 ? fexpr__99774.cljs$core$IFn$_invoke$arity$1(G__99771) : fexpr__99774.call(null,G__99771));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99747_SHARP_){
return (- (function (){var G__99775 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__99747_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99747_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99775) : p1__99747_SHARP_.call(null,G__99775));
})());
})(G__99771)], null),(function (){var fexpr__99776 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__99776.cljs$core$IFn$_invoke$arity$1 ? fexpr__99776.cljs$core$IFn$_invoke$arity$1(G__99771) : fexpr__99776.call(null,G__99771));
})()))], null))], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,sicmutils.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pos_pred),(function (G__99777){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__99748_SHARP_){
return sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99778 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (p1__99748_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99748_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99778) : p1__99748_SHARP_.call(null,G__99778));
})());
})(G__99777)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__99779 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__99779.cljs$core$IFn$_invoke$arity$1 ? fexpr__99779.cljs$core$IFn$_invoke$arity$1(G__99777) : fexpr__99779.call(null,G__99777));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__99780 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__99780.cljs$core$IFn$_invoke$arity$1 ? fexpr__99780.cljs$core$IFn$_invoke$arity$1(G__99777) : fexpr__99780.call(null,G__99777));
})()], null))], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,sicmutils.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),neg_pred),(function (G__99781){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__99749_SHARP_){
return sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99782 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (p1__99749_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99749_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99782) : p1__99749_SHARP_.call(null,G__99782));
})());
})(G__99781)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (p1__99750_SHARP_){
return (- (function (){var G__99783 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__99750_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99750_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99783) : p1__99750_SHARP_.call(null,G__99783));
})());
})(G__99781)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (p1__99751_SHARP_){
return (- (function (){var G__99784 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__99751_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99751_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99784) : p1__99751_SHARP_.call(null,G__99784));
})());
})(G__99781)], null))], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,sicmutils.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f","??f",-94026515,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pos_pred),(function (G__99785){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__99752_SHARP_){
return sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99786 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (p1__99752_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99752_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99786) : p1__99752_SHARP_.call(null,G__99786));
})());
})(G__99785)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99787 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__99787.cljs$core$IFn$_invoke$arity$1 ? fexpr__99787.cljs$core$IFn$_invoke$arity$1(G__99785) : fexpr__99787.call(null,G__99785));
})()], null),(function (){var fexpr__99788 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__99788.cljs$core$IFn$_invoke$arity$1 ? fexpr__99788.cljs$core$IFn$_invoke$arity$1(G__99785) : fexpr__99788.call(null,G__99785));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99789 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__99789.cljs$core$IFn$_invoke$arity$1 ? fexpr__99789.cljs$core$IFn$_invoke$arity$1(G__99785) : fexpr__99789.call(null,G__99785));
})()], null),(function (){var fexpr__99790 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__99790.cljs$core$IFn$_invoke$arity$1 ? fexpr__99790.cljs$core$IFn$_invoke$arity$1(G__99785) : fexpr__99790.call(null,G__99785));
})()))], null))], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,sicmutils.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f","??f",-94026515,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),neg_pred),(function (G__99791){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__99753_SHARP_){
return sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99792 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (p1__99753_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99753_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99792) : p1__99753_SHARP_.call(null,G__99792));
})());
})(G__99791)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99754_SHARP_){
return (- (function (){var G__99793 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__99754_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99754_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99793) : p1__99754_SHARP_.call(null,G__99793));
})());
})(G__99791)], null),(function (){var fexpr__99794 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__99794.cljs$core$IFn$_invoke$arity$1 ? fexpr__99794.cljs$core$IFn$_invoke$arity$1(G__99791) : fexpr__99794.call(null,G__99791));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99755_SHARP_){
return (- (function (){var G__99795 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__99755_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99755_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99795) : p1__99755_SHARP_.call(null,G__99795));
})());
})(G__99791)], null),(function (){var fexpr__99796 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__99796.cljs$core$IFn$_invoke$arity$1 ? fexpr__99796.cljs$core$IFn$_invoke$arity$1(G__99791) : fexpr__99796.call(null,G__99791));
})()))], null))], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0))], 0));
})();
sicmutils.simplify.rules.exp_contract = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x3","??x3",-411077265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x4","?x4",94899597,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x5","??x5",1822045235,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__99797){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99798 = new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null);
return (fexpr__99798.cljs$core$IFn$_invoke$arity$1 ? fexpr__99798.cljs$core$IFn$_invoke$arity$1(G__99797) : fexpr__99798.call(null,G__99797));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99799 = new cljs.core.Symbol(null,"??x3","??x3",-411077265,null);
return (fexpr__99799.cljs$core$IFn$_invoke$arity$1 ? fexpr__99799.cljs$core$IFn$_invoke$arity$1(G__99797) : fexpr__99799.call(null,G__99797));
})(),(function (){var fexpr__99800 = new cljs.core.Symbol(null,"??x5","??x5",1822045235,null);
return (fexpr__99800.cljs$core$IFn$_invoke$arity$1 ? fexpr__99800.cljs$core$IFn$_invoke$arity$1(G__99797) : fexpr__99800.call(null,G__99797));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99801 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__99801.cljs$core$IFn$_invoke$arity$1 ? fexpr__99801.cljs$core$IFn$_invoke$arity$1(G__99797) : fexpr__99801.call(null,G__99797));
})(),(function (){var fexpr__99802 = new cljs.core.Symbol(null,"?x4","?x4",94899597,null);
return (fexpr__99802.cljs$core$IFn$_invoke$arity$1 ? fexpr__99802.cljs$core$IFn$_invoke$arity$1(G__99797) : fexpr__99802.call(null,G__99797));
})()], null))], null))], null)], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?p","?p",-10896580,null),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99803){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99804 = new cljs.core.Symbol(null,"?p","?p",-10896580,null);
return (fexpr__99804.cljs$core$IFn$_invoke$arity$1 ? fexpr__99804.cljs$core$IFn$_invoke$arity$1(G__99803) : fexpr__99804.call(null,G__99803));
})(),(function (){var fexpr__99805 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99805.cljs$core$IFn$_invoke$arity$1 ? fexpr__99805.cljs$core$IFn$_invoke$arity$1(G__99803) : fexpr__99805.call(null,G__99803));
})()], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99806){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99807 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99807.cljs$core$IFn$_invoke$arity$1 ? fexpr__99807.cljs$core$IFn$_invoke$arity$1(G__99806) : fexpr__99807.call(null,G__99806));
})(),(function (){var fexpr__99808 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99808.cljs$core$IFn$_invoke$arity$1 ? fexpr__99808.cljs$core$IFn$_invoke$arity$1(G__99806) : fexpr__99808.call(null,G__99806));
})()], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x2","??x2",169445330,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99809){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99810 = new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null);
return (fexpr__99810.cljs$core$IFn$_invoke$arity$1 ? fexpr__99810.cljs$core$IFn$_invoke$arity$1(G__99809) : fexpr__99810.call(null,G__99809));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99811 = new cljs.core.Symbol(null,"??x2","??x2",169445330,null);
return (fexpr__99811.cljs$core$IFn$_invoke$arity$1 ? fexpr__99811.cljs$core$IFn$_invoke$arity$1(G__99809) : fexpr__99811.call(null,G__99809));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99812 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99812.cljs$core$IFn$_invoke$arity$1 ? fexpr__99812.cljs$core$IFn$_invoke$arity$1(G__99809) : fexpr__99812.call(null,G__99809));
})(),(function (){var fexpr__99813 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99813.cljs$core$IFn$_invoke$arity$1 ? fexpr__99813.cljs$core$IFn$_invoke$arity$1(G__99809) : fexpr__99813.call(null,G__99809));
})()], null))], null))], null)], 0)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y1","??y1",-1969315695,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y2","??y2",-796250797,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99814){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99815 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99815.cljs$core$IFn$_invoke$arity$1 ? fexpr__99815.cljs$core$IFn$_invoke$arity$1(G__99814) : fexpr__99815.call(null,G__99814));
})(),(function (){var fexpr__99816 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99816.cljs$core$IFn$_invoke$arity$1 ? fexpr__99816.cljs$core$IFn$_invoke$arity$1(G__99814) : fexpr__99816.call(null,G__99814));
})()], null))], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99817 = new cljs.core.Symbol(null,"??y1","??y1",-1969315695,null);
return (fexpr__99817.cljs$core$IFn$_invoke$arity$1 ? fexpr__99817.cljs$core$IFn$_invoke$arity$1(G__99814) : fexpr__99817.call(null,G__99814));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99818 = new cljs.core.Symbol(null,"??y2","??y2",-796250797,null);
return (fexpr__99818.cljs$core$IFn$_invoke$arity$1 ? fexpr__99818.cljs$core$IFn$_invoke$arity$1(G__99814) : fexpr__99818.call(null,G__99814));
})()], 0)))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x2","??x2",169445330,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y1","??y1",-1969315695,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y2","??y2",-796250797,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99819){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99820 = new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null);
return (fexpr__99820.cljs$core$IFn$_invoke$arity$1 ? fexpr__99820.cljs$core$IFn$_invoke$arity$1(G__99819) : fexpr__99820.call(null,G__99819));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99821 = new cljs.core.Symbol(null,"??x2","??x2",169445330,null);
return (fexpr__99821.cljs$core$IFn$_invoke$arity$1 ? fexpr__99821.cljs$core$IFn$_invoke$arity$1(G__99819) : fexpr__99821.call(null,G__99819));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__99822 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__99822.cljs$core$IFn$_invoke$arity$1 ? fexpr__99822.cljs$core$IFn$_invoke$arity$1(G__99819) : fexpr__99822.call(null,G__99819));
})(),(function (){var fexpr__99823 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__99823.cljs$core$IFn$_invoke$arity$1 ? fexpr__99823.cljs$core$IFn$_invoke$arity$1(G__99819) : fexpr__99823.call(null,G__99819));
})()], null))], null))], null)], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99824 = new cljs.core.Symbol(null,"??y1","??y1",-1969315695,null);
return (fexpr__99824.cljs$core$IFn$_invoke$arity$1 ? fexpr__99824.cljs$core$IFn$_invoke$arity$1(G__99819) : fexpr__99824.call(null,G__99819));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99825 = new cljs.core.Symbol(null,"??y2","??y2",-796250797,null);
return (fexpr__99825.cljs$core$IFn$_invoke$arity$1 ? fexpr__99825.cljs$core$IFn$_invoke$arity$1(G__99819) : fexpr__99825.call(null,G__99819));
})()], 0)))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.exp_expand = (function (){var exact_integer_QMARK_ = (function (x){
return ((sicmutils.value.integral_QMARK_(x)) && (sicmutils.value.exact_QMARK_(x)));
});
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x1","?x1",697080023,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99837){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__99838 = new cljs.core.Symbol(null,"?x1","?x1",697080023,null);
return (fexpr__99838.cljs$core$IFn$_invoke$arity$1 ? fexpr__99838.cljs$core$IFn$_invoke$arity$1(G__99837) : fexpr__99838.call(null,G__99837));
})()], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x1","?x1",697080023,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99839){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__99840 = new cljs.core.Symbol(null,"?x1","?x1",697080023,null);
return (fexpr__99840.cljs$core$IFn$_invoke$arity$1 ? fexpr__99840.cljs$core$IFn$_invoke$arity$1(G__99839) : fexpr__99840.call(null,G__99839));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__99841 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__99841.cljs$core$IFn$_invoke$arity$1 ? fexpr__99841.cljs$core$IFn$_invoke$arity$1(G__99839) : fexpr__99841.call(null,G__99839));
})()], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x1","?x1",697080023,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99842){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__99843 = new cljs.core.Symbol(null,"?x1","?x1",697080023,null);
return (fexpr__99843.cljs$core$IFn$_invoke$arity$1 ? fexpr__99843.cljs$core$IFn$_invoke$arity$1(G__99842) : fexpr__99843.call(null,G__99842));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__99844 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__99844.cljs$core$IFn$_invoke$arity$1 ? fexpr__99844.cljs$core$IFn$_invoke$arity$1(G__99842) : fexpr__99844.call(null,G__99842));
})()], null),(function (){var fexpr__99845 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__99845.cljs$core$IFn$_invoke$arity$1 ? fexpr__99845.cljs$core$IFn$_invoke$arity$1(G__99842) : fexpr__99845.call(null,G__99842));
})()))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,sicmutils.simplify.rules.imaginary_integer_QMARK_,(new cljs.core.List(null,(function (p1__99826_SHARP_){
return (sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1(p1__99826_SHARP_) > (1));
}),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99846){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I], null),(function (){var fexpr__99847 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__99847.cljs$core$IFn$_invoke$arity$1 ? fexpr__99847.cljs$core$IFn$_invoke$arity$1(G__99846) : fexpr__99847.call(null,G__99846));
})()))], null)),(function (p1__99827_SHARP_){
return sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99848 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__99827_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99827_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99848) : p1__99827_SHARP_.call(null,G__99848));
})());
})(G__99846)], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,sicmutils.simplify.rules.imaginary_integer_QMARK_,(new cljs.core.List(null,(function (p1__99828_SHARP_){
return (sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1(p1__99828_SHARP_) < (-1));
}),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99849){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I)], null),(function (){var fexpr__99850 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__99850.cljs$core$IFn$_invoke$arity$1 ? fexpr__99850.cljs$core$IFn$_invoke$arity$1(G__99849) : fexpr__99850.call(null,G__99849));
})()))], null)),(function (p1__99829_SHARP_){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99851 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__99829_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99829_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99851) : p1__99829_SHARP_.call(null,G__99851));
})()));
})(G__99849)], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,exact_integer_QMARK_,(new cljs.core.List(null,(function (p1__99830_SHARP_){
return (p1__99830_SHARP_ > (1));
}),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99852){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99853 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__99853.cljs$core$IFn$_invoke$arity$1 ? fexpr__99853.cljs$core$IFn$_invoke$arity$1(G__99852) : fexpr__99853.call(null,G__99852));
})()))], null)),(function (){var fexpr__99854 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__99854.cljs$core$IFn$_invoke$arity$1 ? fexpr__99854.cljs$core$IFn$_invoke$arity$1(G__99852) : fexpr__99854.call(null,G__99852));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,exact_integer_QMARK_,(new cljs.core.List(null,(function (p1__99831_SHARP_){
return (p1__99831_SHARP_ < (-1));
}),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99855){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-1)], null),(function (){var fexpr__99856 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__99856.cljs$core$IFn$_invoke$arity$1 ? fexpr__99856.cljs$core$IFn$_invoke$arity$1(G__99855) : fexpr__99856.call(null,G__99855));
})()))], null)),(function (p1__99832_SHARP_){
return (- (function (){var G__99857 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__99832_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99832_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99857) : p1__99832_SHARP_.call(null,G__99857));
})());
})(G__99855)], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,sicmutils.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99858){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__99833_SHARP_){
return sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99859 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__99833_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99833_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99859) : p1__99833_SHARP_.call(null,G__99859));
})());
})(G__99858)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__99834_SHARP_){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99860 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__99834_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99834_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99860) : p1__99834_SHARP_.call(null,G__99860));
})()),(cljs.core.unquote.cljs$core$IFn$_invoke$arity$1 ? cljs.core.unquote.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I) : cljs.core.unquote.call(null,sicmutils.complex.I)));
})(G__99858)], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,sicmutils.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99861){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99835_SHARP_){
return sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99862 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__99835_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99835_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99862) : p1__99835_SHARP_.call(null,G__99862));
})());
})(G__99861)], null),(function (){var fexpr__99863 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__99863.cljs$core$IFn$_invoke$arity$1 ? fexpr__99863.cljs$core$IFn$_invoke$arity$1(G__99861) : fexpr__99863.call(null,G__99861));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99836_SHARP_){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__99864 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__99836_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99836_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99864) : p1__99836_SHARP_.call(null,G__99864));
})()),(cljs.core.unquote.cljs$core$IFn$_invoke$arity$1 ? cljs.core.unquote.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I) : cljs.core.unquote.call(null,sicmutils.complex.I)));
})(G__99861)], null),(function (){var fexpr__99865 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__99865.cljs$core$IFn$_invoke$arity$1 ? fexpr__99865.cljs$core$IFn$_invoke$arity$1(G__99861) : fexpr__99865.call(null,G__99861));
})()))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0))], 0));
})();
sicmutils.simplify.rules.complex_trig = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,sicmutils.complex.I,null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99866){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),(1)], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),(new cljs.core.List(null,sicmutils.complex.I,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99867){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),(function (){var fexpr__99868 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__99868.cljs$core$IFn$_invoke$arity$1 ? fexpr__99868.cljs$core$IFn$_invoke$arity$1(G__99867) : fexpr__99868.call(null,G__99867));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,sicmutils.complex.I,(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99869){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),(function (){var fexpr__99870 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__99870.cljs$core$IFn$_invoke$arity$1 ? fexpr__99870.cljs$core$IFn$_invoke$arity$1(G__99869) : fexpr__99870.call(null,G__99869));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),(new cljs.core.List(null,sicmutils.complex.I,(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99871){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99872 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__99872.cljs$core$IFn$_invoke$arity$1 ? fexpr__99872.cljs$core$IFn$_invoke$arity$1(G__99871) : fexpr__99872.call(null,G__99871));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99873 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__99873.cljs$core$IFn$_invoke$arity$1 ? fexpr__99873.cljs$core$IFn$_invoke$arity$1(G__99871) : fexpr__99873.call(null,G__99871));
})()], 0)))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,sicmutils.complex.I,null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99874){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),(1)], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),(new cljs.core.List(null,sicmutils.complex.I,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99875){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),(function (){var fexpr__99876 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__99876.cljs$core$IFn$_invoke$arity$1 ? fexpr__99876.cljs$core$IFn$_invoke$arity$1(G__99875) : fexpr__99876.call(null,G__99875));
})()], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,sicmutils.complex.I,(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99877){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),(function (){var fexpr__99878 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__99878.cljs$core$IFn$_invoke$arity$1 ? fexpr__99878.cljs$core$IFn$_invoke$arity$1(G__99877) : fexpr__99878.call(null,G__99877));
})()], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),(new cljs.core.List(null,sicmutils.complex.I,(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99879){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99880 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__99880.cljs$core$IFn$_invoke$arity$1 ? fexpr__99880.cljs$core$IFn$_invoke$arity$1(G__99879) : fexpr__99880.call(null,G__99879));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__99881 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__99881.cljs$core$IFn$_invoke$arity$1 ? fexpr__99881.cljs$core$IFn$_invoke$arity$1(G__99879) : fexpr__99881.call(null,G__99879));
})()], 0)))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.complex_rules = (function (){var ctor = cljs.core.list(new cljs.core.Symbol(null,"?","?",-62633706,null),new cljs.core.Symbol(null,"?op","?op",-135731883,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"make-rectangular","make-rectangular",-1494662174,null),"null",new cljs.core.Symbol(null,"complex","complex",-1238824944,null),"null"], null), null));
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,ctor,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?theta","?theta",-893896091,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?theta","?theta",-893896091,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99882){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__99883 = new cljs.core.Symbol(null,"?theta","?theta",-893896091,null);
return (fexpr__99883.cljs$core$IFn$_invoke$arity$1 ? fexpr__99883.cljs$core$IFn$_invoke$arity$1(G__99882) : fexpr__99883.call(null,G__99882));
})()], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"real-part","real-part",-2001752061,null),(new cljs.core.List(null,(new cljs.core.List(null,ctor,(new cljs.core.List(null,new cljs.core.Symbol(null,"?re","?re",118270068,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99884){
var r__21102__auto__ = (function (){var fexpr__99885 = new cljs.core.Symbol(null,"?re","?re",118270068,null);
return (fexpr__99885.cljs$core$IFn$_invoke$arity$1 ? fexpr__99885.cljs$core$IFn$_invoke$arity$1(G__99884) : fexpr__99885.call(null,G__99884));
})();
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"imag-part","imag-part",2028041294,null),(new cljs.core.List(null,(new cljs.core.List(null,ctor,(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?im","?im",120320525,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99886){
var r__21102__auto__ = (function (){var fexpr__99887 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__99887.cljs$core$IFn$_invoke$arity$1 ? fexpr__99887.cljs$core$IFn$_invoke$arity$1(G__99886) : fexpr__99887.call(null,G__99886));
})();
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,ctor,(new cljs.core.List(null,new cljs.core.Symbol(null,"?re","?re",118270068,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?im","?im",120320525,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99888){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__99889 = new cljs.core.Symbol(null,"?re","?re",118270068,null);
return (fexpr__99889.cljs$core$IFn$_invoke$arity$1 ? fexpr__99889.cljs$core$IFn$_invoke$arity$1(G__99888) : fexpr__99889.call(null,G__99888));
})(),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__99890 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__99890.cljs$core$IFn$_invoke$arity$1 ? fexpr__99890.cljs$core$IFn$_invoke$arity$1(G__99888) : fexpr__99890.call(null,G__99888));
})(),(2)], null))], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"angle","angle",-1032341515,null),(new cljs.core.List(null,(new cljs.core.List(null,ctor,(new cljs.core.List(null,new cljs.core.Symbol(null,"?re","?re",118270068,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?im","?im",120320525,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99891){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(function (){var fexpr__99892 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__99892.cljs$core$IFn$_invoke$arity$1 ? fexpr__99892.cljs$core$IFn$_invoke$arity$1(G__99891) : fexpr__99892.call(null,G__99891));
})(),(function (){var fexpr__99893 = new cljs.core.Symbol(null,"?re","?re",118270068,null);
return (fexpr__99893.cljs$core$IFn$_invoke$arity$1 ? fexpr__99893.cljs$core$IFn$_invoke$arity$1(G__99891) : fexpr__99893.call(null,G__99891));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"real-part","real-part",-2001752061,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99894){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99895 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__99895.cljs$core$IFn$_invoke$arity$1 ? fexpr__99895.cljs$core$IFn$_invoke$arity$1(G__99894) : fexpr__99895.call(null,G__99894));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__99896 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__99896.cljs$core$IFn$_invoke$arity$1 ? fexpr__99896.cljs$core$IFn$_invoke$arity$1(G__99894) : fexpr__99896.call(null,G__99894));
})()], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"imag-part","imag-part",2028041294,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99897){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__99898 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__99898.cljs$core$IFn$_invoke$arity$1 ? fexpr__99898.cljs$core$IFn$_invoke$arity$1(G__99897) : fexpr__99898.call(null,G__99897));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__99899 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__99899.cljs$core$IFn$_invoke$arity$1 ? fexpr__99899.cljs$core$IFn$_invoke$arity$1(G__99897) : fexpr__99899.call(null,G__99897));
})()], null))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99900){
var r__21102__auto__ = (function (){var fexpr__99901 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__99901.cljs$core$IFn$_invoke$arity$1 ? fexpr__99901.cljs$core$IFn$_invoke$arity$1(G__99900) : fexpr__99901.call(null,G__99900));
})();
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"angle","angle",-1032341515,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__99902){
var r__21102__auto__ = (function (){var fexpr__99903 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__99903.cljs$core$IFn$_invoke$arity$1 ? fexpr__99903.cljs$core$IFn$_invoke$arity$1(G__99902) : fexpr__99903.call(null,G__99902));
})();
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}))], 0))], 0));
})();
sicmutils.simplify.rules.divide_numbers_through = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,new cljs.core.Symbol(null,"?factor","?factor",598737740,null),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99907){
var r__21102__auto__ = (function (){var fexpr__99908 = new cljs.core.Symbol(null,"?factor","?factor",598737740,null);
return (fexpr__99908.cljs$core$IFn$_invoke$arity$1 ? fexpr__99908.cljs$core$IFn$_invoke$arity$1(G__99907) : fexpr__99908.call(null,G__99907));
})();
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99909){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99910 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__99910.cljs$core$IFn$_invoke$arity$1 ? fexpr__99910.cljs$core$IFn$_invoke$arity$1(G__99909) : fexpr__99910.call(null,G__99909));
})()));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99911){
var r__21102__auto__ = (function (p__99912){
var map__99913 = p__99912;
var map__99913__$1 = cljs.core.__destructure_map(map__99913);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99913__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99913__$1,new cljs.core.Symbol(null,"?d","?d",-1851543854,null));
return sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(n,d);
})(G__99911);
var or__4253__auto__ = r__21102__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??terms","??terms",1737460425,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99914){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (p1__99904_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
var G__99915 = p1__99904_SHARP_;
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),n,(function (){var fexpr__99916 = new cljs.core.Symbol(null,"?d","?d",-1851543854,null);
return (fexpr__99916.cljs$core$IFn$_invoke$arity$1 ? fexpr__99916.cljs$core$IFn$_invoke$arity$1(G__99915) : fexpr__99916.call(null,G__99915));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}),(function (){var G__99917 = new cljs.core.Symbol(null,"??terms","??terms",1737460425,null);
return (p1__99904_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99904_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99917) : p1__99904_SHARP_.call(null,G__99917));
})());
})(G__99914)));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99918){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p__99919){
var map__99920 = p__99919;
var map__99920__$1 = cljs.core.__destructure_map(map__99920);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99920__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99920__$1,new cljs.core.Symbol(null,"?d","?d",-1851543854,null));
return sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(n,d);
})(G__99918)], null),(function (){var fexpr__99921 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__99921.cljs$core$IFn$_invoke$arity$1 ? fexpr__99921.cljs$core$IFn$_invoke$arity$1(G__99918) : fexpr__99921.call(null,G__99918));
})()));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99922){
var r__21102__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99905_SHARP_){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1((function (){var G__99923 = new cljs.core.Symbol(null,"?d","?d",-1851543854,null);
return (p1__99905_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99905_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99923) : p1__99905_SHARP_.call(null,G__99923));
})());
})(G__99922)], null),(function (){var fexpr__99924 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__99924.cljs$core$IFn$_invoke$arity$1 ? fexpr__99924.cljs$core$IFn$_invoke$arity$1(G__99922) : fexpr__99924.call(null,G__99922));
})()));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?factor","?factor",598737740,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99925){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__99926 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__99926.cljs$core$IFn$_invoke$arity$1 ? fexpr__99926.cljs$core$IFn$_invoke$arity$1(G__99925) : fexpr__99926.call(null,G__99925));
})(),(function (){var fexpr__99927 = new cljs.core.Symbol(null,"?d","?d",-1851543854,null);
return (fexpr__99927.cljs$core$IFn$_invoke$arity$1 ? fexpr__99927.cljs$core$IFn$_invoke$arity$1(G__99925) : fexpr__99927.call(null,G__99925));
})()], null)),(function (){var fexpr__99928 = new cljs.core.Symbol(null,"?factor","?factor",598737740,null);
return (fexpr__99928.cljs$core$IFn$_invoke$arity$1 ? fexpr__99928.cljs$core$IFn$_invoke$arity$1(G__99925) : fexpr__99928.call(null,G__99925));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99929){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__99930 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__99930.cljs$core$IFn$_invoke$arity$1 ? fexpr__99930.cljs$core$IFn$_invoke$arity$1(G__99929) : fexpr__99930.call(null,G__99929));
})(),(function (){var fexpr__99931 = new cljs.core.Symbol(null,"?d","?d",-1851543854,null);
return (fexpr__99931.cljs$core$IFn$_invoke$arity$1 ? fexpr__99931.cljs$core$IFn$_invoke$arity$1(G__99929) : fexpr__99931.call(null,G__99929));
})()], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__99932 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__99932.cljs$core$IFn$_invoke$arity$1 ? fexpr__99932.cljs$core$IFn$_invoke$arity$1(G__99929) : fexpr__99932.call(null,G__99929));
})()))], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__99933){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__99906_SHARP_){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1((function (){var G__99934 = new cljs.core.Symbol(null,"?d","?d",-1851543854,null);
return (p1__99906_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99906_SHARP_.cljs$core$IFn$_invoke$arity$1(G__99934) : p1__99906_SHARP_.call(null,G__99934));
})());
})(G__99933),(function (){var fexpr__99935 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__99935.cljs$core$IFn$_invoke$arity$1 ? fexpr__99935.cljs$core$IFn$_invoke$arity$1(G__99933) : fexpr__99935.call(null,G__99933));
})()], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
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
var expr_SINGLEQUOTE_ = (function (){var G__99936 = (misc.cljs$core$IFn$_invoke$arity$1 ? misc.cljs$core$IFn$_invoke$arity$1(expr) : misc.call(null,expr));
var G__99936__$1 = ((logexp_QMARK_)?(le.cljs$core$IFn$_invoke$arity$1 ? le.cljs$core$IFn$_invoke$arity$1(G__99936) : le.call(null,G__99936)):G__99936);
var G__99936__$2 = ((mag_QMARK_)?(sicmutils.simplify.rules.magnitude.cljs$core$IFn$_invoke$arity$1 ? sicmutils.simplify.rules.magnitude.cljs$core$IFn$_invoke$arity$1(G__99936__$1) : sicmutils.simplify.rules.magnitude.call(null,G__99936__$1)):G__99936__$1);
var G__99936__$3 = ((invtrig_QMARK_)?(ti.cljs$core$IFn$_invoke$arity$1 ? ti.cljs$core$IFn$_invoke$arity$1(G__99936__$2) : ti.call(null,G__99936__$2)):G__99936__$2);
if(cljs.core.truth_((function (){var and__4251__auto__ = sincos_QMARK_;
if(and__4251__auto__){
return sicmutils.simplify.rules._STAR_sin_cos_simplify_QMARK__STAR_;
} else {
return and__4251__auto__;
}
})())){
return (st.cljs$core$IFn$_invoke$arity$1 ? st.cljs$core$IFn$_invoke$arity$1(G__99936__$3) : st.call(null,G__99936__$3));
} else {
return G__99936__$3;
}
})();
if(((sincos_QMARK_) && (invtrig_QMARK_))){
var G__99937 = (ti.cljs$core$IFn$_invoke$arity$1 ? ti.cljs$core$IFn$_invoke$arity$1(expr_SINGLEQUOTE_) : ti.call(null,expr_SINGLEQUOTE_));
return (sim_root.cljs$core$IFn$_invoke$arity$1 ? sim_root.cljs$core$IFn$_invoke$arity$1(G__99937) : sim_root.call(null,G__99937));
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
