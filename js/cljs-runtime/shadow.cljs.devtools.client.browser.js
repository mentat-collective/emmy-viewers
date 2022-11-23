goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___84990 = arguments.length;
var i__4865__auto___84991 = (0);
while(true){
if((i__4865__auto___84991 < len__4864__auto___84990)){
args__4870__auto__.push((arguments[i__4865__auto___84991]));

var G__84994 = (i__4865__auto___84991 + (1));
i__4865__auto___84991 = G__84994;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq84328){
var G__84329 = cljs.core.first(seq84328);
var seq84328__$1 = cljs.core.next(seq84328);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84329,seq84328__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__84332 = cljs.core.seq(sources);
var chunk__84333 = null;
var count__84334 = (0);
var i__84335 = (0);
while(true){
if((i__84335 < count__84334)){
var map__84342 = chunk__84333.cljs$core$IIndexed$_nth$arity$2(null,i__84335);
var map__84342__$1 = cljs.core.__destructure_map(map__84342);
var src = map__84342__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84342__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84342__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84342__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84342__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e84345){var e_84997 = e84345;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_84997);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_84997.message)].join('')));
}

var G__84998 = seq__84332;
var G__84999 = chunk__84333;
var G__85000 = count__84334;
var G__85001 = (i__84335 + (1));
seq__84332 = G__84998;
chunk__84333 = G__84999;
count__84334 = G__85000;
i__84335 = G__85001;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__84332);
if(temp__5753__auto__){
var seq__84332__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__84332__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__84332__$1);
var G__85002 = cljs.core.chunk_rest(seq__84332__$1);
var G__85003 = c__4679__auto__;
var G__85004 = cljs.core.count(c__4679__auto__);
var G__85005 = (0);
seq__84332 = G__85002;
chunk__84333 = G__85003;
count__84334 = G__85004;
i__84335 = G__85005;
continue;
} else {
var map__84347 = cljs.core.first(seq__84332__$1);
var map__84347__$1 = cljs.core.__destructure_map(map__84347);
var src = map__84347__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84347__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84347__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84347__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84347__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e84349){var e_85006 = e84349;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_85006);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_85006.message)].join('')));
}

var G__85007 = cljs.core.next(seq__84332__$1);
var G__85008 = null;
var G__85009 = (0);
var G__85010 = (0);
seq__84332 = G__85007;
chunk__84333 = G__85008;
count__84334 = G__85009;
i__84335 = G__85010;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__84350 = cljs.core.seq(js_requires);
var chunk__84351 = null;
var count__84352 = (0);
var i__84353 = (0);
while(true){
if((i__84353 < count__84352)){
var js_ns = chunk__84351.cljs$core$IIndexed$_nth$arity$2(null,i__84353);
var require_str_85012 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_85012);


var G__85013 = seq__84350;
var G__85014 = chunk__84351;
var G__85015 = count__84352;
var G__85016 = (i__84353 + (1));
seq__84350 = G__85013;
chunk__84351 = G__85014;
count__84352 = G__85015;
i__84353 = G__85016;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__84350);
if(temp__5753__auto__){
var seq__84350__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__84350__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__84350__$1);
var G__85019 = cljs.core.chunk_rest(seq__84350__$1);
var G__85020 = c__4679__auto__;
var G__85021 = cljs.core.count(c__4679__auto__);
var G__85022 = (0);
seq__84350 = G__85019;
chunk__84351 = G__85020;
count__84352 = G__85021;
i__84353 = G__85022;
continue;
} else {
var js_ns = cljs.core.first(seq__84350__$1);
var require_str_85025 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_85025);


