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
var G__78342 = b__$1;
var G__78343 = (a__$1 % b__$1);
a__$1 = G__78342;
b__$1 = G__78343;
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
var G__78344 = b__$1;
var G__78345 = cljs.core.rem(a__$1,b__$1);
a__$1 = G__78344;
b__$1 = G__78345;
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
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1((function (){var G__78172 = a;
var G__78173 = (- b);
return (sicmutils.util.compute_expt.cljs$core$IFn$_invoke$arity$2 ? sicmutils.util.compute_expt.cljs$core$IFn$_invoke$arity$2(G__78172,G__78173) : sicmutils.util.compute_expt.call(null,G__78172,G__78173));
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

var seq__78191_78346 = cljs.core.seq(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.add,sicmutils.generic.mul,sicmutils.generic.sub,sicmutils.generic.div,sicmutils.generic.expt,sicmutils.generic.modulo,sicmutils.generic.remainder,sicmutils.generic.quotient], null));
var chunk__78192_78347 = null;
var count__78193_78348 = (0);
var i__78194_78349 = (0);
while(true){
if((i__78194_78349 < count__78193_78348)){
var op_78350 = chunk__78192_78347.cljs$core$IIndexed$_nth$arity$2(null,i__78194_78349);
op_78350.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),((function (seq__78191_78346,chunk__78192_78347,count__78193_78348,i__78194_78349,op_78350){
return (function (a,b){
var G__78214 = a;
var G__78215 = BigInt(b);
return (op_78350.cljs$core$IFn$_invoke$arity$2 ? op_78350.cljs$core$IFn$_invoke$arity$2(G__78214,G__78215) : op_78350.call(null,G__78214,G__78215));
});})(seq__78191_78346,chunk__78192_78347,count__78193_78348,i__78194_78349,op_78350))
);

op_78350.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231),BigInt], null),((function (seq__78191_78346,chunk__78192_78347,count__78193_78348,i__78194_78349,op_78350){
return (function (a,b){
var G__78216 = BigInt(a);
var G__78217 = b;
return (op_78350.cljs$core$IFn$_invoke$arity$2 ? op_78350.cljs$core$IFn$_invoke$arity$2(G__78216,G__78217) : op_78350.call(null,G__78216,G__78217));
});})(seq__78191_78346,chunk__78192_78347,count__78193_78348,i__78194_78349,op_78350))
);

op_78350.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398)], null),((function (seq__78191_78346,chunk__78192_78347,count__78193_78348,i__78194_78349,op_78350){
return (function (a,b){
var G__78219 = Number(a);
var G__78220 = b;
return (op_78350.cljs$core$IFn$_invoke$arity$2 ? op_78350.cljs$core$IFn$_invoke$arity$2(G__78219,G__78220) : op_78350.call(null,G__78219,G__78220));
});})(seq__78191_78346,chunk__78192_78347,count__78193_78348,i__78194_78349,op_78350))
);

op_78350.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398),BigInt], null),((function (seq__78191_78346,chunk__78192_78347,count__78193_78348,i__78194_78349,op_78350){
return (function (a,b){
var G__78221 = a;
var G__78222 = Number(b);
return (op_78350.cljs$core$IFn$_invoke$arity$2 ? op_78350.cljs$core$IFn$_invoke$arity$2(G__78221,G__78222) : op_78350.call(null,G__78221,G__78222));
});})(seq__78191_78346,chunk__78192_78347,count__78193_78348,i__78194_78349,op_78350))
);


