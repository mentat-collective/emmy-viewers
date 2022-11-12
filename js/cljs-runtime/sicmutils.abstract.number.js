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
var newexp = (function (){var G__87035 = sicmutils.expression.expression_of(a);
return (op.cljs$core$IFn$_invoke$arity$1 ? op.cljs$core$IFn$_invoke$arity$1(G__87035) : op.call(null,G__87035));
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
var seq__87044 = cljs.core.seq(pairs);
var chunk__87045 = null;
var count__87046 = (0);
var i__87047 = (0);
while(true){
if((i__87047 < count__87046)){
var vec__87067 = chunk__87045.cljs$core$IIndexed$_nth$arity$2(null,i__87047);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87067,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87067,(1),null);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r], null),((function (seq__87044,chunk__87045,count__87046,i__87047,vec__87067,l,r,op,temp__5751__auto__,pairs){
return (function (a,b){
var newexp = (function (){var G__87070 = sicmutils.expression.expression_of(a);
var G__87071 = sicmutils.expression.expression_of(b);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__87070,G__87071) : op.call(null,G__87070,G__87071));
})();
return sicmutils.abstract$.number.literal_number((function (){var temp__5751__auto____$1 = sicmutils.numsymb._STAR_incremental_simplifier_STAR_;
if(cljs.core.truth_(temp__5751__auto____$1)){
var simplify = temp__5751__auto____$1;
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(newexp) : simplify.call(null,newexp));
} else {
return newexp;
}
})());
});})(seq__87044,chunk__87045,count__87046,i__87047,vec__87067,l,r,op,temp__5751__auto__,pairs))
);


var G__87129 = seq__87044;
var G__87130 = chunk__87045;
var G__87131 = count__87046;
var G__87132 = (i__87047 + (1));
seq__87044 = G__87129;
chunk__87045 = G__87130;
count__87046 = G__87131;
i__87047 = G__87132;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__87044);
if(temp__5753__auto__){
var seq__87044__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__87044__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__87044__$1);
var G__87133 = cljs.core.chunk_rest(seq__87044__$1);
var G__87134 = c__4679__auto__;
var G__87135 = cljs.core.count(c__4679__auto__);
var G__87136 = (0);
seq__87044 = G__87133;
chunk__87045 = G__87134;
count__87046 = G__87135;
i__87047 = G__87136;
continue;
} else {
var vec__87076 = cljs.core.first(seq__87044__$1);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87076,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87076,(1),null);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r], null),((function (seq__87044,chunk__87045,count__87046,i__87047,vec__87076,l,r,seq__87044__$1,temp__5753__auto__,op,temp__5751__auto__,pairs){
return (function (a,b){
var newexp = (function (){var G__87079 = sicmutils.expression.expression_of(a);
var G__87080 = sicmutils.expression.expression_of(b);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__87079,G__87080) : op.call(null,G__87079,G__87080));
})();
return sicmutils.abstract$.number.literal_number((function (){var temp__5751__auto____$1 = sicmutils.numsymb._STAR_incremental_simplifier_STAR_;
if(cljs.core.truth_(temp__5751__auto____$1)){
var simplify = temp__5751__auto____$1;
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(newexp) : simplify.call(null,newexp));
} else {
return newexp;
}
})());
});})(seq__87044,chunk__87045,count__87046,i__87047,vec__87076,l,r,seq__87044__$1,temp__5753__auto__,op,temp__5751__auto__,pairs))
);


var G__87141 = cljs.core.next(seq__87044__$1);
var G__87142 = null;
var G__87143 = (0);
var G__87144 = (0);
seq__87044 = G__87141;
chunk__87045 = G__87142;
count__87046 = G__87143;
i__87047 = G__87144;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var seq__87081 = cljs.core.seq(pairs);
var chunk__87082 = null;
var count__87083 = (0);
var i__87084 = (0);
while(true){
if((i__87084 < count__87083)){
var vec__87104 = chunk__87082.cljs$core$IIndexed$_nth$arity$2(null,i__87084);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87104,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87104,(1),null);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r], null),((function (seq__87081,chunk__87082,count__87083,i__87084,vec__87104,l,r,temp__5751__auto__,pairs){
return (function (a,b){
return sicmutils.expression.literal_apply(new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481),op_sym,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
});})(seq__87081,chunk__87082,count__87083,i__87084,vec__87104,l,r,temp__5751__auto__,pairs))
);


