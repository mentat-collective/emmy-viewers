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
return sicmutils.modint.make((function (){var G__84907 = sicmutils.modint.residue(a);
var G__84908 = sicmutils.modint.residue(b);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__84907,G__84908) : op.call(null,G__84907,G__84908));
})(),sicmutils.modint.modulus(a));
}
});
});
/**
 * Modular inverse. JVM implementation uses the native BigInt implementation.
 */
sicmutils.modint.invert = (function sicmutils$modint$invert(var_args){
var G__84910 = arguments.length;
switch (G__84910) {
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
var vec__84914 = sicmutils.euclid.extended_gcd(i,modulus);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84914,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84914,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84914,(2),null);
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
var len__4864__auto___85064 = arguments.length;
var i__4865__auto___85065 = (0);
while(true){
if((i__4865__auto___85065 < len__4864__auto___85064)){
args__4870__auto__.push((arguments[i__4865__auto___85065]));

var G__85066 = (i__4865__auto___85065 + (1));
i__4865__auto___85065 = G__85066;
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
(sicmutils.modint.chinese_remainder.cljs$lang$applyTo = (function (seq84926){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq84926));
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
var seq__84977_85072 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.add,sicmutils.generic.mul,sicmutils.generic.sub], null));
var chunk__84978_85073 = null;
var count__84979_85074 = (0);
var i__84980_85075 = (0);
while(true){
if((i__84980_85075 < count__84979_85074)){
var op_85076 = chunk__84978_85073.cljs$core$IIndexed$_nth$arity$2(null,i__84980_85075);
op_85076.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231),new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),((function (seq__84977_85072,chunk__84978_85073,count__84979_85074,i__84980_85075,op_85076){
return (function (a,b){
return sicmutils.modint.make((function (){var G__84997 = a;
var G__84998 = sicmutils.modint.residue(b);
return (op_85076.cljs$core$IFn$_invoke$arity$2 ? op_85076.cljs$core$IFn$_invoke$arity$2(G__84997,G__84998) : op_85076.call(null,G__84997,G__84998));
})(),sicmutils.modint.modulus(b));
});})(seq__84977_85072,chunk__84978_85073,count__84979_85074,i__84980_85075,op_85076))
);

op_85076.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024),new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),((function (seq__84977_85072,chunk__84978_85073,count__84979_85074,i__84980_85075,op_85076){
return (function (a,b){
return sicmutils.modint.make((function (){var G__84999 = sicmutils.modint.residue(a);
var G__85000 = b;
return (op_85076.cljs$core$IFn$_invoke$arity$2 ? op_85076.cljs$core$IFn$_invoke$arity$2(G__84999,G__85000) : op_85076.call(null,G__84999,G__85000));
})(),sicmutils.modint.modulus(a));
});})(seq__84977_85072,chunk__84978_85073,count__84979_85074,i__84980_85075,op_85076))
);


var G__85077 = seq__84977_85072;
var G__85078 = chunk__84978_85073;
var G__85079 = count__84979_85074;
var G__85080 = (i__84980_85075 + (1));
seq__84977_85072 = G__85077;
chunk__84978_85073 = G__85078;
count__84979_85074 = G__85079;
i__84980_85075 = G__85080;
continue;
} else {
var temp__5753__auto___85081 = cljs.core.seq(seq__84977_85072);
if(temp__5753__auto___85081){
var seq__84977_85082__$1 = temp__5753__auto___85081;
if(cljs.core.chunked_seq_QMARK_(seq__84977_85082__$1)){
var c__4679__auto___85083 = cljs.core.chunk_first(seq__84977_85082__$1);
var G__85084 = cljs.core.chunk_rest(seq__84977_85082__$1);
var G__85085 = c__4679__auto___85083;
var G__85086 = cljs.core.count(c__4679__auto___85083);
var G__85087 = (0);
seq__84977_85072 = G__85084;
chunk__84978_85073 = G__85085;
count__84979_85074 = G__85086;
i__84980_85075 = G__85087;
continue;
} else {
var op_85088 = cljs.core.first(seq__84977_85082__$1);
op_85088.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231),new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),((function (seq__84977_85072,chunk__84978_85073,count__84979_85074,i__84980_85075,op_85088,seq__84977_85082__$1,temp__5753__auto___85081){
return (function (a,b){
return sicmutils.modint.make((function (){var G__85002 = a;
var G__85003 = sicmutils.modint.residue(b);
return (op_85088.cljs$core$IFn$_invoke$arity$2 ? op_85088.cljs$core$IFn$_invoke$arity$2(G__85002,G__85003) : op_85088.call(null,G__85002,G__85003));
})(),sicmutils.modint.modulus(b));
});})(seq__84977_85072,chunk__84978_85073,count__84979_85074,i__84980_85075,op_85088,seq__84977_85082__$1,temp__5753__auto___85081))
);

op_85088.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024),new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),((function (seq__84977_85072,chunk__84978_85073,count__84979_85074,i__84980_85075,op_85088,seq__84977_85082__$1,temp__5753__auto___85081){
return (function (a,b){
return sicmutils.modint.make((function (){var G__85004 = sicmutils.modint.residue(a);
var G__85005 = b;
return (op_85088.cljs$core$IFn$_invoke$arity$2 ? op_85088.cljs$core$IFn$_invoke$arity$2(G__85004,G__85005) : op_85088.call(null,G__85004,G__85005));
})(),sicmutils.modint.modulus(a));
});})(seq__84977_85072,chunk__84978_85073,count__84979_85074,i__84980_85075,op_85088,seq__84977_85082__$1,temp__5753__auto___85081))
);


