goog.provide('sicmutils.series');





/**
* @constructor
 * @implements {sicmutils.function$.IArity}
 * @implements {cljs.core.IFn}
 * @implements {sicmutils.differential.IPerturbed}
 * @implements {sicmutils.value.Value}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
*/
sicmutils.series.Series = (function (xs,m){
this.xs = xs;
this.m = m;
this.cljs$lang$protocol_mask$partition0$ = 2173042689;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sicmutils.series.Series.prototype.toString = (function (){
var self__ = this;
var S = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(S.sicmutils$value$Value$freeze$arity$1(null));
}));

(sicmutils.series.Series.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var self__ = this;
var x__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#object[sicmutils.series.Series \"",x__$1.toString(),"\"]"], 0));
}));

(sicmutils.series.Series.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(sicmutils.series.Series.prototype.sicmutils$value$Value$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.series.Series.prototype.sicmutils$value$Value$zero_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sicmutils.series.s_zero;
}));

(sicmutils.series.Series.prototype.sicmutils$value$Value$identity_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(sicmutils.series.Series.prototype.sicmutils$value$Value$freeze$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var prefix = sicmutils.value.freeze(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),self__.xs)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,(1),null)),prefix,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null,(1),null))], 0))));
}));

(sicmutils.series.Series.prototype.sicmutils$value$Value$zero_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(sicmutils.series.Series.prototype.sicmutils$value$Value$one_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(sicmutils.series.Series.prototype.sicmutils$value$Value$exact_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(sicmutils.series.Series.prototype.sicmutils$value$Value$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("sicmutils.series","series","sicmutils.series/series",-314976590);
}));

(sicmutils.series.Series.prototype.sicmutils$value$Value$identity_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sicmutils.series.s_identity;
}));

(sicmutils.series.Series.prototype.sicmutils$value$Value$one_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sicmutils.series.s_one;
}));

(sicmutils.series.Series.prototype.sicmutils$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.series.Series.prototype.sicmutils$function$IArity$arity$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sicmutils.function$.arity(cljs.core.first(self__.xs));
}));

(sicmutils.series.Series.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.xs;
}));

(sicmutils.series.Series.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,meta){
var self__ = this;
var ___$1 = this;
return (new sicmutils.series.Series(self__.xs,meta));
}));

(sicmutils.series.Series.prototype.call = (function (unused__43702__auto__){
var self__ = this;
var self__ = this;
var G__97480 = (arguments.length - (1));
switch (G__97480) {
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

(sicmutils.series.Series.prototype.apply = (function (self__,args97475){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args97475)));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97488 = self__.xs;
var G__97489 = cljs.core.PersistentVector.EMPTY;
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97488,G__97489) : sicmutils.series.series_value.call(null,G__97488,G__97489));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97490 = self__.xs;
var G__97491 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97490,G__97491) : sicmutils.series.series_value.call(null,G__97490,G__97491));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97492 = self__.xs;
var G__97493 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97492,G__97493) : sicmutils.series.series_value.call(null,G__97492,G__97493));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97494 = self__.xs;
var G__97495 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97494,G__97495) : sicmutils.series.series_value.call(null,G__97494,G__97495));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97496 = self__.xs;
var G__97497 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97496,G__97497) : sicmutils.series.series_value.call(null,G__97496,G__97497));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97498 = self__.xs;
var G__97499 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97498,G__97499) : sicmutils.series.series_value.call(null,G__97498,G__97499));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97500 = self__.xs;
var G__97501 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97500,G__97501) : sicmutils.series.series_value.call(null,G__97500,G__97501));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97502 = self__.xs;
var G__97503 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97502,G__97503) : sicmutils.series.series_value.call(null,G__97502,G__97503));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97504 = self__.xs;
var G__97505 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97504,G__97505) : sicmutils.series.series_value.call(null,G__97504,G__97505));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97506 = self__.xs;
var G__97507 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97506,G__97507) : sicmutils.series.series_value.call(null,G__97506,G__97507));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97509 = self__.xs;
var G__97510 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97509,G__97510) : sicmutils.series.series_value.call(null,G__97509,G__97510));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97512 = self__.xs;
var G__97513 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97512,G__97513) : sicmutils.series.series_value.call(null,G__97512,G__97513));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97514 = self__.xs;
var G__97515 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97514,G__97515) : sicmutils.series.series_value.call(null,G__97514,G__97515));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97516 = self__.xs;
var G__97517 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97516,G__97517) : sicmutils.series.series_value.call(null,G__97516,G__97517));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97521 = self__.xs;
var G__97522 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97521,G__97522) : sicmutils.series.series_value.call(null,G__97521,G__97522));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97523 = self__.xs;
var G__97524 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97523,G__97524) : sicmutils.series.series_value.call(null,G__97523,G__97524));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97525 = self__.xs;
var G__97526 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97525,G__97526) : sicmutils.series.series_value.call(null,G__97525,G__97526));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97530 = self__.xs;
var G__97531 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97530,G__97531) : sicmutils.series.series_value.call(null,G__97530,G__97531));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97532 = self__.xs;
var G__97533 = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97532,G__97533) : sicmutils.series.series_value.call(null,G__97532,G__97533));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97537 = self__.xs;
var G__97538 = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97537,G__97538) : sicmutils.series.series_value.call(null,G__97537,G__97538));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97539 = self__.xs;
var G__97540 = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97539,G__97540) : sicmutils.series.series_value.call(null,G__97539,G__97540));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97541 = self__.xs;
var G__97542 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null),rest);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97541,G__97542) : sicmutils.series.series_value.call(null,G__97541,G__97542));
})(),null));
}));

(sicmutils.series.Series.prototype.sicmutils$differential$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.series.Series.prototype.sicmutils$differential$IPerturbed$perturbed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(sicmutils.series.Series.prototype.sicmutils$differential$IPerturbed$replace_tag$arity$3 = (function (s,old,new$){
var self__ = this;
var s__$1 = this;
var G__97546 = (function (p1__97465_SHARP_){
return sicmutils.differential.replace_tag(p1__97465_SHARP_,old,new$);
});
var G__97547 = s__$1;
return (sicmutils.series.fmap.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.fmap.cljs$core$IFn$_invoke$arity$2(G__97546,G__97547) : sicmutils.series.fmap.call(null,G__97546,G__97547));
}));

(sicmutils.series.Series.prototype.sicmutils$differential$IPerturbed$extract_tangent$arity$2 = (function (s,tag){
var self__ = this;
var s__$1 = this;
var G__97548 = (function (p1__97466_SHARP_){
return sicmutils.differential.extract_tangent(p1__97466_SHARP_,tag);
});
var G__97549 = s__$1;
return (sicmutils.series.fmap.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.fmap.cljs$core$IFn$_invoke$arity$2(G__97548,G__97549) : sicmutils.series.fmap.call(null,G__97548,G__97549));
}));

(sicmutils.series.Series.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xs","xs",-2004992428,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null);
}));

(sicmutils.series.Series.cljs$lang$type = true);

(sicmutils.series.Series.cljs$lang$ctorStr = "sicmutils.series/Series");

(sicmutils.series.Series.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"sicmutils.series/Series");
}));

/**
 * Positional factory function for sicmutils.series/Series.
 */
sicmutils.series.__GT_Series = (function sicmutils$series$__GT_Series(xs,m){
return (new sicmutils.series.Series(xs,m));
});





