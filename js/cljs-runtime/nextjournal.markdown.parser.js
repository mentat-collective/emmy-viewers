goog.provide('nextjournal.markdown.parser');
nextjournal.markdown.parser.get_in_STAR_ = applied_science.js_interop.get_in;
nextjournal.markdown.parser.update_STAR_ = applied_science.js_interop.update_BANG_;
/**
 * Takes a regex and a string, returns a seq of triplets comprised of match groups followed by indices delimiting each match.
 */
nextjournal.markdown.parser.re_idx_seq = (function nextjournal$markdown$parser$re_idx_seq(re,text){
var rex = (new RegExp(re.source,"g"));
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
var temp__5757__auto__ = rex.exec(text);
if((temp__5757__auto__ == null)){
return null;
} else {
var m = temp__5757__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(m),m.index,rex.lastIndex], null);
}
})));
});
nextjournal.markdown.parser.inc_last = (function nextjournal$markdown$parser$inc_last(path){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(path,(cljs.core.count(path) - (1)),cljs.core.inc);
});
nextjournal.markdown.parser.hlevel = (function nextjournal$markdown$parser$hlevel(p__85667){
var map__85668 = p__85667;
var map__85668__$1 = cljs.core.__destructure_map(map__85668);
var _token = map__85668__$1;
var hn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85668__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
if(typeof hn === 'string'){
var G__85669 = cljs.core.re_matches(/h([\d])/,hn);
var G__85669__$1 = (((G__85669 == null))?null:cljs.core.second(G__85669));
if((G__85669__$1 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__85669__$1);
}
} else {
return null;
}
});
nextjournal.markdown.parser.parse_fence_info = (function nextjournal$markdown$parser$parse_fence_info(info_str){
try{if(typeof info_str === 'string'){
var tokens = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(clojure.string.replace(clojure.string.trim(info_str),/[\{\}\,]/,""),".",""),/ /);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__85671,token){
var map__85672 = p__85671;
var map__85672__$1 = cljs.core.__destructure_map(map__85672);
var info_map = map__85672__$1;
var language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85672__$1,new cljs.core.Keyword(null,"language","language",-1591107564));
var vec__85673 = cljs.core.re_matches(/^([^=]+)=([^=]+)$/,token);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85673,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85673,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85673,(2),null);
if(clojure.string.starts_with_QMARK_(token,"#")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info_map,new cljs.core.Keyword(null,"id","id",-1388402092),clojure.string.replace(token,/^#/,""));
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = k;
if(cljs.core.truth_(and__4251__auto__)){
return v;
} else {
return and__4251__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info_map,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v);
} else {
if(cljs.core.not(language)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info_map,new cljs.core.Keyword(null,"language","language",-1591107564),token);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info_map,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token),true);

}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,tokens);
} else {
return null;
}
}catch (e85670){var _ = e85670;
return cljs.core.PersistentArrayMap.EMPTY;
}});
nextjournal.markdown.parser.text_node = (function nextjournal$markdown$parser$text_node(text){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),text], null);
});
nextjournal.markdown.parser.tag_node = (function nextjournal$markdown$parser$tag_node(text){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),new cljs.core.Keyword(null,"text","text",-1790561697),text], null);
});
nextjournal.markdown.parser.formula = (function nextjournal$markdown$parser$formula(text){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"formula","formula",-1059725192),new cljs.core.Keyword(null,"text","text",-1790561697),text], null);
});
nextjournal.markdown.parser.block_formula = (function nextjournal$markdown$parser$block_formula(text){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"block-formula","block-formula",-1790528301),new cljs.core.Keyword(null,"text","text",-1790561697),text], null);
});
nextjournal.markdown.parser.sidenote_ref = (function nextjournal$markdown$parser$sidenote_ref(ref){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sidenote-ref","sidenote-ref",-1057198382),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.markdown.parser.text_node(cljs.core.str.cljs$core$IFn$_invoke$arity$1((ref + (1))))], null)], null);
});
nextjournal.markdown.parser.node = (function nextjournal$markdown$parser$node(type,content,attrs,top_level){
var G__85676 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"content","content",15833224),content], null);
var G__85676__$1 = ((cljs.core.seq(attrs))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__85676,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs):G__85676);
if(cljs.core.seq(top_level)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__85676__$1,top_level], 0));
} else {
return G__85676__$1;
}
});
nextjournal.markdown.parser.empty_text_node_QMARK_ = (function nextjournal$markdown$parser$empty_text_node_QMARK_(p__85677){
var map__85678 = p__85677;
var map__85678__$1 = cljs.core.__destructure_map(map__85678);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85678__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85678__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),t)) && (cljs.core.empty_QMARK_(text)));
});
nextjournal.markdown.parser.push_node = (function nextjournal$markdown$parser$push_node(p__85681,node){
var map__85682 = p__85681;
var map__85682__$1 = cljs.core.__destructure_map(map__85682);
var doc = map__85682__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85682__$1,new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444));
var G__85683 = doc;
if((!(nextjournal.markdown.parser.empty_text_node_QMARK_(node)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__85683,new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444),nextjournal.markdown.parser.inc_last),cljs.core.pop(path),cljs.core.conj,node);
} else {
return G__85683;
}
});
nextjournal.markdown.parser.push_nodes = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,nextjournal.markdown.parser.push_node);
nextjournal.markdown.parser.open_node = (function nextjournal$markdown$parser$open_node(var_args){
var G__85690 = arguments.length;
switch (G__85690) {
case 2:
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2 = (function (doc,type){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(doc,type,cljs.core.PersistentArrayMap.EMPTY);
}));

(nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3 = (function (doc,type,attrs){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$4(doc,type,attrs,cljs.core.PersistentArrayMap.EMPTY);
}));

(nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$4 = (function (doc,type,attrs,top_level){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(nextjournal.markdown.parser.push_node(doc,nextjournal.markdown.parser.node(type,cljs.core.PersistentVector.EMPTY,attrs,top_level)),new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444),cljs.core.into,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),(-1)], null));
}));

