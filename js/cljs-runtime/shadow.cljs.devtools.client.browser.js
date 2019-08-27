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
var len__4730__auto___39669 = arguments.length;
var i__4731__auto___39670 = (0);
while(true){
if((i__4731__auto___39670 < len__4730__auto___39669)){
args__4736__auto__.push((arguments[i__4731__auto___39670]));

var G__39671 = (i__4731__auto___39670 + (1));
i__4731__auto___39670 = G__39671;
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
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39519){
var G__39520 = cljs.core.first(seq39519);
var seq39519__$1 = cljs.core.next(seq39519);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39520,seq39519__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__39522){
var map__39524 = p__39522;
var map__39524__$1 = (((((!((map__39524 == null))))?(((((map__39524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39524):map__39524);
var src = map__39524__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39524__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39524__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__39526 = cljs.core.seq(sources);
var chunk__39527 = null;
var count__39528 = (0);
var i__39529 = (0);
while(true){
if((i__39529 < count__39528)){
var map__39535 = chunk__39527.cljs$core$IIndexed$_nth$arity$2(null,i__39529);
var map__39535__$1 = (((((!((map__39535 == null))))?(((((map__39535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39535):map__39535);
var src = map__39535__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39535__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39535__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39535__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39535__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__39672 = seq__39526;
var G__39673 = chunk__39527;
var G__39674 = count__39528;
var G__39675 = (i__39529 + (1));
seq__39526 = G__39672;
chunk__39527 = G__39673;
count__39528 = G__39674;
i__39529 = G__39675;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__39526);
if(temp__5720__auto__){
var seq__39526__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39526__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__39526__$1);
var G__39676 = cljs.core.chunk_rest(seq__39526__$1);
var G__39677 = c__4550__auto__;
var G__39678 = cljs.core.count(c__4550__auto__);
var G__39679 = (0);
seq__39526 = G__39676;
chunk__39527 = G__39677;
count__39528 = G__39678;
i__39529 = G__39679;
continue;
} else {
var map__39538 = cljs.core.first(seq__39526__$1);
var map__39538__$1 = (((((!((map__39538 == null))))?(((((map__39538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39538):map__39538);
var src = map__39538__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39538__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39538__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39538__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39538__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__39680 = cljs.core.next(seq__39526__$1);
var G__39681 = null;
var G__39682 = (0);
var G__39683 = (0);
seq__39526 = G__39680;
chunk__39527 = G__39681;
count__39528 = G__39682;
i__39529 = G__39683;
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
var seq__39540 = cljs.core.seq(js_requires);
var chunk__39541 = null;
var count__39542 = (0);
var i__39543 = (0);
while(true){
if((i__39543 < count__39542)){
var js_ns = chunk__39541.cljs$core$IIndexed$_nth$arity$2(null,i__39543);
var require_str_39684 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39684);


var G__39685 = seq__39540;
var G__39686 = chunk__39541;
var G__39687 = count__39542;
var G__39688 = (i__39543 + (1));
seq__39540 = G__39685;
chunk__39541 = G__39686;
count__39542 = G__39687;
i__39543 = G__39688;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__39540);
if(temp__5720__auto__){
var seq__39540__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39540__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__39540__$1);
var G__39689 = cljs.core.chunk_rest(seq__39540__$1);
var G__39690 = c__4550__auto__;
var G__39691 = cljs.core.count(c__4550__auto__);
var G__39692 = (0);
seq__39540 = G__39689;
chunk__39541 = G__39690;
count__39542 = G__39691;
i__39543 = G__39692;
continue;
} else {
var js_ns = cljs.core.first(seq__39540__$1);
var require_str_39693 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39693);


var G__39694 = cljs.core.next(seq__39540__$1);
var G__39695 = null;
var G__39696 = (0);
var G__39697 = (0);
seq__39540 = G__39694;
chunk__39541 = G__39695;
count__39542 = G__39696;
i__39543 = G__39697;
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
var G__39544 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__39544) : callback.call(null,G__39544));
} else {
var G__39545 = shadow.cljs.devtools.client.env.files_url();
var G__39546 = ((function (G__39545){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__39545))
;
var G__39547 = "POST";
var G__39548 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__39549 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__39545,G__39546,G__39547,G__39548,G__39549);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__39551){
var map__39552 = p__39551;
var map__39552__$1 = (((((!((map__39552 == null))))?(((((map__39552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39552):map__39552);
var msg = map__39552__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39552__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39552__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__39554 = info;
var map__39554__$1 = (((((!((map__39554 == null))))?(((((map__39554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39554):map__39554);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39554__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39554__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__39554,map__39554__$1,sources,compiled,map__39552,map__39552__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39556(s__39557){
return (new cljs.core.LazySeq(null,((function (map__39554,map__39554__$1,sources,compiled,map__39552,map__39552__$1,msg,info,reload_info){
return (function (){
var s__39557__$1 = s__39557;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__39557__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__39562 = cljs.core.first(xs__6277__auto__);
var map__39562__$1 = (((((!((map__39562 == null))))?(((((map__39562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39562):map__39562);
var src = map__39562__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39562__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39562__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__39557__$1,map__39562,map__39562__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__39554,map__39554__$1,sources,compiled,map__39552,map__39552__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39556_$_iter__39558(s__39559){
return (new cljs.core.LazySeq(null,((function (s__39557__$1,map__39562,map__39562__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__39554,map__39554__$1,sources,compiled,map__39552,map__39552__$1,msg,info,reload_info){
return (function (){
var s__39559__$1 = s__39559;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__39559__$1);
if(temp__5720__auto____$1){
var s__39559__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39559__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__39559__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__39561 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__39560 = (0);
while(true){
if((i__39560 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__39560);
cljs.core.chunk_append(b__39561,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39698 = (i__39560 + (1));
i__39560 = G__39698;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39561),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39556_$_iter__39558(cljs.core.chunk_rest(s__39559__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39561),null);
}
} else {
var warning = cljs.core.first(s__39559__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39556_$_iter__39558(cljs.core.rest(s__39559__$2)));
}
} else {
return null;
}
break;
}
});})(s__39557__$1,map__39562,map__39562__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__39554,map__39554__$1,sources,compiled,map__39552,map__39552__$1,msg,info,reload_info))
,null,null));
});})(s__39557__$1,map__39562,map__39562__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__39554,map__39554__$1,sources,compiled,map__39552,map__39552__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39556(cljs.core.rest(s__39557__$1)));
} else {
var G__39699 = cljs.core.rest(s__39557__$1);
s__39557__$1 = G__39699;
continue;
}
} else {
var G__39700 = cljs.core.rest(s__39557__$1);
s__39557__$1 = G__39700;
continue;
}
} else {
return null;
}
break;
}
});})(map__39554,map__39554__$1,sources,compiled,map__39552,map__39552__$1,msg,info,reload_info))
,null,null));
});})(map__39554,map__39554__$1,sources,compiled,map__39552,map__39552__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__39564_39701 = cljs.core.seq(warnings);
var chunk__39565_39702 = null;
var count__39566_39703 = (0);
var i__39567_39704 = (0);
while(true){
if((i__39567_39704 < count__39566_39703)){
var map__39573_39705 = chunk__39565_39702.cljs$core$IIndexed$_nth$arity$2(null,i__39567_39704);
var map__39573_39706__$1 = (((((!((map__39573_39705 == null))))?(((((map__39573_39705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39573_39705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39573_39705):map__39573_39705);
var w_39707 = map__39573_39706__$1;
var msg_39708__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39573_39706__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39573_39706__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39573_39706__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39573_39706__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39711)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39709),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39710),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39708__$1)].join(''));


var G__39712 = seq__39564_39701;
var G__39713 = chunk__39565_39702;
var G__39714 = count__39566_39703;
var G__39715 = (i__39567_39704 + (1));
seq__39564_39701 = G__39712;
chunk__39565_39702 = G__39713;
count__39566_39703 = G__39714;
i__39567_39704 = G__39715;
continue;
} else {
var temp__5720__auto___39716 = cljs.core.seq(seq__39564_39701);
if(temp__5720__auto___39716){
var seq__39564_39717__$1 = temp__5720__auto___39716;
if(cljs.core.chunked_seq_QMARK_(seq__39564_39717__$1)){
var c__4550__auto___39718 = cljs.core.chunk_first(seq__39564_39717__$1);
var G__39719 = cljs.core.chunk_rest(seq__39564_39717__$1);
var G__39720 = c__4550__auto___39718;
var G__39721 = cljs.core.count(c__4550__auto___39718);
var G__39722 = (0);
seq__39564_39701 = G__39719;
chunk__39565_39702 = G__39720;
count__39566_39703 = G__39721;
i__39567_39704 = G__39722;
continue;
} else {
var map__39576_39723 = cljs.core.first(seq__39564_39717__$1);
var map__39576_39724__$1 = (((((!((map__39576_39723 == null))))?(((((map__39576_39723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39576_39723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39576_39723):map__39576_39723);
var w_39725 = map__39576_39724__$1;
var msg_39726__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39576_39724__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39576_39724__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39576_39724__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39576_39724__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39729)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39727),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39728),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39726__$1)].join(''));


var G__39730 = cljs.core.next(seq__39564_39717__$1);
var G__39731 = null;
var G__39732 = (0);
var G__39733 = (0);
seq__39564_39701 = G__39730;
chunk__39565_39702 = G__39731;
count__39566_39703 = G__39732;
i__39567_39704 = G__39733;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__39554,map__39554__$1,sources,compiled,warnings,map__39552,map__39552__$1,msg,info,reload_info){
return (function (p__39578){
var map__39579 = p__39578;
var map__39579__$1 = (((((!((map__39579 == null))))?(((((map__39579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39579):map__39579);
var src = map__39579__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39579__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39579__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__39554,map__39554__$1,sources,compiled,warnings,map__39552,map__39552__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__39554,map__39554__$1,sources,compiled,warnings,map__39552,map__39552__$1,msg,info,reload_info){
return (function (p__39581){
var map__39582 = p__39581;
var map__39582__$1 = (((((!((map__39582 == null))))?(((((map__39582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39582):map__39582);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39582__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__39554,map__39554__$1,sources,compiled,warnings,map__39552,map__39552__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__39554,map__39554__$1,sources,compiled,warnings,map__39552,map__39552__$1,msg,info,reload_info){
return (function (p__39584){
var map__39585 = p__39584;
var map__39585__$1 = (((((!((map__39585 == null))))?(((((map__39585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39585):map__39585);
var rc = map__39585__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39585__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__39554,map__39554__$1,sources,compiled,warnings,map__39552,map__39552__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__39554,map__39554__$1,sources,compiled,warnings,map__39552,map__39552__$1,msg,info,reload_info){
return (function (p1__39550_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39550_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__39554,map__39554__$1,sources,compiled,warnings,map__39552,map__39552__$1,msg,info,reload_info))
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__39587){
var map__39588 = p__39587;
var map__39588__$1 = (((((!((map__39588 == null))))?(((((map__39588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39588):map__39588);
var msg = map__39588__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39588__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__39590 = cljs.core.seq(updates);
var chunk__39592 = null;
var count__39593 = (0);
var i__39594 = (0);
while(true){
if((i__39594 < count__39593)){
var path = chunk__39592.cljs$core$IIndexed$_nth$arity$2(null,i__39594);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39620_39734 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39623_39735 = null;
var count__39624_39736 = (0);
var i__39625_39737 = (0);
while(true){
if((i__39625_39737 < count__39624_39736)){
var node_39738 = chunk__39623_39735.cljs$core$IIndexed$_nth$arity$2(null,i__39625_39737);
var path_match_39739 = shadow.cljs.devtools.client.browser.match_paths(node_39738.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39739)){
var new_link_39740 = (function (){var G__39630 = node_39738.cloneNode(true);
G__39630.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39739),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39630;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39739], 0));

goog.dom.insertSiblingAfter(new_link_39740,node_39738);

goog.dom.removeNode(node_39738);


var G__39741 = seq__39620_39734;
var G__39742 = chunk__39623_39735;
var G__39743 = count__39624_39736;
var G__39744 = (i__39625_39737 + (1));
seq__39620_39734 = G__39741;
chunk__39623_39735 = G__39742;
count__39624_39736 = G__39743;
i__39625_39737 = G__39744;
continue;
} else {
var G__39745 = seq__39620_39734;
var G__39746 = chunk__39623_39735;
var G__39747 = count__39624_39736;
var G__39748 = (i__39625_39737 + (1));
seq__39620_39734 = G__39745;
chunk__39623_39735 = G__39746;
count__39624_39736 = G__39747;
i__39625_39737 = G__39748;
continue;
}
} else {
var temp__5720__auto___39749 = cljs.core.seq(seq__39620_39734);
if(temp__5720__auto___39749){
var seq__39620_39750__$1 = temp__5720__auto___39749;
if(cljs.core.chunked_seq_QMARK_(seq__39620_39750__$1)){
var c__4550__auto___39751 = cljs.core.chunk_first(seq__39620_39750__$1);
var G__39752 = cljs.core.chunk_rest(seq__39620_39750__$1);
var G__39753 = c__4550__auto___39751;
var G__39754 = cljs.core.count(c__4550__auto___39751);
var G__39755 = (0);
seq__39620_39734 = G__39752;
chunk__39623_39735 = G__39753;
count__39624_39736 = G__39754;
i__39625_39737 = G__39755;
continue;
} else {
var node_39756 = cljs.core.first(seq__39620_39750__$1);
var path_match_39757 = shadow.cljs.devtools.client.browser.match_paths(node_39756.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39757)){
var new_link_39758 = (function (){var G__39631 = node_39756.cloneNode(true);
G__39631.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39757),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39631;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39757], 0));

goog.dom.insertSiblingAfter(new_link_39758,node_39756);

goog.dom.removeNode(node_39756);


var G__39759 = cljs.core.next(seq__39620_39750__$1);
var G__39760 = null;
var G__39761 = (0);
var G__39762 = (0);
seq__39620_39734 = G__39759;
chunk__39623_39735 = G__39760;
count__39624_39736 = G__39761;
i__39625_39737 = G__39762;
continue;
} else {
var G__39763 = cljs.core.next(seq__39620_39750__$1);
var G__39764 = null;
var G__39765 = (0);
var G__39766 = (0);
seq__39620_39734 = G__39763;
chunk__39623_39735 = G__39764;
count__39624_39736 = G__39765;
i__39625_39737 = G__39766;
continue;
}
}
} else {
}
}
break;
}


var G__39767 = seq__39590;
var G__39768 = chunk__39592;
var G__39769 = count__39593;
var G__39770 = (i__39594 + (1));
seq__39590 = G__39767;
chunk__39592 = G__39768;
count__39593 = G__39769;
i__39594 = G__39770;
continue;
} else {
var G__39771 = seq__39590;
var G__39772 = chunk__39592;
var G__39773 = count__39593;
var G__39774 = (i__39594 + (1));
seq__39590 = G__39771;
chunk__39592 = G__39772;
count__39593 = G__39773;
i__39594 = G__39774;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__39590);
if(temp__5720__auto__){
var seq__39590__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39590__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__39590__$1);
var G__39775 = cljs.core.chunk_rest(seq__39590__$1);
var G__39776 = c__4550__auto__;
var G__39777 = cljs.core.count(c__4550__auto__);
var G__39778 = (0);
seq__39590 = G__39775;
chunk__39592 = G__39776;
count__39593 = G__39777;
i__39594 = G__39778;
continue;
} else {
var path = cljs.core.first(seq__39590__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39632_39779 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39635_39780 = null;
var count__39636_39781 = (0);
var i__39637_39782 = (0);
while(true){
if((i__39637_39782 < count__39636_39781)){
var node_39783 = chunk__39635_39780.cljs$core$IIndexed$_nth$arity$2(null,i__39637_39782);
var path_match_39784 = shadow.cljs.devtools.client.browser.match_paths(node_39783.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39784)){
var new_link_39785 = (function (){var G__39642 = node_39783.cloneNode(true);
G__39642.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39784),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39642;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39784], 0));

goog.dom.insertSiblingAfter(new_link_39785,node_39783);

goog.dom.removeNode(node_39783);


var G__39786 = seq__39632_39779;
var G__39787 = chunk__39635_39780;
var G__39788 = count__39636_39781;
var G__39789 = (i__39637_39782 + (1));
seq__39632_39779 = G__39786;
chunk__39635_39780 = G__39787;
count__39636_39781 = G__39788;
i__39637_39782 = G__39789;
continue;
} else {
var G__39790 = seq__39632_39779;
var G__39791 = chunk__39635_39780;
var G__39792 = count__39636_39781;
var G__39793 = (i__39637_39782 + (1));
seq__39632_39779 = G__39790;
chunk__39635_39780 = G__39791;
count__39636_39781 = G__39792;
i__39637_39782 = G__39793;
continue;
}
} else {
var temp__5720__auto___39794__$1 = cljs.core.seq(seq__39632_39779);
if(temp__5720__auto___39794__$1){
var seq__39632_39795__$1 = temp__5720__auto___39794__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39632_39795__$1)){
var c__4550__auto___39796 = cljs.core.chunk_first(seq__39632_39795__$1);
var G__39797 = cljs.core.chunk_rest(seq__39632_39795__$1);
var G__39798 = c__4550__auto___39796;
var G__39799 = cljs.core.count(c__4550__auto___39796);
var G__39800 = (0);
seq__39632_39779 = G__39797;
chunk__39635_39780 = G__39798;
count__39636_39781 = G__39799;
i__39637_39782 = G__39800;
continue;
} else {
var node_39801 = cljs.core.first(seq__39632_39795__$1);
var path_match_39802 = shadow.cljs.devtools.client.browser.match_paths(node_39801.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39802)){
var new_link_39803 = (function (){var G__39643 = node_39801.cloneNode(true);
G__39643.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39802),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39643;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39802], 0));

goog.dom.insertSiblingAfter(new_link_39803,node_39801);

goog.dom.removeNode(node_39801);


var G__39804 = cljs.core.next(seq__39632_39795__$1);
var G__39805 = null;
var G__39806 = (0);
var G__39807 = (0);
seq__39632_39779 = G__39804;
chunk__39635_39780 = G__39805;
count__39636_39781 = G__39806;
i__39637_39782 = G__39807;
continue;
} else {
var G__39808 = cljs.core.next(seq__39632_39795__$1);
var G__39809 = null;
var G__39810 = (0);
var G__39811 = (0);
seq__39632_39779 = G__39808;
chunk__39635_39780 = G__39809;
count__39636_39781 = G__39810;
i__39637_39782 = G__39811;
continue;
}
}
} else {
}
}
break;
}


var G__39812 = cljs.core.next(seq__39590__$1);
var G__39813 = null;
var G__39814 = (0);
var G__39815 = (0);
seq__39590 = G__39812;
chunk__39592 = G__39813;
count__39593 = G__39814;
i__39594 = G__39815;
continue;
} else {
var G__39816 = cljs.core.next(seq__39590__$1);
var G__39817 = null;
var G__39818 = (0);
var G__39819 = (0);
seq__39590 = G__39816;
chunk__39592 = G__39817;
count__39593 = G__39818;
i__39594 = G__39819;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__39644){
var map__39645 = p__39644;
var map__39645__$1 = (((((!((map__39645 == null))))?(((((map__39645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39645):map__39645);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39645__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39645__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__39645,map__39645__$1,id,js){
return (function (){
return eval(js);
});})(map__39645,map__39645__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__39647){
var map__39648 = p__39647;
var map__39648__$1 = (((((!((map__39648 == null))))?(((((map__39648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39648):map__39648);
var msg = map__39648__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39648__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39648__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39648__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39648__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__39648,map__39648__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__39650){
var map__39651 = p__39650;
var map__39651__$1 = (((((!((map__39651 == null))))?(((((map__39651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39651):map__39651);
var src = map__39651__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39651__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__39648,map__39648__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__39648,map__39648__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__39648,map__39648__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__39653){
var map__39654 = p__39653;
var map__39654__$1 = (((((!((map__39654 == null))))?(((((map__39654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39654):map__39654);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39654__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39654__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__39654,map__39654__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__39654,map__39654__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__39656){
var map__39657 = p__39656;
var map__39657__$1 = (((((!((map__39657 == null))))?(((((map__39657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39657):map__39657);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39657__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39657__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__39659){
var map__39660 = p__39659;
var map__39660__$1 = (((((!((map__39660 == null))))?(((((map__39660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39660):map__39660);
var msg = map__39660__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39660__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__39662 = type;
var G__39662__$1 = (((G__39662 instanceof cljs.core.Keyword))?G__39662.fqn:null);
switch (G__39662__$1) {
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
var G__39663 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__39664 = ((function (G__39663){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__39663))
;
var G__39665 = "POST";
var G__39666 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__39667 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__39663,G__39664,G__39665,G__39666,G__39667);
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
}catch (e39668){var e = e39668;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___39821 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___39821)){
var s_39822 = temp__5720__auto___39821;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_39822.onclose = ((function (s_39822,temp__5720__auto___39821){
return (function (e){
return null;
});})(s_39822,temp__5720__auto___39821))
;

s_39822.close();

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
