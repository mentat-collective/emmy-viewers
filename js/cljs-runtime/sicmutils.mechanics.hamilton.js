goog.provide('sicmutils.mechanics.hamilton');
/**
 * Returns function signature for a Hamiltonian with n degrees of freedom (or an
 *   unrestricted number if n is not given).
 * 
 *   Useful for constructing Hamiltonian literal functions.
 */
sicmutils.mechanics.hamilton.Hamiltonian = (function sicmutils$mechanics$hamilton$Hamiltonian(n){
var r__20948__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"UP","UP",-1898089532,null),new cljs.core.Symbol(null,"Real","Real",374292741,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"UP*","UP*",294235991,null),new cljs.core.Symbol(null,"Real","Real",374292741,null),n], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"DOWN*","DOWN*",1300864675,null),new cljs.core.Symbol(null,"Real","Real",374292741,null),n], null))], null)),new cljs.core.Symbol(null,"Real","Real",374292741,null)], null));
var or__4253__auto__ = r__20948__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__20948__auto__);
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
var vec__103274 = s;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103274,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103274,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103274,(2),null);
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
return sicmutils.mechanics.hamilton.__GT_H_state(sicmutils.mechanics.lagrange.time(Ls),sicmutils.mechanics.lagrange.coordinate(Ls),(function (){var fexpr__103283 = (function (){var fexpr__103284 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__103284.cljs$core$IFn$_invoke$arity$1 ? fexpr__103284.cljs$core$IFn$_invoke$arity$1(L) : fexpr__103284.call(null,L));
})();
return (fexpr__103283.cljs$core$IFn$_invoke$arity$1 ? fexpr__103283.cljs$core$IFn$_invoke$arity$1(Ls) : fexpr__103283.call(null,Ls));
})());
});
});
sicmutils.mechanics.hamilton.H_state__GT_L_state = (function sicmutils$mechanics$hamilton$H_state__GT_L_state(H){
return (function (Hs){
return sicmutils.mechanics.lagrange.__GT_L_state(sicmutils.mechanics.lagrange.time(Hs),sicmutils.mechanics.lagrange.coordinate(Hs),(function (){var fexpr__103286 = (function (){var fexpr__103287 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__103287.cljs$core$IFn$_invoke$arity$1 ? fexpr__103287.cljs$core$IFn$_invoke$arity$1(H) : fexpr__103287.call(null,H));
})();
return (fexpr__103286.cljs$core$IFn$_invoke$arity$1 ? fexpr__103286.cljs$core$IFn$_invoke$arity$1(Hs) : fexpr__103286.call(null,Hs));
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
return sicmutils.mechanics.hamilton.__GT_H_state((1),(function (){var fexpr__103289 = (function (){var fexpr__103290 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__103290.cljs$core$IFn$_invoke$arity$1 ? fexpr__103290.cljs$core$IFn$_invoke$arity$1(H) : fexpr__103290.call(null,H));
})();
return (fexpr__103289.cljs$core$IFn$_invoke$arity$1 ? fexpr__103289.cljs$core$IFn$_invoke$arity$1(H_state) : fexpr__103289.call(null,H_state));
})(),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__103292 = (function (){var fexpr__103293 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0));
return (fexpr__103293.cljs$core$IFn$_invoke$arity$1 ? fexpr__103293.cljs$core$IFn$_invoke$arity$1(H) : fexpr__103293.call(null,H));
})();
return (fexpr__103292.cljs$core$IFn$_invoke$arity$1 ? fexpr__103292.cljs$core$IFn$_invoke$arity$1(H_state) : fexpr__103292.call(null,H_state));
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
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),(function (){var fexpr__103295 = (function (){var fexpr__103296 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__103296.cljs$core$IFn$_invoke$arity$1 ? fexpr__103296.cljs$core$IFn$_invoke$arity$1(H) : fexpr__103296.call(null,H));
})();
return (fexpr__103295.cljs$core$IFn$_invoke$arity$1 ? fexpr__103295.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103295.call(null,s));
})(),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__103298 = (function (){var fexpr__103299 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0));
return (fexpr__103299.cljs$core$IFn$_invoke$arity$1 ? fexpr__103299.cljs$core$IFn$_invoke$arity$1(H) : fexpr__103299.call(null,H));
})();
return (fexpr__103298.cljs$core$IFn$_invoke$arity$1 ? fexpr__103298.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103298.call(null,s));
})())], 0));
});
});
sicmutils.mechanics.hamilton.H_rectangular = (function sicmutils$mechanics$hamilton$H_rectangular(m,V){
return (function (p__103300){
var vec__103301 = p__103300;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103301,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103301,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103301,(2),null);
return sicmutils.mechanics.hamilton.make_Hamiltonian(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(p),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),m)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(V,q));
});
});
sicmutils.mechanics.hamilton.H_central = (function sicmutils$mechanics$hamilton$H_central(m,V){
return (function (p__103304){
var vec__103305 = p__103304;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103305,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103305,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103305,(2),null);
return sicmutils.mechanics.hamilton.make_Hamiltonian(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(p),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),m)),(function (){var G__103308 = sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(q);
return (V.cljs$core$IFn$_invoke$arity$1 ? V.cljs$core$IFn$_invoke$arity$1(G__103308) : V.call(null,G__103308));
})());
});
});
sicmutils.mechanics.hamilton.H_central_polar = (function sicmutils$mechanics$hamilton$H_central_polar(m,V){
return (function (p__103314){
var vec__103315 = p__103314;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103315,(0),null);
var vec__103318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103315,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103318,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103318,(1),null);
var vec__103321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103315,(2),null);
var p_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103321,(0),null);
var p_phi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103321,(1),null);
return sicmutils.mechanics.hamilton.make_Hamiltonian(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(p_r),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(p_phi,r))),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),m)),(V.cljs$core$IFn$_invoke$arity$1 ? V.cljs$core$IFn$_invoke$arity$1(r) : V.call(null,r)));
});
});
sicmutils.mechanics.hamilton.H_harmonic = (function sicmutils$mechanics$hamilton$H_harmonic(m,k){
return (function (p__103324){
var vec__103325 = p__103324;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103325,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103325,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103325,(2),null);
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
return cljs.core.not(sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(thing,sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1((function (){var G__103333 = (Dpg.cljs$core$IFn$_invoke$arity$1 ? Dpg.cljs$core$IFn$_invoke$arity$1(thing) : Dpg.call(null,thing));
return (w_of_v.cljs$core$IFn$_invoke$arity$1 ? w_of_v.cljs$core$IFn$_invoke$arity$1(G__103333) : w_of_v.call(null,G__103333));
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
return (function (p__103335){
var vec__103336 = p__103335;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103336,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103336,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103336,(2),null);
var L = (function (p1__103334_SHARP_){
var G__103339 = sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,p1__103334_SHARP_], 0));
return (Lagrangian.cljs$core$IFn$_invoke$arity$1 ? Lagrangian.cljs$core$IFn$_invoke$arity$1(G__103339) : Lagrangian.call(null,G__103339));
});
var fexpr__103340 = (sicmutils.mechanics.hamilton.Legendre_transform.cljs$core$IFn$_invoke$arity$1 ? sicmutils.mechanics.hamilton.Legendre_transform.cljs$core$IFn$_invoke$arity$1(L) : sicmutils.mechanics.hamilton.Legendre_transform.call(null,L));
return (fexpr__103340.cljs$core$IFn$_invoke$arity$1 ? fexpr__103340.cljs$core$IFn$_invoke$arity$1(p) : fexpr__103340.call(null,p));
});
});
sicmutils.mechanics.hamilton.Lagrangian__GT_Hamiltonian = sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$2(sicmutils.mechanics.hamilton.Lagrangian__GT_Hamiltonian_procedure,new cljs.core.Symbol(null,"Lagrangian->Hamiltonian","Lagrangian->Hamiltonian",570239049,null));
sicmutils.mechanics.hamilton.Hamiltonian__GT_Lagrangian_procedure = (function sicmutils$mechanics$hamilton$Hamiltonian__GT_Lagrangian_procedure(Hamiltonian){
return (function (p__103341){
var vec__103342 = p__103341;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103342,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103342,(1),null);
var qdot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103342,(2),null);
var H = (function sicmutils$mechanics$hamilton$Hamiltonian__GT_Lagrangian_procedure_$_H(p){
var G__103346 = sicmutils.mechanics.hamilton.__GT_H_state(t,q,p);
return (Hamiltonian.cljs$core$IFn$_invoke$arity$1 ? Hamiltonian.cljs$core$IFn$_invoke$arity$1(G__103346) : Hamiltonian.call(null,G__103346));
});
var fexpr__103347 = sicmutils.mechanics.hamilton.Legendre_transform_procedure(H);
return (fexpr__103347.cljs$core$IFn$_invoke$arity$1 ? fexpr__103347.cljs$core$IFn$_invoke$arity$1(qdot) : fexpr__103347.call(null,qdot));
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
var fexpr__103350 = (function (){var G__103351 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.structure.component,af),f);
var G__103352 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.structure.component,ag),g);
return (sicmutils.mechanics.hamilton.Poisson_bracket.cljs$core$IFn$_invoke$arity$2 ? sicmutils.mechanics.hamilton.Poisson_bracket.cljs$core$IFn$_invoke$arity$2(G__103351,G__103352) : sicmutils.mechanics.hamilton.Poisson_bracket.call(null,G__103351,G__103352));
})();
return (fexpr__103350.cljs$core$IFn$_invoke$arity$1 ? fexpr__103350.cljs$core$IFn$_invoke$arity$1(x) : fexpr__103350.call(null,x));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.structure.structure__GT_access_chains(gx)], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.structure.structure__GT_access_chains(fx)], 0));
} else {
var fexpr__103363 = sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103364 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0));
return (fexpr__103364.cljs$core$IFn$_invoke$arity$1 ? fexpr__103364.cljs$core$IFn$_invoke$arity$1(f) : fexpr__103364.call(null,f));
})(),(function (){var fexpr__103365 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__103365.cljs$core$IFn$_invoke$arity$1 ? fexpr__103365.cljs$core$IFn$_invoke$arity$1(g) : fexpr__103365.call(null,g));
})()),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103366 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__103366.cljs$core$IFn$_invoke$arity$1 ? fexpr__103366.cljs$core$IFn$_invoke$arity$1(f) : fexpr__103366.call(null,f));
})(),(function (){var fexpr__103367 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0));
return (fexpr__103367.cljs$core$IFn$_invoke$arity$1 ? fexpr__103367.cljs$core$IFn$_invoke$arity$1(g) : fexpr__103367.call(null,g));
})()));
return (fexpr__103363.cljs$core$IFn$_invoke$arity$1 ? fexpr__103363.cljs$core$IFn$_invoke$arity$1(x) : fexpr__103363.call(null,x));
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
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103373 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
return (fexpr__103373.cljs$core$IFn$_invoke$arity$1 ? fexpr__103373.cljs$core$IFn$_invoke$arity$1(F) : fexpr__103373.call(null,F));
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
var G__103374 = pv((theta + nI));
var G__103375 = nI;
return (cont.cljs$core$IFn$_invoke$arity$2 ? cont.cljs$core$IFn$_invoke$arity$2(G__103374,G__103375) : cont.call(null,G__103374,G__103375));
});
});
sicmutils.mechanics.hamilton.standard_map_inverse = (function sicmutils$mechanics$hamilton$standard_map_inverse(K){
var pv = sicmutils.value.principal_value(sicmutils.value.twopi);
return (function (theta,I,cont,_fail){
var ntheta = pv((theta - I));
var G__103376 = ntheta;
var G__103377 = pv((I - (K * Math.sin(ntheta))));
return (cont.cljs$core$IFn$_invoke$arity$2 ? cont.cljs$core$IFn$_invoke$arity$2(G__103376,G__103377) : cont.call(null,G__103376,G__103377));
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
var vec__103381 = temp__5751__auto__;
var x_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103381,(0),null);
var y_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103381,(1),null);
var G__103517 = x_SINGLEQUOTE_;
var G__103518 = y_SINGLEQUOTE_;
var G__103519 = (i - (1));
x__$1 = G__103517;
y__$1 = G__103518;
i = G__103519;
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
return (function (p__103384){
var vec__103385 = p__103384;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103385,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103385,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103385,(2),null);
var H_state = vec__103385;
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,(F.cljs$core$IFn$_invoke$arity$1 ? F.cljs$core$IFn$_invoke$arity$1(H_state) : F.call(null,H_state)),sicmutils.generic.solve_linear_right.cljs$core$IFn$_invoke$arity$2(p,(function (){var fexpr__103389 = (function (){var fexpr__103390 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0));
return (fexpr__103390.cljs$core$IFn$_invoke$arity$1 ? fexpr__103390.cljs$core$IFn$_invoke$arity$1(F) : fexpr__103390.call(null,F));
})();
return (fexpr__103389.cljs$core$IFn$_invoke$arity$1 ? fexpr__103389.cljs$core$IFn$_invoke$arity$1(H_state) : fexpr__103389.call(null,H_state));
})())], 0));
});
});
/**
 * Alias for [[F->CH]].
 */
