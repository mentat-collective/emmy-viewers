goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__77783 = arguments.length;
switch (G__77783) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async77789 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async77789 = (function (f,blockable,meta77790){
this.f = f;
this.blockable = blockable;
this.meta77790 = meta77790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async77789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77791,meta77790__$1){
var self__ = this;
var _77791__$1 = this;
return (new cljs.core.async.t_cljs$core$async77789(self__.f,self__.blockable,meta77790__$1));
}));

(cljs.core.async.t_cljs$core$async77789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77791){
var self__ = this;
var _77791__$1 = this;
return self__.meta77790;
}));

(cljs.core.async.t_cljs$core$async77789.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async77789.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async77789.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async77789.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async77789.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta77790","meta77790",-2053912952,null)], null);
}));

(cljs.core.async.t_cljs$core$async77789.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async77789.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async77789");

(cljs.core.async.t_cljs$core$async77789.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async77789");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async77789.
 */
cljs.core.async.__GT_t_cljs$core$async77789 = (function cljs$core$async$__GT_t_cljs$core$async77789(f__$1,blockable__$1,meta77790){
return (new cljs.core.async.t_cljs$core$async77789(f__$1,blockable__$1,meta77790));
});

}

return (new cljs.core.async.t_cljs$core$async77789(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__77836 = arguments.length;
switch (G__77836) {
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
var G__77848 = arguments.length;
switch (G__77848) {
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
var G__77853 = arguments.length;
switch (G__77853) {
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
var val_80808 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_80808) : fn1.call(null,val_80808));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_80808) : fn1.call(null,val_80808));
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
var G__77859 = arguments.length;
switch (G__77859) {
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
var n__4741__auto___80825 = n;
var x_80826 = (0);
while(true){
if((x_80826 < n__4741__auto___80825)){
(a[x_80826] = x_80826);

var G__80827 = (x_80826 + (1));
x_80826 = G__80827;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async77861 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async77861 = (function (flag,meta77862){
this.flag = flag;
this.meta77862 = meta77862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async77861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77863,meta77862__$1){
var self__ = this;
var _77863__$1 = this;
return (new cljs.core.async.t_cljs$core$async77861(self__.flag,meta77862__$1));
}));

(cljs.core.async.t_cljs$core$async77861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77863){
var self__ = this;
var _77863__$1 = this;
return self__.meta77862;
}));

(cljs.core.async.t_cljs$core$async77861.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async77861.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async77861.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async77861.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async77861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta77862","meta77862",-736321365,null)], null);
}));

(cljs.core.async.t_cljs$core$async77861.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async77861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async77861");

(cljs.core.async.t_cljs$core$async77861.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async77861");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async77861.
 */
cljs.core.async.__GT_t_cljs$core$async77861 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async77861(flag__$1,meta77862){
return (new cljs.core.async.t_cljs$core$async77861(flag__$1,meta77862));
});

}

return (new cljs.core.async.t_cljs$core$async77861(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async77866 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async77866 = (function (flag,cb,meta77867){
this.flag = flag;
this.cb = cb;
this.meta77867 = meta77867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async77866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77868,meta77867__$1){
var self__ = this;
var _77868__$1 = this;
return (new cljs.core.async.t_cljs$core$async77866(self__.flag,self__.cb,meta77867__$1));
}));

(cljs.core.async.t_cljs$core$async77866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77868){
var self__ = this;
var _77868__$1 = this;
return self__.meta77867;
}));

(cljs.core.async.t_cljs$core$async77866.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async77866.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async77866.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async77866.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async77866.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta77867","meta77867",60511350,null)], null);
}));

(cljs.core.async.t_cljs$core$async77866.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async77866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async77866");

(cljs.core.async.t_cljs$core$async77866.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async77866");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async77866.
 */
cljs.core.async.__GT_t_cljs$core$async77866 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async77866(flag__$1,cb__$1,meta77867){
return (new cljs.core.async.t_cljs$core$async77866(flag__$1,cb__$1,meta77867));
});

}

