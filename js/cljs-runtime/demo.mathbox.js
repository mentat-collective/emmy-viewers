goog.provide('demo.mathbox');
var module$node_modules$mathbox_react$build$cjs$index=shadow.js.require("module$node_modules$mathbox_react$build$cjs$index", {});
var module$node_modules$three$build$three=shadow.js.require("module$node_modules$three$build$three", {});
var module$node_modules$three$examples$jsm$controls$OrbitControls=shadow.js.require("module$node_modules$three$examples$jsm$controls$OrbitControls", {});
demo.mathbox.default_options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["core","controls","cursor"], null),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"klass","klass",-1386752349),module$node_modules$three$examples$jsm$controls$OrbitControls.OrbitControls], null),new cljs.core.Keyword(null,"camera","camera",-1190348585),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Returns a setup function that will only run ONE time.
 */
demo.mathbox.setup = (function demo$mathbox$setup(f){
return (function (box){
if(cljs.core.truth_((function (){var and__4251__auto__ = box;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(box.created);
} else {
return and__4251__auto__;
}
})())){
(box.created = true);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(box) : f.call(null,box));
} else {
return null;
}
});
});
/**
 * Some core options, tidied up.
 */
demo.mathbox.opts__GT_setup = (function demo$mathbox$opts__GT_setup(p__81827){
var map__81828 = p__81827;
var map__81828__$1 = cljs.core.__destructure_map(map__81828);
var background_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81828__$1,new cljs.core.Keyword(null,"background-color","background-color",570434026));
var camera_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81828__$1,new cljs.core.Keyword(null,"camera-position","camera-position",-2111361558));
var max_distance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81828__$1,new cljs.core.Keyword(null,"max-distance","max-distance",848042358));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81828__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81828__$1,new cljs.core.Keyword(null,"focus","focus",234677911));
return demo.mathbox.setup((function (box){
if(cljs.core.truth_(scale)){
box.set(({"scale": scale}));
} else {
}

if(cljs.core.truth_(focus)){
box.set(({"focus": focus}));
} else {
}

var three = box.three;
if(cljs.core.truth_(max_distance)){
(three.controls.maxDistance = max_distance);
} else {
}

var temp__5753__auto___81889 = camera_position;
if(cljs.core.truth_(temp__5753__auto___81889)){
var vec__81829_81890 = temp__5753__auto___81889;
var x_81891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81829_81890,(0),null);
var y_81892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81829_81890,(1),null);
var z_81893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81829_81890,(2),null);
three.camera.position.set(x_81891,y_81892,z_81893);
} else {
}

if(cljs.core.truth_(background_color)){
var color = (new module$node_modules$three$build$three.Color(background_color));
return three.renderer.setClearColor(color,1.0);
} else {
return null;
}
}));
});
/**
 * Same as `ContainedMathBox`, but with setup options.
 * 
 *   TODO for NOW, don't supply `:ref`. But obviously we want to allow that too.
 * 
 *   :style maps to containerStyle.
 */
demo.mathbox.Mathbox = (function demo$mathbox$Mathbox(var_args){
var args__4870__auto__ = [];
var len__4864__auto___81894 = arguments.length;
var i__4865__auto___81895 = (0);
while(true){
if((i__4865__auto___81895 < len__4864__auto___81894)){
args__4870__auto__.push((arguments[i__4865__auto___81895]));

var G__81896 = (i__4865__auto___81895 + (1));
i__4865__auto___81895 = G__81896;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return demo.mathbox.Mathbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(demo.mathbox.Mathbox.cljs$core$IFn$_invoke$arity$variadic = (function (p__81834,children){
var map__81835 = p__81834;
var map__81835__$1 = cljs.core.__destructure_map(map__81835);
var opts = map__81835__$1;
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81835__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81835__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var ref = ((cljs.core.map_QMARK_(init))?demo.mathbox.opts__GT_setup(init):((cljs.core.fn_QMARK_(init))?demo.mathbox.setup(init):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid init.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),init], null))})()
));
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"style","style",-496642736)], 0)),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,demo.mathbox.default_options)),new cljs.core.Keyword(null,"ref","ref",1289896967),ref,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"containerStyle","containerStyle",-1828381609),style], 0));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$mathbox_react$build$cjs$index.ContainedMathbox,opts__$1], null),children);
}));

