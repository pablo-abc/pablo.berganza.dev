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
return cljs.core.cons((coll[idx]),(function (){var G__29988 = coll;
var G__29989 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__29988,G__29989) : shadow.dom.lazy_native_coll_seq.call(null,G__29988,G__29989));
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
var G__30023 = arguments.length;
switch (G__30023) {
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
var G__30031 = arguments.length;
switch (G__30031) {
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
var G__30037 = arguments.length;
switch (G__30037) {
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
var G__30043 = arguments.length;
switch (G__30043) {
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
var G__30047 = arguments.length;
switch (G__30047) {
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
var G__30050 = document;
var G__30051 = shadow.dom.dom_node(el);
return goog.dom.contains(G__30050,G__30051);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__30053 = shadow.dom.dom_node(parent);
var G__30054 = shadow.dom.dom_node(el);
return goog.dom.contains(G__30053,G__30054);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__30057 = shadow.dom.dom_node(el);
var G__30058 = cls;
return goog.dom.classlist.add(G__30057,G__30058);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__30061 = shadow.dom.dom_node(el);
var G__30062 = cls;
return goog.dom.classlist.remove(G__30061,G__30062);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__30066 = arguments.length;
switch (G__30066) {
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
var G__30068 = shadow.dom.dom_node(el);
var G__30069 = cls;
return goog.dom.classlist.toggle(G__30068,G__30069);
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
}catch (e30074){if((e30074 instanceof Object)){
var e = e30074;
return console.log("didnt support attachEvent",el,e);
} else {
throw e30074;

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
var seq__30081 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__30082 = null;
var count__30083 = (0);
var i__30084 = (0);
while(true){
if((i__30084 < count__30083)){
var el = chunk__30082.cljs$core$IIndexed$_nth$arity$2(null,i__30084);
var handler_30738__$1 = ((function (seq__30081,chunk__30082,count__30083,i__30084,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__30081,chunk__30082,count__30083,i__30084,el))
;
var G__30095_30739 = el;
var G__30096_30740 = cljs.core.name(ev);
var G__30097_30741 = handler_30738__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__30095_30739,G__30096_30740,G__30097_30741) : shadow.dom.dom_listen.call(null,G__30095_30739,G__30096_30740,G__30097_30741));


var G__30742 = seq__30081;
var G__30743 = chunk__30082;
var G__30744 = count__30083;
var G__30745 = (i__30084 + (1));
seq__30081 = G__30742;
chunk__30082 = G__30743;
count__30083 = G__30744;
i__30084 = G__30745;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__30081);
if(temp__5720__auto__){
var seq__30081__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30081__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__30081__$1);
var G__30746 = cljs.core.chunk_rest(seq__30081__$1);
var G__30747 = c__4550__auto__;
var G__30748 = cljs.core.count(c__4550__auto__);
var G__30749 = (0);
seq__30081 = G__30746;
chunk__30082 = G__30747;
count__30083 = G__30748;
i__30084 = G__30749;
continue;
} else {
var el = cljs.core.first(seq__30081__$1);
var handler_30750__$1 = ((function (seq__30081,chunk__30082,count__30083,i__30084,el,seq__30081__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__30081,chunk__30082,count__30083,i__30084,el,seq__30081__$1,temp__5720__auto__))
;
var G__30100_30751 = el;
var G__30101_30752 = cljs.core.name(ev);
var G__30102_30753 = handler_30750__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__30100_30751,G__30101_30752,G__30102_30753) : shadow.dom.dom_listen.call(null,G__30100_30751,G__30101_30752,G__30102_30753));


var G__30754 = cljs.core.next(seq__30081__$1);
var G__30755 = null;
var G__30756 = (0);
var G__30757 = (0);
seq__30081 = G__30754;
chunk__30082 = G__30755;
count__30083 = G__30756;
i__30084 = G__30757;
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
var G__30108 = arguments.length;
switch (G__30108) {
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
var G__30114 = shadow.dom.dom_node(el);
var G__30115 = cljs.core.name(ev);
var G__30116 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__30114,G__30115,G__30116) : shadow.dom.dom_listen.call(null,G__30114,G__30115,G__30116));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__30120 = shadow.dom.dom_node(el);
var G__30121 = cljs.core.name(ev);
var G__30122 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__30120,G__30121,G__30122) : shadow.dom.dom_listen_remove.call(null,G__30120,G__30121,G__30122));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__30125 = cljs.core.seq(events);
var chunk__30126 = null;
var count__30127 = (0);
var i__30128 = (0);
while(true){
if((i__30128 < count__30127)){
var vec__30138 = chunk__30126.cljs$core$IIndexed$_nth$arity$2(null,i__30128);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30138,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30138,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30761 = seq__30125;
var G__30762 = chunk__30126;
var G__30763 = count__30127;
var G__30764 = (i__30128 + (1));
seq__30125 = G__30761;
chunk__30126 = G__30762;
count__30127 = G__30763;
i__30128 = G__30764;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__30125);
if(temp__5720__auto__){
var seq__30125__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30125__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__30125__$1);
var G__30765 = cljs.core.chunk_rest(seq__30125__$1);
var G__30766 = c__4550__auto__;
var G__30767 = cljs.core.count(c__4550__auto__);
var G__30768 = (0);
seq__30125 = G__30765;
chunk__30126 = G__30766;
count__30127 = G__30767;
i__30128 = G__30768;
continue;
} else {
var vec__30142 = cljs.core.first(seq__30125__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30142,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30142,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30769 = cljs.core.next(seq__30125__$1);
var G__30770 = null;
var G__30771 = (0);
var G__30772 = (0);
seq__30125 = G__30769;
chunk__30126 = G__30770;
count__30127 = G__30771;
i__30128 = G__30772;
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
var seq__30147 = cljs.core.seq(styles);
var chunk__30148 = null;
var count__30149 = (0);
var i__30150 = (0);
while(true){
if((i__30150 < count__30149)){
var vec__30167 = chunk__30148.cljs$core$IIndexed$_nth$arity$2(null,i__30150);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30167,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30167,(1),null);
var G__30171_30773 = dom;
var G__30172_30774 = cljs.core.name(k);
var G__30173_30775 = (((v == null))?"":v);
goog.style.setStyle(G__30171_30773,G__30172_30774,G__30173_30775);


var G__30776 = seq__30147;
var G__30777 = chunk__30148;
var G__30778 = count__30149;
var G__30779 = (i__30150 + (1));
seq__30147 = G__30776;
chunk__30148 = G__30777;
count__30149 = G__30778;
i__30150 = G__30779;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__30147);
if(temp__5720__auto__){
var seq__30147__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30147__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__30147__$1);
var G__30780 = cljs.core.chunk_rest(seq__30147__$1);
var G__30781 = c__4550__auto__;
var G__30782 = cljs.core.count(c__4550__auto__);
var G__30783 = (0);
seq__30147 = G__30780;
chunk__30148 = G__30781;
count__30149 = G__30782;
i__30150 = G__30783;
continue;
} else {
var vec__30175 = cljs.core.first(seq__30147__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30175,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30175,(1),null);
var G__30178_30784 = dom;
var G__30179_30785 = cljs.core.name(k);
var G__30180_30786 = (((v == null))?"":v);
goog.style.setStyle(G__30178_30784,G__30179_30785,G__30180_30786);


var G__30787 = cljs.core.next(seq__30147__$1);
var G__30788 = null;
var G__30789 = (0);
var G__30790 = (0);
seq__30147 = G__30787;
chunk__30148 = G__30788;
count__30149 = G__30789;
i__30150 = G__30790;
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
var G__30183_30791 = key;
var G__30183_30792__$1 = (((G__30183_30791 instanceof cljs.core.Keyword))?G__30183_30791.fqn:null);
switch (G__30183_30792__$1) {
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
var ks_30795 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_30795,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_30795,"aria-");
}
})())){
el.setAttribute(ks_30795,value);
} else {
(el[ks_30795] = value);
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
var G__30187 = shadow.dom.dom_node(el);
var G__30188 = cls;
return goog.dom.classlist.contains(G__30187,G__30188);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__30200){
var map__30202 = p__30200;
var map__30202__$1 = (((((!((map__30202 == null))))?(((((map__30202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30202):map__30202);
var props = map__30202__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30202__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__30206 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30206,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30206,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30206,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__30209 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__30209,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__30209;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__30213 = arguments.length;
switch (G__30213) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__30214){
var vec__30215 = p__30214;
var seq__30216 = cljs.core.seq(vec__30215);
var first__30217 = cljs.core.first(seq__30216);
var seq__30216__$1 = cljs.core.next(seq__30216);
var nn = first__30217;
var first__30217__$1 = cljs.core.first(seq__30216__$1);
var seq__30216__$2 = cljs.core.next(seq__30216__$1);
var np = first__30217__$1;
var nc = seq__30216__$2;
var node = vec__30215;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30218 = nn;
var G__30219 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__30218,G__30219) : create_fn.call(null,G__30218,G__30219));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30220 = nn;
var G__30221 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__30220,G__30221) : create_fn.call(null,G__30220,G__30221));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__30222 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30222,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30222,(1),null);
var seq__30225_30803 = cljs.core.seq(node_children);
var chunk__30226_30804 = null;
var count__30227_30805 = (0);
var i__30228_30806 = (0);
while(true){
if((i__30228_30806 < count__30227_30805)){
var child_struct_30807 = chunk__30226_30804.cljs$core$IIndexed$_nth$arity$2(null,i__30228_30806);
var children_30808 = shadow.dom.dom_node(child_struct_30807);
if(cljs.core.seq_QMARK_(children_30808)){
var seq__30255_30810 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30808));
var chunk__30257_30811 = null;
var count__30258_30812 = (0);
var i__30259_30813 = (0);
while(true){
if((i__30259_30813 < count__30258_30812)){
var child_30814 = chunk__30257_30811.cljs$core$IIndexed$_nth$arity$2(null,i__30259_30813);
if(cljs.core.truth_(child_30814)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30814);


var G__30815 = seq__30255_30810;
var G__30816 = chunk__30257_30811;
var G__30817 = count__30258_30812;
var G__30818 = (i__30259_30813 + (1));
seq__30255_30810 = G__30815;
chunk__30257_30811 = G__30816;
count__30258_30812 = G__30817;
i__30259_30813 = G__30818;
continue;
} else {
var G__30819 = seq__30255_30810;
var G__30820 = chunk__30257_30811;
var G__30821 = count__30258_30812;
var G__30822 = (i__30259_30813 + (1));
seq__30255_30810 = G__30819;
chunk__30257_30811 = G__30820;
count__30258_30812 = G__30821;
i__30259_30813 = G__30822;
continue;
}
} else {
var temp__5720__auto___30823 = cljs.core.seq(seq__30255_30810);
if(temp__5720__auto___30823){
var seq__30255_30824__$1 = temp__5720__auto___30823;
if(cljs.core.chunked_seq_QMARK_(seq__30255_30824__$1)){
var c__4550__auto___30825 = cljs.core.chunk_first(seq__30255_30824__$1);
var G__30826 = cljs.core.chunk_rest(seq__30255_30824__$1);
var G__30827 = c__4550__auto___30825;
var G__30828 = cljs.core.count(c__4550__auto___30825);
var G__30829 = (0);
seq__30255_30810 = G__30826;
chunk__30257_30811 = G__30827;
count__30258_30812 = G__30828;
i__30259_30813 = G__30829;
continue;
} else {
var child_30830 = cljs.core.first(seq__30255_30824__$1);
if(cljs.core.truth_(child_30830)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30830);


var G__30832 = cljs.core.next(seq__30255_30824__$1);
var G__30833 = null;
var G__30834 = (0);
var G__30835 = (0);
seq__30255_30810 = G__30832;
chunk__30257_30811 = G__30833;
count__30258_30812 = G__30834;
i__30259_30813 = G__30835;
continue;
} else {
var G__30838 = cljs.core.next(seq__30255_30824__$1);
var G__30839 = null;
var G__30840 = (0);
var G__30841 = (0);
seq__30255_30810 = G__30838;
chunk__30257_30811 = G__30839;
count__30258_30812 = G__30840;
i__30259_30813 = G__30841;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30808);
}


var G__30842 = seq__30225_30803;
var G__30843 = chunk__30226_30804;
var G__30844 = count__30227_30805;
var G__30845 = (i__30228_30806 + (1));
seq__30225_30803 = G__30842;
chunk__30226_30804 = G__30843;
count__30227_30805 = G__30844;
i__30228_30806 = G__30845;
continue;
} else {
var temp__5720__auto___30846 = cljs.core.seq(seq__30225_30803);
if(temp__5720__auto___30846){
var seq__30225_30847__$1 = temp__5720__auto___30846;
if(cljs.core.chunked_seq_QMARK_(seq__30225_30847__$1)){
var c__4550__auto___30848 = cljs.core.chunk_first(seq__30225_30847__$1);
var G__30849 = cljs.core.chunk_rest(seq__30225_30847__$1);
var G__30850 = c__4550__auto___30848;
var G__30851 = cljs.core.count(c__4550__auto___30848);
var G__30852 = (0);
seq__30225_30803 = G__30849;
chunk__30226_30804 = G__30850;
count__30227_30805 = G__30851;
i__30228_30806 = G__30852;
continue;
} else {
var child_struct_30853 = cljs.core.first(seq__30225_30847__$1);
var children_30855 = shadow.dom.dom_node(child_struct_30853);
if(cljs.core.seq_QMARK_(children_30855)){
var seq__30268_30856 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30855));
var chunk__30270_30857 = null;
var count__30271_30858 = (0);
var i__30272_30859 = (0);
while(true){
if((i__30272_30859 < count__30271_30858)){
var child_30861 = chunk__30270_30857.cljs$core$IIndexed$_nth$arity$2(null,i__30272_30859);
if(cljs.core.truth_(child_30861)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30861);


var G__30863 = seq__30268_30856;
var G__30864 = chunk__30270_30857;
var G__30865 = count__30271_30858;
var G__30866 = (i__30272_30859 + (1));
seq__30268_30856 = G__30863;
chunk__30270_30857 = G__30864;
count__30271_30858 = G__30865;
i__30272_30859 = G__30866;
continue;
} else {
var G__30867 = seq__30268_30856;
var G__30868 = chunk__30270_30857;
var G__30869 = count__30271_30858;
var G__30870 = (i__30272_30859 + (1));
seq__30268_30856 = G__30867;
chunk__30270_30857 = G__30868;
count__30271_30858 = G__30869;
i__30272_30859 = G__30870;
continue;
}
} else {
var temp__5720__auto___30871__$1 = cljs.core.seq(seq__30268_30856);
if(temp__5720__auto___30871__$1){
var seq__30268_30872__$1 = temp__5720__auto___30871__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30268_30872__$1)){
var c__4550__auto___30873 = cljs.core.chunk_first(seq__30268_30872__$1);
var G__30874 = cljs.core.chunk_rest(seq__30268_30872__$1);
var G__30875 = c__4550__auto___30873;
var G__30876 = cljs.core.count(c__4550__auto___30873);
var G__30877 = (0);
seq__30268_30856 = G__30874;
chunk__30270_30857 = G__30875;
count__30271_30858 = G__30876;
i__30272_30859 = G__30877;
continue;
} else {
var child_30878 = cljs.core.first(seq__30268_30872__$1);
if(cljs.core.truth_(child_30878)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30878);


var G__30879 = cljs.core.next(seq__30268_30872__$1);
var G__30880 = null;
var G__30881 = (0);
var G__30882 = (0);
seq__30268_30856 = G__30879;
chunk__30270_30857 = G__30880;
count__30271_30858 = G__30881;
i__30272_30859 = G__30882;
continue;
} else {
var G__30883 = cljs.core.next(seq__30268_30872__$1);
var G__30884 = null;
var G__30885 = (0);
var G__30886 = (0);
seq__30268_30856 = G__30883;
chunk__30270_30857 = G__30884;
count__30271_30858 = G__30885;
i__30272_30859 = G__30886;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30855);
}


var G__30887 = cljs.core.next(seq__30225_30847__$1);
var G__30888 = null;
var G__30889 = (0);
var G__30890 = (0);
seq__30225_30803 = G__30887;
chunk__30226_30804 = G__30888;
count__30227_30805 = G__30889;
i__30228_30806 = G__30890;
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
var G__30292 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__30292);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__30297 = cljs.core.seq(node);
var chunk__30298 = null;
var count__30299 = (0);
var i__30300 = (0);
while(true){
if((i__30300 < count__30299)){
var n = chunk__30298.cljs$core$IIndexed$_nth$arity$2(null,i__30300);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__30893 = seq__30297;
var G__30894 = chunk__30298;
var G__30895 = count__30299;
var G__30896 = (i__30300 + (1));
seq__30297 = G__30893;
chunk__30298 = G__30894;
count__30299 = G__30895;
i__30300 = G__30896;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__30297);
if(temp__5720__auto__){
var seq__30297__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30297__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__30297__$1);
var G__30898 = cljs.core.chunk_rest(seq__30297__$1);
var G__30899 = c__4550__auto__;
var G__30900 = cljs.core.count(c__4550__auto__);
var G__30901 = (0);
seq__30297 = G__30898;
chunk__30298 = G__30899;
count__30299 = G__30900;
i__30300 = G__30901;
continue;
} else {
var n = cljs.core.first(seq__30297__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__30902 = cljs.core.next(seq__30297__$1);
var G__30903 = null;
var G__30904 = (0);
var G__30905 = (0);
seq__30297 = G__30902;
chunk__30298 = G__30903;
count__30299 = G__30904;
i__30300 = G__30905;
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
var G__30312 = shadow.dom.dom_node(new$);
var G__30313 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__30312,G__30313);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__30317 = arguments.length;
switch (G__30317) {
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
var G__30322 = arguments.length;
switch (G__30322) {
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
var G__30324 = arguments.length;
switch (G__30324) {
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
var len__4730__auto___30913 = arguments.length;
var i__4731__auto___30914 = (0);
while(true){
if((i__4731__auto___30914 < len__4730__auto___30913)){
args__4736__auto__.push((arguments[i__4731__auto___30914]));

var G__30915 = (i__4731__auto___30914 + (1));
i__4731__auto___30914 = G__30915;
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
var seq__30332_30916 = cljs.core.seq(nodes);
var chunk__30333_30917 = null;
var count__30334_30918 = (0);
var i__30335_30919 = (0);
while(true){
if((i__30335_30919 < count__30334_30918)){
var node_30920 = chunk__30333_30917.cljs$core$IIndexed$_nth$arity$2(null,i__30335_30919);
fragment.appendChild(shadow.dom._to_dom(node_30920));


var G__30921 = seq__30332_30916;
var G__30922 = chunk__30333_30917;
var G__30923 = count__30334_30918;
var G__30924 = (i__30335_30919 + (1));
seq__30332_30916 = G__30921;
chunk__30333_30917 = G__30922;
count__30334_30918 = G__30923;
i__30335_30919 = G__30924;
continue;
} else {
var temp__5720__auto___30925 = cljs.core.seq(seq__30332_30916);
if(temp__5720__auto___30925){
var seq__30332_30926__$1 = temp__5720__auto___30925;
if(cljs.core.chunked_seq_QMARK_(seq__30332_30926__$1)){
var c__4550__auto___30927 = cljs.core.chunk_first(seq__30332_30926__$1);
var G__30928 = cljs.core.chunk_rest(seq__30332_30926__$1);
var G__30929 = c__4550__auto___30927;
var G__30930 = cljs.core.count(c__4550__auto___30927);
var G__30931 = (0);
seq__30332_30916 = G__30928;
chunk__30333_30917 = G__30929;
count__30334_30918 = G__30930;
i__30335_30919 = G__30931;
continue;
} else {
var node_30936 = cljs.core.first(seq__30332_30926__$1);
fragment.appendChild(shadow.dom._to_dom(node_30936));


var G__30937 = cljs.core.next(seq__30332_30926__$1);
var G__30938 = null;
var G__30939 = (0);
var G__30940 = (0);
seq__30332_30916 = G__30937;
chunk__30333_30917 = G__30938;
count__30334_30918 = G__30939;
i__30335_30919 = G__30940;
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
shadow.dom.fragment.cljs$lang$applyTo = (function (seq30331){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30331));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__30351_30941 = cljs.core.seq(scripts);
var chunk__30352_30942 = null;
var count__30353_30943 = (0);
var i__30354_30944 = (0);
while(true){
if((i__30354_30944 < count__30353_30943)){
var vec__30369_30945 = chunk__30352_30942.cljs$core$IIndexed$_nth$arity$2(null,i__30354_30944);
var script_tag_30946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30369_30945,(0),null);
var script_body_30947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30369_30945,(1),null);
eval(script_body_30947);


var G__30948 = seq__30351_30941;
var G__30949 = chunk__30352_30942;
var G__30950 = count__30353_30943;
var G__30951 = (i__30354_30944 + (1));
seq__30351_30941 = G__30948;
chunk__30352_30942 = G__30949;
count__30353_30943 = G__30950;
i__30354_30944 = G__30951;
continue;
} else {
var temp__5720__auto___30952 = cljs.core.seq(seq__30351_30941);
if(temp__5720__auto___30952){
var seq__30351_30953__$1 = temp__5720__auto___30952;
if(cljs.core.chunked_seq_QMARK_(seq__30351_30953__$1)){
var c__4550__auto___30954 = cljs.core.chunk_first(seq__30351_30953__$1);
var G__30955 = cljs.core.chunk_rest(seq__30351_30953__$1);
var G__30956 = c__4550__auto___30954;
var G__30957 = cljs.core.count(c__4550__auto___30954);
var G__30958 = (0);
seq__30351_30941 = G__30955;
chunk__30352_30942 = G__30956;
count__30353_30943 = G__30957;
i__30354_30944 = G__30958;
continue;
} else {
var vec__30376_30959 = cljs.core.first(seq__30351_30953__$1);
var script_tag_30960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30376_30959,(0),null);
var script_body_30961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30376_30959,(1),null);
eval(script_body_30961);


var G__30962 = cljs.core.next(seq__30351_30953__$1);
var G__30963 = null;
var G__30964 = (0);
var G__30965 = (0);
seq__30351_30941 = G__30962;
chunk__30352_30942 = G__30963;
count__30353_30943 = G__30964;
i__30354_30944 = G__30965;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__30383){
var vec__30384 = p__30383;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30384,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30384,(1),null);
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
var G__30399 = shadow.dom.dom_node(el);
var G__30400 = cls;
return goog.dom.getAncestorByClass(G__30399,G__30400);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__30405 = arguments.length;
switch (G__30405) {
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
var G__30407 = shadow.dom.dom_node(el);
var G__30408 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__30407,G__30408);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__30411 = shadow.dom.dom_node(el);
var G__30412 = cljs.core.name(tag);
var G__30413 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__30411,G__30412,G__30413);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__30414 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__30414);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__30415 = shadow.dom.dom_node(dom);
var G__30416 = value;
return goog.dom.forms.setValue(G__30415,G__30416);
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
var seq__30419 = cljs.core.seq(style_keys);
var chunk__30420 = null;
var count__30421 = (0);
var i__30422 = (0);
while(true){
if((i__30422 < count__30421)){
var it = chunk__30420.cljs$core$IIndexed$_nth$arity$2(null,i__30422);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__30970 = seq__30419;
var G__30971 = chunk__30420;
var G__30972 = count__30421;
var G__30973 = (i__30422 + (1));
seq__30419 = G__30970;
chunk__30420 = G__30971;
count__30421 = G__30972;
i__30422 = G__30973;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__30419);
if(temp__5720__auto__){
var seq__30419__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30419__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__30419__$1);
var G__30974 = cljs.core.chunk_rest(seq__30419__$1);
var G__30975 = c__4550__auto__;
var G__30976 = cljs.core.count(c__4550__auto__);
var G__30977 = (0);
seq__30419 = G__30974;
chunk__30420 = G__30975;
count__30421 = G__30976;
i__30422 = G__30977;
continue;
} else {
var it = cljs.core.first(seq__30419__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__30978 = cljs.core.next(seq__30419__$1);
var G__30979 = null;
var G__30980 = (0);
var G__30981 = (0);
seq__30419 = G__30978;
chunk__30420 = G__30979;
count__30421 = G__30980;
i__30422 = G__30981;
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

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k30428,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__30442 = k30428;
var G__30442__$1 = (((G__30442 instanceof cljs.core.Keyword))?G__30442.fqn:null);
switch (G__30442__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30428,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__30446){
var vec__30448 = p__30446;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30448,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30448,(1),null);
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

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30427){
var self__ = this;
var G__30427__$1 = this;
return (new cljs.core.RecordIter((0),G__30427__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__30460 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__30460(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30429,other30430){
var self__ = this;
var this30429__$1 = this;
return (((!((other30430 == null)))) && ((this30429__$1.constructor === other30430.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30429__$1.x,other30430.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30429__$1.y,other30430.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30429__$1.__extmap,other30430.__extmap)));
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

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__30427){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__30466 = cljs.core.keyword_identical_QMARK_;
var expr__30467 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__30469 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__30470 = expr__30467;
return (pred__30466.cljs$core$IFn$_invoke$arity$2 ? pred__30466.cljs$core$IFn$_invoke$arity$2(G__30469,G__30470) : pred__30466.call(null,G__30469,G__30470));
})())){
return (new shadow.dom.Coordinate(G__30427,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30471 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__30472 = expr__30467;
return (pred__30466.cljs$core$IFn$_invoke$arity$2 ? pred__30466.cljs$core$IFn$_invoke$arity$2(G__30471,G__30472) : pred__30466.call(null,G__30471,G__30472));
})())){
return (new shadow.dom.Coordinate(self__.x,G__30427,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__30427),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__30427){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__30427,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__30432){
var extmap__4424__auto__ = (function (){var G__30477 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30432,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__30432)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30477);
} else {
return G__30477;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__30432),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__30432),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__30482 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__30482);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__30485 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__30485);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__30489 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__30489);
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

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k30491,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__30497 = k30491;
var G__30497__$1 = (((G__30497 instanceof cljs.core.Keyword))?G__30497.fqn:null);
switch (G__30497__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30491,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__30500){
var vec__30502 = p__30500;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30502,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30502,(1),null);
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

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30490){
var self__ = this;
var G__30490__$1 = this;
return (new cljs.core.RecordIter((0),G__30490__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__30512 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__30512(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30492,other30493){
var self__ = this;
var this30492__$1 = this;
return (((!((other30493 == null)))) && ((this30492__$1.constructor === other30493.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30492__$1.w,other30493.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30492__$1.h,other30493.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30492__$1.__extmap,other30493.__extmap)));
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

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__30490){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__30518 = cljs.core.keyword_identical_QMARK_;
var expr__30519 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__30522 = new cljs.core.Keyword(null,"w","w",354169001);
var G__30523 = expr__30519;
return (pred__30518.cljs$core$IFn$_invoke$arity$2 ? pred__30518.cljs$core$IFn$_invoke$arity$2(G__30522,G__30523) : pred__30518.call(null,G__30522,G__30523));
})())){
return (new shadow.dom.Size(G__30490,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30524 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__30525 = expr__30519;
return (pred__30518.cljs$core$IFn$_invoke$arity$2 ? pred__30518.cljs$core$IFn$_invoke$arity$2(G__30524,G__30525) : pred__30518.call(null,G__30524,G__30525));
})())){
return (new shadow.dom.Size(self__.w,G__30490,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__30490),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__30490){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__30490,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__30495){
var extmap__4424__auto__ = (function (){var G__30531 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30495,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__30495)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30531);
} else {
return G__30531;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__30495),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__30495),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__30536 = shadow.dom.dom_node(el);
return goog.style.getSize(G__30536);
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
var G__31001 = (i + (1));
var G__31002 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__31001;
ret = G__31002;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30549){
var vec__30550 = p__30549;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30550,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30550,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__30554 = arguments.length;
switch (G__30554) {
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
var G__30555_31007 = new_node;
var G__30556_31008 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__30555_31007,G__30556_31008);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__30557_31009 = new_node;
var G__30558_31010 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__30557_31009,G__30558_31010);

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
var G__31014 = ps;
var G__31015 = (i + (1));
el__$1 = G__31014;
i = G__31015;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__30559 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__30559);
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
var G__30562 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__30562);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__30565 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__30565);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__30570 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30570,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30570,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30570,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__30575_31019 = cljs.core.seq(props);
var chunk__30576_31020 = null;
var count__30577_31021 = (0);
var i__30578_31022 = (0);
while(true){
if((i__30578_31022 < count__30577_31021)){
var vec__30589_31023 = chunk__30576_31020.cljs$core$IIndexed$_nth$arity$2(null,i__30578_31022);
var k_31024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30589_31023,(0),null);
var v_31025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30589_31023,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_31024);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_31024),v_31025);


