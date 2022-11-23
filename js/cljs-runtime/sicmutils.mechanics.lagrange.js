goog.provide('sicmutils.mechanics.lagrange');
sicmutils.mechanics.lagrange.coordinate_tuple = sicmutils.structure.up;
sicmutils.mechanics.lagrange.velocity_tuple = sicmutils.structure.up;
sicmutils.mechanics.lagrange.acceleration_tuple = sicmutils.structure.up;
sicmutils.mechanics.lagrange.momentum_tuple = sicmutils.structure.down;
/**
 * Returns a function signature for a Lagrangian with n degrees of freedom (or an
 *   unrestricted number if n is not given).
 * 
 *   Useful for constructing Lagrangian literal functions.
 */
sicmutils.mechanics.lagrange.Lagrangian = (function sicmutils$mechanics$lagrange$Lagrangian(var_args){
var G__102922 = arguments.length;
switch (G__102922) {
case 0:
return sicmutils.mechanics.lagrange.Lagrangian.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sicmutils.mechanics.lagrange.Lagrangian.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.mechanics.lagrange.Lagrangian.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"UP","UP",-1898089532,null),new cljs.core.Symbol(null,"Real","Real",374292741,null),cljs.core.list(new cljs.core.Symbol(null,"UP*","UP*",294235991,null),new cljs.core.Symbol(null,"Real","Real",374292741,null)),cljs.core.list(new cljs.core.Symbol(null,"UP*","UP*",294235991,null),new cljs.core.Symbol(null,"Real","Real",374292741,null))),new cljs.core.Symbol(null,"Real","Real",374292741,null));
}));

(sicmutils.mechanics.lagrange.Lagrangian.cljs$core$IFn$_invoke$arity$1 = (function (n){
var r__21102__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"UP","UP",-1898089532,null),new cljs.core.Symbol(null,"Real","Real",374292741,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"UP*","UP*",294235991,null),new cljs.core.Symbol(null,"Real","Real",374292741,null),n], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"UP*","UP*",294235991,null),new cljs.core.Symbol(null,"Real","Real",374292741,null),n], null))], null)),new cljs.core.Symbol(null,"Real","Real",374292741,null)], null));
var or__4253__auto__ = r__21102__auto__;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return pattern.consequence.succeed(r__21102__auto__);
}
}));

(sicmutils.mechanics.lagrange.Lagrangian.cljs$lang$maxFixedArity = 1);

/**
 * Given a time `t`, coordinate tuple (or scalar) `q`, velocity tuple (or scalar)
 *   `qdot` and any number of additional higher-order derivative tuples (or
 *   scalars), returns a 'Local tuple', ie, the state expected by a Lagrangian.
 */
