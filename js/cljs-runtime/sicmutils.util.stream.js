goog.provide('sicmutils.util.stream');
/**
 * Realizes, simplifies and prints `n` elements from the supplied sequence `xs`.
 */
sicmutils.util.stream.seq_print = (function sicmutils$util$stream$seq_print(n,xs){
var seq__96031 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,xs));
var chunk__96032 = null;
var count__96033 = (0);
var i__96034 = (0);
while(true){
if((i__96034 < count__96033)){
var x = chunk__96032.cljs$core$IIndexed$_nth$arity$2(null,i__96034);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(x)], 0));


var G__96186 = seq__96031;
var G__96187 = chunk__96032;
var G__96188 = count__96033;
var G__96189 = (i__96034 + (1));
seq__96031 = G__96186;
chunk__96032 = G__96187;
count__96033 = G__96188;
i__96034 = G__96189;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__96031);
if(temp__5753__auto__){
var seq__96031__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__96031__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__96031__$1);
var G__96194 = cljs.core.chunk_rest(seq__96031__$1);
var G__96195 = c__4679__auto__;
var G__96196 = cljs.core.count(c__4679__auto__);
var G__96197 = (0);
seq__96031 = G__96194;
chunk__96032 = G__96195;
count__96033 = G__96196;
i__96034 = G__96197;
continue;
} else {
var x = cljs.core.first(seq__96031__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(x)], 0));


var G__96198 = cljs.core.next(seq__96031__$1);
var G__96199 = null;
var G__96200 = (0);
var G__96201 = (0);
seq__96031 = G__96198;
chunk__96032 = G__96199;
count__96033 = G__96200;
i__96034 = G__96201;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Realizes, simplifies and pretty-prints `n` elements from the supplied sequence
 *   `xs`.
 */
sicmutils.util.stream.pprint = (function sicmutils$util$stream$pprint(n,xs){
var seq__96038 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,xs));
var chunk__96039 = null;
var count__96040 = (0);
var i__96041 = (0);
while(true){
if((i__96041 < count__96040)){
var x = chunk__96039.cljs$core$IIndexed$_nth$arity$2(null,i__96041);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(x));


var G__96202 = seq__96038;
var G__96203 = chunk__96039;
var G__96204 = count__96040;
var G__96205 = (i__96041 + (1));
seq__96038 = G__96202;
chunk__96039 = G__96203;
count__96040 = G__96204;
i__96041 = G__96205;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__96038);
if(temp__5753__auto__){
var seq__96038__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__96038__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__96038__$1);
var G__96206 = cljs.core.chunk_rest(seq__96038__$1);
var G__96207 = c__4679__auto__;
var G__96208 = cljs.core.count(c__4679__auto__);
var G__96209 = (0);
seq__96038 = G__96206;
chunk__96039 = G__96207;
count__96040 = G__96208;
i__96041 = G__96209;
continue;
} else {
var x = cljs.core.first(seq__96038__$1);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(x));


var G__96210 = cljs.core.next(seq__96038__$1);
var G__96211 = null;
var G__96212 = (0);
var G__96213 = (0);
seq__96038 = G__96210;
chunk__96039 = G__96211;
count__96040 = G__96212;
i__96041 = G__96213;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Returns an infinite sequence of `x * n^i`, starting with `i == 0`. `x` defaults
 *   to 1.
 */
sicmutils.util.stream.powers = (function sicmutils$util$stream$powers(var_args){
var G__96062 = arguments.length;
switch (G__96062) {
case 1:
return sicmutils.util.stream.powers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.util.stream.powers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.util.stream.powers.cljs$core$IFn$_invoke$arity$1 = (function (n){
return sicmutils.util.stream.powers.cljs$core$IFn$_invoke$arity$2(n,(1));
}));

(sicmutils.util.stream.powers.cljs$core$IFn$_invoke$arity$2 = (function (n,x){
return cljs.core.iterate((function (p1__96047_SHARP_){
return (n * p1__96047_SHARP_);
}),x);
}));

(sicmutils.util.stream.powers.cljs$lang$maxFixedArity = 2);

/**
 * Returns an infinite sequence of `x / n^i`, starting with `i == 0`. `x` defaults
 *   to 1.
 */
sicmutils.util.stream.zeno = (function sicmutils$util$stream$zeno(var_args){
var G__96076 = arguments.length;
switch (G__96076) {
case 1:
return sicmutils.util.stream.zeno.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.util.stream.zeno.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.util.stream.zeno.cljs$core$IFn$_invoke$arity$1 = (function (n){
return sicmutils.util.stream.zeno.cljs$core$IFn$_invoke$arity$2(n,(1));
}));

(sicmutils.util.stream.zeno.cljs$core$IFn$_invoke$arity$2 = (function (n,x){
return cljs.core.iterate((function (p1__96073_SHARP_){
return (p1__96073_SHARP_ / n);
}),x);
}));

(sicmutils.util.stream.zeno.cljs$lang$maxFixedArity = 2);

/**
 * Generates a new vector of length `n` by applying the function `f` to integers
 *   in the range $[0,n)$.
 */
sicmutils.util.stream.vector_COLON_generate = (function sicmutils$util$stream$vector_COLON_generate(n,f){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(f,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
});
/**
 * Returns a pair of vectors:
 * 
 *   - the first contains the items in coll for which (pred item) returns true
 *   - the second contains the items for which (pred item) returns false
 * 
 *   pred must be free of side-effects.
 */
sicmutils.util.stream.separatev = (function sicmutils$util$stream$separatev(pred,coll){
var vec__96096 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__96106,o){
var vec__96107 = p__96106;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96107,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96107,(1),null);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(o) : pred.call(null,o)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(t,o),f], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(f,o)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentVector.EMPTY)], null),coll);
var ts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96096,(0),null);
var fs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96096,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(ts),cljs.core.persistent_BANG_(fs)], null);
});
/**
 * relative closeness, transitioning to absolute closeness when we get
 *   significantly smaller than 1.
 */
