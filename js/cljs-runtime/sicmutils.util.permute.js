goog.provide('sicmutils.util.permute');
/**
 * returns the sequence `xs` with its `n`th element dropped.
 */
sicmutils.util.permute.delete_nth = (function sicmutils$util$permute$delete_nth(xs,n){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,xs),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((n + (1)),xs));
});
/**
 * Returns a lazy sequence of every possible arrangement of the elements of `xs`.
 */
sicmutils.util.permute.permutations = (function sicmutils$util$permute$permutations(xs){
if(cljs.core.empty_QMARK_(xs)){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
var f = (function sicmutils$util$permute$permutations_$_f(i,item){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (perm){
return cljs.core.cons(item,perm);
}),(function (){var G__100986 = sicmutils.util.permute.delete_nth(xs,i);
return (sicmutils.util.permute.permutations.cljs$core$IFn$_invoke$arity$1 ? sicmutils.util.permute.permutations.cljs$core$IFn$_invoke$arity$1(G__100986) : sicmutils.util.permute.permutations.call(null,G__100986));
})());
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cat),xs);
}
});
/**
 * Returns a lazy sequence of every possible set of `p` elements chosen from
 *   `xs`.
 */
sicmutils.util.permute.combinations = (function sicmutils$util$permute$combinations(xs,p){
if((p === (0))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
if(cljs.core.empty_QMARK_(xs)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (more){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,cljs.core.first(xs));
}),(function (){var G__100987 = cljs.core.rest(xs);
var G__100988 = (p - (1));
return (sicmutils.util.permute.combinations.cljs$core$IFn$_invoke$arity$2 ? sicmutils.util.permute.combinations.cljs$core$IFn$_invoke$arity$2(G__100987,G__100988) : sicmutils.util.permute.combinations.call(null,G__100987,G__100988));
})()),(function (){var G__100989 = cljs.core.rest(xs);
var G__100990 = p;
return (sicmutils.util.permute.combinations.cljs$core$IFn$_invoke$arity$2 ? sicmutils.util.permute.combinations.cljs$core$IFn$_invoke$arity$2(G__100989,G__100990) : sicmutils.util.permute.combinations.call(null,G__100989,G__100990));
})());

}
}
});
/**
 * Accepts a sequence of collections `colls` and returns a lazy sequence of the
 *   cartesian product of all collections.
 * 
 *   The cartesian product of N collections is a sequences of sequences, each `N`
 *   long, of every possible way of choosing `N` items where the first comes from
 *   the first entry in `colls`, the second from the second entry and so on.
 * 
 *   NOTE: This implementation comes from Alan Malloy at this [StackOverflow
 *   post](https://stackoverflow.com/a/18248031). Thanks, Alan!
 */