sicmutils.mechanics.lagrange.__GT_L_state = (function sicmutils$mechanics$lagrange$__GT_L_state(var_args){
var args__4870__auto__ = [];
var len__4864__auto___103274 = arguments.length;
var i__4865__auto___103275 = (0);
while(true){
if((i__4865__auto___103275 < len__4864__auto___103274)){
args__4870__auto__.push((arguments[i__4865__auto___103275]));

var G__103276 = (i__4865__auto___103275 + (1));
i__4865__auto___103275 = G__103276;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return sicmutils.mechanics.lagrange.__GT_L_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(sicmutils.mechanics.lagrange.__GT_L_state.cljs$core$IFn$_invoke$arity$variadic = (function (t,q,qdot,derivs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(sicmutils.structure.up,t,q,qdot,derivs);
}));

(sicmutils.mechanics.lagrange.__GT_L_state.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sicmutils.mechanics.lagrange.__GT_L_state.cljs$lang$applyTo = (function (seq102923){
var G__102924 = cljs.core.first(seq102923);
var seq102923__$1 = cljs.core.next(seq102923);
var G__102925 = cljs.core.first(seq102923__$1);
var seq102923__$2 = cljs.core.next(seq102923__$1);
var G__102926 = cljs.core.first(seq102923__$2);
var seq102923__$3 = cljs.core.next(seq102923__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__102924,G__102925,G__102926,seq102923__$3);
}));

/**
 * Alias for [[->L-state]].
 */
sicmutils.mechanics.lagrange.__GT_local = sicmutils.mechanics.lagrange.__GT_L_state;
/**
 * Alias for [[->L-state]].
 */
sicmutils.mechanics.lagrange.__GT_state = sicmutils.mechanics.lagrange.__GT_L_state;
/**
 * Extract the time slot from a state tuple.
 * 
 *   See [[coordinate]] for more detail.
 */
sicmutils.mechanics.lagrange.time = (function sicmutils$mechanics$lagrange$time(local){
if(sicmutils.structure.up_QMARK_(local)){
} else {
throw (new Error("Assert failed: (up? local)"));
}

if((cljs.core.count(local) > (0))){
} else {
throw (new Error("Assert failed: (> (count local) 0)"));
}

return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(local,(0));
});
/**
 * A convenience function on local tuples. A local tuple describes
 *   the state of a system at a particular time:
 * 
 *   ```
 *   [t, q, D q, D^2 q]
 *   ```
 * 
 *   representing time, position, velocity (and optionally acceleration etc.)
 * 
 *   [[coordinate]] returns the `q` element, which is expected to be a mapping from
 *   time to a structure of coordinates.
 */
sicmutils.mechanics.lagrange.coordinate = (function sicmutils$mechanics$lagrange$coordinate(local){
if(sicmutils.structure.up_QMARK_(local)){
} else {
throw (new Error("Assert failed: (up? local)"));
}

if((cljs.core.count(local) > (1))){
} else {
throw (new Error("Assert failed: (> (count local) 1)"));
}

return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(local,(1));
});
/**
 * Returns the velocity element of a local tuple (by convention, the third
 *   element).
 * 
 *   See [[coordinate]] for more detail.
 */
sicmutils.mechanics.lagrange.velocity = (function sicmutils$mechanics$lagrange$velocity(local){
if(sicmutils.structure.up_QMARK_(local)){
} else {
throw (new Error("Assert failed: (up? local)"));
}

if((cljs.core.count(local) > (2))){
} else {
throw (new Error("Assert failed: (> (count local) 2)"));
}

return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(local,(2));
});
/**
 * Returns the acceleration element of a local tuple (by convention, the fourth
 *   element).
 * 
 *   See [[coordinate]] for more detail.
 */
sicmutils.mechanics.lagrange.acceleration = (function sicmutils$mechanics$lagrange$acceleration(local){
if(sicmutils.structure.up_QMARK_(local)){
} else {
throw (new Error("Assert failed: (up? local)"));
}

if((cljs.core.count(local) > (3))){
} else {
throw (new Error("Assert failed: (> (count local) 3)"));
}

return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(local,(3));
});
sicmutils.mechanics.lagrange.state__GT_n_dof = (function sicmutils$mechanics$lagrange$state__GT_n_dof(state){
if(sicmutils.structure.structure_QMARK_(state)){
} else {
throw (new Error("Assert failed: (s/structure? state)"));
}

var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(state,(1));
if(sicmutils.structure.up_QMARK_(q)){
return cljs.core.count(q);
} else {
return (1);
}
});
/**
 * Alias for [[time]].
 */
sicmutils.mechanics.lagrange.state__GT_t = sicmutils.mechanics.lagrange.time;
/**
 * Alias for [[coordinate]].
 */
sicmutils.mechanics.lagrange.state__GT_q = sicmutils.mechanics.lagrange.coordinate;
/**
 * Alias for [[velocity]].
 */
sicmutils.mechanics.lagrange.state__GT_qdot = sicmutils.mechanics.lagrange.velocity;
/**
 * Alias for [[acceleration]].
 */
sicmutils.mechanics.lagrange.state__GT_qddot = sicmutils.mechanics.lagrange.acceleration;
/**
 * Alias for [[coordinate]].
 */
sicmutils.mechanics.lagrange.coordinates = sicmutils.mechanics.lagrange.coordinate;
/**
 * Alias for [[velocity]].
 */
sicmutils.mechanics.lagrange.velocities = sicmutils.mechanics.lagrange.velocity;
/**
 * Alias for [[acceleration]].
 */
sicmutils.mechanics.lagrange.accelerations = sicmutils.mechanics.lagrange.acceleration;
/**
 * Alias for [[coordinate]].
 */
sicmutils.mechanics.lagrange.Q = sicmutils.mechanics.lagrange.coordinate;
/**
 * Alias for [[velocity]].
 */
sicmutils.mechanics.lagrange.Qdot = sicmutils.mechanics.lagrange.velocity;
/**
 * Alias for [[acceleration]].
 */
sicmutils.mechanics.lagrange.Qdotdot = sicmutils.mechanics.lagrange.acceleration;
sicmutils.mechanics.lagrange.literal_Lagrangian_state = (function sicmutils$mechanics$lagrange$literal_Lagrangian_state(n_dof){
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"t","t",242699008,null)),sicmutils.structure.literal_up(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null)),n_dof),sicmutils.structure.literal_up(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"v","v",1661996586,null)),n_dof)], 0));
});
/**
 * Gamma takes a path function (from time to coordinates) to a state
 *   function (from time to local tuple).
 */
sicmutils.mechanics.lagrange.Gamma = (function sicmutils$mechanics$lagrange$Gamma(var_args){
var G__102928 = arguments.length;
switch (G__102928) {
case 1:
return sicmutils.mechanics.lagrange.Gamma.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.mechanics.lagrange.Gamma.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.mechanics.lagrange.Gamma.cljs$core$IFn$_invoke$arity$1 = (function (q){
var Dq = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(q) : sicmutils.calculus.derivative.D.call(null,q));
return sicmutils.function$.with_arity.cljs$core$IFn$_invoke$arity$2((function (t){
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,(q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(t) : q.call(null,t)),(Dq.cljs$core$IFn$_invoke$arity$1 ? Dq.cljs$core$IFn$_invoke$arity$1(t) : Dq.call(null,t))], 0));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null));
}));

(sicmutils.mechanics.lagrange.Gamma.cljs$core$IFn$_invoke$arity$2 = (function (q,n){
if((n > (1))){
} else {
throw (new Error("Assert failed: (> n 1)"));
}

var Dqs = cljs.core.take.cljs$core$IFn$_invoke$arity$2((n - (1)),cljs.core.iterate(sicmutils.calculus.derivative.D,q));
var local = cljs.core.into.cljs$core$IFn$_invoke$arity$2(sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.identity], 0)),Dqs);
return sicmutils.function$.with_arity.cljs$core$IFn$_invoke$arity$2((function (t){
return (local.cljs$core$IFn$_invoke$arity$1 ? local.cljs$core$IFn$_invoke$arity$1(t) : local.call(null,t));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null));
}));

(sicmutils.mechanics.lagrange.Gamma.cljs$lang$maxFixedArity = 2);

sicmutils.mechanics.lagrange.path__GT_state_path = sicmutils.mechanics.lagrange.Gamma;
sicmutils.mechanics.lagrange.make_Lagrangian = (function sicmutils$mechanics$lagrange$make_Lagrangian(kinetic_energy,potential_energy){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(kinetic_energy,potential_energy);
});
/**
 * The lagrangian of a free particle of mass m. The Lagrangian
 *   returned is a function of the local tuple. Since the particle
 *   is free, there is no potential energy, so the Lagrangian is
 *   just the kinetic energy.
 */