var G__85026 = cljs.core.next(seq__84350__$1);
var G__85027 = null;
var G__85028 = (0);
var G__85029 = (0);
seq__84350 = G__85026;
chunk__84351 = G__85027;
count__84352 = G__85028;
i__84353 = G__85029;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__84358){
var map__84359 = p__84358;
var map__84359__$1 = cljs.core.__destructure_map(map__84359);
var msg = map__84359__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84359__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84359__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__84360(s__84361){
return (new cljs.core.LazySeq(null,(function (){
var s__84361__$1 = s__84361;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__84361__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__84366 = cljs.core.first(xs__6308__auto__);
var map__84366__$1 = cljs.core.__destructure_map(map__84366);
var src = map__84366__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84366__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84366__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__84361__$1,map__84366,map__84366__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__84359,map__84359__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__84360_$_iter__84362(s__84363){
return (new cljs.core.LazySeq(null,((function (s__84361__$1,map__84366,map__84366__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__84359,map__84359__$1,msg,info,reload_info){
return (function (){
var s__84363__$1 = s__84363;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__84363__$1);
if(temp__5753__auto____$1){
var s__84363__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__84363__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__84363__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__84365 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__84364 = (0);
while(true){
if((i__84364 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__84364);
cljs.core.chunk_append(b__84365,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__85033 = (i__84364 + (1));
i__84364 = G__85033;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__84365),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__84360_$_iter__84362(cljs.core.chunk_rest(s__84363__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__84365),null);
}
} else {
var warning = cljs.core.first(s__84363__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__84360_$_iter__84362(cljs.core.rest(s__84363__$2)));
}
} else {
return null;
}
break;
}
});})(s__84361__$1,map__84366,map__84366__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__84359,map__84359__$1,msg,info,reload_info))
,null,null));
});})(s__84361__$1,map__84366,map__84366__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__84359,map__84359__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__84360(cljs.core.rest(s__84361__$1)));
} else {
var G__85037 = cljs.core.rest(s__84361__$1);
s__84361__$1 = G__85037;
continue;
}
} else {
var G__85038 = cljs.core.rest(s__84361__$1);
s__84361__$1 = G__85038;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__84368_85039 = cljs.core.seq(warnings);
var chunk__84369_85040 = null;
var count__84370_85041 = (0);
var i__84371_85042 = (0);
while(true){
if((i__84371_85042 < count__84370_85041)){
var map__84382_85043 = chunk__84369_85040.cljs$core$IIndexed$_nth$arity$2(null,i__84371_85042);
var map__84382_85044__$1 = cljs.core.__destructure_map(map__84382_85043);
var w_85045 = map__84382_85044__$1;
var msg_85046__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84382_85044__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_85047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84382_85044__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_85048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84382_85044__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_85049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84382_85044__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_85049)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_85047),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_85048),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_85046__$1)].join(''));


var G__85050 = seq__84368_85039;
var G__85051 = chunk__84369_85040;
var G__85052 = count__84370_85041;
var G__85053 = (i__84371_85042 + (1));
seq__84368_85039 = G__85050;
chunk__84369_85040 = G__85051;
count__84370_85041 = G__85052;
i__84371_85042 = G__85053;
continue;
} else {
var temp__5753__auto___85054 = cljs.core.seq(seq__84368_85039);
if(temp__5753__auto___85054){
var seq__84368_85055__$1 = temp__5753__auto___85054;
if(cljs.core.chunked_seq_QMARK_(seq__84368_85055__$1)){
var c__4679__auto___85056 = cljs.core.chunk_first(seq__84368_85055__$1);
var G__85057 = cljs.core.chunk_rest(seq__84368_85055__$1);
var G__85058 = c__4679__auto___85056;
var G__85059 = cljs.core.count(c__4679__auto___85056);
var G__85060 = (0);
seq__84368_85039 = G__85057;
chunk__84369_85040 = G__85058;
count__84370_85041 = G__85059;
i__84371_85042 = G__85060;
continue;
} else {
var map__84383_85061 = cljs.core.first(seq__84368_85055__$1);
var map__84383_85062__$1 = cljs.core.__destructure_map(map__84383_85061);
var w_85063 = map__84383_85062__$1;
var msg_85064__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84383_85062__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_85065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84383_85062__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_85066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84383_85062__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_85067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84383_85062__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_85067)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_85065),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_85066),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_85064__$1)].join(''));


