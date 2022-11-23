goog.provide('sicmutils.value');
goog.scope(function(){
  sicmutils.value.goog$module$goog$array = goog.module.get('goog.array');
  sicmutils.value.goog$module$goog$math$Long = goog.module.get('goog.math.Long');
});
var module$node_modules$complex_DOT_js$complex=shadow.js.require("module$node_modules$complex_DOT_js$complex", {});
var module$node_modules$fraction_DOT_js$bigfraction=shadow.js.require("module$node_modules$fraction_DOT_js$bigfraction", {});

/**
 * @interface
 */
sicmutils.value.Numerical = function(){};

var sicmutils$value$Numerical$numerical_QMARK_$dyn_95383 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (sicmutils.value.numerical_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (sicmutils.value.numerical_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Numerical.numerical?",_);
}
}
});
sicmutils.value.numerical_QMARK_ = (function sicmutils$value$numerical_QMARK_(_){
if((((!((_ == null)))) && ((!((_.sicmutils$value$Numerical$numerical_QMARK_$arity$1 == null)))))){
return _.sicmutils$value$Numerical$numerical_QMARK_$arity$1(_);
} else {
return sicmutils$value$Numerical$numerical_QMARK_$dyn_95383(_);
}
});

(sicmutils.value.Numerical["_"] = true);

(sicmutils.value.numerical_QMARK_["_"] = (function (_){
return false;
}));

/**
 * @interface
 */
sicmutils.value.Value = function(){};

var sicmutils$value$Value$zero_QMARK_$dyn_95384 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sicmutils.value.zero_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (sicmutils.value.zero_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Value.zero?",this$);
}
}
});
sicmutils.value.zero_QMARK_ = (function sicmutils$value$zero_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.sicmutils$value$Value$zero_QMARK_$arity$1 == null)))))){
return this$.sicmutils$value$Value$zero_QMARK_$arity$1(this$);
} else {
return sicmutils$value$Value$zero_QMARK_$dyn_95384(this$);
}
});

var sicmutils$value$Value$one_QMARK_$dyn_95385 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sicmutils.value.one_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (sicmutils.value.one_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Value.one?",this$);
}
}
});
sicmutils.value.one_QMARK_ = (function sicmutils$value$one_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.sicmutils$value$Value$one_QMARK_$arity$1 == null)))))){
return this$.sicmutils$value$Value$one_QMARK_$arity$1(this$);
} else {
return sicmutils$value$Value$one_QMARK_$dyn_95385(this$);
}
});

var sicmutils$value$Value$identity_QMARK_$dyn_95386 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sicmutils.value.identity_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (sicmutils.value.identity_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Value.identity?",this$);
}
}
});
sicmutils.value.identity_QMARK_ = (function sicmutils$value$identity_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.sicmutils$value$Value$identity_QMARK_$arity$1 == null)))))){
return this$.sicmutils$value$Value$identity_QMARK_$arity$1(this$);
} else {
return sicmutils$value$Value$identity_QMARK_$dyn_95386(this$);
}
});

var sicmutils$value$Value$zero_like$dyn_95387 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sicmutils.value.zero_like[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (sicmutils.value.zero_like["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Value.zero-like",this$);
}
}
});
sicmutils.value.zero_like = (function sicmutils$value$zero_like(this$){
if((((!((this$ == null)))) && ((!((this$.sicmutils$value$Value$zero_like$arity$1 == null)))))){
return this$.sicmutils$value$Value$zero_like$arity$1(this$);
} else {
return sicmutils$value$Value$zero_like$dyn_95387(this$);
}
});

var sicmutils$value$Value$one_like$dyn_95388 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sicmutils.value.one_like[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (sicmutils.value.one_like["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Value.one-like",this$);
}
}
});
sicmutils.value.one_like = (function sicmutils$value$one_like(this$){
if((((!((this$ == null)))) && ((!((this$.sicmutils$value$Value$one_like$arity$1 == null)))))){
return this$.sicmutils$value$Value$one_like$arity$1(this$);
} else {
return sicmutils$value$Value$one_like$dyn_95388(this$);
}
});

var sicmutils$value$Value$identity_like$dyn_95389 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sicmutils.value.identity_like[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (sicmutils.value.identity_like["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Value.identity-like",this$);
}
}
});
sicmutils.value.identity_like = (function sicmutils$value$identity_like(this$){
if((((!((this$ == null)))) && ((!((this$.sicmutils$value$Value$identity_like$arity$1 == null)))))){
return this$.sicmutils$value$Value$identity_like$arity$1(this$);
} else {
return sicmutils$value$Value$identity_like$dyn_95389(this$);
}
});

