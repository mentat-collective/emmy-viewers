goog.provide('sicmutils.generic');
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.add !== 'undefined')){
} else {
/**
 * generic add.
 * 
 * Returns the sum of arguments `a` and `b`.
 * 
 *   See [[+]] for a variadic version of [[add]].
 */
sicmutils.generic.add = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95392 = cljs.core.get_global_hierarchy;
return (fexpr__95392.cljs$core$IFn$_invoke$arity$0 ? fexpr__95392.cljs$core$IFn$_invoke$arity$0() : fexpr__95392.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","add"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95397 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (_,___$1){
return (1);
}),new cljs.core.Keyword(null,"dfdy","dfdy",-434788201),(function (_,___$1){
return (1);
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null)], null);
return (fexpr__95397.cljs$core$IFn$_invoke$arity$1 ? fexpr__95397.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95397.call(null,k__14627__auto__));
}));
/**
 * Generic implementation of `+`. Returns the sum of all supplied arguments. `(+)`
 *   returns 0, the additive identity.
 * 
 *   When applied between numbers, acts like `clojure.core/+`. Dispatch is open,
 *   however, making it possible to 'add' types wherever the behavior is
 *   mathematically sound.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (+ [1 2 3] [2 3 4])
 *   ;;=> (up 3 5 7)
 *   ```
 */
sicmutils.generic._PLUS_ = (function sicmutils$generic$_PLUS_(var_args){
var G__95402 = arguments.length;
switch (G__95402) {
case 0:
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___95607 = arguments.length;
var i__4865__auto___95608 = (0);
while(true){
if((i__4865__auto___95608 < len__4864__auto___95607)){
args_arr__4885__auto__.push((arguments[i__4865__auto___95608]));

var G__95609 = (i__4865__auto___95608 + (1));
i__4865__auto___95608 = G__95609;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$0 = (function (){
return (0);
}));

(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(sicmutils.value.numeric_zero_QMARK_(x)){
return y;
} else {
if(sicmutils.value.numeric_zero_QMARK_(y)){
return x;
} else {
return sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(x,y);

}
}
}));

(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(sicmutils.generic._PLUS_,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(x,y),more);
}));

/** @this {Function} */
(sicmutils.generic._PLUS_.cljs$lang$applyTo = (function (seq95399){
var G__95400 = cljs.core.first(seq95399);
var seq95399__$1 = cljs.core.next(seq95399);
var G__95401 = cljs.core.first(seq95399__$1);
var seq95399__$2 = cljs.core.next(seq95399__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95400,G__95401,seq95399__$2);
}));

(sicmutils.generic._PLUS_.cljs$lang$maxFixedArity = (2));

if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.negate !== 'undefined')){
} else {
/**
 * generic negate.
 * 
 * Returns the negation of `a`.
 * 
 *   Equivalent to `(- (v/zero-like a) a)`.
 */
sicmutils.generic.negate = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95403 = cljs.core.get_global_hierarchy;
return (fexpr__95403.cljs$core$IFn$_invoke$arity$0 ? fexpr__95403.cljs$core$IFn$_invoke$arity$0() : fexpr__95403.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","negate"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95404 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (_){
return (-1);
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null)], null);
return (fexpr__95404.cljs$core$IFn$_invoke$arity$1 ? fexpr__95404.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95404.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.sub !== 'undefined')){
} else {
/**
 * generic sub.
 * 
 * Returns the difference of `a` and `b`.
 * 
 *   Equivalent to `(+ a (negate b))`.
 * 
 *   See [[-]] for a variadic version of [[sub]].
 */
sicmutils.generic.sub = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95405 = cljs.core.get_global_hierarchy;
return (fexpr__95405.cljs$core$IFn$_invoke$arity$0 ? fexpr__95405.cljs$core$IFn$_invoke$arity$0() : fexpr__95405.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","sub"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95406 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (_,___$1){
return (1);
}),new cljs.core.Keyword(null,"dfdy","dfdy",-434788201),(function (_,___$1){
return (-1);
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null)], null);
return (fexpr__95406.cljs$core$IFn$_invoke$arity$1 ? fexpr__95406.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95406.call(null,k__14627__auto__));
}));
sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a,b){
return sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(a,sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(b));
}));
/**
 * Generic implementation of `-`.
 * 
 *   If one argument is supplied, returns the negation of `a`. Else returns the
 *   difference of the first argument `a` and the sum of all remaining
 *   arguments. `(-)` returns 0.
 * 
 *   When applied between numbers, acts like `clojure.core/-`. Dispatch is open,
 *   however, making it possible to 'subtract' types wherever the behavior is
 *   mathematically sound.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (- [1 2 3] [2 3 4])
 *   ;;=> (up -1 -1 -1)
 * 
 *   (- [1 10])
 *   ;;=> (up -1 -10)
 *   ```
 */
sicmutils.generic._ = (function sicmutils$generic$_(var_args){
var G__95411 = arguments.length;
switch (G__95411) {
case 0:
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___95615 = arguments.length;
var i__4865__auto___95616 = (0);
while(true){
if((i__4865__auto___95616 < len__4864__auto___95615)){
args_arr__4885__auto__.push((arguments[i__4865__auto___95616]));

var G__95617 = (i__4865__auto___95616 + (1));
i__4865__auto___95616 = G__95617;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(sicmutils.generic._.cljs$core$IFn$_invoke$arity$0 = (function (){
return (0);
}));

(sicmutils.generic._.cljs$core$IFn$_invoke$arity$1 = (function (x){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(x);
}));

(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(sicmutils.value.numeric_zero_QMARK_(y)){
return x;
} else {
if(sicmutils.value.numeric_zero_QMARK_(x)){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(y);
} else {
return sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(x,y);

}
}
}));

(sicmutils.generic._.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(x,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sicmutils.generic._PLUS_,y,more));
}));

/** @this {Function} */
(sicmutils.generic._.cljs$lang$applyTo = (function (seq95408){
var G__95409 = cljs.core.first(seq95408);
var seq95408__$1 = cljs.core.next(seq95408);
var G__95410 = cljs.core.first(seq95408__$1);
var seq95408__$2 = cljs.core.next(seq95408__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95409,G__95410,seq95408__$2);
}));

(sicmutils.generic._.cljs$lang$maxFixedArity = (2));

if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.mul !== 'undefined')){
} else {
/**
 * generic mul.
 * 
 * Returns the product of `a` and `b`.
 * 
 *   See [[*]] for a variadic version of [[mul]].
 */
sicmutils.generic.mul = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95439 = cljs.core.get_global_hierarchy;
return (fexpr__95439.cljs$core$IFn$_invoke$arity$0 ? fexpr__95439.cljs$core$IFn$_invoke$arity$0() : fexpr__95439.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","mul"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95440 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (_,y){
return y;
}),new cljs.core.Keyword(null,"dfdy","dfdy",-434788201),(function (x,_){
return x;
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null)], null);
return (fexpr__95440.cljs$core$IFn$_invoke$arity$1 ? fexpr__95440.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95440.call(null,k__14627__auto__));
}));
/**
 * Generic implementation of `*`. Returns the product of all supplied
 *   arguments. `(*)` returns 1, the multiplicative identity.
 * 
 *   When applied between numbers, acts like `clojure.core/*`. Dispatch is open,
 *   however, making it possible to 'multiply' types wherever the behavior is
 *   mathematically sound.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (* 2 #sicm/complex "3 + 1i")
 *   ;;=> #sicm/complex "6 + 2i"
 *   ```
 */
sicmutils.generic._STAR_ = (function sicmutils$generic$_STAR_(var_args){
var G__95445 = arguments.length;
switch (G__95445) {
case 0:
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___95619 = arguments.length;
var i__4865__auto___95620 = (0);
while(true){
if((i__4865__auto___95620 < len__4864__auto___95619)){
args_arr__4885__auto__.push((arguments[i__4865__auto___95620]));

var G__95621 = (i__4865__auto___95620 + (1));
i__4865__auto___95620 = G__95621;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return (1);
}));

(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var numx_QMARK_ = sicmutils.value.numerical_QMARK_(x);
var numy_QMARK_ = sicmutils.value.numerical_QMARK_(y);
if(((numx_QMARK_) && (sicmutils.value.zero_QMARK_(x)))){
return sicmutils.value.zero_like(y);
} else {
if(((numy_QMARK_) && (sicmutils.value.zero_QMARK_(y)))){
return sicmutils.value.zero_like(x);
} else {
if(((numx_QMARK_) && (sicmutils.value.one_QMARK_(x)))){
return y;
} else {
if(((numy_QMARK_) && (sicmutils.value.one_QMARK_(y)))){
return x;
} else {
return sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(x,y);

}
}
}
}
}));

(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(sicmutils.generic._STAR_,sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(x,y),more);
}));

/** @this {Function} */
(sicmutils.generic._STAR_.cljs$lang$applyTo = (function (seq95442){
var G__95443 = cljs.core.first(seq95442);
var seq95442__$1 = cljs.core.next(seq95442);
var G__95444 = cljs.core.first(seq95442__$1);
var seq95442__$2 = cljs.core.next(seq95442__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95443,G__95444,seq95442__$2);
}));

(sicmutils.generic._STAR_.cljs$lang$maxFixedArity = (2));


