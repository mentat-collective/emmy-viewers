goog.provide('sicmutils.polynomial');





/**
* @constructor
 * @implements {sicmutils.function$.IArity}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IFn}
 * @implements {sicmutils.differential.IPerturbed}
 * @implements {sicmutils.value.Value}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
sicmutils.polynomial.Polynomial = (function (arity,terms,m){
this.arity = arity;
this.terms = terms;
this.m = m;
this.cljs$lang$protocol_mask$partition0$ = 2158362625;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sicmutils.polynomial.Polynomial.prototype.toString = (function (){
var self__ = this;
var p = this;
return (sicmutils.polynomial.__GT_str.cljs$core$IFn$_invoke$arity$1 ? sicmutils.polynomial.__GT_str.cljs$core$IFn$_invoke$arity$1(p) : sicmutils.polynomial.__GT_str.call(null,p));
}));

(sicmutils.polynomial.Polynomial.prototype.sicmutils$differential$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.polynomial.Polynomial.prototype.sicmutils$differential$IPerturbed$perturbed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var coefs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.impl.coefficient,self__.terms);
return cljs.core.boolean$(cljs.core.some(sicmutils.differential.perturbed_QMARK_,coefs));
}));

(sicmutils.polynomial.Polynomial.prototype.sicmutils$differential$IPerturbed$replace_tag$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
var G__86208 = (function (p1__86203_SHARP_){
return sicmutils.differential.replace_tag(p1__86203_SHARP_,old,new$);
});
var G__86209 = this$__$1;
return (sicmutils.polynomial.map_coefficients.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.map_coefficients.cljs$core$IFn$_invoke$arity$2(G__86208,G__86209) : sicmutils.polynomial.map_coefficients.call(null,G__86208,G__86209));
}));

(sicmutils.polynomial.Polynomial.prototype.sicmutils$differential$IPerturbed$extract_tangent$arity$2 = (function (this$,tag){
var self__ = this;
var this$__$1 = this;
var G__86210 = (function (p1__86204_SHARP_){
return sicmutils.differential.extract_tangent(p1__86204_SHARP_,tag);
});
var G__86211 = this$__$1;
return (sicmutils.polynomial.map_coefficients.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.map_coefficients.cljs$core$IFn$_invoke$arity$2(G__86210,G__86211) : sicmutils.polynomial.map_coefficients.call(null,G__86210,G__86211));
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var self__ = this;
var x__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#object[sicmutils.polynomial.Polynomial \"",x__$1.toString(),"\"]"], 0));
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return (sicmutils.polynomial.eq.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.eq.cljs$core$IFn$_invoke$arity$2(this$__$1,that) : sicmutils.polynomial.eq.call(null,this$__$1,that));
}));

(sicmutils.polynomial.Polynomial.prototype.sicmutils$value$Value$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.polynomial.Polynomial.prototype.sicmutils$value$Value$zero_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var temp__5751__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.terms,(0));
if(cljs.core.truth_(temp__5751__auto__)){
var term = temp__5751__auto__;
return sicmutils.value.zero_like(sicmutils.polynomial.impl.coefficient(term));
} else {
return (0);
}
}));

(sicmutils.polynomial.Polynomial.prototype.sicmutils$value$Value$identity_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var and__4251__auto__ = sicmutils.value.one_QMARK_(self__.arity);
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(self__.terms),(1));
if(and__4251__auto____$1){
var vec__86217 = self__.terms;
var term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86217,(0),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [(0),(1)], null),sicmutils.polynomial.impl.exponents(term))) && (sicmutils.value.one_QMARK_(sicmutils.polynomial.impl.coefficient(term))));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}));

(sicmutils.polynomial.Polynomial.prototype.sicmutils$value$Value$freeze$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"polynomial","polynomial",807766365,null),null,(1),null)),(new cljs.core.List(null,self__.arity,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,self__.terms,null,(1),null))], 0))));
}));

(sicmutils.polynomial.Polynomial.prototype.sicmutils$value$Value$zero_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.empty_QMARK_(self__.terms);
}));

(sicmutils.polynomial.Polynomial.prototype.sicmutils$value$Value$one_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(self__.terms),(1));
if(and__4251__auto__){
var vec__86224 = self__.terms;
var term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86224,(0),null);
return ((sicmutils.polynomial.impl.constant_term_QMARK_(term)) && (sicmutils.value.one_QMARK_(sicmutils.polynomial.impl.coefficient(term))));
} else {
return and__4251__auto__;
}
}));

(sicmutils.polynomial.Polynomial.prototype.sicmutils$value$Value$exact_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(sicmutils.polynomial.Polynomial.prototype.sicmutils$value$Value$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683);
}));

(sicmutils.polynomial.Polynomial.prototype.sicmutils$value$Value$identity_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(sicmutils.value.one_QMARK_(self__.arity)){
} else {
throw (new Error(["Assert failed: ","identity-like unsupported on multivariate monomials!","\n","(v/one? arity)"].join('')));
}

var one = (function (){var temp__5751__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.terms,(0));
if(cljs.core.truth_(temp__5751__auto__)){
var term = temp__5751__auto__;
return sicmutils.value.one_like(sicmutils.polynomial.impl.coefficient(term));
} else {
return (1);
}
})();
var term = sicmutils.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2((sicmutils.polynomial.exponent.make.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.exponent.make.cljs$core$IFn$_invoke$arity$2((0),(1)) : sicmutils.polynomial.exponent.make.call(null,(0),(1))),one);
return (new sicmutils.polynomial.Polynomial((1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [term], null),self__.m));
}));

(sicmutils.polynomial.Polynomial.prototype.sicmutils$value$Value$one_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var temp__5751__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.terms,(0));
if(cljs.core.truth_(temp__5751__auto__)){
var term = temp__5751__auto__;
return sicmutils.value.one_like(sicmutils.polynomial.impl.coefficient(term));
} else {
return (1);
}
}));

(sicmutils.polynomial.Polynomial.prototype.sicmutils$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.polynomial.Polynomial.prototype.sicmutils$function$IArity$arity$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),(0),self__.arity], null);
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.seq(self__.terms);
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m__$1){
var self__ = this;
var ___$1 = this;
return (new sicmutils.polynomial.Polynomial(self__.arity,self__.terms,m__$1));
}));

(sicmutils.polynomial.Polynomial.prototype.call = (function (unused__20572__auto__){
var self__ = this;
var self__ = this;
var G__86267 = (arguments.length - (1));
switch (G__86267) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
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

(sicmutils.polynomial.Polynomial.prototype.apply = (function (self__,args86206){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args86206)));
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var G__86278 = this$;
var G__86279 = cljs.core.PersistentVector.EMPTY;
return (sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__86278,G__86279) : sicmutils.polynomial.evaluate.call(null,G__86278,G__86279));
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
var G__86280 = this$;
var G__86281 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null);
return (sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__86280,G__86281) : sicmutils.polynomial.evaluate.call(null,G__86280,G__86281));
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
var G__86282 = this$;
var G__86283 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
return (sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__86282,G__86283) : sicmutils.polynomial.evaluate.call(null,G__86282,G__86283));
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
var G__86284 = this$;
var G__86285 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null);
return (sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__86284,G__86285) : sicmutils.polynomial.evaluate.call(null,G__86284,G__86285));
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
var G__86286 = this$;
var G__86287 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null);
return (sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__86286,G__86287) : sicmutils.polynomial.evaluate.call(null,G__86286,G__86287));
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
var G__86288 = this$;
var G__86289 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e], null);
return (sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__86288,G__86289) : sicmutils.polynomial.evaluate.call(null,G__86288,G__86289));
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var this$ = this;
var G__86290 = this$;
var G__86291 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null);
return (sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__86290,G__86291) : sicmutils.polynomial.evaluate.call(null,G__86290,G__86291));
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var this$ = this;
var G__86293 = this$;
var G__86294 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g], null);
return (sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__86293,G__86294) : sicmutils.polynomial.evaluate.call(null,G__86293,G__86294));
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var this$ = this;
var G__86296 = this$;
var G__86297 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null);
return (sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__86296,G__86297) : sicmutils.polynomial.evaluate.call(null,G__86296,G__86297));
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var this$ = this;
var G__86298 = this$;
var G__86299 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i], null);
return (sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__86298,G__86299) : sicmutils.polynomial.evaluate.call(null,G__86298,G__86299));
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var this$ = this;
var G__86302 = this$;
var G__86303 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j], null);
return (sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__86302,G__86303) : sicmutils.polynomial.evaluate.call(null,G__86302,G__86303));
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var this$ = this;
var G__86313 = this$;
var G__86314 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k], null);
return (sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__86313,G__86314) : sicmutils.polynomial.evaluate.call(null,G__86313,G__86314));
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
var G__86317 = this$;
var G__86318 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l], null);
return (sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__86317,G__86318) : sicmutils.polynomial.evaluate.call(null,G__86317,G__86318));
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1){
var self__ = this;
var this$ = this;
var G__86320 = this$;
var G__86321 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1], null);
return (sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__86320,G__86321) : sicmutils.polynomial.evaluate.call(null,G__86320,G__86321));
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n){
var self__ = this;
var this$ = this;
var G__86325 = this$;
var G__86326 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n], null);
return (sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__86325,G__86326) : sicmutils.polynomial.evaluate.call(null,G__86325,G__86326));
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o){
var self__ = this;
var this$ = this;
var G__86330 = this$;
var G__86331 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o], null);
return (sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__86330,G__86331) : sicmutils.polynomial.evaluate.call(null,G__86330,G__86331));
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p){
var self__ = this;
var this$ = this;
var G__86332 = this$;
var G__86333 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p], null);
return (sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__86332,G__86333) : sicmutils.polynomial.evaluate.call(null,G__86332,G__86333));
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q){
var self__ = this;
var this$ = this;
var G__86336 = this$;
var G__86337 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q], null);
return (sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__86336,G__86337) : sicmutils.polynomial.evaluate.call(null,G__86336,G__86337));
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r){
var self__ = this;
var this$ = this;
var G__86338 = this$;
var G__86339 = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r], null);
return (sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__86338,G__86339) : sicmutils.polynomial.evaluate.call(null,G__86338,G__86339));
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
var G__86340 = this$;
var G__86341 = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s], null);
return (sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__86340,G__86341) : sicmutils.polynomial.evaluate.call(null,G__86340,G__86341));
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
var G__86345 = this$;
var G__86346 = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null);
return (sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__86345,G__86346) : sicmutils.polynomial.evaluate.call(null,G__86345,G__86346));
}));

(sicmutils.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t,rest){
var self__ = this;
var this$ = this;
var G__86347 = this$;
var G__86348 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null),rest);
return (sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__86347,G__86348) : sicmutils.polynomial.evaluate.call(null,G__86347,G__86348));
}));

(sicmutils.polynomial.Polynomial.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arity","arity",-168024608,null),new cljs.core.Symbol(null,"terms","terms",83553549,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null);
}));

(sicmutils.polynomial.Polynomial.cljs$lang$type = true);

(sicmutils.polynomial.Polynomial.cljs$lang$ctorStr = "sicmutils.polynomial/Polynomial");

(sicmutils.polynomial.Polynomial.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"sicmutils.polynomial/Polynomial");
}));

/**
 * Positional factory function for sicmutils.polynomial/Polynomial.
 */
sicmutils.polynomial.__GT_Polynomial = (function sicmutils$polynomial$__GT_Polynomial(arity,terms,m){
return (new sicmutils.polynomial.Polynomial(arity,terms,m));
});

/**
 * Returns true if the supplied argument is an instance of [[Polynomial]], false
 *   otherwise.
 */
sicmutils.polynomial.polynomial_QMARK_ = (function sicmutils$polynomial$polynomial_QMARK_(x){
return (x instanceof sicmutils.polynomial.Polynomial);
});
/**
 * Returns true if the input `x` is explicitly _not_ an instance
 *   of [[Polynomial]], false otherwise.
 * 
 *   Equivalent to `(not (polynomial? x))`.
 */
sicmutils.polynomial.coeff_QMARK_ = (function sicmutils$polynomial$coeff_QMARK_(x){
return (!(sicmutils.polynomial.polynomial_QMARK_(x)));
});
/**
 * Given a [[Polynomial]] instance `p`, returns the `arity` field.
 */
sicmutils.polynomial.bare_arity = (function sicmutils$polynomial$bare_arity(p){
if(sicmutils.polynomial.polynomial_QMARK_(p)){
} else {
throw (new Error("Assert failed: (polynomial? p)"));
}

return p.arity;
});
/**
 * Given a [[Polynomial]] instance `p`, returns the `terms` field.
 */
sicmutils.polynomial.bare_terms = (function sicmutils$polynomial$bare_terms(p){
if(sicmutils.polynomial.polynomial_QMARK_(p)){
} else {
throw (new Error("Assert failed: (polynomial? p)"));
}

return p.terms;
});
/**
 * Accepts an explicit `arity` and a vector of terms and returns either:
 * 
 *   - `0`, in the case of an empty list
 *   - a bare coefficient, given a singleton term list with a constant term
 *   - else, a [[Polynomial]] instance.
 * 
 *   In the second case, if the coefficient is _itself_ a [[Polynomial]], wraps
 *   that [[Polynomial]] instance up in an explicit [[Polynomial]]. In cases where
 *   polynomials have polynomial coefficients, this flattening should never happen
 *   automatically.
 * 
 *   NOTE this method assumes that the terms are properly sorted, and contain no
 *   zero coefficients.
 */
