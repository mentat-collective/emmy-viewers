goog.provide('nextjournal.viewer.notebook');
nextjournal.viewer.notebook.notebook = (function nextjournal$viewer$notebook$notebook(xs){
return nextjournal.viewer.html(cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.items-center.viewer-notebook","div.flex.flex-col.items-center.viewer-notebook",2117798621)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__95244_SHARP_){
return nextjournal.viewer.html((function (){var map__95248 = nextjournal.viewer.meta(p1__95244_SHARP_);
var map__95248__$1 = cljs.core.__destructure_map(map__95248);
var ks = map__95248__$1;
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95248__$1,new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95248__$1,new cljs.core.Keyword("nextjournal","width","nextjournal/width",-2082667537));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["viewer",(((viewer instanceof cljs.core.Keyword))?["viewer-",cljs.core.name(viewer)].join(''):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(viewer,new cljs.core.Keyword(null,"code","code",1586293142)))?"not-prose":null),(function (){var G__95249 = (function (){var or__4253__auto__ = width;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var G__95250 = viewer;
var G__95250__$1 = (((G__95250 instanceof cljs.core.Keyword))?G__95250.fqn:null);
switch (G__95250__$1) {
case "code":
return new cljs.core.Keyword(null,"wide","wide",-151772487);

break;
default:
return new cljs.core.Keyword(null,"prose","prose",2099617726);

}
}
})();
var G__95249__$1 = (((G__95249 instanceof cljs.core.Keyword))?G__95249.fqn:null);
switch (G__95249__$1) {
case "wide":
return "w-full max-w-wide px-8";

break;
case "full":
return "w-full";

break;
default:
return "w-full max-w-prose px-8 overflow-x-auto";

}
})()], null)], null),(function (){var G__95251 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,p1__95244_SHARP_], null);
if(cljs.core.truth_(new cljs.core.Keyword("blob","id","blob/id",-1385637193).cljs$core$IFn$_invoke$arity$1(p1__95244_SHARP_))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__95251,cljs.core.assoc,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("blob","id","blob/id",-1385637193).cljs$core$IFn$_invoke$arity$1(p1__95244_SHARP_));
} else {
return G__95251;
}
})()], null);
})());
})),xs));
});
nextjournal.viewer.notebook.var$ = (function nextjournal$viewer$notebook$var(x){
return nextjournal.viewer.html(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.syntax-tag","span.syntax-tag",681220509),"#'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)], null)], null));
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.viewer !== 'undefined') && (typeof nextjournal.viewer.notebook !== 'undefined') && (typeof nextjournal.viewer.notebook.state !== 'undefined')){
} else {
nextjournal.viewer.notebook.state = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null);
}
nextjournal.viewer.notebook.root = (function nextjournal$viewer$notebook$root(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,cljs.core.deref(nextjournal.viewer.notebook.state)], null);
});
nextjournal.viewer.notebook.read_string = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.reader.read_string,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.identity], null));
goog.exportSymbol('nextjournal.viewer.notebook.read_string', nextjournal.viewer.notebook.read_string);
nextjournal.viewer.notebook.mount = (function nextjournal$viewer$notebook$mount(el){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.notebook.root], null),el);
});
goog.exportSymbol('nextjournal.viewer.notebook.mount', nextjournal.viewer.notebook.mount);
nextjournal.viewer.notebook.reset_state = (function nextjournal$viewer$notebook$reset_state(new_state){
return cljs.core.reset_BANG_(nextjournal.viewer.notebook.state,new_state);
});
goog.exportSymbol('nextjournal.viewer.notebook.reset_state', nextjournal.viewer.notebook.reset_state);
nextjournal.viewer.notebook.opts__GT_query = (function nextjournal$viewer$notebook$opts__GT_query(opts){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.string.join,"="),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__95252_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__95252_SHARP_,(0),cljs.core.name);
}),opts)));
});
nextjournal.viewer.notebook.describe = (function nextjournal$viewer$notebook$describe(result){
var G__95253 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nextjournal","type-key","nextjournal/type-key",431230466),nextjournal.viewer.value_type(result),new cljs.core.Keyword("blob","id","blob/id",-1385637193),new cljs.core.Keyword("blob","id","blob/id",-1385637193).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(result))], null);
if(cljs.core.counted_QMARK_(result)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__95253,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.count(result));
} else {
return G__95253;
}
});
nextjournal.viewer.notebook.paginate = (function nextjournal$viewer$notebook$paginate(result,p__95254){
var map__95255 = p__95254;
var map__95255__$1 = cljs.core.__destructure_map(map__95255);
var opts = map__95255__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__95255__$1,new cljs.core.Keyword(null,"start","start",-355208981),(0));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95255__$1,new cljs.core.Keyword(null,"n","n",562130025));
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("nextjournal.viewer.notebook",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"paginate","paginate",1392869441),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"n","n",562130025),n,new cljs.core.Keyword(null,"result","result",1415092211),result], null),new cljs.core.Keyword(null,"line","line",212345235),69], null)),null);