if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.invert !== 'undefined')){
} else {
/**
 * generic invert.
 * 
 * Returns the multiplicative inverse of `a`.
 * 
 *   Equivalent to `(/ 1 a)`.
 */
sicmutils.generic.invert = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95449 = cljs.core.get_global_hierarchy;
return (fexpr__95449.cljs$core$IFn$_invoke$arity$0 ? fexpr__95449.cljs$core$IFn$_invoke$arity$0() : fexpr__95449.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","invert"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95452 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
var G__95453 = (-1);
var G__95454 = (sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1 ? sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.generic.square.call(null,x));
return (sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2 ? sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(G__95453,G__95454) : sicmutils.generic.div.call(null,G__95453,G__95454));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null)], null);
return (fexpr__95452.cljs$core$IFn$_invoke$arity$1 ? fexpr__95452.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95452.call(null,k__14627__auto__));
}));
sicmutils.generic._STAR_in_default_invert_STAR_ = false;
sicmutils.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a){
var _STAR_in_default_invert_STAR__orig_val__95455 = sicmutils.generic._STAR_in_default_invert_STAR_;
var _STAR_in_default_invert_STAR__temp_val__95456 = true;
(sicmutils.generic._STAR_in_default_invert_STAR_ = _STAR_in_default_invert_STAR__temp_val__95456);

try{return (sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2 ? sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2((1),a) : sicmutils.generic.div.call(null,(1),a));
}finally {(sicmutils.generic._STAR_in_default_invert_STAR_ = _STAR_in_default_invert_STAR__orig_val__95455);
}}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.div !== 'undefined')){
} else {
/**
 * generic div.
 * 
 * Returns the result of dividing `a` and `b`.
 * 
 *   Equivalent to `(* a (negate b))`.
 * 
 *   See [[/]] for a variadic version of [[div]].
 */
sicmutils.generic.div = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95457 = cljs.core.get_global_hierarchy;
return (fexpr__95457.cljs$core$IFn$_invoke$arity$0 ? fexpr__95457.cljs$core$IFn$_invoke$arity$0() : fexpr__95457.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","div"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95458 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (_,y){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2((1),y);
}),new cljs.core.Keyword(null,"dfdy","dfdy",-434788201),(function (x,y){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(x),(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1 ? sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(y) : sicmutils.generic.square.call(null,y)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null)], null);
return (fexpr__95458.cljs$core$IFn$_invoke$arity$1 ? fexpr__95458.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95458.call(null,k__14627__auto__));
}));
sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a,b){
if(cljs.core.truth_(sicmutils.generic._STAR_in_default_invert_STAR_)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No implementation of [[invert]] or [[div]].",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)], null));
} else {
return sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(a,sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(b));
}
}));
/**
 * Generic implementation of `/`.
 * 
 *   If one argument is supplied, returns the multiplicative inverse of `a`. Else
 *   returns the result of dividing first argument `a` by the product of all
 *   remaining arguments. `(/)` returns 1, the multiplicative identity.
 * 
 *   When applied between numbers, acts like `clojure.core//`. Dispatch is open,
 *   however, making it possible to 'divide' types wherever the behavior is
 *   mathematically sound.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (/ [2 4 6] 2)
 *   ;;=> (up 1 2 3)
 *   ```
 */
sicmutils.generic._SLASH_ = (function sicmutils$generic$_SLASH_(var_args){
var G__95463 = arguments.length;
switch (G__95463) {
case 0:
return sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___95629 = arguments.length;
var i__4865__auto___95630 = (0);
while(true){
if((i__4865__auto___95630 < len__4864__auto___95629)){
args_arr__4885__auto__.push((arguments[i__4865__auto___95630]));

var G__95631 = (i__4865__auto___95630 + (1));
i__4865__auto___95630 = G__95631;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$0 = (function (){
return (1);
}));

(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(x);
}));

(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(((sicmutils.value.number_QMARK_(y)) && (sicmutils.value.one_QMARK_(y)))){
return x;
} else {
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(x,y);
}
}));

(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sicmutils.generic._STAR_,y,more));
}));

/** @this {Function} */
(sicmutils.generic._SLASH_.cljs$lang$applyTo = (function (seq95460){
var G__95461 = cljs.core.first(seq95460);
var seq95460__$1 = cljs.core.next(seq95460);
var G__95462 = cljs.core.first(seq95460__$1);
var seq95460__$2 = cljs.core.next(seq95460__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95461,G__95462,seq95460__$2);
}));

(sicmutils.generic._SLASH_.cljs$lang$maxFixedArity = (2));

/**
 * Alias for [[/]].
 */
sicmutils.generic.divide = sicmutils.generic._SLASH_;
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.exact_divide !== 'undefined')){
} else {
/**
 * generic exact-divide.
 * 
 * Similar to the binary case of [[/]], but throws if `(v/exact? <result>)`
 *   returns false.
 */
sicmutils.generic.exact_divide = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95464 = cljs.core.get_global_hierarchy;
return (fexpr__95464.cljs$core$IFn$_invoke$arity$0 ? fexpr__95464.cljs$core$IFn$_invoke$arity$0() : fexpr__95464.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","exact-divide"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.exact_divide.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95465 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"exact-divide","exact-divide",-836167490,null)], null);
return (fexpr__95465.cljs$core$IFn$_invoke$arity$1 ? fexpr__95465.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95465.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.exp !== 'undefined')){
} else {
/**
 * generic exp.
 * 
 * Returns the base-e exponential of `x`. Equivalent to `(expt e x)`, given
 *   some properly-defined `e` symbol.
 */
sicmutils.generic.exp = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95466 = cljs.core.get_global_hierarchy;
return (fexpr__95466.cljs$core$IFn$_invoke$arity$0 ? fexpr__95466.cljs$core$IFn$_invoke$arity$0() : fexpr__95466.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","exp"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.exp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95467 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),sicmutils.generic.exp,new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"exp","exp",1378825265,null)], null);
return (fexpr__95467.cljs$core$IFn$_invoke$arity$1 ? fexpr__95467.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95467.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.exp2 !== 'undefined')){
} else {
/**
 * generic exp2.
 * 
 * Returns the base-2 exponential of `x`. Equivalent to `(expt 2 x)`.
 */
sicmutils.generic.exp2 = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95468 = cljs.core.get_global_hierarchy;
return (fexpr__95468.cljs$core$IFn$_invoke$arity$0 ? fexpr__95468.cljs$core$IFn$_invoke$arity$0() : fexpr__95468.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","exp2"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.exp2.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95469 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"exp2","exp2",603509626,null)], null);
return (fexpr__95469.cljs$core$IFn$_invoke$arity$1 ? fexpr__95469.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95469.call(null,k__14627__auto__));
}));
sicmutils.generic.exp2.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return (sicmutils.generic.expt.cljs$core$IFn$_invoke$arity$2 ? sicmutils.generic.expt.cljs$core$IFn$_invoke$arity$2((2),x) : sicmutils.generic.expt.call(null,(2),x));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.exp10 !== 'undefined')){
} else {
/**
 * generic exp10.
 * 
 * Returns the base-10 exponential of `x`. Equivalent to `(expt 10 x)`.
 */
sicmutils.generic.exp10 = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95470 = cljs.core.get_global_hierarchy;
return (fexpr__95470.cljs$core$IFn$_invoke$arity$0 ? fexpr__95470.cljs$core$IFn$_invoke$arity$0() : fexpr__95470.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","exp10"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.exp10.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95471 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"exp10","exp10",-1005012445,null)], null);
return (fexpr__95471.cljs$core$IFn$_invoke$arity$1 ? fexpr__95471.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95471.call(null,k__14627__auto__));
}));
sicmutils.generic.exp10.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return (sicmutils.generic.expt.cljs$core$IFn$_invoke$arity$2 ? sicmutils.generic.expt.cljs$core$IFn$_invoke$arity$2((10),x) : sicmutils.generic.expt.call(null,(10),x));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.log !== 'undefined')){
} else {
/**
 * generic log.
 * 
 * Returns the natural logarithm of `x`.
 */
sicmutils.generic.log = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95472 = cljs.core.get_global_hierarchy;
return (fexpr__95472.cljs$core$IFn$_invoke$arity$0 ? fexpr__95472.cljs$core$IFn$_invoke$arity$0() : fexpr__95472.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","log"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.log.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95473 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),sicmutils.generic.invert,new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"log","log",45015523,null)], null);
return (fexpr__95473.cljs$core$IFn$_invoke$arity$1 ? fexpr__95473.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95473.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.log2 !== 'undefined')){
} else {
/**
 * generic log2.
 * 
 * Returns the base-2 logarithm of `x`, ie, $log_2(x)$.
 */
sicmutils.generic.log2 = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95474 = cljs.core.get_global_hierarchy;
return (fexpr__95474.cljs$core$IFn$_invoke$arity$0 ? fexpr__95474.cljs$core$IFn$_invoke$arity$0() : fexpr__95474.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","log2"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.log2.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95475 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"log2","log2",-1850656939,null)], null);
return (fexpr__95475.cljs$core$IFn$_invoke$arity$1 ? fexpr__95475.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95475.call(null,k__14627__auto__));
}));
var l2_95636 = Math.log((2));
sicmutils.generic.log2.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.log.cljs$core$IFn$_invoke$arity$1(x),l2_95636);
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.log10 !== 'undefined')){
} else {
/**
 * generic log10.
 * 
 * Returns the base-10 logarithm of `x`, ie, $log_10(x)$.
 */
sicmutils.generic.log10 = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95476 = cljs.core.get_global_hierarchy;
return (fexpr__95476.cljs$core$IFn$_invoke$arity$0 ? fexpr__95476.cljs$core$IFn$_invoke$arity$0() : fexpr__95476.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","log10"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.log10.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95477 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"log10","log10",891257803,null)], null);
return (fexpr__95477.cljs$core$IFn$_invoke$arity$1 ? fexpr__95477.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95477.call(null,k__14627__auto__));
}));
var l10_95639 = Math.log((10));
sicmutils.generic.log10.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.log.cljs$core$IFn$_invoke$arity$1(x),l10_95639);
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.expt !== 'undefined')){
} else {
/**
 * generic expt
 */
sicmutils.generic.expt = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95478 = cljs.core.get_global_hierarchy;
return (fexpr__95478.cljs$core$IFn$_invoke$arity$0 ? fexpr__95478.cljs$core$IFn$_invoke$arity$0() : fexpr__95478.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","expt"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95479 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x,y){
return sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(y,sicmutils.generic.expt.cljs$core$IFn$_invoke$arity$2(x,sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(y,(1))));
}),new cljs.core.Keyword(null,"dfdy","dfdy",-434788201),(function (x,y){
if(((sicmutils.value.number_QMARK_(x)) && (sicmutils.value.zero_QMARK_(x)))){
if(sicmutils.value.number_QMARK_(y)){
if(cljs.core.not((sicmutils.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(y) : sicmutils.generic.negative_QMARK_.call(null,y)))){
return (0);
} else {
return sicmutils.util.illegal("Derivative undefined: expt");
}
} else {
return (0);
}
} else {
return sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.log.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.expt.cljs$core$IFn$_invoke$arity$2(x,y));
}
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"expt","expt",2123850345,null)], null);
return (fexpr__95479.cljs$core$IFn$_invoke$arity$1 ? fexpr__95479.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95479.call(null,k__14627__auto__));
}));
/**
 * Default implementation of exponentiation for integral exponents `e`.
 * 
 *   This implementation uses ['Exponentation by
 *   Squaring'](https://en.wikipedia.org/wiki/Exponentiation_by_squaring), and will
 *   work for any type that implements `g/mul`.
 * 
 *   The multiplication operation is looked up once and cached at the beginning of
 *   computation.
 */