var sicmutils$value$Value$exact_QMARK_$dyn_95390 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sicmutils.value.exact_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (sicmutils.value.exact_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Value.exact?",this$);
}
}
});
/**
 * Entries that are exact are available for `gcd`, among
 *   other operations.
 */
sicmutils.value.exact_QMARK_ = (function sicmutils$value$exact_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.sicmutils$value$Value$exact_QMARK_$arity$1 == null)))))){
return this$.sicmutils$value$Value$exact_QMARK_$arity$1(this$);
} else {
return sicmutils$value$Value$exact_QMARK_$dyn_95390(this$);
}
});

var sicmutils$value$Value$freeze$dyn_95391 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sicmutils.value.freeze[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (sicmutils.value.freeze["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Value.freeze",this$);
}
}
});
/**
 * Freezing an expression means removing wrappers and other metadata from
 *   subexpressions, so that the result is basically a pure S-expression with the
 *   same structure as the input. Doing this will rob an expression of useful
 *   information for further computation; so this is intended to be done just
 *   before simplification and printing, to simplify those processes.
 */
sicmutils.value.freeze = (function sicmutils$value$freeze(this$){
if((((!((this$ == null)))) && ((!((this$.sicmutils$value$Value$freeze$arity$1 == null)))))){
return this$.sicmutils$value$Value$freeze$arity$1(this$);
} else {
return sicmutils$value$Value$freeze$dyn_95391(this$);
}
});

var sicmutils$value$Value$kind$dyn_95393 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sicmutils.value.kind[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (sicmutils.value.kind["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Value.kind",this$);
}
}
});
sicmutils.value.kind = (function sicmutils$value$kind(this$){
if((((!((this$ == null)))) && ((!((this$.sicmutils$value$Value$kind$arity$1 == null)))))){
return this$.sicmutils$value$Value$kind$arity$1(this$);
} else {
return sicmutils$value$Value$kind$dyn_95393(this$);
}
});

sicmutils.value.argument_kind = (function sicmutils$value$argument_kind(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95394 = arguments.length;
var i__4865__auto___95395 = (0);
while(true){
if((i__4865__auto___95395 < len__4864__auto___95394)){
args__4870__auto__.push((arguments[i__4865__auto___95395]));

var G__95396 = (i__4865__auto___95395 + (1));
i__4865__auto___95395 = G__95396;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sicmutils.value.argument_kind.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sicmutils.value.argument_kind.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sicmutils.value.kind,args);
}));

(sicmutils.value.argument_kind.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.value.argument_kind.cljs$lang$applyTo = (function (seq95364){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq95364));
}));

sicmutils.value.object_name_map = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
sicmutils.value.seqtype = new cljs.core.Keyword("sicmutils.value","seq","sicmutils.value/seq",-1790417067);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.Cons,new cljs.core.Keyword("sicmutils.value","seq","sicmutils.value/seq",-1790417067));

cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.IndexedSeq,new cljs.core.Keyword("sicmutils.value","seq","sicmutils.value/seq",-1790417067));

cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector,new cljs.core.Keyword("sicmutils.value","seq","sicmutils.value/seq",-1790417067));

cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.LazySeq,new cljs.core.Keyword("sicmutils.value","seq","sicmutils.value/seq",-1790417067));

cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.List,new cljs.core.Keyword("sicmutils.value","seq","sicmutils.value/seq",-1790417067));

cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.Range,new cljs.core.Keyword("sicmutils.value","seq","sicmutils.value/seq",-1790417067));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146),new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231),new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398),new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789),new cljs.core.Keyword("sicmutils.value","number","sicmutils.value/number",1532293650));
/**
 * Returns true if x is an integral number that Clojure's math operations work
 *   with, false otherwise.
 */
sicmutils.value.native_integral_QMARK_ = (function sicmutils$value$native_integral_QMARK_(x){
return cljs.core.integer_QMARK_(x);
});
/**
 * Returns true if x is an integral number, false otherwise.
 */
sicmutils.value.integral_QMARK_ = (function sicmutils$value$integral_QMARK_(x){
return ((cljs.core.int_QMARK_(x)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("bigint",goog.typeOf(x))));
});
/**
 * Returns true if `x` is either an integral number or a floating point number (ie,
 *   in the numeric tower but not complex), false otherwise.
 */
