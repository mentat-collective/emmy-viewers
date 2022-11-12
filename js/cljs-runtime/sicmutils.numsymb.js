goog.provide('sicmutils.numsymb');
/**
 * When bound to a simplifier (a function from symbolic expression =>
 *   symbolic expression), this simplifier will be called after every operation
 *   performed on `sicmutils.abstract.number` instances.
 * 
 *   `nil` by default.
 */
sicmutils.numsymb._STAR_incremental_simplifier_STAR_ = null;
sicmutils.numsymb.operator = cljs.core.first;
sicmutils.numsymb.operands = cljs.core.rest;
/**
 * Returns a function which will decide if its argument is a sequence commencing
 *   with s.
 */
sicmutils.numsymb.is_expression_QMARK_ = (function sicmutils$numsymb$is_expression_QMARK_(s){
return (function (x){
return ((cljs.core.seq_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((sicmutils.numsymb.operator.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operator.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb.operator.call(null,x)),s)));
});
});
sicmutils.numsymb.sum_QMARK_ = sicmutils.numsymb.is_expression_QMARK_(new cljs.core.Symbol(null,"+","+",-740910886,null));
sicmutils.numsymb.product_QMARK_ = sicmutils.numsymb.is_expression_QMARK_(new cljs.core.Symbol(null,"*","*",345799209,null));
sicmutils.numsymb.sqrt_QMARK_ = sicmutils.numsymb.is_expression_QMARK_(new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null));
sicmutils.numsymb.expt_QMARK_ = sicmutils.numsymb.is_expression_QMARK_(new cljs.core.Symbol(null,"expt","expt",2123850345,null));
sicmutils.numsymb.quotient_QMARK_ = sicmutils.numsymb.is_expression_QMARK_(new cljs.core.Symbol(null,"/","/",-1371932971,null));
sicmutils.numsymb.arctan_QMARK_ = sicmutils.numsymb.is_expression_QMARK_(new cljs.core.Symbol(null,"atan","atan",-1026550135,null));
sicmutils.numsymb.derivative_QMARK_ = sicmutils.numsymb.is_expression_QMARK_(sicmutils.generic.derivative_symbol);
sicmutils.numsymb.iterated_derivative_QMARK_ = (function sicmutils$numsymb$iterated_derivative_QMARK_(expr){
var and__4251__auto__ = cljs.core.seq_QMARK_(expr);
if(and__4251__auto__){
var and__4251__auto____$1 = sicmutils.numsymb.expt_QMARK_((sicmutils.numsymb.operator.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operator.cljs$core$IFn$_invoke$arity$1(expr) : sicmutils.numsymb.operator.call(null,expr)));
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.derivative_symbol,cljs.core.second((sicmutils.numsymb.operator.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operator.cljs$core$IFn$_invoke$arity$1(expr) : sicmutils.numsymb.operator.call(null,expr))));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
});
/**
 * Returns a wrapper around f that attempts to preserve exactness if the input is
 *   numerically exact, else passes through to f.
 */
sicmutils.numsymb.with_exactness_preserved = (function sicmutils$numsymb$with_exactness_preserved(f,sym_or_fn){
var process = (((sym_or_fn instanceof cljs.core.Symbol))?(function (s){
return (new cljs.core.List(null,sym_or_fn,(new cljs.core.List(null,s,null,(1),null)),(2),null));
}):sym_or_fn);
return (function (s){
if(sicmutils.value.number_QMARK_(s)){
var q = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(s) : f.call(null,s));
if((!(sicmutils.value.exact_QMARK_(s)))){
return q;
} else {
if(sicmutils.value.exact_QMARK_(q)){
return q;
} else {
return (process.cljs$core$IFn$_invoke$arity$1 ? process.cljs$core$IFn$_invoke$arity$1(s) : process.call(null,s));
}
}
} else {
return (process.cljs$core$IFn$_invoke$arity$1 ? process.cljs$core$IFn$_invoke$arity$1(s) : process.call(null,s));
}
});
});
/**
 * Modulo and remainder are very similar, so can benefit from a shared set of
 *   simplifications.
 */
