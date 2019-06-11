goog.provide('cljs.spec.alpha');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('cljs.spec.gen.alpha');
goog.require('clojure.string');
cljs.spec.alpha.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec.alpha._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec.alpha._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.alpha.Spec = function(){};

cljs.spec.alpha.conform_STAR_ = (function cljs$spec$alpha$conform_STAR_(spec,x){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2 == null)))))){
return spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__4433__auto__ = (((spec == null))?null:spec);
var m__4434__auto__ = (cljs.spec.alpha.conform_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(spec,x) : m__4434__auto__.call(null,spec,x));
} else {
var m__4431__auto__ = (cljs.spec.alpha.conform_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(spec,x) : m__4431__auto__.call(null,spec,x));
} else {
throw cljs.core.missing_protocol("Spec.conform*",spec);
}
}
}
});

cljs.spec.alpha.unform_STAR_ = (function cljs$spec$alpha$unform_STAR_(spec,y){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2 == null)))))){
return spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__4433__auto__ = (((spec == null))?null:spec);
var m__4434__auto__ = (cljs.spec.alpha.unform_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(spec,y) : m__4434__auto__.call(null,spec,y));
} else {
var m__4431__auto__ = (cljs.spec.alpha.unform_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(spec,y) : m__4431__auto__.call(null,spec,y));
} else {
throw cljs.core.missing_protocol("Spec.unform*",spec);
}
}
}
});

cljs.spec.alpha.explain_STAR_ = (function cljs$spec$alpha$explain_STAR_(spec,path,via,in$,x){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5 == null)))))){
return spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__4433__auto__ = (((spec == null))?null:spec);
var m__4434__auto__ = (cljs.spec.alpha.explain_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__4434__auto__.call(null,spec,path,via,in$,x));
} else {
var m__4431__auto__ = (cljs.spec.alpha.explain_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__4431__auto__.call(null,spec,path,via,in$,x));
} else {
throw cljs.core.missing_protocol("Spec.explain*",spec);
}
}
}
});

cljs.spec.alpha.gen_STAR_ = (function cljs$spec$alpha$gen_STAR_(spec,overrides,path,rmap){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4 == null)))))){
return spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__4433__auto__ = (((spec == null))?null:spec);
var m__4434__auto__ = (cljs.spec.alpha.gen_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__4434__auto__.call(null,spec,overrides,path,rmap));
} else {
var m__4431__auto__ = (cljs.spec.alpha.gen_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__4431__auto__.call(null,spec,overrides,path,rmap));
} else {
throw cljs.core.missing_protocol("Spec.gen*",spec);
}
}
}
});

cljs.spec.alpha.with_gen_STAR_ = (function cljs$spec$alpha$with_gen_STAR_(spec,gfn){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 == null)))))){
return spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__4433__auto__ = (((spec == null))?null:spec);
var m__4434__auto__ = (cljs.spec.alpha.with_gen_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__4434__auto__.call(null,spec,gfn));
} else {
var m__4431__auto__ = (cljs.spec.alpha.with_gen_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__4431__auto__.call(null,spec,gfn));
} else {
throw cljs.core.missing_protocol("Spec.with-gen*",spec);
}
}
}
});

cljs.spec.alpha.describe_STAR_ = (function cljs$spec$alpha$describe_STAR_(spec){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1 == null)))))){
return spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1(spec);
} else {
var x__4433__auto__ = (((spec == null))?null:spec);
var m__4434__auto__ = (cljs.spec.alpha.describe_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(spec) : m__4434__auto__.call(null,spec));
} else {
var m__4431__auto__ = (cljs.spec.alpha.describe_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(spec) : m__4431__auto__.call(null,spec));
} else {
throw cljs.core.missing_protocol("Spec.describe*",spec);
}
}
}
});

if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.registry_ref !== 'undefined')){
} else {
cljs.spec.alpha.registry_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.alpha.deep_resolve = (function cljs$spec$alpha$deep_resolve(reg,k){
var spec = k;
while(true){
if(cljs.core.ident_QMARK_(spec)){
var G__25403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,spec);
spec = G__25403;
continue;
} else {
return spec;
}
break;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve = (function cljs$spec$alpha$reg_resolve(k){
if(cljs.core.ident_QMARK_(k)){
var reg = cljs.core.deref(cljs.spec.alpha.registry_ref);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,k);
if((!(cljs.core.ident_QMARK_(spec)))){
return spec;
} else {
return cljs.spec.alpha.deep_resolve(reg,spec);
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve_BANG_ = (function cljs$spec$alpha$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_(k)){
var or__4131__auto__ = cljs.spec.alpha.reg_resolve(k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.alpha.spec_QMARK_ = (function cljs$spec$alpha$spec_QMARK_(x){
if((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$spec$alpha$Spec$))))?true:false):false)){
return x;
} else {
return null;
}
});
/**
 * returns x if x is a (cljs.spec.alpha) regex op, else logical false
 */
cljs.spec.alpha.regex_QMARK_ = (function cljs$spec$alpha$regex_QMARK_(x){
var and__4120__auto__ = new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__4120__auto__)){
return x;
} else {
return and__4120__auto__;
}
});
cljs.spec.alpha.with_name = (function cljs$spec$alpha$with_name(spec,name){
if(cljs.core.ident_QMARK_(spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570),name);
} else {
if((((!((spec == null))))?(((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$))))?true:false):false)){
return cljs.core.with_meta(spec,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(spec),new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570),name));
} else {
return null;
}
}
}
});
cljs.spec.alpha.spec_name = (function cljs$spec$alpha$spec_name(spec){
if(cljs.core.ident_QMARK_(spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec))){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(spec);
} else {
if((((!((spec == null))))?(((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$))))?true:false):false)){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(spec));
} else {
return null;
}
}
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.alpha.maybe_spec = (function cljs$spec$alpha$maybe_spec(spec_or_k){
var s = (function (){var or__4131__auto__ = (function (){var and__4120__auto__ = cljs.core.ident_QMARK_(spec_or_k);
if(and__4120__auto__){
return cljs.spec.alpha.reg_resolve(spec_or_k);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.spec.alpha.spec_QMARK_(spec_or_k);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = cljs.spec.alpha.regex_QMARK_(spec_or_k);
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(s))){
return cljs.spec.alpha.with_name(cljs.spec.alpha.regex_spec_impl(s,null),cljs.spec.alpha.spec_name(s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.alpha.the_spec = (function cljs$spec$alpha$the_spec(spec_or_k){
var or__4131__auto__ = cljs.spec.alpha.maybe_spec(spec_or_k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.ident_QMARK_(spec_or_k)){
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.alpha.fn_sym = (function cljs$spec$alpha$fn_sym(f_n){
if(clojure.string.blank_QMARK_(f_n)){
return null;
} else {
var xs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.demunge,clojure.string.split.cljs$core$IFn$_invoke$arity$2(f_n,"$"));
if(((((2) <= cljs.core.count(xs))) && (cljs.core.every_QMARK_(((function (xs){
return (function (p1__23804_SHARP_){
return (!(clojure.string.blank_QMARK_(p1__23804_SHARP_)));
});})(xs))
,xs)))){
var vec__23811 = (function (){var fexpr__23814 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast,cljs.core.last);
return (fexpr__23814.cljs$core$IFn$_invoke$arity$1 ? fexpr__23814.cljs$core$IFn$_invoke$arity$1(xs) : fexpr__23814.call(null,xs));
})();
var xs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23811,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23811,(1),null);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",xs__$1)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''));
} else {
return null;
}
}
});

/**
 * @interface
 */
cljs.spec.alpha.Specize = function(){};

cljs.spec.alpha.specize_STAR_ = (function cljs$spec$alpha$specize_STAR_(var_args){
var G__23818 = arguments.length;
switch (G__23818) {
case 1:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$1 == null)))))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.spec.alpha.specize_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Specize.specize*",_);
}
}
}
});

cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,form){
if((((!((_ == null)))) && ((!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$2 == null)))))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$2(_,form);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(_,form) : m__4434__auto__.call(null,_,form));
} else {
var m__4431__auto__ = (cljs.spec.alpha.specize_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(_,form) : m__4431__auto__.call(null,_,form));
} else {
throw cljs.core.missing_protocol("Specize.specize*",_);
}
}
}
});

cljs.spec.alpha.specize_STAR_.cljs$lang$maxFixedArity = 2;


cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (k){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(k__$1));
});

cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (k,_){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(k__$1));
});

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(s__$1));
});

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(s__$1));
});

cljs.core.PersistentHashSet.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(s__$1,s__$1,null,null);
});

cljs.core.PersistentHashSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,form){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,s__$1,null,null);
});

cljs.core.PersistentTreeSet.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(s__$1,s__$1,null,null);
});

cljs.core.PersistentTreeSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,form){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,s__$1,null,null);
});

goog.object.set(cljs.spec.alpha.Specize,"_",true);

var G__23842_25418 = cljs.spec.alpha.specize_STAR_;
var G__23843_25419 = "_";
var G__23844_25420 = ((function (G__23842_25418,G__23843_25419){
return (function() {
var G__25421 = null;
var G__25421__1 = (function (o){
var temp__5718__auto__ = (function (){var and__4120__auto__ = cljs.core.fn_QMARK_(o);
if(and__4120__auto__){
return cljs.spec.alpha.fn_sym(o.name);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var f_n = temp__5718__auto__;
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(f_n,o,null,null);
} else {
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818),o,null,null);
}
});
var G__25421__2 = (function (o,form){
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,o,null,null);
});
G__25421 = function(o,form){
switch(arguments.length){
case 1:
return G__25421__1.call(this,o);
case 2:
return G__25421__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25421.cljs$core$IFn$_invoke$arity$1 = G__25421__1;
G__25421.cljs$core$IFn$_invoke$arity$2 = G__25421__2;
return G__25421;
})()
;})(G__23842_25418,G__23843_25419))
;
goog.object.set(G__23842_25418,G__23843_25419,G__23844_25420);
cljs.spec.alpha.specize = (function cljs$spec$alpha$specize(var_args){
var G__23849 = arguments.length;
switch (G__23849) {
case 1:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1 = (function (s){
var or__4131__auto__ = cljs.spec.alpha.spec_QMARK_(s);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(s);
}
});

cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2 = (function (s,form){
var or__4131__auto__ = cljs.spec.alpha.spec_QMARK_(s);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2(s,form);
}
});

cljs.spec.alpha.specize.cljs$lang$maxFixedArity = 2;

/**
 * tests the validity of a conform return value
 */
cljs.spec.alpha.invalid_QMARK_ = (function cljs$spec$alpha$invalid_QMARK_(ret){
return cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119),ret);
});
/**
 * Given a spec and a value, returns :cljs.spec.alpha/invalid if value does
 *   not match spec, else the (possibly destructured) value.
 */
