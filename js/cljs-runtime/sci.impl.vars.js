goog.provide('sci.impl.vars');

/**
* @constructor
*/
sci.impl.vars.Frame = (function (bindings,prev){
this.bindings = bindings;
this.prev = prev;
});

(sci.impl.vars.Frame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"prev","prev",43462301,null)], null);
}));

(sci.impl.vars.Frame.cljs$lang$type = true);

(sci.impl.vars.Frame.cljs$lang$ctorStr = "sci.impl.vars/Frame");

(sci.impl.vars.Frame.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"sci.impl.vars/Frame");
}));

/**
 * Positional factory function for sci.impl.vars/Frame.
 */
sci.impl.vars.__GT_Frame = (function sci$impl$vars$__GT_Frame(bindings,prev){
return (new sci.impl.vars.Frame(bindings,prev));
});

sci.impl.vars.top_frame = (new sci.impl.vars.Frame(cljs.core.PersistentArrayMap.EMPTY,null));
sci.impl.vars.dvals = cljs.core.volatile_BANG_(sci.impl.vars.top_frame);
sci.impl.vars.get_thread_binding_frame = (function sci$impl$vars$get_thread_binding_frame(){
return cljs.core.deref(sci.impl.vars.dvals);
});

/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.vars.TBox = (function (thread,val){
this.thread = thread;
this.val = val;
});
(sci.impl.vars.TBox.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.vars.TBox.prototype.sci$impl$types$IBox$setVal$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return (self__.val = v);
}));

(sci.impl.vars.TBox.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.val;
}));

(sci.impl.vars.TBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"thread","thread",-1707434245,null),cljs.core.with_meta(new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(sci.impl.vars.TBox.cljs$lang$type = true);

(sci.impl.vars.TBox.cljs$lang$ctorStr = "sci.impl.vars/TBox");

(sci.impl.vars.TBox.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"sci.impl.vars/TBox");
}));

/**
 * Positional factory function for sci.impl.vars/TBox.
 */
sci.impl.vars.__GT_TBox = (function sci$impl$vars$__GT_TBox(thread,val){
return (new sci.impl.vars.TBox(thread,val));
});

sci.impl.vars.clone_thread_binding_frame = (function sci$impl$vars$clone_thread_binding_frame(){
var f = cljs.core.deref(sci.impl.vars.dvals);
return (new sci.impl.vars.Frame(f.bindings,null));
});
sci.impl.vars.reset_thread_binding_frame = (function sci$impl$vars$reset_thread_binding_frame(frame){
return cljs.core.vreset_BANG_(sci.impl.vars.dvals,frame);
});

/**
 * @interface
 */
sci.impl.vars.IVar = function(){};

var sci$impl$vars$IVar$bindRoot$dyn_75171 = (function (this$,v){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sci.impl.vars.bindRoot[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4551__auto__.call(null,this$,v));
} else {
var m__4549__auto__ = (sci.impl.vars.bindRoot["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4549__auto__.call(null,this$,v));
} else {
throw cljs.core.missing_protocol("IVar.bindRoot",this$);
}
}
});
sci.impl.vars.bindRoot = (function sci$impl$vars$bindRoot(this$,v){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$bindRoot$arity$2 == null)))))){
return this$.sci$impl$vars$IVar$bindRoot$arity$2(this$,v);
} else {
return sci$impl$vars$IVar$bindRoot$dyn_75171(this$,v);
}
});

var sci$impl$vars$IVar$getRawRoot$dyn_75176 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sci.impl.vars.getRawRoot[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (sci.impl.vars.getRawRoot["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVar.getRawRoot",this$);
}
}
});
sci.impl.vars.getRawRoot = (function sci$impl$vars$getRawRoot(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$getRawRoot$arity$1 == null)))))){
return this$.sci$impl$vars$IVar$getRawRoot$arity$1(this$);
} else {
return sci$impl$vars$IVar$getRawRoot$dyn_75176(this$);
}
});

