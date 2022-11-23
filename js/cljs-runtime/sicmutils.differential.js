goog.provide('sicmutils.differential');

/**
 * @interface
 */
sicmutils.differential.IPerturbed = function(){};

var sicmutils$differential$IPerturbed$perturbed_QMARK_$dyn_96593 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sicmutils.differential.perturbed_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (sicmutils.differential.perturbed_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IPerturbed.perturbed?",this$);
}
}
});
/**
 * Returns true if the supplied object has some known non-zero tangent to be
 *  extracted via [[extract-tangent]], false otherwise. (Return `false` by
 *  default if you can't detect a perturbation.)
 */
sicmutils.differential.perturbed_QMARK_ = (function sicmutils$differential$perturbed_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.sicmutils$differential$IPerturbed$perturbed_QMARK_$arity$1 == null)))))){
return this$.sicmutils$differential$IPerturbed$perturbed_QMARK_$arity$1(this$);
} else {
return sicmutils$differential$IPerturbed$perturbed_QMARK_$dyn_96593(this$);
}
});

var sicmutils$differential$IPerturbed$replace_tag$dyn_96594 = (function (this$,old_tag,new_tag){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sicmutils.differential.replace_tag[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,old_tag,new_tag) : m__4551__auto__.call(null,this$,old_tag,new_tag));
} else {
var m__4549__auto__ = (sicmutils.differential.replace_tag["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,old_tag,new_tag) : m__4549__auto__.call(null,this$,old_tag,new_tag));
} else {
throw cljs.core.missing_protocol("IPerturbed.replace-tag",this$);
}
}
});
/**
 * If `this` is perturbed, Returns a similar object with the perturbation
 *  modified by replacing any appearance of `old-tag` with `new-tag`. Else,
 *  return `this`.
 */
sicmutils.differential.replace_tag = (function sicmutils$differential$replace_tag(this$,old_tag,new_tag){
if((((!((this$ == null)))) && ((!((this$.sicmutils$differential$IPerturbed$replace_tag$arity$3 == null)))))){
return this$.sicmutils$differential$IPerturbed$replace_tag$arity$3(this$,old_tag,new_tag);
} else {
return sicmutils$differential$IPerturbed$replace_tag$dyn_96594(this$,old_tag,new_tag);
}
});

var sicmutils$differential$IPerturbed$extract_tangent$dyn_96597 = (function (this$,tag){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sicmutils.differential.extract_tangent[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,tag) : m__4551__auto__.call(null,this$,tag));
} else {
var m__4549__auto__ = (sicmutils.differential.extract_tangent["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,tag) : m__4549__auto__.call(null,this$,tag));
} else {
throw cljs.core.missing_protocol("IPerturbed.extract-tangent",this$);
}
}
});
/**
 * If `this` is perturbed, return the tangent component paired with the
 *  supplied tag. Else, returns `([[sicmutils.value/zero-like]] this)`.
 */
sicmutils.differential.extract_tangent = (function sicmutils$differential$extract_tangent(this$,tag){
if((((!((this$ == null)))) && ((!((this$.sicmutils$differential$IPerturbed$extract_tangent$arity$2 == null)))))){
return this$.sicmutils$differential$IPerturbed$extract_tangent$arity$2(this$,tag);
} else {
return sicmutils$differential$IPerturbed$extract_tangent$dyn_96597(this$,tag);
}
});

(sicmutils.differential.IPerturbed["_"] = true);

(sicmutils.differential.perturbed_QMARK_["_"] = (function (_){
return false;
}));

(sicmutils.differential.replace_tag["_"] = (function (this$,_,___$1){
return this$;
}));

(sicmutils.differential.extract_tangent["_"] = (function (this$,_){
return sicmutils.value.zero_like(this$);
}));
sicmutils.differential.tags = (function sicmutils$differential$tags(term){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(term,(0));
});
sicmutils.differential.coefficient = (function sicmutils$differential$coefficient(term){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(term,(1));
});
/**
 * Returns a [[Differential]] term with the supplied vector-set of `tags` paired
 *   with coefficient `coef`.
 * 
 *   `tags` defaults to [[uv/empty-set]]
 */
sicmutils.differential.make_term = (function sicmutils$differential$make_term(var_args){
var G__96280 = arguments.length;
switch (G__96280) {
case 1:
return sicmutils.differential.make_term.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.differential.make_term.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.differential.make_term.cljs$core$IFn$_invoke$arity$1 = (function (coef){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.util.vector_set.empty_set,coef], null);
}));

(sicmutils.differential.make_term.cljs$core$IFn$_invoke$arity$2 = (function (tags,coef){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tags,coef], null);
}));

(sicmutils.differential.make_term.cljs$lang$maxFixedArity = 2);

var next_tag_96601 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
/**
 * Returns a new, unique tag for use inside of a [[Differential]] term list.
 */
sicmutils.differential.fresh_tag = (function sicmutils$differential$fresh_tag(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(next_tag_96601,cljs.core.inc);
});
/**
 * Return true if `t` is in the tag-set of the supplied `term`, false otherwise.
 */
sicmutils.differential.tag_in_term_QMARK_ = (function sicmutils$differential$tag_in_term_QMARK_(term,t){
return sicmutils.util.vector_set.contains_QMARK_(sicmutils.differential.tags(term),t);
});
/**
 * Returns the sum of the two supplied sequences of differential terms; any terms
 *   in the result with a zero coefficient will be removed.
 * 
 *   Each input must be sequence of `[tag-set, coefficient]` pairs, sorted by
 *   `tag-set`.
 */
sicmutils.differential.terms_COLON__PLUS_ = sicmutils.util.aggregate.merge_fn(cljs.core.compare,sicmutils.generic.add,sicmutils.value.zero_QMARK_,sicmutils.differential.make_term);
/**
 * Build a term list up of pairs of tags => coefficients by grouping together and
 *   summing coefficients paired with the same term list.
 * 
 *   The result will be sorted by term list, and contain no duplicate term lists.
 */
sicmutils.differential.collect_terms = (function sicmutils$differential$collect_terms(tags__GT_coefs){
var terms = (function (){var iter__4652__auto__ = (function sicmutils$differential$collect_terms_$_iter__96286(s__96287){
return (new cljs.core.LazySeq(null,(function (){
var s__96287__$1 = s__96287;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__96287__$1);
if(temp__5753__auto__){
var s__96287__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__96287__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__96287__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__96289 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__96288 = (0);
while(true){
if((i__96288 < size__4651__auto__)){
var vec__96293 = cljs.core._nth(c__4650__auto__,i__96288);
var tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96293,(0),null);
var tags_coefs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96293,(1),null);
var c = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(sicmutils.differential.coefficient),sicmutils.generic._PLUS_,tags_coefs);
if((!(sicmutils.value.zero_QMARK_(c)))){
cljs.core.chunk_append(b__96289,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tags,c], null));

var G__96610 = (i__96288 + (1));
i__96288 = G__96610;
continue;
} else {
var G__96611 = (i__96288 + (1));
i__96288 = G__96611;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__96289),sicmutils$differential$collect_terms_$_iter__96286(cljs.core.chunk_rest(s__96287__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__96289),null);
}
} else {
var vec__96307 = cljs.core.first(s__96287__$2);
var tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96307,(0),null);
var tags_coefs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96307,(1),null);
var c = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(sicmutils.differential.coefficient),sicmutils.generic._PLUS_,tags_coefs);
if((!(sicmutils.value.zero_QMARK_(c)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tags,c], null),sicmutils$differential$collect_terms_$_iter__96286(cljs.core.rest(s__96287__$2)));
} else {
var G__96612 = cljs.core.rest(s__96287__$2);
s__96287__$1 = G__96612;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.group_by(sicmutils.differential.tags,tags__GT_coefs));
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(sicmutils.differential.tags,terms));
});
/**
 * Given some function `f` and a sequence of `terms`, returns a vector of terms
 *   with all each `c` mapped to `(f c)`. Any term where `(v/zero? (f c))` is true
 *   will be filtered out.
 */
