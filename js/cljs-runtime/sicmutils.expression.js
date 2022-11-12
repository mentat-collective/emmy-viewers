goog.provide('sicmutils.expression');
/**
 * These keywords reference 'abstract' types that stand in for some
 *   concrete data type in the system.
 */
sicmutils.expression.abstract_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sicmutils.expression","abstract-matrix","sicmutils.expression/abstract-matrix",1224257604),null,new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481),null,new cljs.core.Keyword("sicmutils.expression","vector","sicmutils.expression/vector",268062681),null,new cljs.core.Keyword("sicmutils.expression","abstract-down","sicmutils.expression/abstract-down",2129097790),null], null), null);

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {sicmutils.value.Value}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.IWithMeta}
 * @implements {sicmutils.value.Numerical}
*/
sicmutils.expression.Literal = (function (type,expression,m){
this.type = type;
this.expression = expression;
this.m = m;
this.cljs$lang$protocol_mask$partition0$ = 2149974016;
this.cljs$lang$protocol_mask$partition1$ = 2048;
});
(sicmutils.expression.Literal.prototype.sicmutils$value$Numerical$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.expression.Literal.prototype.sicmutils$value$Numerical$numerical_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,new cljs.core.Keyword("sicmutils.expression","numeric","sicmutils.expression/numeric",-2006846481));
}));

(sicmutils.expression.Literal.prototype.sicmutils$value$Value$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.expression.Literal.prototype.sicmutils$value$Value$zero_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (0);
}));

(sicmutils.expression.Literal.prototype.sicmutils$value$Value$identity_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((sicmutils.value.number_QMARK_(self__.expression)) && (sicmutils.value.one_QMARK_(self__.expression)));
}));

(sicmutils.expression.Literal.prototype.sicmutils$value$Value$freeze$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sicmutils.value.freeze(self__.expression);
}));

(sicmutils.expression.Literal.prototype.sicmutils$value$Value$zero_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((sicmutils.value.number_QMARK_(self__.expression)) && (sicmutils.value.zero_QMARK_(self__.expression)));
}));

(sicmutils.expression.Literal.prototype.sicmutils$value$Value$one_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((sicmutils.value.number_QMARK_(self__.expression)) && (sicmutils.value.one_QMARK_(self__.expression)));
}));

(sicmutils.expression.Literal.prototype.sicmutils$value$Value$exact_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((sicmutils.value.number_QMARK_(self__.expression)) && (sicmutils.value.exact_QMARK_(self__.expression)));
}));

(sicmutils.expression.Literal.prototype.sicmutils$value$Value$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.type;
}));

(sicmutils.expression.Literal.prototype.sicmutils$value$Value$identity_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (1);
}));

(sicmutils.expression.Literal.prototype.sicmutils$value$Value$one_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (1);
}));

(sicmutils.expression.Literal.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.expression], 0));
}));

(sicmutils.expression.Literal.prototype.valueOf = (function (){
var self__ = this;
var this$ = this;
if(typeof self__.expression === 'number'){
return self__.expression;
} else {
if(sicmutils.value.number_QMARK_(self__.expression)){
return self__.expression.valueOf();
} else {
return this$;

}
}
}));

(sicmutils.expression.Literal.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(sicmutils.expression.Literal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,meta){
var self__ = this;
var ___$1 = this;
return (new sicmutils.expression.Literal(self__.type,self__.expression,meta));
}));

(sicmutils.expression.Literal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,b){
var self__ = this;
var ___$1 = this;
if((b instanceof sicmutils.expression.Literal)){
var b__$1 = b;
var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,b__$1.type);
if(and__4251__auto__){
var and__4251__auto____$1 = sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(self__.expression,b__$1.expression);
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.m,b__$1.m);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
} else {
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(self__.expression,b);
}
}));

(sicmutils.expression.Literal.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,b){
var self__ = this;
var ___$1 = this;
if((b instanceof sicmutils.expression.Literal)){
return cljs.core._compare(self__.expression,b.expression);
} else {
return cljs.core._compare(self__.expression,b);
}
}));

(sicmutils.expression.Literal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){
var self__ = this;
var ___$2 = this;
return cljs.core._write(writer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.expression));
}));

