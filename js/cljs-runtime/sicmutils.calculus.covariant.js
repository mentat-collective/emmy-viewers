goog.provide('sicmutils.calculus.covariant');
sicmutils.calculus.covariant.vector_field_Lie_derivative = (function sicmutils$calculus$covariant$vector_field_Lie_derivative(X){
var freeze_X = sicmutils.value.freeze(X);
var op_name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"Lie-derivative","Lie-derivative",-641072185,null),null,(1),null)),(new cljs.core.List(null,freeze_X,null,(1),null)))));
return sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$2((function sicmutils$calculus$covariant$vector_field_Lie_derivative_$_rec(Y){
if(sicmutils.function$.function_QMARK_(Y)){
return (X.cljs$core$IFn$_invoke$arity$1 ? X.cljs$core$IFn$_invoke$arity$1(Y) : X.call(null,Y));
} else {
if(sicmutils.calculus.vector_field.vector_field_QMARK_(Y)){
return sicmutils.operator.commutator(X,Y);
} else {
if(sicmutils.calculus.form_field.form_field_QMARK_(Y)){
var k = sicmutils.calculus.form_field.get_rank(Y);
var op = (function() { 
var G__101874__delegate = function (vectors){
var vectors__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,vectors);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.count(vectors__$1))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"\u2260","\u2260",-1444019055,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.count(vectors__$1),null,(1),null)),vectors__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.meta,vectors__$1)], 0))))),"\n","(= k (count vectors))"].join('')));
}

return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__101666 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(Y,vectors__$1);
var fexpr__101665 = sicmutils.generic.Lie_derivative.cljs$core$IFn$_invoke$arity$1(X);
return (fexpr__101665.cljs$core$IFn$_invoke$arity$1 ? fexpr__101665.cljs$core$IFn$_invoke$arity$1(G__101666) : fexpr__101665.call(null,G__101666));
})(),(function (){var G__101667 = (function (i){
var xs = cljs.core.update.cljs$core$IFn$_invoke$arity$3(vectors__$1,i,sicmutils.generic.Lie_derivative.cljs$core$IFn$_invoke$arity$1(X));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(Y,xs);
});
var G__101668 = (0);
var G__101669 = k;
return (sicmutils.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3 ? sicmutils.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3(G__101667,G__101668,G__101669) : sicmutils.util.aggregate.generic_sum.call(null,G__101667,G__101668,G__101669));
})());
};
var G__101874 = function (var_args){
var vectors = null;
if (arguments.length > 0) {
var G__101884__i = 0, G__101884__a = new Array(arguments.length -  0);
while (G__101884__i < G__101884__a.length) {G__101884__a[G__101884__i] = arguments[G__101884__i + 0]; ++G__101884__i;}
  vectors = new cljs.core.IndexedSeq(G__101884__a,0,null);
} 
return G__101874__delegate.call(this,vectors);};
G__101874.cljs$lang$maxFixedArity = 0;
G__101874.cljs$lang$applyTo = (function (arglist__101886){
var vectors = cljs.core.seq(arglist__101886);
return G__101874__delegate(vectors);
});
G__101874.cljs$core$IFn$_invoke$arity$variadic = G__101874__delegate;
return G__101874;
})()
;
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"Lie-derivative","Lie-derivative",-641072185,null),null,(1),null)),(new cljs.core.List(null,freeze_X,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(Y),null,(1),null)))));
return sicmutils.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3(op,k,name);
} else {
if(sicmutils.structure.structure_QMARK_(Y)){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((sicmutils.calculus.covariant.vector_field_Lie_derivative.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.covariant.vector_field_Lie_derivative.cljs$core$IFn$_invoke$arity$1(X) : sicmutils.calculus.covariant.vector_field_Lie_derivative.call(null,X)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([Y], 0));
} else {
return sicmutils.util.unsupported("Bad argument: Lie Derivative");

}
}
}
}
}),op_name);
});
sicmutils.generic.Lie_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352)], null),(function (V){
return sicmutils.calculus.covariant.vector_field_Lie_derivative(V);
}));
/**
 * Takes a system derivative `R` and returns a operator that takes a function `F`
 *   of coordinatized state and performs the operation described below, from
 *   ODE.scm in scmutils:
 * 
 *   Let `(sigma t)` be the state of a system at time `t`. Let the
 *   (first-order) system of differential equations governing the evolution of
 *   this state be:
 * 
 *   ```clojure
 *   ((D sigma) t) = (R (sigma t))
 *   ```
 * 
 *   ```clojure
 *   (D sigma) = (compose R sigma)
 *   ```
 * 
 *   i.e. `R` is a system derivative.
 * 
 *   Let `F` be any function of state, then a differential equation for the
 *   evolution of `F`, as it is dragged along the integral curve sigma is:
 * 
 *   ```clojure
 *   (D (compose F sigma)) = (* (compose (D F) sigma) (D sigma))
 *   = (compose (* (D F) R) sigma)
 *   ```
 * 
 *   Let's call this operation `Lie-D` (the Lie derivative for coordinates).
 */
