goog.provide('sicmutils.ratio');
goog.scope(function(){
  sicmutils.ratio.goog$module$goog$array = goog.module.get('goog.array');
  sicmutils.ratio.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$fraction_DOT_js$bigfraction=shadow.js.require("module$node_modules$fraction_DOT_js$bigfraction", {});
sicmutils.ratio.ratiotype = module$node_modules$fraction_DOT_js$bigfraction;
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(sicmutils.ratio.ratiotype,new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789));
sicmutils.ratio.ratio_QMARK_ = (function sicmutils$ratio$ratio_QMARK_(r){
return (r instanceof module$node_modules$fraction_DOT_js$bigfraction);
});

/**
 * @interface
 */
sicmutils.ratio.IRational = function(){};

var sicmutils$ratio$IRational$numerator$dyn_78136 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (sicmutils.ratio.numerator[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (sicmutils.ratio.numerator["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IRational.numerator",_);
}
}
});
sicmutils.ratio.numerator = (function sicmutils$ratio$numerator(_){
if((((!((_ == null)))) && ((!((_.sicmutils$ratio$IRational$numerator$arity$1 == null)))))){
return _.sicmutils$ratio$IRational$numerator$arity$1(_);
} else {
return sicmutils$ratio$IRational$numerator$dyn_78136(_);
}
});

var sicmutils$ratio$IRational$denominator$dyn_78138 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (sicmutils.ratio.denominator[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (sicmutils.ratio.denominator["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IRational.denominator",_);
}
}
});
sicmutils.ratio.denominator = (function sicmutils$ratio$denominator(_){
if((((!((_ == null)))) && ((!((_.sicmutils$ratio$IRational$denominator$arity$1 == null)))))){
return _.sicmutils$ratio$IRational$denominator$arity$1(_);
} else {
return sicmutils$ratio$IRational$denominator$dyn_78138(_);
}
});

(sicmutils.ratio.IRational["_"] = true);

(sicmutils.ratio.numerator["_"] = (function (x){
return x;
}));

(sicmutils.ratio.denominator["_"] = (function (_){
return (1);
}));

(module$node_modules$fraction_DOT_js$bigfraction.prototype.sicmutils$ratio$IRational$ = cljs.core.PROTOCOL_SENTINEL);

(module$node_modules$fraction_DOT_js$bigfraction.prototype.sicmutils$ratio$IRational$numerator$arity$1 = (function (x){
var x__$1 = this;
if((sicmutils.ratio.goog$module$goog$object.get(x__$1,"s") > (0))){
return sicmutils.ratio.goog$module$goog$object.get(x__$1,"n");
} else {
return (- sicmutils.ratio.goog$module$goog$object.get(x__$1,"n"));
}
}));

(module$node_modules$fraction_DOT_js$bigfraction.prototype.sicmutils$ratio$IRational$denominator$arity$1 = (function (x){
var x__$1 = this;
return sicmutils.ratio.goog$module$goog$object.get(x__$1,"d");
}));
sicmutils.ratio.promote = (function sicmutils$ratio$promote(x){
if(sicmutils.value.one_QMARK_(sicmutils.ratio.denominator(x))){
return sicmutils.ratio.numerator(x);
} else {
return x;
}
});
/**
 * Construct a ratio.
 */
sicmutils.ratio.rationalize = (function sicmutils$ratio$rationalize(var_args){
var G__78053 = arguments.length;
switch (G__78053) {
case 1:
return sicmutils.ratio.rationalize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.ratio.rationalize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.ratio.rationalize.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(sicmutils.value.integral_QMARK_(x)){
return x;
} else {
return (new module$node_modules$fraction_DOT_js$bigfraction(x));
}
}));

(sicmutils.ratio.rationalize.cljs$core$IFn$_invoke$arity$2 = (function (n,d){
if(sicmutils.value.one_QMARK_(d)){
return n;
} else {
return sicmutils.ratio.promote((new module$node_modules$fraction_DOT_js$bigfraction(n,d)));
}
}));

