goog.provide('sicmutils.operator');
/**
 * Simplifier that acts on associative products and sums, and collects
 *   products into exponents. Operator multiplication is NOT associative, so only
 *   adjacent products are collected.
 */
sicmutils.operator.simplify_operator_name = pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.simplify.rules.associative.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"*","*",345799209,null)], 0)),sicmutils.simplify.rules.exponent_contract,sicmutils.simplify.rules.unary_elimination.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"*","*",345799209,null)], 0))], 0));

/**
* @constructor
 * @implements {sicmutils.function$.IArity}
 * @implements {cljs.core.IFn}
 * @implements {sicmutils.differential.IPerturbed}
 * @implements {sicmutils.value.Value}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
sicmutils.operator.Operator = (function (o,arity,name,context,m){
this.o = o;
this.arity = arity;
this.name = name;
this.context = context;
this.m = m;
this.cljs$lang$protocol_mask$partition0$ = 393473;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sicmutils.operator.Operator.prototype.sicmutils$value$Value$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.operator.Operator.prototype.sicmutils$value$Value$zero_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5751__auto__ = new cljs.core.Keyword(null,"zero?","zero?",-1314772630).cljs$core$IFn$_invoke$arity$1(self__.context);
if(cljs.core.truth_(temp__5751__auto__)){
var z_fn = temp__5751__auto__;
return (z_fn.cljs$core$IFn$_invoke$arity$1 ? z_fn.cljs$core$IFn$_invoke$arity$1(this$__$1) : z_fn.call(null,this$__$1));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.o,sicmutils.value.zero_like);
}
}));

(sicmutils.operator.Operator.prototype.sicmutils$value$Value$one_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5751__auto__ = new cljs.core.Keyword(null,"one?","one?",146571376).cljs$core$IFn$_invoke$arity$1(self__.context);
if(cljs.core.truth_(temp__5751__auto__)){
var one_fn = temp__5751__auto__;
return (one_fn.cljs$core$IFn$_invoke$arity$1 ? one_fn.cljs$core$IFn$_invoke$arity$1(this$__$1) : one_fn.call(null,this$__$1));
} else {
return false;
}
}));

(sicmutils.operator.Operator.prototype.sicmutils$value$Value$identity_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5751__auto__ = new cljs.core.Keyword(null,"identity?","identity?",1589858878).cljs$core$IFn$_invoke$arity$1(self__.context);
if(cljs.core.truth_(temp__5751__auto__)){
var id_fn = temp__5751__auto__;
return (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(this$__$1) : id_fn.call(null,this$__$1));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.o,cljs.core.identity);
}
}));

(sicmutils.operator.Operator.prototype.sicmutils$value$Value$zero_like$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5751__auto__ = new cljs.core.Keyword(null,"zero-like","zero-like",1759410522).cljs$core$IFn$_invoke$arity$1(self__.context);
if(cljs.core.truth_(temp__5751__auto__)){
var z_fn = temp__5751__auto__;
return (z_fn.cljs$core$IFn$_invoke$arity$1 ? z_fn.cljs$core$IFn$_invoke$arity$1(this$__$1) : z_fn.call(null,this$__$1));
} else {
return (new sicmutils.operator.Operator(sicmutils.value.zero_like,self__.arity,new cljs.core.Symbol(null,"zero","zero",781566951,null),self__.context,self__.m));
}
}));

(sicmutils.operator.Operator.prototype.sicmutils$value$Value$one_like$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5751__auto__ = new cljs.core.Keyword(null,"one-like","one-like",887133720).cljs$core$IFn$_invoke$arity$1(self__.context);
if(cljs.core.truth_(temp__5751__auto__)){
var one_fn = temp__5751__auto__;
return (one_fn.cljs$core$IFn$_invoke$arity$1 ? one_fn.cljs$core$IFn$_invoke$arity$1(this$__$1) : one_fn.call(null,this$__$1));
} else {
return (new sicmutils.operator.Operator(cljs.core.identity,self__.arity,new cljs.core.Symbol(null,"identity","identity",-1007039734,null),self__.context,self__.m));
}
}));

(sicmutils.operator.Operator.prototype.sicmutils$value$Value$identity_like$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5751__auto__ = new cljs.core.Keyword(null,"identity-like","identity-like",-98546347).cljs$core$IFn$_invoke$arity$1(self__.context);
if(cljs.core.truth_(temp__5751__auto__)){
var id_fn = temp__5751__auto__;
return (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(this$__$1) : id_fn.call(null,this$__$1));
} else {
return (new sicmutils.operator.Operator(cljs.core.identity,self__.arity,new cljs.core.Symbol(null,"identity","identity",-1007039734,null),self__.context,self__.m));
}
}));

(sicmutils.operator.Operator.prototype.sicmutils$value$Value$freeze$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__99612 = sicmutils.value.freeze(self__.name);
return (sicmutils.operator.simplify_operator_name.cljs$core$IFn$_invoke$arity$1 ? sicmutils.operator.simplify_operator_name.cljs$core$IFn$_invoke$arity$1(G__99612) : sicmutils.operator.simplify_operator_name.call(null,G__99612));
}));

(sicmutils.operator.Operator.prototype.sicmutils$value$Value$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"subtype","subtype",-2092672993).cljs$core$IFn$_invoke$arity$1(self__.context);
}));

(sicmutils.operator.Operator.prototype.sicmutils$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.operator.Operator.prototype.sicmutils$function$IArity$arity$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.arity;
}));

(sicmutils.operator.Operator.prototype.sicmutils$differential$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.operator.Operator.prototype.sicmutils$differential$IPerturbed$perturbed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(sicmutils.operator.Operator.prototype.sicmutils$differential$IPerturbed$replace_tag$arity$3 = (function (_,old,new$){
var self__ = this;
var ___$1 = this;
return (new sicmutils.operator.Operator(sicmutils.differential.replace_tag(self__.o,old,new$),self__.arity,self__.name,self__.context,self__.m));
}));

(sicmutils.operator.Operator.prototype.sicmutils$differential$IPerturbed$extract_tangent$arity$2 = (function (_,tag){
var self__ = this;
var ___$1 = this;
return (new sicmutils.operator.Operator(sicmutils.differential.extract_tangent(self__.o,tag),self__.arity,self__.name,self__.context,self__.m));
}));

(sicmutils.operator.Operator.prototype.toString = (function (){
var self__ = this;
var o__$1 = this;
var n = o__$1.sicmutils$value$Value$freeze$arity$1(null);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.seqable_QMARK_(n))?cljs.core.seq(n):n));
}));

(sicmutils.operator.Operator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(sicmutils.operator.Operator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,meta){
var self__ = this;
var ___$1 = this;
return (new sicmutils.operator.Operator(self__.o,self__.arity,self__.name,self__.context,meta));
}));

(sicmutils.operator.Operator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return (sicmutils.operator.op_COLON_get.cljs$core$IFn$_invoke$arity$2 ? sicmutils.operator.op_COLON_get.cljs$core$IFn$_invoke$arity$2(this$__$1,k) : sicmutils.operator.op_COLON_get.call(null,this$__$1,k));
}));

(sicmutils.operator.Operator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return sicmutils.util.illegal("Operators don't support the not-found arity of get!");
}));

(sicmutils.operator.Operator.prototype.call = (function (unused__43952__auto__){
var self__ = this;
var self__ = this;
var G__99619 = (arguments.length - (1));
switch (G__99619) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (4):
return self__.cljs$core$IFn$_invoke$arity$4((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case (5):
return self__.cljs$core$IFn$_invoke$arity$5((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case (6):
return self__.cljs$core$IFn$_invoke$arity$6((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case (7):
return self__.cljs$core$IFn$_invoke$arity$7((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case (8):
return self__.cljs$core$IFn$_invoke$arity$8((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case (9):
return self__.cljs$core$IFn$_invoke$arity$9((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case (10):
return self__.cljs$core$IFn$_invoke$arity$10((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
case (11):
return self__.cljs$core$IFn$_invoke$arity$11((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
case (12):
return self__.cljs$core$IFn$_invoke$arity$12((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]));

break;
case (13):
return self__.cljs$core$IFn$_invoke$arity$13((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]));

break;
case (14):
return self__.cljs$core$IFn$_invoke$arity$14((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]));

break;
case (15):
return self__.cljs$core$IFn$_invoke$arity$15((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]));

break;
case (16):
return self__.cljs$core$IFn$_invoke$arity$16((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]));

break;
case (17):
return self__.cljs$core$IFn$_invoke$arity$17((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]));

break;
case (18):
return self__.cljs$core$IFn$_invoke$arity$18((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]));

break;
case (19):
return self__.cljs$core$IFn$_invoke$arity$19((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]));

break;
case (20):
return self__.cljs$core$IFn$_invoke$arity$20((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]),(arguments[(20)]));

break;
case (21):
return self__.cljs$core$IFn$_invoke$arity$21((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]),(arguments[(20)]),(arguments[(21)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(sicmutils.operator.Operator.prototype.apply = (function (self__,args99605){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args99605)));
}));

(sicmutils.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$1 ? self__.o.cljs$core$IFn$_invoke$arity$1(a) : self__.o.call(null,a));
}));

(sicmutils.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$2 ? self__.o.cljs$core$IFn$_invoke$arity$2(a,b) : self__.o.call(null,a,b));
}));

(sicmutils.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$3 ? self__.o.cljs$core$IFn$_invoke$arity$3(a,b,c) : self__.o.call(null,a,b,c));
}));

(sicmutils.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$4 ? self__.o.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : self__.o.call(null,a,b,c,d));
}));

(sicmutils.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$5 ? self__.o.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : self__.o.call(null,a,b,c,d,e));
}));

(sicmutils.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$6 ? self__.o.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f) : self__.o.call(null,a,b,c,d,e,f));
}));

(sicmutils.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$7 ? self__.o.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f,g) : self__.o.call(null,a,b,c,d,e,f,g));
}));

(sicmutils.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$8 ? self__.o.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f,g,h) : self__.o.call(null,a,b,c,d,e,f,g,h));
}));

(sicmutils.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$9 ? self__.o.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f,g,h,i) : self__.o.call(null,a,b,c,d,e,f,g,h,i));
}));

(sicmutils.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$10 ? self__.o.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f,g,h,i,j) : self__.o.call(null,a,b,c,d,e,f,g,h,i,j));
}));

(sicmutils.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$11 ? self__.o.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f,g,h,i,j,k) : self__.o.call(null,a,b,c,d,e,f,g,h,i,j,k));
}));

(sicmutils.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$12 ? self__.o.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f,g,h,i,j,k,l) : self__.o.call(null,a,b,c,d,e,f,g,h,i,j,k,l));
}));

(sicmutils.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$13 ? self__.o.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f,g,h,i,j,k,l,m__$1) : self__.o.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m__$1));
}));

(sicmutils.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$14 ? self__.o.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n) : self__.o.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n));
}));

(sicmutils.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$15 ? self__.o.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg) : self__.o.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg));
}));

(sicmutils.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$16 ? self__.o.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p) : self__.o.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p));
}));

(sicmutils.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$17 ? self__.o.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q) : self__.o.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q));
}));

(sicmutils.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q,r){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$18 ? self__.o.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q,r) : self__.o.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q,r));
}));

(sicmutils.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q,r,s){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$19 ? self__.o.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q,r,s) : self__.o.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q,r,s));
}));

(sicmutils.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q,r,s,t){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$20 ? self__.o.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q,r,s,t) : self__.o.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q,r,s,t));
}));

(sicmutils.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.o,a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q,r,s,t,rest], 0));
}));

(sicmutils.operator.Operator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Symbol(null,"arity","arity",-168024608,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"context","context",810340414,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null);
}));

(sicmutils.operator.Operator.cljs$lang$type = true);

(sicmutils.operator.Operator.cljs$lang$ctorStr = "sicmutils.operator/Operator");

(sicmutils.operator.Operator.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"sicmutils.operator/Operator");
}));

/**
 * Positional factory function for sicmutils.operator/Operator.
 */
