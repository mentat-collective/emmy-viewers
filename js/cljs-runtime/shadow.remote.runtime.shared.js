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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__80093,res){
var map__80096 = p__80093;
var map__80096__$1 = cljs.core.__destructure_map(map__80096);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80096__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80096__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__80114 = res;
var G__80114__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80114,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__80114);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80114__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__80114__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__80118 = arguments.length;
switch (G__80118) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__80124,msg,handlers,timeout_after_ms){
var map__80127 = p__80124;
var map__80127__$1 = cljs.core.__destructure_map(map__80127);
var runtime = map__80127__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80127__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___80285 = arguments.length;
var i__4865__auto___80286 = (0);
while(true){
if((i__4865__auto___80286 < len__4864__auto___80285)){
args__4870__auto__.push((arguments[i__4865__auto___80286]));

var G__80287 = (i__4865__auto___80286 + (1));
i__4865__auto___80286 = G__80287;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__80167,ev,args){
var map__80171 = p__80167;
var map__80171__$1 = cljs.core.__destructure_map(map__80171);
var runtime = map__80171__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80171__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__80172 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__80175 = null;
var count__80176 = (0);
var i__80177 = (0);
while(true){
if((i__80177 < count__80176)){
var ext = chunk__80175.cljs$core$IIndexed$_nth$arity$2(null,i__80177);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__80292 = seq__80172;
var G__80293 = chunk__80175;
var G__80294 = count__80176;
var G__80295 = (i__80177 + (1));
seq__80172 = G__80292;
chunk__80175 = G__80293;
count__80176 = G__80294;
i__80177 = G__80295;
continue;
} else {
var G__80296 = seq__80172;
var G__80297 = chunk__80175;
var G__80298 = count__80176;
var G__80299 = (i__80177 + (1));
seq__80172 = G__80296;
chunk__80175 = G__80297;
count__80176 = G__80298;
i__80177 = G__80299;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__80172);
if(temp__5753__auto__){
var seq__80172__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__80172__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__80172__$1);
var G__80300 = cljs.core.chunk_rest(seq__80172__$1);
var G__80301 = c__4679__auto__;
var G__80302 = cljs.core.count(c__4679__auto__);
var G__80303 = (0);
seq__80172 = G__80300;
chunk__80175 = G__80301;
count__80176 = G__80302;
i__80177 = G__80303;
continue;
} else {
var ext = cljs.core.first(seq__80172__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__80305 = cljs.core.next(seq__80172__$1);
var G__80306 = null;
var G__80307 = (0);
var G__80308 = (0);
seq__80172 = G__80305;
chunk__80175 = G__80306;
count__80176 = G__80307;
i__80177 = G__80308;
continue;
} else {
var G__80309 = cljs.core.next(seq__80172__$1);
var G__80310 = null;
var G__80311 = (0);
var G__80312 = (0);
seq__80172 = G__80309;
chunk__80175 = G__80310;
count__80176 = G__80311;
i__80177 = G__80312;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq80155){
var G__80157 = cljs.core.first(seq80155);
var seq80155__$1 = cljs.core.next(seq80155);
var G__80158 = cljs.core.first(seq80155__$1);
var seq80155__$2 = cljs.core.next(seq80155__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80157,G__80158,seq80155__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__80212,p__80213){
var map__80215 = p__80212;
var map__80215__$1 = cljs.core.__destructure_map(map__80215);
var runtime = map__80215__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80215__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__80216 = p__80213;
var map__80216__$1 = cljs.core.__destructure_map(map__80216);
var msg = map__80216__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80216__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__80218 = cljs.core.deref(state_ref);
var map__80218__$1 = cljs.core.__destructure_map(map__80218);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80218__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80218__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__80219){
var map__80220 = p__80219;
var map__80220__$1 = cljs.core.__destructure_map(map__80220);
var runtime = map__80220__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80220__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__80221,msg){
var map__80222 = p__80221;
var map__80222__$1 = cljs.core.__destructure_map(map__80222);
var runtime = map__80222__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80222__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__80225,key,p__80226){
var map__80227 = p__80225;
var map__80227__$1 = cljs.core.__destructure_map(map__80227);
var state = map__80227__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80227__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__80228 = p__80226;
var map__80228__$1 = cljs.core.__destructure_map(map__80228);
var spec = map__80228__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80228__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__80229,key,spec){
var map__80230 = p__80229;
var map__80230__$1 = cljs.core.__destructure_map(map__80230);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80230__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__80231_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__80231_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__80232_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__80232_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__80233_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__80233_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__80234_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__80234_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__80235_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__80235_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__80241,key){
var map__80242 = p__80241;
var map__80242__$1 = cljs.core.__destructure_map(map__80242);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80242__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__80248,msg){
var map__80249 = p__80248;
var map__80249__$1 = cljs.core.__destructure_map(map__80249);
var runtime = map__80249__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80249__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__80265,p__80266){
var map__80267 = p__80265;
var map__80267__$1 = cljs.core.__destructure_map(map__80267);
var runtime = map__80267__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80267__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__80268 = p__80266;
var map__80268__$1 = cljs.core.__destructure_map(map__80268);
var msg = map__80268__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80268__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80268__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__80269 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__80271 = null;
var count__80272 = (0);
var i__80273 = (0);
while(true){
if((i__80273 < count__80272)){
var map__80279 = chunk__80271.cljs$core$IIndexed$_nth$arity$2(null,i__80273);
var map__80279__$1 = cljs.core.__destructure_map(map__80279);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80279__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__80326 = seq__80269;
var G__80327 = chunk__80271;
var G__80328 = count__80272;
var G__80329 = (i__80273 + (1));
seq__80269 = G__80326;
chunk__80271 = G__80327;
count__80272 = G__80328;
i__80273 = G__80329;
continue;
} else {
var G__80330 = seq__80269;
var G__80331 = chunk__80271;
var G__80332 = count__80272;
var G__80333 = (i__80273 + (1));
seq__80269 = G__80330;
chunk__80271 = G__80331;
count__80272 = G__80332;
i__80273 = G__80333;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__80269);
if(temp__5753__auto__){
var seq__80269__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__80269__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__80269__$1);
var G__80334 = cljs.core.chunk_rest(seq__80269__$1);
var G__80335 = c__4679__auto__;
var G__80336 = cljs.core.count(c__4679__auto__);
var G__80337 = (0);
seq__80269 = G__80334;
chunk__80271 = G__80335;
count__80272 = G__80336;
i__80273 = G__80337;
continue;
} else {
var map__80280 = cljs.core.first(seq__80269__$1);
var map__80280__$1 = cljs.core.__destructure_map(map__80280);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80280__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__80338 = cljs.core.next(seq__80269__$1);
var G__80339 = null;
var G__80340 = (0);
var G__80341 = (0);
seq__80269 = G__80338;
chunk__80271 = G__80339;
count__80272 = G__80340;
i__80273 = G__80341;
continue;
} else {
var G__80343 = cljs.core.next(seq__80269__$1);
var G__80344 = null;
var G__80345 = (0);
var G__80346 = (0);
seq__80269 = G__80343;
chunk__80271 = G__80344;
count__80272 = G__80345;
i__80273 = G__80346;
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