(sicmutils.ratio.rationalize.cljs$lang$maxFixedArity = 2);

sicmutils.ratio.ratio_pattern = /([-+]?[0-9]+)\/([0-9]+)/;
sicmutils.ratio.matches_QMARK_ = (function sicmutils$ratio$matches_QMARK_(pattern__$1,s){
var vec__78064 = cljs.core.re_find(pattern__$1,s);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78064,(0),null);
return (match === s);
});
sicmutils.ratio.match_ratio = (function sicmutils$ratio$match_ratio(s){
var m = cljs.core.vec(cljs.core.re_find(sicmutils.ratio.ratio_pattern,s));
var numerator = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((1)) : m.call(null,(1)));
var denominator = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((2)) : m.call(null,(2)));
var numerator__$1 = (cljs.core.truth_(cljs.core.re_find(/^\+/,numerator))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(numerator,(1)):numerator);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("sicmutils.ratio","rationalize","sicmutils.ratio/rationalize",322986471,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("sicmutils.util","bigint","sicmutils.util/bigint",-1438431697,null),null,(1),null)),(new cljs.core.List(null,numerator__$1,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("sicmutils.util","bigint","sicmutils.util/bigint",-1438431697,null),null,(1),null)),(new cljs.core.List(null,denominator,null,(1),null))))),null,(1),null))], 0))));
});
/**
 * Parser for the `#sicm/ratio` literal.
 */
sicmutils.ratio.parse_ratio = (function sicmutils$ratio$parse_ratio(x){
while(true){
if(sicmutils.value.number_QMARK_(x)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("sicmutils.ratio","rationalize","sicmutils.ratio/rationalize",322986471,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
} else {
if(typeof x === 'string'){
if(sicmutils.ratio.matches_QMARK_(sicmutils.ratio.ratio_pattern,x)){
return sicmutils.ratio.match_ratio(x);
} else {
var G__78141 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(x);
x = G__78141;
continue;
}
} else {
return sicmutils.util.illegal(["Invalid ratio: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));

}
}
break;
}
});
var ZERO_78142 = (new module$node_modules$fraction_DOT_js$bigfraction((0)));
var ONE_78143 = (new module$node_modules$fraction_DOT_js$bigfraction((1)));
(module$node_modules$fraction_DOT_js$bigfraction.prototype.sicmutils$value$Numerical$ = cljs.core.PROTOCOL_SENTINEL);

(module$node_modules$fraction_DOT_js$bigfraction.prototype.sicmutils$value$Numerical$numerical_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return true;
}));

(module$node_modules$fraction_DOT_js$bigfraction.prototype.sicmutils$value$Value$ = cljs.core.PROTOCOL_SENTINEL);

(module$node_modules$fraction_DOT_js$bigfraction.prototype.sicmutils$value$Value$zero_QMARK_$arity$1 = (function (c){
var c__$1 = this;
return c__$1.equals(ZERO_78142);
}));

(module$node_modules$fraction_DOT_js$bigfraction.prototype.sicmutils$value$Value$one_QMARK_$arity$1 = (function (c){
var c__$1 = this;
return c__$1.equals(ONE_78143);
}));

(module$node_modules$fraction_DOT_js$bigfraction.prototype.sicmutils$value$Value$identity_QMARK_$arity$1 = (function (c){
var c__$1 = this;
return c__$1.equals(ONE_78143);
}));

(module$node_modules$fraction_DOT_js$bigfraction.prototype.sicmutils$value$Value$zero_like$arity$1 = (function (_){
var ___$1 = this;
return (0);
}));

(module$node_modules$fraction_DOT_js$bigfraction.prototype.sicmutils$value$Value$one_like$arity$1 = (function (_){
var ___$1 = this;
return (1);
}));

(module$node_modules$fraction_DOT_js$bigfraction.prototype.sicmutils$value$Value$identity_like$arity$1 = (function (_){
var ___$1 = this;
return (1);
}));

(module$node_modules$fraction_DOT_js$bigfraction.prototype.sicmutils$value$Value$freeze$arity$1 = (function (x){
var x__$1 = this;
var n = sicmutils.ratio.numerator(x__$1);
var d = sicmutils.ratio.denominator(x__$1);
if(sicmutils.value.one_QMARK_(d)){
return sicmutils.value.freeze(n);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(n),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sicmutils.value.freeze(d),null,(1),null))], 0))));
}
}));

