goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___84603 = arguments.length;
var i__4865__auto___84604 = (0);
while(true){
if((i__4865__auto___84604 < len__4864__auto___84603)){
args__4870__auto__.push((arguments[i__4865__auto___84604]));

var G__84605 = (i__4865__auto___84604 + (1));
i__4865__auto___84604 = G__84605;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq83889){
var G__83890 = cljs.core.first(seq83889);
var seq83889__$1 = cljs.core.next(seq83889);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__83890,seq83889__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__83908 = cljs.core.seq(sources);
var chunk__83909 = null;
var count__83910 = (0);
var i__83911 = (0);
while(true){
if((i__83911 < count__83910)){
var map__83921 = chunk__83909.cljs$core$IIndexed$_nth$arity$2(null,i__83911);
var map__83921__$1 = cljs.core.__destructure_map(map__83921);
var src = map__83921__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83921__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83921__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83921__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83921__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e83922){var e_84606 = e83922;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_84606);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_84606.message)].join('')));
}

var G__84607 = seq__83908;
var G__84608 = chunk__83909;
var G__84609 = count__83910;
var G__84610 = (i__83911 + (1));
seq__83908 = G__84607;
chunk__83909 = G__84608;
count__83910 = G__84609;
i__83911 = G__84610;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__83908);
if(temp__5753__auto__){
var seq__83908__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__83908__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__83908__$1);
var G__84612 = cljs.core.chunk_rest(seq__83908__$1);
var G__84613 = c__4679__auto__;
var G__84614 = cljs.core.count(c__4679__auto__);
var G__84615 = (0);
seq__83908 = G__84612;
chunk__83909 = G__84613;
count__83910 = G__84614;
i__83911 = G__84615;
continue;
} else {
var map__83924 = cljs.core.first(seq__83908__$1);
var map__83924__$1 = cljs.core.__destructure_map(map__83924);
var src = map__83924__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83924__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83924__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83924__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83924__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e83928){var e_84617 = e83928;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_84617);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_84617.message)].join('')));
}

var G__84618 = cljs.core.next(seq__83908__$1);
var G__84619 = null;
var G__84620 = (0);
var G__84621 = (0);
seq__83908 = G__84618;
chunk__83909 = G__84619;
count__83910 = G__84620;
i__83911 = G__84621;
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
var seq__83948 = cljs.core.seq(js_requires);
var chunk__83949 = null;
var count__83950 = (0);
var i__83951 = (0);
while(true){
if((i__83951 < count__83950)){
var js_ns = chunk__83949.cljs$core$IIndexed$_nth$arity$2(null,i__83951);
var require_str_84629 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_84629);


var G__84632 = seq__83948;
var G__84633 = chunk__83949;
var G__84634 = count__83950;
var G__84635 = (i__83951 + (1));
seq__83948 = G__84632;
chunk__83949 = G__84633;
count__83950 = G__84634;
i__83951 = G__84635;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__83948);
if(temp__5753__auto__){
var seq__83948__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__83948__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__83948__$1);
var G__84636 = cljs.core.chunk_rest(seq__83948__$1);
var G__84637 = c__4679__auto__;
var G__84638 = cljs.core.count(c__4679__auto__);
var G__84639 = (0);
seq__83948 = G__84636;
chunk__83949 = G__84637;
count__83950 = G__84638;
i__83951 = G__84639;
continue;
} else {
var js_ns = cljs.core.first(seq__83948__$1);
var require_str_84640 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_84640);


