goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4870__auto__ = [];
var len__4864__auto___84043 = arguments.length;
var i__4865__auto___84046 = (0);
while(true){
if((i__4865__auto___84046 < len__4864__auto___84043)){
args__4870__auto__.push((arguments[i__4865__auto___84046]));

var G__84047 = (i__4865__auto___84046 + (1));
i__4865__auto___84046 = G__84047;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__83855_84048 = keyvals;
var vec__83856_84049 = G__83855_84048;
var seq__83857_84050 = cljs.core.seq(vec__83856_84049);
var first__83858_84051 = cljs.core.first(seq__83857_84050);
var seq__83857_84052__$1 = cljs.core.next(seq__83857_84050);
var k_84053 = first__83858_84051;
var first__83858_84054__$1 = cljs.core.first(seq__83857_84052__$1);
var seq__83857_84055__$2 = cljs.core.next(seq__83857_84052__$1);
var v_84056 = first__83858_84054__$1;
var keyvals_84057__$1 = seq__83857_84055__$2;
var G__83855_84059__$1 = G__83855_84048;
while(true){
var vec__83859_84061 = G__83855_84059__$1;
var seq__83860_84062 = cljs.core.seq(vec__83859_84061);
var first__83861_84063 = cljs.core.first(seq__83860_84062);
var seq__83860_84064__$1 = cljs.core.next(seq__83860_84062);
var k_84065__$1 = first__83861_84063;
var first__83861_84066__$1 = cljs.core.first(seq__83860_84064__$1);
var seq__83860_84067__$2 = cljs.core.next(seq__83860_84064__$1);
var v_84068__$1 = first__83861_84066__$1;
var keyvals_84069__$2 = seq__83860_84067__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_84065__$1)] = v_84068__$1);