(nextjournal.markdown.parser.open_node.cljs$lang$maxFixedArity = 4);

nextjournal.markdown.parser.ppop = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pop,cljs.core.pop);
nextjournal.markdown.parser.close_node = (function nextjournal$markdown$parser$close_node(doc){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444),nextjournal.markdown.parser.ppop);
});
nextjournal.markdown.parser.update_current = (function nextjournal$markdown$parser$update_current(var_args){
var args__4870__auto__ = [];
var len__4864__auto___85912 = arguments.length;
var i__4865__auto___85913 = (0);
while(true){
if((i__4865__auto___85913 < len__4864__auto___85912)){
args__4870__auto__.push((arguments[i__4865__auto___85913]));

var G__85914 = (i__4865__auto___85913 + (1));
i__4865__auto___85913 = G__85914;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return nextjournal.markdown.parser.update_current.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(nextjournal.markdown.parser.update_current.cljs$core$IFn$_invoke$arity$variadic = (function (p__85700,fn,args){
var map__85701 = p__85700;
var map__85701__$1 = cljs.core.__destructure_map(map__85701);
var doc = map__85701__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85701__$1,new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,doc,path,fn,args);
}));

(nextjournal.markdown.parser.update_current.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nextjournal.markdown.parser.update_current.cljs$lang$applyTo = (function (seq85697){
var G__85698 = cljs.core.first(seq85697);
var seq85697__$1 = cljs.core.next(seq85697);
var G__85699 = cljs.core.first(seq85697__$1);
var seq85697__$2 = cljs.core.next(seq85697__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__85698,G__85699,seq85697__$2);
}));

nextjournal.markdown.parser.into_toc = (function nextjournal$markdown$parser$into_toc(toc,p__85702){
var map__85703 = p__85702;
var map__85703__$1 = cljs.core.__destructure_map(map__85703);
var toc_item = map__85703__$1;
var heading_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85703__$1,new cljs.core.Keyword(null,"heading-level","heading-level",563433452));
var toc__$1 = toc;
var l = heading_level;
var toc_path = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null);
while(true){
var type_path = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(toc_path,(cljs.core.count(toc_path) - (1)),new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(toc__$1,toc_path))){
var G__85920 = cljs.core.assoc_in(toc__$1,toc_path,cljs.core.PersistentVector.EMPTY);
var G__85921 = l;
var G__85922 = toc_path;
toc__$1 = G__85920;
l = G__85921;
toc_path = G__85922;
continue;
} else {
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(toc__$1,type_path))){
var G__85923 = cljs.core.assoc_in(toc__$1,type_path,new cljs.core.Keyword(null,"toc","toc",2050089251));
var G__85924 = l;
var G__85925 = toc_path;
toc__$1 = G__85923;
l = G__85924;
toc_path = G__85925;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),l)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(toc__$1,toc_path,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),toc_item);
} else {
var G__85926 = toc__$1;
var G__85927 = (l - (1));
var G__85928 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(toc_path,(function (){var x__4336__auto__ = (0);
var y__4337__auto__ = (cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(toc__$1,toc_path)) - (1));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982)], 0));
toc__$1 = G__85926;
l = G__85927;
toc_path = G__85928;
continue;

}
}
}
break;
}
});
nextjournal.markdown.parser.add_to_toc = (function nextjournal$markdown$parser$add_to_toc(doc,p__85704){
var map__85705 = p__85704;
var map__85705__$1 = cljs.core.__destructure_map(map__85705);
var h = map__85705__$1;
var heading_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85705__$1,new cljs.core.Keyword(null,"heading-level","heading-level",563433452));
var G__85706 = doc;
if(cljs.core.pos_int_QMARK_(heading_level)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__85706,new cljs.core.Keyword(null,"toc","toc",2050089251),nextjournal.markdown.parser.into_toc,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(h,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toc","toc",2050089251)));
} else {
return G__85706;
}
});
nextjournal.markdown.parser.set_title_when_missing = (function nextjournal$markdown$parser$set_title_when_missing(p__85707,heading){
var map__85708 = p__85707;
var map__85708__$1 = cljs.core.__destructure_map(map__85708);
var doc = map__85708__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85708__$1,new cljs.core.Keyword(null,"title","title",636505583));
var G__85710 = doc;
if((title == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__85710,new cljs.core.Keyword(null,"title","title",636505583),nextjournal.markdown.transform.__GT_text(heading));
} else {
return G__85710;
}
});
/**
 * Computes and adds a :title and a :toc to the document-like structure `doc` which might have not been constructed by means of `parse`.
 */