sicmutils.polynomial.terms__GT_polynomial = (function sicmutils$polynomial$terms__GT_polynomial(arity,terms){
if(cljs.core.empty_QMARK_(terms)){
return (0);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(terms),(1))) && (sicmutils.polynomial.impl.constant_term_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,(0)))))){
var c = sicmutils.polynomial.impl.coefficient(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,(0)));
if(sicmutils.polynomial.polynomial_QMARK_(c)){
return sicmutils.polynomial.__GT_Polynomial(arity,terms,null);
} else {
return c;
}
} else {
return sicmutils.polynomial.__GT_Polynomial(arity,terms,null);

}
}
});
/**
 * Generates a [[Polynomial]] instance (or a bare coefficient!) from either:
 * 
 *   - a sequence of dense coefficients of a univariate polynomial (in ascending
 *   order)
 *   - an explicit `arity`, and a sparse mapping (or sequence of pairs) of exponent
 *   => coefficient
 * 
 *   In the first case, the sequence is interpreted as a dense sequence of
 *   coefficients of an arity-1 (univariate) polynomial. The coefficients begin
 *   with the constant term and proceed to each higher power of the indeterminate.
 *   For example, x^2 - 1 can be constructed by (make [-1 0 1]).
 * 
 *   In the 2-arity case,
 * 
 *   - `arity` is the number of indeterminates
 *   - `expts->coef` is a map of an exponent representation to a coefficient.
 * 
 *   The `exponent` portion of the mapping can be any of:
 * 
 *   - a proper exponent entry created by `sicmutils.polynomial.exponent`
 *   - a map of the form `{variable-index, power}`
 *   - a dense vector of variable powers, like `[3 0 1]` for $x^3z$. The length of
 *  each vector should be equal to `arity`, in this case.
 * 
 *   For example, any of the following would generate $4x^2y + 5xy^2$:
 * 
 *   ```clojure
 *   (make 2 [[[2 1] 4] [[1 2] 5]])
 *   (make 2 {[2 1] 4, [1 2] 5})
 *   (make 2 {{0 2, 1 1} 4, {0 1, 1 2} 5})
 *   ```
 * 
 *   NOTE: [[make]] will try and return a bare coefficient if possible. For
 *   example, the following form will return a constant, since there are no
 *   explicit indeterminates with powers > 0:
 * 
 *   ```clojure
 *   (make 10 {{} 1 {} 2})
 *   ;;=> 3
 *   ```
 * 
 *   See [[constant]] if you need an explicit [[Polynomial]] instance wrapping a
 *   constant.
 */
sicmutils.polynomial.make = (function sicmutils$polynomial$make(var_args){
var G__86354 = arguments.length;
switch (G__86354) {
case 1:
return sicmutils.polynomial.make.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.polynomial.make.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.polynomial.make.cljs$core$IFn$_invoke$arity$1 = (function (dense_coefficients){
var terms = sicmutils.polynomial.impl.dense__GT_terms(dense_coefficients);
return sicmutils.polynomial.terms__GT_polynomial((1),terms);
}));

(sicmutils.polynomial.make.cljs$core$IFn$_invoke$arity$2 = (function (arity,expts__GT_coef){
var terms = sicmutils.polynomial.impl.sparse__GT_terms.cljs$core$IFn$_invoke$arity$1(expts__GT_coef);
return sicmutils.polynomial.terms__GT_polynomial(arity,terms);
}));

(sicmutils.polynomial.make.cljs$lang$maxFixedArity = 2);

/**
 * Given some coefficient `c`, returns a [[Polynomial]] instance with a single
 *   constant term referencing `c`.
 * 
 *   `arity` defaults to 1; supply it to set the arity of the
 *   returned [[Polynomial]].
 */
sicmutils.polynomial.constant = (function sicmutils$polynomial$constant(var_args){
var G__86361 = arguments.length;
switch (G__86361) {
case 1:
return sicmutils.polynomial.constant.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.polynomial.constant.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.polynomial.constant.cljs$core$IFn$_invoke$arity$1 = (function (c){
return sicmutils.polynomial.constant.cljs$core$IFn$_invoke$arity$2((1),c);
}));

(sicmutils.polynomial.constant.cljs$core$IFn$_invoke$arity$2 = (function (arity,c){
return sicmutils.polynomial.__GT_Polynomial(arity,sicmutils.polynomial.impl.constant__GT_terms(c),null);
}));

(sicmutils.polynomial.constant.cljs$lang$maxFixedArity = 2);

/**
 * Generates a [[Polynomial]] instance representing a single indeterminate with
 *   constant 1.
 * 
 *   When called with no arguments, returns a monomial of arity 1 that acts as
 *   identity in the first indeterminate.
 * 
 *   The one-argument version takes an explicit `arity`, but still sets the
 *   identity to the first indeterminate.
 * 
 *   The two-argument version takes an explicit `i` and returns a monomial of arity
 *   `arity` with an exponent of 1 in the `i`th indeterminate.
 */
sicmutils.polynomial.identity = (function sicmutils$polynomial$identity(var_args){
var G__86367 = arguments.length;
switch (G__86367) {
case 0:
return sicmutils.polynomial.identity.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sicmutils.polynomial.identity.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.polynomial.identity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.polynomial.identity.cljs$core$IFn$_invoke$arity$0 = (function (){
return sicmutils.polynomial.identity.cljs$core$IFn$_invoke$arity$2((1),(0));
}));

(sicmutils.polynomial.identity.cljs$core$IFn$_invoke$arity$1 = (function (arity){
return sicmutils.polynomial.identity.cljs$core$IFn$_invoke$arity$2(arity,(0));
}));

(sicmutils.polynomial.identity.cljs$core$IFn$_invoke$arity$2 = (function (arity,i){
if((((i >= (0))) && ((i < arity)))){
} else {
throw (new Error("Assert failed: (and (>= i 0) (< i arity))"));
}

var expts = (sicmutils.polynomial.exponent.make.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.exponent.make.cljs$core$IFn$_invoke$arity$2(i,(1)) : sicmutils.polynomial.exponent.make.call(null,i,(1)));
return sicmutils.polynomial.__GT_Polynomial(arity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(expts,(1))], null),null);
}));

(sicmutils.polynomial.identity.cljs$lang$maxFixedArity = 2);

/**
 * Returns a sequence of `n` monomials of arity `n`, each with an exponent of `1`
 *   for the `i`th indeterminate (where `i` matches the position in the returned
 *   sequence).
 */
sicmutils.polynomial.new_variables = (function sicmutils$polynomial$new_variables(n){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__86370_SHARP_){
return sicmutils.polynomial.identity.cljs$core$IFn$_invoke$arity$2(n,p1__86370_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),n));
});
/**
 * Given a sequence of points of the form `[x, f(x)]`, returns a univariate
 *   polynomial that passes through each input point.
 * 
 *   The degree of the returned polynomial is equal to `(dec (count xs))`.
 */
sicmutils.polynomial.from_points = (function sicmutils$polynomial$from_points(xs){
return sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(sicmutils.polynomial.interpolate.lagrange(xs,sicmutils.polynomial.identity.cljs$core$IFn$_invoke$arity$0()));
});
/**
 * Given some `arity`, an indeterminate index `i` and some constant `root`,
 *   returns a polynomial of the form `x_i - root`. The returned polynomial
 *   represents a linear equation in the `i`th indeterminate.
 * 
 *   If `root` is 0, [[linear]] is equivalent to the two-argument version
 *   of [[identity]].
 */
sicmutils.polynomial.linear = (function sicmutils$polynomial$linear(arity,i,root){
if(sicmutils.value.zero_QMARK_(root)){
return sicmutils.polynomial.identity.cljs$core$IFn$_invoke$arity$2(arity,i);
} else {
var G__86374 = sicmutils.polynomial.constant.cljs$core$IFn$_invoke$arity$2(arity,sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(root));
var G__86375 = sicmutils.polynomial.identity.cljs$core$IFn$_invoke$arity$2(arity,i);
return (sicmutils.polynomial.add.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.add.cljs$core$IFn$_invoke$arity$2(G__86374,G__86375) : sicmutils.polynomial.add.call(null,G__86374,G__86375));
}
});
/**
 * Given some `arity`, a coefficient `c` and an exponent `n`, returns a monomial
 *   representing $c{x_0}^n$. The first indeterminate is always exponentiated.
 * 
 *   Similar to [[make]], this function attempts to drop down to scalar-land if
 *   possible:
 * 
 *   - If `c` is [[sicmutils.value/zero?]], returns `c`
 *   - if `n` is `zero?`, returns `(constant arity c)`
 * 
 *   NOTE that negative exponents are not allowed.
 */
sicmutils.polynomial.c_STAR_xn = (function sicmutils$polynomial$c_STAR_xn(arity,c,n){
if((n >= (0))){
} else {
throw (new Error("Assert failed: (>= n 0)"));
}

if(sicmutils.value.zero_QMARK_(c)){
return c;
} else {
if((n === (0))){
return sicmutils.polynomial.constant.cljs$core$IFn$_invoke$arity$2(arity,c);
} else {
var term = sicmutils.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2((sicmutils.polynomial.exponent.make.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.exponent.make.cljs$core$IFn$_invoke$arity$2((0),n) : sicmutils.polynomial.exponent.make.call(null,(0),n)),c);
return sicmutils.polynomial.__GT_Polynomial(arity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [term], null),null);

}
}
});
/**
 * Returns the nth [Touchard
 *   polynomial](https://en.wikipedia.org/wiki/Touchard_polynomials).
 * 
 *   These are also called [Bell
 *   polynomials](https://mathworld.wolfram.com/BellPolynomial.html) (in
 *   Mathematica, implemented as `BellB`) or /exponential polynomials/.
 */
sicmutils.polynomial.touchard = (function sicmutils$polynomial$touchard(n){
return sicmutils.polynomial.make.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__86379_SHARP_){
return sicmutils.special.factorial.stirling_second_kind(n,p1__86379_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((n + (1)))));
});
sicmutils.polynomial.coeff_arity = (0);
sicmutils.polynomial.zero_degree = (-1);
/**
 * Returns the declared arity of the supplied [[Polynomial]], or `0` for
 *   non-polynomial arguments.
 */
sicmutils.polynomial.arity = (function sicmutils$polynomial$arity(p){
if(sicmutils.polynomial.polynomial_QMARK_(p)){
return sicmutils.polynomial.bare_arity(p);
} else {
return sicmutils.polynomial.coeff_arity;
}
});
/**
 * Given some [[Polynomial]], returns the `terms` entry of the type. Handles other types as well:
 * 
 *   - Acts as identity on vectors, interpreting them as vectors of terms
 *   - any zero-valued `p` returns `[]`
 *   - any other coefficient returns a vector of a single constant term.
 */
sicmutils.polynomial.__GT_terms = (function sicmutils$polynomial$__GT_terms(p){
if(sicmutils.polynomial.polynomial_QMARK_(p)){
return sicmutils.polynomial.bare_terms(p);
} else {
if(cljs.core.vector_QMARK_(p)){
return p;
} else {
if(sicmutils.value.zero_QMARK_(p)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$1(p)], null);

}
}
}
});
/**
 * Given two polynomials (or coefficients) `p` and `q`, checks that their arities
 *   are equal and returns the value, or throws an exception if not.
 * 
 *   If either `p` or `q` is a coefficient, [[check-same-arity]] successfully
 *   returns the other argument's arity.
 */
sicmutils.polynomial.check_same_arity = (function sicmutils$polynomial$check_same_arity(p,q){
var poly_p_QMARK_ = sicmutils.polynomial.polynomial_QMARK_(p);
var poly_q_QMARK_ = sicmutils.polynomial.polynomial_QMARK_(q);
if(((poly_p_QMARK_) && (poly_q_QMARK_))){
var ap = sicmutils.polynomial.bare_arity(p);
var aq = sicmutils.polynomial.bare_arity(q);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ap,aq)){
return ap;
} else {
return sicmutils.util.arithmetic_ex(["mismatched polynomial arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ap),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(aq)].join(''));
}
} else {
if(poly_p_QMARK_){
return sicmutils.polynomial.bare_arity(p);
} else {
if(poly_q_QMARK_){
return sicmutils.polynomial.bare_arity(q);
} else {
return sicmutils.polynomial.coeff_arity;

}
}
}
});
/**
 * Given some input `p` and an indeterminate index `i`, returns true if `0 <= i
 *   < (arity p)`, false otherwise.
 */
sicmutils.polynomial.valid_arity_QMARK_ = (function sicmutils$polynomial$valid_arity_QMARK_(p,i){
return (((i >= (0))) && ((i < sicmutils.polynomial.arity(p))));
});
/**
 * Given some input `p` and an indeterminate index `i`, returns `i` if `0 <= i
 *   < (arity p)`, and throws an exception otherwise.
 * 
 *   NOTE [[validate-arity]] is meant to validate indeterminate indices; thus it
 *   will always throw for non-[[Polynomial]] inputs.
 */
