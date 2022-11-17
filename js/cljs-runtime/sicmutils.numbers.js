goog.provide('sicmutils.numbers');
goog.scope(function(){
  sicmutils.numbers.goog$module$goog$math$Long = goog.module.get('goog.math.Long');
});
sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789),new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a,b){
return (a + b);
}));
sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789),new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a,b){
return (a * b);
}));
sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789),new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a,b){
return (a - b);
}));
sicmutils.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
return (- a);
}));
sicmutils.generic.negative_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
return (a < (0));
}));
sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789),new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (b,x){
if((((b < (0))) && ((!((sicmutils.generic.fractional_part.cljs$core$IFn$_invoke$arity$1(x) === (0))))))){
return sicmutils.generic.exp.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(x,sicmutils.generic.log.cljs$core$IFn$_invoke$arity$1(b)));
} else {
return (sicmutils.util.compute_expt.cljs$core$IFn$_invoke$arity$2 ? sicmutils.util.compute_expt.cljs$core$IFn$_invoke$arity$2(b,x) : sicmutils.util.compute_expt.call(null,b,x));
}
}));
sicmutils.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
return (sicmutils.util.compute_abs.cljs$core$IFn$_invoke$arity$1 ? sicmutils.util.compute_abs.cljs$core$IFn$_invoke$arity$1(a) : sicmutils.util.compute_abs.call(null,a));
}));
sicmutils.generic.magnitude.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
return (sicmutils.util.compute_abs.cljs$core$IFn$_invoke$arity$1 ? sicmutils.util.compute_abs.cljs$core$IFn$_invoke$arity$1(a) : sicmutils.util.compute_abs.call(null,a));
}));
sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789),new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a,b){
return (a / b);
}));
sicmutils.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
return ((1) / a);
}));
sicmutils.generic.floor.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
return cljs.core.long$(Math.floor(a));
}));
sicmutils.generic.ceiling.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
return cljs.core.long$(Math.ceil(a));
}));
sicmutils.generic.integer_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
return Math.trunc(a);
}));
sicmutils.generic.infinite_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),(function (_){
return false;
}));
sicmutils.generic.infinite_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
return cljs.core.infinite_QMARK_(a);
}));
sicmutils.generic.real_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
return a;
}));
sicmutils.generic.imag_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (_){
return (0);
}));
sicmutils.generic.angle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
if((a < (0))){
return Math.PI;
} else {
return sicmutils.value.zero_like(a);
}
}));
sicmutils.generic.conjugate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
return a;
}));
sicmutils.generic.sinc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
if(sicmutils.value.zero_QMARK_(a)){
return (1);
} else {
if(cljs.core.truth_(sicmutils.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(a))){
return (0);
} else {
return sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(a),a);

}
}
}));
sicmutils.generic.sin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
return Math.sin(a);
}));
sicmutils.generic.cos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
return Math.cos(a);
}));
sicmutils.generic.tan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
return Math.tan(a);
}));
sicmutils.generic.cosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
return Math.cosh(a);
}));
sicmutils.generic.sinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
return Math.sinh(a);
}));
sicmutils.generic.tanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
return Math.tanh(a);
}));
sicmutils.generic.atan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
return Math.atan(a);
}));
sicmutils.generic.atan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789),new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a,b){
return Math.atan2(a,b);
}));
sicmutils.generic.asin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
if((sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(a) > (1))){
return sicmutils.generic.asin.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$1(a));
} else {
return Math.asin(a);
}
}));
sicmutils.generic.acos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
if((sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(a) > (1))){
return sicmutils.generic.acos.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$1(a));
} else {
return Math.acos(a);
}
}));
sicmutils.generic.acosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
if((a >= (1))){
return Math.acosh(a);
} else {
return sicmutils.generic.acosh.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$1(a));
}
}));

sicmutils.generic.asinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
if((a >= (1))){
return Math.asinh(a);
} else {
return sicmutils.generic.asinh.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$1(a));
}
}));

sicmutils.generic.atanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
if((sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(a) >= (1))){
return sicmutils.generic.atanh.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$1(a));
} else {
return Math.atanh(a);
}
}));
sicmutils.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
if((a < (0))){
return sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$1(a));
} else {
return (sicmutils.util.compute_sqrt.cljs$core$IFn$_invoke$arity$1 ? sicmutils.util.compute_sqrt.cljs$core$IFn$_invoke$arity$1(a) : sicmutils.util.compute_sqrt.call(null,a));
}
}));
sicmutils.generic.log.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
if((a < (0))){
return sicmutils.generic.log.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$1(a));
} else {
return Math.log(a);
}
}));
sicmutils.generic.log10.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [Number], null),(function (x){
if((x < (0))){
return sicmutils.generic.log10.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$1(x));
} else {
return Math.log10(x);
}
}));
sicmutils.generic.log2.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [Number], null),(function (x){
if((x < (0))){
return sicmutils.generic.log2.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$1(x));
} else {
return Math.log2(x);
}
}));
sicmutils.generic.exp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a){
if((a === (0))){
return (1);
} else {
return Math.exp(a);
}
}));
/**
 * Minimum effort division. If `b` and `a` are equal or of opposite sign,
 *   returns 1 or -1 respectively. If `a` is 1 or -1, returns `b` or `-b`
 *   respectively. Else, returns nil.
 */
