goog.provide('sci.impl.load');
sci.impl.load.handle_refer_all = (function sci$impl$load$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__76661){
var vec__76662 = p__76661;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76662,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76662,(1),null);
if(cljs.core.truth_((function (){var and__4251__auto__ = (k instanceof cljs.core.Symbol);
if(and__4251__auto__){
var and__4251__auto____$1 = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4251__auto____$1)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),referred,the_loaded_ns);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
});
sci.impl.load.handle_require_libspec_env = (function sci$impl$load$handle_require_libspec_env(_ctx,env,current_ns,the_loaded_ns,lib_name,p__76665){
var map__76666 = p__76665;
var map__76666__$1 = cljs.core.__destructure_map(map__76666);
var _parsed_libspec = map__76666__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76666__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76666__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76666__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76666__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76666__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var use = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76666__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4253__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"all","all",892129742),refer);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return use;
}
})())?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?(function (){var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns__$1);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5751__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__76667 = temp__5751__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76667,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76667,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),referred,refer);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns__$1,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
})():(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use)?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
var temp__5753__auto___76796 = (function (){var G__76670 = the_loaded_ns;
var G__76670__$1 = (((G__76670 == null))?null:new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__76670));
var G__76670__$2 = (((G__76670__$1 == null))?null:cljs.core.meta(G__76670__$1));
if((G__76670__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","required-fn","sci.impl/required-fn",2082701278).cljs$core$IFn$_invoke$arity$1(G__76670__$2);
}
})();
if(cljs.core.truth_(temp__5753__auto___76796)){
var on_loaded_76799 = temp__5753__auto___76796;
var G__76675_76804 = cljs.core.PersistentArrayMap.EMPTY;
(on_loaded_76799.cljs$core$IFn$_invoke$arity$1 ? on_loaded_76799.cljs$core$IFn$_invoke$arity$1(G__76675_76804) : on_loaded_76799.call(null,G__76675_76804));
} else {
}

return env__$1;
});
sci.impl.load.add_loaded_lib = (function sci$impl$load$add_loaded_lib(env,lib){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.update,new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652),(function (loaded_libs){
if((loaded_libs == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([lib]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loaded_libs,lib);
}
}));

return null;
});
sci.impl.load.handle_require_libspec = (function sci$impl$load$handle_require_libspec(ctx,lib,opts){
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.utils.current_ns_name();
var lib__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ns-aliases","ns-aliases",1290254821).cljs$core$IFn$_invoke$arity$1(env),lib,lib);
var temp__5751__auto__ = new cljs.core.Keyword(null,"as-alias","as-alias",82482467).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5751__auto__)){
var as_alias = temp__5751__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,null,lib__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),as_alias], null)));
} else {
var map__76676 = opts;
var map__76676__$1 = cljs.core.__destructure_map(map__76676);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76676__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reload_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76676__$1,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var reload_STAR_ = (function (){var or__4253__auto__ = reload;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = reload_all;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(ctx);
}
}
})();
var temp__5751__auto___76808__$1 = (cljs.core.truth_(reload_STAR_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib__$1));
if(cljs.core.truth_(temp__5751__auto___76808__$1)){
var the_loaded_ns_76810 = temp__5751__auto___76808__$1;
var loading_76811 = new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__4251__auto__ = loading_76811;
if(cljs.core.truth_(and__4251__auto__)){
return (((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652).cljs$core$IFn$_invoke$arity$1(env),lib__$1)))) && (cljs.core.nat_int_QMARK_(loading_76811.indexOf(lib__$1))));
} else {
return and__4251__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((function (){var lib_emphasized = ["[ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1)," ]"].join('');
var loading__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading_76811,lib__$1);
var loading__$2 = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([lib__$1,lib_emphasized]),loading__$1);
return ["Cyclic load dependency: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("->",loading__$2)].join('');
})(),lib__$1);
} else {
cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns_76810,lib__$1,opts));
}
} else {
var temp__5751__auto___76818__$2 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5751__auto___76818__$2)){
var load_fn_76819 = temp__5751__auto___76818__$2;
var curr_ns_76820 = cljs.core.deref(sci.impl.utils.current_ns);
var temp__5751__auto___76821__$3 = (function (){var G__76677 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib__$1,new cljs.core.Keyword(null,"libname","libname",135992497),lib__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx,new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.types.getName(curr_ns_76820),new cljs.core.Keyword(null,"reload","reload",863702807),(function (){var or__4253__auto__ = reload;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return reload_all;
}
})()], null);
return (load_fn_76819.cljs$core$IFn$_invoke$arity$1 ? load_fn_76819.cljs$core$IFn$_invoke$arity$1(G__76677) : load_fn_76819.call(null,G__76677));
})();
if(cljs.core.truth_(temp__5751__auto___76821__$3)){
var map__76678_76822 = temp__5751__auto___76821__$3;
var map__76678_76823__$1 = cljs.core.__destructure_map(map__76678_76822);
var file_76824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76678_76823__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source_76825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76678_76823__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var handled_76826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76678_76823__$1,new cljs.core.Keyword(null,"handled","handled",1889700151));
var ctx_76829__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload_all),new cljs.core.Keyword(null,"loading","loading",-737050189),(function (loading){
if((loading == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib__$1], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading,lib__$1);
}
}));
if(cljs.core.truth_(source_76825)){
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.utils.current_ns,curr_ns_76820,sci.impl.utils.current_file,file_76824]));

