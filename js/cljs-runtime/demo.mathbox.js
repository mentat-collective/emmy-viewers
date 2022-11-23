goog.provide('demo.mathbox');
var module$node_modules$dat_DOT_gui$build$dat_gui=shadow.js.require("module$node_modules$dat_DOT_gui$build$dat_gui", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$three$src$math$Color=shadow.js.require("module$node_modules$three$src$math$Color", {});
demo.mathbox.format_number = (function demo$mathbox$format_number(x){
return x.toFixed((2)).replace(/\.0+$/,"");
});
demo.mathbox.Cartesian = (function demo$mathbox$Cartesian(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82103 = arguments.length;
var i__4865__auto___82104 = (0);
while(true){
if((i__4865__auto___82104 < len__4864__auto___82103)){
args__4870__auto__.push((arguments[i__4865__auto___82104]));

var G__82105 = (i__4865__auto___82104 + (1));
i__4865__auto___82104 = G__82105;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return demo.mathbox.Cartesian.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(demo.mathbox.Cartesian.cljs$core$IFn$_invoke$arity$variadic = (function (opts,children){
var opts__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"range","range",1639692286),(function (p__81999){
var map__82000 = p__81999;
var map__82000__$1 = cljs.core.__destructure_map(map__82000);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82000__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82000__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82000__$1,new cljs.core.Keyword(null,"z","z",-789527183));
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
(demo.mathbox.Cartesian.cljs$lang$applyTo = (function (seq81997){
var G__81998 = cljs.core.first(seq81997);
var seq81997__$1 = cljs.core.next(seq81997);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81998,seq81997__$1);
}));

/**
 * Like the original, but allows for a 'dimensions' key.
 */
demo.mathbox.Volume = (function demo$mathbox$Volume(p__82001){
var map__82002 = p__82001;
var map__82002__$1 = cljs.core.__destructure_map(map__82002);
var opts = map__82002__$1;
var dimensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82002__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var vec__82003 = dimensions;
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82003,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82003,(1),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82003,(2),null);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097)),new cljs.core.Keyword(null,"width","width",-384071477),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"depth","depth",1768663640),depth], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Volume,opts__$1], null);
});
demo.mathbox.ColorCube = (function demo$mathbox$ColorCube(p__82006){
var map__82007 = p__82006;
var map__82007__$1 = cljs.core.__destructure_map(map__82007);
var dimensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82007__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82007__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82007__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.Volume,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),dimensions,new cljs.core.Keyword(null,"items","items",1031954938),(1),new cljs.core.Keyword(null,"channels","channels",1132759174),(4),new cljs.core.Keyword(null,"live","live",-1610148039),false,new cljs.core.Keyword(null,"expr","expr",745722291),(function (emit,x,y,z){
return (emit.cljs$core$IFn$_invoke$arity$4 ? emit.cljs$core$IFn$_invoke$arity$4(x,y,z,opacity) : emit.call(null,x,y,z,opacity));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Point,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"points","points",-1486596883),"<",new cljs.core.Keyword(null,"colors","colors",1157174732),"<",new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"size","size",1098693007),size], null)], null)], null);
});
demo.mathbox.Function1 = (function demo$mathbox$Function1(p__82008){
var map__82009 = p__82008;
var map__82009__$1 = cljs.core.__destructure_map(map__82009);
var samples = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82009__$1,new cljs.core.Keyword(null,"samples","samples",635504833),(256));
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82009__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var f_SINGLEQUOTE_ = sicmutils.expression.compile.sci_eval(f);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Interval,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),samples,new cljs.core.Keyword(null,"channels","channels",1132759174),(2),new cljs.core.Keyword(null,"expr","expr",745722291),(function (emit,x,_,time){
var G__82010 = x;
var G__82011 = (f_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? f_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(x,time) : f_SINGLEQUOTE_.call(null,x,time));
return (emit.cljs$core$IFn$_invoke$arity$2 ? emit.cljs$core$IFn$_invoke$arity$2(G__82010,G__82011) : emit.call(null,G__82010,G__82011));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Line,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(3182847),new cljs.core.Keyword(null,"width","width",-384071477),(4)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Point,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(3182847),new cljs.core.Keyword(null,"size","size",1098693007),(8)], null)], null)], null);
});
demo.mathbox.state_deriv_STAR_ = (function demo$mathbox$state_deriv_STAR_(g,m,l){
return sicmutils.mechanics.lagrange.Lagrangian__GT_state_derivative.cljs$core$IFn$_invoke$arity$1(sicmutils.mechanics.lagrange.L_pendulum(g,m,l));
});
/**
 * hardcoded at first for this use case.
 */
