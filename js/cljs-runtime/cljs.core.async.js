goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27908 = arguments.length;
switch (G__27908) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27917 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27917 = (function (f,blockable,meta27918){
this.f = f;
this.blockable = blockable;
this.meta27918 = meta27918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27919,meta27918__$1){
var self__ = this;
var _27919__$1 = this;
return (new cljs.core.async.t_cljs$core$async27917(self__.f,self__.blockable,meta27918__$1));
});

cljs.core.async.t_cljs$core$async27917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27919){
var self__ = this;
var _27919__$1 = this;
return self__.meta27918;
});

cljs.core.async.t_cljs$core$async27917.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27917.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27917.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27917.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27918","meta27918",1347063115,null)], null);
});

cljs.core.async.t_cljs$core$async27917.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27917";

cljs.core.async.t_cljs$core$async27917.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async27917");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27917.
 */
cljs.core.async.__GT_t_cljs$core$async27917 = (function cljs$core$async$__GT_t_cljs$core$async27917(f__$1,blockable__$1,meta27918){
return (new cljs.core.async.t_cljs$core$async27917(f__$1,blockable__$1,meta27918));
});

}

return (new cljs.core.async.t_cljs$core$async27917(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
var G__27956 = arguments.length;
switch (G__27956) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27959 = arguments.length;
switch (G__27959) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var G__27977 = arguments.length;
switch (G__27977) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_29890 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29890) : fn1.call(null,val_29890));
} else {
cljs.core.async.impl.dispatch.run(((function (val_29890,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29890) : fn1.call(null,val_29890));
});})(val_29890,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

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
var G__28010 = arguments.length;
switch (G__28010) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___29904 = n;
var x_29905 = (0);
while(true){
if((x_29905 < n__4607__auto___29904)){
(a[x_29905] = (0));

var G__29906 = (x_29905 + (1));
x_29905 = G__29906;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__29909 = (i + (1));
i = G__29909;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28033 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28033 = (function (flag,meta28034){
this.flag = flag;
this.meta28034 = meta28034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28035,meta28034__$1){
var self__ = this;
var _28035__$1 = this;
return (new cljs.core.async.t_cljs$core$async28033(self__.flag,meta28034__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28033.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28035){
var self__ = this;
var _28035__$1 = this;
return self__.meta28034;
});})(flag))
;

cljs.core.async.t_cljs$core$async28033.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28033.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28033.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28034","meta28034",2001545336,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28033.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28033";

cljs.core.async.t_cljs$core$async28033.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async28033");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28033.
 */
cljs.core.async.__GT_t_cljs$core$async28033 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28033(flag__$1,meta28034){
return (new cljs.core.async.t_cljs$core$async28033(flag__$1,meta28034));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28033(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28041 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28041 = (function (flag,cb,meta28042){
this.flag = flag;
this.cb = cb;
this.meta28042 = meta28042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28043,meta28042__$1){
var self__ = this;
var _28043__$1 = this;
return (new cljs.core.async.t_cljs$core$async28041(self__.flag,self__.cb,meta28042__$1));
});

cljs.core.async.t_cljs$core$async28041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28043){
var self__ = this;
var _28043__$1 = this;
return self__.meta28042;
});

cljs.core.async.t_cljs$core$async28041.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28041.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async28041.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28041.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28042","meta28042",1619838771,null)], null);
});

cljs.core.async.t_cljs$core$async28041.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28041";

cljs.core.async.t_cljs$core$async28041.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async28041");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28041.
 */
cljs.core.async.__GT_t_cljs$core$async28041 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28041(flag__$1,cb__$1,meta28042){
return (new cljs.core.async.t_cljs$core$async28041(flag__$1,cb__$1,meta28042));
});

}