var G__78351 = seq__78191_78346;
var G__78352 = chunk__78192_78347;
var G__78353 = count__78193_78348;
var G__78354 = (i__78194_78349 + (1));
seq__78191_78346 = G__78351;
chunk__78192_78347 = G__78352;
count__78193_78348 = G__78353;
i__78194_78349 = G__78354;
continue;
} else {
var temp__5753__auto___78355 = cljs.core.seq(seq__78191_78346);
if(temp__5753__auto___78355){
var seq__78191_78356__$1 = temp__5753__auto___78355;
if(cljs.core.chunked_seq_QMARK_(seq__78191_78356__$1)){
var c__4679__auto___78357 = cljs.core.chunk_first(seq__78191_78356__$1);
var G__78358 = cljs.core.chunk_rest(seq__78191_78356__$1);
var G__78359 = c__4679__auto___78357;
var G__78360 = cljs.core.count(c__4679__auto___78357);
var G__78361 = (0);
seq__78191_78346 = G__78358;
chunk__78192_78347 = G__78359;
count__78193_78348 = G__78360;
i__78194_78349 = G__78361;
continue;
} else {
var op_78362 = cljs.core.first(seq__78191_78356__$1);
op_78362.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),((function (seq__78191_78346,chunk__78192_78347,count__78193_78348,i__78194_78349,op_78362,seq__78191_78356__$1,temp__5753__auto___78355){
return (function (a,b){
var G__78223 = a;
var G__78224 = BigInt(b);
return (op_78362.cljs$core$IFn$_invoke$arity$2 ? op_78362.cljs$core$IFn$_invoke$arity$2(G__78223,G__78224) : op_78362.call(null,G__78223,G__78224));
});})(seq__78191_78346,chunk__78192_78347,count__78193_78348,i__78194_78349,op_78362,seq__78191_78356__$1,temp__5753__auto___78355))
);

op_78362.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231),BigInt], null),((function (seq__78191_78346,chunk__78192_78347,count__78193_78348,i__78194_78349,op_78362,seq__78191_78356__$1,temp__5753__auto___78355){
return (function (a,b){
var G__78225 = BigInt(a);
var G__78226 = b;
return (op_78362.cljs$core$IFn$_invoke$arity$2 ? op_78362.cljs$core$IFn$_invoke$arity$2(G__78225,G__78226) : op_78362.call(null,G__78225,G__78226));
});})(seq__78191_78346,chunk__78192_78347,count__78193_78348,i__78194_78349,op_78362,seq__78191_78356__$1,temp__5753__auto___78355))
);

op_78362.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398)], null),((function (seq__78191_78346,chunk__78192_78347,count__78193_78348,i__78194_78349,op_78362,seq__78191_78356__$1,temp__5753__auto___78355){
return (function (a,b){
var G__78227 = Number(a);
var G__78228 = b;
return (op_78362.cljs$core$IFn$_invoke$arity$2 ? op_78362.cljs$core$IFn$_invoke$arity$2(G__78227,G__78228) : op_78362.call(null,G__78227,G__78228));
});})(seq__78191_78346,chunk__78192_78347,count__78193_78348,i__78194_78349,op_78362,seq__78191_78356__$1,temp__5753__auto___78355))
);

op_78362.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398),BigInt], null),((function (seq__78191_78346,chunk__78192_78347,count__78193_78348,i__78194_78349,op_78362,seq__78191_78356__$1,temp__5753__auto___78355){
return (function (a,b){
var G__78229 = a;
var G__78230 = Number(b);
return (op_78362.cljs$core$IFn$_invoke$arity$2 ? op_78362.cljs$core$IFn$_invoke$arity$2(G__78229,G__78230) : op_78362.call(null,G__78229,G__78230));
});})(seq__78191_78346,chunk__78192_78347,count__78193_78348,i__78194_78349,op_78362,seq__78191_78356__$1,temp__5753__auto___78355))
);


var G__78363 = cljs.core.next(seq__78191_78356__$1);
var G__78364 = null;
var G__78365 = (0);
var G__78366 = (0);
seq__78191_78346 = G__78363;
chunk__78192_78347 = G__78364;
count__78193_78348 = G__78365;
i__78194_78349 = G__78366;
continue;
}
} else {
}
}
break;
}

