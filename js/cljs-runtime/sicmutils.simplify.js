goog.provide('sicmutils.simplify');
/**
 * Returns a function that invokes f, but catches TimeoutException;
 *   if that exception is caught, then x is returned in lieu of (f x).
 */
sicmutils.simplify.unless_timeout = (function sicmutils$simplify$unless_timeout(f){
return (function (x){
try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
}catch (e100904){if((e100904 instanceof Error)){
var _ = e100904;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"sicmutils.simplify",null,22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["simplifier timed out: must have been a complicated expression"], null);
}),null)),null,-1486305957,null);

return x;
} else {
throw e100904;

}
}});
});
/**
 * An analyzer capable of simplifying sums and products, but unable to cancel
 *   across the fraction bar.
 *   NOTE: I think this is fpf:analyzer in the scheme code.
 */
sicmutils.simplify.poly_analyzer = (function sicmutils$simplify$poly_analyzer(){
var gensym = sicmutils.expression.analyze.monotonic_symbol_generator("-s-");
return sicmutils.expression.analyze.make_analyzer.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.analyzer,gensym);
});
/**
 * An analyzer capable of simplifying expressions built out of rational
 *   functions.
 *   NOTE: This is rcf:analyzer.
 */
sicmutils.simplify.rational_function_analyzer = (function sicmutils$simplify$rational_function_analyzer(){
var gensym = sicmutils.expression.analyze.monotonic_symbol_generator("-r-");
return sicmutils.expression.analyze.make_analyzer.cljs$core$IFn$_invoke$arity$2(sicmutils.rational_function.analyzer,gensym);
});
sicmutils.simplify._STAR_poly_simplify_STAR_ = cljs.core.memoize(sicmutils.expression.analyze.expression_simplifier(sicmutils.simplify.poly_analyzer()));
sicmutils.simplify._STAR_rf_simplify_STAR_ = sicmutils.simplify.unless_timeout(cljs.core.memoize(sicmutils.expression.analyze.expression_simplifier(sicmutils.simplify.rational_function_analyzer())));
/**
 * Returns the result of executing the supplied `thunk` in an environment where
 *   the [[*rf-simplify*]] and [[*poly-simplify*]] are not memoized.
 */