var G__85068 = cljs.core.next(seq__84368_85055__$1);
var G__85069 = null;
var G__85070 = (0);
var G__85071 = (0);
seq__84368_85039 = G__85068;
chunk__84369_85040 = G__85069;
count__84370_85041 = G__85070;
i__84371_85042 = G__85071;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__84357_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__84357_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__84392){
var map__84393 = p__84392;
var map__84393__$1 = cljs.core.__destructure_map(map__84393);
var msg = map__84393__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84393__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84393__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__84395 = cljs.core.seq(updates);
var chunk__84397 = null;
var count__84398 = (0);
var i__84399 = (0);
while(true){
if((i__84399 < count__84398)){
var path = chunk__84397.cljs$core$IIndexed$_nth$arity$2(null,i__84399);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__84657_85075 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__84661_85076 = null;
var count__84662_85077 = (0);
var i__84663_85078 = (0);
while(true){
if((i__84663_85078 < count__84662_85077)){
var node_85079 = chunk__84661_85076.cljs$core$IIndexed$_nth$arity$2(null,i__84663_85078);
if(cljs.core.not(node_85079.shadow$old)){
var path_match_85080 = shadow.cljs.devtools.client.browser.match_paths(node_85079.getAttribute("href"),path);
if(cljs.core.truth_(path_match_85080)){
var new_link_85081 = (function (){var G__84707 = node_85079.cloneNode(true);
G__84707.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_85080),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__84707;
})();
(node_85079.shadow$old = true);

(new_link_85081.onload = ((function (seq__84657_85075,chunk__84661_85076,count__84662_85077,i__84663_85078,seq__84395,chunk__84397,count__84398,i__84399,new_link_85081,path_match_85080,node_85079,path,map__84393,map__84393__$1,msg,updates,reload_info){
return (function (e){
var seq__84710_85087 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__84712_85088 = null;
var count__84713_85089 = (0);
var i__84714_85090 = (0);
while(true){
if((i__84714_85090 < count__84713_85089)){
var map__84725_85096 = chunk__84712_85088.cljs$core$IIndexed$_nth$arity$2(null,i__84714_85090);
var map__84725_85097__$1 = cljs.core.__destructure_map(map__84725_85096);
var task_85098 = map__84725_85097__$1;
var fn_str_85099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84725_85097__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_85100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84725_85097__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_85107 = goog.getObjectByName(fn_str_85099,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_85100)].join(''));

(fn_obj_85107.cljs$core$IFn$_invoke$arity$2 ? fn_obj_85107.cljs$core$IFn$_invoke$arity$2(path,new_link_85081) : fn_obj_85107.call(null,path,new_link_85081));


var G__85113 = seq__84710_85087;
var G__85114 = chunk__84712_85088;
var G__85115 = count__84713_85089;
var G__85116 = (i__84714_85090 + (1));
seq__84710_85087 = G__85113;
chunk__84712_85088 = G__85114;
count__84713_85089 = G__85115;
i__84714_85090 = G__85116;
continue;
} else {
var temp__5753__auto___85121 = cljs.core.seq(seq__84710_85087);
if(temp__5753__auto___85121){
var seq__84710_85122__$1 = temp__5753__auto___85121;
if(cljs.core.chunked_seq_QMARK_(seq__84710_85122__$1)){
var c__4679__auto___85126 = cljs.core.chunk_first(seq__84710_85122__$1);
var G__85127 = cljs.core.chunk_rest(seq__84710_85122__$1);
var G__85128 = c__4679__auto___85126;
var G__85129 = cljs.core.count(c__4679__auto___85126);
var G__85130 = (0);
seq__84710_85087 = G__85127;
chunk__84712_85088 = G__85128;
count__84713_85089 = G__85129;
i__84714_85090 = G__85130;
continue;
} else {
var map__84742_85131 = cljs.core.first(seq__84710_85122__$1);
var map__84742_85132__$1 = cljs.core.__destructure_map(map__84742_85131);
var task_85133 = map__84742_85132__$1;
var fn_str_85134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84742_85132__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_85135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84742_85132__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_85141 = goog.getObjectByName(fn_str_85134,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_85135)].join(''));

(fn_obj_85141.cljs$core$IFn$_invoke$arity$2 ? fn_obj_85141.cljs$core$IFn$_invoke$arity$2(path,new_link_85081) : fn_obj_85141.call(null,path,new_link_85081));


var G__85148 = cljs.core.next(seq__84710_85122__$1);
var G__85149 = null;
var G__85150 = (0);
var G__85151 = (0);
seq__84710_85087 = G__85148;
chunk__84712_85088 = G__85149;
count__84713_85089 = G__85150;
i__84714_85090 = G__85151;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_85079);
});})(seq__84657_85075,chunk__84661_85076,count__84662_85077,i__84663_85078,seq__84395,chunk__84397,count__84398,i__84399,new_link_85081,path_match_85080,node_85079,path,map__84393,map__84393__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_85080], 0));

goog.dom.insertSiblingAfter(new_link_85081,node_85079);


var G__85155 = seq__84657_85075;
var G__85156 = chunk__84661_85076;
var G__85157 = count__84662_85077;
var G__85158 = (i__84663_85078 + (1));
seq__84657_85075 = G__85155;
chunk__84661_85076 = G__85156;
count__84662_85077 = G__85157;
i__84663_85078 = G__85158;
continue;
} else {
var G__85163 = seq__84657_85075;
var G__85164 = chunk__84661_85076;
var G__85165 = count__84662_85077;
var G__85166 = (i__84663_85078 + (1));
seq__84657_85075 = G__85163;
chunk__84661_85076 = G__85164;
count__84662_85077 = G__85165;
i__84663_85078 = G__85166;
continue;
}
} else {
var G__85167 = seq__84657_85075;
var G__85168 = chunk__84661_85076;
var G__85169 = count__84662_85077;
var G__85170 = (i__84663_85078 + (1));
seq__84657_85075 = G__85167;
chunk__84661_85076 = G__85168;
count__84662_85077 = G__85169;
i__84663_85078 = G__85170;
continue;
}
} else {
var temp__5753__auto___85171 = cljs.core.seq(seq__84657_85075);
if(temp__5753__auto___85171){
var seq__84657_85172__$1 = temp__5753__auto___85171;
if(cljs.core.chunked_seq_QMARK_(seq__84657_85172__$1)){
var c__4679__auto___85173 = cljs.core.chunk_first(seq__84657_85172__$1);
var G__85174 = cljs.core.chunk_rest(seq__84657_85172__$1);
var G__85175 = c__4679__auto___85173;
var G__85176 = cljs.core.count(c__4679__auto___85173);
var G__85177 = (0);
seq__84657_85075 = G__85174;
chunk__84661_85076 = G__85175;
count__84662_85077 = G__85176;
i__84663_85078 = G__85177;
continue;
} else {
var node_85178 = cljs.core.first(seq__84657_85172__$1);
if(cljs.core.not(node_85178.shadow$old)){
var path_match_85179 = shadow.cljs.devtools.client.browser.match_paths(node_85178.getAttribute("href"),path);
if(cljs.core.truth_(path_match_85179)){
var new_link_85180 = (function (){var G__84751 = node_85178.cloneNode(true);
G__84751.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_85179),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__84751;
})();
(node_85178.shadow$old = true);

(new_link_85180.onload = ((function (seq__84657_85075,chunk__84661_85076,count__84662_85077,i__84663_85078,seq__84395,chunk__84397,count__84398,i__84399,new_link_85180,path_match_85179,node_85178,seq__84657_85172__$1,temp__5753__auto___85171,path,map__84393,map__84393__$1,msg,updates,reload_info){
return (function (e){
var seq__84752_85182 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__84754_85183 = null;
var count__84755_85184 = (0);
var i__84756_85185 = (0);
while(true){
if((i__84756_85185 < count__84755_85184)){
var map__84773_85187 = chunk__84754_85183.cljs$core$IIndexed$_nth$arity$2(null,i__84756_85185);
var map__84773_85188__$1 = cljs.core.__destructure_map(map__84773_85187);
var task_85189 = map__84773_85188__$1;
var fn_str_85190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84773_85188__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_85191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84773_85188__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_85193 = goog.getObjectByName(fn_str_85190,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_85191)].join(''));

(fn_obj_85193.cljs$core$IFn$_invoke$arity$2 ? fn_obj_85193.cljs$core$IFn$_invoke$arity$2(path,new_link_85180) : fn_obj_85193.call(null,path,new_link_85180));


var G__85194 = seq__84752_85182;
var G__85195 = chunk__84754_85183;
var G__85196 = count__84755_85184;
var G__85197 = (i__84756_85185 + (1));
seq__84752_85182 = G__85194;
chunk__84754_85183 = G__85195;
count__84755_85184 = G__85196;
i__84756_85185 = G__85197;
continue;
} else {
var temp__5753__auto___85198__$1 = cljs.core.seq(seq__84752_85182);
if(temp__5753__auto___85198__$1){
var seq__84752_85199__$1 = temp__5753__auto___85198__$1;
if(cljs.core.chunked_seq_QMARK_(seq__84752_85199__$1)){
var c__4679__auto___85200 = cljs.core.chunk_first(seq__84752_85199__$1);
var G__85201 = cljs.core.chunk_rest(seq__84752_85199__$1);
var G__85202 = c__4679__auto___85200;
var G__85203 = cljs.core.count(c__4679__auto___85200);
var G__85204 = (0);
seq__84752_85182 = G__85201;
chunk__84754_85183 = G__85202;
count__84755_85184 = G__85203;
i__84756_85185 = G__85204;
continue;
} else {
var map__84792_85205 = cljs.core.first(seq__84752_85199__$1);
var map__84792_85206__$1 = cljs.core.__destructure_map(map__84792_85205);
var task_85207 = map__84792_85206__$1;
var fn_str_85208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84792_85206__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_85209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84792_85206__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_85210 = goog.getObjectByName(fn_str_85208,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_85209)].join(''));

(fn_obj_85210.cljs$core$IFn$_invoke$arity$2 ? fn_obj_85210.cljs$core$IFn$_invoke$arity$2(path,new_link_85180) : fn_obj_85210.call(null,path,new_link_85180));


var G__85211 = cljs.core.next(seq__84752_85199__$1);
var G__85212 = null;
var G__85213 = (0);
var G__85214 = (0);
seq__84752_85182 = G__85211;
chunk__84754_85183 = G__85212;
count__84755_85184 = G__85213;
i__84756_85185 = G__85214;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_85178);
});})(seq__84657_85075,chunk__84661_85076,count__84662_85077,i__84663_85078,seq__84395,chunk__84397,count__84398,i__84399,new_link_85180,path_match_85179,node_85178,seq__84657_85172__$1,temp__5753__auto___85171,path,map__84393,map__84393__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_85179], 0));

goog.dom.insertSiblingAfter(new_link_85180,node_85178);


var G__85216 = cljs.core.next(seq__84657_85172__$1);
var G__85217 = null;
var G__85218 = (0);
var G__85219 = (0);
seq__84657_85075 = G__85216;
chunk__84661_85076 = G__85217;
count__84662_85077 = G__85218;
i__84663_85078 = G__85219;
continue;
} else {
var G__85220 = cljs.core.next(seq__84657_85172__$1);
var G__85221 = null;
var G__85222 = (0);
var G__85223 = (0);
seq__84657_85075 = G__85220;
chunk__84661_85076 = G__85221;
count__84662_85077 = G__85222;
i__84663_85078 = G__85223;
continue;
}
} else {
var G__85224 = cljs.core.next(seq__84657_85172__$1);
var G__85225 = null;
var G__85226 = (0);
var G__85227 = (0);
seq__84657_85075 = G__85224;
chunk__84661_85076 = G__85225;
count__84662_85077 = G__85226;
i__84663_85078 = G__85227;
continue;
}
}
} else {
}
}
break;
}