demo.mathbox.Lagrangian_updater = (function demo$mathbox$Lagrangian_updater(var_args){
var G__82013 = arguments.length;
switch (G__82013) {
case 2:
return demo.mathbox.Lagrangian_updater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return demo.mathbox.Lagrangian_updater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(demo.mathbox.Lagrangian_updater.cljs$core$IFn$_invoke$arity$2 = (function (state_derivative,initial_state){
return demo.mathbox.Lagrangian_updater.cljs$core$IFn$_invoke$arity$3(state_derivative,initial_state,cljs.core.PersistentArrayMap.EMPTY);
}));

(demo.mathbox.Lagrangian_updater.cljs$core$IFn$_invoke$arity$3 = (function (state_derivative,initial_state,p__82014){
var map__82015 = p__82014;
var map__82015__$1 = cljs.core.__destructure_map(map__82015);
var compile_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82015__$1,new cljs.core.Keyword(null,"compile?","compile?",-826687650),false);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82015__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var map__82016 = sicmutils.numerical.ode.integration_opts(state_derivative,parameters,initial_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"epsilon","epsilon",-730158570),1.0E-6,new cljs.core.Keyword(null,"compile?","compile?",-826687650),compile_QMARK_], null));
var map__82016__$1 = cljs.core.__destructure_map(map__82016);
var integrator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82016__$1,new cljs.core.Keyword(null,"integrator","integrator",1554489822));
var equations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82016__$1,new cljs.core.Keyword(null,"equations","equations",1884238648));
return (function (p__82017,t2){
var vec__82018 = p__82017;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82018,(0),null);
var state = vec__82018;
var s = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(state));
var output = integrator.solve(equations,t,s,t2,null);
return sicmutils.structure.unflatten.cljs$core$IFn$_invoke$arity$2(output.y,state);
});
}));

(demo.mathbox.Lagrangian_updater.cljs$lang$maxFixedArity = 3);

/**
 * hardcoded at first for this use case.
 */
demo.mathbox.Lagrangian_collector = (function demo$mathbox$Lagrangian_collector(state_derivative,initial_state,p__82021){
var map__82022 = p__82021;
var map__82022__$1 = cljs.core.__destructure_map(map__82022);
var compile_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82022__$1,new cljs.core.Keyword(null,"compile?","compile?",-826687650),false);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82022__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var map__82023 = sicmutils.numerical.ode.integration_opts(state_derivative,parameters,initial_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"epsilon","epsilon",-730158570),1.0E-6,new cljs.core.Keyword(null,"compile?","compile?",-826687650),compile_QMARK_], null));
var map__82023__$1 = cljs.core.__destructure_map(map__82023);
var integrator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82023__$1,new cljs.core.Keyword(null,"integrator","integrator",1554489822));
var equations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82023__$1,new cljs.core.Keyword(null,"equations","equations",1884238648));
(integrator.denseOutput = true);

