goog.provide('sci.impl.utils');
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.error","realized-beyond-max","sci.error/realized-beyond-max",-1094268187),new cljs.core.Keyword("sci","error","sci/error",-979082803));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.error","parse","sci.error/parse",-264338844),new cljs.core.Keyword("sci","error","sci/error",-979082803));
sci.impl.utils.constant_QMARK_ = (function sci$impl$utils$constant_QMARK_(x){
return (((x == null)) || (((typeof x === 'number') || (((typeof x === 'string') || ((((x instanceof cljs.core.Keyword)) || (((cljs.core.boolean_QMARK_(x)) || ((x instanceof RegExp)))))))))));
});

sci.impl.utils.throw_error_with_location = (function sci$impl$utils$throw_error_with_location(var_args){
var G__76385 = arguments.length;
switch (G__76385) {
case 2:
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2 = (function (msg,iobj){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,iobj,cljs.core.PersistentArrayMap.EMPTY);
}));

(sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3 = (function (msg,iobj,data){
var map__76387 = cljs.core.meta(iobj);
var map__76387__$1 = cljs.core.__destructure_map(map__76387);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76387__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76387__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__76387__$1,new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("sci","error","sci/error",-979082803),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"file","file",-1269645878),file], null),data], 0)));
}));

(sci.impl.utils.throw_error_with_location.cljs$lang$maxFixedArity = 3);

sci.impl.utils._STAR_in_try_STAR_ = false;
sci.impl.utils.macro_QMARK_ = (function sci$impl$utils$macro_QMARK_(f){
var temp__5757__auto__ = cljs.core.meta(f);
if((temp__5757__auto__ == null)){
return null;
} else {
var m = temp__5757__auto__;
var or__4253__auto__ = new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
}
}
});
/**
 * used for allowing interop in with-out-str
 */
sci.impl.utils.allowed_append = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("append");
sci.impl.utils.demunge = (function sci$impl$utils$demunge(s){
return cljs.core.demunge(s);
});
sci.impl.utils.rethrow_with_location_of_node = (function sci$impl$utils$rethrow_with_location_of_node(var_args){
var G__76389 = arguments.length;
switch (G__76389) {
case 3:
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$3 = (function (ctx,e,raw_node){
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),e,raw_node);
}));

(sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4 = (function (ctx,_bindings,e,raw_node){
if(cljs.core.truth_(sci.impl.utils._STAR_in_try_STAR_)){
throw e;
} else {
var stack = sci.impl.types.stack(raw_node);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ctx);
var d = cljs.core.ex_data(e);
var st = (function (){var or__4253__auto__ = (function (){var temp__5753__auto__ = new cljs.core.Keyword("sci.impl","callstack","sci.impl/callstack",-1621010557).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(temp__5753__auto__)){
var st = temp__5753__auto__;
return st;
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.volatile_BANG_(cljs.core.List.EMPTY);
}
})();
if(cljs.core.truth_(stack)){
cljs.core._vreset_BANG_(st,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(st),stack));
} else {
}

var d__$1 = cljs.core.ex_data(e);
var wrapping_sci_error_QMARK_ = (function (){var and__4251__auto__ = cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(d__$1),new cljs.core.Keyword("sci","error","sci/error",-979082803));
if(and__4251__auto__){
return new cljs.core.Keyword("sci.impl","callstack","sci.impl/callstack",-1621010557).cljs$core$IFn$_invoke$arity$1(d__$1);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(wrapping_sci_error_QMARK_)){
throw e;
} else {
var ex_msg = e.message;
var map__76404 = (function (){var or__4253__auto__ = stack;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var G__76405 = env;
var G__76405__$1 = (((G__76405 == null))?null:cljs.core.deref(G__76405));
var G__76405__$2 = (((G__76405__$1 == null))?null:new cljs.core.Keyword("sci.impl","callstack","sci.impl/callstack",-1621010557).cljs$core$IFn$_invoke$arity$1(G__76405__$1));
var G__76405__$3 = (((G__76405__$2 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__76405__$2,id));
var G__76405__$4 = (((G__76405__$3 == null))?null:cljs.core.deref(G__76405__$3));
var G__76405__$5 = (((G__76405__$4 == null))?null:cljs.core.last(G__76405__$4));
if((G__76405__$5 == null)){
return null;
} else {
return cljs.core.meta(G__76405__$5);
}
}
})();
var map__76404__$1 = cljs.core.__destructure_map(map__76404);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76404__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76404__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76404__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4251__auto__ = line;
if(cljs.core.truth_(and__4251__auto__)){
return column;
} else {
return and__4251__auto__;
}
})())){
var ex_msg__$1 = ex_msg;
var phase = new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(d__$1);
var new_exception = (function (){var new_d = (function (){var G__76408 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("sci","error","sci/error",-979082803),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"message","message",-406056002),ex_msg__$1,new cljs.core.Keyword("sci.impl","callstack","sci.impl/callstack",-1621010557),st,new cljs.core.Keyword(null,"file","file",-1269645878),file], null);
if(cljs.core.truth_(phase)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76408,new cljs.core.Keyword(null,"phase","phase",575722892),phase);
} else {
return G__76408;
}
})();
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(ex_msg__$1,new_d,e);
})();
throw new_exception;
} else {
throw e;
}
}
}
}));

