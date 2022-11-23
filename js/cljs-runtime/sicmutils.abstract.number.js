goog.provide('sicmutils.abstract$.number');
(cljs.core.Symbol.prototype.sicmutils$value$Numerical$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.sicmutils$value$Numerical$numerical_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return true;
}));

(cljs.core.Symbol.prototype.sicmutils$value$Value$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.sicmutils$value$Value$zero_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return false;
}));

(cljs.core.Symbol.prototype.sicmutils$value$Value$one_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return false;
}));

(cljs.core.Symbol.prototype.sicmutils$value$Value$identity_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return false;
}));

(cljs.core.Symbol.prototype.sicmutils$value$Value$zero_like$arity$1 = (function (_){
var ___$1 = this;
return (0);
}));

(cljs.core.Symbol.prototype.sicmutils$value$Value$one_like$arity$1 = (function (_){
var ___$1 = this;
return (1);
}));

(cljs.core.Symbol.prototype.sicmutils$value$Value$identity_like$arity$1 = (function (_){
var ___$1 = this;
return (1);
}));

(cljs.core.Symbol.prototype.sicmutils$value$Value$exact_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return false;
}));

(cljs.core.Symbol.prototype.sicmutils$value$Value$freeze$arity$1 = (function (o){
var o__$1 = this;
return o__$1;
}));

(cljs.core.Symbol.prototype.sicmutils$value$Value$kind$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.Symbol;
}));
/**
 * Returns its argument, wrapped in a marker type that responds to the generic
 *   operations registered in [[sicmutils.numsymb]].
 * 
 *   Symbols are automatically treated as [[literal-number]] instances, so
 * 
 *   ```clojure
 *   (* 10 (literal-number 'x))
 *   ```
 * 
 *   is equivalent to
 * 
 *   ```clojure
 *   (* 10 'x)
 *   ```
 * 
 *   If you pass an actual number, sicmutils will attempt to preserve exact values
 *   through various operations:
 * 
 *   ```clojure
 *   (g/+ 1 (g/cos (g/* 2 (literal-number 4))))
 *   ;;=> (+ 1 (cos 8))
 *   ```
 * 
 *   Notice that the `(g/* 2 ...)` is evaluated, but `cos` evaluation is deferred,
 *   since the result is inexact. On the other hand, if the number is inexact to
 *   begin with:
 * 
 *   ```clojure
 *   (g/+ 1 (g/cos (g/* 2 (literal-number 2.2))))
 *   ;;=> 0.6926671300215806
 *   ```
 * 
 *   the system will go ahead and evaluate it.
 */
sicmutils.abstract$.number.literal_number = (function sicmutils$abstract$number$literal_number(x){
return sicmutils.expression.make_literal(new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481),x);
});
/**
 * Returns true if `x` is an explicit symbolic expression or something passed to
 *   `literal-number`, false otherwise.
 * 
 *   See [[abstract-number?]] for a similar function that also responds true to
 *   symbols.
 */
sicmutils.abstract$.number.literal_number_QMARK_ = (function sicmutils$abstract$number$literal_number_QMARK_(x){
return ((sicmutils.expression.literal_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.expression.literal_type(x),new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481))));
});
/**
 * Returns true if `x` is:
 * 
 *   - a symbolic expression
 *   - some object wrapped by a call to [[literal-number]]
 *   - a symbol (which implicitly acts as a [[literal-number]])
 * 
 *   See [[literal-number?]] for a similar function that won't respond true to
 *   symbols, only to explicit symbolic expressions or wrapped literal numbers.
 */
