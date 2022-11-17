goog.provide('sicmutils.structure');
sicmutils.structure._STAR_allow_incompatible_multiplication_STAR_ = true;
sicmutils.structure.orientation__GT_symbol = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939),new cljs.core.Symbol(null,"up","up",1370819414,null),new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),new cljs.core.Symbol(null,"down","down",-1089190199,null)], null);
sicmutils.structure.orientation__GT_separator = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939),"\u2191",new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),"_"], null);
sicmutils.structure.opposite_orientation = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939),new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939)], null);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939),new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector,new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675),new cljs.core.Keyword("sicmutils.function","cofunction","sicmutils.function/cofunction",-547124902));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675),new cljs.core.Keyword("sicmutils.operator","co-operator","sicmutils.operator/co-operator",-2115495052));
/**
 * Returns `1` if `i`== `j`, `0` otherwise.
 */
sicmutils.structure.kronecker = (function sicmutils$structure$kronecker(i,j){
if((i === j)){
return (1);
} else {
return (0);
}
});
/**
 * Returns a basis sequence of `n` 0s, with `1` in the `i`th position.
 * 
 *   If `n` is not supplied returns an infinite sequence.
 */
sicmutils.structure.basis_unit = (function sicmutils$structure$basis_unit(var_args){
var G__99649 = arguments.length;
switch (G__99649) {
case 1:
return sicmutils.structure.basis_unit.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.structure.basis_unit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.structure.basis_unit.cljs$core$IFn$_invoke$arity$1 = (function (i){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sicmutils.structure.kronecker,i),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
}));

(sicmutils.structure.basis_unit.cljs$core$IFn$_invoke$arity$2 = (function (n,i){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,sicmutils.structure.basis_unit.cljs$core$IFn$_invoke$arity$1(i));
}));

(sicmutils.structure.basis_unit.cljs$lang$maxFixedArity = 2);



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
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
sicmutils.structure.Structure = (function (orientation,v,m){
this.orientation = orientation;
this.v = v;
this.m = m;
this.cljs$lang$protocol_mask$partition0$ = 2310931231;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sicmutils.structure.Structure.prototype.cljs$core$IFind$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.structure.Structure.prototype.cljs$core$IFind$_find$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
return cljs.core._find(self__.v,n);
}));

(sicmutils.structure.Structure.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.orientation.cljs$core$IFn$_invoke$arity$1 ? self__.orientation.cljs$core$IFn$_invoke$arity$1(sicmutils.structure.orientation__GT_symbol) : self__.orientation.call(null,sicmutils.structure.orientation__GT_symbol)))," ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,self__.v)),")"].join('');
}));

(sicmutils.structure.Structure.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._lookup(self__.v,k);
}));

(sicmutils.structure.Structure.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core._lookup(self__.v,k,not_found);
}));

(sicmutils.structure.Structure.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.v,f,init);
}));

(sicmutils.structure.Structure.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
return cljs.core._nth(self__.v,n);
}));

(sicmutils.structure.Structure.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core._nth(self__.v,n,not_found);
}));

(sicmutils.structure.Structure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var self__ = this;
var x__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1.toString()], 0));
}));

(sicmutils.structure.Structure.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(sicmutils.structure.Structure.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.v);
}));

(sicmutils.structure.Structure.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._rseq(self__.v);
}));

(sicmutils.structure.Structure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return (sicmutils.structure.s_COLON__EQ_.cljs$core$IFn$_invoke$arity$2 ? sicmutils.structure.s_COLON__EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,that) : sicmutils.structure.s_COLON__EQ_.call(null,this$__$1,that));
}));

(sicmutils.structure.Structure.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new sicmutils.structure.Structure(self__.orientation,cljs.core.PersistentVector.EMPTY,self__.m));
}));

(sicmutils.structure.Structure.prototype.sicmutils$value$Value$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.structure.Structure.prototype.sicmutils$value$Value$zero_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new sicmutils.structure.Structure(self__.orientation,sicmutils.value.zero_like(self__.v),self__.m));
}));

(sicmutils.structure.Structure.prototype.sicmutils$value$Value$identity_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(sicmutils.structure.Structure.prototype.sicmutils$value$Value$freeze$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(self__.orientation.cljs$core$IFn$_invoke$arity$1 ? self__.orientation.cljs$core$IFn$_invoke$arity$1(sicmutils.structure.orientation__GT_symbol) : self__.orientation.call(null,sicmutils.structure.orientation__GT_symbol)),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.value.freeze,self__.v))));
}));

(sicmutils.structure.Structure.prototype.sicmutils$value$Value$zero_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.every_QMARK_(sicmutils.value.zero_QMARK_,self__.v);
}));

(sicmutils.structure.Structure.prototype.sicmutils$value$Value$one_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(sicmutils.structure.Structure.prototype.sicmutils$value$Value$exact_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.every_QMARK_(sicmutils.value.exact_QMARK_,self__.v);
}));

(sicmutils.structure.Structure.prototype.sicmutils$value$Value$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.orientation;
}));

(sicmutils.structure.Structure.prototype.sicmutils$value$Value$identity_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (1);
}));

(sicmutils.structure.Structure.prototype.sicmutils$value$Value$one_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (1);
}));

(sicmutils.structure.Structure.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce(self__.v,f);
}));

(sicmutils.structure.Structure.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,start){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce(self__.v,f,start);
}));

(sicmutils.structure.Structure.prototype.sicmutils$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.structure.Structure.prototype.sicmutils$function$IArity$arity$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sicmutils.function$.seq_arity(self__.v);
}));

(sicmutils.structure.Structure.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,entry){
var self__ = this;
var ___$1 = this;
return (new sicmutils.structure.Structure(self__.orientation,cljs.core._assoc(self__.v,k,entry),self__.m));
}));

(sicmutils.structure.Structure.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.v,k);
}));

(sicmutils.structure.Structure.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._seq(self__.v);
}));

(sicmutils.structure.Structure.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m__$1){
var self__ = this;
var ___$1 = this;
return (new sicmutils.structure.Structure(self__.orientation,self__.v,m__$1));
}));

(sicmutils.structure.Structure.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,item){
var self__ = this;
var ___$1 = this;
return (new sicmutils.structure.Structure(self__.orientation,cljs.core._conj(self__.v,item),self__.m));
}));

(sicmutils.structure.Structure.prototype.call = (function (unused__43952__auto__){
var self__ = this;
var self__ = this;
var G__99708 = (arguments.length - (1));
switch (G__99708) {
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

(sicmutils.structure.Structure.prototype.apply = (function (self__,args99697){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args99697)));
}));

(sicmutils.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (new sicmutils.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__99675_SHARP_){
return (p1__99675_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__99675_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__99675_SHARP_.call(null));
}),self__.v),self__.m));
}));

(sicmutils.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return (new sicmutils.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__99676_SHARP_){
return (p1__99676_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__99676_SHARP_.cljs$core$IFn$_invoke$arity$1(a) : p1__99676_SHARP_.call(null,a));
}),self__.v),self__.m));
}));

(sicmutils.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return (new sicmutils.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__99677_SHARP_){
return (p1__99677_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__99677_SHARP_.cljs$core$IFn$_invoke$arity$2(a,b) : p1__99677_SHARP_.call(null,a,b));
}),self__.v),self__.m));
}));

