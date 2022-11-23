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
var G__96027 = b__$1;
var G__96028 = (a__$1 % b__$1);
a__$1 = G__96027;
b__$1 = G__96028;
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
var G__96029 = b__$1;
var G__96030 = cljs.core.rem(a__$1,b__$1);
a__$1 = G__96029;
b__$1 = G__96030;
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
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1((function (){var G__95858 = a;
var G__95859 = (- b);
return (sicmutils.util.compute_expt.cljs$core$IFn$_invoke$arity$2 ? sicmutils.util.compute_expt.cljs$core$IFn$_invoke$arity$2(G__95858,G__95859) : sicmutils.util.compute_expt.call(null,G__95858,G__95859));
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

var seq__95870_96042 = cljs.core.seq(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.add,sicmutils.generic.mul,sicmutils.generic.sub,sicmutils.generic.div,sicmutils.generic.expt,sicmutils.generic.modulo,sicmutils.generic.remainder,sicmutils.generic.quotient], null));
var chunk__95871_96043 = null;
var count__95872_96044 = (0);
var i__95873_96045 = (0);
while(true){
if((i__95873_96045 < count__95872_96044)){
var op_96046 = chunk__95871_96043.cljs$core$IIndexed$_nth$arity$2(null,i__95873_96045);
op_96046.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),((function (seq__95870_96042,chunk__95871_96043,count__95872_96044,i__95873_96045,op_96046){
return (function (a,b){
var G__95891 = a;
var G__95892 = BigInt(b);
return (op_96046.cljs$core$IFn$_invoke$arity$2 ? op_96046.cljs$core$IFn$_invoke$arity$2(G__95891,G__95892) : op_96046.call(null,G__95891,G__95892));
});})(seq__95870_96042,chunk__95871_96043,count__95872_96044,i__95873_96045,op_96046))
);

op_96046.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231),BigInt], null),((function (seq__95870_96042,chunk__95871_96043,count__95872_96044,i__95873_96045,op_96046){
return (function (a,b){
var G__95893 = BigInt(a);
var G__95894 = b;
return (op_96046.cljs$core$IFn$_invoke$arity$2 ? op_96046.cljs$core$IFn$_invoke$arity$2(G__95893,G__95894) : op_96046.call(null,G__95893,G__95894));
});})(seq__95870_96042,chunk__95871_96043,count__95872_96044,i__95873_96045,op_96046))
);

op_96046.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398)], null),((function (seq__95870_96042,chunk__95871_96043,count__95872_96044,i__95873_96045,op_96046){
return (function (a,b){
var G__95895 = Number(a);
var G__95896 = b;
return (op_96046.cljs$core$IFn$_invoke$arity$2 ? op_96046.cljs$core$IFn$_invoke$arity$2(G__95895,G__95896) : op_96046.call(null,G__95895,G__95896));
});})(seq__95870_96042,chunk__95871_96043,count__95872_96044,i__95873_96045,op_96046))
);

op_96046.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398),BigInt], null),((function (seq__95870_96042,chunk__95871_96043,count__95872_96044,i__95873_96045,op_96046){
return (function (a,b){
var G__95897 = a;
var G__95898 = Number(b);
return (op_96046.cljs$core$IFn$_invoke$arity$2 ? op_96046.cljs$core$IFn$_invoke$arity$2(G__95897,G__95898) : op_96046.call(null,G__95897,G__95898));
});})(seq__95870_96042,chunk__95871_96043,count__95872_96044,i__95873_96045,op_96046))
);