sicmutils.value.real_QMARK_ = (function sicmutils$value$real_QMARK_(x){
return ((typeof x === 'number') || ((((x instanceof goog.math.Integer)) || ((((x instanceof sicmutils.value.goog$module$goog$math$Long)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("bigint",goog.typeOf(x))) || ((x instanceof module$node_modules$fraction_DOT_js$bigfraction)))))))));
});
/**
 * Returns true if `x` is any number type in the numeric tower:
 * 
 *   - integral
 *   - floating point
 *   - complex
 * 
 *   false otherwise.
 */
sicmutils.value.number_QMARK_ = (function sicmutils$value$number_QMARK_(x){
return ((typeof x === 'number') || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("bigint",goog.typeOf(x))) || ((((x instanceof module$node_modules$fraction_DOT_js$bigfraction)) || ((((x instanceof goog.math.Integer)) || ((((x instanceof sicmutils.value.goog$module$goog$math$Long)) || ((x instanceof module$node_modules$complex_DOT_js$complex)))))))))));
});
/**
 * Returns `true` if `x` is both a [[number?]] and [[zero?]], false otherwise.
 */
sicmutils.value.numeric_zero_QMARK_ = (function sicmutils$value$numeric_zero_QMARK_(x){
return ((sicmutils.value.number_QMARK_(x)) && (sicmutils.value.zero_QMARK_(x)));
});
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.value","number","sicmutils.value/number",1532293650),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231));
/**
 * Returns true for anything that derives from `::scalar`, ie, any numeric type in
 *   the numeric tower that responds true to [[number?]], plus symbolic expressions
 *   generated by [[sicmutils.abstract.number/literal-number]],
 * 
 *   false otherwise.
 */
sicmutils.value.scalar_QMARK_ = (function sicmutils$value$scalar_QMARK_(x){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(sicmutils.value.kind(x),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231));
});
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(Number,new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789));

cljs.core.derive.cljs$core$IFn$_invoke$arity$2(BigInt,new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231));

cljs.core.derive.cljs$core$IFn$_invoke$arity$2(goog.math.Integer,new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231));

cljs.core.derive.cljs$core$IFn$_invoke$arity$2(sicmutils.value.goog$module$goog$math$Long,new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231));
(sicmutils.value.Numerical["number"] = true);

(sicmutils.value.numerical_QMARK_["number"] = (function (_){
return true;
}));
(sicmutils.value.Value["number"] = true);

(sicmutils.value.zero_QMARK_["number"] = (function (x){
return (x === (0));
}));

(sicmutils.value.one_QMARK_["number"] = (function (x){
return ((1) === x);
}));

(sicmutils.value.identity_QMARK_["number"] = (function (x){
return ((1) === x);
}));

(sicmutils.value.zero_like["number"] = (function (_){
return (0);
}));

(sicmutils.value.one_like["number"] = (function (_){
return (1);
}));

(sicmutils.value.identity_like["number"] = (function (_){
return (1);
}));

(sicmutils.value.freeze["number"] = (function (x){
return x;
}));

(sicmutils.value.exact_QMARK_["number"] = (function (x){
return cljs.core.integer_QMARK_(x);
}));

(sicmutils.value.kind["number"] = (function (x){
if(sicmutils.value.exact_QMARK_(x)){
return new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146);
} else {
return new cljs.core.Keyword("sicmutils.value","floating-point","sicmutils.value/floating-point",308408398);
}
}));

(sicmutils.value.Value["boolean"] = true);

(sicmutils.value.zero_QMARK_["boolean"] = (function (_){
return false;
}));

(sicmutils.value.one_QMARK_["boolean"] = (function (_){
return false;
}));

(sicmutils.value.identity_QMARK_["boolean"] = (function (_){
return false;
}));

(sicmutils.value.zero_like["boolean"] = (function (_){
return (0);
}));

(sicmutils.value.one_like["boolean"] = (function (_){
return (1);
}));

(sicmutils.value.identity_like["boolean"] = (function (_){
return (1);
}));

(sicmutils.value.freeze["boolean"] = (function (x){
return x;
}));

(sicmutils.value.exact_QMARK_["boolean"] = (function (_){
return false;
}));

(sicmutils.value.kind["boolean"] = (function (x){
return cljs.core.type(x);
}));

(sicmutils.value.Value["null"] = true);

(sicmutils.value.zero_QMARK_["null"] = (function (_){
return true;
}));

(sicmutils.value.one_QMARK_["null"] = (function (_){
return false;
}));

(sicmutils.value.identity_QMARK_["null"] = (function (_){
return false;
}));

(sicmutils.value.zero_like["null"] = (function (_){
return sicmutils.util.unsupported("nil doesn't support zero-like.");
}));

