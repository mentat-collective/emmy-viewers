goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registry.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registry.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registry.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registry/kinds kind)"));
}
re_frame.fx.register_built_in_BANG_ = (function re_frame$fx$register_built_in_BANG_(p__87513){
var map__87514 = p__87513;
var map__87514__$1 = cljs.core.__destructure_map(map__87514);
var registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87514__$1,new cljs.core.Keyword(null,"registry","registry",1021159018));
var reg_fx = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_frame.registry.register_handler,registry,re_frame.fx.kind);
reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value,p__87516){
var map__87517 = p__87516;
var map__87517__$1 = cljs.core.__destructure_map(map__87517);
var event_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87517__$1,new cljs.core.Keyword(null,"event-queue","event-queue",-973576713));
var seq__87519 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__87520 = null;
var count__87521 = (0);
var i__87522 = (0);
while(true){
if((i__87522 < count__87521)){
var map__87530 = chunk__87520.cljs$core$IIndexed$_nth$arity$2(null,i__87522);
var map__87530__$1 = cljs.core.__destructure_map(map__87530);
var effect = map__87530__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87530__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87530__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__87519,chunk__87520,count__87521,i__87522,map__87530,map__87530__$1,effect,ms,dispatch,map__87517,map__87517__$1,event_queue,reg_fx,map__87514,map__87514__$1,registry){
return (function (){
return re_frame.router.dispatch(event_queue,dispatch);
});})(seq__87519,chunk__87520,count__87521,i__87522,map__87530,map__87530__$1,effect,ms,dispatch,map__87517,map__87517__$1,event_queue,reg_fx,map__87514,map__87514__$1,registry))
,ms);
}


var G__87615 = seq__87519;
var G__87616 = chunk__87520;
var G__87617 = count__87521;
var G__87618 = (i__87522 + (1));
seq__87519 = G__87615;
chunk__87520 = G__87616;
count__87521 = G__87617;
i__87522 = G__87618;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__87519);
if(temp__5753__auto__){
var seq__87519__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__87519__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__87519__$1);
var G__87619 = cljs.core.chunk_rest(seq__87519__$1);
var G__87620 = c__4679__auto__;
var G__87621 = cljs.core.count(c__4679__auto__);
var G__87622 = (0);
seq__87519 = G__87619;
chunk__87520 = G__87620;
count__87521 = G__87621;
i__87522 = G__87622;
continue;
} else {
var map__87531 = cljs.core.first(seq__87519__$1);
var map__87531__$1 = cljs.core.__destructure_map(map__87531);
var effect = map__87531__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87531__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87531__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__87519,chunk__87520,count__87521,i__87522,map__87531,map__87531__$1,effect,ms,dispatch,seq__87519__$1,temp__5753__auto__,map__87517,map__87517__$1,event_queue,reg_fx,map__87514,map__87514__$1,registry){
return (function (){
return re_frame.router.dispatch(event_queue,dispatch);
});})(seq__87519,chunk__87520,count__87521,i__87522,map__87531,map__87531__$1,effect,ms,dispatch,seq__87519__$1,temp__5753__auto__,map__87517,map__87517__$1,event_queue,reg_fx,map__87514,map__87514__$1,registry))
,ms);
}


var G__87623 = cljs.core.next(seq__87519__$1);
var G__87624 = null;
var G__87625 = (0);
var G__87626 = (0);
seq__87519 = G__87623;
chunk__87520 = G__87624;
count__87521 = G__87625;
i__87522 = G__87626;
continue;
}
} else {
return null;
}
}
break;
}
}));

reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value,p__87533){
var map__87534 = p__87533;
var map__87534__$1 = cljs.core.__destructure_map(map__87534);
var event_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87534__$1,new cljs.core.Keyword(null,"event-queue","event-queue",-973576713));
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(event_queue,value);
}
}));

reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value,p__87535){
var map__87536 = p__87535;
var map__87536__$1 = cljs.core.__destructure_map(map__87536);
var event_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87536__$1,new cljs.core.Keyword(null,"event-queue","event-queue",-973576713));
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__87537 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__87538 = null;
var count__87539 = (0);
var i__87540 = (0);
while(true){
if((i__87540 < count__87539)){
var event = chunk__87538.cljs$core$IIndexed$_nth$arity$2(null,i__87540);
re_frame.router.dispatch(event_queue,event);


var G__87627 = seq__87537;
var G__87628 = chunk__87538;
var G__87629 = count__87539;
var G__87630 = (i__87540 + (1));
seq__87537 = G__87627;
chunk__87538 = G__87628;
count__87539 = G__87629;
i__87540 = G__87630;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__87537);
if(temp__5753__auto__){
var seq__87537__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__87537__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__87537__$1);
var G__87631 = cljs.core.chunk_rest(seq__87537__$1);
var G__87632 = c__4679__auto__;
var G__87633 = cljs.core.count(c__4679__auto__);
var G__87634 = (0);
seq__87537 = G__87631;
chunk__87538 = G__87632;
count__87539 = G__87633;
i__87540 = G__87634;
continue;
} else {
var event = cljs.core.first(seq__87537__$1);
re_frame.router.dispatch(event_queue,event);


var G__87635 = cljs.core.next(seq__87537__$1);
var G__87636 = null;
var G__87637 = (0);
var G__87638 = (0);
seq__87537 = G__87635;
chunk__87538 = G__87636;
count__87539 = G__87637;
i__87540 = G__87638;
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

reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value,p__87542){
var map__87543 = p__87542;
var map__87543__$1 = cljs.core.__destructure_map(map__87543);
var registry__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87543__$1,new cljs.core.Keyword(null,"registry","registry",1021159018));
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_frame.registry.clear_handlers,registry__$1,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__87546 = cljs.core.seq(value);
var chunk__87547 = null;
var count__87548 = (0);
var i__87549 = (0);
while(true){
if((i__87549 < count__87548)){
var event = chunk__87547.cljs$core$IIndexed$_nth$arity$2(null,i__87549);
clear_event(event);


var G__87639 = seq__87546;
var G__87640 = chunk__87547;
var G__87641 = count__87548;
var G__87642 = (i__87549 + (1));
seq__87546 = G__87639;
chunk__87547 = G__87640;
count__87548 = G__87641;
i__87549 = G__87642;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__87546);
if(temp__5753__auto__){
var seq__87546__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__87546__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__87546__$1);
var G__87643 = cljs.core.chunk_rest(seq__87546__$1);
var G__87644 = c__4679__auto__;
var G__87645 = cljs.core.count(c__4679__auto__);
var G__87646 = (0);
seq__87546 = G__87643;
chunk__87547 = G__87644;
count__87548 = G__87645;
i__87549 = G__87646;
continue;
} else {
var event = cljs.core.first(seq__87546__$1);
clear_event(event);


var G__87647 = cljs.core.next(seq__87546__$1);
var G__87648 = null;
var G__87649 = (0);
var G__87650 = (0);
seq__87546 = G__87647;
chunk__87547 = G__87648;
count__87548 = G__87649;
i__87549 = G__87650;
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

return reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value,p__87551){
var map__87552 = p__87551;
var map__87552__$1 = cljs.core.__destructure_map(map__87552);
var app_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87552__$1,new cljs.core.Keyword(null,"app-db","app-db",865606302));
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
var _STAR_current_trace_STAR__orig_val__87557 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__87558 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__87558);