var G__96050 = seq__95870_96042;
var G__96051 = chunk__95871_96043;
var G__96052 = count__95872_96044;
var G__96053 = (i__95873_96045 + (1));
seq__95870_96042 = G__96050;
chunk__95871_96043 = G__96051;
count__95872_96044 = G__96052;
i__95873_96045 = G__96053;
continue;
} else {
var temp__5753__auto___96054 = cljs.core.seq(seq__95870_96042);
if(temp__5753__auto___96054){
var seq__95870_96055__$1 = temp__5753__auto___96054;
if(cljs.core.chunked_seq_QMARK_(seq__95870_96055__$1)){
var c__4679__auto___96056 = cljs.core.chunk_first(seq__95870_96055__$1);
var G__96057 = cljs.core.chunk_rest(seq__95870_96055__$1);
var G__96058 = c__4679__auto___96056;
var G__96059 = cljs.core.count(c__4679__auto___96056);
var G__96060 = (0);
seq__95870_96042 = G__96057;
chunk__95871_96043 = G__96058;
count__95872_96044 = G__96059;
i__95873_96045 = G__96060;
continue;
} else {
var op_96061 = cljs.core.first(seq__95870_96055__$1);
op_96061.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),((function (seq__95870_96042,chunk__95871_96043,count__95872_96044,i__95873_96045,op_96061,seq__95870_96055__$1,temp__5753__auto___96054){
return (function (a,b){
var G__95899 = a;
var G__95900 = BigInt(b);
return (op_96061.cljs$core$IFn$_invoke$arity$2 ? op_96061.cljs$core$IFn$_invoke$arity$2(G__95899,G__95900) : op_96061.call(null,G__95899,G__95900));
});})(seq__95870_96042,chunk__95871_96043,count__95872_96044,i__95873_96045,op_96061,seq__95870_96055__$1,temp__5753__auto___96054))
);

op_96061.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231),BigInt], null),((function (seq__95870_96042,chunk__95871_96043,count__95872_96044,i__95873_96045,op_96061,seq__95870_96055__$1,temp__5753__auto___96054){
return (function (a,b){
var G__95901 = BigInt(a);
var G__95902 = b;
return (op_96061.cljs$core$IFn$_invoke$arity$2 ? op_96061.cljs$core$IFn$_invoke$arity$2(G__95901,G__95902) : op_96061.call(null,G__95901,G__95902));
});})(seq__95870_96042,chunk__95871_96043,count__95872_96044,i__95873_96045,op_96061,seq__95870_96055__$1,temp__5753__auto___96054))
);

op_96061.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398)], null),((function (seq__95870_96042,chunk__95871_96043,count__95872_96044,i__95873_96045,op_96061,seq__95870_96055__$1,temp__5753__auto___96054){
return (function (a,b){
var G__95903 = Number(a);
var G__95904 = b;
return (op_96061.cljs$core$IFn$_invoke$arity$2 ? op_96061.cljs$core$IFn$_invoke$arity$2(G__95903,G__95904) : op_96061.call(null,G__95903,G__95904));
});})(seq__95870_96042,chunk__95871_96043,count__95872_96044,i__95873_96045,op_96061,seq__95870_96055__$1,temp__5753__auto___96054))
);

op_96061.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398),BigInt], null),((function (seq__95870_96042,chunk__95871_96043,count__95872_96044,i__95873_96045,op_96061,seq__95870_96055__$1,temp__5753__auto___96054){
return (function (a,b){
var G__95905 = a;
var G__95906 = Number(b);
return (op_96061.cljs$core$IFn$_invoke$arity$2 ? op_96061.cljs$core$IFn$_invoke$arity$2(G__95905,G__95906) : op_96061.call(null,G__95905,G__95906));
});})(seq__95870_96042,chunk__95871_96043,count__95872_96044,i__95873_96045,op_96061,seq__95870_96055__$1,temp__5753__auto___96054))
);


var G__96065 = cljs.core.next(seq__95870_96055__$1);
var G__96066 = null;
var G__96067 = (0);
var G__96068 = (0);
seq__95870_96042 = G__96065;
chunk__95871_96043 = G__96066;
count__95872_96044 = G__96067;
i__95873_96045 = G__96068;
continue;
}
} else {
}
}
break;
}

