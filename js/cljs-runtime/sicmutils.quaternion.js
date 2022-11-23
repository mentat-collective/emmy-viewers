goog.provide('sicmutils.quaternion');





/**
* @constructor
 * @implements {sicmutils.function$.IArity}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IFind}
 * @implements {sicmutils.differential.IPerturbed}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {sicmutils.value.Value}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
sicmutils.quaternion.Quaternion = (function (r,i,j,k,m){
this.r = r;
this.i = i;
this.j = j;
this.k = k;
this.m = m;
this.cljs$lang$protocol_mask$partition0$ = 2310931231;
this.cljs$lang$protocol_mask$partition1$ = 131072;
});
(sicmutils.quaternion.Quaternion.prototype.cljs$core$IFind$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IFind$_find$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
if(this$__$1.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(null,n)){
return (new cljs.core.MapEntry(n,this$__$1.cljs$core$IIndexed$_nth$arity$3(null,n,null),null));
} else {
return null;
}
}));

(sicmutils.quaternion.Quaternion.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["#sicm/quaternion [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.r)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.i)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.j)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.k),"]"].join('');
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,key,null);
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,key,not_found){
var self__ = this;
var this$__$1 = this;
if(typeof key === 'number'){
return this$__$1.cljs$core$IIndexed$_nth$arity$3(null,key,not_found);
} else {
return not_found;
}
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
var G__102968 = (function (){var G__102971 = (function (){var G__102974 = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(init,self__.r,(0)) : f.call(null,init,self__.r,(0)));
var G__102975 = self__.i;
var G__102976 = (1);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__102974,G__102975,G__102976) : f.call(null,G__102974,G__102975,G__102976));
})();
var G__102972 = self__.j;
var G__102973 = (2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__102971,G__102972,G__102973) : f.call(null,G__102971,G__102972,G__102973));
})();
var G__102969 = self__.k;
var G__102970 = (3);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__102968,G__102969,G__102970) : f.call(null,G__102968,G__102969,G__102970));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IIndexed$_nth$arity$3(null,n,null);
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,default$){
var self__ = this;
var ___$1 = this;
var G__102977 = n;
switch (G__102977) {
case (0):
return self__.r;

break;
case (1):
return self__.i;

break;
case (2):
return self__.j;

break;
case (3):
return self__.k;

break;
default:
return default$;

}
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var self__ = this;
var x__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1.toString()], 0));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.ranged_iterator(cljs.core.vec(this$__$1),(0),(4));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (4);
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(null,self__.k,(new cljs.core.List(null,self__.j,(new cljs.core.List(null,self__.i,(new cljs.core.List(null,self__.r,null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return (sicmutils.quaternion.eq.cljs$core$IFn$_invoke$arity$2 ? sicmutils.quaternion.eq.cljs$core$IFn$_invoke$arity$2(this$__$1,that) : sicmutils.quaternion.eq.call(null,this$__$1,that));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new sicmutils.quaternion.Quaternion((0),(0),(0),(0),self__.m));
}));

(sicmutils.quaternion.Quaternion.prototype.sicmutils$value$Value$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.quaternion.Quaternion.prototype.sicmutils$value$Value$zero_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new sicmutils.quaternion.Quaternion(sicmutils.value.zero_like(self__.r),(0),(0),(0),self__.m));
}));

(sicmutils.quaternion.Quaternion.prototype.sicmutils$value$Value$identity_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (sicmutils.quaternion.one_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.quaternion.one_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : sicmutils.quaternion.one_QMARK_.call(null,this$__$1));
}));

(sicmutils.quaternion.Quaternion.prototype.sicmutils$value$Value$freeze$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quaternion","quaternion",-808610151,null),(new cljs.core.List(null,sicmutils.value.freeze(self__.r),(new cljs.core.List(null,sicmutils.value.freeze(self__.i),(new cljs.core.List(null,sicmutils.value.freeze(self__.j),(new cljs.core.List(null,sicmutils.value.freeze(self__.k),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null));
}));

(sicmutils.quaternion.Quaternion.prototype.sicmutils$value$Value$zero_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (sicmutils.quaternion.zero_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.quaternion.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : sicmutils.quaternion.zero_QMARK_.call(null,this$__$1));
}));

(sicmutils.quaternion.Quaternion.prototype.sicmutils$value$Value$one_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (sicmutils.quaternion.one_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.quaternion.one_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : sicmutils.quaternion.one_QMARK_.call(null,this$__$1));
}));

(sicmutils.quaternion.Quaternion.prototype.sicmutils$value$Value$exact_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((sicmutils.value.exact_QMARK_(self__.r)) && (((sicmutils.value.exact_QMARK_(self__.i)) && (((sicmutils.value.exact_QMARK_(self__.j)) && (sicmutils.value.exact_QMARK_(self__.k)))))));
}));

(sicmutils.quaternion.Quaternion.prototype.sicmutils$value$Value$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563);
}));

(sicmutils.quaternion.Quaternion.prototype.sicmutils$value$Value$identity_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new sicmutils.quaternion.Quaternion(sicmutils.value.one_like(self__.r),(0),(0),(0),self__.m));
}));

(sicmutils.quaternion.Quaternion.prototype.sicmutils$value$Value$one_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new sicmutils.quaternion.Quaternion(sicmutils.value.one_like(self__.r),(0),(0),(0),self__.m));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
var G__102979 = (function (){var G__102981 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.r,self__.i) : f.call(null,self__.r,self__.i));
var G__102982 = self__.j;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__102981,G__102982) : f.call(null,G__102981,G__102982));
})();
var G__102980 = self__.k;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__102979,G__102980) : f.call(null,G__102979,G__102980));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,start){
var self__ = this;
var ___$1 = this;
var G__102983 = (function (){var G__102985 = (function (){var G__102987 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(start,self__.r) : f.call(null,start,self__.r));
var G__102988 = self__.i;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__102987,G__102988) : f.call(null,G__102987,G__102988));
})();
var G__102986 = self__.j;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__102985,G__102986) : f.call(null,G__102985,G__102986));
})();
var G__102984 = self__.k;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__102983,G__102984) : f.call(null,G__102983,G__102984));
}));

(sicmutils.quaternion.Quaternion.prototype.sicmutils$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.quaternion.Quaternion.prototype.sicmutils$function$IArity$arity$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (sicmutils.quaternion.arity.cljs$core$IFn$_invoke$arity$1 ? sicmutils.quaternion.arity.cljs$core$IFn$_invoke$arity$1(this$__$1) : sicmutils.quaternion.arity.call(null,this$__$1));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,key,v){
var self__ = this;
var ___$1 = this;
var G__102989 = key;
switch (G__102989) {
case (0):
return (new sicmutils.quaternion.Quaternion(v,self__.i,self__.j,self__.k,self__.m));

break;
case (1):
return (new sicmutils.quaternion.Quaternion(self__.r,v,self__.j,self__.k,self__.m));

break;
case (2):
return (new sicmutils.quaternion.Quaternion(self__.r,self__.i,v,self__.k,self__.m));

break;
case (3):
return (new sicmutils.quaternion.Quaternion(self__.r,self__.i,self__.j,v,self__.m));

break;
default:
throw (new Error("Quaternion's key for assoc must be 0, 1, 2 or 3."));

}
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k__$1){
var self__ = this;
var ___$1 = this;
return cljs.core.boolean$((function (){var fexpr__102990 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(0),null,(1),null,(3),null,(2),null], null), null);
return (fexpr__102990.cljs$core$IFn$_invoke$arity$1 ? fexpr__102990.cljs$core$IFn$_invoke$arity$1(k__$1) : fexpr__102990.call(null,k__$1));
})());
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(null,self__.r,(new cljs.core.List(null,self__.i,(new cljs.core.List(null,self__.j,(new cljs.core.List(null,self__.k,null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,meta){
var self__ = this;
var ___$1 = this;
return (new sicmutils.quaternion.Quaternion(self__.r,self__.i,self__.j,self__.k,meta));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
throw (new Error(["conj not suported on Quaternion instances. convert to"," vector first!"].join('')));
}));

(sicmutils.quaternion.Quaternion.prototype.call = (function (unused__43702__auto__){
var self__ = this;
var self__ = this;
var G__102991 = (arguments.length - (1));
switch (G__102991) {
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

(sicmutils.quaternion.Quaternion.prototype.apply = (function (self__,args102967){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args102967)));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var G__103015 = this$;
var G__103016 = cljs.core.PersistentVector.EMPTY;
return (sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__103015,G__103016) : sicmutils.quaternion.evaluate.call(null,G__103015,G__103016));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
var G__103024 = this$;
var G__103025 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null);
return (sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__103024,G__103025) : sicmutils.quaternion.evaluate.call(null,G__103024,G__103025));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
var G__103026 = this$;
var G__103027 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
return (sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__103026,G__103027) : sicmutils.quaternion.evaluate.call(null,G__103026,G__103027));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
var G__103028 = this$;
var G__103029 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null);
return (sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__103028,G__103029) : sicmutils.quaternion.evaluate.call(null,G__103028,G__103029));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
var G__103030 = this$;
var G__103031 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null);
return (sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__103030,G__103031) : sicmutils.quaternion.evaluate.call(null,G__103030,G__103031));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
var G__103033 = this$;
var G__103034 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e], null);
return (sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__103033,G__103034) : sicmutils.quaternion.evaluate.call(null,G__103033,G__103034));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var this$ = this;
var G__103050 = this$;
var G__103051 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null);
return (sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__103050,G__103051) : sicmutils.quaternion.evaluate.call(null,G__103050,G__103051));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var this$ = this;
var G__103052 = this$;
var G__103053 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g], null);
return (sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__103052,G__103053) : sicmutils.quaternion.evaluate.call(null,G__103052,G__103053));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var this$ = this;
var G__103054 = this$;
var G__103055 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null);
return (sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__103054,G__103055) : sicmutils.quaternion.evaluate.call(null,G__103054,G__103055));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i__$1){
var self__ = this;
var this$ = this;
var G__103057 = this$;
var G__103058 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1], null);
return (sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__103057,G__103058) : sicmutils.quaternion.evaluate.call(null,G__103057,G__103058));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i__$1,j__$1){
var self__ = this;
var this$ = this;
var G__103059 = this$;
var G__103060 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1,j__$1], null);
return (sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__103059,G__103060) : sicmutils.quaternion.evaluate.call(null,G__103059,G__103060));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1){
var self__ = this;
var this$ = this;
var G__103065 = this$;
var G__103066 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1], null);
return (sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__103065,G__103066) : sicmutils.quaternion.evaluate.call(null,G__103065,G__103066));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l){
var self__ = this;
var this$ = this;
var G__103067 = this$;
var G__103068 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l], null);
return (sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__103067,G__103068) : sicmutils.quaternion.evaluate.call(null,G__103067,G__103068));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1){
var self__ = this;
var this$ = this;
var G__103073 = this$;
var G__103074 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1], null);
return (sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__103073,G__103074) : sicmutils.quaternion.evaluate.call(null,G__103073,G__103074));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n){
var self__ = this;
var this$ = this;
var G__103075 = this$;
var G__103076 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n], null);
return (sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__103075,G__103076) : sicmutils.quaternion.evaluate.call(null,G__103075,G__103076));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o){
var self__ = this;
var this$ = this;
var G__103077 = this$;
var G__103078 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o], null);
return (sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__103077,G__103078) : sicmutils.quaternion.evaluate.call(null,G__103077,G__103078));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o,p){
var self__ = this;
var this$ = this;
var G__103079 = this$;
var G__103080 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o,p], null);
return (sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__103079,G__103080) : sicmutils.quaternion.evaluate.call(null,G__103079,G__103080));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o,p,q){
var self__ = this;
var this$ = this;
var G__103081 = this$;
var G__103082 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o,p,q], null);
return (sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__103081,G__103082) : sicmutils.quaternion.evaluate.call(null,G__103081,G__103082));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o,p,q,r__$1){
var self__ = this;
var this$ = this;
var G__103083 = this$;
var G__103084 = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o,p,q,r__$1], null);
return (sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__103083,G__103084) : sicmutils.quaternion.evaluate.call(null,G__103083,G__103084));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o,p,q,r__$1,s){
var self__ = this;
var this$ = this;
var G__103085 = this$;
var G__103086 = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o,p,q,r__$1,s], null);
return (sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__103085,G__103086) : sicmutils.quaternion.evaluate.call(null,G__103085,G__103086));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o,p,q,r__$1,s,t){
var self__ = this;
var this$ = this;
var G__103087 = this$;
var G__103088 = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o,p,q,r__$1,s,t], null);
return (sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__103087,G__103088) : sicmutils.quaternion.evaluate.call(null,G__103087,G__103088));
}));

(sicmutils.quaternion.Quaternion.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o,p,q,r__$1,s,t,rest){
var self__ = this;
var this$ = this;
var G__103089 = this$;
var G__103090 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i__$1,j__$1,k__$1,l,m__$1,n,o,p,q,r__$1,s,t], null),rest);
return (sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2 ? sicmutils.quaternion.evaluate.cljs$core$IFn$_invoke$arity$2(G__103089,G__103090) : sicmutils.quaternion.evaluate.call(null,G__103089,G__103090));
}));

(sicmutils.quaternion.Quaternion.prototype.sicmutils$differential$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.quaternion.Quaternion.prototype.sicmutils$differential$IPerturbed$perturbed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__4253__auto__ = sicmutils.differential.perturbed_QMARK_(self__.r);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sicmutils.differential.perturbed_QMARK_(self__.i);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sicmutils.differential.perturbed_QMARK_(self__.j);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return sicmutils.differential.perturbed_QMARK_(self__.k);
}
}
}
}));

(sicmutils.quaternion.Quaternion.prototype.sicmutils$differential$IPerturbed$replace_tag$arity$3 = (function (_,old,new$){
var self__ = this;
var ___$1 = this;
return (new sicmutils.quaternion.Quaternion(sicmutils.differential.replace_tag(self__.r,old,new$),sicmutils.differential.replace_tag(self__.i,old,new$),sicmutils.differential.replace_tag(self__.j,old,new$),sicmutils.differential.replace_tag(self__.k,old,new$),self__.m));
}));

(sicmutils.quaternion.Quaternion.prototype.sicmutils$differential$IPerturbed$extract_tangent$arity$2 = (function (_,tag){
var self__ = this;
var ___$1 = this;
return (new sicmutils.quaternion.Quaternion(sicmutils.differential.extract_tangent(self__.r,tag),sicmutils.differential.extract_tangent(self__.i,tag),sicmutils.differential.extract_tangent(self__.j,tag),sicmutils.differential.extract_tangent(self__.k,tag),self__.m));
}));

(sicmutils.quaternion.Quaternion.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"j","j",242556762,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null);
}));

(sicmutils.quaternion.Quaternion.cljs$lang$type = true);

(sicmutils.quaternion.Quaternion.cljs$lang$ctorStr = "sicmutils.quaternion/Quaternion");

(sicmutils.quaternion.Quaternion.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"sicmutils.quaternion/Quaternion");
}));

/**
 * Positional factory function for sicmutils.quaternion/Quaternion.
 */