sicmutils.differential.terms_COLON_map_coefficients = (function sicmutils$differential$terms_COLON_map_coefficients(f,terms){
var xform = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (term){
var c_SINGLEQUOTE_ = (function (){var G__96310 = sicmutils.differential.coefficient(term);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__96310) : f.call(null,G__96310));
})();
if(sicmutils.value.zero_QMARK_(c_SINGLEQUOTE_)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.differential.make_term.cljs$core$IFn$_invoke$arity$2(sicmutils.differential.tags(term),c_SINGLEQUOTE_)], null);
}
}));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,xform,terms);
});
/**
 * Multiplies a single term on the left by a vector of `terms` on the right.
 *   Returns a new vector of terms.
 */
sicmutils.differential.t_STAR_ts = (function sicmutils$differential$t_STAR_ts(p__96312,terms){
var vec__96314 = p__96312;
var tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96314,(0),null);
var coeff = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96314,(1),null);
var acc = cljs.core.PersistentVector.EMPTY;
var i = (0);
while(true){
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(terms,i,null);
if((t == null)){
return acc;
} else {
var vec__96322 = t;
var tags1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96322,(0),null);
var coeff1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96322,(1),null);
if(cljs.core.empty_QMARK_(sicmutils.util.vector_set.intersection(tags,tags1))){
var G__96618 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,sicmutils.differential.make_term.cljs$core$IFn$_invoke$arity$2(sicmutils.util.vector_set.union(tags,tags1),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(coeff,coeff1)));
var G__96619 = (i + (1));
acc = G__96618;
i = G__96619;
continue;
} else {
var G__96620 = acc;
var G__96621 = (i + (1));
acc = G__96620;
i = G__96621;
continue;
}
}
break;
}
});
/**
 * Returns a vector of non-zero [[Differential]] terms that represent the product
 *   of the differential term lists `xs` and `ys`.
 * 
 *   NOTE that this function doesn't need to call [[collect-terms]] internally
 *   because grouping is accomplished by the internal [[terms:+]] calls.
 */
sicmutils.differential.terms_COLON__STAR_ = (function sicmutils$differential$terms_COLON__STAR_(xlist,ylist){
var call = (function sicmutils$differential$terms_COLON__STAR__$_call(i){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(xlist,i,null);
if((x == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
return sicmutils.differential.terms_COLON__PLUS_(sicmutils.differential.t_STAR_ts(x,ylist),sicmutils$differential$terms_COLON__STAR__$_call((i + (1))));
}
});
return call((0));
});
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.differential","differential","sicmutils.differential/differential",-1991028525),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231));





/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {sicmutils.differential.IPerturbed}
 * @implements {sicmutils.value.Value}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IComparable}
 * @implements {sicmutils.value.Numerical}
*/
sicmutils.differential.Differential = (function (terms){
this.terms = terms;
this.cljs$lang$protocol_mask$partition0$ = 2149580800;
this.cljs$lang$protocol_mask$partition1$ = 2048;
});
(sicmutils.differential.Differential.prototype.sicmutils$value$Numerical$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.differential.Differential.prototype.sicmutils$value$Numerical$numerical_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((cljs.core.empty_QMARK_(self__.terms)) || (sicmutils.value.numerical_QMARK_(sicmutils.differential.coefficient(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.terms,(0))))));
}));

(sicmutils.differential.Differential.prototype.sicmutils$differential$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.differential.Differential.prototype.sicmutils$differential$IPerturbed$perturbed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(sicmutils.differential.Differential.prototype.sicmutils$differential$IPerturbed$replace_tag$arity$3 = (function (_,oldtag,newtag){
var self__ = this;
var ___$1 = this;
var process = (function sicmutils$differential$process(term){
var tagv = sicmutils.differential.tags(term);
if((!(sicmutils.util.vector_set.contains_QMARK_(tagv,oldtag)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [term], null);
} else {
if(sicmutils.util.vector_set.contains_QMARK_(tagv,newtag)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.differential.make_term.cljs$core$IFn$_invoke$arity$2(sicmutils.util.vector_set.conj(sicmutils.util.vector_set.disj(tagv,oldtag),newtag),sicmutils.differential.coefficient(term))], null);
}
}
});
var G__96418 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(process,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.terms], 0));
return (sicmutils.differential.from_terms.cljs$core$IFn$_invoke$arity$1 ? sicmutils.differential.from_terms.cljs$core$IFn$_invoke$arity$1(G__96418) : sicmutils.differential.from_terms.call(null,G__96418));
}));

(sicmutils.differential.Differential.prototype.sicmutils$differential$IPerturbed$extract_tangent$arity$2 = (function (_,tag){
var self__ = this;
var ___$1 = this;
var G__96420 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (term){
var tagv = sicmutils.differential.tags(term);
if(sicmutils.util.vector_set.contains_QMARK_(tagv,tag)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.differential.make_term.cljs$core$IFn$_invoke$arity$2(sicmutils.util.vector_set.disj(tagv,tag),sicmutils.differential.coefficient(term))], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.terms], 0));
return (sicmutils.differential.from_terms.cljs$core$IFn$_invoke$arity$1 ? sicmutils.differential.from_terms.cljs$core$IFn$_invoke$arity$1(G__96420) : sicmutils.differential.from_terms.call(null,G__96420));
}));

(sicmutils.differential.Differential.prototype.sicmutils$value$Value$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.differential.Differential.prototype.sicmutils$value$Value$zero_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (0);
}));

(sicmutils.differential.Differential.prototype.sicmutils$value$Value$identity_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (sicmutils.differential.one_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.differential.one_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : sicmutils.differential.one_QMARK_.call(null,this$__$1));
}));

(sicmutils.differential.Differential.prototype.sicmutils$value$Value$freeze$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var freeze_term = (function sicmutils$differential$freeze_term(term){
return sicmutils.differential.make_term.cljs$core$IFn$_invoke$arity$2(sicmutils.differential.tags(term),sicmutils.value.freeze(sicmutils.differential.coefficient(term)));
});
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"Differential","Differential",1531570371,null),null,(1),null)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(freeze_term,self__.terms)))));
}));

(sicmutils.differential.Differential.prototype.sicmutils$value$Value$zero_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.every_QMARK_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sicmutils.value.zero_QMARK_,sicmutils.differential.coefficient),self__.terms);
}));

(sicmutils.differential.Differential.prototype.sicmutils$value$Value$one_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (sicmutils.differential.one_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.differential.one_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : sicmutils.differential.one_QMARK_.call(null,this$__$1));
}));

(sicmutils.differential.Differential.prototype.sicmutils$value$Value$exact_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(sicmutils.differential.Differential.prototype.sicmutils$value$Value$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("sicmutils.differential","differential","sicmutils.differential/differential",-1991028525);
}));

(sicmutils.differential.Differential.prototype.sicmutils$value$Value$identity_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (1);
}));

(sicmutils.differential.Differential.prototype.sicmutils$value$Value$one_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (1);
}));

(sicmutils.differential.Differential.prototype.valueOf = (function (){
var self__ = this;
var this$ = this;
return (sicmutils.differential.finite_term.cljs$core$IFn$_invoke$arity$1 ? sicmutils.differential.finite_term.cljs$core$IFn$_invoke$arity$1(this$) : sicmutils.differential.finite_term.call(null,this$)).valueOf();
}));

