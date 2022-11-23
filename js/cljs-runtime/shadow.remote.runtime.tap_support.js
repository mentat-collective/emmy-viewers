goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__83618,p__83619){
var map__83620 = p__83618;
var map__83620__$1 = cljs.core.__destructure_map(map__83620);
var svc = map__83620__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83620__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83620__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83620__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__83621 = p__83619;
var map__83621__$1 = cljs.core.__destructure_map(map__83621);
var msg = map__83621__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83621__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83621__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83621__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83621__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__83626,p__83627){
var map__83629 = p__83626;
var map__83629__$1 = cljs.core.__destructure_map(map__83629);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83629__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__83630 = p__83627;
var map__83630__$1 = cljs.core.__destructure_map(map__83630);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83630__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__83637,p__83638){
var map__83639 = p__83637;
var map__83639__$1 = cljs.core.__destructure_map(map__83639);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83639__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83639__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__83641 = p__83638;
var map__83641__$1 = cljs.core.__destructure_map(map__83641);
var msg = map__83641__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83641__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__83644,tid){
var map__83645 = p__83644;
var map__83645__$1 = cljs.core.__destructure_map(map__83645);
var svc = map__83645__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83645__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__83650 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__83651 = null;
var count__83652 = (0);
var i__83653 = (0);
while(true){
if((i__83653 < count__83652)){
var vec__83660 = chunk__83651.cljs$core$IIndexed$_nth$arity$2(null,i__83653);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83660,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83660,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__83678 = seq__83650;
var G__83679 = chunk__83651;
var G__83680 = count__83652;
var G__83681 = (i__83653 + (1));
seq__83650 = G__83678;
chunk__83651 = G__83679;
count__83652 = G__83680;
i__83653 = G__83681;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__83650);
if(temp__5753__auto__){
var seq__83650__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__83650__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__83650__$1);
var G__83682 = cljs.core.chunk_rest(seq__83650__$1);
var G__83683 = c__4679__auto__;
var G__83684 = cljs.core.count(c__4679__auto__);
var G__83685 = (0);
seq__83650 = G__83682;
chunk__83651 = G__83683;
count__83652 = G__83684;
i__83653 = G__83685;
continue;
} else {
var vec__83665 = cljs.core.first(seq__83650__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83665,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83665,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__83686 = cljs.core.next(seq__83650__$1);
var G__83687 = null;
var G__83688 = (0);
var G__83689 = (0);
seq__83650 = G__83686;
chunk__83651 = G__83687;
count__83652 = G__83688;
i__83653 = G__83689;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__83646_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__83646_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__83647_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__83647_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__83648_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__83648_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__83649_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__83649_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__83675){
var map__83676 = p__83675;
var map__83676__$1 = cljs.core.__destructure_map(map__83676);
var svc = map__83676__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83676__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83676__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
