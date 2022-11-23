goog.provide('sicmutils.calculus.metric');
sicmutils.calculus.metric.embedding_map__GT_metric_components = (function sicmutils$calculus$metric$embedding_map__GT_metric_components(n,xi__GT_rectangular){
var h = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(xi__GT_rectangular) : sicmutils.calculus.derivative.D.call(null,xi__GT_rectangular));
var ref = (function (f,k){
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__101555_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__101555_SHARP_,k);
}),f], 0));
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1))){
return sicmutils.structure.down.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.structure.down.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.dot_product.cljs$core$IFn$_invoke$arity$2(h,h)], 0))], 0));
} else {
return sicmutils.structure.generate(n,new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),(function (i){
return sicmutils.structure.generate(n,new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),(function (j){
return sicmutils.generic.dot_product.cljs$core$IFn$_invoke$arity$2(ref(h,i),ref(h,j));
}));
}));
}
});
sicmutils.calculus.metric.coordinate_system__GT_metric_components = (function sicmutils$calculus$metric$coordinate_system__GT_metric_components(coordsys){
var n = new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(sicmutils.calculus.manifold.manifold(coordsys));
var xi__GT_x = sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.calculus.manifold.manifold_point_representation,sicmutils.calculus.manifold.point(coordsys)], 0));
return sicmutils.calculus.metric.embedding_map__GT_metric_components(n,xi__GT_x);
});
sicmutils.calculus.metric.coordinate_system__GT_metric = (function sicmutils$calculus$metric$coordinate_system__GT_metric(coordinate_system){
var basis = sicmutils.calculus.basis.coordinate_system__GT_basis(coordinate_system);
var oneform_basis = sicmutils.calculus.basis.basis__GT_oneform_basis(basis);
var __GT_components = sicmutils.calculus.metric.coordinate_system__GT_metric_components(coordinate_system);
var Chi = sicmutils.calculus.manifold.chart(coordinate_system);
var the_metric = (function sicmutils$calculus$metric$coordinate_system__GT_metric_$_the_metric(v1,v2){
return (function (m){
var gcoeffs = (function (){var G__101592 = Chi(m);
return (__GT_components.cljs$core$IFn$_invoke$arity$1 ? __GT_components.cljs$core$IFn$_invoke$arity$1(G__101592) : __GT_components.call(null,G__101592));
})();
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(gcoeffs,(function (){var fexpr__101593 = (oneform_basis.cljs$core$IFn$_invoke$arity$1 ? oneform_basis.cljs$core$IFn$_invoke$arity$1(v1) : oneform_basis.call(null,v1));
return (fexpr__101593.cljs$core$IFn$_invoke$arity$1 ? fexpr__101593.cljs$core$IFn$_invoke$arity$1(m) : fexpr__101593.call(null,m));
})()),(function (){var fexpr__101594 = (oneform_basis.cljs$core$IFn$_invoke$arity$1 ? oneform_basis.cljs$core$IFn$_invoke$arity$1(v2) : oneform_basis.call(null,v2));
return (fexpr__101594.cljs$core$IFn$_invoke$arity$1 ? fexpr__101594.cljs$core$IFn$_invoke$arity$1(m) : fexpr__101594.call(null,m));
})());
});
});
return sicmutils.calculus.indexed.with_argument_types(the_metric,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352),new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352)], null));
});
sicmutils.calculus.metric.coordinate_system__GT_inverse_metric = (function sicmutils$calculus$metric$coordinate_system__GT_inverse_metric(coordinate_system){
var basis = sicmutils.calculus.basis.coordinate_system__GT_basis(coordinate_system);
var vector_basis = sicmutils.calculus.basis.basis__GT_vector_basis(basis);
var __GT_components = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),sicmutils.calculus.metric.coordinate_system__GT_metric_components(coordinate_system));
var Chi = sicmutils.calculus.manifold.chart(coordinate_system);
var the_inverse_metric = (function sicmutils$calculus$metric$coordinate_system__GT_inverse_metric_$_the_inverse_metric(w1,w2){
return (function (m){
var gcoeffs = (function (){var G__101605 = Chi(m);
return (__GT_components.cljs$core$IFn$_invoke$arity$1 ? __GT_components.cljs$core$IFn$_invoke$arity$1(G__101605) : __GT_components.call(null,G__101605));
})();
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(gcoeffs,sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e){
var fexpr__101617 = (w1.cljs$core$IFn$_invoke$arity$1 ? w1.cljs$core$IFn$_invoke$arity$1(e) : w1.call(null,e));
return (fexpr__101617.cljs$core$IFn$_invoke$arity$1 ? fexpr__101617.cljs$core$IFn$_invoke$arity$1(m) : fexpr__101617.call(null,m));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0))),sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e){
var fexpr__101618 = (w2.cljs$core$IFn$_invoke$arity$1 ? w2.cljs$core$IFn$_invoke$arity$1(e) : w2.call(null,e));
return (fexpr__101618.cljs$core$IFn$_invoke$arity$1 ? fexpr__101618.cljs$core$IFn$_invoke$arity$1(m) : fexpr__101618.call(null,m));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0)));
});
});
return sicmutils.calculus.indexed.with_argument_types(the_inverse_metric,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.calculus.form-field","oneform-field","sicmutils.calculus.form-field/oneform-field",-1295182602),new cljs.core.Keyword("sicmutils.calculus.form-field","oneform-field","sicmutils.calculus.form-field/oneform-field",-1295182602)], null));
});
sicmutils.calculus.metric.make_metric = (function sicmutils$calculus$metric$make_metric(name,coordinate_system){
return (function sicmutils$calculus$metric$make_metric_$_gij(i,j){
if((i <= j)){
return sicmutils.calculus.manifold.literal_manifold_function(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')),coordinate_system);
} else {
return sicmutils$calculus$metric$make_metric_$_gij(j,i);
}
});
});
/**
 * Flat coordinate systems here only.
 */
sicmutils.calculus.metric.literal_metric = (function sicmutils$calculus$metric$literal_metric(name,coordinate_system){
var basis = sicmutils.calculus.basis.coordinate_system__GT_basis(coordinate_system);
var oneform_basis = sicmutils.calculus.basis.basis__GT_oneform_basis(basis);
var gij = sicmutils.calculus.metric.make_metric(name,coordinate_system);
var n = sicmutils.generic.dimension.cljs$core$IFn$_invoke$arity$1(oneform_basis);
var gcoeffs = sicmutils.structure.generate(n,new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),(function (i){
return sicmutils.structure.generate(n,new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),(function (j){
return gij(i,j);
}));
}));
var the_metric = (function sicmutils$calculus$metric$literal_metric_$_the_metric(v1,v2){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(gcoeffs,(oneform_basis.cljs$core$IFn$_invoke$arity$1 ? oneform_basis.cljs$core$IFn$_invoke$arity$1(v1) : oneform_basis.call(null,v1))),(oneform_basis.cljs$core$IFn$_invoke$arity$1 ? oneform_basis.cljs$core$IFn$_invoke$arity$1(v2) : oneform_basis.call(null,v2)));
});
return sicmutils.calculus.indexed.with_argument_types(the_metric,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352),new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352)], null));
});
sicmutils.calculus.metric.components__GT_metric = (function sicmutils$calculus$metric$components__GT_metric(components,basis){
var oneform_basis = sicmutils.calculus.basis.basis__GT_oneform_basis(basis);
return (function sicmutils$calculus$metric$components__GT_metric_$_the_metric(v1,v2){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((oneform_basis.cljs$core$IFn$_invoke$arity$1 ? oneform_basis.cljs$core$IFn$_invoke$arity$1(v1) : oneform_basis.call(null,v1)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(components,(oneform_basis.cljs$core$IFn$_invoke$arity$1 ? oneform_basis.cljs$core$IFn$_invoke$arity$1(v2) : oneform_basis.call(null,v2))));
});
});
sicmutils.calculus.metric.metric__GT_components = (function sicmutils$calculus$metric$metric__GT_components(metric,basis){
var vector_basis = sicmutils.calculus.basis.basis__GT_vector_basis(basis);
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e_i){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e_j){
return (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(e_i,e_j) : metric.call(null,e_i,e_j));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
});
/**
 * Given a metric and a basis, computes the inverse metric.
 */
sicmutils.calculus.metric.metric__GT_inverse_components = (function sicmutils$calculus$metric$metric__GT_inverse_components(metric,basis){
return (function sicmutils$calculus$metric$metric__GT_inverse_components_$_the_coeffs(m){
var g_ij = (function (){var fexpr__101623 = sicmutils.calculus.metric.metric__GT_components(metric,basis);
return (fexpr__101623.cljs$core$IFn$_invoke$arity$1 ? fexpr__101623.cljs$core$IFn$_invoke$arity$1(m) : fexpr__101623.call(null,m));
})();
var oneform_basis = sicmutils.calculus.basis.basis__GT_oneform_basis(basis);
var typical = sicmutils.structure.typical_object(oneform_basis);
return sicmutils.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(typical,g_ij,typical);
});
});
sicmutils.calculus.metric.invert = (function sicmutils$calculus$metric$invert(metric,basis){
var the_inverse_metric = (function sicmutils$calculus$metric$invert_$_the_inverse_metric(w1,w2){
var vector_basis = sicmutils.calculus.basis.basis__GT_vector_basis(basis);
var g_ij = sicmutils.calculus.metric.metric__GT_inverse_components(metric,basis);
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(g_ij,sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(w1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0))),sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(w2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0)));
});
return sicmutils.calculus.indexed.with_argument_types(the_inverse_metric,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.calculus.form-field","oneform-field","sicmutils.calculus.form-field/oneform-field",-1295182602),new cljs.core.Keyword("sicmutils.calculus.form-field","oneform-field","sicmutils.calculus.form-field/oneform-field",-1295182602)], null));
});
sicmutils.calculus.metric.metric_over_map = (function sicmutils$calculus$metric$metric_over_map(mu_COLON_N__GT_M,g_on_M){
var make_fake_vector_field = (function sicmutils$calculus$metric$metric_over_map_$_make_fake_vector_field(V_over_mu,n){
return sicmutils.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2((function (f){
return (function (_){
var fexpr__101640 = (V_over_mu.cljs$core$IFn$_invoke$arity$1 ? V_over_mu.cljs$core$IFn$_invoke$arity$1(f) : V_over_mu.call(null,f));
return (fexpr__101640.cljs$core$IFn$_invoke$arity$1 ? fexpr__101640.cljs$core$IFn$_invoke$arity$1(n) : fexpr__101640.call(null,n));
});
}),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"make-fake-vector-field","make-fake-vector-field",-1146565625,null),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(V_over_mu),null,(1),null))))));
});
var the_metric = (function sicmutils$calculus$metric$metric_over_map_$_the_metric(v1,v2){
return (function (n){
var G__101644 = (mu_COLON_N__GT_M.cljs$core$IFn$_invoke$arity$1 ? mu_COLON_N__GT_M.cljs$core$IFn$_invoke$arity$1(n) : mu_COLON_N__GT_M.call(null,n));
var fexpr__101643 = (function (){var G__101646 = make_fake_vector_field(v1,n);
var G__101647 = make_fake_vector_field(v2,n);
return (g_on_M.cljs$core$IFn$_invoke$arity$2 ? g_on_M.cljs$core$IFn$_invoke$arity$2(G__101646,G__101647) : g_on_M.call(null,G__101646,G__101647));
})();
return (fexpr__101643.cljs$core$IFn$_invoke$arity$1 ? fexpr__101643.cljs$core$IFn$_invoke$arity$1(G__101644) : fexpr__101643.call(null,G__101644));
});
});
return sicmutils.calculus.indexed.with_argument_types(the_metric,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352),new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352)], null));
});
/**
 * To make a vector field into a one-form field, ie, a (1,0) tensor into a (0,1)
 *   tensor.
 */
