goog.provide('sicmutils.euclid');
/**
 * Returns a vector containing the [greatest common
 *   divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor) and
 *   the [Bézout coefficients](https://en.wikipedia.org/wiki/Bézout%27s_identity)
 *   corresponding to the inputs `a` and `b`.
 * 
 *   For more info, see the Wikipedia article on the [Extended Euclidean
 *   algorithm](http://en.wikipedia.org/wiki/Extended_Euclidean_algorithm).
 */
sicmutils.euclid.extended_gcd = (function sicmutils$euclid$extended_gcd(a,b){
if(sicmutils.value.zero_QMARK_(a)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(b),(0),(1)], null);
} else {
if(sicmutils.value.zero_QMARK_(b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(a),(1),(0)], null);
} else {
var s = (0);
var s0 = (1);
var t = (1);
var t0 = (0);
var r = sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(b);
var r0 = sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(a);
while(true){
if(sicmutils.value.zero_QMARK_(r)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r0,s0,t0], null);
} else {
var q = sicmutils.generic.quotient.cljs$core$IFn$_invoke$arity$2(r0,r);
var G__95587 = sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(s0,sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q,s));
var G__95588 = s;
var G__95589 = sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(t0,sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q,t));
var G__95590 = t;
var G__95591 = sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(r0,sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q,r));
var G__95592 = r;
s = G__95587;
s0 = G__95588;
t = G__95589;
t0 = G__95590;
r = G__95591;
r0 = G__95592;
continue;
}
break;
}

}
}
});
/**
 * Returns the [greatest common
 *   divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor) of the two
 *   inputs `a` and `b`.
 */
sicmutils.euclid.gcd = (function sicmutils$euclid$gcd(a,b){
if(sicmutils.value.zero_QMARK_(a)){
return sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(b);
} else {
if(sicmutils.value.zero_QMARK_(b)){
return sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(a);
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(a,b);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(a,sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(b));
}
})())){
return sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(a);
} else {
if((!(((sicmutils.value.integral_QMARK_(a)) && (sicmutils.value.integral_QMARK_(b)))))){
return (1);
} else {
var a__$1 = sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(a);
var b__$1 = sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(b);
while(true){
if(sicmutils.value.zero_QMARK_(b__$1)){
return a__$1;
} else {
var G__95593 = b__$1;
var G__95594 = sicmutils.generic.remainder.cljs$core$IFn$_invoke$arity$2(a__$1,b__$1);
a__$1 = G__95593;
b__$1 = G__95594;
continue;
}
break;
}

}
}
}
}
});
sicmutils.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a,b){
return sicmutils.euclid.gcd(a,b);
}));

//# sourceMappingURL=sicmutils.euclid.js.map