sicmutils.numsymb.mod_rem = (function sicmutils$numsymb$mod_rem(a,b,f,sym){
if(((sicmutils.value.number_QMARK_(a)) && (sicmutils.value.number_QMARK_(b)))){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(a,b) : f.call(null,a,b));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return (0);
} else {
if(sicmutils.value.zero_QMARK_(a)){
return (0);
} else {
if(sicmutils.value.one_QMARK_(b)){
return a;
} else {
return (new cljs.core.List(null,sym,(new cljs.core.List(null,a,(new cljs.core.List(null,b,null,(1),null)),(2),null)),(3),null));

}
}
}
}
});
sicmutils.numsymb.add = (function sicmutils$numsymb$add(a,b){
if(((sicmutils.value.number_QMARK_(a)) && (sicmutils.value.number_QMARK_(b)))){
return sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(a,b);
} else {
if(sicmutils.value.number_QMARK_(a)){
if(sicmutils.value.zero_QMARK_(a)){
return b;
} else {
if(cljs.core.truth_(sicmutils.numsymb.sum_QMARK_(b))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1(b) : sicmutils.numsymb.operands.call(null,b))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));

}
}
} else {
if(sicmutils.value.number_QMARK_(b)){
if(sicmutils.value.zero_QMARK_(b)){
return a;
} else {
if(cljs.core.truth_(sicmutils.numsymb.sum_QMARK_(a))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,(1),null)),(sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1(a) : sicmutils.numsymb.operands.call(null,a)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));

}
}
} else {
if(cljs.core.truth_(sicmutils.numsymb.sum_QMARK_(a))){
if(cljs.core.truth_(sicmutils.numsymb.sum_QMARK_(b))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,(1),null)),(sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1(a) : sicmutils.numsymb.operands.call(null,a)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1(b) : sicmutils.numsymb.operands.call(null,b))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,(1),null)),(sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1(a) : sicmutils.numsymb.operands.call(null,a)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));

}
} else {
if(cljs.core.truth_(sicmutils.numsymb.sum_QMARK_(b))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1(b) : sicmutils.numsymb.operands.call(null,b))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));

}
}
}
}
}
});
sicmutils.numsymb.sub = (function sicmutils$numsymb$sub(a,b){
if(((sicmutils.value.number_QMARK_(a)) && (sicmutils.value.number_QMARK_(b)))){
return sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(a,b);
} else {
if(sicmutils.value.number_QMARK_(a)){
if(sicmutils.value.zero_QMARK_(a)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));
}
} else {
if(sicmutils.value.number_QMARK_(b)){
if(sicmutils.value.zero_QMARK_(b)){
return a;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return (0);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));

}
}
}
}
});
sicmutils.numsymb.negate = (function sicmutils$numsymb$negate(x){
return sicmutils.numsymb.sub((0),x);
});
sicmutils.numsymb.mul = (function sicmutils$numsymb$mul(a,b){
if(((sicmutils.value.number_QMARK_(a)) && (sicmutils.value.number_QMARK_(b)))){
return sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(a,b);
} else {
if(sicmutils.value.number_QMARK_(a)){
if(sicmutils.value.zero_QMARK_(a)){
return a;
} else {
if(sicmutils.value.one_QMARK_(a)){
return b;
} else {
if(cljs.core.truth_(sicmutils.numsymb.product_QMARK_(b))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1(b) : sicmutils.numsymb.operands.call(null,b))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));

}
}
}
} else {
if(sicmutils.value.number_QMARK_(b)){
if(sicmutils.value.zero_QMARK_(b)){
return b;
} else {
if(sicmutils.value.one_QMARK_(b)){
return a;
} else {
if(cljs.core.truth_(sicmutils.numsymb.product_QMARK_(a))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),(sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1(a) : sicmutils.numsymb.operands.call(null,a)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));

}
}
}
} else {
if(cljs.core.truth_(sicmutils.numsymb.product_QMARK_(a))){
if(cljs.core.truth_(sicmutils.numsymb.product_QMARK_(b))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),(sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1(a) : sicmutils.numsymb.operands.call(null,a)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1(b) : sicmutils.numsymb.operands.call(null,b))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),(sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1(a) : sicmutils.numsymb.operands.call(null,a)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));

}
} else {
if(cljs.core.truth_(sicmutils.numsymb.product_QMARK_(b))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1(b) : sicmutils.numsymb.operands.call(null,b))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));

}
}
}
}
}
});
sicmutils.numsymb.div = (function sicmutils$numsymb$div(a,b){
if(((sicmutils.value.number_QMARK_(a)) && (sicmutils.value.number_QMARK_(b)))){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(a,b);
} else {
if(sicmutils.value.number_QMARK_(a)){
if(sicmutils.value.zero_QMARK_(a)){
return a;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));
}
} else {
if(sicmutils.value.number_QMARK_(b)){
if(sicmutils.value.zero_QMARK_(b)){
return sicmutils.util.arithmetic_ex("division by zero");
} else {
if(sicmutils.value.one_QMARK_(b)){
return a;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));

}
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null))], 0))));

}
}
}
});
sicmutils.numsymb.invert = (function sicmutils$numsymb$invert(x){
return sicmutils.numsymb.div((1),x);
});
sicmutils.numsymb.modulo = (function sicmutils$numsymb$modulo(a,b){
return sicmutils.numsymb.mod_rem(a,b,sicmutils.numsymb.modulo,new cljs.core.Symbol(null,"modulo","modulo",725580254,null));
});
sicmutils.numsymb.remainder = (function sicmutils$numsymb$remainder(a,b){
return sicmutils.numsymb.mod_rem(a,b,sicmutils.numsymb.remainder,new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null));
});
sicmutils.numsymb.floor = (function sicmutils$numsymb$floor(a){
if(sicmutils.value.number_QMARK_(a)){
return sicmutils.generic.floor.cljs$core$IFn$_invoke$arity$1(a);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"floor","floor",-772394748,null),(new cljs.core.List(null,a,null,(1),null)),(2),null));
}
});
sicmutils.numsymb.ceiling = (function sicmutils$numsymb$ceiling(a){
if(sicmutils.value.number_QMARK_(a)){
return sicmutils.generic.ceiling.cljs$core$IFn$_invoke$arity$1(a);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"ceiling","ceiling",-1593475279,null),(new cljs.core.List(null,a,null,(1),null)),(2),null));
}
});
sicmutils.numsymb.integer_part = (function sicmutils$numsymb$integer_part(a){
if(sicmutils.value.number_QMARK_(a)){
return sicmutils.generic.integer_part.cljs$core$IFn$_invoke$arity$1(a);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"integer-part","integer-part",-1884537015,null),(new cljs.core.List(null,a,null,(1),null)),(2),null));
}
});
sicmutils.numsymb.fractional_part = (function sicmutils$numsymb$fractional_part(a){
if(sicmutils.value.number_QMARK_(a)){
return sicmutils.generic.fractional_part.cljs$core$IFn$_invoke$arity$1(a);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"fractional-part","fractional-part",-505422086,null),(new cljs.core.List(null,a,null,(1),null)),(2),null));
}
});
sicmutils.numsymb.pi = Math.PI;
sicmutils.numsymb.pi_over_4 = (sicmutils.numsymb.pi / (4));
sicmutils.numsymb.two_pi = ((2) * sicmutils.numsymb.pi);
sicmutils.numsymb.pi_over_2 = ((2) * sicmutils.numsymb.pi_over_4);
sicmutils.numsymb.n_COLON_zero_mod_pi_QMARK_ = (function sicmutils$numsymb$n_COLON_zero_mod_pi_QMARK_(x){
return sicmutils.value.almost_integral_QMARK_((x / sicmutils.numsymb.pi));
});
sicmutils.numsymb.n_COLON_pi_over_2_mod_2pi_QMARK_ = (function sicmutils$numsymb$n_COLON_pi_over_2_mod_2pi_QMARK_(x){
return sicmutils.value.almost_integral_QMARK_(((1) / ((x - sicmutils.numsymb.pi_over_2) - sicmutils.numsymb.two_pi)));
});
sicmutils.numsymb.n_COLON__pi_over_2_mod_2pi_QMARK_ = (function sicmutils$numsymb$n_COLON__pi_over_2_mod_2pi_QMARK_(x){
return sicmutils.value.almost_integral_QMARK_(((x + sicmutils.numsymb.pi_over_2) / sicmutils.numsymb.two_pi));
});
sicmutils.numsymb.n_COLON_pi_mod_2pi_QMARK_ = (function sicmutils$numsymb$n_COLON_pi_mod_2pi_QMARK_(x){
return sicmutils.value.almost_integral_QMARK_(((x - sicmutils.numsymb.pi) / sicmutils.numsymb.two_pi));
});
sicmutils.numsymb.n_COLON_pi_over_2_mod_pi_QMARK_ = (function sicmutils$numsymb$n_COLON_pi_over_2_mod_pi_QMARK_(x){
return sicmutils.value.almost_integral_QMARK_(((x - sicmutils.numsymb.pi_over_2) / sicmutils.numsymb.pi));
});
sicmutils.numsymb.n_COLON_zero_mod_2pi_QMARK_ = (function sicmutils$numsymb$n_COLON_zero_mod_2pi_QMARK_(x){
return sicmutils.value.almost_integral_QMARK_((x / sicmutils.numsymb.two_pi));
});
sicmutils.numsymb.n_COLON__pi_over_4_mod_pi_QMARK_ = (function sicmutils$numsymb$n_COLON__pi_over_4_mod_pi_QMARK_(x){
return sicmutils.value.almost_integral_QMARK_(((x + sicmutils.numsymb.pi_over_4) / sicmutils.numsymb.pi));
});
sicmutils.numsymb.n_COLON_pi_over_4_mod_pi_QMARK_ = (function sicmutils$numsymb$n_COLON_pi_over_4_mod_pi_QMARK_(x){
return sicmutils.value.almost_integral_QMARK_(((x - sicmutils.numsymb.pi_over_4) / sicmutils.numsymb.pi));
});
sicmutils.numsymb.zero_mod_pi_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"-pi","-pi",-613600448,null),null,new cljs.core.Symbol(null,"pi","pi",176774184,null),null,new cljs.core.Symbol(null,"two-pi","two-pi",1398792117,null),null,new cljs.core.Symbol(null,"-two-pi","-two-pi",-50550974,null),null], null), null);
sicmutils.numsymb.pi_over_2_mod_2pi_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"pi-over-2","pi-over-2",515246065,null),null], null), null);
sicmutils.numsymb._pi_over_2_mod_2pi_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"-pi-over-2","-pi-over-2",-1344612268,null),null], null), null);
sicmutils.numsymb.pi_mod_2pi_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"-pi","-pi",-613600448,null),null,new cljs.core.Symbol(null,"pi","pi",176774184,null),null], null), null);
sicmutils.numsymb.pi_over_2_mod_pi_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"pi-over-2","pi-over-2",515246065,null),null,new cljs.core.Symbol(null,"-pi-over-2","-pi-over-2",-1344612268,null),null], null), null);
sicmutils.numsymb.zero_mod_2pi_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"two-pi","two-pi",1398792117,null),null,new cljs.core.Symbol(null,"-two-pi","-two-pi",-50550974,null),null], null), null);
sicmutils.numsymb._pi_over_4_mod_pi_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"-pi-over-4","-pi-over-4",-640936368,null),null], null), null);
sicmutils.numsymb.pi_over_4_mod_pi_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"+pi-over-4","+pi-over-4",-1289502545,null),null,new cljs.core.Symbol(null,"pi-over-4","pi-over-4",1610173659,null),null], null), null);
/**
 * Implementation of sine that attempts to apply optimizations at the call site.
 *   If it's not possible to do this (if the expression is symbolic, say), returns
 *   a symbolic form.
 */