sicmutils.polynomial.validate_arity_BANG_ = (function sicmutils$polynomial$validate_arity_BANG_(p,i){
if(sicmutils.polynomial.valid_arity_QMARK_(p,i)){
return i;
} else {
return sicmutils.util.arithmetic_ex(["Supplied i ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," outside the bounds of arity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.polynomial.arity(p))," for input ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join(''));
}
});
/**
 * Returns the [degree](https://en.wikipedia.org/wiki/Degree_of_a_polynomial) of
 *   the supplied polynomial.
 * 
 *   the degree of a polynomial is the highest of the degrees of the polynomial's
 *   individual terms with non-zero coefficients. The degree of an individual term
 *   is the sum of all exponents in the term.
 * 
 *   Optionally, [[degree]] takes an indeterminate index `i`; in this
 *   case, [[degree]] returns the maximum power found for the `i`th indeterminate
 *   across all terms.
 * 
 *   NOTE when passed either a `0` or a zero-polynomial, [[degree]] returns -1. See
 *   Wikipedia's ['degree of the zero
 *   polynomial'](https://en.wikipedia.org/wiki/Degree_of_a_polynomial#Degree_of_the_zero_polynomial)
 *   for color on why this is the case.
 *   
 */
sicmutils.polynomial.degree = (function sicmutils$polynomial$degree(var_args){
var G__86384 = arguments.length;
switch (G__86384) {
case 1:
return sicmutils.polynomial.degree.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.polynomial.degree.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.polynomial.degree.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(sicmutils.value.zero_QMARK_(p)){
return sicmutils.polynomial.zero_degree;
} else {
if(sicmutils.polynomial.polynomial_QMARK_(p)){
return sicmutils.polynomial.exponent.monomial_degree.cljs$core$IFn$_invoke$arity$1(sicmutils.polynomial.impl.exponents((sicmutils.polynomial.leading_term.cljs$core$IFn$_invoke$arity$1 ? sicmutils.polynomial.leading_term.cljs$core$IFn$_invoke$arity$1(p) : sicmutils.polynomial.leading_term.call(null,p))));
} else {
return sicmutils.polynomial.coeff_arity;

}
}
}));

(sicmutils.polynomial.degree.cljs$core$IFn$_invoke$arity$2 = (function (p,i){
var i__$1 = sicmutils.polynomial.validate_arity_BANG_(p,i);
if(sicmutils.value.zero_QMARK_(p)){
return sicmutils.polynomial.zero_degree;
} else {
if(sicmutils.polynomial.polynomial_QMARK_(p)){
var i_degree = (function sicmutils$polynomial$i_degree(term){
return sicmutils.polynomial.exponent.monomial_degree.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.impl.exponents(term),i__$1);
});
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(i_degree),cljs.core.max,(0),sicmutils.polynomial.bare_terms(p));
} else {
return sicmutils.polynomial.coeff_arity;

}
}
}));

(sicmutils.polynomial.degree.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if the [[Polynomial]] this is equal to `that`. If `that` is
 *   a [[Polynomial]], `this` and `that` are equal if they have equal terms and
 *   equal arity. Coefficients are compared using [[sicmutils.value/=]].
 * 
 *   If `that` is non-[[Polynomial]], `eq` only returns true if `this` is a
 *   monomial and its coefficient is equal to `that` (again
 *   using [[sicmutils.value/=]]).
 */
sicmutils.polynomial.eq = (function sicmutils$polynomial$eq(this$,that){
if((that instanceof sicmutils.polynomial.Polynomial)){
var p = that;
var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$.arity,p.arity);
if(and__4251__auto__){
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(this$.terms,p.terms);
} else {
return and__4251__auto__;
}
} else {
var terms = this$.terms;
var and__4251__auto__ = (cljs.core.count(terms) <= (1));
if(and__4251__auto__){
var term = cljs.core.peek(terms);
var and__4251__auto____$1 = sicmutils.polynomial.impl.constant_term_QMARK_(term);
if(and__4251__auto____$1){
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(that,sicmutils.polynomial.impl.coefficient(term));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
/**
 * Returns a string representation of the supplied [[Polynomial]] instance `p`.
 * 
 *   The optional argument `n` specifies how many terms to include in the returned
 *   string before an ellipsis cuts them off.
 */
sicmutils.polynomial.__GT_str = (function sicmutils$polynomial$__GT_str(var_args){
var G__86386 = arguments.length;
switch (G__86386) {
case 1:
return sicmutils.polynomial.__GT_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.polynomial.__GT_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.polynomial.__GT_str.cljs$core$IFn$_invoke$arity$1 = (function (p){
return sicmutils.polynomial.__GT_str.cljs$core$IFn$_invoke$arity$2(p,(10));
}));

(sicmutils.polynomial.__GT_str.cljs$core$IFn$_invoke$arity$2 = (function (p,n){
if(cljs.core.truth_(sicmutils.polynomial.polynomial_QMARK_)){
} else {
throw (new Error("Assert failed: polynomial?"));
}

if(cljs.core.truth_(p)){
} else {
throw (new Error("Assert failed: p"));
}

var terms = sicmutils.polynomial.bare_terms(p);
var arity = sicmutils.polynomial.bare_arity(p);
var n_terms = cljs.core.count(terms);
var term_strs = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.impl.term__GT_str,terms));
var suffix = (((n_terms > n))?["... and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((n_terms - n))," more terms"].join(''):null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity),": (",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" + ",term_strs),suffix,")"].join('');
}));

(sicmutils.polynomial.__GT_str.cljs$lang$maxFixedArity = 2);

/**
 * Returns a sequence of the coefficients of the supplied polynomial `p`. A
 *   coefficient is treated here as a monomial, and returns a sequence of itself.
 * 
 *   If `p` is zero, returns an empty list.
 */
sicmutils.polynomial.coefficients = (function sicmutils$polynomial$coefficients(p){
if(sicmutils.polynomial.polynomial_QMARK_(p)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.impl.coefficient,sicmutils.polynomial.__GT_terms(p));
} else {
if(sicmutils.value.zero_QMARK_(p)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null);

}
}
});
/**
 * Returns the leading (highest degree) term of the [[Polynomial]] `p`.
 * 
 *   If `p` is a non-[[Polynomial]] coefficient, returns a term with zero exponents
 *   and `p` as its coefficient.
 */
sicmutils.polynomial.leading_term = (function sicmutils$polynomial$leading_term(p){
var or__4253__auto__ = cljs.core.peek(sicmutils.polynomial.__GT_terms(p));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.polynomial.exponent.empty,(0)], null);
}
});
/**
 * Returns the coefficient of the leading (highest degree) term of
 *   the [[Polynomial]] `p`.
 * 
 *   If `p` is a non-[[Polynomial]] coefficient, acts as identity.
 */
sicmutils.polynomial.leading_coefficient = (function sicmutils$polynomial$leading_coefficient(p){
if(sicmutils.polynomial.polynomial_QMARK_(p)){
return sicmutils.polynomial.impl.coefficient(cljs.core.peek(sicmutils.polynomial.bare_terms(p)));
} else {
return p;
}
});
/**
 * Returns the exponents of the leading (highest degree) term of
 *   the [[Polynomial]] `p`.
 * 
 *   If `p` is a non-[[Polynomial]] coefficient, returns [[exponent/empty]].
 */
sicmutils.polynomial.leading_exponents = (function sicmutils$polynomial$leading_exponents(p){
if(sicmutils.polynomial.polynomial_QMARK_(p)){
return sicmutils.polynomial.impl.exponents(cljs.core.peek(sicmutils.polynomial.bare_terms(p)));
} else {
return sicmutils.polynomial.exponent.empty;
}
});
/**
 * Similar to [[leading-coefficient]], but of the coefficient itself is
 *   a [[Polynomial]], recurses down until it reaches a non-[[Polynomial]] lead
 *   coefficient.
 * 
 *   If `p` is a non-[[Polynomial]] coefficient, acts as identity.
 */
sicmutils.polynomial.leading_base_coefficient = (function sicmutils$polynomial$leading_base_coefficient(p){
while(true){
if(sicmutils.polynomial.polynomial_QMARK_(p)){
var G__86718 = sicmutils.polynomial.leading_coefficient(p);
p = G__86718;
continue;
} else {
return p;
}
break;
}
});
/**
 * Returns the coefficient of the trailing (lowest degree) term of
 *   the [[Polynomial]] `p`.
 * 
 *   If `p` is a non-[[Polynomial]] coefficient, acts as identity.
 */
sicmutils.polynomial.trailing_coefficient = (function sicmutils$polynomial$trailing_coefficient(p){
if(sicmutils.polynomial.polynomial_QMARK_(p)){
return sicmutils.polynomial.impl.coefficient(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(sicmutils.polynomial.bare_terms(p),(0),cljs.core.PersistentVector.EMPTY));
} else {
return p;
}
});
/**
 * Returns the lowest degree found across any term in the supplied [[Polynomial]].
 *   If a non-[[Polynomial]] is supplied, returns either `0` or `-1` if the input
 *   is itself a `0`.
 * 
 *   See [[degree]] for a discussion of this `-1` case.
 */
sicmutils.polynomial.lowest_degree = (function sicmutils$polynomial$lowest_degree(p){
if(sicmutils.polynomial.polynomial_QMARK_(p)){
return sicmutils.polynomial.exponent.monomial_degree.cljs$core$IFn$_invoke$arity$1(sicmutils.polynomial.impl.exponents(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.bare_terms(p),(0))));
} else {
if(sicmutils.value.zero_QMARK_(p)){
return sicmutils.polynomial.zero_degree;
} else {
return sicmutils.polynomial.coeff_arity;

}
}
});
/**
 * Returns true if `p` is either:
 * 
 *   - a [[Polynomial]] instance with a single term, or
 *   - a non-[[Polynomial]] coefficient,
 * 
 *   false otherwise.
 */
sicmutils.polynomial.monomial_QMARK_ = (function sicmutils$polynomial$monomial_QMARK_(p){
return (((!(sicmutils.polynomial.polynomial_QMARK_(p)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(sicmutils.polynomial.bare_terms(p)))));
});
/**
 * Returns true if `p` is a [monic
 *   polynomial](https://en.wikipedia.org/wiki/Monic_polynomial), false otherwise.
 * 
 *   A monic polynomial is a univariate polynomial with a leading coefficient that
 *   responds `true` to [[sicmutils.value/one?]]. This means that any coefficient
 *   that responds `true` to [[sicmutils.value/one?]] also qualifies as a monic
 *   polynomial.
 */
sicmutils.polynomial.monic_QMARK_ = (function sicmutils$polynomial$monic_QMARK_(p){
if(sicmutils.polynomial.polynomial_QMARK_(p)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),sicmutils.polynomial.arity(p))) && (sicmutils.value.one_QMARK_(sicmutils.polynomial.leading_coefficient(p))));
} else {
return sicmutils.value.one_QMARK_(p);
}
});
/**
 * Returns true if `p` is a [[Polynomial]] of arity 1, false otherwise.
 */
sicmutils.polynomial.univariate_QMARK_ = (function sicmutils$polynomial$univariate_QMARK_(p){
return ((sicmutils.polynomial.polynomial_QMARK_(p)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.bare_arity(p),(1))));
});
/**
 * Returns true if `p` is a [[Polynomial]] of arity > 1, false otherwise.
 */
sicmutils.polynomial.multivariate_QMARK_ = (function sicmutils$polynomial$multivariate_QMARK_(p){
return ((sicmutils.polynomial.polynomial_QMARK_(p)) && ((sicmutils.polynomial.bare_arity(p) > (1))));
});
/**
 * Returns true if the [[leading-base-coefficient]] of `p`
 *   is [[generic/negative?]], false otherwise.
 */
sicmutils.polynomial.negative_QMARK_ = (function sicmutils$polynomial$negative_QMARK_(p){
return sicmutils.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(sicmutils.polynomial.leading_base_coefficient(p));
});
/**
 * Given a [[Polynomial]], returns a new [[Polynomial]] instance generated by
 *   applying `f` to the coefficient of each term in `p` and filtering out all
 *   resulting zeros.
 * 
 *   Given a non-[[Polynomial]] coefficient, returns `(f p)`.
 * 
 *   NOTE that [[map-coefficients]] will return a non-[[Polynomial]] if the result
 *   of the mapping has only a constant term.
 */
sicmutils.polynomial.map_coefficients = (function sicmutils$polynomial$map_coefficients(f,p){
if(sicmutils.polynomial.polynomial_QMARK_(p)){
return sicmutils.polynomial.terms__GT_polynomial(sicmutils.polynomial.bare_arity(p),sicmutils.polynomial.impl.map_coefficients(f,sicmutils.polynomial.bare_terms(p)));
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p) : f.call(null,p));
}
});
/**
 * Given a [[Polynomial]], returns a new [[Polynomial]] instance generated by
 *   applying `f` to the exponents of each term in `p` and filtering out all
 *   resulting zeros. The resulting [[Polynomial]] will have either the
 *   same [[arity]] as `p`, or the explicit, optional `new-arity` argument. (This
 *   is because `f` might increase or decrease the total arity.)
 * 
 *   Given a non-[[Polynomial]] coefficient, if `(f empty-exponents)` produces a
 *   non-zero result, errors without an explicit `new-arity` argument..
 * 
 *   NOTE that [[map-exponents]] will return a non-[[Polynomial]] if the result
 *   of the mapping has only a constant term.
 */
sicmutils.polynomial.map_exponents = (function sicmutils$polynomial$map_exponents(var_args){
var G__86399 = arguments.length;
switch (G__86399) {
case 2:
return sicmutils.polynomial.map_exponents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.polynomial.map_exponents.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.polynomial.map_exponents.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return sicmutils.polynomial.map_exponents.cljs$core$IFn$_invoke$arity$3(f,p,null);
}));

