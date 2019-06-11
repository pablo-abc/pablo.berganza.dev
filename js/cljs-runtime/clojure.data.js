goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__27913){
var vec__27914 = p__27913;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27914,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27914,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__27921 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27921,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27921,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27921,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__27933 = arguments.length;
switch (G__27933) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__27960_28054 = clojure.data.equality_partition;
var G__27961_28055 = "null";
var G__27962_28056 = ((function (G__27960_28054,G__27961_28055){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__27960_28054,G__27961_28055))
;
goog.object.set(G__27960_28054,G__27961_28055,G__27962_28056);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__27965_28057 = clojure.data.equality_partition;
var G__27966_28058 = "string";
var G__27967_28059 = ((function (G__27965_28057,G__27966_28058){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__27965_28057,G__27966_28058))
;
goog.object.set(G__27965_28057,G__27966_28058,G__27967_28059);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__27972_28060 = clojure.data.equality_partition;
var G__27973_28061 = "number";
var G__27974_28062 = ((function (G__27972_28060,G__27973_28061){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__27972_28060,G__27973_28061))
;
goog.object.set(G__27972_28060,G__27973_28061,G__27974_28062);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__27978_28063 = clojure.data.equality_partition;
var G__27979_28064 = "array";
var G__27980_28065 = ((function (G__27978_28063,G__27979_28064){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__27978_28063,G__27979_28064))
;
goog.object.set(G__27978_28063,G__27979_28064,G__27980_28065);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__27987_28068 = clojure.data.equality_partition;
var G__27988_28069 = "function";
var G__27989_28070 = ((function (G__27987_28068,G__27988_28069){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__27987_28068,G__27988_28069))
;
goog.object.set(G__27987_28068,G__27988_28069,G__27989_28070);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__27996_28071 = clojure.data.equality_partition;
var G__27997_28072 = "boolean";
var G__27998_28073 = ((function (G__27996_28071,G__27997_28072){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__27996_28071,G__27997_28072))
;
goog.object.set(G__27996_28071,G__27997_28072,G__27998_28073);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__28003_28074 = clojure.data.equality_partition;
var G__28004_28075 = "_";
var G__28005_28076 = ((function (G__28003_28074,G__28004_28075){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__28003_28074,G__28004_28075))
;
goog.object.set(G__28003_28074,G__28004_28075,G__28005_28076);
goog.object.set(clojure.data.Diff,"null",true);

var G__28011_28083 = clojure.data.diff_similar;
var G__28012_28084 = "null";
var G__28013_28085 = ((function (G__28011_28083,G__28012_28084){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__28011_28083,G__28012_28084))
;
goog.object.set(G__28011_28083,G__28012_28084,G__28013_28085);

goog.object.set(clojure.data.Diff,"string",true);

var G__28014_28086 = clojure.data.diff_similar;
var G__28015_28087 = "string";
var G__28016_28088 = ((function (G__28014_28086,G__28015_28087){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__28014_28086,G__28015_28087))
;
goog.object.set(G__28014_28086,G__28015_28087,G__28016_28088);

goog.object.set(clojure.data.Diff,"number",true);

var G__28017_28089 = clojure.data.diff_similar;
var G__28018_28090 = "number";
var G__28019_28091 = ((function (G__28017_28089,G__28018_28090){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__28017_28089,G__28018_28090))
;
goog.object.set(G__28017_28089,G__28018_28090,G__28019_28091);

goog.object.set(clojure.data.Diff,"array",true);

var G__28020_28092 = clojure.data.diff_similar;
var G__28021_28093 = "array";
var G__28022_28094 = ((function (G__28020_28092,G__28021_28093){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__28020_28092,G__28021_28093))
;
goog.object.set(G__28020_28092,G__28021_28093,G__28022_28094);

goog.object.set(clojure.data.Diff,"function",true);

var G__28023_28099 = clojure.data.diff_similar;
var G__28024_28100 = "function";
var G__28025_28101 = ((function (G__28023_28099,G__28024_28100){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__28023_28099,G__28024_28100))
;
goog.object.set(G__28023_28099,G__28024_28100,G__28025_28101);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__28026_28104 = clojure.data.diff_similar;
var G__28027_28105 = "boolean";
var G__28028_28106 = ((function (G__28026_28104,G__28027_28105){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__28026_28104,G__28027_28105))
;
goog.object.set(G__28026_28104,G__28027_28105,G__28028_28106);

goog.object.set(clojure.data.Diff,"_",true);

var G__28029_28108 = clojure.data.diff_similar;
var G__28030_28109 = "_";
var G__28031_28110 = ((function (G__28029_28108,G__28030_28109){
return (function (a,b){
var fexpr__28036 = (function (){var G__28037 = clojure.data.equality_partition(a);
var G__28037__$1 = (((G__28037 instanceof cljs.core.Keyword))?G__28037.fqn:null);
switch (G__28037__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28037__$1)].join('')));

}
})();
return (fexpr__28036.cljs$core$IFn$_invoke$arity$2 ? fexpr__28036.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__28036.call(null,a,b));
});})(G__28029_28108,G__28030_28109))
;
goog.object.set(G__28029_28108,G__28030_28109,G__28031_28110);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map