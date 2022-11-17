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

(sicmutils.series.Series.prototype.call = (function (unused__43952__auto__){
var self__ = this;
var self__ = this;
var G__97743 = (arguments.length - (1));
switch (G__97743) {
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

(sicmutils.series.Series.prototype.apply = (function (self__,args97707){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args97707)));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97762 = self__.xs;
var G__97763 = cljs.core.PersistentVector.EMPTY;
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97762,G__97763) : sicmutils.series.series_value.call(null,G__97762,G__97763));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97768 = self__.xs;
var G__97769 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97768,G__97769) : sicmutils.series.series_value.call(null,G__97768,G__97769));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97771 = self__.xs;
var G__97772 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97771,G__97772) : sicmutils.series.series_value.call(null,G__97771,G__97772));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97774 = self__.xs;
var G__97775 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97774,G__97775) : sicmutils.series.series_value.call(null,G__97774,G__97775));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97777 = self__.xs;
var G__97778 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97777,G__97778) : sicmutils.series.series_value.call(null,G__97777,G__97778));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97779 = self__.xs;
var G__97780 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97779,G__97780) : sicmutils.series.series_value.call(null,G__97779,G__97780));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97783 = self__.xs;
var G__97784 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97783,G__97784) : sicmutils.series.series_value.call(null,G__97783,G__97784));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97787 = self__.xs;
var G__97788 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97787,G__97788) : sicmutils.series.series_value.call(null,G__97787,G__97788));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97791 = self__.xs;
var G__97792 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97791,G__97792) : sicmutils.series.series_value.call(null,G__97791,G__97792));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97793 = self__.xs;
var G__97794 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97793,G__97794) : sicmutils.series.series_value.call(null,G__97793,G__97794));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97796 = self__.xs;
var G__97797 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97796,G__97797) : sicmutils.series.series_value.call(null,G__97796,G__97797));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97799 = self__.xs;
var G__97800 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97799,G__97800) : sicmutils.series.series_value.call(null,G__97799,G__97800));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97804 = self__.xs;
var G__97805 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97804,G__97805) : sicmutils.series.series_value.call(null,G__97804,G__97805));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97808 = self__.xs;
var G__97809 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97808,G__97809) : sicmutils.series.series_value.call(null,G__97808,G__97809));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97811 = self__.xs;
var G__97812 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97811,G__97812) : sicmutils.series.series_value.call(null,G__97811,G__97812));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97815 = self__.xs;
var G__97816 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97815,G__97816) : sicmutils.series.series_value.call(null,G__97815,G__97816));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97819 = self__.xs;
var G__97820 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97819,G__97820) : sicmutils.series.series_value.call(null,G__97819,G__97820));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97825 = self__.xs;
var G__97826 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97825,G__97826) : sicmutils.series.series_value.call(null,G__97825,G__97826));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97829 = self__.xs;
var G__97830 = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97829,G__97830) : sicmutils.series.series_value.call(null,G__97829,G__97830));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97831 = self__.xs;
var G__97832 = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97831,G__97832) : sicmutils.series.series_value.call(null,G__97831,G__97832));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97837 = self__.xs;
var G__97838 = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97837,G__97838) : sicmutils.series.series_value.call(null,G__97837,G__97838));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__97843 = self__.xs;
var G__97844 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null),rest);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__97843,G__97844) : sicmutils.series.series_value.call(null,G__97843,G__97844));
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
var G__97853 = (function (p1__97679_SHARP_){
return sicmutils.differential.replace_tag(p1__97679_SHARP_,old,new$);
});
var G__97854 = s__$1;
return (sicmutils.series.fmap.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.fmap.cljs$core$IFn$_invoke$arity$2(G__97853,G__97854) : sicmutils.series.fmap.call(null,G__97853,G__97854));
}));

