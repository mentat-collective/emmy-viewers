goog.provide('sicmutils.modint');

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {sicmutils.value.Value}
 * @implements {cljs.core.IPrintWithWriter}
*/
sicmutils.modint.ModInt = (function (i,m){
this.i = i;
this.m = m;
this.cljs$lang$protocol_mask$partition0$ = 2149580800;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sicmutils.modint.ModInt.prototype.sicmutils$value$Value$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.modint.ModInt.prototype.sicmutils$value$Value$zero_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new sicmutils.modint.ModInt(sicmutils.value.zero_like(self__.i),self__.m));
}));

(sicmutils.modint.ModInt.prototype.sicmutils$value$Value$identity_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sicmutils.value.one_QMARK_(self__.i);
}));

(sicmutils.modint.ModInt.prototype.sicmutils$value$Value$freeze$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"modint","modint",-1355832379,null),(new cljs.core.List(null,self__.i,(new cljs.core.List(null,self__.m,null,(1),null)),(2),null)),(3),null));
}));

(sicmutils.modint.ModInt.prototype.sicmutils$value$Value$zero_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sicmutils.value.zero_QMARK_(self__.i);
}));

(sicmutils.modint.ModInt.prototype.sicmutils$value$Value$one_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sicmutils.value.one_QMARK_(self__.i);
}));

(sicmutils.modint.ModInt.prototype.sicmutils$value$Value$exact_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(sicmutils.modint.ModInt.prototype.sicmutils$value$Value$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024);
}));

(sicmutils.modint.ModInt.prototype.sicmutils$value$Value$identity_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new sicmutils.modint.ModInt(sicmutils.value.one_like(self__.i),self__.m));
}));

(sicmutils.modint.ModInt.prototype.sicmutils$value$Value$one_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new sicmutils.modint.ModInt(sicmutils.value.one_like(self__.i),self__.m));
}));

(sicmutils.modint.ModInt.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return (sicmutils.modint.mod_COLON__EQ_.cljs$core$IFn$_invoke$arity$2 ? sicmutils.modint.mod_COLON__EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,that) : sicmutils.modint.mod_COLON__EQ_.call(null,this$__$1,that));
}));

(sicmutils.modint.ModInt.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.i)," mod ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.m),"]"].join('');
}));

(sicmutils.modint.ModInt.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var self__ = this;
var x__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#object[sicmutils.modint.ModInt \"",x__$1.toString(),"\"]"], 0));
}));

(sicmutils.modint.ModInt.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null);
}));

(sicmutils.modint.ModInt.cljs$lang$type = true);

(sicmutils.modint.ModInt.cljs$lang$ctorStr = "sicmutils.modint/ModInt");

(sicmutils.modint.ModInt.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"sicmutils.modint/ModInt");
}));

/**
 * Positional factory function for sicmutils.modint/ModInt.
 */
sicmutils.modint.__GT_ModInt = (function sicmutils$modint$__GT_ModInt(i,m){
return (new sicmutils.modint.ModInt(i,m));
});

/**
 * Returns true if `x` is an instance of [[ModInt]], false otherwise.
 */
sicmutils.modint.modint_QMARK_ = (function sicmutils$modint$modint_QMARK_(x){
return (x instanceof sicmutils.modint.ModInt);
});
sicmutils.modint.residue = (function sicmutils$modint$residue(x){
return x.i;
});
sicmutils.modint.modulus = (function sicmutils$modint$modulus(x){
return x.m;
});
sicmutils.modint.mod_COLON__EQ_ = (function sicmutils$modint$mod_COLON__EQ_(this$,that){
if(sicmutils.modint.modint_QMARK_(that)){
var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.modint.modulus(this$),sicmutils.modint.modulus(that));
if(and__4251__auto__){
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.modint.residue(this$),sicmutils.modint.residue(that));
} else {
return and__4251__auto__;
}
} else {
if(sicmutils.value.number_QMARK_(that)){
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.modint.residue(this$),sicmutils.generic.modulo.cljs$core$IFn$_invoke$arity$2(that,sicmutils.modint.modulus(this$)));
} else {
return false;

}
}
});
/**
 * Returns an instance of [[ModInt]] that represents integer `i` with integral
 *   modulus `m`.
 */