sicmutils.util.stream.close_enuf_QMARK_ = (function sicmutils$util$stream$close_enuf_QMARK_(tolerance){
return (function (h1,h2){
return (sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1((h1 - h2)) <= ((0.5 * tolerance) * (((2) + sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(h1)) + sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(h2))));
});
});
/**
 * Accepts a sequence, iterates through it and returns a dictionary of this form:
 * 
 *   {:converged? <boolean>
 * :terms-checked <int>
 * :result <sequence element>}
 * 
 *   `:converged?` is true if the sequence reached convergence by passing the tests
 *   described below, false otherwise.
 * 
 *   `:terms-checked` will be equal to the number of items examined in the
 *   sequence.
 * 
 *   `:result` holds the final item examined in the sequence.
 * 
 *   ## Optional keyword args:
 * 
 *   `:convergence-fn` user-supplied function of two successive elements in `xs`
 *   that stops iteration and signals convergence if it returns true.
 * 
 *   `:minterms` `seq-limit` won't return until at least this many terms from the
 *   sequence have been processed.
 * 
 *   `:maxterms` `seq-limit` will return (with `:converged? false`) after
 *   processing this many elements without passing any other checks.
 * 
 *   `:tolerance` A combination of relative and absolute tolerance. defaults to
 *   `sqrt(machine epsilon)`.
 */
sicmutils.util.stream.seq_limit = (function sicmutils$util$stream$seq_limit(var_args){
var G__96132 = arguments.length;
switch (G__96132) {
case 1:
return sicmutils.util.stream.seq_limit.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.util.stream.seq_limit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.util.stream.seq_limit.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return sicmutils.util.stream.seq_limit.cljs$core$IFn$_invoke$arity$2(xs,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.util.stream.seq_limit.cljs$core$IFn$_invoke$arity$2 = (function (xs,p__96138){
var map__96139 = p__96138;
var map__96139__$1 = cljs.core.__destructure_map(map__96139);
var minterms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__96139__$1,new cljs.core.Keyword(null,"minterms","minterms",-1267652170),(2));
var maxterms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96139__$1,new cljs.core.Keyword(null,"maxterms","maxterms",951779603));
var tolerance = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__96139__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),sicmutils.value.sqrt_machine_epsilon);
var convergence_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__96139__$1,new cljs.core.Keyword(null,"convergence-fn","convergence-fn",-157362513),sicmutils.util.stream.close_enuf_QMARK_(tolerance));
if(cljs.core.empty_QMARK_(xs)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),false,new cljs.core.Keyword(null,"terms-checked","terms-checked",1046419519),(0),new cljs.core.Keyword(null,"result","result",1415092211),null], null);
} else {
var stop_QMARK_ = (cljs.core.truth_(maxterms)?(function (i){
return (i >= maxterms);
}):cljs.core.constantly(false));
var G__96157 = xs;
var vec__96158 = G__96157;
var seq__96159 = cljs.core.seq(vec__96158);
var first__96160 = cljs.core.first(seq__96159);
var seq__96159__$1 = cljs.core.next(seq__96159);
var x1 = first__96160;
var vec__96161 = seq__96159__$1;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96161,(0),null);
var more = vec__96161;
var terms_checked = (1);
var G__96157__$1 = G__96157;
var terms_checked__$1 = terms_checked;
while(true){
var vec__96170 = G__96157__$1;
var seq__96171 = cljs.core.seq(vec__96170);
var first__96172 = cljs.core.first(seq__96171);
var seq__96171__$1 = cljs.core.next(seq__96171);
var x1__$1 = first__96172;
var vec__96173 = seq__96171__$1;
var x2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96173,(0),null);
var more__$1 = vec__96173;
var terms_checked__$2 = terms_checked__$1;
if(cljs.core.empty_QMARK_(more__$1)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),false,new cljs.core.Keyword(null,"terms-checked","terms-checked",1046419519),terms_checked__$2,new cljs.core.Keyword(null,"result","result",1415092211),x1__$1], null);
} else {
var terms_checked__$3 = (terms_checked__$2 + (1));
var converged_QMARK_ = (convergence_fn.cljs$core$IFn$_invoke$arity$2 ? convergence_fn.cljs$core$IFn$_invoke$arity$2(x1__$1,x2__$1) : convergence_fn.call(null,x1__$1,x2__$1));
if(cljs.core.truth_((function (){var and__4251__auto__ = (terms_checked__$3 >= minterms);
if(and__4251__auto__){
var or__4253__auto__ = converged_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return stop_QMARK_(terms_checked__$3);
}
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),converged_QMARK_,new cljs.core.Keyword(null,"terms-checked","terms-checked",1046419519),terms_checked__$3,new cljs.core.Keyword(null,"result","result",1415092211),x2__$1], null);
} else {
var G__96217 = more__$1;
var G__96218 = terms_checked__$3;
G__96157__$1 = G__96217;
terms_checked__$1 = G__96218;
continue;
}
}
break;
}
}
}));

(sicmutils.util.stream.seq_limit.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sicmutils.util.stream.js.map
