goog.provide('demo.compile');
demo.compile.fn_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Dict of `<symbol> -> {:sym <symbolic-fn>, :f <evaluated-fn>}`. The
 *     keys constitute the set of operations allowed to appear within the body
 *     of the compiled function.
 * 
 *     If you're compiling a function for use with the numerical routines, the
 *     library assumes that your function operates only on doubles (even though
 *     you wrote it with generic routines).
 */
demo.compile.compiled_fn_whitelist = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"quotient","quotient",-1029733218,null),new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),new cljs.core.Symbol(null,"up","up",1370819414,null),new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),new cljs.core.Symbol(null,"sin","sin",1721439389,null),new cljs.core.Symbol(null,"tan","tan",-1380825876,null),new cljs.core.Symbol(null,"cos","cos",-1452677493,null),new cljs.core.Symbol(null,"modulo","modulo",725580254,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"abs","abs",1394505050,null),new cljs.core.Symbol(null,"log","log",45015523,null),new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),new cljs.core.Symbol(null,"expt","expt",2123850345,null),new cljs.core.Symbol(null,"fractional-part","fractional-part",-505422086,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"atan","atan",-1026550135,null),new cljs.core.Symbol(null,"acos","acos",353741763,null),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"acosh","acosh",-2005748303,null),new cljs.core.Symbol(null,"ceiling","ceiling",-1593475279,null),new cljs.core.Symbol(null,"down","down",-1089190199,null),new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),new cljs.core.Symbol(null,"asin","asin",-904130570,null),new cljs.core.Symbol(null,"exp","exp",1378825265,null),new cljs.core.Symbol(null,"integer-part","integer-part",-1884537015,null),new cljs.core.Symbol(null,"asinh","asinh",-1398350397,null),new cljs.core.Symbol(null,"tanh","tanh",480481797,null),new cljs.core.Symbol(null,"atanh","atanh",-1915750692,null)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("clojure.core","quot","clojure.core/quot",-292848233,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.quot], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("clojure.core","rem","clojure.core/rem",-160175829,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.rem], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","vector","cljs.core/vector",720641726,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","sinh","Math/sinh",-996945022,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__106000_SHARP_){
return Math.sinh(p1__106000_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","sin","Math/sin",1723896309,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__105994_SHARP_){
return Math.sin(p1__105994_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","tan","Math/tan",-1378236364,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__105995_SHARP_){
return Math.tan(p1__105995_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","cos","Math/cos",-1454544429,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__105993_SHARP_){
return Math.cos(p1__105993_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("clojure.core","mod","clojure.core/mod",215755142,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.mod], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core._SLASH_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","abs","Math/abs",1400569394,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__105990_SHARP_){
return Math.abs(p1__105990_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","log","Math/log",46490779,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__105991_SHARP_){
return Math.log(p1__105991_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","cosh","Math/cosh",-1954958918,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__105999_SHARP_){
return Math.cosh(p1__105999_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","pow","Math/pow",193807960,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__105987_SHARP_,p2__105988_SHARP_){
return Math.pow(p1__105987_SHARP_,p2__105988_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x","x",-555367584,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x","x",-555367584,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("Math","floor","Math/floor",-774722964,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x","x",-555367584,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (x){
return (x - Math.floor(x));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core._PLUS_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","*","cljs.core/*",-857794892,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core._STAR_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","atan","Math/atan",-1027632159,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__105998_SHARP_){
return Math.atan(p1__105998_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","acos","Math/acos",357181099,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__105996_SHARP_){
return Math.acos(p1__105996_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","floor","Math/floor",-774722964,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__106002_SHARP_){
return Math.floor(p1__106002_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core._], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","acosh","Math/acosh",-2007025431,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__106005_SHARP_){
return Math.acosh(p1__106005_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","ceil","Math/ceil",-186204017,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__106003_SHARP_){
return Math.ceil(p1__106003_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("sicmutils.structure","down","sicmutils.structure/down",140665603,null),new cljs.core.Keyword(null,"f","f",-1597136552),sicmutils.structure.down], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","sqrt","Math/sqrt",377394374,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__105989_SHARP_){
return Math.sqrt(p1__105989_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","asin","Math/asin",-889681202,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__105997_SHARP_){
return Math.asin(p1__105997_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","exp","Math/exp",1383313257,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__105992_SHARP_){
return Math.exp(p1__105992_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","trunc","Math/trunc",1386774702,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__106004_SHARP_){
return Math.trunc(p1__106004_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","asinh","Math/asinh",-1387635973,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__106006_SHARP_){
return Math.asinh(p1__106006_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","tanh","Math/tanh",479074141,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__106001_SHARP_){
return Math.tanh(p1__106001_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("Math","atanh","Math/atanh",-1910277884,null),new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__106007_SHARP_){
return Math.atanh(p1__106007_SHARP_);
})], null)]);
/**
 * Dict of `<symbol> -> <symbolic-fn>`. See [[compiled-fn-whitelist]]
 *     for more detail.
 */
demo.compile.sym__GT_resolved_form = sicmutils.util.map_vals(new cljs.core.Keyword(null,"sym","sym",-1444860305),demo.compile.compiled_fn_whitelist);
/**
 * Returns a map from distinct subexpressions in the supplied `expr` to the
 *   number of times each appears.
 * 
 *   If `skip?` returns true given a subexpression it won't be included as a key in
 *   the returned map.
 */
demo.compile.expr_frequencies = (function demo$compile$expr_frequencies(expr,skip_QMARK_){
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
demo.compile.discard_unreferenced_syms = (function demo$compile$discard_unreferenced_syms(sym__GT_expr,expr){
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
var G__106074 = referenced_SINGLEQUOTE_;
var G__106075 = syms_in_exprs;
referenced = G__106074;
sym_batch = G__106075;
continue;
}
break;
}
});
demo.compile.sortable_gensym = sicmutils.expression.analyze.monotonic_symbol_generator("G");
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
demo.compile.extract_common_subexpressions = (function demo$compile$extract_common_subexpressions(var_args){
var G__106009 = arguments.length;
switch (G__106009) {
case 2:
return demo.compile.extract_common_subexpressions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return demo.compile.extract_common_subexpressions.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(demo.compile.extract_common_subexpressions.cljs$core$IFn$_invoke$arity$2 = (function (expr,continue$){
return demo.compile.extract_common_subexpressions.cljs$core$IFn$_invoke$arity$3(expr,continue$,cljs.core.PersistentArrayMap.EMPTY);
}));

(demo.compile.extract_common_subexpressions.cljs$core$IFn$_invoke$arity$3 = (function (expr,continue$,p__106010){
var map__106011 = p__106010;
var map__106011__$1 = cljs.core.__destructure_map(map__106011);
var symbol_generator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__106011__$1,new cljs.core.Keyword(null,"symbol-generator","symbol-generator",574487160),demo.compile.sortable_gensym);
var deterministic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106011__$1,new cljs.core.Keyword(null,"deterministic?","deterministic?",-1057176664));
var sort = (cljs.core.truth_(deterministic_QMARK_)?cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.sort_by,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.str,cljs.core.vec,cljs.core.first)):cljs.core.identity);
var x = expr;
var expr__GT_sym = cljs.core.PersistentArrayMap.EMPTY;
while(true){
var expr__GT_count = demo.compile.expr_frequencies(x,expr__GT_sym);
var new_syms = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = ((function (x,expr__GT_sym,expr__GT_count,sort,map__106011,map__106011__$1,symbol_generator,deterministic_QMARK_){
return (function demo$compile$iter__106024(s__106025){
return (new cljs.core.LazySeq(null,((function (x,expr__GT_sym,expr__GT_count,sort,map__106011,map__106011__$1,symbol_generator,deterministic_QMARK_){
return (function (){
var s__106025__$1 = s__106025;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__106025__$1);
if(temp__5753__auto__){
var s__106025__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__106025__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__106025__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__106027 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__106026 = (0);
while(true){
if((i__106026 < size__4651__auto__)){
var vec__106028 = cljs.core._nth(c__4650__auto__,i__106026);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106028,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106028,(1),null);
if((v > (1))){
cljs.core.chunk_append(b__106027,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(symbol_generator.cljs$core$IFn$_invoke$arity$0 ? symbol_generator.cljs$core$IFn$_invoke$arity$0() : symbol_generator.call(null))], null));

var G__106077 = (i__106026 + (1));
i__106026 = G__106077;
continue;
} else {
var G__106078 = (i__106026 + (1));
i__106026 = G__106078;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__106027),demo$compile$iter__106024(cljs.core.chunk_rest(s__106025__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__106027),null);
}
} else {
var vec__106031 = cljs.core.first(s__106025__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106031,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106031,(1),null);
if((v > (1))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(symbol_generator.cljs$core$IFn$_invoke$arity$0 ? symbol_generator.cljs$core$IFn$_invoke$arity$0() : symbol_generator.call(null))], null),demo$compile$iter__106024(cljs.core.rest(s__106025__$2)));
} else {
var G__106081 = cljs.core.rest(s__106025__$2);
s__106025__$1 = G__106081;
continue;
}
}
} else {
return null;
}
break;
}
});})(x,expr__GT_sym,expr__GT_count,sort,map__106011,map__106011__$1,symbol_generator,deterministic_QMARK_))
,null,null));
});})(x,expr__GT_sym,expr__GT_count,sort,map__106011,map__106011__$1,symbol_generator,deterministic_QMARK_))
;
return iter__4652__auto__((sort.cljs$core$IFn$_invoke$arity$1 ? sort.cljs$core$IFn$_invoke$arity$1(expr__GT_count) : sort.call(null,expr__GT_count)));
})());
if(cljs.core.empty_QMARK_(new_syms)){
var sym__GT_expr = demo.compile.discard_unreferenced_syms(clojure.set.map_invert(expr__GT_sym),x);
var G__106034 = x;
var G__106035 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.key,sym__GT_expr);
return (continue$.cljs$core$IFn$_invoke$arity$2 ? continue$.cljs$core$IFn$_invoke$arity$2(G__106034,G__106035) : continue$.call(null,G__106034,G__106035));
} else {
var expr__GT_sym_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr__GT_sym,new_syms], 0));
var G__106082 = clojure.walk.postwalk_replace(expr__GT_sym_SINGLEQUOTE_,x);
var G__106083 = expr__GT_sym_SINGLEQUOTE_;
x = G__106082;
expr__GT_sym = G__106083;
continue;
}
break;
}
}));

