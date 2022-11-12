goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registry.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registry.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registry.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registry/kinds kind)"));
}
re_frame.fx.register_built_in_BANG_ = (function re_frame$fx$register_built_in_BANG_(p__64814){
var map__64816 = p__64814;
var map__64816__$1 = cljs.core.__destructure_map(map__64816);
var registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64816__$1,new cljs.core.Keyword(null,"registry","registry",1021159018));
var reg_fx = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_frame.registry.register_handler,registry,re_frame.fx.kind);
reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value,p__64817){
var map__64818 = p__64817;
var map__64818__$1 = cljs.core.__destructure_map(map__64818);
var event_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64818__$1,new cljs.core.Keyword(null,"event-queue","event-queue",-973576713));
var seq__64819 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__64820 = null;
var count__64821 = (0);
var i__64822 = (0);
while(true){
if((i__64822 < count__64821)){
var map__64829 = chunk__64820.cljs$core$IIndexed$_nth$arity$2(null,i__64822);
var map__64829__$1 = cljs.core.__destructure_map(map__64829);
var effect = map__64829__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64829__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64829__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__64819,chunk__64820,count__64821,i__64822,map__64829,map__64829__$1,effect,ms,dispatch,map__64818,map__64818__$1,event_queue,reg_fx,map__64816,map__64816__$1,registry){
return (function (){
return re_frame.router.dispatch(event_queue,dispatch);
});})(seq__64819,chunk__64820,count__64821,i__64822,map__64829,map__64829__$1,effect,ms,dispatch,map__64818,map__64818__$1,event_queue,reg_fx,map__64816,map__64816__$1,registry))
,ms);
}


var G__64926 = seq__64819;
var G__64927 = chunk__64820;
var G__64928 = count__64821;
var G__64929 = (i__64822 + (1));
seq__64819 = G__64926;
chunk__64820 = G__64927;
count__64821 = G__64928;
i__64822 = G__64929;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64819);
if(temp__5753__auto__){
var seq__64819__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64819__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__64819__$1);
var G__64930 = cljs.core.chunk_rest(seq__64819__$1);
var G__64931 = c__4679__auto__;
var G__64932 = cljs.core.count(c__4679__auto__);
var G__64933 = (0);
seq__64819 = G__64930;
chunk__64820 = G__64931;
count__64821 = G__64932;
i__64822 = G__64933;
continue;
} else {
var map__64833 = cljs.core.first(seq__64819__$1);
var map__64833__$1 = cljs.core.__destructure_map(map__64833);
var effect = map__64833__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64833__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64833__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__64819,chunk__64820,count__64821,i__64822,map__64833,map__64833__$1,effect,ms,dispatch,seq__64819__$1,temp__5753__auto__,map__64818,map__64818__$1,event_queue,reg_fx,map__64816,map__64816__$1,registry){
return (function (){
return re_frame.router.dispatch(event_queue,dispatch);
});})(seq__64819,chunk__64820,count__64821,i__64822,map__64833,map__64833__$1,effect,ms,dispatch,seq__64819__$1,temp__5753__auto__,map__64818,map__64818__$1,event_queue,reg_fx,map__64816,map__64816__$1,registry))
,ms);
}


var G__64934 = cljs.core.next(seq__64819__$1);
var G__64935 = null;
var G__64936 = (0);
var G__64937 = (0);
seq__64819 = G__64934;
chunk__64820 = G__64935;
count__64821 = G__64936;
i__64822 = G__64937;
continue;
}
} else {
return null;
}
}
break;
}
}));

reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value,p__64838){
var map__64839 = p__64838;
var map__64839__$1 = cljs.core.__destructure_map(map__64839);
var event_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64839__$1,new cljs.core.Keyword(null,"event-queue","event-queue",-973576713));
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(event_queue,value);
}
}));

reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value,p__64840){
var map__64841 = p__64840;
var map__64841__$1 = cljs.core.__destructure_map(map__64841);
var event_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64841__$1,new cljs.core.Keyword(null,"event-queue","event-queue",-973576713));
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__64842 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__64843 = null;
var count__64844 = (0);
var i__64845 = (0);
while(true){
if((i__64845 < count__64844)){
var event = chunk__64843.cljs$core$IIndexed$_nth$arity$2(null,i__64845);
re_frame.router.dispatch(event_queue,event);


var G__64938 = seq__64842;
var G__64939 = chunk__64843;
var G__64940 = count__64844;
var G__64941 = (i__64845 + (1));
seq__64842 = G__64938;
chunk__64843 = G__64939;
count__64844 = G__64940;
i__64845 = G__64941;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64842);
if(temp__5753__auto__){
var seq__64842__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64842__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__64842__$1);
var G__64942 = cljs.core.chunk_rest(seq__64842__$1);
var G__64943 = c__4679__auto__;
var G__64944 = cljs.core.count(c__4679__auto__);
var G__64945 = (0);
seq__64842 = G__64942;
chunk__64843 = G__64943;
count__64844 = G__64944;
i__64845 = G__64945;
continue;
} else {
var event = cljs.core.first(seq__64842__$1);
re_frame.router.dispatch(event_queue,event);


var G__64946 = cljs.core.next(seq__64842__$1);
var G__64947 = null;
var G__64948 = (0);
var G__64949 = (0);
seq__64842 = G__64946;
chunk__64843 = G__64947;
count__64844 = G__64948;
i__64845 = G__64949;
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

reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value,p__64847){
var map__64848 = p__64847;
var map__64848__$1 = cljs.core.__destructure_map(map__64848);
var registry__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64848__$1,new cljs.core.Keyword(null,"registry","registry",1021159018));
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_frame.registry.clear_handlers,registry__$1,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__64851 = cljs.core.seq(value);
var chunk__64852 = null;
var count__64853 = (0);
var i__64854 = (0);
while(true){
if((i__64854 < count__64853)){
var event = chunk__64852.cljs$core$IIndexed$_nth$arity$2(null,i__64854);
clear_event(event);


var G__64950 = seq__64851;
var G__64951 = chunk__64852;
var G__64952 = count__64853;
var G__64953 = (i__64854 + (1));
seq__64851 = G__64950;
chunk__64852 = G__64951;
count__64853 = G__64952;
i__64854 = G__64953;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64851);
if(temp__5753__auto__){
var seq__64851__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64851__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__64851__$1);
var G__64954 = cljs.core.chunk_rest(seq__64851__$1);
var G__64955 = c__4679__auto__;
var G__64956 = cljs.core.count(c__4679__auto__);
var G__64957 = (0);
seq__64851 = G__64954;
chunk__64852 = G__64955;
count__64853 = G__64956;
i__64854 = G__64957;
continue;
} else {
var event = cljs.core.first(seq__64851__$1);
clear_event(event);


var G__64958 = cljs.core.next(seq__64851__$1);
var G__64959 = null;
var G__64960 = (0);
var G__64961 = (0);
seq__64851 = G__64958;
chunk__64852 = G__64959;
count__64853 = G__64960;
i__64854 = G__64961;
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

return reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value,p__64857){
var map__64858 = p__64857;
var map__64858__$1 = cljs.core.__destructure_map(map__64858);
var app_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64858__$1,new cljs.core.Keyword(null,"app-db","app-db",865606302));
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
var _STAR_current_trace_STAR__orig_val__64860 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__64861 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__64861);