sicmutils.calculus.covariant.Lie_D = (function sicmutils$calculus$covariant$Lie_D(R){
return sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$2((function (F){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(F) : sicmutils.calculus.derivative.D.call(null,F)),R);
}),(new cljs.core.List(null,new cljs.core.Symbol(null,"Lie-D","Lie-D",1269840403,null),(new cljs.core.List(null,sicmutils.value.freeze(R),null,(1),null)),(2),null)));
});
sicmutils.calculus.covariant.interior_product = (function sicmutils$calculus$covariant$interior_product(X){
if(sicmutils.calculus.vector_field.vector_field_QMARK_(X)){
} else {
throw (new Error("Assert failed: (vf/vector-field? X)"));
}

return (function sicmutils$calculus$covariant$interior_product_$_ix(alpha){
if(sicmutils.calculus.form_field.form_field_QMARK_(alpha)){
} else {
throw (new Error("Assert failed: (ff/form-field? alpha)"));
}

var p = sicmutils.calculus.form_field.get_rank(alpha);
if((p > (0))){
} else {
throw (new Error(["Assert failed: ","Rank of form not greater than zero: interior-product","\n","(> p 0)"].join('')));
}

return sicmutils.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3((function() { 
var sicmutils$calculus$covariant$interior_product_$_ix_$_the_product__delegate = function (vectors){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((p - (1)),cljs.core.count(vectors))){
} else {
throw (new Error("Assert failed: (= (dec p) (count vectors))"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(alpha,X,vectors);
};
var sicmutils$calculus$covariant$interior_product_$_ix_$_the_product = function (var_args){
var vectors = null;
if (arguments.length > 0) {
var G__101891__i = 0, G__101891__a = new Array(arguments.length -  0);
while (G__101891__i < G__101891__a.length) {G__101891__a[G__101891__i] = arguments[G__101891__i + 0]; ++G__101891__i;}
  vectors = new cljs.core.IndexedSeq(G__101891__a,0,null);
} 
return sicmutils$calculus$covariant$interior_product_$_ix_$_the_product__delegate.call(this,vectors);};
sicmutils$calculus$covariant$interior_product_$_ix_$_the_product.cljs$lang$maxFixedArity = 0;
sicmutils$calculus$covariant$interior_product_$_ix_$_the_product.cljs$lang$applyTo = (function (arglist__101892){
var vectors = cljs.core.seq(arglist__101892);
return sicmutils$calculus$covariant$interior_product_$_ix_$_the_product__delegate(vectors);
});
sicmutils$calculus$covariant$interior_product_$_ix_$_the_product.cljs$core$IFn$_invoke$arity$variadic = sicmutils$calculus$covariant$interior_product_$_ix_$_the_product__delegate;
return sicmutils$calculus$covariant$interior_product_$_ix_$_the_product;
})()
,(p - (1)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"interior-product","interior-product",1619499933,null),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(X),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(alpha),null,(1),null))))));
});
});
sicmutils.calculus.covariant.make_Cartan = (function sicmutils$calculus$covariant$make_Cartan(forms,basis){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("sicmutils.calculus.covariant","Cartan","sicmutils.calculus.covariant/Cartan",1091169335),new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"basis","basis",1865819339),basis], null);
});
sicmutils.calculus.covariant.Cartan_QMARK_ = (function sicmutils$calculus$covariant$Cartan_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.value.kind(x),new cljs.core.Keyword("sicmutils.calculus.covariant","Cartan","sicmutils.calculus.covariant/Cartan",1091169335));
});
sicmutils.calculus.covariant.Cartan__GT_forms = (function sicmutils$calculus$covariant$Cartan__GT_forms(C){
return new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(C);
});
sicmutils.calculus.covariant.Cartan__GT_basis = (function sicmutils$calculus$covariant$Cartan__GT_basis(C){
return new cljs.core.Keyword(null,"basis","basis",1865819339).cljs$core$IFn$_invoke$arity$1(C);
});
/**
 * Returns a data structure representing [Christoffel symbols of the second
 *   kind](https://en.wikipedia.org/wiki/Christoffel_symbols#Christoffel_symbols_of_the_second_kind_(symmetric_definition)).
 */
