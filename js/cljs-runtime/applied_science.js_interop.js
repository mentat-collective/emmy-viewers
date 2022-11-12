goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61249 = arguments.length;
var i__4865__auto___61250 = (0);
while(true){
if((i__4865__auto___61250 < len__4864__auto___61249)){
args__4870__auto__.push((arguments[i__4865__auto___61250]));

var G__61251 = (i__4865__auto___61250 + (1));
i__4865__auto___61250 = G__61251;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__61022_61252 = keyvals;
var vec__61023_61253 = G__61022_61252;
var seq__61024_61254 = cljs.core.seq(vec__61023_61253);
var first__61025_61255 = cljs.core.first(seq__61024_61254);
var seq__61024_61256__$1 = cljs.core.next(seq__61024_61254);
var k_61257 = first__61025_61255;
var first__61025_61258__$1 = cljs.core.first(seq__61024_61256__$1);
var seq__61024_61259__$2 = cljs.core.next(seq__61024_61256__$1);
var v_61260 = first__61025_61258__$1;
var keyvals_61261__$1 = seq__61024_61259__$2;
var G__61022_61262__$1 = G__61022_61252;
while(true){
var vec__61026_61263 = G__61022_61262__$1;
var seq__61027_61264 = cljs.core.seq(vec__61026_61263);
var first__61028_61265 = cljs.core.first(seq__61027_61264);
var seq__61027_61266__$1 = cljs.core.next(seq__61027_61264);
var k_61267__$1 = first__61028_61265;
var first__61028_61268__$1 = cljs.core.first(seq__61027_61266__$1);
var seq__61027_61269__$2 = cljs.core.next(seq__61027_61266__$1);
var v_61270__$1 = first__61028_61268__$1;
var keyvals_61271__$2 = seq__61027_61269__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_61267__$1)] = v_61270__$1);

