goog.provide('sicmutils.rational_function');


/**
* @constructor
 * @implements {sicmutils.function$.IArity}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IFn}
 * @implements {sicmutils.value.Value}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {sicmutils.ratio.IRational}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
sicmutils.rational_function.RationalFunction = (function (arity,u,v,m){
this.arity = arity;
this.u = u;
this.v = v;
this.m = m;
this.cljs$lang$protocol_mask$partition0$ = 2158362625;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sicmutils.rational_function.RationalFunction.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.u)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.v)].join('');
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var self__ = this;
var x__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#object[sicmutils.rational-function.RationalFunction \"",x__$1.toString(),"\"]"], 0));
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return (sicmutils.rational_function.eq.cljs$core$IFn$_invoke$arity$2 ? sicmutils.rational_function.eq.cljs$core$IFn$_invoke$arity$2(this$__$1,that) : sicmutils.rational_function.eq.call(null,this$__$1,that));
}));

(sicmutils.rational_function.RationalFunction.prototype.sicmutils$value$Value$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.rational_function.RationalFunction.prototype.sicmutils$value$Value$zero_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sicmutils.value.zero_like(self__.u);
}));

(sicmutils.rational_function.RationalFunction.prototype.sicmutils$value$Value$identity_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((sicmutils.value.identity_QMARK_(self__.u)) && (sicmutils.value.one_QMARK_(self__.v)));
}));

(sicmutils.rational_function.RationalFunction.prototype.sicmutils$value$Value$freeze$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,sicmutils.value.freeze(self__.u),(new cljs.core.List(null,sicmutils.value.freeze(self__.v),null,(1),null)),(2),null)),(3),null));
}));

(sicmutils.rational_function.RationalFunction.prototype.sicmutils$value$Value$zero_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sicmutils.value.zero_QMARK_(self__.u);
}));

(sicmutils.rational_function.RationalFunction.prototype.sicmutils$value$Value$one_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((sicmutils.value.one_QMARK_(self__.u)) && (sicmutils.value.one_QMARK_(self__.v)));
}));

(sicmutils.rational_function.RationalFunction.prototype.sicmutils$value$Value$exact_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(sicmutils.rational_function.RationalFunction.prototype.sicmutils$value$Value$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("sicmutils.rational-function","rational-function","sicmutils.rational-function/rational-function",1564681594);
}));

(sicmutils.rational_function.RationalFunction.prototype.sicmutils$value$Value$identity_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new sicmutils.rational_function.RationalFunction(self__.arity,sicmutils.value.identity_like(self__.u),sicmutils.value.one_like(self__.v),self__.m));
}));

(sicmutils.rational_function.RationalFunction.prototype.sicmutils$value$Value$one_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sicmutils.value.one_like(self__.u);
}));

(sicmutils.rational_function.RationalFunction.prototype.sicmutils$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.rational_function.RationalFunction.prototype.sicmutils$function$IArity$arity$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),(0),self__.arity], null);
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(null,self__.u,(new cljs.core.List(null,self__.v,null,(1),null)),(2),null));
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m__$1){
var self__ = this;
var ___$1 = this;
return (new sicmutils.rational_function.RationalFunction(self__.arity,self__.u,self__.v,m__$1));
}));

(sicmutils.rational_function.RationalFunction.prototype.call = (function (unused__20572__auto__){
var self__ = this;
var self__ = this;
var G__86784 = (arguments.length - (1));
switch (G__86784) {
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

(sicmutils.rational_function.RationalFunction.prototype.apply = (function (self__,args86775){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args86775)));
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var G__86797 = this$;
var G__86798 = cljs.core.PersistentVector.EMPTY;
return (sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__86797,G__86798) : sicmutils.rational_function.evaluate.call(null,G__86797,G__86798));
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
var G__86799 = this$;
var G__86800 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null);
return (sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__86799,G__86800) : sicmutils.rational_function.evaluate.call(null,G__86799,G__86800));
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
var G__86801 = this$;
var G__86802 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
return (sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__86801,G__86802) : sicmutils.rational_function.evaluate.call(null,G__86801,G__86802));
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
var G__86803 = this$;
var G__86804 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null);
return (sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__86803,G__86804) : sicmutils.rational_function.evaluate.call(null,G__86803,G__86804));
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
var G__86805 = this$;
var G__86806 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null);
return (sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__86805,G__86806) : sicmutils.rational_function.evaluate.call(null,G__86805,G__86806));
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
var G__86807 = this$;
var G__86808 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e], null);
return (sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__86807,G__86808) : sicmutils.rational_function.evaluate.call(null,G__86807,G__86808));
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var this$ = this;
var G__86809 = this$;
var G__86810 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null);
return (sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__86809,G__86810) : sicmutils.rational_function.evaluate.call(null,G__86809,G__86810));
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var this$ = this;
var G__86811 = this$;
var G__86812 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g], null);
return (sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__86811,G__86812) : sicmutils.rational_function.evaluate.call(null,G__86811,G__86812));
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var this$ = this;
var G__86813 = this$;
var G__86814 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null);
return (sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__86813,G__86814) : sicmutils.rational_function.evaluate.call(null,G__86813,G__86814));
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var this$ = this;
var G__86815 = this$;
var G__86816 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i], null);
return (sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__86815,G__86816) : sicmutils.rational_function.evaluate.call(null,G__86815,G__86816));
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var this$ = this;
var G__86818 = this$;
var G__86819 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j], null);
return (sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__86818,G__86819) : sicmutils.rational_function.evaluate.call(null,G__86818,G__86819));
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var this$ = this;
var G__86822 = this$;
var G__86823 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k], null);
return (sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__86822,G__86823) : sicmutils.rational_function.evaluate.call(null,G__86822,G__86823));
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
var G__86824 = this$;
var G__86825 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l], null);
return (sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__86824,G__86825) : sicmutils.rational_function.evaluate.call(null,G__86824,G__86825));
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1){
var self__ = this;
var this$ = this;
var G__86827 = this$;
var G__86828 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1], null);
return (sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__86827,G__86828) : sicmutils.rational_function.evaluate.call(null,G__86827,G__86828));
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n){
var self__ = this;
var this$ = this;
var G__86831 = this$;
var G__86832 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n], null);
return (sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__86831,G__86832) : sicmutils.rational_function.evaluate.call(null,G__86831,G__86832));
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o){
var self__ = this;
var this$ = this;
var G__86833 = this$;
var G__86834 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o], null);
return (sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__86833,G__86834) : sicmutils.rational_function.evaluate.call(null,G__86833,G__86834));
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p){
var self__ = this;
var this$ = this;
var G__86835 = this$;
var G__86836 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p], null);
return (sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__86835,G__86836) : sicmutils.rational_function.evaluate.call(null,G__86835,G__86836));
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q){
var self__ = this;
var this$ = this;
var G__86837 = this$;
var G__86838 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q], null);
return (sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__86837,G__86838) : sicmutils.rational_function.evaluate.call(null,G__86837,G__86838));
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r){
var self__ = this;
var this$ = this;
var G__86839 = this$;
var G__86840 = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r], null);
return (sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__86839,G__86840) : sicmutils.rational_function.evaluate.call(null,G__86839,G__86840));
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
var G__86841 = this$;
var G__86842 = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s], null);
return (sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__86841,G__86842) : sicmutils.rational_function.evaluate.call(null,G__86841,G__86842));
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
var G__86843 = this$;
var G__86844 = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null);
return (sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__86843,G__86844) : sicmutils.rational_function.evaluate.call(null,G__86843,G__86844));
}));

(sicmutils.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t,rest){
var self__ = this;
var this$ = this;
var G__86845 = this$;
var G__86846 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null),rest);
return (sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__86845,G__86846) : sicmutils.rational_function.evaluate.call(null,G__86845,G__86846));
}));

(sicmutils.rational_function.RationalFunction.prototype.sicmutils$ratio$IRational$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.rational_function.RationalFunction.prototype.sicmutils$ratio$IRational$numerator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.u;
}));

(sicmutils.rational_function.RationalFunction.prototype.sicmutils$ratio$IRational$denominator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.v;
}));

(sicmutils.rational_function.RationalFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arity","arity",-168024608,null),new cljs.core.Symbol(null,"u","u",483896742,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null);
}));

(sicmutils.rational_function.RationalFunction.cljs$lang$type = true);

(sicmutils.rational_function.RationalFunction.cljs$lang$ctorStr = "sicmutils.rational-function/RationalFunction");

(sicmutils.rational_function.RationalFunction.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"sicmutils.rational-function/RationalFunction");
}));

/**
 * Positional factory function for sicmutils.rational-function/RationalFunction.
 */
