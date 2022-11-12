goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62048 = arguments.length;
var i__4865__auto___62049 = (0);
while(true){
if((i__4865__auto___62049 < len__4864__auto___62048)){
args__4870__auto__.push((arguments[i__4865__auto___62049]));

var G__62050 = (i__4865__auto___62049 + (1));
i__4865__auto___62049 = G__62050;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq61124){
var G__61125 = cljs.core.first(seq61124);
var seq61124__$1 = cljs.core.next(seq61124);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61125,seq61124__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__61143 = cljs.core.seq(sources);
var chunk__61144 = null;
var count__61145 = (0);
var i__61146 = (0);
while(true){
if((i__61146 < count__61145)){
var map__61154 = chunk__61144.cljs$core$IIndexed$_nth$arity$2(null,i__61146);
var map__61154__$1 = cljs.core.__destructure_map(map__61154);
var src = map__61154__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61154__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61154__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61154__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61154__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e61155){var e_62054 = e61155;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_62054);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_62054.message)].join('')));
}

var G__62055 = seq__61143;
var G__62056 = chunk__61144;
var G__62057 = count__61145;
var G__62058 = (i__61146 + (1));
seq__61143 = G__62055;
chunk__61144 = G__62056;
count__61145 = G__62057;
i__61146 = G__62058;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61143);
if(temp__5753__auto__){
var seq__61143__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61143__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61143__$1);
var G__62059 = cljs.core.chunk_rest(seq__61143__$1);
var G__62060 = c__4679__auto__;
var G__62061 = cljs.core.count(c__4679__auto__);
var G__62062 = (0);
seq__61143 = G__62059;
chunk__61144 = G__62060;
count__61145 = G__62061;
i__61146 = G__62062;
continue;
} else {
var map__61161 = cljs.core.first(seq__61143__$1);
var map__61161__$1 = cljs.core.__destructure_map(map__61161);
var src = map__61161__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61161__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61161__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61161__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61161__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e61167){var e_62063 = e61167;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_62063);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_62063.message)].join('')));
}

var G__62064 = cljs.core.next(seq__61143__$1);
var G__62065 = null;
var G__62066 = (0);
var G__62067 = (0);
seq__61143 = G__62064;
chunk__61144 = G__62065;
count__61145 = G__62066;
i__61146 = G__62067;
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
var seq__61191 = cljs.core.seq(js_requires);
var chunk__61192 = null;
var count__61193 = (0);
var i__61194 = (0);
while(true){
if((i__61194 < count__61193)){
var js_ns = chunk__61192.cljs$core$IIndexed$_nth$arity$2(null,i__61194);
var require_str_62068 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_62068);


var G__62069 = seq__61191;
var G__62070 = chunk__61192;
var G__62071 = count__61193;
var G__62072 = (i__61194 + (1));
seq__61191 = G__62069;
chunk__61192 = G__62070;
count__61193 = G__62071;
i__61194 = G__62072;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61191);
if(temp__5753__auto__){
var seq__61191__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61191__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61191__$1);
var G__62073 = cljs.core.chunk_rest(seq__61191__$1);
var G__62074 = c__4679__auto__;
var G__62075 = cljs.core.count(c__4679__auto__);
var G__62076 = (0);
seq__61191 = G__62073;
chunk__61192 = G__62074;
count__61193 = G__62075;
i__61194 = G__62076;
continue;
} else {
var js_ns = cljs.core.first(seq__61191__$1);
var require_str_62077 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_62077);


