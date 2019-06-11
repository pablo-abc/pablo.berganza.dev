goog.provide('shadow.xhr');
goog.require('cljs.core');
goog.require('goog.result');
goog.require('goog.result.SimpleResult');
goog.require('goog.labs.net.xhr');
goog.require('cljs.reader');
goog.require('goog.uri.utils');
goog.require('goog.json');
goog.require('shadow.object');
goog.require('shadow.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('shadow.util');
shadow.xhr.result_chain = (function shadow$xhr$result_chain(res,handler){
return goog.result.chain(res,handler);
});
shadow.xhr.result_combine = (function shadow$xhr$result_combine(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31472 = arguments.length;
var i__4731__auto___31473 = (0);
while(true){
if((i__4731__auto___31473 < len__4730__auto___31472)){
args__4736__auto__.push((arguments[i__4731__auto___31473]));

var G__31475 = (i__4731__auto___31473 + (1));
i__4731__auto___31473 = G__31475;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.xhr.result_combine.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.xhr.result_combine.cljs$core$IFn$_invoke$arity$variadic = (function (results){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.result.combine,results);
});

shadow.xhr.result_combine.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.xhr.result_combine.cljs$lang$applyTo = (function (seq31289){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31289));
});

shadow.xhr.result_wait_on_success = (function shadow$xhr$result_wait_on_success(res,callback){
return goog.result.waitOnSuccess(res,callback);
});
shadow.xhr.result_success_QMARK_ = (function shadow$xhr$result_success_QMARK_(res){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.result.Result.State.SUCCESS,res.getState());
});
shadow.xhr.result_value = (function shadow$xhr$result_value(res){
return res.getValue();
});
shadow.xhr.result_immediate = (function shadow$xhr$result_immediate(value){
return goog.result.successfulResult(value);
});
shadow.xhr.result_error = (function shadow$xhr$result_error(res,callback){
return goog.result.waitOnError(res,callback);
});
shadow.xhr.edn_transform = (function shadow$xhr$edn_transform(body){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(body);
});
shadow.xhr.json_transform = (function shadow$xhr$json_transform(body){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(body));
});
shadow.xhr.goog_keys = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"timeout","timeout",-318625318),"timeoutMs",new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),"withCredentials",new cljs.core.Keyword(null,"headers","headers",-835030129),"headers",new cljs.core.Keyword(null,"mime-type","mime-type",1058646439),"mimeType"], null);
shadow.xhr.make_request_options = (function shadow$xhr$make_request_options(options){
var obj = ({});
var seq__31299_31482 = cljs.core.seq(options);
var chunk__31300_31483 = null;
var count__31301_31484 = (0);
var i__31302_31485 = (0);
while(true){
if((i__31302_31485 < count__31301_31484)){
var vec__31346_31488 = chunk__31300_31483.cljs$core$IIndexed$_nth$arity$2(null,i__31302_31485);
var k_31489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31346_31488,(0),null);
var v_31490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31346_31488,(1),null);
(obj[cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow.xhr.goog_keys,k_31489)] = cljs.core.clj__GT_js(v_31490));


var G__31491 = seq__31299_31482;
var G__31492 = chunk__31300_31483;
var G__31493 = count__31301_31484;
var G__31494 = (i__31302_31485 + (1));
seq__31299_31482 = G__31491;
chunk__31300_31483 = G__31492;
count__31301_31484 = G__31493;
i__31302_31485 = G__31494;
continue;
} else {
var temp__5720__auto___31495 = cljs.core.seq(seq__31299_31482);
if(temp__5720__auto___31495){
var seq__31299_31496__$1 = temp__5720__auto___31495;
if(cljs.core.chunked_seq_QMARK_(seq__31299_31496__$1)){
var c__4550__auto___31497 = cljs.core.chunk_first(seq__31299_31496__$1);
var G__31498 = cljs.core.chunk_rest(seq__31299_31496__$1);
var G__31499 = c__4550__auto___31497;
var G__31500 = cljs.core.count(c__4550__auto___31497);
var G__31501 = (0);
seq__31299_31482 = G__31498;
chunk__31300_31483 = G__31499;
count__31301_31484 = G__31500;
i__31302_31485 = G__31501;
continue;
} else {
var vec__31352_31503 = cljs.core.first(seq__31299_31496__$1);
var k_31504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31352_31503,(0),null);
var v_31505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31352_31503,(1),null);
(obj[cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow.xhr.goog_keys,k_31504)] = cljs.core.clj__GT_js(v_31505));


