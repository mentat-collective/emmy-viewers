goog.provide('sicmutils.function$');

/**
 * @interface
 */
sicmutils.function$.IArity = function(){};

var sicmutils$function$IArity$arity$dyn_96463 = (function (f){
var x__4550__auto__ = (((f == null))?null:f);
var m__4551__auto__ = (sicmutils.function$.arity[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(f) : m__4551__auto__.call(null,f));
} else {
var m__4549__auto__ = (sicmutils.function$.arity["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(f) : m__4549__auto__.call(null,f));
} else {
throw cljs.core.missing_protocol("IArity.arity",f);
}
}
});
/**
 * Return the cached or obvious arity of `f` if we know it. Otherwise
 *  delegates to heavy duty reflection.
 */
sicmutils.function$.arity = (function sicmutils$function$arity(f){
if((((!((f == null)))) && ((!((f.sicmutils$function$IArity$arity$arity$1 == null)))))){
return f.sicmutils$function$IArity$arity$arity$1(f);
} else {
return sicmutils$function$IArity$arity$dyn_96463(f);
}
});

(sicmutils.function$.IArity["_"] = true);

(sicmutils.function$.arity["_"] = (function (o){
var or__4253__auto__ = new cljs.core.Keyword(null,"arity","arity",-1808556135).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(o));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null);
}
}));

(cljs.core.Symbol.prototype.sicmutils$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.sicmutils$function$IArity$arity$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(0)], null);
}));

(cljs.core.MultiFn.prototype.sicmutils$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MultiFn.prototype.sicmutils$function$IArity$arity$arity$1 = (function (f){
var f__$1 = this;
return f__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"arity","arity",-1808556135));
}));
/**
 * Returns true if `f` is of [[v/kind]] `::v/function`, false otherwise.
 */
sicmutils.function$.function_QMARK_ = (function sicmutils$function$function_QMARK_(f){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(sicmutils.value.kind(f),new cljs.core.Keyword("sicmutils.value","function","sicmutils.value/function",-1964931037));
});
/**
 * Appends the supplied `arity` to the metadata of `f`, knocking out any
 *   pre-existing arity notation.
 * 
 *   Optionally accepts a third parameter `m` of metadata to attach to the return
 *   function, in addition to the new `:arity` key.
 */
sicmutils.function$.with_arity = (function sicmutils$function$with_arity(var_args){
var G__96228 = arguments.length;
switch (G__96228) {
case 2:
return sicmutils.function$.with_arity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.function$.with_arity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.function$.with_arity.cljs$core$IFn$_invoke$arity$2 = (function (f,arity){
return sicmutils.function$.with_arity.cljs$core$IFn$_invoke$arity$3(f,arity,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.function$.with_arity.cljs$core$IFn$_invoke$arity$3 = (function (f,arity,m){
var new_meta = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(f),m], 0)),new cljs.core.Keyword(null,"arity","arity",-1808556135),arity);
return cljs.core.with_meta(f,new_meta);
}));

(sicmutils.function$.with_arity.cljs$lang$maxFixedArity = 3);

/**
 * Arity-preserving version of `clojure.core/comp`.
 * 
 *   The arity of a composition is the arity of the rightmost (that is, first to be
 *   applied) function term in `fns`.
 */
sicmutils.function$.compose = (function sicmutils$function$compose(var_args){
var args__4870__auto__ = [];
var len__4864__auto___96465 = arguments.length;
var i__4865__auto___96467 = (0);
while(true){
if((i__4865__auto___96467 < len__4864__auto___96465)){
args__4870__auto__.push((arguments[i__4865__auto___96467]));

var G__96472 = (i__4865__auto___96467 + (1));
i__4865__auto___96467 = G__96472;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic = (function (fns){
var a = sicmutils.function$.arity((function (){var or__4253__auto__ = cljs.core.last(fns);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.identity;
}
})());
return cljs.core.with_meta(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,fns),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arity","arity",-1808556135),a], null));
}));

(sicmutils.function$.compose.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.function$.compose.cljs$lang$applyTo = (function (seq96230){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq96230));
}));

/**
 * meta-preserving version of `clojure.core/memoize`.
 * 
 *   The returned function will have a new `:arity` entry in its metadata with the
 *   `arity` of the original `f`; this is because the process used to figure out a
 *   function's arity will not work across the memoization boundary.
 */
sicmutils.function$.memoize = (function sicmutils$function$memoize(f){
var m = cljs.core.meta(f);
var m__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"arity","arity",-1808556135).cljs$core$IFn$_invoke$arity$1(m))?m:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"arity","arity",-1808556135),sicmutils.function$.arity(f)));
return cljs.core.with_meta(cljs.core.memoize(f),m__$1);
});
/**
 * For non-functions, acts like [[clojure.core/get]]. For function
 *   arguments (anything that responds true to [[function?]]), returns
 * 
 *   ```clojure
 *   (comp #(clojure.core/get % k) f)
 *   ```
 * 
 *   If `not-found` is supplied it's passed through to the
 *   composed [[clojure.core/get]].
 */