var G__62078 = cljs.core.next(seq__61191__$1);
var G__62079 = null;
var G__62080 = (0);
var G__62081 = (0);
seq__61191 = G__62078;
chunk__61192 = G__62079;
count__61193 = G__62080;
i__61194 = G__62081;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__61237){
var map__61239 = p__61237;
var map__61239__$1 = cljs.core.__destructure_map(map__61239);
var msg = map__61239__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61239__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61239__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61240(s__61241){
return (new cljs.core.LazySeq(null,(function (){
var s__61241__$1 = s__61241;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__61241__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__61246 = cljs.core.first(xs__6308__auto__);
var map__61246__$1 = cljs.core.__destructure_map(map__61246);
var src = map__61246__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61246__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61246__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__61241__$1,map__61246,map__61246__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__61239,map__61239__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61240_$_iter__61242(s__61243){
return (new cljs.core.LazySeq(null,((function (s__61241__$1,map__61246,map__61246__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__61239,map__61239__$1,msg,info,reload_info){
return (function (){
var s__61243__$1 = s__61243;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__61243__$1);
if(temp__5753__auto____$1){
var s__61243__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__61243__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__61243__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__61245 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__61244 = (0);
while(true){
if((i__61244 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__61244);
cljs.core.chunk_append(b__61245,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__62084 = (i__61244 + (1));
i__61244 = G__62084;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61245),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61240_$_iter__61242(cljs.core.chunk_rest(s__61243__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61245),null);
}
} else {
var warning = cljs.core.first(s__61243__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61240_$_iter__61242(cljs.core.rest(s__61243__$2)));
}
} else {
return null;
}
break;
}
});})(s__61241__$1,map__61246,map__61246__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__61239,map__61239__$1,msg,info,reload_info))
,null,null));
});})(s__61241__$1,map__61246,map__61246__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__61239,map__61239__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61240(cljs.core.rest(s__61241__$1)));
} else {
var G__62085 = cljs.core.rest(s__61241__$1);
s__61241__$1 = G__62085;
continue;
}
} else {
var G__62086 = cljs.core.rest(s__61241__$1);
s__61241__$1 = G__62086;
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
var seq__61274_62091 = cljs.core.seq(warnings);
var chunk__61275_62092 = null;
var count__61276_62093 = (0);
var i__61277_62094 = (0);
while(true){
if((i__61277_62094 < count__61276_62093)){
var map__61297_62095 = chunk__61275_62092.cljs$core$IIndexed$_nth$arity$2(null,i__61277_62094);
var map__61297_62096__$1 = cljs.core.__destructure_map(map__61297_62095);
var w_62097 = map__61297_62096__$1;
var msg_62098__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61297_62096__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_62099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61297_62096__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_62100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61297_62096__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_62101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61297_62096__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_62101)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_62099),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_62100),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_62098__$1)].join(''));


var G__62103 = seq__61274_62091;
var G__62104 = chunk__61275_62092;
var G__62105 = count__61276_62093;
var G__62106 = (i__61277_62094 + (1));
seq__61274_62091 = G__62103;
chunk__61275_62092 = G__62104;
count__61276_62093 = G__62105;
i__61277_62094 = G__62106;
continue;
} else {
var temp__5753__auto___62107 = cljs.core.seq(seq__61274_62091);
if(temp__5753__auto___62107){
var seq__61274_62108__$1 = temp__5753__auto___62107;
if(cljs.core.chunked_seq_QMARK_(seq__61274_62108__$1)){
var c__4679__auto___62109 = cljs.core.chunk_first(seq__61274_62108__$1);
var G__62110 = cljs.core.chunk_rest(seq__61274_62108__$1);
var G__62111 = c__4679__auto___62109;
var G__62112 = cljs.core.count(c__4679__auto___62109);
var G__62113 = (0);
seq__61274_62091 = G__62110;
chunk__61275_62092 = G__62111;
count__61276_62093 = G__62112;
i__61277_62094 = G__62113;
continue;
} else {
var map__61298_62114 = cljs.core.first(seq__61274_62108__$1);
var map__61298_62115__$1 = cljs.core.__destructure_map(map__61298_62114);
var w_62116 = map__61298_62115__$1;
var msg_62117__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61298_62115__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_62118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61298_62115__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_62119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61298_62115__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_62120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61298_62115__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_62120)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_62118),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_62119),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_62117__$1)].join(''));


