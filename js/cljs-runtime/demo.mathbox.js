goog.provide('demo.mathbox');
var module$node_modules$three$src$math$Color=shadow.js.require("module$node_modules$three$src$math$Color", {});
demo.mathbox.format_number = (function demo$mathbox$format_number(x){
return x.toFixed((2)).replace(/\.0+$/,"");
});
demo.mathbox.Cartesian = (function demo$mathbox$Cartesian(var_args){
var args__4870__auto__ = [];
var len__4864__auto___123605 = arguments.length;
var i__4865__auto___123606 = (0);
while(true){
if((i__4865__auto___123606 < len__4864__auto___123605)){
args__4870__auto__.push((arguments[i__4865__auto___123606]));

var G__123607 = (i__4865__auto___123606 + (1));
i__4865__auto___123606 = G__123607;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return demo.mathbox.Cartesian.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(demo.mathbox.Cartesian.cljs$core$IFn$_invoke$arity$variadic = (function (opts,children){
var opts__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"range","range",1639692286),(function (p__123492){
var map__123493 = p__123492;
var map__123493__$1 = cljs.core.__destructure_map(map__123493);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123493__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123493__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123493__$1,new cljs.core.Keyword(null,"z","z",-789527183));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4253__auto__ = x;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
}
})(),(function (){var or__4253__auto__ = y;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
}
})(),(function (){var or__4253__auto__ = z;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
}
})()], null);
}));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Cartesian,opts__$1], null),children);
}));

(demo.mathbox.Cartesian.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(demo.mathbox.Cartesian.cljs$lang$applyTo = (function (seq123490){
var G__123491 = cljs.core.first(seq123490);
var seq123490__$1 = cljs.core.next(seq123490);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__123491,seq123490__$1);
}));

/**
 * Like the original, but allows for a 'dimensions' key.
 */
demo.mathbox.Volume = (function demo$mathbox$Volume(p__123494){
var map__123495 = p__123494;
var map__123495__$1 = cljs.core.__destructure_map(map__123495);
var opts = map__123495__$1;
var dimensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123495__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var vec__123496 = dimensions;
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123496,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123496,(1),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123496,(2),null);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097)),new cljs.core.Keyword(null,"width","width",-384071477),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"depth","depth",1768663640),depth], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Volume,opts__$1], null);
});
demo.mathbox.ColorCube = (function demo$mathbox$ColorCube(p__123499){
var map__123500 = p__123499;
var map__123500__$1 = cljs.core.__destructure_map(map__123500);
var dimensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123500__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123500__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123500__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.Volume,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),dimensions,new cljs.core.Keyword(null,"items","items",1031954938),(1),new cljs.core.Keyword(null,"channels","channels",1132759174),(4),new cljs.core.Keyword(null,"live","live",-1610148039),false,new cljs.core.Keyword(null,"expr","expr",745722291),(function (emit,x,y,z){
return (emit.cljs$core$IFn$_invoke$arity$4 ? emit.cljs$core$IFn$_invoke$arity$4(x,y,z,opacity) : emit.call(null,x,y,z,opacity));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Point,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"points","points",-1486596883),"<",new cljs.core.Keyword(null,"colors","colors",1157174732),"<",new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"size","size",1098693007),size], null)], null)], null);
});
demo.mathbox.Function1 = (function demo$mathbox$Function1(p__123501){
var map__123502 = p__123501;
var map__123502__$1 = cljs.core.__destructure_map(map__123502);
var samples = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__123502__$1,new cljs.core.Keyword(null,"samples","samples",635504833),(256));
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123502__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var f_SINGLEQUOTE_ = sicmutils.expression.compile.sci_eval(f);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Interval,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),samples,new cljs.core.Keyword(null,"channels","channels",1132759174),(2),new cljs.core.Keyword(null,"expr","expr",745722291),(function (emit,x,_,time){
var G__123503 = x;
var G__123504 = (f_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? f_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(x,time) : f_SINGLEQUOTE_.call(null,x,time));
return (emit.cljs$core$IFn$_invoke$arity$2 ? emit.cljs$core$IFn$_invoke$arity$2(G__123503,G__123504) : emit.call(null,G__123503,G__123504));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Line,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(3182847),new cljs.core.Keyword(null,"width","width",-384071477),(4)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Point,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(3182847),new cljs.core.Keyword(null,"size","size",1098693007),(8)], null)], null)], null);
});
/**
 * hardcoded at first for this use case.
 */