sicmutils.calculus.metric.lower = (function sicmutils$calculus$metric$lower(metric){
return (function (u){
var omega = (function sicmutils$calculus$metric$lower_$_omega(v){
return (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(v,u) : metric.call(null,v,u));
});
return sicmutils.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$2(omega,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"lower","lower",-1534114948,null),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(u),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sicmutils.value.freeze(metric),null,(1),null))], 0)))));
});
});
/**
 * Alias for [[lower]].
 */
sicmutils.calculus.metric.vector_field__GT_oneform_field = sicmutils.calculus.metric.lower;
/**
 * Alias for [[lower]].
 */
sicmutils.calculus.metric.drop1 = sicmutils.calculus.metric.lower;
/**
 * To make a one-form field into a vector field, ie, a (0,1) tensor into a (1,0)
 *   tensor.
 */
sicmutils.calculus.metric.raise = (function sicmutils$calculus$metric$raise(metric,basis){
var gi = sicmutils.calculus.metric.invert(metric,basis);
return (function (omega){
var v = sicmutils.calculus.basis.contract((function (vf_i,ff_i){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((gi.cljs$core$IFn$_invoke$arity$2 ? gi.cljs$core$IFn$_invoke$arity$2(omega,ff_i) : gi.call(null,omega,ff_i)),vf_i);
}),basis);
return sicmutils.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2(v,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"raise","raise",1824672588,null),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(omega),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sicmutils.value.freeze(metric),null,(1),null))], 0)))));
});
});
/**
 * Alias for [[raise]].
 */
