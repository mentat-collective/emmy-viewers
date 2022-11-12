goog.provide('sicmutils.util');
goog.scope(function(){
  sicmutils.util.goog$module$goog$math$Long = goog.module.get('goog.math.Long');
});
/**
 * Takes a function and returns a pair of:
 * 
 *   - an atom that keeps track of fn invocation counts,
 *   - the instrumented fn
 */
sicmutils.util.counted = (function sicmutils$util$counted(var_args){
var G__77446 = arguments.length;
switch (G__77446) {
case 1:
return sicmutils.util.counted.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.util.counted.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.util.counted.cljs$core$IFn$_invoke$arity$1 = (function (f){
return sicmutils.util.counted.cljs$core$IFn$_invoke$arity$2(f,(0));
}));

(sicmutils.util.counted.cljs$core$IFn$_invoke$arity$2 = (function (f,initial_count){
var count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [count,(function (x){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(count,cljs.core.inc);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
})], null);
}));

(sicmutils.util.counted.cljs$lang$maxFixedArity = 2);

sicmutils.util.compute_sqrt = Math.sqrt;
sicmutils.util.compute_expt = Math.pow;
sicmutils.util.compute_abs = Math.abs;
sicmutils.util.biginttype = BigInt;
sicmutils.util.inttype = goog.math.Integer;
sicmutils.util.longtype = sicmutils.util.goog$module$goog$math$Long;
sicmutils.util.keyset = (function sicmutils$util$keyset(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(m));
});
/**
 * Returns a map of identical type and key set to `m`, with each value `v`
 *   transformed by the supplied function`f` into `(f v)`.
 */
sicmutils.util.map_vals = (function sicmutils$util$map_vals(f,m){
return cljs.core.reduce_kv((function (acc,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),cljs.core.empty(m),m);
});
/**
 * Returns true if s matches the regex pattern re, false otherwise.
 */
sicmutils.util.re_matches_QMARK_ = (function sicmutils$util$re_matches_QMARK_(re,s){
return re.test(s);
});
sicmutils.util.bigint = (function sicmutils$util$bigint(x){
return BigInt(x);
});
/**
 * Returns true if the supplied `x` is a `BigInt`, false otherwise.
 */
sicmutils.util.bigint_QMARK_ = (function sicmutils$util$bigint_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("bigint",goog.typeOf(x));
});
sicmutils.util.parse_bigint = (function sicmutils$util$parse_bigint(x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("sicmutils.util","bigint","sicmutils.util/bigint",-1438431697,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
sicmutils.util.biginteger = (function sicmutils$util$biginteger(x){
return BigInt(x);
});
sicmutils.util.int$ = (function sicmutils$util$int(x){
return goog.math.Integer.fromNumber(x);
});
sicmutils.util.long$ = (function sicmutils$util$long(x){
return sicmutils.util.goog$module$goog$math$Long.fromNumber(x);
});
sicmutils.util.double$ = (function sicmutils$util$double(x){
if(typeof x === 'number'){
return x;
} else {
return Number(x);
}
});
sicmutils.util.unsupported = (function sicmutils$util$unsupported(s){
throw Error(s);
});
sicmutils.util.exception = (function sicmutils$util$exception(s){
throw Error(s);
});
/**
 * Returns a string containing a randomly generated unique identifier.
 */
sicmutils.util.uuid = (function sicmutils$util$uuid(){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
});
sicmutils.util.illegal = (function sicmutils$util$illegal(s){
throw Error(s);
});
sicmutils.util.illegal_state = (function sicmutils$util$illegal_state(s){
throw Error(s);
});
sicmutils.util.arithmetic_ex = (function sicmutils$util$arithmetic_ex(s){
throw Error(s);
});
sicmutils.util.timeout_ex = (function sicmutils$util$timeout_ex(s){
throw Error(s);
});
sicmutils.util.failure_to_converge = (function sicmutils$util$failure_to_converge(s){
throw Error(s);
});

//# sourceMappingURL=sicmutils.util.js.map
