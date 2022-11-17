goog.provide('sicmutils.mechanics.time_evolution');
sicmutils.mechanics.time_evolution.shift_t = (function sicmutils$mechanics$time_evolution$shift_t(delta_t){
return (function (p__103487){
var vec__103489 = p__103487;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103489,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103489,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103489,(2),null);
return sicmutils.mechanics.hamilton.__GT_H_state(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(t,delta_t),q,p);
});
});
sicmutils.mechanics.time_evolution.C__GT_Cp = (function sicmutils$mechanics$time_evolution$C__GT_Cp(C){
return (function (delta_t){
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(delta_t) : C.call(null,delta_t)),sicmutils.mechanics.time_evolution.shift_t(sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(delta_t))], 0));
});
});
sicmutils.mechanics.time_evolution.H__GT_Hp = (function sicmutils$mechanics$time_evolution$H__GT_Hp(delta_t){
return (function (H){
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([H,sicmutils.mechanics.time_evolution.shift_t(sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(delta_t))], 0));
});
});

//# sourceMappingURL=sicmutils.mechanics.time_evolution.js.map
