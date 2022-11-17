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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__86768){
var map__86769 = p__86768;
var map__86769__$1 = cljs.core.__destructure_map(map__86769);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86769__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86769__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86769__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86769__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__86770_86805 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__86771_86806 = null;
var count__86772_86807 = (0);
var i__86773_86808 = (0);
while(true){
if((i__86773_86808 < count__86772_86807)){
var vec__86784_86809 = chunk__86771_86806.cljs$core$IIndexed$_nth$arity$2(null,i__86773_86808);
var k_86810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86784_86809,(0),null);
var cb_86811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86784_86809,(1),null);
try{var G__86788_86812 = cljs.core.deref(re_frame.trace.traces);
(cb_86811.cljs$core$IFn$_invoke$arity$1 ? cb_86811.cljs$core$IFn$_invoke$arity$1(G__86788_86812) : cb_86811.call(null,G__86788_86812));
}catch (e86787){var e_86813 = e86787;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_86810,"while storing",cljs.core.deref(re_frame.trace.traces),e_86813], 0));
}

var G__86815 = seq__86770_86805;
var G__86816 = chunk__86771_86806;
var G__86817 = count__86772_86807;
var G__86818 = (i__86773_86808 + (1));
seq__86770_86805 = G__86815;
chunk__86771_86806 = G__86816;
count__86772_86807 = G__86817;
i__86773_86808 = G__86818;
continue;
} else {
var temp__5753__auto___86822 = cljs.core.seq(seq__86770_86805);
if(temp__5753__auto___86822){
var seq__86770_86823__$1 = temp__5753__auto___86822;
if(cljs.core.chunked_seq_QMARK_(seq__86770_86823__$1)){
var c__4679__auto___86824 = cljs.core.chunk_first(seq__86770_86823__$1);
var G__86825 = cljs.core.chunk_rest(seq__86770_86823__$1);
var G__86826 = c__4679__auto___86824;
var G__86827 = cljs.core.count(c__4679__auto___86824);
var G__86828 = (0);
seq__86770_86805 = G__86825;
chunk__86771_86806 = G__86826;
count__86772_86807 = G__86827;
i__86773_86808 = G__86828;
continue;
} else {
var vec__86791_86829 = cljs.core.first(seq__86770_86823__$1);
var k_86830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86791_86829,(0),null);
var cb_86831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86791_86829,(1),null);
try{var G__86795_86832 = cljs.core.deref(re_frame.trace.traces);
(cb_86831.cljs$core$IFn$_invoke$arity$1 ? cb_86831.cljs$core$IFn$_invoke$arity$1(G__86795_86832) : cb_86831.call(null,G__86795_86832));
}catch (e86794){var e_86833 = e86794;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_86830,"while storing",cljs.core.deref(re_frame.trace.traces),e_86833], 0));
}

var G__86834 = cljs.core.next(seq__86770_86823__$1);
var G__86835 = null;
var G__86836 = (0);
var G__86837 = (0);
seq__86770_86805 = G__86834;
chunk__86771_86806 = G__86835;
count__86772_86807 = G__86836;
i__86773_86808 = G__86837;
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
