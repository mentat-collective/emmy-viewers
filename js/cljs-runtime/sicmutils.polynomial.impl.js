goog.provide('sicmutils.polynomial.impl');
/**
 * Constructs a polynomial term out of the supplied coefficient `coef` and
 *   exponents `expts`. Retrieve these with [[coefficient]] and [[exponents]].
 * 
 *   Optionally, passing a single coefficient argument sets the exponents to a
 *   default value of [[exponent/empty]].
 */
sicmutils.polynomial.impl.make_term = (function sicmutils$polynomial$impl$make_term(var_args){
var G__97083 = arguments.length;
switch (G__97083) {
case 1:
return sicmutils.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$1 = (function (coef){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.polynomial.exponent.empty,coef], null);
}));

(sicmutils.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2 = (function (expts,coef){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expts,coef], null);
}));

(sicmutils.polynomial.impl.make_term.cljs$lang$maxFixedArity = 2);

/**
 * Returns the exponents portion of the supplied `term`. Defaults to returning
 *   [[exponent/empty]] if some non-compatible input is supplied.
 */
sicmutils.polynomial.impl.exponents = (function sicmutils$polynomial$impl$exponents(term){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(term,(0),sicmutils.polynomial.exponent.empty);
});
/**
 * Returns the coefficient portion of the supplied `term`. Defaults to returning
 *   `0` if some non-compatible input is supplied.
 */
sicmutils.polynomial.impl.coefficient = (function sicmutils$polynomial$impl$coefficient(term){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(term,(1),(0));
});
/**
 * Returns true if the term has an empty exponent portion, false otherwise.
 */
sicmutils.polynomial.impl.constant_term_QMARK_ = (function sicmutils$polynomial$impl$constant_term_QMARK_(term){
return cljs.core.empty_QMARK_(sicmutils.polynomial.impl.exponents(term));
});
/**
 * Returns a string representation of the supplied `term`.
 */
sicmutils.polynomial.impl.term__GT_str = (function sicmutils$polynomial$impl$term__GT_str(term){
var expts = sicmutils.polynomial.impl.exponents(term);
var coef = sicmutils.polynomial.impl.coefficient(term);
return [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coef], 0)),"*",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expts], 0))].join('');
});
sicmutils.polynomial.impl.empty_terms = cljs.core.PersistentVector.EMPTY;
/**
 * This variable defines monomial order used in the construction and
 *   arithmetic of polynomials. Bind this variable to a comparator on the exponents
 *   of each monomial term.
 * 
 *   Defaults to [[exponent/graded-lex-order]].
 */
sicmutils.polynomial.impl._STAR_monomial_order_STAR_ = sicmutils.polynomial.exponent.graded_lex_order;
/**
 * Given some constant coefficient `coef`, returns a constant polynomial.
 */
sicmutils.polynomial.impl.constant__GT_terms = (function sicmutils$polynomial$impl$constant__GT_terms(coef){
if(sicmutils.value.zero_QMARK_(coef)){
return sicmutils.polynomial.impl.empty_terms;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.exponent.empty,coef)], null);
}
});
/**
 * Accepts a sequence of dense coefficients of a univariate polynomial (in
 *   ascending order), and returns a polynomial in flat polynomial form that
 *   matches the supplied coefficient sequence.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (dense->terms [1 0 0 4 5])
 *   ;;=> [[{} 1] [{0 3} 4] [{0 4} 5]]
 *   ```
 */
