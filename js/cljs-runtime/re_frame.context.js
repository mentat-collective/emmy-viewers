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
var len__4864__auto___88953 = arguments.length;
var i__4865__auto___88954 = (0);
while(true){
if((i__4865__auto___88954 < len__4864__auto___88953)){
args__4870__auto__.push((arguments[i__4865__auto___88954]));

var G__88955 = (i__4865__auto___88954 + (1));
i__4865__auto___88954 = G__88955;
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
(re_frame.context.provide_frame.cljs$lang$applyTo = (function (seq88885){
var G__88886 = cljs.core.first(seq88885);
var seq88885__$1 = cljs.core.next(seq88885);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__88886,seq88885__$1);
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
var G__88957__i = 0, G__88957__a = new Array(arguments.length -  1);
while (G__88957__i < G__88957__a.length) {G__88957__a[G__88957__i] = arguments[G__88957__i + 1]; ++G__88957__i;}
  children = new cljs.core.IndexedSeq(G__88957__a,0,null);
} 
return re_frame$context$provide_app_db__delegate.call(this,app_db,children);};
re_frame$context$provide_app_db.cljs$lang$maxFixedArity = 1;
re_frame$context$provide_app_db.cljs$lang$applyTo = (function (arglist__88958){
var app_db = cljs.core.first(arglist__88958);
var children = cljs.core.rest(arglist__88958);
return re_frame$context$provide_app_db__delegate(app_db,children);
});
re_frame$context$provide_app_db.cljs$core$IFn$_invoke$arity$variadic = re_frame$context$provide_app_db__delegate;
return re_frame$context$provide_app_db;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"context-type","context-type",-1445212185),re_frame.context.frame_context], null));
re_frame.context.subscribe = (function re_frame$context$subscribe(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88960 = arguments.length;
var i__4865__auto___88961 = (0);
while(true){
if((i__4865__auto___88961 < len__4864__auto___88960)){
args__4870__auto__.push((arguments[i__4865__auto___88961]));

var G__88962 = (i__4865__auto___88961 + (1));
i__4865__auto___88961 = G__88962;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.subscribe.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.subscribe.cljs$core$IFn$_invoke$arity$variadic = (function (args__88870__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.subscribe,re_frame.context.current_frame(),args__88870__auto__);
}));

(re_frame.context.subscribe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.subscribe.cljs$lang$applyTo = (function (seq88889){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88889));
}));

re_frame.context.dispatch = (function re_frame$context$dispatch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88963 = arguments.length;
var i__4865__auto___88964 = (0);
while(true){
if((i__4865__auto___88964 < len__4864__auto___88963)){
args__4870__auto__.push((arguments[i__4865__auto___88964]));

var G__88965 = (i__4865__auto___88964 + (1));
i__4865__auto___88964 = G__88965;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.dispatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.dispatch.cljs$core$IFn$_invoke$arity$variadic = (function (args__88870__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.dispatch,re_frame.context.current_frame(),args__88870__auto__);
}));

(re_frame.context.dispatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.dispatch.cljs$lang$applyTo = (function (seq88892){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88892));
}));

re_frame.context.dispatch_sync = (function re_frame$context$dispatch_sync(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88966 = arguments.length;
var i__4865__auto___88967 = (0);
while(true){
if((i__4865__auto___88967 < len__4864__auto___88966)){
args__4870__auto__.push((arguments[i__4865__auto___88967]));

var G__88968 = (i__4865__auto___88967 + (1));
i__4865__auto___88967 = G__88968;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.dispatch_sync.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.dispatch_sync.cljs$core$IFn$_invoke$arity$variadic = (function (args__88870__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.dispatch_sync,re_frame.context.current_frame(),args__88870__auto__);
}));

(re_frame.context.dispatch_sync.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.dispatch_sync.cljs$lang$applyTo = (function (seq88893){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88893));
}));

re_frame.context.clear_sub = (function re_frame$context$clear_sub(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88970 = arguments.length;
var i__4865__auto___88971 = (0);
while(true){
if((i__4865__auto___88971 < len__4864__auto___88970)){
args__4870__auto__.push((arguments[i__4865__auto___88971]));

var G__88973 = (i__4865__auto___88971 + (1));
i__4865__auto___88971 = G__88973;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.clear_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.clear_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args__88870__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.clear_sub,re_frame.context.current_frame(),args__88870__auto__);
}));

(re_frame.context.clear_sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.clear_sub.cljs$lang$applyTo = (function (seq88896){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88896));
}));

