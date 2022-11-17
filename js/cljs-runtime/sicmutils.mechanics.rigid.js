goog.provide('sicmutils.mechanics.rigid');
sicmutils.mechanics.rigid.three_vector_components__GT_antisymmetric = (function sicmutils$mechanics$rigid$three_vector_components__GT_antisymmetric(p__103653){
var vec__103655 = p__103653;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103655,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103655,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103655,(2),null);
return sicmutils.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(z),y], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [z,(0),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(x)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(y),x,(0)], null)], 0));
});
/**
 * Given an antisymmetric matrix `a` of dimension 3, returns a column vector of
 *   its positive components.
 */
sicmutils.mechanics.rigid.antisymmetric__GT_column_matrix = (function sicmutils$mechanics$rigid$antisymmetric__GT_column_matrix(a){
if(sicmutils.matrix.antisymmetric_QMARK_(a)){
} else {
throw (new Error("Assert failed: (matrix/antisymmetric? a)"));
}

return sicmutils.matrix.column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null))], 0));
});
sicmutils.mechanics.rigid.M_of_q__GT_omega_of_t = (function sicmutils$mechanics$rigid$M_of_q__GT_omega_of_t(M_of_q){
return (function (q){
var M_of_t = sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([M_of_q,q], 0));
return (function (t){
return sicmutils.mechanics.rigid.antisymmetric__GT_column_matrix(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103669 = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(M_of_t) : sicmutils.calculus.derivative.D.call(null,M_of_t));
return (fexpr__103669.cljs$core$IFn$_invoke$arity$1 ? fexpr__103669.cljs$core$IFn$_invoke$arity$1(t) : fexpr__103669.call(null,t));
})(),sicmutils.matrix.transpose((M_of_t.cljs$core$IFn$_invoke$arity$1 ? M_of_t.cljs$core$IFn$_invoke$arity$1(t) : M_of_t.call(null,t)))));
});
});
});
sicmutils.mechanics.rigid.M_of_q__GT_omega_body_of_t = (function sicmutils$mechanics$rigid$M_of_q__GT_omega_body_of_t(M_of_q){
return (function (q){
return (function (t){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.transpose((function (){var G__103672 = (q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(t) : q.call(null,t));
return (M_of_q.cljs$core$IFn$_invoke$arity$1 ? M_of_q.cljs$core$IFn$_invoke$arity$1(G__103672) : M_of_q.call(null,G__103672));
})()),(function (){var fexpr__103682 = sicmutils.mechanics.rigid.M_of_q__GT_omega_of_t(M_of_q)(q);
return (fexpr__103682.cljs$core$IFn$_invoke$arity$1 ? fexpr__103682.cljs$core$IFn$_invoke$arity$1(t) : fexpr__103682.call(null,t));
})());
});
});
});
sicmutils.mechanics.rigid.M__GT_omega = (function sicmutils$mechanics$rigid$M__GT_omega(M_of_q){
return sicmutils.mechanics.lagrange.Gamma_bar(sicmutils.mechanics.rigid.M_of_q__GT_omega_of_t(M_of_q));
});
sicmutils.mechanics.rigid.M__GT_omega_body = (function sicmutils$mechanics$rigid$M__GT_omega_body(M_of_q){
return sicmutils.mechanics.lagrange.Gamma_bar(sicmutils.mechanics.rigid.M_of_q__GT_omega_body_of_t(M_of_q));
});
sicmutils.mechanics.rigid.T_body = (function sicmutils$mechanics$rigid$T_body(A,B,C){
return (function (p__103699){
var vec__103701 = p__103699;
var w0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103701,(0),null);
var w1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103701,(1),null);
var w2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103701,(2),null);
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(A,sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(w0)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(B,sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(w1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(C,sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(w2))], 0)));
});
});
sicmutils.mechanics.rigid.L_body = (function sicmutils$mechanics$rigid$L_body(A,B,C){
return (function (p__103722){
var vec__103724 = p__103722;
var w0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103724,(0),null);
var w1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103724,(1),null);
var w2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103724,(2),null);
return sicmutils.structure.down.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(A,w0),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(B,w1),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(C,w2)], 0));
});
});
sicmutils.mechanics.rigid.L_space = (function sicmutils$mechanics$rigid$L_space(M){
return (function (A,B,C){
return (function (omega_body){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.mechanics.rigid.L_body(A,B,C)(omega_body),sicmutils.generic.transpose.cljs$core$IFn$_invoke$arity$1(M));
});
});
});
sicmutils.mechanics.rigid.Euler__GT_omega = (function sicmutils$mechanics$rigid$Euler__GT_omega(angles_path){
return (function (t){
var M_on_path = (function sicmutils$mechanics$rigid$Euler__GT_omega_$_M_on_path(t__$1){
return sicmutils.mechanics.rotation.Euler__GT_M((angles_path.cljs$core$IFn$_invoke$arity$1 ? angles_path.cljs$core$IFn$_invoke$arity$1(t__$1) : angles_path.call(null,t__$1)));
});
var w_cross = (function sicmutils$mechanics$rigid$Euler__GT_omega_$_w_cross(t__$1){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103747 = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(M_on_path) : sicmutils.calculus.derivative.D.call(null,M_on_path));
return (fexpr__103747.cljs$core$IFn$_invoke$arity$1 ? fexpr__103747.cljs$core$IFn$_invoke$arity$1(t__$1) : fexpr__103747.call(null,t__$1));
})(),sicmutils.generic.transpose.cljs$core$IFn$_invoke$arity$1(M_on_path(t__$1)));
});
return sicmutils.mechanics.rigid.antisymmetric__GT_column_matrix(w_cross(t));
});
});
sicmutils.mechanics.rigid.Euler__GT_omega_body = (function sicmutils$mechanics$rigid$Euler__GT_omega_body(angles_path){
return (function (t){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.transpose.cljs$core$IFn$_invoke$arity$1(sicmutils.mechanics.rotation.Euler__GT_M((angles_path.cljs$core$IFn$_invoke$arity$1 ? angles_path.cljs$core$IFn$_invoke$arity$1(t) : angles_path.call(null,t)))),sicmutils.mechanics.rigid.Euler__GT_omega(angles_path)(t));
});
});
/**
 * Although this implementation appears to summarize `(M->omega-body r/Euler->M)`,
 *   it is actually essential to prevent intermediate expression explosion.
 */