sicmutils.modint.make = (function sicmutils$modint$make(i,m){
if(sicmutils.value.integral_QMARK_(i)){
} else {
throw (new Error("Assert failed: (v/integral? i)"));
}

if(sicmutils.value.integral_QMARK_(m)){
} else {
throw (new Error("Assert failed: (v/integral? m)"));
}

return sicmutils.modint.__GT_ModInt(sicmutils.generic.modulo.cljs$core$IFn$_invoke$arity$2(i,m),m);
});
sicmutils.modint.modular_binop = (function sicmutils$modint$modular_binop(op){
return (function (a,b){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.modint.modulus(a),sicmutils.modint.modulus(b))))){
return sicmutils.util.arithmetic_ex("unequal moduli");
} else {
return sicmutils.modint.make((function (){var G__99945 = sicmutils.modint.residue(a);
var G__99946 = sicmutils.modint.residue(b);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__99945,G__99946) : op.call(null,G__99945,G__99946));
})(),sicmutils.modint.modulus(a));
}
});
});
/**
 * Modular inverse. JVM implementation uses the native BigInt implementation.
 */
sicmutils.modint.invert = (function sicmutils$modint$invert(var_args){
var G__99948 = arguments.length;
switch (G__99948) {
case 1:
return sicmutils.modint.invert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.modint.invert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.modint.invert.cljs$core$IFn$_invoke$arity$1 = (function (m){
return sicmutils.modint.invert.cljs$core$IFn$_invoke$arity$2(sicmutils.modint.residue(m),sicmutils.modint.modulus(m));
}));

(sicmutils.modint.invert.cljs$core$IFn$_invoke$arity$2 = (function (i,modulus){
var vec__99949 = sicmutils.euclid.extended_gcd(i,modulus);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99949,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99949,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99949,(2),null);
if((g < (2))){
return sicmutils.modint.make(a,modulus);
} else {
return sicmutils.util.arithmetic_ex([cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," is not invertible mod ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(modulus)].join(''));
}
}));

(sicmutils.modint.invert.cljs$lang$maxFixedArity = 2);

/**
 * Modular exponentiation, more efficient on the JVM.
 */
sicmutils.modint.mod_expt = (function sicmutils$modint$mod_expt(base,pow,modulus){
return sicmutils.modint.__GT_ModInt(Number(sicmutils.generic.modulo.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.expt.cljs$core$IFn$_invoke$arity$2(sicmutils.util.bigint(base),sicmutils.util.bigint(pow)),modulus)),modulus);
});
/**
 * [Chinese Remainder Algorithm](https://en.wikipedia.org/wiki/Chinese_remainder_theorem).
 * 
 *   Accepts a sequence of [[ModInt]] instances (where the `modulus` of
 *   all [[ModInt]] instances are relatively prime), and returns a [[ModInt]] `x`
 *   such that `(residue input) == (mod x (modulus input))`.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (let [a1 (m/make 2 5)
 *      a2 (m/make 3 13)]
 *  [(= 42 (chinese-remainder a1 a2))
 *   (= (residue a1) (mod cr (modulus a1)))
 *   (= (residue a2) (mod cr (modulus a2)))])
 *   ;;=> [true true true]
 *   ```
 */
sicmutils.modint.chinese_remainder = (function sicmutils$modint$chinese_remainder(var_args){
var args__4870__auto__ = [];
var len__4864__auto___100013 = arguments.length;
var i__4865__auto___100014 = (0);
while(true){
if((i__4865__auto___100014 < len__4864__auto___100013)){
args__4870__auto__.push((arguments[i__4865__auto___100014]));

var G__100015 = (i__4865__auto___100014 + (1));
i__4865__auto___100014 = G__100015;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sicmutils.modint.chinese_remainder.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sicmutils.modint.chinese_remainder.cljs$core$IFn$_invoke$arity$variadic = (function (modints){
var prod = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(sicmutils.modint.modulus),sicmutils.generic._STAR_,modints);
var xform = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (mi){
var i = sicmutils.modint.residue(mi);
var m = sicmutils.modint.modulus(mi);
var c = sicmutils.generic.quotient.cljs$core$IFn$_invoke$arity$2(prod,m);
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(i,c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.modint.residue(sicmutils.modint.invert.cljs$core$IFn$_invoke$arity$2(c,m))], 0));
}));
return sicmutils.generic.modulo.cljs$core$IFn$_invoke$arity$2(cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,sicmutils.generic._PLUS_,modints),prod);
}));

(sicmutils.modint.chinese_remainder.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.modint.chinese_remainder.cljs$lang$applyTo = (function (seq99952){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq99952));
}));