sicmutils.mechanics.lagrange.L_free_particle = (function sicmutils$mechanics$lagrange$L_free_particle(mass){
return (function (p__102929){
var vec__102930 = p__102929;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102930,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102930,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102930,(2),null);
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),mass,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(v)], 0));
});
});
/**
 * Lagrangian for a point mass on with the potential energy V(x, y)
 */
sicmutils.mechanics.lagrange.L_rectangular = (function sicmutils$mechanics$lagrange$L_rectangular(m,V){
return (function (p__102933){
var vec__102934 = p__102933;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102934,(0),null);
var vec__102937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102934,(1),null);
var q0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102937,(0),null);
var q1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102937,(1),null);
var qdot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102934,(2),null);
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),m,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(qdot)], 0)),(V.cljs$core$IFn$_invoke$arity$2 ? V.cljs$core$IFn$_invoke$arity$2(q0,q1) : V.call(null,q0,q1)));
});
});
/**
 * The Lagrangian of a simple harmonic oscillator (mass-spring
 *   system). m is the mass and k is the spring constant used in
 *   Hooke's law. The resulting Lagrangian is a function of the
 *   local tuple of the system.
 */
sicmutils.mechanics.lagrange.L_harmonic = (function sicmutils$mechanics$lagrange$L_harmonic(m,k){
return (function (p__102940){
var vec__102941 = p__102940;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102941,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102941,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102941,(2),null);
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),m,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(v)], 0)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(q)], 0)));
});
});
/**
 * The Lagrangian of an object experiencing uniform acceleration
 *   in the negative y direction, i.e. the acceleration due to gravity
 */
sicmutils.mechanics.lagrange.L_uniform_acceleration = (function sicmutils$mechanics$lagrange$L_uniform_acceleration(m,g){
return (function (p__102945){
var vec__102946 = p__102945;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102946,(0),null);
var vec__102949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102946,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102949,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102949,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102946,(2),null);
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),m,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(v)], 0)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(m,g,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([y], 0)));
});
});
sicmutils.mechanics.lagrange.L_central_rectangular = (function sicmutils$mechanics$lagrange$L_central_rectangular(m,U){
return (function (p__102952){
var vec__102953 = p__102952;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102953,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102953,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102953,(2),null);
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),m,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(v)], 0)),(function (){var G__102956 = sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(q);
return (U.cljs$core$IFn$_invoke$arity$1 ? U.cljs$core$IFn$_invoke$arity$1(G__102956) : U.call(null,G__102956));
})());
});
});
/**
 * Consider planar motion in a central force field, with an arbitrary potential,
 *   `U`, depending only on the radius. The generalized coordinates are polar.
 */
sicmutils.mechanics.lagrange.L_central_polar = (function sicmutils$mechanics$lagrange$L_central_polar(m,U){
return (function (p__102957){
var vec__102958 = p__102957;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102958,(0),null);
var vec__102961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102958,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102961,(0),null);
var vec__102964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102958,(2),null);
var rdot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102964,(0),null);
var φdot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102964,(1),null);
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),m,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(rdot),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r,φdot)))], 0)),(U.cljs$core$IFn$_invoke$arity$1 ? U.cljs$core$IFn$_invoke$arity$1(r) : U.call(null,r)));
});
});
sicmutils.mechanics.lagrange.L_Kepler_polar = (function sicmutils$mechanics$lagrange$L_Kepler_polar(GM,m){
return (function (p__102978){
var vec__102992 = p__102978;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102992,(0),null);
var vec__102995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102992,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102995,(0),null);
var vec__102998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102992,(2),null);
var rdot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102998,(0),null);
var phidot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102998,(1),null);
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),m,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(rdot),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r,phidot)))], 0)),sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(GM,m),r));
});
});
sicmutils.mechanics.lagrange.L_axisymmetric_top = (function sicmutils$mechanics$lagrange$L_axisymmetric_top(A,C,gMR){
return (function (p__103001){
var vec__103002 = p__103001;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103002,(0),null);
var vec__103005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103002,(1),null);
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103005,(0),null);
var vec__103008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103002,(2),null);
var thetadot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103008,(0),null);
var phidot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103008,(1),null);
var psidot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103008,(2),null);
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),A,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(thetadot),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(phidot,sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(theta))))], 0)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),C,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(psidot,sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(phidot,sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(theta))))], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((-1),gMR,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(theta)], 0))], 0));
});
});
sicmutils.mechanics.lagrange.L_coupled_harmonic = (function sicmutils$mechanics$lagrange$L_coupled_harmonic(m,k){
return (function (p__103011){
var vec__103012 = p__103011;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103012,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103012,(1),null);
var qdot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103012,(2),null);
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),qdot,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,qdot], 0)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),q,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k,q], 0)));
});
});
sicmutils.mechanics.lagrange.F_sliding_pend = (function sicmutils$mechanics$lagrange$F_sliding_pend(l){
return (function (p__103017){
var vec__103018 = p__103017;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103018,(0),null);
var vec__103021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103018,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103021,(0),null);
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103021,(1),null);
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,(0)], 0)),sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(x,sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(l,sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(theta))),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((-1),l,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(theta)], 0))], 0))], 0));
});
});
sicmutils.mechanics.lagrange.two_free = (function sicmutils$mechanics$lagrange$two_free(m1,m2,g){
return (function (p__103032){
var vec__103035 = p__103032;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103035,(0),null);
var vec__103038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103035,(1),null);
var vec__103041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103038,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103041,(0),null);
var h1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103041,(1),null);
var vec__103044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103038,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103044,(0),null);
var h2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103044,(1),null);
var vec__103047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103035,(2),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103047,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103047,(1),null);
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m1,sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(v1)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m2,sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(v2)))),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(g,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m1,h1),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m2,h2))));
});
});
/**
 * Pendulum of mass m2 and length b, hanging from a support of mass m1 that is
 *   free to move horizontally (from Groesberg, Advanced Mechanics, p. 72)
 */