nextjournal.markdown.parser.add_title_PLUS_toc = (function nextjournal$markdown$parser$add_title_PLUS_toc(p__85712){
var map__85713 = p__85712;
var map__85713__$1 = cljs.core.__destructure_map(map__85713);
var doc = map__85713__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85713__$1,new cljs.core.Keyword(null,"content","content",15833224));
var rf = (function (doc__$1,heading){
return nextjournal.markdown.parser.set_title_when_missing(nextjournal.markdown.parser.add_to_toc(doc__$1,heading),heading);
});
var xf = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(xf(rf),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"toc","toc",2050089251),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toc","toc",2050089251)], null)),content);
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.markdown !== 'undefined') && (typeof nextjournal.markdown.parser !== 'undefined') && (typeof nextjournal.markdown.parser.apply_token !== 'undefined')){
} else {
nextjournal.markdown.parser.apply_token = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__85717 = cljs.core.get_global_hierarchy;
return (fexpr__85717.cljs$core$IFn$_invoke$arity$0 ? fexpr__85717.cljs$core$IFn$_invoke$arity$0() : fexpr__85717.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("nextjournal.markdown.parser","apply-token"),(function (_doc,token){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (doc,token){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("apply-token","unknown-type","apply-token/unknown-type",-1923384033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token","token",-1211463215),token], null)], 0));

return doc;
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"heading_open",(function (doc,token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$4(doc,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading-level","heading-level",563433452),nextjournal.markdown.parser.hlevel(token)], null));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"heading_close",(function (doc,p__85719){
var map__85720 = p__85719;
var map__85720__$1 = cljs.core.__destructure_map(map__85720);
var doc_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85720__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var map__85721 = nextjournal.markdown.parser.close_node(doc);
var map__85721__$1 = cljs.core.__destructure_map(map__85721);
var doc__$1 = map__85721__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85721__$1,new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444));
var heading = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(doc__$1,path),new cljs.core.Keyword(null,"path","path",-188191168),path);
var G__85723 = doc__$1;
if((doc_level === (0))){
return nextjournal.markdown.parser.set_title_when_missing(nextjournal.markdown.parser.add_to_toc(G__85723,heading),heading);
} else {
return G__85723;
}
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"paragraph_open",(function (doc,p__85724){
var map__85725 = p__85724;
var map__85725__$1 = cljs.core.__destructure_map(map__85725);
var _token = map__85725__$1;
var hidden = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85725__$1,new cljs.core.Keyword(null,"hidden","hidden",-312506092));
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,(cljs.core.truth_(hidden)?new cljs.core.Keyword(null,"plain","plain",1368629269):new cljs.core.Keyword(null,"paragraph","paragraph",296707709)));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"paragraph_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"bullet_list_open",(function (doc,p__85732){
var map__85733 = p__85732;
var map__85733__$1 = cljs.core.__destructure_map(map__85733);
var map__85734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85733__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var map__85734__$1 = cljs.core.__destructure_map(map__85734);
var attrs = map__85734__$1;
var has_todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85734__$1,new cljs.core.Keyword(null,"has-todos","has-todos",-1788119241));
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(doc,(cljs.core.truth_(has_todos)?new cljs.core.Keyword(null,"todo-list","todo-list",653205378):new cljs.core.Keyword(null,"bullet-list","bullet-list",-2051767989)),attrs);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"bullet_list_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"ordered_list_open",(function (doc,p__85735){
var map__85736 = p__85735;
var map__85736__$1 = cljs.core.__destructure_map(map__85736);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85736__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"numbered-list","numbered-list",13892942),attrs);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"ordered_list_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"list_item_open",(function (doc,p__85738){
var map__85739 = p__85738;
var map__85739__$1 = cljs.core.__destructure_map(map__85739);
var map__85740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85739__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var map__85740__$1 = cljs.core.__destructure_map(map__85740);
var attrs = map__85740__$1;
var todo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85740__$1,new cljs.core.Keyword(null,"todo","todo",-1046442570));
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(doc,(cljs.core.truth_(todo)?new cljs.core.Keyword(null,"todo-item","todo-item",-1060924804):new cljs.core.Keyword(null,"list-item","list-item",-999803634)),attrs);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"list_item_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"math_block",(function (doc,p__85745){
var map__85746 = p__85745;
var map__85746__$1 = cljs.core.__destructure_map(map__85746);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85746__$1,new cljs.core.Keyword(null,"content","content",15833224));
return nextjournal.markdown.parser.push_node(doc,nextjournal.markdown.parser.block_formula(text));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"math_block_end",(function (doc,_token){
return doc;
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"hr",(function (doc,_token){
return nextjournal.markdown.parser.push_node(doc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ruler","ruler",2134373867)], null));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"blockquote_open",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"blockquote","blockquote",372264190));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"blockquote_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"tocOpen",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"toc","toc",2050089251));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"tocBody",(function (doc,_token){
return doc;
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"tocClose",(function (doc,_token){
return nextjournal.markdown.parser.update_current.cljs$core$IFn$_invoke$arity$variadic(nextjournal.markdown.parser.close_node(doc),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224)], 0));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"code_block",(function (doc,p__85762){
var map__85765 = p__85762;
var map__85765__$1 = cljs.core.__destructure_map(map__85765);
var _token = map__85765__$1;
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85765__$1,new cljs.core.Keyword(null,"content","content",15833224));
return nextjournal.markdown.parser.close_node(nextjournal.markdown.parser.push_node(nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"code","code",1586293142)),nextjournal.markdown.parser.text_node(c)));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"fence",(function (doc,p__85774){
var map__85775 = p__85774;
var map__85775__$1 = cljs.core.__destructure_map(map__85775);
var _token = map__85775__$1;
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85775__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85775__$1,new cljs.core.Keyword(null,"content","content",15833224));
return nextjournal.markdown.parser.close_node(nextjournal.markdown.parser.push_node(nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$4(doc,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.markdown.parser.parse_fence_info(i),new cljs.core.Keyword(null,"info","info",-317069002),i)),nextjournal.markdown.parser.text_node(c)));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"sidenote_ref",(function (doc,token){
return nextjournal.markdown.parser.push_node(doc,nextjournal.markdown.parser.sidenote_ref((function (){var G__85783 = token;
var G__85784 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"id","id",-1388402092)], null);
return (nextjournal.markdown.parser.get_in_STAR_.cljs$core$IFn$_invoke$arity$2 ? nextjournal.markdown.parser.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(G__85783,G__85784) : nextjournal.markdown.parser.get_in_STAR_.call(null,G__85783,G__85784));
})()));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"sidenote_anchor",(function (doc,token){
return doc;
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"sidenote_open",(function (doc,token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"sidenotes?","sidenotes?",-1418896412),true),new cljs.core.Keyword(null,"sidenote","sidenote",-368558802),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (){var G__85788 = token;
var G__85789 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"id","id",-1388402092)], null);
return (nextjournal.markdown.parser.get_in_STAR_.cljs$core$IFn$_invoke$arity$2 ? nextjournal.markdown.parser.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(G__85788,G__85789) : nextjournal.markdown.parser.get_in_STAR_.call(null,G__85788,G__85789));
})()], null));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"sidenote_close",(function (doc,token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"sidenote_block_open",(function (doc,token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"sidenotes?","sidenotes?",-1418896412),true),new cljs.core.Keyword(null,"sidenote","sidenote",-368558802),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (){var G__85792 = token;
var G__85793 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"id","id",-1388402092)], null);
return (nextjournal.markdown.parser.get_in_STAR_.cljs$core$IFn$_invoke$arity$2 ? nextjournal.markdown.parser.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(G__85792,G__85793) : nextjournal.markdown.parser.get_in_STAR_.call(null,G__85792,G__85793));
})()], null));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"sidenote_block_close",(function (doc,token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"table_open",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"table","table",-564943036));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"table_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"thead_open",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"table-head","table-head",-1134134854));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"thead_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"tr_open",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"table-row","table-row",118957987));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"tr_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"th_open",(function (doc,token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"table-header","table-header",564803008),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(token));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"th_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"tbody_open",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"table-body","table-body",-753458877));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"tbody_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"td_open",(function (doc,token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(token));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"td_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.text_tokenizers = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"regex","regex",939488856),/(^|\B)#[\w-]+/,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (match){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.subs.cljs$core$IFn$_invoke$arity$2((match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1((0)) : match.call(null,(0))),(1))], null);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"regex","regex",939488856),/\[\[([^\]]+)\]\]/,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (match){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"internal-link","internal-link",-1380732260),new cljs.core.Keyword(null,"text","text",-1790561697),(match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1((1)) : match.call(null,(1)))], null);
})], null)], null);
/**
 * Normalizes a map of regex and handler into a Tokenizer
 */