(sicmutils.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return (new sicmutils.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__99678_SHARP_){
return (p1__99678_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__99678_SHARP_.cljs$core$IFn$_invoke$arity$3(a,b,c) : p1__99678_SHARP_.call(null,a,b,c));
}),self__.v),self__.m));
}));

(sicmutils.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return (new sicmutils.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__99679_SHARP_){
return (p1__99679_SHARP_.cljs$core$IFn$_invoke$arity$4 ? p1__99679_SHARP_.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : p1__99679_SHARP_.call(null,a,b,c,d));
}),self__.v),self__.m));
}));

(sicmutils.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return (new sicmutils.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__99680_SHARP_){
return (p1__99680_SHARP_.cljs$core$IFn$_invoke$arity$5 ? p1__99680_SHARP_.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : p1__99680_SHARP_.call(null,a,b,c,d,e));
}),self__.v),self__.m));
}));

(sicmutils.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
return (new sicmutils.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__99681_SHARP_){
return (p1__99681_SHARP_.cljs$core$IFn$_invoke$arity$6 ? p1__99681_SHARP_.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f) : p1__99681_SHARP_.call(null,a,b,c,d,e,f));
}),self__.v),self__.m));
}));

(sicmutils.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
return (new sicmutils.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__99682_SHARP_){
return (p1__99682_SHARP_.cljs$core$IFn$_invoke$arity$7 ? p1__99682_SHARP_.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f,g) : p1__99682_SHARP_.call(null,a,b,c,d,e,f,g));
}),self__.v),self__.m));
}));

(sicmutils.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
return (new sicmutils.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__99683_SHARP_){
return (p1__99683_SHARP_.cljs$core$IFn$_invoke$arity$8 ? p1__99683_SHARP_.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f,g,h) : p1__99683_SHARP_.call(null,a,b,c,d,e,f,g,h));
}),self__.v),self__.m));
}));

(sicmutils.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
return (new sicmutils.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__99684_SHARP_){
return (p1__99684_SHARP_.cljs$core$IFn$_invoke$arity$9 ? p1__99684_SHARP_.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f,g,h,i) : p1__99684_SHARP_.call(null,a,b,c,d,e,f,g,h,i));
}),self__.v),self__.m));
}));

(sicmutils.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
return (new sicmutils.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__99685_SHARP_){
return (p1__99685_SHARP_.cljs$core$IFn$_invoke$arity$10 ? p1__99685_SHARP_.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f,g,h,i,j) : p1__99685_SHARP_.call(null,a,b,c,d,e,f,g,h,i,j));
}),self__.v),self__.m));
}));

(sicmutils.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
return (new sicmutils.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__99686_SHARP_){
return (p1__99686_SHARP_.cljs$core$IFn$_invoke$arity$11 ? p1__99686_SHARP_.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f,g,h,i,j,k) : p1__99686_SHARP_.call(null,a,b,c,d,e,f,g,h,i,j,k));
}),self__.v),self__.m));
}));

(sicmutils.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return (new sicmutils.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__99687_SHARP_){
return (p1__99687_SHARP_.cljs$core$IFn$_invoke$arity$12 ? p1__99687_SHARP_.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f,g,h,i,j,k,l) : p1__99687_SHARP_.call(null,a,b,c,d,e,f,g,h,i,j,k,l));
}),self__.v),self__.m));
}));

(sicmutils.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m_arg){
var self__ = this;
var _ = this;
return (new sicmutils.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__99688_SHARP_){
return (p1__99688_SHARP_.cljs$core$IFn$_invoke$arity$13 ? p1__99688_SHARP_.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f,g,h,i,j,k,l,m_arg) : p1__99688_SHARP_.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m_arg));
}),self__.v),self__.m));
}));

(sicmutils.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n){
var self__ = this;
var _ = this;
return (new sicmutils.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__99689_SHARP_){
return (p1__99689_SHARP_.cljs$core$IFn$_invoke$arity$14 ? p1__99689_SHARP_.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n) : p1__99689_SHARP_.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n));
}),self__.v),self__.m));
}));

(sicmutils.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o){
var self__ = this;
var _ = this;
return (new sicmutils.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__99690_SHARP_){
return (p1__99690_SHARP_.cljs$core$IFn$_invoke$arity$15 ? p1__99690_SHARP_.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o) : p1__99690_SHARP_.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o));
}),self__.v),self__.m));
}));

(sicmutils.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p){
var self__ = this;
var _ = this;
return (new sicmutils.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__99691_SHARP_){
return (p1__99691_SHARP_.cljs$core$IFn$_invoke$arity$16 ? p1__99691_SHARP_.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p) : p1__99691_SHARP_.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p));
}),self__.v),self__.m));
}));

(sicmutils.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q){
var self__ = this;
var _ = this;
return (new sicmutils.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__99692_SHARP_){
return (p1__99692_SHARP_.cljs$core$IFn$_invoke$arity$17 ? p1__99692_SHARP_.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q) : p1__99692_SHARP_.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q));
}),self__.v),self__.m));
}));

(sicmutils.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q,r){
var self__ = this;
var _ = this;
return (new sicmutils.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__99693_SHARP_){
return (p1__99693_SHARP_.cljs$core$IFn$_invoke$arity$18 ? p1__99693_SHARP_.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q,r) : p1__99693_SHARP_.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q,r));
}),self__.v),self__.m));
}));

(sicmutils.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return (new sicmutils.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__99694_SHARP_){
return (p1__99694_SHARP_.cljs$core$IFn$_invoke$arity$19 ? p1__99694_SHARP_.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q,r,s) : p1__99694_SHARP_.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q,r,s));
}),self__.v),self__.m));
}));

(sicmutils.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return (new sicmutils.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__99695_SHARP_){
return (p1__99695_SHARP_.cljs$core$IFn$_invoke$arity$20 ? p1__99695_SHARP_.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q,r,s,t) : p1__99695_SHARP_.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q,r,s,t));
}),self__.v),self__.m));
}));

(sicmutils.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return (new sicmutils.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__99696_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(p1__99696_SHARP_,a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f,g,h,i,j,k,l,m_arg,n,o,p,q,r,s,t,rest], 0));
}),self__.v),self__.m));
}));

(sicmutils.structure.Structure.prototype.sicmutils$differential$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.structure.Structure.prototype.sicmutils$differential$IPerturbed$perturbed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.boolean$(cljs.core.some(sicmutils.differential.perturbed_QMARK_,self__.v));
}));

(sicmutils.structure.Structure.prototype.sicmutils$differential$IPerturbed$replace_tag$arity$3 = (function (s,old,new$){
var self__ = this;
var s__$1 = this;
var G__99748 = (function (p1__99650_SHARP_){
return sicmutils.differential.replace_tag(p1__99650_SHARP_,old,new$);
});
var G__99749 = s__$1;
return (sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$2 ? sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$2(G__99748,G__99749) : sicmutils.structure.mapr.call(null,G__99748,G__99749));
}));

(sicmutils.structure.Structure.prototype.sicmutils$differential$IPerturbed$extract_tangent$arity$2 = (function (s,tag){
var self__ = this;
var s__$1 = this;
var G__99750 = (function (p1__99651_SHARP_){
return sicmutils.differential.extract_tangent(p1__99651_SHARP_,tag);
});
var G__99751 = s__$1;
return (sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$2 ? sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$2(G__99750,G__99751) : sicmutils.structure.mapr.call(null,G__99750,G__99751));
}));