var G__31507 = cljs.core.next(seq__31299_31496__$1);
var G__31508 = null;
var G__31509 = (0);
var G__31510 = (0);
seq__31299_31482 = G__31507;
chunk__31300_31483 = G__31508;
count__31301_31484 = G__31509;
i__31302_31485 = G__31510;
continue;
}
} else {
}
}
break;
}

return obj;
});
shadow.xhr.content_transforms = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, ["text/edn",shadow.xhr.edn_transform,"application/edn",shadow.xhr.edn_transform,"application/json",shadow.xhr.json_transform,"text/html",cljs.core.identity,"text/plain",cljs.core.identity], null));
shadow.xhr.register_transform = (function shadow$xhr$register_transform(content_type,transform_fn){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.xhr.content_transforms,cljs.core.assoc,content_type,transform_fn);
});
shadow.xhr.auto_transform = (function shadow$xhr$auto_transform(req){
var content_type = (function (){var ct = clojure.string.lower_case(req.getResponseHeader("Content-Type"));
var sep = ct.indexOf(";");
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),sep)){
return ct.substring((0),sep);
} else {
return ct;
}
})();
var transform_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.xhr.content_transforms),content_type);
if((transform_fn == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported content-type",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"req","req",-326448303),req,new cljs.core.Keyword(null,"content-type","content-type",-508222634),content_type], null));
} else {
var G__31362 = req.responseText;
return (transform_fn.cljs$core$IFn$_invoke$arity$1 ? transform_fn.cljs$core$IFn$_invoke$arity$1(G__31362) : transform_fn.call(null,G__31362));
}
});
shadow.xhr.make_url = (function shadow$xhr$make_url(url,params){
var G__31363 = url;
var G__31364 = cljs.core.clj__GT_js(params);
return goog.uri.utils.appendParamsFromMap(G__31363,G__31364);
});
shadow.xhr.transform_request_body = (function shadow$xhr$transform_request_body(data){
if(typeof data === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain; charset=utf-8",data], null);
} else {
if((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IPrintWithWriter$))))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/edn; charset=utf-8",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/octet-stream",data], null);

}
}
});
shadow.xhr.as_url = (function shadow$xhr$as_url(input){
if(typeof input === 'string'){
return input;
} else {
if(((cljs.core.vector_QMARK_(input)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(input))) && (typeof cljs.core.first(input) === 'string') && (cljs.core.map_QMARK_(cljs.core.second(input))))){
var vec__31368 = input;
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31368,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31368,(1),null);
return shadow.xhr.make_url(url,params);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doesnt look like an url",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),input], null));

}
}
});
shadow.xhr.e__GT_data = (function shadow$xhr$e__GT_data(e){
return e;
});
shadow.xhr.event_handler = (function shadow$xhr$event_handler(req,events,event_type){
return (function (e){
if(cljs.core.map_QMARK_(events)){
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(events,event_type);
if(cljs.core.truth_(temp__5720__auto__)){
var c = temp__5720__auto__;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [req,shadow.xhr.e__GT_data(e)], null));
} else {
return null;
}
} else {
if((!((events == null)))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(events,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_type,req,shadow.xhr.e__GT_data(e)], null));
} else {
return null;

}
}
});
});
shadow.xhr.request_ok_QMARK_ = (function shadow$xhr$request_ok_QMARK_(status){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status);
});
shadow.xhr.request_error_QMARK_ = (function shadow$xhr$request_error_QMARK_(status){
return (status >= (400));
});
/**
 * creates a channel and performs xhr request like (chan :GET "/something")
 * 
 * accepts url as string or [url params]
 * 
 * this channel will receive one message [status body req] on load
 * loadend will close the result channel, so you will get nil results on request errors/timeouts
 * 
 * use options hash to pass in extra channels
 * 
 * (chan :POST "/something" some-data {:events chan-or-map
 *                                       :upload chan-or-map})
 * 
 * when given a chan that channels receives messages in form of [event-type event-data req]
 * when given a map a channel is expected for each eventtype and will receive [event-data req]
 * {:timeout some-chan}, if no channel for a given event is present, no message is sent
 * 
 * event types are :loadstart :progress :abort :error :timeout :loadend :load (see xhr spec)
 * only exception is that status >= 500 does not return a result and produces an error event instead
 */
