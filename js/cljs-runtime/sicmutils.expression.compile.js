goog.provide('sicmutils.expression.compile');
sicmutils.expression.compile.__GT_vec = (function sicmutils$expression$compile$__GT_vec(arr){
var t = (arr[(0)]);
var theta = (arr[(1)]);
var thetadot = (arr[(2)]);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,thetadot,(-9.8 * Math.sin(theta))], null);
});
sicmutils.expression.compile.vec__GT_vec = (function sicmutils$expression$compile$vec__GT_vec(p__101783){
var vec__101784 = p__101783;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101784,(0),null);
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101784,(1),null);
var thetadot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101784,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,thetadot,(-9.8 * Math.sin(theta))], null);
});
sicmutils.expression.compile.__GT_array = (function sicmutils$expression$compile$__GT_array(arr){
var t = (arr[(0)]);
var theta = (arr[(1)]);
var thetadot = (arr[(2)]);
var G__101787 = [null,null,null];
(G__101787[(0)] = 1.0);

(G__101787[(1)] = thetadot);

(G__101787[(2)] = (-9.8 * Math.sin(theta)));

return G__101787;
});
sicmutils.expression.compile.__GT_input_array = (function sicmutils$expression$compile$__GT_input_array(arr,out){
var t = (arr[(0)]);
var theta = (arr[(1)]);
var thetadot = (arr[(2)]);
var G__101788 = out;
(G__101788[(0)] = 1.0);

(G__101788[(1)] = thetadot);

(G__101788[(2)] = (-9.8 * Math.sin(theta)));

return G__101788;
});
sicmutils.expression.compile.__GT_input_array_param = (function sicmutils$expression$compile$__GT_input_array_param(g,arr,out){
var t = (arr[(0)]);
var theta = (arr[(1)]);
var thetadot = (arr[(2)]);
var G__101789 = out;
(G__101789[(0)] = 1.0);

(G__101789[(1)] = thetadot);

(G__101789[(2)] = (g * Math.sin(theta)));

return G__101789;
});
sicmutils.expression.compile.vec_checker = (function sicmutils$expression$compile$vec_checker(arr){
var result = sicmutils.expression.compile.__GT_vec(arr);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1((1)) : result.call(null,(1))),(result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1((2)) : result.call(null,(2))));
});
sicmutils.expression.compile.array_checker = (function sicmutils$expression$compile$array_checker(arr){
var result = sicmutils.expression.compile.__GT_array(arr);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((result[(1)]),(result[(2)]));
});
sicmutils.expression.compile.input_array_checker = (function sicmutils$expression$compile$input_array_checker(arr,result){
sicmutils.expression.compile.__GT_input_array(arr,result);

return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((result[(1)]),(result[(2)]));
});
sicmutils.expression.compile.fn_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Dict of `<symbol> -> {:sym <symbolic-fn>, :f <evaluated-fn>}`. The
 *     keys constitute the set of operations allowed to appear within the body
 *     of the compiled function.
 * 
 *     If you're compiling a function for use with the numerical routines, the
 *     library assumes that your function operates only on doubles (even though
 *     you wrote it with generic routines).
 */
