goog.provide('sicmutils.expression.compile');
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
sicmutils.expression.compile.compiled_fn_whitelist = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"quotient","quotient",-1029733218,null),new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),new cljs.core.Symbol(null,"up","up",1370819414,null),new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),new cljs.core.Symbol(null,"sin","sin",1721439389,null),new cljs.core.Symbol(null,"tan","tan",-1380825876,null),new cljs.core.Symbol(null,"cos","cos",-1452677493,null),new cljs.core.Symbol(null,"modulo","modulo",725580254,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"abs","abs",1394505050,null),new cljs.core.Symbol(null,"log","log",45015523,null),new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),new cljs.core.Symbol(null,"expt","expt",2123850345,null),new cljs.core.Symbol(null,"fractional-part","fractional-part",-505422086,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"atan","atan",-1026550135,null),new cljs.core.Symbol(null,"acos","acos",353741763,null),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"acosh","acosh",-2005748303,null),new cljs.core.Symbol(null,"ceiling","ceiling",-1593475279,null),new cljs.core.Symbol(null,"down","down",-1089190199,null),new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),new cljs.core.Symbol(null,"asin","asin",-904130570,null),new cljs.core.Symbol(null,"exp","exp",1378825265,null),new cljs.core.Symbol(null,"integer-part","integer-part",-1884537015,null),new cljs.core.Symbol(null,"asinh","asinh",-1398350397,null),new cljs.core.Symbol(null,"tanh","tanh",480481797,null),new cljs.core.Symbol(null,"atanh","atanh",-1915750692,null)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("clojure.core","quot","clojure.core/quot",-292848233,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.quot], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("clojure.core","rem","clojure.core/rem",-160175829,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.rem], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","vector","cljs.core/vector",720641726,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","sinh","Math/sinh",-996945022,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__81614_SHARP_){
return Math.sinh(p1__81614_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","sin","Math/sin",1723896309,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__81608_SHARP_){
return Math.sin(p1__81608_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","tan","Math/tan",-1378236364,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__81609_SHARP_){
return Math.tan(p1__81609_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","cos","Math/cos",-1454544429,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__81607_SHARP_){
return Math.cos(p1__81607_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("clojure.core","mod","clojure.core/mod",215755142,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.mod], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core._SLASH_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","abs","Math/abs",1400569394,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__81604_SHARP_){
return Math.abs(p1__81604_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","log","Math/log",46490779,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__81605_SHARP_){
return Math.log(p1__81605_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","cosh","Math/cosh",-1954958918,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__81613_SHARP_){
return Math.cosh(p1__81613_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","pow","Math/pow",193807960,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__81601_SHARP_,p2__81602_SHARP_){
return Math.pow(p1__81601_SHARP_,p2__81602_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x","x",-555367584,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x","x",-555367584,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("Math","floor","Math/floor",-774722964,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x","x",-555367584,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (x){
return (x - Math.floor(x));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core._PLUS_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","*","cljs.core/*",-857794892,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core._STAR_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","atan","Math/atan",-1027632159,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__81612_SHARP_){
return Math.atan(p1__81612_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","acos","Math/acos",357181099,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__81610_SHARP_){
return Math.acos(p1__81610_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","floor","Math/floor",-774722964,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__81616_SHARP_){
return Math.floor(p1__81616_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core._], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","acosh","Math/acosh",-2007025431,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__81619_SHARP_){
return Math.acosh(p1__81619_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","ceil","Math/ceil",-186204017,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__81617_SHARP_){
return Math.ceil(p1__81617_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("sicmutils.structure","down","sicmutils.structure/down",140665603,null),new cljs.core.Keyword(null,"f","f",-1597136552),sicmutils.structure.down], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","sqrt","Math/sqrt",377394374,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__81603_SHARP_){
return Math.sqrt(p1__81603_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","asin","Math/asin",-889681202,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__81611_SHARP_){
return Math.asin(p1__81611_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","exp","Math/exp",1383313257,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__81606_SHARP_){
return Math.exp(p1__81606_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","trunc","Math/trunc",1386774702,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__81618_SHARP_){
return Math.trunc(p1__81618_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","asinh","Math/asinh",-1387635973,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__81620_SHARP_){
return Math.asinh(p1__81620_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","tanh","Math/tanh",479074141,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__81615_SHARP_){
return Math.tanh(p1__81615_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","atanh","Math/atanh",-1910277884,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__81621_SHARP_){
return Math.atanh(p1__81621_SHARP_);
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
var G__81737 = referenced_SINGLEQUOTE_;
var G__81738 = syms_in_exprs;
referenced = G__81737;
sym_batch = G__81738;
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
var G__81629 = arguments.length;
switch (G__81629) {
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

(sicmutils.expression.compile.extract_common_subexpressions.cljs$core$IFn$_invoke$arity$3 = (function (expr,continue$,p__81633){
var map__81634 = p__81633;
var map__81634__$1 = cljs.core.__destructure_map(map__81634);
var symbol_generator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__81634__$1,new cljs.core.Keyword(null,"symbol-generator","symbol-generator",574487160),sicmutils.expression.compile.sortable_gensym);
var deterministic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81634__$1,new cljs.core.Keyword(null,"deterministic?","deterministic?",-1057176664));
var sort = (cljs.core.truth_(deterministic_QMARK_)?cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.sort_by,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.str,cljs.core.vec,cljs.core.first)):cljs.core.identity);
var x = expr;
var expr__GT_sym = cljs.core.PersistentArrayMap.EMPTY;
while(true){
var expr__GT_count = sicmutils.expression.compile.expr_frequencies(x,expr__GT_sym);
var new_syms = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = ((function (x,expr__GT_sym,expr__GT_count,sort,map__81634,map__81634__$1,symbol_generator,deterministic_QMARK_){
return (function sicmutils$expression$compile$iter__81650(s__81651){
return (new cljs.core.LazySeq(null,((function (x,expr__GT_sym,expr__GT_count,sort,map__81634,map__81634__$1,symbol_generator,deterministic_QMARK_){
return (function (){
var s__81651__$1 = s__81651;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81651__$1);
if(temp__5753__auto__){
var s__81651__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81651__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81651__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81653 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81652 = (0);
while(true){
if((i__81652 < size__4651__auto__)){
var vec__81658 = cljs.core._nth(c__4650__auto__,i__81652);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81658,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81658,(1),null);
if((v > (1))){
cljs.core.chunk_append(b__81653,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(symbol_generator.cljs$core$IFn$_invoke$arity$0 ? symbol_generator.cljs$core$IFn$_invoke$arity$0() : symbol_generator.call(null))], null));

var G__81740 = (i__81652 + (1));
i__81652 = G__81740;
continue;
} else {
var G__81741 = (i__81652 + (1));
i__81652 = G__81741;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81653),sicmutils$expression$compile$iter__81650(cljs.core.chunk_rest(s__81651__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81653),null);
}
} else {
var vec__81661 = cljs.core.first(s__81651__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81661,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81661,(1),null);
if((v > (1))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(symbol_generator.cljs$core$IFn$_invoke$arity$0 ? symbol_generator.cljs$core$IFn$_invoke$arity$0() : symbol_generator.call(null))], null),sicmutils$expression$compile$iter__81650(cljs.core.rest(s__81651__$2)));
} else {
var G__81742 = cljs.core.rest(s__81651__$2);
s__81651__$1 = G__81742;
continue;
}
}
} else {
return null;
}
break;
}
});})(x,expr__GT_sym,expr__GT_count,sort,map__81634,map__81634__$1,symbol_generator,deterministic_QMARK_))
,null,null));
});})(x,expr__GT_sym,expr__GT_count,sort,map__81634,map__81634__$1,symbol_generator,deterministic_QMARK_))
;
return iter__4652__auto__((sort.cljs$core$IFn$_invoke$arity$1 ? sort.cljs$core$IFn$_invoke$arity$1(expr__GT_count) : sort.call(null,expr__GT_count)));
})());
if(cljs.core.empty_QMARK_(new_syms)){
var sym__GT_expr = sicmutils.expression.compile.discard_unreferenced_syms(clojure.set.map_invert(expr__GT_sym),x);
var G__81666 = x;
var G__81667 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.key,sym__GT_expr);
return (continue$.cljs$core$IFn$_invoke$arity$2 ? continue$.cljs$core$IFn$_invoke$arity$2(G__81666,G__81667) : continue$.call(null,G__81666,G__81667));
} else {
var expr__GT_sym_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr__GT_sym,new_syms], 0));
var G__81743 = clojure.walk.postwalk_replace(expr__GT_sym_SINGLEQUOTE_,x);
var G__81744 = expr__GT_sym_SINGLEQUOTE_;
x = G__81743;
expr__GT_sym = G__81744;
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
 *   ## Optional Arguments
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
var G__81672 = arguments.length;
switch (G__81672) {
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"sicmutils.expression.compile",null,350,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.string.format("common subexpression elimination: %d expressions",n_bindings)], null);
}),null)),null,-247651070,null);

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
 * Takes a function body and returns a new body with all numeric operations
 *   like `(/ 1 2)` evaluated and all numerical literals converted to `double` or
 *   `js/Number`.
 */
sicmutils.expression.compile.apply_numeric_ops = (function sicmutils$expression$compile$apply_numeric_ops(body){
return clojure.walk.postwalk((function (expr){
if(sicmutils.value.real_QMARK_(expr)){
return sicmutils.util.double$(expr);
} else {
if(cljs.core.sequential_QMARK_(expr)){
var vec__81678 = expr;
var seq__81679 = cljs.core.seq(vec__81678);
var first__81680 = cljs.core.first(seq__81679);
var seq__81679__$1 = cljs.core.next(seq__81679);
var f = first__81680;
var xs = seq__81679__$1;
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
 *  nested function returned by the state function
 *   - `opts`, a dictionary of compilation options.
 * 
 *   See [[compile-state-fn*]] for a description of the options accepted in
 *   `opts`.
 */
sicmutils.expression.compile.state_argv = (function sicmutils$expression$compile$state_argv(params,state_model,p__81684){
var map__81685 = p__81684;
var map__81685__$1 = cljs.core.__destructure_map(map__81685);
var flatten_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__81685__$1,new cljs.core.Keyword(null,"flatten?","flatten?",-1094542849),true);
var generic_params_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__81685__$1,new cljs.core.Keyword(null,"generic-params?","generic-params?",918310827),true);
var state = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(flatten_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.flatten(state_model)):state_model));
if(cljs.core.truth_(generic_params_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,params)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state], null);
}
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
 * Returns a natively-evaluated Clojure function that implements `body`, given:
 * 
 *   - `params`: a seq of symbols equal in count to the original state function's
 *  args
 *   - `state-model`: a sequence of variables representing the structure of the
 *  nested function returned by the state function
 *   - `body`: a function body making use of any symbol in the args above
 */
sicmutils.expression.compile.compile_state__GT_source = (function sicmutils$expression$compile$compile_state__GT_source(params,state_model,body,opts){
var body__$1 = clojure.walk.postwalk_replace(sicmutils.expression.compile.sym__GT_resolved_form,body);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,sicmutils.expression.compile.state_argv(params,state_model,opts),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,body__$1,null,(1),null))], 0))));
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
sicmutils.expression.compile.compile_state_native = (function sicmutils$expression$compile$compile_state_native(params,state_model,body,opts){
return cljs.core.eval(sicmutils.expression.compile.compile_state__GT_source(params,state_model,body,opts));
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
sicmutils.expression.compile.compile_state_sci = (function sicmutils$expression$compile$compile_state_sci(params,state_model,body,opts){
return sicmutils.expression.compile.sci_eval(sicmutils.expression.compile.compile_state__GT_source(params,state_model,body,opts));
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
var G__81697 = new cljs.core.Symbol(null,"y","y",-117328249,null);
return (gensym_fn.cljs$core$IFn$_invoke$arity$1 ? gensym_fn.cljs$core$IFn$_invoke$arity$1(G__81697) : gensym_fn.call(null,G__81697));
}
});
return rec(state);
});
/**
 * Returns a compiled, simplified function with signature `(f state params)`,
 *   given:
 * 
 *   - a state function that can accept a symbolic arguments
 * 
 *   - `params`; really any sequence of count equal to the number of arguments
 *  taken by `f`. The values are ignored.
 * 
 *   - `initial-state`: Some structure of the same shape as the argument expected
 *  by the fn returned by the state function `f`. Only the shape matters; the
 *  values are ignored.
 * 
 *   - an optional argument `opts`. Options accepted are:
 * 
 *  - `:flatten?`: if `true` (default), the returned function will have
 *    signature `(f <flattened-state> [params])`. If `false`, the first arg of the
 *    returned function will be expected to have the same shape as `initial-state`
 * 
 *  - `:generic-params?`: if `true` (default), the returned function will take a
 *    second argument for the parameters of the state derivative and keep params
 *    generic. If false, the returned function will take a single state argument,
 *    and the supplied params will be hardcoded.
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
var G__81699 = arguments.length;
switch (G__81699) {
case 3:
return sicmutils.expression.compile.compile_state_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sicmutils.expression.compile.compile_state_fn_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.expression.compile.compile_state_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,params,initial_state){
return sicmutils.expression.compile.compile_state_fn_STAR_.cljs$core$IFn$_invoke$arity$4(f,params,initial_state,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.expression.compile.compile_state_fn_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (f,params,initial_state,p__81700){
var map__81701 = p__81700;
var map__81701__$1 = cljs.core.__destructure_map(map__81701);
var opts = map__81701__$1;
var generic_params_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__81701__$1,new cljs.core.Keyword(null,"generic-params?","generic-params?",918310827),true);
var gensym_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__81701__$1,new cljs.core.Keyword(null,"gensym-fn","gensym-fn",-883485832),cljs.core.gensym);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81701__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var sw = sicmutils.util.stopwatch.stopwatch();
var params__$1 = (cljs.core.truth_(generic_params_QMARK_)?(function (){var iter__4652__auto__ = (function sicmutils$expression$compile$iter__81703(s__81704){
return (new cljs.core.LazySeq(null,(function (){
var s__81704__$1 = s__81704;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81704__$1);
if(temp__5753__auto__){
var s__81704__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81704__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81704__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81706 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81705 = (0);
while(true){
if((i__81705 < size__4651__auto__)){
var _ = cljs.core._nth(c__4650__auto__,i__81705);
cljs.core.chunk_append(b__81706,(function (){var G__81707 = new cljs.core.Symbol(null,"p","p",1791580836,null);
return (gensym_fn.cljs$core$IFn$_invoke$arity$1 ? gensym_fn.cljs$core$IFn$_invoke$arity$1(G__81707) : gensym_fn.call(null,G__81707));
})());

var G__81747 = (i__81705 + (1));
i__81705 = G__81747;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81706),sicmutils$expression$compile$iter__81703(cljs.core.chunk_rest(s__81704__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81706),null);
}
} else {
var _ = cljs.core.first(s__81704__$2);
return cljs.core.cons((function (){var G__81708 = new cljs.core.Symbol(null,"p","p",1791580836,null);
return (gensym_fn.cljs$core$IFn$_invoke$arity$1 ? gensym_fn.cljs$core$IFn$_invoke$arity$1(G__81708) : gensym_fn.call(null,G__81708));
})(),sicmutils$expression$compile$iter__81703(cljs.core.rest(s__81704__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(params);
})():params);
var generic_state = sicmutils.expression.compile.state__GT_argv(initial_state,gensym_fn);
var g = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,params__$1);
var body = sicmutils.expression.compile.apply_numeric_ops(sicmutils.expression.compile.cse_form.cljs$core$IFn$_invoke$arity$1(sicmutils.value.freeze(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1((g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(generic_state) : g.call(null,generic_state))))));
var compiler = (function (){var G__81709 = sicmutils.expression.compile.validate_mode_BANG_((function (){var or__4253__auto__ = mode;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.expression.compile._STAR_mode_STAR_;
}
})());
var G__81709__$1 = (((G__81709 instanceof cljs.core.Keyword))?G__81709.fqn:null);
switch (G__81709__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__81709__$1)].join('')));

}
})();
var compiled_fn = (compiler.cljs$core$IFn$_invoke$arity$4 ? compiler.cljs$core$IFn$_invoke$arity$4(params__$1,generic_state,body,opts) : compiler.call(null,params__$1,generic_state,body,opts));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"sicmutils.expression.compile",null,620,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compiled state function in",sw.sicmutils$util$stopwatch$IStopwatch$repr$arity$1(null),"with mode",sicmutils.expression.compile._STAR_mode_STAR_], null);
}),null)),null,-422153045,null);

return compiled_fn;
}));

(sicmutils.expression.compile.compile_state_fn_STAR_.cljs$lang$maxFixedArity = 4);

/**
 * Version of [[compile-state-fn*]] memoized on the `f` parameter only.
 *   See that function's docs for more detail.
 * 
 *   NOTE that this function makes use of a global compilation cache, keyed by the
 *   value of `f`. Passing in the same `f` twice, even with different arguments for
 *   `param` and `initial-state` and different compilation modes, will return the
 *   cached value. See `compile-state-fn*` to avoid the cache.
 */
sicmutils.expression.compile.compile_state_fn = (function sicmutils$expression$compile$compile_state_fn(var_args){
var G__81714 = arguments.length;
switch (G__81714) {
case 3:
return sicmutils.expression.compile.compile_state_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sicmutils.expression.compile.compile_state_fn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.expression.compile.compile_state_fn.cljs$core$IFn$_invoke$arity$3 = (function (f,params,initial_state){
return sicmutils.expression.compile.compile_state_fn.cljs$core$IFn$_invoke$arity$4(f,params,initial_state,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.expression.compile.compile_state_fn.cljs$core$IFn$_invoke$arity$4 = (function (f,params,initial_state,opts){
var temp__5751__auto__ = (function (){var fexpr__81717 = cljs.core.deref(sicmutils.expression.compile.fn_cache);
return (fexpr__81717.cljs$core$IFn$_invoke$arity$1 ? fexpr__81717.cljs$core$IFn$_invoke$arity$1(f) : fexpr__81717.call(null,f));
})();
if(cljs.core.truth_(temp__5751__auto__)){
var cached = temp__5751__auto__;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"sicmutils.expression.compile",null,638,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compiled state function cache hit"], null);
}),null)),null,-517431923,null);

return cached;
} else {
var compiled = sicmutils.expression.compile.compile_state_fn_STAR_.cljs$core$IFn$_invoke$arity$4(f,params,initial_state,opts);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sicmutils.expression.compile.fn_cache,cljs.core.assoc,f,compiled);

return compiled;
}
}));

(sicmutils.expression.compile.compile_state_fn.cljs$lang$maxFixedArity = 4);

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
var vec__81718 = sicmutils.function$.arity(f);
var kwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81718,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81718,(1),null);
var arity = vec__81718;
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
var G__81722 = arguments.length;
switch (G__81722) {
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
var compiled = (function (){var G__81723 = sicmutils.expression.compile.compiler_mode();
var G__81723__$1 = (((G__81723 instanceof cljs.core.Keyword))?G__81723.fqn:null);
switch (G__81723__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__81723__$1)].join('')));

}
})();
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"sicmutils.expression.compile",null,714,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compiled function of arity",n,"in",sw.sicmutils$util$stopwatch$IStopwatch$repr$arity$1(null),"with mode",sicmutils.expression.compile._STAR_mode_STAR_], null);
}),null)),null,319975386,null);

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
var G__81725 = arguments.length;
switch (G__81725) {
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
var vec__81726 = sicmutils.function$.arity(f);
var kwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81726,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81726,(1),null);
var arity = vec__81726;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kwd,new cljs.core.Keyword(null,"exactly","exactly",1304099233))){
} else {
sicmutils.util.illegal(["`compile-fn` can only infer arity for functions with just one\n           arity, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity),". Please pass an explicit `n`."].join(''));
}

return sicmutils.expression.compile.compile_fn.cljs$core$IFn$_invoke$arity$2(f,n);
}));