sicmutils.modint.add = sicmutils.modint.modular_binop(sicmutils.generic.add);
sicmutils.modint.sub = sicmutils.modint.modular_binop(sicmutils.generic.sub);
sicmutils.modint.mul = sicmutils.modint.modular_binop(sicmutils.generic.mul);
sicmutils.modint.remainder = sicmutils.modint.modular_binop(sicmutils.generic.remainder);
sicmutils.modint.modulo = sicmutils.modint.modular_binop(sicmutils.generic.modulo);
sicmutils.modint.div = (function sicmutils$modint$div(a,b){
return sicmutils.modint.mul(a,sicmutils.modint.invert.cljs$core$IFn$_invoke$arity$1(b));
});
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","number","sicmutils.value/number",1532293650),new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),(function (l,r){
return sicmutils.modint.mod_COLON__EQ_(r,l);
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024),new cljs.core.Keyword("sicmutils.value","number","sicmutils.value/number",1532293650)], null),(function (l,r){
return sicmutils.modint.mod_COLON__EQ_(l,r);
}));
sicmutils.generic.integer_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),(function (a){
return sicmutils.modint.residue(a);
}));
sicmutils.generic.fractional_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),(function (_){
return (0);
}));
sicmutils.generic.floor.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),(function (a){
return a;
}));
sicmutils.generic.ceiling.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),(function (a){
return a;
}));
sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024),new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),(function (a,b){
return sicmutils.modint.add(a,b);
}));
sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024),new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),(function (a,b){
return sicmutils.modint.mul(a,b);
}));
sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024),new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),(function (a,b){
return sicmutils.modint.div(a,b);
}));
sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024),new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),(function (a,b){
return sicmutils.modint.sub(a,b);
}));
sicmutils.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),(function (a){
return sicmutils.modint.make(sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.modint.residue(a)),sicmutils.modint.modulus(a));
}));
sicmutils.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),(function (a){
return sicmutils.modint.invert.cljs$core$IFn$_invoke$arity$1(a);
}));
sicmutils.generic.magnitude.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),(function (a){
return sicmutils.generic.modulo.cljs$core$IFn$_invoke$arity$2(sicmutils.modint.residue(a),sicmutils.modint.modulus(a));
}));
sicmutils.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),(function (a){
var i = sicmutils.modint.residue(a);
if(cljs.core.truth_(sicmutils.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(i))){
return sicmutils.modint.make(i,sicmutils.modint.modulus(a));
} else {
return a;
}
}));
sicmutils.generic.quotient.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024),new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),(function (a,b){
return sicmutils.modint.mul(a,sicmutils.modint.invert.cljs$core$IFn$_invoke$arity$1(b));
}));
sicmutils.generic.remainder.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024),new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),(function (a,b){
return sicmutils.modint.remainder(a,b);
}));
sicmutils.generic.modulo.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024),new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),(function (a,b){
return sicmutils.modint.modulo(a,b);
}));
sicmutils.generic.exact_divide.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024),new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),(function (a,b){
return sicmutils.modint.mul(a,sicmutils.modint.invert.cljs$core$IFn$_invoke$arity$1(b));
}));
sicmutils.generic.negative_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),(function (a){
return sicmutils.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(sicmutils.modint.residue(a));
}));
sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231),new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),(function (a,b){
return sicmutils.modint.mod_expt(a,sicmutils.modint.residue(b),sicmutils.modint.modulus(b));
}));
sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024),new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),(function (a,b){
return sicmutils.modint.mod_expt(sicmutils.modint.residue(a),b,sicmutils.modint.modulus(a));
}));
sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024),new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),(function (a,b){
return sicmutils.modint.div(b,a);
}));
sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024),new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),(function (a,b){
return sicmutils.modint.div(a,b);
}));
var seq__99957_100026 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.add,sicmutils.generic.mul,sicmutils.generic.sub], null));
var chunk__99958_100027 = null;
var count__99959_100028 = (0);
var i__99960_100029 = (0);
while(true){
if((i__99960_100029 < count__99959_100028)){
var op_100030 = chunk__99958_100027.cljs$core$IIndexed$_nth$arity$2(null,i__99960_100029);
op_100030.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231),new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),((function (seq__99957_100026,chunk__99958_100027,count__99959_100028,i__99960_100029,op_100030){
return (function (a,b){
return sicmutils.modint.make((function (){var G__99973 = a;
var G__99974 = sicmutils.modint.residue(b);
return (op_100030.cljs$core$IFn$_invoke$arity$2 ? op_100030.cljs$core$IFn$_invoke$arity$2(G__99973,G__99974) : op_100030.call(null,G__99973,G__99974));
})(),sicmutils.modint.modulus(b));
});})(seq__99957_100026,chunk__99958_100027,count__99959_100028,i__99960_100029,op_100030))
);