cljs.spec.alpha.conform = (function cljs$spec$alpha$conform(spec,x){
return cljs.spec.alpha.conform_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.alpha.unform = (function cljs$spec$alpha$unform(spec,x){
return cljs.spec.alpha.unform_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.alpha.form = (function cljs$spec$alpha$form(spec){
return cljs.spec.alpha.describe_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec));
});
cljs.spec.alpha.abbrev = (function cljs$spec$alpha$abbrev(form){
if(cljs.core.seq_QMARK_(form)){
return clojure.walk.postwalk((function (form__$1){
if(cljs.core.truth_((function (){var and__4120__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__4120__auto__){
return cljs.core.namespace(form__$1);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form__$1));
} else {
if(((cljs.core.seq_QMARK_(form__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first(form__$1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second(form__$1))))){
return cljs.core.last(form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = (form instanceof cljs.core.Symbol);
if(and__4120__auto__){
return cljs.core.namespace(form);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.alpha.describe = (function cljs$spec$alpha$describe(spec){
return cljs.spec.alpha.abbrev(cljs.spec.alpha.form(spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.alpha.with_gen = (function cljs$spec$alpha$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.alpha.reg_resolve(spec);
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec__$1,new cljs.core.Keyword("cljs.spec.alpha","gfn","cljs.spec.alpha/gfn",-593120375),gen_fn);
} else {
return cljs.spec.alpha.with_gen_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec__$1),gen_fn);
}
});
cljs.spec.alpha.explain_data_STAR_ = (function cljs$spec$alpha$explain_data_STAR_(spec,path,via,in$,x){
var temp__5720__auto__ = cljs.spec.alpha.explain_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),path,via,in$,x);
if(cljs.core.truth_(temp__5720__auto__)){
var probs = temp__5720__auto__;
if(cljs.core.empty_QMARK_(probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),probs,new cljs.core.Keyword("cljs.spec.alpha","spec","cljs.spec.alpha/spec",1947137578),spec,new cljs.core.Keyword("cljs.spec.alpha","value","cljs.spec.alpha/value",1974786274),x], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.alpha.explain_data = (function cljs$spec$alpha$explain_data(spec,x){
return cljs.spec.alpha.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__5718__auto__ = cljs.spec.alpha.spec_name(spec);
if(cljs.core.truth_(temp__5718__auto__)){
var name = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Default printer for explain-data. nil indicates a successful validation.
 */
cljs.spec.alpha.explain_printer = (function cljs$spec$alpha$explain_printer(ed){
if(cljs.core.truth_(ed)){
var problems = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__23893_SHARP_){
return (- cljs.core.count(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__23893_SHARP_)));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__23892_SHARP_){
return (- cljs.core.count(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(p1__23892_SHARP_)));
}),new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(ed)));
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23901_25430 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23902_25431 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23903_25432 = true;
var _STAR_print_fn_STAR__temp_val__23904_25433 = ((function (_STAR_print_newline_STAR__orig_val__23901_25430,_STAR_print_fn_STAR__orig_val__23902_25431,_STAR_print_newline_STAR__temp_val__23903_25432,sb__4661__auto__,problems){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__23901_25430,_STAR_print_fn_STAR__orig_val__23902_25431,_STAR_print_newline_STAR__temp_val__23903_25432,sb__4661__auto__,problems))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23903_25432;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23904_25433;

try{var seq__23911_25434 = cljs.core.seq(problems);
var chunk__23912_25435 = null;
var count__23913_25436 = (0);
var i__23914_25437 = (0);
while(true){
if((i__23914_25437 < count__23913_25436)){
var map__24006_25438 = chunk__23912_25435.cljs$core$IIndexed$_nth$arity$2(null,i__23914_25437);
var map__24006_25439__$1 = (((((!((map__24006_25438 == null))))?(((((map__24006_25438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24006_25438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24006_25438):map__24006_25438);
var prob_25440 = map__24006_25439__$1;
var path_25441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24006_25439__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_25442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24006_25439__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_25443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24006_25439__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_25444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24006_25439__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_25445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24006_25439__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_25446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24006_25439__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_25443], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" - failed: "], 0));

if(cljs.core.truth_(reason_25444)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reason_25444], 0));
} else {
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.abbrev(pred_25442)], 0));
}

if(cljs.core.empty_QMARK_(in_25446)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[" in: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in_25446], 0))].join('')], 0));
}

if(cljs.core.empty_QMARK_(path_25441)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[" at: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_25441], 0))].join('')], 0));
}

if(cljs.core.empty_QMARK_(via_25445)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[" spec: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(via_25445)], 0))].join('')], 0));
}

var seq__24016_25447 = cljs.core.seq(prob_25440);
var chunk__24017_25448 = null;
var count__24018_25449 = (0);
var i__24019_25450 = (0);
while(true){
if((i__24019_25450 < count__24018_25449)){
var vec__24043_25451 = chunk__24017_25448.cljs$core$IIndexed$_nth$arity$2(null,i__24019_25450);
var k_25452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24043_25451,(0),null);
var v_25453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24043_25451,(1),null);
if(cljs.core.truth_((function (){var fexpr__24048 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null);
return (fexpr__24048.cljs$core$IFn$_invoke$arity$1 ? fexpr__24048.cljs$core$IFn$_invoke$arity$1(k_25452) : fexpr__24048.call(null,k_25452));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_25452], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_25453], 0));
}


var G__25457 = seq__24016_25447;
var G__25458 = chunk__24017_25448;
var G__25459 = count__24018_25449;
var G__25460 = (i__24019_25450 + (1));
seq__24016_25447 = G__25457;
chunk__24017_25448 = G__25458;
count__24018_25449 = G__25459;
i__24019_25450 = G__25460;
continue;
} else {
var temp__5720__auto___25462 = cljs.core.seq(seq__24016_25447);
if(temp__5720__auto___25462){
var seq__24016_25463__$1 = temp__5720__auto___25462;
if(cljs.core.chunked_seq_QMARK_(seq__24016_25463__$1)){
var c__4550__auto___25464 = cljs.core.chunk_first(seq__24016_25463__$1);
var G__25465 = cljs.core.chunk_rest(seq__24016_25463__$1);
var G__25466 = c__4550__auto___25464;
var G__25467 = cljs.core.count(c__4550__auto___25464);
var G__25468 = (0);
seq__24016_25447 = G__25465;
chunk__24017_25448 = G__25466;
count__24018_25449 = G__25467;
i__24019_25450 = G__25468;
continue;
} else {
var vec__24055_25469 = cljs.core.first(seq__24016_25463__$1);
var k_25470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24055_25469,(0),null);
var v_25471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24055_25469,(1),null);
if(cljs.core.truth_((function (){var fexpr__24063 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null);
return (fexpr__24063.cljs$core$IFn$_invoke$arity$1 ? fexpr__24063.cljs$core$IFn$_invoke$arity$1(k_25470) : fexpr__24063.call(null,k_25470));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_25470], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_25471], 0));
}


var G__25474 = cljs.core.next(seq__24016_25463__$1);
var G__25475 = null;
var G__25476 = (0);
var G__25477 = (0);
seq__24016_25447 = G__25474;
chunk__24017_25448 = G__25475;
count__24018_25449 = G__25476;
i__24019_25450 = G__25477;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();


var G__25478 = seq__23911_25434;
var G__25479 = chunk__23912_25435;
var G__25480 = count__23913_25436;
var G__25481 = (i__23914_25437 + (1));
seq__23911_25434 = G__25478;
chunk__23912_25435 = G__25479;
count__23913_25436 = G__25480;
i__23914_25437 = G__25481;
continue;
} else {
var temp__5720__auto___25482 = cljs.core.seq(seq__23911_25434);
if(temp__5720__auto___25482){
var seq__23911_25483__$1 = temp__5720__auto___25482;
if(cljs.core.chunked_seq_QMARK_(seq__23911_25483__$1)){
var c__4550__auto___25484 = cljs.core.chunk_first(seq__23911_25483__$1);
var G__25485 = cljs.core.chunk_rest(seq__23911_25483__$1);
var G__25486 = c__4550__auto___25484;
var G__25487 = cljs.core.count(c__4550__auto___25484);
var G__25488 = (0);
seq__23911_25434 = G__25485;
chunk__23912_25435 = G__25486;
count__23913_25436 = G__25487;
i__23914_25437 = G__25488;
continue;
} else {
var map__24072_25489 = cljs.core.first(seq__23911_25483__$1);
var map__24072_25490__$1 = (((((!((map__24072_25489 == null))))?(((((map__24072_25489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24072_25489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24072_25489):map__24072_25489);
var prob_25491 = map__24072_25490__$1;
var path_25492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24072_25490__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_25493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24072_25490__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_25494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24072_25490__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_25495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24072_25490__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_25496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24072_25490__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_25497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24072_25490__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_25494], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" - failed: "], 0));

if(cljs.core.truth_(reason_25495)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reason_25495], 0));
} else {
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.abbrev(pred_25493)], 0));
}

if(cljs.core.empty_QMARK_(in_25497)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[" in: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in_25497], 0))].join('')], 0));
}

if(cljs.core.empty_QMARK_(path_25492)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[" at: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_25492], 0))].join('')], 0));
}

if(cljs.core.empty_QMARK_(via_25496)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[" spec: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(via_25496)], 0))].join('')], 0));
}

var seq__24085_25500 = cljs.core.seq(prob_25491);
var chunk__24086_25501 = null;
var count__24087_25502 = (0);
var i__24088_25503 = (0);
while(true){
if((i__24088_25503 < count__24087_25502)){
var vec__24116_25504 = chunk__24086_25501.cljs$core$IIndexed$_nth$arity$2(null,i__24088_25503);
var k_25505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24116_25504,(0),null);
var v_25506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24116_25504,(1),null);
if(cljs.core.truth_((function (){var fexpr__24126 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null);
return (fexpr__24126.cljs$core$IFn$_invoke$arity$1 ? fexpr__24126.cljs$core$IFn$_invoke$arity$1(k_25505) : fexpr__24126.call(null,k_25505));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_25505], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_25506], 0));
}


var G__25507 = seq__24085_25500;
var G__25508 = chunk__24086_25501;
var G__25509 = count__24087_25502;
var G__25510 = (i__24088_25503 + (1));
seq__24085_25500 = G__25507;
chunk__24086_25501 = G__25508;
count__24087_25502 = G__25509;
i__24088_25503 = G__25510;
continue;
} else {
var temp__5720__auto___25514__$1 = cljs.core.seq(seq__24085_25500);
if(temp__5720__auto___25514__$1){
var seq__24085_25515__$1 = temp__5720__auto___25514__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24085_25515__$1)){
var c__4550__auto___25516 = cljs.core.chunk_first(seq__24085_25515__$1);
var G__25517 = cljs.core.chunk_rest(seq__24085_25515__$1);
var G__25518 = c__4550__auto___25516;
var G__25519 = cljs.core.count(c__4550__auto___25516);
var G__25520 = (0);
seq__24085_25500 = G__25517;
chunk__24086_25501 = G__25518;
count__24087_25502 = G__25519;
i__24088_25503 = G__25520;
continue;
} else {
var vec__24135_25521 = cljs.core.first(seq__24085_25515__$1);
var k_25522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24135_25521,(0),null);
var v_25523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24135_25521,(1),null);
if(cljs.core.truth_((function (){var fexpr__24138 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null);
return (fexpr__24138.cljs$core$IFn$_invoke$arity$1 ? fexpr__24138.cljs$core$IFn$_invoke$arity$1(k_25522) : fexpr__24138.call(null,k_25522));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_25522], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_25523], 0));
}


var G__25524 = cljs.core.next(seq__24085_25515__$1);
var G__25525 = null;
var G__25526 = (0);
var G__25527 = (0);
seq__24085_25500 = G__25524;
chunk__24086_25501 = G__25525;
count__24087_25502 = G__25526;
i__24088_25503 = G__25527;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();


var G__25528 = cljs.core.next(seq__23911_25483__$1);
var G__25529 = null;
var G__25530 = (0);
var G__25531 = (0);
seq__23911_25434 = G__25528;
chunk__23912_25435 = G__25529;
count__23913_25436 = G__25530;
i__23914_25437 = G__25531;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23902_25431;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23901_25430;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Success!"], 0));
}
});
cljs.spec.alpha._STAR_explain_out_STAR_ = cljs.spec.alpha.explain_printer;
/**
 * Prints explanation data (per 'explain-data') to *out* using the printer in *explain-out*,
 *  by default explain-printer.
 */
cljs.spec.alpha.explain_out = (function cljs$spec$alpha$explain_out(ed){
return (cljs.spec.alpha._STAR_explain_out_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha._STAR_explain_out_STAR_.cljs$core$IFn$_invoke$arity$1(ed) : cljs.spec.alpha._STAR_explain_out_STAR_.call(null,ed));
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.alpha.explain = (function cljs$spec$alpha$explain(spec,x){
return cljs.spec.alpha.explain_out(cljs.spec.alpha.explain_data(spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.alpha.explain_str = (function cljs$spec$alpha$explain_str(spec,x){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24159_25536 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24160_25537 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24161_25538 = true;
var _STAR_print_fn_STAR__temp_val__24162_25539 = ((function (_STAR_print_newline_STAR__orig_val__24159_25536,_STAR_print_fn_STAR__orig_val__24160_25537,_STAR_print_newline_STAR__temp_val__24161_25538,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__24159_25536,_STAR_print_fn_STAR__orig_val__24160_25537,_STAR_print_newline_STAR__temp_val__24161_25538,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24161_25538;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24162_25539;

try{cljs.spec.alpha.explain(spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24160_25537;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24159_25536;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
cljs.spec.alpha.gensub = (function cljs$spec$alpha$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
var temp__5718__auto__ = (function (){var or__4131__auto__ = (function (){var temp__5720__auto__ = (function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,(function (){var or__4131__auto__ = cljs.spec.alpha.spec_name(spec__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var gfn = temp__5720__auto__;
return (gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.spec.alpha.gen_STAR_(spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var g = temp__5718__auto__;
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (g,temp__5718__auto__,spec__$1){
return (function (p1__24169_SHARP_){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,p1__24169_SHARP_);
});})(g,temp__5718__auto__,spec__$1))
,g,(100)], 0));
} else {
throw (new Error(["Unable to construct gen at: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.abbrev(form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.alpha.gen = (function cljs$spec$alpha$gen(var_args){
var G__24212 = arguments.length;
switch (G__24212) {
case 1:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(spec,null);
});

cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.alpha.gensub(spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","recursion-limit","cljs.spec.alpha/recursion-limit",601284994),cljs.spec.alpha._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.alpha.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.alpha.def_impl = (function cljs$spec$alpha$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.ident_QMARK_(k);
if(and__4120__auto__){
return cljs.core.namespace(k);
} else {
return and__4120__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","k must be namespaced keyword or resolveable symbol","\n","(c/and (ident? k) (namespace k))"].join('')));
}

if((spec == null)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.registry_ref,cljs.core.dissoc,k);
} else {
var spec_25567__$1 = (cljs.core.truth_((function (){var or__4131__auto__ = cljs.spec.alpha.spec_QMARK_(spec);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.spec.alpha.regex_QMARK_(spec);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.alpha.registry_ref),spec);
}
}
})())?spec:cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,spec,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.spec.alpha.registry_ref,cljs.core.assoc,k,cljs.spec.alpha.with_name(spec_25567__$1,k));
}

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.alpha.registry = (function cljs$spec$alpha$registry(){
return cljs.core.deref(cljs.spec.alpha.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.alpha.__GT_sym = (function cljs$spec$alpha$__GT_sym(x){
if(cljs.core.var_QMARK_(x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.alpha.get_spec = (function cljs$spec$alpha$get_spec(k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.registry(),(((k instanceof cljs.core.Keyword))?k:cljs.spec.alpha.__GT_sym(k)));
});
cljs.spec.alpha.macroexpand_check = (function cljs$spec$alpha$macroexpand_check(v,args){
var specs = cljs.spec.alpha.get_spec(v);
var temp__5720__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__5720__auto__)){
var arg_spec = temp__5720__auto__;
if(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform(arg_spec,args))){
var ed = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.explain_data_STAR_(arg_spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__5718__auto__ = cljs.spec.alpha.spec_name(arg_spec);
if(cljs.core.truth_(temp__5718__auto__)){
var name = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec.alpha","args","cljs.spec.alpha/args",1870769783),args);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Call to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.__GT_sym(v))," did not conform to spec."].join(''),ed);
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.alpha.recur_limit_QMARK_ = (function cljs$spec$alpha$recur_limit_QMARK_(rmap,id,path,k){
return (((cljs.core.get.cljs$core$IFn$_invoke$arity$2(rmap,id) > new cljs.core.Keyword("cljs.spec.alpha","recursion-limit","cljs.spec.alpha/recursion-limit",601284994).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_(cljs.core.set(path),k)));
});
cljs.spec.alpha.inck = (function cljs$spec$alpha$inck(m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,((function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.alpha.dt = (function cljs$spec$alpha$dt(var_args){
var G__24252 = arguments.length;
switch (G__24252) {
case 3:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4(pred,x,form,null);
});

cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__5718__auto__ = cljs.spec.alpha.the_spec(pred);
if(cljs.core.truth_(temp__5718__auto__)){
var spec = temp__5718__auto__;
return cljs.spec.alpha.conform(spec,x);
} else {
if(cljs.core.ifn_QMARK_(pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
} else {
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
} else {
throw (new Error([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0))," is not a fn, expected predicate fn"].join('')));
}
}
} else {
return x;
}
});

cljs.spec.alpha.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.valid_QMARK_ = (function cljs$spec$alpha$valid_QMARK_(var_args){
var G__24263 = arguments.length;
switch (G__24263) {
case 2:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
return (!(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform_STAR_(spec__$1,x))));
});

cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2(spec,form);
return (!(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform_STAR_(spec__$1,x))));
});

cljs.spec.alpha.valid_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * internal helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.pvalid_QMARK_ = (function cljs$spec$alpha$pvalid_QMARK_(var_args){
var G__24267 = arguments.length;
switch (G__24267) {
case 2:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return (!(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818)))));
});

cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return (!(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,form))));
});

cljs.spec.alpha.pvalid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.explain_1 = (function cljs$spec$alpha$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.alpha.maybe_spec(pred);
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_(pred__$1))){
return cljs.spec.alpha.explain_STAR_(pred__$1,path,(function (){var temp__5718__auto__ = cljs.spec.alpha.spec_name(pred__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var name = temp__5718__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),form,new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

/**
 * returns a generator for form f, which can be a keyword or a list
 *   starting with 'or or 'and.
 */
cljs.spec.alpha.k_gen = (function cljs$spec$alpha$k_gen(f){
if((f instanceof cljs.core.Keyword)){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.first(f))){
return cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$2((1),cljs.core.rest(f));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first(f))){
return cljs.spec.alpha.and_k_gen(cljs.core.rest(f));
} else {
return null;
}
}
}
});
/**
 * returns a tuple generator made up of generators for a random subset
 *   of min-count (default 0) to all elements in s.
 */
cljs.spec.alpha.or_k_gen = (function cljs$spec$alpha$or_k_gen(var_args){
var G__24292 = arguments.length;
switch (G__24292) {
case 1:
return cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$2((0),s);
});

cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$2 = (function (min_count,s){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([min_count,cljs.core.count(s)], 0)),cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.k_gen,s)], 0))], 0)),(function (p__24296){
var vec__24297 = p__24296;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24297,(0),null);
var gens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24297,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,gens));
})], 0));
});

cljs.spec.alpha.or_k_gen.cljs$lang$maxFixedArity = 2;

/**
 * returns a tuple generator made up of generators for every element
 *   in s.
 */
cljs.spec.alpha.and_k_gen = (function cljs$spec$alpha$and_k_gen(s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.k_gen,s));
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.alpha.map_spec_impl = (function cljs$spec$alpha$map_spec_impl(p__24337){
var map__24338 = p__24337;
var map__24338__$1 = (((((!((map__24338 == null))))?(((((map__24338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24338):map__24338);
var argm = map__24338__$1;
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24338__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24338__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24338__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24338__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24338__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var keys_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24338__$1,new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739));
var opt_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24338__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24338__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24338__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24338__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24338__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24338__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var k__GT_s = cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_keys,opt_keys),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_specs,opt_specs));
var keys__GT_specnames = ((function (k__GT_s,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__24304_SHARP_){
var or__4131__auto__ = (k__GT_s.cljs$core$IFn$_invoke$arity$1 ? k__GT_s.cljs$core$IFn$_invoke$arity$1(p1__24304_SHARP_) : k__GT_s.call(null,p1__24304_SHARP_));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return p1__24304_SHARP_;
}
});})(k__GT_s,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid();
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha24359 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha24359 = (function (keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,map__24338,opt_keys,req_specs,req,id,req_keys,opt_specs,p__24337,k__GT_s,pred_forms,meta24360){
this.keys__GT_specnames = keys__GT_specnames;
this.opt = opt;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.map__24338 = map__24338;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.p__24337 = p__24337;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta24360 = meta24360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha24359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_24361,meta24360__$1){
var self__ = this;
var _24361__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha24359(self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.map__24338,self__.opt_keys,self__.req_specs,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.p__24337,self__.k__GT_s,self__.pred_forms,meta24360__$1));
});})(k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha24359.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_24361){
var self__ = this;
var _24361__$1 = this;
return self__.meta24360;
});})(k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha24359.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha24359.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha24359.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha24359.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha24359.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.keys_pred.cljs$core$IFn$_invoke$arity$1 ? self__.keys_pred.cljs$core$IFn$_invoke$arity$1(m) : self__.keys_pred.call(null,m)))){
var reg = cljs.spec.alpha.registry();
var ret = m;
var G__24382 = m;
var vec__24383 = G__24382;
var seq__24384 = cljs.core.seq(vec__24383);
var first__24385 = cljs.core.first(seq__24384);
var seq__24384__$1 = cljs.core.next(seq__24384);
var vec__24386 = first__24385;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24386,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24386,(1),null);
var ks = seq__24384__$1;
var keys = vec__24383;
var ret__$1 = ret;
var G__24382__$1 = G__24382;
while(true){
var ret__$2 = ret__$1;
var vec__24389 = G__24382__$1;
var seq__24390 = cljs.core.seq(vec__24389);
var first__24391 = cljs.core.first(seq__24390);
var seq__24390__$1 = cljs.core.next(seq__24390);
var vec__24392 = first__24391;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24392,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24392,(1),null);
var ks__$1 = seq__24390__$1;
var keys__$1 = vec__24389;
if(cljs.core.truth_(keys__$1)){
var sname = (self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1));
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,sname);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
var cv = cljs.spec.alpha.conform(s,v__$1);
if(cljs.spec.alpha.invalid_QMARK_(cv)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__25630 = (((cv === v__$1))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,cv));
var G__25631 = ks__$1;
ret__$1 = G__25630;
G__24382__$1 = G__25631;
continue;
}
} else {
var G__25632 = ret__$2;
var G__25633 = ks__$1;
ret__$1 = G__25632;
G__24382__$1 = G__25633;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});})(k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha24359.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.alpha.registry();
var ret = m;
var G__24400 = cljs.core.keys(m);
var vec__24401 = G__24400;
var seq__24402 = cljs.core.seq(vec__24401);
var first__24403 = cljs.core.first(seq__24402);
var seq__24402__$1 = cljs.core.next(seq__24402);
var k = first__24403;
var ks = seq__24402__$1;
var keys = vec__24401;
var ret__$1 = ret;
var G__24400__$1 = G__24400;
while(true){
var ret__$2 = ret__$1;
var vec__24409 = G__24400__$1;
var seq__24410 = cljs.core.seq(vec__24409);
var first__24411 = cljs.core.first(seq__24410);
var seq__24410__$1 = cljs.core.next(seq__24410);
var k__$1 = first__24411;
var ks__$1 = seq__24410__$1;
var keys__$1 = vec__24409;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1)))){
var cv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k__$1);
var v = cljs.spec.alpha.unform((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1)),cv);
var G__25646 = (((cv === v))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,v));
var G__25647 = ks__$1;
ret__$1 = G__25646;
G__24400__$1 = G__25647;
continue;
} else {
var G__25648 = ret__$2;
var G__25649 = ks__$1;
ret__$1 = G__25648;
G__24400__$1 = G__25649;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha24359.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.map_QMARK_(x)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var reg = cljs.spec.alpha.registry();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,(function (){var temp__5720__auto__ = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return null;
} else {
return form;
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__5720__auto__){
var probs = temp__5720__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (probs,temp__5720__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__24319_SHARP_){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),p1__24319_SHARP_,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
});})(probs,temp__5720__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__24416){
var vec__24417 = p__24416;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24417,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24417,(1),null);
if((((!(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)))))) || (cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),v,k)))){
return null;
} else {
return cljs.spec.alpha.explain_1((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq(x)));
}
});})(k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha24359.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
var rgen = ((function (rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.alpha.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k)], null);
});})(rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,rgen,___$1,k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (rmap__$1,rgen,___$1,k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.alpha.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,rgen,___$1,k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,rgen,___$1,k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var reqs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(rgen,self__.req_keys,self__.req_specs);
var opts = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,reqs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,opts)))){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.and_k_gen(self__.req),cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$1(self__.opt),cljs.spec.alpha.and_k_gen(self__.req_un),cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$1(self__.opt_un)], 0)),((function (rmap__$1,rgen,ogen,reqs,opts,___$1,k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__24427){
var vec__24428 = p__24427;
var req_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24428,(0),null);
var opt_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24428,(1),null);
var req_un_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24428,(2),null);
var opt_un_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24428,(3),null);
var qks = cljs.core.flatten(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_ks,opt_ks));
var unqks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.name),cljs.core.flatten(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_un_ks,opt_un_ks)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (qks,unqks,vec__24428,req_ks,opt_ks,req_un_ks,opt_un_ks,rmap__$1,rgen,ogen,reqs,opts,___$1,k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__24330_SHARP_){
var G__24432 = cljs.core.first(p1__24330_SHARP_);
var fexpr__24431 = cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(qks,unqks));
return (fexpr__24431.cljs$core$IFn$_invoke$arity$1 ? fexpr__24431.cljs$core$IFn$_invoke$arity$1(G__24432) : fexpr__24431.call(null,G__24432));
});})(qks,unqks,vec__24428,req_ks,opt_ks,req_un_ks,opt_un_ks,rmap__$1,rgen,ogen,reqs,opts,___$1,k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.into.cljs$core$IFn$_invoke$arity$2(reqs,opts))));
});})(rmap__$1,rgen,ogen,reqs,opts,___$1,k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
], 0));
} else {
return null;
}
}
});})(k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha24359.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
var G__24433 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1);
return (cljs.spec.alpha.map_spec_impl.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.map_spec_impl.cljs$core$IFn$_invoke$arity$1(G__24433) : cljs.spec.alpha.map_spec_impl.call(null,G__24433));
});})(k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha24359.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),(function (){var G__24434 = cljs.core.PersistentVector.EMPTY;
var G__24434__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__24434,new cljs.core.Keyword(null,"req","req",-326448303),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.req], 0)):G__24434);
var G__24434__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__24434__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opt], 0)):G__24434__$1);
var G__24434__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__24434__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.req_un], 0)):G__24434__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__24434__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opt_un], 0));
} else {
return G__24434__$3;
}
})());
});})(k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha24359.getBasis = ((function (k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys->specnames","keys->specnames",1791294693,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"map__24338","map__24338",-1872345620,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"p__24337","p__24337",-996504290,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta24360","meta24360",-391346438,null)], null);
});})(k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha24359.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha24359.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha24359";

cljs.spec.alpha.t_cljs$spec$alpha24359.cljs$lang$ctorPrWriter = ((function (k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha24359");
});})(k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha24359.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha24359 = ((function (k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$alpha$map_spec_impl_$___GT_t_cljs$spec$alpha24359(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,map__24338__$2,opt_keys__$1,req_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,p__24337__$1,k__GT_s__$1,pred_forms__$1,meta24360){
return (new cljs.spec.alpha.t_cljs$spec$alpha24359(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,map__24338__$2,opt_keys__$1,req_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,p__24337__$1,k__GT_s__$1,pred_forms__$1,meta24360));
});})(k__GT_s,keys__GT_specnames,id,map__24338,map__24338__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha24359(keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,map__24338__$1,opt_keys,req_specs,req,id,req_keys,opt_specs,p__24337,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.alpha.spec_impl = (function cljs$spec$alpha$spec_impl(var_args){
var G__24450 = arguments.length;
switch (G__24450) {
case 4:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_(pred))){
var G__24454 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen(G__24454,gfn);
} else {
return G__24454;
}
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(pred))){
return cljs.spec.alpha.regex_spec_impl(pred,gfn);
} else {
if(cljs.core.ident_QMARK_(pred)){
var G__24455 = cljs.spec.alpha.the_spec(pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen(G__24455,gfn);
} else {
return G__24455;
}
} else {
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha24456 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha24456 = (function (form,pred,gfn,cpred_QMARK_,unc,meta24457){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta24457 = meta24457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha24456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24458,meta24457__$1){
var self__ = this;
var _24458__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha24456(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta24457__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha24456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24458){
var self__ = this;
var _24458__$1 = this;
return self__.meta24457;
});

cljs.spec.alpha.t_cljs$spec$alpha24456.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha24456.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha24456.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha24456.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha24456.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = (self__.pred.cljs$core$IFn$_invoke$arity$1 ? self__.pred.cljs$core$IFn$_invoke$arity$1(x) : self__.pred.call(null,x));
if(cljs.core.truth_(self__.cpred_QMARK_)){
return ret;
} else {
if(cljs.core.truth_(ret)){
return x;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
});

cljs.spec.alpha.t_cljs$spec$alpha24456.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return (self__.unc.cljs$core$IFn$_invoke$arity$1 ? self__.unc.cljs$core$IFn$_invoke$arity$1(x) : self__.unc.call(null,x));
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.alpha.t_cljs$spec$alpha24456.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4(self__.pred,x,self__.form,self__.cpred_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
});

cljs.spec.alpha.t_cljs$spec$alpha24456.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.gen_for_pred(self__.pred);
}
});

cljs.spec.alpha.t_cljs$spec$alpha24456.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

cljs.spec.alpha.t_cljs$spec$alpha24456.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.alpha.t_cljs$spec$alpha24456.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta24457","meta24457",1757271378,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha24456.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha24456.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha24456";

cljs.spec.alpha.t_cljs$spec$alpha24456.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha24456");
});

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha24456.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha24456 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha24456(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta24457){
return (new cljs.spec.alpha.t_cljs$spec$alpha24456(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta24457));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha24456(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.alpha.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.alpha.multi_spec_impl = (function cljs$spec$alpha$multi_spec_impl(var_args){
var G__24481 = arguments.length;
switch (G__24481) {
case 3:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(form,mmvar,retag,null);
});

cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid();
var predx = ((function (id){
return (function (p1__24471_SHARP_){
var mm = cljs.core.deref(mmvar);
var and__4120__auto__ = cljs.core._get_method(mm,(function (){var fexpr__24483 = cljs.core._dispatch_fn(mm);
return (fexpr__24483.cljs$core$IFn$_invoke$arity$1 ? fexpr__24483.cljs$core$IFn$_invoke$arity$1(p1__24471_SHARP_) : fexpr__24483.call(null,p1__24471_SHARP_));
})());
if(cljs.core.truth_(and__4120__auto__)){
return (mm.cljs$core$IFn$_invoke$arity$1 ? mm.cljs$core$IFn$_invoke$arity$1(p1__24471_SHARP_) : mm.call(null,p1__24471_SHARP_));
} else {
return and__4120__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__24472_SHARP_){
var fexpr__24484 = cljs.core._dispatch_fn(cljs.core.deref(mmvar));
return (fexpr__24484.cljs$core$IFn$_invoke$arity$1 ? fexpr__24484.cljs$core$IFn$_invoke$arity$1(p1__24472_SHARP_) : fexpr__24484.call(null,p1__24472_SHARP_));
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__24473_SHARP_,p2__24474_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24473_SHARP_,retag,p2__24474_SHARP_);
});})(id,predx,dval))
:retag);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha24485 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha24485 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta24486){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta24486 = meta24486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha24485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_24487,meta24486__$1){
var self__ = this;
var _24487__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha24485(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta24486__$1));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha24485.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_24487){
var self__ = this;
var _24487__$1 = this;
return self__.meta24486;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha24485.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha24485.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha24485.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha24485.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha24485.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__5718__auto__)){
var pred = temp__5718__auto__;
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha24485.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__5718__auto__)){
var pred = temp__5718__auto__;
return cljs.spec.alpha.unform(pred,x);
} else {
throw (new Error(["No method of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.form)," for dispatch value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x)))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha24485.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = (self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x));
var path__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,dv);
var temp__5718__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__5718__auto__)){
var pred = temp__5718__auto__;
return cljs.spec.alpha.explain_1(self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha24485.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__24494){
var vec__24495 = p__24494;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24495,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24495,(1),null);
var p = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(null) : f.call(null,null));
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
if(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k)){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (rmap__$1,p,vec__24495,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (rmap__$1,p,vec__24495,k,f,___$1,id,predx,dval,tag){
return (function (p1__24475_SHARP_){
return (self__.tag.cljs$core$IFn$_invoke$arity$2 ? self__.tag.cljs$core$IFn$_invoke$arity$2(p1__24475_SHARP_,k) : self__.tag.call(null,p1__24475_SHARP_,k));
});})(rmap__$1,p,vec__24495,k,f,___$1,id,predx,dval,tag))
,cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,(new cljs.core.List(null,new cljs.core.Symbol(null,"method","method",1696235119,null),(new cljs.core.List(null,self__.form,(new cljs.core.List(null,k,null,(1),null)),(2),null)),(3),null)))], 0));
});})(rmap__$1,p,vec__24495,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (gen,___$1,id,predx,dval,tag){
return (function (p__24511){
var vec__24514 = p__24511;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24514,(0),null);
return cljs.spec.alpha.invalid_QMARK_(k);
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$(cljs.core.deref(self__.mmvar)))));
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs], 0));
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha24485.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha24485.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",175821274,null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,self__.retag,null,(1),null))], 0))));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha24485.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta24486","meta24486",608635133,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha24485.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha24485.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha24485";

