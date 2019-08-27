goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34814 = arguments.length;
switch (G__34814) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34816 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34816 = (function (f,blockable,meta34817){
this.f = f;
this.blockable = blockable;
this.meta34817 = meta34817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34818,meta34817__$1){
var self__ = this;
var _34818__$1 = this;
return (new cljs.core.async.t_cljs$core$async34816(self__.f,self__.blockable,meta34817__$1));
});

cljs.core.async.t_cljs$core$async34816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34818){
var self__ = this;
var _34818__$1 = this;
return self__.meta34817;
});

cljs.core.async.t_cljs$core$async34816.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34816.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34816.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34816.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34816.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34817","meta34817",-705483839,null)], null);
});

cljs.core.async.t_cljs$core$async34816.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34816";

cljs.core.async.t_cljs$core$async34816.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34816");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34816.
 */
cljs.core.async.__GT_t_cljs$core$async34816 = (function cljs$core$async$__GT_t_cljs$core$async34816(f__$1,blockable__$1,meta34817){
return (new cljs.core.async.t_cljs$core$async34816(f__$1,blockable__$1,meta34817));
});

}

return (new cljs.core.async.t_cljs$core$async34816(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34850 = arguments.length;
switch (G__34850) {
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
var G__34859 = arguments.length;
switch (G__34859) {
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
var G__34866 = arguments.length;
switch (G__34866) {
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
var val_37389 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37389) : fn1.call(null,val_37389));
} else {
cljs.core.async.impl.dispatch.run(((function (val_37389,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37389) : fn1.call(null,val_37389));
});})(val_37389,ret))
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
var G__34882 = arguments.length;
switch (G__34882) {
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
var n__4607__auto___37396 = n;
var x_37397 = (0);
while(true){
if((x_37397 < n__4607__auto___37396)){
(a[x_37397] = x_37397);

var G__37399 = (x_37397 + (1));
x_37397 = G__37399;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34913 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34913 = (function (flag,meta34914){
this.flag = flag;
this.meta34914 = meta34914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34915,meta34914__$1){
var self__ = this;
var _34915__$1 = this;
return (new cljs.core.async.t_cljs$core$async34913(self__.flag,meta34914__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34913.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34915){
var self__ = this;
var _34915__$1 = this;
return self__.meta34914;
});})(flag))
;

cljs.core.async.t_cljs$core$async34913.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34913.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34913.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34913.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34913.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34914","meta34914",-1362258845,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34913.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34913";

cljs.core.async.t_cljs$core$async34913.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34913");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34913.
 */
cljs.core.async.__GT_t_cljs$core$async34913 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34913(flag__$1,meta34914){
return (new cljs.core.async.t_cljs$core$async34913(flag__$1,meta34914));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34913(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34931 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34931 = (function (flag,cb,meta34932){
this.flag = flag;
this.cb = cb;
this.meta34932 = meta34932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34933,meta34932__$1){
var self__ = this;
var _34933__$1 = this;
return (new cljs.core.async.t_cljs$core$async34931(self__.flag,self__.cb,meta34932__$1));
});

cljs.core.async.t_cljs$core$async34931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34933){
var self__ = this;
var _34933__$1 = this;
return self__.meta34932;
});

cljs.core.async.t_cljs$core$async34931.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34931.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async34931.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34931.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34932","meta34932",2089726147,null)], null);
});

cljs.core.async.t_cljs$core$async34931.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34931";

cljs.core.async.t_cljs$core$async34931.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34931");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34931.
 */
cljs.core.async.__GT_t_cljs$core$async34931 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34931(flag__$1,cb__$1,meta34932){
return (new cljs.core.async.t_cljs$core$async34931(flag__$1,cb__$1,meta34932));
});

}