sicmutils.calculus.metric.oneform_field__GT_vector_field = sicmutils.calculus.metric.raise;
/**
 * Alias for [[raise]].
 */
sicmutils.calculus.metric.raise1 = sicmutils.calculus.metric.raise;
/**
 * For making a (2,0) tensor into a (0,2) tensor.
 */
sicmutils.calculus.metric.drop2 = (function sicmutils$calculus$metric$drop2(metric_tensor,basis){
return (function (tensor){
var omega = (function sicmutils$calculus$metric$drop2_$_omega(v1,v2){
return sicmutils.calculus.basis.contract((function (e1,w1){
return sicmutils.calculus.basis.contract((function (e2,w2){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((metric_tensor.cljs$core$IFn$_invoke$arity$2 ? metric_tensor.cljs$core$IFn$_invoke$arity$2(v1,e1) : metric_tensor.call(null,v1,e1)),(tensor.cljs$core$IFn$_invoke$arity$2 ? tensor.cljs$core$IFn$_invoke$arity$2(w1,w2) : tensor.call(null,w1,w2)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(metric_tensor.cljs$core$IFn$_invoke$arity$2 ? metric_tensor.cljs$core$IFn$_invoke$arity$2(e2,v2) : metric_tensor.call(null,e2,v2))], 0));
}),basis);
}),basis);
});
return sicmutils.calculus.indexed.with_argument_types(omega,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352),new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352)], null));
});
});
/**
 * For making a (0,2) tensor into a (2,0) tensor.
 */
