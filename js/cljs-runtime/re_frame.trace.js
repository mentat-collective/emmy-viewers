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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__87236){
var map__87237 = p__87236;
var map__87237__$1 = cljs.core.__destructure_map(map__87237);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87237__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87237__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87237__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87237__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__87238_87265 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__87239_87266 = null;
var count__87240_87267 = (0);
var i__87241_87268 = (0);
while(true){
if((i__87241_87268 < count__87240_87267)){
var vec__87252_87269 = chunk__87239_87266.cljs$core$IIndexed$_nth$arity$2(null,i__87241_87268);
var k_87270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87252_87269,(0),null);
var cb_87271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87252_87269,(1),null);
try{var G__87256_87272 = cljs.core.deref(re_frame.trace.traces);
(cb_87271.cljs$core$IFn$_invoke$arity$1 ? cb_87271.cljs$core$IFn$_invoke$arity$1(G__87256_87272) : cb_87271.call(null,G__87256_87272));
}catch (e87255){var e_87273 = e87255;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_87270,"while storing",cljs.core.deref(re_frame.trace.traces),e_87273], 0));
}

var G__87274 = seq__87238_87265;
var G__87275 = chunk__87239_87266;
var G__87276 = count__87240_87267;
var G__87277 = (i__87241_87268 + (1));
seq__87238_87265 = G__87274;
chunk__87239_87266 = G__87275;
count__87240_87267 = G__87276;
i__87241_87268 = G__87277;
continue;
} else {
var temp__5753__auto___87278 = cljs.core.seq(seq__87238_87265);
if(temp__5753__auto___87278){
var seq__87238_87279__$1 = temp__5753__auto___87278;
if(cljs.core.chunked_seq_QMARK_(seq__87238_87279__$1)){
var c__4679__auto___87280 = cljs.core.chunk_first(seq__87238_87279__$1);
var G__87281 = cljs.core.chunk_rest(seq__87238_87279__$1);
var G__87282 = c__4679__auto___87280;
var G__87283 = cljs.core.count(c__4679__auto___87280);
var G__87284 = (0);
seq__87238_87265 = G__87281;
chunk__87239_87266 = G__87282;
count__87240_87267 = G__87283;
i__87241_87268 = G__87284;
continue;
} else {
var vec__87257_87285 = cljs.core.first(seq__87238_87279__$1);
var k_87286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87257_87285,(0),null);
var cb_87287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87257_87285,(1),null);
try{var G__87261_87288 = cljs.core.deref(re_frame.trace.traces);
(cb_87287.cljs$core$IFn$_invoke$arity$1 ? cb_87287.cljs$core$IFn$_invoke$arity$1(G__87261_87288) : cb_87287.call(null,G__87261_87288));
}catch (e87260){var e_87289 = e87260;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_87286,"while storing",cljs.core.deref(re_frame.trace.traces),e_87289], 0));
}

var G__87290 = cljs.core.next(seq__87238_87279__$1);
var G__87291 = null;
var G__87292 = (0);
var G__87293 = (0);
seq__87238_87265 = G__87290;
chunk__87239_87266 = G__87291;
count__87240_87267 = G__87292;
i__87241_87268 = G__87293;
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
