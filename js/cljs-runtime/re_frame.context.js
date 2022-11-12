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
var len__4864__auto___66269 = arguments.length;
var i__4865__auto___66270 = (0);
while(true){
if((i__4865__auto___66270 < len__4864__auto___66269)){
args__4870__auto__.push((arguments[i__4865__auto___66270]));

var G__66271 = (i__4865__auto___66270 + (1));
i__4865__auto___66270 = G__66271;
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
(re_frame.context.provide_frame.cljs$lang$applyTo = (function (seq66196){
var G__66197 = cljs.core.first(seq66196);
var seq66196__$1 = cljs.core.next(seq66196);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66197,seq66196__$1);
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
var G__66274__i = 0, G__66274__a = new Array(arguments.length -  1);
while (G__66274__i < G__66274__a.length) {G__66274__a[G__66274__i] = arguments[G__66274__i + 1]; ++G__66274__i;}
  children = new cljs.core.IndexedSeq(G__66274__a,0,null);
} 
return re_frame$context$provide_app_db__delegate.call(this,app_db,children);};
re_frame$context$provide_app_db.cljs$lang$maxFixedArity = 1;
re_frame$context$provide_app_db.cljs$lang$applyTo = (function (arglist__66275){
var app_db = cljs.core.first(arglist__66275);
var children = cljs.core.rest(arglist__66275);
return re_frame$context$provide_app_db__delegate(app_db,children);
});
re_frame$context$provide_app_db.cljs$core$IFn$_invoke$arity$variadic = re_frame$context$provide_app_db__delegate;
return re_frame$context$provide_app_db;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"context-type","context-type",-1445212185),re_frame.context.frame_context], null));
re_frame.context.subscribe = (function re_frame$context$subscribe(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66277 = arguments.length;
var i__4865__auto___66278 = (0);
while(true){
if((i__4865__auto___66278 < len__4864__auto___66277)){
args__4870__auto__.push((arguments[i__4865__auto___66278]));

var G__66279 = (i__4865__auto___66278 + (1));
i__4865__auto___66278 = G__66279;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.subscribe.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.subscribe.cljs$core$IFn$_invoke$arity$variadic = (function (args__66181__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.subscribe,re_frame.context.current_frame(),args__66181__auto__);
}));

(re_frame.context.subscribe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.subscribe.cljs$lang$applyTo = (function (seq66200){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66200));
}));

re_frame.context.dispatch = (function re_frame$context$dispatch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66290 = arguments.length;
var i__4865__auto___66291 = (0);
while(true){
if((i__4865__auto___66291 < len__4864__auto___66290)){
args__4870__auto__.push((arguments[i__4865__auto___66291]));

var G__66292 = (i__4865__auto___66291 + (1));
i__4865__auto___66291 = G__66292;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.dispatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.dispatch.cljs$core$IFn$_invoke$arity$variadic = (function (args__66181__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.dispatch,re_frame.context.current_frame(),args__66181__auto__);
}));

(re_frame.context.dispatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.dispatch.cljs$lang$applyTo = (function (seq66203){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66203));
}));

re_frame.context.dispatch_sync = (function re_frame$context$dispatch_sync(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66295 = arguments.length;
var i__4865__auto___66296 = (0);
while(true){
if((i__4865__auto___66296 < len__4864__auto___66295)){
args__4870__auto__.push((arguments[i__4865__auto___66296]));

var G__66297 = (i__4865__auto___66296 + (1));
i__4865__auto___66296 = G__66297;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.dispatch_sync.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.dispatch_sync.cljs$core$IFn$_invoke$arity$variadic = (function (args__66181__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.dispatch_sync,re_frame.context.current_frame(),args__66181__auto__);
}));

(re_frame.context.dispatch_sync.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.dispatch_sync.cljs$lang$applyTo = (function (seq66204){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66204));
}));

re_frame.context.clear_sub = (function re_frame$context$clear_sub(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66300 = arguments.length;
var i__4865__auto___66301 = (0);
while(true){
if((i__4865__auto___66301 < len__4864__auto___66300)){
args__4870__auto__.push((arguments[i__4865__auto___66301]));

var G__66303 = (i__4865__auto___66301 + (1));
i__4865__auto___66301 = G__66303;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.clear_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.clear_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args__66181__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.clear_sub,re_frame.context.current_frame(),args__66181__auto__);
}));

(re_frame.context.clear_sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.clear_sub.cljs$lang$applyTo = (function (seq66208){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66208));
}));

