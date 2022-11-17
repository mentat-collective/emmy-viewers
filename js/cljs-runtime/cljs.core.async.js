goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__77709 = arguments.length;
switch (G__77709) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async77710 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async77710 = (function (f,blockable,meta77711){
this.f = f;
this.blockable = blockable;
this.meta77711 = meta77711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async77710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77712,meta77711__$1){
var self__ = this;
var _77712__$1 = this;
return (new cljs.core.async.t_cljs$core$async77710(self__.f,self__.blockable,meta77711__$1));
}));

(cljs.core.async.t_cljs$core$async77710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77712){
var self__ = this;
var _77712__$1 = this;
return self__.meta77711;
}));

(cljs.core.async.t_cljs$core$async77710.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async77710.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async77710.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async77710.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async77710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta77711","meta77711",304121575,null)], null);
}));

(cljs.core.async.t_cljs$core$async77710.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async77710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async77710");

(cljs.core.async.t_cljs$core$async77710.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async77710");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async77710.
 */
cljs.core.async.__GT_t_cljs$core$async77710 = (function cljs$core$async$__GT_t_cljs$core$async77710(f__$1,blockable__$1,meta77711){
return (new cljs.core.async.t_cljs$core$async77710(f__$1,blockable__$1,meta77711));
});

}

return (new cljs.core.async.t_cljs$core$async77710(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__77756 = arguments.length;
switch (G__77756) {
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
var G__77774 = arguments.length;
switch (G__77774) {
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
var G__77781 = arguments.length;
switch (G__77781) {
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
var val_80369 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_80369) : fn1.call(null,val_80369));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_80369) : fn1.call(null,val_80369));
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
var G__77803 = arguments.length;
switch (G__77803) {
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
var n__4741__auto___80371 = n;
var x_80372 = (0);
while(true){
if((x_80372 < n__4741__auto___80371)){
(a[x_80372] = x_80372);

var G__80373 = (x_80372 + (1));
x_80372 = G__80373;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async77817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async77817 = (function (flag,meta77818){
this.flag = flag;
this.meta77818 = meta77818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async77817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77819,meta77818__$1){
var self__ = this;
var _77819__$1 = this;
return (new cljs.core.async.t_cljs$core$async77817(self__.flag,meta77818__$1));
}));

(cljs.core.async.t_cljs$core$async77817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77819){
var self__ = this;
var _77819__$1 = this;
return self__.meta77818;
}));

(cljs.core.async.t_cljs$core$async77817.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async77817.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async77817.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async77817.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async77817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta77818","meta77818",-2019232845,null)], null);
}));

(cljs.core.async.t_cljs$core$async77817.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async77817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async77817");

(cljs.core.async.t_cljs$core$async77817.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async77817");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async77817.
 */
cljs.core.async.__GT_t_cljs$core$async77817 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async77817(flag__$1,meta77818){
return (new cljs.core.async.t_cljs$core$async77817(flag__$1,meta77818));
});

}

return (new cljs.core.async.t_cljs$core$async77817(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async77822 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async77822 = (function (flag,cb,meta77823){
this.flag = flag;
this.cb = cb;
this.meta77823 = meta77823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async77822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77824,meta77823__$1){
var self__ = this;
var _77824__$1 = this;
return (new cljs.core.async.t_cljs$core$async77822(self__.flag,self__.cb,meta77823__$1));
}));

(cljs.core.async.t_cljs$core$async77822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77824){
var self__ = this;
var _77824__$1 = this;
return self__.meta77823;
}));

(cljs.core.async.t_cljs$core$async77822.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async77822.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async77822.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async77822.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async77822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta77823","meta77823",-838030097,null)], null);
}));

(cljs.core.async.t_cljs$core$async77822.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async77822.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async77822");

(cljs.core.async.t_cljs$core$async77822.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async77822");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async77822.
 */
cljs.core.async.__GT_t_cljs$core$async77822 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async77822(flag__$1,cb__$1,meta77823){
return (new cljs.core.async.t_cljs$core$async77822(flag__$1,cb__$1,meta77823));
});

}