(sicmutils.expression.Literal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"expression","expression",1842843403,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null);
}));

(sicmutils.expression.Literal.cljs$lang$type = true);

(sicmutils.expression.Literal.cljs$lang$ctorStr = "sicmutils.expression/Literal");

(sicmutils.expression.Literal.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"sicmutils.expression/Literal");
}));

/**
 * Positional factory function for sicmutils.expression/Literal.
 */
sicmutils.expression.__GT_Literal = (function sicmutils$expression$__GT_Literal(type,expression,m){
return (new sicmutils.expression.Literal(type,expression,m));
});

/**
 * Constructs a [[Literal]] instance with the supplied type and an empty metadata
 *   map out of the literal form `expr`.
 */
sicmutils.expression.make_literal = (function sicmutils$expression$make_literal(type,expr){
return sicmutils.expression.__GT_Literal(type,expr,null);
});
/**
 * Similar to [[make-literal]], but accepts:
 * 
 *   - some operation
 *   - the arguments to which it applies
 * 
 *   Similar to `clojure.core/apply`.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (literal-apply ::numeric 'cos [1 2 3])
 *   ;;=> (cos 1 2 3)
 *   ```
 */
sicmutils.expression.literal_apply = (function sicmutils$expression$literal_apply(type,op,args){
return sicmutils.expression.make_literal(type,cljs.core.cons(op,cljs.core.seq(args)));
});
/**
 * Returns true if `x` is a [[Literal]] instance, false otherwise.
 */
sicmutils.expression.literal_QMARK_ = (function sicmutils$expression$literal_QMARK_(x){
return (x instanceof sicmutils.expression.Literal);
});
/**
 * Returns true if `x` is both a [[Literal]] and has a type specified
 *   in [[abstract-types]], false otherwise.
 */
sicmutils.expression.abstract_QMARK_ = (function sicmutils$expression$abstract_QMARK_(x){
return ((sicmutils.expression.literal_QMARK_(x)) && (cljs.core.contains_QMARK_(sicmutils.expression.abstract_types,x.type)));
});
/**
 * If `x` is a [[Literal]] instance, returns its type. Else, returns nil.
 */
sicmutils.expression.literal_type = (function sicmutils$expression$literal_type(x){
if(sicmutils.expression.literal_QMARK_(x)){
return x.type;
} else {
return null;
}
});
/**
 * Returns a [[Literal]] generated by applying `f` to the expression part of
 *   `e`.
 * 
 *   [[literal-type]] and [[meta]] will return the same thing for `e` and the
 *   return value.
 */
sicmutils.expression.fmap = (function sicmutils$expression$fmap(f,e){
return sicmutils.expression.__GT_Literal(e.type,(function (){var G__77918 = e.expression;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__77918) : f.call(null,G__77918));
})(),e.m);
});
/**
 * If the supplied argument is a [[Literal]] (or a symbol, interpreted elsewhere
 *   as a numerical literal expression), returns the wrapped expression (or the
 *   symbol).
 * 
 *   Else, returns `expr`.
 */
sicmutils.expression.expression_of = (function sicmutils$expression$expression_of(expr){
if(sicmutils.expression.literal_QMARK_(expr)){
return expr.expression;
} else {
return expr;
}
});
/**
 * Return the set of 'variables' (e.g. symbols) found in `expr`.
 * 
 *   `expr` is either a symbol, a [[Literal]] instance or some sequence
 *   representing a symbolic expression.
 */
sicmutils.expression.variables_in = (function sicmutils$expression$variables_in(expr){
while(true){
if((expr instanceof cljs.core.Symbol)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([expr]);
} else {
if(sicmutils.expression.literal_QMARK_(expr)){
var G__77979 = sicmutils.expression.expression_of(expr);
expr = G__77979;
continue;
} else {
var xs = cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,expr));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),xs);

}
}
break;
}
});
/**
 * Walk the unwrapped expression `expr` in postorder, replacing symbols found
 *   there with their values in the `sym->var` mapping, if present.
 * 
 *   `sym->f` is used for elements in function application position (first of a
 *   sequence).
 */