(sicmutils.structure.Structure.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"orientation","orientation",-2030878190,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null);
}));

(sicmutils.structure.Structure.cljs$lang$type = true);

(sicmutils.structure.Structure.cljs$lang$ctorStr = "sicmutils.structure/Structure");

(sicmutils.structure.Structure.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"sicmutils.structure/Structure");
}));

/**
 * Positional factory function for sicmutils.structure/Structure.
 */
sicmutils.structure.__GT_Structure = (function sicmutils$structure$__GT_Structure(orientation,v,m){
return (new sicmutils.structure.Structure(orientation,v,m));
});

/**
 * Return the structure `s` in unoriented vector form.
 */
sicmutils.structure.structure__GT_vector = (function sicmutils$structure$structure__GT_vector(s){
if(cljs.core.vector_QMARK_(s)){
return s;
} else {
if((s instanceof sicmutils.structure.Structure)){
return s.v;
} else {
return sicmutils.util.illegal(["non-structure supplied: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));

}
}
});
/**
 * Returns the orientation of `s`, either `::up` or `::down`. Defaults to `::up`,
 *   even for non-structures.
 */
sicmutils.structure.orientation = (function sicmutils$structure$orientation(s){
if((s instanceof sicmutils.structure.Structure)){
return s.orientation;
} else {
return new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939);
}
});
/**
 * Returns the count for sequential `s`, `1` otherwise.
 */
sicmutils.structure.s_COLON_count = (function sicmutils$structure$s_COLON_count(s){
if(cljs.core.sequential_QMARK_(s)){
return cljs.core.count(s);
} else {
return (1);
}
});
/**
 * If `s` is sequential, returns its dimension, ie, the total number of
 *   non-sequential entries in the structure. Else, returns 1.
 */
sicmutils.structure.dimension = (function sicmutils$structure$dimension(s){
if(cljs.core.sequential_QMARK_(s)){
return cljs.core.count(cljs.core.flatten(s));
} else {
return (1);
}
});
/**
 * Structure-specific version of `nth`; acts as [[clojure.core/nth]] for
 *   structural things.
 * 
 *   For non-sequential things, if `i` is `0`, acts as identity. Throws otherwise.
 */
sicmutils.structure.s_COLON_nth = (function sicmutils$structure$s_COLON_nth(s,i){
if(cljs.core.sequential_QMARK_(s)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,i);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0))){
return s;
} else {
return sicmutils.util.illegal(["non-sequential s:nth not supported: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," with index != 0: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''));

}
}
});
/**
 * Given an access chain (a sequence of indices), return a function that accepts a
 *   structure and returns the element at the specified access chain.
 */
sicmutils.structure.component = (function sicmutils$structure$component(var_args){
var args__4870__auto__ = [];
var len__4864__auto___99837 = arguments.length;
var i__4865__auto___99838 = (0);
while(true){
if((i__4865__auto___99838 < len__4864__auto___99837)){
args__4870__auto__.push((arguments[i__4865__auto___99838]));

var G__99839 = (i__4865__auto___99838 + (1));
i__4865__auto___99838 = G__99839;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sicmutils.structure.component.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sicmutils.structure.component.cljs$core$IFn$_invoke$arity$variadic = (function (indices){
return (function (p1__99752_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__99752_SHARP_,indices);
});
}));

(sicmutils.structure.component.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.structure.component.cljs$lang$applyTo = (function (seq99753){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq99753));
}));

sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939)], null),(function (_,___$1){
return false;
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939),new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924)], null),(function (_,___$1){
return false;
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),sicmutils.value.seqtype], null),(function (_,___$1){
return false;
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.value.seqtype,new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924)], null),(function (_,___$1){
return false;
}));
cljs.core.prefer_method(sicmutils.value._EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939),new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.value.seqtype,new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924)], null));
cljs.core.prefer_method(sicmutils.value._EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),sicmutils.value.seqtype], null));
/**
 * Returns true if the supplied structure `this` is equal to the argument on the
 *   right, false otherwise.
 * 
 *   Structures are equal to:
 * 
 *   - other structures that are deep-equal, including orientation
 *   - other sequences (only for `::up` structures) - the outer sequence is treated
 *  as an `::up` structure
 */
sicmutils.structure.s_COLON__EQ_ = (function sicmutils$structure$s_COLON__EQ_(this$,that){
if((that instanceof sicmutils.structure.Structure)){
var s = that;
var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$.orientation,s.orientation);
if(and__4251__auto__){
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(this$.v,s.v);
} else {
return and__4251__auto__;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$.orientation,new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939))){
if(cljs.core.vector_QMARK_(that)){
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(this$.v,that);
} else {
if(cljs.core.seqable_QMARK_(that)){
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(this$),cljs.core.seq(that));
} else {
return false;

}
}
} else {
return false;

}
}
});
/**
 * Returns `true` if `s` is a structure, false otherwise. (Vectors are treated as
 *   up structures.)
 */
sicmutils.structure.structure_QMARK_ = (function sicmutils$structure$structure_QMARK_(s){
return (((s instanceof sicmutils.structure.Structure)) || (cljs.core.vector_QMARK_(s)));
});
/**
 * Returns `true` if `s` is an `up` structure, false otherwise.
 */
sicmutils.structure.up_QMARK_ = (function sicmutils$structure$up_QMARK_(s){
return ((cljs.core.vector_QMARK_(s)) || ((((s instanceof sicmutils.structure.Structure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939),s.orientation)))));
});
/**
 * Returns `true` if `s` is a `down` structure, false otherwise.
 */
sicmutils.structure.down_QMARK_ = (function sicmutils$structure$down_QMARK_(s){
return (((s instanceof sicmutils.structure.Structure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),s.orientation)));
});
/**
 * Returns true if the supplied orientation lives in the set of allowed
 *   orientations, false otherwise.
 */
sicmutils.structure.valid_orientation_QMARK_ = (function sicmutils$structure$valid_orientation_QMARK_(o){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939),null,new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),null], null), null),o);
});
/**
 * Returns true if the supplied structures have the same orientation, false
 *   otherwise.
 */
sicmutils.structure.same_orientation_QMARK_ = (function sicmutils$structure$same_orientation_QMARK_(s,t){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.structure.orientation(s),sicmutils.structure.orientation(t));
});
/**
 * Given an `up` or `down` structure containing structures of the same
 *   orientation and size (a 2 tensor), returns a dictionary with keys:
 * 
 *   ```clj
 *   {:outer-orientation <::up or ::down>
 * :inner-orientation <::up or ::down>
 * :outer-size <int>
 * :inner-size <int>}
 * 
 *   If `s` is /not/ a valid tensor, returns nil.
 *   ```
 */