sicmutils.quaternion.__GT_Quaternion = (function sicmutils$quaternion$__GT_Quaternion(r,i,j,k,m){
return (new sicmutils.quaternion.Quaternion(r,i,j,k,m));
});

delete sicmutils.quaternion["__GT_Quaternion"];

/**
 * Positional factory function for [[Quaternion]].
 * 
 *   The final metadata argument `m` defaults to nil if not supplied.
 */
sicmutils.quaternion.__GT_Quaternion = (function sicmutils$quaternion$__GT_Quaternion(var_args){
var G__103119 = arguments.length;
switch (G__103119) {
case 4:
return sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4 = (function (r,i,j,k){
return (new sicmutils.quaternion.Quaternion(r,i,j,k,null));
}));

(sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$5 = (function (r,i,j,k,m){
return (new sicmutils.quaternion.Quaternion(r,i,j,k,m));
}));

(sicmutils.quaternion.__GT_Quaternion.cljs$lang$maxFixedArity = 5);

/**
 * Returns `true` if `q` is an instance of [[Quaternion]], false otherwise.
 */
sicmutils.quaternion.quaternion_QMARK_ = (function sicmutils$quaternion$quaternion_QMARK_(q){
return (q instanceof sicmutils.quaternion.Quaternion);
});
/**
 * Returns the `r` component of the supplied quaternion `q`.
 * 
 *   Identical to [[real-part]].
 */
sicmutils.quaternion.get_r = (function sicmutils$quaternion$get_r(q){
return q.r;
});
/**
 * Returns the `r` component of the supplied quaternion `q`.
 * 
 *   Identical to [[get-r]].
 */
sicmutils.quaternion.real_part = (function sicmutils$quaternion$real_part(q){
return q.r;
});
/**
 * Returns the `i` component of the supplied quaternion `q`.
 */
sicmutils.quaternion.get_i = (function sicmutils$quaternion$get_i(q){
return q.i;
});
/**
 * Returns the `j` component of the supplied quaternion `q`.
 */
sicmutils.quaternion.get_j = (function sicmutils$quaternion$get_j(q){
return q.j;
});
/**
 * Returns the `k` component of the supplied quaternion `q`.
 */
sicmutils.quaternion.get_k = (function sicmutils$quaternion$get_k(q){
return q.k;
});
/**
 * Returns the `r` and `i` components of the quaternion `q` as a `Complex` number
 *   instance.
 */
sicmutils.quaternion.complex_1 = (function sicmutils$quaternion$complex_1(q){
return sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_r(q),sicmutils.quaternion.get_i(q));
});
/**
 * Returns the `j` and `k` components of the quaternion `q` as a `Complex` number
 *   instance.
 */
sicmutils.quaternion.complex_2 = (function sicmutils$quaternion$complex_2(q){
return sicmutils.complex.complex.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_j(q),sicmutils.quaternion.get_k(q));
});
/**
 * Returns a pair of complex number created respectively from the `(r,i)`
 *   and `(j,k)` components of the supplied quaternion `q`.
 * 
 *   NOTE that this only works if the coefficients of `q` are real numbers, due to
 *   restrictions on the current complex number implementation. 
 */
sicmutils.quaternion.__GT_complex_pair = (function sicmutils$quaternion$__GT_complex_pair(q){
if(sicmutils.quaternion.quaternion_QMARK_(q)){
} else {
throw (new Error("Assert failed: (quaternion? q)"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.quaternion.complex_1(q),sicmutils.quaternion.complex_2(q)], null);
});
/**
 * Returns a 4-vector of the coefficients of quaternion `q`.
 * 
 *   Works identically to `(vec q)`, but more efficient as we are able to create
 *   the new vector in one shot.
 */
sicmutils.quaternion.__GT_vector = (function sicmutils$quaternion$__GT_vector(q){
if(sicmutils.quaternion.quaternion_QMARK_(q)){
} else {
throw (new Error("Assert failed: (quaternion? q)"));
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.quaternion.get_r(q),sicmutils.quaternion.get_i(q),sicmutils.quaternion.get_j(q),sicmutils.quaternion.get_k(q)], null);
});
/**
 * Returns a 3-vector holding the coefficients of the non-real (imaginary)
 *   components of the quaternion `q`.
 */
sicmutils.quaternion.three_vector = (function sicmutils$quaternion$three_vector(q){
if(sicmutils.quaternion.quaternion_QMARK_(q)){
} else {
throw (new Error("Assert failed: (quaternion? q)"));
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.quaternion.get_i(q),sicmutils.quaternion.get_j(q),sicmutils.quaternion.get_k(q)], null);
});
/**
 * Returns true if the quaternion `q` has zero entries for all non-real fields,
 *   false otherwise.
 */
sicmutils.quaternion.real_QMARK_ = (function sicmutils$quaternion$real_QMARK_(q){
return ((sicmutils.value.zero_QMARK_(sicmutils.quaternion.get_i(q))) && (((sicmutils.value.zero_QMARK_(sicmutils.quaternion.get_j(q))) && (sicmutils.value.zero_QMARK_(sicmutils.quaternion.get_k(q))))));
});
/**
 * Returns true if `q` is a quaternion with zeros in all coefficient positions,
 *   false otherwise.
 */
sicmutils.quaternion.zero_QMARK_ = (function sicmutils$quaternion$zero_QMARK_(q){
return ((sicmutils.quaternion.real_QMARK_(q)) && (sicmutils.value.zero_QMARK_(sicmutils.quaternion.get_r(q))));
});
/**
 * Returns true if `q` is a [[real?]] quaternion with a one-like coefficient in
 *   the real position, false otherwise.
 */
sicmutils.quaternion.one_QMARK_ = (function sicmutils$quaternion$one_QMARK_(q){
return ((sicmutils.quaternion.real_QMARK_(q)) && (sicmutils.value.one_QMARK_(sicmutils.quaternion.get_r(q))));
});
/**
 * Returns true if the quaternion `q` has a zero real entry, false otherwise.
 * 
 *   A 'pure' quaternion is sometimes called an 'imaginary' quaternion.
 */