/**
* @constructor
 * @implements {sicmutils.function$.IArity}
 * @implements {cljs.core.IFn}
 * @implements {sicmutils.differential.IPerturbed}
 * @implements {sicmutils.value.Value}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
*/
sicmutils.series.PowerSeries = (function (xs,m){
this.xs = xs;
this.m = m;
this.cljs$lang$protocol_mask$partition0$ = 2173042689;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sicmutils.series.PowerSeries.prototype.toString = (function (){
var self__ = this;
var S = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(S.sicmutils$value$Value$freeze$arity$1(null));
}));

(sicmutils.series.PowerSeries.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#object[sicmutils.series.PowerSeries \"",this$__$1.toString(),"\"]"], 0));
}));

(sicmutils.series.PowerSeries.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(sicmutils.series.PowerSeries.prototype.sicmutils$value$Value$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.series.PowerSeries.prototype.sicmutils$value$Value$zero_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sicmutils.series.zero;
}));

(sicmutils.series.PowerSeries.prototype.sicmutils$value$Value$identity_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(sicmutils.series.PowerSeries.prototype.sicmutils$value$Value$freeze$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var prefix = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (n,a){
if(sicmutils.value.one_QMARK_(a)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null))], 0)))),null,(1),null))], 0))));
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(sicmutils.value.zero_QMARK_),sicmutils.value.freeze(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),self__.xs)))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,(1),null)),prefix,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null,(1),null))], 0))));
}));

(sicmutils.series.PowerSeries.prototype.sicmutils$value$Value$zero_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(sicmutils.series.PowerSeries.prototype.sicmutils$value$Value$one_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(sicmutils.series.PowerSeries.prototype.sicmutils$value$Value$exact_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(sicmutils.series.PowerSeries.prototype.sicmutils$value$Value$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("sicmutils.series","power-series","sicmutils.series/power-series",-2106733657);
}));

(sicmutils.series.PowerSeries.prototype.sicmutils$value$Value$identity_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sicmutils.series.identity;
}));

(sicmutils.series.PowerSeries.prototype.sicmutils$value$Value$one_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sicmutils.series.one;
}));

(sicmutils.series.PowerSeries.prototype.sicmutils$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.series.PowerSeries.prototype.sicmutils$function$IArity$arity$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null);
}));

(sicmutils.series.PowerSeries.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.xs;
}));

(sicmutils.series.PowerSeries.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,meta){
var self__ = this;
var ___$1 = this;
return (new sicmutils.series.PowerSeries(self__.xs,meta));
}));

(sicmutils.series.PowerSeries.prototype.call = (function (unused__43702__auto__){
var self__ = this;
var self__ = this;
var G__97570 = (arguments.length - (1));
switch (G__97570) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(sicmutils.series.PowerSeries.prototype.apply = (function (self__,args97559){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args97559)));
}));

(sicmutils.series.PowerSeries.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((sicmutils.series.power_series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.power_series_value.cljs$core$IFn$_invoke$arity$2(self__.xs,a) : sicmutils.series.power_series_value.call(null,self__.xs,a)),null));
}));

(sicmutils.series.PowerSeries.prototype.sicmutils$differential$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.series.PowerSeries.prototype.sicmutils$differential$IPerturbed$perturbed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(sicmutils.series.PowerSeries.prototype.sicmutils$differential$IPerturbed$replace_tag$arity$3 = (function (s,old,new$){
var self__ = this;
var s__$1 = this;
var G__97574 = (function (p1__97553_SHARP_){
return sicmutils.differential.replace_tag(p1__97553_SHARP_,old,new$);
});
var G__97575 = s__$1;
return (sicmutils.series.fmap.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.fmap.cljs$core$IFn$_invoke$arity$2(G__97574,G__97575) : sicmutils.series.fmap.call(null,G__97574,G__97575));
}));

(sicmutils.series.PowerSeries.prototype.sicmutils$differential$IPerturbed$extract_tangent$arity$2 = (function (s,tag){
var self__ = this;
var s__$1 = this;
var G__97576 = (function (p1__97554_SHARP_){
return sicmutils.differential.extract_tangent(p1__97554_SHARP_,tag);
});
var G__97577 = s__$1;
return (sicmutils.series.fmap.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.fmap.cljs$core$IFn$_invoke$arity$2(G__97576,G__97577) : sicmutils.series.fmap.call(null,G__97576,G__97577));
}));

(sicmutils.series.PowerSeries.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xs","xs",-2004992428,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null);
}));

(sicmutils.series.PowerSeries.cljs$lang$type = true);

(sicmutils.series.PowerSeries.cljs$lang$ctorStr = "sicmutils.series/PowerSeries");

(sicmutils.series.PowerSeries.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"sicmutils.series/PowerSeries");
}));

/**
 * Positional factory function for sicmutils.series/PowerSeries.
 */
sicmutils.series.__GT_PowerSeries = (function sicmutils$series$__GT_PowerSeries(xs,m){
return (new sicmutils.series.PowerSeries(xs,m));
});

/**
 * Returns true if `s` is either a [[Series]] or a [[PowerSeries]], false
 *   otherwise.
 */
sicmutils.series.series_QMARK_ = (function sicmutils$series$series_QMARK_(s){
return (((s instanceof sicmutils.series.Series)) || ((s instanceof sicmutils.series.PowerSeries)));
});
/**
 * Returns true if `s` is specifically a [[PowerSeries]], false otherwise.
 */
sicmutils.series.power_series_QMARK_ = (function sicmutils$series$power_series_QMARK_(s){
return (s instanceof sicmutils.series.PowerSeries);
});
/**
 * Takes a [[series?]]-true object and returns the appropriate, more specific
 *   constructor.
 */
sicmutils.series._make = (function sicmutils$series$_make(s){
if(sicmutils.series.power_series_QMARK_(s)){
return sicmutils.series.__GT_PowerSeries;
} else {
return sicmutils.series.__GT_Series;
}
});
/**
 * Takes a keyword - either `::series` or `::power-series` - and returns the
 *   appropriate series constructor. Throws if neither of these are supplied.
 */
