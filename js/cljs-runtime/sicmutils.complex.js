goog.provide('sicmutils.complex');
goog.scope(function(){
  sicmutils.complex.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$complex_DOT_js$complex=shadow.js.require("module$node_modules$complex_DOT_js$complex", {});
/**
 * A [[Complex]] value equal to 0 (south pole on the Riemann Sphere).
 */
sicmutils.complex.ZERO = sicmutils.complex.goog$module$goog$object.get(module$node_modules$complex_DOT_js$complex,"ZERO");
/**
 * A [[Complex]] value equal to 1.
 */
sicmutils.complex.ONE = sicmutils.complex.goog$module$goog$object.get(module$node_modules$complex_DOT_js$complex,"ONE");
/**
 * A [[Complex]] value equal to `i`.
 */
sicmutils.complex.I = sicmutils.complex.goog$module$goog$object.get(module$node_modules$complex_DOT_js$complex,"I");
/**
 * A [[Complex]] value equal to `-i`.
 */
sicmutils.complex._I = sicmutils.complex.goog$module$goog$object.get(module$node_modules$complex_DOT_js$complex,"I").neg();
sicmutils.complex.complextype = module$node_modules$complex_DOT_js$complex;
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.value","number","sicmutils.value/number",1532293650));
/**
 * Returns a [[Complex]] number with the supplied real part `re` and imaginary
 *   part `im`. `im` defaults to 0.
 */
sicmutils.complex.complex = (function sicmutils$complex$complex(var_args){
var G__95613 = arguments.length;
switch (G__95613) {
case 1:
return sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$1 = (function (re){
return (new module$node_modules$complex_DOT_js$complex(((typeof re === 'string')?re:sicmutils.util.double$(re))));
}));

(sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$2 = (function (re,im){
return (new module$node_modules$complex_DOT_js$complex(sicmutils.util.double$(re),sicmutils.util.double$(im)));
}));

(sicmutils.complex.complex.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if `a` is an instance of [[Complex]], false otherwise.
 */
sicmutils.complex.complex_QMARK_ = (function sicmutils$complex$complex_QMARK_(a){
return (a instanceof module$node_modules$complex_DOT_js$complex);
});
sicmutils.complex.real = (function sicmutils$complex$real(a){
return sicmutils.complex.goog$module$goog$object.get(a,"re");
});
sicmutils.complex.imaginary = (function sicmutils$complex$imaginary(a){
return sicmutils.complex.goog$module$goog$object.get(a,"im");
});
/**
 * Parser that converts a string, vector or numeric representation of a complex
 * number, like
 * 
 *   - `1 + 3i`
 *   - [1 3]
 *   - 1
 * 
 *   into a [[Complex]] number object in clj or cljs.
 */
sicmutils.complex.parse_complex = (function sicmutils$complex$parse_complex(x){
if(typeof x === 'string'){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("sicmutils.complex","complex","sicmutils.complex/complex",-860350651,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
} else {
if(cljs.core.vector_QMARK_(x)){
var vec__95622 = x;
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95622,(0),null);
var im = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95622,(1),null);
if((im == null)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("sicmutils.complex","complex","sicmutils.complex/complex",-860350651,null),null,(1),null)),(new cljs.core.List(null,re,null,(1),null)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("sicmutils.complex","complex","sicmutils.complex/complex",-860350651,null),null,(1),null)),(new cljs.core.List(null,re,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,im,null,(1),null))], 0))));
}
} else {
if(typeof x === 'number'){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("sicmutils.complex","complex","sicmutils.complex/complex",-860350651,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
} else {
return sicmutils.util.illegal(["#sicm/complex takes a string, 2-vector or a number. Received: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));

}
}
}
});
(module$node_modules$complex_DOT_js$complex.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(module$node_modules$complex_DOT_js$complex.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if(sicmutils.complex.complex_QMARK_(other)){
return this$__$1.equals(other);
} else {
if(sicmutils.value.real_QMARK_(other)){
var and__4251__auto__ = (sicmutils.complex.imaginary(this$__$1) === (0));
if(and__4251__auto__){
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.complex.real(this$__$1),other);
} else {
return and__4251__auto__;
}
} else {
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,other);

}
}
}));

