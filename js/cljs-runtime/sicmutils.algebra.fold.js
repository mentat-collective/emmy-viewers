goog.provide('sicmutils.algebra.fold');
/**
 * Fold-style function. The 2-arity merge operation adds the value `x` into the
 *   accumulating stating using [[sicmutils.generic/+]].
 * 
 *   - given 0 arguments, returns an accumulator of 0.0
 *   - given a single argument `acc`, acts as identity.
 */
sicmutils.algebra.fold.generic_sum_fold = (function sicmutils$algebra$fold$generic_sum_fold(var_args){
var G__77903 = arguments.length;
switch (G__77903) {
case 0:
return sicmutils.algebra.fold.generic_sum_fold.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sicmutils.algebra.fold.generic_sum_fold.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.algebra.fold.generic_sum_fold.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.algebra.fold.generic_sum_fold.cljs$core$IFn$_invoke$arity$0 = (function (){
return 0.0;
}));

(sicmutils.algebra.fold.generic_sum_fold.cljs$core$IFn$_invoke$arity$1 = (function (acc){
return acc;
}));

(sicmutils.algebra.fold.generic_sum_fold.cljs$core$IFn$_invoke$arity$2 = (function (acc,x){
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(acc,x);
}));

(sicmutils.algebra.fold.generic_sum_fold.cljs$lang$maxFixedArity = 2);

/**
 * Given
 * 
 *   - a 0-argument fn `init` that returns some "empty" accumulating value
 * 
 *   - a 2-argument fn `fold` of `(accumulator, x) => accumulator` responsible for
 *  merging some value `x` into the ongoing accumulation
 * 
 *   - a 1-argument fn `present` from `accumulator => final-result`
 * 
 *   Returns a function with two arities. The first arity takes a sequence `xs` and
 *   returns the result of accumulating all elements in `xs` using the functions
 *   above, then `present`ing the result.
 * 
 *   The second arity takes a transformation function `f`, an inclusive lower bound
 *   `low` and an exclusive upper bound `high` and returns the result of
 *   accumulating `(map f (range low high))`.
 * 
 *   ## Other Arities
 * 
 *   Given a single argument `fold`, `fold` is passed as each of the 0, 1 and 2
 *   arity arguments.
 * 
 *   Given `fold` and `present`, `fold` is used for the 0 and 2 arity arguments,
 *   `present` for the 1-arity argument.
 */
sicmutils.algebra.fold.fold__GT_sum_fn = (function sicmutils$algebra$fold$fold__GT_sum_fn(var_args){
var G__77905 = arguments.length;
switch (G__77905) {
case 1:
return sicmutils.algebra.fold.fold__GT_sum_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.algebra.fold.fold__GT_sum_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.algebra.fold.fold__GT_sum_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.algebra.fold.fold__GT_sum_fn.cljs$core$IFn$_invoke$arity$1 = (function (fold){
return sicmutils.algebra.fold.fold__GT_sum_fn.cljs$core$IFn$_invoke$arity$3(fold,fold,fold);
}));

(sicmutils.algebra.fold.fold__GT_sum_fn.cljs$core$IFn$_invoke$arity$2 = (function (fold,present){
return sicmutils.algebra.fold.fold__GT_sum_fn.cljs$core$IFn$_invoke$arity$3(fold,fold,present);
}));

(sicmutils.algebra.fold.fold__GT_sum_fn.cljs$core$IFn$_invoke$arity$3 = (function (init,fold,present){
return (function() {
var G__77988 = null;
var G__77988__1 = (function (xs){
var G__77906 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(fold,(init.cljs$core$IFn$_invoke$arity$0 ? init.cljs$core$IFn$_invoke$arity$0() : init.call(null)),xs);
return (present.cljs$core$IFn$_invoke$arity$1 ? present.cljs$core$IFn$_invoke$arity$1(G__77906) : present.call(null,G__77906));
});
var G__77988__3 = (function (f,low,high){
var xs = cljs.core.range.cljs$core$IFn$_invoke$arity$2(low,high);
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),fold,xs);
});
G__77988 = function(f,low,high){
switch(arguments.length){
case 1:
return G__77988__1.call(this,f);
case 3:
return G__77988__3.call(this,f,low,high);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__77988.cljs$core$IFn$_invoke$arity$1 = G__77988__1;
G__77988.cljs$core$IFn$_invoke$arity$3 = G__77988__3;
return G__77988;
})()
}));

(sicmutils.algebra.fold.fold__GT_sum_fn.cljs$lang$maxFixedArity = 3);

/**
 * Given some value `const`, returns a fold that ignores all input and returns
 *   `const` for a call to any of its arities.
 */
sicmutils.algebra.fold.constant = (function sicmutils$algebra$fold$constant(const$){
return (function() { 
var G__77991__delegate = function (_){
return const$;
};
var G__77991 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__77992__i = 0, G__77992__a = new Array(arguments.length -  0);
while (G__77992__i < G__77992__a.length) {G__77992__a[G__77992__i] = arguments[G__77992__i + 0]; ++G__77992__i;}
  _ = new cljs.core.IndexedSeq(G__77992__a,0,null);
} 
return G__77991__delegate.call(this,_);};
G__77991.cljs$lang$maxFixedArity = 0;
G__77991.cljs$lang$applyTo = (function (arglist__77993){
var _ = cljs.core.seq(arglist__77993);
return G__77991__delegate(_);
});
G__77991.cljs$core$IFn$_invoke$arity$variadic = G__77991__delegate;
return G__77991;
})()
;
});
/**
 * Given some predicate `pred`, returns a fold that counts the number of items it
 *   encounters that return true when passed to `pred`, false otherwise.
 */
sicmutils.algebra.fold.count = (function sicmutils$algebra$fold$count(var_args){
var G__77909 = arguments.length;
switch (G__77909) {
case 0:
return sicmutils.algebra.fold.count.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sicmutils.algebra.fold.count.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.algebra.fold.count.cljs$core$IFn$_invoke$arity$0 = (function (){
return sicmutils.algebra.fold.count.cljs$core$IFn$_invoke$arity$1((function (_){
return true;
}));
}));

(sicmutils.algebra.fold.count.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function() {
var G__77996 = null;
var G__77996__0 = (function (){
return (0);
});
var G__77996__1 = (function (acc){
return acc;
});
var G__77996__2 = (function (acc,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return (acc + (1));
} else {
return acc;
}
});
G__77996 = function(acc,x){
switch(arguments.length){
case 0:
return G__77996__0.call(this);
case 1:
return G__77996__1.call(this,acc);
case 2:
return G__77996__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__77996.cljs$core$IFn$_invoke$arity$0 = G__77996__0;
G__77996.cljs$core$IFn$_invoke$arity$1 = G__77996__1;
G__77996.cljs$core$IFn$_invoke$arity$2 = G__77996__2;
return G__77996;
})()
}));

(sicmutils.algebra.fold.count.cljs$lang$maxFixedArity = 1);

/**
 * Fold that stores its minimum encountered value in its accumulator, and returns
 *   it when called on to present.
 * 
 *   Accumulation initializes with `nil`.
 */
sicmutils.algebra.fold.min = (function sicmutils$algebra$fold$min(var_args){
var G__77912 = arguments.length;
switch (G__77912) {
case 0:
return sicmutils.algebra.fold.min.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sicmutils.algebra.fold.min.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.algebra.fold.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.algebra.fold.min.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(sicmutils.algebra.fold.min.cljs$core$IFn$_invoke$arity$1 = (function (acc){
return acc;
}));

(sicmutils.algebra.fold.min.cljs$core$IFn$_invoke$arity$2 = (function (acc,x){
if(cljs.core.truth_(acc)){
var x__4339__auto__ = acc;
var y__4340__auto__ = x;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
} else {
return x;
}
}));

(sicmutils.algebra.fold.min.cljs$lang$maxFixedArity = 2);

/**
 * Fold that stores its maximum encountered value in its accumulator, and returns
 *   it when called on to present.
 * 
 *   Accumulation initializes with `nil`.
 */
sicmutils.algebra.fold.max = (function sicmutils$algebra$fold$max(var_args){
var G__77917 = arguments.length;
switch (G__77917) {
case 0:
return sicmutils.algebra.fold.max.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sicmutils.algebra.fold.max.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.algebra.fold.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.algebra.fold.max.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(sicmutils.algebra.fold.max.cljs$core$IFn$_invoke$arity$1 = (function (acc){
return acc;
}));

(sicmutils.algebra.fold.max.cljs$core$IFn$_invoke$arity$2 = (function (acc,x){
if(cljs.core.truth_(acc)){
var x__4336__auto__ = acc;
var y__4337__auto__ = x;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
} else {
return x;
}
}));

(sicmutils.algebra.fold.max.cljs$lang$maxFixedArity = 2);

/**
 * Given some number of `folds`, returns a new fold with the following properties:
 * 
 *   - the accumulator is a vector of the accumulators of each input fold
 *   - each `x` is merged into each accumulator using the appropriate fold
 *   - `present` is called for every entry in the final vector
 * 
 *   Given a single `fold`, acts as identity.
 * 
 *   The no-argument call `(join)` is equivalent to `([[constant]] [])`.
 */
sicmutils.algebra.fold.join = (function sicmutils$algebra$fold$join(var_args){
var G__77924 = arguments.length;
switch (G__77924) {
case 0:
return sicmutils.algebra.fold.join.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sicmutils.algebra.fold.join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___78011 = arguments.length;
var i__4865__auto___78012 = (0);
while(true){
if((i__4865__auto___78012 < len__4864__auto___78011)){
args_arr__4885__auto__.push((arguments[i__4865__auto___78012]));

var G__78013 = (i__4865__auto___78012 + (1));
i__4865__auto___78012 = G__78013;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((1)),(0),null));
return sicmutils.algebra.fold.join.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4886__auto__);

}
});

(sicmutils.algebra.fold.join.cljs$core$IFn$_invoke$arity$0 = (function (){
return sicmutils.algebra.fold.constant(cljs.core.PersistentVector.EMPTY);
}));

(sicmutils.algebra.fold.join.cljs$core$IFn$_invoke$arity$1 = (function (fold){
return fold;
}));

(sicmutils.algebra.fold.join.cljs$core$IFn$_invoke$arity$variadic = (function (fold,folds){
var folds__$1 = cljs.core.cons(fold,folds);
return (function() {
var G__78014 = null;
var G__78014__0 = (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}),folds__$1);
});
var G__78014__1 = (function (accs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__77919_SHARP_,p2__77920_SHARP_){
return (p1__77919_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__77919_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__77920_SHARP_) : p1__77919_SHARP_.call(null,p2__77920_SHARP_));
}),folds__$1,accs);
});
var G__78014__2 = (function (accs,x){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (f,acc){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(acc,x) : f.call(null,acc,x));
}),folds__$1,accs);
});
G__78014 = function(accs,x){
switch(arguments.length){
case 0:
return G__78014__0.call(this);
case 1:
return G__78014__1.call(this,accs);
case 2:
return G__78014__2.call(this,accs,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__78014.cljs$core$IFn$_invoke$arity$0 = G__78014__0;
G__78014.cljs$core$IFn$_invoke$arity$1 = G__78014__1;
G__78014.cljs$core$IFn$_invoke$arity$2 = G__78014__2;
return G__78014;
})()
}));

