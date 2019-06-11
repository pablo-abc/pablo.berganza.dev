goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32107 = arguments.length;
var i__4731__auto___32108 = (0);
while(true){
if((i__4731__auto___32108 < len__4730__auto___32107)){
args__4736__auto__.push((arguments[i__4731__auto___32108]));

var G__32109 = (i__4731__auto___32108 + (1));
i__4731__auto___32108 = G__32109;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq31948){
var G__31949 = cljs.core.first(seq31948);
var seq31948__$1 = cljs.core.next(seq31948);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31949,seq31948__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5718__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__31958){
var map__31959 = p__31958;
var map__31959__$1 = (((((!((map__31959 == null))))?(((((map__31959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31959):map__31959);
var src = map__31959__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31959__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31959__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__31962 = cljs.core.seq(sources);
var chunk__31963 = null;
var count__31964 = (0);
var i__31965 = (0);
while(true){
if((i__31965 < count__31964)){
var map__31972 = chunk__31963.cljs$core$IIndexed$_nth$arity$2(null,i__31965);
var map__31972__$1 = (((((!((map__31972 == null))))?(((((map__31972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31972):map__31972);
var src = map__31972__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31972__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31972__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31972__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31972__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__32110 = seq__31962;
var G__32111 = chunk__31963;
var G__32112 = count__31964;
var G__32113 = (i__31965 + (1));
seq__31962 = G__32110;
chunk__31963 = G__32111;
count__31964 = G__32112;
i__31965 = G__32113;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__31962);
if(temp__5720__auto__){
var seq__31962__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31962__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__31962__$1);
var G__32114 = cljs.core.chunk_rest(seq__31962__$1);
var G__32115 = c__4550__auto__;
var G__32116 = cljs.core.count(c__4550__auto__);
var G__32117 = (0);
seq__31962 = G__32114;
chunk__31963 = G__32115;
count__31964 = G__32116;
i__31965 = G__32117;
continue;
} else {
var map__31974 = cljs.core.first(seq__31962__$1);
var map__31974__$1 = (((((!((map__31974 == null))))?(((((map__31974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31974):map__31974);
var src = map__31974__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31974__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31974__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31974__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31974__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__32118 = cljs.core.next(seq__31962__$1);
var G__32119 = null;
var G__32120 = (0);
var G__32121 = (0);
seq__31962 = G__32118;
chunk__31963 = G__32119;
count__31964 = G__32120;
i__31965 = G__32121;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__31978 = cljs.core.seq(js_requires);
var chunk__31979 = null;
var count__31980 = (0);
var i__31981 = (0);
while(true){
if((i__31981 < count__31980)){
var js_ns = chunk__31979.cljs$core$IIndexed$_nth$arity$2(null,i__31981);
var require_str_32122 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_32122);


var G__32123 = seq__31978;
var G__32124 = chunk__31979;
var G__32125 = count__31980;
var G__32126 = (i__31981 + (1));
seq__31978 = G__32123;
chunk__31979 = G__32124;
count__31980 = G__32125;
i__31981 = G__32126;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__31978);
if(temp__5720__auto__){
var seq__31978__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31978__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__31978__$1);
var G__32127 = cljs.core.chunk_rest(seq__31978__$1);
var G__32128 = c__4550__auto__;
var G__32129 = cljs.core.count(c__4550__auto__);
var G__32130 = (0);
seq__31978 = G__32127;
chunk__31979 = G__32128;
count__31980 = G__32129;
i__31981 = G__32130;
continue;
} else {
var js_ns = cljs.core.first(seq__31978__$1);
var require_str_32131 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_32131);


var G__32132 = cljs.core.next(seq__31978__$1);
var G__32133 = null;
var G__32134 = (0);
var G__32135 = (0);
seq__31978 = G__32132;
chunk__31979 = G__32133;
count__31980 = G__32134;
i__31981 = G__32135;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__31982 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__31982) : callback.call(null,G__31982));
} else {
var G__31983 = shadow.cljs.devtools.client.env.files_url();
var G__31984 = ((function (G__31983){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__31983))
;
var G__31985 = "POST";
var G__31986 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__31987 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__31983,G__31984,G__31985,G__31986,G__31987);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__31989){
var map__31990 = p__31989;
var map__31990__$1 = (((((!((map__31990 == null))))?(((((map__31990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31990):map__31990);
var msg = map__31990__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31990__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31990__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__31992 = info;
var map__31992__$1 = (((((!((map__31992 == null))))?(((((map__31992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31992):map__31992);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31992__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31992__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__31992,map__31992__$1,sources,compiled,map__31990,map__31990__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31995(s__31996){
return (new cljs.core.LazySeq(null,((function (map__31992,map__31992__$1,sources,compiled,map__31990,map__31990__$1,msg,info,reload_info){
return (function (){
var s__31996__$1 = s__31996;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__31996__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__32002 = cljs.core.first(xs__6277__auto__);
var map__32002__$1 = (((((!((map__32002 == null))))?(((((map__32002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32002):map__32002);
var src = map__32002__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32002__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32002__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__31996__$1,map__32002,map__32002__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__31992,map__31992__$1,sources,compiled,map__31990,map__31990__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31995_$_iter__31997(s__31998){
return (new cljs.core.LazySeq(null,((function (s__31996__$1,map__32002,map__32002__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__31992,map__31992__$1,sources,compiled,map__31990,map__31990__$1,msg,info,reload_info){
return (function (){
var s__31998__$1 = s__31998;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__31998__$1);
if(temp__5720__auto____$1){
var s__31998__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31998__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__31998__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__32000 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__31999 = (0);
while(true){
if((i__31999 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__31999);
cljs.core.chunk_append(b__32000,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__32136 = (i__31999 + (1));
i__31999 = G__32136;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32000),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31995_$_iter__31997(cljs.core.chunk_rest(s__31998__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32000),null);
}
} else {
var warning = cljs.core.first(s__31998__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31995_$_iter__31997(cljs.core.rest(s__31998__$2)));
}
} else {
return null;
}
break;
}
});})(s__31996__$1,map__32002,map__32002__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__31992,map__31992__$1,sources,compiled,map__31990,map__31990__$1,msg,info,reload_info))
,null,null));
});})(s__31996__$1,map__32002,map__32002__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__31992,map__31992__$1,sources,compiled,map__31990,map__31990__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31995(cljs.core.rest(s__31996__$1)));
} else {
var G__32137 = cljs.core.rest(s__31996__$1);
s__31996__$1 = G__32137;
continue;
}
} else {
var G__32138 = cljs.core.rest(s__31996__$1);
s__31996__$1 = G__32138;
continue;
}
} else {
return null;
}
break;
}
});})(map__31992,map__31992__$1,sources,compiled,map__31990,map__31990__$1,msg,info,reload_info))
,null,null));
});})(map__31992,map__31992__$1,sources,compiled,map__31990,map__31990__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__32004_32139 = cljs.core.seq(warnings);
var chunk__32005_32140 = null;
var count__32006_32141 = (0);
var i__32007_32142 = (0);
while(true){
if((i__32007_32142 < count__32006_32141)){
var map__32012_32143 = chunk__32005_32140.cljs$core$IIndexed$_nth$arity$2(null,i__32007_32142);
var map__32012_32144__$1 = (((((!((map__32012_32143 == null))))?(((((map__32012_32143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32012_32143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32012_32143):map__32012_32143);
var w_32145 = map__32012_32144__$1;
var msg_32146__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32012_32144__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_32147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32012_32144__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_32148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32012_32144__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_32149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32012_32144__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_32149)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_32147),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_32148),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_32146__$1)].join(''));


var G__32150 = seq__32004_32139;
var G__32151 = chunk__32005_32140;
var G__32152 = count__32006_32141;
var G__32153 = (i__32007_32142 + (1));
seq__32004_32139 = G__32150;
chunk__32005_32140 = G__32151;
count__32006_32141 = G__32152;
i__32007_32142 = G__32153;
continue;
} else {
var temp__5720__auto___32154 = cljs.core.seq(seq__32004_32139);
if(temp__5720__auto___32154){
var seq__32004_32155__$1 = temp__5720__auto___32154;
if(cljs.core.chunked_seq_QMARK_(seq__32004_32155__$1)){
var c__4550__auto___32156 = cljs.core.chunk_first(seq__32004_32155__$1);
var G__32157 = cljs.core.chunk_rest(seq__32004_32155__$1);
var G__32158 = c__4550__auto___32156;
var G__32159 = cljs.core.count(c__4550__auto___32156);
var G__32160 = (0);
seq__32004_32139 = G__32157;
chunk__32005_32140 = G__32158;
count__32006_32141 = G__32159;
i__32007_32142 = G__32160;
continue;
} else {
var map__32014_32161 = cljs.core.first(seq__32004_32155__$1);
var map__32014_32162__$1 = (((((!((map__32014_32161 == null))))?(((((map__32014_32161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32014_32161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32014_32161):map__32014_32161);
var w_32163 = map__32014_32162__$1;
var msg_32164__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32014_32162__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_32165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32014_32162__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_32166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32014_32162__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_32167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32014_32162__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_32167)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_32165),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_32166),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_32164__$1)].join(''));


var G__32168 = cljs.core.next(seq__32004_32155__$1);
var G__32169 = null;
var G__32170 = (0);
var G__32171 = (0);
seq__32004_32139 = G__32168;
chunk__32005_32140 = G__32169;
count__32006_32141 = G__32170;
i__32007_32142 = G__32171;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__31992,map__31992__$1,sources,compiled,warnings,map__31990,map__31990__$1,msg,info,reload_info){
return (function (p__32016){
var map__32017 = p__32016;
var map__32017__$1 = (((((!((map__32017 == null))))?(((((map__32017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32017):map__32017);
var src = map__32017__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32017__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32017__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__31992,map__31992__$1,sources,compiled,warnings,map__31990,map__31990__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__31992,map__31992__$1,sources,compiled,warnings,map__31990,map__31990__$1,msg,info,reload_info){
return (function (p__32019){
var map__32020 = p__32019;
var map__32020__$1 = (((((!((map__32020 == null))))?(((((map__32020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32020):map__32020);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32020__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__31992,map__31992__$1,sources,compiled,warnings,map__31990,map__31990__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__31992,map__31992__$1,sources,compiled,warnings,map__31990,map__31990__$1,msg,info,reload_info){
return (function (p__32022){
var map__32023 = p__32022;
var map__32023__$1 = (((((!((map__32023 == null))))?(((((map__32023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32023):map__32023);
var rc = map__32023__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32023__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__31992,map__31992__$1,sources,compiled,warnings,map__31990,map__31990__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__31992,map__31992__$1,sources,compiled,warnings,map__31990,map__31990__$1,msg,info,reload_info){
return (function (p1__31988_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__31988_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__31992,map__31992__$1,sources,compiled,warnings,map__31990,map__31990__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__32025){
var map__32026 = p__32025;
var map__32026__$1 = (((((!((map__32026 == null))))?(((((map__32026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32026):map__32026);
var msg = map__32026__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32026__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__32028 = cljs.core.seq(updates);
var chunk__32030 = null;
var count__32031 = (0);
var i__32032 = (0);
while(true){
if((i__32032 < count__32031)){
var path = chunk__32030.cljs$core$IIndexed$_nth$arity$2(null,i__32032);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__32058_32172 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__32061_32173 = null;
var count__32062_32174 = (0);
var i__32063_32175 = (0);
while(true){
if((i__32063_32175 < count__32062_32174)){
var node_32176 = chunk__32061_32173.cljs$core$IIndexed$_nth$arity$2(null,i__32063_32175);
var path_match_32177 = shadow.cljs.devtools.client.browser.match_paths(node_32176.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32177)){
var new_link_32178 = (function (){var G__32068 = node_32176.cloneNode(true);
G__32068.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32177),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32068;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32177], 0));

goog.dom.insertSiblingAfter(new_link_32178,node_32176);

goog.dom.removeNode(node_32176);


var G__32179 = seq__32058_32172;
var G__32180 = chunk__32061_32173;
var G__32181 = count__32062_32174;
var G__32182 = (i__32063_32175 + (1));
seq__32058_32172 = G__32179;
chunk__32061_32173 = G__32180;
count__32062_32174 = G__32181;
i__32063_32175 = G__32182;
continue;
} else {
var G__32183 = seq__32058_32172;
var G__32184 = chunk__32061_32173;
var G__32185 = count__32062_32174;
var G__32186 = (i__32063_32175 + (1));
seq__32058_32172 = G__32183;
chunk__32061_32173 = G__32184;
count__32062_32174 = G__32185;
i__32063_32175 = G__32186;
continue;
}
} else {
var temp__5720__auto___32187 = cljs.core.seq(seq__32058_32172);
if(temp__5720__auto___32187){
var seq__32058_32188__$1 = temp__5720__auto___32187;
if(cljs.core.chunked_seq_QMARK_(seq__32058_32188__$1)){
var c__4550__auto___32189 = cljs.core.chunk_first(seq__32058_32188__$1);
var G__32190 = cljs.core.chunk_rest(seq__32058_32188__$1);
var G__32191 = c__4550__auto___32189;
var G__32192 = cljs.core.count(c__4550__auto___32189);
var G__32193 = (0);
seq__32058_32172 = G__32190;
chunk__32061_32173 = G__32191;
count__32062_32174 = G__32192;
i__32063_32175 = G__32193;
continue;
} else {
var node_32194 = cljs.core.first(seq__32058_32188__$1);
var path_match_32195 = shadow.cljs.devtools.client.browser.match_paths(node_32194.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32195)){
var new_link_32196 = (function (){var G__32069 = node_32194.cloneNode(true);
G__32069.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32195),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32069;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32195], 0));

goog.dom.insertSiblingAfter(new_link_32196,node_32194);

goog.dom.removeNode(node_32194);


var G__32197 = cljs.core.next(seq__32058_32188__$1);
var G__32198 = null;
var G__32199 = (0);
var G__32200 = (0);
seq__32058_32172 = G__32197;
chunk__32061_32173 = G__32198;
count__32062_32174 = G__32199;
i__32063_32175 = G__32200;
continue;
} else {
var G__32201 = cljs.core.next(seq__32058_32188__$1);
var G__32202 = null;
var G__32203 = (0);
var G__32204 = (0);
seq__32058_32172 = G__32201;
chunk__32061_32173 = G__32202;
count__32062_32174 = G__32203;
i__32063_32175 = G__32204;
continue;
}
}
} else {
}
}
break;
}


var G__32205 = seq__32028;
var G__32206 = chunk__32030;
var G__32207 = count__32031;
var G__32208 = (i__32032 + (1));
seq__32028 = G__32205;
chunk__32030 = G__32206;
count__32031 = G__32207;
i__32032 = G__32208;
continue;
} else {
var G__32209 = seq__32028;
var G__32210 = chunk__32030;
var G__32211 = count__32031;
var G__32212 = (i__32032 + (1));
seq__32028 = G__32209;
chunk__32030 = G__32210;
count__32031 = G__32211;
i__32032 = G__32212;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__32028);
if(temp__5720__auto__){
var seq__32028__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32028__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__32028__$1);
var G__32213 = cljs.core.chunk_rest(seq__32028__$1);
var G__32214 = c__4550__auto__;
var G__32215 = cljs.core.count(c__4550__auto__);
var G__32216 = (0);
seq__32028 = G__32213;
chunk__32030 = G__32214;
count__32031 = G__32215;
i__32032 = G__32216;
continue;
} else {
var path = cljs.core.first(seq__32028__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__32070_32217 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__32073_32218 = null;
var count__32074_32219 = (0);
var i__32075_32220 = (0);
while(true){
if((i__32075_32220 < count__32074_32219)){
var node_32221 = chunk__32073_32218.cljs$core$IIndexed$_nth$arity$2(null,i__32075_32220);
var path_match_32222 = shadow.cljs.devtools.client.browser.match_paths(node_32221.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32222)){
var new_link_32223 = (function (){var G__32080 = node_32221.cloneNode(true);
G__32080.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32222),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32080;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32222], 0));

goog.dom.insertSiblingAfter(new_link_32223,node_32221);

goog.dom.removeNode(node_32221);


var G__32224 = seq__32070_32217;
var G__32225 = chunk__32073_32218;
var G__32226 = count__32074_32219;
var G__32227 = (i__32075_32220 + (1));
seq__32070_32217 = G__32224;
chunk__32073_32218 = G__32225;
count__32074_32219 = G__32226;
i__32075_32220 = G__32227;
continue;
} else {
var G__32228 = seq__32070_32217;
var G__32229 = chunk__32073_32218;
var G__32230 = count__32074_32219;
var G__32231 = (i__32075_32220 + (1));
seq__32070_32217 = G__32228;
chunk__32073_32218 = G__32229;
count__32074_32219 = G__32230;
i__32075_32220 = G__32231;
continue;
}
} else {
var temp__5720__auto___32232__$1 = cljs.core.seq(seq__32070_32217);
if(temp__5720__auto___32232__$1){
var seq__32070_32233__$1 = temp__5720__auto___32232__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32070_32233__$1)){
var c__4550__auto___32234 = cljs.core.chunk_first(seq__32070_32233__$1);
var G__32235 = cljs.core.chunk_rest(seq__32070_32233__$1);
var G__32236 = c__4550__auto___32234;
var G__32237 = cljs.core.count(c__4550__auto___32234);
var G__32238 = (0);
seq__32070_32217 = G__32235;
chunk__32073_32218 = G__32236;
count__32074_32219 = G__32237;
i__32075_32220 = G__32238;
continue;
} else {
var node_32239 = cljs.core.first(seq__32070_32233__$1);
var path_match_32240 = shadow.cljs.devtools.client.browser.match_paths(node_32239.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32240)){
var new_link_32241 = (function (){var G__32081 = node_32239.cloneNode(true);
G__32081.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32240),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32081;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32240], 0));

goog.dom.insertSiblingAfter(new_link_32241,node_32239);

goog.dom.removeNode(node_32239);


var G__32242 = cljs.core.next(seq__32070_32233__$1);
var G__32243 = null;
var G__32244 = (0);
var G__32245 = (0);
seq__32070_32217 = G__32242;
chunk__32073_32218 = G__32243;
count__32074_32219 = G__32244;
i__32075_32220 = G__32245;
continue;
} else {
var G__32246 = cljs.core.next(seq__32070_32233__$1);
var G__32247 = null;
var G__32248 = (0);
var G__32249 = (0);
seq__32070_32217 = G__32246;
chunk__32073_32218 = G__32247;
count__32074_32219 = G__32248;
i__32075_32220 = G__32249;
continue;
}
}
} else {
}
}
break;
}


var G__32250 = cljs.core.next(seq__32028__$1);
var G__32251 = null;
var G__32252 = (0);
var G__32253 = (0);
seq__32028 = G__32250;
chunk__32030 = G__32251;
count__32031 = G__32252;
i__32032 = G__32253;
continue;
} else {
var G__32254 = cljs.core.next(seq__32028__$1);
var G__32255 = null;
var G__32256 = (0);
var G__32257 = (0);
seq__32028 = G__32254;
chunk__32030 = G__32255;
count__32031 = G__32256;
i__32032 = G__32257;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__32082){
var map__32083 = p__32082;
var map__32083__$1 = (((((!((map__32083 == null))))?(((((map__32083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32083):map__32083);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32083__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32083__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__32083,map__32083__$1,id,js){
return (function (){
return eval(js);
});})(map__32083,map__32083__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__32085){
var map__32086 = p__32085;
var map__32086__$1 = (((((!((map__32086 == null))))?(((((map__32086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32086):map__32086);
var msg = map__32086__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32086__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32086__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32086__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32086__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__32086,map__32086__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__32088){
var map__32089 = p__32088;
var map__32089__$1 = (((((!((map__32089 == null))))?(((((map__32089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32089):map__32089);
var src = map__32089__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32089__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__32086,map__32086__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__32086,map__32086__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__32086,map__32086__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__32091){
var map__32092 = p__32091;
var map__32092__$1 = (((((!((map__32092 == null))))?(((((map__32092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32092):map__32092);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32092__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32092__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__32092,map__32092__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__32092,map__32092__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__32094){
var map__32095 = p__32094;
var map__32095__$1 = (((((!((map__32095 == null))))?(((((map__32095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32095):map__32095);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32095__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32095__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__32097){
var map__32098 = p__32097;
var map__32098__$1 = (((((!((map__32098 == null))))?(((((map__32098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32098):map__32098);
var msg = map__32098__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32098__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__32100 = type;
var G__32100__$1 = (((G__32100 instanceof cljs.core.Keyword))?G__32100.fqn:null);
switch (G__32100__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__32101 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__32102 = ((function (G__32101){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__32101))
;
var G__32103 = "POST";
var G__32104 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__32105 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__32101,G__32102,G__32103,G__32104,G__32105);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e32106){var e = e32106;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___32259 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___32259)){
var s_32260 = temp__5720__auto___32259;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_32260.onclose = ((function (s_32260,temp__5720__auto___32259){
return (function (e){
return null;
});})(s_32260,temp__5720__auto___32259))
;

s_32260.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
