goog.provide('sicmutils.calculus.vector_calculus');
/**
 * Operator that takes a function `f` and returns a new function that
 *   calculates the [Gradient](https://en.wikipedia.org/wiki/Gradient) of `f`.
 * 
 *   The related [[D]] operator returns a function that produces a structure of the
 *   opposite orientation as [[Grad]]. Both of these functions use forward-mode
 *   automatic differentiation.
 */
sicmutils.calculus.vector_calculus.Grad = sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$2((function (f){
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.structure.opposite,sicmutils.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentVector.EMPTY)], 0));
}),new cljs.core.Symbol(null,"Grad","Grad",-1533675656,null));
/**
 * [[gradient]] implements equation (10.3) in Functional Differential Geometry,
 *   defined on page 154.
 */
sicmutils.calculus.vector_calculus.gradient = (function sicmutils$calculus$vector_calculus$gradient(metric,basis){
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.calculus.metric.raise(metric,basis),sicmutils.calculus.form_field.d], 0));
});
/**
 * Operator that takes a function `f` and returns a function that
 *   calculates the [Divergence](https://en.wikipedia.org/wiki/Divergence) of
 *   `f` at its input point.
 * 
 *  The divergence is a one-level contraction of the gradient.
 */
sicmutils.calculus.vector_calculus.Div = sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$2(sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.trace,sicmutils.calculus.vector_calculus.Grad], 0)),new cljs.core.Symbol(null,"Div","Div",2085306215,null));
/**
 * Both arities of [[divergence]] are defined on page 156 of Functional Differential Geometry.
 */
sicmutils.calculus.vector_calculus.divergence = (function sicmutils$calculus$vector_calculus$divergence(var_args){
var G__101735 = arguments.length;
switch (G__101735) {
case 1:
return sicmutils.calculus.vector_calculus.divergence.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.calculus.vector_calculus.divergence.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.calculus.vector_calculus.divergence.cljs$core$IFn$_invoke$arity$1 = (function (Cartan){
var basis = sicmutils.calculus.covariant.Cartan__GT_basis(Cartan);
var nabla = sicmutils.calculus.covariant.covariant_derivative.cljs$core$IFn$_invoke$arity$1(Cartan);
return (function (v){
return (function (point){
return sicmutils.calculus.basis.contract((function (ei,wi){
var fexpr__101739 = (function (){var G__101740 = (function (){var fexpr__101741 = nabla(ei);
return (fexpr__101741.cljs$core$IFn$_invoke$arity$1 ? fexpr__101741.cljs$core$IFn$_invoke$arity$1(v) : fexpr__101741.call(null,v));
})();
return (wi.cljs$core$IFn$_invoke$arity$1 ? wi.cljs$core$IFn$_invoke$arity$1(G__101740) : wi.call(null,G__101740));
})();
return (fexpr__101739.cljs$core$IFn$_invoke$arity$1 ? fexpr__101739.cljs$core$IFn$_invoke$arity$1(point) : fexpr__101739.call(null,point));
}),basis);
});
});
}));

(sicmutils.calculus.vector_calculus.divergence.cljs$core$IFn$_invoke$arity$2 = (function (metric,orthonormal_basis){
var star = sicmutils.calculus.hodge_star.Hodge_star(metric,orthonormal_basis);
var flat = sicmutils.calculus.metric.lower(metric);
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([star,sicmutils.calculus.form_field.d,star,flat], 0));
}));

(sicmutils.calculus.vector_calculus.divergence.cljs$lang$maxFixedArity = 2);

/**
 * Operator that takes a function `f` and returns a function that
 *   calculates the [Curl](https://en.wikipedia.org/wiki/Curl_(mathematics)) of `f`
 *   at its input point.
 * 
 *   `f` must be a function from $\mathbb{R}^3 \to \mathbb{R}^3$.
 */
sicmutils.calculus.vector_calculus.Curl = sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$2((function (f_triple){
var vec__101742 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.calculus.derivative.partial,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null));
var Dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101742,(0),null);
var Dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101742,(1),null);
var Dz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101742,(2),null);
var fx = sicmutils.function$.get.cljs$core$IFn$_invoke$arity$2(f_triple,(0));
var fy = sicmutils.function$.get.cljs$core$IFn$_invoke$arity$2(f_triple,(1));
var fz = sicmutils.function$.get.cljs$core$IFn$_invoke$arity$2(f_triple,(2));
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((Dy.cljs$core$IFn$_invoke$arity$1 ? Dy.cljs$core$IFn$_invoke$arity$1(fz) : Dy.call(null,fz)),(Dz.cljs$core$IFn$_invoke$arity$1 ? Dz.cljs$core$IFn$_invoke$arity$1(fy) : Dz.call(null,fy))),sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((Dz.cljs$core$IFn$_invoke$arity$1 ? Dz.cljs$core$IFn$_invoke$arity$1(fx) : Dz.call(null,fx)),(Dx.cljs$core$IFn$_invoke$arity$1 ? Dx.cljs$core$IFn$_invoke$arity$1(fz) : Dx.call(null,fz))),sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((Dx.cljs$core$IFn$_invoke$arity$1 ? Dx.cljs$core$IFn$_invoke$arity$1(fy) : Dx.call(null,fy)),(Dy.cljs$core$IFn$_invoke$arity$1 ? Dy.cljs$core$IFn$_invoke$arity$1(fx) : Dy.call(null,fx)))], 0));
}),new cljs.core.Symbol(null,"Curl","Curl",797096696,null));
/**
 * [[curl]] implements equation (10.7) of Functional Differential Geometry,
 *   defined on page 155.
 */