sicmutils.mechanics.rigid.Euler_state__GT_omega_body = (function sicmutils$mechanics$rigid$Euler_state__GT_omega_body(p__103750){
var vec__103751 = p__103750;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103751,(0),null);
var vec__103754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103751,(1),null);
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103754,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103754,(1),null);
var psi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103754,(2),null);
var vec__103757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103751,(2),null);
var thetadot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103757,(0),null);
var phidot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103757,(1),null);
var psidot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103757,(2),null);
var omega_a = sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(psi),sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(theta),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([phidot], 0)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(psi),thetadot));
var omega_b = sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(psi),sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(theta),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([phidot], 0)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((-1),sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(psi),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([thetadot], 0)));
var omega_c = sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(theta),phidot),psidot);
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([omega_a,omega_b,omega_c], 0));
});
sicmutils.mechanics.rigid.T_body_Euler = (function sicmutils$mechanics$rigid$T_body_Euler(A,B,C){
return (function (local){
return sicmutils.mechanics.rigid.T_body(A,B,C)(sicmutils.mechanics.rigid.Euler_state__GT_omega_body(local));
});
});
/**
 * Alias for [[T-body-Euler]].
 */
sicmutils.mechanics.rigid.T_rigid_body = sicmutils.mechanics.rigid.T_body_Euler;
sicmutils.mechanics.rigid.L_body_Euler = (function sicmutils$mechanics$rigid$L_body_Euler(A,B,C){
return (function (local){
return sicmutils.mechanics.rigid.L_body(A,B,C)(sicmutils.mechanics.rigid.Euler_state__GT_omega_body(local));
});
});
/**
 * Alias for [[L-body-Euler]].
 */
sicmutils.mechanics.rigid.Euler_state__GT_L_body = sicmutils.mechanics.rigid.L_body_Euler;
sicmutils.mechanics.rigid.L_space_Euler = (function sicmutils$mechanics$rigid$L_space_Euler(A,B,C){
return (function (local){
var angles = sicmutils.mechanics.lagrange.coordinate(local);
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.mechanics.rigid.L_body_Euler(A,B,C)(local),sicmutils.generic.transpose.cljs$core$IFn$_invoke$arity$1(sicmutils.mechanics.rotation.Euler__GT_M(angles)));
});
});
/**
 * Alias for [[L-space-Euler]].
 */
