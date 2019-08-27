goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__37576 = coll;
var G__37577 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__37576,G__37577) : shadow.dom.lazy_native_coll_seq.call(null,G__37576,G__37577));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__37607 = arguments.length;
switch (G__37607) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__37616 = arguments.length;
switch (G__37616) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__37623 = arguments.length;
switch (G__37623) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__37627 = arguments.length;
switch (G__37627) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__37633 = arguments.length;
switch (G__37633) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__37637 = document;
var G__37638 = shadow.dom.dom_node(el);
return goog.dom.contains(G__37637,G__37638);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__37641 = shadow.dom.dom_node(parent);
var G__37642 = shadow.dom.dom_node(el);
return goog.dom.contains(G__37641,G__37642);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__37644 = shadow.dom.dom_node(el);
var G__37645 = cls;
return goog.dom.classlist.add(G__37644,G__37645);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__37648 = shadow.dom.dom_node(el);
var G__37649 = cls;
return goog.dom.classlist.remove(G__37648,G__37649);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__37655 = arguments.length;
switch (G__37655) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__37657 = shadow.dom.dom_node(el);
var G__37658 = cls;
return goog.dom.classlist.toggle(G__37657,G__37658);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e37662){if((e37662 instanceof Object)){
var e = e37662;
return console.log("didnt support attachEvent",el,e);
} else {
throw e37662;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__37670 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__37671 = null;
var count__37672 = (0);
var i__37673 = (0);
while(true){
if((i__37673 < count__37672)){
var el = chunk__37671.cljs$core$IIndexed$_nth$arity$2(null,i__37673);
var handler_38296__$1 = ((function (seq__37670,chunk__37671,count__37672,i__37673,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37670,chunk__37671,count__37672,i__37673,el))
;
var G__37683_38297 = el;
var G__37684_38298 = cljs.core.name(ev);
var G__37685_38299 = handler_38296__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__37683_38297,G__37684_38298,G__37685_38299) : shadow.dom.dom_listen.call(null,G__37683_38297,G__37684_38298,G__37685_38299));


var G__38300 = seq__37670;
var G__38301 = chunk__37671;
var G__38302 = count__37672;
var G__38303 = (i__37673 + (1));
seq__37670 = G__38300;
chunk__37671 = G__38301;
count__37672 = G__38302;
i__37673 = G__38303;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37670);
if(temp__5720__auto__){
var seq__37670__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37670__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37670__$1);
var G__38304 = cljs.core.chunk_rest(seq__37670__$1);
var G__38305 = c__4550__auto__;
var G__38306 = cljs.core.count(c__4550__auto__);
var G__38307 = (0);
seq__37670 = G__38304;
chunk__37671 = G__38305;
count__37672 = G__38306;
i__37673 = G__38307;
continue;
} else {
var el = cljs.core.first(seq__37670__$1);
var handler_38308__$1 = ((function (seq__37670,chunk__37671,count__37672,i__37673,el,seq__37670__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37670,chunk__37671,count__37672,i__37673,el,seq__37670__$1,temp__5720__auto__))
;
var G__37688_38309 = el;
var G__37689_38310 = cljs.core.name(ev);
var G__37690_38311 = handler_38308__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__37688_38309,G__37689_38310,G__37690_38311) : shadow.dom.dom_listen.call(null,G__37688_38309,G__37689_38310,G__37690_38311));


var G__38312 = cljs.core.next(seq__37670__$1);
var G__38313 = null;
var G__38314 = (0);
var G__38315 = (0);
seq__37670 = G__38312;
chunk__37671 = G__38313;
count__37672 = G__38314;
i__37673 = G__38315;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__37693 = arguments.length;
switch (G__37693) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__37699 = shadow.dom.dom_node(el);
var G__37700 = cljs.core.name(ev);
var G__37701 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__37699,G__37700,G__37701) : shadow.dom.dom_listen.call(null,G__37699,G__37700,G__37701));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__37706 = shadow.dom.dom_node(el);
var G__37707 = cljs.core.name(ev);
var G__37708 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__37706,G__37707,G__37708) : shadow.dom.dom_listen_remove.call(null,G__37706,G__37707,G__37708));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__37713 = cljs.core.seq(events);
var chunk__37714 = null;
var count__37715 = (0);
var i__37716 = (0);
while(true){
if((i__37716 < count__37715)){
var vec__37726 = chunk__37714.cljs$core$IIndexed$_nth$arity$2(null,i__37716);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37726,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37726,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38317 = seq__37713;
var G__38318 = chunk__37714;
var G__38319 = count__37715;
var G__38320 = (i__37716 + (1));
seq__37713 = G__38317;
chunk__37714 = G__38318;
count__37715 = G__38319;
i__37716 = G__38320;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37713);
if(temp__5720__auto__){
var seq__37713__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37713__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37713__$1);
var G__38321 = cljs.core.chunk_rest(seq__37713__$1);
var G__38322 = c__4550__auto__;
var G__38323 = cljs.core.count(c__4550__auto__);
var G__38324 = (0);
seq__37713 = G__38321;
chunk__37714 = G__38322;
count__37715 = G__38323;
i__37716 = G__38324;
continue;
} else {
var vec__37729 = cljs.core.first(seq__37713__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37729,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37729,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38325 = cljs.core.next(seq__37713__$1);
var G__38326 = null;
var G__38327 = (0);
var G__38328 = (0);
seq__37713 = G__38325;
chunk__37714 = G__38326;
count__37715 = G__38327;
i__37716 = G__38328;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__37732 = cljs.core.seq(styles);
var chunk__37733 = null;
var count__37734 = (0);
var i__37735 = (0);
while(true){
if((i__37735 < count__37734)){
var vec__37748 = chunk__37733.cljs$core$IIndexed$_nth$arity$2(null,i__37735);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37748,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37748,(1),null);
var G__37751_38329 = dom;
var G__37752_38330 = cljs.core.name(k);
var G__37753_38331 = (((v == null))?"":v);
goog.style.setStyle(G__37751_38329,G__37752_38330,G__37753_38331);


var G__38332 = seq__37732;
var G__38333 = chunk__37733;
var G__38334 = count__37734;
var G__38335 = (i__37735 + (1));
seq__37732 = G__38332;
chunk__37733 = G__38333;
count__37734 = G__38334;
i__37735 = G__38335;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37732);
if(temp__5720__auto__){
var seq__37732__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37732__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37732__$1);
var G__38336 = cljs.core.chunk_rest(seq__37732__$1);
var G__38337 = c__4550__auto__;
var G__38338 = cljs.core.count(c__4550__auto__);
var G__38339 = (0);
seq__37732 = G__38336;
chunk__37733 = G__38337;
count__37734 = G__38338;
i__37735 = G__38339;
continue;
} else {
var vec__37754 = cljs.core.first(seq__37732__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37754,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37754,(1),null);
var G__37757_38340 = dom;
var G__37758_38341 = cljs.core.name(k);
var G__37759_38342 = (((v == null))?"":v);
goog.style.setStyle(G__37757_38340,G__37758_38341,G__37759_38342);


var G__38343 = cljs.core.next(seq__37732__$1);
var G__38344 = null;
var G__38345 = (0);
var G__38346 = (0);
seq__37732 = G__38343;
chunk__37733 = G__38344;
count__37734 = G__38345;
i__37735 = G__38346;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__37762_38347 = key;
var G__37762_38348__$1 = (((G__37762_38347 instanceof cljs.core.Keyword))?G__37762_38347.fqn:null);
switch (G__37762_38348__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_38352 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_38352,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_38352,"aria-");
}
})())){
el.setAttribute(ks_38352,value);
} else {
(el[ks_38352] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__37774 = shadow.dom.dom_node(el);
var G__37775 = cls;
return goog.dom.classlist.contains(G__37774,G__37775);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__37783){
var map__37785 = p__37783;
var map__37785__$1 = (((((!((map__37785 == null))))?(((((map__37785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37785):map__37785);
var props = map__37785__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37785__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__37788 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37788,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37788,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37788,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__37793 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__37793,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__37793;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37796 = arguments.length;
switch (G__37796) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37805){
var vec__37807 = p__37805;
var seq__37808 = cljs.core.seq(vec__37807);
var first__37809 = cljs.core.first(seq__37808);
var seq__37808__$1 = cljs.core.next(seq__37808);
var nn = first__37809;
var first__37809__$1 = cljs.core.first(seq__37808__$1);
var seq__37808__$2 = cljs.core.next(seq__37808__$1);
var np = first__37809__$1;
var nc = seq__37808__$2;
var node = vec__37807;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37811 = nn;
var G__37812 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37811,G__37812) : create_fn.call(null,G__37811,G__37812));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37814 = nn;
var G__37815 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37814,G__37815) : create_fn.call(null,G__37814,G__37815));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37819 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37819,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37819,(1),null);
var seq__37822_38358 = cljs.core.seq(node_children);
var chunk__37823_38359 = null;
var count__37824_38360 = (0);
var i__37825_38361 = (0);
while(true){
if((i__37825_38361 < count__37824_38360)){
var child_struct_38362 = chunk__37823_38359.cljs$core$IIndexed$_nth$arity$2(null,i__37825_38361);
var children_38363 = shadow.dom.dom_node(child_struct_38362);
if(cljs.core.seq_QMARK_(children_38363)){
var seq__37857_38364 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38363));
var chunk__37859_38365 = null;
var count__37860_38366 = (0);
var i__37861_38367 = (0);
while(true){
if((i__37861_38367 < count__37860_38366)){
var child_38368 = chunk__37859_38365.cljs$core$IIndexed$_nth$arity$2(null,i__37861_38367);
if(cljs.core.truth_(child_38368)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38368);


var G__38369 = seq__37857_38364;
var G__38370 = chunk__37859_38365;
var G__38371 = count__37860_38366;
var G__38372 = (i__37861_38367 + (1));
seq__37857_38364 = G__38369;
chunk__37859_38365 = G__38370;
count__37860_38366 = G__38371;
i__37861_38367 = G__38372;
continue;
} else {
var G__38373 = seq__37857_38364;
var G__38374 = chunk__37859_38365;
var G__38375 = count__37860_38366;
var G__38376 = (i__37861_38367 + (1));
seq__37857_38364 = G__38373;
chunk__37859_38365 = G__38374;
count__37860_38366 = G__38375;
i__37861_38367 = G__38376;
continue;
}
} else {
var temp__5720__auto___38377 = cljs.core.seq(seq__37857_38364);
if(temp__5720__auto___38377){
var seq__37857_38378__$1 = temp__5720__auto___38377;
if(cljs.core.chunked_seq_QMARK_(seq__37857_38378__$1)){
var c__4550__auto___38380 = cljs.core.chunk_first(seq__37857_38378__$1);
var G__38381 = cljs.core.chunk_rest(seq__37857_38378__$1);
var G__38382 = c__4550__auto___38380;
var G__38383 = cljs.core.count(c__4550__auto___38380);
var G__38384 = (0);
seq__37857_38364 = G__38381;
chunk__37859_38365 = G__38382;
count__37860_38366 = G__38383;
i__37861_38367 = G__38384;
continue;
} else {
var child_38385 = cljs.core.first(seq__37857_38378__$1);
if(cljs.core.truth_(child_38385)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38385);


var G__38386 = cljs.core.next(seq__37857_38378__$1);
var G__38387 = null;
var G__38388 = (0);
var G__38389 = (0);
seq__37857_38364 = G__38386;
chunk__37859_38365 = G__38387;
count__37860_38366 = G__38388;
i__37861_38367 = G__38389;
continue;
} else {
var G__38390 = cljs.core.next(seq__37857_38378__$1);
var G__38391 = null;
var G__38392 = (0);
var G__38393 = (0);
seq__37857_38364 = G__38390;
chunk__37859_38365 = G__38391;
count__37860_38366 = G__38392;
i__37861_38367 = G__38393;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38363);
}


var G__38394 = seq__37822_38358;
var G__38395 = chunk__37823_38359;
var G__38396 = count__37824_38360;
var G__38397 = (i__37825_38361 + (1));
seq__37822_38358 = G__38394;
chunk__37823_38359 = G__38395;
count__37824_38360 = G__38396;
i__37825_38361 = G__38397;
continue;
} else {
var temp__5720__auto___38398 = cljs.core.seq(seq__37822_38358);
if(temp__5720__auto___38398){
var seq__37822_38399__$1 = temp__5720__auto___38398;
if(cljs.core.chunked_seq_QMARK_(seq__37822_38399__$1)){
var c__4550__auto___38400 = cljs.core.chunk_first(seq__37822_38399__$1);
var G__38401 = cljs.core.chunk_rest(seq__37822_38399__$1);
var G__38402 = c__4550__auto___38400;
var G__38403 = cljs.core.count(c__4550__auto___38400);
var G__38404 = (0);
seq__37822_38358 = G__38401;
chunk__37823_38359 = G__38402;
count__37824_38360 = G__38403;
i__37825_38361 = G__38404;
continue;
} else {
var child_struct_38406 = cljs.core.first(seq__37822_38399__$1);
var children_38407 = shadow.dom.dom_node(child_struct_38406);
if(cljs.core.seq_QMARK_(children_38407)){
var seq__37863_38409 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38407));
var chunk__37865_38410 = null;
var count__37866_38411 = (0);
var i__37867_38412 = (0);
while(true){
if((i__37867_38412 < count__37866_38411)){
var child_38413 = chunk__37865_38410.cljs$core$IIndexed$_nth$arity$2(null,i__37867_38412);
if(cljs.core.truth_(child_38413)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38413);


var G__38414 = seq__37863_38409;
var G__38415 = chunk__37865_38410;
var G__38416 = count__37866_38411;
var G__38417 = (i__37867_38412 + (1));
seq__37863_38409 = G__38414;
chunk__37865_38410 = G__38415;
count__37866_38411 = G__38416;
i__37867_38412 = G__38417;
continue;
} else {
var G__38418 = seq__37863_38409;
var G__38419 = chunk__37865_38410;
var G__38420 = count__37866_38411;
var G__38421 = (i__37867_38412 + (1));
seq__37863_38409 = G__38418;
chunk__37865_38410 = G__38419;
count__37866_38411 = G__38420;
i__37867_38412 = G__38421;
continue;
}
} else {
var temp__5720__auto___38422__$1 = cljs.core.seq(seq__37863_38409);
if(temp__5720__auto___38422__$1){
var seq__37863_38423__$1 = temp__5720__auto___38422__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37863_38423__$1)){
var c__4550__auto___38424 = cljs.core.chunk_first(seq__37863_38423__$1);
var G__38425 = cljs.core.chunk_rest(seq__37863_38423__$1);
var G__38426 = c__4550__auto___38424;
var G__38427 = cljs.core.count(c__4550__auto___38424);
var G__38428 = (0);
seq__37863_38409 = G__38425;
chunk__37865_38410 = G__38426;
count__37866_38411 = G__38427;
i__37867_38412 = G__38428;
continue;
} else {
var child_38429 = cljs.core.first(seq__37863_38423__$1);
if(cljs.core.truth_(child_38429)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38429);


var G__38431 = cljs.core.next(seq__37863_38423__$1);
var G__38432 = null;
var G__38433 = (0);
var G__38434 = (0);
seq__37863_38409 = G__38431;
chunk__37865_38410 = G__38432;
count__37866_38411 = G__38433;
i__37867_38412 = G__38434;
continue;
} else {
var G__38435 = cljs.core.next(seq__37863_38423__$1);
var G__38436 = null;
var G__38437 = (0);
var G__38438 = (0);
seq__37863_38409 = G__38435;
chunk__37865_38410 = G__38436;
count__37866_38411 = G__38437;
i__37867_38412 = G__38438;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38407);
}


var G__38439 = cljs.core.next(seq__37822_38399__$1);
var G__38440 = null;
var G__38441 = (0);
var G__38442 = (0);
seq__37822_38358 = G__38439;
chunk__37823_38359 = G__38440;
count__37824_38360 = G__38441;
i__37825_38361 = G__38442;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__37875 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__37875);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__37877 = cljs.core.seq(node);
var chunk__37878 = null;
var count__37879 = (0);
var i__37880 = (0);
while(true){
if((i__37880 < count__37879)){
var n = chunk__37878.cljs$core$IIndexed$_nth$arity$2(null,i__37880);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38449 = seq__37877;
var G__38450 = chunk__37878;
var G__38451 = count__37879;
var G__38452 = (i__37880 + (1));
seq__37877 = G__38449;
chunk__37878 = G__38450;
count__37879 = G__38451;
i__37880 = G__38452;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37877);
if(temp__5720__auto__){
var seq__37877__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37877__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37877__$1);
var G__38453 = cljs.core.chunk_rest(seq__37877__$1);
var G__38454 = c__4550__auto__;
var G__38455 = cljs.core.count(c__4550__auto__);
var G__38456 = (0);
seq__37877 = G__38453;
chunk__37878 = G__38454;
count__37879 = G__38455;
i__37880 = G__38456;
continue;
} else {
var n = cljs.core.first(seq__37877__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38457 = cljs.core.next(seq__37877__$1);
var G__38458 = null;
var G__38459 = (0);
var G__38460 = (0);
seq__37877 = G__38457;
chunk__37878 = G__38458;
count__37879 = G__38459;
i__37880 = G__38460;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__37881 = shadow.dom.dom_node(new$);
var G__37882 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__37881,G__37882);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__37884 = arguments.length;
switch (G__37884) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__37886 = arguments.length;
switch (G__37886) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__37894 = arguments.length;
switch (G__37894) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38471 = arguments.length;
var i__4731__auto___38472 = (0);
while(true){
if((i__4731__auto___38472 < len__4730__auto___38471)){
args__4736__auto__.push((arguments[i__4731__auto___38472]));

var G__38473 = (i__4731__auto___38472 + (1));
i__4731__auto___38472 = G__38473;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__37909_38474 = cljs.core.seq(nodes);
var chunk__37910_38475 = null;
var count__37911_38476 = (0);
var i__37912_38477 = (0);
while(true){
if((i__37912_38477 < count__37911_38476)){
var node_38478 = chunk__37910_38475.cljs$core$IIndexed$_nth$arity$2(null,i__37912_38477);
fragment.appendChild(shadow.dom._to_dom(node_38478));


var G__38479 = seq__37909_38474;
var G__38480 = chunk__37910_38475;
var G__38481 = count__37911_38476;
var G__38482 = (i__37912_38477 + (1));
seq__37909_38474 = G__38479;
chunk__37910_38475 = G__38480;
count__37911_38476 = G__38481;
i__37912_38477 = G__38482;
continue;
} else {
var temp__5720__auto___38487 = cljs.core.seq(seq__37909_38474);
if(temp__5720__auto___38487){
var seq__37909_38488__$1 = temp__5720__auto___38487;
if(cljs.core.chunked_seq_QMARK_(seq__37909_38488__$1)){
var c__4550__auto___38489 = cljs.core.chunk_first(seq__37909_38488__$1);
var G__38490 = cljs.core.chunk_rest(seq__37909_38488__$1);
var G__38491 = c__4550__auto___38489;
var G__38492 = cljs.core.count(c__4550__auto___38489);
var G__38493 = (0);
seq__37909_38474 = G__38490;
chunk__37910_38475 = G__38491;
count__37911_38476 = G__38492;
i__37912_38477 = G__38493;
continue;
} else {
var node_38494 = cljs.core.first(seq__37909_38488__$1);
fragment.appendChild(shadow.dom._to_dom(node_38494));


var G__38495 = cljs.core.next(seq__37909_38488__$1);
var G__38496 = null;
var G__38497 = (0);
var G__38498 = (0);
seq__37909_38474 = G__38495;
chunk__37910_38475 = G__38496;
count__37911_38476 = G__38497;
i__37912_38477 = G__38498;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq37906){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37906));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37921_38499 = cljs.core.seq(scripts);
var chunk__37922_38500 = null;
var count__37923_38501 = (0);
var i__37924_38502 = (0);
while(true){
if((i__37924_38502 < count__37923_38501)){
var vec__37935_38503 = chunk__37922_38500.cljs$core$IIndexed$_nth$arity$2(null,i__37924_38502);
var script_tag_38504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37935_38503,(0),null);
var script_body_38505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37935_38503,(1),null);
eval(script_body_38505);


var G__38506 = seq__37921_38499;
var G__38507 = chunk__37922_38500;
var G__38508 = count__37923_38501;
var G__38509 = (i__37924_38502 + (1));
seq__37921_38499 = G__38506;
chunk__37922_38500 = G__38507;
count__37923_38501 = G__38508;
i__37924_38502 = G__38509;
continue;
} else {
var temp__5720__auto___38513 = cljs.core.seq(seq__37921_38499);
if(temp__5720__auto___38513){
var seq__37921_38514__$1 = temp__5720__auto___38513;
if(cljs.core.chunked_seq_QMARK_(seq__37921_38514__$1)){
var c__4550__auto___38515 = cljs.core.chunk_first(seq__37921_38514__$1);
var G__38516 = cljs.core.chunk_rest(seq__37921_38514__$1);
var G__38517 = c__4550__auto___38515;
var G__38518 = cljs.core.count(c__4550__auto___38515);
var G__38519 = (0);
seq__37921_38499 = G__38516;
chunk__37922_38500 = G__38517;
count__37923_38501 = G__38518;
i__37924_38502 = G__38519;
continue;
} else {
var vec__37943_38520 = cljs.core.first(seq__37921_38514__$1);
var script_tag_38521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37943_38520,(0),null);
var script_body_38522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37943_38520,(1),null);
eval(script_body_38522);


var G__38523 = cljs.core.next(seq__37921_38514__$1);
var G__38524 = null;
var G__38525 = (0);
var G__38526 = (0);
seq__37921_38499 = G__38523;
chunk__37922_38500 = G__38524;
count__37923_38501 = G__38525;
i__37924_38502 = G__38526;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__37949){
var vec__37950 = p__37949;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37950,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37950,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__37960 = shadow.dom.dom_node(el);
var G__37961 = cls;
return goog.dom.getAncestorByClass(G__37960,G__37961);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37964 = arguments.length;
switch (G__37964) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__37967 = shadow.dom.dom_node(el);
var G__37968 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__37967,G__37968);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__37969 = shadow.dom.dom_node(el);
var G__37970 = cljs.core.name(tag);
var G__37971 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__37969,G__37970,G__37971);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__37972 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__37972);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__37973 = shadow.dom.dom_node(dom);
var G__37974 = value;
return goog.dom.forms.setValue(G__37973,G__37974);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__37976 = cljs.core.seq(style_keys);
var chunk__37977 = null;
var count__37978 = (0);
var i__37979 = (0);
while(true){
if((i__37979 < count__37978)){
var it = chunk__37977.cljs$core$IIndexed$_nth$arity$2(null,i__37979);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38534 = seq__37976;
var G__38535 = chunk__37977;
var G__38536 = count__37978;
var G__38537 = (i__37979 + (1));
seq__37976 = G__38534;
chunk__37977 = G__38535;
count__37978 = G__38536;
i__37979 = G__38537;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37976);
if(temp__5720__auto__){
var seq__37976__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37976__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37976__$1);
var G__38538 = cljs.core.chunk_rest(seq__37976__$1);
var G__38539 = c__4550__auto__;
var G__38540 = cljs.core.count(c__4550__auto__);
var G__38541 = (0);
seq__37976 = G__38538;
chunk__37977 = G__38539;
count__37978 = G__38540;
i__37979 = G__38541;
continue;
} else {
var it = cljs.core.first(seq__37976__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38542 = cljs.core.next(seq__37976__$1);
var G__38543 = null;
var G__38544 = (0);
var G__38545 = (0);
seq__37976 = G__38542;
chunk__37977 = G__38543;
count__37978 = G__38544;
i__37979 = G__38545;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k37982,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__37986 = k37982;
var G__37986__$1 = (((G__37986 instanceof cljs.core.Keyword))?G__37986.fqn:null);
switch (G__37986__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37982,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__37987){
var vec__37988 = p__37987;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37988,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37988,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37981){
var self__ = this;
var G__37981__$1 = this;
return (new cljs.core.RecordIter((0),G__37981__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__38000 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__38000(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37983,other37984){
var self__ = this;
var this37983__$1 = this;
return (((!((other37984 == null)))) && ((this37983__$1.constructor === other37984.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37983__$1.x,other37984.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37983__$1.y,other37984.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37983__$1.__extmap,other37984.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__37981){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__38009 = cljs.core.keyword_identical_QMARK_;
var expr__38010 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__38012 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__38013 = expr__38010;
return (pred__38009.cljs$core$IFn$_invoke$arity$2 ? pred__38009.cljs$core$IFn$_invoke$arity$2(G__38012,G__38013) : pred__38009.call(null,G__38012,G__38013));
})())){
return (new shadow.dom.Coordinate(G__37981,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38015 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__38016 = expr__38010;
return (pred__38009.cljs$core$IFn$_invoke$arity$2 ? pred__38009.cljs$core$IFn$_invoke$arity$2(G__38015,G__38016) : pred__38009.call(null,G__38015,G__38016));
})())){
return (new shadow.dom.Coordinate(self__.x,G__37981,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__37981),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__37981){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37981,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37985){
var extmap__4424__auto__ = (function (){var G__38024 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37985,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37985)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38024);
} else {
return G__38024;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37985),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37985),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__38025 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__38025);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__38028 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__38028);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__38031 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__38031);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k38034,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__38040 = k38034;
var G__38040__$1 = (((G__38040 instanceof cljs.core.Keyword))?G__38040.fqn:null);
switch (G__38040__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38034,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__38042){
var vec__38044 = p__38042;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38044,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38044,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38033){
var self__ = this;
var G__38033__$1 = this;
return (new cljs.core.RecordIter((0),G__38033__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__38053 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__38053(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38035,other38036){
var self__ = this;
var this38035__$1 = this;
return (((!((other38036 == null)))) && ((this38035__$1.constructor === other38036.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38035__$1.w,other38036.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38035__$1.h,other38036.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38035__$1.__extmap,other38036.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__38033){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__38060 = cljs.core.keyword_identical_QMARK_;
var expr__38061 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__38063 = new cljs.core.Keyword(null,"w","w",354169001);
var G__38064 = expr__38061;
return (pred__38060.cljs$core$IFn$_invoke$arity$2 ? pred__38060.cljs$core$IFn$_invoke$arity$2(G__38063,G__38064) : pred__38060.call(null,G__38063,G__38064));
})())){
return (new shadow.dom.Size(G__38033,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38065 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__38066 = expr__38061;
return (pred__38060.cljs$core$IFn$_invoke$arity$2 ? pred__38060.cljs$core$IFn$_invoke$arity$2(G__38065,G__38066) : pred__38060.call(null,G__38065,G__38066));
})())){
return (new shadow.dom.Size(self__.w,G__38033,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__38033),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__38033){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__38033,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__38038){
var extmap__4424__auto__ = (function (){var G__38073 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38038,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__38038)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38073);
} else {
return G__38073;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__38038),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__38038),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__38079 = shadow.dom.dom_node(el);
return goog.style.getSize(G__38079);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__38575 = (i + (1));
var G__38576 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__38575;
ret = G__38576;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38095){
var vec__38096 = p__38095;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38096,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38096,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__38104 = arguments.length;
switch (G__38104) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__38113_38580 = new_node;
var G__38114_38581 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__38113_38580,G__38114_38581);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__38115_38583 = new_node;
var G__38116_38584 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__38115_38583,G__38116_38584);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__38585 = ps;
var G__38586 = (i + (1));
el__$1 = G__38585;
i = G__38586;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__38117 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__38117);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__38118 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__38118);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__38119 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__38119);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__38120 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38120,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38120,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38120,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__38124_38592 = cljs.core.seq(props);
var chunk__38125_38593 = null;
var count__38126_38594 = (0);
var i__38127_38595 = (0);
while(true){
if((i__38127_38595 < count__38126_38594)){
var vec__38144_38597 = chunk__38125_38593.cljs$core$IIndexed$_nth$arity$2(null,i__38127_38595);
var k_38598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38144_38597,(0),null);
var v_38599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38144_38597,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_38598);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38598),v_38599);


var G__38600 = seq__38124_38592;
var G__38601 = chunk__38125_38593;
var G__38602 = count__38126_38594;
var G__38603 = (i__38127_38595 + (1));
seq__38124_38592 = G__38600;
chunk__38125_38593 = G__38601;
count__38126_38594 = G__38602;
i__38127_38595 = G__38603;
continue;
} else {
var temp__5720__auto___38604 = cljs.core.seq(seq__38124_38592);
if(temp__5720__auto___38604){
var seq__38124_38606__$1 = temp__5720__auto___38604;
if(cljs.core.chunked_seq_QMARK_(seq__38124_38606__$1)){
var c__4550__auto___38610 = cljs.core.chunk_first(seq__38124_38606__$1);
var G__38611 = cljs.core.chunk_rest(seq__38124_38606__$1);
var G__38612 = c__4550__auto___38610;
var G__38613 = cljs.core.count(c__4550__auto___38610);
var G__38614 = (0);
seq__38124_38592 = G__38611;
chunk__38125_38593 = G__38612;
count__38126_38594 = G__38613;
i__38127_38595 = G__38614;
continue;
} else {
var vec__38149_38615 = cljs.core.first(seq__38124_38606__$1);
var k_38616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38149_38615,(0),null);
var v_38617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38149_38615,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_38616);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38616),v_38617);


