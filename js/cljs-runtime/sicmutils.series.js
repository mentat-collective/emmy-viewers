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

(sicmutils.series.Series.prototype.call = (function (unused__20572__auto__){
var self__ = this;
var self__ = this;
var G__84273 = (arguments.length - (1));
switch (G__84273) {
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

(sicmutils.series.Series.prototype.apply = (function (self__,args84267){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args84267)));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__84296 = self__.xs;
var G__84297 = cljs.core.PersistentVector.EMPTY;
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__84296,G__84297) : sicmutils.series.series_value.call(null,G__84296,G__84297));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__84299 = self__.xs;
var G__84300 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__84299,G__84300) : sicmutils.series.series_value.call(null,G__84299,G__84300));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__84303 = self__.xs;
var G__84304 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__84303,G__84304) : sicmutils.series.series_value.call(null,G__84303,G__84304));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__84308 = self__.xs;
var G__84309 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__84308,G__84309) : sicmutils.series.series_value.call(null,G__84308,G__84309));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__84310 = self__.xs;
var G__84311 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__84310,G__84311) : sicmutils.series.series_value.call(null,G__84310,G__84311));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__84313 = self__.xs;
var G__84314 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__84313,G__84314) : sicmutils.series.series_value.call(null,G__84313,G__84314));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__84315 = self__.xs;
var G__84316 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__84315,G__84316) : sicmutils.series.series_value.call(null,G__84315,G__84316));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__84318 = self__.xs;
var G__84319 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__84318,G__84319) : sicmutils.series.series_value.call(null,G__84318,G__84319));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__84326 = self__.xs;
var G__84327 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__84326,G__84327) : sicmutils.series.series_value.call(null,G__84326,G__84327));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__84329 = self__.xs;
var G__84330 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__84329,G__84330) : sicmutils.series.series_value.call(null,G__84329,G__84330));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__84333 = self__.xs;
var G__84334 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__84333,G__84334) : sicmutils.series.series_value.call(null,G__84333,G__84334));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__84338 = self__.xs;
var G__84339 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__84338,G__84339) : sicmutils.series.series_value.call(null,G__84338,G__84339));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__84346 = self__.xs;
var G__84347 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__84346,G__84347) : sicmutils.series.series_value.call(null,G__84346,G__84347));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__84350 = self__.xs;
var G__84351 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__84350,G__84351) : sicmutils.series.series_value.call(null,G__84350,G__84351));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__84355 = self__.xs;
var G__84356 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__84355,G__84356) : sicmutils.series.series_value.call(null,G__84355,G__84356));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__84360 = self__.xs;
var G__84361 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__84360,G__84361) : sicmutils.series.series_value.call(null,G__84360,G__84361));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__84364 = self__.xs;
var G__84365 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__84364,G__84365) : sicmutils.series.series_value.call(null,G__84364,G__84365));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__84366 = self__.xs;
var G__84367 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__84366,G__84367) : sicmutils.series.series_value.call(null,G__84366,G__84367));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__84370 = self__.xs;
var G__84371 = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__84370,G__84371) : sicmutils.series.series_value.call(null,G__84370,G__84371));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__84372 = self__.xs;
var G__84373 = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__84372,G__84373) : sicmutils.series.series_value.call(null,G__84372,G__84373));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__84374 = self__.xs;
var G__84375 = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__84374,G__84375) : sicmutils.series.series_value.call(null,G__84374,G__84375));
})(),null));
}));

(sicmutils.series.Series.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return (new sicmutils.series.Series((function (){var G__84379 = self__.xs;
var G__84380 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null),rest);
return (sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.series_value.cljs$core$IFn$_invoke$arity$2(G__84379,G__84380) : sicmutils.series.series_value.call(null,G__84379,G__84380));
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
var G__84381 = (function (p1__84265_SHARP_){
return sicmutils.differential.replace_tag(p1__84265_SHARP_,old,new$);
});
var G__84382 = s__$1;
return (sicmutils.series.fmap.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.fmap.cljs$core$IFn$_invoke$arity$2(G__84381,G__84382) : sicmutils.series.fmap.call(null,G__84381,G__84382));
}));