var G__84641 = cljs.core.next(seq__83948__$1);
var G__84642 = null;
var G__84643 = (0);
var G__84644 = (0);
seq__83948 = G__84641;
chunk__83949 = G__84642;
count__83950 = G__84643;
i__83951 = G__84644;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__83981){
var map__83982 = p__83981;
var map__83982__$1 = cljs.core.__destructure_map(map__83982);
var msg = map__83982__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83982__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83982__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__83985(s__83986){
return (new cljs.core.LazySeq(null,(function (){
var s__83986__$1 = s__83986;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__83986__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__84002 = cljs.core.first(xs__6308__auto__);
var map__84002__$1 = cljs.core.__destructure_map(map__84002);
var src = map__84002__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84002__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84002__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__83986__$1,map__84002,map__84002__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__83982,map__83982__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__83985_$_iter__83987(s__83988){
return (new cljs.core.LazySeq(null,((function (s__83986__$1,map__84002,map__84002__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__83982,map__83982__$1,msg,info,reload_info){
return (function (){
var s__83988__$1 = s__83988;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__83988__$1);
if(temp__5753__auto____$1){
var s__83988__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__83988__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__83988__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__83990 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__83989 = (0);
while(true){
if((i__83989 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__83989);
cljs.core.chunk_append(b__83990,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__84650 = (i__83989 + (1));
i__83989 = G__84650;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__83990),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__83985_$_iter__83987(cljs.core.chunk_rest(s__83988__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__83990),null);
}
} else {
var warning = cljs.core.first(s__83988__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__83985_$_iter__83987(cljs.core.rest(s__83988__$2)));
}
} else {
return null;
}
break;
}
});})(s__83986__$1,map__84002,map__84002__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__83982,map__83982__$1,msg,info,reload_info))
,null,null));
});})(s__83986__$1,map__84002,map__84002__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__83982,map__83982__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__83985(cljs.core.rest(s__83986__$1)));
} else {
var G__84652 = cljs.core.rest(s__83986__$1);
s__83986__$1 = G__84652;
continue;
}
} else {
var G__84653 = cljs.core.rest(s__83986__$1);
s__83986__$1 = G__84653;
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
var seq__84016_84655 = cljs.core.seq(warnings);
var chunk__84017_84656 = null;
var count__84018_84657 = (0);
var i__84019_84658 = (0);
while(true){
if((i__84019_84658 < count__84018_84657)){
var map__84035_84659 = chunk__84017_84656.cljs$core$IIndexed$_nth$arity$2(null,i__84019_84658);
var map__84035_84660__$1 = cljs.core.__destructure_map(map__84035_84659);
var w_84661 = map__84035_84660__$1;
var msg_84662__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84035_84660__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_84663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84035_84660__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_84664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84035_84660__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_84665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84035_84660__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_84665)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_84663),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_84664),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_84662__$1)].join(''));


var G__84668 = seq__84016_84655;
var G__84669 = chunk__84017_84656;
var G__84670 = count__84018_84657;
var G__84671 = (i__84019_84658 + (1));
seq__84016_84655 = G__84668;
chunk__84017_84656 = G__84669;
count__84018_84657 = G__84670;
i__84019_84658 = G__84671;
continue;
} else {
var temp__5753__auto___84672 = cljs.core.seq(seq__84016_84655);
if(temp__5753__auto___84672){
var seq__84016_84675__$1 = temp__5753__auto___84672;
if(cljs.core.chunked_seq_QMARK_(seq__84016_84675__$1)){
var c__4679__auto___84676 = cljs.core.chunk_first(seq__84016_84675__$1);
var G__84677 = cljs.core.chunk_rest(seq__84016_84675__$1);
var G__84678 = c__4679__auto___84676;
var G__84679 = cljs.core.count(c__4679__auto___84676);
var G__84680 = (0);
seq__84016_84655 = G__84677;
chunk__84017_84656 = G__84678;
count__84018_84657 = G__84679;
i__84019_84658 = G__84680;
continue;
} else {
var map__84040_84681 = cljs.core.first(seq__84016_84675__$1);
var map__84040_84682__$1 = cljs.core.__destructure_map(map__84040_84681);
var w_84683 = map__84040_84682__$1;
var msg_84684__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84040_84682__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_84685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84040_84682__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_84686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84040_84682__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_84687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84040_84682__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_84687)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_84685),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_84686),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_84684__$1)].join(''));


