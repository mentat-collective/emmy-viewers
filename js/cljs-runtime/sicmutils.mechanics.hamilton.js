goog.provide('sicmutils.mechanics.hamilton');
/**
 * Returns function signature for a Hamiltonian with n degrees of freedom (or an
 *   unrestricted number if n is not given).
 * 
 *   Useful for constructing Hamiltonian literal functions.
 */
sicmutils.mechanics.hamilton.Hamiltonian = (function sicmutils$mechanics$hamilton$Hamiltonian(n){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"UP","UP",-1898089532,null),new cljs.core.Symbol(null,"Real","Real",374292741,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"UP*","UP*",294235991,null),new cljs.core.Symbol(null,"Real","Real",374292741,null),n], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"DOWN*","DOWN*",1300864675,null),new cljs.core.Symbol(null,"Real","Real",374292741,null),n], null))], null)),new cljs.core.Symbol(null,"Real","Real",374292741,null)], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
});
/**
 * Given a time `t`, coordinate tuple (or scalar) `q` and momentum tuple (or
 *   scalar) `p`, returns a 'Hamiltonian state tuple', ie, the state expected by a
 *   Hamiltonian.
 */
sicmutils.mechanics.hamilton.__GT_H_state = (function sicmutils$mechanics$hamilton$__GT_H_state(t,q,p){
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,p], 0));
});
/**
 * Returns true if the supplied state is
 * 
 *   - of type [[sicmutils.structure/up]]
 * 
 *   - contains three elements of `time`, `coordinate` and `momentum` of either of
 *  the following type shapes:
 * 
 *   ```
 *   (up <number> <number> <number>)
 *   (up <number> (up <number>*) (down <number>*))
 *   ```
 * 
 *   If structural, the dimension of the coordinate and momentum tuples must match.
 */
sicmutils.mechanics.hamilton.H_state_QMARK_ = (function sicmutils$mechanics$hamilton$H_state_QMARK_(s){
var and__4251__auto__ = sicmutils.structure.up_QMARK_(s);
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(s),(3));
if(and__4251__auto____$1){
var vec__103288 = s;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103288,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103288,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103288,(2),null);
return ((sicmutils.value.numerical_QMARK_(t)) && (((((sicmutils.value.numerical_QMARK_(q)) && (sicmutils.value.numerical_QMARK_(v)))) || (((sicmutils.structure.up_QMARK_(q)) && (((sicmutils.structure.down_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.structure.dimension(q),sicmutils.structure.dimension(v))))))))));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
});
/**
 * Returns true if `s` is compatible for contraction with a proper H-state, false
 *   otherwise.
 */
sicmutils.mechanics.hamilton.compatible_H_state_QMARK_ = (function sicmutils$mechanics$hamilton$compatible_H_state_QMARK_(s){
return sicmutils.mechanics.hamilton.H_state_QMARK_(sicmutils.structure.transpose(s));
});
/**
 * Returns the momentum element of a local Hamiltonian state tuple (by convention,
 *   the third element).
 */
sicmutils.mechanics.hamilton.momentum = (function sicmutils$mechanics$hamilton$momentum(H_state){
if(sicmutils.structure.up_QMARK_(H_state)){
} else {
throw (new Error("Assert failed: (s/up? H-state)"));
}

if((cljs.core.count(H_state) > (2))){
} else {
throw (new Error("Assert failed: (> (count H-state) 2)"));
}

return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(H_state,(2));
});
/**
 * Alias for [[momentum]].
 */
sicmutils.mechanics.hamilton.state__GT_p = sicmutils.mechanics.hamilton.momentum;
/**
 * Alias for [[momentum]].
 */
sicmutils.mechanics.hamilton.momenta = sicmutils.mechanics.hamilton.momentum;
/**
 * Alias for [[momentum]].
 */
sicmutils.mechanics.hamilton.P = sicmutils.mechanics.hamilton.momentum;
/**
 * Given a hamiltonian state, returns a [[sicmutils.structure/up]] containing the
 *   coordinate and momentum components. 
 */