(sicmutils.polynomial.map_exponents.cljs$core$IFn$_invoke$arity$3 = (function (f,p,new_arity){
var force_arity = (function sicmutils$polynomial$force_arity(){
var or__4253__auto__ = new_arity;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.util.illegal("`new-arity` argument to `map-exponents` required when promoting constant.");
}
});
var handle_constant = (function sicmutils$polynomial$handle_constant(){
var f_expts = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(sicmutils.polynomial.exponent.empty) : f.call(null,sicmutils.polynomial.exponent.empty));
if(cljs.core.empty_QMARK_(f_expts)){
return p;
} else {
var arity = force_arity();
return sicmutils.polynomial.__GT_Polynomial(arity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(f_expts,p)], null),null);
}
});
if(sicmutils.polynomial.polynomial_QMARK_(p)){
return sicmutils.polynomial.make.cljs$core$IFn$_invoke$arity$2((function (){var or__4253__auto__ = new_arity;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.polynomial.bare_arity(p);
}
})(),(function (){var iter__4652__auto__ = (function sicmutils$polynomial$iter__86400(s__86401){
return (new cljs.core.LazySeq(null,(function (){
var s__86401__$1 = s__86401;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__86401__$1);
if(temp__5753__auto__){
var s__86401__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__86401__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__86401__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__86403 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__86402 = (0);
while(true){
if((i__86402 < size__4651__auto__)){
var vec__86404 = cljs.core._nth(c__4650__auto__,i__86402);
var expts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86404,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86404,(1),null);
var f_expts = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(expts) : f.call(null,expts));
cljs.core.chunk_append(b__86403,sicmutils.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(f_expts,c));

var G__86726 = (i__86402 + (1));
i__86402 = G__86726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__86403),sicmutils$polynomial$iter__86400(cljs.core.chunk_rest(s__86401__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__86403),null);
}
} else {
var vec__86407 = cljs.core.first(s__86401__$2);
var expts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86407,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86407,(1),null);
var f_expts = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(expts) : f.call(null,expts));
return cljs.core.cons(sicmutils.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(f_expts,c),sicmutils$polynomial$iter__86400(cljs.core.rest(s__86401__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(sicmutils.polynomial.bare_terms(p));
})());
} else {
if(sicmutils.value.zero_QMARK_(p)){
return p;
} else {
return handle_constant();

}
}
}));

(sicmutils.polynomial.map_exponents.cljs$lang$maxFixedArity = 3);

/**
 * Given a univariate [[Polynomial]] (see [[univariate?]]) returns a dense vector
 *   of the coefficients of each term in ascending order.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (univariate->dense (make [1 0 0 2 3 4]))
 *   ;;=> [1 0 0 2 3 4]
 *   ```
 * 
 *   Supplying the second argument `x-degree` will pad the right side of the
 *   returning coefficient vector to be the max of `x-degree` and `(degree x)`.
 * 
 *   NOTE use [[lower-arity]] to generate a univariate polynomial in the first
 *   indeterminate, given a multivariate polynomial.
 */
sicmutils.polynomial.univariate__GT_dense = (function sicmutils$polynomial$univariate__GT_dense(var_args){
var G__86411 = arguments.length;
switch (G__86411) {
case 1:
return sicmutils.polynomial.univariate__GT_dense.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.polynomial.univariate__GT_dense.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.polynomial.univariate__GT_dense.cljs$core$IFn$_invoke$arity$1 = (function (x){
return sicmutils.polynomial.univariate__GT_dense.cljs$core$IFn$_invoke$arity$2(x,sicmutils.polynomial.degree.cljs$core$IFn$_invoke$arity$1(x));
}));

(sicmutils.polynomial.univariate__GT_dense.cljs$core$IFn$_invoke$arity$2 = (function (x,x_degree){
if(sicmutils.polynomial.coeff_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(x_degree,(0)));
} else {
if(sicmutils.polynomial.univariate_QMARK_(x)){
} else {
throw (new Error("Assert failed: (univariate? x)"));
}

var d = sicmutils.polynomial.degree.cljs$core$IFn$_invoke$arity$1(x);
var terms = sicmutils.polynomial.bare_terms(x);
var acc = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var i = (0);
while(true){
if((i > d)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.persistent_BANG_(acc),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((x_degree - d),(0)));
} else {
var t = cljs.core.first(terms);
var e = sicmutils.polynomial.impl.exponents(t);
var md = sicmutils.polynomial.exponent.monomial_degree.cljs$core$IFn$_invoke$arity$2(e,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(md,i)){
var G__86729 = cljs.core.rest(terms);
var G__86730 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,sicmutils.polynomial.impl.coefficient(t));
var G__86731 = (i + (1));
terms = G__86729;
acc = G__86730;
i = G__86731;
continue;
} else {
var G__86732 = terms;
var G__86733 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,(0));
var G__86734 = (i + (1));
terms = G__86732;
acc = G__86733;
i = G__86734;
continue;
}
}
break;
}
}
}));

(sicmutils.polynomial.univariate__GT_dense.cljs$lang$maxFixedArity = 2);

/**
 * Given a univariate polynomial `p`, returns a [[series/PowerSeries]]
 *   representation of the supplied [[Polynomial]].
 * 
 *   Given a [[series/PowerSeries]], acts as identity.
 * 
 *   Non-[[Polynomial]] coefficients return [[series/PowerSeries]] instances
 *   via [[series/constant]]; any multivariate [[Polynomial]] throws an exception.
 * 
 *   NOTE use [[lower-arity]] to generate a univariate polynomial in the first
 *   indeterminate, given a multivariate polynomial.
 */
sicmutils.polynomial.__GT_power_series = (function sicmutils$polynomial$__GT_power_series(p){
if(sicmutils.series.power_series_QMARK_(p)){
return p;
} else {
if(sicmutils.polynomial.univariate_QMARK_(p)){
return sicmutils.series.power_series_STAR_(sicmutils.polynomial.univariate__GT_dense.cljs$core$IFn$_invoke$arity$1(p));
} else {
if(sicmutils.polynomial.polynomial_QMARK_(p)){
return sicmutils.util.illegal("Only univariate polynomials can be converted to [[PowerSeries]].\n         Use [[polynomial/lower]] to generate a univariate.");
} else {
return sicmutils.series.constant.cljs$core$IFn$_invoke$arity$1(p);

}
}
}
});
/**
 * Returns a univariate polynomial of all terms in the
 *   supplied [[series/PowerSeries]] instance, up to (and including) order
 *   `n-terms`.
 * 
 *   ```clojure
 *   (g/simplify
 *  ((from-power-series series/exp-series 3) 'x))
 *   ;; => (+ (* 1/6 (expt x 3)) (* 1/2 (expt x 2)) x 1)
 *   ```
 */
sicmutils.polynomial.from_power_series = (function sicmutils$polynomial$from_power_series(s,n_terms){
if(sicmutils.series.power_series_QMARK_(s)){
} else {
throw (new Error("Assert failed: (series/power-series? s)"));
}

return sicmutils.series.sum((function (){var G__86418 = sicmutils.polynomial.identity.cljs$core$IFn$_invoke$arity$0();
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__86418) : s.call(null,G__86418));
})(),n_terms);
});
/**
 * Given some polynomial `p` and a coefficient `c`, returns a new [[Polynomial]]
 *   generated by multiplying each coefficient of `p` by `c` (on the right).
 * 
 *   See [[scale-l]] if left multiplication is important.
 * 
 *   NOTE that [[scale]] will return a non-[[Polynomial]] if the result of the
 *   mapping has only a constant term.
 */
sicmutils.polynomial.scale = (function sicmutils$polynomial$scale(p,c){
if(sicmutils.value.zero_QMARK_(c)){
return c;
} else {
return sicmutils.polynomial.map_coefficients((function (p1__86419_SHARP_){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(p1__86419_SHARP_,c);
}),p);
}
});
/**
 * Given some polynomial `p` and a coefficient `c`, returns a new [[Polynomial]]
 *   generated by multiplying each coefficient of `p` by `c` (on the left).
 * 
 *   See [[scale]] if right multiplication is important.
 * 
 *   NOTE that [[scale-l]] will return a non-[[Polynomial]] if the result of the
 *   mapping has only a constant term.
 */
sicmutils.polynomial.scale_l = (function sicmutils$polynomial$scale_l(c,p){
if(sicmutils.value.zero_QMARK_(c)){
return c;
} else {
return sicmutils.polynomial.map_coefficients((function (p1__86420_SHARP_){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(c,p1__86420_SHARP_);
}),p);
}
});
/**
 * Given a polynomial `p`, returns a normalized polynomial generated by dividing
 *   through either the [[leading-coefficient]] of `p` or an optional, explicitly
 *   supplied scaling factor `c`.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (let [p (make [5 3 2 2 10])]
 *  (univariate->dense (normalize p)))
 *   ;;=> [1/2 3/10 1/5 1/5 1]
 *   ```
 */