sicmutils.calculus.metric.raise2 = (function sicmutils$calculus$metric$raise2(metric_tensor,basis){
var gi = sicmutils.calculus.metric.invert(metric_tensor,basis);
return (function (tensor02){
var v2 = (function sicmutils$calculus$metric$raise2_$_v2(omega1,omega2){
return sicmutils.calculus.basis.contract((function (e1,w1){
return sicmutils.calculus.basis.contract((function (e2,w2){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((gi.cljs$core$IFn$_invoke$arity$2 ? gi.cljs$core$IFn$_invoke$arity$2(omega1,w1) : gi.call(null,omega1,w1)),(tensor02.cljs$core$IFn$_invoke$arity$2 ? tensor02.cljs$core$IFn$_invoke$arity$2(e1,e2) : tensor02.call(null,e1,e2)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(gi.cljs$core$IFn$_invoke$arity$2 ? gi.cljs$core$IFn$_invoke$arity$2(w2,omega2) : gi.call(null,w2,omega2))], 0));
}),basis);
}),basis);
});
return sicmutils.calculus.indexed.with_argument_types(v2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.calculus.form-field","oneform-field","sicmutils.calculus.form-field/oneform-field",-1295182602),new cljs.core.Keyword("sicmutils.calculus.form-field","oneform-field","sicmutils.calculus.form-field/oneform-field",-1295182602)], null));
});
});
/**
 * Computes the trace of a (0,2) tensor.
 */