sicmutils.abstract$.number.abstract_number_QMARK_ = (function sicmutils$abstract$number$abstract_number_QMARK_(x){
return ((sicmutils.abstract$.number.literal_number_QMARK_(x)) || ((x instanceof cljs.core.Symbol)));
});
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.Symbol,new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Symbol,sicmutils.value.seqtype], null),(function (_,___$1){
return false;
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.value.seqtype,cljs.core.Symbol], null),(function (_,___$1){
return false;
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Symbol,new cljs.core.Keyword("sicmutils.value","number","sicmutils.value/number",1532293650)], null),(function (_,___$1){
return false;
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","number","sicmutils.value/number",1532293650),cljs.core.Symbol], null),(function (_,___$1){
return false;
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481),sicmutils.value.seqtype], null),(function (l,r){
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.expression.expression_of(l),r);
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.value.seqtype,new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481)], null),(function (l,r){
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(l,sicmutils.expression.expression_of(r));
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481),new cljs.core.Keyword("sicmutils.value","number","sicmutils.value/number",1532293650)], null),(function (l,r){
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.expression.expression_of(l),r);
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","number","sicmutils.value/number",1532293650),new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481)], null),(function (l,r){
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(l,sicmutils.expression.expression_of(r));
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481),new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481)], null),(function (l,r){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.expression.expression_of(l),sicmutils.expression.expression_of(r));
}));
sicmutils.abstract$.number.defunary = (function sicmutils$abstract$number$defunary(generic_op,op_sym){
var temp__5751__auto__ = sicmutils.numsymb.symbolic_operator(op_sym);
if(cljs.core.truth_(temp__5751__auto__)){
var op = temp__5751__auto__;
return generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481)], null),(function (a){
var newexp = (function (){var G__100790 = sicmutils.expression.expression_of(a);
return (op.cljs$core$IFn$_invoke$arity$1 ? op.cljs$core$IFn$_invoke$arity$1(G__100790) : op.call(null,G__100790));
})();
return sicmutils.abstract$.number.literal_number((function (){var temp__5751__auto____$1 = sicmutils.numsymb._STAR_incremental_simplifier_STAR_;
if(cljs.core.truth_(temp__5751__auto____$1)){
var simplify = temp__5751__auto____$1;
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(newexp) : simplify.call(null,newexp));
} else {
return newexp;
}
})());
}));
} else {
return generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481)], null),(function (a){
return sicmutils.expression.literal_apply(new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481),op_sym,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null));
}));
}
});
sicmutils.abstract$.number.defbinary = (function sicmutils$abstract$number$defbinary(generic_op,op_sym){
var pairs = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481),new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","number","sicmutils.value/number",1532293650),new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481),new cljs.core.Keyword("sicmutils.value","number","sicmutils.value/number",1532293650)], null)], null);
var temp__5751__auto__ = sicmutils.numsymb.symbolic_operator(op_sym);
if(cljs.core.truth_(temp__5751__auto__)){
var op = temp__5751__auto__;
var seq__100791 = cljs.core.seq(pairs);
var chunk__100792 = null;
var count__100793 = (0);
var i__100794 = (0);
while(true){
if((i__100794 < count__100793)){
var vec__100807 = chunk__100792.cljs$core$IIndexed$_nth$arity$2(null,i__100794);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100807,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100807,(1),null);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r], null),((function (seq__100791,chunk__100792,count__100793,i__100794,vec__100807,l,r,op,temp__5751__auto__,pairs){
return (function (a,b){
var newexp = (function (){var G__100810 = sicmutils.expression.expression_of(a);
var G__100811 = sicmutils.expression.expression_of(b);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__100810,G__100811) : op.call(null,G__100810,G__100811));
})();
return sicmutils.abstract$.number.literal_number((function (){var temp__5751__auto____$1 = sicmutils.numsymb._STAR_incremental_simplifier_STAR_;
if(cljs.core.truth_(temp__5751__auto____$1)){
var simplify = temp__5751__auto____$1;
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(newexp) : simplify.call(null,newexp));
} else {
return newexp;
}
})());
});})(seq__100791,chunk__100792,count__100793,i__100794,vec__100807,l,r,op,temp__5751__auto__,pairs))
);