(demo.mathbox.Mathbox.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(demo.mathbox.Mathbox.cljs$lang$applyTo = (function (seq81832){
var G__81833 = cljs.core.first(seq81832);
var seq81832__$1 = cljs.core.next(seq81832);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81833,seq81832__$1);
}));

demo.mathbox.Cartesian = (function demo$mathbox$Cartesian(var_args){
var args__4870__auto__ = [];
var len__4864__auto___81897 = arguments.length;
var i__4865__auto___81898 = (0);
while(true){
if((i__4865__auto___81898 < len__4864__auto___81897)){
args__4870__auto__.push((arguments[i__4865__auto___81898]));

var G__81899 = (i__4865__auto___81898 + (1));
i__4865__auto___81898 = G__81899;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return demo.mathbox.Cartesian.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(demo.mathbox.Cartesian.cljs$core$IFn$_invoke$arity$variadic = (function (opts,children){
var opts__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"range","range",1639692286),(function (p__81838){
var map__81839 = p__81838;
var map__81839__$1 = cljs.core.__destructure_map(map__81839);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81839__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81839__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81839__$1,new cljs.core.Keyword(null,"z","z",-789527183));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$mathbox_react$build$cjs$index.Cartesian,opts__$1], null),children);
}));

(demo.mathbox.Cartesian.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(demo.mathbox.Cartesian.cljs$lang$applyTo = (function (seq81836){
var G__81837 = cljs.core.first(seq81836);
var seq81836__$1 = cljs.core.next(seq81836);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81837,seq81836__$1);
}));

/**
 * Like the original, but allows for a 'dimensions' key.
 */
demo.mathbox.Volume = (function demo$mathbox$Volume(p__81841){
var map__81842 = p__81841;
var map__81842__$1 = cljs.core.__destructure_map(map__81842);
var opts = map__81842__$1;
var dimensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81842__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var vec__81843 = dimensions;
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81843,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81843,(1),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81843,(2),null);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097)),new cljs.core.Keyword(null,"width","width",-384071477),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"depth","depth",1768663640),depth], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$mathbox_react$build$cjs$index.Volume,opts__$1], null);
});
demo.mathbox.ColorCube = (function demo$mathbox$ColorCube(p__81846){
var map__81847 = p__81846;
var map__81847__$1 = cljs.core.__destructure_map(map__81847);
var dimensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81847__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81847__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81847__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.mathbox.Volume,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),dimensions,new cljs.core.Keyword(null,"items","items",1031954938),(1),new cljs.core.Keyword(null,"channels","channels",1132759174),(4),new cljs.core.Keyword(null,"live","live",-1610148039),false,new cljs.core.Keyword(null,"expr","expr",745722291),(function (emit,x,y,z){
return (emit.cljs$core$IFn$_invoke$arity$4 ? emit.cljs$core$IFn$_invoke$arity$4(x,y,z,opacity) : emit.call(null,x,y,z,opacity));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$mathbox_react$build$cjs$index.Point,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"points","points",-1486596883),"<",new cljs.core.Keyword(null,"colors","colors",1157174732),"<",new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"size","size",1098693007),size], null)], null)], null);
});
demo.mathbox.Function1 = (function demo$mathbox$Function1(p__81848){
var map__81849 = p__81848;
var map__81849__$1 = cljs.core.__destructure_map(map__81849);
var samples = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__81849__$1,new cljs.core.Keyword(null,"samples","samples",635504833),(256));
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81849__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var f_SINGLEQUOTE_ = sicmutils.expression.compile.sci_eval(f);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$mathbox_react$build$cjs$index.Interval,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),samples,new cljs.core.Keyword(null,"items","items",1031954938),(1),new cljs.core.Keyword(null,"channels","channels",1132759174),(2),new cljs.core.Keyword(null,"expr","expr",745722291),(function (emit,x,_,time){
var G__81850 = x;
var G__81851 = (f_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? f_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(x,time) : f_SINGLEQUOTE_.call(null,x,time));
return (emit.cljs$core$IFn$_invoke$arity$2 ? emit.cljs$core$IFn$_invoke$arity$2(G__81850,G__81851) : emit.call(null,G__81850,G__81851));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$mathbox_react$build$cjs$index.Line,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(3182847),new cljs.core.Keyword(null,"width","width",-384071477),(4)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$mathbox_react$build$cjs$index.Point,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(3182847),new cljs.core.Keyword(null,"size","size",1098693007),(8)], null)], null)], null);
});
/**
 * hardcoded at first for this use case.
 */
