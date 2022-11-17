goog.provide('re_frame.context');
goog.scope(function(){
  re_frame.context.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
re_frame.context.frame_context = module$node_modules$react$index.createContext(re_frame.core.default_frame);
re_frame.context.set_default_frame = (function re_frame$context$set_default_frame(frame){
re_frame.context.goog$module$goog$object.set(re_frame.context.frame_context,"_currentValue",frame);

return re_frame.context.goog$module$goog$object.set(re_frame.context.frame_context,"_currentValue2",frame);
});
/**
 * Gets the react Context for the current component, to be used in lifecycle
 *   hooks (e.g. render). Assumes that Component.contextType has been set.
 */
re_frame.context.current_context = (function re_frame$context$current_context(){
var temp__5753__auto__ = reagent.core.current_component();
if(cljs.core.truth_(temp__5753__auto__)){
var cmp = temp__5753__auto__;
if((!(cljs.core.object_QMARK_(cmp.context)))){
return cmp.context;
} else {
return null;
}
} else {
return null;
}
});
/**
 * Get the current frame provided by the context, falling back to the default
 *   frame. Assumes that Component.contextType = frame-context.
 */
re_frame.context.current_frame = (function re_frame$context$current_frame(){
var or__4253__auto__ = re_frame.registry._STAR_current_frame_STAR_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = re_frame.context.current_context();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return re_frame.context.goog$module$goog$object.get(re_frame.context.frame_context,"_currentValue");
}
}
});
re_frame.context.bound_frame = (function re_frame$context$bound_frame(){
var or__4253__auto__ = re_frame.registry._STAR_current_frame_STAR_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = re_frame.context.current_context();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
throw (new Error("No frame bound"));
}
}
});
/**
 * Component that acts as a provider for the frame, so to run an isolated version
 *   of your app, use.
 * 
 *    [provide-frame (frame/make-frame)
 *     [app]]
 */
re_frame.context.provide_frame = (function re_frame$context$provide_frame(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88515 = arguments.length;
var i__4865__auto___88516 = (0);
while(true){
if((i__4865__auto___88516 < len__4864__auto___88515)){
args__4870__auto__.push((arguments[i__4865__auto___88516]));

var G__88517 = (i__4865__auto___88516 + (1));
i__4865__auto___88516 = G__88517;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return re_frame.context.provide_frame.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(re_frame.context.provide_frame.cljs$core$IFn$_invoke$arity$variadic = (function (frame,children){
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2(re_frame.context.frame_context.Provider,({"value": frame, "children": reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),children))}));
}));

(re_frame.context.provide_frame.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frame.context.provide_frame.cljs$lang$applyTo = (function (seq88443){
var G__88444 = cljs.core.first(seq88443);
var seq88443__$1 = cljs.core.next(seq88443);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__88444,seq88443__$1);
}));

/**
 * Component that acts as a provider for the app-db, it takes the registry from
 *   the current frame, but uses the given atom for the app-db
 */
re_frame.context.provide_app_db = cljs.core.with_meta((function() { 
var re_frame$context$provide_app_db__delegate = function (app_db,children){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,re_frame.context.provide_frame,null,(1),null)),(new cljs.core.List(null,re_frame.frame.make_frame.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"registry","registry",1021159018),new cljs.core.Keyword(null,"registry","registry",1021159018).cljs$core$IFn$_invoke$arity$1(re_frame.context.current_frame()),new cljs.core.Keyword(null,"app-db","app-db",865606302),app_db], null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0)))));
};
var re_frame$context$provide_app_db = function (app_db,var_args){
var children = null;
if (arguments.length > 1) {
var G__88519__i = 0, G__88519__a = new Array(arguments.length -  1);
while (G__88519__i < G__88519__a.length) {G__88519__a[G__88519__i] = arguments[G__88519__i + 1]; ++G__88519__i;}
  children = new cljs.core.IndexedSeq(G__88519__a,0,null);
} 
return re_frame$context$provide_app_db__delegate.call(this,app_db,children);};
re_frame$context$provide_app_db.cljs$lang$maxFixedArity = 1;
re_frame$context$provide_app_db.cljs$lang$applyTo = (function (arglist__88520){
var app_db = cljs.core.first(arglist__88520);
var children = cljs.core.rest(arglist__88520);
return re_frame$context$provide_app_db__delegate(app_db,children);
});
re_frame$context$provide_app_db.cljs$core$IFn$_invoke$arity$variadic = re_frame$context$provide_app_db__delegate;
return re_frame$context$provide_app_db;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"context-type","context-type",-1445212185),re_frame.context.frame_context], null));
re_frame.context.subscribe = (function re_frame$context$subscribe(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88521 = arguments.length;
var i__4865__auto___88522 = (0);
while(true){
if((i__4865__auto___88522 < len__4864__auto___88521)){
args__4870__auto__.push((arguments[i__4865__auto___88522]));

var G__88523 = (i__4865__auto___88522 + (1));
i__4865__auto___88522 = G__88523;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.subscribe.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.subscribe.cljs$core$IFn$_invoke$arity$variadic = (function (args__88428__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.subscribe,re_frame.context.current_frame(),args__88428__auto__);
}));

(re_frame.context.subscribe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.subscribe.cljs$lang$applyTo = (function (seq88449){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88449));
}));