sicmutils.mechanics.rigid.Euler_state__GT_L_space = sicmutils.mechanics.rigid.L_space_Euler;
sicmutils.mechanics.rigid.rigid_sysder = (function sicmutils$mechanics$rigid$rigid_sysder(A,B,C){
return sicmutils.mechanics.lagrange.Lagrangian__GT_state_derivative.cljs$core$IFn$_invoke$arity$1((sicmutils.mechanics.rigid.T_rigid_body.cljs$core$IFn$_invoke$arity$3 ? sicmutils.mechanics.rigid.T_rigid_body.cljs$core$IFn$_invoke$arity$3(A,B,C) : sicmutils.mechanics.rigid.T_rigid_body.call(null,A,B,C)));
});
sicmutils.mechanics.rigid.quaternion_state__GT_omega_body = (function sicmutils$mechanics$rigid$quaternion_state__GT_omega_body(p__103804){
var vec__103805 = p__103804;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103805,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103805,(1),null);
var qdot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103805,(2),null);
var two_q_norm = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),q),sicmutils.generic.dot_product.cljs$core$IFn$_invoke$arity$2(q,q));
var omega_STAR__STAR_a = sicmutils.generic.dot_product.cljs$core$IFn$_invoke$arity$2(two_q_norm,sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.I_matrix,qdot));
var omega_STAR__STAR_b = sicmutils.generic.dot_product.cljs$core$IFn$_invoke$arity$2(two_q_norm,sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.J_matrix,qdot));
var omega_STAR__STAR_c = sicmutils.generic.dot_product.cljs$core$IFn$_invoke$arity$2(two_q_norm,sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.K_matrix,qdot));
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([omega_STAR__STAR_a,omega_STAR__STAR_b,omega_STAR__STAR_c], 0));
});
var q_COLON_a_103845 = sicmutils.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1),(0)], null)], 0));
var q_COLON_b_103846 = sicmutils.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(-1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0),(0)], null)], 0));
var q_COLON_c_103847 = sicmutils.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(0),(0)], null)], 0));
sicmutils.mechanics.rigid.quaternion_state__GT_omega_space = (function sicmutils$mechanics$rigid$quaternion_state__GT_omega_space(p__103814){
var vec__103815 = p__103814;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103815,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103815,(1),null);
var qdot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103815,(2),null);
var Q = sicmutils.matrix.up__GT_column_matrix(q);
var QdotT = sicmutils.matrix.row_STAR_(qdot);
var two_m_STAR__STAR_2_inv = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((-2),sicmutils.generic.dot_product.cljs$core$IFn$_invoke$arity$2(q,q));
var omega_STAR__STAR_x = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(two_m_STAR__STAR_2_inv,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(QdotT,q_COLON_a_103845,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([Q], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)));
var omega_STAR__STAR_y = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(two_m_STAR__STAR_2_inv,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(QdotT,q_COLON_b_103846,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([Q], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)));
var omega_STAR__STAR_z = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(two_m_STAR__STAR_2_inv,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(QdotT,q_COLON_c_103847,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([Q], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)));
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([omega_STAR__STAR_x,omega_STAR__STAR_y,omega_STAR__STAR_z], 0));
});
sicmutils.mechanics.rigid.qw_state__GT_L_body = (function sicmutils$mechanics$rigid$qw_state__GT_L_body(A,B,C){
return (function (p__103830){
var vec__103831 = p__103830;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103831,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103831,(1),null);
var omega = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103831,(2),null);
return sicmutils.mechanics.rigid.L_body(A,B,C)(omega);
});
});
sicmutils.mechanics.rigid.qw_state__GT_L_space = (function sicmutils$mechanics$rigid$qw_state__GT_L_space(A,B,C){
var state__GT_body = sicmutils.mechanics.rigid.qw_state__GT_L_body(A,B,C);
return (function (p__103834){
var vec__103835 = p__103834;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103835,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103835,(1),null);
var qw_state = vec__103835;
var Lbody = state__GT_body(qw_state);
var M = sicmutils.quaternion.__GT_rotation_matrix(sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$1(q));
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(Lbody,sicmutils.generic.transpose.cljs$core$IFn$_invoke$arity$1(M));
});
});
sicmutils.mechanics.rigid.T_quaternion_state = (function sicmutils$mechanics$rigid$T_quaternion_state(A,B,C){
return (function (p__103838){
var vec__103839 = p__103838;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103839,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103839,(1),null);
var qdot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103839,(2),null);
var Q = sicmutils.matrix.up__GT_column_matrix(q);
var Qdot = sicmutils.matrix.up__GT_column_matrix(qdot);
var m_STAR__STAR_2_inv = sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.transpose(Q),Q),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)));
var x = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(m_STAR__STAR_2_inv,sicmutils.quaternion.I_matrix,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([Qdot], 0));
var y = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(m_STAR__STAR_2_inv,sicmutils.quaternion.J_matrix,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([Qdot], 0));
var z = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(m_STAR__STAR_2_inv,sicmutils.quaternion.K_matrix,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([Qdot], 0));
var M = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(Q,sicmutils.matrix.transpose(Q));
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(A,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.matrix.transpose(x),M,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null))),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(B,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.matrix.transpose(y),M,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([y], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(C,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.matrix.transpose(z),M,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([z], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)))], 0)));
});
});

//# sourceMappingURL=sicmutils.mechanics.rigid.js.map