/** @this {Function} */
(sicmutils.algebra.fold.join.cljs$lang$applyTo = (function (seq77922){
var G__77923 = cljs.core.first(seq77922);
var seq77922__$1 = cljs.core.next(seq77922);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77923,seq77922__$1);
}));

(sicmutils.algebra.fold.join.cljs$lang$maxFixedArity = (1));

/**
 * Given
 * 
 *   - a 0-argument fn `init` that returns some "empty" accumulating value
 * 
 *   - a 2-argument fn `fold` of `(accumulator, x) => accumulator` responsible for
 *  merging some value `x` into the ongoing accumulation
 * 
 *   - a 1-argument fn `present` from `accumulator => final-result`
 * 
 *   Returns a function with two arities. The first arity takes a sequence `xs` and
 *   returns a lazy sequence of all intermediate results of the summation. For
 *   example, given [0 1 2 3], the return sequence would be equivalent to:
 * 
 *   ```clj
 *   (def sum-fn (fold->sum-fn init fold present))
 * 
 *   [(sum-fn [0])
 * (sum-fn [0 1])
 * (sum-fn [0 1 2])
 * (sum-fn [0 1 2 3])]
 *   ```
 * 
 *   The second arity takes a transformation function `f`, an inclusive lower bound
 *   `low` and an exclusive upper bound `high` and returns a lazy sequence of all
 *   intermediate results of accumulating `(map f (range low high))`.
 * 
 *   ## Other Arities
 * 
 *   Given a single argument `fold`, `fold` is passed as each of the 0, 1 and 2
 *   arity arguments.
 * 
 *   Given `fold` and `present`, `fold` is used for the 0 and 2 arity arguments,
 *   `present` for the 1-arity argument.
 */