sicmutils.mechanics.hamilton.state__GT_qp = (function sicmutils$mechanics$hamilton$state__GT_qp(s){
if(sicmutils.mechanics.hamilton.H_state_QMARK_(s)){
} else {
throw (new Error("Assert failed: (H-state? s)"));
}

return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.mechanics.lagrange.coordinate(s),sicmutils.mechanics.hamilton.momentum(s)], 0));
});
sicmutils.mechanics.hamilton.qp__GT_H_state_path = (function sicmutils$mechanics$hamilton$qp__GT_H_state_path(q,p){
return (function (t){
return sicmutils.mechanics.hamilton.__GT_H_state(t,(q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(t) : q.call(null,t)),(p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(t) : p.call(null,t)));
});
});
sicmutils.mechanics.hamilton.literal_Hamiltonian_state = (function sicmutils$mechanics$hamilton$literal_Hamiltonian_state(n_dof){
return sicmutils.mechanics.hamilton.__GT_H_state(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"t","t",242699008,null)),sicmutils.structure.literal_up(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null)),n_dof),sicmutils.structure.literal_down(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"p","p",1791580836,null)),n_dof));
});
sicmutils.mechanics.hamilton.L_state__GT_H_state = (function sicmutils$mechanics$hamilton$L_state__GT_H_state(L){
return (function (Ls){
return sicmutils.mechanics.hamilton.__GT_H_state(sicmutils.mechanics.lagrange.time(Ls),sicmutils.mechanics.lagrange.coordinate(Ls),(function (){var fexpr__103308 = (function (){var fexpr__103309 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__103309.cljs$core$IFn$_invoke$arity$1 ? fexpr__103309.cljs$core$IFn$_invoke$arity$1(L) : fexpr__103309.call(null,L));
})();
return (fexpr__103308.cljs$core$IFn$_invoke$arity$1 ? fexpr__103308.cljs$core$IFn$_invoke$arity$1(Ls) : fexpr__103308.call(null,Ls));
})());
});
});
sicmutils.mechanics.hamilton.H_state__GT_L_state = (function sicmutils$mechanics$hamilton$H_state__GT_L_state(H){
return (function (Hs){
return sicmutils.mechanics.lagrange.__GT_L_state(sicmutils.mechanics.lagrange.time(Hs),sicmutils.mechanics.lagrange.coordinate(Hs),(function (){var fexpr__103322 = (function (){var fexpr__103323 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__103323.cljs$core$IFn$_invoke$arity$1 ? fexpr__103323.cljs$core$IFn$_invoke$arity$1(H) : fexpr__103323.call(null,H));
})();
return (fexpr__103322.cljs$core$IFn$_invoke$arity$1 ? fexpr__103322.cljs$core$IFn$_invoke$arity$1(Hs) : fexpr__103322.call(null,Hs));
})());
});
});
sicmutils.mechanics.hamilton.H_state__GT_matrix = (function sicmutils$mechanics$hamilton$H_state__GT_matrix(s){
return sicmutils.matrix.s__GT_m.cljs$core$IFn$_invoke$arity$3(sicmutils.structure.compatible_shape(s),s,(1));
});
sicmutils.mechanics.hamilton.matrix__GT_H_state = (function sicmutils$mechanics$hamilton$matrix__GT_H_state(m,s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.num_cols(m),(1))){
} else {
throw (new Error("Assert failed: (= (matrix/num-cols m) 1)"));
}

if(cljs.core.odd_QMARK_(sicmutils.matrix.num_rows(m))){
} else {
throw (new Error("Assert failed: (odd? (matrix/num-rows m))"));
}

if((sicmutils.matrix.num_rows(m) > (2))){
} else {
throw (new Error("Assert failed: (> (matrix/num-rows m) 2)"));
}

return sicmutils.matrix.m__GT_s(sicmutils.structure.compatible_shape(s),m,(1));
});
sicmutils.mechanics.hamilton.make_Hamiltonian = (function sicmutils$mechanics$hamilton$make_Hamiltonian(kinetic_energy,potential_energy){
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(kinetic_energy,potential_energy);
});
sicmutils.mechanics.hamilton.Hamiltonian__GT_state_derivative = (function sicmutils$mechanics$hamilton$Hamiltonian__GT_state_derivative(H){
return (function (H_state){
return sicmutils.mechanics.hamilton.__GT_H_state((1),(function (){var fexpr__103332 = (function (){var fexpr__103333 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__103333.cljs$core$IFn$_invoke$arity$1 ? fexpr__103333.cljs$core$IFn$_invoke$arity$1(H) : fexpr__103333.call(null,H));
})();
return (fexpr__103332.cljs$core$IFn$_invoke$arity$1 ? fexpr__103332.cljs$core$IFn$_invoke$arity$1(H_state) : fexpr__103332.call(null,H_state));
})(),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__103335 = (function (){var fexpr__103336 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0));
return (fexpr__103336.cljs$core$IFn$_invoke$arity$1 ? fexpr__103336.cljs$core$IFn$_invoke$arity$1(H) : fexpr__103336.call(null,H));
})();
return (fexpr__103335.cljs$core$IFn$_invoke$arity$1 ? fexpr__103335.cljs$core$IFn$_invoke$arity$1(H_state) : fexpr__103335.call(null,H_state));
})()));
});
});
/**
 * Alias for [[Hamiltonian->state-derivative]], for compatibility with
 *   1st edition of SICM.
 */