sicmutils.calculus.covariant.make_Christoffel = (function sicmutils$calculus$covariant$make_Christoffel(symbols,basis){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("sicmutils.calculus.covariant","Christoffel","sicmutils.calculus.covariant/Christoffel",1923175986),new cljs.core.Keyword(null,"symbols","symbols",1211743),symbols,new cljs.core.Keyword(null,"basis","basis",1865819339),basis], null);
});
sicmutils.calculus.covariant.Christoffel_QMARK_ = (function sicmutils$calculus$covariant$Christoffel_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.value.kind(x),new cljs.core.Keyword("sicmutils.calculus.covariant","Christoffel","sicmutils.calculus.covariant/Christoffel",1923175986));
});
sicmutils.calculus.covariant.Christoffel__GT_symbols = (function sicmutils$calculus$covariant$Christoffel__GT_symbols(C){
return new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(C);
});
sicmutils.calculus.covariant.Christoffel__GT_basis = (function sicmutils$calculus$covariant$Christoffel__GT_basis(C){
return new cljs.core.Keyword(null,"basis","basis",1865819339).cljs$core$IFn$_invoke$arity$1(C);
});
sicmutils.calculus.covariant.Cartan__GT_Christoffel = (function sicmutils$calculus$covariant$Cartan__GT_Christoffel(Cartan){
if(sicmutils.calculus.covariant.Cartan_QMARK_(Cartan)){
} else {
throw (new Error("Assert failed: (Cartan? Cartan)"));
}

var basis = sicmutils.calculus.covariant.Cartan__GT_basis(Cartan);
var forms = sicmutils.calculus.covariant.Cartan__GT_forms(Cartan);
return sicmutils.calculus.covariant.make_Christoffel(sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(forms,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.calculus.basis.basis__GT_vector_basis(basis)], 0)),basis);
});
sicmutils.calculus.covariant.Christoffel__GT_Cartan = (function sicmutils$calculus$covariant$Christoffel__GT_Cartan(Christoffel){
if(sicmutils.calculus.covariant.Christoffel_QMARK_(Christoffel)){
} else {
throw (new Error("Assert failed: (Christoffel? Christoffel)"));
}

var basis = sicmutils.calculus.covariant.Christoffel__GT_basis(Christoffel);
var symbols = sicmutils.calculus.covariant.Christoffel__GT_symbols(Christoffel);
return sicmutils.calculus.covariant.make_Cartan(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(symbols,sicmutils.calculus.basis.basis__GT_oneform_basis(basis)),basis);
});
sicmutils.calculus.covariant.symmetrize_Christoffel = (function sicmutils$calculus$covariant$symmetrize_Christoffel(G){
var s = sicmutils.calculus.covariant.Christoffel__GT_symbols(G);
return sicmutils.calculus.covariant.make_Christoffel(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(s,sicmutils.structure.transpose_outer(s))),sicmutils.calculus.covariant.Christoffel__GT_basis(G));
});
sicmutils.calculus.covariant.symmetrize_Cartan = (function sicmutils$calculus$covariant$symmetrize_Cartan(Cartan){
return sicmutils.calculus.covariant.Christoffel__GT_Cartan(sicmutils.calculus.covariant.symmetrize_Christoffel(sicmutils.calculus.covariant.Cartan__GT_Christoffel(Cartan)));
});
sicmutils.calculus.covariant.Cartan_transform = (function sicmutils$calculus$covariant$Cartan_transform(cartan,basis_prime){
var basis = sicmutils.calculus.covariant.Cartan__GT_basis(cartan);
var forms = sicmutils.calculus.covariant.Cartan__GT_forms(cartan);
var prime_dual_basis = sicmutils.calculus.basis.basis__GT_oneform_basis(basis_prime);
var prime_vector_basis = sicmutils.calculus.basis.basis__GT_vector_basis(basis_prime);
var vector_basis = sicmutils.calculus.basis.basis__GT_vector_basis(basis);
var oneform_basis = sicmutils.calculus.basis.basis__GT_oneform_basis(basis);
var J_inv = sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(oneform_basis,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prime_vector_basis], 0));
var J = sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(prime_dual_basis,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
var omega_prime_forms = sicmutils.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$2((function (u){
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(J,(u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(J_inv) : u.call(null,J_inv))),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(J,sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((forms.cljs$core$IFn$_invoke$arity$1 ? forms.cljs$core$IFn$_invoke$arity$1(u) : forms.call(null,u)),J_inv)));
}),new cljs.core.Symbol(null,"omega-prime-forms","omega-prime-forms",1304696268,null));
return sicmutils.calculus.covariant.make_Cartan(omega_prime_forms,basis_prime);
});
sicmutils.calculus.covariant.Cartan__GT_Cartan_over_map = (function sicmutils$calculus$covariant$Cartan__GT_Cartan_over_map(Cartan,map){
var basis = sicmutils.calculus.map.basis__GT_basis_over_map(map,sicmutils.calculus.covariant.Cartan__GT_basis(Cartan));
var forms = sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(sicmutils.calculus.map.form_field__GT_form_field_over_map(map),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.calculus.covariant.Cartan__GT_forms(Cartan)], 0));
return sicmutils.calculus.covariant.make_Cartan(forms,basis);
});
sicmutils.calculus.covariant.covariant_derivative_vector = (function sicmutils$calculus$covariant$covariant_derivative_vector(Cartan){
var basis = sicmutils.calculus.covariant.Cartan__GT_basis(Cartan);
var Cartan_forms = sicmutils.calculus.covariant.Cartan__GT_forms(Cartan);
var vector_basis = sicmutils.calculus.basis.basis__GT_vector_basis(basis);
var oneform_basis = sicmutils.calculus.basis.basis__GT_oneform_basis(basis);
return (function (V){
var CV = (Cartan_forms.cljs$core$IFn$_invoke$arity$1 ? Cartan_forms.cljs$core$IFn$_invoke$arity$1(V) : Cartan_forms.call(null,V));
return (function (U){
var u_components = (oneform_basis.cljs$core$IFn$_invoke$arity$1 ? oneform_basis.cljs$core$IFn$_invoke$arity$1(U) : oneform_basis.call(null,U));
var deriv_components = sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((V.cljs$core$IFn$_invoke$arity$1 ? V.cljs$core$IFn$_invoke$arity$1(u_components) : V.call(null,u_components)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(CV,u_components));
return sicmutils.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2((function sicmutils$calculus$covariant$covariant_derivative_vector_$_the_derivative(f){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((vector_basis.cljs$core$IFn$_invoke$arity$1 ? vector_basis.cljs$core$IFn$_invoke$arity$1(f) : vector_basis.call(null,f)),deriv_components);
}),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"nabla","nabla",1447510358,null),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(V),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(U),null,(1),null))))));
});
});
});
sicmutils.calculus.covariant.covariant_derivative_form = (function sicmutils$calculus$covariant$covariant_derivative_form(Cartan){
return (function (V){
return (function (tau){
var k = sicmutils.calculus.form_field.get_rank(tau);
var nabla_V = sicmutils.calculus.covariant.covariant_derivative_vector(Cartan)(V);
var op = (function() { 
var G__101896__delegate = function (vectors){
var vectors__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,vectors);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.count(vectors__$1))){
} else {
throw (new Error("Assert failed: (= k (count vectors))"));
}

return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__101750 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tau,vectors__$1);
return (V.cljs$core$IFn$_invoke$arity$1 ? V.cljs$core$IFn$_invoke$arity$1(G__101750) : V.call(null,G__101750));
})(),(function (){var G__101751 = (function (i){
var xs = cljs.core.update.cljs$core$IFn$_invoke$arity$3(vectors__$1,i,nabla_V);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tau,xs);
});
var G__101752 = (0);
var G__101753 = k;
return (sicmutils.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3 ? sicmutils.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3(G__101751,G__101752,G__101753) : sicmutils.util.aggregate.generic_sum.call(null,G__101751,G__101752,G__101753));
})());
};
var G__101896 = function (var_args){
var vectors = null;
if (arguments.length > 0) {
var G__101900__i = 0, G__101900__a = new Array(arguments.length -  0);
while (G__101900__i < G__101900__a.length) {G__101900__a[G__101900__i] = arguments[G__101900__i + 0]; ++G__101900__i;}
  vectors = new cljs.core.IndexedSeq(G__101900__a,0,null);
} 
return G__101896__delegate.call(this,vectors);};
G__101896.cljs$lang$maxFixedArity = 0;
G__101896.cljs$lang$applyTo = (function (arglist__101901){
var vectors = cljs.core.seq(arglist__101901);
return G__101896__delegate(vectors);
});
G__101896.cljs$core$IFn$_invoke$arity$variadic = G__101896__delegate;
return G__101896;
})()
;
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"nabla","nabla",1447510358,null),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(V),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(tau),null,(1),null)))));
return sicmutils.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3(op,k,name);
});
});
});
/**
 * NOTE: Returns a derivative with the same argument types as the original input
 *   function.
 */