(sicmutils.value.one_like["null"] = (function (_){
return sicmutils.util.unsupported("nil doesn't support one-like.");
}));

(sicmutils.value.identity_like["null"] = (function (_){
return sicmutils.util.unsupported("nil doesn't support identity-like.");
}));

(sicmutils.value.freeze["null"] = (function (_){
return null;
}));

(sicmutils.value.exact_QMARK_["null"] = (function (_){
return false;
}));

(sicmutils.value.kind["null"] = (function (_){
return null;
}));

(cljs.core.Var.prototype.sicmutils$value$Value$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Var.prototype.sicmutils$value$Value$zero_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return false;
}));

(cljs.core.Var.prototype.sicmutils$value$Value$one_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return false;
}));

(cljs.core.Var.prototype.sicmutils$value$Value$identity_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return false;
}));

(cljs.core.Var.prototype.sicmutils$value$Value$zero_like$arity$1 = (function (v){
var v__$1 = this;
return sicmutils.util.unsupported(["zero-like: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''));
}));

(cljs.core.Var.prototype.sicmutils$value$Value$one_like$arity$1 = (function (v){
var v__$1 = this;
return sicmutils.util.unsupported(["one-like: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''));
}));

(cljs.core.Var.prototype.sicmutils$value$Value$identity_like$arity$1 = (function (v){
var v__$1 = this;
return sicmutils.util.unsupported(["identity-like: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''));
}));

(cljs.core.Var.prototype.sicmutils$value$Value$freeze$arity$1 = (function (v){
var v__$1 = this;
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v__$1));
}));

(cljs.core.Var.prototype.sicmutils$value$Value$exact_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return false;
}));

(cljs.core.Var.prototype.sicmutils$value$Value$kind$arity$1 = (function (v){
var v__$1 = this;
return cljs.core.type(v__$1);
}));

(sicmutils.value.Value["_"] = true);

(sicmutils.value.zero_QMARK_["_"] = (function (_){
return false;
}));

(sicmutils.value.one_QMARK_["_"] = (function (_){
return false;
}));

(sicmutils.value.identity_QMARK_["_"] = (function (_){
return false;
}));

(sicmutils.value.zero_like["_"] = (function (o){
return sicmutils.util.unsupported(["zero-like: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)].join(''));
}));

(sicmutils.value.one_like["_"] = (function (o){
return sicmutils.util.unsupported(["one-like: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)].join(''));
}));

(sicmutils.value.identity_like["_"] = (function (o){
return sicmutils.util.unsupported(["identity-like: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)].join(''));
}));

(sicmutils.value.exact_QMARK_["_"] = (function (_){
return false;
}));

(sicmutils.value.freeze["_"] = (function (o){
if(cljs.core.sequential_QMARK_(o)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.value.freeze,o);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(sicmutils.value.object_name_map),o,o);
}
}));

(sicmutils.value.kind["_"] = (function (o){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$2(o,cljs.core.type(o));
}));
/**
 * Returns true if the supplied argument is an exact numerical zero, false
 *   otherwise.
 */
sicmutils.value.exact_zero_QMARK_ = (function sicmutils$value$exact_zero_QMARK_(n){
return ((sicmutils.value.number_QMARK_(n)) && (((sicmutils.value.exact_QMARK_(n)) && (sicmutils.value.zero_QMARK_(n)))));
});
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.value !== 'undefined') && (typeof sicmutils.value._EQ_ !== 'undefined')){
} else {
sicmutils.value._EQ_ = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95365 = cljs.core.get_global_hierarchy;
return (fexpr__95365.cljs$core$IFn$_invoke$arity$0 ? fexpr__95365.cljs$core$IFn$_invoke$arity$0() : fexpr__95365.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.value","="),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","number","sicmutils.value/number",1532293650),new cljs.core.Keyword("sicmutils.value","number","sicmutils.value/number",1532293650)], null),(function (l,r){
return (l === r);
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.value.seqtype,sicmutils.value.seqtype], null),(function (l,r){
var and__4251__auto__ = sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(l),cljs.core.count(r));
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(sicmutils.value._EQ_,l,r));
} else {
return and__4251__auto__;
}
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (l,r){
if(((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(sicmutils.value.kind(l),new cljs.core.Keyword("sicmutils.value","number","sicmutils.value/number",1532293650))) || (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(sicmutils.value.kind(r),new cljs.core.Keyword("sicmutils.value","number","sicmutils.value/number",1532293650))))){
return false;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,r);
}
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146),BigInt], null),(function (l,r){
return (l == r);
}));

sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [BigInt,new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),(function (l,r){
return (l == r);
}));

var seq__95366_95412 = cljs.core.seq(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.value.goog$module$goog$math$Long,goog.math.Integer,sicmutils.util.int$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146),goog.math.Integer,sicmutils.util.int$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146),sicmutils.value.goog$module$goog$math$Long,sicmutils.util.long$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.value.goog$module$goog$math$Long,BigInt,sicmutils.util.bigint], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,BigInt,sicmutils.util.bigint], null)], null));
var chunk__95367_95413 = null;
var count__95368_95414 = (0);
var i__95369_95415 = (0);
while(true){
if((i__95369_95415 < count__95368_95414)){
var vec__95376_95416 = chunk__95367_95413.cljs$core$IIndexed$_nth$arity$2(null,i__95369_95415);
var from_95417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95376_95416,(0),null);
var to_95418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95376_95416,(1),null);
var f_95419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95376_95416,(2),null);
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_95417,to_95418], null),((function (seq__95366_95412,chunk__95367_95413,count__95368_95414,i__95369_95415,vec__95376_95416,from_95417,to_95418,f_95419){
return (function (l,r){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((f_95419.cljs$core$IFn$_invoke$arity$1 ? f_95419.cljs$core$IFn$_invoke$arity$1(l) : f_95419.call(null,l)),r);
});})(seq__95366_95412,chunk__95367_95413,count__95368_95414,i__95369_95415,vec__95376_95416,from_95417,to_95418,f_95419))
);

sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_95418,from_95417], null),((function (seq__95366_95412,chunk__95367_95413,count__95368_95414,i__95369_95415,vec__95376_95416,from_95417,to_95418,f_95419){
return (function (l,r){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(f_95419.cljs$core$IFn$_invoke$arity$1 ? f_95419.cljs$core$IFn$_invoke$arity$1(r) : f_95419.call(null,r)));
});})(seq__95366_95412,chunk__95367_95413,count__95368_95414,i__95369_95415,vec__95376_95416,from_95417,to_95418,f_95419))
);


var G__95420 = seq__95366_95412;
var G__95421 = chunk__95367_95413;
var G__95422 = count__95368_95414;
var G__95423 = (i__95369_95415 + (1));
seq__95366_95412 = G__95420;
chunk__95367_95413 = G__95421;
count__95368_95414 = G__95422;
i__95369_95415 = G__95423;
continue;
} else {
var temp__5753__auto___95424 = cljs.core.seq(seq__95366_95412);
if(temp__5753__auto___95424){
var seq__95366_95425__$1 = temp__5753__auto___95424;
if(cljs.core.chunked_seq_QMARK_(seq__95366_95425__$1)){
var c__4679__auto___95426 = cljs.core.chunk_first(seq__95366_95425__$1);
var G__95427 = cljs.core.chunk_rest(seq__95366_95425__$1);
var G__95428 = c__4679__auto___95426;
var G__95429 = cljs.core.count(c__4679__auto___95426);
var G__95430 = (0);
seq__95366_95412 = G__95427;
chunk__95367_95413 = G__95428;
count__95368_95414 = G__95429;
i__95369_95415 = G__95430;
continue;
} else {
var vec__95379_95431 = cljs.core.first(seq__95366_95425__$1);
var from_95432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95379_95431,(0),null);
var to_95433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95379_95431,(1),null);
var f_95434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95379_95431,(2),null);
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_95432,to_95433], null),((function (seq__95366_95412,chunk__95367_95413,count__95368_95414,i__95369_95415,vec__95379_95431,from_95432,to_95433,f_95434,seq__95366_95425__$1,temp__5753__auto___95424){
return (function (l,r){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((f_95434.cljs$core$IFn$_invoke$arity$1 ? f_95434.cljs$core$IFn$_invoke$arity$1(l) : f_95434.call(null,l)),r);
});})(seq__95366_95412,chunk__95367_95413,count__95368_95414,i__95369_95415,vec__95379_95431,from_95432,to_95433,f_95434,seq__95366_95425__$1,temp__5753__auto___95424))
);

sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_95433,from_95432], null),((function (seq__95366_95412,chunk__95367_95413,count__95368_95414,i__95369_95415,vec__95379_95431,from_95432,to_95433,f_95434,seq__95366_95425__$1,temp__5753__auto___95424){
return (function (l,r){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(f_95434.cljs$core$IFn$_invoke$arity$1 ? f_95434.cljs$core$IFn$_invoke$arity$1(r) : f_95434.call(null,r)));
});})(seq__95366_95412,chunk__95367_95413,count__95368_95414,i__95369_95415,vec__95379_95431,from_95432,to_95433,f_95434,seq__95366_95425__$1,temp__5753__auto___95424))
);