sicmutils.calculus.metric.trace2down = (function sicmutils$calculus$metric$trace2down(metric_tensor,basis){
var inverse_metric_tensor = sicmutils.calculus.metric.invert(metric_tensor,basis);
return (function (tensor02){
var f = sicmutils.calculus.basis.contract((function (e1,w1){
return sicmutils.calculus.basis.contract((function (e2,w2){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((inverse_metric_tensor.cljs$core$IFn$_invoke$arity$2 ? inverse_metric_tensor.cljs$core$IFn$_invoke$arity$2(w1,w2) : inverse_metric_tensor.call(null,w1,w2)),(tensor02.cljs$core$IFn$_invoke$arity$2 ? tensor02.cljs$core$IFn$_invoke$arity$2(e1,e2) : tensor02.call(null,e1,e2)));
}),basis);
}),basis);
return sicmutils.calculus.indexed.with_argument_types(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","function","sicmutils.value/function",-1964931037)], null));
});
});
/**
 * Computes the trace of a (2,0) tensor
 */
sicmutils.calculus.metric.trace2up = (function sicmutils$calculus$metric$trace2up(metric_tensor,basis){
return (function (tensor20){
var f = sicmutils.calculus.basis.contract((function (e1,w1){
return sicmutils.calculus.basis.contract((function (e2,w2){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((metric_tensor.cljs$core$IFn$_invoke$arity$2 ? metric_tensor.cljs$core$IFn$_invoke$arity$2(e1,e2) : metric_tensor.call(null,e1,e2)),(tensor20.cljs$core$IFn$_invoke$arity$2 ? tensor20.cljs$core$IFn$_invoke$arity$2(w1,w2) : tensor20.call(null,w1,w2)));
}),basis);
}),basis);
return sicmutils.calculus.indexed.with_argument_types(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","function","sicmutils.value/function",-1964931037)], null));
});
});
sicmutils.calculus.metric.sharpen = (function sicmutils$calculus$metric$sharpen(metric,basis,m){
var g_ij = sicmutils.calculus.metric.metric__GT_inverse_components(metric,basis)(m);
var vector_basis = sicmutils.calculus.basis.basis__GT_vector_basis(basis);
return (function sicmutils$calculus$metric$sharpen_$_sharp(oneform_field){
var oneform_coeffs = sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (ei){
var fexpr__101674 = (oneform_field.cljs$core$IFn$_invoke$arity$1 ? oneform_field.cljs$core$IFn$_invoke$arity$1(ei) : oneform_field.call(null,ei));
return (fexpr__101674.cljs$core$IFn$_invoke$arity$1 ? fexpr__101674.cljs$core$IFn$_invoke$arity$1(m) : fexpr__101674.call(null,m));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
var vector_coeffs = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(g_ij,oneform_coeffs);
return sicmutils.structure.sumr.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_coeffs,vector_basis], 0));
});
});
sicmutils.calculus.metric.S2_metric = (function (){var vec__101675 = sicmutils.calculus.coordinate.coordinate_functions(sicmutils.calculus.manifold.S2_spherical);
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101675,(0),null);
var vec__101678 = sicmutils.calculus.form_field.coordinate_system__GT_oneform_basis(sicmutils.calculus.manifold.S2_spherical);
var dtheta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101678,(0),null);
var dphi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101678,(1),null);
return sicmutils.calculus.indexed.with_argument_types((function sicmutils$calculus$metric$the_metric(v1,v2){
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((dtheta.cljs$core$IFn$_invoke$arity$1 ? dtheta.cljs$core$IFn$_invoke$arity$1(v1) : dtheta.call(null,v1)),(dtheta.cljs$core$IFn$_invoke$arity$1 ? dtheta.cljs$core$IFn$_invoke$arity$1(v2) : dtheta.call(null,v2))),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic.expt.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(theta),(2)),(dphi.cljs$core$IFn$_invoke$arity$1 ? dphi.cljs$core$IFn$_invoke$arity$1(v1) : dphi.call(null,v1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(dphi.cljs$core$IFn$_invoke$arity$1 ? dphi.cljs$core$IFn$_invoke$arity$1(v2) : dphi.call(null,v2))], 0)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352),new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352)], null));
})();

//# sourceMappingURL=sicmutils.calculus.metric.js.map