return (function (state,t2,step_size,emit){
return integrator.solve(equations,(0),state,t2,integrator.grid(step_size,(function (_,y){
var G__82024 = (y[(1)]);
var G__82025 = (y[(2)]);
return (emit.cljs$core$IFn$_invoke$arity$2 ? emit.cljs$core$IFn$_invoke$arity$2(G__82024,G__82025) : emit.call(null,G__82024,G__82025));
})));
});
});
demo.mathbox.Tail = (function demo$mathbox$Tail(p__82026){
var map__82027 = p__82026;
var map__82027__$1 = cljs.core.__destructure_map(map__82027);
var opts = map__82027__$1;
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82027__$1,new cljs.core.Keyword(null,"length","length",588987862));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Spread,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),-0.02], null),new cljs.core.Keyword(null,"alignHeight","alignHeight",301268438),(-1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Array,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),length,new cljs.core.Keyword(null,"channels","channels",1132759174),(4),new cljs.core.Keyword(null,"expr","expr",745722291),(function (emit,i){
var G__82028 = (1);
var G__82029 = (1);
var G__82030 = (1);
var G__82031 = ((1) - (i / (16)));
return (emit.cljs$core$IFn$_invoke$arity$4 ? emit.cljs$core$IFn$_invoke$arity$4(G__82028,G__82029,G__82030,G__82031) : emit.call(null,G__82028,G__82029,G__82030,G__82031));
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
demo.mathbox.Comet = (function demo$mathbox$Comet(p__82032){
var map__82033 = p__82032;
var map__82033__$1 = cljs.core.__destructure_map(map__82033);
var opts = map__82033__$1;
var dimensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82033__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82033__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82033__$1,new cljs.core.Keyword(null,"length","length",588987862));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Array,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"history","history",-247395220),length,new cljs.core.Keyword(null,"channels","channels",1132759174),dimensions,new cljs.core.Keyword(null,"expr","expr",745722291),path], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.Tail,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path","path",-188191168)], 0))], null)], null);
});
demo.mathbox.Mass = (function demo$mathbox$Mass(p__82035){
var map__82036 = p__82035;
var map__82036__$1 = cljs.core.__destructure_map(map__82036);
var state__GT_xyz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82036__$1,new cljs.core.Keyword(null,"state->xyz","state->xyz",254907752));
var L = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82036__$1,new cljs.core.Keyword(null,"L","L",-1038307519));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82036__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806));
var var_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82036__$1,new cljs.core.Keyword(null,"var-name","var-name",-574747624));
var render_fn = sicmutils.expression.compile.sci_eval(state__GT_xyz);
var state_deriv = sicmutils.expression.compile.sci_eval(L);
var my_updater = demo.mathbox.Lagrangian_updater.cljs$core$IFn$_invoke$arity$2(state_deriv,initial_state);
var with_let82037 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let82037","with-let82037",1491880076));
var temp__5757__auto___82107 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___82107 == null)){
} else {
var c__74980__auto___82108 = temp__5757__auto___82107;
if((with_let82037.generation === c__74980__auto___82108.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let82037.generation = c__74980__auto___82108.ratomGeneration);
}

var init82038 = (with_let82037.length === (0));
var _BANG_state = ((((init82038) || (cljs.core.not(with_let82037.hasOwnProperty((0))))))?(with_let82037[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(initial_state)):(with_let82037[(0)]));
var res82039 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.Comet,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),(3),new cljs.core.Keyword(null,"length","length",588987862),(16),new cljs.core.Keyword(null,"color","color",1011675173),(3182847),new cljs.core.Keyword(null,"size","size",1098693007),(10),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.99,new cljs.core.Keyword(null,"path","path",-188191168),(function (emit,_,t){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_state,(function (p1__82034_SHARP_){
return (my_updater.cljs$core$IFn$_invoke$arity$2 ? my_updater.cljs$core$IFn$_invoke$arity$2(p1__82034_SHARP_,t) : my_updater.call(null,p1__82034_SHARP_,t));
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

var vec__82040 = (function (){var G__82043 = cljs.core.deref(_BANG_state);
return (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(G__82043) : render_fn.call(null,G__82043));
})();
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82040,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82040,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82040,(2),null);
return (emit.cljs$core$IFn$_invoke$arity$3 ? emit.cljs$core$IFn$_invoke$arity$3(x,z,y) : emit.call(null,x,z,y));
})], null)], null);
return res82039;
});
/**
 * Obviously these should be merged!
 */