shadow.xhr.chan = (function shadow$xhr$chan(var_args){
var G__31386 = arguments.length;
switch (G__31386) {
case 2:
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.xhr.chan.cljs$core$IFn$_invoke$arity$2 = (function (method,url){
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(method,url,null,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.xhr.chan.cljs$core$IFn$_invoke$arity$3 = (function (method,url,data){
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(method,url,data,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4 = (function (method,url,data,p__31393){
var map__31394 = p__31393;
var map__31394__$1 = (((((!((map__31394 == null))))?(((((map__31394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31394):map__31394);
var options = map__31394__$1;
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31394__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var upload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31394__$1,new cljs.core.Keyword(null,"upload","upload",-255769218));
var body_only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31394__$1,new cljs.core.Keyword(null,"body-only","body-only",-698120682));
var req = (new XMLHttpRequest());
var body_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1736591026),method);
var vec__31400 = ((body_QMARK_)?shadow.xhr.transform_request_body(data):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31400,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31400,(1),null);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
if(cljs.core.truth_((function (){var and__4120__auto__ = body_QMARK_;
if(and__4120__auto__){
return upload;
} else {
return and__4120__auto__;
}
})())){
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"progress","progress",244323547),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"progress","progress",244323547)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"abort","abort",521193198),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"abort","abort",521193198)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"error","error",-978969032),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"error","error",-978969032)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"timeout","timeout",-318625318),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"timeout","timeout",-318625318)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"loadend","loadend",1430560564),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"loadend","loadend",1430560564)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"load","load",-1318641184),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"loadend","loadend",1430560564)));
} else {
}

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"progress","progress",244323547),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"progress","progress",244323547)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"abort","abort",521193198),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"abort","abort",521193198)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"timeout","timeout",-318625318),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"timeout","timeout",-318625318)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"loadend","loadend",1430560564),(function (){var callback = shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"loadend","loadend",1430560564));
return ((function (callback,req,body_QMARK_,vec__31400,content_type,body,result_chan,map__31394,map__31394__$1,options,events,upload,body_only){
return (function (e){
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(e) : callback.call(null,e));

return cljs.core.async.close_BANG_(result_chan);
});
;})(callback,req,body_QMARK_,vec__31400,content_type,body,result_chan,map__31394,map__31394__$1,options,events,upload,body_only))
})());

var error_handler_31559 = shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"error","error",-978969032));
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"error","error",-978969032),error_handler_31559);

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"load","load",-1318641184),(function (){var callback = shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"load","load",-1318641184));
return ((function (callback,error_handler_31559,req,body_QMARK_,vec__31400,content_type,body,result_chan,map__31394,map__31394__$1,options,events,upload,body_only){
return (function (e){
var status = req.status;
var body__$1 = (function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5718__auto__)){
var transform = temp__5718__auto__;
var G__31408 = req.responseText;
var G__31409 = req;
return (transform.cljs$core$IFn$_invoke$arity$2 ? transform.cljs$core$IFn$_invoke$arity$2(G__31408,G__31409) : transform.call(null,G__31408,G__31409));
} else {
return shadow.xhr.auto_transform(req);
}
})();
if(shadow.xhr.request_error_QMARK_(status)){
return (error_handler_31559.cljs$core$IFn$_invoke$arity$1 ? error_handler_31559.cljs$core$IFn$_invoke$arity$1(e) : error_handler_31559.call(null,e));
} else {
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(e) : callback.call(null,e));

if(cljs.core.truth_(body_only)){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_chan,body__$1);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,body__$1,req], null));
}
}
});
;})(callback,error_handler_31559,req,body_QMARK_,vec__31400,content_type,body,result_chan,map__31394,map__31394__$1,options,events,upload,body_only))
})());

req.open(cljs.core.name(method),shadow.xhr.as_url(url),true);

req.responseType = "text";

req.withCredentials = (!(new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235).cljs$core$IFn$_invoke$arity$1(options) === false));

if(body_QMARK_){
req.setRequestHeader("Content-Type",content_type);
} else {
}

if(body_QMARK_){
req.send(body);
} else {
req.send();
}

return result_chan;
});

shadow.xhr.chan.cljs$lang$maxFixedArity = 4;

