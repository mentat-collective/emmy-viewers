goog.provide('sicmutils.series.impl');
/**
 * Form the infinite sequence starting with the supplied values. The
 *   remainder of the series will be filled with the zero-value
 *   corresponding to the first of the given values.
 */
sicmutils.series.impl.__GT_series = (function sicmutils$series$impl$__GT_series(xs){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){
return xs;
}),null,null)),(new cljs.core.LazySeq(null,(function (){
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(sicmutils.value.zero_like(cljs.core.first(xs)));
}),null,null)));
});
sicmutils.series.impl.negate = (function sicmutils$series$impl$negate(xs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.negate,xs);
});
sicmutils.series.impl.seq_COLON__PLUS_ = (function sicmutils$series$impl$seq_COLON__PLUS_(f,g){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(sicmutils.generic._PLUS_,f,g);
});
sicmutils.series.impl.c_PLUS_seq = (function sicmutils$series$impl$c_PLUS_seq(c,f){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.first(f)),cljs.core.rest(f));
}),null,null));
});
sicmutils.series.impl.seq_PLUS_c = (function sicmutils$series$impl$seq_PLUS_c(f,c){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(f),c),cljs.core.rest(f));
}),null,null));
});
sicmutils.series.impl.seq_COLON__ = (function sicmutils$series$impl$seq_COLON__(f,g){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(sicmutils.generic._,f,g);
});
sicmutils.series.impl.seq_c = (function sicmutils$series$impl$seq_c(f,c){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(cljs.core.first(f),c),cljs.core.rest(f));
}),null,null));
});
sicmutils.series.impl.c_seq = (function sicmutils$series$impl$c_seq(c,f){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(c,cljs.core.first(f)),sicmutils.series.impl.negate(cljs.core.rest(f)));
}),null,null));
});
sicmutils.series.impl.seq_STAR_c = (function sicmutils$series$impl$seq_STAR_c(f,c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__82568_SHARP_){
return sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(p1__82568_SHARP_,c);
}),f);
});
sicmutils.series.impl.c_STAR_seq = (function sicmutils$series$impl$c_STAR_seq(c,f){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__82569_SHARP_){
return sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(c,p1__82569_SHARP_);
}),f);
});
sicmutils.series.impl.seq_COLON__STAR_ = (function sicmutils$series$impl$seq_COLON__STAR_(f,g){
var step = (function sicmutils$series$impl$seq_COLON__STAR__$_step(f__$1){
return (new cljs.core.LazySeq(null,(function (){
if(sicmutils.value.zero_QMARK_(cljs.core.first(f__$1))){
return cljs.core.cons(cljs.core.first(f__$1),sicmutils$series$impl$seq_COLON__STAR__$_step(cljs.core.rest(f__$1)));
} else {
var f_STAR_g = sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(cljs.core.first(f__$1),cljs.core.first(g));
var f_STAR_G1 = sicmutils.series.impl.c_STAR_seq(cljs.core.first(f__$1),cljs.core.rest(g));
var F1_STAR_G = sicmutils$series$impl$seq_COLON__STAR__$_step(cljs.core.rest(f__$1));
return cljs.core.cons(f_STAR_g,sicmutils.series.impl.seq_COLON__PLUS_(f_STAR_G1,F1_STAR_G));
}
}),null,null));
});
return (new cljs.core.LazySeq(null,(function (){
if(sicmutils.value.zero_QMARK_(cljs.core.first(g))){
return cljs.core.cons(cljs.core.first(g),(function (){var G__82571 = f;
var G__82572 = cljs.core.rest(g);
return (sicmutils.series.impl.seq_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.impl.seq_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(G__82571,G__82572) : sicmutils.series.impl.seq_COLON__STAR_.call(null,G__82571,G__82572));
})());
} else {
return step(f);
}
}),null,null));
});
sicmutils.series.impl.div = (function sicmutils$series$impl$div(f,g){
return (new cljs.core.LazySeq(null,(function (){
var f0 = cljs.core.first(f);
var fs = cljs.core.rest(f);
var g0 = cljs.core.first(g);
var gs = cljs.core.rest(g);
if(((sicmutils.value.zero_QMARK_(f0)) && (sicmutils.value.zero_QMARK_(g0)))){
return (sicmutils.series.impl.div.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.impl.div.cljs$core$IFn$_invoke$arity$2(fs,gs) : sicmutils.series.impl.div.call(null,fs,gs));
} else {
if(sicmutils.value.zero_QMARK_(f0)){
return cljs.core.cons(f0,(sicmutils.series.impl.div.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.impl.div.cljs$core$IFn$_invoke$arity$2(fs,g) : sicmutils.series.impl.div.call(null,fs,g)));
} else {
if(sicmutils.value.zero_QMARK_(g0)){
return sicmutils.util.arithmetic_ex("ERROR: denominator has a zero constant term");
} else {
var q = sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(f0,g0);
return cljs.core.cons(q,(function (){var G__82574 = sicmutils.series.impl.seq_COLON__(fs,sicmutils.series.impl.c_STAR_seq(q,gs));
var G__82575 = g;
return (sicmutils.series.impl.div.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.impl.div.cljs$core$IFn$_invoke$arity$2(G__82574,G__82575) : sicmutils.series.impl.div.call(null,G__82574,G__82575));
})());

}
}
}
}),null,null));
});
sicmutils.series.impl.invert = (function sicmutils$series$impl$invert(f){
return (new cljs.core.LazySeq(null,(function (){
var finv = sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(cljs.core.first(f));
var F1_STAR_Finv = sicmutils.series.impl.seq_COLON__STAR_(cljs.core.rest(f),(sicmutils.series.impl.invert.cljs$core$IFn$_invoke$arity$1 ? sicmutils.series.impl.invert.cljs$core$IFn$_invoke$arity$1(f) : sicmutils.series.impl.invert.call(null,f)));
var tail = sicmutils.series.impl.c_STAR_seq(finv,sicmutils.series.impl.negate(F1_STAR_Finv));
return cljs.core.cons(finv,tail);
}),null,null));
});
sicmutils.series.impl.c_div_seq = (function sicmutils$series$impl$c_div_seq(c,f){
return sicmutils.series.impl.c_STAR_seq(c,sicmutils.series.impl.invert(f));
});
sicmutils.series.impl.seq_div_c = (function sicmutils$series$impl$seq_div_c(f,c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__82581_SHARP_){
return sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(p1__82581_SHARP_,c);
}),f);
});
sicmutils.series.impl.compose = (function sicmutils$series$impl$compose(f,g){
var step = (function sicmutils$series$impl$compose_$_step(f__$1){
return (new cljs.core.LazySeq(null,(function (){
if(sicmutils.value.zero_QMARK_(cljs.core.first(g))){
} else {
throw (new Error("Assert failed: (v/zero? (first g))"));
}

var vec__82592 = f__$1;
var seq__82593 = cljs.core.seq(vec__82592);
var first__82594 = cljs.core.first(seq__82593);
var seq__82593__$1 = cljs.core.next(seq__82593);
var f0 = first__82594;
var fs = seq__82593__$1;
var gs = cljs.core.rest(g);
var tail = sicmutils.series.impl.seq_COLON__STAR_(gs,sicmutils$series$impl$compose_$_step(fs));
return cljs.core.cons(f0,tail);
}),null,null));
});
return step(f);
});
sicmutils.series.impl.revert = (function sicmutils$series$impl$revert(f){
if(sicmutils.value.zero_QMARK_(cljs.core.first(f))){
} else {
throw (new Error("Assert failed: (v/zero? (first f))"));
}

var step = (function sicmutils$series$impl$revert_$_step(f__$1){
return (new cljs.core.LazySeq(null,(function (){
var F1 = cljs.core.rest(f__$1);
var R = sicmutils$series$impl$revert_$_step(f__$1);
return cljs.core.cons((0),sicmutils.series.impl.invert(sicmutils.series.impl.compose(F1,R)));
}),null,null));
});
return step(f);
});
sicmutils.series.impl.deriv = (function sicmutils$series$impl$deriv(f){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(sicmutils.generic._STAR_,cljs.core.rest(f),cljs.core.iterate(cljs.core.inc,(1)));
});
sicmutils.series.impl.integral = (function sicmutils$series$impl$integral(var_args){
var G__82607 = arguments.length;
switch (G__82607) {
case 1:
return sicmutils.series.impl.integral.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.series.impl.integral.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.series.impl.integral.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sicmutils.series.impl.integral.cljs$core$IFn$_invoke$arity$2(s,(0));
}));