var G__84688 = cljs.core.next(seq__84016_84675__$1);
var G__84689 = null;
var G__84690 = (0);
var G__84691 = (0);
seq__84016_84655 = G__84688;
chunk__84017_84656 = G__84689;
count__84018_84657 = G__84690;
i__84019_84658 = G__84691;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__83980_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__83980_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__84058){
var map__84060 = p__84058;
var map__84060__$1 = cljs.core.__destructure_map(map__84060);
var msg = map__84060__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84060__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84060__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__84070 = cljs.core.seq(updates);
var chunk__84072 = null;
var count__84073 = (0);
var i__84074 = (0);
while(true){
if((i__84074 < count__84073)){
var path = chunk__84072.cljs$core$IIndexed$_nth$arity$2(null,i__84074);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__84330_84695 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__84334_84696 = null;
var count__84335_84697 = (0);
var i__84336_84698 = (0);
while(true){
if((i__84336_84698 < count__84335_84697)){
var node_84701 = chunk__84334_84696.cljs$core$IIndexed$_nth$arity$2(null,i__84336_84698);
if(cljs.core.not(node_84701.shadow$old)){
var path_match_84702 = shadow.cljs.devtools.client.browser.match_paths(node_84701.getAttribute("href"),path);
if(cljs.core.truth_(path_match_84702)){
var new_link_84703 = (function (){var G__84369 = node_84701.cloneNode(true);
G__84369.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_84702),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__84369;
})();
(node_84701.shadow$old = true);

(new_link_84703.onload = ((function (seq__84330_84695,chunk__84334_84696,count__84335_84697,i__84336_84698,seq__84070,chunk__84072,count__84073,i__84074,new_link_84703,path_match_84702,node_84701,path,map__84060,map__84060__$1,msg,updates,reload_info){
return (function (e){
var seq__84370_84704 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__84372_84705 = null;
var count__84373_84706 = (0);
var i__84374_84707 = (0);
while(true){
if((i__84374_84707 < count__84373_84706)){
var map__84379_84708 = chunk__84372_84705.cljs$core$IIndexed$_nth$arity$2(null,i__84374_84707);
var map__84379_84709__$1 = cljs.core.__destructure_map(map__84379_84708);
var task_84710 = map__84379_84709__$1;
var fn_str_84711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84379_84709__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_84712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84379_84709__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_84714 = goog.getObjectByName(fn_str_84711,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_84712)].join(''));

(fn_obj_84714.cljs$core$IFn$_invoke$arity$2 ? fn_obj_84714.cljs$core$IFn$_invoke$arity$2(path,new_link_84703) : fn_obj_84714.call(null,path,new_link_84703));


var G__84715 = seq__84370_84704;
var G__84716 = chunk__84372_84705;
var G__84717 = count__84373_84706;
var G__84718 = (i__84374_84707 + (1));
seq__84370_84704 = G__84715;
chunk__84372_84705 = G__84716;
count__84373_84706 = G__84717;
i__84374_84707 = G__84718;
continue;
} else {
var temp__5753__auto___84720 = cljs.core.seq(seq__84370_84704);
if(temp__5753__auto___84720){
var seq__84370_84721__$1 = temp__5753__auto___84720;
if(cljs.core.chunked_seq_QMARK_(seq__84370_84721__$1)){
var c__4679__auto___84722 = cljs.core.chunk_first(seq__84370_84721__$1);
var G__84723 = cljs.core.chunk_rest(seq__84370_84721__$1);
var G__84724 = c__4679__auto___84722;
var G__84725 = cljs.core.count(c__4679__auto___84722);
var G__84726 = (0);
seq__84370_84704 = G__84723;
chunk__84372_84705 = G__84724;
count__84373_84706 = G__84725;
i__84374_84707 = G__84726;
continue;
} else {
var map__84381_84729 = cljs.core.first(seq__84370_84721__$1);
var map__84381_84730__$1 = cljs.core.__destructure_map(map__84381_84729);
var task_84731 = map__84381_84730__$1;
var fn_str_84732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84381_84730__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_84733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84381_84730__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_84735 = goog.getObjectByName(fn_str_84732,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_84733)].join(''));

(fn_obj_84735.cljs$core$IFn$_invoke$arity$2 ? fn_obj_84735.cljs$core$IFn$_invoke$arity$2(path,new_link_84703) : fn_obj_84735.call(null,path,new_link_84703));


var G__84738 = cljs.core.next(seq__84370_84721__$1);
var G__84739 = null;
var G__84740 = (0);
var G__84741 = (0);
seq__84370_84704 = G__84738;
chunk__84372_84705 = G__84739;
count__84373_84706 = G__84740;
i__84374_84707 = G__84741;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_84701);
});})(seq__84330_84695,chunk__84334_84696,count__84335_84697,i__84336_84698,seq__84070,chunk__84072,count__84073,i__84074,new_link_84703,path_match_84702,node_84701,path,map__84060,map__84060__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_84702], 0));

goog.dom.insertSiblingAfter(new_link_84703,node_84701);


var G__84742 = seq__84330_84695;
var G__84743 = chunk__84334_84696;
var G__84744 = count__84335_84697;
var G__84745 = (i__84336_84698 + (1));
seq__84330_84695 = G__84742;
chunk__84334_84696 = G__84743;
count__84335_84697 = G__84744;
i__84336_84698 = G__84745;
continue;
} else {
var G__84746 = seq__84330_84695;
var G__84747 = chunk__84334_84696;
var G__84748 = count__84335_84697;
var G__84749 = (i__84336_84698 + (1));
seq__84330_84695 = G__84746;
chunk__84334_84696 = G__84747;
count__84335_84697 = G__84748;
i__84336_84698 = G__84749;
continue;
}
} else {
var G__84750 = seq__84330_84695;
var G__84751 = chunk__84334_84696;
var G__84752 = count__84335_84697;
var G__84753 = (i__84336_84698 + (1));
seq__84330_84695 = G__84750;
chunk__84334_84696 = G__84751;
count__84335_84697 = G__84752;
i__84336_84698 = G__84753;
continue;
}
} else {
var temp__5753__auto___84754 = cljs.core.seq(seq__84330_84695);
if(temp__5753__auto___84754){
var seq__84330_84755__$1 = temp__5753__auto___84754;
if(cljs.core.chunked_seq_QMARK_(seq__84330_84755__$1)){
var c__4679__auto___84756 = cljs.core.chunk_first(seq__84330_84755__$1);
var G__84757 = cljs.core.chunk_rest(seq__84330_84755__$1);
var G__84758 = c__4679__auto___84756;
var G__84759 = cljs.core.count(c__4679__auto___84756);
var G__84760 = (0);
seq__84330_84695 = G__84757;
chunk__84334_84696 = G__84758;
count__84335_84697 = G__84759;
i__84336_84698 = G__84760;
continue;
} else {
var node_84762 = cljs.core.first(seq__84330_84755__$1);
if(cljs.core.not(node_84762.shadow$old)){
var path_match_84763 = shadow.cljs.devtools.client.browser.match_paths(node_84762.getAttribute("href"),path);
if(cljs.core.truth_(path_match_84763)){
var new_link_84764 = (function (){var G__84415 = node_84762.cloneNode(true);
G__84415.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_84763),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__84415;
})();
(node_84762.shadow$old = true);

(new_link_84764.onload = ((function (seq__84330_84695,chunk__84334_84696,count__84335_84697,i__84336_84698,seq__84070,chunk__84072,count__84073,i__84074,new_link_84764,path_match_84763,node_84762,seq__84330_84755__$1,temp__5753__auto___84754,path,map__84060,map__84060__$1,msg,updates,reload_info){
return (function (e){
var seq__84429_84766 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__84431_84767 = null;
var count__84432_84768 = (0);
var i__84433_84769 = (0);
while(true){
if((i__84433_84769 < count__84432_84768)){
var map__84438_84771 = chunk__84431_84767.cljs$core$IIndexed$_nth$arity$2(null,i__84433_84769);
var map__84438_84772__$1 = cljs.core.__destructure_map(map__84438_84771);
var task_84773 = map__84438_84772__$1;
var fn_str_84774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84438_84772__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_84775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84438_84772__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_84779 = goog.getObjectByName(fn_str_84774,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_84775)].join(''));

(fn_obj_84779.cljs$core$IFn$_invoke$arity$2 ? fn_obj_84779.cljs$core$IFn$_invoke$arity$2(path,new_link_84764) : fn_obj_84779.call(null,path,new_link_84764));


var G__84780 = seq__84429_84766;
var G__84781 = chunk__84431_84767;
var G__84782 = count__84432_84768;
var G__84783 = (i__84433_84769 + (1));
seq__84429_84766 = G__84780;
chunk__84431_84767 = G__84781;
count__84432_84768 = G__84782;
i__84433_84769 = G__84783;
continue;
} else {
var temp__5753__auto___84784__$1 = cljs.core.seq(seq__84429_84766);
if(temp__5753__auto___84784__$1){
var seq__84429_84785__$1 = temp__5753__auto___84784__$1;
if(cljs.core.chunked_seq_QMARK_(seq__84429_84785__$1)){
var c__4679__auto___84786 = cljs.core.chunk_first(seq__84429_84785__$1);
var G__84787 = cljs.core.chunk_rest(seq__84429_84785__$1);
var G__84788 = c__4679__auto___84786;
var G__84789 = cljs.core.count(c__4679__auto___84786);
var G__84790 = (0);
seq__84429_84766 = G__84787;
chunk__84431_84767 = G__84788;
count__84432_84768 = G__84789;
i__84433_84769 = G__84790;
continue;
} else {
var map__84440_84791 = cljs.core.first(seq__84429_84785__$1);
var map__84440_84792__$1 = cljs.core.__destructure_map(map__84440_84791);
var task_84793 = map__84440_84792__$1;
var fn_str_84794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84440_84792__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_84795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84440_84792__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_84797 = goog.getObjectByName(fn_str_84794,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_84795)].join(''));

(fn_obj_84797.cljs$core$IFn$_invoke$arity$2 ? fn_obj_84797.cljs$core$IFn$_invoke$arity$2(path,new_link_84764) : fn_obj_84797.call(null,path,new_link_84764));


var G__84802 = cljs.core.next(seq__84429_84785__$1);
var G__84803 = null;
var G__84804 = (0);
var G__84805 = (0);
seq__84429_84766 = G__84802;
chunk__84431_84767 = G__84803;
count__84432_84768 = G__84804;
i__84433_84769 = G__84805;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_84762);
});})(seq__84330_84695,chunk__84334_84696,count__84335_84697,i__84336_84698,seq__84070,chunk__84072,count__84073,i__84074,new_link_84764,path_match_84763,node_84762,seq__84330_84755__$1,temp__5753__auto___84754,path,map__84060,map__84060__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_84763], 0));

goog.dom.insertSiblingAfter(new_link_84764,node_84762);


var G__84808 = cljs.core.next(seq__84330_84755__$1);
var G__84809 = null;
var G__84810 = (0);
var G__84811 = (0);
seq__84330_84695 = G__84808;
chunk__84334_84696 = G__84809;
count__84335_84697 = G__84810;
i__84336_84698 = G__84811;
continue;
} else {
var G__84812 = cljs.core.next(seq__84330_84755__$1);
var G__84813 = null;
var G__84814 = (0);
var G__84815 = (0);
seq__84330_84695 = G__84812;
chunk__84334_84696 = G__84813;
count__84335_84697 = G__84814;
i__84336_84698 = G__84815;
continue;
}
} else {
var G__84816 = cljs.core.next(seq__84330_84755__$1);
var G__84817 = null;
var G__84818 = (0);
var G__84819 = (0);
seq__84330_84695 = G__84816;
chunk__84334_84696 = G__84817;
count__84335_84697 = G__84818;
i__84336_84698 = G__84819;
continue;
}
}
} else {
}
}
break;
}