sicmutils.expression.compile.compiled_fn_whitelist = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"quotient","quotient",-1029733218,null),new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),new cljs.core.Symbol(null,"up","up",1370819414,null),new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),new cljs.core.Symbol(null,"sin","sin",1721439389,null),new cljs.core.Symbol(null,"tan","tan",-1380825876,null),new cljs.core.Symbol(null,"cos","cos",-1452677493,null),new cljs.core.Symbol(null,"modulo","modulo",725580254,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"abs","abs",1394505050,null),new cljs.core.Symbol(null,"log","log",45015523,null),new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),new cljs.core.Symbol(null,"expt","expt",2123850345,null),new cljs.core.Symbol(null,"fractional-part","fractional-part",-505422086,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"atan","atan",-1026550135,null),new cljs.core.Symbol(null,"acos","acos",353741763,null),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"acosh","acosh",-2005748303,null),new cljs.core.Symbol(null,"ceiling","ceiling",-1593475279,null),new cljs.core.Symbol(null,"down","down",-1089190199,null),new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),new cljs.core.Symbol(null,"asin","asin",-904130570,null),new cljs.core.Symbol(null,"exp","exp",1378825265,null),new cljs.core.Symbol(null,"integer-part","integer-part",-1884537015,null),new cljs.core.Symbol(null,"asinh","asinh",-1398350397,null),new cljs.core.Symbol(null,"tanh","tanh",480481797,null),new cljs.core.Symbol(null,"atanh","atanh",-1915750692,null)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("clojure.core","quot","clojure.core/quot",-292848233,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.quot], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("clojure.core","rem","clojure.core/rem",-160175829,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.rem], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","vector","cljs.core/vector",720641726,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","sinh","Math/sinh",-996945022,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__101803_SHARP_){
return Math.sinh(p1__101803_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","sin","Math/sin",1723896309,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__101797_SHARP_){
return Math.sin(p1__101797_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","tan","Math/tan",-1378236364,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__101798_SHARP_){
return Math.tan(p1__101798_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","cos","Math/cos",-1454544429,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__101796_SHARP_){
return Math.cos(p1__101796_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("clojure.core","mod","clojure.core/mod",215755142,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.mod], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core._SLASH_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","abs","Math/abs",1400569394,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__101793_SHARP_){
return Math.abs(p1__101793_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","log","Math/log",46490779,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__101794_SHARP_){
return Math.log(p1__101794_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","cosh","Math/cosh",-1954958918,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__101802_SHARP_){
return Math.cosh(p1__101802_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","pow","Math/pow",193807960,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__101790_SHARP_,p2__101791_SHARP_){
return Math.pow(p1__101790_SHARP_,p2__101791_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x","x",-555367584,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x","x",-555367584,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("Math","floor","Math/floor",-774722964,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x","x",-555367584,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (x){
return (x - Math.floor(x));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core._PLUS_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","*","cljs.core/*",-857794892,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core._STAR_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","atan","Math/atan",-1027632159,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__101801_SHARP_){
return Math.atan(p1__101801_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","acos","Math/acos",357181099,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__101799_SHARP_){
return Math.acos(p1__101799_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","floor","Math/floor",-774722964,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__101805_SHARP_){
return Math.floor(p1__101805_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core._], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","acosh","Math/acosh",-2007025431,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__101808_SHARP_){
return Math.acosh(p1__101808_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","ceil","Math/ceil",-186204017,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__101806_SHARP_){
return Math.ceil(p1__101806_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("sicmutils.structure","down","sicmutils.structure/down",140665603,null),new cljs.core.Keyword(null,"f","f",-1597136552),sicmutils.structure.down], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","sqrt","Math/sqrt",377394374,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__101792_SHARP_){
return Math.sqrt(p1__101792_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","asin","Math/asin",-889681202,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__101800_SHARP_){
return Math.asin(p1__101800_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","exp","Math/exp",1383313257,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__101795_SHARP_){
return Math.exp(p1__101795_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","trunc","Math/trunc",1386774702,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__101807_SHARP_){
return Math.trunc(p1__101807_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","asinh","Math/asinh",-1387635973,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__101809_SHARP_){
return Math.asinh(p1__101809_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","tanh","Math/tanh",479074141,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__101804_SHARP_){
return Math.tanh(p1__101804_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","atanh","Math/atanh",-1910277884,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__101810_SHARP_){
return Math.atanh(p1__101810_SHARP_);
})], null)]);
/**
 * Dict of `<symbol> -> <symbolic-fn>`. See [[compiled-fn-whitelist]]
 *     for more detail.
 */
sicmutils.expression.compile.sym__GT_resolved_form = sicmutils.util.map_vals(new cljs.core.Keyword(null,"sym","sym",-1444860305),sicmutils.expression.compile.compiled_fn_whitelist);
/**
 * Returns a map from distinct subexpressions in the supplied `expr` to the
 *   number of times each appears.
 * 
 *   If `skip?` returns true given a subexpression it won't be included as a key in
 *   the returned map.
 */
sicmutils.expression.compile.expr_frequencies = (function sicmutils$expression$compile$expr_frequencies(expr,skip_QMARK_){
var children = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.seq_QMARK_);
return cljs.core.frequencies(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(skip_QMARK_,cljs.core.rest(cljs.core.tree_seq(cljs.core.seq_QMARK_,children,expr))));
});
/**
 * Trims down a proposed map of `sym->expr` replacements (suitable for a let-binding,
 *   say) to include only entries relevant to the supplied `expr`.
 * 
 *   Accepts:
 * 
 *   - `sym->expr`, a map of symbol -> symbolic expression
 *   - `expr`, an expression that potentially contains symbols referenced in the
 *  keyset of `sym->expr`
 * 
 *   And returns a subset of `sym->expr` containing only entries where the
 *   symbol-key is found in:
 * 
 *   - the original `expr`, or
 *   - in an expression referenced by a symbol in the original `expr`
 */
sicmutils.expression.compile.discard_unreferenced_syms = (function sicmutils$expression$compile$discard_unreferenced_syms(sym__GT_expr,expr){
var syms = sicmutils.util.keyset(sym__GT_expr);
var lookup_syms = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sicmutils.expression.variables_in,sym__GT_expr));
var referenced = cljs.core.PersistentHashSet.EMPTY;
var sym_batch = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(sicmutils.expression.variables_in(expr),syms);
while(true){
if(cljs.core.empty_QMARK_(sym_batch)){
return cljs.core.select_keys(sym__GT_expr,referenced);
} else {
var referenced_SINGLEQUOTE_ = clojure.set.union.cljs$core$IFn$_invoke$arity$2(referenced,sym_batch);
var syms_in_exprs = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,lookup_syms,sym_batch),syms),referenced_SINGLEQUOTE_);
var G__102415 = referenced_SINGLEQUOTE_;
var G__102416 = syms_in_exprs;
referenced = G__102415;
sym_batch = G__102416;
continue;
}
break;
}
});
sicmutils.expression.compile.sortable_gensym = sicmutils.expression.analyze.monotonic_symbol_generator("G");
/**
 * Considers an S-expression from the point of view of optimizing its evaluation
 *   by isolating common subexpressions into auxiliary variables.
 * 
 *   Accepts:
 * 
 *   - A symbolic expression `expr`
 *   - a continuation fn `continue` of two arguments:
 *  - a new equivalent expression with possibly some subexpressions replaced by
 *    new variables (delivered by the supplied generator, see below)
 *  - a seq of pairs of `[aux variable, subexpression]` used to reconstitute the
 *    value.
 * 
 *   Calls the continuation at completion and returns the continuation's value.
 * 
 *   ### Optional Arguments
 * 
 *   `:symbol-generator`: side-effecting function that returns a new, unique
 *   variable name on each invocation. `sortable-gensym` by default.
 * 
 *   NOTE that the symbols should appear in sorted order! Otherwise we can't
 *   guarantee that the binding sequence passed to `continue` won't contain entries
 *   that reference previous entries.
 * 
 *   `:deterministic?`: if true, the function will assign aux variables by sorting
 *   the string representations of each term before assignment. Otherwise, the
 *   nondeterministic order of hash maps inside this function won't guarantee a
 *   consistent variable naming convention in the returned function. For tests, set
 *   `:deterministic? true`.
 */
sicmutils.expression.compile.extract_common_subexpressions = (function sicmutils$expression$compile$extract_common_subexpressions(var_args){
var G__101812 = arguments.length;
switch (G__101812) {
case 2:
return sicmutils.expression.compile.extract_common_subexpressions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.expression.compile.extract_common_subexpressions.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.expression.compile.extract_common_subexpressions.cljs$core$IFn$_invoke$arity$2 = (function (expr,continue$){
return sicmutils.expression.compile.extract_common_subexpressions.cljs$core$IFn$_invoke$arity$3(expr,continue$,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.expression.compile.extract_common_subexpressions.cljs$core$IFn$_invoke$arity$3 = (function (expr,continue$,p__101813){
var map__101814 = p__101813;
var map__101814__$1 = cljs.core.__destructure_map(map__101814);
var symbol_generator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__101814__$1,new cljs.core.Keyword(null,"symbol-generator","symbol-generator",574487160),sicmutils.expression.compile.sortable_gensym);
var deterministic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101814__$1,new cljs.core.Keyword(null,"deterministic?","deterministic?",-1057176664));
var sort = (cljs.core.truth_(deterministic_QMARK_)?cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.sort_by,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.str,cljs.core.vec,cljs.core.first)):cljs.core.identity);
var x = expr;
var expr__GT_sym = cljs.core.PersistentArrayMap.EMPTY;
while(true){
var expr__GT_count = sicmutils.expression.compile.expr_frequencies(x,expr__GT_sym);
var new_syms = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = ((function (x,expr__GT_sym,expr__GT_count,sort,map__101814,map__101814__$1,symbol_generator,deterministic_QMARK_){
return (function sicmutils$expression$compile$iter__101827(s__101828){
return (new cljs.core.LazySeq(null,((function (x,expr__GT_sym,expr__GT_count,sort,map__101814,map__101814__$1,symbol_generator,deterministic_QMARK_){
return (function (){
var s__101828__$1 = s__101828;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__101828__$1);
if(temp__5753__auto__){
var s__101828__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__101828__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__101828__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__101830 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__101829 = (0);
while(true){
if((i__101829 < size__4651__auto__)){
var vec__101831 = cljs.core._nth(c__4650__auto__,i__101829);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101831,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101831,(1),null);
if((v > (1))){
cljs.core.chunk_append(b__101830,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(symbol_generator.cljs$core$IFn$_invoke$arity$0 ? symbol_generator.cljs$core$IFn$_invoke$arity$0() : symbol_generator.call(null))], null));

var G__102424 = (i__101829 + (1));
i__101829 = G__102424;
continue;
} else {
var G__102425 = (i__101829 + (1));
i__101829 = G__102425;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__101830),sicmutils$expression$compile$iter__101827(cljs.core.chunk_rest(s__101828__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__101830),null);
}
} else {
var vec__101843 = cljs.core.first(s__101828__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101843,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101843,(1),null);
if((v > (1))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(symbol_generator.cljs$core$IFn$_invoke$arity$0 ? symbol_generator.cljs$core$IFn$_invoke$arity$0() : symbol_generator.call(null))], null),sicmutils$expression$compile$iter__101827(cljs.core.rest(s__101828__$2)));
} else {
var G__102426 = cljs.core.rest(s__101828__$2);
s__101828__$1 = G__102426;
continue;
}
}
} else {
return null;
}
break;
}
});})(x,expr__GT_sym,expr__GT_count,sort,map__101814,map__101814__$1,symbol_generator,deterministic_QMARK_))
,null,null));
});})(x,expr__GT_sym,expr__GT_count,sort,map__101814,map__101814__$1,symbol_generator,deterministic_QMARK_))
;
return iter__4652__auto__((sort.cljs$core$IFn$_invoke$arity$1 ? sort.cljs$core$IFn$_invoke$arity$1(expr__GT_count) : sort.call(null,expr__GT_count)));
})());
if(cljs.core.empty_QMARK_(new_syms)){
var sym__GT_expr = sicmutils.expression.compile.discard_unreferenced_syms(clojure.set.map_invert(expr__GT_sym),x);
var G__101848 = x;
var G__101849 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.key,sym__GT_expr);
return (continue$.cljs$core$IFn$_invoke$arity$2 ? continue$.cljs$core$IFn$_invoke$arity$2(G__101848,G__101849) : continue$.call(null,G__101848,G__101849));
} else {
var expr__GT_sym_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr__GT_sym,new_syms], 0));
var G__102427 = clojure.walk.postwalk_replace(expr__GT_sym_SINGLEQUOTE_,x);
var G__102428 = expr__GT_sym_SINGLEQUOTE_;
x = G__102427;
expr__GT_sym = G__102428;
continue;
}
break;
}
}));