try{var fexpr__76680_76830 = cljs.core.deref(sci.impl.utils.eval_string_STAR_);
(fexpr__76680_76830.cljs$core$IFn$_invoke$arity$2 ? fexpr__76680_76830.cljs$core$IFn$_invoke$arity$2(ctx_76829__$1,source_76825) : fexpr__76680_76830.call(null,ctx_76829__$1,source_76825));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e76679){if((e76679 instanceof Error)){
var e_76834 = e76679;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib__$1], 0));

throw e_76834;
} else {
throw e76679;

}
}} else {
}

if(cljs.core.truth_(handled_76826)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib__$1);
return sci.impl.load.handle_require_libspec_env(ctx,env__$1,cnn,the_loaded_ns,lib__$1,opts);
}));
}
} else {
var or__4253__auto___76836 = (cljs.core.truth_(reload_STAR_)?(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib__$1);
if(cljs.core.truth_(temp__5753__auto__)){
var the_loaded_ns = temp__5753__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib__$1,opts));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4253__auto___76836)){
} else {
throw (new Error(["Could not find namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1),"."].join('')));
}
}
} else {
throw (new Error(["Could not find namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1),"."].join('')));
}
}

sci.impl.load.add_loaded_lib(env_STAR_,lib__$1);

return null;
}
});
sci.impl.load.load_lib = (function sci$impl$load$load_lib(var_args){
var args__4870__auto__ = [];
var len__4864__auto___76838 = arguments.length;
var i__4865__auto___76839 = (0);
while(true){
if((i__4865__auto___76839 < len__4864__auto___76838)){
args__4870__auto__.push((arguments[i__4865__auto___76839]));

var G__76840 = (i__4865__auto___76839 + (1));
i__4865__auto___76839 = G__76840;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,prefix,lib,options){
if(cljs.core.truth_((function (){var and__4251__auto__ = prefix;
if(cljs.core.truth_(and__4251__auto__)){
return (cljs.core.name(lib).indexOf(".") > (0));
} else {
return and__4251__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Found lib name '",cljs.core.name(lib),"' containing period with prefix '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"'.  lib names inside prefix lists must not contain periods"].join(''),lib);
} else {
}

var lib__$1 = (cljs.core.truth_(prefix)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)].join('')):lib);
var opts = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options);
return sci.impl.load.handle_require_libspec(ctx,lib__$1,opts);
}));

(sci.impl.load.load_lib.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.load.load_lib.cljs$lang$applyTo = (function (seq76681){
var G__76682 = cljs.core.first(seq76681);
var seq76681__$1 = cljs.core.next(seq76681);
var G__76683 = cljs.core.first(seq76681__$1);
var seq76681__$2 = cljs.core.next(seq76681__$1);
var G__76684 = cljs.core.first(seq76681__$2);
var seq76681__$3 = cljs.core.next(seq76681__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76682,G__76683,G__76684,seq76681__$3);
}));

/**
 * Prepends a symbol or a seq to coll
 */
sci.impl.load.prependss = (function sci$impl$load$prependss(x,coll){
if((x instanceof cljs.core.Symbol)){
return cljs.core.cons(x,coll);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,coll);
}
});
/**
 * Returns true if x is a libspec
 */
