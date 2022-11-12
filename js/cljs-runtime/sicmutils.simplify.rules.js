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
var len__4864__auto___85971 = arguments.length;
var i__4865__auto___85972 = (0);
while(true){
if((i__4865__auto___85972 < len__4864__auto___85971)){
args__4870__auto__.push((arguments[i__4865__auto___85972]));

var G__85973 = (i__4865__auto___85972 + (1));
i__4865__auto___85972 = G__85973;
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
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,op_set,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84276){
var r__84009__auto__ = (function (){var fexpr__84280 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84280.cljs$core$IFn$_invoke$arity$1 ? fexpr__84280.cljs$core$IFn$_invoke$arity$1(G__84276) : fexpr__84280.call(null,G__84276));
})();
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0));
}));

(sicmutils.simplify.rules.unary_elimination.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.simplify.rules.unary_elimination.cljs$lang$applyTo = (function (seq84268){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq84268));
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
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,op,(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84288){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [op], null),(function (p__84291){
var map__84292 = p__84291;
var map__84292__$1 = cljs.core.__destructure_map(map__84292);
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84292__$1,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([constant]),xs);
})(G__84288)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
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
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,op,(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,constant,null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__84301){
var r__84009__auto__ = constant;
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,op,(new cljs.core.List(null,constant,(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__84305){
var r__84009__auto__ = constant;
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
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
var len__4864__auto___85975 = arguments.length;
var i__4865__auto___85976 = (0);
while(true){
if((i__4865__auto___85976 < len__4864__auto___85975)){
args__4870__auto__.push((arguments[i__4865__auto___85976]));

var G__85977 = (i__4865__auto___85976 + (1));
i__4865__auto___85976 = G__85977;
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
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,op,(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84321){
var r__84009__auto__ = cljs.core.vec((function (){var fexpr__84323 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__84323.cljs$core$IFn$_invoke$arity$1 ? fexpr__84323.cljs$core$IFn$_invoke$arity$1(G__84321) : fexpr__84323.call(null,G__84321));
})());
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"?x","?x",-555096650,null),pattern.rule._EQ__GT_),(function (G__84328){
var r__84009__auto__ = cljs.core.vec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__84331 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84331.cljs$core$IFn$_invoke$arity$1 ? fexpr__84331.cljs$core$IFn$_invoke$arity$1(G__84328) : fexpr__84331.call(null,G__84328));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0));
});
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,op_set,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),pattern.rule._EQ__GT_),(function (G__84335){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__84340 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__84340.cljs$core$IFn$_invoke$arity$1 ? fexpr__84340.cljs$core$IFn$_invoke$arity$1(G__84335) : fexpr__84340.call(null,G__84335));
})()], null),(function (){var fexpr__84341 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__84341.cljs$core$IFn$_invoke$arity$1 ? fexpr__84341.cljs$core$IFn$_invoke$arity$1(G__84335) : fexpr__84341.call(null,G__84335));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__84344){
var map__84345 = p__84344;
var map__84345__$1 = cljs.core.__destructure_map(map__84345);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84345__$1,new cljs.core.Symbol(null,"?op","?op",-135731883,null));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84345__$1,new cljs.core.Symbol(null,"??b","??b",254504576,null));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84345__$1,new cljs.core.Symbol(null,"??c","??c",1219586074,null));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(flatten(op),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.concat.cljs$core$IFn$_invoke$arity$2(b,c)], 0));
})(G__84335)], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0));
}));

(sicmutils.simplify.rules.associative.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.simplify.rules.associative.cljs$lang$applyTo = (function (seq84312){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq84312));
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
var len__4864__auto___85978 = arguments.length;
var i__4865__auto___85979 = (0);
while(true){
if((i__4865__auto___85979 < len__4864__auto___85978)){
args__4870__auto__.push((arguments[i__4865__auto___85979]));

var G__85980 = (i__4865__auto___85979 + (1));
i__4865__auto___85979 = G__85980;
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
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,op_set,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84376){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__84377 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__84377.cljs$core$IFn$_invoke$arity$1 ? fexpr__84377.cljs$core$IFn$_invoke$arity$1(G__84376) : fexpr__84377.call(null,G__84376));
})()], null),(function (p1__84368_SHARP_){
return sicmutils.expression.sort((function (){var G__84378 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (p1__84368_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__84368_SHARP_.cljs$core$IFn$_invoke$arity$1(G__84378) : p1__84368_SHARP_.call(null,G__84378));
})());
})(G__84376)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0));
}));

(sicmutils.simplify.rules.commutative.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.simplify.rules.commutative.cljs$lang$applyTo = (function (seq84369){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq84369));
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
var len__4864__auto___85981 = arguments.length;
var i__4865__auto___85983 = (0);
while(true){
if((i__4865__auto___85983 < len__4864__auto___85981)){
args__4870__auto__.push((arguments[i__4865__auto___85983]));

var G__85984 = (i__4865__auto___85983 + (1));
i__4865__auto___85983 = G__85984;
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
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,op_set,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??post","??post",1092296697,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),pattern.rule._EQ__GT_),(function (G__84386){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__84389 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__84389.cljs$core$IFn$_invoke$arity$1 ? fexpr__84389.cljs$core$IFn$_invoke$arity$1(G__84386) : fexpr__84389.call(null,G__84386));
})()], null),(function (m){
return cljs.core.dedupe.cljs$core$IFn$_invoke$arity$1((function (){var G__84390 = m;
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__84391 = new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null);
return (fexpr__84391.cljs$core$IFn$_invoke$arity$1 ? fexpr__84391.cljs$core$IFn$_invoke$arity$1(G__84390) : fexpr__84391.call(null,G__84390));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__84392 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84392.cljs$core$IFn$_invoke$arity$1 ? fexpr__84392.cljs$core$IFn$_invoke$arity$1(G__84390) : fexpr__84392.call(null,G__84390));
})()], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__84393 = new cljs.core.Symbol(null,"??post","??post",1092296697,null);
return (fexpr__84393.cljs$core$IFn$_invoke$arity$1 ? fexpr__84393.cljs$core$IFn$_invoke$arity$1(G__84390) : fexpr__84393.call(null,G__84390));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})());
})(G__84386)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0));
}));

(sicmutils.simplify.rules.idempotent.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.simplify.rules.idempotent.cljs$lang$applyTo = (function (seq84383){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq84383));
}));

/**
 * Set of rules that collect adjacent products, exponents and nested
 *  exponents into exponent terms.
 */
sicmutils.simplify.rules.exponent_contract = pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__84399){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__84400 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__84400.cljs$core$IFn$_invoke$arity$1 ? fexpr__84400.cljs$core$IFn$_invoke$arity$1(G__84399) : fexpr__84400.call(null,G__84399));
})(),(function (p1__84395_SHARP_){
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__84401 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__84395_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__84395_SHARP_.cljs$core$IFn$_invoke$arity$1(G__84401) : p1__84395_SHARP_.call(null,G__84401));
})(),(function (){var G__84402 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (p1__84395_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__84395_SHARP_.cljs$core$IFn$_invoke$arity$1(G__84402) : p1__84395_SHARP_.call(null,G__84402));
})());
})(G__84399)], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??post","??post",1092296697,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),pattern.rule._EQ__GT_),(function (G__84403){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84404 = new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null);
return (fexpr__84404.cljs$core$IFn$_invoke$arity$1 ? fexpr__84404.cljs$core$IFn$_invoke$arity$1(G__84403) : fexpr__84404.call(null,G__84403));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__84405 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__84405.cljs$core$IFn$_invoke$arity$1 ? fexpr__84405.cljs$core$IFn$_invoke$arity$1(G__84403) : fexpr__84405.call(null,G__84403));
})(),(function (p1__84396_SHARP_){
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__84406 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__84396_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__84396_SHARP_.cljs$core$IFn$_invoke$arity$1(G__84406) : p1__84396_SHARP_.call(null,G__84406));
})(),(function (){var G__84407 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (p1__84396_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__84396_SHARP_.cljs$core$IFn$_invoke$arity$1(G__84407) : p1__84396_SHARP_.call(null,G__84407));
})());
})(G__84403)], null))], null),(function (){var fexpr__84408 = new cljs.core.Symbol(null,"??post","??post",1092296697,null);
return (fexpr__84408.cljs$core$IFn$_invoke$arity$1 ? fexpr__84408.cljs$core$IFn$_invoke$arity$1(G__84403) : fexpr__84408.call(null,G__84403));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??post","??post",1092296697,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),pattern.rule._EQ__GT_),(function (G__84409){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84410 = new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null);
return (fexpr__84410.cljs$core$IFn$_invoke$arity$1 ? fexpr__84410.cljs$core$IFn$_invoke$arity$1(G__84409) : fexpr__84410.call(null,G__84409));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__84411 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__84411.cljs$core$IFn$_invoke$arity$1 ? fexpr__84411.cljs$core$IFn$_invoke$arity$1(G__84409) : fexpr__84411.call(null,G__84409));
})(),(function (p1__84397_SHARP_){
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__84412 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__84397_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__84397_SHARP_.cljs$core$IFn$_invoke$arity$1(G__84412) : p1__84397_SHARP_.call(null,G__84412));
})(),(1));
})(G__84409)], null))], null),(function (){var fexpr__84413 = new cljs.core.Symbol(null,"??post","??post",1092296697,null);
return (fexpr__84413.cljs$core$IFn$_invoke$arity$1 ? fexpr__84413.cljs$core$IFn$_invoke$arity$1(G__84409) : fexpr__84413.call(null,G__84409));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??post","??post",1092296697,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),pattern.rule._EQ__GT_),(function (G__84415){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84416 = new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null);
return (fexpr__84416.cljs$core$IFn$_invoke$arity$1 ? fexpr__84416.cljs$core$IFn$_invoke$arity$1(G__84415) : fexpr__84416.call(null,G__84415));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__84417 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__84417.cljs$core$IFn$_invoke$arity$1 ? fexpr__84417.cljs$core$IFn$_invoke$arity$1(G__84415) : fexpr__84417.call(null,G__84415));
})(),(function (p1__84398_SHARP_){
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__84418 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__84398_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__84398_SHARP_.cljs$core$IFn$_invoke$arity$1(G__84418) : p1__84398_SHARP_.call(null,G__84418));
})(),(1));
})(G__84415)], null))], null),(function (){var fexpr__84419 = new cljs.core.Symbol(null,"??post","??post",1092296697,null);
return (fexpr__84419.cljs$core$IFn$_invoke$arity$1 ? fexpr__84419.cljs$core$IFn$_invoke$arity$1(G__84415) : fexpr__84419.call(null,G__84415));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??post","??post",1092296697,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),pattern.rule._EQ__GT_),(function (G__84422){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84425 = new cljs.core.Symbol(null,"??pre","??pre",-1767241378,null);
return (fexpr__84425.cljs$core$IFn$_invoke$arity$1 ? fexpr__84425.cljs$core$IFn$_invoke$arity$1(G__84422) : fexpr__84425.call(null,G__84422));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__84426 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__84426.cljs$core$IFn$_invoke$arity$1 ? fexpr__84426.cljs$core$IFn$_invoke$arity$1(G__84422) : fexpr__84426.call(null,G__84422));
})(),(2)], null))], null),(function (){var fexpr__84427 = new cljs.core.Symbol(null,"??post","??post",1092296697,null);
return (fexpr__84427.cljs$core$IFn$_invoke$arity$1 ? fexpr__84427.cljs$core$IFn$_invoke$arity$1(G__84422) : fexpr__84427.call(null,G__84422));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
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
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84428){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__84429 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84429.cljs$core$IFn$_invoke$arity$1 ? fexpr__84429.cljs$core$IFn$_invoke$arity$1(G__84428) : fexpr__84429.call(null,G__84428));
})(),(function (){var fexpr__84430 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__84430.cljs$core$IFn$_invoke$arity$1 ? fexpr__84430.cljs$core$IFn$_invoke$arity$1(G__84428) : fexpr__84430.call(null,G__84428));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84431){
var r__84009__auto__ = (function (){var fexpr__84433 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84433.cljs$core$IFn$_invoke$arity$1 ? fexpr__84433.cljs$core$IFn$_invoke$arity$1(G__84431) : fexpr__84433.call(null,G__84431));
})();
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.guard((function (_){
return sicmutils.simplify.rules._STAR_log_exp_simplify_QMARK__STAR_;
}),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null))),(function (p__84434){
var map__84435 = p__84434;
var map__84435__$1 = cljs.core.__destructure_map(map__84435);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84435__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var and__4251__auto__ = sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),xs], null))], null)),xs], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})(),new cljs.core.Symbol(null,"logexp1","logexp1",-1360132001,null));
if(cljs.core.truth_(and__4251__auto__)){
return x;
} else {
return and__4251__auto__;
}
}))),pattern.rule.guard((function (_){
return sicmutils.simplify.rules._STAR_sqrt_expt_simplify_QMARK__STAR_;
}),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null))),(function (p__84437){
var map__84438 = p__84437;
var map__84438__$1 = cljs.core.__destructure_map(map__84438);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84438__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var and__4251__auto__ = sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),xs], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),xs,(2)], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})(),new cljs.core.Symbol(null,"logexp2","logexp2",-1768907713,null));
if(cljs.core.truth_(and__4251__auto__)){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),x,(2)], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
} else {
return and__4251__auto__;
}
}))),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84440){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__84441 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84441.cljs$core$IFn$_invoke$arity$1 ? fexpr__84441.cljs$core$IFn$_invoke$arity$1(G__84440) : fexpr__84441.call(null,G__84440));
})()], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0))], 0));
});
/**
 * Rule simplifier for forms that contain `magnitude` entries.
 */