(sicmutils.series.Series.prototype.sicmutils$differential$IPerturbed$extract_tangent$arity$2 = (function (s,tag){
var self__ = this;
var s__$1 = this;
var G__97856 = (function (p1__97680_SHARP_){
return sicmutils.differential.extract_tangent(p1__97680_SHARP_,tag);
});
var G__97857 = s__$1;
return (sicmutils.series.fmap.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.fmap.cljs$core$IFn$_invoke$arity$2(G__97856,G__97857) : sicmutils.series.fmap.call(null,G__97856,G__97857));
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

(sicmutils.series.PowerSeries.prototype.call = (function (unused__43952__auto__){
var self__ = this;
var self__ = this;
var G__97895 = (arguments.length - (1));
switch (G__97895) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(sicmutils.series.PowerSeries.prototype.apply = (function (self__,args97869){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args97869)));
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
var G__97900 = (function (p1__97867_SHARP_){
return sicmutils.differential.replace_tag(p1__97867_SHARP_,old,new$);
});
var G__97901 = s__$1;
return (sicmutils.series.fmap.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.fmap.cljs$core$IFn$_invoke$arity$2(G__97900,G__97901) : sicmutils.series.fmap.call(null,G__97900,G__97901));
}));

(sicmutils.series.PowerSeries.prototype.sicmutils$differential$IPerturbed$extract_tangent$arity$2 = (function (s,tag){
var self__ = this;
var s__$1 = this;
var G__97902 = (function (p1__97868_SHARP_){
return sicmutils.differential.extract_tangent(p1__97868_SHARP_,tag);
});
var G__97903 = s__$1;
return (sicmutils.series.fmap.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.fmap.cljs$core$IFn$_invoke$arity$2(G__97902,G__97903) : sicmutils.series.fmap.call(null,G__97902,G__97903));
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
var G__97920 = kind;
var G__97920__$1 = (((G__97920 instanceof cljs.core.Keyword))?G__97920.fqn:null);
switch (G__97920__$1) {
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
var len__4864__auto___98316 = arguments.length;
var i__4865__auto___98317 = (0);
while(true){
if((i__4865__auto___98317 < len__4864__auto___98316)){
args__4870__auto__.push((arguments[i__4865__auto___98317]));

var G__98320 = (i__4865__auto___98317 + (1));
i__4865__auto___98317 = G__98320;
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
(sicmutils.series.series.cljs$lang$applyTo = (function (seq97928){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq97928));
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
var len__4864__auto___98322 = arguments.length;
var i__4865__auto___98323 = (0);
while(true){
if((i__4865__auto___98323 < len__4864__auto___98322)){
args__4870__auto__.push((arguments[i__4865__auto___98323]));

var G__98324 = (i__4865__auto___98323 + (1));
i__4865__auto___98323 = G__98324;
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
(sicmutils.series.power_series.cljs$lang$applyTo = (function (seq97937){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq97937));
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
var G__97943 = arguments.length;
switch (G__97943) {
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
var G__97945 = sicmutils.series.impl.__GT_series(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
var G__97946 = null;
var fexpr__97944 = sicmutils.series.kind__GT_make(kind);
return (fexpr__97944.cljs$core$IFn$_invoke$arity$2 ? fexpr__97944.cljs$core$IFn$_invoke$arity$2(G__97945,G__97946) : fexpr__97944.call(null,G__97945,G__97946));
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
var G__97951 = arguments.length;
switch (G__97951) {
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
var G__97955 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var G__97956 = null;
var fexpr__97954 = sicmutils.series.kind__GT_make(kind);
return (fexpr__97954.cljs$core$IFn$_invoke$arity$2 ? fexpr__97954.cljs$core$IFn$_invoke$arity$2(G__97955,G__97956) : fexpr__97954.call(null,G__97955,G__97956));
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
var G__97963 = arguments.length;
switch (G__97963) {
case 1:
return sicmutils.series.function__GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___98339 = arguments.length;
var i__4865__auto___98340 = (0);
while(true){
if((i__4865__auto___98340 < len__4864__auto___98339)){
args_arr__4885__auto__.push((arguments[i__4865__auto___98340]));

var G__98343 = (i__4865__auto___98340 + (1));
i__4865__auto___98340 = G__98343;
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
(sicmutils.series.function__GT_.cljs$lang$applyTo = (function (seq97961){
var G__97962 = cljs.core.first(seq97961);
var seq97961__$1 = cljs.core.next(seq97961);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__97962,seq97961__$1);
}));

(sicmutils.series.function__GT_.cljs$lang$maxFixedArity = (1));

/**
 * Evaluates the power series, and converts it back down to a normal series.
 */
sicmutils.series.power_series_value = (function sicmutils$series$power_series_value(f,x){
var one = sicmutils.value.one_like(x);
var powers = cljs.core.iterate((function (p1__97965_SHARP_){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(x,p1__97965_SHARP_);
}),one);
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(sicmutils.generic._STAR_,f,powers);
});
sicmutils.series.series_value = (function sicmutils$series$series_value(f,xs){
var collect = (function sicmutils$series$series_value_$_collect(f__$1){
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(f__$1),xs);
if(sicmutils.series.series_QMARK_(result)){
return (new cljs.core.LazySeq(null,(function (){
var vec__97970 = result;
var seq__97971 = cljs.core.seq(vec__97970);
var first__97972 = cljs.core.first(seq__97971);
var seq__97971__$1 = cljs.core.next(seq__97971);
var r = first__97972;
var r_tail = seq__97971__$1;
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
var G__97975 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,s);
var G__97976 = cljs.core.meta(s);
var fexpr__97974 = sicmutils.series._make(s);
return (fexpr__97974.cljs$core$IFn$_invoke$arity$2 ? fexpr__97974.cljs$core$IFn$_invoke$arity$2(G__97975,G__97976) : fexpr__97974.call(null,G__97975,G__97976));
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
var G__97978 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.cons,s,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(zeros)));
var G__97979 = cljs.core.meta(s);
var fexpr__97977 = sicmutils.series._make(s);
return (fexpr__97977.cljs$core$IFn$_invoke$arity$2 ? fexpr__97977.cljs$core$IFn$_invoke$arity$2(G__97978,G__97979) : fexpr__97977.call(null,G__97978,G__97979));
}
});
/**
 * Returns a series (of the same type as the input) of partial sums of the terms
 *   in the supplied series `s`.
 */
sicmutils.series.partial_sums = (function sicmutils$series$partial_sums(s){
var G__97983 = cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_,s);
var G__97984 = cljs.core.meta(s);
var fexpr__97982 = sicmutils.series._make(s);
return (fexpr__97982.cljs$core$IFn$_invoke$arity$2 ? fexpr__97982.cljs$core$IFn$_invoke$arity$2(G__97983,G__97984) : fexpr__97982.call(null,G__97983,G__97984));
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
var G__97987 = arguments.length;
switch (G__97987) {
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
return sicmutils.series.fmap((function (p1__97988_SHARP_){
return (sicmutils.series.arg_scale.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.arg_scale.cljs$core$IFn$_invoke$arity$2(p1__97988_SHARP_,factors) : sicmutils.series.arg_scale.call(null,p1__97988_SHARP_,factors));
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
return sicmutils.series.fmap((function (p1__97989_SHARP_){
return (sicmutils.series.arg_shift.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.arg_shift.cljs$core$IFn$_invoke$arity$2(p1__97989_SHARP_,shifts) : sicmutils.series.arg_shift.call(null,p1__97989_SHARP_,shifts));
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
var seq__97999_98367 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.series.__GT_Series,new cljs.core.Keyword("sicmutils.series","series","sicmutils.series/series",-314976590)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.series.__GT_PowerSeries,new cljs.core.Keyword("sicmutils.series","power-series","sicmutils.series/power-series",-2106733657)], null)], null));
var chunk__98000_98368 = null;
var count__98001_98369 = (0);
var i__98002_98370 = (0);
while(true){
if((i__98002_98370 < count__98001_98369)){
var vec__98118_98372 = chunk__98000_98368.cljs$core$IIndexed$_nth$arity$2(null,i__98002_98370);
var ctor_98373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98118_98372,(0),null);
var kind_98374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98118_98372,(1),null);
sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98374,kind_98374], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374){
return (function (s,t){
var G__98122 = sicmutils.series.impl.seq_COLON__PLUS_(cljs.core.seq(s),cljs.core.seq(t));
var G__98123 = null;
return (ctor_98373.cljs$core$IFn$_invoke$arity$2 ? ctor_98373.cljs$core$IFn$_invoke$arity$2(G__98122,G__98123) : ctor_98373.call(null,G__98122,G__98123));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374))
);

sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_98374], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374){
return (function (c,s){
var G__98124 = sicmutils.series.impl.c_PLUS_seq(c,cljs.core.seq(s));
var G__98125 = cljs.core.meta(s);
return (ctor_98373.cljs$core$IFn$_invoke$arity$2 ? ctor_98373.cljs$core$IFn$_invoke$arity$2(G__98124,G__98125) : ctor_98373.call(null,G__98124,G__98125));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374))
);

sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98374,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374){
return (function (s,c){
var G__98126 = sicmutils.series.impl.seq_PLUS_c(cljs.core.seq(s),c);
var G__98127 = cljs.core.meta(s);
return (ctor_98373.cljs$core$IFn$_invoke$arity$2 ? ctor_98373.cljs$core$IFn$_invoke$arity$2(G__98126,G__98127) : ctor_98373.call(null,G__98126,G__98127));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374))
);

sicmutils.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98374], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374){
return (function (s){
var G__98128 = sicmutils.series.impl.negate(cljs.core.seq(s));
var G__98129 = cljs.core.meta(s);
return (ctor_98373.cljs$core$IFn$_invoke$arity$2 ? ctor_98373.cljs$core$IFn$_invoke$arity$2(G__98128,G__98129) : ctor_98373.call(null,G__98128,G__98129));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374))
);

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98374,kind_98374], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374){
return (function (s,t){
var G__98130 = sicmutils.series.impl.seq_COLON__(cljs.core.seq(s),cljs.core.seq(t));
var G__98131 = null;
return (ctor_98373.cljs$core$IFn$_invoke$arity$2 ? ctor_98373.cljs$core$IFn$_invoke$arity$2(G__98130,G__98131) : ctor_98373.call(null,G__98130,G__98131));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374))
);

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_98374], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374){
return (function (c,s){
var G__98132 = sicmutils.series.impl.c_seq(c,cljs.core.seq(s));
var G__98133 = cljs.core.meta(s);
return (ctor_98373.cljs$core$IFn$_invoke$arity$2 ? ctor_98373.cljs$core$IFn$_invoke$arity$2(G__98132,G__98133) : ctor_98373.call(null,G__98132,G__98133));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374))
);

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98374,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374){
return (function (s,c){
var G__98134 = sicmutils.series.impl.seq_c(cljs.core.seq(s),c);
var G__98135 = cljs.core.meta(s);
return (ctor_98373.cljs$core$IFn$_invoke$arity$2 ? ctor_98373.cljs$core$IFn$_invoke$arity$2(G__98134,G__98135) : ctor_98373.call(null,G__98134,G__98135));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374))
);

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98374,kind_98374], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374){
return (function (s,t){
var G__98136 = sicmutils.series.impl.seq_COLON__STAR_(cljs.core.seq(s),cljs.core.seq(t));
var G__98137 = null;
return (ctor_98373.cljs$core$IFn$_invoke$arity$2 ? ctor_98373.cljs$core$IFn$_invoke$arity$2(G__98136,G__98137) : ctor_98373.call(null,G__98136,G__98137));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374))
);

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_98374], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374){
return (function (c,s){
var G__98138 = sicmutils.series.impl.c_STAR_seq(c,cljs.core.seq(s));
var G__98139 = cljs.core.meta(s);
return (ctor_98373.cljs$core$IFn$_invoke$arity$2 ? ctor_98373.cljs$core$IFn$_invoke$arity$2(G__98138,G__98139) : ctor_98373.call(null,G__98138,G__98139));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374))
);

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98374,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374){
return (function (s,c){
var G__98141 = sicmutils.series.impl.seq_STAR_c(cljs.core.seq(s),c);
var G__98142 = cljs.core.meta(s);
return (ctor_98373.cljs$core$IFn$_invoke$arity$2 ? ctor_98373.cljs$core$IFn$_invoke$arity$2(G__98141,G__98142) : ctor_98373.call(null,G__98141,G__98142));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374))
);

sicmutils.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98374], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374){
return (function (s){
var xs = cljs.core.seq(s);
var G__98145 = sicmutils.series.impl.seq_COLON__STAR_(xs,xs);
var G__98146 = cljs.core.meta(s);
return (ctor_98373.cljs$core$IFn$_invoke$arity$2 ? ctor_98373.cljs$core$IFn$_invoke$arity$2(G__98145,G__98146) : ctor_98373.call(null,G__98145,G__98146));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374))
);

sicmutils.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98374], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374){
return (function (s){
var xs = cljs.core.seq(s);
var G__98149 = sicmutils.series.impl.seq_COLON__STAR_(sicmutils.series.impl.seq_COLON__STAR_(xs,xs),xs);
var G__98150 = cljs.core.meta(s);
return (ctor_98373.cljs$core$IFn$_invoke$arity$2 ? ctor_98373.cljs$core$IFn$_invoke$arity$2(G__98149,G__98150) : ctor_98373.call(null,G__98149,G__98150));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374))
);

sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98374,new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374){
return (function (s,e){
var G__98153 = sicmutils.series.impl.expt(cljs.core.seq(s),e);
var G__98154 = cljs.core.meta(s);
return (ctor_98373.cljs$core$IFn$_invoke$arity$2 ? ctor_98373.cljs$core$IFn$_invoke$arity$2(G__98153,G__98154) : ctor_98373.call(null,G__98153,G__98154));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374))
);

sicmutils.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98374], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374){
return (function (s){
var G__98155 = sicmutils.series.impl.invert(cljs.core.seq(s));
var G__98156 = cljs.core.meta(s);
return (ctor_98373.cljs$core$IFn$_invoke$arity$2 ? ctor_98373.cljs$core$IFn$_invoke$arity$2(G__98155,G__98156) : ctor_98373.call(null,G__98155,G__98156));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374))
);

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_98374], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374){
return (function (c,s){
var G__98157 = sicmutils.series.impl.c_div_seq(c,cljs.core.seq(s));
var G__98158 = cljs.core.meta(s);
return (ctor_98373.cljs$core$IFn$_invoke$arity$2 ? ctor_98373.cljs$core$IFn$_invoke$arity$2(G__98157,G__98158) : ctor_98373.call(null,G__98157,G__98158));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374))
);

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98374,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374){
return (function (s,c){
var G__98159 = sicmutils.series.impl.seq_div_c(cljs.core.seq(s),c);
var G__98160 = cljs.core.meta(s);
return (ctor_98373.cljs$core$IFn$_invoke$arity$2 ? ctor_98373.cljs$core$IFn$_invoke$arity$2(G__98159,G__98160) : ctor_98373.call(null,G__98159,G__98160));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374))
);

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98374,kind_98374], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374){
return (function (s,t){
var G__98161 = sicmutils.series.impl.div(cljs.core.seq(s),cljs.core.seq(t));
var G__98162 = null;
return (ctor_98373.cljs$core$IFn$_invoke$arity$2 ? ctor_98373.cljs$core$IFn$_invoke$arity$2(G__98161,G__98162) : ctor_98373.call(null,G__98161,G__98162));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374))
);

sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_98374], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374){
return (function (c,s){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374))
);

sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98374,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374){
return (function (s,c){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374))
);

sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98374,kind_98374], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374){
return (function (s,t){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(s,t);
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374))
);

sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_98374], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374){
return (function (c,s){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374))
);

sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98374,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374){
return (function (s,c){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374))
);

sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98374,kind_98374], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374){
return (function (s,t){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(t,s);
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374))
);

sicmutils.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98374], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374){
return (function (s){
var G__98165 = sicmutils.series.impl.sqrt(cljs.core.seq(s));
var G__98166 = cljs.core.meta(s);
return (ctor_98373.cljs$core$IFn$_invoke$arity$2 ? ctor_98373.cljs$core$IFn$_invoke$arity$2(G__98165,G__98166) : ctor_98373.call(null,G__98165,G__98166));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374))
);

sicmutils.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98374], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374){
return (function (s){
return sicmutils.series.fmap(sicmutils.generic.simplify,s);
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98118_98372,ctor_98373,kind_98374))
);


var G__98402 = seq__97999_98367;
var G__98403 = chunk__98000_98368;
var G__98404 = count__98001_98369;
var G__98405 = (i__98002_98370 + (1));
seq__97999_98367 = G__98402;
chunk__98000_98368 = G__98403;
count__98001_98369 = G__98404;
i__98002_98370 = G__98405;
continue;
} else {
var temp__5753__auto___98406 = cljs.core.seq(seq__97999_98367);
if(temp__5753__auto___98406){
var seq__97999_98407__$1 = temp__5753__auto___98406;
if(cljs.core.chunked_seq_QMARK_(seq__97999_98407__$1)){
var c__4679__auto___98408 = cljs.core.chunk_first(seq__97999_98407__$1);
var G__98409 = cljs.core.chunk_rest(seq__97999_98407__$1);
var G__98410 = c__4679__auto___98408;
var G__98411 = cljs.core.count(c__4679__auto___98408);
var G__98412 = (0);
seq__97999_98367 = G__98409;
chunk__98000_98368 = G__98410;
count__98001_98369 = G__98411;
i__98002_98370 = G__98412;
continue;
} else {
var vec__98167_98414 = cljs.core.first(seq__97999_98407__$1);
var ctor_98415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98167_98414,(0),null);
var kind_98416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98167_98414,(1),null);
sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98416,kind_98416], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406){
return (function (s,t){
var G__98172 = sicmutils.series.impl.seq_COLON__PLUS_(cljs.core.seq(s),cljs.core.seq(t));
var G__98173 = null;
return (ctor_98415.cljs$core$IFn$_invoke$arity$2 ? ctor_98415.cljs$core$IFn$_invoke$arity$2(G__98172,G__98173) : ctor_98415.call(null,G__98172,G__98173));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406))
);

sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_98416], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406){
return (function (c,s){
var G__98177 = sicmutils.series.impl.c_PLUS_seq(c,cljs.core.seq(s));
var G__98178 = cljs.core.meta(s);
return (ctor_98415.cljs$core$IFn$_invoke$arity$2 ? ctor_98415.cljs$core$IFn$_invoke$arity$2(G__98177,G__98178) : ctor_98415.call(null,G__98177,G__98178));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406))
);

sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98416,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406){
return (function (s,c){
var G__98179 = sicmutils.series.impl.seq_PLUS_c(cljs.core.seq(s),c);
var G__98180 = cljs.core.meta(s);
return (ctor_98415.cljs$core$IFn$_invoke$arity$2 ? ctor_98415.cljs$core$IFn$_invoke$arity$2(G__98179,G__98180) : ctor_98415.call(null,G__98179,G__98180));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406))
);

sicmutils.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98416], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406){
return (function (s){
var G__98181 = sicmutils.series.impl.negate(cljs.core.seq(s));
var G__98182 = cljs.core.meta(s);
return (ctor_98415.cljs$core$IFn$_invoke$arity$2 ? ctor_98415.cljs$core$IFn$_invoke$arity$2(G__98181,G__98182) : ctor_98415.call(null,G__98181,G__98182));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406))
);

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98416,kind_98416], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406){
return (function (s,t){
var G__98183 = sicmutils.series.impl.seq_COLON__(cljs.core.seq(s),cljs.core.seq(t));
var G__98184 = null;
return (ctor_98415.cljs$core$IFn$_invoke$arity$2 ? ctor_98415.cljs$core$IFn$_invoke$arity$2(G__98183,G__98184) : ctor_98415.call(null,G__98183,G__98184));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406))
);

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_98416], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406){
return (function (c,s){
var G__98185 = sicmutils.series.impl.c_seq(c,cljs.core.seq(s));
var G__98186 = cljs.core.meta(s);
return (ctor_98415.cljs$core$IFn$_invoke$arity$2 ? ctor_98415.cljs$core$IFn$_invoke$arity$2(G__98185,G__98186) : ctor_98415.call(null,G__98185,G__98186));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406))
);

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98416,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406){
return (function (s,c){
var G__98189 = sicmutils.series.impl.seq_c(cljs.core.seq(s),c);
var G__98190 = cljs.core.meta(s);
return (ctor_98415.cljs$core$IFn$_invoke$arity$2 ? ctor_98415.cljs$core$IFn$_invoke$arity$2(G__98189,G__98190) : ctor_98415.call(null,G__98189,G__98190));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406))
);

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98416,kind_98416], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406){
return (function (s,t){
var G__98192 = sicmutils.series.impl.seq_COLON__STAR_(cljs.core.seq(s),cljs.core.seq(t));
var G__98193 = null;
return (ctor_98415.cljs$core$IFn$_invoke$arity$2 ? ctor_98415.cljs$core$IFn$_invoke$arity$2(G__98192,G__98193) : ctor_98415.call(null,G__98192,G__98193));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406))
);

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_98416], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406){
return (function (c,s){
var G__98197 = sicmutils.series.impl.c_STAR_seq(c,cljs.core.seq(s));
var G__98198 = cljs.core.meta(s);
return (ctor_98415.cljs$core$IFn$_invoke$arity$2 ? ctor_98415.cljs$core$IFn$_invoke$arity$2(G__98197,G__98198) : ctor_98415.call(null,G__98197,G__98198));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406))
);

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98416,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406){
return (function (s,c){
var G__98199 = sicmutils.series.impl.seq_STAR_c(cljs.core.seq(s),c);
var G__98200 = cljs.core.meta(s);
return (ctor_98415.cljs$core$IFn$_invoke$arity$2 ? ctor_98415.cljs$core$IFn$_invoke$arity$2(G__98199,G__98200) : ctor_98415.call(null,G__98199,G__98200));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406))
);