re_frame.context.reg_fx = (function re_frame$context$reg_fx(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66309 = arguments.length;
var i__4865__auto___66310 = (0);
while(true){
if((i__4865__auto___66310 < len__4864__auto___66309)){
args__4870__auto__.push((arguments[i__4865__auto___66310]));

var G__66311 = (i__4865__auto___66310 + (1));
i__4865__auto___66310 = G__66311;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.reg_fx.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.reg_fx.cljs$core$IFn$_invoke$arity$variadic = (function (args__66181__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.reg_fx,re_frame.context.current_frame(),args__66181__auto__);
}));

(re_frame.context.reg_fx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.reg_fx.cljs$lang$applyTo = (function (seq66212){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66212));
}));

re_frame.context.reg_cofx = (function re_frame$context$reg_cofx(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66312 = arguments.length;
var i__4865__auto___66313 = (0);
while(true){
if((i__4865__auto___66313 < len__4864__auto___66312)){
args__4870__auto__.push((arguments[i__4865__auto___66313]));

var G__66314 = (i__4865__auto___66313 + (1));
i__4865__auto___66313 = G__66314;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.reg_cofx.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.reg_cofx.cljs$core$IFn$_invoke$arity$variadic = (function (args__66181__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.reg_cofx,re_frame.context.current_frame(),args__66181__auto__);
}));

(re_frame.context.reg_cofx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.reg_cofx.cljs$lang$applyTo = (function (seq66214){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66214));
}));

re_frame.context.inject_cofx = (function re_frame$context$inject_cofx(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66317 = arguments.length;
var i__4865__auto___66318 = (0);
while(true){
if((i__4865__auto___66318 < len__4864__auto___66317)){
args__4870__auto__.push((arguments[i__4865__auto___66318]));

var G__66319 = (i__4865__auto___66318 + (1));
i__4865__auto___66318 = G__66319;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.inject_cofx.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.inject_cofx.cljs$core$IFn$_invoke$arity$variadic = (function (args__66181__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.inject_cofx,re_frame.context.current_frame(),args__66181__auto__);
}));

(re_frame.context.inject_cofx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.inject_cofx.cljs$lang$applyTo = (function (seq66223){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66223));
}));

re_frame.context.clear_cofx = (function re_frame$context$clear_cofx(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66321 = arguments.length;
var i__4865__auto___66323 = (0);
while(true){
if((i__4865__auto___66323 < len__4864__auto___66321)){
args__4870__auto__.push((arguments[i__4865__auto___66323]));

var G__66324 = (i__4865__auto___66323 + (1));
i__4865__auto___66323 = G__66324;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.clear_cofx.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.clear_cofx.cljs$core$IFn$_invoke$arity$variadic = (function (args__66181__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.clear_cofx,re_frame.context.current_frame(),args__66181__auto__);
}));

(re_frame.context.clear_cofx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.clear_cofx.cljs$lang$applyTo = (function (seq66224){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66224));
}));

re_frame.context.reg_event_db = (function re_frame$context$reg_event_db(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66329 = arguments.length;
var i__4865__auto___66332 = (0);
while(true){
if((i__4865__auto___66332 < len__4864__auto___66329)){
args__4870__auto__.push((arguments[i__4865__auto___66332]));

var G__66334 = (i__4865__auto___66332 + (1));
i__4865__auto___66332 = G__66334;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.reg_event_db.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.reg_event_db.cljs$core$IFn$_invoke$arity$variadic = (function (args__66181__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.reg_event_db,re_frame.context.current_frame(),args__66181__auto__);
}));

(re_frame.context.reg_event_db.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.reg_event_db.cljs$lang$applyTo = (function (seq66226){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66226));
}));

re_frame.context.reg_event_fx = (function re_frame$context$reg_event_fx(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66340 = arguments.length;
var i__4865__auto___66341 = (0);
while(true){
if((i__4865__auto___66341 < len__4864__auto___66340)){
args__4870__auto__.push((arguments[i__4865__auto___66341]));

var G__66344 = (i__4865__auto___66341 + (1));
i__4865__auto___66341 = G__66344;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.reg_event_fx.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.reg_event_fx.cljs$core$IFn$_invoke$arity$variadic = (function (args__66181__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.reg_event_fx,re_frame.context.current_frame(),args__66181__auto__);
}));

(re_frame.context.reg_event_fx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.reg_event_fx.cljs$lang$applyTo = (function (seq66231){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66231));
}));