sicmutils.util.permute.cartesian_product = (function sicmutils$util$permute$cartesian_product(colls){
if(cljs.core.empty_QMARK_(colls)){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
var iter__4652__auto__ = (function sicmutils$util$permute$cartesian_product_$_iter__100995(s__100996){
return (new cljs.core.LazySeq(null,(function (){
var s__100996__$1 = s__100996;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__100996__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var more = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__100996__$1,more,xs__6308__auto__,temp__5753__auto__){
return (function sicmutils$util$permute$cartesian_product_$_iter__100995_$_iter__100997(s__100998){
return (new cljs.core.LazySeq(null,((function (s__100996__$1,more,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__100998__$1 = s__100998;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__100998__$1);
if(temp__5753__auto____$1){
var s__100998__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__100998__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__100998__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__101000 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__100999 = (0);
while(true){
if((i__100999 < size__4651__auto__)){
var x = cljs.core._nth(c__4650__auto__,i__100999);
cljs.core.chunk_append(b__101000,cljs.core.cons(x,more));

var G__101237 = (i__100999 + (1));
i__100999 = G__101237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__101000),sicmutils$util$permute$cartesian_product_$_iter__100995_$_iter__100997(cljs.core.chunk_rest(s__100998__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__101000),null);
}
} else {
var x = cljs.core.first(s__100998__$2);
return cljs.core.cons(cljs.core.cons(x,more),sicmutils$util$permute$cartesian_product_$_iter__100995_$_iter__100997(cljs.core.rest(s__100998__$2)));
}
} else {
return null;
}
break;
}
});})(s__100996__$1,more,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__100996__$1,more,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(cljs.core.first(colls)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,sicmutils$util$permute$cartesian_product_$_iter__100995(cljs.core.rest(s__100996__$1)));
} else {
var G__101238 = cljs.core.rest(s__100996__$1);
s__100996__$1 = G__101238;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__((function (){var G__101055 = cljs.core.rest(colls);
return (sicmutils.util.permute.cartesian_product.cljs$core$IFn$_invoke$arity$1 ? sicmutils.util.permute.cartesian_product.cljs$core$IFn$_invoke$arity$1(G__101055) : sicmutils.util.permute.cartesian_product.call(null,G__101055));
})());
}
});
/**
 * Given a `permuted-list` and the `original-list`, returns the number of
 *   interchanges required to generate the permuted list from the original list.
 */
sicmutils.util.permute.list_interchanges = (function sicmutils$util$permute$list_interchanges(permuted_list,original_list){
var lp1 = (function sicmutils$util$permute$list_interchanges_$_lp1(plist,n){
if(cljs.core.empty_QMARK_(plist)){
return n;
} else {
var fp = cljs.core.first(plist);
var bigger = cljs.core.rest(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__101056_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__101056_SHARP_,fp);
}),original_list));
var more = cljs.core.rest(plist);
return lp2(n,bigger,more,more,(0));
}
});
var lp2 = (function sicmutils$util$permute$list_interchanges_$_lp2(n,bigger,more,l,increment){
if(cljs.core.empty_QMARK_(l)){
return lp1(more,(n + increment));
} else {
return sicmutils$util$permute$list_interchanges_$_lp2(n,bigger,more,cljs.core.rest(l),((cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(l)]),bigger)))?(increment + (1)):increment));
}
});
return lp1(permuted_list,(0));
});
sicmutils.util.permute.permutation_interchanges = (function sicmutils$util$permute$permutation_interchanges(permuted_list){
var lp1 = (function sicmutils$util$permute$permutation_interchanges_$_lp1(plist,n){
if(cljs.core.empty_QMARK_(plist)){
return n;
} else {
var vec__101083 = plist;
var seq__101084 = cljs.core.seq(vec__101083);
var first__101085 = cljs.core.first(seq__101084);
var seq__101084__$1 = cljs.core.next(seq__101084);
var x = first__101085;
var xs = seq__101084__$1;
return lp2(n,x,xs,xs,(0));
}
});
var lp2 = (function sicmutils$util$permute$permutation_interchanges_$_lp2(n,x,xs,l,increment){
if(cljs.core.empty_QMARK_(l)){
return lp1(xs,(n + increment));
} else {
return sicmutils$util$permute$permutation_interchanges_$_lp2(n,x,xs,cljs.core.rest(l),(((cljs.core.first(l) >= x))?increment:(increment + (1))));
}
});
return lp1(permuted_list,(0));
});
/**
 * Returns true if `x1` and `x2` contain the same elements, false otherwise.
 */
sicmutils.util.permute.same_set_QMARK_ = (function sicmutils$util$permute$same_set_QMARK_(x1,x2){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.hash,x1),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.hash,x2));
});
/**
 * If a single `permuted-list` is supplied, returns the parity of the number of
 *   interchanges required to sort the permutation.
 * 
 *   NOTE that the requirement that elements be sortable currently constrains
 *   `permuted-list`'s elements to be numbers that respond to `>=`.
 * 
 *   For two arguments, given a `permuted-list` and the `original-list`, returns
 *   the parity (1 for even, -1 for odd) of the number of the number of
 *   interchanges required to generate the permuted list from the original list.
 * 
 *   In the two-argument case, if the two lists aren't permutations of each other,
 *   returns 0.
 */
