goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__79576,res){
var map__79578 = p__79576;
var map__79578__$1 = cljs.core.__destructure_map(map__79578);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79578__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79578__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__79649 = res;
var G__79649__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79649,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__79649);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79649__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__79649__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__79666 = arguments.length;
switch (G__79666) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__79669,msg,handlers,timeout_after_ms){
var map__79670 = p__79669;
var map__79670__$1 = cljs.core.__destructure_map(map__79670);
var runtime = map__79670__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79670__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___79975 = arguments.length;
var i__4865__auto___79976 = (0);
while(true){
if((i__4865__auto___79976 < len__4864__auto___79975)){
args__4870__auto__.push((arguments[i__4865__auto___79976]));

var G__79977 = (i__4865__auto___79976 + (1));
i__4865__auto___79976 = G__79977;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__79690,ev,args){
var map__79693 = p__79690;
var map__79693__$1 = cljs.core.__destructure_map(map__79693);
var runtime = map__79693__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79693__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__79695 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__79698 = null;
var count__79699 = (0);
var i__79700 = (0);
while(true){
if((i__79700 < count__79699)){
var ext = chunk__79698.cljs$core$IIndexed$_nth$arity$2(null,i__79700);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__79978 = seq__79695;
var G__79979 = chunk__79698;
var G__79980 = count__79699;
var G__79981 = (i__79700 + (1));
seq__79695 = G__79978;
chunk__79698 = G__79979;
count__79699 = G__79980;
i__79700 = G__79981;
continue;
} else {
var G__79982 = seq__79695;
var G__79983 = chunk__79698;
var G__79984 = count__79699;
var G__79985 = (i__79700 + (1));
seq__79695 = G__79982;
chunk__79698 = G__79983;
count__79699 = G__79984;
i__79700 = G__79985;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__79695);
if(temp__5753__auto__){
var seq__79695__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__79695__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__79695__$1);
var G__79986 = cljs.core.chunk_rest(seq__79695__$1);
var G__79987 = c__4679__auto__;
var G__79988 = cljs.core.count(c__4679__auto__);
var G__79989 = (0);
seq__79695 = G__79986;
chunk__79698 = G__79987;
count__79699 = G__79988;
i__79700 = G__79989;
continue;
} else {
var ext = cljs.core.first(seq__79695__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__79990 = cljs.core.next(seq__79695__$1);
var G__79991 = null;
var G__79992 = (0);
var G__79993 = (0);
seq__79695 = G__79990;
chunk__79698 = G__79991;
count__79699 = G__79992;
i__79700 = G__79993;
continue;
} else {
var G__79994 = cljs.core.next(seq__79695__$1);
var G__79995 = null;
var G__79996 = (0);
var G__79997 = (0);
seq__79695 = G__79994;
chunk__79698 = G__79995;
count__79699 = G__79996;
i__79700 = G__79997;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq79673){
var G__79674 = cljs.core.first(seq79673);
var seq79673__$1 = cljs.core.next(seq79673);
var G__79675 = cljs.core.first(seq79673__$1);
var seq79673__$2 = cljs.core.next(seq79673__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79674,G__79675,seq79673__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__79721,p__79722){
var map__79723 = p__79721;
var map__79723__$1 = cljs.core.__destructure_map(map__79723);
var runtime = map__79723__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79723__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__79724 = p__79722;
var map__79724__$1 = cljs.core.__destructure_map(map__79724);
var msg = map__79724__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79724__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__79778 = cljs.core.deref(state_ref);
var map__79778__$1 = cljs.core.__destructure_map(map__79778);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79778__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79778__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__79894){
var map__79895 = p__79894;
var map__79895__$1 = cljs.core.__destructure_map(map__79895);
var runtime = map__79895__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79895__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__79903,msg){
var map__79908 = p__79903;
var map__79908__$1 = cljs.core.__destructure_map(map__79908);
var runtime = map__79908__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79908__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__79913,key,p__79914){
var map__79915 = p__79913;
var map__79915__$1 = cljs.core.__destructure_map(map__79915);
var state = map__79915__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79915__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__79916 = p__79914;
var map__79916__$1 = cljs.core.__destructure_map(map__79916);
var spec = map__79916__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79916__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__79918,key,spec){
var map__79919 = p__79918;
var map__79919__$1 = cljs.core.__destructure_map(map__79919);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79919__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__79920_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__79920_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__79921_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__79921_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__79922_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__79922_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__79923_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__79923_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__79924_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__79924_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__79925,key){
var map__79926 = p__79925;
var map__79926__$1 = cljs.core.__destructure_map(map__79926);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79926__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__79930,msg){
var map__79931 = p__79930;
var map__79931__$1 = cljs.core.__destructure_map(map__79931);
var runtime = map__79931__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79931__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__79932,p__79933){
var map__79937 = p__79932;
var map__79937__$1 = cljs.core.__destructure_map(map__79937);
var runtime = map__79937__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79937__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__79938 = p__79933;
var map__79938__$1 = cljs.core.__destructure_map(map__79938);
var msg = map__79938__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79938__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79938__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__79940 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__79942 = null;
var count__79943 = (0);
var i__79944 = (0);
while(true){
if((i__79944 < count__79943)){
var map__79948 = chunk__79942.cljs$core$IIndexed$_nth$arity$2(null,i__79944);
var map__79948__$1 = cljs.core.__destructure_map(map__79948);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79948__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__80006 = seq__79940;
var G__80007 = chunk__79942;
var G__80008 = count__79943;
var G__80009 = (i__79944 + (1));
seq__79940 = G__80006;
chunk__79942 = G__80007;
count__79943 = G__80008;
i__79944 = G__80009;
continue;
} else {
var G__80010 = seq__79940;
var G__80011 = chunk__79942;
var G__80012 = count__79943;
var G__80013 = (i__79944 + (1));
seq__79940 = G__80010;
chunk__79942 = G__80011;
count__79943 = G__80012;
i__79944 = G__80013;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__79940);
if(temp__5753__auto__){
var seq__79940__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__79940__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__79940__$1);
var G__80014 = cljs.core.chunk_rest(seq__79940__$1);
var G__80015 = c__4679__auto__;
var G__80016 = cljs.core.count(c__4679__auto__);
var G__80017 = (0);
seq__79940 = G__80014;
chunk__79942 = G__80015;
count__79943 = G__80016;
i__79944 = G__80017;
continue;
} else {
var map__79949 = cljs.core.first(seq__79940__$1);
var map__79949__$1 = cljs.core.__destructure_map(map__79949);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79949__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__80018 = cljs.core.next(seq__79940__$1);
var G__80019 = null;
var G__80020 = (0);
var G__80021 = (0);
seq__79940 = G__80018;
chunk__79942 = G__80019;
count__79943 = G__80020;
i__79944 = G__80021;
continue;
} else {
var G__80022 = cljs.core.next(seq__79940__$1);
var G__80023 = null;
var G__80024 = (0);
var G__80025 = (0);
seq__79940 = G__80022;
chunk__79942 = G__80023;
count__79943 = G__80024;
i__79944 = G__80025;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
