goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__54964 = arguments.length;
switch (G__54964) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54968 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54968 = (function (f,blockable,meta54969){
this.f = f;
this.blockable = blockable;
this.meta54969 = meta54969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54970,meta54969__$1){
var self__ = this;
var _54970__$1 = this;
return (new cljs.core.async.t_cljs$core$async54968(self__.f,self__.blockable,meta54969__$1));
}));

(cljs.core.async.t_cljs$core$async54968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54970){
var self__ = this;
var _54970__$1 = this;
return self__.meta54969;
}));

(cljs.core.async.t_cljs$core$async54968.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54968.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54968.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async54968.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async54968.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta54969","meta54969",585292007,null)], null);
}));

(cljs.core.async.t_cljs$core$async54968.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54968");

(cljs.core.async.t_cljs$core$async54968.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async54968");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54968.
 */
cljs.core.async.__GT_t_cljs$core$async54968 = (function cljs$core$async$__GT_t_cljs$core$async54968(f__$1,blockable__$1,meta54969){
return (new cljs.core.async.t_cljs$core$async54968(f__$1,blockable__$1,meta54969));
});

}

return (new cljs.core.async.t_cljs$core$async54968(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__54995 = arguments.length;
switch (G__54995) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__55003 = arguments.length;
switch (G__55003) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__55027 = arguments.length;
switch (G__55027) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_57718 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_57718) : fn1.call(null,val_57718));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_57718) : fn1.call(null,val_57718));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__55040 = arguments.length;
switch (G__55040) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___57727 = n;
var x_57728 = (0);
while(true){
if((x_57728 < n__4741__auto___57727)){
(a[x_57728] = x_57728);

var G__57730 = (x_57728 + (1));
x_57728 = G__57730;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55042 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55042 = (function (flag,meta55043){
this.flag = flag;
this.meta55043 = meta55043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55044,meta55043__$1){
var self__ = this;
var _55044__$1 = this;
return (new cljs.core.async.t_cljs$core$async55042(self__.flag,meta55043__$1));
}));

(cljs.core.async.t_cljs$core$async55042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55044){
var self__ = this;
var _55044__$1 = this;
return self__.meta55043;
}));

(cljs.core.async.t_cljs$core$async55042.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55042.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async55042.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async55042.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async55042.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta55043","meta55043",1189314788,null)], null);
}));

(cljs.core.async.t_cljs$core$async55042.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55042.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55042");

(cljs.core.async.t_cljs$core$async55042.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async55042");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55042.
 */
cljs.core.async.__GT_t_cljs$core$async55042 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async55042(flag__$1,meta55043){
return (new cljs.core.async.t_cljs$core$async55042(flag__$1,meta55043));
});

}

return (new cljs.core.async.t_cljs$core$async55042(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55086 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55086 = (function (flag,cb,meta55087){
this.flag = flag;
this.cb = cb;
this.meta55087 = meta55087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55088,meta55087__$1){
var self__ = this;
var _55088__$1 = this;
return (new cljs.core.async.t_cljs$core$async55086(self__.flag,self__.cb,meta55087__$1));
}));

(cljs.core.async.t_cljs$core$async55086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55088){
var self__ = this;
var _55088__$1 = this;
return self__.meta55087;
}));

(cljs.core.async.t_cljs$core$async55086.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55086.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async55086.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async55086.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async55086.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta55087","meta55087",148228045,null)], null);
}));

(cljs.core.async.t_cljs$core$async55086.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55086");

(cljs.core.async.t_cljs$core$async55086.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async55086");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55086.
 */
cljs.core.async.__GT_t_cljs$core$async55086 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async55086(flag__$1,cb__$1,meta55087){
return (new cljs.core.async.t_cljs$core$async55086(flag__$1,cb__$1,meta55087));
});

}