var seq__78233_78367 = cljs.core.seq(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.cos,sicmutils.generic.sin,sicmutils.generic.tan,sicmutils.generic.asin,sicmutils.generic.acos,sicmutils.generic.atan,sicmutils.generic.cosh,sicmutils.generic.sinh,sicmutils.generic.tanh,sicmutils.generic.asinh,sicmutils.generic.acosh,sicmutils.generic.acosh,sicmutils.generic.cot,sicmutils.generic.sec,sicmutils.generic.csc,sicmutils.generic.sech,sicmutils.generic.csch,sicmutils.generic.log,sicmutils.generic.exp,sicmutils.generic.sqrt], null));
var chunk__78234_78368 = null;
var count__78235_78369 = (0);
var i__78236_78370 = (0);
while(true){
if((i__78236_78370 < count__78235_78369)){
var op_78371 = chunk__78234_78368.cljs$core$IIndexed$_nth$arity$2(null,i__78236_78370);
op_78371.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt], null),((function (seq__78233_78367,chunk__78234_78368,count__78235_78369,i__78236_78370,op_78371){
return (function (a){
var G__78239 = Number(a);
return (op_78371.cljs$core$IFn$_invoke$arity$1 ? op_78371.cljs$core$IFn$_invoke$arity$1(G__78239) : op_78371.call(null,G__78239));
});})(seq__78233_78367,chunk__78234_78368,count__78235_78369,i__78236_78370,op_78371))
);


var G__78372 = seq__78233_78367;
var G__78373 = chunk__78234_78368;
var G__78374 = count__78235_78369;
var G__78375 = (i__78236_78370 + (1));
seq__78233_78367 = G__78372;
chunk__78234_78368 = G__78373;
count__78235_78369 = G__78374;
i__78236_78370 = G__78375;
continue;
} else {
var temp__5753__auto___78376 = cljs.core.seq(seq__78233_78367);
if(temp__5753__auto___78376){
var seq__78233_78377__$1 = temp__5753__auto___78376;
if(cljs.core.chunked_seq_QMARK_(seq__78233_78377__$1)){
var c__4679__auto___78378 = cljs.core.chunk_first(seq__78233_78377__$1);
var G__78379 = cljs.core.chunk_rest(seq__78233_78377__$1);
var G__78380 = c__4679__auto___78378;
var G__78381 = cljs.core.count(c__4679__auto___78378);
var G__78382 = (0);
seq__78233_78367 = G__78379;
chunk__78234_78368 = G__78380;
count__78235_78369 = G__78381;
i__78236_78370 = G__78382;
continue;
} else {
var op_78383 = cljs.core.first(seq__78233_78377__$1);
op_78383.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt], null),((function (seq__78233_78367,chunk__78234_78368,count__78235_78369,i__78236_78370,op_78383,seq__78233_78377__$1,temp__5753__auto___78376){
return (function (a){
var G__78240 = Number(a);
return (op_78383.cljs$core$IFn$_invoke$arity$1 ? op_78383.cljs$core$IFn$_invoke$arity$1(G__78240) : op_78383.call(null,G__78240));
});})(seq__78233_78367,chunk__78234_78368,count__78235_78369,i__78236_78370,op_78383,seq__78233_78377__$1,temp__5753__auto___78376))
);


var G__78384 = cljs.core.next(seq__78233_78377__$1);
var G__78385 = null;
var G__78386 = (0);
var G__78387 = (0);
seq__78233_78367 = G__78384;
chunk__78234_78368 = G__78385;
count__78235_78369 = G__78386;
i__78236_78370 = G__78387;
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
var G__78390 = n__$1;
var G__78391 = y;
var G__78392 = z.multiply(z);
n = G__78390;
y = G__78391;
z = G__78392;
continue;
} else {
if(cljs.core.truth_(n__$1.isZero())){
return z.multiply(y);
} else {
var G__78393 = n__$1;
var G__78394 = z.multiply(y);
var G__78395 = z.multiply(z);
n = G__78393;
y = G__78394;
z = G__78395;
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

var seq__78254_78396 = cljs.core.seq(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.add,sicmutils.generic.mul,sicmutils.generic.sub,sicmutils.generic.gcd,sicmutils.generic.lcm,sicmutils.generic.expt,sicmutils.generic.remainder,sicmutils.generic.quotient], null));
var chunk__78255_78397 = null;
var count__78256_78398 = (0);
var i__78257_78399 = (0);
while(true){
if((i__78257_78399 < count__78256_78398)){
var op_78400 = chunk__78255_78397.cljs$core$IIndexed$_nth$arity$2(null,i__78257_78399);
op_78400.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long,new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),((function (seq__78254_78396,chunk__78255_78397,count__78256_78398,i__78257_78399,op_78400){
return (function (a,b){
var G__78274 = a;
var G__78275 = sicmutils.numbers.goog$module$goog$math$Long.fromNumber(b);
return (op_78400.cljs$core$IFn$_invoke$arity$2 ? op_78400.cljs$core$IFn$_invoke$arity$2(G__78274,G__78275) : op_78400.call(null,G__78274,G__78275));
});})(seq__78254_78396,chunk__78255_78397,count__78256_78398,i__78257_78399,op_78400))
);

