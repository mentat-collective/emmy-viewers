goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registry.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registry.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registry.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registry/kinds kind)"));
}
re_frame.fx.register_built_in_BANG_ = (function re_frame$fx$register_built_in_BANG_(p__87075){
var map__87077 = p__87075;
var map__87077__$1 = cljs.core.__destructure_map(map__87077);
var registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87077__$1,new cljs.core.Keyword(null,"registry","registry",1021159018));
var reg_fx = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_frame.registry.register_handler,registry,re_frame.fx.kind);
reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value,p__87079){
var map__87080 = p__87079;
var map__87080__$1 = cljs.core.__destructure_map(map__87080);
var event_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87080__$1,new cljs.core.Keyword(null,"event-queue","event-queue",-973576713));
var seq__87081 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__87082 = null;
var count__87083 = (0);
var i__87084 = (0);
while(true){
if((i__87084 < count__87083)){
var map__87089 = chunk__87082.cljs$core$IIndexed$_nth$arity$2(null,i__87084);
var map__87089__$1 = cljs.core.__destructure_map(map__87089);
var effect = map__87089__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87089__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87089__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__87081,chunk__87082,count__87083,i__87084,map__87089,map__87089__$1,effect,ms,dispatch,map__87080,map__87080__$1,event_queue,reg_fx,map__87077,map__87077__$1,registry){
return (function (){
return re_frame.router.dispatch(event_queue,dispatch);
});})(seq__87081,chunk__87082,count__87083,i__87084,map__87089,map__87089__$1,effect,ms,dispatch,map__87080,map__87080__$1,event_queue,reg_fx,map__87077,map__87077__$1,registry))
,ms);
}


var G__87173 = seq__87081;
var G__87174 = chunk__87082;
var G__87175 = count__87083;
var G__87176 = (i__87084 + (1));
seq__87081 = G__87173;
chunk__87082 = G__87174;
count__87083 = G__87175;
i__87084 = G__87176;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__87081);
if(temp__5753__auto__){
var seq__87081__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__87081__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__87081__$1);
var G__87177 = cljs.core.chunk_rest(seq__87081__$1);
var G__87178 = c__4679__auto__;
var G__87179 = cljs.core.count(c__4679__auto__);
var G__87180 = (0);
seq__87081 = G__87177;
chunk__87082 = G__87178;
count__87083 = G__87179;
i__87084 = G__87180;
continue;
} else {
var map__87090 = cljs.core.first(seq__87081__$1);
var map__87090__$1 = cljs.core.__destructure_map(map__87090);
var effect = map__87090__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87090__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87090__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__87081,chunk__87082,count__87083,i__87084,map__87090,map__87090__$1,effect,ms,dispatch,seq__87081__$1,temp__5753__auto__,map__87080,map__87080__$1,event_queue,reg_fx,map__87077,map__87077__$1,registry){
return (function (){
return re_frame.router.dispatch(event_queue,dispatch);
});})(seq__87081,chunk__87082,count__87083,i__87084,map__87090,map__87090__$1,effect,ms,dispatch,seq__87081__$1,temp__5753__auto__,map__87080,map__87080__$1,event_queue,reg_fx,map__87077,map__87077__$1,registry))
,ms);
}


var G__87181 = cljs.core.next(seq__87081__$1);
var G__87182 = null;
var G__87183 = (0);
var G__87184 = (0);
seq__87081 = G__87181;
chunk__87082 = G__87182;
count__87083 = G__87183;
i__87084 = G__87184;
continue;
}
} else {
return null;
}
}
break;
}
}));

reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value,p__87092){
var map__87093 = p__87092;
var map__87093__$1 = cljs.core.__destructure_map(map__87093);
var event_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87093__$1,new cljs.core.Keyword(null,"event-queue","event-queue",-973576713));
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(event_queue,value);
}
}));

reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value,p__87095){
var map__87097 = p__87095;
var map__87097__$1 = cljs.core.__destructure_map(map__87097);
var event_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87097__$1,new cljs.core.Keyword(null,"event-queue","event-queue",-973576713));
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__87098 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__87099 = null;
var count__87100 = (0);
var i__87101 = (0);
while(true){
if((i__87101 < count__87100)){
var event = chunk__87099.cljs$core$IIndexed$_nth$arity$2(null,i__87101);
re_frame.router.dispatch(event_queue,event);


var G__87185 = seq__87098;
var G__87186 = chunk__87099;
var G__87187 = count__87100;
var G__87188 = (i__87101 + (1));
seq__87098 = G__87185;
chunk__87099 = G__87186;
count__87100 = G__87187;
i__87101 = G__87188;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__87098);
if(temp__5753__auto__){
var seq__87098__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__87098__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__87098__$1);
var G__87189 = cljs.core.chunk_rest(seq__87098__$1);
var G__87190 = c__4679__auto__;
var G__87191 = cljs.core.count(c__4679__auto__);
var G__87192 = (0);
seq__87098 = G__87189;
chunk__87099 = G__87190;
count__87100 = G__87191;
i__87101 = G__87192;
continue;
} else {
var event = cljs.core.first(seq__87098__$1);
re_frame.router.dispatch(event_queue,event);


var G__87193 = cljs.core.next(seq__87098__$1);
var G__87194 = null;
var G__87195 = (0);
var G__87196 = (0);
seq__87098 = G__87193;
chunk__87099 = G__87194;
count__87100 = G__87195;
i__87101 = G__87196;
continue;
}
} else {
return null;
}
}
break;
}
}
}));

reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value,p__87103){
var map__87104 = p__87103;
var map__87104__$1 = cljs.core.__destructure_map(map__87104);
var registry__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87104__$1,new cljs.core.Keyword(null,"registry","registry",1021159018));
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_frame.registry.clear_handlers,registry__$1,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__87105 = cljs.core.seq(value);
var chunk__87106 = null;
var count__87107 = (0);
var i__87108 = (0);
while(true){
if((i__87108 < count__87107)){
var event = chunk__87106.cljs$core$IIndexed$_nth$arity$2(null,i__87108);
clear_event(event);


var G__87197 = seq__87105;
var G__87198 = chunk__87106;
var G__87199 = count__87107;
var G__87200 = (i__87108 + (1));
seq__87105 = G__87197;
chunk__87106 = G__87198;
count__87107 = G__87199;
i__87108 = G__87200;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__87105);
if(temp__5753__auto__){
var seq__87105__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__87105__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__87105__$1);
var G__87201 = cljs.core.chunk_rest(seq__87105__$1);
var G__87202 = c__4679__auto__;
var G__87203 = cljs.core.count(c__4679__auto__);
var G__87204 = (0);
seq__87105 = G__87201;
chunk__87106 = G__87202;
count__87107 = G__87203;
i__87108 = G__87204;
continue;
} else {
var event = cljs.core.first(seq__87105__$1);
clear_event(event);


var G__87205 = cljs.core.next(seq__87105__$1);
var G__87206 = null;
var G__87207 = (0);
var G__87208 = (0);
seq__87105 = G__87205;
chunk__87106 = G__87206;
count__87107 = G__87207;
i__87108 = G__87208;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));

return reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value,p__87121){
var map__87122 = p__87121;
var map__87122__$1 = cljs.core.__destructure_map(map__87122);
var app_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87122__$1,new cljs.core.Keyword(null,"app-db","app-db",865606302));
if((cljs.core.deref(app_db) === value)){
return null;
} else {
return cljs.core.reset_BANG_(app_db,value);
}
}));
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = (function re_frame$fx$do_fx(registry){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_$_do_fx_after(context){
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(context))){
} else {
throw (new Error("Assert failed: (:frame context)"));
}

if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__87123 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__87124 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__87124);