sci.impl.load.libspec_QMARK_ = (function sci$impl$load$libspec_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) || (((cljs.core.vector_QMARK_(x)) && ((((cljs.core.second(x) == null)) || ((cljs.core.second(x) instanceof cljs.core.Keyword)))))));
});
/**
 * Loads libs, evaling libspecs, prefix lists, and flags for
 *   forwarding to load-lib
 */
sci.impl.load.load_libs = (function sci$impl$load$load_libs(ctx,kw,args){
var args_STAR_ = cljs.core.cons(kw,args);
var flags = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,args_STAR_);
var opts = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
var args_STAR___$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.keyword_QMARK_),args_STAR_);
var supported_76844 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"verbose","verbose",1694226060),null,new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null);
var unsupported_76845 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(supported_76844,flags));
if(unsupported_76845){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",unsupported_76845)),args);
} else {
}

if(cljs.core.seq(args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Nothing specified to load",args);
}

var seq__76685 = cljs.core.seq(args_STAR___$1);
var chunk__76686 = null;
var count__76687 = (0);
var i__76688 = (0);
while(true){
if((i__76688 < count__76687)){
var arg = chunk__76686.cljs$core$IIndexed$_nth$arity$2(null,i__76688);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__76703_76846 = arg;
var seq__76704_76847 = cljs.core.seq(vec__76703_76846);
var first__76705_76848 = cljs.core.first(seq__76704_76847);
var seq__76704_76849__$1 = cljs.core.next(seq__76704_76847);
var prefix_76850 = first__76705_76848;
var args_STAR__76851__$2 = seq__76704_76849__$1;
if((prefix_76850 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__76706_76852 = cljs.core.seq(args_STAR__76851__$2);
var chunk__76707_76853 = null;
var count__76708_76854 = (0);
var i__76709_76855 = (0);
while(true){
if((i__76709_76855 < count__76708_76854)){
var arg_76856__$1 = chunk__76707_76853.cljs$core$IIndexed$_nth$arity$2(null,i__76709_76855);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_76850,sci.impl.load.prependss(arg_76856__$1,opts));


var G__76857 = seq__76706_76852;
var G__76858 = chunk__76707_76853;
var G__76859 = count__76708_76854;
var G__76860 = (i__76709_76855 + (1));
seq__76706_76852 = G__76857;
chunk__76707_76853 = G__76858;
count__76708_76854 = G__76859;
i__76709_76855 = G__76860;
continue;
} else {
var temp__5753__auto___76861 = cljs.core.seq(seq__76706_76852);
if(temp__5753__auto___76861){
var seq__76706_76862__$1 = temp__5753__auto___76861;
if(cljs.core.chunked_seq_QMARK_(seq__76706_76862__$1)){
var c__4679__auto___76866 = cljs.core.chunk_first(seq__76706_76862__$1);
var G__76871 = cljs.core.chunk_rest(seq__76706_76862__$1);
var G__76872 = c__4679__auto___76866;
var G__76873 = cljs.core.count(c__4679__auto___76866);
var G__76874 = (0);
seq__76706_76852 = G__76871;
chunk__76707_76853 = G__76872;
count__76708_76854 = G__76873;
i__76709_76855 = G__76874;
continue;
} else {
var arg_76878__$1 = cljs.core.first(seq__76706_76862__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_76850,sci.impl.load.prependss(arg_76878__$1,opts));


var G__76879 = cljs.core.next(seq__76706_76862__$1);
var G__76880 = null;
var G__76881 = (0);
var G__76882 = (0);
seq__76706_76852 = G__76879;
chunk__76707_76853 = G__76880;
count__76708_76854 = G__76881;
i__76709_76855 = G__76882;
continue;
}
} else {
}
}
break;
}
}


var G__76883 = seq__76685;
var G__76884 = chunk__76686;
var G__76885 = count__76687;
var G__76886 = (i__76688 + (1));
seq__76685 = G__76883;
chunk__76686 = G__76884;
count__76687 = G__76885;
i__76688 = G__76886;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__76685);
if(temp__5753__auto__){
var seq__76685__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__76685__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__76685__$1);
var G__76887 = cljs.core.chunk_rest(seq__76685__$1);
var G__76888 = c__4679__auto__;
var G__76889 = cljs.core.count(c__4679__auto__);
var G__76890 = (0);
seq__76685 = G__76887;
chunk__76686 = G__76888;
count__76687 = G__76889;
i__76688 = G__76890;
continue;
} else {
var arg = cljs.core.first(seq__76685__$1);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__76710_76891 = arg;
var seq__76711_76892 = cljs.core.seq(vec__76710_76891);
var first__76712_76893 = cljs.core.first(seq__76711_76892);
var seq__76711_76894__$1 = cljs.core.next(seq__76711_76892);
var prefix_76895 = first__76712_76893;
var args_STAR__76896__$2 = seq__76711_76894__$1;
if((prefix_76895 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__76713_76897 = cljs.core.seq(args_STAR__76896__$2);
var chunk__76714_76898 = null;
var count__76715_76899 = (0);
var i__76716_76900 = (0);
while(true){
if((i__76716_76900 < count__76715_76899)){
var arg_76901__$1 = chunk__76714_76898.cljs$core$IIndexed$_nth$arity$2(null,i__76716_76900);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_76895,sci.impl.load.prependss(arg_76901__$1,opts));


var G__76905 = seq__76713_76897;
var G__76906 = chunk__76714_76898;
var G__76907 = count__76715_76899;
var G__76908 = (i__76716_76900 + (1));
seq__76713_76897 = G__76905;
chunk__76714_76898 = G__76906;
count__76715_76899 = G__76907;
i__76716_76900 = G__76908;
continue;
} else {
var temp__5753__auto___76909__$1 = cljs.core.seq(seq__76713_76897);
if(temp__5753__auto___76909__$1){
var seq__76713_76910__$1 = temp__5753__auto___76909__$1;
if(cljs.core.chunked_seq_QMARK_(seq__76713_76910__$1)){
var c__4679__auto___76911 = cljs.core.chunk_first(seq__76713_76910__$1);
var G__76912 = cljs.core.chunk_rest(seq__76713_76910__$1);
var G__76913 = c__4679__auto___76911;
var G__76914 = cljs.core.count(c__4679__auto___76911);
var G__76915 = (0);
seq__76713_76897 = G__76912;
chunk__76714_76898 = G__76913;
count__76715_76899 = G__76914;
i__76716_76900 = G__76915;
continue;
} else {
var arg_76916__$1 = cljs.core.first(seq__76713_76910__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_76895,sci.impl.load.prependss(arg_76916__$1,opts));


var G__76917 = cljs.core.next(seq__76713_76910__$1);
var G__76918 = null;
var G__76919 = (0);
var G__76920 = (0);
seq__76713_76897 = G__76917;
chunk__76714_76898 = G__76918;
count__76715_76899 = G__76919;
i__76716_76900 = G__76920;
continue;
}
} else {
}
}
break;
}
}


var G__76921 = cljs.core.next(seq__76685__$1);
var G__76922 = null;
var G__76923 = (0);
var G__76924 = (0);
seq__76685 = G__76921;
chunk__76686 = G__76922;
count__76687 = G__76923;
i__76688 = G__76924;
continue;
}
} else {
return null;
}
}
break;
}
});
sci.impl.load.eval_require = (function sci$impl$load$eval_require(var_args){
var args__4870__auto__ = [];
var len__4864__auto___76925 = arguments.length;
var i__4865__auto___76926 = (0);
while(true){
if((i__4865__auto___76926 < len__4864__auto___76925)){
args__4870__auto__.push((arguments[i__4865__auto___76926]));

var G__76927 = (i__4865__auto___76926 + (1));
i__4865__auto___76926 = G__76927;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"require","require",-468001333),args);
}));