(demo.compile.extract_common_subexpressions.cljs$lang$maxFixedArity = 3);

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
demo.compile.cse_form = (function demo$compile$cse_form(var_args){
var G__106037 = arguments.length;
switch (G__106037) {
case 1:
return demo.compile.cse_form.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return demo.compile.cse_form.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(demo.compile.cse_form.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return demo.compile.cse_form.cljs$core$IFn$_invoke$arity$2(expr,cljs.core.PersistentArrayMap.EMPTY);
}));

(demo.compile.cse_form.cljs$core$IFn$_invoke$arity$2 = (function (expr,opts){
var callback = (function demo$compile$callback(new_expression,bindings){
var n_bindings = cljs.core.count(bindings);
if((n_bindings > (0))){
var binding_vec = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,bindings);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"demo.compile",null,350,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.string.format("common subexpression elimination: %d expressions",n_bindings)], null);
}),null)),null,-1190721937,null);

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,binding_vec,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new_expression,null,(1),null))], 0))));
} else {
return new_expression;
}
});
return demo.compile.extract_common_subexpressions.cljs$core$IFn$_invoke$arity$3(expr,callback,opts);
}));

(demo.compile.cse_form.cljs$lang$maxFixedArity = 2);

/**
 * Similar to [[compiled-fn-whitelist]], but restricted to numeric
 *   operations.
 */
