goog.provide('re_frame.core');
re_frame.core.__GT_interceptor = re_frame.interceptor.__GT_interceptor;
re_frame.core.enqueue = re_frame.interceptor.enqueue;
re_frame.core.get_coeffect = re_frame.interceptor.get_coeffect;
re_frame.core.get_effect = re_frame.interceptor.get_effect;
re_frame.core.assoc_effect = re_frame.interceptor.assoc_effect;
re_frame.core.assoc_coeffect = re_frame.interceptor.assoc_coeffect;
re_frame.core.debug = re_frame.std_interceptors.debug;
re_frame.core.path = re_frame.std_interceptors.path;
re_frame.core.enrich = re_frame.std_interceptors.enrich;
re_frame.core.trim_v = re_frame.std_interceptors.trim_v;
re_frame.core.after = re_frame.std_interceptors.after;
re_frame.core.on_changes = re_frame.std_interceptors.on_changes;
re_frame.core.default_frame = re_frame.frame.make_frame();
re_frame.fx.register_built_in_BANG_(re_frame.core.default_frame);
re_frame.cofx.register_built_in_BANG_(re_frame.core.default_frame);
re_frame.core.dispatch = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.frame.dispatch,re_frame.core.default_frame);
re_frame.core.dispatch_sync = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.frame.dispatch_sync,re_frame.core.default_frame);
re_frame.core.reg_sub_raw = (function re_frame$core$reg_sub_raw(query_id,handler_fn){
return re_frame.core.default_frame.re_frame$frame$IFrame$reg_sub_raw$arity$3(null,query_id,(function (frame,query_v){
var G__88825 = new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(frame);
var G__88826 = query_v;
return (handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(G__88825,G__88826) : handler_fn.call(null,G__88825,G__88826));
}));
});
re_frame.core.reg_sub = (function re_frame$core$reg_sub(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88832 = arguments.length;
var i__4865__auto___88833 = (0);
while(true){
if((i__4865__auto___88833 < len__4864__auto___88832)){
args__4870__auto__.push((arguments[i__4865__auto___88833]));

var G__88834 = (i__4865__auto___88833 + (1));
i__4865__auto___88833 = G__88834;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
return re_frame.core.default_frame.re_frame$frame$IFrame$reg_sub$arity$3(null,query_id,args);
}));

(re_frame.core.reg_sub.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frame.core.reg_sub.cljs$lang$applyTo = (function (seq88827){
var G__88828 = cljs.core.first(seq88827);
var seq88827__$1 = cljs.core.next(seq88827);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__88828,seq88827__$1);
}));

re_frame.core.subscribe = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.frame.subscribe,re_frame.core.default_frame);
re_frame.core.clear_sub = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.frame.clear_sub,re_frame.core.default_frame);
re_frame.core.clear_subscriptions_cache_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.subs._clear,re_frame.core.default_frame.subs_cache);
re_frame.core.reg_fx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.frame.reg_fx,re_frame.core.default_frame);
re_frame.core.clear_fx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.frame.clear_fx,re_frame.core.default_frame);
re_frame.core.reg_cofx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.frame.reg_cofx,re_frame.core.default_frame);
re_frame.core.inject_cofx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.frame.inject_cofx,re_frame.core.default_frame);
re_frame.core.clear_cofx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.frame.clear_cofx,re_frame.core.default_frame);
re_frame.core.reg_event_db = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.frame.reg_event_db,re_frame.core.default_frame);
re_frame.core.reg_event_fx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.frame.reg_event_fx,re_frame.core.default_frame);
re_frame.core.reg_event_ctx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.frame.reg_event_ctx,re_frame.core.default_frame);
re_frame.core.clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.frame.clear_event,re_frame.core.default_frame);
re_frame.core.set_loggers_BANG_ = re_frame.loggers.set_loggers_BANG_;
re_frame.core.console = re_frame.loggers.console;
/**
 * Checkpoints the state of re-frame and returns a function which, when
 *   later called, will restore re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 */
re_frame.core.make_restore_fn = (function re_frame$core$make_restore_fn(){
return re_frame.frame.make_restore_fn(re_frame.core.default_frame);
});
/**
 * Remove all events queued for processing
 */
re_frame.core.purge_event_queue = (function re_frame$core$purge_event_queue(){
return re_frame.router.purge(re_frame.core.default_frame.event_queue);
});
/**
 * Registers a function `f` to be called after each event is processed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 */
re_frame.core.add_post_event_callback = (function re_frame$core$add_post_event_callback(var_args){
var G__88831 = arguments.length;
switch (G__88831) {
case 1:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2(f,f);
}));

(re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return re_frame.router.add_post_event_callback(re_frame.core.default_frame.event_queue,id,f);
}));

(re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2);

re_frame.core.remove_post_event_callback = (function re_frame$core$remove_post_event_callback(id){
return re_frame.router.remove_post_event_callback(re_frame.core.default_frame.event_queue,id);
});

//# sourceMappingURL=re_frame.core.js.map