sicmutils.calculus.covariant.covariant_derivative_argument_types = (function sicmutils$calculus$covariant$covariant_derivative_argument_types(Cartan){
var basis = sicmutils.calculus.covariant.Cartan__GT_basis(Cartan);
var vector_basis = sicmutils.calculus.basis.basis__GT_vector_basis(basis);
var oneform_basis = sicmutils.calculus.basis.basis__GT_oneform_basis(basis);
var Cartan_forms = sicmutils.calculus.covariant.Cartan__GT_forms(Cartan);
return (function (V){
var CV = (Cartan_forms.cljs$core$IFn$_invoke$arity$1 ? Cartan_forms.cljs$core$IFn$_invoke$arity$1(V) : Cartan_forms.call(null,V));
return (function (T){
var arg_types = sicmutils.calculus.indexed.argument_types(T);
if(cljs.core.every_QMARK_((function (t){
return ((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352))) || (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword("sicmutils.calculus.form-field","oneform-field","sicmutils.calculus.form-field/oneform-field",-1295182602))));
}),arg_types)){
} else {
throw (new Error("Assert failed: (every? (fn [t] (or (isa? t :sicmutils.calculus.vector-field/vector-field) (isa? t :sicmutils.calculus.form-field/oneform-field))) arg-types)"));
}

var lp = (function sicmutils$calculus$covariant$covariant_derivative_argument_types_$_lp(types,args,targs,factors){
if(cljs.core.empty_QMARK_(types)){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var G__101761 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(T,targs);
return (V.cljs$core$IFn$_invoke$arity$1 ? V.cljs$core$IFn$_invoke$arity$1(G__101761) : V.call(null,G__101761));
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_,factors));
} else {
return sicmutils.calculus.basis.contract((function (e,w){
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(types),new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352))){
if(sicmutils.calculus.vector_field.vector_field_QMARK_(cljs.core.first(args))){
} else {
throw (new Error("Assert failed: (vf/vector-field? (first args))"));
}

return sicmutils$calculus$covariant$covariant_derivative_argument_types_$_lp(cljs.core.rest(types),cljs.core.rest(args),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(targs,e),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(factors,(function (){var G__101762 = cljs.core.first(args);
return (w.cljs$core$IFn$_invoke$arity$1 ? w.cljs$core$IFn$_invoke$arity$1(G__101762) : w.call(null,G__101762));
})()));
} else {
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(types),new cljs.core.Keyword("sicmutils.calculus.form-field","oneform-field","sicmutils.calculus.form-field/oneform-field",-1295182602))){
if(sicmutils.calculus.form_field.oneform_field_QMARK_(cljs.core.first(args))){
} else {
throw (new Error("Assert failed: (ff/oneform-field? (first args))"));
}

return sicmutils$calculus$covariant$covariant_derivative_argument_types_$_lp(cljs.core.rest(types),cljs.core.rest(args),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(targs,w),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(factors,(function (){var fexpr__101763 = cljs.core.first(args);
return (fexpr__101763.cljs$core$IFn$_invoke$arity$1 ? fexpr__101763.cljs$core$IFn$_invoke$arity$1(e) : fexpr__101763.call(null,e));
})()));
} else {
return null;
}
}
}),basis);
}
});
var the_derivative = (function() { 
var sicmutils$calculus$covariant$covariant_derivative_argument_types_$_the_derivative__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),cljs.core.count(arg_types))){
} else {
throw (new Error("Assert failed: (= (count args) (count arg-types))"));
}