sicmutils.series.kind__GT_make = (function sicmutils$series$kind__GT_make(kind){
var G__97584 = kind;
var G__97584__$1 = (((G__97584 instanceof cljs.core.Keyword))?G__97584.fqn:null);
switch (G__97584__$1) {
case "sicmutils.series/series":
return sicmutils.series.__GT_Series;

break;
case "sicmutils.series/power-series":
return sicmutils.series.__GT_PowerSeries;

break;
default:
return sicmutils.util.illegal(["Unsupported kind: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)].join(''));

}
});
/**
 * Given a sequence, returns a new [[Series]] object that wraps that
 *   sequence (potentially padding its tail with zeros if it's finite).
 */
sicmutils.series.series_STAR_ = (function sicmutils$series$series_STAR_(prefix){
return sicmutils.series.__GT_Series(sicmutils.series.impl.__GT_series(prefix),null);
});
/**
 * Return a [[Series]] starting with the supplied values. The remainder of the
 *   series will be filled with the zero-value corresponding to the first of the
 *   given values.
 * 
 *   If you have a sequence already, prefer [[series*]].
 */
sicmutils.series.series = (function sicmutils$series$series(var_args){
var args__4870__auto__ = [];
var len__4864__auto___98024 = arguments.length;
var i__4865__auto___98025 = (0);
while(true){
if((i__4865__auto___98025 < len__4864__auto___98024)){
args__4870__auto__.push((arguments[i__4865__auto___98025]));

var G__98027 = (i__4865__auto___98025 + (1));
i__4865__auto___98025 = G__98027;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sicmutils.series.series.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sicmutils.series.series.cljs$core$IFn$_invoke$arity$variadic = (function (prefix){
return sicmutils.series.series_STAR_(prefix);
}));

(sicmutils.series.series.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.series.series.cljs$lang$applyTo = (function (seq97585){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq97585));
}));

/**
 * Given a sequence, returns a new [[PowerSeries]] object that wraps that
 *   sequence (potentially padding its tail with zeros if it's finite).
 */
sicmutils.series.power_series_STAR_ = (function sicmutils$series$power_series_STAR_(prefix){
return sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.__GT_series(prefix),null);
});
/**
 * Return a [[PowerSeries]] starting with the supplied values. The remainder of
 *   the series will be filled with the zero-value corresponding to the first of
 *   the given values.
 * 
 *   If you have a sequence already, prefer [[power-series*]].
 */
sicmutils.series.power_series = (function sicmutils$series$power_series(var_args){
var args__4870__auto__ = [];
var len__4864__auto___98029 = arguments.length;
var i__4865__auto___98030 = (0);
while(true){
if((i__4865__auto___98030 < len__4864__auto___98029)){
args__4870__auto__.push((arguments[i__4865__auto___98030]));

var G__98031 = (i__4865__auto___98030 + (1));
i__4865__auto___98030 = G__98031;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sicmutils.series.power_series.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sicmutils.series.power_series.cljs$core$IFn$_invoke$arity$variadic = (function (prefix){
return sicmutils.series.power_series_STAR_(prefix);
}));

(sicmutils.series.power_series.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.series.power_series.cljs$lang$applyTo = (function (seq97589){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq97589));
}));

sicmutils.series.s_zero = sicmutils.series.series_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null));
sicmutils.series.s_one = sicmutils.series.series_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
sicmutils.series.s_identity = sicmutils.series.series_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null));
/**
 * [[PowerSeries]] instance representing the constant 0.
 */
sicmutils.series.zero = sicmutils.series.power_series_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null));
/**
 * [[PowerSeries]] instance representing the constant 1.
 */
sicmutils.series.one = sicmutils.series.power_series_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
/**
 * [[PowerSeries]] instance representing the identity function.
 */
sicmutils.series.identity = sicmutils.series.power_series_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null));
/**
 * Returns a [[PowerSeries]] representing the supplied constant term.
 * 
 *   Optionally, pass `kind` of either `::series` or `::power-series` to specify
 *   the type of series returned.
 */
sicmutils.series.constant = (function sicmutils$series$constant(var_args){
var G__97603 = arguments.length;
switch (G__97603) {
case 1:
return sicmutils.series.constant.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.series.constant.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.series.constant.cljs$core$IFn$_invoke$arity$1 = (function (c){
return sicmutils.series.power_series_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
}));

(sicmutils.series.constant.cljs$core$IFn$_invoke$arity$2 = (function (c,kind){
var G__97605 = sicmutils.series.impl.__GT_series(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
var G__97606 = null;
var fexpr__97604 = sicmutils.series.kind__GT_make(kind);
return (fexpr__97604.cljs$core$IFn$_invoke$arity$2 ? fexpr__97604.cljs$core$IFn$_invoke$arity$2(G__97605,G__97606) : fexpr__97604.call(null,G__97605,G__97606));
}));

(sicmutils.series.constant.cljs$lang$maxFixedArity = 2);

/**
 * Returns a [[PowerSeries]] instance representing $x^n$.
 */
sicmutils.series.xpow = (function sicmutils$series$xpow(n){
if((n >= (0))){
} else {
throw (new Error("Assert failed: (>= n 0)"));
}

return sicmutils.series.power_series_STAR_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)));
});
/**
 * Returns a [[PowerSeries]] generated by `(f i)` for `i` in `0, 1, ...`
 * 
 *   Optionally, pass `kind` of either `::series` or `::power-series` to specify
 *   the type of series returned.
 */
sicmutils.series.generate = (function sicmutils$series$generate(var_args){
var G__97608 = arguments.length;
switch (G__97608) {
case 1:
return sicmutils.series.generate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.series.generate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.series.generate.cljs$core$IFn$_invoke$arity$1 = (function (f){
return sicmutils.series.__GT_PowerSeries(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.range.cljs$core$IFn$_invoke$arity$0()),null);
}));

(sicmutils.series.generate.cljs$core$IFn$_invoke$arity$2 = (function (f,kind){
var G__97615 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var G__97616 = null;
var fexpr__97614 = sicmutils.series.kind__GT_make(kind);
return (fexpr__97614.cljs$core$IFn$_invoke$arity$2 ? fexpr__97614.cljs$core$IFn$_invoke$arity$2(G__97615,G__97616) : fexpr__97614.call(null,G__97615,G__97616));
}));

(sicmutils.series.generate.cljs$lang$maxFixedArity = 2);

/**
 * Accepts a [[Series]] or [[PowerSeries]] and coerces the input to
 *   a [[PowerSeries]] without any application. Returns the coerced [[PowerSeries]]
 *   instance.
 * 
 *   Supplying a non-series will throw.
 */
sicmutils.series.__GT_function = (function sicmutils$series$__GT_function(s){
if(sicmutils.series.power_series_QMARK_(s)){
return s;
} else {
if(sicmutils.series.series_QMARK_(s)){
return sicmutils.series.__GT_PowerSeries(cljs.core.seq(s),cljs.core.meta(s));
} else {
return sicmutils.util.illegal("non-series provided to ->function.");

}
}
});
/**
 * Returns a [[PowerSeries]] representing the [Taylor
 *   series](https://en.wikipedia.org/wiki/Taylor_series) expansion of `f` at the
 *   point specified by `xs`. Multiple arguments are allowed. If no arguments `xs`
 *   are supplied, the expansion point defaults to 0.
 * 
 *   The expansion at 0 is also called a 'Maclaurin series'.
 * 
 *   NOTE: this function takes derivatives internally, so if you pass a function
 *   make sure you require [[sicmutils.calculus.derivative]] to install the
 *   derivative implementation for functions. If you pass some other callable,
 *   differentiable function-like thing, like a polynomial, this is not necessary.
 * 
 *   NOTE: The typical definition of a Taylor series of `f` expanded around some
 *   point `x` is
 * 
 *   $$T(p) = f(x) + \frac{f'(x)}{1!}(p-x) + \frac{f''(x)}{2!} (p-x)^2 + \ldots,$$
 * 
 *   where `p` is the evaluation point. When `(= p x)`, all derivatives of the
 *   Taylor series expansion of `f` will exactly match the derivatives of `f`
 *   itself.
 * 
 *   The Taylor series returned here (call it $T'$) is actually a function of `dx`,
 *   where
 * 
 *   $$T'(dx) = T(x+dx) = f(x) + \frac{f'(x)}{1!}(dx) + \frac{f''(x)}{2!} (dx)^2 + \ldots.$$
 */
sicmutils.series.function__GT_ = (function sicmutils$series$function__GT_(var_args){
var G__97625 = arguments.length;
switch (G__97625) {
case 1:
return sicmutils.series.function__GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___98036 = arguments.length;
var i__4865__auto___98037 = (0);
while(true){
if((i__4865__auto___98037 < len__4864__auto___98036)){
args_arr__4885__auto__.push((arguments[i__4865__auto___98037]));

var G__98038 = (i__4865__auto___98037 + (1));
i__4865__auto___98037 = G__98038;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((1)),(0),null));
return sicmutils.series.function__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4886__auto__);

}
});