demo.mathbox.DoubleMass = (function demo$mathbox$DoubleMass(p__82045){
var map__82046 = p__82045;
var map__82046__$1 = cljs.core.__destructure_map(map__82046);
var state__GT_xyz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82046__$1,new cljs.core.Keyword(null,"state->xyz","state->xyz",254907752));
var L = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82046__$1,new cljs.core.Keyword(null,"L","L",-1038307519));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82046__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806));
var render_fn = sicmutils.expression.compile.sci_eval(state__GT_xyz);
var state_deriv = sicmutils.expression.compile.sci_eval(L);
var my_updater = demo.mathbox.Lagrangian_updater.cljs$core$IFn$_invoke$arity$2(state_deriv,initial_state);
var with_let82047 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let82047","with-let82047",-976930883));
var temp__5757__auto___82109 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___82109 == null)){
} else {
var c__74980__auto___82110 = temp__5757__auto___82109;
if((with_let82047.generation === c__74980__auto___82110.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let82047.generation = c__74980__auto___82110.ratomGeneration);
}

var init82048 = (with_let82047.length === (0));
var _BANG_state = ((((init82048) || (cljs.core.not(with_let82047.hasOwnProperty((0))))))?(with_let82047[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(initial_state)):(with_let82047[(0)]));
var res82049 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Array,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"items","items",1031954938),(1),new cljs.core.Keyword(null,"width","width",-384071477),(2),new cljs.core.Keyword(null,"channels","channels",1132759174),(3),new cljs.core.Keyword(null,"history","history",-247395220),(16),new cljs.core.Keyword(null,"expr","expr",745722291),(function (emit,_,t){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_state,(function (p1__82044_SHARP_){
return (my_updater.cljs$core$IFn$_invoke$arity$2 ? my_updater.cljs$core$IFn$_invoke$arity$2(p1__82044_SHARP_,t) : my_updater.call(null,p1__82044_SHARP_,t));
}));

var vec__82050 = (function (){var G__82053 = cljs.core.deref(_BANG_state);
return (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(G__82053) : render_fn.call(null,G__82053));
})();
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82050,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82050,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82050,(2),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82050,(3),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82050,(4),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82050,(5),null);
(emit.cljs$core$IFn$_invoke$arity$3 ? emit.cljs$core$IFn$_invoke$arity$3(x1,z1,y1) : emit.call(null,x1,z1,y1));

return (emit.cljs$core$IFn$_invoke$arity$3 ? emit.cljs$core$IFn$_invoke$arity$3(x2,z2,y2) : emit.call(null,x2,z2,y2));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.Tail,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"length","length",588987862),(16),new cljs.core.Keyword(null,"color","color",1011675173),(3182847),new cljs.core.Keyword(null,"size","size",1098693007),(10),new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),(1)], null)], null)], null);
return res82049;
});
demo.mathbox.two_pi = ((2) * Math.PI);
demo.mathbox.Ellipse = (function demo$mathbox$Ellipse(p__82054){
var map__82055 = p__82054;
var map__82055__$1 = cljs.core.__destructure_map(map__82055);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82055__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82055__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82055__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Area,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),(64),new cljs.core.Keyword(null,"height","height",1025178622),(64),new cljs.core.Keyword(null,"rangeX","rangeX",1415483689),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),demo.mathbox.two_pi], null),new cljs.core.Keyword(null,"rangeY","rangeY",777743115),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),demo.mathbox.two_pi], null),new cljs.core.Keyword(null,"axes","axes",1970866440),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.Keyword(null,"expr","expr",745722291),(function (emit,theta,phi,_i,_j,_time){
var sin_theta = Math.sin(theta);
var cos_theta = Math.cos(theta);
var G__82056 = ((a * sin_theta) * Math.cos(phi));
var G__82057 = (c * cos_theta);
var G__82058 = ((b * sin_theta) * Math.sin(phi));
return (emit.cljs$core$IFn$_invoke$arity$3 ? emit.cljs$core$IFn$_invoke$arity$3(G__82056,G__82057,G__82058) : emit.call(null,G__82056,G__82057,G__82058));
}),new cljs.core.Keyword(null,"items","items",1031954938),(1),new cljs.core.Keyword(null,"channels","channels",1132759174),(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Surface,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shaded","shaded",561405058),true,new cljs.core.Keyword(null,"opacity","opacity",397153780),0.2,new cljs.core.Keyword(null,"lineX","lineX",-269253760),true,new cljs.core.Keyword(null,"lineY","lineY",-800534367),true,new cljs.core.Keyword(null,"points","points",-1486596883),"<",new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"width","width",-384071477),(1)], null)], null)], null);
});
demo.mathbox.sq = (function demo$mathbox$sq(x){
return (x * x);
});
demo.mathbox.normalize = (sicmutils.env.principal_value.cljs$core$IFn$_invoke$arity$1 ? sicmutils.env.principal_value.cljs$core$IFn$_invoke$arity$1(Math.PI) : sicmutils.env.principal_value.call(null,Math.PI));
demo.mathbox.V = (function demo$mathbox$V(p__82059,theta){
var vec__82060 = p__82059;
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82060,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82060,(1),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82060,(2),null);
return (((((-1) * m) * g) * l) * Math.cos(theta));
});
/**
 * For later, here's how to extend this.
 */
