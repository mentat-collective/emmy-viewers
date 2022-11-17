goog.provide('sicmutils.util.vector_set');
sicmutils.util.vector_set.empty_set = cljs.core.PersistentVector.EMPTY;
/**
 * Returns a new `vector-set`, ie, a vector with the distinct elements of the
 *   supplied sequence `xs` stored in sorted order.
 */
sicmutils.util.vector_set.make = (function sicmutils$util$vector_set$make(xs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.dedupe.cljs$core$IFn$_invoke$arity$0(),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(xs));
});
/**
 * Returns a vector-set containing all elements present in either sequence `x` and
 *   `y`.
 */
sicmutils.util.vector_set.union = (function sicmutils$util$vector_set$union(x,y){
var i = cljs.core.long$((0));
var j = cljs.core.long$((0));
var r = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var xi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(x,i,null);
var yj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(y,j,null);
if(((cljs.core.not(xi)) && (cljs.core.not(yj)))){
return cljs.core.persistent_BANG_(r);
} else {
if(cljs.core.not(xi)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.persistent_BANG_(r),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(y,j));
} else {
if(cljs.core.not(yj)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.persistent_BANG_(r),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(x,i));
} else {
if((xi < yj)){
var G__96541 = (i + (1));
var G__96542 = j;
var G__96543 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,xi);
i = G__96541;
j = G__96542;
r = G__96543;
continue;
} else {
if((xi > yj)){
var G__96544 = i;
var G__96545 = (j + (1));
var G__96546 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,yj);
i = G__96544;
j = G__96545;
r = G__96546;
continue;
} else {
var G__96551 = (i + (1));
var G__96552 = (j + (1));
var G__96553 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,xi);
i = G__96551;
j = G__96552;
r = G__96553;
continue;

}
}
}
}
}
break;
}
});
/**
 * Returns a vector-set that contains all elements present in BOTH vector-sets `x`
 *   and `y`.
 * 
 *   `x` and `y` must be vector sets, ie, sorted and containing only distinct
 *   entries.
 */
sicmutils.util.vector_set.intersection = (function sicmutils$util$vector_set$intersection(x,y){
var i = cljs.core.long$((0));
var j = cljs.core.long$((0));
var r = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var xi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(x,i,null);
var yj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(y,j,null);
if(cljs.core.not((function (){var and__4251__auto__ = xi;
if(cljs.core.truth_(and__4251__auto__)){
return yj;
} else {
return and__4251__auto__;
}
})())){
return cljs.core.persistent_BANG_(r);
} else {
if((xi < yj)){
var G__96555 = (i + (1));
var G__96556 = j;
var G__96557 = r;
i = G__96555;
j = G__96556;
r = G__96557;
continue;
} else {
if((xi > yj)){
var G__96558 = i;
var G__96559 = (j + (1));
var G__96560 = r;
i = G__96558;
j = G__96559;
r = G__96560;
continue;
} else {
var G__96561 = (i + (1));
var G__96562 = (j + (1));
var G__96563 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,xi);
i = G__96561;
j = G__96562;
r = G__96563;
continue;

}
}
}
break;
}
});
/**
 * Returns a vector-set that contains all elements present in vector-set `x` and
 *   NOT in vector-set `y`.
 * 
 *   `x` and `y` must be vector sets, ie, sorted and containing only distinct
 *   entries.
 */
sicmutils.util.vector_set.difference = (function sicmutils$util$vector_set$difference(x,y){
var i = cljs.core.long$((0));
var j = cljs.core.long$((0));
var r = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var xi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(x,i,null);
var yj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(y,j,null);
if(cljs.core.not(xi)){
return cljs.core.persistent_BANG_(r);
} else {
if(cljs.core.not(yj)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.persistent_BANG_(r),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(x,i));
} else {
if((xi < yj)){
var G__96564 = (i + (1));
var G__96565 = j;
var G__96566 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,xi);
i = G__96564;
j = G__96565;
r = G__96566;
continue;
} else {
if((xi > yj)){
var G__96567 = i;
var G__96568 = (j + (1));
var G__96569 = r;
i = G__96567;
j = G__96568;
r = G__96569;
continue;
} else {
var G__96570 = (i + (1));
var G__96571 = (j + (1));
var G__96572 = r;
i = G__96570;
j = G__96571;
r = G__96572;
continue;

}
}
}
}
break;
}
});
/**
 * Returns a vector-set that contains all elements present in vector-set `x` and
 *   vector-set `y`, but not in both.
 * 
 *   `x` and `y` must be vector sets, ie, sorted and containing only distinct
 *   entries.
 */
