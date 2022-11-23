goog.provide('jsxgraph.core');
var module$node_modules$$mentatcollective$jsxgraph$src$index=shadow.js.require("module$node_modules$$mentatcollective$jsxgraph$src$index", {});
jsxgraph.core.to_fixed = (function jsxgraph$core$to_fixed(x,p){
return module$node_modules$$mentatcollective$jsxgraph$src$index.default.toFixed(x,p);
});
/**
 * TODO note that you can either add children etc... OR you can supply a ref that
 *   just does all of this crap for you.
 * 
 *   TODO can I have a component that just messes with the board itself?
 */
jsxgraph.core.JSXGraph = (function jsxgraph$core$JSXGraph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___103922 = arguments.length;
var i__4865__auto___103923 = (0);
while(true){
if((i__4865__auto___103923 < len__4864__auto___103922)){
args__4870__auto__.push((arguments[i__4865__auto___103923]));

var G__103924 = (i__4865__auto___103923 + (1));
i__4865__auto___103923 = G__103924;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return jsxgraph.core.JSXGraph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(jsxgraph.core.JSXGraph.cljs$core$IFn$_invoke$arity$variadic = (function (p__103883,_){
var map__103884 = p__103883;
var map__103884__$1 = cljs.core.__destructure_map(map__103884);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103884__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103884__$1,new cljs.core.Keyword(null,"style","style",-496642736));
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
var temp__5753__auto___103925 = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5753__auto___103925)){
var ref_103926 = temp__5753__auto___103925;
(ref_103926.cljs$core$IFn$_invoke$arity$1 ? ref_103926.cljs$core$IFn$_invoke$arity$1(board) : ref_103926.call(null,board));
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
var G__103927__delegate = function (___$1){
var this$ = reagent.core.current_component();
var children = reagent.core.children(this$);
var extras = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.deref(_BANG_board),new cljs.core.Keyword(null,"force","force",781957286),cljs.core.deref(_BANG_force)], null);
console.log("rendering board");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_force,cljs.core.inc);

return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,new cljs.core.Keyword(null,"style","style",-496642736),style__$1], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__103885){
var vec__103887 = p__103885;
var seq__103888 = cljs.core.seq(vec__103887);
var first__103889 = cljs.core.first(seq__103888);
var seq__103888__$1 = cljs.core.next(seq__103888);
var a = first__103889;
var first__103889__$1 = cljs.core.first(seq__103888__$1);
var seq__103888__$2 = cljs.core.next(seq__103888__$1);
var props = first__103889__$1;
var more = seq__103888__$2;
if(cljs.core.map_QMARK_(props)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,cljs.core.into.cljs$core$IFn$_invoke$arity$2(props,extras)], null),more);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,extras,props], null),more);
}
})),children);
};
var G__103927 = function (var_args){
var ___$1 = null;
if (arguments.length > 0) {
var G__103928__i = 0, G__103928__a = new Array(arguments.length -  0);
while (G__103928__i < G__103928__a.length) {G__103928__a[G__103928__i] = arguments[G__103928__i + 0]; ++G__103928__i;}
  ___$1 = new cljs.core.IndexedSeq(G__103928__a,0,null);
} 
return G__103927__delegate.call(this,___$1);};
G__103927.cljs$lang$maxFixedArity = 0;
G__103927.cljs$lang$applyTo = (function (arglist__103929){
var ___$1 = cljs.core.seq(arglist__103929);
return G__103927__delegate(___$1);
});
G__103927.cljs$core$IFn$_invoke$arity$variadic = G__103927__delegate;
return G__103927;
})()
], null));
}));

(jsxgraph.core.JSXGraph.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(jsxgraph.core.JSXGraph.cljs$lang$applyTo = (function (seq103881){
var G__103882 = cljs.core.first(seq103881);
var seq103881__$1 = cljs.core.next(seq103881);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103882,seq103881__$1);
}));