(sicmutils.series.function__GT_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return sicmutils.series.function__GT_.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
}));

(sicmutils.series.function__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (f,xs){
var gen = (function sicmutils$series$gen(i,f__$1,fact_n){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f__$1,xs),fact_n),sicmutils$series$gen((i + (1)),sicmutils.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(f__$1,cljs.core.PersistentVector.EMPTY),(fact_n * i)));
}),null,null));
});
return sicmutils.series.__GT_PowerSeries(gen((1),f,(1)),null);
}));

/** @this {Function} */
(sicmutils.series.function__GT_.cljs$lang$applyTo = (function (seq97622){
var G__97623 = cljs.core.first(seq97622);
var seq97622__$1 = cljs.core.next(seq97622);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__97623,seq97622__$1);
}));

(sicmutils.series.function__GT_.cljs$lang$maxFixedArity = (1));

/**
 * Evaluates the power series, and converts it back down to a normal series.
 */
sicmutils.series.power_series_value = (function sicmutils$series$power_series_value(f,x){
var one = sicmutils.value.one_like(x);
var powers = cljs.core.iterate((function (p1__97633_SHARP_){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(x,p1__97633_SHARP_);
}),one);
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(sicmutils.generic._STAR_,f,powers);
});
sicmutils.series.series_value = (function sicmutils$series$series_value(f,xs){
var collect = (function sicmutils$series$series_value_$_collect(f__$1){
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(f__$1),xs);
if(sicmutils.series.series_QMARK_(result)){
return (new cljs.core.LazySeq(null,(function (){
var vec__97657 = result;
var seq__97658 = cljs.core.seq(vec__97657);
var first__97659 = cljs.core.first(seq__97658);
var seq__97658__$1 = cljs.core.next(seq__97658);
var r = first__97659;
var r_tail = seq__97658__$1;
return cljs.core.cons(r,sicmutils.series.impl.seq_COLON__PLUS_(r_tail,sicmutils$series$series_value_$_collect(cljs.core.rest(f__$1))));
}),null,null));
} else {
return cljs.core.cons(result,(new cljs.core.LazySeq(null,(function (){
return sicmutils$series$series_value_$_collect(cljs.core.rest(f__$1));
}),null,null)));
}
});
return collect(cljs.core.seq(f));
});
/**
 * Returns the value of the supplied [[Series]] or [[PowerSeries]] applied to `xs`.
 * 
 *   If a [[PowerSeries]] is supplied, `xs` (despite its name) must be a single
 *   value. Returns a [[Series]] generated by multiplying each `i`th term in `s` by
 *   $x^i$, where $x$ is the `xs` argument.
 * 
 *   If a [[Series]] `s` is supplied:
 * 
 *   Assumes that `s` is a series of applicables of arity equal to the count of
 *   `xs`. If, in fact, `s` is a series of series-valued applicables, then the
 *   result will be a sort of layered sum of the values.
 * 
 *   Concretely, suppose that `s` has the form:
 * 
 *   ```
 *   [x => [A1 A2 A3...], x => [B1 B2 B3...], x => [C1 C2 C3...], ...]
 *   ```
 * 
 *   Then, this series applied to x will yield the new series:
 * 
 *   ```
 *   [A1 (+ A2 B1) (+ A3 B2 C1) ...]
 *   ```
 * 
 *   The way to think about this is, that if a power series has some other series
 *   as the coefficient of the $x^n$ term, the series must shift by $n$ positions
 *   before being added into the final total.
 */
sicmutils.series.value = (function sicmutils$series$value(s,xs){
if(sicmutils.series.power_series_QMARK_(s)){
return sicmutils.series.power_series_value(s,xs);
} else {
if(sicmutils.series.series_QMARK_(s)){
return sicmutils.series.series_value(s,xs);
} else {
return sicmutils.util.illegal(["value only works on `Series` or `PowerSeries`; received ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));

}
}
});
/**
 * Returns a new series generated by applying the supplied `f` to each element in
 *   the input series `s`. The returned series will be the same type as the input
 *   series, either [[Series]] or [[PowerSeries]].
 * 
 *   NOTE scmutils calls this `series:elementwise`.
 */
sicmutils.series.fmap = (function sicmutils$series$fmap(f,s){
var G__97664 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,s);
var G__97665 = cljs.core.meta(s);
var fexpr__97663 = sicmutils.series._make(s);
return (fexpr__97663.cljs$core$IFn$_invoke$arity$2 ? fexpr__97663.cljs$core$IFn$_invoke$arity$2(G__97664,G__97665) : fexpr__97663.call(null,G__97664,G__97665));
});
/**
 * Accepts an input series `s` and an exponent `n`, and expands the series in the
 *   `n`th power of its argument. Every term `i` maps to position `i*n`, with zeros
 *   padded in the new missing slots.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (inflate identity 3)
 *   ;; => (series 0 0 0 1)
 * 
 *   (take 6 (inflate (generate inc) 3))
 *   ;; => (1 0 2 0 3 0)
 *   ```
 * 
 *   NOTE this operation makes sense as described for a [[PowerSeries]], where each
 *   entry represents the coefficient of some power of `x`; functionally it still
 *   works with [[Series]] objects.
 */
sicmutils.series.inflate = (function sicmutils$series$inflate(s,n){
if((n <= (1))){
return s;
} else {
var zero = sicmutils.value.zero_like(cljs.core.first(s));
var zeros = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1)),zero);
var G__97668 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.cons,s,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(zeros)));
var G__97669 = cljs.core.meta(s);
var fexpr__97667 = sicmutils.series._make(s);
return (fexpr__97667.cljs$core$IFn$_invoke$arity$2 ? fexpr__97667.cljs$core$IFn$_invoke$arity$2(G__97668,G__97669) : fexpr__97667.call(null,G__97668,G__97669));
}
});
/**
 * Returns a series (of the same type as the input) of partial sums of the terms
 *   in the supplied series `s`.
 */
sicmutils.series.partial_sums = (function sicmutils$series$partial_sums(s){
var G__97673 = cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_,s);
var G__97674 = cljs.core.meta(s);
var fexpr__97672 = sicmutils.series._make(s);
return (fexpr__97672.cljs$core$IFn$_invoke$arity$2 ? fexpr__97672.cljs$core$IFn$_invoke$arity$2(G__97673,G__97674) : fexpr__97672.call(null,G__97673,G__97674));
});
/**
 * Returns the sum of all elements in the input series `s` up to order
 *   `n` (inclusive). For example:
 * 
 *   ```clojure
 *   (sum (series 1 1 1 1 1 1 1) 3)
 *   ;; => 4
 *   ```
 * 
 *   NOTE that [[sum]] sums the first `n + 1` terms, since a series starts with an
 *   order 0 term.
 */
sicmutils.series.sum = (function sicmutils$series$sum(s,n){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.take.cljs$core$IFn$_invoke$arity$1((n + (1))),sicmutils.generic._PLUS_,s);
});
/**
 * Returns a new [[PowerSeries]] $U$ that represents the composition of the two
 *   input power series $S$ and $T$, where $U$ evaluates like:
 * 
 *   ```
 *   $$U(x) = S(T(x))$$
 *   ```
 */