(module$node_modules$fraction_DOT_js$bigfraction.prototype.sicmutils$value$Value$exact_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return true;
}));

(module$node_modules$fraction_DOT_js$bigfraction.prototype.sicmutils$value$Value$kind$arity$1 = (function (_){
var ___$1 = this;
return module$node_modules$fraction_DOT_js$bigfraction;
}));

(module$node_modules$fraction_DOT_js$bigfraction.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(module$node_modules$fraction_DOT_js$bigfraction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if(sicmutils.ratio.ratio_QMARK_(other)){
return this$__$1.equals(other);
} else {
if(sicmutils.value.integral_QMARK_(other)){
var and__4251__auto__ = sicmutils.value.one_QMARK_(sicmutils.ratio.denominator(this$__$1));
if(and__4251__auto__){
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.ratio.numerator(this$__$1),other);
} else {
return and__4251__auto__;
}
} else {
return false;

}
}
}));

(module$node_modules$fraction_DOT_js$bigfraction.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL);

(module$node_modules$fraction_DOT_js$bigfraction.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(sicmutils.ratio.ratio_QMARK_(other)){
return this$__$1.compare(other);
} else {
var o_value = other.valueOf();
if(sicmutils.value.real_QMARK_(o_value)){
return sicmutils.ratio.goog$module$goog$array.defaultCompare(this$__$1,o_value);
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
}
}));

(module$node_modules$fraction_DOT_js$bigfraction.prototype.toString = (function (){
var r = this;
var x = sicmutils.value.freeze(r);
if(typeof x === 'number'){
return x;
} else {
var vec__78090 = x;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78090,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78090,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78090,(2),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(d)].join('');
}
}));

(module$node_modules$fraction_DOT_js$bigfraction.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(module$node_modules$fraction_DOT_js$bigfraction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){
var x__$1 = this;
var n = sicmutils.ratio.numerator(x__$1);
var d = sicmutils.ratio.denominator(x__$1);
if(sicmutils.value.one_QMARK_(d)){
return cljs.core._pr_writer(n,writer,opts);
} else {
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#sicm/ratio \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(d),"\""], 0));
}
}));
sicmutils.ratio.pow = (function sicmutils$ratio$pow(r,m){
var n = sicmutils.ratio.numerator(r);
var d = sicmutils.ratio.denominator(r);
if((m < (0))){
return sicmutils.ratio.rationalize.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.expt.cljs$core$IFn$_invoke$arity$2(d,sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(m)),sicmutils.generic.expt.cljs$core$IFn$_invoke$arity$2(n,sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(m)));
} else {
return sicmutils.ratio.rationalize.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.expt.cljs$core$IFn$_invoke$arity$2(n,m),sicmutils.generic.expt.cljs$core$IFn$_invoke$arity$2(d,m));
}
});

sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789),module$node_modules$fraction_DOT_js$bigfraction], null),(function (l,r){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,l);
}));

sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$fraction_DOT_js$bigfraction,module$node_modules$fraction_DOT_js$bigfraction], null),(function (a,b){
return sicmutils.ratio.promote(a.add(b));
}));

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$fraction_DOT_js$bigfraction,module$node_modules$fraction_DOT_js$bigfraction], null),(function (a,b){
return sicmutils.ratio.promote(a.sub(b));
}));

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$fraction_DOT_js$bigfraction,module$node_modules$fraction_DOT_js$bigfraction], null),(function (a,b){
return sicmutils.ratio.promote(a.mul(b));
}));

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$fraction_DOT_js$bigfraction,module$node_modules$fraction_DOT_js$bigfraction], null),(function (a,b){
return sicmutils.ratio.promote(a.div(b));
}));