var G__62124 = cljs.core.next(seq__61274_62108__$1);
var G__62125 = null;
var G__62126 = (0);
var G__62127 = (0);
seq__61274_62091 = G__62124;
chunk__61275_62092 = G__62125;
count__61276_62093 = G__62126;
i__61277_62094 = G__62127;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__61229_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__61229_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__61303){
var map__61304 = p__61303;
var map__61304__$1 = cljs.core.__destructure_map(map__61304);
var msg = map__61304__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61304__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61304__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__61305 = cljs.core.seq(updates);
var chunk__61307 = null;
var count__61308 = (0);
var i__61309 = (0);
while(true){
if((i__61309 < count__61308)){
var path = chunk__61307.cljs$core$IIndexed$_nth$arity$2(null,i__61309);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__61573_62131 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__61577_62132 = null;
var count__61578_62133 = (0);
var i__61579_62134 = (0);
while(true){
if((i__61579_62134 < count__61578_62133)){
var node_62135 = chunk__61577_62132.cljs$core$IIndexed$_nth$arity$2(null,i__61579_62134);
if(cljs.core.not(node_62135.shadow$old)){
var path_match_62136 = shadow.cljs.devtools.client.browser.match_paths(node_62135.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62136)){
var new_link_62137 = (function (){var G__61607 = node_62135.cloneNode(true);
G__61607.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62136),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61607;
})();
(node_62135.shadow$old = true);

(new_link_62137.onload = ((function (seq__61573_62131,chunk__61577_62132,count__61578_62133,i__61579_62134,seq__61305,chunk__61307,count__61308,i__61309,new_link_62137,path_match_62136,node_62135,path,map__61304,map__61304__$1,msg,updates,reload_info){
return (function (e){
var seq__61608_62138 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__61610_62139 = null;
var count__61611_62140 = (0);
var i__61612_62141 = (0);
while(true){
if((i__61612_62141 < count__61611_62140)){
var map__61617_62142 = chunk__61610_62139.cljs$core$IIndexed$_nth$arity$2(null,i__61612_62141);
var map__61617_62143__$1 = cljs.core.__destructure_map(map__61617_62142);
var task_62144 = map__61617_62143__$1;
var fn_str_62145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61617_62143__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61617_62143__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62150 = goog.getObjectByName(fn_str_62145,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62146)].join(''));

(fn_obj_62150.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62150.cljs$core$IFn$_invoke$arity$2(path,new_link_62137) : fn_obj_62150.call(null,path,new_link_62137));


var G__62152 = seq__61608_62138;
var G__62153 = chunk__61610_62139;
var G__62154 = count__61611_62140;
var G__62155 = (i__61612_62141 + (1));
seq__61608_62138 = G__62152;
chunk__61610_62139 = G__62153;
count__61611_62140 = G__62154;
i__61612_62141 = G__62155;
continue;
} else {
var temp__5753__auto___62158 = cljs.core.seq(seq__61608_62138);
if(temp__5753__auto___62158){
var seq__61608_62160__$1 = temp__5753__auto___62158;
if(cljs.core.chunked_seq_QMARK_(seq__61608_62160__$1)){
var c__4679__auto___62161 = cljs.core.chunk_first(seq__61608_62160__$1);
var G__62162 = cljs.core.chunk_rest(seq__61608_62160__$1);
var G__62163 = c__4679__auto___62161;
var G__62164 = cljs.core.count(c__4679__auto___62161);
var G__62165 = (0);
seq__61608_62138 = G__62162;
chunk__61610_62139 = G__62163;
count__61611_62140 = G__62164;
i__61612_62141 = G__62165;
continue;
} else {
var map__61633_62167 = cljs.core.first(seq__61608_62160__$1);
var map__61633_62168__$1 = cljs.core.__destructure_map(map__61633_62167);
var task_62169 = map__61633_62168__$1;
var fn_str_62170 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61633_62168__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62171 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61633_62168__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62172 = goog.getObjectByName(fn_str_62170,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62171)].join(''));

(fn_obj_62172.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62172.cljs$core$IFn$_invoke$arity$2(path,new_link_62137) : fn_obj_62172.call(null,path,new_link_62137));


var G__62173 = cljs.core.next(seq__61608_62160__$1);
var G__62174 = null;
var G__62175 = (0);
var G__62176 = (0);
seq__61608_62138 = G__62173;
chunk__61610_62139 = G__62174;
count__61611_62140 = G__62175;
i__61612_62141 = G__62176;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_62135);
});})(seq__61573_62131,chunk__61577_62132,count__61578_62133,i__61579_62134,seq__61305,chunk__61307,count__61308,i__61309,new_link_62137,path_match_62136,node_62135,path,map__61304,map__61304__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62136], 0));

goog.dom.insertSiblingAfter(new_link_62137,node_62135);


var G__62177 = seq__61573_62131;
var G__62178 = chunk__61577_62132;
var G__62179 = count__61578_62133;
var G__62180 = (i__61579_62134 + (1));
seq__61573_62131 = G__62177;
chunk__61577_62132 = G__62178;
count__61578_62133 = G__62179;
i__61579_62134 = G__62180;
continue;
} else {
var G__62181 = seq__61573_62131;
var G__62182 = chunk__61577_62132;
var G__62183 = count__61578_62133;
var G__62184 = (i__61579_62134 + (1));
seq__61573_62131 = G__62181;
chunk__61577_62132 = G__62182;
count__61578_62133 = G__62183;
i__61579_62134 = G__62184;
continue;
}
} else {
var G__62185 = seq__61573_62131;
var G__62186 = chunk__61577_62132;
var G__62187 = count__61578_62133;
var G__62188 = (i__61579_62134 + (1));
seq__61573_62131 = G__62185;
chunk__61577_62132 = G__62186;
count__61578_62133 = G__62187;
i__61579_62134 = G__62188;
continue;
}
} else {
var temp__5753__auto___62190 = cljs.core.seq(seq__61573_62131);
if(temp__5753__auto___62190){
var seq__61573_62191__$1 = temp__5753__auto___62190;
if(cljs.core.chunked_seq_QMARK_(seq__61573_62191__$1)){
var c__4679__auto___62192 = cljs.core.chunk_first(seq__61573_62191__$1);
var G__62193 = cljs.core.chunk_rest(seq__61573_62191__$1);
var G__62194 = c__4679__auto___62192;
var G__62195 = cljs.core.count(c__4679__auto___62192);
var G__62196 = (0);
seq__61573_62131 = G__62193;
chunk__61577_62132 = G__62194;
count__61578_62133 = G__62195;
i__61579_62134 = G__62196;
continue;
} else {
var node_62197 = cljs.core.first(seq__61573_62191__$1);
if(cljs.core.not(node_62197.shadow$old)){
var path_match_62198 = shadow.cljs.devtools.client.browser.match_paths(node_62197.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62198)){
var new_link_62199 = (function (){var G__61660 = node_62197.cloneNode(true);
G__61660.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62198),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61660;
})();
(node_62197.shadow$old = true);

(new_link_62199.onload = ((function (seq__61573_62131,chunk__61577_62132,count__61578_62133,i__61579_62134,seq__61305,chunk__61307,count__61308,i__61309,new_link_62199,path_match_62198,node_62197,seq__61573_62191__$1,temp__5753__auto___62190,path,map__61304,map__61304__$1,msg,updates,reload_info){
return (function (e){
var seq__61667_62204 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__61669_62205 = null;
var count__61670_62206 = (0);
var i__61671_62207 = (0);
while(true){
if((i__61671_62207 < count__61670_62206)){
var map__61712_62208 = chunk__61669_62205.cljs$core$IIndexed$_nth$arity$2(null,i__61671_62207);
var map__61712_62209__$1 = cljs.core.__destructure_map(map__61712_62208);
var task_62210 = map__61712_62209__$1;
var fn_str_62211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61712_62209__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61712_62209__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62213 = goog.getObjectByName(fn_str_62211,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62212)].join(''));

(fn_obj_62213.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62213.cljs$core$IFn$_invoke$arity$2(path,new_link_62199) : fn_obj_62213.call(null,path,new_link_62199));


var G__62214 = seq__61667_62204;
var G__62215 = chunk__61669_62205;
var G__62216 = count__61670_62206;
var G__62217 = (i__61671_62207 + (1));
seq__61667_62204 = G__62214;
chunk__61669_62205 = G__62215;
count__61670_62206 = G__62216;
i__61671_62207 = G__62217;
continue;
} else {
var temp__5753__auto___62218__$1 = cljs.core.seq(seq__61667_62204);
if(temp__5753__auto___62218__$1){
var seq__61667_62219__$1 = temp__5753__auto___62218__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61667_62219__$1)){
var c__4679__auto___62220 = cljs.core.chunk_first(seq__61667_62219__$1);
var G__62221 = cljs.core.chunk_rest(seq__61667_62219__$1);
var G__62222 = c__4679__auto___62220;
var G__62223 = cljs.core.count(c__4679__auto___62220);
var G__62224 = (0);
seq__61667_62204 = G__62221;
chunk__61669_62205 = G__62222;
count__61670_62206 = G__62223;
i__61671_62207 = G__62224;
continue;
} else {
var map__61725_62225 = cljs.core.first(seq__61667_62219__$1);
var map__61725_62226__$1 = cljs.core.__destructure_map(map__61725_62225);
var task_62227 = map__61725_62226__$1;
var fn_str_62228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61725_62226__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61725_62226__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62231 = goog.getObjectByName(fn_str_62228,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62229)].join(''));

(fn_obj_62231.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62231.cljs$core$IFn$_invoke$arity$2(path,new_link_62199) : fn_obj_62231.call(null,path,new_link_62199));


var G__62233 = cljs.core.next(seq__61667_62219__$1);
var G__62234 = null;
var G__62235 = (0);
var G__62236 = (0);
seq__61667_62204 = G__62233;
chunk__61669_62205 = G__62234;
count__61670_62206 = G__62235;
i__61671_62207 = G__62236;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_62197);
});})(seq__61573_62131,chunk__61577_62132,count__61578_62133,i__61579_62134,seq__61305,chunk__61307,count__61308,i__61309,new_link_62199,path_match_62198,node_62197,seq__61573_62191__$1,temp__5753__auto___62190,path,map__61304,map__61304__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62198], 0));

goog.dom.insertSiblingAfter(new_link_62199,node_62197);


var G__62237 = cljs.core.next(seq__61573_62191__$1);
var G__62238 = null;
var G__62239 = (0);
var G__62240 = (0);
seq__61573_62131 = G__62237;
chunk__61577_62132 = G__62238;
count__61578_62133 = G__62239;
i__61579_62134 = G__62240;
continue;
} else {
var G__62241 = cljs.core.next(seq__61573_62191__$1);
var G__62242 = null;
var G__62243 = (0);
var G__62244 = (0);
seq__61573_62131 = G__62241;
chunk__61577_62132 = G__62242;
count__61578_62133 = G__62243;
i__61579_62134 = G__62244;
continue;
}
} else {
var G__62245 = cljs.core.next(seq__61573_62191__$1);
var G__62246 = null;
var G__62247 = (0);
var G__62248 = (0);
seq__61573_62131 = G__62245;
chunk__61577_62132 = G__62246;
count__61578_62133 = G__62247;
i__61579_62134 = G__62248;
continue;
}
}
} else {
}
}
break;
}