demo.compile.numeric_whitelist = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(demo.compile.compiled_fn_whitelist,new cljs.core.Symbol(null,"up","up",1370819414,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"down","down",-1089190199,null)], 0));
/**
 * Takes a function body and returns a new body with all numeric operations
 *   like `(/ 1 2)` evaluated and all numerical literals converted to `double` or
 *   `js/Number`.
 */
demo.compile.apply_numeric_ops = (function demo$compile$apply_numeric_ops(body){
return clojure.walk.postwalk((function (expr){
if(sicmutils.value.real_QMARK_(expr)){
return sicmutils.util.double$(expr);
} else {
if(cljs.core.sequential_QMARK_(expr)){
var vec__106038 = expr;
var seq__106039 = cljs.core.seq(vec__106038);
var first__106040 = cljs.core.first(seq__106039);
var seq__106039__$1 = cljs.core.next(seq__106039);
var f = first__106040;
var xs = seq__106039__$1;
var temp__5751__auto__ = (function (){var and__4251__auto__ = cljs.core.every_QMARK_(cljs.core.number_QMARK_,xs);
if(and__4251__auto__){
return (demo.compile.numeric_whitelist.cljs$core$IFn$_invoke$arity$1 ? demo.compile.numeric_whitelist.cljs$core$IFn$_invoke$arity$1(f) : demo.compile.numeric_whitelist.call(null,f));
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
demo.compile._STAR_mode_STAR_ = new cljs.core.Keyword(null,"sci","sci",-1317785218);
/**
 * Set of all supported compilation modes.
 */
demo.compile.valid_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"native","native",-613060878),null,new cljs.core.Keyword(null,"sci","sci",-1317785218),null], null), null);
/**
 * Given a keyword `mode` specifying a compilation mode, returns `mode` if valid,
 *   and throws otherwise.
 */
demo.compile.validate_mode_BANG_ = (function demo$compile$validate_mode_BANG_(mode){
var or__4253__auto__ = (demo.compile.valid_modes.cljs$core$IFn$_invoke$arity$1 ? demo.compile.valid_modes.cljs$core$IFn$_invoke$arity$1(mode) : demo.compile.valid_modes.call(null,mode));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid compilation mode supplied: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode),". Please supply (or bind to `*mode*`) one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(demo.compile.valid_modes)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),mode,new cljs.core.Keyword(null,"valid-mode","valid-mode",1171609710),demo.compile.valid_modes], null));
}
});
/**
 * Validates and returns the dynamically bound compilation [[*mode*]].
 *   Throws on an invalid setting.
 */
demo.compile.compiler_mode = (function demo$compile$compiler_mode(){
return demo.compile.validate_mode_BANG_(demo.compile._STAR_mode_STAR_);
});
/**
 * Set the default compilation mode by supplying an entry from [[valid-modes]].
 */
demo.compile.set_compiler_mode_BANG_ = (function demo$compile$set_compiler_mode_BANG_(mode){
demo.compile.validate_mode_BANG_(mode);

return (demo.compile._STAR_mode_STAR_ = mode);
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
demo.compile.state_argv = (function demo$compile$state_argv(params,state_model,p__106041){
var map__106042 = p__106041;
var map__106042__$1 = cljs.core.__destructure_map(map__106042);
var flatten_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__106042__$1,new cljs.core.Keyword(null,"flatten?","flatten?",-1094542849),true);
var generic_params_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__106042__$1,new cljs.core.Keyword(null,"generic-params?","generic-params?",918310827),true);
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
demo.compile.sci_context = sci.core.init(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"Math","Math",2033287572,null),Math], null),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"sicmutils.structure","sicmutils.structure",-695742594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"up","up",1370819414,null),sicmutils.structure.up,new cljs.core.Symbol(null,"down","down",-1089190199,null),sicmutils.structure.down], null)], null)], null));
/**
 * Given an unevaluated source code form `f-form` representing a function,
 *   evaluates `f-form` using the bindings in [[sci-context]].
 * 
 *   Generate these forms by setting `*mode*` to `:source`.
 */