re_frame.context.dispatch = (function re_frame$context$dispatch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88524 = arguments.length;
var i__4865__auto___88525 = (0);
while(true){
if((i__4865__auto___88525 < len__4864__auto___88524)){
args__4870__auto__.push((arguments[i__4865__auto___88525]));

var G__88526 = (i__4865__auto___88525 + (1));
i__4865__auto___88525 = G__88526;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.dispatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.dispatch.cljs$core$IFn$_invoke$arity$variadic = (function (args__88428__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.dispatch,re_frame.context.current_frame(),args__88428__auto__);
}));

(re_frame.context.dispatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.dispatch.cljs$lang$applyTo = (function (seq88450){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88450));
}));

re_frame.context.dispatch_sync = (function re_frame$context$dispatch_sync(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88527 = arguments.length;
var i__4865__auto___88528 = (0);
while(true){
if((i__4865__auto___88528 < len__4864__auto___88527)){
args__4870__auto__.push((arguments[i__4865__auto___88528]));

var G__88529 = (i__4865__auto___88528 + (1));
i__4865__auto___88528 = G__88529;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.dispatch_sync.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.dispatch_sync.cljs$core$IFn$_invoke$arity$variadic = (function (args__88428__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.dispatch_sync,re_frame.context.current_frame(),args__88428__auto__);
}));

(re_frame.context.dispatch_sync.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.dispatch_sync.cljs$lang$applyTo = (function (seq88451){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88451));
}));

re_frame.context.clear_sub = (function re_frame$context$clear_sub(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88532 = arguments.length;
var i__4865__auto___88533 = (0);
while(true){
if((i__4865__auto___88533 < len__4864__auto___88532)){
args__4870__auto__.push((arguments[i__4865__auto___88533]));

var G__88534 = (i__4865__auto___88533 + (1));
i__4865__auto___88533 = G__88534;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.clear_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.clear_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args__88428__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.clear_sub,re_frame.context.current_frame(),args__88428__auto__);
}));

(re_frame.context.clear_sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.clear_sub.cljs$lang$applyTo = (function (seq88456){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88456));
}));

re_frame.context.reg_fx = (function re_frame$context$reg_fx(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88536 = arguments.length;
var i__4865__auto___88537 = (0);
while(true){
if((i__4865__auto___88537 < len__4864__auto___88536)){
args__4870__auto__.push((arguments[i__4865__auto___88537]));

var G__88538 = (i__4865__auto___88537 + (1));
i__4865__auto___88537 = G__88538;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.reg_fx.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.reg_fx.cljs$core$IFn$_invoke$arity$variadic = (function (args__88428__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.reg_fx,re_frame.context.current_frame(),args__88428__auto__);
}));

(re_frame.context.reg_fx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.reg_fx.cljs$lang$applyTo = (function (seq88459){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88459));
}));

re_frame.context.reg_cofx = (function re_frame$context$reg_cofx(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88541 = arguments.length;
var i__4865__auto___88542 = (0);
while(true){
if((i__4865__auto___88542 < len__4864__auto___88541)){
args__4870__auto__.push((arguments[i__4865__auto___88542]));

var G__88543 = (i__4865__auto___88542 + (1));
i__4865__auto___88542 = G__88543;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.reg_cofx.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.reg_cofx.cljs$core$IFn$_invoke$arity$variadic = (function (args__88428__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.reg_cofx,re_frame.context.current_frame(),args__88428__auto__);
}));

(re_frame.context.reg_cofx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.reg_cofx.cljs$lang$applyTo = (function (seq88460){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88460));
}));