sicmutils.expression.evaluate = (function sicmutils$expression$evaluate(expr,sym__GT_var,sym__GT_f){
var walk = (function sicmutils$expression$evaluate_$_walk(node){
if((node instanceof cljs.core.Symbol)){
return (sym__GT_var.cljs$core$IFn$_invoke$arity$2 ? sym__GT_var.cljs$core$IFn$_invoke$arity$2(node,node) : sym__GT_var.call(null,node,node));
} else {
if(cljs.core.sequential_QMARK_(node)){
var vec__77928 = node;
var seq__77929 = cljs.core.seq(vec__77928);
var first__77930 = cljs.core.first(seq__77929);
var seq__77929__$1 = cljs.core.next(seq__77929);
var f_sym = first__77930;
var args = seq__77929__$1;
var temp__5751__auto__ = (sym__GT_f.cljs$core$IFn$_invoke$arity$1 ? sym__GT_f.cljs$core$IFn$_invoke$arity$1(f_sym) : sym__GT_f.call(null,f_sym));
if(cljs.core.truth_(temp__5751__auto__)){
var f = temp__5751__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sicmutils$expression$evaluate_$_walk,args));
} else {
return sicmutils.util.illegal(["Missing fn for symbol - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_sym)].join(''));
}
} else {
return node;

}
}
});
return walk(sicmutils.expression.expression_of(expr));
});
/**
 * Returns a form similar to `expr`, with all instances of `old` replaced by
 *   `new`. Substitution occurs
 *   in [postwalk](https://clojuredocs.org/clojure.walk/postwalk) order.
 * 
 *   NOTE that this now works for expressions too.
 */
