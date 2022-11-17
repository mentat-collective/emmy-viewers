goog.provide('sicmutils.numerical.ode');
var module$node_modules$odex$src$odex=shadow.js.require("module$node_modules$odex$src$odex", {});
sicmutils.numerical.ode.near_QMARK_ = sicmutils.value.within(1.0E-8);
/**
 * Returns a map with the following kv pairs:
 * 
 *   - `:integrator` an instance of `GraggBulirschStoerIntegrator`
 *   - `:equations` instance of `FirstOrderDifferentialEquations`
 *   - `:dimension` the total number of entries in the flattened initial state tuple
 *   - `:stopwatch` [[IStopwatch]] instance that records total evaluation time inside
 *  the derivative function
 *   - `:counter` an atom containing a `Long` that increments every time derivative fn
 *  is called.
 */
sicmutils.numerical.ode.integration_opts = (function sicmutils$numerical$ode$integration_opts(state_derivative,derivative_args,initial_state,p__103180){
var map__103183 = p__103180;
var map__103183__$1 = cljs.core.__destructure_map(map__103183);
var compile_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103183__$1,new cljs.core.Keyword(null,"compile?","compile?",-826687650));
var epsilon = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__103183__$1,new cljs.core.Keyword(null,"epsilon","epsilon",-730158570),1.0E-8);
var evaluation_time = sicmutils.util.stopwatch.stopwatch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"started?","started?",-1301062863),false], 0));
var evaluation_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var dimension = cljs.core.count(cljs.core.flatten(initial_state));
var derivative_fn = (cljs.core.truth_(compile_QMARK_)?(function (){var f_SINGLEQUOTE_ = sicmutils.expression.compile.compile_state_fn.cljs$core$IFn$_invoke$arity$3(state_derivative,derivative_args,initial_state);
return (function (y){
return (f_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? f_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(y,derivative_args) : f_SINGLEQUOTE_.call(null,y,derivative_args));
});
})():(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"sicmutils.numerical.ode",null,91,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not compiling function for ODE analysis"], null);
}),null)),null,-859828455,null);

var d_COLON_dt = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(state_derivative,derivative_args);
var array__GT_state = (function (p1__103176_SHARP_){
return sicmutils.structure.unflatten.cljs$core$IFn$_invoke$arity$2(p1__103176_SHARP_,initial_state);
});
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(d_COLON_dt,array__GT_state);
})()
);
var state__GT_array = (function (state){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.util.double$,cljs.core.flatten(state)));
});
var equations = (function (_,y){
evaluation_time.sicmutils$util$stopwatch$IStopwatch$start$arity$1(null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(evaluation_count,cljs.core.inc);

var y_SINGLEQUOTE_ = state__GT_array(derivative_fn(y));
evaluation_time.sicmutils$util$stopwatch$IStopwatch$stop$arity$1(null);

return y_SINGLEQUOTE_;
});
var integrator = (function (){var solver = (new module$node_modules$odex$src$odex.Solver(dimension));
(solver.absoluteTolerance = epsilon);

(solver.relativeTolerance = epsilon);

return solver;
})();
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"integrator","integrator",1554489822),integrator,new cljs.core.Keyword(null,"equations","equations",1884238648),equations,new cljs.core.Keyword(null,"dimension","dimension",543254198),dimension,new cljs.core.Keyword(null,"stopwatch","stopwatch",1391653038),evaluation_time,new cljs.core.Keyword(null,"counter","counter",804008177),evaluation_count], null);
});
/**
 * make-integrator takes a state derivative function (which in this
 *   system is assumed to be a map from a structure to a structure of the
 *   same shape, as differentiating a function does not change its
 *   shape), and returns an integrator, which is a function of several
 *   arguments:
 * 
 *   - the initial state
 *   - an intermediate-state observation function
 *   - the step size desired
 *   - the final time to seek, and
 *   - an error tolerance.
 * 
 * 
 *   If the `observe` function is not nil, it will be invoked with the time as
 *   first argument and integrated state as the second, at each intermediate step.
 */