sicmutils.quaternion.pure_QMARK_ = (function sicmutils$quaternion$pure_QMARK_(q){
return sicmutils.value.zero_QMARK_(sicmutils.quaternion.get_r(q));
});
/**
 * Returns true if `q` is a unit quaternion (ie, a 'versor', a quaternion
 *   with [[magnitude]] equal to one), false otherwise.
 * 
 *   To check if the [[magnitude]] of `q` is /approximately/ equal to one, pass a
 *   tolerance via the `:epsilon` keyword argument.
 * 
 *   For more control, use [[magnitude]] to compute the magnitude directly.
 */
sicmutils.quaternion.unit_QMARK_ = (function sicmutils$quaternion$unit_QMARK_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___103571 = arguments.length;
var i__4865__auto___103572 = (0);
while(true){
if((i__4865__auto___103572 < len__4864__auto___103571)){
args__4870__auto__.push((arguments[i__4865__auto___103572]));

var G__103573 = (i__4865__auto___103572 + (1));
i__4865__auto___103572 = G__103573;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sicmutils.quaternion.unit_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sicmutils.quaternion.unit_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (q,p__103173){
var map__103174 = p__103173;
var map__103174__$1 = cljs.core.__destructure_map(map__103174);
var epsilon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103174__$1,new cljs.core.Keyword(null,"epsilon","epsilon",-730158570));
var mag_sq = (sicmutils.quaternion.magnitude_sq.cljs$core$IFn$_invoke$arity$1 ? sicmutils.quaternion.magnitude_sq.cljs$core$IFn$_invoke$arity$1(q) : sicmutils.quaternion.magnitude_sq.call(null,q));
if(cljs.core.truth_(epsilon)){
return sicmutils.value.within(epsilon)((1),sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(mag_sq));
} else {
return sicmutils.value.one_QMARK_(mag_sq);
}
}));

(sicmutils.quaternion.unit_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sicmutils.quaternion.unit_QMARK_.cljs$lang$applyTo = (function (seq103171){
var G__103172 = cljs.core.first(seq103171);
var seq103171__$1 = cljs.core.next(seq103171);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103172,seq103171__$1);
}));

/**
 * Returns true if the supplied quaternion `q1` is equal to the value `q2`. The
 *   rules for [[eq]] are as follows:
 * 
 *   - If `q2` is a quaternion, returns true if all coefficients match, false
 *  otherwise
 * 
 *   - If `q2` is complex, returns true if the real and `i` coefficients are equal,
 *  with `j` and `k` coefficients of `q1` equal to zero, false otherwise
 * 
 *   - If `q2` is sequential with a count of 4, it's interpreted as a vector of
 *  quaternion coefficients.
 * 
 *   Else, if `q1` is a [[real?]] quaternion, returns true if the real component of
 *   `q1` is [[sicmutils.value/=]] to `q2`, false otherwise.
 */
sicmutils.quaternion.eq = (function sicmutils$quaternion$eq(q1,q2){
var or__4253__auto__ = (q1 === q2);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var r = sicmutils.quaternion.get_r(q1);
var i = sicmutils.quaternion.get_i(q1);
var j = sicmutils.quaternion.get_j(q1);
var k = sicmutils.quaternion.get_k(q1);
if(sicmutils.quaternion.quaternion_QMARK_(q2)){
var q2__$1 = q2;
var and__4251__auto__ = sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(r,q2__$1.r);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(i,q2__$1.i);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(j,q2__$1.j);
if(cljs.core.truth_(and__4251__auto____$2)){
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(k,q2__$1.k);
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
} else {
if(sicmutils.complex.complex_QMARK_(q2)){
var and__4251__auto__ = sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(r,sicmutils.complex.real(q2));
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(i,sicmutils.complex.imaginary(q2));
if(cljs.core.truth_(and__4251__auto____$1)){
return ((sicmutils.value.zero_QMARK_(j)) && (sicmutils.value.zero_QMARK_(k)));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
} else {
if(cljs.core.sequential_QMARK_(q2)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(q2),(4))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q2,(0)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q2,(1)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q2,(2)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q2,(3)))))))))));
} else {
var and__4251__auto__ = sicmutils.quaternion.real_QMARK_(q1);
if(and__4251__auto__){
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(r,q2);
} else {
return and__4251__auto__;
}

}
}
}
}
});
/**
 * The zero quaternion. All coefficients are equal to 0.
 */
sicmutils.quaternion.ZERO = sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4((0),(0),(0),(0));
/**
 * The identity quaternion. The real coefficient is equal to 1, and
 *   all coefficients are equal to 0.
 */
sicmutils.quaternion.ONE = sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4((1),(0),(0),(0));
/**
 * Unit quaternion with `i` coefficient equal to 1, all other
 *   coefficients equal to 0.
 */
sicmutils.quaternion.I = sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4((0),(1),(0),(0));
/**
 * Unit quaternion with `j` coefficient equal to 1, all other
 *   coefficients equal to 0.
 */
sicmutils.quaternion.J = sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4((0),(0),(1),(0));
/**
 * Unit quaternion with `k` coefficient equal to 1, all other
 *   coefficients equal to 0.
 */
sicmutils.quaternion.K = sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4((0),(0),(0),(1));
/**
 * Constructor that builds [[Quaternion]] instances out of a variety of types.
 *   Given:
 * 
 *   - a quaternion `x`, acts as identity.
 * 
 *   - a sequential `x`, returns a quaternion with coefficients built from the
 *  first four entries.
 * 
 *   - a complex number `x`, returns a quaternion built from the real and imaginary
 *  components of `x` with `j` and `k` components equal to zero.
 * 
 *   - a real number `x` and 3-vector, returns a quaternion with real coefficient
 *  equal to `x` and imaginary components equal to the elements of the vector
 * 
 *   - 4 distinct arguments `r`, `i`, `j` and `k`, returns a quaternion with these
 *  as the coefficients.
 */
sicmutils.quaternion.make = (function sicmutils$quaternion$make(var_args){
var G__103188 = arguments.length;
switch (G__103188) {
case 1:
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(sicmutils.quaternion.quaternion_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.__GT_Quaternion,cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),x));
} else {
if(sicmutils.complex.complex_QMARK_(x)){
return sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4(sicmutils.complex.real(x),sicmutils.complex.imaginary(x),(0),(0));
} else {
return sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4(x,(0),(0),(0));

}
}
}
}));

(sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$2 = (function (r,p__103191){
var vec__103192 = p__103191;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103192,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103192,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103192,(2),null);
return sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4(r,i,j,k);
}));

(sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$4 = (function (r,i,j,k){
return sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4(r,i,j,k);
}));

(sicmutils.quaternion.make.cljs$lang$maxFixedArity = 4);

/**
 * Implementation of a reader literal that turns literal 4-vectors into calls
 *   to [[make]]. For all other input, call [[make]] directly.
 * 
 *   Installed by default under #sicm/quaternion.
 */
sicmutils.quaternion.parse_quaternion = (function sicmutils$quaternion$parse_quaternion(x){
if(cljs.core.vector_QMARK_(x)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(4))){
var vec__103197 = x;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103197,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103197,(1),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103197,(2),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103197,(3),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("sicmutils.quaternion","make","sicmutils.quaternion/make",-1502099897,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,i,null,(1),null)),(new cljs.core.List(null,j,null,(1),null)),(new cljs.core.List(null,k,null,(1),null))], 0))));
} else {
return sicmutils.util.illegal(["Quaternion literal vectors require 4 elements. Received: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("sicmutils.quaternion","make","sicmutils.quaternion/make",-1502099897,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
}
});
/**
 * Given two complex numbers `a` and `b`, returns a quaternion instance with
 * 
 *   - `r` and `i` components set to the real and imaginary components of `a`
 *   - `j` and `k` components set to the real and imaginary components of `b`
 */
sicmutils.quaternion.from_complex = (function sicmutils$quaternion$from_complex(a,b){
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$4(sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1(a),sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1(a),sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1(b),sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1(b));
});
/**
 * Generates a [[Quaternion]] instance, given:
 * 
 *   - a magnitude `r`
 *   - a rotation angle `theta`, with a natural range of `-2*pi` to `2*pi`
 *   - `colat`, the [colatitude](https://mathworld.wolfram.com/Colatitude.html) of
 *  the (non-real) vectorial part of the quaternion
 *   - `lon`, the longitude of the vectorial part of the quaternion
 */
sicmutils.quaternion.spherical = (function sicmutils$quaternion$spherical(r,theta,colat,lon){
var half_t = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(theta,(2));
var cos_ht = sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(half_t);
var sin_ht = sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(half_t);
var sin_co = sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(colat);
var r_STAR_sin_ht = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r,sin_ht);
var r_STAR_sin_ht_STAR_sin_co = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r_STAR_sin_ht,sin_co);
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$4(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r,cos_ht),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r_STAR_sin_ht_STAR_sin_co,sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(lon)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r_STAR_sin_ht_STAR_sin_co,sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(lon)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r_STAR_sin_ht,sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(colat)));
});
/**
 * Returns a [[Quaternion]] `q` with magnitude `rho`, built such that:
 * 
 *   - the magnitude of `q` equals `rho`
 *   - the magnitude `([[complex-1]] q)` equals `(* rho (cos alpha))`
 *   - the angle of `([[complex-1]] q)` equals `theta1`
 *   - The magnitude `([[complex-2]] q)` equals `(* rho (cos alpha))`
 *   - the angle of `([[complex-2]] q)` equals `theta12`
 * 
 *   This strange, possibly unnecessary constructor taken from the [Boost
 *   quaternion
 *   implementation](https://www.boost.org/doc/libs/1_78_0/libs/math/doc/html/math_toolkit/create.html).
 */
sicmutils.quaternion.semipolar = (function sicmutils$quaternion$semipolar(r,alpha,theta1,theta2){
var r_STAR_cos_a = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r,sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(alpha));
var r_STAR_sin_a = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r,sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(alpha));
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$4(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r_STAR_cos_a,sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(theta1)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r_STAR_cos_a,sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(theta1)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r_STAR_sin_a,sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(theta2)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r_STAR_sin_a,sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(theta2)));
});
/**
 * Returns a [[Quaternion]] instance with [[complex-1]] part built from the polar
 *   coordinates `r1` and `theta1` and [[complex-2]] part built from `r2` and
 *   `theta2`
 */