demo.mathbox.DoublePendulum = (function demo$mathbox$DoublePendulum(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Array,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(2),new cljs.core.Keyword(null,"channels","channels",1132759174),(2),new cljs.core.Keyword(null,"items","items",1031954938),(3),new cljs.core.Keyword(null,"expr","expr",745722291),(function (emit,_i,now){
(emit.cljs$core$IFn$_invoke$arity$2 ? emit.cljs$core$IFn$_invoke$arity$2((-1),(0)) : emit.call(null,(-1),(0)));

(emit.cljs$core$IFn$_invoke$arity$2 ? emit.cljs$core$IFn$_invoke$arity$2((0),(0)) : emit.call(null,(0),(0)));

var G__82063 = Math.sin(now);
var G__82064 = (- Math.cos(now));
return (emit.cljs$core$IFn$_invoke$arity$2 ? emit.cljs$core$IFn$_invoke$arity$2(G__82063,G__82064) : emit.call(null,G__82063,G__82064));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Vector,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"width","width",-384071477),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Slice,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Point,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(9474192),new cljs.core.Keyword(null,"size","size",1098693007),(4)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Slice,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Point,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"size","size",1098693007),(10)], null)], null)], null);
});
/**
 * Takes a component and passes along a simulator...
 */
demo.mathbox.WithSimulator2_STAR_ = (function demo$mathbox$WithSimulator2_STAR_(p__82065,component){
var map__82066 = p__82065;
var map__82066__$1 = cljs.core.__destructure_map(map__82066);
var opts = map__82066__$1;
var state_derivative = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82066__$1,new cljs.core.Keyword(null,"state-derivative","state-derivative",1201180045));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82066__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82066__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var _BANG_p = module$node_modules$react$index.useMemo((function (){
if(cljs.core.truth_(parameters)){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,parameters));
} else {
return null;
}
}),[]);
var simulate = module$node_modules$react$index.useMemo((function (){
return demo.mathbox.Lagrangian_updater.cljs$core$IFn$_invoke$arity$3(state_derivative,initial_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"compile?","compile?",-826687650),true,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),_BANG_p], null));
}),[state_derivative]);
module$node_modules$react$index.useEffect((function demo$mathbox$WithSimulator2_STAR__$_mount(){
return cljs.core.reset_BANG_(_BANG_p,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,parameters));
}),[parameters]);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"state-derivative","state-derivative",1201180045),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806)], 0)),new cljs.core.Keyword(null,"simulate","simulate",-486863853),simulate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parameters","parameters",-1229919748),_BANG_p], 0))], null);
});
demo.mathbox.InnerP = (function demo$mathbox$InnerP(p__82068){
var map__82069 = p__82068;
var map__82069__$1 = cljs.core.__destructure_map(map__82069);
var opts = map__82069__$1;
var _BANG_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82069__$1,new cljs.core.Keyword(null,"!state","!state",1311412932));
var simulate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82069__$1,new cljs.core.Keyword(null,"simulate","simulate",-486863853));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82069__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Array,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"channels","channels",1132759174),(2),new cljs.core.Keyword(null,"items","items",1031954938),(2),new cljs.core.Keyword(null,"expr","expr",745722291),(function (emit,_i,now){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_state,(function (p1__82067_SHARP_){
var new_state = (simulate.cljs$core$IFn$_invoke$arity$2 ? simulate.cljs$core$IFn$_invoke$arity$2(p1__82067_SHARP_,now) : simulate.call(null,p1__82067_SHARP_,now));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(new_state,(1),demo.mathbox.normalize);
}));

var l = (cljs.core.deref(parameters)[(2)]);
var vec__82070 = cljs.core.deref(_BANG_state);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82070,(0),null);
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82070,(1),null);
(emit.cljs$core$IFn$_invoke$arity$2 ? emit.cljs$core$IFn$_invoke$arity$2((0),(0)) : emit.call(null,(0),(0)));

