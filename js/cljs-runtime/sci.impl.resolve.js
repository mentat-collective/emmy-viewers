goog.provide('sci.impl.resolve');
sci.impl.resolve.throw_error_with_location = (function sci$impl$resolve$throw_error_with_location(msg,node){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),"analysis"], null));
});
sci.impl.resolve.mark_resolve_sym = (function sci$impl$resolve$mark_resolve_sym(sym,idx){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(sym,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"resolve-sym","resolve-sym",-1193683260),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","idx","sci.impl/idx",700902278),idx], 0));
}));
});
sci.impl.resolve.check_permission_BANG_ = (function sci$impl$resolve$check_permission_BANG_(ctx,sym,p__91082){
var vec__91083 = p__91082;
var check_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91083,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91083,(1),null);
var or__4253__auto__ = (sci.impl.utils.allowed_loop === sym);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (sci.impl.utils.allowed_recur === sym);
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
var check_sym__$1 = sci.impl.utils.strip_core_ns(check_sym);
var allow = new cljs.core.Keyword(null,"allow","allow",-1857325745).cljs$core$IFn$_invoke$arity$1(ctx);
if((cljs.core.truth_(allow)?((((sci.impl.utils.var_QMARK_(v)) && (cljs.core.not(new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))))) || (cljs.core.contains_QMARK_(allow,check_sym__$1))):true)){
} else {
sci.impl.resolve.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," is not allowed!"].join(''),sym);
}

var deny = new cljs.core.Keyword(null,"deny","deny",1589338523).cljs$core$IFn$_invoke$arity$1(ctx);
if((cljs.core.truth_(deny)?cljs.core.contains_QMARK_(deny,check_sym__$1):false)){
return sci.impl.resolve.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," is not allowed!"].join(''),sym);
} else {
return null;
}
}
}
});
sci.impl.resolve.lookup_STAR_ = (function sci$impl$resolve$lookup_STAR_(var_args){
var G__91090 = arguments.length;
switch (G__91090) {
case 3:
return sci.impl.resolve.lookup_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.resolve.lookup_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.resolve.lookup_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (ctx,sym,call_QMARK_){
return sci.impl.resolve.lookup_STAR_.cljs$core$IFn$_invoke$arity$4(ctx,sym,call_QMARK_,false);
}));

(sci.impl.resolve.lookup_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (ctx,sym,call_QMARK_,only_var_QMARK_){
var sym_ns = (function (){var G__91093 = cljs.core.namespace(sym);
if((G__91093 == null)){
return null;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__91093);
}
})();
var sym_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));
var env = ctx.get(new cljs.core.Keyword(null,"env","env",-1815813235));
var env__$1 = cljs.core.deref(env);
var cnn = sci.impl.utils.current_ns_name();
var the_current_ns = (function (){var G__91094 = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env__$1);
return (cnn.cljs$core$IFn$_invoke$arity$1 ? cnn.cljs$core$IFn$_invoke$arity$1(G__91094) : cnn.call(null,G__91094));
})();
var sym_ns__$1 = (cljs.core.truth_(sym_ns)?(function (){var or__4253__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),sym_ns], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sym_ns;
}
})():null);
if(cljs.core.truth_(sym_ns__$1)){
var or__4253__auto__ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym_ns__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym_ns__$1,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)))))?(function (){var or__4253__auto__ = (function (){var G__91098 = env__$1;
var G__91098__$1 = (((G__91098 == null))?null:new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(G__91098));
var G__91098__$2 = (((G__91098__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__91098__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null)));
if((G__91098__$2 == null)){
return null;
} else {
return cljs.core.find(G__91098__$2,sym_name);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var temp__5753__auto__ = (cljs.core.truth_(call_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.utils.ana_macros,sym_name):null);
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,v], null);
} else {
return null;
}
}
})():null);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var G__91102 = env__$1;
var G__91102__$1 = (((G__91102 == null))?null:new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(G__91102));
var G__91102__$2 = (((G__91102__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__91102__$1,sym_ns__$1));
if((G__91102__$2 == null)){
return null;
} else {
return cljs.core.find(G__91102__$2,sym_name);
}
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
if(cljs.core.truth_(only_var_QMARK_)){
return null;
} else {
var temp__5753__auto__ = sci.impl.interop.resolve_class(ctx,sym_ns__$1);
if(cljs.core.truth_(temp__5753__auto__)){
var clazz = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,(cljs.core.truth_(call_QMARK_)?cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clazz,sym_name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl.analyzer","static-access","sci.impl.analyzer/static-access",-79014000),true], null)):(function (){var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(sym),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns)], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.interop.get_static_field(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clazz,sym_name], null));
}),stack);
})())], null);
} else {
return null;
}
}
}
}
} else {
var or__4253__auto__ = (function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
if(cljs.core.truth_(temp__5753__auto__)){
var refers = temp__5753__auto__;
return cljs.core.find(refers,sym_name);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = cljs.core.find(the_current_ns,sym);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = (function (){var kv = (function (){var G__91225 = env__$1;
var G__91225__$1 = (((G__91225 == null))?null:new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(G__91225));
var G__91225__$2 = (((G__91225__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__91225__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null)));
if((G__91225__$2 == null)){
return null;
} else {
return cljs.core.find(G__91225__$2,sym_name);
}
})();
if(cljs.core.truth_((function (){var G__91241 = the_current_ns;
var G__91241__$1 = (((G__91241 == null))?null:new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(G__91241));
var G__91241__$2 = (((G__91241__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__91241__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null)));
var G__91241__$3 = (((G__91241__$2 == null))?null:new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(G__91241__$2));
if((G__91241__$3 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__91241__$3,sym_name);
}
})())){
return null;
} else {
return kv;
}
})();
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = (cljs.core.truth_((cljs.core.truth_(call_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.utils.ana_macros,sym):null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,sym], null):null);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
if(cljs.core.truth_(only_var_QMARK_)){
return null;
} else {
var or__4253__auto____$4 = (function (){var temp__5753__auto__ = sci.impl.interop.resolve_class(ctx,sym);
if(cljs.core.truth_(temp__5753__auto__)){
var c = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,c], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var temp__5753__auto__ = sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$2(ctx,sym);
if(cljs.core.truth_(temp__5753__auto__)){
var x = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,x], null);
} else {
return null;
}
}
}
}
}
}
}
}
}));