(sicmutils.series.Series.prototype.sicmutils$differential$IPerturbed$extract_tangent$arity$2 = (function (s,tag){
var self__ = this;
var s__$1 = this;
var G__84384 = (function (p1__84266_SHARP_){
return sicmutils.differential.extract_tangent(p1__84266_SHARP_,tag);
});
var G__84385 = s__$1;
return (sicmutils.series.fmap.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.fmap.cljs$core$IFn$_invoke$arity$2(G__84384,G__84385) : sicmutils.series.fmap.call(null,G__84384,G__84385));
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

(sicmutils.series.PowerSeries.prototype.call = (function (unused__20572__auto__){
var self__ = this;
var self__ = this;
var G__84414 = (arguments.length - (1));
switch (G__84414) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(sicmutils.series.PowerSeries.prototype.apply = (function (self__,args84394){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args84394)));
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
var G__84420 = (function (p1__84387_SHARP_){
return sicmutils.differential.replace_tag(p1__84387_SHARP_,old,new$);
});
var G__84421 = s__$1;
return (sicmutils.series.fmap.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.fmap.cljs$core$IFn$_invoke$arity$2(G__84420,G__84421) : sicmutils.series.fmap.call(null,G__84420,G__84421));
}));

(sicmutils.series.PowerSeries.prototype.sicmutils$differential$IPerturbed$extract_tangent$arity$2 = (function (s,tag){
var self__ = this;
var s__$1 = this;
var G__84423 = (function (p1__84388_SHARP_){
return sicmutils.differential.extract_tangent(p1__84388_SHARP_,tag);
});
var G__84424 = s__$1;
return (sicmutils.series.fmap.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.fmap.cljs$core$IFn$_invoke$arity$2(G__84423,G__84424) : sicmutils.series.fmap.call(null,G__84423,G__84424));
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
var G__84432 = kind;
var G__84432__$1 = (((G__84432 instanceof cljs.core.Keyword))?G__84432.fqn:null);
switch (G__84432__$1) {
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
var len__4864__auto___84874 = arguments.length;
var i__4865__auto___84875 = (0);
while(true){
if((i__4865__auto___84875 < len__4864__auto___84874)){
args__4870__auto__.push((arguments[i__4865__auto___84875]));

var G__84877 = (i__4865__auto___84875 + (1));
i__4865__auto___84875 = G__84877;
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
(sicmutils.series.series.cljs$lang$applyTo = (function (seq84436){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq84436));
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
var len__4864__auto___84879 = arguments.length;
var i__4865__auto___84880 = (0);
while(true){
if((i__4865__auto___84880 < len__4864__auto___84879)){
args__4870__auto__.push((arguments[i__4865__auto___84880]));

var G__84881 = (i__4865__auto___84880 + (1));
i__4865__auto___84880 = G__84881;
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
(sicmutils.series.power_series.cljs$lang$applyTo = (function (seq84439){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq84439));
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
var G__84462 = arguments.length;
switch (G__84462) {
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
var G__84464 = sicmutils.series.impl.__GT_series(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
var G__84465 = null;
var fexpr__84463 = sicmutils.series.kind__GT_make(kind);
return (fexpr__84463.cljs$core$IFn$_invoke$arity$2 ? fexpr__84463.cljs$core$IFn$_invoke$arity$2(G__84464,G__84465) : fexpr__84463.call(null,G__84464,G__84465));
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
var G__84473 = arguments.length;
switch (G__84473) {
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
var G__84478 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var G__84479 = null;
var fexpr__84477 = sicmutils.series.kind__GT_make(kind);
return (fexpr__84477.cljs$core$IFn$_invoke$arity$2 ? fexpr__84477.cljs$core$IFn$_invoke$arity$2(G__84478,G__84479) : fexpr__84477.call(null,G__84478,G__84479));
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
var G__84485 = arguments.length;
switch (G__84485) {
case 1:
return sicmutils.series.function__GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___84896 = arguments.length;
var i__4865__auto___84897 = (0);
while(true){
if((i__4865__auto___84897 < len__4864__auto___84896)){
args_arr__4885__auto__.push((arguments[i__4865__auto___84897]));

var G__84899 = (i__4865__auto___84897 + (1));
i__4865__auto___84897 = G__84899;
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
(sicmutils.series.function__GT_.cljs$lang$applyTo = (function (seq84482){
var G__84483 = cljs.core.first(seq84482);
var seq84482__$1 = cljs.core.next(seq84482);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84483,seq84482__$1);
}));

(sicmutils.series.function__GT_.cljs$lang$maxFixedArity = (1));

/**
 * Evaluates the power series, and converts it back down to a normal series.
 */
sicmutils.series.power_series_value = (function sicmutils$series$power_series_value(f,x){
var one = sicmutils.value.one_like(x);
var powers = cljs.core.iterate((function (p1__84496_SHARP_){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(x,p1__84496_SHARP_);
}),one);
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(sicmutils.generic._STAR_,f,powers);
});
sicmutils.series.series_value = (function sicmutils$series$series_value(f,xs){
var collect = (function sicmutils$series$series_value_$_collect(f__$1){
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(f__$1),xs);
if(sicmutils.series.series_QMARK_(result)){
return (new cljs.core.LazySeq(null,(function (){
var vec__84510 = result;
var seq__84511 = cljs.core.seq(vec__84510);
var first__84512 = cljs.core.first(seq__84511);
var seq__84511__$1 = cljs.core.next(seq__84511);
var r = first__84512;
var r_tail = seq__84511__$1;
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
var G__84517 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,s);
var G__84518 = cljs.core.meta(s);
var fexpr__84516 = sicmutils.series._make(s);
return (fexpr__84516.cljs$core$IFn$_invoke$arity$2 ? fexpr__84516.cljs$core$IFn$_invoke$arity$2(G__84517,G__84518) : fexpr__84516.call(null,G__84517,G__84518));
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
var G__84520 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.cons,s,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(zeros)));
var G__84521 = cljs.core.meta(s);
var fexpr__84519 = sicmutils.series._make(s);
return (fexpr__84519.cljs$core$IFn$_invoke$arity$2 ? fexpr__84519.cljs$core$IFn$_invoke$arity$2(G__84520,G__84521) : fexpr__84519.call(null,G__84520,G__84521));
}
});
/**
 * Returns a series (of the same type as the input) of partial sums of the terms
 *   in the supplied series `s`.
 */
sicmutils.series.partial_sums = (function sicmutils$series$partial_sums(s){
var G__84524 = cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_,s);
var G__84525 = cljs.core.meta(s);
var fexpr__84523 = sicmutils.series._make(s);
return (fexpr__84523.cljs$core$IFn$_invoke$arity$2 ? fexpr__84523.cljs$core$IFn$_invoke$arity$2(G__84524,G__84525) : fexpr__84523.call(null,G__84524,G__84525));
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
var G__84533 = arguments.length;
switch (G__84533) {
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
return sicmutils.series.fmap((function (p1__84537_SHARP_){
return (sicmutils.series.arg_scale.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.arg_scale.cljs$core$IFn$_invoke$arity$2(p1__84537_SHARP_,factors) : sicmutils.series.arg_scale.call(null,p1__84537_SHARP_,factors));
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
return sicmutils.series.fmap((function (p1__84540_SHARP_){
return (sicmutils.series.arg_shift.cljs$core$IFn$_invoke$arity$2 ? sicmutils.series.arg_shift.cljs$core$IFn$_invoke$arity$2(p1__84540_SHARP_,shifts) : sicmutils.series.arg_shift.call(null,p1__84540_SHARP_,shifts));
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
var seq__84551_84932 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.series.__GT_Series,new cljs.core.Keyword("sicmutils.series","series","sicmutils.series/series",-314976590)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.series.__GT_PowerSeries,new cljs.core.Keyword("sicmutils.series","power-series","sicmutils.series/power-series",-2106733657)], null)], null));
var chunk__84552_84933 = null;
var count__84553_84934 = (0);
var i__84554_84935 = (0);
while(true){
if((i__84554_84935 < count__84553_84934)){
var vec__84672_84936 = chunk__84552_84933.cljs$core$IIndexed$_nth$arity$2(null,i__84554_84935);
var ctor_84937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84672_84936,(0),null);
var kind_84938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84672_84936,(1),null);
sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84938,kind_84938], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938){
return (function (s,t){
var G__84677 = sicmutils.series.impl.seq_COLON__PLUS_(cljs.core.seq(s),cljs.core.seq(t));
var G__84678 = null;
return (ctor_84937.cljs$core$IFn$_invoke$arity$2 ? ctor_84937.cljs$core$IFn$_invoke$arity$2(G__84677,G__84678) : ctor_84937.call(null,G__84677,G__84678));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938))
);

sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_84938], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938){
return (function (c,s){
var G__84681 = sicmutils.series.impl.c_PLUS_seq(c,cljs.core.seq(s));
var G__84682 = cljs.core.meta(s);
return (ctor_84937.cljs$core$IFn$_invoke$arity$2 ? ctor_84937.cljs$core$IFn$_invoke$arity$2(G__84681,G__84682) : ctor_84937.call(null,G__84681,G__84682));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938))
);

sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84938,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938){
return (function (s,c){
var G__84684 = sicmutils.series.impl.seq_PLUS_c(cljs.core.seq(s),c);
var G__84685 = cljs.core.meta(s);
return (ctor_84937.cljs$core$IFn$_invoke$arity$2 ? ctor_84937.cljs$core$IFn$_invoke$arity$2(G__84684,G__84685) : ctor_84937.call(null,G__84684,G__84685));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938))
);

sicmutils.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84938], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938){
return (function (s){
var G__84686 = sicmutils.series.impl.negate(cljs.core.seq(s));
var G__84687 = cljs.core.meta(s);
return (ctor_84937.cljs$core$IFn$_invoke$arity$2 ? ctor_84937.cljs$core$IFn$_invoke$arity$2(G__84686,G__84687) : ctor_84937.call(null,G__84686,G__84687));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938))
);

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84938,kind_84938], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938){
return (function (s,t){
var G__84688 = sicmutils.series.impl.seq_COLON__(cljs.core.seq(s),cljs.core.seq(t));
var G__84689 = null;
return (ctor_84937.cljs$core$IFn$_invoke$arity$2 ? ctor_84937.cljs$core$IFn$_invoke$arity$2(G__84688,G__84689) : ctor_84937.call(null,G__84688,G__84689));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938))
);

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_84938], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938){
return (function (c,s){
var G__84690 = sicmutils.series.impl.c_seq(c,cljs.core.seq(s));
var G__84691 = cljs.core.meta(s);
return (ctor_84937.cljs$core$IFn$_invoke$arity$2 ? ctor_84937.cljs$core$IFn$_invoke$arity$2(G__84690,G__84691) : ctor_84937.call(null,G__84690,G__84691));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938))
);

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84938,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938){
return (function (s,c){
var G__84693 = sicmutils.series.impl.seq_c(cljs.core.seq(s),c);
var G__84694 = cljs.core.meta(s);
return (ctor_84937.cljs$core$IFn$_invoke$arity$2 ? ctor_84937.cljs$core$IFn$_invoke$arity$2(G__84693,G__84694) : ctor_84937.call(null,G__84693,G__84694));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938))
);

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84938,kind_84938], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938){
return (function (s,t){
var G__84696 = sicmutils.series.impl.seq_COLON__STAR_(cljs.core.seq(s),cljs.core.seq(t));
var G__84697 = null;
return (ctor_84937.cljs$core$IFn$_invoke$arity$2 ? ctor_84937.cljs$core$IFn$_invoke$arity$2(G__84696,G__84697) : ctor_84937.call(null,G__84696,G__84697));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938))
);

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_84938], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938){
return (function (c,s){
var G__84699 = sicmutils.series.impl.c_STAR_seq(c,cljs.core.seq(s));
var G__84700 = cljs.core.meta(s);
return (ctor_84937.cljs$core$IFn$_invoke$arity$2 ? ctor_84937.cljs$core$IFn$_invoke$arity$2(G__84699,G__84700) : ctor_84937.call(null,G__84699,G__84700));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938))
);

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84938,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938){
return (function (s,c){
var G__84702 = sicmutils.series.impl.seq_STAR_c(cljs.core.seq(s),c);
var G__84703 = cljs.core.meta(s);
return (ctor_84937.cljs$core$IFn$_invoke$arity$2 ? ctor_84937.cljs$core$IFn$_invoke$arity$2(G__84702,G__84703) : ctor_84937.call(null,G__84702,G__84703));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938))
);

sicmutils.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84938], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938){
return (function (s){
var xs = cljs.core.seq(s);
var G__84704 = sicmutils.series.impl.seq_COLON__STAR_(xs,xs);
var G__84705 = cljs.core.meta(s);
return (ctor_84937.cljs$core$IFn$_invoke$arity$2 ? ctor_84937.cljs$core$IFn$_invoke$arity$2(G__84704,G__84705) : ctor_84937.call(null,G__84704,G__84705));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938))
);

sicmutils.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84938], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938){
return (function (s){
var xs = cljs.core.seq(s);
var G__84706 = sicmutils.series.impl.seq_COLON__STAR_(sicmutils.series.impl.seq_COLON__STAR_(xs,xs),xs);
var G__84707 = cljs.core.meta(s);
return (ctor_84937.cljs$core$IFn$_invoke$arity$2 ? ctor_84937.cljs$core$IFn$_invoke$arity$2(G__84706,G__84707) : ctor_84937.call(null,G__84706,G__84707));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938))
);

sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84938,new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938){
return (function (s,e){
var G__84708 = sicmutils.series.impl.expt(cljs.core.seq(s),e);
var G__84709 = cljs.core.meta(s);
return (ctor_84937.cljs$core$IFn$_invoke$arity$2 ? ctor_84937.cljs$core$IFn$_invoke$arity$2(G__84708,G__84709) : ctor_84937.call(null,G__84708,G__84709));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938))
);

sicmutils.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84938], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938){
return (function (s){
var G__84711 = sicmutils.series.impl.invert(cljs.core.seq(s));
var G__84712 = cljs.core.meta(s);
return (ctor_84937.cljs$core$IFn$_invoke$arity$2 ? ctor_84937.cljs$core$IFn$_invoke$arity$2(G__84711,G__84712) : ctor_84937.call(null,G__84711,G__84712));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938))
);

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_84938], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938){
return (function (c,s){
var G__84713 = sicmutils.series.impl.c_div_seq(c,cljs.core.seq(s));
var G__84714 = cljs.core.meta(s);
return (ctor_84937.cljs$core$IFn$_invoke$arity$2 ? ctor_84937.cljs$core$IFn$_invoke$arity$2(G__84713,G__84714) : ctor_84937.call(null,G__84713,G__84714));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938))
);

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84938,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938){
return (function (s,c){
var G__84716 = sicmutils.series.impl.seq_div_c(cljs.core.seq(s),c);
var G__84717 = cljs.core.meta(s);
return (ctor_84937.cljs$core$IFn$_invoke$arity$2 ? ctor_84937.cljs$core$IFn$_invoke$arity$2(G__84716,G__84717) : ctor_84937.call(null,G__84716,G__84717));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938))
);

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84938,kind_84938], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938){
return (function (s,t){
var G__84720 = sicmutils.series.impl.div(cljs.core.seq(s),cljs.core.seq(t));
var G__84721 = null;
return (ctor_84937.cljs$core$IFn$_invoke$arity$2 ? ctor_84937.cljs$core$IFn$_invoke$arity$2(G__84720,G__84721) : ctor_84937.call(null,G__84720,G__84721));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938))
);

sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_84938], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938){
return (function (c,s){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938))
);

sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84938,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938){
return (function (s,c){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938))
);

sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84938,kind_84938], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938){
return (function (s,t){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(s,t);
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938))
);

sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_84938], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938){
return (function (c,s){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938))
);

sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84938,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938){
return (function (s,c){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938))
);

sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84938,kind_84938], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938){
return (function (s,t){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(t,s);
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938))
);

sicmutils.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84938], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938){
return (function (s){
var G__84724 = sicmutils.series.impl.sqrt(cljs.core.seq(s));
var G__84725 = cljs.core.meta(s);
return (ctor_84937.cljs$core$IFn$_invoke$arity$2 ? ctor_84937.cljs$core$IFn$_invoke$arity$2(G__84724,G__84725) : ctor_84937.call(null,G__84724,G__84725));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938))
);

sicmutils.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84938], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938){
return (function (s){
return sicmutils.series.fmap(sicmutils.generic.simplify,s);
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84672_84936,ctor_84937,kind_84938))
);


var G__84955 = seq__84551_84932;
var G__84956 = chunk__84552_84933;
var G__84957 = count__84553_84934;
var G__84958 = (i__84554_84935 + (1));
seq__84551_84932 = G__84955;
chunk__84552_84933 = G__84956;
count__84553_84934 = G__84957;
i__84554_84935 = G__84958;
continue;
} else {
var temp__5753__auto___84960 = cljs.core.seq(seq__84551_84932);
if(temp__5753__auto___84960){
var seq__84551_84961__$1 = temp__5753__auto___84960;
if(cljs.core.chunked_seq_QMARK_(seq__84551_84961__$1)){
var c__4679__auto___84963 = cljs.core.chunk_first(seq__84551_84961__$1);
var G__84964 = cljs.core.chunk_rest(seq__84551_84961__$1);
var G__84965 = c__4679__auto___84963;
var G__84966 = cljs.core.count(c__4679__auto___84963);
var G__84967 = (0);
seq__84551_84932 = G__84964;
chunk__84552_84933 = G__84965;
count__84553_84934 = G__84966;
i__84554_84935 = G__84967;
continue;
} else {
var vec__84736_84968 = cljs.core.first(seq__84551_84961__$1);
var ctor_84969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84736_84968,(0),null);
var kind_84970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84736_84968,(1),null);
sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84970,kind_84970], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960){
return (function (s,t){
var G__84739 = sicmutils.series.impl.seq_COLON__PLUS_(cljs.core.seq(s),cljs.core.seq(t));
var G__84740 = null;
return (ctor_84969.cljs$core$IFn$_invoke$arity$2 ? ctor_84969.cljs$core$IFn$_invoke$arity$2(G__84739,G__84740) : ctor_84969.call(null,G__84739,G__84740));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960))
);

sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_84970], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960){
return (function (c,s){
var G__84741 = sicmutils.series.impl.c_PLUS_seq(c,cljs.core.seq(s));
var G__84742 = cljs.core.meta(s);
return (ctor_84969.cljs$core$IFn$_invoke$arity$2 ? ctor_84969.cljs$core$IFn$_invoke$arity$2(G__84741,G__84742) : ctor_84969.call(null,G__84741,G__84742));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960))
);

sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84970,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960){
return (function (s,c){
var G__84743 = sicmutils.series.impl.seq_PLUS_c(cljs.core.seq(s),c);
var G__84744 = cljs.core.meta(s);
return (ctor_84969.cljs$core$IFn$_invoke$arity$2 ? ctor_84969.cljs$core$IFn$_invoke$arity$2(G__84743,G__84744) : ctor_84969.call(null,G__84743,G__84744));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960))
);

sicmutils.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84970], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960){
return (function (s){
var G__84745 = sicmutils.series.impl.negate(cljs.core.seq(s));
var G__84746 = cljs.core.meta(s);
return (ctor_84969.cljs$core$IFn$_invoke$arity$2 ? ctor_84969.cljs$core$IFn$_invoke$arity$2(G__84745,G__84746) : ctor_84969.call(null,G__84745,G__84746));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960))
);

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84970,kind_84970], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960){
return (function (s,t){
var G__84748 = sicmutils.series.impl.seq_COLON__(cljs.core.seq(s),cljs.core.seq(t));
var G__84749 = null;
return (ctor_84969.cljs$core$IFn$_invoke$arity$2 ? ctor_84969.cljs$core$IFn$_invoke$arity$2(G__84748,G__84749) : ctor_84969.call(null,G__84748,G__84749));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960))
);

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_84970], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960){
return (function (c,s){
var G__84750 = sicmutils.series.impl.c_seq(c,cljs.core.seq(s));
var G__84751 = cljs.core.meta(s);
return (ctor_84969.cljs$core$IFn$_invoke$arity$2 ? ctor_84969.cljs$core$IFn$_invoke$arity$2(G__84750,G__84751) : ctor_84969.call(null,G__84750,G__84751));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960))
);

sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84970,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960){
return (function (s,c){
var G__84754 = sicmutils.series.impl.seq_c(cljs.core.seq(s),c);
var G__84755 = cljs.core.meta(s);
return (ctor_84969.cljs$core$IFn$_invoke$arity$2 ? ctor_84969.cljs$core$IFn$_invoke$arity$2(G__84754,G__84755) : ctor_84969.call(null,G__84754,G__84755));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960))
);

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84970,kind_84970], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960){
return (function (s,t){
var G__84756 = sicmutils.series.impl.seq_COLON__STAR_(cljs.core.seq(s),cljs.core.seq(t));
var G__84757 = null;
return (ctor_84969.cljs$core$IFn$_invoke$arity$2 ? ctor_84969.cljs$core$IFn$_invoke$arity$2(G__84756,G__84757) : ctor_84969.call(null,G__84756,G__84757));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960))
);

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_84970], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960){
return (function (c,s){
var G__84758 = sicmutils.series.impl.c_STAR_seq(c,cljs.core.seq(s));
var G__84759 = cljs.core.meta(s);
return (ctor_84969.cljs$core$IFn$_invoke$arity$2 ? ctor_84969.cljs$core$IFn$_invoke$arity$2(G__84758,G__84759) : ctor_84969.call(null,G__84758,G__84759));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960))
);

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84970,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960){
return (function (s,c){
var G__84761 = sicmutils.series.impl.seq_STAR_c(cljs.core.seq(s),c);
var G__84762 = cljs.core.meta(s);
return (ctor_84969.cljs$core$IFn$_invoke$arity$2 ? ctor_84969.cljs$core$IFn$_invoke$arity$2(G__84761,G__84762) : ctor_84969.call(null,G__84761,G__84762));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960))
);