if(keyvals_84069__$2){
var G__84091 = keyvals_84069__$2;
G__83855_84059__$1 = G__84091;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq83848){
var G__83849 = cljs.core.first(seq83848);
var seq83848__$1 = cljs.core.next(seq83848);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__83849,seq83848__$1);
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
var G__83863 = arguments.length;
switch (G__83863) {
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
var obj83864 = obj;
if((!((obj83864 == null)))){
return (obj83864[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj83865 = obj;
if((!((obj83865 == null)))){
return (obj83865[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__83515__auto__ = (function (){var obj83866 = obj;
if((!((obj83866 == null)))){
return (obj83866[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__83515__auto__)){
return not_found;
} else {
return val__83515__auto__;
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
var G__83871 = arguments.length;
switch (G__83871) {
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
var obj83874 = self__.obj;
if((!((obj83874 == null)))){
return (obj83874[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__83515__auto__ = (function (){var obj83876 = self__.obj;
if((!((obj83876 == null)))){
return (obj83876[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__83515__auto__)){
return not_found;
} else {
return val__83515__auto__;
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
var len__4864__auto___84138 = arguments.length;
var i__4865__auto___84140 = (0);
while(true){
if((i__4865__auto___84140 < len__4864__auto___84138)){
args__4870__auto__.push((arguments[i__4865__auto___84140]));

var G__84148 = (i__4865__auto___84140 + (1));
i__4865__auto___84140 = G__84148;
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
var G__83894 = keyvals;
var vec__83895 = G__83894;
var seq__83896 = cljs.core.seq(vec__83895);
var first__83897 = cljs.core.first(seq__83896);
var seq__83896__$1 = cljs.core.next(seq__83896);
var k = first__83897;
var first__83897__$1 = cljs.core.first(seq__83896__$1);
var seq__83896__$2 = cljs.core.next(seq__83896__$1);
var v = first__83897__$1;
var kvs = seq__83896__$2;
var G__83894__$1 = G__83894;
while(true){
var vec__83898 = G__83894__$1;
var seq__83899 = cljs.core.seq(vec__83898);
var first__83900 = cljs.core.first(seq__83899);
var seq__83899__$1 = cljs.core.next(seq__83899);
var k__$1 = first__83900;
var first__83900__$1 = cljs.core.first(seq__83899__$1);
var seq__83899__$2 = cljs.core.next(seq__83899__$1);
var v__$1 = first__83900__$1;
var kvs__$1 = seq__83899__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__84154 = kvs__$1;
G__83894__$1 = G__84154;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq83882){
var G__83883 = cljs.core.first(seq83882);
var seq83882__$1 = cljs.core.next(seq83882);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__83883,seq83882__$1);
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
var len__4864__auto___84155 = arguments.length;
var i__4865__auto___84156 = (0);
while(true){
if((i__4865__auto___84156 < len__4864__auto___84155)){
args__4870__auto__.push((arguments[i__4865__auto___84156]));

var G__84157 = (i__4865__auto___84156 + (1));
i__4865__auto___84156 = G__84157;
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
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq83901){
var G__83902 = cljs.core.first(seq83901);
var seq83901__$1 = cljs.core.next(seq83901);
var G__83903 = cljs.core.first(seq83901__$1);
var seq83901__$2 = cljs.core.next(seq83901__$1);
var G__83904 = cljs.core.first(seq83901__$2);
var seq83901__$3 = cljs.core.next(seq83901__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__83902,G__83903,G__83904,seq83901__$3);
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
var len__4864__auto___84160 = arguments.length;
var i__4865__auto___84161 = (0);
while(true){
if((i__4865__auto___84161 < len__4864__auto___84160)){
args__4870__auto__.push((arguments[i__4865__auto___84161]));

var G__84162 = (i__4865__auto___84161 + (1));
i__4865__auto___84161 = G__84162;
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
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq83929){
var G__83930 = cljs.core.first(seq83929);
var seq83929__$1 = cljs.core.next(seq83929);
var G__83931 = cljs.core.first(seq83929__$1);
var seq83929__$2 = cljs.core.next(seq83929__$1);
var G__83932 = cljs.core.first(seq83929__$2);
var seq83929__$3 = cljs.core.next(seq83929__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__83930,G__83931,G__83932,seq83929__$3);
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
var G__83956 = arguments.length;
switch (G__83956) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___84165 = arguments.length;
var i__4865__auto___84166 = (0);
while(true){
if((i__4865__auto___84166 < len__4864__auto___84165)){
args_arr__4885__auto__.push((arguments[i__4865__auto___84166]));

var G__84176 = (i__4865__auto___84166 + (1));
i__4865__auto___84166 = G__84176;
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
var seq__83959_84181 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__83960_84182 = null;
var count__83961_84183 = (0);
var i__83962_84184 = (0);
while(true){
if((i__83962_84184 < count__83961_84183)){
var k_84185 = chunk__83960_84182.cljs$core$IIndexed$_nth$arity$2(null,i__83962_84184);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_84185,applied_science.js_interop.unchecked_get(x,k_84185)], 0));


var G__84187 = seq__83959_84181;
var G__84188 = chunk__83960_84182;
var G__84189 = count__83961_84183;
var G__84190 = (i__83962_84184 + (1));
seq__83959_84181 = G__84187;
chunk__83960_84182 = G__84188;
count__83961_84183 = G__84189;
i__83962_84184 = G__84190;
continue;
} else {
var temp__5753__auto___84193 = cljs.core.seq(seq__83959_84181);
if(temp__5753__auto___84193){
var seq__83959_84194__$1 = temp__5753__auto___84193;
if(cljs.core.chunked_seq_QMARK_(seq__83959_84194__$1)){
var c__4679__auto___84195 = cljs.core.chunk_first(seq__83959_84194__$1);
var G__84196 = cljs.core.chunk_rest(seq__83959_84194__$1);
var G__84197 = c__4679__auto___84195;
var G__84198 = cljs.core.count(c__4679__auto___84195);
var G__84199 = (0);
seq__83959_84181 = G__84196;
chunk__83960_84182 = G__84197;
count__83961_84183 = G__84198;
i__83962_84184 = G__84199;
continue;
} else {
var k_84200 = cljs.core.first(seq__83959_84194__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_84200,applied_science.js_interop.unchecked_get(x,k_84200)], 0));


var G__84201 = cljs.core.next(seq__83959_84194__$1);
var G__84202 = null;
var G__84203 = (0);
var G__84204 = (0);
seq__83959_84181 = G__84201;
chunk__83960_84182 = G__84202;
count__83961_84183 = G__84203;
i__83962_84184 = G__84204;
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
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq83953){
var G__83954 = cljs.core.first(seq83953);
var seq83953__$1 = cljs.core.next(seq83953);
var G__83955 = cljs.core.first(seq83953__$1);
var seq83953__$2 = cljs.core.next(seq83953__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__83954,G__83955,seq83953__$2);
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
var G__83965 = array;
G__83965.push(x);

return G__83965;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__83966 = array;
G__83966.unshift(x);

return G__83966;
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
var len__4864__auto___84216 = arguments.length;
var i__4865__auto___84217 = (0);
while(true){
if((i__4865__auto___84217 < len__4864__auto___84216)){
args__4870__auto__.push((arguments[i__4865__auto___84217]));

var G__84218 = (i__4865__auto___84217 + (1));
i__4865__auto___84217 = G__84218;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj83972 = obj;
if((!((obj83972 == null)))){
return (obj83972[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq83968){
var G__83969 = cljs.core.first(seq83968);
var seq83968__$1 = cljs.core.next(seq83968);
var G__83970 = cljs.core.first(seq83968__$1);
var seq83968__$2 = cljs.core.next(seq83968__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__83969,G__83970,seq83968__$2);
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
return (function (){var obj83975 = obj;
if((!((obj83975 == null)))){
return (obj83975[applied_science.js_interop.impl.wrap_key(k)]);
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
var len__4864__auto___84220 = arguments.length;
var i__4865__auto___84221 = (0);
while(true){
if((i__4865__auto___84221 < len__4864__auto___84220)){
args__4870__auto__.push((arguments[i__4865__auto___84221]));

var G__84228 = (i__4865__auto___84221 + (1));
i__4865__auto___84221 = G__84228;
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
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq83977){
var G__83978 = cljs.core.first(seq83977);
var seq83977__$1 = cljs.core.next(seq83977);
var G__83979 = cljs.core.first(seq83977__$1);
var seq83977__$2 = cljs.core.next(seq83977__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__83978,G__83979,seq83977__$2);
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
var len__4864__auto___84245 = arguments.length;
var i__4865__auto___84246 = (0);
while(true){
if((i__4865__auto___84246 < len__4864__auto___84245)){
args__4870__auto__.push((arguments[i__4865__auto___84246]));

var G__84247 = (i__4865__auto___84246 + (1));
i__4865__auto___84246 = G__84247;
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
var seq__83994_84253 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__83995_84254 = null;
var count__83996_84255 = (0);
var i__83997_84256 = (0);
while(true){
if((i__83997_84256 < count__83996_84255)){
var vec__84021_84258 = chunk__83995_84254.cljs$core$IIndexed$_nth$arity$2(null,i__83997_84256);
var k_84259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84021_84258,(0),null);
var v_84260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84021_84258,(1),null);
var obj84024_84261 = obj;
var obj84025_84262 = (((!((obj84024_84261 == null))))?obj84024_84261:({}));
(obj84025_84262[applied_science.js_interop.impl.wrap_key(k_84259)] = v_84260);



var G__84263 = seq__83994_84253;
var G__84264 = chunk__83995_84254;
var G__84265 = count__83996_84255;
var G__84266 = (i__83997_84256 + (1));
seq__83994_84253 = G__84263;
chunk__83995_84254 = G__84264;
count__83996_84255 = G__84265;
i__83997_84256 = G__84266;
continue;
} else {
var temp__5753__auto___84267 = cljs.core.seq(seq__83994_84253);
if(temp__5753__auto___84267){
var seq__83994_84269__$1 = temp__5753__auto___84267;
if(cljs.core.chunked_seq_QMARK_(seq__83994_84269__$1)){
var c__4679__auto___84270 = cljs.core.chunk_first(seq__83994_84269__$1);
var G__84271 = cljs.core.chunk_rest(seq__83994_84269__$1);
var G__84272 = c__4679__auto___84270;
var G__84273 = cljs.core.count(c__4679__auto___84270);
var G__84274 = (0);
seq__83994_84253 = G__84271;
chunk__83995_84254 = G__84272;
count__83996_84255 = G__84273;
i__83997_84256 = G__84274;
continue;
} else {
var vec__84030_84281 = cljs.core.first(seq__83994_84269__$1);
var k_84282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84030_84281,(0),null);
var v_84283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84030_84281,(1),null);
var obj84033_84288 = obj;
var obj84034_84289 = (((!((obj84033_84288 == null))))?obj84033_84288:({}));
(obj84034_84289[applied_science.js_interop.impl.wrap_key(k_84282)] = v_84283);



var G__84291 = cljs.core.next(seq__83994_84269__$1);
var G__84292 = null;
var G__84293 = (0);
var G__84294 = (0);
seq__83994_84253 = G__84291;
chunk__83995_84254 = G__84292;
count__83996_84255 = G__84293;
i__83997_84256 = G__84294;
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
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq83991){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq83991));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
