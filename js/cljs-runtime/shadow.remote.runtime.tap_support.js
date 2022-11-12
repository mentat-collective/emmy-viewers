goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60352,p__60353){
var map__60354 = p__60352;
var map__60354__$1 = cljs.core.__destructure_map(map__60354);
var svc = map__60354__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60354__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60354__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60354__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60355 = p__60353;
var map__60355__$1 = cljs.core.__destructure_map(map__60355);
var msg = map__60355__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60355__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60355__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60355__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60355__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60361,p__60362){
var map__60367 = p__60361;
var map__60367__$1 = cljs.core.__destructure_map(map__60367);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60367__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60368 = p__60362;
var map__60368__$1 = cljs.core.__destructure_map(map__60368);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60368__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60373,p__60374){
var map__60375 = p__60373;
var map__60375__$1 = cljs.core.__destructure_map(map__60375);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60375__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60375__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60377 = p__60374;
var map__60377__$1 = cljs.core.__destructure_map(map__60377);
var msg = map__60377__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60377__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60378,tid){
var map__60380 = p__60378;
var map__60380__$1 = cljs.core.__destructure_map(map__60380);
var svc = map__60380__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60380__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60397 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60398 = null;
var count__60399 = (0);
var i__60400 = (0);
while(true){
if((i__60400 < count__60399)){
var vec__60412 = chunk__60398.cljs$core$IIndexed$_nth$arity$2(null,i__60400);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60412,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60412,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60424 = seq__60397;
var G__60425 = chunk__60398;
var G__60426 = count__60399;
var G__60427 = (i__60400 + (1));
seq__60397 = G__60424;
chunk__60398 = G__60425;
count__60399 = G__60426;
i__60400 = G__60427;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60397);
if(temp__5753__auto__){
var seq__60397__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60397__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__60397__$1);
var G__60428 = cljs.core.chunk_rest(seq__60397__$1);
var G__60429 = c__4679__auto__;
var G__60430 = cljs.core.count(c__4679__auto__);
var G__60431 = (0);
seq__60397 = G__60428;
chunk__60398 = G__60429;
count__60399 = G__60430;
i__60400 = G__60431;
continue;
} else {
var vec__60415 = cljs.core.first(seq__60397__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60415,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60415,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60432 = cljs.core.next(seq__60397__$1);
var G__60433 = null;
var G__60434 = (0);
var G__60435 = (0);
seq__60397 = G__60432;
chunk__60398 = G__60433;
count__60399 = G__60434;
i__60400 = G__60435;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60384_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60384_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60385_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60385_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60386_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60386_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60387_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60387_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60422){
var map__60423 = p__60422;
var map__60423__$1 = cljs.core.__destructure_map(map__60423);
var svc = map__60423__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60423__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60423__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