sicmutils.rational_function.__GT_RationalFunction = (function sicmutils$rational_function$__GT_RationalFunction(arity,u,v,m){
return (new sicmutils.rational_function.RationalFunction(arity,u,v,m));
});

/**
 * Returns true if the supplied argument is an instance of [[RationalFunction]],
 *   false otherwise.
 */
sicmutils.rational_function.rational_function_QMARK_ = (function sicmutils$rational_function$rational_function_QMARK_(r){
return (r instanceof sicmutils.rational_function.RationalFunction);
});
/**
 * Returns true if `x` is explicitly _not_ an instance of [[RationalFunction]]
 *   or [[polynomial/Polynomial]], false if it is.
 */
sicmutils.rational_function.coeff_QMARK_ = (function sicmutils$rational_function$coeff_QMARK_(x){
return (((!(sicmutils.rational_function.rational_function_QMARK_(x)))) && (sicmutils.polynomial.coeff_QMARK_(x)));
});
/**
 * Given a [[RationalFunction]] instance `rf`, returns the `arity` field.
 */
sicmutils.rational_function.bare_arity = (function sicmutils$rational_function$bare_arity(rf){
return rf.arity;
});
/**
 * Given a [[RationalFunction]] instance `rf`, returns the `u` (numerator) field.
 */
sicmutils.rational_function.bare_u = (function sicmutils$rational_function$bare_u(rf){
return rf.u;
});
/**
 * Given a [[RationalFunction]] instance `rf`, returns the `v` (denominator) field.
 */
sicmutils.rational_function.bare_v = (function sicmutils$rational_function$bare_v(rf){
return rf.v;
});
/**
 * Returns the declared arity of the supplied [[RationalFunction]]
 *   or [[polynomial/Polynomial]], or `0` for arguments of other types.
 */
sicmutils.rational_function.arity = (function sicmutils$rational_function$arity(r){
if(sicmutils.rational_function.rational_function_QMARK_(r)){
return sicmutils.rational_function.bare_arity(r);
} else {
return sicmutils.polynomial.arity(r);
}
});
/**
 * Given two inputs `u` and `v`, checks that their arities are equal and returns
 *   the value, or throws an exception if not.
 * 
 *   If either `p` or `q` is a coefficient with [[arity]] equal to
 *   0, [[check-same-arity]] successfully returns the other argument's arity.
 */
sicmutils.rational_function.check_same_arity = (function sicmutils$rational_function$check_same_arity(u,v){
var ua = sicmutils.rational_function.arity(u);
var va = sicmutils.rational_function.arity(v);
if((ua === (0))){
return va;
} else {
if((va === (0))){
return ua;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ua,va)){
return ua;
} else {
return sicmutils.util.illegal(["Unequal arities: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(u),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

}
}
}
});
/**
 * Returns true if the numerator of `r` is [[polynomial/negative?]], false
 *   otherwise.
 */
sicmutils.rational_function.negative_QMARK_ = (function sicmutils$rational_function$negative_QMARK_(r){
if((!(sicmutils.rational_function.rational_function_QMARK_(r)))){
return sicmutils.polynomial.negative_QMARK_(r);
} else {
return sicmutils.polynomial.negative_QMARK_(sicmutils.rational_function.bare_u(r));
}
});
/**
 * Returns true if the [[RationalFunction]] this is equal to `that`. If `that` is
 *   a [[RationalFunction]], `this` and `that` are equal if they have equal `u` and
 *   `v` and equal arity. `u` and `v` entries are compared
 *   using [[sicmutils.value/=]].
 * 
 *   If `that` is non-[[RationalFunction]], `eq` only returns true if `u` and `v`
 *   respectively match the [[ratio/numerator]] and [[ratio/denominator]] of
 *   `that`.
 */