sicmutils.polynomial.normalize = (function sicmutils$polynomial$normalize(var_args){
var G__86422 = arguments.length;
switch (G__86422) {
case 1:
return sicmutils.polynomial.normalize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.polynomial.normalize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.polynomial.normalize.cljs$core$IFn$_invoke$arity$1 = (function (p){
return sicmutils.polynomial.normalize.cljs$core$IFn$_invoke$arity$2(p,sicmutils.polynomial.leading_coefficient(p));
}));

(sicmutils.polynomial.normalize.cljs$core$IFn$_invoke$arity$2 = (function (p,c){
if(sicmutils.value.one_QMARK_(c)){
return p;
} else {
if(sicmutils.value.zero_QMARK_(c)){
return sicmutils.util.arithmetic_ex(["Divide by zero: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''));
} else {
if(sicmutils.polynomial.polynomial_QMARK_(c)){
return (sicmutils.polynomial.evenly_divide.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.evenly_divide.cljs$core$IFn$_invoke$arity$2(p,c) : sicmutils.polynomial.evenly_divide.call(null,p,c));
} else {
return sicmutils.polynomial.scale(p,sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(c));

}
}
}
}));

(sicmutils.polynomial.normalize.cljs$lang$maxFixedArity = 2);

/**
 * Given a polynomial `p`, returns the [reciprocal
 *   polynomial](https://en.wikipedia.org/wiki/Reciprocal_polynomial) with respect
 *   to the `i`th indeterminate. `i` defaults to 0.
 * 
 *   The reciprocal polynomial of `p` with respect to `i` is generated by
 * 
 *   - treating the polynomial as univariate with respect to `i` and pushing all
 *  other terms into the coefficients of the polynomial
 *   - reversing the order of these coefficients
 *   - flattening the polynomial out again
 * 
 *   For example, note that the entries for the first indeterminate are reversed:
 * 
 *   ```clojure
 *   (= (make 3 {[3 0 0] 5 [2 0 1] 2 [0 2 1] 3})
 *   (reciprocal
 *     (make 3 {[0 0 0] 5 [1 0 1] 2 [3 2 1] 3})))
 *   ```
 */
sicmutils.polynomial.reciprocal = (function sicmutils$polynomial$reciprocal(var_args){
var G__86424 = arguments.length;
switch (G__86424) {
case 1:
return sicmutils.polynomial.reciprocal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.polynomial.reciprocal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.polynomial.reciprocal.cljs$core$IFn$_invoke$arity$1 = (function (p){
return sicmutils.polynomial.reciprocal.cljs$core$IFn$_invoke$arity$2(p,(0));
}));

(sicmutils.polynomial.reciprocal.cljs$core$IFn$_invoke$arity$2 = (function (p,i){
if(sicmutils.polynomial.polynomial_QMARK_(p)){
var d = sicmutils.polynomial.degree.cljs$core$IFn$_invoke$arity$2(p,i);
if((d === (0))){
return p;
} else {
return sicmutils.polynomial.map_exponents.cljs$core$IFn$_invoke$arity$2((function (m){
var v = sicmutils.polynomial.exponent.monomial_degree.cljs$core$IFn$_invoke$arity$2(m,i);
var v_SINGLEQUOTE_ = (d - v);
return sicmutils.polynomial.exponent.assoc(m,i,v_SINGLEQUOTE_);
}),p);
}
} else {
return p;
}
}));

(sicmutils.polynomial.reciprocal.cljs$lang$maxFixedArity = 2);

/**
 * Given some [[Polynomial]] `p`, returns `p` without its [[leading-term]].
 *   non-[[Polynomial]] `p` inputs are treated at constant polynomials and return
 *   `0`.
 * 
 *   NOTE that [[drop-leading-term]] will return a non-[[Polynomial]] if the result
 *   of the mapping has only a constant term.
 */
sicmutils.polynomial.drop_leading_term = (function sicmutils$polynomial$drop_leading_term(p){
if(sicmutils.polynomial.polynomial_QMARK_(p)){
var a = sicmutils.polynomial.bare_arity(p);
var terms = cljs.core.pop(sicmutils.polynomial.bare_terms(p));
return sicmutils.polynomial.terms__GT_polynomial(a,terms);
} else {
return (0);
}
});
/**
 * Accepts
 * 
 *   - two inputs `l` and `r`
 *   - A `coeff-op`, used when both inputs are non-[[Polynomial]]
 *   - a `terms-op` that acts on two vectors of bare terms
 * 
 *   And returns:
 * 
 *   - `(coeff-op l r)` when both inputs are non-[[Polynomial]],
 * 
 *   - `(terms-op l r)` otherwise, appropriately converting `l` or `r` into a
 *  singleton term vector when needed.
 * 
 *   The result is converted back to a [[Polynomial]] (or dropped to a coefficient)
 *   via [[terms->polynomial]], or a custom function supplied by the optional
 *   `:->poly` argument.
 */
sicmutils.polynomial.binary_combine = (function sicmutils$polynomial$binary_combine(var_args){
var args__4870__auto__ = [];
var len__4864__auto___86743 = arguments.length;
var i__4865__auto___86744 = (0);
while(true){
if((i__4865__auto___86744 < len__4864__auto___86743)){
args__4870__auto__.push((arguments[i__4865__auto___86744]));

var G__86745 = (i__4865__auto___86744 + (1));
i__4865__auto___86744 = G__86745;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((4) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((4)),(0),null)):null);
return sicmutils.polynomial.binary_combine.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4871__auto__);
});

(sicmutils.polynomial.binary_combine.cljs$core$IFn$_invoke$arity$variadic = (function (l,r,coeff_op,terms_op,p__86430){
var map__86431 = p__86430;
var map__86431__$1 = cljs.core.__destructure_map(map__86431);
var __GT_poly = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__86431__$1,new cljs.core.Keyword(null,"->poly","->poly",360305471),sicmutils.polynomial.terms__GT_polynomial);
var l_poly_QMARK_ = sicmutils.polynomial.polynomial_QMARK_(l);
var r_poly_QMARK_ = sicmutils.polynomial.polynomial_QMARK_(r);
if(((l_poly_QMARK_) && (r_poly_QMARK_))){
var G__86432 = sicmutils.polynomial.check_same_arity(l,r);
var G__86433 = (function (){var G__86434 = sicmutils.polynomial.bare_terms(l);
var G__86435 = sicmutils.polynomial.bare_terms(r);
return (terms_op.cljs$core$IFn$_invoke$arity$2 ? terms_op.cljs$core$IFn$_invoke$arity$2(G__86434,G__86435) : terms_op.call(null,G__86434,G__86435));
})();
return (__GT_poly.cljs$core$IFn$_invoke$arity$2 ? __GT_poly.cljs$core$IFn$_invoke$arity$2(G__86432,G__86433) : __GT_poly.call(null,G__86432,G__86433));
} else {
if(l_poly_QMARK_){
var G__86436 = sicmutils.polynomial.bare_arity(l);
var G__86437 = (function (){var G__86438 = sicmutils.polynomial.bare_terms(l);
var G__86439 = sicmutils.polynomial.impl.constant__GT_terms(r);
return (terms_op.cljs$core$IFn$_invoke$arity$2 ? terms_op.cljs$core$IFn$_invoke$arity$2(G__86438,G__86439) : terms_op.call(null,G__86438,G__86439));
})();
return (__GT_poly.cljs$core$IFn$_invoke$arity$2 ? __GT_poly.cljs$core$IFn$_invoke$arity$2(G__86436,G__86437) : __GT_poly.call(null,G__86436,G__86437));
} else {
if(r_poly_QMARK_){
var G__86440 = sicmutils.polynomial.bare_arity(r);
var G__86441 = (function (){var G__86442 = sicmutils.polynomial.impl.constant__GT_terms(l);
var G__86443 = sicmutils.polynomial.bare_terms(r);
return (terms_op.cljs$core$IFn$_invoke$arity$2 ? terms_op.cljs$core$IFn$_invoke$arity$2(G__86442,G__86443) : terms_op.call(null,G__86442,G__86443));
})();
return (__GT_poly.cljs$core$IFn$_invoke$arity$2 ? __GT_poly.cljs$core$IFn$_invoke$arity$2(G__86440,G__86441) : __GT_poly.call(null,G__86440,G__86441));
} else {
return (coeff_op.cljs$core$IFn$_invoke$arity$2 ? coeff_op.cljs$core$IFn$_invoke$arity$2(l,r) : coeff_op.call(null,l,r));

}
}
}
}));

(sicmutils.polynomial.binary_combine.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sicmutils.polynomial.binary_combine.cljs$lang$applyTo = (function (seq86425){
var G__86426 = cljs.core.first(seq86425);
var seq86425__$1 = cljs.core.next(seq86425);
var G__86427 = cljs.core.first(seq86425__$1);
var seq86425__$2 = cljs.core.next(seq86425__$1);
var G__86428 = cljs.core.first(seq86425__$2);
var seq86425__$3 = cljs.core.next(seq86425__$2);
var G__86429 = cljs.core.first(seq86425__$3);
var seq86425__$4 = cljs.core.next(seq86425__$3);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__86426,G__86427,G__86428,G__86429,seq86425__$4);
}));

/**
 * Returns the negation of polynomial `p`, ie, a polynomial with all coefficients
 *   negated.
 */
sicmutils.polynomial.negate = (function sicmutils$polynomial$negate(p){
return sicmutils.polynomial.map_coefficients(sicmutils.generic.negate,p);
});
/**
 * If the [[leading-coefficient]] of `p` is negative, returns `(negate p)`, else
 *   acts as identity.
 */
sicmutils.polynomial.abs = (function sicmutils$polynomial$abs(p){
if(cljs.core.truth_(sicmutils.polynomial.negative_QMARK_(p))){
return sicmutils.polynomial.negate(p);
} else {
return p;
}
});
/**
 * Returns the sum of polynomials `p` and `q`, with appropriate handling for
 *   non-[[Polynomial]] coefficient inputs on either or both sides.
 */
sicmutils.polynomial.add = (function sicmutils$polynomial$add(p,q){
return sicmutils.polynomial.binary_combine(p,q,sicmutils.generic.add,sicmutils.polynomial.impl.add);
});
/**
 * Returns the difference of polynomials `p` and `q`, with appropriate handling
 *   for non-[[Polynomial]] coefficient inputs on either or both sides.
 */
sicmutils.polynomial.sub = (function sicmutils$polynomial$sub(p,q){
return sicmutils.polynomial.binary_combine(p,q,sicmutils.generic.sub,sicmutils.polynomial.impl.sub);
});
/**
 * Returns the product of polynomials `p` and `q`, with appropriate handling for
 *   non-[[Polynomial]] coefficient inputs on either or both sides.
 */
sicmutils.polynomial.mul = (function sicmutils$polynomial$mul(p,q){
return sicmutils.polynomial.binary_combine(p,q,sicmutils.generic.mul,sicmutils.polynomial.impl.mul);
});
/**
 * Returns the square of polynomial `p`. Equivalent to `(mul p p)`.
 */
sicmutils.polynomial.square = (function sicmutils$polynomial$square(p){
return sicmutils.polynomial.mul(p,p);
});
/**
 * Returns the cube of polynomial `p`. Equivalent to `(mul p (mul p p))`.
 */
sicmutils.polynomial.cube = (function sicmutils$polynomial$cube(p){
return sicmutils.polynomial.mul(p,sicmutils.polynomial.mul(p,p));
});
/**
 * Returns a polynomial generated by raising the input polynomial `p` to
 *   the (integer) power `n`.
 * 
 *   Negative exponents are not supported. For negative polynomial exponentation,
 *   see [[rational-function/expt]].
 */
sicmutils.polynomial.expt = (function sicmutils$polynomial$expt(p,n){
var expt_iter = (function sicmutils$polynomial$expt_$_expt_iter(x,n__$1,answer){
while(true){
if((n__$1 === (0))){
return answer;
} else {
if(cljs.core.even_QMARK_(n__$1)){
var G__86746 = sicmutils.polynomial.mul(x,x);
var G__86747 = cljs.core.quot(n__$1,(2));
var G__86748 = answer;
x = G__86746;
n__$1 = G__86747;
answer = G__86748;
continue;
} else {
var G__86749 = x;
var G__86750 = (n__$1 - (1));
var G__86751 = sicmutils.polynomial.mul(x,answer);
x = G__86749;
n__$1 = G__86750;
answer = G__86751;
continue;

}
}
break;
}
});
if(sicmutils.polynomial.coeff_QMARK_(p)){
return sicmutils.generic.expt.cljs$core$IFn$_invoke$arity$2(p,n);
} else {
if((!(sicmutils.value.native_integral_QMARK_(n)))){
return sicmutils.util.illegal(["Can only raise an FPF to an exact integer power: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
} else {
if((n < (0))){
return sicmutils.util.illegal(["No inverse -- FPF:EXPT:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
} else {
if(sicmutils.value.one_QMARK_(p)){
return p;
} else {
if(sicmutils.value.zero_QMARK_(p)){
if(sicmutils.value.zero_QMARK_(n)){
return sicmutils.util.arithmetic_ex("poly 0^0");
} else {
return p;
}
} else {
return expt_iter(p,n,(1));

}
}
}
}
}
});
/**
 * Given two polynomials `u` and `v`, returns a pair of polynomials of the form
 *   `[quotient, remainder]` using [polynomial long
 *   division](https://en.wikipedia.org/wiki/Polynomial_long_division).
 * 
 *   The contract satisfied by this returned pair is that
 * 
 *   ```
 *   u == (add (mul quotient v) remainder)
 *   ```
 */
sicmutils.polynomial.divide = (function sicmutils$polynomial$divide(u,v){
if(sicmutils.value.zero_QMARK_(v)){
return sicmutils.util.illegal("internal polynomial division by zero");
} else {
if(((sicmutils.value.zero_QMARK_(u)) || (sicmutils.value.one_QMARK_(v)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,(0)], null);
} else {
var coeff_COLON_div = (function sicmutils$polynomial$divide_$_coeff_COLON_div(l,r){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.quotient.cljs$core$IFn$_invoke$arity$2(l,r),sicmutils.generic.remainder.cljs$core$IFn$_invoke$arity$2(l,r)], null);
});
return sicmutils.polynomial.binary_combine.cljs$core$IFn$_invoke$arity$variadic(u,v,coeff_COLON_div,sicmutils.polynomial.impl.div,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"->poly","->poly",360305471),(function (a,p__86446){
var vec__86447 = p__86446;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86447,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86447,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.polynomial.terms__GT_polynomial(a,q),sicmutils.polynomial.terms__GT_polynomial(a,r)], null);
})], 0));

}
}
});
/**
 * Returns true if the numerator `n` is evenly divisible by `d` (ie, leaves no
 *   remainder), false otherwise.
 * 
 *   NOTE that this performs a full division with [[divide]]. If you're planning on
 *   doing this, you may as well call [[divide]] and check that the remainder
 *   satisfies [[sicmutils.value/zero?]].
 */
sicmutils.polynomial.divisible_QMARK_ = (function sicmutils$polynomial$divisible_QMARK_(n,d){
var vec__86453 = sicmutils.polynomial.divide(n,d);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86453,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86453,(1),null);
return sicmutils.value.zero_QMARK_(r);
});
/**
 * Returns the result of dividing the polynomial `u` by `v` (non-[[Polynomial]]
 *   instances are allowed).
 * 
 *   Throws an exception if the division leaves a remainder. Else, returns the
 *   quotient.
 */
sicmutils.polynomial.evenly_divide = (function sicmutils$polynomial$evenly_divide(u,v){
if(sicmutils.value.one_QMARK_(v)){
return u;
} else {
var vec__86456 = sicmutils.polynomial.divide(u,v);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86456,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86456,(1),null);
if(sicmutils.value.zero_QMARK_(r)){
} else {
sicmutils.util.illegal_state(["expected even division left a remainder! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(u)," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," r ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join(''));
}

return q;
}
});
/**
 * Clojurescript multiplication doesn't autopromote; we expect large values
 *   in [[pseudo-remainder]], and use [[->big]] to pre-cast the factors
 *   to [[util/bigint]] so they don't overflow.
 */
sicmutils.polynomial.__GT_big = (function sicmutils$polynomial$__GT_big(c){
if(sicmutils.value.integral_QMARK_(c)){
return sicmutils.util.bigint(c);
} else {
return c;
}
});
/**
 * Returns the pseudo-remainder of univariate polynomials `u` and `v`.
 * 
 *   NOTE: Fractions won't appear in the result; instead the divisor is multiplied
 *   by the leading coefficient of the dividend before quotient terms are generated
 *   so that division will not result in fractions.
 * 
 *   Returns a pair of
 * 
 *   - the remainder
 *   - the integerizing factor needed to make this happen.
 * 
 *   Similar in spirit to Knuth's algorithm 4.6.1R, except we don't multiply the
 *   remainder through during gaps in the remainder. Since you don't know up front
 *   how many times the integerizing multiplication will be done, we also return
 *   the number d for which d * u = q * v + r.
 */
sicmutils.polynomial.pseudo_remainder = (function sicmutils$polynomial$pseudo_remainder(u,v){
if(sicmutils.polynomial.univariate_QMARK_(u)){
} else {
throw (new Error("Assert failed: (univariate? u)"));
}

if(sicmutils.polynomial.univariate_QMARK_(v)){
} else {
throw (new Error("Assert failed: (univariate? v)"));
}

if((!(sicmutils.value.zero_QMARK_(v)))){
} else {
throw (new Error("Assert failed: (not (v/zero? v))"));
}

var vec__86459 = sicmutils.polynomial.leading_term(v);
var vn_expts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86459,(0),null);
var vn_coeff = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86459,(1),null);
var vn_coeff__$1 = sicmutils.polynomial.__GT_big(vn_coeff);
var _STAR_vn = (function (p){
return sicmutils.polynomial.scale(p,vn_coeff__$1);
});
var n = sicmutils.polynomial.exponent.monomial_degree.cljs$core$IFn$_invoke$arity$1(vn_expts);
var remainder = u;
var d = (0);
while(true){
var m = sicmutils.polynomial.degree.cljs$core$IFn$_invoke$arity$1(remainder);
var c = sicmutils.polynomial.leading_coefficient(remainder);
var c__$1 = sicmutils.polynomial.__GT_big(c);
if((m < n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,d], null);
} else {
var G__86755 = sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(sicmutils.polynomial.sub(_STAR_vn(remainder),sicmutils.polynomial.mul(sicmutils.polynomial.c_STAR_xn((1),c__$1,(m - n)),v)));
var G__86756 = (d + (1));
remainder = G__86755;
d = G__86756;
continue;
}
break;
}
});
/**
 * Returns true if `n` is a valid variable index for the [[Polynomial]] `p`, and
 *   the variable with that index has no powers greater than `0` in `p`, false
 *   otherwise.
 */
sicmutils.polynomial.contractible_QMARK_ = (function sicmutils$polynomial$contractible_QMARK_(p,n){
return ((sicmutils.polynomial.valid_arity_QMARK_(p,n)) && ((sicmutils.polynomial.degree.cljs$core$IFn$_invoke$arity$2(p,n) === (0))));
});
/**
 * If `p` is [[contractible?]] at index `n`, returns a new [[Polynomial]] instance
 *   of [[arity]] `1` less than `p` with all variable indices > `n` decremented.
 * 
 *   For non-[[Polynomial]] inputs, acts as identity. Throws if `p` is not
 *   explicitly [[contractible?]].
 * 
 *   For example:
 * 
 *   ```clojure
 *   (= (make 2 {[1 2] 3 [3 4] 5})
 *   (contract
 *     (make 3 {[0 1 2] 3 [0 3 4] 5}) 0))
 *   ```
 */