sicmutils.numbers.careful_divide = (function sicmutils$numbers$careful_divide(b,a){
if(cljs.core.truth_(sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(a,b))){
return sicmutils.value.one_like(a);
} else {
if(cljs.core.truth_(sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(a,sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(b)))){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.value.one_like(a));
} else {
if(sicmutils.value.one_QMARK_(a)){
return b;
} else {
if(sicmutils.value.one_QMARK_(sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(a))){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(b);
} else {
return null;

}
}
}
}
});
sicmutils.generic.exact_divide.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (b,a){
var or__4253__auto__ = sicmutils.numbers.careful_divide(b,a);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.util.illegal(["exact-divide not allowed between: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join(''));
}
}));
sicmutils.generic.quotient.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (b,a){
var or__4253__auto__ = sicmutils.numbers.careful_divide(b,a);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.util.illegal(["quotient not allowed between: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join(''));
}
}));
/**
 * Checked implementation of g/exact-divide general enough to use for any type
 *   that defines g/remainder and g/quotient.
 */
sicmutils.numbers.exact_divide = (function sicmutils$numbers$exact_divide(a,b){
if(sicmutils.value.zero_QMARK_(sicmutils.generic.remainder.cljs$core$IFn$_invoke$arity$2(a,b))){
} else {
throw (new Error("Assert failed: (v/zero? (g/remainder a b))"));
}

return sicmutils.generic.quotient.cljs$core$IFn$_invoke$arity$2(a,b);
});
sicmutils.generic.exact_divide.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231),new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),(function (b,a){
return sicmutils.numbers.exact_divide(b,a);
}));
sicmutils.generic.integer_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),(function (a){
return a;
}));
sicmutils.generic.fractional_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),(function (_){
return (0);
}));
sicmutils.generic.floor.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),(function (a){
return a;
}));
sicmutils.generic.ceiling.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),(function (a){
return a;
}));
sicmutils.generic.quotient.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146),new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),(function (a,b){
return cljs.core.quot(a,b);
}));
sicmutils.generic.remainder.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789),new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a,b){
return cljs.core.rem(a,b);
}));
sicmutils.generic.modulo.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789),new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a,b){
return cljs.core.mod(a,b);
}));
var abs = (function sicmutils$numbers$abs(a){
if((a < (0))){
return (- a);
} else {
return a;
}
});
var bigint_gcd = (function sicmutils$numbers$bigint_gcd(a,b){
var a__$1 = abs(a);
var b__$1 = abs(b);
while(true){
if((b__$1 == (0))){
return a__$1;
} else {
var G__96096 = b__$1;
var G__96097 = (a__$1 % b__$1);
a__$1 = G__96096;
b__$1 = G__96097;
continue;
}
break;
}
});
sicmutils.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146),new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),(function (a,b){
var a__$1 = abs(a);
var b__$1 = abs(b);
while(true){
if((b__$1 === (0))){
return a__$1;
} else {
var G__96098 = b__$1;
var G__96099 = cljs.core.rem(a__$1,b__$1);
a__$1 = G__96098;
b__$1 = G__96099;
continue;
}
break;
}
}));

sicmutils.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,BigInt], null),(function (a,b){
return bigint_gcd(a,b);
}));

sicmutils.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146),BigInt], null),(function (a,b){
return bigint_gcd(BigInt(a),b);
}));

sicmutils.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),(function (a,b){
return bigint_gcd(a,BigInt(b));
}));

sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146),new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),(function (a,b){
if((b < (0))){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1((function (){var G__95866 = a;
var G__95867 = (- b);
return (sicmutils.util.compute_expt.cljs$core$IFn$_invoke$arity$2 ? sicmutils.util.compute_expt.cljs$core$IFn$_invoke$arity$2(G__95866,G__95867) : sicmutils.util.compute_expt.call(null,G__95866,G__95867));
})());
} else {
return (sicmutils.util.compute_expt.cljs$core$IFn$_invoke$arity$2 ? sicmutils.util.compute_expt.cljs$core$IFn$_invoke$arity$2(a,b) : sicmutils.util.compute_expt.call(null,a,b));
}
}));

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231),new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),(function (a,b){
var rem = sicmutils.generic.remainder.cljs$core$IFn$_invoke$arity$2(a,b);
if(sicmutils.value.zero_QMARK_(rem)){
return sicmutils.generic.quotient.cljs$core$IFn$_invoke$arity$2(a,b);
} else {
return sicmutils.ratio.rationalize.cljs$core$IFn$_invoke$arity$2(a,b);
}
}));

sicmutils.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),(function (a){
if(sicmutils.value.one_QMARK_(a)){
return a;
} else {
return sicmutils.ratio.rationalize.cljs$core$IFn$_invoke$arity$2((1),a);
}
}));
sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,BigInt], null),(function (a,b){
return (a + b);
}));

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,BigInt], null),(function (a,b){
return (a * b);
}));

sicmutils.generic.modulo.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,BigInt], null),(function (a,b){
return sicmutils.generic.modulo_default(a,b);
}));

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,BigInt], null),(function (a,b){
return (a - b);
}));

sicmutils.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt], null),(function (a){
return (- a);
}));

sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,BigInt], null),(function (a,b){
if(cljs.core.truth_(sicmutils.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(b))){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(a ** (- b));
} else {
return a ** b;
}
}));

sicmutils.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt], null),(function (a){
if((a < (0))){
return (- a);
} else {
return a;
}
}));

sicmutils.generic.quotient.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,BigInt], null),(function (a,b){
return (a / b);
}));

sicmutils.generic.remainder.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,BigInt], null),(function (a,b){
return (a % b);
}));