sicmutils.numsymb.sin = (function sicmutils$numsymb$sin(x){
if(sicmutils.value.number_QMARK_(x)){
if(sicmutils.value.exact_QMARK_(x)){
if(sicmutils.value.zero_QMARK_(x)){
return (0);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
} else {
if(sicmutils.numsymb.n_COLON_zero_mod_pi_QMARK_(x)){
return (0);
} else {
if(sicmutils.numsymb.n_COLON_pi_over_2_mod_2pi_QMARK_(x)){
return (1);
} else {
if(sicmutils.numsymb.n_COLON__pi_over_2_mod_2pi_QMARK_(x)){
return (-1);
} else {
return Math.sin(x);

}
}
}
}
} else {
if((x instanceof cljs.core.Symbol)){
if(cljs.core.truth_((sicmutils.numsymb.zero_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.zero_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb.zero_mod_pi_QMARK_.call(null,x)))){
return (0);
} else {
if(cljs.core.truth_((sicmutils.numsymb.pi_over_2_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.pi_over_2_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb.pi_over_2_mod_2pi_QMARK_.call(null,x)))){
return (1);
} else {
if(cljs.core.truth_((sicmutils.numsymb._pi_over_2_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb._pi_over_2_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb._pi_over_2_mod_2pi_QMARK_.call(null,x)))){
return (-1);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));

}
}
}
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));

}
}
});
/**
 * Implementation of cosine that attempts to apply optimizations at the call site.
 *   If it's not possible to do this (if the expression is symbolic, say), returns
 *   a symbolic form.
 */
sicmutils.numsymb.cos = (function sicmutils$numsymb$cos(x){
if(sicmutils.value.number_QMARK_(x)){
if(sicmutils.value.exact_QMARK_(x)){
if(sicmutils.value.zero_QMARK_(x)){
return (1);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
} else {
if(sicmutils.numsymb.n_COLON_pi_over_2_mod_pi_QMARK_(x)){
return (0);
} else {
if(sicmutils.numsymb.n_COLON_zero_mod_2pi_QMARK_(x)){
return (1);
} else {
if(sicmutils.numsymb.n_COLON_pi_mod_2pi_QMARK_(x)){
return (-1);
} else {
return Math.cos(x);

}
}
}
}
} else {
if((x instanceof cljs.core.Symbol)){
if(cljs.core.truth_((sicmutils.numsymb.pi_over_2_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.pi_over_2_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb.pi_over_2_mod_pi_QMARK_.call(null,x)))){
return (0);
} else {
if(cljs.core.truth_((sicmutils.numsymb.zero_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.zero_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb.zero_mod_2pi_QMARK_.call(null,x)))){
return (1);
} else {
if(cljs.core.truth_((sicmutils.numsymb.pi_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.pi_mod_2pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb.pi_mod_2pi_QMARK_.call(null,x)))){
return (-1);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));

}
}
}
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));

}
}
});
/**
 * Implementation of tangent that attempts to apply optimizations at the call site.
 *   If it's not possible to do this (if the expression is symbolic, say), returns
 *   a symbolic form.
 */