sicmutils.mechanics.hamilton.phase_space_derivative = sicmutils.mechanics.hamilton.Hamiltonian__GT_state_derivative;
sicmutils.mechanics.hamilton.Hamilton_equations = (function sicmutils$mechanics$hamilton$Hamilton_equations(Hamiltonian){
return (function (q,p){
var H_state_path = sicmutils.mechanics.hamilton.qp__GT_H_state_path(q,p);
var dH = sicmutils.mechanics.hamilton.Hamiltonian__GT_state_derivative(Hamiltonian);
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(H_state_path) : sicmutils.calculus.derivative.D.call(null,H_state_path)),sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dH,H_state_path], 0)));
});
});
sicmutils.mechanics.hamilton.D_phase_space = (function sicmutils$mechanics$hamilton$D_phase_space(H){
return (function (s){
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),(function (){var fexpr__103338 = (function (){var fexpr__103339 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__103339.cljs$core$IFn$_invoke$arity$1 ? fexpr__103339.cljs$core$IFn$_invoke$arity$1(H) : fexpr__103339.call(null,H));
})();
return (fexpr__103338.cljs$core$IFn$_invoke$arity$1 ? fexpr__103338.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103338.call(null,s));
})(),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__103347 = (function (){var fexpr__103348 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0));
return (fexpr__103348.cljs$core$IFn$_invoke$arity$1 ? fexpr__103348.cljs$core$IFn$_invoke$arity$1(H) : fexpr__103348.call(null,H));
})();
return (fexpr__103347.cljs$core$IFn$_invoke$arity$1 ? fexpr__103347.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103347.call(null,s));
})())], 0));
});
});
sicmutils.mechanics.hamilton.H_rectangular = (function sicmutils$mechanics$hamilton$H_rectangular(m,V){
return (function (p__103352){
var vec__103353 = p__103352;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103353,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103353,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103353,(2),null);
return sicmutils.mechanics.hamilton.make_Hamiltonian(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(p),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),m)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(V,q));
});
});
sicmutils.mechanics.hamilton.H_central = (function sicmutils$mechanics$hamilton$H_central(m,V){
return (function (p__103356){
var vec__103357 = p__103356;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103357,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103357,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103357,(2),null);
return sicmutils.mechanics.hamilton.make_Hamiltonian(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(p),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),m)),(function (){var G__103360 = sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(q);
return (V.cljs$core$IFn$_invoke$arity$1 ? V.cljs$core$IFn$_invoke$arity$1(G__103360) : V.call(null,G__103360));
})());
});
});
sicmutils.mechanics.hamilton.H_central_polar = (function sicmutils$mechanics$hamilton$H_central_polar(m,V){
return (function (p__103361){
var vec__103362 = p__103361;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103362,(0),null);
var vec__103365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103362,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103365,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103365,(1),null);
var vec__103368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103362,(2),null);
var p_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103368,(0),null);
var p_phi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103368,(1),null);
return sicmutils.mechanics.hamilton.make_Hamiltonian(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(p_r),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(p_phi,r))),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),m)),(V.cljs$core$IFn$_invoke$arity$1 ? V.cljs$core$IFn$_invoke$arity$1(r) : V.call(null,r)));
});
});
sicmutils.mechanics.hamilton.H_harmonic = (function sicmutils$mechanics$hamilton$H_harmonic(m,k){
return (function (p__103371){
var vec__103372 = p__103371;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103372,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103372,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103372,(2),null);
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(p),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),m)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(q)], 0)));
});
});
/**
 * If true, the state passed to the fn returned
 *     by [[Legendre-transform]] is checked for correctness. If `false` errors
 *     may occur. See the code body for more detail.
 * 
 *     Defaults to `false`.
 */
sicmutils.mechanics.hamilton._STAR_validate_Legendre_transform_QMARK__STAR_ = false;
/**
 * Note from GJS: This ugly version tests for correctness of the result.
 */