sicmutils.function$.get = (function sicmutils$function$get(var_args){
var G__96239 = arguments.length;
switch (G__96239) {
case 2:
return sicmutils.function$.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.function$.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.function$.get.cljs$core$IFn$_invoke$arity$2 = (function (f,k){
if(sicmutils.function$.function_QMARK_(f)){
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__96236_SHARP_){
return sicmutils.function$.get.cljs$core$IFn$_invoke$arity$2(p1__96236_SHARP_,k);
}),f], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(f,k);
}
}));

(sicmutils.function$.get.cljs$core$IFn$_invoke$arity$3 = (function (f,k,not_found){
if(sicmutils.function$.function_QMARK_(f)){
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__96237_SHARP_){
return sicmutils.function$.get.cljs$core$IFn$_invoke$arity$3(p1__96237_SHARP_,k,not_found);
}),f], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(f,k,not_found);
}
}));

(sicmutils.function$.get.cljs$lang$maxFixedArity = 3);

/**
 * For non-functions, acts like [[clojure.core/get-in]]. For function
 *   arguments (anything that responds true to [[function?]]), returns
 * 
 *   ```clojure
 *   (comp #(clojure.core/get-in % ks) f)
 *   ```
 * 
 *   If `not-found` is supplied it's passed through to the
 *   composed [[clojure.core/get-in]].
 */
sicmutils.function$.get_in = (function sicmutils$function$get_in(var_args){
var G__96251 = arguments.length;
switch (G__96251) {
case 2:
return sicmutils.function$.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.function$.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.function$.get_in.cljs$core$IFn$_invoke$arity$2 = (function (f,ks){
if(sicmutils.function$.function_QMARK_(f)){
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__96246_SHARP_){
return sicmutils.function$.get_in.cljs$core$IFn$_invoke$arity$2(p1__96246_SHARP_,ks);
}),f], 0));
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(f,ks);
}
}));

(sicmutils.function$.get_in.cljs$core$IFn$_invoke$arity$3 = (function (f,ks,not_found){
if(sicmutils.function$.function_QMARK_(f)){
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__96247_SHARP_){
return sicmutils.function$.get_in.cljs$core$IFn$_invoke$arity$3(p1__96247_SHARP_,ks,not_found);
}),f], 0));
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(f,ks,not_found);
}
}));

(sicmutils.function$.get_in.cljs$lang$maxFixedArity = 3);

sicmutils.function$.zero_like = (function sicmutils$function$zero_like(f){
var meta = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),sicmutils.function$.arity(f),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"zero-like","zero-like",1759410522)], null);
return cljs.core.with_meta((function() { 
var G__96476__delegate = function (args){
return sicmutils.value.zero_like(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args));
};
var G__96476 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__96477__i = 0, G__96477__a = new Array(arguments.length -  0);
while (G__96477__i < G__96477__a.length) {G__96477__a[G__96477__i] = arguments[G__96477__i + 0]; ++G__96477__i;}
  args = new cljs.core.IndexedSeq(G__96477__a,0,null);
} 
return G__96476__delegate.call(this,args);};
G__96476.cljs$lang$maxFixedArity = 0;
G__96476.cljs$lang$applyTo = (function (arglist__96478){
var args = cljs.core.seq(arglist__96478);
return G__96476__delegate(args);
});
G__96476.cljs$core$IFn$_invoke$arity$variadic = G__96476__delegate;
return G__96476;
})()
,meta);
});
sicmutils.function$.one_like = (function sicmutils$function$one_like(f){
var meta = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),sicmutils.function$.arity(f),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"one-like","one-like",887133720)], null);
return cljs.core.with_meta((function() { 
var G__96479__delegate = function (args){
return sicmutils.value.one_like(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args));
};
var G__96479 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__96480__i = 0, G__96480__a = new Array(arguments.length -  0);
while (G__96480__i < G__96480__a.length) {G__96480__a[G__96480__i] = arguments[G__96480__i + 0]; ++G__96480__i;}
  args = new cljs.core.IndexedSeq(G__96480__a,0,null);
} 
return G__96479__delegate.call(this,args);};
G__96479.cljs$lang$maxFixedArity = 0;
G__96479.cljs$lang$applyTo = (function (arglist__96481){
var args = cljs.core.seq(arglist__96481);
return G__96479__delegate(args);
});
G__96479.cljs$core$IFn$_invoke$arity$variadic = G__96479__delegate;
return G__96479;
})()
,meta);
});
/**
 * Identity function. Returns its argument.
 */
sicmutils.function$.I = cljs.core.identity;
sicmutils.function$.identity_like = (function sicmutils$function$identity_like(f){
var meta = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),sicmutils.function$.arity(f),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"identity-like","identity-like",-98546347)], null);
return cljs.core.with_meta(cljs.core.identity,meta);
});
/**
 * Takes a function `f` and a sequence of `shifts`, and returns a new function
 *   that adds each shift to the corresponding argument of `f`. Too many or two few
 *   shifts are ignored.
 * 
 *   ```clojure
 *   ((arg-shift square 3) 4) ==> 49
 *   ((arg-shift square 3 2 1) 4) ==> 49
 *   ```
 */
