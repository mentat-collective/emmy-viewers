goog.provide('sicmutils.calculus.basis');
/**
 * Returns the standard basis object for `coordinate-system`.
 */
sicmutils.calculus.basis.coordinate_system__GT_basis = (function sicmutils$calculus$basis$coordinate_system__GT_basis(coordinate_system){
var vector_basis = sicmutils.calculus.vector_field.coordinate_system__GT_vector_basis(coordinate_system);
var oneform_basis = sicmutils.calculus.form_field.coordinate_system__GT_oneform_basis(coordinate_system);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("sicmutils.calculus.basis","coordinate-basis","sicmutils.calculus.basis/coordinate-basis",-1604008136),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(sicmutils.calculus.manifold.manifold(coordinate_system)),new cljs.core.Keyword(null,"vector-basis","vector-basis",-869960088),vector_basis,new cljs.core.Keyword(null,"oneform-basis","oneform-basis",-1252585473),oneform_basis,new cljs.core.Keyword(null,"coordinate-system","coordinate-system",-1298347271),coordinate_system], null);
});
/**
 * Returns true if `x` is a coordinate basis, false otherwise.
 */
sicmutils.calculus.basis.coordinate_basis_QMARK_ = (function sicmutils$calculus$basis$coordinate_basis_QMARK_(x){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(sicmutils.value.kind(x),new cljs.core.Keyword("sicmutils.calculus.basis","coordinate-basis","sicmutils.calculus.basis/coordinate-basis",-1604008136));
});
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.calculus.basis","coordinate-basis","sicmutils.calculus.basis/coordinate-basis",-1604008136),new cljs.core.Keyword("sicmutils.calculus.basis","basis","sicmutils.calculus.basis/basis",-368030716));
sicmutils.calculus.basis.basis__GT_coordinate_system = (function sicmutils$calculus$basis$basis__GT_coordinate_system(b){
if(sicmutils.calculus.basis.coordinate_basis_QMARK_(b)){
} else {
throw (new Error("Assert failed: (coordinate-basis? b)"));
}

return new cljs.core.Keyword(null,"coordinate-system","coordinate-system",-1298347271).cljs$core$IFn$_invoke$arity$1(b);
});
/**
 * Make a basis object out of a vector and dual basis.
 * 
 *   The dimensions of `vector-basis` and `dual-basis` must agree.
 */
sicmutils.calculus.basis.make_basis = (function sicmutils$calculus$basis$make_basis(vector_basis,dual_basis){
var d = cljs.core.count(cljs.core.flatten(vector_basis));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.flatten(dual_basis)),d)){
} else {
throw (new Error("Assert failed: (= (count (flatten dual-basis)) d)"));
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("sicmutils.calculus.basis","basis","sicmutils.calculus.basis/basis",-368030716),new cljs.core.Keyword(null,"dimension","dimension",543254198),d,new cljs.core.Keyword(null,"vector-basis","vector-basis",-869960088),vector_basis,new cljs.core.Keyword(null,"oneform-basis","oneform-basis",-1252585473),dual_basis], null);
});
/**
 * Returns true if `x` is a basis, false otherwise.
 */
sicmutils.calculus.basis.basis_QMARK_ = (function sicmutils$calculus$basis$basis_QMARK_(x){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(sicmutils.value.kind(x),new cljs.core.Keyword("sicmutils.calculus.basis","basis","sicmutils.calculus.basis/basis",-368030716));
});
/**
 * Extract the dual basis from the given basis object `b`.
 */
sicmutils.calculus.basis.basis__GT_oneform_basis = (function sicmutils$calculus$basis$basis__GT_oneform_basis(b){
if(sicmutils.calculus.basis.basis_QMARK_(b)){
} else {
throw (new Error("Assert failed: (basis? b)"));
}

return new cljs.core.Keyword(null,"oneform-basis","oneform-basis",-1252585473).cljs$core$IFn$_invoke$arity$1(b);
});
/**
 * Extract the vector basis from the given basis object `b`.
 */
sicmutils.calculus.basis.basis__GT_vector_basis = (function sicmutils$calculus$basis$basis__GT_vector_basis(b){
if(sicmutils.calculus.basis.basis_QMARK_(b)){
} else {
throw (new Error("Assert failed: (basis? b)"));
}

return new cljs.core.Keyword(null,"vector-basis","vector-basis",-869960088).cljs$core$IFn$_invoke$arity$1(b);
});
/**
 * Extract the dimension from the given basis object `b`.
 */
