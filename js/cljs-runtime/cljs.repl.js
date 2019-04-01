goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__25768){
var map__25769 = p__25768;
var map__25769__$1 = (((((!((map__25769 == null))))?(((((map__25769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25769):map__25769);
var m = map__25769__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25769__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25769__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25771_26220 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25772_26221 = null;
var count__25773_26222 = (0);
var i__25774_26223 = (0);
while(true){
if((i__25774_26223 < count__25773_26222)){
var f_26228 = chunk__25772_26221.cljs$core$IIndexed$_nth$arity$2(null,i__25774_26223);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_26228], 0));


var G__26231 = seq__25771_26220;
var G__26232 = chunk__25772_26221;
var G__26233 = count__25773_26222;
var G__26234 = (i__25774_26223 + (1));
seq__25771_26220 = G__26231;
chunk__25772_26221 = G__26232;
count__25773_26222 = G__26233;
i__25774_26223 = G__26234;
continue;
} else {
var temp__5720__auto___26235 = cljs.core.seq(seq__25771_26220);
if(temp__5720__auto___26235){
var seq__25771_26236__$1 = temp__5720__auto___26235;
if(cljs.core.chunked_seq_QMARK_(seq__25771_26236__$1)){
var c__4550__auto___26237 = cljs.core.chunk_first(seq__25771_26236__$1);
var G__26238 = cljs.core.chunk_rest(seq__25771_26236__$1);
var G__26239 = c__4550__auto___26237;
var G__26240 = cljs.core.count(c__4550__auto___26237);
var G__26241 = (0);
seq__25771_26220 = G__26238;
chunk__25772_26221 = G__26239;
count__25773_26222 = G__26240;
i__25774_26223 = G__26241;
continue;
} else {
var f_26242 = cljs.core.first(seq__25771_26236__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_26242], 0));


var G__26245 = cljs.core.next(seq__25771_26236__$1);
var G__26246 = null;
var G__26247 = (0);
var G__26248 = (0);
seq__25771_26220 = G__26245;
chunk__25772_26221 = G__26246;
count__25773_26222 = G__26247;
i__25774_26223 = G__26248;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26249 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_26249], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_26249)))?cljs.core.second(arglists_26249):arglists_26249)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25788_26254 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25789_26255 = null;
var count__25790_26256 = (0);
var i__25791_26257 = (0);
while(true){
if((i__25791_26257 < count__25790_26256)){
var vec__25818_26258 = chunk__25789_26255.cljs$core$IIndexed$_nth$arity$2(null,i__25791_26257);
var name_26259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25818_26258,(0),null);
var map__25821_26260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25818_26258,(1),null);
var map__25821_26261__$1 = (((((!((map__25821_26260 == null))))?(((((map__25821_26260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25821_26260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25821_26260):map__25821_26260);
var doc_26262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25821_26261__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25821_26261__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_26259], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_26263], 0));

if(cljs.core.truth_(doc_26262)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_26262], 0));
} else {
}


var G__26269 = seq__25788_26254;
var G__26270 = chunk__25789_26255;
var G__26271 = count__25790_26256;
var G__26272 = (i__25791_26257 + (1));
seq__25788_26254 = G__26269;
chunk__25789_26255 = G__26270;
count__25790_26256 = G__26271;
i__25791_26257 = G__26272;
continue;
} else {
var temp__5720__auto___26274 = cljs.core.seq(seq__25788_26254);
if(temp__5720__auto___26274){
var seq__25788_26276__$1 = temp__5720__auto___26274;
if(cljs.core.chunked_seq_QMARK_(seq__25788_26276__$1)){
var c__4550__auto___26278 = cljs.core.chunk_first(seq__25788_26276__$1);
var G__26279 = cljs.core.chunk_rest(seq__25788_26276__$1);
var G__26280 = c__4550__auto___26278;
var G__26281 = cljs.core.count(c__4550__auto___26278);
var G__26282 = (0);
seq__25788_26254 = G__26279;
chunk__25789_26255 = G__26280;
count__25790_26256 = G__26281;
i__25791_26257 = G__26282;
continue;
} else {
var vec__25837_26289 = cljs.core.first(seq__25788_26276__$1);
var name_26290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25837_26289,(0),null);
var map__25840_26291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25837_26289,(1),null);
var map__25840_26292__$1 = (((((!((map__25840_26291 == null))))?(((((map__25840_26291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25840_26291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25840_26291):map__25840_26291);
var doc_26293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25840_26292__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25840_26292__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_26290], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_26294], 0));

if(cljs.core.truth_(doc_26293)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_26293], 0));
} else {
}