var G__31026 = seq__30575_31019;
var G__31027 = chunk__30576_31020;
var G__31028 = count__30577_31021;
var G__31029 = (i__30578_31022 + (1));
seq__30575_31019 = G__31026;
chunk__30576_31020 = G__31027;
count__30577_31021 = G__31028;
i__30578_31022 = G__31029;
continue;
} else {
var temp__5720__auto___31030 = cljs.core.seq(seq__30575_31019);
if(temp__5720__auto___31030){
var seq__30575_31031__$1 = temp__5720__auto___31030;
if(cljs.core.chunked_seq_QMARK_(seq__30575_31031__$1)){
var c__4550__auto___31032 = cljs.core.chunk_first(seq__30575_31031__$1);
var G__31033 = cljs.core.chunk_rest(seq__30575_31031__$1);
var G__31034 = c__4550__auto___31032;
var G__31035 = cljs.core.count(c__4550__auto___31032);
var G__31036 = (0);
seq__30575_31019 = G__31033;
chunk__30576_31020 = G__31034;
count__30577_31021 = G__31035;
i__30578_31022 = G__31036;
continue;
} else {
var vec__30593_31037 = cljs.core.first(seq__30575_31031__$1);
var k_31038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30593_31037,(0),null);
var v_31039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30593_31037,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_31038);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_31038),v_31039);