sicmutils.mechanics.hamilton.Legendre_transform_procedure = (function sicmutils$mechanics$hamilton$Legendre_transform_procedure(F){
var w_of_v = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(F) : sicmutils.calculus.derivative.D.call(null,F));
var Dw_of_v = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(w_of_v) : sicmutils.calculus.derivative.D.call(null,w_of_v));
var putative_G = (function sicmutils$mechanics$hamilton$Legendre_transform_procedure_$_putative_G(w){
var z = sicmutils.structure.compatible_zero(w);
var M = (Dw_of_v.cljs$core$IFn$_invoke$arity$1 ? Dw_of_v.cljs$core$IFn$_invoke$arity$1(z) : Dw_of_v.call(null,z));
var b = (w_of_v.cljs$core$IFn$_invoke$arity$1 ? w_of_v.cljs$core$IFn$_invoke$arity$1(z) : w_of_v.call(null,z));
if(cljs.core.truth_((function (){var and__4251__auto__ = sicmutils.mechanics.hamilton._STAR_validate_Legendre_transform_QMARK__STAR_;
if(cljs.core.truth_(and__4251__auto__)){
return sicmutils.value.zero_QMARK_(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.determinant.cljs$core$IFn$_invoke$arity$1(M)));
} else {
return and__4251__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Legendre Transform Failure: determinant = 0",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"F","F",-1115543258),F,new cljs.core.Keyword(null,"w","w",354169001),w], null));
} else {
var v = sicmutils.generic.solve_linear_left(M,sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(w,b));
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(w,v),(F.cljs$core$IFn$_invoke$arity$1 ? F.cljs$core$IFn$_invoke$arity$1(v) : F.call(null,v)));
}
});
var Dpg = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(putative_G) : sicmutils.calculus.derivative.D.call(null,putative_G));
return (function sicmutils$mechanics$hamilton$Legendre_transform_procedure_$_G(w){
if(cljs.core.truth_((function (){var and__4251__auto__ = sicmutils.mechanics.hamilton._STAR_validate_Legendre_transform_QMARK__STAR_;
if(cljs.core.truth_(and__4251__auto__)){
var thing = sicmutils.structure.typical_object(w);
return cljs.core.not(sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(thing,sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1((function (){var G__103387 = (Dpg.cljs$core$IFn$_invoke$arity$1 ? Dpg.cljs$core$IFn$_invoke$arity$1(thing) : Dpg.call(null,thing));
return (w_of_v.cljs$core$IFn$_invoke$arity$1 ? w_of_v.cljs$core$IFn$_invoke$arity$1(G__103387) : w_of_v.call(null,G__103387));
})())));
} else {
return and__4251__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Legendre Transform Failure: not quadratic",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"F","F",-1115543258),F,new cljs.core.Keyword(null,"w","w",354169001),w], null));
} else {
return putative_G(w);
}
});
});
sicmutils.mechanics.hamilton.Legendre_transform = sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$2(sicmutils.mechanics.hamilton.Legendre_transform_procedure,new cljs.core.Symbol(null,"Legendre-transform","Legendre-transform",77490623,null));
sicmutils.mechanics.hamilton.Lagrangian__GT_Hamiltonian_procedure = (function sicmutils$mechanics$hamilton$Lagrangian__GT_Hamiltonian_procedure(Lagrangian){
return (function (p__103401){
var vec__103402 = p__103401;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103402,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103402,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103402,(2),null);
var L = (function (p1__103396_SHARP_){
var G__103406 = sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,p1__103396_SHARP_], 0));
return (Lagrangian.cljs$core$IFn$_invoke$arity$1 ? Lagrangian.cljs$core$IFn$_invoke$arity$1(G__103406) : Lagrangian.call(null,G__103406));
});
var fexpr__103407 = (sicmutils.mechanics.hamilton.Legendre_transform.cljs$core$IFn$_invoke$arity$1 ? sicmutils.mechanics.hamilton.Legendre_transform.cljs$core$IFn$_invoke$arity$1(L) : sicmutils.mechanics.hamilton.Legendre_transform.call(null,L));
return (fexpr__103407.cljs$core$IFn$_invoke$arity$1 ? fexpr__103407.cljs$core$IFn$_invoke$arity$1(p) : fexpr__103407.call(null,p));
});
});
sicmutils.mechanics.hamilton.Lagrangian__GT_Hamiltonian = sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$2(sicmutils.mechanics.hamilton.Lagrangian__GT_Hamiltonian_procedure,new cljs.core.Symbol(null,"Lagrangian->Hamiltonian","Lagrangian->Hamiltonian",570239049,null));
sicmutils.mechanics.hamilton.Hamiltonian__GT_Lagrangian_procedure = (function sicmutils$mechanics$hamilton$Hamiltonian__GT_Lagrangian_procedure(Hamiltonian){
return (function (p__103411){
var vec__103412 = p__103411;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103412,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103412,(1),null);
var qdot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103412,(2),null);
var H = (function sicmutils$mechanics$hamilton$Hamiltonian__GT_Lagrangian_procedure_$_H(p){
var G__103419 = sicmutils.mechanics.hamilton.__GT_H_state(t,q,p);
return (Hamiltonian.cljs$core$IFn$_invoke$arity$1 ? Hamiltonian.cljs$core$IFn$_invoke$arity$1(G__103419) : Hamiltonian.call(null,G__103419));
});
var fexpr__103420 = sicmutils.mechanics.hamilton.Legendre_transform_procedure(H);
return (fexpr__103420.cljs$core$IFn$_invoke$arity$1 ? fexpr__103420.cljs$core$IFn$_invoke$arity$1(qdot) : fexpr__103420.call(null,qdot));
});
});
sicmutils.mechanics.hamilton.Hamiltonian__GT_Lagrangian = sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$2(sicmutils.mechanics.hamilton.Hamiltonian__GT_Lagrangian_procedure,new cljs.core.Symbol(null,"Hamiltonian->Lagrangian","Hamiltonian->Lagrangian",-1691416956,null));
sicmutils.mechanics.hamilton.Poisson_bracket = (function sicmutils$mechanics$hamilton$Poisson_bracket(f,g){
return (function (x){
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
var gx = (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(x) : g.call(null,x));
if(((sicmutils.structure.structure_QMARK_(fx)) || (sicmutils.structure.structure_QMARK_(gx)))){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (af){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (ag){
var fexpr__103427 = (function (){var G__103428 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.structure.component,af),f);
var G__103429 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.structure.component,ag),g);
return (sicmutils.mechanics.hamilton.Poisson_bracket.cljs$core$IFn$_invoke$arity$2 ? sicmutils.mechanics.hamilton.Poisson_bracket.cljs$core$IFn$_invoke$arity$2(G__103428,G__103429) : sicmutils.mechanics.hamilton.Poisson_bracket.call(null,G__103428,G__103429));
})();
return (fexpr__103427.cljs$core$IFn$_invoke$arity$1 ? fexpr__103427.cljs$core$IFn$_invoke$arity$1(x) : fexpr__103427.call(null,x));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.structure.structure__GT_access_chains(gx)], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.structure.structure__GT_access_chains(fx)], 0));
} else {
var fexpr__103436 = sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103437 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0));
return (fexpr__103437.cljs$core$IFn$_invoke$arity$1 ? fexpr__103437.cljs$core$IFn$_invoke$arity$1(f) : fexpr__103437.call(null,f));
})(),(function (){var fexpr__103438 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__103438.cljs$core$IFn$_invoke$arity$1 ? fexpr__103438.cljs$core$IFn$_invoke$arity$1(g) : fexpr__103438.call(null,g));
})()),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103439 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__103439.cljs$core$IFn$_invoke$arity$1 ? fexpr__103439.cljs$core$IFn$_invoke$arity$1(f) : fexpr__103439.call(null,f));
})(),(function (){var fexpr__103441 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0));
return (fexpr__103441.cljs$core$IFn$_invoke$arity$1 ? fexpr__103441.cljs$core$IFn$_invoke$arity$1(g) : fexpr__103441.call(null,g));
})()));
return (fexpr__103436.cljs$core$IFn$_invoke$arity$1 ? fexpr__103436.cljs$core$IFn$_invoke$arity$1(x) : fexpr__103436.call(null,x));
}
});
});
/**
 * p. 428
 * 
 *   We define the Lie derivative of F, as a derivative-like operator, relative to
 *   the given Hamiltonian-like function, H. Generalization and redefinition in
 *   calculus/Lie.scm
 *   
 */
sicmutils.mechanics.hamilton.Lie_derivative = (function sicmutils$mechanics$hamilton$Lie_derivative(H){
return sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$2((function (F){
return sicmutils.mechanics.hamilton.Poisson_bracket(F,H);
}),(new cljs.core.List(null,new cljs.core.Symbol(null,"Lie-derivative","Lie-derivative",-641072185,null),(new cljs.core.List(null,H,null,(1),null)),(2),null)));
});
/**
 * the flow derivative generalizes the Lie derivative to allow for time dependent
 *   H and F --- computes the 'time' derivative of F along the flow specified by H
 */