var seq__95907_96069 = cljs.core.seq(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.cos,sicmutils.generic.sin,sicmutils.generic.tan,sicmutils.generic.asin,sicmutils.generic.acos,sicmutils.generic.atan,sicmutils.generic.cosh,sicmutils.generic.sinh,sicmutils.generic.tanh,sicmutils.generic.asinh,sicmutils.generic.acosh,sicmutils.generic.acosh,sicmutils.generic.cot,sicmutils.generic.sec,sicmutils.generic.csc,sicmutils.generic.sech,sicmutils.generic.csch,sicmutils.generic.log,sicmutils.generic.exp,sicmutils.generic.sqrt], null));
var chunk__95908_96070 = null;
var count__95909_96071 = (0);
var i__95910_96072 = (0);
while(true){
if((i__95910_96072 < count__95909_96071)){
var op_96074 = chunk__95908_96070.cljs$core$IIndexed$_nth$arity$2(null,i__95910_96072);
op_96074.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt], null),((function (seq__95907_96069,chunk__95908_96070,count__95909_96071,i__95910_96072,op_96074){
return (function (a){
var G__95913 = Number(a);
return (op_96074.cljs$core$IFn$_invoke$arity$1 ? op_96074.cljs$core$IFn$_invoke$arity$1(G__95913) : op_96074.call(null,G__95913));
});})(seq__95907_96069,chunk__95908_96070,count__95909_96071,i__95910_96072,op_96074))
);


var G__96077 = seq__95907_96069;
var G__96078 = chunk__95908_96070;
var G__96079 = count__95909_96071;
var G__96080 = (i__95910_96072 + (1));
seq__95907_96069 = G__96077;
chunk__95908_96070 = G__96078;
count__95909_96071 = G__96079;
i__95910_96072 = G__96080;
continue;
} else {
var temp__5753__auto___96081 = cljs.core.seq(seq__95907_96069);
if(temp__5753__auto___96081){
var seq__95907_96082__$1 = temp__5753__auto___96081;
if(cljs.core.chunked_seq_QMARK_(seq__95907_96082__$1)){
var c__4679__auto___96083 = cljs.core.chunk_first(seq__95907_96082__$1);
var G__96084 = cljs.core.chunk_rest(seq__95907_96082__$1);
var G__96085 = c__4679__auto___96083;
var G__96086 = cljs.core.count(c__4679__auto___96083);
var G__96087 = (0);
seq__95907_96069 = G__96084;
chunk__95908_96070 = G__96085;
count__95909_96071 = G__96086;
i__95910_96072 = G__96087;
continue;
} else {
var op_96088 = cljs.core.first(seq__95907_96082__$1);
op_96088.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt], null),((function (seq__95907_96069,chunk__95908_96070,count__95909_96071,i__95910_96072,op_96088,seq__95907_96082__$1,temp__5753__auto___96081){
return (function (a){
var G__95914 = Number(a);
return (op_96088.cljs$core$IFn$_invoke$arity$1 ? op_96088.cljs$core$IFn$_invoke$arity$1(G__95914) : op_96088.call(null,G__95914));
});})(seq__95907_96069,chunk__95908_96070,count__95909_96071,i__95910_96072,op_96088,seq__95907_96082__$1,temp__5753__auto___96081))
);


var G__96089 = cljs.core.next(seq__95907_96082__$1);
var G__96090 = null;
var G__96091 = (0);
var G__96092 = (0);
seq__95907_96069 = G__96089;
chunk__95908_96070 = G__96090;
count__95909_96071 = G__96091;
i__95910_96072 = G__96092;
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
var G__96100 = n__$1;
var G__96101 = y;
var G__96102 = z.multiply(z);
n = G__96100;
y = G__96101;
z = G__96102;
continue;
} else {
if(cljs.core.truth_(n__$1.isZero())){
return z.multiply(y);
} else {
var G__96103 = n__$1;
var G__96104 = z.multiply(y);
var G__96105 = z.multiply(z);
n = G__96103;
y = G__96104;
z = G__96105;
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

var seq__95915_96110 = cljs.core.seq(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.add,sicmutils.generic.mul,sicmutils.generic.sub,sicmutils.generic.gcd,sicmutils.generic.lcm,sicmutils.generic.expt,sicmutils.generic.remainder,sicmutils.generic.quotient], null));
var chunk__95916_96111 = null;
var count__95917_96112 = (0);
var i__95918_96113 = (0);
while(true){
if((i__95918_96113 < count__95917_96112)){
var op_96114 = chunk__95916_96111.cljs$core$IIndexed$_nth$arity$2(null,i__95918_96113);
op_96114.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long,new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),((function (seq__95915_96110,chunk__95916_96111,count__95917_96112,i__95918_96113,op_96114){
return (function (a,b){
var G__95935 = a;
var G__95936 = sicmutils.numbers.goog$module$goog$math$Long.fromNumber(b);
return (op_96114.cljs$core$IFn$_invoke$arity$2 ? op_96114.cljs$core$IFn$_invoke$arity$2(G__95935,G__95936) : op_96114.call(null,G__95935,G__95936));
});})(seq__95915_96110,chunk__95916_96111,count__95917_96112,i__95918_96113,op_96114))
);