sicmutils.mechanics.lagrange.L_sliding_pend = (function sicmutils$mechanics$lagrange$L_sliding_pend(m1,m2,l,g){
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.mechanics.lagrange.two_free(m1,m2,g),(function (){var G__103056 = sicmutils.mechanics.lagrange.F_sliding_pend(l);
return (sicmutils.mechanics.lagrange.F__GT_C.cljs$core$IFn$_invoke$arity$1 ? sicmutils.mechanics.lagrange.F__GT_C.cljs$core$IFn$_invoke$arity$1(G__103056) : sicmutils.mechanics.lagrange.F__GT_C.call(null,G__103056));
})()], 0));
});
sicmutils.mechanics.lagrange.L_pendulum = (function sicmutils$mechanics$lagrange$L_pendulum(g,m,l){
return (function (p__103061){
var vec__103062 = p__103061;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103062,(0),null);
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103062,(1),null);
var thetadot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103062,(2),null);
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),m,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(l,thetadot))], 0)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(g,m,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l,sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(theta)], 0)));
});
});
sicmutils.mechanics.lagrange.Rayleigh_dissipation = (function sicmutils$mechanics$lagrange$Rayleigh_dissipation(k){
return (function (p__103069){
var vec__103070 = p__103069;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103070,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103070,(1),null);
var qdot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103070,(2),null);
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(qdot,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qdot], 0));
});
});
sicmutils.mechanics.lagrange.L_two_particle = (function sicmutils$mechanics$lagrange$L_two_particle(m1,m2,V){
return (function (p__103091){
var vec__103092 = p__103091;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103092,(0),null);
var vec__103095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103092,(1),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103095,(0),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103095,(1),null);
var vec__103098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103092,(2),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103098,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103098,(1),null);
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),m1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(v1)], 0)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),m2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(v2)], 0))),(V.cljs$core$IFn$_invoke$arity$2 ? V.cljs$core$IFn$_invoke$arity$2(x1,x2) : V.call(null,x1,x2)));
});
});
sicmutils.mechanics.lagrange.Lagrange_equations = (function sicmutils$mechanics$lagrange$Lagrange_equations(var_args){
var G__103102 = arguments.length;
switch (G__103102) {
case 1:
return sicmutils.mechanics.lagrange.Lagrange_equations.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.mechanics.lagrange.Lagrange_equations.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.mechanics.lagrange.Lagrange_equations.cljs$core$IFn$_invoke$arity$1 = (function (L){
return sicmutils.mechanics.lagrange.Lagrange_equations.cljs$core$IFn$_invoke$arity$2(L,null);
}));

(sicmutils.mechanics.lagrange.Lagrange_equations.cljs$core$IFn$_invoke$arity$2 = (function (L,dissipation_fn){
return (function (q){
var state_path = sicmutils.mechanics.lagrange.Gamma.cljs$core$IFn$_invoke$arity$1(q);
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$variadic((function (){var G__103103 = sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__103104 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__103104.cljs$core$IFn$_invoke$arity$1 ? fexpr__103104.cljs$core$IFn$_invoke$arity$1(L) : fexpr__103104.call(null,L));
})(),state_path], 0));
return (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(G__103103) : sicmutils.calculus.derivative.D.call(null,G__103103));
})(),sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__103105 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0));
return (fexpr__103105.cljs$core$IFn$_invoke$arity$1 ? fexpr__103105.cljs$core$IFn$_invoke$arity$1(L) : fexpr__103105.call(null,L));
})(),state_path], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(dissipation_fn)?sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__103106 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__103106.cljs$core$IFn$_invoke$arity$1 ? fexpr__103106.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__103106.call(null,dissipation_fn));
})(),state_path], 0))):(0))], 0));
});
}));

(sicmutils.mechanics.lagrange.Lagrange_equations.cljs$lang$maxFixedArity = 2);

sicmutils.mechanics.lagrange.Lagrangian__GT_acceleration = (function sicmutils$mechanics$lagrange$Lagrangian__GT_acceleration(var_args){
var G__103108 = arguments.length;
switch (G__103108) {
case 1:
return sicmutils.mechanics.lagrange.Lagrangian__GT_acceleration.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.mechanics.lagrange.Lagrangian__GT_acceleration.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.mechanics.lagrange.Lagrangian__GT_acceleration.cljs$core$IFn$_invoke$arity$1 = (function (L){
return sicmutils.mechanics.lagrange.Lagrangian__GT_acceleration.cljs$core$IFn$_invoke$arity$2(L,null);
}));

(sicmutils.mechanics.lagrange.Lagrangian__GT_acceleration.cljs$core$IFn$_invoke$arity$2 = (function (L,dissipation_fn){
var P = (function (){var fexpr__103109 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__103109.cljs$core$IFn$_invoke$arity$1 ? fexpr__103109.cljs$core$IFn$_invoke$arity$1(L) : fexpr__103109.call(null,L));
})();
var F = (function (){var fexpr__103110 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0));
return (fexpr__103110.cljs$core$IFn$_invoke$arity$1 ? fexpr__103110.cljs$core$IFn$_invoke$arity$1(L) : fexpr__103110.call(null,L));
})();
return sicmutils.generic.solve_linear_left((function (){var fexpr__103111 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__103111.cljs$core$IFn$_invoke$arity$1 ? fexpr__103111.cljs$core$IFn$_invoke$arity$1(P) : fexpr__103111.call(null,P));
})(),sicmutils.generic._.cljs$core$IFn$_invoke$arity$variadic(F,(cljs.core.truth_(dissipation_fn)?(function (){var fexpr__103112 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__103112.cljs$core$IFn$_invoke$arity$1 ? fexpr__103112.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__103112.call(null,dissipation_fn));
})():(0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103114 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
return (fexpr__103114.cljs$core$IFn$_invoke$arity$1 ? fexpr__103114.cljs$core$IFn$_invoke$arity$1(P) : fexpr__103114.call(null,P));
})(),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103115 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0));
return (fexpr__103115.cljs$core$IFn$_invoke$arity$1 ? fexpr__103115.cljs$core$IFn$_invoke$arity$1(P) : fexpr__103115.call(null,P));
})(),sicmutils.mechanics.lagrange.velocity))], 0)));
}));