sicmutils.generic.magnitude.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt], null),(function (a){
if((a < (0))){
return (- a);
} else {
return a;
}
}));

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,BigInt], null),(function (a,b){
var rem = (a % b);
if(sicmutils.value.zero_QMARK_(rem)){
return (a / b);
} else {
return sicmutils.ratio.rationalize.cljs$core$IFn$_invoke$arity$2(a,b);
}
}));

var seq__95869_96100 = cljs.core.seq(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.add,sicmutils.generic.mul,sicmutils.generic.sub,sicmutils.generic.div,sicmutils.generic.expt,sicmutils.generic.modulo,sicmutils.generic.remainder,sicmutils.generic.quotient], null));
var chunk__95870_96101 = null;
var count__95871_96102 = (0);
var i__95872_96103 = (0);
while(true){
if((i__95872_96103 < count__95871_96102)){
var op_96104 = chunk__95870_96101.cljs$core$IIndexed$_nth$arity$2(null,i__95872_96103);
op_96104.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),((function (seq__95869_96100,chunk__95870_96101,count__95871_96102,i__95872_96103,op_96104){
return (function (a,b){
var G__95889 = a;
var G__95890 = BigInt(b);
return (op_96104.cljs$core$IFn$_invoke$arity$2 ? op_96104.cljs$core$IFn$_invoke$arity$2(G__95889,G__95890) : op_96104.call(null,G__95889,G__95890));
});})(seq__95869_96100,chunk__95870_96101,count__95871_96102,i__95872_96103,op_96104))
);

op_96104.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231),BigInt], null),((function (seq__95869_96100,chunk__95870_96101,count__95871_96102,i__95872_96103,op_96104){
return (function (a,b){
var G__95891 = BigInt(a);
var G__95892 = b;
return (op_96104.cljs$core$IFn$_invoke$arity$2 ? op_96104.cljs$core$IFn$_invoke$arity$2(G__95891,G__95892) : op_96104.call(null,G__95891,G__95892));
});})(seq__95869_96100,chunk__95870_96101,count__95871_96102,i__95872_96103,op_96104))
);

op_96104.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398)], null),((function (seq__95869_96100,chunk__95870_96101,count__95871_96102,i__95872_96103,op_96104){
return (function (a,b){
var G__95893 = Number(a);
var G__95894 = b;
return (op_96104.cljs$core$IFn$_invoke$arity$2 ? op_96104.cljs$core$IFn$_invoke$arity$2(G__95893,G__95894) : op_96104.call(null,G__95893,G__95894));
});})(seq__95869_96100,chunk__95870_96101,count__95871_96102,i__95872_96103,op_96104))
);

op_96104.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398),BigInt], null),((function (seq__95869_96100,chunk__95870_96101,count__95871_96102,i__95872_96103,op_96104){
return (function (a,b){
var G__95895 = a;
var G__95896 = Number(b);
return (op_96104.cljs$core$IFn$_invoke$arity$2 ? op_96104.cljs$core$IFn$_invoke$arity$2(G__95895,G__95896) : op_96104.call(null,G__95895,G__95896));
});})(seq__95869_96100,chunk__95870_96101,count__95871_96102,i__95872_96103,op_96104))
);


var G__96105 = seq__95869_96100;
var G__96106 = chunk__95870_96101;
var G__96107 = count__95871_96102;
var G__96108 = (i__95872_96103 + (1));
seq__95869_96100 = G__96105;
chunk__95870_96101 = G__96106;
count__95871_96102 = G__96107;
i__95872_96103 = G__96108;
continue;
} else {
var temp__5753__auto___96109 = cljs.core.seq(seq__95869_96100);
if(temp__5753__auto___96109){
var seq__95869_96114__$1 = temp__5753__auto___96109;
if(cljs.core.chunked_seq_QMARK_(seq__95869_96114__$1)){
var c__4679__auto___96115 = cljs.core.chunk_first(seq__95869_96114__$1);
var G__96116 = cljs.core.chunk_rest(seq__95869_96114__$1);
var G__96117 = c__4679__auto___96115;
var G__96118 = cljs.core.count(c__4679__auto___96115);
var G__96119 = (0);
seq__95869_96100 = G__96116;
chunk__95870_96101 = G__96117;
count__95871_96102 = G__96118;
i__95872_96103 = G__96119;
continue;
} else {
var op_96120 = cljs.core.first(seq__95869_96114__$1);
op_96120.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),((function (seq__95869_96100,chunk__95870_96101,count__95871_96102,i__95872_96103,op_96120,seq__95869_96114__$1,temp__5753__auto___96109){
return (function (a,b){
var G__95897 = a;
var G__95898 = BigInt(b);
return (op_96120.cljs$core$IFn$_invoke$arity$2 ? op_96120.cljs$core$IFn$_invoke$arity$2(G__95897,G__95898) : op_96120.call(null,G__95897,G__95898));
});})(seq__95869_96100,chunk__95870_96101,count__95871_96102,i__95872_96103,op_96120,seq__95869_96114__$1,temp__5753__auto___96109))
);

op_96120.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231),BigInt], null),((function (seq__95869_96100,chunk__95870_96101,count__95871_96102,i__95872_96103,op_96120,seq__95869_96114__$1,temp__5753__auto___96109){
return (function (a,b){
var G__95899 = BigInt(a);
var G__95900 = b;
return (op_96120.cljs$core$IFn$_invoke$arity$2 ? op_96120.cljs$core$IFn$_invoke$arity$2(G__95899,G__95900) : op_96120.call(null,G__95899,G__95900));
});})(seq__95869_96100,chunk__95870_96101,count__95871_96102,i__95872_96103,op_96120,seq__95869_96114__$1,temp__5753__auto___96109))
);