sicmutils.generic.exact_divide.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$fraction_DOT_js$bigfraction,module$node_modules$fraction_DOT_js$bigfraction], null),(function (a,b){
return sicmutils.ratio.promote(a.div(b));
}));

sicmutils.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$fraction_DOT_js$bigfraction], null),(function (a){
return sicmutils.ratio.promote(a.neg());
}));

sicmutils.generic.negative_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$fraction_DOT_js$bigfraction], null),(function (a){
return (sicmutils.ratio.goog$module$goog$object.get(a,"s") < (0));
}));

sicmutils.generic.infinite_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$fraction_DOT_js$bigfraction], null),(function (_){
return false;
}));

sicmutils.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$fraction_DOT_js$bigfraction], null),(function (a){
return sicmutils.ratio.promote(a.inverse());
}));

sicmutils.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$fraction_DOT_js$bigfraction], null),(function (a){
return sicmutils.ratio.promote(a.mul(a));
}));

sicmutils.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$fraction_DOT_js$bigfraction], null),(function (a){
return sicmutils.ratio.promote(a.pow((3)));
}));

sicmutils.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$fraction_DOT_js$bigfraction], null),(function (a){
return sicmutils.ratio.promote(a.abs());
}));

sicmutils.generic.magnitude.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$fraction_DOT_js$bigfraction], null),(function (a){
return sicmutils.ratio.promote(a.abs());
}));

sicmutils.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$fraction_DOT_js$bigfraction,module$node_modules$fraction_DOT_js$bigfraction], null),(function (a,b){
return sicmutils.ratio.promote(a.gcd(b));
}));

sicmutils.generic.lcm.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$fraction_DOT_js$bigfraction,module$node_modules$fraction_DOT_js$bigfraction], null),(function (a,b){
return sicmutils.ratio.promote(a.lcm(b));
}));

sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$fraction_DOT_js$bigfraction,new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),(function (a,b){
return sicmutils.ratio.pow(a,b);
}));

sicmutils.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$fraction_DOT_js$bigfraction], null),(function (a){
if((a < (0))){
return sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$1(a.valueOf()));
} else {
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.util.double$(sicmutils.ratio.numerator(a))),sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.util.double$(sicmutils.ratio.denominator(a))));
}
}));

sicmutils.generic.modulo.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$fraction_DOT_js$bigfraction,module$node_modules$fraction_DOT_js$bigfraction], null),(function (a,b){
return sicmutils.ratio.promote(a.mod(b).add(b).mod(b));
}));

sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$fraction_DOT_js$bigfraction,module$node_modules$fraction_DOT_js$bigfraction], null),(function (a,b){
if(sicmutils.value.one_QMARK_(sicmutils.ratio.denominator(b))){
return sicmutils.ratio.promote(a.pow(sicmutils.ratio.numerator(b)));
} else {
return sicmutils.generic.expt.cljs$core$IFn$_invoke$arity$2(a.valueOf(),b.valueOf());
}
}));

sicmutils.generic.quotient.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$fraction_DOT_js$bigfraction,module$node_modules$fraction_DOT_js$bigfraction], null),(function (a,b){
return sicmutils.ratio.promote((function (){var x = a.div(b);
if((sicmutils.ratio.goog$module$goog$object.get(x,"s") > (0))){
return x.floor();
} else {
return x.ceil();
}
})());
}));

sicmutils.generic.remainder.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$fraction_DOT_js$bigfraction,module$node_modules$fraction_DOT_js$bigfraction], null),(function (a,b){
return sicmutils.ratio.promote(a.mod(b));
}));

