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
var G__80502 = (i + (1));
var G__80503 = j;
var G__80504 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,xi);
i = G__80502;
j = G__80503;
r = G__80504;
continue;
} else {
if((xi > yj)){
var G__80505 = i;
var G__80506 = (j + (1));
var G__80507 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,yj);
i = G__80505;
j = G__80506;
r = G__80507;
continue;
} else {
var G__80508 = (i + (1));
var G__80509 = (j + (1));
var G__80510 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,xi);
i = G__80508;
j = G__80509;
r = G__80510;
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
var G__80511 = (i + (1));
var G__80512 = j;
var G__80513 = r;
i = G__80511;
j = G__80512;
r = G__80513;
continue;
} else {
if((xi > yj)){
var G__80514 = i;
var G__80515 = (j + (1));
var G__80516 = r;
i = G__80514;
j = G__80515;
r = G__80516;
continue;
} else {
var G__80517 = (i + (1));
var G__80518 = (j + (1));
var G__80519 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,xi);
i = G__80517;
j = G__80518;
r = G__80519;
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
var G__80522 = (i + (1));
var G__80523 = j;
var G__80524 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,xi);
i = G__80522;
j = G__80523;
r = G__80524;
continue;
} else {
if((xi > yj)){
var G__80525 = i;
var G__80526 = (j + (1));
var G__80527 = r;
i = G__80525;
j = G__80526;
r = G__80527;
continue;
} else {
var G__80528 = (i + (1));
var G__80529 = (j + (1));
var G__80530 = r;
i = G__80528;
j = G__80529;
r = G__80530;
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
var G__80535 = (i + (1));
var G__80536 = j;
var G__80537 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,xi);
i = G__80535;
j = G__80536;
r = G__80537;
continue;
} else {
if((xi > yj)){
var G__80538 = i;
var G__80539 = (j + (1));
var G__80540 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,yj);
i = G__80538;
j = G__80539;
r = G__80540;
continue;
} else {
var G__80541 = (i + (1));
var G__80542 = (j + (1));
var G__80543 = r;
i = G__80541;
j = G__80542;
r = G__80543;
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
var G__80546 = (i + (1));
var G__80547 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,xi);
i = G__80546;
r = G__80547;
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
var G__80548 = (i + (1));
var G__80549 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,xi);
i = G__80548;
r = G__80549;
continue;

}
}
break;
}

}
}
});

//# sourceMappingURL=sicmutils.util.vector_set.js.map
