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
var G__96226 = (i + (1));
var G__96227 = j;
var G__96228 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,xi);
i = G__96226;
j = G__96227;
r = G__96228;
continue;
} else {
if((xi > yj)){
var G__96229 = i;
var G__96230 = (j + (1));
var G__96231 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,yj);
i = G__96229;
j = G__96230;
r = G__96231;
continue;
} else {
var G__96232 = (i + (1));
var G__96233 = (j + (1));
var G__96234 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,xi);
i = G__96232;
j = G__96233;
r = G__96234;
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
var G__96237 = (i + (1));
var G__96238 = j;
var G__96239 = r;
i = G__96237;
j = G__96238;
r = G__96239;
continue;
} else {
if((xi > yj)){
var G__96240 = i;
var G__96241 = (j + (1));
var G__96242 = r;
i = G__96240;
j = G__96241;
r = G__96242;
continue;
} else {
var G__96243 = (i + (1));
var G__96244 = (j + (1));
var G__96245 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,xi);
i = G__96243;
j = G__96244;
r = G__96245;
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
var G__96246 = (i + (1));
var G__96247 = j;
var G__96248 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,xi);
i = G__96246;
j = G__96247;
r = G__96248;
continue;
} else {
if((xi > yj)){
var G__96249 = i;
var G__96250 = (j + (1));
var G__96251 = r;
i = G__96249;
j = G__96250;
r = G__96251;
continue;
} else {
var G__96252 = (i + (1));
var G__96253 = (j + (1));
var G__96254 = r;
i = G__96252;
j = G__96253;
r = G__96254;
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
var G__96256 = (i + (1));
var G__96257 = j;
var G__96258 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,xi);
i = G__96256;
j = G__96257;
r = G__96258;
continue;
} else {
if((xi > yj)){
var G__96260 = i;
var G__96261 = (j + (1));
var G__96262 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,yj);
i = G__96260;
j = G__96261;
r = G__96262;
continue;
} else {
var G__96263 = (i + (1));
var G__96264 = (j + (1));
var G__96265 = r;
i = G__96263;
j = G__96264;
r = G__96265;
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
var G__96266 = (i + (1));
var G__96267 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,xi);
i = G__96266;
r = G__96267;
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
var G__96268 = (i + (1));
var G__96269 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,xi);
i = G__96268;
r = G__96269;
continue;

}
}
break;
}

}
}
});

//# sourceMappingURL=sicmutils.util.vector_set.js.map