(sci.impl.utils.rethrow_with_location_of_node.cljs$lang$maxFixedArity = 4);

sci.impl.utils.iobj_QMARK_ = (function sci$impl$utils$iobj_QMARK_(obj){
var and__4251__auto__ = (((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$))))?true:false):false);
if(and__4251__auto__){
return cljs.core.meta(obj);
} else {
return and__4251__auto__;
}
});
/**
 * Only adds metadata to obj if d is not nil and if obj already has meta
 */
sci.impl.utils.vary_meta_STAR_ = (function sci$impl$utils$vary_meta_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___76468 = arguments.length;
var i__4865__auto___76470 = (0);
while(true){
if((i__4865__auto___76470 < len__4864__auto___76468)){
args__4870__auto__.push((arguments[i__4865__auto___76470]));

var G__76471 = (i__4865__auto___76470 + (1));
i__4865__auto___76470 = G__76471;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sci.impl.utils.vary_meta_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sci.impl.utils.vary_meta_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,f,args){
if(cljs.core.truth_(sci.impl.utils.iobj_QMARK_(obj))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vary_meta,obj,f,args);
} else {
return obj;
}
}));

(sci.impl.utils.vary_meta_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.utils.vary_meta_STAR_.cljs$lang$applyTo = (function (seq76410){
var G__76411 = cljs.core.first(seq76410);
var seq76410__$1 = cljs.core.next(seq76410);
var G__76412 = cljs.core.first(seq76410__$1);
var seq76410__$2 = cljs.core.next(seq76410__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76411,G__76412,seq76410__$2);
}));

sci.impl.utils.strip_core_ns = (function sci$impl$utils$strip_core_ns(sym){
var G__76423 = cljs.core.namespace(sym);
switch (G__76423) {
case "clojure.core":
case "cljs.core":
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));

break;
default:
return sym;

}
});
sci.impl.utils.allowed_loop = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("loop");
sci.impl.utils.allowed_recur = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("recur");
sci.impl.utils.var_unbound = (new Object());
/**
 * Fetches namespaces from env if it exists. Else, if `create?`,
 *   produces one regardless of the existince of the namespace in env and
 *   adds it to env before returning it.
 */
sci.impl.utils.namespace_object = (function sci$impl$utils$namespace_object(env,ns_sym,create_QMARK_,attr_map){
var env_STAR_ = cljs.core.deref(env);
var ns_map = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var or__4253__auto__ = new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(ns_map);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_((function (){var or__4253__auto____$1 = ns_map;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return create_QMARK_;
}
})())){
var ns_obj = sci.lang.__GT_Namespace(ns_sym,attr_map);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym,new cljs.core.Keyword(null,"obj","obj",981763962)], null),ns_obj);