sicmutils.rational_function.eq = (function sicmutils$rational_function$eq(this$,that){
if((that instanceof sicmutils.rational_function.RationalFunction)){
var that__$1 = that;
var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$.arity,that__$1.arity);
if(and__4251__auto__){
var and__4251__auto____$1 = sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(this$.u,that__$1.u);
if(cljs.core.truth_(and__4251__auto____$1)){
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(this$.v,that__$1.v);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
} else {
var and__4251__auto__ = sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(this$.v,sicmutils.ratio.denominator(that));
if(cljs.core.truth_(and__4251__auto__)){
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(this$.u,sicmutils.ratio.numerator(that));
} else {
return and__4251__auto__;
}
}
});
/**
 * Accepts an explicit `arity`, numerator `u` and denominator `v` and returns
 *   either:
 * 
 *   - `0`, in the case of a [[value/zero?]] numerator
 *   - `u`, in the case of a [[value/one?]] denominator
 *   - a [[RationalFunction]] instance if _either_ `u` or `v` is a [[polynomial/Polynomial]]
 *   - `(g/div u v)` otherwise.
 * 
 *   Call this function when you've already reduced `u` and `v` such that they
 *   share no common factors and are dropped down to coefficients if possible, and
 *   want to wrap them in [[RationalFunction]] only when necessary.
 * 
 *   NOTE: The behavior of this mildly-opinionated constructor is similar
 *   to [[polynomial/terms->polynomial]]
 */
sicmutils.rational_function.make_reduced = (function sicmutils$rational_function$make_reduced(arity,u,v){
if(sicmutils.value.zero_QMARK_(u)){
return (0);
} else {
if(sicmutils.value.one_QMARK_(v)){
return u;
} else {
if(((sicmutils.polynomial.polynomial_QMARK_(u)) || (sicmutils.polynomial.polynomial_QMARK_(v)))){
return sicmutils.rational_function.__GT_RationalFunction(arity,u,v,null);
} else {
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(u,v);

}
}
}
});
/**
 * Returns `1` if the input is non-numeric or numeric and non-negative, `-1`
 *   otherwise. In the slightly suspect case of a complex number
 *   input, [[coef-sgn]] only examines the [[generic/real-part]] of the complex
 *   number.
 * 
 *   NOTE Negative [[RationalFunction]] instances attempt to keep the negative sign
 *   in the numerator `u`. The complex number behavior is a kludge, but allows
 *   canonicalization with complex coefficients.
 */
sicmutils.rational_function.coef_sgn = (function sicmutils$rational_function$coef_sgn(x){
if(sicmutils.value.real_QMARK_(x)){
if(cljs.core.truth_(sicmutils.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return (-1);
} else {
return (1);
}
} else {
if(sicmutils.complex.complex_QMARK_(x)){
if(cljs.core.truth_(sicmutils.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1(x)))){
return (-1);
} else {
return (1);
}
} else {
return (1);

}
}
});
/**
 * Given a numerator `u` and denominator `v`, returns the result of:
 * 
 *   - multiplying `u` and `v` by the least common multiple of all denominators
 *  found in either `u` or `v`, so that `u` and `v` contain
 *  no [[RationalFunction]]e or ratio-like coefficients
 *   - normalizing the denominator `v` to be positive by negating `u`, if
 *  applicable
 *   - Cancelling out any common divisors between `u` and `v`
 * 
 *   The result can be either a [[RationalFunction]], [[polynomial/Polynomial]] or
 *   a `(g/div u v)`. See [[make-reduced]] for the details.
 */
sicmutils.rational_function.__GT_reduced = (function sicmutils$rational_function$__GT_reduced(u,v){
if(sicmutils.value.zero_QMARK_(v)){
sicmutils.util.arithmetic_ex(["Can't form rational function with zero denominator: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));
} else {
}

var a = sicmutils.rational_function.check_same_arity(u,v);
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$0(),cljs.core.map.cljs$core$IFn$_invoke$arity$1(sicmutils.ratio.denominator));
var coefs = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.coefficients(u),sicmutils.polynomial.coefficients(v));
var factor = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.lcm),(1),coefs);
var factor__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),sicmutils.rational_function.coef_sgn(sicmutils.polynomial.leading_coefficient(v))))?factor:sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(factor));
var vec__86892 = ((sicmutils.value.one_QMARK_(factor__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(factor__$1,u),sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(factor__$1,v)], null));
var u_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86892,(0),null);
var v_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86892,(1),null);
var g = sicmutils.generic.gcd.cljs$core$IFn$_invoke$arity$2(u_SINGLEQUOTE_,v_SINGLEQUOTE_);
var vec__86895 = ((sicmutils.value.one_QMARK_(g))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u_SINGLEQUOTE_,v_SINGLEQUOTE_], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.polynomial.evenly_divide(u_SINGLEQUOTE_,g),sicmutils.polynomial.evenly_divide(v_SINGLEQUOTE_,g)], null));
var u_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86895,(0),null);
var v_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86895,(1),null);
return sicmutils.rational_function.make_reduced(a,u_SINGLEQUOTE__SINGLEQUOTE_,v_SINGLEQUOTE__SINGLEQUOTE_);
});
/**
 * Given a numerator `u` and denominator `v`, attempts to form
 *   a [[RationalFunction]] instance by
 * 
 *   - cancelling out any common factors between `u` and `v`
 *   - normalizing `u` and `v` such that `v` is always positive
 *   - multiplying `u` and `v` through by a commo factor, such that neither term
 *  contains any rational coefficients
 * 
 *   Returns a [[RationalFunction]] instance if either `u` or `v` remains
 *   a [[polynomial/Polynomial]] after this process; else, returns `(g/div u' v')`,
 *   where `u'` and `v'` are the reduced numerator and denominator.
 */
sicmutils.rational_function.make = (function sicmutils$rational_function$make(u,v){
if(((sicmutils.rational_function.coeff_QMARK_(u)) && (sicmutils.rational_function.coeff_QMARK_(v)))){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(u,v);
} else {
return sicmutils.rational_function.__GT_reduced(u,v);
}
});
/**
 * Given two arguments `u` and `v`, as well as:
 * 
 *   - `poly-op` - a function of two numerators
 *   - `uv-op` - a function of four arguments, (`u-n`, `u-d`, `v-n`, `v-d` the
 *  numerator and denominator of `u` and `v` respectively)
 * 
 *   Returns the result of `(poly-op u-n v-n)` if `u-d` and `v-d` are
 *   both [[value/one?]], or `(uv-op u-n u-d v-n v-d)` otherwise.
 * 
 *   The result is reduced to a potentially-non-[[RationalFunction]] result
 *   using [[make-reduced]].
 */
sicmutils.rational_function.binary_combine = (function sicmutils$rational_function$binary_combine(u,v,poly_op,uv_op){
var a = sicmutils.rational_function.check_same_arity(u,v);
var u_n = sicmutils.ratio.numerator(u);
var u_d = sicmutils.ratio.denominator(u);
var v_n = sicmutils.ratio.numerator(v);
var v_d = sicmutils.ratio.denominator(v);
var vec__86917 = ((((sicmutils.value.one_QMARK_(u_d)) && (sicmutils.value.one_QMARK_(v_d))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(poly_op.cljs$core$IFn$_invoke$arity$2 ? poly_op.cljs$core$IFn$_invoke$arity$2(u_n,v_n) : poly_op.call(null,u_n,v_n)),(1)], null):(uv_op.cljs$core$IFn$_invoke$arity$4 ? uv_op.cljs$core$IFn$_invoke$arity$4(u_n,u_d,v_n,v_d) : uv_op.call(null,u_n,u_d,v_n,v_d)));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86917,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86917,(1),null);
return sicmutils.rational_function.make_reduced(a,n,d);
});
/**
 * Returns the `[numerator, denominator]` pair resulting from rational function
 *   addition of `(/ u u')` and `(/ v v')`.
 * 
 *   If the denominators are equal, [[uv:+]] adds the numerators and divides out
 *   any factor common with the shared denominator.
 * 
 *   Else, if the denominators are relatively prime, [[uv:+]] multiplies each side
 *   by the other's denominator to create a single rational expression, then
 *   divides out any common factors before returning.
 * 
 *   In the final case, where the denominators are _not_ relatively prime, [[uv:+]]
 *   attempts to efficiently divide out the GCD of the denominators without
 *   creating large products.
 */
