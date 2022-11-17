goog.provide('sicmutils.calculus.hodge_star');
sicmutils.calculus.hodge_star.Gram_Schmidt = (function sicmutils$calculus$hodge_star$Gram_Schmidt(vector_basis,metric){
var make_positive = (function sicmutils$calculus$hodge_star$Gram_Schmidt_$_make_positive(x){
return sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x));
});
var normalize = (function sicmutils$calculus$hodge_star$Gram_Schmidt_$_normalize(v){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(make_positive((metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(v,v) : metric.call(null,v,v))))),v);
});
var vects = cljs.core.flatten(vector_basis);
var e0 = normalize(cljs.core.first(vects));
var ins = cljs.core.rest(vects);
var outs = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e0], null);
while(true){
if(cljs.core.empty_QMARK_(ins)){
return sicmutils.structure.down_STAR_(outs);
} else {
var G__101632 = cljs.core.rest(ins);
var G__101633 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(outs,normalize(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(cljs.core.first(ins),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ins,outs,vects,e0){
return (function (outv){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var G__101620 = cljs.core.first(ins);
var G__101621 = outv;
return (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(G__101620,G__101621) : metric.call(null,G__101620,G__101621));
})(),outv);
});})(ins,outs,vects,e0))
,outs)))));
ins = G__101632;
outs = G__101633;
continue;
}
break;
}
});
sicmutils.calculus.hodge_star.orthonormalize = (function sicmutils$calculus$hodge_star$orthonormalize(basis,metric,coordinate_system){
var ovb = sicmutils.calculus.hodge_star.Gram_Schmidt(sicmutils.calculus.basis.basis__GT_vector_basis(basis),metric);
return sicmutils.calculus.basis.make_basis(ovb,sicmutils.calculus.basis.vector_basis__GT_dual(ovb,coordinate_system));
});
/**
 * Returns a new list containing all elements in `l1` not present in `l2`.
 *   Duplicates are allowed in the return value.
 */
sicmutils.calculus.hodge_star.list_difference = (function sicmutils$calculus$hodge_star$list_difference(l1,l2){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,l2),l1);
});
/**
 * Takes a `metric` and a `spec` and returns the [Hodge star
 *   operator](https://en.wikipedia.org/wiki/Hodge_star_operator) (actually just a
 *   function, but I suspect this should be a proper operator!)
 * 
 *   `spec` may be:
 * 
 *   - a coordinate system with an orthonormal basis
 *   - an orthonormal basis
 *   - a basis
 * 
 *   if the spec is a basis that needs to be orthonormalized, the optional
 *   `:orthonormalize?` keyword argument must be a coordinate system.
 */
sicmutils.calculus.hodge_star.Hodge_star = (function sicmutils$calculus$hodge_star$Hodge_star(var_args){
var args__4870__auto__ = [];
var len__4864__auto___101637 = arguments.length;
var i__4865__auto___101638 = (0);
while(true){
if((i__4865__auto___101638 < len__4864__auto___101637)){
args__4870__auto__.push((arguments[i__4865__auto___101638]));

var G__101639 = (i__4865__auto___101638 + (1));
i__4865__auto___101638 = G__101639;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sicmutils.calculus.hodge_star.Hodge_star.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sicmutils.calculus.hodge_star.Hodge_star.cljs$core$IFn$_invoke$arity$variadic = (function (metric,spec,p__101629){
var map__101630 = p__101629;
var map__101630__$1 = cljs.core.__destructure_map(map__101630);
var orthonormalize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__101630__$1,new cljs.core.Keyword(null,"orthonormalize?","orthonormalize?",-11872752),false);
var basis = ((sicmutils.calculus.basis.basis_QMARK_(spec))?(cljs.core.truth_(orthonormalize_QMARK_)?sicmutils.calculus.hodge_star.orthonormalize(spec,metric,orthonormalize_QMARK_):spec):(cljs.core.truth_(orthonormalize_QMARK_)?sicmutils.calculus.hodge_star.orthonormalize(sicmutils.calculus.basis.coordinate_system__GT_basis(spec),metric,spec):sicmutils.calculus.basis.coordinate_system__GT_basis(spec)));
var on_vector_basis = cljs.core.flatten(sicmutils.calculus.basis.basis__GT_vector_basis(basis));
var on_oneform_basis = cljs.core.flatten(sicmutils.calculus.basis.basis__GT_oneform_basis(basis));
var basis_check = sicmutils.matrix.by_rows_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ei){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ej){
return (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(ei,ej) : metric.call(null,ei,ej));
}),on_vector_basis);
}),on_vector_basis));
var bsigns = sicmutils.matrix.diagonal(basis_check);
return (function sicmutils$calculus$hodge_star$the_star(pform_field){
if(((sicmutils.function$.function_QMARK_(pform_field)) || (sicmutils.calculus.form_field.form_field_QMARK_(pform_field)))){
} else {
throw (new Error("Assert failed: (or (f/function? pform-field) (ff/form-field? pform-field))"));
}

var p = sicmutils.calculus.form_field.get_rank(pform_field);
if((p === (0))){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(pform_field,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.calculus.form_field.wedge,on_oneform_basis));
} else {
var pvect_basis_lists = sicmutils.util.permute.combinations(on_vector_basis,p);
var coeffs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (pvect){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pform_field,pvect);
}),pvect_basis_lists);
var pform_basis_lists = sicmutils.util.permute.combinations(on_oneform_basis,p);
var n_p_COLON_form_basis_lists = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (onefbl){
return sicmutils.calculus.hodge_star.list_difference(on_oneform_basis,onefbl);
}),pform_basis_lists);
var n_p_COLON_basis = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n_p_COLON_basis_list){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.calculus.form_field.wedge,n_p_COLON_basis_list);
}),n_p_COLON_form_basis_lists);
var signs = cljs.core.map.cljs$core$IFn$_invoke$arity$4((function (bsign_list,p_COLON_basis_list,n_p_COLON_basis_list){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_,bsign_list),sicmutils.util.permute.permutation_parity.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p_COLON_basis_list,n_p_COLON_basis_list),on_oneform_basis));
}),sicmutils.util.permute.combinations(bsigns,p),pform_basis_lists,n_p_COLON_form_basis_lists);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$4(sicmutils.generic._STAR_,signs,coeffs,n_p_COLON_basis));
}
});
}));

(sicmutils.calculus.hodge_star.Hodge_star.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sicmutils.calculus.hodge_star.Hodge_star.cljs$lang$applyTo = (function (seq101625){
var G__101626 = cljs.core.first(seq101625);
var seq101625__$1 = cljs.core.next(seq101625);
var G__101627 = cljs.core.first(seq101625__$1);
var seq101625__$2 = cljs.core.next(seq101625__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101626,G__101627,seq101625__$2);
}));


//# sourceMappingURL=sicmutils.calculus.hodge_star.js.map