(sicmutils.mechanics.lagrange.Lagrangian__GT_acceleration.cljs$lang$maxFixedArity = 2);

sicmutils.mechanics.lagrange.qv__GT_local_path = (function sicmutils$mechanics$lagrange$qv__GT_local_path(q,v){
return (function (t){
var G__103116 = t;
var G__103117 = (q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(t) : q.call(null,t));
var G__103118 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(t) : v.call(null,t));
return (sicmutils.mechanics.lagrange.__GT_local.cljs$core$IFn$_invoke$arity$3 ? sicmutils.mechanics.lagrange.__GT_local.cljs$core$IFn$_invoke$arity$3(G__103116,G__103117,G__103118) : sicmutils.mechanics.lagrange.__GT_local.call(null,G__103116,G__103117,G__103118));
});
});
/**
 * Optionally takes a dissipation function.
 */
sicmutils.mechanics.lagrange.Lagrangian__GT_state_derivative = (function sicmutils$mechanics$lagrange$Lagrangian__GT_state_derivative(var_args){
var G__103121 = arguments.length;
switch (G__103121) {
case 1:
return sicmutils.mechanics.lagrange.Lagrangian__GT_state_derivative.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.mechanics.lagrange.Lagrangian__GT_state_derivative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.mechanics.lagrange.Lagrangian__GT_state_derivative.cljs$core$IFn$_invoke$arity$1 = (function (L){
return sicmutils.mechanics.lagrange.Lagrangian__GT_state_derivative.cljs$core$IFn$_invoke$arity$2(L,null);
}));

(sicmutils.mechanics.lagrange.Lagrangian__GT_state_derivative.cljs$core$IFn$_invoke$arity$2 = (function (L,dissipation_fn){
var acceleration = sicmutils.mechanics.lagrange.Lagrangian__GT_acceleration.cljs$core$IFn$_invoke$arity$2(L,dissipation_fn);
return (function (state){
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),sicmutils.mechanics.lagrange.velocity(state),(acceleration.cljs$core$IFn$_invoke$arity$1 ? acceleration.cljs$core$IFn$_invoke$arity$1(state) : acceleration.call(null,state))], 0));
});
}));

(sicmutils.mechanics.lagrange.Lagrangian__GT_state_derivative.cljs$lang$maxFixedArity = 2);

/**
 * The state derivative of a Lagrangian is a function carrying a state tuple to
 *   its time derivative.
 * 
 *   Alias for the non-dissipative, single-arity version
 *   of [[Lagrangian->state-derivative]].
 */
sicmutils.mechanics.lagrange.local_state_derivative = (function sicmutils$mechanics$lagrange$local_state_derivative(L){
return sicmutils.mechanics.lagrange.Lagrangian__GT_state_derivative.cljs$core$IFn$_invoke$arity$2(L,null);
});
sicmutils.mechanics.lagrange.Lagrange_equations_first_order = (function sicmutils$mechanics$lagrange$Lagrange_equations_first_order(L){
return (function (q,v){
var state_path = sicmutils.mechanics.lagrange.qv__GT_local_path(q,v);
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(state_path) : sicmutils.calculus.derivative.D.call(null,state_path)),sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.mechanics.lagrange.Lagrangian__GT_state_derivative.cljs$core$IFn$_invoke$arity$1(L),state_path], 0)));
});
});
/**
 * Alias for [[Lagrange-equations-first-order]].
 */