return ns_obj;
} else {
return null;
}
}
});
sci.impl.utils.set_namespace_BANG_ = (function sci$impl$utils$set_namespace_BANG_(ctx,ns_sym,attr_map){
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var attr_map__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(ns_sym),attr_map], 0));
var ns_obj = sci.impl.utils.namespace_object(env,ns_sym,true,attr_map__$1);
return sci.impl.types.setVal(sci.impl.utils.current_ns,ns_obj);
});
sci.impl.utils.eval_form_state = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_require_state = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_use_state = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_resolve_state = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_refer_state = cljs.core.volatile_BANG_(null);
sci.impl.utils.macroexpand_STAR_ = cljs.core.volatile_BANG_(null);
sci.impl.utils.macroexpand_1_STAR_ = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_fn = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_string_STAR_ = cljs.core.volatile_BANG_(null);
sci.impl.utils.lookup = cljs.core.volatile_BANG_(null);
sci.impl.utils.analyze = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval = (function sci$impl$utils$eval(sci_ctx,form){
var fexpr__76428 = cljs.core.deref(sci.impl.utils.eval_form_state);
return (fexpr__76428.cljs$core$IFn$_invoke$arity$2 ? fexpr__76428.cljs$core$IFn$_invoke$arity$2(sci_ctx,form) : fexpr__76428.call(null,sci_ctx,form));
});
/**
 * Like partition-by but splits collection only when `pred` returns
 *   a truthy value. E.g. `(split-when odd? [1 2 3 4 5]) => ((1 2) (3 4) (5))`
 */
sci.impl.utils.split_when = (function sci$impl$utils$split_when(pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__5753__auto__ = cljs.core.seq(coll);
if(temp__5753__auto__){
var s = temp__5753__auto__;
var fst = cljs.core.first(s);
var f = cljs.core.complement(pred);
var run = cljs.core.cons(fst,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__76429_SHARP_){
return f(p1__76429_SHARP_);
}),cljs.core.next(s)));
return cljs.core.cons(run,(function (){var G__76430 = pred;
var G__76431 = (new cljs.core.LazySeq(null,(function (){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(run),s);
}),null,null));
return (sci.impl.utils.split_when.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.split_when.cljs$core$IFn$_invoke$arity$2(G__76430,G__76431) : sci.impl.utils.split_when.call(null,G__76430,G__76431));
})());
} else {
return null;
}
}),null,null));
});
sci.impl.utils.ana_macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 24, [new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"import","import",241030818,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"new","new",-444906321,null),"null",new cljs.core.Symbol(null,"ns","ns",2082130287,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),"null",new cljs.core.Symbol(null,"loop","loop",1244978678,null),"null",new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null),"null",new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"var","var",870848730,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"resolve","resolve",56086045,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null",new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null),"null"], null), null);
sci.impl.utils.maybe_destructured = (function sci$impl$utils$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__76480 = cljs.core.next(params__$1);
var G__76481 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__76482 = lets;
params__$1 = G__76480;
new_params = G__76481;
lets = G__76482;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__76483 = cljs.core.next(params__$1);
var G__76484 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__76485 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__76483;
new_params = G__76484;
lets = G__76485;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new_params,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))))], null)], null);
}
break;
}
}
});
sci.impl.utils.unqualify_symbol = sci.impl.vars.unqualify_symbol;
sci.impl.utils.make_stack = (function sci$impl$utils$make_stack(var_args){
var G__76433 = arguments.length;
switch (G__76433) {
case 1:
return sci.impl.utils.make_stack.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.utils.make_stack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.utils.make_stack.cljs$core$IFn$_invoke$arity$1 = (function (expr_meta){
return sci.impl.utils.make_stack.cljs$core$IFn$_invoke$arity$2(expr_meta,false);
}));

(sci.impl.utils.make_stack.cljs$core$IFn$_invoke$arity$2 = (function (expr_meta,special_QMARK_){
var G__76434 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(expr_meta,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file)], 0));
if(cljs.core.truth_(special_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76434,new cljs.core.Keyword(null,"special","special",-1125941630),true);
} else {
return G__76434;
}
}));

