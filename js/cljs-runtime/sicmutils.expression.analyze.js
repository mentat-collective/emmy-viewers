goog.provide('sicmutils.expression.analyze');
/**
 * Exponential expressions with non-integer exponents must become
 *     kernels, because they cannot become polynomial exponentials.
 * 
 *     To disable this guard, bind this variable to `false`.
 */
sicmutils.expression.analyze._STAR_inhibit_expt_simplify_STAR_ = true;
/**
 * Returns
 *   a [Comparator](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html)
 *   function taking account of the input variable set `var-set` in the following
 *   way:
 * 
 *   If both inputs to the comparator are in `var-set,` or both are not, then the
 *   results are as `clojure.core/compare` would return. But if one is in `var-set`
 *   and the other is not, then the other will always compare greater.
 * 
 *   In this way, expressions produced by the simplifier will have simple variables
 *   sorted earlier than expressions involving those variables.
 */
sicmutils.expression.analyze.make_vcompare = (function sicmutils$expression$analyze$make_vcompare(var_set){
return (function (v,w){
if(cljs.core.truth_((var_set.cljs$core$IFn$_invoke$arity$1 ? var_set.cljs$core$IFn$_invoke$arity$1(v) : var_set.call(null,v)))){
if(cljs.core.truth_((var_set.cljs$core$IFn$_invoke$arity$1 ? var_set.cljs$core$IFn$_invoke$arity$1(w) : var_set.call(null,w)))){
return cljs.core.compare(v,w);
} else {
return (-1);
}
} else {
if(cljs.core.truth_((var_set.cljs$core$IFn$_invoke$arity$1 ? var_set.cljs$core$IFn$_invoke$arity$1(w) : var_set.call(null,w)))){
return (1);
} else {
return cljs.core.compare(v,w);

}
}
});
});
/**
 * Returns a function which generates a sequence of symbols with the given
 *   `prefix` with the property that later symbols will sort after earlier symbols.
 * 
 *   This is important for the stability of the simplifier. (If we just used
 *   `clojure.core/gensym`, then a temporary symbol like `G__1000` will sort
 *   earlier than `G__999`. This will trigger errors at unpredictable times,
 *   whenever `clojure.core/gensym` returns two symbols that cross an
 *   order-of-magnitude boundary.)
 */
sicmutils.expression.analyze.monotonic_symbol_generator = (function sicmutils$expression$analyze$monotonic_symbol_generator(prefix){
var count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
return (function (){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var i = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(count,cljs.core.inc);
var suffix = i.toString((16)).padStart((16),"0");
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
})());
});
});

/**
 * [[ICanonicalize]] captures the methods exposed by a SICMUtils analyzer backend.
 * @interface
 */
sicmutils.expression.analyze.ICanonicalize = function(){};