var G__26297 = cljs.core.next(seq__25788_26276__$1);
var G__26298 = null;
var G__26299 = (0);
var G__26300 = (0);
seq__25788_26254 = G__26297;
chunk__25789_26255 = G__26298;
count__25790_26256 = G__26299;
i__25791_26257 = G__26300;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__25866 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__25867 = null;
var count__25868 = (0);
var i__25869 = (0);
while(true){
if((i__25869 < count__25868)){
var role = chunk__25867.cljs$core$IIndexed$_nth$arity$2(null,i__25869);
var temp__5720__auto___26308__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___26308__$1)){
var spec_26309 = temp__5720__auto___26308__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_26309)], 0));
} else {
}


var G__26310 = seq__25866;
var G__26311 = chunk__25867;
var G__26312 = count__25868;
var G__26313 = (i__25869 + (1));
seq__25866 = G__26310;
chunk__25867 = G__26311;
count__25868 = G__26312;
i__25869 = G__26313;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__25866);
if(temp__5720__auto____$1){
var seq__25866__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__25866__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__25866__$1);
var G__26315 = cljs.core.chunk_rest(seq__25866__$1);
var G__26316 = c__4550__auto__;
var G__26317 = cljs.core.count(c__4550__auto__);
var G__26318 = (0);
seq__25866 = G__26315;
chunk__25867 = G__26316;
count__25868 = G__26317;
i__25869 = G__26318;
continue;
} else {
var role = cljs.core.first(seq__25866__$1);
var temp__5720__auto___26319__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___26319__$2)){
var spec_26321 = temp__5720__auto___26319__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_26321)], 0));
} else {
}