op_78400.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146),sicmutils.numbers.goog$module$goog$math$Long], null),((function (seq__78254_78396,chunk__78255_78397,count__78256_78398,i__78257_78399,op_78400){
return (function (a,b){
var G__78276 = sicmutils.numbers.goog$module$goog$math$Long.fromNumber(a);
var G__78277 = b;
return (op_78400.cljs$core$IFn$_invoke$arity$2 ? op_78400.cljs$core$IFn$_invoke$arity$2(G__78276,G__78277) : op_78400.call(null,G__78276,G__78277));
});})(seq__78254_78396,chunk__78255_78397,count__78256_78398,i__78257_78399,op_78400))
);

op_78400.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long,new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398)], null),((function (seq__78254_78396,chunk__78255_78397,count__78256_78398,i__78257_78399,op_78400){
return (function (a,b){
var G__78278 = Number(a);
var G__78279 = b;
return (op_78400.cljs$core$IFn$_invoke$arity$2 ? op_78400.cljs$core$IFn$_invoke$arity$2(G__78278,G__78279) : op_78400.call(null,G__78278,G__78279));
});})(seq__78254_78396,chunk__78255_78397,count__78256_78398,i__78257_78399,op_78400))
);

op_78400.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398),sicmutils.numbers.goog$module$goog$math$Long], null),((function (seq__78254_78396,chunk__78255_78397,count__78256_78398,i__78257_78399,op_78400){
return (function (a,b){
var G__78280 = a;
var G__78281 = Number(b);
return (op_78400.cljs$core$IFn$_invoke$arity$2 ? op_78400.cljs$core$IFn$_invoke$arity$2(G__78280,G__78281) : op_78400.call(null,G__78280,G__78281));
});})(seq__78254_78396,chunk__78255_78397,count__78256_78398,i__78257_78399,op_78400))
);


var G__78403 = seq__78254_78396;
var G__78404 = chunk__78255_78397;
var G__78405 = count__78256_78398;
var G__78406 = (i__78257_78399 + (1));
seq__78254_78396 = G__78403;
chunk__78255_78397 = G__78404;
count__78256_78398 = G__78405;
i__78257_78399 = G__78406;
continue;
} else {
var temp__5753__auto___78407 = cljs.core.seq(seq__78254_78396);
if(temp__5753__auto___78407){
var seq__78254_78408__$1 = temp__5753__auto___78407;
if(cljs.core.chunked_seq_QMARK_(seq__78254_78408__$1)){
var c__4679__auto___78409 = cljs.core.chunk_first(seq__78254_78408__$1);
var G__78410 = cljs.core.chunk_rest(seq__78254_78408__$1);
var G__78411 = c__4679__auto___78409;
var G__78412 = cljs.core.count(c__4679__auto___78409);
var G__78413 = (0);
seq__78254_78396 = G__78410;
chunk__78255_78397 = G__78411;
count__78256_78398 = G__78412;
i__78257_78399 = G__78413;
continue;
} else {
var op_78414 = cljs.core.first(seq__78254_78408__$1);
op_78414.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long,new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),((function (seq__78254_78396,chunk__78255_78397,count__78256_78398,i__78257_78399,op_78414,seq__78254_78408__$1,temp__5753__auto___78407){
return (function (a,b){
var G__78282 = a;
var G__78283 = sicmutils.numbers.goog$module$goog$math$Long.fromNumber(b);
return (op_78414.cljs$core$IFn$_invoke$arity$2 ? op_78414.cljs$core$IFn$_invoke$arity$2(G__78282,G__78283) : op_78414.call(null,G__78282,G__78283));
});})(seq__78254_78396,chunk__78255_78397,count__78256_78398,i__78257_78399,op_78414,seq__78254_78408__$1,temp__5753__auto___78407))
);

op_78414.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146),sicmutils.numbers.goog$module$goog$math$Long], null),((function (seq__78254_78396,chunk__78255_78397,count__78256_78398,i__78257_78399,op_78414,seq__78254_78408__$1,temp__5753__auto___78407){
return (function (a,b){
var G__78284 = sicmutils.numbers.goog$module$goog$math$Long.fromNumber(a);
var G__78285 = b;
return (op_78414.cljs$core$IFn$_invoke$arity$2 ? op_78414.cljs$core$IFn$_invoke$arity$2(G__78284,G__78285) : op_78414.call(null,G__78284,G__78285));
});})(seq__78254_78396,chunk__78255_78397,count__78256_78398,i__78257_78399,op_78414,seq__78254_78408__$1,temp__5753__auto___78407))
);

