goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31833){
var map__31835 = p__31833;
var map__31835__$1 = (((((!((map__31835 == null))))?(((((map__31835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31835):map__31835);
var m = map__31835__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31835__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31835__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__31844_32173 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31845_32174 = null;
var count__31846_32175 = (0);
var i__31847_32176 = (0);
while(true){
if((i__31847_32176 < count__31846_32175)){
var f_32177 = chunk__31845_32174.cljs$core$IIndexed$_nth$arity$2(null,i__31847_32176);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_32177], 0));


var G__32178 = seq__31844_32173;
var G__32179 = chunk__31845_32174;
var G__32180 = count__31846_32175;
var G__32181 = (i__31847_32176 + (1));
seq__31844_32173 = G__32178;
chunk__31845_32174 = G__32179;
count__31846_32175 = G__32180;
i__31847_32176 = G__32181;
continue;
} else {
var temp__5720__auto___32182 = cljs.core.seq(seq__31844_32173);
if(temp__5720__auto___32182){
var seq__31844_32183__$1 = temp__5720__auto___32182;
if(cljs.core.chunked_seq_QMARK_(seq__31844_32183__$1)){
var c__4550__auto___32184 = cljs.core.chunk_first(seq__31844_32183__$1);
var G__32189 = cljs.core.chunk_rest(seq__31844_32183__$1);
var G__32190 = c__4550__auto___32184;
var G__32191 = cljs.core.count(c__4550__auto___32184);
var G__32192 = (0);
seq__31844_32173 = G__32189;
chunk__31845_32174 = G__32190;
count__31846_32175 = G__32191;
i__31847_32176 = G__32192;
continue;
} else {
var f_32193 = cljs.core.first(seq__31844_32183__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_32193], 0));


var G__32196 = cljs.core.next(seq__31844_32183__$1);
var G__32197 = null;
var G__32198 = (0);
var G__32199 = (0);
seq__31844_32173 = G__32196;
chunk__31845_32174 = G__32197;
count__31846_32175 = G__32198;
i__31847_32176 = G__32199;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32204 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_32204], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_32204)))?cljs.core.second(arglists_32204):arglists_32204)], 0));
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
var seq__31861_32212 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31862_32213 = null;
var count__31863_32214 = (0);
var i__31864_32215 = (0);
while(true){
if((i__31864_32215 < count__31863_32214)){
var vec__31879_32218 = chunk__31862_32213.cljs$core$IIndexed$_nth$arity$2(null,i__31864_32215);
var name_32219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31879_32218,(0),null);
var map__31882_32220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31879_32218,(1),null);
var map__31882_32221__$1 = (((((!((map__31882_32220 == null))))?(((((map__31882_32220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31882_32220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31882_32220):map__31882_32220);
var doc_32222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31882_32221__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31882_32221__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_32219], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_32223], 0));

if(cljs.core.truth_(doc_32222)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_32222], 0));
} else {
}


var G__32229 = seq__31861_32212;
var G__32230 = chunk__31862_32213;
var G__32231 = count__31863_32214;
var G__32232 = (i__31864_32215 + (1));
seq__31861_32212 = G__32229;
chunk__31862_32213 = G__32230;
count__31863_32214 = G__32231;
i__31864_32215 = G__32232;
continue;
} else {
var temp__5720__auto___32233 = cljs.core.seq(seq__31861_32212);
if(temp__5720__auto___32233){
var seq__31861_32234__$1 = temp__5720__auto___32233;
if(cljs.core.chunked_seq_QMARK_(seq__31861_32234__$1)){
var c__4550__auto___32237 = cljs.core.chunk_first(seq__31861_32234__$1);
var G__32238 = cljs.core.chunk_rest(seq__31861_32234__$1);
var G__32239 = c__4550__auto___32237;
var G__32240 = cljs.core.count(c__4550__auto___32237);
var G__32241 = (0);
seq__31861_32212 = G__32238;
chunk__31862_32213 = G__32239;
count__31863_32214 = G__32240;
i__31864_32215 = G__32241;
continue;
} else {
var vec__31893_32243 = cljs.core.first(seq__31861_32234__$1);
var name_32244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31893_32243,(0),null);
var map__31896_32245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31893_32243,(1),null);
var map__31896_32246__$1 = (((((!((map__31896_32245 == null))))?(((((map__31896_32245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31896_32245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31896_32245):map__31896_32245);
var doc_32247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31896_32246__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31896_32246__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_32244], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_32248], 0));

if(cljs.core.truth_(doc_32247)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_32247], 0));
} else {
}