sicmutils.function$.arg_shift = (function sicmutils$function$arg_shift(var_args){
var args__4870__auto__ = [];
var len__4864__auto___96482 = arguments.length;
var i__4865__auto___96484 = (0);
while(true){
if((i__4865__auto___96484 < len__4864__auto___96482)){
args__4870__auto__.push((arguments[i__4865__auto___96484]));

var G__96489 = (i__4865__auto___96484 + (1));
i__4865__auto___96484 = G__96489;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sicmutils.function$.arg_shift.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sicmutils.function$.arg_shift.cljs$core$IFn$_invoke$arity$variadic = (function (f,shifts){
var shifts__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(shifts,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0)));
return cljs.core.with_meta((function() { 
var G__96491__delegate = function (xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$3(sicmutils.generic._PLUS_,xs,shifts__$1));
};
var G__96491 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__96492__i = 0, G__96492__a = new Array(arguments.length -  0);
while (G__96492__i < G__96492__a.length) {G__96492__a[G__96492__i] = arguments[G__96492__i + 0]; ++G__96492__i;}
  xs = new cljs.core.IndexedSeq(G__96492__a,0,null);
} 
return G__96491__delegate.call(this,xs);};
G__96491.cljs$lang$maxFixedArity = 0;
G__96491.cljs$lang$applyTo = (function (arglist__96493){
var xs = cljs.core.seq(arglist__96493);
return G__96491__delegate(xs);
});
G__96491.cljs$core$IFn$_invoke$arity$variadic = G__96491__delegate;
return G__96491;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arity","arity",-1808556135),sicmutils.function$.arity(f)], null));
}));

(sicmutils.function$.arg_shift.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sicmutils.function$.arg_shift.cljs$lang$applyTo = (function (seq96263){
var G__96264 = cljs.core.first(seq96263);
var seq96263__$1 = cljs.core.next(seq96263);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__96264,seq96263__$1);
}));

/**
 * Takes a function `f` and a sequence of `factors`, and returns a new function
 *   that multiplies each factor by the corresponding argument of `f`. Too many or
 *   two few factors are ignored.
 * 
 *   ```clojure
 *   ((arg-scale square 3) 4) ==> 144
 *   ((arg-scale square 3 2 1) 4) ==> 144
 *   ```
 */
sicmutils.function$.arg_scale = (function sicmutils$function$arg_scale(var_args){
var args__4870__auto__ = [];
var len__4864__auto___96494 = arguments.length;
var i__4865__auto___96495 = (0);
while(true){
if((i__4865__auto___96495 < len__4864__auto___96494)){
args__4870__auto__.push((arguments[i__4865__auto___96495]));

var G__96496 = (i__4865__auto___96495 + (1));
i__4865__auto___96495 = G__96496;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sicmutils.function$.arg_scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sicmutils.function$.arg_scale.cljs$core$IFn$_invoke$arity$variadic = (function (f,factors){
var factors__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(factors,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((1)));
return cljs.core.with_meta((function() { 
var G__96497__delegate = function (xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$3(sicmutils.generic._STAR_,xs,factors__$1));
};
var G__96497 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__96498__i = 0, G__96498__a = new Array(arguments.length -  0);
while (G__96498__i < G__96498__a.length) {G__96498__a[G__96498__i] = arguments[G__96498__i + 0]; ++G__96498__i;}
  xs = new cljs.core.IndexedSeq(G__96498__a,0,null);
} 
return G__96497__delegate.call(this,xs);};
G__96497.cljs$lang$maxFixedArity = 0;
G__96497.cljs$lang$applyTo = (function (arglist__96499){
var xs = cljs.core.seq(arglist__96499);
return G__96497__delegate(xs);
});
G__96497.cljs$core$IFn$_invoke$arity$variadic = G__96497__delegate;
return G__96497;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arity","arity",-1808556135),sicmutils.function$.arity(f)], null));
}));

(sicmutils.function$.arg_scale.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sicmutils.function$.arg_scale.cljs$lang$applyTo = (function (seq96265){
var G__96266 = cljs.core.first(seq96265);
var seq96265__$1 = cljs.core.next(seq96265);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__96266,seq96265__$1);
}));

(cljs.core.MultiFn.prototype.sicmutils$value$Value$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MultiFn.prototype.sicmutils$value$Value$zero_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return false;
}));

(cljs.core.MultiFn.prototype.sicmutils$value$Value$one_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return false;
}));

(cljs.core.MultiFn.prototype.sicmutils$value$Value$identity_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return false;
}));

(cljs.core.MultiFn.prototype.sicmutils$value$Value$zero_like$arity$1 = (function (f){
var f__$1 = this;
return sicmutils.function$.zero_like(f__$1);
}));

(cljs.core.MultiFn.prototype.sicmutils$value$Value$one_like$arity$1 = (function (f){
var f__$1 = this;
return sicmutils.function$.one_like(f__$1);
}));

(cljs.core.MultiFn.prototype.sicmutils$value$Value$identity_like$arity$1 = (function (f){
var f__$1 = this;
return sicmutils.function$.identity_like(f__$1);
}));

(cljs.core.MultiFn.prototype.sicmutils$value$Value$exact_QMARK_$arity$1 = (function (f){
var f__$1 = this;
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.value.exact_QMARK_,f__$1], 0));
}));

