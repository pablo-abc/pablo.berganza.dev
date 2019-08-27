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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__34963){
var vec__34965 = p__34963;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34965,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34965,(1),null);
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
var vec__34974 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34974,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34974,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34974,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__34986 = arguments.length;
switch (G__34986) {
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

var G__35011_35169 = clojure.data.equality_partition;
var G__35012_35170 = "null";
var G__35013_35171 = ((function (G__35011_35169,G__35012_35170){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__35011_35169,G__35012_35170))
;
goog.object.set(G__35011_35169,G__35012_35170,G__35013_35171);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__35020_35172 = clojure.data.equality_partition;
var G__35021_35173 = "string";
var G__35022_35174 = ((function (G__35020_35172,G__35021_35173){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__35020_35172,G__35021_35173))
;
goog.object.set(G__35020_35172,G__35021_35173,G__35022_35174);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__35027_35175 = clojure.data.equality_partition;
var G__35028_35176 = "number";
var G__35029_35177 = ((function (G__35027_35175,G__35028_35176){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__35027_35175,G__35028_35176))
;
goog.object.set(G__35027_35175,G__35028_35176,G__35029_35177);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__35035_35178 = clojure.data.equality_partition;
var G__35036_35179 = "array";
var G__35037_35180 = ((function (G__35035_35178,G__35036_35179){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__35035_35178,G__35036_35179))
;
goog.object.set(G__35035_35178,G__35036_35179,G__35037_35180);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__35040_35181 = clojure.data.equality_partition;
var G__35041_35182 = "function";
var G__35042_35183 = ((function (G__35040_35181,G__35041_35182){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__35040_35181,G__35041_35182))
;
goog.object.set(G__35040_35181,G__35041_35182,G__35042_35183);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__35043_35184 = clojure.data.equality_partition;
var G__35044_35185 = "boolean";
var G__35045_35186 = ((function (G__35043_35184,G__35044_35185){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__35043_35184,G__35044_35185))
;
goog.object.set(G__35043_35184,G__35044_35185,G__35045_35186);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__35046_35187 = clojure.data.equality_partition;
var G__35047_35188 = "_";
var G__35048_35189 = ((function (G__35046_35187,G__35047_35188){
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
});})(G__35046_35187,G__35047_35188))
;
goog.object.set(G__35046_35187,G__35047_35188,G__35048_35189);
goog.object.set(clojure.data.Diff,"null",true);

var G__35053_35194 = clojure.data.diff_similar;
var G__35054_35195 = "null";
var G__35055_35196 = ((function (G__35053_35194,G__35054_35195){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__35053_35194,G__35054_35195))
;
goog.object.set(G__35053_35194,G__35054_35195,G__35055_35196);

goog.object.set(clojure.data.Diff,"string",true);

var G__35058_35198 = clojure.data.diff_similar;
var G__35059_35199 = "string";
var G__35060_35200 = ((function (G__35058_35198,G__35059_35199){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__35058_35198,G__35059_35199))
;
goog.object.set(G__35058_35198,G__35059_35199,G__35060_35200);

goog.object.set(clojure.data.Diff,"number",true);

var G__35061_35202 = clojure.data.diff_similar;
var G__35062_35203 = "number";
var G__35063_35204 = ((function (G__35061_35202,G__35062_35203){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__35061_35202,G__35062_35203))
;
goog.object.set(G__35061_35202,G__35062_35203,G__35063_35204);

goog.object.set(clojure.data.Diff,"array",true);

var G__35069_35206 = clojure.data.diff_similar;
var G__35070_35207 = "array";
var G__35071_35208 = ((function (G__35069_35206,G__35070_35207){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__35069_35206,G__35070_35207))
;
goog.object.set(G__35069_35206,G__35070_35207,G__35071_35208);

goog.object.set(clojure.data.Diff,"function",true);

var G__35082_35209 = clojure.data.diff_similar;
var G__35083_35210 = "function";
var G__35084_35211 = ((function (G__35082_35209,G__35083_35210){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__35082_35209,G__35083_35210))
;
goog.object.set(G__35082_35209,G__35083_35210,G__35084_35211);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__35088_35212 = clojure.data.diff_similar;
var G__35089_35213 = "boolean";
var G__35090_35214 = ((function (G__35088_35212,G__35089_35213){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__35088_35212,G__35089_35213))
;
goog.object.set(G__35088_35212,G__35089_35213,G__35090_35214);

goog.object.set(clojure.data.Diff,"_",true);

var G__35097_35215 = clojure.data.diff_similar;
var G__35098_35216 = "_";
var G__35099_35217 = ((function (G__35097_35215,G__35098_35216){
return (function (a,b){
var fexpr__35122 = (function (){var G__35123 = clojure.data.equality_partition(a);
var G__35123__$1 = (((G__35123 instanceof cljs.core.Keyword))?G__35123.fqn:null);
switch (G__35123__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35123__$1)].join('')));

}
})();
return (fexpr__35122.cljs$core$IFn$_invoke$arity$2 ? fexpr__35122.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__35122.call(null,a,b));
});})(G__35097_35215,G__35098_35216))
;
goog.object.set(G__35097_35215,G__35098_35216,G__35099_35217);
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
