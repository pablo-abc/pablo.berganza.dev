goog.provide('site.core');
goog.require('cljs.core');
var module$node_modules$$barba$core$dist$barba_umd=shadow.js.require("module$node_modules$$barba$core$dist$barba_umd", {});
goog.require('clojure.string');
site.core.update_lang_link_BANG_ = (function site$core$update_lang_link_BANG_(data){
var path = data.next.url.path;
var lang_nav = document.getElementById("lang-nav");
var new_lang = lang_nav.innerHTML;
var new_path = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_lang,"en"))?clojure.string.replace(path,/^\/es/,""):["/es",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
return lang_nav.href = new_path;
});
site.core.barba_init_BANG_ = (function site$core$barba_init_BANG_(){
return module$node_modules$$barba$core$dist$barba_umd.init(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transitions","transitions",-2046216121),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leave","leave",1022579443),(function (_){
return window.scrollTo((0),(0));
}),new cljs.core.Keyword(null,"enter","enter",1792452624),site.core.update_lang_link_BANG_], null)], null)], null)));
});
site.core.init_BANG_ = (function site$core$init_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38775 = arguments.length;
var i__4731__auto___38776 = (0);
while(true){
if((i__4731__auto___38776 < len__4730__auto___38775)){
args__4736__auto__.push((arguments[i__4731__auto___38776]));

var G__38777 = (i__4731__auto___38776 + (1));
i__4731__auto___38776 = G__38777;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return site.core.init_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

site.core.init_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return site.core.barba_init_BANG_();
});

site.core.init_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
site.core.init_BANG_.cljs$lang$applyTo = (function (seq38763){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38763));
});


//# sourceMappingURL=site.core.js.map