sicmutils.operator.__GT_Operator = (function sicmutils$operator$__GT_Operator(o,arity,name,context,m){
return (new sicmutils.operator.Operator(o,arity,name,context,m));
});

(sicmutils.operator.Operator.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.operator.Operator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var x__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1.toString()], 0));
}));
/**
 * Returns true if the supplied `x` is an instance of [[Operator]], false
 *   otherwise.
 */
sicmutils.operator.operator_QMARK_ = (function sicmutils$operator$operator_QMARK_(x){
return (x instanceof sicmutils.operator.Operator);
});
/**
 * Returns the backing procedure of the supplied [[Operator]]. Errors if a
 *   non-[[Operator]] is supplied.
 */
sicmutils.operator.procedure = (function sicmutils$operator$procedure(op){
if(sicmutils.operator.operator_QMARK_(op)){
return op.o;
} else {
return sicmutils.util.illegal(["non-operator supplied: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join(''));
}
});
/**
 * Returns the arity of the supplied [[Operator]]. Errors if a non-[[Operator]] is
 *   supplied.
 */
sicmutils.operator.arity = (function sicmutils$operator$arity(op){
if(sicmutils.operator.operator_QMARK_(op)){
return op.arity;
} else {
return sicmutils.util.illegal(["non-operator supplied: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join(''));
}
});
/**
 * Returns the stored name of the supplied [[Operator]]. Errors if a
 *   non-[[Operator]] is supplied.
 */
sicmutils.operator.name = (function sicmutils$operator$name(op){
if(sicmutils.operator.operator_QMARK_(op)){
return op.name;
} else {
return sicmutils.util.illegal(["non-operator supplied: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join(''));
}
});
/**
 * Returns the context field of the supplied [[Operator]]. Errors if a
 *   non-[[Operator]] is supplied.
 */
sicmutils.operator.context = (function sicmutils$operator$context(op){
if(sicmutils.operator.operator_QMARK_(op)){
return op.context;
} else {
return sicmutils.util.illegal(["non-operator supplied: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join(''));
}
});
/**
 * Returns a copy of the supplied operator with `ctx` substituted for its
 *   context.
 */
sicmutils.operator.with_context = (function sicmutils$operator$with_context(op,ctx){
if(sicmutils.operator.operator_QMARK_(op)){
var op__$1 = op;
return sicmutils.operator.__GT_Operator(op__$1.o,op__$1.arity,op__$1.name,ctx,op__$1.m);
} else {
return sicmutils.util.illegal(["non-operator supplied: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join(''));
}
});
/**
 * Returns an [[Operator]] wrapping the supplied procedure `f` with the symbolic
 *   name `name`. (`name` defaults to `'???`.)
 * 
 *   Optionally accepts a `context` map that will be stored inside the
 *   returned [[Operator]].
 */
sicmutils.operator.make_operator = (function sicmutils$operator$make_operator(var_args){
var G__99622 = arguments.length;
switch (G__99622) {
case 1:
return sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$1 = (function (f){
return sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Symbol(null,"???","???",1210272185,null),cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$2 = (function (f,name){
return sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$3(f,name,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$3 = (function (f,name,context){
return sicmutils.operator.__GT_Operator(f,new cljs.core.Keyword(null,"arity","arity",-1808556135).cljs$core$IFn$_invoke$arity$2(context,sicmutils.function$.arity(f)),name,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subtype","subtype",-2092672993),new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017)], null),context),null);
}));

(sicmutils.operator.make_operator.cljs$lang$maxFixedArity = 3);

/**
 * Returns an [[Operator]] that composes a lookup of the form `#(get % k)` with
 *   the wrapped procedure of the [[Operator]] `o`.
 */
sicmutils.operator.op_COLON_get = (function sicmutils$operator$op_COLON_get(o,k){
return sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$2(sicmutils.function$.get.cljs$core$IFn$_invoke$arity$2(sicmutils.operator.procedure(o),k),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"compose","compose",1144740903,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"component","component",-1098498987,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sicmutils.operator.name(o),null,(1),null))], 0)))));
});
/**
 * Identity operator. Returns its argument unchanged.
 */
sicmutils.operator.identity = sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.Symbol(null,"identity","identity",-1007039734,null));
/**
 * Merges type context maps of the two operators. Where the maps have keys in
 *   common, they must agree; disjoint keys become part of the new joint context.
 * 
 *   The exception is the :subtype key; if the values aren't
 *   equal, [[joint-context]] chooses the parent if one derives from the other, or
 *   throws if not.
 */
sicmutils.operator.joint_context = (function sicmutils$operator$joint_context(o,p){
if(sicmutils.operator.operator_QMARK_(o)){
} else {
throw (new Error("Assert failed: (operator? o)"));
}

if(sicmutils.operator.operator_QMARK_(p)){
} else {
throw (new Error("Assert failed: (operator? p)"));
}

return cljs.core.reduce_kv((function (joint_ctx,k,v){
var temp__5751__auto__ = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(joint_ctx) : k.call(null,joint_ctx));
if(cljs.core.truth_(temp__5751__auto__)){
var cv = temp__5751__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cv)){
return joint_ctx;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"subtype","subtype",-2092672993))) && (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(cv,v)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(joint_ctx,k,v);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"subtype","subtype",-2092672993))) && (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(v,cv)))){
return joint_ctx;
} else {
return sicmutils.util.illegal(["incompatible operator context: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.operator.context(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.operator.context(p))," at key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

}
}
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(joint_ctx,k,v);
}
}),sicmutils.operator.context(o),sicmutils.operator.context(p));
});
/**
 * Returns a new operator generated by combining a non-operator `f` on the left
 *   with an operator `o` on the right, using the binary operation `op`.
 * 
 *   `sym` is used to generate a proper symbolic name for the new operator.
 * 
 *   The combination occurs by coercing `f` to an operator that composes with its
 *   argument before combining with `operator`. As an example, the following two
 *   expressions are equivalent:
 * 
 *   (+ <f> <operator>)
 * 
 *   (+ (make-operator (fn [g] (comp <f> g)) <name>)
 *   <operator>)
 * 
 *   If `f` isn't already a function it's coerced to a function via `(constantly
 *   <f>)`.
 */
sicmutils.operator.combine_f_op = (function sicmutils$operator$combine_f_op(op,sym,f,o){
var h = sicmutils.function$.coerce_to_fn(f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null));
return sicmutils.operator.__GT_Operator((function (g){
var G__99623 = sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([h,g], 0));
var G__99624 = (o.cljs$core$IFn$_invoke$arity$1 ? o.cljs$core$IFn$_invoke$arity$1(g) : o.call(null,g));
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__99623,G__99624) : op.call(null,G__99623,G__99624));
}),sicmutils.operator.arity(o),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(f),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sicmutils.operator.name(o),null,(1),null))], 0)))),sicmutils.operator.context(o),null);
});
/**
 * Returns a new operator generated by combining an operator `o` on the left with
 *   a non-operator `f` on the right, using the binary operation `op`.
 * 
 *   `sym` is used to generate a proper symbolic name for the new operator.
 * 
 *   The combination occurs by coercing `f` to an operator that composes with its
 *   argument before combining with `operator`. As an example, the following two
 *   expressions are equivalent:
 * 
 *   (+ <operator> <f>)
 * 
 *   (+ <operator>
 *   (make-operator (fn [g] (comp <f> g)) <name>))
 * 
 *   If `f` isn't already a function it's coerced to a function via `(constantly
 *   <f>)`.
 */