(sicmutils.series.impl.integral.cljs$core$IFn$_invoke$arity$2 = (function (s,constant_term){
return cljs.core.cons(constant_term,cljs.core.map.cljs$core$IFn$_invoke$arity$3(sicmutils.generic.div,s,cljs.core.iterate(cljs.core.inc,(1))));
}));

(sicmutils.series.impl.integral.cljs$lang$maxFixedArity = 2);

sicmutils.series.impl.expt = (function sicmutils$series$impl$expt(s,e){
var expt = (function sicmutils$series$impl$expt_$_expt(base,pow){
var n = pow;
var y = sicmutils.series.impl.__GT_series(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
var z = base;
while(true){
var t = cljs.core.even_QMARK_(n);
var n__$1 = cljs.core.quot(n,(2));
if(t){
var G__82640 = n__$1;
var G__82641 = y;
var G__82642 = sicmutils.series.impl.seq_COLON__STAR_(z,z);
n = G__82640;
y = G__82641;
z = G__82642;
continue;
} else {
if((n__$1 === (0))){
return sicmutils.series.impl.seq_COLON__STAR_(z,y);
} else {
var G__82643 = n__$1;
var G__82644 = sicmutils.series.impl.seq_COLON__STAR_(z,y);
var G__82645 = sicmutils.series.impl.seq_COLON__STAR_(z,z);
n = G__82643;
y = G__82644;
z = G__82645;
continue;

}
}
break;
}
});
if((e > (0))){
return expt(s,e);
} else {
if((e === (0))){
return sicmutils.series.impl.__GT_series(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
} else {
return sicmutils.series.impl.invert(expt(s,sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(e)));

}
}
});
sicmutils.series.impl.sqrt = (function sicmutils$series$impl$sqrt(p__82611){
var vec__82612 = p__82611;
var seq__82613 = cljs.core.seq(vec__82612);
var first__82614 = cljs.core.first(seq__82613);
var seq__82613__$1 = cljs.core.next(seq__82613);
var f1 = first__82614;
var vec__82615 = seq__82613__$1;
var seq__82616 = cljs.core.seq(vec__82615);
var first__82617 = cljs.core.first(seq__82616);
var seq__82616__$1 = cljs.core.next(seq__82616);
var f2 = first__82617;
var fs = seq__82616__$1;
var f = vec__82612;
if(((sicmutils.value.zero_QMARK_(f1)) && (sicmutils.value.zero_QMARK_(f2)))){
return cljs.core.cons(f1,(sicmutils.series.impl.sqrt.cljs$core$IFn$_invoke$arity$1 ? sicmutils.series.impl.sqrt.cljs$core$IFn$_invoke$arity$1(fs) : sicmutils.series.impl.sqrt.call(null,fs)));
} else {
var const$ = sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(f1);
var step = (function sicmutils$series$impl$sqrt_$_step(g){
return (new cljs.core.LazySeq(null,(function (){
return sicmutils.series.impl.integral.cljs$core$IFn$_invoke$arity$2(sicmutils.series.impl.div(sicmutils.series.impl.deriv(g),sicmutils.series.impl.c_STAR_seq((2),sicmutils$series$impl$sqrt_$_step(g))),const$);
}),null,null));
});
return step(f);
}
});
sicmutils.series.impl.expx = (new cljs.core.LazySeq(null,(function (){
return sicmutils.series.impl.integral.cljs$core$IFn$_invoke$arity$2(sicmutils.series.impl.expx,(1));
}),null,null));
sicmutils.series.impl.sinx = (new cljs.core.LazySeq(null,(function (){
return sicmutils.series.impl.integral.cljs$core$IFn$_invoke$arity$1(sicmutils.series.impl.cosx);
}),null,null));
sicmutils.series.impl.cosx = (new cljs.core.LazySeq(null,(function (){
return sicmutils.series.impl.c_seq((1),sicmutils.series.impl.integral.cljs$core$IFn$_invoke$arity$1(sicmutils.series.impl.sinx));
}),null,null));
sicmutils.series.impl.tanx = sicmutils.series.impl.div(sicmutils.series.impl.sinx,sicmutils.series.impl.cosx);
sicmutils.series.impl.secx = sicmutils.series.impl.invert(sicmutils.series.impl.cosx);
sicmutils.series.impl.asinx = sicmutils.series.impl.revert(sicmutils.series.impl.sinx);
sicmutils.series.impl.atanx = sicmutils.series.impl.integral.cljs$core$IFn$_invoke$arity$1(cljs.core.cycle(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(-1),(0)], null)));
sicmutils.series.impl.acosx = sicmutils.series.impl.c_seq((Math.PI / (2)),sicmutils.series.impl.asinx);
sicmutils.series.impl.acotx = sicmutils.series.impl.c_seq((Math.PI / (2)),sicmutils.series.impl.atanx);
sicmutils.series.impl.coshx = (new cljs.core.LazySeq(null,(function (){
return sicmutils.series.impl.integral.cljs$core$IFn$_invoke$arity$2(sicmutils.series.impl.sinhx,(1));
}),null,null));
sicmutils.series.impl.sinhx = (new cljs.core.LazySeq(null,(function (){
return sicmutils.series.impl.integral.cljs$core$IFn$_invoke$arity$1(sicmutils.series.impl.coshx);
}),null,null));
sicmutils.series.impl.tanhx = sicmutils.series.impl.div(sicmutils.series.impl.sinhx,sicmutils.series.impl.coshx);
sicmutils.series.impl.asinhx = sicmutils.series.impl.revert(sicmutils.series.impl.sinhx);
sicmutils.series.impl.atanhx = sicmutils.series.impl.revert(sicmutils.series.impl.tanhx);
sicmutils.series.impl.log1_x = sicmutils.series.impl.integral.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((-1)));
sicmutils.series.impl.log1_PLUS_x = sicmutils.series.impl.integral.cljs$core$IFn$_invoke$arity$1(cljs.core.cycle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
sicmutils.series.impl.catalan = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
return sicmutils.series.impl.seq_COLON__STAR_(sicmutils.series.impl.catalan,sicmutils.series.impl.catalan);
}),null,null)));