sicmutils.calculus.vector_calculus.curl = (function sicmutils$calculus$vector_calculus$curl(metric,orthonormal_basis){
var star = sicmutils.calculus.hodge_star.Hodge_star(metric,orthonormal_basis);
var sharp = sicmutils.calculus.metric.raise(metric,orthonormal_basis);
var flat = sicmutils.calculus.metric.lower(metric);
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sharp,star,sicmutils.calculus.form_field.d,flat], 0));
});
/**
 * Operator that takes a function `f` and returns a function that
 *   calculates the [Vector
 *   Laplacian](https://en.wikipedia.org/wiki/Laplace_operator#Vector_Laplacian) of
 *   `f` at its input point.
 */
sicmutils.calculus.vector_calculus.Lap = sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$2(sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.trace,sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.calculus.vector_calculus.Grad,sicmutils.calculus.vector_calculus.Grad)], 0)),new cljs.core.Symbol(null,"Lap","Lap",25592799,null));
sicmutils.calculus.vector_calculus.Laplacian = (function sicmutils$calculus$vector_calculus$Laplacian(metric,orthonormal_basis){
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.calculus.vector_calculus.divergence.cljs$core$IFn$_invoke$arity$2(metric,orthonormal_basis),sicmutils.calculus.vector_calculus.gradient(metric,orthonormal_basis)], 0));
});
sicmutils.calculus.vector_calculus.coordinate_system__GT_Lame_coefficients = (function sicmutils$calculus$vector_calculus$coordinate_system__GT_Lame_coefficients(coordinate_system){
var gij = sicmutils.calculus.metric.coordinate_system__GT_metric_components(coordinate_system);
if(sicmutils.matrix.diagonal_QMARK_(gij)){
} else {
throw (new Error("Assert failed: (matrix/diagonal? gij)"));
}

var n = new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(sicmutils.calculus.manifold.manifold(coordinate_system));
return sicmutils.structure.generate(n,new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),(function (i){
return sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(gij,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i], null)));
}));
});
sicmutils.calculus.vector_calculus.coordinate_system__GT_orthonormal_vector_basis = (function sicmutils$calculus$vector_calculus$coordinate_system__GT_orthonormal_vector_basis(coordsys){
var vector_basis = sicmutils.calculus.vector_field.coordinate_system__GT_vector_basis(coordsys);
var Lame_coefs = sicmutils.calculus.vector_calculus.coordinate_system__GT_Lame_coefficients(coordsys);
var n = new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(sicmutils.calculus.manifold.manifold(coordsys));
return sicmutils.structure.generate(n,new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),(function (i){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vector_basis,i),sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(Lame_coefs,i),sicmutils.calculus.manifold.chart(coordsys)], 0))));
}));
});

//# sourceMappingURL=sicmutils.calculus.vector_calculus.js.map