sicmutils.mechanics.hamilton.F__GT_CT = sicmutils.mechanics.hamilton.F__GT_CH;
sicmutils.mechanics.hamilton.F__GT_K = (function sicmutils$mechanics$hamilton$F__GT_K(F){
return (function (H_state){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.solve_linear_right.cljs$core$IFn$_invoke$arity$2(sicmutils.mechanics.hamilton.momentum(H_state),(function (){var fexpr__103392 = (function (){var fexpr__103393 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0));
return (fexpr__103393.cljs$core$IFn$_invoke$arity$1 ? fexpr__103393.cljs$core$IFn$_invoke$arity$1(F) : fexpr__103393.call(null,F));
})();
return (fexpr__103392.cljs$core$IFn$_invoke$arity$1 ? fexpr__103392.cljs$core$IFn$_invoke$arity$1(H_state) : fexpr__103392.call(null,H_state));
})()),(function (){var fexpr__103395 = (function (){var fexpr__103396 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
return (fexpr__103396.cljs$core$IFn$_invoke$arity$1 ? fexpr__103396.cljs$core$IFn$_invoke$arity$1(F) : fexpr__103396.call(null,F));
})();
return (fexpr__103395.cljs$core$IFn$_invoke$arity$1 ? fexpr__103395.cljs$core$IFn$_invoke$arity$1(H_state) : fexpr__103395.call(null,H_state));
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
var fexpr__103397 = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(F) : sicmutils.calculus.derivative.D.call(null,F));
return (fexpr__103397.cljs$core$IFn$_invoke$arity$1 ? fexpr__103397.cljs$core$IFn$_invoke$arity$1(argument) : fexpr__103397.call(null,argument));
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
var G__103405 = sicmutils.structure.compatible_shape(s);
var fexpr__103404 = sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.mechanics.hamilton.J_func,sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.mechanics.hamilton.Phi((function (){var fexpr__103406 = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(C) : sicmutils.calculus.derivative.D.call(null,C));
return (fexpr__103406.cljs$core$IFn$_invoke$arity$1 ? fexpr__103406.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103406.call(null,s));
})()),sicmutils.mechanics.hamilton.J_func,sicmutils.mechanics.hamilton.Phi_STAR_((function (){var fexpr__103407 = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(C) : sicmutils.calculus.derivative.D.call(null,C));
return (fexpr__103407.cljs$core$IFn$_invoke$arity$1 ? fexpr__103407.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103407.call(null,s));
})())], 0)));
return (fexpr__103404.cljs$core$IFn$_invoke$arity$1 ? fexpr__103404.cljs$core$IFn$_invoke$arity$1(G__103405) : fexpr__103404.call(null,G__103405));
});
});
/**
 * Tests that K yields a canonical transformation if the C is symplectic. (The
 *   qp-canonical? code is really a symplectic test without factoring out the
 *   Hamiltonian.)
 */