var G__38618 = cljs.core.next(seq__38124_38606__$1);
var G__38619 = null;
var G__38620 = (0);
var G__38621 = (0);
seq__38124_38592 = G__38618;
chunk__38125_38593 = G__38619;
count__38126_38594 = G__38620;
i__38127_38595 = G__38621;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__38158 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38158,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38158,(1),null);
var seq__38161_38622 = cljs.core.seq(node_children);
var chunk__38164_38623 = null;
var count__38165_38624 = (0);
var i__38166_38625 = (0);
while(true){
if((i__38166_38625 < count__38165_38624)){
var child_struct_38626 = chunk__38164_38623.cljs$core$IIndexed$_nth$arity$2(null,i__38166_38625);
if((!((child_struct_38626 == null)))){
if(typeof child_struct_38626 === 'string'){
var text_38627 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38627),child_struct_38626].join(''));
} else {
var children_38628 = shadow.dom.svg_node(child_struct_38626);
if(cljs.core.seq_QMARK_(children_38628)){
var seq__38203_38629 = cljs.core.seq(children_38628);
var chunk__38205_38630 = null;
var count__38206_38631 = (0);
var i__38207_38632 = (0);
while(true){
if((i__38207_38632 < count__38206_38631)){
var child_38633 = chunk__38205_38630.cljs$core$IIndexed$_nth$arity$2(null,i__38207_38632);
if(cljs.core.truth_(child_38633)){
node.appendChild(child_38633);


var G__38634 = seq__38203_38629;
var G__38635 = chunk__38205_38630;
var G__38636 = count__38206_38631;
var G__38637 = (i__38207_38632 + (1));
seq__38203_38629 = G__38634;
chunk__38205_38630 = G__38635;
count__38206_38631 = G__38636;
i__38207_38632 = G__38637;
continue;
} else {
var G__38638 = seq__38203_38629;
var G__38639 = chunk__38205_38630;
var G__38640 = count__38206_38631;
var G__38641 = (i__38207_38632 + (1));
seq__38203_38629 = G__38638;
chunk__38205_38630 = G__38639;
count__38206_38631 = G__38640;
i__38207_38632 = G__38641;
continue;
}
} else {
var temp__5720__auto___38642 = cljs.core.seq(seq__38203_38629);
if(temp__5720__auto___38642){
var seq__38203_38643__$1 = temp__5720__auto___38642;
if(cljs.core.chunked_seq_QMARK_(seq__38203_38643__$1)){
var c__4550__auto___38644 = cljs.core.chunk_first(seq__38203_38643__$1);
var G__38645 = cljs.core.chunk_rest(seq__38203_38643__$1);
var G__38646 = c__4550__auto___38644;
var G__38647 = cljs.core.count(c__4550__auto___38644);
var G__38648 = (0);
seq__38203_38629 = G__38645;
chunk__38205_38630 = G__38646;
count__38206_38631 = G__38647;
i__38207_38632 = G__38648;
continue;
} else {
var child_38650 = cljs.core.first(seq__38203_38643__$1);
if(cljs.core.truth_(child_38650)){
node.appendChild(child_38650);


var G__38651 = cljs.core.next(seq__38203_38643__$1);
var G__38652 = null;
var G__38653 = (0);
var G__38654 = (0);
seq__38203_38629 = G__38651;
chunk__38205_38630 = G__38652;
count__38206_38631 = G__38653;
i__38207_38632 = G__38654;
continue;
} else {
var G__38655 = cljs.core.next(seq__38203_38643__$1);
var G__38656 = null;
var G__38657 = (0);
var G__38658 = (0);
seq__38203_38629 = G__38655;
chunk__38205_38630 = G__38656;
count__38206_38631 = G__38657;
i__38207_38632 = G__38658;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38628);
}
}


var G__38659 = seq__38161_38622;
var G__38660 = chunk__38164_38623;
var G__38661 = count__38165_38624;
var G__38662 = (i__38166_38625 + (1));
seq__38161_38622 = G__38659;
chunk__38164_38623 = G__38660;
count__38165_38624 = G__38661;
i__38166_38625 = G__38662;
continue;
} else {
var G__38663 = seq__38161_38622;
var G__38664 = chunk__38164_38623;
var G__38665 = count__38165_38624;
var G__38666 = (i__38166_38625 + (1));
seq__38161_38622 = G__38663;
chunk__38164_38623 = G__38664;
count__38165_38624 = G__38665;
i__38166_38625 = G__38666;
continue;
}
} else {
var temp__5720__auto___38667 = cljs.core.seq(seq__38161_38622);
if(temp__5720__auto___38667){
var seq__38161_38668__$1 = temp__5720__auto___38667;
if(cljs.core.chunked_seq_QMARK_(seq__38161_38668__$1)){
var c__4550__auto___38669 = cljs.core.chunk_first(seq__38161_38668__$1);
var G__38670 = cljs.core.chunk_rest(seq__38161_38668__$1);
var G__38671 = c__4550__auto___38669;
var G__38672 = cljs.core.count(c__4550__auto___38669);
var G__38673 = (0);
seq__38161_38622 = G__38670;
chunk__38164_38623 = G__38671;
count__38165_38624 = G__38672;
i__38166_38625 = G__38673;
continue;
} else {
var child_struct_38674 = cljs.core.first(seq__38161_38668__$1);
if((!((child_struct_38674 == null)))){
if(typeof child_struct_38674 === 'string'){
var text_38675 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38675),child_struct_38674].join(''));
} else {
var children_38676 = shadow.dom.svg_node(child_struct_38674);
if(cljs.core.seq_QMARK_(children_38676)){
var seq__38217_38677 = cljs.core.seq(children_38676);
var chunk__38219_38678 = null;
var count__38220_38679 = (0);
var i__38221_38680 = (0);
while(true){
if((i__38221_38680 < count__38220_38679)){
var child_38686 = chunk__38219_38678.cljs$core$IIndexed$_nth$arity$2(null,i__38221_38680);
if(cljs.core.truth_(child_38686)){
node.appendChild(child_38686);


var G__38689 = seq__38217_38677;
var G__38690 = chunk__38219_38678;
var G__38691 = count__38220_38679;
var G__38692 = (i__38221_38680 + (1));
seq__38217_38677 = G__38689;
chunk__38219_38678 = G__38690;
count__38220_38679 = G__38691;
i__38221_38680 = G__38692;
continue;
} else {
var G__38693 = seq__38217_38677;
var G__38694 = chunk__38219_38678;
var G__38695 = count__38220_38679;
var G__38696 = (i__38221_38680 + (1));
seq__38217_38677 = G__38693;
chunk__38219_38678 = G__38694;
count__38220_38679 = G__38695;
i__38221_38680 = G__38696;
continue;
}
} else {
var temp__5720__auto___38697__$1 = cljs.core.seq(seq__38217_38677);
if(temp__5720__auto___38697__$1){
var seq__38217_38698__$1 = temp__5720__auto___38697__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38217_38698__$1)){
var c__4550__auto___38699 = cljs.core.chunk_first(seq__38217_38698__$1);
var G__38700 = cljs.core.chunk_rest(seq__38217_38698__$1);
var G__38701 = c__4550__auto___38699;
var G__38702 = cljs.core.count(c__4550__auto___38699);
var G__38703 = (0);
seq__38217_38677 = G__38700;
chunk__38219_38678 = G__38701;
count__38220_38679 = G__38702;
i__38221_38680 = G__38703;
continue;
} else {
var child_38704 = cljs.core.first(seq__38217_38698__$1);
if(cljs.core.truth_(child_38704)){
node.appendChild(child_38704);


var G__38705 = cljs.core.next(seq__38217_38698__$1);
var G__38706 = null;
var G__38707 = (0);
var G__38708 = (0);
seq__38217_38677 = G__38705;
chunk__38219_38678 = G__38706;
count__38220_38679 = G__38707;
i__38221_38680 = G__38708;
continue;
} else {
var G__38709 = cljs.core.next(seq__38217_38698__$1);
var G__38710 = null;
var G__38711 = (0);
var G__38712 = (0);
seq__38217_38677 = G__38709;
chunk__38219_38678 = G__38710;
count__38220_38679 = G__38711;
i__38221_38680 = G__38712;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38676);
}
}


var G__38713 = cljs.core.next(seq__38161_38668__$1);
var G__38714 = null;
var G__38715 = (0);
var G__38716 = (0);
seq__38161_38622 = G__38713;
chunk__38164_38623 = G__38714;
count__38165_38624 = G__38715;
i__38166_38625 = G__38716;
continue;
} else {
var G__38717 = cljs.core.next(seq__38161_38668__$1);
var G__38718 = null;
var G__38719 = (0);
var G__38720 = (0);
seq__38161_38622 = G__38717;
chunk__38164_38623 = G__38718;
count__38165_38624 = G__38719;
i__38166_38625 = G__38720;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__38231_38721 = shadow.dom._to_svg;
var G__38232_38722 = "string";
var G__38233_38723 = ((function (G__38231_38721,G__38232_38722){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__38231_38721,G__38232_38722))
;
goog.object.set(G__38231_38721,G__38232_38722,G__38233_38723);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__38240_38725 = shadow.dom._to_svg;
var G__38241_38726 = "null";
var G__38242_38727 = ((function (G__38240_38725,G__38241_38726){
return (function (_){
return null;
});})(G__38240_38725,G__38241_38726))
;
goog.object.set(G__38240_38725,G__38241_38726,G__38242_38727);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38729 = arguments.length;
var i__4731__auto___38730 = (0);
while(true){
if((i__4731__auto___38730 < len__4730__auto___38729)){
args__4736__auto__.push((arguments[i__4731__auto___38730]));

var G__38731 = (i__4731__auto___38730 + (1));
i__4731__auto___38730 = G__38731;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq38246){
var G__38247 = cljs.core.first(seq38246);
var seq38246__$1 = cljs.core.next(seq38246);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38247,seq38246__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__38255 = arguments.length;
switch (G__38255) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__38262_38733 = shadow.dom.dom_node(el);
var G__38263_38734 = cljs.core.name(event);
var G__38264_38735 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__38262_38733,G__38263_38734,G__38264_38735) : shadow.dom.dom_listen.call(null,G__38262_38733,G__38263_38734,G__38264_38735));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__34720__auto___38736 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34720__auto___38736,buf,chan,event_fn){
return (function (){
var f__34721__auto__ = (function (){var switch__34453__auto__ = ((function (c__34720__auto___38736,buf,chan,event_fn){
return (function (state_38272){
var state_val_38274 = (state_38272[(1)]);
if((state_val_38274 === (1))){
var state_38272__$1 = state_38272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38272__$1,(2),once_or_cleanup);
} else {
if((state_val_38274 === (2))){
var inst_38269 = (state_38272[(2)]);
var inst_38270 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_38272__$1 = (function (){var statearr_38277 = state_38272;
(statearr_38277[(7)] = inst_38269);

return statearr_38277;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38272__$1,inst_38270);
} else {
return null;
}
}
});})(c__34720__auto___38736,buf,chan,event_fn))
;
return ((function (switch__34453__auto__,c__34720__auto___38736,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__34454__auto__ = null;
var shadow$dom$state_machine__34454__auto____0 = (function (){
var statearr_38279 = [null,null,null,null,null,null,null,null];
(statearr_38279[(0)] = shadow$dom$state_machine__34454__auto__);

(statearr_38279[(1)] = (1));

return statearr_38279;
});
var shadow$dom$state_machine__34454__auto____1 = (function (state_38272){
while(true){
var ret_value__34455__auto__ = (function (){try{while(true){
var result__34456__auto__ = switch__34453__auto__(state_38272);
if(cljs.core.keyword_identical_QMARK_(result__34456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34456__auto__;
}
break;
}
}catch (e38280){if((e38280 instanceof Object)){
var ex__34457__auto__ = e38280;
var statearr_38281_38737 = state_38272;
(statearr_38281_38737[(5)] = ex__34457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38280;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38738 = state_38272;
state_38272 = G__38738;
continue;
} else {
return ret_value__34455__auto__;
}
break;
}
});
shadow$dom$state_machine__34454__auto__ = function(state_38272){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__34454__auto____0.call(this);
case 1:
return shadow$dom$state_machine__34454__auto____1.call(this,state_38272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__34454__auto____0;
shadow$dom$state_machine__34454__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__34454__auto____1;
return shadow$dom$state_machine__34454__auto__;
})()
;})(switch__34453__auto__,c__34720__auto___38736,buf,chan,event_fn))
})();
var state__34722__auto__ = (function (){var statearr_38285 = (f__34721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34721__auto__.cljs$core$IFn$_invoke$arity$0() : f__34721__auto__.call(null));
(statearr_38285[(6)] = c__34720__auto___38736);

return statearr_38285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34722__auto__);
});})(c__34720__auto___38736,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