(sicmutils.differential.Differential.prototype.toString = (function (){
var self__ = this;
var _ = this;
var term_strs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (term){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.differential.tags(term))," \u2192 ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.differential.coefficient(term)], 0))].join('');
}),self__.terms);
return ["D[",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",term_strs),"]"].join('');
}));

(sicmutils.differential.Differential.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (a,b){
var self__ = this;
var a__$1 = this;
return (sicmutils.differential.equiv.cljs$core$IFn$_invoke$arity$2 ? sicmutils.differential.equiv.cljs$core$IFn$_invoke$arity$2(a__$1,b) : sicmutils.differential.equiv.call(null,a__$1,b));
}));

(sicmutils.differential.Differential.prototype.cljs$core$IComparable$_compare$arity$2 = (function (a,b){
var self__ = this;
var a__$1 = this;
return (sicmutils.differential.compare.cljs$core$IFn$_invoke$arity$2 ? sicmutils.differential.compare.cljs$core$IFn$_invoke$arity$2(a__$1,b) : sicmutils.differential.compare.call(null,a__$1,b));
}));

(sicmutils.differential.Differential.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var self__ = this;
var x__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1.toString()], 0));
}));

(sicmutils.differential.Differential.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"terms","terms",83553549,null)], null);
}));

(sicmutils.differential.Differential.cljs$lang$type = true);

(sicmutils.differential.Differential.cljs$lang$ctorStr = "sicmutils.differential/Differential");

(sicmutils.differential.Differential.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"sicmutils.differential/Differential");
}));

/**
 * Positional factory function for sicmutils.differential/Differential.
 */
sicmutils.differential.__GT_Differential = (function sicmutils$differential$__GT_Differential(terms){
return (new sicmutils.differential.Differential(terms));
});

/**
 * Returns true if the supplied object is an instance of [[Differential]], false
 *   otherwise.
 */
sicmutils.differential.differential_QMARK_ = (function sicmutils$differential$differential_QMARK_(dx){
return (dx instanceof sicmutils.differential.Differential);
});
/**
 * Returns the `-terms` field of the supplied [[Differential]] object. Errors if
 *   any other type is supplied.
 */
sicmutils.differential.bare_terms = (function sicmutils$differential$bare_terms(dx){
if(sicmutils.differential.differential_QMARK_(dx)){
} else {
throw (new Error("Assert failed: (differential? dx)"));
}

return dx.terms;
});
/**
 * Returns a vector of terms that represent the supplied [[Differential]]; any
 *   term with a [[v/zero?]] coefficient will be filtered out before return.
 * 
 *   If you pass a non-[[Differential]], [[->terms]] will return a singleton term
 *   list (or `[]` if the argument was zero).
 */
sicmutils.differential.__GT_terms = (function sicmutils$differential$__GT_terms(dx){
if(sicmutils.differential.differential_QMARK_(dx)){
return sicmutils.differential.bare_terms(dx);
} else {
if(cljs.core.vector_QMARK_(dx)){
return dx;
} else {
if(sicmutils.value.zero_QMARK_(dx)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.differential.make_term.cljs$core$IFn$_invoke$arity$1(dx)], null);

}
}
}
});
/**
 * Returns a differential instance generated from a vector of terms. This method
 *   will do some mild cleanup, or canonicalization:
 * 
 *   - any empty term list will return 0
 *   - a singleton term list with no tags will return its coefficient
 * 
 *   NOTE this method assumes that the input is properly sorted, and contains no
 *   zero coefficients.
 */
sicmutils.differential.terms__GT_differential = (function sicmutils$differential$terms__GT_differential(terms){
if(cljs.core.vector_QMARK_(terms)){
} else {
throw (new Error("Assert failed: (vector? terms)"));
}

if(cljs.core.empty_QMARK_(terms)){
return (0);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(terms),(1))) && (cljs.core.empty_QMARK_(sicmutils.differential.tags(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,(0))))))){
return sicmutils.differential.coefficient(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,(0)));
} else {
return sicmutils.differential.__GT_Differential(terms);

}
}
});
/**
 * Accepts a sequence of terms (ie, pairs of `[tag-list, coefficient]`), and
 *   returns:
 * 
 *   - a well-formed [[Differential]] instance, if the terms resolve to a
 *  differential with non-zero infinitesimal terms
 *   - the original input otherwise
 * 
 *   Duplicate (by tag list) terms are allowed; their coefficients will be summed
 *   together and removed if they sum to zero.
 */
sicmutils.differential.from_terms = (function sicmutils$differential$from_terms(tags__GT_coefs){
return sicmutils.differential.terms__GT_differential(sicmutils.differential.collect_terms(tags__GT_coefs));
});
/**
 * Given a function `f` and [[Differential]] instance `d`, returns a
 *   new [[Differential]] generated by transforming all coefficients `c` of `d`
 *   to `(f c)`.
 * 
 *   Any term in the returned instance with a `v/zero?` coefficient
 *   will be filtered out.
 */
sicmutils.differential.map_coefficients = (function sicmutils$differential$map_coefficients(f,d){
var terms = sicmutils.differential.bare_terms(d);
return sicmutils.differential.__GT_Differential(sicmutils.differential.terms_COLON_map_coefficients(f,terms));
});
sicmutils.differential._STAR_active_tags_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Like `apply`, but conj-es `tag` onto the dynamic variable [[*active-tags*]]
 *   inside the scope of `f`.
 * 
 *   Returns the result of applying `f` to `args`.
 */
sicmutils.differential.with_active_tag = (function sicmutils$differential$with_active_tag(tag,f,args){
var _STAR_active_tags_STAR__orig_val__96439 = sicmutils.differential._STAR_active_tags_STAR_;
var _STAR_active_tags_STAR__temp_val__96440 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sicmutils.differential._STAR_active_tags_STAR_,tag);
(sicmutils.differential._STAR_active_tags_STAR_ = _STAR_active_tags_STAR__temp_val__96440);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}finally {(sicmutils.differential._STAR_active_tags_STAR_ = _STAR_active_tags_STAR__orig_val__96439);
}});
/**
 * Returns true if `tag` is an element of [[*active-tags*]] (and therefore pending
 *   for extraction by some nested derivative), false otherwise.
 */
sicmutils.differential.tag_active_QMARK_ = (function sicmutils$differential$tag_active_QMARK_(tag){
return cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tag]),cljs.core.rseq(sicmutils.differential._STAR_active_tags_STAR_)));
});
/**
 * Returns an object representing the sum of the two objects `dx` and `dy`. This
 *   works by summing the coefficients of all terms with the same list of tags.
 * 
 *  Works with non-[[Differential]] instances on either or both sides, and returns
 *   a [[Differential]] only if it contains any non-zero tangent components.
 */