sicmutils.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98416], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406){
return (function (s){
var xs = cljs.core.seq(s);
var G__98201 = sicmutils.series.impl.seq_COLON__STAR_(xs,xs);
var G__98202 = cljs.core.meta(s);
return (ctor_98415.cljs$core$IFn$_invoke$arity$2 ? ctor_98415.cljs$core$IFn$_invoke$arity$2(G__98201,G__98202) : ctor_98415.call(null,G__98201,G__98202));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406))
);

sicmutils.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98416], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406){
return (function (s){
var xs = cljs.core.seq(s);
var G__98203 = sicmutils.series.impl.seq_COLON__STAR_(sicmutils.series.impl.seq_COLON__STAR_(xs,xs),xs);
var G__98204 = cljs.core.meta(s);
return (ctor_98415.cljs$core$IFn$_invoke$arity$2 ? ctor_98415.cljs$core$IFn$_invoke$arity$2(G__98203,G__98204) : ctor_98415.call(null,G__98203,G__98204));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406))
);

sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98416,new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406){
return (function (s,e){
var G__98206 = sicmutils.series.impl.expt(cljs.core.seq(s),e);
var G__98207 = cljs.core.meta(s);
return (ctor_98415.cljs$core$IFn$_invoke$arity$2 ? ctor_98415.cljs$core$IFn$_invoke$arity$2(G__98206,G__98207) : ctor_98415.call(null,G__98206,G__98207));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406))
);