sicmutils.expression.substitute = (function sicmutils$expression$substitute(var_args){
var G__77935 = arguments.length;
switch (G__77935) {
case 3:
return sicmutils.expression.substitute.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return sicmutils.expression.substitute.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.expression.substitute.cljs$core$IFn$_invoke$arity$3 = (function (expr,old,new$){
return sicmutils.expression.substitute.cljs$core$IFn$_invoke$arity$2(expr,cljs.core.PersistentArrayMap.createAsIfByAssoc([old,new$]));
}));

(sicmutils.expression.substitute.cljs$core$IFn$_invoke$arity$2 = (function (expr,s_map){
if(sicmutils.expression.literal_QMARK_(expr)){
return sicmutils.expression.fmap((function (p1__77933_SHARP_){
return sicmutils.expression.substitute.cljs$core$IFn$_invoke$arity$2(p1__77933_SHARP_,s_map);
}),expr);
} else {
return clojure.walk.postwalk_replace(s_map,expr);
}
}));

(sicmutils.expression.substitute.cljs$lang$maxFixedArity = 3);

/**
 * Comparator for expressions. The rule is that types have the following ordering:
 * 
 *   - empty sequence is < anything (except another empty seq)
 *   - real < symbol < string < sequence
 *   - sequences compare element-by-element
 * 
 *   Any types _not_ in this list compare with the other type using hashes.
 */
sicmutils.expression.compare = (function sicmutils$expression$compare(l,r){
while(true){
var lseq_QMARK_ = cljs.core.sequential_QMARK_(l);
var rseq_QMARK_ = cljs.core.sequential_QMARK_(r);
var rsym_QMARK_ = (r instanceof cljs.core.Symbol);
var rstr_QMARK_ = typeof r === 'string';
var l_empty_QMARK_ = ((lseq_QMARK_) && (cljs.core.empty_QMARK_(l)));
var r_empty_QMARK_ = ((rseq_QMARK_) && (cljs.core.empty_QMARK_(r)));
var raw_comp = (new cljs.core.Delay(((function (l,r,lseq_QMARK_,rseq_QMARK_,rsym_QMARK_,rstr_QMARK_,l_empty_QMARK_,r_empty_QMARK_){
return (function (){
return cljs.core.compare(cljs.core.hash(l),cljs.core.hash(r));
});})(l,r,lseq_QMARK_,rseq_QMARK_,rsym_QMARK_,rstr_QMARK_,l_empty_QMARK_,r_empty_QMARK_))
,null));
if(((l_empty_QMARK_) && (r_empty_QMARK_))){
return (0);
} else {
if(l_empty_QMARK_){
return (-1);
} else {
if(r_empty_QMARK_){
return (1);
} else {
if(sicmutils.value.real_QMARK_(l)){
if(sicmutils.value.real_QMARK_(r)){
return cljs.core.compare(l,r);
} else {
if(((rsym_QMARK_) || (((rstr_QMARK_) || (rseq_QMARK_))))){
return (-1);
} else {
return cljs.core.deref(raw_comp);

}
}
} else {
if(sicmutils.value.real_QMARK_(r)){
return (1);
} else {
if((l instanceof cljs.core.Symbol)){
if(rsym_QMARK_){
return cljs.core.compare(l,r);
} else {
if(((rstr_QMARK_) || (rseq_QMARK_))){
return (-1);
} else {
return cljs.core.deref(raw_comp);

}
}
} else {
if(rsym_QMARK_){
return (1);
} else {
if(typeof l === 'string'){
if(rstr_QMARK_){
return cljs.core.compare(l,r);
} else {
if(rseq_QMARK_){
return (-1);
} else {
return cljs.core.deref(raw_comp);

}
}
} else {
if(rstr_QMARK_){
return (1);
} else {
if(lseq_QMARK_){
if(rseq_QMARK_){
var n1 = cljs.core.count(l);
var n2 = cljs.core.count(r);
if((n1 < n2)){
return (-1);
} else {
if((n2 < n1)){
return (1);
} else {
var head_compare = (function (){var G__77956 = cljs.core.first(l);
var G__77957 = cljs.core.first(r);
return (sicmutils.expression.compare.cljs$core$IFn$_invoke$arity$2 ? sicmutils.expression.compare.cljs$core$IFn$_invoke$arity$2(G__77956,G__77957) : sicmutils.expression.compare.call(null,G__77956,G__77957));
})();
if((head_compare === (0))){
var G__77981 = cljs.core.rest(l);
var G__77982 = cljs.core.rest(r);
l = G__77981;
r = G__77982;
continue;
} else {
return head_compare;
}

}
}
} else {
return cljs.core.deref(raw_comp);
}
} else {
if(rseq_QMARK_){
return (1);
} else {
return cljs.core.deref(raw_comp);

}
}
}
}
}
}
}
}
}
}
}
break;
}
});
sicmutils.expression.sorted_QMARK_ = (function sicmutils$expression$sorted_QMARK_(xs){
return (((!(cljs.core.sequential_QMARK_(xs)))) || (cljs.core.every_QMARK_((function (p__77958){
var vec__77959 = p__77958;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77959,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77959,(1),null);
return (sicmutils.expression.compare(l,r) <= (0));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),xs))));
});
sicmutils.expression.sort = (function sicmutils$expression$sort(xs){
if(cljs.core.sequential_QMARK_(xs)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(sicmutils.expression.compare,xs);
} else {
return xs;
}
});
/**
 * Renders an expression through the simplifier and onto the stream.
 */
sicmutils.expression.expression__GT_stream = (function sicmutils$expression$expression__GT_stream(var_args){
var G__77963 = arguments.length;
switch (G__77963) {
case 2:
return sicmutils.expression.expression__GT_stream.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.expression.expression__GT_stream.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.expression.expression__GT_stream.cljs$core$IFn$_invoke$arity$2 = (function (expr,stream){
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(expr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stream","stream",1534941648),stream], 0));
}));

(sicmutils.expression.expression__GT_stream.cljs$core$IFn$_invoke$arity$3 = (function (expr,stream,options){
var opt_seq = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"stream","stream",1534941648),stream));
var simple = sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(expr);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,simple,opt_seq);
}));

(sicmutils.expression.expression__GT_stream.cljs$lang$maxFixedArity = 3);

/**
 * Returns a string representation of a frozen, simplified version of the supplied
 *   expression `expr`.
 */
sicmutils.expression.expression__GT_string = (function sicmutils$expression$expression__GT_string(expr){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.value.freeze(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(expr))], 0));
});
sicmutils.expression.print_expression = (function sicmutils$expression$print_expression(expr){
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(sicmutils.value.freeze(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(expr)));
});
sicmutils.expression.pe = sicmutils.expression.print_expression;

//# sourceMappingURL=sicmutils.expression.js.map