sicmutils.rational_function.uv_COLON__PLUS_ = (function sicmutils$rational_function$uv_COLON__PLUS_(u,u_SINGLEQUOTE_,v,v_SINGLEQUOTE_){
var divide_through = (function sicmutils$rational_function$uv_COLON__PLUS__$_divide_through(n,d){
if(sicmutils.value.zero_QMARK_(n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
} else {
var g = sicmutils.generic.gcd.cljs$core$IFn$_invoke$arity$2(d,n);
if(sicmutils.value.one_QMARK_(g)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,d], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.polynomial.evenly_divide(n,g),sicmutils.polynomial.evenly_divide(d,g)], null);
}
}
});
if(cljs.core.truth_(sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(u_SINGLEQUOTE_,v_SINGLEQUOTE_))){
var n = sicmutils.polynomial.add(u,v);
return divide_through(n,u_SINGLEQUOTE_);
} else {
var g = sicmutils.generic.gcd.cljs$core$IFn$_invoke$arity$2(u_SINGLEQUOTE_,v_SINGLEQUOTE_);
if(sicmutils.value.one_QMARK_(g)){
return divide_through(sicmutils.polynomial.add(sicmutils.polynomial.mul(u,v_SINGLEQUOTE_),sicmutils.polynomial.mul(u_SINGLEQUOTE_,v)),sicmutils.polynomial.mul(u_SINGLEQUOTE_,v_SINGLEQUOTE_));
} else {
var u_SINGLEQUOTE__COLON_g = sicmutils.polynomial.evenly_divide(u_SINGLEQUOTE_,g);
var v_SINGLEQUOTE__COLON_g = sicmutils.polynomial.evenly_divide(v_SINGLEQUOTE_,g);
return divide_through(sicmutils.polynomial.add(sicmutils.polynomial.mul(u,v_SINGLEQUOTE__COLON_g),sicmutils.polynomial.mul(u_SINGLEQUOTE__COLON_g,v)),sicmutils.polynomial.mul(u_SINGLEQUOTE__COLON_g,v_SINGLEQUOTE_));
}
}
});
/**
 * Returns the `[numerator, denominator]` pair resulting from rational function
 *   difference of `(/ u u')` and `(/ v v')`.
 * 
 *   Similar to [[uv:+]]; inverts `v` before calling [[uv:+]] with the supplied arguments.
 */
sicmutils.rational_function.uv_COLON__ = (function sicmutils$rational_function$uv_COLON__(u,u_SINGLEQUOTE_,v,v_SINGLEQUOTE_){
return sicmutils.rational_function.uv_COLON__PLUS_(u,u_SINGLEQUOTE_,sicmutils.polynomial.negate(v),v_SINGLEQUOTE_);
});
/**
 * Returns the `[numerator, denominator]` pair resulting from rational function
 *   multiplication of `(/ u u')` and `(/ v v')`.
 */
sicmutils.rational_function.uv_COLON__STAR_ = (function sicmutils$rational_function$uv_COLON__STAR_(u,u_SINGLEQUOTE_,v,v_SINGLEQUOTE_){
if(((sicmutils.value.zero_QMARK_(u)) || (sicmutils.value.zero_QMARK_(v)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
} else {
var d1 = sicmutils.generic.gcd.cljs$core$IFn$_invoke$arity$2(u,v_SINGLEQUOTE_);
var d2 = sicmutils.generic.gcd.cljs$core$IFn$_invoke$arity$2(u_SINGLEQUOTE_,v);
var u_SINGLEQUOTE__SINGLEQUOTE_ = sicmutils.polynomial.mul(sicmutils.polynomial.evenly_divide(u,d1),sicmutils.polynomial.evenly_divide(v,d2));
var v_SINGLEQUOTE__SINGLEQUOTE_ = sicmutils.polynomial.mul(sicmutils.polynomial.evenly_divide(u_SINGLEQUOTE_,d2),sicmutils.polynomial.evenly_divide(v_SINGLEQUOTE_,d1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u_SINGLEQUOTE__SINGLEQUOTE_,v_SINGLEQUOTE__SINGLEQUOTE_], null);
}
});
/**
 * Returns the `[numerator, denominator]` pair that represents the greatest common
 *   divisor of `(/ u u')` and `(/ v v')`.
 */
sicmutils.rational_function.uv_COLON_gcd = (function sicmutils$rational_function$uv_COLON_gcd(u,u_SINGLEQUOTE_,v,v_SINGLEQUOTE_){
var d1 = sicmutils.generic.gcd.cljs$core$IFn$_invoke$arity$2(u,v);
var d2 = sicmutils.generic.lcm.cljs$core$IFn$_invoke$arity$2(u_SINGLEQUOTE_,v_SINGLEQUOTE_);
var result = sicmutils.rational_function.make(d1,d2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.ratio.numerator(result),sicmutils.ratio.denominator(result)], null);
});
/**
 * Returns the negation of rational function `r`, ie, a [[RationalFunction]] with
 *   its numerator negated.
 * 
 *   Acts as [[generic/negate]] for non-[[RationalFunction]] inputs.
 */
sicmutils.rational_function.negate = (function sicmutils$rational_function$negate(r){
if((!(sicmutils.rational_function.rational_function_QMARK_(r)))){
return sicmutils.polynomial.negate(r);
} else {
return sicmutils.rational_function.__GT_RationalFunction(sicmutils.rational_function.bare_arity(r),sicmutils.polynomial.negate(sicmutils.rational_function.bare_u(r)),sicmutils.rational_function.bare_v(r),cljs.core.meta(r));
}
});
/**
 * If the numerator of `r` is negative, returns `(negate r)`, else acts as
 *   identity.
 */
sicmutils.rational_function.abs = (function sicmutils$rational_function$abs(r){
if(cljs.core.truth_(sicmutils.rational_function.negative_QMARK_(r))){
return sicmutils.rational_function.negate(r);
} else {
return r;
}
});
/**
 * Returns the sum of rational functions `r` and `s`, with appropriate handling
 *   of [[RationalFunction]], [[polynomial/Polynomial]] or coefficients of neither
 *   type on either side.
 */
sicmutils.rational_function.add = (function sicmutils$rational_function$add(r,s){
if(sicmutils.value.zero_QMARK_(r)){
return s;
} else {
if(sicmutils.value.zero_QMARK_(s)){
return r;
} else {
return sicmutils.rational_function.binary_combine(r,s,sicmutils.polynomial.add,sicmutils.rational_function.uv_COLON__PLUS_);

}
}
});
/**
 * Returns the difference of rational functions `r` and `s`, with appropriate
 *   handling of [[RationalFunction]], [[polynomial/Polynomial]] or coefficients of
 *   neither type on either side.
 */
sicmutils.rational_function.sub = (function sicmutils$rational_function$sub(r,s){
if(sicmutils.value.zero_QMARK_(r)){
return sicmutils.rational_function.negate(s);
} else {
if(sicmutils.value.zero_QMARK_(s)){
return r;
} else {
return sicmutils.rational_function.binary_combine(r,s,sicmutils.polynomial.sub,sicmutils.rational_function.uv_COLON__);

}
}
});
/**
 * Returns the product of rational functions `r` and `s`, with appropriate
 *   handling of [[RationalFunction]], [[polynomial/Polynomial]] or coefficients of
 *   neither type on either side.
 */
sicmutils.rational_function.mul = (function sicmutils$rational_function$mul(r,s){
if(sicmutils.value.zero_QMARK_(r)){
return r;
} else {
if(sicmutils.value.zero_QMARK_(s)){
return s;
} else {
if(sicmutils.value.one_QMARK_(r)){
return s;
} else {
if(sicmutils.value.one_QMARK_(s)){
return r;
} else {
return sicmutils.rational_function.binary_combine(r,s,sicmutils.polynomial.mul,sicmutils.rational_function.uv_COLON__STAR_);

}
}
}
}
});
/**
 * Returns the square of rational function `r`. Equivalent to `(mul r r)`.
 */
sicmutils.rational_function.square = (function sicmutils$rational_function$square(r){
if((!(sicmutils.rational_function.rational_function_QMARK_(r)))){
return sicmutils.polynomial.square(r);
} else {
return sicmutils.rational_function.__GT_RationalFunction(sicmutils.rational_function.bare_arity(r),sicmutils.polynomial.square(sicmutils.rational_function.bare_u(r)),sicmutils.polynomial.square(sicmutils.rational_function.bare_v(r)),cljs.core.meta(r));
}
});
/**
 * Returns the cube of rational function `r`. Equivalent to `(mul r (mul r r))`.
 */
sicmutils.rational_function.cube = (function sicmutils$rational_function$cube(r){
if((!(sicmutils.rational_function.rational_function_QMARK_(r)))){
return sicmutils.polynomial.cube(r);
} else {
return sicmutils.rational_function.__GT_RationalFunction(sicmutils.rational_function.bare_arity(r),sicmutils.polynomial.cube(sicmutils.rational_function.bare_u(r)),sicmutils.polynomial.cube(sicmutils.rational_function.bare_v(r)),cljs.core.meta(r));
}
});
/**
 * Returns a rational function generated by raising the input rational function
 *   `r` to the (integer) power `n`.
 */
sicmutils.rational_function.expt = (function sicmutils$rational_function$expt(r,n){
if(sicmutils.value.native_integral_QMARK_(n)){
} else {
throw (new Error("Assert failed: (v/native-integral? n)"));
}

if((!(sicmutils.rational_function.rational_function_QMARK_(r)))){
return sicmutils.polynomial.expt(r,n);
} else {
var u = sicmutils.rational_function.bare_u(r);
var v = sicmutils.rational_function.bare_v(r);
var vec__86926 = (((n < (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,u,(- n)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v,n], null));
var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86926,(0),null);
var bottom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86926,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86926,(2),null);
return sicmutils.rational_function.__GT_RationalFunction(sicmutils.rational_function.bare_arity(r),sicmutils.polynomial.expt(top,e),sicmutils.polynomial.expt(bottom,e),cljs.core.meta(r));
}
});
/**
 * Given some rational function `r`, returns the inverse of `r`, ie, a rational
 *   function with numerator and denominator reversed. The returned rational
 *   function guarantees a positive denominator.
 * 
 *   Acts as [[generic/invert]] for non-[[RationalFunction]] inputs.
 */