return (new cljs.core.async.t_cljs$core$async34931(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34962_SHARP_){
var G__34977 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34962_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34977) : fret.call(null,G__34977));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34964_SHARP_){
var G__34978 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34964_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34978) : fret.call(null,G__34978));
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
var G__37420 = (i + (1));
i = G__37420;
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
var len__4730__auto___37427 = arguments.length;
var i__4731__auto___37428 = (0);
while(true){
if((i__4731__auto___37428 < len__4730__auto___37427)){
args__4736__auto__.push((arguments[i__4731__auto___37428]));

var G__37429 = (i__4731__auto___37428 + (1));
i__4731__auto___37428 = G__37429;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34987){
var map__34988 = p__34987;
var map__34988__$1 = (((((!((map__34988 == null))))?(((((map__34988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34988):map__34988);
var opts = map__34988__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34979){
var G__34980 = cljs.core.first(seq34979);
var seq34979__$1 = cljs.core.next(seq34979);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34980,seq34979__$1);
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
var G__35009 = arguments.length;
switch (G__35009) {
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
var c__34720__auto___37442 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34720__auto___37442){
return (function (){
var f__34721__auto__ = (function (){var switch__34453__auto__ = ((function (c__34720__auto___37442){
return (function (state_35129){
var state_val_35130 = (state_35129[(1)]);
if((state_val_35130 === (7))){
var inst_35110 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
var statearr_35141_37447 = state_35129__$1;
(statearr_35141_37447[(2)] = inst_35110);

(statearr_35141_37447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (1))){
var state_35129__$1 = state_35129;
var statearr_35142_37451 = state_35129__$1;
(statearr_35142_37451[(2)] = null);

(statearr_35142_37451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (4))){
var inst_35057 = (state_35129[(7)]);
var inst_35057__$1 = (state_35129[(2)]);
var inst_35076 = (inst_35057__$1 == null);
var state_35129__$1 = (function (){var statearr_35145 = state_35129;
(statearr_35145[(7)] = inst_35057__$1);

return statearr_35145;
})();
if(cljs.core.truth_(inst_35076)){
var statearr_35146_37453 = state_35129__$1;
(statearr_35146_37453[(1)] = (5));

} else {
var statearr_35147_37454 = state_35129__$1;
(statearr_35147_37454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (13))){
var state_35129__$1 = state_35129;
var statearr_35148_37455 = state_35129__$1;
(statearr_35148_37455[(2)] = null);

(statearr_35148_37455[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (6))){
var inst_35057 = (state_35129[(7)]);
var state_35129__$1 = state_35129;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35129__$1,(11),to,inst_35057);
} else {
if((state_val_35130 === (3))){
var inst_35119 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35129__$1,inst_35119);
} else {
if((state_val_35130 === (12))){
var state_35129__$1 = state_35129;
var statearr_35150_37458 = state_35129__$1;
(statearr_35150_37458[(2)] = null);

(statearr_35150_37458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (2))){
var state_35129__$1 = state_35129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35129__$1,(4),from);
} else {
if((state_val_35130 === (11))){
var inst_35095 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
if(cljs.core.truth_(inst_35095)){
var statearr_35151_37462 = state_35129__$1;
(statearr_35151_37462[(1)] = (12));

} else {
var statearr_35152_37463 = state_35129__$1;
(statearr_35152_37463[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (9))){
var state_35129__$1 = state_35129;
var statearr_35155_37464 = state_35129__$1;
(statearr_35155_37464[(2)] = null);

(statearr_35155_37464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (5))){
var state_35129__$1 = state_35129;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35156_37465 = state_35129__$1;
(statearr_35156_37465[(1)] = (8));

} else {
var statearr_35157_37466 = state_35129__$1;
(statearr_35157_37466[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (14))){
var inst_35108 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
var statearr_35159_37469 = state_35129__$1;
(statearr_35159_37469[(2)] = inst_35108);

(statearr_35159_37469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (10))){
var inst_35092 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
var statearr_35161_37471 = state_35129__$1;
(statearr_35161_37471[(2)] = inst_35092);

(statearr_35161_37471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (8))){
var inst_35086 = cljs.core.async.close_BANG_(to);
var state_35129__$1 = state_35129;
var statearr_35162_37473 = state_35129__$1;
(statearr_35162_37473[(2)] = inst_35086);

(statearr_35162_37473[(1)] = (10));


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
});})(c__34720__auto___37442))
;
return ((function (switch__34453__auto__,c__34720__auto___37442){
return (function() {
var cljs$core$async$state_machine__34454__auto__ = null;
var cljs$core$async$state_machine__34454__auto____0 = (function (){
var statearr_35164 = [null,null,null,null,null,null,null,null];
(statearr_35164[(0)] = cljs$core$async$state_machine__34454__auto__);

(statearr_35164[(1)] = (1));

return statearr_35164;
});
var cljs$core$async$state_machine__34454__auto____1 = (function (state_35129){
while(true){
var ret_value__34455__auto__ = (function (){try{while(true){
var result__34456__auto__ = switch__34453__auto__(state_35129);
if(cljs.core.keyword_identical_QMARK_(result__34456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34456__auto__;
}
break;
}
}catch (e35190){if((e35190 instanceof Object)){
var ex__34457__auto__ = e35190;
var statearr_35191_37478 = state_35129;
(statearr_35191_37478[(5)] = ex__34457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35190;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37479 = state_35129;
state_35129 = G__37479;
continue;
} else {
return ret_value__34455__auto__;
}
break;
}
});
cljs$core$async$state_machine__34454__auto__ = function(state_35129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34454__auto____1.call(this,state_35129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34454__auto____0;
cljs$core$async$state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34454__auto____1;
return cljs$core$async$state_machine__34454__auto__;
})()
;})(switch__34453__auto__,c__34720__auto___37442))
})();
var state__34722__auto__ = (function (){var statearr_35197 = (f__34721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34721__auto__.cljs$core$IFn$_invoke$arity$0() : f__34721__auto__.call(null));
(statearr_35197[(6)] = c__34720__auto___37442);

return statearr_35197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34722__auto__);
});})(c__34720__auto___37442))
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
return (function (p__35218){
var vec__35219 = p__35218;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35219,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35219,(1),null);
var job = vec__35219;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34720__auto___37485 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34720__auto___37485,res,vec__35219,v,p,job,jobs,results){
return (function (){
var f__34721__auto__ = (function (){var switch__34453__auto__ = ((function (c__34720__auto___37485,res,vec__35219,v,p,job,jobs,results){
return (function (state_35227){
var state_val_35228 = (state_35227[(1)]);
if((state_val_35228 === (1))){
var state_35227__$1 = state_35227;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35227__$1,(2),res,v);
} else {
if((state_val_35228 === (2))){
var inst_35224 = (state_35227[(2)]);
var inst_35225 = cljs.core.async.close_BANG_(res);
var state_35227__$1 = (function (){var statearr_35229 = state_35227;
(statearr_35229[(7)] = inst_35224);

return statearr_35229;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35227__$1,inst_35225);
} else {
return null;
}
}
});})(c__34720__auto___37485,res,vec__35219,v,p,job,jobs,results))
;
return ((function (switch__34453__auto__,c__34720__auto___37485,res,vec__35219,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____0 = (function (){
var statearr_35230 = [null,null,null,null,null,null,null,null];
(statearr_35230[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__);

(statearr_35230[(1)] = (1));

return statearr_35230;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____1 = (function (state_35227){
while(true){
var ret_value__34455__auto__ = (function (){try{while(true){
var result__34456__auto__ = switch__34453__auto__(state_35227);
if(cljs.core.keyword_identical_QMARK_(result__34456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34456__auto__;
}
break;
}
}catch (e35231){if((e35231 instanceof Object)){
var ex__34457__auto__ = e35231;
var statearr_35232_37492 = state_35227;
(statearr_35232_37492[(5)] = ex__34457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35231;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37496 = state_35227;
state_35227 = G__37496;
continue;
} else {
return ret_value__34455__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__ = function(state_35227){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____1.call(this,state_35227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__;
})()
;})(switch__34453__auto__,c__34720__auto___37485,res,vec__35219,v,p,job,jobs,results))
})();
var state__34722__auto__ = (function (){var statearr_35233 = (f__34721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34721__auto__.cljs$core$IFn$_invoke$arity$0() : f__34721__auto__.call(null));
(statearr_35233[(6)] = c__34720__auto___37485);

return statearr_35233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34722__auto__);
});})(c__34720__auto___37485,res,vec__35219,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__35234){
var vec__35235 = p__35234;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35235,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35235,(1),null);
var job = vec__35235;
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
var n__4607__auto___37505 = n;
var __37506 = (0);
while(true){
if((__37506 < n__4607__auto___37505)){
var G__35239_37508 = type;
var G__35239_37509__$1 = (((G__35239_37508 instanceof cljs.core.Keyword))?G__35239_37508.fqn:null);
switch (G__35239_37509__$1) {
case "compute":
var c__34720__auto___37513 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37506,c__34720__auto___37513,G__35239_37508,G__35239_37509__$1,n__4607__auto___37505,jobs,results,process,async){
return (function (){
var f__34721__auto__ = (function (){var switch__34453__auto__ = ((function (__37506,c__34720__auto___37513,G__35239_37508,G__35239_37509__$1,n__4607__auto___37505,jobs,results,process,async){
return (function (state_35252){
var state_val_35253 = (state_35252[(1)]);
if((state_val_35253 === (1))){
var state_35252__$1 = state_35252;
var statearr_35254_37514 = state_35252__$1;
(statearr_35254_37514[(2)] = null);

(statearr_35254_37514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35253 === (2))){
var state_35252__$1 = state_35252;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35252__$1,(4),jobs);
} else {
if((state_val_35253 === (3))){
var inst_35250 = (state_35252[(2)]);
var state_35252__$1 = state_35252;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35252__$1,inst_35250);
} else {
if((state_val_35253 === (4))){
var inst_35242 = (state_35252[(2)]);
var inst_35243 = process(inst_35242);
var state_35252__$1 = state_35252;
if(cljs.core.truth_(inst_35243)){
var statearr_35258_37517 = state_35252__$1;
(statearr_35258_37517[(1)] = (5));

} else {
var statearr_35259_37518 = state_35252__$1;
(statearr_35259_37518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35253 === (5))){
var state_35252__$1 = state_35252;
var statearr_35261_37519 = state_35252__$1;
(statearr_35261_37519[(2)] = null);

(statearr_35261_37519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35253 === (6))){
var state_35252__$1 = state_35252;
var statearr_35263_37520 = state_35252__$1;
(statearr_35263_37520[(2)] = null);

(statearr_35263_37520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35253 === (7))){
var inst_35248 = (state_35252[(2)]);
var state_35252__$1 = state_35252;
var statearr_35264_37521 = state_35252__$1;
(statearr_35264_37521[(2)] = inst_35248);

(statearr_35264_37521[(1)] = (3));


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
});})(__37506,c__34720__auto___37513,G__35239_37508,G__35239_37509__$1,n__4607__auto___37505,jobs,results,process,async))
;
return ((function (__37506,switch__34453__auto__,c__34720__auto___37513,G__35239_37508,G__35239_37509__$1,n__4607__auto___37505,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____0 = (function (){
var statearr_35266 = [null,null,null,null,null,null,null];
(statearr_35266[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__);

(statearr_35266[(1)] = (1));

return statearr_35266;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____1 = (function (state_35252){
while(true){
var ret_value__34455__auto__ = (function (){try{while(true){
var result__34456__auto__ = switch__34453__auto__(state_35252);
if(cljs.core.keyword_identical_QMARK_(result__34456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34456__auto__;
}
break;
}
}catch (e35267){if((e35267 instanceof Object)){
var ex__34457__auto__ = e35267;
var statearr_35268_37526 = state_35252;
(statearr_35268_37526[(5)] = ex__34457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35267;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37532 = state_35252;
state_35252 = G__37532;
continue;
} else {
return ret_value__34455__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__ = function(state_35252){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____1.call(this,state_35252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__;
})()
;})(__37506,switch__34453__auto__,c__34720__auto___37513,G__35239_37508,G__35239_37509__$1,n__4607__auto___37505,jobs,results,process,async))
})();
var state__34722__auto__ = (function (){var statearr_35269 = (f__34721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34721__auto__.cljs$core$IFn$_invoke$arity$0() : f__34721__auto__.call(null));
(statearr_35269[(6)] = c__34720__auto___37513);

return statearr_35269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34722__auto__);
});})(__37506,c__34720__auto___37513,G__35239_37508,G__35239_37509__$1,n__4607__auto___37505,jobs,results,process,async))
);


break;
case "async":
var c__34720__auto___37537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37506,c__34720__auto___37537,G__35239_37508,G__35239_37509__$1,n__4607__auto___37505,jobs,results,process,async){
return (function (){
var f__34721__auto__ = (function (){var switch__34453__auto__ = ((function (__37506,c__34720__auto___37537,G__35239_37508,G__35239_37509__$1,n__4607__auto___37505,jobs,results,process,async){
return (function (state_35282){
var state_val_35283 = (state_35282[(1)]);
if((state_val_35283 === (1))){
var state_35282__$1 = state_35282;
var statearr_35284_37543 = state_35282__$1;
(statearr_35284_37543[(2)] = null);

(statearr_35284_37543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35283 === (2))){
var state_35282__$1 = state_35282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35282__$1,(4),jobs);
} else {
if((state_val_35283 === (3))){
var inst_35280 = (state_35282[(2)]);
var state_35282__$1 = state_35282;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35282__$1,inst_35280);
} else {
if((state_val_35283 === (4))){
var inst_35272 = (state_35282[(2)]);
var inst_35273 = async(inst_35272);
var state_35282__$1 = state_35282;
if(cljs.core.truth_(inst_35273)){
var statearr_35290_37549 = state_35282__$1;
(statearr_35290_37549[(1)] = (5));

} else {
var statearr_35291_37550 = state_35282__$1;
(statearr_35291_37550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35283 === (5))){
var state_35282__$1 = state_35282;
var statearr_35292_37555 = state_35282__$1;
(statearr_35292_37555[(2)] = null);

(statearr_35292_37555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35283 === (6))){
var state_35282__$1 = state_35282;
var statearr_35294_37556 = state_35282__$1;
(statearr_35294_37556[(2)] = null);

(statearr_35294_37556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35283 === (7))){
var inst_35278 = (state_35282[(2)]);
var state_35282__$1 = state_35282;
var statearr_35297_37562 = state_35282__$1;
(statearr_35297_37562[(2)] = inst_35278);

(statearr_35297_37562[(1)] = (3));


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
});})(__37506,c__34720__auto___37537,G__35239_37508,G__35239_37509__$1,n__4607__auto___37505,jobs,results,process,async))
;
return ((function (__37506,switch__34453__auto__,c__34720__auto___37537,G__35239_37508,G__35239_37509__$1,n__4607__auto___37505,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____0 = (function (){
var statearr_35298 = [null,null,null,null,null,null,null];
(statearr_35298[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__);

(statearr_35298[(1)] = (1));

return statearr_35298;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____1 = (function (state_35282){
while(true){
var ret_value__34455__auto__ = (function (){try{while(true){
var result__34456__auto__ = switch__34453__auto__(state_35282);
if(cljs.core.keyword_identical_QMARK_(result__34456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34456__auto__;
}
break;
}
}catch (e35299){if((e35299 instanceof Object)){
var ex__34457__auto__ = e35299;
var statearr_35300_37567 = state_35282;
(statearr_35300_37567[(5)] = ex__34457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35299;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37568 = state_35282;
state_35282 = G__37568;
continue;
} else {
return ret_value__34455__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__ = function(state_35282){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____1.call(this,state_35282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__;
})()
;})(__37506,switch__34453__auto__,c__34720__auto___37537,G__35239_37508,G__35239_37509__$1,n__4607__auto___37505,jobs,results,process,async))
})();
var state__34722__auto__ = (function (){var statearr_35301 = (f__34721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34721__auto__.cljs$core$IFn$_invoke$arity$0() : f__34721__auto__.call(null));
(statearr_35301[(6)] = c__34720__auto___37537);

return statearr_35301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34722__auto__);
});})(__37506,c__34720__auto___37537,G__35239_37508,G__35239_37509__$1,n__4607__auto___37505,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35239_37509__$1)].join('')));

}

var G__37570 = (__37506 + (1));
__37506 = G__37570;
continue;
} else {
}
break;
}

var c__34720__auto___37571 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34720__auto___37571,jobs,results,process,async){
return (function (){
var f__34721__auto__ = (function (){var switch__34453__auto__ = ((function (c__34720__auto___37571,jobs,results,process,async){
return (function (state_35328){
var state_val_35329 = (state_35328[(1)]);
if((state_val_35329 === (7))){
var inst_35323 = (state_35328[(2)]);
var state_35328__$1 = state_35328;
var statearr_35344_37573 = state_35328__$1;
(statearr_35344_37573[(2)] = inst_35323);

(statearr_35344_37573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35329 === (1))){
var state_35328__$1 = state_35328;
var statearr_35345_37574 = state_35328__$1;
(statearr_35345_37574[(2)] = null);

(statearr_35345_37574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35329 === (4))){
var inst_35305 = (state_35328[(7)]);
var inst_35305__$1 = (state_35328[(2)]);
var inst_35306 = (inst_35305__$1 == null);
var state_35328__$1 = (function (){var statearr_35347 = state_35328;
(statearr_35347[(7)] = inst_35305__$1);

return statearr_35347;
})();
if(cljs.core.truth_(inst_35306)){
var statearr_35348_37578 = state_35328__$1;
(statearr_35348_37578[(1)] = (5));

} else {
var statearr_35353_37581 = state_35328__$1;
(statearr_35353_37581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35329 === (6))){
var inst_35312 = (state_35328[(8)]);
var inst_35305 = (state_35328[(7)]);
var inst_35312__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_35313 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35314 = [inst_35305,inst_35312__$1];
var inst_35315 = (new cljs.core.PersistentVector(null,2,(5),inst_35313,inst_35314,null));
var state_35328__$1 = (function (){var statearr_35354 = state_35328;
(statearr_35354[(8)] = inst_35312__$1);

return statearr_35354;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35328__$1,(8),jobs,inst_35315);
} else {
if((state_val_35329 === (3))){
var inst_35325 = (state_35328[(2)]);
var state_35328__$1 = state_35328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35328__$1,inst_35325);
} else {
if((state_val_35329 === (2))){
var state_35328__$1 = state_35328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35328__$1,(4),from);
} else {
if((state_val_35329 === (9))){
var inst_35320 = (state_35328[(2)]);
var state_35328__$1 = (function (){var statearr_35355 = state_35328;
(statearr_35355[(9)] = inst_35320);

return statearr_35355;
})();
var statearr_35356_37583 = state_35328__$1;
(statearr_35356_37583[(2)] = null);

(statearr_35356_37583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35329 === (5))){
var inst_35309 = cljs.core.async.close_BANG_(jobs);
var state_35328__$1 = state_35328;
var statearr_35357_37587 = state_35328__$1;
(statearr_35357_37587[(2)] = inst_35309);

(statearr_35357_37587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35329 === (8))){
var inst_35312 = (state_35328[(8)]);
var inst_35317 = (state_35328[(2)]);
var state_35328__$1 = (function (){var statearr_35358 = state_35328;
(statearr_35358[(10)] = inst_35317);

return statearr_35358;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35328__$1,(9),results,inst_35312);
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
});})(c__34720__auto___37571,jobs,results,process,async))
;
return ((function (switch__34453__auto__,c__34720__auto___37571,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____0 = (function (){
var statearr_35359 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35359[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__);

(statearr_35359[(1)] = (1));

return statearr_35359;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____1 = (function (state_35328){
while(true){
var ret_value__34455__auto__ = (function (){try{while(true){
var result__34456__auto__ = switch__34453__auto__(state_35328);
if(cljs.core.keyword_identical_QMARK_(result__34456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34456__auto__;
}
break;
}
}catch (e35360){if((e35360 instanceof Object)){
var ex__34457__auto__ = e35360;
var statearr_35361_37590 = state_35328;
(statearr_35361_37590[(5)] = ex__34457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35360;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37591 = state_35328;
state_35328 = G__37591;
continue;
} else {
return ret_value__34455__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__ = function(state_35328){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____1.call(this,state_35328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__;
})()
;})(switch__34453__auto__,c__34720__auto___37571,jobs,results,process,async))
})();
var state__34722__auto__ = (function (){var statearr_35362 = (f__34721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34721__auto__.cljs$core$IFn$_invoke$arity$0() : f__34721__auto__.call(null));
(statearr_35362[(6)] = c__34720__auto___37571);

return statearr_35362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34722__auto__);
});})(c__34720__auto___37571,jobs,results,process,async))
);


var c__34720__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34720__auto__,jobs,results,process,async){
return (function (){
var f__34721__auto__ = (function (){var switch__34453__auto__ = ((function (c__34720__auto__,jobs,results,process,async){
return (function (state_35400){
var state_val_35405 = (state_35400[(1)]);
if((state_val_35405 === (7))){
var inst_35396 = (state_35400[(2)]);
var state_35400__$1 = state_35400;
var statearr_35415_37595 = state_35400__$1;
(statearr_35415_37595[(2)] = inst_35396);

(statearr_35415_37595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (20))){
var state_35400__$1 = state_35400;
var statearr_35416_37596 = state_35400__$1;
(statearr_35416_37596[(2)] = null);

(statearr_35416_37596[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (1))){
var state_35400__$1 = state_35400;
var statearr_35418_37597 = state_35400__$1;
(statearr_35418_37597[(2)] = null);

(statearr_35418_37597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (4))){
var inst_35365 = (state_35400[(7)]);
var inst_35365__$1 = (state_35400[(2)]);
var inst_35366 = (inst_35365__$1 == null);
var state_35400__$1 = (function (){var statearr_35419 = state_35400;
(statearr_35419[(7)] = inst_35365__$1);

return statearr_35419;
})();
if(cljs.core.truth_(inst_35366)){
var statearr_35420_37598 = state_35400__$1;
(statearr_35420_37598[(1)] = (5));

} else {
var statearr_35423_37599 = state_35400__$1;
(statearr_35423_37599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (15))){
var inst_35378 = (state_35400[(8)]);
var state_35400__$1 = state_35400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35400__$1,(18),to,inst_35378);
} else {
if((state_val_35405 === (21))){
var inst_35391 = (state_35400[(2)]);
var state_35400__$1 = state_35400;
var statearr_35424_37600 = state_35400__$1;
(statearr_35424_37600[(2)] = inst_35391);

(statearr_35424_37600[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (13))){
var inst_35393 = (state_35400[(2)]);
var state_35400__$1 = (function (){var statearr_35425 = state_35400;
(statearr_35425[(9)] = inst_35393);

return statearr_35425;
})();
var statearr_35426_37601 = state_35400__$1;
(statearr_35426_37601[(2)] = null);

(statearr_35426_37601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (6))){
var inst_35365 = (state_35400[(7)]);
var state_35400__$1 = state_35400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35400__$1,(11),inst_35365);
} else {
if((state_val_35405 === (17))){
var inst_35386 = (state_35400[(2)]);
var state_35400__$1 = state_35400;
if(cljs.core.truth_(inst_35386)){
var statearr_35427_37603 = state_35400__$1;
(statearr_35427_37603[(1)] = (19));

} else {
var statearr_35428_37604 = state_35400__$1;
(statearr_35428_37604[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (3))){
var inst_35398 = (state_35400[(2)]);
var state_35400__$1 = state_35400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35400__$1,inst_35398);
} else {
if((state_val_35405 === (12))){
var inst_35375 = (state_35400[(10)]);
var state_35400__$1 = state_35400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35400__$1,(14),inst_35375);
} else {
if((state_val_35405 === (2))){
var state_35400__$1 = state_35400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35400__$1,(4),results);
} else {
if((state_val_35405 === (19))){
var state_35400__$1 = state_35400;
var statearr_35430_37606 = state_35400__$1;
(statearr_35430_37606[(2)] = null);

(statearr_35430_37606[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (11))){
var inst_35375 = (state_35400[(2)]);
var state_35400__$1 = (function (){var statearr_35431 = state_35400;
(statearr_35431[(10)] = inst_35375);

return statearr_35431;
})();
var statearr_35432_37608 = state_35400__$1;
(statearr_35432_37608[(2)] = null);

(statearr_35432_37608[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (9))){
var state_35400__$1 = state_35400;
var statearr_35433_37609 = state_35400__$1;
(statearr_35433_37609[(2)] = null);

(statearr_35433_37609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (5))){
var state_35400__$1 = state_35400;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35434_37610 = state_35400__$1;
(statearr_35434_37610[(1)] = (8));

} else {
var statearr_35435_37611 = state_35400__$1;
(statearr_35435_37611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (14))){
var inst_35378 = (state_35400[(8)]);
var inst_35380 = (state_35400[(11)]);
var inst_35378__$1 = (state_35400[(2)]);
var inst_35379 = (inst_35378__$1 == null);
var inst_35380__$1 = cljs.core.not(inst_35379);
var state_35400__$1 = (function (){var statearr_35438 = state_35400;
(statearr_35438[(8)] = inst_35378__$1);

(statearr_35438[(11)] = inst_35380__$1);

return statearr_35438;
})();
if(inst_35380__$1){
var statearr_35439_37612 = state_35400__$1;
(statearr_35439_37612[(1)] = (15));

} else {
var statearr_35440_37613 = state_35400__$1;
(statearr_35440_37613[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (16))){
var inst_35380 = (state_35400[(11)]);
var state_35400__$1 = state_35400;
var statearr_35442_37615 = state_35400__$1;
(statearr_35442_37615[(2)] = inst_35380);

(statearr_35442_37615[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (10))){
var inst_35372 = (state_35400[(2)]);
var state_35400__$1 = state_35400;
var statearr_35445_37617 = state_35400__$1;
(statearr_35445_37617[(2)] = inst_35372);

(statearr_35445_37617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (18))){
var inst_35383 = (state_35400[(2)]);
var state_35400__$1 = state_35400;
var statearr_35446_37618 = state_35400__$1;
(statearr_35446_37618[(2)] = inst_35383);

(statearr_35446_37618[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (8))){
var inst_35369 = cljs.core.async.close_BANG_(to);
var state_35400__$1 = state_35400;
var statearr_35447_37619 = state_35400__$1;
(statearr_35447_37619[(2)] = inst_35369);

(statearr_35447_37619[(1)] = (10));


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
});})(c__34720__auto__,jobs,results,process,async))
;
return ((function (switch__34453__auto__,c__34720__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____0 = (function (){
var statearr_35452 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35452[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__);

(statearr_35452[(1)] = (1));

return statearr_35452;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____1 = (function (state_35400){
while(true){
var ret_value__34455__auto__ = (function (){try{while(true){
var result__34456__auto__ = switch__34453__auto__(state_35400);
if(cljs.core.keyword_identical_QMARK_(result__34456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34456__auto__;
}
break;
}
}catch (e35454){if((e35454 instanceof Object)){
var ex__34457__auto__ = e35454;
var statearr_35455_37620 = state_35400;
(statearr_35455_37620[(5)] = ex__34457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35454;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37622 = state_35400;
state_35400 = G__37622;
continue;
} else {
return ret_value__34455__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__ = function(state_35400){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____1.call(this,state_35400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34454__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34454__auto__;
})()
;})(switch__34453__auto__,c__34720__auto__,jobs,results,process,async))
})();
var state__34722__auto__ = (function (){var statearr_35471 = (f__34721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34721__auto__.cljs$core$IFn$_invoke$arity$0() : f__34721__auto__.call(null));
(statearr_35471[(6)] = c__34720__auto__);

return statearr_35471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34722__auto__);
});})(c__34720__auto__,jobs,results,process,async))
);

return c__34720__auto__;
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
var G__35482 = arguments.length;
switch (G__35482) {
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
var G__35495 = arguments.length;
switch (G__35495) {
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
var G__35514 = arguments.length;
switch (G__35514) {
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
var c__34720__auto___37629 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34720__auto___37629,tc,fc){
return (function (){
var f__34721__auto__ = (function (){var switch__34453__auto__ = ((function (c__34720__auto___37629,tc,fc){
return (function (state_35545){
var state_val_35546 = (state_35545[(1)]);
if((state_val_35546 === (7))){
var inst_35541 = (state_35545[(2)]);
var state_35545__$1 = state_35545;
var statearr_35547_37630 = state_35545__$1;
(statearr_35547_37630[(2)] = inst_35541);

(statearr_35547_37630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35546 === (1))){
var state_35545__$1 = state_35545;
var statearr_35551_37632 = state_35545__$1;
(statearr_35551_37632[(2)] = null);

(statearr_35551_37632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35546 === (4))){
var inst_35519 = (state_35545[(7)]);
var inst_35519__$1 = (state_35545[(2)]);
var inst_35520 = (inst_35519__$1 == null);
var state_35545__$1 = (function (){var statearr_35554 = state_35545;
(statearr_35554[(7)] = inst_35519__$1);

return statearr_35554;
})();
if(cljs.core.truth_(inst_35520)){
var statearr_35555_37634 = state_35545__$1;
(statearr_35555_37634[(1)] = (5));

} else {
var statearr_35556_37635 = state_35545__$1;
(statearr_35556_37635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35546 === (13))){
var state_35545__$1 = state_35545;
var statearr_35557_37636 = state_35545__$1;
(statearr_35557_37636[(2)] = null);

(statearr_35557_37636[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35546 === (6))){
var inst_35519 = (state_35545[(7)]);
var inst_35528 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35519) : p.call(null,inst_35519));
var state_35545__$1 = state_35545;
if(cljs.core.truth_(inst_35528)){
var statearr_35561_37639 = state_35545__$1;
(statearr_35561_37639[(1)] = (9));

} else {
var statearr_35562_37640 = state_35545__$1;
(statearr_35562_37640[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35546 === (3))){
var inst_35543 = (state_35545[(2)]);
var state_35545__$1 = state_35545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35545__$1,inst_35543);
} else {
if((state_val_35546 === (12))){
var state_35545__$1 = state_35545;
var statearr_35563_37643 = state_35545__$1;
(statearr_35563_37643[(2)] = null);

(statearr_35563_37643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35546 === (2))){
var state_35545__$1 = state_35545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35545__$1,(4),ch);
} else {
if((state_val_35546 === (11))){
var inst_35519 = (state_35545[(7)]);
var inst_35532 = (state_35545[(2)]);
var state_35545__$1 = state_35545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35545__$1,(8),inst_35532,inst_35519);
} else {
if((state_val_35546 === (9))){
var state_35545__$1 = state_35545;
var statearr_35565_37646 = state_35545__$1;
(statearr_35565_37646[(2)] = tc);

(statearr_35565_37646[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35546 === (5))){
var inst_35523 = cljs.core.async.close_BANG_(tc);
var inst_35524 = cljs.core.async.close_BANG_(fc);
var state_35545__$1 = (function (){var statearr_35566 = state_35545;
(statearr_35566[(8)] = inst_35523);

return statearr_35566;
})();
var statearr_35568_37647 = state_35545__$1;
(statearr_35568_37647[(2)] = inst_35524);

(statearr_35568_37647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35546 === (14))){
var inst_35539 = (state_35545[(2)]);
var state_35545__$1 = state_35545;
var statearr_35569_37650 = state_35545__$1;
(statearr_35569_37650[(2)] = inst_35539);

(statearr_35569_37650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35546 === (10))){
var state_35545__$1 = state_35545;
var statearr_35570_37651 = state_35545__$1;
(statearr_35570_37651[(2)] = fc);

(statearr_35570_37651[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35546 === (8))){
var inst_35534 = (state_35545[(2)]);
var state_35545__$1 = state_35545;
if(cljs.core.truth_(inst_35534)){
var statearr_35571_37653 = state_35545__$1;
(statearr_35571_37653[(1)] = (12));

} else {
var statearr_35572_37654 = state_35545__$1;
(statearr_35572_37654[(1)] = (13));

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
});})(c__34720__auto___37629,tc,fc))
;
return ((function (switch__34453__auto__,c__34720__auto___37629,tc,fc){
return (function() {
var cljs$core$async$state_machine__34454__auto__ = null;
var cljs$core$async$state_machine__34454__auto____0 = (function (){
var statearr_35573 = [null,null,null,null,null,null,null,null,null];
(statearr_35573[(0)] = cljs$core$async$state_machine__34454__auto__);

(statearr_35573[(1)] = (1));

return statearr_35573;
});
var cljs$core$async$state_machine__34454__auto____1 = (function (state_35545){
while(true){
var ret_value__34455__auto__ = (function (){try{while(true){
var result__34456__auto__ = switch__34453__auto__(state_35545);
if(cljs.core.keyword_identical_QMARK_(result__34456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34456__auto__;
}
break;
}
}catch (e35574){if((e35574 instanceof Object)){
var ex__34457__auto__ = e35574;
var statearr_35575_37656 = state_35545;
(statearr_35575_37656[(5)] = ex__34457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35574;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37659 = state_35545;
state_35545 = G__37659;
continue;
} else {
return ret_value__34455__auto__;
}
break;
}
});
cljs$core$async$state_machine__34454__auto__ = function(state_35545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34454__auto____1.call(this,state_35545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34454__auto____0;
cljs$core$async$state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34454__auto____1;
return cljs$core$async$state_machine__34454__auto__;
})()
;})(switch__34453__auto__,c__34720__auto___37629,tc,fc))
})();
var state__34722__auto__ = (function (){var statearr_35576 = (f__34721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34721__auto__.cljs$core$IFn$_invoke$arity$0() : f__34721__auto__.call(null));
(statearr_35576[(6)] = c__34720__auto___37629);

return statearr_35576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34722__auto__);
});})(c__34720__auto___37629,tc,fc))
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
var c__34720__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34720__auto__){
return (function (){
var f__34721__auto__ = (function (){var switch__34453__auto__ = ((function (c__34720__auto__){
return (function (state_35610){
var state_val_35611 = (state_35610[(1)]);
if((state_val_35611 === (7))){
var inst_35604 = (state_35610[(2)]);
var state_35610__$1 = state_35610;
var statearr_35617_37660 = state_35610__$1;
(statearr_35617_37660[(2)] = inst_35604);

(statearr_35617_37660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (1))){
var inst_35586 = init;
var state_35610__$1 = (function (){var statearr_35618 = state_35610;
(statearr_35618[(7)] = inst_35586);

return statearr_35618;
})();
var statearr_35619_37661 = state_35610__$1;
(statearr_35619_37661[(2)] = null);

(statearr_35619_37661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (4))){
var inst_35589 = (state_35610[(8)]);
var inst_35589__$1 = (state_35610[(2)]);
var inst_35590 = (inst_35589__$1 == null);
var state_35610__$1 = (function (){var statearr_35620 = state_35610;
(statearr_35620[(8)] = inst_35589__$1);

return statearr_35620;
})();
if(cljs.core.truth_(inst_35590)){
var statearr_35622_37663 = state_35610__$1;
(statearr_35622_37663[(1)] = (5));

} else {
var statearr_35623_37664 = state_35610__$1;
(statearr_35623_37664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (6))){
var inst_35586 = (state_35610[(7)]);
var inst_35593 = (state_35610[(9)]);
var inst_35589 = (state_35610[(8)]);
var inst_35593__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_35586,inst_35589) : f.call(null,inst_35586,inst_35589));
var inst_35594 = cljs.core.reduced_QMARK_(inst_35593__$1);
var state_35610__$1 = (function (){var statearr_35624 = state_35610;
(statearr_35624[(9)] = inst_35593__$1);

return statearr_35624;
})();
if(inst_35594){
var statearr_35625_37665 = state_35610__$1;
(statearr_35625_37665[(1)] = (8));

} else {
var statearr_35626_37666 = state_35610__$1;
(statearr_35626_37666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (3))){
var inst_35606 = (state_35610[(2)]);
var state_35610__$1 = state_35610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35610__$1,inst_35606);
} else {
if((state_val_35611 === (2))){
var state_35610__$1 = state_35610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35610__$1,(4),ch);
} else {
if((state_val_35611 === (9))){
var inst_35593 = (state_35610[(9)]);
var inst_35586 = inst_35593;
var state_35610__$1 = (function (){var statearr_35631 = state_35610;
(statearr_35631[(7)] = inst_35586);

return statearr_35631;
})();
var statearr_35632_37667 = state_35610__$1;
(statearr_35632_37667[(2)] = null);

(statearr_35632_37667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (5))){
var inst_35586 = (state_35610[(7)]);
var state_35610__$1 = state_35610;
var statearr_35633_37668 = state_35610__$1;
(statearr_35633_37668[(2)] = inst_35586);

(statearr_35633_37668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (10))){
var inst_35600 = (state_35610[(2)]);
var state_35610__$1 = state_35610;
var statearr_35634_37669 = state_35610__$1;
(statearr_35634_37669[(2)] = inst_35600);

(statearr_35634_37669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (8))){
var inst_35593 = (state_35610[(9)]);
var inst_35596 = cljs.core.deref(inst_35593);
var state_35610__$1 = state_35610;
var statearr_35635_37674 = state_35610__$1;
(statearr_35635_37674[(2)] = inst_35596);

(statearr_35635_37674[(1)] = (10));


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
});})(c__34720__auto__))
;
return ((function (switch__34453__auto__,c__34720__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34454__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34454__auto____0 = (function (){
var statearr_35636 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35636[(0)] = cljs$core$async$reduce_$_state_machine__34454__auto__);

(statearr_35636[(1)] = (1));

return statearr_35636;
});
var cljs$core$async$reduce_$_state_machine__34454__auto____1 = (function (state_35610){
while(true){
var ret_value__34455__auto__ = (function (){try{while(true){
var result__34456__auto__ = switch__34453__auto__(state_35610);
if(cljs.core.keyword_identical_QMARK_(result__34456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34456__auto__;
}
break;
}
}catch (e35637){if((e35637 instanceof Object)){
var ex__34457__auto__ = e35637;
var statearr_35638_37678 = state_35610;
(statearr_35638_37678[(5)] = ex__34457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35637;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37679 = state_35610;
state_35610 = G__37679;
continue;
} else {
return ret_value__34455__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34454__auto__ = function(state_35610){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34454__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34454__auto____1.call(this,state_35610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34454__auto____0;
cljs$core$async$reduce_$_state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34454__auto____1;
return cljs$core$async$reduce_$_state_machine__34454__auto__;
})()
;})(switch__34453__auto__,c__34720__auto__))
})();
var state__34722__auto__ = (function (){var statearr_35642 = (f__34721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34721__auto__.cljs$core$IFn$_invoke$arity$0() : f__34721__auto__.call(null));
(statearr_35642[(6)] = c__34720__auto__);

return statearr_35642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34722__auto__);
});})(c__34720__auto__))
);

return c__34720__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34720__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34720__auto__,f__$1){
return (function (){
var f__34721__auto__ = (function (){var switch__34453__auto__ = ((function (c__34720__auto__,f__$1){
return (function (state_35656){
var state_val_35657 = (state_35656[(1)]);
if((state_val_35657 === (1))){
var inst_35651 = cljs.core.async.reduce(f__$1,init,ch);
var state_35656__$1 = state_35656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35656__$1,(2),inst_35651);
} else {
if((state_val_35657 === (2))){
var inst_35653 = (state_35656[(2)]);
var inst_35654 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_35653) : f__$1.call(null,inst_35653));
var state_35656__$1 = state_35656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35656__$1,inst_35654);
} else {
return null;
}
}
});})(c__34720__auto__,f__$1))
;
return ((function (switch__34453__auto__,c__34720__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__34454__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34454__auto____0 = (function (){
var statearr_35663 = [null,null,null,null,null,null,null];
(statearr_35663[(0)] = cljs$core$async$transduce_$_state_machine__34454__auto__);

(statearr_35663[(1)] = (1));

return statearr_35663;
});
var cljs$core$async$transduce_$_state_machine__34454__auto____1 = (function (state_35656){
while(true){
var ret_value__34455__auto__ = (function (){try{while(true){
var result__34456__auto__ = switch__34453__auto__(state_35656);
if(cljs.core.keyword_identical_QMARK_(result__34456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34456__auto__;
}
break;
}
}catch (e35664){if((e35664 instanceof Object)){
var ex__34457__auto__ = e35664;
var statearr_35665_37686 = state_35656;
(statearr_35665_37686[(5)] = ex__34457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35664;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37687 = state_35656;
state_35656 = G__37687;
continue;
} else {
return ret_value__34455__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34454__auto__ = function(state_35656){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34454__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34454__auto____1.call(this,state_35656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34454__auto____0;
cljs$core$async$transduce_$_state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34454__auto____1;
return cljs$core$async$transduce_$_state_machine__34454__auto__;
})()
;})(switch__34453__auto__,c__34720__auto__,f__$1))
})();
var state__34722__auto__ = (function (){var statearr_35666 = (f__34721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34721__auto__.cljs$core$IFn$_invoke$arity$0() : f__34721__auto__.call(null));
(statearr_35666[(6)] = c__34720__auto__);

return statearr_35666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34722__auto__);
});})(c__34720__auto__,f__$1))
);

return c__34720__auto__;
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
var G__35668 = arguments.length;
switch (G__35668) {
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
var c__34720__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34720__auto__){
return (function (){
var f__34721__auto__ = (function (){var switch__34453__auto__ = ((function (c__34720__auto__){
return (function (state_35694){
var state_val_35695 = (state_35694[(1)]);
if((state_val_35695 === (7))){
var inst_35675 = (state_35694[(2)]);
var state_35694__$1 = state_35694;
var statearr_35696_37694 = state_35694__$1;
(statearr_35696_37694[(2)] = inst_35675);

(statearr_35696_37694[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35695 === (1))){
var inst_35669 = cljs.core.seq(coll);
var inst_35670 = inst_35669;
var state_35694__$1 = (function (){var statearr_35697 = state_35694;
(statearr_35697[(7)] = inst_35670);

return statearr_35697;
})();
var statearr_35698_37695 = state_35694__$1;
(statearr_35698_37695[(2)] = null);

(statearr_35698_37695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35695 === (4))){
var inst_35670 = (state_35694[(7)]);
var inst_35673 = cljs.core.first(inst_35670);
var state_35694__$1 = state_35694;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35694__$1,(7),ch,inst_35673);
} else {
if((state_val_35695 === (13))){
var inst_35688 = (state_35694[(2)]);
var state_35694__$1 = state_35694;
var statearr_35699_37696 = state_35694__$1;
(statearr_35699_37696[(2)] = inst_35688);

(statearr_35699_37696[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35695 === (6))){
var inst_35678 = (state_35694[(2)]);
var state_35694__$1 = state_35694;
if(cljs.core.truth_(inst_35678)){
var statearr_35700_37697 = state_35694__$1;
(statearr_35700_37697[(1)] = (8));

} else {
var statearr_35701_37698 = state_35694__$1;
(statearr_35701_37698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35695 === (3))){
var inst_35692 = (state_35694[(2)]);
var state_35694__$1 = state_35694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35694__$1,inst_35692);
} else {
if((state_val_35695 === (12))){
var state_35694__$1 = state_35694;
var statearr_35702_37702 = state_35694__$1;
(statearr_35702_37702[(2)] = null);

(statearr_35702_37702[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35695 === (2))){
var inst_35670 = (state_35694[(7)]);
var state_35694__$1 = state_35694;
if(cljs.core.truth_(inst_35670)){
var statearr_35705_37703 = state_35694__$1;
(statearr_35705_37703[(1)] = (4));

} else {
var statearr_35706_37704 = state_35694__$1;
(statearr_35706_37704[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35695 === (11))){
var inst_35685 = cljs.core.async.close_BANG_(ch);
var state_35694__$1 = state_35694;
var statearr_35709_37705 = state_35694__$1;
(statearr_35709_37705[(2)] = inst_35685);

(statearr_35709_37705[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35695 === (9))){
var state_35694__$1 = state_35694;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35712_37709 = state_35694__$1;
(statearr_35712_37709[(1)] = (11));

} else {
var statearr_35713_37710 = state_35694__$1;
(statearr_35713_37710[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35695 === (5))){
var inst_35670 = (state_35694[(7)]);
var state_35694__$1 = state_35694;
var statearr_35715_37711 = state_35694__$1;
(statearr_35715_37711[(2)] = inst_35670);

(statearr_35715_37711[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35695 === (10))){
var inst_35690 = (state_35694[(2)]);
var state_35694__$1 = state_35694;
var statearr_35722_37712 = state_35694__$1;
(statearr_35722_37712[(2)] = inst_35690);

(statearr_35722_37712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35695 === (8))){
var inst_35670 = (state_35694[(7)]);
var inst_35680 = cljs.core.next(inst_35670);
var inst_35670__$1 = inst_35680;
var state_35694__$1 = (function (){var statearr_35723 = state_35694;
(statearr_35723[(7)] = inst_35670__$1);

return statearr_35723;
})();
var statearr_35724_37720 = state_35694__$1;
(statearr_35724_37720[(2)] = null);

(statearr_35724_37720[(1)] = (2));


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
});})(c__34720__auto__))
;
return ((function (switch__34453__auto__,c__34720__auto__){
return (function() {
var cljs$core$async$state_machine__34454__auto__ = null;
var cljs$core$async$state_machine__34454__auto____0 = (function (){
var statearr_35726 = [null,null,null,null,null,null,null,null];
(statearr_35726[(0)] = cljs$core$async$state_machine__34454__auto__);

(statearr_35726[(1)] = (1));

return statearr_35726;
});
var cljs$core$async$state_machine__34454__auto____1 = (function (state_35694){
while(true){
var ret_value__34455__auto__ = (function (){try{while(true){
var result__34456__auto__ = switch__34453__auto__(state_35694);
if(cljs.core.keyword_identical_QMARK_(result__34456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34456__auto__;
}
break;
}
}catch (e35727){if((e35727 instanceof Object)){
var ex__34457__auto__ = e35727;
var statearr_35728_37721 = state_35694;
(statearr_35728_37721[(5)] = ex__34457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35727;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37725 = state_35694;
state_35694 = G__37725;
continue;
} else {
return ret_value__34455__auto__;
}
break;
}
});
cljs$core$async$state_machine__34454__auto__ = function(state_35694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34454__auto____1.call(this,state_35694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34454__auto____0;
cljs$core$async$state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34454__auto____1;
return cljs$core$async$state_machine__34454__auto__;
})()
;})(switch__34453__auto__,c__34720__auto__))
})();
var state__34722__auto__ = (function (){var statearr_35729 = (f__34721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34721__auto__.cljs$core$IFn$_invoke$arity$0() : f__34721__auto__.call(null));
(statearr_35729[(6)] = c__34720__auto__);

return statearr_35729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34722__auto__);
});})(c__34720__auto__))
);

return c__34720__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35743 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35743 = (function (ch,cs,meta35744){
this.ch = ch;
this.cs = cs;
this.meta35744 = meta35744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35745,meta35744__$1){
var self__ = this;
var _35745__$1 = this;
return (new cljs.core.async.t_cljs$core$async35743(self__.ch,self__.cs,meta35744__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35743.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35745){
var self__ = this;
var _35745__$1 = this;
return self__.meta35744;
});})(cs))
;

cljs.core.async.t_cljs$core$async35743.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35743.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35743.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35743.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35743.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35743.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35743.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35744","meta35744",-2039836542,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35743.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35743";

cljs.core.async.t_cljs$core$async35743.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async35743");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35743.
 */
cljs.core.async.__GT_t_cljs$core$async35743 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35743(ch__$1,cs__$1,meta35744){
return (new cljs.core.async.t_cljs$core$async35743(ch__$1,cs__$1,meta35744));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35743(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34720__auto___37760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34720__auto___37760,cs,m,dchan,dctr,done){
return (function (){
var f__34721__auto__ = (function (){var switch__34453__auto__ = ((function (c__34720__auto___37760,cs,m,dchan,dctr,done){
return (function (state_35902){
var state_val_35903 = (state_35902[(1)]);
if((state_val_35903 === (7))){
var inst_35893 = (state_35902[(2)]);
var state_35902__$1 = state_35902;
var statearr_35911_37761 = state_35902__$1;
(statearr_35911_37761[(2)] = inst_35893);

(statearr_35911_37761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (20))){
var inst_35786 = (state_35902[(7)]);
var inst_35798 = cljs.core.first(inst_35786);
var inst_35799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35798,(0),null);
var inst_35800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35798,(1),null);
var state_35902__$1 = (function (){var statearr_35913 = state_35902;
(statearr_35913[(8)] = inst_35799);

return statearr_35913;
})();
if(cljs.core.truth_(inst_35800)){
var statearr_35915_37763 = state_35902__$1;
(statearr_35915_37763[(1)] = (22));

} else {
var statearr_35916_37764 = state_35902__$1;
(statearr_35916_37764[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (27))){
var inst_35838 = (state_35902[(9)]);
var inst_35749 = (state_35902[(10)]);
var inst_35828 = (state_35902[(11)]);
var inst_35830 = (state_35902[(12)]);
var inst_35838__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35828,inst_35830);
var inst_35839 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35838__$1,inst_35749,done);
var state_35902__$1 = (function (){var statearr_35918 = state_35902;
(statearr_35918[(9)] = inst_35838__$1);

return statearr_35918;
})();
if(cljs.core.truth_(inst_35839)){
var statearr_35919_37765 = state_35902__$1;
(statearr_35919_37765[(1)] = (30));

} else {
var statearr_35920_37766 = state_35902__$1;
(statearr_35920_37766[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (1))){
var state_35902__$1 = state_35902;
var statearr_35921_37767 = state_35902__$1;
(statearr_35921_37767[(2)] = null);

(statearr_35921_37767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (24))){
var inst_35786 = (state_35902[(7)]);
var inst_35805 = (state_35902[(2)]);
var inst_35806 = cljs.core.next(inst_35786);
var inst_35758 = inst_35806;
var inst_35759 = null;
var inst_35760 = (0);
var inst_35761 = (0);
var state_35902__$1 = (function (){var statearr_35928 = state_35902;
(statearr_35928[(13)] = inst_35760);

(statearr_35928[(14)] = inst_35805);

(statearr_35928[(15)] = inst_35759);

(statearr_35928[(16)] = inst_35761);

(statearr_35928[(17)] = inst_35758);

return statearr_35928;
})();
var statearr_35929_37768 = state_35902__$1;
(statearr_35929_37768[(2)] = null);

(statearr_35929_37768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (39))){
var state_35902__$1 = state_35902;
var statearr_35936_37769 = state_35902__$1;
(statearr_35936_37769[(2)] = null);

(statearr_35936_37769[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (4))){
var inst_35749 = (state_35902[(10)]);
var inst_35749__$1 = (state_35902[(2)]);
var inst_35750 = (inst_35749__$1 == null);
var state_35902__$1 = (function (){var statearr_35937 = state_35902;
(statearr_35937[(10)] = inst_35749__$1);

return statearr_35937;
})();
if(cljs.core.truth_(inst_35750)){
var statearr_35938_37770 = state_35902__$1;
(statearr_35938_37770[(1)] = (5));

} else {
var statearr_35939_37771 = state_35902__$1;
(statearr_35939_37771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (15))){
var inst_35760 = (state_35902[(13)]);
var inst_35759 = (state_35902[(15)]);
var inst_35761 = (state_35902[(16)]);
var inst_35758 = (state_35902[(17)]);
var inst_35782 = (state_35902[(2)]);
var inst_35783 = (inst_35761 + (1));
var tmp35930 = inst_35760;
var tmp35931 = inst_35759;
var tmp35932 = inst_35758;
var inst_35758__$1 = tmp35932;
var inst_35759__$1 = tmp35931;
var inst_35760__$1 = tmp35930;
var inst_35761__$1 = inst_35783;
var state_35902__$1 = (function (){var statearr_35941 = state_35902;
(statearr_35941[(13)] = inst_35760__$1);

(statearr_35941[(15)] = inst_35759__$1);

(statearr_35941[(16)] = inst_35761__$1);

(statearr_35941[(17)] = inst_35758__$1);

(statearr_35941[(18)] = inst_35782);

return statearr_35941;
})();
var statearr_35946_37772 = state_35902__$1;
(statearr_35946_37772[(2)] = null);

(statearr_35946_37772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (21))){
var inst_35809 = (state_35902[(2)]);
var state_35902__$1 = state_35902;
var statearr_35955_37773 = state_35902__$1;
(statearr_35955_37773[(2)] = inst_35809);

(statearr_35955_37773[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (31))){
var inst_35838 = (state_35902[(9)]);
var inst_35842 = done(null);
var inst_35843 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35838);
var state_35902__$1 = (function (){var statearr_35956 = state_35902;
(statearr_35956[(19)] = inst_35842);

return statearr_35956;
})();
var statearr_35957_37776 = state_35902__$1;
(statearr_35957_37776[(2)] = inst_35843);

(statearr_35957_37776[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (32))){
var inst_35829 = (state_35902[(20)]);
var inst_35828 = (state_35902[(11)]);
var inst_35827 = (state_35902[(21)]);
var inst_35830 = (state_35902[(12)]);
var inst_35845 = (state_35902[(2)]);
var inst_35846 = (inst_35830 + (1));
var tmp35948 = inst_35829;
var tmp35949 = inst_35828;
var tmp35950 = inst_35827;
var inst_35827__$1 = tmp35950;
var inst_35828__$1 = tmp35949;
var inst_35829__$1 = tmp35948;
var inst_35830__$1 = inst_35846;
var state_35902__$1 = (function (){var statearr_35958 = state_35902;
(statearr_35958[(22)] = inst_35845);

(statearr_35958[(20)] = inst_35829__$1);

(statearr_35958[(11)] = inst_35828__$1);

(statearr_35958[(21)] = inst_35827__$1);

(statearr_35958[(12)] = inst_35830__$1);

return statearr_35958;
})();
var statearr_35961_37777 = state_35902__$1;
(statearr_35961_37777[(2)] = null);

(statearr_35961_37777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (40))){
var inst_35860 = (state_35902[(23)]);
var inst_35866 = done(null);
var inst_35867 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35860);
var state_35902__$1 = (function (){var statearr_35964 = state_35902;
(statearr_35964[(24)] = inst_35866);

return statearr_35964;
})();
var statearr_35967_37778 = state_35902__$1;
(statearr_35967_37778[(2)] = inst_35867);

(statearr_35967_37778[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (33))){
var inst_35849 = (state_35902[(25)]);
var inst_35853 = cljs.core.chunked_seq_QMARK_(inst_35849);
var state_35902__$1 = state_35902;
if(inst_35853){
var statearr_35971_37779 = state_35902__$1;
(statearr_35971_37779[(1)] = (36));

} else {
var statearr_35972_37780 = state_35902__$1;
(statearr_35972_37780[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (13))){
var inst_35770 = (state_35902[(26)]);
var inst_35779 = cljs.core.async.close_BANG_(inst_35770);
var state_35902__$1 = state_35902;
var statearr_35974_37781 = state_35902__$1;
(statearr_35974_37781[(2)] = inst_35779);

(statearr_35974_37781[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (22))){
var inst_35799 = (state_35902[(8)]);
var inst_35802 = cljs.core.async.close_BANG_(inst_35799);
var state_35902__$1 = state_35902;
var statearr_35978_37782 = state_35902__$1;
(statearr_35978_37782[(2)] = inst_35802);

(statearr_35978_37782[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (36))){
var inst_35849 = (state_35902[(25)]);
var inst_35855 = cljs.core.chunk_first(inst_35849);
var inst_35856 = cljs.core.chunk_rest(inst_35849);
var inst_35857 = cljs.core.count(inst_35855);
var inst_35827 = inst_35856;
var inst_35828 = inst_35855;
var inst_35829 = inst_35857;
var inst_35830 = (0);
var state_35902__$1 = (function (){var statearr_35979 = state_35902;
(statearr_35979[(20)] = inst_35829);

(statearr_35979[(11)] = inst_35828);

(statearr_35979[(21)] = inst_35827);

(statearr_35979[(12)] = inst_35830);

return statearr_35979;
})();
var statearr_35980_37784 = state_35902__$1;
(statearr_35980_37784[(2)] = null);

(statearr_35980_37784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (41))){
var inst_35849 = (state_35902[(25)]);
var inst_35869 = (state_35902[(2)]);
var inst_35870 = cljs.core.next(inst_35849);
var inst_35827 = inst_35870;
var inst_35828 = null;
var inst_35829 = (0);
var inst_35830 = (0);
var state_35902__$1 = (function (){var statearr_35981 = state_35902;
(statearr_35981[(20)] = inst_35829);

(statearr_35981[(27)] = inst_35869);

(statearr_35981[(11)] = inst_35828);

(statearr_35981[(21)] = inst_35827);

(statearr_35981[(12)] = inst_35830);

return statearr_35981;
})();
var statearr_35983_37787 = state_35902__$1;
(statearr_35983_37787[(2)] = null);

(statearr_35983_37787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (43))){
var state_35902__$1 = state_35902;
var statearr_35984_37791 = state_35902__$1;
(statearr_35984_37791[(2)] = null);

(statearr_35984_37791[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (29))){
var inst_35878 = (state_35902[(2)]);
var state_35902__$1 = state_35902;
var statearr_35989_37792 = state_35902__$1;
(statearr_35989_37792[(2)] = inst_35878);

(statearr_35989_37792[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (44))){
var inst_35890 = (state_35902[(2)]);
var state_35902__$1 = (function (){var statearr_35990 = state_35902;
(statearr_35990[(28)] = inst_35890);

return statearr_35990;
})();
var statearr_35991_37794 = state_35902__$1;
(statearr_35991_37794[(2)] = null);

(statearr_35991_37794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (6))){
var inst_35819 = (state_35902[(29)]);
var inst_35818 = cljs.core.deref(cs);
var inst_35819__$1 = cljs.core.keys(inst_35818);
var inst_35820 = cljs.core.count(inst_35819__$1);
var inst_35821 = cljs.core.reset_BANG_(dctr,inst_35820);
var inst_35826 = cljs.core.seq(inst_35819__$1);
var inst_35827 = inst_35826;
var inst_35828 = null;
var inst_35829 = (0);
var inst_35830 = (0);
var state_35902__$1 = (function (){var statearr_35992 = state_35902;
(statearr_35992[(29)] = inst_35819__$1);

(statearr_35992[(30)] = inst_35821);

(statearr_35992[(20)] = inst_35829);

(statearr_35992[(11)] = inst_35828);

(statearr_35992[(21)] = inst_35827);

(statearr_35992[(12)] = inst_35830);

return statearr_35992;
})();
var statearr_35993_37797 = state_35902__$1;
(statearr_35993_37797[(2)] = null);

(statearr_35993_37797[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (28))){
var inst_35827 = (state_35902[(21)]);
var inst_35849 = (state_35902[(25)]);
var inst_35849__$1 = cljs.core.seq(inst_35827);
var state_35902__$1 = (function (){var statearr_35994 = state_35902;
(statearr_35994[(25)] = inst_35849__$1);

return statearr_35994;
})();
if(inst_35849__$1){
var statearr_35995_37798 = state_35902__$1;
(statearr_35995_37798[(1)] = (33));

} else {
var statearr_35996_37799 = state_35902__$1;
(statearr_35996_37799[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (25))){
var inst_35829 = (state_35902[(20)]);
var inst_35830 = (state_35902[(12)]);
var inst_35835 = (inst_35830 < inst_35829);
var inst_35836 = inst_35835;
var state_35902__$1 = state_35902;
if(cljs.core.truth_(inst_35836)){
var statearr_35997_37800 = state_35902__$1;
(statearr_35997_37800[(1)] = (27));

} else {
var statearr_35998_37801 = state_35902__$1;
(statearr_35998_37801[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (34))){
var state_35902__$1 = state_35902;
var statearr_35999_37802 = state_35902__$1;
(statearr_35999_37802[(2)] = null);

(statearr_35999_37802[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (17))){
var state_35902__$1 = state_35902;
var statearr_36000_37803 = state_35902__$1;
(statearr_36000_37803[(2)] = null);

(statearr_36000_37803[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (3))){
var inst_35895 = (state_35902[(2)]);
var state_35902__$1 = state_35902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35902__$1,inst_35895);
} else {
if((state_val_35903 === (12))){
var inst_35814 = (state_35902[(2)]);
var state_35902__$1 = state_35902;
var statearr_36003_37804 = state_35902__$1;
(statearr_36003_37804[(2)] = inst_35814);

(statearr_36003_37804[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (2))){
var state_35902__$1 = state_35902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35902__$1,(4),ch);
} else {
if((state_val_35903 === (23))){
var state_35902__$1 = state_35902;
var statearr_36004_37806 = state_35902__$1;
(statearr_36004_37806[(2)] = null);

(statearr_36004_37806[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (35))){
var inst_35876 = (state_35902[(2)]);
var state_35902__$1 = state_35902;
var statearr_36005_37810 = state_35902__$1;
(statearr_36005_37810[(2)] = inst_35876);

(statearr_36005_37810[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (19))){
var inst_35786 = (state_35902[(7)]);
var inst_35790 = cljs.core.chunk_first(inst_35786);
var inst_35791 = cljs.core.chunk_rest(inst_35786);
var inst_35792 = cljs.core.count(inst_35790);
var inst_35758 = inst_35791;
var inst_35759 = inst_35790;
var inst_35760 = inst_35792;
var inst_35761 = (0);
var state_35902__$1 = (function (){var statearr_36008 = state_35902;
(statearr_36008[(13)] = inst_35760);

(statearr_36008[(15)] = inst_35759);

(statearr_36008[(16)] = inst_35761);

(statearr_36008[(17)] = inst_35758);

return statearr_36008;
})();
var statearr_36009_37813 = state_35902__$1;
(statearr_36009_37813[(2)] = null);

(statearr_36009_37813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (11))){
var inst_35758 = (state_35902[(17)]);
var inst_35786 = (state_35902[(7)]);
var inst_35786__$1 = cljs.core.seq(inst_35758);
var state_35902__$1 = (function (){var statearr_36015 = state_35902;
(statearr_36015[(7)] = inst_35786__$1);

return statearr_36015;
})();
if(inst_35786__$1){
var statearr_36016_37816 = state_35902__$1;
(statearr_36016_37816[(1)] = (16));

} else {
var statearr_36017_37817 = state_35902__$1;
(statearr_36017_37817[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (9))){
var inst_35816 = (state_35902[(2)]);
var state_35902__$1 = state_35902;
var statearr_36018_37818 = state_35902__$1;
(statearr_36018_37818[(2)] = inst_35816);

(statearr_36018_37818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (5))){
var inst_35756 = cljs.core.deref(cs);
var inst_35757 = cljs.core.seq(inst_35756);
var inst_35758 = inst_35757;
var inst_35759 = null;
var inst_35760 = (0);
var inst_35761 = (0);
var state_35902__$1 = (function (){var statearr_36019 = state_35902;
(statearr_36019[(13)] = inst_35760);

(statearr_36019[(15)] = inst_35759);

(statearr_36019[(16)] = inst_35761);

(statearr_36019[(17)] = inst_35758);

return statearr_36019;
})();
var statearr_36021_37826 = state_35902__$1;
(statearr_36021_37826[(2)] = null);

(statearr_36021_37826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (14))){
var state_35902__$1 = state_35902;
var statearr_36026_37833 = state_35902__$1;
(statearr_36026_37833[(2)] = null);

(statearr_36026_37833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (45))){
var inst_35887 = (state_35902[(2)]);
var state_35902__$1 = state_35902;
var statearr_36031_37834 = state_35902__$1;
(statearr_36031_37834[(2)] = inst_35887);

(statearr_36031_37834[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (26))){
var inst_35819 = (state_35902[(29)]);
var inst_35880 = (state_35902[(2)]);
var inst_35882 = cljs.core.seq(inst_35819);
var state_35902__$1 = (function (){var statearr_36052 = state_35902;
(statearr_36052[(31)] = inst_35880);

return statearr_36052;
})();
if(inst_35882){
var statearr_36053_37835 = state_35902__$1;
(statearr_36053_37835[(1)] = (42));

} else {
var statearr_36054_37836 = state_35902__$1;
(statearr_36054_37836[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (16))){
var inst_35786 = (state_35902[(7)]);
var inst_35788 = cljs.core.chunked_seq_QMARK_(inst_35786);
var state_35902__$1 = state_35902;
if(inst_35788){
var statearr_36055_37837 = state_35902__$1;
(statearr_36055_37837[(1)] = (19));

} else {
var statearr_36056_37838 = state_35902__$1;
(statearr_36056_37838[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (38))){
var inst_35873 = (state_35902[(2)]);
var state_35902__$1 = state_35902;
var statearr_36058_37839 = state_35902__$1;
(statearr_36058_37839[(2)] = inst_35873);

(statearr_36058_37839[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (30))){
var state_35902__$1 = state_35902;
var statearr_36059_37840 = state_35902__$1;
(statearr_36059_37840[(2)] = null);

(statearr_36059_37840[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (10))){
var inst_35759 = (state_35902[(15)]);
var inst_35761 = (state_35902[(16)]);
var inst_35769 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35759,inst_35761);
var inst_35770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35769,(0),null);
var inst_35771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35769,(1),null);
var state_35902__$1 = (function (){var statearr_36060 = state_35902;
(statearr_36060[(26)] = inst_35770);

return statearr_36060;
})();
if(cljs.core.truth_(inst_35771)){
var statearr_36066_37841 = state_35902__$1;
(statearr_36066_37841[(1)] = (13));

} else {
var statearr_36067_37842 = state_35902__$1;
(statearr_36067_37842[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (18))){
var inst_35812 = (state_35902[(2)]);
var state_35902__$1 = state_35902;
var statearr_36068_37843 = state_35902__$1;
(statearr_36068_37843[(2)] = inst_35812);

(statearr_36068_37843[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (42))){
var state_35902__$1 = state_35902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35902__$1,(45),dchan);
} else {
if((state_val_35903 === (37))){
var inst_35749 = (state_35902[(10)]);
var inst_35860 = (state_35902[(23)]);
var inst_35849 = (state_35902[(25)]);
var inst_35860__$1 = cljs.core.first(inst_35849);
var inst_35863 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35860__$1,inst_35749,done);
var state_35902__$1 = (function (){var statearr_36069 = state_35902;
(statearr_36069[(23)] = inst_35860__$1);

return statearr_36069;
})();
if(cljs.core.truth_(inst_35863)){
var statearr_36070_37850 = state_35902__$1;
(statearr_36070_37850[(1)] = (39));

} else {
var statearr_36071_37851 = state_35902__$1;
(statearr_36071_37851[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35903 === (8))){
var inst_35760 = (state_35902[(13)]);
var inst_35761 = (state_35902[(16)]);
var inst_35763 = (inst_35761 < inst_35760);
var inst_35764 = inst_35763;
var state_35902__$1 = state_35902;
if(cljs.core.truth_(inst_35764)){
var statearr_36073_37852 = state_35902__$1;
(statearr_36073_37852[(1)] = (10));

} else {
var statearr_36074_37853 = state_35902__$1;
(statearr_36074_37853[(1)] = (11));

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
});})(c__34720__auto___37760,cs,m,dchan,dctr,done))
;
return ((function (switch__34453__auto__,c__34720__auto___37760,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34454__auto__ = null;
var cljs$core$async$mult_$_state_machine__34454__auto____0 = (function (){
var statearr_36075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36075[(0)] = cljs$core$async$mult_$_state_machine__34454__auto__);

(statearr_36075[(1)] = (1));

return statearr_36075;
});
var cljs$core$async$mult_$_state_machine__34454__auto____1 = (function (state_35902){
while(true){
var ret_value__34455__auto__ = (function (){try{while(true){
var result__34456__auto__ = switch__34453__auto__(state_35902);
if(cljs.core.keyword_identical_QMARK_(result__34456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34456__auto__;
}
break;
}
}catch (e36076){if((e36076 instanceof Object)){
var ex__34457__auto__ = e36076;
var statearr_36077_37854 = state_35902;
(statearr_36077_37854[(5)] = ex__34457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36076;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37855 = state_35902;
state_35902 = G__37855;
continue;
} else {
return ret_value__34455__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34454__auto__ = function(state_35902){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34454__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34454__auto____1.call(this,state_35902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34454__auto____0;
cljs$core$async$mult_$_state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34454__auto____1;
return cljs$core$async$mult_$_state_machine__34454__auto__;
})()
;})(switch__34453__auto__,c__34720__auto___37760,cs,m,dchan,dctr,done))
})();
var state__34722__auto__ = (function (){var statearr_36079 = (f__34721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34721__auto__.cljs$core$IFn$_invoke$arity$0() : f__34721__auto__.call(null));
(statearr_36079[(6)] = c__34720__auto___37760);

return statearr_36079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34722__auto__);
});})(c__34720__auto___37760,cs,m,dchan,dctr,done))
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
var G__36082 = arguments.length;
switch (G__36082) {
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
var len__4730__auto___37869 = arguments.length;
var i__4731__auto___37870 = (0);
while(true){
if((i__4731__auto___37870 < len__4730__auto___37869)){
args__4736__auto__.push((arguments[i__4731__auto___37870]));

var G__37871 = (i__4731__auto___37870 + (1));
i__4731__auto___37870 = G__37871;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36104){
var map__36106 = p__36104;
var map__36106__$1 = (((((!((map__36106 == null))))?(((((map__36106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36106):map__36106);
var opts = map__36106__$1;
var statearr_36110_37872 = state;
(statearr_36110_37872[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__36106,map__36106__$1,opts){
return (function (val){
var statearr_36111_37873 = state;
(statearr_36111_37873[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__36106,map__36106__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_36112_37874 = state;
(statearr_36112_37874[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36096){
var G__36097 = cljs.core.first(seq36096);
var seq36096__$1 = cljs.core.next(seq36096);
var G__36101 = cljs.core.first(seq36096__$1);
var seq36096__$2 = cljs.core.next(seq36096__$1);
var G__36102 = cljs.core.first(seq36096__$2);
var seq36096__$3 = cljs.core.next(seq36096__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36097,G__36101,G__36102,seq36096__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36117 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36117 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36118){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta36118 = meta36118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36119,meta36118__$1){
var self__ = this;
var _36119__$1 = this;
return (new cljs.core.async.t_cljs$core$async36117(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36118__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36119){
var self__ = this;
var _36119__$1 = this;
return self__.meta36118;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async36117.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36118","meta36118",-153865952,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36117";

cljs.core.async.t_cljs$core$async36117.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async36117");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36117.
 */
cljs.core.async.__GT_t_cljs$core$async36117 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async36117(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36118){
return (new cljs.core.async.t_cljs$core$async36117(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36118));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async36117(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34720__auto___37887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34720__auto___37887,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34721__auto__ = (function (){var switch__34453__auto__ = ((function (c__34720__auto___37887,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36247){
var state_val_36248 = (state_36247[(1)]);
if((state_val_36248 === (7))){
var inst_36157 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
var statearr_36253_37888 = state_36247__$1;
(statearr_36253_37888[(2)] = inst_36157);

(statearr_36253_37888[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (20))){
var inst_36170 = (state_36247[(7)]);
var state_36247__$1 = state_36247;
var statearr_36254_37889 = state_36247__$1;
(statearr_36254_37889[(2)] = inst_36170);

(statearr_36254_37889[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (27))){
var state_36247__$1 = state_36247;
var statearr_36256_37890 = state_36247__$1;
(statearr_36256_37890[(2)] = null);

(statearr_36256_37890[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (1))){
var inst_36143 = (state_36247[(8)]);
var inst_36143__$1 = calc_state();
var inst_36145 = (inst_36143__$1 == null);
var inst_36146 = cljs.core.not(inst_36145);
var state_36247__$1 = (function (){var statearr_36257 = state_36247;
(statearr_36257[(8)] = inst_36143__$1);

return statearr_36257;
})();
if(inst_36146){
var statearr_36258_37891 = state_36247__$1;
(statearr_36258_37891[(1)] = (2));

} else {
var statearr_36259_37892 = state_36247__$1;
(statearr_36259_37892[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (24))){
var inst_36206 = (state_36247[(9)]);
var inst_36220 = (state_36247[(10)]);
var inst_36197 = (state_36247[(11)]);
var inst_36220__$1 = (inst_36197.cljs$core$IFn$_invoke$arity$1 ? inst_36197.cljs$core$IFn$_invoke$arity$1(inst_36206) : inst_36197.call(null,inst_36206));
var state_36247__$1 = (function (){var statearr_36260 = state_36247;
(statearr_36260[(10)] = inst_36220__$1);

return statearr_36260;
})();
if(cljs.core.truth_(inst_36220__$1)){
var statearr_36261_37895 = state_36247__$1;
(statearr_36261_37895[(1)] = (29));

} else {
var statearr_36262_37896 = state_36247__$1;
(statearr_36262_37896[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (4))){
var inst_36160 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
if(cljs.core.truth_(inst_36160)){
var statearr_36264_37897 = state_36247__$1;
(statearr_36264_37897[(1)] = (8));

} else {
var statearr_36265_37898 = state_36247__$1;
(statearr_36265_37898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (15))){
var inst_36191 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
if(cljs.core.truth_(inst_36191)){
var statearr_36268_37899 = state_36247__$1;
(statearr_36268_37899[(1)] = (19));

} else {
var statearr_36269_37900 = state_36247__$1;
(statearr_36269_37900[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (21))){
var inst_36196 = (state_36247[(12)]);
var inst_36196__$1 = (state_36247[(2)]);
var inst_36197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36196__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36196__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36196__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36247__$1 = (function (){var statearr_36272 = state_36247;
(statearr_36272[(12)] = inst_36196__$1);

(statearr_36272[(11)] = inst_36197);

(statearr_36272[(13)] = inst_36198);

return statearr_36272;
})();
return cljs.core.async.ioc_alts_BANG_(state_36247__$1,(22),inst_36199);
} else {
if((state_val_36248 === (31))){
var inst_36228 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
if(cljs.core.truth_(inst_36228)){
var statearr_36277_37901 = state_36247__$1;
(statearr_36277_37901[(1)] = (32));

} else {
var statearr_36278_37902 = state_36247__$1;
(statearr_36278_37902[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (32))){
var inst_36205 = (state_36247[(14)]);
var state_36247__$1 = state_36247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36247__$1,(35),out,inst_36205);
} else {
if((state_val_36248 === (33))){
var inst_36196 = (state_36247[(12)]);
var inst_36170 = inst_36196;
var state_36247__$1 = (function (){var statearr_36284 = state_36247;
(statearr_36284[(7)] = inst_36170);

return statearr_36284;
})();
var statearr_36286_37903 = state_36247__$1;
(statearr_36286_37903[(2)] = null);

(statearr_36286_37903[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (13))){
var inst_36170 = (state_36247[(7)]);
var inst_36179 = inst_36170.cljs$lang$protocol_mask$partition0$;
var inst_36180 = (inst_36179 & (64));
var inst_36181 = inst_36170.cljs$core$ISeq$;
var inst_36182 = (cljs.core.PROTOCOL_SENTINEL === inst_36181);
var inst_36183 = ((inst_36180) || (inst_36182));
var state_36247__$1 = state_36247;
if(cljs.core.truth_(inst_36183)){
var statearr_36287_37904 = state_36247__$1;
(statearr_36287_37904[(1)] = (16));

} else {
var statearr_36289_37905 = state_36247__$1;
(statearr_36289_37905[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (22))){
var inst_36206 = (state_36247[(9)]);
var inst_36205 = (state_36247[(14)]);
var inst_36204 = (state_36247[(2)]);
var inst_36205__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36204,(0),null);
var inst_36206__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36204,(1),null);
var inst_36207 = (inst_36205__$1 == null);
var inst_36208 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36206__$1,change);
var inst_36209 = ((inst_36207) || (inst_36208));
var state_36247__$1 = (function (){var statearr_36292 = state_36247;
(statearr_36292[(9)] = inst_36206__$1);

(statearr_36292[(14)] = inst_36205__$1);

return statearr_36292;
})();
if(cljs.core.truth_(inst_36209)){
var statearr_36293_37907 = state_36247__$1;
(statearr_36293_37907[(1)] = (23));

} else {
var statearr_36299_37908 = state_36247__$1;
(statearr_36299_37908[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (36))){
var inst_36196 = (state_36247[(12)]);
var inst_36170 = inst_36196;
var state_36247__$1 = (function (){var statearr_36300 = state_36247;
(statearr_36300[(7)] = inst_36170);

return statearr_36300;
})();
var statearr_36301_37913 = state_36247__$1;
(statearr_36301_37913[(2)] = null);

(statearr_36301_37913[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (29))){
var inst_36220 = (state_36247[(10)]);
var state_36247__$1 = state_36247;
var statearr_36302_37914 = state_36247__$1;
(statearr_36302_37914[(2)] = inst_36220);

(statearr_36302_37914[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (6))){
var state_36247__$1 = state_36247;
var statearr_36303_37915 = state_36247__$1;
(statearr_36303_37915[(2)] = false);

(statearr_36303_37915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (28))){
var inst_36216 = (state_36247[(2)]);
var inst_36217 = calc_state();
var inst_36170 = inst_36217;
var state_36247__$1 = (function (){var statearr_36304 = state_36247;
(statearr_36304[(15)] = inst_36216);

(statearr_36304[(7)] = inst_36170);

return statearr_36304;
})();
var statearr_36305_37916 = state_36247__$1;
(statearr_36305_37916[(2)] = null);

(statearr_36305_37916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (25))){
var inst_36242 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
var statearr_36306_37917 = state_36247__$1;
(statearr_36306_37917[(2)] = inst_36242);

(statearr_36306_37917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (34))){
var inst_36240 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
var statearr_36307_37918 = state_36247__$1;
(statearr_36307_37918[(2)] = inst_36240);

(statearr_36307_37918[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (17))){
var state_36247__$1 = state_36247;
var statearr_36308_37919 = state_36247__$1;
(statearr_36308_37919[(2)] = false);

(statearr_36308_37919[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (3))){
var state_36247__$1 = state_36247;
var statearr_36309_37920 = state_36247__$1;
(statearr_36309_37920[(2)] = false);

(statearr_36309_37920[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (12))){
var inst_36244 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36247__$1,inst_36244);
} else {
if((state_val_36248 === (2))){
var inst_36143 = (state_36247[(8)]);
var inst_36148 = inst_36143.cljs$lang$protocol_mask$partition0$;
var inst_36149 = (inst_36148 & (64));
var inst_36150 = inst_36143.cljs$core$ISeq$;
var inst_36151 = (cljs.core.PROTOCOL_SENTINEL === inst_36150);
var inst_36152 = ((inst_36149) || (inst_36151));
var state_36247__$1 = state_36247;
if(cljs.core.truth_(inst_36152)){
var statearr_36310_37928 = state_36247__$1;
(statearr_36310_37928[(1)] = (5));

} else {
var statearr_36311_37929 = state_36247__$1;
(statearr_36311_37929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (23))){
var inst_36205 = (state_36247[(14)]);
var inst_36211 = (inst_36205 == null);
var state_36247__$1 = state_36247;
if(cljs.core.truth_(inst_36211)){
var statearr_36312_37933 = state_36247__$1;
(statearr_36312_37933[(1)] = (26));

} else {
var statearr_36313_37934 = state_36247__$1;
(statearr_36313_37934[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (35))){
var inst_36231 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
if(cljs.core.truth_(inst_36231)){
var statearr_36314_37938 = state_36247__$1;
(statearr_36314_37938[(1)] = (36));

} else {
var statearr_36315_37939 = state_36247__$1;
(statearr_36315_37939[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (19))){
var inst_36170 = (state_36247[(7)]);
var inst_36193 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_36170);
var state_36247__$1 = state_36247;
var statearr_36316_37940 = state_36247__$1;
(statearr_36316_37940[(2)] = inst_36193);

(statearr_36316_37940[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (11))){
var inst_36170 = (state_36247[(7)]);
var inst_36176 = (inst_36170 == null);
var inst_36177 = cljs.core.not(inst_36176);
var state_36247__$1 = state_36247;
if(inst_36177){
var statearr_36322_37941 = state_36247__$1;
(statearr_36322_37941[(1)] = (13));

} else {
var statearr_36323_37942 = state_36247__$1;
(statearr_36323_37942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (9))){
var inst_36143 = (state_36247[(8)]);
var state_36247__$1 = state_36247;
var statearr_36324_37946 = state_36247__$1;
(statearr_36324_37946[(2)] = inst_36143);

(statearr_36324_37946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (5))){
var state_36247__$1 = state_36247;
var statearr_36328_37947 = state_36247__$1;
(statearr_36328_37947[(2)] = true);

(statearr_36328_37947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (14))){
var state_36247__$1 = state_36247;
var statearr_36331_37948 = state_36247__$1;
(statearr_36331_37948[(2)] = false);

(statearr_36331_37948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (26))){
var inst_36206 = (state_36247[(9)]);
var inst_36213 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_36206);
var state_36247__$1 = state_36247;
var statearr_36332_37953 = state_36247__$1;
(statearr_36332_37953[(2)] = inst_36213);

(statearr_36332_37953[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (16))){
var state_36247__$1 = state_36247;
var statearr_36334_37954 = state_36247__$1;
(statearr_36334_37954[(2)] = true);

(statearr_36334_37954[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (38))){
var inst_36236 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
var statearr_36337_37955 = state_36247__$1;
(statearr_36337_37955[(2)] = inst_36236);

(statearr_36337_37955[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (30))){
var inst_36206 = (state_36247[(9)]);
var inst_36197 = (state_36247[(11)]);
var inst_36198 = (state_36247[(13)]);
var inst_36223 = cljs.core.empty_QMARK_(inst_36197);
var inst_36224 = (inst_36198.cljs$core$IFn$_invoke$arity$1 ? inst_36198.cljs$core$IFn$_invoke$arity$1(inst_36206) : inst_36198.call(null,inst_36206));
var inst_36225 = cljs.core.not(inst_36224);
var inst_36226 = ((inst_36223) && (inst_36225));
var state_36247__$1 = state_36247;
var statearr_36342_37956 = state_36247__$1;
(statearr_36342_37956[(2)] = inst_36226);

(statearr_36342_37956[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (10))){
var inst_36143 = (state_36247[(8)]);
var inst_36165 = (state_36247[(2)]);
var inst_36167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36165,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36165,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36165,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36170 = inst_36143;
var state_36247__$1 = (function (){var statearr_36347 = state_36247;
(statearr_36347[(16)] = inst_36167);

(statearr_36347[(17)] = inst_36169);

(statearr_36347[(18)] = inst_36168);

(statearr_36347[(7)] = inst_36170);

return statearr_36347;
})();
var statearr_36348_37957 = state_36247__$1;
(statearr_36348_37957[(2)] = null);

(statearr_36348_37957[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (18))){
var inst_36188 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
var statearr_36353_37958 = state_36247__$1;
(statearr_36353_37958[(2)] = inst_36188);

(statearr_36353_37958[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (37))){
var state_36247__$1 = state_36247;
var statearr_36354_37959 = state_36247__$1;
(statearr_36354_37959[(2)] = null);

(statearr_36354_37959[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (8))){
var inst_36143 = (state_36247[(8)]);
var inst_36162 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_36143);
var state_36247__$1 = state_36247;
var statearr_36355_37962 = state_36247__$1;
(statearr_36355_37962[(2)] = inst_36162);

(statearr_36355_37962[(1)] = (10));


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
});})(c__34720__auto___37887,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34453__auto__,c__34720__auto___37887,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34454__auto__ = null;
var cljs$core$async$mix_$_state_machine__34454__auto____0 = (function (){
var statearr_36359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36359[(0)] = cljs$core$async$mix_$_state_machine__34454__auto__);

(statearr_36359[(1)] = (1));

return statearr_36359;
});
var cljs$core$async$mix_$_state_machine__34454__auto____1 = (function (state_36247){
while(true){
var ret_value__34455__auto__ = (function (){try{while(true){
var result__34456__auto__ = switch__34453__auto__(state_36247);
if(cljs.core.keyword_identical_QMARK_(result__34456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34456__auto__;
}
break;
}
}catch (e36360){if((e36360 instanceof Object)){
var ex__34457__auto__ = e36360;
var statearr_36362_37965 = state_36247;
(statearr_36362_37965[(5)] = ex__34457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36360;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37966 = state_36247;
state_36247 = G__37966;
continue;
} else {
return ret_value__34455__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34454__auto__ = function(state_36247){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34454__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34454__auto____1.call(this,state_36247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34454__auto____0;
cljs$core$async$mix_$_state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34454__auto____1;
return cljs$core$async$mix_$_state_machine__34454__auto__;
})()
;})(switch__34453__auto__,c__34720__auto___37887,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34722__auto__ = (function (){var statearr_36369 = (f__34721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34721__auto__.cljs$core$IFn$_invoke$arity$0() : f__34721__auto__.call(null));
(statearr_36369[(6)] = c__34720__auto___37887);

return statearr_36369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34722__auto__);
});})(c__34720__auto___37887,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__36375 = arguments.length;
switch (G__36375) {
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
var G__36390 = arguments.length;
switch (G__36390) {
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
return (function (p1__36388_SHARP_){
if(cljs.core.truth_((p1__36388_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36388_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__36388_SHARP_.call(null,topic)))){
return p1__36388_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__36388_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36395 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36395 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36396){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36396 = meta36396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36397,meta36396__$1){
var self__ = this;
var _36397__$1 = this;
return (new cljs.core.async.t_cljs$core$async36395(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36396__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36395.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36397){
var self__ = this;
var _36397__$1 = this;
return self__.meta36396;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36395.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36395.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36395.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36395.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36395.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async36395.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36395.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36395.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36396","meta36396",-190666846,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36395.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36395";

cljs.core.async.t_cljs$core$async36395.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async36395");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36395.
 */
cljs.core.async.__GT_t_cljs$core$async36395 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async36395(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36396){
return (new cljs.core.async.t_cljs$core$async36395(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36396));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async36395(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34720__auto___37991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34720__auto___37991,mults,ensure_mult,p){
return (function (){
var f__34721__auto__ = (function (){var switch__34453__auto__ = ((function (c__34720__auto___37991,mults,ensure_mult,p){
return (function (state_36490){
var state_val_36491 = (state_36490[(1)]);
if((state_val_36491 === (7))){
var inst_36486 = (state_36490[(2)]);
var state_36490__$1 = state_36490;
var statearr_36498_37992 = state_36490__$1;
(statearr_36498_37992[(2)] = inst_36486);

(statearr_36498_37992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36491 === (20))){
var state_36490__$1 = state_36490;
var statearr_36499_37993 = state_36490__$1;
(statearr_36499_37993[(2)] = null);

(statearr_36499_37993[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36491 === (1))){
var state_36490__$1 = state_36490;
var statearr_36503_37994 = state_36490__$1;
(statearr_36503_37994[(2)] = null);

(statearr_36503_37994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36491 === (24))){
var inst_36469 = (state_36490[(7)]);
var inst_36478 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_36469);
var state_36490__$1 = state_36490;
var statearr_36504_37995 = state_36490__$1;
(statearr_36504_37995[(2)] = inst_36478);

(statearr_36504_37995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36491 === (4))){
var inst_36417 = (state_36490[(8)]);
var inst_36417__$1 = (state_36490[(2)]);
var inst_36418 = (inst_36417__$1 == null);
var state_36490__$1 = (function (){var statearr_36505 = state_36490;
(statearr_36505[(8)] = inst_36417__$1);

return statearr_36505;
})();
if(cljs.core.truth_(inst_36418)){
var statearr_36506_37996 = state_36490__$1;
(statearr_36506_37996[(1)] = (5));

} else {
var statearr_36507_37997 = state_36490__$1;
(statearr_36507_37997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36491 === (15))){
var inst_36463 = (state_36490[(2)]);
var state_36490__$1 = state_36490;
var statearr_36508_37998 = state_36490__$1;
(statearr_36508_37998[(2)] = inst_36463);

(statearr_36508_37998[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36491 === (21))){
var inst_36483 = (state_36490[(2)]);
var state_36490__$1 = (function (){var statearr_36509 = state_36490;
(statearr_36509[(9)] = inst_36483);

return statearr_36509;
})();
var statearr_36510_37999 = state_36490__$1;
(statearr_36510_37999[(2)] = null);

(statearr_36510_37999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36491 === (13))){
var inst_36445 = (state_36490[(10)]);
var inst_36447 = cljs.core.chunked_seq_QMARK_(inst_36445);
var state_36490__$1 = state_36490;
if(inst_36447){
var statearr_36511_38001 = state_36490__$1;
(statearr_36511_38001[(1)] = (16));

} else {
var statearr_36512_38002 = state_36490__$1;
(statearr_36512_38002[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36491 === (22))){
var inst_36475 = (state_36490[(2)]);
var state_36490__$1 = state_36490;
if(cljs.core.truth_(inst_36475)){
var statearr_36513_38003 = state_36490__$1;
(statearr_36513_38003[(1)] = (23));

} else {
var statearr_36514_38004 = state_36490__$1;
(statearr_36514_38004[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36491 === (6))){
var inst_36471 = (state_36490[(11)]);
var inst_36469 = (state_36490[(7)]);
var inst_36417 = (state_36490[(8)]);
var inst_36469__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_36417) : topic_fn.call(null,inst_36417));
var inst_36470 = cljs.core.deref(mults);
var inst_36471__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36470,inst_36469__$1);
var state_36490__$1 = (function (){var statearr_36515 = state_36490;
(statearr_36515[(11)] = inst_36471__$1);

(statearr_36515[(7)] = inst_36469__$1);

return statearr_36515;
})();
if(cljs.core.truth_(inst_36471__$1)){
var statearr_36516_38005 = state_36490__$1;
(statearr_36516_38005[(1)] = (19));

} else {
var statearr_36517_38006 = state_36490__$1;
(statearr_36517_38006[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36491 === (25))){
var inst_36480 = (state_36490[(2)]);
var state_36490__$1 = state_36490;
var statearr_36518_38007 = state_36490__$1;
(statearr_36518_38007[(2)] = inst_36480);

(statearr_36518_38007[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36491 === (17))){
var inst_36445 = (state_36490[(10)]);
var inst_36454 = cljs.core.first(inst_36445);
var inst_36455 = cljs.core.async.muxch_STAR_(inst_36454);
var inst_36456 = cljs.core.async.close_BANG_(inst_36455);
var inst_36457 = cljs.core.next(inst_36445);
var inst_36427 = inst_36457;
var inst_36428 = null;
var inst_36429 = (0);
var inst_36430 = (0);
var state_36490__$1 = (function (){var statearr_36519 = state_36490;
(statearr_36519[(12)] = inst_36456);

(statearr_36519[(13)] = inst_36430);

(statearr_36519[(14)] = inst_36428);

(statearr_36519[(15)] = inst_36429);

(statearr_36519[(16)] = inst_36427);

return statearr_36519;
})();
var statearr_36520_38008 = state_36490__$1;
(statearr_36520_38008[(2)] = null);

(statearr_36520_38008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36491 === (3))){
var inst_36488 = (state_36490[(2)]);
var state_36490__$1 = state_36490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36490__$1,inst_36488);
} else {
if((state_val_36491 === (12))){
var inst_36465 = (state_36490[(2)]);
var state_36490__$1 = state_36490;
var statearr_36521_38014 = state_36490__$1;
(statearr_36521_38014[(2)] = inst_36465);

(statearr_36521_38014[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36491 === (2))){
var state_36490__$1 = state_36490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36490__$1,(4),ch);
} else {
if((state_val_36491 === (23))){
var state_36490__$1 = state_36490;
var statearr_36522_38017 = state_36490__$1;
(statearr_36522_38017[(2)] = null);

(statearr_36522_38017[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36491 === (19))){
var inst_36471 = (state_36490[(11)]);
var inst_36417 = (state_36490[(8)]);
var inst_36473 = cljs.core.async.muxch_STAR_(inst_36471);
var state_36490__$1 = state_36490;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36490__$1,(22),inst_36473,inst_36417);
} else {
if((state_val_36491 === (11))){
var inst_36445 = (state_36490[(10)]);
var inst_36427 = (state_36490[(16)]);
var inst_36445__$1 = cljs.core.seq(inst_36427);
var state_36490__$1 = (function (){var statearr_36523 = state_36490;
(statearr_36523[(10)] = inst_36445__$1);

return statearr_36523;
})();
if(inst_36445__$1){
var statearr_36524_38018 = state_36490__$1;
(statearr_36524_38018[(1)] = (13));

} else {
var statearr_36525_38019 = state_36490__$1;
(statearr_36525_38019[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36491 === (9))){
var inst_36467 = (state_36490[(2)]);
var state_36490__$1 = state_36490;
var statearr_36526_38020 = state_36490__$1;
(statearr_36526_38020[(2)] = inst_36467);

(statearr_36526_38020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36491 === (5))){
var inst_36424 = cljs.core.deref(mults);
var inst_36425 = cljs.core.vals(inst_36424);
var inst_36426 = cljs.core.seq(inst_36425);
var inst_36427 = inst_36426;
var inst_36428 = null;
var inst_36429 = (0);
var inst_36430 = (0);
var state_36490__$1 = (function (){var statearr_36527 = state_36490;
(statearr_36527[(13)] = inst_36430);

(statearr_36527[(14)] = inst_36428);

(statearr_36527[(15)] = inst_36429);

(statearr_36527[(16)] = inst_36427);

return statearr_36527;
})();
var statearr_36529_38021 = state_36490__$1;
(statearr_36529_38021[(2)] = null);

(statearr_36529_38021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36491 === (14))){
var state_36490__$1 = state_36490;
var statearr_36534_38022 = state_36490__$1;
(statearr_36534_38022[(2)] = null);

(statearr_36534_38022[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36491 === (16))){
var inst_36445 = (state_36490[(10)]);
var inst_36449 = cljs.core.chunk_first(inst_36445);
var inst_36450 = cljs.core.chunk_rest(inst_36445);
var inst_36451 = cljs.core.count(inst_36449);
var inst_36427 = inst_36450;
var inst_36428 = inst_36449;
var inst_36429 = inst_36451;
var inst_36430 = (0);
var state_36490__$1 = (function (){var statearr_36535 = state_36490;
(statearr_36535[(13)] = inst_36430);

(statearr_36535[(14)] = inst_36428);

(statearr_36535[(15)] = inst_36429);

(statearr_36535[(16)] = inst_36427);

return statearr_36535;
})();
var statearr_36536_38023 = state_36490__$1;
(statearr_36536_38023[(2)] = null);

(statearr_36536_38023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36491 === (10))){
var inst_36430 = (state_36490[(13)]);
var inst_36428 = (state_36490[(14)]);
var inst_36429 = (state_36490[(15)]);
var inst_36427 = (state_36490[(16)]);
var inst_36437 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36428,inst_36430);
var inst_36438 = cljs.core.async.muxch_STAR_(inst_36437);
var inst_36439 = cljs.core.async.close_BANG_(inst_36438);
var inst_36441 = (inst_36430 + (1));
var tmp36531 = inst_36428;
var tmp36532 = inst_36429;
var tmp36533 = inst_36427;
var inst_36427__$1 = tmp36533;
var inst_36428__$1 = tmp36531;
var inst_36429__$1 = tmp36532;
var inst_36430__$1 = inst_36441;
var state_36490__$1 = (function (){var statearr_36537 = state_36490;
(statearr_36537[(17)] = inst_36439);

(statearr_36537[(13)] = inst_36430__$1);

(statearr_36537[(14)] = inst_36428__$1);

(statearr_36537[(15)] = inst_36429__$1);

(statearr_36537[(16)] = inst_36427__$1);

return statearr_36537;
})();
var statearr_36538_38026 = state_36490__$1;
(statearr_36538_38026[(2)] = null);

(statearr_36538_38026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36491 === (18))){
var inst_36460 = (state_36490[(2)]);
var state_36490__$1 = state_36490;
var statearr_36539_38027 = state_36490__$1;
(statearr_36539_38027[(2)] = inst_36460);

(statearr_36539_38027[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36491 === (8))){
var inst_36430 = (state_36490[(13)]);
var inst_36429 = (state_36490[(15)]);
var inst_36432 = (inst_36430 < inst_36429);
var inst_36433 = inst_36432;
var state_36490__$1 = state_36490;
if(cljs.core.truth_(inst_36433)){
var statearr_36540_38029 = state_36490__$1;
(statearr_36540_38029[(1)] = (10));

} else {
var statearr_36541_38030 = state_36490__$1;
(statearr_36541_38030[(1)] = (11));

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
});})(c__34720__auto___37991,mults,ensure_mult,p))
;
return ((function (switch__34453__auto__,c__34720__auto___37991,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34454__auto__ = null;
var cljs$core$async$state_machine__34454__auto____0 = (function (){
var statearr_36546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36546[(0)] = cljs$core$async$state_machine__34454__auto__);

(statearr_36546[(1)] = (1));

return statearr_36546;
});
var cljs$core$async$state_machine__34454__auto____1 = (function (state_36490){
while(true){
var ret_value__34455__auto__ = (function (){try{while(true){
var result__34456__auto__ = switch__34453__auto__(state_36490);
if(cljs.core.keyword_identical_QMARK_(result__34456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34456__auto__;
}
break;
}
}catch (e36549){if((e36549 instanceof Object)){
var ex__34457__auto__ = e36549;
var statearr_36550_38032 = state_36490;
(statearr_36550_38032[(5)] = ex__34457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36549;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38037 = state_36490;
state_36490 = G__38037;
continue;
} else {
return ret_value__34455__auto__;
}
break;
}
});
cljs$core$async$state_machine__34454__auto__ = function(state_36490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34454__auto____1.call(this,state_36490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34454__auto____0;
cljs$core$async$state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34454__auto____1;
return cljs$core$async$state_machine__34454__auto__;
})()
;})(switch__34453__auto__,c__34720__auto___37991,mults,ensure_mult,p))
})();
var state__34722__auto__ = (function (){var statearr_36553 = (f__34721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34721__auto__.cljs$core$IFn$_invoke$arity$0() : f__34721__auto__.call(null));
(statearr_36553[(6)] = c__34720__auto___37991);

return statearr_36553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34722__auto__);
});})(c__34720__auto___37991,mults,ensure_mult,p))
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
var G__36563 = arguments.length;
switch (G__36563) {
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
var G__36574 = arguments.length;
switch (G__36574) {
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
var G__36583 = arguments.length;
switch (G__36583) {
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
var c__34720__auto___38047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34720__auto___38047,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34721__auto__ = (function (){var switch__34453__auto__ = ((function (c__34720__auto___38047,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36631){
var state_val_36632 = (state_36631[(1)]);
if((state_val_36632 === (7))){
var state_36631__$1 = state_36631;
var statearr_36633_38048 = state_36631__$1;
(statearr_36633_38048[(2)] = null);

(statearr_36633_38048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36632 === (1))){
var state_36631__$1 = state_36631;
var statearr_36638_38049 = state_36631__$1;
(statearr_36638_38049[(2)] = null);

(statearr_36638_38049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36632 === (4))){
var inst_36592 = (state_36631[(7)]);
var inst_36594 = (inst_36592 < cnt);
var state_36631__$1 = state_36631;
if(cljs.core.truth_(inst_36594)){
var statearr_36640_38050 = state_36631__$1;
(statearr_36640_38050[(1)] = (6));

} else {
var statearr_36642_38051 = state_36631__$1;
(statearr_36642_38051[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36632 === (15))){
var inst_36627 = (state_36631[(2)]);
var state_36631__$1 = state_36631;
var statearr_36645_38052 = state_36631__$1;
(statearr_36645_38052[(2)] = inst_36627);

(statearr_36645_38052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36632 === (13))){
var inst_36620 = cljs.core.async.close_BANG_(out);
var state_36631__$1 = state_36631;
var statearr_36648_38054 = state_36631__$1;
(statearr_36648_38054[(2)] = inst_36620);

(statearr_36648_38054[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36632 === (6))){
var state_36631__$1 = state_36631;
var statearr_36650_38055 = state_36631__$1;
(statearr_36650_38055[(2)] = null);

(statearr_36650_38055[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36632 === (3))){
var inst_36629 = (state_36631[(2)]);
var state_36631__$1 = state_36631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36631__$1,inst_36629);
} else {
if((state_val_36632 === (12))){
var inst_36617 = (state_36631[(8)]);
var inst_36617__$1 = (state_36631[(2)]);
var inst_36618 = cljs.core.some(cljs.core.nil_QMARK_,inst_36617__$1);
var state_36631__$1 = (function (){var statearr_36668 = state_36631;
(statearr_36668[(8)] = inst_36617__$1);

return statearr_36668;
})();
if(cljs.core.truth_(inst_36618)){
var statearr_36670_38056 = state_36631__$1;
(statearr_36670_38056[(1)] = (13));

} else {
var statearr_36672_38057 = state_36631__$1;
(statearr_36672_38057[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36632 === (2))){
var inst_36591 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36592 = (0);
var state_36631__$1 = (function (){var statearr_36675 = state_36631;
(statearr_36675[(7)] = inst_36592);

(statearr_36675[(9)] = inst_36591);

return statearr_36675;
})();
var statearr_36677_38058 = state_36631__$1;
(statearr_36677_38058[(2)] = null);

(statearr_36677_38058[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36632 === (11))){
var inst_36592 = (state_36631[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36631,(10),Object,null,(9));
var inst_36604 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36592) : chs__$1.call(null,inst_36592));
var inst_36605 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36592) : done.call(null,inst_36592));
var inst_36606 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36604,inst_36605);
var state_36631__$1 = state_36631;
var statearr_36679_38059 = state_36631__$1;
(statearr_36679_38059[(2)] = inst_36606);


cljs.core.async.impl.ioc_helpers.process_exception(state_36631__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36632 === (9))){
var inst_36592 = (state_36631[(7)]);
var inst_36608 = (state_36631[(2)]);
var inst_36609 = (inst_36592 + (1));
var inst_36592__$1 = inst_36609;
var state_36631__$1 = (function (){var statearr_36682 = state_36631;
(statearr_36682[(7)] = inst_36592__$1);

(statearr_36682[(10)] = inst_36608);

return statearr_36682;
})();
var statearr_36683_38067 = state_36631__$1;
(statearr_36683_38067[(2)] = null);

(statearr_36683_38067[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36632 === (5))){
var inst_36615 = (state_36631[(2)]);
var state_36631__$1 = (function (){var statearr_36684 = state_36631;
(statearr_36684[(11)] = inst_36615);

return statearr_36684;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36631__$1,(12),dchan);
} else {
if((state_val_36632 === (14))){
var inst_36617 = (state_36631[(8)]);
var inst_36622 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36617);
var state_36631__$1 = state_36631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36631__$1,(16),out,inst_36622);
} else {
if((state_val_36632 === (16))){
var inst_36624 = (state_36631[(2)]);
var state_36631__$1 = (function (){var statearr_36689 = state_36631;
(statearr_36689[(12)] = inst_36624);

return statearr_36689;
})();
var statearr_36690_38068 = state_36631__$1;
(statearr_36690_38068[(2)] = null);

(statearr_36690_38068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36632 === (10))){
var inst_36599 = (state_36631[(2)]);
var inst_36600 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36631__$1 = (function (){var statearr_36692 = state_36631;
(statearr_36692[(13)] = inst_36599);

return statearr_36692;
})();
var statearr_36694_38069 = state_36631__$1;
(statearr_36694_38069[(2)] = inst_36600);


cljs.core.async.impl.ioc_helpers.process_exception(state_36631__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36632 === (8))){
var inst_36613 = (state_36631[(2)]);
var state_36631__$1 = state_36631;
var statearr_36697_38070 = state_36631__$1;
(statearr_36697_38070[(2)] = inst_36613);

(statearr_36697_38070[(1)] = (5));


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
});})(c__34720__auto___38047,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34453__auto__,c__34720__auto___38047,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34454__auto__ = null;
var cljs$core$async$state_machine__34454__auto____0 = (function (){
var statearr_36700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36700[(0)] = cljs$core$async$state_machine__34454__auto__);

(statearr_36700[(1)] = (1));

return statearr_36700;
});
var cljs$core$async$state_machine__34454__auto____1 = (function (state_36631){
while(true){
var ret_value__34455__auto__ = (function (){try{while(true){
var result__34456__auto__ = switch__34453__auto__(state_36631);
if(cljs.core.keyword_identical_QMARK_(result__34456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34456__auto__;
}
break;
}
}catch (e36703){if((e36703 instanceof Object)){
var ex__34457__auto__ = e36703;
var statearr_36704_38071 = state_36631;
(statearr_36704_38071[(5)] = ex__34457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38072 = state_36631;
state_36631 = G__38072;
continue;
} else {
return ret_value__34455__auto__;
}
break;
}
});
cljs$core$async$state_machine__34454__auto__ = function(state_36631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34454__auto____1.call(this,state_36631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34454__auto____0;
cljs$core$async$state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34454__auto____1;
return cljs$core$async$state_machine__34454__auto__;
})()
;})(switch__34453__auto__,c__34720__auto___38047,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34722__auto__ = (function (){var statearr_36706 = (f__34721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34721__auto__.cljs$core$IFn$_invoke$arity$0() : f__34721__auto__.call(null));
(statearr_36706[(6)] = c__34720__auto___38047);

return statearr_36706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34722__auto__);
});})(c__34720__auto___38047,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__36713 = arguments.length;
switch (G__36713) {
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
var c__34720__auto___38075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34720__auto___38075,out){
return (function (){
var f__34721__auto__ = (function (){var switch__34453__auto__ = ((function (c__34720__auto___38075,out){
return (function (state_36759){
var state_val_36760 = (state_36759[(1)]);
if((state_val_36760 === (7))){
var inst_36730 = (state_36759[(7)]);
var inst_36731 = (state_36759[(8)]);
var inst_36730__$1 = (state_36759[(2)]);
var inst_36731__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36730__$1,(0),null);
var inst_36732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36730__$1,(1),null);
var inst_36733 = (inst_36731__$1 == null);
var state_36759__$1 = (function (){var statearr_36765 = state_36759;
(statearr_36765[(7)] = inst_36730__$1);

(statearr_36765[(8)] = inst_36731__$1);

(statearr_36765[(9)] = inst_36732);

return statearr_36765;
})();
if(cljs.core.truth_(inst_36733)){
var statearr_36769_38076 = state_36759__$1;
(statearr_36769_38076[(1)] = (8));

} else {
var statearr_36770_38077 = state_36759__$1;
(statearr_36770_38077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (1))){
var inst_36719 = cljs.core.vec(chs);
var inst_36720 = inst_36719;
var state_36759__$1 = (function (){var statearr_36771 = state_36759;
(statearr_36771[(10)] = inst_36720);

return statearr_36771;
})();
var statearr_36773_38078 = state_36759__$1;
(statearr_36773_38078[(2)] = null);

(statearr_36773_38078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (4))){
var inst_36720 = (state_36759[(10)]);
var state_36759__$1 = state_36759;
return cljs.core.async.ioc_alts_BANG_(state_36759__$1,(7),inst_36720);
} else {
if((state_val_36760 === (6))){
var inst_36751 = (state_36759[(2)]);
var state_36759__$1 = state_36759;
var statearr_36781_38080 = state_36759__$1;
(statearr_36781_38080[(2)] = inst_36751);

(statearr_36781_38080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (3))){
var inst_36753 = (state_36759[(2)]);
var state_36759__$1 = state_36759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36759__$1,inst_36753);
} else {
if((state_val_36760 === (2))){
var inst_36720 = (state_36759[(10)]);
var inst_36723 = cljs.core.count(inst_36720);
var inst_36724 = (inst_36723 > (0));
var state_36759__$1 = state_36759;
if(cljs.core.truth_(inst_36724)){
var statearr_36789_38081 = state_36759__$1;
(statearr_36789_38081[(1)] = (4));

} else {
var statearr_36792_38082 = state_36759__$1;
(statearr_36792_38082[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (11))){
var inst_36720 = (state_36759[(10)]);
var inst_36744 = (state_36759[(2)]);
var tmp36784 = inst_36720;
var inst_36720__$1 = tmp36784;
var state_36759__$1 = (function (){var statearr_36795 = state_36759;
(statearr_36795[(10)] = inst_36720__$1);

(statearr_36795[(11)] = inst_36744);

return statearr_36795;
})();
var statearr_36798_38083 = state_36759__$1;
(statearr_36798_38083[(2)] = null);

(statearr_36798_38083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (9))){
var inst_36731 = (state_36759[(8)]);
var state_36759__$1 = state_36759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36759__$1,(11),out,inst_36731);
} else {
if((state_val_36760 === (5))){
var inst_36749 = cljs.core.async.close_BANG_(out);
var state_36759__$1 = state_36759;
var statearr_36808_38084 = state_36759__$1;
(statearr_36808_38084[(2)] = inst_36749);

(statearr_36808_38084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (10))){
var inst_36747 = (state_36759[(2)]);
var state_36759__$1 = state_36759;
var statearr_36811_38085 = state_36759__$1;
(statearr_36811_38085[(2)] = inst_36747);

(statearr_36811_38085[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (8))){
var inst_36730 = (state_36759[(7)]);
var inst_36720 = (state_36759[(10)]);
var inst_36731 = (state_36759[(8)]);
var inst_36732 = (state_36759[(9)]);
var inst_36739 = (function (){var cs = inst_36720;
var vec__36726 = inst_36730;
var v = inst_36731;
var c = inst_36732;
return ((function (cs,vec__36726,v,c,inst_36730,inst_36720,inst_36731,inst_36732,state_val_36760,c__34720__auto___38075,out){
return (function (p1__36707_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36707_SHARP_);
});
;})(cs,vec__36726,v,c,inst_36730,inst_36720,inst_36731,inst_36732,state_val_36760,c__34720__auto___38075,out))
})();
var inst_36740 = cljs.core.filterv(inst_36739,inst_36720);
var inst_36720__$1 = inst_36740;
var state_36759__$1 = (function (){var statearr_36816 = state_36759;
(statearr_36816[(10)] = inst_36720__$1);

return statearr_36816;
})();
var statearr_36817_38086 = state_36759__$1;
(statearr_36817_38086[(2)] = null);

(statearr_36817_38086[(1)] = (2));


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
});})(c__34720__auto___38075,out))
;
return ((function (switch__34453__auto__,c__34720__auto___38075,out){
return (function() {
var cljs$core$async$state_machine__34454__auto__ = null;
var cljs$core$async$state_machine__34454__auto____0 = (function (){
var statearr_36824 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36824[(0)] = cljs$core$async$state_machine__34454__auto__);

(statearr_36824[(1)] = (1));

return statearr_36824;
});
var cljs$core$async$state_machine__34454__auto____1 = (function (state_36759){
while(true){
var ret_value__34455__auto__ = (function (){try{while(true){
var result__34456__auto__ = switch__34453__auto__(state_36759);
if(cljs.core.keyword_identical_QMARK_(result__34456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34456__auto__;
}
break;
}
}catch (e36825){if((e36825 instanceof Object)){
var ex__34457__auto__ = e36825;
var statearr_36832_38087 = state_36759;
(statearr_36832_38087[(5)] = ex__34457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36825;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38088 = state_36759;
state_36759 = G__38088;
continue;
} else {
return ret_value__34455__auto__;
}
break;
}
});
cljs$core$async$state_machine__34454__auto__ = function(state_36759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34454__auto____1.call(this,state_36759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34454__auto____0;
cljs$core$async$state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34454__auto____1;
return cljs$core$async$state_machine__34454__auto__;
})()
;})(switch__34453__auto__,c__34720__auto___38075,out))
})();
var state__34722__auto__ = (function (){var statearr_36840 = (f__34721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34721__auto__.cljs$core$IFn$_invoke$arity$0() : f__34721__auto__.call(null));
(statearr_36840[(6)] = c__34720__auto___38075);

return statearr_36840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34722__auto__);
});})(c__34720__auto___38075,out))
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
var G__36854 = arguments.length;
switch (G__36854) {
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
var c__34720__auto___38094 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34720__auto___38094,out){
return (function (){
var f__34721__auto__ = (function (){var switch__34453__auto__ = ((function (c__34720__auto___38094,out){
return (function (state_36897){
var state_val_36899 = (state_36897[(1)]);
if((state_val_36899 === (7))){
var inst_36871 = (state_36897[(7)]);
var inst_36871__$1 = (state_36897[(2)]);
var inst_36874 = (inst_36871__$1 == null);
var inst_36875 = cljs.core.not(inst_36874);
var state_36897__$1 = (function (){var statearr_36906 = state_36897;
(statearr_36906[(7)] = inst_36871__$1);

return statearr_36906;
})();
if(inst_36875){
var statearr_36907_38099 = state_36897__$1;
(statearr_36907_38099[(1)] = (8));

} else {
var statearr_36909_38100 = state_36897__$1;
(statearr_36909_38100[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36899 === (1))){
var inst_36866 = (0);
var state_36897__$1 = (function (){var statearr_36912 = state_36897;
(statearr_36912[(8)] = inst_36866);

return statearr_36912;
})();
var statearr_36915_38101 = state_36897__$1;
(statearr_36915_38101[(2)] = null);

(statearr_36915_38101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36899 === (4))){
var state_36897__$1 = state_36897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36897__$1,(7),ch);
} else {
if((state_val_36899 === (6))){
var inst_36891 = (state_36897[(2)]);
var state_36897__$1 = state_36897;
var statearr_36930_38102 = state_36897__$1;
(statearr_36930_38102[(2)] = inst_36891);

(statearr_36930_38102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36899 === (3))){
var inst_36893 = (state_36897[(2)]);
var inst_36895 = cljs.core.async.close_BANG_(out);
var state_36897__$1 = (function (){var statearr_36939 = state_36897;
(statearr_36939[(9)] = inst_36893);

return statearr_36939;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36897__$1,inst_36895);
} else {
if((state_val_36899 === (2))){
var inst_36866 = (state_36897[(8)]);
var inst_36868 = (inst_36866 < n);
var state_36897__$1 = state_36897;
if(cljs.core.truth_(inst_36868)){
var statearr_36948_38105 = state_36897__$1;
(statearr_36948_38105[(1)] = (4));

} else {
var statearr_36949_38106 = state_36897__$1;
(statearr_36949_38106[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36899 === (11))){
var inst_36866 = (state_36897[(8)]);
var inst_36878 = (state_36897[(2)]);
var inst_36880 = (inst_36866 + (1));
var inst_36866__$1 = inst_36880;
var state_36897__$1 = (function (){var statearr_36958 = state_36897;
(statearr_36958[(8)] = inst_36866__$1);

(statearr_36958[(10)] = inst_36878);

return statearr_36958;
})();
var statearr_36964_38107 = state_36897__$1;
(statearr_36964_38107[(2)] = null);

(statearr_36964_38107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36899 === (9))){
var state_36897__$1 = state_36897;
var statearr_36968_38108 = state_36897__$1;
(statearr_36968_38108[(2)] = null);

(statearr_36968_38108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36899 === (5))){
var state_36897__$1 = state_36897;
var statearr_36980_38109 = state_36897__$1;
(statearr_36980_38109[(2)] = null);

(statearr_36980_38109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36899 === (10))){
var inst_36888 = (state_36897[(2)]);
var state_36897__$1 = state_36897;
var statearr_36989_38110 = state_36897__$1;
(statearr_36989_38110[(2)] = inst_36888);

(statearr_36989_38110[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36899 === (8))){
var inst_36871 = (state_36897[(7)]);
var state_36897__$1 = state_36897;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36897__$1,(11),out,inst_36871);
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
});})(c__34720__auto___38094,out))
;
return ((function (switch__34453__auto__,c__34720__auto___38094,out){
return (function() {
var cljs$core$async$state_machine__34454__auto__ = null;
var cljs$core$async$state_machine__34454__auto____0 = (function (){
var statearr_36994 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36994[(0)] = cljs$core$async$state_machine__34454__auto__);

(statearr_36994[(1)] = (1));

return statearr_36994;
});
var cljs$core$async$state_machine__34454__auto____1 = (function (state_36897){
while(true){
var ret_value__34455__auto__ = (function (){try{while(true){
var result__34456__auto__ = switch__34453__auto__(state_36897);
if(cljs.core.keyword_identical_QMARK_(result__34456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34456__auto__;
}
break;
}
}catch (e36996){if((e36996 instanceof Object)){
var ex__34457__auto__ = e36996;
var statearr_36997_38111 = state_36897;
(statearr_36997_38111[(5)] = ex__34457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36996;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38112 = state_36897;
state_36897 = G__38112;
continue;
} else {
return ret_value__34455__auto__;
}
break;
}
});
cljs$core$async$state_machine__34454__auto__ = function(state_36897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34454__auto____1.call(this,state_36897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34454__auto____0;
cljs$core$async$state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34454__auto____1;
return cljs$core$async$state_machine__34454__auto__;
})()
;})(switch__34453__auto__,c__34720__auto___38094,out))
})();
var state__34722__auto__ = (function (){var statearr_37001 = (f__34721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34721__auto__.cljs$core$IFn$_invoke$arity$0() : f__34721__auto__.call(null));
(statearr_37001[(6)] = c__34720__auto___38094);

return statearr_37001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34722__auto__);
});})(c__34720__auto___38094,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37004 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37004 = (function (f,ch,meta37005){
this.f = f;
this.ch = ch;
this.meta37005 = meta37005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37006,meta37005__$1){
var self__ = this;
var _37006__$1 = this;
return (new cljs.core.async.t_cljs$core$async37004(self__.f,self__.ch,meta37005__$1));
});

cljs.core.async.t_cljs$core$async37004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37006){
var self__ = this;
var _37006__$1 = this;
return self__.meta37005;
});

cljs.core.async.t_cljs$core$async37004.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37004.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async37004.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async37004.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37004.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37008 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37008 = (function (f,ch,meta37005,_,fn1,meta37009){
this.f = f;
this.ch = ch;
this.meta37005 = meta37005;
this._ = _;
this.fn1 = fn1;
this.meta37009 = meta37009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_37010,meta37009__$1){
var self__ = this;
var _37010__$1 = this;
return (new cljs.core.async.t_cljs$core$async37008(self__.f,self__.ch,self__.meta37005,self__._,self__.fn1,meta37009__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async37008.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_37010){
var self__ = this;
var _37010__$1 = this;
return self__.meta37009;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37008.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37008.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37008.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37008.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__37003_SHARP_){
var G__37020 = (((p1__37003_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__37003_SHARP_) : self__.f.call(null,p1__37003_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__37020) : f1.call(null,G__37020));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async37008.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37005","meta37005",1488828637,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37004","cljs.core.async/t_cljs$core$async37004",-1195180400,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37009","meta37009",-269522738,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37008.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37008.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37008";

cljs.core.async.t_cljs$core$async37008.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async37008");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37008.
 */
cljs.core.async.__GT_t_cljs$core$async37008 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37008(f__$1,ch__$1,meta37005__$1,___$2,fn1__$1,meta37009){
return (new cljs.core.async.t_cljs$core$async37008(f__$1,ch__$1,meta37005__$1,___$2,fn1__$1,meta37009));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async37008(self__.f,self__.ch,self__.meta37005,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__37034 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__37034) : self__.f.call(null,G__37034));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async37004.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37004.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async37004.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37005","meta37005",1488828637,null)], null);
});

cljs.core.async.t_cljs$core$async37004.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37004.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37004";

cljs.core.async.t_cljs$core$async37004.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async37004");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37004.
 */
cljs.core.async.__GT_t_cljs$core$async37004 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37004(f__$1,ch__$1,meta37005){
return (new cljs.core.async.t_cljs$core$async37004(f__$1,ch__$1,meta37005));
});

}

return (new cljs.core.async.t_cljs$core$async37004(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37038 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37038 = (function (f,ch,meta37039){
this.f = f;
this.ch = ch;
this.meta37039 = meta37039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37040,meta37039__$1){
var self__ = this;
var _37040__$1 = this;
return (new cljs.core.async.t_cljs$core$async37038(self__.f,self__.ch,meta37039__$1));
});

cljs.core.async.t_cljs$core$async37038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37040){
var self__ = this;
var _37040__$1 = this;
return self__.meta37039;
});

cljs.core.async.t_cljs$core$async37038.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37038.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async37038.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37038.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37038.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37038.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async37038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37039","meta37039",-2013090935,null)], null);
});

cljs.core.async.t_cljs$core$async37038.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37038";

cljs.core.async.t_cljs$core$async37038.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async37038");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37038.
 */
cljs.core.async.__GT_t_cljs$core$async37038 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37038(f__$1,ch__$1,meta37039){
return (new cljs.core.async.t_cljs$core$async37038(f__$1,ch__$1,meta37039));
});

}

return (new cljs.core.async.t_cljs$core$async37038(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37045 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37045 = (function (p,ch,meta37046){
this.p = p;
this.ch = ch;
this.meta37046 = meta37046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37047,meta37046__$1){
var self__ = this;
var _37047__$1 = this;
return (new cljs.core.async.t_cljs$core$async37045(self__.p,self__.ch,meta37046__$1));
});

cljs.core.async.t_cljs$core$async37045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37047){
var self__ = this;
var _37047__$1 = this;
return self__.meta37046;
});

cljs.core.async.t_cljs$core$async37045.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37045.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async37045.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async37045.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37045.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37045.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37045.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async37045.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37046","meta37046",1408678192,null)], null);
});

cljs.core.async.t_cljs$core$async37045.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37045.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37045";

cljs.core.async.t_cljs$core$async37045.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async37045");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37045.
 */
cljs.core.async.__GT_t_cljs$core$async37045 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37045(p__$1,ch__$1,meta37046){
return (new cljs.core.async.t_cljs$core$async37045(p__$1,ch__$1,meta37046));
});

}

return (new cljs.core.async.t_cljs$core$async37045(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37052 = arguments.length;
switch (G__37052) {
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
var c__34720__auto___38128 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34720__auto___38128,out){
return (function (){
var f__34721__auto__ = (function (){var switch__34453__auto__ = ((function (c__34720__auto___38128,out){
return (function (state_37073){
var state_val_37074 = (state_37073[(1)]);
if((state_val_37074 === (7))){
var inst_37069 = (state_37073[(2)]);
var state_37073__$1 = state_37073;
var statearr_37076_38132 = state_37073__$1;
(statearr_37076_38132[(2)] = inst_37069);

(statearr_37076_38132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (1))){
var state_37073__$1 = state_37073;
var statearr_37077_38133 = state_37073__$1;
(statearr_37077_38133[(2)] = null);

(statearr_37077_38133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (4))){
var inst_37055 = (state_37073[(7)]);
var inst_37055__$1 = (state_37073[(2)]);
var inst_37056 = (inst_37055__$1 == null);
var state_37073__$1 = (function (){var statearr_37078 = state_37073;
(statearr_37078[(7)] = inst_37055__$1);

return statearr_37078;
})();
if(cljs.core.truth_(inst_37056)){
var statearr_37079_38134 = state_37073__$1;
(statearr_37079_38134[(1)] = (5));

} else {
var statearr_37080_38135 = state_37073__$1;
(statearr_37080_38135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (6))){
var inst_37055 = (state_37073[(7)]);
var inst_37060 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37055) : p.call(null,inst_37055));
var state_37073__$1 = state_37073;
if(cljs.core.truth_(inst_37060)){
var statearr_37081_38136 = state_37073__$1;
(statearr_37081_38136[(1)] = (8));

} else {
var statearr_37082_38137 = state_37073__$1;
(statearr_37082_38137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (3))){
var inst_37071 = (state_37073[(2)]);
var state_37073__$1 = state_37073;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37073__$1,inst_37071);
} else {
if((state_val_37074 === (2))){
var state_37073__$1 = state_37073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37073__$1,(4),ch);
} else {
if((state_val_37074 === (11))){
var inst_37063 = (state_37073[(2)]);
var state_37073__$1 = state_37073;
var statearr_37083_38141 = state_37073__$1;
(statearr_37083_38141[(2)] = inst_37063);

(statearr_37083_38141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (9))){
var state_37073__$1 = state_37073;
var statearr_37084_38142 = state_37073__$1;
(statearr_37084_38142[(2)] = null);

(statearr_37084_38142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (5))){
var inst_37058 = cljs.core.async.close_BANG_(out);
var state_37073__$1 = state_37073;
var statearr_37085_38143 = state_37073__$1;
(statearr_37085_38143[(2)] = inst_37058);

(statearr_37085_38143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (10))){
var inst_37066 = (state_37073[(2)]);
var state_37073__$1 = (function (){var statearr_37086 = state_37073;
(statearr_37086[(8)] = inst_37066);

return statearr_37086;
})();
var statearr_37087_38147 = state_37073__$1;
(statearr_37087_38147[(2)] = null);

(statearr_37087_38147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (8))){
var inst_37055 = (state_37073[(7)]);
var state_37073__$1 = state_37073;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37073__$1,(11),out,inst_37055);
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
});})(c__34720__auto___38128,out))
;
return ((function (switch__34453__auto__,c__34720__auto___38128,out){
return (function() {
var cljs$core$async$state_machine__34454__auto__ = null;
var cljs$core$async$state_machine__34454__auto____0 = (function (){
var statearr_37090 = [null,null,null,null,null,null,null,null,null];
(statearr_37090[(0)] = cljs$core$async$state_machine__34454__auto__);

(statearr_37090[(1)] = (1));

return statearr_37090;
});
var cljs$core$async$state_machine__34454__auto____1 = (function (state_37073){
while(true){
var ret_value__34455__auto__ = (function (){try{while(true){
var result__34456__auto__ = switch__34453__auto__(state_37073);
if(cljs.core.keyword_identical_QMARK_(result__34456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34456__auto__;
}
break;
}
}catch (e37091){if((e37091 instanceof Object)){
var ex__34457__auto__ = e37091;
var statearr_37092_38148 = state_37073;
(statearr_37092_38148[(5)] = ex__34457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37091;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38152 = state_37073;
state_37073 = G__38152;
continue;
} else {
return ret_value__34455__auto__;
}
break;
}
});
cljs$core$async$state_machine__34454__auto__ = function(state_37073){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34454__auto____1.call(this,state_37073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34454__auto____0;
cljs$core$async$state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34454__auto____1;
return cljs$core$async$state_machine__34454__auto__;
})()
;})(switch__34453__auto__,c__34720__auto___38128,out))
})();
var state__34722__auto__ = (function (){var statearr_37093 = (f__34721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34721__auto__.cljs$core$IFn$_invoke$arity$0() : f__34721__auto__.call(null));
(statearr_37093[(6)] = c__34720__auto___38128);

return statearr_37093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34722__auto__);
});})(c__34720__auto___38128,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__37095 = arguments.length;
switch (G__37095) {
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
var c__34720__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34720__auto__){
return (function (){
var f__34721__auto__ = (function (){var switch__34453__auto__ = ((function (c__34720__auto__){
return (function (state_37157){
var state_val_37158 = (state_37157[(1)]);
if((state_val_37158 === (7))){
var inst_37153 = (state_37157[(2)]);
var state_37157__$1 = state_37157;
var statearr_37159_38155 = state_37157__$1;
(statearr_37159_38155[(2)] = inst_37153);

(statearr_37159_38155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37158 === (20))){
var inst_37123 = (state_37157[(7)]);
var inst_37134 = (state_37157[(2)]);
var inst_37135 = cljs.core.next(inst_37123);
var inst_37109 = inst_37135;
var inst_37110 = null;
var inst_37111 = (0);
var inst_37112 = (0);
var state_37157__$1 = (function (){var statearr_37160 = state_37157;
(statearr_37160[(8)] = inst_37134);

(statearr_37160[(9)] = inst_37112);

(statearr_37160[(10)] = inst_37110);

(statearr_37160[(11)] = inst_37109);

(statearr_37160[(12)] = inst_37111);

return statearr_37160;
})();
var statearr_37161_38156 = state_37157__$1;
(statearr_37161_38156[(2)] = null);

(statearr_37161_38156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37158 === (1))){
var state_37157__$1 = state_37157;
var statearr_37162_38157 = state_37157__$1;
(statearr_37162_38157[(2)] = null);

(statearr_37162_38157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37158 === (4))){
var inst_37098 = (state_37157[(13)]);
var inst_37098__$1 = (state_37157[(2)]);
var inst_37099 = (inst_37098__$1 == null);
var state_37157__$1 = (function (){var statearr_37163 = state_37157;
(statearr_37163[(13)] = inst_37098__$1);

return statearr_37163;
})();
if(cljs.core.truth_(inst_37099)){
var statearr_37164_38162 = state_37157__$1;
(statearr_37164_38162[(1)] = (5));

} else {
var statearr_37165_38168 = state_37157__$1;
(statearr_37165_38168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37158 === (15))){
var state_37157__$1 = state_37157;
var statearr_37169_38169 = state_37157__$1;
(statearr_37169_38169[(2)] = null);

(statearr_37169_38169[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37158 === (21))){
var state_37157__$1 = state_37157;
var statearr_37170_38170 = state_37157__$1;
(statearr_37170_38170[(2)] = null);

(statearr_37170_38170[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37158 === (13))){
var inst_37112 = (state_37157[(9)]);
var inst_37110 = (state_37157[(10)]);
var inst_37109 = (state_37157[(11)]);
var inst_37111 = (state_37157[(12)]);
var inst_37119 = (state_37157[(2)]);
var inst_37120 = (inst_37112 + (1));
var tmp37166 = inst_37110;
var tmp37167 = inst_37109;
var tmp37168 = inst_37111;
var inst_37109__$1 = tmp37167;
var inst_37110__$1 = tmp37166;
var inst_37111__$1 = tmp37168;
var inst_37112__$1 = inst_37120;
var state_37157__$1 = (function (){var statearr_37171 = state_37157;
(statearr_37171[(9)] = inst_37112__$1);

(statearr_37171[(10)] = inst_37110__$1);

(statearr_37171[(11)] = inst_37109__$1);

(statearr_37171[(14)] = inst_37119);

(statearr_37171[(12)] = inst_37111__$1);

return statearr_37171;
})();
var statearr_37173_38177 = state_37157__$1;
(statearr_37173_38177[(2)] = null);

(statearr_37173_38177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37158 === (22))){
var state_37157__$1 = state_37157;
var statearr_37174_38178 = state_37157__$1;
(statearr_37174_38178[(2)] = null);

(statearr_37174_38178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37158 === (6))){
var inst_37098 = (state_37157[(13)]);
var inst_37107 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37098) : f.call(null,inst_37098));
var inst_37108 = cljs.core.seq(inst_37107);
var inst_37109 = inst_37108;
var inst_37110 = null;
var inst_37111 = (0);
var inst_37112 = (0);
var state_37157__$1 = (function (){var statearr_37175 = state_37157;
(statearr_37175[(9)] = inst_37112);

(statearr_37175[(10)] = inst_37110);

(statearr_37175[(11)] = inst_37109);

(statearr_37175[(12)] = inst_37111);

return statearr_37175;
})();
var statearr_37176_38179 = state_37157__$1;
(statearr_37176_38179[(2)] = null);

(statearr_37176_38179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37158 === (17))){
var inst_37123 = (state_37157[(7)]);
var inst_37127 = cljs.core.chunk_first(inst_37123);
var inst_37128 = cljs.core.chunk_rest(inst_37123);
var inst_37129 = cljs.core.count(inst_37127);
var inst_37109 = inst_37128;
var inst_37110 = inst_37127;
var inst_37111 = inst_37129;
var inst_37112 = (0);
var state_37157__$1 = (function (){var statearr_37177 = state_37157;
(statearr_37177[(9)] = inst_37112);

(statearr_37177[(10)] = inst_37110);

(statearr_37177[(11)] = inst_37109);

(statearr_37177[(12)] = inst_37111);

return statearr_37177;
})();
var statearr_37178_38180 = state_37157__$1;
(statearr_37178_38180[(2)] = null);

(statearr_37178_38180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37158 === (3))){
var inst_37155 = (state_37157[(2)]);
var state_37157__$1 = state_37157;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37157__$1,inst_37155);
} else {
if((state_val_37158 === (12))){
var inst_37143 = (state_37157[(2)]);
var state_37157__$1 = state_37157;
var statearr_37179_38181 = state_37157__$1;
(statearr_37179_38181[(2)] = inst_37143);

(statearr_37179_38181[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37158 === (2))){
var state_37157__$1 = state_37157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37157__$1,(4),in$);
} else {
if((state_val_37158 === (23))){
var inst_37151 = (state_37157[(2)]);
var state_37157__$1 = state_37157;
var statearr_37180_38182 = state_37157__$1;
(statearr_37180_38182[(2)] = inst_37151);

(statearr_37180_38182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37158 === (19))){
var inst_37138 = (state_37157[(2)]);
var state_37157__$1 = state_37157;
var statearr_37181_38183 = state_37157__$1;
(statearr_37181_38183[(2)] = inst_37138);

(statearr_37181_38183[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37158 === (11))){
var inst_37123 = (state_37157[(7)]);
var inst_37109 = (state_37157[(11)]);
var inst_37123__$1 = cljs.core.seq(inst_37109);
var state_37157__$1 = (function (){var statearr_37182 = state_37157;
(statearr_37182[(7)] = inst_37123__$1);

return statearr_37182;
})();
if(inst_37123__$1){
var statearr_37183_38184 = state_37157__$1;
(statearr_37183_38184[(1)] = (14));

} else {
var statearr_37184_38185 = state_37157__$1;
(statearr_37184_38185[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37158 === (9))){
var inst_37145 = (state_37157[(2)]);
var inst_37146 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_37157__$1 = (function (){var statearr_37185 = state_37157;
(statearr_37185[(15)] = inst_37145);

return statearr_37185;
})();
if(cljs.core.truth_(inst_37146)){
var statearr_37186_38186 = state_37157__$1;
(statearr_37186_38186[(1)] = (21));

} else {
var statearr_37187_38187 = state_37157__$1;
(statearr_37187_38187[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37158 === (5))){
var inst_37101 = cljs.core.async.close_BANG_(out);
var state_37157__$1 = state_37157;
var statearr_37188_38194 = state_37157__$1;
(statearr_37188_38194[(2)] = inst_37101);

(statearr_37188_38194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37158 === (14))){
var inst_37123 = (state_37157[(7)]);
var inst_37125 = cljs.core.chunked_seq_QMARK_(inst_37123);
var state_37157__$1 = state_37157;
if(inst_37125){
var statearr_37189_38195 = state_37157__$1;
(statearr_37189_38195[(1)] = (17));

} else {
var statearr_37190_38196 = state_37157__$1;
(statearr_37190_38196[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37158 === (16))){
var inst_37141 = (state_37157[(2)]);
var state_37157__$1 = state_37157;
var statearr_37191_38197 = state_37157__$1;
(statearr_37191_38197[(2)] = inst_37141);

(statearr_37191_38197[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37158 === (10))){
var inst_37112 = (state_37157[(9)]);
var inst_37110 = (state_37157[(10)]);
var inst_37117 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37110,inst_37112);
var state_37157__$1 = state_37157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37157__$1,(13),out,inst_37117);
} else {
if((state_val_37158 === (18))){
var inst_37123 = (state_37157[(7)]);
var inst_37132 = cljs.core.first(inst_37123);
var state_37157__$1 = state_37157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37157__$1,(20),out,inst_37132);
} else {
if((state_val_37158 === (8))){
var inst_37112 = (state_37157[(9)]);
var inst_37111 = (state_37157[(12)]);
var inst_37114 = (inst_37112 < inst_37111);
var inst_37115 = inst_37114;
var state_37157__$1 = state_37157;
if(cljs.core.truth_(inst_37115)){
var statearr_37192_38198 = state_37157__$1;
(statearr_37192_38198[(1)] = (10));

} else {
var statearr_37193_38199 = state_37157__$1;
(statearr_37193_38199[(1)] = (11));

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
});})(c__34720__auto__))
;
return ((function (switch__34453__auto__,c__34720__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34454__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34454__auto____0 = (function (){
var statearr_37194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37194[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34454__auto__);

(statearr_37194[(1)] = (1));

return statearr_37194;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34454__auto____1 = (function (state_37157){
while(true){
var ret_value__34455__auto__ = (function (){try{while(true){
var result__34456__auto__ = switch__34453__auto__(state_37157);
if(cljs.core.keyword_identical_QMARK_(result__34456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34456__auto__;
}
break;
}
}catch (e37195){if((e37195 instanceof Object)){
var ex__34457__auto__ = e37195;
var statearr_37196_38200 = state_37157;
(statearr_37196_38200[(5)] = ex__34457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37195;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38201 = state_37157;
state_37157 = G__38201;
continue;
} else {
return ret_value__34455__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34454__auto__ = function(state_37157){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34454__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34454__auto____1.call(this,state_37157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34454__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34454__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34454__auto__;
})()
;})(switch__34453__auto__,c__34720__auto__))
})();
var state__34722__auto__ = (function (){var statearr_37197 = (f__34721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34721__auto__.cljs$core$IFn$_invoke$arity$0() : f__34721__auto__.call(null));
(statearr_37197[(6)] = c__34720__auto__);

return statearr_37197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34722__auto__);
});})(c__34720__auto__))
);

return c__34720__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__37199 = arguments.length;
switch (G__37199) {
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
var G__37201 = arguments.length;
switch (G__37201) {
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
var G__37203 = arguments.length;
switch (G__37203) {
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
var c__34720__auto___38211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34720__auto___38211,out){
return (function (){
var f__34721__auto__ = (function (){var switch__34453__auto__ = ((function (c__34720__auto___38211,out){
return (function (state_37227){
var state_val_37228 = (state_37227[(1)]);
if((state_val_37228 === (7))){
var inst_37222 = (state_37227[(2)]);
var state_37227__$1 = state_37227;
var statearr_37229_38212 = state_37227__$1;
(statearr_37229_38212[(2)] = inst_37222);

(statearr_37229_38212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (1))){
var inst_37204 = null;
var state_37227__$1 = (function (){var statearr_37230 = state_37227;
(statearr_37230[(7)] = inst_37204);

return statearr_37230;
})();
var statearr_37231_38213 = state_37227__$1;
(statearr_37231_38213[(2)] = null);

(statearr_37231_38213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (4))){
var inst_37207 = (state_37227[(8)]);
var inst_37207__$1 = (state_37227[(2)]);
var inst_37208 = (inst_37207__$1 == null);
var inst_37209 = cljs.core.not(inst_37208);
var state_37227__$1 = (function (){var statearr_37232 = state_37227;
(statearr_37232[(8)] = inst_37207__$1);

return statearr_37232;
})();
if(inst_37209){
var statearr_37233_38214 = state_37227__$1;
(statearr_37233_38214[(1)] = (5));

} else {
var statearr_37234_38215 = state_37227__$1;
(statearr_37234_38215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (6))){
var state_37227__$1 = state_37227;
var statearr_37235_38216 = state_37227__$1;
(statearr_37235_38216[(2)] = null);

(statearr_37235_38216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (3))){
var inst_37224 = (state_37227[(2)]);
var inst_37225 = cljs.core.async.close_BANG_(out);
var state_37227__$1 = (function (){var statearr_37236 = state_37227;
(statearr_37236[(9)] = inst_37224);

return statearr_37236;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37227__$1,inst_37225);
} else {
if((state_val_37228 === (2))){
var state_37227__$1 = state_37227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37227__$1,(4),ch);
} else {
if((state_val_37228 === (11))){
var inst_37207 = (state_37227[(8)]);
var inst_37216 = (state_37227[(2)]);
var inst_37204 = inst_37207;
var state_37227__$1 = (function (){var statearr_37237 = state_37227;
(statearr_37237[(7)] = inst_37204);

(statearr_37237[(10)] = inst_37216);

return statearr_37237;
})();
var statearr_37238_38223 = state_37227__$1;
(statearr_37238_38223[(2)] = null);

(statearr_37238_38223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (9))){
var inst_37207 = (state_37227[(8)]);
var state_37227__$1 = state_37227;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37227__$1,(11),out,inst_37207);
} else {
if((state_val_37228 === (5))){
var inst_37204 = (state_37227[(7)]);
var inst_37207 = (state_37227[(8)]);
var inst_37211 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37207,inst_37204);
var state_37227__$1 = state_37227;
if(inst_37211){
var statearr_37240_38224 = state_37227__$1;
(statearr_37240_38224[(1)] = (8));

} else {
var statearr_37241_38225 = state_37227__$1;
(statearr_37241_38225[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (10))){
var inst_37219 = (state_37227[(2)]);
var state_37227__$1 = state_37227;
var statearr_37242_38226 = state_37227__$1;
(statearr_37242_38226[(2)] = inst_37219);

(statearr_37242_38226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (8))){
var inst_37204 = (state_37227[(7)]);
var tmp37239 = inst_37204;
var inst_37204__$1 = tmp37239;
var state_37227__$1 = (function (){var statearr_37243 = state_37227;
(statearr_37243[(7)] = inst_37204__$1);

return statearr_37243;
})();
var statearr_37244_38227 = state_37227__$1;
(statearr_37244_38227[(2)] = null);

(statearr_37244_38227[(1)] = (2));


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
});})(c__34720__auto___38211,out))
;
return ((function (switch__34453__auto__,c__34720__auto___38211,out){
return (function() {
var cljs$core$async$state_machine__34454__auto__ = null;
var cljs$core$async$state_machine__34454__auto____0 = (function (){
var statearr_37245 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37245[(0)] = cljs$core$async$state_machine__34454__auto__);

(statearr_37245[(1)] = (1));

return statearr_37245;
});
var cljs$core$async$state_machine__34454__auto____1 = (function (state_37227){
while(true){
var ret_value__34455__auto__ = (function (){try{while(true){
var result__34456__auto__ = switch__34453__auto__(state_37227);
if(cljs.core.keyword_identical_QMARK_(result__34456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34456__auto__;
}
break;
}
}catch (e37246){if((e37246 instanceof Object)){
var ex__34457__auto__ = e37246;
var statearr_37247_38228 = state_37227;
(statearr_37247_38228[(5)] = ex__34457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37246;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38229 = state_37227;
state_37227 = G__38229;
continue;
} else {
return ret_value__34455__auto__;
}
break;
}
});
cljs$core$async$state_machine__34454__auto__ = function(state_37227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34454__auto____1.call(this,state_37227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34454__auto____0;
cljs$core$async$state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34454__auto____1;
return cljs$core$async$state_machine__34454__auto__;
})()
;})(switch__34453__auto__,c__34720__auto___38211,out))
})();
var state__34722__auto__ = (function (){var statearr_37248 = (f__34721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34721__auto__.cljs$core$IFn$_invoke$arity$0() : f__34721__auto__.call(null));
(statearr_37248[(6)] = c__34720__auto___38211);

return statearr_37248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34722__auto__);
});})(c__34720__auto___38211,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37250 = arguments.length;
switch (G__37250) {
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
var c__34720__auto___38234 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34720__auto___38234,out){
return (function (){
var f__34721__auto__ = (function (){var switch__34453__auto__ = ((function (c__34720__auto___38234,out){
return (function (state_37288){
var state_val_37289 = (state_37288[(1)]);
if((state_val_37289 === (7))){
var inst_37284 = (state_37288[(2)]);
var state_37288__$1 = state_37288;
var statearr_37290_38235 = state_37288__$1;
(statearr_37290_38235[(2)] = inst_37284);

(statearr_37290_38235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37289 === (1))){
var inst_37251 = (new Array(n));
var inst_37252 = inst_37251;
var inst_37253 = (0);
var state_37288__$1 = (function (){var statearr_37291 = state_37288;
(statearr_37291[(7)] = inst_37252);

(statearr_37291[(8)] = inst_37253);

return statearr_37291;
})();
var statearr_37292_38236 = state_37288__$1;
(statearr_37292_38236[(2)] = null);

(statearr_37292_38236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37289 === (4))){
var inst_37256 = (state_37288[(9)]);
var inst_37256__$1 = (state_37288[(2)]);
var inst_37257 = (inst_37256__$1 == null);
var inst_37258 = cljs.core.not(inst_37257);
var state_37288__$1 = (function (){var statearr_37293 = state_37288;
(statearr_37293[(9)] = inst_37256__$1);

return statearr_37293;
})();
if(inst_37258){
var statearr_37294_38237 = state_37288__$1;
(statearr_37294_38237[(1)] = (5));

} else {
var statearr_37295_38238 = state_37288__$1;
(statearr_37295_38238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37289 === (15))){
var inst_37278 = (state_37288[(2)]);
var state_37288__$1 = state_37288;
var statearr_37296_38239 = state_37288__$1;
(statearr_37296_38239[(2)] = inst_37278);

(statearr_37296_38239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37289 === (13))){
var state_37288__$1 = state_37288;
var statearr_37297_38243 = state_37288__$1;
(statearr_37297_38243[(2)] = null);

(statearr_37297_38243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37289 === (6))){
var inst_37253 = (state_37288[(8)]);
var inst_37274 = (inst_37253 > (0));
var state_37288__$1 = state_37288;
if(cljs.core.truth_(inst_37274)){
var statearr_37298_38244 = state_37288__$1;
(statearr_37298_38244[(1)] = (12));

} else {
var statearr_37299_38245 = state_37288__$1;
(statearr_37299_38245[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37289 === (3))){
var inst_37286 = (state_37288[(2)]);
var state_37288__$1 = state_37288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37288__$1,inst_37286);
} else {
if((state_val_37289 === (12))){
var inst_37252 = (state_37288[(7)]);
var inst_37276 = cljs.core.vec(inst_37252);
var state_37288__$1 = state_37288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37288__$1,(15),out,inst_37276);
} else {
if((state_val_37289 === (2))){
var state_37288__$1 = state_37288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37288__$1,(4),ch);
} else {
if((state_val_37289 === (11))){
var inst_37268 = (state_37288[(2)]);
var inst_37269 = (new Array(n));
var inst_37252 = inst_37269;
var inst_37253 = (0);
var state_37288__$1 = (function (){var statearr_37300 = state_37288;
(statearr_37300[(7)] = inst_37252);

(statearr_37300[(10)] = inst_37268);

(statearr_37300[(8)] = inst_37253);

return statearr_37300;
})();
var statearr_37301_38248 = state_37288__$1;
(statearr_37301_38248[(2)] = null);

(statearr_37301_38248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37289 === (9))){
var inst_37252 = (state_37288[(7)]);
var inst_37266 = cljs.core.vec(inst_37252);
var state_37288__$1 = state_37288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37288__$1,(11),out,inst_37266);
} else {
if((state_val_37289 === (5))){
var inst_37252 = (state_37288[(7)]);
var inst_37261 = (state_37288[(11)]);
var inst_37256 = (state_37288[(9)]);
var inst_37253 = (state_37288[(8)]);
var inst_37260 = (inst_37252[inst_37253] = inst_37256);
var inst_37261__$1 = (inst_37253 + (1));
var inst_37262 = (inst_37261__$1 < n);
var state_37288__$1 = (function (){var statearr_37302 = state_37288;
(statearr_37302[(11)] = inst_37261__$1);

(statearr_37302[(12)] = inst_37260);

return statearr_37302;
})();
if(cljs.core.truth_(inst_37262)){
var statearr_37303_38249 = state_37288__$1;
(statearr_37303_38249[(1)] = (8));

} else {
var statearr_37304_38250 = state_37288__$1;
(statearr_37304_38250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37289 === (14))){
var inst_37281 = (state_37288[(2)]);
var inst_37282 = cljs.core.async.close_BANG_(out);
var state_37288__$1 = (function (){var statearr_37306 = state_37288;
(statearr_37306[(13)] = inst_37281);

return statearr_37306;
})();
var statearr_37307_38251 = state_37288__$1;
(statearr_37307_38251[(2)] = inst_37282);

(statearr_37307_38251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37289 === (10))){
var inst_37272 = (state_37288[(2)]);
var state_37288__$1 = state_37288;
var statearr_37308_38252 = state_37288__$1;
(statearr_37308_38252[(2)] = inst_37272);

(statearr_37308_38252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37289 === (8))){
var inst_37252 = (state_37288[(7)]);
var inst_37261 = (state_37288[(11)]);
var tmp37305 = inst_37252;
var inst_37252__$1 = tmp37305;
var inst_37253 = inst_37261;
var state_37288__$1 = (function (){var statearr_37309 = state_37288;
(statearr_37309[(7)] = inst_37252__$1);

(statearr_37309[(8)] = inst_37253);

return statearr_37309;
})();
var statearr_37310_38253 = state_37288__$1;
(statearr_37310_38253[(2)] = null);

(statearr_37310_38253[(1)] = (2));


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
});})(c__34720__auto___38234,out))
;
return ((function (switch__34453__auto__,c__34720__auto___38234,out){
return (function() {
var cljs$core$async$state_machine__34454__auto__ = null;
var cljs$core$async$state_machine__34454__auto____0 = (function (){
var statearr_37311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37311[(0)] = cljs$core$async$state_machine__34454__auto__);

(statearr_37311[(1)] = (1));

return statearr_37311;
});
var cljs$core$async$state_machine__34454__auto____1 = (function (state_37288){
while(true){
var ret_value__34455__auto__ = (function (){try{while(true){
var result__34456__auto__ = switch__34453__auto__(state_37288);
if(cljs.core.keyword_identical_QMARK_(result__34456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34456__auto__;
}
break;
}
}catch (e37312){if((e37312 instanceof Object)){
var ex__34457__auto__ = e37312;
var statearr_37313_38256 = state_37288;
(statearr_37313_38256[(5)] = ex__34457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37312;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38257 = state_37288;
state_37288 = G__38257;
continue;
} else {
return ret_value__34455__auto__;
}
break;
}
});
cljs$core$async$state_machine__34454__auto__ = function(state_37288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34454__auto____1.call(this,state_37288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34454__auto____0;
cljs$core$async$state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34454__auto____1;
return cljs$core$async$state_machine__34454__auto__;
})()
;})(switch__34453__auto__,c__34720__auto___38234,out))
})();
var state__34722__auto__ = (function (){var statearr_37314 = (f__34721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34721__auto__.cljs$core$IFn$_invoke$arity$0() : f__34721__auto__.call(null));
(statearr_37314[(6)] = c__34720__auto___38234);

return statearr_37314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34722__auto__);
});})(c__34720__auto___38234,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37316 = arguments.length;
switch (G__37316) {
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
var c__34720__auto___38259 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34720__auto___38259,out){
return (function (){
var f__34721__auto__ = (function (){var switch__34453__auto__ = ((function (c__34720__auto___38259,out){
return (function (state_37358){
var state_val_37359 = (state_37358[(1)]);
if((state_val_37359 === (7))){
var inst_37354 = (state_37358[(2)]);
var state_37358__$1 = state_37358;
var statearr_37360_38260 = state_37358__$1;
(statearr_37360_38260[(2)] = inst_37354);

(statearr_37360_38260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37359 === (1))){
var inst_37317 = [];
var inst_37318 = inst_37317;
var inst_37319 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37358__$1 = (function (){var statearr_37361 = state_37358;
(statearr_37361[(7)] = inst_37318);

(statearr_37361[(8)] = inst_37319);

return statearr_37361;
})();
var statearr_37362_38261 = state_37358__$1;
(statearr_37362_38261[(2)] = null);

(statearr_37362_38261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37359 === (4))){
var inst_37322 = (state_37358[(9)]);
var inst_37322__$1 = (state_37358[(2)]);
var inst_37323 = (inst_37322__$1 == null);
var inst_37324 = cljs.core.not(inst_37323);
var state_37358__$1 = (function (){var statearr_37363 = state_37358;
(statearr_37363[(9)] = inst_37322__$1);

return statearr_37363;
})();
if(inst_37324){
var statearr_37364_38265 = state_37358__$1;
(statearr_37364_38265[(1)] = (5));

} else {
var statearr_37365_38266 = state_37358__$1;
(statearr_37365_38266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37359 === (15))){
var inst_37348 = (state_37358[(2)]);
var state_37358__$1 = state_37358;
var statearr_37366_38267 = state_37358__$1;
(statearr_37366_38267[(2)] = inst_37348);

(statearr_37366_38267[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37359 === (13))){
var state_37358__$1 = state_37358;
var statearr_37367_38273 = state_37358__$1;
(statearr_37367_38273[(2)] = null);

(statearr_37367_38273[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37359 === (6))){
var inst_37318 = (state_37358[(7)]);
var inst_37343 = inst_37318.length;
var inst_37344 = (inst_37343 > (0));
var state_37358__$1 = state_37358;
if(cljs.core.truth_(inst_37344)){
var statearr_37368_38275 = state_37358__$1;
(statearr_37368_38275[(1)] = (12));

} else {
var statearr_37369_38276 = state_37358__$1;
(statearr_37369_38276[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37359 === (3))){
var inst_37356 = (state_37358[(2)]);
var state_37358__$1 = state_37358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37358__$1,inst_37356);
} else {
if((state_val_37359 === (12))){
var inst_37318 = (state_37358[(7)]);
var inst_37346 = cljs.core.vec(inst_37318);
var state_37358__$1 = state_37358;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37358__$1,(15),out,inst_37346);
} else {
if((state_val_37359 === (2))){
var state_37358__$1 = state_37358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37358__$1,(4),ch);
} else {
if((state_val_37359 === (11))){
var inst_37322 = (state_37358[(9)]);
var inst_37326 = (state_37358[(10)]);
var inst_37336 = (state_37358[(2)]);
var inst_37337 = [];
var inst_37338 = inst_37337.push(inst_37322);
var inst_37318 = inst_37337;
var inst_37319 = inst_37326;
var state_37358__$1 = (function (){var statearr_37370 = state_37358;
(statearr_37370[(7)] = inst_37318);

(statearr_37370[(11)] = inst_37336);

(statearr_37370[(12)] = inst_37338);

(statearr_37370[(8)] = inst_37319);

return statearr_37370;
})();
var statearr_37371_38278 = state_37358__$1;
(statearr_37371_38278[(2)] = null);

(statearr_37371_38278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37359 === (9))){
var inst_37318 = (state_37358[(7)]);
var inst_37334 = cljs.core.vec(inst_37318);
var state_37358__$1 = state_37358;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37358__$1,(11),out,inst_37334);
} else {
if((state_val_37359 === (5))){
var inst_37322 = (state_37358[(9)]);
var inst_37326 = (state_37358[(10)]);
var inst_37319 = (state_37358[(8)]);
var inst_37326__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37322) : f.call(null,inst_37322));
var inst_37327 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37326__$1,inst_37319);
var inst_37328 = cljs.core.keyword_identical_QMARK_(inst_37319,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37329 = ((inst_37327) || (inst_37328));
var state_37358__$1 = (function (){var statearr_37372 = state_37358;
(statearr_37372[(10)] = inst_37326__$1);

return statearr_37372;
})();
if(cljs.core.truth_(inst_37329)){
var statearr_37373_38282 = state_37358__$1;
(statearr_37373_38282[(1)] = (8));

} else {
var statearr_37374_38283 = state_37358__$1;
(statearr_37374_38283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37359 === (14))){
var inst_37351 = (state_37358[(2)]);
var inst_37352 = cljs.core.async.close_BANG_(out);
var state_37358__$1 = (function (){var statearr_37376 = state_37358;
(statearr_37376[(13)] = inst_37351);

return statearr_37376;
})();
var statearr_37377_38284 = state_37358__$1;
(statearr_37377_38284[(2)] = inst_37352);

(statearr_37377_38284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37359 === (10))){
var inst_37341 = (state_37358[(2)]);
var state_37358__$1 = state_37358;
var statearr_37378_38286 = state_37358__$1;
(statearr_37378_38286[(2)] = inst_37341);

(statearr_37378_38286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37359 === (8))){
var inst_37318 = (state_37358[(7)]);
var inst_37322 = (state_37358[(9)]);
var inst_37326 = (state_37358[(10)]);
var inst_37331 = inst_37318.push(inst_37322);
var tmp37375 = inst_37318;
var inst_37318__$1 = tmp37375;
var inst_37319 = inst_37326;
var state_37358__$1 = (function (){var statearr_37379 = state_37358;
(statearr_37379[(7)] = inst_37318__$1);

(statearr_37379[(14)] = inst_37331);

(statearr_37379[(8)] = inst_37319);

return statearr_37379;
})();
var statearr_37380_38287 = state_37358__$1;
(statearr_37380_38287[(2)] = null);

(statearr_37380_38287[(1)] = (2));


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
});})(c__34720__auto___38259,out))
;
return ((function (switch__34453__auto__,c__34720__auto___38259,out){
return (function() {
var cljs$core$async$state_machine__34454__auto__ = null;
var cljs$core$async$state_machine__34454__auto____0 = (function (){
var statearr_37381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37381[(0)] = cljs$core$async$state_machine__34454__auto__);

(statearr_37381[(1)] = (1));

return statearr_37381;
});
var cljs$core$async$state_machine__34454__auto____1 = (function (state_37358){
while(true){
var ret_value__34455__auto__ = (function (){try{while(true){
var result__34456__auto__ = switch__34453__auto__(state_37358);
if(cljs.core.keyword_identical_QMARK_(result__34456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34456__auto__;
}
break;
}
}catch (e37382){if((e37382 instanceof Object)){
var ex__34457__auto__ = e37382;
var statearr_37383_38288 = state_37358;
(statearr_37383_38288[(5)] = ex__34457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37382;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38289 = state_37358;
state_37358 = G__38289;
continue;
} else {
return ret_value__34455__auto__;
}
break;
}
});
cljs$core$async$state_machine__34454__auto__ = function(state_37358){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34454__auto____1.call(this,state_37358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34454__auto____0;
cljs$core$async$state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34454__auto____1;
return cljs$core$async$state_machine__34454__auto__;
})()
;})(switch__34453__auto__,c__34720__auto___38259,out))
})();
var state__34722__auto__ = (function (){var statearr_37384 = (f__34721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34721__auto__.cljs$core$IFn$_invoke$arity$0() : f__34721__auto__.call(null));
(statearr_37384[(6)] = c__34720__auto___38259);

return statearr_37384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34722__auto__);
});})(c__34720__auto___38259,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
