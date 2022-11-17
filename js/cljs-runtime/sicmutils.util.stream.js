goog.provide('sicmutils.util.stream');
/**
 * Realizes, simplifies and prints `n` elements from the supplied sequence `xs`.
 */
sicmutils.util.stream.seq_print = (function sicmutils$util$stream$seq_print(n,xs){
var seq__96274 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,xs));
var chunk__96275 = null;
var count__96276 = (0);
var i__96277 = (0);
while(true){
if((i__96277 < count__96276)){
var x = chunk__96275.cljs$core$IIndexed$_nth$arity$2(null,i__96277);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(x)], 0));


var G__96388 = seq__96274;
var G__96389 = chunk__96275;
var G__96390 = count__96276;
var G__96391 = (i__96277 + (1));
seq__96274 = G__96388;
chunk__96275 = G__96389;
count__96276 = G__96390;
i__96277 = G__96391;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__96274);
if(temp__5753__auto__){
var seq__96274__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__96274__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__96274__$1);
var G__96393 = cljs.core.chunk_rest(seq__96274__$1);
var G__96394 = c__4679__auto__;
var G__96395 = cljs.core.count(c__4679__auto__);
var G__96396 = (0);
seq__96274 = G__96393;
chunk__96275 = G__96394;
count__96276 = G__96395;
i__96277 = G__96396;
continue;
} else {
var x = cljs.core.first(seq__96274__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(x)], 0));


var G__96398 = cljs.core.next(seq__96274__$1);
var G__96399 = null;
var G__96400 = (0);
var G__96401 = (0);
seq__96274 = G__96398;
chunk__96275 = G__96399;
count__96276 = G__96400;
i__96277 = G__96401;
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
var seq__96282 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,xs));
var chunk__96283 = null;
var count__96284 = (0);
var i__96285 = (0);
while(true){
if((i__96285 < count__96284)){
var x = chunk__96283.cljs$core$IIndexed$_nth$arity$2(null,i__96285);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(x));


var G__96402 = seq__96282;
var G__96403 = chunk__96283;
var G__96404 = count__96284;
var G__96405 = (i__96285 + (1));
seq__96282 = G__96402;
chunk__96283 = G__96403;
count__96284 = G__96404;
i__96285 = G__96405;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__96282);
if(temp__5753__auto__){
var seq__96282__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__96282__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__96282__$1);
var G__96406 = cljs.core.chunk_rest(seq__96282__$1);
var G__96407 = c__4679__auto__;
var G__96408 = cljs.core.count(c__4679__auto__);
var G__96409 = (0);
seq__96282 = G__96406;
chunk__96283 = G__96407;
count__96284 = G__96408;
i__96285 = G__96409;
continue;
} else {
var x = cljs.core.first(seq__96282__$1);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(x));


var G__96410 = cljs.core.next(seq__96282__$1);
var G__96411 = null;
var G__96412 = (0);
var G__96413 = (0);
seq__96282 = G__96410;
chunk__96283 = G__96411;
count__96284 = G__96412;
i__96285 = G__96413;
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
var G__96300 = arguments.length;
switch (G__96300) {
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
return cljs.core.iterate((function (p1__96296_SHARP_){
return (n * p1__96296_SHARP_);
}),x);
}));

(sicmutils.util.stream.powers.cljs$lang$maxFixedArity = 2);

/**
 * Returns an infinite sequence of `x / n^i`, starting with `i == 0`. `x` defaults
 *   to 1.
 */
sicmutils.util.stream.zeno = (function sicmutils$util$stream$zeno(var_args){
var G__96320 = arguments.length;
switch (G__96320) {
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
return cljs.core.iterate((function (p1__96314_SHARP_){
return (p1__96314_SHARP_ / n);
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
var vec__96331 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__96335,o){
var vec__96336 = p__96335;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96336,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96336,(1),null);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(o) : pred.call(null,o)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(t,o),f], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(f,o)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentVector.EMPTY)], null),coll);
var ts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96331,(0),null);
var fs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96331,(1),null);
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
var G__96349 = arguments.length;
switch (G__96349) {
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

(sicmutils.util.stream.seq_limit.cljs$core$IFn$_invoke$arity$2 = (function (xs,p__96360){
var map__96361 = p__96360;
var map__96361__$1 = cljs.core.__destructure_map(map__96361);
var minterms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__96361__$1,new cljs.core.Keyword(null,"minterms","minterms",-1267652170),(2));
var maxterms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96361__$1,new cljs.core.Keyword(null,"maxterms","maxterms",951779603));
var tolerance = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__96361__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),sicmutils.value.sqrt_machine_epsilon);
var convergence_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__96361__$1,new cljs.core.Keyword(null,"convergence-fn","convergence-fn",-157362513),sicmutils.util.stream.close_enuf_QMARK_(tolerance));
if(cljs.core.empty_QMARK_(xs)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),false,new cljs.core.Keyword(null,"terms-checked","terms-checked",1046419519),(0),new cljs.core.Keyword(null,"result","result",1415092211),null], null);
} else {
var stop_QMARK_ = (cljs.core.truth_(maxterms)?(function (i){
return (i >= maxterms);
}):cljs.core.constantly(false));
var G__96368 = xs;
var vec__96369 = G__96368;
var seq__96370 = cljs.core.seq(vec__96369);
var first__96371 = cljs.core.first(seq__96370);
var seq__96370__$1 = cljs.core.next(seq__96370);
var x1 = first__96371;
var vec__96372 = seq__96370__$1;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96372,(0),null);
var more = vec__96372;
var terms_checked = (1);
var G__96368__$1 = G__96368;
var terms_checked__$1 = terms_checked;
while(true){
var vec__96376 = G__96368__$1;
var seq__96377 = cljs.core.seq(vec__96376);
var first__96378 = cljs.core.first(seq__96377);
var seq__96377__$1 = cljs.core.next(seq__96377);
var x1__$1 = first__96378;
var vec__96379 = seq__96377__$1;
var x2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96379,(0),null);
var more__$1 = vec__96379;
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
var G__96426 = more__$1;
var G__96427 = terms_checked__$3;
G__96368__$1 = G__96426;
terms_checked__$1 = G__96427;
continue;
}
}
break;
}
}
}));

(sicmutils.util.stream.seq_limit.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sicmutils.util.stream.js.map