sicmutils.numsymb.tan = (function sicmutils$numsymb$tan(x){
if(sicmutils.value.number_QMARK_(x)){
if(sicmutils.value.exact_QMARK_(x)){
if(sicmutils.value.zero_QMARK_(x)){
return (0);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
} else {
if(sicmutils.numsymb.n_COLON_zero_mod_pi_QMARK_(x)){
return (0);
} else {
if(sicmutils.numsymb.n_COLON_pi_over_4_mod_pi_QMARK_(x)){
return (1);
} else {
if(sicmutils.numsymb.n_COLON__pi_over_4_mod_pi_QMARK_(x)){
return (-1);
} else {
if(sicmutils.numsymb.n_COLON_pi_over_2_mod_pi_QMARK_(x)){
return sicmutils.util.illegal("Undefined: tan");
} else {
return Math.tan(x);

}
}
}
}
}
} else {
if((x instanceof cljs.core.Symbol)){
if(cljs.core.truth_((sicmutils.numsymb.zero_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.zero_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb.zero_mod_pi_QMARK_.call(null,x)))){
return (0);
} else {
if(cljs.core.truth_((sicmutils.numsymb.pi_over_4_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.pi_over_4_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb.pi_over_4_mod_pi_QMARK_.call(null,x)))){
return (1);
} else {
if(cljs.core.truth_((sicmutils.numsymb._pi_over_4_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb._pi_over_4_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb._pi_over_4_mod_pi_QMARK_.call(null,x)))){
return (-1);
} else {
if(cljs.core.truth_((sicmutils.numsymb.pi_over_2_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.pi_over_2_mod_pi_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.numsymb.pi_over_2_mod_pi_QMARK_.call(null,x)))){
return sicmutils.util.illegal("Undefined: tan");
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));

}
}
}
}
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));

}
}
});
sicmutils.numsymb.csc = (function sicmutils$numsymb$csc(x){
if(sicmutils.value.number_QMARK_(x)){
if((!(sicmutils.value.exact_QMARK_(x)))){
return sicmutils.generic.csc.cljs$core$IFn$_invoke$arity$1(x);
} else {
if(sicmutils.value.zero_QMARK_(x)){
return sicmutils.util.illegal(["Zero argument -- g/csc",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sicmutils.numsymb.sin(x),null,(1),null))], 0))));
}
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sicmutils.numsymb.sin(x),null,(1),null))], 0))));
}
});
sicmutils.numsymb.sec = (function sicmutils$numsymb$sec(x){
if(sicmutils.value.number_QMARK_(x)){
if((!(sicmutils.value.exact_QMARK_(x)))){
return sicmutils.generic.sec.cljs$core$IFn$_invoke$arity$1(x);
} else {
if(sicmutils.value.zero_QMARK_(x)){
return (1);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sicmutils.numsymb.cos(x),null,(1),null))], 0))));
}
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sicmutils.numsymb.cos(x),null,(1),null))], 0))));
}
});
sicmutils.numsymb.asin = (function sicmutils$numsymb$asin(x){
if(sicmutils.value.number_QMARK_(x)){
if((!(sicmutils.value.exact_QMARK_(x)))){
return sicmutils.generic.asin.cljs$core$IFn$_invoke$arity$1(x);
} else {
if(sicmutils.value.zero_QMARK_(x)){
return (0);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
}
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
});
sicmutils.numsymb.acos = (function sicmutils$numsymb$acos(x){
if(sicmutils.value.number_QMARK_(x)){
if((!(sicmutils.value.exact_QMARK_(x)))){
return sicmutils.generic.acos.cljs$core$IFn$_invoke$arity$1(x);
} else {
if(sicmutils.value.one_QMARK_(x)){
return (0);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
}
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"acos","acos",353741763,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
});
sicmutils.numsymb.atan = (function sicmutils$numsymb$atan(var_args){
var G__82463 = arguments.length;
switch (G__82463) {
case 1:
return sicmutils.numsymb.atan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.numsymb.atan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numsymb.atan.cljs$core$IFn$_invoke$arity$1 = (function (y){
if(sicmutils.value.number_QMARK_(y)){
if((!(sicmutils.value.exact_QMARK_(y)))){
return sicmutils.generic.atan.cljs$core$IFn$_invoke$arity$1(y);
} else {
if(sicmutils.value.zero_QMARK_(y)){
return (0);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,y,null,(1),null)),(2),null));
}
}
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,y,null,(1),null)),(2),null));
}
}));

(sicmutils.numsymb.atan.cljs$core$IFn$_invoke$arity$2 = (function (y,x){
if(sicmutils.value.one_QMARK_(x)){
return sicmutils.numsymb.atan.cljs$core$IFn$_invoke$arity$1(y);
} else {
if(sicmutils.value.exact_zero_QMARK_(y)){
if(sicmutils.value.number_QMARK_(x)){
if(cljs.core.truth_(sicmutils.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return new cljs.core.Symbol(null,"pi","pi",176774184,null);
} else {
return (0);
}
} else {
var and__4251__auto__ = sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"non-negative?","non-negative?",1248641804,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),new cljs.core.Symbol(null,"numsymb-atan","numsymb-atan",-1523379191,null));
if(cljs.core.truth_(and__4251__auto__)){
return (0);
} else {
return and__4251__auto__;
}
}
} else {
if(sicmutils.value.exact_zero_QMARK_(x)){
if(sicmutils.value.number_QMARK_(y)){
if(cljs.core.truth_(sicmutils.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(y))){
return cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)));
} else {
return cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2));
}
} else {
var and__4251__auto__ = sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"non-negative?","non-negative?",1248641804,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null))))),new cljs.core.Symbol(null,"numsymb-atan","numsymb-atan",-1523379191,null));
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2));
} else {
return and__4251__auto__;
}
}
} else {
if(((sicmutils.value.number_QMARK_(x)) && (((sicmutils.value.number_QMARK_(y)) && ((((!(sicmutils.value.exact_QMARK_(x)))) || ((!(sicmutils.value.exact_QMARK_(y)))))))))){
return sicmutils.generic.atan.cljs$core$IFn$_invoke$arity$2(y,x);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),(new cljs.core.List(null,y,(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null));

}
}
}
}
}));

(sicmutils.numsymb.atan.cljs$lang$maxFixedArity = 2);