sicmutils.util.permute.permutation_parity = (function sicmutils$util$permute$permutation_parity(var_args){
var G__101089 = arguments.length;
switch (G__101089) {
case 1:
return sicmutils.util.permute.permutation_parity.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.util.permute.permutation_parity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.util.permute.permutation_parity.cljs$core$IFn$_invoke$arity$1 = (function (permuted_list){
var swaps = sicmutils.util.permute.permutation_interchanges(permuted_list);
if(cljs.core.even_QMARK_(swaps)){
return (1);
} else {
return (-1);
}
}));

(sicmutils.util.permute.permutation_parity.cljs$core$IFn$_invoke$arity$2 = (function (permuted_list,original_list){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(permuted_list),cljs.core.count(original_list))) && (sicmutils.util.permute.same_set_QMARK_(permuted_list,original_list)))){
if(cljs.core.even_QMARK_(sicmutils.util.permute.list_interchanges(permuted_list,original_list))){
return (1);
} else {
return (-1);
}
} else {
return (0);
}
}));

(sicmutils.util.permute.permutation_parity.cljs$lang$maxFixedArity = 2);

/**
 * Given a `permutation` (represented as a list of numbers), and a sequence `xs`
 *   to be permuted, construct the list so permuted.
 */
sicmutils.util.permute.permute = (function sicmutils$util$permute$permute(permutation,xs){
var xs__$1 = cljs.core.vec(xs);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(xs__$1,p);
}),permutation);
});
sicmutils.util.permute.index_of = (function sicmutils$util$permute$index_of(v,x){
var fexpr__101113 = new cljs.core.Var(function(){return cljs.core._indexOf;},new cljs.core.Symbol("cljs.core","-indexOf","cljs.core/-indexOf",-1914846785,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"-indexOf","-indexOf",-442719214,null),"cljs/core.cljs",16,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),3,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),3,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,1544,1544,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null)),null,(cljs.core.truth_(cljs.core._indexOf)?cljs.core._indexOf.cljs$lang$test:null)]));
return (fexpr__101113.cljs$core$IFn$_invoke$arity$2 ? fexpr__101113.cljs$core$IFn$_invoke$arity$2(v,x) : fexpr__101113.call(null,v,x));
});
/**
 * cont = (fn [ulist slist perm iperm] ...)
 * 
 *   Given a short list and a comparison function, to sort the list by the
 *   comparison, returning the original list, the sorted list, the permutation
 *   procedure and the inverse permutation procedure developed by the sort.
 */
sicmutils.util.permute.sort_and_permute = (function sicmutils$util$permute$sort_and_permute(ulist,_LT__QMARK_,cont){
var n = cljs.core.count(ulist);
var lsource = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,ulist,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
var ltarget = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.first,cljs.core.comparator(_LT__QMARK_),lsource);
var sorted = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ltarget);
var perm = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,ltarget);
var iperm = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return sicmutils.util.permute.index_of(perm,i);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
var G__101124 = ulist;
var G__101125 = sorted;
var G__101126 = (function (l){
return sicmutils.util.permute.permute(perm,l);
});
var G__101127 = (function (l){
return sicmutils.util.permute.permute(iperm,l);
});
return (cont.cljs$core$IFn$_invoke$arity$4 ? cont.cljs$core$IFn$_invoke$arity$4(G__101124,G__101125,G__101126,G__101127) : cont.call(null,G__101124,G__101125,G__101126,G__101127));
});
/**
 * Given a sequence `xs` and a map `m` of replacement indices, returns a new
 *   version of `xs` with the element at the position marked by each key in `m`
 *   replaced by the element at each value in the original `xs`.
 */
sicmutils.util.permute.subpermute = (function sicmutils$util$permute$subpermute(m,xs){
return cljs.core.reduce_kv((function (acc,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(xs,v));
}),xs,m);
});
/**
 * Returns the number of possible ways of permuting a collection of `n` distinct
 *   elements.
 */