sicmutils.polynomial.contract = (function sicmutils$polynomial$contract(p,n){
if((!(sicmutils.polynomial.polynomial_QMARK_(p)))){
return p;
} else {
if(sicmutils.polynomial.contractible_QMARK_(p,n)){
return sicmutils.polynomial.map_exponents.cljs$core$IFn$_invoke$arity$3((function (p1__86464_SHARP_){
return sicmutils.polynomial.exponent.lower.cljs$core$IFn$_invoke$arity$2(p1__86464_SHARP_,n);
}),p,(sicmutils.polynomial.bare_arity(p) - (1)));
} else {
return sicmutils.util.illegal(["Polynomial not contractible: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)," in position ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));

}
}
});
/**
 * Interpolates a new variable into the supplied [[Polynomial]] `p` at index `n`
 *   by incrementing any existing variable index >= `n`.
 * 
 *   Returns a new [[Polynomial]] of [[arity]] 1 greater than the [[arity]] of `p`,
 *   or equal to `(inc n)` if `n` is greater than the [[arity]] of `p`.
 * 
 *   For non-[[Polynomial]] inputs (or negative `n`), acts as identity.
 */
sicmutils.polynomial.extend = (function sicmutils$polynomial$extend(p,n){
if((((!(sicmutils.polynomial.polynomial_QMARK_(p)))) || ((n < (0))))){
return p;
} else {
var a = sicmutils.polynomial.bare_arity(p);
if((n > a)){
return sicmutils.polynomial.__GT_Polynomial((n + (1)),sicmutils.polynomial.bare_terms(p),cljs.core.meta(p));
} else {
return sicmutils.polynomial.map_exponents.cljs$core$IFn$_invoke$arity$3((function (p1__86467_SHARP_){
return sicmutils.polynomial.exponent.raise.cljs$core$IFn$_invoke$arity$3(p1__86467_SHARP_,n,(0));
}),p,(a + (1)));
}
}
});
/**
 * Given a multivariate [[Polynomial]] `p`, returns an equivalent
 *   univariate [[Polynomial]] whose coefficients are polynomials of [[arity]]
 *   equal to one less than the [[arity]] of `p`.
 * 
 *   Use [[raise-arity]] to undo this transformation. See [[with-lower-arity]] for
 *   a function that packages these two transformations.
 * 
 *   NOTE that [[lower-arity]] will drop a coefficient down to a non-[[Polynomial]]
 *   if the result of extracting the first variable leaves a constant term.
 */
sicmutils.polynomial.lower_arity = (function sicmutils$polynomial$lower_arity(p){
if(sicmutils.polynomial.multivariate_QMARK_(p)){
} else {
throw (new Error("Assert failed: (multivariate? p)"));
}

var A = sicmutils.polynomial.bare_arity(p);
var lower_terms = (function sicmutils$polynomial$lower_arity_$_lower_terms(terms){
return sicmutils.polynomial.make.cljs$core$IFn$_invoke$arity$2((A - (1)),(function (){var iter__4652__auto__ = (function sicmutils$polynomial$lower_arity_$_lower_terms_$_iter__86481(s__86482){
return (new cljs.core.LazySeq(null,(function (){
var s__86482__$1 = s__86482;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__86482__$1);
if(temp__5753__auto__){
var s__86482__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__86482__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__86482__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__86484 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__86483 = (0);
while(true){
if((i__86483 < size__4651__auto__)){
var vec__86485 = cljs.core._nth(c__4650__auto__,i__86483);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86485,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86485,(1),null);
cljs.core.chunk_append(b__86484,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.polynomial.exponent.lower.cljs$core$IFn$_invoke$arity$2(xs,(0)),c], null));

var G__86763 = (i__86483 + (1));
i__86483 = G__86763;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__86484),sicmutils$polynomial$lower_arity_$_lower_terms_$_iter__86481(cljs.core.chunk_rest(s__86482__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__86484),null);
}
} else {
var vec__86488 = cljs.core.first(s__86482__$2);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86488,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86488,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.polynomial.exponent.lower.cljs$core$IFn$_invoke$arity$2(xs,(0)),c], null),sicmutils$polynomial$lower_arity_$_lower_terms_$_iter__86481(cljs.core.rest(s__86482__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(terms);
})());
});
return sicmutils.polynomial.make.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__86491){
var vec__86492 = p__86491;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86492,(0),null);
var terms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86492,(1),null);
var expts = (((x === (0)))?sicmutils.polynomial.exponent.empty:(sicmutils.polynomial.exponent.make.cljs$core$IFn$_invoke$arity$2 ? sicmutils.polynomial.exponent.make.cljs$core$IFn$_invoke$arity$2((0),x) : sicmutils.polynomial.exponent.make.call(null,(0),x)));
return sicmutils.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(expts,lower_terms(terms));
}),cljs.core.group_by((function (p1__86468_SHARP_){
return sicmutils.polynomial.exponent.monomial_degree.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.impl.exponents(p1__86468_SHARP_),(0));
}),sicmutils.polynomial.bare_terms(p))));
});
/**
 * Given either a non-[[Polynomial]] coefficient or a univariate [[Polynomial]]
 *   with possibly-[[Polynomial]] coefficients, returns a new [[Polynomial]] of
 *   arity `a` generated by attaching the polynomial coefficients back as variables
 *   starting with `1`.
 * 
 *   [[raise-arity]] undoes the transformation of [[lower-arity]].
 *   See [[with-lower-arity]] for a function that packages these two
 *   transformations.
 */
sicmutils.polynomial.raise_arity = (function sicmutils$polynomial$raise_arity(p,a){
if(sicmutils.polynomial.polynomial_QMARK_(p)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.bare_arity(p),(1))){
} else {
throw (new Error("Assert failed: (= (bare-arity p) 1)"));
}

var terms = sicmutils.polynomial.impl.sparse__GT_terms.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function sicmutils$polynomial$raise_arity_$_iter__86495(s__86496){
return (new cljs.core.LazySeq(null,(function (){
var s__86496__$1 = s__86496;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__86496__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var vec__86502 = cljs.core.first(xs__6308__auto__);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86502,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86502,(1),null);
var iterys__4648__auto__ = ((function (s__86496__$1,vec__86502,x,q,xs__6308__auto__,temp__5753__auto__){
return (function sicmutils$polynomial$raise_arity_$_iter__86495_$_iter__86497(s__86498){
return (new cljs.core.LazySeq(null,((function (s__86496__$1,vec__86502,x,q,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__86498__$1 = s__86498;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__86498__$1);
if(temp__5753__auto____$1){
var s__86498__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__86498__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__86498__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__86500 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__86499 = (0);
while(true){
if((i__86499 < size__4651__auto__)){
var vec__86506 = cljs.core._nth(c__4650__auto__,i__86499);
var ys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86506,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86506,(1),null);
var expts = sicmutils.polynomial.exponent.raise.cljs$core$IFn$_invoke$arity$3(ys,(0),sicmutils.polynomial.exponent.monomial_degree.cljs$core$IFn$_invoke$arity$2(x,(0)));
cljs.core.chunk_append(b__86500,sicmutils.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(expts,c));

var G__86766 = (i__86499 + (1));
i__86499 = G__86766;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__86500),sicmutils$polynomial$raise_arity_$_iter__86495_$_iter__86497(cljs.core.chunk_rest(s__86498__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__86500),null);
}
} else {
var vec__86509 = cljs.core.first(s__86498__$2);
var ys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86509,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86509,(1),null);
var expts = sicmutils.polynomial.exponent.raise.cljs$core$IFn$_invoke$arity$3(ys,(0),sicmutils.polynomial.exponent.monomial_degree.cljs$core$IFn$_invoke$arity$2(x,(0)));
return cljs.core.cons(sicmutils.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(expts,c),sicmutils$polynomial$raise_arity_$_iter__86495_$_iter__86497(cljs.core.rest(s__86498__$2)));
}
} else {
return null;
}
break;
}
});})(s__86496__$1,vec__86502,x,q,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__86496__$1,vec__86502,x,q,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(sicmutils.polynomial.__GT_terms(q)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,sicmutils$polynomial$raise_arity_$_iter__86495(cljs.core.rest(s__86496__$1)));
} else {
var G__86767 = cljs.core.rest(s__86496__$1);
s__86496__$1 = G__86767;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(sicmutils.polynomial.bare_terms(p));
})());
return sicmutils.polynomial.__GT_Polynomial(a,terms,cljs.core.meta(p));
} else {
return sicmutils.polynomial.constant.cljs$core$IFn$_invoke$arity$2(a,p);
}
});
/**
 * Given:
 * 
 *   - multivariate [[Polynomial]]s `u` and `v`
 *   - a `continue` function that accepts two univariate [[Polynomial]]s with
 *  possibly-[[Polynomial]] coefficients,
 * 
 *   Returns the result of calling [[lower-arity]] on `u` and `v`, passing the
 *   results to `continue` and using [[raise-arity]] to raise the result back to
 *   the original shared [[arity]] of `u` and `v`.
 * 
 *   The exception is that if `continue` returns a
 *   non-[[Polynomial]], [[with-lower-arity]] will not attempt to re-package it as
 *   a [[Polynomial]].
 */
sicmutils.polynomial.with_lower_arity = (function sicmutils$polynomial$with_lower_arity(u,v,continue$){
var a = sicmutils.polynomial.check_same_arity(u,v);
var result = (function (){var G__86517 = sicmutils.polynomial.lower_arity(u);
var G__86518 = sicmutils.polynomial.lower_arity(v);
return (continue$.cljs$core$IFn$_invoke$arity$2 ? continue$.cljs$core$IFn$_invoke$arity$2(G__86517,G__86518) : continue$.call(null,G__86517,G__86518));
})();
if(sicmutils.polynomial.polynomial_QMARK_(result)){
return sicmutils.polynomial.raise_arity(result,a);
} else {
return result;
}
});
/**
 * Returns the result of evaluating the univariate [[Polynomial]] `p` at `x`
 *   using [Horner's rule](https://en.wikipedia.org/wiki/Horner%27s_method).
 * 
 *   If `p` is a non-[[Polynomial]] coefficient, acts as identity.
 * 
 *   NOTE In general, the coefficients of the `p` will themselves
 *   be [[Polynomial]]s, which must then evaluated with values for their
 *   indeterminates. See [[evaluate]] for a multivariate version
 *   of [[evaluate-1]].
 */
sicmutils.polynomial.evaluate_1 = (function sicmutils$polynomial$evaluate_1(p,x){
if((!(sicmutils.polynomial.polynomial_QMARK_(p)))){
return p;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),sicmutils.polynomial.bare_arity(p))){
} else {
throw (new Error(["Assert failed: ","`evaluate-1` requires a univariate polynomial!","\n","(= 1 (bare-arity p))"].join('')));
}

var terms = sicmutils.polynomial.bare_terms(p);
var result = (0);
var x_STAR__STAR_e = (1);
var e = (0);
while(true){
var temp__5751__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,(0));
if(cljs.core.truth_(temp__5751__auto__)){
var vec__86528 = temp__5751__auto__;
var expts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86528,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86528,(1),null);
var e_SINGLEQUOTE_ = sicmutils.polynomial.exponent.monomial_degree.cljs$core$IFn$_invoke$arity$2(expts,(0));
var x_STAR__STAR_e_SINGLEQUOTE_ = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(x_STAR__STAR_e,sicmutils.generic.expt.cljs$core$IFn$_invoke$arity$2(x,(e_SINGLEQUOTE_ - e)));
var G__86768 = cljs.core.next(terms);
var G__86769 = sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(result,sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(c,x_STAR__STAR_e_SINGLEQUOTE_));
var G__86770 = x_STAR__STAR_e_SINGLEQUOTE_;
var G__86771 = e_SINGLEQUOTE_;
terms = G__86768;
result = G__86769;
x_STAR__STAR_e = G__86770;
e = G__86771;
continue;
} else {
return result;
}
break;
}
}
});
/**
 * Returns the result of evaluating a multivariate [[Polynomial]] `p` at the
 *   values in the sequence `xs` using [Horner's
 *   rule](https://en.wikipedia.org/wiki/Horner%27s_method).
 * 
 *   If `p` is a non-[[Polynomial]] coefficient, acts as identity.
 * 
 *   Supplying too many arguments in `xs` (ie, a greater number than the [[arity]]
 *   of `p`) will throw an exception. Too few arguments will result in a partial
 *   evaluation of `p`, leaving the remaining indeterminates with their variable
 *   indices shifted down.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (= (make [0 0 '(* 3 (expt x 2) y) 0 '(* 5 (expt x 2) (expt y 3))])
 *   (simplify
 *     (evaluate
 *       (make 3 {[2 1 2] 3 [2 3 4] 5}) ['x 'y])))
 *   ```
 */