sicmutils.rational_function.invert = (function sicmutils$rational_function$invert(r){
if((!(sicmutils.rational_function.rational_function_QMARK_(r)))){
return sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(r);
} else {
var u = sicmutils.rational_function.bare_u(r);
var v = sicmutils.rational_function.bare_v(r);
if(sicmutils.value.zero_QMARK_(u)){
return sicmutils.util.arithmetic_ex("Can't form rational function with zero denominator.");
} else {
if(cljs.core.truth_(sicmutils.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(u))){
return sicmutils.rational_function.__GT_RationalFunction(sicmutils.rational_function.bare_arity(r),sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(v),sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(u),cljs.core.meta(r));
} else {
return sicmutils.rational_function.__GT_RationalFunction(sicmutils.rational_function.bare_arity(r),v,u,cljs.core.meta(r));

}
}
}
});
/**
 * Returns the quotient of rational functions `r` and `s`, with appropriate
 *   handling of [[RationalFunction]], [[polynomial/Polynomial]] or coefficients of
 *   neither type on either side.
 */
sicmutils.rational_function.div = (function sicmutils$rational_function$div(r,s){
return sicmutils.rational_function.mul(r,sicmutils.rational_function.invert(s));
});
/**
 * Returns the greatest common divisor of rational functions `r` and `s`, with
 *   appropriate handling of [[RationalFunction]], [[polynomial/Polynomial]] or
 *   coefficients of neither type on either side. 
 */
sicmutils.rational_function.gcd = (function sicmutils$rational_function$gcd(r,s){
return sicmutils.rational_function.binary_combine(r,s,sicmutils.generic.gcd,sicmutils.rational_function.uv_COLON_gcd);
});
/**
 * Given some rational function `xs` and a sequence of arguments with length >= 0
 *   and < the [[arity]] of `r`, returns the result of evaluating the numerator and
 *   denominator using `xs` and re-forming a rational function with the results.
 * 
 *   Supplying fewer arguments than the arity will result in a partial evaluation.
 *   Supplying too many arguments will error.
 */
sicmutils.rational_function.evaluate = (function sicmutils$rational_function$evaluate(r,xs){
if((!(sicmutils.rational_function.rational_function_QMARK_(r)))){
return sicmutils.polynomial.evaluate(r,xs);
} else {
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.evaluate(sicmutils.rational_function.bare_u(r),xs),sicmutils.polynomial.evaluate(sicmutils.rational_function.bare_v(r),xs));
}
});
/**
 * Given some [[RationalFunction]] `r`, returns a new [[RationalFunction]]
 *   generated by substituting each indeterminate `x_i` for `f_i * x_i`, where
 *   `f_i` is a factor supplied in the `factors` sequence.
 * 
 *   Given a non-[[RationalFunction]], delegates to [[polynomial/arg-scale]].
 */
sicmutils.rational_function.arg_scale = (function sicmutils$rational_function$arg_scale(r,factors){
if((!(sicmutils.rational_function.rational_function_QMARK_(r)))){
return sicmutils.polynomial.arg_scale(r,factors);
} else {
return sicmutils.rational_function.div(sicmutils.polynomial.arg_scale(sicmutils.rational_function.bare_u(r),factors),sicmutils.polynomial.arg_scale(sicmutils.rational_function.bare_v(r),factors));
}
});
/**
 * Given some [[RationalFunction]] `r`, returns a new [[RationalFunction]]
 *   generated by substituting each indeterminate `x_i` for `s_i + x_i`, where
 *   `s_i` is a shift supplied in the `shifts` sequence.
 * 
 *   Given a non-[[RationalFunction]], delegates to [[polynomial/arg-shift]].
 */
sicmutils.rational_function.arg_shift = (function sicmutils$rational_function$arg_shift(r,shifts){
if((!(sicmutils.rational_function.rational_function_QMARK_(r)))){
return sicmutils.polynomial.arg_shift(r,shifts);
} else {
return sicmutils.rational_function.div(sicmutils.polynomial.arg_shift(sicmutils.rational_function.bare_u(r),shifts),sicmutils.polynomial.arg_shift(sicmutils.rational_function.bare_v(r),shifts));
}
});
/**
 * Given some [[RationalFunction]] or [[polynomial/Polynomial]] `r`, returns the
 *   partial derivative of `r` with respect to the `i`th indeterminate. Throws if
 *   `i` is an invalid indeterminate index for `r`.
 * 
 *   For non-polynomial or rational function inputs, returns `0`.
 */