return (new cljs.core.async.t_cljs$core$async77866(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__77891_SHARP_){
var G__77893 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__77891_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__77893) : fret.call(null,G__77893));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__77892_SHARP_){
var G__77894 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__77892_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__77894) : fret.call(null,G__77894));
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
var G__80830 = (i + (1));
i = G__80830;
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
var len__4864__auto___80831 = arguments.length;
var i__4865__auto___80832 = (0);
while(true){
if((i__4865__auto___80832 < len__4864__auto___80831)){
args__4870__auto__.push((arguments[i__4865__auto___80832]));

var G__80833 = (i__4865__auto___80832 + (1));
i__4865__auto___80832 = G__80833;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__77907){
var map__77908 = p__77907;
var map__77908__$1 = cljs.core.__destructure_map(map__77908);
var opts = map__77908__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq77904){
var G__77905 = cljs.core.first(seq77904);
var seq77904__$1 = cljs.core.next(seq77904);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77905,seq77904__$1);
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
var G__77919 = arguments.length;
switch (G__77919) {
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
var c__77709__auto___80835 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77710__auto__ = (function (){var switch__77503__auto__ = (function (state_78056){
var state_val_78057 = (state_78056[(1)]);
if((state_val_78057 === (7))){
var inst_78042 = (state_78056[(2)]);
var state_78056__$1 = state_78056;
var statearr_78069_80836 = state_78056__$1;
(statearr_78069_80836[(2)] = inst_78042);

(statearr_78069_80836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78057 === (1))){
var state_78056__$1 = state_78056;
var statearr_78070_80837 = state_78056__$1;
(statearr_78070_80837[(2)] = null);

(statearr_78070_80837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78057 === (4))){
var inst_78004 = (state_78056[(7)]);
var inst_78004__$1 = (state_78056[(2)]);
var inst_78014 = (inst_78004__$1 == null);
var state_78056__$1 = (function (){var statearr_78071 = state_78056;
(statearr_78071[(7)] = inst_78004__$1);

return statearr_78071;
})();
if(cljs.core.truth_(inst_78014)){
var statearr_78072_80838 = state_78056__$1;
(statearr_78072_80838[(1)] = (5));

} else {
var statearr_78073_80839 = state_78056__$1;
(statearr_78073_80839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78057 === (13))){
var state_78056__$1 = state_78056;
var statearr_78074_80840 = state_78056__$1;
(statearr_78074_80840[(2)] = null);

(statearr_78074_80840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78057 === (6))){
var inst_78004 = (state_78056[(7)]);
var state_78056__$1 = state_78056;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_78056__$1,(11),to,inst_78004);
} else {
if((state_val_78057 === (3))){
var inst_78047 = (state_78056[(2)]);
var state_78056__$1 = state_78056;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78056__$1,inst_78047);
} else {
if((state_val_78057 === (12))){
var state_78056__$1 = state_78056;
var statearr_78091_80841 = state_78056__$1;
(statearr_78091_80841[(2)] = null);

(statearr_78091_80841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78057 === (2))){
var state_78056__$1 = state_78056;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78056__$1,(4),from);
} else {
if((state_val_78057 === (11))){
var inst_78027 = (state_78056[(2)]);
var state_78056__$1 = state_78056;
if(cljs.core.truth_(inst_78027)){
var statearr_78092_80842 = state_78056__$1;
(statearr_78092_80842[(1)] = (12));

} else {
var statearr_78093_80843 = state_78056__$1;
(statearr_78093_80843[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78057 === (9))){
var state_78056__$1 = state_78056;
var statearr_78094_80844 = state_78056__$1;
(statearr_78094_80844[(2)] = null);

(statearr_78094_80844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78057 === (5))){
var state_78056__$1 = state_78056;
if(cljs.core.truth_(close_QMARK_)){
var statearr_78095_80845 = state_78056__$1;
(statearr_78095_80845[(1)] = (8));

} else {
var statearr_78096_80846 = state_78056__$1;
(statearr_78096_80846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78057 === (14))){
var inst_78040 = (state_78056[(2)]);
var state_78056__$1 = state_78056;
var statearr_78097_80847 = state_78056__$1;
(statearr_78097_80847[(2)] = inst_78040);

(statearr_78097_80847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78057 === (10))){
var inst_78024 = (state_78056[(2)]);
var state_78056__$1 = state_78056;
var statearr_78098_80848 = state_78056__$1;
(statearr_78098_80848[(2)] = inst_78024);

(statearr_78098_80848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78057 === (8))){
var inst_78017 = cljs.core.async.close_BANG_(to);
var state_78056__$1 = state_78056;
var statearr_78099_80849 = state_78056__$1;
(statearr_78099_80849[(2)] = inst_78017);

(statearr_78099_80849[(1)] = (10));


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
var cljs$core$async$state_machine__77504__auto__ = null;
var cljs$core$async$state_machine__77504__auto____0 = (function (){
var statearr_78101 = [null,null,null,null,null,null,null,null];
(statearr_78101[(0)] = cljs$core$async$state_machine__77504__auto__);

(statearr_78101[(1)] = (1));

return statearr_78101;
});
var cljs$core$async$state_machine__77504__auto____1 = (function (state_78056){
while(true){
var ret_value__77505__auto__ = (function (){try{while(true){
var result__77506__auto__ = switch__77503__auto__(state_78056);
if(cljs.core.keyword_identical_QMARK_(result__77506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77506__auto__;
}
break;
}
}catch (e78102){var ex__77507__auto__ = e78102;
var statearr_78103_80850 = state_78056;
(statearr_78103_80850[(2)] = ex__77507__auto__);


if(cljs.core.seq((state_78056[(4)]))){
var statearr_78104_80851 = state_78056;
(statearr_78104_80851[(1)] = cljs.core.first((state_78056[(4)])));

} else {
throw ex__77507__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80852 = state_78056;
state_78056 = G__80852;
continue;
} else {
return ret_value__77505__auto__;
}
break;
}
});
cljs$core$async$state_machine__77504__auto__ = function(state_78056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__77504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__77504__auto____1.call(this,state_78056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__77504__auto____0;
cljs$core$async$state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__77504__auto____1;
return cljs$core$async$state_machine__77504__auto__;
})()
})();
var state__77711__auto__ = (function (){var statearr_78105 = f__77710__auto__();
(statearr_78105[(6)] = c__77709__auto___80835);

return statearr_78105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77711__auto__);
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
var process = (function (p__78114){
var vec__78115 = p__78114;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78115,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78115,(1),null);
var job = vec__78115;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__77709__auto___80854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77710__auto__ = (function (){var switch__77503__auto__ = (function (state_78125){
var state_val_78126 = (state_78125[(1)]);
if((state_val_78126 === (1))){
var state_78125__$1 = state_78125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_78125__$1,(2),res,v);
} else {
if((state_val_78126 === (2))){
var inst_78122 = (state_78125[(2)]);
var inst_78123 = cljs.core.async.close_BANG_(res);
var state_78125__$1 = (function (){var statearr_78130 = state_78125;
(statearr_78130[(7)] = inst_78122);

return statearr_78130;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_78125__$1,inst_78123);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____0 = (function (){
var statearr_78132 = [null,null,null,null,null,null,null,null];
(statearr_78132[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__);

(statearr_78132[(1)] = (1));

return statearr_78132;
});
var cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____1 = (function (state_78125){
while(true){
var ret_value__77505__auto__ = (function (){try{while(true){
var result__77506__auto__ = switch__77503__auto__(state_78125);
if(cljs.core.keyword_identical_QMARK_(result__77506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77506__auto__;
}
break;
}
}catch (e78133){var ex__77507__auto__ = e78133;
var statearr_78134_80855 = state_78125;
(statearr_78134_80855[(2)] = ex__77507__auto__);


if(cljs.core.seq((state_78125[(4)]))){
var statearr_78135_80856 = state_78125;
(statearr_78135_80856[(1)] = cljs.core.first((state_78125[(4)])));

} else {
throw ex__77507__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80857 = state_78125;
state_78125 = G__80857;
continue;
} else {
return ret_value__77505__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__ = function(state_78125){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____1.call(this,state_78125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__;
})()
})();
var state__77711__auto__ = (function (){var statearr_78138 = f__77710__auto__();
(statearr_78138[(6)] = c__77709__auto___80854);

return statearr_78138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77711__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__78139){
var vec__78140 = p__78139;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78140,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78140,(1),null);
var job = vec__78140;
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
var n__4741__auto___80860 = n;
var __80861 = (0);
while(true){
if((__80861 < n__4741__auto___80860)){
var G__78145_80862 = type;
var G__78145_80863__$1 = (((G__78145_80862 instanceof cljs.core.Keyword))?G__78145_80862.fqn:null);
switch (G__78145_80863__$1) {
case "compute":
var c__77709__auto___80866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__80861,c__77709__auto___80866,G__78145_80862,G__78145_80863__$1,n__4741__auto___80860,jobs,results,process,async){
return (function (){
var f__77710__auto__ = (function (){var switch__77503__auto__ = ((function (__80861,c__77709__auto___80866,G__78145_80862,G__78145_80863__$1,n__4741__auto___80860,jobs,results,process,async){
return (function (state_78161){
var state_val_78162 = (state_78161[(1)]);
if((state_val_78162 === (1))){
var state_78161__$1 = state_78161;
var statearr_78168_80868 = state_78161__$1;
(statearr_78168_80868[(2)] = null);

(statearr_78168_80868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78162 === (2))){
var state_78161__$1 = state_78161;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78161__$1,(4),jobs);
} else {
if((state_val_78162 === (3))){
var inst_78159 = (state_78161[(2)]);
var state_78161__$1 = state_78161;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78161__$1,inst_78159);
} else {
if((state_val_78162 === (4))){
var inst_78148 = (state_78161[(2)]);
var inst_78149 = process(inst_78148);
var state_78161__$1 = state_78161;
if(cljs.core.truth_(inst_78149)){
var statearr_78169_80869 = state_78161__$1;
(statearr_78169_80869[(1)] = (5));

} else {
var statearr_78170_80870 = state_78161__$1;
(statearr_78170_80870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78162 === (5))){
var state_78161__$1 = state_78161;
var statearr_78171_80871 = state_78161__$1;
(statearr_78171_80871[(2)] = null);

(statearr_78171_80871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78162 === (6))){
var state_78161__$1 = state_78161;
var statearr_78172_80872 = state_78161__$1;
(statearr_78172_80872[(2)] = null);

(statearr_78172_80872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78162 === (7))){
var inst_78157 = (state_78161[(2)]);
var state_78161__$1 = state_78161;
var statearr_78176_80873 = state_78161__$1;
(statearr_78176_80873[(2)] = inst_78157);

(statearr_78176_80873[(1)] = (3));


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
});})(__80861,c__77709__auto___80866,G__78145_80862,G__78145_80863__$1,n__4741__auto___80860,jobs,results,process,async))
;
return ((function (__80861,switch__77503__auto__,c__77709__auto___80866,G__78145_80862,G__78145_80863__$1,n__4741__auto___80860,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____0 = (function (){
var statearr_78177 = [null,null,null,null,null,null,null];
(statearr_78177[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__);

(statearr_78177[(1)] = (1));

return statearr_78177;
});
var cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____1 = (function (state_78161){
while(true){
var ret_value__77505__auto__ = (function (){try{while(true){
var result__77506__auto__ = switch__77503__auto__(state_78161);
if(cljs.core.keyword_identical_QMARK_(result__77506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77506__auto__;
}
break;
}
}catch (e78178){var ex__77507__auto__ = e78178;
var statearr_78180_80874 = state_78161;
(statearr_78180_80874[(2)] = ex__77507__auto__);


if(cljs.core.seq((state_78161[(4)]))){
var statearr_78181_80875 = state_78161;
(statearr_78181_80875[(1)] = cljs.core.first((state_78161[(4)])));

} else {
throw ex__77507__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80876 = state_78161;
state_78161 = G__80876;
continue;
} else {
return ret_value__77505__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__ = function(state_78161){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____1.call(this,state_78161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__;
})()
;})(__80861,switch__77503__auto__,c__77709__auto___80866,G__78145_80862,G__78145_80863__$1,n__4741__auto___80860,jobs,results,process,async))
})();
var state__77711__auto__ = (function (){var statearr_78187 = f__77710__auto__();
(statearr_78187[(6)] = c__77709__auto___80866);

return statearr_78187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77711__auto__);
});})(__80861,c__77709__auto___80866,G__78145_80862,G__78145_80863__$1,n__4741__auto___80860,jobs,results,process,async))
);


break;
case "async":
var c__77709__auto___80878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__80861,c__77709__auto___80878,G__78145_80862,G__78145_80863__$1,n__4741__auto___80860,jobs,results,process,async){
return (function (){
var f__77710__auto__ = (function (){var switch__77503__auto__ = ((function (__80861,c__77709__auto___80878,G__78145_80862,G__78145_80863__$1,n__4741__auto___80860,jobs,results,process,async){
return (function (state_78204){
var state_val_78205 = (state_78204[(1)]);
if((state_val_78205 === (1))){
var state_78204__$1 = state_78204;
var statearr_78210_80880 = state_78204__$1;
(statearr_78210_80880[(2)] = null);

(statearr_78210_80880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78205 === (2))){
var state_78204__$1 = state_78204;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78204__$1,(4),jobs);
} else {
if((state_val_78205 === (3))){
var inst_78202 = (state_78204[(2)]);
var state_78204__$1 = state_78204;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78204__$1,inst_78202);
} else {
if((state_val_78205 === (4))){
var inst_78194 = (state_78204[(2)]);
var inst_78195 = async(inst_78194);
var state_78204__$1 = state_78204;
if(cljs.core.truth_(inst_78195)){
var statearr_78211_80881 = state_78204__$1;
(statearr_78211_80881[(1)] = (5));

} else {
var statearr_78212_80882 = state_78204__$1;
(statearr_78212_80882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78205 === (5))){
var state_78204__$1 = state_78204;
var statearr_78214_80883 = state_78204__$1;
(statearr_78214_80883[(2)] = null);

(statearr_78214_80883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78205 === (6))){
var state_78204__$1 = state_78204;
var statearr_78218_80884 = state_78204__$1;
(statearr_78218_80884[(2)] = null);

(statearr_78218_80884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78205 === (7))){
var inst_78200 = (state_78204[(2)]);
var state_78204__$1 = state_78204;
var statearr_78219_80885 = state_78204__$1;
(statearr_78219_80885[(2)] = inst_78200);

(statearr_78219_80885[(1)] = (3));


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
});})(__80861,c__77709__auto___80878,G__78145_80862,G__78145_80863__$1,n__4741__auto___80860,jobs,results,process,async))
;
return ((function (__80861,switch__77503__auto__,c__77709__auto___80878,G__78145_80862,G__78145_80863__$1,n__4741__auto___80860,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____0 = (function (){
var statearr_78221 = [null,null,null,null,null,null,null];
(statearr_78221[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__);

(statearr_78221[(1)] = (1));

return statearr_78221;
});
var cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____1 = (function (state_78204){
while(true){
var ret_value__77505__auto__ = (function (){try{while(true){
var result__77506__auto__ = switch__77503__auto__(state_78204);
if(cljs.core.keyword_identical_QMARK_(result__77506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77506__auto__;
}
break;
}
}catch (e78223){var ex__77507__auto__ = e78223;
var statearr_78224_80887 = state_78204;
(statearr_78224_80887[(2)] = ex__77507__auto__);


if(cljs.core.seq((state_78204[(4)]))){
var statearr_78225_80889 = state_78204;
(statearr_78225_80889[(1)] = cljs.core.first((state_78204[(4)])));

} else {
throw ex__77507__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80890 = state_78204;
state_78204 = G__80890;
continue;
} else {
return ret_value__77505__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__ = function(state_78204){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____1.call(this,state_78204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__;
})()
;})(__80861,switch__77503__auto__,c__77709__auto___80878,G__78145_80862,G__78145_80863__$1,n__4741__auto___80860,jobs,results,process,async))
})();
var state__77711__auto__ = (function (){var statearr_78226 = f__77710__auto__();
(statearr_78226[(6)] = c__77709__auto___80878);

return statearr_78226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77711__auto__);
});})(__80861,c__77709__auto___80878,G__78145_80862,G__78145_80863__$1,n__4741__auto___80860,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78145_80863__$1)].join('')));

}

var G__80891 = (__80861 + (1));
__80861 = G__80891;
continue;
} else {
}
break;
}

var c__77709__auto___80892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77710__auto__ = (function (){var switch__77503__auto__ = (function (state_78254){
var state_val_78255 = (state_78254[(1)]);
if((state_val_78255 === (7))){
var inst_78250 = (state_78254[(2)]);
var state_78254__$1 = state_78254;
var statearr_78257_80893 = state_78254__$1;
(statearr_78257_80893[(2)] = inst_78250);

(statearr_78257_80893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78255 === (1))){
var state_78254__$1 = state_78254;
var statearr_78258_80894 = state_78254__$1;
(statearr_78258_80894[(2)] = null);

(statearr_78258_80894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78255 === (4))){
var inst_78230 = (state_78254[(7)]);
var inst_78230__$1 = (state_78254[(2)]);
var inst_78234 = (inst_78230__$1 == null);
var state_78254__$1 = (function (){var statearr_78260 = state_78254;
(statearr_78260[(7)] = inst_78230__$1);

return statearr_78260;
})();
if(cljs.core.truth_(inst_78234)){
var statearr_78263_80895 = state_78254__$1;
(statearr_78263_80895[(1)] = (5));

} else {
var statearr_78264_80896 = state_78254__$1;
(statearr_78264_80896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78255 === (6))){
var inst_78230 = (state_78254[(7)]);
var inst_78239 = (state_78254[(8)]);
var inst_78239__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_78241 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_78242 = [inst_78230,inst_78239__$1];
var inst_78243 = (new cljs.core.PersistentVector(null,2,(5),inst_78241,inst_78242,null));
var state_78254__$1 = (function (){var statearr_78268 = state_78254;
(statearr_78268[(8)] = inst_78239__$1);

return statearr_78268;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_78254__$1,(8),jobs,inst_78243);
} else {
if((state_val_78255 === (3))){
var inst_78252 = (state_78254[(2)]);
var state_78254__$1 = state_78254;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78254__$1,inst_78252);
} else {
if((state_val_78255 === (2))){
var state_78254__$1 = state_78254;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78254__$1,(4),from);
} else {
if((state_val_78255 === (9))){
var inst_78247 = (state_78254[(2)]);
var state_78254__$1 = (function (){var statearr_78269 = state_78254;
(statearr_78269[(9)] = inst_78247);

return statearr_78269;
})();
var statearr_78270_80899 = state_78254__$1;
(statearr_78270_80899[(2)] = null);

(statearr_78270_80899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78255 === (5))){
var inst_78236 = cljs.core.async.close_BANG_(jobs);
var state_78254__$1 = state_78254;
var statearr_78271_80900 = state_78254__$1;
(statearr_78271_80900[(2)] = inst_78236);

(statearr_78271_80900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78255 === (8))){
var inst_78239 = (state_78254[(8)]);
var inst_78245 = (state_78254[(2)]);
var state_78254__$1 = (function (){var statearr_78272 = state_78254;
(statearr_78272[(10)] = inst_78245);

return statearr_78272;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_78254__$1,(9),results,inst_78239);
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
var cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____0 = (function (){
var statearr_78277 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_78277[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__);

(statearr_78277[(1)] = (1));

return statearr_78277;
});
var cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____1 = (function (state_78254){
while(true){
var ret_value__77505__auto__ = (function (){try{while(true){
var result__77506__auto__ = switch__77503__auto__(state_78254);
if(cljs.core.keyword_identical_QMARK_(result__77506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77506__auto__;
}
break;
}
}catch (e78278){var ex__77507__auto__ = e78278;
var statearr_78279_80901 = state_78254;
(statearr_78279_80901[(2)] = ex__77507__auto__);


if(cljs.core.seq((state_78254[(4)]))){
var statearr_78280_80902 = state_78254;
(statearr_78280_80902[(1)] = cljs.core.first((state_78254[(4)])));

} else {
throw ex__77507__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80903 = state_78254;
state_78254 = G__80903;
continue;
} else {
return ret_value__77505__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__ = function(state_78254){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____1.call(this,state_78254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__;
})()
})();
var state__77711__auto__ = (function (){var statearr_78289 = f__77710__auto__();
(statearr_78289[(6)] = c__77709__auto___80892);

return statearr_78289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77711__auto__);
}));


var c__77709__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77710__auto__ = (function (){var switch__77503__auto__ = (function (state_78333){
var state_val_78334 = (state_78333[(1)]);
if((state_val_78334 === (7))){
var inst_78329 = (state_78333[(2)]);
var state_78333__$1 = state_78333;
var statearr_78335_80904 = state_78333__$1;
(statearr_78335_80904[(2)] = inst_78329);

(statearr_78335_80904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78334 === (20))){
var state_78333__$1 = state_78333;
var statearr_78336_80905 = state_78333__$1;
(statearr_78336_80905[(2)] = null);

(statearr_78336_80905[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78334 === (1))){
var state_78333__$1 = state_78333;
var statearr_78337_80906 = state_78333__$1;
(statearr_78337_80906[(2)] = null);

(statearr_78337_80906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78334 === (4))){
var inst_78295 = (state_78333[(7)]);
var inst_78295__$1 = (state_78333[(2)]);
var inst_78299 = (inst_78295__$1 == null);
var state_78333__$1 = (function (){var statearr_78338 = state_78333;
(statearr_78338[(7)] = inst_78295__$1);

return statearr_78338;
})();
if(cljs.core.truth_(inst_78299)){
var statearr_78339_80907 = state_78333__$1;
(statearr_78339_80907[(1)] = (5));

} else {
var statearr_78340_80908 = state_78333__$1;
(statearr_78340_80908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78334 === (15))){
var inst_78311 = (state_78333[(8)]);
var state_78333__$1 = state_78333;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_78333__$1,(18),to,inst_78311);
} else {
if((state_val_78334 === (21))){
var inst_78324 = (state_78333[(2)]);
var state_78333__$1 = state_78333;
var statearr_78341_80909 = state_78333__$1;
(statearr_78341_80909[(2)] = inst_78324);

(statearr_78341_80909[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78334 === (13))){
var inst_78326 = (state_78333[(2)]);
var state_78333__$1 = (function (){var statearr_78342 = state_78333;
(statearr_78342[(9)] = inst_78326);

return statearr_78342;
})();
var statearr_78343_80910 = state_78333__$1;
(statearr_78343_80910[(2)] = null);

(statearr_78343_80910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78334 === (6))){
var inst_78295 = (state_78333[(7)]);
var state_78333__$1 = state_78333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78333__$1,(11),inst_78295);
} else {
if((state_val_78334 === (17))){
var inst_78319 = (state_78333[(2)]);
var state_78333__$1 = state_78333;
if(cljs.core.truth_(inst_78319)){
var statearr_78346_80911 = state_78333__$1;
(statearr_78346_80911[(1)] = (19));

} else {
var statearr_78347_80912 = state_78333__$1;
(statearr_78347_80912[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78334 === (3))){
var inst_78331 = (state_78333[(2)]);
var state_78333__$1 = state_78333;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78333__$1,inst_78331);
} else {
if((state_val_78334 === (12))){
var inst_78308 = (state_78333[(10)]);
var state_78333__$1 = state_78333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78333__$1,(14),inst_78308);
} else {
if((state_val_78334 === (2))){
var state_78333__$1 = state_78333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78333__$1,(4),results);
} else {
if((state_val_78334 === (19))){
var state_78333__$1 = state_78333;
var statearr_78360_80913 = state_78333__$1;
(statearr_78360_80913[(2)] = null);

(statearr_78360_80913[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78334 === (11))){
var inst_78308 = (state_78333[(2)]);
var state_78333__$1 = (function (){var statearr_78361 = state_78333;
(statearr_78361[(10)] = inst_78308);

return statearr_78361;
})();
var statearr_78362_80914 = state_78333__$1;
(statearr_78362_80914[(2)] = null);

(statearr_78362_80914[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78334 === (9))){
var state_78333__$1 = state_78333;
var statearr_78363_80915 = state_78333__$1;
(statearr_78363_80915[(2)] = null);

(statearr_78363_80915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78334 === (5))){
var state_78333__$1 = state_78333;
if(cljs.core.truth_(close_QMARK_)){
var statearr_78364_80916 = state_78333__$1;
(statearr_78364_80916[(1)] = (8));

} else {
var statearr_78365_80917 = state_78333__$1;
(statearr_78365_80917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78334 === (14))){
var inst_78311 = (state_78333[(8)]);
var inst_78313 = (state_78333[(11)]);
var inst_78311__$1 = (state_78333[(2)]);
var inst_78312 = (inst_78311__$1 == null);
var inst_78313__$1 = cljs.core.not(inst_78312);
var state_78333__$1 = (function (){var statearr_78367 = state_78333;
(statearr_78367[(8)] = inst_78311__$1);

(statearr_78367[(11)] = inst_78313__$1);

return statearr_78367;
})();
if(inst_78313__$1){
var statearr_78368_80918 = state_78333__$1;
(statearr_78368_80918[(1)] = (15));

} else {
var statearr_78369_80919 = state_78333__$1;
(statearr_78369_80919[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78334 === (16))){
var inst_78313 = (state_78333[(11)]);
var state_78333__$1 = state_78333;
var statearr_78371_80920 = state_78333__$1;
(statearr_78371_80920[(2)] = inst_78313);

(statearr_78371_80920[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78334 === (10))){
var inst_78305 = (state_78333[(2)]);
var state_78333__$1 = state_78333;
var statearr_78372_80921 = state_78333__$1;
(statearr_78372_80921[(2)] = inst_78305);

(statearr_78372_80921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78334 === (18))){
var inst_78316 = (state_78333[(2)]);
var state_78333__$1 = state_78333;
var statearr_78373_80922 = state_78333__$1;
(statearr_78373_80922[(2)] = inst_78316);

(statearr_78373_80922[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78334 === (8))){
var inst_78302 = cljs.core.async.close_BANG_(to);
var state_78333__$1 = state_78333;
var statearr_78376_80923 = state_78333__$1;
(statearr_78376_80923[(2)] = inst_78302);

(statearr_78376_80923[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____0 = (function (){
var statearr_78378 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78378[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__);

(statearr_78378[(1)] = (1));

return statearr_78378;
});
var cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____1 = (function (state_78333){
while(true){
var ret_value__77505__auto__ = (function (){try{while(true){
var result__77506__auto__ = switch__77503__auto__(state_78333);
if(cljs.core.keyword_identical_QMARK_(result__77506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77506__auto__;
}
break;
}
}catch (e78379){var ex__77507__auto__ = e78379;
var statearr_78380_80924 = state_78333;
(statearr_78380_80924[(2)] = ex__77507__auto__);


if(cljs.core.seq((state_78333[(4)]))){
var statearr_78381_80925 = state_78333;
(statearr_78381_80925[(1)] = cljs.core.first((state_78333[(4)])));

} else {
throw ex__77507__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80926 = state_78333;
state_78333 = G__80926;
continue;
} else {
return ret_value__77505__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__ = function(state_78333){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____1.call(this,state_78333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__77504__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__77504__auto__;
})()
})();
var state__77711__auto__ = (function (){var statearr_78382 = f__77710__auto__();
(statearr_78382[(6)] = c__77709__auto__);

return statearr_78382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77711__auto__);
}));

return c__77709__auto__;
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
var G__78386 = arguments.length;
switch (G__78386) {
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
var G__78396 = arguments.length;
switch (G__78396) {
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
var G__78398 = arguments.length;
switch (G__78398) {
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
var c__77709__auto___80930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77710__auto__ = (function (){var switch__77503__auto__ = (function (state_78439){
var state_val_78440 = (state_78439[(1)]);
if((state_val_78440 === (7))){
var inst_78434 = (state_78439[(2)]);
var state_78439__$1 = state_78439;
var statearr_78449_80931 = state_78439__$1;
(statearr_78449_80931[(2)] = inst_78434);

(statearr_78449_80931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78440 === (1))){
var state_78439__$1 = state_78439;
var statearr_78455_80932 = state_78439__$1;
(statearr_78455_80932[(2)] = null);

(statearr_78455_80932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78440 === (4))){
var inst_78411 = (state_78439[(7)]);
var inst_78411__$1 = (state_78439[(2)]);
var inst_78412 = (inst_78411__$1 == null);
var state_78439__$1 = (function (){var statearr_78457 = state_78439;
(statearr_78457[(7)] = inst_78411__$1);

return statearr_78457;
})();
if(cljs.core.truth_(inst_78412)){
var statearr_78460_80933 = state_78439__$1;
(statearr_78460_80933[(1)] = (5));

} else {
var statearr_78461_80934 = state_78439__$1;
(statearr_78461_80934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78440 === (13))){
var state_78439__$1 = state_78439;
var statearr_78463_80935 = state_78439__$1;
(statearr_78463_80935[(2)] = null);

(statearr_78463_80935[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78440 === (6))){
var inst_78411 = (state_78439[(7)]);
var inst_78417 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_78411) : p.call(null,inst_78411));
var state_78439__$1 = state_78439;
if(cljs.core.truth_(inst_78417)){
var statearr_78479_80937 = state_78439__$1;
(statearr_78479_80937[(1)] = (9));

} else {
var statearr_78483_80938 = state_78439__$1;
(statearr_78483_80938[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78440 === (3))){
var inst_78437 = (state_78439[(2)]);
var state_78439__$1 = state_78439;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78439__$1,inst_78437);
} else {
if((state_val_78440 === (12))){
var state_78439__$1 = state_78439;
var statearr_78490_80939 = state_78439__$1;
(statearr_78490_80939[(2)] = null);

(statearr_78490_80939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78440 === (2))){
var state_78439__$1 = state_78439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78439__$1,(4),ch);
} else {
if((state_val_78440 === (11))){
var inst_78411 = (state_78439[(7)]);
var inst_78425 = (state_78439[(2)]);
var state_78439__$1 = state_78439;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_78439__$1,(8),inst_78425,inst_78411);
} else {
if((state_val_78440 === (9))){
var state_78439__$1 = state_78439;
var statearr_78496_80940 = state_78439__$1;
(statearr_78496_80940[(2)] = tc);

(statearr_78496_80940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78440 === (5))){
var inst_78414 = cljs.core.async.close_BANG_(tc);
var inst_78415 = cljs.core.async.close_BANG_(fc);
var state_78439__$1 = (function (){var statearr_78498 = state_78439;
(statearr_78498[(8)] = inst_78414);

return statearr_78498;
})();
var statearr_78499_80941 = state_78439__$1;
(statearr_78499_80941[(2)] = inst_78415);

(statearr_78499_80941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78440 === (14))){
var inst_78432 = (state_78439[(2)]);
var state_78439__$1 = state_78439;
var statearr_78500_80942 = state_78439__$1;
(statearr_78500_80942[(2)] = inst_78432);

(statearr_78500_80942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78440 === (10))){
var state_78439__$1 = state_78439;
var statearr_78501_80943 = state_78439__$1;
(statearr_78501_80943[(2)] = fc);

(statearr_78501_80943[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78440 === (8))){
var inst_78427 = (state_78439[(2)]);
var state_78439__$1 = state_78439;
if(cljs.core.truth_(inst_78427)){
var statearr_78503_80944 = state_78439__$1;
(statearr_78503_80944[(1)] = (12));

} else {
var statearr_78504_80945 = state_78439__$1;
(statearr_78504_80945[(1)] = (13));

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
var cljs$core$async$state_machine__77504__auto__ = null;
var cljs$core$async$state_machine__77504__auto____0 = (function (){
var statearr_78507 = [null,null,null,null,null,null,null,null,null];
(statearr_78507[(0)] = cljs$core$async$state_machine__77504__auto__);

(statearr_78507[(1)] = (1));

return statearr_78507;
});
var cljs$core$async$state_machine__77504__auto____1 = (function (state_78439){
while(true){
var ret_value__77505__auto__ = (function (){try{while(true){
var result__77506__auto__ = switch__77503__auto__(state_78439);
if(cljs.core.keyword_identical_QMARK_(result__77506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77506__auto__;
}
break;
}
}catch (e78508){var ex__77507__auto__ = e78508;
var statearr_78511_80947 = state_78439;
(statearr_78511_80947[(2)] = ex__77507__auto__);


if(cljs.core.seq((state_78439[(4)]))){
var statearr_78512_80948 = state_78439;
(statearr_78512_80948[(1)] = cljs.core.first((state_78439[(4)])));

} else {
throw ex__77507__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80949 = state_78439;
state_78439 = G__80949;
continue;
} else {
return ret_value__77505__auto__;
}
break;
}
});
cljs$core$async$state_machine__77504__auto__ = function(state_78439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__77504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__77504__auto____1.call(this,state_78439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__77504__auto____0;
cljs$core$async$state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__77504__auto____1;
return cljs$core$async$state_machine__77504__auto__;
})()
})();
var state__77711__auto__ = (function (){var statearr_78513 = f__77710__auto__();
(statearr_78513[(6)] = c__77709__auto___80930);

return statearr_78513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77711__auto__);
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
var c__77709__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77710__auto__ = (function (){var switch__77503__auto__ = (function (state_78546){
var state_val_78547 = (state_78546[(1)]);
if((state_val_78547 === (7))){
var inst_78542 = (state_78546[(2)]);
var state_78546__$1 = state_78546;
var statearr_78548_80950 = state_78546__$1;
(statearr_78548_80950[(2)] = inst_78542);

(statearr_78548_80950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78547 === (1))){
var inst_78521 = init;
var inst_78525 = inst_78521;
var state_78546__$1 = (function (){var statearr_78549 = state_78546;
(statearr_78549[(7)] = inst_78525);

return statearr_78549;
})();
var statearr_78550_80951 = state_78546__$1;
(statearr_78550_80951[(2)] = null);

(statearr_78550_80951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78547 === (4))){
var inst_78529 = (state_78546[(8)]);
var inst_78529__$1 = (state_78546[(2)]);
var inst_78530 = (inst_78529__$1 == null);
var state_78546__$1 = (function (){var statearr_78551 = state_78546;
(statearr_78551[(8)] = inst_78529__$1);

return statearr_78551;
})();
if(cljs.core.truth_(inst_78530)){
var statearr_78554_80952 = state_78546__$1;
(statearr_78554_80952[(1)] = (5));

} else {
var statearr_78557_80953 = state_78546__$1;
(statearr_78557_80953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78547 === (6))){
var inst_78529 = (state_78546[(8)]);
var inst_78533 = (state_78546[(9)]);
var inst_78525 = (state_78546[(7)]);
var inst_78533__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_78525,inst_78529) : f.call(null,inst_78525,inst_78529));
var inst_78534 = cljs.core.reduced_QMARK_(inst_78533__$1);
var state_78546__$1 = (function (){var statearr_78564 = state_78546;
(statearr_78564[(9)] = inst_78533__$1);

return statearr_78564;
})();
if(inst_78534){
var statearr_78565_80954 = state_78546__$1;
(statearr_78565_80954[(1)] = (8));

} else {
var statearr_78569_80955 = state_78546__$1;
(statearr_78569_80955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78547 === (3))){
var inst_78544 = (state_78546[(2)]);
var state_78546__$1 = state_78546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78546__$1,inst_78544);
} else {
if((state_val_78547 === (2))){
var state_78546__$1 = state_78546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78546__$1,(4),ch);
} else {
if((state_val_78547 === (9))){
var inst_78533 = (state_78546[(9)]);
var inst_78525 = inst_78533;
var state_78546__$1 = (function (){var statearr_78574 = state_78546;
(statearr_78574[(7)] = inst_78525);

return statearr_78574;
})();
var statearr_78576_80956 = state_78546__$1;
(statearr_78576_80956[(2)] = null);

(statearr_78576_80956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78547 === (5))){
var inst_78525 = (state_78546[(7)]);
var state_78546__$1 = state_78546;
var statearr_78577_80957 = state_78546__$1;
(statearr_78577_80957[(2)] = inst_78525);

(statearr_78577_80957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78547 === (10))){
var inst_78540 = (state_78546[(2)]);
var state_78546__$1 = state_78546;
var statearr_78582_80958 = state_78546__$1;
(statearr_78582_80958[(2)] = inst_78540);

(statearr_78582_80958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78547 === (8))){
var inst_78533 = (state_78546[(9)]);
var inst_78536 = cljs.core.deref(inst_78533);
var state_78546__$1 = state_78546;
var statearr_78591_80959 = state_78546__$1;
(statearr_78591_80959[(2)] = inst_78536);

(statearr_78591_80959[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__77504__auto__ = null;
var cljs$core$async$reduce_$_state_machine__77504__auto____0 = (function (){
var statearr_78592 = [null,null,null,null,null,null,null,null,null,null];
(statearr_78592[(0)] = cljs$core$async$reduce_$_state_machine__77504__auto__);

(statearr_78592[(1)] = (1));

return statearr_78592;
});
var cljs$core$async$reduce_$_state_machine__77504__auto____1 = (function (state_78546){
while(true){
var ret_value__77505__auto__ = (function (){try{while(true){
var result__77506__auto__ = switch__77503__auto__(state_78546);
if(cljs.core.keyword_identical_QMARK_(result__77506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77506__auto__;
}
break;
}
}catch (e78593){var ex__77507__auto__ = e78593;
var statearr_78594_80960 = state_78546;
(statearr_78594_80960[(2)] = ex__77507__auto__);


if(cljs.core.seq((state_78546[(4)]))){
var statearr_78598_80961 = state_78546;
(statearr_78598_80961[(1)] = cljs.core.first((state_78546[(4)])));

} else {
throw ex__77507__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80962 = state_78546;
state_78546 = G__80962;
continue;
} else {
return ret_value__77505__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__77504__auto__ = function(state_78546){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__77504__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__77504__auto____1.call(this,state_78546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__77504__auto____0;
cljs$core$async$reduce_$_state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__77504__auto____1;
return cljs$core$async$reduce_$_state_machine__77504__auto__;
})()
})();
var state__77711__auto__ = (function (){var statearr_78599 = f__77710__auto__();
(statearr_78599[(6)] = c__77709__auto__);

return statearr_78599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77711__auto__);
}));

return c__77709__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__77709__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77710__auto__ = (function (){var switch__77503__auto__ = (function (state_78610){
var state_val_78611 = (state_78610[(1)]);
if((state_val_78611 === (1))){
var inst_78605 = cljs.core.async.reduce(f__$1,init,ch);
var state_78610__$1 = state_78610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78610__$1,(2),inst_78605);
} else {
if((state_val_78611 === (2))){
var inst_78607 = (state_78610[(2)]);
var inst_78608 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_78607) : f__$1.call(null,inst_78607));
var state_78610__$1 = state_78610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78610__$1,inst_78608);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__77504__auto__ = null;
var cljs$core$async$transduce_$_state_machine__77504__auto____0 = (function (){
var statearr_78614 = [null,null,null,null,null,null,null];
(statearr_78614[(0)] = cljs$core$async$transduce_$_state_machine__77504__auto__);

(statearr_78614[(1)] = (1));

return statearr_78614;
});
var cljs$core$async$transduce_$_state_machine__77504__auto____1 = (function (state_78610){
while(true){
var ret_value__77505__auto__ = (function (){try{while(true){
var result__77506__auto__ = switch__77503__auto__(state_78610);
if(cljs.core.keyword_identical_QMARK_(result__77506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77506__auto__;
}
break;
}
}catch (e78619){var ex__77507__auto__ = e78619;
var statearr_78620_80963 = state_78610;
(statearr_78620_80963[(2)] = ex__77507__auto__);


if(cljs.core.seq((state_78610[(4)]))){
var statearr_78621_80964 = state_78610;
(statearr_78621_80964[(1)] = cljs.core.first((state_78610[(4)])));

} else {
throw ex__77507__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80965 = state_78610;
state_78610 = G__80965;
continue;
} else {
return ret_value__77505__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__77504__auto__ = function(state_78610){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__77504__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__77504__auto____1.call(this,state_78610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__77504__auto____0;
cljs$core$async$transduce_$_state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__77504__auto____1;
return cljs$core$async$transduce_$_state_machine__77504__auto__;
})()
})();
var state__77711__auto__ = (function (){var statearr_78623 = f__77710__auto__();
(statearr_78623[(6)] = c__77709__auto__);

return statearr_78623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77711__auto__);
}));

return c__77709__auto__;
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
var G__78641 = arguments.length;
switch (G__78641) {
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
var c__77709__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77710__auto__ = (function (){var switch__77503__auto__ = (function (state_78670){
var state_val_78671 = (state_78670[(1)]);
if((state_val_78671 === (7))){
var inst_78652 = (state_78670[(2)]);
var state_78670__$1 = state_78670;
var statearr_78677_80967 = state_78670__$1;
(statearr_78677_80967[(2)] = inst_78652);

(statearr_78677_80967[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78671 === (1))){
var inst_78643 = cljs.core.seq(coll);
var inst_78644 = inst_78643;
var state_78670__$1 = (function (){var statearr_78679 = state_78670;
(statearr_78679[(7)] = inst_78644);

return statearr_78679;
})();
var statearr_78680_80968 = state_78670__$1;
(statearr_78680_80968[(2)] = null);

(statearr_78680_80968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78671 === (4))){
var inst_78644 = (state_78670[(7)]);
var inst_78650 = cljs.core.first(inst_78644);
var state_78670__$1 = state_78670;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_78670__$1,(7),ch,inst_78650);
} else {
if((state_val_78671 === (13))){
var inst_78664 = (state_78670[(2)]);
var state_78670__$1 = state_78670;
var statearr_78684_80969 = state_78670__$1;
(statearr_78684_80969[(2)] = inst_78664);

(statearr_78684_80969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78671 === (6))){
var inst_78655 = (state_78670[(2)]);
var state_78670__$1 = state_78670;
if(cljs.core.truth_(inst_78655)){
var statearr_78687_80970 = state_78670__$1;
(statearr_78687_80970[(1)] = (8));

} else {
var statearr_78692_80971 = state_78670__$1;
(statearr_78692_80971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78671 === (3))){
var inst_78668 = (state_78670[(2)]);
var state_78670__$1 = state_78670;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78670__$1,inst_78668);
} else {
if((state_val_78671 === (12))){
var state_78670__$1 = state_78670;
var statearr_78696_80972 = state_78670__$1;
(statearr_78696_80972[(2)] = null);

(statearr_78696_80972[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78671 === (2))){
var inst_78644 = (state_78670[(7)]);
var state_78670__$1 = state_78670;
if(cljs.core.truth_(inst_78644)){
var statearr_78698_80973 = state_78670__$1;
(statearr_78698_80973[(1)] = (4));

} else {
var statearr_78699_80974 = state_78670__$1;
(statearr_78699_80974[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78671 === (11))){
var inst_78661 = cljs.core.async.close_BANG_(ch);
var state_78670__$1 = state_78670;
var statearr_78702_80975 = state_78670__$1;
(statearr_78702_80975[(2)] = inst_78661);

(statearr_78702_80975[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78671 === (9))){
var state_78670__$1 = state_78670;
if(cljs.core.truth_(close_QMARK_)){
var statearr_78704_80976 = state_78670__$1;
(statearr_78704_80976[(1)] = (11));

} else {
var statearr_78705_80977 = state_78670__$1;
(statearr_78705_80977[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78671 === (5))){
var inst_78644 = (state_78670[(7)]);
var state_78670__$1 = state_78670;
var statearr_78708_80978 = state_78670__$1;
(statearr_78708_80978[(2)] = inst_78644);

(statearr_78708_80978[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78671 === (10))){
var inst_78666 = (state_78670[(2)]);
var state_78670__$1 = state_78670;
var statearr_78710_80979 = state_78670__$1;
(statearr_78710_80979[(2)] = inst_78666);

(statearr_78710_80979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78671 === (8))){
var inst_78644 = (state_78670[(7)]);
var inst_78657 = cljs.core.next(inst_78644);
var inst_78644__$1 = inst_78657;
var state_78670__$1 = (function (){var statearr_78711 = state_78670;
(statearr_78711[(7)] = inst_78644__$1);

return statearr_78711;
})();
var statearr_78712_80980 = state_78670__$1;
(statearr_78712_80980[(2)] = null);

(statearr_78712_80980[(1)] = (2));


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
var cljs$core$async$state_machine__77504__auto__ = null;
var cljs$core$async$state_machine__77504__auto____0 = (function (){
var statearr_78713 = [null,null,null,null,null,null,null,null];
(statearr_78713[(0)] = cljs$core$async$state_machine__77504__auto__);

(statearr_78713[(1)] = (1));

return statearr_78713;
});
var cljs$core$async$state_machine__77504__auto____1 = (function (state_78670){
while(true){
var ret_value__77505__auto__ = (function (){try{while(true){
var result__77506__auto__ = switch__77503__auto__(state_78670);
if(cljs.core.keyword_identical_QMARK_(result__77506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77506__auto__;
}
break;
}
}catch (e78714){var ex__77507__auto__ = e78714;
var statearr_78715_80982 = state_78670;
(statearr_78715_80982[(2)] = ex__77507__auto__);


if(cljs.core.seq((state_78670[(4)]))){
var statearr_78716_80984 = state_78670;
(statearr_78716_80984[(1)] = cljs.core.first((state_78670[(4)])));

} else {
throw ex__77507__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80985 = state_78670;
state_78670 = G__80985;
continue;
} else {
return ret_value__77505__auto__;
}
break;
}
});
cljs$core$async$state_machine__77504__auto__ = function(state_78670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__77504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__77504__auto____1.call(this,state_78670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__77504__auto____0;
cljs$core$async$state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__77504__auto____1;
return cljs$core$async$state_machine__77504__auto__;
})()
})();
var state__77711__auto__ = (function (){var statearr_78718 = f__77710__auto__();
(statearr_78718[(6)] = c__77709__auto__);

return statearr_78718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77711__auto__);
}));

return c__77709__auto__;
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
var G__78722 = arguments.length;
switch (G__78722) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_80988 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_80988(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_80990 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_80990(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_80991 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_80991(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_80992 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_80992(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async78754 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async78754 = (function (ch,cs,meta78755){
this.ch = ch;
this.cs = cs;
this.meta78755 = meta78755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async78754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_78756,meta78755__$1){
var self__ = this;
var _78756__$1 = this;
return (new cljs.core.async.t_cljs$core$async78754(self__.ch,self__.cs,meta78755__$1));
}));

(cljs.core.async.t_cljs$core$async78754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_78756){
var self__ = this;
var _78756__$1 = this;
return self__.meta78755;
}));

(cljs.core.async.t_cljs$core$async78754.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async78754.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async78754.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async78754.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async78754.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async78754.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async78754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta78755","meta78755",-581478433,null)], null);
}));

(cljs.core.async.t_cljs$core$async78754.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async78754.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async78754");

(cljs.core.async.t_cljs$core$async78754.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async78754");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async78754.
 */
cljs.core.async.__GT_t_cljs$core$async78754 = (function cljs$core$async$mult_$___GT_t_cljs$core$async78754(ch__$1,cs__$1,meta78755){
return (new cljs.core.async.t_cljs$core$async78754(ch__$1,cs__$1,meta78755));
});

}

return (new cljs.core.async.t_cljs$core$async78754(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__77709__auto___80997 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77710__auto__ = (function (){var switch__77503__auto__ = (function (state_78922){
var state_val_78923 = (state_78922[(1)]);
if((state_val_78923 === (7))){
var inst_78918 = (state_78922[(2)]);
var state_78922__$1 = state_78922;
var statearr_78924_80998 = state_78922__$1;
(statearr_78924_80998[(2)] = inst_78918);

(statearr_78924_80998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (20))){
var inst_78820 = (state_78922[(7)]);
var inst_78832 = cljs.core.first(inst_78820);
var inst_78833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78832,(0),null);
var inst_78834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78832,(1),null);
var state_78922__$1 = (function (){var statearr_78925 = state_78922;
(statearr_78925[(8)] = inst_78833);

return statearr_78925;
})();
if(cljs.core.truth_(inst_78834)){
var statearr_78926_80999 = state_78922__$1;
(statearr_78926_80999[(1)] = (22));

} else {
var statearr_78936_81000 = state_78922__$1;
(statearr_78936_81000[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (27))){
var inst_78865 = (state_78922[(9)]);
var inst_78867 = (state_78922[(10)]);
var inst_78783 = (state_78922[(11)]);
var inst_78872 = (state_78922[(12)]);
var inst_78872__$1 = cljs.core._nth(inst_78865,inst_78867);
var inst_78873 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_78872__$1,inst_78783,done);
var state_78922__$1 = (function (){var statearr_78941 = state_78922;
(statearr_78941[(12)] = inst_78872__$1);

return statearr_78941;
})();
if(cljs.core.truth_(inst_78873)){
var statearr_78942_81001 = state_78922__$1;
(statearr_78942_81001[(1)] = (30));

} else {
var statearr_78943_81002 = state_78922__$1;
(statearr_78943_81002[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (1))){
var state_78922__$1 = state_78922;
var statearr_78944_81003 = state_78922__$1;
(statearr_78944_81003[(2)] = null);

(statearr_78944_81003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (24))){
var inst_78820 = (state_78922[(7)]);
var inst_78839 = (state_78922[(2)]);
var inst_78840 = cljs.core.next(inst_78820);
var inst_78793 = inst_78840;
var inst_78794 = null;
var inst_78795 = (0);
var inst_78796 = (0);
var state_78922__$1 = (function (){var statearr_78945 = state_78922;
(statearr_78945[(13)] = inst_78795);

(statearr_78945[(14)] = inst_78796);

(statearr_78945[(15)] = inst_78793);

(statearr_78945[(16)] = inst_78794);

(statearr_78945[(17)] = inst_78839);

return statearr_78945;
})();
var statearr_78946_81004 = state_78922__$1;
(statearr_78946_81004[(2)] = null);

(statearr_78946_81004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (39))){
var state_78922__$1 = state_78922;
var statearr_78950_81005 = state_78922__$1;
(statearr_78950_81005[(2)] = null);

(statearr_78950_81005[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (4))){
var inst_78783 = (state_78922[(11)]);
var inst_78783__$1 = (state_78922[(2)]);
var inst_78784 = (inst_78783__$1 == null);
var state_78922__$1 = (function (){var statearr_78955 = state_78922;
(statearr_78955[(11)] = inst_78783__$1);

return statearr_78955;
})();
if(cljs.core.truth_(inst_78784)){
var statearr_78957_81006 = state_78922__$1;
(statearr_78957_81006[(1)] = (5));

} else {
var statearr_78958_81007 = state_78922__$1;
(statearr_78958_81007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (15))){
var inst_78795 = (state_78922[(13)]);
var inst_78796 = (state_78922[(14)]);
var inst_78793 = (state_78922[(15)]);
var inst_78794 = (state_78922[(16)]);
var inst_78816 = (state_78922[(2)]);
var inst_78817 = (inst_78796 + (1));
var tmp78947 = inst_78795;
var tmp78948 = inst_78793;
var tmp78949 = inst_78794;
var inst_78793__$1 = tmp78948;
var inst_78794__$1 = tmp78949;
var inst_78795__$1 = tmp78947;
var inst_78796__$1 = inst_78817;
var state_78922__$1 = (function (){var statearr_78963 = state_78922;
(statearr_78963[(13)] = inst_78795__$1);

(statearr_78963[(14)] = inst_78796__$1);

(statearr_78963[(15)] = inst_78793__$1);

(statearr_78963[(16)] = inst_78794__$1);

(statearr_78963[(18)] = inst_78816);

return statearr_78963;
})();
var statearr_78964_81008 = state_78922__$1;
(statearr_78964_81008[(2)] = null);

(statearr_78964_81008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (21))){
var inst_78843 = (state_78922[(2)]);
var state_78922__$1 = state_78922;
var statearr_78968_81009 = state_78922__$1;
(statearr_78968_81009[(2)] = inst_78843);

(statearr_78968_81009[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (31))){
var inst_78872 = (state_78922[(12)]);
var inst_78876 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_78872);
var state_78922__$1 = state_78922;
var statearr_78969_81010 = state_78922__$1;
(statearr_78969_81010[(2)] = inst_78876);

(statearr_78969_81010[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (32))){
var inst_78866 = (state_78922[(19)]);
var inst_78865 = (state_78922[(9)]);
var inst_78864 = (state_78922[(20)]);
var inst_78867 = (state_78922[(10)]);
var inst_78878 = (state_78922[(2)]);
var inst_78879 = (inst_78867 + (1));
var tmp78965 = inst_78866;
var tmp78966 = inst_78865;
var tmp78967 = inst_78864;
var inst_78864__$1 = tmp78967;
var inst_78865__$1 = tmp78966;
var inst_78866__$1 = tmp78965;
var inst_78867__$1 = inst_78879;
var state_78922__$1 = (function (){var statearr_78970 = state_78922;
(statearr_78970[(19)] = inst_78866__$1);

(statearr_78970[(9)] = inst_78865__$1);

(statearr_78970[(20)] = inst_78864__$1);

(statearr_78970[(10)] = inst_78867__$1);

(statearr_78970[(21)] = inst_78878);

return statearr_78970;
})();
var statearr_78971_81011 = state_78922__$1;
(statearr_78971_81011[(2)] = null);

(statearr_78971_81011[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (40))){
var inst_78891 = (state_78922[(22)]);
var inst_78895 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_78891);
var state_78922__$1 = state_78922;
var statearr_78976_81012 = state_78922__$1;
(statearr_78976_81012[(2)] = inst_78895);

(statearr_78976_81012[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (33))){
var inst_78882 = (state_78922[(23)]);
var inst_78884 = cljs.core.chunked_seq_QMARK_(inst_78882);
var state_78922__$1 = state_78922;
if(inst_78884){
var statearr_78977_81013 = state_78922__$1;
(statearr_78977_81013[(1)] = (36));

} else {
var statearr_78978_81014 = state_78922__$1;
(statearr_78978_81014[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (13))){
var inst_78810 = (state_78922[(24)]);
var inst_78813 = cljs.core.async.close_BANG_(inst_78810);
var state_78922__$1 = state_78922;
var statearr_78979_81017 = state_78922__$1;
(statearr_78979_81017[(2)] = inst_78813);

(statearr_78979_81017[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (22))){
var inst_78833 = (state_78922[(8)]);
var inst_78836 = cljs.core.async.close_BANG_(inst_78833);
var state_78922__$1 = state_78922;
var statearr_78981_81018 = state_78922__$1;
(statearr_78981_81018[(2)] = inst_78836);

(statearr_78981_81018[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (36))){
var inst_78882 = (state_78922[(23)]);
var inst_78886 = cljs.core.chunk_first(inst_78882);
var inst_78887 = cljs.core.chunk_rest(inst_78882);
var inst_78888 = cljs.core.count(inst_78886);
var inst_78864 = inst_78887;
var inst_78865 = inst_78886;
var inst_78866 = inst_78888;
var inst_78867 = (0);
var state_78922__$1 = (function (){var statearr_78982 = state_78922;
(statearr_78982[(19)] = inst_78866);

(statearr_78982[(9)] = inst_78865);

(statearr_78982[(20)] = inst_78864);

(statearr_78982[(10)] = inst_78867);

return statearr_78982;
})();
var statearr_78983_81019 = state_78922__$1;
(statearr_78983_81019[(2)] = null);

(statearr_78983_81019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (41))){
var inst_78882 = (state_78922[(23)]);
var inst_78897 = (state_78922[(2)]);
var inst_78898 = cljs.core.next(inst_78882);
var inst_78864 = inst_78898;
var inst_78865 = null;
var inst_78866 = (0);
var inst_78867 = (0);
var state_78922__$1 = (function (){var statearr_78984 = state_78922;
(statearr_78984[(19)] = inst_78866);

(statearr_78984[(9)] = inst_78865);

(statearr_78984[(20)] = inst_78864);

(statearr_78984[(10)] = inst_78867);

(statearr_78984[(25)] = inst_78897);

return statearr_78984;
})();
var statearr_78985_81020 = state_78922__$1;
(statearr_78985_81020[(2)] = null);

(statearr_78985_81020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (43))){
var state_78922__$1 = state_78922;
var statearr_78986_81021 = state_78922__$1;
(statearr_78986_81021[(2)] = null);

(statearr_78986_81021[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (29))){
var inst_78906 = (state_78922[(2)]);
var state_78922__$1 = state_78922;
var statearr_78987_81022 = state_78922__$1;
(statearr_78987_81022[(2)] = inst_78906);

(statearr_78987_81022[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (44))){
var inst_78915 = (state_78922[(2)]);
var state_78922__$1 = (function (){var statearr_78988 = state_78922;
(statearr_78988[(26)] = inst_78915);

return statearr_78988;
})();
var statearr_78989_81023 = state_78922__$1;
(statearr_78989_81023[(2)] = null);

(statearr_78989_81023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (6))){
var inst_78853 = (state_78922[(27)]);
var inst_78852 = cljs.core.deref(cs);
var inst_78853__$1 = cljs.core.keys(inst_78852);
var inst_78854 = cljs.core.count(inst_78853__$1);
var inst_78855 = cljs.core.reset_BANG_(dctr,inst_78854);
var inst_78863 = cljs.core.seq(inst_78853__$1);
var inst_78864 = inst_78863;
var inst_78865 = null;
var inst_78866 = (0);
var inst_78867 = (0);
var state_78922__$1 = (function (){var statearr_78990 = state_78922;
(statearr_78990[(28)] = inst_78855);

(statearr_78990[(27)] = inst_78853__$1);

(statearr_78990[(19)] = inst_78866);

(statearr_78990[(9)] = inst_78865);

(statearr_78990[(20)] = inst_78864);

(statearr_78990[(10)] = inst_78867);

return statearr_78990;
})();
var statearr_78991_81024 = state_78922__$1;
(statearr_78991_81024[(2)] = null);

(statearr_78991_81024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (28))){
var inst_78864 = (state_78922[(20)]);
var inst_78882 = (state_78922[(23)]);
var inst_78882__$1 = cljs.core.seq(inst_78864);
var state_78922__$1 = (function (){var statearr_78992 = state_78922;
(statearr_78992[(23)] = inst_78882__$1);

return statearr_78992;
})();
if(inst_78882__$1){
var statearr_78993_81039 = state_78922__$1;
(statearr_78993_81039[(1)] = (33));

} else {
var statearr_78994_81040 = state_78922__$1;
(statearr_78994_81040[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (25))){
var inst_78866 = (state_78922[(19)]);
var inst_78867 = (state_78922[(10)]);
var inst_78869 = (inst_78867 < inst_78866);
var inst_78870 = inst_78869;
var state_78922__$1 = state_78922;
if(cljs.core.truth_(inst_78870)){
var statearr_78995_81041 = state_78922__$1;
(statearr_78995_81041[(1)] = (27));

} else {
var statearr_78996_81042 = state_78922__$1;
(statearr_78996_81042[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (34))){
var state_78922__$1 = state_78922;
var statearr_78997_81043 = state_78922__$1;
(statearr_78997_81043[(2)] = null);

(statearr_78997_81043[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (17))){
var state_78922__$1 = state_78922;
var statearr_78998_81047 = state_78922__$1;
(statearr_78998_81047[(2)] = null);

(statearr_78998_81047[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (3))){
var inst_78920 = (state_78922[(2)]);
var state_78922__$1 = state_78922;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78922__$1,inst_78920);
} else {
if((state_val_78923 === (12))){
var inst_78848 = (state_78922[(2)]);
var state_78922__$1 = state_78922;
var statearr_78999_81052 = state_78922__$1;
(statearr_78999_81052[(2)] = inst_78848);

(statearr_78999_81052[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (2))){
var state_78922__$1 = state_78922;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78922__$1,(4),ch);
} else {
if((state_val_78923 === (23))){
var state_78922__$1 = state_78922;
var statearr_79010_81056 = state_78922__$1;
(statearr_79010_81056[(2)] = null);

(statearr_79010_81056[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (35))){
var inst_78904 = (state_78922[(2)]);
var state_78922__$1 = state_78922;
var statearr_79022_81060 = state_78922__$1;
(statearr_79022_81060[(2)] = inst_78904);

(statearr_79022_81060[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (19))){
var inst_78820 = (state_78922[(7)]);
var inst_78824 = cljs.core.chunk_first(inst_78820);
var inst_78825 = cljs.core.chunk_rest(inst_78820);
var inst_78826 = cljs.core.count(inst_78824);
var inst_78793 = inst_78825;
var inst_78794 = inst_78824;
var inst_78795 = inst_78826;
var inst_78796 = (0);
var state_78922__$1 = (function (){var statearr_79034 = state_78922;
(statearr_79034[(13)] = inst_78795);

(statearr_79034[(14)] = inst_78796);

(statearr_79034[(15)] = inst_78793);

(statearr_79034[(16)] = inst_78794);

return statearr_79034;
})();
var statearr_79035_81065 = state_78922__$1;
(statearr_79035_81065[(2)] = null);

(statearr_79035_81065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (11))){
var inst_78793 = (state_78922[(15)]);
var inst_78820 = (state_78922[(7)]);
var inst_78820__$1 = cljs.core.seq(inst_78793);
var state_78922__$1 = (function (){var statearr_79036 = state_78922;
(statearr_79036[(7)] = inst_78820__$1);

return statearr_79036;
})();
if(inst_78820__$1){
var statearr_79037_81066 = state_78922__$1;
(statearr_79037_81066[(1)] = (16));

} else {
var statearr_79038_81067 = state_78922__$1;
(statearr_79038_81067[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (9))){
var inst_78850 = (state_78922[(2)]);
var state_78922__$1 = state_78922;
var statearr_79039_81071 = state_78922__$1;
(statearr_79039_81071[(2)] = inst_78850);

(statearr_79039_81071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (5))){
var inst_78790 = cljs.core.deref(cs);
var inst_78791 = cljs.core.seq(inst_78790);
var inst_78793 = inst_78791;
var inst_78794 = null;
var inst_78795 = (0);
var inst_78796 = (0);
var state_78922__$1 = (function (){var statearr_79040 = state_78922;
(statearr_79040[(13)] = inst_78795);

(statearr_79040[(14)] = inst_78796);

(statearr_79040[(15)] = inst_78793);

(statearr_79040[(16)] = inst_78794);

return statearr_79040;
})();
var statearr_79042_81072 = state_78922__$1;
(statearr_79042_81072[(2)] = null);

(statearr_79042_81072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (14))){
var state_78922__$1 = state_78922;
var statearr_79043_81073 = state_78922__$1;
(statearr_79043_81073[(2)] = null);

(statearr_79043_81073[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (45))){
var inst_78912 = (state_78922[(2)]);
var state_78922__$1 = state_78922;
var statearr_79050_81074 = state_78922__$1;
(statearr_79050_81074[(2)] = inst_78912);

(statearr_79050_81074[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (26))){
var inst_78853 = (state_78922[(27)]);
var inst_78908 = (state_78922[(2)]);
var inst_78909 = cljs.core.seq(inst_78853);
var state_78922__$1 = (function (){var statearr_79056 = state_78922;
(statearr_79056[(29)] = inst_78908);

return statearr_79056;
})();
if(inst_78909){
var statearr_79057_81076 = state_78922__$1;
(statearr_79057_81076[(1)] = (42));

} else {
var statearr_79058_81077 = state_78922__$1;
(statearr_79058_81077[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (16))){
var inst_78820 = (state_78922[(7)]);
var inst_78822 = cljs.core.chunked_seq_QMARK_(inst_78820);
var state_78922__$1 = state_78922;
if(inst_78822){
var statearr_79069_81078 = state_78922__$1;
(statearr_79069_81078[(1)] = (19));

} else {
var statearr_79071_81080 = state_78922__$1;
(statearr_79071_81080[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (38))){
var inst_78901 = (state_78922[(2)]);
var state_78922__$1 = state_78922;
var statearr_79085_81081 = state_78922__$1;
(statearr_79085_81081[(2)] = inst_78901);

(statearr_79085_81081[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (30))){
var state_78922__$1 = state_78922;
var statearr_79086_81082 = state_78922__$1;
(statearr_79086_81082[(2)] = null);

(statearr_79086_81082[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (10))){
var inst_78796 = (state_78922[(14)]);
var inst_78794 = (state_78922[(16)]);
var inst_78809 = cljs.core._nth(inst_78794,inst_78796);
var inst_78810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78809,(0),null);
var inst_78811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78809,(1),null);
var state_78922__$1 = (function (){var statearr_79087 = state_78922;
(statearr_79087[(24)] = inst_78810);

return statearr_79087;
})();
if(cljs.core.truth_(inst_78811)){
var statearr_79088_81084 = state_78922__$1;
(statearr_79088_81084[(1)] = (13));

} else {
var statearr_79089_81085 = state_78922__$1;
(statearr_79089_81085[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (18))){
var inst_78846 = (state_78922[(2)]);
var state_78922__$1 = state_78922;
var statearr_79094_81086 = state_78922__$1;
(statearr_79094_81086[(2)] = inst_78846);

(statearr_79094_81086[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (42))){
var state_78922__$1 = state_78922;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78922__$1,(45),dchan);
} else {
if((state_val_78923 === (37))){
var inst_78891 = (state_78922[(22)]);
var inst_78783 = (state_78922[(11)]);
var inst_78882 = (state_78922[(23)]);
var inst_78891__$1 = cljs.core.first(inst_78882);
var inst_78892 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_78891__$1,inst_78783,done);
var state_78922__$1 = (function (){var statearr_79108 = state_78922;
(statearr_79108[(22)] = inst_78891__$1);

return statearr_79108;
})();
if(cljs.core.truth_(inst_78892)){
var statearr_79113_81087 = state_78922__$1;
(statearr_79113_81087[(1)] = (39));

} else {
var statearr_79114_81089 = state_78922__$1;
(statearr_79114_81089[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78923 === (8))){
var inst_78795 = (state_78922[(13)]);
var inst_78796 = (state_78922[(14)]);
var inst_78798 = (inst_78796 < inst_78795);
var inst_78799 = inst_78798;
var state_78922__$1 = state_78922;
if(cljs.core.truth_(inst_78799)){
var statearr_79121_81090 = state_78922__$1;
(statearr_79121_81090[(1)] = (10));

} else {
var statearr_79133_81091 = state_78922__$1;
(statearr_79133_81091[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__77504__auto__ = null;
var cljs$core$async$mult_$_state_machine__77504__auto____0 = (function (){
var statearr_79143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79143[(0)] = cljs$core$async$mult_$_state_machine__77504__auto__);

(statearr_79143[(1)] = (1));

return statearr_79143;
});
var cljs$core$async$mult_$_state_machine__77504__auto____1 = (function (state_78922){
while(true){
var ret_value__77505__auto__ = (function (){try{while(true){
var result__77506__auto__ = switch__77503__auto__(state_78922);
if(cljs.core.keyword_identical_QMARK_(result__77506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77506__auto__;
}
break;
}
}catch (e79146){var ex__77507__auto__ = e79146;
var statearr_79148_81092 = state_78922;
(statearr_79148_81092[(2)] = ex__77507__auto__);


if(cljs.core.seq((state_78922[(4)]))){
var statearr_79150_81093 = state_78922;
(statearr_79150_81093[(1)] = cljs.core.first((state_78922[(4)])));

} else {
throw ex__77507__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81094 = state_78922;
state_78922 = G__81094;
continue;
} else {
return ret_value__77505__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__77504__auto__ = function(state_78922){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__77504__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__77504__auto____1.call(this,state_78922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__77504__auto____0;
cljs$core$async$mult_$_state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__77504__auto____1;
return cljs$core$async$mult_$_state_machine__77504__auto__;
})()
})();
var state__77711__auto__ = (function (){var statearr_79168 = f__77710__auto__();
(statearr_79168[(6)] = c__77709__auto___80997);

return statearr_79168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77711__auto__);
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
var G__79176 = arguments.length;
switch (G__79176) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_81096 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_81096(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_81097 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_81097(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_81098 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_81098(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_81099 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_81099(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_81100 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_81100(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___81101 = arguments.length;
var i__4865__auto___81102 = (0);
while(true){
if((i__4865__auto___81102 < len__4864__auto___81101)){
args__4870__auto__.push((arguments[i__4865__auto___81102]));

var G__81103 = (i__4865__auto___81102 + (1));
i__4865__auto___81102 = G__81103;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__79264){
var map__79265 = p__79264;
var map__79265__$1 = cljs.core.__destructure_map(map__79265);
var opts = map__79265__$1;
var statearr_79266_81104 = state;
(statearr_79266_81104[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_79271_81105 = state;
(statearr_79271_81105[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_79272_81106 = state;
(statearr_79272_81106[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq79257){
var G__79258 = cljs.core.first(seq79257);
var seq79257__$1 = cljs.core.next(seq79257);
var G__79259 = cljs.core.first(seq79257__$1);
var seq79257__$2 = cljs.core.next(seq79257__$1);
var G__79260 = cljs.core.first(seq79257__$2);
var seq79257__$3 = cljs.core.next(seq79257__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79258,G__79259,G__79260,seq79257__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async79303 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79303 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta79304){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta79304 = meta79304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async79303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79305,meta79304__$1){
var self__ = this;
var _79305__$1 = this;
return (new cljs.core.async.t_cljs$core$async79303(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta79304__$1));
}));

(cljs.core.async.t_cljs$core$async79303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79305){
var self__ = this;
var _79305__$1 = this;
return self__.meta79304;
}));

(cljs.core.async.t_cljs$core$async79303.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79303.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async79303.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79303.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async79303.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async79303.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async79303.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async79303.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async79303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta79304","meta79304",1269462707,null)], null);
}));

(cljs.core.async.t_cljs$core$async79303.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async79303.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79303");

(cljs.core.async.t_cljs$core$async79303.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async79303");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async79303.
 */
cljs.core.async.__GT_t_cljs$core$async79303 = (function cljs$core$async$mix_$___GT_t_cljs$core$async79303(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta79304){
return (new cljs.core.async.t_cljs$core$async79303(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta79304));
});

}

return (new cljs.core.async.t_cljs$core$async79303(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__77709__auto___81107 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77710__auto__ = (function (){var switch__77503__auto__ = (function (state_79423){
var state_val_79424 = (state_79423[(1)]);
if((state_val_79424 === (7))){
var inst_79383 = (state_79423[(2)]);
var state_79423__$1 = state_79423;
if(cljs.core.truth_(inst_79383)){
var statearr_79425_81108 = state_79423__$1;
(statearr_79425_81108[(1)] = (8));

} else {
var statearr_79426_81109 = state_79423__$1;
(statearr_79426_81109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (20))){
var inst_79375 = (state_79423[(7)]);
var state_79423__$1 = state_79423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79423__$1,(23),out,inst_79375);
} else {
if((state_val_79424 === (1))){
var inst_79358 = calc_state();
var inst_79359 = cljs.core.__destructure_map(inst_79358);
var inst_79360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_79359,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_79361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_79359,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_79362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_79359,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_79363 = inst_79358;
var state_79423__$1 = (function (){var statearr_79427 = state_79423;
(statearr_79427[(8)] = inst_79362);

(statearr_79427[(9)] = inst_79363);

(statearr_79427[(10)] = inst_79361);

(statearr_79427[(11)] = inst_79360);

return statearr_79427;
})();
var statearr_79428_81110 = state_79423__$1;
(statearr_79428_81110[(2)] = null);

(statearr_79428_81110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (24))){
var inst_79366 = (state_79423[(12)]);
var inst_79363 = inst_79366;
var state_79423__$1 = (function (){var statearr_79430 = state_79423;
(statearr_79430[(9)] = inst_79363);

return statearr_79430;
})();
var statearr_79431_81111 = state_79423__$1;
(statearr_79431_81111[(2)] = null);

(statearr_79431_81111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (4))){
var inst_79378 = (state_79423[(13)]);
var inst_79375 = (state_79423[(7)]);
var inst_79374 = (state_79423[(2)]);
var inst_79375__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_79374,(0),null);
var inst_79376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_79374,(1),null);
var inst_79378__$1 = (inst_79375__$1 == null);
var state_79423__$1 = (function (){var statearr_79432 = state_79423;
(statearr_79432[(14)] = inst_79376);

(statearr_79432[(13)] = inst_79378__$1);

(statearr_79432[(7)] = inst_79375__$1);

return statearr_79432;
})();
if(cljs.core.truth_(inst_79378__$1)){
var statearr_79433_81112 = state_79423__$1;
(statearr_79433_81112[(1)] = (5));

} else {
var statearr_79434_81113 = state_79423__$1;
(statearr_79434_81113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (15))){
var inst_79397 = (state_79423[(15)]);
var inst_79367 = (state_79423[(16)]);
var inst_79397__$1 = cljs.core.empty_QMARK_(inst_79367);
var state_79423__$1 = (function (){var statearr_79435 = state_79423;
(statearr_79435[(15)] = inst_79397__$1);

return statearr_79435;
})();
if(inst_79397__$1){
var statearr_79436_81115 = state_79423__$1;
(statearr_79436_81115[(1)] = (17));

} else {
var statearr_79437_81116 = state_79423__$1;
(statearr_79437_81116[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (21))){
var inst_79366 = (state_79423[(12)]);
var inst_79363 = inst_79366;
var state_79423__$1 = (function (){var statearr_79438 = state_79423;
(statearr_79438[(9)] = inst_79363);

return statearr_79438;
})();
var statearr_79439_81117 = state_79423__$1;
(statearr_79439_81117[(2)] = null);

(statearr_79439_81117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (13))){
var inst_79390 = (state_79423[(2)]);
var inst_79391 = calc_state();
var inst_79363 = inst_79391;
var state_79423__$1 = (function (){var statearr_79440 = state_79423;
(statearr_79440[(17)] = inst_79390);

(statearr_79440[(9)] = inst_79363);

return statearr_79440;
})();
var statearr_79441_81118 = state_79423__$1;
(statearr_79441_81118[(2)] = null);

(statearr_79441_81118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (22))){
var inst_79417 = (state_79423[(2)]);
var state_79423__$1 = state_79423;
var statearr_79442_81119 = state_79423__$1;
(statearr_79442_81119[(2)] = inst_79417);

(statearr_79442_81119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (6))){
var inst_79376 = (state_79423[(14)]);
var inst_79381 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79376,change);
var state_79423__$1 = state_79423;
var statearr_79443_81120 = state_79423__$1;
(statearr_79443_81120[(2)] = inst_79381);

(statearr_79443_81120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (25))){
var state_79423__$1 = state_79423;
var statearr_79444_81121 = state_79423__$1;
(statearr_79444_81121[(2)] = null);

(statearr_79444_81121[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (17))){
var inst_79368 = (state_79423[(18)]);
var inst_79376 = (state_79423[(14)]);
var inst_79399 = (inst_79368.cljs$core$IFn$_invoke$arity$1 ? inst_79368.cljs$core$IFn$_invoke$arity$1(inst_79376) : inst_79368.call(null,inst_79376));
var inst_79400 = cljs.core.not(inst_79399);
var state_79423__$1 = state_79423;
var statearr_79445_81124 = state_79423__$1;
(statearr_79445_81124[(2)] = inst_79400);

(statearr_79445_81124[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (3))){
var inst_79421 = (state_79423[(2)]);
var state_79423__$1 = state_79423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79423__$1,inst_79421);
} else {
if((state_val_79424 === (12))){
var state_79423__$1 = state_79423;
var statearr_79446_81125 = state_79423__$1;
(statearr_79446_81125[(2)] = null);

(statearr_79446_81125[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (2))){
var inst_79363 = (state_79423[(9)]);
var inst_79366 = (state_79423[(12)]);
var inst_79366__$1 = cljs.core.__destructure_map(inst_79363);
var inst_79367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_79366__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_79368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_79366__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_79369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_79366__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_79423__$1 = (function (){var statearr_79447 = state_79423;
(statearr_79447[(16)] = inst_79367);

(statearr_79447[(18)] = inst_79368);

(statearr_79447[(12)] = inst_79366__$1);

return statearr_79447;
})();
return cljs.core.async.ioc_alts_BANG_(state_79423__$1,(4),inst_79369);
} else {
if((state_val_79424 === (23))){
var inst_79408 = (state_79423[(2)]);
var state_79423__$1 = state_79423;
if(cljs.core.truth_(inst_79408)){
var statearr_79449_81126 = state_79423__$1;
(statearr_79449_81126[(1)] = (24));

} else {
var statearr_79450_81127 = state_79423__$1;
(statearr_79450_81127[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (19))){
var inst_79403 = (state_79423[(2)]);
var state_79423__$1 = state_79423;
var statearr_79452_81131 = state_79423__$1;
(statearr_79452_81131[(2)] = inst_79403);

(statearr_79452_81131[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (11))){
var inst_79376 = (state_79423[(14)]);
var inst_79387 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_79376);
var state_79423__$1 = state_79423;
var statearr_79453_81132 = state_79423__$1;
(statearr_79453_81132[(2)] = inst_79387);

(statearr_79453_81132[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (9))){
var inst_79367 = (state_79423[(16)]);
var inst_79376 = (state_79423[(14)]);
var inst_79394 = (state_79423[(19)]);
var inst_79394__$1 = (inst_79367.cljs$core$IFn$_invoke$arity$1 ? inst_79367.cljs$core$IFn$_invoke$arity$1(inst_79376) : inst_79367.call(null,inst_79376));
var state_79423__$1 = (function (){var statearr_79454 = state_79423;
(statearr_79454[(19)] = inst_79394__$1);

return statearr_79454;
})();
if(cljs.core.truth_(inst_79394__$1)){
var statearr_79455_81133 = state_79423__$1;
(statearr_79455_81133[(1)] = (14));

} else {
var statearr_79456_81134 = state_79423__$1;
(statearr_79456_81134[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (5))){
var inst_79378 = (state_79423[(13)]);
var state_79423__$1 = state_79423;
var statearr_79457_81135 = state_79423__$1;
(statearr_79457_81135[(2)] = inst_79378);

(statearr_79457_81135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (14))){
var inst_79394 = (state_79423[(19)]);
var state_79423__$1 = state_79423;
var statearr_79458_81136 = state_79423__$1;
(statearr_79458_81136[(2)] = inst_79394);

(statearr_79458_81136[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (26))){
var inst_79413 = (state_79423[(2)]);
var state_79423__$1 = state_79423;
var statearr_79459_81137 = state_79423__$1;
(statearr_79459_81137[(2)] = inst_79413);

(statearr_79459_81137[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (16))){
var inst_79405 = (state_79423[(2)]);
var state_79423__$1 = state_79423;
if(cljs.core.truth_(inst_79405)){
var statearr_79460_81138 = state_79423__$1;
(statearr_79460_81138[(1)] = (20));

} else {
var statearr_79461_81139 = state_79423__$1;
(statearr_79461_81139[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (10))){
var inst_79419 = (state_79423[(2)]);
var state_79423__$1 = state_79423;
var statearr_79462_81140 = state_79423__$1;
(statearr_79462_81140[(2)] = inst_79419);

(statearr_79462_81140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (18))){
var inst_79397 = (state_79423[(15)]);
var state_79423__$1 = state_79423;
var statearr_79463_81142 = state_79423__$1;
(statearr_79463_81142[(2)] = inst_79397);

(statearr_79463_81142[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79424 === (8))){
var inst_79375 = (state_79423[(7)]);
var inst_79385 = (inst_79375 == null);
var state_79423__$1 = state_79423;
if(cljs.core.truth_(inst_79385)){
var statearr_79464_81143 = state_79423__$1;
(statearr_79464_81143[(1)] = (11));

} else {
var statearr_79465_81144 = state_79423__$1;
(statearr_79465_81144[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__77504__auto__ = null;
var cljs$core$async$mix_$_state_machine__77504__auto____0 = (function (){
var statearr_79469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79469[(0)] = cljs$core$async$mix_$_state_machine__77504__auto__);

(statearr_79469[(1)] = (1));

return statearr_79469;
});
var cljs$core$async$mix_$_state_machine__77504__auto____1 = (function (state_79423){
while(true){
var ret_value__77505__auto__ = (function (){try{while(true){
var result__77506__auto__ = switch__77503__auto__(state_79423);
if(cljs.core.keyword_identical_QMARK_(result__77506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77506__auto__;
}
break;
}
}catch (e79470){var ex__77507__auto__ = e79470;
var statearr_79471_81145 = state_79423;
(statearr_79471_81145[(2)] = ex__77507__auto__);


if(cljs.core.seq((state_79423[(4)]))){
var statearr_79472_81146 = state_79423;
(statearr_79472_81146[(1)] = cljs.core.first((state_79423[(4)])));

} else {
throw ex__77507__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81147 = state_79423;
state_79423 = G__81147;
continue;
} else {
return ret_value__77505__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__77504__auto__ = function(state_79423){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__77504__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__77504__auto____1.call(this,state_79423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__77504__auto____0;
cljs$core$async$mix_$_state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__77504__auto____1;
return cljs$core$async$mix_$_state_machine__77504__auto__;
})()
})();
var state__77711__auto__ = (function (){var statearr_79473 = f__77710__auto__();
(statearr_79473[(6)] = c__77709__auto___81107);

return statearr_79473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77711__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_81148 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_81148(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_81150 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_81150(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_81153 = (function() {
var G__81154 = null;
var G__81154__1 = (function (p){
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
var G__81154__2 = (function (p,v){
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
G__81154 = function(p,v){
switch(arguments.length){
case 1:
return G__81154__1.call(this,p);
case 2:
return G__81154__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__81154.cljs$core$IFn$_invoke$arity$1 = G__81154__1;
G__81154.cljs$core$IFn$_invoke$arity$2 = G__81154__2;
return G__81154;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__79499 = arguments.length;
switch (G__79499) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_81153(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_81153(p,v);
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
var G__79502 = arguments.length;
switch (G__79502) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__79500_SHARP_){
if(cljs.core.truth_((p1__79500_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__79500_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__79500_SHARP_.call(null,topic)))){
return p1__79500_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__79500_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async79503 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79503 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta79504){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta79504 = meta79504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async79503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79505,meta79504__$1){
var self__ = this;
var _79505__$1 = this;
return (new cljs.core.async.t_cljs$core$async79503(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta79504__$1));
}));

(cljs.core.async.t_cljs$core$async79503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79505){
var self__ = this;
var _79505__$1 = this;
return self__.meta79504;
}));

(cljs.core.async.t_cljs$core$async79503.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79503.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async79503.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79503.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async79503.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async79503.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async79503.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async79503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta79504","meta79504",308292009,null)], null);
}));

(cljs.core.async.t_cljs$core$async79503.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async79503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79503");

(cljs.core.async.t_cljs$core$async79503.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async79503");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async79503.
 */
cljs.core.async.__GT_t_cljs$core$async79503 = (function cljs$core$async$__GT_t_cljs$core$async79503(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta79504){
return (new cljs.core.async.t_cljs$core$async79503(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta79504));
});

}

return (new cljs.core.async.t_cljs$core$async79503(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__77709__auto___81192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77710__auto__ = (function (){var switch__77503__auto__ = (function (state_79587){
var state_val_79588 = (state_79587[(1)]);
if((state_val_79588 === (7))){
var inst_79583 = (state_79587[(2)]);
var state_79587__$1 = state_79587;
var statearr_79589_81193 = state_79587__$1;
(statearr_79589_81193[(2)] = inst_79583);

(statearr_79589_81193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79588 === (20))){
var state_79587__$1 = state_79587;
var statearr_79590_81194 = state_79587__$1;
(statearr_79590_81194[(2)] = null);

(statearr_79590_81194[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79588 === (1))){
var state_79587__$1 = state_79587;
var statearr_79591_81195 = state_79587__$1;
(statearr_79591_81195[(2)] = null);

(statearr_79591_81195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79588 === (24))){
var inst_79566 = (state_79587[(7)]);
var inst_79575 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_79566);
var state_79587__$1 = state_79587;
var statearr_79592_81196 = state_79587__$1;
(statearr_79592_81196[(2)] = inst_79575);

(statearr_79592_81196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79588 === (4))){
var inst_79517 = (state_79587[(8)]);
var inst_79517__$1 = (state_79587[(2)]);
var inst_79519 = (inst_79517__$1 == null);
var state_79587__$1 = (function (){var statearr_79593 = state_79587;
(statearr_79593[(8)] = inst_79517__$1);

return statearr_79593;
})();
if(cljs.core.truth_(inst_79519)){
var statearr_79594_81198 = state_79587__$1;
(statearr_79594_81198[(1)] = (5));

} else {
var statearr_79595_81199 = state_79587__$1;
(statearr_79595_81199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79588 === (15))){
var inst_79560 = (state_79587[(2)]);
var state_79587__$1 = state_79587;
var statearr_79598_81200 = state_79587__$1;
(statearr_79598_81200[(2)] = inst_79560);

(statearr_79598_81200[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79588 === (21))){
var inst_79580 = (state_79587[(2)]);
var state_79587__$1 = (function (){var statearr_79599 = state_79587;
(statearr_79599[(9)] = inst_79580);

return statearr_79599;
})();
var statearr_79600_81207 = state_79587__$1;
(statearr_79600_81207[(2)] = null);

(statearr_79600_81207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79588 === (13))){
var inst_79542 = (state_79587[(10)]);
var inst_79544 = cljs.core.chunked_seq_QMARK_(inst_79542);
var state_79587__$1 = state_79587;
if(inst_79544){
var statearr_79602_81208 = state_79587__$1;
(statearr_79602_81208[(1)] = (16));

} else {
var statearr_79603_81209 = state_79587__$1;
(statearr_79603_81209[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79588 === (22))){
var inst_79572 = (state_79587[(2)]);
var state_79587__$1 = state_79587;
if(cljs.core.truth_(inst_79572)){
var statearr_79606_81210 = state_79587__$1;
(statearr_79606_81210[(1)] = (23));

} else {
var statearr_79607_81211 = state_79587__$1;
(statearr_79607_81211[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79588 === (6))){
var inst_79517 = (state_79587[(8)]);
var inst_79566 = (state_79587[(7)]);
var inst_79568 = (state_79587[(11)]);
var inst_79566__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_79517) : topic_fn.call(null,inst_79517));
var inst_79567 = cljs.core.deref(mults);
var inst_79568__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_79567,inst_79566__$1);
var state_79587__$1 = (function (){var statearr_79609 = state_79587;
(statearr_79609[(7)] = inst_79566__$1);

(statearr_79609[(11)] = inst_79568__$1);

return statearr_79609;
})();
if(cljs.core.truth_(inst_79568__$1)){
var statearr_79610_81212 = state_79587__$1;
(statearr_79610_81212[(1)] = (19));

} else {
var statearr_79611_81213 = state_79587__$1;
(statearr_79611_81213[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79588 === (25))){
var inst_79577 = (state_79587[(2)]);
var state_79587__$1 = state_79587;
var statearr_79612_81214 = state_79587__$1;
(statearr_79612_81214[(2)] = inst_79577);

(statearr_79612_81214[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79588 === (17))){
var inst_79542 = (state_79587[(10)]);
var inst_79551 = cljs.core.first(inst_79542);
var inst_79552 = cljs.core.async.muxch_STAR_(inst_79551);
var inst_79553 = cljs.core.async.close_BANG_(inst_79552);
var inst_79554 = cljs.core.next(inst_79542);
var inst_79528 = inst_79554;
var inst_79529 = null;
var inst_79530 = (0);
var inst_79531 = (0);
var state_79587__$1 = (function (){var statearr_79614 = state_79587;
(statearr_79614[(12)] = inst_79531);

(statearr_79614[(13)] = inst_79528);

(statearr_79614[(14)] = inst_79529);

(statearr_79614[(15)] = inst_79553);

(statearr_79614[(16)] = inst_79530);

return statearr_79614;
})();
var statearr_79615_81215 = state_79587__$1;
(statearr_79615_81215[(2)] = null);

(statearr_79615_81215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79588 === (3))){
var inst_79585 = (state_79587[(2)]);
var state_79587__$1 = state_79587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79587__$1,inst_79585);
} else {
if((state_val_79588 === (12))){
var inst_79562 = (state_79587[(2)]);
var state_79587__$1 = state_79587;
var statearr_79616_81216 = state_79587__$1;
(statearr_79616_81216[(2)] = inst_79562);

(statearr_79616_81216[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79588 === (2))){
var state_79587__$1 = state_79587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79587__$1,(4),ch);
} else {
if((state_val_79588 === (23))){
var state_79587__$1 = state_79587;
var statearr_79619_81217 = state_79587__$1;
(statearr_79619_81217[(2)] = null);

(statearr_79619_81217[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79588 === (19))){
var inst_79517 = (state_79587[(8)]);
var inst_79568 = (state_79587[(11)]);
var inst_79570 = cljs.core.async.muxch_STAR_(inst_79568);
var state_79587__$1 = state_79587;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79587__$1,(22),inst_79570,inst_79517);
} else {
if((state_val_79588 === (11))){
var inst_79542 = (state_79587[(10)]);
var inst_79528 = (state_79587[(13)]);
var inst_79542__$1 = cljs.core.seq(inst_79528);
var state_79587__$1 = (function (){var statearr_79622 = state_79587;
(statearr_79622[(10)] = inst_79542__$1);

return statearr_79622;
})();
if(inst_79542__$1){
var statearr_79623_81218 = state_79587__$1;
(statearr_79623_81218[(1)] = (13));

} else {
var statearr_79624_81219 = state_79587__$1;
(statearr_79624_81219[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79588 === (9))){
var inst_79564 = (state_79587[(2)]);
var state_79587__$1 = state_79587;
var statearr_79625_81220 = state_79587__$1;
(statearr_79625_81220[(2)] = inst_79564);

(statearr_79625_81220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79588 === (5))){
var inst_79525 = cljs.core.deref(mults);
var inst_79526 = cljs.core.vals(inst_79525);
var inst_79527 = cljs.core.seq(inst_79526);
var inst_79528 = inst_79527;
var inst_79529 = null;
var inst_79530 = (0);
var inst_79531 = (0);
var state_79587__$1 = (function (){var statearr_79631 = state_79587;
(statearr_79631[(12)] = inst_79531);

(statearr_79631[(13)] = inst_79528);

(statearr_79631[(14)] = inst_79529);

(statearr_79631[(16)] = inst_79530);

return statearr_79631;
})();
var statearr_79637_81221 = state_79587__$1;
(statearr_79637_81221[(2)] = null);

(statearr_79637_81221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79588 === (14))){
var state_79587__$1 = state_79587;
var statearr_79647_81222 = state_79587__$1;
(statearr_79647_81222[(2)] = null);

(statearr_79647_81222[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79588 === (16))){
var inst_79542 = (state_79587[(10)]);
var inst_79546 = cljs.core.chunk_first(inst_79542);
var inst_79547 = cljs.core.chunk_rest(inst_79542);
var inst_79548 = cljs.core.count(inst_79546);
var inst_79528 = inst_79547;
var inst_79529 = inst_79546;
var inst_79530 = inst_79548;
var inst_79531 = (0);
var state_79587__$1 = (function (){var statearr_79650 = state_79587;
(statearr_79650[(12)] = inst_79531);

(statearr_79650[(13)] = inst_79528);

(statearr_79650[(14)] = inst_79529);

(statearr_79650[(16)] = inst_79530);

return statearr_79650;
})();
var statearr_79651_81223 = state_79587__$1;
(statearr_79651_81223[(2)] = null);

(statearr_79651_81223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79588 === (10))){
var inst_79531 = (state_79587[(12)]);
var inst_79528 = (state_79587[(13)]);
var inst_79529 = (state_79587[(14)]);
var inst_79530 = (state_79587[(16)]);
var inst_79536 = cljs.core._nth(inst_79529,inst_79531);
var inst_79537 = cljs.core.async.muxch_STAR_(inst_79536);
var inst_79538 = cljs.core.async.close_BANG_(inst_79537);
var inst_79539 = (inst_79531 + (1));
var tmp79644 = inst_79528;
var tmp79645 = inst_79529;
var tmp79646 = inst_79530;
var inst_79528__$1 = tmp79644;
var inst_79529__$1 = tmp79645;
var inst_79530__$1 = tmp79646;
var inst_79531__$1 = inst_79539;
var state_79587__$1 = (function (){var statearr_79654 = state_79587;
(statearr_79654[(12)] = inst_79531__$1);

(statearr_79654[(13)] = inst_79528__$1);

(statearr_79654[(17)] = inst_79538);

(statearr_79654[(14)] = inst_79529__$1);

(statearr_79654[(16)] = inst_79530__$1);

return statearr_79654;
})();
var statearr_79658_81224 = state_79587__$1;
(statearr_79658_81224[(2)] = null);

(statearr_79658_81224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79588 === (18))){
var inst_79557 = (state_79587[(2)]);
var state_79587__$1 = state_79587;
var statearr_79659_81225 = state_79587__$1;
(statearr_79659_81225[(2)] = inst_79557);

(statearr_79659_81225[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79588 === (8))){
var inst_79531 = (state_79587[(12)]);
var inst_79530 = (state_79587[(16)]);
var inst_79533 = (inst_79531 < inst_79530);
var inst_79534 = inst_79533;
var state_79587__$1 = state_79587;
if(cljs.core.truth_(inst_79534)){
var statearr_79661_81226 = state_79587__$1;
(statearr_79661_81226[(1)] = (10));

} else {
var statearr_79662_81227 = state_79587__$1;
(statearr_79662_81227[(1)] = (11));

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
var cljs$core$async$state_machine__77504__auto__ = null;
var cljs$core$async$state_machine__77504__auto____0 = (function (){
var statearr_79665 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79665[(0)] = cljs$core$async$state_machine__77504__auto__);

(statearr_79665[(1)] = (1));

return statearr_79665;
});
var cljs$core$async$state_machine__77504__auto____1 = (function (state_79587){
while(true){
var ret_value__77505__auto__ = (function (){try{while(true){
var result__77506__auto__ = switch__77503__auto__(state_79587);
if(cljs.core.keyword_identical_QMARK_(result__77506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77506__auto__;
}
break;
}
}catch (e79666){var ex__77507__auto__ = e79666;
var statearr_79667_81228 = state_79587;
(statearr_79667_81228[(2)] = ex__77507__auto__);


if(cljs.core.seq((state_79587[(4)]))){
var statearr_79668_81229 = state_79587;
(statearr_79668_81229[(1)] = cljs.core.first((state_79587[(4)])));

} else {
throw ex__77507__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81231 = state_79587;
state_79587 = G__81231;
continue;
} else {
return ret_value__77505__auto__;
}
break;
}
});
cljs$core$async$state_machine__77504__auto__ = function(state_79587){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__77504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__77504__auto____1.call(this,state_79587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__77504__auto____0;
cljs$core$async$state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__77504__auto____1;
return cljs$core$async$state_machine__77504__auto__;
})()
})();
var state__77711__auto__ = (function (){var statearr_79669 = f__77710__auto__();
(statearr_79669[(6)] = c__77709__auto___81192);

return statearr_79669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77711__auto__);
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
var G__79671 = arguments.length;
switch (G__79671) {
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
var G__79676 = arguments.length;
switch (G__79676) {
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
var G__79693 = arguments.length;
switch (G__79693) {
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
var c__77709__auto___81239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77710__auto__ = (function (){var switch__77503__auto__ = (function (state_79778){
var state_val_79779 = (state_79778[(1)]);
if((state_val_79779 === (7))){
var state_79778__$1 = state_79778;
var statearr_79796_81240 = state_79778__$1;
(statearr_79796_81240[(2)] = null);

(statearr_79796_81240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79779 === (1))){
var state_79778__$1 = state_79778;
var statearr_79797_81241 = state_79778__$1;
(statearr_79797_81241[(2)] = null);

(statearr_79797_81241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79779 === (4))){
var inst_79705 = (state_79778[(7)]);
var inst_79704 = (state_79778[(8)]);
var inst_79708 = (inst_79705 < inst_79704);
var state_79778__$1 = state_79778;
if(cljs.core.truth_(inst_79708)){
var statearr_79798_81242 = state_79778__$1;
(statearr_79798_81242[(1)] = (6));

} else {
var statearr_79799_81243 = state_79778__$1;
(statearr_79799_81243[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79779 === (15))){
var inst_79754 = (state_79778[(9)]);
var inst_79760 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_79754);
var state_79778__$1 = state_79778;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79778__$1,(17),out,inst_79760);
} else {
if((state_val_79779 === (13))){
var inst_79754 = (state_79778[(9)]);
var inst_79754__$1 = (state_79778[(2)]);
var inst_79756 = cljs.core.some(cljs.core.nil_QMARK_,inst_79754__$1);
var state_79778__$1 = (function (){var statearr_79800 = state_79778;
(statearr_79800[(9)] = inst_79754__$1);

return statearr_79800;
})();
if(cljs.core.truth_(inst_79756)){
var statearr_79801_81244 = state_79778__$1;
(statearr_79801_81244[(1)] = (14));

} else {
var statearr_79802_81245 = state_79778__$1;
(statearr_79802_81245[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79779 === (6))){
var state_79778__$1 = state_79778;
var statearr_79804_81246 = state_79778__$1;
(statearr_79804_81246[(2)] = null);

(statearr_79804_81246[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79779 === (17))){
var inst_79762 = (state_79778[(2)]);
var state_79778__$1 = (function (){var statearr_79810 = state_79778;
(statearr_79810[(10)] = inst_79762);

return statearr_79810;
})();
var statearr_79811_81247 = state_79778__$1;
(statearr_79811_81247[(2)] = null);

(statearr_79811_81247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79779 === (3))){
var inst_79768 = (state_79778[(2)]);
var state_79778__$1 = state_79778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79778__$1,inst_79768);
} else {
if((state_val_79779 === (12))){
var _ = (function (){var statearr_79812 = state_79778;
(statearr_79812[(4)] = cljs.core.rest((state_79778[(4)])));

return statearr_79812;
})();
var state_79778__$1 = state_79778;
var ex79809 = (state_79778__$1[(2)]);
var statearr_79813_81248 = state_79778__$1;
(statearr_79813_81248[(5)] = ex79809);


if((ex79809 instanceof Object)){
var statearr_79818_81249 = state_79778__$1;
(statearr_79818_81249[(1)] = (11));

(statearr_79818_81249[(5)] = null);

} else {
throw ex79809;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79779 === (2))){
var inst_79703 = cljs.core.reset_BANG_(dctr,cnt);
var inst_79704 = cnt;
var inst_79705 = (0);
var state_79778__$1 = (function (){var statearr_79827 = state_79778;
(statearr_79827[(7)] = inst_79705);

(statearr_79827[(8)] = inst_79704);

(statearr_79827[(11)] = inst_79703);

return statearr_79827;
})();
var statearr_79828_81250 = state_79778__$1;
(statearr_79828_81250[(2)] = null);

(statearr_79828_81250[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79779 === (11))){
var inst_79713 = (state_79778[(2)]);
var inst_79734 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_79778__$1 = (function (){var statearr_79829 = state_79778;
(statearr_79829[(12)] = inst_79713);

return statearr_79829;
})();
var statearr_79836_81254 = state_79778__$1;
(statearr_79836_81254[(2)] = inst_79734);

(statearr_79836_81254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79779 === (9))){
var inst_79705 = (state_79778[(7)]);
var _ = (function (){var statearr_79837 = state_79778;
(statearr_79837[(4)] = cljs.core.cons((12),(state_79778[(4)])));

return statearr_79837;
})();
var inst_79740 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_79705) : chs__$1.call(null,inst_79705));
var inst_79741 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_79705) : done.call(null,inst_79705));
var inst_79742 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_79740,inst_79741);
var ___$1 = (function (){var statearr_79840 = state_79778;
(statearr_79840[(4)] = cljs.core.rest((state_79778[(4)])));

return statearr_79840;
})();
var state_79778__$1 = state_79778;
var statearr_79841_81255 = state_79778__$1;
(statearr_79841_81255[(2)] = inst_79742);

(statearr_79841_81255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79779 === (5))){
var inst_79752 = (state_79778[(2)]);
var state_79778__$1 = (function (){var statearr_79842 = state_79778;
(statearr_79842[(13)] = inst_79752);

return statearr_79842;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79778__$1,(13),dchan);
} else {
if((state_val_79779 === (14))){
var inst_79758 = cljs.core.async.close_BANG_(out);
var state_79778__$1 = state_79778;
var statearr_79844_81256 = state_79778__$1;
(statearr_79844_81256[(2)] = inst_79758);

(statearr_79844_81256[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79779 === (16))){
var inst_79765 = (state_79778[(2)]);
var state_79778__$1 = state_79778;
var statearr_79848_81257 = state_79778__$1;
(statearr_79848_81257[(2)] = inst_79765);

(statearr_79848_81257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79779 === (10))){
var inst_79705 = (state_79778[(7)]);
var inst_79745 = (state_79778[(2)]);
var inst_79746 = (inst_79705 + (1));
var inst_79705__$1 = inst_79746;
var state_79778__$1 = (function (){var statearr_79849 = state_79778;
(statearr_79849[(14)] = inst_79745);

(statearr_79849[(7)] = inst_79705__$1);

return statearr_79849;
})();
var statearr_79850_81258 = state_79778__$1;
(statearr_79850_81258[(2)] = null);

(statearr_79850_81258[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79779 === (8))){
var inst_79750 = (state_79778[(2)]);
var state_79778__$1 = state_79778;
var statearr_79851_81259 = state_79778__$1;
(statearr_79851_81259[(2)] = inst_79750);

(statearr_79851_81259[(1)] = (5));


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
var cljs$core$async$state_machine__77504__auto__ = null;
var cljs$core$async$state_machine__77504__auto____0 = (function (){
var statearr_79852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79852[(0)] = cljs$core$async$state_machine__77504__auto__);

(statearr_79852[(1)] = (1));

return statearr_79852;
});
var cljs$core$async$state_machine__77504__auto____1 = (function (state_79778){
while(true){
var ret_value__77505__auto__ = (function (){try{while(true){
var result__77506__auto__ = switch__77503__auto__(state_79778);
if(cljs.core.keyword_identical_QMARK_(result__77506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77506__auto__;
}
break;
}
}catch (e79853){var ex__77507__auto__ = e79853;
var statearr_79854_81261 = state_79778;
(statearr_79854_81261[(2)] = ex__77507__auto__);


if(cljs.core.seq((state_79778[(4)]))){
var statearr_79855_81262 = state_79778;
(statearr_79855_81262[(1)] = cljs.core.first((state_79778[(4)])));

} else {
throw ex__77507__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81264 = state_79778;
state_79778 = G__81264;
continue;
} else {
return ret_value__77505__auto__;
}
break;
}
});
cljs$core$async$state_machine__77504__auto__ = function(state_79778){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__77504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__77504__auto____1.call(this,state_79778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__77504__auto____0;
cljs$core$async$state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__77504__auto____1;
return cljs$core$async$state_machine__77504__auto__;
})()
})();
var state__77711__auto__ = (function (){var statearr_79861 = f__77710__auto__();
(statearr_79861[(6)] = c__77709__auto___81239);

return statearr_79861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77711__auto__);
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
var G__79876 = arguments.length;
switch (G__79876) {
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
var c__77709__auto___81266 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77710__auto__ = (function (){var switch__77503__auto__ = (function (state_79910){
var state_val_79911 = (state_79910[(1)]);
if((state_val_79911 === (7))){
var inst_79889 = (state_79910[(7)]);
var inst_79890 = (state_79910[(8)]);
var inst_79889__$1 = (state_79910[(2)]);
var inst_79890__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_79889__$1,(0),null);
var inst_79891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_79889__$1,(1),null);
var inst_79892 = (inst_79890__$1 == null);
var state_79910__$1 = (function (){var statearr_79912 = state_79910;
(statearr_79912[(7)] = inst_79889__$1);

(statearr_79912[(8)] = inst_79890__$1);

(statearr_79912[(9)] = inst_79891);

return statearr_79912;
})();
if(cljs.core.truth_(inst_79892)){
var statearr_79913_81268 = state_79910__$1;
(statearr_79913_81268[(1)] = (8));

} else {
var statearr_79914_81269 = state_79910__$1;
(statearr_79914_81269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79911 === (1))){
var inst_79879 = cljs.core.vec(chs);
var inst_79880 = inst_79879;
var state_79910__$1 = (function (){var statearr_79915 = state_79910;
(statearr_79915[(10)] = inst_79880);

return statearr_79915;
})();
var statearr_79916_81270 = state_79910__$1;
(statearr_79916_81270[(2)] = null);

(statearr_79916_81270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79911 === (4))){
var inst_79880 = (state_79910[(10)]);
var state_79910__$1 = state_79910;
return cljs.core.async.ioc_alts_BANG_(state_79910__$1,(7),inst_79880);
} else {
if((state_val_79911 === (6))){
var inst_79906 = (state_79910[(2)]);
var state_79910__$1 = state_79910;
var statearr_79917_81271 = state_79910__$1;
(statearr_79917_81271[(2)] = inst_79906);

(statearr_79917_81271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79911 === (3))){
var inst_79908 = (state_79910[(2)]);
var state_79910__$1 = state_79910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79910__$1,inst_79908);
} else {
if((state_val_79911 === (2))){
var inst_79880 = (state_79910[(10)]);
var inst_79882 = cljs.core.count(inst_79880);
var inst_79883 = (inst_79882 > (0));
var state_79910__$1 = state_79910;
if(cljs.core.truth_(inst_79883)){
var statearr_79919_81272 = state_79910__$1;
(statearr_79919_81272[(1)] = (4));

} else {
var statearr_79920_81273 = state_79910__$1;
(statearr_79920_81273[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79911 === (11))){
var inst_79880 = (state_79910[(10)]);
var inst_79899 = (state_79910[(2)]);
var tmp79918 = inst_79880;
var inst_79880__$1 = tmp79918;
var state_79910__$1 = (function (){var statearr_79921 = state_79910;
(statearr_79921[(11)] = inst_79899);

(statearr_79921[(10)] = inst_79880__$1);

return statearr_79921;
})();
var statearr_79922_81274 = state_79910__$1;
(statearr_79922_81274[(2)] = null);

(statearr_79922_81274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79911 === (9))){
var inst_79890 = (state_79910[(8)]);
var state_79910__$1 = state_79910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79910__$1,(11),out,inst_79890);
} else {
if((state_val_79911 === (5))){
var inst_79904 = cljs.core.async.close_BANG_(out);
var state_79910__$1 = state_79910;
var statearr_79923_81275 = state_79910__$1;
(statearr_79923_81275[(2)] = inst_79904);

(statearr_79923_81275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79911 === (10))){
var inst_79902 = (state_79910[(2)]);
var state_79910__$1 = state_79910;
var statearr_79924_81277 = state_79910__$1;
(statearr_79924_81277[(2)] = inst_79902);

(statearr_79924_81277[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79911 === (8))){
var inst_79889 = (state_79910[(7)]);
var inst_79880 = (state_79910[(10)]);
var inst_79890 = (state_79910[(8)]);
var inst_79891 = (state_79910[(9)]);
var inst_79894 = (function (){var cs = inst_79880;
var vec__79885 = inst_79889;
var v = inst_79890;
var c = inst_79891;
return (function (p1__79873_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__79873_SHARP_);
});
})();
var inst_79895 = cljs.core.filterv(inst_79894,inst_79880);
var inst_79880__$1 = inst_79895;
var state_79910__$1 = (function (){var statearr_79925 = state_79910;
(statearr_79925[(10)] = inst_79880__$1);

return statearr_79925;
})();
var statearr_79926_81278 = state_79910__$1;
(statearr_79926_81278[(2)] = null);

(statearr_79926_81278[(1)] = (2));


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
var cljs$core$async$state_machine__77504__auto__ = null;
var cljs$core$async$state_machine__77504__auto____0 = (function (){
var statearr_79927 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79927[(0)] = cljs$core$async$state_machine__77504__auto__);

(statearr_79927[(1)] = (1));

return statearr_79927;
});
var cljs$core$async$state_machine__77504__auto____1 = (function (state_79910){
while(true){
var ret_value__77505__auto__ = (function (){try{while(true){
var result__77506__auto__ = switch__77503__auto__(state_79910);
if(cljs.core.keyword_identical_QMARK_(result__77506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77506__auto__;
}
break;
}
}catch (e79928){var ex__77507__auto__ = e79928;
var statearr_79929_81281 = state_79910;
(statearr_79929_81281[(2)] = ex__77507__auto__);


if(cljs.core.seq((state_79910[(4)]))){
var statearr_79930_81282 = state_79910;
(statearr_79930_81282[(1)] = cljs.core.first((state_79910[(4)])));

} else {
throw ex__77507__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81283 = state_79910;
state_79910 = G__81283;
continue;
} else {
return ret_value__77505__auto__;
}
break;
}
});
cljs$core$async$state_machine__77504__auto__ = function(state_79910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__77504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__77504__auto____1.call(this,state_79910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__77504__auto____0;
cljs$core$async$state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__77504__auto____1;
return cljs$core$async$state_machine__77504__auto__;
})()
})();
var state__77711__auto__ = (function (){var statearr_79931 = f__77710__auto__();
(statearr_79931[(6)] = c__77709__auto___81266);

return statearr_79931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77711__auto__);
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
var G__79939 = arguments.length;
switch (G__79939) {
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
var c__77709__auto___81286 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77710__auto__ = (function (){var switch__77503__auto__ = (function (state_79968){
var state_val_79970 = (state_79968[(1)]);
if((state_val_79970 === (7))){
var inst_79949 = (state_79968[(7)]);
var inst_79949__$1 = (state_79968[(2)]);
var inst_79950 = (inst_79949__$1 == null);
var inst_79951 = cljs.core.not(inst_79950);
var state_79968__$1 = (function (){var statearr_79973 = state_79968;
(statearr_79973[(7)] = inst_79949__$1);

return statearr_79973;
})();
if(inst_79951){
var statearr_79974_81287 = state_79968__$1;
(statearr_79974_81287[(1)] = (8));

} else {
var statearr_79975_81288 = state_79968__$1;
(statearr_79975_81288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79970 === (1))){
var inst_79940 = (0);
var state_79968__$1 = (function (){var statearr_79976 = state_79968;
(statearr_79976[(8)] = inst_79940);

return statearr_79976;
})();
var statearr_79977_81289 = state_79968__$1;
(statearr_79977_81289[(2)] = null);

(statearr_79977_81289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79970 === (4))){
var state_79968__$1 = state_79968;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79968__$1,(7),ch);
} else {
if((state_val_79970 === (6))){
var inst_79962 = (state_79968[(2)]);
var state_79968__$1 = state_79968;
var statearr_79984_81290 = state_79968__$1;
(statearr_79984_81290[(2)] = inst_79962);

(statearr_79984_81290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79970 === (3))){
var inst_79964 = (state_79968[(2)]);
var inst_79965 = cljs.core.async.close_BANG_(out);
var state_79968__$1 = (function (){var statearr_79985 = state_79968;
(statearr_79985[(9)] = inst_79964);

return statearr_79985;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_79968__$1,inst_79965);
} else {
if((state_val_79970 === (2))){
var inst_79940 = (state_79968[(8)]);
var inst_79942 = (inst_79940 < n);
var state_79968__$1 = state_79968;
if(cljs.core.truth_(inst_79942)){
var statearr_79986_81291 = state_79968__$1;
(statearr_79986_81291[(1)] = (4));

} else {
var statearr_79990_81292 = state_79968__$1;
(statearr_79990_81292[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79970 === (11))){
var inst_79940 = (state_79968[(8)]);
var inst_79954 = (state_79968[(2)]);
var inst_79955 = (inst_79940 + (1));
var inst_79940__$1 = inst_79955;
var state_79968__$1 = (function (){var statearr_79991 = state_79968;
(statearr_79991[(8)] = inst_79940__$1);

(statearr_79991[(10)] = inst_79954);

return statearr_79991;
})();
var statearr_79992_81294 = state_79968__$1;
(statearr_79992_81294[(2)] = null);

(statearr_79992_81294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79970 === (9))){
var state_79968__$1 = state_79968;
var statearr_79993_81295 = state_79968__$1;
(statearr_79993_81295[(2)] = null);

(statearr_79993_81295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79970 === (5))){
var state_79968__$1 = state_79968;
var statearr_79994_81296 = state_79968__$1;
(statearr_79994_81296[(2)] = null);

(statearr_79994_81296[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79970 === (10))){
var inst_79959 = (state_79968[(2)]);
var state_79968__$1 = state_79968;
var statearr_79999_81297 = state_79968__$1;
(statearr_79999_81297[(2)] = inst_79959);

(statearr_79999_81297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79970 === (8))){
var inst_79949 = (state_79968[(7)]);
var state_79968__$1 = state_79968;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79968__$1,(11),out,inst_79949);
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
var cljs$core$async$state_machine__77504__auto__ = null;
var cljs$core$async$state_machine__77504__auto____0 = (function (){
var statearr_80004 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_80004[(0)] = cljs$core$async$state_machine__77504__auto__);

(statearr_80004[(1)] = (1));

return statearr_80004;
});
var cljs$core$async$state_machine__77504__auto____1 = (function (state_79968){
while(true){
var ret_value__77505__auto__ = (function (){try{while(true){
var result__77506__auto__ = switch__77503__auto__(state_79968);
if(cljs.core.keyword_identical_QMARK_(result__77506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77506__auto__;
}
break;
}
}catch (e80005){var ex__77507__auto__ = e80005;
var statearr_80006_81300 = state_79968;
(statearr_80006_81300[(2)] = ex__77507__auto__);


if(cljs.core.seq((state_79968[(4)]))){
var statearr_80007_81301 = state_79968;
(statearr_80007_81301[(1)] = cljs.core.first((state_79968[(4)])));

} else {
throw ex__77507__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81302 = state_79968;
state_79968 = G__81302;
continue;
} else {
return ret_value__77505__auto__;
}
break;
}
});
cljs$core$async$state_machine__77504__auto__ = function(state_79968){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__77504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__77504__auto____1.call(this,state_79968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__77504__auto____0;
cljs$core$async$state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__77504__auto____1;
return cljs$core$async$state_machine__77504__auto__;
})()
})();
var state__77711__auto__ = (function (){var statearr_80008 = f__77710__auto__();
(statearr_80008[(6)] = c__77709__auto___81286);

return statearr_80008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77711__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async80012 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80012 = (function (f,ch,meta80013){
this.f = f;
this.ch = ch;
this.meta80013 = meta80013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async80012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80014,meta80013__$1){
var self__ = this;
var _80014__$1 = this;
return (new cljs.core.async.t_cljs$core$async80012(self__.f,self__.ch,meta80013__$1));
}));

(cljs.core.async.t_cljs$core$async80012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80014){
var self__ = this;
var _80014__$1 = this;
return self__.meta80013;
}));

(cljs.core.async.t_cljs$core$async80012.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async80012.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async80012.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async80012.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async80012.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async80015 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80015 = (function (f,ch,meta80013,_,fn1,meta80016){
this.f = f;
this.ch = ch;
this.meta80013 = meta80013;
this._ = _;
this.fn1 = fn1;
this.meta80016 = meta80016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async80015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80017,meta80016__$1){
var self__ = this;
var _80017__$1 = this;
return (new cljs.core.async.t_cljs$core$async80015(self__.f,self__.ch,self__.meta80013,self__._,self__.fn1,meta80016__$1));
}));

(cljs.core.async.t_cljs$core$async80015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80017){
var self__ = this;
var _80017__$1 = this;
return self__.meta80016;
}));

(cljs.core.async.t_cljs$core$async80015.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async80015.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async80015.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async80015.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__80011_SHARP_){
var G__80019 = (((p1__80011_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__80011_SHARP_) : self__.f.call(null,p1__80011_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__80019) : f1.call(null,G__80019));
});
}));

(cljs.core.async.t_cljs$core$async80015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta80013","meta80013",-1690529887,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async80012","cljs.core.async/t_cljs$core$async80012",-305113211,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta80016","meta80016",1178359539,null)], null);
}));

(cljs.core.async.t_cljs$core$async80015.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async80015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80015");

(cljs.core.async.t_cljs$core$async80015.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async80015");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async80015.
 */
cljs.core.async.__GT_t_cljs$core$async80015 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async80015(f__$1,ch__$1,meta80013__$1,___$2,fn1__$1,meta80016){
return (new cljs.core.async.t_cljs$core$async80015(f__$1,ch__$1,meta80013__$1,___$2,fn1__$1,meta80016));
});

}

return (new cljs.core.async.t_cljs$core$async80015(self__.f,self__.ch,self__.meta80013,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__80025 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__80025) : self__.f.call(null,G__80025));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async80012.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async80012.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async80012.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta80013","meta80013",-1690529887,null)], null);
}));

(cljs.core.async.t_cljs$core$async80012.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async80012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80012");

(cljs.core.async.t_cljs$core$async80012.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async80012");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async80012.
 */
cljs.core.async.__GT_t_cljs$core$async80012 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async80012(f__$1,ch__$1,meta80013){
return (new cljs.core.async.t_cljs$core$async80012(f__$1,ch__$1,meta80013));
});

}

return (new cljs.core.async.t_cljs$core$async80012(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async80059 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80059 = (function (f,ch,meta80060){
this.f = f;
this.ch = ch;
this.meta80060 = meta80060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async80059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80061,meta80060__$1){
var self__ = this;
var _80061__$1 = this;
return (new cljs.core.async.t_cljs$core$async80059(self__.f,self__.ch,meta80060__$1));
}));

(cljs.core.async.t_cljs$core$async80059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80061){
var self__ = this;
var _80061__$1 = this;
return self__.meta80060;
}));

(cljs.core.async.t_cljs$core$async80059.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async80059.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async80059.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async80059.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async80059.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async80059.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async80059.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta80060","meta80060",-111738507,null)], null);
}));

(cljs.core.async.t_cljs$core$async80059.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async80059.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80059");

(cljs.core.async.t_cljs$core$async80059.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async80059");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async80059.
 */
cljs.core.async.__GT_t_cljs$core$async80059 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async80059(f__$1,ch__$1,meta80060){
return (new cljs.core.async.t_cljs$core$async80059(f__$1,ch__$1,meta80060));
});

}

return (new cljs.core.async.t_cljs$core$async80059(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async80063 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80063 = (function (p,ch,meta80064){
this.p = p;
this.ch = ch;
this.meta80064 = meta80064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async80063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80065,meta80064__$1){
var self__ = this;
var _80065__$1 = this;
return (new cljs.core.async.t_cljs$core$async80063(self__.p,self__.ch,meta80064__$1));
}));

(cljs.core.async.t_cljs$core$async80063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80065){
var self__ = this;
var _80065__$1 = this;
return self__.meta80064;
}));

(cljs.core.async.t_cljs$core$async80063.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async80063.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async80063.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async80063.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async80063.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async80063.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async80063.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async80063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta80064","meta80064",-809015420,null)], null);
}));

(cljs.core.async.t_cljs$core$async80063.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async80063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80063");

(cljs.core.async.t_cljs$core$async80063.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async80063");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async80063.
 */
cljs.core.async.__GT_t_cljs$core$async80063 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async80063(p__$1,ch__$1,meta80064){
return (new cljs.core.async.t_cljs$core$async80063(p__$1,ch__$1,meta80064));
});

}

return (new cljs.core.async.t_cljs$core$async80063(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__80067 = arguments.length;
switch (G__80067) {
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
var c__77709__auto___81330 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77710__auto__ = (function (){var switch__77503__auto__ = (function (state_80088){
var state_val_80089 = (state_80088[(1)]);
if((state_val_80089 === (7))){
var inst_80084 = (state_80088[(2)]);
var state_80088__$1 = state_80088;
var statearr_80090_81331 = state_80088__$1;
(statearr_80090_81331[(2)] = inst_80084);

(statearr_80090_81331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (1))){
var state_80088__$1 = state_80088;
var statearr_80091_81332 = state_80088__$1;
(statearr_80091_81332[(2)] = null);

(statearr_80091_81332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (4))){
var inst_80070 = (state_80088[(7)]);
var inst_80070__$1 = (state_80088[(2)]);
var inst_80071 = (inst_80070__$1 == null);
var state_80088__$1 = (function (){var statearr_80092 = state_80088;
(statearr_80092[(7)] = inst_80070__$1);

return statearr_80092;
})();
if(cljs.core.truth_(inst_80071)){
var statearr_80094_81333 = state_80088__$1;
(statearr_80094_81333[(1)] = (5));

} else {
var statearr_80095_81334 = state_80088__$1;
(statearr_80095_81334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (6))){
var inst_80070 = (state_80088[(7)]);
var inst_80075 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_80070) : p.call(null,inst_80070));
var state_80088__$1 = state_80088;
if(cljs.core.truth_(inst_80075)){
var statearr_80097_81335 = state_80088__$1;
(statearr_80097_81335[(1)] = (8));

} else {
var statearr_80098_81336 = state_80088__$1;
(statearr_80098_81336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (3))){
var inst_80086 = (state_80088[(2)]);
var state_80088__$1 = state_80088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80088__$1,inst_80086);
} else {
if((state_val_80089 === (2))){
var state_80088__$1 = state_80088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80088__$1,(4),ch);
} else {
if((state_val_80089 === (11))){
var inst_80078 = (state_80088[(2)]);
var state_80088__$1 = state_80088;
var statearr_80102_81337 = state_80088__$1;
(statearr_80102_81337[(2)] = inst_80078);

(statearr_80102_81337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (9))){
var state_80088__$1 = state_80088;
var statearr_80103_81338 = state_80088__$1;
(statearr_80103_81338[(2)] = null);

(statearr_80103_81338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (5))){
var inst_80073 = cljs.core.async.close_BANG_(out);
var state_80088__$1 = state_80088;
var statearr_80104_81339 = state_80088__$1;
(statearr_80104_81339[(2)] = inst_80073);

(statearr_80104_81339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (10))){
var inst_80081 = (state_80088[(2)]);
var state_80088__$1 = (function (){var statearr_80105 = state_80088;
(statearr_80105[(8)] = inst_80081);

return statearr_80105;
})();
var statearr_80106_81340 = state_80088__$1;
(statearr_80106_81340[(2)] = null);

(statearr_80106_81340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (8))){
var inst_80070 = (state_80088[(7)]);
var state_80088__$1 = state_80088;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80088__$1,(11),out,inst_80070);
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
var cljs$core$async$state_machine__77504__auto__ = null;
var cljs$core$async$state_machine__77504__auto____0 = (function (){
var statearr_80107 = [null,null,null,null,null,null,null,null,null];
(statearr_80107[(0)] = cljs$core$async$state_machine__77504__auto__);

(statearr_80107[(1)] = (1));

return statearr_80107;
});
var cljs$core$async$state_machine__77504__auto____1 = (function (state_80088){
while(true){
var ret_value__77505__auto__ = (function (){try{while(true){
var result__77506__auto__ = switch__77503__auto__(state_80088);
if(cljs.core.keyword_identical_QMARK_(result__77506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77506__auto__;
}
break;
}
}catch (e80108){var ex__77507__auto__ = e80108;
var statearr_80109_81341 = state_80088;
(statearr_80109_81341[(2)] = ex__77507__auto__);


if(cljs.core.seq((state_80088[(4)]))){
var statearr_80110_81346 = state_80088;
(statearr_80110_81346[(1)] = cljs.core.first((state_80088[(4)])));

} else {
throw ex__77507__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81347 = state_80088;
state_80088 = G__81347;
continue;
} else {
return ret_value__77505__auto__;
}
break;
}
});
cljs$core$async$state_machine__77504__auto__ = function(state_80088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__77504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__77504__auto____1.call(this,state_80088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__77504__auto____0;
cljs$core$async$state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__77504__auto____1;
return cljs$core$async$state_machine__77504__auto__;
})()
})();
var state__77711__auto__ = (function (){var statearr_80111 = f__77710__auto__();
(statearr_80111[(6)] = c__77709__auto___81330);

return statearr_80111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77711__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__80113 = arguments.length;
switch (G__80113) {
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
var c__77709__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77710__auto__ = (function (){var switch__77503__auto__ = (function (state_80214){
var state_val_80217 = (state_80214[(1)]);
if((state_val_80217 === (7))){
var inst_80200 = (state_80214[(2)]);
var state_80214__$1 = state_80214;
var statearr_80223_81355 = state_80214__$1;
(statearr_80223_81355[(2)] = inst_80200);

(statearr_80223_81355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80217 === (20))){
var inst_80151 = (state_80214[(7)]);
var inst_80181 = (state_80214[(2)]);
var inst_80182 = cljs.core.next(inst_80151);
var inst_80134 = inst_80182;
var inst_80135 = null;
var inst_80136 = (0);
var inst_80137 = (0);
var state_80214__$1 = (function (){var statearr_80224 = state_80214;
(statearr_80224[(8)] = inst_80181);

(statearr_80224[(9)] = inst_80137);

(statearr_80224[(10)] = inst_80136);

(statearr_80224[(11)] = inst_80134);

(statearr_80224[(12)] = inst_80135);

return statearr_80224;
})();
var statearr_80236_81360 = state_80214__$1;
(statearr_80236_81360[(2)] = null);

(statearr_80236_81360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80217 === (1))){
var state_80214__$1 = state_80214;
var statearr_80238_81361 = state_80214__$1;
(statearr_80238_81361[(2)] = null);

(statearr_80238_81361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80217 === (4))){
var inst_80121 = (state_80214[(13)]);
var inst_80121__$1 = (state_80214[(2)]);
var inst_80122 = (inst_80121__$1 == null);
var state_80214__$1 = (function (){var statearr_80246 = state_80214;
(statearr_80246[(13)] = inst_80121__$1);

return statearr_80246;
})();
if(cljs.core.truth_(inst_80122)){
var statearr_80250_81362 = state_80214__$1;
(statearr_80250_81362[(1)] = (5));

} else {
var statearr_80251_81363 = state_80214__$1;
(statearr_80251_81363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80217 === (15))){
var state_80214__$1 = state_80214;
var statearr_80255_81364 = state_80214__$1;
(statearr_80255_81364[(2)] = null);

(statearr_80255_81364[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80217 === (21))){
var state_80214__$1 = state_80214;
var statearr_80260_81365 = state_80214__$1;
(statearr_80260_81365[(2)] = null);

(statearr_80260_81365[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80217 === (13))){
var inst_80137 = (state_80214[(9)]);
var inst_80136 = (state_80214[(10)]);
var inst_80134 = (state_80214[(11)]);
var inst_80135 = (state_80214[(12)]);
var inst_80144 = (state_80214[(2)]);
var inst_80145 = (inst_80137 + (1));
var tmp80252 = inst_80136;
var tmp80253 = inst_80134;
var tmp80254 = inst_80135;
var inst_80134__$1 = tmp80253;
var inst_80135__$1 = tmp80254;
var inst_80136__$1 = tmp80252;
var inst_80137__$1 = inst_80145;
var state_80214__$1 = (function (){var statearr_80276 = state_80214;
(statearr_80276[(9)] = inst_80137__$1);

(statearr_80276[(10)] = inst_80136__$1);

(statearr_80276[(11)] = inst_80134__$1);

(statearr_80276[(12)] = inst_80135__$1);

(statearr_80276[(14)] = inst_80144);

return statearr_80276;
})();
var statearr_80278_81370 = state_80214__$1;
(statearr_80278_81370[(2)] = null);

(statearr_80278_81370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80217 === (22))){
var state_80214__$1 = state_80214;
var statearr_80281_81371 = state_80214__$1;
(statearr_80281_81371[(2)] = null);

(statearr_80281_81371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80217 === (6))){
var inst_80121 = (state_80214[(13)]);
var inst_80132 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_80121) : f.call(null,inst_80121));
var inst_80133 = cljs.core.seq(inst_80132);
var inst_80134 = inst_80133;
var inst_80135 = null;
var inst_80136 = (0);
var inst_80137 = (0);
var state_80214__$1 = (function (){var statearr_80282 = state_80214;
(statearr_80282[(9)] = inst_80137);

(statearr_80282[(10)] = inst_80136);

(statearr_80282[(11)] = inst_80134);

(statearr_80282[(12)] = inst_80135);

return statearr_80282;
})();
var statearr_80284_81374 = state_80214__$1;
(statearr_80284_81374[(2)] = null);

(statearr_80284_81374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80217 === (17))){
var inst_80151 = (state_80214[(7)]);
var inst_80156 = cljs.core.chunk_first(inst_80151);
var inst_80159 = cljs.core.chunk_rest(inst_80151);
var inst_80160 = cljs.core.count(inst_80156);
var inst_80134 = inst_80159;
var inst_80135 = inst_80156;
var inst_80136 = inst_80160;
var inst_80137 = (0);
var state_80214__$1 = (function (){var statearr_80304 = state_80214;
(statearr_80304[(9)] = inst_80137);

(statearr_80304[(10)] = inst_80136);

(statearr_80304[(11)] = inst_80134);

(statearr_80304[(12)] = inst_80135);

return statearr_80304;
})();
var statearr_80318_81385 = state_80214__$1;
(statearr_80318_81385[(2)] = null);

(statearr_80318_81385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80217 === (3))){
var inst_80202 = (state_80214[(2)]);
var state_80214__$1 = state_80214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80214__$1,inst_80202);
} else {
if((state_val_80217 === (12))){
var inst_80190 = (state_80214[(2)]);
var state_80214__$1 = state_80214;
var statearr_80319_81386 = state_80214__$1;
(statearr_80319_81386[(2)] = inst_80190);

(statearr_80319_81386[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80217 === (2))){
var state_80214__$1 = state_80214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80214__$1,(4),in$);
} else {
if((state_val_80217 === (23))){
var inst_80198 = (state_80214[(2)]);
var state_80214__$1 = state_80214;
var statearr_80320_81387 = state_80214__$1;
(statearr_80320_81387[(2)] = inst_80198);

(statearr_80320_81387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80217 === (19))){
var inst_80185 = (state_80214[(2)]);
var state_80214__$1 = state_80214;
var statearr_80325_81389 = state_80214__$1;
(statearr_80325_81389[(2)] = inst_80185);

(statearr_80325_81389[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80217 === (11))){
var inst_80134 = (state_80214[(11)]);
var inst_80151 = (state_80214[(7)]);
var inst_80151__$1 = cljs.core.seq(inst_80134);
var state_80214__$1 = (function (){var statearr_80342 = state_80214;
(statearr_80342[(7)] = inst_80151__$1);

return statearr_80342;
})();
if(inst_80151__$1){
var statearr_80347_81393 = state_80214__$1;
(statearr_80347_81393[(1)] = (14));

} else {
var statearr_80348_81394 = state_80214__$1;
(statearr_80348_81394[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80217 === (9))){
var inst_80192 = (state_80214[(2)]);
var inst_80193 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_80214__$1 = (function (){var statearr_80349 = state_80214;
(statearr_80349[(15)] = inst_80192);

return statearr_80349;
})();
if(cljs.core.truth_(inst_80193)){
var statearr_80350_81395 = state_80214__$1;
(statearr_80350_81395[(1)] = (21));

} else {
var statearr_80351_81396 = state_80214__$1;
(statearr_80351_81396[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80217 === (5))){
var inst_80125 = cljs.core.async.close_BANG_(out);
var state_80214__$1 = state_80214;
var statearr_80352_81398 = state_80214__$1;
(statearr_80352_81398[(2)] = inst_80125);

(statearr_80352_81398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80217 === (14))){
var inst_80151 = (state_80214[(7)]);
var inst_80153 = cljs.core.chunked_seq_QMARK_(inst_80151);
var state_80214__$1 = state_80214;
if(inst_80153){
var statearr_80353_81399 = state_80214__$1;
(statearr_80353_81399[(1)] = (17));

} else {
var statearr_80354_81400 = state_80214__$1;
(statearr_80354_81400[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80217 === (16))){
var inst_80188 = (state_80214[(2)]);
var state_80214__$1 = state_80214;
var statearr_80355_81401 = state_80214__$1;
(statearr_80355_81401[(2)] = inst_80188);

(statearr_80355_81401[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80217 === (10))){
var inst_80137 = (state_80214[(9)]);
var inst_80135 = (state_80214[(12)]);
var inst_80142 = cljs.core._nth(inst_80135,inst_80137);
var state_80214__$1 = state_80214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80214__$1,(13),out,inst_80142);
} else {
if((state_val_80217 === (18))){
var inst_80151 = (state_80214[(7)]);
var inst_80165 = cljs.core.first(inst_80151);
var state_80214__$1 = state_80214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80214__$1,(20),out,inst_80165);
} else {
if((state_val_80217 === (8))){
var inst_80137 = (state_80214[(9)]);
var inst_80136 = (state_80214[(10)]);
var inst_80139 = (inst_80137 < inst_80136);
var inst_80140 = inst_80139;
var state_80214__$1 = state_80214;
if(cljs.core.truth_(inst_80140)){
var statearr_80356_81402 = state_80214__$1;
(statearr_80356_81402[(1)] = (10));

} else {
var statearr_80357_81403 = state_80214__$1;
(statearr_80357_81403[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__77504__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__77504__auto____0 = (function (){
var statearr_80358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80358[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__77504__auto__);

(statearr_80358[(1)] = (1));

return statearr_80358;
});
var cljs$core$async$mapcat_STAR__$_state_machine__77504__auto____1 = (function (state_80214){
while(true){
var ret_value__77505__auto__ = (function (){try{while(true){
var result__77506__auto__ = switch__77503__auto__(state_80214);
if(cljs.core.keyword_identical_QMARK_(result__77506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77506__auto__;
}
break;
}
}catch (e80359){var ex__77507__auto__ = e80359;
var statearr_80360_81404 = state_80214;
(statearr_80360_81404[(2)] = ex__77507__auto__);


if(cljs.core.seq((state_80214[(4)]))){
var statearr_80361_81405 = state_80214;
(statearr_80361_81405[(1)] = cljs.core.first((state_80214[(4)])));

} else {
throw ex__77507__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81406 = state_80214;
state_80214 = G__81406;
continue;
} else {
return ret_value__77505__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__77504__auto__ = function(state_80214){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__77504__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__77504__auto____1.call(this,state_80214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__77504__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__77504__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__77504__auto__;
})()
})();
var state__77711__auto__ = (function (){var statearr_80362 = f__77710__auto__();
(statearr_80362[(6)] = c__77709__auto__);

return statearr_80362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77711__auto__);
}));

return c__77709__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__80365 = arguments.length;
switch (G__80365) {
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
var G__80371 = arguments.length;
switch (G__80371) {
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
var G__80379 = arguments.length;
switch (G__80379) {
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
var c__77709__auto___81410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77710__auto__ = (function (){var switch__77503__auto__ = (function (state_80403){
var state_val_80404 = (state_80403[(1)]);
if((state_val_80404 === (7))){
var inst_80398 = (state_80403[(2)]);
var state_80403__$1 = state_80403;
var statearr_80405_81411 = state_80403__$1;
(statearr_80405_81411[(2)] = inst_80398);

(statearr_80405_81411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80404 === (1))){
var inst_80380 = null;
var state_80403__$1 = (function (){var statearr_80406 = state_80403;
(statearr_80406[(7)] = inst_80380);

return statearr_80406;
})();
var statearr_80407_81412 = state_80403__$1;
(statearr_80407_81412[(2)] = null);

(statearr_80407_81412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80404 === (4))){
var inst_80383 = (state_80403[(8)]);
var inst_80383__$1 = (state_80403[(2)]);
var inst_80384 = (inst_80383__$1 == null);
var inst_80385 = cljs.core.not(inst_80384);
var state_80403__$1 = (function (){var statearr_80408 = state_80403;
(statearr_80408[(8)] = inst_80383__$1);

return statearr_80408;
})();
if(inst_80385){
var statearr_80409_81414 = state_80403__$1;
(statearr_80409_81414[(1)] = (5));

} else {
var statearr_80410_81415 = state_80403__$1;
(statearr_80410_81415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80404 === (6))){
var state_80403__$1 = state_80403;
var statearr_80411_81416 = state_80403__$1;
(statearr_80411_81416[(2)] = null);

(statearr_80411_81416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80404 === (3))){
var inst_80400 = (state_80403[(2)]);
var inst_80401 = cljs.core.async.close_BANG_(out);
var state_80403__$1 = (function (){var statearr_80412 = state_80403;
(statearr_80412[(9)] = inst_80400);

return statearr_80412;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_80403__$1,inst_80401);
} else {
if((state_val_80404 === (2))){
var state_80403__$1 = state_80403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80403__$1,(4),ch);
} else {
if((state_val_80404 === (11))){
var inst_80383 = (state_80403[(8)]);
var inst_80392 = (state_80403[(2)]);
var inst_80380 = inst_80383;
var state_80403__$1 = (function (){var statearr_80413 = state_80403;
(statearr_80413[(10)] = inst_80392);

(statearr_80413[(7)] = inst_80380);

return statearr_80413;
})();
var statearr_80414_81417 = state_80403__$1;
(statearr_80414_81417[(2)] = null);

(statearr_80414_81417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80404 === (9))){
var inst_80383 = (state_80403[(8)]);
var state_80403__$1 = state_80403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80403__$1,(11),out,inst_80383);
} else {
if((state_val_80404 === (5))){
var inst_80380 = (state_80403[(7)]);
var inst_80383 = (state_80403[(8)]);
var inst_80387 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_80383,inst_80380);
var state_80403__$1 = state_80403;
if(inst_80387){
var statearr_80416_81419 = state_80403__$1;
(statearr_80416_81419[(1)] = (8));

} else {
var statearr_80417_81420 = state_80403__$1;
(statearr_80417_81420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80404 === (10))){
var inst_80395 = (state_80403[(2)]);
var state_80403__$1 = state_80403;
var statearr_80419_81424 = state_80403__$1;
(statearr_80419_81424[(2)] = inst_80395);

(statearr_80419_81424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80404 === (8))){
var inst_80380 = (state_80403[(7)]);
var tmp80415 = inst_80380;
var inst_80380__$1 = tmp80415;
var state_80403__$1 = (function (){var statearr_80420 = state_80403;
(statearr_80420[(7)] = inst_80380__$1);

return statearr_80420;
})();
var statearr_80421_81425 = state_80403__$1;
(statearr_80421_81425[(2)] = null);

(statearr_80421_81425[(1)] = (2));


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
var cljs$core$async$state_machine__77504__auto__ = null;
var cljs$core$async$state_machine__77504__auto____0 = (function (){
var statearr_80422 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_80422[(0)] = cljs$core$async$state_machine__77504__auto__);

(statearr_80422[(1)] = (1));

return statearr_80422;
});
var cljs$core$async$state_machine__77504__auto____1 = (function (state_80403){
while(true){
var ret_value__77505__auto__ = (function (){try{while(true){
var result__77506__auto__ = switch__77503__auto__(state_80403);
if(cljs.core.keyword_identical_QMARK_(result__77506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77506__auto__;
}
break;
}
}catch (e80423){var ex__77507__auto__ = e80423;
var statearr_80424_81426 = state_80403;
(statearr_80424_81426[(2)] = ex__77507__auto__);


if(cljs.core.seq((state_80403[(4)]))){
var statearr_80425_81427 = state_80403;
(statearr_80425_81427[(1)] = cljs.core.first((state_80403[(4)])));

} else {
throw ex__77507__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81428 = state_80403;
state_80403 = G__81428;
continue;
} else {
return ret_value__77505__auto__;
}
break;
}
});
cljs$core$async$state_machine__77504__auto__ = function(state_80403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__77504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__77504__auto____1.call(this,state_80403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__77504__auto____0;
cljs$core$async$state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__77504__auto____1;
return cljs$core$async$state_machine__77504__auto__;
})()
})();
var state__77711__auto__ = (function (){var statearr_80426 = f__77710__auto__();
(statearr_80426[(6)] = c__77709__auto___81410);

return statearr_80426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77711__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__80428 = arguments.length;
switch (G__80428) {
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
var c__77709__auto___81430 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77710__auto__ = (function (){var switch__77503__auto__ = (function (state_80471){
var state_val_80472 = (state_80471[(1)]);
if((state_val_80472 === (7))){
var inst_80467 = (state_80471[(2)]);
var state_80471__$1 = state_80471;
var statearr_80474_81431 = state_80471__$1;
(statearr_80474_81431[(2)] = inst_80467);

(statearr_80474_81431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80472 === (1))){
var inst_80432 = (new Array(n));
var inst_80433 = inst_80432;
var inst_80434 = (0);
var state_80471__$1 = (function (){var statearr_80475 = state_80471;
(statearr_80475[(7)] = inst_80433);

(statearr_80475[(8)] = inst_80434);

return statearr_80475;
})();
var statearr_80476_81433 = state_80471__$1;
(statearr_80476_81433[(2)] = null);

(statearr_80476_81433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80472 === (4))){
var inst_80438 = (state_80471[(9)]);
var inst_80438__$1 = (state_80471[(2)]);
var inst_80439 = (inst_80438__$1 == null);
var inst_80440 = cljs.core.not(inst_80439);
var state_80471__$1 = (function (){var statearr_80477 = state_80471;
(statearr_80477[(9)] = inst_80438__$1);

return statearr_80477;
})();
if(inst_80440){
var statearr_80478_81435 = state_80471__$1;
(statearr_80478_81435[(1)] = (5));

} else {
var statearr_80479_81438 = state_80471__$1;
(statearr_80479_81438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80472 === (15))){
var inst_80461 = (state_80471[(2)]);
var state_80471__$1 = state_80471;
var statearr_80480_81440 = state_80471__$1;
(statearr_80480_81440[(2)] = inst_80461);

(statearr_80480_81440[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80472 === (13))){
var state_80471__$1 = state_80471;
var statearr_80481_81441 = state_80471__$1;
(statearr_80481_81441[(2)] = null);

(statearr_80481_81441[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80472 === (6))){
var inst_80434 = (state_80471[(8)]);
var inst_80456 = (inst_80434 > (0));
var state_80471__$1 = state_80471;
if(cljs.core.truth_(inst_80456)){
var statearr_80482_81442 = state_80471__$1;
(statearr_80482_81442[(1)] = (12));

} else {
var statearr_80483_81443 = state_80471__$1;
(statearr_80483_81443[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80472 === (3))){
var inst_80469 = (state_80471[(2)]);
var state_80471__$1 = state_80471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80471__$1,inst_80469);
} else {
if((state_val_80472 === (12))){
var inst_80433 = (state_80471[(7)]);
var inst_80459 = cljs.core.vec(inst_80433);
var state_80471__$1 = state_80471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80471__$1,(15),out,inst_80459);
} else {
if((state_val_80472 === (2))){
var state_80471__$1 = state_80471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80471__$1,(4),ch);
} else {
if((state_val_80472 === (11))){
var inst_80450 = (state_80471[(2)]);
var inst_80451 = (new Array(n));
var inst_80433 = inst_80451;
var inst_80434 = (0);
var state_80471__$1 = (function (){var statearr_80485 = state_80471;
(statearr_80485[(7)] = inst_80433);

(statearr_80485[(10)] = inst_80450);

(statearr_80485[(8)] = inst_80434);

return statearr_80485;
})();
var statearr_80486_81444 = state_80471__$1;
(statearr_80486_81444[(2)] = null);

(statearr_80486_81444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80472 === (9))){
var inst_80433 = (state_80471[(7)]);
var inst_80448 = cljs.core.vec(inst_80433);
var state_80471__$1 = state_80471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80471__$1,(11),out,inst_80448);
} else {
if((state_val_80472 === (5))){
var inst_80438 = (state_80471[(9)]);
var inst_80433 = (state_80471[(7)]);
var inst_80443 = (state_80471[(11)]);
var inst_80434 = (state_80471[(8)]);
var inst_80442 = (inst_80433[inst_80434] = inst_80438);
var inst_80443__$1 = (inst_80434 + (1));
var inst_80444 = (inst_80443__$1 < n);
var state_80471__$1 = (function (){var statearr_80487 = state_80471;
(statearr_80487[(11)] = inst_80443__$1);

(statearr_80487[(12)] = inst_80442);

return statearr_80487;
})();
if(cljs.core.truth_(inst_80444)){
var statearr_80488_81445 = state_80471__$1;
(statearr_80488_81445[(1)] = (8));

} else {
var statearr_80489_81446 = state_80471__$1;
(statearr_80489_81446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80472 === (14))){
var inst_80464 = (state_80471[(2)]);
var inst_80465 = cljs.core.async.close_BANG_(out);
var state_80471__$1 = (function (){var statearr_80491 = state_80471;
(statearr_80491[(13)] = inst_80464);

return statearr_80491;
})();
var statearr_80492_81447 = state_80471__$1;
(statearr_80492_81447[(2)] = inst_80465);

(statearr_80492_81447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80472 === (10))){
var inst_80454 = (state_80471[(2)]);
var state_80471__$1 = state_80471;
var statearr_80493_81448 = state_80471__$1;
(statearr_80493_81448[(2)] = inst_80454);

(statearr_80493_81448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80472 === (8))){
var inst_80433 = (state_80471[(7)]);
var inst_80443 = (state_80471[(11)]);
var tmp80490 = inst_80433;
var inst_80433__$1 = tmp80490;
var inst_80434 = inst_80443;
var state_80471__$1 = (function (){var statearr_80494 = state_80471;
(statearr_80494[(7)] = inst_80433__$1);

(statearr_80494[(8)] = inst_80434);

return statearr_80494;
})();
var statearr_80495_81450 = state_80471__$1;
(statearr_80495_81450[(2)] = null);

(statearr_80495_81450[(1)] = (2));


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
var cljs$core$async$state_machine__77504__auto__ = null;
var cljs$core$async$state_machine__77504__auto____0 = (function (){
var statearr_80496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80496[(0)] = cljs$core$async$state_machine__77504__auto__);

(statearr_80496[(1)] = (1));

return statearr_80496;
});
var cljs$core$async$state_machine__77504__auto____1 = (function (state_80471){
while(true){
var ret_value__77505__auto__ = (function (){try{while(true){
var result__77506__auto__ = switch__77503__auto__(state_80471);
if(cljs.core.keyword_identical_QMARK_(result__77506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77506__auto__;
}
break;
}
}catch (e80497){var ex__77507__auto__ = e80497;
var statearr_80498_81452 = state_80471;
(statearr_80498_81452[(2)] = ex__77507__auto__);


if(cljs.core.seq((state_80471[(4)]))){
var statearr_80499_81453 = state_80471;
(statearr_80499_81453[(1)] = cljs.core.first((state_80471[(4)])));

} else {
throw ex__77507__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81454 = state_80471;
state_80471 = G__81454;
continue;
} else {
return ret_value__77505__auto__;
}
break;
}
});
cljs$core$async$state_machine__77504__auto__ = function(state_80471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__77504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__77504__auto____1.call(this,state_80471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__77504__auto____0;
cljs$core$async$state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__77504__auto____1;
return cljs$core$async$state_machine__77504__auto__;
})()
})();
var state__77711__auto__ = (function (){var statearr_80500 = f__77710__auto__();
(statearr_80500[(6)] = c__77709__auto___81430);

return statearr_80500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77711__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__80503 = arguments.length;
switch (G__80503) {
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
var c__77709__auto___81456 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77710__auto__ = (function (){var switch__77503__auto__ = (function (state_80552){
var state_val_80553 = (state_80552[(1)]);
if((state_val_80553 === (7))){
var inst_80548 = (state_80552[(2)]);
var state_80552__$1 = state_80552;
var statearr_80574_81457 = state_80552__$1;
(statearr_80574_81457[(2)] = inst_80548);

(statearr_80574_81457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80553 === (1))){
var inst_80505 = [];
var inst_80506 = inst_80505;
var inst_80507 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_80552__$1 = (function (){var statearr_80588 = state_80552;
(statearr_80588[(7)] = inst_80506);

(statearr_80588[(8)] = inst_80507);

return statearr_80588;
})();
var statearr_80592_81458 = state_80552__$1;
(statearr_80592_81458[(2)] = null);

(statearr_80592_81458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80553 === (4))){
var inst_80510 = (state_80552[(9)]);
var inst_80510__$1 = (state_80552[(2)]);
var inst_80512 = (inst_80510__$1 == null);
var inst_80513 = cljs.core.not(inst_80512);
var state_80552__$1 = (function (){var statearr_80597 = state_80552;
(statearr_80597[(9)] = inst_80510__$1);

return statearr_80597;
})();
if(inst_80513){
var statearr_80598_81459 = state_80552__$1;
(statearr_80598_81459[(1)] = (5));

} else {
var statearr_80599_81460 = state_80552__$1;
(statearr_80599_81460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80553 === (15))){
var inst_80506 = (state_80552[(7)]);
var inst_80540 = cljs.core.vec(inst_80506);
var state_80552__$1 = state_80552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80552__$1,(18),out,inst_80540);
} else {
if((state_val_80553 === (13))){
var inst_80535 = (state_80552[(2)]);
var state_80552__$1 = state_80552;
var statearr_80603_81461 = state_80552__$1;
(statearr_80603_81461[(2)] = inst_80535);

(statearr_80603_81461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80553 === (6))){
var inst_80506 = (state_80552[(7)]);
var inst_80537 = inst_80506.length;
var inst_80538 = (inst_80537 > (0));
var state_80552__$1 = state_80552;
if(cljs.core.truth_(inst_80538)){
var statearr_80604_81462 = state_80552__$1;
(statearr_80604_81462[(1)] = (15));

} else {
var statearr_80605_81463 = state_80552__$1;
(statearr_80605_81463[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80553 === (17))){
var inst_80545 = (state_80552[(2)]);
var inst_80546 = cljs.core.async.close_BANG_(out);
var state_80552__$1 = (function (){var statearr_80606 = state_80552;
(statearr_80606[(10)] = inst_80545);

return statearr_80606;
})();
var statearr_80607_81464 = state_80552__$1;
(statearr_80607_81464[(2)] = inst_80546);

(statearr_80607_81464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80553 === (3))){
var inst_80550 = (state_80552[(2)]);
var state_80552__$1 = state_80552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80552__$1,inst_80550);
} else {
if((state_val_80553 === (12))){
var inst_80506 = (state_80552[(7)]);
var inst_80527 = cljs.core.vec(inst_80506);
var state_80552__$1 = state_80552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80552__$1,(14),out,inst_80527);
} else {
if((state_val_80553 === (2))){
var state_80552__$1 = state_80552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80552__$1,(4),ch);
} else {
if((state_val_80553 === (11))){
var inst_80506 = (state_80552[(7)]);
var inst_80510 = (state_80552[(9)]);
var inst_80516 = (state_80552[(11)]);
var inst_80524 = inst_80506.push(inst_80510);
var tmp80608 = inst_80506;
var inst_80506__$1 = tmp80608;
var inst_80507 = inst_80516;
var state_80552__$1 = (function (){var statearr_80636 = state_80552;
(statearr_80636[(7)] = inst_80506__$1);

(statearr_80636[(12)] = inst_80524);

(statearr_80636[(8)] = inst_80507);

return statearr_80636;
})();
var statearr_80640_81465 = state_80552__$1;
(statearr_80640_81465[(2)] = null);

(statearr_80640_81465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80553 === (9))){
var inst_80507 = (state_80552[(8)]);
var inst_80520 = cljs.core.keyword_identical_QMARK_(inst_80507,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_80552__$1 = state_80552;
var statearr_80651_81466 = state_80552__$1;
(statearr_80651_81466[(2)] = inst_80520);

(statearr_80651_81466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80553 === (5))){
var inst_80507 = (state_80552[(8)]);
var inst_80517 = (state_80552[(13)]);
var inst_80510 = (state_80552[(9)]);
var inst_80516 = (state_80552[(11)]);
var inst_80516__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_80510) : f.call(null,inst_80510));
var inst_80517__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_80516__$1,inst_80507);
var state_80552__$1 = (function (){var statearr_80663 = state_80552;
(statearr_80663[(13)] = inst_80517__$1);

(statearr_80663[(11)] = inst_80516__$1);

return statearr_80663;
})();
if(inst_80517__$1){
var statearr_80670_81467 = state_80552__$1;
(statearr_80670_81467[(1)] = (8));

} else {
var statearr_80673_81468 = state_80552__$1;
(statearr_80673_81468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80553 === (14))){
var inst_80510 = (state_80552[(9)]);
var inst_80516 = (state_80552[(11)]);
var inst_80529 = (state_80552[(2)]);
var inst_80531 = [];
var inst_80532 = inst_80531.push(inst_80510);
var inst_80506 = inst_80531;
var inst_80507 = inst_80516;
var state_80552__$1 = (function (){var statearr_80684 = state_80552;
(statearr_80684[(7)] = inst_80506);

(statearr_80684[(8)] = inst_80507);

(statearr_80684[(14)] = inst_80532);

(statearr_80684[(15)] = inst_80529);

return statearr_80684;
})();
var statearr_80687_81470 = state_80552__$1;
(statearr_80687_81470[(2)] = null);

(statearr_80687_81470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80553 === (16))){
var state_80552__$1 = state_80552;
var statearr_80689_81471 = state_80552__$1;
(statearr_80689_81471[(2)] = null);

(statearr_80689_81471[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80553 === (10))){
var inst_80522 = (state_80552[(2)]);
var state_80552__$1 = state_80552;
if(cljs.core.truth_(inst_80522)){
var statearr_80691_81472 = state_80552__$1;
(statearr_80691_81472[(1)] = (11));

} else {
var statearr_80692_81473 = state_80552__$1;
(statearr_80692_81473[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80553 === (18))){
var inst_80542 = (state_80552[(2)]);
var state_80552__$1 = state_80552;
var statearr_80693_81474 = state_80552__$1;
(statearr_80693_81474[(2)] = inst_80542);

(statearr_80693_81474[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80553 === (8))){
var inst_80517 = (state_80552[(13)]);
var state_80552__$1 = state_80552;
var statearr_80694_81475 = state_80552__$1;
(statearr_80694_81475[(2)] = inst_80517);

(statearr_80694_81475[(1)] = (10));


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
var cljs$core$async$state_machine__77504__auto__ = null;
var cljs$core$async$state_machine__77504__auto____0 = (function (){
var statearr_80695 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80695[(0)] = cljs$core$async$state_machine__77504__auto__);

(statearr_80695[(1)] = (1));

return statearr_80695;
});
var cljs$core$async$state_machine__77504__auto____1 = (function (state_80552){
while(true){
var ret_value__77505__auto__ = (function (){try{while(true){
var result__77506__auto__ = switch__77503__auto__(state_80552);
if(cljs.core.keyword_identical_QMARK_(result__77506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77506__auto__;
}
break;
}
}catch (e80697){var ex__77507__auto__ = e80697;
var statearr_80698_81476 = state_80552;
(statearr_80698_81476[(2)] = ex__77507__auto__);


if(cljs.core.seq((state_80552[(4)]))){
var statearr_80703_81477 = state_80552;
(statearr_80703_81477[(1)] = cljs.core.first((state_80552[(4)])));

} else {
throw ex__77507__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81480 = state_80552;
state_80552 = G__81480;
continue;
} else {
return ret_value__77505__auto__;
}
break;
}
});
cljs$core$async$state_machine__77504__auto__ = function(state_80552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__77504__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__77504__auto____1.call(this,state_80552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__77504__auto____0;
cljs$core$async$state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__77504__auto____1;
return cljs$core$async$state_machine__77504__auto__;
})()
})();
var state__77711__auto__ = (function (){var statearr_80730 = f__77710__auto__();
(statearr_80730[(6)] = c__77709__auto___81456);

return statearr_80730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77711__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