sicmutils.structure.two_tensor_info = (function sicmutils$structure$two_tensor_info(s){
var outer_size = cljs.core.count(s);
var outer_orientation = sicmutils.structure.orientation(s);
var inner_sizes = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__99754_SHARP_){
if(sicmutils.structure.structure_QMARK_(p1__99754_SHARP_)){
return cljs.core.count(p1__99754_SHARP_);
} else {
return (1);
}
})),s);
var inner_orientations = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(sicmutils.structure.orientation),s);
if(((cljs.core.every_QMARK_(sicmutils.structure.structure_QMARK_,s)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(inner_orientations))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(inner_sizes))))))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outer-orientation","outer-orientation",-985566313),outer_orientation,new cljs.core.Keyword(null,"inner-orientation","inner-orientation",-728775897),cljs.core.first(inner_orientations),new cljs.core.Keyword(null,"outer-size","outer-size",705588000),outer_size,new cljs.core.Keyword(null,"inner-size","inner-size",755766819),cljs.core.first(inner_sizes)], null);
} else {
return null;
}
});
/**
 * Given `outer` and `inner` orientations, returns a function of a structure `s`
 *   that returns true if `s` is a two tensor whose `inner` and `outer`
 *   orientations match the supplied arguments, false otherwise.
 */
sicmutils.structure.tensor_pred = (function sicmutils$structure$tensor_pred(outer,inner){
return (function (s){
return cljs.core.boolean$((function (){var temp__5753__auto__ = sicmutils.structure.two_tensor_info(s);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(outer,new cljs.core.Keyword(null,"outer-orientation","outer-orientation",-985566313).cljs$core$IFn$_invoke$arity$1(m))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inner,new cljs.core.Keyword(null,"inner-orientation","inner-orientation",-728775897).cljs$core$IFn$_invoke$arity$1(m))));
} else {
return null;
}
})());
});
});
/**
 * Returns true if `s` is an `up` or `down` structure containing all `up` or
 *   `down` structures of internally-matching orientation and size, false
 *   otherwise.
 */
sicmutils.structure.two_tensor_QMARK_ = (function sicmutils$structure$two_tensor_QMARK_(s){
return cljs.core.boolean$(sicmutils.structure.two_tensor_info(s));
});
/**
 * Returns true if `s` is a `down` structure containing all `down`
 * structures of the same size, false otherwise.
 */
sicmutils.structure.two_down_QMARK_ = sicmutils.structure.tensor_pred(new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924));
/**
 * Returns true if `s` is an `up` structure containing all `up`
 * structures of the same size, false otherwise.
 */
sicmutils.structure.two_up_QMARK_ = sicmutils.structure.tensor_pred(new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939),new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939));
/**
 * Returns true if `s` is an `up` structure containing all `down`
 * structures of the same size, false otherwise.
 */
sicmutils.structure.up_of_downs_QMARK_ = sicmutils.structure.tensor_pred(new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939),new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924));
/**
 * Returns true if `s` is a `down` structure containing all `up`
 *  structures of the same size, false otherwise.
 */
sicmutils.structure.down_of_ups_QMARK_ = sicmutils.structure.tensor_pred(new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939));
/**
 * Generate a structure with the supplied orientation, given some sequence `xs`
 */
sicmutils.structure.make = (function sicmutils$structure$make(orientation,xs){
var xs__$1 = ((cljs.core.vector_QMARK_(xs))?xs:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,xs));
return sicmutils.structure.__GT_Structure(orientation,xs__$1,null);
});
/**
 * Construct an up (contravariant) tuple from the supplied sequence. For a
 *   variadic version, see [[up]].
 */
sicmutils.structure.up_STAR_ = (function sicmutils$structure$up_STAR_(xs){
return sicmutils.structure.make(new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939),xs);
});
/**
 * Form an up-tuple from a vector.
 * 
 *   NOTE that this is an alias of [[up*]] that is more restrictive, in that it
 *   only accepts a vector. Use [[up*]] if you'd like to pass an arbitrary
 *   sequence. (If you pass a vector to [[up*]]) it will be just as efficient.
 */
sicmutils.structure.vector__GT_up = (function sicmutils$structure$vector__GT_up(v){
if(cljs.core.vector_QMARK_(v)){
} else {
throw (new Error("Assert failed: (vector? v)"));
}

return sicmutils.structure.__GT_Structure(new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939),v,null);
});
/**
 * Construct an up (contravariant) tuple from the arguments.
 * 
 *   Variadic version of [[up*]].
 */
sicmutils.structure.up = (function sicmutils$structure$up(var_args){
var args__4870__auto__ = [];
var len__4864__auto___99840 = arguments.length;
var i__4865__auto___99841 = (0);
while(true){
if((i__4865__auto___99841 < len__4864__auto___99840)){
args__4870__auto__.push((arguments[i__4865__auto___99841]));

var G__99842 = (i__4865__auto___99841 + (1));
i__4865__auto___99841 = G__99842;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return sicmutils.structure.up_STAR_(xs);
}));

(sicmutils.structure.up.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.structure.up.cljs$lang$applyTo = (function (seq99755){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq99755));
}));

/**
 * Construct a down (covariant) tuple from the supplied sequence. For a
 *   variadic version, see [[down]].
 */
sicmutils.structure.down_STAR_ = (function sicmutils$structure$down_STAR_(xs){
return sicmutils.structure.make(new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),xs);
});
/**
 * Form a down-tuple from a vector.
 * 
 *   NOTE that this is an alias of [[down*]] that is more restrictive, in that it
 *   only accepts a vector. Use [[down*]] if you'd like to pass an arbitrary
 *   sequence. (If you pass a vector to [[down*]]) it will be just as efficient.
 */
sicmutils.structure.vector__GT_down = (function sicmutils$structure$vector__GT_down(v){
if(cljs.core.vector_QMARK_(v)){
} else {
throw (new Error("Assert failed: (vector? v)"));
}

return sicmutils.structure.__GT_Structure(new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),v,null);
});
/**
 * Construct a down (covariant) tuple from the arguments. Variadic version
 *   of [[down*]].
 */
sicmutils.structure.down = (function sicmutils$structure$down(var_args){
var args__4870__auto__ = [];
var len__4864__auto___99843 = arguments.length;
var i__4865__auto___99844 = (0);
while(true){
if((i__4865__auto___99844 < len__4864__auto___99843)){
args__4870__auto__.push((arguments[i__4865__auto___99844]));

var G__99845 = (i__4865__auto___99844 + (1));
i__4865__auto___99844 = G__99845;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sicmutils.structure.down.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sicmutils.structure.down.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return sicmutils.structure.make(new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),xs);
}));

(sicmutils.structure.down.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.structure.down.cljs$lang$applyTo = (function (seq99756){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq99756));
}));

/**
 * Returns a structure containing `xs` with the same orientation as `s`.
 */
sicmutils.structure.same = (function sicmutils$structure$same(s,xs){
return sicmutils.structure.make(sicmutils.structure.orientation(s),xs);
});
/**
 * For a non-[[Structure]] `s`, the single-arity case acts as [[identity]]. For
 *   a [[Structure]], returns an identical structure with its orientation
 *   reversed (up becomes down, down becomes up).
 * 
 *   NOTE that a vector is interpreted as an `up` structure, so:
 * 
 *   (opposite [1 2 3])
 *   ;;=> (down 1 2 3)
 * 
 *   The two-arity case returns a new [[Structure]] of opposite orientation to `s`
 *   with the contents of the sequence `xs`.
 */