var sci$impl$vars$IVar$toSymbol$dyn_75178 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sci.impl.vars.toSymbol[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (sci.impl.vars.toSymbol["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVar.toSymbol",this$);
}
}
});
sci.impl.vars.toSymbol = (function sci$impl$vars$toSymbol(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$toSymbol$arity$1 == null)))))){
return this$.sci$impl$vars$IVar$toSymbol$arity$1(this$);
} else {
return sci$impl$vars$IVar$toSymbol$dyn_75178(this$);
}
});

var sci$impl$vars$IVar$isMacro$dyn_75192 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sci.impl.vars.isMacro[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (sci.impl.vars.isMacro["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVar.isMacro",this$);
}
}
});
sci.impl.vars.isMacro = (function sci$impl$vars$isMacro(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$isMacro$arity$1 == null)))))){
return this$.sci$impl$vars$IVar$isMacro$arity$1(this$);
} else {
return sci$impl$vars$IVar$isMacro$dyn_75192(this$);
}
});

var sci$impl$vars$IVar$hasRoot$dyn_75201 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sci.impl.vars.hasRoot[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (sci.impl.vars.hasRoot["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVar.hasRoot",this$);
}
}
});
sci.impl.vars.hasRoot = (function sci$impl$vars$hasRoot(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$hasRoot$arity$1 == null)))))){
return this$.sci$impl$vars$IVar$hasRoot$arity$1(this$);
} else {
return sci$impl$vars$IVar$hasRoot$dyn_75201(this$);
}
});

var sci$impl$vars$IVar$setThreadBound$dyn_75213 = (function (this$,v){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sci.impl.vars.setThreadBound[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4551__auto__.call(null,this$,v));
} else {
var m__4549__auto__ = (sci.impl.vars.setThreadBound["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,v) : m__4549__auto__.call(null,this$,v));
} else {
throw cljs.core.missing_protocol("IVar.setThreadBound",this$);
}
}
});
sci.impl.vars.setThreadBound = (function sci$impl$vars$setThreadBound(this$,v){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$setThreadBound$arity$2 == null)))))){
return this$.sci$impl$vars$IVar$setThreadBound$arity$2(this$,v);
} else {
return sci$impl$vars$IVar$setThreadBound$dyn_75213(this$,v);
}
});

var sci$impl$vars$IVar$unbind$dyn_75230 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sci.impl.vars.unbind[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (sci.impl.vars.unbind["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IVar.unbind",this$);
}
}
});
sci.impl.vars.unbind = (function sci$impl$vars$unbind(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$IVar$unbind$arity$1 == null)))))){
return this$.sci$impl$vars$IVar$unbind$arity$1(this$);
} else {
return sci$impl$vars$IVar$unbind$dyn_75230(this$);
}
});


/**
 * @interface
 */
sci.impl.vars.DynVar = function(){};

var sci$impl$vars$DynVar$dynamic_QMARK_$dyn_75246 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sci.impl.vars.dynamic_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (sci.impl.vars.dynamic_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("DynVar.dynamic?",this$);
}
}
});
sci.impl.vars.dynamic_QMARK_ = (function sci$impl$vars$dynamic_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$DynVar$dynamic_QMARK_$arity$1 == null)))))){
return this$.sci$impl$vars$DynVar$dynamic_QMARK_$arity$1(this$);
} else {
return sci$impl$vars$DynVar$dynamic_QMARK_$dyn_75246(this$);
}
});


/**
 * @interface
 */
sci.impl.vars.CtxVar = function(){};

var sci$impl$vars$CtxVar$needs_ctx_QMARK_$dyn_75258 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sci.impl.vars.needs_ctx_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (sci.impl.vars.needs_ctx_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("CtxVar.needs-ctx?",this$);
}
}
});
sci.impl.vars.needs_ctx_QMARK_ = (function sci$impl$vars$needs_ctx_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$CtxVar$needs_ctx_QMARK_$arity$1 == null)))))){
return this$.sci$impl$vars$CtxVar$needs_ctx_QMARK_$arity$1(this$);
} else {
return sci$impl$vars$CtxVar$needs_ctx_QMARK_$dyn_75258(this$);
}
});