(cljs.core.MultiFn.prototype.sicmutils$value$Value$freeze$arity$1 = (function (f){
var f__$1 = this;
var temp__5751__auto__ = cljs.core.get_method(f__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null));
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177)) : m.call(null,new cljs.core.Keyword(null,"name","name",1843675177)));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(sicmutils.value.object_name_map),f__$1,f__$1);
}
}));

(cljs.core.MultiFn.prototype.sicmutils$value$Value$kind$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword("sicmutils.value","function","sicmutils.value/function",-1964931037);
}));

(sicmutils.value.Value["function"] = true);

(sicmutils.value.zero_QMARK_["function"] = (function (_){
return false;
}));

(sicmutils.value.one_QMARK_["function"] = (function (_){
return false;
}));

(sicmutils.value.identity_QMARK_["function"] = (function (_){
return false;
}));

(sicmutils.value.zero_like["function"] = (function (f){
return sicmutils.function$.zero_like(f);
}));

(sicmutils.value.one_like["function"] = (function (f){
return sicmutils.function$.one_like(f);
}));

(sicmutils.value.identity_like["function"] = (function (f){
return sicmutils.function$.identity_like(f);
}));

(sicmutils.value.exact_QMARK_["function"] = (function (f){
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.value.exact_QMARK_,f], 0));
}));

(sicmutils.value.freeze["function"] = (function (f){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(sicmutils.value.object_name_map),f,f);
}));

(sicmutils.value.kind["function"] = (function (_){
return new cljs.core.Keyword("sicmutils.value","function","sicmutils.value/function",-1964931037);
}));

(cljs.core.Var.prototype.sicmutils$value$Value$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Var.prototype.sicmutils$value$Value$zero_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return false;
}));

(cljs.core.Var.prototype.sicmutils$value$Value$one_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return false;
}));

(cljs.core.Var.prototype.sicmutils$value$Value$identity_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return false;
}));

(cljs.core.Var.prototype.sicmutils$value$Value$zero_like$arity$1 = (function (f){
var f__$1 = this;
return sicmutils.function$.zero_like(f__$1);
}));

(cljs.core.Var.prototype.sicmutils$value$Value$one_like$arity$1 = (function (f){
var f__$1 = this;
return sicmutils.function$.one_like(f__$1);
}));

(cljs.core.Var.prototype.sicmutils$value$Value$identity_like$arity$1 = (function (f){
var f__$1 = this;
return sicmutils.function$.identity_like(f__$1);
}));

(cljs.core.Var.prototype.sicmutils$value$Value$exact_QMARK_$arity$1 = (function (f){
var f__$1 = this;
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.value.exact_QMARK_,f__$1], 0));
}));

(cljs.core.Var.prototype.sicmutils$value$Value$freeze$arity$1 = (function (f){
var f__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(sicmutils.value.object_name_map),cljs.core.deref(f__$1),f__$1);
}));

(cljs.core.Var.prototype.sicmutils$value$Value$kind$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword("sicmutils.value","function","sicmutils.value/function",-1964931037);
}));

(cljs.core.MetaFn.prototype.sicmutils$value$Value$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MetaFn.prototype.sicmutils$value$Value$zero_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return false;
}));

(cljs.core.MetaFn.prototype.sicmutils$value$Value$one_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return false;
}));

(cljs.core.MetaFn.prototype.sicmutils$value$Value$identity_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return false;
}));

(cljs.core.MetaFn.prototype.sicmutils$value$Value$zero_like$arity$1 = (function (f){
var f__$1 = this;
return sicmutils.function$.zero_like(f__$1);
}));

(cljs.core.MetaFn.prototype.sicmutils$value$Value$one_like$arity$1 = (function (f){
var f__$1 = this;
return sicmutils.function$.one_like(f__$1);
}));

(cljs.core.MetaFn.prototype.sicmutils$value$Value$identity_like$arity$1 = (function (f){
var f__$1 = this;
return sicmutils.function$.identity_like(f__$1);
}));

(cljs.core.MetaFn.prototype.sicmutils$value$Value$exact_QMARK_$arity$1 = (function (f){
var f__$1 = this;
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.value.exact_QMARK_,f__$1], 0));
}));

(cljs.core.MetaFn.prototype.sicmutils$value$Value$freeze$arity$1 = (function (f){
var f__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(sicmutils.value.object_name_map),f__$1,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(f__$1.meta,f__$1));
}));

(cljs.core.MetaFn.prototype.sicmutils$value$Value$kind$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword("sicmutils.value","function","sicmutils.value/function",-1964931037);
}));
/**
 * Returns true if the supplied function is variadic, false otherwise.
 */
sicmutils.function$.variadic_QMARK_ = (function sicmutils$function$variadic_QMARK_(f){
return cljs.core.boolean$(f.cljs$core$IFn$_invoke$arity$variadic);
});

/**
 * When CLJS functions have different arities, the function is represented as a js
 *   object with each arity storied under its own key.
 */
