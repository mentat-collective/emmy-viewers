goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__64519){
var map__64520 = p__64519;
var map__64520__$1 = cljs.core.__destructure_map(map__64520);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64520__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64520__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64520__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64520__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4253__auto__ = child_of;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__64523_64557 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__64524_64558 = null;
var count__64525_64559 = (0);
var i__64526_64560 = (0);
while(true){
if((i__64526_64560 < count__64525_64559)){
var vec__64537_64561 = chunk__64524_64558.cljs$core$IIndexed$_nth$arity$2(null,i__64526_64560);
var k_64562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64537_64561,(0),null);
var cb_64563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64537_64561,(1),null);
try{var G__64541_64564 = cljs.core.deref(re_frame.trace.traces);
(cb_64563.cljs$core$IFn$_invoke$arity$1 ? cb_64563.cljs$core$IFn$_invoke$arity$1(G__64541_64564) : cb_64563.call(null,G__64541_64564));
}catch (e64540){var e_64565 = e64540;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_64562,"while storing",cljs.core.deref(re_frame.trace.traces),e_64565], 0));
}

var G__64566 = seq__64523_64557;
var G__64567 = chunk__64524_64558;
var G__64568 = count__64525_64559;
var G__64569 = (i__64526_64560 + (1));
seq__64523_64557 = G__64566;
chunk__64524_64558 = G__64567;
count__64525_64559 = G__64568;
i__64526_64560 = G__64569;
continue;
} else {
var temp__5753__auto___64570 = cljs.core.seq(seq__64523_64557);
if(temp__5753__auto___64570){
var seq__64523_64571__$1 = temp__5753__auto___64570;
if(cljs.core.chunked_seq_QMARK_(seq__64523_64571__$1)){
var c__4679__auto___64572 = cljs.core.chunk_first(seq__64523_64571__$1);
var G__64573 = cljs.core.chunk_rest(seq__64523_64571__$1);
var G__64574 = c__4679__auto___64572;
var G__64575 = cljs.core.count(c__4679__auto___64572);
var G__64576 = (0);
seq__64523_64557 = G__64573;
chunk__64524_64558 = G__64574;
count__64525_64559 = G__64575;
i__64526_64560 = G__64576;
continue;
} else {
var vec__64542_64578 = cljs.core.first(seq__64523_64571__$1);
var k_64579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64542_64578,(0),null);
var cb_64580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64542_64578,(1),null);
try{var G__64546_64581 = cljs.core.deref(re_frame.trace.traces);
(cb_64580.cljs$core$IFn$_invoke$arity$1 ? cb_64580.cljs$core$IFn$_invoke$arity$1(G__64546_64581) : cb_64580.call(null,G__64546_64581));
}catch (e64545){var e_64582 = e64545;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_64579,"while storing",cljs.core.deref(re_frame.trace.traces),e_64582], 0));
}

var G__64583 = cljs.core.next(seq__64523_64571__$1);
var G__64584 = null;
var G__64585 = (0);
var G__64586 = (0);
seq__64523_64557 = G__64583;
chunk__64524_64558 = G__64584;
count__64525_64559 = G__64585;
i__64526_64560 = G__64586;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