(sicmutils.expression.compile.extract_common_subexpressions.cljs$lang$maxFixedArity = 3);

/**
 * Given a symbolic expression `expr`, returns a new expression potentially
 *   wrapped in a `let` binding with one binding per extracted common
 *   subexpression.
 * 
 *   ## Optional Arguments TODO say `see blah for options`
 * 
 *   `:symbol-generator`: side-effecting function that returns a new, unique symbol
 *   on each invocation. These generated symbols are used to create unique binding
 *   names for extracted subexpressions. `sortable-gensym` by default.
 * 
 *   NOTE that the symbols should appear in sorted order! Otherwise we can't
 *   guarantee that the binding sequence won't contain entries that reference
 *   previous entries, resulting in "Unable to resolve symbol" errors.
 * 
 *   `:deterministic?`: if true, the function will order the let-binding contents
 *   by sorting the string representations of each term before assignment. If false
 *   the function won't guarantee a consistent variable naming convention in the
 *   returned function. For tests, we recommend `:deterministic? true`.
 */
sicmutils.expression.compile.cse_form = (function sicmutils$expression$compile$cse_form(var_args){
var G__101856 = arguments.length;
switch (G__101856) {
case 1:
return sicmutils.expression.compile.cse_form.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.expression.compile.cse_form.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.expression.compile.cse_form.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return sicmutils.expression.compile.cse_form.cljs$core$IFn$_invoke$arity$2(expr,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.expression.compile.cse_form.cljs$core$IFn$_invoke$arity$2 = (function (expr,opts){
var callback = (function sicmutils$expression$compile$callback(new_expression,bindings){
var n_bindings = cljs.core.count(bindings);
if((n_bindings > (0))){
var binding_vec = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,bindings);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"sicmutils.expression.compile",null,447,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.string.format("common subexpression elimination: %d expressions",n_bindings)], null);
}),null)),null,-1145417428,null);

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,binding_vec,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new_expression,null,(1),null))], 0))));
} else {
return new_expression;
}
});
return sicmutils.expression.compile.extract_common_subexpressions.cljs$core$IFn$_invoke$arity$3(expr,callback,opts);
}));

(sicmutils.expression.compile.cse_form.cljs$lang$maxFixedArity = 2);

/**
 * Similar to [[compiled-fn-whitelist]], but restricted to numeric
 *   operations.
 */
sicmutils.expression.compile.numeric_whitelist = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(sicmutils.expression.compile.compiled_fn_whitelist,new cljs.core.Symbol(null,"up","up",1370819414,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"down","down",-1089190199,null)], 0));
/**
 * Converts a structure to array lookups.
 */
sicmutils.expression.compile.struct__GT_array = (function sicmutils$expression$compile$struct__GT_array(var_args){
var G__101961 = arguments.length;
switch (G__101961) {
case 1:
return sicmutils.expression.compile.struct__GT_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.expression.compile.struct__GT_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.expression.compile.struct__GT_array.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return sicmutils.expression.compile.struct__GT_array.cljs$core$IFn$_invoke$arity$2(xs,(new Array((function (){var G__101965 = cljs.core.count(xs);
return (cljs.core.unquote.cljs$core$IFn$_invoke$arity$1 ? cljs.core.unquote.cljs$core$IFn$_invoke$arity$1(G__101965) : cljs.core.unquote.call(null,G__101965));
})())));
}));

(sicmutils.expression.compile.struct__GT_array.cljs$core$IFn$_invoke$arity$2 = (function (xs,output){
var output__$1 = output;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","doto","cljs.core/doto",-1284816239,null),null,(1),null)),(new cljs.core.List(null,output__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,i,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null))], 0))));
}),xs)], 0))));
}));

(sicmutils.expression.compile.struct__GT_array.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function body and returns a new body with all numeric operations
 *   like `(/ 1 2)` evaluated and all numerical literals converted to `double` or
 *   `js/Number`.
 * 
 *   TODO expand this??
 */
sicmutils.expression.compile.apply_numeric_ops = (function sicmutils$expression$compile$apply_numeric_ops(body){
return clojure.walk.postwalk((function (expr){
if(sicmutils.value.real_QMARK_(expr)){
return sicmutils.util.double$(expr);
} else {
if(cljs.core.sequential_QMARK_(expr)){
var vec__101995 = expr;
var seq__101996 = cljs.core.seq(vec__101995);
var first__101997 = cljs.core.first(seq__101996);
var seq__101996__$1 = cljs.core.next(seq__101996);
var f = first__101997;
var xs = seq__101996__$1;
var temp__5751__auto__ = (function (){var and__4251__auto__ = cljs.core.every_QMARK_(cljs.core.number_QMARK_,xs);
if(and__4251__auto__){
return (sicmutils.expression.compile.numeric_whitelist.cljs$core$IFn$_invoke$arity$1 ? sicmutils.expression.compile.numeric_whitelist.cljs$core$IFn$_invoke$arity$1(f) : sicmutils.expression.compile.numeric_whitelist.call(null,f));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;
return sicmutils.util.double$(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(m),xs));
} else {
return expr;
}
} else {
return expr;

}
}
}),body);
});
sicmutils.expression.compile._STAR_mode_STAR_ = new cljs.core.Keyword(null,"sci","sci",-1317785218);
/**
 * Set of all supported compilation modes.
 */
sicmutils.expression.compile.valid_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"native","native",-613060878),null,new cljs.core.Keyword(null,"sci","sci",-1317785218),null], null), null);
/**
 * Given a keyword `mode` specifying a compilation mode, returns `mode` if valid,
 *   and throws otherwise.
 */
