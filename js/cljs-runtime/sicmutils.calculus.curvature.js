goog.provide('sicmutils.calculus.curvature');
sicmutils.calculus.curvature.Riemann_curvature = (function sicmutils$calculus$curvature$Riemann_curvature(nabla){
return (function (u,v){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.operator.commutator((nabla.cljs$core$IFn$_invoke$arity$1 ? nabla.cljs$core$IFn$_invoke$arity$1(u) : nabla.call(null,u)),(nabla.cljs$core$IFn$_invoke$arity$1 ? nabla.cljs$core$IFn$_invoke$arity$1(v) : nabla.call(null,v))),(function (){var G__87833 = sicmutils.operator.commutator(u,v);
return (nabla.cljs$core$IFn$_invoke$arity$1 ? nabla.cljs$core$IFn$_invoke$arity$1(G__87833) : nabla.call(null,G__87833));
})());
});
});
sicmutils.calculus.curvature.Riemann = (function sicmutils$calculus$curvature$Riemann(nabla){
var Riemann_tensor = (function sicmutils$calculus$curvature$Riemann_$_Riemann_tensor(w,x,u,v){
var G__87839 = (function (){var fexpr__87840 = sicmutils.calculus.curvature.Riemann_curvature(nabla)(u,v);
return (fexpr__87840.cljs$core$IFn$_invoke$arity$1 ? fexpr__87840.cljs$core$IFn$_invoke$arity$1(x) : fexpr__87840.call(null,x));
})();
return (w.cljs$core$IFn$_invoke$arity$1 ? w.cljs$core$IFn$_invoke$arity$1(G__87839) : w.call(null,G__87839));
});
return sicmutils.calculus.indexed.with_argument_types(Riemann_tensor,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.calculus.form-field","oneform-field","sicmutils.calculus.form-field/oneform-field",-1295182602),new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352),new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352),new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352)], null));
});
sicmutils.calculus.curvature.Ricci = (function sicmutils$calculus$curvature$Ricci(nabla,basis){
var Ricci_tensor = (function sicmutils$calculus$curvature$Ricci_$_Ricci_tensor(u,v){
return sicmutils.calculus.basis.contract((function (ei,wi){
var fexpr__87861 = sicmutils.calculus.curvature.Riemann(nabla);
return (fexpr__87861.cljs$core$IFn$_invoke$arity$4 ? fexpr__87861.cljs$core$IFn$_invoke$arity$4(wi,u,ei,v) : fexpr__87861.call(null,wi,u,ei,v));
}),basis);
});
return sicmutils.calculus.indexed.with_argument_types(Ricci_tensor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352),new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352)], null));
});
sicmutils.calculus.curvature.torsion_vector = (function sicmutils$calculus$curvature$torsion_vector(nabla){
return (function (X,Y){
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__87862 = (nabla.cljs$core$IFn$_invoke$arity$1 ? nabla.cljs$core$IFn$_invoke$arity$1(X) : nabla.call(null,X));
return (fexpr__87862.cljs$core$IFn$_invoke$arity$1 ? fexpr__87862.cljs$core$IFn$_invoke$arity$1(Y) : fexpr__87862.call(null,Y));
})(),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__87863 = (nabla.cljs$core$IFn$_invoke$arity$1 ? nabla.cljs$core$IFn$_invoke$arity$1(Y) : nabla.call(null,Y));
return (fexpr__87863.cljs$core$IFn$_invoke$arity$1 ? fexpr__87863.cljs$core$IFn$_invoke$arity$1(X) : fexpr__87863.call(null,X));
})()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),sicmutils.operator.commutator(X,Y))], 0));
});
});
sicmutils.calculus.curvature.torsion = (function sicmutils$calculus$curvature$torsion(nabla){
var the_torsion = (function sicmutils$calculus$curvature$torsion_$_the_torsion(w,x,y){
var G__87865 = sicmutils.calculus.curvature.torsion_vector(nabla)(x,y);
return (w.cljs$core$IFn$_invoke$arity$1 ? w.cljs$core$IFn$_invoke$arity$1(G__87865) : w.call(null,G__87865));
});
return sicmutils.calculus.indexed.with_argument_types(the_torsion,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.calculus.form-field","oneform-field","sicmutils.calculus.form-field/oneform-field",-1295182602),new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352),new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352)], null));
});
sicmutils.calculus.curvature.curvature_components = (function sicmutils$calculus$curvature$curvature_components(nabla,coord_sys){
var d_COLON_dxs = sicmutils.calculus.vector_field.coordinate_system__GT_vector_basis(coord_sys);
var dxs = sicmutils.calculus.form_field.coordinate_system__GT_oneform_basis(coord_sys);
var point = sicmutils.calculus.manifold.point(coord_sys)(sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null)], 0)));
var fexpr__87881 = sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (dx){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (d_COLON_dx){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (d_COLON_dy){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (d_COLON_dz){
var G__87889 = (function (){var fexpr__87891 = sicmutils.calculus.curvature.Riemann_curvature(nabla)(d_COLON_dy,d_COLON_dz);
return (fexpr__87891.cljs$core$IFn$_invoke$arity$1 ? fexpr__87891.cljs$core$IFn$_invoke$arity$1(d_COLON_dx) : fexpr__87891.call(null,d_COLON_dx));
})();
return (dx.cljs$core$IFn$_invoke$arity$1 ? dx.cljs$core$IFn$_invoke$arity$1(G__87889) : dx.call(null,G__87889));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d_COLON_dxs], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d_COLON_dxs], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d_COLON_dxs], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dxs], 0));
return (fexpr__87881.cljs$core$IFn$_invoke$arity$1 ? fexpr__87881.cljs$core$IFn$_invoke$arity$1(point) : fexpr__87881.call(null,point));
});

//# sourceMappingURL=sicmutils.calculus.curvature.js.map