var G__82073 = (l * Math.sin(theta));
var G__82074 = (l * (- Math.cos(theta)));
return (emit.cljs$core$IFn$_invoke$arity$2 ? emit.cljs$core$IFn$_invoke$arity$2(G__82073,G__82074) : emit.call(null,G__82073,G__82074));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Vector,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"width","width",-384071477),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Slice,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Point,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(9474192),new cljs.core.Keyword(null,"size","size",1098693007),(4)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Slice,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Point,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"size","size",1098693007),(10)], null)], null)], null);
});
demo.mathbox.Pendulum = (function demo$mathbox$Pendulum(_BANG_state,_BANG_params){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),demo.mathbox.WithSimulator2_STAR_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state-derivative","state-derivative",1201180045),demo.mathbox.state_deriv_STAR_,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.deref(_BANG_state),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),_BANG_params,new cljs.core.Keyword(null,"!state","!state",1311412932),_BANG_state], null),demo.mathbox.InnerP], null);
});
demo.mathbox.WellAxes = (function demo$mathbox$WellAxes(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Axis,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"axis","axis",-1215390822),"x",new cljs.core.Keyword(null,"color","color",1011675173),(16777215)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Scale,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"axis","axis",-1215390822),"x",new cljs.core.Keyword(null,"divide","divide",2108946657),(5),new cljs.core.Keyword(null,"unit","unit",375175175),Math.PI,new cljs.core.Keyword(null,"base","base",185279322),(2),new cljs.core.Keyword(null,"start","start",-355208981),true,new cljs.core.Keyword(null,"end","end",-268185958),true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Format,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expr","expr",745722291),(function (x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(demo.mathbox.format_number((x / Math.PI))),"\u03C0"].join('');
}),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Helvetica"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Label,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"background","background",-863952629),(0),new cljs.core.Keyword(null,"depth","depth",1768663640),0.5,new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),(1),new cljs.core.Keyword(null,"zOrder","zOrder",444084817),(5),new cljs.core.Keyword(null,"size","size",1098693007),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Axis,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"axis","axis",-1215390822),"y",new cljs.core.Keyword(null,"color","color",1011675173),(16777215)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Scale,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"axis","axis",-1215390822),"y",new cljs.core.Keyword(null,"divide","divide",2108946657),(5),new cljs.core.Keyword(null,"unit","unit",375175175),(1),new cljs.core.Keyword(null,"base","base",185279322),(10),new cljs.core.Keyword(null,"start","start",-355208981),true,new cljs.core.Keyword(null,"end","end",-268185958),true,new cljs.core.Keyword(null,"zero","zero",-858964576),false], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Format,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expr","expr",745722291),demo.mathbox.format_number,new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Helvetica"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Label,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"background","background",-863952629),(0),new cljs.core.Keyword(null,"depth","depth",1768663640),0.5,new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),(1),new cljs.core.Keyword(null,"zOrder","zOrder",444084817),(5),new cljs.core.Keyword(null,"size","size",1098693007),(10),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(0)], null)], null)], null)], null);
});
demo.mathbox.PotentialLine = (function demo$mathbox$PotentialLine(V,_BANG_params){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Interval,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(128),new cljs.core.Keyword(null,"channels","channels",1132759174),(2),new cljs.core.Keyword(null,"live","live",-1610148039),true,new cljs.core.Keyword(null,"expr","expr",745722291),(function (emit,theta){
var G__82075 = theta;
var G__82076 = (function (){var G__82077 = cljs.core.deref(_BANG_params);
var G__82078 = theta;
return (V.cljs$core$IFn$_invoke$arity$2 ? V.cljs$core$IFn$_invoke$arity$2(G__82077,G__82078) : V.call(null,G__82077,G__82078));
})();
return (emit.cljs$core$IFn$_invoke$arity$2 ? emit.cljs$core$IFn$_invoke$arity$2(G__82075,G__82076) : emit.call(null,G__82075,G__82076));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Line,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(3182847)], null)], null)], null);
});
demo.mathbox.Well = (function demo$mathbox$Well(_BANG_state,_BANG_params){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Grid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),(8421504),new cljs.core.Keyword(null,"unitX","unitX",-273772766),Math.PI,new cljs.core.Keyword(null,"baseX","baseX",619021388),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.WellAxes], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.PotentialLine,demo.mathbox.V,_BANG_params], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.Comet,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),(2),new cljs.core.Keyword(null,"length","length",588987862),(16),new cljs.core.Keyword(null,"color","color",1011675173),(10539263),new cljs.core.Keyword(null,"size","size",1098693007),(5),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.99,new cljs.core.Keyword(null,"path","path",-188191168),(function (emit,_,___$1){
var vec__82079 = cljs.core.deref(_BANG_state);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82079,(0),null);
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82079,(1),null);
var G__82082 = theta;
var G__82083 = demo.mathbox.V(cljs.core.deref(_BANG_params),theta);
return (emit.cljs$core$IFn$_invoke$arity$2 ? emit.cljs$core$IFn$_invoke$arity$2(G__82082,G__82083) : emit.call(null,G__82082,G__82083));
})], null)], null)], null);
});
demo.mathbox.PhaseAxes = (function demo$mathbox$PhaseAxes(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Axis,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"axis","axis",-1215390822),"x",new cljs.core.Keyword(null,"color","color",1011675173),(16777215)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Scale,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"axis","axis",-1215390822),"x",new cljs.core.Keyword(null,"divide","divide",2108946657),(5),new cljs.core.Keyword(null,"unit","unit",375175175),(1),new cljs.core.Keyword(null,"base","base",185279322),(10),new cljs.core.Keyword(null,"start","start",-355208981),true,new cljs.core.Keyword(null,"end","end",-268185958),true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Format,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expr","expr",745722291),demo.mathbox.format_number,new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Helvetica"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Label,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"background","background",-863952629),(0),new cljs.core.Keyword(null,"depth","depth",1768663640),0.5,new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),(1),new cljs.core.Keyword(null,"zOrder","zOrder",444084817),(5),new cljs.core.Keyword(null,"size","size",1098693007),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Axis,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"axis","axis",-1215390822),"y",new cljs.core.Keyword(null,"color","color",1011675173),(16777215)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Scale,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"axis","axis",-1215390822),"y",new cljs.core.Keyword(null,"divide","divide",2108946657),(5),new cljs.core.Keyword(null,"unit","unit",375175175),(1),new cljs.core.Keyword(null,"base","base",185279322),(10),new cljs.core.Keyword(null,"start","start",-355208981),true,new cljs.core.Keyword(null,"end","end",-268185958),true,new cljs.core.Keyword(null,"zero","zero",-858964576),false], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Format,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expr","expr",745722291),demo.mathbox.format_number,new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Helvetica"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Label,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"background","background",-863952629),(0),new cljs.core.Keyword(null,"depth","depth",1768663640),0.5,new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),(1),new cljs.core.Keyword(null,"zOrder","zOrder",444084817),(5),new cljs.core.Keyword(null,"size","size",1098693007),(10),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(0)], null)], null)], null)], null);
});
/**
 * Component that takes a simulator and builds an array of phase vectors... todo
 *   document!!
 */