op_96114.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146),sicmutils.numbers.goog$module$goog$math$Long], null),((function (seq__95915_96110,chunk__95916_96111,count__95917_96112,i__95918_96113,op_96114){
return (function (a,b){
var G__95937 = sicmutils.numbers.goog$module$goog$math$Long.fromNumber(a);
var G__95938 = b;
return (op_96114.cljs$core$IFn$_invoke$arity$2 ? op_96114.cljs$core$IFn$_invoke$arity$2(G__95937,G__95938) : op_96114.call(null,G__95937,G__95938));
});})(seq__95915_96110,chunk__95916_96111,count__95917_96112,i__95918_96113,op_96114))
);

op_96114.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long,new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398)], null),((function (seq__95915_96110,chunk__95916_96111,count__95917_96112,i__95918_96113,op_96114){
return (function (a,b){
var G__95939 = Number(a);
var G__95940 = b;
return (op_96114.cljs$core$IFn$_invoke$arity$2 ? op_96114.cljs$core$IFn$_invoke$arity$2(G__95939,G__95940) : op_96114.call(null,G__95939,G__95940));
});})(seq__95915_96110,chunk__95916_96111,count__95917_96112,i__95918_96113,op_96114))
);

op_96114.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398),sicmutils.numbers.goog$module$goog$math$Long], null),((function (seq__95915_96110,chunk__95916_96111,count__95917_96112,i__95918_96113,op_96114){
return (function (a,b){
var G__95941 = a;
var G__95942 = Number(b);
return (op_96114.cljs$core$IFn$_invoke$arity$2 ? op_96114.cljs$core$IFn$_invoke$arity$2(G__95941,G__95942) : op_96114.call(null,G__95941,G__95942));
});})(seq__95915_96110,chunk__95916_96111,count__95917_96112,i__95918_96113,op_96114))
);


var G__96119 = seq__95915_96110;
var G__96120 = chunk__95916_96111;
var G__96121 = count__95917_96112;
var G__96122 = (i__95918_96113 + (1));
seq__95915_96110 = G__96119;
chunk__95916_96111 = G__96120;
count__95917_96112 = G__96121;
i__95918_96113 = G__96122;
continue;
} else {
var temp__5753__auto___96123 = cljs.core.seq(seq__95915_96110);
if(temp__5753__auto___96123){
var seq__95915_96124__$1 = temp__5753__auto___96123;
if(cljs.core.chunked_seq_QMARK_(seq__95915_96124__$1)){
var c__4679__auto___96125 = cljs.core.chunk_first(seq__95915_96124__$1);
var G__96126 = cljs.core.chunk_rest(seq__95915_96124__$1);
var G__96127 = c__4679__auto___96125;
var G__96128 = cljs.core.count(c__4679__auto___96125);
var G__96129 = (0);
seq__95915_96110 = G__96126;
chunk__95916_96111 = G__96127;
count__95917_96112 = G__96128;
i__95918_96113 = G__96129;
continue;
} else {
var op_96130 = cljs.core.first(seq__95915_96124__$1);
op_96130.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long,new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),((function (seq__95915_96110,chunk__95916_96111,count__95917_96112,i__95918_96113,op_96130,seq__95915_96124__$1,temp__5753__auto___96123){
return (function (a,b){
var G__95943 = a;
var G__95944 = sicmutils.numbers.goog$module$goog$math$Long.fromNumber(b);
return (op_96130.cljs$core$IFn$_invoke$arity$2 ? op_96130.cljs$core$IFn$_invoke$arity$2(G__95943,G__95944) : op_96130.call(null,G__95943,G__95944));
});})(seq__95915_96110,chunk__95916_96111,count__95917_96112,i__95918_96113,op_96130,seq__95915_96124__$1,temp__5753__auto___96123))
);

op_96130.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146),sicmutils.numbers.goog$module$goog$math$Long], null),((function (seq__95915_96110,chunk__95916_96111,count__95917_96112,i__95918_96113,op_96130,seq__95915_96124__$1,temp__5753__auto___96123){
return (function (a,b){
var G__95945 = sicmutils.numbers.goog$module$goog$math$Long.fromNumber(a);
var G__95946 = b;
return (op_96130.cljs$core$IFn$_invoke$arity$2 ? op_96130.cljs$core$IFn$_invoke$arity$2(G__95945,G__95946) : op_96130.call(null,G__95945,G__95946));
});})(seq__95915_96110,chunk__95916_96111,count__95917_96112,i__95918_96113,op_96130,seq__95915_96124__$1,temp__5753__auto___96123))
);

