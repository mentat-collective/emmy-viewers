goog.provide('demo.jsxgraph');
var module$node_modules$$mentatcollective$jsxgraph$src$index=shadow.js.require("module$node_modules$$mentatcollective$jsxgraph$src$index", {});
demo.jsxgraph.to_fixed = (function demo$jsxgraph$to_fixed(x,p){
return module$node_modules$$mentatcollective$jsxgraph$src$index.default.toFixed(x,p);
});
/**
 * TODO note that you can either add children etc... OR you can supply a ref that
 *   just does all of this crap for you.
 * 
 *   TODO can I have a component that just messes with the board itself?
 */
demo.jsxgraph.JSXGraph = (function demo$jsxgraph$JSXGraph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___77447 = arguments.length;
var i__4865__auto___77448 = (0);
while(true){
if((i__4865__auto___77448 < len__4864__auto___77447)){
args__4870__auto__.push((arguments[i__4865__auto___77448]));

var G__77449 = (i__4865__auto___77448 + (1));
i__4865__auto___77448 = G__77449;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return demo.jsxgraph.JSXGraph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(demo.jsxgraph.JSXGraph.cljs$core$IFn$_invoke$arity$variadic = (function (p__77410,_){
var map__77411 = p__77410;
var map__77411__$1 = cljs.core.__destructure_map(map__77411);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77411__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77411__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _BANG_board = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var _BANG_force = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var id__$1 = (function (){var or__4253__auto__ = id;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return Math.random().toString((36)).substr((2),(9));
}
})();
var style__$1 = (function (){var or__4253__auto__ = style;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null);
}
})();
var kill_BANG_ = (function (board){
board.suspendUpdate();

module$node_modules$$mentatcollective$jsxgraph$src$index.default.JSXGraph.freeBoard(board);

return null;
});
var init_BANG_ = (function (props){
var board = module$node_modules$$mentatcollective$jsxgraph$src$index.default.JSXGraph.initBoard(id__$1,cljs.core.clj__GT_js(props));
var temp__5753__auto___77450 = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5753__auto___77450)){
var ref_77451 = temp__5753__auto___77450;
(ref_77451.cljs$core$IFn$_invoke$arity$1 ? ref_77451.cljs$core$IFn$_invoke$arity$1(board) : ref_77451.call(null,board));
} else {
}

return board;
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"JSXGraph",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
console.log("board mounted");

return cljs.core.reset_BANG_(_BANG_board,init_BANG_(reagent.core.props(this$)));
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (_this){
console.log("bye bye board");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_board,kill_BANG_);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,old_argv){
console.log("board-did-update");

var old_props = (function (){var p = cljs.core.second(old_argv);
if(cljs.core.map_QMARK_(p)){
return p;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var new_props = (function (){var or__4253__auto__ = reagent.core.props(this$);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_props,new_props)){
return null;
} else {
console.log("board resetting!");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_board,(function (old_board){
if(cljs.core.truth_(old_board)){
kill_BANG_(old_board);
} else {
}

return init_BANG_(new_props);
}));
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__77453__delegate = function (___$1){
var this$ = reagent.core.current_component();
var children = reagent.core.children(this$);
var extras = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.deref(_BANG_board),new cljs.core.Keyword(null,"force","force",781957286),cljs.core.deref(_BANG_force)], null);
console.log("rendering board");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_force,cljs.core.inc);

return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,new cljs.core.Keyword(null,"style","style",-496642736),style__$1], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__77417){
var vec__77418 = p__77417;
var seq__77419 = cljs.core.seq(vec__77418);
var first__77420 = cljs.core.first(seq__77419);
var seq__77419__$1 = cljs.core.next(seq__77419);
var a = first__77420;
var first__77420__$1 = cljs.core.first(seq__77419__$1);
var seq__77419__$2 = cljs.core.next(seq__77419__$1);
var props = first__77420__$1;
var more = seq__77419__$2;
if(cljs.core.map_QMARK_(props)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,cljs.core.into.cljs$core$IFn$_invoke$arity$2(props,extras)], null),more);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,extras,props], null),more);
}
})),children);
};
var G__77453 = function (var_args){
var ___$1 = null;
if (arguments.length > 0) {
var G__77454__i = 0, G__77454__a = new Array(arguments.length -  0);
while (G__77454__i < G__77454__a.length) {G__77454__a[G__77454__i] = arguments[G__77454__i + 0]; ++G__77454__i;}
  ___$1 = new cljs.core.IndexedSeq(G__77454__a,0,null);
} 
return G__77453__delegate.call(this,___$1);};
G__77453.cljs$lang$maxFixedArity = 0;
G__77453.cljs$lang$applyTo = (function (arglist__77455){
var ___$1 = cljs.core.seq(arglist__77455);
return G__77453__delegate(___$1);
});
G__77453.cljs$core$IFn$_invoke$arity$variadic = G__77453__delegate;
return G__77453;
})()
], null));
}));

