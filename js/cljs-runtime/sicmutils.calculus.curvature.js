goog.provide('sicmutils.calculus.curvature');
sicmutils.calculus.curvature.Riemann_curvature = (function sicmutils$calculus$curvature$Riemann_curvature(nabla){
return (function (u,v){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.operator.commutator((nabla.cljs$core$IFn$_invoke$arity$1 ? nabla.cljs$core$IFn$_invoke$arity$1(u) : nabla.call(null,u)),(nabla.cljs$core$IFn$_invoke$arity$1 ? nabla.cljs$core$IFn$_invoke$arity$1(v) : nabla.call(null,v))),(function (){var G__101641 = sicmutils.operator.commutator(u,v);
return (nabla.cljs$core$IFn$_invoke$arity$1 ? nabla.cljs$core$IFn$_invoke$arity$1(G__101641) : nabla.call(null,G__101641));
})());
});
});
sicmutils.calculus.curvature.Riemann = (function sicmutils$calculus$curvature$Riemann(nabla){
var Riemann_tensor = (function sicmutils$calculus$curvature$Riemann_$_Riemann_tensor(w,x,u,v){
var G__101647 = (function (){var fexpr__101648 = sicmutils.calculus.curvature.Riemann_curvature(nabla)(u,v);
return (fexpr__101648.cljs$core$IFn$_invoke$arity$1 ? fexpr__101648.cljs$core$IFn$_invoke$arity$1(x) : fexpr__101648.call(null,x));
})();
return (w.cljs$core$IFn$_invoke$arity$1 ? w.cljs$core$IFn$_invoke$arity$1(G__101647) : w.call(null,G__101647));
});
return sicmutils.calculus.indexed.with_argument_types(Riemann_tensor,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.calculus.form-field","oneform-field","sicmutils.calculus.form-field/oneform-field",-1295182602),new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352),new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352),new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352)], null));
});
sicmutils.calculus.curvature.Ricci = (function sicmutils$calculus$curvature$Ricci(nabla,basis){
var Ricci_tensor = (function sicmutils$calculus$curvature$Ricci_$_Ricci_tensor(u,v){
return sicmutils.calculus.basis.contract((function (ei,wi){
var fexpr__101651 = sicmutils.calculus.curvature.Riemann(nabla);
return (fexpr__101651.cljs$core$IFn$_invoke$arity$4 ? fexpr__101651.cljs$core$IFn$_invoke$arity$4(wi,u,ei,v) : fexpr__101651.call(null,wi,u,ei,v));
}),basis);
});
return sicmutils.calculus.indexed.with_argument_types(Ricci_tensor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352),new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352)], null));
});
sicmutils.calculus.curvature.torsion_vector = (function sicmutils$calculus$curvature$torsion_vector(nabla){
return (function (X,Y){
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__101652 = (nabla.cljs$core$IFn$_invoke$arity$1 ? nabla.cljs$core$IFn$_invoke$arity$1(X) : nabla.call(null,X));
return (fexpr__101652.cljs$core$IFn$_invoke$arity$1 ? fexpr__101652.cljs$core$IFn$_invoke$arity$1(Y) : fexpr__101652.call(null,Y));
})(),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__101653 = (nabla.cljs$core$IFn$_invoke$arity$1 ? nabla.cljs$core$IFn$_invoke$arity$1(Y) : nabla.call(null,Y));
return (fexpr__101653.cljs$core$IFn$_invoke$arity$1 ? fexpr__101653.cljs$core$IFn$_invoke$arity$1(X) : fexpr__101653.call(null,X));
})()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),sicmutils.operator.commutator(X,Y))], 0));
});
});
sicmutils.calculus.curvature.torsion = (function sicmutils$calculus$curvature$torsion(nabla){
var the_torsion = (function sicmutils$calculus$curvature$torsion_$_the_torsion(w,x,y){
var G__101655 = sicmutils.calculus.curvature.torsion_vector(nabla)(x,y);
return (w.cljs$core$IFn$_invoke$arity$1 ? w.cljs$core$IFn$_invoke$arity$1(G__101655) : w.call(null,G__101655));
});
return sicmutils.calculus.indexed.with_argument_types(the_torsion,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.calculus.form-field","oneform-field","sicmutils.calculus.form-field/oneform-field",-1295182602),new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352),new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352)], null));
});
sicmutils.calculus.curvature.curvature_components = (function sicmutils$calculus$curvature$curvature_components(nabla,coord_sys){
var d_COLON_dxs = sicmutils.calculus.vector_field.coordinate_system__GT_vector_basis(coord_sys);
var dxs = sicmutils.calculus.form_field.coordinate_system__GT_oneform_basis(coord_sys);
var point = sicmutils.calculus.manifold.point(coord_sys)(sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null)], 0)));
var fexpr__101661 = sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (dx){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (d_COLON_dx){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (d_COLON_dy){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (d_COLON_dz){
var G__101662 = (function (){var fexpr__101663 = sicmutils.calculus.curvature.Riemann_curvature(nabla)(d_COLON_dy,d_COLON_dz);
return (fexpr__101663.cljs$core$IFn$_invoke$arity$1 ? fexpr__101663.cljs$core$IFn$_invoke$arity$1(d_COLON_dx) : fexpr__101663.call(null,d_COLON_dx));
})();
return (dx.cljs$core$IFn$_invoke$arity$1 ? dx.cljs$core$IFn$_invoke$arity$1(G__101662) : dx.call(null,G__101662));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d_COLON_dxs], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d_COLON_dxs], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d_COLON_dxs], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dxs], 0));
return (fexpr__101661.cljs$core$IFn$_invoke$arity$1 ? fexpr__101661.cljs$core$IFn$_invoke$arity$1(point) : fexpr__101661.call(null,point));
});

//# sourceMappingURL=sicmutils.calculus.curvature.js.map