var G__85228 = seq__84395;
var G__85229 = chunk__84397;
var G__85230 = count__84398;
var G__85231 = (i__84399 + (1));
seq__84395 = G__85228;
chunk__84397 = G__85229;
count__84398 = G__85230;
i__84399 = G__85231;
continue;
} else {
var G__85232 = seq__84395;
var G__85233 = chunk__84397;
var G__85234 = count__84398;
var G__85235 = (i__84399 + (1));
seq__84395 = G__85232;
chunk__84397 = G__85233;
count__84398 = G__85234;
i__84399 = G__85235;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__84395);
if(temp__5753__auto__){
var seq__84395__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__84395__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__84395__$1);
var G__85236 = cljs.core.chunk_rest(seq__84395__$1);
var G__85237 = c__4679__auto__;
var G__85238 = cljs.core.count(c__4679__auto__);
var G__85239 = (0);
seq__84395 = G__85236;
chunk__84397 = G__85237;
count__84398 = G__85238;
i__84399 = G__85239;
continue;
} else {
var path = cljs.core.first(seq__84395__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__84797_85240 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__84801_85241 = null;
var count__84802_85242 = (0);
var i__84803_85243 = (0);
while(true){
if((i__84803_85243 < count__84802_85242)){
var node_85244 = chunk__84801_85241.cljs$core$IIndexed$_nth$arity$2(null,i__84803_85243);
if(cljs.core.not(node_85244.shadow$old)){
var path_match_85245 = shadow.cljs.devtools.client.browser.match_paths(node_85244.getAttribute("href"),path);
if(cljs.core.truth_(path_match_85245)){
var new_link_85246 = (function (){var G__84829 = node_85244.cloneNode(true);
G__84829.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_85245),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__84829;
})();
(node_85244.shadow$old = true);

(new_link_85246.onload = ((function (seq__84797_85240,chunk__84801_85241,count__84802_85242,i__84803_85243,seq__84395,chunk__84397,count__84398,i__84399,new_link_85246,path_match_85245,node_85244,path,seq__84395__$1,temp__5753__auto__,map__84393,map__84393__$1,msg,updates,reload_info){
return (function (e){
var seq__84830_85247 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__84832_85248 = null;
var count__84833_85249 = (0);
var i__84834_85250 = (0);
while(true){
if((i__84834_85250 < count__84833_85249)){
var map__84841_85251 = chunk__84832_85248.cljs$core$IIndexed$_nth$arity$2(null,i__84834_85250);
var map__84841_85252__$1 = cljs.core.__destructure_map(map__84841_85251);
var task_85253 = map__84841_85252__$1;
var fn_str_85254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84841_85252__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_85255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84841_85252__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_85256 = goog.getObjectByName(fn_str_85254,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_85255)].join(''));

(fn_obj_85256.cljs$core$IFn$_invoke$arity$2 ? fn_obj_85256.cljs$core$IFn$_invoke$arity$2(path,new_link_85246) : fn_obj_85256.call(null,path,new_link_85246));


var G__85257 = seq__84830_85247;
var G__85258 = chunk__84832_85248;
var G__85259 = count__84833_85249;
var G__85260 = (i__84834_85250 + (1));
seq__84830_85247 = G__85257;
chunk__84832_85248 = G__85258;
count__84833_85249 = G__85259;
i__84834_85250 = G__85260;
continue;
} else {
var temp__5753__auto___85261__$1 = cljs.core.seq(seq__84830_85247);
if(temp__5753__auto___85261__$1){
var seq__84830_85262__$1 = temp__5753__auto___85261__$1;
if(cljs.core.chunked_seq_QMARK_(seq__84830_85262__$1)){
var c__4679__auto___85263 = cljs.core.chunk_first(seq__84830_85262__$1);
var G__85264 = cljs.core.chunk_rest(seq__84830_85262__$1);
var G__85265 = c__4679__auto___85263;
var G__85266 = cljs.core.count(c__4679__auto___85263);
var G__85267 = (0);
seq__84830_85247 = G__85264;
chunk__84832_85248 = G__85265;
count__84833_85249 = G__85266;
i__84834_85250 = G__85267;
continue;
} else {
var map__84842_85268 = cljs.core.first(seq__84830_85262__$1);
var map__84842_85269__$1 = cljs.core.__destructure_map(map__84842_85268);
var task_85270 = map__84842_85269__$1;
var fn_str_85271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84842_85269__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_85272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84842_85269__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_85273 = goog.getObjectByName(fn_str_85271,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_85272)].join(''));

(fn_obj_85273.cljs$core$IFn$_invoke$arity$2 ? fn_obj_85273.cljs$core$IFn$_invoke$arity$2(path,new_link_85246) : fn_obj_85273.call(null,path,new_link_85246));


var G__85274 = cljs.core.next(seq__84830_85262__$1);
var G__85275 = null;
var G__85276 = (0);
var G__85277 = (0);
seq__84830_85247 = G__85274;
chunk__84832_85248 = G__85275;
count__84833_85249 = G__85276;
i__84834_85250 = G__85277;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_85244);
});})(seq__84797_85240,chunk__84801_85241,count__84802_85242,i__84803_85243,seq__84395,chunk__84397,count__84398,i__84399,new_link_85246,path_match_85245,node_85244,path,seq__84395__$1,temp__5753__auto__,map__84393,map__84393__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_85245], 0));

goog.dom.insertSiblingAfter(new_link_85246,node_85244);


var G__85278 = seq__84797_85240;
var G__85279 = chunk__84801_85241;
var G__85280 = count__84802_85242;
var G__85281 = (i__84803_85243 + (1));
seq__84797_85240 = G__85278;
chunk__84801_85241 = G__85279;
count__84802_85242 = G__85280;
i__84803_85243 = G__85281;
continue;
} else {
var G__85282 = seq__84797_85240;
var G__85283 = chunk__84801_85241;
var G__85284 = count__84802_85242;
var G__85285 = (i__84803_85243 + (1));
seq__84797_85240 = G__85282;
chunk__84801_85241 = G__85283;
count__84802_85242 = G__85284;
i__84803_85243 = G__85285;
continue;
}
} else {
var G__85286 = seq__84797_85240;
var G__85287 = chunk__84801_85241;
var G__85288 = count__84802_85242;
var G__85289 = (i__84803_85243 + (1));
seq__84797_85240 = G__85286;
chunk__84801_85241 = G__85287;
count__84802_85242 = G__85288;
i__84803_85243 = G__85289;
continue;
}
} else {
var temp__5753__auto___85290__$1 = cljs.core.seq(seq__84797_85240);
if(temp__5753__auto___85290__$1){
var seq__84797_85291__$1 = temp__5753__auto___85290__$1;
if(cljs.core.chunked_seq_QMARK_(seq__84797_85291__$1)){
var c__4679__auto___85292 = cljs.core.chunk_first(seq__84797_85291__$1);
var G__85293 = cljs.core.chunk_rest(seq__84797_85291__$1);
var G__85294 = c__4679__auto___85292;
var G__85295 = cljs.core.count(c__4679__auto___85292);
var G__85296 = (0);
seq__84797_85240 = G__85293;
chunk__84801_85241 = G__85294;
count__84802_85242 = G__85295;
i__84803_85243 = G__85296;
continue;
} else {
var node_85297 = cljs.core.first(seq__84797_85291__$1);
if(cljs.core.not(node_85297.shadow$old)){
var path_match_85298 = shadow.cljs.devtools.client.browser.match_paths(node_85297.getAttribute("href"),path);
if(cljs.core.truth_(path_match_85298)){
var new_link_85299 = (function (){var G__84843 = node_85297.cloneNode(true);
G__84843.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_85298),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__84843;
})();
(node_85297.shadow$old = true);

(new_link_85299.onload = ((function (seq__84797_85240,chunk__84801_85241,count__84802_85242,i__84803_85243,seq__84395,chunk__84397,count__84398,i__84399,new_link_85299,path_match_85298,node_85297,seq__84797_85291__$1,temp__5753__auto___85290__$1,path,seq__84395__$1,temp__5753__auto__,map__84393,map__84393__$1,msg,updates,reload_info){
return (function (e){
var seq__84844_85300 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__84846_85301 = null;
var count__84847_85302 = (0);
var i__84848_85303 = (0);
while(true){
if((i__84848_85303 < count__84847_85302)){
var map__84852_85304 = chunk__84846_85301.cljs$core$IIndexed$_nth$arity$2(null,i__84848_85303);
var map__84852_85305__$1 = cljs.core.__destructure_map(map__84852_85304);
var task_85306 = map__84852_85305__$1;
var fn_str_85307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84852_85305__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_85308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84852_85305__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_85309 = goog.getObjectByName(fn_str_85307,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_85308)].join(''));

(fn_obj_85309.cljs$core$IFn$_invoke$arity$2 ? fn_obj_85309.cljs$core$IFn$_invoke$arity$2(path,new_link_85299) : fn_obj_85309.call(null,path,new_link_85299));


var G__85310 = seq__84844_85300;
var G__85311 = chunk__84846_85301;
var G__85312 = count__84847_85302;
var G__85313 = (i__84848_85303 + (1));
seq__84844_85300 = G__85310;
chunk__84846_85301 = G__85311;
count__84847_85302 = G__85312;
i__84848_85303 = G__85313;
continue;
} else {
var temp__5753__auto___85314__$2 = cljs.core.seq(seq__84844_85300);
if(temp__5753__auto___85314__$2){
var seq__84844_85315__$1 = temp__5753__auto___85314__$2;
if(cljs.core.chunked_seq_QMARK_(seq__84844_85315__$1)){
var c__4679__auto___85316 = cljs.core.chunk_first(seq__84844_85315__$1);
var G__85317 = cljs.core.chunk_rest(seq__84844_85315__$1);
var G__85318 = c__4679__auto___85316;
var G__85319 = cljs.core.count(c__4679__auto___85316);
var G__85320 = (0);
seq__84844_85300 = G__85317;
chunk__84846_85301 = G__85318;
count__84847_85302 = G__85319;
i__84848_85303 = G__85320;
continue;
} else {
var map__84853_85321 = cljs.core.first(seq__84844_85315__$1);
var map__84853_85322__$1 = cljs.core.__destructure_map(map__84853_85321);
var task_85323 = map__84853_85322__$1;
var fn_str_85324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84853_85322__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_85325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84853_85322__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_85326 = goog.getObjectByName(fn_str_85324,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_85325)].join(''));

(fn_obj_85326.cljs$core$IFn$_invoke$arity$2 ? fn_obj_85326.cljs$core$IFn$_invoke$arity$2(path,new_link_85299) : fn_obj_85326.call(null,path,new_link_85299));


var G__85327 = cljs.core.next(seq__84844_85315__$1);
var G__85328 = null;
var G__85329 = (0);
var G__85330 = (0);
seq__84844_85300 = G__85327;
chunk__84846_85301 = G__85328;
count__84847_85302 = G__85329;
i__84848_85303 = G__85330;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_85297);
});})(seq__84797_85240,chunk__84801_85241,count__84802_85242,i__84803_85243,seq__84395,chunk__84397,count__84398,i__84399,new_link_85299,path_match_85298,node_85297,seq__84797_85291__$1,temp__5753__auto___85290__$1,path,seq__84395__$1,temp__5753__auto__,map__84393,map__84393__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_85298], 0));

goog.dom.insertSiblingAfter(new_link_85299,node_85297);


var G__85331 = cljs.core.next(seq__84797_85291__$1);
var G__85332 = null;
var G__85333 = (0);
var G__85334 = (0);
seq__84797_85240 = G__85331;
chunk__84801_85241 = G__85332;
count__84802_85242 = G__85333;
i__84803_85243 = G__85334;
continue;
} else {
var G__85336 = cljs.core.next(seq__84797_85291__$1);
var G__85337 = null;
var G__85338 = (0);
var G__85339 = (0);
seq__84797_85240 = G__85336;
chunk__84801_85241 = G__85337;
count__84802_85242 = G__85338;
i__84803_85243 = G__85339;
continue;
}
} else {
var G__85340 = cljs.core.next(seq__84797_85291__$1);
var G__85341 = null;
var G__85342 = (0);
var G__85343 = (0);
seq__84797_85240 = G__85340;
chunk__84801_85241 = G__85341;
count__84802_85242 = G__85342;
i__84803_85243 = G__85343;
continue;
}
}
} else {
}
}
break;
}