sicmutils.operator.combine_op_f = (function sicmutils$operator$combine_op_f(op,sym,o,f){
var h = sicmutils.function$.coerce_to_fn(f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null));
return sicmutils.operator.__GT_Operator((function (g){
var G__99625 = (o.cljs$core$IFn$_invoke$arity$1 ? o.cljs$core$IFn$_invoke$arity$1(g) : o.call(null,g));
var G__99626 = sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([h,g], 0));
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__99625,G__99626) : op.call(null,G__99625,G__99626));
}),sicmutils.operator.arity(o),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,sicmutils.operator.name(o),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sicmutils.value.freeze(f),null,(1),null))], 0)))),sicmutils.operator.context(o),null);
});
/**
 * Returns a new operator that composes [[g/negate]] with its own wrapped
 *   operation. Equivalent to:
 * 
 *   (g/* (make-operator g/negate 'negate) o)
 */
sicmutils.operator.negate = (function sicmutils$operator$negate(o){
return sicmutils.operator.__GT_Operator((function() { 
var G__99698__delegate = function (fs){
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(o,fs));
};
var G__99698 = function (var_args){
var fs = null;
if (arguments.length > 0) {
var G__99699__i = 0, G__99699__a = new Array(arguments.length -  0);
while (G__99699__i < G__99699__a.length) {G__99699__a[G__99699__i] = arguments[G__99699__i + 0]; ++G__99699__i;}
  fs = new cljs.core.IndexedSeq(G__99699__a,0,null);
} 
return G__99698__delegate.call(this,fs);};
G__99698.cljs$lang$maxFixedArity = 0;
G__99698.cljs$lang$applyTo = (function (arglist__99700){
var fs = cljs.core.seq(arglist__99700);
return G__99698__delegate(fs);
});
G__99698.cljs$core$IFn$_invoke$arity$variadic = G__99698__delegate;
return G__99698;
})()
,sicmutils.operator.arity(o),(new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,sicmutils.operator.name(o),null,(1),null)),(2),null)),sicmutils.operator.context(o),cljs.core.meta(o));
});
/**
 * Subtract one operator from another. Produces an operator which computes the
 *   difference of applying the supplied operators.
 */