sicmutils.simplify.hermetic_simplify_fixture = (function sicmutils$simplify$hermetic_simplify_fixture(thunk){
var _STAR_rf_simplify_STAR__orig_val__100917 = sicmutils.simplify._STAR_rf_simplify_STAR_;
var _STAR_poly_simplify_STAR__orig_val__100918 = sicmutils.simplify._STAR_poly_simplify_STAR_;
var _STAR_rf_simplify_STAR__temp_val__100919 = sicmutils.simplify.unless_timeout(sicmutils.expression.analyze.expression_simplifier(sicmutils.simplify.rational_function_analyzer()));
var _STAR_poly_simplify_STAR__temp_val__100920 = sicmutils.simplify.unless_timeout(sicmutils.expression.analyze.expression_simplifier(sicmutils.simplify.poly_analyzer()));
(sicmutils.simplify._STAR_rf_simplify_STAR_ = _STAR_rf_simplify_STAR__temp_val__100919);

(sicmutils.simplify._STAR_poly_simplify_STAR_ = _STAR_poly_simplify_STAR__temp_val__100920);

try{return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
}finally {(sicmutils.simplify._STAR_poly_simplify_STAR_ = _STAR_poly_simplify_STAR__orig_val__100918);

(sicmutils.simplify._STAR_rf_simplify_STAR_ = _STAR_rf_simplify_STAR__orig_val__100917);
}});
sicmutils.simplify.simplify_and_flatten = (function sicmutils$simplify$simplify_and_flatten(expr){
return sicmutils.simplify._STAR_poly_simplify_STAR_.call(null,sicmutils.simplify._STAR_rf_simplify_STAR_.call(null,expr));
});
sicmutils.simplify.simplify_until_stable = (function sicmutils$simplify$simplify_until_stable(rule_simplify,canonicalize){
return (function (expr){
while(true){
var new_expr = (rule_simplify.cljs$core$IFn$_invoke$arity$1 ? rule_simplify.cljs$core$IFn$_invoke$arity$1(expr) : rule_simplify.call(null,expr));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expr,new_expr)){
return expr;
} else {
var canonicalized_expr = (canonicalize.cljs$core$IFn$_invoke$arity$1 ? canonicalize.cljs$core$IFn$_invoke$arity$1(new_expr) : canonicalize.call(null,new_expr));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(canonicalized_expr,expr)){
return expr;
} else {
if(sicmutils.value.zero_QMARK_(sicmutils.simplify._STAR_poly_simplify_STAR_.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,expr,(new cljs.core.List(null,canonicalized_expr,null,(1),null)),(2),null)),(3),null))))){
return canonicalized_expr;
} else {
var G__100942 = canonicalized_expr;
expr = G__100942;
continue;

}
}
}
break;
}
});
});
sicmutils.simplify.simplify_and_canonicalize = (function sicmutils$simplify$simplify_and_canonicalize(rule_simplify,canonicalize){
return (function (expr){
var new_expr = (rule_simplify.cljs$core$IFn$_invoke$arity$1 ? rule_simplify.cljs$core$IFn$_invoke$arity$1(expr) : rule_simplify.call(null,expr));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expr,new_expr)){
return expr;
} else {
return (canonicalize.cljs$core$IFn$_invoke$arity$1 ? canonicalize.cljs$core$IFn$_invoke$arity$1(new_expr) : canonicalize.call(null,new_expr));
}
});
});
sicmutils.simplify.clear_square_roots_of_perfect_squares = sicmutils.simplify.simplify_and_canonicalize(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sicmutils.simplify.rules.universal_reductions(new cljs.core.Var(function(){return sicmutils.simplify._STAR_rf_simplify_STAR_;},new cljs.core.Symbol("sicmutils.simplify","*rf-simplify*","sicmutils.simplify/*rf-simplify*",1471050518,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sicmutils.simplify","sicmutils.simplify",643644234,null),new cljs.core.Symbol(null,"*rf-simplify*","*rf-simplify*",-1292516740,null),"sicmutils/simplify.cljc",29,1,true,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(sicmutils.simplify._STAR_rf_simplify_STAR_)?sicmutils.simplify._STAR_rf_simplify_STAR_.cljs$lang$test:null)]))),sicmutils.polynomial.factor.root_out_squares),sicmutils.simplify.simplify_and_flatten);
/**
 * If the supplied `bool` is true, returns `f`, else returns `identity`.
 */
sicmutils.simplify.only_if = (function sicmutils$simplify$only_if(bool,f){
if(cljs.core.truth_(bool)){
return f;
} else {
return cljs.core.identity;
}
});
var universal_reductions_100943 = sicmutils.simplify.rules.universal_reductions(new cljs.core.Var(function(){return sicmutils.simplify._STAR_rf_simplify_STAR_;},new cljs.core.Symbol("sicmutils.simplify","*rf-simplify*","sicmutils.simplify/*rf-simplify*",1471050518,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sicmutils.simplify","sicmutils.simplify",643644234,null),new cljs.core.Symbol(null,"*rf-simplify*","*rf-simplify*",-1292516740,null),"sicmutils/simplify.cljc",29,1,true,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(sicmutils.simplify._STAR_rf_simplify_STAR_)?sicmutils.simplify._STAR_rf_simplify_STAR_.cljs$lang$test:null)])));
var sqrt_contract_100944 = sicmutils.simplify.rules.sqrt_contract(new cljs.core.Var(function(){return sicmutils.simplify._STAR_rf_simplify_STAR_;},new cljs.core.Symbol("sicmutils.simplify","*rf-simplify*","sicmutils.simplify/*rf-simplify*",1471050518,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sicmutils.simplify","sicmutils.simplify",643644234,null),new cljs.core.Symbol(null,"*rf-simplify*","*rf-simplify*",-1292516740,null),"sicmutils/simplify.cljc",29,1,true,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(sicmutils.simplify._STAR_rf_simplify_STAR_)?sicmutils.simplify._STAR_rf_simplify_STAR_.cljs$lang$test:null)])));
var sqrt_expand_100945 = sicmutils.simplify.rules.sqrt_expand(new cljs.core.Var(function(){return sicmutils.simplify._STAR_rf_simplify_STAR_;},new cljs.core.Symbol("sicmutils.simplify","*rf-simplify*","sicmutils.simplify/*rf-simplify*",1471050518,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sicmutils.simplify","sicmutils.simplify",643644234,null),new cljs.core.Symbol(null,"*rf-simplify*","*rf-simplify*",-1292516740,null),"sicmutils/simplify.cljc",29,1,true,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(sicmutils.simplify._STAR_rf_simplify_STAR_)?sicmutils.simplify._STAR_rf_simplify_STAR_.cljs$lang$test:null)])));
var log_contract_100946 = sicmutils.simplify.rules.log_contract(new cljs.core.Var(function(){return sicmutils.simplify._STAR_rf_simplify_STAR_;},new cljs.core.Symbol("sicmutils.simplify","*rf-simplify*","sicmutils.simplify/*rf-simplify*",1471050518,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sicmutils.simplify","sicmutils.simplify",643644234,null),new cljs.core.Symbol(null,"*rf-simplify*","*rf-simplify*",-1292516740,null),"sicmutils/simplify.cljc",29,1,true,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(sicmutils.simplify._STAR_rf_simplify_STAR_)?sicmutils.simplify._STAR_rf_simplify_STAR_.cljs$lang$test:null)])));
var sincos_random_100947 = sicmutils.simplify.rules.sincos_random(new cljs.core.Var(function(){return sicmutils.simplify._STAR_rf_simplify_STAR_;},new cljs.core.Symbol("sicmutils.simplify","*rf-simplify*","sicmutils.simplify/*rf-simplify*",1471050518,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sicmutils.simplify","sicmutils.simplify",643644234,null),new cljs.core.Symbol(null,"*rf-simplify*","*rf-simplify*",-1292516740,null),"sicmutils/simplify.cljc",29,1,true,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(sicmutils.simplify._STAR_rf_simplify_STAR_)?sicmutils.simplify._STAR_rf_simplify_STAR_.cljs$lang$test:null)])));
var sincos_flush_ones_100948 = sicmutils.simplify.rules.sincos_flush_ones(new cljs.core.Var(function(){return sicmutils.simplify._STAR_rf_simplify_STAR_;},new cljs.core.Symbol("sicmutils.simplify","*rf-simplify*","sicmutils.simplify/*rf-simplify*",1471050518,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sicmutils.simplify","sicmutils.simplify",643644234,null),new cljs.core.Symbol(null,"*rf-simplify*","*rf-simplify*",-1292516740,null),"sicmutils/simplify.cljc",29,1,true,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(sicmutils.simplify._STAR_rf_simplify_STAR_)?sicmutils.simplify._STAR_rf_simplify_STAR_.cljs$lang$test:null)])));
/**
 * Simplifies an expression representing a complex number. TODO say more!
 */
sicmutils.simplify.simplify_expression = (function sicmutils$simplify$simplify_expression(expr){
var syms = sicmutils.expression.variables_in(expr);
var sqrt_QMARK_ = sicmutils.simplify.rules.occurs_in_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),null], null), null),syms);
var full_sqrt_QMARK_ = (function (){var and__4251__auto__ = sicmutils.simplify.rules._STAR_sqrt_factor_simplify_QMARK__STAR_;
if(cljs.core.truth_(and__4251__auto__)){
return sicmutils.simplify.rules.occurs_in_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),null], null), null),syms);
} else {
return and__4251__auto__;
}
})();
var logexp_QMARK_ = sicmutils.simplify.rules.occurs_in_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"log","log",45015523,null),null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),null], null), null),syms);
var trig_QMARK_ = sicmutils.simplify.rules.occurs_in_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null,new cljs.core.Symbol(null,"sec","sec",60154974,null),null,new cljs.core.Symbol(null,"cot","cot",-1635649012,null),null,new cljs.core.Symbol(null,"csc","csc",-427853492,null),null], null), null),syms);
var partials_QMARK_ = sicmutils.simplify.rules.occurs_in_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"partial","partial",1881673272,null),null], null), null),syms);
var simple = cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(sicmutils.simplify.only_if(sicmutils.simplify.rules._STAR_divide_numbers_through_simplify_QMARK__STAR_,sicmutils.simplify.rules.divide_numbers_through),sicmutils.simplify.only_if(sqrt_QMARK_,sicmutils.simplify.clear_square_roots_of_perfect_squares),sicmutils.simplify.only_if(full_sqrt_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(sicmutils.simplify.simplify_until_stable(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(universal_reductions_100943,sqrt_expand_100945),sicmutils.simplify.simplify_and_flatten),sicmutils.simplify.clear_square_roots_of_perfect_squares,sicmutils.simplify.simplify_until_stable(sqrt_contract_100944,sicmutils.simplify.simplify_and_flatten))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.simplify.only_if(trig_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(sicmutils.simplify.simplify_and_canonicalize(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(universal_reductions_100943,sicmutils.simplify.rules.sincos__GT_trig),sicmutils.simplify.simplify_and_flatten),sicmutils.simplify.simplify_and_canonicalize(sicmutils.simplify.rules.complex_trig,sicmutils.simplify.simplify_and_flatten),sicmutils.simplify.simplify_and_canonicalize(sicmutils.simplify.rules.angular_parity,sicmutils.simplify.simplify_and_flatten),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.simplify.simplify_until_stable(sincos_random_100947,sicmutils.simplify.simplify_and_flatten),sicmutils.simplify.simplify_and_canonicalize(sicmutils.simplify.rules.sin_sq__GT_cos_sq,sicmutils.simplify.simplify_and_flatten),sicmutils.simplify.simplify_and_canonicalize(sincos_flush_ones_100948,sicmutils.simplify.simplify_and_flatten),sicmutils.simplify.only_if(sicmutils.simplify.rules._STAR_trig_product_to_sum_simplify_QMARK__STAR_,sicmutils.simplify.simplify_and_canonicalize(sicmutils.simplify.rules.trig_COLON_product__GT_sum,sicmutils.simplify.simplify_and_flatten)),sicmutils.simplify.simplify_and_canonicalize(universal_reductions_100943,sicmutils.simplify.simplify_and_flatten),sicmutils.simplify.simplify_until_stable(sincos_random_100947,sicmutils.simplify.simplify_and_flatten),sicmutils.simplify.simplify_and_canonicalize(sicmutils.simplify.rules.sin_sq__GT_cos_sq,sicmutils.simplify.simplify_and_flatten),sicmutils.simplify.simplify_and_canonicalize(sincos_flush_ones_100948,sicmutils.simplify.simplify_and_flatten)], 0))),sicmutils.simplify.only_if(logexp_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(sicmutils.simplify.simplify_and_canonicalize(universal_reductions_100943,sicmutils.simplify.simplify_and_flatten),sicmutils.simplify.simplify_until_stable(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sicmutils.simplify.rules.log_expand,sicmutils.simplify.rules.exp_expand),sicmutils.simplify.simplify_and_flatten),sicmutils.simplify.simplify_until_stable(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(log_contract_100946,sicmutils.simplify.rules.exp_contract),sicmutils.simplify.simplify_and_flatten))),sicmutils.simplify.simplify_until_stable(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(universal_reductions_100943,sicmutils.simplify.only_if(logexp_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sicmutils.simplify.rules.log_expand,sicmutils.simplify.rules.exp_expand)),sicmutils.simplify.only_if(sqrt_QMARK_,sqrt_expand_100945)),sicmutils.simplify.simplify_and_flatten),sicmutils.simplify.only_if(trig_QMARK_,sicmutils.simplify.simplify_and_canonicalize(sicmutils.simplify.rules.angular_parity,sicmutils.simplify.simplify_and_flatten)),sicmutils.simplify.simplify_and_canonicalize(sicmutils.simplify.rules.trig__GT_sincos,sicmutils.simplify.simplify_and_flatten),sicmutils.simplify.only_if(partials_QMARK_,sicmutils.simplify.simplify_and_canonicalize(sicmutils.simplify.rules.canonicalize_partials,sicmutils.simplify.simplify_and_flatten)),sicmutils.simplify.simplify_and_flatten], 0));
return simple(expr);
});

//# sourceMappingURL=sicmutils.simplify.js.map