sicmutils.numerical.ode.make_integrator = (function sicmutils$numerical$ode$make_integrator(state_derivative,derivative_args){
var total_time = sicmutils.util.stopwatch.stopwatch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"started?","started?",-1301062863),false], 0));
var latest = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return (function() {
var sicmutils$numerical$ode$make_integrator_$_call = null;
var sicmutils$numerical$ode$make_integrator_$_call__3 = (function (initial_state,step_size,t){
return sicmutils$numerical$ode$make_integrator_$_call.cljs$core$IFn$_invoke$arity$4(initial_state,step_size,t,cljs.core.PersistentArrayMap.EMPTY);
});
var sicmutils$numerical$ode$make_integrator_$_call__4 = (function (initial_state,step_size,t,p__103193){
var map__103194 = p__103193;
var map__103194__$1 = cljs.core.__destructure_map(map__103194);
var opts = map__103194__$1;
var observe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103194__$1,new cljs.core.Keyword(null,"observe","observe",-86651450));
total_time.sicmutils$util$stopwatch$IStopwatch$start$arity$1(null);

var map__103197 = sicmutils.numerical.ode.integration_opts(state_derivative,derivative_args,initial_state,opts);
var map__103197__$1 = cljs.core.__destructure_map(map__103197);
var integrator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103197__$1,new cljs.core.Keyword(null,"integrator","integrator",1554489822));
var equations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103197__$1,new cljs.core.Keyword(null,"equations","equations",1884238648));
var stopwatch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103197__$1,new cljs.core.Keyword(null,"stopwatch","stopwatch",1391653038));
var counter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103197__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var initial_state_array = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(initial_state));
var array__GT_state = (function (p1__103189_SHARP_){
return sicmutils.structure.unflatten.cljs$core$IFn$_invoke$arity$2(p1__103189_SHARP_,initial_state);
});
var observe_fn = (cljs.core.truth_(observe)?(function (){
(integrator.denseOutput = true);

return integrator.grid(step_size,(function (t__$1,y){
cljs.core.reset_BANG_(latest,t__$1);

var G__103198 = t__$1;
var G__103199 = array__GT_state(y);
return (observe.cljs$core$IFn$_invoke$arity$2 ? observe.cljs$core$IFn$_invoke$arity$2(G__103198,G__103199) : observe.call(null,G__103198,G__103199));
}));
})()
:null);
var output = integrator.solve(equations,(0),initial_state_array,t,observe_fn);
var ret = array__GT_state(output.y);
if(cljs.core.truth_((function (){var and__4251__auto__ = observe;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(sicmutils.numerical.ode.near_QMARK_(t,cljs.core.deref(latest)));
} else {
return and__4251__auto__;
}
})())){
(observe.cljs$core$IFn$_invoke$arity$2 ? observe.cljs$core$IFn$_invoke$arity$2(t,ret) : observe.call(null,t,ret));
} else {
}

total_time.sicmutils$util$stopwatch$IStopwatch$stop$arity$1(null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"sicmutils.numerical.ode",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#",cljs.core.deref(counter),"total",total_time.sicmutils$util$stopwatch$IStopwatch$repr$arity$1(null),"f",sicmutils.util.stopwatch.repr(stopwatch__$1)], null);
}),null)),null,-739027080,null);

total_time.sicmutils$util$stopwatch$IStopwatch$reset$arity$1(null);

cljs.core.reset_BANG_(latest,(0));

return ret;
});
sicmutils$numerical$ode$make_integrator_$_call = function(initial_state,step_size,t,p__103193){
switch(arguments.length){
case 3:
return sicmutils$numerical$ode$make_integrator_$_call__3.call(this,initial_state,step_size,t);
case 4:
return sicmutils$numerical$ode$make_integrator_$_call__4.call(this,initial_state,step_size,t,p__103193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sicmutils$numerical$ode$make_integrator_$_call.cljs$core$IFn$_invoke$arity$3 = sicmutils$numerical$ode$make_integrator_$_call__3;
sicmutils$numerical$ode$make_integrator_$_call.cljs$core$IFn$_invoke$arity$4 = sicmutils$numerical$ode$make_integrator_$_call__4;
return sicmutils$numerical$ode$make_integrator_$_call;
})()
});
/**
 * state-advancer takes a state derivative function constructor followed by the
 *   arguments to construct it with. The state derivative function is constructed
 *   and an integrator is produced which takes:
 * 
 *   - initial state
 *   - target time
 * 
 *   as arguments. Optionally, supply an options map with these optional fields:
 * 
 *   `:compile?`: If true, the ODE solver will compile your state function.
 * 
 *   `:epsilon`: The maximum error tolerance allowed by the ODE solver, both
 *   relative and absolute.
 * 
 *   Returns the final state.
 * 
 *   The state derivative is expected to map a structure to a structure of the same
 *   shape, and is required to have the time parameter as the first element.
 */