demo.mathbox.Lagrangian_updater = (function demo$mathbox$Lagrangian_updater(var_args){
var args__4870__auto__ = [];
var len__4864__auto___123608 = arguments.length;
var i__4865__auto___123609 = (0);
while(true){
if((i__4865__auto___123609 < len__4864__auto___123608)){
args__4870__auto__.push((arguments[i__4865__auto___123609]));

var G__123610 = (i__4865__auto___123609 + (1));
i__4865__auto___123609 = G__123610;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return demo.mathbox.Lagrangian_updater.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(demo.mathbox.Lagrangian_updater.cljs$core$IFn$_invoke$arity$variadic = (function (state_derivative,initial_state,p__123508){
var map__123509 = p__123508;
var map__123509__$1 = cljs.core.__destructure_map(map__123509);
var compile_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__123509__$1,new cljs.core.Keyword(null,"compile?","compile?",-826687650),false);
var map__123510 = sicmutils.numerical.ode.integration_opts(cljs.core.constantly(state_derivative),cljs.core.PersistentVector.EMPTY,initial_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"epsilon","epsilon",-730158570),1.0E-6,new cljs.core.Keyword(null,"compile?","compile?",-826687650),compile_QMARK_], null));
var map__123510__$1 = cljs.core.__destructure_map(map__123510);
var integrator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123510__$1,new cljs.core.Keyword(null,"integrator","integrator",1554489822));
var equations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123510__$1,new cljs.core.Keyword(null,"equations","equations",1884238648));
return (function (p__123511,t2){
var vec__123512 = p__123511;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123512,(0),null);
var state = vec__123512;
var s = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(state));
var output = integrator.solve(equations,t,s,t2,null);
return sicmutils.structure.unflatten.cljs$core$IFn$_invoke$arity$2(output.y,state);
});
}));

(demo.mathbox.Lagrangian_updater.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(demo.mathbox.Lagrangian_updater.cljs$lang$applyTo = (function (seq123505){
var G__123506 = cljs.core.first(seq123505);
var seq123505__$1 = cljs.core.next(seq123505);
var G__123507 = cljs.core.first(seq123505__$1);
var seq123505__$2 = cljs.core.next(seq123505__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__123506,G__123507,seq123505__$2);
}));

/**
 * hardcoded at first for this use case.
 */
demo.mathbox.Lagrangian_collector = (function demo$mathbox$Lagrangian_collector(var_args){
var args__4870__auto__ = [];
var len__4864__auto___123611 = arguments.length;
var i__4865__auto___123612 = (0);
while(true){
if((i__4865__auto___123612 < len__4864__auto___123611)){
args__4870__auto__.push((arguments[i__4865__auto___123612]));

var G__123613 = (i__4865__auto___123612 + (1));
i__4865__auto___123612 = G__123613;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return demo.mathbox.Lagrangian_collector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(demo.mathbox.Lagrangian_collector.cljs$core$IFn$_invoke$arity$variadic = (function (state_derivative,initial_state,p__123518){
var map__123519 = p__123518;
var map__123519__$1 = cljs.core.__destructure_map(map__123519);
var compile_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__123519__$1,new cljs.core.Keyword(null,"compile?","compile?",-826687650),false);
var map__123520 = sicmutils.numerical.ode.integration_opts(cljs.core.constantly(state_derivative),cljs.core.PersistentVector.EMPTY,initial_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"epsilon","epsilon",-730158570),1.0E-6,new cljs.core.Keyword(null,"compile?","compile?",-826687650),compile_QMARK_], null));
var map__123520__$1 = cljs.core.__destructure_map(map__123520);
var integrator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123520__$1,new cljs.core.Keyword(null,"integrator","integrator",1554489822));
var equations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123520__$1,new cljs.core.Keyword(null,"equations","equations",1884238648));
(integrator.denseOutput = true);

return (function (p__123521,t2,steps){
var vec__123522 = p__123521;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123522,(0),null);
var state = vec__123522;
var out = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentVector.EMPTY));
var s = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(state));
integrator.solve(equations,t,s,t2,integrator.grid(steps,(function (_,y){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(out,cljs.core.conj_BANG_,sicmutils.structure.unflatten.cljs$core$IFn$_invoke$arity$2(y,state));
})));