sicmutils.generic.default_expt = (function sicmutils$generic$default_expt(s,e){
if(sicmutils.value.native_integral_QMARK_(e)){
} else {
throw (new Error("Assert failed: (v/native-integral? e)"));
}

var kind = sicmutils.value.kind(s);
var temp__5751__auto__ = cljs.core.get_method(sicmutils.generic.mul,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind,kind], null));
if(cljs.core.truth_(temp__5751__auto__)){
var mul_SINGLEQUOTE_ = temp__5751__auto__;
var expt_SINGLEQUOTE_ = (function sicmutils$generic$default_expt_$_expt_SINGLEQUOTE_(base,pow){
var n = pow;
var y = sicmutils.value.one_like(base);
var z = base;
while(true){
var t = cljs.core.even_QMARK_(n);
var n__$1 = cljs.core.quot(n,(2));
if(t){
var G__95655 = n__$1;
var G__95656 = y;
var G__95657 = (mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : mul_SINGLEQUOTE_.call(null,z,z));
n = G__95655;
y = G__95656;
z = G__95657;
continue;
} else {
if((n__$1 === (0))){
return (mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : mul_SINGLEQUOTE_.call(null,z,y));
} else {
var G__95658 = n__$1;
var G__95659 = (mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : mul_SINGLEQUOTE_.call(null,z,y));
var G__95660 = (mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : mul_SINGLEQUOTE_.call(null,z,z));
n = G__95658;
y = G__95659;
z = G__95660;
continue;

}
}
break;
}
});
if((e > (0))){
return expt_SINGLEQUOTE_(s,e);
} else {
if((e === (0))){
return sicmutils.value.one_like(e);
} else {
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(expt_SINGLEQUOTE_(s,sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(e)));

}
}
} else {
return sicmutils.util.illegal(["No g/mul implementation registered for kind ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)].join(''));
}
});
sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (s,e){
if(sicmutils.value.native_integral_QMARK_(e)){
return sicmutils.generic.default_expt(s,e);
} else {
return sicmutils.generic.exp.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(e,sicmutils.generic.log.cljs$core$IFn$_invoke$arity$1(s)));
}
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.square !== 'undefined')){
} else {
/**
 * generic square
 */
sicmutils.generic.square = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95480 = cljs.core.get_global_hierarchy;
return (fexpr__95480.cljs$core$IFn$_invoke$arity$0 ? fexpr__95480.cljs$core$IFn$_invoke$arity$0() : fexpr__95480.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","square"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95481 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2((2),x);
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"square","square",-1842001092,null)], null);
return (fexpr__95481.cljs$core$IFn$_invoke$arity$1 ? fexpr__95481.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95481.call(null,k__14627__auto__));
}));
sicmutils.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.expt.cljs$core$IFn$_invoke$arity$2(x,(2));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.cube !== 'undefined')){
} else {
/**
 * generic cube
 */
sicmutils.generic.cube = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95482 = cljs.core.get_global_hierarchy;
return (fexpr__95482.cljs$core$IFn$_invoke$arity$0 ? fexpr__95482.cljs$core$IFn$_invoke$arity$0() : fexpr__95482.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","cube"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95483 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2((3),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cube","cube",138920159,null)], null);
return (fexpr__95483.cljs$core$IFn$_invoke$arity$1 ? fexpr__95483.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95483.call(null,k__14627__auto__));
}));
sicmutils.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.expt.cljs$core$IFn$_invoke$arity$2(x,(3));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.sqrt !== 'undefined')){
} else {
/**
 * generic sqrt
 */
sicmutils.generic.sqrt = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95484 = cljs.core.get_global_hierarchy;
return (fexpr__95484.cljs$core$IFn$_invoke$arity$0 ? fexpr__95484.cljs$core$IFn$_invoke$arity$0() : fexpr__95484.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","sqrt"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95485 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(x),(2)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null)], null);
return (fexpr__95485.cljs$core$IFn$_invoke$arity$1 ? fexpr__95485.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95485.call(null,k__14627__auto__));
}));
sicmutils.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.exp.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2((1),(2)),sicmutils.generic.log.cljs$core$IFn$_invoke$arity$1(x)));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.negative_QMARK_ !== 'undefined')){
} else {
/**
 * generic negative?.
 * 
 * Returns true if the argument `a` is less than `(v/zero-like a)`,
 *   false otherwise. The default implementation depends on a proper Comparable
 *   implementation on the type.`
 */
sicmutils.generic.negative_QMARK_ = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95486 = cljs.core.get_global_hierarchy;
return (fexpr__95486.cljs$core$IFn$_invoke$arity$0 ? fexpr__95486.cljs$core$IFn$_invoke$arity$0() : fexpr__95486.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","negative?"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.negative_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95487 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"negative?","negative?",374534410,null)], null);
return (fexpr__95487.cljs$core$IFn$_invoke$arity$1 ? fexpr__95487.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95487.call(null,k__14627__auto__));
}));
sicmutils.generic.negative_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a){
return (a < sicmutils.value.zero_like(a));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.infinite_QMARK_ !== 'undefined')){
} else {
/**
 * generic infinite?.
 * 
 * Returns true if `a` is either numerically infinite (ie, equal to `##Inf`) or
 *   a compound number (complex or quaterion, for example) with some infinite
 *   component.
 */
sicmutils.generic.infinite_QMARK_ = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95488 = cljs.core.get_global_hierarchy;
return (fexpr__95488.cljs$core$IFn$_invoke$arity$0 ? fexpr__95488.cljs$core$IFn$_invoke$arity$0() : fexpr__95488.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","infinite?"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.infinite_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95489 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"infinite?","infinite?",-377355081,null)], null);
return (fexpr__95489.cljs$core$IFn$_invoke$arity$1 ? fexpr__95489.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95489.call(null,k__14627__auto__));
}));
sicmutils.generic.infinite_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return false;
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.abs !== 'undefined')){
} else {
/**
 * generic abs
 */
sicmutils.generic.abs = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95490 = cljs.core.get_global_hierarchy;
return (fexpr__95490.cljs$core$IFn$_invoke$arity$0 ? fexpr__95490.cljs$core$IFn$_invoke$arity$0() : fexpr__95490.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","abs"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95491 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"abs","abs",1394505050,null)], null);
return (fexpr__95491.cljs$core$IFn$_invoke$arity$1 ? fexpr__95491.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95491.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.floor !== 'undefined')){
} else {
/**
 * generic floor.
 * 
 * Returns the largest integer less than or equal to `a`.
 * 
 *   Extensions beyond real numbers may behave differently; see the [Documentation
 *   site](https://cljdoc.org/d/sicmutils/sicmutils/CURRENT/doc/basics/generics)
 *   for more detail.
 */
sicmutils.generic.floor = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95492 = cljs.core.get_global_hierarchy;
return (fexpr__95492.cljs$core$IFn$_invoke$arity$0 ? fexpr__95492.cljs$core$IFn$_invoke$arity$0() : fexpr__95492.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","floor"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.floor.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95493 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null);
return (fexpr__95493.cljs$core$IFn$_invoke$arity$1 ? fexpr__95493.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95493.call(null,k__14627__auto__));
}));
sicmutils.generic.floor.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a){
if(cljs.core.truth_(sicmutils.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(a))){
return sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2((sicmutils.generic.integer_part.cljs$core$IFn$_invoke$arity$1 ? sicmutils.generic.integer_part.cljs$core$IFn$_invoke$arity$1(a) : sicmutils.generic.integer_part.call(null,a)),(1));
} else {
return (sicmutils.generic.integer_part.cljs$core$IFn$_invoke$arity$1 ? sicmutils.generic.integer_part.cljs$core$IFn$_invoke$arity$1(a) : sicmutils.generic.integer_part.call(null,a));
}
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.ceiling !== 'undefined')){
} else {
/**
 * generic ceiling.
 * 
 * Returns the result of rounding `a` up to the next largest integer.
 * 
 *   Extensions beyond real numbers may behave differently; see the [Documentation
 *   site](https://cljdoc.org/d/sicmutils/sicmutils/CURRENT/doc/basics/generics)
 *   for more detail.
 */
sicmutils.generic.ceiling = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95494 = cljs.core.get_global_hierarchy;
return (fexpr__95494.cljs$core$IFn$_invoke$arity$0 ? fexpr__95494.cljs$core$IFn$_invoke$arity$0() : fexpr__95494.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","ceiling"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.ceiling.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95495 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"ceiling","ceiling",-1593475279,null)], null);
return (fexpr__95495.cljs$core$IFn$_invoke$arity$1 ? fexpr__95495.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95495.call(null,k__14627__auto__));
}));
sicmutils.generic.ceiling.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.floor.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(a)));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.integer_part !== 'undefined')){
} else {
/**
 * generic integer-part.
 * 
 * Returns the integer part of `a` by removing any fractional digits.
 */
sicmutils.generic.integer_part = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95496 = cljs.core.get_global_hierarchy;
return (fexpr__95496.cljs$core$IFn$_invoke$arity$0 ? fexpr__95496.cljs$core$IFn$_invoke$arity$0() : fexpr__95496.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","integer-part"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.integer_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95497 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"integer-part","integer-part",-1884537015,null)], null);
return (fexpr__95497.cljs$core$IFn$_invoke$arity$1 ? fexpr__95497.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95497.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.fractional_part !== 'undefined')){
} else {
/**
 * generic fractional-part.
 * 
 * Returns the fractional part of the given value, defined as `x - ⌊x⌋`.
 * 
 *   For positive numbers, this is identical to `(- a (integer-part a))`. For
 *   negative `a`, because [[floor]] truncates toward negative infinity, you might
 *   be surprised to find that [[fractional-part]] returns the distance between `a`
 *   and the next-lowest integer:
 * 
 * ```clojure
 * (= 0.6 (fractional-part -0.4))
 * ```
 */
sicmutils.generic.fractional_part = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95498 = cljs.core.get_global_hierarchy;
return (fexpr__95498.cljs$core$IFn$_invoke$arity$0 ? fexpr__95498.cljs$core$IFn$_invoke$arity$0() : fexpr__95498.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","fractional-part"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.fractional_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95499 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fractional-part","fractional-part",-505422086,null)], null);
return (fexpr__95499.cljs$core$IFn$_invoke$arity$1 ? fexpr__95499.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95499.call(null,k__14627__auto__));
}));
sicmutils.generic.fractional_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a){
return sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(a,sicmutils.generic.floor.cljs$core$IFn$_invoke$arity$1(a));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.quotient !== 'undefined')){
} else {
/**
 * generic quotient
 */
sicmutils.generic.quotient = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95500 = cljs.core.get_global_hierarchy;
return (fexpr__95500.cljs$core$IFn$_invoke$arity$0 ? fexpr__95500.cljs$core$IFn$_invoke$arity$0() : fexpr__95500.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","quotient"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.quotient.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95501 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"quotient","quotient",-1029733218,null)], null);
return (fexpr__95501.cljs$core$IFn$_invoke$arity$1 ? fexpr__95501.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95501.call(null,k__14627__auto__));
}));
/**
 * The default implementation for [[modulo]] depends on the identity:
 * 
 *   x mod y == x - y ⌊x/y⌋
 * 
 *   This is the Knuth definition described
 *   by [Wikipedia](https://en.wikipedia.org/wiki/Modulo_operation).
 */
