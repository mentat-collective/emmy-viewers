goog.provide('sci.impl.load');
sci.impl.load.handle_refer_all = (function sci$impl$load$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__90055){
var vec__90056 = p__90055;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90056,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90056,(1),null);
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
sci.impl.load.handle_require_libspec_env = (function sci$impl$load$handle_require_libspec_env(_ctx,env,current_ns,the_loaded_ns,lib_name,p__90059){
var map__90060 = p__90059;
var map__90060__$1 = cljs.core.__destructure_map(map__90060);
var _parsed_libspec = map__90060__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90060__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90060__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90060__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90060__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90060__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var use = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90060__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
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
var vec__90070 = temp__5751__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90070,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90070,(1),null);
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
var temp__5753__auto___90674 = (function (){var G__90073 = the_loaded_ns;
var G__90073__$1 = (((G__90073 == null))?null:new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__90073));
var G__90073__$2 = (((G__90073__$1 == null))?null:cljs.core.meta(G__90073__$1));
if((G__90073__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","required-fn","sci.impl/required-fn",2082701278).cljs$core$IFn$_invoke$arity$1(G__90073__$2);
}
})();
if(cljs.core.truth_(temp__5753__auto___90674)){
var on_loaded_90675 = temp__5753__auto___90674;
var G__90087_90676 = cljs.core.PersistentArrayMap.EMPTY;
(on_loaded_90675.cljs$core$IFn$_invoke$arity$1 ? on_loaded_90675.cljs$core$IFn$_invoke$arity$1(G__90087_90676) : on_loaded_90675.call(null,G__90087_90676));
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
var map__90129 = opts;
var map__90129__$1 = cljs.core.__destructure_map(map__90129);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90129__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reload_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90129__$1,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
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
var temp__5751__auto___90683__$1 = (cljs.core.truth_(reload_STAR_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib__$1));
if(cljs.core.truth_(temp__5751__auto___90683__$1)){
var the_loaded_ns_90686 = temp__5751__auto___90683__$1;
var loading_90688 = new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__4251__auto__ = loading_90688;
if(cljs.core.truth_(and__4251__auto__)){
return (((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652).cljs$core$IFn$_invoke$arity$1(env),lib__$1)))) && (cljs.core.nat_int_QMARK_(loading_90688.indexOf(lib__$1))));
} else {
return and__4251__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((function (){var lib_emphasized = ["[ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1)," ]"].join('');
var loading__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading_90688,lib__$1);
var loading__$2 = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([lib__$1,lib_emphasized]),loading__$1);
return ["Cyclic load dependency: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("->",loading__$2)].join('');
})(),lib__$1);
} else {
cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns_90686,lib__$1,opts));
}
} else {
var temp__5751__auto___90692__$2 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5751__auto___90692__$2)){
var load_fn_90693 = temp__5751__auto___90692__$2;
var curr_ns_90694 = cljs.core.deref(sci.impl.utils.current_ns);
var temp__5751__auto___90698__$3 = (function (){var G__90156 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib__$1,new cljs.core.Keyword(null,"libname","libname",135992497),lib__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx,new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.types.getName(curr_ns_90694),new cljs.core.Keyword(null,"reload","reload",863702807),(function (){var or__4253__auto__ = reload;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return reload_all;
}
})()], null);
return (load_fn_90693.cljs$core$IFn$_invoke$arity$1 ? load_fn_90693.cljs$core$IFn$_invoke$arity$1(G__90156) : load_fn_90693.call(null,G__90156));
})();
if(cljs.core.truth_(temp__5751__auto___90698__$3)){
var map__90157_90699 = temp__5751__auto___90698__$3;
var map__90157_90700__$1 = cljs.core.__destructure_map(map__90157_90699);
var file_90701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90157_90700__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source_90702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90157_90700__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var handled_90703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90157_90700__$1,new cljs.core.Keyword(null,"handled","handled",1889700151));
var ctx_90705__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload_all),new cljs.core.Keyword(null,"loading","loading",-737050189),(function (loading){
if((loading == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib__$1], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading,lib__$1);
}
}));
if(cljs.core.truth_(source_90702)){
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.utils.current_ns,curr_ns_90694,sci.impl.utils.current_file,file_90701]));