sicmutils.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98416], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406){
return (function (s){
var G__98210 = sicmutils.series.impl.invert(cljs.core.seq(s));
var G__98211 = cljs.core.meta(s);
return (ctor_98415.cljs$core$IFn$_invoke$arity$2 ? ctor_98415.cljs$core$IFn$_invoke$arity$2(G__98210,G__98211) : ctor_98415.call(null,G__98210,G__98211));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406))
);

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_98416], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406){
return (function (c,s){
var G__98216 = sicmutils.series.impl.c_div_seq(c,cljs.core.seq(s));
var G__98217 = cljs.core.meta(s);
return (ctor_98415.cljs$core$IFn$_invoke$arity$2 ? ctor_98415.cljs$core$IFn$_invoke$arity$2(G__98216,G__98217) : ctor_98415.call(null,G__98216,G__98217));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406))
);

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98416,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406){
return (function (s,c){
var G__98218 = sicmutils.series.impl.seq_div_c(cljs.core.seq(s),c);
var G__98219 = cljs.core.meta(s);
return (ctor_98415.cljs$core$IFn$_invoke$arity$2 ? ctor_98415.cljs$core$IFn$_invoke$arity$2(G__98218,G__98219) : ctor_98415.call(null,G__98218,G__98219));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406))
);

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98416,kind_98416], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406){
return (function (s,t){
var G__98222 = sicmutils.series.impl.div(cljs.core.seq(s),cljs.core.seq(t));
var G__98223 = null;
return (ctor_98415.cljs$core$IFn$_invoke$arity$2 ? ctor_98415.cljs$core$IFn$_invoke$arity$2(G__98222,G__98223) : ctor_98415.call(null,G__98222,G__98223));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406))
);

sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_98416], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406){
return (function (c,s){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406))
);

sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98416,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406){
return (function (s,c){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406))
);

sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98416,kind_98416], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406){
return (function (s,t){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(s,t);
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406))
);

sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_98416], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406){
return (function (c,s){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406))
);

sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98416,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406){
return (function (s,c){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406))
);

sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98416,kind_98416], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406){
return (function (s,t){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(t,s);
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406))
);

sicmutils.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98416], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406){
return (function (s){
var G__98226 = sicmutils.series.impl.sqrt(cljs.core.seq(s));
var G__98227 = cljs.core.meta(s);
return (ctor_98415.cljs$core$IFn$_invoke$arity$2 ? ctor_98415.cljs$core$IFn$_invoke$arity$2(G__98226,G__98227) : ctor_98415.call(null,G__98226,G__98227));
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406))
);

sicmutils.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_98416], null),((function (seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406){
return (function (s){
return sicmutils.series.fmap(sicmutils.generic.simplify,s);
});})(seq__97999_98367,chunk__98000_98368,count__98001_98369,i__98002_98370,vec__98167_98414,ctor_98415,kind_98416,seq__97999_98407__$1,temp__5753__auto___98406))
);


var G__98440 = cljs.core.next(seq__97999_98407__$1);
var G__98441 = null;
var G__98442 = (0);
var G__98443 = (0);
seq__97999_98367 = G__98440;
chunk__98000_98368 = G__98441;
count__98001_98369 = G__98442;
i__98002_98370 = G__98443;
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
return sicmutils.series.__GT_Series(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__98242_SHARP_){
return sicmutils.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(p1__98242_SHARP_,selectors);
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