re_frame.context.reg_event_ctx = (function re_frame$context$reg_event_ctx(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66349 = arguments.length;
var i__4865__auto___66350 = (0);
while(true){
if((i__4865__auto___66350 < len__4864__auto___66349)){
args__4870__auto__.push((arguments[i__4865__auto___66350]));

var G__66351 = (i__4865__auto___66350 + (1));
i__4865__auto___66350 = G__66351;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.reg_event_ctx.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.reg_event_ctx.cljs$core$IFn$_invoke$arity$variadic = (function (args__66181__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.reg_event_ctx,re_frame.context.current_frame(),args__66181__auto__);
}));

(re_frame.context.reg_event_ctx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.reg_event_ctx.cljs$lang$applyTo = (function (seq66236){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66236));
}));

re_frame.context.clear_event = (function re_frame$context$clear_event(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66359 = arguments.length;
var i__4865__auto___66360 = (0);
while(true){
if((i__4865__auto___66360 < len__4864__auto___66359)){
args__4870__auto__.push((arguments[i__4865__auto___66360]));

var G__66362 = (i__4865__auto___66360 + (1));
i__4865__auto___66360 = G__66362;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.clear_event.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.clear_event.cljs$core$IFn$_invoke$arity$variadic = (function (args__66181__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.clear_event,re_frame.context.current_frame(),args__66181__auto__);
}));

(re_frame.context.clear_event.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.clear_event.cljs$lang$applyTo = (function (seq66242){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66242));
}));

re_frame.context.reg_sub_raw = (function re_frame$context$reg_sub_raw(query_id,handler_fn){
return re_frame.frame.reg_sub_raw(re_frame.context.current_frame(),query_id,(function (frame,query_v){
var G__66244 = new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(frame);
var G__66245 = query_v;
return (handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(G__66244,G__66245) : handler_fn.call(null,G__66244,G__66245));
}));
});
re_frame.context.reg_sub = (function re_frame$context$reg_sub(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66367 = arguments.length;
var i__4865__auto___66368 = (0);
while(true){
if((i__4865__auto___66368 < len__4864__auto___66367)){
args__4870__auto__.push((arguments[i__4865__auto___66368]));

var G__66369 = (i__4865__auto___66368 + (1));
i__4865__auto___66368 = G__66369;
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
(re_frame.context.reg_sub.cljs$lang$applyTo = (function (seq66246){
var G__66247 = cljs.core.first(seq66246);
var seq66246__$1 = cljs.core.next(seq66246);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66247,seq66246__$1);
}));

re_frame.context.clear_subscriptions_cache_BANG_ = (function re_frame$context$clear_subscriptions_cache_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66371 = arguments.length;
var i__4865__auto___66372 = (0);
while(true){
if((i__4865__auto___66372 < len__4864__auto___66371)){
args__4870__auto__.push((arguments[i__4865__auto___66372]));

var G__66374 = (i__4865__auto___66372 + (1));
i__4865__auto___66372 = G__66374;
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
(re_frame.context.clear_subscriptions_cache_BANG_.cljs$lang$applyTo = (function (seq66251){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66251));
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
var G__66259 = arguments.length;
switch (G__66259) {
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
var G__66382__delegate = function (args){
var _STAR_current_frame_STAR__orig_val__66263 = re_frame.registry._STAR_current_frame_STAR_;
var _STAR_current_frame_STAR__temp_val__66264 = frame;
(re_frame.registry._STAR_current_frame_STAR_ = _STAR_current_frame_STAR__temp_val__66264);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}finally {(re_frame.registry._STAR_current_frame_STAR_ = _STAR_current_frame_STAR__orig_val__66263);
}};
var G__66382 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66383__i = 0, G__66383__a = new Array(arguments.length -  0);
while (G__66383__i < G__66383__a.length) {G__66383__a[G__66383__i] = arguments[G__66383__i + 0]; ++G__66383__i;}
  args = new cljs.core.IndexedSeq(G__66383__a,0,null);
} 
return G__66382__delegate.call(this,args);};
G__66382.cljs$lang$maxFixedArity = 0;
G__66382.cljs$lang$applyTo = (function (arglist__66384){
var args = cljs.core.seq(arglist__66384);
return G__66382__delegate(args);
});
G__66382.cljs$core$IFn$_invoke$arity$variadic = G__66382__delegate;
return G__66382;
})()
;
});

//# sourceMappingURL=re_frame.context.js.map