(sicmutils.expression.compile.compile_fn.cljs$core$IFn$_invoke$arity$2 = (function (f,n){
var mode = sicmutils.expression.compile._STAR_mode_STAR_;
var temp__5751__auto__ = (function (){var G__81730 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,n,mode], null);
var fexpr__81729 = cljs.core.deref(sicmutils.expression.compile.fn_cache);
return (fexpr__81729.cljs$core$IFn$_invoke$arity$1 ? fexpr__81729.cljs$core$IFn$_invoke$arity$1(G__81730) : fexpr__81729.call(null,G__81730));
})();
if(cljs.core.truth_(temp__5751__auto__)){
var cached = temp__5751__auto__;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"sicmutils.expression.compile",null,732,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compiled function cache hit - arity ",n,", mode ",mode], null);
}),null)),null,1768974266,null);

return cached;
} else {
var _STAR_mode_STAR__orig_val__81731 = sicmutils.expression.compile._STAR_mode_STAR_;
var _STAR_mode_STAR__temp_val__81732 = mode;
(sicmutils.expression.compile._STAR_mode_STAR_ = _STAR_mode_STAR__temp_val__81732);

try{var compiled = sicmutils.expression.compile.compile_fn_STAR_.cljs$core$IFn$_invoke$arity$2(f,n);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sicmutils.expression.compile.fn_cache,cljs.core.assoc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,n,mode], null),compiled);

return compiled;
}finally {(sicmutils.expression.compile._STAR_mode_STAR_ = _STAR_mode_STAR__orig_val__81731);
}}
}));

(sicmutils.expression.compile.compile_fn.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sicmutils.expression.compile.js.map