sicmutils.numsymb.cosh = (function sicmutils$numsymb$cosh(x){
if(sicmutils.value.number_QMARK_(x)){
if((!(sicmutils.value.exact_QMARK_(x)))){
return sicmutils.generic.cosh.cljs$core$IFn$_invoke$arity$1(x);
} else {
if(sicmutils.value.zero_QMARK_(x)){
return (1);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
}
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
});
sicmutils.numsymb.sinh = (function sicmutils$numsymb$sinh(x){
if(sicmutils.value.number_QMARK_(x)){
if((!(sicmutils.value.exact_QMARK_(x)))){
return sicmutils.generic.sinh.cljs$core$IFn$_invoke$arity$1(x);
} else {
if(sicmutils.value.zero_QMARK_(x)){
return (0);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
}
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
});
sicmutils.numsymb.tanh = (function sicmutils$numsymb$tanh(x){
return sicmutils.numsymb.div(sicmutils.numsymb.sinh(x),sicmutils.numsymb.cosh(x));
});
sicmutils.numsymb.coth = (function sicmutils$numsymb$coth(x){
return sicmutils.numsymb.div(sicmutils.numsymb.cosh(x),sicmutils.numsymb.sinh(x));
});
sicmutils.numsymb.sech = (function sicmutils$numsymb$sech(x){
return sicmutils.numsymb.div((1),sicmutils.numsymb.cosh(x));
});
sicmutils.numsymb.csch = (function sicmutils$numsymb$csch(x){
return sicmutils.numsymb.div((1),sicmutils.numsymb.sinh(x));
});
sicmutils.numsymb.acot = (function sicmutils$numsymb$acot(x){
return sicmutils.numsymb.sub(cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)),sicmutils.numsymb.atan.cljs$core$IFn$_invoke$arity$1(x));
});
/**
 * Symbolic expression handler for abs.
 */
sicmutils.numsymb.abs = (function sicmutils$numsymb$abs(x){
if(sicmutils.value.number_QMARK_(x)){
return sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(x);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"abs","abs",1394505050,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
});
sicmutils.numsymb.gcd = (function sicmutils$numsymb$gcd(a,b){
if(((sicmutils.value.number_QMARK_(a)) && (sicmutils.value.number_QMARK_(b)))){
return sicmutils.generic.gcd.cljs$core$IFn$_invoke$arity$2(a,b);
} else {
if(sicmutils.value.number_QMARK_(a)){
if(sicmutils.value.zero_QMARK_(a)){
return b;
} else {
if(sicmutils.value.one_QMARK_(a)){
return (1);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"gcd","gcd",1659909537,null),(new cljs.core.List(null,a,(new cljs.core.List(null,b,null,(1),null)),(2),null)),(3),null));

}
}
} else {
if(sicmutils.value.number_QMARK_(b)){
if(sicmutils.value.zero_QMARK_(b)){
return a;
} else {
if(sicmutils.value.one_QMARK_(b)){
return (1);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"gcd","gcd",1659909537,null),(new cljs.core.List(null,a,(new cljs.core.List(null,b,null,(1),null)),(2),null)),(3),null));

}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return a;
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"gcd","gcd",1659909537,null),(new cljs.core.List(null,a,(new cljs.core.List(null,b,null,(1),null)),(2),null)),(3),null));

}
}
}
}
});
sicmutils.numsymb.lcm = (function sicmutils$numsymb$lcm(a,b){
if(((sicmutils.value.number_QMARK_(a)) && (sicmutils.value.number_QMARK_(b)))){
return sicmutils.generic.lcm.cljs$core$IFn$_invoke$arity$2(a,b);
} else {
if(sicmutils.value.number_QMARK_(a)){
if(sicmutils.value.zero_QMARK_(a)){
return (0);
} else {
if(sicmutils.value.one_QMARK_(a)){
return b;
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"lcm","lcm",-1699262564,null),(new cljs.core.List(null,a,(new cljs.core.List(null,b,null,(1),null)),(2),null)),(3),null));

}
}
} else {
if(sicmutils.value.number_QMARK_(b)){
if(sicmutils.value.zero_QMARK_(b)){
return (0);
} else {
if(sicmutils.value.one_QMARK_(b)){
return a;
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"lcm","lcm",-1699262564,null),(new cljs.core.List(null,a,(new cljs.core.List(null,b,null,(1),null)),(2),null)),(3),null));

}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return a;
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"lcm","lcm",-1699262564,null),(new cljs.core.List(null,a,(new cljs.core.List(null,b,null,(1),null)),(2),null)),(3),null));

}
}
}
}
});
/**
 * Square root implementation that attempts to preserve exact numbers wherever
 *   possible. If the incoming value is not exact, simply computes sqrt.
 */
sicmutils.numsymb.sqrt = sicmutils.numsymb.with_exactness_preserved(sicmutils.generic.sqrt,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null));
/**
 * Attempts to preserve exact precision if the argument is exact; else, evaluates
 *   symbolically or numerically.
 */
sicmutils.numsymb.log = sicmutils.numsymb.with_exactness_preserved(sicmutils.generic.log,new cljs.core.Symbol(null,"log","log",45015523,null));
/**
 * Attempts to preserve exact precision if the argument is exact; else, evaluates
 *   symbolically or numerically.
 */
sicmutils.numsymb.exp = sicmutils.numsymb.with_exactness_preserved(sicmutils.generic.exp,new cljs.core.Symbol(null,"exp","exp",1378825265,null));
/**
 * Attempts to preserve exact precision if either argument is exact; else,
 *   evaluates symbolically or numerically.
 */