var sci$impl$vars$CtxVar$needs_ctx_BANG_$dyn_75274 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sci.impl.vars.needs_ctx_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (sci.impl.vars.needs_ctx_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("CtxVar.needs-ctx!",this$);
}
}
});
sci.impl.vars.needs_ctx_BANG_ = (function sci$impl$vars$needs_ctx_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$vars$CtxVar$needs_ctx_BANG_$arity$1 == null)))))){
return this$.sci$impl$vars$CtxVar$needs_ctx_BANG_$arity$1(this$);
} else {
return sci$impl$vars$CtxVar$needs_ctx_BANG_$dyn_75274(this$);
}
});

(sci.impl.vars.DynVar["_"] = true);

(sci.impl.vars.dynamic_QMARK_["_"] = (function (_){
return false;
}));
sci.impl.vars.push_thread_bindings = (function sci$impl$vars$push_thread_bindings(bindings){
var frame = sci.impl.vars.get_thread_binding_frame();
var bmap = frame.bindings;
var bmap__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__75115){
var vec__75116 = p__75115;
var var_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75116,(0),null);
var val_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75116,(1),null);
if(cljs.core.not(sci.impl.vars.dynamic_QMARK_(var_STAR_))){
throw (new Error(["Can't dynamically bind non-dynamic var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_STAR_)].join('')));
} else {
}

sci.impl.vars.setThreadBound(var_STAR_,true);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,var_STAR_,(new sci.impl.vars.TBox(null,val_STAR_)));
}),bmap,bindings);
return sci.impl.vars.reset_thread_binding_frame((new sci.impl.vars.Frame(bmap__$1,frame)));
});
sci.impl.vars.pop_thread_bindings = (function sci$impl$vars$pop_thread_bindings(){
var temp__5751__auto__ = sci.impl.vars.get_thread_binding_frame().prev;
if(cljs.core.truth_(temp__5751__auto__)){
var f = temp__5751__auto__;
if((sci.impl.vars.top_frame === f)){
return cljs.core.vreset_BANG_(sci.impl.vars.dvals,sci.impl.vars.top_frame);
} else {
return sci.impl.vars.reset_thread_binding_frame(f);
}
} else {
throw (new Error("No frame to pop."));
}
});
sci.impl.vars.get_thread_bindings = (function sci$impl$vars$get_thread_bindings(){
var f = sci.impl.vars.get_thread_binding_frame();
var ret = cljs.core.PersistentArrayMap.EMPTY;
var kvs = cljs.core.seq(f.bindings);
while(true){
if(kvs){
var vec__75122 = cljs.core.first(kvs);
var var_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75122,(0),null);
var tbox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75122,(1),null);
var tbox_val = tbox.sci$impl$types$IBox$getVal$arity$1(null);
var G__75305 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,var_STAR_,tbox_val);
var G__75306 = cljs.core.next(kvs);
ret = G__75305;
kvs = G__75306;
continue;
} else {
return ret;
}
break;
}
});
sci.impl.vars.get_thread_binding = (function sci$impl$vars$get_thread_binding(sci_var){
var temp__5753__auto__ = cljs.core.deref(sci.impl.vars.dvals);
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
return f.bindings.get(sci_var);
} else {
return null;
}
});
sci.impl.vars.binding_conveyor_fn = (function sci$impl$vars$binding_conveyor_fn(f){
var frame = sci.impl.vars.clone_thread_binding_frame();
return (function() {
var G__75307 = null;
var G__75307__0 = (function (){
sci.impl.vars.reset_thread_binding_frame(frame);

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__75307__1 = (function (x){
sci.impl.vars.reset_thread_binding_frame(frame);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
});
var G__75307__2 = (function (x,y){
sci.impl.vars.reset_thread_binding_frame(frame);

return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y));
});
var G__75307__3 = (function (x,y,z){
sci.impl.vars.reset_thread_binding_frame(frame);

return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(x,y,z) : f.call(null,x,y,z));
});
var G__75307__4 = (function() { 
var G__75310__delegate = function (x,y,z,args){
sci.impl.vars.reset_thread_binding_frame(frame);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args);
};
var G__75310 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
var G__75311__i = 0, G__75311__a = new Array(arguments.length -  3);
while (G__75311__i < G__75311__a.length) {G__75311__a[G__75311__i] = arguments[G__75311__i + 3]; ++G__75311__i;}
  args = new cljs.core.IndexedSeq(G__75311__a,0,null);
} 
return G__75310__delegate.call(this,x,y,z,args);};
G__75310.cljs$lang$maxFixedArity = 3;
G__75310.cljs$lang$applyTo = (function (arglist__75312){
var x = cljs.core.first(arglist__75312);
arglist__75312 = cljs.core.next(arglist__75312);
var y = cljs.core.first(arglist__75312);
arglist__75312 = cljs.core.next(arglist__75312);
var z = cljs.core.first(arglist__75312);
var args = cljs.core.rest(arglist__75312);
return G__75310__delegate(x,y,z,args);
});
G__75310.cljs$core$IFn$_invoke$arity$variadic = G__75310__delegate;
return G__75310;
})()
;
G__75307 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__75307__0.call(this);
case 1:
return G__75307__1.call(this,x);
case 2:
return G__75307__2.call(this,x,y);
case 3:
return G__75307__3.call(this,x,y,z);
default:
var G__75314 = null;
if (arguments.length > 3) {
var G__75315__i = 0, G__75315__a = new Array(arguments.length -  3);
while (G__75315__i < G__75315__a.length) {G__75315__a[G__75315__i] = arguments[G__75315__i + 3]; ++G__75315__i;}
G__75314 = new cljs.core.IndexedSeq(G__75315__a,0,null);
}
return G__75307__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, G__75314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75307.cljs$lang$maxFixedArity = 3;
G__75307.cljs$lang$applyTo = G__75307__4.cljs$lang$applyTo;
G__75307.cljs$core$IFn$_invoke$arity$0 = G__75307__0;
G__75307.cljs$core$IFn$_invoke$arity$1 = G__75307__1;
G__75307.cljs$core$IFn$_invoke$arity$2 = G__75307__2;
G__75307.cljs$core$IFn$_invoke$arity$3 = G__75307__3;
G__75307.cljs$core$IFn$_invoke$arity$variadic = G__75307__4.cljs$core$IFn$_invoke$arity$variadic;
return G__75307;
})()
});
sci.impl.vars.throw_unbound_call_exception = (function sci$impl$vars$throw_unbound_call_exception(the_var){
throw (new Error(["Attempting to call unbound fn: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(the_var)].join('')));
});

/**
* @constructor
 * @implements {cljs.core.IFn}
*/
sci.impl.vars.SciUnbound = (function (the_var){
this.the_var = the_var;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sci.impl.vars.SciUnbound.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["Unbound: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.the_var)].join('');
}));

(sci.impl.vars.SciUnbound.prototype.call = (function (unused__43952__auto__){
var self__ = this;
var self__ = this;
var G__75126 = (arguments.length - (1));
switch (G__75126) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (4):
return self__.cljs$core$IFn$_invoke$arity$4((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case (5):
return self__.cljs$core$IFn$_invoke$arity$5((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case (6):
return self__.cljs$core$IFn$_invoke$arity$6((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case (7):
return self__.cljs$core$IFn$_invoke$arity$7((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case (8):
return self__.cljs$core$IFn$_invoke$arity$8((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case (9):
return self__.cljs$core$IFn$_invoke$arity$9((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case (10):
return self__.cljs$core$IFn$_invoke$arity$10((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
case (11):
return self__.cljs$core$IFn$_invoke$arity$11((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
case (12):
return self__.cljs$core$IFn$_invoke$arity$12((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]));

break;
case (13):
return self__.cljs$core$IFn$_invoke$arity$13((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]));

break;
case (14):
return self__.cljs$core$IFn$_invoke$arity$14((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]));

break;
case (15):
return self__.cljs$core$IFn$_invoke$arity$15((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]));

break;
case (16):
return self__.cljs$core$IFn$_invoke$arity$16((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]));

break;
case (17):
return self__.cljs$core$IFn$_invoke$arity$17((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]));

break;
case (18):
return self__.cljs$core$IFn$_invoke$arity$18((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]));

break;
case (19):
return self__.cljs$core$IFn$_invoke$arity$19((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]));

break;
case (20):
return self__.cljs$core$IFn$_invoke$arity$20((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]),(arguments[(20)]));

break;
case (21):
return self__.cljs$core$IFn$_invoke$arity$21((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]),(arguments[(20)]),(arguments[(21)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(sci.impl.vars.SciUnbound.prototype.apply = (function (self__,args75125){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args75125)));
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return sci.impl.vars.throw_unbound_call_exception(self__.the_var);
}));

(sci.impl.vars.SciUnbound.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"the-var","the-var",-1226020156,null)], null);
}));

(sci.impl.vars.SciUnbound.cljs$lang$type = true);

(sci.impl.vars.SciUnbound.cljs$lang$ctorStr = "sci.impl.vars/SciUnbound");

(sci.impl.vars.SciUnbound.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"sci.impl.vars/SciUnbound");
}));

/**
 * Positional factory function for sci.impl.vars/SciUnbound.
 */
sci.impl.vars.__GT_SciUnbound = (function sci$impl$vars$__GT_SciUnbound(the_var){
return (new sci.impl.vars.SciUnbound(the_var));
});

sci.impl.vars.built_in_var_QMARK_ = (function sci$impl$vars$built_in_var_QMARK_(var_meta){
return new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599).cljs$core$IFn$_invoke$arity$1(var_meta);
});
sci.impl.vars.var_get = (function sci$impl$vars$var_get(v){
return cljs.core.deref(v);
});
sci.impl.vars.var_set = (function sci$impl$vars$var_set(v,val){
return sci.impl.types.setVal(v,val);
});
/**
 * If sym is namespace-qualified, remove the namespace, else return sym
 */
sci.impl.vars.unqualify_symbol = (function sci$impl$vars$unqualify_symbol(sym){
if(cljs.core.qualified_symbol_QMARK_(sym)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));
} else {
return sym;
}
});
sci.impl.vars.alter_var_root = (function sci$impl$vars$alter_var_root(var_args){
var G__75150 = arguments.length;
switch (G__75150) {
case 2:
return sci.impl.vars.alter_var_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___75439 = arguments.length;
var i__4865__auto___75442 = (0);
while(true){
if((i__4865__auto___75442 < len__4864__auto___75439)){
args_arr__4885__auto__.push((arguments[i__4865__auto___75442]));

var G__75443 = (i__4865__auto___75442 + (1));
i__4865__auto___75442 = G__75443;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return sci.impl.vars.alter_var_root.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(sci.impl.vars.alter_var_root.cljs$core$IFn$_invoke$arity$2 = (function (v,f){
return sci.impl.vars.bindRoot(v,(function (){var G__75151 = sci.impl.vars.getRawRoot(v);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__75151) : f.call(null,G__75151));
})());
}));

(sci.impl.vars.alter_var_root.cljs$core$IFn$_invoke$arity$variadic = (function (v,f,args){
return sci.impl.vars.bindRoot(v,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,sci.impl.vars.getRawRoot(v),args));
}));

/** @this {Function} */
(sci.impl.vars.alter_var_root.cljs$lang$applyTo = (function (seq75147){
var G__75148 = cljs.core.first(seq75147);
var seq75147__$1 = cljs.core.next(seq75147);
var G__75149 = cljs.core.first(seq75147__$1);
var seq75147__$2 = cljs.core.next(seq75147__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75148,G__75149,seq75147__$2);
}));

(sci.impl.vars.alter_var_root.cljs$lang$maxFixedArity = (2));


//# sourceMappingURL=sci.impl.vars.js.map
