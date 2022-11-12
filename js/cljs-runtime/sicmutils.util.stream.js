goog.provide('sicmutils.util.stream');
/**
 * Realizes, simplifies and prints `n` elements from the supplied sequence `xs`.
 */
sicmutils.util.stream.seq_print = (function sicmutils$util$stream$seq_print(n,xs){
var seq__80332 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,xs));
var chunk__80333 = null;
var count__80334 = (0);
var i__80335 = (0);
while(true){
if((i__80335 < count__80334)){
var x = chunk__80333.cljs$core$IIndexed$_nth$arity$2(null,i__80335);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(x)], 0));


var G__80400 = seq__80332;
var G__80401 = chunk__80333;
var G__80402 = count__80334;
var G__80403 = (i__80335 + (1));
seq__80332 = G__80400;
chunk__80333 = G__80401;
count__80334 = G__80402;
i__80335 = G__80403;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__80332);
if(temp__5753__auto__){
var seq__80332__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__80332__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__80332__$1);
var G__80404 = cljs.core.chunk_rest(seq__80332__$1);
var G__80405 = c__4679__auto__;
var G__80406 = cljs.core.count(c__4679__auto__);
var G__80407 = (0);
seq__80332 = G__80404;
chunk__80333 = G__80405;
count__80334 = G__80406;
i__80335 = G__80407;
continue;
} else {
var x = cljs.core.first(seq__80332__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(x)], 0));


var G__80411 = cljs.core.next(seq__80332__$1);
var G__80412 = null;
var G__80413 = (0);
var G__80414 = (0);
seq__80332 = G__80411;
chunk__80333 = G__80412;
count__80334 = G__80413;
i__80335 = G__80414;
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
var seq__80339 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,xs));
var chunk__80340 = null;
var count__80341 = (0);
var i__80342 = (0);
while(true){
if((i__80342 < count__80341)){
var x = chunk__80340.cljs$core$IIndexed$_nth$arity$2(null,i__80342);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(x));


var G__80415 = seq__80339;
var G__80416 = chunk__80340;
var G__80417 = count__80341;
var G__80418 = (i__80342 + (1));
seq__80339 = G__80415;
chunk__80340 = G__80416;
count__80341 = G__80417;
i__80342 = G__80418;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__80339);
if(temp__5753__auto__){
var seq__80339__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__80339__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__80339__$1);
var G__80419 = cljs.core.chunk_rest(seq__80339__$1);
var G__80420 = c__4679__auto__;
var G__80421 = cljs.core.count(c__4679__auto__);
var G__80422 = (0);
seq__80339 = G__80419;
chunk__80340 = G__80420;
count__80341 = G__80421;
i__80342 = G__80422;
continue;
} else {
var x = cljs.core.first(seq__80339__$1);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(x));


var G__80423 = cljs.core.next(seq__80339__$1);
var G__80424 = null;
var G__80425 = (0);
var G__80426 = (0);
seq__80339 = G__80423;
chunk__80340 = G__80424;
count__80341 = G__80425;
i__80342 = G__80426;
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
var G__80348 = arguments.length;
switch (G__80348) {
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
return cljs.core.iterate((function (p1__80346_SHARP_){
return (n * p1__80346_SHARP_);
}),x);
}));

(sicmutils.util.stream.powers.cljs$lang$maxFixedArity = 2);

/**
 * Returns an infinite sequence of `x / n^i`, starting with `i == 0`. `x` defaults
 *   to 1.
 */
sicmutils.util.stream.zeno = (function sicmutils$util$stream$zeno(var_args){
var G__80357 = arguments.length;
switch (G__80357) {
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
return cljs.core.iterate((function (p1__80355_SHARP_){
return (p1__80355_SHARP_ / n);
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
var vec__80364 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__80367,o){
var vec__80368 = p__80367;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80368,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80368,(1),null);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(o) : pred.call(null,o)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(t,o),f], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(f,o)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentVector.EMPTY)], null),coll);
var ts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80364,(0),null);
var fs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80364,(1),null);
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
var G__80372 = arguments.length;
switch (G__80372) {
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

(sicmutils.util.stream.seq_limit.cljs$core$IFn$_invoke$arity$2 = (function (xs,p__80373){
var map__80374 = p__80373;
var map__80374__$1 = cljs.core.__destructure_map(map__80374);
var minterms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__80374__$1,new cljs.core.Keyword(null,"minterms","minterms",-1267652170),(2));
var maxterms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80374__$1,new cljs.core.Keyword(null,"maxterms","maxterms",951779603));
var tolerance = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__80374__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),sicmutils.value.sqrt_machine_epsilon);
var convergence_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__80374__$1,new cljs.core.Keyword(null,"convergence-fn","convergence-fn",-157362513),sicmutils.util.stream.close_enuf_QMARK_(tolerance));
if(cljs.core.empty_QMARK_(xs)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),false,new cljs.core.Keyword(null,"terms-checked","terms-checked",1046419519),(0),new cljs.core.Keyword(null,"result","result",1415092211),null], null);
} else {
var stop_QMARK_ = (cljs.core.truth_(maxterms)?(function (i){
return (i >= maxterms);
}):cljs.core.constantly(false));
var G__80384 = xs;
var vec__80385 = G__80384;
var seq__80386 = cljs.core.seq(vec__80385);
var first__80387 = cljs.core.first(seq__80386);
var seq__80386__$1 = cljs.core.next(seq__80386);
var x1 = first__80387;
var vec__80388 = seq__80386__$1;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80388,(0),null);
var more = vec__80388;
var terms_checked = (1);
var G__80384__$1 = G__80384;
var terms_checked__$1 = terms_checked;
while(true){
var vec__80391 = G__80384__$1;
var seq__80392 = cljs.core.seq(vec__80391);
var first__80393 = cljs.core.first(seq__80392);
var seq__80392__$1 = cljs.core.next(seq__80392);
var x1__$1 = first__80393;
var vec__80394 = seq__80392__$1;
var x2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80394,(0),null);
var more__$1 = vec__80394;
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
var G__80443 = more__$1;
var G__80444 = terms_checked__$3;
G__80384__$1 = G__80443;
terms_checked__$1 = G__80444;
continue;
}
}
break;
}
}
}));

(sicmutils.util.stream.seq_limit.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sicmutils.util.stream.js.map