(sci.impl.load.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_require.cljs$lang$applyTo = (function (seq76717){
var G__76718 = cljs.core.first(seq76717);
var seq76717__$1 = cljs.core.next(seq76717);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76718,seq76717__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.load.eval_require);
sci.impl.load.eval_use = (function sci$impl$load$eval_use(var_args){
var args__4870__auto__ = [];
var len__4864__auto___76928 = arguments.length;
var i__4865__auto___76929 = (0);
while(true){
if((i__4865__auto___76929 < len__4864__auto___76928)){
args__4870__auto__.push((arguments[i__4865__auto___76929]));

var G__76930 = (i__4865__auto___76929 + (1));
i__4865__auto___76929 = G__76930;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"use","use",-1846382424),args);
}));

(sci.impl.load.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_use.cljs$lang$applyTo = (function (seq76719){
var G__76720 = cljs.core.first(seq76719);
var seq76719__$1 = cljs.core.next(seq76719);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76720,seq76719__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.load.eval_use);
sci.impl.load.eval_refer_clojure = (function sci$impl$load$eval_refer_clojure(ctx,exprs){
var ns_sym = new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null);
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__76725 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76725,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76725,(1),null);
var G__76728_76931 = k;
var G__76728_76932__$1 = (((G__76728_76931 instanceof cljs.core.Keyword))?G__76728_76931.fqn:null);
switch (G__76728_76932__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__76728_76931,G__76728_76932__$1,vec__76725,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.utils.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__76728_76931,G__76728_76932__$1,vec__76725,k,v,ns_sym))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__76728_76931,G__76728_76932__$1,vec__76725,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.utils.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__76728_76931,G__76728_76932__$1,vec__76725,k,v,ns_sym))
);