sicmutils.function$.exposed_arities = (function sicmutils$function$exposed_arities(f){
var pattern__$1 = cljs.core.re_pattern(/invoke\$arity\$\d+/);
var parse = (function (s){
var temp__5753__auto__ = cljs.core.re_find(pattern__$1,s);
if(cljs.core.truth_(temp__5753__auto__)){
var arity = temp__5753__auto__;
return parseInt(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(arity,(13)));
} else {
return null;
}
});
var arities = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.cljs$lang$maxFixedArity], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(parse,cljs.core.js_keys(f)))));
if(cljs.core.empty_QMARK_(arities)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.length], null);
} else {
return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(arities);
}
});

/**
 * Returns a data structure indicating the arity of the supplied function.
 */
sicmutils.function$.js_arity = (function sicmutils$function$js_arity(f){
var arities = sicmutils.function$.exposed_arities(f);
if(sicmutils.function$.variadic_QMARK_(f)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3)], null),arities)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"at-least","at-least",267196846),cljs.core.first(arities)], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),cljs.core.first(arities)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),cljs.core.first(arities),cljs.core.last(arities)], null);

}
}
});
/**
 * Returns the arity of the function f. Computing arities of clojure
 *   functions is a bit complicated. It involves reflection, so the results are
 *   definitely worth memoizing.
 */
sicmutils.function$.reflect_on_arity = cljs.core.memoize(sicmutils.function$.js_arity);
/**
 * If true, attempting to pass two functions of incompatible arity
 *   into any binary function, or into [[combine-arities]], will throw. False by
 *   default.
 */
sicmutils.function$._STAR_strict_arity_checks_STAR_ = false;
(sicmutils.function$.IArity["function"] = true);

(sicmutils.function$.arity["function"] = (function (f){
return sicmutils.function$.reflect_on_arity(f);
}));

(cljs.core.MetaFn.prototype.sicmutils$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MetaFn.prototype.sicmutils$function$IArity$arity$arity$1 = (function (f){
var f__$1 = this;
return new cljs.core.Keyword(null,"arity","arity",-1808556135).cljs$core$IFn$_invoke$arity$2(cljs.core.meta(f__$1),sicmutils.function$.reflect_on_arity(f__$1));
}));
/**
 * Returns the joint arity of arities `a` and `b`.
 * 
 *   The joint arity is the loosest possible arity specification compatible with
 *   both `a` and `b`. Throws if `a` and `b` are incompatible.
 */
sicmutils.function$.combine_arities = (function sicmutils$function$combine_arities(var_args){
var G__96279 = arguments.length;
switch (G__96279) {
case 0:
return sicmutils.function$.combine_arities.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sicmutils.function$.combine_arities.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.function$.combine_arities.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.function$.combine_arities.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"at-least","at-least",267196846),(0)], null);
}));

