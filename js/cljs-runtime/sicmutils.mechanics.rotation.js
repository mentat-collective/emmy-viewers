goog.provide('sicmutils.mechanics.rotation');
sicmutils.mechanics.rotation.rotate_x_matrix_2 = (function sicmutils$mechanics$rotation$rotate_x_matrix_2(c,s){
return sicmutils.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),c,sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(s)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),s,c], null)], 0));
});
/**
 * Produce the matrix of a rotation of α radians about the x axis.
 */
sicmutils.mechanics.rotation.rotate_x_matrix = (function sicmutils$mechanics$rotation$rotate_x_matrix(α){
return sicmutils.mechanics.rotation.rotate_x_matrix_2(sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(α),sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(α));
});
sicmutils.mechanics.rotation.Rx_matrix = sicmutils.mechanics.rotation.rotate_x_matrix;
sicmutils.mechanics.rotation.rotate_y_matrix_2 = (function sicmutils$mechanics$rotation$rotate_y_matrix_2(c,s){
return sicmutils.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(0),s], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(s),(0),c], null)], 0));
});
/**
 * Produce the matrix of a rotation of α radians about the y axis.
 */
sicmutils.mechanics.rotation.rotate_y_matrix = (function sicmutils$mechanics$rotation$rotate_y_matrix(α){
return sicmutils.mechanics.rotation.rotate_y_matrix_2(sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(α),sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(α));
});
sicmutils.mechanics.rotation.Ry_matrix = sicmutils.mechanics.rotation.rotate_y_matrix;
/**
 * Produce the matrix of a rotation of α radians about the z axis.
 */
sicmutils.mechanics.rotation.rotate_z_matrix_2 = (function sicmutils$mechanics$rotation$rotate_z_matrix_2(c,s){
return sicmutils.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(s),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,c,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)], 0));
});
/**
 * Produce the matrix of a rotation of α radians about the z axis.
 */
sicmutils.mechanics.rotation.rotate_z_matrix = (function sicmutils$mechanics$rotation$rotate_z_matrix(α){
return sicmutils.mechanics.rotation.rotate_z_matrix_2(sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(α),sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(α));
});
sicmutils.mechanics.rotation.Rz_matrix = sicmutils.mechanics.rotation.rotate_z_matrix;
sicmutils.mechanics.rotation.angle_axis__GT_rotation_matrix = (function sicmutils$mechanics$rotation$angle_axis__GT_rotation_matrix(theta,p__100992){
var vec__100997 = p__100992;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100997,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100997,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100997,(2),null);
var colatitude = sicmutils.generic.acos.cljs$core$IFn$_invoke$arity$1(z);
var longitude = sicmutils.generic.atan.cljs$core$IFn$_invoke$arity$2(y,x);
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.mechanics.rotation.rotate_z_matrix(longitude),sicmutils.mechanics.rotation.rotate_y_matrix(colatitude),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.mechanics.rotation.rotate_z_matrix(theta),sicmutils.matrix.transpose(sicmutils.mechanics.rotation.rotate_y_matrix(colatitude)),sicmutils.matrix.transpose(sicmutils.mechanics.rotation.rotate_z_matrix(longitude))], 0));
});
sicmutils.mechanics.rotation.rotate_x_tuple_2 = (function sicmutils$mechanics$rotation$rotate_x_tuple_2(c,s){
return sicmutils.matrix.m__GT_s(sicmutils.structure.literal_down(new cljs.core.Symbol(null,"l","l",-1258542346,null),(3)),sicmutils.mechanics.rotation.rotate_x_matrix_2(c,s),sicmutils.structure.literal_up(new cljs.core.Symbol(null,"r","r",1169147337,null),(3)));
});
sicmutils.mechanics.rotation.rotate_x_tuple = (function sicmutils$mechanics$rotation$rotate_x_tuple(α){
return sicmutils.mechanics.rotation.rotate_x_tuple_2(sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(α),sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(α));
});
sicmutils.mechanics.rotation.rotate_y_tuple_2 = (function sicmutils$mechanics$rotation$rotate_y_tuple_2(c,s){
return sicmutils.matrix.m__GT_s(sicmutils.structure.literal_down(new cljs.core.Symbol(null,"l","l",-1258542346,null),(3)),sicmutils.mechanics.rotation.rotate_y_matrix_2(c,s),sicmutils.structure.literal_up(new cljs.core.Symbol(null,"r","r",1169147337,null),(3)));
});
sicmutils.mechanics.rotation.rotate_y_tuple = (function sicmutils$mechanics$rotation$rotate_y_tuple(α){
return sicmutils.mechanics.rotation.rotate_y_tuple_2(sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(α),sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(α));
});
sicmutils.mechanics.rotation.rotate_z_tuple_2 = (function sicmutils$mechanics$rotation$rotate_z_tuple_2(c,s){
return sicmutils.matrix.m__GT_s(sicmutils.structure.literal_down(new cljs.core.Symbol(null,"l","l",-1258542346,null),(3)),sicmutils.mechanics.rotation.rotate_z_matrix_2(c,s),sicmutils.structure.literal_up(new cljs.core.Symbol(null,"r","r",1169147337,null),(3)));
});
sicmutils.mechanics.rotation.rotate_z_tuple = (function sicmutils$mechanics$rotation$rotate_z_tuple(α){
return sicmutils.mechanics.rotation.rotate_z_tuple_2(sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(α),sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(α));
});
/**
 * Returns a function which rotates a vector α radians about the x axis.
 */