op_100030.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024),new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),((function (seq__99957_100026,chunk__99958_100027,count__99959_100028,i__99960_100029,op_100030){
return (function (a,b){
return sicmutils.modint.make((function (){var G__99975 = sicmutils.modint.residue(a);
var G__99976 = b;
return (op_100030.cljs$core$IFn$_invoke$arity$2 ? op_100030.cljs$core$IFn$_invoke$arity$2(G__99975,G__99976) : op_100030.call(null,G__99975,G__99976));
})(),sicmutils.modint.modulus(a));
});})(seq__99957_100026,chunk__99958_100027,count__99959_100028,i__99960_100029,op_100030))
);


var G__100031 = seq__99957_100026;
var G__100032 = chunk__99958_100027;
var G__100033 = count__99959_100028;
var G__100034 = (i__99960_100029 + (1));
seq__99957_100026 = G__100031;
chunk__99958_100027 = G__100032;
count__99959_100028 = G__100033;
i__99960_100029 = G__100034;
continue;
} else {
var temp__5753__auto___100035 = cljs.core.seq(seq__99957_100026);
if(temp__5753__auto___100035){
var seq__99957_100036__$1 = temp__5753__auto___100035;
if(cljs.core.chunked_seq_QMARK_(seq__99957_100036__$1)){
var c__4679__auto___100037 = cljs.core.chunk_first(seq__99957_100036__$1);
var G__100038 = cljs.core.chunk_rest(seq__99957_100036__$1);
var G__100039 = c__4679__auto___100037;
var G__100040 = cljs.core.count(c__4679__auto___100037);
var G__100041 = (0);
seq__99957_100026 = G__100038;
chunk__99958_100027 = G__100039;
count__99959_100028 = G__100040;
i__99960_100029 = G__100041;
continue;
} else {
var op_100042 = cljs.core.first(seq__99957_100036__$1);
op_100042.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231),new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),((function (seq__99957_100026,chunk__99958_100027,count__99959_100028,i__99960_100029,op_100042,seq__99957_100036__$1,temp__5753__auto___100035){
return (function (a,b){
return sicmutils.modint.make((function (){var G__99977 = a;
var G__99978 = sicmutils.modint.residue(b);
return (op_100042.cljs$core$IFn$_invoke$arity$2 ? op_100042.cljs$core$IFn$_invoke$arity$2(G__99977,G__99978) : op_100042.call(null,G__99977,G__99978));
})(),sicmutils.modint.modulus(b));
});})(seq__99957_100026,chunk__99958_100027,count__99959_100028,i__99960_100029,op_100042,seq__99957_100036__$1,temp__5753__auto___100035))
);

op_100042.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024),new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),((function (seq__99957_100026,chunk__99958_100027,count__99959_100028,i__99960_100029,op_100042,seq__99957_100036__$1,temp__5753__auto___100035){
return (function (a,b){
return sicmutils.modint.make((function (){var G__99979 = sicmutils.modint.residue(a);
var G__99980 = b;
return (op_100042.cljs$core$IFn$_invoke$arity$2 ? op_100042.cljs$core$IFn$_invoke$arity$2(G__99979,G__99980) : op_100042.call(null,G__99979,G__99980));
})(),sicmutils.modint.modulus(a));
});})(seq__99957_100026,chunk__99958_100027,count__99959_100028,i__99960_100029,op_100042,seq__99957_100036__$1,temp__5753__auto___100035))
);