return cljs.core.persistent_BANG_(cljs.core.deref(out));
});
}));

(demo.mathbox.Lagrangian_collector.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(demo.mathbox.Lagrangian_collector.cljs$lang$applyTo = (function (seq123515){
var G__123516 = cljs.core.first(seq123515);
var seq123515__$1 = cljs.core.next(seq123515);
var G__123517 = cljs.core.first(seq123515__$1);
var seq123515__$2 = cljs.core.next(seq123515__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__123516,G__123517,seq123515__$2);
}));

demo.mathbox.Tail = (function demo$mathbox$Tail(p__123525){
var map__123526 = p__123525;
var map__123526__$1 = cljs.core.__destructure_map(map__123526);
var opts = map__123526__$1;
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123526__$1,new cljs.core.Keyword(null,"length","length",588987862));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Spread,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),-0.02], null),new cljs.core.Keyword(null,"alignHeight","alignHeight",301268438),(-1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Array,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),length,new cljs.core.Keyword(null,"channels","channels",1132759174),(4),new cljs.core.Keyword(null,"expr","expr",745722291),(function (emit,i){
var G__123527 = (1);
var G__123528 = (1);
var G__123529 = (1);
var G__123530 = ((1) - (i / (16)));
return (emit.cljs$core$IFn$_invoke$arity$4 ? emit.cljs$core$IFn$_invoke$arity$4(G__123527,G__123528,G__123529,G__123530) : emit.call(null,G__123527,G__123528,G__123529,G__123530));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Transpose,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),"yx"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Point,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"length","length",588987862)),new cljs.core.Keyword(null,"points","points",-1486596883),"<<<",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"colors","colors",1157174732),"<"], 0))], null)], null);
});
/**
 * Path is a function of i, t
 *   dimensions is how many you want to emit
 *   history is tail length,
 *   rest of options go to the final point
 * 
 *   Note that i think we have to emit with xzy?? weird...
 */
demo.mathbox.Comet = (function demo$mathbox$Comet(p__123531){
var map__123532 = p__123531;
var map__123532__$1 = cljs.core.__destructure_map(map__123532);
var opts = map__123532__$1;
var dimensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123532__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123532__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123532__$1,new cljs.core.Keyword(null,"length","length",588987862));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Array,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"history","history",-247395220),length,new cljs.core.Keyword(null,"channels","channels",1132759174),dimensions,new cljs.core.Keyword(null,"expr","expr",745722291),(function (emit,i,t){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emit,(path.cljs$core$IFn$_invoke$arity$2 ? path.cljs$core$IFn$_invoke$arity$2(i,t) : path.call(null,i,t)));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.Tail,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path","path",-188191168)], 0))], null)], null);
});
demo.mathbox.Mass = (function demo$mathbox$Mass(p__123534){
var map__123535 = p__123534;
var map__123535__$1 = cljs.core.__destructure_map(map__123535);
var state__GT_xyz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123535__$1,new cljs.core.Keyword(null,"state->xyz","state->xyz",254907752));
var L = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123535__$1,new cljs.core.Keyword(null,"L","L",-1038307519));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123535__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806));
var var_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123535__$1,new cljs.core.Keyword(null,"var-name","var-name",-574747624));
var render_fn = sicmutils.expression.compile.sci_eval(state__GT_xyz);
var state_deriv = sicmutils.expression.compile.sci_eval(L);
var my_updater = demo.mathbox.Lagrangian_updater.cljs$core$IFn$_invoke$arity$variadic(state_deriv,initial_state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"compile?","compile?",-826687650),false], 0));
var with_let123536 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let123536","with-let123536",134578169));
var temp__5757__auto___123614 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___123614 == null)){
} else {
var c__85371__auto___123615 = temp__5757__auto___123614;
if((with_let123536.generation === c__85371__auto___123615.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let123536.generation = c__85371__auto___123615.ratomGeneration);
}

var init123537 = (with_let123536.length === (0));
var _BANG_state = ((((init123537) || (cljs.core.not(with_let123536.hasOwnProperty((0))))))?(with_let123536[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(initial_state)):(with_let123536[(0)]));
var res123538 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.Comet,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),(3),new cljs.core.Keyword(null,"length","length",588987862),(16),new cljs.core.Keyword(null,"color","color",1011675173),(3182847),new cljs.core.Keyword(null,"size","size",1098693007),(10),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.99,new cljs.core.Keyword(null,"path","path",-188191168),(function (_,t){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_state,(function (p1__123533_SHARP_){
return my_updater(p1__123533_SHARP_,t);
}));

if(cljs.core.truth_(var_name)){
nextjournal.clerk.sci_viewer.clerk_eval((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","reset!","clojure.core/reset!",760298011,null),(new cljs.core.List(null,var_name,(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function demo$mathbox$Mass_$_rec(x){
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(demo$mathbox$Mass_$_rec,x);
} else {
return x;
}
}),cljs.core.deref(_BANG_state)),null,(1),null)),(2),null)),(3),null)));
} else {
}