op_78414.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long,new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398)], null),((function (seq__78254_78396,chunk__78255_78397,count__78256_78398,i__78257_78399,op_78414,seq__78254_78408__$1,temp__5753__auto___78407){
return (function (a,b){
var G__78286 = Number(a);
var G__78287 = b;
return (op_78414.cljs$core$IFn$_invoke$arity$2 ? op_78414.cljs$core$IFn$_invoke$arity$2(G__78286,G__78287) : op_78414.call(null,G__78286,G__78287));
});})(seq__78254_78396,chunk__78255_78397,count__78256_78398,i__78257_78399,op_78414,seq__78254_78408__$1,temp__5753__auto___78407))
);

op_78414.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398),sicmutils.numbers.goog$module$goog$math$Long], null),((function (seq__78254_78396,chunk__78255_78397,count__78256_78398,i__78257_78399,op_78414,seq__78254_78408__$1,temp__5753__auto___78407){
return (function (a,b){
var G__78288 = a;
var G__78289 = Number(b);
return (op_78414.cljs$core$IFn$_invoke$arity$2 ? op_78414.cljs$core$IFn$_invoke$arity$2(G__78288,G__78289) : op_78414.call(null,G__78288,G__78289));
});})(seq__78254_78396,chunk__78255_78397,count__78256_78398,i__78257_78399,op_78414,seq__78254_78408__$1,temp__5753__auto___78407))
);


var G__78415 = cljs.core.next(seq__78254_78408__$1);
var G__78416 = null;
var G__78417 = (0);
var G__78418 = (0);
seq__78254_78396 = G__78415;
chunk__78255_78397 = G__78416;
count__78256_78398 = G__78417;
i__78257_78399 = G__78418;
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
var G__78422 = n__$1;
var G__78423 = y;
var G__78424 = z.multiply(z);
n = G__78422;
y = G__78423;
z = G__78424;
continue;
} else {
if(cljs.core.truth_(n__$1.isZero())){
return z.multiply(y);
} else {
var G__78425 = n__$1;
var G__78426 = z.multiply(y);
var G__78427 = z.multiply(z);
n = G__78425;
y = G__78426;
z = G__78427;
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

var seq__78290_78428 = cljs.core.seq(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.add,sicmutils.generic.mul,sicmutils.generic.sub,sicmutils.generic.gcd,sicmutils.generic.lcm,sicmutils.generic.expt,sicmutils.generic.remainder,sicmutils.generic.quotient], null));
var chunk__78291_78429 = null;
var count__78292_78430 = (0);
var i__78293_78431 = (0);
while(true){
if((i__78293_78431 < count__78292_78430)){
var op_78433 = chunk__78291_78429.cljs$core$IIndexed$_nth$arity$2(null,i__78293_78431);
op_78433.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),((function (seq__78290_78428,chunk__78291_78429,count__78292_78430,i__78293_78431,op_78433){
return (function (a,b){
var G__78318 = a;
var G__78319 = goog.math.Integer.fromNumber(b);
return (op_78433.cljs$core$IFn$_invoke$arity$2 ? op_78433.cljs$core$IFn$_invoke$arity$2(G__78318,G__78319) : op_78433.call(null,G__78318,G__78319));
});})(seq__78290_78428,chunk__78291_78429,count__78292_78430,i__78293_78431,op_78433))
);

