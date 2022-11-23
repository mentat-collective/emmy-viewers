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
sicmutils.numerical.ode.integration_opts = (function sicmutils$numerical$ode$integration_opts(state_derivative,derivative_args,initial_state,p__103185){
var map__103186 = p__103185;
var map__103186__$1 = cljs.core.__destructure_map(map__103186);
var compile_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__103186__$1,new cljs.core.Keyword(null,"compile?","compile?",-826687650),true);
var epsilon = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__103186__$1,new cljs.core.Keyword(null,"epsilon","epsilon",-730158570),1.0E-8);
var evaluation_time = sicmutils.util.stopwatch.stopwatch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"started?","started?",-1301062863),false], 0));
var evaluation_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var dimension = cljs.core.count(cljs.core.flatten(initial_state));
var param_array = derivative_args;
var derivative_fn = (cljs.core.truth_(compile_QMARK_)?sicmutils.expression.compile.compile_js.cljs$core$IFn$_invoke$arity$3(state_derivative,initial_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),(function (){var or__4253__auto__ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.deref(derivative_args));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()], null)):(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"sicmutils.numerical.ode",null,106,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not compiling function for ODE analysis"], null);
}),null)),null,-745809427,null);

var d_COLON_dt = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(state_derivative,derivative_args);
var array__GT_state = (function (p1__103182_SHARP_){
return sicmutils.structure.unflatten.cljs$core$IFn$_invoke$arity$2(p1__103182_SHARP_,initial_state);
});
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(d_COLON_dt,array__GT_state);
})()
);
var state__GT_array = (function (state){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.util.double$,cljs.core.flatten(state)));
});
var equations = (cljs.core.truth_(compile_QMARK_)?(function (){var out = (new Array(dimension));
return (function (_,y){
derivative_fn(y,cljs.core.deref(param_array),out);

return out;
});
})():(function (){var out = (new Array(dimension));
return (function (_,y){
evaluation_time.sicmutils$util$stopwatch$IStopwatch$start$arity$1(null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(evaluation_count,cljs.core.inc);

derivative_fn(y,cljs.core.deref(param_array),out);

evaluation_time.sicmutils$util$stopwatch$IStopwatch$stop$arity$1(null);

return out;
});
})());
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
var sicmutils$numerical$ode$make_integrator_$_call__4 = (function (initial_state,step_size,t,p__103202){
var map__103203 = p__103202;
var map__103203__$1 = cljs.core.__destructure_map(map__103203);
var opts = map__103203__$1;
var observe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103203__$1,new cljs.core.Keyword(null,"observe","observe",-86651450));
total_time.sicmutils$util$stopwatch$IStopwatch$start$arity$1(null);

var map__103204 = sicmutils.numerical.ode.integration_opts(state_derivative,derivative_args,initial_state,opts);
var map__103204__$1 = cljs.core.__destructure_map(map__103204);
var integrator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103204__$1,new cljs.core.Keyword(null,"integrator","integrator",1554489822));
var equations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103204__$1,new cljs.core.Keyword(null,"equations","equations",1884238648));
var stopwatch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103204__$1,new cljs.core.Keyword(null,"stopwatch","stopwatch",1391653038));
var counter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103204__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var initial_state_array = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(initial_state));
var array__GT_state = (function (p1__103200_SHARP_){
return sicmutils.structure.unflatten.cljs$core$IFn$_invoke$arity$2(p1__103200_SHARP_,initial_state);
});
var observe_fn = (cljs.core.truth_(observe)?(function (){
(integrator.denseOutput = true);

return integrator.grid(step_size,(function (t__$1,y){
cljs.core.reset_BANG_(latest,t__$1);

var G__103206 = t__$1;
var G__103207 = array__GT_state(y);
return (observe.cljs$core$IFn$_invoke$arity$2 ? observe.cljs$core$IFn$_invoke$arity$2(G__103206,G__103207) : observe.call(null,G__103206,G__103207));
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

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"sicmutils.numerical.ode",null,210,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#",cljs.core.deref(counter),"total",total_time.sicmutils$util$stopwatch$IStopwatch$repr$arity$1(null),"f",sicmutils.util.stopwatch.repr(stopwatch__$1)], null);
}),null)),null,-1282408479,null);

total_time.sicmutils$util$stopwatch$IStopwatch$reset$arity$1(null);

cljs.core.reset_BANG_(latest,(0));

return ret;
});
sicmutils$numerical$ode$make_integrator_$_call = function(initial_state,step_size,t,p__103202){
switch(arguments.length){
case 3:
return sicmutils$numerical$ode$make_integrator_$_call__3.call(this,initial_state,step_size,t);
case 4:
return sicmutils$numerical$ode$make_integrator_$_call__4.call(this,initial_state,step_size,t,p__103202);
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
var len__4864__auto___103244 = arguments.length;
var i__4865__auto___103247 = (0);
while(true){
if((i__4865__auto___103247 < len__4864__auto___103244)){
args__4870__auto__.push((arguments[i__4865__auto___103247]));

var G__103249 = (i__4865__auto___103247 + (1));
i__4865__auto___103247 = G__103249;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sicmutils.numerical.ode.state_advancer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sicmutils.numerical.ode.state_advancer.cljs$core$IFn$_invoke$arity$variadic = (function (state_derivative,state_derivative_args){
var I = sicmutils.numerical.ode.make_integrator(state_derivative,(function (){var or__4253__auto__ = state_derivative_args;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
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
(sicmutils.numerical.ode.state_advancer.cljs$lang$applyTo = (function (seq103216){
var G__103218 = cljs.core.first(seq103216);
var seq103216__$1 = cljs.core.next(seq103216);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103218,seq103216__$1);
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
var len__4864__auto___103254 = arguments.length;
var i__4865__auto___103255 = (0);
while(true){
if((i__4865__auto___103255 < len__4864__auto___103254)){
args__4870__auto__.push((arguments[i__4865__auto___103255]));

var G__103256 = (i__4865__auto___103255 + (1));
i__4865__auto___103255 = G__103256;
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
(sicmutils.numerical.ode.evolve.cljs$lang$applyTo = (function (seq103225){
var G__103226 = cljs.core.first(seq103225);
var seq103225__$1 = cljs.core.next(seq103225);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103226,seq103225__$1);
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