sicmutils.quaternion.multipolar = (function sicmutils$quaternion$multipolar(r1,theta1,r2,theta2){
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$4(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r1,sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(theta1)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r1,sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(theta1)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r2,sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(theta2)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r2,sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(theta2)));
});
/**
 * Returns a [[Quaternion]] `q` with [[real-part]] equal to `t` and
 *   the [[three-vector]] part built from the spherical coordinates `r`, `colat`
 *   and `lon`.
 */
sicmutils.quaternion.cylindrospherical = (function sicmutils$quaternion$cylindrospherical(t,r,theta,phi){
var r_STAR_sin_theta = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r,sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(theta));
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$4(t,sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r_STAR_sin_theta,sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(phi)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r_STAR_sin_theta,sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(phi)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r,sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(theta)));
});
/**
 * Returns a [[Quaternion]] `q` with [[complex-1]] built from the polar
 *   coordinates `mag` and `angle`, and `j` and `k` components equal to the
 *   supplied `j` and `k`.
 */
sicmutils.quaternion.cylindrical = (function sicmutils$quaternion$cylindrical(mag,angle,j,k){
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$4(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(mag,sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(angle)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(mag,sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(angle)),j,k);
});
/**
 * Given a quaternion `q` with function coefficients, returns an arity compatible
 *   with all function coefficient entries.
 * 
 *   NOTE that by default, if any arities are incompatible, the function will
 *   return `[:at-least 0]`. To force strict arity checks,
 *   bind [[sicmutils.function/*strict-arity-checks*]] to `true`.
 */
sicmutils.quaternion.arity = (function sicmutils$quaternion$arity(q){
return sicmutils.function$.seq_arity(sicmutils.quaternion.__GT_vector(q));
});
/**
 * Given a quaternion `q` with function coefficients and a sequence `args` of
 *   arguments, and returns a new [[Quaternion]] generated by replacing each
 *   coefficient with the result of applying the (functional) coefficient to
 *   `args`.
 */
sicmutils.quaternion.evaluate = (function sicmutils$quaternion$evaluate(q,args){
return sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_r(q),args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_i(q),args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_j(q),args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_k(q),args));
});
/**
 * Given a quaternion `q` with function coefficients and a possibly-empty sequence
 *   of partial derivative `selectors`, returns a new [[Quaternion]] generated by
 *   replacing each (functional) coefficient with its derivative with respect to
 *   `selectors`.
 */
sicmutils.quaternion.partial_derivative = (function sicmutils$quaternion$partial_derivative(q,selectors){
return sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4(sicmutils.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_r(q),selectors),sicmutils.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_i(q),selectors),sicmutils.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_j(q),selectors),sicmutils.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_k(q),selectors));
});
/**
 * Variadic function that returns the sum of all supplied quaternions.
 * 
 *   Given 1 argument `q`, acts as identity. Given no arguments, returns [[ZERO]],
 *   the additive identity.
 * 
 *   The sum of two or more quaternions is a new quaternion with coefficients equal
 *   to the elementwise sum of the coefficients of all supplied quaternions.
 */
sicmutils.quaternion.add = (function sicmutils$quaternion$add(var_args){
var G__103282 = arguments.length;
switch (G__103282) {
case 0:
return sicmutils.quaternion.add.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sicmutils.quaternion.add.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.quaternion.add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___103593 = arguments.length;
var i__4865__auto___103594 = (0);
while(true){
if((i__4865__auto___103594 < len__4864__auto___103593)){
args_arr__4885__auto__.push((arguments[i__4865__auto___103594]));

var G__103595 = (i__4865__auto___103594 + (1));
i__4865__auto___103594 = G__103595;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return sicmutils.quaternion.add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(sicmutils.quaternion.add.cljs$core$IFn$_invoke$arity$0 = (function (){
return sicmutils.quaternion.ZERO;
}));

(sicmutils.quaternion.add.cljs$core$IFn$_invoke$arity$1 = (function (q){
return q;
}));

(sicmutils.quaternion.add.cljs$core$IFn$_invoke$arity$2 = (function (q1,q2){
return sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_r(q1),sicmutils.quaternion.get_r(q2)),sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_i(q1),sicmutils.quaternion.get_i(q2)),sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_j(q1),sicmutils.quaternion.get_j(q2)),sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_k(q1),sicmutils.quaternion.get_k(q2)));
}));

(sicmutils.quaternion.add.cljs$core$IFn$_invoke$arity$variadic = (function (q1,q2,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(sicmutils.quaternion.add,sicmutils.quaternion.add.cljs$core$IFn$_invoke$arity$2(q1,q2),more);
}));

/** @this {Function} */
(sicmutils.quaternion.add.cljs$lang$applyTo = (function (seq103279){
var G__103280 = cljs.core.first(seq103279);
var seq103279__$1 = cljs.core.next(seq103279);
var G__103281 = cljs.core.first(seq103279__$1);
var seq103279__$2 = cljs.core.next(seq103279__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103280,G__103281,seq103279__$2);
}));

(sicmutils.quaternion.add.cljs$lang$maxFixedArity = (2));

/**
 * Returns the quaternion result of adding scalar `s` to the real part of
 *   quaternion `q`. Addition occurs with scalar `s` on the left.
 * 
 *   See [[quaternion+scalar]] for right addition.
 */
sicmutils.quaternion.scalar_PLUS_quaternion = (function sicmutils$quaternion$scalar_PLUS_quaternion(s,q){
return sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(s,sicmutils.quaternion.get_r(q)),sicmutils.quaternion.get_i(q),sicmutils.quaternion.get_j(q),sicmutils.quaternion.get_k(q));
});
/**
 * Returns the quaternion result of adding scalar `s` to the real part of
 *   quaternion `q`. Addition occurs with scalar `s` on the right.
 * 
 *   See [[scalar+quaternion]] for left addition.
 */
sicmutils.quaternion.quaternion_PLUS_scalar = (function sicmutils$quaternion$quaternion_PLUS_scalar(q,s){
return sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_r(q),s),sicmutils.quaternion.get_i(q),sicmutils.quaternion.get_j(q),sicmutils.quaternion.get_k(q));
});
/**
 * Returns the negation (additive inverse) of the supplied quaternion `q`.
 * 
 *   The additive inverse of a quaternion is a new quaternion that, when [[add]]ed
 *   to `q`, will produce the [[ZERO]] quaternion (the additive identity).
 */
sicmutils.quaternion.negate = (function sicmutils$quaternion$negate(q){
return sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4(sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.get_r(q)),sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.get_i(q)),sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.get_j(q)),sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.get_k(q)));
});
/**
 * Variadic function for subtracting quaternion arguments.
 * 
 *   - Given no arguments, returns [[ZERO]], the additive identity.
 *   - Given 1 argument `q`, acts as identity.
 *   - Given 2 arguments, returns the difference of quaternions `q1` and `q2`.
 *   - Given more than 2 arguments, returns the difference of the first quaternion
 *  `q1` with the sum of all remaining arguments.
 * 
 *   The difference of two quaternions is a new quaternion with coefficients equal
 *   to the pairwise difference of the coefficients of `q1` and `q2`.
 */
sicmutils.quaternion.sub = (function sicmutils$quaternion$sub(var_args){
var G__103301 = arguments.length;
switch (G__103301) {
case 0:
return sicmutils.quaternion.sub.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sicmutils.quaternion.sub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.quaternion.sub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___103599 = arguments.length;
var i__4865__auto___103600 = (0);
while(true){
if((i__4865__auto___103600 < len__4864__auto___103599)){
args_arr__4885__auto__.push((arguments[i__4865__auto___103600]));

var G__103601 = (i__4865__auto___103600 + (1));
i__4865__auto___103600 = G__103601;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return sicmutils.quaternion.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(sicmutils.quaternion.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return sicmutils.quaternion.ZERO;
}));

(sicmutils.quaternion.sub.cljs$core$IFn$_invoke$arity$1 = (function (q){
return sicmutils.quaternion.negate(q);
}));

(sicmutils.quaternion.sub.cljs$core$IFn$_invoke$arity$2 = (function (q1,q2){
return sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_r(q1),sicmutils.quaternion.get_r(q2)),sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_i(q1),sicmutils.quaternion.get_i(q2)),sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_j(q1),sicmutils.quaternion.get_j(q2)),sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_k(q1),sicmutils.quaternion.get_k(q2)));
}));

(sicmutils.quaternion.sub.cljs$core$IFn$_invoke$arity$variadic = (function (q1,q2,more){
return sicmutils.quaternion.sub.cljs$core$IFn$_invoke$arity$2(q1,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sicmutils.quaternion.add,q2,more));
}));

/** @this {Function} */
(sicmutils.quaternion.sub.cljs$lang$applyTo = (function (seq103298){
var G__103299 = cljs.core.first(seq103298);
var seq103298__$1 = cljs.core.next(seq103298);
var G__103300 = cljs.core.first(seq103298__$1);
var seq103298__$2 = cljs.core.next(seq103298__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103299,G__103300,seq103298__$2);
}));

(sicmutils.quaternion.sub.cljs$lang$maxFixedArity = (2));

/**
 * Returns the quaternion result of subtracting `s` from the real part of
 *   quaternion `q` and negating all imaginary entries.
 * 
 *   See [[quaternion-scalar]] for a similar function with arguments reversed.
 */
sicmutils.quaternion.scalar_quaternion = (function sicmutils$quaternion$scalar_quaternion(s,q){
return sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(s,sicmutils.quaternion.get_r(q)),sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.get_i(q)),sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.get_j(q)),sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.get_k(q)));
});
/**
 * Returns the quaternion result of subtracting `s` from the real part of
 *   quaternion `q` and negating all imaginary entries.
 * 
 *   See [[quaternion-scalar]] for a similar function with arguments reversed.
 */
sicmutils.quaternion.quaternion_scalar = (function sicmutils$quaternion$quaternion_scalar(q,s){
return sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_r(q),s),sicmutils.quaternion.get_i(q),sicmutils.quaternion.get_j(q),sicmutils.quaternion.get_k(q));
});
/**
 * Variadic function that returns the product of all supplied quaternions.
 * 
 *   Given 1 argument `q`, acts as identity. Given no arguments, returns [[ONE]],
 *   the multiplicative identity.
 * 
 *   The product of two or more quaternions is a new quaternion generated by
 *   multiplying together each quaternion of the form `(r+ai+bj+ck)`, respecting
 *   the quaternion rules:
 * 
 *   i^2 == j^2 == k^2 == -1
 *   ijk == -1,
 *   ij  == k,  jk == i,  ki == j
 *   ji  == -k, kj == -i, ik == -j
 */
