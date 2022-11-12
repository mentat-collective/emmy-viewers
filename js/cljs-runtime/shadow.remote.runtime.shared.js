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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__56572,res){
var map__56573 = p__56572;
var map__56573__$1 = cljs.core.__destructure_map(map__56573);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56573__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56573__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__56575 = res;
var G__56575__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56575,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__56575);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56575__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__56575__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__56577 = arguments.length;
switch (G__56577) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__56580,msg,handlers,timeout_after_ms){
var map__56581 = p__56580;
var map__56581__$1 = cljs.core.__destructure_map(map__56581);
var runtime = map__56581__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56581__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56765 = arguments.length;
var i__4865__auto___56766 = (0);
while(true){
if((i__4865__auto___56766 < len__4864__auto___56765)){
args__4870__auto__.push((arguments[i__4865__auto___56766]));

var G__56767 = (i__4865__auto___56766 + (1));
i__4865__auto___56766 = G__56767;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__56588,ev,args){
var map__56589 = p__56588;
var map__56589__$1 = cljs.core.__destructure_map(map__56589);
var runtime = map__56589__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56589__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__56590 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__56593 = null;
var count__56594 = (0);
var i__56595 = (0);
while(true){
if((i__56595 < count__56594)){
var ext = chunk__56593.cljs$core$IIndexed$_nth$arity$2(null,i__56595);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__56769 = seq__56590;
var G__56770 = chunk__56593;
var G__56771 = count__56594;
var G__56772 = (i__56595 + (1));
seq__56590 = G__56769;
chunk__56593 = G__56770;
count__56594 = G__56771;
i__56595 = G__56772;
continue;
} else {
var G__56773 = seq__56590;
var G__56774 = chunk__56593;
var G__56775 = count__56594;
var G__56776 = (i__56595 + (1));
seq__56590 = G__56773;
chunk__56593 = G__56774;
count__56594 = G__56775;
i__56595 = G__56776;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56590);
if(temp__5753__auto__){
var seq__56590__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56590__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__56590__$1);
var G__56778 = cljs.core.chunk_rest(seq__56590__$1);
var G__56779 = c__4679__auto__;
var G__56780 = cljs.core.count(c__4679__auto__);
var G__56781 = (0);
seq__56590 = G__56778;
chunk__56593 = G__56779;
count__56594 = G__56780;
i__56595 = G__56781;
continue;
} else {
var ext = cljs.core.first(seq__56590__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__56782 = cljs.core.next(seq__56590__$1);
var G__56783 = null;
var G__56784 = (0);
var G__56785 = (0);
seq__56590 = G__56782;
chunk__56593 = G__56783;
count__56594 = G__56784;
i__56595 = G__56785;
continue;
} else {
var G__56786 = cljs.core.next(seq__56590__$1);
var G__56787 = null;
var G__56788 = (0);
var G__56789 = (0);
seq__56590 = G__56786;
chunk__56593 = G__56787;
count__56594 = G__56788;
i__56595 = G__56789;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq56585){
var G__56586 = cljs.core.first(seq56585);
var seq56585__$1 = cljs.core.next(seq56585);
var G__56587 = cljs.core.first(seq56585__$1);
var seq56585__$2 = cljs.core.next(seq56585__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56586,G__56587,seq56585__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__56599,p__56600){
var map__56601 = p__56599;
var map__56601__$1 = cljs.core.__destructure_map(map__56601);
var runtime = map__56601__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56601__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__56607 = p__56600;
var map__56607__$1 = cljs.core.__destructure_map(map__56607);
var msg = map__56607__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56607__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__56608 = cljs.core.deref(state_ref);
var map__56608__$1 = cljs.core.__destructure_map(map__56608);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56608__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56608__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__56645){
var map__56646 = p__56645;
var map__56646__$1 = cljs.core.__destructure_map(map__56646);
var runtime = map__56646__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56646__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__56650,msg){
var map__56651 = p__56650;
var map__56651__$1 = cljs.core.__destructure_map(map__56651);
var runtime = map__56651__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56651__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__56668,key,p__56669){
var map__56670 = p__56668;
var map__56670__$1 = cljs.core.__destructure_map(map__56670);
var state = map__56670__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56670__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__56671 = p__56669;
var map__56671__$1 = cljs.core.__destructure_map(map__56671);
var spec = map__56671__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56671__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__56680,key,spec){
var map__56681 = p__56680;
var map__56681__$1 = cljs.core.__destructure_map(map__56681);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56681__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__56683_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__56683_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__56684_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__56684_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__56685_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__56685_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__56686_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__56686_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__56687_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__56687_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__56713,key){
var map__56715 = p__56713;
var map__56715__$1 = cljs.core.__destructure_map(map__56715);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56715__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__56740,msg){
var map__56741 = p__56740;
var map__56741__$1 = cljs.core.__destructure_map(map__56741);
var runtime = map__56741__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56741__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__56744,p__56745){
var map__56746 = p__56744;
var map__56746__$1 = cljs.core.__destructure_map(map__56746);
var runtime = map__56746__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56746__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__56747 = p__56745;
var map__56747__$1 = cljs.core.__destructure_map(map__56747);
var msg = map__56747__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56747__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56747__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__56749 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__56751 = null;
var count__56752 = (0);
var i__56753 = (0);
while(true){
if((i__56753 < count__56752)){
var map__56759 = chunk__56751.cljs$core$IIndexed$_nth$arity$2(null,i__56753);
var map__56759__$1 = cljs.core.__destructure_map(map__56759);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56759__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__56808 = seq__56749;
var G__56809 = chunk__56751;
var G__56810 = count__56752;
var G__56811 = (i__56753 + (1));
seq__56749 = G__56808;
chunk__56751 = G__56809;
count__56752 = G__56810;
i__56753 = G__56811;
continue;
} else {
var G__56812 = seq__56749;
var G__56813 = chunk__56751;
var G__56814 = count__56752;
var G__56815 = (i__56753 + (1));
seq__56749 = G__56812;
chunk__56751 = G__56813;
count__56752 = G__56814;
i__56753 = G__56815;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56749);
if(temp__5753__auto__){
var seq__56749__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56749__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__56749__$1);
var G__56816 = cljs.core.chunk_rest(seq__56749__$1);
var G__56817 = c__4679__auto__;
var G__56818 = cljs.core.count(c__4679__auto__);
var G__56819 = (0);
seq__56749 = G__56816;
chunk__56751 = G__56817;
count__56752 = G__56818;
i__56753 = G__56819;
continue;
} else {
var map__56761 = cljs.core.first(seq__56749__$1);
var map__56761__$1 = cljs.core.__destructure_map(map__56761);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56761__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__56820 = cljs.core.next(seq__56749__$1);
var G__56821 = null;
var G__56822 = (0);
var G__56823 = (0);
seq__56749 = G__56820;
chunk__56751 = G__56821;
count__56752 = G__56822;
i__56753 = G__56823;
continue;
} else {
var G__56824 = cljs.core.next(seq__56749__$1);
var G__56825 = null;
var G__56826 = (0);
var G__56827 = (0);
seq__56749 = G__56824;
chunk__56751 = G__56825;
count__56752 = G__56826;
i__56753 = G__56827;
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