sicmutils.util.vector_set.symmetric_difference = (function sicmutils$util$vector_set$symmetric_difference(x,y){
var i = cljs.core.long$((0));
var j = cljs.core.long$((0));
var r = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var xi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(x,i,null);
var yj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(y,j,null);
if(cljs.core.not(xi)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.persistent_BANG_(r),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(y,j));
} else {
if(cljs.core.not(yj)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.persistent_BANG_(r),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(x,i));
} else {
if((xi < yj)){
var G__96573 = (i + (1));
var G__96574 = j;
var G__96575 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,xi);
i = G__96573;
j = G__96574;
r = G__96575;
continue;
} else {
if((xi > yj)){
var G__96576 = i;
var G__96577 = (j + (1));
var G__96578 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,yj);
i = G__96576;
j = G__96577;
r = G__96578;
continue;
} else {
var G__96579 = (i + (1));
var G__96580 = (j + (1));
var G__96581 = r;
i = G__96579;
j = G__96580;
r = G__96581;
continue;

}
}
}
}
break;
}
});
/**
 * Return true if the element `x` is present in the supplied vector `vset`, false
 *   otherwise.
 */
sicmutils.util.vector_set.contains_QMARK_ = (function sicmutils$util$vector_set$contains_QMARK_(vset,x){
return cljs.core.boolean$(cljs.core.seq(sicmutils.util.vector_set.intersection(vset,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null))));
});
/**
 * Returns a vector-set generated by inserting `x` into the appropriate position
 *   in the sorted, distinct vector-set `vset`. The invariant is that if `vset` is
 *   sorted and contains distinct elements, the return value will contain `x` and
 *   also be sorted.
 * 
 *   Attempting to insert an element `x` already contained in `vset` throws an
 *   exception.
 */
sicmutils.util.vector_set.conj = (function sicmutils$util$vector_set$conj(vset,x){
if(cljs.core.empty_QMARK_(vset)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
if((x < cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vset,(0)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),vset);
} else {
if((x > cljs.core.peek(vset))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vset,x);
} else {
var i = cljs.core.long$((0));
var r = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var xi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vset,i,null);
if(cljs.core.not(xi)){
return cljs.core.persistent_BANG_(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,x));
} else {
if((x < xi)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.persistent_BANG_(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,x)),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(vset,i));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,xi)){
return sicmutils.util.illegal(["elem ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"already present in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vset)].join(''));
} else {
var G__96582 = (i + (1));
var G__96583 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,xi);
i = G__96582;
r = G__96583;
continue;

}
}
}
break;
}

}
}
}
});
/**
 * Returns a vector-set generated by dropping `x` from the supplied vector-set
 *   `vset`. If `x` is not present in `vset`, acts as identity.
 */
sicmutils.util.vector_set.disj = (function sicmutils$util$vector_set$disj(vset,x){
if(cljs.core.empty_QMARK_(vset)){
return sicmutils.util.vector_set.empty_set;
} else {
if((((x < cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vset,(0)))) || ((x > cljs.core.peek(vset))))){
return vset;
} else {
var i = cljs.core.long$((0));
var r = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var xi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vset,i,null);
if(((cljs.core.not(xi)) || ((x < xi)))){
return cljs.core.persistent_BANG_(r);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,xi)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.persistent_BANG_(r),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(vset,(i + (1))));
} else {
var G__96584 = (i + (1));
var G__96585 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,xi);
i = G__96584;
r = G__96585;
continue;

}
}
break;
}

}
}
});

//# sourceMappingURL=sicmutils.util.vector_set.js.map