sicmutils.mechanics.hamilton.flow_derivative = (function sicmutils$mechanics$hamilton$flow_derivative(H){
return sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$2((function (F){
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103443 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
return (fexpr__103443.cljs$core$IFn$_invoke$arity$1 ? fexpr__103443.cljs$core$IFn$_invoke$arity$1(F) : fexpr__103443.call(null,F));
})(),sicmutils.mechanics.hamilton.Poisson_bracket(F,H));
}),(new cljs.core.List(null,new cljs.core.Symbol(null,"flow-derivative","flow-derivative",-2031576450,null),(new cljs.core.List(null,H,null,(1),null)),(2),null)));
});
sicmutils.generic.Lie_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","function","sicmutils.value/function",-1964931037)], null),(function (f){
return sicmutils.mechanics.hamilton.Lie_derivative(f);
}));
/**
 * p. 428, the Lie transform is just the time-advance operator using the Lie
 *   derivative (see Hamiltonian.scm).
 */
sicmutils.mechanics.hamilton.Lie_transform = (function sicmutils$mechanics$hamilton$Lie_transform(H,t){
return sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.exp.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(t,sicmutils.generic.Lie_derivative.cljs$core$IFn$_invoke$arity$1(H))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"Lie-transform","Lie-transform",1913072017,null),null,(1),null)),(new cljs.core.List(null,H,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,t,null,(1),null))], 0)))));
});
/**
 * The generalization of Lie-transform to include time dependence.
 */
sicmutils.mechanics.hamilton.flow_transform = (function sicmutils$mechanics$hamilton$flow_transform(H,delta_t){
return sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.exp.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(delta_t,sicmutils.mechanics.hamilton.flow_derivative(H))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"flow-transform","flow-transform",1928355832,null),null,(1),null)),(new cljs.core.List(null,H,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,delta_t,null,(1),null))], 0)))));
});
sicmutils.mechanics.hamilton.standard_map = (function sicmutils$mechanics$hamilton$standard_map(K){
var pv = sicmutils.value.principal_value(sicmutils.value.twopi);
return (function (theta,I,cont,_fail){
var nI = pv((I + (K * Math.sin(theta))));
var G__103453 = pv((theta + nI));
var G__103454 = nI;
return (cont.cljs$core$IFn$_invoke$arity$2 ? cont.cljs$core$IFn$_invoke$arity$2(G__103453,G__103454) : cont.call(null,G__103453,G__103454));
});
});
sicmutils.mechanics.hamilton.standard_map_inverse = (function sicmutils$mechanics$hamilton$standard_map_inverse(K){
var pv = sicmutils.value.principal_value(sicmutils.value.twopi);
return (function (theta,I,cont,_fail){
var ntheta = pv((theta - I));
var G__103460 = ntheta;
var G__103461 = pv((I - (K * Math.sin(ntheta))));
return (cont.cljs$core$IFn$_invoke$arity$2 ? cont.cljs$core$IFn$_invoke$arity$2(G__103460,G__103461) : cont.call(null,G__103460,G__103461));
});
});
/**
 * f is a function of (x y continue fail), which calls continue with the values of
 *   x' y' that follow x y in the mapping.
 * 
 *   Returns a map of the same shape that iterates the iterated map n times before
 *   invoking the continuation, or invokes the fail continuation if the inner map
 *   fails.
 */
sicmutils.mechanics.hamilton.iterated_map = (function sicmutils$mechanics$hamilton$iterated_map(f,n){
if((!((n < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var lulz = cljs.core.constantly(null);
return (function (x,y,continue$,fail){
var x__$1 = x;
var y__$1 = y;
var i = n;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0))){
return (continue$.cljs$core$IFn$_invoke$arity$2 ? continue$.cljs$core$IFn$_invoke$arity$2(x__$1,y__$1) : continue$.call(null,x__$1,y__$1));
} else {
var temp__5751__auto__ = (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(x__$1,y__$1,cljs.core.vector,lulz) : f.call(null,x__$1,y__$1,cljs.core.vector,lulz));
if(cljs.core.truth_(temp__5751__auto__)){
var vec__103505 = temp__5751__auto__;
var x_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103505,(0),null);
var y_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103505,(1),null);
var G__103715 = x_SINGLEQUOTE_;
var G__103716 = y_SINGLEQUOTE_;
var G__103717 = (i - (1));
x__$1 = G__103715;
y__$1 = G__103716;
i = G__103717;
continue;
} else {
return (fail.cljs$core$IFn$_invoke$arity$0 ? fail.cljs$core$IFn$_invoke$arity$0() : fail.call(null));
}
}
break;
}
});
});
/**
 * A transformation of configuration coordinates F to a procedure implementing a
 *   transformation of phase-space coordinates (p. 320)
 */
sicmutils.mechanics.hamilton.F__GT_CH = (function sicmutils$mechanics$hamilton$F__GT_CH(F){
return (function (p__103522){
var vec__103523 = p__103522;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103523,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103523,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103523,(2),null);
var H_state = vec__103523;
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,(F.cljs$core$IFn$_invoke$arity$1 ? F.cljs$core$IFn$_invoke$arity$1(H_state) : F.call(null,H_state)),sicmutils.generic.solve_linear_right.cljs$core$IFn$_invoke$arity$2(p,(function (){var fexpr__103530 = (function (){var fexpr__103531 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0));
return (fexpr__103531.cljs$core$IFn$_invoke$arity$1 ? fexpr__103531.cljs$core$IFn$_invoke$arity$1(F) : fexpr__103531.call(null,F));
})();
return (fexpr__103530.cljs$core$IFn$_invoke$arity$1 ? fexpr__103530.cljs$core$IFn$_invoke$arity$1(H_state) : fexpr__103530.call(null,H_state));
})())], 0));
});
});
/**
 * Alias for [[F->CH]].
 */