sicmutils.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84970], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960){
return (function (s){
var xs = cljs.core.seq(s);
var G__84768 = sicmutils.series.impl.seq_COLON__STAR_(xs,xs);
var G__84769 = cljs.core.meta(s);
return (ctor_84969.cljs$core$IFn$_invoke$arity$2 ? ctor_84969.cljs$core$IFn$_invoke$arity$2(G__84768,G__84769) : ctor_84969.call(null,G__84768,G__84769));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960))
);

sicmutils.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84970], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960){
return (function (s){
var xs = cljs.core.seq(s);
var G__84771 = sicmutils.series.impl.seq_COLON__STAR_(sicmutils.series.impl.seq_COLON__STAR_(xs,xs),xs);
var G__84772 = cljs.core.meta(s);
return (ctor_84969.cljs$core$IFn$_invoke$arity$2 ? ctor_84969.cljs$core$IFn$_invoke$arity$2(G__84771,G__84772) : ctor_84969.call(null,G__84771,G__84772));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960))
);

sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84970,new cljs.core.Keyword("sicmutils.value","native-integral","sicmutils.value/native-integral",-693806146)], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960){
return (function (s,e){
var G__84776 = sicmutils.series.impl.expt(cljs.core.seq(s),e);
var G__84777 = cljs.core.meta(s);
return (ctor_84969.cljs$core$IFn$_invoke$arity$2 ? ctor_84969.cljs$core$IFn$_invoke$arity$2(G__84776,G__84777) : ctor_84969.call(null,G__84776,G__84777));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960))
);