op_78433.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146),goog.math.Integer], null),((function (seq__78290_78428,chunk__78291_78429,count__78292_78430,i__78293_78431,op_78433){
return (function (a,b){
var G__78320 = goog.math.Integer.fromNumber(a);
var G__78321 = b;
return (op_78433.cljs$core$IFn$_invoke$arity$2 ? op_78433.cljs$core$IFn$_invoke$arity$2(G__78320,G__78321) : op_78433.call(null,G__78320,G__78321));
});})(seq__78290_78428,chunk__78291_78429,count__78292_78430,i__78293_78431,op_78433))
);

op_78433.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398)], null),((function (seq__78290_78428,chunk__78291_78429,count__78292_78430,i__78293_78431,op_78433){
return (function (a,b){
var G__78322 = Number(a);
var G__78323 = b;
return (op_78433.cljs$core$IFn$_invoke$arity$2 ? op_78433.cljs$core$IFn$_invoke$arity$2(G__78322,G__78323) : op_78433.call(null,G__78322,G__78323));
});})(seq__78290_78428,chunk__78291_78429,count__78292_78430,i__78293_78431,op_78433))
);

op_78433.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398),goog.math.Integer], null),((function (seq__78290_78428,chunk__78291_78429,count__78292_78430,i__78293_78431,op_78433){
return (function (a,b){
var G__78324 = a;
var G__78325 = Number(b);
return (op_78433.cljs$core$IFn$_invoke$arity$2 ? op_78433.cljs$core$IFn$_invoke$arity$2(G__78324,G__78325) : op_78433.call(null,G__78324,G__78325));
});})(seq__78290_78428,chunk__78291_78429,count__78292_78430,i__78293_78431,op_78433))
);

op_78433.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,sicmutils.numbers.goog$module$goog$math$Long], null),((function (seq__78290_78428,chunk__78291_78429,count__78292_78430,i__78293_78431,op_78433){
return (function (a,b){
var G__78326 = a;
var G__78327 = goog.math.Integer.fromNumber(b);
return (op_78433.cljs$core$IFn$_invoke$arity$2 ? op_78433.cljs$core$IFn$_invoke$arity$2(G__78326,G__78327) : op_78433.call(null,G__78326,G__78327));
});})(seq__78290_78428,chunk__78291_78429,count__78292_78430,i__78293_78431,op_78433))
);

op_78433.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long,goog.math.Integer], null),((function (seq__78290_78428,chunk__78291_78429,count__78292_78430,i__78293_78431,op_78433){
return (function (a,b){
var G__78328 = goog.math.Integer.fromNumber(a);
var G__78329 = b;
return (op_78433.cljs$core$IFn$_invoke$arity$2 ? op_78433.cljs$core$IFn$_invoke$arity$2(G__78328,G__78329) : op_78433.call(null,G__78328,G__78329));
});})(seq__78290_78428,chunk__78291_78429,count__78292_78430,i__78293_78431,op_78433))
);


var G__78438 = seq__78290_78428;
var G__78439 = chunk__78291_78429;
var G__78440 = count__78292_78430;
var G__78441 = (i__78293_78431 + (1));
seq__78290_78428 = G__78438;
chunk__78291_78429 = G__78439;
count__78292_78430 = G__78440;
i__78293_78431 = G__78441;
continue;
} else {
var temp__5753__auto___78442 = cljs.core.seq(seq__78290_78428);
if(temp__5753__auto___78442){
var seq__78290_78443__$1 = temp__5753__auto___78442;
if(cljs.core.chunked_seq_QMARK_(seq__78290_78443__$1)){
var c__4679__auto___78444 = cljs.core.chunk_first(seq__78290_78443__$1);
var G__78446 = cljs.core.chunk_rest(seq__78290_78443__$1);
var G__78447 = c__4679__auto___78444;
var G__78448 = cljs.core.count(c__4679__auto___78444);
var G__78449 = (0);
seq__78290_78428 = G__78446;
chunk__78291_78429 = G__78447;
count__78292_78430 = G__78448;
i__78293_78431 = G__78449;
continue;
} else {
var op_78450 = cljs.core.first(seq__78290_78443__$1);
op_78450.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),((function (seq__78290_78428,chunk__78291_78429,count__78292_78430,i__78293_78431,op_78450,seq__78290_78443__$1,temp__5753__auto___78442){
return (function (a,b){
var G__78330 = a;
var G__78331 = goog.math.Integer.fromNumber(b);
return (op_78450.cljs$core$IFn$_invoke$arity$2 ? op_78450.cljs$core$IFn$_invoke$arity$2(G__78330,G__78331) : op_78450.call(null,G__78330,G__78331));
});})(seq__78290_78428,chunk__78291_78429,count__78292_78430,i__78293_78431,op_78450,seq__78290_78443__$1,temp__5753__auto___78442))
);

op_78450.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146),goog.math.Integer], null),((function (seq__78290_78428,chunk__78291_78429,count__78292_78430,i__78293_78431,op_78450,seq__78290_78443__$1,temp__5753__auto___78442){
return (function (a,b){
var G__78332 = goog.math.Integer.fromNumber(a);
var G__78333 = b;
return (op_78450.cljs$core$IFn$_invoke$arity$2 ? op_78450.cljs$core$IFn$_invoke$arity$2(G__78332,G__78333) : op_78450.call(null,G__78332,G__78333));
});})(seq__78290_78428,chunk__78291_78429,count__78292_78430,i__78293_78431,op_78450,seq__78290_78443__$1,temp__5753__auto___78442))
);