sicmutils.rational_function.partial_derivative = (function sicmutils$rational_function$partial_derivative(r,i){
if((!(sicmutils.rational_function.rational_function_QMARK_(r)))){
return sicmutils.polynomial.partial_derivative(r,i);
} else {
var u = sicmutils.rational_function.bare_u(r);
var v = sicmutils.rational_function.bare_v(r);
return sicmutils.rational_function.div(sicmutils.polynomial.sub(sicmutils.polynomial.mul(sicmutils.polynomial.partial_derivative(u,i),v),sicmutils.polynomial.mul(u,sicmutils.polynomial.partial_derivative(v,i))),sicmutils.polynomial.square(v));
}
});
/**
 * Returns the sequence of partial derivatives
 *   of [[RationalFunction]] (or [[polynomial/Polynomial]]) `r` with respect to
 *   each indeterminate. The returned sequence has length equal to the [[arity]] of
 *   `r`.
 * 
 *   For non-polynomial or rational function inputs, returns an empty sequence.
 */
sicmutils.rational_function.partial_derivatives = (function sicmutils$rational_function$partial_derivatives(r){
if((!(sicmutils.rational_function.rational_function_QMARK_(r)))){
return sicmutils.polynomial.partial_derivatives(r);
} else {
var iter__4652__auto__ = (function sicmutils$rational_function$partial_derivatives_$_iter__86949(s__86950){
return (new cljs.core.LazySeq(null,(function (){
var s__86950__$1 = s__86950;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__86950__$1);
if(temp__5753__auto__){
var s__86950__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__86950__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__86950__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__86952 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__86951 = (0);
while(true){
if((i__86951 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__86951);
cljs.core.chunk_append(b__86952,sicmutils.rational_function.partial_derivative(r,i));

var G__87058 = (i__86951 + (1));
i__86951 = G__87058;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__86952),sicmutils$rational_function$partial_derivatives_$_iter__86949(cljs.core.chunk_rest(s__86950__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__86952),null);
}
} else {
var i = cljs.core.first(s__86950__$2);
return cljs.core.cons(sicmutils.rational_function.partial_derivative(r,i),sicmutils$rational_function$partial_derivatives_$_iter__86949(cljs.core.rest(s__86950__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(sicmutils.rational_function.bare_arity(r)));
}
});
/**
 * These operations are those allowed
 *     between [[RationalFunction]], [[polynomial/Polynomial]] and coefficient
 *     instances.
 */
sicmutils.rational_function.operator_table = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sicmutils.polynomial.operator_table,new cljs.core.Symbol(null,"/","/",-1371932971,null),sicmutils.util.aggregate.group.cljs$core$IFn$_invoke$arity$5(sicmutils.generic.div,sicmutils.generic.mul,sicmutils.generic.invert,(1),sicmutils.value.zero_QMARK_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"invert","invert",-1100858266,null),sicmutils.generic.invert], 0));
/**
 * Set of all arithmetic functions allowed
 *     between [[RationalFunction]], [[polynomial/Polynomial]] and coefficient
 *     instances.
 */
sicmutils.rational_function.operators_known = sicmutils.util.keyset(sicmutils.rational_function.operator_table);
/**
 * Converts the supplied symbolic expression `expr` into Rational Function
 *   canonical form (ie, a [[RationalFunction]] instance). `expr` should be a bare,
 *   unwrapped expression built out of Clojure data structures.
 * 
 *   Returns the result of calling continuation `cont` with
 *   the [[RationalFunction]] and the list of variables corresponding to each
 *   indeterminate in the [[RationalFunction]]. (`cont `defaults to `vector`).
 * 
 *   The second optional argument `v-compare` allows you to provide a Comparator
 *   between variables. Sorting indeterminates by `v-compare` will determine the
 *   order of the indeterminates in the generated [[RationalFunction]]. The list of
 *   variables passed to `cont` will be sorted using `v-compare`.
 * 
 *   Absorbing an expression with [[expression->]] and emitting it again
 *   with [[->expression]] will generate the canonical form of an expression, with
 *   respect to the operations in the [[operators-known]] set.
 * 
 *   This kind of simplification proceeds purely symbolically over the known
 *   Rational Function operations; other operations outside the arithmetic
 *   available should be factored out by an expression
 *   analyzer (see [[sicmutils.expression.analyze/make-analyzer]]) before
 *   calling [[expression->]].
 * 
 *   NOTE that `cont` might receive a scalar, fraction or [[polynomial/Polynomial]]
 *   instance; both are valid 'rational functions'. The latter as a rational
 *   function with a denominator equal to `1`, and the former 2 result from
 *   non-polynomial numerator and denominator.
 * 
 *   NOTE See [[analyzer]] for an instance usable
 *   by [[sicmutils.expression.analyze/make-analyzer]].
 */
sicmutils.rational_function.expression__GT_ = (function sicmutils$rational_function$expression__GT_(var_args){
var G__86970 = arguments.length;
switch (G__86970) {
case 1:
return sicmutils.rational_function.expression__GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.rational_function.expression__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.rational_function.expression__GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.rational_function.expression__GT_.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return sicmutils.rational_function.expression__GT_.cljs$core$IFn$_invoke$arity$3(expr,cljs.core.vector,cljs.core.compare);
}));

(sicmutils.rational_function.expression__GT_.cljs$core$IFn$_invoke$arity$2 = (function (expr,cont){
return sicmutils.rational_function.expression__GT_.cljs$core$IFn$_invoke$arity$3(expr,cont,cljs.core.compare);
}));

(sicmutils.rational_function.expression__GT_.cljs$core$IFn$_invoke$arity$3 = (function (expr,cont,v_compare){
var vars = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(sicmutils.expression.variables_in(expr),sicmutils.rational_function.operators_known);
var arity = cljs.core.count(vars);
var sorted = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(v_compare,vars);
var sym__GT_var = cljs.core.zipmap(sorted,sicmutils.polynomial.new_variables(arity));
var rf = sicmutils.expression.evaluate(expr,sym__GT_var,sicmutils.rational_function.operator_table);
return (cont.cljs$core$IFn$_invoke$arity$2 ? cont.cljs$core$IFn$_invoke$arity$2(rf,sorted) : cont.call(null,rf,sorted));
}));

(sicmutils.rational_function.expression__GT_.cljs$lang$maxFixedArity = 3);

/**
 * Given a sequence of points of the form `[x, f(x)]`, returns a rational function
 *   that passes through each input point.
 */
sicmutils.rational_function.from_points = (function sicmutils$rational_function$from_points(xs){
return sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(sicmutils.rational_function.interpolate.bulirsch_stoer_recursive(xs,sicmutils.polynomial.identity.cljs$core$IFn$_invoke$arity$0()));
});
/**
 * Accepts a [[RationalFunction]] `r` and a sequence of symbols for each indeterminate,
 *   and emits the canonical form of the symbolic expression that
 *   represents [[RationalFunction]] `r`.
 * 
 *   NOTE: this is the output stage of Rational Function canonical form
 *   simplification. The input stage is handled by [[expression->]].
 * 
 *   NOTE See [[analyzer]] for an instance usable
 *   by [[sicmutils.expression.analyze/make-analyzer]].
 */
sicmutils.rational_function.__GT_expression = (function sicmutils$rational_function$__GT_expression(r,vars){
if((!(sicmutils.rational_function.rational_function_QMARK_(r)))){
return sicmutils.polynomial.__GT_expression(r,vars);
} else {
var G__86972 = sicmutils.polynomial.__GT_expression(sicmutils.rational_function.bare_u(r),vars);
var G__86973 = sicmutils.polynomial.__GT_expression(sicmutils.rational_function.bare_v(r),vars);
var fexpr__86971 = sicmutils.numsymb.symbolic_operator(new cljs.core.Symbol(null,"/","/",-1371932971,null));
return (fexpr__86971.cljs$core$IFn$_invoke$arity$2 ? fexpr__86971.cljs$core$IFn$_invoke$arity$2(G__86972,G__86973) : fexpr__86971.call(null,G__86972,G__86973));
}
});
/**
 * Singleton [[a/ICanonicalize]] instance.
 */
sicmutils.rational_function.analyzer = (function (){
if((typeof sicmutils !== 'undefined') && (typeof sicmutils.rational_function !== 'undefined') && (typeof sicmutils.rational_function.t_sicmutils$rational_function86974 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {sicmutils.expression.analyze.ICanonicalize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
sicmutils.rational_function.t_sicmutils$rational_function86974 = (function (meta86975){
this.meta86975 = meta86975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sicmutils.rational_function.t_sicmutils$rational_function86974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_86976,meta86975__$1){
var self__ = this;
var _86976__$1 = this;
return (new sicmutils.rational_function.t_sicmutils$rational_function86974(meta86975__$1));
}));

(sicmutils.rational_function.t_sicmutils$rational_function86974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_86976){
var self__ = this;
var _86976__$1 = this;
return self__.meta86975;
}));

(sicmutils.rational_function.t_sicmutils$rational_function86974.prototype.sicmutils$expression$analyze$ICanonicalize$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.rational_function.t_sicmutils$rational_function86974.prototype.sicmutils$expression$analyze$ICanonicalize$expression__GT_$arity$3 = (function (_,expr,cont){
var self__ = this;
var ___$1 = this;
return sicmutils.rational_function.expression__GT_.cljs$core$IFn$_invoke$arity$2(expr,cont);
}));

(sicmutils.rational_function.t_sicmutils$rational_function86974.prototype.sicmutils$expression$analyze$ICanonicalize$expression__GT_$arity$4 = (function (_,expr,cont,v_compare){
var self__ = this;
var ___$1 = this;
return sicmutils.rational_function.expression__GT_.cljs$core$IFn$_invoke$arity$3(expr,cont,v_compare);
}));

(sicmutils.rational_function.t_sicmutils$rational_function86974.prototype.sicmutils$expression$analyze$ICanonicalize$__GT_expression$arity$3 = (function (_,rf,vars){
var self__ = this;
var ___$1 = this;
return sicmutils.rational_function.__GT_expression(rf,vars);
}));

(sicmutils.rational_function.t_sicmutils$rational_function86974.prototype.sicmutils$expression$analyze$ICanonicalize$known_operation_QMARK_$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return cljs.core.contains_QMARK_(sicmutils.rational_function.operators_known,o);
}));

(sicmutils.rational_function.t_sicmutils$rational_function86974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta86975","meta86975",1331859736,null)], null);
}));

(sicmutils.rational_function.t_sicmutils$rational_function86974.cljs$lang$type = true);

(sicmutils.rational_function.t_sicmutils$rational_function86974.cljs$lang$ctorStr = "sicmutils.rational-function/t_sicmutils$rational_function86974");

(sicmutils.rational_function.t_sicmutils$rational_function86974.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"sicmutils.rational-function/t_sicmutils$rational_function86974");
}));

