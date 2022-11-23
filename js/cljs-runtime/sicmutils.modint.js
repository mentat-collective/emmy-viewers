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
return sicmutils.modint.make((function (){var G__96854 = sicmutils.modint.residue(a);
var G__96855 = sicmutils.modint.residue(b);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__96854,G__96855) : op.call(null,G__96854,G__96855));
})(),sicmutils.modint.modulus(a));
}
});
});
/**
 * Modular inverse. JVM implementation uses the native BigInt implementation.
 */
sicmutils.modint.invert = (function sicmutils$modint$invert(var_args){
var G__96857 = arguments.length;
switch (G__96857) {
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
var vec__96858 = sicmutils.euclid.extended_gcd(i,modulus);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96858,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96858,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96858,(2),null);
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
var len__4864__auto___96925 = arguments.length;
var i__4865__auto___96926 = (0);
while(true){
if((i__4865__auto___96926 < len__4864__auto___96925)){
args__4870__auto__.push((arguments[i__4865__auto___96926]));

var G__96928 = (i__4865__auto___96926 + (1));
i__4865__auto___96926 = G__96928;
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
(sicmutils.modint.chinese_remainder.cljs$lang$applyTo = (function (seq96862){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq96862));
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
var seq__96877_96946 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.add,sicmutils.generic.mul,sicmutils.generic.sub], null));
var chunk__96878_96947 = null;
var count__96879_96948 = (0);
var i__96880_96949 = (0);
while(true){
if((i__96880_96949 < count__96879_96948)){
var op_96950 = chunk__96878_96947.cljs$core$IIndexed$_nth$arity$2(null,i__96880_96949);
op_96950.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231),new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),((function (seq__96877_96946,chunk__96878_96947,count__96879_96948,i__96880_96949,op_96950){
return (function (a,b){
return sicmutils.modint.make((function (){var G__96889 = a;
var G__96890 = sicmutils.modint.residue(b);
return (op_96950.cljs$core$IFn$_invoke$arity$2 ? op_96950.cljs$core$IFn$_invoke$arity$2(G__96889,G__96890) : op_96950.call(null,G__96889,G__96890));
})(),sicmutils.modint.modulus(b));
});})(seq__96877_96946,chunk__96878_96947,count__96879_96948,i__96880_96949,op_96950))
);

op_96950.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024),new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),((function (seq__96877_96946,chunk__96878_96947,count__96879_96948,i__96880_96949,op_96950){
return (function (a,b){
return sicmutils.modint.make((function (){var G__96891 = sicmutils.modint.residue(a);
var G__96892 = b;
return (op_96950.cljs$core$IFn$_invoke$arity$2 ? op_96950.cljs$core$IFn$_invoke$arity$2(G__96891,G__96892) : op_96950.call(null,G__96891,G__96892));
})(),sicmutils.modint.modulus(a));
});})(seq__96877_96946,chunk__96878_96947,count__96879_96948,i__96880_96949,op_96950))
);


var G__96957 = seq__96877_96946;
var G__96958 = chunk__96878_96947;
var G__96959 = count__96879_96948;
var G__96960 = (i__96880_96949 + (1));
seq__96877_96946 = G__96957;
chunk__96878_96947 = G__96958;
count__96879_96948 = G__96959;
i__96880_96949 = G__96960;
continue;
} else {
var temp__5753__auto___96961 = cljs.core.seq(seq__96877_96946);
if(temp__5753__auto___96961){
var seq__96877_96962__$1 = temp__5753__auto___96961;
if(cljs.core.chunked_seq_QMARK_(seq__96877_96962__$1)){
var c__4679__auto___96963 = cljs.core.chunk_first(seq__96877_96962__$1);
var G__96964 = cljs.core.chunk_rest(seq__96877_96962__$1);
var G__96965 = c__4679__auto___96963;
var G__96966 = cljs.core.count(c__4679__auto___96963);
var G__96967 = (0);
seq__96877_96946 = G__96964;
chunk__96878_96947 = G__96965;
count__96879_96948 = G__96966;
i__96880_96949 = G__96967;
continue;
} else {
var op_96968 = cljs.core.first(seq__96877_96962__$1);
op_96968.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231),new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),((function (seq__96877_96946,chunk__96878_96947,count__96879_96948,i__96880_96949,op_96968,seq__96877_96962__$1,temp__5753__auto___96961){
return (function (a,b){
return sicmutils.modint.make((function (){var G__96893 = a;
var G__96894 = sicmutils.modint.residue(b);
return (op_96968.cljs$core$IFn$_invoke$arity$2 ? op_96968.cljs$core$IFn$_invoke$arity$2(G__96893,G__96894) : op_96968.call(null,G__96893,G__96894));
})(),sicmutils.modint.modulus(b));
});})(seq__96877_96946,chunk__96878_96947,count__96879_96948,i__96880_96949,op_96968,seq__96877_96962__$1,temp__5753__auto___96961))
);

op_96968.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024),new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),((function (seq__96877_96946,chunk__96878_96947,count__96879_96948,i__96880_96949,op_96968,seq__96877_96962__$1,temp__5753__auto___96961){
return (function (a,b){
return sicmutils.modint.make((function (){var G__96895 = sicmutils.modint.residue(a);
var G__96896 = b;
return (op_96968.cljs$core$IFn$_invoke$arity$2 ? op_96968.cljs$core$IFn$_invoke$arity$2(G__96895,G__96896) : op_96968.call(null,G__96895,G__96896));
})(),sicmutils.modint.modulus(a));
});})(seq__96877_96946,chunk__96878_96947,count__96879_96948,i__96880_96949,op_96968,seq__96877_96962__$1,temp__5753__auto___96961))
);