sicmutils.quaternion.mul = (function sicmutils$quaternion$mul(var_args){
var G__103306 = arguments.length;
switch (G__103306) {
case 0:
return sicmutils.quaternion.mul.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sicmutils.quaternion.mul.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.quaternion.mul.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___103607 = arguments.length;
var i__4865__auto___103608 = (0);
while(true){
if((i__4865__auto___103608 < len__4864__auto___103607)){
args_arr__4885__auto__.push((arguments[i__4865__auto___103608]));

var G__103609 = (i__4865__auto___103608 + (1));
i__4865__auto___103608 = G__103609;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return sicmutils.quaternion.mul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(sicmutils.quaternion.mul.cljs$core$IFn$_invoke$arity$0 = (function (){
return sicmutils.quaternion.ONE;
}));

(sicmutils.quaternion.mul.cljs$core$IFn$_invoke$arity$1 = (function (q){
return q;
}));

(sicmutils.quaternion.mul.cljs$core$IFn$_invoke$arity$2 = (function (q1,q2){
var r1 = sicmutils.quaternion.get_r(q1);
var i1 = sicmutils.quaternion.get_i(q1);
var j1 = sicmutils.quaternion.get_j(q1);
var k1 = sicmutils.quaternion.get_k(q1);
var r2 = sicmutils.quaternion.get_r(q2);
var i2 = sicmutils.quaternion.get_i(q2);
var j2 = sicmutils.quaternion.get_j(q2);
var k2 = sicmutils.quaternion.get_k(q2);
return sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r1,r2),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(i1,i2),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(j1,j2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(k1,k2)], 0))),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r1,i2),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(i1,r2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(j1,k2),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((-1),k1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([j2], 0))], 0)),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r1,j2),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((-1),i1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k2], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(j1,r2),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(k1,i2)], 0)),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r1,k2),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(i1,j2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((-1),j1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i2], 0)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(k1,r2)], 0)));
}));

(sicmutils.quaternion.mul.cljs$core$IFn$_invoke$arity$variadic = (function (q1,q2,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(sicmutils.quaternion.mul,sicmutils.quaternion.mul.cljs$core$IFn$_invoke$arity$2(q1,q2),more);
}));

/** @this {Function} */
(sicmutils.quaternion.mul.cljs$lang$applyTo = (function (seq103303){
var G__103304 = cljs.core.first(seq103303);
var seq103303__$1 = cljs.core.next(seq103303);
var G__103305 = cljs.core.first(seq103303__$1);
var seq103303__$2 = cljs.core.next(seq103303__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103304,G__103305,seq103303__$2);
}));

(sicmutils.quaternion.mul.cljs$lang$maxFixedArity = (2));

/**
 * Returns a new quaternion generated by multiplying each coefficient of the
 *   supplied quaternion `q` by the supplied scalar `s` on the left.
 */
sicmutils.quaternion.scale_l = (function sicmutils$quaternion$scale_l(s,q){
return sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s,sicmutils.quaternion.get_r(q)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s,sicmutils.quaternion.get_i(q)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s,sicmutils.quaternion.get_j(q)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s,sicmutils.quaternion.get_k(q)));
});
/**
 * Returns a new quaternion generated by multiplying each coefficient of the
 *   supplied quaternion `q` by the supplied scalar `s` on the right.
 */
sicmutils.quaternion.scale = (function sicmutils$quaternion$scale(q,s){
return sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_r(q),s),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_i(q),s),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_j(q),s),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_k(q),s));
});
/**
 * Returns the conjugate of the supplied quaternion `q`.
 * 
 *   The conjugate of a quaternion is a new quaternion with real coefficient equal
 *   to that of `q` and each imaginary coefficient negated. `(mul q (conjugate q))`
 *   will return a [[real?]] quaternion.
 */
sicmutils.quaternion.conjugate = (function sicmutils$quaternion$conjugate(q){
return sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4(sicmutils.quaternion.get_r(q),sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.get_i(q)),sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.get_j(q)),sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.get_k(q)));
});
/**
 * Returns a new quaternion generated by dividing each coefficient of the supplied
 *   quaternion `q` by the supplied scalar `s`.
 */
sicmutils.quaternion.q_div_scalar = (function sicmutils$quaternion$q_div_scalar(q,s){
return sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_r(q),s),sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_i(q),s),sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_j(q),s),sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_k(q),s));
});
/**
 * Returns the quaternion dot product of the supplied quaternions `l` and `r`.
 * 
 *   The quaternion dot product is the sum of the products of the corresponding
 *   coefficients of each quaternion, equal to
 * 
 *   $$r_l * r_r + i_l * i_r + j_l * j_r + k_l * k_r$$
 */
sicmutils.quaternion.dot_product = (function sicmutils$quaternion$dot_product(l,r){
var vec__103310 = l;
var lr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103310,(0),null);
var li = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103310,(1),null);
var lj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103310,(2),null);
var lk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103310,(3),null);
var vec__103313 = r;
var rr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103313,(0),null);
var ri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103313,(1),null);
var rj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103313,(2),null);
var rk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103313,(3),null);
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(lr,rr),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(li,ri),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(lj,rj),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(lk,rk)], 0));
});
/**
 * Returns a quaternion representing the (vector) cross product of the two pure
 *   sides (retrieved via [[three-vector]]) of the supplied quaternions `l` and
 *   `r`.
 * 
 *   NOTE that the suggestion for this function comes from this [C++ quaternion
 *   library](https://github.com/ferd36/quaternions/blob/master/include/quaternion.h#L1109).
 *   Strictly, this is not the 'cross product of two quaternions'.
 */
sicmutils.quaternion.cross_product = (function sicmutils$quaternion$cross_product(l,r){
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$2((0),sicmutils.structure.cross_product(sicmutils.quaternion.three_vector(l),sicmutils.quaternion.three_vector(r)));
});
/**
 * Returns the multiplicative inverse of the supplied quaternion `q`.
 * 
 *   The inverse of a quaternion is a new quaternion that, when [[mul]]tiplied by
 *   `q`, will produce the [[ONE]] quaternion (the multiplicative identity).
 */
sicmutils.quaternion.invert = (function sicmutils$quaternion$invert(q){
return sicmutils.quaternion.q_div_scalar(sicmutils.quaternion.conjugate(q),(sicmutils.quaternion.magnitude_sq.cljs$core$IFn$_invoke$arity$1 ? sicmutils.quaternion.magnitude_sq.cljs$core$IFn$_invoke$arity$1(q) : sicmutils.quaternion.magnitude_sq.call(null,q)));
});
/**
 * Variadic function for dividing quaternion arguments.
 * 
 *   - Given no arguments, returns [[ONE]], the multiplicative identity.
 *   - Given 1 argument `q`, acts as identity.
 *   - Given 2 arguments, returns the quotient of quaternions `q1` and `q2`.
 *   - Given more than 2 arguments, returns the quotient of the first quaternion
 *  `q1` with the product of all remaining arguments.
 * 
 *   The quotient of two quaternions is a new quaternion equal to the product of
 *   `q1` and the multiplicative inverse of `q2`
 */
sicmutils.quaternion.div = (function sicmutils$quaternion$div(var_args){
var G__103320 = arguments.length;
switch (G__103320) {
case 0:
return sicmutils.quaternion.div.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sicmutils.quaternion.div.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.quaternion.div.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___103633 = arguments.length;
var i__4865__auto___103634 = (0);
while(true){
if((i__4865__auto___103634 < len__4864__auto___103633)){
args_arr__4885__auto__.push((arguments[i__4865__auto___103634]));

var G__103635 = (i__4865__auto___103634 + (1));
i__4865__auto___103634 = G__103635;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return sicmutils.quaternion.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(sicmutils.quaternion.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return sicmutils.quaternion.ONE;
}));

(sicmutils.quaternion.div.cljs$core$IFn$_invoke$arity$1 = (function (q){
return sicmutils.quaternion.invert(q);
}));

(sicmutils.quaternion.div.cljs$core$IFn$_invoke$arity$2 = (function (q1,q2){
return sicmutils.quaternion.mul.cljs$core$IFn$_invoke$arity$2(q1,sicmutils.quaternion.invert(q2));
}));

(sicmutils.quaternion.div.cljs$core$IFn$_invoke$arity$variadic = (function (q1,q2,more){
return sicmutils.quaternion.div.cljs$core$IFn$_invoke$arity$2(q1,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sicmutils.quaternion.mul,q2,more));
}));

/** @this {Function} */
(sicmutils.quaternion.div.cljs$lang$applyTo = (function (seq103317){
var G__103318 = cljs.core.first(seq103317);
var seq103317__$1 = cljs.core.next(seq103317);
var G__103319 = cljs.core.first(seq103317__$1);
var seq103317__$2 = cljs.core.next(seq103317__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103318,G__103319,seq103317__$2);
}));

(sicmutils.quaternion.div.cljs$lang$maxFixedArity = (2));

/**
 * Returns the square of the [[magnitude]] of the supplied quaternion `q`,
 *   equivalent to taking the [[dot-product]] of `q` with itself.
 */
sicmutils.quaternion.magnitude_sq = (function sicmutils$quaternion$magnitude_sq(q){
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.get_r(q)),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.get_i(q)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.get_j(q)),sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.get_k(q))], 0));
});
/**
 * Returns the norm of the supplied quaternion `q`.
 * 
 *   The norm of a quaternion is the square root of the sum of the squares of the
 *   quaternion's coefficients.
 */
sicmutils.quaternion.magnitude = (function sicmutils$quaternion$magnitude(q){
return sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.magnitude_sq(q));
});
/**
 * Returns a new quaternion generated by dividing each coefficient of the supplied
 *   quaternion `q` by the [[magnitude]] of `q`. (If the [[magnitude]]
 *   is [[zero?]], returns the zero quaternion `q`.)
 * 
 *   The returned quaternion will have [[magnitude]] (approximately) equal to
 *   1. [[unit?]] will return true for a [[normalize]]d quaternion, though you may
 *   need to supply an `:epsilon`.
 */
sicmutils.quaternion.normalize = (function sicmutils$quaternion$normalize(q){
if(sicmutils.quaternion.zero_QMARK_(q)){
return q;
} else {
return sicmutils.quaternion.q_div_scalar(q,sicmutils.quaternion.magnitude(q));
}
});
/**
 * Returns the commutator of the supplied quaternions `l` and `r`.
 * 
 *   The commutator of two quaternions is equal to
 * 
 *   ```clj
 *   (- (* l r) (* r l))
 *   ```
 */