op_96120.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398)], null),((function (seq__95869_96100,chunk__95870_96101,count__95871_96102,i__95872_96103,op_96120,seq__95869_96114__$1,temp__5753__auto___96109){
return (function (a,b){
var G__95901 = Number(a);
var G__95902 = b;
return (op_96120.cljs$core$IFn$_invoke$arity$2 ? op_96120.cljs$core$IFn$_invoke$arity$2(G__95901,G__95902) : op_96120.call(null,G__95901,G__95902));
});})(seq__95869_96100,chunk__95870_96101,count__95871_96102,i__95872_96103,op_96120,seq__95869_96114__$1,temp__5753__auto___96109))
);

op_96120.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398),BigInt], null),((function (seq__95869_96100,chunk__95870_96101,count__95871_96102,i__95872_96103,op_96120,seq__95869_96114__$1,temp__5753__auto___96109){
return (function (a,b){
var G__95903 = a;
var G__95904 = Number(b);
return (op_96120.cljs$core$IFn$_invoke$arity$2 ? op_96120.cljs$core$IFn$_invoke$arity$2(G__95903,G__95904) : op_96120.call(null,G__95903,G__95904));
});})(seq__95869_96100,chunk__95870_96101,count__95871_96102,i__95872_96103,op_96120,seq__95869_96114__$1,temp__5753__auto___96109))
);


var G__96123 = cljs.core.next(seq__95869_96114__$1);
var G__96124 = null;
var G__96125 = (0);
var G__96126 = (0);
seq__95869_96100 = G__96123;
chunk__95870_96101 = G__96124;
count__95871_96102 = G__96125;
i__95872_96103 = G__96126;
continue;
}
} else {
}
}
break;
}

var seq__95905_96127 = cljs.core.seq(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.cos,sicmutils.generic.sin,sicmutils.generic.tan,sicmutils.generic.asin,sicmutils.generic.acos,sicmutils.generic.atan,sicmutils.generic.cosh,sicmutils.generic.sinh,sicmutils.generic.tanh,sicmutils.generic.asinh,sicmutils.generic.acosh,sicmutils.generic.acosh,sicmutils.generic.cot,sicmutils.generic.sec,sicmutils.generic.csc,sicmutils.generic.sech,sicmutils.generic.csch,sicmutils.generic.log,sicmutils.generic.exp,sicmutils.generic.sqrt], null));
var chunk__95906_96128 = null;
var count__95907_96129 = (0);
var i__95908_96130 = (0);
while(true){
if((i__95908_96130 < count__95907_96129)){
var op_96131 = chunk__95906_96128.cljs$core$IIndexed$_nth$arity$2(null,i__95908_96130);
op_96131.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt], null),((function (seq__95905_96127,chunk__95906_96128,count__95907_96129,i__95908_96130,op_96131){
return (function (a){
var G__95911 = Number(a);
return (op_96131.cljs$core$IFn$_invoke$arity$1 ? op_96131.cljs$core$IFn$_invoke$arity$1(G__95911) : op_96131.call(null,G__95911));
});})(seq__95905_96127,chunk__95906_96128,count__95907_96129,i__95908_96130,op_96131))
);


var G__96132 = seq__95905_96127;
var G__96133 = chunk__95906_96128;
var G__96134 = count__95907_96129;
var G__96135 = (i__95908_96130 + (1));
seq__95905_96127 = G__96132;
chunk__95906_96128 = G__96133;
count__95907_96129 = G__96134;
i__95908_96130 = G__96135;
continue;
} else {
var temp__5753__auto___96136 = cljs.core.seq(seq__95905_96127);
if(temp__5753__auto___96136){
var seq__95905_96137__$1 = temp__5753__auto___96136;
if(cljs.core.chunked_seq_QMARK_(seq__95905_96137__$1)){
var c__4679__auto___96138 = cljs.core.chunk_first(seq__95905_96137__$1);
var G__96139 = cljs.core.chunk_rest(seq__95905_96137__$1);
var G__96140 = c__4679__auto___96138;
var G__96141 = cljs.core.count(c__4679__auto___96138);
var G__96142 = (0);
seq__95905_96127 = G__96139;
chunk__95906_96128 = G__96140;
count__95907_96129 = G__96141;
i__95908_96130 = G__96142;
continue;
} else {
var op_96143 = cljs.core.first(seq__95905_96137__$1);
op_96143.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt], null),((function (seq__95905_96127,chunk__95906_96128,count__95907_96129,i__95908_96130,op_96143,seq__95905_96137__$1,temp__5753__auto___96136){
return (function (a){
var G__95912 = Number(a);
return (op_96143.cljs$core$IFn$_invoke$arity$1 ? op_96143.cljs$core$IFn$_invoke$arity$1(G__95912) : op_96143.call(null,G__95912));
});})(seq__95905_96127,chunk__95906_96128,count__95907_96129,i__95908_96130,op_96143,seq__95905_96137__$1,temp__5753__auto___96136))
);


var G__96144 = cljs.core.next(seq__95905_96137__$1);
var G__96145 = null;
var G__96146 = (0);
var G__96147 = (0);
seq__95905_96127 = G__96144;
chunk__95906_96128 = G__96145;
count__95907_96129 = G__96146;
i__95908_96130 = G__96147;
continue;
}
} else {
}
}
break;
}