cljs.spec.alpha.t_cljs$spec$alpha24485.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha24485");
});})(id,predx,dval,tag))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha24485.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha24485 = ((function (id,predx,dval,tag){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha24485(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta24486){
return (new cljs.spec.alpha.t_cljs$spec$alpha24485(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta24486));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha24485(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.alpha.tuple_impl = (function cljs$spec$alpha$tuple_impl(var_args){
var G__24531 = arguments.length;
switch (G__24531) {
case 2:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3(forms,preds,null);
});

cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
}),null));
var cnt = cljs.core.count(preds);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha24534 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha24534 = (function (forms,preds,gfn,specs,cnt,meta24535){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
this.meta24535 = meta24535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha24534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cnt){
return (function (_24536,meta24535__$1){
var self__ = this;
var _24536__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha24534(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta24535__$1));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha24534.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cnt){
return (function (_24536){
var self__ = this;
var _24536__$1 = this;
return self__.meta24535;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha24534.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha24534.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cnt){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha24534.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cnt){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha24534.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha24534.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var specs__$1 = cljs.core.deref(self__.specs);
if((!(((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),self__.cnt)))))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,self__.cnt)){
return ret;
} else {
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var cv = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i)),v);
if(cljs.spec.alpha.invalid_QMARK_(cv)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__25705 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv));
var G__25706 = (i + (1));
ret = G__25705;
i = G__25706;
continue;
}
}
break;
}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha24534.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds))))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.count(x))){
return ret;
} else {
var cv = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var v = cljs.spec.alpha.unform((self__.preds.cljs$core$IFn$_invoke$arity$1 ? self__.preds.cljs$core$IFn$_invoke$arity$1(i) : self__.preds.call(null,i)),cv);
var G__25707 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,v));
var G__25708 = (i + (1));
ret = G__25707;
i = G__25708;
continue;
}
break;
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha24534.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cnt){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.vector_QMARK_(x)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.count(self__.preds),null,(1),null))], 0)))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (___$1,specs,cnt){
return (function (i,form,pred){
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
if(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,v)){
return null;
} else {
return cljs.spec.alpha.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i),v);
}
});})(___$1,specs,cnt))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.forms,self__.preds));

}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha24534.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cnt){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,specs,cnt){
return (function (i,p,f){
return cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),rmap,f);
});})(___$1,specs,cnt))
;
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gs);
} else {
return null;
}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha24534.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha24534.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cnt){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),null,(1),null)),self__.forms)));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha24534.getBasis = ((function (specs,cnt){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"meta24535","meta24535",-611960981,null)], null);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha24534.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha24534.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha24534";