op_96130.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long,new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398)], null),((function (seq__95915_96110,chunk__95916_96111,count__95917_96112,i__95918_96113,op_96130,seq__95915_96124__$1,temp__5753__auto___96123){
return (function (a,b){
var G__95947 = Number(a);
var G__95948 = b;
return (op_96130.cljs$core$IFn$_invoke$arity$2 ? op_96130.cljs$core$IFn$_invoke$arity$2(G__95947,G__95948) : op_96130.call(null,G__95947,G__95948));
});})(seq__95915_96110,chunk__95916_96111,count__95917_96112,i__95918_96113,op_96130,seq__95915_96124__$1,temp__5753__auto___96123))
);

op_96130.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398),sicmutils.numbers.goog$module$goog$math$Long], null),((function (seq__95915_96110,chunk__95916_96111,count__95917_96112,i__95918_96113,op_96130,seq__95915_96124__$1,temp__5753__auto___96123){
return (function (a,b){
var G__95949 = a;
var G__95950 = Number(b);
return (op_96130.cljs$core$IFn$_invoke$arity$2 ? op_96130.cljs$core$IFn$_invoke$arity$2(G__95949,G__95950) : op_96130.call(null,G__95949,G__95950));
});})(seq__95915_96110,chunk__95916_96111,count__95917_96112,i__95918_96113,op_96130,seq__95915_96124__$1,temp__5753__auto___96123))
);


var G__96134 = cljs.core.next(seq__95915_96124__$1);
var G__96135 = null;
var G__96136 = (0);
var G__96137 = (0);
seq__95915_96110 = G__96134;
chunk__95916_96111 = G__96135;
count__95917_96112 = G__96136;
i__95918_96113 = G__96137;
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
var G__96140 = n__$1;
var G__96141 = y;
var G__96142 = z.multiply(z);
n = G__96140;
y = G__96141;
z = G__96142;
continue;
} else {
if(cljs.core.truth_(n__$1.isZero())){
return z.multiply(y);
} else {
var G__96143 = n__$1;
var G__96144 = z.multiply(y);
var G__96145 = z.multiply(z);
n = G__96143;
y = G__96144;
z = G__96145;
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

var seq__95957_96146 = cljs.core.seq(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.add,sicmutils.generic.mul,sicmutils.generic.sub,sicmutils.generic.gcd,sicmutils.generic.lcm,sicmutils.generic.expt,sicmutils.generic.remainder,sicmutils.generic.quotient], null));
var chunk__95958_96147 = null;
var count__95959_96148 = (0);
var i__95960_96149 = (0);
while(true){
if((i__95960_96149 < count__95959_96148)){
var op_96150 = chunk__95958_96147.cljs$core$IIndexed$_nth$arity$2(null,i__95960_96149);
op_96150.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),((function (seq__95957_96146,chunk__95958_96147,count__95959_96148,i__95960_96149,op_96150){
return (function (a,b){
var G__95991 = a;
var G__95992 = goog.math.Integer.fromNumber(b);
return (op_96150.cljs$core$IFn$_invoke$arity$2 ? op_96150.cljs$core$IFn$_invoke$arity$2(G__95991,G__95992) : op_96150.call(null,G__95991,G__95992));
});})(seq__95957_96146,chunk__95958_96147,count__95959_96148,i__95960_96149,op_96150))
);