sicmutils.numerical.ode.state_advancer = (function sicmutils$numerical$ode$state_advancer(var_args){
var args__4870__auto__ = [];
var len__4864__auto___103227 = arguments.length;
var i__4865__auto___103228 = (0);
while(true){
if((i__4865__auto___103228 < len__4864__auto___103227)){
args__4870__auto__.push((arguments[i__4865__auto___103228]));

var G__103229 = (i__4865__auto___103228 + (1));
i__4865__auto___103228 = G__103229;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sicmutils.numerical.ode.state_advancer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sicmutils.numerical.ode.state_advancer.cljs$core$IFn$_invoke$arity$variadic = (function (state_derivative,state_derivative_args){
var I = sicmutils.numerical.ode.make_integrator(state_derivative,state_derivative_args);
return (function() {
var sicmutils$numerical$ode$call = null;
var sicmutils$numerical$ode$call__2 = (function (initial_state,t){
return sicmutils$numerical$ode$call.cljs$core$IFn$_invoke$arity$3(initial_state,t,cljs.core.PersistentArrayMap.EMPTY);
});
var sicmutils$numerical$ode$call__3 = (function (initial_state,t,opts){
return I(initial_state,(0),t,opts);
});
sicmutils$numerical$ode$call = function(initial_state,t,opts){
switch(arguments.length){
case 2:
return sicmutils$numerical$ode$call__2.call(this,initial_state,t);
case 3:
return sicmutils$numerical$ode$call__3.call(this,initial_state,t,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sicmutils$numerical$ode$call.cljs$core$IFn$_invoke$arity$2 = sicmutils$numerical$ode$call__2;
sicmutils$numerical$ode$call.cljs$core$IFn$_invoke$arity$3 = sicmutils$numerical$ode$call__3;
return sicmutils$numerical$ode$call;
})()
}));

(sicmutils.numerical.ode.state_advancer.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sicmutils.numerical.ode.state_advancer.cljs$lang$applyTo = (function (seq103206){
var G__103207 = cljs.core.first(seq103206);
var seq103206__$1 = cljs.core.next(seq103206);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103207,seq103206__$1);
}));

/**
 * evolve takes a state derivative function constructor and its arguments, and
 *   returns an integrator via make-integrator.
 * 
 *   In particular, the returned function accepts a callback function which will be
 *   invoked at intermediate grid points of the integration.
 */
sicmutils.numerical.ode.evolve = (function sicmutils$numerical$ode$evolve(var_args){
var args__4870__auto__ = [];
var len__4864__auto___103231 = arguments.length;
var i__4865__auto___103232 = (0);
while(true){
if((i__4865__auto___103232 < len__4864__auto___103231)){
args__4870__auto__.push((arguments[i__4865__auto___103232]));

var G__103233 = (i__4865__auto___103232 + (1));
i__4865__auto___103232 = G__103233;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sicmutils.numerical.ode.evolve.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sicmutils.numerical.ode.evolve.cljs$core$IFn$_invoke$arity$variadic = (function (state_derivative,state_derivative_args){
return sicmutils.numerical.ode.make_integrator(state_derivative,state_derivative_args);
}));

(sicmutils.numerical.ode.evolve.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sicmutils.numerical.ode.evolve.cljs$lang$applyTo = (function (seq103214){
var G__103215 = cljs.core.first(seq103214);
var seq103214__$1 = cljs.core.next(seq103214);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103215,seq103214__$1);
}));

/**
 * A wrapper for evolve, which is more convenient when you just
 *   want a vector of (time, state) pairs over the integration interval
 *   instead of having to deal with a callback. Integrates the supplied
 *   state derivative (and its argument package) from [0 to t1] in steps
 *   of size dt
 */
sicmutils.numerical.ode.integrate_state_derivative = (function sicmutils$numerical$ode$integrate_state_derivative(state_derivative,state_derivative_args,initial_state,t1,dt){
var I = sicmutils.numerical.ode.make_integrator(state_derivative,state_derivative_args);
var out = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var collector = (function (_,state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(out,cljs.core.conj,state);
});
I(initial_state,dt,t1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile?","compile?",-826687650),true,new cljs.core.Keyword(null,"epsilon","epsilon",-730158570),1.0E-6,new cljs.core.Keyword(null,"observe","observe",-86651450),collector], null));

return cljs.core.deref(out);
});

//# sourceMappingURL=sicmutils.numerical.ode.js.map