try{try{var seq__87125 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__87126 = null;
var count__87127 = (0);
var i__87128 = (0);
while(true){
if((i__87128 < count__87127)){
var vec__87139 = chunk__87126.cljs$core$IIndexed$_nth$arity$2(null,i__87128);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87139,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87139,(1),null);
var temp__5751__auto___87209 = re_frame.registry.get_handler(registry,re_frame.fx.kind,effect_key);
if(cljs.core.truth_(temp__5751__auto___87209)){
var effect_fn_87210 = temp__5751__auto___87209;
var G__87142_87211 = effect_value;
var G__87143_87212 = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(context);
(effect_fn_87210.cljs$core$IFn$_invoke$arity$2 ? effect_fn_87210.cljs$core$IFn$_invoke$arity$2(G__87142_87211,G__87143_87212) : effect_fn_87210.call(null,G__87142_87211,G__87143_87212));
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.fx",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing-fx-handler","missing-fx-handler",-530299299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effect-key","effect-key",-588262440),effect_key], null),new cljs.core.Keyword(null,"line","line",212345235),148], null)),null);
}


var G__87213 = seq__87125;
var G__87214 = chunk__87126;
var G__87215 = count__87127;
var G__87216 = (i__87128 + (1));
seq__87125 = G__87213;
chunk__87126 = G__87214;
count__87127 = G__87215;
i__87128 = G__87216;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__87125);
if(temp__5753__auto__){
var seq__87125__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__87125__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__87125__$1);
var G__87217 = cljs.core.chunk_rest(seq__87125__$1);
var G__87218 = c__4679__auto__;
var G__87219 = cljs.core.count(c__4679__auto__);
var G__87220 = (0);
seq__87125 = G__87217;
chunk__87126 = G__87218;
count__87127 = G__87219;
i__87128 = G__87220;
continue;
} else {
var vec__87144 = cljs.core.first(seq__87125__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87144,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87144,(1),null);
var temp__5751__auto___87221 = re_frame.registry.get_handler(registry,re_frame.fx.kind,effect_key);
if(cljs.core.truth_(temp__5751__auto___87221)){
var effect_fn_87222 = temp__5751__auto___87221;
var G__87147_87223 = effect_value;
var G__87148_87224 = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(context);
(effect_fn_87222.cljs$core$IFn$_invoke$arity$2 ? effect_fn_87222.cljs$core$IFn$_invoke$arity$2(G__87147_87223,G__87148_87224) : effect_fn_87222.call(null,G__87147_87223,G__87148_87224));
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.fx",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing-fx-handler","missing-fx-handler",-530299299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effect-key","effect-key",-588262440),effect_key], null),new cljs.core.Keyword(null,"line","line",212345235),148], null)),null);
}


var G__87225 = cljs.core.next(seq__87125__$1);
var G__87226 = null;
var G__87227 = (0);
var G__87228 = (0);
seq__87125 = G__87225;
chunk__87126 = G__87226;
count__87127 = G__87227;
i__87128 = G__87228;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__86746__auto___87229 = re_frame.interop.now();
var duration__86747__auto___87230 = (end__86746__auto___87229 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__86747__auto___87230,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__86746__auto___87229);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__87123);
}} else {
var seq__87149 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__87150 = null;
var count__87151 = (0);
var i__87152 = (0);
while(true){
if((i__87152 < count__87151)){
var vec__87163 = chunk__87150.cljs$core$IIndexed$_nth$arity$2(null,i__87152);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87163,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87163,(1),null);
var temp__5751__auto___87231 = re_frame.registry.get_handler(registry,re_frame.fx.kind,effect_key);
if(cljs.core.truth_(temp__5751__auto___87231)){
var effect_fn_87232 = temp__5751__auto___87231;
var G__87166_87233 = effect_value;
var G__87167_87234 = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(context);
(effect_fn_87232.cljs$core$IFn$_invoke$arity$2 ? effect_fn_87232.cljs$core$IFn$_invoke$arity$2(G__87166_87233,G__87167_87234) : effect_fn_87232.call(null,G__87166_87233,G__87167_87234));
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.fx",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing-fx-handler","missing-fx-handler",-530299299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effect-key","effect-key",-588262440),effect_key], null),new cljs.core.Keyword(null,"line","line",212345235),148], null)),null);
}


var G__87235 = seq__87149;
var G__87236 = chunk__87150;
var G__87237 = count__87151;
var G__87238 = (i__87152 + (1));
seq__87149 = G__87235;
chunk__87150 = G__87236;
count__87151 = G__87237;
i__87152 = G__87238;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__87149);
if(temp__5753__auto__){
var seq__87149__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__87149__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__87149__$1);
var G__87239 = cljs.core.chunk_rest(seq__87149__$1);
var G__87240 = c__4679__auto__;
var G__87241 = cljs.core.count(c__4679__auto__);
var G__87242 = (0);
seq__87149 = G__87239;
chunk__87150 = G__87240;
count__87151 = G__87241;
i__87152 = G__87242;
continue;
} else {
var vec__87168 = cljs.core.first(seq__87149__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87168,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87168,(1),null);
var temp__5751__auto___87243 = re_frame.registry.get_handler(registry,re_frame.fx.kind,effect_key);
if(cljs.core.truth_(temp__5751__auto___87243)){
var effect_fn_87244 = temp__5751__auto___87243;
var G__87171_87245 = effect_value;
var G__87172_87246 = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(context);
(effect_fn_87244.cljs$core$IFn$_invoke$arity$2 ? effect_fn_87244.cljs$core$IFn$_invoke$arity$2(G__87171_87245,G__87172_87246) : effect_fn_87244.call(null,G__87171_87245,G__87172_87246));
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.fx",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing-fx-handler","missing-fx-handler",-530299299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effect-key","effect-key",-588262440),effect_key], null),new cljs.core.Keyword(null,"line","line",212345235),148], null)),null);
}


var G__87247 = cljs.core.next(seq__87149__$1);
var G__87248 = null;
var G__87249 = (0);
var G__87250 = (0);
seq__87149 = G__87247;
chunk__87150 = G__87248;
count__87151 = G__87249;
i__87152 = G__87250;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
});

//# sourceMappingURL=re_frame.fx.js.map