(sicmutils.function$.combine_arities.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(sicmutils.function$.combine_arities.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var fail = (function sicmutils$function$fail(){
if(cljs.core.truth_(sicmutils.function$._STAR_strict_arity_checks_STAR_)){
return sicmutils.util.illegal(["Incompatible arities: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"at-least","at-least",267196846),(0)], null);
}
});
if((cljs.core.compare(cljs.core.first(a),cljs.core.first(b)) > (0))){
return sicmutils.function$.combine_arities.cljs$core$IFn$_invoke$arity$2(b,a);
} else {
try{if(((cljs.core.vector_QMARK_(a)) && ((cljs.core.count(a) === 2)))){
try{var a_0__96294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(0));
if(cljs.core.keyword_identical_QMARK_(a_0__96294,new cljs.core.Keyword(null,"at-least","at-least",267196846))){
try{if(((cljs.core.vector_QMARK_(b)) && ((cljs.core.count(b) === 2)))){
try{var b_0__96297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(0));
if(cljs.core.keyword_identical_QMARK_(b_0__96297,new cljs.core.Keyword(null,"at-least","at-least",267196846))){
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(1));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"at-least","at-least",267196846),(function (){var x__4336__auto__ = k;
var y__4337__auto__ = k2;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})()], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e96415){if((e96415 instanceof Error)){
var e__18676__auto__ = e96415;
if((e__18676__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto__;
}
} else {
throw e96415;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e96382){if((e96382 instanceof Error)){
var e__18676__auto__ = e96382;
if((e__18676__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(b)) && ((cljs.core.count(b) === 3)))){
try{var b_0__96301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(0));
if(cljs.core.keyword_identical_QMARK_(b_0__96301,new cljs.core.Keyword(null,"between","between",1131099276))){
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(1));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(2));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(1));
var m__$1 = (function (){var x__4336__auto__ = k;
var y__4337__auto__ = m;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m__$1,n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),m__$1], null);
} else {
if((m__$1 < n)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),m__$1,n], null);
} else {
return fail();

}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e96392){if((e96392 instanceof Error)){
var e__18676__auto____$1 = e96392;
if((e__18676__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$1;
}
} else {
throw e96392;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e96383){if((e96383 instanceof Error)){
var e__18676__auto____$1 = e96383;
if((e__18676__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(b)) && ((cljs.core.count(b) === 2)))){
try{var b_0__96304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(0));
if(cljs.core.keyword_identical_QMARK_(b_0__96304,new cljs.core.Keyword(null,"exactly","exactly",1304099233))){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(1));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(1));
if((l >= k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),l], null);
} else {
return fail();
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e96386){if((e96386 instanceof Error)){
var e__18676__auto____$2 = e96386;
if((e__18676__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$2;
}
} else {
throw e96386;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e96384){if((e96384 instanceof Error)){
var e__18676__auto____$2 = e96384;
if((e__18676__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$2;
}
} else {
throw e96384;

}
}} else {
throw e__18676__auto____$1;
}
} else {
throw e96383;

}
}} else {
throw e__18676__auto__;
}
} else {
throw e96382;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e96375){if((e96375 instanceof Error)){
var e__18676__auto__ = e96375;
if((e__18676__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto__;
}
} else {
throw e96375;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e96327){if((e96327 instanceof Error)){
var e__18676__auto__ = e96327;
if((e__18676__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(a)) && ((cljs.core.count(a) === 3)))){
try{var a_0__96306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(0));
if(cljs.core.keyword_identical_QMARK_(a_0__96306,new cljs.core.Keyword(null,"between","between",1131099276))){
try{if(((cljs.core.vector_QMARK_(b)) && ((cljs.core.count(b) === 3)))){
try{var b_0__96309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(0));
if(cljs.core.keyword_identical_QMARK_(b_0__96309,new cljs.core.Keyword(null,"between","between",1131099276))){
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(1));
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(2));
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(1));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(2));
var m__$1 = (function (){var x__4336__auto__ = m;
var y__4337__auto__ = m2;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var n__$1 = (function (){var x__4339__auto__ = n;
var y__4340__auto__ = n2;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m__$1,n__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),m__$1], null);
} else {
if((m__$1 < n__$1)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),m__$1,n__$1], null);
} else {
return fail();

}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e96359){if((e96359 instanceof Error)){
var e__18676__auto____$1 = e96359;
if((e__18676__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$1;
}
} else {
throw e96359;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e96344){if((e96344 instanceof Error)){
var e__18676__auto____$1 = e96344;
if((e__18676__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(b)) && ((cljs.core.count(b) === 2)))){
try{var b_0__96312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(0));
if(cljs.core.keyword_identical_QMARK_(b_0__96312,new cljs.core.Keyword(null,"exactly","exactly",1304099233))){
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(1));
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(1));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(2));
if((((m <= k)) && ((k <= n)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),k], null);
} else {
return fail();
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e96346){if((e96346 instanceof Error)){
var e__18676__auto____$2 = e96346;
if((e__18676__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$2;
}
} else {
throw e96346;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e96345){if((e96345 instanceof Error)){
var e__18676__auto____$2 = e96345;
if((e__18676__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$2;
}
} else {
throw e96345;

}
}} else {
throw e__18676__auto____$1;
}
} else {
throw e96344;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e96340){if((e96340 instanceof Error)){
var e__18676__auto____$1 = e96340;
if((e__18676__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$1;
}
} else {
throw e96340;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e96328){if((e96328 instanceof Error)){
var e__18676__auto____$1 = e96328;
if((e__18676__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(a)) && ((cljs.core.count(a) === 2)))){
try{var a_0__96315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(0));
if(cljs.core.keyword_identical_QMARK_(a_0__96315,new cljs.core.Keyword(null,"exactly","exactly",1304099233))){
try{if(((cljs.core.vector_QMARK_(b)) && ((cljs.core.count(b) === 2)))){
try{var b_0__96318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(0));
if(cljs.core.keyword_identical_QMARK_(b_0__96318,new cljs.core.Keyword(null,"exactly","exactly",1304099233))){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(1));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,l)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),k], null);
} else {
return fail();
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e96339){if((e96339 instanceof Error)){
var e__18676__auto____$2 = e96339;
if((e__18676__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$2;
}
} else {
throw e96339;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e96334){if((e96334 instanceof Error)){
var e__18676__auto____$2 = e96334;
if((e__18676__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$2;
}
} else {
throw e96334;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e96330){if((e96330 instanceof Error)){
var e__18676__auto____$2 = e96330;
if((e__18676__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18676__auto____$2;
}
} else {
throw e96330;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e96329){if((e96329 instanceof Error)){
var e__18676__auto____$2 = e96329;
if((e__18676__auto____$2 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('')));
} else {
throw e__18676__auto____$2;
}
} else {
throw e96329;

}
}} else {
throw e__18676__auto____$1;
}
} else {
throw e96328;

}
}} else {
throw e__18676__auto__;
}
} else {
throw e96327;

}
}}
}));

(sicmutils.function$.combine_arities.cljs$lang$maxFixedArity = 2);

/**
 * Find the most relaxed possible statement of the joint arity of the given sequence of `arities`.
 *   If they are incompatible, an exception is thrown.
 */
sicmutils.function$.joint_arity = (function sicmutils$function$joint_arity(arities){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(sicmutils.function$.combine_arities,arities);
});
/**
 * Returns the most general arity compatible with the aritiies of all entries in
 *   the supplied sequence `xs` of values.
 */
sicmutils.function$.seq_arity = (function sicmutils$function$seq_arity(xs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(sicmutils.function$.arity),sicmutils.function$.combine_arities,xs);
});
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.function","cofunction","sicmutils.function/cofunction",-547124902));
/**
 * For a unary function `f` (like [[g/sqrt]]), returns a function of one function
 *   `g`. The returned function acts like `(comp f g)`. For example:
 * 
 *   ```clojure
 *   (([[unary-operation]] f) g)
 *   ;;=> (fn [x] (f (g x)))
 *   ```
 */
sicmutils.function$.unary_operation = (function sicmutils$function$unary_operation(f){
return cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,f),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null)], null));
});
/**
 * Given a [[value/numerical?]] input `x`, returns a function of arity `arity`
 *   that always returns `x` no matter what input it receives.
 * 
 *   For non-numerical `x`, returns `x`.
 */