sicmutils.calculus.basis.basis__GT_dimension = (function sicmutils$calculus$basis$basis__GT_dimension(b){
if(sicmutils.calculus.basis.basis_QMARK_(b)){
} else {
throw (new Error("Assert failed: (basis? b)"));
}

return new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(b);
});
sicmutils.calculus.basis.contract = (function sicmutils$calculus$basis$contract(f,basis){
var vector_basis = sicmutils.calculus.basis.basis__GT_vector_basis(basis);
var oneform_basis = sicmutils.calculus.basis.basis__GT_oneform_basis(basis);
return sicmutils.structure.sumr.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis,oneform_basis], 0));
});
sicmutils.calculus.basis.vector_basis__GT_dual = (function sicmutils$calculus$basis$vector_basis__GT_dual(vector_basis,coordinate_system){
var prototype = sicmutils.calculus.manifold.coordinate_prototype(coordinate_system);
var vector_basis_coefficient_functions = sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (p1__87751_SHARP_){
return sicmutils.calculus.vector_field.vector_field__GT_components(p1__87751_SHARP_,coordinate_system);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
var guts = (function (coords){
var shape = sicmutils.structure.compatible_shape(prototype);
var invert = (function (p1__87752_SHARP_){
return sicmutils.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(shape,p1__87752_SHARP_,prototype);
});
var transpose = (function (p1__87753_SHARP_){
return sicmutils.matrix.s_COLON_transpose.cljs$core$IFn$_invoke$arity$3(shape,p1__87753_SHARP_,prototype);
});
return transpose(invert(sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (p1__87754_SHARP_){
return (p1__87754_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__87754_SHARP_.cljs$core$IFn$_invoke$arity$1(coords) : p1__87754_SHARP_.call(null,coords));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis_coefficient_functions], 0))));
});
var oneform_basis_coefficient_functions = sicmutils.calculus.manifold.c_COLON_generate(new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(sicmutils.calculus.manifold.manifold(coordinate_system)),new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939),(function (p1__87755_SHARP_){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sicmutils.structure.component.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__87755_SHARP_], 0)),guts);
}));
var oneform_basis = sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (p1__87757_SHARP_){
return sicmutils.calculus.form_field.components__GT_oneform_field.cljs$core$IFn$_invoke$arity$2(p1__87757_SHARP_,coordinate_system);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([oneform_basis_coefficient_functions], 0));
return oneform_basis;
});
sicmutils.calculus.basis.make_constant_vector_field = (function sicmutils$calculus$basis$make_constant_vector_field(basis,m0){
return (function (v){
return (function (f){
var vector_basis = sicmutils.calculus.basis.basis__GT_vector_basis(basis);
var oneform_basis = sicmutils.calculus.basis.basis__GT_oneform_basis(basis);
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((vector_basis.cljs$core$IFn$_invoke$arity$1 ? vector_basis.cljs$core$IFn$_invoke$arity$1(f) : vector_basis.call(null,f)),sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (onefb){
return (function (_){
var fexpr__87763 = (onefb.cljs$core$IFn$_invoke$arity$1 ? onefb.cljs$core$IFn$_invoke$arity$1(v) : onefb.call(null,v));
return (fexpr__87763.cljs$core$IFn$_invoke$arity$1 ? fexpr__87763.cljs$core$IFn$_invoke$arity$1(m0) : fexpr__87763.call(null,m0));
});
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([oneform_basis], 0)));
});
});
});
/**
 * Returns the Jacobian of transition from `from-basis` to `to-basis`.
 * 
 *   The Jacobian is a structure of manifold functions. The outer index is the
 *   from-basis index, so this structure can be multiplied by tuple of component
 *   functions of a vector field relative to `from-basis` to get component
 *   functions for a vector field in `to-basis`.
 */
sicmutils.calculus.basis.Jacobian = (function sicmutils$calculus$basis$Jacobian(to_basis,from_basis){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(sicmutils.calculus.basis.basis__GT_oneform_basis(to_basis),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.calculus.basis.basis__GT_vector_basis(from_basis)], 0));
});

//# sourceMappingURL=sicmutils.calculus.basis.js.map