return (new cljs.core.async.t_cljs$core$async77822(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__77831_SHARP_){
var G__77851 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__77831_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__77851) : fret.call(null,G__77851));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__77832_SHARP_){
var G__77852 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__77832_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__77852) : fret.call(null,G__77852));
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
var G__80375 = (i + (1));
i = G__80375;
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
var len__4864__auto___80377 = arguments.length;
var i__4865__auto___80378 = (0);
while(true){
if((i__4865__auto___80378 < len__4864__auto___80377)){
args__4870__auto__.push((arguments[i__4865__auto___80378]));

var G__80379 = (i__4865__auto___80378 + (1));
i__4865__auto___80378 = G__80379;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__77863){
var map__77864 = p__77863;
var map__77864__$1 = cljs.core.__destructure_map(map__77864);
var opts = map__77864__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq77854){
var G__77857 = cljs.core.first(seq77854);
var seq77854__$1 = cljs.core.next(seq77854);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77857,seq77854__$1);
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
var G__77871 = arguments.length;
switch (G__77871) {
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
var c__77562__auto___80381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77563__auto__ = (function (){var switch__77210__auto__ = (function (state_78028){
var state_val_78030 = (state_78028[(1)]);
if((state_val_78030 === (7))){
var inst_78021 = (state_78028[(2)]);
var state_78028__$1 = state_78028;
var statearr_78040_80382 = state_78028__$1;
(statearr_78040_80382[(2)] = inst_78021);

(statearr_78040_80382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78030 === (1))){
var state_78028__$1 = state_78028;
var statearr_78042_80383 = state_78028__$1;
(statearr_78042_80383[(2)] = null);

(statearr_78042_80383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78030 === (4))){
var inst_77971 = (state_78028[(7)]);
var inst_77971__$1 = (state_78028[(2)]);
var inst_77992 = (inst_77971__$1 == null);
var state_78028__$1 = (function (){var statearr_78045 = state_78028;
(statearr_78045[(7)] = inst_77971__$1);

return statearr_78045;
})();
if(cljs.core.truth_(inst_77992)){
var statearr_78046_80384 = state_78028__$1;
(statearr_78046_80384[(1)] = (5));

} else {
var statearr_78047_80385 = state_78028__$1;
(statearr_78047_80385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78030 === (13))){
var state_78028__$1 = state_78028;
var statearr_78048_80386 = state_78028__$1;
(statearr_78048_80386[(2)] = null);

(statearr_78048_80386[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78030 === (6))){
var inst_77971 = (state_78028[(7)]);
var state_78028__$1 = state_78028;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_78028__$1,(11),to,inst_77971);
} else {
if((state_val_78030 === (3))){
var inst_78023 = (state_78028[(2)]);
var state_78028__$1 = state_78028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78028__$1,inst_78023);
} else {
if((state_val_78030 === (12))){
var state_78028__$1 = state_78028;
var statearr_78051_80387 = state_78028__$1;
(statearr_78051_80387[(2)] = null);

(statearr_78051_80387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78030 === (2))){
var state_78028__$1 = state_78028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78028__$1,(4),from);
} else {
if((state_val_78030 === (11))){
var inst_78011 = (state_78028[(2)]);
var state_78028__$1 = state_78028;
if(cljs.core.truth_(inst_78011)){
var statearr_78053_80388 = state_78028__$1;
(statearr_78053_80388[(1)] = (12));

} else {
var statearr_78055_80389 = state_78028__$1;
(statearr_78055_80389[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78030 === (9))){
var state_78028__$1 = state_78028;
var statearr_78056_80390 = state_78028__$1;
(statearr_78056_80390[(2)] = null);

(statearr_78056_80390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78030 === (5))){
var state_78028__$1 = state_78028;
if(cljs.core.truth_(close_QMARK_)){
var statearr_78058_80391 = state_78028__$1;
(statearr_78058_80391[(1)] = (8));

} else {
var statearr_78059_80392 = state_78028__$1;
(statearr_78059_80392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78030 === (14))){
var inst_78019 = (state_78028[(2)]);
var state_78028__$1 = state_78028;
var statearr_78060_80393 = state_78028__$1;
(statearr_78060_80393[(2)] = inst_78019);

(statearr_78060_80393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78030 === (10))){
var inst_78008 = (state_78028[(2)]);
var state_78028__$1 = state_78028;
var statearr_78062_80394 = state_78028__$1;
(statearr_78062_80394[(2)] = inst_78008);

(statearr_78062_80394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78030 === (8))){
var inst_78002 = cljs.core.async.close_BANG_(to);
var state_78028__$1 = state_78028;
var statearr_78063_80395 = state_78028__$1;
(statearr_78063_80395[(2)] = inst_78002);

(statearr_78063_80395[(1)] = (10));


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
var cljs$core$async$state_machine__77211__auto__ = null;
var cljs$core$async$state_machine__77211__auto____0 = (function (){
var statearr_78065 = [null,null,null,null,null,null,null,null];
(statearr_78065[(0)] = cljs$core$async$state_machine__77211__auto__);

(statearr_78065[(1)] = (1));

return statearr_78065;
});
var cljs$core$async$state_machine__77211__auto____1 = (function (state_78028){
while(true){
var ret_value__77212__auto__ = (function (){try{while(true){
var result__77213__auto__ = switch__77210__auto__(state_78028);
if(cljs.core.keyword_identical_QMARK_(result__77213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77213__auto__;
}
break;
}
}catch (e78066){var ex__77214__auto__ = e78066;
var statearr_78067_80396 = state_78028;
(statearr_78067_80396[(2)] = ex__77214__auto__);


if(cljs.core.seq((state_78028[(4)]))){
var statearr_78068_80397 = state_78028;
(statearr_78068_80397[(1)] = cljs.core.first((state_78028[(4)])));

} else {
throw ex__77214__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80398 = state_78028;
state_78028 = G__80398;
continue;
} else {
return ret_value__77212__auto__;
}
break;
}
});
cljs$core$async$state_machine__77211__auto__ = function(state_78028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__77211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__77211__auto____1.call(this,state_78028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__77211__auto____0;
cljs$core$async$state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__77211__auto____1;
return cljs$core$async$state_machine__77211__auto__;
})()
})();
var state__77564__auto__ = (function (){var statearr_78069 = f__77563__auto__();
(statearr_78069[(6)] = c__77562__auto___80381);

return statearr_78069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77564__auto__);
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
var process = (function (p__78074){
var vec__78075 = p__78074;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78075,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78075,(1),null);
var job = vec__78075;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__77562__auto___80399 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77563__auto__ = (function (){var switch__77210__auto__ = (function (state_78083){
var state_val_78084 = (state_78083[(1)]);
if((state_val_78084 === (1))){
var state_78083__$1 = state_78083;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_78083__$1,(2),res,v);
} else {
if((state_val_78084 === (2))){
var inst_78080 = (state_78083[(2)]);
var inst_78081 = cljs.core.async.close_BANG_(res);
var state_78083__$1 = (function (){var statearr_78085 = state_78083;
(statearr_78085[(7)] = inst_78080);

return statearr_78085;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_78083__$1,inst_78081);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____0 = (function (){
var statearr_78086 = [null,null,null,null,null,null,null,null];
(statearr_78086[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__);

(statearr_78086[(1)] = (1));

return statearr_78086;
});
var cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____1 = (function (state_78083){
while(true){
var ret_value__77212__auto__ = (function (){try{while(true){
var result__77213__auto__ = switch__77210__auto__(state_78083);
if(cljs.core.keyword_identical_QMARK_(result__77213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77213__auto__;
}
break;
}
}catch (e78087){var ex__77214__auto__ = e78087;
var statearr_78088_80402 = state_78083;
(statearr_78088_80402[(2)] = ex__77214__auto__);


if(cljs.core.seq((state_78083[(4)]))){
var statearr_78089_80403 = state_78083;
(statearr_78089_80403[(1)] = cljs.core.first((state_78083[(4)])));

} else {
throw ex__77214__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80404 = state_78083;
state_78083 = G__80404;
continue;
} else {
return ret_value__77212__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__ = function(state_78083){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____1.call(this,state_78083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__;
})()
})();
var state__77564__auto__ = (function (){var statearr_78090 = f__77563__auto__();
(statearr_78090[(6)] = c__77562__auto___80399);

return statearr_78090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77564__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__78091){
var vec__78092 = p__78091;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78092,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78092,(1),null);
var job = vec__78092;
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
var n__4741__auto___80405 = n;
var __80406 = (0);
while(true){
if((__80406 < n__4741__auto___80405)){
var G__78095_80407 = type;
var G__78095_80408__$1 = (((G__78095_80407 instanceof cljs.core.Keyword))?G__78095_80407.fqn:null);
switch (G__78095_80408__$1) {
case "compute":
var c__77562__auto___80410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__80406,c__77562__auto___80410,G__78095_80407,G__78095_80408__$1,n__4741__auto___80405,jobs,results,process,async){
return (function (){
var f__77563__auto__ = (function (){var switch__77210__auto__ = ((function (__80406,c__77562__auto___80410,G__78095_80407,G__78095_80408__$1,n__4741__auto___80405,jobs,results,process,async){
return (function (state_78108){
var state_val_78109 = (state_78108[(1)]);
if((state_val_78109 === (1))){
var state_78108__$1 = state_78108;
var statearr_78114_80413 = state_78108__$1;
(statearr_78114_80413[(2)] = null);

(statearr_78114_80413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78109 === (2))){
var state_78108__$1 = state_78108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78108__$1,(4),jobs);
} else {
if((state_val_78109 === (3))){
var inst_78106 = (state_78108[(2)]);
var state_78108__$1 = state_78108;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78108__$1,inst_78106);
} else {
if((state_val_78109 === (4))){
var inst_78098 = (state_78108[(2)]);
var inst_78099 = process(inst_78098);
var state_78108__$1 = state_78108;
if(cljs.core.truth_(inst_78099)){
var statearr_78133_80415 = state_78108__$1;
(statearr_78133_80415[(1)] = (5));

} else {
var statearr_78139_80416 = state_78108__$1;
(statearr_78139_80416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78109 === (5))){
var state_78108__$1 = state_78108;
var statearr_78140_80417 = state_78108__$1;
(statearr_78140_80417[(2)] = null);

(statearr_78140_80417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78109 === (6))){
var state_78108__$1 = state_78108;
var statearr_78141_80418 = state_78108__$1;
(statearr_78141_80418[(2)] = null);

(statearr_78141_80418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78109 === (7))){
var inst_78104 = (state_78108[(2)]);
var state_78108__$1 = state_78108;
var statearr_78142_80419 = state_78108__$1;
(statearr_78142_80419[(2)] = inst_78104);

(statearr_78142_80419[(1)] = (3));


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
});})(__80406,c__77562__auto___80410,G__78095_80407,G__78095_80408__$1,n__4741__auto___80405,jobs,results,process,async))
;
return ((function (__80406,switch__77210__auto__,c__77562__auto___80410,G__78095_80407,G__78095_80408__$1,n__4741__auto___80405,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____0 = (function (){
var statearr_78144 = [null,null,null,null,null,null,null];
(statearr_78144[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__);

(statearr_78144[(1)] = (1));

return statearr_78144;
});
var cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____1 = (function (state_78108){
while(true){
var ret_value__77212__auto__ = (function (){try{while(true){
var result__77213__auto__ = switch__77210__auto__(state_78108);
if(cljs.core.keyword_identical_QMARK_(result__77213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77213__auto__;
}
break;
}
}catch (e78145){var ex__77214__auto__ = e78145;
var statearr_78146_80421 = state_78108;
(statearr_78146_80421[(2)] = ex__77214__auto__);


if(cljs.core.seq((state_78108[(4)]))){
var statearr_78147_80422 = state_78108;
(statearr_78147_80422[(1)] = cljs.core.first((state_78108[(4)])));

} else {
throw ex__77214__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80424 = state_78108;
state_78108 = G__80424;
continue;
} else {
return ret_value__77212__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__ = function(state_78108){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____1.call(this,state_78108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__;
})()
;})(__80406,switch__77210__auto__,c__77562__auto___80410,G__78095_80407,G__78095_80408__$1,n__4741__auto___80405,jobs,results,process,async))
})();
var state__77564__auto__ = (function (){var statearr_78149 = f__77563__auto__();
(statearr_78149[(6)] = c__77562__auto___80410);

return statearr_78149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77564__auto__);
});})(__80406,c__77562__auto___80410,G__78095_80407,G__78095_80408__$1,n__4741__auto___80405,jobs,results,process,async))
);


break;
case "async":
var c__77562__auto___80425 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__80406,c__77562__auto___80425,G__78095_80407,G__78095_80408__$1,n__4741__auto___80405,jobs,results,process,async){
return (function (){
var f__77563__auto__ = (function (){var switch__77210__auto__ = ((function (__80406,c__77562__auto___80425,G__78095_80407,G__78095_80408__$1,n__4741__auto___80405,jobs,results,process,async){
return (function (state_78164){
var state_val_78165 = (state_78164[(1)]);
if((state_val_78165 === (1))){
var state_78164__$1 = state_78164;
var statearr_78167_80426 = state_78164__$1;
(statearr_78167_80426[(2)] = null);

(statearr_78167_80426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78165 === (2))){
var state_78164__$1 = state_78164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78164__$1,(4),jobs);
} else {
if((state_val_78165 === (3))){
var inst_78162 = (state_78164[(2)]);
var state_78164__$1 = state_78164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78164__$1,inst_78162);
} else {
if((state_val_78165 === (4))){
var inst_78154 = (state_78164[(2)]);
var inst_78155 = async(inst_78154);
var state_78164__$1 = state_78164;
if(cljs.core.truth_(inst_78155)){
var statearr_78168_80427 = state_78164__$1;
(statearr_78168_80427[(1)] = (5));

} else {
var statearr_78169_80428 = state_78164__$1;
(statearr_78169_80428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78165 === (5))){
var state_78164__$1 = state_78164;
var statearr_78170_80429 = state_78164__$1;
(statearr_78170_80429[(2)] = null);

(statearr_78170_80429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78165 === (6))){
var state_78164__$1 = state_78164;
var statearr_78172_80430 = state_78164__$1;
(statearr_78172_80430[(2)] = null);

(statearr_78172_80430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78165 === (7))){
var inst_78160 = (state_78164[(2)]);
var state_78164__$1 = state_78164;
var statearr_78173_80431 = state_78164__$1;
(statearr_78173_80431[(2)] = inst_78160);

(statearr_78173_80431[(1)] = (3));


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
});})(__80406,c__77562__auto___80425,G__78095_80407,G__78095_80408__$1,n__4741__auto___80405,jobs,results,process,async))
;
return ((function (__80406,switch__77210__auto__,c__77562__auto___80425,G__78095_80407,G__78095_80408__$1,n__4741__auto___80405,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____0 = (function (){
var statearr_78174 = [null,null,null,null,null,null,null];
(statearr_78174[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__);

(statearr_78174[(1)] = (1));

return statearr_78174;
});
var cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____1 = (function (state_78164){
while(true){
var ret_value__77212__auto__ = (function (){try{while(true){
var result__77213__auto__ = switch__77210__auto__(state_78164);
if(cljs.core.keyword_identical_QMARK_(result__77213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77213__auto__;
}
break;
}
}catch (e78175){var ex__77214__auto__ = e78175;
var statearr_78176_80432 = state_78164;
(statearr_78176_80432[(2)] = ex__77214__auto__);


if(cljs.core.seq((state_78164[(4)]))){
var statearr_78180_80433 = state_78164;
(statearr_78180_80433[(1)] = cljs.core.first((state_78164[(4)])));

} else {
throw ex__77214__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80434 = state_78164;
state_78164 = G__80434;
continue;
} else {
return ret_value__77212__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__ = function(state_78164){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____1.call(this,state_78164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__;
})()
;})(__80406,switch__77210__auto__,c__77562__auto___80425,G__78095_80407,G__78095_80408__$1,n__4741__auto___80405,jobs,results,process,async))
})();
var state__77564__auto__ = (function (){var statearr_78182 = f__77563__auto__();
(statearr_78182[(6)] = c__77562__auto___80425);

return statearr_78182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77564__auto__);
});})(__80406,c__77562__auto___80425,G__78095_80407,G__78095_80408__$1,n__4741__auto___80405,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78095_80408__$1)].join('')));

}

var G__80435 = (__80406 + (1));
__80406 = G__80435;
continue;
} else {
}
break;
}

var c__77562__auto___80436 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77563__auto__ = (function (){var switch__77210__auto__ = (function (state_78283){
var state_val_78284 = (state_78283[(1)]);
if((state_val_78284 === (7))){
var inst_78279 = (state_78283[(2)]);
var state_78283__$1 = state_78283;
var statearr_78285_80437 = state_78283__$1;
(statearr_78285_80437[(2)] = inst_78279);

(statearr_78285_80437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78284 === (1))){
var state_78283__$1 = state_78283;
var statearr_78286_80438 = state_78283__$1;
(statearr_78286_80438[(2)] = null);

(statearr_78286_80438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78284 === (4))){
var inst_78186 = (state_78283[(7)]);
var inst_78186__$1 = (state_78283[(2)]);
var inst_78191 = (inst_78186__$1 == null);
var state_78283__$1 = (function (){var statearr_78287 = state_78283;
(statearr_78287[(7)] = inst_78186__$1);

return statearr_78287;
})();
if(cljs.core.truth_(inst_78191)){
var statearr_78288_80439 = state_78283__$1;
(statearr_78288_80439[(1)] = (5));

} else {
var statearr_78289_80440 = state_78283__$1;
(statearr_78289_80440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78284 === (6))){
var inst_78186 = (state_78283[(7)]);
var inst_78198 = (state_78283[(8)]);
var inst_78198__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_78267 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_78271 = [inst_78186,inst_78198__$1];
var inst_78272 = (new cljs.core.PersistentVector(null,2,(5),inst_78267,inst_78271,null));
var state_78283__$1 = (function (){var statearr_78290 = state_78283;
(statearr_78290[(8)] = inst_78198__$1);

return statearr_78290;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_78283__$1,(8),jobs,inst_78272);
} else {
if((state_val_78284 === (3))){
var inst_78281 = (state_78283[(2)]);
var state_78283__$1 = state_78283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78283__$1,inst_78281);
} else {
if((state_val_78284 === (2))){
var state_78283__$1 = state_78283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78283__$1,(4),from);
} else {
if((state_val_78284 === (9))){
var inst_78276 = (state_78283[(2)]);
var state_78283__$1 = (function (){var statearr_78292 = state_78283;
(statearr_78292[(9)] = inst_78276);

return statearr_78292;
})();
var statearr_78293_80443 = state_78283__$1;
(statearr_78293_80443[(2)] = null);

(statearr_78293_80443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78284 === (5))){
var inst_78195 = cljs.core.async.close_BANG_(jobs);
var state_78283__$1 = state_78283;
var statearr_78303_80445 = state_78283__$1;
(statearr_78303_80445[(2)] = inst_78195);

(statearr_78303_80445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78284 === (8))){
var inst_78198 = (state_78283[(8)]);
var inst_78274 = (state_78283[(2)]);
var state_78283__$1 = (function (){var statearr_78304 = state_78283;
(statearr_78304[(10)] = inst_78274);

return statearr_78304;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_78283__$1,(9),results,inst_78198);
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
var cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____0 = (function (){
var statearr_78309 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_78309[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__);

(statearr_78309[(1)] = (1));

return statearr_78309;
});
var cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____1 = (function (state_78283){
while(true){
var ret_value__77212__auto__ = (function (){try{while(true){
var result__77213__auto__ = switch__77210__auto__(state_78283);
if(cljs.core.keyword_identical_QMARK_(result__77213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77213__auto__;
}
break;
}
}catch (e78310){var ex__77214__auto__ = e78310;
var statearr_78311_80447 = state_78283;
(statearr_78311_80447[(2)] = ex__77214__auto__);


if(cljs.core.seq((state_78283[(4)]))){
var statearr_78312_80448 = state_78283;
(statearr_78312_80448[(1)] = cljs.core.first((state_78283[(4)])));

} else {
throw ex__77214__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80449 = state_78283;
state_78283 = G__80449;
continue;
} else {
return ret_value__77212__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__ = function(state_78283){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____1.call(this,state_78283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__;
})()
})();
var state__77564__auto__ = (function (){var statearr_78321 = f__77563__auto__();
(statearr_78321[(6)] = c__77562__auto___80436);

return statearr_78321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77564__auto__);
}));


var c__77562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77563__auto__ = (function (){var switch__77210__auto__ = (function (state_78364){
var state_val_78365 = (state_78364[(1)]);
if((state_val_78365 === (7))){
var inst_78360 = (state_78364[(2)]);
var state_78364__$1 = state_78364;
var statearr_78366_80450 = state_78364__$1;
(statearr_78366_80450[(2)] = inst_78360);

(statearr_78366_80450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78365 === (20))){
var state_78364__$1 = state_78364;
var statearr_78367_80451 = state_78364__$1;
(statearr_78367_80451[(2)] = null);

(statearr_78367_80451[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78365 === (1))){
var state_78364__$1 = state_78364;
var statearr_78368_80452 = state_78364__$1;
(statearr_78368_80452[(2)] = null);

(statearr_78368_80452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78365 === (4))){
var inst_78328 = (state_78364[(7)]);
var inst_78328__$1 = (state_78364[(2)]);
var inst_78329 = (inst_78328__$1 == null);
var state_78364__$1 = (function (){var statearr_78370 = state_78364;
(statearr_78370[(7)] = inst_78328__$1);

return statearr_78370;
})();
if(cljs.core.truth_(inst_78329)){
var statearr_78371_80456 = state_78364__$1;
(statearr_78371_80456[(1)] = (5));

} else {
var statearr_78372_80457 = state_78364__$1;
(statearr_78372_80457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78365 === (15))){
var inst_78342 = (state_78364[(8)]);
var state_78364__$1 = state_78364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_78364__$1,(18),to,inst_78342);
} else {
if((state_val_78365 === (21))){
var inst_78355 = (state_78364[(2)]);
var state_78364__$1 = state_78364;
var statearr_78373_80461 = state_78364__$1;
(statearr_78373_80461[(2)] = inst_78355);

(statearr_78373_80461[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78365 === (13))){
var inst_78357 = (state_78364[(2)]);
var state_78364__$1 = (function (){var statearr_78374 = state_78364;
(statearr_78374[(9)] = inst_78357);

return statearr_78374;
})();
var statearr_78375_80466 = state_78364__$1;
(statearr_78375_80466[(2)] = null);

(statearr_78375_80466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78365 === (6))){
var inst_78328 = (state_78364[(7)]);
var state_78364__$1 = state_78364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78364__$1,(11),inst_78328);
} else {
if((state_val_78365 === (17))){
var inst_78350 = (state_78364[(2)]);
var state_78364__$1 = state_78364;
if(cljs.core.truth_(inst_78350)){
var statearr_78376_80467 = state_78364__$1;
(statearr_78376_80467[(1)] = (19));

} else {
var statearr_78377_80468 = state_78364__$1;
(statearr_78377_80468[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78365 === (3))){
var inst_78362 = (state_78364[(2)]);
var state_78364__$1 = state_78364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78364__$1,inst_78362);
} else {
if((state_val_78365 === (12))){
var inst_78338 = (state_78364[(10)]);
var state_78364__$1 = state_78364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78364__$1,(14),inst_78338);
} else {
if((state_val_78365 === (2))){
var state_78364__$1 = state_78364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78364__$1,(4),results);
} else {
if((state_val_78365 === (19))){
var state_78364__$1 = state_78364;
var statearr_78378_80469 = state_78364__$1;
(statearr_78378_80469[(2)] = null);

(statearr_78378_80469[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78365 === (11))){
var inst_78338 = (state_78364[(2)]);
var state_78364__$1 = (function (){var statearr_78379 = state_78364;
(statearr_78379[(10)] = inst_78338);

return statearr_78379;
})();
var statearr_78380_80470 = state_78364__$1;
(statearr_78380_80470[(2)] = null);

(statearr_78380_80470[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78365 === (9))){
var state_78364__$1 = state_78364;
var statearr_78381_80471 = state_78364__$1;
(statearr_78381_80471[(2)] = null);

(statearr_78381_80471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78365 === (5))){
var state_78364__$1 = state_78364;
if(cljs.core.truth_(close_QMARK_)){
var statearr_78385_80472 = state_78364__$1;
(statearr_78385_80472[(1)] = (8));

} else {
var statearr_78392_80473 = state_78364__$1;
(statearr_78392_80473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78365 === (14))){
var inst_78344 = (state_78364[(11)]);
var inst_78342 = (state_78364[(8)]);
var inst_78342__$1 = (state_78364[(2)]);
var inst_78343 = (inst_78342__$1 == null);
var inst_78344__$1 = cljs.core.not(inst_78343);
var state_78364__$1 = (function (){var statearr_78393 = state_78364;
(statearr_78393[(11)] = inst_78344__$1);

(statearr_78393[(8)] = inst_78342__$1);

return statearr_78393;
})();
if(inst_78344__$1){
var statearr_78394_80474 = state_78364__$1;
(statearr_78394_80474[(1)] = (15));

} else {
var statearr_78395_80475 = state_78364__$1;
(statearr_78395_80475[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78365 === (16))){
var inst_78344 = (state_78364[(11)]);
var state_78364__$1 = state_78364;
var statearr_78400_80476 = state_78364__$1;
(statearr_78400_80476[(2)] = inst_78344);

(statearr_78400_80476[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78365 === (10))){
var inst_78335 = (state_78364[(2)]);
var state_78364__$1 = state_78364;
var statearr_78401_80479 = state_78364__$1;
(statearr_78401_80479[(2)] = inst_78335);

(statearr_78401_80479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78365 === (18))){
var inst_78347 = (state_78364[(2)]);
var state_78364__$1 = state_78364;
var statearr_78402_80480 = state_78364__$1;
(statearr_78402_80480[(2)] = inst_78347);

(statearr_78402_80480[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78365 === (8))){
var inst_78332 = cljs.core.async.close_BANG_(to);
var state_78364__$1 = state_78364;
var statearr_78404_80481 = state_78364__$1;
(statearr_78404_80481[(2)] = inst_78332);

(statearr_78404_80481[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____0 = (function (){
var statearr_78407 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78407[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__);

(statearr_78407[(1)] = (1));

return statearr_78407;
});
var cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____1 = (function (state_78364){
while(true){
var ret_value__77212__auto__ = (function (){try{while(true){
var result__77213__auto__ = switch__77210__auto__(state_78364);
if(cljs.core.keyword_identical_QMARK_(result__77213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77213__auto__;
}
break;
}
}catch (e78408){var ex__77214__auto__ = e78408;
var statearr_78413_80482 = state_78364;
(statearr_78413_80482[(2)] = ex__77214__auto__);


if(cljs.core.seq((state_78364[(4)]))){
var statearr_78414_80483 = state_78364;
(statearr_78414_80483[(1)] = cljs.core.first((state_78364[(4)])));

} else {
throw ex__77214__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80484 = state_78364;
state_78364 = G__80484;
continue;
} else {
return ret_value__77212__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__ = function(state_78364){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____1.call(this,state_78364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__77211__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__77211__auto__;
})()
})();
var state__77564__auto__ = (function (){var statearr_78418 = f__77563__auto__();
(statearr_78418[(6)] = c__77562__auto__);

return statearr_78418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77564__auto__);
}));

return c__77562__auto__;
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
var G__78426 = arguments.length;
switch (G__78426) {
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
var G__78448 = arguments.length;
switch (G__78448) {
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
var G__78457 = arguments.length;
switch (G__78457) {
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
var c__77562__auto___80491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77563__auto__ = (function (){var switch__77210__auto__ = (function (state_78489){
var state_val_78490 = (state_78489[(1)]);
if((state_val_78490 === (7))){
var inst_78485 = (state_78489[(2)]);
var state_78489__$1 = state_78489;
var statearr_78495_80492 = state_78489__$1;
(statearr_78495_80492[(2)] = inst_78485);

(statearr_78495_80492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78490 === (1))){
var state_78489__$1 = state_78489;
var statearr_78496_80493 = state_78489__$1;
(statearr_78496_80493[(2)] = null);

(statearr_78496_80493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78490 === (4))){
var inst_78465 = (state_78489[(7)]);
var inst_78465__$1 = (state_78489[(2)]);
var inst_78466 = (inst_78465__$1 == null);
var state_78489__$1 = (function (){var statearr_78498 = state_78489;
(statearr_78498[(7)] = inst_78465__$1);

return statearr_78498;
})();
if(cljs.core.truth_(inst_78466)){
var statearr_78499_80494 = state_78489__$1;
(statearr_78499_80494[(1)] = (5));

} else {
var statearr_78500_80495 = state_78489__$1;
(statearr_78500_80495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78490 === (13))){
var state_78489__$1 = state_78489;
var statearr_78505_80496 = state_78489__$1;
(statearr_78505_80496[(2)] = null);

(statearr_78505_80496[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78490 === (6))){
var inst_78465 = (state_78489[(7)]);
var inst_78471 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_78465) : p.call(null,inst_78465));
var state_78489__$1 = state_78489;
if(cljs.core.truth_(inst_78471)){
var statearr_78506_80497 = state_78489__$1;
(statearr_78506_80497[(1)] = (9));

} else {
var statearr_78507_80498 = state_78489__$1;
(statearr_78507_80498[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78490 === (3))){
var inst_78487 = (state_78489[(2)]);
var state_78489__$1 = state_78489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78489__$1,inst_78487);
} else {
if((state_val_78490 === (12))){
var state_78489__$1 = state_78489;
var statearr_78508_80499 = state_78489__$1;
(statearr_78508_80499[(2)] = null);

(statearr_78508_80499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78490 === (2))){
var state_78489__$1 = state_78489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78489__$1,(4),ch);
} else {
if((state_val_78490 === (11))){
var inst_78465 = (state_78489[(7)]);
var inst_78476 = (state_78489[(2)]);
var state_78489__$1 = state_78489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_78489__$1,(8),inst_78476,inst_78465);
} else {
if((state_val_78490 === (9))){
var state_78489__$1 = state_78489;
var statearr_78509_80500 = state_78489__$1;
(statearr_78509_80500[(2)] = tc);

(statearr_78509_80500[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78490 === (5))){
var inst_78468 = cljs.core.async.close_BANG_(tc);
var inst_78469 = cljs.core.async.close_BANG_(fc);
var state_78489__$1 = (function (){var statearr_78510 = state_78489;
(statearr_78510[(8)] = inst_78468);

return statearr_78510;
})();
var statearr_78511_80501 = state_78489__$1;
(statearr_78511_80501[(2)] = inst_78469);

(statearr_78511_80501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78490 === (14))){
var inst_78483 = (state_78489[(2)]);
var state_78489__$1 = state_78489;
var statearr_78512_80502 = state_78489__$1;
(statearr_78512_80502[(2)] = inst_78483);

(statearr_78512_80502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78490 === (10))){
var state_78489__$1 = state_78489;
var statearr_78513_80503 = state_78489__$1;
(statearr_78513_80503[(2)] = fc);

(statearr_78513_80503[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78490 === (8))){
var inst_78478 = (state_78489[(2)]);
var state_78489__$1 = state_78489;
if(cljs.core.truth_(inst_78478)){
var statearr_78516_80504 = state_78489__$1;
(statearr_78516_80504[(1)] = (12));

} else {
var statearr_78517_80505 = state_78489__$1;
(statearr_78517_80505[(1)] = (13));

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
var cljs$core$async$state_machine__77211__auto__ = null;
var cljs$core$async$state_machine__77211__auto____0 = (function (){
var statearr_78520 = [null,null,null,null,null,null,null,null,null];
(statearr_78520[(0)] = cljs$core$async$state_machine__77211__auto__);

(statearr_78520[(1)] = (1));

return statearr_78520;
});
var cljs$core$async$state_machine__77211__auto____1 = (function (state_78489){
while(true){
var ret_value__77212__auto__ = (function (){try{while(true){
var result__77213__auto__ = switch__77210__auto__(state_78489);
if(cljs.core.keyword_identical_QMARK_(result__77213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77213__auto__;
}
break;
}
}catch (e78521){var ex__77214__auto__ = e78521;
var statearr_78522_80506 = state_78489;
(statearr_78522_80506[(2)] = ex__77214__auto__);


if(cljs.core.seq((state_78489[(4)]))){
var statearr_78523_80507 = state_78489;
(statearr_78523_80507[(1)] = cljs.core.first((state_78489[(4)])));

} else {
throw ex__77214__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80508 = state_78489;
state_78489 = G__80508;
continue;
} else {
return ret_value__77212__auto__;
}
break;
}
});
cljs$core$async$state_machine__77211__auto__ = function(state_78489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__77211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__77211__auto____1.call(this,state_78489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__77211__auto____0;
cljs$core$async$state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__77211__auto____1;
return cljs$core$async$state_machine__77211__auto__;
})()
})();
var state__77564__auto__ = (function (){var statearr_78524 = f__77563__auto__();
(statearr_78524[(6)] = c__77562__auto___80491);

return statearr_78524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77564__auto__);
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
var c__77562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77563__auto__ = (function (){var switch__77210__auto__ = (function (state_78555){
var state_val_78556 = (state_78555[(1)]);
if((state_val_78556 === (7))){
var inst_78551 = (state_78555[(2)]);
var state_78555__$1 = state_78555;
var statearr_78557_80509 = state_78555__$1;
(statearr_78557_80509[(2)] = inst_78551);

(statearr_78557_80509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78556 === (1))){
var inst_78530 = init;
var inst_78531 = inst_78530;
var state_78555__$1 = (function (){var statearr_78558 = state_78555;
(statearr_78558[(7)] = inst_78531);

return statearr_78558;
})();
var statearr_78560_80510 = state_78555__$1;
(statearr_78560_80510[(2)] = null);

(statearr_78560_80510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78556 === (4))){
var inst_78534 = (state_78555[(8)]);
var inst_78534__$1 = (state_78555[(2)]);
var inst_78539 = (inst_78534__$1 == null);
var state_78555__$1 = (function (){var statearr_78561 = state_78555;
(statearr_78561[(8)] = inst_78534__$1);

return statearr_78561;
})();
if(cljs.core.truth_(inst_78539)){
var statearr_78562_80511 = state_78555__$1;
(statearr_78562_80511[(1)] = (5));

} else {
var statearr_78563_80512 = state_78555__$1;
(statearr_78563_80512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78556 === (6))){
var inst_78542 = (state_78555[(9)]);
var inst_78531 = (state_78555[(7)]);
var inst_78534 = (state_78555[(8)]);
var inst_78542__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_78531,inst_78534) : f.call(null,inst_78531,inst_78534));
var inst_78543 = cljs.core.reduced_QMARK_(inst_78542__$1);
var state_78555__$1 = (function (){var statearr_78567 = state_78555;
(statearr_78567[(9)] = inst_78542__$1);

return statearr_78567;
})();
if(inst_78543){
var statearr_78568_80514 = state_78555__$1;
(statearr_78568_80514[(1)] = (8));

} else {
var statearr_78569_80515 = state_78555__$1;
(statearr_78569_80515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78556 === (3))){
var inst_78553 = (state_78555[(2)]);
var state_78555__$1 = state_78555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78555__$1,inst_78553);
} else {
if((state_val_78556 === (2))){
var state_78555__$1 = state_78555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78555__$1,(4),ch);
} else {
if((state_val_78556 === (9))){
var inst_78542 = (state_78555[(9)]);
var inst_78531 = inst_78542;
var state_78555__$1 = (function (){var statearr_78570 = state_78555;
(statearr_78570[(7)] = inst_78531);

return statearr_78570;
})();
var statearr_78571_80517 = state_78555__$1;
(statearr_78571_80517[(2)] = null);

(statearr_78571_80517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78556 === (5))){
var inst_78531 = (state_78555[(7)]);
var state_78555__$1 = state_78555;
var statearr_78572_80518 = state_78555__$1;
(statearr_78572_80518[(2)] = inst_78531);

(statearr_78572_80518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78556 === (10))){
var inst_78549 = (state_78555[(2)]);
var state_78555__$1 = state_78555;
var statearr_78573_80519 = state_78555__$1;
(statearr_78573_80519[(2)] = inst_78549);

(statearr_78573_80519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78556 === (8))){
var inst_78542 = (state_78555[(9)]);
var inst_78545 = cljs.core.deref(inst_78542);
var state_78555__$1 = state_78555;
var statearr_78574_80520 = state_78555__$1;
(statearr_78574_80520[(2)] = inst_78545);

(statearr_78574_80520[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__77211__auto__ = null;
var cljs$core$async$reduce_$_state_machine__77211__auto____0 = (function (){
var statearr_78575 = [null,null,null,null,null,null,null,null,null,null];
(statearr_78575[(0)] = cljs$core$async$reduce_$_state_machine__77211__auto__);

(statearr_78575[(1)] = (1));

return statearr_78575;
});
var cljs$core$async$reduce_$_state_machine__77211__auto____1 = (function (state_78555){
while(true){
var ret_value__77212__auto__ = (function (){try{while(true){
var result__77213__auto__ = switch__77210__auto__(state_78555);
if(cljs.core.keyword_identical_QMARK_(result__77213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77213__auto__;
}
break;
}
}catch (e78576){var ex__77214__auto__ = e78576;
var statearr_78577_80521 = state_78555;
(statearr_78577_80521[(2)] = ex__77214__auto__);


if(cljs.core.seq((state_78555[(4)]))){
var statearr_78578_80522 = state_78555;
(statearr_78578_80522[(1)] = cljs.core.first((state_78555[(4)])));

} else {
throw ex__77214__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80523 = state_78555;
state_78555 = G__80523;
continue;
} else {
return ret_value__77212__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__77211__auto__ = function(state_78555){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__77211__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__77211__auto____1.call(this,state_78555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__77211__auto____0;
cljs$core$async$reduce_$_state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__77211__auto____1;
return cljs$core$async$reduce_$_state_machine__77211__auto__;
})()
})();
var state__77564__auto__ = (function (){var statearr_78579 = f__77563__auto__();
(statearr_78579[(6)] = c__77562__auto__);

return statearr_78579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77564__auto__);
}));

return c__77562__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__77562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77563__auto__ = (function (){var switch__77210__auto__ = (function (state_78585){
var state_val_78586 = (state_78585[(1)]);
if((state_val_78586 === (1))){
var inst_78580 = cljs.core.async.reduce(f__$1,init,ch);
var state_78585__$1 = state_78585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78585__$1,(2),inst_78580);
} else {
if((state_val_78586 === (2))){
var inst_78582 = (state_78585[(2)]);
var inst_78583 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_78582) : f__$1.call(null,inst_78582));
var state_78585__$1 = state_78585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78585__$1,inst_78583);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__77211__auto__ = null;
var cljs$core$async$transduce_$_state_machine__77211__auto____0 = (function (){
var statearr_78587 = [null,null,null,null,null,null,null];
(statearr_78587[(0)] = cljs$core$async$transduce_$_state_machine__77211__auto__);

(statearr_78587[(1)] = (1));

return statearr_78587;
});
var cljs$core$async$transduce_$_state_machine__77211__auto____1 = (function (state_78585){
while(true){
var ret_value__77212__auto__ = (function (){try{while(true){
var result__77213__auto__ = switch__77210__auto__(state_78585);
if(cljs.core.keyword_identical_QMARK_(result__77213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77213__auto__;
}
break;
}
}catch (e78588){var ex__77214__auto__ = e78588;
var statearr_78589_80525 = state_78585;
(statearr_78589_80525[(2)] = ex__77214__auto__);


if(cljs.core.seq((state_78585[(4)]))){
var statearr_78590_80526 = state_78585;
(statearr_78590_80526[(1)] = cljs.core.first((state_78585[(4)])));

} else {
throw ex__77214__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80527 = state_78585;
state_78585 = G__80527;
continue;
} else {
return ret_value__77212__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__77211__auto__ = function(state_78585){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__77211__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__77211__auto____1.call(this,state_78585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__77211__auto____0;
cljs$core$async$transduce_$_state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__77211__auto____1;
return cljs$core$async$transduce_$_state_machine__77211__auto__;
})()
})();
var state__77564__auto__ = (function (){var statearr_78591 = f__77563__auto__();
(statearr_78591[(6)] = c__77562__auto__);

return statearr_78591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77564__auto__);
}));

return c__77562__auto__;
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
var G__78593 = arguments.length;
switch (G__78593) {
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
var c__77562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77563__auto__ = (function (){var switch__77210__auto__ = (function (state_78618){
var state_val_78619 = (state_78618[(1)]);
if((state_val_78619 === (7))){
var inst_78600 = (state_78618[(2)]);
var state_78618__$1 = state_78618;
var statearr_78620_80531 = state_78618__$1;
(statearr_78620_80531[(2)] = inst_78600);

(statearr_78620_80531[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78619 === (1))){
var inst_78594 = cljs.core.seq(coll);
var inst_78595 = inst_78594;
var state_78618__$1 = (function (){var statearr_78621 = state_78618;
(statearr_78621[(7)] = inst_78595);

return statearr_78621;
})();
var statearr_78622_80532 = state_78618__$1;
(statearr_78622_80532[(2)] = null);

(statearr_78622_80532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78619 === (4))){
var inst_78595 = (state_78618[(7)]);
var inst_78598 = cljs.core.first(inst_78595);
var state_78618__$1 = state_78618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_78618__$1,(7),ch,inst_78598);
} else {
if((state_val_78619 === (13))){
var inst_78612 = (state_78618[(2)]);
var state_78618__$1 = state_78618;
var statearr_78623_80533 = state_78618__$1;
(statearr_78623_80533[(2)] = inst_78612);

(statearr_78623_80533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78619 === (6))){
var inst_78603 = (state_78618[(2)]);
var state_78618__$1 = state_78618;
if(cljs.core.truth_(inst_78603)){
var statearr_78624_80534 = state_78618__$1;
(statearr_78624_80534[(1)] = (8));

} else {
var statearr_78625_80535 = state_78618__$1;
(statearr_78625_80535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78619 === (3))){
var inst_78616 = (state_78618[(2)]);
var state_78618__$1 = state_78618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78618__$1,inst_78616);
} else {
if((state_val_78619 === (12))){
var state_78618__$1 = state_78618;
var statearr_78626_80536 = state_78618__$1;
(statearr_78626_80536[(2)] = null);

(statearr_78626_80536[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78619 === (2))){
var inst_78595 = (state_78618[(7)]);
var state_78618__$1 = state_78618;
if(cljs.core.truth_(inst_78595)){
var statearr_78627_80537 = state_78618__$1;
(statearr_78627_80537[(1)] = (4));

} else {
var statearr_78628_80538 = state_78618__$1;
(statearr_78628_80538[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78619 === (11))){
var inst_78609 = cljs.core.async.close_BANG_(ch);
var state_78618__$1 = state_78618;
var statearr_78629_80539 = state_78618__$1;
(statearr_78629_80539[(2)] = inst_78609);

(statearr_78629_80539[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78619 === (9))){
var state_78618__$1 = state_78618;
if(cljs.core.truth_(close_QMARK_)){
var statearr_78630_80540 = state_78618__$1;
(statearr_78630_80540[(1)] = (11));

} else {
var statearr_78631_80541 = state_78618__$1;
(statearr_78631_80541[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78619 === (5))){
var inst_78595 = (state_78618[(7)]);
var state_78618__$1 = state_78618;
var statearr_78632_80542 = state_78618__$1;
(statearr_78632_80542[(2)] = inst_78595);

(statearr_78632_80542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78619 === (10))){
var inst_78614 = (state_78618[(2)]);
var state_78618__$1 = state_78618;
var statearr_78633_80543 = state_78618__$1;
(statearr_78633_80543[(2)] = inst_78614);

(statearr_78633_80543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78619 === (8))){
var inst_78595 = (state_78618[(7)]);
var inst_78605 = cljs.core.next(inst_78595);
var inst_78595__$1 = inst_78605;
var state_78618__$1 = (function (){var statearr_78634 = state_78618;
(statearr_78634[(7)] = inst_78595__$1);

return statearr_78634;
})();
var statearr_78635_80546 = state_78618__$1;
(statearr_78635_80546[(2)] = null);

(statearr_78635_80546[(1)] = (2));


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
var cljs$core$async$state_machine__77211__auto__ = null;
var cljs$core$async$state_machine__77211__auto____0 = (function (){
var statearr_78636 = [null,null,null,null,null,null,null,null];
(statearr_78636[(0)] = cljs$core$async$state_machine__77211__auto__);

(statearr_78636[(1)] = (1));

return statearr_78636;
});
var cljs$core$async$state_machine__77211__auto____1 = (function (state_78618){
while(true){
var ret_value__77212__auto__ = (function (){try{while(true){
var result__77213__auto__ = switch__77210__auto__(state_78618);
if(cljs.core.keyword_identical_QMARK_(result__77213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77213__auto__;
}
break;
}
}catch (e78637){var ex__77214__auto__ = e78637;
var statearr_78638_80547 = state_78618;
(statearr_78638_80547[(2)] = ex__77214__auto__);


if(cljs.core.seq((state_78618[(4)]))){
var statearr_78639_80548 = state_78618;
(statearr_78639_80548[(1)] = cljs.core.first((state_78618[(4)])));

} else {
throw ex__77214__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80549 = state_78618;
state_78618 = G__80549;
continue;
} else {
return ret_value__77212__auto__;
}
break;
}
});
cljs$core$async$state_machine__77211__auto__ = function(state_78618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__77211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__77211__auto____1.call(this,state_78618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__77211__auto____0;
cljs$core$async$state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__77211__auto____1;
return cljs$core$async$state_machine__77211__auto__;
})()
})();
var state__77564__auto__ = (function (){var statearr_78640 = f__77563__auto__();
(statearr_78640[(6)] = c__77562__auto__);

return statearr_78640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77564__auto__);
}));

return c__77562__auto__;
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
var G__78643 = arguments.length;
switch (G__78643) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_80551 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_80551(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_80552 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_80552(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_80553 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_80553(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_80554 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_80554(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async78666 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async78666 = (function (ch,cs,meta78667){
this.ch = ch;
this.cs = cs;
this.meta78667 = meta78667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async78666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_78668,meta78667__$1){
var self__ = this;
var _78668__$1 = this;
return (new cljs.core.async.t_cljs$core$async78666(self__.ch,self__.cs,meta78667__$1));
}));

(cljs.core.async.t_cljs$core$async78666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_78668){
var self__ = this;
var _78668__$1 = this;
return self__.meta78667;
}));

(cljs.core.async.t_cljs$core$async78666.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async78666.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async78666.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async78666.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async78666.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async78666.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async78666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta78667","meta78667",1791735212,null)], null);
}));

(cljs.core.async.t_cljs$core$async78666.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async78666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async78666");

(cljs.core.async.t_cljs$core$async78666.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async78666");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async78666.
 */
cljs.core.async.__GT_t_cljs$core$async78666 = (function cljs$core$async$mult_$___GT_t_cljs$core$async78666(ch__$1,cs__$1,meta78667){
return (new cljs.core.async.t_cljs$core$async78666(ch__$1,cs__$1,meta78667));
});

}

return (new cljs.core.async.t_cljs$core$async78666(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__77562__auto___80557 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77563__auto__ = (function (){var switch__77210__auto__ = (function (state_78808){
var state_val_78809 = (state_78808[(1)]);
if((state_val_78809 === (7))){
var inst_78804 = (state_78808[(2)]);
var state_78808__$1 = state_78808;
var statearr_78810_80559 = state_78808__$1;
(statearr_78810_80559[(2)] = inst_78804);

(statearr_78810_80559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (20))){
var inst_78709 = (state_78808[(7)]);
var inst_78721 = cljs.core.first(inst_78709);
var inst_78722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78721,(0),null);
var inst_78723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78721,(1),null);
var state_78808__$1 = (function (){var statearr_78811 = state_78808;
(statearr_78811[(8)] = inst_78722);

return statearr_78811;
})();
if(cljs.core.truth_(inst_78723)){
var statearr_78812_80560 = state_78808__$1;
(statearr_78812_80560[(1)] = (22));

} else {
var statearr_78813_80561 = state_78808__$1;
(statearr_78813_80561[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (27))){
var inst_78753 = (state_78808[(9)]);
var inst_78678 = (state_78808[(10)]);
var inst_78758 = (state_78808[(11)]);
var inst_78751 = (state_78808[(12)]);
var inst_78758__$1 = cljs.core._nth(inst_78751,inst_78753);
var inst_78759 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_78758__$1,inst_78678,done);
var state_78808__$1 = (function (){var statearr_78814 = state_78808;
(statearr_78814[(11)] = inst_78758__$1);

return statearr_78814;
})();
if(cljs.core.truth_(inst_78759)){
var statearr_78815_80562 = state_78808__$1;
(statearr_78815_80562[(1)] = (30));

} else {
var statearr_78816_80563 = state_78808__$1;
(statearr_78816_80563[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (1))){
var state_78808__$1 = state_78808;
var statearr_78817_80564 = state_78808__$1;
(statearr_78817_80564[(2)] = null);

(statearr_78817_80564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (24))){
var inst_78709 = (state_78808[(7)]);
var inst_78728 = (state_78808[(2)]);
var inst_78729 = cljs.core.next(inst_78709);
var inst_78687 = inst_78729;
var inst_78688 = null;
var inst_78689 = (0);
var inst_78690 = (0);
var state_78808__$1 = (function (){var statearr_78818 = state_78808;
(statearr_78818[(13)] = inst_78689);

(statearr_78818[(14)] = inst_78688);

(statearr_78818[(15)] = inst_78690);

(statearr_78818[(16)] = inst_78728);

(statearr_78818[(17)] = inst_78687);

return statearr_78818;
})();
var statearr_78819_80565 = state_78808__$1;
(statearr_78819_80565[(2)] = null);

(statearr_78819_80565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (39))){
var state_78808__$1 = state_78808;
var statearr_78823_80566 = state_78808__$1;
(statearr_78823_80566[(2)] = null);

(statearr_78823_80566[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (4))){
var inst_78678 = (state_78808[(10)]);
var inst_78678__$1 = (state_78808[(2)]);
var inst_78679 = (inst_78678__$1 == null);
var state_78808__$1 = (function (){var statearr_78824 = state_78808;
(statearr_78824[(10)] = inst_78678__$1);

return statearr_78824;
})();
if(cljs.core.truth_(inst_78679)){
var statearr_78825_80567 = state_78808__$1;
(statearr_78825_80567[(1)] = (5));

} else {
var statearr_78826_80568 = state_78808__$1;
(statearr_78826_80568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (15))){
var inst_78689 = (state_78808[(13)]);
var inst_78688 = (state_78808[(14)]);
var inst_78690 = (state_78808[(15)]);
var inst_78687 = (state_78808[(17)]);
var inst_78705 = (state_78808[(2)]);
var inst_78706 = (inst_78690 + (1));
var tmp78820 = inst_78689;
var tmp78821 = inst_78688;
var tmp78822 = inst_78687;
var inst_78687__$1 = tmp78822;
var inst_78688__$1 = tmp78821;
var inst_78689__$1 = tmp78820;
var inst_78690__$1 = inst_78706;
var state_78808__$1 = (function (){var statearr_78827 = state_78808;
(statearr_78827[(13)] = inst_78689__$1);

(statearr_78827[(14)] = inst_78688__$1);

(statearr_78827[(18)] = inst_78705);

(statearr_78827[(15)] = inst_78690__$1);

(statearr_78827[(17)] = inst_78687__$1);

return statearr_78827;
})();
var statearr_78830_80569 = state_78808__$1;
(statearr_78830_80569[(2)] = null);

(statearr_78830_80569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (21))){
var inst_78732 = (state_78808[(2)]);
var state_78808__$1 = state_78808;
var statearr_78835_80570 = state_78808__$1;
(statearr_78835_80570[(2)] = inst_78732);

(statearr_78835_80570[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (31))){
var inst_78758 = (state_78808[(11)]);
var inst_78762 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_78758);
var state_78808__$1 = state_78808;
var statearr_78839_80571 = state_78808__$1;
(statearr_78839_80571[(2)] = inst_78762);

(statearr_78839_80571[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (32))){
var inst_78753 = (state_78808[(9)]);
var inst_78750 = (state_78808[(19)]);
var inst_78751 = (state_78808[(12)]);
var inst_78752 = (state_78808[(20)]);
var inst_78764 = (state_78808[(2)]);
var inst_78765 = (inst_78753 + (1));
var tmp78832 = inst_78750;
var tmp78833 = inst_78751;
var tmp78834 = inst_78752;
var inst_78750__$1 = tmp78832;
var inst_78751__$1 = tmp78833;
var inst_78752__$1 = tmp78834;
var inst_78753__$1 = inst_78765;
var state_78808__$1 = (function (){var statearr_78840 = state_78808;
(statearr_78840[(9)] = inst_78753__$1);

(statearr_78840[(21)] = inst_78764);

(statearr_78840[(19)] = inst_78750__$1);

(statearr_78840[(12)] = inst_78751__$1);

(statearr_78840[(20)] = inst_78752__$1);

return statearr_78840;
})();
var statearr_78841_80572 = state_78808__$1;
(statearr_78841_80572[(2)] = null);

(statearr_78841_80572[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (40))){
var inst_78777 = (state_78808[(22)]);
var inst_78781 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_78777);
var state_78808__$1 = state_78808;
var statearr_78845_80573 = state_78808__$1;
(statearr_78845_80573[(2)] = inst_78781);

(statearr_78845_80573[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (33))){
var inst_78768 = (state_78808[(23)]);
var inst_78770 = cljs.core.chunked_seq_QMARK_(inst_78768);
var state_78808__$1 = state_78808;
if(inst_78770){
var statearr_78848_80574 = state_78808__$1;
(statearr_78848_80574[(1)] = (36));

} else {
var statearr_78850_80575 = state_78808__$1;
(statearr_78850_80575[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (13))){
var inst_78699 = (state_78808[(24)]);
var inst_78702 = cljs.core.async.close_BANG_(inst_78699);
var state_78808__$1 = state_78808;
var statearr_78851_80576 = state_78808__$1;
(statearr_78851_80576[(2)] = inst_78702);

(statearr_78851_80576[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (22))){
var inst_78722 = (state_78808[(8)]);
var inst_78725 = cljs.core.async.close_BANG_(inst_78722);
var state_78808__$1 = state_78808;
var statearr_78852_80577 = state_78808__$1;
(statearr_78852_80577[(2)] = inst_78725);

(statearr_78852_80577[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (36))){
var inst_78768 = (state_78808[(23)]);
var inst_78772 = cljs.core.chunk_first(inst_78768);
var inst_78773 = cljs.core.chunk_rest(inst_78768);
var inst_78774 = cljs.core.count(inst_78772);
var inst_78750 = inst_78773;
var inst_78751 = inst_78772;
var inst_78752 = inst_78774;
var inst_78753 = (0);
var state_78808__$1 = (function (){var statearr_78853 = state_78808;
(statearr_78853[(9)] = inst_78753);

(statearr_78853[(19)] = inst_78750);

(statearr_78853[(12)] = inst_78751);

(statearr_78853[(20)] = inst_78752);

return statearr_78853;
})();
var statearr_78854_80578 = state_78808__$1;
(statearr_78854_80578[(2)] = null);

(statearr_78854_80578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (41))){
var inst_78768 = (state_78808[(23)]);
var inst_78783 = (state_78808[(2)]);
var inst_78784 = cljs.core.next(inst_78768);
var inst_78750 = inst_78784;
var inst_78751 = null;
var inst_78752 = (0);
var inst_78753 = (0);
var state_78808__$1 = (function (){var statearr_78858 = state_78808;
(statearr_78858[(9)] = inst_78753);

(statearr_78858[(19)] = inst_78750);

(statearr_78858[(25)] = inst_78783);

(statearr_78858[(12)] = inst_78751);

(statearr_78858[(20)] = inst_78752);

return statearr_78858;
})();
var statearr_78861_80579 = state_78808__$1;
(statearr_78861_80579[(2)] = null);

(statearr_78861_80579[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (43))){
var state_78808__$1 = state_78808;
var statearr_78862_80580 = state_78808__$1;
(statearr_78862_80580[(2)] = null);

(statearr_78862_80580[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (29))){
var inst_78792 = (state_78808[(2)]);
var state_78808__$1 = state_78808;
var statearr_78865_80581 = state_78808__$1;
(statearr_78865_80581[(2)] = inst_78792);

(statearr_78865_80581[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (44))){
var inst_78801 = (state_78808[(2)]);
var state_78808__$1 = (function (){var statearr_78866 = state_78808;
(statearr_78866[(26)] = inst_78801);

return statearr_78866;
})();
var statearr_78867_80582 = state_78808__$1;
(statearr_78867_80582[(2)] = null);

(statearr_78867_80582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (6))){
var inst_78742 = (state_78808[(27)]);
var inst_78741 = cljs.core.deref(cs);
var inst_78742__$1 = cljs.core.keys(inst_78741);
var inst_78743 = cljs.core.count(inst_78742__$1);
var inst_78744 = cljs.core.reset_BANG_(dctr,inst_78743);
var inst_78749 = cljs.core.seq(inst_78742__$1);
var inst_78750 = inst_78749;
var inst_78751 = null;
var inst_78752 = (0);
var inst_78753 = (0);
var state_78808__$1 = (function (){var statearr_78868 = state_78808;
(statearr_78868[(9)] = inst_78753);

(statearr_78868[(28)] = inst_78744);

(statearr_78868[(19)] = inst_78750);

(statearr_78868[(27)] = inst_78742__$1);

(statearr_78868[(12)] = inst_78751);

(statearr_78868[(20)] = inst_78752);

return statearr_78868;
})();
var statearr_78869_80583 = state_78808__$1;
(statearr_78869_80583[(2)] = null);

(statearr_78869_80583[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (28))){
var inst_78750 = (state_78808[(19)]);
var inst_78768 = (state_78808[(23)]);
var inst_78768__$1 = cljs.core.seq(inst_78750);
var state_78808__$1 = (function (){var statearr_78870 = state_78808;
(statearr_78870[(23)] = inst_78768__$1);

return statearr_78870;
})();
if(inst_78768__$1){
var statearr_78871_80584 = state_78808__$1;
(statearr_78871_80584[(1)] = (33));

} else {
var statearr_78872_80585 = state_78808__$1;
(statearr_78872_80585[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (25))){
var inst_78753 = (state_78808[(9)]);
var inst_78752 = (state_78808[(20)]);
var inst_78755 = (inst_78753 < inst_78752);
var inst_78756 = inst_78755;
var state_78808__$1 = state_78808;
if(cljs.core.truth_(inst_78756)){
var statearr_78873_80587 = state_78808__$1;
(statearr_78873_80587[(1)] = (27));

} else {
var statearr_78874_80588 = state_78808__$1;
(statearr_78874_80588[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (34))){
var state_78808__$1 = state_78808;
var statearr_78875_80589 = state_78808__$1;
(statearr_78875_80589[(2)] = null);

(statearr_78875_80589[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (17))){
var state_78808__$1 = state_78808;
var statearr_78876_80590 = state_78808__$1;
(statearr_78876_80590[(2)] = null);

(statearr_78876_80590[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (3))){
var inst_78806 = (state_78808[(2)]);
var state_78808__$1 = state_78808;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78808__$1,inst_78806);
} else {
if((state_val_78809 === (12))){
var inst_78737 = (state_78808[(2)]);
var state_78808__$1 = state_78808;
var statearr_78878_80592 = state_78808__$1;
(statearr_78878_80592[(2)] = inst_78737);

(statearr_78878_80592[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (2))){
var state_78808__$1 = state_78808;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78808__$1,(4),ch);
} else {
if((state_val_78809 === (23))){
var state_78808__$1 = state_78808;
var statearr_78879_80593 = state_78808__$1;
(statearr_78879_80593[(2)] = null);

(statearr_78879_80593[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (35))){
var inst_78790 = (state_78808[(2)]);
var state_78808__$1 = state_78808;
var statearr_78880_80595 = state_78808__$1;
(statearr_78880_80595[(2)] = inst_78790);

(statearr_78880_80595[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (19))){
var inst_78709 = (state_78808[(7)]);
var inst_78713 = cljs.core.chunk_first(inst_78709);
var inst_78714 = cljs.core.chunk_rest(inst_78709);
var inst_78715 = cljs.core.count(inst_78713);
var inst_78687 = inst_78714;
var inst_78688 = inst_78713;
var inst_78689 = inst_78715;
var inst_78690 = (0);
var state_78808__$1 = (function (){var statearr_78881 = state_78808;
(statearr_78881[(13)] = inst_78689);

(statearr_78881[(14)] = inst_78688);

(statearr_78881[(15)] = inst_78690);

(statearr_78881[(17)] = inst_78687);

return statearr_78881;
})();
var statearr_78882_80596 = state_78808__$1;
(statearr_78882_80596[(2)] = null);

(statearr_78882_80596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (11))){
var inst_78709 = (state_78808[(7)]);
var inst_78687 = (state_78808[(17)]);
var inst_78709__$1 = cljs.core.seq(inst_78687);
var state_78808__$1 = (function (){var statearr_78883 = state_78808;
(statearr_78883[(7)] = inst_78709__$1);

return statearr_78883;
})();
if(inst_78709__$1){
var statearr_78885_80597 = state_78808__$1;
(statearr_78885_80597[(1)] = (16));

} else {
var statearr_78886_80598 = state_78808__$1;
(statearr_78886_80598[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (9))){
var inst_78739 = (state_78808[(2)]);
var state_78808__$1 = state_78808;
var statearr_78887_80599 = state_78808__$1;
(statearr_78887_80599[(2)] = inst_78739);

(statearr_78887_80599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (5))){
var inst_78685 = cljs.core.deref(cs);
var inst_78686 = cljs.core.seq(inst_78685);
var inst_78687 = inst_78686;
var inst_78688 = null;
var inst_78689 = (0);
var inst_78690 = (0);
var state_78808__$1 = (function (){var statearr_78888 = state_78808;
(statearr_78888[(13)] = inst_78689);

(statearr_78888[(14)] = inst_78688);

(statearr_78888[(15)] = inst_78690);

(statearr_78888[(17)] = inst_78687);

return statearr_78888;
})();
var statearr_78889_80600 = state_78808__$1;
(statearr_78889_80600[(2)] = null);

(statearr_78889_80600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (14))){
var state_78808__$1 = state_78808;
var statearr_78890_80601 = state_78808__$1;
(statearr_78890_80601[(2)] = null);

(statearr_78890_80601[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (45))){
var inst_78798 = (state_78808[(2)]);
var state_78808__$1 = state_78808;
var statearr_78891_80602 = state_78808__$1;
(statearr_78891_80602[(2)] = inst_78798);

(statearr_78891_80602[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (26))){
var inst_78742 = (state_78808[(27)]);
var inst_78794 = (state_78808[(2)]);
var inst_78795 = cljs.core.seq(inst_78742);
var state_78808__$1 = (function (){var statearr_78892 = state_78808;
(statearr_78892[(29)] = inst_78794);

return statearr_78892;
})();
if(inst_78795){
var statearr_78893_80603 = state_78808__$1;
(statearr_78893_80603[(1)] = (42));

} else {
var statearr_78894_80604 = state_78808__$1;
(statearr_78894_80604[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (16))){
var inst_78709 = (state_78808[(7)]);
var inst_78711 = cljs.core.chunked_seq_QMARK_(inst_78709);
var state_78808__$1 = state_78808;
if(inst_78711){
var statearr_78895_80605 = state_78808__$1;
(statearr_78895_80605[(1)] = (19));

} else {
var statearr_78897_80606 = state_78808__$1;
(statearr_78897_80606[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (38))){
var inst_78787 = (state_78808[(2)]);
var state_78808__$1 = state_78808;
var statearr_78899_80607 = state_78808__$1;
(statearr_78899_80607[(2)] = inst_78787);

(statearr_78899_80607[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (30))){
var state_78808__$1 = state_78808;
var statearr_78902_80608 = state_78808__$1;
(statearr_78902_80608[(2)] = null);

(statearr_78902_80608[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (10))){
var inst_78688 = (state_78808[(14)]);
var inst_78690 = (state_78808[(15)]);
var inst_78698 = cljs.core._nth(inst_78688,inst_78690);
var inst_78699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78698,(0),null);
var inst_78700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78698,(1),null);
var state_78808__$1 = (function (){var statearr_78909 = state_78808;
(statearr_78909[(24)] = inst_78699);

return statearr_78909;
})();
if(cljs.core.truth_(inst_78700)){
var statearr_78910_80609 = state_78808__$1;
(statearr_78910_80609[(1)] = (13));

} else {
var statearr_78911_80610 = state_78808__$1;
(statearr_78911_80610[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (18))){
var inst_78735 = (state_78808[(2)]);
var state_78808__$1 = state_78808;
var statearr_78912_80611 = state_78808__$1;
(statearr_78912_80611[(2)] = inst_78735);

(statearr_78912_80611[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (42))){
var state_78808__$1 = state_78808;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78808__$1,(45),dchan);
} else {
if((state_val_78809 === (37))){
var inst_78768 = (state_78808[(23)]);
var inst_78678 = (state_78808[(10)]);
var inst_78777 = (state_78808[(22)]);
var inst_78777__$1 = cljs.core.first(inst_78768);
var inst_78778 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_78777__$1,inst_78678,done);
var state_78808__$1 = (function (){var statearr_78914 = state_78808;
(statearr_78914[(22)] = inst_78777__$1);

return statearr_78914;
})();
if(cljs.core.truth_(inst_78778)){
var statearr_78915_80614 = state_78808__$1;
(statearr_78915_80614[(1)] = (39));

} else {
var statearr_78916_80615 = state_78808__$1;
(statearr_78916_80615[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78809 === (8))){
var inst_78689 = (state_78808[(13)]);
var inst_78690 = (state_78808[(15)]);
var inst_78692 = (inst_78690 < inst_78689);
var inst_78693 = inst_78692;
var state_78808__$1 = state_78808;
if(cljs.core.truth_(inst_78693)){
var statearr_78917_80616 = state_78808__$1;
(statearr_78917_80616[(1)] = (10));

} else {
var statearr_78918_80617 = state_78808__$1;
(statearr_78918_80617[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__77211__auto__ = null;
var cljs$core$async$mult_$_state_machine__77211__auto____0 = (function (){
var statearr_78922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78922[(0)] = cljs$core$async$mult_$_state_machine__77211__auto__);

(statearr_78922[(1)] = (1));

return statearr_78922;
});
var cljs$core$async$mult_$_state_machine__77211__auto____1 = (function (state_78808){
while(true){
var ret_value__77212__auto__ = (function (){try{while(true){
var result__77213__auto__ = switch__77210__auto__(state_78808);
if(cljs.core.keyword_identical_QMARK_(result__77213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77213__auto__;
}
break;
}
}catch (e78923){var ex__77214__auto__ = e78923;
var statearr_78924_80618 = state_78808;
(statearr_78924_80618[(2)] = ex__77214__auto__);


if(cljs.core.seq((state_78808[(4)]))){
var statearr_78925_80619 = state_78808;
(statearr_78925_80619[(1)] = cljs.core.first((state_78808[(4)])));

} else {
throw ex__77214__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80620 = state_78808;
state_78808 = G__80620;
continue;
} else {
return ret_value__77212__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__77211__auto__ = function(state_78808){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__77211__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__77211__auto____1.call(this,state_78808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__77211__auto____0;
cljs$core$async$mult_$_state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__77211__auto____1;
return cljs$core$async$mult_$_state_machine__77211__auto__;
})()
})();
var state__77564__auto__ = (function (){var statearr_78927 = f__77563__auto__();
(statearr_78927[(6)] = c__77562__auto___80557);

return statearr_78927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77564__auto__);
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
var G__78931 = arguments.length;
switch (G__78931) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_80624 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_80624(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_80625 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_80625(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_80626 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_80626(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_80627 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_80627(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_80628 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_80628(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___80629 = arguments.length;
var i__4865__auto___80630 = (0);
while(true){
if((i__4865__auto___80630 < len__4864__auto___80629)){
args__4870__auto__.push((arguments[i__4865__auto___80630]));

var G__80631 = (i__4865__auto___80630 + (1));
i__4865__auto___80630 = G__80631;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__78949){
var map__78950 = p__78949;
var map__78950__$1 = cljs.core.__destructure_map(map__78950);
var opts = map__78950__$1;
var statearr_78951_80632 = state;
(statearr_78951_80632[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_78952_80633 = state;
(statearr_78952_80633[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_78953_80635 = state;
(statearr_78953_80635[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq78944){
var G__78945 = cljs.core.first(seq78944);
var seq78944__$1 = cljs.core.next(seq78944);
var G__78946 = cljs.core.first(seq78944__$1);
var seq78944__$2 = cljs.core.next(seq78944__$1);
var G__78947 = cljs.core.first(seq78944__$2);
var seq78944__$3 = cljs.core.next(seq78944__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78945,G__78946,G__78947,seq78944__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async78963 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async78963 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta78964){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta78964 = meta78964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async78963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_78965,meta78964__$1){
var self__ = this;
var _78965__$1 = this;
return (new cljs.core.async.t_cljs$core$async78963(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta78964__$1));
}));

(cljs.core.async.t_cljs$core$async78963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_78965){
var self__ = this;
var _78965__$1 = this;
return self__.meta78964;
}));

(cljs.core.async.t_cljs$core$async78963.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async78963.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async78963.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async78963.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async78963.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async78963.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async78963.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async78963.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async78963.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta78964","meta78964",-942958041,null)], null);
}));

(cljs.core.async.t_cljs$core$async78963.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async78963.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async78963");

(cljs.core.async.t_cljs$core$async78963.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async78963");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async78963.
 */
cljs.core.async.__GT_t_cljs$core$async78963 = (function cljs$core$async$mix_$___GT_t_cljs$core$async78963(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta78964){
return (new cljs.core.async.t_cljs$core$async78963(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta78964));
});

}

return (new cljs.core.async.t_cljs$core$async78963(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__77562__auto___80640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77563__auto__ = (function (){var switch__77210__auto__ = (function (state_79046){
var state_val_79047 = (state_79046[(1)]);
if((state_val_79047 === (7))){
var inst_79005 = (state_79046[(2)]);
var state_79046__$1 = state_79046;
if(cljs.core.truth_(inst_79005)){
var statearr_79048_80641 = state_79046__$1;
(statearr_79048_80641[(1)] = (8));

} else {
var statearr_79049_80642 = state_79046__$1;
(statearr_79049_80642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (20))){
var inst_78998 = (state_79046[(7)]);
var state_79046__$1 = state_79046;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79046__$1,(23),out,inst_78998);
} else {
if((state_val_79047 === (1))){
var inst_78981 = calc_state();
var inst_78982 = cljs.core.__destructure_map(inst_78981);
var inst_78983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_78982,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_78984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_78982,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_78985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_78982,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_78986 = inst_78981;
var state_79046__$1 = (function (){var statearr_79050 = state_79046;
(statearr_79050[(8)] = inst_78983);

(statearr_79050[(9)] = inst_78984);

(statearr_79050[(10)] = inst_78985);

(statearr_79050[(11)] = inst_78986);

return statearr_79050;
})();
var statearr_79051_80643 = state_79046__$1;
(statearr_79051_80643[(2)] = null);

(statearr_79051_80643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (24))){
var inst_78989 = (state_79046[(12)]);
var inst_78986 = inst_78989;
var state_79046__$1 = (function (){var statearr_79052 = state_79046;
(statearr_79052[(11)] = inst_78986);

return statearr_79052;
})();
var statearr_79053_80644 = state_79046__$1;
(statearr_79053_80644[(2)] = null);

(statearr_79053_80644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (4))){
var inst_78998 = (state_79046[(7)]);
var inst_79000 = (state_79046[(13)]);
var inst_78997 = (state_79046[(2)]);
var inst_78998__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78997,(0),null);
var inst_78999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78997,(1),null);
var inst_79000__$1 = (inst_78998__$1 == null);
var state_79046__$1 = (function (){var statearr_79055 = state_79046;
(statearr_79055[(7)] = inst_78998__$1);

(statearr_79055[(14)] = inst_78999);

(statearr_79055[(13)] = inst_79000__$1);

return statearr_79055;
})();
if(cljs.core.truth_(inst_79000__$1)){
var statearr_79056_80646 = state_79046__$1;
(statearr_79056_80646[(1)] = (5));

} else {
var statearr_79057_80647 = state_79046__$1;
(statearr_79057_80647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (15))){
var inst_79019 = (state_79046[(15)]);
var inst_78990 = (state_79046[(16)]);
var inst_79019__$1 = cljs.core.empty_QMARK_(inst_78990);
var state_79046__$1 = (function (){var statearr_79058 = state_79046;
(statearr_79058[(15)] = inst_79019__$1);

return statearr_79058;
})();
if(inst_79019__$1){
var statearr_79059_80648 = state_79046__$1;
(statearr_79059_80648[(1)] = (17));

} else {
var statearr_79060_80649 = state_79046__$1;
(statearr_79060_80649[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (21))){
var inst_78989 = (state_79046[(12)]);
var inst_78986 = inst_78989;
var state_79046__$1 = (function (){var statearr_79061 = state_79046;
(statearr_79061[(11)] = inst_78986);

return statearr_79061;
})();
var statearr_79062_80650 = state_79046__$1;
(statearr_79062_80650[(2)] = null);

(statearr_79062_80650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (13))){
var inst_79012 = (state_79046[(2)]);
var inst_79013 = calc_state();
var inst_78986 = inst_79013;
var state_79046__$1 = (function (){var statearr_79063 = state_79046;
(statearr_79063[(17)] = inst_79012);

(statearr_79063[(11)] = inst_78986);

return statearr_79063;
})();
var statearr_79064_80652 = state_79046__$1;
(statearr_79064_80652[(2)] = null);

(statearr_79064_80652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (22))){
var inst_79039 = (state_79046[(2)]);
var state_79046__$1 = state_79046;
var statearr_79065_80653 = state_79046__$1;
(statearr_79065_80653[(2)] = inst_79039);

(statearr_79065_80653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (6))){
var inst_78999 = (state_79046[(14)]);
var inst_79003 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78999,change);
var state_79046__$1 = state_79046;
var statearr_79067_80654 = state_79046__$1;
(statearr_79067_80654[(2)] = inst_79003);

(statearr_79067_80654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (25))){
var state_79046__$1 = state_79046;
var statearr_79068_80655 = state_79046__$1;
(statearr_79068_80655[(2)] = null);

(statearr_79068_80655[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (17))){
var inst_78999 = (state_79046[(14)]);
var inst_78991 = (state_79046[(18)]);
var inst_79021 = (inst_78991.cljs$core$IFn$_invoke$arity$1 ? inst_78991.cljs$core$IFn$_invoke$arity$1(inst_78999) : inst_78991.call(null,inst_78999));
var inst_79022 = cljs.core.not(inst_79021);
var state_79046__$1 = state_79046;
var statearr_79069_80656 = state_79046__$1;
(statearr_79069_80656[(2)] = inst_79022);

(statearr_79069_80656[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (3))){
var inst_79043 = (state_79046[(2)]);
var state_79046__$1 = state_79046;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79046__$1,inst_79043);
} else {
if((state_val_79047 === (12))){
var state_79046__$1 = state_79046;
var statearr_79070_80657 = state_79046__$1;
(statearr_79070_80657[(2)] = null);

(statearr_79070_80657[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (2))){
var inst_78986 = (state_79046[(11)]);
var inst_78989 = (state_79046[(12)]);
var inst_78989__$1 = cljs.core.__destructure_map(inst_78986);
var inst_78990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_78989__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_78991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_78989__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_78992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_78989__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_79046__$1 = (function (){var statearr_79071 = state_79046;
(statearr_79071[(12)] = inst_78989__$1);

(statearr_79071[(16)] = inst_78990);

(statearr_79071[(18)] = inst_78991);

return statearr_79071;
})();
return cljs.core.async.ioc_alts_BANG_(state_79046__$1,(4),inst_78992);
} else {
if((state_val_79047 === (23))){
var inst_79030 = (state_79046[(2)]);
var state_79046__$1 = state_79046;
if(cljs.core.truth_(inst_79030)){
var statearr_79072_80658 = state_79046__$1;
(statearr_79072_80658[(1)] = (24));

} else {
var statearr_79073_80659 = state_79046__$1;
(statearr_79073_80659[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (19))){
var inst_79025 = (state_79046[(2)]);
var state_79046__$1 = state_79046;
var statearr_79074_80660 = state_79046__$1;
(statearr_79074_80660[(2)] = inst_79025);

(statearr_79074_80660[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (11))){
var inst_78999 = (state_79046[(14)]);
var inst_79009 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_78999);
var state_79046__$1 = state_79046;
var statearr_79076_80661 = state_79046__$1;
(statearr_79076_80661[(2)] = inst_79009);

(statearr_79076_80661[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (9))){
var inst_78999 = (state_79046[(14)]);
var inst_79016 = (state_79046[(19)]);
var inst_78990 = (state_79046[(16)]);
var inst_79016__$1 = (inst_78990.cljs$core$IFn$_invoke$arity$1 ? inst_78990.cljs$core$IFn$_invoke$arity$1(inst_78999) : inst_78990.call(null,inst_78999));
var state_79046__$1 = (function (){var statearr_79079 = state_79046;
(statearr_79079[(19)] = inst_79016__$1);

return statearr_79079;
})();
if(cljs.core.truth_(inst_79016__$1)){
var statearr_79080_80662 = state_79046__$1;
(statearr_79080_80662[(1)] = (14));

} else {
var statearr_79081_80663 = state_79046__$1;
(statearr_79081_80663[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (5))){
var inst_79000 = (state_79046[(13)]);
var state_79046__$1 = state_79046;
var statearr_79082_80664 = state_79046__$1;
(statearr_79082_80664[(2)] = inst_79000);

(statearr_79082_80664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (14))){
var inst_79016 = (state_79046[(19)]);
var state_79046__$1 = state_79046;
var statearr_79083_80665 = state_79046__$1;
(statearr_79083_80665[(2)] = inst_79016);

(statearr_79083_80665[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (26))){
var inst_79035 = (state_79046[(2)]);
var state_79046__$1 = state_79046;
var statearr_79084_80667 = state_79046__$1;
(statearr_79084_80667[(2)] = inst_79035);

(statearr_79084_80667[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (16))){
var inst_79027 = (state_79046[(2)]);
var state_79046__$1 = state_79046;
if(cljs.core.truth_(inst_79027)){
var statearr_79085_80668 = state_79046__$1;
(statearr_79085_80668[(1)] = (20));

} else {
var statearr_79086_80669 = state_79046__$1;
(statearr_79086_80669[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (10))){
var inst_79041 = (state_79046[(2)]);
var state_79046__$1 = state_79046;
var statearr_79087_80670 = state_79046__$1;
(statearr_79087_80670[(2)] = inst_79041);

(statearr_79087_80670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (18))){
var inst_79019 = (state_79046[(15)]);
var state_79046__$1 = state_79046;
var statearr_79088_80672 = state_79046__$1;
(statearr_79088_80672[(2)] = inst_79019);

(statearr_79088_80672[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79047 === (8))){
var inst_78998 = (state_79046[(7)]);
var inst_79007 = (inst_78998 == null);
var state_79046__$1 = state_79046;
if(cljs.core.truth_(inst_79007)){
var statearr_79089_80673 = state_79046__$1;
(statearr_79089_80673[(1)] = (11));

} else {
var statearr_79091_80674 = state_79046__$1;
(statearr_79091_80674[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__77211__auto__ = null;
var cljs$core$async$mix_$_state_machine__77211__auto____0 = (function (){
var statearr_79093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79093[(0)] = cljs$core$async$mix_$_state_machine__77211__auto__);

(statearr_79093[(1)] = (1));

return statearr_79093;
});
var cljs$core$async$mix_$_state_machine__77211__auto____1 = (function (state_79046){
while(true){
var ret_value__77212__auto__ = (function (){try{while(true){
var result__77213__auto__ = switch__77210__auto__(state_79046);
if(cljs.core.keyword_identical_QMARK_(result__77213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77213__auto__;
}
break;
}
}catch (e79094){var ex__77214__auto__ = e79094;
var statearr_79096_80676 = state_79046;
(statearr_79096_80676[(2)] = ex__77214__auto__);


if(cljs.core.seq((state_79046[(4)]))){
var statearr_79097_80677 = state_79046;
(statearr_79097_80677[(1)] = cljs.core.first((state_79046[(4)])));

} else {
throw ex__77214__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80678 = state_79046;
state_79046 = G__80678;
continue;
} else {
return ret_value__77212__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__77211__auto__ = function(state_79046){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__77211__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__77211__auto____1.call(this,state_79046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__77211__auto____0;
cljs$core$async$mix_$_state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__77211__auto____1;
return cljs$core$async$mix_$_state_machine__77211__auto__;
})()
})();
var state__77564__auto__ = (function (){var statearr_79098 = f__77563__auto__();
(statearr_79098[(6)] = c__77562__auto___80640);

return statearr_79098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77564__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_80679 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_80679(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_80680 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_80680(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_80681 = (function() {
var G__80682 = null;
var G__80682__1 = (function (p){
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
var G__80682__2 = (function (p,v){
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
G__80682 = function(p,v){
switch(arguments.length){
case 1:
return G__80682__1.call(this,p);
case 2:
return G__80682__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__80682.cljs$core$IFn$_invoke$arity$1 = G__80682__1;
G__80682.cljs$core$IFn$_invoke$arity$2 = G__80682__2;
return G__80682;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__79108 = arguments.length;
switch (G__79108) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_80681(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_80681(p,v);
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
var G__79130 = arguments.length;
switch (G__79130) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__79122_SHARP_){
if(cljs.core.truth_((p1__79122_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__79122_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__79122_SHARP_.call(null,topic)))){
return p1__79122_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__79122_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async79133 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79133 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta79134){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta79134 = meta79134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async79133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79135,meta79134__$1){
var self__ = this;
var _79135__$1 = this;
return (new cljs.core.async.t_cljs$core$async79133(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta79134__$1));
}));

(cljs.core.async.t_cljs$core$async79133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79135){
var self__ = this;
var _79135__$1 = this;
return self__.meta79134;
}));

(cljs.core.async.t_cljs$core$async79133.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79133.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async79133.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79133.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async79133.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async79133.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async79133.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async79133.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta79134","meta79134",-1673308080,null)], null);
}));

(cljs.core.async.t_cljs$core$async79133.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async79133.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79133");

(cljs.core.async.t_cljs$core$async79133.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async79133");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async79133.
 */
cljs.core.async.__GT_t_cljs$core$async79133 = (function cljs$core$async$__GT_t_cljs$core$async79133(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta79134){
return (new cljs.core.async.t_cljs$core$async79133(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta79134));
});

}

return (new cljs.core.async.t_cljs$core$async79133(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__77562__auto___80686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77563__auto__ = (function (){var switch__77210__auto__ = (function (state_79282){
var state_val_79283 = (state_79282[(1)]);
if((state_val_79283 === (7))){
var inst_79278 = (state_79282[(2)]);
var state_79282__$1 = state_79282;
var statearr_79284_80687 = state_79282__$1;
(statearr_79284_80687[(2)] = inst_79278);

(statearr_79284_80687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79283 === (20))){
var state_79282__$1 = state_79282;
var statearr_79285_80688 = state_79282__$1;
(statearr_79285_80688[(2)] = null);

(statearr_79285_80688[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79283 === (1))){
var state_79282__$1 = state_79282;
var statearr_79286_80689 = state_79282__$1;
(statearr_79286_80689[(2)] = null);

(statearr_79286_80689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79283 === (24))){
var inst_79261 = (state_79282[(7)]);
var inst_79270 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_79261);
var state_79282__$1 = state_79282;
var statearr_79293_80690 = state_79282__$1;
(statearr_79293_80690[(2)] = inst_79270);

(statearr_79293_80690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79283 === (4))){
var inst_79196 = (state_79282[(8)]);
var inst_79196__$1 = (state_79282[(2)]);
var inst_79203 = (inst_79196__$1 == null);
var state_79282__$1 = (function (){var statearr_79294 = state_79282;
(statearr_79294[(8)] = inst_79196__$1);

return statearr_79294;
})();
if(cljs.core.truth_(inst_79203)){
var statearr_79295_80695 = state_79282__$1;
(statearr_79295_80695[(1)] = (5));

} else {
var statearr_79296_80696 = state_79282__$1;
(statearr_79296_80696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79283 === (15))){
var inst_79255 = (state_79282[(2)]);
var state_79282__$1 = state_79282;
var statearr_79297_80697 = state_79282__$1;
(statearr_79297_80697[(2)] = inst_79255);

(statearr_79297_80697[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79283 === (21))){
var inst_79275 = (state_79282[(2)]);
var state_79282__$1 = (function (){var statearr_79298 = state_79282;
(statearr_79298[(9)] = inst_79275);

return statearr_79298;
})();
var statearr_79299_80701 = state_79282__$1;
(statearr_79299_80701[(2)] = null);

(statearr_79299_80701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79283 === (13))){
var inst_79237 = (state_79282[(10)]);
var inst_79239 = cljs.core.chunked_seq_QMARK_(inst_79237);
var state_79282__$1 = state_79282;
if(inst_79239){
var statearr_79300_80702 = state_79282__$1;
(statearr_79300_80702[(1)] = (16));

} else {
var statearr_79301_80703 = state_79282__$1;
(statearr_79301_80703[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79283 === (22))){
var inst_79267 = (state_79282[(2)]);
var state_79282__$1 = state_79282;
if(cljs.core.truth_(inst_79267)){
var statearr_79302_80704 = state_79282__$1;
(statearr_79302_80704[(1)] = (23));

} else {
var statearr_79303_80705 = state_79282__$1;
(statearr_79303_80705[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79283 === (6))){
var inst_79196 = (state_79282[(8)]);
var inst_79263 = (state_79282[(11)]);
var inst_79261 = (state_79282[(7)]);
var inst_79261__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_79196) : topic_fn.call(null,inst_79196));
var inst_79262 = cljs.core.deref(mults);
var inst_79263__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_79262,inst_79261__$1);
var state_79282__$1 = (function (){var statearr_79307 = state_79282;
(statearr_79307[(11)] = inst_79263__$1);

(statearr_79307[(7)] = inst_79261__$1);

return statearr_79307;
})();
if(cljs.core.truth_(inst_79263__$1)){
var statearr_79308_80710 = state_79282__$1;
(statearr_79308_80710[(1)] = (19));

} else {
var statearr_79309_80711 = state_79282__$1;
(statearr_79309_80711[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79283 === (25))){
var inst_79272 = (state_79282[(2)]);
var state_79282__$1 = state_79282;
var statearr_79310_80712 = state_79282__$1;
(statearr_79310_80712[(2)] = inst_79272);

(statearr_79310_80712[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79283 === (17))){
var inst_79237 = (state_79282[(10)]);
var inst_79246 = cljs.core.first(inst_79237);
var inst_79247 = cljs.core.async.muxch_STAR_(inst_79246);
var inst_79248 = cljs.core.async.close_BANG_(inst_79247);
var inst_79249 = cljs.core.next(inst_79237);
var inst_79223 = inst_79249;
var inst_79224 = null;
var inst_79225 = (0);
var inst_79226 = (0);
var state_79282__$1 = (function (){var statearr_79317 = state_79282;
(statearr_79317[(12)] = inst_79226);

(statearr_79317[(13)] = inst_79248);

(statearr_79317[(14)] = inst_79225);

(statearr_79317[(15)] = inst_79223);

(statearr_79317[(16)] = inst_79224);

return statearr_79317;
})();
var statearr_79319_80716 = state_79282__$1;
(statearr_79319_80716[(2)] = null);

(statearr_79319_80716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79283 === (3))){
var inst_79280 = (state_79282[(2)]);
var state_79282__$1 = state_79282;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79282__$1,inst_79280);
} else {
if((state_val_79283 === (12))){
var inst_79257 = (state_79282[(2)]);
var state_79282__$1 = state_79282;
var statearr_79322_80717 = state_79282__$1;
(statearr_79322_80717[(2)] = inst_79257);

(statearr_79322_80717[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79283 === (2))){
var state_79282__$1 = state_79282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79282__$1,(4),ch);
} else {
if((state_val_79283 === (23))){
var state_79282__$1 = state_79282;
var statearr_79326_80718 = state_79282__$1;
(statearr_79326_80718[(2)] = null);

(statearr_79326_80718[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79283 === (19))){
var inst_79196 = (state_79282[(8)]);
var inst_79263 = (state_79282[(11)]);
var inst_79265 = cljs.core.async.muxch_STAR_(inst_79263);
var state_79282__$1 = state_79282;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79282__$1,(22),inst_79265,inst_79196);
} else {
if((state_val_79283 === (11))){
var inst_79237 = (state_79282[(10)]);
var inst_79223 = (state_79282[(15)]);
var inst_79237__$1 = cljs.core.seq(inst_79223);
var state_79282__$1 = (function (){var statearr_79328 = state_79282;
(statearr_79328[(10)] = inst_79237__$1);

return statearr_79328;
})();
if(inst_79237__$1){
var statearr_79329_80722 = state_79282__$1;
(statearr_79329_80722[(1)] = (13));

} else {
var statearr_79330_80723 = state_79282__$1;
(statearr_79330_80723[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79283 === (9))){
var inst_79259 = (state_79282[(2)]);
var state_79282__$1 = state_79282;
var statearr_79331_80724 = state_79282__$1;
(statearr_79331_80724[(2)] = inst_79259);

(statearr_79331_80724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79283 === (5))){
var inst_79220 = cljs.core.deref(mults);
var inst_79221 = cljs.core.vals(inst_79220);
var inst_79222 = cljs.core.seq(inst_79221);
var inst_79223 = inst_79222;
var inst_79224 = null;
var inst_79225 = (0);
var inst_79226 = (0);
var state_79282__$1 = (function (){var statearr_79332 = state_79282;
(statearr_79332[(12)] = inst_79226);

(statearr_79332[(14)] = inst_79225);

(statearr_79332[(15)] = inst_79223);

(statearr_79332[(16)] = inst_79224);

return statearr_79332;
})();
var statearr_79333_80725 = state_79282__$1;
(statearr_79333_80725[(2)] = null);

(statearr_79333_80725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79283 === (14))){
var state_79282__$1 = state_79282;
var statearr_79338_80730 = state_79282__$1;
(statearr_79338_80730[(2)] = null);

(statearr_79338_80730[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79283 === (16))){
var inst_79237 = (state_79282[(10)]);
var inst_79241 = cljs.core.chunk_first(inst_79237);
var inst_79242 = cljs.core.chunk_rest(inst_79237);
var inst_79243 = cljs.core.count(inst_79241);
var inst_79223 = inst_79242;
var inst_79224 = inst_79241;
var inst_79225 = inst_79243;
var inst_79226 = (0);
var state_79282__$1 = (function (){var statearr_79339 = state_79282;
(statearr_79339[(12)] = inst_79226);

(statearr_79339[(14)] = inst_79225);

(statearr_79339[(15)] = inst_79223);

(statearr_79339[(16)] = inst_79224);

return statearr_79339;
})();
var statearr_79340_80734 = state_79282__$1;
(statearr_79340_80734[(2)] = null);

(statearr_79340_80734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79283 === (10))){
var inst_79226 = (state_79282[(12)]);
var inst_79225 = (state_79282[(14)]);
var inst_79223 = (state_79282[(15)]);
var inst_79224 = (state_79282[(16)]);
var inst_79231 = cljs.core._nth(inst_79224,inst_79226);
var inst_79232 = cljs.core.async.muxch_STAR_(inst_79231);
var inst_79233 = cljs.core.async.close_BANG_(inst_79232);
var inst_79234 = (inst_79226 + (1));
var tmp79335 = inst_79225;
var tmp79336 = inst_79223;
var tmp79337 = inst_79224;
var inst_79223__$1 = tmp79336;
var inst_79224__$1 = tmp79337;
var inst_79225__$1 = tmp79335;
var inst_79226__$1 = inst_79234;
var state_79282__$1 = (function (){var statearr_79341 = state_79282;
(statearr_79341[(17)] = inst_79233);

(statearr_79341[(12)] = inst_79226__$1);

(statearr_79341[(14)] = inst_79225__$1);

(statearr_79341[(15)] = inst_79223__$1);

(statearr_79341[(16)] = inst_79224__$1);

return statearr_79341;
})();
var statearr_79342_80735 = state_79282__$1;
(statearr_79342_80735[(2)] = null);

(statearr_79342_80735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79283 === (18))){
var inst_79252 = (state_79282[(2)]);
var state_79282__$1 = state_79282;
var statearr_79343_80739 = state_79282__$1;
(statearr_79343_80739[(2)] = inst_79252);

(statearr_79343_80739[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79283 === (8))){
var inst_79226 = (state_79282[(12)]);
var inst_79225 = (state_79282[(14)]);
var inst_79228 = (inst_79226 < inst_79225);
var inst_79229 = inst_79228;
var state_79282__$1 = state_79282;
if(cljs.core.truth_(inst_79229)){
var statearr_79344_80740 = state_79282__$1;
(statearr_79344_80740[(1)] = (10));

} else {
var statearr_79345_80741 = state_79282__$1;
(statearr_79345_80741[(1)] = (11));

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
var cljs$core$async$state_machine__77211__auto__ = null;
var cljs$core$async$state_machine__77211__auto____0 = (function (){
var statearr_79346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79346[(0)] = cljs$core$async$state_machine__77211__auto__);

(statearr_79346[(1)] = (1));

return statearr_79346;
});
var cljs$core$async$state_machine__77211__auto____1 = (function (state_79282){
while(true){
var ret_value__77212__auto__ = (function (){try{while(true){
var result__77213__auto__ = switch__77210__auto__(state_79282);
if(cljs.core.keyword_identical_QMARK_(result__77213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77213__auto__;
}
break;
}
}catch (e79347){var ex__77214__auto__ = e79347;
var statearr_79348_80746 = state_79282;
(statearr_79348_80746[(2)] = ex__77214__auto__);


if(cljs.core.seq((state_79282[(4)]))){
var statearr_79349_80747 = state_79282;
(statearr_79349_80747[(1)] = cljs.core.first((state_79282[(4)])));

} else {
throw ex__77214__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80748 = state_79282;
state_79282 = G__80748;
continue;
} else {
return ret_value__77212__auto__;
}
break;
}
});
cljs$core$async$state_machine__77211__auto__ = function(state_79282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__77211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__77211__auto____1.call(this,state_79282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__77211__auto____0;
cljs$core$async$state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__77211__auto____1;
return cljs$core$async$state_machine__77211__auto__;
})()
})();
var state__77564__auto__ = (function (){var statearr_79350 = f__77563__auto__();
(statearr_79350[(6)] = c__77562__auto___80686);

return statearr_79350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77564__auto__);
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
var G__79353 = arguments.length;
switch (G__79353) {
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
var G__79356 = arguments.length;
switch (G__79356) {
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
var G__79358 = arguments.length;
switch (G__79358) {
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
var c__77562__auto___80756 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77563__auto__ = (function (){var switch__77210__auto__ = (function (state_79434){
var state_val_79435 = (state_79434[(1)]);
if((state_val_79435 === (7))){
var state_79434__$1 = state_79434;
var statearr_79442_80757 = state_79434__$1;
(statearr_79442_80757[(2)] = null);

(statearr_79442_80757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79435 === (1))){
var state_79434__$1 = state_79434;
var statearr_79447_80758 = state_79434__$1;
(statearr_79447_80758[(2)] = null);

(statearr_79447_80758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79435 === (4))){
var inst_79367 = (state_79434[(7)]);
var inst_79368 = (state_79434[(8)]);
var inst_79370 = (inst_79368 < inst_79367);
var state_79434__$1 = state_79434;
if(cljs.core.truth_(inst_79370)){
var statearr_79472_80759 = state_79434__$1;
(statearr_79472_80759[(1)] = (6));

} else {
var statearr_79473_80760 = state_79434__$1;
(statearr_79473_80760[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79435 === (15))){
var inst_79420 = (state_79434[(9)]);
var inst_79425 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_79420);
var state_79434__$1 = state_79434;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79434__$1,(17),out,inst_79425);
} else {
if((state_val_79435 === (13))){
var inst_79420 = (state_79434[(9)]);
var inst_79420__$1 = (state_79434[(2)]);
var inst_79421 = cljs.core.some(cljs.core.nil_QMARK_,inst_79420__$1);
var state_79434__$1 = (function (){var statearr_79474 = state_79434;
(statearr_79474[(9)] = inst_79420__$1);

return statearr_79474;
})();
if(cljs.core.truth_(inst_79421)){
var statearr_79475_80761 = state_79434__$1;
(statearr_79475_80761[(1)] = (14));

} else {
var statearr_79476_80762 = state_79434__$1;
(statearr_79476_80762[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79435 === (6))){
var state_79434__$1 = state_79434;
var statearr_79477_80763 = state_79434__$1;
(statearr_79477_80763[(2)] = null);

(statearr_79477_80763[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79435 === (17))){
var inst_79427 = (state_79434[(2)]);
var state_79434__$1 = (function (){var statearr_79485 = state_79434;
(statearr_79485[(10)] = inst_79427);

return statearr_79485;
})();
var statearr_79486_80764 = state_79434__$1;
(statearr_79486_80764[(2)] = null);

(statearr_79486_80764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79435 === (3))){
var inst_79432 = (state_79434[(2)]);
var state_79434__$1 = state_79434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79434__$1,inst_79432);
} else {
if((state_val_79435 === (12))){
var _ = (function (){var statearr_79487 = state_79434;
(statearr_79487[(4)] = cljs.core.rest((state_79434[(4)])));

return statearr_79487;
})();
var state_79434__$1 = state_79434;
var ex79484 = (state_79434__$1[(2)]);
var statearr_79488_80765 = state_79434__$1;
(statearr_79488_80765[(5)] = ex79484);


if((ex79484 instanceof Object)){
var statearr_79489_80766 = state_79434__$1;
(statearr_79489_80766[(1)] = (11));

(statearr_79489_80766[(5)] = null);

} else {
throw ex79484;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79435 === (2))){
var inst_79366 = cljs.core.reset_BANG_(dctr,cnt);
var inst_79367 = cnt;
var inst_79368 = (0);
var state_79434__$1 = (function (){var statearr_79490 = state_79434;
(statearr_79490[(7)] = inst_79367);

(statearr_79490[(8)] = inst_79368);

(statearr_79490[(11)] = inst_79366);

return statearr_79490;
})();
var statearr_79494_80767 = state_79434__$1;
(statearr_79494_80767[(2)] = null);

(statearr_79494_80767[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79435 === (11))){
var inst_79397 = (state_79434[(2)]);
var inst_79398 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_79434__$1 = (function (){var statearr_79495 = state_79434;
(statearr_79495[(12)] = inst_79397);

return statearr_79495;
})();
var statearr_79496_80768 = state_79434__$1;
(statearr_79496_80768[(2)] = inst_79398);

(statearr_79496_80768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79435 === (9))){
var inst_79368 = (state_79434[(8)]);
var _ = (function (){var statearr_79497 = state_79434;
(statearr_79497[(4)] = cljs.core.cons((12),(state_79434[(4)])));

return statearr_79497;
})();
var inst_79406 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_79368) : chs__$1.call(null,inst_79368));
var inst_79407 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_79368) : done.call(null,inst_79368));
var inst_79408 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_79406,inst_79407);
var ___$1 = (function (){var statearr_79500 = state_79434;
(statearr_79500[(4)] = cljs.core.rest((state_79434[(4)])));

return statearr_79500;
})();
var state_79434__$1 = state_79434;
var statearr_79501_80770 = state_79434__$1;
(statearr_79501_80770[(2)] = inst_79408);

(statearr_79501_80770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79435 === (5))){
var inst_79418 = (state_79434[(2)]);
var state_79434__$1 = (function (){var statearr_79502 = state_79434;
(statearr_79502[(13)] = inst_79418);

return statearr_79502;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79434__$1,(13),dchan);
} else {
if((state_val_79435 === (14))){
var inst_79423 = cljs.core.async.close_BANG_(out);
var state_79434__$1 = state_79434;
var statearr_79503_80771 = state_79434__$1;
(statearr_79503_80771[(2)] = inst_79423);

(statearr_79503_80771[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79435 === (16))){
var inst_79430 = (state_79434[(2)]);
var state_79434__$1 = state_79434;
var statearr_79507_80773 = state_79434__$1;
(statearr_79507_80773[(2)] = inst_79430);

(statearr_79507_80773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79435 === (10))){
var inst_79368 = (state_79434[(8)]);
var inst_79411 = (state_79434[(2)]);
var inst_79412 = (inst_79368 + (1));
var inst_79368__$1 = inst_79412;
var state_79434__$1 = (function (){var statearr_79508 = state_79434;
(statearr_79508[(8)] = inst_79368__$1);

(statearr_79508[(14)] = inst_79411);

return statearr_79508;
})();
var statearr_79509_80774 = state_79434__$1;
(statearr_79509_80774[(2)] = null);

(statearr_79509_80774[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79435 === (8))){
var inst_79416 = (state_79434[(2)]);
var state_79434__$1 = state_79434;
var statearr_79512_80775 = state_79434__$1;
(statearr_79512_80775[(2)] = inst_79416);

(statearr_79512_80775[(1)] = (5));


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
var cljs$core$async$state_machine__77211__auto__ = null;
var cljs$core$async$state_machine__77211__auto____0 = (function (){
var statearr_79516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79516[(0)] = cljs$core$async$state_machine__77211__auto__);

(statearr_79516[(1)] = (1));

return statearr_79516;
});
var cljs$core$async$state_machine__77211__auto____1 = (function (state_79434){
while(true){
var ret_value__77212__auto__ = (function (){try{while(true){
var result__77213__auto__ = switch__77210__auto__(state_79434);
if(cljs.core.keyword_identical_QMARK_(result__77213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77213__auto__;
}
break;
}
}catch (e79517){var ex__77214__auto__ = e79517;
var statearr_79518_80776 = state_79434;
(statearr_79518_80776[(2)] = ex__77214__auto__);


if(cljs.core.seq((state_79434[(4)]))){
var statearr_79519_80777 = state_79434;
(statearr_79519_80777[(1)] = cljs.core.first((state_79434[(4)])));

} else {
throw ex__77214__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80778 = state_79434;
state_79434 = G__80778;
continue;
} else {
return ret_value__77212__auto__;
}
break;
}
});
cljs$core$async$state_machine__77211__auto__ = function(state_79434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__77211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__77211__auto____1.call(this,state_79434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__77211__auto____0;
cljs$core$async$state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__77211__auto____1;
return cljs$core$async$state_machine__77211__auto__;
})()
})();
var state__77564__auto__ = (function (){var statearr_79520 = f__77563__auto__();
(statearr_79520[(6)] = c__77562__auto___80756);

return statearr_79520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77564__auto__);
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
var G__79527 = arguments.length;
switch (G__79527) {
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
var c__77562__auto___80780 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77563__auto__ = (function (){var switch__77210__auto__ = (function (state_79577){
var state_val_79579 = (state_79577[(1)]);
if((state_val_79579 === (7))){
var inst_79542 = (state_79577[(7)]);
var inst_79543 = (state_79577[(8)]);
var inst_79542__$1 = (state_79577[(2)]);
var inst_79543__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_79542__$1,(0),null);
var inst_79544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_79542__$1,(1),null);
var inst_79545 = (inst_79543__$1 == null);
var state_79577__$1 = (function (){var statearr_79580 = state_79577;
(statearr_79580[(9)] = inst_79544);

(statearr_79580[(7)] = inst_79542__$1);

(statearr_79580[(8)] = inst_79543__$1);

return statearr_79580;
})();
if(cljs.core.truth_(inst_79545)){
var statearr_79581_80781 = state_79577__$1;
(statearr_79581_80781[(1)] = (8));

} else {
var statearr_79582_80782 = state_79577__$1;
(statearr_79582_80782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79579 === (1))){
var inst_79532 = cljs.core.vec(chs);
var inst_79533 = inst_79532;
var state_79577__$1 = (function (){var statearr_79583 = state_79577;
(statearr_79583[(10)] = inst_79533);

return statearr_79583;
})();
var statearr_79584_80783 = state_79577__$1;
(statearr_79584_80783[(2)] = null);

(statearr_79584_80783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79579 === (4))){
var inst_79533 = (state_79577[(10)]);
var state_79577__$1 = state_79577;
return cljs.core.async.ioc_alts_BANG_(state_79577__$1,(7),inst_79533);
} else {
if((state_val_79579 === (6))){
var inst_79559 = (state_79577[(2)]);
var state_79577__$1 = state_79577;
var statearr_79585_80784 = state_79577__$1;
(statearr_79585_80784[(2)] = inst_79559);

(statearr_79585_80784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79579 === (3))){
var inst_79561 = (state_79577[(2)]);
var state_79577__$1 = state_79577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79577__$1,inst_79561);
} else {
if((state_val_79579 === (2))){
var inst_79533 = (state_79577[(10)]);
var inst_79535 = cljs.core.count(inst_79533);
var inst_79536 = (inst_79535 > (0));
var state_79577__$1 = state_79577;
if(cljs.core.truth_(inst_79536)){
var statearr_79587_80785 = state_79577__$1;
(statearr_79587_80785[(1)] = (4));

} else {
var statearr_79588_80786 = state_79577__$1;
(statearr_79588_80786[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79579 === (11))){
var inst_79533 = (state_79577[(10)]);
var inst_79552 = (state_79577[(2)]);
var tmp79586 = inst_79533;
var inst_79533__$1 = tmp79586;
var state_79577__$1 = (function (){var statearr_79589 = state_79577;
(statearr_79589[(11)] = inst_79552);

(statearr_79589[(10)] = inst_79533__$1);

return statearr_79589;
})();
var statearr_79590_80787 = state_79577__$1;
(statearr_79590_80787[(2)] = null);

(statearr_79590_80787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79579 === (9))){
var inst_79543 = (state_79577[(8)]);
var state_79577__$1 = state_79577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79577__$1,(11),out,inst_79543);
} else {
if((state_val_79579 === (5))){
var inst_79557 = cljs.core.async.close_BANG_(out);
var state_79577__$1 = state_79577;
var statearr_79592_80788 = state_79577__$1;
(statearr_79592_80788[(2)] = inst_79557);

(statearr_79592_80788[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79579 === (10))){
var inst_79555 = (state_79577[(2)]);
var state_79577__$1 = state_79577;
var statearr_79593_80789 = state_79577__$1;
(statearr_79593_80789[(2)] = inst_79555);

(statearr_79593_80789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79579 === (8))){
var inst_79544 = (state_79577[(9)]);
var inst_79542 = (state_79577[(7)]);
var inst_79533 = (state_79577[(10)]);
var inst_79543 = (state_79577[(8)]);
var inst_79547 = (function (){var cs = inst_79533;
var vec__79538 = inst_79542;
var v = inst_79543;
var c = inst_79544;
return (function (p1__79521_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__79521_SHARP_);
});
})();
var inst_79548 = cljs.core.filterv(inst_79547,inst_79533);
var inst_79533__$1 = inst_79548;
var state_79577__$1 = (function (){var statearr_79594 = state_79577;
(statearr_79594[(10)] = inst_79533__$1);

return statearr_79594;
})();
var statearr_79595_80790 = state_79577__$1;
(statearr_79595_80790[(2)] = null);

(statearr_79595_80790[(1)] = (2));


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
var cljs$core$async$state_machine__77211__auto__ = null;
var cljs$core$async$state_machine__77211__auto____0 = (function (){
var statearr_79596 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79596[(0)] = cljs$core$async$state_machine__77211__auto__);

(statearr_79596[(1)] = (1));

return statearr_79596;
});
var cljs$core$async$state_machine__77211__auto____1 = (function (state_79577){
while(true){
var ret_value__77212__auto__ = (function (){try{while(true){
var result__77213__auto__ = switch__77210__auto__(state_79577);
if(cljs.core.keyword_identical_QMARK_(result__77213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77213__auto__;
}
break;
}
}catch (e79597){var ex__77214__auto__ = e79597;
var statearr_79598_80791 = state_79577;
(statearr_79598_80791[(2)] = ex__77214__auto__);


if(cljs.core.seq((state_79577[(4)]))){
var statearr_79599_80792 = state_79577;
(statearr_79599_80792[(1)] = cljs.core.first((state_79577[(4)])));

} else {
throw ex__77214__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80793 = state_79577;
state_79577 = G__80793;
continue;
} else {
return ret_value__77212__auto__;
}
break;
}
});
cljs$core$async$state_machine__77211__auto__ = function(state_79577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__77211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__77211__auto____1.call(this,state_79577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__77211__auto____0;
cljs$core$async$state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__77211__auto____1;
return cljs$core$async$state_machine__77211__auto__;
})()
})();
var state__77564__auto__ = (function (){var statearr_79603 = f__77563__auto__();
(statearr_79603[(6)] = c__77562__auto___80780);

return statearr_79603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77564__auto__);
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
var G__79609 = arguments.length;
switch (G__79609) {
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
var c__77562__auto___80795 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77563__auto__ = (function (){var switch__77210__auto__ = (function (state_79636){
var state_val_79637 = (state_79636[(1)]);
if((state_val_79637 === (7))){
var inst_79618 = (state_79636[(7)]);
var inst_79618__$1 = (state_79636[(2)]);
var inst_79619 = (inst_79618__$1 == null);
var inst_79620 = cljs.core.not(inst_79619);
var state_79636__$1 = (function (){var statearr_79638 = state_79636;
(statearr_79638[(7)] = inst_79618__$1);

return statearr_79638;
})();
if(inst_79620){
var statearr_79639_80796 = state_79636__$1;
(statearr_79639_80796[(1)] = (8));

} else {
var statearr_79640_80797 = state_79636__$1;
(statearr_79640_80797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79637 === (1))){
var inst_79613 = (0);
var state_79636__$1 = (function (){var statearr_79641 = state_79636;
(statearr_79641[(8)] = inst_79613);

return statearr_79641;
})();
var statearr_79642_80798 = state_79636__$1;
(statearr_79642_80798[(2)] = null);

(statearr_79642_80798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79637 === (4))){
var state_79636__$1 = state_79636;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79636__$1,(7),ch);
} else {
if((state_val_79637 === (6))){
var inst_79631 = (state_79636[(2)]);
var state_79636__$1 = state_79636;
var statearr_79643_80799 = state_79636__$1;
(statearr_79643_80799[(2)] = inst_79631);

(statearr_79643_80799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79637 === (3))){
var inst_79633 = (state_79636[(2)]);
var inst_79634 = cljs.core.async.close_BANG_(out);
var state_79636__$1 = (function (){var statearr_79644 = state_79636;
(statearr_79644[(9)] = inst_79633);

return statearr_79644;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_79636__$1,inst_79634);
} else {
if((state_val_79637 === (2))){
var inst_79613 = (state_79636[(8)]);
var inst_79615 = (inst_79613 < n);
var state_79636__$1 = state_79636;
if(cljs.core.truth_(inst_79615)){
var statearr_79645_80800 = state_79636__$1;
(statearr_79645_80800[(1)] = (4));

} else {
var statearr_79646_80801 = state_79636__$1;
(statearr_79646_80801[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79637 === (11))){
var inst_79613 = (state_79636[(8)]);
var inst_79623 = (state_79636[(2)]);
var inst_79624 = (inst_79613 + (1));
var inst_79613__$1 = inst_79624;
var state_79636__$1 = (function (){var statearr_79647 = state_79636;
(statearr_79647[(8)] = inst_79613__$1);

(statearr_79647[(10)] = inst_79623);

return statearr_79647;
})();
var statearr_79648_80802 = state_79636__$1;
(statearr_79648_80802[(2)] = null);

(statearr_79648_80802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79637 === (9))){
var state_79636__$1 = state_79636;
var statearr_79650_80803 = state_79636__$1;
(statearr_79650_80803[(2)] = null);

(statearr_79650_80803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79637 === (5))){
var state_79636__$1 = state_79636;
var statearr_79651_80804 = state_79636__$1;
(statearr_79651_80804[(2)] = null);

(statearr_79651_80804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79637 === (10))){
var inst_79628 = (state_79636[(2)]);
var state_79636__$1 = state_79636;
var statearr_79652_80805 = state_79636__$1;
(statearr_79652_80805[(2)] = inst_79628);

(statearr_79652_80805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79637 === (8))){
var inst_79618 = (state_79636[(7)]);
var state_79636__$1 = state_79636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79636__$1,(11),out,inst_79618);
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
var cljs$core$async$state_machine__77211__auto__ = null;
var cljs$core$async$state_machine__77211__auto____0 = (function (){
var statearr_79653 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_79653[(0)] = cljs$core$async$state_machine__77211__auto__);

(statearr_79653[(1)] = (1));

return statearr_79653;
});
var cljs$core$async$state_machine__77211__auto____1 = (function (state_79636){
while(true){
var ret_value__77212__auto__ = (function (){try{while(true){
var result__77213__auto__ = switch__77210__auto__(state_79636);
if(cljs.core.keyword_identical_QMARK_(result__77213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77213__auto__;
}
break;
}
}catch (e79654){var ex__77214__auto__ = e79654;
var statearr_79655_80806 = state_79636;
(statearr_79655_80806[(2)] = ex__77214__auto__);


if(cljs.core.seq((state_79636[(4)]))){
var statearr_79656_80807 = state_79636;
(statearr_79656_80807[(1)] = cljs.core.first((state_79636[(4)])));

} else {
throw ex__77214__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80808 = state_79636;
state_79636 = G__80808;
continue;
} else {
return ret_value__77212__auto__;
}
break;
}
});
cljs$core$async$state_machine__77211__auto__ = function(state_79636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__77211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__77211__auto____1.call(this,state_79636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__77211__auto____0;
cljs$core$async$state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__77211__auto____1;
return cljs$core$async$state_machine__77211__auto__;
})()
})();
var state__77564__auto__ = (function (){var statearr_79657 = f__77563__auto__();
(statearr_79657[(6)] = c__77562__auto___80795);

return statearr_79657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77564__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async79659 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79659 = (function (f,ch,meta79660){
this.f = f;
this.ch = ch;
this.meta79660 = meta79660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async79659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79661,meta79660__$1){
var self__ = this;
var _79661__$1 = this;
return (new cljs.core.async.t_cljs$core$async79659(self__.f,self__.ch,meta79660__$1));
}));

(cljs.core.async.t_cljs$core$async79659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79661){
var self__ = this;
var _79661__$1 = this;
return self__.meta79660;
}));

(cljs.core.async.t_cljs$core$async79659.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79659.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async79659.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async79659.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79659.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async79663 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79663 = (function (f,ch,meta79660,_,fn1,meta79664){
this.f = f;
this.ch = ch;
this.meta79660 = meta79660;
this._ = _;
this.fn1 = fn1;
this.meta79664 = meta79664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async79663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79665,meta79664__$1){
var self__ = this;
var _79665__$1 = this;
return (new cljs.core.async.t_cljs$core$async79663(self__.f,self__.ch,self__.meta79660,self__._,self__.fn1,meta79664__$1));
}));

(cljs.core.async.t_cljs$core$async79663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79665){
var self__ = this;
var _79665__$1 = this;
return self__.meta79664;
}));

(cljs.core.async.t_cljs$core$async79663.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79663.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async79663.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async79663.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__79658_SHARP_){
var G__79667 = (((p1__79658_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__79658_SHARP_) : self__.f.call(null,p1__79658_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__79667) : f1.call(null,G__79667));
});
}));

(cljs.core.async.t_cljs$core$async79663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta79660","meta79660",56436080,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async79659","cljs.core.async/t_cljs$core$async79659",-1380381005,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta79664","meta79664",2013293508,null)], null);
}));

(cljs.core.async.t_cljs$core$async79663.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async79663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79663");

(cljs.core.async.t_cljs$core$async79663.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async79663");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async79663.
 */
cljs.core.async.__GT_t_cljs$core$async79663 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async79663(f__$1,ch__$1,meta79660__$1,___$2,fn1__$1,meta79664){
return (new cljs.core.async.t_cljs$core$async79663(f__$1,ch__$1,meta79660__$1,___$2,fn1__$1,meta79664));
});

}

return (new cljs.core.async.t_cljs$core$async79663(self__.f,self__.ch,self__.meta79660,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__79917 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__79917) : self__.f.call(null,G__79917));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async79659.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79659.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async79659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta79660","meta79660",56436080,null)], null);
}));

(cljs.core.async.t_cljs$core$async79659.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async79659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79659");

(cljs.core.async.t_cljs$core$async79659.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async79659");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async79659.
 */
cljs.core.async.__GT_t_cljs$core$async79659 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async79659(f__$1,ch__$1,meta79660){
return (new cljs.core.async.t_cljs$core$async79659(f__$1,ch__$1,meta79660));
});

}

return (new cljs.core.async.t_cljs$core$async79659(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async79927 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79927 = (function (f,ch,meta79928){
this.f = f;
this.ch = ch;
this.meta79928 = meta79928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async79927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79929,meta79928__$1){
var self__ = this;
var _79929__$1 = this;
return (new cljs.core.async.t_cljs$core$async79927(self__.f,self__.ch,meta79928__$1));
}));

(cljs.core.async.t_cljs$core$async79927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79929){
var self__ = this;
var _79929__$1 = this;
return self__.meta79928;
}));

(cljs.core.async.t_cljs$core$async79927.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79927.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async79927.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79927.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async79927.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79927.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async79927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta79928","meta79928",-308123138,null)], null);
}));

(cljs.core.async.t_cljs$core$async79927.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async79927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79927");

(cljs.core.async.t_cljs$core$async79927.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async79927");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async79927.
 */
cljs.core.async.__GT_t_cljs$core$async79927 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async79927(f__$1,ch__$1,meta79928){
return (new cljs.core.async.t_cljs$core$async79927(f__$1,ch__$1,meta79928));
});

}

return (new cljs.core.async.t_cljs$core$async79927(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async79934 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79934 = (function (p,ch,meta79935){
this.p = p;
this.ch = ch;
this.meta79935 = meta79935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async79934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79936,meta79935__$1){
var self__ = this;
var _79936__$1 = this;
return (new cljs.core.async.t_cljs$core$async79934(self__.p,self__.ch,meta79935__$1));
}));

(cljs.core.async.t_cljs$core$async79934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79936){
var self__ = this;
var _79936__$1 = this;
return self__.meta79935;
}));

(cljs.core.async.t_cljs$core$async79934.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79934.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async79934.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async79934.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79934.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async79934.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79934.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async79934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta79935","meta79935",1925836998,null)], null);
}));

(cljs.core.async.t_cljs$core$async79934.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async79934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79934");

(cljs.core.async.t_cljs$core$async79934.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async79934");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async79934.
 */
cljs.core.async.__GT_t_cljs$core$async79934 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async79934(p__$1,ch__$1,meta79935){
return (new cljs.core.async.t_cljs$core$async79934(p__$1,ch__$1,meta79935));
});

}

return (new cljs.core.async.t_cljs$core$async79934(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__79951 = arguments.length;
switch (G__79951) {
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
var c__77562__auto___80819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77563__auto__ = (function (){var switch__77210__auto__ = (function (state_79973){
var state_val_79974 = (state_79973[(1)]);
if((state_val_79974 === (7))){
var inst_79969 = (state_79973[(2)]);
var state_79973__$1 = state_79973;
var statearr_79999_80820 = state_79973__$1;
(statearr_79999_80820[(2)] = inst_79969);

(statearr_79999_80820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79974 === (1))){
var state_79973__$1 = state_79973;
var statearr_80000_80822 = state_79973__$1;
(statearr_80000_80822[(2)] = null);

(statearr_80000_80822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79974 === (4))){
var inst_79955 = (state_79973[(7)]);
var inst_79955__$1 = (state_79973[(2)]);
var inst_79956 = (inst_79955__$1 == null);
var state_79973__$1 = (function (){var statearr_80001 = state_79973;
(statearr_80001[(7)] = inst_79955__$1);

return statearr_80001;
})();
if(cljs.core.truth_(inst_79956)){
var statearr_80002_80823 = state_79973__$1;
(statearr_80002_80823[(1)] = (5));

} else {
var statearr_80003_80824 = state_79973__$1;
(statearr_80003_80824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79974 === (6))){
var inst_79955 = (state_79973[(7)]);
var inst_79960 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_79955) : p.call(null,inst_79955));
var state_79973__$1 = state_79973;
if(cljs.core.truth_(inst_79960)){
var statearr_80004_80825 = state_79973__$1;
(statearr_80004_80825[(1)] = (8));

} else {
var statearr_80005_80826 = state_79973__$1;
(statearr_80005_80826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79974 === (3))){
var inst_79971 = (state_79973[(2)]);
var state_79973__$1 = state_79973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79973__$1,inst_79971);
} else {
if((state_val_79974 === (2))){
var state_79973__$1 = state_79973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79973__$1,(4),ch);
} else {
if((state_val_79974 === (11))){
var inst_79963 = (state_79973[(2)]);
var state_79973__$1 = state_79973;
var statearr_80026_80827 = state_79973__$1;
(statearr_80026_80827[(2)] = inst_79963);

(statearr_80026_80827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79974 === (9))){
var state_79973__$1 = state_79973;
var statearr_80027_80830 = state_79973__$1;
(statearr_80027_80830[(2)] = null);

(statearr_80027_80830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79974 === (5))){
var inst_79958 = cljs.core.async.close_BANG_(out);
var state_79973__$1 = state_79973;
var statearr_80028_80831 = state_79973__$1;
(statearr_80028_80831[(2)] = inst_79958);

(statearr_80028_80831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79974 === (10))){
var inst_79966 = (state_79973[(2)]);
var state_79973__$1 = (function (){var statearr_80029 = state_79973;
(statearr_80029[(8)] = inst_79966);

return statearr_80029;
})();
var statearr_80030_80832 = state_79973__$1;
(statearr_80030_80832[(2)] = null);

(statearr_80030_80832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79974 === (8))){
var inst_79955 = (state_79973[(7)]);
var state_79973__$1 = state_79973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79973__$1,(11),out,inst_79955);
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
var cljs$core$async$state_machine__77211__auto__ = null;
var cljs$core$async$state_machine__77211__auto____0 = (function (){
var statearr_80033 = [null,null,null,null,null,null,null,null,null];
(statearr_80033[(0)] = cljs$core$async$state_machine__77211__auto__);

(statearr_80033[(1)] = (1));

return statearr_80033;
});
var cljs$core$async$state_machine__77211__auto____1 = (function (state_79973){
while(true){
var ret_value__77212__auto__ = (function (){try{while(true){
var result__77213__auto__ = switch__77210__auto__(state_79973);
if(cljs.core.keyword_identical_QMARK_(result__77213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77213__auto__;
}
break;
}
}catch (e80035){var ex__77214__auto__ = e80035;
var statearr_80037_80833 = state_79973;
(statearr_80037_80833[(2)] = ex__77214__auto__);


if(cljs.core.seq((state_79973[(4)]))){
var statearr_80038_80835 = state_79973;
(statearr_80038_80835[(1)] = cljs.core.first((state_79973[(4)])));

} else {
throw ex__77214__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80839 = state_79973;
state_79973 = G__80839;
continue;
} else {
return ret_value__77212__auto__;
}
break;
}
});
cljs$core$async$state_machine__77211__auto__ = function(state_79973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__77211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__77211__auto____1.call(this,state_79973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__77211__auto____0;
cljs$core$async$state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__77211__auto____1;
return cljs$core$async$state_machine__77211__auto__;
})()
})();
var state__77564__auto__ = (function (){var statearr_80040 = f__77563__auto__();
(statearr_80040[(6)] = c__77562__auto___80819);

return statearr_80040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77564__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__80043 = arguments.length;
switch (G__80043) {
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
var c__77562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77563__auto__ = (function (){var switch__77210__auto__ = (function (state_80107){
var state_val_80108 = (state_80107[(1)]);
if((state_val_80108 === (7))){
var inst_80102 = (state_80107[(2)]);
var state_80107__$1 = state_80107;
var statearr_80109_80868 = state_80107__$1;
(statearr_80109_80868[(2)] = inst_80102);

(statearr_80109_80868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80108 === (20))){
var inst_80072 = (state_80107[(7)]);
var inst_80083 = (state_80107[(2)]);
var inst_80084 = cljs.core.next(inst_80072);
var inst_80058 = inst_80084;
var inst_80059 = null;
var inst_80060 = (0);
var inst_80061 = (0);
var state_80107__$1 = (function (){var statearr_80110 = state_80107;
(statearr_80110[(8)] = inst_80058);

(statearr_80110[(9)] = inst_80060);

(statearr_80110[(10)] = inst_80083);

(statearr_80110[(11)] = inst_80061);

(statearr_80110[(12)] = inst_80059);

return statearr_80110;
})();
var statearr_80111_80886 = state_80107__$1;
(statearr_80111_80886[(2)] = null);

(statearr_80111_80886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80108 === (1))){
var state_80107__$1 = state_80107;
var statearr_80112_80889 = state_80107__$1;
(statearr_80112_80889[(2)] = null);

(statearr_80112_80889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80108 === (4))){
var inst_80047 = (state_80107[(13)]);
var inst_80047__$1 = (state_80107[(2)]);
var inst_80048 = (inst_80047__$1 == null);
var state_80107__$1 = (function (){var statearr_80113 = state_80107;
(statearr_80113[(13)] = inst_80047__$1);

return statearr_80113;
})();
if(cljs.core.truth_(inst_80048)){
var statearr_80114_80896 = state_80107__$1;
(statearr_80114_80896[(1)] = (5));

} else {
var statearr_80115_80897 = state_80107__$1;
(statearr_80115_80897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80108 === (15))){
var state_80107__$1 = state_80107;
var statearr_80119_80907 = state_80107__$1;
(statearr_80119_80907[(2)] = null);

(statearr_80119_80907[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80108 === (21))){
var state_80107__$1 = state_80107;
var statearr_80120_80910 = state_80107__$1;
(statearr_80120_80910[(2)] = null);

(statearr_80120_80910[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80108 === (13))){
var inst_80058 = (state_80107[(8)]);
var inst_80060 = (state_80107[(9)]);
var inst_80061 = (state_80107[(11)]);
var inst_80059 = (state_80107[(12)]);
var inst_80068 = (state_80107[(2)]);
var inst_80069 = (inst_80061 + (1));
var tmp80116 = inst_80058;
var tmp80117 = inst_80060;
var tmp80118 = inst_80059;
var inst_80058__$1 = tmp80116;
var inst_80059__$1 = tmp80118;
var inst_80060__$1 = tmp80117;
var inst_80061__$1 = inst_80069;
var state_80107__$1 = (function (){var statearr_80122 = state_80107;
(statearr_80122[(8)] = inst_80058__$1);

(statearr_80122[(9)] = inst_80060__$1);

(statearr_80122[(11)] = inst_80061__$1);

(statearr_80122[(12)] = inst_80059__$1);

(statearr_80122[(14)] = inst_80068);

return statearr_80122;
})();
var statearr_80123_80928 = state_80107__$1;
(statearr_80123_80928[(2)] = null);

(statearr_80123_80928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80108 === (22))){
var state_80107__$1 = state_80107;
var statearr_80124_80930 = state_80107__$1;
(statearr_80124_80930[(2)] = null);

(statearr_80124_80930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80108 === (6))){
var inst_80047 = (state_80107[(13)]);
var inst_80056 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_80047) : f.call(null,inst_80047));
var inst_80057 = cljs.core.seq(inst_80056);
var inst_80058 = inst_80057;
var inst_80059 = null;
var inst_80060 = (0);
var inst_80061 = (0);
var state_80107__$1 = (function (){var statearr_80125 = state_80107;
(statearr_80125[(8)] = inst_80058);

(statearr_80125[(9)] = inst_80060);

(statearr_80125[(11)] = inst_80061);

(statearr_80125[(12)] = inst_80059);

return statearr_80125;
})();
var statearr_80126_80937 = state_80107__$1;
(statearr_80126_80937[(2)] = null);

(statearr_80126_80937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80108 === (17))){
var inst_80072 = (state_80107[(7)]);
var inst_80076 = cljs.core.chunk_first(inst_80072);
var inst_80077 = cljs.core.chunk_rest(inst_80072);
var inst_80078 = cljs.core.count(inst_80076);
var inst_80058 = inst_80077;
var inst_80059 = inst_80076;
var inst_80060 = inst_80078;
var inst_80061 = (0);
var state_80107__$1 = (function (){var statearr_80127 = state_80107;
(statearr_80127[(8)] = inst_80058);

(statearr_80127[(9)] = inst_80060);

(statearr_80127[(11)] = inst_80061);

(statearr_80127[(12)] = inst_80059);

return statearr_80127;
})();
var statearr_80128_80940 = state_80107__$1;
(statearr_80128_80940[(2)] = null);

(statearr_80128_80940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80108 === (3))){
var inst_80104 = (state_80107[(2)]);
var state_80107__$1 = state_80107;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80107__$1,inst_80104);
} else {
if((state_val_80108 === (12))){
var inst_80092 = (state_80107[(2)]);
var state_80107__$1 = state_80107;
var statearr_80130_80941 = state_80107__$1;
(statearr_80130_80941[(2)] = inst_80092);

(statearr_80130_80941[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80108 === (2))){
var state_80107__$1 = state_80107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80107__$1,(4),in$);
} else {
if((state_val_80108 === (23))){
var inst_80100 = (state_80107[(2)]);
var state_80107__$1 = state_80107;
var statearr_80131_80945 = state_80107__$1;
(statearr_80131_80945[(2)] = inst_80100);

(statearr_80131_80945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80108 === (19))){
var inst_80087 = (state_80107[(2)]);
var state_80107__$1 = state_80107;
var statearr_80132_80946 = state_80107__$1;
(statearr_80132_80946[(2)] = inst_80087);

(statearr_80132_80946[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80108 === (11))){
var inst_80058 = (state_80107[(8)]);
var inst_80072 = (state_80107[(7)]);
var inst_80072__$1 = cljs.core.seq(inst_80058);
var state_80107__$1 = (function (){var statearr_80133 = state_80107;
(statearr_80133[(7)] = inst_80072__$1);

return statearr_80133;
})();
if(inst_80072__$1){
var statearr_80134_80948 = state_80107__$1;
(statearr_80134_80948[(1)] = (14));

} else {
var statearr_80135_80949 = state_80107__$1;
(statearr_80135_80949[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80108 === (9))){
var inst_80094 = (state_80107[(2)]);
var inst_80095 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_80107__$1 = (function (){var statearr_80136 = state_80107;
(statearr_80136[(15)] = inst_80094);

return statearr_80136;
})();
if(cljs.core.truth_(inst_80095)){
var statearr_80137_80953 = state_80107__$1;
(statearr_80137_80953[(1)] = (21));

} else {
var statearr_80138_80954 = state_80107__$1;
(statearr_80138_80954[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80108 === (5))){
var inst_80050 = cljs.core.async.close_BANG_(out);
var state_80107__$1 = state_80107;
var statearr_80139_80955 = state_80107__$1;
(statearr_80139_80955[(2)] = inst_80050);

(statearr_80139_80955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80108 === (14))){
var inst_80072 = (state_80107[(7)]);
var inst_80074 = cljs.core.chunked_seq_QMARK_(inst_80072);
var state_80107__$1 = state_80107;
if(inst_80074){
var statearr_80140_80957 = state_80107__$1;
(statearr_80140_80957[(1)] = (17));

} else {
var statearr_80141_80958 = state_80107__$1;
(statearr_80141_80958[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80108 === (16))){
var inst_80090 = (state_80107[(2)]);
var state_80107__$1 = state_80107;
var statearr_80142_80959 = state_80107__$1;
(statearr_80142_80959[(2)] = inst_80090);

(statearr_80142_80959[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80108 === (10))){
var inst_80061 = (state_80107[(11)]);
var inst_80059 = (state_80107[(12)]);
var inst_80066 = cljs.core._nth(inst_80059,inst_80061);
var state_80107__$1 = state_80107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80107__$1,(13),out,inst_80066);
} else {
if((state_val_80108 === (18))){
var inst_80072 = (state_80107[(7)]);
var inst_80081 = cljs.core.first(inst_80072);
var state_80107__$1 = state_80107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80107__$1,(20),out,inst_80081);
} else {
if((state_val_80108 === (8))){
var inst_80060 = (state_80107[(9)]);
var inst_80061 = (state_80107[(11)]);
var inst_80063 = (inst_80061 < inst_80060);
var inst_80064 = inst_80063;
var state_80107__$1 = state_80107;
if(cljs.core.truth_(inst_80064)){
var statearr_80144_80964 = state_80107__$1;
(statearr_80144_80964[(1)] = (10));

} else {
var statearr_80145_80965 = state_80107__$1;
(statearr_80145_80965[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__77211__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__77211__auto____0 = (function (){
var statearr_80146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80146[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__77211__auto__);

(statearr_80146[(1)] = (1));

return statearr_80146;
});
var cljs$core$async$mapcat_STAR__$_state_machine__77211__auto____1 = (function (state_80107){
while(true){
var ret_value__77212__auto__ = (function (){try{while(true){
var result__77213__auto__ = switch__77210__auto__(state_80107);
if(cljs.core.keyword_identical_QMARK_(result__77213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77213__auto__;
}
break;
}
}catch (e80147){var ex__77214__auto__ = e80147;
var statearr_80148_80970 = state_80107;
(statearr_80148_80970[(2)] = ex__77214__auto__);


if(cljs.core.seq((state_80107[(4)]))){
var statearr_80149_80971 = state_80107;
(statearr_80149_80971[(1)] = cljs.core.first((state_80107[(4)])));

} else {
throw ex__77214__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80973 = state_80107;
state_80107 = G__80973;
continue;
} else {
return ret_value__77212__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__77211__auto__ = function(state_80107){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__77211__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__77211__auto____1.call(this,state_80107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__77211__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__77211__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__77211__auto__;
})()
})();
var state__77564__auto__ = (function (){var statearr_80150 = f__77563__auto__();
(statearr_80150[(6)] = c__77562__auto__);

return statearr_80150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77564__auto__);
}));

return c__77562__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__80153 = arguments.length;
switch (G__80153) {
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
var G__80157 = arguments.length;
switch (G__80157) {
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
var G__80161 = arguments.length;
switch (G__80161) {
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
var c__77562__auto___80988 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77563__auto__ = (function (){var switch__77210__auto__ = (function (state_80185){
var state_val_80186 = (state_80185[(1)]);
if((state_val_80186 === (7))){
var inst_80180 = (state_80185[(2)]);
var state_80185__$1 = state_80185;
var statearr_80189_80990 = state_80185__$1;
(statearr_80189_80990[(2)] = inst_80180);

(statearr_80189_80990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80186 === (1))){
var inst_80162 = null;
var state_80185__$1 = (function (){var statearr_80190 = state_80185;
(statearr_80190[(7)] = inst_80162);

return statearr_80190;
})();
var statearr_80191_80993 = state_80185__$1;
(statearr_80191_80993[(2)] = null);

(statearr_80191_80993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80186 === (4))){
var inst_80165 = (state_80185[(8)]);
var inst_80165__$1 = (state_80185[(2)]);
var inst_80166 = (inst_80165__$1 == null);
var inst_80167 = cljs.core.not(inst_80166);
var state_80185__$1 = (function (){var statearr_80192 = state_80185;
(statearr_80192[(8)] = inst_80165__$1);

return statearr_80192;
})();
if(inst_80167){
var statearr_80193_80995 = state_80185__$1;
(statearr_80193_80995[(1)] = (5));

} else {
var statearr_80194_80996 = state_80185__$1;
(statearr_80194_80996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80186 === (6))){
var state_80185__$1 = state_80185;
var statearr_80195_80998 = state_80185__$1;
(statearr_80195_80998[(2)] = null);

(statearr_80195_80998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80186 === (3))){
var inst_80182 = (state_80185[(2)]);
var inst_80183 = cljs.core.async.close_BANG_(out);
var state_80185__$1 = (function (){var statearr_80196 = state_80185;
(statearr_80196[(9)] = inst_80182);

return statearr_80196;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_80185__$1,inst_80183);
} else {
if((state_val_80186 === (2))){
var state_80185__$1 = state_80185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80185__$1,(4),ch);
} else {
if((state_val_80186 === (11))){
var inst_80165 = (state_80185[(8)]);
var inst_80174 = (state_80185[(2)]);
var inst_80162 = inst_80165;
var state_80185__$1 = (function (){var statearr_80198 = state_80185;
(statearr_80198[(7)] = inst_80162);

(statearr_80198[(10)] = inst_80174);

return statearr_80198;
})();
var statearr_80199_81004 = state_80185__$1;
(statearr_80199_81004[(2)] = null);

(statearr_80199_81004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80186 === (9))){
var inst_80165 = (state_80185[(8)]);
var state_80185__$1 = state_80185;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80185__$1,(11),out,inst_80165);
} else {
if((state_val_80186 === (5))){
var inst_80162 = (state_80185[(7)]);
var inst_80165 = (state_80185[(8)]);
var inst_80169 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_80165,inst_80162);
var state_80185__$1 = state_80185;
if(inst_80169){
var statearr_80201_81006 = state_80185__$1;
(statearr_80201_81006[(1)] = (8));

} else {
var statearr_80202_81008 = state_80185__$1;
(statearr_80202_81008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80186 === (10))){
var inst_80177 = (state_80185[(2)]);
var state_80185__$1 = state_80185;
var statearr_80203_81011 = state_80185__$1;
(statearr_80203_81011[(2)] = inst_80177);

(statearr_80203_81011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80186 === (8))){
var inst_80162 = (state_80185[(7)]);
var tmp80200 = inst_80162;
var inst_80162__$1 = tmp80200;
var state_80185__$1 = (function (){var statearr_80204 = state_80185;
(statearr_80204[(7)] = inst_80162__$1);

return statearr_80204;
})();
var statearr_80205_81012 = state_80185__$1;
(statearr_80205_81012[(2)] = null);

(statearr_80205_81012[(1)] = (2));


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
var cljs$core$async$state_machine__77211__auto__ = null;
var cljs$core$async$state_machine__77211__auto____0 = (function (){
var statearr_80206 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_80206[(0)] = cljs$core$async$state_machine__77211__auto__);

(statearr_80206[(1)] = (1));

return statearr_80206;
});
var cljs$core$async$state_machine__77211__auto____1 = (function (state_80185){
while(true){
var ret_value__77212__auto__ = (function (){try{while(true){
var result__77213__auto__ = switch__77210__auto__(state_80185);
if(cljs.core.keyword_identical_QMARK_(result__77213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77213__auto__;
}
break;
}
}catch (e80207){var ex__77214__auto__ = e80207;
var statearr_80208_81019 = state_80185;
(statearr_80208_81019[(2)] = ex__77214__auto__);


if(cljs.core.seq((state_80185[(4)]))){
var statearr_80209_81020 = state_80185;
(statearr_80209_81020[(1)] = cljs.core.first((state_80185[(4)])));

} else {
throw ex__77214__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81021 = state_80185;
state_80185 = G__81021;
continue;
} else {
return ret_value__77212__auto__;
}
break;
}
});
cljs$core$async$state_machine__77211__auto__ = function(state_80185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__77211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__77211__auto____1.call(this,state_80185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__77211__auto____0;
cljs$core$async$state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__77211__auto____1;
return cljs$core$async$state_machine__77211__auto__;
})()
})();
var state__77564__auto__ = (function (){var statearr_80210 = f__77563__auto__();
(statearr_80210[(6)] = c__77562__auto___80988);

return statearr_80210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77564__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__80212 = arguments.length;
switch (G__80212) {
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
var c__77562__auto___81027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77563__auto__ = (function (){var switch__77210__auto__ = (function (state_80250){
var state_val_80251 = (state_80250[(1)]);
if((state_val_80251 === (7))){
var inst_80246 = (state_80250[(2)]);
var state_80250__$1 = state_80250;
var statearr_80252_81029 = state_80250__$1;
(statearr_80252_81029[(2)] = inst_80246);

(statearr_80252_81029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80251 === (1))){
var inst_80213 = (new Array(n));
var inst_80214 = inst_80213;
var inst_80215 = (0);
var state_80250__$1 = (function (){var statearr_80254 = state_80250;
(statearr_80254[(7)] = inst_80214);

(statearr_80254[(8)] = inst_80215);

return statearr_80254;
})();
var statearr_80255_81030 = state_80250__$1;
(statearr_80255_81030[(2)] = null);

(statearr_80255_81030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80251 === (4))){
var inst_80218 = (state_80250[(9)]);
var inst_80218__$1 = (state_80250[(2)]);
var inst_80219 = (inst_80218__$1 == null);
var inst_80220 = cljs.core.not(inst_80219);
var state_80250__$1 = (function (){var statearr_80256 = state_80250;
(statearr_80256[(9)] = inst_80218__$1);

return statearr_80256;
})();
if(inst_80220){
var statearr_80257_81034 = state_80250__$1;
(statearr_80257_81034[(1)] = (5));

} else {
var statearr_80258_81035 = state_80250__$1;
(statearr_80258_81035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80251 === (15))){
var inst_80240 = (state_80250[(2)]);
var state_80250__$1 = state_80250;
var statearr_80259_81037 = state_80250__$1;
(statearr_80259_81037[(2)] = inst_80240);

(statearr_80259_81037[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80251 === (13))){
var state_80250__$1 = state_80250;
var statearr_80260_81038 = state_80250__$1;
(statearr_80260_81038[(2)] = null);

(statearr_80260_81038[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80251 === (6))){
var inst_80215 = (state_80250[(8)]);
var inst_80236 = (inst_80215 > (0));
var state_80250__$1 = state_80250;
if(cljs.core.truth_(inst_80236)){
var statearr_80261_81040 = state_80250__$1;
(statearr_80261_81040[(1)] = (12));

} else {
var statearr_80262_81042 = state_80250__$1;
(statearr_80262_81042[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80251 === (3))){
var inst_80248 = (state_80250[(2)]);
var state_80250__$1 = state_80250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80250__$1,inst_80248);
} else {
if((state_val_80251 === (12))){
var inst_80214 = (state_80250[(7)]);
var inst_80238 = cljs.core.vec(inst_80214);
var state_80250__$1 = state_80250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80250__$1,(15),out,inst_80238);
} else {
if((state_val_80251 === (2))){
var state_80250__$1 = state_80250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80250__$1,(4),ch);
} else {
if((state_val_80251 === (11))){
var inst_80230 = (state_80250[(2)]);
var inst_80231 = (new Array(n));
var inst_80214 = inst_80231;
var inst_80215 = (0);
var state_80250__$1 = (function (){var statearr_80263 = state_80250;
(statearr_80263[(7)] = inst_80214);

(statearr_80263[(8)] = inst_80215);

(statearr_80263[(10)] = inst_80230);

return statearr_80263;
})();
var statearr_80264_81046 = state_80250__$1;
(statearr_80264_81046[(2)] = null);

(statearr_80264_81046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80251 === (9))){
var inst_80214 = (state_80250[(7)]);
var inst_80228 = cljs.core.vec(inst_80214);
var state_80250__$1 = state_80250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80250__$1,(11),out,inst_80228);
} else {
if((state_val_80251 === (5))){
var inst_80214 = (state_80250[(7)]);
var inst_80218 = (state_80250[(9)]);
var inst_80215 = (state_80250[(8)]);
var inst_80223 = (state_80250[(11)]);
var inst_80222 = (inst_80214[inst_80215] = inst_80218);
var inst_80223__$1 = (inst_80215 + (1));
var inst_80224 = (inst_80223__$1 < n);
var state_80250__$1 = (function (){var statearr_80265 = state_80250;
(statearr_80265[(11)] = inst_80223__$1);

(statearr_80265[(12)] = inst_80222);

return statearr_80265;
})();
if(cljs.core.truth_(inst_80224)){
var statearr_80266_81047 = state_80250__$1;
(statearr_80266_81047[(1)] = (8));

} else {
var statearr_80267_81048 = state_80250__$1;
(statearr_80267_81048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80251 === (14))){
var inst_80243 = (state_80250[(2)]);
var inst_80244 = cljs.core.async.close_BANG_(out);
var state_80250__$1 = (function (){var statearr_80269 = state_80250;
(statearr_80269[(13)] = inst_80243);

return statearr_80269;
})();
var statearr_80270_81049 = state_80250__$1;
(statearr_80270_81049[(2)] = inst_80244);

(statearr_80270_81049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80251 === (10))){
var inst_80234 = (state_80250[(2)]);
var state_80250__$1 = state_80250;
var statearr_80271_81050 = state_80250__$1;
(statearr_80271_81050[(2)] = inst_80234);

(statearr_80271_81050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80251 === (8))){
var inst_80214 = (state_80250[(7)]);
var inst_80223 = (state_80250[(11)]);
var tmp80268 = inst_80214;
var inst_80214__$1 = tmp80268;
var inst_80215 = inst_80223;
var state_80250__$1 = (function (){var statearr_80272 = state_80250;
(statearr_80272[(7)] = inst_80214__$1);

(statearr_80272[(8)] = inst_80215);

return statearr_80272;
})();
var statearr_80273_81051 = state_80250__$1;
(statearr_80273_81051[(2)] = null);

(statearr_80273_81051[(1)] = (2));


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
var cljs$core$async$state_machine__77211__auto__ = null;
var cljs$core$async$state_machine__77211__auto____0 = (function (){
var statearr_80274 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80274[(0)] = cljs$core$async$state_machine__77211__auto__);

(statearr_80274[(1)] = (1));

return statearr_80274;
});
var cljs$core$async$state_machine__77211__auto____1 = (function (state_80250){
while(true){
var ret_value__77212__auto__ = (function (){try{while(true){
var result__77213__auto__ = switch__77210__auto__(state_80250);
if(cljs.core.keyword_identical_QMARK_(result__77213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77213__auto__;
}
break;
}
}catch (e80275){var ex__77214__auto__ = e80275;
var statearr_80276_81053 = state_80250;
(statearr_80276_81053[(2)] = ex__77214__auto__);


if(cljs.core.seq((state_80250[(4)]))){
var statearr_80277_81054 = state_80250;
(statearr_80277_81054[(1)] = cljs.core.first((state_80250[(4)])));

} else {
throw ex__77214__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81055 = state_80250;
state_80250 = G__81055;
continue;
} else {
return ret_value__77212__auto__;
}
break;
}
});
cljs$core$async$state_machine__77211__auto__ = function(state_80250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__77211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__77211__auto____1.call(this,state_80250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__77211__auto____0;
cljs$core$async$state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__77211__auto____1;
return cljs$core$async$state_machine__77211__auto__;
})()
})();
var state__77564__auto__ = (function (){var statearr_80278 = f__77563__auto__();
(statearr_80278[(6)] = c__77562__auto___81027);

return statearr_80278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77564__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__80281 = arguments.length;
switch (G__80281) {
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
var c__77562__auto___81058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77563__auto__ = (function (){var switch__77210__auto__ = (function (state_80329){
var state_val_80330 = (state_80329[(1)]);
if((state_val_80330 === (7))){
var inst_80325 = (state_80329[(2)]);
var state_80329__$1 = state_80329;
var statearr_80332_81061 = state_80329__$1;
(statearr_80332_81061[(2)] = inst_80325);

(statearr_80332_81061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80330 === (1))){
var inst_80284 = [];
var inst_80285 = inst_80284;
var inst_80286 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_80329__$1 = (function (){var statearr_80333 = state_80329;
(statearr_80333[(7)] = inst_80286);

(statearr_80333[(8)] = inst_80285);

return statearr_80333;
})();
var statearr_80334_81063 = state_80329__$1;
(statearr_80334_81063[(2)] = null);

(statearr_80334_81063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80330 === (4))){
var inst_80289 = (state_80329[(9)]);
var inst_80289__$1 = (state_80329[(2)]);
var inst_80290 = (inst_80289__$1 == null);
var inst_80291 = cljs.core.not(inst_80290);
var state_80329__$1 = (function (){var statearr_80335 = state_80329;
(statearr_80335[(9)] = inst_80289__$1);

return statearr_80335;
})();
if(inst_80291){
var statearr_80336_81064 = state_80329__$1;
(statearr_80336_81064[(1)] = (5));

} else {
var statearr_80337_81065 = state_80329__$1;
(statearr_80337_81065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80330 === (15))){
var inst_80285 = (state_80329[(8)]);
var inst_80317 = cljs.core.vec(inst_80285);
var state_80329__$1 = state_80329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80329__$1,(18),out,inst_80317);
} else {
if((state_val_80330 === (13))){
var inst_80312 = (state_80329[(2)]);
var state_80329__$1 = state_80329;
var statearr_80338_81066 = state_80329__$1;
(statearr_80338_81066[(2)] = inst_80312);

(statearr_80338_81066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80330 === (6))){
var inst_80285 = (state_80329[(8)]);
var inst_80314 = inst_80285.length;
var inst_80315 = (inst_80314 > (0));
var state_80329__$1 = state_80329;
if(cljs.core.truth_(inst_80315)){
var statearr_80339_81067 = state_80329__$1;
(statearr_80339_81067[(1)] = (15));

} else {
var statearr_80340_81068 = state_80329__$1;
(statearr_80340_81068[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80330 === (17))){
var inst_80322 = (state_80329[(2)]);
var inst_80323 = cljs.core.async.close_BANG_(out);
var state_80329__$1 = (function (){var statearr_80341 = state_80329;
(statearr_80341[(10)] = inst_80322);

return statearr_80341;
})();
var statearr_80342_81069 = state_80329__$1;
(statearr_80342_81069[(2)] = inst_80323);

(statearr_80342_81069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80330 === (3))){
var inst_80327 = (state_80329[(2)]);
var state_80329__$1 = state_80329;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80329__$1,inst_80327);
} else {
if((state_val_80330 === (12))){
var inst_80285 = (state_80329[(8)]);
var inst_80305 = cljs.core.vec(inst_80285);
var state_80329__$1 = state_80329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80329__$1,(14),out,inst_80305);
} else {
if((state_val_80330 === (2))){
var state_80329__$1 = state_80329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80329__$1,(4),ch);
} else {
if((state_val_80330 === (11))){
var inst_80293 = (state_80329[(11)]);
var inst_80289 = (state_80329[(9)]);
var inst_80285 = (state_80329[(8)]);
var inst_80302 = inst_80285.push(inst_80289);
var tmp80343 = inst_80285;
var inst_80285__$1 = tmp80343;
var inst_80286 = inst_80293;
var state_80329__$1 = (function (){var statearr_80344 = state_80329;
(statearr_80344[(7)] = inst_80286);

(statearr_80344[(12)] = inst_80302);

(statearr_80344[(8)] = inst_80285__$1);

return statearr_80344;
})();
var statearr_80346_81071 = state_80329__$1;
(statearr_80346_81071[(2)] = null);

(statearr_80346_81071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80330 === (9))){
var inst_80286 = (state_80329[(7)]);
var inst_80298 = cljs.core.keyword_identical_QMARK_(inst_80286,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_80329__$1 = state_80329;
var statearr_80347_81072 = state_80329__$1;
(statearr_80347_81072[(2)] = inst_80298);

(statearr_80347_81072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80330 === (5))){
var inst_80286 = (state_80329[(7)]);
var inst_80293 = (state_80329[(11)]);
var inst_80295 = (state_80329[(13)]);
var inst_80289 = (state_80329[(9)]);
var inst_80293__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_80289) : f.call(null,inst_80289));
var inst_80295__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_80293__$1,inst_80286);
var state_80329__$1 = (function (){var statearr_80348 = state_80329;
(statearr_80348[(11)] = inst_80293__$1);

(statearr_80348[(13)] = inst_80295__$1);

return statearr_80348;
})();
if(inst_80295__$1){
var statearr_80349_81075 = state_80329__$1;
(statearr_80349_81075[(1)] = (8));

} else {
var statearr_80350_81076 = state_80329__$1;
(statearr_80350_81076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80330 === (14))){
var inst_80293 = (state_80329[(11)]);
var inst_80289 = (state_80329[(9)]);
var inst_80307 = (state_80329[(2)]);
var inst_80308 = [];
var inst_80309 = inst_80308.push(inst_80289);
var inst_80285 = inst_80308;
var inst_80286 = inst_80293;
var state_80329__$1 = (function (){var statearr_80351 = state_80329;
(statearr_80351[(14)] = inst_80309);

(statearr_80351[(7)] = inst_80286);

(statearr_80351[(8)] = inst_80285);

(statearr_80351[(15)] = inst_80307);

return statearr_80351;
})();
var statearr_80352_81078 = state_80329__$1;
(statearr_80352_81078[(2)] = null);

(statearr_80352_81078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80330 === (16))){
var state_80329__$1 = state_80329;
var statearr_80353_81079 = state_80329__$1;
(statearr_80353_81079[(2)] = null);

(statearr_80353_81079[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80330 === (10))){
var inst_80300 = (state_80329[(2)]);
var state_80329__$1 = state_80329;
if(cljs.core.truth_(inst_80300)){
var statearr_80354_81081 = state_80329__$1;
(statearr_80354_81081[(1)] = (11));

} else {
var statearr_80355_81082 = state_80329__$1;
(statearr_80355_81082[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80330 === (18))){
var inst_80319 = (state_80329[(2)]);
var state_80329__$1 = state_80329;
var statearr_80356_81083 = state_80329__$1;
(statearr_80356_81083[(2)] = inst_80319);

(statearr_80356_81083[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80330 === (8))){
var inst_80295 = (state_80329[(13)]);
var state_80329__$1 = state_80329;
var statearr_80357_81084 = state_80329__$1;
(statearr_80357_81084[(2)] = inst_80295);

(statearr_80357_81084[(1)] = (10));


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
var cljs$core$async$state_machine__77211__auto__ = null;
var cljs$core$async$state_machine__77211__auto____0 = (function (){
var statearr_80358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80358[(0)] = cljs$core$async$state_machine__77211__auto__);

(statearr_80358[(1)] = (1));

return statearr_80358;
});
var cljs$core$async$state_machine__77211__auto____1 = (function (state_80329){
while(true){
var ret_value__77212__auto__ = (function (){try{while(true){
var result__77213__auto__ = switch__77210__auto__(state_80329);
if(cljs.core.keyword_identical_QMARK_(result__77213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77213__auto__;
}
break;
}
}catch (e80359){var ex__77214__auto__ = e80359;
var statearr_80360_81090 = state_80329;
(statearr_80360_81090[(2)] = ex__77214__auto__);


if(cljs.core.seq((state_80329[(4)]))){
var statearr_80361_81091 = state_80329;
(statearr_80361_81091[(1)] = cljs.core.first((state_80329[(4)])));

} else {
throw ex__77214__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81092 = state_80329;
state_80329 = G__81092;
continue;
} else {
return ret_value__77212__auto__;
}
break;
}
});
cljs$core$async$state_machine__77211__auto__ = function(state_80329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__77211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__77211__auto____1.call(this,state_80329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__77211__auto____0;
cljs$core$async$state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__77211__auto____1;
return cljs$core$async$state_machine__77211__auto__;
})()
})();
var state__77564__auto__ = (function (){var statearr_80362 = f__77563__auto__();
(statearr_80362[(6)] = c__77562__auto___81058);

return statearr_80362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77564__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