nextjournal.markdown.parser.normalize_tokenizer = (function nextjournal$markdown$parser$normalize_tokenizer(p__85797){
var map__85798 = p__85797;
var map__85798__$1 = cljs.core.__destructure_map(map__85798);
var tokenizer = map__85798__$1;
var doc_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85798__$1,new cljs.core.Keyword(null,"doc-handler","doc-handler",1751167775));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85798__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var regex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85798__$1,new cljs.core.Keyword(null,"regex","regex",939488856));
var tokenizer_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85798__$1,new cljs.core.Keyword(null,"tokenizer-fn","tokenizer-fn",1254435779));
if(cljs.core.truth_((function (){var and__4251__auto__ = (function (){var or__4253__auto__ = doc_handler;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return handler;
}
})();
if(cljs.core.truth_(and__4251__auto__)){
var or__4253__auto__ = regex;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return tokenizer_fn;
}
} else {
return and__4251__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (and (or doc-handler handler) (or regex tokenizer-fn))"));
}

var G__85799 = tokenizer;
var G__85799__$1 = ((cljs.core.not(doc_handler))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__85799,new cljs.core.Keyword(null,"doc-handler","doc-handler",1751167775),(function (doc,p__85800){
var map__85801 = p__85800;
var map__85801__$1 = cljs.core.__destructure_map(map__85801);
var match = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85801__$1,new cljs.core.Keyword(null,"match","match",1220059550));
return nextjournal.markdown.parser.push_node(doc,(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(match) : handler.call(null,match)));
})):G__85799);
if(cljs.core.not(tokenizer_fn)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__85799__$1,new cljs.core.Keyword(null,"tokenizer-fn","tokenizer-fn",1254435779),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.parser.re_idx_seq,regex));
} else {
return G__85799__$1;
}
});
nextjournal.markdown.parser.tokenize_text_node = (function nextjournal$markdown$parser$tokenize_text_node(p__85802,p__85803){
var map__85804 = p__85802;
var map__85804__$1 = cljs.core.__destructure_map(map__85804);
var tkz = map__85804__$1;
var tokenizer_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85804__$1,new cljs.core.Keyword(null,"tokenizer-fn","tokenizer-fn",1254435779));
var doc_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85804__$1,new cljs.core.Keyword(null,"doc-handler","doc-handler",1751167775));
var map__85805 = p__85803;
var map__85805__$1 = cljs.core.__destructure_map(map__85805);
var node = map__85805__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85805__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
if(((cljs.core.fn_QMARK_(tokenizer_fn)) && (((cljs.core.fn_QMARK_(doc_handler)) && (typeof text === 'string'))))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"tokenizer","tokenizer",1801337391),tkz], null)),"\n","(and (fn? tokenizer-fn) (fn? doc-handler) (string? text))"].join('')));
}