var G__100850 = seq__100791;
var G__100851 = chunk__100792;
var G__100852 = count__100793;
var G__100853 = (i__100794 + (1));
seq__100791 = G__100850;
chunk__100792 = G__100851;
count__100793 = G__100852;
i__100794 = G__100853;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__100791);
if(temp__5753__auto__){
var seq__100791__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__100791__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__100791__$1);
var G__100854 = cljs.core.chunk_rest(seq__100791__$1);
var G__100855 = c__4679__auto__;
var G__100856 = cljs.core.count(c__4679__auto__);
var G__100857 = (0);
seq__100791 = G__100854;
chunk__100792 = G__100855;
count__100793 = G__100856;
i__100794 = G__100857;
continue;
} else {
var vec__100812 = cljs.core.first(seq__100791__$1);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100812,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100812,(1),null);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r], null),((function (seq__100791,chunk__100792,count__100793,i__100794,vec__100812,l,r,seq__100791__$1,temp__5753__auto__,op,temp__5751__auto__,pairs){
return (function (a,b){
var newexp = (function (){var G__100815 = sicmutils.expression.expression_of(a);
var G__100816 = sicmutils.expression.expression_of(b);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__100815,G__100816) : op.call(null,G__100815,G__100816));
})();
return sicmutils.abstract$.number.literal_number((function (){var temp__5751__auto____$1 = sicmutils.numsymb._STAR_incremental_simplifier_STAR_;
if(cljs.core.truth_(temp__5751__auto____$1)){
var simplify = temp__5751__auto____$1;
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(newexp) : simplify.call(null,newexp));
} else {
return newexp;
}
})());
});})(seq__100791,chunk__100792,count__100793,i__100794,vec__100812,l,r,seq__100791__$1,temp__5753__auto__,op,temp__5751__auto__,pairs))
);


var G__100858 = cljs.core.next(seq__100791__$1);
var G__100859 = null;
var G__100860 = (0);
var G__100861 = (0);
seq__100791 = G__100858;
chunk__100792 = G__100859;
count__100793 = G__100860;
i__100794 = G__100861;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var seq__100817 = cljs.core.seq(pairs);
var chunk__100818 = null;
var count__100819 = (0);
var i__100820 = (0);
while(true){
if((i__100820 < count__100819)){
var vec__100831 = chunk__100818.cljs$core$IIndexed$_nth$arity$2(null,i__100820);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100831,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100831,(1),null);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r], null),((function (seq__100817,chunk__100818,count__100819,i__100820,vec__100831,l,r,temp__5751__auto__,pairs){
return (function (a,b){
return sicmutils.expression.literal_apply(new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481),op_sym,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
});})(seq__100817,chunk__100818,count__100819,i__100820,vec__100831,l,r,temp__5751__auto__,pairs))
);


var G__100863 = seq__100817;
var G__100864 = chunk__100818;
var G__100865 = count__100819;
var G__100866 = (i__100820 + (1));
seq__100817 = G__100863;
chunk__100818 = G__100864;
count__100819 = G__100865;
i__100820 = G__100866;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__100817);
if(temp__5753__auto__){
var seq__100817__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__100817__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__100817__$1);
var G__100867 = cljs.core.chunk_rest(seq__100817__$1);
var G__100868 = c__4679__auto__;
var G__100869 = cljs.core.count(c__4679__auto__);
var G__100870 = (0);
seq__100817 = G__100867;
chunk__100818 = G__100868;
count__100819 = G__100869;
i__100820 = G__100870;
continue;
} else {
var vec__100838 = cljs.core.first(seq__100817__$1);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100838,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100838,(1),null);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r], null),((function (seq__100817,chunk__100818,count__100819,i__100820,vec__100838,l,r,seq__100817__$1,temp__5753__auto__,temp__5751__auto__,pairs){
return (function (a,b){
return sicmutils.expression.literal_apply(new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481),op_sym,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
});})(seq__100817,chunk__100818,count__100819,i__100820,vec__100838,l,r,seq__100817__$1,temp__5753__auto__,temp__5751__auto__,pairs))
);