sicmutils.mechanics.hamilton.F__GT_CT = sicmutils.mechanics.hamilton.F__GT_CH;
sicmutils.mechanics.hamilton.F__GT_K = (function sicmutils$mechanics$hamilton$F__GT_K(F){
return (function (H_state){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.solve_linear_right.cljs$core$IFn$_invoke$arity$2(sicmutils.mechanics.hamilton.momentum(H_state),(function (){var fexpr__103548 = (function (){var fexpr__103549 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0));
return (fexpr__103549.cljs$core$IFn$_invoke$arity$1 ? fexpr__103549.cljs$core$IFn$_invoke$arity$1(F) : fexpr__103549.call(null,F));
})();
return (fexpr__103548.cljs$core$IFn$_invoke$arity$1 ? fexpr__103548.cljs$core$IFn$_invoke$arity$1(H_state) : fexpr__103548.call(null,H_state));
})()),(function (){var fexpr__103554 = (function (){var fexpr__103555 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
return (fexpr__103555.cljs$core$IFn$_invoke$arity$1 ? fexpr__103555.cljs$core$IFn$_invoke$arity$1(F) : fexpr__103555.call(null,F));
})();
return (fexpr__103554.cljs$core$IFn$_invoke$arity$1 ? fexpr__103554.cljs$core$IFn$_invoke$arity$1(H_state) : fexpr__103554.call(null,H_state));
})()));
});
});
/**
 * p.324
 */
sicmutils.mechanics.hamilton.canonical_QMARK_ = (function sicmutils$mechanics$hamilton$canonical_QMARK_(C,H,Hprime){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.mechanics.hamilton.Hamiltonian__GT_state_derivative(H),C], 0)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(C) : sicmutils.calculus.derivative.D.call(null,C)),sicmutils.mechanics.hamilton.Hamiltonian__GT_state_derivative(Hprime)));
});
/**
 * p.324
 */
sicmutils.mechanics.hamilton.compositional_canonical_QMARK_ = (function sicmutils$mechanics$hamilton$compositional_canonical_QMARK_(C,H){
return sicmutils.mechanics.hamilton.canonical_QMARK_(C,H,sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([H,C], 0)));
});
sicmutils.mechanics.hamilton.J_func = (function sicmutils$mechanics$hamilton$J_func(DHs){
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(DHs,(2)),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(DHs,(1)))], 0));
});
sicmutils.mechanics.hamilton.T_func = (function sicmutils$mechanics$hamilton$T_func(s){
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),sicmutils.value.zero_like((sicmutils.mechanics.lagrange.coordinates.cljs$core$IFn$_invoke$arity$1 ? sicmutils.mechanics.lagrange.coordinates.cljs$core$IFn$_invoke$arity$1(s) : sicmutils.mechanics.lagrange.coordinates.call(null,s))),sicmutils.value.zero_like((sicmutils.mechanics.hamilton.momenta.cljs$core$IFn$_invoke$arity$1 ? sicmutils.mechanics.hamilton.momenta.cljs$core$IFn$_invoke$arity$1(s) : sicmutils.mechanics.hamilton.momenta.call(null,s)))], 0));
});
sicmutils.mechanics.hamilton.canonical_H_QMARK_ = (function sicmutils$mechanics$hamilton$canonical_H_QMARK_(C,H){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.mechanics.hamilton.D_phase_space(H),C], 0)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(C) : sicmutils.calculus.derivative.D.call(null,C)),sicmutils.mechanics.hamilton.D_phase_space(sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([H,C], 0)))));
});
sicmutils.mechanics.hamilton.canonical_K_QMARK_ = (function sicmutils$mechanics$hamilton$canonical_K_QMARK_(C,K){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.mechanics.hamilton.T_func,C], 0)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(C) : sicmutils.calculus.derivative.D.call(null,C)),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.mechanics.hamilton.T_func,sicmutils.mechanics.hamilton.D_phase_space(K))));
});
sicmutils.mechanics.hamilton.linear_function__GT_multiplier = (function sicmutils$mechanics$hamilton$linear_function__GT_multiplier(F,argument){
var fexpr__103605 = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(F) : sicmutils.calculus.derivative.D.call(null,F));
return (fexpr__103605.cljs$core$IFn$_invoke$arity$1 ? fexpr__103605.cljs$core$IFn$_invoke$arity$1(argument) : fexpr__103605.call(null,argument));
});
sicmutils.mechanics.hamilton.Phi = (function sicmutils$mechanics$hamilton$Phi(A){
return (function (v){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(A,v);
});
});
sicmutils.mechanics.hamilton.Phi_STAR_ = (function sicmutils$mechanics$hamilton$Phi_STAR_(A){
return (function (w){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(w,A);
});
});
/**
 * p.326
 */