/**
 * Anything that `upcast-number` doesn't catch will hit this and pull a floating
 *   point value out of the ratio.
 */
sicmutils.ratio.downcast_fraction = (function sicmutils$ratio$downcast_fraction(op){
op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$fraction_DOT_js$bigfraction,new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a,b){
var G__78115 = a.valueOf();
var G__78116 = b;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__78115,G__78116) : op.call(null,G__78115,G__78116));
}));

return op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789),module$node_modules$fraction_DOT_js$bigfraction], null),(function (a,b){
var G__78117 = a;
var G__78118 = b.valueOf();
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__78117,G__78118) : op.call(null,G__78117,G__78118));
}));
});

/**
 * Integrals can stay exact, so they become ratios before op.
 */
sicmutils.ratio.upcast_number = (function sicmutils$ratio$upcast_number(op){
op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$fraction_DOT_js$bigfraction,new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),(function (a,b){
var G__78119 = a;
var G__78120 = (new module$node_modules$fraction_DOT_js$bigfraction(b,(1)));
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__78119,G__78120) : op.call(null,G__78119,G__78120));
}));

return op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231),module$node_modules$fraction_DOT_js$bigfraction], null),(function (a,b){
var G__78121 = (new module$node_modules$fraction_DOT_js$bigfraction(a,(1)));
var G__78122 = b;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__78121,G__78122) : op.call(null,G__78121,G__78122));
}));
});

sicmutils.ratio.upcast_number(sicmutils.generic.exact_divide);

sicmutils.ratio.downcast_fraction(sicmutils.generic.expt);

var seq__78123_78144 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.add,sicmutils.generic.mul,sicmutils.generic.sub,sicmutils.generic.gcd,sicmutils.generic.lcm,sicmutils.generic.modulo,sicmutils.generic.remainder,sicmutils.generic.quotient,sicmutils.generic.div], null));
var chunk__78124_78145 = null;
var count__78125_78146 = (0);
var i__78126_78147 = (0);
while(true){
if((i__78126_78147 < count__78125_78146)){
var op_78148 = chunk__78124_78145.cljs$core$IIndexed$_nth$arity$2(null,i__78126_78147);
sicmutils.ratio.upcast_number(op_78148);

sicmutils.ratio.downcast_fraction(op_78148);


var G__78149 = seq__78123_78144;
var G__78150 = chunk__78124_78145;
var G__78151 = count__78125_78146;
var G__78152 = (i__78126_78147 + (1));
seq__78123_78144 = G__78149;
chunk__78124_78145 = G__78150;
count__78125_78146 = G__78151;
i__78126_78147 = G__78152;
continue;
} else {
var temp__5753__auto___78153 = cljs.core.seq(seq__78123_78144);
if(temp__5753__auto___78153){
var seq__78123_78154__$1 = temp__5753__auto___78153;
if(cljs.core.chunked_seq_QMARK_(seq__78123_78154__$1)){
var c__4679__auto___78155 = cljs.core.chunk_first(seq__78123_78154__$1);
var G__78156 = cljs.core.chunk_rest(seq__78123_78154__$1);
var G__78157 = c__4679__auto___78155;
var G__78158 = cljs.core.count(c__4679__auto___78155);
var G__78159 = (0);
seq__78123_78144 = G__78156;
chunk__78124_78145 = G__78157;
count__78125_78146 = G__78158;
i__78126_78147 = G__78159;
continue;
} else {
var op_78160 = cljs.core.first(seq__78123_78154__$1);
sicmutils.ratio.upcast_number(op_78160);

sicmutils.ratio.downcast_fraction(op_78160);


var G__78161 = cljs.core.next(seq__78123_78154__$1);
var G__78162 = null;
var G__78163 = (0);
var G__78164 = (0);
seq__78123_78144 = G__78161;
chunk__78124_78145 = G__78162;
count__78125_78146 = G__78163;
i__78126_78147 = G__78164;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=sicmutils.ratio.js.map