var sicmutils$expression$analyze$ICanonicalize$expression__GT_$dyn_98490 = (function() {
var G__98491 = null;
var G__98491__3 = (function (analyzer,x,continue$){
var x__4550__auto__ = (((analyzer == null))?null:analyzer);
var m__4551__auto__ = (sicmutils.expression.analyze.expression__GT_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(analyzer,x,continue$) : m__4551__auto__.call(null,analyzer,x,continue$));
} else {
var m__4549__auto__ = (sicmutils.expression.analyze.expression__GT_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(analyzer,x,continue$) : m__4549__auto__.call(null,analyzer,x,continue$));
} else {
throw cljs.core.missing_protocol("ICanonicalize.expression->",analyzer);
}
}
});
var G__98491__4 = (function (analyzer,x,continue$,compare_fn){
var x__4550__auto__ = (((analyzer == null))?null:analyzer);
var m__4551__auto__ = (sicmutils.expression.analyze.expression__GT_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(analyzer,x,continue$,compare_fn) : m__4551__auto__.call(null,analyzer,x,continue$,compare_fn));
} else {
var m__4549__auto__ = (sicmutils.expression.analyze.expression__GT_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(analyzer,x,continue$,compare_fn) : m__4549__auto__.call(null,analyzer,x,continue$,compare_fn));
} else {
throw cljs.core.missing_protocol("ICanonicalize.expression->",analyzer);
}
}
});
G__98491 = function(analyzer,x,continue$,compare_fn){
switch(arguments.length){
case 3:
return G__98491__3.call(this,analyzer,x,continue$);
case 4:
return G__98491__4.call(this,analyzer,x,continue$,compare_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__98491.cljs$core$IFn$_invoke$arity$3 = G__98491__3;
G__98491.cljs$core$IFn$_invoke$arity$4 = G__98491__4;
return G__98491;
})()
;
/**
 * Invokes `continue` with two arguments:
 * 
 *   - A version of `x` converted to the canonical form represented by `analyzer`
 *   - A (sorted by `compare-fn`) sequence of variables found in `x`.
 * 
 *   `compare-fn` is used to sort variables. Defaults
 *   to [[clojure.core/compare]].
 */
sicmutils.expression.analyze.expression__GT_ = (function sicmutils$expression$analyze$expression__GT_(var_args){
var G__98336 = arguments.length;
switch (G__98336) {
case 3:
return sicmutils.expression.analyze.expression__GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sicmutils.expression.analyze.expression__GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.expression.analyze.expression__GT_.cljs$core$IFn$_invoke$arity$3 = (function (analyzer,x,continue$){
if((((!((analyzer == null)))) && ((!((analyzer.sicmutils$expression$analyze$ICanonicalize$expression__GT_$arity$3 == null)))))){
return analyzer.sicmutils$expression$analyze$ICanonicalize$expression__GT_$arity$3(analyzer,x,continue$);
} else {
return sicmutils$expression$analyze$ICanonicalize$expression__GT_$dyn_98490(analyzer,x,continue$);
}
}));

(sicmutils.expression.analyze.expression__GT_.cljs$core$IFn$_invoke$arity$4 = (function (analyzer,x,continue$,compare_fn){
if((((!((analyzer == null)))) && ((!((analyzer.sicmutils$expression$analyze$ICanonicalize$expression__GT_$arity$4 == null)))))){
return analyzer.sicmutils$expression$analyze$ICanonicalize$expression__GT_$arity$4(analyzer,x,continue$,compare_fn);
} else {
return sicmutils$expression$analyze$ICanonicalize$expression__GT_$dyn_98490(analyzer,x,continue$,compare_fn);
}
}));

(sicmutils.expression.analyze.expression__GT_.cljs$lang$maxFixedArity = 4);


var sicmutils$expression$analyze$ICanonicalize$__GT_expression$dyn_98501 = (function (analyzer,b,variables){
var x__4550__auto__ = (((analyzer == null))?null:analyzer);
var m__4551__auto__ = (sicmutils.expression.analyze.__GT_expression[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(analyzer,b,variables) : m__4551__auto__.call(null,analyzer,b,variables));
} else {
var m__4549__auto__ = (sicmutils.expression.analyze.__GT_expression["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(analyzer,b,variables) : m__4549__auto__.call(null,analyzer,b,variables));
} else {
throw cljs.core.missing_protocol("ICanonicalize.->expression",analyzer);
}
}
});
/**
 * Convert a canonical form `b` back to S-expression form.
 * 
 *  Each [[ICanonicalize]] instance uses `variables` in different ways. The
 *  `variables` sequence is typically obtained from the continuation invoked
 *  by [[expression->]], so these functions are complementary.
 */
sicmutils.expression.analyze.__GT_expression = (function sicmutils$expression$analyze$__GT_expression(analyzer,b,variables){
if((((!((analyzer == null)))) && ((!((analyzer.sicmutils$expression$analyze$ICanonicalize$__GT_expression$arity$3 == null)))))){
return analyzer.sicmutils$expression$analyze$ICanonicalize$__GT_expression$arity$3(analyzer,b,variables);
} else {
return sicmutils$expression$analyze$ICanonicalize$__GT_expression$dyn_98501(analyzer,b,variables);
}
});

var sicmutils$expression$analyze$ICanonicalize$known_operation_QMARK_$dyn_98508 = (function (analyzer,x){
var x__4550__auto__ = (((analyzer == null))?null:analyzer);
var m__4551__auto__ = (sicmutils.expression.analyze.known_operation_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(analyzer,x) : m__4551__auto__.call(null,analyzer,x));
} else {
var m__4549__auto__ = (sicmutils.expression.analyze.known_operation_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(analyzer,x) : m__4549__auto__.call(null,analyzer,x));
} else {
throw cljs.core.missing_protocol("ICanonicalize.known-operation?",analyzer);
}
}
});
/**
 * Returns true if the symbolic operation `x` is considered fundamental by
 *  `analyzer`, false otherwise.
 */
sicmutils.expression.analyze.known_operation_QMARK_ = (function sicmutils$expression$analyze$known_operation_QMARK_(analyzer,x){
if((((!((analyzer == null)))) && ((!((analyzer.sicmutils$expression$analyze$ICanonicalize$known_operation_QMARK_$arity$2 == null)))))){
return analyzer.sicmutils$expression$analyze$ICanonicalize$known_operation_QMARK_$arity$2(analyzer,x);
} else {
return sicmutils$expression$analyze$ICanonicalize$known_operation_QMARK_$dyn_98508(analyzer,x);
}
});

/**
 * Make-analyzer takes an analyzer `backend` (which implements [[ICanonicalize]])
 *   and returns a dictionary with the apparatus necessary to prepare expressions
 *   for analysis by replacing subexpressions formed from operations unknown to the
 *   analyzer with generated symbols, and backsubstituting after analysis is
 *   complete.
 * 
 *   For example, in the case of polynomial canonical form, we would replace a
 *   subexpression like `(sin x)` with a gensym, before entry, since the `sin`
 *   operation is not available to the polynomial canonicalizer, and restore it
 *   afterwards.
 */
sicmutils.expression.analyze.make_analyzer = (function sicmutils$expression$analyze$make_analyzer(var_args){
var G__98417 = arguments.length;
switch (G__98417) {
case 1:
return sicmutils.expression.analyze.make_analyzer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.expression.analyze.make_analyzer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.expression.analyze.make_analyzer.cljs$core$IFn$_invoke$arity$1 = (function (backend){
return sicmutils.expression.analyze.make_analyzer.cljs$core$IFn$_invoke$arity$2(backend,sicmutils.expression.analyze.monotonic_symbol_generator("-g-"));
}));

(sicmutils.expression.analyze.make_analyzer.cljs$core$IFn$_invoke$arity$2 = (function (backend,symbol_generator){
var ref = cljs.core.atom;
var alter = cljs.core.swap_BANG_;
var ref_set = cljs.core.reset_BANG_;
var expr__GT_var = (function (){var G__98421 = cljs.core.PersistentArrayMap.EMPTY;
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__98421) : ref.call(null,G__98421));
})();
var var__GT_expr = (function (){var G__98422 = cljs.core.PersistentArrayMap.EMPTY;
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__98422) : ref.call(null,G__98422));
})();
var compare_fn = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.compare);
var add_symbol_BANG_ = (function sicmutils$expression$analyze$add_symbol_BANG_(expr){
if(cljs.core.truth_(unquoted_list_QMARK_(expr))){
var expr_k = sicmutils.value.freeze(expr);
return cljs.core.identity((function (){var temp__5751__auto__ = (function (){var fexpr__98463 = cljs.core.deref(expr__GT_var);
return (fexpr__98463.cljs$core$IFn$_invoke$arity$1 ? fexpr__98463.cljs$core$IFn$_invoke$arity$1(expr_k) : fexpr__98463.call(null,expr_k));
})();
if(cljs.core.truth_(temp__5751__auto__)){
var existing_expr = temp__5751__auto__;
return existing_expr;
} else {
var var$ = (symbol_generator.cljs$core$IFn$_invoke$arity$0 ? symbol_generator.cljs$core$IFn$_invoke$arity$0() : symbol_generator.call(null));
(alter.cljs$core$IFn$_invoke$arity$4 ? alter.cljs$core$IFn$_invoke$arity$4(expr__GT_var,cljs.core.assoc,expr_k,var$) : alter.call(null,expr__GT_var,cljs.core.assoc,expr_k,var$));

(alter.cljs$core$IFn$_invoke$arity$4 ? alter.cljs$core$IFn$_invoke$arity$4(var__GT_expr,cljs.core.assoc,var$,expr) : alter.call(null,var__GT_expr,cljs.core.assoc,var$,expr));

return var$;
}
})());
} else {
return expr;
}
});
var analyze = (function sicmutils$expression$analyze$analyze(expr){
var vcompare_98531 = sicmutils.expression.analyze.make_vcompare(sicmutils.expression.variables_in(expr));
cljs.core.reset_BANG_(compare_fn,vcompare_98531);

return ianalyze(expr);
});
var v_compare = (function sicmutils$expression$analyze$v_compare(v1,v2){
var fexpr__98464 = cljs.core.deref(compare_fn);
return (fexpr__98464.cljs$core$IFn$_invoke$arity$2 ? fexpr__98464.cljs$core$IFn$_invoke$arity$2(v1,v2) : fexpr__98464.call(null,v1,v2));
});
var ianalyze = (function sicmutils$expression$analyze$ianalyze(expr){
if(cljs.core.truth_(unquoted_list_QMARK_(expr))){
var analyzed_expr = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils$expression$analyze$ianalyze,expr));
if(cljs.core.truth_((function (){var and__4251__auto__ = sicmutils.expression.analyze.known_operation_QMARK_(backend,(sicmutils.numsymb.operator.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operator.cljs$core$IFn$_invoke$arity$1(analyzed_expr) : sicmutils.numsymb.operator.call(null,analyzed_expr)));
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not((function (){var and__4251__auto____$1 = sicmutils.expression.analyze._STAR_inhibit_expt_simplify_STAR_;
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sicmutils.numsymb.expt_QMARK_(analyzed_expr);
if(cljs.core.truth_(and__4251__auto____$2)){
return (!(sicmutils.value.integral_QMARK_(cljs.core.second((sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1(analyzed_expr) : sicmutils.numsymb.operands.call(null,analyzed_expr))))));
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
})());
} else {
return and__4251__auto__;
}
})())){
return analyzed_expr;
} else {
var temp__5751__auto__ = (function (){var fexpr__98465 = cljs.core.deref(expr__GT_var);
return (fexpr__98465.cljs$core$IFn$_invoke$arity$1 ? fexpr__98465.cljs$core$IFn$_invoke$arity$1(analyzed_expr) : fexpr__98465.call(null,analyzed_expr));
})();
if(cljs.core.truth_(temp__5751__auto__)){
var existing_expr = temp__5751__auto__;
return existing_expr;
} else {
return new_kernels(analyzed_expr);
}
}
} else {
return expr;
}
});
var unquoted_list_QMARK_ = (function sicmutils$expression$analyze$unquoted_list_QMARK_(expr){
return ((cljs.core.sequential_QMARK_(expr)) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(expr),new cljs.core.Symbol(null,"quote","quote",1377916282,null))))));
});
var new_analysis_BANG_ = (function sicmutils$expression$analyze$new_analysis_BANG_(){
cljs.core.reset_BANG_(compare_fn,cljs.core.compare);

var G__98468_98537 = expr__GT_var;
var G__98469_98538 = cljs.core.PersistentArrayMap.EMPTY;
(ref_set.cljs$core$IFn$_invoke$arity$2 ? ref_set.cljs$core$IFn$_invoke$arity$2(G__98468_98537,G__98469_98538) : ref_set.call(null,G__98468_98537,G__98469_98538));

var G__98470_98539 = var__GT_expr;
var G__98471_98540 = cljs.core.PersistentArrayMap.EMPTY;
(ref_set.cljs$core$IFn$_invoke$arity$2 ? ref_set.cljs$core$IFn$_invoke$arity$2(G__98470_98539,G__98471_98540) : ref_set.call(null,G__98470_98539,G__98471_98540));

return null;
});
var base_simplify = (function sicmutils$expression$analyze$base_simplify(expr){
if(cljs.core.truth_(unquoted_list_QMARK_(expr))){
return sicmutils.expression.analyze.expression__GT_(backend,expr,(function (p1__98400_SHARP_,p2__98401_SHARP_){
return sicmutils.expression.analyze.__GT_expression(backend,p1__98400_SHARP_,p2__98401_SHARP_);
}),v_compare);
} else {
return expr;
}
});
var simplify = (function sicmutils$expression$analyze$simplify(expr){
new_analysis_BANG_();

return simplify_expression(sicmutils.expression.expression_of(expr));
});
var analyze_expression = (function sicmutils$expression$analyze$analyze_expression(expr){
var _STAR_incremental_simplifier_STAR__orig_val__98472 = sicmutils.numsymb._STAR_incremental_simplifier_STAR_;
var _STAR_incremental_simplifier_STAR__temp_val__98473 = false;
(sicmutils.numsymb._STAR_incremental_simplifier_STAR_ = _STAR_incremental_simplifier_STAR__temp_val__98473);

try{return base_simplify(analyze(expr));
}finally {(sicmutils.numsymb._STAR_incremental_simplifier_STAR_ = _STAR_incremental_simplifier_STAR__orig_val__98472);
}});
var simplify_expression = (function sicmutils$expression$analyze$simplify_expression(expr){
return backsubstitute(analyze_expression(expr));
});
var add_symbols_BANG_ = (function sicmutils$expression$analyze$add_symbols_BANG_(expr){
var new$ = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(add_symbol_BANG_,expr));
return add_symbol_BANG_(new$);
});
var new_kernels = (function sicmutils$expression$analyze$new_kernels(expr){
var simplified_expr = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base_simplify,expr));
var op = (sicmutils.numsymb.operator.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operator.cljs$core$IFn$_invoke$arity$1(simplified_expr) : sicmutils.numsymb.operator.call(null,simplified_expr));
var temp__5751__auto__ = sicmutils.numsymb.symbolic_operator(op);
if(cljs.core.truth_(temp__5751__auto__)){
var v = temp__5751__auto__;
var w = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(v,(sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1(simplified_expr) : sicmutils.numsymb.operands.call(null,simplified_expr)));
if(((cljs.core.sequential_QMARK_(w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((sicmutils.numsymb.operator.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operator.cljs$core$IFn$_invoke$arity$1(w) : sicmutils.numsymb.operator.call(null,w)),op)))){
return add_symbols_BANG_(w);
} else {
return ianalyze(w);
}
} else {
return add_symbols_BANG_(simplified_expr);
}
});
var backsubstitute = (function sicmutils$expression$analyze$backsubstitute(expr){
if(cljs.core.sequential_QMARK_(expr)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils$expression$analyze$backsubstitute,expr));
} else {
if((expr instanceof cljs.core.Symbol)){
var temp__5751__auto__ = (function (){var fexpr__98474 = cljs.core.deref(var__GT_expr);
return (fexpr__98474.cljs$core$IFn$_invoke$arity$1 ? fexpr__98474.cljs$core$IFn$_invoke$arity$1(expr) : fexpr__98474.call(null,expr));
})();
if(cljs.core.truth_(temp__5751__auto__)){
var w = temp__5751__auto__;
return sicmutils$expression$analyze$backsubstitute(w);
} else {
return expr;
}
} else {
return expr;

}
}
});
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"simplify","simplify",-599213465),(function (expr){
if(sicmutils.expression.literal_QMARK_(expr)){
return sicmutils.expression.fmap(simplify,expr);
} else {
return simplify(expr);
}
}),new cljs.core.Keyword(null,"simplify-expression","simplify-expression",-473287731),(function (expr){
if(sicmutils.expression.literal_QMARK_(expr)){
return sicmutils.expression.fmap(simplify_expression,expr);
} else {
return simplify_expression(expr);
}
}),new cljs.core.Keyword(null,"initializer","initializer",-2068366756),new_analysis_BANG_,new cljs.core.Keyword(null,"analyze-expression","analyze-expression",870894091),analyze_expression,new cljs.core.Keyword(null,"get-var->expr","get-var->expr",201158735),(function (){
return cljs.core.deref(var__GT_expr);
}),new cljs.core.Keyword(null,"get-expr->var","get-expr->var",-224197397),(function (){
return cljs.core.deref(expr__GT_var);
})], null);
}));