sicmutils.expression.compile.validate_mode_BANG_ = (function sicmutils$expression$compile$validate_mode_BANG_(mode){
var or__4253__auto__ = (sicmutils.expression.compile.valid_modes.cljs$core$IFn$_invoke$arity$1 ? sicmutils.expression.compile.valid_modes.cljs$core$IFn$_invoke$arity$1(mode) : sicmutils.expression.compile.valid_modes.call(null,mode));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid compilation mode supplied: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode),". Please supply (or bind to `*mode*`) one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.compile.valid_modes)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),mode,new cljs.core.Keyword(null,"valid-mode","valid-mode",1171609710),sicmutils.expression.compile.valid_modes], null));
}
});
/**
 * Validates and returns the dynamically bound compilation [[*mode*]].
 *   Throws on an invalid setting.
 */
sicmutils.expression.compile.compiler_mode = (function sicmutils$expression$compile$compiler_mode(){
return sicmutils.expression.compile.validate_mode_BANG_(sicmutils.expression.compile._STAR_mode_STAR_);
});
/**
 * Set the default compilation mode by supplying an entry from [[valid-modes]].
 */
sicmutils.expression.compile.set_compiler_mode_BANG_ = (function sicmutils$expression$compile$set_compiler_mode_BANG_(mode){
sicmutils.expression.compile.validate_mode_BANG_(mode);

return (sicmutils.expression.compile._STAR_mode_STAR_ = mode);
});
/**
 * Returns the argument vector for a compiled state function, given:
 * 
 *   - `params`: a seq of symbols equal in count to the original state function's
 *  args
 *   - `state-model`: a sequence of variables representing the structure of the
 *  argument to the nested function returned by the state function
 *   - `opts`, a dictionary of compilation options.
 * 
 *   See [[compile-state-fn*]] for a description of the options accepted in
 *   `opts`.
 */
sicmutils.expression.compile.state_argv = (function sicmutils$expression$compile$state_argv(params,state_model,output){
var state = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.flatten(state_model)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,params,output], null);
});
/**
 * Reuseable context for SCI compilation. Fork with `sci/fork` to
 *   ensure that no call to `sci/eval-*` can inject state that another call can
 *   see.
 */
sicmutils.expression.compile.sci_context = sci.core.init(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"Math","Math",2033287572,null),Math], null),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"sicmutils.structure","sicmutils.structure",-695742594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"up","up",1370819414,null),sicmutils.structure.up,new cljs.core.Symbol(null,"down","down",-1089190199,null),sicmutils.structure.down], null)], null)], null));
/**
 * Given an unevaluated source code form `f-form` representing a function,
 *   evaluates `f-form` using the bindings in [[sci-context]].
 * 
 *   Generate these forms by setting `*mode*` to `:source`.
 */
sicmutils.expression.compile.sci_eval = (function sicmutils$expression$compile$sci_eval(f_form){
return sci.core.eval_form(sci.core.fork(sicmutils.expression.compile.sci_context),f_form);
});
/**
 * vs is the variables actually used
 */
sicmutils.expression.compile.array_bindings = (function sicmutils$expression$compile$array_bindings(vs,arr,inputs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,v){
if(cljs.core.truth_((vs.cljs$core$IFn$_invoke$arity$1 ? vs.cljs$core$IFn$_invoke$arity$1(v) : vs.call(null,v)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",6345791,null),null,(1),null)),(new cljs.core.List(null,arr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,i,null,(1),null))], 0))))], null);
} else {
return null;
}
})),cljs.core.cat),cljs.core.flatten(inputs));
});
/**
 * Returns a natively-evaluated Clojure function that implements `body`, given:
 * 
 *   - `params`: a seq of symbols equal in count to the original state function's
 *  args
 *   - `state-model`: a sequence of variables representing the structure of the
 *  nested function returned by the state function
 *   - `body`: a function body making use of any symbol in the args above
 */
sicmutils.expression.compile.compile_state__GT_source = (function sicmutils$expression$compile$compile_state__GT_source(params,state_model,body,output,_opts){
var state_sym = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"doubles","doubles",-1517872169,null)], null));
var param_sym = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"doubles","doubles",-1517872169,null)], null));
var body__$1 = clojure.walk.postwalk_replace(sicmutils.expression.compile.sym__GT_resolved_form,body);
var vs = sicmutils.expression.variables_in(body__$1);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,state_sym,null,(1),null)),(new cljs.core.List(null,param_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,output,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,sicmutils.expression.compile.array_bindings(vs,state_sym,state_model),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,sicmutils.expression.compile.array_bindings(vs,param_sym,params),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,body__$1,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
/**
 * Returns a natively-evaluated Clojure function that implements `body`, given:
 * 
 *   - `params`: a seq of symbols equal in count to the original state function's
 *  args
 *   - `state-model`: a sequence of variables representing the structure of the
 *  nested function returned by the state function
 *   - `body`: a function body making use of any symbol in the args above
 */
sicmutils.expression.compile.compile_state_native = (function sicmutils$expression$compile$compile_state_native(params,state_model,body,output,opts){
return cljs.core.eval(sicmutils.expression.compile.compile_state__GT_source(params,state_model,body,output,opts));
});
/**
 * Returns a Clojure function evaluated using SCI. The returned fn implements
 *   `body`, given:
 * 
 *   - `params`: a seq of symbols equal in count to the original state function's
 *  args
 *   - `state-model`: a sequence of variables representing the structure of the
 *  nested function returned by the state function
 *   - `body`: a function body making use of any symbol in the args above
 */
sicmutils.expression.compile.compile_state_sci = (function sicmutils$expression$compile$compile_state_sci(params,state_model,body,output,opts){
return sicmutils.expression.compile.sci_eval(sicmutils.expression.compile.compile_state__GT_source(params,state_model,body,output,opts));
});
/**
 * Given a (structural) initial `state` and a `gensym-fn` function from symbol =>
 *   generated symbol walks the structure and converts all structures to vectors
 *   and all non-structural elements to gensymmed symbols.
 */
sicmutils.expression.compile.state__GT_argv = (function sicmutils$expression$compile$state__GT_argv(state,gensym_fn){
var rec = (function sicmutils$expression$compile$state__GT_argv_$_rec(s){
if(sicmutils.structure.structure_QMARK_(s)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sicmutils$expression$compile$state__GT_argv_$_rec,s);
} else {
var G__102020 = new cljs.core.Symbol(null,"y","y",-117328249,null);
return (gensym_fn.cljs$core$IFn$_invoke$arity$1 ? gensym_fn.cljs$core$IFn$_invoke$arity$1(G__102020) : gensym_fn.call(null,G__102020));
}
});
return rec(state);
});
sicmutils.expression.compile.flatten_structs = (function sicmutils$expression$compile$flatten_structs(x){
var sym_struct_QMARK_ = (function sicmutils$expression$compile$flatten_structs_$_sym_struct_QMARK_(expr){
var and__4251__auto__ = cljs.core.sequential_QMARK_(expr);
if(and__4251__auto__){
var G__102022 = cljs.core.first(expr);
return (sicmutils.structure.symbol_set.cljs$core$IFn$_invoke$arity$1 ? sicmutils.structure.symbol_set.cljs$core$IFn$_invoke$arity$1(G__102022) : sicmutils.structure.symbol_set.call(null,G__102022));
} else {
return and__4251__auto__;
}
});
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(sym_struct_QMARK_),cljs.core.rest(cljs.core.tree_seq(sym_struct_QMARK_,cljs.core.rest,x)));
});
sicmutils.expression.compile.__GT_output = (function sicmutils$expression$compile$__GT_output(body,output){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),cljs.core.first(body))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),body),(new cljs.core.List(null,(function (){var G__102023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(body,(2));
var G__102024 = output;
return (sicmutils.expression.compile.__GT_output.cljs$core$IFn$_invoke$arity$2 ? sicmutils.expression.compile.__GT_output.cljs$core$IFn$_invoke$arity$2(G__102023,G__102024) : sicmutils.expression.compile.__GT_output.call(null,G__102023,G__102024));
})(),null,(1),null)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","doto","cljs.core/doto",-1284816239,null),null,(1),null)),(new cljs.core.List(null,output,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,i,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null))], 0))));
}),sicmutils.expression.compile.flatten_structs(body))], 0))));
}
});
sicmutils.expression.compile.__GT_js_output = (function sicmutils$expression$compile$__GT_js_output(body,output){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),cljs.core.first(body))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),body),(new cljs.core.List(null,sicmutils.expression.compile.__GT_output(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(body,(2)),output),null,(1),null)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,output,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,i,null,(1),null)),(new cljs.core.List(null,x,null,(1),null))], 0))));
}),sicmutils.expression.compile.flatten_structs(body)))));
}
});
/**
 * Returns a compiled, simplified function with signature `(f state params)`,
 *   given:
 * 
 *   - a (possibly parametric) function `f` of state => state that can accept a
 *  symbolic arguments
 * 
 *   - `prototype`: Some structure of the same shape as the argument expected by
 *  the fn returned by the state function `f`. Only the shape matters; the values
 *  are ignored.
 * 
 *   - an optional argument `opts`. Options accepted are:
 * 
 *  - `:flatten?`: if `true` (default), the returned function will have
 *    signature `(f <flattened-state> [params])`. If `false`, the first arg of the
 *    returned function will be expected to have the same shape as `initial-state`.
 * 
 *  - `:parameters`; Prototype of params TODO more details
 * 
 *    any sequence of count equal to the number of arguments taken by `f`. The
 *    values are ignored. TODO EDIT:: if `true` (default), the returned function
 *    will take a second argument for the parameters of the state derivative and
 *    keep params generic. If false, the returned function will take a single state
 *    argument, and the supplied params will be hardcoded.
 * 
 *  - `:genysym-fn`:
 * 
 *  - `:mode`: Explicitly set the compilation mode to one of the values
 *    in [[valid-modes]]. Explicit alternative to dynamically binding [[*mode*]].
 * 
 *   The returned, compiled function expects all `Double` (or `js/Number`) for all
 *   state primitives. The function body is simplified and all common
 *   subexpressions identified during compilation are extracted and computed only
 *   once.
 * 
 *   NOTE this function uses no cache. To take advantage of the global compilation
 *   cache, see `compile-state-fn`.
 */