var idx_seq = (tokenizer_fn.cljs$core$IFn$_invoke$arity$1 ? tokenizer_fn.cljs$core$IFn$_invoke$arity$1(text) : tokenizer_fn.call(null,text));
if(cljs.core.seq(idx_seq)){
var text_hnode = (function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.markdown.parser.text_node(s),new cljs.core.Keyword(null,"doc-handler","doc-handler",1751167775),nextjournal.markdown.parser.push_node);
});
var map__85808 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__85809,p__85810){
var map__85811 = p__85809;
var map__85811__$1 = cljs.core.__destructure_map(map__85811);
var acc = map__85811__$1;
var remaining_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85811__$1,new cljs.core.Keyword(null,"remaining-text","remaining-text",1460985259));
var vec__85812 = p__85810;
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85812,(0),null);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85812,(1),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85812,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var G__85815 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(acc,new cljs.core.Keyword(null,"remaining-text","remaining-text",1460985259),cljs.core.subs,(0),start);
if((end < cljs.core.count(remaining_text))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__85815,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.conj,text_hnode(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remaining_text,end)));
} else {
return G__85815;
}
})(),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc-handler","doc-handler",1751167775),doc_handler,new cljs.core.Keyword(null,"match","match",1220059550),match,new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),end], null));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remaining-text","remaining-text",1460985259),text,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.List.EMPTY], null),cljs.core.reverse(idx_seq));
var map__85808__$1 = cljs.core.__destructure_map(map__85808);
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85808__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var remaining_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85808__$1,new cljs.core.Keyword(null,"remaining-text","remaining-text",1460985259));
var G__85818 = nodes;
if(cljs.core.seq(remaining_text)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__85818,text_hnode(remaining_text));
} else {
return G__85818;
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null);
}
});
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"text",(function (p__85819,p__85820){
var map__85821 = p__85819;
var map__85821__$1 = cljs.core.__destructure_map(map__85821);
var doc = map__85821__$1;
var text_tokenizers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85821__$1,new cljs.core.Keyword(null,"text-tokenizers","text-tokenizers",1311007926));
var map__85822 = p__85820;
var map__85822__$1 = cljs.core.__destructure_map(map__85822);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85822__$1,new cljs.core.Keyword(null,"content","content",15833224));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (doc__$1,p__85823){
var map__85825 = p__85823;
var map__85825__$1 = cljs.core.__destructure_map(map__85825);
var node = map__85825__$1;
var doc_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85825__$1,new cljs.core.Keyword(null,"doc-handler","doc-handler",1751167775));
var G__85827 = doc__$1;
var G__85828 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.Keyword(null,"doc-handler","doc-handler",1751167775));
return (doc_handler.cljs$core$IFn$_invoke$arity$2 ? doc_handler.cljs$core$IFn$_invoke$arity$2(G__85827,G__85828) : doc_handler.call(null,G__85827,G__85828));
}),doc,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (nodes,tokenizer){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__85829){
var map__85830 = p__85829;
var map__85830__$1 = cljs.core.__destructure_map(map__85830);
var node = map__85830__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85830__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),type)){
return nextjournal.markdown.parser.tokenize_text_node(tokenizer,node);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),content,new cljs.core.Keyword(null,"doc-handler","doc-handler",1751167775),nextjournal.markdown.parser.push_node], null)], null),text_tokenizers));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"inline",(function (doc,p__85844){
var map__85846 = p__85844;
var map__85846__$1 = cljs.core.__destructure_map(map__85846);
var _token = map__85846__$1;
var ts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85846__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return (nextjournal.markdown.parser.apply_tokens.cljs$core$IFn$_invoke$arity$2 ? nextjournal.markdown.parser.apply_tokens.cljs$core$IFn$_invoke$arity$2(doc,ts) : nextjournal.markdown.parser.apply_tokens.call(null,doc,ts));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"math_inline",(function (doc,p__85851){
var map__85856 = p__85851;
var map__85856__$1 = cljs.core.__destructure_map(map__85856);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85856__$1,new cljs.core.Keyword(null,"content","content",15833224));
return nextjournal.markdown.parser.push_node(doc,nextjournal.markdown.parser.formula(text));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"math_inline_double",(function (doc,p__85870){
var map__85871 = p__85870;
var map__85871__$1 = cljs.core.__destructure_map(map__85871);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85871__$1,new cljs.core.Keyword(null,"content","content",15833224));
return nextjournal.markdown.parser.push_node(doc,nextjournal.markdown.parser.formula(text));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"softbreak",(function (doc,_token){
return nextjournal.markdown.parser.push_node(doc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"softbreak","softbreak",-983135729)], null));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"image",(function (doc,p__85885){
var map__85886 = p__85885;
var map__85886__$1 = cljs.core.__destructure_map(map__85886);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85886__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85886__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return nextjournal.markdown.parser.close_node((function (){var G__85887 = nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"image","image",-58725096),attrs);
var G__85888 = children;
return (nextjournal.markdown.parser.apply_tokens.cljs$core$IFn$_invoke$arity$2 ? nextjournal.markdown.parser.apply_tokens.cljs$core$IFn$_invoke$arity$2(G__85887,G__85888) : nextjournal.markdown.parser.apply_tokens.call(null,G__85887,G__85888));
})());
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"em_open",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"em","em",707813035));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"em_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"strong_open",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"strong","strong",269529000));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"strong_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"s_open",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"strikethrough","strikethrough",1012146804));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"s_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"link_open",(function (doc,token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(token));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"link_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"code_inline",(function (doc,p__85889){
var map__85890 = p__85889;
var map__85890__$1 = cljs.core.__destructure_map(map__85890);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85890__$1,new cljs.core.Keyword(null,"content","content",15833224));
return nextjournal.markdown.parser.close_node(nextjournal.markdown.parser.push_node(nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"monospace","monospace",2089559697)),nextjournal.markdown.parser.text_node(text)));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"html_inline",(function (doc,_){
return doc;
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"html_block",(function (doc,_){
return doc;
}));
nextjournal.markdown.parser.pairs__GT_kmap = (function nextjournal$markdown$parser$pairs__GT_kmap(pairs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.first),cljs.core.second)),pairs);
});
nextjournal.markdown.parser.apply_tokens = (function nextjournal$markdown$parser$apply_tokens(doc,tokens){
var mapify_attrs_xf = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
return (nextjournal.markdown.parser.update_STAR_.cljs$core$IFn$_invoke$arity$3 ? nextjournal.markdown.parser.update_STAR_.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),nextjournal.markdown.parser.pairs__GT_kmap) : nextjournal.markdown.parser.update_STAR_.call(null,x,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),nextjournal.markdown.parser.pairs__GT_kmap));
}));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(mapify_attrs_xf(nextjournal.markdown.parser.apply_token),doc,tokens);
});
nextjournal.markdown.parser.empty_doc = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"toc","toc",2050089251),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toc","toc",2050089251)], null),new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),(-1)], null),new cljs.core.Keyword(null,"text-tokenizers","text-tokenizers",1311007926),nextjournal.markdown.parser.text_tokenizers], null);
/**
 * Takes a doc and a collection of markdown-it tokens, applies tokens to doc. Uses an emtpy doc in arity 1.
 */