sicmutils.series.compose = (function sicmutils$series$compose(s,t){
if(sicmutils.series.power_series_QMARK_(s)){
} else {
throw (new Error("Assert failed: (power-series? s)"));
}

if(sicmutils.series.power_series_QMARK_(t)){
} else {
throw (new Error("Assert failed: (power-series? t)"));
}

return sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.compose(cljs.core.seq(s),cljs.core.seq(t)),null);
});
/**
 * Returns a new [[PowerSeries]] $U$ that represents the compositional inverse (the
 *   'reversion') of the input power series $S$, satisfying:
 * 
 *   ```
 *   $$S(U(x)) = x$$
 *   ```
 */
sicmutils.series.revert = (function sicmutils$series$revert(s){
if(sicmutils.series.power_series_QMARK_(s)){
} else {
throw (new Error("Assert failed: (power-series? s)"));
}

return sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.revert(cljs.core.seq(s)),cljs.core.meta(s));
});
/**
 * Returns a [[PowerSeries]] $U$ that represents the definite integral of the
 *   input power series $S$ with constant term $c$:
 * 
 *   ```
 *   $$U = c + \int_0^{\infty} S$$
 *   ```
 */
sicmutils.series.integral = (function sicmutils$series$integral(var_args){
var G__97680 = arguments.length;
switch (G__97680) {
case 1:
return sicmutils.series.integral.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.series.integral.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.series.integral.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sicmutils.series.integral.cljs$core$IFn$_invoke$arity$2(s,(0));
}));

(sicmutils.series.integral.cljs$core$IFn$_invoke$arity$2 = (function (s,constant){
if(sicmutils.series.power_series_QMARK_(s)){
} else {
throw (new Error("Assert failed: (power-series? s)"));
}

return sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.integral.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(s),constant),cljs.core.meta(s));
}));

(sicmutils.series.integral.cljs$lang$maxFixedArity = 2);

/**
 * Given a univariate [[PowerSeries]] and a singleton sequence of `factors`,
 *   returns a new [[PowerSeries]] that scales its argument by `(first factor)` on
 *   application.
 * 
 *   Given a [[Series]], recursively applies [[arg-scale]] to each element, making
 *   this ONLY appropriate in its current form for a [[Series]] of [[PowerSeries]]
 *   instances.
 */
sicmutils.series.arg_scale = (function sicmutils$series$arg_scale(s,factors){
if(sicmutils.series.power_series_QMARK_(s)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(factors),(1))){
} else {
throw (new Error(["Assert failed: ","Only univariate [[PowerSeries]] are allowed.","\n","(= (count factors) 1)"].join('')));
}

return sicmutils.series.compose(s,sicmutils.series.power_series_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.first(factors)], null)));
} else {
return sicmutils.series.fmap((function (p1__97681_SHARP_){
return (sicmutils.series.arg_scale.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.arg_scale.cljs$core$IFn$_invoke$arity$2(p1__97681_SHARP_,factors) : sicmutils.series.arg_scale.call(null,p1__97681_SHARP_,factors));
}),s);
}
});
/**
 * Given a univariate [[PowerSeries]] and a singleton sequence of `shifts`,
 *   returns a function that, when applied, returns a value equivalent to calling
 *   the original `s` with its argument shifted by `(first shifts)`.
 * 
 *   NOTE: [[arg-shift]] can't return a [[PowerSeries]] instance because the
 *   implementation of [[compose]] does not currently allow a constant element in
 *   the right-hand series.
 * 
 *   Given a [[Series]], recursively applies [[arg-shift]] to each element, making
 *   this ONLY appropriate in its current form for a [[Series]] of [[PowerSeries]]
 *   instances. Returns a [[Series]] of functions.
 */
sicmutils.series.arg_shift = (function sicmutils$series$arg_shift(s,shifts){
if(sicmutils.series.power_series_QMARK_(s)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shifts),(1))){
} else {
throw (new Error(["Assert failed: ","Only univariate [[PowerSeries]] are allowed.","\n","(= (count shifts) 1)"].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sicmutils.function$.arg_shift,s,shifts);
} else {
return sicmutils.series.fmap((function (p1__97684_SHARP_){
return (sicmutils.series.arg_shift.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.arg_shift.cljs$core$IFn$_invoke$arity$2(p1__97684_SHARP_,shifts) : sicmutils.series.arg_shift.call(null,p1__97684_SHARP_,shifts));
}),s);
}
});
sicmutils.series.exp_series = sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.expx,null);
sicmutils.series.sin_series = sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.sinx,null);
sicmutils.series.cos_series = sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.cosx,null);
sicmutils.series.tan_series = sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.tanx,null);
sicmutils.series.sec_series = sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.secx,null);
sicmutils.series.asin_series = sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.asinx,null);
sicmutils.series.acos_series = sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.acosx,null);
sicmutils.series.atan_series = sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.atanx,null);
sicmutils.series.acot_series = sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.acotx,null);
sicmutils.series.sinh_series = sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.sinhx,null);
sicmutils.series.cosh_series = sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.coshx,null);
sicmutils.series.tanh_series = sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.tanhx,null);
sicmutils.series.asinh_series = sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.asinhx,null);
sicmutils.series.atanh_series = sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.atanhx,null);
sicmutils.series.log1_PLUS_x_series = sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.log1_PLUS_x,null);
sicmutils.series.log1_x_series = sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.log1_x,null);
/**
 * Returns a [[PowerSeries]] instance representing a
 *   [Binomial series](https://en.wikipedia.org/wiki/Binomial_series), ie, the
 *   taylor series of the function $f$ given by
 * 
 *   ```
 *   $$f(x) = (1 + x)^\alpha$$
 *   ```
 */
sicmutils.series.binomial_series = (function sicmutils$series$binomial_series(alpha){
return sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.binomial(alpha),null);
});
sicmutils.series.fib_series = sicmutils.series.__GT_Series(sicmutils.series.impl.fib,null);
sicmutils.series.catalan_series = sicmutils.series.__GT_Series(sicmutils.series.impl.catalan,null);
sicmutils.series.harmonic_series = sicmutils.series.__GT_Series(sicmutils.series.impl.harmonic,null);
sicmutils.series.bell_series = sicmutils.series.__GT_Series(sicmutils.series.impl.bell,null);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.value","function","sicmutils.value/function",-1964931037),new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444));
var seq__97698_98049 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.series.__GT_Series,new cljs.core.Keyword("sicmutils.series","series","sicmutils.series/series",-314976590)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.series.__GT_PowerSeries,new cljs.core.Keyword("sicmutils.series","power-series","sicmutils.series/power-series",-2106733657)], null)], null));
var chunk__97699_98050 = null;
var count__97700_98051 = (0);
var i__97701_98052 = (0);
while(true){
if((i__97701_98052 < count__97700_98051)){
var vec__97807_98054 = chunk__97699_98050.cljs$core$IIndexed$_nth$arity$2(null,i__97701_98052);
var ctor_98055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97807_98054,(0),null);
var kind_98056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97807_98054,(1),null);
sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98056,kind_98056], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056){
return (function (s,t){
var G__97817 = sicmutils.series.impl.seq_COLON__PLUS_(cljs.core.seq(s),cljs.core.seq(t));
var G__97818 = null;
return (ctor_98055.cljs$core$IFn$_invoke$arity$2 ? ctor_98055.cljs$core$IFn$_invoke$arity$2(G__97817,G__97818) : ctor_98055.call(null,G__97817,G__97818));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056))
);

sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_98056], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056){
return (function (c,s){
var G__97819 = sicmutils.series.impl.c_PLUS_seq(c,cljs.core.seq(s));
var G__97820 = cljs.core.meta(s);
return (ctor_98055.cljs$core$IFn$_invoke$arity$2 ? ctor_98055.cljs$core$IFn$_invoke$arity$2(G__97819,G__97820) : ctor_98055.call(null,G__97819,G__97820));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056))
);

sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98056,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056){
return (function (s,c){
var G__97821 = sicmutils.series.impl.seq_PLUS_c(cljs.core.seq(s),c);
var G__97822 = cljs.core.meta(s);
return (ctor_98055.cljs$core$IFn$_invoke$arity$2 ? ctor_98055.cljs$core$IFn$_invoke$arity$2(G__97821,G__97822) : ctor_98055.call(null,G__97821,G__97822));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056))
);

sicmutils.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98056], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056){
return (function (s){
var G__97826 = sicmutils.series.impl.negate(cljs.core.seq(s));
var G__97827 = cljs.core.meta(s);
return (ctor_98055.cljs$core$IFn$_invoke$arity$2 ? ctor_98055.cljs$core$IFn$_invoke$arity$2(G__97826,G__97827) : ctor_98055.call(null,G__97826,G__97827));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056))
);

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98056,kind_98056], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056){
return (function (s,t){
var G__97828 = sicmutils.series.impl.seq_COLON__(cljs.core.seq(s),cljs.core.seq(t));
var G__97829 = null;
return (ctor_98055.cljs$core$IFn$_invoke$arity$2 ? ctor_98055.cljs$core$IFn$_invoke$arity$2(G__97828,G__97829) : ctor_98055.call(null,G__97828,G__97829));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056))
);

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_98056], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056){
return (function (c,s){
var G__97831 = sicmutils.series.impl.c_seq(c,cljs.core.seq(s));
var G__97832 = cljs.core.meta(s);
return (ctor_98055.cljs$core$IFn$_invoke$arity$2 ? ctor_98055.cljs$core$IFn$_invoke$arity$2(G__97831,G__97832) : ctor_98055.call(null,G__97831,G__97832));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056))
);

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98056,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056){
return (function (s,c){
var G__97839 = sicmutils.series.impl.seq_c(cljs.core.seq(s),c);
var G__97840 = cljs.core.meta(s);
return (ctor_98055.cljs$core$IFn$_invoke$arity$2 ? ctor_98055.cljs$core$IFn$_invoke$arity$2(G__97839,G__97840) : ctor_98055.call(null,G__97839,G__97840));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056))
);

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98056,kind_98056], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056){
return (function (s,t){
var G__97841 = sicmutils.series.impl.seq_COLON__STAR_(cljs.core.seq(s),cljs.core.seq(t));
var G__97842 = null;
return (ctor_98055.cljs$core$IFn$_invoke$arity$2 ? ctor_98055.cljs$core$IFn$_invoke$arity$2(G__97841,G__97842) : ctor_98055.call(null,G__97841,G__97842));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056))
);

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_98056], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056){
return (function (c,s){
var G__97845 = sicmutils.series.impl.c_STAR_seq(c,cljs.core.seq(s));
var G__97846 = cljs.core.meta(s);
return (ctor_98055.cljs$core$IFn$_invoke$arity$2 ? ctor_98055.cljs$core$IFn$_invoke$arity$2(G__97845,G__97846) : ctor_98055.call(null,G__97845,G__97846));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056))
);

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98056,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056){
return (function (s,c){
var G__97847 = sicmutils.series.impl.seq_STAR_c(cljs.core.seq(s),c);
var G__97848 = cljs.core.meta(s);
return (ctor_98055.cljs$core$IFn$_invoke$arity$2 ? ctor_98055.cljs$core$IFn$_invoke$arity$2(G__97847,G__97848) : ctor_98055.call(null,G__97847,G__97848));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056))
);

sicmutils.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98056], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056){
return (function (s){
var xs = cljs.core.seq(s);
var G__97849 = sicmutils.series.impl.seq_COLON__STAR_(xs,xs);
var G__97850 = cljs.core.meta(s);
return (ctor_98055.cljs$core$IFn$_invoke$arity$2 ? ctor_98055.cljs$core$IFn$_invoke$arity$2(G__97849,G__97850) : ctor_98055.call(null,G__97849,G__97850));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056))
);

sicmutils.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98056], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056){
return (function (s){
var xs = cljs.core.seq(s);
var G__97851 = sicmutils.series.impl.seq_COLON__STAR_(sicmutils.series.impl.seq_COLON__STAR_(xs,xs),xs);
var G__97852 = cljs.core.meta(s);
return (ctor_98055.cljs$core$IFn$_invoke$arity$2 ? ctor_98055.cljs$core$IFn$_invoke$arity$2(G__97851,G__97852) : ctor_98055.call(null,G__97851,G__97852));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056))
);

sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98056,new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056){
return (function (s,e){
var G__97853 = sicmutils.series.impl.expt(cljs.core.seq(s),e);
var G__97854 = cljs.core.meta(s);
return (ctor_98055.cljs$core$IFn$_invoke$arity$2 ? ctor_98055.cljs$core$IFn$_invoke$arity$2(G__97853,G__97854) : ctor_98055.call(null,G__97853,G__97854));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056))
);

sicmutils.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98056], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056){
return (function (s){
var G__97858 = sicmutils.series.impl.invert(cljs.core.seq(s));
var G__97859 = cljs.core.meta(s);
return (ctor_98055.cljs$core$IFn$_invoke$arity$2 ? ctor_98055.cljs$core$IFn$_invoke$arity$2(G__97858,G__97859) : ctor_98055.call(null,G__97858,G__97859));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056))
);

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_98056], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056){
return (function (c,s){
var G__97860 = sicmutils.series.impl.c_div_seq(c,cljs.core.seq(s));
var G__97861 = cljs.core.meta(s);
return (ctor_98055.cljs$core$IFn$_invoke$arity$2 ? ctor_98055.cljs$core$IFn$_invoke$arity$2(G__97860,G__97861) : ctor_98055.call(null,G__97860,G__97861));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056))
);

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98056,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056){
return (function (s,c){
var G__97862 = sicmutils.series.impl.seq_div_c(cljs.core.seq(s),c);
var G__97863 = cljs.core.meta(s);
return (ctor_98055.cljs$core$IFn$_invoke$arity$2 ? ctor_98055.cljs$core$IFn$_invoke$arity$2(G__97862,G__97863) : ctor_98055.call(null,G__97862,G__97863));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056))
);

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98056,kind_98056], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056){
return (function (s,t){
var G__97864 = sicmutils.series.impl.div(cljs.core.seq(s),cljs.core.seq(t));
var G__97865 = null;
return (ctor_98055.cljs$core$IFn$_invoke$arity$2 ? ctor_98055.cljs$core$IFn$_invoke$arity$2(G__97864,G__97865) : ctor_98055.call(null,G__97864,G__97865));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056))
);

sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_98056], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056){
return (function (c,s){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056))
);

sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98056,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056){
return (function (s,c){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056))
);

sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98056,kind_98056], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056){
return (function (s,t){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(s,t);
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056))
);

sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_98056], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056){
return (function (c,s){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056))
);

sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98056,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056){
return (function (s,c){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056))
);

sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98056,kind_98056], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056){
return (function (s,t){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(t,s);
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056))
);