var G__62249 = seq__61305;
var G__62250 = chunk__61307;
var G__62251 = count__61308;
var G__62252 = (i__61309 + (1));
seq__61305 = G__62249;
chunk__61307 = G__62250;
count__61308 = G__62251;
i__61309 = G__62252;
continue;
} else {
var G__62253 = seq__61305;
var G__62254 = chunk__61307;
var G__62255 = count__61308;
var G__62256 = (i__61309 + (1));
seq__61305 = G__62253;
chunk__61307 = G__62254;
count__61308 = G__62255;
i__61309 = G__62256;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61305);
if(temp__5753__auto__){
var seq__61305__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61305__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61305__$1);
var G__62258 = cljs.core.chunk_rest(seq__61305__$1);
var G__62259 = c__4679__auto__;
var G__62260 = cljs.core.count(c__4679__auto__);
var G__62261 = (0);
seq__61305 = G__62258;
chunk__61307 = G__62259;
count__61308 = G__62260;
i__61309 = G__62261;
continue;
} else {
var path = cljs.core.first(seq__61305__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__61739_62269 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__61743_62270 = null;
var count__61744_62271 = (0);
var i__61745_62272 = (0);
while(true){
if((i__61745_62272 < count__61744_62271)){
var node_62274 = chunk__61743_62270.cljs$core$IIndexed$_nth$arity$2(null,i__61745_62272);
if(cljs.core.not(node_62274.shadow$old)){
var path_match_62275 = shadow.cljs.devtools.client.browser.match_paths(node_62274.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62275)){
var new_link_62276 = (function (){var G__61817 = node_62274.cloneNode(true);
G__61817.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62275),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61817;
})();
(node_62274.shadow$old = true);

(new_link_62276.onload = ((function (seq__61739_62269,chunk__61743_62270,count__61744_62271,i__61745_62272,seq__61305,chunk__61307,count__61308,i__61309,new_link_62276,path_match_62275,node_62274,path,seq__61305__$1,temp__5753__auto__,map__61304,map__61304__$1,msg,updates,reload_info){
return (function (e){
var seq__61819_62277 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__61821_62278 = null;
var count__61822_62279 = (0);
var i__61823_62280 = (0);
while(true){
if((i__61823_62280 < count__61822_62279)){
var map__61828_62281 = chunk__61821_62278.cljs$core$IIndexed$_nth$arity$2(null,i__61823_62280);
var map__61828_62282__$1 = cljs.core.__destructure_map(map__61828_62281);
var task_62283 = map__61828_62282__$1;
var fn_str_62284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61828_62282__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61828_62282__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62286 = goog.getObjectByName(fn_str_62284,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62285)].join(''));

(fn_obj_62286.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62286.cljs$core$IFn$_invoke$arity$2(path,new_link_62276) : fn_obj_62286.call(null,path,new_link_62276));


var G__62287 = seq__61819_62277;
var G__62288 = chunk__61821_62278;
var G__62289 = count__61822_62279;
var G__62290 = (i__61823_62280 + (1));
seq__61819_62277 = G__62287;
chunk__61821_62278 = G__62288;
count__61822_62279 = G__62289;
i__61823_62280 = G__62290;
continue;
} else {
var temp__5753__auto___62291__$1 = cljs.core.seq(seq__61819_62277);
if(temp__5753__auto___62291__$1){
var seq__61819_62292__$1 = temp__5753__auto___62291__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61819_62292__$1)){
var c__4679__auto___62293 = cljs.core.chunk_first(seq__61819_62292__$1);
var G__62294 = cljs.core.chunk_rest(seq__61819_62292__$1);
var G__62295 = c__4679__auto___62293;
var G__62296 = cljs.core.count(c__4679__auto___62293);
var G__62297 = (0);
seq__61819_62277 = G__62294;
chunk__61821_62278 = G__62295;
count__61822_62279 = G__62296;
i__61823_62280 = G__62297;
continue;
} else {
var map__61833_62298 = cljs.core.first(seq__61819_62292__$1);
var map__61833_62300__$1 = cljs.core.__destructure_map(map__61833_62298);
var task_62301 = map__61833_62300__$1;
var fn_str_62302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61833_62300__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61833_62300__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62305 = goog.getObjectByName(fn_str_62302,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62303)].join(''));

(fn_obj_62305.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62305.cljs$core$IFn$_invoke$arity$2(path,new_link_62276) : fn_obj_62305.call(null,path,new_link_62276));


var G__62307 = cljs.core.next(seq__61819_62292__$1);
var G__62308 = null;
var G__62309 = (0);
var G__62310 = (0);
seq__61819_62277 = G__62307;
chunk__61821_62278 = G__62308;
count__61822_62279 = G__62309;
i__61823_62280 = G__62310;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_62274);
});})(seq__61739_62269,chunk__61743_62270,count__61744_62271,i__61745_62272,seq__61305,chunk__61307,count__61308,i__61309,new_link_62276,path_match_62275,node_62274,path,seq__61305__$1,temp__5753__auto__,map__61304,map__61304__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62275], 0));

goog.dom.insertSiblingAfter(new_link_62276,node_62274);


var G__62313 = seq__61739_62269;
var G__62314 = chunk__61743_62270;
var G__62315 = count__61744_62271;
var G__62316 = (i__61745_62272 + (1));
seq__61739_62269 = G__62313;
chunk__61743_62270 = G__62314;
count__61744_62271 = G__62315;
i__61745_62272 = G__62316;
continue;
} else {
var G__62317 = seq__61739_62269;
var G__62318 = chunk__61743_62270;
var G__62319 = count__61744_62271;
var G__62320 = (i__61745_62272 + (1));
seq__61739_62269 = G__62317;
chunk__61743_62270 = G__62318;
count__61744_62271 = G__62319;
i__61745_62272 = G__62320;
continue;
}
} else {
var G__62322 = seq__61739_62269;
var G__62323 = chunk__61743_62270;
var G__62324 = count__61744_62271;
var G__62325 = (i__61745_62272 + (1));
seq__61739_62269 = G__62322;
chunk__61743_62270 = G__62323;
count__61744_62271 = G__62324;
i__61745_62272 = G__62325;
continue;
}
} else {
var temp__5753__auto___62326__$1 = cljs.core.seq(seq__61739_62269);
if(temp__5753__auto___62326__$1){
var seq__61739_62327__$1 = temp__5753__auto___62326__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61739_62327__$1)){
var c__4679__auto___62328 = cljs.core.chunk_first(seq__61739_62327__$1);
var G__62329 = cljs.core.chunk_rest(seq__61739_62327__$1);
var G__62330 = c__4679__auto___62328;
var G__62331 = cljs.core.count(c__4679__auto___62328);
var G__62332 = (0);
seq__61739_62269 = G__62329;
chunk__61743_62270 = G__62330;
count__61744_62271 = G__62331;
i__61745_62272 = G__62332;
continue;
} else {
var node_62333 = cljs.core.first(seq__61739_62327__$1);
if(cljs.core.not(node_62333.shadow$old)){
var path_match_62334 = shadow.cljs.devtools.client.browser.match_paths(node_62333.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62334)){
var new_link_62335 = (function (){var G__61839 = node_62333.cloneNode(true);
G__61839.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62334),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61839;
})();
(node_62333.shadow$old = true);

(new_link_62335.onload = ((function (seq__61739_62269,chunk__61743_62270,count__61744_62271,i__61745_62272,seq__61305,chunk__61307,count__61308,i__61309,new_link_62335,path_match_62334,node_62333,seq__61739_62327__$1,temp__5753__auto___62326__$1,path,seq__61305__$1,temp__5753__auto__,map__61304,map__61304__$1,msg,updates,reload_info){
return (function (e){
var seq__61853_62337 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__61855_62338 = null;
var count__61856_62339 = (0);
var i__61857_62340 = (0);
while(true){
if((i__61857_62340 < count__61856_62339)){
var map__61868_62341 = chunk__61855_62338.cljs$core$IIndexed$_nth$arity$2(null,i__61857_62340);
var map__61868_62342__$1 = cljs.core.__destructure_map(map__61868_62341);
var task_62343 = map__61868_62342__$1;
var fn_str_62344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61868_62342__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61868_62342__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62346 = goog.getObjectByName(fn_str_62344,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62345)].join(''));

(fn_obj_62346.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62346.cljs$core$IFn$_invoke$arity$2(path,new_link_62335) : fn_obj_62346.call(null,path,new_link_62335));


var G__62348 = seq__61853_62337;
var G__62349 = chunk__61855_62338;
var G__62350 = count__61856_62339;
var G__62351 = (i__61857_62340 + (1));
seq__61853_62337 = G__62348;
chunk__61855_62338 = G__62349;
count__61856_62339 = G__62350;
i__61857_62340 = G__62351;
continue;
} else {
var temp__5753__auto___62352__$2 = cljs.core.seq(seq__61853_62337);
if(temp__5753__auto___62352__$2){
var seq__61853_62353__$1 = temp__5753__auto___62352__$2;
if(cljs.core.chunked_seq_QMARK_(seq__61853_62353__$1)){
var c__4679__auto___62354 = cljs.core.chunk_first(seq__61853_62353__$1);
var G__62355 = cljs.core.chunk_rest(seq__61853_62353__$1);
var G__62356 = c__4679__auto___62354;
var G__62357 = cljs.core.count(c__4679__auto___62354);
var G__62358 = (0);
seq__61853_62337 = G__62355;
chunk__61855_62338 = G__62356;
count__61856_62339 = G__62357;
i__61857_62340 = G__62358;
continue;
} else {
var map__61870_62359 = cljs.core.first(seq__61853_62353__$1);
var map__61870_62360__$1 = cljs.core.__destructure_map(map__61870_62359);
var task_62361 = map__61870_62360__$1;
var fn_str_62362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61870_62360__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61870_62360__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62366 = goog.getObjectByName(fn_str_62362,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62363)].join(''));

(fn_obj_62366.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62366.cljs$core$IFn$_invoke$arity$2(path,new_link_62335) : fn_obj_62366.call(null,path,new_link_62335));


var G__62367 = cljs.core.next(seq__61853_62353__$1);
var G__62368 = null;
var G__62369 = (0);
var G__62370 = (0);
seq__61853_62337 = G__62367;
chunk__61855_62338 = G__62368;
count__61856_62339 = G__62369;
i__61857_62340 = G__62370;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_62333);
});})(seq__61739_62269,chunk__61743_62270,count__61744_62271,i__61745_62272,seq__61305,chunk__61307,count__61308,i__61309,new_link_62335,path_match_62334,node_62333,seq__61739_62327__$1,temp__5753__auto___62326__$1,path,seq__61305__$1,temp__5753__auto__,map__61304,map__61304__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62334], 0));