(sicmutils.expression.analyze.make_analyzer.cljs$lang$maxFixedArity = 2);

/**
 * Given an `analyzer` instance created with [[make-analyzer]], returns a
 *   simplifier (a function of S-expression => simplified S-expression) that will
 *   reset its internal symbolic bindings at every invocation.
 * 
 *   Equivalent to:
 * 
 *   ```clojure
 *   (let [new-analysis! (initializer analyzer)
 *      simplify (expression-simplifier analyzer)]
 *  (fn [expr]
 *    (new-analysis!)
 *    (simplify expr)))
 *   ```
 * 
 *   See [[expression-simplifier]] for a version that will assign the same symbol
 *   to every expression it sees more than once.
 */
sicmutils.expression.analyze.default_simplifier = (function sicmutils$expression$analyze$default_simplifier(analyzer){
return new cljs.core.Keyword(null,"simplify","simplify",-599213465).cljs$core$IFn$_invoke$arity$1(analyzer);
});
/**
 * Given an `analyzer` instance created with [[make-analyzer]], returns a
 *   simplifier (a function of S-expression => simplified S-expression) that will
 *   NOT reset its internal symbolic bindings across invocations.
 * 
 *   This can be useful if the analyzer backend has any sort of memoization or
 *   caching of expressions.
 * 
 *   Pass `analyzer` to [[initializer]] to create a function that, when called,
 *   will explicitly reset the internal cache:
 * 
 *   ```clojure
 *   (def reset-analyzer! (initializer analyzer))
 *   (def simplify (expression-simplifier analyzer))
 * 
 *   (reset-analyzer!)
 *   (simplify <expr>)
 *   ```
 * 
 *   See [[default-simplifier]] for a version that will reset its internal variable
 *   assignment cache at each invocation.
 */