break;
case "rename":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__76728_76931,G__76728_76932__$1,vec__76725,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.utils.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var the_current_ns__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__76728_76931,G__76728_76932__$1,vec__76725,k,v,ns_sym){
return (function (acc,p__76738){
var vec__76739 = p__76738;
var original_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76739,(0),null);
var new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76739,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refers","refers",158076809),new_name], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(other_ns,original_name)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),original_name);
});})(exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__76728_76931,G__76728_76932__$1,vec__76725,k,v,ns_sym))
,the_current_ns,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});})(exprs__$1,G__76728_76931,G__76728_76932__$1,vec__76725,k,v,ns_sym))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__76728_76932__$1)].join('')));

}

var G__76937 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__76937;
continue;
} else {
return null;
}
break;
}
});
sci.impl.load.eval_refer_STAR_ = (function sci$impl$load$eval_refer_STAR_(env,ns_sym,filters){

var cnn = sci.impl.utils.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var ns = (function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,ns_sym);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw (new Error(["No namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym)].join('')));
}
})();
var fs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,filters);
var public_keys = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.keys(ns));
var rename = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"rename","rename",1508157613).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var exclude = cljs.core.set(new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(fs));
var to_do = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs)))?public_keys:(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return public_keys;
}
}
})());
var _ = (cljs.core.truth_((function (){var and__4251__auto__ = to_do;
if(cljs.core.truth_(and__4251__auto__)){
return (!(cljs.core.sequential_QMARK_(to_do)));
} else {
return and__4251__auto__;
}
})())?(function(){throw (new Error(":only/:refer value must be a sequential collection of symbols"))})():null);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (referred__$1,sym){
if(cljs.core.not((exclude.cljs$core$IFn$_invoke$arity$1 ? exclude.cljs$core$IFn$_invoke$arity$1(sym) : exclude.call(null,sym)))){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ns,sym);
if(cljs.core.truth_(v)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')
));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(referred__$1,(function (){var or__4253__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sym;
}
})(),v);
} else {
return referred__$1;
}
}),referred,to_do);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
var namespaces__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(namespaces,cnn,the_current_ns__$1);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1);
return env__$1;
});
/**
 * The function equivalent of :refer is handled differently than what we
 *   did before (this is more like what Clojure itself does.) For
 *   referring clojure.core we still use the old code.
 */
sci.impl.load.eval_refer = (function sci$impl$load$eval_refer(var_args){
var args__4870__auto__ = [];
var len__4864__auto___76941 = arguments.length;
var i__4865__auto___76942 = (0);
while(true){
if((i__4865__auto___76942 < len__4864__auto___76941)){
args__4870__auto__.push((arguments[i__4865__auto___76942]));

var G__76943 = (i__4865__auto___76942 + (1));
i__4865__auto___76942 = G__76943;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,filters){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),ns_sym)){
sci.impl.load.eval_refer_clojure(ctx,filters);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),sci.impl.load.eval_refer_STAR_,ns_sym,filters);
}

return null;
}));

(sci.impl.load.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.load.eval_refer.cljs$lang$applyTo = (function (seq76761){
var G__76762 = cljs.core.first(seq76761);
var seq76761__$1 = cljs.core.next(seq76761);
var G__76763 = cljs.core.first(seq76761__$1);
var seq76761__$2 = cljs.core.next(seq76761__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76762,G__76763,seq76761__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.load.eval_refer);

//# sourceMappingURL=sci.impl.load.js.map