sicmutils.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98056], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056){
return (function (s){
var G__97866 = sicmutils.series.impl.sqrt(cljs.core.seq(s));
var G__97867 = cljs.core.meta(s);
return (ctor_98055.cljs$core$IFn$_invoke$arity$2 ? ctor_98055.cljs$core$IFn$_invoke$arity$2(G__97866,G__97867) : ctor_98055.call(null,G__97866,G__97867));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056))
);

sicmutils.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98056], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056){
return (function (s){
return sicmutils.series.fmap(sicmutils.generic.simplify,s);
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97807_98054,ctor_98055,kind_98056))
);


var G__98071 = seq__97698_98049;
var G__98072 = chunk__97699_98050;
var G__98073 = count__97700_98051;
var G__98074 = (i__97701_98052 + (1));
seq__97698_98049 = G__98071;
chunk__97699_98050 = G__98072;
count__97700_98051 = G__98073;
i__97701_98052 = G__98074;
continue;
} else {
var temp__5753__auto___98075 = cljs.core.seq(seq__97698_98049);
if(temp__5753__auto___98075){
var seq__97698_98076__$1 = temp__5753__auto___98075;
if(cljs.core.chunked_seq_QMARK_(seq__97698_98076__$1)){
var c__4679__auto___98077 = cljs.core.chunk_first(seq__97698_98076__$1);
var G__98078 = cljs.core.chunk_rest(seq__97698_98076__$1);
var G__98079 = c__4679__auto___98077;
var G__98080 = cljs.core.count(c__4679__auto___98077);
var G__98081 = (0);
seq__97698_98049 = G__98078;
chunk__97699_98050 = G__98079;
count__97700_98051 = G__98080;
i__97701_98052 = G__98081;
continue;
} else {
var vec__97875_98082 = cljs.core.first(seq__97698_98076__$1);
var ctor_98083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97875_98082,(0),null);
var kind_98084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97875_98082,(1),null);
sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98084,kind_98084], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075){
return (function (s,t){
var G__97878 = sicmutils.series.impl.seq_COLON__PLUS_(cljs.core.seq(s),cljs.core.seq(t));
var G__97879 = null;
return (ctor_98083.cljs$core$IFn$_invoke$arity$2 ? ctor_98083.cljs$core$IFn$_invoke$arity$2(G__97878,G__97879) : ctor_98083.call(null,G__97878,G__97879));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075))
);

sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_98084], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075){
return (function (c,s){
var G__97880 = sicmutils.series.impl.c_PLUS_seq(c,cljs.core.seq(s));
var G__97881 = cljs.core.meta(s);
return (ctor_98083.cljs$core$IFn$_invoke$arity$2 ? ctor_98083.cljs$core$IFn$_invoke$arity$2(G__97880,G__97881) : ctor_98083.call(null,G__97880,G__97881));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075))
);

sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98084,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075){
return (function (s,c){
var G__97882 = sicmutils.series.impl.seq_PLUS_c(cljs.core.seq(s),c);
var G__97883 = cljs.core.meta(s);
return (ctor_98083.cljs$core$IFn$_invoke$arity$2 ? ctor_98083.cljs$core$IFn$_invoke$arity$2(G__97882,G__97883) : ctor_98083.call(null,G__97882,G__97883));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075))
);

sicmutils.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98084], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075){
return (function (s){
var G__97884 = sicmutils.series.impl.negate(cljs.core.seq(s));
var G__97885 = cljs.core.meta(s);
return (ctor_98083.cljs$core$IFn$_invoke$arity$2 ? ctor_98083.cljs$core$IFn$_invoke$arity$2(G__97884,G__97885) : ctor_98083.call(null,G__97884,G__97885));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075))
);

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98084,kind_98084], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075){
return (function (s,t){
var G__97886 = sicmutils.series.impl.seq_COLON__(cljs.core.seq(s),cljs.core.seq(t));
var G__97887 = null;
return (ctor_98083.cljs$core$IFn$_invoke$arity$2 ? ctor_98083.cljs$core$IFn$_invoke$arity$2(G__97886,G__97887) : ctor_98083.call(null,G__97886,G__97887));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075))
);

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_98084], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075){
return (function (c,s){
var G__97888 = sicmutils.series.impl.c_seq(c,cljs.core.seq(s));
var G__97889 = cljs.core.meta(s);
return (ctor_98083.cljs$core$IFn$_invoke$arity$2 ? ctor_98083.cljs$core$IFn$_invoke$arity$2(G__97888,G__97889) : ctor_98083.call(null,G__97888,G__97889));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075))
);

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98084,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075){
return (function (s,c){
var G__97890 = sicmutils.series.impl.seq_c(cljs.core.seq(s),c);
var G__97891 = cljs.core.meta(s);
return (ctor_98083.cljs$core$IFn$_invoke$arity$2 ? ctor_98083.cljs$core$IFn$_invoke$arity$2(G__97890,G__97891) : ctor_98083.call(null,G__97890,G__97891));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075))
);

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98084,kind_98084], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075){
return (function (s,t){
var G__97893 = sicmutils.series.impl.seq_COLON__STAR_(cljs.core.seq(s),cljs.core.seq(t));
var G__97894 = null;
return (ctor_98083.cljs$core$IFn$_invoke$arity$2 ? ctor_98083.cljs$core$IFn$_invoke$arity$2(G__97893,G__97894) : ctor_98083.call(null,G__97893,G__97894));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075))
);

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_98084], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075){
return (function (c,s){
var G__97897 = sicmutils.series.impl.c_STAR_seq(c,cljs.core.seq(s));
var G__97898 = cljs.core.meta(s);
return (ctor_98083.cljs$core$IFn$_invoke$arity$2 ? ctor_98083.cljs$core$IFn$_invoke$arity$2(G__97897,G__97898) : ctor_98083.call(null,G__97897,G__97898));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075))
);

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98084,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075){
return (function (s,c){
var G__97899 = sicmutils.series.impl.seq_STAR_c(cljs.core.seq(s),c);
var G__97900 = cljs.core.meta(s);
return (ctor_98083.cljs$core$IFn$_invoke$arity$2 ? ctor_98083.cljs$core$IFn$_invoke$arity$2(G__97899,G__97900) : ctor_98083.call(null,G__97899,G__97900));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075))
);

sicmutils.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98084], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075){
return (function (s){
var xs = cljs.core.seq(s);
var G__97901 = sicmutils.series.impl.seq_COLON__STAR_(xs,xs);
var G__97902 = cljs.core.meta(s);
return (ctor_98083.cljs$core$IFn$_invoke$arity$2 ? ctor_98083.cljs$core$IFn$_invoke$arity$2(G__97901,G__97902) : ctor_98083.call(null,G__97901,G__97902));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075))
);

sicmutils.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98084], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075){
return (function (s){
var xs = cljs.core.seq(s);
var G__97904 = sicmutils.series.impl.seq_COLON__STAR_(sicmutils.series.impl.seq_COLON__STAR_(xs,xs),xs);
var G__97905 = cljs.core.meta(s);
return (ctor_98083.cljs$core$IFn$_invoke$arity$2 ? ctor_98083.cljs$core$IFn$_invoke$arity$2(G__97904,G__97905) : ctor_98083.call(null,G__97904,G__97905));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075))
);

sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98084,new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075){
return (function (s,e){
var G__97907 = sicmutils.series.impl.expt(cljs.core.seq(s),e);
var G__97908 = cljs.core.meta(s);
return (ctor_98083.cljs$core$IFn$_invoke$arity$2 ? ctor_98083.cljs$core$IFn$_invoke$arity$2(G__97907,G__97908) : ctor_98083.call(null,G__97907,G__97908));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075))
);