demo.mathbox.Lagrangian_updater = (function demo$mathbox$Lagrangian_updater(state_derivative,initial_state){
var map__81852 = sicmutils.numerical.ode.integration_opts(cljs.core.constantly(state_derivative),cljs.core.PersistentVector.EMPTY,initial_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"epsilon","epsilon",-730158570),1.0E-6,new cljs.core.Keyword(null,"compile?","compile?",-826687650),false], null));
var map__81852__$1 = cljs.core.__destructure_map(map__81852);
var integrator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81852__$1,new cljs.core.Keyword(null,"integrator","integrator",1554489822));
var equations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81852__$1,new cljs.core.Keyword(null,"equations","equations",1884238648));
return (function (p__81855,t2){
var vec__81856 = p__81855;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81856,(0),null);
var state = vec__81856;
var s = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(state));
var output = integrator.solve(equations,t,s,t2,null);
return sicmutils.structure.unflatten.cljs$core$IFn$_invoke$arity$2(output.y,state);
});
});
demo.mathbox.Mass = (function demo$mathbox$Mass(p__81865){
var map__81866 = p__81865;
var map__81866__$1 = cljs.core.__destructure_map(map__81866);
var state__GT_xyz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81866__$1,new cljs.core.Keyword(null,"state->xyz","state->xyz",254907752));
var L = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81866__$1,new cljs.core.Keyword(null,"L","L",-1038307519));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81866__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806));
var var_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81866__$1,new cljs.core.Keyword(null,"var-name","var-name",-574747624));
var render_fn = sicmutils.expression.compile.sci_eval(state__GT_xyz);
var state_deriv = sicmutils.expression.compile.sci_eval(L);
var my_updater = demo.mathbox.Lagrangian_updater(state_deriv,initial_state);
var with_let81867 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let81867","with-let81867",-823540048));
var temp__5757__auto___81900 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___81900 == null)){
} else {
var c__74539__auto___81901 = temp__5757__auto___81900;
if((with_let81867.generation === c__74539__auto___81901.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let81867.generation = c__74539__auto___81901.ratomGeneration);
}

var init81868 = (with_let81867.length === (0));
var _BANG_state = ((((init81868) || (cljs.core.not(with_let81867.hasOwnProperty((0))))))?(with_let81867[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(initial_state)):(with_let81867[(0)]));
var res81869 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$mathbox_react$build$cjs$index.Interval,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"items","items",1031954938),(1),new cljs.core.Keyword(null,"history","history",-247395220),(20),new cljs.core.Keyword(null,"expr","expr",745722291),(function (emit,_x,_i,t){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_state,(function (p1__81862_SHARP_){
return my_updater(p1__81862_SHARP_,t);
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

var vec__81870 = (function (){var G__81873 = cljs.core.deref(_BANG_state);
return (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(G__81873) : render_fn.call(null,G__81873));
})();
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81870,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81870,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81870,(2),null);
return (emit.cljs$core$IFn$_invoke$arity$3 ? emit.cljs$core$IFn$_invoke$arity$3(x1,z1,y1) : emit.call(null,x1,z1,y1));
}),new cljs.core.Keyword(null,"channels","channels",1132759174),(3)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$mathbox_react$build$cjs$index.Point,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),(3182847),new cljs.core.Keyword(null,"size","size",1098693007),(20),new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),(1)], null)], null)], null);
return res81869;
});
/**
 * Obviously these should be merged!
 */