sicmutils.quaternion.commutator = (function sicmutils$quaternion$commutator(l,r){
return sicmutils.quaternion.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.mul.cljs$core$IFn$_invoke$arity$2(l,r),sicmutils.quaternion.mul.cljs$core$IFn$_invoke$arity$2(r,l));
});
/**
 * Returns the logarithm $\ln q$ of the supplied quaternion `q`.
 * 
 *   Given a quaternion $q$ with real part $r$ and non-real vector $\vec{v}$, the
 *   logarithm [is computed
 *   as](https://en.wikipedia.org/wiki/Quaternion#Exponential,_logarithm,_and_power_functions)
 * 
 *   $$
 *   \ln(q) = \ln \|q\| + \frac{\mathbf{v}}{\|\mathbf{v}\|} \
 *   \arccos \frac{r}{\|\q\|}
 *   $$
 */
sicmutils.quaternion.log = (function sicmutils$quaternion$log(q){
var vec__103324 = q;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103324,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103324,(1),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103324,(2),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103324,(3),null);
if(((sicmutils.value.zero_QMARK_(j)) && (sicmutils.value.zero_QMARK_(k)))){
if(sicmutils.value.zero_QMARK_(i)){
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.log.cljs$core$IFn$_invoke$arity$1(r));
} else {
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$4(sicmutils.generic.log.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,i], null))),sicmutils.generic.atan.cljs$core$IFn$_invoke$arity$2(i,r),(0),(0));
}
} else {
var q_mag = sicmutils.quaternion.magnitude(q);
var v = sicmutils.quaternion.three_vector(q);
var v_mag = sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(v);
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.log.cljs$core$IFn$_invoke$arity$1(q_mag),sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.acos.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(r,q_mag)),sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(v,v_mag)));
}
});
/**
 * Returns the exponential $e^q$ of the supplied quaternion `q`.
 * 
 *   Given a quaternion $q$ with real part $r$ and non-real vector $\vec{v}$, the
 *   exponential [is computed
 *   as](https://en.wikipedia.org/wiki/Quaternion#Exponential,_logarithm,_and_power_functions)
 * 
 *   $$
 *   \exp(q) = e^r \left(\cos \|\mathbf{v}\| \
 *   + \frac{\mathbf{v}}{\|\mathbf{v}\|} \sin\|\mathbf{v}\| \right)
 *   $$
 */
sicmutils.quaternion.exp = (function sicmutils$quaternion$exp(q){
var r = sicmutils.quaternion.real_part(q);
var exp_r = sicmutils.generic.exp.cljs$core$IFn$_invoke$arity$1(r);
var v = sicmutils.quaternion.three_vector(q);
var v_mag = sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(v);
if(sicmutils.value.zero_QMARK_(v_mag)){
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$4(exp_r,(0),(0),(0));
} else {
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(exp_r,sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(v_mag)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(exp_r,sicmutils.generic.sinc.cljs$core$IFn$_invoke$arity$1(v_mag),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
}
});
/**
 * Returns the cosine of the supplied quaternion `q`.
 * 
 *   See the [Boost
 *   documentation](https://www.boost.org/doc/libs/1_78_0/libs/math/doc/html/math_toolkit/trans.html)
 *   and [source](https://www.boost.org/doc/libs/1_78_0/boost/math/quaternion.hpp)
 *   for a reference implementation.
 */
sicmutils.quaternion.cos = (function sicmutils$quaternion$cos(q){
var r = sicmutils.quaternion.real_part(q);
var v = sicmutils.quaternion.three_vector(q);
var v_mag = sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(v);
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(r),sicmutils.generic.cosh.cljs$core$IFn$_invoke$arity$1(v_mag)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(r)),sicmutils.generic.sinhc.cljs$core$IFn$_invoke$arity$1(v_mag)),v));
});
/**
 * Returns the sine of the supplied quaternion `q`.
 * 
 *   See the [Boost
 *   documentation](https://www.boost.org/doc/libs/1_78_0/libs/math/doc/html/math_toolkit/trans.html)
 *   and [source](https://www.boost.org/doc/libs/1_78_0/boost/math/quaternion.hpp)
 *   for a reference implementation.
 */
sicmutils.quaternion.sin = (function sicmutils$quaternion$sin(q){
var r = sicmutils.quaternion.real_part(q);
var v = sicmutils.quaternion.three_vector(q);
var v_mag = sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(v);
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(r),sicmutils.generic.cosh.cljs$core$IFn$_invoke$arity$1(v_mag)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(r),sicmutils.generic.sinhc.cljs$core$IFn$_invoke$arity$1(v_mag)),v));
});
/**
 * Returns the tangent of the supplied quaternion `q`.
 * 
 *   [[tan]] is defined as `(/ (sin q) (cos q))`.
 */
sicmutils.quaternion.tan = (function sicmutils$quaternion$tan(q){
return sicmutils.quaternion.div.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.sin(q),sicmutils.quaternion.cos(q));
});
/**
 * Returns the hyperbolic cosine of the supplied quaternion `q`.
 * 
 *   [[cosh]] is defined in terms of the [[exp]] function as `(e^q + e^{-q}) / 2`.
 */
sicmutils.quaternion.cosh = (function sicmutils$quaternion$cosh(q){
return sicmutils.quaternion.q_div_scalar(sicmutils.quaternion.add.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.exp(q),sicmutils.quaternion.exp(sicmutils.quaternion.negate(q))),(2));
});
/**
 * Returns the hyperbolic sine of the supplied quaternion `q`.
 * 
 *   [[sinh]] is defined in terms of the [[exp]] function as `(e^q - e^{-q}) / 2`.
 */
sicmutils.quaternion.sinh = (function sicmutils$quaternion$sinh(q){
return sicmutils.quaternion.q_div_scalar(sicmutils.quaternion.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.exp(q),sicmutils.quaternion.exp(sicmutils.quaternion.negate(q))),(2));
});
/**
 * Returns the hyperbolic tangent of the supplied quaternion `q`.
 * 
 *   [[tan]] is defined as `(/ (sinh q) (cosh q))`.
 */
sicmutils.quaternion.tanh = (function sicmutils$quaternion$tanh(q){
return sicmutils.quaternion.div.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.sinh(q),sicmutils.quaternion.cosh(q));
});
/**
 * Returns the result of raising quaternion `q` to the real, complex or quaternion
 *   power `p`.
 */
sicmutils.quaternion.expt = (function sicmutils$quaternion$expt(q,p){
if(sicmutils.value.native_integral_QMARK_(p)){
return sicmutils.generic.default_expt(q,p);
} else {
return sicmutils.quaternion.exp(((sicmutils.quaternion.quaternion_QMARK_(p))?sicmutils.quaternion.mul.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.log(q),p):sicmutils.quaternion.scale(sicmutils.quaternion.log(q),p)));
}
});
/**
 * Returns the square root of the supplied quaternion `q`.
 * 
 *   `([[sqrt]] q)` is identical to, but more efficient than, raising `q` to the
 *   1/2 power.
 * 
 *   Thanks to the [Spire
 *   library](https://github.com/typelevel/spire/blob/82f607714f94ba1c70b13fd4751063dfdcd155f5/core/src/main/scala/spire/math/Quaternion.scala#L217)
 *   for the correct implementation used here.
 */
sicmutils.quaternion.sqrt = (function sicmutils$quaternion$sqrt(q){
var r = sicmutils.quaternion.get_r(q);
if(sicmutils.quaternion.real_QMARK_(q)){
if(cljs.core.truth_(sicmutils.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(r))){
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$4((0),sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(r)),(0),(0));
} else {
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$4(sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(r),(0),(0),(0));
}
} else {
var n = sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(r,sicmutils.quaternion.magnitude(q)));
var rt2 = sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1((2));
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(n,rt2),sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.three_vector(q),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(n,rt2)));
}
});
/**
 * Returns a [[Quaternion]] that represents a rotation of `angle` radians around
 *   the unit (normalized) vector described by the second argument, a 3-vector with
 *   components `x`, `y` and `z`.
 * 
 *   The second argument represents an axis of rotation.
 * 
 *   NOTE: If you have an UN-normalized axis, prefer [[from-angle-axis]].
 */
sicmutils.quaternion.from_angle_normal_axis = (function sicmutils$quaternion$from_angle_normal_axis(angle,p__103327){
var vec__103328 = p__103327;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103328,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103328,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103328,(2),null);
var half_angle = sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(angle,(2));
var half_sine = sicmutils.generic.sin.cljs$core$IFn$_invoke$arity$1(half_angle);
return sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4(sicmutils.generic.cos.cljs$core$IFn$_invoke$arity$1(half_angle),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(half_sine,x),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(half_sine,y),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(half_sine,z));
});
/**
 * Returns a [[Quaternion]] that represents a rotation of `angle` radians around a
 *   normalized version of the vector described by `axis`. `axis` must be a
 *   3-vector with components `x`, `y` and `z`.
 * 
 *   Given an `axis` with numeric entries, [[from-angle-axis]] will explicitly
 *   normalize `axis` before calling [[from-angle-normal-axis]]. If any entries are
 *   non-numerical (ie, symbolic), [[from-angle-axis]] will instead log an
 *   assumption that the magnitude of `axis` == 1 and proceed.
 * 
 *   NOTE: If you have an already-normalized axis,
 *   prefer [[from-angle-normal-axis]].
 */
sicmutils.quaternion.from_angle_axis = (function sicmutils$quaternion$from_angle_axis(angle,axis){
if(cljs.core.every_QMARK_(sicmutils.value.number_QMARK_,axis)){
var v_mag = sicmutils.generic.abs.cljs$core$IFn$_invoke$arity$1(axis);
var normal = sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(axis,v_mag);
return sicmutils.quaternion.from_angle_normal_axis(angle,normal);
} else {
var vv = sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(sicmutils.structure.vector_dot_product(axis,axis));
var and__4251__auto__ = sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),(new cljs.core.List(null,vv,(new cljs.core.List(null,(1),null,(1),null)),(2),null)),(3),null)),new cljs.core.Symbol(null,"from-angle-axis","from-angle-axis",770100623,null));
if(cljs.core.truth_(and__4251__auto__)){
return sicmutils.quaternion.from_angle_normal_axis(angle,axis);
} else {
return and__4251__auto__;
}
}
});
/**
 * Create a quaternion representing a pitch rotation by the supplied
 *   `angle` (specified in radians).
 */
sicmutils.quaternion.pitch = (function sicmutils$quaternion$pitch(angle){
return sicmutils.quaternion.from_angle_normal_axis(angle,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null));
});
/**
 * Create a quaternion representing a yaw rotation by the supplied
 *   `angle` (specified in radians).
 */
sicmutils.quaternion.yaw = (function sicmutils$quaternion$yaw(angle){
return sicmutils.quaternion.from_angle_normal_axis(angle,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null));
});
/**
 * Create a quaternion representing a roll rotation by the supplied
 *   `angle` (specified in radians).
 */