try{try{var seq__87567 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__87568 = null;
var count__87569 = (0);
var i__87570 = (0);
while(true){
if((i__87570 < count__87569)){
var vec__87581 = chunk__87568.cljs$core$IIndexed$_nth$arity$2(null,i__87570);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87581,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87581,(1),null);
var temp__5751__auto___87651 = re_frame.registry.get_handler(registry,re_frame.fx.kind,effect_key);
if(cljs.core.truth_(temp__5751__auto___87651)){
var effect_fn_87652 = temp__5751__auto___87651;
var G__87584_87653 = effect_value;
var G__87585_87654 = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(context);
(effect_fn_87652.cljs$core$IFn$_invoke$arity$2 ? effect_fn_87652.cljs$core$IFn$_invoke$arity$2(G__87584_87653,G__87585_87654) : effect_fn_87652.call(null,G__87584_87653,G__87585_87654));
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.fx",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing-fx-handler","missing-fx-handler",-530299299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effect-key","effect-key",-588262440),effect_key], null),new cljs.core.Keyword(null,"line","line",212345235),148], null)),null);
}


var G__87655 = seq__87567;
var G__87656 = chunk__87568;
var G__87657 = count__87569;
var G__87658 = (i__87570 + (1));
seq__87567 = G__87655;
chunk__87568 = G__87656;
count__87569 = G__87657;
i__87570 = G__87658;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__87567);
if(temp__5753__auto__){
var seq__87567__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__87567__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__87567__$1);
var G__87659 = cljs.core.chunk_rest(seq__87567__$1);
var G__87660 = c__4679__auto__;
var G__87661 = cljs.core.count(c__4679__auto__);
var G__87662 = (0);
seq__87567 = G__87659;
chunk__87568 = G__87660;
count__87569 = G__87661;
i__87570 = G__87662;
continue;
} else {
var vec__87586 = cljs.core.first(seq__87567__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87586,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87586,(1),null);
var temp__5751__auto___87663 = re_frame.registry.get_handler(registry,re_frame.fx.kind,effect_key);
if(cljs.core.truth_(temp__5751__auto___87663)){
var effect_fn_87664 = temp__5751__auto___87663;
var G__87589_87665 = effect_value;
var G__87590_87666 = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(context);
(effect_fn_87664.cljs$core$IFn$_invoke$arity$2 ? effect_fn_87664.cljs$core$IFn$_invoke$arity$2(G__87589_87665,G__87590_87666) : effect_fn_87664.call(null,G__87589_87665,G__87590_87666));
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.fx",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing-fx-handler","missing-fx-handler",-530299299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effect-key","effect-key",-588262440),effect_key], null),new cljs.core.Keyword(null,"line","line",212345235),148], null)),null);
}


var G__87667 = cljs.core.next(seq__87567__$1);
var G__87668 = null;
var G__87669 = (0);
var G__87670 = (0);
seq__87567 = G__87667;
chunk__87568 = G__87668;
count__87569 = G__87669;
i__87570 = G__87670;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__87216__auto___87671 = re_frame.interop.now();
var duration__87217__auto___87672 = (end__87216__auto___87671 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__87217__auto___87672,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__87216__auto___87671);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__87557);
}} else {
var seq__87591 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__87592 = null;
var count__87593 = (0);
var i__87594 = (0);
while(true){
if((i__87594 < count__87593)){
var vec__87605 = chunk__87592.cljs$core$IIndexed$_nth$arity$2(null,i__87594);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87605,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87605,(1),null);
var temp__5751__auto___87673 = re_frame.registry.get_handler(registry,re_frame.fx.kind,effect_key);
if(cljs.core.truth_(temp__5751__auto___87673)){
var effect_fn_87674 = temp__5751__auto___87673;
var G__87608_87675 = effect_value;
var G__87609_87676 = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(context);
(effect_fn_87674.cljs$core$IFn$_invoke$arity$2 ? effect_fn_87674.cljs$core$IFn$_invoke$arity$2(G__87608_87675,G__87609_87676) : effect_fn_87674.call(null,G__87608_87675,G__87609_87676));
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.fx",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing-fx-handler","missing-fx-handler",-530299299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effect-key","effect-key",-588262440),effect_key], null),new cljs.core.Keyword(null,"line","line",212345235),148], null)),null);
}


var G__87677 = seq__87591;
var G__87678 = chunk__87592;
var G__87679 = count__87593;
var G__87680 = (i__87594 + (1));
seq__87591 = G__87677;
chunk__87592 = G__87678;
count__87593 = G__87679;
i__87594 = G__87680;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__87591);
if(temp__5753__auto__){
var seq__87591__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__87591__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__87591__$1);
var G__87681 = cljs.core.chunk_rest(seq__87591__$1);
var G__87682 = c__4679__auto__;
var G__87683 = cljs.core.count(c__4679__auto__);
var G__87684 = (0);
seq__87591 = G__87681;
chunk__87592 = G__87682;
count__87593 = G__87683;
i__87594 = G__87684;
continue;
} else {
var vec__87610 = cljs.core.first(seq__87591__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87610,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87610,(1),null);
var temp__5751__auto___87685 = re_frame.registry.get_handler(registry,re_frame.fx.kind,effect_key);
if(cljs.core.truth_(temp__5751__auto___87685)){
var effect_fn_87686 = temp__5751__auto___87685;
var G__87613_87687 = effect_value;
var G__87614_87688 = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(context);
(effect_fn_87686.cljs$core$IFn$_invoke$arity$2 ? effect_fn_87686.cljs$core$IFn$_invoke$arity$2(G__87613_87687,G__87614_87688) : effect_fn_87686.call(null,G__87613_87687,G__87614_87688));
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.fx",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing-fx-handler","missing-fx-handler",-530299299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effect-key","effect-key",-588262440),effect_key], null),new cljs.core.Keyword(null,"line","line",212345235),148], null)),null);
}


var G__87689 = cljs.core.next(seq__87591__$1);
var G__87690 = null;
var G__87691 = (0);
var G__87692 = (0);
seq__87591 = G__87689;
chunk__87592 = G__87690;
count__87593 = G__87691;
i__87594 = G__87692;
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