cljs.spec.alpha.t_cljs$spec$alpha24534.cljs$lang$ctorPrWriter = ((function (specs,cnt){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha24534");
});})(specs,cnt))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha24534.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha24534 = ((function (specs,cnt){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha24534(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta24535){
return (new cljs.spec.alpha.t_cljs$spec$alpha24534(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta24535));
});})(specs,cnt))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha24534(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.tagged_ret = (function cljs$spec$alpha$tagged_ret(tag,ret){
return (new cljs.core.MapEntry(tag,ret,null));
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.alpha.or_spec_impl = (function cljs$spec$alpha$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid();
var kps = cljs.core.zipmap(keys,preds);
var specs = (new cljs.core.Delay(((function (id,kps){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
});})(id,kps))
,null));
var cform = (function (){var G__24568 = cljs.core.count(preds);
switch (G__24568) {
case (2):
return ((function (G__24568,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.spec.alpha.invalid_QMARK_(ret)){
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),x);
if(cljs.spec.alpha.invalid_QMARK_(ret__$1)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.tagged_ret((keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((1)) : keys.call(null,(1))),ret__$1);
}
} else {
return cljs.spec.alpha.tagged_ret((keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((0)) : keys.call(null,(0))),ret);
}
});
;})(G__24568,id,kps,specs))

break;
case (3):
return ((function (G__24568,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.spec.alpha.invalid_QMARK_(ret)){
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),x);
if(cljs.spec.alpha.invalid_QMARK_(ret__$1)){
var ret__$2 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((2)) : specs__$1.call(null,(2))),x);
if(cljs.spec.alpha.invalid_QMARK_(ret__$2)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.tagged_ret((keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((2)) : keys.call(null,(2))),ret__$2);
}
} else {
return cljs.spec.alpha.tagged_ret((keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((1)) : keys.call(null,(1))),ret__$1);
}
} else {
return cljs.spec.alpha.tagged_ret((keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((0)) : keys.call(null,(0))),ret);
}
});
;})(G__24568,id,kps,specs))

break;
default:
return ((function (G__24568,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var i = (0);
while(true){
if((i < cljs.core.count(specs__$1))){
var spec = (specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i));
var ret = cljs.spec.alpha.conform_STAR_(spec,x);
if(cljs.spec.alpha.invalid_QMARK_(ret)){
var G__25719 = (i + (1));
i = G__25719;
continue;
} else {
return cljs.spec.alpha.tagged_ret((keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(i) : keys.call(null,i)),ret);
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
break;
}
});
;})(G__24568,id,kps,specs))

}
})();
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha24573 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha24573 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta24574){
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
this.meta24574 = meta24574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha24573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,specs,cform){
return (function (_24575,meta24574__$1){
var self__ = this;
var _24575__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha24573(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta24574__$1));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha24573.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,specs,cform){
return (function (_24575){
var self__ = this;
var _24575__$1 = this;
return self__.meta24574;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha24573.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha24573.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha24573.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha24573.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha24573.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha24573.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,p__24583){
var self__ = this;
var vec__24585 = p__24583;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24585,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24585,(1),null);
var ___$1 = this;
return cljs.spec.alpha.unform((self__.kps.cljs$core$IFn$_invoke$arity$1 ? self__.kps.cljs$core$IFn$_invoke$arity$1(k) : self__.kps.call(null,k)),x);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha24573.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,kps,specs,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$__$1,x)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (this$__$1,id,kps,specs,cform){
return (function (k,form,pred){
if(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x)){
return null;
} else {
return cljs.spec.alpha.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,in$,x);
}
});})(this$__$1,id,kps,specs,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha24573.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,kps,specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,kps,specs,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
if(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k)){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,specs,cform){
return (function (){
return cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,specs,cform))
,null)));
}
});})(___$1,id,kps,specs,cform))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_(gs)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs], 0));
}
}
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha24573.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.or_spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.or_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.keys,self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha24573.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),null,(1),null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.keys,self__.forms], 0)))));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha24573.getBasis = ((function (id,kps,specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta24574","meta24574",-1568370000,null)], null);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha24573.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha24573.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha24573";

cljs.spec.alpha.t_cljs$spec$alpha24573.cljs$lang$ctorPrWriter = ((function (id,kps,specs,cform){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha24573");
});})(id,kps,specs,cform))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha24573.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha24573 = ((function (id,kps,specs,cform){
return (function cljs$spec$alpha$or_spec_impl_$___GT_t_cljs$spec$alpha24573(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta24574){
return (new cljs.spec.alpha.t_cljs$spec$alpha24573(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta24574));
});})(id,kps,specs,cform))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha24573(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.and_preds = (function cljs$spec$alpha$and_preds(x,preds,forms){
var ret = x;
var G__24603 = preds;
var vec__24605 = G__24603;
var seq__24606 = cljs.core.seq(vec__24605);
var first__24607 = cljs.core.first(seq__24606);
var seq__24606__$1 = cljs.core.next(seq__24606);
var pred = first__24607;
var preds__$1 = seq__24606__$1;
var G__24604 = forms;
var vec__24608 = G__24604;
var seq__24609 = cljs.core.seq(vec__24608);
var first__24610 = cljs.core.first(seq__24609);
var seq__24609__$1 = cljs.core.next(seq__24609);
var form = first__24610;
var forms__$1 = seq__24609__$1;
var ret__$1 = ret;
var G__24603__$1 = G__24603;
var G__24604__$1 = G__24604;
while(true){
var ret__$2 = ret__$1;
var vec__24612 = G__24603__$1;
var seq__24613 = cljs.core.seq(vec__24612);
var first__24614 = cljs.core.first(seq__24613);
var seq__24613__$1 = cljs.core.next(seq__24613);
var pred__$1 = first__24614;
var preds__$2 = seq__24613__$1;
var vec__24615 = G__24604__$1;
var seq__24616 = cljs.core.seq(vec__24615);
var first__24617 = cljs.core.first(seq__24616);
var seq__24616__$1 = cljs.core.next(seq__24616);
var form__$1 = first__24617;
var forms__$2 = seq__24616__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.spec.alpha.invalid_QMARK_(nret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__25733 = nret;
var G__25734 = preds__$2;
var G__25735 = forms__$2;
ret__$1 = G__25733;
G__24603__$1 = G__25734;
G__24604__$1 = G__25735;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.alpha.explain_pred_list = (function cljs$spec$alpha$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__24625 = forms;
var vec__24628 = G__24625;
var seq__24629 = cljs.core.seq(vec__24628);
var first__24630 = cljs.core.first(seq__24629);
var seq__24629__$1 = cljs.core.next(seq__24629);
var form = first__24630;
var forms__$1 = seq__24629__$1;
var G__24626 = preds;
var vec__24631 = G__24626;
var seq__24632 = cljs.core.seq(vec__24631);
var first__24633 = cljs.core.first(seq__24632);
var seq__24632__$1 = cljs.core.next(seq__24632);
var pred = first__24633;
var preds__$1 = seq__24632__$1;
var ret__$1 = ret;
var G__24625__$1 = G__24625;
var G__24626__$1 = G__24626;
while(true){
var ret__$2 = ret__$1;
var vec__24635 = G__24625__$1;
var seq__24636 = cljs.core.seq(vec__24635);
var first__24637 = cljs.core.first(seq__24636);
var seq__24636__$1 = cljs.core.next(seq__24636);
var form__$1 = first__24637;
var forms__$2 = seq__24636__$1;
var vec__24638 = G__24626__$1;
var seq__24639 = cljs.core.seq(vec__24638);
var first__24640 = cljs.core.first(seq__24639);
var seq__24639__$1 = cljs.core.next(seq__24639);
var pred__$1 = first__24640;
var preds__$2 = seq__24639__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.spec.alpha.invalid_QMARK_(nret)){
return cljs.spec.alpha.explain_1(form__$1,pred__$1,path,via,in$,ret__$2);
} else {
var G__25748 = nret;
var G__25749 = forms__$2;
var G__25750 = preds__$2;
ret__$1 = G__25748;
G__24625__$1 = G__25749;
G__24626__$1 = G__25750;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.alpha.and_spec_impl = (function cljs$spec$alpha$and_spec_impl(forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
}),null));
var cform = (function (){var G__24660 = cljs.core.count(preds);
switch (G__24660) {
case (2):
return ((function (G__24660,specs){
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.spec.alpha.invalid_QMARK_(ret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),ret);
}
});
;})(G__24660,specs))

break;
case (3):
return ((function (G__24660,specs){
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.spec.alpha.invalid_QMARK_(ret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),ret);
if(cljs.spec.alpha.invalid_QMARK_(ret__$1)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((2)) : specs__$1.call(null,(2))),ret__$1);
}
}
});
;})(G__24660,specs))