(demo.jsxgraph.JSXGraph.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(demo.jsxgraph.JSXGraph.cljs$lang$applyTo = (function (seq77404){
var G__77406 = cljs.core.first(seq77404);
var seq77404__$1 = cljs.core.next(seq77404);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77406,seq77404__$1);
}));

demo.jsxgraph.add_item_BANG_ = (function demo$jsxgraph$add_item_BANG_(name,board,elems,props){
var p = board.create(name,cljs.core.clj__GT_js(elems),cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"board","board",-1907017633))));
var temp__5753__auto___77456 = (props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-drag","on-drag",-69159091)) : props.call(null,new cljs.core.Keyword(null,"on-drag","on-drag",-69159091)));
if(cljs.core.truth_(temp__5753__auto___77456)){
var f_77457 = temp__5753__auto___77456;
p.on("drag",(function (_){
var point = this;
return (f_77457.cljs$core$IFn$_invoke$arity$1 ? f_77457.cljs$core$IFn$_invoke$arity$1(point) : f_77457.call(null,point));
}));
} else {
}

return p;
});
demo.jsxgraph.element = (function demo$jsxgraph$element(name){
return (function (_props,_elems){
var _BANG_item = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var mount_BANG_ = (function (this$,_old_argv){
var vec__77421 = reagent.core.argv(this$);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77421,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77421,(1),null);
var elems = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77421,(2),null);
var temp__5753__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5753__auto__)){
var board = temp__5753__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_item,(function (item){
if(cljs.core.truth_(item)){
board.removeObject(item);
} else {
}

return demo.jsxgraph.add_item_BANG_(name,board,elems,props);
}));
} else {
return null;
}
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display-name","display-name",694513143),name,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),mount_BANG_,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),mount_BANG_,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
var vec__77424 = reagent.core.argv(this$);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77424,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77424,(1),null);
var temp__5753__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5753__auto__)){
var board = temp__5753__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_item,(function (item){
if(cljs.core.truth_(item)){
board.removeObject(item);
} else {
}

return null;
}));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (_props__$1,_elems__$1){
return null;
})], null));
});
});
demo.jsxgraph.Angle = demo.jsxgraph.element("angle");
demo.jsxgraph.Arc = demo.jsxgraph.element("arc");
demo.jsxgraph.Arrow = demo.jsxgraph.element("arrow");
demo.jsxgraph.ArrowParallel = demo.jsxgraph.element("arrowparallel");
demo.jsxgraph.Axis = demo.jsxgraph.element("axis");
demo.jsxgraph.Bisector = demo.jsxgraph.element("bisector");
demo.jsxgraph.Bisectorlines = demo.jsxgraph.element("bisectorlines");
demo.jsxgraph.Boxplot = demo.jsxgraph.element("boxplot");
demo.jsxgraph.Button = demo.jsxgraph.element("button");
demo.jsxgraph.CardinalSpline = demo.jsxgraph.element("cardinalspline");
demo.jsxgraph.Chart = demo.jsxgraph.element("chart");
demo.jsxgraph.Checkbox = demo.jsxgraph.element("checkbox");
demo.jsxgraph.Circle = demo.jsxgraph.element("circle");
demo.jsxgraph.Circumcenter = demo.jsxgraph.element("circumcenter");
demo.jsxgraph.Circumcircle = demo.jsxgraph.element("circumcircle");
demo.jsxgraph.CircumcircleArc = demo.jsxgraph.element("Circumcirclearc");
demo.jsxgraph.CircumcircleSector = demo.jsxgraph.element("Circumcirclesector");
demo.jsxgraph.Comb = demo.jsxgraph.element("comb");
demo.jsxgraph.Conic = demo.jsxgraph.element("conic");
demo.jsxgraph.Curve = demo.jsxgraph.element("curve");
demo.jsxgraph.Curve3D = demo.jsxgraph.element("Curve3d");
demo.jsxgraph.CurveDifference = demo.jsxgraph.element("Curvedifference");
demo.jsxgraph.CurveIntersection = demo.jsxgraph.element("Curveintersection");
demo.jsxgraph.CurveUnion = demo.jsxgraph.element("Curveunion");
demo.jsxgraph.Derivative = demo.jsxgraph.element("derivative");
demo.jsxgraph.Ellipse = demo.jsxgraph.element("ellipse");
demo.jsxgraph.ForeignObject = demo.jsxgraph.element("Foreignobject");
demo.jsxgraph.FunctionGraph = demo.jsxgraph.element("functiongraph");
demo.jsxgraph.FunctionGraph3D = demo.jsxgraph.element("Functiongraph3d");
demo.jsxgraph.Glider = demo.jsxgraph.element("glider");
demo.jsxgraph.Grid = demo.jsxgraph.element("grid");
demo.jsxgraph.Group = demo.jsxgraph.element("group");
demo.jsxgraph.Hatch = demo.jsxgraph.element("hatch");
demo.jsxgraph.Hyperbola = demo.jsxgraph.element("hyperbola");
demo.jsxgraph.Image = demo.jsxgraph.element("image");
demo.jsxgraph.Incenter = demo.jsxgraph.element("incenter");
demo.jsxgraph.Incircle = demo.jsxgraph.element("incircle");
demo.jsxgraph.Inequality = demo.jsxgraph.element("inequality");
demo.jsxgraph.Input = demo.jsxgraph.element("input");
demo.jsxgraph.Integral = demo.jsxgraph.element("integral");
demo.jsxgraph.Intersection = demo.jsxgraph.element("intersection");
demo.jsxgraph.Label = demo.jsxgraph.element("label");
demo.jsxgraph.Legend = demo.jsxgraph.element("legend");
demo.jsxgraph.Line = demo.jsxgraph.element("line");
demo.jsxgraph.Line3D = demo.jsxgraph.element("Line3d");
demo.jsxgraph.Locus = demo.jsxgraph.element("locus");
demo.jsxgraph.MajorArc = demo.jsxgraph.element("Majorarc");
demo.jsxgraph.MajorSector = demo.jsxgraph.element("Majorsector");
demo.jsxgraph.MetapostSpline = demo.jsxgraph.element("metapostspline");
demo.jsxgraph.Midpoint = demo.jsxgraph.element("midpoint");
demo.jsxgraph.MinorArc = demo.jsxgraph.element("Minorarc");
demo.jsxgraph.MinorSector = demo.jsxgraph.element("Minorsector");
demo.jsxgraph.MirrorElement = demo.jsxgraph.element("mirrorelement");
demo.jsxgraph.MirrorPoint = demo.jsxgraph.element("mirrorpoint");
demo.jsxgraph.NonReflexAngle = demo.jsxgraph.element("NonReflexangle");
demo.jsxgraph.Normal = demo.jsxgraph.element("normal");
demo.jsxgraph.OrthogonalProjection = demo.jsxgraph.element("orthogonalprojection");
demo.jsxgraph.OtherIntersection = demo.jsxgraph.element("Otherintersection");
demo.jsxgraph.Parabola = demo.jsxgraph.element("parabola");
demo.jsxgraph.Parallel = demo.jsxgraph.element("parallel");
demo.jsxgraph.ParallelPoint = demo.jsxgraph.element("parallelpoint");
demo.jsxgraph.ParametricSurface3D = demo.jsxgraph.element("ParametricSurface3d");
demo.jsxgraph.Perpendicular = demo.jsxgraph.element("perpendicular");
demo.jsxgraph.PerpendicularPoint = demo.jsxgraph.element("Perpendicularpoint");
demo.jsxgraph.PerpendicularSegment = demo.jsxgraph.element("Perpendicularsegment");
demo.jsxgraph.Point = demo.jsxgraph.element("point");
demo.jsxgraph.Point3D = demo.jsxgraph.element("Point3d");
demo.jsxgraph.PolarLine = demo.jsxgraph.element("Polarline");
demo.jsxgraph.PolePoint = demo.jsxgraph.element("Polepoint");
demo.jsxgraph.Polygon = demo.jsxgraph.element("polygon");
demo.jsxgraph.PolygonalChain = demo.jsxgraph.element("Polygonalchain");
demo.jsxgraph.RadicalAxis = demo.jsxgraph.element("Radicalaxis");
demo.jsxgraph.Reflection = demo.jsxgraph.element("reflection");
demo.jsxgraph.ReflexAngle = demo.jsxgraph.element("Reflexangle");
demo.jsxgraph.RegularPolygon = demo.jsxgraph.element("Regularpolygon");
demo.jsxgraph.RiemannSum = demo.jsxgraph.element("riemannsum");
demo.jsxgraph.Sector = demo.jsxgraph.element("sector");
demo.jsxgraph.Segment = demo.jsxgraph.element("segment");
demo.jsxgraph.Semicircle = demo.jsxgraph.element("semicircle");
demo.jsxgraph.Slider = demo.jsxgraph.element("slider");
demo.jsxgraph.SlopeTriangle = demo.jsxgraph.element("slopetriangle");
demo.jsxgraph.Spline = demo.jsxgraph.element("spline");
demo.jsxgraph.StepFunction = demo.jsxgraph.element("stepfunction");
demo.jsxgraph.Tangent = demo.jsxgraph.element("tangent");
demo.jsxgraph.TapeMeasure = demo.jsxgraph.element("tapemeasure");
demo.jsxgraph.Text = demo.jsxgraph.element("text");
demo.jsxgraph.Ticks = demo.jsxgraph.element("ticks");
demo.jsxgraph.TraceCurve = demo.jsxgraph.element("tracecurve");
demo.jsxgraph.Transformation = demo.jsxgraph.element("transformation");
demo.jsxgraph.Turtle = demo.jsxgraph.element("turtle");
demo.jsxgraph.View3D = demo.jsxgraph.element("view3D");
demo.jsxgraph.Multi = (function demo$jsxgraph$Multi(p__77433,i__GT_c){
var map__77434 = p__77433;
var map__77434__$1 = cljs.core.__destructure_map(map__77434);
var m = map__77434__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77434__$1,new cljs.core.Keyword(null,"n","n",562130025),(1));
var f = (function demo$jsxgraph$Multi_$_f(i){
var vec__77438 = (i__GT_c.cljs$core$IFn$_invoke$arity$1 ? i__GT_c.cljs$core$IFn$_invoke$arity$1(i) : i__GT_c.call(null,i));
var seq__77439 = cljs.core.seq(vec__77438);
var first__77440 = cljs.core.first(seq__77439);
var seq__77439__$1 = cljs.core.next(seq__77439);
var component = first__77440;
var first__77440__$1 = cljs.core.first(seq__77439__$1);
var seq__77439__$2 = cljs.core.next(seq__77439__$1);
var props = first__77440__$1;
var more = seq__77439__$2;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,cljs.core.into.cljs$core$IFn$_invoke$arity$2(m,props)], null),more);
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
});
/**
 * Annoyingly, if you want to make NEW components that wrap the others, you need
 *   to be careful about passing along props down the line.
 * 
 *   ```
 *   [jsx/PointLine {} 3]
 *   ```
 */
demo.jsxgraph.PointLine = (function demo$jsxgraph$PointLine(props,x){
var f = (function demo$jsxgraph$PointLine_$_f(i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.jsxgraph.Point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- i),i], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"strokecolor","strokecolor",2097477921),"red"], 0))], null);
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),cljs.core.range.cljs$core$IFn$_invoke$arity$1(x));
});

//# sourceMappingURL=demo.jsxgraph.js.map