sicmutils.operator.o_COLON__ = (function sicmutils$operator$o_COLON__(o,p){
var ctx = sicmutils.operator.joint_context(o,p);
if(sicmutils.value.zero_QMARK_(p)){
return sicmutils.operator.with_context(o,ctx);
} else {
return sicmutils.operator.__GT_Operator((function() { 
var G__99701__delegate = function (xs){
return sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(o,xs),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(p,xs));
};
var G__99701 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__99702__i = 0, G__99702__a = new Array(arguments.length -  0);
while (G__99702__i < G__99702__a.length) {G__99702__a[G__99702__i] = arguments[G__99702__i + 0]; ++G__99702__i;}
  xs = new cljs.core.IndexedSeq(G__99702__a,0,null);
} 
return G__99701__delegate.call(this,xs);};
G__99701.cljs$lang$maxFixedArity = 0;
G__99701.cljs$lang$applyTo = (function (arglist__99703){
var xs = cljs.core.seq(arglist__99703);
return G__99701__delegate(xs);
});
G__99701.cljs$core$IFn$_invoke$arity$variadic = G__99701__delegate;
return G__99701;
})()
,sicmutils.function$.joint_arity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.operator.arity(o),sicmutils.operator.arity(p)], null)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),null,(1),null)),(new cljs.core.List(null,sicmutils.operator.name(o),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sicmutils.operator.name(p),null,(1),null))], 0)))),ctx,null);
}
});
sicmutils.operator.f_o = (function sicmutils$operator$f_o(f,o){
return sicmutils.operator.combine_f_op(sicmutils.generic.sub,new cljs.core.Symbol(null,"-","-",-471816912,null),f,o);
});
sicmutils.operator.o_f = (function sicmutils$operator$o_f(o,f){
return sicmutils.operator.combine_op_f(sicmutils.generic.sub,new cljs.core.Symbol(null,"-","-",-471816912,null),o,f);
});
/**
 * Add two operators. Produces an operator which adds the result of applying the
 *   given operators.
 */