var argv = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,args);
var VT = lp(arg_types,argv,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
var corrections = (function (){var G__101764 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,type){
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword("sicmutils.calculus.form-field","oneform-field","sicmutils.calculus.form-field/oneform-field",-1295182602))){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e){
var fexpr__101765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,i);
return (fexpr__101765.cljs$core$IFn$_invoke$arity$1 ? fexpr__101765.cljs$core$IFn$_invoke$arity$1(e) : fexpr__101765.call(null,e));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0)),CV),sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (w){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(T,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(argv,i,w));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([oneform_basis], 0)));
} else {
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352))){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(T,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(argv,i,e));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(CV,sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (w){
var G__101766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,i);
return (w.cljs$core$IFn$_invoke$arity$1 ? w.cljs$core$IFn$_invoke$arity$1(G__101766) : w.call(null,G__101766));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([oneform_basis], 0)))));
} else {
return null;
}
}
}),arg_types);
return (sicmutils.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$1 ? sicmutils.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$1(G__101764) : sicmutils.util.aggregate.generic_sum.call(null,G__101764));
})();
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(VT,corrections);
};
var sicmutils$calculus$covariant$covariant_derivative_argument_types_$_the_derivative = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__101912__i = 0, G__101912__a = new Array(arguments.length -  0);
while (G__101912__i < G__101912__a.length) {G__101912__a[G__101912__i] = arguments[G__101912__i + 0]; ++G__101912__i;}
  args = new cljs.core.IndexedSeq(G__101912__a,0,null);
} 
return sicmutils$calculus$covariant$covariant_derivative_argument_types_$_the_derivative__delegate.call(this,args);};
sicmutils$calculus$covariant$covariant_derivative_argument_types_$_the_derivative.cljs$lang$maxFixedArity = 0;
sicmutils$calculus$covariant$covariant_derivative_argument_types_$_the_derivative.cljs$lang$applyTo = (function (arglist__101913){
var args = cljs.core.seq(arglist__101913);
return sicmutils$calculus$covariant$covariant_derivative_argument_types_$_the_derivative__delegate(args);
});
sicmutils$calculus$covariant$covariant_derivative_argument_types_$_the_derivative.cljs$core$IFn$_invoke$arity$variadic = sicmutils$calculus$covariant$covariant_derivative_argument_types_$_the_derivative__delegate;
return sicmutils$calculus$covariant$covariant_derivative_argument_types_$_the_derivative;
})()
;
return sicmutils.calculus.indexed.with_argument_types(the_derivative,arg_types);
});
});
});
sicmutils.calculus.covariant.covariant_derivative_function = (function sicmutils$calculus$covariant$covariant_derivative_function(Cartan){
return (function (X){
return (function (f){
return (function() { 
var G__101915__delegate = function (args){
var types = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.value.argument_kind,args);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))) && (sicmutils.calculus.manifold.manifold_point_QMARK_(cljs.core.first(args))))){
var f__$1 = sicmutils.calculus.indexed.with_argument_types(f,types);
var G__101768 = cljs.core.first(args);
var fexpr__101767 = (X.cljs$core$IFn$_invoke$arity$1 ? X.cljs$core$IFn$_invoke$arity$1(f__$1) : X.call(null,f__$1));
return (fexpr__101767.cljs$core$IFn$_invoke$arity$1 ? fexpr__101767.cljs$core$IFn$_invoke$arity$1(G__101768) : fexpr__101767.call(null,G__101768));
} else {
if(cljs.core.every_QMARK_((function (arg){
return ((sicmutils.calculus.vector_field.vector_field_QMARK_(arg)) || (sicmutils.calculus.form_field.oneform_field_QMARK_(arg)));
}),args)){
var f__$1 = sicmutils.calculus.indexed.with_argument_types(f,types);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__101772 = sicmutils.calculus.covariant.covariant_derivative_argument_types(Cartan)(X);
return (fexpr__101772.cljs$core$IFn$_invoke$arity$1 ? fexpr__101772.cljs$core$IFn$_invoke$arity$1(f__$1) : fexpr__101772.call(null,f__$1));
})(),args);
} else {
return sicmutils.util.illegal("Bad function or arguments to covariant derivative");

}
}
};
var G__101915 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__101918__i = 0, G__101918__a = new Array(arguments.length -  0);
while (G__101918__i < G__101918__a.length) {G__101918__a[G__101918__i] = arguments[G__101918__i + 0]; ++G__101918__i;}
  args = new cljs.core.IndexedSeq(G__101918__a,0,null);
} 
return G__101915__delegate.call(this,args);};
G__101915.cljs$lang$maxFixedArity = 0;
G__101915.cljs$lang$applyTo = (function (arglist__101919){
var args = cljs.core.seq(arglist__101919);
return G__101915__delegate(args);
});
G__101915.cljs$core$IFn$_invoke$arity$variadic = G__101915__delegate;
return G__101915;
})()
;
});
});
});
sicmutils.calculus.covariant.covariant_derivative_ordinary = (function sicmutils$calculus$covariant$covariant_derivative_ordinary(Cartan){
if(sicmutils.calculus.covariant.Cartan_QMARK_(Cartan)){
} else {
throw (new Error("Assert failed: (Cartan? Cartan)"));
}

return (function (X){
var op = (function sicmutils$calculus$covariant$covariant_derivative_ordinary_$_nabla_X(V){
if(sicmutils.calculus.vector_field.vector_field_QMARK_(V)){
var fexpr__101773 = sicmutils.calculus.covariant.covariant_derivative_vector(Cartan)(X);
return (fexpr__101773.cljs$core$IFn$_invoke$arity$1 ? fexpr__101773.cljs$core$IFn$_invoke$arity$1(V) : fexpr__101773.call(null,V));
} else {
if(sicmutils.calculus.form_field.form_field_QMARK_(V)){
var fexpr__101774 = sicmutils.calculus.covariant.covariant_derivative_form(Cartan)(X);
return (fexpr__101774.cljs$core$IFn$_invoke$arity$1 ? fexpr__101774.cljs$core$IFn$_invoke$arity$1(V) : fexpr__101774.call(null,V));
} else {
if(sicmutils.calculus.indexed.has_argument_types_QMARK_(V)){
var fexpr__101775 = sicmutils.calculus.covariant.covariant_derivative_argument_types(Cartan)(X);
return (fexpr__101775.cljs$core$IFn$_invoke$arity$1 ? fexpr__101775.cljs$core$IFn$_invoke$arity$1(V) : fexpr__101775.call(null,V));
} else {
if(sicmutils.function$.function_QMARK_(V)){
var fexpr__101778 = sicmutils.calculus.covariant.covariant_derivative_function(Cartan)(X);
return (fexpr__101778.cljs$core$IFn$_invoke$arity$1 ? fexpr__101778.cljs$core$IFn$_invoke$arity$1(V) : fexpr__101778.call(null,V));
} else {
if(sicmutils.structure.structure_QMARK_(V)){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(sicmutils$calculus$covariant$covariant_derivative_ordinary_$_nabla_X,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([V], 0));
} else {
return sicmutils.util.unsupported(["Can't do this kind of covariant derivative yet ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.value.freeze(X))," @ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.value.freeze(V))].join(''));

}
}
}
}
}
});
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"nabla","nabla",1447510358,null),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(X),null,(1),null)))));
return sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$2(op,name);
});
});
sicmutils.calculus.covariant.covariant_derivative = (function sicmutils$calculus$covariant$covariant_derivative(var_args){
var G__101809 = arguments.length;
switch (G__101809) {
case 1:
return sicmutils.calculus.covariant.covariant_derivative.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.calculus.covariant.covariant_derivative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.calculus.covariant.covariant_derivative.cljs$core$IFn$_invoke$arity$1 = (function (Cartan){
return sicmutils.calculus.covariant.covariant_derivative_ordinary(Cartan);
}));

(sicmutils.calculus.covariant.covariant_derivative.cljs$core$IFn$_invoke$arity$2 = (function (Cartan,map){
var mapped = sicmutils.calculus.covariant.Cartan__GT_Cartan_over_map(Cartan,map);
return sicmutils.calculus.covariant.covariant_derivative_ordinary(sicmutils.calculus.covariant.make_Cartan(sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.calculus.covariant.Cartan__GT_forms(mapped),(sicmutils.calculus.map.differential.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.map.differential.cljs$core$IFn$_invoke$arity$1(map) : sicmutils.calculus.map.differential.call(null,map))], 0)),sicmutils.calculus.covariant.Cartan__GT_basis(mapped)));
}));