jsxgraph.core.add_item_BANG_ = (function jsxgraph$core$add_item_BANG_(name,board,elems,props){
var p = board.create(name,cljs.core.clj__GT_js(elems),cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"board","board",-1907017633))));
var temp__5753__auto___103930 = (props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-drag","on-drag",-69159091)) : props.call(null,new cljs.core.Keyword(null,"on-drag","on-drag",-69159091)));
if(cljs.core.truth_(temp__5753__auto___103930)){
var f_103931 = temp__5753__auto___103930;
p.on("drag",(function (_){
var point = this;
return (f_103931.cljs$core$IFn$_invoke$arity$1 ? f_103931.cljs$core$IFn$_invoke$arity$1(point) : f_103931.call(null,point));
}));
} else {
}

return p;
});
jsxgraph.core.element = (function jsxgraph$core$element(name){
return (function (_props,_elems){
var _BANG_item = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var mount_BANG_ = (function (this$,_old_argv){
var vec__103895 = reagent.core.argv(this$);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103895,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103895,(1),null);
var elems = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103895,(2),null);
var temp__5753__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5753__auto__)){
var board = temp__5753__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_item,(function (item){
if(cljs.core.truth_(item)){
board.removeObject(item);
} else {
}

return jsxgraph.core.add_item_BANG_(name,board,elems,props);
}));
} else {
return null;
}
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display-name","display-name",694513143),name,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),mount_BANG_,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),mount_BANG_,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
var vec__103901 = reagent.core.argv(this$);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103901,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103901,(1),null);
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
jsxgraph.core.Angle = jsxgraph.core.element("angle");
jsxgraph.core.Arc = jsxgraph.core.element("arc");
jsxgraph.core.Arrow = jsxgraph.core.element("arrow");
jsxgraph.core.ArrowParallel = jsxgraph.core.element("arrowparallel");
jsxgraph.core.Axis = jsxgraph.core.element("axis");
jsxgraph.core.Bisector = jsxgraph.core.element("bisector");
jsxgraph.core.Bisectorlines = jsxgraph.core.element("bisectorlines");
jsxgraph.core.Boxplot = jsxgraph.core.element("boxplot");
jsxgraph.core.Button = jsxgraph.core.element("button");
jsxgraph.core.CardinalSpline = jsxgraph.core.element("cardinalspline");
jsxgraph.core.Chart = jsxgraph.core.element("chart");
jsxgraph.core.Checkbox = jsxgraph.core.element("checkbox");
jsxgraph.core.Circle = jsxgraph.core.element("circle");
jsxgraph.core.Circumcenter = jsxgraph.core.element("circumcenter");
jsxgraph.core.Circumcircle = jsxgraph.core.element("circumcircle");
jsxgraph.core.CircumcircleArc = jsxgraph.core.element("circumcirclearc");
jsxgraph.core.CircumcircleSector = jsxgraph.core.element("circumcirclesector");
jsxgraph.core.Comb = jsxgraph.core.element("comb");
jsxgraph.core.Conic = jsxgraph.core.element("conic");
jsxgraph.core.Curve = jsxgraph.core.element("curve");
jsxgraph.core.Curve3D = jsxgraph.core.element("Curve3d");
jsxgraph.core.CurveDifference = jsxgraph.core.element("curvedifference");
jsxgraph.core.CurveIntersection = jsxgraph.core.element("curveintersection");
jsxgraph.core.CurveUnion = jsxgraph.core.element("curveunion");
jsxgraph.core.Derivative = jsxgraph.core.element("derivative");
jsxgraph.core.Ellipse = jsxgraph.core.element("ellipse");
jsxgraph.core.ForeignObject = jsxgraph.core.element("foreignobject");
jsxgraph.core.FunctionGraph = jsxgraph.core.element("functiongraph");
jsxgraph.core.FunctionGraph3D = jsxgraph.core.element("functiongraph3d");
jsxgraph.core.Glider = jsxgraph.core.element("glider");
jsxgraph.core.Grid = jsxgraph.core.element("grid");
jsxgraph.core.Group = jsxgraph.core.element("group");
jsxgraph.core.Hatch = jsxgraph.core.element("hatch");
jsxgraph.core.Hyperbola = jsxgraph.core.element("hyperbola");
jsxgraph.core.Image = jsxgraph.core.element("image");
jsxgraph.core.Incenter = jsxgraph.core.element("incenter");
jsxgraph.core.Incircle = jsxgraph.core.element("incircle");
jsxgraph.core.Inequality = jsxgraph.core.element("inequality");
jsxgraph.core.Input = jsxgraph.core.element("input");
jsxgraph.core.Integral = jsxgraph.core.element("integral");
jsxgraph.core.Intersection = jsxgraph.core.element("intersection");
jsxgraph.core.Label = jsxgraph.core.element("label");
jsxgraph.core.Legend = jsxgraph.core.element("legend");
jsxgraph.core.Line = jsxgraph.core.element("line");
jsxgraph.core.Line3D = jsxgraph.core.element("Line3d");
jsxgraph.core.Locus = jsxgraph.core.element("locus");
jsxgraph.core.MajorArc = jsxgraph.core.element("majorarc");
jsxgraph.core.MajorSector = jsxgraph.core.element("majorsector");
jsxgraph.core.MetapostSpline = jsxgraph.core.element("metapostspline");
jsxgraph.core.Midpoint = jsxgraph.core.element("midpoint");
jsxgraph.core.MinorArc = jsxgraph.core.element("minorarc");
jsxgraph.core.MinorSector = jsxgraph.core.element("minorsector");
jsxgraph.core.MirrorElement = jsxgraph.core.element("mirrorelement");
jsxgraph.core.MirrorPoint = jsxgraph.core.element("mirrorpoint");
jsxgraph.core.NonReflexAngle = jsxgraph.core.element("nonreflexangle");
jsxgraph.core.Normal = jsxgraph.core.element("normal");
jsxgraph.core.OrthogonalProjection = jsxgraph.core.element("orthogonalprojection");
jsxgraph.core.OtherIntersection = jsxgraph.core.element("otherintersection");
jsxgraph.core.Parabola = jsxgraph.core.element("parabola");
jsxgraph.core.Parallel = jsxgraph.core.element("parallel");
jsxgraph.core.ParallelPoint = jsxgraph.core.element("parallelpoint");
jsxgraph.core.ParametricSurface3D = jsxgraph.core.element("parametricsurface3d");
jsxgraph.core.Perpendicular = jsxgraph.core.element("perpendicular");
jsxgraph.core.PerpendicularPoint = jsxgraph.core.element("perpendicularpoint");
jsxgraph.core.PerpendicularSegment = jsxgraph.core.element("perpendicularsegment");
jsxgraph.core.Point = jsxgraph.core.element("point");
jsxgraph.core.Point3D = jsxgraph.core.element("point3d");
jsxgraph.core.PolarLine = jsxgraph.core.element("polarline");
jsxgraph.core.PolePoint = jsxgraph.core.element("polepoint");
jsxgraph.core.Polygon = jsxgraph.core.element("polygon");
jsxgraph.core.PolygonalChain = jsxgraph.core.element("polygonalchain");
jsxgraph.core.RadicalAxis = jsxgraph.core.element("padicalaxis");
jsxgraph.core.Reflection = jsxgraph.core.element("reflection");
jsxgraph.core.ReflexAngle = jsxgraph.core.element("reflexangle");
jsxgraph.core.RegularPolygon = jsxgraph.core.element("regularpolygon");
jsxgraph.core.RiemannSum = jsxgraph.core.element("riemannsum");
jsxgraph.core.Sector = jsxgraph.core.element("sector");
jsxgraph.core.Segment = jsxgraph.core.element("segment");
jsxgraph.core.Semicircle = jsxgraph.core.element("semicircle");
jsxgraph.core.Slider = jsxgraph.core.element("slider");
jsxgraph.core.SlopeTriangle = jsxgraph.core.element("slopetriangle");
jsxgraph.core.Spline = jsxgraph.core.element("spline");
jsxgraph.core.StepFunction = jsxgraph.core.element("stepfunction");
jsxgraph.core.Tangent = jsxgraph.core.element("tangent");
jsxgraph.core.TapeMeasure = jsxgraph.core.element("tapemeasure");
jsxgraph.core.Text = jsxgraph.core.element("text");
jsxgraph.core.Ticks = jsxgraph.core.element("ticks");
jsxgraph.core.TraceCurve = jsxgraph.core.element("tracecurve");
jsxgraph.core.Transformation = jsxgraph.core.element("transformation");
jsxgraph.core.Turtle = jsxgraph.core.element("turtle");
jsxgraph.core.View3D = jsxgraph.core.element("view3D");
jsxgraph.core.Multi = (function jsxgraph$core$Multi(p__103914,i__GT_c){
var map__103915 = p__103914;
var map__103915__$1 = cljs.core.__destructure_map(map__103915);
var m = map__103915__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__103915__$1,new cljs.core.Keyword(null,"n","n",562130025),(1));
var f = (function jsxgraph$core$Multi_$_f(i){
var vec__103919 = (i__GT_c.cljs$core$IFn$_invoke$arity$1 ? i__GT_c.cljs$core$IFn$_invoke$arity$1(i) : i__GT_c.call(null,i));
var seq__103920 = cljs.core.seq(vec__103919);
var first__103921 = cljs.core.first(seq__103920);
var seq__103920__$1 = cljs.core.next(seq__103920);
var component = first__103921;
var first__103921__$1 = cljs.core.first(seq__103920__$1);
var seq__103920__$2 = cljs.core.next(seq__103920__$1);
var props = first__103921__$1;
var more = seq__103920__$2;
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
jsxgraph.core.PointLine = (function jsxgraph$core$PointLine(props,x){
var f = (function jsxgraph$core$PointLine_$_f(i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jsxgraph.core.Point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- i),i], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"strokecolor","strokecolor",2097477921),"red"], 0))], null);
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),cljs.core.range.cljs$core$IFn$_invoke$arity$1(x));
});

//# sourceMappingURL=jsxgraph.core.js.map