(sci.impl.resolve.lookup_STAR_.cljs$lang$maxFixedArity = 4);

/**
 * :syms = closed over -> idx
 */
sci.impl.resolve.update_parents = (function sci$impl$resolve$update_parents(ctx,closure_bindings,ob){
var parents = new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx);
var new_cb = cljs.core._vreset_BANG_(closure_bindings,(function (cb){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__91265,_idx){
var vec__91266 = p__91265;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91266,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91266,(1),null);
var new_acc = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(acc,path,(function (entry){
var iden__GT_invoke_idx = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"syms","syms",-1575891762).cljs$core$IFn$_invoke$arity$1(entry);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var added_before_QMARK_ = cljs.core.contains_QMARK_(iden__GT_invoke_idx,ob);
if(added_before_QMARK_){
return entry;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entry,new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(iden__GT_invoke_idx,ob,cljs.core.count(iden__GT_invoke_idx)));
}
}));
var new_res = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_acc,cljs.core.pop(cljs.core.pop(path))], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(acc,new_acc)){
return cljs.core.reduced(new_res);
} else {
return new_res;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb,parents], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1((cljs.core.count(parents) / (2)))));
})(cljs.core._deref(closure_bindings)));
var closure_idx = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_cb,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(parents,new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ob], 0)));
return closure_idx;
});
sci.impl.resolve.lookup = (function sci$impl$resolve$lookup(var_args){
var G__91272 = arguments.length;
switch (G__91272) {
case 3:
return sci.impl.resolve.lookup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.resolve.lookup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.resolve.lookup.cljs$core$IFn$_invoke$arity$3 = (function (ctx,sym,call_QMARK_){
return sci.impl.resolve.lookup.cljs$core$IFn$_invoke$arity$4(ctx,sym,call_QMARK_,null);
}));

(sci.impl.resolve.lookup.cljs$core$IFn$_invoke$arity$4 = (function (ctx,sym,call_QMARK_,_tag){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var track_mutable_QMARK_ = ctx.get(new cljs.core.Keyword(null,"deftype-fields","deftype-fields",-222569172));
var or__4253__auto__ = (function (){var temp__5753__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5753__auto__)){
var vec__91274 = temp__5753__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91274,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91274,(1),null);
var idx = (function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(ctx),v);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var oi = new cljs.core.Keyword(null,"outer-idens","outer-idens",1197381241).cljs$core$IFn$_invoke$arity$1(ctx);
var ob = (oi.cljs$core$IFn$_invoke$arity$1 ? oi.cljs$core$IFn$_invoke$arity$1(v) : oi.call(null,v));
return sci.impl.resolve.update_parents(ctx,new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx),ob);
}
})();
var mutable_QMARK_ = (cljs.core.truth_(track_mutable_QMARK_)?(function (){var temp__5753__auto____$1 = (function (){var G__91277 = k;
if((G__91277 == null)){
return null;
} else {
return cljs.core.meta(G__91277);
}
})();
if(cljs.core.truth_(temp__5753__auto____$1)){
var m = temp__5753__auto____$1;
return new cljs.core.Keyword(null,"mutable","mutable",875778266).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})():null);
var v__$1 = (cljs.core.truth_(call_QMARK_)?sci.impl.resolve.mark_resolve_sym(k,idx):(function (){var v__$1 = (function (){var G__91278 = (cljs.core.truth_(mutable_QMARK_)?(function (){var ext_map = cljs.core.second(sci.impl.resolve.lookup.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Symbol(null,"__sci_this","__sci_this",-193704996,null),false));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings__$1){
var this$__$1 = sci.impl.types.eval(ext_map,ctx__$1,bindings__$1);
var inner = sci.impl.types.getVal(this$__$1);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(inner,sym);
}),null);
})():sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings__$1){
return (bindings__$1[idx]);
}),null));
if(cljs.core.truth_(mutable_QMARK_)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__91278,cljs.core.assoc,new cljs.core.Keyword(null,"mutable","mutable",875778266),true);
} else {
return G__91278;
}
})();
return v__$1;
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$1], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var temp__5753__auto__ = sci.impl.resolve.lookup_STAR_.cljs$core$IFn$_invoke$arity$3(ctx,sym,call_QMARK_);
if(cljs.core.truth_(temp__5753__auto__)){
var kv = temp__5753__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"check-permissions","check-permissions",669054317).cljs$core$IFn$_invoke$arity$1(ctx))){
sci.impl.resolve.check_permission_BANG_(ctx,sym,kv);
} else {
}