op_96150.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146),goog.math.Integer], null),((function (seq__95957_96146,chunk__95958_96147,count__95959_96148,i__95960_96149,op_96150){
return (function (a,b){
var G__95993 = goog.math.Integer.fromNumber(a);
var G__95994 = b;
return (op_96150.cljs$core$IFn$_invoke$arity$2 ? op_96150.cljs$core$IFn$_invoke$arity$2(G__95993,G__95994) : op_96150.call(null,G__95993,G__95994));
});})(seq__95957_96146,chunk__95958_96147,count__95959_96148,i__95960_96149,op_96150))
);

op_96150.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398)], null),((function (seq__95957_96146,chunk__95958_96147,count__95959_96148,i__95960_96149,op_96150){
return (function (a,b){
var G__95995 = Number(a);
var G__95996 = b;
return (op_96150.cljs$core$IFn$_invoke$arity$2 ? op_96150.cljs$core$IFn$_invoke$arity$2(G__95995,G__95996) : op_96150.call(null,G__95995,G__95996));
});})(seq__95957_96146,chunk__95958_96147,count__95959_96148,i__95960_96149,op_96150))
);

op_96150.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398),goog.math.Integer], null),((function (seq__95957_96146,chunk__95958_96147,count__95959_96148,i__95960_96149,op_96150){
return (function (a,b){
var G__95997 = a;
var G__95998 = Number(b);
return (op_96150.cljs$core$IFn$_invoke$arity$2 ? op_96150.cljs$core$IFn$_invoke$arity$2(G__95997,G__95998) : op_96150.call(null,G__95997,G__95998));
});})(seq__95957_96146,chunk__95958_96147,count__95959_96148,i__95960_96149,op_96150))
);

op_96150.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,sicmutils.numbers.goog$module$goog$math$Long], null),((function (seq__95957_96146,chunk__95958_96147,count__95959_96148,i__95960_96149,op_96150){
return (function (a,b){
var G__96005 = a;
var G__96006 = goog.math.Integer.fromNumber(b);
return (op_96150.cljs$core$IFn$_invoke$arity$2 ? op_96150.cljs$core$IFn$_invoke$arity$2(G__96005,G__96006) : op_96150.call(null,G__96005,G__96006));
});})(seq__95957_96146,chunk__95958_96147,count__95959_96148,i__95960_96149,op_96150))
);

op_96150.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long,goog.math.Integer], null),((function (seq__95957_96146,chunk__95958_96147,count__95959_96148,i__95960_96149,op_96150){
return (function (a,b){
var G__96007 = goog.math.Integer.fromNumber(a);
var G__96008 = b;
return (op_96150.cljs$core$IFn$_invoke$arity$2 ? op_96150.cljs$core$IFn$_invoke$arity$2(G__96007,G__96008) : op_96150.call(null,G__96007,G__96008));
});})(seq__95957_96146,chunk__95958_96147,count__95959_96148,i__95960_96149,op_96150))
);


var G__96164 = seq__95957_96146;
var G__96165 = chunk__95958_96147;
var G__96166 = count__95959_96148;
var G__96167 = (i__95960_96149 + (1));
seq__95957_96146 = G__96164;
chunk__95958_96147 = G__96165;
count__95959_96148 = G__96166;
i__95960_96149 = G__96167;
continue;
} else {
var temp__5753__auto___96169 = cljs.core.seq(seq__95957_96146);
if(temp__5753__auto___96169){
var seq__95957_96176__$1 = temp__5753__auto___96169;
if(cljs.core.chunked_seq_QMARK_(seq__95957_96176__$1)){
var c__4679__auto___96177 = cljs.core.chunk_first(seq__95957_96176__$1);
var G__96178 = cljs.core.chunk_rest(seq__95957_96176__$1);
var G__96179 = c__4679__auto___96177;
var G__96180 = cljs.core.count(c__4679__auto___96177);
var G__96181 = (0);
seq__95957_96146 = G__96178;
chunk__95958_96147 = G__96179;
count__95959_96148 = G__96180;
i__95960_96149 = G__96181;
continue;
} else {
var op_96182 = cljs.core.first(seq__95957_96176__$1);
op_96182.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),((function (seq__95957_96146,chunk__95958_96147,count__95959_96148,i__95960_96149,op_96182,seq__95957_96176__$1,temp__5753__auto___96169){
return (function (a,b){
var G__96009 = a;
var G__96010 = goog.math.Integer.fromNumber(b);
return (op_96182.cljs$core$IFn$_invoke$arity$2 ? op_96182.cljs$core$IFn$_invoke$arity$2(G__96009,G__96010) : op_96182.call(null,G__96009,G__96010));
});})(seq__95957_96146,chunk__95958_96147,count__95959_96148,i__95960_96149,op_96182,seq__95957_96176__$1,temp__5753__auto___96169))
);

op_96182.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146),goog.math.Integer], null),((function (seq__95957_96146,chunk__95958_96147,count__95959_96148,i__95960_96149,op_96182,seq__95957_96176__$1,temp__5753__auto___96169){
return (function (a,b){
var G__96011 = goog.math.Integer.fromNumber(a);
var G__96012 = b;
return (op_96182.cljs$core$IFn$_invoke$arity$2 ? op_96182.cljs$core$IFn$_invoke$arity$2(G__96011,G__96012) : op_96182.call(null,G__96011,G__96012));
});})(seq__95957_96146,chunk__95958_96147,count__95959_96148,i__95960_96149,op_96182,seq__95957_96176__$1,temp__5753__auto___96169))
);