sicmutils.structure.opposite = (function sicmutils$structure$opposite(var_args){
var G__99758 = arguments.length;
switch (G__99758) {
case 1:
return sicmutils.structure.opposite.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.structure.opposite.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.structure.opposite.cljs$core$IFn$_invoke$arity$1 = (function (s){
if(sicmutils.structure.structure_QMARK_(s)){
return sicmutils.structure.opposite.cljs$core$IFn$_invoke$arity$2(s,sicmutils.structure.structure__GT_vector(s));
} else {
return s;
}
}));

(sicmutils.structure.opposite.cljs$core$IFn$_invoke$arity$2 = (function (s,xs){
var o = (function (){var G__99759 = sicmutils.structure.orientation(s);
return (sicmutils.structure.opposite_orientation.cljs$core$IFn$_invoke$arity$1 ? sicmutils.structure.opposite_orientation.cljs$core$IFn$_invoke$arity$1(G__99759) : sicmutils.structure.opposite_orientation.call(null,G__99759));
})();
return sicmutils.structure.make(o,xs);
}));

(sicmutils.structure.opposite.cljs$lang$maxFixedArity = 2);

/**
 * Generate a structure with the given `orientation` whose elements are
 * 
 *   (f i)
 * 
 *   where i ranges from `[0..dimension)`.
 */
sicmutils.structure.generate = (function sicmutils$structure$generate(dimension,orientation,f){
if(sicmutils.structure.valid_orientation_QMARK_(orientation)){
} else {
throw (new Error("Assert failed: (valid-orientation? orientation)"));
}

return sicmutils.structure.__GT_Structure(orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(f,cljs.core.range.cljs$core$IFn$_invoke$arity$1(dimension)),null);
});
/**
 * Generates a structure of the specified `orientation` and dimension `size`
 *   populated by symbolic entries, each prefixed by the supplied symbol `sym`.
 * 
 *   For example:
 * 
 *   (= (literal 'x 3 ::s/up)
 *   (up 'x↑0 'x↑1 'x↑2))
 * 
 *   See [[literal-up]] and [[literal-down]] for constructors with baked in
 *   orientations.
 */
sicmutils.structure.literal = (function sicmutils$structure$literal(sym,size,orientation){
if(sicmutils.structure.valid_orientation_QMARK_(orientation)){
} else {
throw (new Error("Assert failed: (valid-orientation? orientation)"));
}

var separator = (sicmutils.structure.orientation__GT_separator.cljs$core$IFn$_invoke$arity$1 ? sicmutils.structure.orientation__GT_separator.cljs$core$IFn$_invoke$arity$1(orientation) : sicmutils.structure.orientation__GT_separator.call(null,orientation));
var prefix = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),cljs.core.str.cljs$core$IFn$_invoke$arity$1(separator)].join('');
return sicmutils.structure.generate(size,orientation,(function (i){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''));
}));
});
/**
 * Generates an `up` structure of dimension `size` populated by symbolic entries,
 *   each prefixed by the supplied symbol `sym`.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (= (literal-up 'x 3)
 *   (up 'x↑0 'x↑1 'x↑2))
 *   ```
 */
sicmutils.structure.literal_up = (function sicmutils$structure$literal_up(sym,size){
return sicmutils.structure.literal(sym,size,new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939));
});
/**
 * Generates a `down` structure of dimension `size` populated by symbolic entries,
 *   each prefixed by the supplied symbol `sym`.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (= (literal-down 'x 3)
 *   (down 'x_0 'x_1 'x_2))
 *   ```
 */
sicmutils.structure.literal_down = (function sicmutils$structure$literal_down(sym,size){
return sicmutils.structure.literal(sym,size,new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924));
});
/**
 * Returns the sum of all values generated by mapping `f` across the same-indexed
 *   entries of all supplied structures, one level deep.
 */
sicmutils.structure.sum_COLON_l = (function sicmutils$structure$sum_COLON_l(f,p__99761){
var vec__99762 = p__99761;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99762,(0),null);
var structs = vec__99762;
var G__99765 = (function (i){
var xs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__99760_SHARP_){
return sicmutils.structure.s_COLON_nth(p1__99760_SHARP_,i);
}),structs);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xs);
});
var G__99766 = (0);
var G__99767 = cljs.core.count(s);
return (sicmutils.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3 ? sicmutils.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3(G__99765,G__99766,G__99767) : sicmutils.util.aggregate.generic_sum.call(null,G__99765,G__99766,G__99767));
});
/**
 * Accepts a function `f` and a sequence of isomorphic `structures`; returns the
 *   sum of the values returned from applying `f` to each associated set of entries
 *   in each input structure.
 */
sicmutils.structure.sum_COLON_r_COLON_l = (function sicmutils$structure$sum_COLON_r_COLON_l(f,structures){
return sicmutils.structure.sum_COLON_l((function() { 
var G__99847__delegate = function (elements){
if(sicmutils.structure.structure_QMARK_(cljs.core.first(elements))){
return (sicmutils.structure.sum_COLON_r_COLON_l.cljs$core$IFn$_invoke$arity$2 ? sicmutils.structure.sum_COLON_r_COLON_l.cljs$core$IFn$_invoke$arity$2(f,elements) : sicmutils.structure.sum_COLON_r_COLON_l.call(null,f,elements));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,elements);
}
};
var G__99847 = function (var_args){
var elements = null;
if (arguments.length > 0) {
var G__99848__i = 0, G__99848__a = new Array(arguments.length -  0);
while (G__99848__i < G__99848__a.length) {G__99848__a[G__99848__i] = arguments[G__99848__i + 0]; ++G__99848__i;}
  elements = new cljs.core.IndexedSeq(G__99848__a,0,null);
} 
return G__99847__delegate.call(this,elements);};
G__99847.cljs$lang$maxFixedArity = 0;
G__99847.cljs$lang$applyTo = (function (arglist__99849){
var elements = cljs.core.seq(arglist__99849);
return G__99847__delegate(elements);
});
G__99847.cljs$core$IFn$_invoke$arity$variadic = G__99847__delegate;
return G__99847;
})()
,structures);
});
/**
 * Given some function `f` and any number of isomorphic `structures`,
 *   returns the sum of the results of applying `f` to each associated set of
 *   entries in each `structure`.
 */
sicmutils.structure.sumr = (function sicmutils$structure$sumr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___99850 = arguments.length;
var i__4865__auto___99851 = (0);
while(true){
if((i__4865__auto___99851 < len__4864__auto___99850)){
args__4870__auto__.push((arguments[i__4865__auto___99851]));

var G__99852 = (i__4865__auto___99851 + (1));
i__4865__auto___99851 = G__99852;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sicmutils.structure.sumr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sicmutils.structure.sumr.cljs$core$IFn$_invoke$arity$variadic = (function (f,structures){
return sicmutils.structure.sum_COLON_r_COLON_l(f,structures);
}));

(sicmutils.structure.sumr.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sicmutils.structure.sumr.cljs$lang$applyTo = (function (seq99768){
var G__99769 = cljs.core.first(seq99768);
var seq99768__$1 = cljs.core.next(seq99768);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__99769,seq99768__$1);
}));

/**
 * Returns a new structure generated by mapping `f` across the same-indexed
 *   entries of all supplied structures, one level deep.
 */
sicmutils.structure.map_COLON_l = (function sicmutils$structure$map_COLON_l(f,p__99771){
var vec__99772 = p__99771;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99772,(0),null);
var structs = vec__99772;
if(sicmutils.structure.structure_QMARK_(s)){
return sicmutils.structure.generate(cljs.core.count(s),sicmutils.structure.orientation(s),(function (i){
var xs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__99770_SHARP_){
return sicmutils.structure.s_COLON_nth(p1__99770_SHARP_,i);
}),structs);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xs);
}));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,structs);
}
});
/**
 * Accepts some function `f` and a sequence of isomorphic `structures`; returns a
 *   structure of the same shape, with `f` applied to the associated entry of each
 *   input structure.
 */