break;
default:
return ((function (G__24660,specs){
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = x;
var i = (0);
while(true){
if((i < cljs.core.count(specs__$1))){
var nret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i)),ret);
if(cljs.spec.alpha.invalid_QMARK_(nret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__25752 = nret;
var G__25753 = (i + (1));
ret = G__25752;
i = G__25753;
continue;
}
} else {
return ret;
}
break;
}
});
;})(G__24660,specs))

}
})();
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha24664 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha24664 = (function (forms,preds,gfn,specs,cform,meta24665){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
this.meta24665 = meta24665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha24664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cform){
return (function (_24666,meta24665__$1){
var self__ = this;
var _24666__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha24664(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta24665__$1));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha24664.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cform){
return (function (_24666){
var self__ = this;
var _24666__$1 = this;
return self__.meta24665;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha24664.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha24664.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha24664.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha24664.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha24664.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha24664.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (___$1,specs,cform){
return (function (p1__24658_SHARP_,p2__24657_SHARP_){
return cljs.spec.alpha.unform(p2__24657_SHARP_,p1__24658_SHARP_);
});})(___$1,specs,cform))
,x,cljs.core.reverse(self__.preds));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha24664.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cform){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_pred_list(self__.forms,self__.preds,path,via,in$,x);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha24664.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.alpha.gensub(cljs.core.first(self__.preds),overrides,path,rmap,cljs.core.first(self__.forms));
}
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha24664.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.and_spec_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.and_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha24664.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),null,(1),null)),self__.forms)));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha24664.getBasis = ((function (specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta24665","meta24665",-1238925372,null)], null);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha24664.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha24664.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha24664";

cljs.spec.alpha.t_cljs$spec$alpha24664.cljs$lang$ctorPrWriter = ((function (specs,cform){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha24664");
});})(specs,cform))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha24664.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha24664 = ((function (specs,cform){
return (function cljs$spec$alpha$and_spec_impl_$___GT_t_cljs$spec$alpha24664(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta24665){
return (new cljs.spec.alpha.t_cljs$spec$alpha24664(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta24665));
});})(specs,cform))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha24664(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.coll_prob = (function cljs$spec$alpha$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__4131__auto__ = kfn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__4131__auto__ = kform;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null);
}
})();
if((!(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x)))){
return cljs.spec.alpha.explain_1(kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = count;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(count,cljs.core.bounded_count(count,x));
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,count,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null))], 0)))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = min_count;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return (!(((((function (){var or__4131__auto__ = min_count;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__4131__auto__ = max_count;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (9007199254740991);
}
})())))));
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,(function (){var or__4131__auto__ = min_count;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(function (){var or__4131__auto__ = max_count;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (9007199254740991);
}
})(),null,(1),null))], 0)))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = distinct;
if(cljs.core.truth_(and__4120__auto__)){
return (((!(cljs.core.empty_QMARK_(x)))) && (cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,x))));
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.alpha.merge_spec_impl = (function cljs$spec$alpha$merge_spec_impl(forms,preds,gfn){
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha24707 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha24707 = (function (forms,preds,gfn,meta24708){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta24708 = meta24708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha24707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24709,meta24708__$1){
var self__ = this;
var _24709__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha24707(self__.forms,self__.preds,self__.gfn,meta24708__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha24707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24709){
var self__ = this;
var _24709__$1 = this;
return self__.meta24708;
});

cljs.spec.alpha.t_cljs$spec$alpha24707.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha24707.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha24707.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha24707.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha24707.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__24697_SHARP_,p2__24698_SHARP_){
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(p1__24697_SHARP_,x,p2__24698_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some(cljs.spec.alpha.invalid_QMARK_,ms))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,ms);
}
});

cljs.spec.alpha.t_cljs$spec$alpha24707.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__24699_SHARP_){
return cljs.spec.alpha.unform(p1__24699_SHARP_,x);
});})(___$1))
,cljs.core.reverse(self__.preds)));
});

cljs.spec.alpha.t_cljs$spec$alpha24707.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__24700_SHARP_,p2__24701_SHARP_){
return cljs.spec.alpha.explain_1(p1__24700_SHARP_,p2__24701_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.alpha.t_cljs$spec$alpha24707.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (___$1){
return (function (p1__24702_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,p1__24702_SHARP_);
});})(___$1))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__24703_SHARP_,p2__24704_SHARP_){
return cljs.spec.alpha.gensub(p1__24703_SHARP_,overrides,path,rmap,p2__24704_SHARP_);
});})(___$1))
,self__.preds,self__.forms))], 0));
}
});

cljs.spec.alpha.t_cljs$spec$alpha24707.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.merge_spec_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.merge_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha24707.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),null,(1),null)),self__.forms)));
});

cljs.spec.alpha.t_cljs$spec$alpha24707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta24708","meta24708",-1934723013,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha24707.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha24707.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha24707";

cljs.spec.alpha.t_cljs$spec$alpha24707.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha24707");
});

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha24707.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha24707 = (function cljs$spec$alpha$merge_spec_impl_$___GT_t_cljs$spec$alpha24707(forms__$1,preds__$1,gfn__$1,meta24708){
return (new cljs.spec.alpha.t_cljs$spec$alpha24707(forms__$1,preds__$1,gfn__$1,meta24708));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha24707(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.empty_coll = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Symbol("cljs.core","list?","cljs.core/list?",-684796618,null),cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.alpha.every_impl = (function cljs$spec$alpha$every_impl(var_args){
var G__24747 = arguments.length;
switch (G__24747) {
case 3:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(form,pred,opts,null);
});

cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__24750,gfn){
var map__24751 = p__24750;
var map__24751__$1 = (((((!((map__24751 == null))))?(((((map__24751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24751):map__24751);
var opts = map__24751__$1;
var max_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24751__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var kind_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24751__$1,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697));
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24751__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var cpred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24751__$1,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218));
var conform_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24751__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814));
var describe_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24751__$1,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911));
var distinct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24751__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var kfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24751__$1,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24751__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24751__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24751__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var conform_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24751__$1,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917));
var conform_into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24751__$1,new cljs.core.Keyword(null,"into","into",-150836029));
var gen_into = (cljs.core.truth_(conform_into)?cljs.core.empty(conform_into):cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.empty_coll,kind_form));
var spec = (new cljs.core.Delay(((function (gen_into,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (){
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(pred);
});})(gen_into,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,null));
var check_QMARK_ = ((function (gen_into,spec,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (p1__24740_SHARP_){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(spec),p1__24740_SHARP_);
});})(gen_into,spec,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;
var kfn__$1 = (function (){var or__4131__auto__ = kfn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,gen_into,spec,check_QMARK_,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (i,v){
return i;
});
;})(or__4131__auto__,gen_into,spec,check_QMARK_,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
}
})();
var addcv = ((function (gen_into,spec,check_QMARK_,kfn__$1,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (ret,i,v,cv){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cv);
});})(gen_into,spec,check_QMARK_,kfn__$1,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;
var cfns = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (x){
if(((cljs.core.vector_QMARK_(x)) && (((cljs.core.not(conform_into)) || (cljs.core.vector_QMARK_(conform_into)))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv);
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.map_QMARK_(x);
if(and__4120__auto__){
var or__4131__auto__ = (function (){var and__4120__auto____$1 = kind;
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.not(conform_into);
} else {
return and__4120__auto____$1;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.map_QMARK_(conform_into);
}
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (ret,i,v,cv){
if((((v === cv)) && (cljs.core.not(conform_keys)))){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.nth.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cv,(1)));
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,cljs.core.identity], null);
} else {
if(((cljs.core.list_QMARK_(conform_into)) || (cljs.core.seq_QMARK_(conform_into)) || (((cljs.core.not(conform_into)) && (((cljs.core.list_QMARK_(x)) || (cljs.core.seq_QMARK_(x)))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (p1__24742_SHARP_){
return cljs.core.empty((function (){var or__4131__auto__ = conform_into;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return p1__24742_SHARP_;
}
})());
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,addcv,cljs.core.identity], null);

}
}
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha24765 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha24765 = (function (form,max_count,check_QMARK_,gfn,gen_max,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,p__24750,spec,kfn,gen_into,map__24751,count,min_count,opts,kind,conform_all,conform_into,meta24766){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.cpred = cpred;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.describe_form = describe_form;
this.distinct = distinct;
this.p__24750 = p__24750;
this.spec = spec;
this.kfn = kfn;
this.gen_into = gen_into;
this.map__24751 = map__24751;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.meta24766 = meta24766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha24765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_24767,meta24766__$1){
var self__ = this;
var _24767__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha24765(self__.form,self__.max_count,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.pred,self__.cpred,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.describe_form,self__.distinct,self__.p__24750,self__.spec,self__.kfn,self__.gen_into,self__.map__24751,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta24766__$1));
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha24765.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_24767){
var self__ = this;
var _24767__$1 = this;
return self__.meta24766;
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha24765.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha24765.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha24765.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha24765.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha24765.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = cljs.core.deref(self__.spec);
if(cljs.core.not((self__.cpred.cljs$core$IFn$_invoke$arity$1 ? self__.cpred.cljs$core$IFn$_invoke$arity$1(x) : self__.cpred.call(null,x)))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__24773 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24773,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24773,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24773,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__24779 = cljs.core.seq(x);
var vec__24781 = G__24779;
var seq__24782 = cljs.core.seq(vec__24781);
var first__24783 = cljs.core.first(seq__24782);
var seq__24782__$1 = cljs.core.next(seq__24782);
var v = first__24783;
var vs = seq__24782__$1;
var vseq = vec__24781;
var ret__$1 = ret;
var i__$1 = i;
var G__24779__$1 = G__24779;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__24784 = G__24779__$1;
var seq__24785 = cljs.core.seq(vec__24784);
var first__24786 = cljs.core.first(seq__24785);
var seq__24785__$1 = cljs.core.next(seq__24785);
var v__$1 = first__24786;
var vs__$1 = seq__24785__$1;
var vseq__$1 = vec__24784;
if(vseq__$1){
var cv = cljs.spec.alpha.conform_STAR_(spec__$1,v__$1);
if(cljs.spec.alpha.invalid_QMARK_(cv)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__25852 = (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(ret__$2,i__$2,v__$1,cv) : add.call(null,ret__$2,i__$2,v__$1,cv));
var G__25853 = (i__$2 + (1));
var G__25854 = vs__$1;
ret__$1 = G__25852;
i__$1 = G__25853;
G__24779__$1 = G__25854;
continue;
}
} else {
return (complete.cljs$core$IFn$_invoke$arity$1 ? complete.cljs$core$IFn$_invoke$arity$1(ret__$2) : complete.call(null,ret__$2));
}
break;
}
} else {
if(cljs.core.indexed_QMARK_(x)){
var step = (function (){var x__4219__auto__ = (1);
var y__4220__auto__ = cljs.core.long$((cljs.core.count(x) / cljs.spec.alpha._STAR_coll_check_limit_STAR_));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count(x))){
return x;
} else {
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,i))){
var G__25863 = (i + step);
i = G__25863;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
break;
}
} else {
var limit = cljs.spec.alpha._STAR_coll_check_limit_STAR_;
var i = (0);
var G__24794 = cljs.core.seq(x);
var vec__24796 = G__24794;
var seq__24797 = cljs.core.seq(vec__24796);
var first__24798 = cljs.core.first(seq__24797);
var seq__24797__$1 = cljs.core.next(seq__24797);
var v = first__24798;
var vs = seq__24797__$1;
var vseq = vec__24796;
var i__$1 = i;
var G__24794__$1 = G__24794;
while(true){
var i__$2 = i__$1;
var vec__24800 = G__24794__$1;
var seq__24801 = cljs.core.seq(vec__24800);
var first__24802 = cljs.core.first(seq__24801);
var seq__24801__$1 = cljs.core.next(seq__24801);
var v__$1 = first__24802;
var vs__$1 = seq__24801__$1;
var vseq__$1 = vec__24800;
if((((vseq__$1 == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i__$2,limit)))){
return x;
} else {
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,v__$1)){
var G__25873 = (i__$2 + (1));
var G__25874 = vs__$1;
i__$1 = G__25873;
G__24794__$1 = G__25874;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);

}
}
break;
}
}

}
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha24765.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.conform_all)){
var spec__$1 = cljs.core.deref(self__.spec);
var vec__24807 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24807,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24807,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24807,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__24816 = cljs.core.seq(x);
var vec__24817 = G__24816;
var seq__24818 = cljs.core.seq(vec__24817);
var first__24819 = cljs.core.first(seq__24818);
var seq__24818__$1 = cljs.core.next(seq__24818);
var v = first__24819;
var vs = seq__24818__$1;
var vseq = vec__24817;
var ret__$1 = ret;
var i__$1 = i;
var G__24816__$1 = G__24816;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__24820 = G__24816__$1;
var seq__24821 = cljs.core.seq(vec__24820);
var first__24822 = cljs.core.first(seq__24821);
var seq__24821__$1 = cljs.core.next(seq__24821);
var v__$1 = first__24822;
var vs__$1 = seq__24821__$1;
var vseq__$1 = vec__24820;
if((i__$2 >= cljs.core.count(x))){
return (complete.cljs$core$IFn$_invoke$arity$1 ? complete.cljs$core$IFn$_invoke$arity$1(ret__$2) : complete.call(null,ret__$2));
} else {
var G__25882 = (function (){var G__24823 = ret__$2;
var G__24824 = i__$2;
var G__24825 = v__$1;
var G__24826 = cljs.spec.alpha.unform_STAR_(spec__$1,v__$1);
return (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(G__24823,G__24824,G__24825,G__24826) : add.call(null,G__24823,G__24824,G__24825,G__24826));
})();
var G__25883 = (i__$2 + (1));
var G__25884 = vs__$1;
ret__$1 = G__25882;
i__$1 = G__25883;
G__24816__$1 = G__25884;
continue;
}
break;
}
} else {
return x;
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha24765.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__4131__auto__ = cljs.spec.alpha.coll_prob(x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var G__24829 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (or__4131__auto__,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (i,v){
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$2 ? self__.kfn.cljs$core$IFn$_invoke$arity$2(i,v) : self__.kfn.call(null,i,v));
if(cljs.core.truth_((self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : self__.check_QMARK_.call(null,v)))){
return null;
} else {
var prob = cljs.spec.alpha.explain_1(self__.form,self__.pred,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
return prob;
}
});})(or__4131__auto__,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),x));
var fexpr__24828 = (cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,cljs.spec.alpha._STAR_coll_error_limit_STAR_));
return (fexpr__24828.cljs$core$IFn$_invoke$arity$1 ? fexpr__24828.cljs$core$IFn$_invoke$arity$1(G__24829) : fexpr__24828.call(null,G__24829));
})());
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha24765.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var pgen = cljs.spec.alpha.gensub(self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(self__.gen_into)?cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.gen_into], 0)):(cljs.core.truth_(self__.kind)?cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (p1__24744_SHARP_){
if(cljs.core.empty_QMARK_(p1__24744_SHARP_)){
return p1__24744_SHARP_;
} else {
return cljs.core.empty(p1__24744_SHARP_);
}
});})(pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,cljs.spec.alpha.gensub(self__.kind,overrides,path,rmap,self__.form)], 0)):cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0))
)),((function (pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (init){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (p1__24745_SHARP_){
if(cljs.core.vector_QMARK_(init)){
return p1__24745_SHARP_;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(init,p1__24745_SHARP_);
}
});})(pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)], 0)):cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__4131__auto__ = self__.min_count;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__4131__auto__ = self__.max_count;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var x__4219__auto__ = self__.gen_max;
var y__4220__auto__ = ((2) * (function (){var or__4131__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return (0);
}
})());
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)], 0))):(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,self__.count], 0)):(cljs.core.truth_((function (){var or__4131__auto__ = self__.min_count;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,(function (){var or__4131__auto__ = self__.min_count;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),(function (){var or__4131__auto__ = self__.max_count;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var x__4219__auto__ = self__.gen_max;
var y__4220__auto__ = ((2) * (function (){var or__4131__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return (0);
}
})());
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
}
})()], 0)):cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,(0),self__.gen_max], 0))
)))], 0));
});})(pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
], 0));
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha24765.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.pred,self__.opts,gfn__$1);
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha24765.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_){
var self__ = this;
var ___$1 = this;
var or__4131__auto__ = self__.describe_form;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opts], 0))], 0))));
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha24765.getBasis = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"cpred","cpred",-540353554,null),new cljs.core.Symbol(null,"conform-keys","conform-keys",-159510287,null),new cljs.core.Symbol(null,"kind-form","kind-form",1155997457,null),new cljs.core.Symbol(null,"addcv","addcv",-1552991247,null),new cljs.core.Symbol(null,"cfns","cfns",1335482066,null),new cljs.core.Symbol(null,"describe-form","describe-form",-1410156588,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"p__24750","p__24750",1811935127,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"map__24751","map__24751",-300898342,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"conform-all","conform-all",-980179459,null),new cljs.core.Symbol(null,"conform-into","conform-into",-1039113729,null),new cljs.core.Symbol(null,"meta24766","meta24766",753144280,null)], null);
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha24765.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha24765.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha24765";