shadow.xhr.request = (function shadow$xhr$request(var_args){
var G__31414 = arguments.length;
switch (G__31414) {
case 2:
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.xhr.request.cljs$core$IFn$_invoke$arity$2 = (function (method,url){
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$4(method,url,null,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.xhr.request.cljs$core$IFn$_invoke$arity$3 = (function (method,url,data){
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$4(method,url,data,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.xhr.request.cljs$core$IFn$_invoke$arity$4 = (function (method,url,data,options){
if((((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"DELETE","DELETE",1688673772),null,new cljs.core.Keyword(null,"GET","GET",1736591026),null], null), null),method)))) && ((data == null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("request needs data",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"options","options",99638489),options], null));
} else {
}

var body_QMARK_ = (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1736591026),method)) || ((data == null)))));
var vec__31415 = shadow.xhr.transform_request_body(data);
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31415,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31415,(1),null);
var req = (function (){var G__31419 = cljs.core.name(method);
var G__31420 = (cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1736591026),method);
if(and__4120__auto__){
return data;
} else {
return and__4120__auto__;
}
})())?shadow.xhr.make_url(url,data):url);
var G__31421 = ((body_QMARK_)?body:null);
var G__31422 = shadow.xhr.make_request_options(((body_QMARK_)?cljs.core.assoc_in(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"Content-Type"], null),content_type):options));
return goog.labs.net.xhr.send(G__31419,G__31420,G__31421,G__31422);
})();
var req__$1 = goog.result.SimpleResult.fromPromise(req);
return goog.result.transform(req__$1,shadow.xhr.auto_transform);
});

shadow.xhr.request.cljs$lang$maxFixedArity = 4;

shadow.xhr.upload = (function shadow$xhr$upload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31572 = arguments.length;
var i__4731__auto___31573 = (0);
while(true){
if((i__4731__auto___31573 < len__4730__auto___31572)){
args__4736__auto__.push((arguments[i__4731__auto___31573]));

var G__31575 = (i__4731__auto___31573 + (1));
i__4731__auto___31573 = G__31575;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return shadow.xhr.upload.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

shadow.xhr.upload.cljs$core$IFn$_invoke$arity$variadic = (function (url,file,events){
var xhr = (new XMLHttpRequest());
var seq__31440_31581 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),events));
var chunk__31442_31582 = null;
var count__31443_31583 = (0);
var i__31444_31584 = (0);
while(true){
if((i__31444_31584 < count__31443_31583)){
var vec__31453_31586 = chunk__31442_31582.cljs$core$IIndexed$_nth$arity$2(null,i__31444_31584);
var ev_id_31587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31453_31586,(0),null);
var ev_handler_31588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31453_31586,(1),null);
var target_31594 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"progress","progress",244323547),ev_id_31587))?(xhr["upload"]):xhr);
target_31594.addEventListener(cljs.core.name(ev_id_31587),ev_handler_31588);


var G__31598 = seq__31440_31581;
var G__31599 = chunk__31442_31582;
var G__31600 = count__31443_31583;
var G__31601 = (i__31444_31584 + (1));
seq__31440_31581 = G__31598;
chunk__31442_31582 = G__31599;
count__31443_31583 = G__31600;
i__31444_31584 = G__31601;
continue;
} else {
var temp__5720__auto___31602 = cljs.core.seq(seq__31440_31581);
if(temp__5720__auto___31602){
var seq__31440_31603__$1 = temp__5720__auto___31602;
if(cljs.core.chunked_seq_QMARK_(seq__31440_31603__$1)){
var c__4550__auto___31604 = cljs.core.chunk_first(seq__31440_31603__$1);
var G__31605 = cljs.core.chunk_rest(seq__31440_31603__$1);
var G__31606 = c__4550__auto___31604;
var G__31607 = cljs.core.count(c__4550__auto___31604);
var G__31608 = (0);
seq__31440_31581 = G__31605;
chunk__31442_31582 = G__31606;
count__31443_31583 = G__31607;
i__31444_31584 = G__31608;
continue;
} else {
var vec__31461_31609 = cljs.core.first(seq__31440_31603__$1);
var ev_id_31610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31461_31609,(0),null);
var ev_handler_31611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31461_31609,(1),null);
var target_31617 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"progress","progress",244323547),ev_id_31610))?(xhr["upload"]):xhr);
target_31617.addEventListener(cljs.core.name(ev_id_31610),ev_handler_31611);


var G__31624 = cljs.core.next(seq__31440_31603__$1);
var G__31625 = null;
var G__31626 = (0);
var G__31627 = (0);
seq__31440_31581 = G__31624;
chunk__31442_31582 = G__31625;
count__31443_31583 = G__31626;
i__31444_31584 = G__31627;
continue;
}
} else {
}
}
break;
}

var G__31464 = xhr;
G__31464.open("PUT",url);

G__31464.send(file);

return G__31464;
});

shadow.xhr.upload.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.xhr.upload.cljs$lang$applyTo = (function (seq31424){
var G__31425 = cljs.core.first(seq31424);
var seq31424__$1 = cljs.core.next(seq31424);
var G__31426 = cljs.core.first(seq31424__$1);
var seq31424__$2 = cljs.core.next(seq31424__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31425,G__31426,seq31424__$2);
});


//# sourceMappingURL=shadow.xhr.js.map