sicmutils.numsymb.expt = (function sicmutils$numsymb$expt(b,e){
if(((sicmutils.value.number_QMARK_(b)) && (sicmutils.value.number_QMARK_(e)))){
return sicmutils.generic.expt.cljs$core$IFn$_invoke$arity$2(b,e);
} else {
if(sicmutils.value.number_QMARK_(b)){
if(sicmutils.value.one_QMARK_(b)){
return (1);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,e,null,(1),null))], 0))));

}
} else {
if(sicmutils.value.number_QMARK_(e)){
if(sicmutils.value.zero_QMARK_(e)){
return (1);
} else {
if(sicmutils.value.one_QMARK_(e)){
return b;
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.integer_QMARK_(e);
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core.even_QMARK_(e);
if(and__4251__auto____$1){
return sicmutils.numsymb.sqrt_QMARK_(b);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var G__82488 = cljs.core.first((sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1(b) : sicmutils.numsymb.operands.call(null,b)));
var G__82489 = cljs.core.quot(e,(2));
return (sicmutils.numsymb.expt.cljs$core$IFn$_invoke$arity$2 ? sicmutils.numsymb.expt.cljs$core$IFn$_invoke$arity$2(G__82488,G__82489) : sicmutils.numsymb.expt.call(null,G__82488,G__82489));
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = sicmutils.numsymb.expt_QMARK_(b);
if(cljs.core.truth_(and__4251__auto__)){
return ((sicmutils.value.number_QMARK_(cljs.core.second((sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1(b) : sicmutils.numsymb.operands.call(null,b))))) && (cljs.core.integer_QMARK_((cljs.core.second((sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1(b) : sicmutils.numsymb.operands.call(null,b))) * e))));
} else {
return and__4251__auto__;
}
})())){
var G__82491 = cljs.core.first((sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1(b) : sicmutils.numsymb.operands.call(null,b)));
var G__82492 = (cljs.core.second((sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1(b) : sicmutils.numsymb.operands.call(null,b))) * e);
return (sicmutils.numsymb.expt.cljs$core$IFn$_invoke$arity$2 ? sicmutils.numsymb.expt.cljs$core$IFn$_invoke$arity$2(G__82491,G__82492) : sicmutils.numsymb.expt.call(null,G__82491,G__82492));
} else {
if((e < (0))){
return sicmutils.numsymb.invert((function (){var G__82493 = b;
var G__82494 = (- e);
return (sicmutils.numsymb.expt.cljs$core$IFn$_invoke$arity$2 ? sicmutils.numsymb.expt.cljs$core$IFn$_invoke$arity$2(G__82493,G__82494) : sicmutils.numsymb.expt.call(null,G__82493,G__82494));
})());
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,e,null,(1),null))], 0))));

}
}
}
}
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,e,null,(1),null))], 0))));

}
}
}
});
sicmutils.numsymb.conjugate_transparent_operators = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 31, [new cljs.core.Symbol(null,"csch","csch",-1950330545,null),null,new cljs.core.Symbol(null,"cube","cube",138920159,null),null,new cljs.core.Symbol(null,"up","up",1370819414,null),null,new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),null,new cljs.core.Symbol(null,"sin","sin",1721439389,null),null,new cljs.core.Symbol(null,"tan","tan",-1380825876,null),null,new cljs.core.Symbol(null,"cos","cos",-1452677493,null),null,new cljs.core.Symbol(null,"exp10","exp10",-1005012445,null),null,new cljs.core.Symbol(null,"/","/",-1371932971,null),null,new cljs.core.Symbol(null,"invert","invert",-1100858266,null),null,new cljs.core.Symbol(null,"log","log",45015523,null),null,new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,new cljs.core.Symbol(null,"sec","sec",60154974,null),null,new cljs.core.Symbol(null,"negate","negate",337772450,null),null,new cljs.core.Symbol(null,"sech","sech",-1403979131,null),null,new cljs.core.Symbol(null,"log10","log10",891257803,null),null,new cljs.core.Symbol(null,"square","square",-1842001092,null),null,new cljs.core.Symbol(null,"exp2","exp2",603509626,null),null,new cljs.core.Symbol(null,"*","*",345799209,null),null,new cljs.core.Symbol(null,"log2","log2",-1850656939,null),null,new cljs.core.Symbol(null,"atan","atan",-1026550135,null),null,new cljs.core.Symbol(null,"csc","csc",-427853492,null),null,new cljs.core.Symbol(null,"acos","acos",353741763,null),null,new cljs.core.Symbol(null,"-","-",-471816912,null),null,new cljs.core.Symbol(null,"down","down",-1089190199,null),null,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),null,new cljs.core.Symbol(null,"asin","asin",-904130570,null),null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),null,new cljs.core.Symbol(null,"tanh","tanh",480481797,null),null], null), null);
sicmutils.numsymb.make_rectangular = (function sicmutils$numsymb$make_rectangular(r,i){
if(sicmutils.value.exact_zero_QMARK_(i)){
return r;
} else {
if(((sicmutils.value.real_QMARK_(r)) && (sicmutils.value.real_QMARK_(i)))){
return sicmutils.generic.make_rectangular.cljs$core$IFn$_invoke$arity$2(r,i);
} else {
return sicmutils.numsymb.add(r,sicmutils.numsymb.mul(sicmutils.complex.I,i));

}
}
});
sicmutils.numsymb.make_polar = (function sicmutils$numsymb$make_polar(m,a){
if(sicmutils.value.exact_zero_QMARK_(m)){
return m;
} else {
if(sicmutils.value.exact_zero_QMARK_(a)){
return m;
} else {
if(((sicmutils.value.real_QMARK_(m)) && (sicmutils.value.real_QMARK_(a)))){
return sicmutils.generic.make_polar.cljs$core$IFn$_invoke$arity$2(m,a);
} else {
return sicmutils.numsymb.mul(m,sicmutils.numsymb.add(sicmutils.numsymb.cos(a),sicmutils.numsymb.mul(sicmutils.complex.I,sicmutils.numsymb.sin(a))));

}
}
}
});
sicmutils.numsymb.conjugate = (function sicmutils$numsymb$conjugate(z){
if(sicmutils.value.number_QMARK_(z)){
return sicmutils.generic.conjugate.cljs$core$IFn$_invoke$arity$1(z);
} else {
if(((cljs.core.seq_QMARK_(z)) && (cljs.core.contains_QMARK_(sicmutils.numsymb.conjugate_transparent_operators,(sicmutils.numsymb.operator.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operator.cljs$core$IFn$_invoke$arity$1(z) : sicmutils.numsymb.operator.call(null,z)))))){
return cljs.core.cons((sicmutils.numsymb.operator.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operator.cljs$core$IFn$_invoke$arity$1(z) : sicmutils.numsymb.operator.call(null,z)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.numsymb.conjugate,(sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1(z) : sicmutils.numsymb.operands.call(null,z))));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"conjugate","conjugate",-1063123193,null),(new cljs.core.List(null,z,null,(1),null)),(2),null));

}
}
});
sicmutils.numsymb.magnitude = sicmutils.numsymb.with_exactness_preserved(sicmutils.generic.magnitude,(function (a){
return sicmutils.numsymb.sqrt(sicmutils.numsymb.mul(sicmutils.numsymb.conjugate(a),a));
}));
sicmutils.numsymb.real_part = (function sicmutils$numsymb$real_part(z){
if(sicmutils.value.number_QMARK_(z)){
return sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1(z);
} else {
return sicmutils.numsymb.mul(sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2((1),(2)),sicmutils.numsymb.add(z,sicmutils.numsymb.conjugate(z)));
}
});
sicmutils.numsymb.imag_part = (function sicmutils$numsymb$imag_part(z){
if(sicmutils.value.number_QMARK_(z)){
return sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1(z);
} else {
return sicmutils.numsymb.mul(sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2((1),(2)),sicmutils.numsymb.mul(sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$2((0),(-1)),sicmutils.numsymb.sub(z,sicmutils.numsymb.conjugate(z))));
}
});
sicmutils.numsymb.angle = sicmutils.numsymb.with_exactness_preserved(sicmutils.generic.angle,(function (z){
return sicmutils.numsymb.atan.cljs$core$IFn$_invoke$arity$2(sicmutils.numsymb.imag_part(z),sicmutils.numsymb.real_part(z));
}));
/**
 * Returns the symbolic dot product of the two supplied numbers `z1` and `z2`.
 * 
 *   If both are numbers, defers to [[sicmutils.generic/dot-product]]. Else,
 *   returns
 * 
 *   $$\Re(z_1)\Re(z_2) + \Im(z_1)\Im(z_2)$$
 */
sicmutils.numsymb.dot_product = (function sicmutils$numsymb$dot_product(z1,z2){
if(((sicmutils.value.number_QMARK_(z1)) && (sicmutils.value.number_QMARK_(z2)))){
return sicmutils.generic.dot_product.cljs$core$IFn$_invoke$arity$2(z1,z2);
} else {
if(sicmutils.value.real_QMARK_(z1)){
return sicmutils.numsymb.mul(z1,sicmutils.numsymb.real_part(z2));
} else {
if(sicmutils.value.real_QMARK_(z2)){
return sicmutils.numsymb.mul(sicmutils.numsymb.real_part(z1),z2);
} else {
return sicmutils.numsymb.add(sicmutils.numsymb.mul(sicmutils.numsymb.real_part(z1),sicmutils.numsymb.real_part(z2)),sicmutils.numsymb.mul(sicmutils.numsymb.imag_part(z1),sicmutils.numsymb.imag_part(z2)));

}
}
}
});
/**
 * Returns the symbolic derivative of the expression `expr`, which should
 *   represent a function like `f`.
 * 
 *   If the expression is already a derivative like `(D f)` or `((expt D 2) f)`,
 *   `derivative` will increase the power of the exponent.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (derivative 'f)              ;;=> (D f)
 *   (derivative '(D f))          ;;=> ((expt D 2) f)
 *   (derivative '((expt D 2) f)) ;;=> ((expt D 3) f)
 *   ```
 */