op_78450.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398)], null),((function (seq__78290_78428,chunk__78291_78429,count__78292_78430,i__78293_78431,op_78450,seq__78290_78443__$1,temp__5753__auto___78442){
return (function (a,b){
var G__78334 = Number(a);
var G__78335 = b;
return (op_78450.cljs$core$IFn$_invoke$arity$2 ? op_78450.cljs$core$IFn$_invoke$arity$2(G__78334,G__78335) : op_78450.call(null,G__78334,G__78335));
});})(seq__78290_78428,chunk__78291_78429,count__78292_78430,i__78293_78431,op_78450,seq__78290_78443__$1,temp__5753__auto___78442))
);

op_78450.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398),goog.math.Integer], null),((function (seq__78290_78428,chunk__78291_78429,count__78292_78430,i__78293_78431,op_78450,seq__78290_78443__$1,temp__5753__auto___78442){
return (function (a,b){
var G__78336 = a;
var G__78337 = Number(b);
return (op_78450.cljs$core$IFn$_invoke$arity$2 ? op_78450.cljs$core$IFn$_invoke$arity$2(G__78336,G__78337) : op_78450.call(null,G__78336,G__78337));
});})(seq__78290_78428,chunk__78291_78429,count__78292_78430,i__78293_78431,op_78450,seq__78290_78443__$1,temp__5753__auto___78442))
);

op_78450.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,sicmutils.numbers.goog$module$goog$math$Long], null),((function (seq__78290_78428,chunk__78291_78429,count__78292_78430,i__78293_78431,op_78450,seq__78290_78443__$1,temp__5753__auto___78442){
return (function (a,b){
var G__78338 = a;
var G__78339 = goog.math.Integer.fromNumber(b);
return (op_78450.cljs$core$IFn$_invoke$arity$2 ? op_78450.cljs$core$IFn$_invoke$arity$2(G__78338,G__78339) : op_78450.call(null,G__78338,G__78339));
});})(seq__78290_78428,chunk__78291_78429,count__78292_78430,i__78293_78431,op_78450,seq__78290_78443__$1,temp__5753__auto___78442))
);

op_78450.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.numbers.goog$module$goog$math$Long,goog.math.Integer], null),((function (seq__78290_78428,chunk__78291_78429,count__78292_78430,i__78293_78431,op_78450,seq__78290_78443__$1,temp__5753__auto___78442){
return (function (a,b){
var G__78340 = goog.math.Integer.fromNumber(a);
var G__78341 = b;
return (op_78450.cljs$core$IFn$_invoke$arity$2 ? op_78450.cljs$core$IFn$_invoke$arity$2(G__78340,G__78341) : op_78450.call(null,G__78340,G__78341));
});})(seq__78290_78428,chunk__78291_78429,count__78292_78430,i__78293_78431,op_78450,seq__78290_78443__$1,temp__5753__auto___78442))
);


var G__78451 = cljs.core.next(seq__78290_78443__$1);
var G__78452 = null;
var G__78453 = (0);
var G__78454 = (0);
seq__78290_78428 = G__78451;
chunk__78291_78429 = G__78452;
count__78292_78430 = G__78453;
i__78293_78431 = G__78454;
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