sicmutils.function$.coerce_to_fn = (function sicmutils$function$coerce_to_fn(x,arity){
if(sicmutils.value.numerical_QMARK_(x)){
return cljs.core.with_meta(cljs.core.constantly(x),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arity","arity",-1808556135),arity], null));
} else {
return x;
}
});
/**
 * Accepts a binary function `op`, and returns a function of two functions `f` and
 *   `g` which will produce the pointwise operation `op` of the results of applying
 *   both `f` and `g` to the input.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (([[binary-operation]] op) f g)
 *   ;;=> (fn [x] (op (f x) (g x)))
 *   ```
 */
sicmutils.function$.binary_operation = (function sicmutils$function$binary_operation(op){
var h = (function sicmutils$function$binary_operation_$_h(f,g){
var f_arity = ((sicmutils.value.numerical_QMARK_(f))?sicmutils.function$.arity(g):sicmutils.function$.arity(f));
var g_arity = ((sicmutils.value.numerical_QMARK_(g))?f_arity:sicmutils.function$.arity(g));
var f1 = sicmutils.function$.coerce_to_fn(f,f_arity);
var g1 = sicmutils.function$.coerce_to_fn(g,g_arity);
var arity = sicmutils.function$.joint_arity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f_arity,g_arity], null));
return cljs.core.with_meta((function() { 
var G__96514__delegate = function (args){
var G__96434 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f1,args);
var G__96435 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(g1,args);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__96434,G__96435) : op.call(null,G__96434,G__96435));
};
var G__96514 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__96518__i = 0, G__96518__a = new Array(arguments.length -  0);
while (G__96518__i < G__96518__a.length) {G__96518__a[G__96518__i] = arguments[G__96518__i + 0]; ++G__96518__i;}
  args = new cljs.core.IndexedSeq(G__96518__a,0,null);
} 
return G__96514__delegate.call(this,args);};
G__96514.cljs$lang$maxFixedArity = 0;
G__96514.cljs$lang$applyTo = (function (arglist__96519){
var args = cljs.core.seq(arglist__96519);
return G__96514__delegate(args);
});
G__96514.cljs$core$IFn$_invoke$arity$variadic = G__96514__delegate;
return G__96514;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arity","arity",-1808556135),arity], null));
});
return cljs.core.with_meta(h,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null)], null));
});
/**
 * Given a generic unary function `generic-op`, define the multimethods necessary
 *   to introduce this operation to function arguments.
 */
sicmutils.function$.defunary = (function sicmutils$function$defunary(generic_op){
var unary_op = sicmutils.function$.unary_operation(generic_op);
return generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","function","sicmutils.value/function",-1964931037)], null),(function (a){
return (unary_op.cljs$core$IFn$_invoke$arity$1 ? unary_op.cljs$core$IFn$_invoke$arity$1(a) : unary_op.call(null,a));
}));
});
/**
 * Given a generic binary function `generic-op` (and an optional `binary-op` to
 *   perform the work), define the multimethods necessary to introduce this
 *   operation to function arguments.
 */