sicmutils.operator.o_COLON__PLUS_ = (function sicmutils$operator$o_COLON__PLUS_(o,p){
var ctx = sicmutils.operator.joint_context(o,p);
if(sicmutils.value.zero_QMARK_(o)){
return sicmutils.operator.with_context(p,ctx);
} else {
if(sicmutils.value.zero_QMARK_(p)){
return sicmutils.operator.with_context(o,ctx);
} else {
return sicmutils.operator.__GT_Operator((function() { 
var G__99704__delegate = function (xs){
return sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(o,xs),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(p,xs));
};
var G__99704 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__99705__i = 0, G__99705__a = new Array(arguments.length -  0);
while (G__99705__i < G__99705__a.length) {G__99705__a[G__99705__i] = arguments[G__99705__i + 0]; ++G__99705__i;}
  xs = new cljs.core.IndexedSeq(G__99705__a,0,null);
} 
return G__99704__delegate.call(this,xs);};
G__99704.cljs$lang$maxFixedArity = 0;
G__99704.cljs$lang$applyTo = (function (arglist__99706){
var xs = cljs.core.seq(arglist__99706);
return G__99704__delegate(xs);
});
G__99704.cljs$core$IFn$_invoke$arity$variadic = G__99704__delegate;
return G__99704;
})()
,sicmutils.function$.joint_arity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.function$.arity(o),sicmutils.function$.arity(p)], null)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,(1),null)),(new cljs.core.List(null,sicmutils.operator.name(o),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sicmutils.operator.name(p),null,(1),null))], 0)))),ctx,null);

}
}
});
sicmutils.operator.f_PLUS_o = (function sicmutils$operator$f_PLUS_o(f,o){
return sicmutils.operator.combine_f_op(sicmutils.generic.add,new cljs.core.Symbol(null,"+","+",-740910886,null),f,o);
});
sicmutils.operator.o_PLUS_f = (function sicmutils$operator$o_PLUS_f(o,f){
return sicmutils.operator.combine_op_f(sicmutils.generic.add,new cljs.core.Symbol(null,"+","+",-740910886,null),o,f);
});
/**
 * Multiplication of operators is defined as their composition.
 */
sicmutils.operator.o_COLON__STAR_ = (function sicmutils$operator$o_COLON__STAR_(var_args){
var G__99628 = arguments.length;
switch (G__99628) {
case 0:
return sicmutils.operator.o_COLON__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sicmutils.operator.o_COLON__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.operator.o_COLON__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.operator.o_COLON__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return sicmutils.operator.identity;
}));

(sicmutils.operator.o_COLON__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (o){
return o;
}));