demo.compile.sci_eval = (function demo$compile$sci_eval(f_form){
return sci.core.eval_form(sci.core.fork(demo.compile.sci_context),f_form);
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
demo.compile.compile_state__GT_source = (function demo$compile$compile_state__GT_source(params,state_model,body,opts){
var body__$1 = clojure.walk.postwalk_replace(demo.compile.sym__GT_resolved_form,body);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,demo.compile.state_argv(params,state_model,opts),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,body__$1,null,(1),null))], 0))));
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
demo.compile.compile_state_native = (function demo$compile$compile_state_native(params,state_model,body,opts){
return cljs.core.eval(demo.compile.compile_state__GT_source(params,state_model,body,opts));
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
demo.compile.compile_state_sci = (function demo$compile$compile_state_sci(params,state_model,body,opts){
return demo.compile.sci_eval(demo.compile.compile_state__GT_source(params,state_model,body,opts));
});
/**
 * Given a (structural) initial `state` and a `gensym-fn` function from symbol =>
 *   generated symbol walks the structure and converts all structures to vectors
 *   and all non-structural elements to gensymmed symbols.
 */
demo.compile.state__GT_argv = (function demo$compile$state__GT_argv(state,gensym_fn){
var rec = (function demo$compile$state__GT_argv_$_rec(s){
if(sicmutils.structure.structure_QMARK_(s)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(demo$compile$state__GT_argv_$_rec,s);
} else {
var G__106044 = new cljs.core.Symbol(null,"y","y",-117328249,null);
return (gensym_fn.cljs$core$IFn$_invoke$arity$1 ? gensym_fn.cljs$core$IFn$_invoke$arity$1(G__106044) : gensym_fn.call(null,G__106044));
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
demo.compile.compile_state_fn_STAR_ = (function demo$compile$compile_state_fn_STAR_(var_args){
var G__106046 = arguments.length;
switch (G__106046) {
case 3:
return demo.compile.compile_state_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return demo.compile.compile_state_fn_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(demo.compile.compile_state_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,params,initial_state){
return demo.compile.compile_state_fn_STAR_.cljs$core$IFn$_invoke$arity$4(f,params,initial_state,cljs.core.PersistentArrayMap.EMPTY);
}));

(demo.compile.compile_state_fn_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (f,params,initial_state,p__106047){
var map__106048 = p__106047;
var map__106048__$1 = cljs.core.__destructure_map(map__106048);
var opts = map__106048__$1;
var generic_params_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__106048__$1,new cljs.core.Keyword(null,"generic-params?","generic-params?",918310827),true);
var gensym_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__106048__$1,new cljs.core.Keyword(null,"gensym-fn","gensym-fn",-883485832),cljs.core.gensym);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106048__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var sw = sicmutils.util.stopwatch.stopwatch();
var params__$1 = (cljs.core.truth_(generic_params_QMARK_)?(function (){var iter__4652__auto__ = (function demo$compile$iter__106049(s__106050){
return (new cljs.core.LazySeq(null,(function (){
var s__106050__$1 = s__106050;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__106050__$1);
if(temp__5753__auto__){
var s__106050__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__106050__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__106050__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__106052 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__106051 = (0);
while(true){
if((i__106051 < size__4651__auto__)){
var _ = cljs.core._nth(c__4650__auto__,i__106051);
cljs.core.chunk_append(b__106052,(function (){var G__106053 = new cljs.core.Symbol(null,"p","p",1791580836,null);
return (gensym_fn.cljs$core$IFn$_invoke$arity$1 ? gensym_fn.cljs$core$IFn$_invoke$arity$1(G__106053) : gensym_fn.call(null,G__106053));
})());

var G__106093 = (i__106051 + (1));
i__106051 = G__106093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__106052),demo$compile$iter__106049(cljs.core.chunk_rest(s__106050__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__106052),null);
}
} else {
var _ = cljs.core.first(s__106050__$2);
return cljs.core.cons((function (){var G__106054 = new cljs.core.Symbol(null,"p","p",1791580836,null);
return (gensym_fn.cljs$core$IFn$_invoke$arity$1 ? gensym_fn.cljs$core$IFn$_invoke$arity$1(G__106054) : gensym_fn.call(null,G__106054));
})(),demo$compile$iter__106049(cljs.core.rest(s__106050__$2)));
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
var generic_state = demo.compile.state__GT_argv(initial_state,gensym_fn);
var g = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,params__$1);
var body = demo.compile.apply_numeric_ops(demo.compile.cse_form.cljs$core$IFn$_invoke$arity$1(sicmutils.value.freeze(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1((g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(generic_state) : g.call(null,generic_state))))));
var compiler = (function (){var G__106055 = demo.compile.validate_mode_BANG_((function (){var or__4253__auto__ = mode;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return demo.compile._STAR_mode_STAR_;
}
})());
var G__106055__$1 = (((G__106055 instanceof cljs.core.Keyword))?G__106055.fqn:null);
switch (G__106055__$1) {
case "source":
return demo.compile.compile_state__GT_source;

break;
case "native":
return demo.compile.compile_state_native;

break;
case "sci":
return demo.compile.compile_state_sci;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__106055__$1)].join('')));

}
})();
var _ = console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([generic_state], 0)));
var ___$1 = console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(initial_state) : g.call(null,initial_state))], 0)));
var compiled_fn = (compiler.cljs$core$IFn$_invoke$arity$4 ? compiler.cljs$core$IFn$_invoke$arity$4(params__$1,generic_state,body,opts) : compiler.call(null,params__$1,generic_state,body,opts));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"demo.compile",null,622,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compiled state function in",sw.sicmutils$util$stopwatch$IStopwatch$repr$arity$1(null),"with mode",demo.compile._STAR_mode_STAR_], null);
}),null)),null,1768735341,null);