var G__32249 = cljs.core.next(seq__31861_32234__$1);
var G__32250 = null;
var G__32251 = (0);
var G__32252 = (0);
seq__31861_32212 = G__32249;
chunk__31862_32213 = G__32250;
count__31863_32214 = G__32251;
i__31864_32215 = G__32252;
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

var seq__31902 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31903 = null;
var count__31904 = (0);
var i__31905 = (0);
while(true){
if((i__31905 < count__31904)){
var role = chunk__31903.cljs$core$IIndexed$_nth$arity$2(null,i__31905);
var temp__5720__auto___32256__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___32256__$1)){
var spec_32257 = temp__5720__auto___32256__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_32257)], 0));
} else {
}


var G__32258 = seq__31902;
var G__32259 = chunk__31903;
var G__32260 = count__31904;
var G__32261 = (i__31905 + (1));
seq__31902 = G__32258;
chunk__31903 = G__32259;
count__31904 = G__32260;
i__31905 = G__32261;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__31902);
if(temp__5720__auto____$1){
var seq__31902__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31902__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__31902__$1);
var G__32262 = cljs.core.chunk_rest(seq__31902__$1);
var G__32263 = c__4550__auto__;
var G__32264 = cljs.core.count(c__4550__auto__);
var G__32265 = (0);
seq__31902 = G__32262;
chunk__31903 = G__32263;
count__31904 = G__32264;
i__31905 = G__32265;
continue;
} else {
var role = cljs.core.first(seq__31902__$1);
var temp__5720__auto___32266__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___32266__$2)){
var spec_32267 = temp__5720__auto___32266__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_32267)], 0));
} else {
}