if(keyvals_61271__$2){
var G__61272 = keyvals_61271__$2;
G__61022_61262__$1 = G__61272;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq61011){
var G__61012 = cljs.core.first(seq61011);
var seq61011__$1 = cljs.core.next(seq61011);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61012,seq61011__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__61040 = arguments.length;
switch (G__61040) {
case 1:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1 = (function (k){
return (function (obj){
var obj61045 = obj;
if((!((obj61045 == null)))){
return (obj61045[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj61048 = obj;
if((!((obj61048 == null)))){
return (obj61048[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__60701__auto__ = (function (){var obj61049 = obj;
if((!((obj61049 == null)))){
return (obj61049[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__60701__auto__)){
return not_found;
} else {
return val__60701__auto__;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__61054 = arguments.length;
switch (G__61054) {
case 1:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1 = (function (ks){
var ks__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks);
return (function (obj){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,ks__$1);
});
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj61067 = self__.obj;
if((!((obj61067 == null)))){
return (obj61067[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__60701__auto__ = (function (){var obj61069 = self__.obj;
if((!((obj61069 == null)))){
return (obj61069[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__60701__auto__)){
return not_found;
} else {
return val__60701__auto__;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61300 = arguments.length;
var i__4865__auto___61301 = (0);
while(true){
if((i__4865__auto___61301 < len__4864__auto___61300)){
args__4870__auto__.push((arguments[i__4865__auto___61301]));

var G__61302 = (i__4865__auto___61301 + (1));
i__4865__auto___61301 = G__61302;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__61081 = keyvals;
var vec__61084 = G__61081;
var seq__61085 = cljs.core.seq(vec__61084);
var first__61086 = cljs.core.first(seq__61085);
var seq__61085__$1 = cljs.core.next(seq__61085);
var k = first__61086;
var first__61086__$1 = cljs.core.first(seq__61085__$1);
var seq__61085__$2 = cljs.core.next(seq__61085__$1);
var v = first__61086__$1;
var kvs = seq__61085__$2;
var G__61081__$1 = G__61081;
while(true){
var vec__61089 = G__61081__$1;
var seq__61090 = cljs.core.seq(vec__61089);
var first__61091 = cljs.core.first(seq__61090);
var seq__61090__$1 = cljs.core.next(seq__61090);
var k__$1 = first__61091;
var first__61091__$1 = cljs.core.first(seq__61090__$1);
var seq__61090__$2 = cljs.core.next(seq__61090__$1);
var v__$1 = first__61091__$1;
var kvs__$1 = seq__61090__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__61329 = kvs__$1;
G__61081__$1 = G__61329;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq61075){
var G__61076 = cljs.core.first(seq61075);
var seq61075__$1 = cljs.core.next(seq61075);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61076,seq61075__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61332 = arguments.length;
var i__4865__auto___61333 = (0);
while(true){
if((i__4865__auto___61333 < len__4864__auto___61332)){
args__4870__auto__.push((arguments[i__4865__auto___61333]));

var G__61335 = (i__4865__auto___61333 + (1));
i__4865__auto___61333 = G__61335;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq61103){
var G__61105 = cljs.core.first(seq61103);
var seq61103__$1 = cljs.core.next(seq61103);
var G__61106 = cljs.core.first(seq61103__$1);
var seq61103__$2 = cljs.core.next(seq61103__$1);
var G__61107 = cljs.core.first(seq61103__$2);
var seq61103__$3 = cljs.core.next(seq61103__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61105,G__61106,G__61107,seq61103__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61344 = arguments.length;
var i__4865__auto___61345 = (0);
while(true){
if((i__4865__auto___61345 < len__4864__auto___61344)){
args__4870__auto__.push((arguments[i__4865__auto___61345]));

var G__61346 = (i__4865__auto___61345 + (1));
i__4865__auto___61345 = G__61346;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq61114){
var G__61115 = cljs.core.first(seq61114);
var seq61114__$1 = cljs.core.next(seq61114);
var G__61116 = cljs.core.first(seq61114__$1);
var seq61114__$2 = cljs.core.next(seq61114__$1);
var G__61117 = cljs.core.first(seq61114__$2);
var seq61114__$3 = cljs.core.next(seq61114__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61115,G__61116,G__61117,seq61114__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend! o other)
 *   (j/extend! o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__61133 = arguments.length;
switch (G__61133) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___61351 = arguments.length;
var i__4865__auto___61352 = (0);
while(true){
if((i__4865__auto___61352 < len__4864__auto___61351)){
args_arr__4885__auto__.push((arguments[i__4865__auto___61352]));

var G__61353 = (i__4865__auto___61352 + (1));
i__4865__auto___61352 = G__61353;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__61139_61361 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__61140_61363 = null;
var count__61141_61364 = (0);
var i__61142_61365 = (0);
while(true){
if((i__61142_61365 < count__61141_61364)){
var k_61366 = chunk__61140_61363.cljs$core$IIndexed$_nth$arity$2(null,i__61142_61365);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_61366,applied_science.js_interop.unchecked_get(x,k_61366)], 0));


var G__61367 = seq__61139_61361;
var G__61368 = chunk__61140_61363;
var G__61369 = count__61141_61364;
var G__61370 = (i__61142_61365 + (1));
seq__61139_61361 = G__61367;
chunk__61140_61363 = G__61368;
count__61141_61364 = G__61369;
i__61142_61365 = G__61370;
continue;
} else {
var temp__5753__auto___61371 = cljs.core.seq(seq__61139_61361);
if(temp__5753__auto___61371){
var seq__61139_61372__$1 = temp__5753__auto___61371;
if(cljs.core.chunked_seq_QMARK_(seq__61139_61372__$1)){
var c__4679__auto___61373 = cljs.core.chunk_first(seq__61139_61372__$1);
var G__61374 = cljs.core.chunk_rest(seq__61139_61372__$1);
var G__61375 = c__4679__auto___61373;
var G__61376 = cljs.core.count(c__4679__auto___61373);
var G__61377 = (0);
seq__61139_61361 = G__61374;
chunk__61140_61363 = G__61375;
count__61141_61364 = G__61376;
i__61142_61365 = G__61377;
continue;
} else {
var k_61378 = cljs.core.first(seq__61139_61372__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_61378,applied_science.js_interop.unchecked_get(x,k_61378)], 0));


var G__61379 = cljs.core.next(seq__61139_61372__$1);
var G__61380 = null;
var G__61381 = (0);
var G__61382 = (0);
seq__61139_61361 = G__61379;
chunk__61140_61363 = G__61380;
count__61141_61364 = G__61381;
i__61142_61365 = G__61382;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq61128){
var G__61129 = cljs.core.first(seq61128);
var seq61128__$1 = cljs.core.next(seq61128);
var G__61130 = cljs.core.first(seq61128__$1);
var seq61128__$2 = cljs.core.next(seq61128__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61129,G__61130,seq61128__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__61162 = array;
G__61162.push(x);

return G__61162;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__61163 = array;
G__61163.unshift(x);

return G__61163;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61384 = arguments.length;
var i__4865__auto___61385 = (0);
while(true){
if((i__4865__auto___61385 < len__4864__auto___61384)){
args__4870__auto__.push((arguments[i__4865__auto___61385]));

var G__61386 = (i__4865__auto___61385 + (1));
i__4865__auto___61385 = G__61386;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj61168 = obj;
if((!((obj61168 == null)))){
return (obj61168[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq61164){
var G__61165 = cljs.core.first(seq61164);
var seq61164__$1 = cljs.core.next(seq61164);
var G__61166 = cljs.core.first(seq61164__$1);
var seq61164__$2 = cljs.core.next(seq61164__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61165,G__61166,seq61164__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj61169 = obj;
if((!((obj61169 == null)))){
return (obj61169[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61387 = arguments.length;
var i__4865__auto___61388 = (0);
while(true){
if((i__4865__auto___61388 < len__4864__auto___61387)){
args__4870__auto__.push((arguments[i__4865__auto___61388]));

var G__61389 = (i__4865__auto___61388 + (1));
i__4865__auto___61388 = G__61389;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq61170){
var G__61171 = cljs.core.first(seq61170);
var seq61170__$1 = cljs.core.next(seq61170);
var G__61172 = cljs.core.first(seq61170__$1);
var seq61170__$2 = cljs.core.next(seq61170__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61171,G__61172,seq61170__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61390 = arguments.length;
var i__4865__auto___61391 = (0);
while(true){
if((i__4865__auto___61391 < len__4864__auto___61390)){
args__4870__auto__.push((arguments[i__4865__auto___61391]));

var G__61392 = (i__4865__auto___61391 + (1));
i__4865__auto___61391 = G__61392;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__61180_61393 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__61181_61394 = null;
var count__61182_61395 = (0);
var i__61183_61396 = (0);
while(true){
if((i__61183_61396 < count__61182_61395)){
var vec__61220_61397 = chunk__61181_61394.cljs$core$IIndexed$_nth$arity$2(null,i__61183_61396);
var k_61398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61220_61397,(0),null);
var v_61399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61220_61397,(1),null);
var obj61224_61400 = obj;
var obj61225_61401 = (((!((obj61224_61400 == null))))?obj61224_61400:({}));
(obj61225_61401[applied_science.js_interop.impl.wrap_key(k_61398)] = v_61399);



var G__61402 = seq__61180_61393;
var G__61403 = chunk__61181_61394;
var G__61404 = count__61182_61395;
var G__61405 = (i__61183_61396 + (1));
seq__61180_61393 = G__61402;
chunk__61181_61394 = G__61403;
count__61182_61395 = G__61404;
i__61183_61396 = G__61405;
continue;
} else {
var temp__5753__auto___61406 = cljs.core.seq(seq__61180_61393);
if(temp__5753__auto___61406){
var seq__61180_61407__$1 = temp__5753__auto___61406;
if(cljs.core.chunked_seq_QMARK_(seq__61180_61407__$1)){
var c__4679__auto___61408 = cljs.core.chunk_first(seq__61180_61407__$1);
var G__61409 = cljs.core.chunk_rest(seq__61180_61407__$1);
var G__61410 = c__4679__auto___61408;
var G__61411 = cljs.core.count(c__4679__auto___61408);
var G__61412 = (0);
seq__61180_61393 = G__61409;
chunk__61181_61394 = G__61410;
count__61182_61395 = G__61411;
i__61183_61396 = G__61412;
continue;
} else {
var vec__61230_61413 = cljs.core.first(seq__61180_61407__$1);
var k_61414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61230_61413,(0),null);
var v_61415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61230_61413,(1),null);
var obj61233_61416 = obj;
var obj61234_61417 = (((!((obj61233_61416 == null))))?obj61233_61416:({}));
(obj61234_61417[applied_science.js_interop.impl.wrap_key(k_61414)] = v_61415);



var G__61418 = cljs.core.next(seq__61180_61407__$1);
var G__61419 = null;
var G__61420 = (0);
var G__61421 = (0);
seq__61180_61393 = G__61418;
chunk__61181_61394 = G__61419;
count__61182_61395 = G__61420;
i__61183_61396 = G__61421;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq61177){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61177));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