return (new cljs.core.async.t_cljs$core$async55086(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__55137_SHARP_){
var G__55159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__55137_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__55159) : fret.call(null,G__55159));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__55138_SHARP_){
var G__55160 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__55138_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__55160) : fret.call(null,G__55160));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__57757 = (i + (1));
i = G__57757;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57760 = arguments.length;
var i__4865__auto___57761 = (0);
while(true){
if((i__4865__auto___57761 < len__4864__auto___57760)){
args__4870__auto__.push((arguments[i__4865__auto___57761]));

var G__57762 = (i__4865__auto___57761 + (1));
i__4865__auto___57761 = G__57762;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__55167){
var map__55168 = p__55167;
var map__55168__$1 = cljs.core.__destructure_map(map__55168);
var opts = map__55168__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq55163){
var G__55164 = cljs.core.first(seq55163);
var seq55163__$1 = cljs.core.next(seq55163);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55164,seq55163__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__55176 = arguments.length;
switch (G__55176) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__54840__auto___57773 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54841__auto__ = (function (){var switch__54589__auto__ = (function (state_55217){
var state_val_55218 = (state_55217[(1)]);
if((state_val_55218 === (7))){
var inst_55211 = (state_55217[(2)]);
var state_55217__$1 = state_55217;
var statearr_55222_57775 = state_55217__$1;
(statearr_55222_57775[(2)] = inst_55211);

(statearr_55222_57775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55218 === (1))){
var state_55217__$1 = state_55217;
var statearr_55223_57778 = state_55217__$1;
(statearr_55223_57778[(2)] = null);

(statearr_55223_57778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55218 === (4))){
var inst_55194 = (state_55217[(7)]);
var inst_55194__$1 = (state_55217[(2)]);
var inst_55195 = (inst_55194__$1 == null);
var state_55217__$1 = (function (){var statearr_55224 = state_55217;
(statearr_55224[(7)] = inst_55194__$1);

return statearr_55224;
})();
if(cljs.core.truth_(inst_55195)){
var statearr_55225_57780 = state_55217__$1;
(statearr_55225_57780[(1)] = (5));

} else {
var statearr_55226_57781 = state_55217__$1;
(statearr_55226_57781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55218 === (13))){
var state_55217__$1 = state_55217;
var statearr_55227_57783 = state_55217__$1;
(statearr_55227_57783[(2)] = null);

(statearr_55227_57783[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55218 === (6))){
var inst_55194 = (state_55217[(7)]);
var state_55217__$1 = state_55217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55217__$1,(11),to,inst_55194);
} else {
if((state_val_55218 === (3))){
var inst_55214 = (state_55217[(2)]);
var state_55217__$1 = state_55217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55217__$1,inst_55214);
} else {
if((state_val_55218 === (12))){
var state_55217__$1 = state_55217;
var statearr_55228_57793 = state_55217__$1;
(statearr_55228_57793[(2)] = null);

(statearr_55228_57793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55218 === (2))){
var state_55217__$1 = state_55217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55217__$1,(4),from);
} else {
if((state_val_55218 === (11))){
var inst_55204 = (state_55217[(2)]);
var state_55217__$1 = state_55217;
if(cljs.core.truth_(inst_55204)){
var statearr_55229_57796 = state_55217__$1;
(statearr_55229_57796[(1)] = (12));

} else {
var statearr_55230_57797 = state_55217__$1;
(statearr_55230_57797[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55218 === (9))){
var state_55217__$1 = state_55217;
var statearr_55232_57798 = state_55217__$1;
(statearr_55232_57798[(2)] = null);

(statearr_55232_57798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55218 === (5))){
var state_55217__$1 = state_55217;
if(cljs.core.truth_(close_QMARK_)){
var statearr_55233_57799 = state_55217__$1;
(statearr_55233_57799[(1)] = (8));

} else {
var statearr_55234_57800 = state_55217__$1;
(statearr_55234_57800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55218 === (14))){
var inst_55209 = (state_55217[(2)]);
var state_55217__$1 = state_55217;
var statearr_55235_57801 = state_55217__$1;
(statearr_55235_57801[(2)] = inst_55209);

(statearr_55235_57801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55218 === (10))){
var inst_55201 = (state_55217[(2)]);
var state_55217__$1 = state_55217;
var statearr_55240_57804 = state_55217__$1;
(statearr_55240_57804[(2)] = inst_55201);

(statearr_55240_57804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55218 === (8))){
var inst_55198 = cljs.core.async.close_BANG_(to);
var state_55217__$1 = state_55217;
var statearr_55241_57809 = state_55217__$1;
(statearr_55241_57809[(2)] = inst_55198);

(statearr_55241_57809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54593__auto__ = null;
var cljs$core$async$state_machine__54593__auto____0 = (function (){
var statearr_55246 = [null,null,null,null,null,null,null,null];
(statearr_55246[(0)] = cljs$core$async$state_machine__54593__auto__);

(statearr_55246[(1)] = (1));

return statearr_55246;
});
var cljs$core$async$state_machine__54593__auto____1 = (function (state_55217){
while(true){
var ret_value__54594__auto__ = (function (){try{while(true){
var result__54595__auto__ = switch__54589__auto__(state_55217);
if(cljs.core.keyword_identical_QMARK_(result__54595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54595__auto__;
}
break;
}
}catch (e55248){var ex__54596__auto__ = e55248;
var statearr_55249_57810 = state_55217;
(statearr_55249_57810[(2)] = ex__54596__auto__);


if(cljs.core.seq((state_55217[(4)]))){
var statearr_55250_57811 = state_55217;
(statearr_55250_57811[(1)] = cljs.core.first((state_55217[(4)])));

} else {
throw ex__54596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57812 = state_55217;
state_55217 = G__57812;
continue;
} else {
return ret_value__54594__auto__;
}
break;
}
});
cljs$core$async$state_machine__54593__auto__ = function(state_55217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54593__auto____1.call(this,state_55217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54593__auto____0;
cljs$core$async$state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54593__auto____1;
return cljs$core$async$state_machine__54593__auto__;
})()
})();
var state__54842__auto__ = (function (){var statearr_55251 = f__54841__auto__();
(statearr_55251[(6)] = c__54840__auto___57773);

return statearr_55251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54842__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__55256){
var vec__55257 = p__55256;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55257,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55257,(1),null);
var job = vec__55257;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__54840__auto___57813 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54841__auto__ = (function (){var switch__54589__auto__ = (function (state_55264){
var state_val_55265 = (state_55264[(1)]);
if((state_val_55265 === (1))){
var state_55264__$1 = state_55264;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55264__$1,(2),res,v);
} else {
if((state_val_55265 === (2))){
var inst_55261 = (state_55264[(2)]);
var inst_55262 = cljs.core.async.close_BANG_(res);
var state_55264__$1 = (function (){var statearr_55266 = state_55264;
(statearr_55266[(7)] = inst_55261);

return statearr_55266;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55264__$1,inst_55262);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____0 = (function (){
var statearr_55267 = [null,null,null,null,null,null,null,null];
(statearr_55267[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__);

(statearr_55267[(1)] = (1));

return statearr_55267;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____1 = (function (state_55264){
while(true){
var ret_value__54594__auto__ = (function (){try{while(true){
var result__54595__auto__ = switch__54589__auto__(state_55264);
if(cljs.core.keyword_identical_QMARK_(result__54595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54595__auto__;
}
break;
}
}catch (e55268){var ex__54596__auto__ = e55268;
var statearr_55269_57814 = state_55264;
(statearr_55269_57814[(2)] = ex__54596__auto__);


if(cljs.core.seq((state_55264[(4)]))){
var statearr_55270_57815 = state_55264;
(statearr_55270_57815[(1)] = cljs.core.first((state_55264[(4)])));

} else {
throw ex__54596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57816 = state_55264;
state_55264 = G__57816;
continue;
} else {
return ret_value__54594__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__ = function(state_55264){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____1.call(this,state_55264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__;
})()
})();
var state__54842__auto__ = (function (){var statearr_55271 = f__54841__auto__();
(statearr_55271[(6)] = c__54840__auto___57813);

return statearr_55271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54842__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__55276){
var vec__55277 = p__55276;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55277,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55277,(1),null);
var job = vec__55277;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___57817 = n;
var __57818 = (0);
while(true){
if((__57818 < n__4741__auto___57817)){
var G__55285_57819 = type;
var G__55285_57820__$1 = (((G__55285_57819 instanceof cljs.core.Keyword))?G__55285_57819.fqn:null);
switch (G__55285_57820__$1) {
case "compute":
var c__54840__auto___57822 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__57818,c__54840__auto___57822,G__55285_57819,G__55285_57820__$1,n__4741__auto___57817,jobs,results,process,async){
return (function (){
var f__54841__auto__ = (function (){var switch__54589__auto__ = ((function (__57818,c__54840__auto___57822,G__55285_57819,G__55285_57820__$1,n__4741__auto___57817,jobs,results,process,async){
return (function (state_55298){
var state_val_55299 = (state_55298[(1)]);
if((state_val_55299 === (1))){
var state_55298__$1 = state_55298;
var statearr_55300_57823 = state_55298__$1;
(statearr_55300_57823[(2)] = null);

(statearr_55300_57823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55299 === (2))){
var state_55298__$1 = state_55298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55298__$1,(4),jobs);
} else {
if((state_val_55299 === (3))){
var inst_55296 = (state_55298[(2)]);
var state_55298__$1 = state_55298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55298__$1,inst_55296);
} else {
if((state_val_55299 === (4))){
var inst_55288 = (state_55298[(2)]);
var inst_55289 = process(inst_55288);
var state_55298__$1 = state_55298;
if(cljs.core.truth_(inst_55289)){
var statearr_55305_57824 = state_55298__$1;
(statearr_55305_57824[(1)] = (5));

} else {
var statearr_55306_57827 = state_55298__$1;
(statearr_55306_57827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55299 === (5))){
var state_55298__$1 = state_55298;
var statearr_55308_57828 = state_55298__$1;
(statearr_55308_57828[(2)] = null);

(statearr_55308_57828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55299 === (6))){
var state_55298__$1 = state_55298;
var statearr_55309_57829 = state_55298__$1;
(statearr_55309_57829[(2)] = null);

(statearr_55309_57829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55299 === (7))){
var inst_55294 = (state_55298[(2)]);
var state_55298__$1 = state_55298;
var statearr_55310_57830 = state_55298__$1;
(statearr_55310_57830[(2)] = inst_55294);

(statearr_55310_57830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__57818,c__54840__auto___57822,G__55285_57819,G__55285_57820__$1,n__4741__auto___57817,jobs,results,process,async))
;
return ((function (__57818,switch__54589__auto__,c__54840__auto___57822,G__55285_57819,G__55285_57820__$1,n__4741__auto___57817,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____0 = (function (){
var statearr_55311 = [null,null,null,null,null,null,null];
(statearr_55311[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__);

(statearr_55311[(1)] = (1));

return statearr_55311;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____1 = (function (state_55298){
while(true){
var ret_value__54594__auto__ = (function (){try{while(true){
var result__54595__auto__ = switch__54589__auto__(state_55298);
if(cljs.core.keyword_identical_QMARK_(result__54595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54595__auto__;
}
break;
}
}catch (e55312){var ex__54596__auto__ = e55312;
var statearr_55313_57831 = state_55298;
(statearr_55313_57831[(2)] = ex__54596__auto__);


if(cljs.core.seq((state_55298[(4)]))){
var statearr_55314_57832 = state_55298;
(statearr_55314_57832[(1)] = cljs.core.first((state_55298[(4)])));

} else {
throw ex__54596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57833 = state_55298;
state_55298 = G__57833;
continue;
} else {
return ret_value__54594__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__ = function(state_55298){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____1.call(this,state_55298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__;
})()
;})(__57818,switch__54589__auto__,c__54840__auto___57822,G__55285_57819,G__55285_57820__$1,n__4741__auto___57817,jobs,results,process,async))
})();
var state__54842__auto__ = (function (){var statearr_55315 = f__54841__auto__();
(statearr_55315[(6)] = c__54840__auto___57822);

return statearr_55315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54842__auto__);
});})(__57818,c__54840__auto___57822,G__55285_57819,G__55285_57820__$1,n__4741__auto___57817,jobs,results,process,async))
);


break;
case "async":
var c__54840__auto___57834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__57818,c__54840__auto___57834,G__55285_57819,G__55285_57820__$1,n__4741__auto___57817,jobs,results,process,async){
return (function (){
var f__54841__auto__ = (function (){var switch__54589__auto__ = ((function (__57818,c__54840__auto___57834,G__55285_57819,G__55285_57820__$1,n__4741__auto___57817,jobs,results,process,async){
return (function (state_55328){
var state_val_55329 = (state_55328[(1)]);
if((state_val_55329 === (1))){
var state_55328__$1 = state_55328;
var statearr_55330_57835 = state_55328__$1;
(statearr_55330_57835[(2)] = null);

(statearr_55330_57835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55329 === (2))){
var state_55328__$1 = state_55328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55328__$1,(4),jobs);
} else {
if((state_val_55329 === (3))){
var inst_55326 = (state_55328[(2)]);
var state_55328__$1 = state_55328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55328__$1,inst_55326);
} else {
if((state_val_55329 === (4))){
var inst_55318 = (state_55328[(2)]);
var inst_55319 = async(inst_55318);
var state_55328__$1 = state_55328;
if(cljs.core.truth_(inst_55319)){
var statearr_55331_57836 = state_55328__$1;
(statearr_55331_57836[(1)] = (5));

} else {
var statearr_55332_57837 = state_55328__$1;
(statearr_55332_57837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55329 === (5))){
var state_55328__$1 = state_55328;
var statearr_55333_57838 = state_55328__$1;
(statearr_55333_57838[(2)] = null);

(statearr_55333_57838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55329 === (6))){
var state_55328__$1 = state_55328;
var statearr_55335_57839 = state_55328__$1;
(statearr_55335_57839[(2)] = null);

(statearr_55335_57839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55329 === (7))){
var inst_55324 = (state_55328[(2)]);
var state_55328__$1 = state_55328;
var statearr_55336_57840 = state_55328__$1;
(statearr_55336_57840[(2)] = inst_55324);

(statearr_55336_57840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__57818,c__54840__auto___57834,G__55285_57819,G__55285_57820__$1,n__4741__auto___57817,jobs,results,process,async))
;
return ((function (__57818,switch__54589__auto__,c__54840__auto___57834,G__55285_57819,G__55285_57820__$1,n__4741__auto___57817,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____0 = (function (){
var statearr_55337 = [null,null,null,null,null,null,null];
(statearr_55337[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__);

(statearr_55337[(1)] = (1));

return statearr_55337;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____1 = (function (state_55328){
while(true){
var ret_value__54594__auto__ = (function (){try{while(true){
var result__54595__auto__ = switch__54589__auto__(state_55328);
if(cljs.core.keyword_identical_QMARK_(result__54595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54595__auto__;
}
break;
}
}catch (e55338){var ex__54596__auto__ = e55338;
var statearr_55339_57842 = state_55328;
(statearr_55339_57842[(2)] = ex__54596__auto__);


if(cljs.core.seq((state_55328[(4)]))){
var statearr_55340_57843 = state_55328;
(statearr_55340_57843[(1)] = cljs.core.first((state_55328[(4)])));

} else {
throw ex__54596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57844 = state_55328;
state_55328 = G__57844;
continue;
} else {
return ret_value__54594__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__ = function(state_55328){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____1.call(this,state_55328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__;
})()
;})(__57818,switch__54589__auto__,c__54840__auto___57834,G__55285_57819,G__55285_57820__$1,n__4741__auto___57817,jobs,results,process,async))
})();
var state__54842__auto__ = (function (){var statearr_55347 = f__54841__auto__();
(statearr_55347[(6)] = c__54840__auto___57834);

return statearr_55347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54842__auto__);
});})(__57818,c__54840__auto___57834,G__55285_57819,G__55285_57820__$1,n__4741__auto___57817,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55285_57820__$1)].join('')));

}

var G__57845 = (__57818 + (1));
__57818 = G__57845;
continue;
} else {
}
break;
}

var c__54840__auto___57846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54841__auto__ = (function (){var switch__54589__auto__ = (function (state_55380){
var state_val_55381 = (state_55380[(1)]);
if((state_val_55381 === (7))){
var inst_55369 = (state_55380[(2)]);
var state_55380__$1 = state_55380;
var statearr_55396_57848 = state_55380__$1;
(statearr_55396_57848[(2)] = inst_55369);

(statearr_55396_57848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55381 === (1))){
var state_55380__$1 = state_55380;
var statearr_55401_57850 = state_55380__$1;
(statearr_55401_57850[(2)] = null);

(statearr_55401_57850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55381 === (4))){
var inst_55354 = (state_55380[(7)]);
var inst_55354__$1 = (state_55380[(2)]);
var inst_55355 = (inst_55354__$1 == null);
var state_55380__$1 = (function (){var statearr_55402 = state_55380;
(statearr_55402[(7)] = inst_55354__$1);

return statearr_55402;
})();
if(cljs.core.truth_(inst_55355)){
var statearr_55403_57851 = state_55380__$1;
(statearr_55403_57851[(1)] = (5));

} else {
var statearr_55404_57852 = state_55380__$1;
(statearr_55404_57852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55381 === (6))){
var inst_55354 = (state_55380[(7)]);
var inst_55359 = (state_55380[(8)]);
var inst_55359__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_55360 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55361 = [inst_55354,inst_55359__$1];
var inst_55362 = (new cljs.core.PersistentVector(null,2,(5),inst_55360,inst_55361,null));
var state_55380__$1 = (function (){var statearr_55405 = state_55380;
(statearr_55405[(8)] = inst_55359__$1);

return statearr_55405;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55380__$1,(8),jobs,inst_55362);
} else {
if((state_val_55381 === (3))){
var inst_55371 = (state_55380[(2)]);
var state_55380__$1 = state_55380;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55380__$1,inst_55371);
} else {
if((state_val_55381 === (2))){
var state_55380__$1 = state_55380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55380__$1,(4),from);
} else {
if((state_val_55381 === (9))){
var inst_55366 = (state_55380[(2)]);
var state_55380__$1 = (function (){var statearr_55406 = state_55380;
(statearr_55406[(9)] = inst_55366);

return statearr_55406;
})();
var statearr_55407_57859 = state_55380__$1;
(statearr_55407_57859[(2)] = null);

(statearr_55407_57859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55381 === (5))){
var inst_55357 = cljs.core.async.close_BANG_(jobs);
var state_55380__$1 = state_55380;
var statearr_55408_57860 = state_55380__$1;
(statearr_55408_57860[(2)] = inst_55357);

(statearr_55408_57860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55381 === (8))){
var inst_55359 = (state_55380[(8)]);
var inst_55364 = (state_55380[(2)]);
var state_55380__$1 = (function (){var statearr_55409 = state_55380;
(statearr_55409[(10)] = inst_55364);

return statearr_55409;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55380__$1,(9),results,inst_55359);
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
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____0 = (function (){
var statearr_55411 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55411[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__);

(statearr_55411[(1)] = (1));

return statearr_55411;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____1 = (function (state_55380){
while(true){
var ret_value__54594__auto__ = (function (){try{while(true){
var result__54595__auto__ = switch__54589__auto__(state_55380);
if(cljs.core.keyword_identical_QMARK_(result__54595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54595__auto__;
}
break;
}
}catch (e55412){var ex__54596__auto__ = e55412;
var statearr_55413_57861 = state_55380;
(statearr_55413_57861[(2)] = ex__54596__auto__);


if(cljs.core.seq((state_55380[(4)]))){
var statearr_55414_57862 = state_55380;
(statearr_55414_57862[(1)] = cljs.core.first((state_55380[(4)])));

} else {
throw ex__54596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57863 = state_55380;
state_55380 = G__57863;
continue;
} else {
return ret_value__54594__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__ = function(state_55380){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____1.call(this,state_55380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__;
})()
})();
var state__54842__auto__ = (function (){var statearr_55415 = f__54841__auto__();
(statearr_55415[(6)] = c__54840__auto___57846);

return statearr_55415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54842__auto__);
}));


var c__54840__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54841__auto__ = (function (){var switch__54589__auto__ = (function (state_55454){
var state_val_55455 = (state_55454[(1)]);
if((state_val_55455 === (7))){
var inst_55450 = (state_55454[(2)]);
var state_55454__$1 = state_55454;
var statearr_55460_57864 = state_55454__$1;
(statearr_55460_57864[(2)] = inst_55450);

(statearr_55460_57864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55455 === (20))){
var state_55454__$1 = state_55454;
var statearr_55461_57865 = state_55454__$1;
(statearr_55461_57865[(2)] = null);

(statearr_55461_57865[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55455 === (1))){
var state_55454__$1 = state_55454;
var statearr_55462_57866 = state_55454__$1;
(statearr_55462_57866[(2)] = null);

(statearr_55462_57866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55455 === (4))){
var inst_55419 = (state_55454[(7)]);
var inst_55419__$1 = (state_55454[(2)]);
var inst_55420 = (inst_55419__$1 == null);
var state_55454__$1 = (function (){var statearr_55482 = state_55454;
(statearr_55482[(7)] = inst_55419__$1);

return statearr_55482;
})();
if(cljs.core.truth_(inst_55420)){
var statearr_55486_57867 = state_55454__$1;
(statearr_55486_57867[(1)] = (5));

} else {
var statearr_55487_57868 = state_55454__$1;
(statearr_55487_57868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55455 === (15))){
var inst_55432 = (state_55454[(8)]);
var state_55454__$1 = state_55454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55454__$1,(18),to,inst_55432);
} else {
if((state_val_55455 === (21))){
var inst_55445 = (state_55454[(2)]);
var state_55454__$1 = state_55454;
var statearr_55491_57869 = state_55454__$1;
(statearr_55491_57869[(2)] = inst_55445);

(statearr_55491_57869[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55455 === (13))){
var inst_55447 = (state_55454[(2)]);
var state_55454__$1 = (function (){var statearr_55492 = state_55454;
(statearr_55492[(9)] = inst_55447);

return statearr_55492;
})();
var statearr_55493_57870 = state_55454__$1;
(statearr_55493_57870[(2)] = null);

(statearr_55493_57870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55455 === (6))){
var inst_55419 = (state_55454[(7)]);
var state_55454__$1 = state_55454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55454__$1,(11),inst_55419);
} else {
if((state_val_55455 === (17))){
var inst_55440 = (state_55454[(2)]);
var state_55454__$1 = state_55454;
if(cljs.core.truth_(inst_55440)){
var statearr_55496_57871 = state_55454__$1;
(statearr_55496_57871[(1)] = (19));

} else {
var statearr_55497_57872 = state_55454__$1;
(statearr_55497_57872[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55455 === (3))){
var inst_55452 = (state_55454[(2)]);
var state_55454__$1 = state_55454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55454__$1,inst_55452);
} else {
if((state_val_55455 === (12))){
var inst_55429 = (state_55454[(10)]);
var state_55454__$1 = state_55454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55454__$1,(14),inst_55429);
} else {
if((state_val_55455 === (2))){
var state_55454__$1 = state_55454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55454__$1,(4),results);
} else {
if((state_val_55455 === (19))){
var state_55454__$1 = state_55454;
var statearr_55498_57873 = state_55454__$1;
(statearr_55498_57873[(2)] = null);

(statearr_55498_57873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55455 === (11))){
var inst_55429 = (state_55454[(2)]);
var state_55454__$1 = (function (){var statearr_55499 = state_55454;
(statearr_55499[(10)] = inst_55429);

return statearr_55499;
})();
var statearr_55503_57874 = state_55454__$1;
(statearr_55503_57874[(2)] = null);

(statearr_55503_57874[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55455 === (9))){
var state_55454__$1 = state_55454;
var statearr_55504_57876 = state_55454__$1;
(statearr_55504_57876[(2)] = null);

(statearr_55504_57876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55455 === (5))){
var state_55454__$1 = state_55454;
if(cljs.core.truth_(close_QMARK_)){
var statearr_55505_57878 = state_55454__$1;
(statearr_55505_57878[(1)] = (8));

} else {
var statearr_55510_57879 = state_55454__$1;
(statearr_55510_57879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55455 === (14))){
var inst_55434 = (state_55454[(11)]);
var inst_55432 = (state_55454[(8)]);
var inst_55432__$1 = (state_55454[(2)]);
var inst_55433 = (inst_55432__$1 == null);
var inst_55434__$1 = cljs.core.not(inst_55433);
var state_55454__$1 = (function (){var statearr_55516 = state_55454;
(statearr_55516[(11)] = inst_55434__$1);

(statearr_55516[(8)] = inst_55432__$1);

return statearr_55516;
})();
if(inst_55434__$1){
var statearr_55517_57882 = state_55454__$1;
(statearr_55517_57882[(1)] = (15));

} else {
var statearr_55518_57883 = state_55454__$1;
(statearr_55518_57883[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55455 === (16))){
var inst_55434 = (state_55454[(11)]);
var state_55454__$1 = state_55454;
var statearr_55519_57884 = state_55454__$1;
(statearr_55519_57884[(2)] = inst_55434);

(statearr_55519_57884[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55455 === (10))){
var inst_55426 = (state_55454[(2)]);
var state_55454__$1 = state_55454;
var statearr_55520_57889 = state_55454__$1;
(statearr_55520_57889[(2)] = inst_55426);

(statearr_55520_57889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55455 === (18))){
var inst_55437 = (state_55454[(2)]);
var state_55454__$1 = state_55454;
var statearr_55521_57894 = state_55454__$1;
(statearr_55521_57894[(2)] = inst_55437);

(statearr_55521_57894[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55455 === (8))){
var inst_55423 = cljs.core.async.close_BANG_(to);
var state_55454__$1 = state_55454;
var statearr_55526_57896 = state_55454__$1;
(statearr_55526_57896[(2)] = inst_55423);

(statearr_55526_57896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____0 = (function (){
var statearr_55527 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55527[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__);

(statearr_55527[(1)] = (1));

return statearr_55527;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____1 = (function (state_55454){
while(true){
var ret_value__54594__auto__ = (function (){try{while(true){
var result__54595__auto__ = switch__54589__auto__(state_55454);
if(cljs.core.keyword_identical_QMARK_(result__54595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54595__auto__;
}
break;
}
}catch (e55528){var ex__54596__auto__ = e55528;
var statearr_55529_57897 = state_55454;
(statearr_55529_57897[(2)] = ex__54596__auto__);


if(cljs.core.seq((state_55454[(4)]))){
var statearr_55530_57898 = state_55454;
(statearr_55530_57898[(1)] = cljs.core.first((state_55454[(4)])));

} else {
throw ex__54596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57899 = state_55454;
state_55454 = G__57899;
continue;
} else {
return ret_value__54594__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__ = function(state_55454){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____1.call(this,state_55454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54593__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54593__auto__;
})()
})();
var state__54842__auto__ = (function (){var statearr_55531 = f__54841__auto__();
(statearr_55531[(6)] = c__54840__auto__);

return statearr_55531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54842__auto__);
}));

return c__54840__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__55533 = arguments.length;
switch (G__55533) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__55535 = arguments.length;
switch (G__55535) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__55537 = arguments.length;
switch (G__55537) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__54840__auto___57904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54841__auto__ = (function (){var switch__54589__auto__ = (function (state_55572){
var state_val_55573 = (state_55572[(1)]);
if((state_val_55573 === (7))){
var inst_55568 = (state_55572[(2)]);
var state_55572__$1 = state_55572;
var statearr_55574_57905 = state_55572__$1;
(statearr_55574_57905[(2)] = inst_55568);

(statearr_55574_57905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55573 === (1))){
var state_55572__$1 = state_55572;
var statearr_55575_57906 = state_55572__$1;
(statearr_55575_57906[(2)] = null);

(statearr_55575_57906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55573 === (4))){
var inst_55549 = (state_55572[(7)]);
var inst_55549__$1 = (state_55572[(2)]);
var inst_55550 = (inst_55549__$1 == null);
var state_55572__$1 = (function (){var statearr_55576 = state_55572;
(statearr_55576[(7)] = inst_55549__$1);

return statearr_55576;
})();
if(cljs.core.truth_(inst_55550)){
var statearr_55577_57912 = state_55572__$1;
(statearr_55577_57912[(1)] = (5));

} else {
var statearr_55578_57913 = state_55572__$1;
(statearr_55578_57913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55573 === (13))){
var state_55572__$1 = state_55572;
var statearr_55579_57914 = state_55572__$1;
(statearr_55579_57914[(2)] = null);

(statearr_55579_57914[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55573 === (6))){
var inst_55549 = (state_55572[(7)]);
var inst_55555 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_55549) : p.call(null,inst_55549));
var state_55572__$1 = state_55572;
if(cljs.core.truth_(inst_55555)){
var statearr_55580_57915 = state_55572__$1;
(statearr_55580_57915[(1)] = (9));

} else {
var statearr_55581_57919 = state_55572__$1;
(statearr_55581_57919[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55573 === (3))){
var inst_55570 = (state_55572[(2)]);
var state_55572__$1 = state_55572;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55572__$1,inst_55570);
} else {
if((state_val_55573 === (12))){
var state_55572__$1 = state_55572;
var statearr_55582_57920 = state_55572__$1;
(statearr_55582_57920[(2)] = null);

(statearr_55582_57920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55573 === (2))){
var state_55572__$1 = state_55572;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55572__$1,(4),ch);
} else {
if((state_val_55573 === (11))){
var inst_55549 = (state_55572[(7)]);
var inst_55559 = (state_55572[(2)]);
var state_55572__$1 = state_55572;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55572__$1,(8),inst_55559,inst_55549);
} else {
if((state_val_55573 === (9))){
var state_55572__$1 = state_55572;
var statearr_55583_57922 = state_55572__$1;
(statearr_55583_57922[(2)] = tc);

(statearr_55583_57922[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55573 === (5))){
var inst_55552 = cljs.core.async.close_BANG_(tc);
var inst_55553 = cljs.core.async.close_BANG_(fc);
var state_55572__$1 = (function (){var statearr_55584 = state_55572;
(statearr_55584[(8)] = inst_55552);

return statearr_55584;
})();
var statearr_55585_57923 = state_55572__$1;
(statearr_55585_57923[(2)] = inst_55553);

(statearr_55585_57923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55573 === (14))){
var inst_55566 = (state_55572[(2)]);
var state_55572__$1 = state_55572;
var statearr_55586_57924 = state_55572__$1;
(statearr_55586_57924[(2)] = inst_55566);

(statearr_55586_57924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55573 === (10))){
var state_55572__$1 = state_55572;
var statearr_55591_57925 = state_55572__$1;
(statearr_55591_57925[(2)] = fc);

(statearr_55591_57925[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55573 === (8))){
var inst_55561 = (state_55572[(2)]);
var state_55572__$1 = state_55572;
if(cljs.core.truth_(inst_55561)){
var statearr_55597_57926 = state_55572__$1;
(statearr_55597_57926[(1)] = (12));

} else {
var statearr_55598_57927 = state_55572__$1;
(statearr_55598_57927[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54593__auto__ = null;
var cljs$core$async$state_machine__54593__auto____0 = (function (){
var statearr_55600 = [null,null,null,null,null,null,null,null,null];
(statearr_55600[(0)] = cljs$core$async$state_machine__54593__auto__);

(statearr_55600[(1)] = (1));

return statearr_55600;
});
var cljs$core$async$state_machine__54593__auto____1 = (function (state_55572){
while(true){
var ret_value__54594__auto__ = (function (){try{while(true){
var result__54595__auto__ = switch__54589__auto__(state_55572);
if(cljs.core.keyword_identical_QMARK_(result__54595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54595__auto__;
}
break;
}
}catch (e55601){var ex__54596__auto__ = e55601;
var statearr_55602_57928 = state_55572;
(statearr_55602_57928[(2)] = ex__54596__auto__);


if(cljs.core.seq((state_55572[(4)]))){
var statearr_55603_57929 = state_55572;
(statearr_55603_57929[(1)] = cljs.core.first((state_55572[(4)])));

} else {
throw ex__54596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57930 = state_55572;
state_55572 = G__57930;
continue;
} else {
return ret_value__54594__auto__;
}
break;
}
});
cljs$core$async$state_machine__54593__auto__ = function(state_55572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54593__auto____1.call(this,state_55572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54593__auto____0;
cljs$core$async$state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54593__auto____1;
return cljs$core$async$state_machine__54593__auto__;
})()
})();
var state__54842__auto__ = (function (){var statearr_55604 = f__54841__auto__();
(statearr_55604[(6)] = c__54840__auto___57904);

return statearr_55604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54842__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__54840__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54841__auto__ = (function (){var switch__54589__auto__ = (function (state_55628){
var state_val_55629 = (state_55628[(1)]);
if((state_val_55629 === (7))){
var inst_55622 = (state_55628[(2)]);
var state_55628__$1 = state_55628;
var statearr_55632_57935 = state_55628__$1;
(statearr_55632_57935[(2)] = inst_55622);

(statearr_55632_57935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55629 === (1))){
var inst_55605 = init;
var inst_55606 = inst_55605;
var state_55628__$1 = (function (){var statearr_55633 = state_55628;
(statearr_55633[(7)] = inst_55606);

return statearr_55633;
})();
var statearr_55634_57936 = state_55628__$1;
(statearr_55634_57936[(2)] = null);

(statearr_55634_57936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55629 === (4))){
var inst_55609 = (state_55628[(8)]);
var inst_55609__$1 = (state_55628[(2)]);
var inst_55610 = (inst_55609__$1 == null);
var state_55628__$1 = (function (){var statearr_55635 = state_55628;
(statearr_55635[(8)] = inst_55609__$1);

return statearr_55635;
})();
if(cljs.core.truth_(inst_55610)){
var statearr_55636_57937 = state_55628__$1;
(statearr_55636_57937[(1)] = (5));

} else {
var statearr_55637_57938 = state_55628__$1;
(statearr_55637_57938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55629 === (6))){
var inst_55609 = (state_55628[(8)]);
var inst_55606 = (state_55628[(7)]);
var inst_55613 = (state_55628[(9)]);
var inst_55613__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_55606,inst_55609) : f.call(null,inst_55606,inst_55609));
var inst_55614 = cljs.core.reduced_QMARK_(inst_55613__$1);
var state_55628__$1 = (function (){var statearr_55638 = state_55628;
(statearr_55638[(9)] = inst_55613__$1);

return statearr_55638;
})();
if(inst_55614){
var statearr_55639_57939 = state_55628__$1;
(statearr_55639_57939[(1)] = (8));

} else {
var statearr_55646_57940 = state_55628__$1;
(statearr_55646_57940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55629 === (3))){
var inst_55624 = (state_55628[(2)]);
var state_55628__$1 = state_55628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55628__$1,inst_55624);
} else {
if((state_val_55629 === (2))){
var state_55628__$1 = state_55628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55628__$1,(4),ch);
} else {
if((state_val_55629 === (9))){
var inst_55613 = (state_55628[(9)]);
var inst_55606 = inst_55613;
var state_55628__$1 = (function (){var statearr_55663 = state_55628;
(statearr_55663[(7)] = inst_55606);

return statearr_55663;
})();
var statearr_55664_57942 = state_55628__$1;
(statearr_55664_57942[(2)] = null);

(statearr_55664_57942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55629 === (5))){
var inst_55606 = (state_55628[(7)]);
var state_55628__$1 = state_55628;
var statearr_55665_57946 = state_55628__$1;
(statearr_55665_57946[(2)] = inst_55606);

(statearr_55665_57946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55629 === (10))){
var inst_55620 = (state_55628[(2)]);
var state_55628__$1 = state_55628;
var statearr_55666_57947 = state_55628__$1;
(statearr_55666_57947[(2)] = inst_55620);

(statearr_55666_57947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55629 === (8))){
var inst_55613 = (state_55628[(9)]);
var inst_55616 = cljs.core.deref(inst_55613);
var state_55628__$1 = state_55628;
var statearr_55673_57948 = state_55628__$1;
(statearr_55673_57948[(2)] = inst_55616);

(statearr_55673_57948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__54593__auto__ = null;
var cljs$core$async$reduce_$_state_machine__54593__auto____0 = (function (){
var statearr_55674 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55674[(0)] = cljs$core$async$reduce_$_state_machine__54593__auto__);

(statearr_55674[(1)] = (1));

return statearr_55674;
});
var cljs$core$async$reduce_$_state_machine__54593__auto____1 = (function (state_55628){
while(true){
var ret_value__54594__auto__ = (function (){try{while(true){
var result__54595__auto__ = switch__54589__auto__(state_55628);
if(cljs.core.keyword_identical_QMARK_(result__54595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54595__auto__;
}
break;
}
}catch (e55675){var ex__54596__auto__ = e55675;
var statearr_55676_57949 = state_55628;
(statearr_55676_57949[(2)] = ex__54596__auto__);


if(cljs.core.seq((state_55628[(4)]))){
var statearr_55677_57950 = state_55628;
(statearr_55677_57950[(1)] = cljs.core.first((state_55628[(4)])));

} else {
throw ex__54596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57951 = state_55628;
state_55628 = G__57951;
continue;
} else {
return ret_value__54594__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__54593__auto__ = function(state_55628){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__54593__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__54593__auto____1.call(this,state_55628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__54593__auto____0;
cljs$core$async$reduce_$_state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__54593__auto____1;
return cljs$core$async$reduce_$_state_machine__54593__auto__;
})()
})();
var state__54842__auto__ = (function (){var statearr_55682 = f__54841__auto__();
(statearr_55682[(6)] = c__54840__auto__);

return statearr_55682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54842__auto__);
}));

return c__54840__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__54840__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54841__auto__ = (function (){var switch__54589__auto__ = (function (state_55689){
var state_val_55690 = (state_55689[(1)]);
if((state_val_55690 === (1))){
var inst_55684 = cljs.core.async.reduce(f__$1,init,ch);
var state_55689__$1 = state_55689;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55689__$1,(2),inst_55684);
} else {
if((state_val_55690 === (2))){
var inst_55686 = (state_55689[(2)]);
var inst_55687 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_55686) : f__$1.call(null,inst_55686));
var state_55689__$1 = state_55689;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55689__$1,inst_55687);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__54593__auto__ = null;
var cljs$core$async$transduce_$_state_machine__54593__auto____0 = (function (){
var statearr_55692 = [null,null,null,null,null,null,null];
(statearr_55692[(0)] = cljs$core$async$transduce_$_state_machine__54593__auto__);

(statearr_55692[(1)] = (1));

return statearr_55692;
});
var cljs$core$async$transduce_$_state_machine__54593__auto____1 = (function (state_55689){
while(true){
var ret_value__54594__auto__ = (function (){try{while(true){
var result__54595__auto__ = switch__54589__auto__(state_55689);
if(cljs.core.keyword_identical_QMARK_(result__54595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54595__auto__;
}
break;
}
}catch (e55693){var ex__54596__auto__ = e55693;
var statearr_55694_57953 = state_55689;
(statearr_55694_57953[(2)] = ex__54596__auto__);


if(cljs.core.seq((state_55689[(4)]))){
var statearr_55695_57954 = state_55689;
(statearr_55695_57954[(1)] = cljs.core.first((state_55689[(4)])));

} else {
throw ex__54596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57955 = state_55689;
state_55689 = G__57955;
continue;
} else {
return ret_value__54594__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__54593__auto__ = function(state_55689){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__54593__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__54593__auto____1.call(this,state_55689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__54593__auto____0;
cljs$core$async$transduce_$_state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__54593__auto____1;
return cljs$core$async$transduce_$_state_machine__54593__auto__;
})()
})();
var state__54842__auto__ = (function (){var statearr_55698 = f__54841__auto__();
(statearr_55698[(6)] = c__54840__auto__);

return statearr_55698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54842__auto__);
}));

return c__54840__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__55703 = arguments.length;
switch (G__55703) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__54840__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54841__auto__ = (function (){var switch__54589__auto__ = (function (state_55728){
var state_val_55729 = (state_55728[(1)]);
if((state_val_55729 === (7))){
var inst_55710 = (state_55728[(2)]);
var state_55728__$1 = state_55728;
var statearr_55739_57961 = state_55728__$1;
(statearr_55739_57961[(2)] = inst_55710);

(statearr_55739_57961[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55729 === (1))){
var inst_55704 = cljs.core.seq(coll);
var inst_55705 = inst_55704;
var state_55728__$1 = (function (){var statearr_55748 = state_55728;
(statearr_55748[(7)] = inst_55705);

return statearr_55748;
})();
var statearr_55753_57962 = state_55728__$1;
(statearr_55753_57962[(2)] = null);

(statearr_55753_57962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55729 === (4))){
var inst_55705 = (state_55728[(7)]);
var inst_55708 = cljs.core.first(inst_55705);
var state_55728__$1 = state_55728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55728__$1,(7),ch,inst_55708);
} else {
if((state_val_55729 === (13))){
var inst_55722 = (state_55728[(2)]);
var state_55728__$1 = state_55728;
var statearr_55754_57964 = state_55728__$1;
(statearr_55754_57964[(2)] = inst_55722);

(statearr_55754_57964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55729 === (6))){
var inst_55713 = (state_55728[(2)]);
var state_55728__$1 = state_55728;
if(cljs.core.truth_(inst_55713)){
var statearr_55755_57965 = state_55728__$1;
(statearr_55755_57965[(1)] = (8));

} else {
var statearr_55756_57966 = state_55728__$1;
(statearr_55756_57966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55729 === (3))){
var inst_55726 = (state_55728[(2)]);
var state_55728__$1 = state_55728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55728__$1,inst_55726);
} else {
if((state_val_55729 === (12))){
var state_55728__$1 = state_55728;
var statearr_55757_57967 = state_55728__$1;
(statearr_55757_57967[(2)] = null);

(statearr_55757_57967[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55729 === (2))){
var inst_55705 = (state_55728[(7)]);
var state_55728__$1 = state_55728;
if(cljs.core.truth_(inst_55705)){
var statearr_55758_57968 = state_55728__$1;
(statearr_55758_57968[(1)] = (4));

} else {
var statearr_55759_57969 = state_55728__$1;
(statearr_55759_57969[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55729 === (11))){
var inst_55719 = cljs.core.async.close_BANG_(ch);
var state_55728__$1 = state_55728;
var statearr_55760_57970 = state_55728__$1;
(statearr_55760_57970[(2)] = inst_55719);

(statearr_55760_57970[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55729 === (9))){
var state_55728__$1 = state_55728;
if(cljs.core.truth_(close_QMARK_)){
var statearr_55761_57971 = state_55728__$1;
(statearr_55761_57971[(1)] = (11));

} else {
var statearr_55762_57972 = state_55728__$1;
(statearr_55762_57972[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55729 === (5))){
var inst_55705 = (state_55728[(7)]);
var state_55728__$1 = state_55728;
var statearr_55763_57973 = state_55728__$1;
(statearr_55763_57973[(2)] = inst_55705);

(statearr_55763_57973[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55729 === (10))){
var inst_55724 = (state_55728[(2)]);
var state_55728__$1 = state_55728;
var statearr_55768_57978 = state_55728__$1;
(statearr_55768_57978[(2)] = inst_55724);

(statearr_55768_57978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55729 === (8))){
var inst_55705 = (state_55728[(7)]);
var inst_55715 = cljs.core.next(inst_55705);
var inst_55705__$1 = inst_55715;
var state_55728__$1 = (function (){var statearr_55770 = state_55728;
(statearr_55770[(7)] = inst_55705__$1);

return statearr_55770;
})();
var statearr_55771_57979 = state_55728__$1;
(statearr_55771_57979[(2)] = null);

(statearr_55771_57979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54593__auto__ = null;
var cljs$core$async$state_machine__54593__auto____0 = (function (){
var statearr_55788 = [null,null,null,null,null,null,null,null];
(statearr_55788[(0)] = cljs$core$async$state_machine__54593__auto__);

(statearr_55788[(1)] = (1));

return statearr_55788;
});
var cljs$core$async$state_machine__54593__auto____1 = (function (state_55728){
while(true){
var ret_value__54594__auto__ = (function (){try{while(true){
var result__54595__auto__ = switch__54589__auto__(state_55728);
if(cljs.core.keyword_identical_QMARK_(result__54595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54595__auto__;
}
break;
}
}catch (e55806){var ex__54596__auto__ = e55806;
var statearr_55812_57980 = state_55728;
(statearr_55812_57980[(2)] = ex__54596__auto__);


if(cljs.core.seq((state_55728[(4)]))){
var statearr_55813_57981 = state_55728;
(statearr_55813_57981[(1)] = cljs.core.first((state_55728[(4)])));

} else {
throw ex__54596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57982 = state_55728;
state_55728 = G__57982;
continue;
} else {
return ret_value__54594__auto__;
}
break;
}
});
cljs$core$async$state_machine__54593__auto__ = function(state_55728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54593__auto____1.call(this,state_55728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54593__auto____0;
cljs$core$async$state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54593__auto____1;
return cljs$core$async$state_machine__54593__auto__;
})()
})();
var state__54842__auto__ = (function (){var statearr_55815 = f__54841__auto__();
(statearr_55815[(6)] = c__54840__auto__);

return statearr_55815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54842__auto__);
}));

return c__54840__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__55817 = arguments.length;
switch (G__55817) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_57984 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_57984(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_57985 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_57985(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_57990 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_57990(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_57995 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_57995(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55860 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55860 = (function (ch,cs,meta55861){
this.ch = ch;
this.cs = cs;
this.meta55861 = meta55861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55862,meta55861__$1){
var self__ = this;
var _55862__$1 = this;
return (new cljs.core.async.t_cljs$core$async55860(self__.ch,self__.cs,meta55861__$1));
}));

(cljs.core.async.t_cljs$core$async55860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55862){
var self__ = this;
var _55862__$1 = this;
return self__.meta55861;
}));

(cljs.core.async.t_cljs$core$async55860.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55860.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async55860.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55860.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async55860.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async55860.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async55860.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta55861","meta55861",1600141680,null)], null);
}));

(cljs.core.async.t_cljs$core$async55860.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55860");

(cljs.core.async.t_cljs$core$async55860.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async55860");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55860.
 */
cljs.core.async.__GT_t_cljs$core$async55860 = (function cljs$core$async$mult_$___GT_t_cljs$core$async55860(ch__$1,cs__$1,meta55861){
return (new cljs.core.async.t_cljs$core$async55860(ch__$1,cs__$1,meta55861));
});

}

return (new cljs.core.async.t_cljs$core$async55860(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__54840__auto___57999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54841__auto__ = (function (){var switch__54589__auto__ = (function (state_55995){
var state_val_55996 = (state_55995[(1)]);
if((state_val_55996 === (7))){
var inst_55991 = (state_55995[(2)]);
var state_55995__$1 = state_55995;
var statearr_55997_58000 = state_55995__$1;
(statearr_55997_58000[(2)] = inst_55991);

(statearr_55997_58000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (20))){
var inst_55896 = (state_55995[(7)]);
var inst_55908 = cljs.core.first(inst_55896);
var inst_55909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55908,(0),null);
var inst_55910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55908,(1),null);
var state_55995__$1 = (function (){var statearr_56001 = state_55995;
(statearr_56001[(8)] = inst_55909);

return statearr_56001;
})();
if(cljs.core.truth_(inst_55910)){
var statearr_56005_58002 = state_55995__$1;
(statearr_56005_58002[(1)] = (22));

} else {
var statearr_56006_58003 = state_55995__$1;
(statearr_56006_58003[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (27))){
var inst_55865 = (state_55995[(9)]);
var inst_55938 = (state_55995[(10)]);
var inst_55940 = (state_55995[(11)]);
var inst_55945 = (state_55995[(12)]);
var inst_55945__$1 = cljs.core._nth(inst_55938,inst_55940);
var inst_55946 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_55945__$1,inst_55865,done);
var state_55995__$1 = (function (){var statearr_56013 = state_55995;
(statearr_56013[(12)] = inst_55945__$1);

return statearr_56013;
})();
if(cljs.core.truth_(inst_55946)){
var statearr_56014_58005 = state_55995__$1;
(statearr_56014_58005[(1)] = (30));

} else {
var statearr_56018_58006 = state_55995__$1;
(statearr_56018_58006[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (1))){
var state_55995__$1 = state_55995;
var statearr_56023_58007 = state_55995__$1;
(statearr_56023_58007[(2)] = null);

(statearr_56023_58007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (24))){
var inst_55896 = (state_55995[(7)]);
var inst_55915 = (state_55995[(2)]);
var inst_55916 = cljs.core.next(inst_55896);
var inst_55874 = inst_55916;
var inst_55875 = null;
var inst_55876 = (0);
var inst_55877 = (0);
var state_55995__$1 = (function (){var statearr_56025 = state_55995;
(statearr_56025[(13)] = inst_55877);

(statearr_56025[(14)] = inst_55874);

(statearr_56025[(15)] = inst_55876);

(statearr_56025[(16)] = inst_55915);

(statearr_56025[(17)] = inst_55875);

return statearr_56025;
})();
var statearr_56027_58009 = state_55995__$1;
(statearr_56027_58009[(2)] = null);

(statearr_56027_58009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (39))){
var state_55995__$1 = state_55995;
var statearr_56032_58010 = state_55995__$1;
(statearr_56032_58010[(2)] = null);

(statearr_56032_58010[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (4))){
var inst_55865 = (state_55995[(9)]);
var inst_55865__$1 = (state_55995[(2)]);
var inst_55866 = (inst_55865__$1 == null);
var state_55995__$1 = (function (){var statearr_56033 = state_55995;
(statearr_56033[(9)] = inst_55865__$1);

return statearr_56033;
})();
if(cljs.core.truth_(inst_55866)){
var statearr_56034_58014 = state_55995__$1;
(statearr_56034_58014[(1)] = (5));

} else {
var statearr_56035_58015 = state_55995__$1;
(statearr_56035_58015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (15))){
var inst_55877 = (state_55995[(13)]);
var inst_55874 = (state_55995[(14)]);
var inst_55876 = (state_55995[(15)]);
var inst_55875 = (state_55995[(17)]);
var inst_55892 = (state_55995[(2)]);
var inst_55893 = (inst_55877 + (1));
var tmp56028 = inst_55874;
var tmp56029 = inst_55876;
var tmp56030 = inst_55875;
var inst_55874__$1 = tmp56028;
var inst_55875__$1 = tmp56030;
var inst_55876__$1 = tmp56029;
var inst_55877__$1 = inst_55893;
var state_55995__$1 = (function (){var statearr_56038 = state_55995;
(statearr_56038[(13)] = inst_55877__$1);

(statearr_56038[(14)] = inst_55874__$1);

(statearr_56038[(15)] = inst_55876__$1);

(statearr_56038[(18)] = inst_55892);

(statearr_56038[(17)] = inst_55875__$1);

return statearr_56038;
})();
var statearr_56039_58017 = state_55995__$1;
(statearr_56039_58017[(2)] = null);

(statearr_56039_58017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (21))){
var inst_55919 = (state_55995[(2)]);
var state_55995__$1 = state_55995;
var statearr_56049_58018 = state_55995__$1;
(statearr_56049_58018[(2)] = inst_55919);

(statearr_56049_58018[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (31))){
var inst_55945 = (state_55995[(12)]);
var inst_55949 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_55945);
var state_55995__$1 = state_55995;
var statearr_56050_58023 = state_55995__$1;
(statearr_56050_58023[(2)] = inst_55949);

(statearr_56050_58023[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (32))){
var inst_55939 = (state_55995[(19)]);
var inst_55938 = (state_55995[(10)]);
var inst_55940 = (state_55995[(11)]);
var inst_55937 = (state_55995[(20)]);
var inst_55951 = (state_55995[(2)]);
var inst_55952 = (inst_55940 + (1));
var tmp56046 = inst_55939;
var tmp56047 = inst_55938;
var tmp56048 = inst_55937;
var inst_55937__$1 = tmp56048;
var inst_55938__$1 = tmp56047;
var inst_55939__$1 = tmp56046;
var inst_55940__$1 = inst_55952;
var state_55995__$1 = (function (){var statearr_56053 = state_55995;
(statearr_56053[(19)] = inst_55939__$1);

(statearr_56053[(10)] = inst_55938__$1);

(statearr_56053[(21)] = inst_55951);

(statearr_56053[(11)] = inst_55940__$1);

(statearr_56053[(20)] = inst_55937__$1);

return statearr_56053;
})();
var statearr_56054_58025 = state_55995__$1;
(statearr_56054_58025[(2)] = null);

(statearr_56054_58025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (40))){
var inst_55964 = (state_55995[(22)]);
var inst_55968 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_55964);
var state_55995__$1 = state_55995;
var statearr_56055_58026 = state_55995__$1;
(statearr_56055_58026[(2)] = inst_55968);

(statearr_56055_58026[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (33))){
var inst_55955 = (state_55995[(23)]);
var inst_55957 = cljs.core.chunked_seq_QMARK_(inst_55955);
var state_55995__$1 = state_55995;
if(inst_55957){
var statearr_56056_58027 = state_55995__$1;
(statearr_56056_58027[(1)] = (36));

} else {
var statearr_56057_58028 = state_55995__$1;
(statearr_56057_58028[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (13))){
var inst_55886 = (state_55995[(24)]);
var inst_55889 = cljs.core.async.close_BANG_(inst_55886);
var state_55995__$1 = state_55995;
var statearr_56059_58029 = state_55995__$1;
(statearr_56059_58029[(2)] = inst_55889);

(statearr_56059_58029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (22))){
var inst_55909 = (state_55995[(8)]);
var inst_55912 = cljs.core.async.close_BANG_(inst_55909);
var state_55995__$1 = state_55995;
var statearr_56060_58030 = state_55995__$1;
(statearr_56060_58030[(2)] = inst_55912);

(statearr_56060_58030[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (36))){
var inst_55955 = (state_55995[(23)]);
var inst_55959 = cljs.core.chunk_first(inst_55955);
var inst_55960 = cljs.core.chunk_rest(inst_55955);
var inst_55961 = cljs.core.count(inst_55959);
var inst_55937 = inst_55960;
var inst_55938 = inst_55959;
var inst_55939 = inst_55961;
var inst_55940 = (0);
var state_55995__$1 = (function (){var statearr_56063 = state_55995;
(statearr_56063[(19)] = inst_55939);

(statearr_56063[(10)] = inst_55938);

(statearr_56063[(11)] = inst_55940);

(statearr_56063[(20)] = inst_55937);

return statearr_56063;
})();
var statearr_56064_58031 = state_55995__$1;
(statearr_56064_58031[(2)] = null);

(statearr_56064_58031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (41))){
var inst_55955 = (state_55995[(23)]);
var inst_55970 = (state_55995[(2)]);
var inst_55971 = cljs.core.next(inst_55955);
var inst_55937 = inst_55971;
var inst_55938 = null;
var inst_55939 = (0);
var inst_55940 = (0);
var state_55995__$1 = (function (){var statearr_56065 = state_55995;
(statearr_56065[(19)] = inst_55939);

(statearr_56065[(25)] = inst_55970);

(statearr_56065[(10)] = inst_55938);

(statearr_56065[(11)] = inst_55940);

(statearr_56065[(20)] = inst_55937);

return statearr_56065;
})();
var statearr_56066_58032 = state_55995__$1;
(statearr_56066_58032[(2)] = null);

(statearr_56066_58032[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (43))){
var state_55995__$1 = state_55995;
var statearr_56067_58033 = state_55995__$1;
(statearr_56067_58033[(2)] = null);

(statearr_56067_58033[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (29))){
var inst_55979 = (state_55995[(2)]);
var state_55995__$1 = state_55995;
var statearr_56068_58034 = state_55995__$1;
(statearr_56068_58034[(2)] = inst_55979);

(statearr_56068_58034[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (44))){
var inst_55988 = (state_55995[(2)]);
var state_55995__$1 = (function (){var statearr_56070 = state_55995;
(statearr_56070[(26)] = inst_55988);

return statearr_56070;
})();
var statearr_56071_58035 = state_55995__$1;
(statearr_56071_58035[(2)] = null);

(statearr_56071_58035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (6))){
var inst_55929 = (state_55995[(27)]);
var inst_55928 = cljs.core.deref(cs);
var inst_55929__$1 = cljs.core.keys(inst_55928);
var inst_55930 = cljs.core.count(inst_55929__$1);
var inst_55931 = cljs.core.reset_BANG_(dctr,inst_55930);
var inst_55936 = cljs.core.seq(inst_55929__$1);
var inst_55937 = inst_55936;
var inst_55938 = null;
var inst_55939 = (0);
var inst_55940 = (0);
var state_55995__$1 = (function (){var statearr_56073 = state_55995;
(statearr_56073[(19)] = inst_55939);

(statearr_56073[(28)] = inst_55931);

(statearr_56073[(10)] = inst_55938);

(statearr_56073[(11)] = inst_55940);

(statearr_56073[(27)] = inst_55929__$1);

(statearr_56073[(20)] = inst_55937);

return statearr_56073;
})();
var statearr_56074_58040 = state_55995__$1;
(statearr_56074_58040[(2)] = null);

(statearr_56074_58040[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (28))){
var inst_55955 = (state_55995[(23)]);
var inst_55937 = (state_55995[(20)]);
var inst_55955__$1 = cljs.core.seq(inst_55937);
var state_55995__$1 = (function (){var statearr_56075 = state_55995;
(statearr_56075[(23)] = inst_55955__$1);

return statearr_56075;
})();
if(inst_55955__$1){
var statearr_56076_58041 = state_55995__$1;
(statearr_56076_58041[(1)] = (33));

} else {
var statearr_56077_58042 = state_55995__$1;
(statearr_56077_58042[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (25))){
var inst_55939 = (state_55995[(19)]);
var inst_55940 = (state_55995[(11)]);
var inst_55942 = (inst_55940 < inst_55939);
var inst_55943 = inst_55942;
var state_55995__$1 = state_55995;
if(cljs.core.truth_(inst_55943)){
var statearr_56078_58047 = state_55995__$1;
(statearr_56078_58047[(1)] = (27));

} else {
var statearr_56079_58048 = state_55995__$1;
(statearr_56079_58048[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (34))){
var state_55995__$1 = state_55995;
var statearr_56084_58049 = state_55995__$1;
(statearr_56084_58049[(2)] = null);

(statearr_56084_58049[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (17))){
var state_55995__$1 = state_55995;
var statearr_56085_58050 = state_55995__$1;
(statearr_56085_58050[(2)] = null);

(statearr_56085_58050[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (3))){
var inst_55993 = (state_55995[(2)]);
var state_55995__$1 = state_55995;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55995__$1,inst_55993);
} else {
if((state_val_55996 === (12))){
var inst_55924 = (state_55995[(2)]);
var state_55995__$1 = state_55995;
var statearr_56087_58051 = state_55995__$1;
(statearr_56087_58051[(2)] = inst_55924);

(statearr_56087_58051[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (2))){
var state_55995__$1 = state_55995;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55995__$1,(4),ch);
} else {
if((state_val_55996 === (23))){
var state_55995__$1 = state_55995;
var statearr_56088_58055 = state_55995__$1;
(statearr_56088_58055[(2)] = null);

(statearr_56088_58055[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (35))){
var inst_55977 = (state_55995[(2)]);
var state_55995__$1 = state_55995;
var statearr_56089_58056 = state_55995__$1;
(statearr_56089_58056[(2)] = inst_55977);

(statearr_56089_58056[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (19))){
var inst_55896 = (state_55995[(7)]);
var inst_55900 = cljs.core.chunk_first(inst_55896);
var inst_55901 = cljs.core.chunk_rest(inst_55896);
var inst_55902 = cljs.core.count(inst_55900);
var inst_55874 = inst_55901;
var inst_55875 = inst_55900;
var inst_55876 = inst_55902;
var inst_55877 = (0);
var state_55995__$1 = (function (){var statearr_56090 = state_55995;
(statearr_56090[(13)] = inst_55877);

(statearr_56090[(14)] = inst_55874);

(statearr_56090[(15)] = inst_55876);

(statearr_56090[(17)] = inst_55875);

return statearr_56090;
})();
var statearr_56091_58063 = state_55995__$1;
(statearr_56091_58063[(2)] = null);

(statearr_56091_58063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (11))){
var inst_55874 = (state_55995[(14)]);
var inst_55896 = (state_55995[(7)]);
var inst_55896__$1 = cljs.core.seq(inst_55874);
var state_55995__$1 = (function (){var statearr_56093 = state_55995;
(statearr_56093[(7)] = inst_55896__$1);

return statearr_56093;
})();
if(inst_55896__$1){
var statearr_56095_58065 = state_55995__$1;
(statearr_56095_58065[(1)] = (16));

} else {
var statearr_56099_58066 = state_55995__$1;
(statearr_56099_58066[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (9))){
var inst_55926 = (state_55995[(2)]);
var state_55995__$1 = state_55995;
var statearr_56101_58070 = state_55995__$1;
(statearr_56101_58070[(2)] = inst_55926);

(statearr_56101_58070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (5))){
var inst_55872 = cljs.core.deref(cs);
var inst_55873 = cljs.core.seq(inst_55872);
var inst_55874 = inst_55873;
var inst_55875 = null;
var inst_55876 = (0);
var inst_55877 = (0);
var state_55995__$1 = (function (){var statearr_56102 = state_55995;
(statearr_56102[(13)] = inst_55877);

(statearr_56102[(14)] = inst_55874);

(statearr_56102[(15)] = inst_55876);

(statearr_56102[(17)] = inst_55875);

return statearr_56102;
})();
var statearr_56103_58071 = state_55995__$1;
(statearr_56103_58071[(2)] = null);

(statearr_56103_58071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (14))){
var state_55995__$1 = state_55995;
var statearr_56104_58075 = state_55995__$1;
(statearr_56104_58075[(2)] = null);

(statearr_56104_58075[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (45))){
var inst_55985 = (state_55995[(2)]);
var state_55995__$1 = state_55995;
var statearr_56105_58084 = state_55995__$1;
(statearr_56105_58084[(2)] = inst_55985);

(statearr_56105_58084[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (26))){
var inst_55929 = (state_55995[(27)]);
var inst_55981 = (state_55995[(2)]);
var inst_55982 = cljs.core.seq(inst_55929);
var state_55995__$1 = (function (){var statearr_56106 = state_55995;
(statearr_56106[(29)] = inst_55981);

return statearr_56106;
})();
if(inst_55982){
var statearr_56108_58088 = state_55995__$1;
(statearr_56108_58088[(1)] = (42));

} else {
var statearr_56109_58089 = state_55995__$1;
(statearr_56109_58089[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (16))){
var inst_55896 = (state_55995[(7)]);
var inst_55898 = cljs.core.chunked_seq_QMARK_(inst_55896);
var state_55995__$1 = state_55995;
if(inst_55898){
var statearr_56113_58090 = state_55995__$1;
(statearr_56113_58090[(1)] = (19));

} else {
var statearr_56115_58091 = state_55995__$1;
(statearr_56115_58091[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (38))){
var inst_55974 = (state_55995[(2)]);
var state_55995__$1 = state_55995;
var statearr_56116_58092 = state_55995__$1;
(statearr_56116_58092[(2)] = inst_55974);

(statearr_56116_58092[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (30))){
var state_55995__$1 = state_55995;
var statearr_56118_58093 = state_55995__$1;
(statearr_56118_58093[(2)] = null);

(statearr_56118_58093[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (10))){
var inst_55877 = (state_55995[(13)]);
var inst_55875 = (state_55995[(17)]);
var inst_55885 = cljs.core._nth(inst_55875,inst_55877);
var inst_55886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55885,(0),null);
var inst_55887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55885,(1),null);
var state_55995__$1 = (function (){var statearr_56119 = state_55995;
(statearr_56119[(24)] = inst_55886);

return statearr_56119;
})();
if(cljs.core.truth_(inst_55887)){
var statearr_56120_58098 = state_55995__$1;
(statearr_56120_58098[(1)] = (13));

} else {
var statearr_56121_58099 = state_55995__$1;
(statearr_56121_58099[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (18))){
var inst_55922 = (state_55995[(2)]);
var state_55995__$1 = state_55995;
var statearr_56122_58100 = state_55995__$1;
(statearr_56122_58100[(2)] = inst_55922);

(statearr_56122_58100[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (42))){
var state_55995__$1 = state_55995;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55995__$1,(45),dchan);
} else {
if((state_val_55996 === (37))){
var inst_55955 = (state_55995[(23)]);
var inst_55865 = (state_55995[(9)]);
var inst_55964 = (state_55995[(22)]);
var inst_55964__$1 = cljs.core.first(inst_55955);
var inst_55965 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_55964__$1,inst_55865,done);
var state_55995__$1 = (function (){var statearr_56123 = state_55995;
(statearr_56123[(22)] = inst_55964__$1);

return statearr_56123;
})();
if(cljs.core.truth_(inst_55965)){
var statearr_56124_58101 = state_55995__$1;
(statearr_56124_58101[(1)] = (39));

} else {
var statearr_56125_58102 = state_55995__$1;
(statearr_56125_58102[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55996 === (8))){
var inst_55877 = (state_55995[(13)]);
var inst_55876 = (state_55995[(15)]);
var inst_55879 = (inst_55877 < inst_55876);
var inst_55880 = inst_55879;
var state_55995__$1 = state_55995;
if(cljs.core.truth_(inst_55880)){
var statearr_56126_58103 = state_55995__$1;
(statearr_56126_58103[(1)] = (10));

} else {
var statearr_56129_58104 = state_55995__$1;
(statearr_56129_58104[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__54593__auto__ = null;
var cljs$core$async$mult_$_state_machine__54593__auto____0 = (function (){
var statearr_56130 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56130[(0)] = cljs$core$async$mult_$_state_machine__54593__auto__);

(statearr_56130[(1)] = (1));

return statearr_56130;
});
var cljs$core$async$mult_$_state_machine__54593__auto____1 = (function (state_55995){
while(true){
var ret_value__54594__auto__ = (function (){try{while(true){
var result__54595__auto__ = switch__54589__auto__(state_55995);
if(cljs.core.keyword_identical_QMARK_(result__54595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54595__auto__;
}
break;
}
}catch (e56131){var ex__54596__auto__ = e56131;
var statearr_56132_58118 = state_55995;
(statearr_56132_58118[(2)] = ex__54596__auto__);


if(cljs.core.seq((state_55995[(4)]))){
var statearr_56133_58119 = state_55995;
(statearr_56133_58119[(1)] = cljs.core.first((state_55995[(4)])));

} else {
throw ex__54596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58120 = state_55995;
state_55995 = G__58120;
continue;
} else {
return ret_value__54594__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__54593__auto__ = function(state_55995){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__54593__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__54593__auto____1.call(this,state_55995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__54593__auto____0;
cljs$core$async$mult_$_state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__54593__auto____1;
return cljs$core$async$mult_$_state_machine__54593__auto__;
})()
})();
var state__54842__auto__ = (function (){var statearr_56134 = f__54841__auto__();
(statearr_56134[(6)] = c__54840__auto___57999);

return statearr_56134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54842__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__56136 = arguments.length;
switch (G__56136) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_58123 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_58123(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_58124 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_58124(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_58126 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_58126(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_58127 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_58127(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_58132 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_58132(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58137 = arguments.length;
var i__4865__auto___58138 = (0);
while(true){
if((i__4865__auto___58138 < len__4864__auto___58137)){
args__4870__auto__.push((arguments[i__4865__auto___58138]));

var G__58139 = (i__4865__auto___58138 + (1));
i__4865__auto___58138 = G__58139;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__56158){
var map__56159 = p__56158;
var map__56159__$1 = cljs.core.__destructure_map(map__56159);
var opts = map__56159__$1;
var statearr_56162_58140 = state;
(statearr_56162_58140[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_56164_58141 = state;
(statearr_56164_58141[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_56165_58142 = state;
(statearr_56165_58142[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq56148){
var G__56149 = cljs.core.first(seq56148);
var seq56148__$1 = cljs.core.next(seq56148);
var G__56150 = cljs.core.first(seq56148__$1);
var seq56148__$2 = cljs.core.next(seq56148__$1);
var G__56151 = cljs.core.first(seq56148__$2);
var seq56148__$3 = cljs.core.next(seq56148__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56149,G__56150,G__56151,seq56148__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56175 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56175 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta56176){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta56176 = meta56176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56177,meta56176__$1){
var self__ = this;
var _56177__$1 = this;
return (new cljs.core.async.t_cljs$core$async56175(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta56176__$1));
}));

(cljs.core.async.t_cljs$core$async56175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56177){
var self__ = this;
var _56177__$1 = this;
return self__.meta56176;
}));

(cljs.core.async.t_cljs$core$async56175.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56175.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async56175.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56175.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56175.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56175.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56175.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56175.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta56176","meta56176",266080525,null)], null);
}));

(cljs.core.async.t_cljs$core$async56175.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56175");

(cljs.core.async.t_cljs$core$async56175.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async56175");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56175.
 */
cljs.core.async.__GT_t_cljs$core$async56175 = (function cljs$core$async$mix_$___GT_t_cljs$core$async56175(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta56176){
return (new cljs.core.async.t_cljs$core$async56175(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta56176));
});

}

return (new cljs.core.async.t_cljs$core$async56175(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__54840__auto___58170 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54841__auto__ = (function (){var switch__54589__auto__ = (function (state_56262){
var state_val_56263 = (state_56262[(1)]);
if((state_val_56263 === (7))){
var inst_56210 = (state_56262[(2)]);
var state_56262__$1 = state_56262;
if(cljs.core.truth_(inst_56210)){
var statearr_56265_58171 = state_56262__$1;
(statearr_56265_58171[(1)] = (8));

} else {
var statearr_56266_58172 = state_56262__$1;
(statearr_56266_58172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (20))){
var inst_56202 = (state_56262[(7)]);
var state_56262__$1 = state_56262;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56262__$1,(23),out,inst_56202);
} else {
if((state_val_56263 === (1))){
var inst_56185 = calc_state();
var inst_56186 = cljs.core.__destructure_map(inst_56185);
var inst_56187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56186,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_56188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56186,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_56189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56186,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_56190 = inst_56185;
var state_56262__$1 = (function (){var statearr_56268 = state_56262;
(statearr_56268[(8)] = inst_56190);

(statearr_56268[(9)] = inst_56189);

(statearr_56268[(10)] = inst_56187);

(statearr_56268[(11)] = inst_56188);

return statearr_56268;
})();
var statearr_56269_58173 = state_56262__$1;
(statearr_56269_58173[(2)] = null);

(statearr_56269_58173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (24))){
var inst_56193 = (state_56262[(12)]);
var inst_56190 = inst_56193;
var state_56262__$1 = (function (){var statearr_56270 = state_56262;
(statearr_56270[(8)] = inst_56190);

return statearr_56270;
})();
var statearr_56271_58174 = state_56262__$1;
(statearr_56271_58174[(2)] = null);

(statearr_56271_58174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (4))){
var inst_56202 = (state_56262[(7)]);
var inst_56205 = (state_56262[(13)]);
var inst_56201 = (state_56262[(2)]);
var inst_56202__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56201,(0),null);
var inst_56203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56201,(1),null);
var inst_56205__$1 = (inst_56202__$1 == null);
var state_56262__$1 = (function (){var statearr_56275 = state_56262;
(statearr_56275[(7)] = inst_56202__$1);

(statearr_56275[(13)] = inst_56205__$1);

(statearr_56275[(14)] = inst_56203);

return statearr_56275;
})();
if(cljs.core.truth_(inst_56205__$1)){
var statearr_56277_58175 = state_56262__$1;
(statearr_56277_58175[(1)] = (5));

} else {
var statearr_56278_58176 = state_56262__$1;
(statearr_56278_58176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (15))){
var inst_56226 = (state_56262[(15)]);
var inst_56194 = (state_56262[(16)]);
var inst_56226__$1 = cljs.core.empty_QMARK_(inst_56194);
var state_56262__$1 = (function (){var statearr_56279 = state_56262;
(statearr_56279[(15)] = inst_56226__$1);

return statearr_56279;
})();
if(inst_56226__$1){
var statearr_56280_58177 = state_56262__$1;
(statearr_56280_58177[(1)] = (17));

} else {
var statearr_56281_58178 = state_56262__$1;
(statearr_56281_58178[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (21))){
var inst_56193 = (state_56262[(12)]);
var inst_56190 = inst_56193;
var state_56262__$1 = (function (){var statearr_56282 = state_56262;
(statearr_56282[(8)] = inst_56190);

return statearr_56282;
})();
var statearr_56283_58179 = state_56262__$1;
(statearr_56283_58179[(2)] = null);

(statearr_56283_58179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (13))){
var inst_56217 = (state_56262[(2)]);
var inst_56219 = calc_state();
var inst_56190 = inst_56219;
var state_56262__$1 = (function (){var statearr_56284 = state_56262;
(statearr_56284[(8)] = inst_56190);

(statearr_56284[(17)] = inst_56217);

return statearr_56284;
})();
var statearr_56285_58180 = state_56262__$1;
(statearr_56285_58180[(2)] = null);

(statearr_56285_58180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (22))){
var inst_56253 = (state_56262[(2)]);
var state_56262__$1 = state_56262;
var statearr_56286_58182 = state_56262__$1;
(statearr_56286_58182[(2)] = inst_56253);

(statearr_56286_58182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (6))){
var inst_56203 = (state_56262[(14)]);
var inst_56208 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56203,change);
var state_56262__$1 = state_56262;
var statearr_56291_58183 = state_56262__$1;
(statearr_56291_58183[(2)] = inst_56208);

(statearr_56291_58183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (25))){
var state_56262__$1 = state_56262;
var statearr_56294_58184 = state_56262__$1;
(statearr_56294_58184[(2)] = null);

(statearr_56294_58184[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (17))){
var inst_56195 = (state_56262[(18)]);
var inst_56203 = (state_56262[(14)]);
var inst_56232 = (inst_56195.cljs$core$IFn$_invoke$arity$1 ? inst_56195.cljs$core$IFn$_invoke$arity$1(inst_56203) : inst_56195.call(null,inst_56203));
var inst_56233 = cljs.core.not(inst_56232);
var state_56262__$1 = state_56262;
var statearr_56300_58188 = state_56262__$1;
(statearr_56300_58188[(2)] = inst_56233);

(statearr_56300_58188[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (3))){
var inst_56257 = (state_56262[(2)]);
var state_56262__$1 = state_56262;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56262__$1,inst_56257);
} else {
if((state_val_56263 === (12))){
var state_56262__$1 = state_56262;
var statearr_56301_58189 = state_56262__$1;
(statearr_56301_58189[(2)] = null);

(statearr_56301_58189[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (2))){
var inst_56193 = (state_56262[(12)]);
var inst_56190 = (state_56262[(8)]);
var inst_56193__$1 = cljs.core.__destructure_map(inst_56190);
var inst_56194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56193__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_56195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56193__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_56196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56193__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_56262__$1 = (function (){var statearr_56311 = state_56262;
(statearr_56311[(18)] = inst_56195);

(statearr_56311[(12)] = inst_56193__$1);

(statearr_56311[(16)] = inst_56194);

return statearr_56311;
})();
return cljs.core.async.ioc_alts_BANG_(state_56262__$1,(4),inst_56196);
} else {
if((state_val_56263 === (23))){
var inst_56244 = (state_56262[(2)]);
var state_56262__$1 = state_56262;
if(cljs.core.truth_(inst_56244)){
var statearr_56325_58190 = state_56262__$1;
(statearr_56325_58190[(1)] = (24));

} else {
var statearr_56330_58191 = state_56262__$1;
(statearr_56330_58191[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (19))){
var inst_56236 = (state_56262[(2)]);
var state_56262__$1 = state_56262;
var statearr_56338_58192 = state_56262__$1;
(statearr_56338_58192[(2)] = inst_56236);

(statearr_56338_58192[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (11))){
var inst_56203 = (state_56262[(14)]);
var inst_56214 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_56203);
var state_56262__$1 = state_56262;
var statearr_56345_58193 = state_56262__$1;
(statearr_56345_58193[(2)] = inst_56214);

(statearr_56345_58193[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (9))){
var inst_56223 = (state_56262[(19)]);
var inst_56203 = (state_56262[(14)]);
var inst_56194 = (state_56262[(16)]);
var inst_56223__$1 = (inst_56194.cljs$core$IFn$_invoke$arity$1 ? inst_56194.cljs$core$IFn$_invoke$arity$1(inst_56203) : inst_56194.call(null,inst_56203));
var state_56262__$1 = (function (){var statearr_56347 = state_56262;
(statearr_56347[(19)] = inst_56223__$1);

return statearr_56347;
})();
if(cljs.core.truth_(inst_56223__$1)){
var statearr_56349_58196 = state_56262__$1;
(statearr_56349_58196[(1)] = (14));

} else {
var statearr_56350_58197 = state_56262__$1;
(statearr_56350_58197[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (5))){
var inst_56205 = (state_56262[(13)]);
var state_56262__$1 = state_56262;
var statearr_56351_58198 = state_56262__$1;
(statearr_56351_58198[(2)] = inst_56205);

(statearr_56351_58198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (14))){
var inst_56223 = (state_56262[(19)]);
var state_56262__$1 = state_56262;
var statearr_56352_58199 = state_56262__$1;
(statearr_56352_58199[(2)] = inst_56223);

(statearr_56352_58199[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (26))){
var inst_56249 = (state_56262[(2)]);
var state_56262__$1 = state_56262;
var statearr_56353_58202 = state_56262__$1;
(statearr_56353_58202[(2)] = inst_56249);

(statearr_56353_58202[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (16))){
var inst_56238 = (state_56262[(2)]);
var state_56262__$1 = state_56262;
if(cljs.core.truth_(inst_56238)){
var statearr_56354_58203 = state_56262__$1;
(statearr_56354_58203[(1)] = (20));

} else {
var statearr_56355_58204 = state_56262__$1;
(statearr_56355_58204[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (10))){
var inst_56255 = (state_56262[(2)]);
var state_56262__$1 = state_56262;
var statearr_56357_58205 = state_56262__$1;
(statearr_56357_58205[(2)] = inst_56255);

(statearr_56357_58205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (18))){
var inst_56226 = (state_56262[(15)]);
var state_56262__$1 = state_56262;
var statearr_56358_58206 = state_56262__$1;
(statearr_56358_58206[(2)] = inst_56226);

(statearr_56358_58206[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56263 === (8))){
var inst_56202 = (state_56262[(7)]);
var inst_56212 = (inst_56202 == null);
var state_56262__$1 = state_56262;
if(cljs.core.truth_(inst_56212)){
var statearr_56359_58207 = state_56262__$1;
(statearr_56359_58207[(1)] = (11));

} else {
var statearr_56360_58208 = state_56262__$1;
(statearr_56360_58208[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__54593__auto__ = null;
var cljs$core$async$mix_$_state_machine__54593__auto____0 = (function (){
var statearr_56361 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56361[(0)] = cljs$core$async$mix_$_state_machine__54593__auto__);

(statearr_56361[(1)] = (1));

return statearr_56361;
});
var cljs$core$async$mix_$_state_machine__54593__auto____1 = (function (state_56262){
while(true){
var ret_value__54594__auto__ = (function (){try{while(true){
var result__54595__auto__ = switch__54589__auto__(state_56262);
if(cljs.core.keyword_identical_QMARK_(result__54595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54595__auto__;
}
break;
}
}catch (e56362){var ex__54596__auto__ = e56362;
var statearr_56363_58220 = state_56262;
(statearr_56363_58220[(2)] = ex__54596__auto__);


if(cljs.core.seq((state_56262[(4)]))){
var statearr_56364_58221 = state_56262;
(statearr_56364_58221[(1)] = cljs.core.first((state_56262[(4)])));

} else {
throw ex__54596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58228 = state_56262;
state_56262 = G__58228;
continue;
} else {
return ret_value__54594__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__54593__auto__ = function(state_56262){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__54593__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__54593__auto____1.call(this,state_56262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__54593__auto____0;
cljs$core$async$mix_$_state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__54593__auto____1;
return cljs$core$async$mix_$_state_machine__54593__auto__;
})()
})();
var state__54842__auto__ = (function (){var statearr_56365 = f__54841__auto__();
(statearr_56365[(6)] = c__54840__auto___58170);

return statearr_56365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54842__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_58231 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_58231(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_58232 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_58232(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_58233 = (function() {
var G__58234 = null;
var G__58234__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__58234__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__58234 = function(p,v){
switch(arguments.length){
case 1:
return G__58234__1.call(this,p);
case 2:
return G__58234__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__58234.cljs$core$IFn$_invoke$arity$1 = G__58234__1;
G__58234.cljs$core$IFn$_invoke$arity$2 = G__58234__2;
return G__58234;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__56396 = arguments.length;
switch (G__56396) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_58233(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_58233(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__56403 = arguments.length;
switch (G__56403) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__56398_SHARP_){
if(cljs.core.truth_((p1__56398_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__56398_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__56398_SHARP_.call(null,topic)))){
return p1__56398_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56398_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56404 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56404 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta56405){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta56405 = meta56405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56406,meta56405__$1){
var self__ = this;
var _56406__$1 = this;
return (new cljs.core.async.t_cljs$core$async56404(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta56405__$1));
}));

(cljs.core.async.t_cljs$core$async56404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56406){
var self__ = this;
var _56406__$1 = this;
return self__.meta56405;
}));

(cljs.core.async.t_cljs$core$async56404.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56404.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async56404.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56404.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async56404.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async56404.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async56404.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async56404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta56405","meta56405",-1240936977,null)], null);
}));

(cljs.core.async.t_cljs$core$async56404.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56404");

(cljs.core.async.t_cljs$core$async56404.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async56404");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56404.
 */
cljs.core.async.__GT_t_cljs$core$async56404 = (function cljs$core$async$__GT_t_cljs$core$async56404(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta56405){
return (new cljs.core.async.t_cljs$core$async56404(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta56405));
});

}

return (new cljs.core.async.t_cljs$core$async56404(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__54840__auto___58257 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54841__auto__ = (function (){var switch__54589__auto__ = (function (state_56492){
var state_val_56493 = (state_56492[(1)]);
if((state_val_56493 === (7))){
var inst_56488 = (state_56492[(2)]);
var state_56492__$1 = state_56492;
var statearr_56494_58258 = state_56492__$1;
(statearr_56494_58258[(2)] = inst_56488);

(statearr_56494_58258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56493 === (20))){
var state_56492__$1 = state_56492;
var statearr_56495_58259 = state_56492__$1;
(statearr_56495_58259[(2)] = null);

(statearr_56495_58259[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56493 === (1))){
var state_56492__$1 = state_56492;
var statearr_56496_58260 = state_56492__$1;
(statearr_56496_58260[(2)] = null);

(statearr_56496_58260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56493 === (24))){
var inst_56470 = (state_56492[(7)]);
var inst_56480 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_56470);
var state_56492__$1 = state_56492;
var statearr_56497_58261 = state_56492__$1;
(statearr_56497_58261[(2)] = inst_56480);

(statearr_56497_58261[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56493 === (4))){
var inst_56422 = (state_56492[(8)]);
var inst_56422__$1 = (state_56492[(2)]);
var inst_56423 = (inst_56422__$1 == null);
var state_56492__$1 = (function (){var statearr_56498 = state_56492;
(statearr_56498[(8)] = inst_56422__$1);

return statearr_56498;
})();
if(cljs.core.truth_(inst_56423)){
var statearr_56499_58262 = state_56492__$1;
(statearr_56499_58262[(1)] = (5));

} else {
var statearr_56500_58263 = state_56492__$1;
(statearr_56500_58263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56493 === (15))){
var inst_56464 = (state_56492[(2)]);
var state_56492__$1 = state_56492;
var statearr_56502_58269 = state_56492__$1;
(statearr_56502_58269[(2)] = inst_56464);

(statearr_56502_58269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56493 === (21))){
var inst_56485 = (state_56492[(2)]);
var state_56492__$1 = (function (){var statearr_56503 = state_56492;
(statearr_56503[(9)] = inst_56485);

return statearr_56503;
})();
var statearr_56504_58271 = state_56492__$1;
(statearr_56504_58271[(2)] = null);

(statearr_56504_58271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56493 === (13))){
var inst_56446 = (state_56492[(10)]);
var inst_56448 = cljs.core.chunked_seq_QMARK_(inst_56446);
var state_56492__$1 = state_56492;
if(inst_56448){
var statearr_56505_58274 = state_56492__$1;
(statearr_56505_58274[(1)] = (16));

} else {
var statearr_56506_58275 = state_56492__$1;
(statearr_56506_58275[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56493 === (22))){
var inst_56477 = (state_56492[(2)]);
var state_56492__$1 = state_56492;
if(cljs.core.truth_(inst_56477)){
var statearr_56507_58281 = state_56492__$1;
(statearr_56507_58281[(1)] = (23));

} else {
var statearr_56508_58283 = state_56492__$1;
(statearr_56508_58283[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56493 === (6))){
var inst_56470 = (state_56492[(7)]);
var inst_56422 = (state_56492[(8)]);
var inst_56473 = (state_56492[(11)]);
var inst_56470__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_56422) : topic_fn.call(null,inst_56422));
var inst_56472 = cljs.core.deref(mults);
var inst_56473__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56472,inst_56470__$1);
var state_56492__$1 = (function (){var statearr_56510 = state_56492;
(statearr_56510[(7)] = inst_56470__$1);

(statearr_56510[(11)] = inst_56473__$1);

return statearr_56510;
})();
if(cljs.core.truth_(inst_56473__$1)){
var statearr_56511_58284 = state_56492__$1;
(statearr_56511_58284[(1)] = (19));

} else {
var statearr_56512_58285 = state_56492__$1;
(statearr_56512_58285[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56493 === (25))){
var inst_56482 = (state_56492[(2)]);
var state_56492__$1 = state_56492;
var statearr_56513_58287 = state_56492__$1;
(statearr_56513_58287[(2)] = inst_56482);

(statearr_56513_58287[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56493 === (17))){
var inst_56446 = (state_56492[(10)]);
var inst_56455 = cljs.core.first(inst_56446);
var inst_56456 = cljs.core.async.muxch_STAR_(inst_56455);
var inst_56457 = cljs.core.async.close_BANG_(inst_56456);
var inst_56458 = cljs.core.next(inst_56446);
var inst_56432 = inst_56458;
var inst_56433 = null;
var inst_56434 = (0);
var inst_56435 = (0);
var state_56492__$1 = (function (){var statearr_56514 = state_56492;
(statearr_56514[(12)] = inst_56432);

(statearr_56514[(13)] = inst_56435);

(statearr_56514[(14)] = inst_56433);

(statearr_56514[(15)] = inst_56457);

(statearr_56514[(16)] = inst_56434);

return statearr_56514;
})();
var statearr_56516_58289 = state_56492__$1;
(statearr_56516_58289[(2)] = null);

(statearr_56516_58289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56493 === (3))){
var inst_56490 = (state_56492[(2)]);
var state_56492__$1 = state_56492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56492__$1,inst_56490);
} else {
if((state_val_56493 === (12))){
var inst_56466 = (state_56492[(2)]);
var state_56492__$1 = state_56492;
var statearr_56517_58290 = state_56492__$1;
(statearr_56517_58290[(2)] = inst_56466);

(statearr_56517_58290[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56493 === (2))){
var state_56492__$1 = state_56492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56492__$1,(4),ch);
} else {
if((state_val_56493 === (23))){
var state_56492__$1 = state_56492;
var statearr_56518_58294 = state_56492__$1;
(statearr_56518_58294[(2)] = null);

(statearr_56518_58294[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56493 === (19))){
var inst_56422 = (state_56492[(8)]);
var inst_56473 = (state_56492[(11)]);
var inst_56475 = cljs.core.async.muxch_STAR_(inst_56473);
var state_56492__$1 = state_56492;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56492__$1,(22),inst_56475,inst_56422);
} else {
if((state_val_56493 === (11))){
var inst_56432 = (state_56492[(12)]);
var inst_56446 = (state_56492[(10)]);
var inst_56446__$1 = cljs.core.seq(inst_56432);
var state_56492__$1 = (function (){var statearr_56519 = state_56492;
(statearr_56519[(10)] = inst_56446__$1);

return statearr_56519;
})();
if(inst_56446__$1){
var statearr_56520_58295 = state_56492__$1;
(statearr_56520_58295[(1)] = (13));

} else {
var statearr_56521_58296 = state_56492__$1;
(statearr_56521_58296[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56493 === (9))){
var inst_56468 = (state_56492[(2)]);
var state_56492__$1 = state_56492;
var statearr_56522_58297 = state_56492__$1;
(statearr_56522_58297[(2)] = inst_56468);

(statearr_56522_58297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56493 === (5))){
var inst_56429 = cljs.core.deref(mults);
var inst_56430 = cljs.core.vals(inst_56429);
var inst_56431 = cljs.core.seq(inst_56430);
var inst_56432 = inst_56431;
var inst_56433 = null;
var inst_56434 = (0);
var inst_56435 = (0);
var state_56492__$1 = (function (){var statearr_56523 = state_56492;
(statearr_56523[(12)] = inst_56432);

(statearr_56523[(13)] = inst_56435);

(statearr_56523[(14)] = inst_56433);

(statearr_56523[(16)] = inst_56434);

return statearr_56523;
})();
var statearr_56524_58298 = state_56492__$1;
(statearr_56524_58298[(2)] = null);

(statearr_56524_58298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56493 === (14))){
var state_56492__$1 = state_56492;
var statearr_56528_58299 = state_56492__$1;
(statearr_56528_58299[(2)] = null);

(statearr_56528_58299[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56493 === (16))){
var inst_56446 = (state_56492[(10)]);
var inst_56450 = cljs.core.chunk_first(inst_56446);
var inst_56451 = cljs.core.chunk_rest(inst_56446);
var inst_56452 = cljs.core.count(inst_56450);
var inst_56432 = inst_56451;
var inst_56433 = inst_56450;
var inst_56434 = inst_56452;
var inst_56435 = (0);
var state_56492__$1 = (function (){var statearr_56535 = state_56492;
(statearr_56535[(12)] = inst_56432);

(statearr_56535[(13)] = inst_56435);

(statearr_56535[(14)] = inst_56433);

(statearr_56535[(16)] = inst_56434);

return statearr_56535;
})();
var statearr_56536_58300 = state_56492__$1;
(statearr_56536_58300[(2)] = null);

(statearr_56536_58300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56493 === (10))){
var inst_56432 = (state_56492[(12)]);
var inst_56435 = (state_56492[(13)]);
var inst_56433 = (state_56492[(14)]);
var inst_56434 = (state_56492[(16)]);
var inst_56440 = cljs.core._nth(inst_56433,inst_56435);
var inst_56441 = cljs.core.async.muxch_STAR_(inst_56440);
var inst_56442 = cljs.core.async.close_BANG_(inst_56441);
var inst_56443 = (inst_56435 + (1));
var tmp56525 = inst_56432;
var tmp56526 = inst_56433;
var tmp56527 = inst_56434;
var inst_56432__$1 = tmp56525;
var inst_56433__$1 = tmp56526;
var inst_56434__$1 = tmp56527;
var inst_56435__$1 = inst_56443;
var state_56492__$1 = (function (){var statearr_56537 = state_56492;
(statearr_56537[(12)] = inst_56432__$1);

(statearr_56537[(13)] = inst_56435__$1);

(statearr_56537[(14)] = inst_56433__$1);

(statearr_56537[(17)] = inst_56442);

(statearr_56537[(16)] = inst_56434__$1);

return statearr_56537;
})();
var statearr_56538_58322 = state_56492__$1;
(statearr_56538_58322[(2)] = null);

(statearr_56538_58322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56493 === (18))){
var inst_56461 = (state_56492[(2)]);
var state_56492__$1 = state_56492;
var statearr_56539_58323 = state_56492__$1;
(statearr_56539_58323[(2)] = inst_56461);

(statearr_56539_58323[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56493 === (8))){
var inst_56435 = (state_56492[(13)]);
var inst_56434 = (state_56492[(16)]);
var inst_56437 = (inst_56435 < inst_56434);
var inst_56438 = inst_56437;
var state_56492__$1 = state_56492;
if(cljs.core.truth_(inst_56438)){
var statearr_56540_58324 = state_56492__$1;
(statearr_56540_58324[(1)] = (10));

} else {
var statearr_56541_58325 = state_56492__$1;
(statearr_56541_58325[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54593__auto__ = null;
var cljs$core$async$state_machine__54593__auto____0 = (function (){
var statearr_56555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56555[(0)] = cljs$core$async$state_machine__54593__auto__);

(statearr_56555[(1)] = (1));

return statearr_56555;
});
var cljs$core$async$state_machine__54593__auto____1 = (function (state_56492){
while(true){
var ret_value__54594__auto__ = (function (){try{while(true){
var result__54595__auto__ = switch__54589__auto__(state_56492);
if(cljs.core.keyword_identical_QMARK_(result__54595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54595__auto__;
}
break;
}
}catch (e56559){var ex__54596__auto__ = e56559;
var statearr_56560_58326 = state_56492;
(statearr_56560_58326[(2)] = ex__54596__auto__);


if(cljs.core.seq((state_56492[(4)]))){
var statearr_56561_58327 = state_56492;
(statearr_56561_58327[(1)] = cljs.core.first((state_56492[(4)])));

} else {
throw ex__54596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58328 = state_56492;
state_56492 = G__58328;
continue;
} else {
return ret_value__54594__auto__;
}
break;
}
});
cljs$core$async$state_machine__54593__auto__ = function(state_56492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54593__auto____1.call(this,state_56492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54593__auto____0;
cljs$core$async$state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54593__auto____1;
return cljs$core$async$state_machine__54593__auto__;
})()
})();
var state__54842__auto__ = (function (){var statearr_56562 = f__54841__auto__();
(statearr_56562[(6)] = c__54840__auto___58257);

return statearr_56562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54842__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__56574 = arguments.length;
switch (G__56574) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__56584 = arguments.length;
switch (G__56584) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__56638 = arguments.length;
switch (G__56638) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__54840__auto___58352 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54841__auto__ = (function (){var switch__54589__auto__ = (function (state_56742){
var state_val_56743 = (state_56742[(1)]);
if((state_val_56743 === (7))){
var state_56742__$1 = state_56742;
var statearr_56748_58353 = state_56742__$1;
(statearr_56748_58353[(2)] = null);

(statearr_56748_58353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56743 === (1))){
var state_56742__$1 = state_56742;
var statearr_56756_58354 = state_56742__$1;
(statearr_56756_58354[(2)] = null);

(statearr_56756_58354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56743 === (4))){
var inst_56656 = (state_56742[(7)]);
var inst_56657 = (state_56742[(8)]);
var inst_56659 = (inst_56657 < inst_56656);
var state_56742__$1 = state_56742;
if(cljs.core.truth_(inst_56659)){
var statearr_56758_58355 = state_56742__$1;
(statearr_56758_58355[(1)] = (6));

} else {
var statearr_56760_58356 = state_56742__$1;
(statearr_56760_58356[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56743 === (15))){
var inst_56712 = (state_56742[(9)]);
var inst_56731 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_56712);
var state_56742__$1 = state_56742;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56742__$1,(17),out,inst_56731);
} else {
if((state_val_56743 === (13))){
var inst_56712 = (state_56742[(9)]);
var inst_56712__$1 = (state_56742[(2)]);
var inst_56714 = cljs.core.some(cljs.core.nil_QMARK_,inst_56712__$1);
var state_56742__$1 = (function (){var statearr_56762 = state_56742;
(statearr_56762[(9)] = inst_56712__$1);

return statearr_56762;
})();
if(cljs.core.truth_(inst_56714)){
var statearr_56764_58357 = state_56742__$1;
(statearr_56764_58357[(1)] = (14));

} else {
var statearr_56768_58358 = state_56742__$1;
(statearr_56768_58358[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56743 === (6))){
var state_56742__$1 = state_56742;
var statearr_56777_58359 = state_56742__$1;
(statearr_56777_58359[(2)] = null);

(statearr_56777_58359[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56743 === (17))){
var inst_56733 = (state_56742[(2)]);
var state_56742__$1 = (function (){var statearr_56791 = state_56742;
(statearr_56791[(10)] = inst_56733);

return statearr_56791;
})();
var statearr_56796_58360 = state_56742__$1;
(statearr_56796_58360[(2)] = null);

(statearr_56796_58360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56743 === (3))){
var inst_56738 = (state_56742[(2)]);
var state_56742__$1 = state_56742;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56742__$1,inst_56738);
} else {
if((state_val_56743 === (12))){
var _ = (function (){var statearr_56806 = state_56742;
(statearr_56806[(4)] = cljs.core.rest((state_56742[(4)])));

return statearr_56806;
})();
var state_56742__$1 = state_56742;
var ex56790 = (state_56742__$1[(2)]);
var statearr_56807_58362 = state_56742__$1;
(statearr_56807_58362[(5)] = ex56790);


if((ex56790 instanceof Object)){
var statearr_56828_58366 = state_56742__$1;
(statearr_56828_58366[(1)] = (11));

(statearr_56828_58366[(5)] = null);

} else {
throw ex56790;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56743 === (2))){
var inst_56655 = cljs.core.reset_BANG_(dctr,cnt);
var inst_56656 = cnt;
var inst_56657 = (0);
var state_56742__$1 = (function (){var statearr_56829 = state_56742;
(statearr_56829[(7)] = inst_56656);

(statearr_56829[(8)] = inst_56657);

(statearr_56829[(11)] = inst_56655);

return statearr_56829;
})();
var statearr_56830_58367 = state_56742__$1;
(statearr_56830_58367[(2)] = null);

(statearr_56830_58367[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56743 === (11))){
var inst_56682 = (state_56742[(2)]);
var inst_56688 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_56742__$1 = (function (){var statearr_56831 = state_56742;
(statearr_56831[(12)] = inst_56682);

return statearr_56831;
})();
var statearr_56832_58368 = state_56742__$1;
(statearr_56832_58368[(2)] = inst_56688);

(statearr_56832_58368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56743 === (9))){
var inst_56657 = (state_56742[(8)]);
var _ = (function (){var statearr_56833 = state_56742;
(statearr_56833[(4)] = cljs.core.cons((12),(state_56742[(4)])));

return statearr_56833;
})();
var inst_56694 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_56657) : chs__$1.call(null,inst_56657));
var inst_56695 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_56657) : done.call(null,inst_56657));
var inst_56696 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_56694,inst_56695);
var ___$1 = (function (){var statearr_56834 = state_56742;
(statearr_56834[(4)] = cljs.core.rest((state_56742[(4)])));

return statearr_56834;
})();
var state_56742__$1 = state_56742;
var statearr_56835_58369 = state_56742__$1;
(statearr_56835_58369[(2)] = inst_56696);

(statearr_56835_58369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56743 === (5))){
var inst_56707 = (state_56742[(2)]);
var state_56742__$1 = (function (){var statearr_56836 = state_56742;
(statearr_56836[(13)] = inst_56707);

return statearr_56836;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56742__$1,(13),dchan);
} else {
if((state_val_56743 === (14))){
var inst_56725 = cljs.core.async.close_BANG_(out);
var state_56742__$1 = state_56742;
var statearr_56837_58370 = state_56742__$1;
(statearr_56837_58370[(2)] = inst_56725);

(statearr_56837_58370[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56743 === (16))){
var inst_56736 = (state_56742[(2)]);
var state_56742__$1 = state_56742;
var statearr_56838_58371 = state_56742__$1;
(statearr_56838_58371[(2)] = inst_56736);

(statearr_56838_58371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56743 === (10))){
var inst_56657 = (state_56742[(8)]);
var inst_56699 = (state_56742[(2)]);
var inst_56701 = (inst_56657 + (1));
var inst_56657__$1 = inst_56701;
var state_56742__$1 = (function (){var statearr_56839 = state_56742;
(statearr_56839[(14)] = inst_56699);

(statearr_56839[(8)] = inst_56657__$1);

return statearr_56839;
})();
var statearr_56840_58372 = state_56742__$1;
(statearr_56840_58372[(2)] = null);

(statearr_56840_58372[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56743 === (8))){
var inst_56705 = (state_56742[(2)]);
var state_56742__$1 = state_56742;
var statearr_56841_58380 = state_56742__$1;
(statearr_56841_58380[(2)] = inst_56705);

(statearr_56841_58380[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54593__auto__ = null;
var cljs$core$async$state_machine__54593__auto____0 = (function (){
var statearr_56842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56842[(0)] = cljs$core$async$state_machine__54593__auto__);

(statearr_56842[(1)] = (1));

return statearr_56842;
});
var cljs$core$async$state_machine__54593__auto____1 = (function (state_56742){
while(true){
var ret_value__54594__auto__ = (function (){try{while(true){
var result__54595__auto__ = switch__54589__auto__(state_56742);
if(cljs.core.keyword_identical_QMARK_(result__54595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54595__auto__;
}
break;
}
}catch (e56843){var ex__54596__auto__ = e56843;
var statearr_56844_58394 = state_56742;
(statearr_56844_58394[(2)] = ex__54596__auto__);


if(cljs.core.seq((state_56742[(4)]))){
var statearr_56845_58398 = state_56742;
(statearr_56845_58398[(1)] = cljs.core.first((state_56742[(4)])));

} else {
throw ex__54596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58400 = state_56742;
state_56742 = G__58400;
continue;
} else {
return ret_value__54594__auto__;
}
break;
}
});
cljs$core$async$state_machine__54593__auto__ = function(state_56742){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54593__auto____1.call(this,state_56742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54593__auto____0;
cljs$core$async$state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54593__auto____1;
return cljs$core$async$state_machine__54593__auto__;
})()
})();
var state__54842__auto__ = (function (){var statearr_56846 = f__54841__auto__();
(statearr_56846[(6)] = c__54840__auto___58352);

return statearr_56846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54842__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__56849 = arguments.length;
switch (G__56849) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__54840__auto___58407 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54841__auto__ = (function (){var switch__54589__auto__ = (function (state_56892){
var state_val_56893 = (state_56892[(1)]);
if((state_val_56893 === (7))){
var inst_56869 = (state_56892[(7)]);
var inst_56867 = (state_56892[(8)]);
var inst_56867__$1 = (state_56892[(2)]);
var inst_56869__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56867__$1,(0),null);
var inst_56871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56867__$1,(1),null);
var inst_56873 = (inst_56869__$1 == null);
var state_56892__$1 = (function (){var statearr_56895 = state_56892;
(statearr_56895[(7)] = inst_56869__$1);

(statearr_56895[(8)] = inst_56867__$1);

(statearr_56895[(9)] = inst_56871);

return statearr_56895;
})();
if(cljs.core.truth_(inst_56873)){
var statearr_56898_58409 = state_56892__$1;
(statearr_56898_58409[(1)] = (8));

} else {
var statearr_56899_58410 = state_56892__$1;
(statearr_56899_58410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (1))){
var inst_56850 = cljs.core.vec(chs);
var inst_56851 = inst_56850;
var state_56892__$1 = (function (){var statearr_56901 = state_56892;
(statearr_56901[(10)] = inst_56851);

return statearr_56901;
})();
var statearr_56902_58411 = state_56892__$1;
(statearr_56902_58411[(2)] = null);

(statearr_56902_58411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (4))){
var inst_56851 = (state_56892[(10)]);
var state_56892__$1 = state_56892;
return cljs.core.async.ioc_alts_BANG_(state_56892__$1,(7),inst_56851);
} else {
if((state_val_56893 === (6))){
var inst_56888 = (state_56892[(2)]);
var state_56892__$1 = state_56892;
var statearr_56903_58412 = state_56892__$1;
(statearr_56903_58412[(2)] = inst_56888);

(statearr_56903_58412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (3))){
var inst_56890 = (state_56892[(2)]);
var state_56892__$1 = state_56892;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56892__$1,inst_56890);
} else {
if((state_val_56893 === (2))){
var inst_56851 = (state_56892[(10)]);
var inst_56853 = cljs.core.count(inst_56851);
var inst_56854 = (inst_56853 > (0));
var state_56892__$1 = state_56892;
if(cljs.core.truth_(inst_56854)){
var statearr_56907_58413 = state_56892__$1;
(statearr_56907_58413[(1)] = (4));

} else {
var statearr_56908_58414 = state_56892__$1;
(statearr_56908_58414[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (11))){
var inst_56851 = (state_56892[(10)]);
var inst_56881 = (state_56892[(2)]);
var tmp56905 = inst_56851;
var inst_56851__$1 = tmp56905;
var state_56892__$1 = (function (){var statearr_56909 = state_56892;
(statearr_56909[(10)] = inst_56851__$1);

(statearr_56909[(11)] = inst_56881);

return statearr_56909;
})();
var statearr_56910_58415 = state_56892__$1;
(statearr_56910_58415[(2)] = null);

(statearr_56910_58415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (9))){
var inst_56869 = (state_56892[(7)]);
var state_56892__$1 = state_56892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56892__$1,(11),out,inst_56869);
} else {
if((state_val_56893 === (5))){
var inst_56886 = cljs.core.async.close_BANG_(out);
var state_56892__$1 = state_56892;
var statearr_56912_58416 = state_56892__$1;
(statearr_56912_58416[(2)] = inst_56886);

(statearr_56912_58416[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (10))){
var inst_56884 = (state_56892[(2)]);
var state_56892__$1 = state_56892;
var statearr_56913_58417 = state_56892__$1;
(statearr_56913_58417[(2)] = inst_56884);

(statearr_56913_58417[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56893 === (8))){
var inst_56869 = (state_56892[(7)]);
var inst_56867 = (state_56892[(8)]);
var inst_56851 = (state_56892[(10)]);
var inst_56871 = (state_56892[(9)]);
var inst_56876 = (function (){var cs = inst_56851;
var vec__56863 = inst_56867;
var v = inst_56869;
var c = inst_56871;
return (function (p1__56847_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__56847_SHARP_);
});
})();
var inst_56877 = cljs.core.filterv(inst_56876,inst_56851);
var inst_56851__$1 = inst_56877;
var state_56892__$1 = (function (){var statearr_56915 = state_56892;
(statearr_56915[(10)] = inst_56851__$1);

return statearr_56915;
})();
var statearr_56918_58418 = state_56892__$1;
(statearr_56918_58418[(2)] = null);

(statearr_56918_58418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54593__auto__ = null;
var cljs$core$async$state_machine__54593__auto____0 = (function (){
var statearr_56919 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56919[(0)] = cljs$core$async$state_machine__54593__auto__);

(statearr_56919[(1)] = (1));

return statearr_56919;
});
var cljs$core$async$state_machine__54593__auto____1 = (function (state_56892){
while(true){
var ret_value__54594__auto__ = (function (){try{while(true){
var result__54595__auto__ = switch__54589__auto__(state_56892);
if(cljs.core.keyword_identical_QMARK_(result__54595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54595__auto__;
}
break;
}
}catch (e56928){var ex__54596__auto__ = e56928;
var statearr_56929_58421 = state_56892;
(statearr_56929_58421[(2)] = ex__54596__auto__);


if(cljs.core.seq((state_56892[(4)]))){
var statearr_56930_58422 = state_56892;
(statearr_56930_58422[(1)] = cljs.core.first((state_56892[(4)])));

} else {
throw ex__54596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58423 = state_56892;
state_56892 = G__58423;
continue;
} else {
return ret_value__54594__auto__;
}
break;
}
});
cljs$core$async$state_machine__54593__auto__ = function(state_56892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54593__auto____1.call(this,state_56892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54593__auto____0;
cljs$core$async$state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54593__auto____1;
return cljs$core$async$state_machine__54593__auto__;
})()
})();
var state__54842__auto__ = (function (){var statearr_56947 = f__54841__auto__();
(statearr_56947[(6)] = c__54840__auto___58407);

return statearr_56947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54842__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__56967 = arguments.length;
switch (G__56967) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__54840__auto___58438 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54841__auto__ = (function (){var switch__54589__auto__ = (function (state_57016){
var state_val_57017 = (state_57016[(1)]);
if((state_val_57017 === (7))){
var inst_56974 = (state_57016[(7)]);
var inst_56974__$1 = (state_57016[(2)]);
var inst_56975 = (inst_56974__$1 == null);
var inst_56976 = cljs.core.not(inst_56975);
var state_57016__$1 = (function (){var statearr_57053 = state_57016;
(statearr_57053[(7)] = inst_56974__$1);

return statearr_57053;
})();
if(inst_56976){
var statearr_57066_58440 = state_57016__$1;
(statearr_57066_58440[(1)] = (8));

} else {
var statearr_57071_58441 = state_57016__$1;
(statearr_57071_58441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (1))){
var inst_56969 = (0);
var state_57016__$1 = (function (){var statearr_57076 = state_57016;
(statearr_57076[(8)] = inst_56969);

return statearr_57076;
})();
var statearr_57077_58442 = state_57016__$1;
(statearr_57077_58442[(2)] = null);

(statearr_57077_58442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (4))){
var state_57016__$1 = state_57016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57016__$1,(7),ch);
} else {
if((state_val_57017 === (6))){
var inst_57007 = (state_57016[(2)]);
var state_57016__$1 = state_57016;
var statearr_57084_58443 = state_57016__$1;
(statearr_57084_58443[(2)] = inst_57007);

(statearr_57084_58443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (3))){
var inst_57009 = (state_57016[(2)]);
var inst_57011 = cljs.core.async.close_BANG_(out);
var state_57016__$1 = (function (){var statearr_57095 = state_57016;
(statearr_57095[(9)] = inst_57009);

return statearr_57095;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57016__$1,inst_57011);
} else {
if((state_val_57017 === (2))){
var inst_56969 = (state_57016[(8)]);
var inst_56971 = (inst_56969 < n);
var state_57016__$1 = state_57016;
if(cljs.core.truth_(inst_56971)){
var statearr_57096_58449 = state_57016__$1;
(statearr_57096_58449[(1)] = (4));

} else {
var statearr_57097_58450 = state_57016__$1;
(statearr_57097_58450[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (11))){
var inst_56969 = (state_57016[(8)]);
var inst_56980 = (state_57016[(2)]);
var inst_56981 = (inst_56969 + (1));
var inst_56969__$1 = inst_56981;
var state_57016__$1 = (function (){var statearr_57102 = state_57016;
(statearr_57102[(8)] = inst_56969__$1);

(statearr_57102[(10)] = inst_56980);

return statearr_57102;
})();
var statearr_57103_58451 = state_57016__$1;
(statearr_57103_58451[(2)] = null);

(statearr_57103_58451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (9))){
var state_57016__$1 = state_57016;
var statearr_57104_58452 = state_57016__$1;
(statearr_57104_58452[(2)] = null);

(statearr_57104_58452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (5))){
var state_57016__$1 = state_57016;
var statearr_57105_58453 = state_57016__$1;
(statearr_57105_58453[(2)] = null);

(statearr_57105_58453[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (10))){
var inst_56989 = (state_57016[(2)]);
var state_57016__$1 = state_57016;
var statearr_57113_58454 = state_57016__$1;
(statearr_57113_58454[(2)] = inst_56989);

(statearr_57113_58454[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (8))){
var inst_56974 = (state_57016[(7)]);
var state_57016__$1 = state_57016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57016__$1,(11),out,inst_56974);
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54593__auto__ = null;
var cljs$core$async$state_machine__54593__auto____0 = (function (){
var statearr_57123 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57123[(0)] = cljs$core$async$state_machine__54593__auto__);

(statearr_57123[(1)] = (1));

return statearr_57123;
});
var cljs$core$async$state_machine__54593__auto____1 = (function (state_57016){
while(true){
var ret_value__54594__auto__ = (function (){try{while(true){
var result__54595__auto__ = switch__54589__auto__(state_57016);
if(cljs.core.keyword_identical_QMARK_(result__54595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54595__auto__;
}
break;
}
}catch (e57124){var ex__54596__auto__ = e57124;
var statearr_57125_58455 = state_57016;
(statearr_57125_58455[(2)] = ex__54596__auto__);


if(cljs.core.seq((state_57016[(4)]))){
var statearr_57130_58456 = state_57016;
(statearr_57130_58456[(1)] = cljs.core.first((state_57016[(4)])));

} else {
throw ex__54596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58457 = state_57016;
state_57016 = G__58457;
continue;
} else {
return ret_value__54594__auto__;
}
break;
}
});
cljs$core$async$state_machine__54593__auto__ = function(state_57016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54593__auto____1.call(this,state_57016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54593__auto____0;
cljs$core$async$state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54593__auto____1;
return cljs$core$async$state_machine__54593__auto__;
})()
})();
var state__54842__auto__ = (function (){var statearr_57133 = f__54841__auto__();
(statearr_57133[(6)] = c__54840__auto___58438);

return statearr_57133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54842__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57169 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57169 = (function (f,ch,meta57170){
this.f = f;
this.ch = ch;
this.meta57170 = meta57170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57171,meta57170__$1){
var self__ = this;
var _57171__$1 = this;
return (new cljs.core.async.t_cljs$core$async57169(self__.f,self__.ch,meta57170__$1));
}));

(cljs.core.async.t_cljs$core$async57169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57171){
var self__ = this;
var _57171__$1 = this;
return self__.meta57170;
}));

(cljs.core.async.t_cljs$core$async57169.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57169.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57169.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57169.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57169.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57174 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57174 = (function (f,ch,meta57170,_,fn1,meta57175){
this.f = f;
this.ch = ch;
this.meta57170 = meta57170;
this._ = _;
this.fn1 = fn1;
this.meta57175 = meta57175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57176,meta57175__$1){
var self__ = this;
var _57176__$1 = this;
return (new cljs.core.async.t_cljs$core$async57174(self__.f,self__.ch,self__.meta57170,self__._,self__.fn1,meta57175__$1));
}));

(cljs.core.async.t_cljs$core$async57174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57176){
var self__ = this;
var _57176__$1 = this;
return self__.meta57175;
}));

(cljs.core.async.t_cljs$core$async57174.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57174.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async57174.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57174.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__57156_SHARP_){
var G__57180 = (((p1__57156_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__57156_SHARP_) : self__.f.call(null,p1__57156_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__57180) : f1.call(null,G__57180));
});
}));

(cljs.core.async.t_cljs$core$async57174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57170","meta57170",-188865445,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async57169","cljs.core.async/t_cljs$core$async57169",1365266574,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta57175","meta57175",919225117,null)], null);
}));

(cljs.core.async.t_cljs$core$async57174.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57174");

(cljs.core.async.t_cljs$core$async57174.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async57174");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57174.
 */
cljs.core.async.__GT_t_cljs$core$async57174 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async57174(f__$1,ch__$1,meta57170__$1,___$2,fn1__$1,meta57175){
return (new cljs.core.async.t_cljs$core$async57174(f__$1,ch__$1,meta57170__$1,___$2,fn1__$1,meta57175));
});

}

return (new cljs.core.async.t_cljs$core$async57174(self__.f,self__.ch,self__.meta57170,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__57195 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__57195) : self__.f.call(null,G__57195));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async57169.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57169.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async57169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57170","meta57170",-188865445,null)], null);
}));

(cljs.core.async.t_cljs$core$async57169.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57169");

(cljs.core.async.t_cljs$core$async57169.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async57169");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57169.
 */
cljs.core.async.__GT_t_cljs$core$async57169 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async57169(f__$1,ch__$1,meta57170){
return (new cljs.core.async.t_cljs$core$async57169(f__$1,ch__$1,meta57170));
});

}

return (new cljs.core.async.t_cljs$core$async57169(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57197 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57197 = (function (f,ch,meta57198){
this.f = f;
this.ch = ch;
this.meta57198 = meta57198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57199,meta57198__$1){
var self__ = this;
var _57199__$1 = this;
return (new cljs.core.async.t_cljs$core$async57197(self__.f,self__.ch,meta57198__$1));
}));

(cljs.core.async.t_cljs$core$async57197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57199){
var self__ = this;
var _57199__$1 = this;
return self__.meta57198;
}));

(cljs.core.async.t_cljs$core$async57197.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57197.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57197.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57197.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async57197.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57197.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async57197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57198","meta57198",1918512337,null)], null);
}));

(cljs.core.async.t_cljs$core$async57197.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57197");

(cljs.core.async.t_cljs$core$async57197.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async57197");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57197.
 */
cljs.core.async.__GT_t_cljs$core$async57197 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async57197(f__$1,ch__$1,meta57198){
return (new cljs.core.async.t_cljs$core$async57197(f__$1,ch__$1,meta57198));
});

}

return (new cljs.core.async.t_cljs$core$async57197(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57204 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57204 = (function (p,ch,meta57205){
this.p = p;
this.ch = ch;
this.meta57205 = meta57205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57206,meta57205__$1){
var self__ = this;
var _57206__$1 = this;
return (new cljs.core.async.t_cljs$core$async57204(self__.p,self__.ch,meta57205__$1));
}));

(cljs.core.async.t_cljs$core$async57204.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57206){
var self__ = this;
var _57206__$1 = this;
return self__.meta57205;
}));

(cljs.core.async.t_cljs$core$async57204.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57204.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57204.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57204.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57204.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async57204.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57204.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async57204.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57205","meta57205",1221225619,null)], null);
}));

(cljs.core.async.t_cljs$core$async57204.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57204.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57204");

(cljs.core.async.t_cljs$core$async57204.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async57204");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57204.
 */
cljs.core.async.__GT_t_cljs$core$async57204 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async57204(p__$1,ch__$1,meta57205){
return (new cljs.core.async.t_cljs$core$async57204(p__$1,ch__$1,meta57205));
});

}

return (new cljs.core.async.t_cljs$core$async57204(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__57211 = arguments.length;
switch (G__57211) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__54840__auto___58480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54841__auto__ = (function (){var switch__54589__auto__ = (function (state_57233){
var state_val_57234 = (state_57233[(1)]);
if((state_val_57234 === (7))){
var inst_57229 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
var statearr_57235_58481 = state_57233__$1;
(statearr_57235_58481[(2)] = inst_57229);

(statearr_57235_58481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57234 === (1))){
var state_57233__$1 = state_57233;
var statearr_57236_58482 = state_57233__$1;
(statearr_57236_58482[(2)] = null);

(statearr_57236_58482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57234 === (4))){
var inst_57215 = (state_57233[(7)]);
var inst_57215__$1 = (state_57233[(2)]);
var inst_57216 = (inst_57215__$1 == null);
var state_57233__$1 = (function (){var statearr_57237 = state_57233;
(statearr_57237[(7)] = inst_57215__$1);

return statearr_57237;
})();
if(cljs.core.truth_(inst_57216)){
var statearr_57238_58483 = state_57233__$1;
(statearr_57238_58483[(1)] = (5));

} else {
var statearr_57239_58484 = state_57233__$1;
(statearr_57239_58484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57234 === (6))){
var inst_57215 = (state_57233[(7)]);
var inst_57220 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_57215) : p.call(null,inst_57215));
var state_57233__$1 = state_57233;
if(cljs.core.truth_(inst_57220)){
var statearr_57240_58485 = state_57233__$1;
(statearr_57240_58485[(1)] = (8));

} else {
var statearr_57241_58487 = state_57233__$1;
(statearr_57241_58487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57234 === (3))){
var inst_57231 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57233__$1,inst_57231);
} else {
if((state_val_57234 === (2))){
var state_57233__$1 = state_57233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57233__$1,(4),ch);
} else {
if((state_val_57234 === (11))){
var inst_57223 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
var statearr_57242_58488 = state_57233__$1;
(statearr_57242_58488[(2)] = inst_57223);

(statearr_57242_58488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57234 === (9))){
var state_57233__$1 = state_57233;
var statearr_57243_58489 = state_57233__$1;
(statearr_57243_58489[(2)] = null);

(statearr_57243_58489[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57234 === (5))){
var inst_57218 = cljs.core.async.close_BANG_(out);
var state_57233__$1 = state_57233;
var statearr_57244_58490 = state_57233__$1;
(statearr_57244_58490[(2)] = inst_57218);

(statearr_57244_58490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57234 === (10))){
var inst_57226 = (state_57233[(2)]);
var state_57233__$1 = (function (){var statearr_57245 = state_57233;
(statearr_57245[(8)] = inst_57226);

return statearr_57245;
})();
var statearr_57246_58491 = state_57233__$1;
(statearr_57246_58491[(2)] = null);

(statearr_57246_58491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57234 === (8))){
var inst_57215 = (state_57233[(7)]);
var state_57233__$1 = state_57233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57233__$1,(11),out,inst_57215);
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54593__auto__ = null;
var cljs$core$async$state_machine__54593__auto____0 = (function (){
var statearr_57248 = [null,null,null,null,null,null,null,null,null];
(statearr_57248[(0)] = cljs$core$async$state_machine__54593__auto__);

(statearr_57248[(1)] = (1));

return statearr_57248;
});
var cljs$core$async$state_machine__54593__auto____1 = (function (state_57233){
while(true){
var ret_value__54594__auto__ = (function (){try{while(true){
var result__54595__auto__ = switch__54589__auto__(state_57233);
if(cljs.core.keyword_identical_QMARK_(result__54595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54595__auto__;
}
break;
}
}catch (e57249){var ex__54596__auto__ = e57249;
var statearr_57250_58492 = state_57233;
(statearr_57250_58492[(2)] = ex__54596__auto__);


if(cljs.core.seq((state_57233[(4)]))){
var statearr_57251_58493 = state_57233;
(statearr_57251_58493[(1)] = cljs.core.first((state_57233[(4)])));

} else {
throw ex__54596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58494 = state_57233;
state_57233 = G__58494;
continue;
} else {
return ret_value__54594__auto__;
}
break;
}
});
cljs$core$async$state_machine__54593__auto__ = function(state_57233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54593__auto____1.call(this,state_57233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54593__auto____0;
cljs$core$async$state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54593__auto____1;
return cljs$core$async$state_machine__54593__auto__;
})()
})();
var state__54842__auto__ = (function (){var statearr_57253 = f__54841__auto__();
(statearr_57253[(6)] = c__54840__auto___58480);

return statearr_57253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54842__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__57256 = arguments.length;
switch (G__57256) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__54840__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54841__auto__ = (function (){var switch__54589__auto__ = (function (state_57320){
var state_val_57321 = (state_57320[(1)]);
if((state_val_57321 === (7))){
var inst_57316 = (state_57320[(2)]);
var state_57320__$1 = state_57320;
var statearr_57323_58500 = state_57320__$1;
(statearr_57323_58500[(2)] = inst_57316);

(statearr_57323_58500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57321 === (20))){
var inst_57286 = (state_57320[(7)]);
var inst_57297 = (state_57320[(2)]);
var inst_57298 = cljs.core.next(inst_57286);
var inst_57272 = inst_57298;
var inst_57273 = null;
var inst_57274 = (0);
var inst_57275 = (0);
var state_57320__$1 = (function (){var statearr_57324 = state_57320;
(statearr_57324[(8)] = inst_57272);

(statearr_57324[(9)] = inst_57273);

(statearr_57324[(10)] = inst_57275);

(statearr_57324[(11)] = inst_57297);

(statearr_57324[(12)] = inst_57274);

return statearr_57324;
})();
var statearr_57325_58505 = state_57320__$1;
(statearr_57325_58505[(2)] = null);

(statearr_57325_58505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57321 === (1))){
var state_57320__$1 = state_57320;
var statearr_57326_58507 = state_57320__$1;
(statearr_57326_58507[(2)] = null);

(statearr_57326_58507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57321 === (4))){
var inst_57261 = (state_57320[(13)]);
var inst_57261__$1 = (state_57320[(2)]);
var inst_57262 = (inst_57261__$1 == null);
var state_57320__$1 = (function (){var statearr_57327 = state_57320;
(statearr_57327[(13)] = inst_57261__$1);

return statearr_57327;
})();
if(cljs.core.truth_(inst_57262)){
var statearr_57328_58509 = state_57320__$1;
(statearr_57328_58509[(1)] = (5));

} else {
var statearr_57329_58513 = state_57320__$1;
(statearr_57329_58513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57321 === (15))){
var state_57320__$1 = state_57320;
var statearr_57334_58516 = state_57320__$1;
(statearr_57334_58516[(2)] = null);

(statearr_57334_58516[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57321 === (21))){
var state_57320__$1 = state_57320;
var statearr_57335_58517 = state_57320__$1;
(statearr_57335_58517[(2)] = null);

(statearr_57335_58517[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57321 === (13))){
var inst_57272 = (state_57320[(8)]);
var inst_57273 = (state_57320[(9)]);
var inst_57275 = (state_57320[(10)]);
var inst_57274 = (state_57320[(12)]);
var inst_57282 = (state_57320[(2)]);
var inst_57283 = (inst_57275 + (1));
var tmp57330 = inst_57272;
var tmp57331 = inst_57273;
var tmp57332 = inst_57274;
var inst_57272__$1 = tmp57330;
var inst_57273__$1 = tmp57331;
var inst_57274__$1 = tmp57332;
var inst_57275__$1 = inst_57283;
var state_57320__$1 = (function (){var statearr_57336 = state_57320;
(statearr_57336[(8)] = inst_57272__$1);

(statearr_57336[(9)] = inst_57273__$1);

(statearr_57336[(14)] = inst_57282);

(statearr_57336[(10)] = inst_57275__$1);

(statearr_57336[(12)] = inst_57274__$1);

return statearr_57336;
})();
var statearr_57337_58521 = state_57320__$1;
(statearr_57337_58521[(2)] = null);

(statearr_57337_58521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57321 === (22))){
var state_57320__$1 = state_57320;
var statearr_57338_58526 = state_57320__$1;
(statearr_57338_58526[(2)] = null);

(statearr_57338_58526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57321 === (6))){
var inst_57261 = (state_57320[(13)]);
var inst_57270 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_57261) : f.call(null,inst_57261));
var inst_57271 = cljs.core.seq(inst_57270);
var inst_57272 = inst_57271;
var inst_57273 = null;
var inst_57274 = (0);
var inst_57275 = (0);
var state_57320__$1 = (function (){var statearr_57339 = state_57320;
(statearr_57339[(8)] = inst_57272);

(statearr_57339[(9)] = inst_57273);

(statearr_57339[(10)] = inst_57275);

(statearr_57339[(12)] = inst_57274);

return statearr_57339;
})();
var statearr_57340_58527 = state_57320__$1;
(statearr_57340_58527[(2)] = null);

(statearr_57340_58527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57321 === (17))){
var inst_57286 = (state_57320[(7)]);
var inst_57290 = cljs.core.chunk_first(inst_57286);
var inst_57291 = cljs.core.chunk_rest(inst_57286);
var inst_57292 = cljs.core.count(inst_57290);
var inst_57272 = inst_57291;
var inst_57273 = inst_57290;
var inst_57274 = inst_57292;
var inst_57275 = (0);
var state_57320__$1 = (function (){var statearr_57341 = state_57320;
(statearr_57341[(8)] = inst_57272);

(statearr_57341[(9)] = inst_57273);

(statearr_57341[(10)] = inst_57275);

(statearr_57341[(12)] = inst_57274);

return statearr_57341;
})();
var statearr_57342_58528 = state_57320__$1;
(statearr_57342_58528[(2)] = null);

(statearr_57342_58528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57321 === (3))){
var inst_57318 = (state_57320[(2)]);
var state_57320__$1 = state_57320;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57320__$1,inst_57318);
} else {
if((state_val_57321 === (12))){
var inst_57306 = (state_57320[(2)]);
var state_57320__$1 = state_57320;
var statearr_57343_58529 = state_57320__$1;
(statearr_57343_58529[(2)] = inst_57306);

(statearr_57343_58529[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57321 === (2))){
var state_57320__$1 = state_57320;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57320__$1,(4),in$);
} else {
if((state_val_57321 === (23))){
var inst_57314 = (state_57320[(2)]);
var state_57320__$1 = state_57320;
var statearr_57344_58530 = state_57320__$1;
(statearr_57344_58530[(2)] = inst_57314);

(statearr_57344_58530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57321 === (19))){
var inst_57301 = (state_57320[(2)]);
var state_57320__$1 = state_57320;
var statearr_57345_58531 = state_57320__$1;
(statearr_57345_58531[(2)] = inst_57301);

(statearr_57345_58531[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57321 === (11))){
var inst_57272 = (state_57320[(8)]);
var inst_57286 = (state_57320[(7)]);
var inst_57286__$1 = cljs.core.seq(inst_57272);
var state_57320__$1 = (function (){var statearr_57346 = state_57320;
(statearr_57346[(7)] = inst_57286__$1);

return statearr_57346;
})();
if(inst_57286__$1){
var statearr_57347_58532 = state_57320__$1;
(statearr_57347_58532[(1)] = (14));

} else {
var statearr_57348_58533 = state_57320__$1;
(statearr_57348_58533[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57321 === (9))){
var inst_57308 = (state_57320[(2)]);
var inst_57309 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_57320__$1 = (function (){var statearr_57349 = state_57320;
(statearr_57349[(15)] = inst_57308);

return statearr_57349;
})();
if(cljs.core.truth_(inst_57309)){
var statearr_57350_58534 = state_57320__$1;
(statearr_57350_58534[(1)] = (21));

} else {
var statearr_57351_58535 = state_57320__$1;
(statearr_57351_58535[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57321 === (5))){
var inst_57264 = cljs.core.async.close_BANG_(out);
var state_57320__$1 = state_57320;
var statearr_57352_58536 = state_57320__$1;
(statearr_57352_58536[(2)] = inst_57264);

(statearr_57352_58536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57321 === (14))){
var inst_57286 = (state_57320[(7)]);
var inst_57288 = cljs.core.chunked_seq_QMARK_(inst_57286);
var state_57320__$1 = state_57320;
if(inst_57288){
var statearr_57353_58538 = state_57320__$1;
(statearr_57353_58538[(1)] = (17));

} else {
var statearr_57354_58539 = state_57320__$1;
(statearr_57354_58539[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57321 === (16))){
var inst_57304 = (state_57320[(2)]);
var state_57320__$1 = state_57320;
var statearr_57355_58540 = state_57320__$1;
(statearr_57355_58540[(2)] = inst_57304);

(statearr_57355_58540[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57321 === (10))){
var inst_57273 = (state_57320[(9)]);
var inst_57275 = (state_57320[(10)]);
var inst_57280 = cljs.core._nth(inst_57273,inst_57275);
var state_57320__$1 = state_57320;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57320__$1,(13),out,inst_57280);
} else {
if((state_val_57321 === (18))){
var inst_57286 = (state_57320[(7)]);
var inst_57295 = cljs.core.first(inst_57286);
var state_57320__$1 = state_57320;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57320__$1,(20),out,inst_57295);
} else {
if((state_val_57321 === (8))){
var inst_57275 = (state_57320[(10)]);
var inst_57274 = (state_57320[(12)]);
var inst_57277 = (inst_57275 < inst_57274);
var inst_57278 = inst_57277;
var state_57320__$1 = state_57320;
if(cljs.core.truth_(inst_57278)){
var statearr_57357_58541 = state_57320__$1;
(statearr_57357_58541[(1)] = (10));

} else {
var statearr_57358_58542 = state_57320__$1;
(statearr_57358_58542[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__54593__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__54593__auto____0 = (function (){
var statearr_57359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57359[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__54593__auto__);

(statearr_57359[(1)] = (1));

return statearr_57359;
});
var cljs$core$async$mapcat_STAR__$_state_machine__54593__auto____1 = (function (state_57320){
while(true){
var ret_value__54594__auto__ = (function (){try{while(true){
var result__54595__auto__ = switch__54589__auto__(state_57320);
if(cljs.core.keyword_identical_QMARK_(result__54595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54595__auto__;
}
break;
}
}catch (e57360){var ex__54596__auto__ = e57360;
var statearr_57361_58543 = state_57320;
(statearr_57361_58543[(2)] = ex__54596__auto__);


if(cljs.core.seq((state_57320[(4)]))){
var statearr_57363_58544 = state_57320;
(statearr_57363_58544[(1)] = cljs.core.first((state_57320[(4)])));

} else {
throw ex__54596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58545 = state_57320;
state_57320 = G__58545;
continue;
} else {
return ret_value__54594__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__54593__auto__ = function(state_57320){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__54593__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__54593__auto____1.call(this,state_57320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__54593__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__54593__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__54593__auto__;
})()
})();
var state__54842__auto__ = (function (){var statearr_57364 = f__54841__auto__();
(statearr_57364[(6)] = c__54840__auto__);

return statearr_57364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54842__auto__);
}));

return c__54840__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__57366 = arguments.length;
switch (G__57366) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__57369 = arguments.length;
switch (G__57369) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__57371 = arguments.length;
switch (G__57371) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__54840__auto___58549 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54841__auto__ = (function (){var switch__54589__auto__ = (function (state_57395){
var state_val_57396 = (state_57395[(1)]);
if((state_val_57396 === (7))){
var inst_57390 = (state_57395[(2)]);
var state_57395__$1 = state_57395;
var statearr_57398_58550 = state_57395__$1;
(statearr_57398_58550[(2)] = inst_57390);

(statearr_57398_58550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57396 === (1))){
var inst_57372 = null;
var state_57395__$1 = (function (){var statearr_57399 = state_57395;
(statearr_57399[(7)] = inst_57372);

return statearr_57399;
})();
var statearr_57400_58551 = state_57395__$1;
(statearr_57400_58551[(2)] = null);

(statearr_57400_58551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57396 === (4))){
var inst_57375 = (state_57395[(8)]);
var inst_57375__$1 = (state_57395[(2)]);
var inst_57376 = (inst_57375__$1 == null);
var inst_57377 = cljs.core.not(inst_57376);
var state_57395__$1 = (function (){var statearr_57401 = state_57395;
(statearr_57401[(8)] = inst_57375__$1);

return statearr_57401;
})();
if(inst_57377){
var statearr_57402_58572 = state_57395__$1;
(statearr_57402_58572[(1)] = (5));

} else {
var statearr_57403_58573 = state_57395__$1;
(statearr_57403_58573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57396 === (6))){
var state_57395__$1 = state_57395;
var statearr_57404_58574 = state_57395__$1;
(statearr_57404_58574[(2)] = null);

(statearr_57404_58574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57396 === (3))){
var inst_57392 = (state_57395[(2)]);
var inst_57393 = cljs.core.async.close_BANG_(out);
var state_57395__$1 = (function (){var statearr_57406 = state_57395;
(statearr_57406[(9)] = inst_57392);

return statearr_57406;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57395__$1,inst_57393);
} else {
if((state_val_57396 === (2))){
var state_57395__$1 = state_57395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57395__$1,(4),ch);
} else {
if((state_val_57396 === (11))){
var inst_57375 = (state_57395[(8)]);
var inst_57384 = (state_57395[(2)]);
var inst_57372 = inst_57375;
var state_57395__$1 = (function (){var statearr_57407 = state_57395;
(statearr_57407[(7)] = inst_57372);

(statearr_57407[(10)] = inst_57384);

return statearr_57407;
})();
var statearr_57408_58578 = state_57395__$1;
(statearr_57408_58578[(2)] = null);

(statearr_57408_58578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57396 === (9))){
var inst_57375 = (state_57395[(8)]);
var state_57395__$1 = state_57395;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57395__$1,(11),out,inst_57375);
} else {
if((state_val_57396 === (5))){
var inst_57375 = (state_57395[(8)]);
var inst_57372 = (state_57395[(7)]);
var inst_57379 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57375,inst_57372);
var state_57395__$1 = state_57395;
if(inst_57379){
var statearr_57410_58582 = state_57395__$1;
(statearr_57410_58582[(1)] = (8));

} else {
var statearr_57411_58583 = state_57395__$1;
(statearr_57411_58583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57396 === (10))){
var inst_57387 = (state_57395[(2)]);
var state_57395__$1 = state_57395;
var statearr_57412_58584 = state_57395__$1;
(statearr_57412_58584[(2)] = inst_57387);

(statearr_57412_58584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57396 === (8))){
var inst_57372 = (state_57395[(7)]);
var tmp57409 = inst_57372;
var inst_57372__$1 = tmp57409;
var state_57395__$1 = (function (){var statearr_57414 = state_57395;
(statearr_57414[(7)] = inst_57372__$1);

return statearr_57414;
})();
var statearr_57415_58585 = state_57395__$1;
(statearr_57415_58585[(2)] = null);

(statearr_57415_58585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54593__auto__ = null;
var cljs$core$async$state_machine__54593__auto____0 = (function (){
var statearr_57416 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57416[(0)] = cljs$core$async$state_machine__54593__auto__);

(statearr_57416[(1)] = (1));

return statearr_57416;
});
var cljs$core$async$state_machine__54593__auto____1 = (function (state_57395){
while(true){
var ret_value__54594__auto__ = (function (){try{while(true){
var result__54595__auto__ = switch__54589__auto__(state_57395);
if(cljs.core.keyword_identical_QMARK_(result__54595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54595__auto__;
}
break;
}
}catch (e57417){var ex__54596__auto__ = e57417;
var statearr_57418_58586 = state_57395;
(statearr_57418_58586[(2)] = ex__54596__auto__);


if(cljs.core.seq((state_57395[(4)]))){
var statearr_57419_58587 = state_57395;
(statearr_57419_58587[(1)] = cljs.core.first((state_57395[(4)])));

} else {
throw ex__54596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58588 = state_57395;
state_57395 = G__58588;
continue;
} else {
return ret_value__54594__auto__;
}
break;
}
});
cljs$core$async$state_machine__54593__auto__ = function(state_57395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54593__auto____1.call(this,state_57395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54593__auto____0;
cljs$core$async$state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54593__auto____1;
return cljs$core$async$state_machine__54593__auto__;
})()
})();
var state__54842__auto__ = (function (){var statearr_57421 = f__54841__auto__();
(statearr_57421[(6)] = c__54840__auto___58549);

return statearr_57421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54842__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__57423 = arguments.length;
switch (G__57423) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__54840__auto___58593 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54841__auto__ = (function (){var switch__54589__auto__ = (function (state_57462){
var state_val_57463 = (state_57462[(1)]);
if((state_val_57463 === (7))){
var inst_57458 = (state_57462[(2)]);
var state_57462__$1 = state_57462;
var statearr_57464_58594 = state_57462__$1;
(statearr_57464_58594[(2)] = inst_57458);

(statearr_57464_58594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57463 === (1))){
var inst_57425 = (new Array(n));
var inst_57426 = inst_57425;
var inst_57427 = (0);
var state_57462__$1 = (function (){var statearr_57465 = state_57462;
(statearr_57465[(7)] = inst_57427);

(statearr_57465[(8)] = inst_57426);

return statearr_57465;
})();
var statearr_57466_58595 = state_57462__$1;
(statearr_57466_58595[(2)] = null);

(statearr_57466_58595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57463 === (4))){
var inst_57430 = (state_57462[(9)]);
var inst_57430__$1 = (state_57462[(2)]);
var inst_57431 = (inst_57430__$1 == null);
var inst_57432 = cljs.core.not(inst_57431);
var state_57462__$1 = (function (){var statearr_57468 = state_57462;
(statearr_57468[(9)] = inst_57430__$1);

return statearr_57468;
})();
if(inst_57432){
var statearr_57469_58596 = state_57462__$1;
(statearr_57469_58596[(1)] = (5));

} else {
var statearr_57470_58598 = state_57462__$1;
(statearr_57470_58598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57463 === (15))){
var inst_57452 = (state_57462[(2)]);
var state_57462__$1 = state_57462;
var statearr_57471_58599 = state_57462__$1;
(statearr_57471_58599[(2)] = inst_57452);

(statearr_57471_58599[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57463 === (13))){
var state_57462__$1 = state_57462;
var statearr_57472_58600 = state_57462__$1;
(statearr_57472_58600[(2)] = null);

(statearr_57472_58600[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57463 === (6))){
var inst_57427 = (state_57462[(7)]);
var inst_57448 = (inst_57427 > (0));
var state_57462__$1 = state_57462;
if(cljs.core.truth_(inst_57448)){
var statearr_57477_58610 = state_57462__$1;
(statearr_57477_58610[(1)] = (12));

} else {
var statearr_57478_58611 = state_57462__$1;
(statearr_57478_58611[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57463 === (3))){
var inst_57460 = (state_57462[(2)]);
var state_57462__$1 = state_57462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57462__$1,inst_57460);
} else {
if((state_val_57463 === (12))){
var inst_57426 = (state_57462[(8)]);
var inst_57450 = cljs.core.vec(inst_57426);
var state_57462__$1 = state_57462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57462__$1,(15),out,inst_57450);
} else {
if((state_val_57463 === (2))){
var state_57462__$1 = state_57462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57462__$1,(4),ch);
} else {
if((state_val_57463 === (11))){
var inst_57442 = (state_57462[(2)]);
var inst_57443 = (new Array(n));
var inst_57426 = inst_57443;
var inst_57427 = (0);
var state_57462__$1 = (function (){var statearr_57479 = state_57462;
(statearr_57479[(10)] = inst_57442);

(statearr_57479[(7)] = inst_57427);

(statearr_57479[(8)] = inst_57426);

return statearr_57479;
})();
var statearr_57480_58612 = state_57462__$1;
(statearr_57480_58612[(2)] = null);

(statearr_57480_58612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57463 === (9))){
var inst_57426 = (state_57462[(8)]);
var inst_57440 = cljs.core.vec(inst_57426);
var state_57462__$1 = state_57462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57462__$1,(11),out,inst_57440);
} else {
if((state_val_57463 === (5))){
var inst_57435 = (state_57462[(11)]);
var inst_57430 = (state_57462[(9)]);
var inst_57427 = (state_57462[(7)]);
var inst_57426 = (state_57462[(8)]);
var inst_57434 = (inst_57426[inst_57427] = inst_57430);
var inst_57435__$1 = (inst_57427 + (1));
var inst_57436 = (inst_57435__$1 < n);
var state_57462__$1 = (function (){var statearr_57483 = state_57462;
(statearr_57483[(11)] = inst_57435__$1);

(statearr_57483[(12)] = inst_57434);

return statearr_57483;
})();
if(cljs.core.truth_(inst_57436)){
var statearr_57484_58619 = state_57462__$1;
(statearr_57484_58619[(1)] = (8));

} else {
var statearr_57485_58620 = state_57462__$1;
(statearr_57485_58620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57463 === (14))){
var inst_57455 = (state_57462[(2)]);
var inst_57456 = cljs.core.async.close_BANG_(out);
var state_57462__$1 = (function (){var statearr_57487 = state_57462;
(statearr_57487[(13)] = inst_57455);

return statearr_57487;
})();
var statearr_57488_58621 = state_57462__$1;
(statearr_57488_58621[(2)] = inst_57456);

(statearr_57488_58621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57463 === (10))){
var inst_57446 = (state_57462[(2)]);
var state_57462__$1 = state_57462;
var statearr_57489_58623 = state_57462__$1;
(statearr_57489_58623[(2)] = inst_57446);

(statearr_57489_58623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57463 === (8))){
var inst_57435 = (state_57462[(11)]);
var inst_57426 = (state_57462[(8)]);
var tmp57486 = inst_57426;
var inst_57426__$1 = tmp57486;
var inst_57427 = inst_57435;
var state_57462__$1 = (function (){var statearr_57490 = state_57462;
(statearr_57490[(7)] = inst_57427);

(statearr_57490[(8)] = inst_57426__$1);

return statearr_57490;
})();
var statearr_57491_58624 = state_57462__$1;
(statearr_57491_58624[(2)] = null);

(statearr_57491_58624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54593__auto__ = null;
var cljs$core$async$state_machine__54593__auto____0 = (function (){
var statearr_57492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57492[(0)] = cljs$core$async$state_machine__54593__auto__);

(statearr_57492[(1)] = (1));

return statearr_57492;
});
var cljs$core$async$state_machine__54593__auto____1 = (function (state_57462){
while(true){
var ret_value__54594__auto__ = (function (){try{while(true){
var result__54595__auto__ = switch__54589__auto__(state_57462);
if(cljs.core.keyword_identical_QMARK_(result__54595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54595__auto__;
}
break;
}
}catch (e57493){var ex__54596__auto__ = e57493;
var statearr_57494_58625 = state_57462;
(statearr_57494_58625[(2)] = ex__54596__auto__);


if(cljs.core.seq((state_57462[(4)]))){
var statearr_57495_58632 = state_57462;
(statearr_57495_58632[(1)] = cljs.core.first((state_57462[(4)])));

} else {
throw ex__54596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58633 = state_57462;
state_57462 = G__58633;
continue;
} else {
return ret_value__54594__auto__;
}
break;
}
});
cljs$core$async$state_machine__54593__auto__ = function(state_57462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54593__auto____1.call(this,state_57462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54593__auto____0;
cljs$core$async$state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54593__auto____1;
return cljs$core$async$state_machine__54593__auto__;
})()
})();
var state__54842__auto__ = (function (){var statearr_57502 = f__54841__auto__();
(statearr_57502[(6)] = c__54840__auto___58593);

return statearr_57502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54842__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__57507 = arguments.length;
switch (G__57507) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__54840__auto___58638 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54841__auto__ = (function (){var switch__54589__auto__ = (function (state_57577){
var state_val_57581 = (state_57577[(1)]);
if((state_val_57581 === (7))){
var inst_57568 = (state_57577[(2)]);
var state_57577__$1 = state_57577;
var statearr_57599_58639 = state_57577__$1;
(statearr_57599_58639[(2)] = inst_57568);

(statearr_57599_58639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57581 === (1))){
var inst_57509 = [];
var inst_57510 = inst_57509;
var inst_57511 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_57577__$1 = (function (){var statearr_57603 = state_57577;
(statearr_57603[(7)] = inst_57510);

(statearr_57603[(8)] = inst_57511);

return statearr_57603;
})();
var statearr_57604_58640 = state_57577__$1;
(statearr_57604_58640[(2)] = null);

(statearr_57604_58640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57581 === (4))){
var inst_57516 = (state_57577[(9)]);
var inst_57516__$1 = (state_57577[(2)]);
var inst_57518 = (inst_57516__$1 == null);
var inst_57519 = cljs.core.not(inst_57518);
var state_57577__$1 = (function (){var statearr_57605 = state_57577;
(statearr_57605[(9)] = inst_57516__$1);

return statearr_57605;
})();
if(inst_57519){
var statearr_57606_58641 = state_57577__$1;
(statearr_57606_58641[(1)] = (5));

} else {
var statearr_57607_58642 = state_57577__$1;
(statearr_57607_58642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57581 === (15))){
var inst_57510 = (state_57577[(7)]);
var inst_57559 = cljs.core.vec(inst_57510);
var state_57577__$1 = state_57577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57577__$1,(18),out,inst_57559);
} else {
if((state_val_57581 === (13))){
var inst_57548 = (state_57577[(2)]);
var state_57577__$1 = state_57577;
var statearr_57609_58643 = state_57577__$1;
(statearr_57609_58643[(2)] = inst_57548);

(statearr_57609_58643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57581 === (6))){
var inst_57510 = (state_57577[(7)]);
var inst_57554 = inst_57510.length;
var inst_57555 = (inst_57554 > (0));
var state_57577__$1 = state_57577;
if(cljs.core.truth_(inst_57555)){
var statearr_57610_58644 = state_57577__$1;
(statearr_57610_58644[(1)] = (15));

} else {
var statearr_57611_58645 = state_57577__$1;
(statearr_57611_58645[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57581 === (17))){
var inst_57565 = (state_57577[(2)]);
var inst_57566 = cljs.core.async.close_BANG_(out);
var state_57577__$1 = (function (){var statearr_57613 = state_57577;
(statearr_57613[(10)] = inst_57565);

return statearr_57613;
})();
var statearr_57615_58646 = state_57577__$1;
(statearr_57615_58646[(2)] = inst_57566);

(statearr_57615_58646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57581 === (3))){
var inst_57570 = (state_57577[(2)]);
var state_57577__$1 = state_57577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57577__$1,inst_57570);
} else {
if((state_val_57581 === (12))){
var inst_57510 = (state_57577[(7)]);
var inst_57540 = cljs.core.vec(inst_57510);
var state_57577__$1 = state_57577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57577__$1,(14),out,inst_57540);
} else {
if((state_val_57581 === (2))){
var state_57577__$1 = state_57577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57577__$1,(4),ch);
} else {
if((state_val_57581 === (11))){
var inst_57516 = (state_57577[(9)]);
var inst_57510 = (state_57577[(7)]);
var inst_57522 = (state_57577[(11)]);
var inst_57534 = inst_57510.push(inst_57516);
var tmp57617 = inst_57510;
var inst_57510__$1 = tmp57617;
var inst_57511 = inst_57522;
var state_57577__$1 = (function (){var statearr_57618 = state_57577;
(statearr_57618[(7)] = inst_57510__$1);

(statearr_57618[(12)] = inst_57534);

(statearr_57618[(8)] = inst_57511);

return statearr_57618;
})();
var statearr_57620_58647 = state_57577__$1;
(statearr_57620_58647[(2)] = null);

(statearr_57620_58647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57581 === (9))){
var inst_57511 = (state_57577[(8)]);
var inst_57529 = cljs.core.keyword_identical_QMARK_(inst_57511,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_57577__$1 = state_57577;
var statearr_57622_58648 = state_57577__$1;
(statearr_57622_58648[(2)] = inst_57529);

(statearr_57622_58648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57581 === (5))){
var inst_57516 = (state_57577[(9)]);
var inst_57526 = (state_57577[(13)]);
var inst_57522 = (state_57577[(11)]);
var inst_57511 = (state_57577[(8)]);
var inst_57522__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_57516) : f.call(null,inst_57516));
var inst_57526__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57522__$1,inst_57511);
var state_57577__$1 = (function (){var statearr_57625 = state_57577;
(statearr_57625[(13)] = inst_57526__$1);

(statearr_57625[(11)] = inst_57522__$1);

return statearr_57625;
})();
if(inst_57526__$1){
var statearr_57627_58649 = state_57577__$1;
(statearr_57627_58649[(1)] = (8));

} else {
var statearr_57628_58650 = state_57577__$1;
(statearr_57628_58650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57581 === (14))){
var inst_57516 = (state_57577[(9)]);
var inst_57522 = (state_57577[(11)]);
var inst_57542 = (state_57577[(2)]);
var inst_57544 = [];
var inst_57545 = inst_57544.push(inst_57516);
var inst_57510 = inst_57544;
var inst_57511 = inst_57522;
var state_57577__$1 = (function (){var statearr_57632 = state_57577;
(statearr_57632[(7)] = inst_57510);

(statearr_57632[(14)] = inst_57542);

(statearr_57632[(8)] = inst_57511);

(statearr_57632[(15)] = inst_57545);

return statearr_57632;
})();
var statearr_57633_58655 = state_57577__$1;
(statearr_57633_58655[(2)] = null);

(statearr_57633_58655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57581 === (16))){
var state_57577__$1 = state_57577;
var statearr_57634_58662 = state_57577__$1;
(statearr_57634_58662[(2)] = null);

(statearr_57634_58662[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57581 === (10))){
var inst_57532 = (state_57577[(2)]);
var state_57577__$1 = state_57577;
if(cljs.core.truth_(inst_57532)){
var statearr_57635_58663 = state_57577__$1;
(statearr_57635_58663[(1)] = (11));

} else {
var statearr_57636_58664 = state_57577__$1;
(statearr_57636_58664[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57581 === (18))){
var inst_57561 = (state_57577[(2)]);
var state_57577__$1 = state_57577;
var statearr_57637_58665 = state_57577__$1;
(statearr_57637_58665[(2)] = inst_57561);

(statearr_57637_58665[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57581 === (8))){
var inst_57526 = (state_57577[(13)]);
var state_57577__$1 = state_57577;
var statearr_57639_58666 = state_57577__$1;
(statearr_57639_58666[(2)] = inst_57526);

(statearr_57639_58666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__54593__auto__ = null;
var cljs$core$async$state_machine__54593__auto____0 = (function (){
var statearr_57640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57640[(0)] = cljs$core$async$state_machine__54593__auto__);

(statearr_57640[(1)] = (1));

return statearr_57640;
});
var cljs$core$async$state_machine__54593__auto____1 = (function (state_57577){
while(true){
var ret_value__54594__auto__ = (function (){try{while(true){
var result__54595__auto__ = switch__54589__auto__(state_57577);
if(cljs.core.keyword_identical_QMARK_(result__54595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54595__auto__;
}
break;
}
}catch (e57641){var ex__54596__auto__ = e57641;
var statearr_57642_58667 = state_57577;
(statearr_57642_58667[(2)] = ex__54596__auto__);


if(cljs.core.seq((state_57577[(4)]))){
var statearr_57643_58668 = state_57577;
(statearr_57643_58668[(1)] = cljs.core.first((state_57577[(4)])));

} else {
throw ex__54596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58669 = state_57577;
state_57577 = G__58669;
continue;
} else {
return ret_value__54594__auto__;
}
break;
}
});
cljs$core$async$state_machine__54593__auto__ = function(state_57577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54593__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54593__auto____1.call(this,state_57577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54593__auto____0;
cljs$core$async$state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54593__auto____1;
return cljs$core$async$state_machine__54593__auto__;
})()
})();
var state__54842__auto__ = (function (){var statearr_57647 = f__54841__auto__();
(statearr_57647[(6)] = c__54840__auto___58638);

return statearr_57647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54842__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