sicmutils.differential.d_COLON__PLUS_ = (function sicmutils$differential$d_COLON__PLUS_(var_args){
var G__96448 = arguments.length;
switch (G__96448) {
case 0:
return sicmutils.differential.d_COLON__PLUS_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sicmutils.differential.d_COLON__PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.differential.d_COLON__PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___96642 = arguments.length;
var i__4865__auto___96643 = (0);
while(true){
if((i__4865__auto___96643 < len__4864__auto___96642)){
args_arr__4885__auto__.push((arguments[i__4865__auto___96643]));

var G__96644 = (i__4865__auto___96643 + (1));
i__4865__auto___96643 = G__96644;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return sicmutils.differential.d_COLON__PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(sicmutils.differential.d_COLON__PLUS_.cljs$core$IFn$_invoke$arity$0 = (function (){
return (0);
}));

(sicmutils.differential.d_COLON__PLUS_.cljs$core$IFn$_invoke$arity$1 = (function (dx){
return dx;
}));

(sicmutils.differential.d_COLON__PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (dx,dy){
return sicmutils.differential.terms__GT_differential(sicmutils.differential.terms_COLON__PLUS_(sicmutils.differential.__GT_terms(dx),sicmutils.differential.__GT_terms(dy)));
}));

(sicmutils.differential.d_COLON__PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (dx,dy,more){
return sicmutils.differential.terms__GT_differential(cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(sicmutils.differential.__GT_terms),sicmutils.differential.terms_COLON__PLUS_,cljs.core.cons(dx,cljs.core.cons(dy,more))));
}));

/** @this {Function} */
(sicmutils.differential.d_COLON__PLUS_.cljs$lang$applyTo = (function (seq96445){
var G__96446 = cljs.core.first(seq96445);
var seq96445__$1 = cljs.core.next(seq96445);
var G__96447 = cljs.core.first(seq96445__$1);
var seq96445__$2 = cljs.core.next(seq96445__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__96446,G__96447,seq96445__$2);
}));

(sicmutils.differential.d_COLON__PLUS_.cljs$lang$maxFixedArity = (2));

/**
 * Returns an object representing the product of the two objects `dx` and `dy`.
 * 
 *   This works by multiplying out all terms:
 * 
 *   $$(dx1 + dx2 + dx3 + ...)(dy1 + dy2 + dy3...)$$
 * 
 *   and then collecting any duplicate terms by summing their coefficients.
 * 
 *   Works with non-[[Differential]] instances on either or both sides, and returns
 *   a [[Differential]] only if it contains any non-zero tangent components.
 */
sicmutils.differential.d_COLON__STAR_ = (function sicmutils$differential$d_COLON__STAR_(var_args){
var G__96453 = arguments.length;
switch (G__96453) {
case 0:
return sicmutils.differential.d_COLON__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sicmutils.differential.d_COLON__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.differential.d_COLON__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.differential.d_COLON__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return (1);
}));

(sicmutils.differential.d_COLON__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (dx){
return dx;
}));

(sicmutils.differential.d_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 = (function (dx,dy){
return sicmutils.differential.terms__GT_differential(sicmutils.differential.terms_COLON__STAR_(sicmutils.differential.__GT_terms(dx),sicmutils.differential.__GT_terms(dy)));
}));

(sicmutils.differential.d_COLON__STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Identical to `(d:+ a) (d:* b c)`, but _slightly_ more efficient as the function
 *   is able to skip creating a [[Differential]] instance during [[d:*]] and then
 *   immediately tearing it down for [[d:+]].
 */
sicmutils.differential.d_COLON__PLUS__STAR_ = (function sicmutils$differential$d_COLON__PLUS__STAR_(a,b,c){
return sicmutils.differential.terms__GT_differential(sicmutils.differential.terms_COLON__PLUS_(sicmutils.differential.__GT_terms(a),sicmutils.differential.terms_COLON__STAR_(sicmutils.differential.__GT_terms(b),sicmutils.differential.__GT_terms(c))));
});
/**
 * Generate a new [[Differential]] object with the supplied `primal` and `tangent`
 *   components, and the supplied internal `tag` that this [[Differential]] will
 *   carry around to prevent perturbation confusion.
 * 
 *   If the `tangent` component is `0`, acts as identity on `primal`. `tangent`
 *   defaults to 1.
 * 
 *   `tag` defaults to a side-effecting call to [[fresh-tag]]; you can retrieve
 *   this unknown tag by calling [[max-order-tag]].
 */
sicmutils.differential.bundle_element = (function sicmutils$differential$bundle_element(var_args){
var G__96460 = arguments.length;
switch (G__96460) {
case 1:
return sicmutils.differential.bundle_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.differential.bundle_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.differential.bundle_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.differential.bundle_element.cljs$core$IFn$_invoke$arity$1 = (function (primal){
if(sicmutils.value.numerical_QMARK_(primal)){
} else {
throw (new Error("Assert failed: (v/numerical? primal)"));
}

return sicmutils.differential.bundle_element.cljs$core$IFn$_invoke$arity$3(primal,(1),sicmutils.differential.fresh_tag());
}));

(sicmutils.differential.bundle_element.cljs$core$IFn$_invoke$arity$2 = (function (primal,tag){
if(sicmutils.value.numerical_QMARK_(primal)){
} else {
throw (new Error("Assert failed: (v/numerical? primal)"));
}

return sicmutils.differential.bundle_element.cljs$core$IFn$_invoke$arity$3(primal,(1),tag);
}));

(sicmutils.differential.bundle_element.cljs$core$IFn$_invoke$arity$3 = (function (primal,tangent,tag){
var term = sicmutils.differential.make_term.cljs$core$IFn$_invoke$arity$2(sicmutils.util.vector_set.make(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag], null)),(1));
return sicmutils.differential.d_COLON__PLUS__STAR_(primal,tangent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [term], null));
}));

(sicmutils.differential.bundle_element.cljs$lang$maxFixedArity = 3);

/**
 * Given one or more well-formed [[Differential]] objects, returns the
 *   maximum ('highest order') tag found in the highest-order term of any of
 *   the [[Differential]] instances.
 * 
 *   If there is NO maximal tag (ie, if you provide [[Differential]] instances with
 *   no non-zero tangent parts, or all non-[[Differential]]s), returns nil.
 */
sicmutils.differential.max_order_tag = (function sicmutils$differential$max_order_tag(var_args){
var G__96470 = arguments.length;
switch (G__96470) {
case 1:
return sicmutils.differential.max_order_tag.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___96650 = arguments.length;
var i__4865__auto___96651 = (0);
while(true){
if((i__4865__auto___96651 < len__4864__auto___96650)){
args_arr__4885__auto__.push((arguments[i__4865__auto___96651]));

var G__96652 = (i__4865__auto___96651 + (1));
i__4865__auto___96651 = G__96652;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((1)),(0),null));
return sicmutils.differential.max_order_tag.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4886__auto__);

}
});

(sicmutils.differential.max_order_tag.cljs$core$IFn$_invoke$arity$1 = (function (dx){
if(sicmutils.differential.differential_QMARK_(dx)){
var last_term = cljs.core.peek(sicmutils.differential.bare_terms(dx));
var highest_tag = cljs.core.peek(sicmutils.differential.tags(last_term));
return highest_tag;
} else {
return null;
}
}));

(sicmutils.differential.max_order_tag.cljs$core$IFn$_invoke$arity$variadic = (function (dx,dxs){
var max_termv = (function sicmutils$differential$max_termv(dx__$1){
var temp__5751__auto__ = sicmutils.differential.max_order_tag.cljs$core$IFn$_invoke$arity$1(dx__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var max_order = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_order], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
var temp__5753__auto__ = cljs.core.seq(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(max_termv,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cons(dx,dxs)], 0)));
if(temp__5753__auto__){
var orders = temp__5753__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,orders);
} else {
return null;
}
}));

/** @this {Function} */
(sicmutils.differential.max_order_tag.cljs$lang$applyTo = (function (seq96468){
var G__96469 = cljs.core.first(seq96468);
var seq96468__$1 = cljs.core.next(seq96468);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__96469,seq96468__$1);
}));

(sicmutils.differential.max_order_tag.cljs$lang$maxFixedArity = (1));

/**
 * Returns a [[Differential]] containing only the terms of `dx` that do NOT
 *   contain the supplied `tag`, ie, the primal component of `dx` with respect to
 *   `tag`.
 * 
 *   If no tag is supplied, defaults to `([[max-order-tag]] dx)`.
 * 
 *   NOTE: every [[Differential]] can be factored into a dual number of the form
 * 
 *    primal + (tangent * tag)
 * 
 *   For each tag in any of its terms. [[primal-part]] returns this first piece,
 *   potentially simplified into a non-[[Differential]] if the primal part contains
 *   no other tags.
 */