re_frame.context.inject_cofx = (function re_frame$context$inject_cofx(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88546 = arguments.length;
var i__4865__auto___88548 = (0);
while(true){
if((i__4865__auto___88548 < len__4864__auto___88546)){
args__4870__auto__.push((arguments[i__4865__auto___88548]));

var G__88549 = (i__4865__auto___88548 + (1));
i__4865__auto___88548 = G__88549;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.inject_cofx.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.inject_cofx.cljs$core$IFn$_invoke$arity$variadic = (function (args__88428__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.inject_cofx,re_frame.context.current_frame(),args__88428__auto__);
}));

(re_frame.context.inject_cofx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.inject_cofx.cljs$lang$applyTo = (function (seq88465){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88465));
}));

re_frame.context.clear_cofx = (function re_frame$context$clear_cofx(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88551 = arguments.length;
var i__4865__auto___88552 = (0);
while(true){
if((i__4865__auto___88552 < len__4864__auto___88551)){
args__4870__auto__.push((arguments[i__4865__auto___88552]));

var G__88556 = (i__4865__auto___88552 + (1));
i__4865__auto___88552 = G__88556;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.clear_cofx.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.clear_cofx.cljs$core$IFn$_invoke$arity$variadic = (function (args__88428__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.clear_cofx,re_frame.context.current_frame(),args__88428__auto__);
}));

(re_frame.context.clear_cofx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.clear_cofx.cljs$lang$applyTo = (function (seq88471){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88471));
}));

re_frame.context.reg_event_db = (function re_frame$context$reg_event_db(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88558 = arguments.length;
var i__4865__auto___88560 = (0);
while(true){
if((i__4865__auto___88560 < len__4864__auto___88558)){
args__4870__auto__.push((arguments[i__4865__auto___88560]));

var G__88562 = (i__4865__auto___88560 + (1));
i__4865__auto___88560 = G__88562;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.reg_event_db.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.reg_event_db.cljs$core$IFn$_invoke$arity$variadic = (function (args__88428__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.reg_event_db,re_frame.context.current_frame(),args__88428__auto__);
}));

(re_frame.context.reg_event_db.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.reg_event_db.cljs$lang$applyTo = (function (seq88472){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88472));
}));

re_frame.context.reg_event_fx = (function re_frame$context$reg_event_fx(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88566 = arguments.length;
var i__4865__auto___88567 = (0);
while(true){
if((i__4865__auto___88567 < len__4864__auto___88566)){
args__4870__auto__.push((arguments[i__4865__auto___88567]));

var G__88569 = (i__4865__auto___88567 + (1));
i__4865__auto___88567 = G__88569;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.reg_event_fx.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.reg_event_fx.cljs$core$IFn$_invoke$arity$variadic = (function (args__88428__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.reg_event_fx,re_frame.context.current_frame(),args__88428__auto__);
}));

(re_frame.context.reg_event_fx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.reg_event_fx.cljs$lang$applyTo = (function (seq88477){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88477));
}));

re_frame.context.reg_event_ctx = (function re_frame$context$reg_event_ctx(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88570 = arguments.length;
var i__4865__auto___88571 = (0);
while(true){
if((i__4865__auto___88571 < len__4864__auto___88570)){
args__4870__auto__.push((arguments[i__4865__auto___88571]));

var G__88572 = (i__4865__auto___88571 + (1));
i__4865__auto___88571 = G__88572;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.reg_event_ctx.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.reg_event_ctx.cljs$core$IFn$_invoke$arity$variadic = (function (args__88428__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.reg_event_ctx,re_frame.context.current_frame(),args__88428__auto__);
}));

(re_frame.context.reg_event_ctx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.reg_event_ctx.cljs$lang$applyTo = (function (seq88481){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88481));
}));

re_frame.context.clear_event = (function re_frame$context$clear_event(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88574 = arguments.length;
var i__4865__auto___88576 = (0);
while(true){
if((i__4865__auto___88576 < len__4864__auto___88574)){
args__4870__auto__.push((arguments[i__4865__auto___88576]));

var G__88578 = (i__4865__auto___88576 + (1));
i__4865__auto___88576 = G__88578;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.clear_event.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.clear_event.cljs$core$IFn$_invoke$arity$variadic = (function (args__88428__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.clear_event,re_frame.context.current_frame(),args__88428__auto__);
}));

(re_frame.context.clear_event.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.clear_event.cljs$lang$applyTo = (function (seq88487){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88487));
}));