sicmutils.generic.modulo_default = (function sicmutils$generic$modulo_default(a,b){
return sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(a,sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(b,sicmutils.generic.floor.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(a,b))));
});
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.modulo !== 'undefined')){
} else {
/**
 * generic modulo.
 * 
 * Returns the result of the
 *   mathematical [Modulo](https://en.wikipedia.org/wiki/Modulo_operation)
 *   operation between `a` and `b` (using the Knuth definition listed).
 * 
 *  The contract satisfied by [[modulo]] is:
 * 
 * ```clojure
 * (= a (+ (* b (floor (/ a b)))
 *      (modulo a b)))
 * ```
 * 
 *  For numbers, this differs from the contract offered by [[remainder]]
 *  because `(floor (/ a b))` rounds toward negative infinity, while
 *  the [[quotient]] operation in the contract for [[remainder]] rounds toward 0.
 * 
 *  The result will be either `0` or of the same sign as the divisor `b`.
 */
sicmutils.generic.modulo = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95502 = cljs.core.get_global_hierarchy;
return (fexpr__95502.cljs$core$IFn$_invoke$arity$0 ? fexpr__95502.cljs$core$IFn$_invoke$arity$0() : fexpr__95502.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","modulo"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.modulo.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95503 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"modulo","modulo",725580254,null)], null);
return (fexpr__95503.cljs$core$IFn$_invoke$arity$1 ? fexpr__95503.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95503.call(null,k__14627__auto__));
}));
sicmutils.generic.modulo.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a,b){
return sicmutils.generic.modulo_default(a,b);
}));
sicmutils.generic.remainder_default = (function sicmutils$generic$remainder_default(n,d){
var divnd = sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(n,d);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(n),sicmutils.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(d))){
return sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(d,sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(divnd,sicmutils.generic.floor.cljs$core$IFn$_invoke$arity$1(divnd)));
} else {
return sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(d,sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(divnd,sicmutils.generic.ceiling.cljs$core$IFn$_invoke$arity$1(divnd)));
}
});
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.remainder !== 'undefined')){
} else {
/**
 * generic remainder.
 * 
 * Returns the remainder of dividing the dividend `a` by divisor `b`.
 * 
 *  The contract satisfied by [[remainder]] is:
 * 
 * ```clojure
 * (= a (+ (* b (quotient a b))
 *      (remainder a b)))
 * ```
 * 
 *  For numbers, this differs from the contract offered by [[modulo]]
 *  because [[quotient]] rounds toward 0, while `(floor (/ a b))` rounds toward
 *  negative infinity.
 * 
 *  The result will be either `0` or of the same sign as the dividend `a`.
 */
sicmutils.generic.remainder = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95504 = cljs.core.get_global_hierarchy;
return (fexpr__95504.cljs$core$IFn$_invoke$arity$0 ? fexpr__95504.cljs$core$IFn$_invoke$arity$0() : fexpr__95504.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","remainder"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.remainder.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95505 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null)], null);
return (fexpr__95505.cljs$core$IFn$_invoke$arity$1 ? fexpr__95505.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95505.call(null,k__14627__auto__));
}));
sicmutils.generic.remainder.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (n,d){
return sicmutils.generic.remainder_default(n,d);
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.gcd !== 'undefined')){
} else {
/**
 * generic gcd.
 * 
 * Returns the [greatest common
 *   divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor) of the two
 *   inputs `a` and `b`.
 */
sicmutils.generic.gcd = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95506 = cljs.core.get_global_hierarchy;
return (fexpr__95506.cljs$core$IFn$_invoke$arity$0 ? fexpr__95506.cljs$core$IFn$_invoke$arity$0() : fexpr__95506.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","gcd"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95507 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"gcd","gcd",1659909537,null)], null);
return (fexpr__95507.cljs$core$IFn$_invoke$arity$1 ? fexpr__95507.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95507.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.lcm !== 'undefined')){
} else {
/**
 * generic lcm.
 * 
 * Returns the [least common
 *   multiple](https://en.wikipedia.org/wiki/Least_common_multiple) of the two
 *   inputs `a` and `b`.
 */
sicmutils.generic.lcm = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95508 = cljs.core.get_global_hierarchy;
return (fexpr__95508.cljs$core$IFn$_invoke$arity$0 ? fexpr__95508.cljs$core$IFn$_invoke$arity$0() : fexpr__95508.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","lcm"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.lcm.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95509 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"lcm","lcm",-1699262564,null)], null);
return (fexpr__95509.cljs$core$IFn$_invoke$arity$1 ? fexpr__95509.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95509.call(null,k__14627__auto__));
}));
sicmutils.generic.lcm.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a,b){
var g = sicmutils.generic.gcd.cljs$core$IFn$_invoke$arity$2(a,b);
if(sicmutils.value.zero_QMARK_(g)){
return g;
} else {
return sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.exact_divide.cljs$core$IFn$_invoke$arity$2(a,g),b));
}
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.cos !== 'undefined')){
} else {
/**
 * generic cos.
 * 
 * Returns the [cosine](https://en.wikipedia.org/wiki/Sine_and_cosine) of the
 *   supplied argument `a`.
 */
sicmutils.generic.cos = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95510 = cljs.core.get_global_hierarchy;
return (fexpr__95510.cljs$core$IFn$_invoke$arity$0 ? fexpr__95510.cljs$core$IFn$_invoke$arity$0() : fexpr__95510.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","cos"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.cos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95511 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1((sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1 ? sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.generic.sin.call(null,x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cos","cos",-1452677493,null)], null);
return (fexpr__95511.cljs$core$IFn$_invoke$arity$1 ? fexpr__95511.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95511.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.sin !== 'undefined')){
} else {
/**
 * generic sin.
 * 
 * Returns the [sine](https://en.wikipedia.org/wiki/Sine_and_cosine) of the
 *   supplied argument `a`.
 */
sicmutils.generic.sin = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95512 = cljs.core.get_global_hierarchy;
return (fexpr__95512.cljs$core$IFn$_invoke$arity$0 ? fexpr__95512.cljs$core$IFn$_invoke$arity$0() : fexpr__95512.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","sin"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.sin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95513 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),sicmutils.generic.cos,new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sin","sin",1721439389,null)], null);
return (fexpr__95513.cljs$core$IFn$_invoke$arity$1 ? fexpr__95513.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95513.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.tan !== 'undefined')){
} else {
/**
 * generic tan.
 * 
 * Computes the trigonometric tangent function of the supplied argument `a`.
 * 
 * Equivalent to `(/ (sin a) (cos a))`.
 */
sicmutils.generic.tan = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95514 = cljs.core.get_global_hierarchy;
return (fexpr__95514.cljs$core$IFn$_invoke$arity$0 ? fexpr__95514.cljs$core$IFn$_invoke$arity$0() : fexpr__95514.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","tan"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.tan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95515 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"tan","tan",-1380825876,null)], null);
return (fexpr__95515.cljs$core$IFn$_invoke$arity$1 ? fexpr__95515.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95515.call(null,k__14627__auto__));
}));
sicmutils.generic.tan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(x));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.cot !== 'undefined')){
} else {
/**
 * generic cot.
 * 
 * Computes the trigonometric cotangent function of the supplied argument `a`.
 * 
 * Equivalent to `(invert (tan a))`, or `(/ (cos a) (sin a))`.
 */
sicmutils.generic.cot = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95516 = cljs.core.get_global_hierarchy;
return (fexpr__95516.cljs$core$IFn$_invoke$arity$0 ? fexpr__95516.cljs$core$IFn$_invoke$arity$0() : fexpr__95516.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","cot"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.cot.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95517 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1((sicmutils.generic.csc.cljs$core$IFn$_invoke$arity$1 ? sicmutils.generic.csc.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.generic.csc.call(null,x))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cot","cot",-1635649012,null)], null);
return (fexpr__95517.cljs$core$IFn$_invoke$arity$1 ? fexpr__95517.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95517.call(null,k__14627__auto__));
}));
sicmutils.generic.cot.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(x));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.sec !== 'undefined')){
} else {
/**
 * generic sec.
 * 
 * Computes the secant of the supplied argument `a`.
 * 
 * Equivalent to `(invert (cos a))`.
 */
sicmutils.generic.sec = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95518 = cljs.core.get_global_hierarchy;
return (fexpr__95518.cljs$core$IFn$_invoke$arity$0 ? fexpr__95518.cljs$core$IFn$_invoke$arity$0() : fexpr__95518.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","sec"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.sec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95519 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sec.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.tan.cljs$core$IFn$_invoke$arity$1(x));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sec","sec",60154974,null)], null);
return (fexpr__95519.cljs$core$IFn$_invoke$arity$1 ? fexpr__95519.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95519.call(null,k__14627__auto__));
}));
sicmutils.generic.sec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(x));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.csc !== 'undefined')){
} else {
/**
 * generic csc.
 * 
 * Computes the cosecant of the supplied argument `a`.
 * 
 * Equivalent to `(invert (sin a))`.
 */
sicmutils.generic.csc = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95520 = cljs.core.get_global_hierarchy;
return (fexpr__95520.cljs$core$IFn$_invoke$arity$0 ? fexpr__95520.cljs$core$IFn$_invoke$arity$0() : fexpr__95520.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","csc"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.csc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95521 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.cot.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.csc.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"csc","csc",-427853492,null)], null);
return (fexpr__95521.cljs$core$IFn$_invoke$arity$1 ? fexpr__95521.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95521.call(null,k__14627__auto__));
}));
sicmutils.generic.csc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(x));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.atan !== 'undefined')){
} else {
/**
 * generic atan.
 * 
 * Computes the inverse tangent of the supplied argument `a`. Given two
 *   arguments `a` and `a`, returns the inverse tangent of the angle formed by the
 *   point `(a, b)` in a 2-dimensional euclidean plane.
 * 
 *   The two-argument version is sometimes
 *   called [Atan2](https://en.wikipedia.org/wiki/Atan2).
 */
sicmutils.generic.atan = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95522 = cljs.core.get_global_hierarchy;
return (fexpr__95522.cljs$core$IFn$_invoke$arity$0 ? fexpr__95522.cljs$core$IFn$_invoke$arity$0() : fexpr__95522.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","atan"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.atan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95523 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function() {
var G__95670 = null;
var G__95670__1 = (function (x){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
});
var G__95670__2 = (function (y,x){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(x,sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(y)));
});
G__95670 = function(y,x){
switch(arguments.length){
case 1:
return G__95670__1.call(this,y);
case 2:
return G__95670__2.call(this,y,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__95670.cljs$core$IFn$_invoke$arity$1 = G__95670__1;
G__95670.cljs$core$IFn$_invoke$arity$2 = G__95670__2;
return G__95670;
})()
,new cljs.core.Keyword(null,"dfdy","dfdy",-434788201),(function (y,x){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(y),sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(y)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),(1),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"atan","atan",-1026550135,null)], null);
return (fexpr__95523.cljs$core$IFn$_invoke$arity$1 ? fexpr__95523.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95523.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.asin !== 'undefined')){
} else {
/**
 * generic asin.
 * 
 * Computes the inverse sine of the supplied argument `a`.
 * 
 * Defaults to `atan(x/sqrt(1-x^2))`.
 */
sicmutils.generic.asin = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95524 = cljs.core.get_global_hierarchy;
return (fexpr__95524.cljs$core$IFn$_invoke$arity$0 ? fexpr__95524.cljs$core$IFn$_invoke$arity$0() : fexpr__95524.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","asin"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.asin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95525 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"asin","asin",-904130570,null)], null);
return (fexpr__95525.cljs$core$IFn$_invoke$arity$1 ? fexpr__95525.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95525.call(null,k__14627__auto__));
}));
sicmutils.generic.asin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.atan.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(x,sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x)))));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.acos !== 'undefined')){
} else {
/**
 * generic acos.
 * 
 * Computes the inverse cosine of the supplied argument `a`.
 * 
 * Defaults to `atan(sqrt(1-x^2)/x)`.
 */
sicmutils.generic.acos = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95526 = cljs.core.get_global_hierarchy;
return (fexpr__95526.cljs$core$IFn$_invoke$arity$0 ? fexpr__95526.cljs$core$IFn$_invoke$arity$0() : fexpr__95526.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","acos"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.acos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95527 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x)))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"acos","acos",353741763,null)], null);
return (fexpr__95527.cljs$core$IFn$_invoke$arity$1 ? fexpr__95527.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95527.call(null,k__14627__auto__));
}));
sicmutils.generic.acos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.atan.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x))),x));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.acot !== 'undefined')){
} else {
/**
 * generic acot.
 * 
 * Computes the [inverse
 *  cotangent](https://mathworld.wolfram.com/InverseCotangent.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `pi/2 - atan(x)`.
 */
sicmutils.generic.acot = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95528 = cljs.core.get_global_hierarchy;
return (fexpr__95528.cljs$core$IFn$_invoke$arity$0 ? fexpr__95528.cljs$core$IFn$_invoke$arity$0() : fexpr__95528.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","acot"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.acot.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95529 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"acot","acot",1103016569,null)], null);
return (fexpr__95529.cljs$core$IFn$_invoke$arity$1 ? fexpr__95529.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95529.call(null,k__14627__auto__));
}));
sicmutils.generic.acot.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(Math.PI,(2)),sicmutils.generic.atan.cljs$core$IFn$_invoke$arity$1(x));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.asec !== 'undefined')){
} else {
/**
 * generic asec.
 * 
 * Computes the [inverse
 *  secant](https://mathworld.wolfram.com/InverseSecant.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `atan(sqrt(x^2 - 1))`.
 */
sicmutils.generic.asec = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95530 = cljs.core.get_global_hierarchy;
return (fexpr__95530.cljs$core$IFn$_invoke$arity$0 ? fexpr__95530.cljs$core$IFn$_invoke$arity$0() : fexpr__95530.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","asec"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.asec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95531 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(x,sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x),(1)))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"asec","asec",-81933685,null)], null);
return (fexpr__95531.cljs$core$IFn$_invoke$arity$1 ? fexpr__95531.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95531.call(null,k__14627__auto__));
}));
sicmutils.generic.asec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.atan.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x),(1))));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.acsc !== 'undefined')){
} else {
/**
 * generic acsc.
 * 
 * Computes the [inverse
 *  cosecant](https://mathworld.wolfram.com/InverseCosecant.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `atan(1 / sqrt(x^2 - 1))`.
 */
sicmutils.generic.acsc = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95532 = cljs.core.get_global_hierarchy;
return (fexpr__95532.cljs$core$IFn$_invoke$arity$0 ? fexpr__95532.cljs$core$IFn$_invoke$arity$0() : fexpr__95532.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","acsc"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.acsc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95533 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(x,sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x),(1))))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"acsc","acsc",-1149851176,null)], null);
return (fexpr__95533.cljs$core$IFn$_invoke$arity$1 ? fexpr__95533.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95533.call(null,k__14627__auto__));
}));
sicmutils.generic.acsc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.atan.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x),(1)))));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.cosh !== 'undefined')){
} else {
/**
 * generic cosh.
 * 
 * Computes the [hyperbolic
 *  cosine](https://mathworld.wolfram.com/HyperbolicCosine.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `(e^x + e^{-x}) / 2`.
 */
sicmutils.generic.cosh = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95534 = cljs.core.get_global_hierarchy;
return (fexpr__95534.cljs$core$IFn$_invoke$arity$0 ? fexpr__95534.cljs$core$IFn$_invoke$arity$0() : fexpr__95534.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","cosh"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.cosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95535 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),sicmutils.generic.sinh,new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null)], null);
return (fexpr__95535.cljs$core$IFn$_invoke$arity$1 ? fexpr__95535.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95535.call(null,k__14627__auto__));
}));
sicmutils.generic.cosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.exp.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.exp.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(x))),(2));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.sinh !== 'undefined')){
} else {
/**
 * generic sinh.
 * 
 * Computes the [hyperbolic
 *  sine](https://mathworld.wolfram.com/HyperbolicSine.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `(e^x - e^{-x}) / 2`.
 */
sicmutils.generic.sinh = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95536 = cljs.core.get_global_hierarchy;
return (fexpr__95536.cljs$core$IFn$_invoke$arity$0 ? fexpr__95536.cljs$core$IFn$_invoke$arity$0() : fexpr__95536.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","sinh"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.sinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95537 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),sicmutils.generic.cosh,new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sinh","sinh",-990423302,null)], null);
return (fexpr__95537.cljs$core$IFn$_invoke$arity$1 ? fexpr__95537.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95537.call(null,k__14627__auto__));
}));
sicmutils.generic.sinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.exp.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.exp.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(x))),(2));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.tanh !== 'undefined')){
} else {
/**
 * generic tanh.
 * 
 * Computes the [hyperbolic
 *  tangent](https://mathworld.wolfram.com/HyperbolicTangent.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `sinh(x) / cosh(x)`.
 */
sicmutils.generic.tanh = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95538 = cljs.core.get_global_hierarchy;
return (fexpr__95538.cljs$core$IFn$_invoke$arity$0 ? fexpr__95538.cljs$core$IFn$_invoke$arity$0() : fexpr__95538.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","tanh"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.tanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95539 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.tanh.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"tanh","tanh",480481797,null)], null);
return (fexpr__95539.cljs$core$IFn$_invoke$arity$1 ? fexpr__95539.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95539.call(null,k__14627__auto__));
}));
sicmutils.generic.tanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
var exp2x = sicmutils.generic.exp.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(x,x));
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(exp2x,(1)),sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(exp2x,(1)));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.sech !== 'undefined')){
} else {
/**
 * generic sech.
 * 
 * Computes the [hyperbolic
 *  secant](https://mathworld.wolfram.com/HyperbolicSecant.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `1 / cosh(x)`.
 */
sicmutils.generic.sech = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95540 = cljs.core.get_global_hierarchy;
return (fexpr__95540.cljs$core$IFn$_invoke$arity$0 ? fexpr__95540.cljs$core$IFn$_invoke$arity$0() : fexpr__95540.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","sech"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.sech.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95541 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sech.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.tanh.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sech","sech",-1403979131,null)], null);
return (fexpr__95541.cljs$core$IFn$_invoke$arity$1 ? fexpr__95541.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95541.call(null,k__14627__auto__));
}));
sicmutils.generic.sech.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2((2),sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.exp.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.exp.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(x))));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.coth !== 'undefined')){
} else {
/**
 * generic coth.
 * 
 * Computes the [hyperbolic
 *  cotangent](https://mathworld.wolfram.com/HyperbolicCotangent.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `cosh(x) / sinh(x)`.
 */
sicmutils.generic.coth = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95542 = cljs.core.get_global_hierarchy;
return (fexpr__95542.cljs$core$IFn$_invoke$arity$0 ? fexpr__95542.cljs$core$IFn$_invoke$arity$0() : fexpr__95542.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","coth"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.coth.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95543 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1((sicmutils.generic.csch.cljs$core$IFn$_invoke$arity$1 ? sicmutils.generic.csch.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.generic.csch.call(null,x))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"coth","coth",1130257730,null)], null);
return (fexpr__95543.cljs$core$IFn$_invoke$arity$1 ? fexpr__95543.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95543.call(null,k__14627__auto__));
}));
sicmutils.generic.coth.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
var exp2x = sicmutils.generic.exp.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(x,x));
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(exp2x,(1)),sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(exp2x,(1)));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.csch !== 'undefined')){
} else {
/**
 * generic csch.
 * 
 * Computes the [hyperbolic
 *  cosecant](https://mathworld.wolfram.com/HyperbolicCosecant.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `1 / sinh(x)`.
 */
sicmutils.generic.csch = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95544 = cljs.core.get_global_hierarchy;
return (fexpr__95544.cljs$core$IFn$_invoke$arity$0 ? fexpr__95544.cljs$core$IFn$_invoke$arity$0() : fexpr__95544.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","csch"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.csch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95545 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.coth.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.csch.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"csch","csch",-1950330545,null)], null);
return (fexpr__95545.cljs$core$IFn$_invoke$arity$1 ? fexpr__95545.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95545.call(null,k__14627__auto__));
}));
sicmutils.generic.csch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2((2),sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.exp.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.exp.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(x))));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.acosh !== 'undefined')){
} else {
/**
 * generic acosh.
 * 
 * Computes the [inverse hyperbolic
 *  cosine](https://mathworld.wolfram.com/InverseHyperbolicCosine.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `2 ln(sqrt((x+1)/2) + sqrt((x-1)/2))`.
 */
sicmutils.generic.acosh = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95546 = cljs.core.get_global_hierarchy;
return (fexpr__95546.cljs$core$IFn$_invoke$arity$0 ? fexpr__95546.cljs$core$IFn$_invoke$arity$0() : fexpr__95546.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","acosh"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.acosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95547 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(x,(1))),sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(x,(1)))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"acosh","acosh",-2005748303,null)], null);
return (fexpr__95547.cljs$core$IFn$_invoke$arity$1 ? fexpr__95547.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95547.call(null,k__14627__auto__));
}));
sicmutils.generic.acosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2((2),sicmutils.generic.log.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(x,(1)),(2))),sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(x,(1)),(2))))));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.asinh !== 'undefined')){
} else {
/**
 * generic asinh.
 * 
 * Computes the [inverse hyperbolic
 *  sine](https://mathworld.wolfram.com/InverseHyperbolicSine.html) of the
 *  supplied argument `a`.
 * 
 * defaults to `ln(x + sqrt(1 + x^2))`.
 */
sicmutils.generic.asinh = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95548 = cljs.core.get_global_hierarchy;
return (fexpr__95548.cljs$core$IFn$_invoke$arity$0 ? fexpr__95548.cljs$core$IFn$_invoke$arity$0() : fexpr__95548.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","asinh"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.asinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95549 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"asinh","asinh",-1398350397,null)], null);
return (fexpr__95549.cljs$core$IFn$_invoke$arity$1 ? fexpr__95549.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95549.call(null,k__14627__auto__));
}));
sicmutils.generic.asinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.log.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(x,sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x)))));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.atanh !== 'undefined')){
} else {
/**
 * generic atanh.
 * 
 * Computes the [inverse hyperbolic
 *  tangent](https://mathworld.wolfram.com/InverseHyperbolicTangent.html) of the
 *  supplied argument `a`.
 * 
 * defaults to `1/2 ln((1+x)/(1-x))`.
 */
sicmutils.generic.atanh = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95550 = cljs.core.get_global_hierarchy;
return (fexpr__95550.cljs$core$IFn$_invoke$arity$0 ? fexpr__95550.cljs$core$IFn$_invoke$arity$0() : fexpr__95550.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","atanh"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.atanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95551 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"atanh","atanh",-1915750692,null)], null);
return (fexpr__95551.cljs$core$IFn$_invoke$arity$1 ? fexpr__95551.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95551.call(null,k__14627__auto__));
}));
sicmutils.generic.atanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.log.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2((1),x)),sicmutils.generic.log.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2((1),x))),(2));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.acoth !== 'undefined')){
} else {
/**
 * generic acoth.
 * 
 * Computes the [inverse hyperbolic
 *  cotangent](https://mathworld.wolfram.com/InverseHyperbolicCotangent.html) of
 *  the supplied argument `a`.
 * 
 * defaults to `1/2 ln((x+1)/(x-1))`.
 */
sicmutils.generic.acoth = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95552 = cljs.core.get_global_hierarchy;
return (fexpr__95552.cljs$core$IFn$_invoke$arity$0 ? fexpr__95552.cljs$core$IFn$_invoke$arity$0() : fexpr__95552.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","acoth"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.acoth.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95553 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"acoth","acoth",1639672811,null)], null);
return (fexpr__95553.cljs$core$IFn$_invoke$arity$1 ? fexpr__95553.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95553.call(null,k__14627__auto__));
}));
sicmutils.generic.acoth.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.log.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(x,(1))),sicmutils.generic.log.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(x,(1)))),(2));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.asech !== 'undefined')){
} else {
/**
 * generic asech.
 * 
 * Computes the [inverse hyperbolic
 *  secant](https://mathworld.wolfram.com/InverseHyperbolicSecant.html) of the
 *  supplied argument `a`.
 * 
 * defaults to `ln((1 + sqrt(1-x^2)) / x)`.
 */
sicmutils.generic.asech = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95554 = cljs.core.get_global_hierarchy;
return (fexpr__95554.cljs$core$IFn$_invoke$arity$0 ? fexpr__95554.cljs$core$IFn$_invoke$arity$0() : fexpr__95554.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","asech"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.asech.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95555 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
var x_PLUS_1 = sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(x,(1));
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(x,x_PLUS_1),sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2((1),x),x_PLUS_1)))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"asech","asech",-316284500,null)], null);
return (fexpr__95555.cljs$core$IFn$_invoke$arity$1 ? fexpr__95555.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95555.call(null,k__14627__auto__));
}));
sicmutils.generic.asech.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.log.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x)))),x));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.acsch !== 'undefined')){
} else {
/**
 * generic acsch.
 * 
 * Computes the [inverse hyperbolic
 *  cosecant](https://mathworld.wolfram.com/InverseHyperbolicCosecant.html) of the
 *  supplied argument `a`.
 * 
 * defaults to `ln((1 + sqrt(1+x^2)) / x)`.
 */
sicmutils.generic.acsch = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95556 = cljs.core.get_global_hierarchy;
return (fexpr__95556.cljs$core$IFn$_invoke$arity$0 ? fexpr__95556.cljs$core$IFn$_invoke$arity$0() : fexpr__95556.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","acsch"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.acsch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95557 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(x,sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x),(1))))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"acsch","acsch",-1449651634,null)], null);
return (fexpr__95557.cljs$core$IFn$_invoke$arity$1 ? fexpr__95557.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95557.call(null,k__14627__auto__));
}));
sicmutils.generic.acsch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.log.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x)))),x));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.sinc !== 'undefined')){
} else {
/**
 * generic sinc.
 * 
 * The unnormalized [sinc
 *   function](https://en.wikipedia.org/wiki/Sinc_function), equivalent to
 *   $\frac{\sin x}{x}$ but defined to be equal to 1 at $x = 0$.
 * 
 *   ### References
 * 
 * - [Wikipedia page](https://en.wikipedia.org/wiki/Sinc_function)
 * - [Mathworld page on Sinc](https://mathworld.wolfram.com/SincFunction.html)
 * - [Boost notes on [[sinc]]
 *   and [[sinch]]](https://www.boost.org/doc/libs/1_65_0/libs/math/doc/html/math_toolkit/sinc/sinc_overview.html)
 */
sicmutils.generic.sinc = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95558 = cljs.core.get_global_hierarchy;
return (fexpr__95558.cljs$core$IFn$_invoke$arity$0 ? fexpr__95558.cljs$core$IFn$_invoke$arity$0() : fexpr__95558.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","sinc"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.sinc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95559 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
if(sicmutils.value.zero_QMARK_(x)){
return x;
} else {
return sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(x),x),sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
}
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sinc","sinc",60189925,null)], null);
return (fexpr__95559.cljs$core$IFn$_invoke$arity$1 ? fexpr__95559.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95559.call(null,k__14627__auto__));
}));
sicmutils.generic.sinc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
if(sicmutils.value.zero_QMARK_(x)){
return sicmutils.value.one_like(x);
} else {
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(x),x);
}
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.tanc !== 'undefined')){
} else {
/**
 * generic tanc.
 * 
 * `tanc` is defined, by analogy with [[sinc]], to be equal to $\frac{\tan
 *   x}{x}$ for nonzero $x$ and equal to 1 at $x = 0$.
 * 
 *   ### References
 * 
 * - [Wikipedia page](https://en.wikipedia.org/wiki/Tanc_function)
 * - [Mathworld page on Sinc](https://mathworld.wolfram.com/TancFunction.html)
 */
sicmutils.generic.tanc = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95560 = cljs.core.get_global_hierarchy;
return (fexpr__95560.cljs$core$IFn$_invoke$arity$0 ? fexpr__95560.cljs$core$IFn$_invoke$arity$0() : fexpr__95560.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","tanc"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.tanc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95561 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
if(sicmutils.value.zero_QMARK_(x)){
return x;
} else {
var sx = sicmutils.generic.sec.cljs$core$IFn$_invoke$arity$1(x);
return sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sx,sx),x),sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.tan.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
}
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"tanc","tanc",-1009303983,null)], null);
return (fexpr__95561.cljs$core$IFn$_invoke$arity$1 ? fexpr__95561.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95561.call(null,k__14627__auto__));
}));
sicmutils.generic.tanc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
if(sicmutils.value.zero_QMARK_(x)){
return sicmutils.value.one_like(x);
} else {
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.tan.cljs$core$IFn$_invoke$arity$1(x),x);
}
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.sinhc !== 'undefined')){
} else {
/**
 * generic sinhc.
 * 
 * The [sinhc function](https://en.wikipedia.org/wiki/Sinhc_function),
 *   equivalent to $\frac{\sinh x}{x}$ but defined to be equal to 1 at $x = 0$.
 * 
 *   ### References
 * 
 * - [Wikipedia page](https://en.wikipedia.org/wiki/Sinhc_function)
 * - [Mathworld page on Sinhc](https://mathworld.wolfram.com/SinhcFunction.html)
 */
sicmutils.generic.sinhc = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95562 = cljs.core.get_global_hierarchy;
return (fexpr__95562.cljs$core$IFn$_invoke$arity$0 ? fexpr__95562.cljs$core$IFn$_invoke$arity$0() : fexpr__95562.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","sinhc"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.sinhc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95563 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
if(sicmutils.value.zero_QMARK_(x)){
return x;
} else {
return sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.cosh.cljs$core$IFn$_invoke$arity$1(x),x),sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sinh.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
}
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sinhc","sinhc",-1445515294,null)], null);
return (fexpr__95563.cljs$core$IFn$_invoke$arity$1 ? fexpr__95563.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95563.call(null,k__14627__auto__));
}));
sicmutils.generic.sinhc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
if(sicmutils.value.zero_QMARK_(x)){
return sicmutils.value.one_like(x);
} else {
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sinh.cljs$core$IFn$_invoke$arity$1(x),x);
}
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.tanhc !== 'undefined')){
} else {
/**
 * generic tanhc.
 * 
 * The [tanhc function](https://en.wikipedia.org/wiki/Tanhc_function),
 *   equivalent to $\frac{\tanh x}{x}$ but defined to be equal to 1 at $x = 0$.
 * 
 *   ### References
 * 
 * - [Wikipedia page](https://en.wikipedia.org/wiki/Tanhc_function)
 * - [Mathworld page on Tanhc](https://mathworld.wolfram.com/TanhcFunction.html)
 */
sicmutils.generic.tanhc = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95564 = cljs.core.get_global_hierarchy;
return (fexpr__95564.cljs$core$IFn$_invoke$arity$0 ? fexpr__95564.cljs$core$IFn$_invoke$arity$0() : fexpr__95564.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","tanhc"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.tanhc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95565 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
if(sicmutils.value.zero_QMARK_(x)){
return x;
} else {
var sx = sicmutils.generic.sech.cljs$core$IFn$_invoke$arity$1(x);
return sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sx,sx),x),sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.tanh.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
}
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"tanhc","tanhc",991235322,null)], null);
return (fexpr__95565.cljs$core$IFn$_invoke$arity$1 ? fexpr__95565.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95565.call(null,k__14627__auto__));
}));
sicmutils.generic.tanhc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
if(sicmutils.value.zero_QMARK_(x)){
return sicmutils.value.one_like(x);
} else {
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.tanh.cljs$core$IFn$_invoke$arity$1(x),x);
}
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.make_rectangular !== 'undefined')){
} else {
/**
 * generic make-rectangular
 */
sicmutils.generic.make_rectangular = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95566 = cljs.core.get_global_hierarchy;
return (fexpr__95566.cljs$core$IFn$_invoke$arity$0 ? fexpr__95566.cljs$core$IFn$_invoke$arity$0() : fexpr__95566.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","make-rectangular"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.make_rectangular.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95567 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"make-rectangular","make-rectangular",-1494662174,null)], null);
return (fexpr__95567.cljs$core$IFn$_invoke$arity$1 ? fexpr__95567.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95567.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.make_polar !== 'undefined')){
} else {
/**
 * generic make-polar
 */
sicmutils.generic.make_polar = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95568 = cljs.core.get_global_hierarchy;
return (fexpr__95568.cljs$core$IFn$_invoke$arity$0 ? fexpr__95568.cljs$core$IFn$_invoke$arity$0() : fexpr__95568.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","make-polar"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.make_polar.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95569 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null)], null);
return (fexpr__95569.cljs$core$IFn$_invoke$arity$1 ? fexpr__95569.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95569.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.real_part !== 'undefined')){
} else {
/**
 * generic real-part
 */
sicmutils.generic.real_part = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95570 = cljs.core.get_global_hierarchy;
return (fexpr__95570.cljs$core$IFn$_invoke$arity$0 ? fexpr__95570.cljs$core$IFn$_invoke$arity$0() : fexpr__95570.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","real-part"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.real_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95571 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"real-part","real-part",-2001752061,null)], null);
return (fexpr__95571.cljs$core$IFn$_invoke$arity$1 ? fexpr__95571.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95571.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.imag_part !== 'undefined')){
} else {
/**
 * generic imag-part
 */
sicmutils.generic.imag_part = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95572 = cljs.core.get_global_hierarchy;
return (fexpr__95572.cljs$core$IFn$_invoke$arity$0 ? fexpr__95572.cljs$core$IFn$_invoke$arity$0() : fexpr__95572.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","imag-part"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.imag_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95573 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"imag-part","imag-part",2028041294,null)], null);
return (fexpr__95573.cljs$core$IFn$_invoke$arity$1 ? fexpr__95573.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95573.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.magnitude !== 'undefined')){
} else {
/**
 * generic magnitude
 */
sicmutils.generic.magnitude = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95574 = cljs.core.get_global_hierarchy;
return (fexpr__95574.cljs$core$IFn$_invoke$arity$0 ? fexpr__95574.cljs$core$IFn$_invoke$arity$0() : fexpr__95574.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","magnitude"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.magnitude.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95575 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
return (fexpr__95575.cljs$core$IFn$_invoke$arity$1 ? fexpr__95575.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95575.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.angle !== 'undefined')){
} else {
/**
 * generic angle
 */
sicmutils.generic.angle = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95576 = cljs.core.get_global_hierarchy;
return (fexpr__95576.cljs$core$IFn$_invoke$arity$0 ? fexpr__95576.cljs$core$IFn$_invoke$arity$0() : fexpr__95576.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","angle"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.angle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95577 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"angle","angle",-1032341515,null)], null);
return (fexpr__95577.cljs$core$IFn$_invoke$arity$1 ? fexpr__95577.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95577.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.conjugate !== 'undefined')){
} else {
/**
 * generic conjugate
 */
sicmutils.generic.conjugate = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95578 = cljs.core.get_global_hierarchy;
return (fexpr__95578.cljs$core$IFn$_invoke$arity$0 ? fexpr__95578.cljs$core$IFn$_invoke$arity$0() : fexpr__95578.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","conjugate"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.conjugate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95579 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"conjugate","conjugate",-1063123193,null)], null);
return (fexpr__95579.cljs$core$IFn$_invoke$arity$1 ? fexpr__95579.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95579.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.transpose !== 'undefined')){
} else {
/**
 * generic transpose
 */
sicmutils.generic.transpose = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95580 = cljs.core.get_global_hierarchy;
return (fexpr__95580.cljs$core$IFn$_invoke$arity$0 ? fexpr__95580.cljs$core$IFn$_invoke$arity$0() : fexpr__95580.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","transpose"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.transpose.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95581 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"transpose","transpose",1165804847,null)], null);
return (fexpr__95581.cljs$core$IFn$_invoke$arity$1 ? fexpr__95581.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95581.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.trace !== 'undefined')){
} else {
/**
 * generic trace
 */
sicmutils.generic.trace = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95582 = cljs.core.get_global_hierarchy;
return (fexpr__95582.cljs$core$IFn$_invoke$arity$0 ? fexpr__95582.cljs$core$IFn$_invoke$arity$0() : fexpr__95582.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","trace"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.trace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95583 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"trace","trace",557784112,null)], null);
return (fexpr__95583.cljs$core$IFn$_invoke$arity$1 ? fexpr__95583.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95583.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.determinant !== 'undefined')){
} else {
/**
 * generic determinant
 */
sicmutils.generic.determinant = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95584 = cljs.core.get_global_hierarchy;
return (fexpr__95584.cljs$core$IFn$_invoke$arity$0 ? fexpr__95584.cljs$core$IFn$_invoke$arity$0() : fexpr__95584.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","determinant"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.determinant.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95585 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"determinant","determinant",-580156910,null)], null);
return (fexpr__95585.cljs$core$IFn$_invoke$arity$1 ? fexpr__95585.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95585.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.dimension !== 'undefined')){
} else {
/**
 * generic dimension
 */
sicmutils.generic.dimension = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95586 = cljs.core.get_global_hierarchy;
return (fexpr__95586.cljs$core$IFn$_invoke$arity$0 ? fexpr__95586.cljs$core$IFn$_invoke$arity$0() : fexpr__95586.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","dimension"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.dimension.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95587 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"dimension","dimension",-2111181571,null)], null);
return (fexpr__95587.cljs$core$IFn$_invoke$arity$1 ? fexpr__95587.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95587.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.dot_product !== 'undefined')){
} else {
/**
 * generic dot-product
 */
sicmutils.generic.dot_product = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95588 = cljs.core.get_global_hierarchy;
return (fexpr__95588.cljs$core$IFn$_invoke$arity$0 ? fexpr__95588.cljs$core$IFn$_invoke$arity$0() : fexpr__95588.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","dot-product"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95589 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"dot-product","dot-product",-203055892,null)], null);
return (fexpr__95589.cljs$core$IFn$_invoke$arity$1 ? fexpr__95589.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95589.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.inner_product !== 'undefined')){
} else {
/**
 * generic inner-product
 */
sicmutils.generic.inner_product = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95590 = cljs.core.get_global_hierarchy;
return (fexpr__95590.cljs$core$IFn$_invoke$arity$0 ? fexpr__95590.cljs$core$IFn$_invoke$arity$0() : fexpr__95590.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","inner-product"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.inner_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95591 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"inner-product","inner-product",-1963110418,null)], null);
return (fexpr__95591.cljs$core$IFn$_invoke$arity$1 ? fexpr__95591.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95591.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.outer_product !== 'undefined')){
} else {
/**
 * generic outer-product
 */
sicmutils.generic.outer_product = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95592 = cljs.core.get_global_hierarchy;
return (fexpr__95592.cljs$core$IFn$_invoke$arity$0 ? fexpr__95592.cljs$core$IFn$_invoke$arity$0() : fexpr__95592.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","outer-product"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.outer_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95593 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"outer-product","outer-product",491531252,null)], null);
return (fexpr__95593.cljs$core$IFn$_invoke$arity$1 ? fexpr__95593.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95593.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.cross_product !== 'undefined')){
} else {
/**
 * generic cross-product
 */
sicmutils.generic.cross_product = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95594 = cljs.core.get_global_hierarchy;
return (fexpr__95594.cljs$core$IFn$_invoke$arity$0 ? fexpr__95594.cljs$core$IFn$_invoke$arity$0() : fexpr__95594.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","cross-product"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.cross_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95595 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cross-product","cross-product",-823528331,null)], null);
return (fexpr__95595.cljs$core$IFn$_invoke$arity$1 ? fexpr__95595.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95595.call(null,k__14627__auto__));
}));
sicmutils.generic.transpose.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null),(function (a){
return a;
}));
sicmutils.generic.trace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null),(function (a){
return a;
}));
sicmutils.generic.determinant.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null),(function (a){
return a;
}));
sicmutils.generic.dimension.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null),(function (_){
return (1);
}));
sicmutils.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null),(function (l,r){
return sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(l,r);
}));
sicmutils.generic.inner_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null),(function (l,r){
return sicmutils.generic.dot_product.cljs$core$IFn$_invoke$arity$2(l,r);
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.solve_linear !== 'undefined')){
} else {
/**
 * generic solve-linear.
 * 
 * For a given `a` and `b`, returns `x` such that `a*x = b`.
 * 
 *   See[[solve-linear-right]] for a similar function that solves for `a = x*b`.
 */
sicmutils.generic.solve_linear = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95596 = cljs.core.get_global_hierarchy;
return (fexpr__95596.cljs$core$IFn$_invoke$arity$0 ? fexpr__95596.cljs$core$IFn$_invoke$arity$0() : fexpr__95596.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","solve-linear"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95597 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"solve-linear","solve-linear",481545288,null)], null);
return (fexpr__95597.cljs$core$IFn$_invoke$arity$1 ? fexpr__95597.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95597.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.solve_linear_right !== 'undefined')){
} else {
/**
 * generic solve-linear-right.
 * 
 * For a given `a` and `b`, returns `x` such that `a = x*b`.
 * 
 *   See[[solve-linear]] for a similar function that solves for `a*x = b`.
 */
sicmutils.generic.solve_linear_right = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95598 = cljs.core.get_global_hierarchy;
return (fexpr__95598.cljs$core$IFn$_invoke$arity$0 ? fexpr__95598.cljs$core$IFn$_invoke$arity$0() : fexpr__95598.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","solve-linear-right"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95599 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"solve-linear-right","solve-linear-right",-1518292405,null)], null);
return (fexpr__95599.cljs$core$IFn$_invoke$arity$1 ? fexpr__95599.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95599.call(null,k__14627__auto__));
}));
/**
 * Alias for [[solve-linear]]; present for compatibility with the original
 *   `scmutils` codebase.
 * 
 *   NOTE: In `scmutils`, `solve-linear-left` and `solve-linear` act identically in
 *   all cases except matrices. `solve-linear-left` only accepted a column
 *   matrix (or up structure) in the `b` position, while `solve-linear` accepted
 *   either a column or row (up or down structure).
 * 
 *   In SICMUtils, both functions accept either type.
 */