sicmutils.mechanics.hamilton.time_independent_canonical_QMARK_ = (function sicmutils$mechanics$hamilton$time_independent_canonical_QMARK_(C){
return (function (s){
var G__103613 = sicmutils.structure.compatible_shape(s);
var fexpr__103612 = sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.mechanics.hamilton.J_func,sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.mechanics.hamilton.Phi((function (){var fexpr__103615 = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(C) : sicmutils.calculus.derivative.D.call(null,C));
return (fexpr__103615.cljs$core$IFn$_invoke$arity$1 ? fexpr__103615.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103615.call(null,s));
})()),sicmutils.mechanics.hamilton.J_func,sicmutils.mechanics.hamilton.Phi_STAR_((function (){var fexpr__103616 = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(C) : sicmutils.calculus.derivative.D.call(null,C));
return (fexpr__103616.cljs$core$IFn$_invoke$arity$1 ? fexpr__103616.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103616.call(null,s));
})())], 0)));
return (fexpr__103612.cljs$core$IFn$_invoke$arity$1 ? fexpr__103612.cljs$core$IFn$_invoke$arity$1(G__103613) : fexpr__103612.call(null,G__103613));
});
});
/**
 * Tests that K yields a canonical transformation if the C is symplectic. (The
 *   qp-canonical? code is really a symplectic test without factoring out the
 *   Hamiltonian.)
 */
sicmutils.mechanics.hamilton.qp_canonical_QMARK_ = (function sicmutils$mechanics$hamilton$qp_canonical_QMARK_(C,H){
return (function (s){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.mechanics.hamilton.J_func((function (){var G__103618 = (C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(s) : C.call(null,s));
var fexpr__103617 = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(H) : sicmutils.calculus.derivative.D.call(null,H));
return (fexpr__103617.cljs$core$IFn$_invoke$arity$1 ? fexpr__103617.cljs$core$IFn$_invoke$arity$1(G__103618) : fexpr__103617.call(null,G__103618));
})()),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103619 = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(C) : sicmutils.calculus.derivative.D.call(null,C));
return (fexpr__103619.cljs$core$IFn$_invoke$arity$1 ? fexpr__103619.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103619.call(null,s));
})(),sicmutils.mechanics.hamilton.J_func((function (){var fexpr__103621 = (function (){var G__103622 = sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([H,C], 0));
return (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(G__103622) : sicmutils.calculus.derivative.D.call(null,G__103622));
})();
return (fexpr__103621.cljs$core$IFn$_invoke$arity$1 ? fexpr__103621.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103621.call(null,s));
})())));
});
});
/**
 * p.327
 */
sicmutils.mechanics.hamilton.polar_canonical = (function sicmutils$mechanics$hamilton$polar_canonical(alpha){
return (function (p__103628){
var vec__103629 = p__103628;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103629,(0),null);
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103629,(1),null);
var I = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103629,(2),null);
var x = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),I),alpha)),sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(theta));
var p_x = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((2),alpha,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([I], 0))),sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(theta));
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,x,p_x], 0));
});
});
sicmutils.mechanics.hamilton.polar_canonical_inverse = (function sicmutils$mechanics$hamilton$polar_canonical_inverse(alpha){
return (function (p__103636){
var vec__103637 = p__103636;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103637,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103637,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103637,(2),null);
var I = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(alpha,sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x)),sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(p),alpha)),(2));
var theta = sicmutils.generic.atan.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(x,sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),I),alpha))),sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(p,sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((2),I,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([alpha], 0)))));
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,theta,I], 0));
});
});
sicmutils.mechanics.hamilton.two_particle_center_of_mass = (function sicmutils$mechanics$hamilton$two_particle_center_of_mass(m0,m1){
return (function (p__103640){
var vec__103641 = p__103640;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103641,(0),null);
var vec__103644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103641,(1),null);
var x0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103644,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103644,(1),null);
var G__103647 = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m0,x0),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m1,x1)),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(m0,m1));
var G__103648 = sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(x1,x0);
return (sicmutils.mechanics.lagrange.coordinate_tuple.cljs$core$IFn$_invoke$arity$2 ? sicmutils.mechanics.lagrange.coordinate_tuple.cljs$core$IFn$_invoke$arity$2(G__103647,G__103648) : sicmutils.mechanics.lagrange.coordinate_tuple.call(null,G__103647,G__103648));
});
});
sicmutils.mechanics.hamilton.two_particle_center_of_mass_canonical = (function sicmutils$mechanics$hamilton$two_particle_center_of_mass_canonical(m0,m1){
return (function (p__103649){
var vec__103650 = p__103649;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103650,(0),null);
var vec__103653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103650,(1),null);
var x0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103653,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103653,(1),null);
var vec__103656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103650,(2),null);
var p0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103656,(0),null);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103656,(1),null);
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,(function (){var G__103659 = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m0,x0),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m1,x1)),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(m0,m1));
var G__103660 = sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(x1,x0);
return (sicmutils.mechanics.lagrange.coordinate_tuple.cljs$core$IFn$_invoke$arity$2 ? sicmutils.mechanics.lagrange.coordinate_tuple.cljs$core$IFn$_invoke$arity$2(G__103659,G__103660) : sicmutils.mechanics.lagrange.coordinate_tuple.call(null,G__103659,G__103660));
})(),(function (){var G__103661 = sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(p0,p1);
var G__103662 = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m0,p1),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m1,p0)),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(m0,m1));
return (sicmutils.mechanics.lagrange.momentum_tuple.cljs$core$IFn$_invoke$arity$2 ? sicmutils.mechanics.lagrange.momentum_tuple.cljs$core$IFn$_invoke$arity$2(G__103661,G__103662) : sicmutils.mechanics.lagrange.momentum_tuple.call(null,G__103661,G__103662));
})()], 0));
});
});
sicmutils.mechanics.hamilton.transpose_function = (function sicmutils$mechanics$hamilton$transpose_function(A){
return (function (p){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(p,A);
});
});
sicmutils.mechanics.hamilton.multiplicative_transpose = (function sicmutils$mechanics$hamilton$multiplicative_transpose(s){
return (function (A){
return sicmutils.mechanics.hamilton.linear_function__GT_multiplier(sicmutils.mechanics.hamilton.transpose_function(A),s);
});
});
sicmutils.mechanics.hamilton.symplectic_two_form = (function sicmutils$mechanics$hamilton$symplectic_two_form(zeta1,zeta2){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((sicmutils.mechanics.hamilton.momenta.cljs$core$IFn$_invoke$arity$1 ? sicmutils.mechanics.hamilton.momenta.cljs$core$IFn$_invoke$arity$1(zeta2) : sicmutils.mechanics.hamilton.momenta.call(null,zeta2)),(sicmutils.mechanics.lagrange.coordinates.cljs$core$IFn$_invoke$arity$1 ? sicmutils.mechanics.lagrange.coordinates.cljs$core$IFn$_invoke$arity$1(zeta1) : sicmutils.mechanics.lagrange.coordinates.call(null,zeta1))),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((sicmutils.mechanics.hamilton.momenta.cljs$core$IFn$_invoke$arity$1 ? sicmutils.mechanics.hamilton.momenta.cljs$core$IFn$_invoke$arity$1(zeta1) : sicmutils.mechanics.hamilton.momenta.call(null,zeta1)),(sicmutils.mechanics.lagrange.coordinates.cljs$core$IFn$_invoke$arity$1 ? sicmutils.mechanics.lagrange.coordinates.cljs$core$IFn$_invoke$arity$1(zeta2) : sicmutils.mechanics.lagrange.coordinates.call(null,zeta2))));
});
sicmutils.mechanics.hamilton.canonical_transform_QMARK_ = (function sicmutils$mechanics$hamilton$canonical_transform_QMARK_(C){
return (function (s){
var J = (function (){var G__103664 = sicmutils.structure.compatible_shape(s);
var fexpr__103663 = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(sicmutils.mechanics.hamilton.J_func) : sicmutils.calculus.derivative.D.call(null,sicmutils.mechanics.hamilton.J_func));
return (fexpr__103663.cljs$core$IFn$_invoke$arity$1 ? fexpr__103663.cljs$core$IFn$_invoke$arity$1(G__103664) : fexpr__103663.call(null,G__103664));
})();
var DCs = (function (){var fexpr__103665 = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(C) : sicmutils.calculus.derivative.D.call(null,C));
return (fexpr__103665.cljs$core$IFn$_invoke$arity$1 ? fexpr__103665.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103665.call(null,s));
})();
var DCsT = sicmutils.matrix.s_COLON_transpose.cljs$core$IFn$_invoke$arity$2(DCs,s);
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(J,sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(DCs,J,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([DCsT], 0)));
});
});
/**
 * n == degrees of freedom
 */
