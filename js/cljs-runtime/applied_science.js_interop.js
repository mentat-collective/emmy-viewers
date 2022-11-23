goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4870__auto__ = [];
var len__4864__auto___84617 = arguments.length;
var i__4865__auto___84619 = (0);
while(true){
if((i__4865__auto___84619 < len__4864__auto___84617)){
args__4870__auto__.push((arguments[i__4865__auto___84619]));

var G__84620 = (i__4865__auto___84619 + (1));
i__4865__auto___84619 = G__84620;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__84282_84622 = keyvals;
var vec__84283_84623 = G__84282_84622;
var seq__84284_84624 = cljs.core.seq(vec__84283_84623);
var first__84285_84625 = cljs.core.first(seq__84284_84624);
var seq__84284_84626__$1 = cljs.core.next(seq__84284_84624);
var k_84627 = first__84285_84625;
var first__84285_84628__$1 = cljs.core.first(seq__84284_84626__$1);
var seq__84284_84629__$2 = cljs.core.next(seq__84284_84626__$1);
var v_84630 = first__84285_84628__$1;
var keyvals_84631__$1 = seq__84284_84629__$2;
var G__84282_84632__$1 = G__84282_84622;
while(true){
var vec__84288_84633 = G__84282_84632__$1;
var seq__84289_84634 = cljs.core.seq(vec__84288_84633);
var first__84290_84635 = cljs.core.first(seq__84289_84634);
var seq__84289_84636__$1 = cljs.core.next(seq__84289_84634);
var k_84637__$1 = first__84290_84635;
var first__84290_84638__$1 = cljs.core.first(seq__84289_84636__$1);
var seq__84289_84639__$2 = cljs.core.next(seq__84289_84636__$1);
var v_84640__$1 = first__84290_84638__$1;
var keyvals_84641__$2 = seq__84289_84639__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_84637__$1)] = v_84640__$1);