sicmutils.structure.map_COLON_r_COLON_l = (function sicmutils$structure$map_COLON_r_COLON_l(f,structures){
return sicmutils.structure.map_COLON_l((function() { 
var G__99853__delegate = function (elements){
if(sicmutils.structure.structure_QMARK_(cljs.core.first(elements))){
return (sicmutils.structure.map_COLON_r_COLON_l.cljs$core$IFn$_invoke$arity$2 ? sicmutils.structure.map_COLON_r_COLON_l.cljs$core$IFn$_invoke$arity$2(f,elements) : sicmutils.structure.map_COLON_r_COLON_l.call(null,f,elements));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,elements);
}
};
var G__99853 = function (var_args){
var elements = null;
if (arguments.length > 0) {
var G__99854__i = 0, G__99854__a = new Array(arguments.length -  0);
while (G__99854__i < G__99854__a.length) {G__99854__a[G__99854__i] = arguments[G__99854__i + 0]; ++G__99854__i;}
  elements = new cljs.core.IndexedSeq(G__99854__a,0,null);
} 
return G__99853__delegate.call(this,elements);};
G__99853.cljs$lang$maxFixedArity = 0;
G__99853.cljs$lang$applyTo = (function (arglist__99855){
var elements = cljs.core.seq(arglist__99855);
return G__99853__delegate(elements);
});
G__99853.cljs$core$IFn$_invoke$arity$variadic = G__99853__delegate;
return G__99853;
})()
,structures);
});
/**
 * Return a structure with the same shape as s but with f applied to each
 *   primitive (that is, not structural) component.
 */
sicmutils.structure.mapr = (function sicmutils$structure$mapr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___99856 = arguments.length;
var i__4865__auto___99857 = (0);
while(true){
if((i__4865__auto___99857 < len__4864__auto___99856)){
args__4870__auto__.push((arguments[i__4865__auto___99857]));

var G__99858 = (i__4865__auto___99857 + (1));
i__4865__auto___99857 = G__99858;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic = (function (f,structures){
return sicmutils.structure.map_COLON_r_COLON_l(f,structures);
}));

(sicmutils.structure.mapr.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sicmutils.structure.mapr.cljs$lang$applyTo = (function (seq99775){
var G__99776 = cljs.core.first(seq99775);
var seq99775__$1 = cljs.core.next(seq99775);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__99776,seq99775__$1);
}));

/**
 * Returns a new structure of equivalent shape to `s`, generated by applying `f`
 *   to three arguments:
 * 
 *   - the entry in the structure
 *   - a vector of its 'access chain', ie, the path you'd pass
 *  to [[clojure.core/get-in]] to access the entry
 *   - a vector of orientations associated with each index in the access chain
 * 
 *   For example:
 * 
 *   ```clojure
 *   (dorun (map-chain println (s/down (s/up 1 2) (s/up 3 4))))
 * 
 *   1 [0 0] [:s/down :s/up]
 *   2 [0 1] [:s/down :s/up]
 *   3 [1 0] [:s/down :s/up]
 *   4 [1 1] [:s/down :s/up]
 *   ```
 */
sicmutils.structure.map_chain = (function sicmutils$structure$map_chain(f,s){
var walk = (function sicmutils$structure$map_chain_$_walk(s__$1,chain,orientations){
if(sicmutils.structure.structure_QMARK_(s__$1)){
var o = sicmutils.structure.orientation(s__$1);
return sicmutils.structure.generate(cljs.core.count(s__$1),sicmutils.structure.orientation(s__$1),(function (i){
return sicmutils$structure$map_chain_$_walk(sicmutils.structure.s_COLON_nth(s__$1,i),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(chain,i),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(orientations,o));
}));
} else {
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(s__$1,chain,orientations) : f.call(null,s__$1,chain,orientations));
}
});
return walk(s,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
});
/**
 * Return a structure of the same shape as `s` whose elements are access chains
 *   corresponding to position of each element (i.e., the sequence of indices
 *   needed to address that element via [[get-in]]).
 * 
 *   Each access chain has the sequence of orientations (`::s/up`, `::s/down`)
 *   associated with each step attached to it as metadata, under an `:orientations`
 *   key. Use this if the orientation of the indices matters.
 */
sicmutils.structure.structure__GT_access_chains = (function sicmutils$structure$structure__GT_access_chains(s){
if(sicmutils.structure.structure_QMARK_(s)){
return sicmutils.structure.map_chain((function (_,chain,orientations){
return cljs.core.with_meta(cljs.core.seq(chain),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"orientations","orientations",146962442),orientations], null));
}),s);
} else {
return null;
}
});
/**
 * Accepts
 * 
 *   - some symbolic (or string) `name`
 *   - a structure `s`
 * 
 *   and returns a new structure of identical shape, with symbolic entries like
 *   `'x↑0_1` that show their access chain with proper orientations for each step.
 */
sicmutils.structure.structure__GT_prototype = (function sicmutils$structure$structure__GT_prototype(name,s){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (chain){
var separators = cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.structure.orientation__GT_separator,new cljs.core.Keyword(null,"orientations","orientations",146962442).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(chain)));
var path_seq = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.str,separators,chain);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,name,path_seq));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.structure.structure__GT_access_chains(s)], 0));
});
/**
 * Given:
 * 
 *   - a sequence of `values`
 *   - a model `struct`
 * 
 *   Returns a new structure generated by unpacking `values` into a structure with
 *   the same shape as `struct`.
 */
sicmutils.structure.unflatten = (function sicmutils$structure$unflatten(var_args){
var G__99778 = arguments.length;
switch (G__99778) {
case 2:
return sicmutils.structure.unflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.structure.unflatten.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.structure.unflatten.cljs$core$IFn$_invoke$arity$2 = (function (values,struct){
return sicmutils.structure.unflatten.cljs$core$IFn$_invoke$arity$3(sicmutils.structure.same,values,struct);
}));

(sicmutils.structure.unflatten.cljs$core$IFn$_invoke$arity$3 = (function (constructor$,values,struct){
var u = (function sicmutils$structure$u(values__$1,struct__$1){
if(sicmutils.structure.structure_QMARK_(struct__$1)){
var vec__99789 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__99792,element){
var vec__99793 = p__99792;
var values__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99793,(0),null);
var struct__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99793,(1),null);
var vec__99796 = sicmutils$structure$u(values__$2,element);
var values_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99796,(0),null);
var struct_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99796,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [values_SINGLEQUOTE_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(struct__$2,struct_SINGLEQUOTE_)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [values__$1,cljs.core.PersistentVector.EMPTY], null),struct__$1);
var values_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99789,(0),null);
var struct_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99789,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [values_SINGLEQUOTE_,(constructor$.cljs$core$IFn$_invoke$arity$2 ? constructor$.cljs$core$IFn$_invoke$arity$2(struct__$1,struct_SINGLEQUOTE_) : constructor$.call(null,struct__$1,struct_SINGLEQUOTE_))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest(values__$1),cljs.core.first(values__$1)], null);
}
});
return cljs.core.second(u(values,struct));
}));