return compiled_fn;
}));

(demo.compile.compile_state_fn_STAR_.cljs$lang$maxFixedArity = 4);

/**
 * Version of [[compile-state-fn*]] memoized on the `f` parameter only.
 *   See that function's docs for more detail.
 * 
 *   NOTE that this function makes use of a global compilation cache, keyed by the
 *   value of `f`. Passing in the same `f` twice, even with different arguments for
 *   `param` and `initial-state` and different compilation modes, will return the
 *   cached value. See `compile-state-fn*` to avoid the cache.
 */
demo.compile.compile_state_fn = (function demo$compile$compile_state_fn(var_args){
var G__106057 = arguments.length;
switch (G__106057) {
case 3:
return demo.compile.compile_state_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return demo.compile.compile_state_fn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(demo.compile.compile_state_fn.cljs$core$IFn$_invoke$arity$3 = (function (f,params,initial_state){
return demo.compile.compile_state_fn.cljs$core$IFn$_invoke$arity$4(f,params,initial_state,cljs.core.PersistentArrayMap.EMPTY);
}));

(demo.compile.compile_state_fn.cljs$core$IFn$_invoke$arity$4 = (function (f,params,initial_state,opts){
var temp__5751__auto__ = (function (){var fexpr__106058 = cljs.core.deref(demo.compile.fn_cache);
return (fexpr__106058.cljs$core$IFn$_invoke$arity$1 ? fexpr__106058.cljs$core$IFn$_invoke$arity$1(f) : fexpr__106058.call(null,f));
})();
if(cljs.core.truth_(temp__5751__auto__)){
var cached = temp__5751__auto__;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"demo.compile",null,640,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compiled state function cache hit"], null);
}),null)),null,-1600552756,null);

return cached;
} else {
var compiled = demo.compile.compile_state_fn_STAR_.cljs$core$IFn$_invoke$arity$4(f,params,initial_state,opts);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.compile.fn_cache,cljs.core.assoc,f,compiled);

return compiled;
}
}));