return kv;
} else {
return null;
}
}
}));

(sci.impl.resolve.lookup.cljs$lang$maxFixedArity = 4);

cljs.core.vreset_BANG_(sci.impl.utils.lookup,sci.impl.resolve.lookup);
sci.impl.resolve.resolve_dotted_access = (function sci$impl$resolve$resolve_dotted_access(ctx,sym,call_QMARK_,tag){
var sym_ns = cljs.core.namespace(sym);
var sym_name = cljs.core.name(sym);
var temp__5753__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(sym_name,".");
if(cljs.core.truth_(temp__5753__auto__)){
var prefix_idx = temp__5753__auto__;
if((prefix_idx > (0))){
var prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(sym_name,(0),prefix_idx);
var new_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(sym_ns,prefix);
var resolved = (sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$4 ? sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$4(ctx,new_sym,call_QMARK_,tag) : sci.impl.resolve.resolve_symbol.call(null,ctx,new_sym,call_QMARK_,tag));
var clazz = ((sci.impl.utils.var_QMARK_(resolved))?cljs.core.deref(resolved):resolved);
if(cljs.core.truth_(clazz)){
var path = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(sym_name,(prefix_idx + (1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,(cljs.core.truth_(call_QMARK_)?cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clazz,path], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl.analyzer","static-access","sci.impl.analyzer/static-access",-79014000),true], null)):(function (){var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(sym),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns)], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.interop.get_static_field(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clazz,path], null));
}),stack);
})())], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
sci.impl.resolve.resolve_symbol = (function sci$impl$resolve$resolve_symbol(var_args){
var G__91478 = arguments.length;
switch (G__91478) {
case 2:
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2 = (function (ctx,sym){
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$4(ctx,sym,false,null);
}));

(sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3 = (function (ctx,sym,call_QMARK_){
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$4(ctx,sym,call_QMARK_,null);
}));

(sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$4 = (function (ctx,sym,call_QMARK_,tag){
var res = cljs.core.second((function (){var or__4253__auto__ = sci.impl.resolve.lookup.cljs$core$IFn$_invoke$arity$4(ctx,sym,call_QMARK_,tag);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var n = cljs.core.name(sym);
if(cljs.core.truth_((function (){var and__4251__auto__ = call_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return ((clojure.string.starts_with_QMARK_(n,".")) && ((((n).length) > (1))));
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null)], null);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = call_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return ((clojure.string.ends_with_QMARK_(n,".")) && ((((n).length) > (1))));
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null)], null);
} else {
return null;
}
}
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.resolve.resolve_dotted_access(ctx,sym,call_QMARK_,tag);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return sci.impl.resolve.throw_error_with_location(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),sym);
}
}
}
})());
return res;
}));

(sci.impl.resolve.resolve_symbol.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=sci.impl.resolve.js.map