sicmutils.mechanics.rotation.Rx = (function sicmutils$mechanics$rotation$Rx(α){
return (function (p__101030){
var vec__101031 = p__101030;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101031,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101031,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101031,(2),null);
var c = sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(α);
var s = sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(α);
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(c,y),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s,z)),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s,y),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(c,z))], 0));
});
});
/**
 * Returns a function which rotates a vector α radians about the y axis.
 */
sicmutils.mechanics.rotation.Ry = (function sicmutils$mechanics$rotation$Ry(α){
return (function (p__101034){
var vec__101035 = p__101034;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101035,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101035,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101035,(2),null);
var c = sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(α);
var s = sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(α);
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(c,x),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s,z)),y,sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(c,z),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s,x))], 0));
});
});
/**
 * Returns a function which rotates a vector α radians about the z axis.
 */
sicmutils.mechanics.rotation.Rz = (function sicmutils$mechanics$rotation$Rz(α){
return (function (p__101043){
var vec__101044 = p__101043;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101044,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101044,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101044,(2),null);
var c = sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(α);
var s = sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(α);
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(c,x),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s,y)),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s,x),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(c,y)),z], 0));
});
});
sicmutils.mechanics.rotation.rotate_x = sicmutils.mechanics.rotation.Rx;
sicmutils.mechanics.rotation.rotate_y = sicmutils.mechanics.rotation.Ry;
sicmutils.mechanics.rotation.rotate_z = sicmutils.mechanics.rotation.Rz;
sicmutils.mechanics.rotation.wcross__GT_w = (function sicmutils$mechanics$rotation$wcross__GT_w(A){
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(A,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(A,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(A,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null))], 0));
});
/**
 * Compute the rotation matrix from a 3-vector of Euler angles.
 * 
 *   Our Euler Angle convention:
 * 
 *   M(theta, phi, psi) = R_z(phi)*R_x(theta)*R_z(psi)
 */
sicmutils.mechanics.rotation.Euler__GT_M = (function sicmutils$mechanics$rotation$Euler__GT_M(p__101053){
var vec__101054 = p__101053;
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101054,(0),null);
var phi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101054,(1),null);
var psi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101054,(2),null);
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.mechanics.rotation.rotate_z_matrix(phi),sicmutils.mechanics.rotation.rotate_x_matrix(theta),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.mechanics.rotation.rotate_z_matrix(psi)], 0));
});
/**
 * Given a 3x3 rotation matrix, returns a [[sicmutils.structure/up]] of the
 *   corresponding Euler angles.
 * 
 *   Our Euler Angle convention:
 * 
 *   M(theta, phi, psi) = R_z(phi)*R_x(theta)*R_z(psi)
 */
sicmutils.mechanics.rotation.M__GT_Euler = (function sicmutils$mechanics$rotation$M__GT_Euler(var_args){
var G__101059 = arguments.length;
switch (G__101059) {
case 1:
return sicmutils.mechanics.rotation.M__GT_Euler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.mechanics.rotation.M__GT_Euler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.mechanics.rotation.M__GT_Euler.cljs$core$IFn$_invoke$arity$1 = (function (M){
return sicmutils.mechanics.rotation.M__GT_Euler.cljs$core$IFn$_invoke$arity$2(M,null);
}));

(sicmutils.mechanics.rotation.M__GT_Euler.cljs$core$IFn$_invoke$arity$2 = (function (M,tolerance_in_ulps){
var tolerance = (((tolerance_in_ulps == null))?sicmutils.value.machine_epsilon:sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(tolerance_in_ulps,sicmutils.value.machine_epsilon));
var close_QMARK_ = sicmutils.util.stream.close_enuf_QMARK_(tolerance);
var cx = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(M,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null));
var cx_number_QMARK_ = sicmutils.value.number_QMARK_(cx);
if(cljs.core.truth_((function (){var and__4251__auto__ = cx_number_QMARK_;
if(and__4251__auto__){
return close_QMARK_(cx,(-1));
} else {
return and__4251__auto__;
}
})())){
var theta = Math.PI;
var phi = sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.atan.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(M,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null))),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(M,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null))));
var psi = (0);
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([theta,phi,psi], 0));
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cx_number_QMARK_;
if(and__4251__auto__){
return close_QMARK_(cx,(1));
} else {
return and__4251__auto__;
}
})())){
var theta = (0);
var phi = sicmutils.generic.atan.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(M,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null))),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(M,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)));
var psi = (0);
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([theta,phi,psi], 0));
} else {
var theta = sicmutils.generic.acos.cljs$core$IFn$_invoke$arity$1(cx);
var sx = sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(theta);
var phi = sicmutils.generic.atan.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(M,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)),sx),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(M,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)),sx)));
var psi = sicmutils.generic.atan.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(M,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)),sx),sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(M,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)),sx));
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([theta,phi,psi], 0));

}
}
}));

(sicmutils.mechanics.rotation.M__GT_Euler.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sicmutils.mechanics.rotation.js.map