try{try{var seq__64862 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__64863 = null;
var count__64864 = (0);
var i__64865 = (0);
while(true){
if((i__64865 < count__64864)){
var vec__64879 = chunk__64863.cljs$core$IIndexed$_nth$arity$2(null,i__64865);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64879,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64879,(1),null);
var temp__5751__auto___64962 = re_frame.registry.get_handler(registry,re_frame.fx.kind,effect_key);
if(cljs.core.truth_(temp__5751__auto___64962)){
var effect_fn_64963 = temp__5751__auto___64962;
var G__64882_64964 = effect_value;
var G__64883_64965 = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(context);
(effect_fn_64963.cljs$core$IFn$_invoke$arity$2 ? effect_fn_64963.cljs$core$IFn$_invoke$arity$2(G__64882_64964,G__64883_64965) : effect_fn_64963.call(null,G__64882_64964,G__64883_64965));
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.fx",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing-fx-handler","missing-fx-handler",-530299299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effect-key","effect-key",-588262440),effect_key], null),new cljs.core.Keyword(null,"line","line",212345235),148], null)),null);
}


var G__64966 = seq__64862;
var G__64967 = chunk__64863;
var G__64968 = count__64864;
var G__64969 = (i__64865 + (1));
seq__64862 = G__64966;
chunk__64863 = G__64967;
count__64864 = G__64968;
i__64865 = G__64969;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64862);
if(temp__5753__auto__){
var seq__64862__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64862__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__64862__$1);
var G__64970 = cljs.core.chunk_rest(seq__64862__$1);
var G__64971 = c__4679__auto__;
var G__64972 = cljs.core.count(c__4679__auto__);
var G__64973 = (0);
seq__64862 = G__64970;
chunk__64863 = G__64971;
count__64864 = G__64972;
i__64865 = G__64973;
continue;
} else {
var vec__64885 = cljs.core.first(seq__64862__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64885,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64885,(1),null);
var temp__5751__auto___64974 = re_frame.registry.get_handler(registry,re_frame.fx.kind,effect_key);
if(cljs.core.truth_(temp__5751__auto___64974)){
var effect_fn_64975 = temp__5751__auto___64974;
var G__64888_64976 = effect_value;
var G__64889_64977 = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(context);
(effect_fn_64975.cljs$core$IFn$_invoke$arity$2 ? effect_fn_64975.cljs$core$IFn$_invoke$arity$2(G__64888_64976,G__64889_64977) : effect_fn_64975.call(null,G__64888_64976,G__64889_64977));
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.fx",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing-fx-handler","missing-fx-handler",-530299299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effect-key","effect-key",-588262440),effect_key], null),new cljs.core.Keyword(null,"line","line",212345235),148], null)),null);
}


var G__64978 = cljs.core.next(seq__64862__$1);
var G__64979 = null;
var G__64980 = (0);
var G__64981 = (0);
seq__64862 = G__64978;
chunk__64863 = G__64979;
count__64864 = G__64980;
i__64865 = G__64981;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__64499__auto___64982 = re_frame.interop.now();
var duration__64500__auto___64983 = (end__64499__auto___64982 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__64500__auto___64983,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__64499__auto___64982);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__64860);
}} else {
var seq__64890 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__64891 = null;
var count__64892 = (0);
var i__64893 = (0);
while(true){
if((i__64893 < count__64892)){
var vec__64916 = chunk__64891.cljs$core$IIndexed$_nth$arity$2(null,i__64893);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64916,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64916,(1),null);
var temp__5751__auto___64984 = re_frame.registry.get_handler(registry,re_frame.fx.kind,effect_key);
if(cljs.core.truth_(temp__5751__auto___64984)){
var effect_fn_64985 = temp__5751__auto___64984;
var G__64919_64986 = effect_value;
var G__64920_64987 = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(context);
(effect_fn_64985.cljs$core$IFn$_invoke$arity$2 ? effect_fn_64985.cljs$core$IFn$_invoke$arity$2(G__64919_64986,G__64920_64987) : effect_fn_64985.call(null,G__64919_64986,G__64920_64987));
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.fx",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing-fx-handler","missing-fx-handler",-530299299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effect-key","effect-key",-588262440),effect_key], null),new cljs.core.Keyword(null,"line","line",212345235),148], null)),null);
}


var G__64988 = seq__64890;
var G__64989 = chunk__64891;
var G__64990 = count__64892;
var G__64991 = (i__64893 + (1));
seq__64890 = G__64988;
chunk__64891 = G__64989;
count__64892 = G__64990;
i__64893 = G__64991;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64890);
if(temp__5753__auto__){
var seq__64890__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64890__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__64890__$1);
var G__64992 = cljs.core.chunk_rest(seq__64890__$1);
var G__64993 = c__4679__auto__;
var G__64994 = cljs.core.count(c__4679__auto__);
var G__64995 = (0);
seq__64890 = G__64992;
chunk__64891 = G__64993;
count__64892 = G__64994;
i__64893 = G__64995;
continue;
} else {
var vec__64921 = cljs.core.first(seq__64890__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64921,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64921,(1),null);
var temp__5751__auto___64996 = re_frame.registry.get_handler(registry,re_frame.fx.kind,effect_key);
if(cljs.core.truth_(temp__5751__auto___64996)){
var effect_fn_64997 = temp__5751__auto___64996;
var G__64924_64998 = effect_value;
var G__64925_64999 = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(context);
(effect_fn_64997.cljs$core$IFn$_invoke$arity$2 ? effect_fn_64997.cljs$core$IFn$_invoke$arity$2(G__64924_64998,G__64925_64999) : effect_fn_64997.call(null,G__64924_64998,G__64925_64999));
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.fx",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing-fx-handler","missing-fx-handler",-530299299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effect-key","effect-key",-588262440),effect_key], null),new cljs.core.Keyword(null,"line","line",212345235),148], null)),null);
}


var G__65000 = cljs.core.next(seq__64890__$1);
var G__65001 = null;
var G__65002 = (0);
var G__65003 = (0);
seq__64890 = G__65000;
chunk__64891 = G__65001;
count__64892 = G__65002;
i__64893 = G__65003;
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