var G__100056 = cljs.core.next(seq__99957_100036__$1);
var G__100057 = null;
var G__100058 = (0);
var G__100059 = (0);
seq__99957_100026 = G__100056;
chunk__99958_100027 = G__100057;
count__99959_100028 = G__100058;
i__99960_100029 = G__100059;
continue;
}
} else {
}
}
break;
}
var seq__99982_100060 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.div,sicmutils.generic.solve_linear,sicmutils.generic.solve_linear_right,sicmutils.generic.quotient,sicmutils.generic.remainder,sicmutils.generic.exact_divide], null));
var chunk__99983_100061 = null;
var count__99984_100062 = (0);
var i__99985_100063 = (0);
while(true){
if((i__99985_100063 < count__99984_100062)){
var op_100064 = chunk__99983_100061.cljs$core$IIndexed$_nth$arity$2(null,i__99985_100063);
op_100064.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231),new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),((function (seq__99982_100060,chunk__99983_100061,count__99984_100062,i__99985_100063,op_100064){
return (function (a,b){
var G__99996 = sicmutils.modint.make(a,sicmutils.modint.modulus(b));
var G__99997 = b;
return (op_100064.cljs$core$IFn$_invoke$arity$2 ? op_100064.cljs$core$IFn$_invoke$arity$2(G__99996,G__99997) : op_100064.call(null,G__99996,G__99997));
});})(seq__99982_100060,chunk__99983_100061,count__99984_100062,i__99985_100063,op_100064))
);

op_100064.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024),new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),((function (seq__99982_100060,chunk__99983_100061,count__99984_100062,i__99985_100063,op_100064){
return (function (a,b){
var G__99998 = a;
var G__99999 = sicmutils.modint.make(b,sicmutils.modint.modulus(a));
return (op_100064.cljs$core$IFn$_invoke$arity$2 ? op_100064.cljs$core$IFn$_invoke$arity$2(G__99998,G__99999) : op_100064.call(null,G__99998,G__99999));
});})(seq__99982_100060,chunk__99983_100061,count__99984_100062,i__99985_100063,op_100064))
);


var G__100071 = seq__99982_100060;
var G__100072 = chunk__99983_100061;
var G__100073 = count__99984_100062;
var G__100074 = (i__99985_100063 + (1));
seq__99982_100060 = G__100071;
chunk__99983_100061 = G__100072;
count__99984_100062 = G__100073;
i__99985_100063 = G__100074;
continue;
} else {
var temp__5753__auto___100081 = cljs.core.seq(seq__99982_100060);
if(temp__5753__auto___100081){
var seq__99982_100082__$1 = temp__5753__auto___100081;
if(cljs.core.chunked_seq_QMARK_(seq__99982_100082__$1)){
var c__4679__auto___100083 = cljs.core.chunk_first(seq__99982_100082__$1);
var G__100084 = cljs.core.chunk_rest(seq__99982_100082__$1);
var G__100085 = c__4679__auto___100083;
var G__100086 = cljs.core.count(c__4679__auto___100083);
var G__100087 = (0);
seq__99982_100060 = G__100084;
chunk__99983_100061 = G__100085;
count__99984_100062 = G__100086;
i__99985_100063 = G__100087;
continue;
} else {
var op_100088 = cljs.core.first(seq__99982_100082__$1);
op_100088.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231),new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),((function (seq__99982_100060,chunk__99983_100061,count__99984_100062,i__99985_100063,op_100088,seq__99982_100082__$1,temp__5753__auto___100081){
return (function (a,b){
var G__100000 = sicmutils.modint.make(a,sicmutils.modint.modulus(b));
var G__100001 = b;
return (op_100088.cljs$core$IFn$_invoke$arity$2 ? op_100088.cljs$core$IFn$_invoke$arity$2(G__100000,G__100001) : op_100088.call(null,G__100000,G__100001));
});})(seq__99982_100060,chunk__99983_100061,count__99984_100062,i__99985_100063,op_100088,seq__99982_100082__$1,temp__5753__auto___100081))
);

op_100088.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024),new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),((function (seq__99982_100060,chunk__99983_100061,count__99984_100062,i__99985_100063,op_100088,seq__99982_100082__$1,temp__5753__auto___100081){
return (function (a,b){
var G__100003 = a;
var G__100004 = sicmutils.modint.make(b,sicmutils.modint.modulus(a));
return (op_100088.cljs$core$IFn$_invoke$arity$2 ? op_100088.cljs$core$IFn$_invoke$arity$2(G__100003,G__100004) : op_100088.call(null,G__100003,G__100004));
});})(seq__99982_100060,chunk__99983_100061,count__99984_100062,i__99985_100063,op_100088,seq__99982_100082__$1,temp__5753__auto___100081))
);


var G__100091 = cljs.core.next(seq__99982_100082__$1);
var G__100092 = null;
var G__100093 = (0);
var G__100094 = (0);
seq__99982_100060 = G__100091;
chunk__99983_100061 = G__100092;
count__99984_100062 = G__100093;
i__99985_100063 = G__100094;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=sicmutils.modint.js.map