sicmutils.util.permute.number_of_permutations = (function sicmutils$util$permute$number_of_permutations(n){
return sicmutils.special.factorial.factorial(n);
});
/**
 * Returns 'n choose k', the number of possible ways of choosing `k` distinct
 *   elements from a collection of `n` total items.
 */
sicmutils.util.permute.number_of_combinations = (function sicmutils$util$permute$number_of_combinations(n,k){
if((n >= (0))){
} else {
throw (new Error("Assert failed: (>= n 0)"));
}

return sicmutils.special.factorial.binomial_coefficient(n,k);
});
var div_101261 = sicmutils.generic._SLASH_;
/**
 * Returns the number of possible ways of choosing a multiset with cardinality `k`
 *   from a set of `n` items, where each item is allowed to be chosen multiple
 *   times.
 */
sicmutils.util.permute.multichoose = (function sicmutils$util$permute$multichoose(n,k){
if((n >= (0))){
} else {
throw (new Error("Assert failed: (>= n 0)"));
}

if((k >= (0))){
} else {
throw (new Error("Assert failed: (>= k 0)"));
}

if((k === (0))){
return (1);
} else {
var G__101153 = sicmutils.special.factorial.rising_factorial.cljs$core$IFn$_invoke$arity$2(n,k);
var G__101154 = sicmutils.special.factorial.factorial(k);
return (div_101261.cljs$core$IFn$_invoke$arity$2 ? div_101261.cljs$core$IFn$_invoke$arity$2(G__101153,G__101154) : div_101261.call(null,G__101153,G__101154));
}
});
/**
 * Produces an iterable sequence developing the permutations of the input sequence
 *   of objects (which are considered distinct) in church-bell-changes order - that
 *   is, each permutation differs from the previous by a transposition of adjacent
 *   elements (Algorithm P from §7.2.1.2 of Knuth).
 * 
 *   This is an unusual way to go about this in a functional language, but it's
 *   fun.
 * 
 *   This approach has the side-effect of arranging for the parity of the generated
 *   permutations to alternate; the first permutation yielded is the identity
 *   permutation (which of course is even).
 * 
 *   Inside, there is a great deal of mutable state, but this cannot be observed by
 *   the user.
 */
sicmutils.util.permute.permutation_sequence = (function sicmutils$util$permute$permutation_sequence(as){
var n = cljs.core.count(as);
var a = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(as);
var c = cljs.core.int_array.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0)));
var o = cljs.core.int_array.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((1)));
var return$ = (function (p1__101155_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__101155_SHARP_);
});
var the_next = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(return$(a));
var has_next = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var step = (function (j,s){
while(true){
var q = (((c[j]) + (o[j])) | (0));
if((q < (0))){
(o[j] = ((- (o[j])) | (0)));

var G__101262 = (j - (1));
var G__101263 = s;
j = G__101262;
s = G__101263;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(q,(j + (1)))){
if((j === (0))){
return false;
} else {
(o[j] = ((- (o[j])) | (0)));

var G__101264 = (j - (1));
var G__101265 = (s + (1));
j = G__101264;
s = G__101265;
continue;
}
} else {
var i1 = (s + (j - (c[j])));
var i2 = (s + (j - q));
var t = (a[i1]);
(a[i1] = (a[i2]));

(a[i2] = t);

(c[j] = q);

return true;

}
}
break;
}
});
var G__101157 = (function (){
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.util !== 'undefined') && (typeof sicmutils.util.permute !== 'undefined') && (typeof sicmutils.util.permute.t_sicmutils$util$permute101158 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
*/
sicmutils.util.permute.t_sicmutils$util$permute101158 = (function (step,a,the_next,o,return$,n,as,has_next,c,meta101159){
this.step = step;
this.a = a;
this.the_next = the_next;
this.o = o;
this.return$ = return$;
this.n = n;
this.as = as;
this.has_next = has_next;
this.c = c;
this.meta101159 = meta101159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 131072;
});
(sicmutils.util.permute.t_sicmutils$util$permute101158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_101160,meta101159__$1){
var self__ = this;
var _101160__$1 = this;
return (new sicmutils.util.permute.t_sicmutils$util$permute101158(self__.step,self__.a,self__.the_next,self__.o,self__.return$,self__.n,self__.as,self__.has_next,self__.c,meta101159__$1));
}));