(demo.compile.compile_state_fn.cljs$lang$maxFixedArity = 4);

/**
 * Returns an unevaluated source code body function that implements `body`, given
 *   some sequence `args` of argument symbols.
 * 
 *   `body` should of course make use of the symbols in `args`.
 */
demo.compile.compile__GT_source = (function demo$compile$compile__GT_source(args,body){
var body__$1 = clojure.walk.postwalk_replace(demo.compile.sym__GT_resolved_form,body);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(args)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,body__$1,null,(1),null))], 0))));
});
/**
 * Returns a natively-evaluated Clojure function that implements `body`, given
 *   some sequence `args` of argument symbols.
 * 
 *   `body` should of course make use of the symbols in `args`.
 */
demo.compile.compile_native = (function demo$compile$compile_native(args,body){
return cljs.core.eval(demo.compile.compile__GT_source(args,body));
});
/**
 * Returns a Clojure function evaluated
 *   using [SCI](https://github.com/borkdude/sci) The returned fn implements
 *   `body`, given some sequence `args` of argument symbols.
 * 
 *   `body` should of course make use of the symbols in `args`.
 */
demo.compile.compile_sci = (function demo$compile$compile_sci(args,body){
return demo.compile.sci_eval(demo.compile.compile__GT_source(args,body));
});
demo.compile.retrieve_arity = (function demo$compile$retrieve_arity(f){
var vec__106059 = sicmutils.function$.arity(f);
var kwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106059,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106059,(1),null);
var arity = vec__106059;
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
demo.compile.compile_fn_STAR_ = (function demo$compile$compile_fn_STAR_(var_args){
var G__106063 = arguments.length;
switch (G__106063) {
case 1:
return demo.compile.compile_fn_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return demo.compile.compile_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(demo.compile.compile_fn_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return demo.compile.compile_fn_STAR_.cljs$core$IFn$_invoke$arity$2(f,demo.compile.retrieve_arity(f));
}));

(demo.compile.compile_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,n){
var sw = sicmutils.util.stopwatch.stopwatch();
var args = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
}));
var body = demo.compile.apply_numeric_ops(demo.compile.cse_form.cljs$core$IFn$_invoke$arity$1(sicmutils.value.freeze(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args)))));
var compiled = (function (){var G__106064 = demo.compile.compiler_mode();
var G__106064__$1 = (((G__106064 instanceof cljs.core.Keyword))?G__106064.fqn:null);
switch (G__106064__$1) {
case "source":
return demo.compile.compile__GT_source(args,body);

break;
case "native":
return demo.compile.compile_native(args,body);

break;
case "sci":
return demo.compile.compile_sci(args,body);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__106064__$1)].join('')));

}
})();
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"demo.compile",null,716,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compiled function of arity",n,"in",sw.sicmutils$util$stopwatch$IStopwatch$repr$arity$1(null),"with mode",demo.compile._STAR_mode_STAR_], null);
}),null)),null,-179516643,null);