sicmutils.polynomial.evaluate = (function sicmutils$polynomial$evaluate(p,xs){
while(true){
if((!(sicmutils.polynomial.polynomial_QMARK_(p)))){
return p;
} else {
var a = sicmutils.polynomial.bare_arity(p);
if((cljs.core.count(xs) <= a)){
} else {
throw (new Error(["Assert failed: ",["Too many args: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs)].join(''),"\n","(<= (count xs) a)"].join('')));
}

if(cljs.core.empty_QMARK_(xs)){
return p;
} else {
if(sicmutils.value.zero_QMARK_(p)){
return (0);
} else {
var x = cljs.core.first(xs);
var x__$1 = ((((sicmutils.polynomial.polynomial_QMARK_(x)) && ((a > (1)))))?sicmutils.polynomial.constant.cljs$core$IFn$_invoke$arity$2((a - (1)),x):x);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,(1))){
return sicmutils.polynomial.evaluate_1(p,x__$1);
} else {
var L = sicmutils.polynomial.evaluate_1(sicmutils.polynomial.lower_arity(p),x__$1);
if(sicmutils.polynomial.polynomial_QMARK_(L)){
var G__86772 = L;
var G__86773 = cljs.core.next(xs);
p = G__86772;
xs = G__86773;
continue;
} else {
return L;
}
}

}
}
}
break;
}
});
/**
 * Takes a univariate polynomial `a`, an argument `z` and a continuation
 *   `cont` (`vector` by default) and calls the continuation with (SEE BELOW).
 * 
 *   This Horner's rule evaluator is restricted to numerical coefficients and
 *   univariate polynomials. It returns by calling `cont` with 4 arguments:
 * 
 *   - the computed value
 *   - the values of the first two derivatives
 *   - an estimate of the roundoff error incurred in computing the value
 * 
 *   The recurrences used are from Kahan's 18 Nov 1986 paper ['Roundoff in
 *   Polynomial
 *   Evaluation'](https://people.eecs.berkeley.edu/~wkahan/Math128/Poly.pdf),
 *   generalized for sparse representations and another derivative by GJS.
 * 
 *   For $p = A(z)$, $q = A'(z)$, $r = A''(z)$, and $e$ = error in $A(x)$,
 * 
 *   $$p_{j+n} = z^n p_j + a_{j+n}$$
 * 
 *   $$e_{j+n} = |z|^n ( e_j + (n-1) p_j ) + |p_{j+n}|$$
 * 
 *   $$q_{j+n} = z^n q_j + n z^{n-1} p_j$$
 * 
 *   $$r_{j+n} = z^n r_j + n z^{n-1} q_j + 1/2 n (n-1) z^{n-2} p_j$$
 */
sicmutils.polynomial.horner_with_error = (function sicmutils$polynomial$horner_with_error(var_args){
var G__86537 = arguments.length;
switch (G__86537) {
case 2:
return sicmutils.polynomial.horner_with_error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.polynomial.horner_with_error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.polynomial.horner_with_error.cljs$core$IFn$_invoke$arity$2 = (function (a,z){
return sicmutils.polynomial.horner_with_error.cljs$core$IFn$_invoke$arity$3(a,z,cljs.core.vector);
}));

(sicmutils.polynomial.horner_with_error.cljs$core$IFn$_invoke$arity$3 = (function (a,z,cont){
if(sicmutils.polynomial.univariate_QMARK_(a)){
} else {
throw (new Error("Assert failed: (univariate? a)"));
}

if(typeof z === 'number'){
} else {
throw (new Error("Assert failed: (number? z)"));
}

var call = (function sicmutils$polynomial$call(d,p,q,r,e,a__$1){
var next_degree = sicmutils.polynomial.degree.cljs$core$IFn$_invoke$arity$1(a__$1);
var n = ((sicmutils.polynomial.polynomial_QMARK_(a__$1))?(d - next_degree):d);
var finish = (function (np,nq,nr,ne){
if(sicmutils.polynomial.polynomial_QMARK_(a__$1)){
return sicmutils$polynomial$call(next_degree,np,nq,nr,ne,sicmutils.polynomial.drop_leading_term(a__$1));
} else {
var G__86548 = np;
var G__86549 = nq;
var G__86550 = ((2) * nr);
var G__86551 = (sicmutils.value.machine_epsilon * ((ne - Math.abs(np)) + ne));
return (cont.cljs$core$IFn$_invoke$arity$4 ? cont.cljs$core$IFn$_invoke$arity$4(G__86548,G__86549,G__86550,G__86551) : cont.call(null,G__86548,G__86549,G__86550,G__86551));
}
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1))){
var np = ((z * p) + sicmutils.polynomial.leading_coefficient(a__$1));
var nq = ((z * q) + p);
var nr = ((z * r) + q);
var ne = ((Math.abs(z) * e) + Math.abs(np));
return finish(np,nq,nr,ne);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(2))){
var z_n = (z * z);
var az_n = Math.abs(z_n);
var np = ((z_n * p) + sicmutils.polynomial.leading_coefficient(a__$1));
var nq = ((z_n * q) + ((2) * (z * p)));
var nr = (((z_n * r) + (((2) * z) * q)) + p);
var ne = ((az_n * (e + p)) + Math.abs(np));
return finish(np,nq,nr,ne);
} else {
var z_n_2 = sicmutils.polynomial.expt(z,(n - (2)));
var z_n_1 = (z_n_2 * z);
var z_n = (z_n_1 * z);
var az_n = Math.abs(z_n);
var np = ((z_n * p) + sicmutils.polynomial.leading_coefficient(a__$1));
var nq = ((z_n * q) + (n * (z_n_1 * p)));
var nr = (((z_n * r) + ((n * z_n_1) * q)) + ((((((1) / (2)) * n) * (n - (1))) * z_n_2) * p));
var ne = ((az_n * (e + ((n - (1)) * p))) + Math.abs(np));
return finish(np,nq,nr,ne);

}
}
});
var lc = sicmutils.polynomial.leading_coefficient(a);
return call(sicmutils.polynomial.degree.cljs$core$IFn$_invoke$arity$1(a),lc,(0),(0),(((1) / (2)) * Math.abs(lc)),sicmutils.polynomial.drop_leading_term(a));
}));

(sicmutils.polynomial.horner_with_error.cljs$lang$maxFixedArity = 3);

/**
 * Given some [[Polynomial]] `p`, returns a new [[Polynomial]] generated by
 *   substituting each indeterminate `x_i` for `f_i * x_i`, where `f_i` is a factor
 *   supplied in the `factors` sequence.
 * 
 *   When `p` is a multivariate [[Polynomial]], each factor must be either a
 *   non-[[Polynomial]] or a [[Polynomial]] with the same [[arity]] as `p`.
 */
sicmutils.polynomial.arg_scale = (function sicmutils$polynomial$arg_scale(p,factors){
if(cljs.core._EQ_){
} else {
throw (new Error("Assert failed: ="));
}

if(cljs.core.truth_(sicmutils.polynomial.arity(p))){
} else {
throw (new Error("Assert failed: (arity p)"));
}

if(cljs.core.truth_(cljs.core.count(factors))){
} else {
throw (new Error("Assert failed: (count factors)"));
}

return sicmutils.polynomial.evaluate(p,cljs.core.map.cljs$core$IFn$_invoke$arity$3(sicmutils.polynomial.mul,factors,sicmutils.polynomial.new_variables(sicmutils.polynomial.arity(p))));
});
/**
 * Given some [[Polynomial]] `p`, returns a new [[Polynomial]] generated by
 *   substituting each indeterminate `x_i` for `s_i + x_i`, where `s_i` is a shift
 *   supplied in the `shifts` sequence.
 * 
 *   When `p` is a multivariate [[Polynomial]], each shift must be either a
 *   non-[[Polynomial]] or a [[Polynomial]] with the same [[arity]] as `p`.
 */
sicmutils.polynomial.arg_shift = (function sicmutils$polynomial$arg_shift(p,shifts){
if(cljs.core._EQ_){
} else {
throw (new Error("Assert failed: ="));
}

if(cljs.core.truth_(sicmutils.polynomial.arity(p))){
} else {
throw (new Error("Assert failed: (arity p)"));
}

if(cljs.core.truth_(cljs.core.count(shifts))){
} else {
throw (new Error("Assert failed: (count shifts)"));
}

return sicmutils.polynomial.evaluate(p,cljs.core.map.cljs$core$IFn$_invoke$arity$3(sicmutils.polynomial.add,shifts,sicmutils.polynomial.new_variables(sicmutils.polynomial.arity(p))));
});
/**
 * Given some [[Polynomial]] `p`, returns the partial derivative of `p` with
 *   respect to the `i`th indeterminate. Throws if `i` is an invalid indeterminate
 *   index for `p`.
 * 
 *   For non-[[Polynomial]] inputs, returns `0`.
 */
sicmutils.polynomial.partial_derivative = (function sicmutils$polynomial$partial_derivative(p,i){
if((!(sicmutils.polynomial.polynomial_QMARK_(p)))){
return (0);
} else {
sicmutils.polynomial.validate_arity_BANG_(p,i);

return sicmutils.polynomial.make.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.bare_arity(p),(function (){var iter__4652__auto__ = (function sicmutils$polynomial$partial_derivative_$_iter__86562(s__86563){
return (new cljs.core.LazySeq(null,(function (){
var s__86563__$1 = s__86563;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__86563__$1);
if(temp__5753__auto__){
var s__86563__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__86563__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__86563__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__86565 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__86564 = (0);
while(true){
if((i__86564 < size__4651__auto__)){
var vec__86566 = cljs.core._nth(c__4650__auto__,i__86564);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86566,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86566,(1),null);
var xi = (xs.cljs$core$IFn$_invoke$arity$2 ? xs.cljs$core$IFn$_invoke$arity$2(i,(0)) : xs.call(null,i,(0)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),xi)){
cljs.core.chunk_append(b__86565,(function (){var expts = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),xi))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(xs,i):cljs.core.update.cljs$core$IFn$_invoke$arity$3(xs,i,cljs.core.dec));
var coeff = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(xi,c);
return sicmutils.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(expts,coeff);
})());

var G__86776 = (i__86564 + (1));
i__86564 = G__86776;
continue;
} else {
var G__86777 = (i__86564 + (1));
i__86564 = G__86777;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__86565),sicmutils$polynomial$partial_derivative_$_iter__86562(cljs.core.chunk_rest(s__86563__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__86565),null);
}
} else {
var vec__86578 = cljs.core.first(s__86563__$2);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86578,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86578,(1),null);
var xi = (xs.cljs$core$IFn$_invoke$arity$2 ? xs.cljs$core$IFn$_invoke$arity$2(i,(0)) : xs.call(null,i,(0)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),xi)){
return cljs.core.cons((function (){var expts = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),xi))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(xs,i):cljs.core.update.cljs$core$IFn$_invoke$arity$3(xs,i,cljs.core.dec));
var coeff = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(xi,c);
return sicmutils.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(expts,coeff);
})(),sicmutils$polynomial$partial_derivative_$_iter__86562(cljs.core.rest(s__86563__$2)));
} else {
var G__86778 = cljs.core.rest(s__86563__$2);
s__86563__$1 = G__86778;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(sicmutils.polynomial.bare_terms(p));
})());
}
});
/**
 * Returns the sequence of partial derivatives of [[Polynomial]] `p` with respect
 *   to each indeterminate. The returned sequence has length equal to the [[arity]]
 *   of `p`.
 * 
 *   For non-[[Polynomial]] inputs, returns an empty sequence.
 */