sicmutils.algebra.fold.fold__GT_scan_fn = (function sicmutils$algebra$fold$fold__GT_scan_fn(var_args){
var G__77932 = arguments.length;
switch (G__77932) {
case 1:
return sicmutils.algebra.fold.fold__GT_scan_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.algebra.fold.fold__GT_scan_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.algebra.fold.fold__GT_scan_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.algebra.fold.fold__GT_scan_fn.cljs$core$IFn$_invoke$arity$1 = (function (fold){
return sicmutils.algebra.fold.fold__GT_scan_fn.cljs$core$IFn$_invoke$arity$3(fold,fold,fold);
}));

(sicmutils.algebra.fold.fold__GT_scan_fn.cljs$core$IFn$_invoke$arity$2 = (function (fold,present){
return sicmutils.algebra.fold.fold__GT_scan_fn.cljs$core$IFn$_invoke$arity$3(fold,fold,present);
}));

(sicmutils.algebra.fold.fold__GT_scan_fn.cljs$core$IFn$_invoke$arity$3 = (function (init,fold,present){
return (function() {
var sicmutils$algebra$fold$scan = null;
var sicmutils$algebra$fold$scan__1 = (function (xs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(present,cljs.core.rest(cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(fold,(init.cljs$core$IFn$_invoke$arity$0 ? init.cljs$core$IFn$_invoke$arity$0() : init.call(null)),xs)));
});
var sicmutils$algebra$fold$scan__3 = (function (f,low,high){
return sicmutils$algebra$fold$scan.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.range.cljs$core$IFn$_invoke$arity$2(low,high)));
});
sicmutils$algebra$fold$scan = function(f,low,high){
switch(arguments.length){
case 1:
return sicmutils$algebra$fold$scan__1.call(this,f);
case 3:
return sicmutils$algebra$fold$scan__3.call(this,f,low,high);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sicmutils$algebra$fold$scan.cljs$core$IFn$_invoke$arity$1 = sicmutils$algebra$fold$scan__1;
sicmutils$algebra$fold$scan.cljs$core$IFn$_invoke$arity$3 = sicmutils$algebra$fold$scan__3;
return sicmutils$algebra$fold$scan;
})()
}));

(sicmutils.algebra.fold.fold__GT_scan_fn.cljs$lang$maxFixedArity = 3);

/**
 * Fold that tracks the summation of a sequence of floating point numbers, using
 *   the [Kahan summation
 *   algorithm](https://en.wikipedia.org/wiki/Kahan_summation_algorithm) for
 *   maintaining stability in the face of accumulating floating point errors.
 */
sicmutils.algebra.fold.kahan = (function sicmutils$algebra$fold$kahan(var_args){
var G__77937 = arguments.length;
switch (G__77937) {
case 0:
return sicmutils.algebra.fold.kahan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sicmutils.algebra.fold.kahan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.algebra.fold.kahan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.algebra.fold.kahan.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null);
}));

(sicmutils.algebra.fold.kahan.cljs$core$IFn$_invoke$arity$1 = (function (p__77938){
var vec__77939 = p__77938;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77939,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77939,(1),null);
return acc;
}));