var G__95435 = cljs.core.next(seq__95366_95425__$1);
var G__95436 = null;
var G__95437 = (0);
var G__95438 = (0);
seq__95366_95412 = G__95435;
chunk__95367_95413 = G__95436;
count__95368_95414 = G__95437;
i__95369_95415 = G__95438;
continue;
}
} else {
}
}
break;
}

sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.value.goog$module$goog$math$Long,sicmutils.value.goog$module$goog$math$Long], null),(function (l,r){
return l.equals(r);
}));

sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.math.Integer,goog.math.Integer], null),(function (l,r){
return l.equals(r);
}));

(cljs.core.IEquiv["number"] = true);

(cljs.core._equiv["number"] = (function (this$,other){
if(typeof other === 'number'){
return (this$ === other);
} else {
if(sicmutils.value.numerical_QMARK_(other)){
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(this$,other.valueOf());
} else {
return false;

}
}
}));

(goog.math.Integer.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(goog.math.Integer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.math.Integer,cljs.core.type(other))){
return this$__$1.equals(other);
} else {
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,other.valueOf());
}
}));

(sicmutils.value.goog$module$goog$math$Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.value.goog$module$goog$math$Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.value.goog$module$goog$math$Long,cljs.core.type(other))){
return this$__$1.equals(other);
} else {
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,other.valueOf());
}
}));
(BigInt.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(BigInt.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var this$__$1 = this;
var other = o.valueOf();
if(sicmutils.util.bigint_QMARK_(other)){
return (this$__$1 == other);
} else {
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,other);
}
}));

(BigInt.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(BigInt.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var x__$1 = this;
var rep = (((x__$1 <= Number.MAX_SAFE_INTEGER))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1):["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1),"\""].join(''));
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#sicm/bigint ",rep], 0));
}));
(sicmutils.value.goog$module$goog$math$Long.prototype.valueOf = (function (){
var this$ = this;
return this$.toNumber();
}));

(goog.math.Integer.prototype.valueOf = (function (){
var this$ = this;
return this$.toNumber();
}));
(cljs.core.IComparable["number"] = true);

(cljs.core._compare["number"] = (function (this$,o){
var other = o.valueOf();
if(sicmutils.value.real_QMARK_(other)){
return sicmutils.value.goog$module$goog$array.defaultCompare(this$,other);
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)].join('')));
}
}));

(BigInt.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL);

(BigInt.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,o){
var this$__$1 = this;
var other = o.valueOf();
if(sicmutils.value.real_QMARK_(other)){
return sicmutils.value.goog$module$goog$array.defaultCompare(this$__$1,other);
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)].join('')));
}
}));

(goog.math.Integer.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL);

(goog.math.Integer.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,o){
var this$__$1 = this;
var other = o.valueOf();
if((other instanceof goog.math.Integer)){
return this$__$1.compare(other);
} else {
if(sicmutils.value.real_QMARK_(other)){
return sicmutils.value.goog$module$goog$array.defaultCompare(this$__$1,other);
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)].join('')));

}
}
}));

(sicmutils.value.goog$module$goog$math$Long.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.value.goog$module$goog$math$Long.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,o){
var this$__$1 = this;
var other = o.valueOf();
if((other instanceof sicmutils.value.goog$module$goog$math$Long)){
return this$__$1.compare(other);
} else {
if(sicmutils.value.real_QMARK_(other)){
return sicmutils.value.goog$module$goog$array.defaultCompare(this$__$1,other);
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)].join('')));

}
}
}));
var big_zero_95446 = BigInt((0));
var big_one_95447 = BigInt((1));
(BigInt.prototype.sicmutils$value$Numerical$ = cljs.core.PROTOCOL_SENTINEL);

(BigInt.prototype.sicmutils$value$Numerical$numerical_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return true;
}));

(goog.math.Integer.prototype.sicmutils$value$Numerical$ = cljs.core.PROTOCOL_SENTINEL);

(goog.math.Integer.prototype.sicmutils$value$Numerical$numerical_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return true;
}));

(sicmutils.value.goog$module$goog$math$Long.prototype.sicmutils$value$Numerical$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.value.goog$module$goog$math$Long.prototype.sicmutils$value$Numerical$numerical_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return true;
}));