re_frame.context.reg_sub_raw = (function re_frame$context$reg_sub_raw(query_id,handler_fn){
return re_frame.frame.reg_sub_raw(re_frame.context.current_frame(),query_id,(function (frame,query_v){
var G__88491 = new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(frame);
var G__88492 = query_v;
return (handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(G__88491,G__88492) : handler_fn.call(null,G__88491,G__88492));
}));
});
re_frame.context.reg_sub = (function re_frame$context$reg_sub(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88584 = arguments.length;
var i__4865__auto___88585 = (0);
while(true){
if((i__4865__auto___88585 < len__4864__auto___88584)){
args__4870__auto__.push((arguments[i__4865__auto___88585]));

var G__88586 = (i__4865__auto___88585 + (1));
i__4865__auto___88585 = G__88586;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return re_frame.context.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(re_frame.context.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
return re_frame.frame.reg_sub(re_frame.context.current_frame(),query_id,args);
}));

(re_frame.context.reg_sub.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frame.context.reg_sub.cljs$lang$applyTo = (function (seq88493){
var G__88494 = cljs.core.first(seq88493);
var seq88493__$1 = cljs.core.next(seq88493);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__88494,seq88493__$1);
}));

re_frame.context.clear_subscriptions_cache_BANG_ = (function re_frame$context$clear_subscriptions_cache_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88587 = arguments.length;
var i__4865__auto___88588 = (0);
while(true){
if((i__4865__auto___88588 < len__4864__auto___88587)){
args__4870__auto__.push((arguments[i__4865__auto___88588]));

var G__88589 = (i__4865__auto___88588 + (1));
i__4865__auto___88588 = G__88589;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.clear_subscriptions_cache_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.clear_subscriptions_cache_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.subs._clear,new cljs.core.Keyword(null,"subs-cache","subs-cache",822836721).cljs$core$IFn$_invoke$arity$1(re_frame.context.current_frame()),args);
}));

(re_frame.context.clear_subscriptions_cache_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.clear_subscriptions_cache_BANG_.cljs$lang$applyTo = (function (seq88496){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88496));
}));

/**
 * Returns subscribe/dispatch/dispatch-sync functions that are bound to the current frame. Use like this
 * 
 *    (defc my-component []
 *      (reagent/with-let [{:keys [subscribe dispatch]} (re-frame/context-fns)]
 *        ,,,
 *        )) 
 */
re_frame.context.context_fns = (function re_frame$context$context_fns(var_args){
var G__88500 = arguments.length;
switch (G__88500) {
case 0:
return re_frame.context.context_fns.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.context.context_fns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.context.context_fns.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_frame.context.context_fns.cljs$core$IFn$_invoke$arity$1(re_frame.context.current_frame());
}));

(re_frame.context.context_fns.cljs$core$IFn$_invoke$arity$1 = (function (frame){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"subscribe","subscribe",416253756),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.frame.subscribe,frame),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.frame.dispatch,frame),new cljs.core.Keyword(null,"dispatch-sync","dispatch-sync",1664398243),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.frame.dispatch_sync,frame)], null);
}));

(re_frame.context.context_fns.cljs$lang$maxFixedArity = 1);

re_frame.context.bind_fn = (function re_frame$context$bind_fn(f){
var frame = re_frame.context.current_frame();
return (function() { 
var G__88604__delegate = function (args){
var _STAR_current_frame_STAR__orig_val__88508 = re_frame.registry._STAR_current_frame_STAR_;
var _STAR_current_frame_STAR__temp_val__88509 = frame;
(re_frame.registry._STAR_current_frame_STAR_ = _STAR_current_frame_STAR__temp_val__88509);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}finally {(re_frame.registry._STAR_current_frame_STAR_ = _STAR_current_frame_STAR__orig_val__88508);
}};
var G__88604 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__88608__i = 0, G__88608__a = new Array(arguments.length -  0);
while (G__88608__i < G__88608__a.length) {G__88608__a[G__88608__i] = arguments[G__88608__i + 0]; ++G__88608__i;}
  args = new cljs.core.IndexedSeq(G__88608__a,0,null);
} 
return G__88604__delegate.call(this,args);};
G__88604.cljs$lang$maxFixedArity = 0;
G__88604.cljs$lang$applyTo = (function (arglist__88610){
var args = cljs.core.seq(arglist__88610);
return G__88604__delegate(args);
});
G__88604.cljs$core$IFn$_invoke$arity$variadic = G__88604__delegate;
return G__88604;
})()
;
});

//# sourceMappingURL=re_frame.context.js.map