return compiled;
}));

(demo.compile.compile_fn_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Memoized version of [[compile-fn*]]. See that function's docs for more detail.
 * 
 *   NOTE: that this function makes use of a global compilation cache, keyed by the
 *   vector `[f n *mode*]`. See `compile-fn*` to avoid the cache.
 */
demo.compile.compile_fn = (function demo$compile$compile_fn(var_args){
var G__106066 = arguments.length;
switch (G__106066) {
case 1:
return demo.compile.compile_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return demo.compile.compile_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(demo.compile.compile_fn.cljs$core$IFn$_invoke$arity$1 = (function (f){
var vec__106067 = sicmutils.function$.arity(f);
var kwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106067,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106067,(1),null);
var arity = vec__106067;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kwd,new cljs.core.Keyword(null,"exactly","exactly",1304099233))){
} else {
sicmutils.util.illegal(["`compile-fn` can only infer arity for functions with just one\n           arity, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity),". Please pass an explicit `n`."].join(''));
}

return demo.compile.compile_fn.cljs$core$IFn$_invoke$arity$2(f,n);
}));

(demo.compile.compile_fn.cljs$core$IFn$_invoke$arity$2 = (function (f,n){
var mode = demo.compile._STAR_mode_STAR_;
var temp__5751__auto__ = (function (){var G__106071 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,n,mode], null);
var fexpr__106070 = cljs.core.deref(demo.compile.fn_cache);
return (fexpr__106070.cljs$core$IFn$_invoke$arity$1 ? fexpr__106070.cljs$core$IFn$_invoke$arity$1(G__106071) : fexpr__106070.call(null,G__106071));
})();
if(cljs.core.truth_(temp__5751__auto__)){
var cached = temp__5751__auto__;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"demo.compile",null,734,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compiled function cache hit - arity ",n,", mode ",mode], null);
}),null)),null,635169146,null);

return cached;
} else {
var _STAR_mode_STAR__orig_val__106072 = demo.compile._STAR_mode_STAR_;
var _STAR_mode_STAR__temp_val__106073 = mode;
(demo.compile._STAR_mode_STAR_ = _STAR_mode_STAR__temp_val__106073);

try{var compiled = demo.compile.compile_fn_STAR_.cljs$core$IFn$_invoke$arity$2(f,n);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.compile.fn_cache,cljs.core.assoc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,n,mode], null),compiled);

return compiled;
}finally {(demo.compile._STAR_mode_STAR_ = _STAR_mode_STAR__orig_val__106072);
}}
}));

(demo.compile.compile_fn.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=demo.compile.js.map