var G__96981 = cljs.core.next(seq__96877_96962__$1);
var G__96982 = null;
var G__96983 = (0);
var G__96984 = (0);
seq__96877_96946 = G__96981;
chunk__96878_96947 = G__96982;
count__96879_96948 = G__96983;
i__96880_96949 = G__96984;
continue;
}
} else {
}
}
break;
}
var seq__96897_96985 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.div,sicmutils.generic.solve_linear,sicmutils.generic.solve_linear_right,sicmutils.generic.quotient,sicmutils.generic.remainder,sicmutils.generic.exact_divide], null));
var chunk__96898_96986 = null;
var count__96899_96987 = (0);
var i__96900_96988 = (0);
while(true){
if((i__96900_96988 < count__96899_96987)){
var op_96997 = chunk__96898_96986.cljs$core$IIndexed$_nth$arity$2(null,i__96900_96988);
op_96997.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231),new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),((function (seq__96897_96985,chunk__96898_96986,count__96899_96987,i__96900_96988,op_96997){
return (function (a,b){
var G__96909 = sicmutils.modint.make(a,sicmutils.modint.modulus(b));
var G__96910 = b;
return (op_96997.cljs$core$IFn$_invoke$arity$2 ? op_96997.cljs$core$IFn$_invoke$arity$2(G__96909,G__96910) : op_96997.call(null,G__96909,G__96910));
});})(seq__96897_96985,chunk__96898_96986,count__96899_96987,i__96900_96988,op_96997))
);

op_96997.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024),new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),((function (seq__96897_96985,chunk__96898_96986,count__96899_96987,i__96900_96988,op_96997){
return (function (a,b){
var G__96912 = a;
var G__96913 = sicmutils.modint.make(b,sicmutils.modint.modulus(a));
return (op_96997.cljs$core$IFn$_invoke$arity$2 ? op_96997.cljs$core$IFn$_invoke$arity$2(G__96912,G__96913) : op_96997.call(null,G__96912,G__96913));
});})(seq__96897_96985,chunk__96898_96986,count__96899_96987,i__96900_96988,op_96997))
);


var G__96999 = seq__96897_96985;
var G__97000 = chunk__96898_96986;
var G__97001 = count__96899_96987;
var G__97002 = (i__96900_96988 + (1));
seq__96897_96985 = G__96999;
chunk__96898_96986 = G__97000;
count__96899_96987 = G__97001;
i__96900_96988 = G__97002;
continue;
} else {
var temp__5753__auto___97003 = cljs.core.seq(seq__96897_96985);
if(temp__5753__auto___97003){
var seq__96897_97004__$1 = temp__5753__auto___97003;
if(cljs.core.chunked_seq_QMARK_(seq__96897_97004__$1)){
var c__4679__auto___97005 = cljs.core.chunk_first(seq__96897_97004__$1);
var G__97006 = cljs.core.chunk_rest(seq__96897_97004__$1);
var G__97007 = c__4679__auto___97005;
var G__97008 = cljs.core.count(c__4679__auto___97005);
var G__97009 = (0);
seq__96897_96985 = G__97006;
chunk__96898_96986 = G__97007;
count__96899_96987 = G__97008;
i__96900_96988 = G__97009;
continue;
} else {
var op_97010 = cljs.core.first(seq__96897_97004__$1);
op_97010.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231),new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),((function (seq__96897_96985,chunk__96898_96986,count__96899_96987,i__96900_96988,op_97010,seq__96897_97004__$1,temp__5753__auto___97003){
return (function (a,b){
var G__96915 = sicmutils.modint.make(a,sicmutils.modint.modulus(b));
var G__96916 = b;
return (op_97010.cljs$core$IFn$_invoke$arity$2 ? op_97010.cljs$core$IFn$_invoke$arity$2(G__96915,G__96916) : op_97010.call(null,G__96915,G__96916));
});})(seq__96897_96985,chunk__96898_96986,count__96899_96987,i__96900_96988,op_97010,seq__96897_97004__$1,temp__5753__auto___97003))
);

op_97010.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024),new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),((function (seq__96897_96985,chunk__96898_96986,count__96899_96987,i__96900_96988,op_97010,seq__96897_97004__$1,temp__5753__auto___97003){
return (function (a,b){
var G__96917 = a;
var G__96918 = sicmutils.modint.make(b,sicmutils.modint.modulus(a));
return (op_97010.cljs$core$IFn$_invoke$arity$2 ? op_97010.cljs$core$IFn$_invoke$arity$2(G__96917,G__96918) : op_97010.call(null,G__96917,G__96918));
});})(seq__96897_96985,chunk__96898_96986,count__96899_96987,i__96900_96988,op_97010,seq__96897_97004__$1,temp__5753__auto___97003))
);


var G__97011 = cljs.core.next(seq__96897_97004__$1);
var G__97012 = null;
var G__97013 = (0);
var G__97014 = (0);
seq__96897_96985 = G__97011;
chunk__96898_96986 = G__97012;
count__96899_96987 = G__97013;
i__96900_96988 = G__97014;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=sicmutils.modint.js.map