var G__26322 = cljs.core.next(seq__25866__$1);
var G__26323 = null;
var G__26324 = (0);
var G__26325 = (0);
seq__25866 = G__26322;
chunk__25867 = G__26323;
count__25868 = G__26324;
i__25869 = G__26325;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__26331 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__26332 = cljs.core.ex_cause(t);
via = G__26331;
t = G__26332;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__25944 = datafied_throwable;
var map__25944__$1 = (((((!((map__25944 == null))))?(((((map__25944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25944):map__25944);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25944__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25944__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25944__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__25945 = cljs.core.last(via);
var map__25945__$1 = (((((!((map__25945 == null))))?(((((map__25945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25945):map__25945);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25945__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25945__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25945__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__25946 = data;
var map__25946__$1 = (((((!((map__25946 == null))))?(((((map__25946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25946):map__25946);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25946__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25946__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25946__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__25947 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__25947__$1 = (((((!((map__25947 == null))))?(((((map__25947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25947):map__25947);
var top_data = map__25947__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25947__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__25963 = phase;
var G__25963__$1 = (((G__25963 instanceof cljs.core.Keyword))?G__25963.fqn:null);
switch (G__25963__$1) {
case "read-source":
var map__25965 = data;
var map__25965__$1 = (((((!((map__25965 == null))))?(((((map__25965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25965):map__25965);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25965__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25965__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__25979 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__25979__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25979,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__25979);
var G__25979__$2 = (cljs.core.truth_((function (){var fexpr__25985 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25985.cljs$core$IFn$_invoke$arity$1 ? fexpr__25985.cljs$core$IFn$_invoke$arity$1(source) : fexpr__25985.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25979__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__25979__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25979__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__25979__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__25987 = top_data;
var G__25987__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25987,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__25987);
var G__25987__$2 = (cljs.core.truth_((function (){var fexpr__26001 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26001.cljs$core$IFn$_invoke$arity$1 ? fexpr__26001.cljs$core$IFn$_invoke$arity$1(source) : fexpr__26001.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25987__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__25987__$1);
var G__25987__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25987__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__25987__$2);
var G__25987__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25987__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__25987__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25987__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__25987__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__26034 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26034,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26034,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26034,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26034,(3),null);
var G__26041 = top_data;
var G__26041__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26041,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__26041);
var G__26041__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26041__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__26041__$1);
var G__26041__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26041__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__26041__$2);
var G__26041__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26041__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26041__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26041__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26041__$4;
}

break;
case "execution":
var vec__26058 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26058,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26058,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26058,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26058,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__26058,source__$1,method,file,line,G__25963,G__25963__$1,map__25944,map__25944__$1,via,trace,phase,map__25945,map__25945__$1,type,message,data,map__25946,map__25946__$1,problems,fn,caller,map__25947,map__25947__$1,top_data,source){
return (function (p1__25941_SHARP_){
var or__4131__auto__ = (p1__25941_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__26072 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26072.cljs$core$IFn$_invoke$arity$1 ? fexpr__26072.cljs$core$IFn$_invoke$arity$1(p1__25941_SHARP_) : fexpr__26072.call(null,p1__25941_SHARP_));
}
});})(vec__26058,source__$1,method,file,line,G__25963,G__25963__$1,map__25944,map__25944__$1,via,trace,phase,map__25945,map__25945__$1,type,message,data,map__25946,map__25946__$1,problems,fn,caller,map__25947,map__25947__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__26084 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__26084__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26084,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__26084);
var G__26084__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26084__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26084__$1);
var G__26084__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26084__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__26084__$2);
var G__26084__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26084__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__26084__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26084__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26084__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25963__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__26109){
var map__26110 = p__26109;
var map__26110__$1 = (((((!((map__26110 == null))))?(((((map__26110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26110):map__26110);
var triage_data = map__26110__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26110__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26110__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26110__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26110__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26110__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26110__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26110__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26110__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__26124 = phase;
var G__26124__$1 = (((G__26124 instanceof cljs.core.Keyword))?G__26124.fqn:null);
switch (G__26124__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__26127 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__26128 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26129 = loc;
var G__26130 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26133_26403 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26134_26404 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26135_26405 = true;
var _STAR_print_fn_STAR__temp_val__26136_26406 = ((function (_STAR_print_newline_STAR__orig_val__26133_26403,_STAR_print_fn_STAR__orig_val__26134_26404,_STAR_print_newline_STAR__temp_val__26135_26405,sb__4661__auto__,G__26127,G__26128,G__26129,G__26124,G__26124__$1,loc,class_name,simple_class,cause_type,format,map__26110,map__26110__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__26133_26403,_STAR_print_fn_STAR__orig_val__26134_26404,_STAR_print_newline_STAR__temp_val__26135_26405,sb__4661__auto__,G__26127,G__26128,G__26129,G__26124,G__26124__$1,loc,class_name,simple_class,cause_type,format,map__26110,map__26110__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26135_26405;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26136_26406;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__26133_26403,_STAR_print_fn_STAR__orig_val__26134_26404,_STAR_print_newline_STAR__temp_val__26135_26405,_STAR_print_fn_STAR__temp_val__26136_26406,sb__4661__auto__,G__26127,G__26128,G__26129,G__26124,G__26124__$1,loc,class_name,simple_class,cause_type,format,map__26110,map__26110__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__26133_26403,_STAR_print_fn_STAR__orig_val__26134_26404,_STAR_print_newline_STAR__temp_val__26135_26405,_STAR_print_fn_STAR__temp_val__26136_26406,sb__4661__auto__,G__26127,G__26128,G__26129,G__26124,G__26124__$1,loc,class_name,simple_class,cause_type,format,map__26110,map__26110__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__26107_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26107_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__26133_26403,_STAR_print_fn_STAR__orig_val__26134_26404,_STAR_print_newline_STAR__temp_val__26135_26405,_STAR_print_fn_STAR__temp_val__26136_26406,sb__4661__auto__,G__26127,G__26128,G__26129,G__26124,G__26124__$1,loc,class_name,simple_class,cause_type,format,map__26110,map__26110__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__26133_26403,_STAR_print_fn_STAR__orig_val__26134_26404,_STAR_print_newline_STAR__temp_val__26135_26405,_STAR_print_fn_STAR__temp_val__26136_26406,sb__4661__auto__,G__26127,G__26128,G__26129,G__26124,G__26124__$1,loc,class_name,simple_class,cause_type,format,map__26110,map__26110__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26134_26404;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26133_26403;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__26127,G__26128,G__26129,G__26130) : format.call(null,G__26127,G__26128,G__26129,G__26130));

break;
case "macroexpansion":
var G__26149 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__26150 = cause_type;
var G__26151 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26152 = loc;
var G__26153 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26149,G__26150,G__26151,G__26152,G__26153) : format.call(null,G__26149,G__26150,G__26151,G__26152,G__26153));

break;
case "compile-syntax-check":
var G__26158 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__26159 = cause_type;
var G__26160 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26161 = loc;
var G__26162 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26158,G__26159,G__26160,G__26161,G__26162) : format.call(null,G__26158,G__26159,G__26160,G__26161,G__26162));

break;
case "compilation":
var G__26165 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__26166 = cause_type;
var G__26167 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26168 = loc;
var G__26169 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26165,G__26166,G__26167,G__26168,G__26169) : format.call(null,G__26165,G__26166,G__26167,G__26168,G__26169));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__26170 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__26171 = symbol;
var G__26172 = loc;
var G__26173 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26176_26427 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26177_26428 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26178_26429 = true;
var _STAR_print_fn_STAR__temp_val__26179_26430 = ((function (_STAR_print_newline_STAR__orig_val__26176_26427,_STAR_print_fn_STAR__orig_val__26177_26428,_STAR_print_newline_STAR__temp_val__26178_26429,sb__4661__auto__,G__26170,G__26171,G__26172,G__26124,G__26124__$1,loc,class_name,simple_class,cause_type,format,map__26110,map__26110__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__26176_26427,_STAR_print_fn_STAR__orig_val__26177_26428,_STAR_print_newline_STAR__temp_val__26178_26429,sb__4661__auto__,G__26170,G__26171,G__26172,G__26124,G__26124__$1,loc,class_name,simple_class,cause_type,format,map__26110,map__26110__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26178_26429;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26179_26430;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__26176_26427,_STAR_print_fn_STAR__orig_val__26177_26428,_STAR_print_newline_STAR__temp_val__26178_26429,_STAR_print_fn_STAR__temp_val__26179_26430,sb__4661__auto__,G__26170,G__26171,G__26172,G__26124,G__26124__$1,loc,class_name,simple_class,cause_type,format,map__26110,map__26110__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__26176_26427,_STAR_print_fn_STAR__orig_val__26177_26428,_STAR_print_newline_STAR__temp_val__26178_26429,_STAR_print_fn_STAR__temp_val__26179_26430,sb__4661__auto__,G__26170,G__26171,G__26172,G__26124,G__26124__$1,loc,class_name,simple_class,cause_type,format,map__26110,map__26110__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__26108_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26108_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__26176_26427,_STAR_print_fn_STAR__orig_val__26177_26428,_STAR_print_newline_STAR__temp_val__26178_26429,_STAR_print_fn_STAR__temp_val__26179_26430,sb__4661__auto__,G__26170,G__26171,G__26172,G__26124,G__26124__$1,loc,class_name,simple_class,cause_type,format,map__26110,map__26110__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__26176_26427,_STAR_print_fn_STAR__orig_val__26177_26428,_STAR_print_newline_STAR__temp_val__26178_26429,_STAR_print_fn_STAR__temp_val__26179_26430,sb__4661__auto__,G__26170,G__26171,G__26172,G__26124,G__26124__$1,loc,class_name,simple_class,cause_type,format,map__26110,map__26110__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26177_26428;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26176_26427;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__26170,G__26171,G__26172,G__26173) : format.call(null,G__26170,G__26171,G__26172,G__26173));
} else {
var G__26189 = "Execution error%s at %s(%s).\n%s\n";
var G__26190 = cause_type;
var G__26191 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26192 = loc;
var G__26193 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26189,G__26190,G__26191,G__26192,G__26193) : format.call(null,G__26189,G__26190,G__26191,G__26192,G__26193));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26124__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