sicmutils.differential.primal_part = (function sicmutils$differential$primal_part(var_args){
var G__96476 = arguments.length;
switch (G__96476) {
case 1:
return sicmutils.differential.primal_part.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.differential.primal_part.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.differential.primal_part.cljs$core$IFn$_invoke$arity$1 = (function (dx){
return sicmutils.differential.primal_part.cljs$core$IFn$_invoke$arity$2(dx,sicmutils.differential.max_order_tag.cljs$core$IFn$_invoke$arity$1(dx));
}));

(sicmutils.differential.primal_part.cljs$core$IFn$_invoke$arity$2 = (function (dx,tag){
if(sicmutils.differential.differential_QMARK_(dx)){
var sans_tag_QMARK_ = (function (p1__96474_SHARP_){
return (!(sicmutils.differential.tag_in_term_QMARK_(p1__96474_SHARP_,tag)));
});
return sicmutils.differential.terms__GT_differential(cljs.core.filterv(sans_tag_QMARK_,sicmutils.differential.bare_terms(dx)));
} else {
return dx;
}
}));

(sicmutils.differential.primal_part.cljs$lang$maxFixedArity = 2);

/**
 * Returns a [[Differential]] containing only the terms of `dx` that contain the
 *   supplied `tag`, ie, the tangent component of `dx` with respect to `tag`.
 * 
 *   If no tag is supplied, defaults to `([[max-order-tag]] dx)`.
 * 
 *   NOTE: Every [[Differential]] can be factored into a dual number of the form
 * 
 *    primal + (tangent * tag)
 * 
 *   For each tag in any of its terms. [[tangent-part]] returns a [[Differential]]
 *   representing `(tangent * tag)`, or 0 if `dx` contains no terms with the
 *   supplied `tag`.
 * 
 *   NOTE: the 2-arity case is similar to `([[extract-tangent]] dx tag)`; the only
 *   difference is that [[extract-tangent]] drops the `dx` tag from all terms in
 *   the returned value. Call [[extract-tangent]] if you want to drop `tag`.
 */
sicmutils.differential.tangent_part = (function sicmutils$differential$tangent_part(var_args){
var G__96481 = arguments.length;
switch (G__96481) {
case 1:
return sicmutils.differential.tangent_part.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.differential.tangent_part.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.differential.tangent_part.cljs$core$IFn$_invoke$arity$1 = (function (dx){
return sicmutils.differential.tangent_part.cljs$core$IFn$_invoke$arity$2(dx,sicmutils.differential.max_order_tag.cljs$core$IFn$_invoke$arity$1(dx));
}));

(sicmutils.differential.tangent_part.cljs$core$IFn$_invoke$arity$2 = (function (dx,tag){
if(sicmutils.differential.differential_QMARK_(dx)){
return sicmutils.differential.terms__GT_differential(cljs.core.filterv((function (p1__96477_SHARP_){
return sicmutils.differential.tag_in_term_QMARK_(p1__96477_SHARP_,tag);
}),sicmutils.differential.bare_terms(dx)));
} else {
return (0);
}
}));

(sicmutils.differential.tangent_part.cljs$lang$maxFixedArity = 2);

/**
 * Returns a pair of the primal and tangent components of the supplied `dx`, with
 *   respect to the supplied `tag`. See the docs for [[primal-part]]
 *   and [[tangent-part]] for more details.
 * 
 *   [[primal-tangent-pair]] is equivalent to
 * 
 *   `[([[primal-part]] dx tag) ([[tangent-part]] dx tag)]`
 * 
 *   but slightly more efficient if you need both.
 */
sicmutils.differential.primal_tangent_pair = (function sicmutils$differential$primal_tangent_pair(var_args){
var G__96486 = arguments.length;
switch (G__96486) {
case 1:
return sicmutils.differential.primal_tangent_pair.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.differential.primal_tangent_pair.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.differential.primal_tangent_pair.cljs$core$IFn$_invoke$arity$1 = (function (dx){
return sicmutils.differential.primal_tangent_pair.cljs$core$IFn$_invoke$arity$2(dx,sicmutils.differential.max_order_tag.cljs$core$IFn$_invoke$arity$1(dx));
}));

(sicmutils.differential.primal_tangent_pair.cljs$core$IFn$_invoke$arity$2 = (function (dx,tag){
if((!(sicmutils.differential.differential_QMARK_(dx)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,(0)], null);
} else {
var vec__96487 = sicmutils.util.stream.separatev((function (p1__96483_SHARP_){
return sicmutils.differential.tag_in_term_QMARK_(p1__96483_SHARP_,tag);
}),sicmutils.differential.bare_terms(dx));
var tangent_terms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96487,(0),null);
var primal_terms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96487,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.differential.terms__GT_differential(primal_terms),sicmutils.differential.terms__GT_differential(tangent_terms)], null);
}
}));

(sicmutils.differential.primal_tangent_pair.cljs$lang$maxFixedArity = 2);

/**
 * Returns the term of the supplied [[Differential]] `dx` that has no tags
 *   attached to it, `0` otherwise.
 * 
 *   [[Differential]] instances with many can be decomposed many times
 *   into [[primal-part]] and [[tangent-part]]. Repeated calls
 *   to [[primal-part]] (with different tags!) will eventually yield a
 *   non-[[Differential]] value. If you know you want this, [[finite-term]] will
 *   get you there in one shot.
 * 
 *   NOTE that this will only work with a well-formed [[Differential]], ie, an
 *   instance with all terms sorted by their list of tags.
 */
sicmutils.differential.finite_term = (function sicmutils$differential$finite_term(dx){
if(sicmutils.differential.differential_QMARK_(dx)){
var vec__96499 = sicmutils.differential.bare_terms(dx);
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96499,(0),null);
var ts = sicmutils.differential.tags(head);
if(cljs.core.empty_QMARK_(ts)){
return sicmutils.differential.coefficient(head);
} else {
return (0);
}
} else {
return dx;
}
});
/**
 * Returns true if the supplied instance has a [[finite-part]] that responds true
 *   to [[sicmutils.value/one?]], and zero coefficients on any of its tangent
 *   components; false otherwise.
 * 
 *   NOTE: This means that [[one?]] will not do what you expect as a conditional
 *   inside some function. If you want to branch inside some function you're taking
 *   the derivative of, prefer `(= 1 dx)`. This will only look at
 *   the [[finite-part]] and ignore the values of the tangent parts.
 */
sicmutils.differential.one_QMARK_ = (function sicmutils$differential$one_QMARK_(dx){
var vec__96506 = sicmutils.differential.primal_tangent_pair.cljs$core$IFn$_invoke$arity$1(dx);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96506,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96506,(1),null);
return ((sicmutils.value.one_QMARK_(p)) && (sicmutils.value.zero_QMARK_(t)));
});
/**
 * For non-differentials, this is identical to [[clojure.core/=]].
 *   For [[Differential]] instances, equality acts on tangent components too.
 * 
 *   If you want to ignore the tangent components, use [[equiv]].
 */
sicmutils.differential.eq = (function sicmutils$differential$eq(var_args){
var G__96513 = arguments.length;
switch (G__96513) {
case 1:
return sicmutils.differential.eq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.differential.eq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___96675 = arguments.length;
var i__4865__auto___96676 = (0);
while(true){
if((i__4865__auto___96676 < len__4864__auto___96675)){
args_arr__4885__auto__.push((arguments[i__4865__auto___96676]));

var G__96677 = (i__4865__auto___96676 + (1));
i__4865__auto___96676 = G__96677;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return sicmutils.differential.eq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(sicmutils.differential.eq.cljs$core$IFn$_invoke$arity$1 = (function (_){
return true;
}));

(sicmutils.differential.eq.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.differential.__GT_terms(a),sicmutils.differential.__GT_terms(b));
}));

(sicmutils.differential.eq.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
while(true){
if(cljs.core.truth_(sicmutils.differential.eq.cljs$core$IFn$_invoke$arity$2(a,b))){
if(cljs.core.next(more)){
var G__96678 = b;
var G__96679 = cljs.core.first(more);
var G__96680 = cljs.core.next(more);
a = G__96678;
b = G__96679;
more = G__96680;
continue;
} else {
return sicmutils.differential.eq.cljs$core$IFn$_invoke$arity$2(b,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(sicmutils.differential.eq.cljs$lang$applyTo = (function (seq96510){
var G__96511 = cljs.core.first(seq96510);
var seq96510__$1 = cljs.core.next(seq96510);
var G__96512 = cljs.core.first(seq96510__$1);
var seq96510__$2 = cljs.core.next(seq96510__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__96511,G__96512,seq96510__$2);
}));

(sicmutils.differential.eq.cljs$lang$maxFixedArity = (2));

/**
 * Comparator that compares [[Differential]] instances with each other or
 *   non-differentials using all tangent terms each instance. Matches the response
 *   of [[eq]].
 * 
 *   Acts as [[clojure.core/compare]] for non-differentials.
 */
sicmutils.differential.compare_full = (function sicmutils$differential$compare_full(a,b){
return sicmutils.value.compare(sicmutils.differential.__GT_terms(a),sicmutils.differential.__GT_terms(b));
});
/**
 * Returns true if all of the supplied objects have equal [[finite-part]]s, false
 *   otherwise.
 * 
 *   Use [[equiv]] if you want to compare non-differentials with
 *   [[Differential]]s and ignore all tangent components. If you _do_ want to take
 *   the tangent components into account, prefer [[eq]].
 */
sicmutils.differential.equiv = (function sicmutils$differential$equiv(var_args){
var G__96523 = arguments.length;
switch (G__96523) {
case 1:
return sicmutils.differential.equiv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.differential.equiv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___96685 = arguments.length;
var i__4865__auto___96686 = (0);
while(true){
if((i__4865__auto___96686 < len__4864__auto___96685)){
args_arr__4885__auto__.push((arguments[i__4865__auto___96686]));

var G__96687 = (i__4865__auto___96686 + (1));
i__4865__auto___96686 = G__96687;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return sicmutils.differential.equiv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(sicmutils.differential.equiv.cljs$core$IFn$_invoke$arity$1 = (function (_){
return true;
}));

(sicmutils.differential.equiv.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.differential.finite_term(a),sicmutils.differential.finite_term(b));
}));

(sicmutils.differential.equiv.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
while(true){
if(cljs.core.truth_(sicmutils.differential.equiv.cljs$core$IFn$_invoke$arity$2(a,b))){
if(cljs.core.next(more)){
var G__96690 = b;
var G__96691 = cljs.core.first(more);
var G__96692 = cljs.core.next(more);
a = G__96690;
b = G__96691;
more = G__96692;
continue;
} else {
return sicmutils.differential.equiv.cljs$core$IFn$_invoke$arity$2(b,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(sicmutils.differential.equiv.cljs$lang$applyTo = (function (seq96519){
var G__96520 = cljs.core.first(seq96519);
var seq96519__$1 = cljs.core.next(seq96519);
var G__96521 = cljs.core.first(seq96519__$1);
var seq96519__$2 = cljs.core.next(seq96519__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__96520,G__96521,seq96519__$2);
}));

(sicmutils.differential.equiv.cljs$lang$maxFixedArity = (2));

/**
 * Comparator that compares [[Differential]] instances with each other or
 *   non-differentials using only the [[finite-part]] of each instance. Matches the
 *   response of [[equiv]].
 * 
 *   Acts as [[clojure.core/compare]] for non-differentials.
 */
sicmutils.differential.compare = (function sicmutils$differential$compare(a,b){
return sicmutils.value.compare(sicmutils.differential.finite_term(a),sicmutils.differential.finite_term(b));
});
/**
 * Given:
 * 
 *   - some unary function `f`
 *   - a function `df:dx` that computes the derivative of `f` with respect to its
 *  single argument
 * 
 *   Returns a new unary function that operates on both the original type of `f`
 *   and [[Differential]] instances.
 * 
 *   If called without `df:dx`, `df:dx` defaults to `(f :dfdx)`; this will return
 *   the derivative registered to a generic function defined with [[g/defgeneric]].
 * 
 *   NOTE: `df:dx` has to ALREADY be able to handle [[Differential]] instances. The
 *   best way to accomplish this is by building `df:dx` out of already-lifted
 *   functions, and declaring them by forward reference if you need to.
 */
sicmutils.differential.lift_1 = (function sicmutils$differential$lift_1(var_args){
var G__96531 = arguments.length;
switch (G__96531) {
case 1:
return sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1 = (function (f){
var temp__5751__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512)) : f.call(null,new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512)));
if(cljs.core.truth_(temp__5751__auto__)){
var df_COLON_dx = temp__5751__auto__;
return sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$2(f,df_COLON_dx);
} else {
return sicmutils.util.illegal("No df:dx supplied for `f` or registered generically.");
}
}));

(sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$2 = (function (f,df_COLON_dx){
return (function sicmutils$differential$call(x){
if((!(sicmutils.differential.differential_QMARK_(x)))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
} else {
var vec__96534 = sicmutils.differential.primal_tangent_pair.cljs$core$IFn$_invoke$arity$1(x);
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96534,(0),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96534,(1),null);
var fx = sicmutils$differential$call(px);
if(sicmutils.value.numeric_zero_QMARK_(tx)){
return fx;
} else {
return sicmutils.differential.d_COLON__PLUS__STAR_(fx,(df_COLON_dx.cljs$core$IFn$_invoke$arity$1 ? df_COLON_dx.cljs$core$IFn$_invoke$arity$1(px) : df_COLON_dx.call(null,px)),tx);
}
}
});
}));

(sicmutils.differential.lift_1.cljs$lang$maxFixedArity = 2);

/**
 * Given:
 * 
 *   - some binary function `f`
 *   - a function `df:dx` that computes the derivative of `f` with respect to its
 *  single argument
 *   - a function `df:dy`, similar to `df:dx` for the second arg
 * 
 *   Returns a new binary function that operates on both the original type of `f`
 *   and [[Differential]] instances.
 * 
 *   NOTE: `df:dx` and `df:dy` have to ALREADY be able to handle [[Differential]]
 *   instances. The best way to accomplish this is by building `df:dx` and `df:dy`
 *   out of already-lifted functions, and declaring them by forward reference if
 *   you need to.
 */
sicmutils.differential.lift_2 = (function sicmutils$differential$lift_2(var_args){
var G__96542 = arguments.length;
switch (G__96542) {
case 1:
return sicmutils.differential.lift_2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return sicmutils.differential.lift_2.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.differential.lift_2.cljs$core$IFn$_invoke$arity$1 = (function (f){
var df_COLON_dx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512)) : f.call(null,new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512)));
var df_COLON_dy = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dfdy","dfdy",-434788201)) : f.call(null,new cljs.core.Keyword(null,"dfdy","dfdy",-434788201)));
if(cljs.core.truth_((function (){var and__4251__auto__ = df_COLON_dx;
if(cljs.core.truth_(and__4251__auto__)){
return df_COLON_dy;
} else {
return and__4251__auto__;
}
})())){
return sicmutils.differential.lift_2.cljs$core$IFn$_invoke$arity$3(f,df_COLON_dx,df_COLON_dy);
} else {
return sicmutils.util.illegal("No df:dx, df:dy supplied for `f` or registered generically.");
}
}));

(sicmutils.differential.lift_2.cljs$core$IFn$_invoke$arity$3 = (function (f,df_COLON_dx,df_COLON_dy){
return (function sicmutils$differential$call(x,y){
if((!(((sicmutils.differential.differential_QMARK_(x)) || (sicmutils.differential.differential_QMARK_(y)))))){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y));
} else {
var tag = sicmutils.differential.max_order_tag.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([y], 0));
var vec__96548 = sicmutils.differential.primal_tangent_pair.cljs$core$IFn$_invoke$arity$2(x,tag);
var xe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96548,(0),null);
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96548,(1),null);
var vec__96551 = sicmutils.differential.primal_tangent_pair.cljs$core$IFn$_invoke$arity$2(y,tag);
var ye = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96551,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96551,(1),null);
var a = sicmutils$differential$call(xe,ye);
var b = ((sicmutils.value.numeric_zero_QMARK_(dx))?a:sicmutils.differential.d_COLON__PLUS__STAR_(a,(df_COLON_dx.cljs$core$IFn$_invoke$arity$2 ? df_COLON_dx.cljs$core$IFn$_invoke$arity$2(xe,ye) : df_COLON_dx.call(null,xe,ye)),dx));
if(sicmutils.value.numeric_zero_QMARK_(dy)){
return b;
} else {
return sicmutils.differential.d_COLON__PLUS__STAR_(b,(df_COLON_dy.cljs$core$IFn$_invoke$arity$2 ? df_COLON_dy.cljs$core$IFn$_invoke$arity$2(xe,ye) : df_COLON_dy.call(null,xe,ye)),dy);
}
}
});
}));

(sicmutils.differential.lift_2.cljs$lang$maxFixedArity = 3);

/**
 * Given:
 * 
 *   - some function `f` that can handle 0, 1 or 2 arguments
 *   - `df:dx`, a fn that returns the derivative wrt the single arg in the unary case
 *   - `df:dx1` and `df:dx2`, fns that return the derivative with respect to the
 *  first and second args in the binary case
 * 
 *   Returns a new any-arity function that operates on both the original type of
 *   `f` and [[Differential]] instances.
 * 
 *   NOTE: The n-ary case of `f` is populated by nested calls to the binary case.
 *   That means that this is NOT an appropriate lifting method for an n-ary
 *   function that isn't built out of associative binary calls. If you need this
 *   ability, please file an issue at the [sicmutils issue
 *   tracker](https://github.com/sicmutils/sicmutils/issues).
 */
sicmutils.differential.lift_n = (function sicmutils$differential$lift_n(f,df_COLON_dx,df_COLON_dx1,df_COLON_dx2){
var f1 = sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$2(f,df_COLON_dx);
var f2 = sicmutils.differential.lift_2.cljs$core$IFn$_invoke$arity$3(f,df_COLON_dx1,df_COLON_dx2);
return (function() {
var sicmutils$differential$lift_n_$_call = null;
var sicmutils$differential$lift_n_$_call__0 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var sicmutils$differential$lift_n_$_call__1 = (function (x){
return f1(x);
});
var sicmutils$differential$lift_n_$_call__2 = (function (x,y){
return f2(x,y);
});
var sicmutils$differential$lift_n_$_call__3 = (function() { 
var G__96704__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(sicmutils$differential$lift_n_$_call,sicmutils$differential$lift_n_$_call.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__96704 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__96705__i = 0, G__96705__a = new Array(arguments.length -  2);
while (G__96705__i < G__96705__a.length) {G__96705__a[G__96705__i] = arguments[G__96705__i + 2]; ++G__96705__i;}
  more = new cljs.core.IndexedSeq(G__96705__a,0,null);
} 
return G__96704__delegate.call(this,x,y,more);};
G__96704.cljs$lang$maxFixedArity = 2;
G__96704.cljs$lang$applyTo = (function (arglist__96706){
var x = cljs.core.first(arglist__96706);
arglist__96706 = cljs.core.next(arglist__96706);
var y = cljs.core.first(arglist__96706);
var more = cljs.core.rest(arglist__96706);
return G__96704__delegate(x,y,more);
});
G__96704.cljs$core$IFn$_invoke$arity$variadic = G__96704__delegate;
return G__96704;
})()
;
sicmutils$differential$lift_n_$_call = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return sicmutils$differential$lift_n_$_call__0.call(this);
case 1:
return sicmutils$differential$lift_n_$_call__1.call(this,x);
case 2:
return sicmutils$differential$lift_n_$_call__2.call(this,x,y);
default:
var G__96707 = null;
if (arguments.length > 2) {
var G__96708__i = 0, G__96708__a = new Array(arguments.length -  2);
while (G__96708__i < G__96708__a.length) {G__96708__a[G__96708__i] = arguments[G__96708__i + 2]; ++G__96708__i;}
G__96707 = new cljs.core.IndexedSeq(G__96708__a,0,null);
}
return sicmutils$differential$lift_n_$_call__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__96707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sicmutils$differential$lift_n_$_call.cljs$lang$maxFixedArity = 2;
sicmutils$differential$lift_n_$_call.cljs$lang$applyTo = sicmutils$differential$lift_n_$_call__3.cljs$lang$applyTo;
sicmutils$differential$lift_n_$_call.cljs$core$IFn$_invoke$arity$0 = sicmutils$differential$lift_n_$_call__0;
sicmutils$differential$lift_n_$_call.cljs$core$IFn$_invoke$arity$1 = sicmutils$differential$lift_n_$_call__1;
sicmutils$differential$lift_n_$_call.cljs$core$IFn$_invoke$arity$2 = sicmutils$differential$lift_n_$_call__2;
sicmutils$differential$lift_n_$_call.cljs$core$IFn$_invoke$arity$variadic = sicmutils$differential$lift_n_$_call__3.cljs$core$IFn$_invoke$arity$variadic;
return sicmutils$differential$lift_n_$_call;
})()
});
sicmutils.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.differential","differential","sicmutils.differential/differential",-1991028525)], null),(function (d){
return sicmutils.differential.map_coefficients(sicmutils.generic.simplify,d);
}));
/**
 * Given:
 * 
 *   - a generic unary multimethod `generic-op`
 *   - a corresponding single-arity lifted function `differential-op`
 * 
 *   installs an appropriate unary implementation of `generic-op` for
 *   `::differential` instances.
 */