sicmutils.mechanics.hamilton.qp_canonical_QMARK_ = (function sicmutils$mechanics$hamilton$qp_canonical_QMARK_(C,H){
return (function (s){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.mechanics.hamilton.J_func((function (){var G__103409 = (C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(s) : C.call(null,s));
var fexpr__103408 = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(H) : sicmutils.calculus.derivative.D.call(null,H));
return (fexpr__103408.cljs$core$IFn$_invoke$arity$1 ? fexpr__103408.cljs$core$IFn$_invoke$arity$1(G__103409) : fexpr__103408.call(null,G__103409));
})()),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103410 = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(C) : sicmutils.calculus.derivative.D.call(null,C));
return (fexpr__103410.cljs$core$IFn$_invoke$arity$1 ? fexpr__103410.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103410.call(null,s));
})(),sicmutils.mechanics.hamilton.J_func((function (){var fexpr__103412 = (function (){var G__103413 = sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([H,C], 0));
return (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(G__103413) : sicmutils.calculus.derivative.D.call(null,G__103413));
})();
return (fexpr__103412.cljs$core$IFn$_invoke$arity$1 ? fexpr__103412.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103412.call(null,s));
})())));
});
});
/**
 * p.327
 */
sicmutils.mechanics.hamilton.polar_canonical = (function sicmutils$mechanics$hamilton$polar_canonical(alpha){
return (function (p__103414){
var vec__103415 = p__103414;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103415,(0),null);
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103415,(1),null);
var I = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103415,(2),null);
var x = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),I),alpha)),sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(theta));
var p_x = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((2),alpha,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([I], 0))),sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(theta));
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,x,p_x], 0));
});
});
sicmutils.mechanics.hamilton.polar_canonical_inverse = (function sicmutils$mechanics$hamilton$polar_canonical_inverse(alpha){
return (function (p__103424){
var vec__103425 = p__103424;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103425,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103425,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103425,(2),null);
var I = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(alpha,sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x)),sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(p),alpha)),(2));
var theta = sicmutils.generic.atan.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(x,sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),I),alpha))),sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(p,sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((2),I,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([alpha], 0)))));
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,theta,I], 0));
});
});
sicmutils.mechanics.hamilton.two_particle_center_of_mass = (function sicmutils$mechanics$hamilton$two_particle_center_of_mass(m0,m1){
return (function (p__103431){
var vec__103432 = p__103431;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103432,(0),null);
var vec__103435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103432,(1),null);
var x0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103435,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103435,(1),null);
var G__103438 = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m0,x0),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m1,x1)),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(m0,m1));
var G__103439 = sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(x1,x0);
return (sicmutils.mechanics.lagrange.coordinate_tuple.cljs$core$IFn$_invoke$arity$2 ? sicmutils.mechanics.lagrange.coordinate_tuple.cljs$core$IFn$_invoke$arity$2(G__103438,G__103439) : sicmutils.mechanics.lagrange.coordinate_tuple.call(null,G__103438,G__103439));
});
});
sicmutils.mechanics.hamilton.two_particle_center_of_mass_canonical = (function sicmutils$mechanics$hamilton$two_particle_center_of_mass_canonical(m0,m1){
return (function (p__103440){
var vec__103441 = p__103440;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103441,(0),null);
var vec__103444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103441,(1),null);
var x0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103444,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103444,(1),null);
var vec__103447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103441,(2),null);
var p0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103447,(0),null);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103447,(1),null);
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,(function (){var G__103450 = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m0,x0),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m1,x1)),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(m0,m1));
var G__103451 = sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(x1,x0);
return (sicmutils.mechanics.lagrange.coordinate_tuple.cljs$core$IFn$_invoke$arity$2 ? sicmutils.mechanics.lagrange.coordinate_tuple.cljs$core$IFn$_invoke$arity$2(G__103450,G__103451) : sicmutils.mechanics.lagrange.coordinate_tuple.call(null,G__103450,G__103451));
})(),(function (){var G__103452 = sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(p0,p1);
var G__103453 = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m0,p1),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m1,p0)),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(m0,m1));
return (sicmutils.mechanics.lagrange.momentum_tuple.cljs$core$IFn$_invoke$arity$2 ? sicmutils.mechanics.lagrange.momentum_tuple.cljs$core$IFn$_invoke$arity$2(G__103452,G__103453) : sicmutils.mechanics.lagrange.momentum_tuple.call(null,G__103452,G__103453));
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
var J = (function (){var G__103467 = sicmutils.structure.compatible_shape(s);
var fexpr__103466 = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(sicmutils.mechanics.hamilton.J_func) : sicmutils.calculus.derivative.D.call(null,sicmutils.mechanics.hamilton.J_func));
return (fexpr__103466.cljs$core$IFn$_invoke$arity$1 ? fexpr__103466.cljs$core$IFn$_invoke$arity$1(G__103467) : fexpr__103466.call(null,G__103467));
})();
var DCs = (function (){var fexpr__103468 = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(C) : sicmutils.calculus.derivative.D.call(null,C));
return (fexpr__103468.cljs$core$IFn$_invoke$arity$1 ? fexpr__103468.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103468.call(null,s));
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