(module$node_modules$complex_DOT_js$complex.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(module$node_modules$complex_DOT_js$complex.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var x__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#sicm/complex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.complex.goog$module$goog$object.get(x__$1,"re"),sicmutils.complex.goog$module$goog$object.get(x__$1,"im")], null))], 0));
}));
(module$node_modules$complex_DOT_js$complex.prototype.sicmutils$value$Numerical$ = cljs.core.PROTOCOL_SENTINEL);

(module$node_modules$complex_DOT_js$complex.prototype.sicmutils$value$Numerical$numerical_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return true;
}));

(module$node_modules$complex_DOT_js$complex.prototype.sicmutils$value$Value$ = cljs.core.PROTOCOL_SENTINEL);

(module$node_modules$complex_DOT_js$complex.prototype.sicmutils$value$Value$zero_QMARK_$arity$1 = (function (c){
var c__$1 = this;
return c__$1.isZero();
}));

(module$node_modules$complex_DOT_js$complex.prototype.sicmutils$value$Value$one_QMARK_$arity$1 = (function (c){
var c__$1 = this;
return ((sicmutils.value.one_QMARK_(sicmutils.complex.real(c__$1))) && ((sicmutils.complex.imaginary(c__$1) === (0))));
}));

(module$node_modules$complex_DOT_js$complex.prototype.sicmutils$value$Value$identity_QMARK_$arity$1 = (function (c){
var c__$1 = this;
return sicmutils.value.one_QMARK_(c__$1);
}));

(module$node_modules$complex_DOT_js$complex.prototype.sicmutils$value$Value$zero_like$arity$1 = (function (_){
var ___$1 = this;
return sicmutils.complex.ZERO;
}));

(module$node_modules$complex_DOT_js$complex.prototype.sicmutils$value$Value$one_like$arity$1 = (function (_){
var ___$1 = this;
return sicmutils.complex.ONE;
}));

(module$node_modules$complex_DOT_js$complex.prototype.sicmutils$value$Value$identity_like$arity$1 = (function (_){
var ___$1 = this;
return sicmutils.complex.ONE;
}));

(module$node_modules$complex_DOT_js$complex.prototype.sicmutils$value$Value$freeze$arity$1 = (function (c){
var c__$1 = this;
var re = sicmutils.complex.real(c__$1);
var im = sicmutils.complex.imaginary(c__$1);
if(sicmutils.value.zero_QMARK_(im)){
return re;
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(new cljs.core.List(null,re,(new cljs.core.List(null,im,null,(1),null)),(2),null)),(3),null));
}
}));

(module$node_modules$complex_DOT_js$complex.prototype.sicmutils$value$Value$exact_QMARK_$arity$1 = (function (c){
var c__$1 = this;
return ((sicmutils.value.exact_QMARK_(sicmutils.complex.real(c__$1))) && (sicmutils.value.exact_QMARK_(sicmutils.complex.imaginary(c__$1))));
}));

(module$node_modules$complex_DOT_js$complex.prototype.sicmutils$value$Value$kind$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118);
}));
/**
 * Generates a [Gaussian integer](https://en.wikipedia.org/wiki/Gaussian_integer)
 *   from the complex number `z` by rounding the real and imaginary components of
 *   `z` to their nearest integral values.
 */
sicmutils.complex.round = (function sicmutils$complex$round(z){
if(sicmutils.complex.complex_QMARK_(z)){
return sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$2(Math.round(sicmutils.complex.real(z)),Math.round(sicmutils.complex.imaginary(z)));
} else {
if(sicmutils.value.native_integral_QMARK_(z)){
return z;
} else {
return Math.round(z);

}
}
});
/**
 * Returns true if `z` is a [Gaussian
 *   integer](https://en.wikipedia.org/wiki/Gaussian_integer), ie, a complex entry
 *   with integral real and imaginary components.
 * 
 *   [[gaussian-integer?]] will return true if the real and imaginary components
 *   are within `epsilon` of integral values. See [[value/almost-integral?]] for
 *   details.
 */
sicmutils.complex.gaussian_integer_QMARK_ = (function sicmutils$complex$gaussian_integer_QMARK_(z){
if(sicmutils.complex.complex_QMARK_(z)){
return ((sicmutils.value.almost_integral_QMARK_(sicmutils.complex.real(z))) && (sicmutils.value.almost_integral_QMARK_(sicmutils.complex.imaginary(z))));
} else {
return ((sicmutils.value.real_QMARK_(z)) && (sicmutils.value.almost_integral_QMARK_(z)));
}
});
/**
 * Returns a complex or real number with a positive real component. (ie, either z
 *   or (* -1 z)), whichever number has a positive real component.
 */