var vec__123539 = (function (){var G__123542 = cljs.core.deref(_BANG_state);
return (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(G__123542) : render_fn.call(null,G__123542));
})();
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123539,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123539,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123539,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,z,y], null);
})], null)], null);
return res123538;
});
/**
 * Obviously these should be merged!
 */
demo.mathbox.DoubleMass = (function demo$mathbox$DoubleMass(p__123544){
var map__123545 = p__123544;
var map__123545__$1 = cljs.core.__destructure_map(map__123545);
var state__GT_xyz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123545__$1,new cljs.core.Keyword(null,"state->xyz","state->xyz",254907752));
var L = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123545__$1,new cljs.core.Keyword(null,"L","L",-1038307519));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123545__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806));
var render_fn = sicmutils.expression.compile.sci_eval(state__GT_xyz);
var state_deriv = sicmutils.expression.compile.sci_eval(L);
var my_updater = demo.mathbox.Lagrangian_updater(state_deriv,initial_state);
var with_let123546 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let123546","with-let123546",-659365959));
var temp__5757__auto___123616 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___123616 == null)){
} else {
var c__85371__auto___123617 = temp__5757__auto___123616;
if((with_let123546.generation === c__85371__auto___123617.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let123546.generation = c__85371__auto___123617.ratomGeneration);
}

var init123547 = (with_let123546.length === (0));
var _BANG_state = ((((init123547) || (cljs.core.not(with_let123546.hasOwnProperty((0))))))?(with_let123546[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(initial_state)):(with_let123546[(0)]));
var res123548 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Array,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"items","items",1031954938),(1),new cljs.core.Keyword(null,"width","width",-384071477),(2),new cljs.core.Keyword(null,"channels","channels",1132759174),(3),new cljs.core.Keyword(null,"history","history",-247395220),(16),new cljs.core.Keyword(null,"expr","expr",745722291),(function (emit,_,t){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_state,(function (p1__123543_SHARP_){
return my_updater(p1__123543_SHARP_,t);
}));

var vec__123549 = (function (){var G__123552 = cljs.core.deref(_BANG_state);
return (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(G__123552) : render_fn.call(null,G__123552));
})();
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123549,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123549,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123549,(2),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123549,(3),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123549,(4),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123549,(5),null);
(emit.cljs$core$IFn$_invoke$arity$3 ? emit.cljs$core$IFn$_invoke$arity$3(x1,z1,y1) : emit.call(null,x1,z1,y1));

return (emit.cljs$core$IFn$_invoke$arity$3 ? emit.cljs$core$IFn$_invoke$arity$3(x2,z2,y2) : emit.call(null,x2,z2,y2));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.Tail,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"length","length",588987862),(16),new cljs.core.Keyword(null,"color","color",1011675173),(3182847),new cljs.core.Keyword(null,"size","size",1098693007),(10),new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),(1)], null)], null)], null);
return res123548;
});
demo.mathbox.two_pi = ((2) * Math.PI);
demo.mathbox.Ellipse = (function demo$mathbox$Ellipse(p__123553){
var map__123554 = p__123553;
var map__123554__$1 = cljs.core.__destructure_map(map__123554);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123554__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123554__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123554__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Area,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),(64),new cljs.core.Keyword(null,"height","height",1025178622),(64),new cljs.core.Keyword(null,"rangeX","rangeX",1415483689),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),demo.mathbox.two_pi], null),new cljs.core.Keyword(null,"rangeY","rangeY",777743115),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),demo.mathbox.two_pi], null),new cljs.core.Keyword(null,"axes","axes",1970866440),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.Keyword(null,"expr","expr",745722291),(function (emit,theta,phi,_i,_j,_time){
var sin_theta = Math.sin(theta);
var cos_theta = Math.cos(theta);
var G__123555 = ((a * sin_theta) * Math.cos(phi));
var G__123556 = (c * cos_theta);
var G__123557 = ((b * sin_theta) * Math.sin(phi));
return (emit.cljs$core$IFn$_invoke$arity$3 ? emit.cljs$core$IFn$_invoke$arity$3(G__123555,G__123556,G__123557) : emit.call(null,G__123555,G__123556,G__123557));
}),new cljs.core.Keyword(null,"items","items",1031954938),(1),new cljs.core.Keyword(null,"channels","channels",1132759174),(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Surface,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shaded","shaded",561405058),true,new cljs.core.Keyword(null,"opacity","opacity",397153780),0.2,new cljs.core.Keyword(null,"lineX","lineX",-269253760),true,new cljs.core.Keyword(null,"lineY","lineY",-800534367),true,new cljs.core.Keyword(null,"points","points",-1486596883),"<",new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"width","width",-384071477),(1)], null)], null)], null);
});
demo.mathbox.sq = (function demo$mathbox$sq(x){
return (x * x);
});
demo.mathbox.normalize = (sicmutils.env.principal_value.cljs$core$IFn$_invoke$arity$1 ? sicmutils.env.principal_value.cljs$core$IFn$_invoke$arity$1(Math.PI) : sicmutils.env.principal_value.call(null,Math.PI));
demo.mathbox.m = (1);
demo.mathbox.g = 9.8;
demo.mathbox.l = (1);
demo.mathbox.V = (function demo$mathbox$V(theta){
return (((((-1) * demo.mathbox.m) * demo.mathbox.g) * demo.mathbox.l) * Math.cos(theta));
});
demo.mathbox.potential = demo.mathbox.V;
/**
 * For later, here's how to extend this.
 */