try{var fexpr__90172_90707 = cljs.core.deref(sci.impl.utils.eval_string_STAR_);
(fexpr__90172_90707.cljs$core$IFn$_invoke$arity$2 ? fexpr__90172_90707.cljs$core$IFn$_invoke$arity$2(ctx_90705__$1,source_90702) : fexpr__90172_90707.call(null,ctx_90705__$1,source_90702));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e90171){if((e90171 instanceof Error)){
var e_90708 = e90171;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib__$1], 0));

throw e_90708;
} else {
throw e90171;

}
}} else {
}

if(cljs.core.truth_(handled_90703)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib__$1);
return sci.impl.load.handle_require_libspec_env(ctx,env__$1,cnn,the_loaded_ns,lib__$1,opts);
}));
}
} else {
var or__4253__auto___90709 = (cljs.core.truth_(reload_STAR_)?(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib__$1);
if(cljs.core.truth_(temp__5753__auto__)){
var the_loaded_ns = temp__5753__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib__$1,opts));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4253__auto___90709)){
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
var len__4864__auto___90712 = arguments.length;
var i__4865__auto___90713 = (0);
while(true){
if((i__4865__auto___90713 < len__4864__auto___90712)){
args__4870__auto__.push((arguments[i__4865__auto___90713]));

var G__90714 = (i__4865__auto___90713 + (1));
i__4865__auto___90713 = G__90714;
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
(sci.impl.load.load_lib.cljs$lang$applyTo = (function (seq90202){
var G__90203 = cljs.core.first(seq90202);
var seq90202__$1 = cljs.core.next(seq90202);
var G__90204 = cljs.core.first(seq90202__$1);
var seq90202__$2 = cljs.core.next(seq90202__$1);
var G__90205 = cljs.core.first(seq90202__$2);
var seq90202__$3 = cljs.core.next(seq90202__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__90203,G__90204,G__90205,seq90202__$3);
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
var supported_90717 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"verbose","verbose",1694226060),null,new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null);
var unsupported_90718 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(supported_90717,flags));
if(unsupported_90718){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",unsupported_90718)),args);
} else {
}

if(cljs.core.seq(args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Nothing specified to load",args);
}

var seq__90307 = cljs.core.seq(args_STAR___$1);
var chunk__90308 = null;
var count__90309 = (0);
var i__90310 = (0);
while(true){
if((i__90310 < count__90309)){
var arg = chunk__90308.cljs$core$IIndexed$_nth$arity$2(null,i__90310);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__90457_90721 = arg;
var seq__90458_90722 = cljs.core.seq(vec__90457_90721);
var first__90459_90723 = cljs.core.first(seq__90458_90722);
var seq__90458_90724__$1 = cljs.core.next(seq__90458_90722);
var prefix_90725 = first__90459_90723;
var args_STAR__90726__$2 = seq__90458_90724__$1;
if((prefix_90725 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__90460_90727 = cljs.core.seq(args_STAR__90726__$2);
var chunk__90461_90728 = null;
var count__90462_90729 = (0);
var i__90463_90730 = (0);
while(true){
if((i__90463_90730 < count__90462_90729)){
var arg_90731__$1 = chunk__90461_90728.cljs$core$IIndexed$_nth$arity$2(null,i__90463_90730);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_90725,sci.impl.load.prependss(arg_90731__$1,opts));


var G__90732 = seq__90460_90727;
var G__90733 = chunk__90461_90728;
var G__90734 = count__90462_90729;
var G__90735 = (i__90463_90730 + (1));
seq__90460_90727 = G__90732;
chunk__90461_90728 = G__90733;
count__90462_90729 = G__90734;
i__90463_90730 = G__90735;
continue;
} else {
var temp__5753__auto___90736 = cljs.core.seq(seq__90460_90727);
if(temp__5753__auto___90736){
var seq__90460_90737__$1 = temp__5753__auto___90736;
if(cljs.core.chunked_seq_QMARK_(seq__90460_90737__$1)){
var c__4679__auto___90738 = cljs.core.chunk_first(seq__90460_90737__$1);
var G__90739 = cljs.core.chunk_rest(seq__90460_90737__$1);
var G__90740 = c__4679__auto___90738;
var G__90741 = cljs.core.count(c__4679__auto___90738);
var G__90742 = (0);
seq__90460_90727 = G__90739;
chunk__90461_90728 = G__90740;
count__90462_90729 = G__90741;
i__90463_90730 = G__90742;
continue;
} else {
var arg_90743__$1 = cljs.core.first(seq__90460_90737__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_90725,sci.impl.load.prependss(arg_90743__$1,opts));


var G__90745 = cljs.core.next(seq__90460_90737__$1);
var G__90746 = null;
var G__90747 = (0);
var G__90748 = (0);
seq__90460_90727 = G__90745;
chunk__90461_90728 = G__90746;
count__90462_90729 = G__90747;
i__90463_90730 = G__90748;
continue;
}
} else {
}
}
break;
}
}


var G__90749 = seq__90307;
var G__90750 = chunk__90308;
var G__90751 = count__90309;
var G__90752 = (i__90310 + (1));
seq__90307 = G__90749;
chunk__90308 = G__90750;
count__90309 = G__90751;
i__90310 = G__90752;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__90307);
if(temp__5753__auto__){
var seq__90307__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__90307__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__90307__$1);
var G__90754 = cljs.core.chunk_rest(seq__90307__$1);
var G__90755 = c__4679__auto__;
var G__90756 = cljs.core.count(c__4679__auto__);
var G__90757 = (0);
seq__90307 = G__90754;
chunk__90308 = G__90755;
count__90309 = G__90756;
i__90310 = G__90757;
continue;
} else {
var arg = cljs.core.first(seq__90307__$1);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__90496_90758 = arg;
var seq__90497_90759 = cljs.core.seq(vec__90496_90758);
var first__90498_90760 = cljs.core.first(seq__90497_90759);
var seq__90497_90761__$1 = cljs.core.next(seq__90497_90759);
var prefix_90762 = first__90498_90760;
var args_STAR__90763__$2 = seq__90497_90761__$1;
if((prefix_90762 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__90499_90764 = cljs.core.seq(args_STAR__90763__$2);
var chunk__90500_90765 = null;
var count__90501_90766 = (0);
var i__90502_90767 = (0);
while(true){
if((i__90502_90767 < count__90501_90766)){
var arg_90768__$1 = chunk__90500_90765.cljs$core$IIndexed$_nth$arity$2(null,i__90502_90767);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_90762,sci.impl.load.prependss(arg_90768__$1,opts));


var G__90769 = seq__90499_90764;
var G__90770 = chunk__90500_90765;
var G__90771 = count__90501_90766;
var G__90772 = (i__90502_90767 + (1));
seq__90499_90764 = G__90769;
chunk__90500_90765 = G__90770;
count__90501_90766 = G__90771;
i__90502_90767 = G__90772;
continue;
} else {
var temp__5753__auto___90773__$1 = cljs.core.seq(seq__90499_90764);
if(temp__5753__auto___90773__$1){
var seq__90499_90774__$1 = temp__5753__auto___90773__$1;
if(cljs.core.chunked_seq_QMARK_(seq__90499_90774__$1)){
var c__4679__auto___90775 = cljs.core.chunk_first(seq__90499_90774__$1);
var G__90776 = cljs.core.chunk_rest(seq__90499_90774__$1);
var G__90777 = c__4679__auto___90775;
var G__90778 = cljs.core.count(c__4679__auto___90775);
var G__90779 = (0);
seq__90499_90764 = G__90776;
chunk__90500_90765 = G__90777;
count__90501_90766 = G__90778;
i__90502_90767 = G__90779;
continue;
} else {
var arg_90780__$1 = cljs.core.first(seq__90499_90774__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_90762,sci.impl.load.prependss(arg_90780__$1,opts));


var G__90781 = cljs.core.next(seq__90499_90774__$1);
var G__90782 = null;
var G__90783 = (0);
var G__90784 = (0);
seq__90499_90764 = G__90781;
chunk__90500_90765 = G__90782;
count__90501_90766 = G__90783;
i__90502_90767 = G__90784;
continue;
}
} else {
}
}
break;
}
}


var G__90786 = cljs.core.next(seq__90307__$1);
var G__90787 = null;
var G__90788 = (0);
var G__90789 = (0);
seq__90307 = G__90786;
chunk__90308 = G__90787;
count__90309 = G__90788;
i__90310 = G__90789;
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
var len__4864__auto___90791 = arguments.length;
var i__4865__auto___90792 = (0);
while(true){
if((i__4865__auto___90792 < len__4864__auto___90791)){
args__4870__auto__.push((arguments[i__4865__auto___90792]));

var G__90793 = (i__4865__auto___90792 + (1));
i__4865__auto___90792 = G__90793;
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
(sci.impl.load.eval_require.cljs$lang$applyTo = (function (seq90539){
var G__90545 = cljs.core.first(seq90539);
var seq90539__$1 = cljs.core.next(seq90539);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__90545,seq90539__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.load.eval_require);
sci.impl.load.eval_use = (function sci$impl$load$eval_use(var_args){
var args__4870__auto__ = [];
var len__4864__auto___90794 = arguments.length;
var i__4865__auto___90795 = (0);
while(true){
if((i__4865__auto___90795 < len__4864__auto___90794)){
args__4870__auto__.push((arguments[i__4865__auto___90795]));

var G__90796 = (i__4865__auto___90795 + (1));
i__4865__auto___90795 = G__90796;
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
(sci.impl.load.eval_use.cljs$lang$applyTo = (function (seq90581){
var G__90582 = cljs.core.first(seq90581);
var seq90581__$1 = cljs.core.next(seq90581);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__90582,seq90581__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.load.eval_use);
sci.impl.load.eval_refer_clojure = (function sci$impl$load$eval_refer_clojure(ctx,exprs){
var ns_sym = new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null);
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__90613 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90613,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90613,(1),null);
var G__90616_90799 = k;
var G__90616_90800__$1 = (((G__90616_90799 instanceof cljs.core.Keyword))?G__90616_90799.fqn:null);
switch (G__90616_90800__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__90616_90799,G__90616_90800__$1,vec__90613,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.utils.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__90616_90799,G__90616_90800__$1,vec__90613,k,v,ns_sym))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__90616_90799,G__90616_90800__$1,vec__90613,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.utils.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__90616_90799,G__90616_90800__$1,vec__90613,k,v,ns_sym))
);

break;
case "rename":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__90616_90799,G__90616_90800__$1,vec__90613,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.utils.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var the_current_ns__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__90616_90799,G__90616_90800__$1,vec__90613,k,v,ns_sym){
return (function (acc,p__90620){
var vec__90621 = p__90620;
var original_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90621,(0),null);
var new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90621,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refers","refers",158076809),new_name], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(other_ns,original_name)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),original_name);
});})(exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__90616_90799,G__90616_90800__$1,vec__90613,k,v,ns_sym))
,the_current_ns,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});})(exprs__$1,G__90616_90799,G__90616_90800__$1,vec__90613,k,v,ns_sym))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__90616_90800__$1)].join('')));

}

var G__90804 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__90804;
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
var len__4864__auto___90808 = arguments.length;
var i__4865__auto___90809 = (0);
while(true){
if((i__4865__auto___90809 < len__4864__auto___90808)){
args__4870__auto__.push((arguments[i__4865__auto___90809]));

var G__90810 = (i__4865__auto___90809 + (1));
i__4865__auto___90809 = G__90810;
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
(sci.impl.load.eval_refer.cljs$lang$applyTo = (function (seq90635){
var G__90636 = cljs.core.first(seq90635);
var seq90635__$1 = cljs.core.next(seq90635);
var G__90637 = cljs.core.first(seq90635__$1);
var seq90635__$2 = cljs.core.next(seq90635__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__90636,G__90637,seq90635__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.load.eval_refer);

//# sourceMappingURL=sci.impl.load.js.map