demo.mathbox.PhaseVectors = (function demo$mathbox$PhaseVectors(p__82084){
var map__82085 = p__82084;
var map__82085__$1 = cljs.core.__destructure_map(map__82085);
var simulate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82085__$1,new cljs.core.Keyword(null,"simulate","simulate",-486863853));
var steps = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82085__$1,new cljs.core.Keyword(null,"steps","steps",-128433302),(8));
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82085__$1,new cljs.core.Keyword(null,"dt","dt",-368444759),0.03);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Area,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"channels","channels",1132759174),(2),new cljs.core.Keyword(null,"items","items",1031954938),steps,new cljs.core.Keyword(null,"centeredX","centeredX",-638621558),true,new cljs.core.Keyword(null,"centeredY","centeredY",-477741349),true,new cljs.core.Keyword(null,"live","live",-1610148039),true,new cljs.core.Keyword(null,"expr","expr",745722291),(function (){var t2 = (dt * (0.01 + (steps - (1))));
return (function (emit,x,y,_i,_j,_t){
var G__82086 = [(0),x,y];
var G__82087 = t2;
var G__82088 = dt;
var G__82089 = emit;
return (simulate.cljs$core$IFn$_invoke$arity$4 ? simulate.cljs$core$IFn$_invoke$arity$4(G__82086,G__82087,G__82088,G__82089) : simulate.call(null,G__82086,G__82087,G__82088,G__82089));
});
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Vector,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),(3182847),new cljs.core.Keyword(null,"size","size",1098693007),(5),new cljs.core.Keyword(null,"end","end",-268185958),true], null)], null)], null);
});
/**
 * Takes a component and passes along a simulator...
 */