demo.mathbox.DoublePendulum = (function demo$mathbox$DoublePendulum(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Array,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(2),new cljs.core.Keyword(null,"channels","channels",1132759174),(2),new cljs.core.Keyword(null,"items","items",1031954938),(3),new cljs.core.Keyword(null,"expr","expr",745722291),(function (emit,_i,now){
(emit.cljs$core$IFn$_invoke$arity$2 ? emit.cljs$core$IFn$_invoke$arity$2((-1),(0)) : emit.call(null,(-1),(0)));

(emit.cljs$core$IFn$_invoke$arity$2 ? emit.cljs$core$IFn$_invoke$arity$2((0),(0)) : emit.call(null,(0),(0)));

var G__123558 = Math.sin(now);
var G__123559 = (- Math.cos(now));
return (emit.cljs$core$IFn$_invoke$arity$2 ? emit.cljs$core$IFn$_invoke$arity$2(G__123558,G__123559) : emit.call(null,G__123558,G__123559));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Vector,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"width","width",-384071477),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Slice,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Point,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(9474192),new cljs.core.Keyword(null,"size","size",1098693007),(4)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Slice,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Point,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"size","size",1098693007),(10)], null)], null)], null);
});
demo.mathbox.L = sicmutils.mechanics.lagrange.L_pendulum(9.8,(1),(1));
demo.mathbox.state_deriv = sicmutils.mechanics.lagrange.Lagrangian__GT_state_derivative.cljs$core$IFn$_invoke$arity$1(demo.mathbox.L);
demo.mathbox.Pendulum = (function demo$mathbox$Pendulum(_BANG_state){
var with_let123561 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let123561","with-let123561",1792391955));
var temp__5757__auto___123618 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___123618 == null)){
} else {
var c__85371__auto___123619 = temp__5757__auto___123618;
if((with_let123561.generation === c__85371__auto___123619.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let123561.generation = c__85371__auto___123619.ratomGeneration);
}

var init123562 = (with_let123561.length === (0));
var updater = ((((init123562) || (cljs.core.not(with_let123561.hasOwnProperty((0))))))?(with_let123561[(0)] = demo.mathbox.Lagrangian_updater.cljs$core$IFn$_invoke$arity$variadic(demo.mathbox.state_deriv,cljs.core.deref(_BANG_state),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"compile?","compile?",-826687650),true], 0))):(with_let123561[(0)]));
var res123563 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Array,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"channels","channels",1132759174),(2),new cljs.core.Keyword(null,"items","items",1031954938),(2),new cljs.core.Keyword(null,"expr","expr",745722291),(function (emit,_i,now){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_state,(function (p1__123560_SHARP_){
return (updater.cljs$core$IFn$_invoke$arity$2 ? updater.cljs$core$IFn$_invoke$arity$2(p1__123560_SHARP_,now) : updater.call(null,p1__123560_SHARP_,now));
}));

var vec__123564 = cljs.core.deref(_BANG_state);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123564,(0),null);
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123564,(1),null);
var theta__$1 = (demo.mathbox.normalize.cljs$core$IFn$_invoke$arity$1 ? demo.mathbox.normalize.cljs$core$IFn$_invoke$arity$1(theta) : demo.mathbox.normalize.call(null,theta));
(emit.cljs$core$IFn$_invoke$arity$2 ? emit.cljs$core$IFn$_invoke$arity$2((0),(0)) : emit.call(null,(0),(0)));