sicmutils.differential.defunary = (function sicmutils$differential$defunary(generic_op,differential_op){
return generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.differential","differential","sicmutils.differential/differential",-1991028525)], null),(function (a){
return (differential_op.cljs$core$IFn$_invoke$arity$1 ? differential_op.cljs$core$IFn$_invoke$arity$1(a) : differential_op.call(null,a));
}));
});
/**
 * Given:
 * 
 *   - a generic binary multimethod `generic-op`
 *   - a corresponding 2-arity lifted function `differential-op`
 * 
 *   installs an appropriate binary implementation of `generic-op` between
 *   `:differential` and `::v/scalar` instances.
 */
sicmutils.differential.defbinary = (function sicmutils$differential$defbinary(generic_op,differential_op){
var seq__96559 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.differential","differential","sicmutils.differential/differential",-1991028525),new cljs.core.Keyword("sicmutils.differential","differential","sicmutils.differential/differential",-1991028525)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.differential","differential","sicmutils.differential/differential",-1991028525)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.differential","differential","sicmutils.differential/differential",-1991028525),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null)], null));
var chunk__96560 = null;
var count__96561 = (0);
var i__96562 = (0);
while(true){
if((i__96562 < count__96561)){
var signature = chunk__96560.cljs$core$IIndexed$_nth$arity$2(null,i__96562);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,signature,((function (seq__96559,chunk__96560,count__96561,i__96562,signature){
return (function (a,b){
return (differential_op.cljs$core$IFn$_invoke$arity$2 ? differential_op.cljs$core$IFn$_invoke$arity$2(a,b) : differential_op.call(null,a,b));
});})(seq__96559,chunk__96560,count__96561,i__96562,signature))
);


var G__96709 = seq__96559;
var G__96710 = chunk__96560;
var G__96711 = count__96561;
var G__96712 = (i__96562 + (1));
seq__96559 = G__96709;
chunk__96560 = G__96710;
count__96561 = G__96711;
i__96562 = G__96712;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__96559);
if(temp__5753__auto__){
var seq__96559__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__96559__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__96559__$1);
var G__96713 = cljs.core.chunk_rest(seq__96559__$1);
var G__96714 = c__4679__auto__;
var G__96715 = cljs.core.count(c__4679__auto__);
var G__96716 = (0);
seq__96559 = G__96713;
chunk__96560 = G__96714;
count__96561 = G__96715;
i__96562 = G__96716;
continue;
} else {
var signature = cljs.core.first(seq__96559__$1);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,signature,((function (seq__96559,chunk__96560,count__96561,i__96562,signature,seq__96559__$1,temp__5753__auto__){
return (function (a,b){
return (differential_op.cljs$core$IFn$_invoke$arity$2 ? differential_op.cljs$core$IFn$_invoke$arity$2(a,b) : differential_op.call(null,a,b));
});})(seq__96559,chunk__96560,count__96561,i__96562,signature,seq__96559__$1,temp__5753__auto__))
);