re_frame.context.reg_fx = (function re_frame$context$reg_fx(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88976 = arguments.length;
var i__4865__auto___88977 = (0);
while(true){
if((i__4865__auto___88977 < len__4864__auto___88976)){
args__4870__auto__.push((arguments[i__4865__auto___88977]));

var G__88978 = (i__4865__auto___88977 + (1));
i__4865__auto___88977 = G__88978;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.reg_fx.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.reg_fx.cljs$core$IFn$_invoke$arity$variadic = (function (args__88870__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.reg_fx,re_frame.context.current_frame(),args__88870__auto__);
}));

(re_frame.context.reg_fx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.reg_fx.cljs$lang$applyTo = (function (seq88901){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88901));
}));

re_frame.context.reg_cofx = (function re_frame$context$reg_cofx(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88980 = arguments.length;
var i__4865__auto___88981 = (0);
while(true){
if((i__4865__auto___88981 < len__4864__auto___88980)){
args__4870__auto__.push((arguments[i__4865__auto___88981]));

var G__88983 = (i__4865__auto___88981 + (1));
i__4865__auto___88981 = G__88983;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.reg_cofx.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.reg_cofx.cljs$core$IFn$_invoke$arity$variadic = (function (args__88870__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.reg_cofx,re_frame.context.current_frame(),args__88870__auto__);
}));

(re_frame.context.reg_cofx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.reg_cofx.cljs$lang$applyTo = (function (seq88902){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88902));
}));

re_frame.context.inject_cofx = (function re_frame$context$inject_cofx(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88986 = arguments.length;
var i__4865__auto___88987 = (0);
while(true){
if((i__4865__auto___88987 < len__4864__auto___88986)){
args__4870__auto__.push((arguments[i__4865__auto___88987]));

var G__88988 = (i__4865__auto___88987 + (1));
i__4865__auto___88987 = G__88988;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.inject_cofx.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.inject_cofx.cljs$core$IFn$_invoke$arity$variadic = (function (args__88870__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.inject_cofx,re_frame.context.current_frame(),args__88870__auto__);
}));

(re_frame.context.inject_cofx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.inject_cofx.cljs$lang$applyTo = (function (seq88903){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88903));
}));

re_frame.context.clear_cofx = (function re_frame$context$clear_cofx(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88989 = arguments.length;
var i__4865__auto___88990 = (0);
while(true){
if((i__4865__auto___88990 < len__4864__auto___88989)){
args__4870__auto__.push((arguments[i__4865__auto___88990]));

var G__88991 = (i__4865__auto___88990 + (1));
i__4865__auto___88990 = G__88991;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.clear_cofx.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.clear_cofx.cljs$core$IFn$_invoke$arity$variadic = (function (args__88870__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.clear_cofx,re_frame.context.current_frame(),args__88870__auto__);
}));

(re_frame.context.clear_cofx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.clear_cofx.cljs$lang$applyTo = (function (seq88908){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88908));
}));

re_frame.context.reg_event_db = (function re_frame$context$reg_event_db(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88992 = arguments.length;
var i__4865__auto___88993 = (0);
while(true){
if((i__4865__auto___88993 < len__4864__auto___88992)){
args__4870__auto__.push((arguments[i__4865__auto___88993]));

var G__88994 = (i__4865__auto___88993 + (1));
i__4865__auto___88993 = G__88994;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.reg_event_db.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.reg_event_db.cljs$core$IFn$_invoke$arity$variadic = (function (args__88870__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.reg_event_db,re_frame.context.current_frame(),args__88870__auto__);
}));

(re_frame.context.reg_event_db.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.reg_event_db.cljs$lang$applyTo = (function (seq88914){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88914));
}));

re_frame.context.reg_event_fx = (function re_frame$context$reg_event_fx(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88995 = arguments.length;
var i__4865__auto___88996 = (0);
while(true){
if((i__4865__auto___88996 < len__4864__auto___88995)){
args__4870__auto__.push((arguments[i__4865__auto___88996]));

var G__88997 = (i__4865__auto___88996 + (1));
i__4865__auto___88996 = G__88997;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.reg_event_fx.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.reg_event_fx.cljs$core$IFn$_invoke$arity$variadic = (function (args__88870__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.reg_event_fx,re_frame.context.current_frame(),args__88870__auto__);
}));

(re_frame.context.reg_event_fx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.reg_event_fx.cljs$lang$applyTo = (function (seq88915){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88915));
}));