var G__85344 = cljs.core.next(seq__84395__$1);
var G__85345 = null;
var G__85346 = (0);
var G__85347 = (0);
seq__84395 = G__85344;
chunk__84397 = G__85345;
count__84398 = G__85346;
i__84399 = G__85347;
continue;
} else {
var G__85348 = cljs.core.next(seq__84395__$1);
var G__85349 = null;
var G__85350 = (0);
var G__85351 = (0);
seq__84395 = G__85348;
chunk__84397 = G__85349;
count__84398 = G__85350;
i__84399 = G__85351;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__84854){
var map__84855 = p__84854;
var map__84855__$1 = cljs.core.__destructure_map(map__84855);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84855__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__84858){
var map__84859 = p__84858;
var map__84859__$1 = cljs.core.__destructure_map(map__84859);
var _ = map__84859__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84859__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__84867,done,error){
var map__84869 = p__84867;
var map__84869__$1 = cljs.core.__destructure_map(map__84869);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84869__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__84896,done,error){
var map__84900 = p__84896;
var map__84900__$1 = cljs.core.__destructure_map(map__84900);
var msg = map__84900__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84900__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84900__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84900__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__84909){
var map__84910 = p__84909;
var map__84910__$1 = cljs.core.__destructure_map(map__84910);
var src = map__84910__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84910__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__84911 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__84911) : done.call(null,G__84911));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__84916){
var map__84917 = p__84916;
var map__84917__$1 = cljs.core.__destructure_map(map__84917);
var msg__$1 = map__84917__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84917__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e84920){var ex = e84920;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__84929){
var map__84934 = p__84929;
var map__84934__$1 = cljs.core.__destructure_map(map__84934);
var env = map__84934__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84934__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__84961){
var map__84963 = p__84961;
var map__84963__$1 = cljs.core.__destructure_map(map__84963);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84963__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84963__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__84975){
var map__84976 = p__84975;
var map__84976__$1 = cljs.core.__destructure_map(map__84976);
var svc = map__84976__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84976__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