if(keyvals_84641__$2){
var G__84643 = keyvals_84641__$2;
G__84282_84632__$1 = G__84643;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq84271){
var G__84272 = cljs.core.first(seq84271);
var seq84271__$1 = cljs.core.next(seq84271);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84272,seq84271__$1);
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
var G__84302 = arguments.length;
switch (G__84302) {
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
var obj84303 = obj;
if((!((obj84303 == null)))){
return (obj84303[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj84304 = obj;
if((!((obj84304 == null)))){
return (obj84304[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__83900__auto__ = (function (){var obj84305 = obj;
if((!((obj84305 == null)))){
return (obj84305[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__83900__auto__)){
return not_found;
} else {
return val__83900__auto__;
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
var G__84309 = arguments.length;
switch (G__84309) {
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
var obj84313 = self__.obj;
if((!((obj84313 == null)))){
return (obj84313[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__83900__auto__ = (function (){var obj84338 = self__.obj;
if((!((obj84338 == null)))){
return (obj84338[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__83900__auto__)){
return not_found;
} else {
return val__83900__auto__;
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
var len__4864__auto___84695 = arguments.length;
var i__4865__auto___84696 = (0);
while(true){
if((i__4865__auto___84696 < len__4864__auto___84695)){
args__4870__auto__.push((arguments[i__4865__auto___84696]));

var G__84697 = (i__4865__auto___84696 + (1));
i__4865__auto___84696 = G__84697;
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
var G__84378 = keyvals;
var vec__84379 = G__84378;
var seq__84380 = cljs.core.seq(vec__84379);
var first__84381 = cljs.core.first(seq__84380);
var seq__84380__$1 = cljs.core.next(seq__84380);
var k = first__84381;
var first__84381__$1 = cljs.core.first(seq__84380__$1);
var seq__84380__$2 = cljs.core.next(seq__84380__$1);
var v = first__84381__$1;
var kvs = seq__84380__$2;
var G__84378__$1 = G__84378;
while(true){
var vec__84385 = G__84378__$1;
var seq__84386 = cljs.core.seq(vec__84385);
var first__84387 = cljs.core.first(seq__84386);
var seq__84386__$1 = cljs.core.next(seq__84386);
var k__$1 = first__84387;
var first__84387__$1 = cljs.core.first(seq__84386__$1);
var seq__84386__$2 = cljs.core.next(seq__84386__$1);
var v__$1 = first__84387__$1;
var kvs__$1 = seq__84386__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__84701 = kvs__$1;
G__84378__$1 = G__84701;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq84354){
var G__84355 = cljs.core.first(seq84354);
var seq84354__$1 = cljs.core.next(seq84354);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84355,seq84354__$1);
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
var len__4864__auto___84702 = arguments.length;
var i__4865__auto___84703 = (0);
while(true){
if((i__4865__auto___84703 < len__4864__auto___84702)){
args__4870__auto__.push((arguments[i__4865__auto___84703]));

var G__84704 = (i__4865__auto___84703 + (1));
i__4865__auto___84703 = G__84704;
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
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq84420){
var G__84421 = cljs.core.first(seq84420);
var seq84420__$1 = cljs.core.next(seq84420);
var G__84423 = cljs.core.first(seq84420__$1);
var seq84420__$2 = cljs.core.next(seq84420__$1);
var G__84424 = cljs.core.first(seq84420__$2);
var seq84420__$3 = cljs.core.next(seq84420__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84421,G__84423,G__84424,seq84420__$3);
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
var len__4864__auto___84716 = arguments.length;
var i__4865__auto___84717 = (0);
while(true){
if((i__4865__auto___84717 < len__4864__auto___84716)){
args__4870__auto__.push((arguments[i__4865__auto___84717]));

var G__84718 = (i__4865__auto___84717 + (1));
i__4865__auto___84717 = G__84718;
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
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq84433){
var G__84434 = cljs.core.first(seq84433);
var seq84433__$1 = cljs.core.next(seq84433);
var G__84435 = cljs.core.first(seq84433__$1);
var seq84433__$2 = cljs.core.next(seq84433__$1);
var G__84436 = cljs.core.first(seq84433__$2);
var seq84433__$3 = cljs.core.next(seq84433__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84434,G__84435,G__84436,seq84433__$3);
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
var G__84460 = arguments.length;
switch (G__84460) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___84722 = arguments.length;
var i__4865__auto___84723 = (0);
while(true){
if((i__4865__auto___84723 < len__4864__auto___84722)){
args_arr__4885__auto__.push((arguments[i__4865__auto___84723]));

var G__84724 = (i__4865__auto___84723 + (1));
i__4865__auto___84723 = G__84724;
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
var seq__84463_84726 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__84464_84727 = null;
var count__84465_84728 = (0);
var i__84466_84729 = (0);
while(true){
if((i__84466_84729 < count__84465_84728)){
var k_84730 = chunk__84464_84727.cljs$core$IIndexed$_nth$arity$2(null,i__84466_84729);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_84730,applied_science.js_interop.unchecked_get(x,k_84730)], 0));


var G__84731 = seq__84463_84726;
var G__84732 = chunk__84464_84727;
var G__84733 = count__84465_84728;
var G__84734 = (i__84466_84729 + (1));
seq__84463_84726 = G__84731;
chunk__84464_84727 = G__84732;
count__84465_84728 = G__84733;
i__84466_84729 = G__84734;
continue;
} else {
var temp__5753__auto___84735 = cljs.core.seq(seq__84463_84726);
if(temp__5753__auto___84735){
var seq__84463_84736__$1 = temp__5753__auto___84735;
if(cljs.core.chunked_seq_QMARK_(seq__84463_84736__$1)){
var c__4679__auto___84737 = cljs.core.chunk_first(seq__84463_84736__$1);
var G__84738 = cljs.core.chunk_rest(seq__84463_84736__$1);
var G__84739 = c__4679__auto___84737;
var G__84740 = cljs.core.count(c__4679__auto___84737);
var G__84741 = (0);
seq__84463_84726 = G__84738;
chunk__84464_84727 = G__84739;
count__84465_84728 = G__84740;
i__84466_84729 = G__84741;
continue;
} else {
var k_84743 = cljs.core.first(seq__84463_84736__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_84743,applied_science.js_interop.unchecked_get(x,k_84743)], 0));


var G__84744 = cljs.core.next(seq__84463_84736__$1);
var G__84745 = null;
var G__84746 = (0);
var G__84747 = (0);
seq__84463_84726 = G__84744;
chunk__84464_84727 = G__84745;
count__84465_84728 = G__84746;
i__84466_84729 = G__84747;
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
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq84454){
var G__84455 = cljs.core.first(seq84454);
var seq84454__$1 = cljs.core.next(seq84454);
var G__84456 = cljs.core.first(seq84454__$1);
var seq84454__$2 = cljs.core.next(seq84454__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84455,G__84456,seq84454__$2);
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
var G__84477 = array;
G__84477.push(x);

return G__84477;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__84479 = array;
G__84479.unshift(x);

return G__84479;
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
var len__4864__auto___84748 = arguments.length;
var i__4865__auto___84749 = (0);
while(true){
if((i__4865__auto___84749 < len__4864__auto___84748)){
args__4870__auto__.push((arguments[i__4865__auto___84749]));

var G__84750 = (i__4865__auto___84749 + (1));
i__4865__auto___84749 = G__84750;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj84485 = obj;
if((!((obj84485 == null)))){
return (obj84485[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq84481){
var G__84482 = cljs.core.first(seq84481);
var seq84481__$1 = cljs.core.next(seq84481);
var G__84483 = cljs.core.first(seq84481__$1);
var seq84481__$2 = cljs.core.next(seq84481__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84482,G__84483,seq84481__$2);
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
return (function (){var obj84486 = obj;
if((!((obj84486 == null)))){
return (obj84486[applied_science.js_interop.impl.wrap_key(k)]);
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
var len__4864__auto___84759 = arguments.length;
var i__4865__auto___84760 = (0);
while(true){
if((i__4865__auto___84760 < len__4864__auto___84759)){
args__4870__auto__.push((arguments[i__4865__auto___84760]));

var G__84761 = (i__4865__auto___84760 + (1));
i__4865__auto___84760 = G__84761;
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
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq84494){
var G__84495 = cljs.core.first(seq84494);
var seq84494__$1 = cljs.core.next(seq84494);
var G__84496 = cljs.core.first(seq84494__$1);
var seq84494__$2 = cljs.core.next(seq84494__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84495,G__84496,seq84494__$2);
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
var len__4864__auto___84763 = arguments.length;
var i__4865__auto___84764 = (0);
while(true){
if((i__4865__auto___84764 < len__4864__auto___84763)){
args__4870__auto__.push((arguments[i__4865__auto___84764]));

var G__84765 = (i__4865__auto___84764 + (1));
i__4865__auto___84764 = G__84765;
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
var seq__84537_84766 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__84538_84767 = null;
var count__84539_84768 = (0);
var i__84540_84769 = (0);
while(true){
if((i__84540_84769 < count__84539_84768)){
var vec__84593_84770 = chunk__84538_84767.cljs$core$IIndexed$_nth$arity$2(null,i__84540_84769);
var k_84771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84593_84770,(0),null);
var v_84772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84593_84770,(1),null);
var obj84599_84774 = obj;
var obj84603_84775 = (((!((obj84599_84774 == null))))?obj84599_84774:({}));
(obj84603_84775[applied_science.js_interop.impl.wrap_key(k_84771)] = v_84772);



var G__84776 = seq__84537_84766;
var G__84777 = chunk__84538_84767;
var G__84778 = count__84539_84768;
var G__84779 = (i__84540_84769 + (1));
seq__84537_84766 = G__84776;
chunk__84538_84767 = G__84777;
count__84539_84768 = G__84778;
i__84540_84769 = G__84779;
continue;
} else {
var temp__5753__auto___84780 = cljs.core.seq(seq__84537_84766);
if(temp__5753__auto___84780){
var seq__84537_84781__$1 = temp__5753__auto___84780;
if(cljs.core.chunked_seq_QMARK_(seq__84537_84781__$1)){
var c__4679__auto___84782 = cljs.core.chunk_first(seq__84537_84781__$1);
var G__84783 = cljs.core.chunk_rest(seq__84537_84781__$1);
var G__84784 = c__4679__auto___84782;
var G__84785 = cljs.core.count(c__4679__auto___84782);
var G__84786 = (0);
seq__84537_84766 = G__84783;
chunk__84538_84767 = G__84784;
count__84539_84768 = G__84785;
i__84540_84769 = G__84786;
continue;
} else {
var vec__84609_84787 = cljs.core.first(seq__84537_84781__$1);
var k_84788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84609_84787,(0),null);
var v_84789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84609_84787,(1),null);
var obj84612_84790 = obj;
var obj84613_84791 = (((!((obj84612_84790 == null))))?obj84612_84790:({}));
(obj84613_84791[applied_science.js_interop.impl.wrap_key(k_84788)] = v_84789);



var G__84793 = cljs.core.next(seq__84537_84781__$1);
var G__84794 = null;
var G__84795 = (0);
var G__84796 = (0);
seq__84537_84766 = G__84793;
chunk__84538_84767 = G__84794;
count__84539_84768 = G__84795;
i__84540_84769 = G__84796;
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
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq84506){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq84506));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