var G__32268 = cljs.core.next(seq__31902__$1);
var G__32269 = null;
var G__32270 = (0);
var G__32271 = (0);
seq__31902 = G__32268;
chunk__31903 = G__32269;
count__31904 = G__32270;
i__31905 = G__32271;
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
var G__32279 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__32280 = cljs.core.ex_cause(t);
via = G__32279;
t = G__32280;
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
var map__32052 = datafied_throwable;
var map__32052__$1 = (((((!((map__32052 == null))))?(((((map__32052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32052):map__32052);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32052__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32052__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32052__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__32053 = cljs.core.last(via);
var map__32053__$1 = (((((!((map__32053 == null))))?(((((map__32053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32053):map__32053);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32053__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32053__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32053__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__32054 = data;
var map__32054__$1 = (((((!((map__32054 == null))))?(((((map__32054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32054):map__32054);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32054__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32054__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32054__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__32055 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__32055__$1 = (((((!((map__32055 == null))))?(((((map__32055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32055):map__32055);
var top_data = map__32055__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32055__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__32060 = phase;
var G__32060__$1 = (((G__32060 instanceof cljs.core.Keyword))?G__32060.fqn:null);
switch (G__32060__$1) {
case "read-source":
var map__32062 = data;
var map__32062__$1 = (((((!((map__32062 == null))))?(((((map__32062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32062):map__32062);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32062__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32062__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__32064 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__32064__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32064,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32064);
var G__32064__$2 = (cljs.core.truth_((function (){var fexpr__32066 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__32066.cljs$core$IFn$_invoke$arity$1 ? fexpr__32066.cljs$core$IFn$_invoke$arity$1(source) : fexpr__32066.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__32064__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32064__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32064__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32064__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__32067 = top_data;
var G__32067__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32067,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32067);
var G__32067__$2 = (cljs.core.truth_((function (){var fexpr__32069 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__32069.cljs$core$IFn$_invoke$arity$1 ? fexpr__32069.cljs$core$IFn$_invoke$arity$1(source) : fexpr__32069.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__32067__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32067__$1);
var G__32067__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32067__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32067__$2);
var G__32067__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32067__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32067__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32067__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32067__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__32071 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32071,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32071,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32071,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32071,(3),null);
var G__32074 = top_data;
var G__32074__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32074,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__32074);
var G__32074__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32074__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__32074__$1);
var G__32074__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32074__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__32074__$2);
var G__32074__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32074__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32074__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32074__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32074__$4;
}

break;
case "execution":
var vec__32076 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32076,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32076,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32076,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32076,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__32076,source__$1,method,file,line,G__32060,G__32060__$1,map__32052,map__32052__$1,via,trace,phase,map__32053,map__32053__$1,type,message,data,map__32054,map__32054__$1,problems,fn,caller,map__32055,map__32055__$1,top_data,source){
return (function (p1__32051_SHARP_){
var or__4131__auto__ = (p1__32051_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__32080 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__32080.cljs$core$IFn$_invoke$arity$1 ? fexpr__32080.cljs$core$IFn$_invoke$arity$1(p1__32051_SHARP_) : fexpr__32080.call(null,p1__32051_SHARP_));
}
});})(vec__32076,source__$1,method,file,line,G__32060,G__32060__$1,map__32052,map__32052__$1,via,trace,phase,map__32053,map__32053__$1,type,message,data,map__32054,map__32054__$1,problems,fn,caller,map__32055,map__32055__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__32081 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__32081__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32081,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__32081);
var G__32081__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32081__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32081__$1);
var G__32081__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32081__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__32081__$2);
var G__32081__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32081__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__32081__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32081__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32081__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32060__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__32092){
var map__32093 = p__32092;
var map__32093__$1 = (((((!((map__32093 == null))))?(((((map__32093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32093):map__32093);
var triage_data = map__32093__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32093__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32093__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32093__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32093__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32093__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32093__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32093__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32093__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__32098 = phase;
var G__32098__$1 = (((G__32098 instanceof cljs.core.Keyword))?G__32098.fqn:null);
switch (G__32098__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__32099 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__32100 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32101 = loc;
var G__32102 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32103_32316 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32104_32317 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32105_32318 = true;
var _STAR_print_fn_STAR__temp_val__32106_32319 = ((function (_STAR_print_newline_STAR__orig_val__32103_32316,_STAR_print_fn_STAR__orig_val__32104_32317,_STAR_print_newline_STAR__temp_val__32105_32318,sb__4661__auto__,G__32099,G__32100,G__32101,G__32098,G__32098__$1,loc,class_name,simple_class,cause_type,format,map__32093,map__32093__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__32103_32316,_STAR_print_fn_STAR__orig_val__32104_32317,_STAR_print_newline_STAR__temp_val__32105_32318,sb__4661__auto__,G__32099,G__32100,G__32101,G__32098,G__32098__$1,loc,class_name,simple_class,cause_type,format,map__32093,map__32093__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32105_32318;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32106_32319;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__32103_32316,_STAR_print_fn_STAR__orig_val__32104_32317,_STAR_print_newline_STAR__temp_val__32105_32318,_STAR_print_fn_STAR__temp_val__32106_32319,sb__4661__auto__,G__32099,G__32100,G__32101,G__32098,G__32098__$1,loc,class_name,simple_class,cause_type,format,map__32093,map__32093__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__32103_32316,_STAR_print_fn_STAR__orig_val__32104_32317,_STAR_print_newline_STAR__temp_val__32105_32318,_STAR_print_fn_STAR__temp_val__32106_32319,sb__4661__auto__,G__32099,G__32100,G__32101,G__32098,G__32098__$1,loc,class_name,simple_class,cause_type,format,map__32093,map__32093__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__32090_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__32090_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__32103_32316,_STAR_print_fn_STAR__orig_val__32104_32317,_STAR_print_newline_STAR__temp_val__32105_32318,_STAR_print_fn_STAR__temp_val__32106_32319,sb__4661__auto__,G__32099,G__32100,G__32101,G__32098,G__32098__$1,loc,class_name,simple_class,cause_type,format,map__32093,map__32093__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__32103_32316,_STAR_print_fn_STAR__orig_val__32104_32317,_STAR_print_newline_STAR__temp_val__32105_32318,_STAR_print_fn_STAR__temp_val__32106_32319,sb__4661__auto__,G__32099,G__32100,G__32101,G__32098,G__32098__$1,loc,class_name,simple_class,cause_type,format,map__32093,map__32093__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32104_32317;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32103_32316;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__32099,G__32100,G__32101,G__32102) : format.call(null,G__32099,G__32100,G__32101,G__32102));

break;
case "macroexpansion":
var G__32109 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__32110 = cause_type;
var G__32111 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32112 = loc;
var G__32113 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32109,G__32110,G__32111,G__32112,G__32113) : format.call(null,G__32109,G__32110,G__32111,G__32112,G__32113));

break;
case "compile-syntax-check":
var G__32115 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__32116 = cause_type;
var G__32117 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32118 = loc;
var G__32119 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32115,G__32116,G__32117,G__32118,G__32119) : format.call(null,G__32115,G__32116,G__32117,G__32118,G__32119));

break;
case "compilation":
var G__32120 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__32121 = cause_type;
var G__32122 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32123 = loc;
var G__32124 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32120,G__32121,G__32122,G__32123,G__32124) : format.call(null,G__32120,G__32121,G__32122,G__32123,G__32124));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__32125 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__32126 = symbol;
var G__32127 = loc;
var G__32128 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32130_32335 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32131_32336 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32132_32337 = true;
var _STAR_print_fn_STAR__temp_val__32133_32338 = ((function (_STAR_print_newline_STAR__orig_val__32130_32335,_STAR_print_fn_STAR__orig_val__32131_32336,_STAR_print_newline_STAR__temp_val__32132_32337,sb__4661__auto__,G__32125,G__32126,G__32127,G__32098,G__32098__$1,loc,class_name,simple_class,cause_type,format,map__32093,map__32093__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__32130_32335,_STAR_print_fn_STAR__orig_val__32131_32336,_STAR_print_newline_STAR__temp_val__32132_32337,sb__4661__auto__,G__32125,G__32126,G__32127,G__32098,G__32098__$1,loc,class_name,simple_class,cause_type,format,map__32093,map__32093__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32132_32337;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32133_32338;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__32130_32335,_STAR_print_fn_STAR__orig_val__32131_32336,_STAR_print_newline_STAR__temp_val__32132_32337,_STAR_print_fn_STAR__temp_val__32133_32338,sb__4661__auto__,G__32125,G__32126,G__32127,G__32098,G__32098__$1,loc,class_name,simple_class,cause_type,format,map__32093,map__32093__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__32130_32335,_STAR_print_fn_STAR__orig_val__32131_32336,_STAR_print_newline_STAR__temp_val__32132_32337,_STAR_print_fn_STAR__temp_val__32133_32338,sb__4661__auto__,G__32125,G__32126,G__32127,G__32098,G__32098__$1,loc,class_name,simple_class,cause_type,format,map__32093,map__32093__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__32091_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__32091_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__32130_32335,_STAR_print_fn_STAR__orig_val__32131_32336,_STAR_print_newline_STAR__temp_val__32132_32337,_STAR_print_fn_STAR__temp_val__32133_32338,sb__4661__auto__,G__32125,G__32126,G__32127,G__32098,G__32098__$1,loc,class_name,simple_class,cause_type,format,map__32093,map__32093__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__32130_32335,_STAR_print_fn_STAR__orig_val__32131_32336,_STAR_print_newline_STAR__temp_val__32132_32337,_STAR_print_fn_STAR__temp_val__32133_32338,sb__4661__auto__,G__32125,G__32126,G__32127,G__32098,G__32098__$1,loc,class_name,simple_class,cause_type,format,map__32093,map__32093__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32131_32336;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32130_32335;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__32125,G__32126,G__32127,G__32128) : format.call(null,G__32125,G__32126,G__32127,G__32128));
} else {
var G__32136 = "Execution error%s at %s(%s).\n%s\n";
var G__32137 = cause_type;
var G__32138 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32139 = loc;
var G__32140 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32136,G__32137,G__32138,G__32139,G__32140) : format.call(null,G__32136,G__32137,G__32138,G__32139,G__32140));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32098__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
