goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__83160,p__83161){
var map__83162 = p__83160;
var map__83162__$1 = cljs.core.__destructure_map(map__83162);
var svc = map__83162__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83162__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83162__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83162__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__83163 = p__83161;
var map__83163__$1 = cljs.core.__destructure_map(map__83163);
var msg = map__83163__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83163__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83163__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83163__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83163__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__83173,p__83174){
var map__83176 = p__83173;
var map__83176__$1 = cljs.core.__destructure_map(map__83176);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83176__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__83177 = p__83174;
var map__83177__$1 = cljs.core.__destructure_map(map__83177);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83177__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__83184,p__83185){
var map__83187 = p__83184;
var map__83187__$1 = cljs.core.__destructure_map(map__83187);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83187__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83187__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__83188 = p__83185;
var map__83188__$1 = cljs.core.__destructure_map(map__83188);
var msg = map__83188__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83188__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__83191,tid){
var map__83192 = p__83191;
var map__83192__$1 = cljs.core.__destructure_map(map__83192);
var svc = map__83192__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83192__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__83202 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__83203 = null;
var count__83204 = (0);
var i__83205 = (0);
while(true){
if((i__83205 < count__83204)){
var vec__83216 = chunk__83203.cljs$core$IIndexed$_nth$arity$2(null,i__83205);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83216,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83216,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__83225 = seq__83202;
var G__83226 = chunk__83203;
var G__83227 = count__83204;
var G__83228 = (i__83205 + (1));
seq__83202 = G__83225;
chunk__83203 = G__83226;
count__83204 = G__83227;
i__83205 = G__83228;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__83202);
if(temp__5753__auto__){
var seq__83202__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__83202__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__83202__$1);
var G__83229 = cljs.core.chunk_rest(seq__83202__$1);
var G__83230 = c__4679__auto__;
var G__83231 = cljs.core.count(c__4679__auto__);
var G__83232 = (0);
seq__83202 = G__83229;
chunk__83203 = G__83230;
count__83204 = G__83231;
i__83205 = G__83232;
continue;
} else {
var vec__83219 = cljs.core.first(seq__83202__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83219,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83219,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__83233 = cljs.core.next(seq__83202__$1);
var G__83234 = null;
var G__83235 = (0);
var G__83236 = (0);
seq__83202 = G__83233;
chunk__83203 = G__83234;
count__83204 = G__83235;
i__83205 = G__83236;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__83193_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__83193_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__83194_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__83194_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__83195_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__83195_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__83196_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__83196_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__83223){
var map__83224 = p__83223;
var map__83224__$1 = cljs.core.__destructure_map(map__83224);
var svc = map__83224__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83224__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83224__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