nextjournal.markdown.parser.parse = (function nextjournal$markdown$parser$parse(var_args){
var G__85895 = arguments.length;
switch (G__85895) {
case 1:
return nextjournal.markdown.parser.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.markdown.parser.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.markdown.parser.parse.cljs$core$IFn$_invoke$arity$1 = (function (tokens){
return nextjournal.markdown.parser.parse.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.parser.empty_doc,tokens);
}));

(nextjournal.markdown.parser.parse.cljs$core$IFn$_invoke$arity$2 = (function (doc,tokens){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(nextjournal.markdown.parser.apply_tokens(cljs.core.update.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"text-tokenizers","text-tokenizers",1311007926),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,nextjournal.markdown.parser.normalize_tokenizer)),tokens),new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"text-tokenizers","text-tokenizers",1311007926)], 0));
}));

(nextjournal.markdown.parser.parse.cljs$lang$maxFixedArity = 2);

nextjournal.markdown.parser.section_at = (function nextjournal$markdown$parser$section_at(p__85896,p__85897){
var map__85899 = p__85896;
var map__85899__$1 = cljs.core.__destructure_map(map__85899);
var doc = map__85899__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85899__$1,new cljs.core.Keyword(null,"content","content",15833224));
var vec__85900 = p__85897;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85900,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85900,(1),null);
var path = vec__85900;
var map__85904 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(doc,path);
var map__85904__$1 = cljs.core.__destructure_map(map__85904);
var h = map__85904__$1;
var section_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85904__$1,new cljs.core.Keyword(null,"heading-level","heading-level",563433452));
var in_section_QMARK_ = (function (p__85905){
var map__85906 = p__85905;
var map__85906__$1 = cljs.core.__destructure_map(map__85906);
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85906__$1,new cljs.core.Keyword(null,"heading-level","heading-level",563433452));
return ((cljs.core.not(l)) || ((section_level < l)));
});
if(cljs.core.truth_(section_level)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.cons(h,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(in_section_QMARK_,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((pos + (1)),content)))], null);
} else {
return null;
}
});

//# sourceMappingURL=nextjournal.markdown.parser.js.map