sicmutils.mechanics.lagrange.Lagrange_equations_1 = sicmutils.mechanics.lagrange.Lagrange_equations_first_order;
sicmutils.mechanics.lagrange.Lagrangian__GT_energy = (function sicmutils$mechanics$lagrange$Lagrangian__GT_energy(L){
var P = (function (){var fexpr__103122 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__103122.cljs$core$IFn$_invoke$arity$1 ? fexpr__103122.cljs$core$IFn$_invoke$arity$1(L) : fexpr__103122.call(null,L));
})();
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(P,sicmutils.mechanics.lagrange.velocity),L);
});
sicmutils.mechanics.lagrange.Lagrangian__GT_power_loss = (function sicmutils$mechanics$lagrange$Lagrangian__GT_power_loss(L){
return (function (q){
var G__103123 = sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.mechanics.lagrange.Lagrangian__GT_energy(L),sicmutils.mechanics.lagrange.Gamma.cljs$core$IFn$_invoke$arity$1(q)], 0));
return (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(G__103123) : sicmutils.calculus.derivative.D.call(null,G__103123));
});
});
sicmutils.mechanics.lagrange.T3_spherical = (function sicmutils$mechanics$lagrange$T3_spherical(m){
return (function (p__103124){
var vec__103125 = p__103124;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103125,(0),null);
var vec__103128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103125,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103128,(0),null);
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103128,(1),null);
var vec__103131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103125,(2),null);
var rdot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103131,(0),null);
var thetadot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103131,(1),null);
var phidot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103131,(2),null);
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),m,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(rdot),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r,thetadot)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(r,sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(theta),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([phidot], 0)))], 0))], 0));
});
});
sicmutils.mechanics.lagrange.L3_central = (function sicmutils$mechanics$lagrange$L3_central(m,Vr){
var Vs = (function sicmutils$mechanics$lagrange$L3_central_$_Vs(p__103144){
var vec__103145 = p__103144;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103145,(0),null);
var vec__103148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103145,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103148,(0),null);
return (Vr.cljs$core$IFn$_invoke$arity$1 ? Vr.cljs$core$IFn$_invoke$arity$1(r) : Vr.call(null,r));
});
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.mechanics.lagrange.T3_spherical(m),Vs);
});
sicmutils.mechanics.lagrange.Lagrangian_action = (function sicmutils$mechanics$lagrange$Lagrangian_action(var_args){
var G__103154 = arguments.length;
switch (G__103154) {
case 4:
return sicmutils.mechanics.lagrange.Lagrangian_action.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sicmutils.mechanics.lagrange.Lagrangian_action.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.mechanics.lagrange.Lagrangian_action.cljs$core$IFn$_invoke$arity$4 = (function (L,q,t1,t2){
return sicmutils.mechanics.lagrange.Lagrangian_action.cljs$core$IFn$_invoke$arity$5(L,q,t1,t2,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.mechanics.lagrange.Lagrangian_action.cljs$core$IFn$_invoke$arity$5 = (function (L,q,t1,t2,integration_opts){
return sicmutils.numerical.quadrature.definite_integral.cljs$core$IFn$_invoke$arity$4(sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([L,sicmutils.mechanics.lagrange.Gamma.cljs$core$IFn$_invoke$arity$1(q)], 0)),t1,t2,integration_opts);
}));

(sicmutils.mechanics.lagrange.Lagrangian_action.cljs$lang$maxFixedArity = 5);

sicmutils.mechanics.lagrange.linear_interpolants = (function sicmutils$mechanics$lagrange$linear_interpolants(x0,x1,n){
var n_PLUS_1 = (n + (1));
var dx = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(x1,x0),n_PLUS_1);
var iter__4652__auto__ = (function sicmutils$mechanics$lagrange$linear_interpolants_$_iter__103165(s__103166){
return (new cljs.core.LazySeq(null,(function (){
var s__103166__$1 = s__103166;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__103166__$1);
if(temp__5753__auto__){
var s__103166__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__103166__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__103166__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__103168 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__103167 = (0);
while(true){
if((i__103167 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__103167);
cljs.core.chunk_append(b__103168,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(x0,sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(i,dx)));

var G__103287 = (i__103167 + (1));
i__103167 = G__103287;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__103168),sicmutils$mechanics$lagrange$linear_interpolants_$_iter__103165(cljs.core.chunk_rest(s__103166__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__103168),null);
}
} else {
var i = cljs.core.first(s__103166__$2);
return cljs.core.cons(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(x0,sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(i,dx)),sicmutils$mechanics$lagrange$linear_interpolants_$_iter__103165(cljs.core.rest(s__103166__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),n_PLUS_1));
});
/**
 * Given `ys` (a sequence of function values) and `xs` (an equal-length sequence
 *   of function inputs), returns a [[sicmutils.polynomial/Polynomial]] instance
 *   guaranteed to pass through all supplied `xs` and `ys`.
 * 
 *   The contract for inputs is that `(map vector xs ys)` should return a sequence
 *   of pairs of points.
 */
sicmutils.mechanics.lagrange.Lagrange_interpolation_function = (function sicmutils$mechanics$lagrange$Lagrange_interpolation_function(ys,xs){
return sicmutils.polynomial.from_points(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));
});
/**
 * SICM p. 23n
 */
sicmutils.mechanics.lagrange.make_path = (function sicmutils$mechanics$lagrange$make_path(t0,q0,t1,q1,qs){
var n = cljs.core.count(qs);
var ts = sicmutils.mechanics.lagrange.linear_interpolants(t0,t1,n);
return sicmutils.mechanics.lagrange.Lagrange_interpolation_function(cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,q0,null,(1),null)),qs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,q1,null,(1),null))], 0))))),cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,t0,null,(1),null)),ts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,t1,null,(1),null))], 0))))));
});
/**
 * SICM p. 23
 */
sicmutils.mechanics.lagrange.parametric_path_action = (function sicmutils$mechanics$lagrange$parametric_path_action(Lagrangian,t0,q0,t1,q1){
return (function (qs){
var path = sicmutils.mechanics.lagrange.make_path(t0,q0,t1,q1,qs);
return sicmutils.mechanics.lagrange.Lagrangian_action.cljs$core$IFn$_invoke$arity$5(Lagrangian,path,t0,t1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile?","compile?",-826687650),false], null));
});
});
/**
 * SICM p. 23. The optional parameter values is a callback which will report
 *   intermediate points of the minimization.
 */
sicmutils.mechanics.lagrange.find_path = (function sicmutils$mechanics$lagrange$find_path(var_args){
var args__4870__auto__ = [];
var len__4864__auto___103291 = arguments.length;
var i__4865__auto___103292 = (0);
while(true){
if((i__4865__auto___103292 < len__4864__auto___103291)){
args__4870__auto__.push((arguments[i__4865__auto___103292]));

var G__103293 = (i__4865__auto___103292 + (1));
i__4865__auto___103292 = G__103293;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((6) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((6)),(0),null)):null);
return sicmutils.mechanics.lagrange.find_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__4871__auto__);
});

(sicmutils.mechanics.lagrange.find_path.cljs$core$IFn$_invoke$arity$variadic = (function (Lagrangian,t0,q0,t1,q1,n,p__103217){
var map__103219 = p__103217;
var map__103219__$1 = cljs.core.__destructure_map(map__103219);
var observe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103219__$1,new cljs.core.Keyword(null,"observe","observe",-86651450));
var initial_qs = sicmutils.mechanics.lagrange.linear_interpolants(q0,q1,n);
var minimizing_qs = sicmutils.numerical.minimize.multidimensional_minimize.cljs$core$IFn$_invoke$arity$variadic(sicmutils.mechanics.lagrange.parametric_path_action(Lagrangian,t0,q0,t1,q1),initial_qs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"callback","callback",-705136228),observe], 0));
return sicmutils.mechanics.lagrange.make_path(t0,q0,t1,q1,minimizing_qs);
}));