sicmutils.function$.defbinary = (function sicmutils$function$defbinary(var_args){
var G__96441 = arguments.length;
switch (G__96441) {
case 1:
return sicmutils.function$.defbinary.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.function$.defbinary.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.function$.defbinary.cljs$core$IFn$_invoke$arity$1 = (function (generic_op){
return sicmutils.function$.defbinary.cljs$core$IFn$_invoke$arity$2(generic_op,generic_op);
}));

(sicmutils.function$.defbinary.cljs$core$IFn$_invoke$arity$2 = (function (generic_op,binary_op){
var binop = sicmutils.function$.binary_operation(binary_op);
var seq__96442 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","function","sicmutils.value/function",-1964931037),new cljs.core.Keyword("sicmutils.value","function","sicmutils.value/function",-1964931037)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","function","sicmutils.value/function",-1964931037),new cljs.core.Keyword("sicmutils.function","cofunction","sicmutils.function/cofunction",-547124902)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.function","cofunction","sicmutils.function/cofunction",-547124902),new cljs.core.Keyword("sicmutils.value","function","sicmutils.value/function",-1964931037)], null)], null));
var chunk__96443 = null;
var count__96444 = (0);
var i__96445 = (0);
while(true){
if((i__96445 < count__96444)){
var signature = chunk__96443.cljs$core$IIndexed$_nth$arity$2(null,i__96445);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,signature,((function (seq__96442,chunk__96443,count__96444,i__96445,signature,binop){
return (function (a,b){
return (binop.cljs$core$IFn$_invoke$arity$2 ? binop.cljs$core$IFn$_invoke$arity$2(a,b) : binop.call(null,a,b));
});})(seq__96442,chunk__96443,count__96444,i__96445,signature,binop))
);


var G__96527 = seq__96442;
var G__96528 = chunk__96443;
var G__96529 = count__96444;
var G__96530 = (i__96445 + (1));
seq__96442 = G__96527;
chunk__96443 = G__96528;
count__96444 = G__96529;
i__96445 = G__96530;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__96442);
if(temp__5753__auto__){
var seq__96442__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__96442__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__96442__$1);
var G__96531 = cljs.core.chunk_rest(seq__96442__$1);
var G__96532 = c__4679__auto__;
var G__96533 = cljs.core.count(c__4679__auto__);
var G__96534 = (0);
seq__96442 = G__96531;
chunk__96443 = G__96532;
count__96444 = G__96533;
i__96445 = G__96534;
continue;
} else {
var signature = cljs.core.first(seq__96442__$1);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,signature,((function (seq__96442,chunk__96443,count__96444,i__96445,signature,seq__96442__$1,temp__5753__auto__,binop){
return (function (a,b){
return (binop.cljs$core$IFn$_invoke$arity$2 ? binop.cljs$core$IFn$_invoke$arity$2(a,b) : binop.call(null,a,b));
});})(seq__96442,chunk__96443,count__96444,i__96445,signature,seq__96442__$1,temp__5753__auto__,binop))
);


var G__96535 = cljs.core.next(seq__96442__$1);
var G__96536 = null;
var G__96537 = (0);
var G__96538 = (0);
seq__96442 = G__96535;
chunk__96443 = G__96536;
count__96444 = G__96537;
i__96445 = G__96538;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sicmutils.function$.defbinary.cljs$lang$maxFixedArity = 2);

sicmutils.function$.defbinary.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.add,sicmutils.generic._PLUS_);
sicmutils.function$.defbinary.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sub,sicmutils.generic._);
sicmutils.function$.defbinary.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.mul,sicmutils.generic._STAR_);
sicmutils.function$.defunary(sicmutils.generic.invert);
sicmutils.function$.defbinary.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.div,sicmutils.generic.divide);
sicmutils.function$.defbinary.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.expt);
sicmutils.function$.defunary(sicmutils.generic.sqrt);
sicmutils.function$.defunary(sicmutils.generic.negate);
sicmutils.function$.defunary(sicmutils.generic.negative_QMARK_);
sicmutils.function$.defunary(sicmutils.generic.abs);
sicmutils.function$.defunary(sicmutils.generic.floor);
sicmutils.function$.defunary(sicmutils.generic.ceiling);
sicmutils.function$.defunary(sicmutils.generic.integer_part);
sicmutils.function$.defunary(sicmutils.generic.fractional_part);
sicmutils.function$.defbinary.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.quotient);
sicmutils.function$.defbinary.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.remainder);
sicmutils.function$.defbinary.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.modulo);
sicmutils.function$.defunary(sicmutils.generic.sin);
sicmutils.function$.defunary(sicmutils.generic.cos);
sicmutils.function$.defunary(sicmutils.generic.tan);
sicmutils.function$.defunary(sicmutils.generic.asin);
sicmutils.function$.defunary(sicmutils.generic.acos);
sicmutils.function$.defunary(sicmutils.generic.atan);
sicmutils.function$.defbinary.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.atan);
sicmutils.function$.defunary(sicmutils.generic.sinh);
sicmutils.function$.defunary(sicmutils.generic.cosh);
sicmutils.function$.defunary(sicmutils.generic.tanh);
sicmutils.function$.defunary(sicmutils.generic.square);
sicmutils.function$.defunary(sicmutils.generic.cube);
sicmutils.function$.defunary(sicmutils.generic.exp);
sicmutils.function$.defunary(sicmutils.generic.log);
sicmutils.generic.transpose.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","function","sicmutils.value/function",-1964931037)], null),(function (f){
return (function (g){
return (function (a){
var G__96456 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__96456) : g.call(null,G__96456));
});
});
}));
sicmutils.function$.defunary(sicmutils.generic.determinant);
sicmutils.function$.defunary(sicmutils.generic.trace);
sicmutils.function$.defbinary.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.gcd);
sicmutils.function$.defbinary.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.lcm);
sicmutils.function$.defbinary.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.exact_divide);
sicmutils.function$.defbinary.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.solve_linear);
sicmutils.function$.defbinary.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.solve_linear_right);
sicmutils.function$.defunary(sicmutils.generic.dimension);
sicmutils.function$.defbinary.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.dot_product);
sicmutils.function$.defbinary.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.inner_product);
sicmutils.function$.defbinary.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.outer_product);
sicmutils.function$.defbinary.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.cross_product);
sicmutils.function$.defbinary.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.make_rectangular);
sicmutils.function$.defbinary.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.make_polar);
sicmutils.function$.defunary(sicmutils.generic.real_part);
sicmutils.function$.defunary(sicmutils.generic.imag_part);
sicmutils.function$.defunary(sicmutils.generic.magnitude);
sicmutils.function$.defunary(sicmutils.generic.angle);
sicmutils.function$.defunary(sicmutils.generic.conjugate);

//# sourceMappingURL=sicmutils.function.js.map