cljs.spec.alpha.t_cljs$spec$alpha24765.cljs$lang$ctorPrWriter = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha24765");
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha24765.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha24765 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha24765(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,p__24750__$1,spec__$1,kfn__$2,gen_into__$1,map__24751__$2,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta24766){
return (new cljs.spec.alpha.t_cljs$spec$alpha24765(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,p__24750__$1,spec__$1,kfn__$2,gen_into__$1,map__24751__$2,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta24766));
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__24751,map__24751__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha24765(form,max_count,check_QMARK_,gfn,gen_max,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,p__24750,spec,kfn__$1,gen_into,map__24751__$1,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.alpha.accept = (function cljs$spec$alpha$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.alpha.accept_QMARK_ = (function cljs$spec$alpha$accept_QMARK_(p__24849){
var map__24850 = p__24849;
var map__24850__$1 = (((((!((map__24850 == null))))?(((((map__24850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24850):map__24850);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24850__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),op);
});
cljs.spec.alpha.pcat_STAR_ = (function cljs$spec$alpha$pcat_STAR_(p__24860){
var map__24862 = p__24860;
var map__24862__$1 = (((((!((map__24862 == null))))?(((((map__24862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24862):map__24862);
var vec__24863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24862__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__24864 = cljs.core.seq(vec__24863);
var first__24865 = cljs.core.first(seq__24864);
var seq__24864__$1 = cljs.core.next(seq__24864);
var p1 = first__24865;
var pr = seq__24864__$1;
var ps = vec__24863;
var vec__24866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24862__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__24867 = cljs.core.seq(vec__24866);
var first__24868 = cljs.core.first(seq__24867);
var seq__24867__$1 = cljs.core.next(seq__24867);
var k1 = first__24868;
var kr = seq__24867__$1;
var ks = vec__24866;
var vec__24869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24862__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__24870 = cljs.core.seq(vec__24869);
var first__24871 = cljs.core.first(seq__24870);
var seq__24870__$1 = cljs.core.next(seq__24870);
var f1 = first__24871;
var fr = seq__24870__$1;
var forms = vec__24869;
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24862__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24862__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_(cljs.core.identity,ps)){
if(cljs.spec.alpha.accept_QMARK_(p1)){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,rp]):rp));
if(pr){
var G__24875 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null);
return (cljs.spec.alpha.pcat_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.pcat_STAR_.cljs$core$IFn$_invoke$arity$1(G__24875) : cljs.spec.alpha.pcat_STAR_.call(null,G__24875));
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.alpha.pcat = (function cljs$spec$alpha$pcat(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26038 = arguments.length;
var i__4731__auto___26040 = (0);
while(true){
if((i__4731__auto___26040 < len__4730__auto___26038)){
args__4736__auto__.push((arguments[i__4731__auto___26040]));

var G__26042 = (i__4731__auto___26040 + (1));
i__4731__auto___26040 = G__26042;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.alpha.pcat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.alpha.pcat.cljs$lang$applyTo = (function (seq24876){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24876));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.alpha.cat_impl = (function cljs$spec$alpha$cat_impl(ks,ps,forms){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.alpha.rep_STAR_ = (function cljs$spec$alpha$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid()], null);
if(cljs.spec.alpha.accept_QMARK_(p1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ret","ret",-468222814),ret], 0));
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.alpha.rep_impl = (function cljs$spec$alpha$rep_impl(form,p){
return cljs.spec.alpha.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.alpha.rep_PLUS_impl = (function cljs$spec$alpha$rep_PLUS_impl(form,p){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)))))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.alpha.amp_impl = (function cljs$spec$alpha$amp_impl(re,re_form,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"amp","amp",271690571),re_form,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.alpha.filter_alt = (function cljs$spec$alpha$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__4131__auto__ = ks;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24892_SHARP_){
var G__24894 = cljs.core.first(p1__24892_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24894) : f.call(null,G__24894));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__4131__auto__ = cljs.core.seq(ks);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__4131__auto__ = cljs.core.seq(forms);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pks){
return (function (p1__24893_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__24893_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,ps)),ks,forms], null);
}
});
cljs.spec.alpha.alt_STAR_ = (function cljs$spec$alpha$alt_STAR_(ps,ks,forms){
var vec__24901 = cljs.spec.alpha.filter_alt(ps,ks,forms,cljs.core.identity);
var vec__24904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24901,(0),null);
var seq__24905 = cljs.core.seq(vec__24904);
var first__24906 = cljs.core.first(seq__24905);
var seq__24905__$1 = cljs.core.next(seq__24905);
var p1 = first__24906;
var pr = seq__24905__$1;
var ps__$1 = vec__24904;
var vec__24907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24901,(1),null);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24907,(0),null);
var ks__$1 = vec__24907;
var forms__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24901,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.spec.alpha.accept_QMARK_(p1)){
return cljs.spec.alpha.accept(cljs.spec.alpha.tagged_ret(k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alpha.alts = (function cljs$spec$alpha$alts(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26118 = arguments.length;
var i__4731__auto___26120 = (0);
while(true){
if((i__4731__auto___26120 < len__4730__auto___26118)){
args__4736__auto__.push((arguments[i__4731__auto___26120]));

var G__26123 = (i__4731__auto___26120 + (1));
i__4731__auto___26120 = G__26123;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.alt_STAR_(ps,null,null);
});

cljs.spec.alpha.alts.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.alpha.alts.cljs$lang$applyTo = (function (seq24912){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24912));
});

cljs.spec.alpha.alt2 = (function cljs$spec$alpha$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__4120__auto__ = p1;
if(cljs.core.truth_(and__4120__auto__)){
return p2;
} else {
return and__4120__auto__;
}
})())){
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1,p2], 0));
} else {
var or__4131__auto__ = p1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alpha.alt_impl = (function cljs$spec$alpha$alt_impl(ks,ps,forms){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.alt_STAR_(ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid());
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.alpha.maybe_impl = (function cljs$spec$alpha$maybe_impl(p,form){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.alt_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.accept(new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.alpha.noret_QMARK_ = (function cljs$spec$alpha$noret_QMARK_(p1,pret){
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var and__4120__auto__ = (function (){var G__24938 = new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(p1));
var fexpr__24937 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),null], null), null);
return (fexpr__24937.cljs$core$IFn$_invoke$arity$1 ? fexpr__24937.cljs$core$IFn$_invoke$arity$1(G__24938) : fexpr__24937.call(null,G__24938));
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.empty_QMARK_(pret);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return null;
}
}
});
cljs.spec.alpha.accept_nil_QMARK_ = (function cljs$spec$alpha$accept_nil_QMARK_(p){
var map__24945 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__24945__$1 = (((((!((map__24945 == null))))?(((((map__24945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24945):map__24945);
var p__$1 = map__24945__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24945__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24945__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24945__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24945__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24945__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__24956 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__24956)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__24956)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__24956)){
var and__4120__auto__ = (cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.accept_nil_QMARK_.call(null,p1));
if(cljs.core.truth_(and__4120__auto__)){
var ret = cljs.spec.alpha.and_preds(cljs.spec.alpha.preturn(p1),ps,cljs.core.next(forms));
return (!(cljs.spec.alpha.invalid_QMARK_(ret)));
} else {
return and__4120__auto__;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__24956)){
var or__4131__auto__ = (p1 === p2);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return (cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.accept_nil_QMARK_.call(null,p1));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__24956)){
return cljs.core.every_QMARK_(cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__24956)){
return cljs.core.some(cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24956)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.preturn = (function cljs$spec$alpha$preturn(p){
var map__24966 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__24966__$1 = (((((!((map__24966 == null))))?(((((map__24966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24966):map__24966);
var p__$1 = map__24966__$1;
var vec__24967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24966__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__24968 = cljs.core.seq(vec__24967);
var first__24969 = cljs.core.first(seq__24968);
var seq__24968__$1 = cljs.core.next(seq__24968);
var p0 = first__24969;
var pr = seq__24968__$1;
var ps = vec__24967;
var vec__24970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24966__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24970,(0),null);
var ks = vec__24970;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24966__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24966__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24966__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24966__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__24974 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__24974)){
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__24974)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__24974)){
var pret = (cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.preturn.call(null,p1));
if(cljs.core.truth_(cljs.spec.alpha.noret_QMARK_(p1,pret))){
return new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950);
} else {
return cljs.spec.alpha.and_preds(pret,ps,forms);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__24974)){
return cljs.spec.alpha.add_ret(p1,ret,k);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__24974)){
return cljs.spec.alpha.add_ret(p0,ret,k);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__24974)){
var vec__24975 = cljs.spec.alpha.filter_alt(ps,ks,forms,cljs.spec.alpha.accept_nil_QMARK_);
var vec__24978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24975,(0),null);
var p0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24978,(0),null);
var vec__24981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24975,(1),null);
var k0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24981,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950):(cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p0__$1) : cljs.spec.alpha.preturn.call(null,p0__$1)));
if(cljs.core.truth_(k0)){
return cljs.spec.alpha.tagged_ret(k0,r);
} else {
return r;
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24974)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.op_unform = (function cljs$spec$alpha$op_unform(p,x){
var map__24991 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__24991__$1 = (((((!((map__24991 == null))))?(((((map__24991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24991):map__24991);
var p__$1 = map__24991__$1;
var vec__24992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__24993 = cljs.core.seq(vec__24992);
var first__24994 = cljs.core.first(seq__24993);
var seq__24993__$1 = cljs.core.next(seq__24993);
var p0 = first__24994;
var pr = seq__24993__$1;
var ps = vec__24992;
var vec__24995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24995,(0),null);
var ks = vec__24995;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap(ks,ps);
var G__24999 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__24999)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__24999)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform(p__$1,x)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__24999)){
var px = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__24999,map__24991,map__24991__$1,p__$1,vec__24992,seq__24993,first__24994,seq__24993__$1,p0,pr,ps,vec__24995,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__24985_SHARP_,p2__24984_SHARP_){
return cljs.spec.alpha.unform(p2__24984_SHARP_,p1__24985_SHARP_);
});})(G__24999,map__24991,map__24991__$1,p__$1,vec__24992,seq__24993,first__24994,seq__24993__$1,p0,pr,ps,vec__24995,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse(ps));
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p1,px) : cljs.spec.alpha.op_unform.call(null,p1,px));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__24999)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__24999,map__24991,map__24991__$1,p__$1,vec__24992,seq__24993,first__24994,seq__24993__$1,p0,pr,ps,vec__24995,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__24987_SHARP_){
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p1,p1__24987_SHARP_) : cljs.spec.alpha.op_unform.call(null,p1,p1__24987_SHARP_));
});})(G__24999,map__24991,map__24991__$1,p__$1,vec__24992,seq__24993,first__24994,seq__24993__$1,p0,pr,ps,vec__24995,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__24999)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__24999,map__24991,map__24991__$1,p__$1,vec__24992,seq__24993,first__24994,seq__24993__$1,p0,pr,ps,vec__24995,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__24988_SHARP_){
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p0,p1__24988_SHARP_) : cljs.spec.alpha.op_unform.call(null,p0,p1__24988_SHARP_));
});})(G__24999,map__24991,map__24991__$1,p__$1,vec__24992,seq__24993,first__24994,seq__24993__$1,p0,pr,ps,vec__24995,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__24999,map__24991,map__24991__$1,p__$1,vec__24992,seq__24993,first__24994,seq__24993__$1,p0,pr,ps,vec__24995,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_(x,k__$1)){
var G__25000 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__25001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,k__$1);
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(G__25000,G__25001) : cljs.spec.alpha.op_unform.call(null,G__25000,G__25001));
} else {
return null;
}
});})(G__24999,map__24991,map__24991__$1,p__$1,vec__24992,seq__24993,first__24994,seq__24993__$1,p0,pr,ps,vec__24995,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__24999)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform(p0,x)], null);
} else {
var vec__25004 = x;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25004,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25004,(1),null);
var G__25007 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__25008 = v;
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(G__25007,G__25008) : cljs.spec.alpha.op_unform.call(null,G__25007,G__25008));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24999)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.add_ret = (function cljs$spec$alpha$add_ret(p,r,k){
var map__25010 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__25010__$1 = (((((!((map__25010 == null))))?(((((map__25010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25010):map__25010);
var p__$1 = map__25010__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25010__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25010__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25010__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__25010,map__25010__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core.empty_QMARK_(ret)){
return r;
} else {
var G__25017 = r;
var G__25018 = (cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret);
var fexpr__25016 = (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj);
return (fexpr__25016.cljs$core$IFn$_invoke$arity$2 ? fexpr__25016.cljs$core$IFn$_invoke$arity$2(G__25017,G__25018) : fexpr__25016.call(null,G__25017,G__25018));
}
});})(map__25010,map__25010__$1,p__$1,op,ps,splice))
;
var G__25020 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__25020)){
return r;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__25020)){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__25020)){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__25020)){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__25020)){
return prop();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__25020)){
return prop();
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25020)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.deriv = (function cljs$spec$alpha$deriv(p,x){
var map__25025 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__25025__$1 = (((((!((map__25025 == null))))?(((((map__25025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25025):map__25025);
var p__$1 = map__25025__$1;
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25025__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25025__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var vec__25026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25025__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__25027 = cljs.core.seq(vec__25026);
var first__25028 = cljs.core.first(seq__25027);
var seq__25027__$1 = cljs.core.next(seq__25027);
var p0 = first__25028;
var pr = seq__25027__$1;
var ps = vec__25026;
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25025__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25025__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25025__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var vec__25029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25025__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__25030 = cljs.core.seq(vec__25029);
var first__25031 = cljs.core.first(seq__25030);
var seq__25030__$1 = cljs.core.next(seq__25030);
var k0 = first__25031;
var kr = seq__25030__$1;
var ks = vec__25029;
var amp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25025__$1,new cljs.core.Keyword(null,"amp","amp",271690571));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25025__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
if(cljs.core.truth_(p__$1)){
var G__25034 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__25034)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__25034)){
var ret__$1 = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(p__$1,x,p__$1);
if(cljs.spec.alpha.invalid_QMARK_(ret__$1)){
return null;
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__25034)){
var temp__5720__auto__ = (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1,x) : cljs.spec.alpha.deriv.call(null,p1,x));
if(cljs.core.truth_(temp__5720__auto__)){
var p1__$1 = temp__5720__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.alpha.and_preds(cljs.spec.alpha.preturn(p1__$1),ps,cljs.core.next(forms));
if(cljs.spec.alpha.invalid_QMARK_(ret__$1)){
return null;
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
return cljs.spec.alpha.amp_impl(p1__$1,amp,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__25034)){
return cljs.spec.alpha.alt2(cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons((cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p0,x) : cljs.spec.alpha.deriv.call(null,p0,x)),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p0))?(function (){var G__25037 = cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next(forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.alpha.add_ret(p0,ret,k0)], null));
var G__25038 = x;
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(G__25037,G__25038) : cljs.spec.alpha.deriv.call(null,G__25037,G__25038));
})():null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__25034)){
return cljs.spec.alpha.alt_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__25034,map__25025,map__25025__$1,p__$1,forms,p2,vec__25026,seq__25027,first__25028,seq__25027__$1,p0,pr,ps,ret,op,splice,vec__25029,seq__25030,first__25031,seq__25030__$1,k0,kr,ks,amp,p1){
return (function (p1__25021_SHARP_){
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1__25021_SHARP_,x) : cljs.spec.alpha.deriv.call(null,p1__25021_SHARP_,x));
});})(G__25034,map__25025,map__25025__$1,p__$1,forms,p2,vec__25026,seq__25027,first__25028,seq__25027__$1,p0,pr,ps,ret,op,splice,vec__25029,seq__25030,first__25031,seq__25030__$1,k0,kr,ks,amp,p1))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__25034)){
return cljs.spec.alpha.alt2(cljs.spec.alpha.rep_STAR_((cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1,x) : cljs.spec.alpha.deriv.call(null,p1,x)),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p1))?(function (){var G__25045 = cljs.spec.alpha.rep_STAR_(p2,p2,cljs.spec.alpha.add_ret(p1,ret,null),splice,forms);
var G__25046 = x;
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(G__25045,G__25046) : cljs.spec.alpha.deriv.call(null,G__25045,G__25046));
})():null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25034)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_describe = (function cljs$spec$alpha$op_describe(p){
var map__25057 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__25057__$1 = (((((!((map__25057 == null))))?(((((map__25057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25057):map__25057);
var p__$1 = map__25057__$1;
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25057__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25057__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25057__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25057__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25057__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25057__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25057__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var amp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25057__$1,new cljs.core.Keyword(null,"amp","amp",271690571));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25057__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
if(cljs.core.truth_(p__$1)){
var G__25059 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__25059)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__25059)){
return p__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__25059)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("cljs.spec.alpha","&","cljs.spec.alpha/&",1635809823,null),amp,forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__25059)){
if(cljs.core.truth_(rep_PLUS_)){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),(new cljs.core.List(null,rep_PLUS_,null,(1),null)),(2),null));
} else {
return cljs.core.cons(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = cljs.core.seq(ks);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),forms], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__25059)){
if(cljs.core.truth_(maybe)){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),(new cljs.core.List(null,maybe,null,(1),null)),(2),null));
} else {
return cljs.core.cons(new cljs.core.Symbol("cljs.spec.alpha","alt","cljs.spec.alpha/alt",-2130750332,null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks,forms], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__25059)){
return (new cljs.core.List(null,(cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null):new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null)),(new cljs.core.List(null,forms,null,(1),null)),(2),null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25059)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_explain = (function cljs$spec$alpha$op_explain(form,p,path,via,in$,input){
var vec__25099 = input;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25099,(0),null);
var input__$1 = vec__25099;
var map__25102 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__25102__$1 = (((((!((map__25102 == null))))?(((((map__25102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25102):map__25102);
var p__$1 = map__25102__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25102__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25102__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25102__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25102__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25102__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25102__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25102__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__5718__auto__ = cljs.spec.alpha.spec_name(p__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var name = temp__5718__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__25099,x,input__$1,map__25102,map__25102__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),form__$1,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
});})(vec__25099,x,input__$1,map__25102,map__25102__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__25104 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__25104)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__25104)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,form);
} else {
return cljs.spec.alpha.explain_1(form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__25104)){
if(cljs.core.empty_QMARK_(input__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p1))){
return cljs.spec.alpha.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn(p1));
} else {
return insufficient(path,new cljs.core.Keyword(null,"amp","amp",271690571).cljs$core$IFn$_invoke$arity$1(p__$1));
}
} else {
var temp__5718__auto__ = cljs.spec.alpha.deriv(p1,x);
if(cljs.core.truth_(temp__5718__auto__)){
var p1__$1 = temp__5718__auto__;
return cljs.spec.alpha.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn(p1__$1));
} else {
var G__25105 = new cljs.core.Keyword(null,"amp","amp",271690571).cljs$core$IFn$_invoke$arity$1(p__$1);
var G__25106 = p1;
var G__25107 = path;
var G__25108 = via__$1;
var G__25109 = in$;
var G__25110 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__25105,G__25106,G__25107,G__25108,G__25109,G__25110) : cljs.spec.alpha.op_explain.call(null,G__25105,G__25106,G__25107,G__25108,G__25109,G__25110));
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__25104)){
var pkfs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__4131__auto__ = cljs.core.seq(ks);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__4131__auto__ = cljs.core.seq(forms);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
var vec__25111 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(pkfs)))?cljs.core.first(pkfs):cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (pkfs,G__25104,vec__25099,x,input__$1,map__25102,map__25102__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__25114){
var vec__25115 = p__25114;
var p__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25115,(0),null);
return cljs.spec.alpha.accept_nil_QMARK_(p__$2);
});})(pkfs,G__25104,vec__25099,x,input__$1,map__25102,map__25102__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25111,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25111,(1),null);
var form__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25111,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var form__$2 = (function (){var or__4131__auto__ = form__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.spec.alpha.op_describe(pred);
}
})();
if(((cljs.core.empty_QMARK_(input__$1)) && (cljs.core.not(pred)))){
return insufficient(path__$1,form__$2);
} else {
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(form__$2,pred,path__$1,via__$1,in$,input__$1) : cljs.spec.alpha.op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__25104)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,cljs.spec.alpha.op_describe(p__$1));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (G__25104,vec__25099,x,input__$1,map__25102,map__25102__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
var G__25121 = (function (){var or__4131__auto__ = form__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.spec.alpha.op_describe(pred);
}
})();
var G__25122 = pred;
var G__25123 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__25124 = via__$1;
var G__25125 = in$;
var G__25126 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__25121,G__25122,G__25123,G__25124,G__25125,G__25126) : cljs.spec.alpha.op_explain.call(null,G__25121,G__25122,G__25123,G__25124,G__25125,G__25126));
});})(G__25104,vec__25099,x,input__$1,map__25102,map__25102__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__4131__auto__ = cljs.core.seq(ks);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__4131__auto__ = cljs.core.seq(forms);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__25104)){
var G__25127 = (((p1 === p2))?forms:cljs.spec.alpha.op_describe(p1));
var G__25128 = p1;
var G__25129 = path;
var G__25130 = via__$1;
var G__25131 = in$;
var G__25132 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__25127,G__25128,G__25129,G__25130,G__25131,G__25132) : cljs.spec.alpha.op_explain.call(null,G__25127,G__25128,G__25129,G__25130,G__25131,G__25132));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25104)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.re_gen = (function cljs$spec$alpha$re_gen(p,overrides,path,rmap,f){
var map__25142 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__25142__$1 = (((((!((map__25142 == null))))?(((((map__25142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25142):map__25142);
var p__$1 = map__25142__$1;
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25142__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25142__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25142__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25142__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25142__$1,new cljs.core.Keyword("cljs.spec.alpha","gfn","cljs.spec.alpha/gfn",-593120375));
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25142__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25142__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25142__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25142__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25142__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.alpha.inck(rmap,id):rmap);
var ggens = ((function (map__25142,map__25142__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__25142,map__25142__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__4120__auto__ = rmap__$1;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = id;
if(cljs.core.truth_(and__4120__auto____$1)){
var and__4120__auto____$2 = k;
if(cljs.core.truth_(and__4120__auto____$2)){
return cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,id,path,k);
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (map__25142,map__25142__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (){
var G__25145 = p__$2;
var G__25146 = overrides;
var G__25147 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__25148 = rmap__$1;
var G__25149 = (function (){var or__4131__auto__ = f__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return p__$2;
}
})();
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__25145,G__25146,G__25147,G__25148,G__25149) : cljs.spec.alpha.re_gen.call(null,G__25145,G__25146,G__25147,G__25148,G__25149));
});})(map__25142,map__25142__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
,null)));
} else {
var G__25151 = p__$2;
var G__25152 = overrides;
var G__25153 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__25154 = rmap__$1;
var G__25155 = (function (){var or__4131__auto__ = f__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return p__$2;
}
})();
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__25151,G__25152,G__25153,G__25154,G__25155) : cljs.spec.alpha.re_gen.call(null,G__25151,G__25152,G__25153,G__25154,G__25155));
}
}
});})(map__25142,map__25142__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
;
return cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,ps__$1,(function (){var or__4131__auto__ = cljs.core.seq(ks__$1);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__4131__auto__ = cljs.core.seq(forms__$1);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(map__25142,map__25142__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
;
var or__4131__auto__ = (function (){var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
if(cljs.core.truth_(temp__5720__auto__)){
var g = temp__5720__auto__;
var G__25158 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accept","accept",1874130431),G__25158)){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,g], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__25158)){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,g], 0));
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (cljs.core.truth_(gfn)?(gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null)):null);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__25159 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__25159)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0));
} else {
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__25159)){
var temp__5720__auto__ = cljs.spec.alpha.gensub(p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__5720__auto__)){
var g = temp__5720__auto__;
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,g], 0));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__25159)){
var G__25160 = p1;
var G__25161 = overrides;
var G__25162 = path;
var G__25163 = rmap__$1;
var G__25164 = cljs.spec.alpha.op_describe(p1);
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__25160,G__25161,G__25162,G__25163,G__25164) : cljs.spec.alpha.re_gen.call(null,G__25160,G__25161,G__25162,G__25163,G__25164));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__25159)){
var gens = ggens(ps,ks,forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gens)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__25159)){
var gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,ggens(ps,ks,forms));
if(cljs.core.empty_QMARK_(gens)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gens], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__25159)){
if(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id)){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0));
} else {
var temp__5720__auto__ = (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(p2,overrides,path,rmap__$1,forms) : cljs.spec.alpha.re_gen.call(null,p2,overrides,path,rmap__$1,forms));
if(cljs.core.truth_(temp__5720__auto__)){
var g = temp__5720__auto__;
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (g,temp__5720__auto__,G__25159,or__4131__auto____$1,or__4131__auto__,map__25142,map__25142__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens){
return (function (p1__25138_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__25138_SHARP_);
});})(g,temp__5720__auto__,G__25159,or__4131__auto____$1,or__4131__auto__,map__25142,map__25142__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens))
,cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([g], 0))], 0));
} else {
return null;
}
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25159)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.alpha.re_conform = (function cljs$spec$alpha$re_conform(p,p__25167){
while(true){
var vec__25168 = p__25167;
var seq__25169 = cljs.core.seq(vec__25168);
var first__25170 = cljs.core.first(seq__25169);
var seq__25169__$1 = cljs.core.next(seq__25169);
var x = first__25170;
var xs = seq__25169__$1;
var data = vec__25168;
if(cljs.core.empty_QMARK_(data)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p))){
var ret = cljs.spec.alpha.preturn(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
} else {
var temp__5718__auto__ = cljs.spec.alpha.deriv(p,x);
if(cljs.core.truth_(temp__5718__auto__)){
var dp = temp__5718__auto__;
var G__26477 = dp;
var G__26478 = xs;
p = G__26477;
p__25167 = G__26478;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
break;
}
});
cljs.spec.alpha.re_explain = (function cljs$spec$alpha$re_explain(path,via,in$,re,input){
var p = re;
var G__25181 = input;
var vec__25182 = G__25181;
var seq__25183 = cljs.core.seq(vec__25182);
var first__25184 = cljs.core.first(seq__25183);
var seq__25183__$1 = cljs.core.next(seq__25183);
var x = first__25184;
var xs = seq__25183__$1;
var data = vec__25182;
var i = (0);
var p__$1 = p;
var G__25181__$1 = G__25181;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__25185 = G__25181__$1;
var seq__25186 = cljs.core.seq(vec__25185);
var first__25187 = cljs.core.first(seq__25186);
var seq__25186__$1 = cljs.core.next(seq__25186);
var x__$1 = first__25187;
var xs__$1 = seq__25186__$1;
var data__$1 = vec__25185;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_(data__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p__$2))){
return null;
} else {
return cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__5718__auto__ = cljs.spec.alpha.deriv(p__$2,x__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var dp = temp__5718__auto__;
var G__26484 = dp;
var G__26485 = xs__$1;
var G__26486 = (i__$2 + (1));
p__$1 = G__26484;
G__25181__$1 = G__26485;
i__$1 = G__26486;
continue;
} else {
if(cljs.spec.alpha.accept_QMARK_(p__$2)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623))){
return cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.op_describe(re),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], null);
}
} else {
var or__4131__auto__ = cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.op_describe(p__$2),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.alpha.regex_spec_impl = (function cljs$spec$alpha$regex_spec_impl(re,gfn){
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha25189 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha25189 = (function (re,gfn,meta25190){
this.re = re;
this.gfn = gfn;
this.meta25190 = meta25190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha25189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25191,meta25190__$1){
var self__ = this;
var _25191__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha25189(self__.re,self__.gfn,meta25190__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha25189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25191){
var self__ = this;
var _25191__$1 = this;
return self__.meta25190;
});

cljs.spec.alpha.t_cljs$spec$alpha25189.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25189.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha25189.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha25189.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25189.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((((x == null)) || (cljs.core.sequential_QMARK_(x)))){
return cljs.spec.alpha.re_conform(self__.re,cljs.core.seq(x));
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});

cljs.spec.alpha.t_cljs$spec$alpha25189.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_unform(self__.re,x);
});

cljs.spec.alpha.t_cljs$spec$alpha25189.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((((x == null)) || (cljs.core.sequential_QMARK_(x)))){
return cljs.spec.alpha.re_explain(path,via,in$,self__.re,cljs.core.seq(x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

cljs.spec.alpha.t_cljs$spec$alpha25189.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.alpha.re_gen(self__.re,overrides,path,rmap,cljs.spec.alpha.op_describe(self__.re));
}
});

cljs.spec.alpha.t_cljs$spec$alpha25189.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(self__.re,gfn__$1) : cljs.spec.alpha.regex_spec_impl.call(null,self__.re,gfn__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha25189.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_describe(self__.re);
});