(sicmutils.operator.o_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 = (function (o,p){
var ctx = sicmutils.operator.joint_context(o,p);
if(sicmutils.value.identity_QMARK_(o)){
return sicmutils.operator.with_context(p,ctx);
} else {
if(sicmutils.value.identity_QMARK_(p)){
return sicmutils.operator.with_context(o,ctx);
} else {
if(sicmutils.value.zero_QMARK_(o)){
return sicmutils.operator.with_context(o,ctx);
} else {
return sicmutils.operator.__GT_Operator(sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o,p], 0)),sicmutils.operator.arity(p),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),(new cljs.core.List(null,sicmutils.operator.name(o),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sicmutils.operator.name(p),null,(1),null))], 0)))),ctx,null);

}
}
}
}));

(sicmutils.operator.o_COLON__STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Multiply an operator by a non-operator on the left. The non-operator acts on
 *   its argument by multiplication.
 */
sicmutils.operator.f_STAR_o = (function sicmutils$operator$f_STAR_o(f,o){
return sicmutils.operator.__GT_Operator((function() { 
var G__99709__delegate = function (gs){
return sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(o,gs));
};
var G__99709 = function (var_args){
var gs = null;
if (arguments.length > 0) {
var G__99710__i = 0, G__99710__a = new Array(arguments.length -  0);
while (G__99710__i < G__99710__a.length) {G__99710__a[G__99710__i] = arguments[G__99710__i + 0]; ++G__99710__i;}
  gs = new cljs.core.IndexedSeq(G__99710__a,0,null);
} 
return G__99709__delegate.call(this,gs);};
G__99709.cljs$lang$maxFixedArity = 0;
G__99709.cljs$lang$applyTo = (function (arglist__99711){
var gs = cljs.core.seq(arglist__99711);
return G__99709__delegate(gs);
});
G__99709.cljs$core$IFn$_invoke$arity$variadic = G__99709__delegate;
return G__99709;
})()
,sicmutils.operator.arity(o),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(f),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sicmutils.operator.name(o),null,(1),null))], 0)))),sicmutils.operator.context(o),cljs.core.meta(o));
});
/**
 * Multiply an operator by a non-operator on the right. The non-operator acts on
 *   its argument by multiplication.
 */
sicmutils.operator.o_STAR_f = (function sicmutils$operator$o_STAR_f(o,f){
return sicmutils.operator.__GT_Operator((function() { 
var G__99712__delegate = function (gs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(o,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (g){
return sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(f,g);
}),gs));
};
var G__99712 = function (var_args){
var gs = null;
if (arguments.length > 0) {
var G__99713__i = 0, G__99713__a = new Array(arguments.length -  0);
while (G__99713__i < G__99713__a.length) {G__99713__a[G__99713__i] = arguments[G__99713__i + 0]; ++G__99713__i;}
  gs = new cljs.core.IndexedSeq(G__99713__a,0,null);
} 
return G__99712__delegate.call(this,gs);};
G__99712.cljs$lang$maxFixedArity = 0;
G__99712.cljs$lang$applyTo = (function (arglist__99714){
var gs = cljs.core.seq(arglist__99714);
return G__99712__delegate(gs);
});
G__99712.cljs$core$IFn$_invoke$arity$variadic = G__99712__delegate;
return G__99712;
})()
,sicmutils.operator.arity(o),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),(new cljs.core.List(null,sicmutils.operator.name(o),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sicmutils.value.freeze(f),null,(1),null))], 0)))),sicmutils.operator.context(o),cljs.core.meta(o));
});
/**
 * Returns a new operator that multiplies the output of `o` by the inverse of
 *   `n`.
 */
sicmutils.operator.o_div_n = (function sicmutils$operator$o_div_n(o,n){
return sicmutils.operator.__GT_Operator((function() { 
var G__99715__delegate = function (gs){
return sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(n),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(o,gs));
};
var G__99715 = function (var_args){
var gs = null;
if (arguments.length > 0) {
var G__99716__i = 0, G__99716__a = new Array(arguments.length -  0);
while (G__99716__i < G__99716__a.length) {G__99716__a[G__99716__i] = arguments[G__99716__i + 0]; ++G__99716__i;}
  gs = new cljs.core.IndexedSeq(G__99716__a,0,null);
} 
return G__99715__delegate.call(this,gs);};
G__99715.cljs$lang$maxFixedArity = 0;
G__99715.cljs$lang$applyTo = (function (arglist__99717){
var gs = cljs.core.seq(arglist__99717);
return G__99715__delegate(gs);
});
G__99715.cljs$core$IFn$_invoke$arity$variadic = G__99715__delegate;
return G__99715;
})()
,sicmutils.operator.arity(o),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),null,(1),null)),(new cljs.core.List(null,sicmutils.operator.name(o),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null))], 0)))),sicmutils.operator.context(o),cljs.core.meta(o));
});
sicmutils.operator.commutator = (function sicmutils$operator$commutator(o,p){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(o,p),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(p,o));
});
sicmutils.operator.anticommutator = (function sicmutils$operator$anticommutator(o,p){
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(o,p),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(p,o));
});
/**
 * Returns an operator represented by a Taylor series expansion of $e^x$, applied
 *   to `op`. This expanded series of operators is itself an operator that applies
 *   each element to its argument.
 * 
 *   Put another way: `(exp g)` to an operator g means forming the power series
 * 
 *   ```
 *   I + g + 1/2 g^2 + ... + 1/n! g^n
 *   ```
 * 
 *   where (as elsewhere) exponentiating the operator means `n`-fold composition.
 */