re_frame.context.reg_event_ctx = (function re_frame$context$reg_event_ctx(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88998 = arguments.length;
var i__4865__auto___88999 = (0);
while(true){
if((i__4865__auto___88999 < len__4864__auto___88998)){
args__4870__auto__.push((arguments[i__4865__auto___88999]));

var G__89002 = (i__4865__auto___88999 + (1));
i__4865__auto___88999 = G__89002;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.reg_event_ctx.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.reg_event_ctx.cljs$core$IFn$_invoke$arity$variadic = (function (args__88870__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.reg_event_ctx,re_frame.context.current_frame(),args__88870__auto__);
}));

(re_frame.context.reg_event_ctx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.reg_event_ctx.cljs$lang$applyTo = (function (seq88918){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88918));
}));

re_frame.context.clear_event = (function re_frame$context$clear_event(var_args){
var args__4870__auto__ = [];
var len__4864__auto___89005 = arguments.length;
var i__4865__auto___89006 = (0);
while(true){
if((i__4865__auto___89006 < len__4864__auto___89005)){
args__4870__auto__.push((arguments[i__4865__auto___89006]));

var G__89007 = (i__4865__auto___89006 + (1));
i__4865__auto___89006 = G__89007;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.context.clear_event.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.context.clear_event.cljs$core$IFn$_invoke$arity$variadic = (function (args__88870__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.clear_event,re_frame.context.current_frame(),args__88870__auto__);
}));

(re_frame.context.clear_event.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.clear_event.cljs$lang$applyTo = (function (seq88923){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88923));
}));

re_frame.context.reg_sub_raw = (function re_frame$context$reg_sub_raw(query_id,handler_fn){
return re_frame.frame.reg_sub_raw(re_frame.context.current_frame(),query_id,(function (frame,query_v){
var G__88930 = new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(frame);
var G__88931 = query_v;
return (handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(G__88930,G__88931) : handler_fn.call(null,G__88930,G__88931));
}));
});
re_frame.context.reg_sub = (function re_frame$context$reg_sub(var_args){
var args__4870__auto__ = [];
var len__4864__auto___89009 = arguments.length;
var i__4865__auto___89010 = (0);
while(true){
if((i__4865__auto___89010 < len__4864__auto___89009)){
args__4870__auto__.push((arguments[i__4865__auto___89010]));

var G__89011 = (i__4865__auto___89010 + (1));
i__4865__auto___89010 = G__89011;
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
(re_frame.context.reg_sub.cljs$lang$applyTo = (function (seq88932){
var G__88933 = cljs.core.first(seq88932);
var seq88932__$1 = cljs.core.next(seq88932);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__88933,seq88932__$1);
}));

re_frame.context.clear_subscriptions_cache_BANG_ = (function re_frame$context$clear_subscriptions_cache_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___89015 = arguments.length;
var i__4865__auto___89016 = (0);
while(true){
if((i__4865__auto___89016 < len__4864__auto___89015)){
args__4870__auto__.push((arguments[i__4865__auto___89016]));

var G__89020 = (i__4865__auto___89016 + (1));
i__4865__auto___89016 = G__89020;
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
(re_frame.context.clear_subscriptions_cache_BANG_.cljs$lang$applyTo = (function (seq88937){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88937));
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
var G__88940 = arguments.length;
switch (G__88940) {
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
var G__89030__delegate = function (args){
var _STAR_current_frame_STAR__orig_val__88941 = re_frame.registry._STAR_current_frame_STAR_;
var _STAR_current_frame_STAR__temp_val__88942 = frame;
(re_frame.registry._STAR_current_frame_STAR_ = _STAR_current_frame_STAR__temp_val__88942);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}finally {(re_frame.registry._STAR_current_frame_STAR_ = _STAR_current_frame_STAR__orig_val__88941);
}};
var G__89030 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__89033__i = 0, G__89033__a = new Array(arguments.length -  0);
while (G__89033__i < G__89033__a.length) {G__89033__a[G__89033__i] = arguments[G__89033__i + 0]; ++G__89033__i;}
  args = new cljs.core.IndexedSeq(G__89033__a,0,null);
} 
return G__89030__delegate.call(this,args);};
G__89030.cljs$lang$maxFixedArity = 0;
G__89030.cljs$lang$applyTo = (function (arglist__89034){
var args = cljs.core.seq(arglist__89034);
return G__89030__delegate(args);
});
G__89030.cljs$core$IFn$_invoke$arity$variadic = G__89030__delegate;
return G__89030;
})()
;
});

//# sourceMappingURL=re_frame.context.js.map