sicmutils.numsymb.derivative = (function sicmutils$numsymb$derivative(expr){
if(cljs.core.truth_(sicmutils.numsymb.derivative_QMARK_(expr))){
var f = cljs.core.first((sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1(expr) : sicmutils.numsymb.operands.call(null,expr)));
return (new cljs.core.List(null,sicmutils.numsymb.expt(sicmutils.generic.derivative_symbol,(2)),(new cljs.core.List(null,f,null,(1),null)),(2),null));
} else {
if(cljs.core.truth_(sicmutils.numsymb.iterated_derivative_QMARK_(expr))){
var pow = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((sicmutils.numsymb.operator.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operator.cljs$core$IFn$_invoke$arity$1(expr) : sicmutils.numsymb.operator.call(null,expr)),(2));
var f = cljs.core.first((sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.operands.cljs$core$IFn$_invoke$arity$1(expr) : sicmutils.numsymb.operands.call(null,expr)));
return (new cljs.core.List(null,sicmutils.numsymb.expt(sicmutils.generic.derivative_symbol,(pow + (1))),(new cljs.core.List(null,f,null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,sicmutils.generic.derivative_symbol,(new cljs.core.List(null,expr,null,(1),null)),(2),null));

}
}
});
/**
 * For symbolic arguments, returns a symbolic expression representing the logical
 *   conjuction of `l` and `r`.
 * 
 *   If either side is `true?`, returns the other side. If either side is `false?`,
 *   returns `false`.
 */
sicmutils.numsymb.sym_COLON_and = (function sicmutils$numsymb$sym_COLON_and(l,r){
if(l === true){
return r;
} else {
if(l === false){
return l;
} else {
if(r === true){
return l;
} else {
if(r === false){
return r;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,r)){
return r;
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"and","and",668631710,null),(new cljs.core.List(null,l,(new cljs.core.List(null,r,null,(1),null)),(2),null)),(3),null));

}
}
}
}
}
});
/**
 * For symbolic arguments, returns a symbolic expression representing the logical
 *   disjunction of `l` and `r`.
 * 
 *   If either side is `true?`, returns `true`. If either side is `false?`,
 *   returns the other side.
 */
sicmutils.numsymb.sym_COLON_or = (function sicmutils$numsymb$sym_COLON_or(l,r){
if(l === true){
return l;
} else {
if(l === false){
return r;
} else {
if(r === true){
return r;
} else {
if(r === false){
return l;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,r)){
return r;
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"or","or",1876275696,null),(new cljs.core.List(null,l,(new cljs.core.List(null,r,null,(1),null)),(2),null)),(3),null));

}
}
}
}
}
});
/**
 * For symbolic `x`, returns a symbolic expression representing the logical
 *   negation of `x`. For boolean `x`, returns the negation of `x`.
 */
sicmutils.numsymb.sym_COLON_not = (function sicmutils$numsymb$sym_COLON_not(x){
if(cljs.core.boolean_QMARK_(x)){
return (!(x));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));
}
});
sicmutils.numsymb.sym_COLON_bin_EQ_ = (function sicmutils$numsymb$sym_COLON_bin_EQ_(l,r){
var num_l_QMARK_ = sicmutils.value.number_QMARK_(l);
var num_r_QMARK_ = sicmutils.value.number_QMARK_(r);
if(((num_l_QMARK_) && (num_r_QMARK_))){
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(l,r);
} else {
if(((num_l_QMARK_) || (num_r_QMARK_))){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,r)){
return true;
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),(new cljs.core.List(null,l,(new cljs.core.List(null,r,null,(1),null)),(2),null)),(3),null));

}
}
}
});
sicmutils.numsymb.sym_COLON__EQ_ = (function sicmutils$numsymb$sym_COLON__EQ_(var_args){
var G__82546 = arguments.length;
switch (G__82546) {
case 0:
return sicmutils.numsymb.sym_COLON__EQ_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sicmutils.numsymb.sym_COLON__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.numsymb.sym_COLON__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___82619 = arguments.length;
var i__4865__auto___82620 = (0);
while(true){
if((i__4865__auto___82620 < len__4864__auto___82619)){
args_arr__4885__auto__.push((arguments[i__4865__auto___82620]));

var G__82621 = (i__4865__auto___82620 + (1));
i__4865__auto___82620 = G__82621;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return sicmutils.numsymb.sym_COLON__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(sicmutils.numsymb.sym_COLON__EQ_.cljs$core$IFn$_invoke$arity$0 = (function (){
return true;
}));

(sicmutils.numsymb.sym_COLON__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (_){
return true;
}));

(sicmutils.numsymb.sym_COLON__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return sicmutils.numsymb.sym_COLON_bin_EQ_(x,y);
}));

(sicmutils.numsymb.sym_COLON__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var xs = cljs.core.cons(x,cljs.core.cons(y,more));
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),xs);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__82547){
var vec__82548 = p__82547;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82548,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82548,(1),null);
var temp__5751__auto__ = sicmutils.numsymb.sym_COLON_bin_EQ_(x__$1,y__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var eq = temp__5751__auto__;
return sicmutils.numsymb.sym_COLON_and(acc,eq);
} else {
return cljs.core.reduced(false);
}
}),true,pairs);
}));

/** @this {Function} */
(sicmutils.numsymb.sym_COLON__EQ_.cljs$lang$applyTo = (function (seq82542){
var G__82544 = cljs.core.first(seq82542);
var seq82542__$1 = cljs.core.next(seq82542);
var G__82545 = cljs.core.first(seq82542__$1);
var seq82542__$2 = cljs.core.next(seq82542__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82544,G__82545,seq82542__$2);
}));

(sicmutils.numsymb.sym_COLON__EQ_.cljs$lang$maxFixedArity = (2));

