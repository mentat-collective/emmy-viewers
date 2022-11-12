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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77722 = cljs.core.get_global_hierarchy;
return (fexpr__77722.cljs$core$IFn$_invoke$arity$0 ? fexpr__77722.cljs$core$IFn$_invoke$arity$0() : fexpr__77722.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","add"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77723 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (_,___$1){
return (1);
}),new cljs.core.Keyword(null,"dfdy","dfdy",-434788201),(function (_,___$1){
return (1);
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null)], null);
return (fexpr__77723.cljs$core$IFn$_invoke$arity$1 ? fexpr__77723.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77723.call(null,k__77664__auto__));
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
var G__77728 = arguments.length;
switch (G__77728) {
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
var len__4864__auto___77999 = arguments.length;
var i__4865__auto___78000 = (0);
while(true){
if((i__4865__auto___78000 < len__4864__auto___77999)){
args_arr__4885__auto__.push((arguments[i__4865__auto___78000]));

var G__78001 = (i__4865__auto___78000 + (1));
i__4865__auto___78000 = G__78001;
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
(sicmutils.generic._PLUS_.cljs$lang$applyTo = (function (seq77725){
var G__77726 = cljs.core.first(seq77725);
var seq77725__$1 = cljs.core.next(seq77725);
var G__77727 = cljs.core.first(seq77725__$1);
var seq77725__$2 = cljs.core.next(seq77725__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77726,G__77727,seq77725__$2);
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77729 = cljs.core.get_global_hierarchy;
return (fexpr__77729.cljs$core$IFn$_invoke$arity$0 ? fexpr__77729.cljs$core$IFn$_invoke$arity$0() : fexpr__77729.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","negate"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77730 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (_){
return (-1);
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null)], null);
return (fexpr__77730.cljs$core$IFn$_invoke$arity$1 ? fexpr__77730.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77730.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77731 = cljs.core.get_global_hierarchy;
return (fexpr__77731.cljs$core$IFn$_invoke$arity$0 ? fexpr__77731.cljs$core$IFn$_invoke$arity$0() : fexpr__77731.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","sub"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77732 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (_,___$1){
return (1);
}),new cljs.core.Keyword(null,"dfdy","dfdy",-434788201),(function (_,___$1){
return (-1);
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null)], null);
return (fexpr__77732.cljs$core$IFn$_invoke$arity$1 ? fexpr__77732.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77732.call(null,k__77664__auto__));
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
var G__77737 = arguments.length;
switch (G__77737) {
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
var len__4864__auto___78007 = arguments.length;
var i__4865__auto___78008 = (0);
while(true){
if((i__4865__auto___78008 < len__4864__auto___78007)){
args_arr__4885__auto__.push((arguments[i__4865__auto___78008]));

var G__78010 = (i__4865__auto___78008 + (1));
i__4865__auto___78008 = G__78010;
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
(sicmutils.generic._.cljs$lang$applyTo = (function (seq77734){
var G__77735 = cljs.core.first(seq77734);
var seq77734__$1 = cljs.core.next(seq77734);
var G__77736 = cljs.core.first(seq77734__$1);
var seq77734__$2 = cljs.core.next(seq77734__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77735,G__77736,seq77734__$2);
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77738 = cljs.core.get_global_hierarchy;
return (fexpr__77738.cljs$core$IFn$_invoke$arity$0 ? fexpr__77738.cljs$core$IFn$_invoke$arity$0() : fexpr__77738.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","mul"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77739 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (_,y){
return y;
}),new cljs.core.Keyword(null,"dfdy","dfdy",-434788201),(function (x,_){
return x;
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null)], null);
return (fexpr__77739.cljs$core$IFn$_invoke$arity$1 ? fexpr__77739.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77739.call(null,k__77664__auto__));
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
var G__77744 = arguments.length;
switch (G__77744) {
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
var len__4864__auto___78019 = arguments.length;
var i__4865__auto___78020 = (0);
while(true){
if((i__4865__auto___78020 < len__4864__auto___78019)){
args_arr__4885__auto__.push((arguments[i__4865__auto___78020]));

var G__78021 = (i__4865__auto___78020 + (1));
i__4865__auto___78020 = G__78021;
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
(sicmutils.generic._STAR_.cljs$lang$applyTo = (function (seq77741){
var G__77742 = cljs.core.first(seq77741);
var seq77741__$1 = cljs.core.next(seq77741);
var G__77743 = cljs.core.first(seq77741__$1);
var seq77741__$2 = cljs.core.next(seq77741__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77742,G__77743,seq77741__$2);
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77745 = cljs.core.get_global_hierarchy;
return (fexpr__77745.cljs$core$IFn$_invoke$arity$0 ? fexpr__77745.cljs$core$IFn$_invoke$arity$0() : fexpr__77745.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","invert"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77748 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
var G__77749 = (-1);
var G__77750 = (sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1 ? sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.generic.square.call(null,x));
return (sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2 ? sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(G__77749,G__77750) : sicmutils.generic.div.call(null,G__77749,G__77750));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null)], null);
return (fexpr__77748.cljs$core$IFn$_invoke$arity$1 ? fexpr__77748.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77748.call(null,k__77664__auto__));
}));
sicmutils.generic._STAR_in_default_invert_STAR_ = false;
sicmutils.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a){
var _STAR_in_default_invert_STAR__orig_val__77751 = sicmutils.generic._STAR_in_default_invert_STAR_;
var _STAR_in_default_invert_STAR__temp_val__77752 = true;
(sicmutils.generic._STAR_in_default_invert_STAR_ = _STAR_in_default_invert_STAR__temp_val__77752);

try{return (sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2 ? sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2((1),a) : sicmutils.generic.div.call(null,(1),a));
}finally {(sicmutils.generic._STAR_in_default_invert_STAR_ = _STAR_in_default_invert_STAR__orig_val__77751);
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77753 = cljs.core.get_global_hierarchy;
return (fexpr__77753.cljs$core$IFn$_invoke$arity$0 ? fexpr__77753.cljs$core$IFn$_invoke$arity$0() : fexpr__77753.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","div"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77754 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (_,y){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2((1),y);
}),new cljs.core.Keyword(null,"dfdy","dfdy",-434788201),(function (x,y){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(x),(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1 ? sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(y) : sicmutils.generic.square.call(null,y)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null)], null);
return (fexpr__77754.cljs$core$IFn$_invoke$arity$1 ? fexpr__77754.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77754.call(null,k__77664__auto__));
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
var G__77759 = arguments.length;
switch (G__77759) {
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
var len__4864__auto___78040 = arguments.length;
var i__4865__auto___78041 = (0);
while(true){
if((i__4865__auto___78041 < len__4864__auto___78040)){
args_arr__4885__auto__.push((arguments[i__4865__auto___78041]));

var G__78042 = (i__4865__auto___78041 + (1));
i__4865__auto___78041 = G__78042;
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
(sicmutils.generic._SLASH_.cljs$lang$applyTo = (function (seq77756){
var G__77757 = cljs.core.first(seq77756);
var seq77756__$1 = cljs.core.next(seq77756);
var G__77758 = cljs.core.first(seq77756__$1);
var seq77756__$2 = cljs.core.next(seq77756__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77757,G__77758,seq77756__$2);
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77760 = cljs.core.get_global_hierarchy;
return (fexpr__77760.cljs$core$IFn$_invoke$arity$0 ? fexpr__77760.cljs$core$IFn$_invoke$arity$0() : fexpr__77760.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","exact-divide"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.exact_divide.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77761 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"exact-divide","exact-divide",-836167490,null)], null);
return (fexpr__77761.cljs$core$IFn$_invoke$arity$1 ? fexpr__77761.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77761.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77762 = cljs.core.get_global_hierarchy;
return (fexpr__77762.cljs$core$IFn$_invoke$arity$0 ? fexpr__77762.cljs$core$IFn$_invoke$arity$0() : fexpr__77762.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","exp"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.exp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77763 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),sicmutils.generic.exp,new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"exp","exp",1378825265,null)], null);
return (fexpr__77763.cljs$core$IFn$_invoke$arity$1 ? fexpr__77763.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77763.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77764 = cljs.core.get_global_hierarchy;
return (fexpr__77764.cljs$core$IFn$_invoke$arity$0 ? fexpr__77764.cljs$core$IFn$_invoke$arity$0() : fexpr__77764.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","exp2"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.exp2.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77765 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"exp2","exp2",603509626,null)], null);
return (fexpr__77765.cljs$core$IFn$_invoke$arity$1 ? fexpr__77765.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77765.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77766 = cljs.core.get_global_hierarchy;
return (fexpr__77766.cljs$core$IFn$_invoke$arity$0 ? fexpr__77766.cljs$core$IFn$_invoke$arity$0() : fexpr__77766.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","exp10"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.exp10.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77767 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"exp10","exp10",-1005012445,null)], null);
return (fexpr__77767.cljs$core$IFn$_invoke$arity$1 ? fexpr__77767.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77767.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77768 = cljs.core.get_global_hierarchy;
return (fexpr__77768.cljs$core$IFn$_invoke$arity$0 ? fexpr__77768.cljs$core$IFn$_invoke$arity$0() : fexpr__77768.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","log"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.log.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77769 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),sicmutils.generic.invert,new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"log","log",45015523,null)], null);
return (fexpr__77769.cljs$core$IFn$_invoke$arity$1 ? fexpr__77769.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77769.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77770 = cljs.core.get_global_hierarchy;
return (fexpr__77770.cljs$core$IFn$_invoke$arity$0 ? fexpr__77770.cljs$core$IFn$_invoke$arity$0() : fexpr__77770.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","log2"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.log2.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77771 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"log2","log2",-1850656939,null)], null);
return (fexpr__77771.cljs$core$IFn$_invoke$arity$1 ? fexpr__77771.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77771.call(null,k__77664__auto__));
}));
var l2_78075 = Math.log((2));
sicmutils.generic.log2.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.log.cljs$core$IFn$_invoke$arity$1(x),l2_78075);
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77772 = cljs.core.get_global_hierarchy;
return (fexpr__77772.cljs$core$IFn$_invoke$arity$0 ? fexpr__77772.cljs$core$IFn$_invoke$arity$0() : fexpr__77772.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","log10"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.log10.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77773 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"log10","log10",891257803,null)], null);
return (fexpr__77773.cljs$core$IFn$_invoke$arity$1 ? fexpr__77773.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77773.call(null,k__77664__auto__));
}));
var l10_78076 = Math.log((10));
sicmutils.generic.log10.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.log.cljs$core$IFn$_invoke$arity$1(x),l10_78076);
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77774 = cljs.core.get_global_hierarchy;
return (fexpr__77774.cljs$core$IFn$_invoke$arity$0 ? fexpr__77774.cljs$core$IFn$_invoke$arity$0() : fexpr__77774.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","expt"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77775 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x,y){
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
return (fexpr__77775.cljs$core$IFn$_invoke$arity$1 ? fexpr__77775.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77775.call(null,k__77664__auto__));
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
var G__78077 = n__$1;
var G__78078 = y;
var G__78079 = (mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : mul_SINGLEQUOTE_.call(null,z,z));
n = G__78077;
y = G__78078;
z = G__78079;
continue;
} else {
if((n__$1 === (0))){
return (mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : mul_SINGLEQUOTE_.call(null,z,y));
} else {
var G__78080 = n__$1;
var G__78081 = (mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : mul_SINGLEQUOTE_.call(null,z,y));
var G__78082 = (mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? mul_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : mul_SINGLEQUOTE_.call(null,z,z));
n = G__78080;
y = G__78081;
z = G__78082;
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77776 = cljs.core.get_global_hierarchy;
return (fexpr__77776.cljs$core$IFn$_invoke$arity$0 ? fexpr__77776.cljs$core$IFn$_invoke$arity$0() : fexpr__77776.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","square"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77777 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2((2),x);
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"square","square",-1842001092,null)], null);
return (fexpr__77777.cljs$core$IFn$_invoke$arity$1 ? fexpr__77777.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77777.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77778 = cljs.core.get_global_hierarchy;
return (fexpr__77778.cljs$core$IFn$_invoke$arity$0 ? fexpr__77778.cljs$core$IFn$_invoke$arity$0() : fexpr__77778.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","cube"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77779 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2((3),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cube","cube",138920159,null)], null);
return (fexpr__77779.cljs$core$IFn$_invoke$arity$1 ? fexpr__77779.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77779.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77780 = cljs.core.get_global_hierarchy;
return (fexpr__77780.cljs$core$IFn$_invoke$arity$0 ? fexpr__77780.cljs$core$IFn$_invoke$arity$0() : fexpr__77780.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","sqrt"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77781 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(x),(2)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null)], null);
return (fexpr__77781.cljs$core$IFn$_invoke$arity$1 ? fexpr__77781.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77781.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77782 = cljs.core.get_global_hierarchy;
return (fexpr__77782.cljs$core$IFn$_invoke$arity$0 ? fexpr__77782.cljs$core$IFn$_invoke$arity$0() : fexpr__77782.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","negative?"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.negative_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77783 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"negative?","negative?",374534410,null)], null);
return (fexpr__77783.cljs$core$IFn$_invoke$arity$1 ? fexpr__77783.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77783.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77784 = cljs.core.get_global_hierarchy;
return (fexpr__77784.cljs$core$IFn$_invoke$arity$0 ? fexpr__77784.cljs$core$IFn$_invoke$arity$0() : fexpr__77784.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","infinite?"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.infinite_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77785 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"infinite?","infinite?",-377355081,null)], null);
return (fexpr__77785.cljs$core$IFn$_invoke$arity$1 ? fexpr__77785.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77785.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77786 = cljs.core.get_global_hierarchy;
return (fexpr__77786.cljs$core$IFn$_invoke$arity$0 ? fexpr__77786.cljs$core$IFn$_invoke$arity$0() : fexpr__77786.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","abs"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77787 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"abs","abs",1394505050,null)], null);
return (fexpr__77787.cljs$core$IFn$_invoke$arity$1 ? fexpr__77787.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77787.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77788 = cljs.core.get_global_hierarchy;
return (fexpr__77788.cljs$core$IFn$_invoke$arity$0 ? fexpr__77788.cljs$core$IFn$_invoke$arity$0() : fexpr__77788.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","floor"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.floor.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77789 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"floor","floor",-772394748,null)], null);
return (fexpr__77789.cljs$core$IFn$_invoke$arity$1 ? fexpr__77789.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77789.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77790 = cljs.core.get_global_hierarchy;
return (fexpr__77790.cljs$core$IFn$_invoke$arity$0 ? fexpr__77790.cljs$core$IFn$_invoke$arity$0() : fexpr__77790.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","ceiling"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.ceiling.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77791 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"ceiling","ceiling",-1593475279,null)], null);
return (fexpr__77791.cljs$core$IFn$_invoke$arity$1 ? fexpr__77791.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77791.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77792 = cljs.core.get_global_hierarchy;
return (fexpr__77792.cljs$core$IFn$_invoke$arity$0 ? fexpr__77792.cljs$core$IFn$_invoke$arity$0() : fexpr__77792.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","integer-part"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.integer_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77793 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"integer-part","integer-part",-1884537015,null)], null);
return (fexpr__77793.cljs$core$IFn$_invoke$arity$1 ? fexpr__77793.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77793.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77794 = cljs.core.get_global_hierarchy;
return (fexpr__77794.cljs$core$IFn$_invoke$arity$0 ? fexpr__77794.cljs$core$IFn$_invoke$arity$0() : fexpr__77794.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","fractional-part"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.fractional_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77795 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"fractional-part","fractional-part",-505422086,null)], null);
return (fexpr__77795.cljs$core$IFn$_invoke$arity$1 ? fexpr__77795.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77795.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77796 = cljs.core.get_global_hierarchy;
return (fexpr__77796.cljs$core$IFn$_invoke$arity$0 ? fexpr__77796.cljs$core$IFn$_invoke$arity$0() : fexpr__77796.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","quotient"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.quotient.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77797 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"quotient","quotient",-1029733218,null)], null);
return (fexpr__77797.cljs$core$IFn$_invoke$arity$1 ? fexpr__77797.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77797.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77798 = cljs.core.get_global_hierarchy;
return (fexpr__77798.cljs$core$IFn$_invoke$arity$0 ? fexpr__77798.cljs$core$IFn$_invoke$arity$0() : fexpr__77798.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","modulo"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.modulo.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77799 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"modulo","modulo",725580254,null)], null);
return (fexpr__77799.cljs$core$IFn$_invoke$arity$1 ? fexpr__77799.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77799.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77800 = cljs.core.get_global_hierarchy;
return (fexpr__77800.cljs$core$IFn$_invoke$arity$0 ? fexpr__77800.cljs$core$IFn$_invoke$arity$0() : fexpr__77800.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","remainder"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.remainder.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77801 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null)], null);
return (fexpr__77801.cljs$core$IFn$_invoke$arity$1 ? fexpr__77801.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77801.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77802 = cljs.core.get_global_hierarchy;
return (fexpr__77802.cljs$core$IFn$_invoke$arity$0 ? fexpr__77802.cljs$core$IFn$_invoke$arity$0() : fexpr__77802.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","gcd"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.gcd.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77803 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"gcd","gcd",1659909537,null)], null);
return (fexpr__77803.cljs$core$IFn$_invoke$arity$1 ? fexpr__77803.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77803.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77804 = cljs.core.get_global_hierarchy;
return (fexpr__77804.cljs$core$IFn$_invoke$arity$0 ? fexpr__77804.cljs$core$IFn$_invoke$arity$0() : fexpr__77804.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","lcm"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.lcm.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77805 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"lcm","lcm",-1699262564,null)], null);
return (fexpr__77805.cljs$core$IFn$_invoke$arity$1 ? fexpr__77805.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77805.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77806 = cljs.core.get_global_hierarchy;
return (fexpr__77806.cljs$core$IFn$_invoke$arity$0 ? fexpr__77806.cljs$core$IFn$_invoke$arity$0() : fexpr__77806.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","cos"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.cos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77807 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1((sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1 ? sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.generic.sin.call(null,x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cos","cos",-1452677493,null)], null);
return (fexpr__77807.cljs$core$IFn$_invoke$arity$1 ? fexpr__77807.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77807.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77808 = cljs.core.get_global_hierarchy;
return (fexpr__77808.cljs$core$IFn$_invoke$arity$0 ? fexpr__77808.cljs$core$IFn$_invoke$arity$0() : fexpr__77808.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","sin"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.sin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77809 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),sicmutils.generic.cos,new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sin","sin",1721439389,null)], null);
return (fexpr__77809.cljs$core$IFn$_invoke$arity$1 ? fexpr__77809.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77809.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77810 = cljs.core.get_global_hierarchy;
return (fexpr__77810.cljs$core$IFn$_invoke$arity$0 ? fexpr__77810.cljs$core$IFn$_invoke$arity$0() : fexpr__77810.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","tan"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.tan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77811 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"tan","tan",-1380825876,null)], null);
return (fexpr__77811.cljs$core$IFn$_invoke$arity$1 ? fexpr__77811.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77811.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77812 = cljs.core.get_global_hierarchy;
return (fexpr__77812.cljs$core$IFn$_invoke$arity$0 ? fexpr__77812.cljs$core$IFn$_invoke$arity$0() : fexpr__77812.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","cot"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.cot.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77813 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1((sicmutils.generic.csc.cljs$core$IFn$_invoke$arity$1 ? sicmutils.generic.csc.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.generic.csc.call(null,x))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cot","cot",-1635649012,null)], null);
return (fexpr__77813.cljs$core$IFn$_invoke$arity$1 ? fexpr__77813.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77813.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77814 = cljs.core.get_global_hierarchy;
return (fexpr__77814.cljs$core$IFn$_invoke$arity$0 ? fexpr__77814.cljs$core$IFn$_invoke$arity$0() : fexpr__77814.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","sec"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.sec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77815 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sec.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.tan.cljs$core$IFn$_invoke$arity$1(x));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sec","sec",60154974,null)], null);
return (fexpr__77815.cljs$core$IFn$_invoke$arity$1 ? fexpr__77815.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77815.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77816 = cljs.core.get_global_hierarchy;
return (fexpr__77816.cljs$core$IFn$_invoke$arity$0 ? fexpr__77816.cljs$core$IFn$_invoke$arity$0() : fexpr__77816.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","csc"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.csc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77817 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.cot.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.csc.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"csc","csc",-427853492,null)], null);
return (fexpr__77817.cljs$core$IFn$_invoke$arity$1 ? fexpr__77817.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77817.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77818 = cljs.core.get_global_hierarchy;
return (fexpr__77818.cljs$core$IFn$_invoke$arity$0 ? fexpr__77818.cljs$core$IFn$_invoke$arity$0() : fexpr__77818.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","atan"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.atan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77819 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function() {
var G__78130 = null;
var G__78130__1 = (function (x){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
});
var G__78130__2 = (function (y,x){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(x,sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(y)));
});
G__78130 = function(y,x){
switch(arguments.length){
case 1:
return G__78130__1.call(this,y);
case 2:
return G__78130__2.call(this,y,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__78130.cljs$core$IFn$_invoke$arity$1 = G__78130__1;
G__78130.cljs$core$IFn$_invoke$arity$2 = G__78130__2;
return G__78130;
})()
,new cljs.core.Keyword(null,"dfdy","dfdy",-434788201),(function (y,x){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(y),sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(y)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),(1),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"atan","atan",-1026550135,null)], null);
return (fexpr__77819.cljs$core$IFn$_invoke$arity$1 ? fexpr__77819.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77819.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77820 = cljs.core.get_global_hierarchy;
return (fexpr__77820.cljs$core$IFn$_invoke$arity$0 ? fexpr__77820.cljs$core$IFn$_invoke$arity$0() : fexpr__77820.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","asin"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.asin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77821 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"asin","asin",-904130570,null)], null);
return (fexpr__77821.cljs$core$IFn$_invoke$arity$1 ? fexpr__77821.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77821.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77822 = cljs.core.get_global_hierarchy;
return (fexpr__77822.cljs$core$IFn$_invoke$arity$0 ? fexpr__77822.cljs$core$IFn$_invoke$arity$0() : fexpr__77822.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","acos"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.acos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77823 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x)))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"acos","acos",353741763,null)], null);
return (fexpr__77823.cljs$core$IFn$_invoke$arity$1 ? fexpr__77823.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77823.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77824 = cljs.core.get_global_hierarchy;
return (fexpr__77824.cljs$core$IFn$_invoke$arity$0 ? fexpr__77824.cljs$core$IFn$_invoke$arity$0() : fexpr__77824.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","acot"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.acot.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77825 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"acot","acot",1103016569,null)], null);
return (fexpr__77825.cljs$core$IFn$_invoke$arity$1 ? fexpr__77825.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77825.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77826 = cljs.core.get_global_hierarchy;
return (fexpr__77826.cljs$core$IFn$_invoke$arity$0 ? fexpr__77826.cljs$core$IFn$_invoke$arity$0() : fexpr__77826.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","asec"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.asec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77827 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(x,sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x),(1)))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"asec","asec",-81933685,null)], null);
return (fexpr__77827.cljs$core$IFn$_invoke$arity$1 ? fexpr__77827.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77827.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77828 = cljs.core.get_global_hierarchy;
return (fexpr__77828.cljs$core$IFn$_invoke$arity$0 ? fexpr__77828.cljs$core$IFn$_invoke$arity$0() : fexpr__77828.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","acsc"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.acsc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77829 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(x,sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x),(1))))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"acsc","acsc",-1149851176,null)], null);
return (fexpr__77829.cljs$core$IFn$_invoke$arity$1 ? fexpr__77829.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77829.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77830 = cljs.core.get_global_hierarchy;
return (fexpr__77830.cljs$core$IFn$_invoke$arity$0 ? fexpr__77830.cljs$core$IFn$_invoke$arity$0() : fexpr__77830.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","cosh"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.cosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77831 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),sicmutils.generic.sinh,new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null)], null);
return (fexpr__77831.cljs$core$IFn$_invoke$arity$1 ? fexpr__77831.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77831.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77832 = cljs.core.get_global_hierarchy;
return (fexpr__77832.cljs$core$IFn$_invoke$arity$0 ? fexpr__77832.cljs$core$IFn$_invoke$arity$0() : fexpr__77832.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","sinh"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.sinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77833 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),sicmutils.generic.cosh,new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sinh","sinh",-990423302,null)], null);
return (fexpr__77833.cljs$core$IFn$_invoke$arity$1 ? fexpr__77833.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77833.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77834 = cljs.core.get_global_hierarchy;
return (fexpr__77834.cljs$core$IFn$_invoke$arity$0 ? fexpr__77834.cljs$core$IFn$_invoke$arity$0() : fexpr__77834.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","tanh"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.tanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77835 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.tanh.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"tanh","tanh",480481797,null)], null);
return (fexpr__77835.cljs$core$IFn$_invoke$arity$1 ? fexpr__77835.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77835.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77836 = cljs.core.get_global_hierarchy;
return (fexpr__77836.cljs$core$IFn$_invoke$arity$0 ? fexpr__77836.cljs$core$IFn$_invoke$arity$0() : fexpr__77836.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","sech"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.sech.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77837 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sech.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.tanh.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sech","sech",-1403979131,null)], null);
return (fexpr__77837.cljs$core$IFn$_invoke$arity$1 ? fexpr__77837.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77837.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77838 = cljs.core.get_global_hierarchy;
return (fexpr__77838.cljs$core$IFn$_invoke$arity$0 ? fexpr__77838.cljs$core$IFn$_invoke$arity$0() : fexpr__77838.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","coth"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.coth.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77839 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1((sicmutils.generic.csch.cljs$core$IFn$_invoke$arity$1 ? sicmutils.generic.csch.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.generic.csch.call(null,x))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"coth","coth",1130257730,null)], null);
return (fexpr__77839.cljs$core$IFn$_invoke$arity$1 ? fexpr__77839.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77839.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77840 = cljs.core.get_global_hierarchy;
return (fexpr__77840.cljs$core$IFn$_invoke$arity$0 ? fexpr__77840.cljs$core$IFn$_invoke$arity$0() : fexpr__77840.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","csch"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.csch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77841 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.coth.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.csch.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"csch","csch",-1950330545,null)], null);
return (fexpr__77841.cljs$core$IFn$_invoke$arity$1 ? fexpr__77841.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77841.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77842 = cljs.core.get_global_hierarchy;
return (fexpr__77842.cljs$core$IFn$_invoke$arity$0 ? fexpr__77842.cljs$core$IFn$_invoke$arity$0() : fexpr__77842.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","acosh"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.acosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77843 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(x,(1))),sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(x,(1)))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"acosh","acosh",-2005748303,null)], null);
return (fexpr__77843.cljs$core$IFn$_invoke$arity$1 ? fexpr__77843.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77843.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77844 = cljs.core.get_global_hierarchy;
return (fexpr__77844.cljs$core$IFn$_invoke$arity$0 ? fexpr__77844.cljs$core$IFn$_invoke$arity$0() : fexpr__77844.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","asinh"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.asinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77845 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"asinh","asinh",-1398350397,null)], null);
return (fexpr__77845.cljs$core$IFn$_invoke$arity$1 ? fexpr__77845.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77845.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77846 = cljs.core.get_global_hierarchy;
return (fexpr__77846.cljs$core$IFn$_invoke$arity$0 ? fexpr__77846.cljs$core$IFn$_invoke$arity$0() : fexpr__77846.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","atanh"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.atanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77847 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"atanh","atanh",-1915750692,null)], null);
return (fexpr__77847.cljs$core$IFn$_invoke$arity$1 ? fexpr__77847.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77847.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77848 = cljs.core.get_global_hierarchy;
return (fexpr__77848.cljs$core$IFn$_invoke$arity$0 ? fexpr__77848.cljs$core$IFn$_invoke$arity$0() : fexpr__77848.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","acoth"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.acoth.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77849 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2((1),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"acoth","acoth",1639672811,null)], null);
return (fexpr__77849.cljs$core$IFn$_invoke$arity$1 ? fexpr__77849.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77849.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77850 = cljs.core.get_global_hierarchy;
return (fexpr__77850.cljs$core$IFn$_invoke$arity$0 ? fexpr__77850.cljs$core$IFn$_invoke$arity$0() : fexpr__77850.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","asech"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.asech.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77851 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
var x_PLUS_1 = sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(x,(1));
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(x,x_PLUS_1),sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2((1),x),x_PLUS_1)))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"asech","asech",-316284500,null)], null);
return (fexpr__77851.cljs$core$IFn$_invoke$arity$1 ? fexpr__77851.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77851.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77852 = cljs.core.get_global_hierarchy;
return (fexpr__77852.cljs$core$IFn$_invoke$arity$0 ? fexpr__77852.cljs$core$IFn$_invoke$arity$0() : fexpr__77852.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","acsch"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.acsch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77853 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(x,sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x),(1))))));
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"acsch","acsch",-1449651634,null)], null);
return (fexpr__77853.cljs$core$IFn$_invoke$arity$1 ? fexpr__77853.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77853.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77854 = cljs.core.get_global_hierarchy;
return (fexpr__77854.cljs$core$IFn$_invoke$arity$0 ? fexpr__77854.cljs$core$IFn$_invoke$arity$0() : fexpr__77854.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","sinc"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.sinc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77855 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
if(sicmutils.value.zero_QMARK_(x)){
return x;
} else {
return sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(x),x),sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
}
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sinc","sinc",60189925,null)], null);
return (fexpr__77855.cljs$core$IFn$_invoke$arity$1 ? fexpr__77855.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77855.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77856 = cljs.core.get_global_hierarchy;
return (fexpr__77856.cljs$core$IFn$_invoke$arity$0 ? fexpr__77856.cljs$core$IFn$_invoke$arity$0() : fexpr__77856.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","tanc"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.tanc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77857 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
if(sicmutils.value.zero_QMARK_(x)){
return x;
} else {
var sx = sicmutils.generic.sec.cljs$core$IFn$_invoke$arity$1(x);
return sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sx,sx),x),sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.tan.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
}
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"tanc","tanc",-1009303983,null)], null);
return (fexpr__77857.cljs$core$IFn$_invoke$arity$1 ? fexpr__77857.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77857.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77858 = cljs.core.get_global_hierarchy;
return (fexpr__77858.cljs$core$IFn$_invoke$arity$0 ? fexpr__77858.cljs$core$IFn$_invoke$arity$0() : fexpr__77858.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","sinhc"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.sinhc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77859 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
if(sicmutils.value.zero_QMARK_(x)){
return x;
} else {
return sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.cosh.cljs$core$IFn$_invoke$arity$1(x),x),sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sinh.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
}
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"sinhc","sinhc",-1445515294,null)], null);
return (fexpr__77859.cljs$core$IFn$_invoke$arity$1 ? fexpr__77859.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77859.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77860 = cljs.core.get_global_hierarchy;
return (fexpr__77860.cljs$core$IFn$_invoke$arity$0 ? fexpr__77860.cljs$core$IFn$_invoke$arity$0() : fexpr__77860.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","tanhc"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.tanhc.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77861 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512),(function (x){
if(sicmutils.value.zero_QMARK_(x)){
return x;
} else {
var sx = sicmutils.generic.sech.cljs$core$IFn$_invoke$arity$1(x);
return sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sx,sx),x),sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.tanh.cljs$core$IFn$_invoke$arity$1(x),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(x)));
}
}),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"tanhc","tanhc",991235322,null)], null);
return (fexpr__77861.cljs$core$IFn$_invoke$arity$1 ? fexpr__77861.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77861.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77862 = cljs.core.get_global_hierarchy;
return (fexpr__77862.cljs$core$IFn$_invoke$arity$0 ? fexpr__77862.cljs$core$IFn$_invoke$arity$0() : fexpr__77862.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","make-rectangular"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.make_rectangular.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77863 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"make-rectangular","make-rectangular",-1494662174,null)], null);
return (fexpr__77863.cljs$core$IFn$_invoke$arity$1 ? fexpr__77863.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77863.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77864 = cljs.core.get_global_hierarchy;
return (fexpr__77864.cljs$core$IFn$_invoke$arity$0 ? fexpr__77864.cljs$core$IFn$_invoke$arity$0() : fexpr__77864.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","make-polar"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.make_polar.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77865 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null)], null);
return (fexpr__77865.cljs$core$IFn$_invoke$arity$1 ? fexpr__77865.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77865.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77866 = cljs.core.get_global_hierarchy;
return (fexpr__77866.cljs$core$IFn$_invoke$arity$0 ? fexpr__77866.cljs$core$IFn$_invoke$arity$0() : fexpr__77866.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","real-part"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.real_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77867 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"real-part","real-part",-2001752061,null)], null);
return (fexpr__77867.cljs$core$IFn$_invoke$arity$1 ? fexpr__77867.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77867.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77868 = cljs.core.get_global_hierarchy;
return (fexpr__77868.cljs$core$IFn$_invoke$arity$0 ? fexpr__77868.cljs$core$IFn$_invoke$arity$0() : fexpr__77868.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","imag-part"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.imag_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77869 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"imag-part","imag-part",2028041294,null)], null);
return (fexpr__77869.cljs$core$IFn$_invoke$arity$1 ? fexpr__77869.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77869.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77870 = cljs.core.get_global_hierarchy;
return (fexpr__77870.cljs$core$IFn$_invoke$arity$0 ? fexpr__77870.cljs$core$IFn$_invoke$arity$0() : fexpr__77870.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","magnitude"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.magnitude.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77871 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
return (fexpr__77871.cljs$core$IFn$_invoke$arity$1 ? fexpr__77871.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77871.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77872 = cljs.core.get_global_hierarchy;
return (fexpr__77872.cljs$core$IFn$_invoke$arity$0 ? fexpr__77872.cljs$core$IFn$_invoke$arity$0() : fexpr__77872.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","angle"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.angle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77873 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"angle","angle",-1032341515,null)], null);
return (fexpr__77873.cljs$core$IFn$_invoke$arity$1 ? fexpr__77873.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77873.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77874 = cljs.core.get_global_hierarchy;
return (fexpr__77874.cljs$core$IFn$_invoke$arity$0 ? fexpr__77874.cljs$core$IFn$_invoke$arity$0() : fexpr__77874.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","conjugate"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.conjugate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77875 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"conjugate","conjugate",-1063123193,null)], null);
return (fexpr__77875.cljs$core$IFn$_invoke$arity$1 ? fexpr__77875.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77875.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77876 = cljs.core.get_global_hierarchy;
return (fexpr__77876.cljs$core$IFn$_invoke$arity$0 ? fexpr__77876.cljs$core$IFn$_invoke$arity$0() : fexpr__77876.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","transpose"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.transpose.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77877 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"transpose","transpose",1165804847,null)], null);
return (fexpr__77877.cljs$core$IFn$_invoke$arity$1 ? fexpr__77877.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77877.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77878 = cljs.core.get_global_hierarchy;
return (fexpr__77878.cljs$core$IFn$_invoke$arity$0 ? fexpr__77878.cljs$core$IFn$_invoke$arity$0() : fexpr__77878.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","trace"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.trace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77879 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"trace","trace",557784112,null)], null);
return (fexpr__77879.cljs$core$IFn$_invoke$arity$1 ? fexpr__77879.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77879.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77880 = cljs.core.get_global_hierarchy;
return (fexpr__77880.cljs$core$IFn$_invoke$arity$0 ? fexpr__77880.cljs$core$IFn$_invoke$arity$0() : fexpr__77880.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","determinant"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.determinant.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77881 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"determinant","determinant",-580156910,null)], null);
return (fexpr__77881.cljs$core$IFn$_invoke$arity$1 ? fexpr__77881.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77881.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77882 = cljs.core.get_global_hierarchy;
return (fexpr__77882.cljs$core$IFn$_invoke$arity$0 ? fexpr__77882.cljs$core$IFn$_invoke$arity$0() : fexpr__77882.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","dimension"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.dimension.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77883 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"dimension","dimension",-2111181571,null)], null);
return (fexpr__77883.cljs$core$IFn$_invoke$arity$1 ? fexpr__77883.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77883.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77884 = cljs.core.get_global_hierarchy;
return (fexpr__77884.cljs$core$IFn$_invoke$arity$0 ? fexpr__77884.cljs$core$IFn$_invoke$arity$0() : fexpr__77884.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","dot-product"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77885 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"dot-product","dot-product",-203055892,null)], null);
return (fexpr__77885.cljs$core$IFn$_invoke$arity$1 ? fexpr__77885.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77885.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77886 = cljs.core.get_global_hierarchy;
return (fexpr__77886.cljs$core$IFn$_invoke$arity$0 ? fexpr__77886.cljs$core$IFn$_invoke$arity$0() : fexpr__77886.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","inner-product"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.inner_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77887 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"inner-product","inner-product",-1963110418,null)], null);
return (fexpr__77887.cljs$core$IFn$_invoke$arity$1 ? fexpr__77887.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77887.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77888 = cljs.core.get_global_hierarchy;
return (fexpr__77888.cljs$core$IFn$_invoke$arity$0 ? fexpr__77888.cljs$core$IFn$_invoke$arity$0() : fexpr__77888.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","outer-product"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.outer_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77889 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"outer-product","outer-product",491531252,null)], null);
return (fexpr__77889.cljs$core$IFn$_invoke$arity$1 ? fexpr__77889.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77889.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77890 = cljs.core.get_global_hierarchy;
return (fexpr__77890.cljs$core$IFn$_invoke$arity$0 ? fexpr__77890.cljs$core$IFn$_invoke$arity$0() : fexpr__77890.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","cross-product"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.cross_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77891 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cross-product","cross-product",-823528331,null)], null);
return (fexpr__77891.cljs$core$IFn$_invoke$arity$1 ? fexpr__77891.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77891.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77892 = cljs.core.get_global_hierarchy;
return (fexpr__77892.cljs$core$IFn$_invoke$arity$0 ? fexpr__77892.cljs$core$IFn$_invoke$arity$0() : fexpr__77892.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","solve-linear"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77893 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"solve-linear","solve-linear",481545288,null)], null);
return (fexpr__77893.cljs$core$IFn$_invoke$arity$1 ? fexpr__77893.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77893.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77894 = cljs.core.get_global_hierarchy;
return (fexpr__77894.cljs$core$IFn$_invoke$arity$0 ? fexpr__77894.cljs$core$IFn$_invoke$arity$0() : fexpr__77894.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","solve-linear-right"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77895 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"solve-linear-right","solve-linear-right",-1518292405,null)], null);
return (fexpr__77895.cljs$core$IFn$_invoke$arity$1 ? fexpr__77895.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77895.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77896 = cljs.core.get_global_hierarchy;
return (fexpr__77896.cljs$core$IFn$_invoke$arity$0 ? fexpr__77896.cljs$core$IFn$_invoke$arity$0() : fexpr__77896.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","partial-derivative"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.partial_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77897 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"partial-derivative","partial-derivative",-1901056819,null)], null);
return (fexpr__77897.cljs$core$IFn$_invoke$arity$1 ? fexpr__77897.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77897.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77898 = cljs.core.get_global_hierarchy;
return (fexpr__77898.cljs$core$IFn$_invoke$arity$0 ? fexpr__77898.cljs$core$IFn$_invoke$arity$0() : fexpr__77898.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","Lie-derivative"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.Lie_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77899 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"Lie-derivative","Lie-derivative",-641072185,null)], null);
return (fexpr__77899.cljs$core$IFn$_invoke$arity$1 ? fexpr__77899.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77899.call(null,k__77664__auto__));
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77900 = cljs.core.get_global_hierarchy;
return (fexpr__77900.cljs$core$IFn$_invoke$arity$0 ? fexpr__77900.cljs$core$IFn$_invoke$arity$0() : fexpr__77900.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sicmutils.generic","simplify"),sicmutils.value.argument_kind,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}

sicmutils.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Keyword], null),(function (k__77664__auto__){
var fexpr__77901 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"simplify","simplify",1041318062,null)], null);
return (fexpr__77901.cljs$core$IFn$_invoke$arity$1 ? fexpr__77901.cljs$core$IFn$_invoke$arity$1(k__77664__auto__) : fexpr__77901.call(null,k__77664__auto__));
}));
sicmutils.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a){
return a;
}));
sicmutils.value.add_object_symbols_BANG_(cljs.core.PersistentHashMap.fromArrays([cljs.core._SLASH_,cljs.core._PLUS_,cljs.core._LT__EQ_,cljs.core.mod,cljs.core._STAR_,sicmutils.generic._STAR_,cljs.core._EQ_,cljs.core.rem,cljs.core.neg_QMARK_,cljs.core._GT__EQ_,sicmutils.generic._,cljs.core.infinite_QMARK_,cljs.core._LT_,cljs.core._GT_,sicmutils.generic._SLASH_,cljs.core.quot,sicmutils.generic._PLUS_,cljs.core._],[new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"modulo","modulo",725580254,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),new cljs.core.Symbol(null,"negative?","negative?",374534410,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"infinite?","infinite?",-377355081,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"quotient","quotient",-1029733218,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"-","-",-471816912,null)]));

//# sourceMappingURL=sicmutils.generic.js.map