(sicmutils.calculus.covariant.covariant_derivative.cljs$lang$maxFixedArity = 2);

sicmutils.calculus.covariant.covariant_differential = (function sicmutils$calculus$covariant$covariant_differential(Cartan){
return (function (V){
return (function (X){
var fexpr__101814 = sicmutils.calculus.covariant.covariant_derivative.cljs$core$IFn$_invoke$arity$1(Cartan)(X);
return (fexpr__101814.cljs$core$IFn$_invoke$arity$1 ? fexpr__101814.cljs$core$IFn$_invoke$arity$1(V) : fexpr__101814.call(null,V));
});
});
});
sicmutils.calculus.covariant.geodesic_equation = (function sicmutils$calculus$covariant$geodesic_equation(source_coordsys,target_coordsys,Cartan_on_target){
return (function (gamma){
return (function (source_m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(sicmutils.calculus.manifold.manifold(source_coordsys)))){
} else {
throw (new Error("Assert failed: (= 1 (:dimension (manifold/manifold source-coordsys)))"));
}

var e = sicmutils.calculus.vector_field.coordinate_system__GT_vector_basis(source_coordsys);
var fexpr__101839 = (function (){var G__101844 = sicmutils.calculus.manifold.chart(target_coordsys);
var fexpr__101843 = (function (){var G__101846 = (function (){var fexpr__101850 = (sicmutils.calculus.map.differential.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.map.differential.cljs$core$IFn$_invoke$arity$1(gamma) : sicmutils.calculus.map.differential.call(null,gamma));
return (fexpr__101850.cljs$core$IFn$_invoke$arity$1 ? fexpr__101850.cljs$core$IFn$_invoke$arity$1(e) : fexpr__101850.call(null,e));
})();
var fexpr__101845 = sicmutils.calculus.covariant.covariant_derivative.cljs$core$IFn$_invoke$arity$2(Cartan_on_target,gamma)(e);
return (fexpr__101845.cljs$core$IFn$_invoke$arity$1 ? fexpr__101845.cljs$core$IFn$_invoke$arity$1(G__101846) : fexpr__101845.call(null,G__101846));
})();
return (fexpr__101843.cljs$core$IFn$_invoke$arity$1 ? fexpr__101843.cljs$core$IFn$_invoke$arity$1(G__101844) : fexpr__101843.call(null,G__101844));
})();
return (fexpr__101839.cljs$core$IFn$_invoke$arity$1 ? fexpr__101839.cljs$core$IFn$_invoke$arity$1(source_m) : fexpr__101839.call(null,source_m));
});
});
});
sicmutils.calculus.covariant.parallel_transport_equation = (function sicmutils$calculus$covariant$parallel_transport_equation(source_coordsys,target_coordsys,Cartan_on_target){
return (function (gamma){
return (function (vector_over_gamma){
return (function (source_m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(sicmutils.calculus.manifold.manifold(source_coordsys)))){
} else {
throw (new Error("Assert failed: (= 1 (:dimension (manifold/manifold source-coordsys)))"));
}

var e = sicmutils.calculus.vector_field.coordinate_system__GT_vector_basis(source_coordsys);
var fexpr__101865 = (function (){var G__101868 = sicmutils.calculus.manifold.chart(target_coordsys);
var fexpr__101867 = (function (){var fexpr__101869 = sicmutils.calculus.covariant.covariant_derivative.cljs$core$IFn$_invoke$arity$2(Cartan_on_target,gamma)(e);
return (fexpr__101869.cljs$core$IFn$_invoke$arity$1 ? fexpr__101869.cljs$core$IFn$_invoke$arity$1(vector_over_gamma) : fexpr__101869.call(null,vector_over_gamma));
})();
return (fexpr__101867.cljs$core$IFn$_invoke$arity$1 ? fexpr__101867.cljs$core$IFn$_invoke$arity$1(G__101868) : fexpr__101867.call(null,G__101868));
})();
return (fexpr__101865.cljs$core$IFn$_invoke$arity$1 ? fexpr__101865.cljs$core$IFn$_invoke$arity$1(source_m) : fexpr__101865.call(null,source_m));
});
});
});
});

//# sourceMappingURL=sicmutils.calculus.covariant.js.map