sicmutils.simplify.rules.magnitude = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.real_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84444){
var r__84009__auto__ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.magnitude,new cljs.core.Symbol(null,"?n","?n",-2053238410,null))(G__84444);
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84445){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (p__84446){
var map__84447 = p__84446;
var map__84447__$1 = cljs.core.__destructure_map(map__84447);
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84447__$1,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__84442_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,p1__84442_SHARP_,null,(1),null)),(2),null));
}),xs);
})(G__84445)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(1),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84451){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(function (){var fexpr__84452 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84452.cljs$core$IFn$_invoke$arity$1 ? fexpr__84452.cljs$core$IFn$_invoke$arity$1(G__84451) : fexpr__84452.call(null,G__84451));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.even_integer_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84453){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__84454 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84454.cljs$core$IFn$_invoke$arity$1 ? fexpr__84454.cljs$core$IFn$_invoke$arity$1(G__84453) : fexpr__84454.call(null,G__84453));
})(),(function (){var fexpr__84455 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__84455.cljs$core$IFn$_invoke$arity$1 ? fexpr__84455.cljs$core$IFn$_invoke$arity$1(G__84453) : fexpr__84455.call(null,G__84453));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84456){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(function (){var fexpr__84457 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84457.cljs$core$IFn$_invoke$arity$1 ? fexpr__84457.cljs$core$IFn$_invoke$arity$1(G__84456) : fexpr__84457.call(null,G__84456));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__84458 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84458.cljs$core$IFn$_invoke$arity$1 ? fexpr__84458.cljs$core$IFn$_invoke$arity$1(G__84456) : fexpr__84458.call(null,G__84456));
})(),(function (p1__84443_SHARP_){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__84460 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__84443_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__84443_SHARP_.cljs$core$IFn$_invoke$arity$1(G__84460) : p1__84443_SHARP_.call(null,G__84460));
})(),(1));
})(G__84456)], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
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
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,(0),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__84466){
var r__84009__auto__ = (1);
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(1),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__84467){
var r__84009__auto__ = (function (){var fexpr__84468 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84468.cljs$core$IFn$_invoke$arity$1 ? fexpr__84468.cljs$core$IFn$_invoke$arity$1(G__84467) : fexpr__84468.call(null,G__84467));
})();
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,sicmutils.complex.I,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__84469){
var r__84009__auto__ = (function (p1__84461_SHARP_){
var G__84472 = cljs.core.mod((function (){var G__84474 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__84461_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__84461_SHARP_.cljs$core$IFn$_invoke$arity$1(G__84474) : p1__84461_SHARP_.call(null,G__84474));
})(),(4));
var fexpr__84471 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),sicmutils.complex.I,(-1),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I)], null);
return (fexpr__84471.cljs$core$IFn$_invoke$arity$1 ? fexpr__84471.cljs$core$IFn$_invoke$arity$1(G__84472) : fexpr__84471.call(null,G__84472));
})(G__84469);
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?b","?b",1575118075,null),null,(1),null)),(2),null)),(3),null)),(function (p__84475){
var map__84476 = p__84475;
var map__84476__$1 = cljs.core.__destructure_map(map__84476);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84476__$1,new cljs.core.Symbol(null,"?a","?a",1314302913,null));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84476__$1,new cljs.core.Symbol(null,"?b","?b",1575118075,null));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84476__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var as = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(a) : simplify.call(null,a));
var bs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(b) : simplify.call(null,b));
if(cljs.core.truth_((function (){var or__4253__auto__ = ((sicmutils.value.integral_QMARK_(as)) && (sicmutils.value.integral_QMARK_(bs)));
if(or__4253__auto__){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = ((sicmutils.simplify.rules.even_integer_QMARK_(bs)) && (sicmutils.value.integral_QMARK_((function (){var G__84480 = (sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(as,bs) : sym_COLON__STAR_.call(null,as,bs));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__84480) : simplify.call(null,G__84480));
})())));
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
var and__4251__auto__ = sicmutils.simplify.rules._STAR_exponent_product_simplify_QMARK__STAR_;
if(cljs.core.truth_(and__4251__auto__)){
return sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),x,as], null)),bs], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),x,(sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(as,bs) : sym_COLON__STAR_.call(null,as,bs))], null))], null));
var or__4253__auto____$2 = r__84009__auto__;
if(or__4253__auto____$2){
return or__4253__auto____$2;
} else {
return pattern.consequence.succeed(r__84009__auto__);
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
})),(function (G__84484){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__84486 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84486.cljs$core$IFn$_invoke$arity$1 ? fexpr__84486.cljs$core$IFn$_invoke$arity$1(G__84484) : fexpr__84486.call(null,G__84484));
})(),(function (){var fexpr__84487 = new cljs.core.Symbol(null,"?ab","?ab",-380882607,null);
return (fexpr__84487.cljs$core$IFn$_invoke$arity$1 ? fexpr__84487.cljs$core$IFn$_invoke$arity$1(G__84484) : fexpr__84487.call(null,G__84484));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(function (_){
return sicmutils.simplify.rules._STAR_expt_half__GT_sqrt_QMARK__STAR_;
})),(function (G__84488){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__84489 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84489.cljs$core$IFn$_invoke$arity$1 ? fexpr__84489.cljs$core$IFn$_invoke$arity$1(G__84488) : fexpr__84489.call(null,G__84488));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs1*","??fs1*",1798735663,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__84490){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84491 = new cljs.core.Symbol(null,"??fs1","??fs1",-1584583474,null);
return (fexpr__84491.cljs$core$IFn$_invoke$arity$1 ? fexpr__84491.cljs$core$IFn$_invoke$arity$1(G__84490) : fexpr__84491.call(null,G__84490));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__84492 = new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null);
return (fexpr__84492.cljs$core$IFn$_invoke$arity$1 ? fexpr__84492.cljs$core$IFn$_invoke$arity$1(G__84490) : fexpr__84492.call(null,G__84490));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__84493 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84493.cljs$core$IFn$_invoke$arity$1 ? fexpr__84493.cljs$core$IFn$_invoke$arity$1(G__84490) : fexpr__84493.call(null,G__84490));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(function (){var fexpr__84494 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__84494.cljs$core$IFn$_invoke$arity$1 ? fexpr__84494.cljs$core$IFn$_invoke$arity$1(G__84490) : fexpr__84494.call(null,G__84490));
})()], null))], null))], null),(function (){var fexpr__84495 = new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null);
return (fexpr__84495.cljs$core$IFn$_invoke$arity$1 ? fexpr__84495.cljs$core$IFn$_invoke$arity$1(G__84490) : fexpr__84495.call(null,G__84490));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs1","??fs1",-1584583474,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__84497){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84498 = new cljs.core.Symbol(null,"??fs1","??fs1",-1584583474,null);
return (fexpr__84498.cljs$core$IFn$_invoke$arity$1 ? fexpr__84498.cljs$core$IFn$_invoke$arity$1(G__84497) : fexpr__84498.call(null,G__84497));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__84499 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84499.cljs$core$IFn$_invoke$arity$1 ? fexpr__84499.cljs$core$IFn$_invoke$arity$1(G__84497) : fexpr__84499.call(null,G__84497));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(function (){var fexpr__84500 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__84500.cljs$core$IFn$_invoke$arity$1 ? fexpr__84500.cljs$core$IFn$_invoke$arity$1(G__84497) : fexpr__84500.call(null,G__84497));
})()], null))], null))], null),(function (){var fexpr__84501 = new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null);
return (fexpr__84501.cljs$core$IFn$_invoke$arity$1 ? fexpr__84501.cljs$core$IFn$_invoke$arity$1(G__84497) : fexpr__84501.call(null,G__84497));
})(),(function (){var fexpr__84502 = new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null);
return (fexpr__84502.cljs$core$IFn$_invoke$arity$1 ? fexpr__84502.cljs$core$IFn$_invoke$arity$1(G__84497) : fexpr__84502.call(null,G__84497));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs1","??fs1",-1584583474,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y1","?y1",1237029156,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y2","?y2",731715171,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__84503){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84504 = new cljs.core.Symbol(null,"??fs1","??fs1",-1584583474,null);
return (fexpr__84504.cljs$core$IFn$_invoke$arity$1 ? fexpr__84504.cljs$core$IFn$_invoke$arity$1(G__84503) : fexpr__84504.call(null,G__84503));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__84508 = new cljs.core.Symbol(null,"??fs2","??fs2",1129791247,null);
return (fexpr__84508.cljs$core$IFn$_invoke$arity$1 ? fexpr__84508.cljs$core$IFn$_invoke$arity$1(G__84503) : fexpr__84508.call(null,G__84503));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__84509 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84509.cljs$core$IFn$_invoke$arity$1 ? fexpr__84509.cljs$core$IFn$_invoke$arity$1(G__84503) : fexpr__84509.call(null,G__84503));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__84513 = new cljs.core.Symbol(null,"?y1","?y1",1237029156,null);
return (fexpr__84513.cljs$core$IFn$_invoke$arity$1 ? fexpr__84513.cljs$core$IFn$_invoke$arity$1(G__84503) : fexpr__84513.call(null,G__84503));
})(),(function (){var fexpr__84514 = new cljs.core.Symbol(null,"?y2","?y2",731715171,null);
return (fexpr__84514.cljs$core$IFn$_invoke$arity$1 ? fexpr__84514.cljs$core$IFn$_invoke$arity$1(G__84503) : fexpr__84514.call(null,G__84503));
})()], null))], null))], null),(function (){var fexpr__84515 = new cljs.core.Symbol(null,"??fs3","??fs3",1216174751,null);
return (fexpr__84515.cljs$core$IFn$_invoke$arity$1 ? fexpr__84515.cljs$core$IFn$_invoke$arity$1(G__84503) : fexpr__84515.call(null,G__84503));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0))], 0));
});
sicmutils.simplify.rules.simplify_square_roots = (function sicmutils$simplify$rules$simplify_square_roots(simplify){
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.even_integer_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__84527){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__84528 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84528.cljs$core$IFn$_invoke$arity$1 ? fexpr__84528.cljs$core$IFn$_invoke$arity$1(G__84527) : fexpr__84528.call(null,G__84527));
})(),(function (p1__84522_SHARP_){
return sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((function (){var G__84529 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__84522_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__84522_SHARP_.cljs$core$IFn$_invoke$arity$1(G__84529) : p1__84522_SHARP_.call(null,G__84529));
})(),(2));
})(G__84527)], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.guard((function (_){
return sicmutils.simplify.rules._STAR_sqrt_expt_simplify_QMARK__STAR_;
}),pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.even_integer_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(function (p__84530){
var map__84531 = p__84530;
var map__84531__$1 = cljs.core.__destructure_map(map__84531);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84531__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84531__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var half_n = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(n,(2));
if(cljs.core.truth_(sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),xs,n], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),xs,half_n], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})(),new cljs.core.Symbol(null,"simsqrt1","simsqrt1",-1069513157,null)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?new-n","?new-n",-1095502685,null),half_n], null);
} else {
return null;
}
})),(function (G__84534){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__84535 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84535.cljs$core$IFn$_invoke$arity$1 ? fexpr__84535.cljs$core$IFn$_invoke$arity$1(G__84534) : fexpr__84535.call(null,G__84534));
})(),(function (){var fexpr__84536 = new cljs.core.Symbol(null,"?new-n","?new-n",-1095502685,null);
return (fexpr__84536.cljs$core$IFn$_invoke$arity$1 ? fexpr__84536.cljs$core$IFn$_invoke$arity$1(G__84534) : fexpr__84536.call(null,G__84534));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.odd_positive_integer_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(function (p__84538){
var map__84539 = p__84538;
var map__84539__$1 = cljs.core.__destructure_map(map__84539);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84539__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84539__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var half_dec_n = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(n,(1)),(2));
if(cljs.core.truth_(sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),xs,n], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),xs,half_dec_n], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})(),new cljs.core.Symbol(null,"simsqrt2","simsqrt2",-1794028771,null)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?new-n","?new-n",-1095502685,null),half_dec_n], null);
} else {
return null;
}
})),(function (G__84541){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__84542 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84542.cljs$core$IFn$_invoke$arity$1 ? fexpr__84542.cljs$core$IFn$_invoke$arity$1(G__84541) : fexpr__84542.call(null,G__84541));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__84543 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84543.cljs$core$IFn$_invoke$arity$1 ? fexpr__84543.cljs$core$IFn$_invoke$arity$1(G__84541) : fexpr__84543.call(null,G__84541));
})(),(function (){var fexpr__84544 = new cljs.core.Symbol(null,"?new-n","?new-n",-1095502685,null);
return (fexpr__84544.cljs$core$IFn$_invoke$arity$1 ? fexpr__84544.cljs$core$IFn$_invoke$arity$1(G__84541) : fexpr__84544.call(null,G__84541));
})()], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0)))], 0)),pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.odd_integer_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__84547){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__84548 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84548.cljs$core$IFn$_invoke$arity$1 ? fexpr__84548.cljs$core$IFn$_invoke$arity$1(G__84547) : fexpr__84548.call(null,G__84547));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__84549 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84549.cljs$core$IFn$_invoke$arity$1 ? fexpr__84549.cljs$core$IFn$_invoke$arity$1(G__84547) : fexpr__84549.call(null,G__84547));
})(),(function (p1__84526_SHARP_){
return sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__84550 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__84526_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__84526_SHARP_.cljs$core$IFn$_invoke$arity$1(G__84550) : p1__84526_SHARP_.call(null,G__84550));
})(),(1)),(2));
})(G__84547)], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__84556){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__84557 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84557.cljs$core$IFn$_invoke$arity$1 ? fexpr__84557.cljs$core$IFn$_invoke$arity$1(G__84556) : fexpr__84557.call(null,G__84556));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__84563){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__84566 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84566.cljs$core$IFn$_invoke$arity$1 ? fexpr__84566.cljs$core$IFn$_invoke$arity$1(G__84563) : fexpr__84566.call(null,G__84563));
})()], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__84567){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84570 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__84570.cljs$core$IFn$_invoke$arity$1 ? fexpr__84570.cljs$core$IFn$_invoke$arity$1(G__84567) : fexpr__84570.call(null,G__84567));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__84571 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84571.cljs$core$IFn$_invoke$arity$1 ? fexpr__84571.cljs$core$IFn$_invoke$arity$1(G__84567) : fexpr__84571.call(null,G__84567));
})()], null))], null),(function (){var fexpr__84572 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__84572.cljs$core$IFn$_invoke$arity$1 ? fexpr__84572.cljs$core$IFn$_invoke$arity$1(G__84567) : fexpr__84572.call(null,G__84567));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__84579){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84614 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__84614.cljs$core$IFn$_invoke$arity$1 ? fexpr__84614.cljs$core$IFn$_invoke$arity$1(G__84579) : fexpr__84614.call(null,G__84579));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__84615 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__84615.cljs$core$IFn$_invoke$arity$1 ? fexpr__84615.cljs$core$IFn$_invoke$arity$1(G__84579) : fexpr__84615.call(null,G__84579));
})()], 0))),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__84618 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84618.cljs$core$IFn$_invoke$arity$1 ? fexpr__84618.cljs$core$IFn$_invoke$arity$1(G__84579) : fexpr__84618.call(null,G__84579));
})()], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__84619){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__84624 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84624.cljs$core$IFn$_invoke$arity$1 ? fexpr__84624.cljs$core$IFn$_invoke$arity$1(G__84619) : fexpr__84624.call(null,G__84619));
})()], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84625 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__84625.cljs$core$IFn$_invoke$arity$1 ? fexpr__84625.cljs$core$IFn$_invoke$arity$1(G__84619) : fexpr__84625.call(null,G__84619));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__84629 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__84629.cljs$core$IFn$_invoke$arity$1 ? fexpr__84629.cljs$core$IFn$_invoke$arity$1(G__84619) : fexpr__84629.call(null,G__84619));
})()], 0)))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__84636){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84637 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__84637.cljs$core$IFn$_invoke$arity$1 ? fexpr__84637.cljs$core$IFn$_invoke$arity$1(G__84636) : fexpr__84637.call(null,G__84636));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__84640 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84640.cljs$core$IFn$_invoke$arity$1 ? fexpr__84640.cljs$core$IFn$_invoke$arity$1(G__84636) : fexpr__84640.call(null,G__84636));
})()], null))], null),(function (){var fexpr__84641 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__84641.cljs$core$IFn$_invoke$arity$1 ? fexpr__84641.cljs$core$IFn$_invoke$arity$1(G__84636) : fexpr__84641.call(null,G__84636));
})()], 0)))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??p","??p",1112654910,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??q","??q",253374785,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__84660){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84661 = new cljs.core.Symbol(null,"??p","??p",1112654910,null);
return (fexpr__84661.cljs$core$IFn$_invoke$arity$1 ? fexpr__84661.cljs$core$IFn$_invoke$arity$1(G__84660) : fexpr__84661.call(null,G__84660));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__84662 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84662.cljs$core$IFn$_invoke$arity$1 ? fexpr__84662.cljs$core$IFn$_invoke$arity$1(G__84660) : fexpr__84662.call(null,G__84660));
})()], null))], null),(function (){var fexpr__84663 = new cljs.core.Symbol(null,"??q","??q",253374785,null);
return (fexpr__84663.cljs$core$IFn$_invoke$arity$1 ? fexpr__84663.cljs$core$IFn$_invoke$arity$1(G__84660) : fexpr__84663.call(null,G__84660));
})()], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84664 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__84664.cljs$core$IFn$_invoke$arity$1 ? fexpr__84664.cljs$core$IFn$_invoke$arity$1(G__84660) : fexpr__84664.call(null,G__84660));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__84665 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__84665.cljs$core$IFn$_invoke$arity$1 ? fexpr__84665.cljs$core$IFn$_invoke$arity$1(G__84660) : fexpr__84665.call(null,G__84660));
})()], 0)))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??p","??p",1112654910,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??q","??q",253374785,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__84669){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84670 = new cljs.core.Symbol(null,"??p","??p",1112654910,null);
return (fexpr__84670.cljs$core$IFn$_invoke$arity$1 ? fexpr__84670.cljs$core$IFn$_invoke$arity$1(G__84669) : fexpr__84670.call(null,G__84669));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__84671 = new cljs.core.Symbol(null,"??q","??q",253374785,null);
return (fexpr__84671.cljs$core$IFn$_invoke$arity$1 ? fexpr__84671.cljs$core$IFn$_invoke$arity$1(G__84669) : fexpr__84671.call(null,G__84669));
})()], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84675 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__84675.cljs$core$IFn$_invoke$arity$1 ? fexpr__84675.cljs$core$IFn$_invoke$arity$1(G__84669) : fexpr__84675.call(null,G__84669));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__84679 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84679.cljs$core$IFn$_invoke$arity$1 ? fexpr__84679.cljs$core$IFn$_invoke$arity$1(G__84669) : fexpr__84679.call(null,G__84669));
})()], null))], null),(function (){var fexpr__84683 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__84683.cljs$core$IFn$_invoke$arity$1 ? fexpr__84683.cljs$core$IFn$_invoke$arity$1(G__84669) : fexpr__84683.call(null,G__84669));
})()], 0)))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
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
var G__84701 = arguments.length;
switch (G__84701) {
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
return (function (p__84733){
var map__84734 = p__84733;
var map__84734__$1 = cljs.core.__destructure_map(map__84734);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84734__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84734__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
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
}),pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pred(new cljs.core.Symbol(null,"e1","e1",-732861271,null))),(function (G__84747){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__84752 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84752.cljs$core$IFn$_invoke$arity$1 ? fexpr__84752.cljs$core$IFn$_invoke$arity$1(G__84747) : fexpr__84752.call(null,G__84747));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__84753 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__84753.cljs$core$IFn$_invoke$arity$1 ? fexpr__84753.cljs$core$IFn$_invoke$arity$1(G__84747) : fexpr__84753.call(null,G__84747));
})()], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pred(new cljs.core.Symbol(null,"e2","e2",1288255343,null))),(function (G__84760){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__84764 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84764.cljs$core$IFn$_invoke$arity$1 ? fexpr__84764.cljs$core$IFn$_invoke$arity$1(G__84760) : fexpr__84764.call(null,G__84760));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__84767 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__84767.cljs$core$IFn$_invoke$arity$1 ? fexpr__84767.cljs$core$IFn$_invoke$arity$1(G__84760) : fexpr__84767.call(null,G__84760));
})()], null),(function (){var fexpr__84770 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__84770.cljs$core$IFn$_invoke$arity$1 ? fexpr__84770.cljs$core$IFn$_invoke$arity$1(G__84760) : fexpr__84770.call(null,G__84760));
})()))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pred(new cljs.core.Symbol(null,"e3","e3",980159791,null))),(function (G__84773){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__84774 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84774.cljs$core$IFn$_invoke$arity$1 ? fexpr__84774.cljs$core$IFn$_invoke$arity$1(G__84773) : fexpr__84774.call(null,G__84773));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__84775 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__84775.cljs$core$IFn$_invoke$arity$1 ? fexpr__84775.cljs$core$IFn$_invoke$arity$1(G__84773) : fexpr__84775.call(null,G__84773));
})()], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pred(new cljs.core.Symbol(null,"e4","e4",-714258248,null))),(function (G__84778){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__84781 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84781.cljs$core$IFn$_invoke$arity$1 ? fexpr__84781.cljs$core$IFn$_invoke$arity$1(G__84778) : fexpr__84781.call(null,G__84778));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__84782 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__84782.cljs$core$IFn$_invoke$arity$1 ? fexpr__84782.cljs$core$IFn$_invoke$arity$1(G__84778) : fexpr__84782.call(null,G__84778));
})()], null),(function (){var fexpr__84783 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__84783.cljs$core$IFn$_invoke$arity$1 ? fexpr__84783.cljs$core$IFn$_invoke$arity$1(G__84778) : fexpr__84783.call(null,G__84778));
})()))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0))], 0))));
});
sicmutils.simplify.rules.sqrt_contract = (function sicmutils$simplify$rules$sqrt_contract(simplify){
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null))),(function (p__84790){
var map__84793 = p__84790;
var map__84793__$1 = cljs.core.__destructure_map(map__84793);
var m = map__84793__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84793__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84793__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(xs,ys))){
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.Symbol(null,"c1","c1",-1521904966,null));
if(and__4251__auto__){
var G__84794 = m;
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84795 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__84795.cljs$core$IFn$_invoke$arity$1 ? fexpr__84795.cljs$core$IFn$_invoke$arity$1(G__84794) : fexpr__84795.call(null,G__84794));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs], null),(function (){var fexpr__84796 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__84796.cljs$core$IFn$_invoke$arity$1 ? fexpr__84796.cljs$core$IFn$_invoke$arity$1(G__84794) : fexpr__84796.call(null,G__84794));
})(),(function (){var fexpr__84797 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__84797.cljs$core$IFn$_invoke$arity$1 ? fexpr__84797.cljs$core$IFn$_invoke$arity$1(G__84794) : fexpr__84797.call(null,G__84794));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
} else {
return and__4251__auto__;
}
} else {
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3(xs,ys,new cljs.core.Symbol(null,"c1","c1",-1521904966,null));
if(and__4251__auto__){
var G__84798 = m;
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84799 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__84799.cljs$core$IFn$_invoke$arity$1 ? fexpr__84799.cljs$core$IFn$_invoke$arity$1(G__84798) : fexpr__84799.call(null,G__84798));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),xs,ys], null))], null))], null),(function (){var fexpr__84800 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__84800.cljs$core$IFn$_invoke$arity$1 ? fexpr__84800.cljs$core$IFn$_invoke$arity$1(G__84798) : fexpr__84800.call(null,G__84798));
})(),(function (){var fexpr__84801 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__84801.cljs$core$IFn$_invoke$arity$1 ? fexpr__84801.cljs$core$IFn$_invoke$arity$1(G__84798) : fexpr__84801.call(null,G__84798));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
} else {
return and__4251__auto__;
}
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null))),(function (p__84802){
var map__84803 = p__84802;
var map__84803__$1 = cljs.core.__destructure_map(map__84803);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84803__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84803__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
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
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),xs,ys], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
} else {
return and__4251__auto__;
}
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null))),(function (p__84804){
var map__84805 = p__84804;
var map__84805__$1 = cljs.core.__destructure_map(map__84805);
var m = map__84805__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84805__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84805__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(xs,ys))){
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.Symbol(null,"c3","c3",468715789,null));
if(and__4251__auto__){
var G__84806 = m;
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84807 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__84807.cljs$core$IFn$_invoke$arity$1 ? fexpr__84807.cljs$core$IFn$_invoke$arity$1(G__84806) : fexpr__84807.call(null,G__84806));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__84808 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__84808.cljs$core$IFn$_invoke$arity$1 ? fexpr__84808.cljs$core$IFn$_invoke$arity$1(G__84806) : fexpr__84808.call(null,G__84806));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
} else {
return and__4251__auto__;
}
} else {
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3(xs,ys,new cljs.core.Symbol(null,"c3","c3",468715789,null));
if(and__4251__auto__){
var G__84810 = m;
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84811 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__84811.cljs$core$IFn$_invoke$arity$1 ? fexpr__84811.cljs$core$IFn$_invoke$arity$1(G__84810) : fexpr__84811.call(null,G__84810));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),xs,ys], null))], null))], null),(function (){var fexpr__84812 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__84812.cljs$core$IFn$_invoke$arity$1 ? fexpr__84812.cljs$core$IFn$_invoke$arity$1(G__84810) : fexpr__84812.call(null,G__84810));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
} else {
return and__4251__auto__;
}
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null))),(function (p__84813){
var map__84814 = p__84813;
var map__84814__$1 = cljs.core.__destructure_map(map__84814);
var m = map__84814__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84814__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84814__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(xs,ys))){
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.Symbol(null,"c4","c4",-1626390159,null));
if(and__4251__auto__){
var G__84815 = m;
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84816 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__84816.cljs$core$IFn$_invoke$arity$1 ? fexpr__84816.cljs$core$IFn$_invoke$arity$1(G__84815) : fexpr__84816.call(null,G__84815));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__84817 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__84817.cljs$core$IFn$_invoke$arity$1 ? fexpr__84817.cljs$core$IFn$_invoke$arity$1(G__84815) : fexpr__84817.call(null,G__84815));
})()], 0)))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
} else {
return and__4251__auto__;
}
} else {
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3(xs,ys,new cljs.core.Symbol(null,"c4","c4",-1626390159,null));
if(and__4251__auto__){
var G__84818 = m;
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),xs,ys], null))], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84819 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__84819.cljs$core$IFn$_invoke$arity$1 ? fexpr__84819.cljs$core$IFn$_invoke$arity$1(G__84818) : fexpr__84819.call(null,G__84818));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__84820 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__84820.cljs$core$IFn$_invoke$arity$1 ? fexpr__84820.cljs$core$IFn$_invoke$arity$1(G__84818) : fexpr__84820.call(null,G__84818));
})()], 0)))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
} else {
return and__4251__auto__;
}
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??d","??d",-581862453,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null))),(function (p__84821){
var map__84822 = p__84821;
var map__84822__$1 = cljs.core.__destructure_map(map__84822);
var m = map__84822__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84822__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84822__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
var ys = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(y) : simplify.call(null,y));
if(cljs.core.truth_(sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(xs,ys))){
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.Symbol(null,"c5","c5",1025457982,null));
if(and__4251__auto__){
var G__84823 = m;
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84824 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__84824.cljs$core$IFn$_invoke$arity$1 ? fexpr__84824.cljs$core$IFn$_invoke$arity$1(G__84823) : fexpr__84824.call(null,G__84823));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__84825 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__84825.cljs$core$IFn$_invoke$arity$1 ? fexpr__84825.cljs$core$IFn$_invoke$arity$1(G__84823) : fexpr__84825.call(null,G__84823));
})()], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84826 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__84826.cljs$core$IFn$_invoke$arity$1 ? fexpr__84826.cljs$core$IFn$_invoke$arity$1(G__84823) : fexpr__84826.call(null,G__84823));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__84827 = new cljs.core.Symbol(null,"??d","??d",-581862453,null);
return (fexpr__84827.cljs$core$IFn$_invoke$arity$1 ? fexpr__84827.cljs$core$IFn$_invoke$arity$1(G__84823) : fexpr__84827.call(null,G__84823));
})()], 0)))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
} else {
return and__4251__auto__;
}
} else {
var and__4251__auto__ = sicmutils.simplify.rules.non_negative_factors_BANG_.cljs$core$IFn$_invoke$arity$3(xs,ys,new cljs.core.Symbol(null,"c5","c5",1025457982,null));
if(and__4251__auto__){
var G__84828 = m;
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84829 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__84829.cljs$core$IFn$_invoke$arity$1 ? fexpr__84829.cljs$core$IFn$_invoke$arity$1(G__84828) : fexpr__84829.call(null,G__84828));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),xs,ys], null))], null))], null),(function (){var fexpr__84830 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__84830.cljs$core$IFn$_invoke$arity$1 ? fexpr__84830.cljs$core$IFn$_invoke$arity$1(G__84828) : fexpr__84830.call(null,G__84828));
})()], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84831 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__84831.cljs$core$IFn$_invoke$arity$1 ? fexpr__84831.cljs$core$IFn$_invoke$arity$1(G__84828) : fexpr__84831.call(null,G__84828));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__84832 = new cljs.core.Symbol(null,"??d","??d",-581862453,null);
return (fexpr__84832.cljs$core$IFn$_invoke$arity$1 ? fexpr__84832.cljs$core$IFn$_invoke$arity$1(G__84828) : fexpr__84832.call(null,G__84828));
})()], 0)))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
} else {
return and__4251__auto__;
}
}
}))], 0))], 0));
});
sicmutils.simplify.rules.specfun__GT_logexp = (function (){var two_i = sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$2(0.0,2.0);
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84834){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__84835 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84835.cljs$core$IFn$_invoke$arity$1 ? fexpr__84835.cljs$core$IFn$_invoke$arity$1(G__84834) : fexpr__84835.call(null,G__84834));
})()], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84836){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__84837 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__84837.cljs$core$IFn$_invoke$arity$1 ? fexpr__84837.cljs$core$IFn$_invoke$arity$1(G__84836) : fexpr__84837.call(null,G__84836));
})()], null))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__84838 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__84838.cljs$core$IFn$_invoke$arity$1 ? fexpr__84838.cljs$core$IFn$_invoke$arity$1(G__84836) : fexpr__84838.call(null,G__84836));
})()], null))], null))], null))], null)),two_i], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84839){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__84840 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__84840.cljs$core$IFn$_invoke$arity$1 ? fexpr__84840.cljs$core$IFn$_invoke$arity$1(G__84839) : fexpr__84840.call(null,G__84839));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__84841 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__84841.cljs$core$IFn$_invoke$arity$1 ? fexpr__84841.cljs$core$IFn$_invoke$arity$1(G__84839) : fexpr__84841.call(null,G__84839));
})(),(2)], null))], null))], null))], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84842){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__84843 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__84843.cljs$core$IFn$_invoke$arity$1 ? fexpr__84843.cljs$core$IFn$_invoke$arity$1(G__84842) : fexpr__84843.call(null,G__84842));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__84844 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__84844.cljs$core$IFn$_invoke$arity$1 ? fexpr__84844.cljs$core$IFn$_invoke$arity$1(G__84842) : fexpr__84844.call(null,G__84842));
})(),(2)], null))], null))], null))], null))], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?u","?u",749886731,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84845){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__84846 = new cljs.core.Symbol(null,"?u","?u",749886731,null);
return (fexpr__84846.cljs$core$IFn$_invoke$arity$1 ? fexpr__84846.cljs$core$IFn$_invoke$arity$1(G__84845) : fexpr__84846.call(null,G__84845));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-1),(function (){var fexpr__84847 = new cljs.core.Symbol(null,"?u","?u",749886731,null);
return (fexpr__84847.cljs$core$IFn$_invoke$arity$1 ? fexpr__84847.cljs$core$IFn$_invoke$arity$1(G__84845) : fexpr__84847.call(null,G__84845));
})()], null))], null))], null)),(2)], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?u","?u",749886731,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84848){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__84849 = new cljs.core.Symbol(null,"?u","?u",749886731,null);
return (fexpr__84849.cljs$core$IFn$_invoke$arity$1 ? fexpr__84849.cljs$core$IFn$_invoke$arity$1(G__84848) : fexpr__84849.call(null,G__84848));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-1),(function (){var fexpr__84850 = new cljs.core.Symbol(null,"?u","?u",749886731,null);
return (fexpr__84850.cljs$core$IFn$_invoke$arity$1 ? fexpr__84850.cljs$core$IFn$_invoke$arity$1(G__84848) : fexpr__84850.call(null,G__84848));
})()], null))], null))], null)),(2)], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,sicmutils.simplify.rules.not_integral_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__84851){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__84852 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__84852.cljs$core$IFn$_invoke$arity$1 ? fexpr__84852.cljs$core$IFn$_invoke$arity$1(G__84851) : fexpr__84852.call(null,G__84851));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__84853 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84853.cljs$core$IFn$_invoke$arity$1 ? fexpr__84853.cljs$core$IFn$_invoke$arity$1(G__84851) : fexpr__84853.call(null,G__84851));
})()], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0))], 0));
})();
sicmutils.simplify.rules.logexp__GT_specfun = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84854){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__84855 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84855.cljs$core$IFn$_invoke$arity$1 ? fexpr__84855.cljs$core$IFn$_invoke$arity$1(G__84854) : fexpr__84855.call(null,G__84854));
})(),(-1)], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84856){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__84857 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84857.cljs$core$IFn$_invoke$arity$1 ? fexpr__84857.cljs$core$IFn$_invoke$arity$1(G__84856) : fexpr__84857.call(null,G__84856));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84858){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__84859 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84859.cljs$core$IFn$_invoke$arity$1 ? fexpr__84859.cljs$core$IFn$_invoke$arity$1(G__84858) : fexpr__84859.call(null,G__84858));
})()], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(3),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84860){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__84861 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84861.cljs$core$IFn$_invoke$arity$1 ? fexpr__84861.cljs$core$IFn$_invoke$arity$1(G__84860) : fexpr__84861.call(null,G__84860));
})()], null)),(3)], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(-3),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84862){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),(function (){var fexpr__84863 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84863.cljs$core$IFn$_invoke$arity$1 ? fexpr__84863.cljs$core$IFn$_invoke$arity$1(G__84862) : fexpr__84863.call(null,G__84862));
})()], null)),(-3)], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84864){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__84865 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84865.cljs$core$IFn$_invoke$arity$1 ? fexpr__84865.cljs$core$IFn$_invoke$arity$1(G__84864) : fexpr__84865.call(null,G__84864));
})(),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84866 = new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null);
return (fexpr__84866.cljs$core$IFn$_invoke$arity$1 ? fexpr__84866.cljs$core$IFn$_invoke$arity$1(G__84864) : fexpr__84866.call(null,G__84864));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__84868 = new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null);
return (fexpr__84868.cljs$core$IFn$_invoke$arity$1 ? fexpr__84868.cljs$core$IFn$_invoke$arity$1(G__84864) : fexpr__84868.call(null,G__84864));
})()], 0)))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.log_contract = (function sicmutils$simplify$rules$log_contract(simplify){
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x3","??x3",-411077265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x4","?x4",94899597,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x5","??x5",1822045235,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__84869){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__84871 = new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null);
return (fexpr__84871.cljs$core$IFn$_invoke$arity$1 ? fexpr__84871.cljs$core$IFn$_invoke$arity$1(G__84869) : fexpr__84871.call(null,G__84869));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__84872 = new cljs.core.Symbol(null,"??x3","??x3",-411077265,null);
return (fexpr__84872.cljs$core$IFn$_invoke$arity$1 ? fexpr__84872.cljs$core$IFn$_invoke$arity$1(G__84869) : fexpr__84872.call(null,G__84869));
})(),(function (){var fexpr__84873 = new cljs.core.Symbol(null,"??x5","??x5",1822045235,null);
return (fexpr__84873.cljs$core$IFn$_invoke$arity$1 ? fexpr__84873.cljs$core$IFn$_invoke$arity$1(G__84869) : fexpr__84873.call(null,G__84869));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__84876 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__84876.cljs$core$IFn$_invoke$arity$1 ? fexpr__84876.cljs$core$IFn$_invoke$arity$1(G__84869) : fexpr__84876.call(null,G__84869));
})(),(function (){var fexpr__84878 = new cljs.core.Symbol(null,"?x4","?x4",94899597,null);
return (fexpr__84878.cljs$core$IFn$_invoke$arity$1 ? fexpr__84878.cljs$core$IFn$_invoke$arity$1(G__84869) : fexpr__84878.call(null,G__84869));
})()], null))], null))], null)], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__84882){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__84883 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84883.cljs$core$IFn$_invoke$arity$1 ? fexpr__84883.cljs$core$IFn$_invoke$arity$1(G__84882) : fexpr__84883.call(null,G__84882));
})(),(function (){var fexpr__84884 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__84884.cljs$core$IFn$_invoke$arity$1 ? fexpr__84884.cljs$core$IFn$_invoke$arity$1(G__84882) : fexpr__84884.call(null,G__84882));
})()], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f2","??f2",745277317,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x2","??x2",169445330,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f3","??f3",-1809203400,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f4","??f4",1817370441,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x3","??x3",-411077265,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(function (m){
var s1 = (function (){var G__84886 = (function (){var G__84887 = m;
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84889 = new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null);
return (fexpr__84889.cljs$core$IFn$_invoke$arity$1 ? fexpr__84889.cljs$core$IFn$_invoke$arity$1(G__84887) : fexpr__84889.call(null,G__84887));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__84890 = new cljs.core.Symbol(null,"??f2","??f2",745277317,null);
return (fexpr__84890.cljs$core$IFn$_invoke$arity$1 ? fexpr__84890.cljs$core$IFn$_invoke$arity$1(G__84887) : fexpr__84890.call(null,G__84887));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__84886) : simplify.call(null,G__84886));
})();
var s2 = (function (){var G__84891 = (function (){var G__84892 = m;
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84893 = new cljs.core.Symbol(null,"??f3","??f3",-1809203400,null);
return (fexpr__84893.cljs$core$IFn$_invoke$arity$1 ? fexpr__84893.cljs$core$IFn$_invoke$arity$1(G__84892) : fexpr__84893.call(null,G__84892));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__84894 = new cljs.core.Symbol(null,"??f4","??f4",1817370441,null);
return (fexpr__84894.cljs$core$IFn$_invoke$arity$1 ? fexpr__84894.cljs$core$IFn$_invoke$arity$1(G__84892) : fexpr__84894.call(null,G__84892));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__84891) : simplify.call(null,G__84891));
})();
if(sicmutils.value.exact_zero_QMARK_((function (){var G__84898 = (new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,s1,(new cljs.core.List(null,s2,null,(1),null)),(2),null)),(3),null));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__84898) : simplify.call(null,G__84898));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"??s1","??s1",753911801,null),s1], null);
} else {
return null;
}
})),(function (G__84900){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__84901 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84901.cljs$core$IFn$_invoke$arity$1 ? fexpr__84901.cljs$core$IFn$_invoke$arity$1(G__84900) : fexpr__84901.call(null,G__84900));
})(),(function (){var fexpr__84902 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__84902.cljs$core$IFn$_invoke$arity$1 ? fexpr__84902.cljs$core$IFn$_invoke$arity$1(G__84900) : fexpr__84902.call(null,G__84900));
})()], null))], null))], null),(function (){var fexpr__84903 = new cljs.core.Symbol(null,"??s1","??s1",753911801,null);
return (fexpr__84903.cljs$core$IFn$_invoke$arity$1 ? fexpr__84903.cljs$core$IFn$_invoke$arity$1(G__84900) : fexpr__84903.call(null,G__84900));
})()))], null),(function (){var fexpr__84904 = new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null);
return (fexpr__84904.cljs$core$IFn$_invoke$arity$1 ? fexpr__84904.cljs$core$IFn$_invoke$arity$1(G__84900) : fexpr__84904.call(null,G__84900));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__84905 = new cljs.core.Symbol(null,"??x2","??x2",169445330,null);
return (fexpr__84905.cljs$core$IFn$_invoke$arity$1 ? fexpr__84905.cljs$core$IFn$_invoke$arity$1(G__84900) : fexpr__84905.call(null,G__84900));
})(),(function (){var fexpr__84906 = new cljs.core.Symbol(null,"??x3","??x3",-411077265,null);
return (fexpr__84906.cljs$core$IFn$_invoke$arity$1 ? fexpr__84906.cljs$core$IFn$_invoke$arity$1(G__84900) : fexpr__84906.call(null,G__84900));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0))], 0));
});
sicmutils.simplify.rules.log_expand = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x1","?x1",697080023,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84911){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__84912 = new cljs.core.Symbol(null,"?x1","?x1",697080023,null);
return (fexpr__84912.cljs$core$IFn$_invoke$arity$1 ? fexpr__84912.cljs$core$IFn$_invoke$arity$1(G__84911) : fexpr__84912.call(null,G__84911));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__84913 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__84913.cljs$core$IFn$_invoke$arity$1 ? fexpr__84913.cljs$core$IFn$_invoke$arity$1(G__84911) : fexpr__84913.call(null,G__84911));
})()], null),(function (){var fexpr__84917 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__84917.cljs$core$IFn$_invoke$arity$1 ? fexpr__84917.cljs$core$IFn$_invoke$arity$1(G__84911) : fexpr__84917.call(null,G__84911));
})()))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x1","?x1",697080023,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84918){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__84919 = new cljs.core.Symbol(null,"?x1","?x1",697080023,null);
return (fexpr__84919.cljs$core$IFn$_invoke$arity$1 ? fexpr__84919.cljs$core$IFn$_invoke$arity$1(G__84918) : fexpr__84919.call(null,G__84918));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__84920 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__84920.cljs$core$IFn$_invoke$arity$1 ? fexpr__84920.cljs$core$IFn$_invoke$arity$1(G__84918) : fexpr__84920.call(null,G__84918));
})()], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?e","?e",-1194391683,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84921){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__84922 = new cljs.core.Symbol(null,"?e","?e",-1194391683,null);
return (fexpr__84922.cljs$core$IFn$_invoke$arity$1 ? fexpr__84922.cljs$core$IFn$_invoke$arity$1(G__84921) : fexpr__84922.call(null,G__84921));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),(function (){var fexpr__84923 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84923.cljs$core$IFn$_invoke$arity$1 ? fexpr__84923.cljs$core$IFn$_invoke$arity$1(G__84921) : fexpr__84923.call(null,G__84921));
})()], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.log_extra = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.integral_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"log","log",45015523,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f2","??f2",745277317,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),pattern.rule._EQ__GT_),(function (G__84925){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__84927 = new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null);
return (fexpr__84927.cljs$core$IFn$_invoke$arity$1 ? fexpr__84927.cljs$core$IFn$_invoke$arity$1(G__84925) : fexpr__84927.call(null,G__84925));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"log","log",45015523,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__84928 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__84928.cljs$core$IFn$_invoke$arity$1 ? fexpr__84928.cljs$core$IFn$_invoke$arity$1(G__84925) : fexpr__84928.call(null,G__84925));
})(),(function (){var fexpr__84929 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__84929.cljs$core$IFn$_invoke$arity$1 ? fexpr__84929.cljs$core$IFn$_invoke$arity$1(G__84925) : fexpr__84929.call(null,G__84925));
})()], null))], null))], null),(function (){var fexpr__84930 = new cljs.core.Symbol(null,"??f2","??f2",745277317,null);
return (fexpr__84930.cljs$core$IFn$_invoke$arity$1 ? fexpr__84930.cljs$core$IFn$_invoke$arity$1(G__84925) : fexpr__84930.call(null,G__84925));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.canonicalize_partials = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84931){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__84939 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__84939.cljs$core$IFn$_invoke$arity$1 ? fexpr__84939.cljs$core$IFn$_invoke$arity$1(G__84931) : fexpr__84939.call(null,G__84931));
})())),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__84940 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__84940.cljs$core$IFn$_invoke$arity$1 ? fexpr__84940.cljs$core$IFn$_invoke$arity$1(G__84931) : fexpr__84940.call(null,G__84931));
})()))], null)),(function (){var fexpr__84941 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__84941.cljs$core$IFn$_invoke$arity$1 ? fexpr__84941.cljs$core$IFn$_invoke$arity$1(G__84931) : fexpr__84941.call(null,G__84931));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??more","??more",-1836200365,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84942){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__84943 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__84943.cljs$core$IFn$_invoke$arity$1 ? fexpr__84943.cljs$core$IFn$_invoke$arity$1(G__84942) : fexpr__84943.call(null,G__84942));
})())),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__84944 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__84944.cljs$core$IFn$_invoke$arity$1 ? fexpr__84944.cljs$core$IFn$_invoke$arity$1(G__84942) : fexpr__84944.call(null,G__84942));
})()))], null),(function (){var fexpr__84945 = new cljs.core.Symbol(null,"??more","??more",-1836200365,null);
return (fexpr__84945.cljs$core$IFn$_invoke$arity$1 ? fexpr__84945.cljs$core$IFn$_invoke$arity$1(G__84942) : fexpr__84945.call(null,G__84942));
})())),(function (){var fexpr__84946 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__84946.cljs$core$IFn$_invoke$arity$1 ? fexpr__84946.cljs$core$IFn$_invoke$arity$1(G__84942) : fexpr__84946.call(null,G__84942));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84947){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__84948 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__84948.cljs$core$IFn$_invoke$arity$1 ? fexpr__84948.cljs$core$IFn$_invoke$arity$1(G__84947) : fexpr__84948.call(null,G__84947));
})())),(function (){var fexpr__84949 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__84949.cljs$core$IFn$_invoke$arity$1 ? fexpr__84949.cljs$core$IFn$_invoke$arity$1(G__84947) : fexpr__84949.call(null,G__84947));
})()], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__84950 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__84950.cljs$core$IFn$_invoke$arity$1 ? fexpr__84950.cljs$core$IFn$_invoke$arity$1(G__84947) : fexpr__84950.call(null,G__84947));
})()))], null)),(function (){var fexpr__84951 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__84951.cljs$core$IFn$_invoke$arity$1 ? fexpr__84951.cljs$core$IFn$_invoke$arity$1(G__84947) : fexpr__84951.call(null,G__84947));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84952){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__84953 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__84953.cljs$core$IFn$_invoke$arity$1 ? fexpr__84953.cljs$core$IFn$_invoke$arity$1(G__84952) : fexpr__84953.call(null,G__84952));
})())),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__84954 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__84954.cljs$core$IFn$_invoke$arity$1 ? fexpr__84954.cljs$core$IFn$_invoke$arity$1(G__84952) : fexpr__84954.call(null,G__84952));
})())),(function (){var fexpr__84959 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__84959.cljs$core$IFn$_invoke$arity$1 ? fexpr__84959.cljs$core$IFn$_invoke$arity$1(G__84952) : fexpr__84959.call(null,G__84952));
})()], null))], null)),(function (){var fexpr__84962 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__84962.cljs$core$IFn$_invoke$arity$1 ? fexpr__84962.cljs$core$IFn$_invoke$arity$1(G__84952) : fexpr__84962.call(null,G__84952));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84971){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__84972 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__84972.cljs$core$IFn$_invoke$arity$1 ? fexpr__84972.cljs$core$IFn$_invoke$arity$1(G__84971) : fexpr__84972.call(null,G__84971));
})())),(function (){var fexpr__84973 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__84973.cljs$core$IFn$_invoke$arity$1 ? fexpr__84973.cljs$core$IFn$_invoke$arity$1(G__84971) : fexpr__84973.call(null,G__84971));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__84974 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__84974.cljs$core$IFn$_invoke$arity$1 ? fexpr__84974.cljs$core$IFn$_invoke$arity$1(G__84971) : fexpr__84974.call(null,G__84971));
})())),(function (){var fexpr__84975 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__84975.cljs$core$IFn$_invoke$arity$1 ? fexpr__84975.cljs$core$IFn$_invoke$arity$1(G__84971) : fexpr__84975.call(null,G__84971));
})()], null))], null)),(function (){var fexpr__84976 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__84976.cljs$core$IFn$_invoke$arity$1 ? fexpr__84976.cljs$core$IFn$_invoke$arity$1(G__84971) : fexpr__84976.call(null,G__84971));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??more","??more",-1836200365,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84981){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__84984 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__84984.cljs$core$IFn$_invoke$arity$1 ? fexpr__84984.cljs$core$IFn$_invoke$arity$1(G__84981) : fexpr__84984.call(null,G__84981));
})())),(function (){var fexpr__84985 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__84985.cljs$core$IFn$_invoke$arity$1 ? fexpr__84985.cljs$core$IFn$_invoke$arity$1(G__84981) : fexpr__84985.call(null,G__84981));
})()], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__84988 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__84988.cljs$core$IFn$_invoke$arity$1 ? fexpr__84988.cljs$core$IFn$_invoke$arity$1(G__84981) : fexpr__84988.call(null,G__84981));
})()))], null),(function (){var fexpr__84989 = new cljs.core.Symbol(null,"??more","??more",-1836200365,null);
return (fexpr__84989.cljs$core$IFn$_invoke$arity$1 ? fexpr__84989.cljs$core$IFn$_invoke$arity$1(G__84981) : fexpr__84989.call(null,G__84981));
})())),(function (){var fexpr__84990 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__84990.cljs$core$IFn$_invoke$arity$1 ? fexpr__84990.cljs$core$IFn$_invoke$arity$1(G__84981) : fexpr__84990.call(null,G__84981));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??more","??more",-1836200365,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__84993){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__84996 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__84996.cljs$core$IFn$_invoke$arity$1 ? fexpr__84996.cljs$core$IFn$_invoke$arity$1(G__84993) : fexpr__84996.call(null,G__84993));
})())),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__85001 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__85001.cljs$core$IFn$_invoke$arity$1 ? fexpr__85001.cljs$core$IFn$_invoke$arity$1(G__84993) : fexpr__85001.call(null,G__84993));
})())),(function (){var fexpr__85010 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__85010.cljs$core$IFn$_invoke$arity$1 ? fexpr__85010.cljs$core$IFn$_invoke$arity$1(G__84993) : fexpr__85010.call(null,G__84993));
})()], null))], null),(function (){var fexpr__85015 = new cljs.core.Symbol(null,"??more","??more",-1836200365,null);
return (fexpr__85015.cljs$core$IFn$_invoke$arity$1 ? fexpr__85015.cljs$core$IFn$_invoke$arity$1(G__84993) : fexpr__85015.call(null,G__84993));
})())),(function (){var fexpr__85018 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__85018.cljs$core$IFn$_invoke$arity$1 ? fexpr__85018.cljs$core$IFn$_invoke$arity$1(G__84993) : fexpr__85018.call(null,G__84993));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??more","??more",-1836200365,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85025){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__85028 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__85028.cljs$core$IFn$_invoke$arity$1 ? fexpr__85028.cljs$core$IFn$_invoke$arity$1(G__85025) : fexpr__85028.call(null,G__85025));
})())),(function (){var fexpr__85029 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__85029.cljs$core$IFn$_invoke$arity$1 ? fexpr__85029.cljs$core$IFn$_invoke$arity$1(G__85025) : fexpr__85029.call(null,G__85025));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__85030 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__85030.cljs$core$IFn$_invoke$arity$1 ? fexpr__85030.cljs$core$IFn$_invoke$arity$1(G__85025) : fexpr__85030.call(null,G__85025));
})())),(function (){var fexpr__85033 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__85033.cljs$core$IFn$_invoke$arity$1 ? fexpr__85033.cljs$core$IFn$_invoke$arity$1(G__85025) : fexpr__85033.call(null,G__85025));
})()], null))], null),(function (){var fexpr__85034 = new cljs.core.Symbol(null,"??more","??more",-1836200365,null);
return (fexpr__85034.cljs$core$IFn$_invoke$arity$1 ? fexpr__85034.cljs$core$IFn$_invoke$arity$1(G__85025) : fexpr__85034.call(null,G__85025));
})())),(function (){var fexpr__85035 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__85035.cljs$core$IFn$_invoke$arity$1 ? fexpr__85035.cljs$core$IFn$_invoke$arity$1(G__85025) : fexpr__85035.call(null,G__85025));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0)),pattern.rule.guard((function (_){
return sicmutils.simplify.rules._STAR_commute_partials_QMARK__STAR_;
}),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??i","??i",-474049037,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??j","??j",1098328567,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??zs","??zs",1863806627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??args","??args",-2100991912,null),null,(1),null)),(2),null)),(function (p__85040){
var map__85041 = p__85040;
var map__85041__$1 = cljs.core.__destructure_map(map__85041);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85041__$1,new cljs.core.Symbol(null,"??i","??i",-474049037,null));
var j = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85041__$1,new cljs.core.Symbol(null,"??j","??j",1098328567,null));
return (cljs.core.compare(cljs.core.vec(i),cljs.core.vec(j)) > (0));
})),(function (G__85042){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__85043 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__85043.cljs$core$IFn$_invoke$arity$1 ? fexpr__85043.cljs$core$IFn$_invoke$arity$1(G__85042) : fexpr__85043.call(null,G__85042));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__85044 = new cljs.core.Symbol(null,"??j","??j",1098328567,null);
return (fexpr__85044.cljs$core$IFn$_invoke$arity$1 ? fexpr__85044.cljs$core$IFn$_invoke$arity$1(G__85042) : fexpr__85044.call(null,G__85042));
})()))], null),(function (){var fexpr__85045 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__85045.cljs$core$IFn$_invoke$arity$1 ? fexpr__85045.cljs$core$IFn$_invoke$arity$1(G__85042) : fexpr__85045.call(null,G__85042));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"partial","partial",1881673272,null)], null),(function (){var fexpr__85046 = new cljs.core.Symbol(null,"??i","??i",-474049037,null);
return (fexpr__85046.cljs$core$IFn$_invoke$arity$1 ? fexpr__85046.cljs$core$IFn$_invoke$arity$1(G__85042) : fexpr__85046.call(null,G__85042));
})()))], null),(function (){var fexpr__85047 = new cljs.core.Symbol(null,"??zs","??zs",1863806627,null);
return (fexpr__85047.cljs$core$IFn$_invoke$arity$1 ? fexpr__85047.cljs$core$IFn$_invoke$arity$1(G__85042) : fexpr__85047.call(null,G__85042));
})()], 0))),(function (){var fexpr__85048 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__85048.cljs$core$IFn$_invoke$arity$1 ? fexpr__85048.cljs$core$IFn$_invoke$arity$1(G__85042) : fexpr__85048.call(null,G__85042));
})()], null))], null),(function (){var fexpr__85049 = new cljs.core.Symbol(null,"??args","??args",-2100991912,null);
return (fexpr__85049.cljs$core$IFn$_invoke$arity$1 ? fexpr__85049.cljs$core$IFn$_invoke$arity$1(G__85042) : fexpr__85049.call(null,G__85042));
})()));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})))], 0));
sicmutils.simplify.rules.trig__GT_sincos = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85050){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__85051 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85051.cljs$core$IFn$_invoke$arity$1 ? fexpr__85051.cljs$core$IFn$_invoke$arity$1(G__85050) : fexpr__85051.call(null,G__85050));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__85052 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85052.cljs$core$IFn$_invoke$arity$1 ? fexpr__85052.cljs$core$IFn$_invoke$arity$1(G__85050) : fexpr__85052.call(null,G__85050));
})()], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cot","cot",-1635649012,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85053){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__85054 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85054.cljs$core$IFn$_invoke$arity$1 ? fexpr__85054.cljs$core$IFn$_invoke$arity$1(G__85053) : fexpr__85054.call(null,G__85053));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__85055 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85055.cljs$core$IFn$_invoke$arity$1 ? fexpr__85055.cljs$core$IFn$_invoke$arity$1(G__85053) : fexpr__85055.call(null,G__85053));
})()], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sec","sec",60154974,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85056){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__85057 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85057.cljs$core$IFn$_invoke$arity$1 ? fexpr__85057.cljs$core$IFn$_invoke$arity$1(G__85056) : fexpr__85057.call(null,G__85056));
})()], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"csc","csc",-427853492,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85058){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__85060 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85060.cljs$core$IFn$_invoke$arity$1 ? fexpr__85060.cljs$core$IFn$_invoke$arity$1(G__85058) : fexpr__85060.call(null,G__85058));
})()], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85061){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(function (){var fexpr__85062 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85062.cljs$core$IFn$_invoke$arity$1 ? fexpr__85062.cljs$core$IFn$_invoke$arity$1(G__85061) : fexpr__85062.call(null,G__85061));
})(),(function (){var fexpr__85063 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85063.cljs$core$IFn$_invoke$arity$1 ? fexpr__85063.cljs$core$IFn$_invoke$arity$1(G__85061) : fexpr__85063.call(null,G__85061));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85067){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(function (){var fexpr__85068 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85068.cljs$core$IFn$_invoke$arity$1 ? fexpr__85068.cljs$core$IFn$_invoke$arity$1(G__85067) : fexpr__85068.call(null,G__85067));
})(),(1)], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.sincos__GT_trig = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__85069){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(function (){var fexpr__85070 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85070.cljs$core$IFn$_invoke$arity$1 ? fexpr__85070.cljs$core$IFn$_invoke$arity$1(G__85069) : fexpr__85070.call(null,G__85069));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__85071){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__85110 = new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null);
return (fexpr__85110.cljs$core$IFn$_invoke$arity$1 ? fexpr__85110.cljs$core$IFn$_invoke$arity$1(G__85071) : fexpr__85110.call(null,G__85071));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(function (){var fexpr__85115 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85115.cljs$core$IFn$_invoke$arity$1 ? fexpr__85115.cljs$core$IFn$_invoke$arity$1(G__85071) : fexpr__85115.call(null,G__85071));
})()], null))], null),(function (){var fexpr__85116 = new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null);
return (fexpr__85116.cljs$core$IFn$_invoke$arity$1 ? fexpr__85116.cljs$core$IFn$_invoke$arity$1(G__85071) : fexpr__85116.call(null,G__85071));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??d1","??d1",1286203826,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??d2","??d2",525254907,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__85117){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(function (){var fexpr__85118 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85118.cljs$core$IFn$_invoke$arity$1 ? fexpr__85118.cljs$core$IFn$_invoke$arity$1(G__85117) : fexpr__85118.call(null,G__85117));
})()], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__85119 = new cljs.core.Symbol(null,"??d1","??d1",1286203826,null);
return (fexpr__85119.cljs$core$IFn$_invoke$arity$1 ? fexpr__85119.cljs$core$IFn$_invoke$arity$1(G__85117) : fexpr__85119.call(null,G__85117));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85120 = new cljs.core.Symbol(null,"??d2","??d2",525254907,null);
return (fexpr__85120.cljs$core$IFn$_invoke$arity$1 ? fexpr__85120.cljs$core$IFn$_invoke$arity$1(G__85117) : fexpr__85120.call(null,G__85117));
})()], 0)))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??d1","??d1",1286203826,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??d2","??d2",525254907,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__85121){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__85122 = new cljs.core.Symbol(null,"??n1","??n1",-1325838299,null);
return (fexpr__85122.cljs$core$IFn$_invoke$arity$1 ? fexpr__85122.cljs$core$IFn$_invoke$arity$1(G__85121) : fexpr__85122.call(null,G__85121));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(function (){var fexpr__85123 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85123.cljs$core$IFn$_invoke$arity$1 ? fexpr__85123.cljs$core$IFn$_invoke$arity$1(G__85121) : fexpr__85123.call(null,G__85121));
})()], null))], null),(function (){var fexpr__85124 = new cljs.core.Symbol(null,"??n2","??n2",-1403574689,null);
return (fexpr__85124.cljs$core$IFn$_invoke$arity$1 ? fexpr__85124.cljs$core$IFn$_invoke$arity$1(G__85121) : fexpr__85124.call(null,G__85121));
})()], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__85125 = new cljs.core.Symbol(null,"??d1","??d1",1286203826,null);
return (fexpr__85125.cljs$core$IFn$_invoke$arity$1 ? fexpr__85125.cljs$core$IFn$_invoke$arity$1(G__85121) : fexpr__85125.call(null,G__85121));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85126 = new cljs.core.Symbol(null,"??d2","??d2",525254907,null);
return (fexpr__85126.cljs$core$IFn$_invoke$arity$1 ? fexpr__85126.cljs$core$IFn$_invoke$arity$1(G__85121) : fexpr__85126.call(null,G__85121));
})()], 0)))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.triginv = (function sicmutils$simplify$rules$triginv(simplify){
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var sym_COLON_atan = sicmutils.numsymb.symbolic_operator(new cljs.core.Symbol(null,"atan","atan",-1026550135,null));
return pattern.rule.guard((function (_){
return sicmutils.simplify.rules._STAR_aggressive_atan_simplify_QMARK__STAR_;
}),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(3),null))),(function (p__85127){
var map__85128 = p__85127;
var map__85128__$1 = cljs.core.__destructure_map(map__85128);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85128__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85128__$1,new cljs.core.Symbol(null,"?y","?y",-1454470631,null));
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
var s = (function (){var G__85129 = (new cljs.core.List(null,new cljs.core.Symbol(null,"gcd","gcd",1659909537,null),(new cljs.core.List(null,ys,(new cljs.core.List(null,xs,null,(1),null)),(2),null)),(3),null));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__85129) : simplify.call(null,G__85129));
})();
if(sicmutils.value.one_QMARK_(s)){
return null;
} else {
var and__4251__auto__ = sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"positive?","positive?",1455224686,null),(new cljs.core.List(null,s,null,(1),null)),(2),null)),new cljs.core.Symbol(null,"aggressive-atan-2","aggressive-atan-2",-628426094,null));
if(cljs.core.truth_(and__4251__auto__)){
var yv = (function (){var G__85130 = (new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,ys,(new cljs.core.List(null,s,null,(1),null)),(2),null)),(3),null));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__85130) : simplify.call(null,G__85130));
})();
var xv = (function (){var G__85131 = (new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,xs,(new cljs.core.List(null,s,null,(1),null)),(2),null)),(3),null));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__85131) : simplify.call(null,G__85131));
})();
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),yv,xv], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
} else {
return and__4251__auto__;
}
}
}
}
})));
})(),pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85132){
var r__84009__auto__ = (function (){var fexpr__85133 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85133.cljs$core$IFn$_invoke$arity$1 ? fexpr__85133.cljs$core$IFn$_invoke$arity$1(G__85132) : fexpr__85133.call(null,G__85132));
})();
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85134){
var r__84009__auto__ = (function (){var fexpr__85135 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85135.cljs$core$IFn$_invoke$arity$1 ? fexpr__85135.cljs$core$IFn$_invoke$arity$1(G__85134) : fexpr__85135.call(null,G__85134));
})();
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85136){
var r__84009__auto__ = (function (){var fexpr__85137 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85137.cljs$core$IFn$_invoke$arity$1 ? fexpr__85137.cljs$core$IFn$_invoke$arity$1(G__85136) : fexpr__85137.call(null,G__85136));
})();
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85138){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__85139 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85139.cljs$core$IFn$_invoke$arity$1 ? fexpr__85139.cljs$core$IFn$_invoke$arity$1(G__85138) : fexpr__85139.call(null,G__85138));
})(),(2)], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85140){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__85141 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85141.cljs$core$IFn$_invoke$arity$1 ? fexpr__85141.cljs$core$IFn$_invoke$arity$1(G__85140) : fexpr__85141.call(null,G__85140));
})(),(2)], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85142){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__85143 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85143.cljs$core$IFn$_invoke$arity$1 ? fexpr__85143.cljs$core$IFn$_invoke$arity$1(G__85142) : fexpr__85143.call(null,G__85142));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__85144 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85144.cljs$core$IFn$_invoke$arity$1 ? fexpr__85144.cljs$core$IFn$_invoke$arity$1(G__85142) : fexpr__85144.call(null,G__85142));
})(),(2)], null))], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85145){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__85146 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85146.cljs$core$IFn$_invoke$arity$1 ? fexpr__85146.cljs$core$IFn$_invoke$arity$1(G__85145) : fexpr__85146.call(null,G__85145));
})(),(2)], null))], null))], null)),(function (){var fexpr__85147 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85147.cljs$core$IFn$_invoke$arity$1 ? fexpr__85147.cljs$core$IFn$_invoke$arity$1(G__85145) : fexpr__85147.call(null,G__85145));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?b","?b",1575118075,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85148){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__85149 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__85149.cljs$core$IFn$_invoke$arity$1 ? fexpr__85149.cljs$core$IFn$_invoke$arity$1(G__85148) : fexpr__85149.call(null,G__85148));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__85150 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__85150.cljs$core$IFn$_invoke$arity$1 ? fexpr__85150.cljs$core$IFn$_invoke$arity$1(G__85148) : fexpr__85150.call(null,G__85148));
})(),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__85151 = new cljs.core.Symbol(null,"?b","?b",1575118075,null);
return (fexpr__85151.cljs$core$IFn$_invoke$arity$1 ? fexpr__85151.cljs$core$IFn$_invoke$arity$1(G__85148) : fexpr__85151.call(null,G__85148));
})(),(2)], null))], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?b","?b",1575118075,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85152){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__85153 = new cljs.core.Symbol(null,"?b","?b",1575118075,null);
return (fexpr__85153.cljs$core$IFn$_invoke$arity$1 ? fexpr__85153.cljs$core$IFn$_invoke$arity$1(G__85152) : fexpr__85153.call(null,G__85152));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__85154 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__85154.cljs$core$IFn$_invoke$arity$1 ? fexpr__85154.cljs$core$IFn$_invoke$arity$1(G__85152) : fexpr__85154.call(null,G__85152));
})(),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__85155 = new cljs.core.Symbol(null,"?b","?b",1575118075,null);
return (fexpr__85155.cljs$core$IFn$_invoke$arity$1 ? fexpr__85155.cljs$core$IFn$_invoke$arity$1(G__85152) : fexpr__85155.call(null,G__85152));
})(),(2)], null))], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0)),pattern.rule.guard((function (_){
return sicmutils.simplify.rules._STAR_inverse_simplify_QMARK__STAR_;
}),pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(function (p__85156){
var map__85157 = p__85156;
var map__85157__$1 = cljs.core.__destructure_map(map__85157);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85157__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"asin","asin",-904130570,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),xs], null))], null)),xs], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})(),new cljs.core.Symbol(null,"asin-sin","asin-sin",1881703610,null));
})),(function (G__85158){
var r__84009__auto__ = (function (){var fexpr__85159 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85159.cljs$core$IFn$_invoke$arity$1 ? fexpr__85159.cljs$core$IFn$_invoke$arity$1(G__85158) : fexpr__85159.call(null,G__85158));
})();
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(function (p__85160){
var map__85161 = p__85160;
var map__85161__$1 = cljs.core.__destructure_map(map__85161);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85161__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"acos","acos",353741763,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),xs], null))], null)),xs], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})(),new cljs.core.Symbol(null,"acos-cos","acos-cos",-652558231,null));
})),(function (G__85162){
var r__84009__auto__ = (function (){var fexpr__85164 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85164.cljs$core$IFn$_invoke$arity$1 ? fexpr__85164.cljs$core$IFn$_invoke$arity$1(G__85162) : fexpr__85164.call(null,G__85162));
})();
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(function (p__85166){
var map__85167 = p__85166;
var map__85167__$1 = cljs.core.__destructure_map(map__85167);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85167__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tan","tan",-1380825876,null),xs], null))], null)),xs], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})(),new cljs.core.Symbol(null,"atan-tan","atan-tan",-478846145,null));
})),(function (G__85168){
var r__84009__auto__ = (function (){var fexpr__85169 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85169.cljs$core$IFn$_invoke$arity$1 ? fexpr__85169.cljs$core$IFn$_invoke$arity$1(G__85168) : fexpr__85169.call(null,G__85168));
})();
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(function (p__85172){
var map__85173 = p__85172;
var map__85173__$1 = cljs.core.__destructure_map(map__85173);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85173__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),xs], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),xs], null))], null)),xs], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})(),new cljs.core.Symbol(null,"atan-sin-cos","atan-sin-cos",-761958387,null));
})),(function (G__85174){
var r__84009__auto__ = (function (){var fexpr__85175 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85175.cljs$core$IFn$_invoke$arity$1 ? fexpr__85175.cljs$core$IFn$_invoke$arity$1(G__85174) : fexpr__85175.call(null,G__85174));
})();
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(function (p__85176){
var map__85177 = p__85176;
var map__85177__$1 = cljs.core.__destructure_map(map__85177);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85177__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"asin","asin",-904130570,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),xs], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null)),xs], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})(),new cljs.core.Symbol(null,"asin-cos","asin-cos",-28391344,null));
})),(function (G__85178){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null)),(function (){var fexpr__85180 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85180.cljs$core$IFn$_invoke$arity$1 ? fexpr__85180.cljs$core$IFn$_invoke$arity$1(G__85178) : fexpr__85180.call(null,G__85178));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(function (p__85182){
var map__85183 = p__85182;
var map__85183__$1 = cljs.core.__destructure_map(map__85183);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85183__$1,new cljs.core.Symbol(null,"?x","?x",-555096650,null));
var xs = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(x) : simplify.call(null,x));
return sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"acos","acos",353741763,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),xs], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null)),xs], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})(),new cljs.core.Symbol(null,"acos-sin","acos-sin",1513257305,null));
})),(function (G__85184){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null)),(function (){var fexpr__85185 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85185.cljs$core$IFn$_invoke$arity$1 ? fexpr__85185.cljs$core$IFn$_invoke$arity$1(G__85184) : fexpr__85185.call(null,G__85184));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
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
return sicmutils.value.integral_QMARK_((function (){var G__85244 = (function (){var G__85245 = x;
var G__85246 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__85245,G__85246) : sym_COLON_div.call(null,G__85245,G__85246));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__85244) : simplify.call(null,G__85244));
})());
}
});
var pi_over_2_mod_2pi_QMARK_ = (function sicmutils$simplify$rules$trig_COLON_special_$_pi_over_2_mod_2pi_QMARK_(x){
var or__4253__auto__ = (sicmutils.numsymb.pi_over_2_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.pi_over_2_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb.pi_over_2_mod_2pi_QMARK_.call(null,x));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.value.integral_QMARK_((function (){var G__85247 = (function (){var G__85248 = (function (){var G__85250 = x;
var G__85251 = (function (){var G__85252 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
var G__85253 = (2);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__85252,G__85253) : sym_COLON_div.call(null,G__85252,G__85253));
})();
return (sym_COLON__.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__.cljs$core$IFn$_invoke$arity$2(G__85250,G__85251) : sym_COLON__.call(null,G__85250,G__85251));
})();
var G__85249 = (function (){var G__85254 = (2);
var G__85255 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(G__85254,G__85255) : sym_COLON__STAR_.call(null,G__85254,G__85255));
})();
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__85248,G__85249) : sym_COLON_div.call(null,G__85248,G__85249));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__85247) : simplify.call(null,G__85247));
})());
}
});
var _pi_over_2_mod_2pi_QMARK_ = (function sicmutils$simplify$rules$trig_COLON_special_$__pi_over_2_mod_2pi_QMARK_(x){
var or__4253__auto__ = (sicmutils.numsymb._pi_over_2_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb._pi_over_2_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb._pi_over_2_mod_2pi_QMARK_.call(null,x));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.value.integral_QMARK_((function (){var G__85256 = (function (){var G__85257 = (function (){var G__85259 = x;
var G__85260 = (function (){var G__85261 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
var G__85262 = (2);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__85261,G__85262) : sym_COLON_div.call(null,G__85261,G__85262));
})();
return (sym_COLON__PLUS_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__PLUS_.cljs$core$IFn$_invoke$arity$2(G__85259,G__85260) : sym_COLON__PLUS_.call(null,G__85259,G__85260));
})();
var G__85258 = (function (){var G__85263 = (2);
var G__85264 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(G__85263,G__85264) : sym_COLON__STAR_.call(null,G__85263,G__85264));
})();
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__85257,G__85258) : sym_COLON_div.call(null,G__85257,G__85258));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__85256) : simplify.call(null,G__85256));
})());
}
});
var pi_over_2_mod_pi_QMARK_ = (function sicmutils$simplify$rules$trig_COLON_special_$_pi_over_2_mod_pi_QMARK_(x){
var or__4253__auto__ = (sicmutils.numsymb.pi_over_2_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.pi_over_2_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb.pi_over_2_mod_pi_QMARK_.call(null,x));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.value.integral_QMARK_((function (){var G__85265 = (function (){var G__85266 = (function (){var G__85268 = x;
var G__85269 = (function (){var G__85270 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
var G__85271 = (2);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__85270,G__85271) : sym_COLON_div.call(null,G__85270,G__85271));
})();
return (sym_COLON__.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__.cljs$core$IFn$_invoke$arity$2(G__85268,G__85269) : sym_COLON__.call(null,G__85268,G__85269));
})();
var G__85267 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__85266,G__85267) : sym_COLON_div.call(null,G__85266,G__85267));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__85265) : simplify.call(null,G__85265));
})());
}
});
var zero_mod_2pi_QMARK_ = (function sicmutils$simplify$rules$trig_COLON_special_$_zero_mod_2pi_QMARK_(x){
var or__4253__auto__ = (sicmutils.numsymb.zero_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.zero_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb.zero_mod_2pi_QMARK_.call(null,x));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.value.integral_QMARK_((function (){var G__85279 = (function (){var G__85280 = x;
var G__85281 = (function (){var G__85282 = (2);
var G__85283 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(G__85282,G__85283) : sym_COLON__STAR_.call(null,G__85282,G__85283));
})();
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__85280,G__85281) : sym_COLON_div.call(null,G__85280,G__85281));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__85279) : simplify.call(null,G__85279));
})());
}
});
var pi_mod_2pi_QMARK_ = (function sicmutils$simplify$rules$trig_COLON_special_$_pi_mod_2pi_QMARK_(x){
var or__4253__auto__ = (sicmutils.numsymb.pi_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.pi_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb.pi_mod_2pi_QMARK_.call(null,x));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.value.integral_QMARK_((function (){var G__85284 = (function (){var G__85285 = (function (){var G__85287 = x;
var G__85288 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON__.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__.cljs$core$IFn$_invoke$arity$2(G__85287,G__85288) : sym_COLON__.call(null,G__85287,G__85288));
})();
var G__85286 = (function (){var G__85289 = (2);
var G__85290 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(G__85289,G__85290) : sym_COLON__STAR_.call(null,G__85289,G__85290));
})();
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__85285,G__85286) : sym_COLON_div.call(null,G__85285,G__85286));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__85284) : simplify.call(null,G__85284));
})());
}
});
var pi_over_4_mod_pi_QMARK_ = (function sicmutils$simplify$rules$trig_COLON_special_$_pi_over_4_mod_pi_QMARK_(x){
var or__4253__auto__ = (sicmutils.numsymb.pi_over_4_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.pi_over_4_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb.pi_over_4_mod_pi_QMARK_.call(null,x));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.value.integral_QMARK_((function (){var G__85291 = (function (){var G__85292 = (function (){var G__85294 = x;
var G__85295 = (function (){var G__85296 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
var G__85297 = (4);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__85296,G__85297) : sym_COLON_div.call(null,G__85296,G__85297));
})();
return (sym_COLON__.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__.cljs$core$IFn$_invoke$arity$2(G__85294,G__85295) : sym_COLON__.call(null,G__85294,G__85295));
})();
var G__85293 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__85292,G__85293) : sym_COLON_div.call(null,G__85292,G__85293));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__85291) : simplify.call(null,G__85291));
})());
}
});
var _pi_over_4_mod_pi_QMARK_ = (function sicmutils$simplify$rules$trig_COLON_special_$__pi_over_4_mod_pi_QMARK_(x){
var or__4253__auto__ = (sicmutils.numsymb._pi_over_4_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb._pi_over_4_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb._pi_over_4_mod_pi_QMARK_.call(null,x));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.value.integral_QMARK_((function (){var G__85298 = (function (){var G__85299 = (function (){var G__85301 = x;
var G__85302 = (function (){var G__85303 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
var G__85304 = (4);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__85303,G__85304) : sym_COLON_div.call(null,G__85303,G__85304));
})();
return (sym_COLON__PLUS_.cljs$core$IFn$_invoke$arity$2 ? sym_COLON__PLUS_.cljs$core$IFn$_invoke$arity$2(G__85301,G__85302) : sym_COLON__PLUS_.call(null,G__85301,G__85302));
})();
var G__85300 = new cljs.core.Symbol(null,"pi","pi",176774184,null);
return (sym_COLON_div.cljs$core$IFn$_invoke$arity$2 ? sym_COLON_div.cljs$core$IFn$_invoke$arity$2(G__85299,G__85300) : sym_COLON_div.call(null,G__85299,G__85300));
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__85298) : simplify.call(null,G__85298));
})());
}
});
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,zero_mod_pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85305){
var r__84009__auto__ = (0);
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,pi_over_2_mod_2pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85306){
var r__84009__auto__ = (1);
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,_pi_over_2_mod_2pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85308){
var r__84009__auto__ = (-1);
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,pi_over_2_mod_pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85310){
var r__84009__auto__ = (0);
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,zero_mod_2pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85312){
var r__84009__auto__ = (1);
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,pi_mod_2pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85314){
var r__84009__auto__ = (-1);
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,zero_mod_pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85316){
var r__84009__auto__ = (0);
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,pi_over_4_mod_pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85317){
var r__84009__auto__ = (1);
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,_pi_over_4_mod_pi_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85321){
var r__84009__auto__ = (-1);
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0))], 0));
});
/**
 * `sin` is odd, and `cos` is even. we canonicalize by moving the sign
 * out of the first term of the argument.
 */