/**
 * Positional factory function for sicmutils.rational-function/t_sicmutils$rational_function86974.
 */
sicmutils.rational_function.__GT_t_sicmutils$rational_function86974 = (function sicmutils$rational_function$__GT_t_sicmutils$rational_function86974(meta86975){
return (new sicmutils.rational_function.t_sicmutils$rational_function86974(meta86975));
});

}

return (new sicmutils.rational_function.t_sicmutils$rational_function86974(cljs.core.PersistentArrayMap.EMPTY));
})()
;
sicmutils.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683)], null),(function (p){
var a = sicmutils.polynomial.bare_arity(p);
if(cljs.core.truth_(sicmutils.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(p))){
return sicmutils.rational_function.__GT_RationalFunction(a,(-1),sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(p),cljs.core.meta(p));
} else {
return sicmutils.rational_function.__GT_RationalFunction(a,(1),p,cljs.core.meta(p));
}
}));
sicmutils.polynomial.defbinary(sicmutils.generic.div,sicmutils.rational_function.make);
sicmutils.polynomial.defbinary(sicmutils.generic.solve_linear_right,sicmutils.rational_function.make);
sicmutils.polynomial.defbinary(sicmutils.generic.solve_linear,(function (l,r){
return sicmutils.rational_function.div(r,l);
}));
sicmutils.generic.exact_divide.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.polynomial","coeff","sicmutils.polynomial/coeff",-1161263509),new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683)], null),(function (c,p){
var vec__86977 = sicmutils.polynomial.bare_terms(p);
var term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86977,(0),null);
var terms = vec__86977;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(terms),(1))) && (sicmutils.polynomial.impl.constant_term_QMARK_(term)))){
return sicmutils.generic.exact_divide.cljs$core$IFn$_invoke$arity$2(c,sicmutils.polynomial.impl.coefficient(term));
} else {
return sicmutils.rational_function.make(c,p);
}
}));
/**
 * Installs the supplied function `f` into `generic-op` such that it will act
 *   between [[RationalFunction]] instances, or allow [[polynomial/Polynomial]]
 *   instances or non-[[polynomial/Polynomial]] coefficients on either side.
 */