sicmutils.expression.compile.compile_state_fn_STAR_ = (function sicmutils$expression$compile$compile_state_fn_STAR_(var_args){
var G__102026 = arguments.length;
switch (G__102026) {
case 2:
return sicmutils.expression.compile.compile_state_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.expression.compile.compile_state_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.expression.compile.compile_state_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,prototype){
return sicmutils.expression.compile.compile_state_fn_STAR_.cljs$core$IFn$_invoke$arity$3(f,prototype,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.expression.compile.compile_state_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,prototype,p__102027){
var map__102028 = p__102027;
var map__102028__$1 = cljs.core.__destructure_map(map__102028);
var opts = map__102028__$1;
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102028__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var gensym_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102028__$1,new cljs.core.Keyword(null,"gensym-fn","gensym-fn",-883485832),cljs.core.gensym);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102028__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var sw = sicmutils.util.stopwatch.stopwatch();
var generic_state = sicmutils.expression.compile.state__GT_argv(prototype,gensym_fn);
var vec__102029 = (cljs.core.truth_(parameters)?(function (){var ps = (function (){var iter__4652__auto__ = (function sicmutils$expression$compile$iter__102032(s__102033){
return (new cljs.core.LazySeq(null,(function (){
var s__102033__$1 = s__102033;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__102033__$1);
if(temp__5753__auto__){
var s__102033__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__102033__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__102033__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__102035 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__102034 = (0);
while(true){
if((i__102034 < size__4651__auto__)){
var _ = cljs.core._nth(c__4650__auto__,i__102034);
cljs.core.chunk_append(b__102035,(function (){var G__102036 = new cljs.core.Symbol(null,"p","p",1791580836,null);
return (gensym_fn.cljs$core$IFn$_invoke$arity$1 ? gensym_fn.cljs$core$IFn$_invoke$arity$1(G__102036) : gensym_fn.call(null,G__102036));
})());

var G__102521 = (i__102034 + (1));
i__102034 = G__102521;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__102035),sicmutils$expression$compile$iter__102032(cljs.core.chunk_rest(s__102033__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__102035),null);
}
} else {
var _ = cljs.core.first(s__102033__$2);
return cljs.core.cons((function (){var G__102037 = new cljs.core.Symbol(null,"p","p",1791580836,null);
return (gensym_fn.cljs$core$IFn$_invoke$arity$1 ? gensym_fn.cljs$core$IFn$_invoke$arity$1(G__102037) : gensym_fn.call(null,G__102037));
})(),sicmutils$expression$compile$iter__102032(cljs.core.rest(s__102033__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(parameters);
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ps,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,ps)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,f], null));
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102029,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102029,(1),null);
var output = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"doubles","doubles",-1517872169,null)], null));
var body = sicmutils.expression.compile.__GT_output(sicmutils.expression.compile.apply_numeric_ops(sicmutils.expression.compile.cse_form.cljs$core$IFn$_invoke$arity$1(sicmutils.value.freeze(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1((g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(generic_state) : g.call(null,generic_state)))))),output);
var compiler = (function (){var G__102038 = sicmutils.expression.compile.validate_mode_BANG_((function (){var or__4253__auto__ = mode;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.expression.compile._STAR_mode_STAR_;
}
})());
var G__102038__$1 = (((G__102038 instanceof cljs.core.Keyword))?G__102038.fqn:null);
switch (G__102038__$1) {
case "source":
return sicmutils.expression.compile.compile_state__GT_source;

break;
case "native":
return sicmutils.expression.compile.compile_state_native;

break;
case "sci":
return sicmutils.expression.compile.compile_state_sci;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__102038__$1)].join('')));

}
})();
var compiled_fn = (compiler.cljs$core$IFn$_invoke$arity$5 ? compiler.cljs$core$IFn$_invoke$arity$5(params,generic_state,body,output,opts) : compiler.call(null,params,generic_state,body,output,opts));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"sicmutils.expression.compile",null,805,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compiled state function in",sw.sicmutils$util$stopwatch$IStopwatch$repr$arity$1(null),"with mode",sicmutils.expression.compile._STAR_mode_STAR_], null);
}),null)),null,-1121666911,null);

return compiled_fn;
}));