sicmutils.expression.analyze.expression_simplifier = (function sicmutils$expression$analyze$expression_simplifier(analyzer){
return new cljs.core.Keyword(null,"simplify-expression","simplify-expression",-473287731).cljs$core$IFn$_invoke$arity$1(analyzer);
});
/**
 * Given an `analyzer` instance created with [[make-analyzer]], returns a function
 *   of no arguments that, when called, will reset the analyzer's internal caches
 *   of symbol => subexpression and subexpression => symbol.
 */
sicmutils.expression.analyze.initializer = (function sicmutils$expression$analyze$initializer(analyzer){
return new cljs.core.Keyword(null,"initializer","initializer",-2068366756).cljs$core$IFn$_invoke$arity$1(analyzer);
});
/**
 * Given an `analyzer` instance created with [[make-analyzer]], returns a function
 *   that will take a symbolic expression, and return a simplified expression with
 *   any subexpression NOT supported by the analyzer backend replaced by a
 *   generated symbol.
 * 
 *   Any replaced subexpression will map to the SAME symbol over repeated
 *   invocations, unless you call the resetting function generated by passing
 *   `analyzer` to [[initializer]].
 * 
 *   For example:
 * 
 *   ```clojure
 *   (let [a  (poly-analyzer)
 *      ea (expression-analyzer a)]
 *  (ea '(+ x x x (sin x) (sin x))))
 *   ;;=> (+ (* 3 x) (* 2 -s-0000000000000000))
 *   ```
 */