var G__84821 = seq__84070;
var G__84822 = chunk__84072;
var G__84823 = count__84073;
var G__84824 = (i__84074 + (1));
seq__84070 = G__84821;
chunk__84072 = G__84822;
count__84073 = G__84823;
i__84074 = G__84824;
continue;
} else {
var G__84826 = seq__84070;
var G__84827 = chunk__84072;
var G__84828 = count__84073;
var G__84829 = (i__84074 + (1));
seq__84070 = G__84826;
chunk__84072 = G__84827;
count__84073 = G__84828;
i__84074 = G__84829;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__84070);
if(temp__5753__auto__){
var seq__84070__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__84070__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__84070__$1);
var G__84830 = cljs.core.chunk_rest(seq__84070__$1);
var G__84831 = c__4679__auto__;
var G__84832 = cljs.core.count(c__4679__auto__);
var G__84833 = (0);
seq__84070 = G__84830;
chunk__84072 = G__84831;
count__84073 = G__84832;
i__84074 = G__84833;
continue;
} else {
var path = cljs.core.first(seq__84070__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__84442_84834 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__84446_84835 = null;
var count__84447_84836 = (0);
var i__84448_84837 = (0);
while(true){
if((i__84448_84837 < count__84447_84836)){
var node_84838 = chunk__84446_84835.cljs$core$IIndexed$_nth$arity$2(null,i__84448_84837);
if(cljs.core.not(node_84838.shadow$old)){
var path_match_84839 = shadow.cljs.devtools.client.browser.match_paths(node_84838.getAttribute("href"),path);
if(cljs.core.truth_(path_match_84839)){
var new_link_84840 = (function (){var G__84485 = node_84838.cloneNode(true);
G__84485.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_84839),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__84485;
})();
(node_84838.shadow$old = true);

(new_link_84840.onload = ((function (seq__84442_84834,chunk__84446_84835,count__84447_84836,i__84448_84837,seq__84070,chunk__84072,count__84073,i__84074,new_link_84840,path_match_84839,node_84838,path,seq__84070__$1,temp__5753__auto__,map__84060,map__84060__$1,msg,updates,reload_info){
return (function (e){
var seq__84486_84841 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__84488_84842 = null;
var count__84489_84843 = (0);
var i__84490_84844 = (0);
while(true){
if((i__84490_84844 < count__84489_84843)){
var map__84494_84845 = chunk__84488_84842.cljs$core$IIndexed$_nth$arity$2(null,i__84490_84844);
var map__84494_84846__$1 = cljs.core.__destructure_map(map__84494_84845);
var task_84847 = map__84494_84846__$1;
var fn_str_84848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84494_84846__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_84849 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84494_84846__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_84850 = goog.getObjectByName(fn_str_84848,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_84849)].join(''));

(fn_obj_84850.cljs$core$IFn$_invoke$arity$2 ? fn_obj_84850.cljs$core$IFn$_invoke$arity$2(path,new_link_84840) : fn_obj_84850.call(null,path,new_link_84840));


var G__84851 = seq__84486_84841;
var G__84852 = chunk__84488_84842;
var G__84853 = count__84489_84843;
var G__84854 = (i__84490_84844 + (1));
seq__84486_84841 = G__84851;
chunk__84488_84842 = G__84852;
count__84489_84843 = G__84853;
i__84490_84844 = G__84854;
continue;
} else {
var temp__5753__auto___84855__$1 = cljs.core.seq(seq__84486_84841);
if(temp__5753__auto___84855__$1){
var seq__84486_84856__$1 = temp__5753__auto___84855__$1;
if(cljs.core.chunked_seq_QMARK_(seq__84486_84856__$1)){
var c__4679__auto___84858 = cljs.core.chunk_first(seq__84486_84856__$1);
var G__84859 = cljs.core.chunk_rest(seq__84486_84856__$1);
var G__84860 = c__4679__auto___84858;
var G__84861 = cljs.core.count(c__4679__auto___84858);
var G__84862 = (0);
seq__84486_84841 = G__84859;
chunk__84488_84842 = G__84860;
count__84489_84843 = G__84861;
i__84490_84844 = G__84862;
continue;
} else {
var map__84495_84863 = cljs.core.first(seq__84486_84856__$1);
var map__84495_84864__$1 = cljs.core.__destructure_map(map__84495_84863);
var task_84865 = map__84495_84864__$1;
var fn_str_84866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84495_84864__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_84867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84495_84864__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_84868 = goog.getObjectByName(fn_str_84866,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_84867)].join(''));

(fn_obj_84868.cljs$core$IFn$_invoke$arity$2 ? fn_obj_84868.cljs$core$IFn$_invoke$arity$2(path,new_link_84840) : fn_obj_84868.call(null,path,new_link_84840));


var G__84869 = cljs.core.next(seq__84486_84856__$1);
var G__84870 = null;
var G__84871 = (0);
var G__84872 = (0);
seq__84486_84841 = G__84869;
chunk__84488_84842 = G__84870;
count__84489_84843 = G__84871;
i__84490_84844 = G__84872;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_84838);
});})(seq__84442_84834,chunk__84446_84835,count__84447_84836,i__84448_84837,seq__84070,chunk__84072,count__84073,i__84074,new_link_84840,path_match_84839,node_84838,path,seq__84070__$1,temp__5753__auto__,map__84060,map__84060__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_84839], 0));

goog.dom.insertSiblingAfter(new_link_84840,node_84838);


var G__84877 = seq__84442_84834;
var G__84878 = chunk__84446_84835;
var G__84879 = count__84447_84836;
var G__84880 = (i__84448_84837 + (1));
seq__84442_84834 = G__84877;
chunk__84446_84835 = G__84878;
count__84447_84836 = G__84879;
i__84448_84837 = G__84880;
continue;
} else {
var G__84881 = seq__84442_84834;
var G__84882 = chunk__84446_84835;
var G__84883 = count__84447_84836;
var G__84884 = (i__84448_84837 + (1));
seq__84442_84834 = G__84881;
chunk__84446_84835 = G__84882;
count__84447_84836 = G__84883;
i__84448_84837 = G__84884;
continue;
}
} else {
var G__84885 = seq__84442_84834;
var G__84886 = chunk__84446_84835;
var G__84887 = count__84447_84836;
var G__84888 = (i__84448_84837 + (1));
seq__84442_84834 = G__84885;
chunk__84446_84835 = G__84886;
count__84447_84836 = G__84887;
i__84448_84837 = G__84888;
continue;
}
} else {
var temp__5753__auto___84889__$1 = cljs.core.seq(seq__84442_84834);
if(temp__5753__auto___84889__$1){
var seq__84442_84890__$1 = temp__5753__auto___84889__$1;
if(cljs.core.chunked_seq_QMARK_(seq__84442_84890__$1)){
var c__4679__auto___84891 = cljs.core.chunk_first(seq__84442_84890__$1);
var G__84892 = cljs.core.chunk_rest(seq__84442_84890__$1);
var G__84893 = c__4679__auto___84891;
var G__84894 = cljs.core.count(c__4679__auto___84891);
var G__84895 = (0);
seq__84442_84834 = G__84892;
chunk__84446_84835 = G__84893;
count__84447_84836 = G__84894;
i__84448_84837 = G__84895;
continue;
} else {
var node_84896 = cljs.core.first(seq__84442_84890__$1);
if(cljs.core.not(node_84896.shadow$old)){
var path_match_84897 = shadow.cljs.devtools.client.browser.match_paths(node_84896.getAttribute("href"),path);
if(cljs.core.truth_(path_match_84897)){
var new_link_84898 = (function (){var G__84496 = node_84896.cloneNode(true);
G__84496.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_84897),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__84496;
})();
(node_84896.shadow$old = true);

(new_link_84898.onload = ((function (seq__84442_84834,chunk__84446_84835,count__84447_84836,i__84448_84837,seq__84070,chunk__84072,count__84073,i__84074,new_link_84898,path_match_84897,node_84896,seq__84442_84890__$1,temp__5753__auto___84889__$1,path,seq__84070__$1,temp__5753__auto__,map__84060,map__84060__$1,msg,updates,reload_info){
return (function (e){
var seq__84497_84899 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__84499_84900 = null;
var count__84500_84901 = (0);
var i__84501_84902 = (0);
while(true){
if((i__84501_84902 < count__84500_84901)){
var map__84510_84903 = chunk__84499_84900.cljs$core$IIndexed$_nth$arity$2(null,i__84501_84902);
var map__84510_84904__$1 = cljs.core.__destructure_map(map__84510_84903);
var task_84905 = map__84510_84904__$1;
var fn_str_84906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84510_84904__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_84907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84510_84904__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_84908 = goog.getObjectByName(fn_str_84906,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_84907)].join(''));

(fn_obj_84908.cljs$core$IFn$_invoke$arity$2 ? fn_obj_84908.cljs$core$IFn$_invoke$arity$2(path,new_link_84898) : fn_obj_84908.call(null,path,new_link_84898));


var G__84909 = seq__84497_84899;
var G__84910 = chunk__84499_84900;
var G__84911 = count__84500_84901;
var G__84912 = (i__84501_84902 + (1));
seq__84497_84899 = G__84909;
chunk__84499_84900 = G__84910;
count__84500_84901 = G__84911;
i__84501_84902 = G__84912;
continue;
} else {
var temp__5753__auto___84913__$2 = cljs.core.seq(seq__84497_84899);
if(temp__5753__auto___84913__$2){
var seq__84497_84914__$1 = temp__5753__auto___84913__$2;
if(cljs.core.chunked_seq_QMARK_(seq__84497_84914__$1)){
var c__4679__auto___84915 = cljs.core.chunk_first(seq__84497_84914__$1);
var G__84916 = cljs.core.chunk_rest(seq__84497_84914__$1);
var G__84917 = c__4679__auto___84915;
var G__84918 = cljs.core.count(c__4679__auto___84915);
var G__84919 = (0);
seq__84497_84899 = G__84916;
chunk__84499_84900 = G__84917;
count__84500_84901 = G__84918;
i__84501_84902 = G__84919;
continue;
} else {
var map__84513_84920 = cljs.core.first(seq__84497_84914__$1);
var map__84513_84921__$1 = cljs.core.__destructure_map(map__84513_84920);
var task_84922 = map__84513_84921__$1;
var fn_str_84923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84513_84921__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_84924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84513_84921__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_84925 = goog.getObjectByName(fn_str_84923,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_84924)].join(''));

(fn_obj_84925.cljs$core$IFn$_invoke$arity$2 ? fn_obj_84925.cljs$core$IFn$_invoke$arity$2(path,new_link_84898) : fn_obj_84925.call(null,path,new_link_84898));


var G__84927 = cljs.core.next(seq__84497_84914__$1);
var G__84928 = null;
var G__84929 = (0);
var G__84931 = (0);
seq__84497_84899 = G__84927;
chunk__84499_84900 = G__84928;
count__84500_84901 = G__84929;
i__84501_84902 = G__84931;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_84896);
});})(seq__84442_84834,chunk__84446_84835,count__84447_84836,i__84448_84837,seq__84070,chunk__84072,count__84073,i__84074,new_link_84898,path_match_84897,node_84896,seq__84442_84890__$1,temp__5753__auto___84889__$1,path,seq__84070__$1,temp__5753__auto__,map__84060,map__84060__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_84897], 0));

goog.dom.insertSiblingAfter(new_link_84898,node_84896);


var G__84934 = cljs.core.next(seq__84442_84890__$1);
var G__84935 = null;
var G__84936 = (0);
var G__84937 = (0);
seq__84442_84834 = G__84934;
chunk__84446_84835 = G__84935;
count__84447_84836 = G__84936;
i__84448_84837 = G__84937;
continue;
} else {
var G__84939 = cljs.core.next(seq__84442_84890__$1);
var G__84940 = null;
var G__84941 = (0);
var G__84942 = (0);
seq__84442_84834 = G__84939;
chunk__84446_84835 = G__84940;
count__84447_84836 = G__84941;
i__84448_84837 = G__84942;
continue;
}
} else {
var G__84944 = cljs.core.next(seq__84442_84890__$1);
var G__84945 = null;
var G__84946 = (0);
var G__84947 = (0);
seq__84442_84834 = G__84944;
chunk__84446_84835 = G__84945;
count__84447_84836 = G__84946;
i__84448_84837 = G__84947;
continue;
}
}
} else {
}
}
break;
}