sicmutils.polynomial.impl.dense__GT_terms = (function sicmutils$polynomial$impl$dense__GT_terms(coefs){
var __GT_term = (function (i,coef){
if(sicmutils.value.zero_QMARK_(coef)){
return null;
} else {
var expts = (((i === (0)))?sicmutils.polynomial.exponent.empty:(sicmutils.polynomial.exponent.make.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.exponent.make.cljs$core$IFn$_invoke$arity$2((0),i) : sicmutils.polynomial.exponent.make.call(null,(0),i)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(expts,coef)], null);
}
});
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(__GT_term),cljs.core.cat);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(sicmutils.polynomial.impl.empty_terms,xform,coefs);
});
/**
 * Accepts a sparse mapping (or sequence of pairs) of exponent => coefficient, and
 *   returns a proper polynomial. Optionally takes a `comparator` on exponent
 *   entries; the returned polynomial will be sorted using that comparator.
 * 
 *   `comparator` defaults to [[*monomial-order*]].
 * 
 *   The `exponent` portion of the mapping can be any of:
 * 
 *   - a proper exponent entry created by `sicmutils.polynomial.exponent`
 *   - a map of the form `{variable-index, power}`
 *   - a dense vector of variable powers, like `[3 0 1]` for $x^3z$.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (sparse->terms {{1 2 3 1} 4 [0 2 0 0] 2})
 *   ;;=> [[{1 2} 2] [{1 2, 3 1} 4]]
 *   ```
 */