sicmutils.numsymb.sym_COLON_zero_QMARK_ = (function sicmutils$numsymb$sym_COLON_zero_QMARK_(x){
if(sicmutils.value.number_QMARK_(x)){
return sicmutils.value.zero_QMARK_(x);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),(new cljs.core.List(null,(0),(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null));
}
});
sicmutils.numsymb.sym_COLON_one_QMARK_ = (function sicmutils$numsymb$sym_COLON_one_QMARK_(x){
if(sicmutils.value.number_QMARK_(x)){
return sicmutils.value.one_QMARK_(x);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null));
}
});
sicmutils.numsymb.symbolic_operator_table = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"csch","csch",-1950330545,null),new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null),new cljs.core.Symbol(null,"cube","cube",138920159,null),new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),new cljs.core.Symbol(null,"sin","sin",1721439389,null),new cljs.core.Symbol(null,"tan","tan",-1380825876,null),new cljs.core.Symbol(null,"cos","cos",-1452677493,null),new cljs.core.Symbol(null,"gcd","gcd",1659909537,null),new cljs.core.Symbol(null,"modulo","modulo",725580254,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"abs","abs",1394505050,null),new cljs.core.Symbol(null,"invert","invert",-1100858266,null),new cljs.core.Symbol(null,"dot-product","dot-product",-203055892,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"real-part","real-part",-2001752061,null),new cljs.core.Symbol(null,"log","log",45015523,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),new cljs.core.Symbol(null,"coth","coth",1130257730,null),new cljs.core.Symbol(null,"expt","expt",2123850345,null),new cljs.core.Symbol(null,"fractional-part","fractional-part",-505422086,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"sec","sec",60154974,null),new cljs.core.Symbol(null,"negate","negate",337772450,null),new cljs.core.Symbol(null,"sech","sech",-1403979131,null),new cljs.core.Symbol(null,"square","square",-1842001092,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"atan","atan",-1026550135,null),new cljs.core.Symbol(null,"make-rectangular","make-rectangular",-1494662174,null),new cljs.core.Symbol(null,"csc","csc",-427853492,null),new cljs.core.Symbol(null,"lcm","lcm",-1699262564,null),new cljs.core.Symbol(null,"acos","acos",353741763,null),new cljs.core.Symbol(null,"acot","acot",1103016569,null),new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Symbol(null,"imag-part","imag-part",2028041294,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"inner-product","inner-product",-1963110418,null),new cljs.core.Symbol(null,"ceiling","ceiling",-1593475279,null),new cljs.core.Symbol(null,"conjugate","conjugate",-1063123193,null),new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),new cljs.core.Symbol(null,"asin","asin",-904130570,null),new cljs.core.Symbol(null,"exp","exp",1378825265,null),new cljs.core.Symbol(null,"integer-part","integer-part",-1884537015,null),new cljs.core.Symbol(null,"derivative","derivative",-1233120304,null),new cljs.core.Symbol(null,"tanh","tanh",480481797,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"identity?","identity?",-1064576891,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null),new cljs.core.Symbol(null,"one?","one?",1787102903,null)],[sicmutils.numsymb.remainder,sicmutils.util.aggregate.monoid.cljs$core$IFn$_invoke$arity$3(sicmutils.numsymb.sym_COLON_and,true,cljs.core.false_QMARK_),sicmutils.numsymb.csch,sicmutils.numsymb.make_polar,(function (p1__82556_SHARP_){
return sicmutils.numsymb.expt(p1__82556_SHARP_,(3));
}),sicmutils.numsymb.sinh,sicmutils.numsymb.sin,sicmutils.numsymb.tan,sicmutils.numsymb.cos,sicmutils.util.aggregate.monoid.cljs$core$IFn$_invoke$arity$2(sicmutils.numsymb.gcd,(0)),sicmutils.numsymb.modulo,sicmutils.util.aggregate.group.cljs$core$IFn$_invoke$arity$5(sicmutils.numsymb.div,sicmutils.numsymb.mul,sicmutils.numsymb.invert,(1),sicmutils.value.zero_QMARK_),sicmutils.numsymb.abs,sicmutils.numsymb.invert,sicmutils.numsymb.dot_product,sicmutils.numsymb.sym_COLON_not,sicmutils.numsymb.real_part,sicmutils.numsymb.log,sicmutils.numsymb.sym_COLON__EQ_,sicmutils.numsymb.cosh,sicmutils.numsymb.coth,sicmutils.numsymb.expt,sicmutils.numsymb.fractional_part,sicmutils.util.aggregate.monoid.cljs$core$IFn$_invoke$arity$2(sicmutils.numsymb.add,(0)),sicmutils.numsymb.sec,sicmutils.numsymb.negate,sicmutils.numsymb.sech,(function (p1__82557_SHARP_){
return sicmutils.numsymb.expt(p1__82557_SHARP_,(2));
}),sicmutils.numsymb.magnitude,sicmutils.util.aggregate.monoid.cljs$core$IFn$_invoke$arity$3(sicmutils.numsymb.mul,(1),sicmutils.value.zero_QMARK_),sicmutils.numsymb.sym_COLON_zero_QMARK_,sicmutils.numsymb.atan,sicmutils.numsymb.make_rectangular,sicmutils.numsymb.csc,sicmutils.util.aggregate.monoid.cljs$core$IFn$_invoke$arity$3(sicmutils.numsymb.lcm,(1),sicmutils.value.zero_QMARK_),sicmutils.numsymb.acos,sicmutils.numsymb.acot,sicmutils.numsymb.floor,sicmutils.numsymb.imag_part,sicmutils.util.aggregate.group.cljs$core$IFn$_invoke$arity$4(sicmutils.numsymb.sub,sicmutils.numsymb.add,sicmutils.numsymb.negate,(0)),sicmutils.numsymb.dot_product,sicmutils.numsymb.ceiling,sicmutils.numsymb.conjugate,sicmutils.numsymb.sqrt,sicmutils.numsymb.asin,sicmutils.numsymb.exp,sicmutils.numsymb.integer_part,sicmutils.numsymb.derivative,sicmutils.numsymb.tanh,sicmutils.util.aggregate.monoid.cljs$core$IFn$_invoke$arity$3(sicmutils.numsymb.sym_COLON_or,false,cljs.core.true_QMARK_),sicmutils.numsymb.sym_COLON_one_QMARK_,sicmutils.numsymb.angle,sicmutils.numsymb.sym_COLON_one_QMARK_]);
/**
 * Given a symbol (like `'+`) returns an applicable operator if there is a
 *   corresponding symbolic operator construction available.
 */
sicmutils.numsymb.symbolic_operator = (function sicmutils$numsymb$symbolic_operator(s){
return (sicmutils.numsymb.symbolic_operator_table.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numsymb.symbolic_operator_table.cljs$core$IFn$_invoke$arity$1(s) : sicmutils.numsymb.symbolic_operator_table.call(null,s));
});

//# sourceMappingURL=sicmutils.numsymb.js.map