cljs.spec.alpha.t_cljs$spec$alpha25189.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta25190","meta25190",1258809894,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha25189.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha25189.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha25189";

cljs.spec.alpha.t_cljs$spec$alpha25189.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha25189");
});

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha25189.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha25189 = (function cljs$spec$alpha$regex_spec_impl_$___GT_t_cljs$spec$alpha25189(re__$1,gfn__$1,meta25190){
return (new cljs.spec.alpha.t_cljs$spec$alpha25189(re__$1,gfn__$1,meta25190));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha25189(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.call_valid_QMARK_ = (function cljs$spec$alpha$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.alpha.conform(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.spec.alpha.invalid_QMARK_(cargs)){
return null;
} else {
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
var cret = cljs.spec.alpha.conform(new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__4120__auto__ = (!(cljs.spec.alpha.invalid_QMARK_(cret)));
if(and__4120__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__4120__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.alpha.validate_fn = (function cljs$spec$alpha$validate_fn(f,specs,iters){
var g = cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__25220_SHARP_){
return cljs.spec.alpha.call_valid_QMARK_(f,specs,p1__25220_SHARP_);
});})(g))
], 0));
var ret = cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([iters,prop], 0));
var temp__5718__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__25221 = temp__5718__auto__;
var smallest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25221,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.alpha.fspec_impl = (function cljs$spec$alpha$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha25256 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.alpha.t_cljs$spec$alpha25256 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta25257){
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta25257 = meta25257;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha25256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_25258,meta25257__$1){
var self__ = this;
var _25258__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha25256(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta25257__$1));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha25256.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_25258){
var self__ = this;
var _25258__$1 = this;
return self__.meta25257;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha25256.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.specs,k);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha25256.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.specs,k,not_found);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha25256.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25256.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha25256.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha25256.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25256.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
if((f === cljs.spec.alpha.validate_fn(f,self__.specs,cljs.spec.alpha._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha25256.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha25256.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
var args = cljs.spec.alpha.validate_fn(f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}catch (e25294){if((e25294 instanceof Error)){
var t = e25294;
return t;
} else {
throw e25294;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var cret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(self__.retspec,ret,self__.rform);
if(cljs.spec.alpha.invalid_QMARK_(cret)){
return cljs.spec.alpha.explain_1(self__.rform,self__.retspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.alpha.conform(self__.argspec,args);
return cljs.spec.alpha.explain_1(self__.fform,self__.fnspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha25256.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (___$3,specs){
return (function() { 
var G__26547__delegate = function (args){
if(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.argspec,args)){
} else {
throw (new Error(["Assert failed: ",(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25300_26554 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25301_26555 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25302_26556 = true;
var _STAR_print_fn_STAR__temp_val__25303_26557 = ((function (_STAR_print_newline_STAR__orig_val__25300_26554,_STAR_print_fn_STAR__orig_val__25301_26555,_STAR_print_newline_STAR__temp_val__25302_26556,sb__4661__auto__,___$3,specs){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__25300_26554,_STAR_print_fn_STAR__orig_val__25301_26555,_STAR_print_newline_STAR__temp_val__25302_26556,sb__4661__auto__,___$3,specs))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25302_26556;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25303_26557;

try{cljs.spec.alpha.explain(self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25301_26555;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25300_26554;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})(),"\n","(pvalid? argspec args)"].join('')));
}

return cljs.spec.gen.alpha.generate(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(self__.retspec,overrides));
};
var G__26547 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26563__i = 0, G__26563__a = new Array(arguments.length -  0);
while (G__26563__i < G__26563__a.length) {G__26563__a[G__26563__i] = arguments[G__26563__i + 0]; ++G__26563__i;}
  args = new cljs.core.IndexedSeq(G__26563__a,0,null);
} 
return G__26547__delegate.call(this,args);};
G__26547.cljs$lang$maxFixedArity = 0;
G__26547.cljs$lang$applyTo = (function (arglist__26568){
var args = cljs.core.seq(arglist__26568);
return G__26547__delegate(args);
});
G__26547.cljs$core$IFn$_invoke$arity$variadic = G__26547__delegate;
return G__26547;
})()
;})(___$3,specs))
], 0));
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha25256.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.fspec_impl.cljs$core$IFn$_invoke$arity$7 ? cljs.spec.alpha.fspec_impl.cljs$core$IFn$_invoke$arity$7(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1) : cljs.spec.alpha.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha25256.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"args","args",1315556576),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,self__.aform,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ret","ret",-468222814),null,(1),null)),(new cljs.core.List(null,self__.rform,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,(1),null)),(new cljs.core.List(null,self__.fform,null,(1),null))], 0))));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha25256.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta25257","meta25257",563548239,null)], null);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha25256.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha25256.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha25256";