sicmutils.expression.analyze.expression_analyzer = (function sicmutils$expression$analyze$expression_analyzer(analyzer){
return new cljs.core.Keyword(null,"analyze-expression","analyze-expression",870894091).cljs$core$IFn$_invoke$arity$1(analyzer);
});
/**
 * Given an `analyzer` instance created with [[make-analyzer]], returns a function
 *   of no arguments that, when called, will return the analyzer's current map of
 *   generated symbol => subexpression.
 * 
 *   Call the no-argument function returned by passing `analyzer`
 *   to [[initializer]] to reset the table.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (def a (poly-analyzer))
 *   (def ea (expression-analyzer a))
 * 
 *   (def get-tables (auxiliary-variable-fetcher a))
 *   (def reset-tables! (initializer a))
 * 
 *   (ea '(+ x x x (sin x) (sin x)))
 *   ;;=> (+ (* 3 x) (* 2 -s-0000000000000000))
 * 
 *   (get-tables)
 *   ;;=> {'-s-0000000000000000 '(sin x)}
 * 
 *   (reset-tables!)
 *   (get-tables)
 *   ;;=> {}
 *   ```
 */
sicmutils.expression.analyze.auxiliary_variable_fetcher = (function sicmutils$expression$analyze$auxiliary_variable_fetcher(analyzer){
return new cljs.core.Keyword(null,"get-var->expr","get-var->expr",201158735).cljs$core$IFn$_invoke$arity$1(analyzer);
});

//# sourceMappingURL=sicmutils.expression.analyze.js.map