sicmutils.generic.atan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (l,r){
return sicmutils.generic.atan.cljs$core$IFn$_invoke$arity$2(Number(l),r);
}));

sicmutils.generic.atan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789),BigInt], null),(function (l,r){
return sicmutils.generic.atan.cljs$core$IFn$_invoke$arity$2(l,Number(r));
}));

sicmutils.generic.atan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,BigInt], null),(function (l,r){
return sicmutils.generic.atan.cljs$core$IFn$_invoke$arity$2(Number(l),Number(r));
}));

sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long,sicmutils.numbers.goog$module$goog$math$Long], null),(function (a,b){
return a.add(b);
}));

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long,sicmutils.numbers.goog$module$goog$math$Long], null),(function (a,b){
return a.multiply(b);
}));

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long,sicmutils.numbers.goog$module$goog$math$Long], null),(function (a,b){
return a.subtract(b);
}));

sicmutils.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long], null),(function (a){
return a.negate();
}));

sicmutils.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long], null),(function (a){
if(cljs.core.truth_(a.isNegative())){
return a.negate();
} else {
return a;
}
}));

sicmutils.generic.remainder.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long,sicmutils.numbers.goog$module$goog$math$Long], null),(function (a,b){
return a.modulo(b);
}));

sicmutils.generic.magnitude.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long], null),(function (a){
if(cljs.core.truth_(a.isNegative())){
return a.negate();
} else {
return a;
}
}));

var long_expt = (function sicmutils$numbers$long_expt(base,pow){
var n = pow;
var y = sicmutils.numbers.goog$module$goog$math$Long.getOne();
var z = base;
while(true){
var t = cljs.core.not(n.isOdd());
var n__$1 = n.shiftRight((1));
if(t){
var G__96151 = n__$1;
var G__96152 = y;
var G__96153 = z.multiply(z);
n = G__96151;
y = G__96152;
z = G__96153;
continue;
} else {
if(cljs.core.truth_(n__$1.isZero())){
return z.multiply(y);
} else {
var G__96154 = n__$1;
var G__96155 = z.multiply(y);
var G__96156 = z.multiply(z);
n = G__96154;
y = G__96155;
z = G__96156;
continue;

}
}
break;
}
});
sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long,sicmutils.numbers.goog$module$goog$math$Long], null),(function (a,b){
if(cljs.core.truth_(b.isNegative())){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(long_expt(a,b.negate()));
} else {
return long_expt(a,b);
}
}));

var seq__95913_96157 = cljs.core.seq(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.add,sicmutils.generic.mul,sicmutils.generic.sub,sicmutils.generic.gcd,sicmutils.generic.lcm,sicmutils.generic.expt,sicmutils.generic.remainder,sicmutils.generic.quotient], null));
var chunk__95914_96158 = null;
var count__95915_96159 = (0);
var i__95916_96160 = (0);
while(true){
if((i__95916_96160 < count__95915_96159)){
var op_96164 = chunk__95914_96158.cljs$core$IIndexed$_nth$arity$2(null,i__95916_96160);
op_96164.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long,new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),((function (seq__95913_96157,chunk__95914_96158,count__95915_96159,i__95916_96160,op_96164){
return (function (a,b){
var G__95939 = a;
var G__95940 = sicmutils.numbers.goog$module$goog$math$Long.fromNumber(b);
return (op_96164.cljs$core$IFn$_invoke$arity$2 ? op_96164.cljs$core$IFn$_invoke$arity$2(G__95939,G__95940) : op_96164.call(null,G__95939,G__95940));
});})(seq__95913_96157,chunk__95914_96158,count__95915_96159,i__95916_96160,op_96164))
);

op_96164.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146),sicmutils.numbers.goog$module$goog$math$Long], null),((function (seq__95913_96157,chunk__95914_96158,count__95915_96159,i__95916_96160,op_96164){
return (function (a,b){
var G__95941 = sicmutils.numbers.goog$module$goog$math$Long.fromNumber(a);
var G__95942 = b;
return (op_96164.cljs$core$IFn$_invoke$arity$2 ? op_96164.cljs$core$IFn$_invoke$arity$2(G__95941,G__95942) : op_96164.call(null,G__95941,G__95942));
});})(seq__95913_96157,chunk__95914_96158,count__95915_96159,i__95916_96160,op_96164))
);

op_96164.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long,new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398)], null),((function (seq__95913_96157,chunk__95914_96158,count__95915_96159,i__95916_96160,op_96164){
return (function (a,b){
var G__95946 = Number(a);
var G__95947 = b;
return (op_96164.cljs$core$IFn$_invoke$arity$2 ? op_96164.cljs$core$IFn$_invoke$arity$2(G__95946,G__95947) : op_96164.call(null,G__95946,G__95947));
});})(seq__95913_96157,chunk__95914_96158,count__95915_96159,i__95916_96160,op_96164))
);

op_96164.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398),sicmutils.numbers.goog$module$goog$math$Long], null),((function (seq__95913_96157,chunk__95914_96158,count__95915_96159,i__95916_96160,op_96164){
return (function (a,b){
var G__95949 = a;
var G__95950 = Number(b);
return (op_96164.cljs$core$IFn$_invoke$arity$2 ? op_96164.cljs$core$IFn$_invoke$arity$2(G__95949,G__95950) : op_96164.call(null,G__95949,G__95950));
});})(seq__95913_96157,chunk__95914_96158,count__95915_96159,i__95916_96160,op_96164))
);