op_96182.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398)], null),((function (seq__95957_96146,chunk__95958_96147,count__95959_96148,i__95960_96149,op_96182,seq__95957_96176__$1,temp__5753__auto___96169){
return (function (a,b){
var G__96013 = Number(a);
var G__96014 = b;
return (op_96182.cljs$core$IFn$_invoke$arity$2 ? op_96182.cljs$core$IFn$_invoke$arity$2(G__96013,G__96014) : op_96182.call(null,G__96013,G__96014));
});})(seq__95957_96146,chunk__95958_96147,count__95959_96148,i__95960_96149,op_96182,seq__95957_96176__$1,temp__5753__auto___96169))
);

op_96182.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398),goog.math.Integer], null),((function (seq__95957_96146,chunk__95958_96147,count__95959_96148,i__95960_96149,op_96182,seq__95957_96176__$1,temp__5753__auto___96169){
return (function (a,b){
var G__96015 = a;
var G__96016 = Number(b);
return (op_96182.cljs$core$IFn$_invoke$arity$2 ? op_96182.cljs$core$IFn$_invoke$arity$2(G__96015,G__96016) : op_96182.call(null,G__96015,G__96016));
});})(seq__95957_96146,chunk__95958_96147,count__95959_96148,i__95960_96149,op_96182,seq__95957_96176__$1,temp__5753__auto___96169))
);

op_96182.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,sicmutils.numbers.goog$module$goog$math$Long], null),((function (seq__95957_96146,chunk__95958_96147,count__95959_96148,i__95960_96149,op_96182,seq__95957_96176__$1,temp__5753__auto___96169){
return (function (a,b){
var G__96017 = a;
var G__96018 = goog.math.Integer.fromNumber(b);
return (op_96182.cljs$core$IFn$_invoke$arity$2 ? op_96182.cljs$core$IFn$_invoke$arity$2(G__96017,G__96018) : op_96182.call(null,G__96017,G__96018));
});})(seq__95957_96146,chunk__95958_96147,count__95959_96148,i__95960_96149,op_96182,seq__95957_96176__$1,temp__5753__auto___96169))
);

op_96182.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long,goog.math.Integer], null),((function (seq__95957_96146,chunk__95958_96147,count__95959_96148,i__95960_96149,op_96182,seq__95957_96176__$1,temp__5753__auto___96169){
return (function (a,b){
var G__96019 = goog.math.Integer.fromNumber(a);
var G__96020 = b;
return (op_96182.cljs$core$IFn$_invoke$arity$2 ? op_96182.cljs$core$IFn$_invoke$arity$2(G__96019,G__96020) : op_96182.call(null,G__96019,G__96020));
});})(seq__95957_96146,chunk__95958_96147,count__95959_96148,i__95960_96149,op_96182,seq__95957_96176__$1,temp__5753__auto___96169))
);


var G__96190 = cljs.core.next(seq__95957_96176__$1);
var G__96191 = null;
var G__96192 = (0);
var G__96193 = (0);
seq__95957_96146 = G__96190;
chunk__95958_96147 = G__96191;
count__95959_96148 = G__96192;
i__95960_96149 = G__96193;
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