sicmutils.quaternion.roll = (function sicmutils$quaternion$roll(angle){
return sicmutils.quaternion.from_angle_normal_axis(angle,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null));
});
/**
 * Tolerance setting for [[->angle-axis]].
 */
sicmutils.quaternion._STAR_angle_axis_tolerance_STAR_ = 1.0E-8;
/**
 * Given a unit quaternion `q` [representing a spatial
 *   rotation](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation) (sometimes
 *   called a 'versor'), returns a pair of
 * 
 *   - `theta`, the rotation in radians about the rotation axis
 *   - `axis`, a 3-element unit vector with elements `x`, `y` and `z` representing
 *  an axis of rotation in 3d Euclidean space.
 * 
 *   If the unit quaternion `q` represents NO rotation, the axis is undefined; this
 *   manifests as the squared norm of the non-real vector part of `q` sitting
 *   within [[*angle-axis-tolerance*]] of 0.
 * 
 *   In this case, the conversion is degenerate and [[->angle-axis]] returns the
 *   pair [0 [1 0 0]] as a default. (This check only occurs with a quaternion with
 *   all numeric elements in the non-real positions.)
 */
sicmutils.quaternion.__GT_angle_axis = (function sicmutils$quaternion$__GT_angle_axis(q){
if(sicmutils.quaternion.quaternion_QMARK_(q)){
} else {
throw (new Error("Assert failed: (quaternion? q)"));
}

var v = sicmutils.quaternion.three_vector(q);
var vv = sicmutils.structure.vector_dot_product(v,v);
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.every_QMARK_(sicmutils.value.number_QMARK_,v);
if(and__4251__auto__){
return sicmutils.value.within(sicmutils.quaternion._STAR_angle_axis_tolerance_STAR_)(0.0,vv);
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null)], null);
} else {
var v_mag = sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(vv);
var theta = sicmutils.generic.mul.cljs$core$IFn$_invoke$arity$2((2),sicmutils.generic.atan.cljs$core$IFn$_invoke$arity$2(v_mag,sicmutils.quaternion.real_part(q)));
var axis = sicmutils.generic.div.cljs$core$IFn$_invoke$arity$2(v,v_mag);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [theta,axis], null);
}
});
/**
 * Given a 2x2 complex matrix `M` of the form
 * 
 *   ```
 *   [ a + b i,  c + d i]
 *   [ -c + d i, a - b i]
 *   ```
 * 
 *   Returns a [[Quaternion]] instance with coefficients `[a b c d]`.
 */
sicmutils.quaternion.from_complex_matrix = (function sicmutils$quaternion$from_complex_matrix(M){
var vec__103341 = sicmutils.matrix.matrix__GT_vector(M);
var vec__103344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103341,(0),null);
var a_PLUS_bi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103344,(0),null);
var c_PLUS_di = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103344,(1),null);
return sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$4(sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1(a_PLUS_bi),sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1(a_PLUS_bi),sicmutils.generic.real_part.cljs$core$IFn$_invoke$arity$1(c_PLUS_di),sicmutils.generic.imag_part.cljs$core$IFn$_invoke$arity$1(c_PLUS_di));
});
/**
 * Returns a 2x2 complex matrix representation of the supplied Quaternion `q`.
 * 
 *   For a quaternion with coefficients `[a b c d]`, the returned matrix will have
 *   the following form:
 * 
 *   ```
 *   [ a + b i,  c + d i]
 *   [ -c + d i, a - b i]
 *   ```
 * 
 *   NOTE that this currently only works for quaternions `q` with real or symbolic
 *   entries.
 */
sicmutils.quaternion.__GT_complex_matrix = (function sicmutils$quaternion$__GT_complex_matrix(q){
var vec__103349 = q;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103349,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103349,(1),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103349,(2),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103349,(3),null);
return sicmutils.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.make_rectangular.cljs$core$IFn$_invoke$arity$2(r,i),sicmutils.generic.make_rectangular.cljs$core$IFn$_invoke$arity$2(j,k)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.make_rectangular.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(j),k),sicmutils.generic.make_rectangular.cljs$core$IFn$_invoke$arity$2(r,sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(i))], null)], 0));
});
/**
 * 4x4 matrix representation of the quaternion [[ONE]].
 */
sicmutils.quaternion.ONE_matrix = sicmutils.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null)], 0));
/**
 * 4x4 matrix representation of the quaternion [[I]].
 */
sicmutils.quaternion.I_matrix = sicmutils.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(-1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0)], null)], 0));
/**
 * 4x4 matrix representation of the quaternion [[J]].
 */
sicmutils.quaternion.J_matrix = sicmutils.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1),(0),(0)], null)], 0));
/**
 * 4x4 matrix representation of the quaternion [[K]].
 */
sicmutils.quaternion.K_matrix = sicmutils.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(0),(0)], null)], 0));
/**
 * Given a 4x4 matrix representation of a quaternion, returns the associated
 *   quaternion by extracting the first row.
 */
sicmutils.quaternion.from_4x4_matrix = (function sicmutils$quaternion$from_4x4_matrix(four_matrix){
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(four_matrix,(0)));
});
/**
 * Returns the 4x4 matrix representation of the supplied [[Quaternion]] `q`.
 */
sicmutils.quaternion.__GT_4x4_matrix = (function sicmutils$quaternion$__GT_4x4_matrix(q){
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_r(q),sicmutils.quaternion.ONE_matrix),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_i(q),sicmutils.quaternion.I_matrix),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_j(q),sicmutils.quaternion.J_matrix),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_k(q),sicmutils.quaternion.K_matrix)], 0));
});
/**
 * 4x4 down-up tensor representation of the quaternion [[ONE]].
 */
sicmutils.quaternion.ONE_tensor = sicmutils.matrix.__GT_structure.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.ONE_matrix);
/**
 * 4x4 down-up tensor representation of the quaternion [[I]].
 */
sicmutils.quaternion.I_tensor = sicmutils.matrix.__GT_structure.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.I_matrix);
/**
 * 4x4 down-up tensor representation of the quaternion [[J]].
 */
sicmutils.quaternion.J_tensor = sicmutils.matrix.__GT_structure.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.J_matrix);
/**
 * 4x4 down-up tensor representation of the quaternion [[K]].
 */
sicmutils.quaternion.K_tensor = sicmutils.matrix.__GT_structure.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.K_matrix);
sicmutils.quaternion.quarter = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(4));
/**
 * Given an orthogonal 3x3 matrix M representing a rotation in 3-space, returns
 *   the unit quaternion that corresponds to the same transformation.
 * 
 *   GJS notes in scmutils that this algorithm is the 'expanded Matt Mason method'.
 * 
 *   NOTE Orthogonal means, no stretching allowed, only rotation!
 * 
 *   NOTE this routine uses non-generic [[clojure.core/>=]]
 *   and [[clojure.core/max]] internally, so if you use numeric entries (or if your
 *   entries simplify down to numbers), make sure that they work with these native
 *   operations. No `BigInt` in Clojurescript for now, for example.
 */
sicmutils.quaternion.from_rotation_matrix = (function sicmutils$quaternion$from_rotation_matrix(M){
var vec__103375 = M;
var vec__103378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103375,(0),null);
var r11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103378,(0),null);
var r12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103378,(1),null);
var r13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103378,(2),null);
var vec__103381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103375,(1),null);
var r21 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103381,(0),null);
var r22 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103381,(1),null);
var r23 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103381,(2),null);
var vec__103384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103375,(2),null);
var r31 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103384,(0),null);
var r32 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103384,(1),null);
var r33 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103384,(2),null);
var q0_2 = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.quarter,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((1),r11,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r22,r33], 0)));
var q1_2 = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.quarter,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((1),r11,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(r22),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(r33)], 0)));
var q2_2 = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.quarter,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((1),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(r11),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r22,sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(r33)], 0)));
var q3_2 = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.quarter,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((1),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(r11),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(r22),r33], 0)));
var q0q1 = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.quarter,sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(r32,r23));
var q0q2 = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.quarter,sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(r13,r31));
var q0q3 = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.quarter,sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(r21,r12));
var q1q2 = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.quarter,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(r12,r21));
var q1q3 = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.quarter,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(r13,r31));
var q2q3 = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.quarter,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(r23,r32));
var q0_2s = sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(q0_2);
var q1_2s = sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(q1_2);
var q2_2s = sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(q2_2);
var q3_2s = sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(q3_2);
if(((sicmutils.value.number_QMARK_(q0_2s)) && (((sicmutils.value.number_QMARK_(q1_2s)) && (((sicmutils.value.number_QMARK_(q2_2s)) && (sicmutils.value.number_QMARK_(q3_2s)))))))){
if((q0_2s >= (function (){var x__4336__auto__ = (function (){var x__4336__auto__ = q1_2s;
var y__4337__auto__ = q2_2s;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var y__4337__auto__ = q3_2s;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})())){
var q0 = sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(q0_2s);
var q1 = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q0q1,q0);
var q2 = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q0q2,q0);
var q3 = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q0q3,q0);
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$4(q0,q1,q2,q3);
} else {
if((q1_2s >= (function (){var x__4336__auto__ = (function (){var x__4336__auto__ = q0_2s;
var y__4337__auto__ = q2_2s;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var y__4337__auto__ = q3_2s;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})())){
var q1 = sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(q1_2s);
var q0 = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q0q1,q1);
var q2 = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q1q2,q1);
var q3 = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q1q3,q1);
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$4(q0,q1,q2,q3);
} else {
if((q2_2s >= (function (){var x__4336__auto__ = (function (){var x__4336__auto__ = q0_2s;
var y__4337__auto__ = q1_2s;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var y__4337__auto__ = q3_2s;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})())){
var q2 = sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(q2_2s);
var q0 = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q0q2,q2);
var q1 = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q1q2,q2);
var q3 = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q2q3,q2);
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$4(q0,q1,q2,q3);
} else {
var q3 = sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(q3_2s);
var q0 = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q0q3,q3);
var q1 = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q1q3,q3);
var q2 = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q2q3,q3);
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$4(q0,q1,q2,q3);

}
}
}
} else {
if((!(sicmutils.value.numeric_zero_QMARK_(q0_2s)))){
var q0 = sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(q0_2);
var q1 = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q0q1,q0);
var q2 = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q0q2,q0);
var q3 = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q0q3,q0);
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$4(q0,q1,q2,q3);
} else {
if((!(sicmutils.value.numeric_zero_QMARK_(q1_2s)))){
var q1 = sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(q1_2);
var q0 = (0);
var q2 = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q1q2,q1);
var q3 = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q1q3,q1);
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$4(q0,q1,q2,q3);
} else {
if((!(sicmutils.value.numeric_zero_QMARK_(q2_2s)))){
var q2 = sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(q2_2);
var q0 = (0);
var q1 = (0);
var q3 = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(q2q3,q2);
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$4(q0,q1,q2,q3);
} else {
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$4((0),(0),(0),(0));

}
}
}
}
});
/**
 * Given a normalized [[Quaternion]] `q`, returns the corresponding orthogonal 3x3
 *   rotation matrix representing a rotation in 3d-space.
 * 
 *   The implementation here will first normalize `q` for you and then generate a
 *   rotation matrix from that new quaternion `q-normal`.
 * 
 *   [[->rotation-matrix]] will still work if `q` isn't normalized; but if
 *   a [[Quaternion]] isn't normalized it doesn't make sense to interpret it as a
 *   rotation.
 */