(sicmutils.algebra.fold.kahan.cljs$core$IFn$_invoke$arity$2 = (function (p__77942,x){
var vec__77943 = p__77942;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77943,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77943,(1),null);
var y = (x - c);
var t = (acc + y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,((t - acc) - y)], null);
}));

(sicmutils.algebra.fold.kahan.cljs$lang$maxFixedArity = 2);

/**
 * Implements a fold that tracks the summation of a sequence of floating point
 *   numbers, using Neumaier's improvement to [[kahan]].
 * 
 *   This algorithm is more efficient than [[kahan]], handles a wider range of
 *   cases (adding in numbers larger than the current running sum, for example) and
 *   should be preferred.
 */
sicmutils.algebra.fold.kahan_babushka_neumaier = (function sicmutils$algebra$fold$kahan_babushka_neumaier(var_args){
var G__77950 = arguments.length;
switch (G__77950) {
case 0:
return sicmutils.algebra.fold.kahan_babushka_neumaier.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sicmutils.algebra.fold.kahan_babushka_neumaier.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.algebra.fold.kahan_babushka_neumaier.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.algebra.fold.kahan_babushka_neumaier.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null);
}));

(sicmutils.algebra.fold.kahan_babushka_neumaier.cljs$core$IFn$_invoke$arity$1 = (function (acc){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,acc);
}));

(sicmutils.algebra.fold.kahan_babushka_neumaier.cljs$core$IFn$_invoke$arity$2 = (function (p__77951,x){
var vec__77952 = p__77951;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77952,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77952,(1),null);
var acc_PLUS_x = (acc + x);
var delta = (((Math.abs(acc) >= Math.abs(x)))?((acc - acc_PLUS_x) + x):((x - acc_PLUS_x) + acc));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc_PLUS_x,(c + delta)], null);
}));

(sicmutils.algebra.fold.kahan_babushka_neumaier.cljs$lang$maxFixedArity = 2);

/**
 * Alias for [[kahan-babushka-neumaier]].
 */