var G__96165 = seq__95913_96157;
var G__96166 = chunk__95914_96158;
var G__96167 = count__95915_96159;
var G__96168 = (i__95916_96160 + (1));
seq__95913_96157 = G__96165;
chunk__95914_96158 = G__96166;
count__95915_96159 = G__96167;
i__95916_96160 = G__96168;
continue;
} else {
var temp__5753__auto___96169 = cljs.core.seq(seq__95913_96157);
if(temp__5753__auto___96169){
var seq__95913_96170__$1 = temp__5753__auto___96169;
if(cljs.core.chunked_seq_QMARK_(seq__95913_96170__$1)){
var c__4679__auto___96171 = cljs.core.chunk_first(seq__95913_96170__$1);
var G__96173 = cljs.core.chunk_rest(seq__95913_96170__$1);
var G__96174 = c__4679__auto___96171;
var G__96175 = cljs.core.count(c__4679__auto___96171);
var G__96176 = (0);
seq__95913_96157 = G__96173;
chunk__95914_96158 = G__96174;
count__95915_96159 = G__96175;
i__95916_96160 = G__96176;
continue;
} else {
var op_96178 = cljs.core.first(seq__95913_96170__$1);
op_96178.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long,new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),((function (seq__95913_96157,chunk__95914_96158,count__95915_96159,i__95916_96160,op_96178,seq__95913_96170__$1,temp__5753__auto___96169){
return (function (a,b){
var G__95951 = a;
var G__95952 = sicmutils.numbers.goog$module$goog$math$Long.fromNumber(b);
return (op_96178.cljs$core$IFn$_invoke$arity$2 ? op_96178.cljs$core$IFn$_invoke$arity$2(G__95951,G__95952) : op_96178.call(null,G__95951,G__95952));
});})(seq__95913_96157,chunk__95914_96158,count__95915_96159,i__95916_96160,op_96178,seq__95913_96170__$1,temp__5753__auto___96169))
);

op_96178.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146),sicmutils.numbers.goog$module$goog$math$Long], null),((function (seq__95913_96157,chunk__95914_96158,count__95915_96159,i__95916_96160,op_96178,seq__95913_96170__$1,temp__5753__auto___96169){
return (function (a,b){
var G__95955 = sicmutils.numbers.goog$module$goog$math$Long.fromNumber(a);
var G__95956 = b;
return (op_96178.cljs$core$IFn$_invoke$arity$2 ? op_96178.cljs$core$IFn$_invoke$arity$2(G__95955,G__95956) : op_96178.call(null,G__95955,G__95956));
});})(seq__95913_96157,chunk__95914_96158,count__95915_96159,i__95916_96160,op_96178,seq__95913_96170__$1,temp__5753__auto___96169))
);

op_96178.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long,new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398)], null),((function (seq__95913_96157,chunk__95914_96158,count__95915_96159,i__95916_96160,op_96178,seq__95913_96170__$1,temp__5753__auto___96169){
return (function (a,b){
var G__95958 = Number(a);
var G__95959 = b;
return (op_96178.cljs$core$IFn$_invoke$arity$2 ? op_96178.cljs$core$IFn$_invoke$arity$2(G__95958,G__95959) : op_96178.call(null,G__95958,G__95959));
});})(seq__95913_96157,chunk__95914_96158,count__95915_96159,i__95916_96160,op_96178,seq__95913_96170__$1,temp__5753__auto___96169))
);

op_96178.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398),sicmutils.numbers.goog$module$goog$math$Long], null),((function (seq__95913_96157,chunk__95914_96158,count__95915_96159,i__95916_96160,op_96178,seq__95913_96170__$1,temp__5753__auto___96169){
return (function (a,b){
var G__95964 = a;
var G__95965 = Number(b);
return (op_96178.cljs$core$IFn$_invoke$arity$2 ? op_96178.cljs$core$IFn$_invoke$arity$2(G__95964,G__95965) : op_96178.call(null,G__95964,G__95965));
});})(seq__95913_96157,chunk__95914_96158,count__95915_96159,i__95916_96160,op_96178,seq__95913_96170__$1,temp__5753__auto___96169))
);


var G__96188 = cljs.core.next(seq__95913_96170__$1);
var G__96189 = null;
var G__96190 = (0);
var G__96191 = (0);
seq__95913_96157 = G__96188;
chunk__95914_96158 = G__96189;
count__95915_96159 = G__96190;
i__95916_96160 = G__96191;
continue;
}
} else {
}
}
break;
}

sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,goog.math.Integer], null),(function (a,b){
return a.add(b);
}));

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,goog.math.Integer], null),(function (a,b){
return a.multiply(b);
}));

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,goog.math.Integer], null),(function (a,b){
return a.subtract(b);
}));

sicmutils.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer], null),(function (a){
return a.negate();
}));

sicmutils.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer], null),(function (a){
if(cljs.core.truth_(a.isNegative())){
return a.negate();
} else {
return a;
}
}));

sicmutils.generic.remainder.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,goog.math.Integer], null),(function (a,b){
return a.modulo(b);
}));

sicmutils.generic.magnitude.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer], null),(function (a){
if(cljs.core.truth_(a.isNegative())){
return a.negate();
} else {
return a;
}
}));