var G__96717 = cljs.core.next(seq__96559__$1);
var G__96718 = null;
var G__96719 = (0);
var G__96720 = (0);
seq__96559 = G__96717;
chunk__96560 = G__96718;
count__96561 = G__96719;
i__96562 = G__96720;
continue;
}
} else {
return null;
}
}
break;
}
});
sicmutils.differential.defbinary(sicmutils.value._EQ_,sicmutils.differential.equiv);
sicmutils.differential.defbinary(sicmutils.generic.add,sicmutils.differential.d_COLON__PLUS_);
sicmutils.differential.defunary(sicmutils.generic.negate,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.negate));
sicmutils.differential.defbinary(sicmutils.generic.sub,sicmutils.differential.lift_2.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sub));
var mul_96721 = sicmutils.differential.lift_2.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.mul);
sicmutils.differential.defbinary(sicmutils.generic.mul,mul_96721);

sicmutils.differential.defbinary(sicmutils.generic.dot_product,mul_96721);
sicmutils.differential.defbinary(sicmutils.generic.expt,sicmutils.differential.lift_2.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.expt));
sicmutils.differential.defunary(sicmutils.generic.square,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.square));
sicmutils.differential.defunary(sicmutils.generic.cube,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.cube));
sicmutils.differential.defunary(sicmutils.generic.invert,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.invert));
sicmutils.differential.defbinary(sicmutils.generic.div,sicmutils.differential.lift_2.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.div));
sicmutils.differential.defunary(sicmutils.generic.negative_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.negative_QMARK_,sicmutils.differential.finite_term));
sicmutils.differential.defunary(sicmutils.generic.infinite_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.infinite_QMARK_,sicmutils.differential.finite_term));
sicmutils.differential.defunary(sicmutils.generic.abs,(function (x){
var f = sicmutils.differential.finite_term(x);
var func = (((f < (0)))?sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.negate):(((f > (0)))?sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (_){
return (1);
})):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,(0)))?sicmutils.util.illegal("Derivative of g/abs undefined at zero"):sicmutils.util.illegal(["error! derivative of g/abs at",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))
)));
return (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(x) : func.call(null,x));
}));
sicmutils.differential.discont_at_integers = (function sicmutils$differential$discont_at_integers(f,dfdx){
var f__$1 = sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$2(f,(function (_){
return dfdx;
}));
var f_name = sicmutils.value.freeze(f__$1);
return (function (x){
if(sicmutils.value.integral_QMARK_(sicmutils.differential.finite_term(x))){
return sicmutils.util.illegal(["Derivative of g/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)," undefined at integral points."].join(''));
} else {
return f__$1(x);
}
});
});
sicmutils.differential.defunary(sicmutils.generic.floor,sicmutils.differential.discont_at_integers(sicmutils.generic.floor,(0)));
sicmutils.differential.defunary(sicmutils.generic.ceiling,sicmutils.differential.discont_at_integers(sicmutils.generic.ceiling,(0)));
sicmutils.differential.defunary(sicmutils.generic.integer_part,sicmutils.differential.discont_at_integers(sicmutils.generic.integer_part,(0)));
sicmutils.differential.defunary(sicmutils.generic.fractional_part,sicmutils.differential.discont_at_integers(sicmutils.generic.fractional_part,(1)));
var div_96723 = sicmutils.differential.lift_2.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.div);
sicmutils.differential.defbinary(sicmutils.generic.solve_linear,(function (l,r){
return (div_96723.cljs$core$IFn$_invoke$arity$2 ? div_96723.cljs$core$IFn$_invoke$arity$2(r,l) : div_96723.call(null,r,l));
}));

sicmutils.differential.defbinary(sicmutils.generic.solve_linear_right,div_96723);
sicmutils.differential.defunary(sicmutils.generic.sqrt,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sqrt));
sicmutils.differential.defunary(sicmutils.generic.log,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.log));
sicmutils.differential.defunary(sicmutils.generic.exp,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.exp));
sicmutils.differential.defunary(sicmutils.generic.cos,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.cos));
sicmutils.differential.defunary(sicmutils.generic.sin,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sin));
sicmutils.differential.defunary(sicmutils.generic.tan,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.tan));
sicmutils.differential.defunary(sicmutils.generic.cot,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.cot));
sicmutils.differential.defunary(sicmutils.generic.sec,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sec));
sicmutils.differential.defunary(sicmutils.generic.csc,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.csc));
sicmutils.differential.defunary(sicmutils.generic.atan,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.atan));
sicmutils.differential.defbinary(sicmutils.generic.atan,sicmutils.differential.lift_2.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.atan));
sicmutils.differential.defunary(sicmutils.generic.asin,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.asin));
sicmutils.differential.defunary(sicmutils.generic.acos,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.acos));
sicmutils.differential.defunary(sicmutils.generic.acot,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.acot));
sicmutils.differential.defunary(sicmutils.generic.asec,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.asec));
sicmutils.differential.defunary(sicmutils.generic.acsc,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.acsc));
sicmutils.differential.defunary(sicmutils.generic.cosh,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.cosh));
sicmutils.differential.defunary(sicmutils.generic.sinh,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sinh));
sicmutils.differential.defunary(sicmutils.generic.tanh,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.tanh));
sicmutils.differential.defunary(sicmutils.generic.sech,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sech));
sicmutils.differential.defunary(sicmutils.generic.coth,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.coth));
sicmutils.differential.defunary(sicmutils.generic.csch,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.csch));
sicmutils.differential.defunary(sicmutils.generic.acosh,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.acosh));
sicmutils.differential.defunary(sicmutils.generic.asinh,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.asinh));
sicmutils.differential.defunary(sicmutils.generic.atanh,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.atanh));
sicmutils.differential.defunary(sicmutils.generic.acoth,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.acoth));
sicmutils.differential.defunary(sicmutils.generic.asech,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.asech));
sicmutils.differential.defunary(sicmutils.generic.acsch,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.acsch));
sicmutils.differential.defunary(sicmutils.generic.sinc,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sinc));
sicmutils.differential.defunary(sicmutils.generic.sinhc,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sinhc));
sicmutils.differential.defunary(sicmutils.generic.tanc,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.tanc));
sicmutils.differential.defunary(sicmutils.generic.tanhc,sicmutils.differential.lift_1.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.tanhc));

//# sourceMappingURL=sicmutils.differential.js.map