sicmutils.simplify.rules.angular_parity = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85329){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (p1__85323_SHARP_){
return (- (function (){var G__85330 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__85323_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85323_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85330) : p1__85323_SHARP_.call(null,G__85330));
})());
})(G__85329)], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x","??x",-1924511736,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85331){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__85324_SHARP_){
return (- (function (){var G__85332 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__85324_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85324_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85332) : p1__85324_SHARP_.call(null,G__85332));
})());
})(G__85331)], null),(function (){var fexpr__85333 = new cljs.core.Symbol(null,"??x","??x",-1924511736,null);
return (fexpr__85333.cljs$core$IFn$_invoke$arity$1 ? fexpr__85333.cljs$core$IFn$_invoke$arity$1(G__85331) : fexpr__85333.call(null,G__85331));
})()))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x","??x",-1924511736,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85334){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__85325_SHARP_){
return (- (function (){var G__85335 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__85325_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85325_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85335) : p1__85325_SHARP_.call(null,G__85335));
})());
})(G__85334)], null),(function (){var fexpr__85336 = new cljs.core.Symbol(null,"??x","??x",-1924511736,null);
return (fexpr__85336.cljs$core$IFn$_invoke$arity$1 ? fexpr__85336.cljs$core$IFn$_invoke$arity$1(G__85334) : fexpr__85336.call(null,G__85334));
})()))], null),(function (){var fexpr__85337 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__85337.cljs$core$IFn$_invoke$arity$1 ? fexpr__85337.cljs$core$IFn$_invoke$arity$1(G__85334) : fexpr__85337.call(null,G__85334));
})()))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85338){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (p1__85326_SHARP_){
return (- (function (){var G__85339 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__85326_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85326_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85339) : p1__85326_SHARP_.call(null,G__85339));
})());
})(G__85338)], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x","??x",-1924511736,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85340){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__85327_SHARP_){
return (- (function (){var G__85341 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__85327_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85327_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85341) : p1__85327_SHARP_.call(null,G__85341));
})());
})(G__85340)], null),(function (){var fexpr__85342 = new cljs.core.Symbol(null,"??x","??x",-1924511736,null);
return (fexpr__85342.cljs$core$IFn$_invoke$arity$1 ? fexpr__85342.cljs$core$IFn$_invoke$arity$1(G__85340) : fexpr__85342.call(null,G__85340));
})()))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.negative_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x","??x",-1924511736,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85343){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__85328_SHARP_){
return (- (function (){var G__85344 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__85328_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85328_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85344) : p1__85328_SHARP_.call(null,G__85344));
})());
})(G__85343)], null),(function (){var fexpr__85345 = new cljs.core.Symbol(null,"??x","??x",-1924511736,null);
return (fexpr__85345.cljs$core$IFn$_invoke$arity$1 ? fexpr__85345.cljs$core$IFn$_invoke$arity$1(G__85343) : fexpr__85345.call(null,G__85343));
})()))], null),(function (){var fexpr__85346 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__85346.cljs$core$IFn$_invoke$arity$1 ? fexpr__85346.cljs$core$IFn$_invoke$arity$1(G__85343) : fexpr__85346.call(null,G__85343));
})()))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.expand_multiangle = (function (){var exact_integer_GT_3_QMARK_ = (function sicmutils$simplify$rules$exact_integer_GT_3_QMARK_(x){
return ((sicmutils.value.integral_QMARK_(x)) && (((sicmutils.value.exact_QMARK_(x)) && ((x > (3))))));
});
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(2),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85351){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__85352 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85352.cljs$core$IFn$_invoke$arity$1 ? fexpr__85352.cljs$core$IFn$_invoke$arity$1(G__85351) : fexpr__85352.call(null,G__85351));
})()], null),(function (){var fexpr__85353 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__85353.cljs$core$IFn$_invoke$arity$1 ? fexpr__85353.cljs$core$IFn$_invoke$arity$1(G__85351) : fexpr__85353.call(null,G__85351));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__85354 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85354.cljs$core$IFn$_invoke$arity$1 ? fexpr__85354.cljs$core$IFn$_invoke$arity$1(G__85351) : fexpr__85354.call(null,G__85351));
})()], null),(function (){var fexpr__85355 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__85355.cljs$core$IFn$_invoke$arity$1 ? fexpr__85355.cljs$core$IFn$_invoke$arity$1(G__85351) : fexpr__85355.call(null,G__85351));
})()))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(2),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85356){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__85357 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85357.cljs$core$IFn$_invoke$arity$1 ? fexpr__85357.cljs$core$IFn$_invoke$arity$1(G__85356) : fexpr__85357.call(null,G__85356));
})()], null),(function (){var fexpr__85358 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__85358.cljs$core$IFn$_invoke$arity$1 ? fexpr__85358.cljs$core$IFn$_invoke$arity$1(G__85356) : fexpr__85358.call(null,G__85356));
})()))], null)),(2)], null))], null)),(1)], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(3),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85359){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(3),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__85360 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85360.cljs$core$IFn$_invoke$arity$1 ? fexpr__85360.cljs$core$IFn$_invoke$arity$1(G__85359) : fexpr__85360.call(null,G__85359));
})()], null),(function (){var fexpr__85361 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__85361.cljs$core$IFn$_invoke$arity$1 ? fexpr__85361.cljs$core$IFn$_invoke$arity$1(G__85359) : fexpr__85361.call(null,G__85359));
})()))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-4),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__85362 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85362.cljs$core$IFn$_invoke$arity$1 ? fexpr__85362.cljs$core$IFn$_invoke$arity$1(G__85359) : fexpr__85362.call(null,G__85359));
})()], null),(function (){var fexpr__85363 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__85363.cljs$core$IFn$_invoke$arity$1 ? fexpr__85363.cljs$core$IFn$_invoke$arity$1(G__85359) : fexpr__85363.call(null,G__85359));
})()))], null)),(3)], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(3),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85365){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(4),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__85367 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85367.cljs$core$IFn$_invoke$arity$1 ? fexpr__85367.cljs$core$IFn$_invoke$arity$1(G__85365) : fexpr__85367.call(null,G__85365));
})()], null),(function (){var fexpr__85368 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__85368.cljs$core$IFn$_invoke$arity$1 ? fexpr__85368.cljs$core$IFn$_invoke$arity$1(G__85365) : fexpr__85368.call(null,G__85365));
})()))], null)),(3)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-3),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__85369 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85369.cljs$core$IFn$_invoke$arity$1 ? fexpr__85369.cljs$core$IFn$_invoke$arity$1(G__85365) : fexpr__85369.call(null,G__85365));
})()], null),(function (){var fexpr__85370 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__85370.cljs$core$IFn$_invoke$arity$1 ? fexpr__85370.cljs$core$IFn$_invoke$arity$1(G__85365) : fexpr__85370.call(null,G__85365));
})()))], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,exact_integer_GT_3_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85371){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__85347_SHARP_){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__85372 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__85347_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85347_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85372) : p1__85347_SHARP_.call(null,G__85372));
})(),(1));
})(G__85371),(function (){var fexpr__85373 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__85373.cljs$core$IFn$_invoke$arity$1 ? fexpr__85373.cljs$core$IFn$_invoke$arity$1(G__85371) : fexpr__85373.call(null,G__85371));
})()], null),(function (){var fexpr__85374 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__85374.cljs$core$IFn$_invoke$arity$1 ? fexpr__85374.cljs$core$IFn$_invoke$arity$1(G__85371) : fexpr__85374.call(null,G__85371));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__85375 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__85375.cljs$core$IFn$_invoke$arity$1 ? fexpr__85375.cljs$core$IFn$_invoke$arity$1(G__85371) : fexpr__85375.call(null,G__85371));
})()], null),(function (){var fexpr__85376 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__85376.cljs$core$IFn$_invoke$arity$1 ? fexpr__85376.cljs$core$IFn$_invoke$arity$1(G__85371) : fexpr__85376.call(null,G__85371));
})()))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__85348_SHARP_){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__85377 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__85348_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85348_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85377) : p1__85348_SHARP_.call(null,G__85377));
})(),(1));
})(G__85371),(function (){var fexpr__85378 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__85378.cljs$core$IFn$_invoke$arity$1 ? fexpr__85378.cljs$core$IFn$_invoke$arity$1(G__85371) : fexpr__85378.call(null,G__85371));
})()], null),(function (){var fexpr__85379 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__85379.cljs$core$IFn$_invoke$arity$1 ? fexpr__85379.cljs$core$IFn$_invoke$arity$1(G__85371) : fexpr__85379.call(null,G__85371));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__85380 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__85380.cljs$core$IFn$_invoke$arity$1 ? fexpr__85380.cljs$core$IFn$_invoke$arity$1(G__85371) : fexpr__85380.call(null,G__85371));
})()], null),(function (){var fexpr__85381 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__85381.cljs$core$IFn$_invoke$arity$1 ? fexpr__85381.cljs$core$IFn$_invoke$arity$1(G__85371) : fexpr__85381.call(null,G__85371));
})()))], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85382){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__85383 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85383.cljs$core$IFn$_invoke$arity$1 ? fexpr__85383.cljs$core$IFn$_invoke$arity$1(G__85382) : fexpr__85383.call(null,G__85382));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__85384 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85384.cljs$core$IFn$_invoke$arity$1 ? fexpr__85384.cljs$core$IFn$_invoke$arity$1(G__85382) : fexpr__85384.call(null,G__85382));
})()], null),(function (){var fexpr__85385 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__85385.cljs$core$IFn$_invoke$arity$1 ? fexpr__85385.cljs$core$IFn$_invoke$arity$1(G__85382) : fexpr__85385.call(null,G__85382));
})()))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__85386 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85386.cljs$core$IFn$_invoke$arity$1 ? fexpr__85386.cljs$core$IFn$_invoke$arity$1(G__85382) : fexpr__85386.call(null,G__85382));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__85387 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85387.cljs$core$IFn$_invoke$arity$1 ? fexpr__85387.cljs$core$IFn$_invoke$arity$1(G__85382) : fexpr__85387.call(null,G__85382));
})()], null),(function (){var fexpr__85388 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__85388.cljs$core$IFn$_invoke$arity$1 ? fexpr__85388.cljs$core$IFn$_invoke$arity$1(G__85382) : fexpr__85388.call(null,G__85382));
})()))], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"n","n",-2092305744,null),(new cljs.core.List(null,exact_integer_GT_3_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?f","?f",-1121766265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85389){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__85349_SHARP_){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__85390 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__85349_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85349_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85390) : p1__85349_SHARP_.call(null,G__85390));
})(),(1));
})(G__85389),(function (){var fexpr__85391 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__85391.cljs$core$IFn$_invoke$arity$1 ? fexpr__85391.cljs$core$IFn$_invoke$arity$1(G__85389) : fexpr__85391.call(null,G__85389));
})()], null),(function (){var fexpr__85393 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__85393.cljs$core$IFn$_invoke$arity$1 ? fexpr__85393.cljs$core$IFn$_invoke$arity$1(G__85389) : fexpr__85393.call(null,G__85389));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__85394 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__85394.cljs$core$IFn$_invoke$arity$1 ? fexpr__85394.cljs$core$IFn$_invoke$arity$1(G__85389) : fexpr__85394.call(null,G__85389));
})()], null),(function (){var fexpr__85396 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__85396.cljs$core$IFn$_invoke$arity$1 ? fexpr__85396.cljs$core$IFn$_invoke$arity$1(G__85389) : fexpr__85396.call(null,G__85389));
})()))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__85350_SHARP_){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__85397 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__85350_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85350_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85397) : p1__85350_SHARP_.call(null,G__85397));
})(),(1));
})(G__85389),(function (){var fexpr__85398 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__85398.cljs$core$IFn$_invoke$arity$1 ? fexpr__85398.cljs$core$IFn$_invoke$arity$1(G__85389) : fexpr__85398.call(null,G__85389));
})()], null),(function (){var fexpr__85399 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__85399.cljs$core$IFn$_invoke$arity$1 ? fexpr__85399.cljs$core$IFn$_invoke$arity$1(G__85389) : fexpr__85399.call(null,G__85389));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__85400 = new cljs.core.Symbol(null,"?f","?f",-1121766265,null);
return (fexpr__85400.cljs$core$IFn$_invoke$arity$1 ? fexpr__85400.cljs$core$IFn$_invoke$arity$1(G__85389) : fexpr__85400.call(null,G__85389));
})()], null),(function (){var fexpr__85401 = new cljs.core.Symbol(null,"??fs","??fs",-1640556976,null);
return (fexpr__85401.cljs$core$IFn$_invoke$arity$1 ? fexpr__85401.cljs$core$IFn$_invoke$arity$1(G__85389) : fexpr__85401.call(null,G__85389));
})()))], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85406){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__85407 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85407.cljs$core$IFn$_invoke$arity$1 ? fexpr__85407.cljs$core$IFn$_invoke$arity$1(G__85406) : fexpr__85407.call(null,G__85406));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__85408 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85408.cljs$core$IFn$_invoke$arity$1 ? fexpr__85408.cljs$core$IFn$_invoke$arity$1(G__85406) : fexpr__85408.call(null,G__85406));
})()], null),(function (){var fexpr__85409 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__85409.cljs$core$IFn$_invoke$arity$1 ? fexpr__85409.cljs$core$IFn$_invoke$arity$1(G__85406) : fexpr__85409.call(null,G__85406));
})()))], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__85413 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85413.cljs$core$IFn$_invoke$arity$1 ? fexpr__85413.cljs$core$IFn$_invoke$arity$1(G__85406) : fexpr__85413.call(null,G__85406));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__85414 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85414.cljs$core$IFn$_invoke$arity$1 ? fexpr__85414.cljs$core$IFn$_invoke$arity$1(G__85406) : fexpr__85414.call(null,G__85406));
})()], null),(function (){var fexpr__85415 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__85415.cljs$core$IFn$_invoke$arity$1 ? fexpr__85415.cljs$core$IFn$_invoke$arity$1(G__85406) : fexpr__85415.call(null,G__85406));
})()))], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0))], 0));
})();
sicmutils.simplify.rules.trig_COLON_sum__GT_product = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__85419){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__85420 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85420.cljs$core$IFn$_invoke$arity$1 ? fexpr__85420.cljs$core$IFn$_invoke$arity$1(G__85419) : fexpr__85420.call(null,G__85419));
})(),(function (){var fexpr__85421 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85421.cljs$core$IFn$_invoke$arity$1 ? fexpr__85421.cljs$core$IFn$_invoke$arity$1(G__85419) : fexpr__85421.call(null,G__85419));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__85422 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85422.cljs$core$IFn$_invoke$arity$1 ? fexpr__85422.cljs$core$IFn$_invoke$arity$1(G__85419) : fexpr__85422.call(null,G__85419));
})(),(function (){var fexpr__85423 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85423.cljs$core$IFn$_invoke$arity$1 ? fexpr__85423.cljs$core$IFn$_invoke$arity$1(G__85419) : fexpr__85423.call(null,G__85419));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__85424 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__85424.cljs$core$IFn$_invoke$arity$1 ? fexpr__85424.cljs$core$IFn$_invoke$arity$1(G__85419) : fexpr__85424.call(null,G__85419));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85425 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__85425.cljs$core$IFn$_invoke$arity$1 ? fexpr__85425.cljs$core$IFn$_invoke$arity$1(G__85419) : fexpr__85425.call(null,G__85419));
})(),(function (){var fexpr__85426 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__85426.cljs$core$IFn$_invoke$arity$1 ? fexpr__85426.cljs$core$IFn$_invoke$arity$1(G__85419) : fexpr__85426.call(null,G__85419));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__85431){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__85435 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85435.cljs$core$IFn$_invoke$arity$1 ? fexpr__85435.cljs$core$IFn$_invoke$arity$1(G__85431) : fexpr__85435.call(null,G__85431));
})(),(function (){var fexpr__85436 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85436.cljs$core$IFn$_invoke$arity$1 ? fexpr__85436.cljs$core$IFn$_invoke$arity$1(G__85431) : fexpr__85436.call(null,G__85431));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__85437 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85437.cljs$core$IFn$_invoke$arity$1 ? fexpr__85437.cljs$core$IFn$_invoke$arity$1(G__85431) : fexpr__85437.call(null,G__85431));
})(),(function (){var fexpr__85438 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85438.cljs$core$IFn$_invoke$arity$1 ? fexpr__85438.cljs$core$IFn$_invoke$arity$1(G__85431) : fexpr__85438.call(null,G__85431));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__85439 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__85439.cljs$core$IFn$_invoke$arity$1 ? fexpr__85439.cljs$core$IFn$_invoke$arity$1(G__85431) : fexpr__85439.call(null,G__85431));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85440 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__85440.cljs$core$IFn$_invoke$arity$1 ? fexpr__85440.cljs$core$IFn$_invoke$arity$1(G__85431) : fexpr__85440.call(null,G__85431));
})(),(function (){var fexpr__85444 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__85444.cljs$core$IFn$_invoke$arity$1 ? fexpr__85444.cljs$core$IFn$_invoke$arity$1(G__85431) : fexpr__85444.call(null,G__85431));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__85445){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__85446 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85446.cljs$core$IFn$_invoke$arity$1 ? fexpr__85446.cljs$core$IFn$_invoke$arity$1(G__85445) : fexpr__85446.call(null,G__85445));
})(),(function (){var fexpr__85447 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85447.cljs$core$IFn$_invoke$arity$1 ? fexpr__85447.cljs$core$IFn$_invoke$arity$1(G__85445) : fexpr__85447.call(null,G__85445));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__85448 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85448.cljs$core$IFn$_invoke$arity$1 ? fexpr__85448.cljs$core$IFn$_invoke$arity$1(G__85445) : fexpr__85448.call(null,G__85445));
})(),(function (){var fexpr__85449 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85449.cljs$core$IFn$_invoke$arity$1 ? fexpr__85449.cljs$core$IFn$_invoke$arity$1(G__85445) : fexpr__85449.call(null,G__85445));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__85450 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__85450.cljs$core$IFn$_invoke$arity$1 ? fexpr__85450.cljs$core$IFn$_invoke$arity$1(G__85445) : fexpr__85450.call(null,G__85445));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85451 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__85451.cljs$core$IFn$_invoke$arity$1 ? fexpr__85451.cljs$core$IFn$_invoke$arity$1(G__85445) : fexpr__85451.call(null,G__85445));
})(),(function (){var fexpr__85452 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__85452.cljs$core$IFn$_invoke$arity$1 ? fexpr__85452.cljs$core$IFn$_invoke$arity$1(G__85445) : fexpr__85452.call(null,G__85445));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__85453){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__85454 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85454.cljs$core$IFn$_invoke$arity$1 ? fexpr__85454.cljs$core$IFn$_invoke$arity$1(G__85453) : fexpr__85454.call(null,G__85453));
})(),(function (){var fexpr__85455 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85455.cljs$core$IFn$_invoke$arity$1 ? fexpr__85455.cljs$core$IFn$_invoke$arity$1(G__85453) : fexpr__85455.call(null,G__85453));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__85456 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85456.cljs$core$IFn$_invoke$arity$1 ? fexpr__85456.cljs$core$IFn$_invoke$arity$1(G__85453) : fexpr__85456.call(null,G__85453));
})(),(function (){var fexpr__85457 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85457.cljs$core$IFn$_invoke$arity$1 ? fexpr__85457.cljs$core$IFn$_invoke$arity$1(G__85453) : fexpr__85457.call(null,G__85453));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__85458 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__85458.cljs$core$IFn$_invoke$arity$1 ? fexpr__85458.cljs$core$IFn$_invoke$arity$1(G__85453) : fexpr__85458.call(null,G__85453));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85459 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__85459.cljs$core$IFn$_invoke$arity$1 ? fexpr__85459.cljs$core$IFn$_invoke$arity$1(G__85453) : fexpr__85459.call(null,G__85453));
})(),(function (){var fexpr__85460 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__85460.cljs$core$IFn$_invoke$arity$1 ? fexpr__85460.cljs$core$IFn$_invoke$arity$1(G__85453) : fexpr__85460.call(null,G__85453));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__85465){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__85469 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85469.cljs$core$IFn$_invoke$arity$1 ? fexpr__85469.cljs$core$IFn$_invoke$arity$1(G__85465) : fexpr__85469.call(null,G__85465));
})(),(function (){var fexpr__85470 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85470.cljs$core$IFn$_invoke$arity$1 ? fexpr__85470.cljs$core$IFn$_invoke$arity$1(G__85465) : fexpr__85470.call(null,G__85465));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__85471 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85471.cljs$core$IFn$_invoke$arity$1 ? fexpr__85471.cljs$core$IFn$_invoke$arity$1(G__85465) : fexpr__85471.call(null,G__85465));
})(),(function (){var fexpr__85472 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85472.cljs$core$IFn$_invoke$arity$1 ? fexpr__85472.cljs$core$IFn$_invoke$arity$1(G__85465) : fexpr__85472.call(null,G__85465));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__85473 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__85473.cljs$core$IFn$_invoke$arity$1 ? fexpr__85473.cljs$core$IFn$_invoke$arity$1(G__85465) : fexpr__85473.call(null,G__85465));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85474 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__85474.cljs$core$IFn$_invoke$arity$1 ? fexpr__85474.cljs$core$IFn$_invoke$arity$1(G__85465) : fexpr__85474.call(null,G__85465));
})(),(function (){var fexpr__85475 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__85475.cljs$core$IFn$_invoke$arity$1 ? fexpr__85475.cljs$core$IFn$_invoke$arity$1(G__85465) : fexpr__85475.call(null,G__85465));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a","??a",-294068510,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(-1),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b","??b",254504576,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??c","??c",1219586074,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__85478){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-2),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__85479 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85479.cljs$core$IFn$_invoke$arity$1 ? fexpr__85479.cljs$core$IFn$_invoke$arity$1(G__85478) : fexpr__85479.call(null,G__85478));
})(),(function (){var fexpr__85481 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85481.cljs$core$IFn$_invoke$arity$1 ? fexpr__85481.cljs$core$IFn$_invoke$arity$1(G__85478) : fexpr__85481.call(null,G__85478));
})()], null)),(2)], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__85486 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85486.cljs$core$IFn$_invoke$arity$1 ? fexpr__85486.cljs$core$IFn$_invoke$arity$1(G__85478) : fexpr__85486.call(null,G__85478));
})(),(function (){var fexpr__85487 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85487.cljs$core$IFn$_invoke$arity$1 ? fexpr__85487.cljs$core$IFn$_invoke$arity$1(G__85478) : fexpr__85487.call(null,G__85478));
})()], null)),(2)], null))], null))], null))], null),(function (){var fexpr__85492 = new cljs.core.Symbol(null,"??a","??a",-294068510,null);
return (fexpr__85492.cljs$core$IFn$_invoke$arity$1 ? fexpr__85492.cljs$core$IFn$_invoke$arity$1(G__85478) : fexpr__85492.call(null,G__85478));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85493 = new cljs.core.Symbol(null,"??b","??b",254504576,null);
return (fexpr__85493.cljs$core$IFn$_invoke$arity$1 ? fexpr__85493.cljs$core$IFn$_invoke$arity$1(G__85478) : fexpr__85493.call(null,G__85478));
})(),(function (){var fexpr__85494 = new cljs.core.Symbol(null,"??c","??c",1219586074,null);
return (fexpr__85494.cljs$core$IFn$_invoke$arity$1 ? fexpr__85494.cljs$core$IFn$_invoke$arity$1(G__85478) : fexpr__85494.call(null,G__85478));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.trig_COLON_product__GT_sum = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??w","??w",1245275022,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__85504){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__85505 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85505.cljs$core$IFn$_invoke$arity$1 ? fexpr__85505.cljs$core$IFn$_invoke$arity$1(G__85504) : fexpr__85505.call(null,G__85504));
})(),(function (){var fexpr__85506 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85506.cljs$core$IFn$_invoke$arity$1 ? fexpr__85506.cljs$core$IFn$_invoke$arity$1(G__85504) : fexpr__85506.call(null,G__85504));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__85507 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85507.cljs$core$IFn$_invoke$arity$1 ? fexpr__85507.cljs$core$IFn$_invoke$arity$1(G__85504) : fexpr__85507.call(null,G__85504));
})(),(function (){var fexpr__85508 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85508.cljs$core$IFn$_invoke$arity$1 ? fexpr__85508.cljs$core$IFn$_invoke$arity$1(G__85504) : fexpr__85508.call(null,G__85504));
})()], null))], null))], null))], null),(function (){var fexpr__85509 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__85509.cljs$core$IFn$_invoke$arity$1 ? fexpr__85509.cljs$core$IFn$_invoke$arity$1(G__85504) : fexpr__85509.call(null,G__85504));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85510 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__85510.cljs$core$IFn$_invoke$arity$1 ? fexpr__85510.cljs$core$IFn$_invoke$arity$1(G__85504) : fexpr__85510.call(null,G__85504));
})(),(function (){var fexpr__85511 = new cljs.core.Symbol(null,"??w","??w",1245275022,null);
return (fexpr__85511.cljs$core$IFn$_invoke$arity$1 ? fexpr__85511.cljs$core$IFn$_invoke$arity$1(G__85504) : fexpr__85511.call(null,G__85504));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??w","??w",1245275022,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__85512){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__85514 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85514.cljs$core$IFn$_invoke$arity$1 ? fexpr__85514.cljs$core$IFn$_invoke$arity$1(G__85512) : fexpr__85514.call(null,G__85512));
})(),(function (){var fexpr__85515 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85515.cljs$core$IFn$_invoke$arity$1 ? fexpr__85515.cljs$core$IFn$_invoke$arity$1(G__85512) : fexpr__85515.call(null,G__85512));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__85516 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85516.cljs$core$IFn$_invoke$arity$1 ? fexpr__85516.cljs$core$IFn$_invoke$arity$1(G__85512) : fexpr__85516.call(null,G__85512));
})(),(function (){var fexpr__85517 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85517.cljs$core$IFn$_invoke$arity$1 ? fexpr__85517.cljs$core$IFn$_invoke$arity$1(G__85512) : fexpr__85517.call(null,G__85512));
})()], null))], null))], null))], null),(function (){var fexpr__85518 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__85518.cljs$core$IFn$_invoke$arity$1 ? fexpr__85518.cljs$core$IFn$_invoke$arity$1(G__85512) : fexpr__85518.call(null,G__85512));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85519 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__85519.cljs$core$IFn$_invoke$arity$1 ? fexpr__85519.cljs$core$IFn$_invoke$arity$1(G__85512) : fexpr__85519.call(null,G__85512));
})(),(function (){var fexpr__85520 = new cljs.core.Symbol(null,"??w","??w",1245275022,null);
return (fexpr__85520.cljs$core$IFn$_invoke$arity$1 ? fexpr__85520.cljs$core$IFn$_invoke$arity$1(G__85512) : fexpr__85520.call(null,G__85512));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??w","??w",1245275022,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__85527){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__85535 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85535.cljs$core$IFn$_invoke$arity$1 ? fexpr__85535.cljs$core$IFn$_invoke$arity$1(G__85527) : fexpr__85535.call(null,G__85527));
})(),(function (){var fexpr__85536 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85536.cljs$core$IFn$_invoke$arity$1 ? fexpr__85536.cljs$core$IFn$_invoke$arity$1(G__85527) : fexpr__85536.call(null,G__85527));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__85537 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85537.cljs$core$IFn$_invoke$arity$1 ? fexpr__85537.cljs$core$IFn$_invoke$arity$1(G__85527) : fexpr__85537.call(null,G__85527));
})(),(function (){var fexpr__85538 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85538.cljs$core$IFn$_invoke$arity$1 ? fexpr__85538.cljs$core$IFn$_invoke$arity$1(G__85527) : fexpr__85538.call(null,G__85527));
})()], null))], null))], null))], null),(function (){var fexpr__85539 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__85539.cljs$core$IFn$_invoke$arity$1 ? fexpr__85539.cljs$core$IFn$_invoke$arity$1(G__85527) : fexpr__85539.call(null,G__85527));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85540 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__85540.cljs$core$IFn$_invoke$arity$1 ? fexpr__85540.cljs$core$IFn$_invoke$arity$1(G__85527) : fexpr__85540.call(null,G__85527));
})(),(function (){var fexpr__85541 = new cljs.core.Symbol(null,"??w","??w",1245275022,null);
return (fexpr__85541.cljs$core$IFn$_invoke$arity$1 ? fexpr__85541.cljs$core$IFn$_invoke$arity$1(G__85527) : fexpr__85541.call(null,G__85527));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??u","??u",788654559,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??v","??v",2028946795,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??w","??w",1245275022,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__85556){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__85558 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85558.cljs$core$IFn$_invoke$arity$1 ? fexpr__85558.cljs$core$IFn$_invoke$arity$1(G__85556) : fexpr__85558.call(null,G__85556));
})(),(function (){var fexpr__85559 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85559.cljs$core$IFn$_invoke$arity$1 ? fexpr__85559.cljs$core$IFn$_invoke$arity$1(G__85556) : fexpr__85559.call(null,G__85556));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__85560 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85560.cljs$core$IFn$_invoke$arity$1 ? fexpr__85560.cljs$core$IFn$_invoke$arity$1(G__85556) : fexpr__85560.call(null,G__85556));
})(),(function (){var fexpr__85561 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85561.cljs$core$IFn$_invoke$arity$1 ? fexpr__85561.cljs$core$IFn$_invoke$arity$1(G__85556) : fexpr__85561.call(null,G__85556));
})()], null))], null))], null))], null),(function (){var fexpr__85562 = new cljs.core.Symbol(null,"??u","??u",788654559,null);
return (fexpr__85562.cljs$core$IFn$_invoke$arity$1 ? fexpr__85562.cljs$core$IFn$_invoke$arity$1(G__85556) : fexpr__85562.call(null,G__85556));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85565 = new cljs.core.Symbol(null,"??v","??v",2028946795,null);
return (fexpr__85565.cljs$core$IFn$_invoke$arity$1 ? fexpr__85565.cljs$core$IFn$_invoke$arity$1(G__85556) : fexpr__85565.call(null,G__85556));
})(),(function (){var fexpr__85567 = new cljs.core.Symbol(null,"??w","??w",1245275022,null);
return (fexpr__85567.cljs$core$IFn$_invoke$arity$1 ? fexpr__85567.cljs$core$IFn$_invoke$arity$1(G__85556) : fexpr__85567.call(null,G__85556));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.contract_expt_trig = (function (){var exact_integer_GT_1_QMARK_ = (function sicmutils$simplify$rules$exact_integer_GT_1_QMARK_(x){
return ((sicmutils.value.integral_QMARK_(x)) && (((sicmutils.value.exact_QMARK_(x)) && ((x > (1))))));
});
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,exact_integer_GT_1_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__85584){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__85587 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85587.cljs$core$IFn$_invoke$arity$1 ? fexpr__85587.cljs$core$IFn$_invoke$arity$1(G__85584) : fexpr__85587.call(null,G__85584));
})()], null)),(function (p1__85572_SHARP_){
return ((function (){var G__85588 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__85572_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85572_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85588) : p1__85572_SHARP_.call(null,G__85588));
})() - (2));
})(G__85584)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),(function (){var fexpr__85589 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85589.cljs$core$IFn$_invoke$arity$1 ? fexpr__85589.cljs$core$IFn$_invoke$arity$1(G__85584) : fexpr__85589.call(null,G__85584));
})()], null))], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,exact_integer_GT_1_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__85590){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__85591 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85591.cljs$core$IFn$_invoke$arity$1 ? fexpr__85591.cljs$core$IFn$_invoke$arity$1(G__85590) : fexpr__85591.call(null,G__85590));
})()], null)),(function (p1__85573_SHARP_){
return ((function (){var G__85592 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__85573_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85573_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85592) : p1__85573_SHARP_.call(null,G__85592));
})() - (2));
})(G__85590)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),(function (){var fexpr__85593 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85593.cljs$core$IFn$_invoke$arity$1 ? fexpr__85593.cljs$core$IFn$_invoke$arity$1(G__85590) : fexpr__85593.call(null,G__85590));
})()], null))], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0))], 0));
})();
sicmutils.simplify.rules.half_angle = (function sicmutils$simplify$rules$half_angle(simplify){
var sin_half_angle_formula = (function sicmutils$simplify$rules$half_angle_$_sin_half_angle_formula(theta){
var thetas = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(theta) : simplify.call(null,theta));
var and__4251__auto__ = sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"non-negative?","non-negative?",1248641804,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(2),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-1),thetas], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(4),new cljs.core.Symbol(null,"pi","pi",176774184,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor","floor",-772394748,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),thetas,cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(4),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null))], null))], null))], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})(),new cljs.core.Symbol(null,"sin-half-angle-formula","sin-half-angle-formula",1943828750,null));
if(cljs.core.truth_(and__4251__auto__)){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),theta], null))], null)),(2)], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
} else {
return and__4251__auto__;
}
});
var cos_half_angle_formula = (function sicmutils$simplify$rules$half_angle_$_cos_half_angle_formula(theta){
var thetas = (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(theta) : simplify.call(null,theta));
var and__4251__auto__ = sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"non-negative?","non-negative?",1248641804,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),thetas,cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(4),new cljs.core.Symbol(null,"pi","pi",176774184,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"floor","floor",-772394748,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),thetas], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(4),new cljs.core.Symbol(null,"pi","pi",176774184,null)], null))], null))], null))], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})(),new cljs.core.Symbol(null,"cos-half-angle-formula","cos-half-angle-formula",-1744663300,null));
if(cljs.core.truth_(and__4251__auto__)){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),theta], null))], null)),(2)], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
} else {
return and__4251__auto__;
}
});
return pattern.rule.attempt(pattern.rule.guard((function (_){
return sicmutils.simplify.rules._STAR_half_angle_simplify_QMARK__STAR_;
}),pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null))),(function (p1__85594_SHARP_){
return sin_half_angle_formula((function (){var G__85612 = p1__85594_SHARP_;
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__85613 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85613.cljs$core$IFn$_invoke$arity$1 ? fexpr__85613.cljs$core$IFn$_invoke$arity$1(G__85612) : fexpr__85613.call(null,G__85612));
})()], null),(function (){var fexpr__85614 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__85614.cljs$core$IFn$_invoke$arity$1 ? fexpr__85614.cljs$core$IFn$_invoke$arity$1(G__85612) : fexpr__85614.call(null,G__85612));
})()));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})());
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null))),(function (p1__85595_SHARP_){
return sin_half_angle_formula((function (){var G__85623 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__85595_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85595_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85623) : p1__85595_SHARP_.call(null,G__85623));
})());
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y","??y",-1087769442,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null))),(function (p1__85596_SHARP_){
return cos_half_angle_formula((function (){var G__85624 = p1__85596_SHARP_;
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__85625 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85625.cljs$core$IFn$_invoke$arity$1 ? fexpr__85625.cljs$core$IFn$_invoke$arity$1(G__85624) : fexpr__85625.call(null,G__85624));
})()], null),(function (){var fexpr__85626 = new cljs.core.Symbol(null,"??y","??y",-1087769442,null);
return (fexpr__85626.cljs$core$IFn$_invoke$arity$1 ? fexpr__85626.cljs$core$IFn$_invoke$arity$1(G__85624) : fexpr__85626.call(null,G__85624));
})()));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})());
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null))),(function (p1__85597_SHARP_){
return cos_half_angle_formula((function (){var G__85627 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__85597_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85597_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85627) : p1__85597_SHARP_.call(null,G__85627));
})());
}))], 0))], 0))));
});
sicmutils.simplify.rules.sin_sq__GT_cos_sq = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__85633){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__85634 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85634.cljs$core$IFn$_invoke$arity$1 ? fexpr__85634.cljs$core$IFn$_invoke$arity$1(G__85633) : fexpr__85634.call(null,G__85633));
})()], null)),(function (p1__85632_SHARP_){
return ((function (){var G__85635 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__85632_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85632_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85635) : p1__85632_SHARP_.call(null,G__85635));
})() - (2));
})(G__85633)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__85636 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85636.cljs$core$IFn$_invoke$arity$1 ? fexpr__85636.cljs$core$IFn$_invoke$arity$1(G__85633) : fexpr__85636.call(null,G__85633));
})()], null)),(2)], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.cos_sq__GT_sin_sq = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__85638){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__85639 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85639.cljs$core$IFn$_invoke$arity$1 ? fexpr__85639.cljs$core$IFn$_invoke$arity$1(G__85638) : fexpr__85639.call(null,G__85638));
})()], null)),(function (p1__85637_SHARP_){
return ((function (){var G__85640 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__85637_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85637_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85640) : p1__85637_SHARP_.call(null,G__85640));
})() - (2));
})(G__85638)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__85641 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85641.cljs$core$IFn$_invoke$arity$1 ? fexpr__85641.cljs$core$IFn$_invoke$arity$1(G__85638) : fexpr__85641.call(null,G__85638));
})()], null)),(2)], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.split_high_degree_sincos = (function (){var remaining = (function sicmutils$simplify$rules$remaining(p__85654){
var map__85655 = p__85654;
var map__85655__$1 = cljs.core.__destructure_map(map__85655);
var m = map__85655__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85655__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var n_2 = sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(n,(2));
if(sicmutils.value.one_QMARK_(n_2)){
var G__85656 = m;
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__85657 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__85657.cljs$core$IFn$_invoke$arity$1 ? fexpr__85657.cljs$core$IFn$_invoke$arity$1(G__85656) : fexpr__85657.call(null,G__85656));
})(),(function (){var fexpr__85658 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85658.cljs$core$IFn$_invoke$arity$1 ? fexpr__85658.cljs$core$IFn$_invoke$arity$1(G__85656) : fexpr__85658.call(null,G__85656));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
} else {
var G__85659 = m;
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__85660 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__85660.cljs$core$IFn$_invoke$arity$1 ? fexpr__85660.cljs$core$IFn$_invoke$arity$1(G__85659) : fexpr__85660.call(null,G__85659));
})(),(function (){var fexpr__85661 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85661.cljs$core$IFn$_invoke$arity$1 ? fexpr__85661.cljs$core$IFn$_invoke$arity$1(G__85659) : fexpr__85661.call(null,G__85659));
})()], null)),n_2], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}
});
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null], null), null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.more_than_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f2","??f2",745277317,null),null,(1),null)),(2),null)),(3),null)),(4),null)),pattern.rule._EQ__GT_),(function (G__85662){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__85663 = new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null);
return (fexpr__85663.cljs$core$IFn$_invoke$arity$1 ? fexpr__85663.cljs$core$IFn$_invoke$arity$1(G__85662) : fexpr__85663.call(null,G__85662));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__85664 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__85664.cljs$core$IFn$_invoke$arity$1 ? fexpr__85664.cljs$core$IFn$_invoke$arity$1(G__85662) : fexpr__85664.call(null,G__85662));
})(),(function (){var fexpr__85665 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85665.cljs$core$IFn$_invoke$arity$1 ? fexpr__85665.cljs$core$IFn$_invoke$arity$1(G__85662) : fexpr__85665.call(null,G__85662));
})()], null)),(2)], null)),remaining(G__85662)], null),(function (){var fexpr__85666 = new cljs.core.Symbol(null,"??f2","??f2",745277317,null);
return (fexpr__85666.cljs$core$IFn$_invoke$arity$1 ? fexpr__85666.cljs$core$IFn$_invoke$arity$1(G__85662) : fexpr__85666.call(null,G__85662));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null], null), null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.more_than_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),null,(1),null)),(2),null)),(3),null)),(4),null)),pattern.rule._EQ__GT_),(function (G__85667){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__85668 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__85668.cljs$core$IFn$_invoke$arity$1 ? fexpr__85668.cljs$core$IFn$_invoke$arity$1(G__85667) : fexpr__85668.call(null,G__85667));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__85669 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__85669.cljs$core$IFn$_invoke$arity$1 ? fexpr__85669.cljs$core$IFn$_invoke$arity$1(G__85667) : fexpr__85669.call(null,G__85667));
})(),(function (){var fexpr__85670 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85670.cljs$core$IFn$_invoke$arity$1 ? fexpr__85670.cljs$core$IFn$_invoke$arity$1(G__85667) : fexpr__85670.call(null,G__85667));
})()], null)),(2)], null)),remaining(G__85667)], null))], null),(function (){var fexpr__85671 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__85671.cljs$core$IFn$_invoke$arity$1 ? fexpr__85671.cljs$core$IFn$_invoke$arity$1(G__85667) : fexpr__85671.call(null,G__85667));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0))], 0));
})();
sicmutils.simplify.rules.flush_obvious_ones = (function sicmutils$simplify$rules$flush_obvious_ones(simplify){
var _QMARK_op = pattern.match.bind.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"?op","?op",-135731883,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null], null), null));
var _QMARK_flipped = pattern.match.or.cljs$core$IFn$_invoke$arity$variadic(pattern.match.and.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.match.frame_predicate((function (p1__85672_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var G__85677 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (p1__85672_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85672_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85677) : p1__85672_SHARP_.call(null,G__85677));
})());
}))], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.match.and.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.match.frame_predicate((function (p1__85673_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var G__85678 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (p1__85673_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85673_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85678) : p1__85673_SHARP_.call(null,G__85678));
})());
}))], 0))], 0));
var pred = (function sicmutils$simplify$rules$flush_obvious_ones_$_pred(m){
var s1 = (function (){var G__85688 = (function (){var G__85689 = m;
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__85690 = new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null);
return (fexpr__85690.cljs$core$IFn$_invoke$arity$1 ? fexpr__85690.cljs$core$IFn$_invoke$arity$1(G__85689) : fexpr__85690.call(null,G__85689));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85691 = new cljs.core.Symbol(null,"??f2","??f2",745277317,null);
return (fexpr__85691.cljs$core$IFn$_invoke$arity$1 ? fexpr__85691.cljs$core$IFn$_invoke$arity$1(G__85689) : fexpr__85691.call(null,G__85689));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__85688) : simplify.call(null,G__85688));
})();
var s2 = (function (){var G__85692 = (function (){var G__85693 = m;
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__85694 = new cljs.core.Symbol(null,"??f3","??f3",-1809203400,null);
return (fexpr__85694.cljs$core$IFn$_invoke$arity$1 ? fexpr__85694.cljs$core$IFn$_invoke$arity$1(G__85693) : fexpr__85694.call(null,G__85693));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85695 = new cljs.core.Symbol(null,"??f4","??f4",1817370441,null);
return (fexpr__85695.cljs$core$IFn$_invoke$arity$1 ? fexpr__85695.cljs$core$IFn$_invoke$arity$1(G__85693) : fexpr__85695.call(null,G__85693));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})();
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__85692) : simplify.call(null,G__85692));
})();
if(sicmutils.value.exact_zero_QMARK_((function (){var G__85696 = (new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,s1,(new cljs.core.List(null,s2,null,(1),null)),(2),null)),(3),null));
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(G__85696) : simplify.call(null,G__85696));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?s1","?s1",-1174751069,null),s1], null);
} else {
return null;
}
});
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,_QMARK_op,(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,_QMARK_flipped,(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__85697){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(1)], null),(function (){var fexpr__85698 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__85698.cljs$core$IFn$_invoke$arity$1 ? fexpr__85698.cljs$core$IFn$_invoke$arity$1(G__85697) : fexpr__85698.call(null,G__85697));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85699 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__85699.cljs$core$IFn$_invoke$arity$1 ? fexpr__85699.cljs$core$IFn$_invoke$arity$1(G__85697) : fexpr__85699.call(null,G__85697));
})(),(function (){var fexpr__85700 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__85700.cljs$core$IFn$_invoke$arity$1 ? fexpr__85700.cljs$core$IFn$_invoke$arity$1(G__85697) : fexpr__85700.call(null,G__85697));
})()], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f1","??f1",-1548442439,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,_QMARK_op,(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f2","??f2",745277317,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f3","??f3",-1809203400,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,_QMARK_flipped,(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f4","??f4",1817370441,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pred),(function (G__85701){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__85702 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__85702.cljs$core$IFn$_invoke$arity$1 ? fexpr__85702.cljs$core$IFn$_invoke$arity$1(G__85701) : fexpr__85702.call(null,G__85701));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85703 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__85703.cljs$core$IFn$_invoke$arity$1 ? fexpr__85703.cljs$core$IFn$_invoke$arity$1(G__85701) : fexpr__85703.call(null,G__85701));
})(),(function (){var fexpr__85704 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__85704.cljs$core$IFn$_invoke$arity$1 ? fexpr__85704.cljs$core$IFn$_invoke$arity$1(G__85701) : fexpr__85704.call(null,G__85701));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__85705 = new cljs.core.Symbol(null,"?s1","?s1",-1174751069,null);
return (fexpr__85705.cljs$core$IFn$_invoke$arity$1 ? fexpr__85705.cljs$core$IFn$_invoke$arity$1(G__85701) : fexpr__85705.call(null,G__85701));
})()], null)], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
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
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var pred = (function sicmutils$simplify$rules$sincos_random_$_pred(p__85712){
var map__85713 = p__85712;
var map__85713__$1 = cljs.core.__destructure_map(map__85713);
var m = map__85713__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85713__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85713__$1,new cljs.core.Symbol(null,"?op","?op",-135731883,null));
if(cljs.core.truth_(simplifies_to_zero_QMARK_((function (){var G__85714 = m;
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__85715 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__85715.cljs$core$IFn$_invoke$arity$1 ? fexpr__85715.cljs$core$IFn$_invoke$arity$1(G__85714) : fexpr__85715.call(null,G__85714));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__85716 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__85716.cljs$core$IFn$_invoke$arity$1 ? fexpr__85716.cljs$core$IFn$_invoke$arity$1(G__85714) : fexpr__85716.call(null,G__85714));
})(),(function (){var fexpr__85717 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85717.cljs$core$IFn$_invoke$arity$1 ? fexpr__85717.cljs$core$IFn$_invoke$arity$1(G__85714) : fexpr__85717.call(null,G__85714));
})()], null)),sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(n,(2))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})()))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null),(flip.cljs$core$IFn$_invoke$arity$1 ? flip.cljs$core$IFn$_invoke$arity$1(op) : flip.call(null,op))], null);
} else {
return null;
}
});
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,ops,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pred),(function (G__85719){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__85720 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__85720.cljs$core$IFn$_invoke$arity$1 ? fexpr__85720.cljs$core$IFn$_invoke$arity$1(G__85719) : fexpr__85720.call(null,G__85719));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85721 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__85721.cljs$core$IFn$_invoke$arity$1 ? fexpr__85721.cljs$core$IFn$_invoke$arity$1(G__85719) : fexpr__85721.call(null,G__85719));
})(),(function (){var fexpr__85722 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__85722.cljs$core$IFn$_invoke$arity$1 ? fexpr__85722.cljs$core$IFn$_invoke$arity$1(G__85719) : fexpr__85722.call(null,G__85719));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__85723 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__85723.cljs$core$IFn$_invoke$arity$1 ? fexpr__85723.cljs$core$IFn$_invoke$arity$1(G__85719) : fexpr__85723.call(null,G__85719));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__85724 = new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null);
return (fexpr__85724.cljs$core$IFn$_invoke$arity$1 ? fexpr__85724.cljs$core$IFn$_invoke$arity$1(G__85719) : fexpr__85724.call(null,G__85719));
})(),(function (){var fexpr__85725 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85725.cljs$core$IFn$_invoke$arity$1 ? fexpr__85725.cljs$core$IFn$_invoke$arity$1(G__85719) : fexpr__85725.call(null,G__85719));
})()], null)),(2)], null))], null))], null)], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,ops,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pred),(function (G__85726){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__85727 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__85727.cljs$core$IFn$_invoke$arity$1 ? fexpr__85727.cljs$core$IFn$_invoke$arity$1(G__85726) : fexpr__85727.call(null,G__85726));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85728 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__85728.cljs$core$IFn$_invoke$arity$1 ? fexpr__85728.cljs$core$IFn$_invoke$arity$1(G__85726) : fexpr__85728.call(null,G__85726));
})(),(function (){var fexpr__85729 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__85729.cljs$core$IFn$_invoke$arity$1 ? fexpr__85729.cljs$core$IFn$_invoke$arity$1(G__85726) : fexpr__85729.call(null,G__85726));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__85730 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__85730.cljs$core$IFn$_invoke$arity$1 ? fexpr__85730.cljs$core$IFn$_invoke$arity$1(G__85726) : fexpr__85730.call(null,G__85726));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__85731 = new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null);
return (fexpr__85731.cljs$core$IFn$_invoke$arity$1 ? fexpr__85731.cljs$core$IFn$_invoke$arity$1(G__85726) : fexpr__85731.call(null,G__85726));
})(),(function (){var fexpr__85732 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85732.cljs$core$IFn$_invoke$arity$1 ? fexpr__85732.cljs$core$IFn$_invoke$arity$1(G__85726) : fexpr__85732.call(null,G__85726));
})()], null)),(2)], null))], null))], null)], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0));
})(),(function (){var pred = (function sicmutils$simplify$rules$sincos_random_$_pred(p__85741){
var map__85742 = p__85741;
var map__85742__$1 = cljs.core.__destructure_map(map__85742);
var m = map__85742__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85742__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85742__$1,new cljs.core.Symbol(null,"?op","?op",-135731883,null));
if(cljs.core.truth_(simplifies_to_zero_QMARK_((function (){var G__85743 = m;
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__85744 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__85744.cljs$core$IFn$_invoke$arity$1 ? fexpr__85744.cljs$core$IFn$_invoke$arity$1(G__85743) : fexpr__85744.call(null,G__85743));
})(),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__85745 = new cljs.core.Symbol(null,"??b1","??b1",-1771260238,null);
return (fexpr__85745.cljs$core$IFn$_invoke$arity$1 ? fexpr__85745.cljs$core$IFn$_invoke$arity$1(G__85743) : fexpr__85745.call(null,G__85743));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85746 = new cljs.core.Symbol(null,"??b2","??b2",1805392567,null);
return (fexpr__85746.cljs$core$IFn$_invoke$arity$1 ? fexpr__85746.cljs$core$IFn$_invoke$arity$1(G__85743) : fexpr__85746.call(null,G__85743));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__85747 = new cljs.core.Symbol(null,"?op","?op",-135731883,null);
return (fexpr__85747.cljs$core$IFn$_invoke$arity$1 ? fexpr__85747.cljs$core$IFn$_invoke$arity$1(G__85743) : fexpr__85747.call(null,G__85743));
})(),(function (){var fexpr__85748 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85748.cljs$core$IFn$_invoke$arity$1 ? fexpr__85748.cljs$core$IFn$_invoke$arity$1(G__85743) : fexpr__85748.call(null,G__85743));
})()], null)),sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(n,(2))], null))], null)], 0)))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})()))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null),(flip.cljs$core$IFn$_invoke$arity$1 ? flip.cljs$core$IFn$_invoke$arity$1(op) : flip.call(null,op))], null);
} else {
return null;
}
});
return pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b1","??b1",-1771260238,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,ops,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b2","??b2",1805392567,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pred),(function (G__85750){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__85751 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__85751.cljs$core$IFn$_invoke$arity$1 ? fexpr__85751.cljs$core$IFn$_invoke$arity$1(G__85750) : fexpr__85751.call(null,G__85750));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85752 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__85752.cljs$core$IFn$_invoke$arity$1 ? fexpr__85752.cljs$core$IFn$_invoke$arity$1(G__85750) : fexpr__85752.call(null,G__85750));
})(),(function (){var fexpr__85753 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__85753.cljs$core$IFn$_invoke$arity$1 ? fexpr__85753.cljs$core$IFn$_invoke$arity$1(G__85750) : fexpr__85753.call(null,G__85750));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__85754 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__85754.cljs$core$IFn$_invoke$arity$1 ? fexpr__85754.cljs$core$IFn$_invoke$arity$1(G__85750) : fexpr__85754.call(null,G__85750));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__85755 = new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null);
return (fexpr__85755.cljs$core$IFn$_invoke$arity$1 ? fexpr__85755.cljs$core$IFn$_invoke$arity$1(G__85750) : fexpr__85755.call(null,G__85750));
})(),(function (){var fexpr__85756 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85756.cljs$core$IFn$_invoke$arity$1 ? fexpr__85756.cljs$core$IFn$_invoke$arity$1(G__85750) : fexpr__85756.call(null,G__85750));
})()], null)),(2)], null))], null))], null)], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a1","??a1",2070706636,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b1","??b1",-1771260238,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?op","?op",-135731883,null),(new cljs.core.List(null,ops,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.simplify.rules.at_least_two_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??b2","??b2",1805392567,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a2","??a2",-73012434,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pred),(function (G__85757){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (){var fexpr__85758 = new cljs.core.Symbol(null,"??a1","??a1",2070706636,null);
return (fexpr__85758.cljs$core$IFn$_invoke$arity$1 ? fexpr__85758.cljs$core$IFn$_invoke$arity$1(G__85757) : fexpr__85758.call(null,G__85757));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85759 = new cljs.core.Symbol(null,"??a2","??a2",-73012434,null);
return (fexpr__85759.cljs$core$IFn$_invoke$arity$1 ? fexpr__85759.cljs$core$IFn$_invoke$arity$1(G__85757) : fexpr__85759.call(null,G__85757));
})(),(function (){var fexpr__85760 = new cljs.core.Symbol(null,"??a3","??a3",-1861674627,null);
return (fexpr__85760.cljs$core$IFn$_invoke$arity$1 ? fexpr__85760.cljs$core$IFn$_invoke$arity$1(G__85757) : fexpr__85760.call(null,G__85757));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__85761 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__85761.cljs$core$IFn$_invoke$arity$1 ? fexpr__85761.cljs$core$IFn$_invoke$arity$1(G__85757) : fexpr__85761.call(null,G__85757));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__85762 = new cljs.core.Symbol(null,"?other-op","?other-op",-881473313,null);
return (fexpr__85762.cljs$core$IFn$_invoke$arity$1 ? fexpr__85762.cljs$core$IFn$_invoke$arity$1(G__85757) : fexpr__85762.call(null,G__85757));
})(),(function (){var fexpr__85763 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85763.cljs$core$IFn$_invoke$arity$1 ? fexpr__85763.cljs$core$IFn$_invoke$arity$1(G__85757) : fexpr__85763.call(null,G__85757));
})()], null)),(2)], null))], null))], null)], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0));
})()], 0));
});
sicmutils.simplify.rules.sincos__GT_exp1 = (function (){var _I = sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I);
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85764){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__85765 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85765.cljs$core$IFn$_invoke$arity$1 ? fexpr__85765.cljs$core$IFn$_invoke$arity$1(G__85764) : fexpr__85765.call(null,G__85764));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),_I,(function (){var fexpr__85766 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85766.cljs$core$IFn$_invoke$arity$1 ? fexpr__85766.cljs$core$IFn$_invoke$arity$1(G__85764) : fexpr__85766.call(null,G__85764));
})()], null))], null))], null)),sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$2(0.0,2.0)], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85767){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__85768 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85768.cljs$core$IFn$_invoke$arity$1 ? fexpr__85768.cljs$core$IFn$_invoke$arity$1(G__85767) : fexpr__85768.call(null,G__85767));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),_I,(function (){var fexpr__85769 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85769.cljs$core$IFn$_invoke$arity$1 ? fexpr__85769.cljs$core$IFn$_invoke$arity$1(G__85767) : fexpr__85769.call(null,G__85767));
})()], null))], null))], null)),(2)], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0))], 0));
})();
sicmutils.simplify.rules.sincos__GT_exp2 = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85770){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__85771 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85771.cljs$core$IFn$_invoke$arity$1 ? fexpr__85771.cljs$core$IFn$_invoke$arity$1(G__85770) : fexpr__85771.call(null,G__85770));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__85772 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85772.cljs$core$IFn$_invoke$arity$1 ? fexpr__85772.cljs$core$IFn$_invoke$arity$1(G__85770) : fexpr__85772.call(null,G__85770));
})()], null))], null))], null))], null)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),sicmutils.complex.I)], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85773){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__85774 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85774.cljs$core$IFn$_invoke$arity$1 ? fexpr__85774.cljs$core$IFn$_invoke$arity$1(G__85773) : fexpr__85774.call(null,G__85773));
})()], null))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__85775 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85775.cljs$core$IFn$_invoke$arity$1 ? fexpr__85775.cljs$core$IFn$_invoke$arity$1(G__85773) : fexpr__85775.call(null,G__85773));
})()], null))], null))], null))], null)),(2)], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
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
var im = sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__85791 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(G__85791) : m.call(null,G__85791));
})());
if(cljs.core.truth_(positive_QMARK_(im))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?im","?im",120320525,null),im], null);
} else {
return null;
}
});
var neg_pred = (function sicmutils$simplify$rules$neg_pred(m){
var im = sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__85792 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(G__85792) : m.call(null,G__85792));
})());
if(cljs.core.truth_(sicmutils.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(im))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"?im","?im",120320525,null),im], null);
} else {
return null;
}
});
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,sicmutils.simplify.rules.imaginary_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pos_pred),(function (G__85793){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__85794 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__85794.cljs$core$IFn$_invoke$arity$1 ? fexpr__85794.cljs$core$IFn$_invoke$arity$1(G__85793) : fexpr__85794.call(null,G__85793));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__85795 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__85795.cljs$core$IFn$_invoke$arity$1 ? fexpr__85795.cljs$core$IFn$_invoke$arity$1(G__85793) : fexpr__85795.call(null,G__85793));
})()], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,sicmutils.simplify.rules.imaginary_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),neg_pred),(function (G__85796){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (p1__85776_SHARP_){
return (- (function (){var G__85797 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__85776_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85776_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85797) : p1__85776_SHARP_.call(null,G__85797));
})());
})(G__85796)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (p1__85777_SHARP_){
return (- (function (){var G__85798 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__85777_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85777_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85798) : p1__85777_SHARP_.call(null,G__85798));
})());
})(G__85796)], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,sicmutils.simplify.rules.imaginary_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f","??f",-94026515,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pos_pred),(function (G__85799){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__85800 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__85800.cljs$core$IFn$_invoke$arity$1 ? fexpr__85800.cljs$core$IFn$_invoke$arity$1(G__85799) : fexpr__85800.call(null,G__85799));
})()], null),(function (){var fexpr__85801 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__85801.cljs$core$IFn$_invoke$arity$1 ? fexpr__85801.cljs$core$IFn$_invoke$arity$1(G__85799) : fexpr__85801.call(null,G__85799));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__85802 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__85802.cljs$core$IFn$_invoke$arity$1 ? fexpr__85802.cljs$core$IFn$_invoke$arity$1(G__85799) : fexpr__85802.call(null,G__85799));
})()], null),(function (){var fexpr__85803 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__85803.cljs$core$IFn$_invoke$arity$1 ? fexpr__85803.cljs$core$IFn$_invoke$arity$1(G__85799) : fexpr__85803.call(null,G__85799));
})()))], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,sicmutils.simplify.rules.imaginary_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f","??f",-94026515,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),neg_pred),(function (G__85804){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__85778_SHARP_){
return sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__85805 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (p1__85778_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85778_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85805) : p1__85778_SHARP_.call(null,G__85805));
})());
})(G__85804)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__85779_SHARP_){
return (- (function (){var G__85806 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__85779_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85779_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85806) : p1__85779_SHARP_.call(null,G__85806));
})());
})(G__85804)], null),(function (){var fexpr__85807 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__85807.cljs$core$IFn$_invoke$arity$1 ? fexpr__85807.cljs$core$IFn$_invoke$arity$1(G__85804) : fexpr__85807.call(null,G__85804));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__85780_SHARP_){
return (- (function (){var G__85808 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__85780_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85780_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85808) : p1__85780_SHARP_.call(null,G__85808));
})());
})(G__85804)], null),(function (){var fexpr__85809 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__85809.cljs$core$IFn$_invoke$arity$1 ? fexpr__85809.cljs$core$IFn$_invoke$arity$1(G__85804) : fexpr__85809.call(null,G__85804));
})()))], null))], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,sicmutils.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pos_pred),(function (G__85810){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__85781_SHARP_){
return sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__85811 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (p1__85781_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85781_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85811) : p1__85781_SHARP_.call(null,G__85811));
})());
})(G__85810)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__85812 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__85812.cljs$core$IFn$_invoke$arity$1 ? fexpr__85812.cljs$core$IFn$_invoke$arity$1(G__85810) : fexpr__85812.call(null,G__85810));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__85813 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__85813.cljs$core$IFn$_invoke$arity$1 ? fexpr__85813.cljs$core$IFn$_invoke$arity$1(G__85810) : fexpr__85813.call(null,G__85810));
})()], null))], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,sicmutils.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),neg_pred),(function (G__85814){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__85782_SHARP_){
return sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__85815 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (p1__85782_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85782_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85815) : p1__85782_SHARP_.call(null,G__85815));
})());
})(G__85814)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (p1__85783_SHARP_){
return (- (function (){var G__85816 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__85783_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85783_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85816) : p1__85783_SHARP_.call(null,G__85816));
})());
})(G__85814)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (p1__85784_SHARP_){
return (- (function (){var G__85817 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__85784_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85784_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85817) : p1__85784_SHARP_.call(null,G__85817));
})());
})(G__85814)], null))], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,sicmutils.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f","??f",-94026515,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pos_pred),(function (G__85818){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__85785_SHARP_){
return sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__85819 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (p1__85785_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85785_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85819) : p1__85785_SHARP_.call(null,G__85819));
})());
})(G__85818)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__85820 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__85820.cljs$core$IFn$_invoke$arity$1 ? fexpr__85820.cljs$core$IFn$_invoke$arity$1(G__85818) : fexpr__85820.call(null,G__85818));
})()], null),(function (){var fexpr__85821 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__85821.cljs$core$IFn$_invoke$arity$1 ? fexpr__85821.cljs$core$IFn$_invoke$arity$1(G__85818) : fexpr__85821.call(null,G__85818));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__85822 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__85822.cljs$core$IFn$_invoke$arity$1 ? fexpr__85822.cljs$core$IFn$_invoke$arity$1(G__85818) : fexpr__85822.call(null,G__85818));
})()], null),(function (){var fexpr__85823 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__85823.cljs$core$IFn$_invoke$arity$1 ? fexpr__85823.cljs$core$IFn$_invoke$arity$1(G__85818) : fexpr__85823.call(null,G__85818));
})()))], null))], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?c1","?c1",-268581185,null),(new cljs.core.List(null,sicmutils.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??f","??f",-94026515,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),neg_pred),(function (G__85824){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__85786_SHARP_){
return sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__85825 = new cljs.core.Symbol(null,"?c1","?c1",-268581185,null);
return (p1__85786_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85786_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85825) : p1__85786_SHARP_.call(null,G__85825));
})());
})(G__85824)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__85787_SHARP_){
return (- (function (){var G__85826 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__85787_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85787_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85826) : p1__85787_SHARP_.call(null,G__85826));
})());
})(G__85824)], null),(function (){var fexpr__85827 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__85827.cljs$core$IFn$_invoke$arity$1 ? fexpr__85827.cljs$core$IFn$_invoke$arity$1(G__85824) : fexpr__85827.call(null,G__85824));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__85788_SHARP_){
return (- (function (){var G__85828 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (p1__85788_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85788_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85828) : p1__85788_SHARP_.call(null,G__85828));
})());
})(G__85824)], null),(function (){var fexpr__85829 = new cljs.core.Symbol(null,"??f","??f",-94026515,null);
return (fexpr__85829.cljs$core$IFn$_invoke$arity$1 ? fexpr__85829.cljs$core$IFn$_invoke$arity$1(G__85824) : fexpr__85829.call(null,G__85824));
})()))], null))], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0))], 0));
})();
sicmutils.simplify.rules.exp_contract = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x3","??x3",-411077265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x4","?x4",94899597,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x5","??x5",1822045235,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),pattern.rule._EQ__GT_),(function (G__85830){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__85831 = new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null);
return (fexpr__85831.cljs$core$IFn$_invoke$arity$1 ? fexpr__85831.cljs$core$IFn$_invoke$arity$1(G__85830) : fexpr__85831.call(null,G__85830));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85832 = new cljs.core.Symbol(null,"??x3","??x3",-411077265,null);
return (fexpr__85832.cljs$core$IFn$_invoke$arity$1 ? fexpr__85832.cljs$core$IFn$_invoke$arity$1(G__85830) : fexpr__85832.call(null,G__85830));
})(),(function (){var fexpr__85833 = new cljs.core.Symbol(null,"??x5","??x5",1822045235,null);
return (fexpr__85833.cljs$core$IFn$_invoke$arity$1 ? fexpr__85833.cljs$core$IFn$_invoke$arity$1(G__85830) : fexpr__85833.call(null,G__85830));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__85834 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__85834.cljs$core$IFn$_invoke$arity$1 ? fexpr__85834.cljs$core$IFn$_invoke$arity$1(G__85830) : fexpr__85834.call(null,G__85830));
})(),(function (){var fexpr__85835 = new cljs.core.Symbol(null,"?x4","?x4",94899597,null);
return (fexpr__85835.cljs$core$IFn$_invoke$arity$1 ? fexpr__85835.cljs$core$IFn$_invoke$arity$1(G__85830) : fexpr__85835.call(null,G__85830));
})()], null))], null))], null)], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?p","?p",-10896580,null),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__85836){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__85837 = new cljs.core.Symbol(null,"?p","?p",-10896580,null);
return (fexpr__85837.cljs$core$IFn$_invoke$arity$1 ? fexpr__85837.cljs$core$IFn$_invoke$arity$1(G__85836) : fexpr__85837.call(null,G__85836));
})(),(function (){var fexpr__85838 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85838.cljs$core$IFn$_invoke$arity$1 ? fexpr__85838.cljs$core$IFn$_invoke$arity$1(G__85836) : fexpr__85838.call(null,G__85836));
})()], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__85839){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__85840 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85840.cljs$core$IFn$_invoke$arity$1 ? fexpr__85840.cljs$core$IFn$_invoke$arity$1(G__85839) : fexpr__85840.call(null,G__85839));
})(),(function (){var fexpr__85841 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85841.cljs$core$IFn$_invoke$arity$1 ? fexpr__85841.cljs$core$IFn$_invoke$arity$1(G__85839) : fexpr__85841.call(null,G__85839));
})()], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x2","??x2",169445330,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__85842){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__85843 = new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null);
return (fexpr__85843.cljs$core$IFn$_invoke$arity$1 ? fexpr__85843.cljs$core$IFn$_invoke$arity$1(G__85842) : fexpr__85843.call(null,G__85842));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85844 = new cljs.core.Symbol(null,"??x2","??x2",169445330,null);
return (fexpr__85844.cljs$core$IFn$_invoke$arity$1 ? fexpr__85844.cljs$core$IFn$_invoke$arity$1(G__85842) : fexpr__85844.call(null,G__85842));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__85845 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85845.cljs$core$IFn$_invoke$arity$1 ? fexpr__85845.cljs$core$IFn$_invoke$arity$1(G__85842) : fexpr__85845.call(null,G__85842));
})(),(function (){var fexpr__85846 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85846.cljs$core$IFn$_invoke$arity$1 ? fexpr__85846.cljs$core$IFn$_invoke$arity$1(G__85842) : fexpr__85846.call(null,G__85842));
})()], null))], null))], null)], 0)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y1","??y1",-1969315695,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y2","??y2",-796250797,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__85847){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__85848 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85848.cljs$core$IFn$_invoke$arity$1 ? fexpr__85848.cljs$core$IFn$_invoke$arity$1(G__85847) : fexpr__85848.call(null,G__85847));
})(),(function (){var fexpr__85849 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85849.cljs$core$IFn$_invoke$arity$1 ? fexpr__85849.cljs$core$IFn$_invoke$arity$1(G__85847) : fexpr__85849.call(null,G__85847));
})()], null))], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__85850 = new cljs.core.Symbol(null,"??y1","??y1",-1969315695,null);
return (fexpr__85850.cljs$core$IFn$_invoke$arity$1 ? fexpr__85850.cljs$core$IFn$_invoke$arity$1(G__85847) : fexpr__85850.call(null,G__85847));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85851 = new cljs.core.Symbol(null,"??y2","??y2",-796250797,null);
return (fexpr__85851.cljs$core$IFn$_invoke$arity$1 ? fexpr__85851.cljs$core$IFn$_invoke$arity$1(G__85847) : fexpr__85851.call(null,G__85847));
})()], 0)))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??x2","??x2",169445330,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y1","??y1",-1969315695,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?y","?y",-1454470631,null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??y2","??y2",-796250797,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__85852){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__85853 = new cljs.core.Symbol(null,"??x1","??x1",-1923305193,null);
return (fexpr__85853.cljs$core$IFn$_invoke$arity$1 ? fexpr__85853.cljs$core$IFn$_invoke$arity$1(G__85852) : fexpr__85853.call(null,G__85852));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85854 = new cljs.core.Symbol(null,"??x2","??x2",169445330,null);
return (fexpr__85854.cljs$core$IFn$_invoke$arity$1 ? fexpr__85854.cljs$core$IFn$_invoke$arity$1(G__85852) : fexpr__85854.call(null,G__85852));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),(function (){var fexpr__85855 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (fexpr__85855.cljs$core$IFn$_invoke$arity$1 ? fexpr__85855.cljs$core$IFn$_invoke$arity$1(G__85852) : fexpr__85855.call(null,G__85852));
})(),(function (){var fexpr__85856 = new cljs.core.Symbol(null,"?y","?y",-1454470631,null);
return (fexpr__85856.cljs$core$IFn$_invoke$arity$1 ? fexpr__85856.cljs$core$IFn$_invoke$arity$1(G__85852) : fexpr__85856.call(null,G__85852));
})()], null))], null))], null)], 0))),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__85857 = new cljs.core.Symbol(null,"??y1","??y1",-1969315695,null);
return (fexpr__85857.cljs$core$IFn$_invoke$arity$1 ? fexpr__85857.cljs$core$IFn$_invoke$arity$1(G__85852) : fexpr__85857.call(null,G__85852));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85858 = new cljs.core.Symbol(null,"??y2","??y2",-796250797,null);
return (fexpr__85858.cljs$core$IFn$_invoke$arity$1 ? fexpr__85858.cljs$core$IFn$_invoke$arity$1(G__85852) : fexpr__85858.call(null,G__85852));
})()], 0)))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.exp_expand = (function (){var exact_integer_QMARK_ = (function (x){
return ((sicmutils.value.integral_QMARK_(x)) && (sicmutils.value.exact_QMARK_(x)));
});
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x1","?x1",697080023,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85870){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__85871 = new cljs.core.Symbol(null,"?x1","?x1",697080023,null);
return (fexpr__85871.cljs$core$IFn$_invoke$arity$1 ? fexpr__85871.cljs$core$IFn$_invoke$arity$1(G__85870) : fexpr__85871.call(null,G__85870));
})()], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x1","?x1",697080023,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85872){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__85873 = new cljs.core.Symbol(null,"?x1","?x1",697080023,null);
return (fexpr__85873.cljs$core$IFn$_invoke$arity$1 ? fexpr__85873.cljs$core$IFn$_invoke$arity$1(G__85872) : fexpr__85873.call(null,G__85872));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__85874 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__85874.cljs$core$IFn$_invoke$arity$1 ? fexpr__85874.cljs$core$IFn$_invoke$arity$1(G__85872) : fexpr__85874.call(null,G__85872));
})()], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x1","?x1",697080023,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x2","?x2",1502785613,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85875){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (){var fexpr__85876 = new cljs.core.Symbol(null,"?x1","?x1",697080023,null);
return (fexpr__85876.cljs$core$IFn$_invoke$arity$1 ? fexpr__85876.cljs$core$IFn$_invoke$arity$1(G__85875) : fexpr__85876.call(null,G__85875));
})()], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function (){var fexpr__85877 = new cljs.core.Symbol(null,"?x2","?x2",1502785613,null);
return (fexpr__85877.cljs$core$IFn$_invoke$arity$1 ? fexpr__85877.cljs$core$IFn$_invoke$arity$1(G__85875) : fexpr__85877.call(null,G__85875));
})()], null),(function (){var fexpr__85878 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__85878.cljs$core$IFn$_invoke$arity$1 ? fexpr__85878.cljs$core$IFn$_invoke$arity$1(G__85875) : fexpr__85878.call(null,G__85875));
})()))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,sicmutils.simplify.rules.imaginary_integer_QMARK_,(new cljs.core.List(null,(function (p1__85859_SHARP_){
return (sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1(p1__85859_SHARP_) > (1));
}),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85879){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I], null),(function (){var fexpr__85880 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__85880.cljs$core$IFn$_invoke$arity$1 ? fexpr__85880.cljs$core$IFn$_invoke$arity$1(G__85879) : fexpr__85880.call(null,G__85879));
})()))], null)),(function (p1__85860_SHARP_){
return sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__85881 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__85860_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85860_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85881) : p1__85860_SHARP_.call(null,G__85881));
})());
})(G__85879)], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,sicmutils.simplify.rules.imaginary_integer_QMARK_,(new cljs.core.List(null,(function (p1__85861_SHARP_){
return (sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1(p1__85861_SHARP_) < (-1));
}),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85882){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I)], null),(function (){var fexpr__85883 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__85883.cljs$core$IFn$_invoke$arity$1 ? fexpr__85883.cljs$core$IFn$_invoke$arity$1(G__85882) : fexpr__85883.call(null,G__85882));
})()))], null)),(function (p1__85862_SHARP_){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__85884 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__85862_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85862_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85884) : p1__85862_SHARP_.call(null,G__85884));
})()));
})(G__85882)], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,exact_integer_QMARK_,(new cljs.core.List(null,(function (p1__85863_SHARP_){
return (p1__85863_SHARP_ > (1));
}),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85885){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__85886 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__85886.cljs$core$IFn$_invoke$arity$1 ? fexpr__85886.cljs$core$IFn$_invoke$arity$1(G__85885) : fexpr__85886.call(null,G__85885));
})()))], null)),(function (){var fexpr__85887 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__85887.cljs$core$IFn$_invoke$arity$1 ? fexpr__85887.cljs$core$IFn$_invoke$arity$1(G__85885) : fexpr__85887.call(null,G__85885));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,exact_integer_QMARK_,(new cljs.core.List(null,(function (p1__85864_SHARP_){
return (p1__85864_SHARP_ < (-1));
}),null,(1),null)),(2),null)),(3),null)),(4),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85888){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(-1)], null),(function (){var fexpr__85889 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__85889.cljs$core$IFn$_invoke$arity$1 ? fexpr__85889.cljs$core$IFn$_invoke$arity$1(G__85888) : fexpr__85889.call(null,G__85888));
})()))], null)),(function (p1__85865_SHARP_){
return (- (function (){var G__85890 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (p1__85865_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85865_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85890) : p1__85865_SHARP_.call(null,G__85890));
})());
})(G__85888)], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,sicmutils.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85891){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__85866_SHARP_){
return sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__85892 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__85866_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85866_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85892) : p1__85866_SHARP_.call(null,G__85892));
})());
})(G__85891)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),(function (p1__85867_SHARP_){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__85893 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__85867_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85867_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85893) : p1__85867_SHARP_.call(null,G__85893));
})()),(cljs.core.unquote.cljs$core$IFn$_invoke$arity$1 ? cljs.core.unquote.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I) : cljs.core.unquote.call(null,sicmutils.complex.I)));
})(G__85891)], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?x","?x",-555096650,null),(new cljs.core.List(null,sicmutils.simplify.rules.complex_number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85894){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__85868_SHARP_){
return sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1((function (){var G__85895 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__85868_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85868_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85895) : p1__85868_SHARP_.call(null,G__85895));
})());
})(G__85894)], null),(function (){var fexpr__85896 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__85896.cljs$core$IFn$_invoke$arity$1 ? fexpr__85896.cljs$core$IFn$_invoke$arity$1(G__85894) : fexpr__85896.call(null,G__85894));
})()))], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__85869_SHARP_){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1((function (){var G__85897 = new cljs.core.Symbol(null,"?x","?x",-555096650,null);
return (p1__85869_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85869_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85897) : p1__85869_SHARP_.call(null,G__85897));
})()),(cljs.core.unquote.cljs$core$IFn$_invoke$arity$1 ? cljs.core.unquote.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.I) : cljs.core.unquote.call(null,sicmutils.complex.I)));
})(G__85894)], null),(function (){var fexpr__85898 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__85898.cljs$core$IFn$_invoke$arity$1 ? fexpr__85898.cljs$core$IFn$_invoke$arity$1(G__85894) : fexpr__85898.call(null,G__85894));
})()))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0))], 0));
})();
sicmutils.simplify.rules.complex_trig = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,sicmutils.complex.I,null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85899){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),(1)], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),(new cljs.core.List(null,sicmutils.complex.I,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85900){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),(function (){var fexpr__85901 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__85901.cljs$core$IFn$_invoke$arity$1 ? fexpr__85901.cljs$core$IFn$_invoke$arity$1(G__85900) : fexpr__85901.call(null,G__85900));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,sicmutils.complex.I,(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85902){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),(function (){var fexpr__85903 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__85903.cljs$core$IFn$_invoke$arity$1 ? fexpr__85903.cljs$core$IFn$_invoke$arity$1(G__85902) : fexpr__85903.call(null,G__85902));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),(new cljs.core.List(null,sicmutils.complex.I,(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85904){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__85905 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__85905.cljs$core$IFn$_invoke$arity$1 ? fexpr__85905.cljs$core$IFn$_invoke$arity$1(G__85904) : fexpr__85905.call(null,G__85904));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85906 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__85906.cljs$core$IFn$_invoke$arity$1 ? fexpr__85906.cljs$core$IFn$_invoke$arity$1(G__85904) : fexpr__85906.call(null,G__85904));
})()], 0)))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,sicmutils.complex.I,null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85907){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),(1)], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),(new cljs.core.List(null,sicmutils.complex.I,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85908){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),(function (){var fexpr__85909 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__85909.cljs$core$IFn$_invoke$arity$1 ? fexpr__85909.cljs$core$IFn$_invoke$arity$1(G__85908) : fexpr__85909.call(null,G__85908));
})()], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,sicmutils.complex.I,(new cljs.core.List(null,new cljs.core.Symbol(null,"?z","?z",711595547,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85910){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),(function (){var fexpr__85911 = new cljs.core.Symbol(null,"?z","?z",711595547,null);
return (fexpr__85911.cljs$core$IFn$_invoke$arity$1 ? fexpr__85911.cljs$core$IFn$_invoke$arity$1(G__85910) : fexpr__85911.call(null,G__85910));
})()], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null),(new cljs.core.List(null,sicmutils.complex.I,(new cljs.core.List(null,new cljs.core.Symbol(null,"??ys","??ys",1180811471,null),null,(1),null)),(2),null)),(3),null)),(4),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85912){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__85913 = new cljs.core.Symbol(null,"??xs","??xs",-2083850977,null);
return (fexpr__85913.cljs$core$IFn$_invoke$arity$1 ? fexpr__85913.cljs$core$IFn$_invoke$arity$1(G__85912) : fexpr__85913.call(null,G__85912));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__85914 = new cljs.core.Symbol(null,"??ys","??ys",1180811471,null);
return (fexpr__85914.cljs$core$IFn$_invoke$arity$1 ? fexpr__85914.cljs$core$IFn$_invoke$arity$1(G__85912) : fexpr__85914.call(null,G__85912));
})()], 0)))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0))], 0));
sicmutils.simplify.rules.complex_rules = (function (){var ctor = cljs.core.list(new cljs.core.Symbol(null,"?","?",-62633706,null),new cljs.core.Symbol(null,"?op","?op",-135731883,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"make-rectangular","make-rectangular",-1494662174,null),"null",new cljs.core.Symbol(null,"complex","complex",-1238824944,null),"null"], null), null));
return pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,ctor,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?theta","?theta",-893896091,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?theta","?theta",-893896091,null),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__85915){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),sicmutils.complex.I,(function (){var fexpr__85916 = new cljs.core.Symbol(null,"?theta","?theta",-893896091,null);
return (fexpr__85916.cljs$core$IFn$_invoke$arity$1 ? fexpr__85916.cljs$core$IFn$_invoke$arity$1(G__85915) : fexpr__85916.call(null,G__85915));
})()], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"real-part","real-part",-2001752061,null),(new cljs.core.List(null,(new cljs.core.List(null,ctor,(new cljs.core.List(null,new cljs.core.Symbol(null,"?re","?re",118270068,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85917){
var r__84009__auto__ = (function (){var fexpr__85918 = new cljs.core.Symbol(null,"?re","?re",118270068,null);
return (fexpr__85918.cljs$core$IFn$_invoke$arity$1 ? fexpr__85918.cljs$core$IFn$_invoke$arity$1(G__85917) : fexpr__85918.call(null,G__85917));
})();
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"imag-part","imag-part",2028041294,null),(new cljs.core.List(null,(new cljs.core.List(null,ctor,(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?im","?im",120320525,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85919){
var r__84009__auto__ = (function (){var fexpr__85920 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__85920.cljs$core$IFn$_invoke$arity$1 ? fexpr__85920.cljs$core$IFn$_invoke$arity$1(G__85919) : fexpr__85920.call(null,G__85919));
})();
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,ctor,(new cljs.core.List(null,new cljs.core.Symbol(null,"?re","?re",118270068,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?im","?im",120320525,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85921){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__85922 = new cljs.core.Symbol(null,"?re","?re",118270068,null);
return (fexpr__85922.cljs$core$IFn$_invoke$arity$1 ? fexpr__85922.cljs$core$IFn$_invoke$arity$1(G__85921) : fexpr__85922.call(null,G__85921));
})(),(2)], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expt","expt",2123850345,null),(function (){var fexpr__85923 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__85923.cljs$core$IFn$_invoke$arity$1 ? fexpr__85923.cljs$core$IFn$_invoke$arity$1(G__85921) : fexpr__85923.call(null,G__85921));
})(),(2)], null))], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"angle","angle",-1032341515,null),(new cljs.core.List(null,(new cljs.core.List(null,ctor,(new cljs.core.List(null,new cljs.core.Symbol(null,"?re","?re",118270068,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?im","?im",120320525,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85924){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(function (){var fexpr__85925 = new cljs.core.Symbol(null,"?im","?im",120320525,null);
return (fexpr__85925.cljs$core$IFn$_invoke$arity$1 ? fexpr__85925.cljs$core$IFn$_invoke$arity$1(G__85924) : fexpr__85925.call(null,G__85924));
})(),(function (){var fexpr__85926 = new cljs.core.Symbol(null,"?re","?re",118270068,null);
return (fexpr__85926.cljs$core$IFn$_invoke$arity$1 ? fexpr__85926.cljs$core$IFn$_invoke$arity$1(G__85924) : fexpr__85926.call(null,G__85924));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"real-part","real-part",-2001752061,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85927){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__85928 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__85928.cljs$core$IFn$_invoke$arity$1 ? fexpr__85928.cljs$core$IFn$_invoke$arity$1(G__85927) : fexpr__85928.call(null,G__85927));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(function (){var fexpr__85929 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__85929.cljs$core$IFn$_invoke$arity$1 ? fexpr__85929.cljs$core$IFn$_invoke$arity$1(G__85927) : fexpr__85929.call(null,G__85927));
})()], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"imag-part","imag-part",2028041294,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85930){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var fexpr__85931 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__85931.cljs$core$IFn$_invoke$arity$1 ? fexpr__85931.cljs$core$IFn$_invoke$arity$1(G__85930) : fexpr__85931.call(null,G__85930));
})(),cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),(function (){var fexpr__85932 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__85932.cljs$core$IFn$_invoke$arity$1 ? fexpr__85932.cljs$core$IFn$_invoke$arity$1(G__85930) : fexpr__85932.call(null,G__85930));
})()], null))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?m","?m",896026745,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85933){
var r__84009__auto__ = (function (){var fexpr__85934 = new cljs.core.Symbol(null,"?m","?m",896026745,null);
return (fexpr__85934.cljs$core$IFn$_invoke$arity$1 ? fexpr__85934.cljs$core$IFn$_invoke$arity$1(G__85933) : fexpr__85934.call(null,G__85933));
})();
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"angle","angle",-1032341515,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?a","?a",1314302913,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),pattern.rule._EQ__GT_),(function (G__85935){
var r__84009__auto__ = (function (){var fexpr__85936 = new cljs.core.Symbol(null,"?a","?a",1314302913,null);
return (fexpr__85936.cljs$core$IFn$_invoke$arity$1 ? fexpr__85936.cljs$core$IFn$_invoke$arity$1(G__85935) : fexpr__85936.call(null,G__85935));
})();
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}))], 0))], 0));
})();
sicmutils.simplify.rules.divide_numbers_through = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.ruleset_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,new cljs.core.Symbol(null,"?factor","?factor",598737740,null),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__85940){
var r__84009__auto__ = (function (){var fexpr__85941 = new cljs.core.Symbol(null,"?factor","?factor",598737740,null);
return (fexpr__85941.cljs$core$IFn$_invoke$arity$1 ? fexpr__85941.cljs$core$IFn$_invoke$arity$1(G__85940) : fexpr__85941.call(null,G__85940));
})();
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__85942){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__85943 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__85943.cljs$core$IFn$_invoke$arity$1 ? fexpr__85943.cljs$core$IFn$_invoke$arity$1(G__85942) : fexpr__85943.call(null,G__85942));
})()));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__85944){
var r__84009__auto__ = (function (p__85945){
var map__85946 = p__85945;
var map__85946__$1 = cljs.core.__destructure_map(map__85946);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85946__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85946__$1,new cljs.core.Symbol(null,"?d","?d",-1851543854,null));
return sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(n,d);
})(G__85944);
var or__4253__auto__ = r__84009__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??terms","??terms",1737460425,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__85947){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null),(function (p1__85937_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
var G__85948 = p1__85937_SHARP_;
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),n,(function (){var fexpr__85949 = new cljs.core.Symbol(null,"?d","?d",-1851543854,null);
return (fexpr__85949.cljs$core$IFn$_invoke$arity$1 ? fexpr__85949.cljs$core$IFn$_invoke$arity$1(G__85948) : fexpr__85949.call(null,G__85948));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
}),(function (){var G__85950 = new cljs.core.Symbol(null,"??terms","??terms",1737460425,null);
return (p1__85937_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85937_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85950) : p1__85937_SHARP_.call(null,G__85950));
})());
})(G__85947)));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__85951){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p__85952){
var map__85953 = p__85952;
var map__85953__$1 = cljs.core.__destructure_map(map__85953);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85953__$1,new cljs.core.Symbol(null,"?n","?n",-2053238410,null));
var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85953__$1,new cljs.core.Symbol(null,"?d","?d",-1851543854,null));
return sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(n,d);
})(G__85951)], null),(function (){var fexpr__85954 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__85954.cljs$core$IFn$_invoke$arity$1 ? fexpr__85954.cljs$core$IFn$_invoke$arity$1(G__85951) : fexpr__85954.call(null,G__85951));
})()));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__85955){
var r__84009__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__85938_SHARP_){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1((function (){var G__85956 = new cljs.core.Symbol(null,"?d","?d",-1851543854,null);
return (p1__85938_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85938_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85956) : p1__85938_SHARP_.call(null,G__85956));
})());
})(G__85955)], null),(function (){var fexpr__85957 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__85957.cljs$core$IFn$_invoke$arity$1 ? fexpr__85957.cljs$core$IFn$_invoke$arity$1(G__85955) : fexpr__85957.call(null,G__85955));
})()));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?factor","?factor",598737740,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__85958){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__85959 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__85959.cljs$core$IFn$_invoke$arity$1 ? fexpr__85959.cljs$core$IFn$_invoke$arity$1(G__85958) : fexpr__85959.call(null,G__85958));
})(),(function (){var fexpr__85960 = new cljs.core.Symbol(null,"?d","?d",-1851543854,null);
return (fexpr__85960.cljs$core$IFn$_invoke$arity$1 ? fexpr__85960.cljs$core$IFn$_invoke$arity$1(G__85958) : fexpr__85960.call(null,G__85958));
})()], null)),(function (){var fexpr__85961 = new cljs.core.Symbol(null,"?factor","?factor",598737740,null);
return (fexpr__85961.cljs$core$IFn$_invoke$arity$1 ? fexpr__85961.cljs$core$IFn$_invoke$arity$1(G__85958) : fexpr__85961.call(null,G__85958));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"??factors","??factors",1906330792,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__85962){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"/","/",-1371932971,null),(function (){var fexpr__85963 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__85963.cljs$core$IFn$_invoke$arity$1 ? fexpr__85963.cljs$core$IFn$_invoke$arity$1(G__85962) : fexpr__85963.call(null,G__85962));
})(),(function (){var fexpr__85964 = new cljs.core.Symbol(null,"?d","?d",-1851543854,null);
return (fexpr__85964.cljs$core$IFn$_invoke$arity$1 ? fexpr__85964.cljs$core$IFn$_invoke$arity$1(G__85962) : fexpr__85964.call(null,G__85962));
})()], null)),cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),(function (){var fexpr__85965 = new cljs.core.Symbol(null,"??factors","??factors",1906330792,null);
return (fexpr__85965.cljs$core$IFn$_invoke$arity$1 ? fexpr__85965.cljs$core$IFn$_invoke$arity$1(G__85962) : fexpr__85965.call(null,G__85962));
})()))], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
}
})),pattern.rule.rule_STAR_(pattern.rule.pattern_STAR_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?n","?n",-2053238410,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"?","?",-62633706,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?d","?d",-1851543854,null),(new cljs.core.List(null,sicmutils.value.number_QMARK_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),pattern.rule._EQ__GT_),(function (G__85966){
var r__84009__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),(function (p1__85939_SHARP_){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1((function (){var G__85967 = new cljs.core.Symbol(null,"?d","?d",-1851543854,null);
return (p1__85939_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__85939_SHARP_.cljs$core$IFn$_invoke$arity$1(G__85967) : p1__85939_SHARP_.call(null,G__85967));
})());
})(G__85966),(function (){var fexpr__85968 = new cljs.core.Symbol(null,"?n","?n",-2053238410,null);
return (fexpr__85968.cljs$core$IFn$_invoke$arity$1 ? fexpr__85968.cljs$core$IFn$_invoke$arity$1(G__85966) : fexpr__85968.call(null,G__85966));
})()], null));
var or__4253__auto__ = r__84009__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__84009__auto__);
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
var expr_SINGLEQUOTE_ = (function (){var G__85969 = (misc.cljs$core$IFn$_invoke$arity$1 ? misc.cljs$core$IFn$_invoke$arity$1(expr) : misc.call(null,expr));
var G__85969__$1 = ((logexp_QMARK_)?(le.cljs$core$IFn$_invoke$arity$1 ? le.cljs$core$IFn$_invoke$arity$1(G__85969) : le.call(null,G__85969)):G__85969);
var G__85969__$2 = ((mag_QMARK_)?(sicmutils.simplify.rules.magnitude.cljs$core$IFn$_invoke$arity$1 ? sicmutils.simplify.rules.magnitude.cljs$core$IFn$_invoke$arity$1(G__85969__$1) : sicmutils.simplify.rules.magnitude.call(null,G__85969__$1)):G__85969__$1);
var G__85969__$3 = ((invtrig_QMARK_)?(ti.cljs$core$IFn$_invoke$arity$1 ? ti.cljs$core$IFn$_invoke$arity$1(G__85969__$2) : ti.call(null,G__85969__$2)):G__85969__$2);
if(cljs.core.truth_((function (){var and__4251__auto__ = sincos_QMARK_;
if(and__4251__auto__){
return sicmutils.simplify.rules._STAR_sin_cos_simplify_QMARK__STAR_;
} else {
return and__4251__auto__;
}
})())){
return (st.cljs$core$IFn$_invoke$arity$1 ? st.cljs$core$IFn$_invoke$arity$1(G__85969__$3) : st.call(null,G__85969__$3));
} else {
return G__85969__$3;
}
})();
if(((sincos_QMARK_) && (invtrig_QMARK_))){
var G__85970 = (ti.cljs$core$IFn$_invoke$arity$1 ? ti.cljs$core$IFn$_invoke$arity$1(expr_SINGLEQUOTE_) : ti.call(null,expr_SINGLEQUOTE_));
return (sim_root.cljs$core$IFn$_invoke$arity$1 ? sim_root.cljs$core$IFn$_invoke$arity$1(G__85970) : sim_root.call(null,G__85970));
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