(BigInt.prototype.sicmutils$value$Value$ = cljs.core.PROTOCOL_SENTINEL);

(BigInt.prototype.sicmutils$value$Value$zero_QMARK_$arity$1 = (function (x){
var x__$1 = this;
return (big_zero_95446 == x__$1);
}));

(BigInt.prototype.sicmutils$value$Value$one_QMARK_$arity$1 = (function (x){
var x__$1 = this;
return (big_one_95447 == x__$1);
}));

(BigInt.prototype.sicmutils$value$Value$identity_QMARK_$arity$1 = (function (x){
var x__$1 = this;
return (big_one_95447 == x__$1);
}));

(BigInt.prototype.sicmutils$value$Value$zero_like$arity$1 = (function (_){
var ___$1 = this;
return big_zero_95446;
}));

(BigInt.prototype.sicmutils$value$Value$one_like$arity$1 = (function (_){
var ___$1 = this;
return big_one_95447;
}));

(BigInt.prototype.sicmutils$value$Value$identity_like$arity$1 = (function (_){
var ___$1 = this;
return big_one_95447;
}));

(BigInt.prototype.sicmutils$value$Value$freeze$arity$1 = (function (x){
var x__$1 = this;
if((x__$1 <= Number.MAX_SAFE_INTEGER)){
return Number(x__$1);
} else {
return x__$1;
}
}));

(BigInt.prototype.sicmutils$value$Value$exact_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return true;
}));

(BigInt.prototype.sicmutils$value$Value$kind$arity$1 = (function (_){
var ___$1 = this;
return BigInt;
}));

(goog.math.Integer.prototype.sicmutils$value$Value$ = cljs.core.PROTOCOL_SENTINEL);

(goog.math.Integer.prototype.sicmutils$value$Value$zero_QMARK_$arity$1 = (function (x){
var x__$1 = this;
return x__$1.isZero();
}));

(goog.math.Integer.prototype.sicmutils$value$Value$one_QMARK_$arity$1 = (function (x){
var x__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.math.Integer.ONE,x__$1);
}));

(goog.math.Integer.prototype.sicmutils$value$Value$identity_QMARK_$arity$1 = (function (x){
var x__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.math.Integer.ONE,x__$1);
}));

(goog.math.Integer.prototype.sicmutils$value$Value$zero_like$arity$1 = (function (_){
var ___$1 = this;
return goog.math.Integer.ZERO;
}));

(goog.math.Integer.prototype.sicmutils$value$Value$one_like$arity$1 = (function (_){
var ___$1 = this;
return goog.math.Integer.ONE;
}));

(goog.math.Integer.prototype.sicmutils$value$Value$identity_like$arity$1 = (function (_){
var ___$1 = this;
return goog.math.Integer.ONE;
}));

(goog.math.Integer.prototype.sicmutils$value$Value$freeze$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
}));

(goog.math.Integer.prototype.sicmutils$value$Value$exact_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return true;
}));

(goog.math.Integer.prototype.sicmutils$value$Value$kind$arity$1 = (function (_){
var ___$1 = this;
return goog.math.Integer;
}));

(sicmutils.value.goog$module$goog$math$Long.prototype.sicmutils$value$Value$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.value.goog$module$goog$math$Long.prototype.sicmutils$value$Value$zero_QMARK_$arity$1 = (function (x){
var x__$1 = this;
return x__$1.isZero();
}));

(sicmutils.value.goog$module$goog$math$Long.prototype.sicmutils$value$Value$one_QMARK_$arity$1 = (function (x){
var x__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.value.goog$module$goog$math$Long.getOne(),x__$1);
}));

(sicmutils.value.goog$module$goog$math$Long.prototype.sicmutils$value$Value$identity_QMARK_$arity$1 = (function (x){
var x__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.value.goog$module$goog$math$Long.getOne(),x__$1);
}));

(sicmutils.value.goog$module$goog$math$Long.prototype.sicmutils$value$Value$zero_like$arity$1 = (function (_){
var ___$1 = this;
return sicmutils.value.goog$module$goog$math$Long.getZero();
}));

(sicmutils.value.goog$module$goog$math$Long.prototype.sicmutils$value$Value$one_like$arity$1 = (function (_){
var ___$1 = this;
return sicmutils.value.goog$module$goog$math$Long.getOne();
}));

(sicmutils.value.goog$module$goog$math$Long.prototype.sicmutils$value$Value$identity_like$arity$1 = (function (_){
var ___$1 = this;
return sicmutils.value.goog$module$goog$math$Long.getOne();
}));