sicmutils.algebra.fold.kbn = sicmutils.algebra.fold.kahan_babushka_neumaier;
/**
 * Implements a fold that tracks the summation of a sequence of floating point
 *   numbers, using a second-order variation of [[kahan-babushka-neumaier]].
 * 
 *   See [this Wikipedia
 *   page](https://en.wikipedia.org/wiki/Kahan_summation_algorithm#Further_enhancements)
 *   for more information.
 * 
 *   This algorithm was proposed by Klein in ['A Generalized Kahan-Babushka
 *   Summation
 *   Algorithm'](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.582.288&rep=rep1&type=pdf),
 *   along with the higher-order versions implemented by [[kbk-n]].
 */
sicmutils.algebra.fold.kahan_babushka_klein = (function sicmutils$algebra$fold$kahan_babushka_klein(var_args){
var G__77964 = arguments.length;
switch (G__77964) {
case 0:
return sicmutils.algebra.fold.kahan_babushka_klein.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sicmutils.algebra.fold.kahan_babushka_klein.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.algebra.fold.kahan_babushka_klein.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.algebra.fold.kahan_babushka_klein.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0], null);
}));

(sicmutils.algebra.fold.kahan_babushka_klein.cljs$core$IFn$_invoke$arity$1 = (function (acc){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,acc);
}));

(sicmutils.algebra.fold.kahan_babushka_klein.cljs$core$IFn$_invoke$arity$2 = (function (p__77965,x){
var vec__77966 = p__77965;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77966,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77966,(1),null);
var ccs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77966,(2),null);
var acc_PLUS_x = (acc + x);
var delta = (((Math.abs(acc) >= Math.abs(x)))?((acc - acc_PLUS_x) + x):((x - acc_PLUS_x) + acc));
var cs_PLUS_delta = (cs + delta);
var cc = (((Math.abs(cs) >= Math.abs(delta)))?((cs - cs_PLUS_delta) + delta):((delta - cs_PLUS_delta) + cs));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc_PLUS_x,cs_PLUS_delta,(ccs + cc)], null);
}));

(sicmutils.algebra.fold.kahan_babushka_klein.cljs$lang$maxFixedArity = 2);

/**
 * Takes symbolic variables for
 * 
 *   - `acc`, the accumulating term we're compensating for
 *   - `delta`, the shared symbol used for deltas
 * 
 *   and generates let-binding entries updating `acc` to `(+ acc delta)` and
 *   `delta` to the new compensation amount in `(+ acc delta)`.
 */
sicmutils.algebra.fold.klein_term = (function sicmutils$algebra$fold$klein_term(acc,delta){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"sum__77969__auto__","sum__77969__auto__",847313570,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),null,(1),null)),(new cljs.core.List(null,acc,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,delta,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,delta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("sicmutils.util.def","fork","sicmutils.util.def/fork",-182588552,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"clj","clj",-660495428),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",350096541,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("java.lang.Math","abs","java.lang.Math/abs",1272698622,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(acc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("java.lang.Math","abs","java.lang.Math/abs",1272698622,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(delta,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"cljs","cljs",1492417629),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",350096541,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".abs",".abs",1832478636,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Math","js/Math",2033291075,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,acc,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".abs",".abs",1832478636,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Math","js/Math",2033291075,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,delta,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,acc,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"sum__77969__auto__","sum__77969__auto__",847313570,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,delta,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,delta,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"sum__77969__auto__","sum__77969__auto__",847313570,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,acc,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,acc,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"sum__77969__auto__","sum__77969__auto__",847313570,null),null,(1),null))], 0)))));
});
/**
 * Given some order `n`, generates the function body of a fold implementing `n`-th
 *   order Kahan-Babushka-Klein summation.
 * 
 *   See [[kbk-n]] for more detail.
 */
sicmutils.algebra.fold.kbk_n_body = (function sicmutils$algebra$fold$kbk_n_body(n){
var syms = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((n + (1)),cljs.core.gensym));
var prefix = cljs.core.pop(syms);
var final$ = cljs.core.peek(syms);
var delta = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n + (1)),0.0))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"accs__77972__auto__","accs__77972__auto__",-1266349069,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"accs__77972__auto__","accs__77972__auto__",-1266349069,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,syms,null,(1),null)),(new cljs.core.List(null,delta,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__77971_SHARP_){
return sicmutils.algebra.fold.klein_term(p1__77971_SHARP_,delta);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix], 0)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(prefix,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),null,(1),null)),(new cljs.core.List(null,final$,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,delta,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))));
});

//# sourceMappingURL=sicmutils.algebra.fold.js.map