(sicmutils.mechanics.lagrange.find_path.cljs$lang$maxFixedArity = (6));

/** @this {Function} */
(sicmutils.mechanics.lagrange.find_path.cljs$lang$applyTo = (function (seq103208){
var G__103209 = cljs.core.first(seq103208);
var seq103208__$1 = cljs.core.next(seq103208);
var G__103210 = cljs.core.first(seq103208__$1);
var seq103208__$2 = cljs.core.next(seq103208__$1);
var G__103211 = cljs.core.first(seq103208__$2);
var seq103208__$3 = cljs.core.next(seq103208__$2);
var G__103212 = cljs.core.first(seq103208__$3);
var seq103208__$4 = cljs.core.next(seq103208__$3);
var G__103213 = cljs.core.first(seq103208__$4);
var seq103208__$5 = cljs.core.next(seq103208__$4);
var G__103214 = cljs.core.first(seq103208__$5);
var seq103208__$6 = cljs.core.next(seq103208__$5);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103209,G__103210,G__103211,G__103212,G__103213,G__103214,seq103208__$6);
}));

/**
 * Given a state tuple (of finite length), reconstitutes the initial segment of
 *   the Taylor series corresponding to the state tuple data as a function of t.
 * 
 *   Time is measured beginning at the point of time specified in the input state
 *   tuple.
 */
sicmutils.mechanics.lagrange.osculating_path = (function sicmutils$mechanics$lagrange$osculating_path(state0){
var vec__103221 = state0;
var t0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103221,(0),null);
var q0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103221,(1),null);
var k = cljs.core.count(state0);
return (function (t){
var dt = sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(t,t0);
var n = (2);
var sum = q0;
var dt_STAR__STAR_n_COLON_n_BANG_ = dt;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,k)){
return sum;
} else {
var G__103294 = (n + (1));
var G__103295 = sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sum,sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(state0,n),dt_STAR__STAR_n_COLON_n_BANG_));
var G__103296 = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(dt_STAR__STAR_n_COLON_n_BANG_,dt),n);
n = G__103294;
sum = G__103295;
dt_STAR__STAR_n_COLON_n_BANG_ = G__103296;
continue;
}
break;
}
});
});
sicmutils.mechanics.lagrange.Gamma_bar = (function sicmutils$mechanics$lagrange$Gamma_bar(f){
return (function (local){
var G__103229 = cljs.core.first(local);
var fexpr__103228 = (function (){var G__103230 = sicmutils.mechanics.lagrange.osculating_path(local);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__103230) : f.call(null,G__103230));
})();
return (fexpr__103228.cljs$core$IFn$_invoke$arity$1 ? fexpr__103228.cljs$core$IFn$_invoke$arity$1(G__103229) : fexpr__103228.call(null,G__103229));
});
});
sicmutils.mechanics.lagrange.Dt_procedure = (function sicmutils$mechanics$lagrange$Dt_procedure(F){
return (function sicmutils$mechanics$lagrange$Dt_procedure_$_DtF(state){
var n = cljs.core.count(state);
var DF_on_path = (function sicmutils$mechanics$lagrange$Dt_procedure_$_DtF_$_DF_on_path(q){
var G__103233 = sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([F,sicmutils.mechanics.lagrange.Gamma.cljs$core$IFn$_invoke$arity$2(q,(n - (1)))], 0));
return (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(G__103233) : sicmutils.calculus.derivative.D.call(null,G__103233));
});
return sicmutils.mechanics.lagrange.Gamma_bar(DF_on_path)(state);
});
});
sicmutils.mechanics.lagrange.Dt = sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$2(sicmutils.mechanics.lagrange.Dt_procedure,new cljs.core.Symbol(null,"Dt","Dt",389881669,null));
sicmutils.mechanics.lagrange.trim_last_argument = (function sicmutils$mechanics$lagrange$trim_last_argument(local){
return sicmutils.structure.up_STAR_(cljs.core.pop(sicmutils.structure.structure__GT_vector(local)));
});
sicmutils.mechanics.lagrange.Euler_Lagrange_operator = (function sicmutils$mechanics$lagrange$Euler_Lagrange_operator(L){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__103234 = (function (){var fexpr__103235 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__103235.cljs$core$IFn$_invoke$arity$1 ? fexpr__103235.cljs$core$IFn$_invoke$arity$1(L) : fexpr__103235.call(null,L));
})();
return (sicmutils.mechanics.lagrange.Dt.cljs$core$IFn$_invoke$arity$1 ? sicmutils.mechanics.lagrange.Dt.cljs$core$IFn$_invoke$arity$1(G__103234) : sicmutils.mechanics.lagrange.Dt.call(null,G__103234));
})(),sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__103236 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0));
return (fexpr__103236.cljs$core$IFn$_invoke$arity$1 ? fexpr__103236.cljs$core$IFn$_invoke$arity$1(L) : fexpr__103236.call(null,L));
})(),sicmutils.mechanics.lagrange.trim_last_argument], 0)));
});
/**
 * Alias for [[Euler-lagrange-operator]].
 */
sicmutils.mechanics.lagrange.LE = sicmutils.mechanics.lagrange.Euler_Lagrange_operator;
/**
 * Alias for [[Euler-lagrange-operator]].
 */