sicmutils.mechanics.hamilton.J_matrix = (function sicmutils$mechanics$hamilton$J_matrix(n){
var twon_PLUS_1 = (sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),n) + (1));
return sicmutils.matrix.generate.cljs$core$IFn$_invoke$arity$3(twon_PLUS_1,twon_PLUS_1,(function (a,b){
if((a === (0))){
return (0);
} else {
if((b === (0))){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((a + n),b)){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((b + n),a)){
return (-1);
} else {
return (0);

}
}
}
}
}));
});
/**
 * Symplectic test in terms of matrices
 */
sicmutils.mechanics.hamilton.symplectic_QMARK_ = (function sicmutils$mechanics$hamilton$symplectic_QMARK_(C){
return (function (s){
var J = sicmutils.mechanics.hamilton.J_matrix(sicmutils.mechanics.lagrange.state__GT_n_dof(s));
var DC = sicmutils.calculus.derivative.D_as_matrix(C)(s);
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(J,sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(DC,J,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.transpose.cljs$core$IFn$_invoke$arity$1(DC)], 0)));
});
});
/**
 * p. 334 (used, but not defined there)
 */
sicmutils.mechanics.hamilton.symplectic_unit = (function sicmutils$mechanics$hamilton$symplectic_unit(n){
var twoN = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),n);
return sicmutils.matrix.generate.cljs$core$IFn$_invoke$arity$3(twoN,twoN,(function (a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(a,n),b)){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(b,n),a)){
return (-1);
} else {
return (0);

}
}
}));
});
/**
 * p. 334
 */
sicmutils.mechanics.hamilton.symplectic_matrix_QMARK_ = (function sicmutils$mechanics$hamilton$symplectic_matrix_QMARK_(M){
var two_n = sicmutils.matrix.dimension(M);
if(cljs.core.even_QMARK_(two_n)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Wrong type -- symplectic-matrix?",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"M","M",-1755742206),M], null));
}

var J = sicmutils.mechanics.hamilton.symplectic_unit(cljs.core.quot(two_n,(2)));
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(J,sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(M,J,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.transpose.cljs$core$IFn$_invoke$arity$1(M)], 0)));
});
sicmutils.mechanics.hamilton.qp_submatrix = (function sicmutils$mechanics$hamilton$qp_submatrix(m){
return sicmutils.matrix.without(m,(0),(0));
});
/**
 * p. 334
 */
sicmutils.mechanics.hamilton.symplectic_transform_QMARK_ = (function sicmutils$mechanics$hamilton$symplectic_transform_QMARK_(C){
return (function (s){
return sicmutils.mechanics.hamilton.symplectic_matrix_QMARK_(sicmutils.mechanics.hamilton.qp_submatrix(sicmutils.calculus.derivative.D_as_matrix(C)(s)));
});
});

//# sourceMappingURL=sicmutils.mechanics.hamilton.js.map