sicmutils.generic.solve_linear_left = (function sicmutils$generic$solve_linear_left(a,b){
return sicmutils.generic.solve_linear.cljs$core$IFn$_invoke$arity$2(a,b);
});
sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null),(function (x,y){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(y,x);
}));
sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null),(function (x,y){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(x,y);
}));
sicmutils.generic.derivative_symbol = new cljs.core.Symbol(null,"D","D",1632515634,null);
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.partial_derivative !== 'undefined')){
} else {
/**
 * generic partial-derivative
 */
sicmutils.generic.partial_derivative = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95600 = cljs.core.get_global_hierarchy;
return (fexpr__95600.cljs$core$IFn$_invoke$arity$0 ? fexpr__95600.cljs$core$IFn$_invoke$arity$0() : fexpr__95600.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","partial-derivative"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.partial_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95601 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"partial-derivative","partial-derivative",-1901056819,null)], null);
return (fexpr__95601.cljs$core$IFn$_invoke$arity$1 ? fexpr__95601.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95601.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.Lie_derivative !== 'undefined')){
} else {
/**
 * generic Lie-derivative
 */
sicmutils.generic.Lie_derivative = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95602 = cljs.core.get_global_hierarchy;
return (fexpr__95602.cljs$core$IFn$_invoke$arity$0 ? fexpr__95602.cljs$core$IFn$_invoke$arity$0() : fexpr__95602.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","Lie-derivative"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.Lie_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95603 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"Lie-derivative","Lie-derivative",-641072185,null)], null);
return (fexpr__95603.cljs$core$IFn$_invoke$arity$1 ? fexpr__95603.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95603.call(null,k__14627__auto__));
}));
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.generic !== 'undefined') && (typeof sicmutils.generic.simplify !== 'undefined')){
} else {
/**
 * generic simplify
 */
sicmutils.generic.simplify = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__95604 = cljs.core.get_global_hierarchy;
return (fexpr__95604.cljs$core$IFn$_invoke$arity$0 ? fexpr__95604.cljs$core$IFn$_invoke$arity$0() : fexpr__95604.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","simplify"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__14627__auto__){
var fexpr__95605 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"simplify","simplify",1041318062,null)], null);
return (fexpr__95605.cljs$core$IFn$_invoke$arity$1 ? fexpr__95605.cljs$core$IFn$_invoke$arity$1(k__14627__auto__) : fexpr__95605.call(null,k__14627__auto__));
}));
sicmutils.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a){
return a;
}));
sicmutils.value.add_object_symbols_BANG_(cljs.core.PersistentHashMap.fromArrays([cljs.core._SLASH_,cljs.core._PLUS_,cljs.core._LT__EQ_,cljs.core.mod,cljs.core._STAR_,sicmutils.generic._STAR_,cljs.core._EQ_,cljs.core.rem,cljs.core.neg_QMARK_,cljs.core._GT__EQ_,sicmutils.generic._,cljs.core.infinite_QMARK_,cljs.core._LT_,cljs.core._GT_,sicmutils.generic._SLASH_,cljs.core.quot,sicmutils.generic._PLUS_,cljs.core._],[new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"modulo","modulo",725580254,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),new cljs.core.Symbol(null,"negative?","negative?",374534410,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"infinite?","infinite?",-377355081,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"quotient","quotient",-1029733218,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"-","-",-471816912,null)]));

//# sourceMappingURL=sicmutils.generic.js.map
