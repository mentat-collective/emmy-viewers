goog.provide('sicmutils.calculus.coordinate');
/**
 * Returns a structure similar to the [[manifold/coordinate-prototype]] of
 *   `coordinate-system`, where every entry is a function from manifold point =>
 *   the associated component of the point in the coordinate representation
 *   described by `coordinate-system`.
 */
sicmutils.calculus.coordinate.coordinate_functions = (function sicmutils$calculus$coordinate$coordinate_functions(coordinate_system){
var prototype = sicmutils.calculus.manifold.coordinate_prototype(coordinate_system);
return sicmutils.structure.map_chain((function (coord,chain,_){
return cljs.core.with_meta((function (point){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sicmutils.calculus.manifold.point__GT_coords(coordinate_system,point),chain);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),coord], null));
}),prototype);
});
/**
 * Scmutils wants to allow forms like this:
 * 
 *   ```clojure
 *   (using-coordinates (up x y) R2-rect ...)
 *   ```
 * 
 * Note that `x`, `y` are unquoted. This function converts such an unquoted form
 *   into a quoted one that could be evaluated to return an up-tuple of the
 *   symbols:
 * 
 *   ```clojure
 *   (up 'x 'y)
 *   ```
 * 
 *   Such an object is useful for [[structure/mapr]].
 */
sicmutils.calculus.coordinate.quotify_coordinate_prototype = (function sicmutils$calculus$coordinate$quotify_coordinate_prototype(p){
var q = (function sicmutils$calculus$coordinate$quotify_coordinate_prototype_$_q(p__$1){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.sequential_QMARK_(p__$1);
if(and__4251__auto__){
var G__101465 = cljs.core.first(p__$1);
var fexpr__101464 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"down","down",-1089190199,null),"null",new cljs.core.Symbol(null,"up","up",1370819414,null),"null"], null), null);
return (fexpr__101464.cljs$core$IFn$_invoke$arity$1 ? fexpr__101464.cljs$core$IFn$_invoke$arity$1(G__101465) : fexpr__101464.call(null,G__101465));
} else {
return and__4251__auto__;
}
})())){
var s = cljs.core.first(p__$1);
var prefix = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Symbol(null,"up","up",1370819414,null)))?new cljs.core.Symbol("sicmutils.structure","up","sicmutils.structure/up",-498407412,null):new cljs.core.Symbol("sicmutils.structure","down","sicmutils.structure/down",140665603,null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,prefix,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils$calculus$coordinate$quotify_coordinate_prototype_$_q,cljs.core.rest(p__$1)))));
} else {
if(cljs.core.vector_QMARK_(p__$1)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sicmutils$calculus$coordinate$quotify_coordinate_prototype_$_q,p__$1);
} else {
if((p__$1 instanceof cljs.core.Symbol)){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,p__$1,null,(1),null)),(2),null));
} else {
return sicmutils.util.illegal("Invalid coordinate prototype");

}
}
}
});
return q(p);
});
/**
 * Generates a list of symbols from the supplied argument prototype. The
 *   prototype is allowed to be a vector, a list like `(up x y)` or a bare symbol.
 *   Anything else causes an exception.
 * 
 *   Nested structures are fine! The return value is a flat sequence.
 */
sicmutils.calculus.coordinate.symbols_from_prototype = (function sicmutils$calculus$coordinate$symbols_from_prototype(p){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.sequential_QMARK_(p);
if(and__4251__auto__){
var G__101471 = cljs.core.first(p);
var fexpr__101470 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"down","down",-1089190199,null),"null",new cljs.core.Symbol(null,"up","up",1370819414,null),"null"], null), null);
return (fexpr__101470.cljs$core$IFn$_invoke$arity$1 ? fexpr__101470.cljs$core$IFn$_invoke$arity$1(G__101471) : fexpr__101470.call(null,G__101471));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(sicmutils.calculus.coordinate.symbols_from_prototype,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(p)], 0));
} else {
if(cljs.core.vector_QMARK_(p)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(sicmutils.calculus.coordinate.symbols_from_prototype,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p], 0));
} else {
if((p instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null);
} else {
return sicmutils.util.illegal(["Invalid coordinate prototype: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join(''));

}
}
}
});

//# sourceMappingURL=sicmutils.calculus.coordinate.js.map