demo.mathbox.DoubleMass = (function demo$mathbox$DoubleMass(p__81875){
var map__81876 = p__81875;
var map__81876__$1 = cljs.core.__destructure_map(map__81876);
var state__GT_xyz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81876__$1,new cljs.core.Keyword(null,"state->xyz","state->xyz",254907752));
var L = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81876__$1,new cljs.core.Keyword(null,"L","L",-1038307519));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81876__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806));
var render_fn = sicmutils.expression.compile.sci_eval(state__GT_xyz);
var state_deriv = sicmutils.expression.compile.sci_eval(L);
var my_updater = demo.mathbox.Lagrangian_updater(state_deriv,initial_state);
var with_let81877 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let81877","with-let81877",1020002182));
var temp__5757__auto___81902 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___81902 == null)){
} else {
var c__74539__auto___81903 = temp__5757__auto___81902;
if((with_let81877.generation === c__74539__auto___81903.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let81877.generation = c__74539__auto___81903.ratomGeneration);
}

var init81878 = (with_let81877.length === (0));
var _BANG_state = ((((init81878) || (cljs.core.not(with_let81877.hasOwnProperty((0))))))?(with_let81877[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(initial_state)):(with_let81877[(0)]));
var res81879 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$mathbox_react$build$cjs$index.Interval,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(2),new cljs.core.Keyword(null,"items","items",1031954938),(1),new cljs.core.Keyword(null,"expr","expr",745722291),(function (emit,_x,_i,t){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_state,(function (p1__81874_SHARP_){
return my_updater(p1__81874_SHARP_,t);
}));

var vec__81880 = (function (){var G__81883 = cljs.core.deref(_BANG_state);
return (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(G__81883) : render_fn.call(null,G__81883));
})();
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81880,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81880,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81880,(2),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81880,(3),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81880,(4),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81880,(5),null);
(emit.cljs$core$IFn$_invoke$arity$3 ? emit.cljs$core$IFn$_invoke$arity$3(x1,z1,y1) : emit.call(null,x1,z1,y1));

return (emit.cljs$core$IFn$_invoke$arity$3 ? emit.cljs$core$IFn$_invoke$arity$3(x2,z2,y2) : emit.call(null,x2,z2,y2));
}),new cljs.core.Keyword(null,"channels","channels",1132759174),(3)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$mathbox_react$build$cjs$index.Point,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),(3182847),new cljs.core.Keyword(null,"size","size",1098693007),(20),new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),(1)], null)], null)], null);
return res81879;
});
demo.mathbox.two_pi = ((2) * Math.PI);
demo.mathbox.Ellipse = (function demo$mathbox$Ellipse(p__81884){
var map__81885 = p__81884;
var map__81885__$1 = cljs.core.__destructure_map(map__81885);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81885__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81885__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81885__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$mathbox_react$build$cjs$index.Area,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),(64),new cljs.core.Keyword(null,"height","height",1025178622),(64),new cljs.core.Keyword(null,"rangeX","rangeX",1415483689),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),demo.mathbox.two_pi], null),new cljs.core.Keyword(null,"rangeY","rangeY",777743115),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),demo.mathbox.two_pi], null),new cljs.core.Keyword(null,"axes","axes",1970866440),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.Keyword(null,"expr","expr",745722291),(function (emit,theta,phi,_i,_j,_time){
var sin_theta = Math.sin(theta);
var cos_theta = Math.cos(theta);
var G__81886 = ((a * sin_theta) * Math.cos(phi));
var G__81887 = (c * cos_theta);
var G__81888 = ((b * sin_theta) * Math.sin(phi));
return (emit.cljs$core$IFn$_invoke$arity$3 ? emit.cljs$core$IFn$_invoke$arity$3(G__81886,G__81887,G__81888) : emit.call(null,G__81886,G__81887,G__81888));
}),new cljs.core.Keyword(null,"items","items",1031954938),(1),new cljs.core.Keyword(null,"channels","channels",1132759174),(3)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$mathbox_react$build$cjs$index.Surface,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shaded","shaded",561405058),true,new cljs.core.Keyword(null,"opacity","opacity",397153780),0.2,new cljs.core.Keyword(null,"lineX","lineX",-269253760),true,new cljs.core.Keyword(null,"lineY","lineY",-800534367),true,new cljs.core.Keyword(null,"points","points",-1486596883),"<",new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"width","width",-384071477),(1)], null)], null)], null);
});

//# sourceMappingURL=demo.mathbox.js.map