(sci.impl.utils.make_stack.cljs$lang$maxFixedArity = 2);

sci.impl.utils.log = (function sci$impl$utils$log(var_args){
var args__4870__auto__ = [];
var len__4864__auto___76487 = arguments.length;
var i__4865__auto___76488 = (0);
while(true){
if((i__4865__auto___76488 < len__4864__auto___76487)){
args__4870__auto__.push((arguments[i__4865__auto___76488]));

var G__76489 = (i__4865__auto___76488 + (1));
i__4865__auto___76488 = G__76489;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return console.log(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",xs));
}));

(sci.impl.utils.log.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.utils.log.cljs$lang$applyTo = (function (seq76435){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq76435));
}));

sci.impl.utils.dynamic_var = (function sci$impl$utils$dynamic_var(var_args){
var G__76437 = arguments.length;
switch (G__76437) {
case 1:
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,null,cljs.core.meta(name));
}));

(sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,cljs.core.meta(name));
}));

(sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,meta){
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(meta,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),(sci.impl.utils.unqualify_symbol.cljs$core$IFn$_invoke$arity$1 ? sci.impl.utils.unqualify_symbol.cljs$core$IFn$_invoke$arity$1(name) : sci.impl.utils.unqualify_symbol.call(null,name))], 0));
return (new sci.lang.Var(init_val,name,meta__$1,false,false));
}));

(sci.impl.utils.dynamic_var.cljs$lang$maxFixedArity = 3);

sci.impl.utils.user_ns = sci.lang.__GT_Namespace(new cljs.core.Symbol(null,"user","user",-1122004413,null),null);
sci.impl.utils.clojure_core_ns = sci.lang.__GT_Namespace(new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),null);
sci.impl.utils.current_file = sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"*file*","*file*",624866474,null),null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The path of the file being evaluated, as a String.\n\n  When there is no file, e.g. in the REPL, the value is not defined.",new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null));
sci.impl.utils.current_ns = sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"*ns*","*ns*",740153818,null),sci.impl.utils.user_ns,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns,new cljs.core.Keyword(null,"doc","doc",1913296891),"A sci.lang.Namespace object representing the current namespace."], null));
sci.impl.utils.current_ns_name = (function sci$impl$utils$current_ns_name(){
return sci.impl.types.getName(cljs.core.deref(sci.impl.utils.current_ns));
});
/**
 * Returns a new sci var.
 */
sci.impl.utils.new_var = (function sci$impl$utils$new_var(var_args){
var G__76443 = arguments.length;
switch (G__76443) {
case 1:
return sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
var G__76446 = sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$4(name,null,null,false);
sci.impl.vars.unbind(G__76446);

return G__76446;
}));

(sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$4(name,init_val,cljs.core.meta(name),false);
}));

(sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,meta){
return sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$4(name,init_val,meta,false);
}));

(sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$4 = (function (name,init_val,meta,ctx_QMARK_){
return (new sci.lang.Var(init_val,name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,new cljs.core.Keyword(null,"name","name",1843675177),(sci.impl.utils.unqualify_symbol.cljs$core$IFn$_invoke$arity$1 ? sci.impl.utils.unqualify_symbol.cljs$core$IFn$_invoke$arity$1(name) : sci.impl.utils.unqualify_symbol.call(null,name))),false,ctx_QMARK_));
}));

(sci.impl.utils.new_var.cljs$lang$maxFixedArity = 4);

sci.impl.utils.var_QMARK_ = (function sci$impl$utils$var_QMARK_(x){
return (x instanceof sci.lang.Var);
});
sci.impl.utils.namespace_QMARK_ = (function sci$impl$utils$namespace_QMARK_(x){
return (x instanceof sci.lang.Namespace);
});

//# sourceMappingURL=sci.impl.utils.js.map