(sicmutils.util.permute.t_sicmutils$util$permute101158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_101160){
var self__ = this;
var _101160__$1 = this;
return self__.meta101159;
}));

(sicmutils.util.permute.t_sicmutils$util$permute101158.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return cljs.core.deref(self__.has_next);
}));

(sicmutils.util.permute.t_sicmutils$util$permute101158.prototype.next = (function (){
var self__ = this;
var _ = this;
var prev = cljs.core.deref(self__.the_next);
cljs.core.reset_BANG_(self__.has_next,(function (){var G__101177 = (self__.n - (1));
var G__101178 = (0);
return (self__.step.cljs$core$IFn$_invoke$arity$2 ? self__.step.cljs$core$IFn$_invoke$arity$2(G__101177,G__101178) : self__.step.call(null,G__101177,G__101178));
})());

cljs.core.reset_BANG_(self__.the_next,(self__.return$.cljs$core$IFn$_invoke$arity$1 ? self__.return$.cljs$core$IFn$_invoke$arity$1(self__.a) : self__.return$.call(null,self__.a)));

return prev;
}));

(sicmutils.util.permute.t_sicmutils$util$permute101158.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(sicmutils.util.permute.t_sicmutils$util$permute101158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"step","step",-1365547645,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"the-next","the-next",-1182032600,null),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Symbol(null,"return","return",-250970578,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"as","as",-1505746128,null),new cljs.core.Symbol(null,"has-next","has-next",-1971250537,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"meta101159","meta101159",-454456302,null)], null);
}));

(sicmutils.util.permute.t_sicmutils$util$permute101158.cljs$lang$type = true);

(sicmutils.util.permute.t_sicmutils$util$permute101158.cljs$lang$ctorStr = "sicmutils.util.permute/t_sicmutils$util$permute101158");

(sicmutils.util.permute.t_sicmutils$util$permute101158.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"sicmutils.util.permute/t_sicmutils$util$permute101158");
}));

/**
 * Positional factory function for sicmutils.util.permute/t_sicmutils$util$permute101158.
 */
sicmutils.util.permute.__GT_t_sicmutils$util$permute101158 = (function sicmutils$util$permute$permutation_sequence_$___GT_t_sicmutils$util$permute101158(step__$1,a__$1,the_next__$1,o__$1,return$__$1,n__$1,as__$1,has_next__$1,c__$1,meta101159){
return (new sicmutils.util.permute.t_sicmutils$util$permute101158(step__$1,a__$1,the_next__$1,o__$1,return$__$1,n__$1,as__$1,has_next__$1,c__$1,meta101159));
});

}

return (new sicmutils.util.permute.t_sicmutils$util$permute101158(step,a,the_next,o,return$,n,as,has_next,c,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var fexpr__101156 = new cljs.core.Var(function(){return cljs.core.chunkIteratorSeq;},new cljs.core.Symbol("cljs.core","chunkIteratorSeq","cljs.core/chunkIteratorSeq",74875524,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"chunkIteratorSeq","chunkIteratorSeq",1822959135,null),"cljs/core.cljs",24,1,4164,4164,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"iter","iter",-1346195486,null)], null)),null,(cljs.core.truth_(cljs.core.chunkIteratorSeq)?cljs.core.chunkIteratorSeq.cljs$lang$test:null)]));
return (fexpr__101156.cljs$core$IFn$_invoke$arity$1 ? fexpr__101156.cljs$core$IFn$_invoke$arity$1(G__101157) : fexpr__101156.call(null,G__101157));
});

//# sourceMappingURL=sicmutils.util.permute.js.map