sicmutils.operator.exp = (function sicmutils$operator$exp(op){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.operator.arity(op),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null))){
} else {
throw (new Error(["Assert failed: ","sicmutils.operator/exp","\n","(= (arity op) [:exactly 1])"].join('')));
}

return sicmutils.operator.__GT_Operator((sicmutils.series.exp_series.cljs$core$IFn$_invoke$arity$1 ? sicmutils.series.exp_series.cljs$core$IFn$_invoke$arity$1(op) : sicmutils.series.exp_series.call(null,op)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),null,(1),null)),(new cljs.core.List(null,sicmutils.operator.name(op),null,(1),null))))),sicmutils.operator.context(op),cljs.core.meta(op));
});
/**
 * Similar to `exp`, but takes an optional argument `n` that defines an order for
 *   each term of the taylor series expansion.
 */
sicmutils.operator.expn = (function sicmutils$operator$expn(var_args){
var G__99630 = arguments.length;
switch (G__99630) {
case 1:
return sicmutils.operator.expn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.operator.expn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.operator.expn.cljs$core$IFn$_invoke$arity$1 = (function (op){
return sicmutils.operator.exp(op);
}));

(sicmutils.operator.expn.cljs$core$IFn$_invoke$arity$2 = (function (op,n){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.operator.arity(op),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null))){
} else {
throw (new Error(["Assert failed: ","sicmutils.operator/expn","\n","(= (arity op) [:exactly 1])"].join('')));
}

return sicmutils.operator.__GT_Operator(sicmutils.series.inflate((sicmutils.series.exp_series.cljs$core$IFn$_invoke$arity$1 ? sicmutils.series.exp_series.cljs$core$IFn$_invoke$arity$1(op) : sicmutils.series.exp_series.call(null,op)),n),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),null,(1),null)),(new cljs.core.List(null,sicmutils.operator.name(op),null,(1),null))))),sicmutils.operator.context(op),cljs.core.meta(op));
}));

(sicmutils.operator.expn.cljs$lang$maxFixedArity = 2);

cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.operator","co-operator","sicmutils.operator/co-operator",-2115495052));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.value","function","sicmutils.value/function",-1964931037),new cljs.core.Keyword("sicmutils.operator","co-operator","sicmutils.operator/co-operator",-2115495052));
var seq__99631_99719 = cljs.core.seq(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.exp,sicmutils.series.exp_series,new cljs.core.Symbol(null,"exp","exp",1378825265,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.cos,sicmutils.series.cos_series,new cljs.core.Symbol(null,"cos","cos",-1452677493,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.sin,sicmutils.series.sin_series,new cljs.core.Symbol(null,"sin","sin",1721439389,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.tan,sicmutils.series.tan_series,new cljs.core.Symbol(null,"tan","tan",-1380825876,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.sec,sicmutils.series.sec_series,new cljs.core.Symbol(null,"sec","sec",60154974,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.acos,sicmutils.series.acos_series,new cljs.core.Symbol(null,"acos","acos",353741763,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.asin,sicmutils.series.asin_series,new cljs.core.Symbol(null,"asin","asin",-904130570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.atan,sicmutils.series.atan_series,new cljs.core.Symbol(null,"atan","atan",-1026550135,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.acot,sicmutils.series.acot_series,new cljs.core.Symbol(null,"acot","acot",1103016569,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.cosh,sicmutils.series.cosh_series,new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.sinh,sicmutils.series.sinh_series,new cljs.core.Symbol(null,"sinh","sinh",-990423302,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.tanh,sicmutils.series.tanh_series,new cljs.core.Symbol(null,"tanh","tanh",480481797,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.asinh,sicmutils.series.asinh_series,new cljs.core.Symbol(null,"asinh","asinh",-1398350397,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.atanh,sicmutils.series.atanh_series,new cljs.core.Symbol(null,"atanh","atanh",-1915750692,null)], null)], null));
var chunk__99632_99720 = null;
var count__99633_99721 = (0);
var i__99634_99722 = (0);
while(true){
if((i__99634_99722 < count__99633_99721)){
var vec__99641_99723 = chunk__99632_99720.cljs$core$IIndexed$_nth$arity$2(null,i__99634_99722);
var op_99724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99641_99723,(0),null);
var f_99725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99641_99723,(1),null);
var sym_99726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99641_99723,(2),null);
var assert_str_99727 = ["g/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym_99726)," :sicmutils.operator/operator"].join('');
op_99724.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017)], null),((function (seq__99631_99719,chunk__99632_99720,count__99633_99721,i__99634_99722,assert_str_99727,vec__99641_99723,op_99724,f_99725,sym_99726){
return (function (g){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.operator.arity(g),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null))){
} else {
throw (new Error(["Assert failed: ",assert_str_99727,"\n","(= (arity g) [:exactly 1])"].join('')));
}

return sicmutils.operator.__GT_Operator((f_99725.cljs$core$IFn$_invoke$arity$1 ? f_99725.cljs$core$IFn$_invoke$arity$1(g) : f_99725.call(null,g)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sym_99726,null,(1),null)),(new cljs.core.List(null,sicmutils.operator.name(g),null,(1),null))))),sicmutils.operator.context(g),null);
});})(seq__99631_99719,chunk__99632_99720,count__99633_99721,i__99634_99722,assert_str_99727,vec__99641_99723,op_99724,f_99725,sym_99726))
);