cljs.spec.alpha.t_cljs$spec$alpha25256.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha25256");
});})(specs))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha25256.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha25256 = ((function (specs){
return (function cljs$spec$alpha$fspec_impl_$___GT_t_cljs$spec$alpha25256(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta25257){
return (new cljs.spec.alpha.t_cljs$spec$alpha25256(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta25257));
});})(specs))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha25256(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("cljs.spec.alpha","kvs->map","cljs.spec.alpha/kvs->map",579713455),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__25311#","p1__25311#",859293568,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"p1__25311#","p1__25311#",859293568,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"p1__25311#","p1__25311#",859293568,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__25312#","p1__25312#",1829492865,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__25312#","p1__25312#",1829492865,null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"%","%",-950237169,null)))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__25311_SHARP_){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),p1__25311_SHARP_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),p1__25311_SHARP_));
}),null,true,(function (p1__25312_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25321){
var vec__25322 = p__25321;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25322,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25322,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),k,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),v], null);
}),p1__25312_SHARP_);
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.alpha.nonconforming = (function cljs$spec$alpha$nonconforming(spec){
var spec__$1 = (new cljs.core.Delay((function (){
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
}),null));
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha25325 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha25325 = (function (spec,meta25326){
this.spec = spec;
this.meta25326 = meta25326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha25325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec__$1){
return (function (_25327,meta25326__$1){
var self__ = this;
var _25327__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha25325(self__.spec,meta25326__$1));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha25325.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec__$1){
return (function (_25327){
var self__ = this;
var _25327__$1 = this;
return self__.meta25326;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha25325.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25325.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec__$1){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha25325.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec__$1){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha25325.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25325.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = cljs.spec.alpha.conform_STAR_(cljs.core.deref(self__.spec),x);
if(cljs.spec.alpha.invalid_QMARK_(ret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return x;
}
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha25325.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform_STAR_(cljs.core.deref(self__.spec),x);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha25325.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec__$1){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_STAR_(cljs.core.deref(self__.spec),path,via,in$,x);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha25325.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec__$1){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.gen_STAR_(cljs.core.deref(self__.spec),overrides,path,rmap);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha25325.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec__$1){
return (function (_,gfn){
var self__ = this;
var ___$1 = this;
var G__25337 = cljs.spec.alpha.with_gen_STAR_(cljs.core.deref(self__.spec),gfn);
return (cljs.spec.alpha.nonconforming.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.nonconforming.cljs$core$IFn$_invoke$arity$1(G__25337) : cljs.spec.alpha.nonconforming.call(null,G__25337));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha25325.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec__$1){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","nonconforming","cljs.spec.alpha/nonconforming",-1009218508,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha.describe_STAR_(cljs.core.deref(self__.spec)),null,(1),null)))));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha25325.getBasis = ((function (spec__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta25326","meta25326",832385529,null)], null);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha25325.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha25325.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha25325";

cljs.spec.alpha.t_cljs$spec$alpha25325.cljs$lang$ctorPrWriter = ((function (spec__$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha25325");
});})(spec__$1))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha25325.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha25325 = ((function (spec__$1){
return (function cljs$spec$alpha$nonconforming_$___GT_t_cljs$spec$alpha25325(spec__$2,meta25326){
return (new cljs.spec.alpha.t_cljs$spec$alpha25325(spec__$2,meta25326));
});})(spec__$1))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha25325(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.alpha.nilable_impl = (function cljs$spec$alpha$nilable_impl(form,pred,gfn){
var spec = (new cljs.core.Delay((function (){
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2(pred,form);
}),null));
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha25339 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha25339 = (function (form,pred,gfn,spec,meta25340){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
this.meta25340 = meta25340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha25339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec){
return (function (_25341,meta25340__$1){
var self__ = this;
var _25341__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha25339(self__.form,self__.pred,self__.gfn,self__.spec,meta25340__$1));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha25339.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec){
return (function (_25341){
var self__ = this;
var _25341__$1 = this;
return self__.meta25340;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha25339.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25339.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha25339.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha25339.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25339.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.conform_STAR_(cljs.core.deref(self__.spec),x);
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha25339.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.unform_STAR_(cljs.core.deref(self__.spec),x);
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha25339.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.spec),x)) || ((x == null)))){
return null;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.explain_1(self__.form,self__.pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594)),via,in$,x),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950)),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha25339.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
});})(___$1,spec))
,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.alpha.gensub(self__.pred,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594)),rmap,self__.form);
});})(___$1,spec))
,null)))], null)], null)], 0));
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha25339.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.nilable_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.nilable_impl.cljs$core$IFn$_invoke$arity$3(self__.form,self__.pred,gfn__$1) : cljs.spec.alpha.nilable_impl.call(null,self__.form,self__.pred,gfn__$1));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha25339.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)))));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha25339.getBasis = ((function (spec){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta25340","meta25340",389055764,null)], null);
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha25339.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha25339.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha25339";

cljs.spec.alpha.t_cljs$spec$alpha25339.cljs$lang$ctorPrWriter = ((function (spec){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.spec.alpha/t_cljs$spec$alpha25339");
});})(spec))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha25339.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha25339 = ((function (spec){
return (function cljs$spec$alpha$nilable_impl_$___GT_t_cljs$spec$alpha25339(form__$1,pred__$1,gfn__$1,spec__$1,meta25340){
return (new cljs.spec.alpha.t_cljs$spec$alpha25339(form__$1,pred__$1,gfn__$1,spec__$1,meta25340));
});})(spec))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha25339(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.alpha.exercise = (function cljs$spec$alpha$exercise(var_args){
var G__25359 = arguments.length;
switch (G__25359) {
case 1:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2(spec,(10));
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3(spec,n,null);
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25357_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__25357_SHARP_,cljs.spec.alpha.conform(spec,p1__25357_SHARP_)],null));
}),cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(spec,overrides),n], 0)));
});

cljs.spec.alpha.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.alpha.inst_in_range_QMARK_ = (function cljs$spec$alpha$inst_in_range_QMARK_(start,end,inst){
var and__4120__auto__ = cljs.core.inst_QMARK_(inst);
if(and__4120__auto__){
var t = cljs.core.inst_ms(inst);
return (((cljs.core.inst_ms(start) <= t)) && ((t < cljs.core.inst_ms(end))));
} else {
return and__4120__auto__;
}
});
/**
 * Return true if start <= val, val < end and val is a fixed
 *   precision integer.
 */
cljs.spec.alpha.int_in_range_QMARK_ = (function cljs$spec$alpha$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_(val)){
return (((start <= val)) && ((val < end)));
} else {
if((val instanceof goog.math.Long)){
var and__4120__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__4120__auto__)){
return val.lessThan(end);
} else {
return and__4120__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__4120__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__4120__auto__)){
return val.lessThan(end);
} else {
return and__4120__auto__;
}
} else {
return false;

}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha._STAR_compile_asserts_STAR_ !== 'undefined')){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec.alpha._STAR_compile_asserts_STAR_ = true;
}
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha._STAR_runtime_asserts_STAR_ !== 'undefined')){
} else {
cljs.spec.alpha._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.alpha.check_asserts_QMARK_ = (function cljs$spec$alpha$check_asserts_QMARK_(){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec.alpha/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.alpha.check_asserts = (function cljs$spec$alpha$check_asserts(flag){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.alpha.assert_STAR_ = (function cljs$spec$alpha$assert_STAR_(spec,x){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,x)){
return x;
} else {
var ed = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"assertion-failed","assertion-failed",-970534477))], 0));
throw (new Error(["Spec assertion failed\n",(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25379_26654 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25380_26655 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25381_26656 = true;
var _STAR_print_fn_STAR__temp_val__25382_26657 = ((function (_STAR_print_newline_STAR__orig_val__25379_26654,_STAR_print_fn_STAR__orig_val__25380_26655,_STAR_print_newline_STAR__temp_val__25381_26656,sb__4661__auto__,ed){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__25379_26654,_STAR_print_fn_STAR__orig_val__25380_26655,_STAR_print_newline_STAR__temp_val__25381_26656,sb__4661__auto__,ed))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25381_26656;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25382_26657;

try{cljs.spec.alpha.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25380_26655;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25379_26654;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()].join('')));
}
});

//# sourceMappingURL=cljs.spec.alpha.js.map