sicmutils.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84970], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960){
return (function (s){
var G__84779 = sicmutils.series.impl.invert(cljs.core.seq(s));
var G__84780 = cljs.core.meta(s);
return (ctor_84969.cljs$core$IFn$_invoke$arity$2 ? ctor_84969.cljs$core$IFn$_invoke$arity$2(G__84779,G__84780) : ctor_84969.call(null,G__84779,G__84780));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960))
);

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_84970], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960){
return (function (c,s){
var G__84784 = sicmutils.series.impl.c_div_seq(c,cljs.core.seq(s));
var G__84785 = cljs.core.meta(s);
return (ctor_84969.cljs$core$IFn$_invoke$arity$2 ? ctor_84969.cljs$core$IFn$_invoke$arity$2(G__84784,G__84785) : ctor_84969.call(null,G__84784,G__84785));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960))
);

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84970,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960){
return (function (s,c){
var G__84786 = sicmutils.series.impl.seq_div_c(cljs.core.seq(s),c);
var G__84787 = cljs.core.meta(s);
return (ctor_84969.cljs$core$IFn$_invoke$arity$2 ? ctor_84969.cljs$core$IFn$_invoke$arity$2(G__84786,G__84787) : ctor_84969.call(null,G__84786,G__84787));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960))
);

sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84970,kind_84970], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960){
return (function (s,t){
var G__84788 = sicmutils.series.impl.div(cljs.core.seq(s),cljs.core.seq(t));
var G__84789 = null;
return (ctor_84969.cljs$core$IFn$_invoke$arity$2 ? ctor_84969.cljs$core$IFn$_invoke$arity$2(G__84788,G__84789) : ctor_84969.call(null,G__84788,G__84789));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960))
);

sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_84970], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960){
return (function (c,s){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960))
);

sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84970,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960){
return (function (s,c){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960))
);

sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84970,kind_84970], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960){
return (function (s,t){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(s,t);
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960))
);

sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444),kind_84970], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960){
return (function (c,s){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960))
);

sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84970,new cljs.core.Keyword("sicmutils.series","coseries","sicmutils.series/coseries",-1013561444)], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960){
return (function (s,c){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960))
);

sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84970,kind_84970], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960){
return (function (s,t){
return sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(t,s);
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960))
);

sicmutils.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84970], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960){
return (function (s){
var G__84791 = sicmutils.series.impl.sqrt(cljs.core.seq(s));
var G__84792 = cljs.core.meta(s);
return (ctor_84969.cljs$core$IFn$_invoke$arity$2 ? ctor_84969.cljs$core$IFn$_invoke$arity$2(G__84791,G__84792) : ctor_84969.call(null,G__84791,G__84792));
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960))
);

sicmutils.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_84970], null),((function (seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960){
return (function (s){
return sicmutils.series.fmap(sicmutils.generic.simplify,s);
});})(seq__84551_84932,chunk__84552_84933,count__84553_84934,i__84554_84935,vec__84736_84968,ctor_84969,kind_84970,seq__84551_84961__$1,temp__5753__auto___84960))
);


var G__85006 = cljs.core.next(seq__84551_84961__$1);
var G__85007 = null;
var G__85008 = (0);
var G__85009 = (0);
seq__84551_84932 = G__85006;
chunk__84552_84933 = G__85007;
count__84553_84934 = G__85008;
i__84554_84935 = G__85009;
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
return sicmutils.series.__GT_Series(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__84809_SHARP_){
return sicmutils.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(p1__84809_SHARP_,selectors);
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