(sicmutils.expression.compile.compile_state_fn_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Version of [[compile-state-fn*]] memoized on the `f` parameter only.
 *   See that function's docs for more detail.
 * 
 *   NOTE that this function makes use of a global compilation cache, keyed by the
 *   value of `f`. Passing in the same `f` twice, even with different arguments for
 *   `prototype`, `opts` and different compilation modes, will return the cached
 *   value. See `compile-state-fn*` to avoid the cache.
 */
sicmutils.expression.compile.compile_state_fn = (function sicmutils$expression$compile$compile_state_fn(var_args){
var G__102040 = arguments.length;
switch (G__102040) {
case 2:
return sicmutils.expression.compile.compile_state_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.expression.compile.compile_state_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.expression.compile.compile_state_fn.cljs$core$IFn$_invoke$arity$2 = (function (f,prototype){
return sicmutils.expression.compile.compile_state_fn.cljs$core$IFn$_invoke$arity$3(f,prototype,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.expression.compile.compile_state_fn.cljs$core$IFn$_invoke$arity$3 = (function (f,prototype,opts){
var temp__5751__auto__ = (function (){var fexpr__102041 = cljs.core.deref(sicmutils.expression.compile.fn_cache);
return (fexpr__102041.cljs$core$IFn$_invoke$arity$1 ? fexpr__102041.cljs$core$IFn$_invoke$arity$1(f) : fexpr__102041.call(null,f));
})();
if(cljs.core.truth_(temp__5751__auto__)){
var cached = temp__5751__auto__;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"sicmutils.expression.compile",null,823,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compiled state function cache hit"], null);
}),null)),null,1484121982,null);

return cached;
} else {
var compiled = sicmutils.expression.compile.compile_state_fn_STAR_.cljs$core$IFn$_invoke$arity$3(f,prototype,opts);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sicmutils.expression.compile.fn_cache,cljs.core.assoc,f,compiled);

return compiled;
}
}));

(sicmutils.expression.compile.compile_state_fn.cljs$lang$maxFixedArity = 3);

sicmutils.expression.compile.make_symbol_generator = (function sicmutils$expression$compile$make_symbol_generator(p){
var i = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return (function (){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var suffix = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.inc).toString((16)).padStart((4),"0");
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
})());
});
});
sicmutils.expression.compile.infix_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"u-","u-",1997472866,null),"null",new cljs.core.Symbol(null,"=","=",-1501502141,null),"null",new cljs.core.Symbol(null,"*","*",345799209,null),"null",new cljs.core.Symbol(null,"-","-",-471816912,null),"null",new cljs.core.Symbol(null,"/","/",-1371932971,null),"null",new cljs.core.Symbol(null,"+","+",-740910886,null),"null"], null), null);
sicmutils.expression.compile.js_renames = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),new cljs.core.Symbol(null,"sin","sin",1721439389,null),new cljs.core.Symbol(null,"tan","tan",-1380825876,null),new cljs.core.Symbol(null,"cos","cos",-1452677493,null),new cljs.core.Symbol(null,"abs","abs",1394505050,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"log","log",45015523,null),new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),new cljs.core.Symbol(null,"expt","expt",2123850345,null),new cljs.core.Symbol(null,"atan","atan",-1026550135,null),new cljs.core.Symbol(null,"acos","acos",353741763,null),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Symbol(null,"acosh","acosh",-2005748303,null),new cljs.core.Symbol(null,"ceiling","ceiling",-1593475279,null),new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),new cljs.core.Symbol(null,"asin","asin",-904130570,null),new cljs.core.Symbol(null,"exp","exp",1378825265,null),new cljs.core.Symbol(null,"integer-part","integer-part",-1884537015,null),new cljs.core.Symbol(null,"asinh","asinh",-1398350397,null),new cljs.core.Symbol(null,"tanh","tanh",480481797,null),new cljs.core.Symbol(null,"atanh","atanh",-1915750692,null)],["Math.sinh","Math.sin","Math.tan","Math.cos","Math.abs","!","Math.log","Math.cosh","Math.pow","Math.atan","Math.acos","Math.floor","Math.acosh","Math.ceil","Math.sqrt","Math.asin","Math.exp","Math.trunc","Math.asinh","Math.tanh","Math.atanh"]);
/**
 * renders a pair of the form `[numerator denominator]` as a infix ratio of the
 *   form `num/denom`.
 * 
 *   If the pair contains only one entry `x`, it's coerced to `[1 x]` (and treated
 *   as a denominator).
 */