goog.dom.insertSiblingAfter(new_link_62335,node_62333);


var G__62371 = cljs.core.next(seq__61739_62327__$1);
var G__62372 = null;
var G__62373 = (0);
var G__62374 = (0);
seq__61739_62269 = G__62371;
chunk__61743_62270 = G__62372;
count__61744_62271 = G__62373;
i__61745_62272 = G__62374;
continue;
} else {
var G__62375 = cljs.core.next(seq__61739_62327__$1);
var G__62376 = null;
var G__62377 = (0);
var G__62378 = (0);
seq__61739_62269 = G__62375;
chunk__61743_62270 = G__62376;
count__61744_62271 = G__62377;
i__61745_62272 = G__62378;
continue;
}
} else {
var G__62379 = cljs.core.next(seq__61739_62327__$1);
var G__62380 = null;
var G__62381 = (0);
var G__62382 = (0);
seq__61739_62269 = G__62379;
chunk__61743_62270 = G__62380;
count__61744_62271 = G__62381;
i__61745_62272 = G__62382;
continue;
}
}
} else {
}
}
break;
}


var G__62383 = cljs.core.next(seq__61305__$1);
var G__62384 = null;
var G__62385 = (0);
var G__62386 = (0);
seq__61305 = G__62383;
chunk__61307 = G__62384;
count__61308 = G__62385;
i__61309 = G__62386;
continue;
} else {
var G__62387 = cljs.core.next(seq__61305__$1);
var G__62388 = null;
var G__62389 = (0);
var G__62390 = (0);
seq__61305 = G__62387;
chunk__61307 = G__62388;
count__61308 = G__62389;
i__61309 = G__62390;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__61897){
var map__61899 = p__61897;
var map__61899__$1 = cljs.core.__destructure_map(map__61899);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61899__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__61913){
var map__61914 = p__61913;
var map__61914__$1 = cljs.core.__destructure_map(map__61914);
var _ = map__61914__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61914__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__61917,done,error){
var map__61919 = p__61917;
var map__61919__$1 = cljs.core.__destructure_map(map__61919);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61919__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__61924,done,error){
var map__61926 = p__61924;
var map__61926__$1 = cljs.core.__destructure_map(map__61926);
var msg = map__61926__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61926__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61926__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61926__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__61929){
var map__61932 = p__61929;
var map__61932__$1 = cljs.core.__destructure_map(map__61932);
var src = map__61932__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61932__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__61945 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__61945) : done.call(null,G__61945));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__61977){
var map__61978 = p__61977;
var map__61978__$1 = cljs.core.__destructure_map(map__61978);
var msg__$1 = map__61978__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61978__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e61984){var ex = e61984;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__61993){
var map__61994 = p__61993;
var map__61994__$1 = cljs.core.__destructure_map(map__61994);
var env = map__61994__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61994__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__62021){
var map__62023 = p__62021;
var map__62023__$1 = cljs.core.__destructure_map(map__62023);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62023__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62023__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__62030){
var map__62031 = p__62030;
var map__62031__$1 = cljs.core.__destructure_map(map__62031);
var svc = map__62031__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62031__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