var int_expt = (function sicmutils$numbers$int_expt(base,pow){
var n = pow;
var y = goog.math.Integer.ONE;
var z = base;
while(true){
var t = cljs.core.not(n.isOdd());
var n__$1 = n.shiftRight((1));
if(t){
var G__96192 = n__$1;
var G__96193 = y;
var G__96194 = z.multiply(z);
n = G__96192;
y = G__96193;
z = G__96194;
continue;
} else {
if(cljs.core.truth_(n__$1.isZero())){
return z.multiply(y);
} else {
var G__96195 = n__$1;
var G__96196 = z.multiply(y);
var G__96197 = z.multiply(z);
n = G__96195;
y = G__96196;
z = G__96197;
continue;

}
}
break;
}
});
sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,goog.math.Integer], null),(function (a,b){
if(cljs.core.truth_(b.isNegative())){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(int_expt(a,b.negate()));
} else {
return int_expt(a,b);
}
}));

var seq__95999_96198 = cljs.core.seq(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.add,sicmutils.generic.mul,sicmutils.generic.sub,sicmutils.generic.gcd,sicmutils.generic.lcm,sicmutils.generic.expt,sicmutils.generic.remainder,sicmutils.generic.quotient], null));
var chunk__96000_96199 = null;
var count__96001_96200 = (0);
var i__96002_96201 = (0);
while(true){
if((i__96002_96201 < count__96001_96200)){
var op_96202 = chunk__96000_96199.cljs$core$IIndexed$_nth$arity$2(null,i__96002_96201);
op_96202.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),((function (seq__95999_96198,chunk__96000_96199,count__96001_96200,i__96002_96201,op_96202){
return (function (a,b){
var G__96053 = a;
var G__96054 = goog.math.Integer.fromNumber(b);
return (op_96202.cljs$core$IFn$_invoke$arity$2 ? op_96202.cljs$core$IFn$_invoke$arity$2(G__96053,G__96054) : op_96202.call(null,G__96053,G__96054));
});})(seq__95999_96198,chunk__96000_96199,count__96001_96200,i__96002_96201,op_96202))
);

op_96202.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146),goog.math.Integer], null),((function (seq__95999_96198,chunk__96000_96199,count__96001_96200,i__96002_96201,op_96202){
return (function (a,b){
var G__96055 = goog.math.Integer.fromNumber(a);
var G__96056 = b;
return (op_96202.cljs$core$IFn$_invoke$arity$2 ? op_96202.cljs$core$IFn$_invoke$arity$2(G__96055,G__96056) : op_96202.call(null,G__96055,G__96056));
});})(seq__95999_96198,chunk__96000_96199,count__96001_96200,i__96002_96201,op_96202))
);

op_96202.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398)], null),((function (seq__95999_96198,chunk__96000_96199,count__96001_96200,i__96002_96201,op_96202){
return (function (a,b){
var G__96058 = Number(a);
var G__96059 = b;
return (op_96202.cljs$core$IFn$_invoke$arity$2 ? op_96202.cljs$core$IFn$_invoke$arity$2(G__96058,G__96059) : op_96202.call(null,G__96058,G__96059));
});})(seq__95999_96198,chunk__96000_96199,count__96001_96200,i__96002_96201,op_96202))
);

op_96202.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398),goog.math.Integer], null),((function (seq__95999_96198,chunk__96000_96199,count__96001_96200,i__96002_96201,op_96202){
return (function (a,b){
var G__96062 = a;
var G__96063 = Number(b);
return (op_96202.cljs$core$IFn$_invoke$arity$2 ? op_96202.cljs$core$IFn$_invoke$arity$2(G__96062,G__96063) : op_96202.call(null,G__96062,G__96063));
});})(seq__95999_96198,chunk__96000_96199,count__96001_96200,i__96002_96201,op_96202))
);

op_96202.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,sicmutils.numbers.goog$module$goog$math$Long], null),((function (seq__95999_96198,chunk__96000_96199,count__96001_96200,i__96002_96201,op_96202){
return (function (a,b){
var G__96066 = a;
var G__96067 = goog.math.Integer.fromNumber(b);
return (op_96202.cljs$core$IFn$_invoke$arity$2 ? op_96202.cljs$core$IFn$_invoke$arity$2(G__96066,G__96067) : op_96202.call(null,G__96066,G__96067));
});})(seq__95999_96198,chunk__96000_96199,count__96001_96200,i__96002_96201,op_96202))
);

op_96202.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long,goog.math.Integer], null),((function (seq__95999_96198,chunk__96000_96199,count__96001_96200,i__96002_96201,op_96202){
return (function (a,b){
var G__96068 = goog.math.Integer.fromNumber(a);
var G__96069 = b;
return (op_96202.cljs$core$IFn$_invoke$arity$2 ? op_96202.cljs$core$IFn$_invoke$arity$2(G__96068,G__96069) : op_96202.call(null,G__96068,G__96069));
});})(seq__95999_96198,chunk__96000_96199,count__96001_96200,i__96002_96201,op_96202))
);