sicmutils.polynomial.impl.sparse__GT_terms = (function sicmutils$polynomial$impl$sparse__GT_terms(var_args){
var G__97091 = arguments.length;
switch (G__97091) {
case 1:
return sicmutils.polynomial.impl.sparse__GT_terms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.polynomial.impl.sparse__GT_terms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.polynomial.impl.sparse__GT_terms.cljs$core$IFn$_invoke$arity$1 = (function (expts__GT_coef){
return sicmutils.polynomial.impl.sparse__GT_terms.cljs$core$IFn$_invoke$arity$2(expts__GT_coef,sicmutils.polynomial.impl._STAR_monomial_order_STAR_);
}));

(sicmutils.polynomial.impl.sparse__GT_terms.cljs$core$IFn$_invoke$arity$2 = (function (expts__GT_coef,comparator){
if(cljs.core.empty_QMARK_(expts__GT_coef)){
return sicmutils.polynomial.impl.empty_terms;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.impl.empty_terms,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(sicmutils.polynomial.impl.exponents,comparator,(function (){var iter__4652__auto__ = (function sicmutils$polynomial$impl$iter__97097(s__97098){
return (new cljs.core.LazySeq(null,(function (){
var s__97098__$1 = s__97098;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__97098__$1);
if(temp__5753__auto__){
var s__97098__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__97098__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__97098__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__97100 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__97099 = (0);
while(true){
if((i__97099 < size__4651__auto__)){
var vec__97101 = cljs.core._nth(c__4650__auto__,i__97099);
var expts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97101,(0),null);
var terms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97101,(1),null);
var coef_sum = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(sicmutils.polynomial.impl.coefficient),sicmutils.generic._PLUS_,terms);
if((!(sicmutils.value.zero_QMARK_(coef_sum)))){
var expts__$1 = ((cljs.core.vector_QMARK_(expts))?sicmutils.polynomial.exponent.dense__GT_exponents(expts):((cljs.core.sorted_QMARK_(expts))?expts:((cljs.core.map_QMARK_(expts))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.exponent.empty,expts):sicmutils.util.illegal("Invalid inputs to sparse->terms TODO")
)));
cljs.core.chunk_append(b__97100,sicmutils.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(expts__$1,coef_sum));

var G__97145 = (i__97099 + (1));
i__97099 = G__97145;
continue;
} else {
var G__97146 = (i__97099 + (1));
i__97099 = G__97146;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__97100),sicmutils$polynomial$impl$iter__97097(cljs.core.chunk_rest(s__97098__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__97100),null);
}
} else {
var vec__97104 = cljs.core.first(s__97098__$2);
var expts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97104,(0),null);
var terms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97104,(1),null);
var coef_sum = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(sicmutils.polynomial.impl.coefficient),sicmutils.generic._PLUS_,terms);
if((!(sicmutils.value.zero_QMARK_(coef_sum)))){
var expts__$1 = ((cljs.core.vector_QMARK_(expts))?sicmutils.polynomial.exponent.dense__GT_exponents(expts):((cljs.core.sorted_QMARK_(expts))?expts:((cljs.core.map_QMARK_(expts))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.exponent.empty,expts):sicmutils.util.illegal("Invalid inputs to sparse->terms TODO")
)));
return cljs.core.cons(sicmutils.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(expts__$1,coef_sum),sicmutils$polynomial$impl$iter__97097(cljs.core.rest(s__97098__$2)));
} else {
var G__97147 = cljs.core.rest(s__97098__$2);
s__97098__$1 = G__97147;
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
return iter__4652__auto__(cljs.core.group_by(sicmutils.polynomial.impl.exponents,expts__GT_coef));
})()));
}
}));

(sicmutils.polynomial.impl.sparse__GT_terms.cljs$lang$maxFixedArity = 2);

/**
 * Returns a new polynomial generated by applying `f` to the coefficient portion
 *   of each term in `terms`.
 */
sicmutils.polynomial.impl.map_coefficients = (function sicmutils$polynomial$impl$map_coefficients(f,terms){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.impl.empty_terms,(function (){var iter__4652__auto__ = (function sicmutils$polynomial$impl$map_coefficients_$_iter__97109(s__97110){
return (new cljs.core.LazySeq(null,(function (){
var s__97110__$1 = s__97110;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__97110__$1);
if(temp__5753__auto__){
var s__97110__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__97110__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__97110__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__97112 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__97111 = (0);
while(true){
if((i__97111 < size__4651__auto__)){
var vec__97113 = cljs.core._nth(c__4650__auto__,i__97111);
var expts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97113,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97113,(1),null);
var f_c = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(c) : f.call(null,c));
if((!(sicmutils.value.zero_QMARK_(f_c)))){
cljs.core.chunk_append(b__97112,sicmutils.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(expts,f_c));

var G__97150 = (i__97111 + (1));
i__97111 = G__97150;
continue;
} else {
var G__97151 = (i__97111 + (1));
i__97111 = G__97151;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__97112),sicmutils$polynomial$impl$map_coefficients_$_iter__97109(cljs.core.chunk_rest(s__97110__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__97112),null);
}
} else {
var vec__97116 = cljs.core.first(s__97110__$2);
var expts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97116,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97116,(1),null);
var f_c = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(c) : f.call(null,c));
if((!(sicmutils.value.zero_QMARK_(f_c)))){
return cljs.core.cons(sicmutils.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(expts,f_c),sicmutils$polynomial$impl$map_coefficients_$_iter__97109(cljs.core.rest(s__97110__$2)));
} else {
var G__97152 = cljs.core.rest(s__97110__$2);
s__97110__$1 = G__97152;
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
return iter__4652__auto__(terms);
})());
});
/**
 * Returns the sum of polynomials `u` and `v`. Coefficients paired
 *   with matching exponents are combined with [[sicmutils.generic/add]].
 */
sicmutils.polynomial.impl.add = sicmutils.util.aggregate.merge_fn(new cljs.core.Var(function(){return sicmutils.polynomial.impl._STAR_monomial_order_STAR_;},new cljs.core.Symbol("sicmutils.polynomial.impl","*monomial-order*","sicmutils.polynomial.impl/*monomial-order*",125014275,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"sicmutils.polynomial.impl","sicmutils.polynomial.impl",1759823936,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"*monomial-order*","*monomial-order*",-1705265536,null),"sicmutils/polynomial/impl.cljc",19,1,true,75,81,cljs.core.List.EMPTY,"This variable defines monomial order used in the construction and\n  arithmetic of polynomials. Bind this variable to a comparator on the exponents\n  of each monomial term.\n\n  Defaults to [[exponent/graded-lex-order]].",(cljs.core.truth_(sicmutils.polynomial.impl._STAR_monomial_order_STAR_)?sicmutils.polynomial.impl._STAR_monomial_order_STAR_.cljs$lang$test:null)])),sicmutils.generic.add,sicmutils.value.zero_QMARK_,sicmutils.polynomial.impl.make_term);
/**
 * Returns the difference of polynomials `u` and `v`.
 * 
 *   NOTE that coefficients paired with matching exponents are combined by `(g/add
 *   u (g/negate v))`, rather than an explicit call to [[sicmutils.generic/sub]].
 */
sicmutils.polynomial.impl.sub = (function sicmutils$polynomial$impl$sub(u,v){
return sicmutils.polynomial.impl.add(u,sicmutils.polynomial.impl.map_coefficients(sicmutils.generic.negate,v));
});
/**
 * Multiplies a single term on the left by a vector `v` of terms on the right.
 *   Returns a new polynomial (ie, vector of terms).
 */
sicmutils.polynomial.impl.t_STAR_ts = (function sicmutils$polynomial$impl$t_STAR_ts(p__97120,v){
var vec__97122 = p__97120;
var tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97122,(0),null);
var coeff = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97122,(1),null);
var acc = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var i = (0);
while(true){
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,i,null);
if((t == null)){
return cljs.core.persistent_BANG_(acc);
} else {
var vec__97125 = t;
var tags1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97125,(0),null);
var coeff1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97125,(1),null);
var G__97153 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,sicmutils.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.exponent.mul(tags,tags1),sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(coeff,coeff1)));
var G__97154 = (i + (1));
acc = G__97153;
i = G__97154;
continue;
}
break;
}
});
/**
 * Returns the product of the two polynomial term vectors `u` and `v`.
 */