demo.mathbox.WithSimulator_STAR_ = (function demo$mathbox$WithSimulator_STAR_(p__82090,component){
var map__82091 = p__82090;
var map__82091__$1 = cljs.core.__destructure_map(map__82091);
var opts = map__82091__$1;
var state_derivative = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82091__$1,new cljs.core.Keyword(null,"state-derivative","state-derivative",1201180045));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82091__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82091__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var _BANG_p = module$node_modules$react$index.useMemo((function (){
if(cljs.core.truth_(parameters)){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,parameters));
} else {
return null;
}
}),[]);
var simulate = module$node_modules$react$index.useMemo((function (){
return demo.mathbox.Lagrangian_collector(state_derivative,initial_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"compile?","compile?",-826687650),true,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),_BANG_p], null));
}),[state_derivative]);
module$node_modules$react$index.useEffect((function demo$mathbox$WithSimulator_STAR__$_mount(){
return cljs.core.reset_BANG_(_BANG_p,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,parameters));
}),[parameters]);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"state-derivative","state-derivative",1201180045),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"parameters","parameters",-1229919748)], 0)),new cljs.core.Keyword(null,"simulate","simulate",-486863853),simulate)], null);
});
demo.mathbox.Phase = (function demo$mathbox$Phase(_BANG_state,_BANG_params,steps){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Grid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(8421504)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.PhaseAxes], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),demo.mathbox.WithSimulator_STAR_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state-derivative","state-derivative",1201180045),demo.mathbox.state_deriv_STAR_,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),_BANG_params,new cljs.core.Keyword(null,"steps","steps",-128433302),steps], null),demo.mathbox.PhaseVectors], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.Comet,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),(2),new cljs.core.Keyword(null,"length","length",588987862),(16),new cljs.core.Keyword(null,"color","color",1011675173),(10539263),new cljs.core.Keyword(null,"size","size",1098693007),(10),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.99,new cljs.core.Keyword(null,"path","path",-188191168),(function (emit,_,___$1){
var vec__82092 = cljs.core.deref(_BANG_state);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82092,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82092,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82092,(2),null);
return (emit.cljs$core$IFn$_invoke$arity$2 ? emit.cljs$core$IFn$_invoke$arity$2(q,p) : emit.call(null,q,p));
})], null)], null)], null);
});
demo.mathbox.Hamilton = (function demo$mathbox$Hamilton(){
var with_let82099 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let82099","with-let82099",-294450243));
var temp__5757__auto___82111 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___82111 == null)){
} else {
var c__74980__auto___82112 = temp__5757__auto___82111;
if((with_let82099.generation === c__74980__auto___82112.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let82099.generation = c__74980__auto___82112.ratomGeneration);
}

var init82100 = (with_let82099.length === (0));
var _BANG_state = ((((init82100) || (cljs.core.not(with_let82099.hasOwnProperty((0))))))?(with_let82099[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(0)], null))):(with_let82099[(0)]));
var _BANG_params = ((((init82100) || (cljs.core.not(with_let82099.hasOwnProperty((1))))))?(with_let82099[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [9.8,(1),(1)], null))):(with_let82099[(1)]));
var _BANG_items = ((((init82100) || (cljs.core.not(with_let82099.hasOwnProperty((2))))))?(with_let82099[(2)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((8))):(with_let82099[(2)]));
var res82101 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.Mathbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"600px",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["core","controls","cursor","stats"], null)], null),new cljs.core.Keyword(null,"init","init",-1875481434),(function (mb){
var o_82113 = ({"length": (1), "mass": (1), "gravity": 9.8, "simSteps": (8)});
var gui_82114 = (new module$node_modules$dat_DOT_gui$build$dat_gui.GUI());
var G__82102_82115 = gui_82114;
G__82102_82115.add(o_82113,"length").min(0.5).max((2)).step(0.01).onChange((function (p1__82095_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_params,cljs.core.assoc,(2),p1__82095_SHARP_);
}));

G__82102_82115.add(o_82113,"gravity").min((5)).max((15)).step(0.01).onChange((function (p1__82096_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_params,cljs.core.assoc,(0),p1__82096_SHARP_);
}));

G__82102_82115.add(o_82113,"mass").min(0.5).max((2)).step(0.01).onChange((function (p1__82097_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_params,cljs.core.assoc,(1),p1__82097_SHARP_);
}));

G__82102_82115.add(o_82113,"simSteps").min((1)).max((50)).step((1)).onChange((function (p1__82098_SHARP_){
return cljs.core.reset_BANG_(_BANG_items,p1__82098_SHARP_);
}));


var three = mb.three;
var renderer = three.renderer;
renderer.setClearColor((new module$node_modules$three$src$math$Color.Color((0))),1.0);

return mb.camera(({"proxy": true, "position": [(0),(0),(20)], "fov": (90)}));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Layer,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Unit,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),(720),new cljs.core.Keyword(null,"focus","focus",234677911),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Cartesian,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"pendulum",new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.25,0.25], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,0.35,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.Pendulum,_BANG_state,cljs.core.deref(_BANG_params)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Cartesian,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"well",new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- Math.PI),(Math.PI - 1.0E-5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-10),(10)], null)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.48,0.25], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,-0.25,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.Well,_BANG_state,_BANG_params], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Cartesian,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"phase",new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-4),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(8)], null)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.6,0.6], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.6,(0)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.Phase,_BANG_state,cljs.core.deref(_BANG_params),cljs.core.deref(_BANG_items)], null)], null)], null)], null)], null);
return res82101;
});

//# sourceMappingURL=demo.mathbox.js.map