var G__85089 = cljs.core.next(seq__84977_85082__$1);
var G__85090 = null;
var G__85091 = (0);
var G__85092 = (0);
seq__84977_85072 = G__85089;
chunk__84978_85073 = G__85090;
count__84979_85074 = G__85091;
i__84980_85075 = G__85092;
continue;
}
} else {
}
}
break;
}
var seq__85011_85093 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.div,sicmutils.generic.solve_linear,sicmutils.generic.solve_linear_right,sicmutils.generic.quotient,sicmutils.generic.remainder,sicmutils.generic.exact_divide], null));
var chunk__85012_85094 = null;
var count__85013_85095 = (0);
var i__85014_85096 = (0);
while(true){
if((i__85014_85096 < count__85013_85095)){
var op_85097 = chunk__85012_85094.cljs$core$IIndexed$_nth$arity$2(null,i__85014_85096);
op_85097.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231),new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),((function (seq__85011_85093,chunk__85012_85094,count__85013_85095,i__85014_85096,op_85097){
return (function (a,b){
var G__85026 = sicmutils.modint.make(a,sicmutils.modint.modulus(b));
var G__85027 = b;
return (op_85097.cljs$core$IFn$_invoke$arity$2 ? op_85097.cljs$core$IFn$_invoke$arity$2(G__85026,G__85027) : op_85097.call(null,G__85026,G__85027));
});})(seq__85011_85093,chunk__85012_85094,count__85013_85095,i__85014_85096,op_85097))
);

op_85097.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024),new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),((function (seq__85011_85093,chunk__85012_85094,count__85013_85095,i__85014_85096,op_85097){
return (function (a,b){
var G__85031 = a;
var G__85032 = sicmutils.modint.make(b,sicmutils.modint.modulus(a));
return (op_85097.cljs$core$IFn$_invoke$arity$2 ? op_85097.cljs$core$IFn$_invoke$arity$2(G__85031,G__85032) : op_85097.call(null,G__85031,G__85032));
});})(seq__85011_85093,chunk__85012_85094,count__85013_85095,i__85014_85096,op_85097))
);


var G__85098 = seq__85011_85093;
var G__85099 = chunk__85012_85094;
var G__85100 = count__85013_85095;
var G__85101 = (i__85014_85096 + (1));
seq__85011_85093 = G__85098;
chunk__85012_85094 = G__85099;
count__85013_85095 = G__85100;
i__85014_85096 = G__85101;
continue;
} else {
var temp__5753__auto___85102 = cljs.core.seq(seq__85011_85093);
if(temp__5753__auto___85102){
var seq__85011_85103__$1 = temp__5753__auto___85102;
if(cljs.core.chunked_seq_QMARK_(seq__85011_85103__$1)){
var c__4679__auto___85104 = cljs.core.chunk_first(seq__85011_85103__$1);
var G__85105 = cljs.core.chunk_rest(seq__85011_85103__$1);
var G__85106 = c__4679__auto___85104;
var G__85107 = cljs.core.count(c__4679__auto___85104);
var G__85108 = (0);
seq__85011_85093 = G__85105;
chunk__85012_85094 = G__85106;
count__85013_85095 = G__85107;
i__85014_85096 = G__85108;
continue;
} else {
var op_85109 = cljs.core.first(seq__85011_85103__$1);
op_85109.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231),new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024)], null),((function (seq__85011_85093,chunk__85012_85094,count__85013_85095,i__85014_85096,op_85109,seq__85011_85103__$1,temp__5753__auto___85102){
return (function (a,b){
var G__85036 = sicmutils.modint.make(a,sicmutils.modint.modulus(b));
var G__85037 = b;
return (op_85109.cljs$core$IFn$_invoke$arity$2 ? op_85109.cljs$core$IFn$_invoke$arity$2(G__85036,G__85037) : op_85109.call(null,G__85036,G__85037));
});})(seq__85011_85093,chunk__85012_85094,count__85013_85095,i__85014_85096,op_85109,seq__85011_85103__$1,temp__5753__auto___85102))
);

op_85109.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024),new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),((function (seq__85011_85093,chunk__85012_85094,count__85013_85095,i__85014_85096,op_85109,seq__85011_85103__$1,temp__5753__auto___85102){
return (function (a,b){
var G__85038 = a;
var G__85039 = sicmutils.modint.make(b,sicmutils.modint.modulus(a));
return (op_85109.cljs$core$IFn$_invoke$arity$2 ? op_85109.cljs$core$IFn$_invoke$arity$2(G__85038,G__85039) : op_85109.call(null,G__85038,G__85039));
});})(seq__85011_85093,chunk__85012_85094,count__85013_85095,i__85014_85096,op_85109,seq__85011_85103__$1,temp__5753__auto___85102))
);


var G__85111 = cljs.core.next(seq__85011_85103__$1);
var G__85112 = null;
var G__85113 = (0);
var G__85114 = (0);
seq__85011_85093 = G__85111;
chunk__85012_85094 = G__85112;
count__85013_85095 = G__85113;
i__85014_85096 = G__85114;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=sicmutils.modint.js.map