(sicmutils.structure.unflatten.cljs$lang$maxFixedArity = 3);

/**
 * Returns a structure with the same shape as `s`, with all orientations
 *   inverted.
 */
sicmutils.structure.transpose = (function sicmutils$structure$transpose(s){
if(sicmutils.structure.structure_QMARK_(s)){
return sicmutils.structure.__GT_Structure((function (){var G__99799 = sicmutils.structure.orientation(s);
return (sicmutils.structure.opposite_orientation.cljs$core$IFn$_invoke$arity$1 ? sicmutils.structure.opposite_orientation.cljs$core$IFn$_invoke$arity$1(G__99799) : sicmutils.structure.opposite_orientation.call(null,G__99799));
})(),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sicmutils.structure.transpose,sicmutils.structure.structure__GT_vector(s)),cljs.core.meta(s));
} else {
return s;
}
});
/**
 * Returns a new structure with the same orientation as the first element of `s`,
 *   filled with elements of the same orientation as `s`.
 * 
 *   Each element is generating by taking the first element of each entry in `s`,
 *   the the second, etc... In that sense this is similar to a traditional matrix
 *   transpose.
 * 
 *   A comment from `scmutils` states:
 * 
 *   'used only in symmetrize-Christoffel in
 *   src/calculus/covariant-derivative.scm.'
 */
sicmutils.structure.transpose_outer = (function sicmutils$structure$transpose_outer(s){
var o = sicmutils.structure.orientation(s);
return sicmutils.structure.map_COLON_l((function() { 
var G__99868__delegate = function (xs){
return sicmutils.structure.make(o,xs);
};
var G__99868 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__99869__i = 0, G__99869__a = new Array(arguments.length -  0);
while (G__99869__i < G__99869__a.length) {G__99869__a[G__99869__i] = arguments[G__99869__i + 0]; ++G__99869__i;}
  xs = new cljs.core.IndexedSeq(G__99869__a,0,null);
} 
return G__99868__delegate.call(this,xs);};
G__99868.cljs$lang$maxFixedArity = 0;
G__99868.cljs$lang$applyTo = (function (arglist__99870){
var xs = cljs.core.seq(arglist__99870);
return G__99868__delegate(xs);
});
G__99868.cljs$core$IFn$_invoke$arity$variadic = G__99868__delegate;
return G__99868;
})()
,s);
});
/**
 * Returns a structure of the same shape and orientation as `s`, generated by
 *   substituting gensymmed symbols in for each entry.
 */
sicmutils.structure.typical_object = (function sicmutils$structure$typical_object(s){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (_){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));
});
/**
 * Returns a structure compatible for multiplication with `s` down to 0.
 */
sicmutils.structure.compatible_zero = (function sicmutils$structure$compatible_zero(s){
return sicmutils.value.zero_like(sicmutils.structure.transpose(s));
});
/**
 * Alias for [[compatible-zero]].
 */
sicmutils.structure.dual_zero = sicmutils.structure.compatible_zero;
/**
 * Returns a structure compatible for multiplication with `s` down to a scalar,
 *   with the slots filled with gensyms.
 */
sicmutils.structure.compatible_shape = (function sicmutils$structure$compatible_shape(s){
return sicmutils.structure.typical_object(sicmutils.structure.transpose(s));
});
/**
 * Returns a structure generated by multiplying every element of `v` by `s` (on
 *   the right).
 */
sicmutils.structure.structure_STAR_scalar = (function sicmutils$structure$structure_STAR_scalar(v,s){
return sicmutils.structure.same(v,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__99800_SHARP_){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(p1__99800_SHARP_,s);
}),v));
});
/**
 * Returns a structure generated by multiplying every element of `v` by `s` (on
 *   the left).
 */
sicmutils.structure.scalar_STAR_structure = (function sicmutils$structure$scalar_STAR_structure(s,v){
return sicmutils.structure.same(v,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__99801_SHARP_){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s,p1__99801_SHARP_);
}),v));
});
/**
 * Returns `true` if `s` and `t` are
 * 
 *   - of opposite orientation
 *   - equal in length
 *   - are full of elements also compatible for contraction (also true if either
 *  pair is NOT a structure)
 * 
 *   false otherwise.
 */
sicmutils.structure.compatible_for_contraction_QMARK_ = (function sicmutils$structure$compatible_for_contraction_QMARK_(s,t){
return (((!(sicmutils.structure.same_orientation_QMARK_(s,t)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(s),cljs.core.count(t))) && (cljs.core.every_QMARK_((function (p__99802){
var vec__99803 = p__99802;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99803,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99803,(1),null);
var or__4253__auto__ = (!(sicmutils.structure.structure_QMARK_(l)));
if(or__4253__auto__){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (!(sicmutils.structure.structure_QMARK_(r)));
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
return (sicmutils.structure.compatible_for_contraction_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sicmutils.structure.compatible_for_contraction_QMARK_.cljs$core$IFn$_invoke$arity$2(l,r) : sicmutils.structure.compatible_for_contraction_QMARK_.call(null,l,r));
}
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,s,t))))));
});
/**
 * Returns the (vector) dot product of `v1` and `v2`; this is equivalent to the sum
 *   of the pairwise product of each entry.
 * 
 *   The arguments must have identical length, and all pairwise entries must be
 *   compatible via [[g/*]].
 */
sicmutils.structure.vector_dot_product = (function sicmutils$structure$vector_dot_product(v1,v2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(v1),cljs.core.count(v2))){
} else {
throw (new Error(["Assert failed: ",["Not same dimension -- v:dot-product",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v1),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v2)].join(''),"\n","(= (count v1) (count v2))"].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(sicmutils.generic._STAR_,v1,v2));
});
/**
 * Returns the (vector) inner product of `v1` and `v2`; this is equivalent to the
 *   sum of the pairwise product of each entry.
 * 
 *  This is equivalent to [[vector-dot-product]] with every element of `v1`
 *   transformed into its complex conjugate.
 * 
 *   The arguments must have identical length, and all pairwise entries must be
 *   compatible via [[g/*]].
 */
sicmutils.structure.vector_inner_product = (function sicmutils$structure$vector_inner_product(v1,v2){
return sicmutils.structure.vector_dot_product(sicmutils.generic.conjugate.cljs$core$IFn$_invoke$arity$1(v1),v2);
});
/**
 * If `s` and `t` are compatible for contraction, returns their vector dot
 *   product.
 * 
 *   Else, returns a new structure generated by multiplying `s` by every element of
 *   `t`, following the usual multiplicating rules for whatever entry type exists.
 * 
 *   If `*allow-incompatible-multiplication*` is set to false, `s` and `t` will be
 *   checked for:
 * 
 *   - opposite orientations,
 *   - every element of `t` must be compatible for multiplication with all of `s`.
 * 
 *   If those tests fail, `s:*` will throw.
 */
sicmutils.structure.s_COLON__STAR_ = (function sicmutils$structure$s_COLON__STAR_(s,t){
if(sicmutils.structure.compatible_for_contraction_QMARK_(s,t)){
return sicmutils.structure.vector_dot_product(s,t);
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = sicmutils.structure._STAR_allow_incompatible_multiplication_STAR_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (((!(sicmutils.structure.same_orientation_QMARK_(s,t)))) && (cljs.core.every_QMARK_((function (elem){
return sicmutils.structure.compatible_for_contraction_QMARK_(s,elem);
}),t)));
}
})())){
return sicmutils.structure.scalar_STAR_structure(s,t);
} else {
return sicmutils.util.illegal(["Incompatible multiplication: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));

}
}
});
/**
 * Raise the structure `s` to the nth power.
 */