(sicmutils.value.goog$module$goog$math$Long.prototype.sicmutils$value$Value$freeze$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
}));

(sicmutils.value.goog$module$goog$math$Long.prototype.sicmutils$value$Value$exact_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return true;
}));

(sicmutils.value.goog$module$goog$math$Long.prototype.sicmutils$value$Value$kind$arity$1 = (function (_){
var ___$1 = this;
return sicmutils.value.goog$module$goog$math$Long;
}));
/**
 * Returns a predicate that returns true if its argument matches the supplied
 *   kind-keyword `k`, false otherwise.
 */
sicmutils.value.kind_predicate = (function sicmutils$value$kind_predicate(x){
var k = sicmutils.value.kind(x);
return (function (x2){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(sicmutils.value.kind(x2),k);
});
});
/**
 * Comparator. Clone of [[cljs.core/compare]] that works with the expanded
 *    SICMUtils numeric tower.
 * 
 *   Returns a negative number, zero, or a positive number when x is logically
 *   'less than', 'equal to', or 'greater than' y. Uses IComparable if available
 *   and google.array.defaultCompare for objects of the same type and special-cases
 *   nil to be less than any other object.
 */
sicmutils.value.compare = (function sicmutils$value$compare(x,y){
if((x === y)){
return (0);
} else {
if((x == null)){
return (-1);
} else {
if((y == null)){
return (1);
} else {
if(typeof x === 'number'){
var yv = y.valueOf();
if(sicmutils.value.real_QMARK_(yv)){
return sicmutils.value.goog$module$goog$array.defaultCompare(x,yv);
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')));
}
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition1$ & (2048))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IComparable$))))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IComparable,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IComparable,x))){
return cljs.core._compare(x,y);
} else {
if(((((typeof x === 'string') || (((cljs.core.array_QMARK_(x)) || (((x === true) || (x === false))))))) && ((cljs.core.type(x) === cljs.core.type(y))))){
return sicmutils.value.goog$module$goog$array.defaultCompare(x,y);
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')));
}

}
}
}
}
}
});
sicmutils.value.add_object_symbols_BANG_ = (function sicmutils$value$add_object_symbols_BANG_(o__GT_syms){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sicmutils.value.object_name_map,cljs.core.into,o__GT_syms);
});
sicmutils.value.machine_epsilon = (function (){var e = 1.0;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1.0,(e + 1.0))){
return (e * 2.0);
} else {
var G__95448 = (e / 2.0);
e = G__95448;
continue;
}
break;
}
})();
sicmutils.value.sqrt_machine_epsilon = Math.sqrt(sicmutils.value.machine_epsilon);
/**
 * Returns a function that tests whether two values are within ε of each other.
 */
sicmutils.value.within = (function sicmutils$value$within(ε){
return (function (x,y){
return (Math.abs((x - y)) < ε);
});
});
sicmutils.value.relative_integer_tolerance = ((100) * sicmutils.value.machine_epsilon);
sicmutils.value.absolute_integer_tolerance = 1.0E-20;
/**
 * Returns true if `x` is either:
 * 
 *   - [[integral?]],
 *   - a floating point number either < [[absolute-integer-tolerance]] (if near
 *  zero) or within [[relative-integer-tolerance]] of the closest integer,
 * 
 *   false otherwise.
 */
sicmutils.value.almost_integral_QMARK_ = (function sicmutils$value$almost_integral_QMARK_(x){
var or__4253__auto__ = sicmutils.value.integral_QMARK_(x);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var and__4251__auto__ = cljs.core.float_QMARK_(x);
if(and__4251__auto__){
var x__$1 = x;
var z = Math.round(x__$1);
if(sicmutils.value.zero_QMARK_(z)){
return (Math.abs(x__$1) < sicmutils.value.absolute_integer_tolerance);
} else {
return (Math.abs(((x__$1 - z) / z)) < sicmutils.value.relative_integer_tolerance);
}
} else {
return and__4251__auto__;
}
}
});
sicmutils.value.twopi = ((2) * Math.PI);
sicmutils.value.principal_value = (function sicmutils$value$principal_value(cuthigh){
var cutlow = (cuthigh - sicmutils.value.twopi);
return (function (x){
if((((cutlow <= x)) && ((x < cuthigh)))){
return x;
} else {
var y = (x - (sicmutils.value.twopi * Math.floor((x / sicmutils.value.twopi))));
if((y < cuthigh)){
return y;
} else {
return (y - sicmutils.value.twopi);
}
}
});
});

//# sourceMappingURL=sicmutils.value.js.map