var G__123567 = Math.sin(theta__$1);
var G__123568 = (- Math.cos(theta__$1));
return (emit.cljs$core$IFn$_invoke$arity$2 ? emit.cljs$core$IFn$_invoke$arity$2(G__123567,G__123568) : emit.call(null,G__123567,G__123568));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Vector,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"width","width",-384071477),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Slice,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Point,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(9474192),new cljs.core.Keyword(null,"size","size",1098693007),(4)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Slice,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Point,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"size","size",1098693007),(10)], null)], null)], null);
return res123563;
});
demo.mathbox.WellAxes = (function demo$mathbox$WellAxes(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Axis,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"axis","axis",-1215390822),"x",new cljs.core.Keyword(null,"color","color",1011675173),(16777215)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Scale,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"axis","axis",-1215390822),"x",new cljs.core.Keyword(null,"divide","divide",2108946657),(5),new cljs.core.Keyword(null,"unit","unit",375175175),Math.PI,new cljs.core.Keyword(null,"base","base",185279322),(2),new cljs.core.Keyword(null,"start","start",-355208981),true,new cljs.core.Keyword(null,"end","end",-268185958),true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Format,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expr","expr",745722291),(function (x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(demo.mathbox.format_number((x / Math.PI))),"\u03C0"].join('');
}),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Helvetica"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Label,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"background","background",-863952629),(0),new cljs.core.Keyword(null,"depth","depth",1768663640),0.5,new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),(1),new cljs.core.Keyword(null,"zOrder","zOrder",444084817),(5),new cljs.core.Keyword(null,"size","size",1098693007),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Axis,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"axis","axis",-1215390822),"y",new cljs.core.Keyword(null,"color","color",1011675173),(16777215)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Scale,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"axis","axis",-1215390822),"y",new cljs.core.Keyword(null,"divide","divide",2108946657),(5),new cljs.core.Keyword(null,"unit","unit",375175175),(1),new cljs.core.Keyword(null,"base","base",185279322),(10),new cljs.core.Keyword(null,"start","start",-355208981),true,new cljs.core.Keyword(null,"end","end",-268185958),true,new cljs.core.Keyword(null,"zero","zero",-858964576),false], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Format,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expr","expr",745722291),demo.mathbox.format_number,new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Helvetica"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Label,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"background","background",-863952629),(0),new cljs.core.Keyword(null,"depth","depth",1768663640),0.5,new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),(1),new cljs.core.Keyword(null,"zOrder","zOrder",444084817),(5),new cljs.core.Keyword(null,"size","size",1098693007),(10),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(0)], null)], null)], null)], null);
});
demo.mathbox.PotentialLine = (function demo$mathbox$PotentialLine(V){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Interval,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(128),new cljs.core.Keyword(null,"channels","channels",1132759174),(2),new cljs.core.Keyword(null,"live","live",-1610148039),false,new cljs.core.Keyword(null,"expr","expr",745722291),(function (emit,theta){
var G__123569 = theta;
var G__123570 = (V.cljs$core$IFn$_invoke$arity$1 ? V.cljs$core$IFn$_invoke$arity$1(theta) : V.call(null,theta));
return (emit.cljs$core$IFn$_invoke$arity$2 ? emit.cljs$core$IFn$_invoke$arity$2(G__123569,G__123570) : emit.call(null,G__123569,G__123570));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Line,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(3182847)], null)], null)], null);
});
demo.mathbox.Well = (function demo$mathbox$Well(_BANG_state){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Grid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),(8421504),new cljs.core.Keyword(null,"unitX","unitX",-273772766),Math.PI,new cljs.core.Keyword(null,"baseX","baseX",619021388),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.WellAxes], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.PotentialLine,demo.mathbox.V], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.Comet,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),(2),new cljs.core.Keyword(null,"length","length",588987862),(16),new cljs.core.Keyword(null,"color","color",1011675173),(10539263),new cljs.core.Keyword(null,"size","size",1098693007),(5),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.99,new cljs.core.Keyword(null,"path","path",-188191168),(function (_,___$1){
var vec__123571 = cljs.core.deref(_BANG_state);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123571,(0),null);
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123571,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [theta,demo.mathbox.V(theta)], null);
})], null)], null)], null);
});
demo.mathbox.PhaseAxes = (function demo$mathbox$PhaseAxes(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Axis,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"axis","axis",-1215390822),"x",new cljs.core.Keyword(null,"color","color",1011675173),(16777215)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Scale,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"axis","axis",-1215390822),"x",new cljs.core.Keyword(null,"divide","divide",2108946657),(5),new cljs.core.Keyword(null,"unit","unit",375175175),(1),new cljs.core.Keyword(null,"base","base",185279322),(10),new cljs.core.Keyword(null,"start","start",-355208981),true,new cljs.core.Keyword(null,"end","end",-268185958),true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Format,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expr","expr",745722291),demo.mathbox.format_number,new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Helvetica"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Label,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"background","background",-863952629),(0),new cljs.core.Keyword(null,"depth","depth",1768663640),0.5,new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),(1),new cljs.core.Keyword(null,"zOrder","zOrder",444084817),(5),new cljs.core.Keyword(null,"size","size",1098693007),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Axis,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"axis","axis",-1215390822),"y",new cljs.core.Keyword(null,"color","color",1011675173),(16777215)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Scale,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"axis","axis",-1215390822),"y",new cljs.core.Keyword(null,"divide","divide",2108946657),(5),new cljs.core.Keyword(null,"unit","unit",375175175),(1),new cljs.core.Keyword(null,"base","base",185279322),(10),new cljs.core.Keyword(null,"start","start",-355208981),true,new cljs.core.Keyword(null,"end","end",-268185958),true,new cljs.core.Keyword(null,"zero","zero",-858964576),false], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Format,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expr","expr",745722291),demo.mathbox.format_number,new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Helvetica"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Label,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"background","background",-863952629),(0),new cljs.core.Keyword(null,"depth","depth",1768663640),0.5,new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),(1),new cljs.core.Keyword(null,"zOrder","zOrder",444084817),(5),new cljs.core.Keyword(null,"size","size",1098693007),(10),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(0)], null)], null)], null)], null);
});
demo.mathbox.PhaseVectors = (function demo$mathbox$PhaseVectors(){
var with_let123574 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let123574","with-let123574",-1199149555));
var temp__5757__auto___123620 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___123620 == null)){
} else {
var c__85371__auto___123621 = temp__5757__auto___123620;
if((with_let123574.generation === c__85371__auto___123621.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let123574.generation = c__85371__auto___123621.ratomGeneration);
}

var init123575 = (with_let123574.length === (0));
var updater = ((((init123575) || (cljs.core.not(with_let123574.hasOwnProperty((0))))))?(with_let123574[(0)] = demo.mathbox.Lagrangian_collector.cljs$core$IFn$_invoke$arity$variadic(demo.mathbox.state_deriv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"compile?","compile?",-826687650),true], 0))):(with_let123574[(0)]));
var res123576 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Area,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"channels","channels",1132759174),(2),new cljs.core.Keyword(null,"items","items",1031954938),(8),new cljs.core.Keyword(null,"centeredX","centeredX",-638621558),true,new cljs.core.Keyword(null,"centeredY","centeredY",-477741349),true,new cljs.core.Keyword(null,"live","live",-1610148039),false,new cljs.core.Keyword(null,"expr","expr",745722291),(function (emit,q,p){
var dt = 0.015;
var seq__123577 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2((8),(function (){var G__123590 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),q,p], null);
var G__123591 = (dt * (8));
var G__123592 = dt;
return (updater.cljs$core$IFn$_invoke$arity$3 ? updater.cljs$core$IFn$_invoke$arity$3(G__123590,G__123591,G__123592) : updater.call(null,G__123590,G__123591,G__123592));
})()));
var chunk__123578 = null;
var count__123579 = (0);
var i__123580 = (0);
while(true){
if((i__123580 < count__123579)){
var vec__123593 = chunk__123578.cljs$core$IIndexed$_nth$arity$2(null,i__123580);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123593,(0),null);
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123593,(1),null);
var thetadot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123593,(2),null);
(emit.cljs$core$IFn$_invoke$arity$2 ? emit.cljs$core$IFn$_invoke$arity$2(theta,thetadot) : emit.call(null,theta,thetadot));


