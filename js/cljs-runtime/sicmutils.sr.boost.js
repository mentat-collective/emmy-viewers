goog.provide('sicmutils.sr.boost');
sicmutils.sr.boost.make_four_tuple = (function sicmutils$sr$boost$make_four_tuple(ct,p__103472){
var vec__103473 = p__103472;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103473,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103473,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103473,(2),null);
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ct,x,y,z], 0));
});
sicmutils.sr.boost.four_tuple__GT_ct = (function sicmutils$sr$boost$four_tuple__GT_ct(p__103476){
var vec__103477 = p__103476;
var ct = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103477,(0),null);
return ct;
});
sicmutils.sr.boost.four_tuple__GT_space = (function sicmutils$sr$boost$four_tuple__GT_space(p__103480){
var vec__103481 = p__103480;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103481,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103481,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103481,(2),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103481,(3),null);
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y,z], 0));
});
sicmutils.sr.boost.proper_time_interval = (function sicmutils$sr$boost$proper_time_interval(four_tuple){
return sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(sicmutils.sr.boost.four_tuple__GT_ct(four_tuple)),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(sicmutils.sr.boost.four_tuple__GT_space(four_tuple))));
});
sicmutils.sr.boost.proper_space_interval = (function sicmutils$sr$boost$proper_space_interval(four_tuple){
return sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(sicmutils.sr.boost.four_tuple__GT_space(four_tuple)),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(sicmutils.sr.boost.four_tuple__GT_ct(four_tuple))));
});
sicmutils.sr.boost.general_boost = (function sicmutils$sr$boost$general_boost(beta){
return (function (xi_p){
var gamma = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(beta))));
var factor = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((-1),gamma),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(beta));
var xi_p_time = sicmutils.sr.boost.four_tuple__GT_ct(xi_p);
var xi_p_space = sicmutils.sr.boost.four_tuple__GT_space(xi_p);
var beta_dot_xi_p = sicmutils.generic.dot_product.cljs$core$IFn$_invoke$arity$2(beta,xi_p_space);
return sicmutils.sr.boost.make_four_tuple(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(gamma,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(xi_p_time,beta_dot_xi_p)),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(gamma,beta,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xi_p_time], 0)),xi_p_space,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(factor,beta,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([beta_dot_xi_p], 0))], 0)));
});
});
/**
 * Takes a unit 3-vector `direction` (representing a direction) and a velocity
 *   `v:c` normalized by `C`.
 */
sicmutils.sr.boost.general_boost2 = (function sicmutils$sr$boost$general_boost2(direction,v_COLON_c){
return (function (four_tuple_prime){
var delta_ct_prime = sicmutils.sr.boost.four_tuple__GT_ct(four_tuple_prime);
var delta_x_prime = sicmutils.sr.boost.four_tuple__GT_space(four_tuple_prime);
var betasq = sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(v_COLON_c);
var bx = sicmutils.generic.dot_product.cljs$core$IFn$_invoke$arity$2(direction,delta_x_prime);
var gamma = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((1),betasq)));
var alpha = sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(gamma,(1));
var delta_ct = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(gamma,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(delta_ct_prime,sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(bx,v_COLON_c)));
var delta_x = sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(gamma,v_COLON_c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([direction,delta_ct_prime], 0)),delta_x_prime,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(alpha,direction,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bx], 0))], 0));
return sicmutils.sr.boost.make_four_tuple(delta_ct,delta_x);
});
});
sicmutils.sr.boost.extended_rotation = (function sicmutils$sr$boost$extended_rotation(R){
return (function (xi_p){
return sicmutils.sr.boost.make_four_tuple(sicmutils.sr.boost.four_tuple__GT_ct(xi_p),(function (){var G__103488 = sicmutils.sr.boost.four_tuple__GT_space(xi_p);
return (R.cljs$core$IFn$_invoke$arity$1 ? R.cljs$core$IFn$_invoke$arity$1(G__103488) : R.call(null,G__103488));
})());
});
});

//# sourceMappingURL=sicmutils.sr.boost.js.map