if(((typeof n === 'number') && ((((n > (0))) && ((((!(((cljs.core.map_QMARK_(result)) || (cljs.core.set_QMARK_(result)))))) && (cljs.core.counted_QMARK_(result)))))))){
return cljs.core.with_meta(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(start,result))),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,nextjournal.viewer.notebook.describe(result)], 0)));
} else {
return result;
}
});
re_frame.context.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("nextjournal.viewer.notebook","blobs","nextjournal.viewer.notebook/blobs",2028603229),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__95263){
var vec__95264 = p__95263;
var blob_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95264,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95264,(1),null);
var v = vec__95264;
if(cljs.core.truth_(id)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,v);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,blob_key);
}
})], 0));
nextjournal.viewer.notebook.fetch_BANG_ = (function nextjournal$viewer$notebook$fetch_BANG_(_BANG_result,p__95272,opts){
var map__95273 = p__95272;
var map__95273__$1 = cljs.core.__destructure_map(map__95273);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95273__$1,new cljs.core.Keyword("blob","id","blob/id",-1385637193));
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("nextjournal.viewer.notebook",new cljs.core.Keyword(null,"trace","trace",-1082747415),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fetch!","fetch!",1947804333),opts,new cljs.core.Keyword(null,"line","line",212345235),91], null)),null);

return fetch(["_blob/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),((cljs.core.seq(opts))?["?",nextjournal.viewer.notebook.opts__GT_query(opts)].join(''):null)].join('')).then((function (p1__95269_SHARP_){
return p1__95269_SHARP_.text();
})).then((function (p1__95270_SHARP_){
return cljs.core.reset_BANG_(_BANG_result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),nextjournal.viewer.notebook.read_string(p1__95270_SHARP_)], null));
})).catch((function (p1__95271_SHARP_){
return cljs.core.reset_BANG_(_BANG_result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__95271_SHARP_], null));
}));
});
nextjournal.viewer.notebook.in_process_fetch_BANG_ = (function nextjournal$viewer$notebook$in_process_fetch_BANG_(_BANG_result,p__95280,opts){
var map__95281 = p__95280;
var map__95281__$1 = cljs.core.__destructure_map(map__95281);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95281__$1,new cljs.core.Keyword("blob","id","blob/id",-1385637193));
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("nextjournal.viewer.notebook",new cljs.core.Keyword(null,"trace","trace",-1082747415),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-process-fetch!","in-process-fetch!",418349885),opts,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"line","line",212345235),99], null)),null);

return (new Promise((function (resolve,_reject){
var G__95283 = cljs.core.deref(re_frame.context.subscribe.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal.viewer.notebook","blobs","nextjournal.viewer.notebook/blobs",2028603229),id], null)], 0)));
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__95283) : resolve.call(null,G__95283));
}))).then((function (p1__95277_SHARP_){
return nextjournal.viewer.notebook.paginate(p1__95277_SHARP_,opts);
})).then((function (p1__95278_SHARP_){
return cljs.core.reset_BANG_(_BANG_result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var G__95285 = p1__95278_SHARP_;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("nextjournal.viewer.notebook",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(cljs.core.PersistentArrayMap.createAsIfByAssoc([G__95285,new cljs.core.Keyword("in-process-fetch!","value","in-process-fetch!/value",2033041116),new cljs.core.Keyword(null,"line","line",212345235),null])),null);

return G__95285;
})()], null));
})).catch((function (p1__95279_SHARP_){
return cljs.core.reset_BANG_(_BANG_result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__95279_SHARP_], null));
}));
});
nextjournal.viewer.notebook.get_fetch_opts = (function nextjournal$viewer$notebook$get_fetch_opts(p__95287){
var map__95288 = p__95287;
var map__95288__$1 = cljs.core.__destructure_map(map__95288);
var type_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95288__$1,new cljs.core.Keyword("nextjournal","type-key","nextjournal/type-key",431230466));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95288__$1,new cljs.core.Keyword(null,"count","count",2139924085));
if(((typeof count === 'number') && ((((count > (0))) && (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"list","list",765357683),null], null), null),type_key)) && (cljs.core.not((function (){var fexpr__95289 = cljs.core.deref(nextjournal.viewer._BANG_viewers);
return (fexpr__95289.cljs$core$IFn$_invoke$arity$1 ? fexpr__95289.cljs$core$IFn$_invoke$arity$1(type_key) : fexpr__95289.call(null,type_key));
})())))))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),nextjournal.viewer.increase_items], null);
} else {
return null;
}
});
nextjournal.viewer.notebook.blob = (function nextjournal$viewer$notebook$blob(blob){
var with_let95290 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let95290","with-let95290",-1645714671));
var temp__5757__auto___95304 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___95304 == null)){
} else {
var c__85371__auto___95305 = temp__5757__auto___95304;
if((with_let95290.generation === c__85371__auto___95305.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let95290.generation = c__85371__auto___95305.ratomGeneration);
}

var init95291 = (with_let95290.length === (0));
var _BANG_result = ((((init95291) || (cljs.core.not(with_let95290.hasOwnProperty((0))))))?(with_let95290[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loading?","loading?",1905707049),true], null))):(with_let95290[(0)]));
var fetch_BANG_ = ((((init95291) || (cljs.core.not(with_let95290.hasOwnProperty((1))))))?(with_let95290[(1)] = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blob","fetch!","blob/fetch!",1943466498).cljs$core$IFn$_invoke$arity$2(blob,nextjournal.viewer.notebook.fetch_BANG_),_BANG_result,blob)):(with_let95290[(1)]));
var _ = ((((init95291) || (cljs.core.not(with_let95290.hasOwnProperty((2))))))?(with_let95290[(2)] = (function (){var G__95293 = nextjournal.viewer.notebook.get_fetch_opts(blob);
return (fetch_BANG_.cljs$core$IFn$_invoke$arity$1 ? fetch_BANG_.cljs$core$IFn$_invoke$arity$1(G__95293) : fetch_BANG_.call(null,G__95293));
})()):(with_let95290[(2)]));
var res95292 = (function (){var map__95294 = cljs.core.deref(_BANG_result);
var map__95294__$1 = cljs.core.__destructure_map(map__95294);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95294__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95294__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95294__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
if(cljs.core.truth_(value)){
return nextjournal.viewer.view_as(new cljs.core.Keyword(null,"reagent","reagent",2131627322),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.view.context.provide,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fetch!","fetch!",1947804333),fetch_BANG_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,value], null)], null));
} else {
if(cljs.core.truth_(error)){
return nextjournal.viewer.html(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.red","span.red",-458294124),"error",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)], null));
} else {
if(cljs.core.truth_(loading_QMARK_)){
return nextjournal.viewer.html("loading\u2026");
} else {
return null;
}
}
}
})();
return res95292;
});
nextjournal.viewer.register_viewers_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("clerk","notebook","clerk/notebook",699315010),nextjournal.viewer.notebook.notebook,new cljs.core.Keyword("clerk","var","clerk/var",-674903440),nextjournal.viewer.notebook.var$,new cljs.core.Keyword("clerk","blob","clerk/blob",1697092040),nextjournal.viewer.notebook.blob], null));
nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blobs","blobs",-1606355916),cljs.core.PersistentHashMap.fromArrays([cljs.core.random_uuid(),cljs.core.random_uuid(),cljs.core.random_uuid()],[cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((500),cljs.core.range.cljs$core$IFn$_invoke$arity$1((1000)))),cljs.core.range.cljs$core$IFn$_invoke$arity$1((1000)),cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$1((1000)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((1000)))])], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"Dev affordance that performs fetch in-process.",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),1944324746,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__95295){
var vec__95296 = p__95295;
var blob_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95296,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95296,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,nextjournal.viewer.view_as(new cljs.core.Keyword("clerk","blob","clerk/blob",1697092040),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.viewer.notebook.describe(cljs.core.with_meta(v,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("blob","id","blob/id",-1385637193),blob_id], null))),new cljs.core.Keyword("blob","fetch!","blob/fetch!",1943466498),nextjournal.viewer.notebook.in_process_fetch_BANG_))], null)], null);
})),cljs.core.deref(re_frame.context.subscribe.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal.viewer.notebook","blobs","nextjournal.viewer.notebook/blobs",2028603229)], null)], 0))));
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer.notebook",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"blob-in-process-fetch"], 0)));

nextjournal.viewer.notebook.sci_viewer_namespace = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"html","html",641734630,null),nextjournal.viewer.html,new cljs.core.Symbol(null,"view-as","view-as",-634512647,null),nextjournal.viewer.view_as,new cljs.core.Symbol(null,"inspect","inspect",-1965641712,null),nextjournal.viewer.inspect,new cljs.core.Symbol(null,"register-viewer!","register-viewer!",-1988526299,null),nextjournal.viewer.register_viewer_BANG_,new cljs.core.Symbol(null,"register-viewers!","register-viewers!",-1240928108,null),nextjournal.viewer.register_viewers_BANG_,new cljs.core.Symbol(null,"with-viewer","with-viewer",-1694579498,null),nextjournal.viewer.with_viewer,new cljs.core.Symbol(null,"with-viewers","with-viewers",-1936045103,null),nextjournal.viewer.with_viewers], null);
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.viewer !== 'undefined') && (typeof nextjournal.viewer.notebook !== 'undefined') && (typeof nextjournal.viewer.notebook.ctx !== 'undefined')){
} else {
nextjournal.viewer.notebook.ctx = sci.core.init(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"async?","async?",1523057758),true,new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206),true,new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"js","js",-886355190,null),goog.global,new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null),new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"atom","atom",1243487874,null),reagent.ratom.atom], null),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"nextjournal.viewer","nextjournal.viewer",148634234,null),nextjournal.viewer.notebook.sci_viewer_namespace,new cljs.core.Symbol(null,"v","v",1661996586,null),nextjournal.viewer.notebook.sci_viewer_namespace,new cljs.core.Symbol(null,"nextjournal.markdown","nextjournal.markdown",-1296364206,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"parse","parse",478366908,null),nextjournal.markdown.parse,new cljs.core.Symbol(null,"->hiccup","->hiccup",-1449744818,null),nextjournal.markdown.__GT_hiccup], null)], null)], null));
}
nextjournal.viewer.notebook.eval_form = (function nextjournal$viewer$notebook$eval_form(f){
return sci.core.eval_form(nextjournal.viewer.notebook.ctx,f);
});
(nextjournal.viewer._STAR_eval_form_STAR_ = nextjournal.viewer.notebook.eval_form);
nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"Viewers that are lists are evaluated using sci.",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,nextjournal.viewer.with_viewer("Hans",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol("v","with-viewer","v/with-viewer",-1694579364,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Ohai, ",new cljs.core.Symbol(null,"x","x",-555367584,null),"! \uD83D\uDC4B"], null),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238))))], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer.notebook",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"eval-viewer"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"foo",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"hi"], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer.notebook",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"test"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","class","nextjournal.devcards/class",1598709868),"p-0"], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"Shows how to display a notebook document",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),-2042065250,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,nextjournal.viewer.view_as(new cljs.core.Keyword("clerk","notebook","clerk/notebook",699315010),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.view_as(new cljs.core.Keyword(null,"markdown","markdown",1227225089),"# Hello Markdown\n## Paragraphs\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum velit nulla,\nsodales eu lorem ut, [tincidunt consectetur](https://nextjournal.com/) diam. Donec in scelerisque risus.\nSuspendisse potenti. Nunc non hendrerit[^1] odio, at malesuada erat. Aenean rutrum quam\n**sed velit mollis** imperdiet. Sed lacinia quam eget tempor tempus. Mauris et leo ac\nodio[^longnote] condimentum facilisis eu sed nibh. _Morbi sed est sit amet_ risus blandit\nullam corper. Pellentesque nisi metus, ~~feugiat sed velit ut~~, dignissim finibus urna.\n\n[^1]: Here is a sidenote.\n\n[^1]: Here\u2019s a sidenote.\n[^longnote]: And here's one with multiple blocks.\n\n    Subsequent paragraphs are indented to show that they belong to the previous footnote.\n\n    ```\n      {:x [1 6 3 1]\n       :y [4 1 2 5]}\n    ```\n\n## Lists\n\n* List Item 1\n  * List Item 1.1\n  * List Item 1.2\n* List Item 2\n  * List Item 2.1\n  * List Item 2.2\n* List Item 3\n\n1. List Item 1\n2. List Item 2\n3. List Item 3\n\n* [x] Todo checked that is really long and should be wrapping into a new line let\u2019s see what this does.\n  * [x] Todos can be nested too!\n* [ ] Todo unchecked\n\n## Tables\n\n| Spalte 1     | Spalte 2            | Spalte 3 |\n| ------------ |:-------------------:| --------:|\n| Spalte 1 ist | links ausgerichtet  |   1600 \u20AC |\n| Spalte 2 ist | zentriert           |     12 \u20AC |\n| Spalte 3 ist | rechts ausgerichtet |      1 \u20AC |\n\n## Blockquotes\n\n> Hello, is it me you\u2019re looking for?\n>\n>\u2014Lionel Richie"),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null),nextjournal.viewer.view_as(new cljs.core.Keyword(null,"code","code",1586293142),"(shuffle (range 10))"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8),(9),(0),(1),(2),(3),(4),(5),(6),(7),(8),(9),(0),(1),(2),(3),(4),(5),(6),(7),(8),(9)], null)], null),nextjournal.viewer.view_as(new cljs.core.Keyword(null,"markdown","markdown",1227225089),"# And some more\n And some more [markdown](https://daringfireball.net/projects/markdown/)."),nextjournal.viewer.view_as(new cljs.core.Keyword(null,"code","code",1586293142),"(shuffle (range 10))"),nextjournal.viewer.view_as(new cljs.core.Keyword(null,"markdown","markdown",1227225089),"## Some math \n This is a formula."),nextjournal.viewer.view_as(new cljs.core.Keyword(null,"latex","latex",-1820161144),"G_{\\mu\\nu}\\equiv R_{\\mu\\nu} - {\\textstyle 1 \\over 2}R\\,g_{\\mu\\nu} = {8 \\pi G \\over c^4} T_{\\mu\\nu}"),nextjournal.viewer.view_as(new cljs.core.Keyword(null,"plotly","plotly",817625458),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.shuffle(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10))),new cljs.core.Keyword(null,"name","name",1843675177),"The Federation"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.shuffle(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10))),new cljs.core.Keyword(null,"name","name",1843675177),"The Empire"], null)], null)], null))], null))], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer.notebook",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"notebook"], 0)));


//# sourceMappingURL=nextjournal.viewer.notebook.js.map