var G__31044 = cljs.core.next(seq__30575_31031__$1);
var G__31045 = null;
var G__31046 = (0);
var G__31047 = (0);
seq__30575_31019 = G__31044;
chunk__30576_31020 = G__31045;
count__30577_31021 = G__31046;
i__30578_31022 = G__31047;
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
var vec__30604 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30604,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30604,(1),null);
var seq__30607_31048 = cljs.core.seq(node_children);
var chunk__30609_31049 = null;
var count__30610_31050 = (0);
var i__30611_31051 = (0);
while(true){
if((i__30611_31051 < count__30610_31050)){
var child_struct_31052 = chunk__30609_31049.cljs$core$IIndexed$_nth$arity$2(null,i__30611_31051);
if((!((child_struct_31052 == null)))){
if(typeof child_struct_31052 === 'string'){
var text_31053 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_31053),child_struct_31052].join(''));
} else {
var children_31054 = shadow.dom.svg_node(child_struct_31052);
if(cljs.core.seq_QMARK_(children_31054)){
var seq__30645_31055 = cljs.core.seq(children_31054);
var chunk__30647_31056 = null;
var count__30648_31057 = (0);
var i__30649_31058 = (0);
while(true){
if((i__30649_31058 < count__30648_31057)){
var child_31059 = chunk__30647_31056.cljs$core$IIndexed$_nth$arity$2(null,i__30649_31058);
if(cljs.core.truth_(child_31059)){
node.appendChild(child_31059);


var G__31060 = seq__30645_31055;
var G__31061 = chunk__30647_31056;
var G__31062 = count__30648_31057;
var G__31063 = (i__30649_31058 + (1));
seq__30645_31055 = G__31060;
chunk__30647_31056 = G__31061;
count__30648_31057 = G__31062;
i__30649_31058 = G__31063;
continue;
} else {
var G__31064 = seq__30645_31055;
var G__31065 = chunk__30647_31056;
var G__31066 = count__30648_31057;
var G__31067 = (i__30649_31058 + (1));
seq__30645_31055 = G__31064;
chunk__30647_31056 = G__31065;
count__30648_31057 = G__31066;
i__30649_31058 = G__31067;
continue;
}
} else {
var temp__5720__auto___31068 = cljs.core.seq(seq__30645_31055);
if(temp__5720__auto___31068){
var seq__30645_31069__$1 = temp__5720__auto___31068;
if(cljs.core.chunked_seq_QMARK_(seq__30645_31069__$1)){
var c__4550__auto___31070 = cljs.core.chunk_first(seq__30645_31069__$1);
var G__31071 = cljs.core.chunk_rest(seq__30645_31069__$1);
var G__31072 = c__4550__auto___31070;
var G__31073 = cljs.core.count(c__4550__auto___31070);
var G__31074 = (0);
seq__30645_31055 = G__31071;
chunk__30647_31056 = G__31072;
count__30648_31057 = G__31073;
i__30649_31058 = G__31074;
continue;
} else {
var child_31075 = cljs.core.first(seq__30645_31069__$1);
if(cljs.core.truth_(child_31075)){
node.appendChild(child_31075);


var G__31076 = cljs.core.next(seq__30645_31069__$1);
var G__31077 = null;
var G__31078 = (0);
var G__31079 = (0);
seq__30645_31055 = G__31076;
chunk__30647_31056 = G__31077;
count__30648_31057 = G__31078;
i__30649_31058 = G__31079;
continue;
} else {
var G__31080 = cljs.core.next(seq__30645_31069__$1);
var G__31081 = null;
var G__31082 = (0);
var G__31083 = (0);
seq__30645_31055 = G__31080;
chunk__30647_31056 = G__31081;
count__30648_31057 = G__31082;
i__30649_31058 = G__31083;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_31054);
}
}


var G__31084 = seq__30607_31048;
var G__31085 = chunk__30609_31049;
var G__31086 = count__30610_31050;
var G__31087 = (i__30611_31051 + (1));
seq__30607_31048 = G__31084;
chunk__30609_31049 = G__31085;
count__30610_31050 = G__31086;
i__30611_31051 = G__31087;
continue;
} else {
var G__31088 = seq__30607_31048;
var G__31089 = chunk__30609_31049;
var G__31090 = count__30610_31050;
var G__31091 = (i__30611_31051 + (1));
seq__30607_31048 = G__31088;
chunk__30609_31049 = G__31089;
count__30610_31050 = G__31090;
i__30611_31051 = G__31091;
continue;
}
} else {
var temp__5720__auto___31092 = cljs.core.seq(seq__30607_31048);
if(temp__5720__auto___31092){
var seq__30607_31093__$1 = temp__5720__auto___31092;
if(cljs.core.chunked_seq_QMARK_(seq__30607_31093__$1)){
var c__4550__auto___31094 = cljs.core.chunk_first(seq__30607_31093__$1);
var G__31095 = cljs.core.chunk_rest(seq__30607_31093__$1);
var G__31096 = c__4550__auto___31094;
var G__31097 = cljs.core.count(c__4550__auto___31094);
var G__31098 = (0);
seq__30607_31048 = G__31095;
chunk__30609_31049 = G__31096;
count__30610_31050 = G__31097;
i__30611_31051 = G__31098;
continue;
} else {
var child_struct_31099 = cljs.core.first(seq__30607_31093__$1);
if((!((child_struct_31099 == null)))){
if(typeof child_struct_31099 === 'string'){
var text_31100 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_31100),child_struct_31099].join(''));
} else {
var children_31101 = shadow.dom.svg_node(child_struct_31099);
if(cljs.core.seq_QMARK_(children_31101)){
var seq__30655_31102 = cljs.core.seq(children_31101);
var chunk__30657_31103 = null;
var count__30658_31104 = (0);
var i__30659_31105 = (0);
while(true){
if((i__30659_31105 < count__30658_31104)){
var child_31106 = chunk__30657_31103.cljs$core$IIndexed$_nth$arity$2(null,i__30659_31105);
if(cljs.core.truth_(child_31106)){
node.appendChild(child_31106);


var G__31109 = seq__30655_31102;
var G__31110 = chunk__30657_31103;
var G__31111 = count__30658_31104;
var G__31112 = (i__30659_31105 + (1));
seq__30655_31102 = G__31109;
chunk__30657_31103 = G__31110;
count__30658_31104 = G__31111;
i__30659_31105 = G__31112;
continue;
} else {
var G__31113 = seq__30655_31102;
var G__31114 = chunk__30657_31103;
var G__31115 = count__30658_31104;
var G__31116 = (i__30659_31105 + (1));
seq__30655_31102 = G__31113;
chunk__30657_31103 = G__31114;
count__30658_31104 = G__31115;
i__30659_31105 = G__31116;
continue;
}
} else {
var temp__5720__auto___31117__$1 = cljs.core.seq(seq__30655_31102);
if(temp__5720__auto___31117__$1){
var seq__30655_31118__$1 = temp__5720__auto___31117__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30655_31118__$1)){
var c__4550__auto___31119 = cljs.core.chunk_first(seq__30655_31118__$1);
var G__31120 = cljs.core.chunk_rest(seq__30655_31118__$1);
var G__31121 = c__4550__auto___31119;
var G__31122 = cljs.core.count(c__4550__auto___31119);
var G__31123 = (0);
seq__30655_31102 = G__31120;
chunk__30657_31103 = G__31121;
count__30658_31104 = G__31122;
i__30659_31105 = G__31123;
continue;
} else {
var child_31124 = cljs.core.first(seq__30655_31118__$1);
if(cljs.core.truth_(child_31124)){
node.appendChild(child_31124);


var G__31125 = cljs.core.next(seq__30655_31118__$1);
var G__31126 = null;
var G__31127 = (0);
var G__31128 = (0);
seq__30655_31102 = G__31125;
chunk__30657_31103 = G__31126;
count__30658_31104 = G__31127;
i__30659_31105 = G__31128;
continue;
} else {
var G__31129 = cljs.core.next(seq__30655_31118__$1);
var G__31130 = null;
var G__31131 = (0);
var G__31132 = (0);
seq__30655_31102 = G__31129;
chunk__30657_31103 = G__31130;
count__30658_31104 = G__31131;
i__30659_31105 = G__31132;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_31101);
}
}


var G__31133 = cljs.core.next(seq__30607_31093__$1);
var G__31134 = null;
var G__31135 = (0);
var G__31136 = (0);
seq__30607_31048 = G__31133;
chunk__30609_31049 = G__31134;
count__30610_31050 = G__31135;
i__30611_31051 = G__31136;
continue;
} else {
var G__31137 = cljs.core.next(seq__30607_31093__$1);
var G__31138 = null;
var G__31139 = (0);
var G__31140 = (0);
seq__30607_31048 = G__31137;
chunk__30609_31049 = G__31138;
count__30610_31050 = G__31139;
i__30611_31051 = G__31140;
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

var G__30666_31141 = shadow.dom._to_svg;
var G__30667_31142 = "string";
var G__30668_31143 = ((function (G__30666_31141,G__30667_31142){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__30666_31141,G__30667_31142))
;
goog.object.set(G__30666_31141,G__30667_31142,G__30668_31143);

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

var G__30672_31145 = shadow.dom._to_svg;
var G__30673_31146 = "null";
var G__30674_31147 = ((function (G__30672_31145,G__30673_31146){
return (function (_){
return null;
});})(G__30672_31145,G__30673_31146))
;
goog.object.set(G__30672_31145,G__30673_31146,G__30674_31147);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31148 = arguments.length;
var i__4731__auto___31149 = (0);
while(true){
if((i__4731__auto___31149 < len__4730__auto___31148)){
args__4736__auto__.push((arguments[i__4731__auto___31149]));

var G__31150 = (i__4731__auto___31149 + (1));
i__4731__auto___31149 = G__31150;
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
shadow.dom.svg.cljs$lang$applyTo = (function (seq30676){
var G__30677 = cljs.core.first(seq30676);
var seq30676__$1 = cljs.core.next(seq30676);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30677,seq30676__$1);
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
var G__30683 = arguments.length;
switch (G__30683) {
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
var G__30692_31154 = shadow.dom.dom_node(el);
var G__30693_31155 = cljs.core.name(event);
var G__30694_31156 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__30692_31154,G__30693_31155,G__30694_31156) : shadow.dom.dom_listen.call(null,G__30692_31154,G__30693_31155,G__30694_31156));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__27793__auto___31157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27793__auto___31157,buf,chan,event_fn){
return (function (){
var f__27794__auto__ = (function (){var switch__27626__auto__ = ((function (c__27793__auto___31157,buf,chan,event_fn){
return (function (state_30699){
var state_val_30700 = (state_30699[(1)]);
if((state_val_30700 === (1))){
var state_30699__$1 = state_30699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30699__$1,(2),once_or_cleanup);
} else {
if((state_val_30700 === (2))){
var inst_30696 = (state_30699[(2)]);
var inst_30697 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_30699__$1 = (function (){var statearr_30702 = state_30699;
(statearr_30702[(7)] = inst_30696);

return statearr_30702;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30699__$1,inst_30697);
} else {
return null;
}
}
});})(c__27793__auto___31157,buf,chan,event_fn))
;
return ((function (switch__27626__auto__,c__27793__auto___31157,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__27627__auto__ = null;
var shadow$dom$state_machine__27627__auto____0 = (function (){
var statearr_30705 = [null,null,null,null,null,null,null,null];
(statearr_30705[(0)] = shadow$dom$state_machine__27627__auto__);

(statearr_30705[(1)] = (1));

return statearr_30705;
});
var shadow$dom$state_machine__27627__auto____1 = (function (state_30699){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__(state_30699);
if(cljs.core.keyword_identical_QMARK_(result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e30707){if((e30707 instanceof Object)){
var ex__27630__auto__ = e30707;
var statearr_30709_31163 = state_30699;
(statearr_30709_31163[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30707;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31165 = state_30699;
state_30699 = G__31165;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
shadow$dom$state_machine__27627__auto__ = function(state_30699){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__27627__auto____0.call(this);
case 1:
return shadow$dom$state_machine__27627__auto____1.call(this,state_30699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__27627__auto____0;
shadow$dom$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__27627__auto____1;
return shadow$dom$state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27793__auto___31157,buf,chan,event_fn))
})();
var state__27795__auto__ = (function (){var statearr_30711 = (f__27794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27794__auto__.cljs$core$IFn$_invoke$arity$0() : f__27794__auto__.call(null));
(statearr_30711[(6)] = c__27793__auto___31157);

return statearr_30711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27795__auto__);
});})(c__27793__auto___31157,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