sicmutils.series.impl.tree_SINGLEQUOTE_ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
return sicmutils.series.impl.forest_SINGLEQUOTE_;
}),null,null)));
sicmutils.series.impl.list_SINGLEQUOTE_ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
return sicmutils.series.impl.list_SINGLEQUOTE_;
}),null,null)));
sicmutils.series.impl.forest_SINGLEQUOTE_ = sicmutils.series.impl.compose(sicmutils.series.impl.list_SINGLEQUOTE_,sicmutils.series.impl.tree_SINGLEQUOTE_);
sicmutils.series.impl.fib = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,sicmutils.series.impl.fib,cljs.core.rest(sicmutils.series.impl.fib));
}),null,null)));
sicmutils.series.impl.binomial_STAR_ = (function sicmutils$series$impl$binomial_STAR_(n){
var f = (function sicmutils$series$impl$binomial_STAR__$_f(acc,prev,n__$1,k){
while(true){
if((n__$1 === (0))){
return acc;
} else {
var next = ((prev * n__$1) / k);
var acc_SINGLEQUOTE_ = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,next);
var G__82648 = acc_SINGLEQUOTE_;
var G__82649 = next;
var G__82650 = (n__$1 - (1));
var G__82651 = (k + (1));
acc = G__82648;
prev = G__82649;
n__$1 = G__82650;
k = G__82651;
continue;
}
break;
}
});
return cljs.core.persistent_BANG_(f(cljs.core.transient$(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)),(1),n,(1)));
});
/**
 * The coefficients of (1+x)^n
 */
sicmutils.series.impl.binomial = (function sicmutils$series$impl$binomial(n){
return sicmutils.series.impl.__GT_series(sicmutils.series.impl.binomial_STAR_(n));
});
/**
 * The sequence of [Harmonic
 *   numbers](https://en.wikipedia.org/wiki/Harmonic_number), starting from n=1.
 */
sicmutils.series.impl.harmonic = cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._SLASH_,cljs.core.iterate(cljs.core.inc,(1))));
/**
 * The sequence of [Bell
 *   numbers](https://en.wikipedia.org/wiki/Bell_number), starting from n=1.
 */
sicmutils.series.impl.bell = cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.special.factorial.bell,cljs.core.iterate(cljs.core.inc,(1)));

//# sourceMappingURL=sicmutils.series.impl.js.map
