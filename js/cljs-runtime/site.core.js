goog.provide('site.core');
goog.require('cljs.core');
var module$node_modules$$barba$core$dist$barba_umd=shadow.js.require("module$node_modules$$barba$core$dist$barba_umd", {});
site.core.barba_init_BANG_ = (function site$core$barba_init_BANG_(){
return module$node_modules$$barba$core$dist$barba_umd.default.init(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transitions","transitions",-2046216121),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leave","leave",1022579443),cljs.core.constantly(null),new cljs.core.Keyword(null,"enter","enter",1792452624),cljs.core.constantly(null)], null)], null)], null)));
});
site.core.init_BANG_ = (function site$core$init_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32266 = arguments.length;
var i__4731__auto___32267 = (0);
while(true){
if((i__4731__auto___32267 < len__4730__auto___32266)){
args__4736__auto__.push((arguments[i__4731__auto___32267]));

var G__32268 = (i__4731__auto___32267 + (1));
i__4731__auto___32267 = G__32268;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return site.core.init_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

site.core.init_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log("Hello");
});

site.core.init_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
site.core.init_BANG_.cljs$lang$applyTo = (function (seq32265){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32265));
});


//# sourceMappingURL=site.core.js.map