sicmutils.expression.compile.render_infix_ratio = (function sicmutils$expression$compile$render_infix_ratio(p__102042){
var vec__102043 = p__102042;
var num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102043,(0),null);
var denom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102043,(1),null);
var xs = vec__102043;
var n = cljs.core.count(xs);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1))) && (sicmutils.value.integral_QMARK_(num)))){
return ["1/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join('');
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(2))) && (((sicmutils.value.integral_QMARK_(num)) && (sicmutils.value.integral_QMARK_(denom)))))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(denom)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(denom)].join('');

}
}
});
sicmutils.expression.compile.js_handlers = (function (){var __GT_parens = (function (p1__102046_SHARP_){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__102046_SHARP_),")"].join('');
});
var __GT_js_vector = (function (p1__102047_SHARP_){
return ["[",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",p1__102047_SHARP_),"]"].join('');
});
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"up","up",1370819414,null),new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"modulo","modulo",725580254,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),new cljs.core.Symbol(null,"down","down",-1089190199,null),new cljs.core.Symbol(null,"or","or",1876275696,null)],[(function (p__102049){
var vec__102053 = p__102049;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102053,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102053,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," % ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('');
}),(function (p__102065){
var vec__102066 = p__102065;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102066,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102066,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," && ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('');
}),__GT_js_vector,(function (xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,xs);
}),(function (p__102077){
var vec__102079 = p__102077;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102079,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102079,(1),null);
return __GT_parens([__GT_parens([__GT_parens([cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," % ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''))," + ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''))," % ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''));
}),sicmutils.expression.compile.render_infix_ratio,(function (p__102090){
var vec__102091 = p__102090;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102091,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102091,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102091,(2),null);
return ["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((i | (0))),"] = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),";\n"].join('');
}),__GT_js_vector,(function (p__102098){
var vec__102119 = p__102098;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102119,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102119,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," || ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('');
})]);
})();
var __GT_parens_102556 = (function (p1__102134_SHARP_){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__102134_SHARP_),")"].join('');
});
sicmutils.expression.compile.__GT_js = (function sicmutils$expression$compile$__GT_js(xs){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.walk.postwalk((function (expr){
if((expr instanceof cljs.core.Symbol)){
return expr;
} else {
if(sicmutils.value.real_QMARK_(expr)){
return sicmutils.util.double$(expr);
} else {
if(cljs.core.sequential_QMARK_(expr)){
var vec__102195 = expr;
var seq__102196 = cljs.core.seq(vec__102195);
var first__102197 = cljs.core.first(seq__102196);
var seq__102196__$1 = cljs.core.next(seq__102196);
var f = first__102197;
var xs__$1 = seq__102196__$1;
var temp__5751__auto__ = (function (){var and__4251__auto__ = cljs.core.every_QMARK_(cljs.core.number_QMARK_,xs__$1);
if(and__4251__auto__){
return (sicmutils.expression.compile.numeric_whitelist.cljs$core$IFn$_invoke$arity$1 ? sicmutils.expression.compile.numeric_whitelist.cljs$core$IFn$_invoke$arity$1(f) : sicmutils.expression.compile.numeric_whitelist.call(null,f));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;
return sicmutils.util.double$(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(m),xs__$1));
} else {
var or__4253__auto__ = (function (){var temp__5753__auto__ = (sicmutils.expression.compile.js_handlers.cljs$core$IFn$_invoke$arity$1 ? sicmutils.expression.compile.js_handlers.cljs$core$IFn$_invoke$arity$1(f) : sicmutils.expression.compile.js_handlers.call(null,f));
if(cljs.core.truth_(temp__5753__auto__)){
var f_SINGLEQUOTE_ = temp__5753__auto__;
return (f_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? f_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(xs__$1) : f_SINGLEQUOTE_.call(null,xs__$1));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var temp__5753__auto__ = (sicmutils.expression.compile.infix_set.cljs$core$IFn$_invoke$arity$1 ? sicmutils.expression.compile.infix_set.cljs$core$IFn$_invoke$arity$1(f) : sicmutils.expression.compile.infix_set.call(null,f));
if(cljs.core.truth_(temp__5753__auto__)){
var sym = temp__5753__auto__;
return __GT_parens_102556(clojure.string.join.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," "].join(''),xs__$1));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = (function (){var temp__5753__auto__ = (sicmutils.expression.compile.js_renames.cljs$core$IFn$_invoke$arity$1 ? sicmutils.expression.compile.js_renames.cljs$core$IFn$_invoke$arity$1(f) : sicmutils.expression.compile.js_renames.call(null,f));
if(cljs.core.truth_(temp__5753__auto__)){
var f_name = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),__GT_parens_102556(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" , ",xs__$1))].join('');
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return sicmutils.util.illegal(["Unknown op: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}
}
}
}
} else {
return expr;

}
}
}
}),xs));
});
sicmutils.expression.compile.compile_js = (function sicmutils$expression$compile$compile_js(var_args){
var G__102199 = arguments.length;
switch (G__102199) {
case 2:
return sicmutils.expression.compile.compile_js.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.expression.compile.compile_js.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.expression.compile.compile_js.cljs$core$IFn$_invoke$arity$2 = (function (f,prototype){
return sicmutils.expression.compile.compile_js.cljs$core$IFn$_invoke$arity$3(f,prototype,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.expression.compile.compile_js.cljs$core$IFn$_invoke$arity$3 = (function (f,prototype,p__102200){
var map__102201 = p__102200;
var map__102201__$1 = cljs.core.__destructure_map(map__102201);
var opts = map__102201__$1;
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102201__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var gensym_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102201__$1,new cljs.core.Keyword(null,"gensym-fn","gensym-fn",-883485832),cljs.core.gensym);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102201__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var sw = sicmutils.util.stopwatch.stopwatch();
var callback = (function (new_expression,new_vars){
return [clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__4652__auto__ = (function sicmutils$expression$compile$iter__102220(s__102221){
return (new cljs.core.LazySeq(null,(function (){
var s__102221__$1 = s__102221;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__102221__$1);
if(temp__5753__auto__){
var s__102221__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__102221__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__102221__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__102223 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__102222 = (0);
while(true){
if((i__102222 < size__4651__auto__)){
var vec__102233 = cljs.core._nth(c__4650__auto__,i__102222);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102233,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102233,(1),null);
cljs.core.chunk_append(b__102223,["  var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)," = ",sicmutils.expression.compile.__GT_js(val),";\n"].join(''));

var G__102568 = (i__102222 + (1));
i__102222 = G__102568;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__102223),sicmutils$expression$compile$iter__102220(cljs.core.chunk_rest(s__102221__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__102223),null);
}
} else {
var vec__102244 = cljs.core.first(s__102221__$2);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102244,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102244,(1),null);
return cljs.core.cons(["  var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)," = ",sicmutils.expression.compile.__GT_js(val),";\n"].join(''),sicmutils$expression$compile$iter__102220(cljs.core.rest(s__102221__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new_vars);
})())),sicmutils.expression.compile.__GT_js(new_expression),";"].join('');
});
var generic_state = sicmutils.expression.compile.state__GT_argv(prototype,gensym_fn);
var vec__102202 = (cljs.core.truth_(parameters)?(function (){var ps = (function (){var iter__4652__auto__ = (function sicmutils$expression$compile$iter__102248(s__102249){
return (new cljs.core.LazySeq(null,(function (){
var s__102249__$1 = s__102249;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__102249__$1);
if(temp__5753__auto__){
var s__102249__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__102249__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__102249__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__102251 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__102250 = (0);
while(true){
if((i__102250 < size__4651__auto__)){
var _ = cljs.core._nth(c__4650__auto__,i__102250);
cljs.core.chunk_append(b__102251,(function (){var G__102254 = new cljs.core.Symbol(null,"p","p",1791580836,null);
return (gensym_fn.cljs$core$IFn$_invoke$arity$1 ? gensym_fn.cljs$core$IFn$_invoke$arity$1(G__102254) : gensym_fn.call(null,G__102254));
})());

var G__102569 = (i__102250 + (1));
i__102250 = G__102569;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__102251),sicmutils$expression$compile$iter__102248(cljs.core.chunk_rest(s__102249__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__102251),null);
}
} else {
var _ = cljs.core.first(s__102249__$2);
return cljs.core.cons((function (){var G__102256 = new cljs.core.Symbol(null,"p","p",1791580836,null);
return (gensym_fn.cljs$core$IFn$_invoke$arity$1 ? gensym_fn.cljs$core$IFn$_invoke$arity$1(G__102256) : gensym_fn.call(null,G__102256));
})(),sicmutils$expression$compile$iter__102248(cljs.core.rest(s__102249__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(parameters);
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ps,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,ps)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,f], null));
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102202,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102202,(1),null);
var state_sym = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"doubles","doubles",-1517872169,null)], null));
var param_sym = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"doubles","doubles",-1517872169,null)], null));
var output_sym = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"doubles","doubles",-1517872169,null)], null));
var body = sicmutils.value.freeze(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1((g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(generic_state) : g.call(null,generic_state))));
var vs = sicmutils.expression.variables_in(body);
var body__$1 = sicmutils.expression.compile.extract_common_subexpressions.cljs$core$IFn$_invoke$arity$3(sicmutils.expression.compile.__GT_js_output(body,output_sym),callback,opts);
var s_bindings = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,v){
if(cljs.core.truth_((vs.cljs$core$IFn$_invoke$arity$1 ? vs.cljs$core$IFn$_invoke$arity$1(v) : vs.call(null,v)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(state_sym),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"];\n"].join('')], null);
} else {
return null;
}
})),cljs.core.cat),cljs.core.str,cljs.core.flatten(generic_state));
var p_bindings = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,v){
if(cljs.core.truth_((vs.cljs$core$IFn$_invoke$arity$1 ? vs.cljs$core$IFn$_invoke$arity$1(v) : vs.call(null,v)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(param_sym),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"];\n"].join('')], null);
} else {
return null;
}
})),cljs.core.cat),cljs.core.str,params);
var body_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s_bindings),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p_bindings),cljs.core.str.cljs$core$IFn$_invoke$arity$1(body__$1)].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"sicmutils.expression.compile",null,998,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compiled state function in",sw.sicmutils$util$stopwatch$IStopwatch$repr$arity$1(null),"with mode :js"], null);
}),null)),null,-307496569,null);