sicmutils.rational_function.defbinary = (function sicmutils$rational_function$defbinary(generic_op,f){
var pairs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.rational-function","rational-function","sicmutils.rational-function/rational-function",1564681594),new cljs.core.Keyword("sicmutils.rational-function","rational-function","sicmutils.rational-function/rational-function",1564681594)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683),new cljs.core.Keyword("sicmutils.rational-function","rational-function","sicmutils.rational-function/rational-function",1564681594)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.polynomial","coeff","sicmutils.polynomial/coeff",-1161263509),new cljs.core.Keyword("sicmutils.rational-function","rational-function","sicmutils.rational-function/rational-function",1564681594)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.rational-function","rational-function","sicmutils.rational-function/rational-function",1564681594),new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.rational-function","rational-function","sicmutils.rational-function/rational-function",1564681594),new cljs.core.Keyword("sicmutils.polynomial","coeff","sicmutils.polynomial/coeff",-1161263509)], null)], null);
var seq__86980 = cljs.core.seq(pairs);
var chunk__86981 = null;
var count__86982 = (0);
var i__86983 = (0);
while(true){
if((i__86983 < count__86982)){
var vec__86992 = chunk__86981.cljs$core$IIndexed$_nth$arity$2(null,i__86983);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86992,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86992,(1),null);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r], null),((function (seq__86980,chunk__86981,count__86982,i__86983,vec__86992,l,r,pairs){
return (function (r__$1,s){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(r__$1,s) : f.call(null,r__$1,s));
});})(seq__86980,chunk__86981,count__86982,i__86983,vec__86992,l,r,pairs))
);


var G__87085 = seq__86980;
var G__87086 = chunk__86981;
var G__87087 = count__86982;
var G__87088 = (i__86983 + (1));
seq__86980 = G__87085;
chunk__86981 = G__87086;
count__86982 = G__87087;
i__86983 = G__87088;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__86980);
if(temp__5753__auto__){
var seq__86980__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__86980__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__86980__$1);
var G__87093 = cljs.core.chunk_rest(seq__86980__$1);
var G__87094 = c__4679__auto__;
var G__87095 = cljs.core.count(c__4679__auto__);
var G__87096 = (0);
seq__86980 = G__87093;
chunk__86981 = G__87094;
count__86982 = G__87095;
i__86983 = G__87096;
continue;
} else {
var vec__86997 = cljs.core.first(seq__86980__$1);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86997,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86997,(1),null);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r], null),((function (seq__86980,chunk__86981,count__86982,i__86983,vec__86997,l,r,seq__86980__$1,temp__5753__auto__,pairs){
return (function (r__$1,s){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(r__$1,s) : f.call(null,r__$1,s));
});})(seq__86980,chunk__86981,count__86982,i__86983,vec__86997,l,r,seq__86980__$1,temp__5753__auto__,pairs))
);


var G__87097 = cljs.core.next(seq__86980__$1);
var G__87098 = null;
var G__87099 = (0);
var G__87100 = (0);
seq__86980 = G__87097;
chunk__86981 = G__87098;
count__86982 = G__87099;
i__86983 = G__87100;
continue;
}
} else {
return null;
}
}
break;
}
});
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.rational-function","rational-function","sicmutils.rational-function/rational-function",1564681594),new cljs.core.Keyword("sicmutils.rational-function","rational-function","sicmutils.rational-function/rational-function",1564681594)], null),(function (l,r){
return sicmutils.rational_function.eq(l,r);
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683),new cljs.core.Keyword("sicmutils.rational-function","rational-function","sicmutils.rational-function/rational-function",1564681594)], null),(function (l,r){
return sicmutils.rational_function.eq(r,l);
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.polynomial","coeff","sicmutils.polynomial/coeff",-1161263509),new cljs.core.Keyword("sicmutils.rational-function","rational-function","sicmutils.rational-function/rational-function",1564681594)], null),(function (l,r){
return sicmutils.rational_function.eq(r,l);
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.rational-function","rational-function","sicmutils.rational-function/rational-function",1564681594),new cljs.core.Keyword("sicmutils.polynomial","polynomial","sicmutils.polynomial/polynomial",-2043958683)], null),(function (l,r){
return sicmutils.rational_function.eq(l,r);
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.rational-function","rational-function","sicmutils.rational-function/rational-function",1564681594),new cljs.core.Keyword("sicmutils.polynomial","coeff","sicmutils.polynomial/coeff",-1161263509)], null),(function (l,r){
return sicmutils.rational_function.eq(l,r);
}));
sicmutils.rational_function.defbinary(sicmutils.generic.add,sicmutils.rational_function.add);
sicmutils.rational_function.defbinary(sicmutils.generic.sub,sicmutils.rational_function.sub);
sicmutils.rational_function.defbinary(sicmutils.generic.mul,sicmutils.rational_function.mul);
sicmutils.rational_function.defbinary(sicmutils.generic.div,sicmutils.rational_function.div);
sicmutils.rational_function.defbinary(sicmutils.generic.exact_divide,sicmutils.rational_function.div);
sicmutils.rational_function.defbinary(sicmutils.generic.solve_linear_right,sicmutils.rational_function.div);
sicmutils.rational_function.defbinary(sicmutils.generic.solve_linear,(function (l,r){
return sicmutils.rational_function.div(r,l);
}));
sicmutils.rational_function.defbinary(sicmutils.generic.gcd,sicmutils.rational_function.gcd);
sicmutils.generic.negative_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.rational-function","rational-function","sicmutils.rational-function/rational-function",1564681594)], null),(function (a){
return sicmutils.rational_function.negative_QMARK_(a);
}));
sicmutils.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.rational-function","rational-function","sicmutils.rational-function/rational-function",1564681594)], null),(function (a){
return sicmutils.rational_function.abs(a);
}));
sicmutils.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.rational-function","rational-function","sicmutils.rational-function/rational-function",1564681594)], null),(function (a){
return sicmutils.rational_function.negate(a);
}));
sicmutils.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.rational-function","rational-function","sicmutils.rational-function/rational-function",1564681594)], null),(function (a){
return sicmutils.rational_function.invert(a);
}));
sicmutils.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.rational-function","rational-function","sicmutils.rational-function/rational-function",1564681594)], null),(function (a){
return sicmutils.rational_function.square(a);
}));
sicmutils.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.rational-function","rational-function","sicmutils.rational-function/rational-function",1564681594)], null),(function (a){
return sicmutils.rational_function.cube(a);
}));
sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.rational-function","rational-function","sicmutils.rational-function/rational-function",1564681594),new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),(function (b,x){
return sicmutils.rational_function.expt(b,x);
}));
sicmutils.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.rational-function","rational-function","sicmutils.rational-function/rational-function",1564681594)], null),(function (r){
return cljs.core.with_meta(sicmutils.rational_function.make(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(sicmutils.rational_function.bare_u(r)),sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(sicmutils.rational_function.bare_v(r))),cljs.core.meta(r));
}));
sicmutils.generic.partial_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.rational-function","rational-function","sicmutils.rational-function/rational-function",1564681594),sicmutils.value.seqtype], null),(function (r,selectors){
if(cljs.core.empty_QMARK_(selectors)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),sicmutils.rational_function.bare_arity(r))){
return sicmutils.rational_function.partial_derivative(r,(0));
} else {
return sicmutils.structure.down_STAR_(sicmutils.rational_function.partial_derivatives(r));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(selectors))){
return sicmutils.rational_function.partial_derivative(r,cljs.core.first(selectors));
} else {
return sicmutils.util.illegal("Invalid selector! Only 1 deep supported.");

}
}
}));

//# sourceMappingURL=sicmutils.rational_function.js.map