var G__96203 = seq__95999_96198;
var G__96204 = chunk__96000_96199;
var G__96205 = count__96001_96200;
var G__96206 = (i__96002_96201 + (1));
seq__95999_96198 = G__96203;
chunk__96000_96199 = G__96204;
count__96001_96200 = G__96205;
i__96002_96201 = G__96206;
continue;
} else {
var temp__5753__auto___96207 = cljs.core.seq(seq__95999_96198);
if(temp__5753__auto___96207){
var seq__95999_96208__$1 = temp__5753__auto___96207;
if(cljs.core.chunked_seq_QMARK_(seq__95999_96208__$1)){
var c__4679__auto___96209 = cljs.core.chunk_first(seq__95999_96208__$1);
var G__96211 = cljs.core.chunk_rest(seq__95999_96208__$1);
var G__96212 = c__4679__auto___96209;
var G__96213 = cljs.core.count(c__4679__auto___96209);
var G__96214 = (0);
seq__95999_96198 = G__96211;
chunk__96000_96199 = G__96212;
count__96001_96200 = G__96213;
i__96002_96201 = G__96214;
continue;
} else {
var op_96215 = cljs.core.first(seq__95999_96208__$1);
op_96215.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),((function (seq__95999_96198,chunk__96000_96199,count__96001_96200,i__96002_96201,op_96215,seq__95999_96208__$1,temp__5753__auto___96207){
return (function (a,b){
var G__96070 = a;
var G__96071 = goog.math.Integer.fromNumber(b);
return (op_96215.cljs$core$IFn$_invoke$arity$2 ? op_96215.cljs$core$IFn$_invoke$arity$2(G__96070,G__96071) : op_96215.call(null,G__96070,G__96071));
});})(seq__95999_96198,chunk__96000_96199,count__96001_96200,i__96002_96201,op_96215,seq__95999_96208__$1,temp__5753__auto___96207))
);

op_96215.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146),goog.math.Integer], null),((function (seq__95999_96198,chunk__96000_96199,count__96001_96200,i__96002_96201,op_96215,seq__95999_96208__$1,temp__5753__auto___96207){
return (function (a,b){
var G__96072 = goog.math.Integer.fromNumber(a);
var G__96073 = b;
return (op_96215.cljs$core$IFn$_invoke$arity$2 ? op_96215.cljs$core$IFn$_invoke$arity$2(G__96072,G__96073) : op_96215.call(null,G__96072,G__96073));
});})(seq__95999_96198,chunk__96000_96199,count__96001_96200,i__96002_96201,op_96215,seq__95999_96208__$1,temp__5753__auto___96207))
);

op_96215.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398)], null),((function (seq__95999_96198,chunk__96000_96199,count__96001_96200,i__96002_96201,op_96215,seq__95999_96208__$1,temp__5753__auto___96207){
return (function (a,b){
var G__96074 = Number(a);
var G__96075 = b;
return (op_96215.cljs$core$IFn$_invoke$arity$2 ? op_96215.cljs$core$IFn$_invoke$arity$2(G__96074,G__96075) : op_96215.call(null,G__96074,G__96075));
});})(seq__95999_96198,chunk__96000_96199,count__96001_96200,i__96002_96201,op_96215,seq__95999_96208__$1,temp__5753__auto___96207))
);

op_96215.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398),goog.math.Integer], null),((function (seq__95999_96198,chunk__96000_96199,count__96001_96200,i__96002_96201,op_96215,seq__95999_96208__$1,temp__5753__auto___96207){
return (function (a,b){
var G__96076 = a;
var G__96077 = Number(b);
return (op_96215.cljs$core$IFn$_invoke$arity$2 ? op_96215.cljs$core$IFn$_invoke$arity$2(G__96076,G__96077) : op_96215.call(null,G__96076,G__96077));
});})(seq__95999_96198,chunk__96000_96199,count__96001_96200,i__96002_96201,op_96215,seq__95999_96208__$1,temp__5753__auto___96207))
);

op_96215.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,sicmutils.numbers.goog$module$goog$math$Long], null),((function (seq__95999_96198,chunk__96000_96199,count__96001_96200,i__96002_96201,op_96215,seq__95999_96208__$1,temp__5753__auto___96207){
return (function (a,b){
var G__96080 = a;
var G__96081 = goog.math.Integer.fromNumber(b);
return (op_96215.cljs$core$IFn$_invoke$arity$2 ? op_96215.cljs$core$IFn$_invoke$arity$2(G__96080,G__96081) : op_96215.call(null,G__96080,G__96081));
});})(seq__95999_96198,chunk__96000_96199,count__96001_96200,i__96002_96201,op_96215,seq__95999_96208__$1,temp__5753__auto___96207))
);

op_96215.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long,goog.math.Integer], null),((function (seq__95999_96198,chunk__96000_96199,count__96001_96200,i__96002_96201,op_96215,seq__95999_96208__$1,temp__5753__auto___96207){
return (function (a,b){
var G__96087 = goog.math.Integer.fromNumber(a);
var G__96088 = b;
return (op_96215.cljs$core$IFn$_invoke$arity$2 ? op_96215.cljs$core$IFn$_invoke$arity$2(G__96087,G__96088) : op_96215.call(null,G__96087,G__96088));
});})(seq__95999_96198,chunk__96000_96199,count__96001_96200,i__96002_96201,op_96215,seq__95999_96208__$1,temp__5753__auto___96207))
);


var G__96217 = cljs.core.next(seq__95999_96208__$1);
var G__96218 = null;
var G__96219 = (0);
var G__96220 = (0);
seq__95999_96198 = G__96217;
chunk__96000_96199 = G__96218;
count__96001_96200 = G__96219;
i__96002_96201 = G__96220;
continue;
}
} else {
}
}
break;
}

sicmutils.generic.quotient.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long,sicmutils.numbers.goog$module$goog$math$Long], null),(function (a,b){
return a.div(b);
}));

sicmutils.generic.quotient.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,goog.math.Integer], null),(function (a,b){
return a.divide(b);
}));

//# sourceMappingURL=sicmutils.numbers.js.map