return (new cljs.core.async.t_cljs$core$async28041(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__28050_SHARP_){
var G__28052 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28050_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28052) : fret.call(null,G__28052));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28051_SHARP_){
var G__28053 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28051_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28053) : fret.call(null,G__28053));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29928 = (i + (1));
i = G__29928;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___29930 = arguments.length;
var i__4731__auto___29931 = (0);
while(true){
if((i__4731__auto___29931 < len__4730__auto___29930)){
args__4736__auto__.push((arguments[i__4731__auto___29931]));

var G__29934 = (i__4731__auto___29931 + (1));
i__4731__auto___29931 = G__29934;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28080){
var map__28081 = p__28080;
var map__28081__$1 = (((((!((map__28081 == null))))?(((((map__28081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28081):map__28081);
var opts = map__28081__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28066){
var G__28067 = cljs.core.first(seq28066);
var seq28066__$1 = cljs.core.next(seq28066);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28067,seq28066__$1);
});

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
var G__28112 = arguments.length;
switch (G__28112) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27793__auto___29946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27793__auto___29946){
return (function (){
var f__27794__auto__ = (function (){var switch__27626__auto__ = ((function (c__27793__auto___29946){
return (function (state_28143){
var state_val_28144 = (state_28143[(1)]);
if((state_val_28144 === (7))){
var inst_28139 = (state_28143[(2)]);
var state_28143__$1 = state_28143;
var statearr_28145_29947 = state_28143__$1;
(statearr_28145_29947[(2)] = inst_28139);

(statearr_28145_29947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (1))){
var state_28143__$1 = state_28143;
var statearr_28146_29949 = state_28143__$1;
(statearr_28146_29949[(2)] = null);

(statearr_28146_29949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (4))){
var inst_28122 = (state_28143[(7)]);
var inst_28122__$1 = (state_28143[(2)]);
var inst_28123 = (inst_28122__$1 == null);
var state_28143__$1 = (function (){var statearr_28147 = state_28143;
(statearr_28147[(7)] = inst_28122__$1);

return statearr_28147;
})();
if(cljs.core.truth_(inst_28123)){
var statearr_28148_29953 = state_28143__$1;
(statearr_28148_29953[(1)] = (5));

} else {
var statearr_28150_29954 = state_28143__$1;
(statearr_28150_29954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (13))){
var state_28143__$1 = state_28143;
var statearr_28151_29955 = state_28143__$1;
(statearr_28151_29955[(2)] = null);

(statearr_28151_29955[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (6))){
var inst_28122 = (state_28143[(7)]);
var state_28143__$1 = state_28143;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28143__$1,(11),to,inst_28122);
} else {
if((state_val_28144 === (3))){
var inst_28141 = (state_28143[(2)]);
var state_28143__$1 = state_28143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28143__$1,inst_28141);
} else {
if((state_val_28144 === (12))){
var state_28143__$1 = state_28143;
var statearr_28152_29956 = state_28143__$1;
(statearr_28152_29956[(2)] = null);

(statearr_28152_29956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (2))){
var state_28143__$1 = state_28143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28143__$1,(4),from);
} else {
if((state_val_28144 === (11))){
var inst_28132 = (state_28143[(2)]);
var state_28143__$1 = state_28143;
if(cljs.core.truth_(inst_28132)){
var statearr_28153_29959 = state_28143__$1;
(statearr_28153_29959[(1)] = (12));

} else {
var statearr_28154_29960 = state_28143__$1;
(statearr_28154_29960[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (9))){
var state_28143__$1 = state_28143;
var statearr_28155_29962 = state_28143__$1;
(statearr_28155_29962[(2)] = null);

(statearr_28155_29962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (5))){
var state_28143__$1 = state_28143;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28156_29963 = state_28143__$1;
(statearr_28156_29963[(1)] = (8));

} else {
var statearr_28157_29964 = state_28143__$1;
(statearr_28157_29964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (14))){
var inst_28137 = (state_28143[(2)]);
var state_28143__$1 = state_28143;
var statearr_28158_29966 = state_28143__$1;
(statearr_28158_29966[(2)] = inst_28137);

(statearr_28158_29966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (10))){
var inst_28129 = (state_28143[(2)]);
var state_28143__$1 = state_28143;
var statearr_28159_29976 = state_28143__$1;
(statearr_28159_29976[(2)] = inst_28129);

(statearr_28159_29976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28144 === (8))){
var inst_28126 = cljs.core.async.close_BANG_(to);
var state_28143__$1 = state_28143;
var statearr_28160_29978 = state_28143__$1;
(statearr_28160_29978[(2)] = inst_28126);

(statearr_28160_29978[(1)] = (10));


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
});})(c__27793__auto___29946))
;
return ((function (switch__27626__auto__,c__27793__auto___29946){
return (function() {
var cljs$core$async$state_machine__27627__auto__ = null;
var cljs$core$async$state_machine__27627__auto____0 = (function (){
var statearr_28161 = [null,null,null,null,null,null,null,null];
(statearr_28161[(0)] = cljs$core$async$state_machine__27627__auto__);

(statearr_28161[(1)] = (1));

return statearr_28161;
});
var cljs$core$async$state_machine__27627__auto____1 = (function (state_28143){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__(state_28143);
if(cljs.core.keyword_identical_QMARK_(result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e28162){if((e28162 instanceof Object)){
var ex__27630__auto__ = e28162;
var statearr_28163_29983 = state_28143;
(statearr_28163_29983[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28162;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29984 = state_28143;
state_28143 = G__29984;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$state_machine__27627__auto__ = function(state_28143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27627__auto____1.call(this,state_28143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27627__auto____0;
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27627__auto____1;
return cljs$core$async$state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27793__auto___29946))
})();
var state__27795__auto__ = (function (){var statearr_28164 = (f__27794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27794__auto__.cljs$core$IFn$_invoke$arity$0() : f__27794__auto__.call(null));
(statearr_28164[(6)] = c__27793__auto___29946);

return statearr_28164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27795__auto__);
});})(c__27793__auto___29946))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__28165){
var vec__28166 = p__28165;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28166,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28166,(1),null);
var job = vec__28166;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__27793__auto___29985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27793__auto___29985,res,vec__28166,v,p,job,jobs,results){
return (function (){
var f__27794__auto__ = (function (){var switch__27626__auto__ = ((function (c__27793__auto___29985,res,vec__28166,v,p,job,jobs,results){
return (function (state_28173){
var state_val_28174 = (state_28173[(1)]);
if((state_val_28174 === (1))){
var state_28173__$1 = state_28173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28173__$1,(2),res,v);
} else {
if((state_val_28174 === (2))){
var inst_28170 = (state_28173[(2)]);
var inst_28171 = cljs.core.async.close_BANG_(res);
var state_28173__$1 = (function (){var statearr_28175 = state_28173;
(statearr_28175[(7)] = inst_28170);

return statearr_28175;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28173__$1,inst_28171);
} else {
return null;
}
}
});})(c__27793__auto___29985,res,vec__28166,v,p,job,jobs,results))
;
return ((function (switch__27626__auto__,c__27793__auto___29985,res,vec__28166,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0 = (function (){
var statearr_28182 = [null,null,null,null,null,null,null,null];
(statearr_28182[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__);

(statearr_28182[(1)] = (1));

return statearr_28182;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1 = (function (state_28173){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__(state_28173);
if(cljs.core.keyword_identical_QMARK_(result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e28183){if((e28183 instanceof Object)){
var ex__27630__auto__ = e28183;
var statearr_28184_29986 = state_28173;
(statearr_28184_29986[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28183;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29987 = state_28173;
state_28173 = G__29987;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__ = function(state_28173){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1.call(this,state_28173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27793__auto___29985,res,vec__28166,v,p,job,jobs,results))
})();
var state__27795__auto__ = (function (){var statearr_28185 = (f__27794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27794__auto__.cljs$core$IFn$_invoke$arity$0() : f__27794__auto__.call(null));
(statearr_28185[(6)] = c__27793__auto___29985);

return statearr_28185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27795__auto__);
});})(c__27793__auto___29985,res,vec__28166,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28186){
var vec__28187 = p__28186;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28187,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28187,(1),null);
var job = vec__28187;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___29990 = n;
var __29991 = (0);
while(true){
if((__29991 < n__4607__auto___29990)){
var G__28190_29992 = type;
var G__28190_29993__$1 = (((G__28190_29992 instanceof cljs.core.Keyword))?G__28190_29992.fqn:null);
switch (G__28190_29993__$1) {
case "compute":
var c__27793__auto___29995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29991,c__27793__auto___29995,G__28190_29992,G__28190_29993__$1,n__4607__auto___29990,jobs,results,process,async){
return (function (){
var f__27794__auto__ = (function (){var switch__27626__auto__ = ((function (__29991,c__27793__auto___29995,G__28190_29992,G__28190_29993__$1,n__4607__auto___29990,jobs,results,process,async){
return (function (state_28207){
var state_val_28208 = (state_28207[(1)]);
if((state_val_28208 === (1))){
var state_28207__$1 = state_28207;
var statearr_28213_29996 = state_28207__$1;
(statearr_28213_29996[(2)] = null);

(statearr_28213_29996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (2))){
var state_28207__$1 = state_28207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28207__$1,(4),jobs);
} else {
if((state_val_28208 === (3))){
var inst_28205 = (state_28207[(2)]);
var state_28207__$1 = state_28207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28207__$1,inst_28205);
} else {
if((state_val_28208 === (4))){
var inst_28197 = (state_28207[(2)]);
var inst_28198 = process(inst_28197);
var state_28207__$1 = state_28207;
if(cljs.core.truth_(inst_28198)){
var statearr_28214_29997 = state_28207__$1;
(statearr_28214_29997[(1)] = (5));

} else {
var statearr_28215_29998 = state_28207__$1;
(statearr_28215_29998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (5))){
var state_28207__$1 = state_28207;
var statearr_28216_29999 = state_28207__$1;
(statearr_28216_29999[(2)] = null);

(statearr_28216_29999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (6))){
var state_28207__$1 = state_28207;
var statearr_28219_30000 = state_28207__$1;
(statearr_28219_30000[(2)] = null);

(statearr_28219_30000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (7))){
var inst_28203 = (state_28207[(2)]);
var state_28207__$1 = state_28207;
var statearr_28223_30002 = state_28207__$1;
(statearr_28223_30002[(2)] = inst_28203);

(statearr_28223_30002[(1)] = (3));


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
});})(__29991,c__27793__auto___29995,G__28190_29992,G__28190_29993__$1,n__4607__auto___29990,jobs,results,process,async))
;
return ((function (__29991,switch__27626__auto__,c__27793__auto___29995,G__28190_29992,G__28190_29993__$1,n__4607__auto___29990,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0 = (function (){
var statearr_28224 = [null,null,null,null,null,null,null];
(statearr_28224[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__);

(statearr_28224[(1)] = (1));

return statearr_28224;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1 = (function (state_28207){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__(state_28207);
if(cljs.core.keyword_identical_QMARK_(result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e28228){if((e28228 instanceof Object)){
var ex__27630__auto__ = e28228;
var statearr_28229_30006 = state_28207;
(statearr_28229_30006[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28228;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30008 = state_28207;
state_28207 = G__30008;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__ = function(state_28207){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1.call(this,state_28207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__;
})()
;})(__29991,switch__27626__auto__,c__27793__auto___29995,G__28190_29992,G__28190_29993__$1,n__4607__auto___29990,jobs,results,process,async))
})();
var state__27795__auto__ = (function (){var statearr_28230 = (f__27794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27794__auto__.cljs$core$IFn$_invoke$arity$0() : f__27794__auto__.call(null));
(statearr_28230[(6)] = c__27793__auto___29995);

return statearr_28230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27795__auto__);
});})(__29991,c__27793__auto___29995,G__28190_29992,G__28190_29993__$1,n__4607__auto___29990,jobs,results,process,async))
);


break;
case "async":
var c__27793__auto___30009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29991,c__27793__auto___30009,G__28190_29992,G__28190_29993__$1,n__4607__auto___29990,jobs,results,process,async){
return (function (){
var f__27794__auto__ = (function (){var switch__27626__auto__ = ((function (__29991,c__27793__auto___30009,G__28190_29992,G__28190_29993__$1,n__4607__auto___29990,jobs,results,process,async){
return (function (state_28251){
var state_val_28252 = (state_28251[(1)]);
if((state_val_28252 === (1))){
var state_28251__$1 = state_28251;
var statearr_28253_30011 = state_28251__$1;
(statearr_28253_30011[(2)] = null);

(statearr_28253_30011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28252 === (2))){
var state_28251__$1 = state_28251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28251__$1,(4),jobs);
} else {
if((state_val_28252 === (3))){
var inst_28249 = (state_28251[(2)]);
var state_28251__$1 = state_28251;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28251__$1,inst_28249);
} else {
if((state_val_28252 === (4))){
var inst_28241 = (state_28251[(2)]);
var inst_28242 = async(inst_28241);
var state_28251__$1 = state_28251;
if(cljs.core.truth_(inst_28242)){
var statearr_28256_30013 = state_28251__$1;
(statearr_28256_30013[(1)] = (5));

} else {
var statearr_28257_30014 = state_28251__$1;
(statearr_28257_30014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28252 === (5))){
var state_28251__$1 = state_28251;
var statearr_28258_30015 = state_28251__$1;
(statearr_28258_30015[(2)] = null);

(statearr_28258_30015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28252 === (6))){
var state_28251__$1 = state_28251;
var statearr_28259_30017 = state_28251__$1;
(statearr_28259_30017[(2)] = null);

(statearr_28259_30017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28252 === (7))){
var inst_28247 = (state_28251[(2)]);
var state_28251__$1 = state_28251;
var statearr_28260_30018 = state_28251__$1;
(statearr_28260_30018[(2)] = inst_28247);

(statearr_28260_30018[(1)] = (3));


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
});})(__29991,c__27793__auto___30009,G__28190_29992,G__28190_29993__$1,n__4607__auto___29990,jobs,results,process,async))
;
return ((function (__29991,switch__27626__auto__,c__27793__auto___30009,G__28190_29992,G__28190_29993__$1,n__4607__auto___29990,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0 = (function (){
var statearr_28261 = [null,null,null,null,null,null,null];
(statearr_28261[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__);

(statearr_28261[(1)] = (1));

return statearr_28261;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1 = (function (state_28251){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__(state_28251);
if(cljs.core.keyword_identical_QMARK_(result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e28262){if((e28262 instanceof Object)){
var ex__27630__auto__ = e28262;
var statearr_28263_30025 = state_28251;
(statearr_28263_30025[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28262;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30026 = state_28251;
state_28251 = G__30026;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__ = function(state_28251){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1.call(this,state_28251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__;
})()
;})(__29991,switch__27626__auto__,c__27793__auto___30009,G__28190_29992,G__28190_29993__$1,n__4607__auto___29990,jobs,results,process,async))
})();
var state__27795__auto__ = (function (){var statearr_28264 = (f__27794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27794__auto__.cljs$core$IFn$_invoke$arity$0() : f__27794__auto__.call(null));
(statearr_28264[(6)] = c__27793__auto___30009);

return statearr_28264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27795__auto__);
});})(__29991,c__27793__auto___30009,G__28190_29992,G__28190_29993__$1,n__4607__auto___29990,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28190_29993__$1)].join('')));

}

var G__30032 = (__29991 + (1));
__29991 = G__30032;
continue;
} else {
}
break;
}

var c__27793__auto___30033 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27793__auto___30033,jobs,results,process,async){
return (function (){
var f__27794__auto__ = (function (){var switch__27626__auto__ = ((function (c__27793__auto___30033,jobs,results,process,async){
return (function (state_28287){
var state_val_28288 = (state_28287[(1)]);
if((state_val_28288 === (7))){
var inst_28283 = (state_28287[(2)]);
var state_28287__$1 = state_28287;
var statearr_28289_30034 = state_28287__$1;
(statearr_28289_30034[(2)] = inst_28283);

(statearr_28289_30034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28288 === (1))){
var state_28287__$1 = state_28287;
var statearr_28290_30035 = state_28287__$1;
(statearr_28290_30035[(2)] = null);

(statearr_28290_30035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28288 === (4))){
var inst_28267 = (state_28287[(7)]);
var inst_28267__$1 = (state_28287[(2)]);
var inst_28268 = (inst_28267__$1 == null);
var state_28287__$1 = (function (){var statearr_28291 = state_28287;
(statearr_28291[(7)] = inst_28267__$1);

return statearr_28291;
})();
if(cljs.core.truth_(inst_28268)){
var statearr_28292_30038 = state_28287__$1;
(statearr_28292_30038[(1)] = (5));

} else {
var statearr_28293_30039 = state_28287__$1;
(statearr_28293_30039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28288 === (6))){
var inst_28267 = (state_28287[(7)]);
var inst_28272 = (state_28287[(8)]);
var inst_28272__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_28274 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28275 = [inst_28267,inst_28272__$1];
var inst_28276 = (new cljs.core.PersistentVector(null,2,(5),inst_28274,inst_28275,null));
var state_28287__$1 = (function (){var statearr_28294 = state_28287;
(statearr_28294[(8)] = inst_28272__$1);

return statearr_28294;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28287__$1,(8),jobs,inst_28276);
} else {
if((state_val_28288 === (3))){
var inst_28285 = (state_28287[(2)]);
var state_28287__$1 = state_28287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28287__$1,inst_28285);
} else {
if((state_val_28288 === (2))){
var state_28287__$1 = state_28287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28287__$1,(4),from);
} else {
if((state_val_28288 === (9))){
var inst_28280 = (state_28287[(2)]);
var state_28287__$1 = (function (){var statearr_28295 = state_28287;
(statearr_28295[(9)] = inst_28280);

return statearr_28295;
})();
var statearr_28296_30040 = state_28287__$1;
(statearr_28296_30040[(2)] = null);

(statearr_28296_30040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28288 === (5))){
var inst_28270 = cljs.core.async.close_BANG_(jobs);
var state_28287__$1 = state_28287;
var statearr_28302_30041 = state_28287__$1;
(statearr_28302_30041[(2)] = inst_28270);

(statearr_28302_30041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28288 === (8))){
var inst_28272 = (state_28287[(8)]);
var inst_28278 = (state_28287[(2)]);
var state_28287__$1 = (function (){var statearr_28303 = state_28287;
(statearr_28303[(10)] = inst_28278);

return statearr_28303;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28287__$1,(9),results,inst_28272);
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
});})(c__27793__auto___30033,jobs,results,process,async))
;
return ((function (switch__27626__auto__,c__27793__auto___30033,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0 = (function (){
var statearr_28308 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28308[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__);

(statearr_28308[(1)] = (1));

return statearr_28308;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1 = (function (state_28287){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__(state_28287);
if(cljs.core.keyword_identical_QMARK_(result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e28333){if((e28333 instanceof Object)){
var ex__27630__auto__ = e28333;
var statearr_28334_30044 = state_28287;
(statearr_28334_30044[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28333;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30045 = state_28287;
state_28287 = G__30045;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__ = function(state_28287){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1.call(this,state_28287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27793__auto___30033,jobs,results,process,async))
})();
var state__27795__auto__ = (function (){var statearr_28335 = (f__27794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27794__auto__.cljs$core$IFn$_invoke$arity$0() : f__27794__auto__.call(null));
(statearr_28335[(6)] = c__27793__auto___30033);

return statearr_28335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27795__auto__);
});})(c__27793__auto___30033,jobs,results,process,async))
);


var c__27793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27793__auto__,jobs,results,process,async){
return (function (){
var f__27794__auto__ = (function (){var switch__27626__auto__ = ((function (c__27793__auto__,jobs,results,process,async){
return (function (state_28379){
var state_val_28380 = (state_28379[(1)]);
if((state_val_28380 === (7))){
var inst_28374 = (state_28379[(2)]);
var state_28379__$1 = state_28379;
var statearr_28381_30048 = state_28379__$1;
(statearr_28381_30048[(2)] = inst_28374);

(statearr_28381_30048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (20))){
var state_28379__$1 = state_28379;
var statearr_28382_30049 = state_28379__$1;
(statearr_28382_30049[(2)] = null);

(statearr_28382_30049[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (1))){
var state_28379__$1 = state_28379;
var statearr_28383_30052 = state_28379__$1;
(statearr_28383_30052[(2)] = null);

(statearr_28383_30052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (4))){
var inst_28338 = (state_28379[(7)]);
var inst_28338__$1 = (state_28379[(2)]);
var inst_28339 = (inst_28338__$1 == null);
var state_28379__$1 = (function (){var statearr_28384 = state_28379;
(statearr_28384[(7)] = inst_28338__$1);

return statearr_28384;
})();
if(cljs.core.truth_(inst_28339)){
var statearr_28385_30055 = state_28379__$1;
(statearr_28385_30055[(1)] = (5));

} else {
var statearr_28386_30056 = state_28379__$1;
(statearr_28386_30056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (15))){
var inst_28356 = (state_28379[(8)]);
var state_28379__$1 = state_28379;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28379__$1,(18),to,inst_28356);
} else {
if((state_val_28380 === (21))){
var inst_28369 = (state_28379[(2)]);
var state_28379__$1 = state_28379;
var statearr_28387_30059 = state_28379__$1;
(statearr_28387_30059[(2)] = inst_28369);

(statearr_28387_30059[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (13))){
var inst_28371 = (state_28379[(2)]);
var state_28379__$1 = (function (){var statearr_28388 = state_28379;
(statearr_28388[(9)] = inst_28371);

return statearr_28388;
})();
var statearr_28389_30060 = state_28379__$1;
(statearr_28389_30060[(2)] = null);

(statearr_28389_30060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (6))){
var inst_28338 = (state_28379[(7)]);
var state_28379__$1 = state_28379;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28379__$1,(11),inst_28338);
} else {
if((state_val_28380 === (17))){
var inst_28364 = (state_28379[(2)]);
var state_28379__$1 = state_28379;
if(cljs.core.truth_(inst_28364)){
var statearr_28390_30063 = state_28379__$1;
(statearr_28390_30063[(1)] = (19));

} else {
var statearr_28391_30064 = state_28379__$1;
(statearr_28391_30064[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (3))){
var inst_28376 = (state_28379[(2)]);
var state_28379__$1 = state_28379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28379__$1,inst_28376);
} else {
if((state_val_28380 === (12))){
var inst_28353 = (state_28379[(10)]);
var state_28379__$1 = state_28379;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28379__$1,(14),inst_28353);
} else {
if((state_val_28380 === (2))){
var state_28379__$1 = state_28379;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28379__$1,(4),results);
} else {
if((state_val_28380 === (19))){
var state_28379__$1 = state_28379;
var statearr_28392_30067 = state_28379__$1;
(statearr_28392_30067[(2)] = null);

(statearr_28392_30067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (11))){
var inst_28353 = (state_28379[(2)]);
var state_28379__$1 = (function (){var statearr_28393 = state_28379;
(statearr_28393[(10)] = inst_28353);

return statearr_28393;
})();
var statearr_28394_30070 = state_28379__$1;
(statearr_28394_30070[(2)] = null);

(statearr_28394_30070[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (9))){
var state_28379__$1 = state_28379;
var statearr_28395_30071 = state_28379__$1;
(statearr_28395_30071[(2)] = null);

(statearr_28395_30071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (5))){
var state_28379__$1 = state_28379;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28396_30072 = state_28379__$1;
(statearr_28396_30072[(1)] = (8));

} else {
var statearr_28397_30073 = state_28379__$1;
(statearr_28397_30073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (14))){
var inst_28356 = (state_28379[(8)]);
var inst_28358 = (state_28379[(11)]);
var inst_28356__$1 = (state_28379[(2)]);
var inst_28357 = (inst_28356__$1 == null);
var inst_28358__$1 = cljs.core.not(inst_28357);
var state_28379__$1 = (function (){var statearr_28401 = state_28379;
(statearr_28401[(8)] = inst_28356__$1);

(statearr_28401[(11)] = inst_28358__$1);

return statearr_28401;
})();
if(inst_28358__$1){
var statearr_28402_30075 = state_28379__$1;
(statearr_28402_30075[(1)] = (15));

} else {
var statearr_28403_30076 = state_28379__$1;
(statearr_28403_30076[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (16))){
var inst_28358 = (state_28379[(11)]);
var state_28379__$1 = state_28379;
var statearr_28404_30077 = state_28379__$1;
(statearr_28404_30077[(2)] = inst_28358);

(statearr_28404_30077[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (10))){
var inst_28345 = (state_28379[(2)]);
var state_28379__$1 = state_28379;
var statearr_28407_30078 = state_28379__$1;
(statearr_28407_30078[(2)] = inst_28345);

(statearr_28407_30078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (18))){
var inst_28361 = (state_28379[(2)]);
var state_28379__$1 = state_28379;
var statearr_28408_30079 = state_28379__$1;
(statearr_28408_30079[(2)] = inst_28361);

(statearr_28408_30079[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (8))){
var inst_28342 = cljs.core.async.close_BANG_(to);
var state_28379__$1 = state_28379;
var statearr_28409_30080 = state_28379__$1;
(statearr_28409_30080[(2)] = inst_28342);

(statearr_28409_30080[(1)] = (10));


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
});})(c__27793__auto__,jobs,results,process,async))
;
return ((function (switch__27626__auto__,c__27793__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0 = (function (){
var statearr_28413 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28413[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__);

(statearr_28413[(1)] = (1));

return statearr_28413;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1 = (function (state_28379){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__(state_28379);
if(cljs.core.keyword_identical_QMARK_(result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e28414){if((e28414 instanceof Object)){
var ex__27630__auto__ = e28414;
var statearr_28415_30085 = state_28379;
(statearr_28415_30085[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28414;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30086 = state_28379;
state_28379 = G__30086;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__ = function(state_28379){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1.call(this,state_28379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27793__auto__,jobs,results,process,async))
})();
var state__27795__auto__ = (function (){var statearr_28418 = (f__27794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27794__auto__.cljs$core$IFn$_invoke$arity$0() : f__27794__auto__.call(null));
(statearr_28418[(6)] = c__27793__auto__);

return statearr_28418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27795__auto__);
});})(c__27793__auto__,jobs,results,process,async))
);

return c__27793__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__28423 = arguments.length;
switch (G__28423) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__28429 = arguments.length;
switch (G__28429) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__28435 = arguments.length;
switch (G__28435) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__27793__auto___30099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27793__auto___30099,tc,fc){
return (function (){
var f__27794__auto__ = (function (){var switch__27626__auto__ = ((function (c__27793__auto___30099,tc,fc){
return (function (state_28461){
var state_val_28462 = (state_28461[(1)]);
if((state_val_28462 === (7))){
var inst_28457 = (state_28461[(2)]);
var state_28461__$1 = state_28461;
var statearr_28463_30103 = state_28461__$1;
(statearr_28463_30103[(2)] = inst_28457);

(statearr_28463_30103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (1))){
var state_28461__$1 = state_28461;
var statearr_28464_30104 = state_28461__$1;
(statearr_28464_30104[(2)] = null);

(statearr_28464_30104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (4))){
var inst_28438 = (state_28461[(7)]);
var inst_28438__$1 = (state_28461[(2)]);
var inst_28439 = (inst_28438__$1 == null);
var state_28461__$1 = (function (){var statearr_28465 = state_28461;
(statearr_28465[(7)] = inst_28438__$1);

return statearr_28465;
})();
if(cljs.core.truth_(inst_28439)){
var statearr_28466_30106 = state_28461__$1;
(statearr_28466_30106[(1)] = (5));

} else {
var statearr_28467_30107 = state_28461__$1;
(statearr_28467_30107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (13))){
var state_28461__$1 = state_28461;
var statearr_28468_30109 = state_28461__$1;
(statearr_28468_30109[(2)] = null);

(statearr_28468_30109[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (6))){
var inst_28438 = (state_28461[(7)]);
var inst_28444 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28438) : p.call(null,inst_28438));
var state_28461__$1 = state_28461;
if(cljs.core.truth_(inst_28444)){
var statearr_28469_30110 = state_28461__$1;
(statearr_28469_30110[(1)] = (9));

} else {
var statearr_28470_30111 = state_28461__$1;
(statearr_28470_30111[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (3))){
var inst_28459 = (state_28461[(2)]);
var state_28461__$1 = state_28461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28461__$1,inst_28459);
} else {
if((state_val_28462 === (12))){
var state_28461__$1 = state_28461;
var statearr_28471_30112 = state_28461__$1;
(statearr_28471_30112[(2)] = null);

(statearr_28471_30112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (2))){
var state_28461__$1 = state_28461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28461__$1,(4),ch);
} else {
if((state_val_28462 === (11))){
var inst_28438 = (state_28461[(7)]);
var inst_28448 = (state_28461[(2)]);
var state_28461__$1 = state_28461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28461__$1,(8),inst_28448,inst_28438);
} else {
if((state_val_28462 === (9))){
var state_28461__$1 = state_28461;
var statearr_28472_30113 = state_28461__$1;
(statearr_28472_30113[(2)] = tc);

(statearr_28472_30113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (5))){
var inst_28441 = cljs.core.async.close_BANG_(tc);
var inst_28442 = cljs.core.async.close_BANG_(fc);
var state_28461__$1 = (function (){var statearr_28473 = state_28461;
(statearr_28473[(8)] = inst_28441);

return statearr_28473;
})();
var statearr_28474_30117 = state_28461__$1;
(statearr_28474_30117[(2)] = inst_28442);

(statearr_28474_30117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (14))){
var inst_28455 = (state_28461[(2)]);
var state_28461__$1 = state_28461;
var statearr_28479_30118 = state_28461__$1;
(statearr_28479_30118[(2)] = inst_28455);

(statearr_28479_30118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (10))){
var state_28461__$1 = state_28461;
var statearr_28485_30119 = state_28461__$1;
(statearr_28485_30119[(2)] = fc);

(statearr_28485_30119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (8))){
var inst_28450 = (state_28461[(2)]);
var state_28461__$1 = state_28461;
if(cljs.core.truth_(inst_28450)){
var statearr_28486_30123 = state_28461__$1;
(statearr_28486_30123[(1)] = (12));

} else {
var statearr_28487_30124 = state_28461__$1;
(statearr_28487_30124[(1)] = (13));

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
});})(c__27793__auto___30099,tc,fc))
;
return ((function (switch__27626__auto__,c__27793__auto___30099,tc,fc){
return (function() {
var cljs$core$async$state_machine__27627__auto__ = null;
var cljs$core$async$state_machine__27627__auto____0 = (function (){
var statearr_28488 = [null,null,null,null,null,null,null,null,null];
(statearr_28488[(0)] = cljs$core$async$state_machine__27627__auto__);

(statearr_28488[(1)] = (1));

return statearr_28488;
});
var cljs$core$async$state_machine__27627__auto____1 = (function (state_28461){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__(state_28461);
if(cljs.core.keyword_identical_QMARK_(result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e28493){if((e28493 instanceof Object)){
var ex__27630__auto__ = e28493;
var statearr_28494_30132 = state_28461;
(statearr_28494_30132[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28493;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30133 = state_28461;
state_28461 = G__30133;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$state_machine__27627__auto__ = function(state_28461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27627__auto____1.call(this,state_28461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27627__auto____0;
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27627__auto____1;
return cljs$core$async$state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27793__auto___30099,tc,fc))
})();
var state__27795__auto__ = (function (){var statearr_28495 = (f__27794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27794__auto__.cljs$core$IFn$_invoke$arity$0() : f__27794__auto__.call(null));
(statearr_28495[(6)] = c__27793__auto___30099);

return statearr_28495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27795__auto__);
});})(c__27793__auto___30099,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27793__auto__){
return (function (){
var f__27794__auto__ = (function (){var switch__27626__auto__ = ((function (c__27793__auto__){
return (function (state_28516){
var state_val_28517 = (state_28516[(1)]);
if((state_val_28517 === (7))){
var inst_28512 = (state_28516[(2)]);
var state_28516__$1 = state_28516;
var statearr_28518_30137 = state_28516__$1;
(statearr_28518_30137[(2)] = inst_28512);

(statearr_28518_30137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28517 === (1))){
var inst_28496 = init;
var state_28516__$1 = (function (){var statearr_28519 = state_28516;
(statearr_28519[(7)] = inst_28496);

return statearr_28519;
})();
var statearr_28520_30141 = state_28516__$1;
(statearr_28520_30141[(2)] = null);

(statearr_28520_30141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28517 === (4))){
var inst_28499 = (state_28516[(8)]);
var inst_28499__$1 = (state_28516[(2)]);
var inst_28500 = (inst_28499__$1 == null);
var state_28516__$1 = (function (){var statearr_28521 = state_28516;
(statearr_28521[(8)] = inst_28499__$1);

return statearr_28521;
})();
if(cljs.core.truth_(inst_28500)){
var statearr_28522_30145 = state_28516__$1;
(statearr_28522_30145[(1)] = (5));

} else {
var statearr_28523_30146 = state_28516__$1;
(statearr_28523_30146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28517 === (6))){
var inst_28499 = (state_28516[(8)]);
var inst_28503 = (state_28516[(9)]);
var inst_28496 = (state_28516[(7)]);
var inst_28503__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_28496,inst_28499) : f.call(null,inst_28496,inst_28499));
var inst_28504 = cljs.core.reduced_QMARK_(inst_28503__$1);
var state_28516__$1 = (function (){var statearr_28524 = state_28516;
(statearr_28524[(9)] = inst_28503__$1);

return statearr_28524;
})();
if(inst_28504){
var statearr_28525_30154 = state_28516__$1;
(statearr_28525_30154[(1)] = (8));

} else {
var statearr_28526_30158 = state_28516__$1;
(statearr_28526_30158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28517 === (3))){
var inst_28514 = (state_28516[(2)]);
var state_28516__$1 = state_28516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28516__$1,inst_28514);
} else {
if((state_val_28517 === (2))){
var state_28516__$1 = state_28516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28516__$1,(4),ch);
} else {
if((state_val_28517 === (9))){
var inst_28503 = (state_28516[(9)]);
var inst_28496 = inst_28503;
var state_28516__$1 = (function (){var statearr_28527 = state_28516;
(statearr_28527[(7)] = inst_28496);

return statearr_28527;
})();
var statearr_28528_30162 = state_28516__$1;
(statearr_28528_30162[(2)] = null);

(statearr_28528_30162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28517 === (5))){
var inst_28496 = (state_28516[(7)]);
var state_28516__$1 = state_28516;
var statearr_28529_30166 = state_28516__$1;
(statearr_28529_30166[(2)] = inst_28496);

(statearr_28529_30166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28517 === (10))){
var inst_28510 = (state_28516[(2)]);
var state_28516__$1 = state_28516;
var statearr_28530_30170 = state_28516__$1;
(statearr_28530_30170[(2)] = inst_28510);

(statearr_28530_30170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28517 === (8))){
var inst_28503 = (state_28516[(9)]);
var inst_28506 = cljs.core.deref(inst_28503);
var state_28516__$1 = state_28516;
var statearr_28531_30174 = state_28516__$1;
(statearr_28531_30174[(2)] = inst_28506);

(statearr_28531_30174[(1)] = (10));


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
});})(c__27793__auto__))
;
return ((function (switch__27626__auto__,c__27793__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27627__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27627__auto____0 = (function (){
var statearr_28532 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28532[(0)] = cljs$core$async$reduce_$_state_machine__27627__auto__);

(statearr_28532[(1)] = (1));

return statearr_28532;
});
var cljs$core$async$reduce_$_state_machine__27627__auto____1 = (function (state_28516){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__(state_28516);
if(cljs.core.keyword_identical_QMARK_(result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e28533){if((e28533 instanceof Object)){
var ex__27630__auto__ = e28533;
var statearr_28534_30181 = state_28516;
(statearr_28534_30181[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28533;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30182 = state_28516;
state_28516 = G__30182;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27627__auto__ = function(state_28516){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27627__auto____1.call(this,state_28516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27627__auto____0;
cljs$core$async$reduce_$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27627__auto____1;
return cljs$core$async$reduce_$_state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27793__auto__))
})();
var state__27795__auto__ = (function (){var statearr_28535 = (f__27794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27794__auto__.cljs$core$IFn$_invoke$arity$0() : f__27794__auto__.call(null));
(statearr_28535[(6)] = c__27793__auto__);

return statearr_28535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27795__auto__);
});})(c__27793__auto__))
);

return c__27793__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__27793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27793__auto__,f__$1){
return (function (){
var f__27794__auto__ = (function (){var switch__27626__auto__ = ((function (c__27793__auto__,f__$1){
return (function (state_28541){
var state_val_28542 = (state_28541[(1)]);
if((state_val_28542 === (1))){
var inst_28536 = cljs.core.async.reduce(f__$1,init,ch);
var state_28541__$1 = state_28541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28541__$1,(2),inst_28536);
} else {
if((state_val_28542 === (2))){
var inst_28538 = (state_28541[(2)]);
var inst_28539 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_28538) : f__$1.call(null,inst_28538));
var state_28541__$1 = state_28541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28541__$1,inst_28539);
} else {
return null;
}
}
});})(c__27793__auto__,f__$1))
;
return ((function (switch__27626__auto__,c__27793__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27627__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27627__auto____0 = (function (){
var statearr_28543 = [null,null,null,null,null,null,null];
(statearr_28543[(0)] = cljs$core$async$transduce_$_state_machine__27627__auto__);

(statearr_28543[(1)] = (1));

return statearr_28543;
});
var cljs$core$async$transduce_$_state_machine__27627__auto____1 = (function (state_28541){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__(state_28541);
if(cljs.core.keyword_identical_QMARK_(result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e28544){if((e28544 instanceof Object)){
var ex__27630__auto__ = e28544;
var statearr_28545_30184 = state_28541;
(statearr_28545_30184[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28544;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30185 = state_28541;
state_28541 = G__30185;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27627__auto__ = function(state_28541){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27627__auto____1.call(this,state_28541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27627__auto____0;
cljs$core$async$transduce_$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27627__auto____1;
return cljs$core$async$transduce_$_state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27793__auto__,f__$1))
})();
var state__27795__auto__ = (function (){var statearr_28549 = (f__27794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27794__auto__.cljs$core$IFn$_invoke$arity$0() : f__27794__auto__.call(null));
(statearr_28549[(6)] = c__27793__auto__);

return statearr_28549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27795__auto__);
});})(c__27793__auto__,f__$1))
);

return c__27793__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28555 = arguments.length;
switch (G__28555) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27793__auto__){
return (function (){
var f__27794__auto__ = (function (){var switch__27626__auto__ = ((function (c__27793__auto__){
return (function (state_28583){
var state_val_28584 = (state_28583[(1)]);
if((state_val_28584 === (7))){
var inst_28565 = (state_28583[(2)]);
var state_28583__$1 = state_28583;
var statearr_28585_30189 = state_28583__$1;
(statearr_28585_30189[(2)] = inst_28565);

(statearr_28585_30189[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (1))){
var inst_28559 = cljs.core.seq(coll);
var inst_28560 = inst_28559;
var state_28583__$1 = (function (){var statearr_28586 = state_28583;
(statearr_28586[(7)] = inst_28560);

return statearr_28586;
})();
var statearr_28587_30190 = state_28583__$1;
(statearr_28587_30190[(2)] = null);

(statearr_28587_30190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (4))){
var inst_28560 = (state_28583[(7)]);
var inst_28563 = cljs.core.first(inst_28560);
var state_28583__$1 = state_28583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28583__$1,(7),ch,inst_28563);
} else {
if((state_val_28584 === (13))){
var inst_28577 = (state_28583[(2)]);
var state_28583__$1 = state_28583;
var statearr_28588_30191 = state_28583__$1;
(statearr_28588_30191[(2)] = inst_28577);

(statearr_28588_30191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (6))){
var inst_28568 = (state_28583[(2)]);
var state_28583__$1 = state_28583;
if(cljs.core.truth_(inst_28568)){
var statearr_28589_30192 = state_28583__$1;
(statearr_28589_30192[(1)] = (8));

} else {
var statearr_28590_30193 = state_28583__$1;
(statearr_28590_30193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (3))){
var inst_28581 = (state_28583[(2)]);
var state_28583__$1 = state_28583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28583__$1,inst_28581);
} else {
if((state_val_28584 === (12))){
var state_28583__$1 = state_28583;
var statearr_28591_30194 = state_28583__$1;
(statearr_28591_30194[(2)] = null);

(statearr_28591_30194[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (2))){
var inst_28560 = (state_28583[(7)]);
var state_28583__$1 = state_28583;
if(cljs.core.truth_(inst_28560)){
var statearr_28592_30195 = state_28583__$1;
(statearr_28592_30195[(1)] = (4));

} else {
var statearr_28593_30196 = state_28583__$1;
(statearr_28593_30196[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (11))){
var inst_28574 = cljs.core.async.close_BANG_(ch);
var state_28583__$1 = state_28583;
var statearr_28594_30197 = state_28583__$1;
(statearr_28594_30197[(2)] = inst_28574);

(statearr_28594_30197[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (9))){
var state_28583__$1 = state_28583;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28595_30198 = state_28583__$1;
(statearr_28595_30198[(1)] = (11));

} else {
var statearr_28596_30199 = state_28583__$1;
(statearr_28596_30199[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (5))){
var inst_28560 = (state_28583[(7)]);
var state_28583__$1 = state_28583;
var statearr_28597_30201 = state_28583__$1;
(statearr_28597_30201[(2)] = inst_28560);

(statearr_28597_30201[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (10))){
var inst_28579 = (state_28583[(2)]);
var state_28583__$1 = state_28583;
var statearr_28598_30204 = state_28583__$1;
(statearr_28598_30204[(2)] = inst_28579);

(statearr_28598_30204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (8))){
var inst_28560 = (state_28583[(7)]);
var inst_28570 = cljs.core.next(inst_28560);
var inst_28560__$1 = inst_28570;
var state_28583__$1 = (function (){var statearr_28599 = state_28583;
(statearr_28599[(7)] = inst_28560__$1);

return statearr_28599;
})();
var statearr_28600_30205 = state_28583__$1;
(statearr_28600_30205[(2)] = null);

(statearr_28600_30205[(1)] = (2));


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
});})(c__27793__auto__))
;
return ((function (switch__27626__auto__,c__27793__auto__){
return (function() {
var cljs$core$async$state_machine__27627__auto__ = null;
var cljs$core$async$state_machine__27627__auto____0 = (function (){
var statearr_28601 = [null,null,null,null,null,null,null,null];
(statearr_28601[(0)] = cljs$core$async$state_machine__27627__auto__);

(statearr_28601[(1)] = (1));

return statearr_28601;
});
var cljs$core$async$state_machine__27627__auto____1 = (function (state_28583){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__(state_28583);
if(cljs.core.keyword_identical_QMARK_(result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e28602){if((e28602 instanceof Object)){
var ex__27630__auto__ = e28602;
var statearr_28603_30210 = state_28583;
(statearr_28603_30210[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28602;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30211 = state_28583;
state_28583 = G__30211;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$state_machine__27627__auto__ = function(state_28583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27627__auto____1.call(this,state_28583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27627__auto____0;
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27627__auto____1;
return cljs$core$async$state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27793__auto__))
})();
var state__27795__auto__ = (function (){var statearr_28604 = (f__27794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27794__auto__.cljs$core$IFn$_invoke$arity$0() : f__27794__auto__.call(null));
(statearr_28604[(6)] = c__27793__auto__);

return statearr_28604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27795__auto__);
});})(c__27793__auto__))
);

return c__27793__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28606 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28606 = (function (ch,cs,meta28607){
this.ch = ch;
this.cs = cs;
this.meta28607 = meta28607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28608,meta28607__$1){
var self__ = this;
var _28608__$1 = this;
return (new cljs.core.async.t_cljs$core$async28606(self__.ch,self__.cs,meta28607__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28606.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28608){
var self__ = this;
var _28608__$1 = this;
return self__.meta28607;
});})(cs))
;

cljs.core.async.t_cljs$core$async28606.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28606.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28606.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28606.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28606.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28606.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28606.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28607","meta28607",203752653,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28606.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28606";

cljs.core.async.t_cljs$core$async28606.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async28606");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28606.
 */
cljs.core.async.__GT_t_cljs$core$async28606 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28606(ch__$1,cs__$1,meta28607){
return (new cljs.core.async.t_cljs$core$async28606(ch__$1,cs__$1,meta28607));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28606(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27793__auto___30235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27793__auto___30235,cs,m,dchan,dctr,done){
return (function (){
var f__27794__auto__ = (function (){var switch__27626__auto__ = ((function (c__27793__auto___30235,cs,m,dchan,dctr,done){
return (function (state_28749){
var state_val_28752 = (state_28749[(1)]);
if((state_val_28752 === (7))){
var inst_28741 = (state_28749[(2)]);
var state_28749__$1 = state_28749;
var statearr_28761_30236 = state_28749__$1;
(statearr_28761_30236[(2)] = inst_28741);

(statearr_28761_30236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (20))){
var inst_28642 = (state_28749[(7)]);
var inst_28655 = cljs.core.first(inst_28642);
var inst_28657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28655,(0),null);
var inst_28658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28655,(1),null);
var state_28749__$1 = (function (){var statearr_28764 = state_28749;
(statearr_28764[(8)] = inst_28657);

return statearr_28764;
})();
if(cljs.core.truth_(inst_28658)){
var statearr_28765_30237 = state_28749__$1;
(statearr_28765_30237[(1)] = (22));

} else {
var statearr_28767_30238 = state_28749__$1;
(statearr_28767_30238[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (27))){
var inst_28611 = (state_28749[(9)]);
var inst_28686 = (state_28749[(10)]);
var inst_28688 = (state_28749[(11)]);
var inst_28693 = (state_28749[(12)]);
var inst_28693__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28686,inst_28688);
var inst_28694 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28693__$1,inst_28611,done);
var state_28749__$1 = (function (){var statearr_28770 = state_28749;
(statearr_28770[(12)] = inst_28693__$1);

return statearr_28770;
})();
if(cljs.core.truth_(inst_28694)){
var statearr_28771_30239 = state_28749__$1;
(statearr_28771_30239[(1)] = (30));

} else {
var statearr_28772_30240 = state_28749__$1;
(statearr_28772_30240[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (1))){
var state_28749__$1 = state_28749;
var statearr_28777_30241 = state_28749__$1;
(statearr_28777_30241[(2)] = null);

(statearr_28777_30241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (24))){
var inst_28642 = (state_28749[(7)]);
var inst_28663 = (state_28749[(2)]);
var inst_28664 = cljs.core.next(inst_28642);
var inst_28620 = inst_28664;
var inst_28621 = null;
var inst_28622 = (0);
var inst_28623 = (0);
var state_28749__$1 = (function (){var statearr_28784 = state_28749;
(statearr_28784[(13)] = inst_28620);

(statearr_28784[(14)] = inst_28621);

(statearr_28784[(15)] = inst_28663);

(statearr_28784[(16)] = inst_28623);

(statearr_28784[(17)] = inst_28622);

return statearr_28784;
})();
var statearr_28785_30242 = state_28749__$1;
(statearr_28785_30242[(2)] = null);

(statearr_28785_30242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (39))){
var state_28749__$1 = state_28749;
var statearr_28792_30243 = state_28749__$1;
(statearr_28792_30243[(2)] = null);

(statearr_28792_30243[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (4))){
var inst_28611 = (state_28749[(9)]);
var inst_28611__$1 = (state_28749[(2)]);
var inst_28612 = (inst_28611__$1 == null);
var state_28749__$1 = (function (){var statearr_28795 = state_28749;
(statearr_28795[(9)] = inst_28611__$1);

return statearr_28795;
})();
if(cljs.core.truth_(inst_28612)){
var statearr_28796_30250 = state_28749__$1;
(statearr_28796_30250[(1)] = (5));

} else {
var statearr_28797_30251 = state_28749__$1;
(statearr_28797_30251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (15))){
var inst_28620 = (state_28749[(13)]);
var inst_28621 = (state_28749[(14)]);
var inst_28623 = (state_28749[(16)]);
var inst_28622 = (state_28749[(17)]);
var inst_28638 = (state_28749[(2)]);
var inst_28639 = (inst_28623 + (1));
var tmp28788 = inst_28620;
var tmp28789 = inst_28621;
var tmp28790 = inst_28622;
var inst_28620__$1 = tmp28788;
var inst_28621__$1 = tmp28789;
var inst_28622__$1 = tmp28790;
var inst_28623__$1 = inst_28639;
var state_28749__$1 = (function (){var statearr_28802 = state_28749;
(statearr_28802[(18)] = inst_28638);

(statearr_28802[(13)] = inst_28620__$1);

(statearr_28802[(14)] = inst_28621__$1);

(statearr_28802[(16)] = inst_28623__$1);

(statearr_28802[(17)] = inst_28622__$1);

return statearr_28802;
})();
var statearr_28803_30252 = state_28749__$1;
(statearr_28803_30252[(2)] = null);

(statearr_28803_30252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (21))){
var inst_28667 = (state_28749[(2)]);
var state_28749__$1 = state_28749;
var statearr_28810_30253 = state_28749__$1;
(statearr_28810_30253[(2)] = inst_28667);

(statearr_28810_30253[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (31))){
var inst_28693 = (state_28749[(12)]);
var inst_28697 = done(null);
var inst_28698 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28693);
var state_28749__$1 = (function (){var statearr_28811 = state_28749;
(statearr_28811[(19)] = inst_28697);

return statearr_28811;
})();
var statearr_28812_30254 = state_28749__$1;
(statearr_28812_30254[(2)] = inst_28698);

(statearr_28812_30254[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (32))){
var inst_28686 = (state_28749[(10)]);
var inst_28687 = (state_28749[(20)]);
var inst_28688 = (state_28749[(11)]);
var inst_28685 = (state_28749[(21)]);
var inst_28700 = (state_28749[(2)]);
var inst_28701 = (inst_28688 + (1));
var tmp28806 = inst_28686;
var tmp28807 = inst_28687;
var tmp28808 = inst_28685;
var inst_28685__$1 = tmp28808;
var inst_28686__$1 = tmp28806;
var inst_28687__$1 = tmp28807;
var inst_28688__$1 = inst_28701;
var state_28749__$1 = (function (){var statearr_28813 = state_28749;
(statearr_28813[(22)] = inst_28700);

(statearr_28813[(10)] = inst_28686__$1);

(statearr_28813[(20)] = inst_28687__$1);

(statearr_28813[(11)] = inst_28688__$1);

(statearr_28813[(21)] = inst_28685__$1);

return statearr_28813;
})();
var statearr_28814_30261 = state_28749__$1;
(statearr_28814_30261[(2)] = null);

(statearr_28814_30261[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (40))){
var inst_28713 = (state_28749[(23)]);
var inst_28717 = done(null);
var inst_28718 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28713);
var state_28749__$1 = (function (){var statearr_28815 = state_28749;
(statearr_28815[(24)] = inst_28717);

return statearr_28815;
})();
var statearr_28820_30262 = state_28749__$1;
(statearr_28820_30262[(2)] = inst_28718);

(statearr_28820_30262[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (33))){
var inst_28704 = (state_28749[(25)]);
var inst_28706 = cljs.core.chunked_seq_QMARK_(inst_28704);
var state_28749__$1 = state_28749;
if(inst_28706){
var statearr_28823_30263 = state_28749__$1;
(statearr_28823_30263[(1)] = (36));

} else {
var statearr_28826_30264 = state_28749__$1;
(statearr_28826_30264[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (13))){
var inst_28632 = (state_28749[(26)]);
var inst_28635 = cljs.core.async.close_BANG_(inst_28632);
var state_28749__$1 = state_28749;
var statearr_28830_30265 = state_28749__$1;
(statearr_28830_30265[(2)] = inst_28635);

(statearr_28830_30265[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (22))){
var inst_28657 = (state_28749[(8)]);
var inst_28660 = cljs.core.async.close_BANG_(inst_28657);
var state_28749__$1 = state_28749;
var statearr_28837_30266 = state_28749__$1;
(statearr_28837_30266[(2)] = inst_28660);

(statearr_28837_30266[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (36))){
var inst_28704 = (state_28749[(25)]);
var inst_28708 = cljs.core.chunk_first(inst_28704);
var inst_28709 = cljs.core.chunk_rest(inst_28704);
var inst_28710 = cljs.core.count(inst_28708);
var inst_28685 = inst_28709;
var inst_28686 = inst_28708;
var inst_28687 = inst_28710;
var inst_28688 = (0);
var state_28749__$1 = (function (){var statearr_28842 = state_28749;
(statearr_28842[(10)] = inst_28686);

(statearr_28842[(20)] = inst_28687);

(statearr_28842[(11)] = inst_28688);

(statearr_28842[(21)] = inst_28685);

return statearr_28842;
})();
var statearr_28847_30267 = state_28749__$1;
(statearr_28847_30267[(2)] = null);

(statearr_28847_30267[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (41))){
var inst_28704 = (state_28749[(25)]);
var inst_28720 = (state_28749[(2)]);
var inst_28721 = cljs.core.next(inst_28704);
var inst_28685 = inst_28721;
var inst_28686 = null;
var inst_28687 = (0);
var inst_28688 = (0);
var state_28749__$1 = (function (){var statearr_28850 = state_28749;
(statearr_28850[(27)] = inst_28720);

(statearr_28850[(10)] = inst_28686);

(statearr_28850[(20)] = inst_28687);

(statearr_28850[(11)] = inst_28688);

(statearr_28850[(21)] = inst_28685);

return statearr_28850;
})();
var statearr_28853_30274 = state_28749__$1;
(statearr_28853_30274[(2)] = null);

(statearr_28853_30274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (43))){
var state_28749__$1 = state_28749;
var statearr_28855_30275 = state_28749__$1;
(statearr_28855_30275[(2)] = null);

(statearr_28855_30275[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (29))){
var inst_28729 = (state_28749[(2)]);
var state_28749__$1 = state_28749;
var statearr_28859_30276 = state_28749__$1;
(statearr_28859_30276[(2)] = inst_28729);

(statearr_28859_30276[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (44))){
var inst_28738 = (state_28749[(2)]);
var state_28749__$1 = (function (){var statearr_28860 = state_28749;
(statearr_28860[(28)] = inst_28738);

return statearr_28860;
})();
var statearr_28862_30277 = state_28749__$1;
(statearr_28862_30277[(2)] = null);

(statearr_28862_30277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (6))){
var inst_28677 = (state_28749[(29)]);
var inst_28676 = cljs.core.deref(cs);
var inst_28677__$1 = cljs.core.keys(inst_28676);
var inst_28678 = cljs.core.count(inst_28677__$1);
var inst_28679 = cljs.core.reset_BANG_(dctr,inst_28678);
var inst_28684 = cljs.core.seq(inst_28677__$1);
var inst_28685 = inst_28684;
var inst_28686 = null;
var inst_28687 = (0);
var inst_28688 = (0);
var state_28749__$1 = (function (){var statearr_28867 = state_28749;
(statearr_28867[(29)] = inst_28677__$1);

(statearr_28867[(30)] = inst_28679);

(statearr_28867[(10)] = inst_28686);

(statearr_28867[(20)] = inst_28687);

(statearr_28867[(11)] = inst_28688);

(statearr_28867[(21)] = inst_28685);

return statearr_28867;
})();
var statearr_28870_30278 = state_28749__$1;
(statearr_28870_30278[(2)] = null);

(statearr_28870_30278[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (28))){
var inst_28704 = (state_28749[(25)]);
var inst_28685 = (state_28749[(21)]);
var inst_28704__$1 = cljs.core.seq(inst_28685);
var state_28749__$1 = (function (){var statearr_28873 = state_28749;
(statearr_28873[(25)] = inst_28704__$1);

return statearr_28873;
})();
if(inst_28704__$1){
var statearr_28876_30279 = state_28749__$1;
(statearr_28876_30279[(1)] = (33));

} else {
var statearr_28878_30280 = state_28749__$1;
(statearr_28878_30280[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (25))){
var inst_28687 = (state_28749[(20)]);
var inst_28688 = (state_28749[(11)]);
var inst_28690 = (inst_28688 < inst_28687);
var inst_28691 = inst_28690;
var state_28749__$1 = state_28749;
if(cljs.core.truth_(inst_28691)){
var statearr_28879_30281 = state_28749__$1;
(statearr_28879_30281[(1)] = (27));

} else {
var statearr_28880_30282 = state_28749__$1;
(statearr_28880_30282[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (34))){
var state_28749__$1 = state_28749;
var statearr_28881_30283 = state_28749__$1;
(statearr_28881_30283[(2)] = null);

(statearr_28881_30283[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (17))){
var state_28749__$1 = state_28749;
var statearr_28886_30284 = state_28749__$1;
(statearr_28886_30284[(2)] = null);

(statearr_28886_30284[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (3))){
var inst_28743 = (state_28749[(2)]);
var state_28749__$1 = state_28749;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28749__$1,inst_28743);
} else {
if((state_val_28752 === (12))){
var inst_28672 = (state_28749[(2)]);
var state_28749__$1 = state_28749;
var statearr_28891_30285 = state_28749__$1;
(statearr_28891_30285[(2)] = inst_28672);

(statearr_28891_30285[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (2))){
var state_28749__$1 = state_28749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28749__$1,(4),ch);
} else {
if((state_val_28752 === (23))){
var state_28749__$1 = state_28749;
var statearr_28893_30286 = state_28749__$1;
(statearr_28893_30286[(2)] = null);

(statearr_28893_30286[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (35))){
var inst_28727 = (state_28749[(2)]);
var state_28749__$1 = state_28749;
var statearr_28897_30287 = state_28749__$1;
(statearr_28897_30287[(2)] = inst_28727);

(statearr_28897_30287[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (19))){
var inst_28642 = (state_28749[(7)]);
var inst_28646 = cljs.core.chunk_first(inst_28642);
var inst_28647 = cljs.core.chunk_rest(inst_28642);
var inst_28648 = cljs.core.count(inst_28646);
var inst_28620 = inst_28647;
var inst_28621 = inst_28646;
var inst_28622 = inst_28648;
var inst_28623 = (0);
var state_28749__$1 = (function (){var statearr_28902 = state_28749;
(statearr_28902[(13)] = inst_28620);

(statearr_28902[(14)] = inst_28621);

(statearr_28902[(16)] = inst_28623);

(statearr_28902[(17)] = inst_28622);

return statearr_28902;
})();
var statearr_28905_30288 = state_28749__$1;
(statearr_28905_30288[(2)] = null);

(statearr_28905_30288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (11))){
var inst_28642 = (state_28749[(7)]);
var inst_28620 = (state_28749[(13)]);
var inst_28642__$1 = cljs.core.seq(inst_28620);
var state_28749__$1 = (function (){var statearr_28910 = state_28749;
(statearr_28910[(7)] = inst_28642__$1);

return statearr_28910;
})();
if(inst_28642__$1){
var statearr_28911_30289 = state_28749__$1;
(statearr_28911_30289[(1)] = (16));

} else {
var statearr_28913_30290 = state_28749__$1;
(statearr_28913_30290[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (9))){
var inst_28674 = (state_28749[(2)]);
var state_28749__$1 = state_28749;
var statearr_28917_30291 = state_28749__$1;
(statearr_28917_30291[(2)] = inst_28674);

(statearr_28917_30291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (5))){
var inst_28618 = cljs.core.deref(cs);
var inst_28619 = cljs.core.seq(inst_28618);
var inst_28620 = inst_28619;
var inst_28621 = null;
var inst_28622 = (0);
var inst_28623 = (0);
var state_28749__$1 = (function (){var statearr_28922 = state_28749;
(statearr_28922[(13)] = inst_28620);

(statearr_28922[(14)] = inst_28621);

(statearr_28922[(16)] = inst_28623);

(statearr_28922[(17)] = inst_28622);

return statearr_28922;
})();
var statearr_28924_30293 = state_28749__$1;
(statearr_28924_30293[(2)] = null);

(statearr_28924_30293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (14))){
var state_28749__$1 = state_28749;
var statearr_28927_30294 = state_28749__$1;
(statearr_28927_30294[(2)] = null);

(statearr_28927_30294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (45))){
var inst_28735 = (state_28749[(2)]);
var state_28749__$1 = state_28749;
var statearr_28931_30296 = state_28749__$1;
(statearr_28931_30296[(2)] = inst_28735);

(statearr_28931_30296[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (26))){
var inst_28677 = (state_28749[(29)]);
var inst_28731 = (state_28749[(2)]);
var inst_28732 = cljs.core.seq(inst_28677);
var state_28749__$1 = (function (){var statearr_28935 = state_28749;
(statearr_28935[(31)] = inst_28731);

return statearr_28935;
})();
if(inst_28732){
var statearr_28936_30301 = state_28749__$1;
(statearr_28936_30301[(1)] = (42));

} else {
var statearr_28937_30302 = state_28749__$1;
(statearr_28937_30302[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (16))){
var inst_28642 = (state_28749[(7)]);
var inst_28644 = cljs.core.chunked_seq_QMARK_(inst_28642);
var state_28749__$1 = state_28749;
if(inst_28644){
var statearr_28938_30303 = state_28749__$1;
(statearr_28938_30303[(1)] = (19));

} else {
var statearr_28939_30304 = state_28749__$1;
(statearr_28939_30304[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (38))){
var inst_28724 = (state_28749[(2)]);
var state_28749__$1 = state_28749;
var statearr_28944_30305 = state_28749__$1;
(statearr_28944_30305[(2)] = inst_28724);

(statearr_28944_30305[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (30))){
var state_28749__$1 = state_28749;
var statearr_28946_30306 = state_28749__$1;
(statearr_28946_30306[(2)] = null);

(statearr_28946_30306[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (10))){
var inst_28621 = (state_28749[(14)]);
var inst_28623 = (state_28749[(16)]);
var inst_28631 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28621,inst_28623);
var inst_28632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28631,(0),null);
var inst_28633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28631,(1),null);
var state_28749__$1 = (function (){var statearr_28951 = state_28749;
(statearr_28951[(26)] = inst_28632);

return statearr_28951;
})();
if(cljs.core.truth_(inst_28633)){
var statearr_28952_30307 = state_28749__$1;
(statearr_28952_30307[(1)] = (13));

} else {
var statearr_28954_30308 = state_28749__$1;
(statearr_28954_30308[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (18))){
var inst_28670 = (state_28749[(2)]);
var state_28749__$1 = state_28749;
var statearr_28958_30309 = state_28749__$1;
(statearr_28958_30309[(2)] = inst_28670);

(statearr_28958_30309[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (42))){
var state_28749__$1 = state_28749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28749__$1,(45),dchan);
} else {
if((state_val_28752 === (37))){
var inst_28611 = (state_28749[(9)]);
var inst_28704 = (state_28749[(25)]);
var inst_28713 = (state_28749[(23)]);
var inst_28713__$1 = cljs.core.first(inst_28704);
var inst_28714 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28713__$1,inst_28611,done);
var state_28749__$1 = (function (){var statearr_28962 = state_28749;
(statearr_28962[(23)] = inst_28713__$1);

return statearr_28962;
})();
if(cljs.core.truth_(inst_28714)){
var statearr_28963_30310 = state_28749__$1;
(statearr_28963_30310[(1)] = (39));

} else {
var statearr_28964_30311 = state_28749__$1;
(statearr_28964_30311[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (8))){
var inst_28623 = (state_28749[(16)]);
var inst_28622 = (state_28749[(17)]);
var inst_28625 = (inst_28623 < inst_28622);
var inst_28626 = inst_28625;
var state_28749__$1 = state_28749;
if(cljs.core.truth_(inst_28626)){
var statearr_28969_30314 = state_28749__$1;
(statearr_28969_30314[(1)] = (10));

} else {
var statearr_28972_30315 = state_28749__$1;
(statearr_28972_30315[(1)] = (11));

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
});})(c__27793__auto___30235,cs,m,dchan,dctr,done))
;
return ((function (switch__27626__auto__,c__27793__auto___30235,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27627__auto__ = null;
var cljs$core$async$mult_$_state_machine__27627__auto____0 = (function (){
var statearr_28977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28977[(0)] = cljs$core$async$mult_$_state_machine__27627__auto__);

(statearr_28977[(1)] = (1));

return statearr_28977;
});
var cljs$core$async$mult_$_state_machine__27627__auto____1 = (function (state_28749){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__(state_28749);
if(cljs.core.keyword_identical_QMARK_(result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e28980){if((e28980 instanceof Object)){
var ex__27630__auto__ = e28980;
var statearr_28985_30318 = state_28749;
(statearr_28985_30318[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28980;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30319 = state_28749;
state_28749 = G__30319;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27627__auto__ = function(state_28749){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27627__auto____1.call(this,state_28749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27627__auto____0;
cljs$core$async$mult_$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27627__auto____1;
return cljs$core$async$mult_$_state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27793__auto___30235,cs,m,dchan,dctr,done))
})();
var state__27795__auto__ = (function (){var statearr_28989 = (f__27794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27794__auto__.cljs$core$IFn$_invoke$arity$0() : f__27794__auto__.call(null));
(statearr_28989[(6)] = c__27793__auto___30235);

return statearr_28989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27795__auto__);
});})(c__27793__auto___30235,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28997 = arguments.length;
switch (G__28997) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30325 = arguments.length;
var i__4731__auto___30326 = (0);
while(true){
if((i__4731__auto___30326 < len__4730__auto___30325)){
args__4736__auto__.push((arguments[i__4731__auto___30326]));

var G__30327 = (i__4731__auto___30326 + (1));
i__4731__auto___30326 = G__30327;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29044){
var map__29045 = p__29044;
var map__29045__$1 = (((((!((map__29045 == null))))?(((((map__29045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29045):map__29045);
var opts = map__29045__$1;
var statearr_29047_30328 = state;
(statearr_29047_30328[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__29045,map__29045__$1,opts){
return (function (val){
var statearr_29048_30329 = state;
(statearr_29048_30329[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__29045,map__29045__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_29049_30330 = state;
(statearr_29049_30330[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29040){
var G__29041 = cljs.core.first(seq29040);
var seq29040__$1 = cljs.core.next(seq29040);
var G__29042 = cljs.core.first(seq29040__$1);
var seq29040__$2 = cljs.core.next(seq29040__$1);
var G__29043 = cljs.core.first(seq29040__$2);
var seq29040__$3 = cljs.core.next(seq29040__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29041,G__29042,G__29043,seq29040__$3);
});

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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29051 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29051 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29052){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29052 = meta29052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29053,meta29052__$1){
var self__ = this;
var _29053__$1 = this;
return (new cljs.core.async.t_cljs$core$async29051(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29052__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29051.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29053){
var self__ = this;
var _29053__$1 = this;
return self__.meta29052;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29051.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29051.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29051.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29051.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29051.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29051.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29051.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29051.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29051.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29052","meta29052",1418789887,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29051.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29051";

cljs.core.async.t_cljs$core$async29051.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async29051");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29051.
 */
cljs.core.async.__GT_t_cljs$core$async29051 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29051(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29052){
return (new cljs.core.async.t_cljs$core$async29051(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29052));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29051(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27793__auto___30336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27793__auto___30336,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27794__auto__ = (function (){var switch__27626__auto__ = ((function (c__27793__auto___30336,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29168){
var state_val_29169 = (state_29168[(1)]);
if((state_val_29169 === (7))){
var inst_29083 = (state_29168[(2)]);
var state_29168__$1 = state_29168;
var statearr_29170_30337 = state_29168__$1;
(statearr_29170_30337[(2)] = inst_29083);

(statearr_29170_30337[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (20))){
var inst_29095 = (state_29168[(7)]);
var state_29168__$1 = state_29168;
var statearr_29171_30338 = state_29168__$1;
(statearr_29171_30338[(2)] = inst_29095);

(statearr_29171_30338[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (27))){
var state_29168__$1 = state_29168;
var statearr_29172_30339 = state_29168__$1;
(statearr_29172_30339[(2)] = null);

(statearr_29172_30339[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (1))){
var inst_29070 = (state_29168[(8)]);
var inst_29070__$1 = calc_state();
var inst_29072 = (inst_29070__$1 == null);
var inst_29073 = cljs.core.not(inst_29072);
var state_29168__$1 = (function (){var statearr_29173 = state_29168;
(statearr_29173[(8)] = inst_29070__$1);

return statearr_29173;
})();
if(inst_29073){
var statearr_29174_30340 = state_29168__$1;
(statearr_29174_30340[(1)] = (2));

} else {
var statearr_29175_30341 = state_29168__$1;
(statearr_29175_30341[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (24))){
var inst_29119 = (state_29168[(9)]);
var inst_29128 = (state_29168[(10)]);
var inst_29142 = (state_29168[(11)]);
var inst_29142__$1 = (inst_29119.cljs$core$IFn$_invoke$arity$1 ? inst_29119.cljs$core$IFn$_invoke$arity$1(inst_29128) : inst_29119.call(null,inst_29128));
var state_29168__$1 = (function (){var statearr_29176 = state_29168;
(statearr_29176[(11)] = inst_29142__$1);

return statearr_29176;
})();
if(cljs.core.truth_(inst_29142__$1)){
var statearr_29177_30342 = state_29168__$1;
(statearr_29177_30342[(1)] = (29));

} else {
var statearr_29178_30343 = state_29168__$1;
(statearr_29178_30343[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (4))){
var inst_29086 = (state_29168[(2)]);
var state_29168__$1 = state_29168;
if(cljs.core.truth_(inst_29086)){
var statearr_29179_30344 = state_29168__$1;
(statearr_29179_30344[(1)] = (8));

} else {
var statearr_29180_30345 = state_29168__$1;
(statearr_29180_30345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (15))){
var inst_29113 = (state_29168[(2)]);
var state_29168__$1 = state_29168;
if(cljs.core.truth_(inst_29113)){
var statearr_29181_30346 = state_29168__$1;
(statearr_29181_30346[(1)] = (19));

} else {
var statearr_29182_30347 = state_29168__$1;
(statearr_29182_30347[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (21))){
var inst_29118 = (state_29168[(12)]);
var inst_29118__$1 = (state_29168[(2)]);
var inst_29119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29118__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29118__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29118__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29168__$1 = (function (){var statearr_29183 = state_29168;
(statearr_29183[(9)] = inst_29119);

(statearr_29183[(12)] = inst_29118__$1);

(statearr_29183[(13)] = inst_29120);

return statearr_29183;
})();
return cljs.core.async.ioc_alts_BANG_(state_29168__$1,(22),inst_29121);
} else {
if((state_val_29169 === (31))){
var inst_29150 = (state_29168[(2)]);
var state_29168__$1 = state_29168;
if(cljs.core.truth_(inst_29150)){
var statearr_29184_30348 = state_29168__$1;
(statearr_29184_30348[(1)] = (32));

} else {
var statearr_29185_30349 = state_29168__$1;
(statearr_29185_30349[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (32))){
var inst_29127 = (state_29168[(14)]);
var state_29168__$1 = state_29168;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29168__$1,(35),out,inst_29127);
} else {
if((state_val_29169 === (33))){
var inst_29118 = (state_29168[(12)]);
var inst_29095 = inst_29118;
var state_29168__$1 = (function (){var statearr_29186 = state_29168;
(statearr_29186[(7)] = inst_29095);

return statearr_29186;
})();
var statearr_29187_30350 = state_29168__$1;
(statearr_29187_30350[(2)] = null);

(statearr_29187_30350[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (13))){
var inst_29095 = (state_29168[(7)]);
var inst_29102 = inst_29095.cljs$lang$protocol_mask$partition0$;
var inst_29103 = (inst_29102 & (64));
var inst_29104 = inst_29095.cljs$core$ISeq$;
var inst_29105 = (cljs.core.PROTOCOL_SENTINEL === inst_29104);
var inst_29106 = ((inst_29103) || (inst_29105));
var state_29168__$1 = state_29168;
if(cljs.core.truth_(inst_29106)){
var statearr_29188_30355 = state_29168__$1;
(statearr_29188_30355[(1)] = (16));

} else {
var statearr_29189_30356 = state_29168__$1;
(statearr_29189_30356[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (22))){
var inst_29127 = (state_29168[(14)]);
var inst_29128 = (state_29168[(10)]);
var inst_29126 = (state_29168[(2)]);
var inst_29127__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29126,(0),null);
var inst_29128__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29126,(1),null);
var inst_29129 = (inst_29127__$1 == null);
var inst_29130 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29128__$1,change);
var inst_29131 = ((inst_29129) || (inst_29130));
var state_29168__$1 = (function (){var statearr_29190 = state_29168;
(statearr_29190[(14)] = inst_29127__$1);

(statearr_29190[(10)] = inst_29128__$1);

return statearr_29190;
})();
if(cljs.core.truth_(inst_29131)){
var statearr_29191_30360 = state_29168__$1;
(statearr_29191_30360[(1)] = (23));

} else {
var statearr_29192_30361 = state_29168__$1;
(statearr_29192_30361[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (36))){
var inst_29118 = (state_29168[(12)]);
var inst_29095 = inst_29118;
var state_29168__$1 = (function (){var statearr_29193 = state_29168;
(statearr_29193[(7)] = inst_29095);

return statearr_29193;
})();
var statearr_29194_30362 = state_29168__$1;
(statearr_29194_30362[(2)] = null);

(statearr_29194_30362[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (29))){
var inst_29142 = (state_29168[(11)]);
var state_29168__$1 = state_29168;
var statearr_29195_30366 = state_29168__$1;
(statearr_29195_30366[(2)] = inst_29142);

(statearr_29195_30366[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (6))){
var state_29168__$1 = state_29168;
var statearr_29196_30367 = state_29168__$1;
(statearr_29196_30367[(2)] = false);

(statearr_29196_30367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (28))){
var inst_29138 = (state_29168[(2)]);
var inst_29139 = calc_state();
var inst_29095 = inst_29139;
var state_29168__$1 = (function (){var statearr_29197 = state_29168;
(statearr_29197[(15)] = inst_29138);

(statearr_29197[(7)] = inst_29095);

return statearr_29197;
})();
var statearr_29198_30368 = state_29168__$1;
(statearr_29198_30368[(2)] = null);

(statearr_29198_30368[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (25))){
var inst_29164 = (state_29168[(2)]);
var state_29168__$1 = state_29168;
var statearr_29199_30372 = state_29168__$1;
(statearr_29199_30372[(2)] = inst_29164);

(statearr_29199_30372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (34))){
var inst_29162 = (state_29168[(2)]);
var state_29168__$1 = state_29168;
var statearr_29200_30373 = state_29168__$1;
(statearr_29200_30373[(2)] = inst_29162);

(statearr_29200_30373[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (17))){
var state_29168__$1 = state_29168;
var statearr_29201_30374 = state_29168__$1;
(statearr_29201_30374[(2)] = false);

(statearr_29201_30374[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (3))){
var state_29168__$1 = state_29168;
var statearr_29202_30375 = state_29168__$1;
(statearr_29202_30375[(2)] = false);

(statearr_29202_30375[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (12))){
var inst_29166 = (state_29168[(2)]);
var state_29168__$1 = state_29168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29168__$1,inst_29166);
} else {
if((state_val_29169 === (2))){
var inst_29070 = (state_29168[(8)]);
var inst_29075 = inst_29070.cljs$lang$protocol_mask$partition0$;
var inst_29076 = (inst_29075 & (64));
var inst_29077 = inst_29070.cljs$core$ISeq$;
var inst_29078 = (cljs.core.PROTOCOL_SENTINEL === inst_29077);
var inst_29079 = ((inst_29076) || (inst_29078));
var state_29168__$1 = state_29168;
if(cljs.core.truth_(inst_29079)){
var statearr_29203_30379 = state_29168__$1;
(statearr_29203_30379[(1)] = (5));

} else {
var statearr_29204_30380 = state_29168__$1;
(statearr_29204_30380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (23))){
var inst_29127 = (state_29168[(14)]);
var inst_29133 = (inst_29127 == null);
var state_29168__$1 = state_29168;
if(cljs.core.truth_(inst_29133)){
var statearr_29205_30381 = state_29168__$1;
(statearr_29205_30381[(1)] = (26));

} else {
var statearr_29206_30382 = state_29168__$1;
(statearr_29206_30382[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (35))){
var inst_29153 = (state_29168[(2)]);
var state_29168__$1 = state_29168;
if(cljs.core.truth_(inst_29153)){
var statearr_29207_30387 = state_29168__$1;
(statearr_29207_30387[(1)] = (36));

} else {
var statearr_29208_30388 = state_29168__$1;
(statearr_29208_30388[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (19))){
var inst_29095 = (state_29168[(7)]);
var inst_29115 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_29095);
var state_29168__$1 = state_29168;
var statearr_29209_30389 = state_29168__$1;
(statearr_29209_30389[(2)] = inst_29115);

(statearr_29209_30389[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (11))){
var inst_29095 = (state_29168[(7)]);
var inst_29099 = (inst_29095 == null);
var inst_29100 = cljs.core.not(inst_29099);
var state_29168__$1 = state_29168;
if(inst_29100){
var statearr_29210_30390 = state_29168__$1;
(statearr_29210_30390[(1)] = (13));

} else {
var statearr_29211_30391 = state_29168__$1;
(statearr_29211_30391[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (9))){
var inst_29070 = (state_29168[(8)]);
var state_29168__$1 = state_29168;
var statearr_29212_30392 = state_29168__$1;
(statearr_29212_30392[(2)] = inst_29070);

(statearr_29212_30392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (5))){
var state_29168__$1 = state_29168;
var statearr_29213_30393 = state_29168__$1;
(statearr_29213_30393[(2)] = true);

(statearr_29213_30393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (14))){
var state_29168__$1 = state_29168;
var statearr_29214_30394 = state_29168__$1;
(statearr_29214_30394[(2)] = false);

(statearr_29214_30394[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (26))){
var inst_29128 = (state_29168[(10)]);
var inst_29135 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_29128);
var state_29168__$1 = state_29168;
var statearr_29215_30395 = state_29168__$1;
(statearr_29215_30395[(2)] = inst_29135);

(statearr_29215_30395[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (16))){
var state_29168__$1 = state_29168;
var statearr_29216_30396 = state_29168__$1;
(statearr_29216_30396[(2)] = true);

(statearr_29216_30396[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (38))){
var inst_29158 = (state_29168[(2)]);
var state_29168__$1 = state_29168;
var statearr_29217_30397 = state_29168__$1;
(statearr_29217_30397[(2)] = inst_29158);

(statearr_29217_30397[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (30))){
var inst_29119 = (state_29168[(9)]);
var inst_29128 = (state_29168[(10)]);
var inst_29120 = (state_29168[(13)]);
var inst_29145 = cljs.core.empty_QMARK_(inst_29119);
var inst_29146 = (inst_29120.cljs$core$IFn$_invoke$arity$1 ? inst_29120.cljs$core$IFn$_invoke$arity$1(inst_29128) : inst_29120.call(null,inst_29128));
var inst_29147 = cljs.core.not(inst_29146);
var inst_29148 = ((inst_29145) && (inst_29147));
var state_29168__$1 = state_29168;
var statearr_29218_30398 = state_29168__$1;
(statearr_29218_30398[(2)] = inst_29148);

(statearr_29218_30398[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (10))){
var inst_29070 = (state_29168[(8)]);
var inst_29091 = (state_29168[(2)]);
var inst_29092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29091,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29091,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29091,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29095 = inst_29070;
var state_29168__$1 = (function (){var statearr_29219 = state_29168;
(statearr_29219[(16)] = inst_29094);

(statearr_29219[(17)] = inst_29093);

(statearr_29219[(7)] = inst_29095);

(statearr_29219[(18)] = inst_29092);

return statearr_29219;
})();
var statearr_29220_30401 = state_29168__$1;
(statearr_29220_30401[(2)] = null);

(statearr_29220_30401[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (18))){
var inst_29110 = (state_29168[(2)]);
var state_29168__$1 = state_29168;
var statearr_29221_30402 = state_29168__$1;
(statearr_29221_30402[(2)] = inst_29110);

(statearr_29221_30402[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (37))){
var state_29168__$1 = state_29168;
var statearr_29222_30404 = state_29168__$1;
(statearr_29222_30404[(2)] = null);

(statearr_29222_30404[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29169 === (8))){
var inst_29070 = (state_29168[(8)]);
var inst_29088 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_29070);
var state_29168__$1 = state_29168;
var statearr_29223_30406 = state_29168__$1;
(statearr_29223_30406[(2)] = inst_29088);

(statearr_29223_30406[(1)] = (10));


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
});})(c__27793__auto___30336,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27626__auto__,c__27793__auto___30336,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27627__auto__ = null;
var cljs$core$async$mix_$_state_machine__27627__auto____0 = (function (){
var statearr_29224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29224[(0)] = cljs$core$async$mix_$_state_machine__27627__auto__);

(statearr_29224[(1)] = (1));

return statearr_29224;
});
var cljs$core$async$mix_$_state_machine__27627__auto____1 = (function (state_29168){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__(state_29168);
if(cljs.core.keyword_identical_QMARK_(result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e29225){if((e29225 instanceof Object)){
var ex__27630__auto__ = e29225;
var statearr_29226_30409 = state_29168;
(statearr_29226_30409[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29225;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30410 = state_29168;
state_29168 = G__30410;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27627__auto__ = function(state_29168){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27627__auto____1.call(this,state_29168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27627__auto____0;
cljs$core$async$mix_$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27627__auto____1;
return cljs$core$async$mix_$_state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27793__auto___30336,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27795__auto__ = (function (){var statearr_29227 = (f__27794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27794__auto__.cljs$core$IFn$_invoke$arity$0() : f__27794__auto__.call(null));
(statearr_29227[(6)] = c__27793__auto___30336);

return statearr_29227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27795__auto__);
});})(c__27793__auto___30336,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29229 = arguments.length;
switch (G__29229) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__29232 = arguments.length;
switch (G__29232) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__29230_SHARP_){
if(cljs.core.truth_((p1__29230_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__29230_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__29230_SHARP_.call(null,topic)))){
return p1__29230_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__29230_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29233 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29233 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29234){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29234 = meta29234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29235,meta29234__$1){
var self__ = this;
var _29235__$1 = this;
return (new cljs.core.async.t_cljs$core$async29233(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29234__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29233.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29235){
var self__ = this;
var _29235__$1 = this;
return self__.meta29234;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29233.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29233.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29233.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29233.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29233.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29233.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29233.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29233.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29234","meta29234",1648651162,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29233.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29233";

cljs.core.async.t_cljs$core$async29233.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async29233");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29233.
 */
cljs.core.async.__GT_t_cljs$core$async29233 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29233(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29234){
return (new cljs.core.async.t_cljs$core$async29233(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29234));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29233(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27793__auto___30423 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27793__auto___30423,mults,ensure_mult,p){
return (function (){
var f__27794__auto__ = (function (){var switch__27626__auto__ = ((function (c__27793__auto___30423,mults,ensure_mult,p){
return (function (state_29307){
var state_val_29308 = (state_29307[(1)]);
if((state_val_29308 === (7))){
var inst_29303 = (state_29307[(2)]);
var state_29307__$1 = state_29307;
var statearr_29309_30424 = state_29307__$1;
(statearr_29309_30424[(2)] = inst_29303);

(statearr_29309_30424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29308 === (20))){
var state_29307__$1 = state_29307;
var statearr_29310_30425 = state_29307__$1;
(statearr_29310_30425[(2)] = null);

(statearr_29310_30425[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29308 === (1))){
var state_29307__$1 = state_29307;
var statearr_29311_30426 = state_29307__$1;
(statearr_29311_30426[(2)] = null);

(statearr_29311_30426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29308 === (24))){
var inst_29286 = (state_29307[(7)]);
var inst_29295 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_29286);
var state_29307__$1 = state_29307;
var statearr_29312_30431 = state_29307__$1;
(statearr_29312_30431[(2)] = inst_29295);

(statearr_29312_30431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29308 === (4))){
var inst_29238 = (state_29307[(8)]);
var inst_29238__$1 = (state_29307[(2)]);
var inst_29239 = (inst_29238__$1 == null);
var state_29307__$1 = (function (){var statearr_29313 = state_29307;
(statearr_29313[(8)] = inst_29238__$1);

return statearr_29313;
})();
if(cljs.core.truth_(inst_29239)){
var statearr_29314_30433 = state_29307__$1;
(statearr_29314_30433[(1)] = (5));

} else {
var statearr_29315_30434 = state_29307__$1;
(statearr_29315_30434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29308 === (15))){
var inst_29280 = (state_29307[(2)]);
var state_29307__$1 = state_29307;
var statearr_29316_30435 = state_29307__$1;
(statearr_29316_30435[(2)] = inst_29280);

(statearr_29316_30435[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29308 === (21))){
var inst_29300 = (state_29307[(2)]);
var state_29307__$1 = (function (){var statearr_29317 = state_29307;
(statearr_29317[(9)] = inst_29300);

return statearr_29317;
})();
var statearr_29318_30436 = state_29307__$1;
(statearr_29318_30436[(2)] = null);

(statearr_29318_30436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29308 === (13))){
var inst_29262 = (state_29307[(10)]);
var inst_29264 = cljs.core.chunked_seq_QMARK_(inst_29262);
var state_29307__$1 = state_29307;
if(inst_29264){
var statearr_29319_30437 = state_29307__$1;
(statearr_29319_30437[(1)] = (16));

} else {
var statearr_29320_30438 = state_29307__$1;
(statearr_29320_30438[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29308 === (22))){
var inst_29292 = (state_29307[(2)]);
var state_29307__$1 = state_29307;
if(cljs.core.truth_(inst_29292)){
var statearr_29321_30439 = state_29307__$1;
(statearr_29321_30439[(1)] = (23));

} else {
var statearr_29322_30440 = state_29307__$1;
(statearr_29322_30440[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29308 === (6))){
var inst_29286 = (state_29307[(7)]);
var inst_29238 = (state_29307[(8)]);
var inst_29288 = (state_29307[(11)]);
var inst_29286__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_29238) : topic_fn.call(null,inst_29238));
var inst_29287 = cljs.core.deref(mults);
var inst_29288__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29287,inst_29286__$1);
var state_29307__$1 = (function (){var statearr_29323 = state_29307;
(statearr_29323[(7)] = inst_29286__$1);

(statearr_29323[(11)] = inst_29288__$1);

return statearr_29323;
})();
if(cljs.core.truth_(inst_29288__$1)){
var statearr_29324_30441 = state_29307__$1;
(statearr_29324_30441[(1)] = (19));

} else {
var statearr_29325_30443 = state_29307__$1;
(statearr_29325_30443[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29308 === (25))){
var inst_29297 = (state_29307[(2)]);
var state_29307__$1 = state_29307;
var statearr_29326_30444 = state_29307__$1;
(statearr_29326_30444[(2)] = inst_29297);

(statearr_29326_30444[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29308 === (17))){
var inst_29262 = (state_29307[(10)]);
var inst_29271 = cljs.core.first(inst_29262);
var inst_29272 = cljs.core.async.muxch_STAR_(inst_29271);
var inst_29273 = cljs.core.async.close_BANG_(inst_29272);
var inst_29274 = cljs.core.next(inst_29262);
var inst_29248 = inst_29274;
var inst_29249 = null;
var inst_29250 = (0);
var inst_29251 = (0);
var state_29307__$1 = (function (){var statearr_29327 = state_29307;
(statearr_29327[(12)] = inst_29250);

(statearr_29327[(13)] = inst_29248);

(statearr_29327[(14)] = inst_29249);

(statearr_29327[(15)] = inst_29251);

(statearr_29327[(16)] = inst_29273);

return statearr_29327;
})();
var statearr_29328_30445 = state_29307__$1;
(statearr_29328_30445[(2)] = null);

(statearr_29328_30445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29308 === (3))){
var inst_29305 = (state_29307[(2)]);
var state_29307__$1 = state_29307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29307__$1,inst_29305);
} else {
if((state_val_29308 === (12))){
var inst_29282 = (state_29307[(2)]);
var state_29307__$1 = state_29307;
var statearr_29329_30447 = state_29307__$1;
(statearr_29329_30447[(2)] = inst_29282);

(statearr_29329_30447[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29308 === (2))){
var state_29307__$1 = state_29307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29307__$1,(4),ch);
} else {
if((state_val_29308 === (23))){
var state_29307__$1 = state_29307;
var statearr_29330_30451 = state_29307__$1;
(statearr_29330_30451[(2)] = null);

(statearr_29330_30451[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29308 === (19))){
var inst_29238 = (state_29307[(8)]);
var inst_29288 = (state_29307[(11)]);
var inst_29290 = cljs.core.async.muxch_STAR_(inst_29288);
var state_29307__$1 = state_29307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29307__$1,(22),inst_29290,inst_29238);
} else {
if((state_val_29308 === (11))){
var inst_29262 = (state_29307[(10)]);
var inst_29248 = (state_29307[(13)]);
var inst_29262__$1 = cljs.core.seq(inst_29248);
var state_29307__$1 = (function (){var statearr_29331 = state_29307;
(statearr_29331[(10)] = inst_29262__$1);

return statearr_29331;
})();
if(inst_29262__$1){
var statearr_29332_30452 = state_29307__$1;
(statearr_29332_30452[(1)] = (13));

} else {
var statearr_29333_30453 = state_29307__$1;
(statearr_29333_30453[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29308 === (9))){
var inst_29284 = (state_29307[(2)]);
var state_29307__$1 = state_29307;
var statearr_29334_30454 = state_29307__$1;
(statearr_29334_30454[(2)] = inst_29284);

(statearr_29334_30454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29308 === (5))){
var inst_29245 = cljs.core.deref(mults);
var inst_29246 = cljs.core.vals(inst_29245);
var inst_29247 = cljs.core.seq(inst_29246);
var inst_29248 = inst_29247;
var inst_29249 = null;
var inst_29250 = (0);
var inst_29251 = (0);
var state_29307__$1 = (function (){var statearr_29335 = state_29307;
(statearr_29335[(12)] = inst_29250);

(statearr_29335[(13)] = inst_29248);

(statearr_29335[(14)] = inst_29249);

(statearr_29335[(15)] = inst_29251);

return statearr_29335;
})();
var statearr_29336_30455 = state_29307__$1;
(statearr_29336_30455[(2)] = null);

(statearr_29336_30455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29308 === (14))){
var state_29307__$1 = state_29307;
var statearr_29340_30456 = state_29307__$1;
(statearr_29340_30456[(2)] = null);

(statearr_29340_30456[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29308 === (16))){
var inst_29262 = (state_29307[(10)]);
var inst_29266 = cljs.core.chunk_first(inst_29262);
var inst_29267 = cljs.core.chunk_rest(inst_29262);
var inst_29268 = cljs.core.count(inst_29266);
var inst_29248 = inst_29267;
var inst_29249 = inst_29266;
var inst_29250 = inst_29268;
var inst_29251 = (0);
var state_29307__$1 = (function (){var statearr_29341 = state_29307;
(statearr_29341[(12)] = inst_29250);

(statearr_29341[(13)] = inst_29248);

(statearr_29341[(14)] = inst_29249);

(statearr_29341[(15)] = inst_29251);

return statearr_29341;
})();
var statearr_29342_30457 = state_29307__$1;
(statearr_29342_30457[(2)] = null);

(statearr_29342_30457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29308 === (10))){
var inst_29250 = (state_29307[(12)]);
var inst_29248 = (state_29307[(13)]);
var inst_29249 = (state_29307[(14)]);
var inst_29251 = (state_29307[(15)]);
var inst_29256 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29249,inst_29251);
var inst_29257 = cljs.core.async.muxch_STAR_(inst_29256);
var inst_29258 = cljs.core.async.close_BANG_(inst_29257);
var inst_29259 = (inst_29251 + (1));
var tmp29337 = inst_29250;
var tmp29338 = inst_29248;
var tmp29339 = inst_29249;
var inst_29248__$1 = tmp29338;
var inst_29249__$1 = tmp29339;
var inst_29250__$1 = tmp29337;
var inst_29251__$1 = inst_29259;
var state_29307__$1 = (function (){var statearr_29343 = state_29307;
(statearr_29343[(12)] = inst_29250__$1);

(statearr_29343[(17)] = inst_29258);

(statearr_29343[(13)] = inst_29248__$1);

(statearr_29343[(14)] = inst_29249__$1);

(statearr_29343[(15)] = inst_29251__$1);

return statearr_29343;
})();
var statearr_29344_30458 = state_29307__$1;
(statearr_29344_30458[(2)] = null);

(statearr_29344_30458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29308 === (18))){
var inst_29277 = (state_29307[(2)]);
var state_29307__$1 = state_29307;
var statearr_29345_30459 = state_29307__$1;
(statearr_29345_30459[(2)] = inst_29277);

(statearr_29345_30459[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29308 === (8))){
var inst_29250 = (state_29307[(12)]);
var inst_29251 = (state_29307[(15)]);
var inst_29253 = (inst_29251 < inst_29250);
var inst_29254 = inst_29253;
var state_29307__$1 = state_29307;
if(cljs.core.truth_(inst_29254)){
var statearr_29346_30461 = state_29307__$1;
(statearr_29346_30461[(1)] = (10));

} else {
var statearr_29347_30462 = state_29307__$1;
(statearr_29347_30462[(1)] = (11));

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
});})(c__27793__auto___30423,mults,ensure_mult,p))
;
return ((function (switch__27626__auto__,c__27793__auto___30423,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27627__auto__ = null;
var cljs$core$async$state_machine__27627__auto____0 = (function (){
var statearr_29348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29348[(0)] = cljs$core$async$state_machine__27627__auto__);

(statearr_29348[(1)] = (1));

return statearr_29348;
});
var cljs$core$async$state_machine__27627__auto____1 = (function (state_29307){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__(state_29307);
if(cljs.core.keyword_identical_QMARK_(result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e29349){if((e29349 instanceof Object)){
var ex__27630__auto__ = e29349;
var statearr_29350_30463 = state_29307;
(statearr_29350_30463[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29349;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30464 = state_29307;
state_29307 = G__30464;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$state_machine__27627__auto__ = function(state_29307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27627__auto____1.call(this,state_29307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27627__auto____0;
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27627__auto____1;
return cljs$core$async$state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27793__auto___30423,mults,ensure_mult,p))
})();
var state__27795__auto__ = (function (){var statearr_29351 = (f__27794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27794__auto__.cljs$core$IFn$_invoke$arity$0() : f__27794__auto__.call(null));
(statearr_29351[(6)] = c__27793__auto___30423);

return statearr_29351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27795__auto__);
});})(c__27793__auto___30423,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29353 = arguments.length;
switch (G__29353) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

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
var G__29355 = arguments.length;
switch (G__29355) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__29357 = arguments.length;
switch (G__29357) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__27793__auto___30475 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27793__auto___30475,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27794__auto__ = (function (){var switch__27626__auto__ = ((function (c__27793__auto___30475,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29396){
var state_val_29397 = (state_29396[(1)]);
if((state_val_29397 === (7))){
var state_29396__$1 = state_29396;
var statearr_29398_30476 = state_29396__$1;
(statearr_29398_30476[(2)] = null);

(statearr_29398_30476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29397 === (1))){
var state_29396__$1 = state_29396;
var statearr_29399_30478 = state_29396__$1;
(statearr_29399_30478[(2)] = null);

(statearr_29399_30478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29397 === (4))){
var inst_29360 = (state_29396[(7)]);
var inst_29362 = (inst_29360 < cnt);
var state_29396__$1 = state_29396;
if(cljs.core.truth_(inst_29362)){
var statearr_29400_30479 = state_29396__$1;
(statearr_29400_30479[(1)] = (6));

} else {
var statearr_29401_30480 = state_29396__$1;
(statearr_29401_30480[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29397 === (15))){
var inst_29392 = (state_29396[(2)]);
var state_29396__$1 = state_29396;
var statearr_29402_30481 = state_29396__$1;
(statearr_29402_30481[(2)] = inst_29392);

(statearr_29402_30481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29397 === (13))){
var inst_29385 = cljs.core.async.close_BANG_(out);
var state_29396__$1 = state_29396;
var statearr_29403_30483 = state_29396__$1;
(statearr_29403_30483[(2)] = inst_29385);

(statearr_29403_30483[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29397 === (6))){
var state_29396__$1 = state_29396;
var statearr_29404_30484 = state_29396__$1;
(statearr_29404_30484[(2)] = null);

(statearr_29404_30484[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29397 === (3))){
var inst_29394 = (state_29396[(2)]);
var state_29396__$1 = state_29396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29396__$1,inst_29394);
} else {
if((state_val_29397 === (12))){
var inst_29382 = (state_29396[(8)]);
var inst_29382__$1 = (state_29396[(2)]);
var inst_29383 = cljs.core.some(cljs.core.nil_QMARK_,inst_29382__$1);
var state_29396__$1 = (function (){var statearr_29405 = state_29396;
(statearr_29405[(8)] = inst_29382__$1);

return statearr_29405;
})();
if(cljs.core.truth_(inst_29383)){
var statearr_29406_30486 = state_29396__$1;
(statearr_29406_30486[(1)] = (13));

} else {
var statearr_29407_30487 = state_29396__$1;
(statearr_29407_30487[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29397 === (2))){
var inst_29359 = cljs.core.reset_BANG_(dctr,cnt);
var inst_29360 = (0);
var state_29396__$1 = (function (){var statearr_29408 = state_29396;
(statearr_29408[(9)] = inst_29359);

(statearr_29408[(7)] = inst_29360);

return statearr_29408;
})();
var statearr_29409_30488 = state_29396__$1;
(statearr_29409_30488[(2)] = null);

(statearr_29409_30488[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29397 === (11))){
var inst_29360 = (state_29396[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_29396,(10),Object,null,(9));
var inst_29369 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_29360) : chs__$1.call(null,inst_29360));
var inst_29370 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_29360) : done.call(null,inst_29360));
var inst_29371 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_29369,inst_29370);
var state_29396__$1 = state_29396;
var statearr_29410_30494 = state_29396__$1;
(statearr_29410_30494[(2)] = inst_29371);


cljs.core.async.impl.ioc_helpers.process_exception(state_29396__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29397 === (9))){
var inst_29360 = (state_29396[(7)]);
var inst_29373 = (state_29396[(2)]);
var inst_29374 = (inst_29360 + (1));
var inst_29360__$1 = inst_29374;
var state_29396__$1 = (function (){var statearr_29411 = state_29396;
(statearr_29411[(10)] = inst_29373);

(statearr_29411[(7)] = inst_29360__$1);

return statearr_29411;
})();
var statearr_29412_30496 = state_29396__$1;
(statearr_29412_30496[(2)] = null);

(statearr_29412_30496[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29397 === (5))){
var inst_29380 = (state_29396[(2)]);
var state_29396__$1 = (function (){var statearr_29413 = state_29396;
(statearr_29413[(11)] = inst_29380);

return statearr_29413;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29396__$1,(12),dchan);
} else {
if((state_val_29397 === (14))){
var inst_29382 = (state_29396[(8)]);
var inst_29387 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_29382);
var state_29396__$1 = state_29396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29396__$1,(16),out,inst_29387);
} else {
if((state_val_29397 === (16))){
var inst_29389 = (state_29396[(2)]);
var state_29396__$1 = (function (){var statearr_29414 = state_29396;
(statearr_29414[(12)] = inst_29389);

return statearr_29414;
})();
var statearr_29415_30498 = state_29396__$1;
(statearr_29415_30498[(2)] = null);

(statearr_29415_30498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29397 === (10))){
var inst_29364 = (state_29396[(2)]);
var inst_29365 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_29396__$1 = (function (){var statearr_29416 = state_29396;
(statearr_29416[(13)] = inst_29364);

return statearr_29416;
})();
var statearr_29417_30499 = state_29396__$1;
(statearr_29417_30499[(2)] = inst_29365);


cljs.core.async.impl.ioc_helpers.process_exception(state_29396__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29397 === (8))){
var inst_29378 = (state_29396[(2)]);
var state_29396__$1 = state_29396;
var statearr_29418_30501 = state_29396__$1;
(statearr_29418_30501[(2)] = inst_29378);

(statearr_29418_30501[(1)] = (5));


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
});})(c__27793__auto___30475,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27626__auto__,c__27793__auto___30475,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27627__auto__ = null;
var cljs$core$async$state_machine__27627__auto____0 = (function (){
var statearr_29419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29419[(0)] = cljs$core$async$state_machine__27627__auto__);

(statearr_29419[(1)] = (1));

return statearr_29419;
});
var cljs$core$async$state_machine__27627__auto____1 = (function (state_29396){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__(state_29396);
if(cljs.core.keyword_identical_QMARK_(result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e29420){if((e29420 instanceof Object)){
var ex__27630__auto__ = e29420;
var statearr_29421_30505 = state_29396;
(statearr_29421_30505[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29420;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30506 = state_29396;
state_29396 = G__30506;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$state_machine__27627__auto__ = function(state_29396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27627__auto____1.call(this,state_29396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27627__auto____0;
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27627__auto____1;
return cljs$core$async$state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27793__auto___30475,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27795__auto__ = (function (){var statearr_29422 = (f__27794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27794__auto__.cljs$core$IFn$_invoke$arity$0() : f__27794__auto__.call(null));
(statearr_29422[(6)] = c__27793__auto___30475);

return statearr_29422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27795__auto__);
});})(c__27793__auto___30475,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29425 = arguments.length;
switch (G__29425) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27793__auto___30508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27793__auto___30508,out){
return (function (){
var f__27794__auto__ = (function (){var switch__27626__auto__ = ((function (c__27793__auto___30508,out){
return (function (state_29457){
var state_val_29458 = (state_29457[(1)]);
if((state_val_29458 === (7))){
var inst_29436 = (state_29457[(7)]);
var inst_29437 = (state_29457[(8)]);
var inst_29436__$1 = (state_29457[(2)]);
var inst_29437__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29436__$1,(0),null);
var inst_29438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29436__$1,(1),null);
var inst_29439 = (inst_29437__$1 == null);
var state_29457__$1 = (function (){var statearr_29459 = state_29457;
(statearr_29459[(7)] = inst_29436__$1);

(statearr_29459[(9)] = inst_29438);

(statearr_29459[(8)] = inst_29437__$1);

return statearr_29459;
})();
if(cljs.core.truth_(inst_29439)){
var statearr_29460_30509 = state_29457__$1;
(statearr_29460_30509[(1)] = (8));

} else {
var statearr_29461_30510 = state_29457__$1;
(statearr_29461_30510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29458 === (1))){
var inst_29426 = cljs.core.vec(chs);
var inst_29427 = inst_29426;
var state_29457__$1 = (function (){var statearr_29462 = state_29457;
(statearr_29462[(10)] = inst_29427);

return statearr_29462;
})();
var statearr_29463_30511 = state_29457__$1;
(statearr_29463_30511[(2)] = null);

(statearr_29463_30511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29458 === (4))){
var inst_29427 = (state_29457[(10)]);
var state_29457__$1 = state_29457;
return cljs.core.async.ioc_alts_BANG_(state_29457__$1,(7),inst_29427);
} else {
if((state_val_29458 === (6))){
var inst_29453 = (state_29457[(2)]);
var state_29457__$1 = state_29457;
var statearr_29464_30513 = state_29457__$1;
(statearr_29464_30513[(2)] = inst_29453);

(statearr_29464_30513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29458 === (3))){
var inst_29455 = (state_29457[(2)]);
var state_29457__$1 = state_29457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29457__$1,inst_29455);
} else {
if((state_val_29458 === (2))){
var inst_29427 = (state_29457[(10)]);
var inst_29429 = cljs.core.count(inst_29427);
var inst_29430 = (inst_29429 > (0));
var state_29457__$1 = state_29457;
if(cljs.core.truth_(inst_29430)){
var statearr_29466_30514 = state_29457__$1;
(statearr_29466_30514[(1)] = (4));

} else {
var statearr_29467_30515 = state_29457__$1;
(statearr_29467_30515[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29458 === (11))){
var inst_29427 = (state_29457[(10)]);
var inst_29446 = (state_29457[(2)]);
var tmp29465 = inst_29427;
var inst_29427__$1 = tmp29465;
var state_29457__$1 = (function (){var statearr_29468 = state_29457;
(statearr_29468[(10)] = inst_29427__$1);

(statearr_29468[(11)] = inst_29446);

return statearr_29468;
})();
var statearr_29469_30516 = state_29457__$1;
(statearr_29469_30516[(2)] = null);

(statearr_29469_30516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29458 === (9))){
var inst_29437 = (state_29457[(8)]);
var state_29457__$1 = state_29457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29457__$1,(11),out,inst_29437);
} else {
if((state_val_29458 === (5))){
var inst_29451 = cljs.core.async.close_BANG_(out);
var state_29457__$1 = state_29457;
var statearr_29470_30517 = state_29457__$1;
(statearr_29470_30517[(2)] = inst_29451);

(statearr_29470_30517[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29458 === (10))){
var inst_29449 = (state_29457[(2)]);
var state_29457__$1 = state_29457;
var statearr_29471_30521 = state_29457__$1;
(statearr_29471_30521[(2)] = inst_29449);

(statearr_29471_30521[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29458 === (8))){
var inst_29427 = (state_29457[(10)]);
var inst_29436 = (state_29457[(7)]);
var inst_29438 = (state_29457[(9)]);
var inst_29437 = (state_29457[(8)]);
var inst_29441 = (function (){var cs = inst_29427;
var vec__29432 = inst_29436;
var v = inst_29437;
var c = inst_29438;
return ((function (cs,vec__29432,v,c,inst_29427,inst_29436,inst_29438,inst_29437,state_val_29458,c__27793__auto___30508,out){
return (function (p1__29423_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__29423_SHARP_);
});
;})(cs,vec__29432,v,c,inst_29427,inst_29436,inst_29438,inst_29437,state_val_29458,c__27793__auto___30508,out))
})();
var inst_29442 = cljs.core.filterv(inst_29441,inst_29427);
var inst_29427__$1 = inst_29442;
var state_29457__$1 = (function (){var statearr_29472 = state_29457;
(statearr_29472[(10)] = inst_29427__$1);

return statearr_29472;
})();
var statearr_29473_30526 = state_29457__$1;
(statearr_29473_30526[(2)] = null);

(statearr_29473_30526[(1)] = (2));


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
});})(c__27793__auto___30508,out))
;
return ((function (switch__27626__auto__,c__27793__auto___30508,out){
return (function() {
var cljs$core$async$state_machine__27627__auto__ = null;
var cljs$core$async$state_machine__27627__auto____0 = (function (){
var statearr_29474 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29474[(0)] = cljs$core$async$state_machine__27627__auto__);

(statearr_29474[(1)] = (1));

return statearr_29474;
});
var cljs$core$async$state_machine__27627__auto____1 = (function (state_29457){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__(state_29457);
if(cljs.core.keyword_identical_QMARK_(result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e29475){if((e29475 instanceof Object)){
var ex__27630__auto__ = e29475;
var statearr_29476_30527 = state_29457;
(statearr_29476_30527[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29475;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30528 = state_29457;
state_29457 = G__30528;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$state_machine__27627__auto__ = function(state_29457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27627__auto____1.call(this,state_29457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27627__auto____0;
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27627__auto____1;
return cljs$core$async$state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27793__auto___30508,out))
})();
var state__27795__auto__ = (function (){var statearr_29477 = (f__27794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27794__auto__.cljs$core$IFn$_invoke$arity$0() : f__27794__auto__.call(null));
(statearr_29477[(6)] = c__27793__auto___30508);

return statearr_29477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27795__auto__);
});})(c__27793__auto___30508,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

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
var G__29479 = arguments.length;
switch (G__29479) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27793__auto___30530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27793__auto___30530,out){
return (function (){
var f__27794__auto__ = (function (){var switch__27626__auto__ = ((function (c__27793__auto___30530,out){
return (function (state_29503){
var state_val_29504 = (state_29503[(1)]);
if((state_val_29504 === (7))){
var inst_29485 = (state_29503[(7)]);
var inst_29485__$1 = (state_29503[(2)]);
var inst_29486 = (inst_29485__$1 == null);
var inst_29487 = cljs.core.not(inst_29486);
var state_29503__$1 = (function (){var statearr_29505 = state_29503;
(statearr_29505[(7)] = inst_29485__$1);

return statearr_29505;
})();
if(inst_29487){
var statearr_29506_30532 = state_29503__$1;
(statearr_29506_30532[(1)] = (8));

} else {
var statearr_29507_30533 = state_29503__$1;
(statearr_29507_30533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (1))){
var inst_29480 = (0);
var state_29503__$1 = (function (){var statearr_29508 = state_29503;
(statearr_29508[(8)] = inst_29480);

return statearr_29508;
})();
var statearr_29509_30534 = state_29503__$1;
(statearr_29509_30534[(2)] = null);

(statearr_29509_30534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (4))){
var state_29503__$1 = state_29503;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29503__$1,(7),ch);
} else {
if((state_val_29504 === (6))){
var inst_29498 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
var statearr_29510_30535 = state_29503__$1;
(statearr_29510_30535[(2)] = inst_29498);

(statearr_29510_30535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (3))){
var inst_29500 = (state_29503[(2)]);
var inst_29501 = cljs.core.async.close_BANG_(out);
var state_29503__$1 = (function (){var statearr_29511 = state_29503;
(statearr_29511[(9)] = inst_29500);

return statearr_29511;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29503__$1,inst_29501);
} else {
if((state_val_29504 === (2))){
var inst_29480 = (state_29503[(8)]);
var inst_29482 = (inst_29480 < n);
var state_29503__$1 = state_29503;
if(cljs.core.truth_(inst_29482)){
var statearr_29512_30537 = state_29503__$1;
(statearr_29512_30537[(1)] = (4));

} else {
var statearr_29513_30538 = state_29503__$1;
(statearr_29513_30538[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (11))){
var inst_29480 = (state_29503[(8)]);
var inst_29490 = (state_29503[(2)]);
var inst_29491 = (inst_29480 + (1));
var inst_29480__$1 = inst_29491;
var state_29503__$1 = (function (){var statearr_29514 = state_29503;
(statearr_29514[(10)] = inst_29490);

(statearr_29514[(8)] = inst_29480__$1);

return statearr_29514;
})();
var statearr_29515_30539 = state_29503__$1;
(statearr_29515_30539[(2)] = null);

(statearr_29515_30539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (9))){
var state_29503__$1 = state_29503;
var statearr_29516_30540 = state_29503__$1;
(statearr_29516_30540[(2)] = null);

(statearr_29516_30540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (5))){
var state_29503__$1 = state_29503;
var statearr_29517_30541 = state_29503__$1;
(statearr_29517_30541[(2)] = null);

(statearr_29517_30541[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (10))){
var inst_29495 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
var statearr_29518_30542 = state_29503__$1;
(statearr_29518_30542[(2)] = inst_29495);

(statearr_29518_30542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (8))){
var inst_29485 = (state_29503[(7)]);
var state_29503__$1 = state_29503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29503__$1,(11),out,inst_29485);
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
});})(c__27793__auto___30530,out))
;
return ((function (switch__27626__auto__,c__27793__auto___30530,out){
return (function() {
var cljs$core$async$state_machine__27627__auto__ = null;
var cljs$core$async$state_machine__27627__auto____0 = (function (){
var statearr_29519 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29519[(0)] = cljs$core$async$state_machine__27627__auto__);

(statearr_29519[(1)] = (1));

return statearr_29519;
});
var cljs$core$async$state_machine__27627__auto____1 = (function (state_29503){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__(state_29503);
if(cljs.core.keyword_identical_QMARK_(result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e29520){if((e29520 instanceof Object)){
var ex__27630__auto__ = e29520;
var statearr_29521_30543 = state_29503;
(statearr_29521_30543[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29520;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30544 = state_29503;
state_29503 = G__30544;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$state_machine__27627__auto__ = function(state_29503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27627__auto____1.call(this,state_29503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27627__auto____0;
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27627__auto____1;
return cljs$core$async$state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27793__auto___30530,out))
})();
var state__27795__auto__ = (function (){var statearr_29522 = (f__27794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27794__auto__.cljs$core$IFn$_invoke$arity$0() : f__27794__auto__.call(null));
(statearr_29522[(6)] = c__27793__auto___30530);

return statearr_29522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27795__auto__);
});})(c__27793__auto___30530,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29524 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29524 = (function (f,ch,meta29525){
this.f = f;
this.ch = ch;
this.meta29525 = meta29525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29526,meta29525__$1){
var self__ = this;
var _29526__$1 = this;
return (new cljs.core.async.t_cljs$core$async29524(self__.f,self__.ch,meta29525__$1));
});

cljs.core.async.t_cljs$core$async29524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29526){
var self__ = this;
var _29526__$1 = this;
return self__.meta29525;
});

cljs.core.async.t_cljs$core$async29524.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29524.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async29524.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async29524.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29524.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29527 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29527 = (function (f,ch,meta29525,_,fn1,meta29528){
this.f = f;
this.ch = ch;
this.meta29525 = meta29525;
this._ = _;
this.fn1 = fn1;
this.meta29528 = meta29528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29529,meta29528__$1){
var self__ = this;
var _29529__$1 = this;
return (new cljs.core.async.t_cljs$core$async29527(self__.f,self__.ch,self__.meta29525,self__._,self__.fn1,meta29528__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29527.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29529){
var self__ = this;
var _29529__$1 = this;
return self__.meta29528;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29527.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29527.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29527.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29527.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29523_SHARP_){
var G__29530 = (((p1__29523_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__29523_SHARP_) : self__.f.call(null,p1__29523_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__29530) : f1.call(null,G__29530));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29527.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29525","meta29525",-1460357962,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29524","cljs.core.async/t_cljs$core$async29524",-2062910608,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29528","meta29528",644807599,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29527.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29527";

cljs.core.async.t_cljs$core$async29527.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async29527");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29527.
 */
cljs.core.async.__GT_t_cljs$core$async29527 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29527(f__$1,ch__$1,meta29525__$1,___$2,fn1__$1,meta29528){
return (new cljs.core.async.t_cljs$core$async29527(f__$1,ch__$1,meta29525__$1,___$2,fn1__$1,meta29528));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29527(self__.f,self__.ch,self__.meta29525,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__29531 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__29531) : self__.f.call(null,G__29531));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29524.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29524.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29524.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29525","meta29525",-1460357962,null)], null);
});

cljs.core.async.t_cljs$core$async29524.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29524";

cljs.core.async.t_cljs$core$async29524.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async29524");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29524.
 */
cljs.core.async.__GT_t_cljs$core$async29524 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29524(f__$1,ch__$1,meta29525){
return (new cljs.core.async.t_cljs$core$async29524(f__$1,ch__$1,meta29525));
});

}

return (new cljs.core.async.t_cljs$core$async29524(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29532 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29532 = (function (f,ch,meta29533){
this.f = f;
this.ch = ch;
this.meta29533 = meta29533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29534,meta29533__$1){
var self__ = this;
var _29534__$1 = this;
return (new cljs.core.async.t_cljs$core$async29532(self__.f,self__.ch,meta29533__$1));
});

cljs.core.async.t_cljs$core$async29532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29534){
var self__ = this;
var _29534__$1 = this;
return self__.meta29533;
});

cljs.core.async.t_cljs$core$async29532.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29532.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async29532.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29532.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29532.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29532.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async29532.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29533","meta29533",1661279877,null)], null);
});

cljs.core.async.t_cljs$core$async29532.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29532";

cljs.core.async.t_cljs$core$async29532.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async29532");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29532.
 */
cljs.core.async.__GT_t_cljs$core$async29532 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29532(f__$1,ch__$1,meta29533){
return (new cljs.core.async.t_cljs$core$async29532(f__$1,ch__$1,meta29533));
});

}

return (new cljs.core.async.t_cljs$core$async29532(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29535 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29535 = (function (p,ch,meta29536){
this.p = p;
this.ch = ch;
this.meta29536 = meta29536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29537,meta29536__$1){
var self__ = this;
var _29537__$1 = this;
return (new cljs.core.async.t_cljs$core$async29535(self__.p,self__.ch,meta29536__$1));
});

cljs.core.async.t_cljs$core$async29535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29537){
var self__ = this;
var _29537__$1 = this;
return self__.meta29536;
});

cljs.core.async.t_cljs$core$async29535.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29535.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async29535.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async29535.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29535.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29535.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29535.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29535.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29536","meta29536",1612062501,null)], null);
});

cljs.core.async.t_cljs$core$async29535.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29535";

cljs.core.async.t_cljs$core$async29535.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async29535");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29535.
 */
cljs.core.async.__GT_t_cljs$core$async29535 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29535(p__$1,ch__$1,meta29536){
return (new cljs.core.async.t_cljs$core$async29535(p__$1,ch__$1,meta29536));
});

}

return (new cljs.core.async.t_cljs$core$async29535(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29539 = arguments.length;
switch (G__29539) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27793__auto___30561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27793__auto___30561,out){
return (function (){
var f__27794__auto__ = (function (){var switch__27626__auto__ = ((function (c__27793__auto___30561,out){
return (function (state_29560){
var state_val_29561 = (state_29560[(1)]);
if((state_val_29561 === (7))){
var inst_29556 = (state_29560[(2)]);
var state_29560__$1 = state_29560;
var statearr_29562_30563 = state_29560__$1;
(statearr_29562_30563[(2)] = inst_29556);

(statearr_29562_30563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (1))){
var state_29560__$1 = state_29560;
var statearr_29563_30564 = state_29560__$1;
(statearr_29563_30564[(2)] = null);

(statearr_29563_30564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (4))){
var inst_29542 = (state_29560[(7)]);
var inst_29542__$1 = (state_29560[(2)]);
var inst_29543 = (inst_29542__$1 == null);
var state_29560__$1 = (function (){var statearr_29564 = state_29560;
(statearr_29564[(7)] = inst_29542__$1);

return statearr_29564;
})();
if(cljs.core.truth_(inst_29543)){
var statearr_29565_30566 = state_29560__$1;
(statearr_29565_30566[(1)] = (5));

} else {
var statearr_29566_30567 = state_29560__$1;
(statearr_29566_30567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (6))){
var inst_29542 = (state_29560[(7)]);
var inst_29547 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29542) : p.call(null,inst_29542));
var state_29560__$1 = state_29560;
if(cljs.core.truth_(inst_29547)){
var statearr_29567_30568 = state_29560__$1;
(statearr_29567_30568[(1)] = (8));

} else {
var statearr_29568_30569 = state_29560__$1;
(statearr_29568_30569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (3))){
var inst_29558 = (state_29560[(2)]);
var state_29560__$1 = state_29560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29560__$1,inst_29558);
} else {
if((state_val_29561 === (2))){
var state_29560__$1 = state_29560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29560__$1,(4),ch);
} else {
if((state_val_29561 === (11))){
var inst_29550 = (state_29560[(2)]);
var state_29560__$1 = state_29560;
var statearr_29569_30573 = state_29560__$1;
(statearr_29569_30573[(2)] = inst_29550);

(statearr_29569_30573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (9))){
var state_29560__$1 = state_29560;
var statearr_29570_30574 = state_29560__$1;
(statearr_29570_30574[(2)] = null);

(statearr_29570_30574[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (5))){
var inst_29545 = cljs.core.async.close_BANG_(out);
var state_29560__$1 = state_29560;
var statearr_29571_30579 = state_29560__$1;
(statearr_29571_30579[(2)] = inst_29545);

(statearr_29571_30579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (10))){
var inst_29553 = (state_29560[(2)]);
var state_29560__$1 = (function (){var statearr_29572 = state_29560;
(statearr_29572[(8)] = inst_29553);

return statearr_29572;
})();
var statearr_29573_30583 = state_29560__$1;
(statearr_29573_30583[(2)] = null);

(statearr_29573_30583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (8))){
var inst_29542 = (state_29560[(7)]);
var state_29560__$1 = state_29560;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29560__$1,(11),out,inst_29542);
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
});})(c__27793__auto___30561,out))
;
return ((function (switch__27626__auto__,c__27793__auto___30561,out){
return (function() {
var cljs$core$async$state_machine__27627__auto__ = null;
var cljs$core$async$state_machine__27627__auto____0 = (function (){
var statearr_29574 = [null,null,null,null,null,null,null,null,null];
(statearr_29574[(0)] = cljs$core$async$state_machine__27627__auto__);

(statearr_29574[(1)] = (1));

return statearr_29574;
});
var cljs$core$async$state_machine__27627__auto____1 = (function (state_29560){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__(state_29560);
if(cljs.core.keyword_identical_QMARK_(result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e29575){if((e29575 instanceof Object)){
var ex__27630__auto__ = e29575;
var statearr_29576_30587 = state_29560;
(statearr_29576_30587[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29575;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30588 = state_29560;
state_29560 = G__30588;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$state_machine__27627__auto__ = function(state_29560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27627__auto____1.call(this,state_29560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27627__auto____0;
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27627__auto____1;
return cljs$core$async$state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27793__auto___30561,out))
})();
var state__27795__auto__ = (function (){var statearr_29577 = (f__27794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27794__auto__.cljs$core$IFn$_invoke$arity$0() : f__27794__auto__.call(null));
(statearr_29577[(6)] = c__27793__auto___30561);

return statearr_29577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27795__auto__);
});})(c__27793__auto___30561,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29579 = arguments.length;
switch (G__29579) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27793__auto__){
return (function (){
var f__27794__auto__ = (function (){var switch__27626__auto__ = ((function (c__27793__auto__){
return (function (state_29641){
var state_val_29642 = (state_29641[(1)]);
if((state_val_29642 === (7))){
var inst_29637 = (state_29641[(2)]);
var state_29641__$1 = state_29641;
var statearr_29643_30596 = state_29641__$1;
(statearr_29643_30596[(2)] = inst_29637);

(statearr_29643_30596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (20))){
var inst_29607 = (state_29641[(7)]);
var inst_29618 = (state_29641[(2)]);
var inst_29619 = cljs.core.next(inst_29607);
var inst_29593 = inst_29619;
var inst_29594 = null;
var inst_29595 = (0);
var inst_29596 = (0);
var state_29641__$1 = (function (){var statearr_29644 = state_29641;
(statearr_29644[(8)] = inst_29618);

(statearr_29644[(9)] = inst_29596);

(statearr_29644[(10)] = inst_29593);

(statearr_29644[(11)] = inst_29594);

(statearr_29644[(12)] = inst_29595);

return statearr_29644;
})();
var statearr_29645_30597 = state_29641__$1;
(statearr_29645_30597[(2)] = null);

(statearr_29645_30597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (1))){
var state_29641__$1 = state_29641;
var statearr_29646_30598 = state_29641__$1;
(statearr_29646_30598[(2)] = null);

(statearr_29646_30598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (4))){
var inst_29582 = (state_29641[(13)]);
var inst_29582__$1 = (state_29641[(2)]);
var inst_29583 = (inst_29582__$1 == null);
var state_29641__$1 = (function (){var statearr_29647 = state_29641;
(statearr_29647[(13)] = inst_29582__$1);

return statearr_29647;
})();
if(cljs.core.truth_(inst_29583)){
var statearr_29648_30600 = state_29641__$1;
(statearr_29648_30600[(1)] = (5));

} else {
var statearr_29649_30601 = state_29641__$1;
(statearr_29649_30601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (15))){
var state_29641__$1 = state_29641;
var statearr_29653_30602 = state_29641__$1;
(statearr_29653_30602[(2)] = null);

(statearr_29653_30602[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (21))){
var state_29641__$1 = state_29641;
var statearr_29654_30603 = state_29641__$1;
(statearr_29654_30603[(2)] = null);

(statearr_29654_30603[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (13))){
var inst_29596 = (state_29641[(9)]);
var inst_29593 = (state_29641[(10)]);
var inst_29594 = (state_29641[(11)]);
var inst_29595 = (state_29641[(12)]);
var inst_29603 = (state_29641[(2)]);
var inst_29604 = (inst_29596 + (1));
var tmp29650 = inst_29593;
var tmp29651 = inst_29594;
var tmp29652 = inst_29595;
var inst_29593__$1 = tmp29650;
var inst_29594__$1 = tmp29651;
var inst_29595__$1 = tmp29652;
var inst_29596__$1 = inst_29604;
var state_29641__$1 = (function (){var statearr_29655 = state_29641;
(statearr_29655[(14)] = inst_29603);

(statearr_29655[(9)] = inst_29596__$1);

(statearr_29655[(10)] = inst_29593__$1);

(statearr_29655[(11)] = inst_29594__$1);

(statearr_29655[(12)] = inst_29595__$1);

return statearr_29655;
})();
var statearr_29656_30613 = state_29641__$1;
(statearr_29656_30613[(2)] = null);

(statearr_29656_30613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (22))){
var state_29641__$1 = state_29641;
var statearr_29657_30614 = state_29641__$1;
(statearr_29657_30614[(2)] = null);

(statearr_29657_30614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (6))){
var inst_29582 = (state_29641[(13)]);
var inst_29591 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29582) : f.call(null,inst_29582));
var inst_29592 = cljs.core.seq(inst_29591);
var inst_29593 = inst_29592;
var inst_29594 = null;
var inst_29595 = (0);
var inst_29596 = (0);
var state_29641__$1 = (function (){var statearr_29658 = state_29641;
(statearr_29658[(9)] = inst_29596);

(statearr_29658[(10)] = inst_29593);

(statearr_29658[(11)] = inst_29594);

(statearr_29658[(12)] = inst_29595);

return statearr_29658;
})();
var statearr_29659_30621 = state_29641__$1;
(statearr_29659_30621[(2)] = null);

(statearr_29659_30621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (17))){
var inst_29607 = (state_29641[(7)]);
var inst_29611 = cljs.core.chunk_first(inst_29607);
var inst_29612 = cljs.core.chunk_rest(inst_29607);
var inst_29613 = cljs.core.count(inst_29611);
var inst_29593 = inst_29612;
var inst_29594 = inst_29611;
var inst_29595 = inst_29613;
var inst_29596 = (0);
var state_29641__$1 = (function (){var statearr_29660 = state_29641;
(statearr_29660[(9)] = inst_29596);

(statearr_29660[(10)] = inst_29593);

(statearr_29660[(11)] = inst_29594);

(statearr_29660[(12)] = inst_29595);

return statearr_29660;
})();
var statearr_29661_30622 = state_29641__$1;
(statearr_29661_30622[(2)] = null);

(statearr_29661_30622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (3))){
var inst_29639 = (state_29641[(2)]);
var state_29641__$1 = state_29641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29641__$1,inst_29639);
} else {
if((state_val_29642 === (12))){
var inst_29627 = (state_29641[(2)]);
var state_29641__$1 = state_29641;
var statearr_29662_30623 = state_29641__$1;
(statearr_29662_30623[(2)] = inst_29627);

(statearr_29662_30623[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (2))){
var state_29641__$1 = state_29641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29641__$1,(4),in$);
} else {
if((state_val_29642 === (23))){
var inst_29635 = (state_29641[(2)]);
var state_29641__$1 = state_29641;
var statearr_29663_30624 = state_29641__$1;
(statearr_29663_30624[(2)] = inst_29635);

(statearr_29663_30624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (19))){
var inst_29622 = (state_29641[(2)]);
var state_29641__$1 = state_29641;
var statearr_29664_30625 = state_29641__$1;
(statearr_29664_30625[(2)] = inst_29622);

(statearr_29664_30625[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (11))){
var inst_29593 = (state_29641[(10)]);
var inst_29607 = (state_29641[(7)]);
var inst_29607__$1 = cljs.core.seq(inst_29593);
var state_29641__$1 = (function (){var statearr_29665 = state_29641;
(statearr_29665[(7)] = inst_29607__$1);

return statearr_29665;
})();
if(inst_29607__$1){
var statearr_29666_30626 = state_29641__$1;
(statearr_29666_30626[(1)] = (14));

} else {
var statearr_29667_30627 = state_29641__$1;
(statearr_29667_30627[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (9))){
var inst_29629 = (state_29641[(2)]);
var inst_29630 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_29641__$1 = (function (){var statearr_29668 = state_29641;
(statearr_29668[(15)] = inst_29629);

return statearr_29668;
})();
if(cljs.core.truth_(inst_29630)){
var statearr_29669_30628 = state_29641__$1;
(statearr_29669_30628[(1)] = (21));

} else {
var statearr_29670_30629 = state_29641__$1;
(statearr_29670_30629[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (5))){
var inst_29585 = cljs.core.async.close_BANG_(out);
var state_29641__$1 = state_29641;
var statearr_29671_30630 = state_29641__$1;
(statearr_29671_30630[(2)] = inst_29585);

(statearr_29671_30630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (14))){
var inst_29607 = (state_29641[(7)]);
var inst_29609 = cljs.core.chunked_seq_QMARK_(inst_29607);
var state_29641__$1 = state_29641;
if(inst_29609){
var statearr_29672_30637 = state_29641__$1;
(statearr_29672_30637[(1)] = (17));

} else {
var statearr_29673_30638 = state_29641__$1;
(statearr_29673_30638[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (16))){
var inst_29625 = (state_29641[(2)]);
var state_29641__$1 = state_29641;
var statearr_29674_30639 = state_29641__$1;
(statearr_29674_30639[(2)] = inst_29625);

(statearr_29674_30639[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (10))){
var inst_29596 = (state_29641[(9)]);
var inst_29594 = (state_29641[(11)]);
var inst_29601 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29594,inst_29596);
var state_29641__$1 = state_29641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29641__$1,(13),out,inst_29601);
} else {
if((state_val_29642 === (18))){
var inst_29607 = (state_29641[(7)]);
var inst_29616 = cljs.core.first(inst_29607);
var state_29641__$1 = state_29641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29641__$1,(20),out,inst_29616);
} else {
if((state_val_29642 === (8))){
var inst_29596 = (state_29641[(9)]);
var inst_29595 = (state_29641[(12)]);
var inst_29598 = (inst_29596 < inst_29595);
var inst_29599 = inst_29598;
var state_29641__$1 = state_29641;
if(cljs.core.truth_(inst_29599)){
var statearr_29675_30640 = state_29641__$1;
(statearr_29675_30640[(1)] = (10));

} else {
var statearr_29676_30641 = state_29641__$1;
(statearr_29676_30641[(1)] = (11));

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
});})(c__27793__auto__))
;
return ((function (switch__27626__auto__,c__27793__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27627__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27627__auto____0 = (function (){
var statearr_29677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29677[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27627__auto__);

(statearr_29677[(1)] = (1));

return statearr_29677;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27627__auto____1 = (function (state_29641){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__(state_29641);
if(cljs.core.keyword_identical_QMARK_(result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e29678){if((e29678 instanceof Object)){
var ex__27630__auto__ = e29678;
var statearr_29679_30642 = state_29641;
(statearr_29679_30642[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29678;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30643 = state_29641;
state_29641 = G__30643;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27627__auto__ = function(state_29641){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27627__auto____1.call(this,state_29641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27627__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27627__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27793__auto__))
})();
var state__27795__auto__ = (function (){var statearr_29680 = (f__27794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27794__auto__.cljs$core$IFn$_invoke$arity$0() : f__27794__auto__.call(null));
(statearr_29680[(6)] = c__27793__auto__);

return statearr_29680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27795__auto__);
});})(c__27793__auto__))
);

return c__27793__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29682 = arguments.length;
switch (G__29682) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29684 = arguments.length;
switch (G__29684) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29686 = arguments.length;
switch (G__29686) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27793__auto___30653 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27793__auto___30653,out){
return (function (){
var f__27794__auto__ = (function (){var switch__27626__auto__ = ((function (c__27793__auto___30653,out){
return (function (state_29710){
var state_val_29711 = (state_29710[(1)]);
if((state_val_29711 === (7))){
var inst_29705 = (state_29710[(2)]);
var state_29710__$1 = state_29710;
var statearr_29712_30654 = state_29710__$1;
(statearr_29712_30654[(2)] = inst_29705);

(statearr_29712_30654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29711 === (1))){
var inst_29687 = null;
var state_29710__$1 = (function (){var statearr_29713 = state_29710;
(statearr_29713[(7)] = inst_29687);

return statearr_29713;
})();
var statearr_29714_30661 = state_29710__$1;
(statearr_29714_30661[(2)] = null);

(statearr_29714_30661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29711 === (4))){
var inst_29690 = (state_29710[(8)]);
var inst_29690__$1 = (state_29710[(2)]);
var inst_29691 = (inst_29690__$1 == null);
var inst_29692 = cljs.core.not(inst_29691);
var state_29710__$1 = (function (){var statearr_29715 = state_29710;
(statearr_29715[(8)] = inst_29690__$1);

return statearr_29715;
})();
if(inst_29692){
var statearr_29716_30662 = state_29710__$1;
(statearr_29716_30662[(1)] = (5));

} else {
var statearr_29717_30663 = state_29710__$1;
(statearr_29717_30663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29711 === (6))){
var state_29710__$1 = state_29710;
var statearr_29718_30664 = state_29710__$1;
(statearr_29718_30664[(2)] = null);

(statearr_29718_30664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29711 === (3))){
var inst_29707 = (state_29710[(2)]);
var inst_29708 = cljs.core.async.close_BANG_(out);
var state_29710__$1 = (function (){var statearr_29719 = state_29710;
(statearr_29719[(9)] = inst_29707);

return statearr_29719;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29710__$1,inst_29708);
} else {
if((state_val_29711 === (2))){
var state_29710__$1 = state_29710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29710__$1,(4),ch);
} else {
if((state_val_29711 === (11))){
var inst_29690 = (state_29710[(8)]);
var inst_29699 = (state_29710[(2)]);
var inst_29687 = inst_29690;
var state_29710__$1 = (function (){var statearr_29720 = state_29710;
(statearr_29720[(7)] = inst_29687);

(statearr_29720[(10)] = inst_29699);

return statearr_29720;
})();
var statearr_29721_30665 = state_29710__$1;
(statearr_29721_30665[(2)] = null);

(statearr_29721_30665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29711 === (9))){
var inst_29690 = (state_29710[(8)]);
var state_29710__$1 = state_29710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29710__$1,(11),out,inst_29690);
} else {
if((state_val_29711 === (5))){
var inst_29687 = (state_29710[(7)]);
var inst_29690 = (state_29710[(8)]);
var inst_29694 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29690,inst_29687);
var state_29710__$1 = state_29710;
if(inst_29694){
var statearr_29723_30669 = state_29710__$1;
(statearr_29723_30669[(1)] = (8));

} else {
var statearr_29724_30670 = state_29710__$1;
(statearr_29724_30670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29711 === (10))){
var inst_29702 = (state_29710[(2)]);
var state_29710__$1 = state_29710;
var statearr_29725_30671 = state_29710__$1;
(statearr_29725_30671[(2)] = inst_29702);

(statearr_29725_30671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29711 === (8))){
var inst_29687 = (state_29710[(7)]);
var tmp29722 = inst_29687;
var inst_29687__$1 = tmp29722;
var state_29710__$1 = (function (){var statearr_29726 = state_29710;
(statearr_29726[(7)] = inst_29687__$1);

return statearr_29726;
})();
var statearr_29727_30675 = state_29710__$1;
(statearr_29727_30675[(2)] = null);

(statearr_29727_30675[(1)] = (2));


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
});})(c__27793__auto___30653,out))
;
return ((function (switch__27626__auto__,c__27793__auto___30653,out){
return (function() {
var cljs$core$async$state_machine__27627__auto__ = null;
var cljs$core$async$state_machine__27627__auto____0 = (function (){
var statearr_29728 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29728[(0)] = cljs$core$async$state_machine__27627__auto__);

(statearr_29728[(1)] = (1));

return statearr_29728;
});
var cljs$core$async$state_machine__27627__auto____1 = (function (state_29710){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__(state_29710);
if(cljs.core.keyword_identical_QMARK_(result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e29729){if((e29729 instanceof Object)){
var ex__27630__auto__ = e29729;
var statearr_29730_30678 = state_29710;
(statearr_29730_30678[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29729;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30679 = state_29710;
state_29710 = G__30679;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$state_machine__27627__auto__ = function(state_29710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27627__auto____1.call(this,state_29710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27627__auto____0;
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27627__auto____1;
return cljs$core$async$state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27793__auto___30653,out))
})();
var state__27795__auto__ = (function (){var statearr_29731 = (f__27794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27794__auto__.cljs$core$IFn$_invoke$arity$0() : f__27794__auto__.call(null));
(statearr_29731[(6)] = c__27793__auto___30653);

return statearr_29731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27795__auto__);
});})(c__27793__auto___30653,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29733 = arguments.length;
switch (G__29733) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27793__auto___30682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27793__auto___30682,out){
return (function (){
var f__27794__auto__ = (function (){var switch__27626__auto__ = ((function (c__27793__auto___30682,out){
return (function (state_29771){
var state_val_29772 = (state_29771[(1)]);
if((state_val_29772 === (7))){
var inst_29767 = (state_29771[(2)]);
var state_29771__$1 = state_29771;
var statearr_29773_30684 = state_29771__$1;
(statearr_29773_30684[(2)] = inst_29767);

(statearr_29773_30684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (1))){
var inst_29734 = (new Array(n));
var inst_29735 = inst_29734;
var inst_29736 = (0);
var state_29771__$1 = (function (){var statearr_29774 = state_29771;
(statearr_29774[(7)] = inst_29736);

(statearr_29774[(8)] = inst_29735);

return statearr_29774;
})();
var statearr_29775_30685 = state_29771__$1;
(statearr_29775_30685[(2)] = null);

(statearr_29775_30685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (4))){
var inst_29739 = (state_29771[(9)]);
var inst_29739__$1 = (state_29771[(2)]);
var inst_29740 = (inst_29739__$1 == null);
var inst_29741 = cljs.core.not(inst_29740);
var state_29771__$1 = (function (){var statearr_29776 = state_29771;
(statearr_29776[(9)] = inst_29739__$1);

return statearr_29776;
})();
if(inst_29741){
var statearr_29777_30686 = state_29771__$1;
(statearr_29777_30686[(1)] = (5));

} else {
var statearr_29778_30687 = state_29771__$1;
(statearr_29778_30687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (15))){
var inst_29761 = (state_29771[(2)]);
var state_29771__$1 = state_29771;
var statearr_29779_30688 = state_29771__$1;
(statearr_29779_30688[(2)] = inst_29761);

(statearr_29779_30688[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (13))){
var state_29771__$1 = state_29771;
var statearr_29780_30689 = state_29771__$1;
(statearr_29780_30689[(2)] = null);

(statearr_29780_30689[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (6))){
var inst_29736 = (state_29771[(7)]);
var inst_29757 = (inst_29736 > (0));
var state_29771__$1 = state_29771;
if(cljs.core.truth_(inst_29757)){
var statearr_29781_30690 = state_29771__$1;
(statearr_29781_30690[(1)] = (12));

} else {
var statearr_29782_30691 = state_29771__$1;
(statearr_29782_30691[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (3))){
var inst_29769 = (state_29771[(2)]);
var state_29771__$1 = state_29771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29771__$1,inst_29769);
} else {
if((state_val_29772 === (12))){
var inst_29735 = (state_29771[(8)]);
var inst_29759 = cljs.core.vec(inst_29735);
var state_29771__$1 = state_29771;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29771__$1,(15),out,inst_29759);
} else {
if((state_val_29772 === (2))){
var state_29771__$1 = state_29771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29771__$1,(4),ch);
} else {
if((state_val_29772 === (11))){
var inst_29751 = (state_29771[(2)]);
var inst_29752 = (new Array(n));
var inst_29735 = inst_29752;
var inst_29736 = (0);
var state_29771__$1 = (function (){var statearr_29783 = state_29771;
(statearr_29783[(7)] = inst_29736);

(statearr_29783[(10)] = inst_29751);

(statearr_29783[(8)] = inst_29735);

return statearr_29783;
})();
var statearr_29784_30701 = state_29771__$1;
(statearr_29784_30701[(2)] = null);

(statearr_29784_30701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (9))){
var inst_29735 = (state_29771[(8)]);
var inst_29749 = cljs.core.vec(inst_29735);
var state_29771__$1 = state_29771;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29771__$1,(11),out,inst_29749);
} else {
if((state_val_29772 === (5))){
var inst_29739 = (state_29771[(9)]);
var inst_29736 = (state_29771[(7)]);
var inst_29744 = (state_29771[(11)]);
var inst_29735 = (state_29771[(8)]);
var inst_29743 = (inst_29735[inst_29736] = inst_29739);
var inst_29744__$1 = (inst_29736 + (1));
var inst_29745 = (inst_29744__$1 < n);
var state_29771__$1 = (function (){var statearr_29785 = state_29771;
(statearr_29785[(11)] = inst_29744__$1);

(statearr_29785[(12)] = inst_29743);

return statearr_29785;
})();
if(cljs.core.truth_(inst_29745)){
var statearr_29786_30703 = state_29771__$1;
(statearr_29786_30703[(1)] = (8));

} else {
var statearr_29787_30704 = state_29771__$1;
(statearr_29787_30704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (14))){
var inst_29764 = (state_29771[(2)]);
var inst_29765 = cljs.core.async.close_BANG_(out);
var state_29771__$1 = (function (){var statearr_29789 = state_29771;
(statearr_29789[(13)] = inst_29764);

return statearr_29789;
})();
var statearr_29790_30706 = state_29771__$1;
(statearr_29790_30706[(2)] = inst_29765);

(statearr_29790_30706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (10))){
var inst_29755 = (state_29771[(2)]);
var state_29771__$1 = state_29771;
var statearr_29791_30708 = state_29771__$1;
(statearr_29791_30708[(2)] = inst_29755);

(statearr_29791_30708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (8))){
var inst_29744 = (state_29771[(11)]);
var inst_29735 = (state_29771[(8)]);
var tmp29788 = inst_29735;
var inst_29735__$1 = tmp29788;
var inst_29736 = inst_29744;
var state_29771__$1 = (function (){var statearr_29792 = state_29771;
(statearr_29792[(7)] = inst_29736);

(statearr_29792[(8)] = inst_29735__$1);

return statearr_29792;
})();
var statearr_29793_30710 = state_29771__$1;
(statearr_29793_30710[(2)] = null);

(statearr_29793_30710[(1)] = (2));


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
});})(c__27793__auto___30682,out))
;
return ((function (switch__27626__auto__,c__27793__auto___30682,out){
return (function() {
var cljs$core$async$state_machine__27627__auto__ = null;
var cljs$core$async$state_machine__27627__auto____0 = (function (){
var statearr_29794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29794[(0)] = cljs$core$async$state_machine__27627__auto__);

(statearr_29794[(1)] = (1));

return statearr_29794;
});
var cljs$core$async$state_machine__27627__auto____1 = (function (state_29771){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__(state_29771);
if(cljs.core.keyword_identical_QMARK_(result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e29795){if((e29795 instanceof Object)){
var ex__27630__auto__ = e29795;
var statearr_29796_30712 = state_29771;
(statearr_29796_30712[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29795;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30713 = state_29771;
state_29771 = G__30713;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$state_machine__27627__auto__ = function(state_29771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27627__auto____1.call(this,state_29771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27627__auto____0;
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27627__auto____1;
return cljs$core$async$state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27793__auto___30682,out))
})();
var state__27795__auto__ = (function (){var statearr_29797 = (f__27794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27794__auto__.cljs$core$IFn$_invoke$arity$0() : f__27794__auto__.call(null));
(statearr_29797[(6)] = c__27793__auto___30682);

return statearr_29797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27795__auto__);
});})(c__27793__auto___30682,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29799 = arguments.length;
switch (G__29799) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27793__auto___30715 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27793__auto___30715,out){
return (function (){
var f__27794__auto__ = (function (){var switch__27626__auto__ = ((function (c__27793__auto___30715,out){
return (function (state_29841){
var state_val_29842 = (state_29841[(1)]);
if((state_val_29842 === (7))){
var inst_29837 = (state_29841[(2)]);
var state_29841__$1 = state_29841;
var statearr_29843_30716 = state_29841__$1;
(statearr_29843_30716[(2)] = inst_29837);

(statearr_29843_30716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (1))){
var inst_29800 = [];
var inst_29801 = inst_29800;
var inst_29802 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29841__$1 = (function (){var statearr_29844 = state_29841;
(statearr_29844[(7)] = inst_29801);

(statearr_29844[(8)] = inst_29802);

return statearr_29844;
})();
var statearr_29845_30717 = state_29841__$1;
(statearr_29845_30717[(2)] = null);

(statearr_29845_30717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (4))){
var inst_29805 = (state_29841[(9)]);
var inst_29805__$1 = (state_29841[(2)]);
var inst_29806 = (inst_29805__$1 == null);
var inst_29807 = cljs.core.not(inst_29806);
var state_29841__$1 = (function (){var statearr_29846 = state_29841;
(statearr_29846[(9)] = inst_29805__$1);

return statearr_29846;
})();
if(inst_29807){
var statearr_29847_30718 = state_29841__$1;
(statearr_29847_30718[(1)] = (5));

} else {
var statearr_29848_30719 = state_29841__$1;
(statearr_29848_30719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (15))){
var inst_29831 = (state_29841[(2)]);
var state_29841__$1 = state_29841;
var statearr_29849_30720 = state_29841__$1;
(statearr_29849_30720[(2)] = inst_29831);

(statearr_29849_30720[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (13))){
var state_29841__$1 = state_29841;
var statearr_29850_30721 = state_29841__$1;
(statearr_29850_30721[(2)] = null);

(statearr_29850_30721[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (6))){
var inst_29801 = (state_29841[(7)]);
var inst_29826 = inst_29801.length;
var inst_29827 = (inst_29826 > (0));
var state_29841__$1 = state_29841;
if(cljs.core.truth_(inst_29827)){
var statearr_29851_30722 = state_29841__$1;
(statearr_29851_30722[(1)] = (12));

} else {
var statearr_29852_30723 = state_29841__$1;
(statearr_29852_30723[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (3))){
var inst_29839 = (state_29841[(2)]);
var state_29841__$1 = state_29841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29841__$1,inst_29839);
} else {
if((state_val_29842 === (12))){
var inst_29801 = (state_29841[(7)]);
var inst_29829 = cljs.core.vec(inst_29801);
var state_29841__$1 = state_29841;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29841__$1,(15),out,inst_29829);
} else {
if((state_val_29842 === (2))){
var state_29841__$1 = state_29841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29841__$1,(4),ch);
} else {
if((state_val_29842 === (11))){
var inst_29809 = (state_29841[(10)]);
var inst_29805 = (state_29841[(9)]);
var inst_29819 = (state_29841[(2)]);
var inst_29820 = [];
var inst_29821 = inst_29820.push(inst_29805);
var inst_29801 = inst_29820;
var inst_29802 = inst_29809;
var state_29841__$1 = (function (){var statearr_29853 = state_29841;
(statearr_29853[(11)] = inst_29821);

(statearr_29853[(7)] = inst_29801);

(statearr_29853[(8)] = inst_29802);

(statearr_29853[(12)] = inst_29819);

return statearr_29853;
})();
var statearr_29854_30725 = state_29841__$1;
(statearr_29854_30725[(2)] = null);

(statearr_29854_30725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (9))){
var inst_29801 = (state_29841[(7)]);
var inst_29817 = cljs.core.vec(inst_29801);
var state_29841__$1 = state_29841;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29841__$1,(11),out,inst_29817);
} else {
if((state_val_29842 === (5))){
var inst_29809 = (state_29841[(10)]);
var inst_29805 = (state_29841[(9)]);
var inst_29802 = (state_29841[(8)]);
var inst_29809__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29805) : f.call(null,inst_29805));
var inst_29810 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29809__$1,inst_29802);
var inst_29811 = cljs.core.keyword_identical_QMARK_(inst_29802,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29812 = ((inst_29810) || (inst_29811));
var state_29841__$1 = (function (){var statearr_29855 = state_29841;
(statearr_29855[(10)] = inst_29809__$1);

return statearr_29855;
})();
if(cljs.core.truth_(inst_29812)){
var statearr_29856_30728 = state_29841__$1;
(statearr_29856_30728[(1)] = (8));

} else {
var statearr_29857_30729 = state_29841__$1;
(statearr_29857_30729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (14))){
var inst_29834 = (state_29841[(2)]);
var inst_29835 = cljs.core.async.close_BANG_(out);
var state_29841__$1 = (function (){var statearr_29859 = state_29841;
(statearr_29859[(13)] = inst_29834);

return statearr_29859;
})();
var statearr_29860_30730 = state_29841__$1;
(statearr_29860_30730[(2)] = inst_29835);

(statearr_29860_30730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (10))){
var inst_29824 = (state_29841[(2)]);
var state_29841__$1 = state_29841;
var statearr_29861_30732 = state_29841__$1;
(statearr_29861_30732[(2)] = inst_29824);

(statearr_29861_30732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29842 === (8))){
var inst_29809 = (state_29841[(10)]);
var inst_29805 = (state_29841[(9)]);
var inst_29801 = (state_29841[(7)]);
var inst_29814 = inst_29801.push(inst_29805);
var tmp29858 = inst_29801;
var inst_29801__$1 = tmp29858;
var inst_29802 = inst_29809;
var state_29841__$1 = (function (){var statearr_29862 = state_29841;
(statearr_29862[(7)] = inst_29801__$1);

(statearr_29862[(14)] = inst_29814);

(statearr_29862[(8)] = inst_29802);

return statearr_29862;
})();
var statearr_29863_30733 = state_29841__$1;
(statearr_29863_30733[(2)] = null);

(statearr_29863_30733[(1)] = (2));


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
});})(c__27793__auto___30715,out))
;
return ((function (switch__27626__auto__,c__27793__auto___30715,out){
return (function() {
var cljs$core$async$state_machine__27627__auto__ = null;
var cljs$core$async$state_machine__27627__auto____0 = (function (){
var statearr_29864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29864[(0)] = cljs$core$async$state_machine__27627__auto__);

(statearr_29864[(1)] = (1));

return statearr_29864;
});
var cljs$core$async$state_machine__27627__auto____1 = (function (state_29841){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__(state_29841);
if(cljs.core.keyword_identical_QMARK_(result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e29865){if((e29865 instanceof Object)){
var ex__27630__auto__ = e29865;
var statearr_29866_30735 = state_29841;
(statearr_29866_30735[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29865;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30736 = state_29841;
state_29841 = G__30736;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$state_machine__27627__auto__ = function(state_29841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27627__auto____1.call(this,state_29841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27627__auto____0;
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27627__auto____1;
return cljs$core$async$state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27793__auto___30715,out))
})();
var state__27795__auto__ = (function (){var statearr_29867 = (f__27794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27794__auto__.cljs$core$IFn$_invoke$arity$0() : f__27794__auto__.call(null));
(statearr_29867[(6)] = c__27793__auto___30715);

return statearr_29867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27795__auto__);
});})(c__27793__auto___30715,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