sicmutils.mechanics.lagrange.Lagrange_equations_operator = sicmutils.mechanics.lagrange.Euler_Lagrange_operator;
sicmutils.mechanics.lagrange.generalized_LE = (function sicmutils$mechanics$lagrange$generalized_LE(Lagrangian){
return (function (state){
var m = cljs.core.count(state);
if((((m > (3))) && (cljs.core.even_QMARK_(m)))){
} else {
throw (new Error(["Assert failed: ","Incorrect state size for Lagrange Equations","\n","(and (> m 3) (even? m))"].join('')));
}

var lp = (function sicmutils$mechanics$lagrange$generalized_LE_$_lp(i,state__$1){
if((i === (0))){
return (0);
} else {
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103250 = (function (){var G__103252 = (function (){var fexpr__103253 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i], 0));
return (fexpr__103253.cljs$core$IFn$_invoke$arity$1 ? fexpr__103253.cljs$core$IFn$_invoke$arity$1(Lagrangian) : fexpr__103253.call(null,Lagrangian));
})();
var fexpr__103251 = sicmutils.generic.expt.cljs$core$IFn$_invoke$arity$2(sicmutils.mechanics.lagrange.Dt,(i - (1)));
return (fexpr__103251.cljs$core$IFn$_invoke$arity$1 ? fexpr__103251.cljs$core$IFn$_invoke$arity$1(G__103252) : fexpr__103251.call(null,G__103252));
})();
return (fexpr__103250.cljs$core$IFn$_invoke$arity$1 ? fexpr__103250.cljs$core$IFn$_invoke$arity$1(state__$1) : fexpr__103250.call(null,state__$1));
})(),sicmutils$mechanics$lagrange$generalized_LE_$_lp((i - (1)),sicmutils.mechanics.lagrange.trim_last_argument(state__$1)));
}
});
return lp(cljs.core.quot(m,(2)),state);
});
});
/**
 * Accepts a coordinate transformation `F` from a local tuple to a new coordinate
 *   structure, and returns a function from `local -> local` that applies the
 *   transformation directly.
 * 
 *   [[F->C]] handles local tuples of arbitrary length.
 */
sicmutils.mechanics.lagrange.F__GT_C = (function sicmutils$mechanics$lagrange$F__GT_C(F){
return (function sicmutils$mechanics$lagrange$F__GT_C_$_C(local){
var n = cljs.core.count(local);
var f_bar = (function (q_prime){
var q = sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([F,sicmutils.mechanics.lagrange.Gamma.cljs$core$IFn$_invoke$arity$1(q_prime)], 0));
return sicmutils.mechanics.lagrange.Gamma.cljs$core$IFn$_invoke$arity$2(q,n);
});
return sicmutils.mechanics.lagrange.Gamma_bar(f_bar)(local);
});
});
sicmutils.mechanics.lagrange.rectangular__GT_polar = (function sicmutils$mechanics$lagrange$rectangular__GT_polar(p__103257){
var vec__103258 = p__103257;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103258,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103258,(1),null);
var r = sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(y)));
var phi = sicmutils.generic.atan.cljs$core$IFn$_invoke$arity$2(y,x);
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r,phi], 0));
});
sicmutils.mechanics.lagrange.r__GT_p = (function sicmutils$mechanics$lagrange$r__GT_p(tqv){
return sicmutils.mechanics.lagrange.rectangular__GT_polar(sicmutils.mechanics.lagrange.coordinate(tqv));
});
sicmutils.mechanics.lagrange.polar__GT_rectangular = (function sicmutils$mechanics$lagrange$polar__GT_rectangular(p__103261){
var vec__103262 = p__103261;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103262,(0),null);
var phi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103262,(1),null);
var x = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r,sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(phi));
var y = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r,sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(phi));
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));
});
/**
 * SICM p. 47. Polar to rectangular coordinates of state.
 */
sicmutils.mechanics.lagrange.p__GT_r = (function sicmutils$mechanics$lagrange$p__GT_r(tqv){
return sicmutils.mechanics.lagrange.polar__GT_rectangular(sicmutils.mechanics.lagrange.coordinate(tqv));
});
sicmutils.mechanics.lagrange.spherical__GT_rectangular = (function sicmutils$mechanics$lagrange$spherical__GT_rectangular(p__103265){
var vec__103266 = p__103265;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103266,(0),null);
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103266,(1),null);
var phi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103266,(2),null);
var x = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(r,sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(theta),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(phi)], 0));
var y = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(r,sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(theta),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(phi)], 0));
var z = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r,sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(theta));
return (sicmutils.mechanics.lagrange.coordinate_tuple.cljs$core$IFn$_invoke$arity$3 ? sicmutils.mechanics.lagrange.coordinate_tuple.cljs$core$IFn$_invoke$arity$3(x,y,z) : sicmutils.mechanics.lagrange.coordinate_tuple.call(null,x,y,z));
});
/**
 * SICM p. 83
 */
sicmutils.mechanics.lagrange.s__GT_r = (function sicmutils$mechanics$lagrange$s__GT_r(local){
return sicmutils.mechanics.lagrange.spherical__GT_rectangular(sicmutils.mechanics.lagrange.coordinate(local));
});
sicmutils.mechanics.lagrange.rectangular__GT_spherical = (function sicmutils$mechanics$lagrange$rectangular__GT_spherical(p__103269){
var vec__103270 = p__103269;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103270,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103270,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103270,(2),null);
var r = sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(y),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(z)], 0)));
var theta = sicmutils.generic.acos.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(z,r));
var phi = sicmutils.generic.atan.cljs$core$IFn$_invoke$arity$2(y,x);
return (sicmutils.mechanics.lagrange.coordinate_tuple.cljs$core$IFn$_invoke$arity$3 ? sicmutils.mechanics.lagrange.coordinate_tuple.cljs$core$IFn$_invoke$arity$3(r,theta,phi) : sicmutils.mechanics.lagrange.coordinate_tuple.call(null,r,theta,phi));
});
sicmutils.mechanics.lagrange.r__GT_s = (function sicmutils$mechanics$lagrange$r__GT_s(local){
return sicmutils.mechanics.lagrange.rectangular__GT_spherical(sicmutils.mechanics.lagrange.coordinate(local));
});

//# sourceMappingURL=sicmutils.mechanics.lagrange.js.map