sicmutils.structure.expt = (function sicmutils$structure$expt(s,n){
var one = sicmutils.value.one_like(n);
if(sicmutils.value.one_QMARK_(n)){
return s;
} else {
if((n > one)){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s,sicmutils.generic.expt.cljs$core$IFn$_invoke$arity$2(s,sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(n,one)));
} else {
return sicmutils.util.arithmetic_ex(["Cannot: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("sicmutils.structure","expt","sicmutils.structure/expt",228670883,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null))], 0)))))].join(''));

}
}
});
/**
 * Returns the structural dot product of the compatible structures `s` and
 *   `t`.
 * 
 *   To be compatible, both structures must have the same structure.
 */
sicmutils.structure.dot_product = (function sicmutils$structure$dot_product(s,t){
var s_SINGLEQUOTE_ = sicmutils.structure.transpose(s);
if(sicmutils.structure.compatible_for_contraction_QMARK_(s_SINGLEQUOTE_,t)){
return sicmutils.structure.vector_dot_product(s_SINGLEQUOTE_,t);
} else {
return sicmutils.util.illegal(["incompatible structures: dot-product ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
}
});
/**
 * Returns the structural inner product of the compatible structures `s` and `t`.
 *   This is equivalent to [[dot-product]] with every element of `s` transformed
 *   into its complex conjugate.
 * 
 *   To be compatible, both structures must be of the same orientation and
 *   dimension. The internal structures currently do NOT have to match.
 */
sicmutils.structure.inner_product = (function sicmutils$structure$inner_product(s,t){
return sicmutils.structure.dot_product(sicmutils.generic.conjugate.cljs$core$IFn$_invoke$arity$1(s),t);
});
/**
 * The outer product of s and t is the structure `struct1` with each element at
 *   the first level multiplied by all of `struct2`, following the usual structure
 *   multiplication rules.
 */
sicmutils.structure.outer_product = (function sicmutils$structure$outer_product(struct2,struct1){
var xform = (function sicmutils$structure$outer_product_$_xform(s1){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (s2){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s1,s2);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([struct2], 0));
});
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(xform,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([struct1], 0));
});
/**
 * Returns the cross product of structures of length 3. Input orientations are
 *   ignored; result is an up-tuple.
 */
sicmutils.structure.cross_product = (function sicmutils$structure$cross_product(s,t){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(s),(3))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(t),(3))))){
sicmutils.util.illegal("cross product only works on two elements of ^3");
} else {
}

var vec__99806 = s;
var s0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99806,(0),null);
var s1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99806,(1),null);
var s2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99806,(2),null);
var vec__99809 = t;
var t0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99809,(0),null);
var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99809,(1),null);
var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99809,(2),null);
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s1,t2),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s2,t1)),sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s2,t0),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s0,t2)),sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s0,t1),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s1,t0))], 0));
});
/**
 * Given a binary operator and two structures of the same size, return
 *   a structure with the same orientation as the first formed from the
 *   elementwise binary operation between corresponding elements of the
 *   structures.
 */
sicmutils.structure.elementwise = (function sicmutils$structure$elementwise(op,s,t){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(s),cljs.core.count(t))){
return sicmutils.structure.__GT_Structure(sicmutils.structure.orientation(s),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(op,s,t),null);
} else {
return sicmutils.util.arithmetic_ex([cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)," provided arguments of differing length"].join(''));
}
});
sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924)], null),(function (a,b){
return sicmutils.structure.elementwise(sicmutils.generic._PLUS_,a,b);
}));
sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939),new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939)], null),(function (a,b){
return sicmutils.structure.elementwise(sicmutils.generic._PLUS_,a,b);
}));
sicmutils.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675)], null),(function (a){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic.negate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
}));
sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924)], null),(function (a,b){
return sicmutils.structure.elementwise(sicmutils.generic._,a,b);
}));
sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939),new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939)], null),(function (a,b){
return sicmutils.structure.elementwise(sicmutils.generic._,a,b);
}));
sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675),new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675)], null),(function (a,b){
return sicmutils.structure.s_COLON__STAR_(a,b);
}));
sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null),(function (a,b){
return sicmutils.structure.structure_STAR_scalar(a,b);
}));
sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675)], null),(function (a,b){
return sicmutils.structure.scalar_STAR_structure(a,b);
}));
sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null),(function (a,b){
return sicmutils.structure.structure_STAR_scalar(a,sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(b));
}));
sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017),new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675)], null),(function (op,s){
return sicmutils.structure.same(s,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__99812_SHARP_){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(op,p1__99812_SHARP_);
}),s));
}));
sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675),new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017)], null),(function (s,op){
return sicmutils.structure.same(s,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__99813_SHARP_){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(p1__99813_SHARP_,op);
}),s));
}));
sicmutils.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675)], null),(function (a){
return sicmutils.structure.dot_product(a,a);
}));
sicmutils.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675)], null),(function (a){
return sicmutils.structure.s_COLON__STAR_(a,sicmutils.structure.s_COLON__STAR_(a,a));
}));
sicmutils.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675),new cljs.core.Keyword("sicmutils.value","integral","sicmutils.value/integral",-1504868231)], null),(function (a,b){
return sicmutils.structure.expt(a,b);
}));
sicmutils.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675)], null),(function (a){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic.simplify,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
}));
sicmutils.generic.magnitude.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675)], null),(function (a){
return sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.structure.inner_product(a,a));
}));
sicmutils.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675)], null),(function (a){
return sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(sicmutils.structure.dot_product(a,a));
}));
sicmutils.generic.make_rectangular.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939),new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939)], null),(function (a,b){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic.make_rectangular,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
}));
sicmutils.generic.make_rectangular.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924)], null),(function (a,b){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic.make_rectangular,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
}));
sicmutils.generic.make_polar.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939),new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939)], null),(function (a,b){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic.make_polar,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
}));
sicmutils.generic.make_polar.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924)], null),(function (a,b){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic.make_polar,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
}));
sicmutils.generic.real_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675)], null),(function (m){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic.real_part,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
}));
sicmutils.generic.imag_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675)], null),(function (m){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic.imag_part,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
}));
sicmutils.generic.conjugate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675)], null),(function (a){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic.conjugate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
}));
sicmutils.generic.transpose.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675)], null),(function (a){
return sicmutils.structure.transpose(a);
}));
sicmutils.generic.dimension.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675)], null),(function (a){
return sicmutils.structure.dimension(a);
}));
sicmutils.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675),new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675)], null),(function (a,b){
return sicmutils.structure.dot_product(a,b);
}));
sicmutils.generic.inner_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675),new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675)], null),(function (a,b){
return sicmutils.structure.inner_product(a,b);
}));
sicmutils.generic.outer_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675),new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675)], null),(function (a,b){
return sicmutils.structure.outer_product(a,b);
}));
sicmutils.generic.cross_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939),new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939)], null),(function (a,b){
return sicmutils.structure.cross_product(a,b);
}));

//# sourceMappingURL=sicmutils.structure.js.map
