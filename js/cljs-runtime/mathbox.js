goog.provide('mathbox');
var module$node_modules$mathbox_react$build$cjs$index=shadow.js.require("module$node_modules$mathbox_react$build$cjs$index", {});
var module$node_modules$three$build$three=shadow.js.require("module$node_modules$three$build$three", {});
var module$node_modules$three$examples$jsm$controls$OrbitControls=shadow.js.require("module$node_modules$three$examples$jsm$controls$OrbitControls", {});
mathbox.default_options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["core","controls","cursor"], null),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"klass","klass",-1386752349),module$node_modules$three$examples$jsm$controls$OrbitControls.OrbitControls], null),new cljs.core.Keyword(null,"camera","camera",-1190348585),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Returns a setup function that will only run ONE time.
 */
mathbox.setup = (function mathbox$setup(f){
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
mathbox.opts__GT_setup = (function mathbox$opts__GT_setup(p__98637){
var map__98639 = p__98637;
var map__98639__$1 = cljs.core.__destructure_map(map__98639);
var background_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98639__$1,new cljs.core.Keyword(null,"background-color","background-color",570434026));
var camera_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98639__$1,new cljs.core.Keyword(null,"camera-position","camera-position",-2111361558));
var max_distance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98639__$1,new cljs.core.Keyword(null,"max-distance","max-distance",848042358));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98639__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98639__$1,new cljs.core.Keyword(null,"focus","focus",234677911));
return mathbox.setup((function (box){
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

var temp__5753__auto___98660 = camera_position;
if(cljs.core.truth_(temp__5753__auto___98660)){
var vec__98641_98661 = temp__5753__auto___98660;
var x_98662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98641_98661,(0),null);
var y_98663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98641_98661,(1),null);
var z_98664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98641_98661,(2),null);
three.camera.position.set(x_98662,y_98663,z_98664);
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
mathbox.BareMathbox = reagent.core.adapt_react_class(module$node_modules$mathbox_react$build$cjs$index.Mathbox);
mathbox.ContainedMathbox = reagent.core.adapt_react_class(module$node_modules$mathbox_react$build$cjs$index.ContainedMathbox);
/**
 * Same as `ContainedMathBox`, but with setup options.
 * 
 *   TODO for NOW, don't supply `:ref`. But obviously we want to allow that too.
 * 
 *   :style maps to containerStyle.
 */
mathbox.Mathbox = (function mathbox$Mathbox(var_args){
var args__4870__auto__ = [];
var len__4864__auto___98667 = arguments.length;
var i__4865__auto___98668 = (0);
while(true){
if((i__4865__auto___98668 < len__4864__auto___98667)){
args__4870__auto__.push((arguments[i__4865__auto___98668]));

var G__98669 = (i__4865__auto___98668 + (1));
i__4865__auto___98668 = G__98669;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return mathbox.Mathbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(mathbox.Mathbox.cljs$core$IFn$_invoke$arity$variadic = (function (p__98652,children){
var map__98653 = p__98652;
var map__98653__$1 = cljs.core.__destructure_map(map__98653);
var opts = map__98653__$1;
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98653__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98653__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var ref = ((cljs.core.map_QMARK_(init))?mathbox.opts__GT_setup(init):((cljs.core.fn_QMARK_(init))?mathbox.setup(init):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid init.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),init], null))})()
));
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"style","style",-496642736)], 0)),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,mathbox.default_options)),new cljs.core.Keyword(null,"ref","ref",1289896967),ref,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"containerStyle","containerStyle",-1828381609),style], 0));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$mathbox_react$build$cjs$index.ContainedMathbox,opts__$1], null),children);
}));

(mathbox.Mathbox.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(mathbox.Mathbox.cljs$lang$applyTo = (function (seq98647){
var G__98648 = cljs.core.first(seq98647);
var seq98647__$1 = cljs.core.next(seq98647);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__98648,seq98647__$1);
}));


//# sourceMappingURL=mathbox.js.map