sicmutils.polynomial.impl.mul = (function sicmutils$polynomial$impl$mul(u,v){
var call = (function sicmutils$polynomial$impl$mul_$_call(i){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(u,i,null);
if((x == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
return sicmutils.polynomial.impl.add(sicmutils.polynomial.impl.t_STAR_ts(x,v),sicmutils$polynomial$impl$mul_$_call((i + (1))));
}
});
return call((0));
});
/**
 * Given two polynomials `u` and `v`, returns a pair of the form `[quotient,
 *   remainder]` using [polynomial long
 *   division](https://en.wikipedia.org/wiki/Polynomial_long_division).
 * 
 *   The contract satisfied is that
 * 
 *   ```
 *   u == (add (mul quotient v) remainder)
 *   ```
 */
sicmutils.polynomial.impl.div = (function sicmutils$polynomial$impl$div(u,v){
var vec__97131 = cljs.core.peek(v);
var vn_expts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97131,(0),null);
var vn_coeff = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97131,(1),null);
var good_QMARK_ = (function (p1__97130_SHARP_){
return sicmutils.polynomial.exponent.every_power_QMARK_(cljs.core.pos_QMARK_,p1__97130_SHARP_);
});
var quotient = cljs.core.PersistentVector.EMPTY;
var remainder = u;
while(true){
if(cljs.core.empty_QMARK_(remainder)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quotient,remainder], null);
} else {
var vec__97138 = cljs.core.peek(remainder);
var r_exponents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97138,(0),null);
var r_coeff = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97138,(1),null);
var residues = sicmutils.polynomial.exponent.div(r_exponents,vn_expts);
if(good_QMARK_(residues)){
var new_coeff = sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(r_coeff,vn_coeff);
var new_term = sicmutils.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(residues,new_coeff);
var G__97155 = sicmutils.polynomial.impl.add(quotient,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_term], null));
var G__97156 = sicmutils.polynomial.impl.sub(remainder,sicmutils.polynomial.impl.t_STAR_ts(new_term,v));
quotient = G__97155;
remainder = G__97156;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quotient,remainder], null);
}
}
break;
}
});

//# sourceMappingURL=sicmutils.polynomial.impl.js.map