var G__100875 = cljs.core.next(seq__100817__$1);
var G__100876 = null;
var G__100877 = (0);
var G__100878 = (0);
seq__100817 = G__100875;
chunk__100818 = G__100876;
count__100819 = G__100877;
i__100820 = G__100878;
continue;
}
} else {
return null;
}
}
break;
}
}
});
sicmutils.abstract$.number.defbinary(sicmutils.generic.add,new cljs.core.Symbol(null,"+","+",-740910886,null));
sicmutils.abstract$.number.defbinary(sicmutils.generic.sub,new cljs.core.Symbol(null,"-","-",-471816912,null));
sicmutils.abstract$.number.defbinary(sicmutils.generic.mul,new cljs.core.Symbol(null,"*","*",345799209,null));
sicmutils.abstract$.number.defbinary(sicmutils.generic.div,new cljs.core.Symbol(null,"/","/",-1371932971,null));
sicmutils.abstract$.number.defbinary(sicmutils.generic.modulo,new cljs.core.Symbol(null,"modulo","modulo",725580254,null));
sicmutils.abstract$.number.defbinary(sicmutils.generic.remainder,new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null));
sicmutils.abstract$.number.defbinary(sicmutils.generic.expt,new cljs.core.Symbol(null,"expt","expt",2123850345,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.negate,new cljs.core.Symbol(null,"negate","negate",337772450,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.invert,new cljs.core.Symbol(null,"invert","invert",-1100858266,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.integer_part,new cljs.core.Symbol(null,"integer-part","integer-part",-1884537015,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.fractional_part,new cljs.core.Symbol(null,"fractional-part","fractional-part",-505422086,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.floor,new cljs.core.Symbol(null,"floor","floor",-772394748,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.ceiling,new cljs.core.Symbol(null,"ceiling","ceiling",-1593475279,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.sin,new cljs.core.Symbol(null,"sin","sin",1721439389,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.cos,new cljs.core.Symbol(null,"cos","cos",-1452677493,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.tan,new cljs.core.Symbol(null,"tan","tan",-1380825876,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.sec,new cljs.core.Symbol(null,"sec","sec",60154974,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.csc,new cljs.core.Symbol(null,"csc","csc",-427853492,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.asin,new cljs.core.Symbol(null,"asin","asin",-904130570,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.acos,new cljs.core.Symbol(null,"acos","acos",353741763,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.atan,new cljs.core.Symbol(null,"atan","atan",-1026550135,null));
sicmutils.abstract$.number.defbinary(sicmutils.generic.atan,new cljs.core.Symbol(null,"atan","atan",-1026550135,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.acot,new cljs.core.Symbol(null,"acot","acot",1103016569,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.sinh,new cljs.core.Symbol(null,"sinh","sinh",-990423302,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.cosh,new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.tanh,new cljs.core.Symbol(null,"tanh","tanh",480481797,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.coth,new cljs.core.Symbol(null,"coth","coth",1130257730,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.sech,new cljs.core.Symbol(null,"sech","sech",-1403979131,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.csch,new cljs.core.Symbol(null,"csch","csch",-1950330545,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.abs,new cljs.core.Symbol(null,"abs","abs",1394505050,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.sqrt,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.log,new cljs.core.Symbol(null,"log","log",45015523,null));
var log_100896 = sicmutils.numsymb.symbolic_operator(new cljs.core.Symbol(null,"log","log",45015523,null));
var div_100897 = sicmutils.numsymb.symbolic_operator(new cljs.core.Symbol(null,"/","/",-1371932971,null));
sicmutils.generic.log2.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481)], null),(function (a){
var a__$1 = sicmutils.expression.expression_of(a);
return sicmutils.abstract$.number.literal_number((function (){var G__100845 = (log_100896.cljs$core$IFn$_invoke$arity$1 ? log_100896.cljs$core$IFn$_invoke$arity$1(a__$1) : log_100896.call(null,a__$1));
var G__100846 = (log_100896.cljs$core$IFn$_invoke$arity$1 ? log_100896.cljs$core$IFn$_invoke$arity$1((2)) : log_100896.call(null,(2)));
return (div_100897.cljs$core$IFn$_invoke$arity$2 ? div_100897.cljs$core$IFn$_invoke$arity$2(G__100845,G__100846) : div_100897.call(null,G__100845,G__100846));
})());
}));

sicmutils.generic.log10.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481)], null),(function (a){
var a__$1 = sicmutils.expression.expression_of(a);
return sicmutils.abstract$.number.literal_number((function (){var G__100847 = (log_100896.cljs$core$IFn$_invoke$arity$1 ? log_100896.cljs$core$IFn$_invoke$arity$1(a__$1) : log_100896.call(null,a__$1));
var G__100848 = (log_100896.cljs$core$IFn$_invoke$arity$1 ? log_100896.cljs$core$IFn$_invoke$arity$1((10)) : log_100896.call(null,(10)));
return (div_100897.cljs$core$IFn$_invoke$arity$2 ? div_100897.cljs$core$IFn$_invoke$arity$2(G__100847,G__100848) : div_100897.call(null,G__100847,G__100848));
})());
}));
sicmutils.abstract$.number.defunary(sicmutils.generic.exp,new cljs.core.Symbol(null,"exp","exp",1378825265,null));
sicmutils.abstract$.number.defbinary(sicmutils.generic.make_rectangular,new cljs.core.Symbol(null,"make-rectangular","make-rectangular",-1494662174,null));
sicmutils.abstract$.number.defbinary(sicmutils.generic.make_polar,new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.real_part,new cljs.core.Symbol(null,"real-part","real-part",-2001752061,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.imag_part,new cljs.core.Symbol(null,"imag-part","imag-part",2028041294,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.magnitude,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.angle,new cljs.core.Symbol(null,"angle","angle",-1032341515,null));
sicmutils.abstract$.number.defunary(sicmutils.generic.conjugate,new cljs.core.Symbol(null,"conjugate","conjugate",-1063123193,null));
sicmutils.abstract$.number.defbinary(sicmutils.generic.dot_product,new cljs.core.Symbol(null,"dot-product","dot-product",-203055892,null));
sicmutils.abstract$.number.defbinary(sicmutils.generic.inner_product,new cljs.core.Symbol(null,"inner-product","inner-product",-1963110418,null));
sicmutils.abstract$.number.defbinary(sicmutils.generic.gcd,new cljs.core.Symbol(null,"gcd","gcd",1659909537,null));
sicmutils.abstract$.number.defbinary(sicmutils.generic.lcm,new cljs.core.Symbol(null,"lcm","lcm",-1699262564,null));
sicmutils.generic.negative_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481)], null),(function (_){
return false;
}));
sicmutils.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Symbol], null),(function (a){
return a;
}));
sicmutils.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481)], null),(function (a){
return sicmutils.abstract$.number.literal_number(sicmutils.simplify.simplify_expression(sicmutils.expression.expression_of(a)));
}));
sicmutils.abstract$.number.memoized_simplify = cljs.core.memoize(sicmutils.generic.simplify);
/**
 * This function will only simplify instances of [[expression/Literal]]; if `x` is
 *   of that type, [[simplify-numerical-expression]] acts as a memoized version
 *   of [[generic/simplify]]. Else, acts as identity.
 * 
 *   This trick is used in [[sicmutils.calculus.manifold]] to memoize
 *   simplification _only_ for non-[[differential/Differential]] types.
 */
sicmutils.abstract$.number.simplify_numerical_expression = (function sicmutils$abstract$number$simplify_numerical_expression(x){
if(sicmutils.abstract$.number.literal_number_QMARK_(x)){
return sicmutils.abstract$.number.memoized_simplify(x);
} else {
return x;
}
});

//# sourceMappingURL=sicmutils.abstract.number.js.map