var G__87145 = seq__87081;
var G__87146 = chunk__87082;
var G__87147 = count__87083;
var G__87148 = (i__87084 + (1));
seq__87081 = G__87145;
chunk__87082 = G__87146;
count__87083 = G__87147;
i__87084 = G__87148;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__87081);
if(temp__5753__auto__){
var seq__87081__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__87081__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__87081__$1);
var G__87149 = cljs.core.chunk_rest(seq__87081__$1);
var G__87150 = c__4679__auto__;
var G__87151 = cljs.core.count(c__4679__auto__);
var G__87152 = (0);
seq__87081 = G__87149;
chunk__87082 = G__87150;
count__87083 = G__87151;
i__87084 = G__87152;
continue;
} else {
var vec__87110 = cljs.core.first(seq__87081__$1);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87110,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87110,(1),null);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r], null),((function (seq__87081,chunk__87082,count__87083,i__87084,vec__87110,l,r,seq__87081__$1,temp__5753__auto__,temp__5751__auto__,pairs){
return (function (a,b){
return sicmutils.expression.literal_apply(new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481),op_sym,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
});})(seq__87081,chunk__87082,count__87083,i__87084,vec__87110,l,r,seq__87081__$1,temp__5753__auto__,temp__5751__auto__,pairs))
);


var G__87153 = cljs.core.next(seq__87081__$1);
var G__87154 = null;
var G__87155 = (0);
var G__87156 = (0);
seq__87081 = G__87153;
chunk__87082 = G__87154;
count__87083 = G__87155;
i__87084 = G__87156;
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
var log_87158 = sicmutils.numsymb.symbolic_operator(new cljs.core.Symbol(null,"log","log",45015523,null));
var div_87159 = sicmutils.numsymb.symbolic_operator(new cljs.core.Symbol(null,"/","/",-1371932971,null));
sicmutils.generic.log2.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481)], null),(function (a){
var a__$1 = sicmutils.expression.expression_of(a);
return sicmutils.abstract$.number.literal_number((function (){var G__87119 = (log_87158.cljs$core$IFn$_invoke$arity$1 ? log_87158.cljs$core$IFn$_invoke$arity$1(a__$1) : log_87158.call(null,a__$1));
var G__87120 = (log_87158.cljs$core$IFn$_invoke$arity$1 ? log_87158.cljs$core$IFn$_invoke$arity$1((2)) : log_87158.call(null,(2)));
return (div_87159.cljs$core$IFn$_invoke$arity$2 ? div_87159.cljs$core$IFn$_invoke$arity$2(G__87119,G__87120) : div_87159.call(null,G__87119,G__87120));
})());
}));

sicmutils.generic.log10.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481)], null),(function (a){
var a__$1 = sicmutils.expression.expression_of(a);
return sicmutils.abstract$.number.literal_number((function (){var G__87121 = (log_87158.cljs$core$IFn$_invoke$arity$1 ? log_87158.cljs$core$IFn$_invoke$arity$1(a__$1) : log_87158.call(null,a__$1));
var G__87122 = (log_87158.cljs$core$IFn$_invoke$arity$1 ? log_87158.cljs$core$IFn$_invoke$arity$1((10)) : log_87158.call(null,(10)));
return (div_87159.cljs$core$IFn$_invoke$arity$2 ? div_87159.cljs$core$IFn$_invoke$arity$2(G__87121,G__87122) : div_87159.call(null,G__87121,G__87122));
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