return (new Function(cljs.core.str.cljs$core$IFn$_invoke$arity$1(state_sym),cljs.core.str.cljs$core$IFn$_invoke$arity$1(param_sym),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_sym),body_str));
}));

(sicmutils.expression.compile.compile_js.cljs$lang$maxFixedArity = 3);

/**
 * Returns an unevaluated source code body function that implements `body`, given
 *   some sequence `args` of argument symbols.
 * 
 *   `body` should of course make use of the symbols in `args`.
 */
sicmutils.expression.compile.compile__GT_source = (function sicmutils$expression$compile$compile__GT_source(args,body){
var body__$1 = clojure.walk.postwalk_replace(sicmutils.expression.compile.sym__GT_resolved_form,body);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(args)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,body__$1,null,(1),null))], 0))));
});
/**
 * Returns a natively-evaluated Clojure function that implements `body`, given
 *   some sequence `args` of argument symbols.
 * 
 *   `body` should of course make use of the symbols in `args`.
 */
sicmutils.expression.compile.compile_native = (function sicmutils$expression$compile$compile_native(args,body){
return cljs.core.eval(sicmutils.expression.compile.compile__GT_source(args,body));
});
/**
 * Returns a Clojure function evaluated
 *   using [SCI](https://github.com/borkdude/sci) The returned fn implements
 *   `body`, given some sequence `args` of argument symbols.
 * 
 *   `body` should of course make use of the symbols in `args`.
 */
sicmutils.expression.compile.compile_sci = (function sicmutils$expression$compile$compile_sci(args,body){
return sicmutils.expression.compile.sci_eval(sicmutils.expression.compile.compile__GT_source(args,body));
});
sicmutils.expression.compile.retrieve_arity = (function sicmutils$expression$compile$retrieve_arity(f){
var vec__102277 = sicmutils.function$.arity(f);
var kwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102277,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102277,(1),null);
var arity = vec__102277;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kwd,new cljs.core.Keyword(null,"exactly","exactly",1304099233))){
return n;
} else {
return sicmutils.util.illegal(["`compile-fn` can only infer arity for functions with just one\n           arity, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity),". Please pass an explicit `n`."].join(''));
}
});
/**
 * Returns a compiled, simplified version of `f`, given a function `f` of arity
 *   `n` (ie, able to accept `n` symbolic arguments).
 * 
 *   `n` defaults to `([[f/arity]] f)`.
 * 
 *   The returned, compiled function expects `n` `Double` (or `js/Number`)
 *   arguments. The function body is simplified and all common subexpressions
 *   identified during compilation are extracted and computed only once.
 * 
 *   NOTE: this function uses no cache. To take advantage of the global compilation
 *   cache, see `compile-fn`.
 */
sicmutils.expression.compile.compile_fn_STAR_ = (function sicmutils$expression$compile$compile_fn_STAR_(var_args){
var G__102281 = arguments.length;
switch (G__102281) {
case 1:
return sicmutils.expression.compile.compile_fn_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.expression.compile.compile_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.expression.compile.compile_fn_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return sicmutils.expression.compile.compile_fn_STAR_.cljs$core$IFn$_invoke$arity$2(f,sicmutils.expression.compile.retrieve_arity(f));
}));

(sicmutils.expression.compile.compile_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,n){
var sw = sicmutils.util.stopwatch.stopwatch();
var args = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
}));
var body = sicmutils.expression.compile.apply_numeric_ops(sicmutils.expression.compile.cse_form.cljs$core$IFn$_invoke$arity$1(sicmutils.value.freeze(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args)))));
var compiled = (function (){var G__102282 = sicmutils.expression.compile.compiler_mode();
var G__102282__$1 = (((G__102282 instanceof cljs.core.Keyword))?G__102282.fqn:null);
switch (G__102282__$1) {
case "source":
return sicmutils.expression.compile.compile__GT_source(args,body);

break;
case "native":
return sicmutils.expression.compile.compile_native(args,body);

break;
case "sci":
return sicmutils.expression.compile.compile_sci(args,body);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__102282__$1)].join('')));

}
})();
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"sicmutils.expression.compile",null,1086,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compiled function of arity",n,"in",sw.sicmutils$util$stopwatch$IStopwatch$repr$arity$1(null),"with mode",sicmutils.expression.compile._STAR_mode_STAR_], null);
}),null)),null,1175746620,null);

return compiled;
}));

(sicmutils.expression.compile.compile_fn_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Memoized version of [[compile-fn*]]. See that function's docs for more detail.
 * 
 *   NOTE: that this function makes use of a global compilation cache, keyed by the
 *   vector `[f n *mode*]`. See `compile-fn*` to avoid the cache.
 */
sicmutils.expression.compile.compile_fn = (function sicmutils$expression$compile$compile_fn(var_args){
var G__102302 = arguments.length;
switch (G__102302) {
case 1:
return sicmutils.expression.compile.compile_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.expression.compile.compile_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.expression.compile.compile_fn.cljs$core$IFn$_invoke$arity$1 = (function (f){
var vec__102312 = sicmutils.function$.arity(f);
var kwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102312,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102312,(1),null);
var arity = vec__102312;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kwd,new cljs.core.Keyword(null,"exactly","exactly",1304099233))){
} else {
sicmutils.util.illegal(["`compile-fn` can only infer arity for functions with just one\n           arity, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity),". Please pass an explicit `n`."].join(''));
}

return sicmutils.expression.compile.compile_fn.cljs$core$IFn$_invoke$arity$2(f,n);
}));

(sicmutils.expression.compile.compile_fn.cljs$core$IFn$_invoke$arity$2 = (function (f,n){
var mode = sicmutils.expression.compile._STAR_mode_STAR_;
var temp__5751__auto__ = (function (){var G__102316 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,n,mode], null);
var fexpr__102315 = cljs.core.deref(sicmutils.expression.compile.fn_cache);
return (fexpr__102315.cljs$core$IFn$_invoke$arity$1 ? fexpr__102315.cljs$core$IFn$_invoke$arity$1(G__102316) : fexpr__102315.call(null,G__102316));
})();
if(cljs.core.truth_(temp__5751__auto__)){
var cached = temp__5751__auto__;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"sicmutils.expression.compile",null,1104,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compiled function cache hit - arity ",n,", mode ",mode], null);
}),null)),null,-1914993971,null);

return cached;
} else {
var _STAR_mode_STAR__orig_val__102327 = sicmutils.expression.compile._STAR_mode_STAR_;
var _STAR_mode_STAR__temp_val__102328 = mode;
(sicmutils.expression.compile._STAR_mode_STAR_ = _STAR_mode_STAR__temp_val__102328);

try{var compiled = sicmutils.expression.compile.compile_fn_STAR_.cljs$core$IFn$_invoke$arity$2(f,n);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sicmutils.expression.compile.fn_cache,cljs.core.assoc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,n,mode], null),compiled);

return compiled;
}finally {(sicmutils.expression.compile._STAR_mode_STAR_ = _STAR_mode_STAR__orig_val__102327);
}}
}));

(sicmutils.expression.compile.compile_fn.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sicmutils.expression.compile.js.map