var G__84948 = cljs.core.next(seq__84070__$1);
var G__84949 = null;
var G__84950 = (0);
var G__84951 = (0);
seq__84070 = G__84948;
chunk__84072 = G__84949;
count__84073 = G__84950;
i__84074 = G__84951;
continue;
} else {
var G__84952 = cljs.core.next(seq__84070__$1);
var G__84953 = null;
var G__84954 = (0);
var G__84955 = (0);
seq__84070 = G__84952;
chunk__84072 = G__84953;
count__84073 = G__84954;
i__84074 = G__84955;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__84520){
var map__84523 = p__84520;
var map__84523__$1 = cljs.core.__destructure_map(map__84523);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84523__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__84535){
var map__84537 = p__84535;
var map__84537__$1 = cljs.core.__destructure_map(map__84537);
var _ = map__84537__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84537__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__84541,done,error){
var map__84542 = p__84541;
var map__84542__$1 = cljs.core.__destructure_map(map__84542);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84542__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__84545,done,error){
var map__84546 = p__84545;
var map__84546__$1 = cljs.core.__destructure_map(map__84546);
var msg = map__84546__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84546__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84546__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84546__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__84548){
var map__84549 = p__84548;
var map__84549__$1 = cljs.core.__destructure_map(map__84549);
var src = map__84549__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84549__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__84553 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__84553) : done.call(null,G__84553));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__84557){
var map__84558 = p__84557;
var map__84558__$1 = cljs.core.__destructure_map(map__84558);
var msg__$1 = map__84558__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84558__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e84559){var ex = e84559;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__84562){
var map__84563 = p__84562;
var map__84563__$1 = cljs.core.__destructure_map(map__84563);
var env = map__84563__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84563__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__84580){
var map__84581 = p__84580;
var map__84581__$1 = cljs.core.__destructure_map(map__84581);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84581__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84581__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__84587){
var map__84591 = p__84587;
var map__84591__$1 = cljs.core.__destructure_map(map__84591);
var svc = map__84591__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84591__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