var G__123622 = seq__123577;
var G__123623 = chunk__123578;
var G__123624 = count__123579;
var G__123625 = (i__123580 + (1));
seq__123577 = G__123622;
chunk__123578 = G__123623;
count__123579 = G__123624;
i__123580 = G__123625;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__123577);
if(temp__5753__auto__){
var seq__123577__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__123577__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__123577__$1);
var G__123626 = cljs.core.chunk_rest(seq__123577__$1);
var G__123627 = c__4679__auto__;
var G__123628 = cljs.core.count(c__4679__auto__);
var G__123629 = (0);
seq__123577 = G__123626;
chunk__123578 = G__123627;
count__123579 = G__123628;
i__123580 = G__123629;
continue;
} else {
var vec__123596 = cljs.core.first(seq__123577__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123596,(0),null);
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123596,(1),null);
var thetadot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123596,(2),null);
(emit.cljs$core$IFn$_invoke$arity$2 ? emit.cljs$core$IFn$_invoke$arity$2(theta,thetadot) : emit.call(null,theta,thetadot));


var G__123630 = cljs.core.next(seq__123577__$1);
var G__123631 = null;
var G__123632 = (0);
var G__123633 = (0);
seq__123577 = G__123630;
chunk__123578 = G__123631;
count__123579 = G__123632;
i__123580 = G__123633;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Vector,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),(3182847),new cljs.core.Keyword(null,"size","size",1098693007),(5),new cljs.core.Keyword(null,"end","end",-268185958),true], null)], null)], null);
return res123576;
});
demo.mathbox.Phase = (function demo$mathbox$Phase(_BANG_state){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Grid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(8421504)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.PhaseAxes], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.PhaseVectors], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.Comet,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),(2),new cljs.core.Keyword(null,"length","length",588987862),(16),new cljs.core.Keyword(null,"color","color",1011675173),(10539263),new cljs.core.Keyword(null,"size","size",1098693007),(10),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.99,new cljs.core.Keyword(null,"path","path",-188191168),(function (_,___$1){
var vec__123599 = cljs.core.deref(_BANG_state);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123599,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123599,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123599,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,p], null);
})], null)], null)], null);
});
demo.mathbox.Hamilton = (function demo$mathbox$Hamilton(){
var with_let123602 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let123602","with-let123602",-2043556020));
var temp__5757__auto___123634 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___123634 == null)){
} else {
var c__85371__auto___123635 = temp__5757__auto___123634;
if((with_let123602.generation === c__85371__auto___123635.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let123602.generation = c__85371__auto___123635.ratomGeneration);
}

var init123603 = (with_let123602.length === (0));
var _BANG_state = ((((init123603) || (cljs.core.not(with_let123602.hasOwnProperty((0))))))?(with_let123602[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(0)], null))):(with_let123602[(0)]));
var res123604 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.Mathbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"600px",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["core","controls","cursor","stats"], null)], null),new cljs.core.Keyword(null,"init","init",-1875481434),(function (mb){
var three = mb.three;
var renderer = three.renderer;
renderer.setClearColor((new module$node_modules$three$src$math$Color.Color((0))),1.0);

return mb.camera(({"proxy": true, "position": [(0),(0),(20)], "fov": (90)}));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Layer,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Unit,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),(720),new cljs.core.Keyword(null,"focus","focus",234677911),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Cartesian,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"pendulum",new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.25,0.25], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,0.35,(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.Pendulum,_BANG_state], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Cartesian,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"well",new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- Math.PI),(Math.PI - 1.0E-5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-10),(10)], null)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.48,0.25], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,-0.25,(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.Well,_BANG_state], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Cartesian,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"phase",new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-4),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(8)], null)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.6,0.6], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.6,(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.Phase,_BANG_state], null)], null)], null)], null)], null);
return res123604;
});

//# sourceMappingURL=demo.mathbox.js.map