sicmutils.complex.abs_real = (function sicmutils$complex$abs_real(z){
if(sicmutils.complex.complex_QMARK_(z)){
if((sicmutils.complex.real(z) < (0))){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(z);
} else {
return z;
}
} else {
if(sicmutils.value.real_QMARK_(z)){
return Math.abs(sicmutils.util.double$(z));
} else {
return sicmutils.util.illegal("not supported!");

}
}
});
/**
 * Returns the complex gcd of two complex numbers using the euclidean algorithm.
 * 
 *   For more details on the algorithm, see [this post on Ask Dr
 *   Math](https://web.archive.org/web/20190720160400/http://mathforum.org/library/drmath/view/67068.html).
 * 
 *   NOTE that the GCD of two complex numbers is determined up to a factor of ±1
 *   and ±i.
 */
sicmutils.complex.gcd = (function sicmutils$complex$gcd(l,r){
if(sicmutils.value.zero_QMARK_(l)){
return r;
} else {
if(sicmutils.value.zero_QMARK_(r)){
return l;
} else {
if(cljs.core.truth_(sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(l,r))){
return sicmutils.complex.abs_real(l);
} else {
if((!(((sicmutils.complex.gaussian_integer_QMARK_(l)) || (sicmutils.complex.gaussian_integer_QMARK_(r)))))){
return sicmutils.util.illegal("gcd can only be computed for gaussian integers, but\n        both arguments were not.");
} else {
if((!(sicmutils.complex.gaussian_integer_QMARK_(l)))){
return sicmutils.util.illegal("gcd can only be computed for gaussian integers, but first\n        argument was not.");
} else {
if((!(sicmutils.complex.gaussian_integer_QMARK_(r)))){
return sicmutils.util.illegal("gcd can only be computed for gaussian integers, but second\n        argument was not.");
} else {
var vec__95640 = (((sicmutils.generic.magnitude.cljs$core$IFn$_invoke$arity$1(l) < sicmutils.generic.magnitude.cljs$core$IFn$_invoke$arity$1(r)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,l], null));
var l__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95640,(0),null);
var r__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95640,(1),null);
var a = sicmutils.complex.round(l__$1);
var b = sicmutils.complex.round(r__$1);
while(true){
if(sicmutils.value.zero_QMARK_(b)){
return sicmutils.complex.abs_real(a);
} else {
var G__95692 = b;
var G__95693 = sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(a,sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(sicmutils.complex.round(sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(a,b)),b));
a = G__95692;
b = G__95693;
continue;
}
break;
}

}
}
}
}
}
}
});
sicmutils.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a,b){
return sicmutils.complex.gcd(a,b);
}));
sicmutils.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a,b){
return sicmutils.complex.gcd(a,b);
}));
sicmutils.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a,b){
return sicmutils.complex.gcd(a,b);
}));
sicmutils.generic.make_rectangular.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789),new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (re,im){
if(sicmutils.value.zero_QMARK_(im)){
return re;
} else {
return sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$2(re,im);
}
}));
sicmutils.generic.make_polar.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789),new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (radius,angle){
if(sicmutils.value.zero_QMARK_(radius)){
return radius;
} else {
if(sicmutils.value.zero_QMARK_(angle)){
return radius;
} else {
return (new module$node_modules$complex_DOT_js$complex(({"abs": Number(radius), "arg": Number(angle)})));

}
}
}));
sicmutils.generic.real_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return sicmutils.complex.real(a);
}));
sicmutils.generic.imag_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return sicmutils.complex.imaginary(a);
}));
sicmutils.generic.magnitude.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.abs();
}));
sicmutils.generic.angle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.arg();
}));
sicmutils.generic.conjugate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.conjugate();
}));
sicmutils.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a,b){
return ((sicmutils.complex.real(a) * sicmutils.complex.real(b)) + (sicmutils.complex.imaginary(a) * sicmutils.complex.imaginary(b)));
}));
sicmutils.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a,b){
return (sicmutils.complex.real(a) * b);
}));
sicmutils.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a,b){
return (a * sicmutils.complex.real(b));
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a,b){
return a.equals(b);
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a,n){
var and__4251__auto__ = (sicmutils.complex.imaginary(a) === (0));
if(and__4251__auto__){
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.complex.real(a),n);
} else {
return and__4251__auto__;
}
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (n,a){
var and__4251__auto__ = (sicmutils.complex.imaginary(a) === (0));
if(and__4251__auto__){
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(n,sicmutils.complex.real(a));
} else {
return and__4251__auto__;
}
}));
sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a,b){
return a.add(b);
}));
sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a,n){
return a.add(sicmutils.util.double$(n));
}));
sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (n,a){
return a.add(sicmutils.util.double$(n));
}));
sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a,b){
return a.pow(b);
}));
var choices_95702 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),sicmutils.complex.I,(-1),sicmutils.complex._I], null);
sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a,n){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,sicmutils.complex.I)){
var G__95665 = cljs.core.mod(n,(4));
return (choices_95702.cljs$core$IFn$_invoke$arity$1 ? choices_95702.cljs$core$IFn$_invoke$arity$1(G__95665) : choices_95702.call(null,G__95665));
} else {
return a.pow(sicmutils.util.double$(n));
}
}));
sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (n,a){
return sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$1(n).pow(a);
}));
sicmutils.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (z){
return sicmutils.generic.expt.cljs$core$IFn$_invoke$arity$2(z,(2));
}));
sicmutils.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (z){
return sicmutils.generic.expt.cljs$core$IFn$_invoke$arity$2(z,(3));
}));
sicmutils.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.abs();
}));
sicmutils.generic.exp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.exp();
}));
sicmutils.generic.log.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.log();
}));
sicmutils.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.sqrt();
}));
sicmutils.generic.sin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.sin();
}));
sicmutils.generic.cos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.cos();
}));
sicmutils.generic.tan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.tan();
}));
sicmutils.generic.asin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.asin();
}));
sicmutils.generic.acos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.acos();
}));
sicmutils.generic.atan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.atan();
}));
sicmutils.generic.cosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.cosh();
}));
sicmutils.generic.sinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.sinh();
}));
sicmutils.generic.tanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.tanh();
}));
sicmutils.generic.integer_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
var re = sicmutils.generic.integer_part.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.real(a));
var im = sicmutils.generic.integer_part.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.imaginary(a));
if(sicmutils.value.zero_QMARK_(im)){
return re;
} else {
return sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$2(re,im);
}
}));
sicmutils.generic.fractional_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
var re = sicmutils.generic.fractional_part.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.real(a));
var im = sicmutils.generic.fractional_part.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.imaginary(a));
if(sicmutils.value.zero_QMARK_(im)){
return re;
} else {
return sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$2(re,im);
}
}));
sicmutils.generic.negative_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
var and__4251__auto__ = sicmutils.value.zero_QMARK_(sicmutils.complex.imaginary(a));
if(and__4251__auto__){
return sicmutils.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.real(a));
} else {
return and__4251__auto__;
}
}));
sicmutils.generic.infinite_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
var or__4253__auto__ = sicmutils.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.real(a));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(sicmutils.complex.imaginary(a));
}
}));
sicmutils.generic.cot.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.cot();
}));

sicmutils.generic.sec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.sec();
}));

sicmutils.generic.csc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.csc();
}));

sicmutils.generic.tanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.tanh();
}));

sicmutils.generic.sech.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.sech();
}));

sicmutils.generic.csch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.csch();
}));

sicmutils.generic.acosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.acosh();
}));

sicmutils.generic.asinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.asinh();
}));

sicmutils.generic.atanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.atanh();
}));
sicmutils.generic.floor.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.floor();
}));

sicmutils.generic.ceiling.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.ceil();
}));

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a,b){
return a.sub(b);
}));

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a,n){
return a.sub(sicmutils.util.double$(n));
}));

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (n,a){
return a.neg().add(sicmutils.util.double$(n));
}));

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a,b){
return a.mul(b);
}));

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a,n){
return a.mul(sicmutils.util.double$(n));
}));

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (n,a){
return a.mul(sicmutils.util.double$(n));
}));

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a,b){
return a.div(b);
}));

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a,n){
return a.div(sicmutils.util.double$(n));
}));

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (n,a){
return a.inverse().mul(sicmutils.util.double$(n));
}));

sicmutils.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.neg();
}));

sicmutils.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a){
return a.inverse();
}));

//# sourceMappingURL=sicmutils.complex.js.map