var G__99728 = seq__99631_99719;
var G__99729 = chunk__99632_99720;
var G__99730 = count__99633_99721;
var G__99731 = (i__99634_99722 + (1));
seq__99631_99719 = G__99728;
chunk__99632_99720 = G__99729;
count__99633_99721 = G__99730;
i__99634_99722 = G__99731;
continue;
} else {
var temp__5753__auto___99732 = cljs.core.seq(seq__99631_99719);
if(temp__5753__auto___99732){
var seq__99631_99733__$1 = temp__5753__auto___99732;
if(cljs.core.chunked_seq_QMARK_(seq__99631_99733__$1)){
var c__4679__auto___99734 = cljs.core.chunk_first(seq__99631_99733__$1);
var G__99735 = cljs.core.chunk_rest(seq__99631_99733__$1);
var G__99736 = c__4679__auto___99734;
var G__99737 = cljs.core.count(c__4679__auto___99734);
var G__99738 = (0);
seq__99631_99719 = G__99735;
chunk__99632_99720 = G__99736;
count__99633_99721 = G__99737;
i__99634_99722 = G__99738;
continue;
} else {
var vec__99644_99739 = cljs.core.first(seq__99631_99733__$1);
var op_99740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99644_99739,(0),null);
var f_99741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99644_99739,(1),null);
var sym_99742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99644_99739,(2),null);
var assert_str_99743 = ["g/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym_99742)," :sicmutils.operator/operator"].join('');
op_99740.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017)], null),((function (seq__99631_99719,chunk__99632_99720,count__99633_99721,i__99634_99722,assert_str_99743,vec__99644_99739,op_99740,f_99741,sym_99742,seq__99631_99733__$1,temp__5753__auto___99732){
return (function (g){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.operator.arity(g),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null))){
} else {
throw (new Error(["Assert failed: ",assert_str_99743,"\n","(= (arity g) [:exactly 1])"].join('')));
}

return sicmutils.operator.__GT_Operator((f_99741.cljs$core$IFn$_invoke$arity$1 ? f_99741.cljs$core$IFn$_invoke$arity$1(g) : f_99741.call(null,g)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sym_99742,null,(1),null)),(new cljs.core.List(null,sicmutils.operator.name(g),null,(1),null))))),sicmutils.operator.context(g),null);
});})(seq__99631_99719,chunk__99632_99720,count__99633_99721,i__99634_99722,assert_str_99743,vec__99644_99739,op_99740,f_99741,sym_99742,seq__99631_99733__$1,temp__5753__auto___99732))
);


var G__99744 = cljs.core.next(seq__99631_99733__$1);
var G__99745 = null;
var G__99746 = (0);
var G__99747 = (0);
seq__99631_99719 = G__99744;
chunk__99632_99720 = G__99745;
count__99633_99721 = G__99746;
i__99634_99722 = G__99747;
continue;
}
} else {
}
}
break;
}
sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017),new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017)], null),(function (o,p){
return sicmutils.operator.o_COLON__PLUS_(o,p);
}));
sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017),new cljs.core.Keyword("sicmutils.operator","co-operator","sicmutils.operator/co-operator",-2115495052)], null),(function (o,f){
return sicmutils.operator.o_PLUS_f(o,f);
}));
sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.operator","co-operator","sicmutils.operator/co-operator",-2115495052),new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017)], null),(function (f,o){
return sicmutils.operator.f_PLUS_o(f,o);
}));
sicmutils.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017)], null),(function (o){
return sicmutils.operator.negate(o);
}));
sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017),new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017)], null),(function (o,p){
return sicmutils.operator.o_COLON__(o,p);
}));
sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017),new cljs.core.Keyword("sicmutils.operator","co-operator","sicmutils.operator/co-operator",-2115495052)], null),(function (o,f){
return sicmutils.operator.o_f(o,f);
}));
sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.operator","co-operator","sicmutils.operator/co-operator",-2115495052),new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017)], null),(function (f,o){
return sicmutils.operator.f_o(f,o);
}));
sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017),new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017)], null),(function (o,p){
return sicmutils.operator.o_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(o,p);
}));
sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017),new cljs.core.Keyword("sicmutils.operator","co-operator","sicmutils.operator/co-operator",-2115495052)], null),(function (o,f){
return sicmutils.operator.o_STAR_f(o,f);
}));
sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.operator","co-operator","sicmutils.operator/co-operator",-2115495052),new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017)], null),(function (f,o){
return sicmutils.operator.f_STAR_o(f,o);
}));
sicmutils.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017)], null),(function (o){
return sicmutils.operator.o_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(o,o);
}));
sicmutils.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017)], null),(function (o){
return sicmutils.operator.o_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(o,sicmutils.operator.o_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(o,o));
}));
sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017),new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),(function (o,n){
if(cljs.core.not(sicmutils.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(n))){
} else {
throw (new Error("Assert failed: (not (g/negative? n))"));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(sicmutils.operator.o_COLON__STAR_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,o));
}));
sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null),(function (o,n){
return sicmutils.operator.o_div_n(o,n);
}));
sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null),(function (o,n){
return sicmutils.operator.o_div_n(o,n);
}));
sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017)], null),(function (n,o){
return sicmutils.operator.o_div_n(o,n);
}));

//# sourceMappingURL=sicmutils.operator.js.map