sicmutils.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98084], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075){
return (function (s){
var G__97910 = sicmutils.series.impl.invert(cljs.core.seq(s));
var G__97911 = cljs.core.meta(s);
return (ctor_98083.cljs$core$IFn$_invoke$arity$2 ? ctor_98083.cljs$core$IFn$_invoke$arity$2(G__97910,G__97911) : ctor_98083.call(null,G__97910,G__97911));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075))
);

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_98084], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075){
return (function (c,s){
var G__97912 = sicmutils.series.impl.c_div_seq(c,cljs.core.seq(s));
var G__97913 = cljs.core.meta(s);
return (ctor_98083.cljs$core$IFn$_invoke$arity$2 ? ctor_98083.cljs$core$IFn$_invoke$arity$2(G__97912,G__97913) : ctor_98083.call(null,G__97912,G__97913));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075))
);

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98084,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075){
return (function (s,c){
var G__97914 = sicmutils.series.impl.seq_div_c(cljs.core.seq(s),c);
var G__97915 = cljs.core.meta(s);
return (ctor_98083.cljs$core$IFn$_invoke$arity$2 ? ctor_98083.cljs$core$IFn$_invoke$arity$2(G__97914,G__97915) : ctor_98083.call(null,G__97914,G__97915));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075))
);

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98084,kind_98084], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075){
return (function (s,t){
var G__97916 = sicmutils.series.impl.div(cljs.core.seq(s),cljs.core.seq(t));
var G__97917 = null;
return (ctor_98083.cljs$core$IFn$_invoke$arity$2 ? ctor_98083.cljs$core$IFn$_invoke$arity$2(G__97916,G__97917) : ctor_98083.call(null,G__97916,G__97917));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075))
);

sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_98084], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075){
return (function (c,s){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075))
);

sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98084,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075){
return (function (s,c){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075))
);

sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98084,kind_98084], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075){
return (function (s,t){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(s,t);
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075))
);

sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_98084], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075){
return (function (c,s){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075))
);

sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98084,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075){
return (function (s,c){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075))
);

sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98084,kind_98084], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075){
return (function (s,t){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(t,s);
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075))
);

sicmutils.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98084], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075){
return (function (s){
var G__97918 = sicmutils.series.impl.sqrt(cljs.core.seq(s));
var G__97919 = cljs.core.meta(s);
return (ctor_98083.cljs$core$IFn$_invoke$arity$2 ? ctor_98083.cljs$core$IFn$_invoke$arity$2(G__97918,G__97919) : ctor_98083.call(null,G__97918,G__97919));
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075))
);

sicmutils.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98084], null),((function (seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075){
return (function (s){
return sicmutils.series.fmap(sicmutils.generic.simplify,s);
});})(seq__97698_98049,chunk__97699_98050,count__97700_98051,i__97701_98052,vec__97875_98082,ctor_98083,kind_98084,seq__97698_98076__$1,temp__5753__auto___98075))
);


var G__98093 = cljs.core.next(seq__97698_98076__$1);
var G__98094 = null;
var G__98095 = (0);
var G__98096 = (0);
seq__97698_98049 = G__98093;
chunk__97699_98050 = G__98094;
count__97700_98051 = G__98095;
i__97701_98052 = G__98096;
continue;
}
} else {
}
}
break;
}
sicmutils.generic.exp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","power-series","sicmutils.series/power-series",-2106733657)], null),(function (s){
return sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.compose(sicmutils.series.impl.expx,cljs.core.seq(s)),cljs.core.meta(s));
}));
sicmutils.generic.cos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","power-series","sicmutils.series/power-series",-2106733657)], null),(function (s){
return sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.compose(sicmutils.series.impl.cosx,cljs.core.seq(s)),cljs.core.meta(s));
}));
sicmutils.generic.sin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","power-series","sicmutils.series/power-series",-2106733657)], null),(function (s){
return sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.compose(sicmutils.series.impl.sinx,cljs.core.seq(s)),cljs.core.meta(s));
}));
sicmutils.generic.tan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","power-series","sicmutils.series/power-series",-2106733657)], null),(function (s){
return sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.compose(sicmutils.series.impl.tanx,cljs.core.seq(s)),cljs.core.meta(s));
}));
sicmutils.generic.sec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","power-series","sicmutils.series/power-series",-2106733657)], null),(function (s){
return sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.compose(sicmutils.series.impl.secx,cljs.core.seq(s)),cljs.core.meta(s));
}));
sicmutils.generic.asin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","power-series","sicmutils.series/power-series",-2106733657)], null),(function (s){
return sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.compose(sicmutils.series.impl.asinx,cljs.core.seq(s)),cljs.core.meta(s));
}));
sicmutils.generic.acos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","power-series","sicmutils.series/power-series",-2106733657)], null),(function (s){
return sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.compose(sicmutils.series.impl.acosx,cljs.core.seq(s)),cljs.core.meta(s));
}));
sicmutils.generic.atan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","power-series","sicmutils.series/power-series",-2106733657)], null),(function (s){
return sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.compose(sicmutils.series.impl.atanx,cljs.core.seq(s)),cljs.core.meta(s));
}));
sicmutils.generic.acot.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","power-series","sicmutils.series/power-series",-2106733657)], null),(function (s){
return sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.compose(sicmutils.series.impl.acotx,cljs.core.seq(s)),cljs.core.meta(s));
}));
sicmutils.generic.cosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","power-series","sicmutils.series/power-series",-2106733657)], null),(function (s){
return sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.compose(sicmutils.series.impl.coshx,cljs.core.seq(s)),cljs.core.meta(s));
}));
sicmutils.generic.sinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","power-series","sicmutils.series/power-series",-2106733657)], null),(function (s){
return sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.compose(sicmutils.series.impl.sinhx,cljs.core.seq(s)),cljs.core.meta(s));
}));
sicmutils.generic.tanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","power-series","sicmutils.series/power-series",-2106733657)], null),(function (s){
return sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.compose(sicmutils.series.impl.tanhx,cljs.core.seq(s)),cljs.core.meta(s));
}));
sicmutils.generic.asinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","power-series","sicmutils.series/power-series",-2106733657)], null),(function (s){
return sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.compose(sicmutils.series.impl.asinhx,cljs.core.seq(s)),cljs.core.meta(s));
}));
sicmutils.generic.atanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","power-series","sicmutils.series/power-series",-2106733657)], null),(function (s){
return sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.compose(sicmutils.series.impl.atanhx,cljs.core.seq(s)),cljs.core.meta(s));
}));
sicmutils.generic.partial_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","series","sicmutils.series/series",-314976590),sicmutils.value.seqtype], null),(function (s,selectors){
return sicmutils.series.__GT_Series(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__97926_SHARP_){
return sicmutils.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(p1__97926_SHARP_,selectors);
}),s.xs),s.m);
}));
sicmutils.generic.partial_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","power-series","sicmutils.series/power-series",-2106733657),sicmutils.value.seqtype], null),(function (s,selectors){
if(cljs.core.empty_QMARK_(selectors)){
return sicmutils.series.__GT_PowerSeries(sicmutils.series.impl.deriv(s.xs),s.m);
} else {
return sicmutils.util.illegal(["Cannot yet take partial derivatives of a power series: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(selectors)].join(''));
}
}));

//# sourceMappingURL=sicmutils.series.js.map