sicmutils.quaternion.__GT_rotation_matrix = (function sicmutils$quaternion$__GT_rotation_matrix(q){
if(sicmutils.quaternion.quaternion_QMARK_(q)){
} else {
throw (new Error("Assert failed: (quaternion? q)"));
}

var q0 = sicmutils.quaternion.get_r(q);
var q1 = sicmutils.quaternion.get_i(q);
var q2 = sicmutils.quaternion.get_j(q);
var q3 = sicmutils.quaternion.get_k(q);
var q0_STAR__STAR_2 = sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(q0);
var q1_STAR__STAR_2 = sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(q1);
var q2_STAR__STAR_2 = sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(q2);
var q3_STAR__STAR_2 = sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(q3);
var mag_sq = sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(q0_STAR__STAR_2,q1_STAR__STAR_2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q2_STAR__STAR_2,q3_STAR__STAR_2], 0)));
sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),(new cljs.core.List(null,mag_sq,(new cljs.core.List(null,(1),null,(1),null)),(2),null)),(3),null)),new cljs.core.Symbol(null,"->rotation-matrix","->rotation-matrix",1030542807,null));

return sicmutils.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(q0_STAR__STAR_2,q1_STAR__STAR_2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(q2_STAR__STAR_2),sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(q3_STAR__STAR_2)], 0)),mag_sq),sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q1,q2),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q0,q3))),mag_sq),sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q1,q3),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q0,q2))),mag_sq)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q1,q2),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q0,q3))),mag_sq),sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(q0_STAR__STAR_2,sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(q1_STAR__STAR_2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q2_STAR__STAR_2,sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(q3_STAR__STAR_2)], 0)),mag_sq),sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q2,q3),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q0,q1))),mag_sq)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q1,q3),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q0,q2))),mag_sq),sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q2,q3),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(q0,q1))),mag_sq),sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(q0_STAR__STAR_2,sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(q1_STAR__STAR_2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(q2_STAR__STAR_2),q3_STAR__STAR_2], 0)),mag_sq)], null)], 0));
});
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (a,b){
return sicmutils.quaternion.eq(a,b);
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.value.seqtype,new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (a,b){
return sicmutils.quaternion.eq(b,a);
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),sicmutils.value.seqtype], null),(function (a,b){
return sicmutils.quaternion.eq(a,b);
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (a,b){
return sicmutils.quaternion.eq(b,a);
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a,b){
return sicmutils.quaternion.eq(a,b);
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (a,b){
return sicmutils.quaternion.eq(b,a);
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a,b){
return sicmutils.quaternion.eq(a,b);
}));
sicmutils.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (q){
return sicmutils.quaternion.__GT_Quaternion.cljs$core$IFn$_invoke$arity$5(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.get_r(q)),sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.get_i(q)),sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.get_j(q)),sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.get_k(q)),cljs.core.meta(q));
}));
sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (a,b){
return sicmutils.quaternion.add.cljs$core$IFn$_invoke$arity$2(a,b);
}));
sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (a,b){
return sicmutils.quaternion.scalar_PLUS_quaternion(a,b);
}));
sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null),(function (a,b){
return sicmutils.quaternion.quaternion_PLUS_scalar(a,b);
}));
sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (a,b){
return sicmutils.quaternion.add.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$1(a),b);
}));
sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a,b){
return sicmutils.quaternion.add.cljs$core$IFn$_invoke$arity$2(a,sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$1(b));
}));
sicmutils.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (q){
return sicmutils.quaternion.negate(q);
}));
sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (a,b){
return sicmutils.quaternion.sub.cljs$core$IFn$_invoke$arity$2(a,b);
}));
sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (a,b){
return sicmutils.quaternion.scalar_quaternion(a,b);
}));
sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null),(function (a,b){
return sicmutils.quaternion.quaternion_scalar(a,b);
}));
sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (a,b){
return sicmutils.quaternion.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$1(a),b);
}));
sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a,b){
return sicmutils.quaternion.sub.cljs$core$IFn$_invoke$arity$2(a,sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$1(b));
}));
sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (a,b){
return sicmutils.quaternion.mul.cljs$core$IFn$_invoke$arity$2(a,b);
}));
sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (s,q){
return sicmutils.quaternion.scale_l(s,q);
}));
sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null),(function (q,s){
return sicmutils.quaternion.scale(q,s);
}));
sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (a,b){
return sicmutils.quaternion.mul.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$1(a),b);
}));
sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a,b){
return sicmutils.quaternion.mul.cljs$core$IFn$_invoke$arity$2(a,sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$1(b));
}));
sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (a,b){
return sicmutils.quaternion.expt(a,b);
}));
sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a,b){
return sicmutils.quaternion.expt(a,sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$1(b));
}));
sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.value","real","sicmutils.value/real",428478789)], null),(function (a,b){
return sicmutils.quaternion.expt(a,b);
}));
sicmutils.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (q){
return sicmutils.quaternion.invert(q);
}));
sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (a,b){
return sicmutils.quaternion.div.cljs$core$IFn$_invoke$arity$2(a,b);
}));
sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (s,q){
return sicmutils.quaternion.scale_l(s,sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(q));
}));
sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null),(function (q,s){
return sicmutils.quaternion.q_div_scalar(q,s);
}));
sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (a,b){
return sicmutils.quaternion.div.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$1(a),b);
}));
sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a,b){
return sicmutils.quaternion.div.cljs$core$IFn$_invoke$arity$2(a,sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$1(b));
}));
sicmutils.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (q){
return sicmutils.quaternion.sqrt(q);
}));
sicmutils.generic.log.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (q){
return sicmutils.quaternion.log(q);
}));
sicmutils.generic.exp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (q){
return sicmutils.quaternion.exp(q);
}));
sicmutils.generic.sin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (q){
return sicmutils.quaternion.sin(q);
}));
sicmutils.generic.cos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (q){
return sicmutils.quaternion.cos(q);
}));
sicmutils.generic.tan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (q){
return sicmutils.quaternion.tan(q);
}));
sicmutils.generic.cosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (q){
return sicmutils.quaternion.cosh(q);
}));
sicmutils.generic.sinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (q){
return sicmutils.quaternion.sinh(q);
}));
sicmutils.generic.tanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (q){
return sicmutils.quaternion.tanh(q);
}));
sicmutils.generic.infinite_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (q){
var or__4253__auto__ = sicmutils.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.get_r(q));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sicmutils.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.get_i(q));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sicmutils.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.get_j(q));
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return sicmutils.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(sicmutils.quaternion.get_k(q));
}
}
}
}));
sicmutils.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (q){
return sicmutils.quaternion.magnitude(q);
}));
sicmutils.generic.magnitude.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (q){
return sicmutils.quaternion.magnitude(q);
}));
sicmutils.generic.conjugate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (q){
return sicmutils.quaternion.conjugate(q);
}));
sicmutils.generic.real_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (q){
return sicmutils.quaternion.real_part(q);
}));
sicmutils.generic.partial_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),sicmutils.value.seqtype], null),(function (q,selectors){
return sicmutils.quaternion.partial_derivative(q,selectors);
}));
sicmutils.generic.cross_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (a,b){
return sicmutils.quaternion.cross_product(a,b);
}));
sicmutils.generic.cross_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null),(function (_,___$1){
return sicmutils.quaternion.ZERO;
}));
sicmutils.generic.cross_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (_,___$1){
return sicmutils.quaternion.ZERO;
}));
sicmutils.generic.cross_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a,b){
var i2 = sicmutils.complex.imaginary(b);
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$4((0),(0),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_k(a),i2),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_j(a),i2)));
}));
sicmutils.generic.cross_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (a,b){
var i1 = sicmutils.complex.imaginary(a);
return sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$4((0),(0),sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(i1,sicmutils.quaternion.get_k(b))),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(i1,sicmutils.quaternion.get_j(b)));
}));
sicmutils.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (a,b){
return sicmutils.quaternion.dot_product(a,b);
}));
sicmutils.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (a,b){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(a,sicmutils.quaternion.get_r(b));
}));
sicmutils.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null),(function (a,b){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_r(a),b);
}));
sicmutils.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (a,b){
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.complex.real(a),sicmutils.quaternion.get_r(b)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.complex.imaginary(a),sicmutils.quaternion.get_i(b)));
}));
sicmutils.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a,b){
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_r(a),sicmutils.complex.real(b)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.get_i(a),sicmutils.complex.imaginary(b)));
}));
sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null),(function (q,s){
return sicmutils.quaternion.q_div_scalar(q,s);
}));
sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (a,b){
return sicmutils.quaternion.div.cljs$core$IFn$_invoke$arity$2(a,b);
}));
sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (a,b){
return sicmutils.quaternion.div.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$1(a),b);
}));
sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a,b){
return sicmutils.quaternion.div.cljs$core$IFn$_invoke$arity$2(a,sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$1(b));
}));
sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (s,q){
return sicmutils.quaternion.q_div_scalar(q,s);
}));
sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (a,b){
return sicmutils.quaternion.div.cljs$core$IFn$_invoke$arity$2(b,a);
}));
sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118),new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563)], null),(function (a,b){
return sicmutils.quaternion.div.cljs$core$IFn$_invoke$arity$2(b,sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$1(a));
}));
sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.quaternion","quaternion","sicmutils.quaternion/quaternion",-1321394563),new cljs.core.Keyword("sicmutils.complex","complex","sicmutils.complex/complex",1794085118)], null),(function (a,b){
return sicmutils.quaternion.div.cljs$core$IFn$_invoke$arity$2(sicmutils.quaternion.make.cljs$core$IFn$_invoke$arity$1(b),a);
}));

//# sourceMappingURL=sicmutils.quaternion.js.map