sicmutils.polynomial.partial_derivatives = (function sicmutils$polynomial$partial_derivatives(p){
if((!(sicmutils.polynomial.polynomial_QMARK_(p)))){
return cljs.core.PersistentVector.EMPTY;
} else {
var iter__4652__auto__ = (function sicmutils$polynomial$partial_derivatives_$_iter__86591(s__86592){
return (new cljs.core.LazySeq(null,(function (){
var s__86592__$1 = s__86592;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__86592__$1);
if(temp__5753__auto__){
var s__86592__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__86592__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__86592__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__86594 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__86593 = (0);
while(true){
if((i__86593 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__86593);
cljs.core.chunk_append(b__86594,sicmutils.polynomial.partial_derivative(p,i));

var G__86779 = (i__86593 + (1));
i__86593 = G__86779;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__86594),sicmutils$polynomial$partial_derivatives_$_iter__86591(cljs.core.chunk_rest(s__86592__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__86594),null);
}
} else {
var i = cljs.core.first(s__86592__$2);
return cljs.core.cons(sicmutils.polynomial.partial_derivative(p,i),sicmutils$polynomial$partial_derivatives_$_iter__86591(cljs.core.rest(s__86592__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(sicmutils.polynomial.bare_arity(p)));
}
});
/**
 * These operations are those allowed between [[Polynomial]] and
 *     coefficient instances.
 */
sicmutils.polynomial.operator_table = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"cube","cube",138920159,null),new cljs.core.Symbol(null,"gcd","gcd",1659909537,null),new cljs.core.Symbol(null,"expt","expt",2123850345,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"negate","negate",337772450,null),new cljs.core.Symbol(null,"square","square",-1842001092,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"lcm","lcm",-1699262564,null),new cljs.core.Symbol(null,"-","-",-471816912,null)],[sicmutils.generic.cube,sicmutils.util.aggregate.monoid.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.gcd,(0)),sicmutils.generic.expt,sicmutils.util.aggregate.monoid.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.add,(0)),sicmutils.generic.negate,sicmutils.generic.square,sicmutils.util.aggregate.monoid.cljs$core$IFn$_invoke$arity$3(sicmutils.generic.mul,(1),sicmutils.value.zero_QMARK_),sicmutils.util.aggregate.monoid.cljs$core$IFn$_invoke$arity$3(sicmutils.generic.lcm,(1),sicmutils.value.zero_QMARK_),sicmutils.util.aggregate.group.cljs$core$IFn$_invoke$arity$4(sicmutils.generic.sub,sicmutils.generic.add,sicmutils.generic.negate,(0))]);
/**
 * Set of all arithmetic functions allowed between [[Polynomial]] and
 *     coefficient instances.
 */
sicmutils.polynomial.operators_known = sicmutils.util.keyset(sicmutils.polynomial.operator_table);
/**
 * Converts the supplied symbolic expression `expr` into Flat Polynomial canonical
 *   form (ie, a [[Polynomial]] instance). `expr` should be a bare, unwrapped
 *   expression built out of Clojure data structures.
 * 
 *   Returns the result of calling continuation `cont` with the [[Polynomial]] and
 *   the list of variables corresponding to each indeterminate in
 *   the [[Polynomial]]. (`cont `defaults to `vector`).
 * 
 *   The second optional argument `v-compare` allows you to provide a Comparator
 *   between variables. Sorting indeterminates by `v-compare` will determine the
 *   order of the indeterminates in the generated [[Polynomial]]. The list of
 *   variables passed to `cont` will be sorted using `v-compare`.
 * 
 *   Absorbing an expression with [[expression->]] and emitting it again
 *   with [[->expression]] will generate the canonical form of an expression, with
 *   respect to the operations in the [[operators-known]] set.
 * 
 *   This kind of simplification proceeds purely symbolically over the known Flat
 *   Polynomial operations; other operations outside the arithmetic available in
 *   polynomials over commutative rings should be factored out by an expression
 *   analyzer (see [[sicmutils.expression.analyze/make-analyzer]]) before
 *   calling [[expression->]].
 * 
 *   NOTE See [[analyzer]] for an instance usable
 *   by [[sicmutils.expression.analyze/make-analyzer]].
 */
sicmutils.polynomial.expression__GT_ = (function sicmutils$polynomial$expression__GT_(var_args){
var G__86597 = arguments.length;
switch (G__86597) {
case 1:
return sicmutils.polynomial.expression__GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.polynomial.expression__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.polynomial.expression__GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.polynomial.expression__GT_.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return sicmutils.polynomial.expression__GT_.cljs$core$IFn$_invoke$arity$3(expr,cljs.core.vector,cljs.core.compare);
}));

(sicmutils.polynomial.expression__GT_.cljs$core$IFn$_invoke$arity$2 = (function (expr,cont){
return sicmutils.polynomial.expression__GT_.cljs$core$IFn$_invoke$arity$3(expr,cont,cljs.core.compare);
}));

(sicmutils.polynomial.expression__GT_.cljs$core$IFn$_invoke$arity$3 = (function (expr,cont,v_compare){
var vars = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(sicmutils.expression.variables_in(expr),sicmutils.polynomial.operators_known);
var arity = cljs.core.count(vars);
var sorted = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(v_compare,vars);
var sym__GT_var = cljs.core.zipmap(sorted,sicmutils.polynomial.new_variables(arity));
var poly = sicmutils.expression.evaluate(expr,sym__GT_var,sicmutils.polynomial.operator_table);
return (cont.cljs$core$IFn$_invoke$arity$2 ? cont.cljs$core$IFn$_invoke$arity$2(poly,sorted) : cont.call(null,poly,sorted));
}));

(sicmutils.polynomial.expression__GT_.cljs$lang$maxFixedArity = 3);

var _STAR__86781 = sicmutils.numsymb.symbolic_operator(new cljs.core.Symbol(null,"*","*",345799209,null));
var _PLUS__86782 = sicmutils.numsymb.symbolic_operator(new cljs.core.Symbol(null,"+","+",-740910886,null));
var expt_86783 = sicmutils.numsymb.symbolic_operator(new cljs.core.Symbol(null,"expt","expt",2123850345,null));
/**
 * Accepts a [[Polynomial]] `p` and a sequence of symbols for each indeterminate,
 *   and emits the canonical form of the symbolic expression that
 *   represents [[Polynomial]] `p`.
 * 
 *   A similar result could be achieved by calling `(apply p vars)`;
 *   but [[Polynomial]] application uses [Horner's
 *   rule](https://en.wikipedia.org/wiki/Horner%27s_method), and form of the
 *   returned result will be different.
 * 
 *   NOTE: this is the output stage of Flat Polynomial canonical form
 *   simplification. The input stage is handled by [[expression->]].
 * 
 *   NOTE See [[analyzer]] for an instance usable
 *   by [[sicmutils.expression.analyze/make-analyzer]].
 */
sicmutils.polynomial.__GT_expression = (function sicmutils$polynomial$__GT_expression(p,vars){
if((!(sicmutils.polynomial.polynomial_QMARK_(p)))){
return sicmutils.expression.expression_of(p);
} else {
var xform = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__86598){
var vec__86599 = p__86598;
var expts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86599,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86599,(1),null);
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,v){
var pow = sicmutils.polynomial.exponent.monomial_degree.cljs$core$IFn$_invoke$arity$2(expts,i);
return (expt_86783.cljs$core$IFn$_invoke$arity$2 ? expt_86783.cljs$core$IFn$_invoke$arity$2(v,pow) : expt_86783.call(null,v,pow));
})),_STAR__86781,sicmutils.expression.expression_of(c),vars);
}));
var high__GT_low = cljs.core.rseq(sicmutils.polynomial.bare_terms(p));
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,_PLUS__86782,high__GT_low);
}
});
/**
 * Singleton [[sicmutils.expression.analyze/ICanonicalize]]
 *   instance.
 */
sicmutils.polynomial.analyzer = (function (){
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.polynomial !== 'undefined') && (typeof sicmutils.polynomial.t_sicmutils$polynomial86602 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {sicmutils.expression.analyze.ICanonicalize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
sicmutils.polynomial.t_sicmutils$polynomial86602 = (function (meta86603){
this.meta86603 = meta86603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sicmutils.polynomial.t_sicmutils$polynomial86602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_86604,meta86603__$1){
var self__ = this;
var _86604__$1 = this;
return (new sicmutils.polynomial.t_sicmutils$polynomial86602(meta86603__$1));
}));

(sicmutils.polynomial.t_sicmutils$polynomial86602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_86604){
var self__ = this;
var _86604__$1 = this;
return self__.meta86603;
}));

(sicmutils.polynomial.t_sicmutils$polynomial86602.prototype.sicmutils$expression$analyze$ICanonicalize$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.polynomial.t_sicmutils$polynomial86602.prototype.sicmutils$expression$analyze$ICanonicalize$expression__GT_$arity$3 = (function (_,expr,cont){
var self__ = this;
var ___$1 = this;
return sicmutils.polynomial.expression__GT_.cljs$core$IFn$_invoke$arity$2(expr,cont);
}));

(sicmutils.polynomial.t_sicmutils$polynomial86602.prototype.sicmutils$expression$analyze$ICanonicalize$expression__GT_$arity$4 = (function (_,expr,cont,v_compare){
var self__ = this;
var ___$1 = this;
return sicmutils.polynomial.expression__GT_.cljs$core$IFn$_invoke$arity$3(expr,cont,v_compare);
}));

(sicmutils.polynomial.t_sicmutils$polynomial86602.prototype.sicmutils$expression$analyze$ICanonicalize$__GT_expression$arity$3 = (function (_,p,vars){
var self__ = this;
var ___$1 = this;
return sicmutils.polynomial.__GT_expression(p,vars);
}));

(sicmutils.polynomial.t_sicmutils$polynomial86602.prototype.sicmutils$expression$analyze$ICanonicalize$known_operation_QMARK_$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return cljs.core.contains_QMARK_(sicmutils.polynomial.operators_known,o);
}));

(sicmutils.polynomial.t_sicmutils$polynomial86602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta86603","meta86603",-1165647827,null)], null);
}));

(sicmutils.polynomial.t_sicmutils$polynomial86602.cljs$lang$type = true);

(sicmutils.polynomial.t_sicmutils$polynomial86602.cljs$lang$ctorStr = "sicmutils.polynomial/t_sicmutils$polynomial86602");

(sicmutils.polynomial.t_sicmutils$polynomial86602.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"sicmutils.polynomial/t_sicmutils$polynomial86602");
}));

/**
 * Positional factory function for sicmutils.polynomial/t_sicmutils$polynomial86602.
 */
sicmutils.polynomial.__GT_t_sicmutils$polynomial86602 = (function sicmutils$polynomial$__GT_t_sicmutils$polynomial86602(meta86603){
return (new sicmutils.polynomial.t_sicmutils$polynomial86602(meta86603));
});

}

return (new sicmutils.polynomial.t_sicmutils$polynomial86602(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.polynomial","coeff","sicmutils.polynomial/coeff",-1161263509));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.modint","modint","sicmutils.modint/modint",-2036724024),new cljs.core.Keyword("sicmutils.polynomial","coeff","sicmutils.polynomial/coeff",-1161263509));
/**
 * Installs the supplied function `f` into `generic-op` such that it will act
 *   between [[Polynomial]] instances, or allow non-[[Polynomial]] coefficients on
 *   either side.
 */
sicmutils.polynomial.defbinary = (function sicmutils$polynomial$defbinary(generic_op,f){
var pairs = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683),new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.polynomial","coeff","sicmutils.polynomial/coeff",-1161263509),new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683),new cljs.core.Keyword("sicmutils.polynomial","coeff","sicmutils.polynomial/coeff",-1161263509)], null)], null);
var seq__86607 = cljs.core.seq(pairs);
var chunk__86608 = null;
var count__86609 = (0);
var i__86610 = (0);
while(true){
if((i__86610 < count__86609)){
var vec__86617 = chunk__86608.cljs$core$IIndexed$_nth$arity$2(null,i__86610);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86617,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86617,(1),null);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r], null),((function (seq__86607,chunk__86608,count__86609,i__86610,vec__86617,l,r,pairs){
return (function (r__$1,s){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(r__$1,s) : f.call(null,r__$1,s));
});})(seq__86607,chunk__86608,count__86609,i__86610,vec__86617,l,r,pairs))
);


var G__86785 = seq__86607;
var G__86786 = chunk__86608;
var G__86787 = count__86609;
var G__86788 = (i__86610 + (1));
seq__86607 = G__86785;
chunk__86608 = G__86786;
count__86609 = G__86787;
i__86610 = G__86788;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__86607);
if(temp__5753__auto__){
var seq__86607__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__86607__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__86607__$1);
var G__86789 = cljs.core.chunk_rest(seq__86607__$1);
var G__86790 = c__4679__auto__;
var G__86791 = cljs.core.count(c__4679__auto__);
var G__86792 = (0);
seq__86607 = G__86789;
chunk__86608 = G__86790;
count__86609 = G__86791;
i__86610 = G__86792;
continue;
} else {
var vec__86620 = cljs.core.first(seq__86607__$1);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86620,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86620,(1),null);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r], null),((function (seq__86607,chunk__86608,count__86609,i__86610,vec__86620,l,r,seq__86607__$1,temp__5753__auto__,pairs){
return (function (r__$1,s){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(r__$1,s) : f.call(null,r__$1,s));
});})(seq__86607,chunk__86608,count__86609,i__86610,vec__86620,l,r,seq__86607__$1,temp__5753__auto__,pairs))
);


var G__86793 = cljs.core.next(seq__86607__$1);
var G__86794 = null;
var G__86795 = (0);
var G__86796 = (0);
seq__86607 = G__86793;
chunk__86608 = G__86794;
count__86609 = G__86795;
i__86610 = G__86796;
continue;
}
} else {
return null;
}
}
break;
}
});
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683),new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683)], null),(function (l,r){
return sicmutils.polynomial.eq(l,r);
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683),new cljs.core.Keyword("sicmutils.polynomial","coeff","sicmutils.polynomial/coeff",-1161263509)], null),(function (l,r){
return sicmutils.polynomial.eq(l,r);
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.polynomial","coeff","sicmutils.polynomial/coeff",-1161263509),new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683)], null),(function (l,r){
return sicmutils.polynomial.eq(r,l);
}));
sicmutils.polynomial.defbinary(sicmutils.generic.add,sicmutils.polynomial.add);
sicmutils.polynomial.defbinary(sicmutils.generic.sub,sicmutils.polynomial.sub);
sicmutils.polynomial.defbinary(sicmutils.generic.mul,sicmutils.polynomial.mul);
sicmutils.polynomial.defbinary(sicmutils.generic.quotient,(function (p,q){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.divide(p,q),(0));
}));
sicmutils.polynomial.defbinary(sicmutils.generic.remainder,(function (p,q){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.divide(p,q),(1));
}));
sicmutils.generic.negative_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683)], null),(function (a){
return sicmutils.polynomial.negative_QMARK_(a);
}));
sicmutils.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683)], null),(function (a){
return sicmutils.polynomial.abs(a);
}));
sicmutils.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683)], null),(function (a){
return sicmutils.polynomial.negate(a);
}));
sicmutils.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683)], null),(function (a){
return sicmutils.polynomial.square(a);
}));
sicmutils.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683)], null),(function (a){
return sicmutils.polynomial.cube(a);
}));
sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683),new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),(function (b,x){
return sicmutils.polynomial.expt(b,x);
}));
sicmutils.generic.exact_divide.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683),new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683)], null),(function (p,q){
return sicmutils.polynomial.evenly_divide(p,q);
}));
sicmutils.generic.exact_divide.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683),new cljs.core.Keyword("sicmutils.polynomial","coeff","sicmutils.polynomial/coeff",-1161263509)], null),(function (p,c){
return sicmutils.polynomial.evenly_divide(p,c);
}));
sicmutils.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683)], null),(function (p){
return sicmutils.polynomial.map_coefficients(sicmutils.generic.simplify,p);
}));
sicmutils.generic.partial_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683),sicmutils.value.seqtype], null),(function (p,selectors){
if(cljs.core.empty_QMARK_(selectors)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),sicmutils.polynomial.bare_arity(p))){
return sicmutils.polynomial.partial_derivative(p,(0));
} else {
return sicmutils.structure.down_STAR_(sicmutils.polynomial.partial_derivatives(p));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(selectors))){
return sicmutils.polynomial.partial_derivative(p,cljs.core.first(selectors));
} else {
return sicmutils.util.illegal("Invalid selector! Only 1 deep supported.");

}
}
}));

//# sourceMappingURL=sicmutils.polynomial.js.map
