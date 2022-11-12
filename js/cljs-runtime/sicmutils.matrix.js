goog.provide('sicmutils.matrix');



cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459),new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.matrix","column-matrix","sicmutils.matrix/column-matrix",-2071627511),new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.matrix","row-matrix","sicmutils.matrix/row-matrix",-491554895),new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310),new cljs.core.Keyword("sicmutils.function","cofunction","sicmutils.function/cofunction",-547124902));

/**
* @constructor
 * @implements {sicmutils.function$.IArity}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IFind}
 * @implements {sicmutils.differential.IPerturbed}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {sicmutils.value.Value}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
sicmutils.matrix.Matrix = (function (r,c,v){
this.r = r;
this.c = c;
this.v = v;
this.cljs$lang$protocol_mask$partition0$ = 2174747415;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sicmutils.matrix.Matrix.prototype.cljs$core$IFind$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.matrix.Matrix.prototype.cljs$core$IFind$_find$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
return cljs.core._find(self__.v,n);
}));

(sicmutils.matrix.Matrix.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.v], 0));
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._lookup(self__.v,k);
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core._lookup(self__.v,k,not_found);
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
return cljs.core._nth(self__.v,n);
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core._nth(self__.v,n,not_found);
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var self__ = this;
var x__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#object[sicmutils.structure.Matrix \"",x__$1.toString(),"\"]"], 0));
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.v);
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return (sicmutils.matrix.m_COLON__EQ_.cljs$core$IFn$_invoke$arity$2 ? sicmutils.matrix.m_COLON__EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,that) : sicmutils.matrix.m_COLON__EQ_.call(null,this$__$1,that));
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.sicmutils$value$Value$zero_like$arity$1(null);
}));

(sicmutils.matrix.Matrix.prototype.sicmutils$value$Value$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.matrix.Matrix.prototype.sicmutils$value$Value$zero_like$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (sicmutils.matrix.fmap.cljs$core$IFn$_invoke$arity$2 ? sicmutils.matrix.fmap.cljs$core$IFn$_invoke$arity$2(sicmutils.value.zero_like,this$__$1) : sicmutils.matrix.fmap.call(null,sicmutils.value.zero_like,this$__$1));
}));

(sicmutils.matrix.Matrix.prototype.sicmutils$value$Value$identity_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return (sicmutils.matrix.identity_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sicmutils.matrix.identity_QMARK_.cljs$core$IFn$_invoke$arity$1(m__$1) : sicmutils.matrix.identity_QMARK_.call(null,m__$1));
}));

(sicmutils.matrix.Matrix.prototype.sicmutils$value$Value$freeze$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.c,(1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"column-matrix","column-matrix",977710190,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sicmutils.value.freeze,cljs.core.first),self__.v))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"matrix-by-rows","matrix-by-rows",-1400856559,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.value.freeze,self__.v))));
}
}));

(sicmutils.matrix.Matrix.prototype.sicmutils$value$Value$zero_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.every_QMARK_((function (p1__86855_SHARP_){
return cljs.core.every_QMARK_(sicmutils.value.zero_QMARK_,p1__86855_SHARP_);
}),self__.v);
}));

(sicmutils.matrix.Matrix.prototype.sicmutils$value$Value$one_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(sicmutils.matrix.Matrix.prototype.sicmutils$value$Value$exact_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.every_QMARK_((function (p1__86857_SHARP_){
return cljs.core.every_QMARK_(sicmutils.value.exact_QMARK_,p1__86857_SHARP_);
}),self__.v);
}));

(sicmutils.matrix.Matrix.prototype.sicmutils$value$Value$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.r,self__.c)){
return new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.r,(1))){
return new cljs.core.Keyword("sicmutils.matrix","row-matrix","sicmutils.matrix/row-matrix",-491554895);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.c,(1))){
return new cljs.core.Keyword("sicmutils.matrix","column-matrix","sicmutils.matrix/column-matrix",-2071627511);
} else {
return new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310);

}
}
}
}));

(sicmutils.matrix.Matrix.prototype.sicmutils$value$Value$identity_like$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (sicmutils.matrix.identity_like.cljs$core$IFn$_invoke$arity$1 ? sicmutils.matrix.identity_like.cljs$core$IFn$_invoke$arity$1(this$__$1) : sicmutils.matrix.identity_like.call(null,this$__$1));
}));

(sicmutils.matrix.Matrix.prototype.sicmutils$value$Value$one_like$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (sicmutils.matrix.identity_like.cljs$core$IFn$_invoke$arity$1 ? sicmutils.matrix.identity_like.cljs$core$IFn$_invoke$arity$1(this$__$1) : sicmutils.matrix.identity_like.call(null,this$__$1));
}));

(sicmutils.matrix.Matrix.prototype.sicmutils$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.matrix.Matrix.prototype.sicmutils$function$IArity$arity$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(sicmutils.function$.seq_arity),sicmutils.function$.combine_arities,self__.v);
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,entry){
var self__ = this;
var ___$1 = this;
return (new sicmutils.matrix.Matrix(self__.r,self__.c,cljs.core._assoc(self__.v,k,entry)));
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.v,k);
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._seq(self__.v);
}));

(sicmutils.matrix.Matrix.prototype.call = (function (unused__20572__auto__){
var self__ = this;
var self__ = this;
var G__86924 = (arguments.length - (1));
switch (G__86924) {
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

(sicmutils.matrix.Matrix.prototype.apply = (function (self__,args86920){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args86920)));
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return (new sicmutils.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__86887_SHARP_){
return (p1__86887_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__86887_SHARP_.cljs$core$IFn$_invoke$arity$1(a) : p1__86887_SHARP_.call(null,a));
}),row);
}),self__.v)));
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return (new sicmutils.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__86888_SHARP_){
return (p1__86888_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__86888_SHARP_.cljs$core$IFn$_invoke$arity$2(a,b) : p1__86888_SHARP_.call(null,a,b));
}),row);
}),self__.v)));
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,cx){
var self__ = this;
var _ = this;
return (new sicmutils.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__86889_SHARP_){
return (p1__86889_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__86889_SHARP_.cljs$core$IFn$_invoke$arity$3(a,b,cx) : p1__86889_SHARP_.call(null,a,b,cx));
}),row);
}),self__.v)));
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,cx,d){
var self__ = this;
var _ = this;
return (new sicmutils.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__86890_SHARP_){
return (p1__86890_SHARP_.cljs$core$IFn$_invoke$arity$4 ? p1__86890_SHARP_.cljs$core$IFn$_invoke$arity$4(a,b,cx,d) : p1__86890_SHARP_.call(null,a,b,cx,d));
}),row);
}),self__.v)));
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,cx,d,e){
var self__ = this;
var _ = this;
return (new sicmutils.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__86891_SHARP_){
return (p1__86891_SHARP_.cljs$core$IFn$_invoke$arity$5 ? p1__86891_SHARP_.cljs$core$IFn$_invoke$arity$5(a,b,cx,d,e) : p1__86891_SHARP_.call(null,a,b,cx,d,e));
}),row);
}),self__.v)));
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,cx,d,e,f){
var self__ = this;
var _ = this;
return (new sicmutils.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__86898_SHARP_){
return (p1__86898_SHARP_.cljs$core$IFn$_invoke$arity$6 ? p1__86898_SHARP_.cljs$core$IFn$_invoke$arity$6(a,b,cx,d,e,f) : p1__86898_SHARP_.call(null,a,b,cx,d,e,f));
}),row);
}),self__.v)));
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,cx,d,e,f,g){
var self__ = this;
var _ = this;
return (new sicmutils.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__86899_SHARP_){
return (p1__86899_SHARP_.cljs$core$IFn$_invoke$arity$7 ? p1__86899_SHARP_.cljs$core$IFn$_invoke$arity$7(a,b,cx,d,e,f,g) : p1__86899_SHARP_.call(null,a,b,cx,d,e,f,g));
}),row);
}),self__.v)));
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,cx,d,e,f,g,h){
var self__ = this;
var _ = this;
return (new sicmutils.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__86900_SHARP_){
return (p1__86900_SHARP_.cljs$core$IFn$_invoke$arity$8 ? p1__86900_SHARP_.cljs$core$IFn$_invoke$arity$8(a,b,cx,d,e,f,g,h) : p1__86900_SHARP_.call(null,a,b,cx,d,e,f,g,h));
}),row);
}),self__.v)));
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,cx,d,e,f,g,h,i){
var self__ = this;
var _ = this;
return (new sicmutils.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__86901_SHARP_){
return (p1__86901_SHARP_.cljs$core$IFn$_invoke$arity$9 ? p1__86901_SHARP_.cljs$core$IFn$_invoke$arity$9(a,b,cx,d,e,f,g,h,i) : p1__86901_SHARP_.call(null,a,b,cx,d,e,f,g,h,i));
}),row);
}),self__.v)));
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,cx,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
return (new sicmutils.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__86904_SHARP_){
return (p1__86904_SHARP_.cljs$core$IFn$_invoke$arity$10 ? p1__86904_SHARP_.cljs$core$IFn$_invoke$arity$10(a,b,cx,d,e,f,g,h,i,j) : p1__86904_SHARP_.call(null,a,b,cx,d,e,f,g,h,i,j));
}),row);
}),self__.v)));
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,cx,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
return (new sicmutils.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__86905_SHARP_){
return (p1__86905_SHARP_.cljs$core$IFn$_invoke$arity$11 ? p1__86905_SHARP_.cljs$core$IFn$_invoke$arity$11(a,b,cx,d,e,f,g,h,i,j,k) : p1__86905_SHARP_.call(null,a,b,cx,d,e,f,g,h,i,j,k));
}),row);
}),self__.v)));
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,cx,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return (new sicmutils.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__86906_SHARP_){
return (p1__86906_SHARP_.cljs$core$IFn$_invoke$arity$12 ? p1__86906_SHARP_.cljs$core$IFn$_invoke$arity$12(a,b,cx,d,e,f,g,h,i,j,k,l) : p1__86906_SHARP_.call(null,a,b,cx,d,e,f,g,h,i,j,k,l));
}),row);
}),self__.v)));
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,cx,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
return (new sicmutils.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__86907_SHARP_){
return (p1__86907_SHARP_.cljs$core$IFn$_invoke$arity$13 ? p1__86907_SHARP_.cljs$core$IFn$_invoke$arity$13(a,b,cx,d,e,f,g,h,i,j,k,l,m) : p1__86907_SHARP_.call(null,a,b,cx,d,e,f,g,h,i,j,k,l,m));
}),row);
}),self__.v)));
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,cx,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
return (new sicmutils.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__86908_SHARP_){
return (p1__86908_SHARP_.cljs$core$IFn$_invoke$arity$14 ? p1__86908_SHARP_.cljs$core$IFn$_invoke$arity$14(a,b,cx,d,e,f,g,h,i,j,k,l,m,n) : p1__86908_SHARP_.call(null,a,b,cx,d,e,f,g,h,i,j,k,l,m,n));
}),row);
}),self__.v)));
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
return (new sicmutils.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__86910_SHARP_){
return (p1__86910_SHARP_.cljs$core$IFn$_invoke$arity$15 ? p1__86910_SHARP_.cljs$core$IFn$_invoke$arity$15(a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o) : p1__86910_SHARP_.call(null,a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o));
}),row);
}),self__.v)));
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
return (new sicmutils.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__86911_SHARP_){
return (p1__86911_SHARP_.cljs$core$IFn$_invoke$arity$16 ? p1__86911_SHARP_.cljs$core$IFn$_invoke$arity$16(a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p) : p1__86911_SHARP_.call(null,a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p));
}),row);
}),self__.v)));
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
return (new sicmutils.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__86912_SHARP_){
return (p1__86912_SHARP_.cljs$core$IFn$_invoke$arity$17 ? p1__86912_SHARP_.cljs$core$IFn$_invoke$arity$17(a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q) : p1__86912_SHARP_.call(null,a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q));
}),row);
}),self__.v)));
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q,rx){
var self__ = this;
var _ = this;
return (new sicmutils.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__86913_SHARP_){
return (p1__86913_SHARP_.cljs$core$IFn$_invoke$arity$18 ? p1__86913_SHARP_.cljs$core$IFn$_invoke$arity$18(a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q,rx) : p1__86913_SHARP_.call(null,a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q,rx));
}),row);
}),self__.v)));
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q,rx,s){
var self__ = this;
var _ = this;
return (new sicmutils.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__86914_SHARP_){
return (p1__86914_SHARP_.cljs$core$IFn$_invoke$arity$19 ? p1__86914_SHARP_.cljs$core$IFn$_invoke$arity$19(a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q,rx,s) : p1__86914_SHARP_.call(null,a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q,rx,s));
}),row);
}),self__.v)));
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q,rx,s,t){
var self__ = this;
var _ = this;
return (new sicmutils.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__86915_SHARP_){
return (p1__86915_SHARP_.cljs$core$IFn$_invoke$arity$20 ? p1__86915_SHARP_.cljs$core$IFn$_invoke$arity$20(a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q,rx,s,t) : p1__86915_SHARP_.call(null,a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q,rx,s,t));
}),row);
}),self__.v)));
}));

(sicmutils.matrix.Matrix.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,cx,d,e,f,g,h,i,j,k,l,m,n,o,p,q,rx,s,t,rest){
var self__ = this;
var _ = this;
return (new sicmutils.matrix.Matrix(self__.r,self__.c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__86916_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(p1__86916_SHARP_,a,b,cx,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f,g,h,i,j,k,l,m,n,o,p,q,rx,s,t,rest], 0));
}),row);
}),self__.v)));
}));

(sicmutils.matrix.Matrix.prototype.sicmutils$differential$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.matrix.Matrix.prototype.sicmutils$differential$IPerturbed$perturbed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.boolean$(cljs.core.some(sicmutils.differential.perturbed_QMARK_,self__.v));
}));

(sicmutils.matrix.Matrix.prototype.sicmutils$differential$IPerturbed$replace_tag$arity$3 = (function (M,old,new$){
var self__ = this;
var M__$1 = this;
var G__86987 = (function (p1__86858_SHARP_){
return sicmutils.differential.replace_tag(p1__86858_SHARP_,old,new$);
});
var G__86988 = M__$1;
return (sicmutils.matrix.fmap.cljs$core$IFn$_invoke$arity$2 ? sicmutils.matrix.fmap.cljs$core$IFn$_invoke$arity$2(G__86987,G__86988) : sicmutils.matrix.fmap.call(null,G__86987,G__86988));
}));

(sicmutils.matrix.Matrix.prototype.sicmutils$differential$IPerturbed$extract_tangent$arity$2 = (function (M,tag){
var self__ = this;
var M__$1 = this;
var G__86995 = (function (p1__86859_SHARP_){
return sicmutils.differential.extract_tangent(p1__86859_SHARP_,tag);
});
var G__86996 = M__$1;
return (sicmutils.matrix.fmap.cljs$core$IFn$_invoke$arity$2 ? sicmutils.matrix.fmap.cljs$core$IFn$_invoke$arity$2(G__86995,G__86996) : sicmutils.matrix.fmap.call(null,G__86995,G__86996));
}));

(sicmutils.matrix.Matrix.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
}));

(sicmutils.matrix.Matrix.cljs$lang$type = true);

(sicmutils.matrix.Matrix.cljs$lang$ctorStr = "sicmutils.matrix/Matrix");

(sicmutils.matrix.Matrix.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"sicmutils.matrix/Matrix");
}));

/**
 * Positional factory function for sicmutils.matrix/Matrix.
 */
sicmutils.matrix.__GT_Matrix = (function sicmutils$matrix$__GT_Matrix(r,c,v){
return (new sicmutils.matrix.Matrix(r,c,v));
});

/**
 * Returns true if the supplied `m` is an instance of [[Matrix]], false
 *   otherwise.
 */
sicmutils.matrix.matrix_QMARK_ = (function sicmutils$matrix$matrix_QMARK_(m){
return (m instanceof sicmutils.matrix.Matrix);
});
/**
 * Returns the number of rows of the supplied matrix `m`. Throws if a
 *   non-matrix is supplied.
 */
sicmutils.matrix.num_rows = (function sicmutils$matrix$num_rows(m){
if(sicmutils.matrix.matrix_QMARK_(m)){
return m.r;
} else {
return sicmutils.util.illegal(["non-matrix supplied: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''));
}
});
/**
 * Returns the number of columns of the supplied matrix `m`. Throws if a
 *   non-matrix is supplied.
 */
sicmutils.matrix.num_cols = (function sicmutils$matrix$num_cols(m){
if(sicmutils.matrix.matrix_QMARK_(m)){
return m.c;
} else {
return sicmutils.util.illegal(["non-matrix supplied: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''));
}
});
/**
 * If `m` is already a vector, acts as identity. Else, returns the matrix as a
 *   vector of rows (or throws if neither of these types is passed).
 */
sicmutils.matrix.matrix__GT_vector = (function sicmutils$matrix$matrix__GT_vector(m){
if(cljs.core.vector_QMARK_(m)){
return m;
} else {
if(sicmutils.matrix.matrix_QMARK_(m)){
return m.v;
} else {
return sicmutils.util.illegal(["non-matrix supplied: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''));

}
}
});
/**
 * Returns true if `m` is a square matrix, false otherwise.
 */
sicmutils.matrix.square_QMARK_ = (function sicmutils$matrix$square_QMARK_(m){
return ((sicmutils.matrix.matrix_QMARK_(m)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.num_rows(m),sicmutils.matrix.num_cols(m))));
});
/**
 * Returns true if `m` is a matrix with a single column (a 'column matrix'),
 *   false otherwise.
 */
sicmutils.matrix.column_QMARK_ = (function sicmutils$matrix$column_QMARK_(m){
return ((sicmutils.matrix.matrix_QMARK_(m)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.num_cols(m),(1))));
});
/**
 * Returns true if `m` is a matrix with a single row (a 'row matrix'), false
 *   otherwise.
 */
sicmutils.matrix.row_QMARK_ = (function sicmutils$matrix$row_QMARK_(m){
return ((sicmutils.matrix.matrix_QMARK_(m)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.num_rows(m),(1))));
});
/**
 * Returns true if the matrices `this` and `that` are of identical shape and
 *   return `v/=` for all entries, false otherwise.
 */
sicmutils.matrix.m_COLON__EQ_ = (function sicmutils$matrix$m_COLON__EQ_(this$,that){
var and__4251__auto__ = (that instanceof sicmutils.matrix.Matrix);
if(and__4251__auto__){
var m = that;
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$.r,m.r);
if(and__4251__auto____$1){
var and__4251__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$.c,m.c);
if(and__4251__auto____$2){
return sicmutils.value._EQ_.cljs$core$IFn$_invoke$arity$2(this$.v,m.v);
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
});
/**
 * Returns true if the matrix `m` is a diagonal matrix with all diagonal elements
 *   equal to `c`, false otherwise.
 */
sicmutils.matrix.matrix_EQ_scalar = (function sicmutils$matrix$matrix_EQ_scalar(m,c){
var and__4251__auto__ = sicmutils.matrix.square_QMARK_(m);
if(and__4251__auto__){
return sicmutils.matrix.m_COLON__EQ_(m,(function (){var G__87000 = sicmutils.matrix.num_rows(m);
var G__87001 = c;
return (sicmutils.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$2 ? sicmutils.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$2(G__87000,G__87001) : sicmutils.matrix.make_diagonal.call(null,G__87000,G__87001));
})());
} else {
return and__4251__auto__;
}
});
/**
 * Returns true if the matrix `m` is a diagonal matrix with all diagonal elements
 *   equal to `c`, false otherwise.
 */
sicmutils.matrix.scalar_EQ_matrix = (function sicmutils$matrix$scalar_EQ_matrix(c,m){
var and__4251__auto__ = sicmutils.matrix.square_QMARK_(m);
if(and__4251__auto__){
return sicmutils.matrix.m_COLON__EQ_((function (){var G__87002 = sicmutils.matrix.num_rows(m);
var G__87003 = c;
return (sicmutils.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$2 ? sicmutils.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$2(G__87002,G__87003) : sicmutils.matrix.make_diagonal.call(null,G__87002,G__87003));
})(),m);
} else {
return and__4251__auto__;
}
});
/**
 * Returns a matrix with `r` rows and `c` columns, whose entries are generated by
 *   the supplied function `f`.
 * 
 *   If you only supply one dimension `n` the returned matrix will be square.
 * 
 *   The entry in the `i`th row and `j`-th column is `(f i j)`.
 */
sicmutils.matrix.generate = (function sicmutils$matrix$generate(var_args){
var G__87005 = arguments.length;
switch (G__87005) {
case 2:
return sicmutils.matrix.generate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.matrix.generate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.matrix.generate.cljs$core$IFn$_invoke$arity$2 = (function (n,f){
return sicmutils.matrix.generate.cljs$core$IFn$_invoke$arity$3(n,n,f);
}));

(sicmutils.matrix.generate.cljs$core$IFn$_invoke$arity$3 = (function (r,c,f){
return sicmutils.matrix.__GT_Matrix(r,c,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (j){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(i,j) : f.call(null,i,j));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(r)));
}));

(sicmutils.matrix.generate.cljs$lang$maxFixedArity = 3);

/**
 * Generates a `nrows` x `ncols` matrix of symbolic entries, each prefixed by the
 *   supplied symbol `sym`.
 * 
 *   If `ncols` (the third argument) is not supplied, returns a square matrix of
 *   size `nrows` x `nrows`.
 * 
 *   NOTE: The symbols in the returned matrix record their Einstein-notation path
 *   into the structure that this matrix represents; a `down` of `up` columns. This
 *   means that the returned indices embedded in the symbols look flipped, `ji` vs
 *   `ij`.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (= (literal-matrix 'x 2 2)
 *   (by-rows ['x_0↑0 'x_1↑0]
 *            ['x_0↑1 'x_1↑1]))
 *   ```
 */
sicmutils.matrix.literal_matrix = (function sicmutils$matrix$literal_matrix(var_args){
var G__87008 = arguments.length;
switch (G__87008) {
case 2:
return sicmutils.matrix.literal_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.matrix.literal_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.matrix.literal_matrix.cljs$core$IFn$_invoke$arity$2 = (function (sym,nrows){
return sicmutils.matrix.literal_matrix.cljs$core$IFn$_invoke$arity$3(sym,nrows,nrows);
}));

(sicmutils.matrix.literal_matrix.cljs$core$IFn$_invoke$arity$3 = (function (sym,nrows,ncols){
var prefix = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"_"].join('');
return sicmutils.matrix.generate.cljs$core$IFn$_invoke$arity$3(nrows,ncols,(function (i,j){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(j),"\u2191",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''));
}));
}));

(sicmutils.matrix.literal_matrix.cljs$lang$maxFixedArity = 3);

/**
 * Returns a column matrix of `nrows` symbolic entries, each prefixed by the
 *   supplied symbol `sym`.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (= (literal-column-matrix 'x 3)
 *   (by-cols ['x↑0 'x↑1 'x↑2]))
 *   ```
 */
sicmutils.matrix.literal_column_matrix = (function sicmutils$matrix$literal_column_matrix(sym,nrows){
return sicmutils.matrix.generate.cljs$core$IFn$_invoke$arity$3(nrows,(1),(function (i,_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"\u2191",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''));
}));
});
/**
 * Returns a row matrix of `ncols` symbolic entries, each prefixed by the
 *   supplied symbol `sym`.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (= (literal-row-matrix 'x 3)
 *   (by-rows ['x_0 'x_1 'x_2]))
 *   ```
 */
sicmutils.matrix.literal_row_matrix = (function sicmutils$matrix$literal_row_matrix(sym,ncols){
return sicmutils.matrix.generate.cljs$core$IFn$_invoke$arity$3((1),ncols,(function (_,j){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join(''));
}));
});
/**
 * Like [[clojure.core/get-in]] for matrices, but obeying the scmutils convention:
 *   only one index is required to get an unboxed element from a column vector.
 * 
 *   NOTE that this is perhaps an unprincipled exception...
 */
sicmutils.matrix.get_in = (function sicmutils$matrix$get_in(m,is){
var e = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,is);
if(((sicmutils.matrix.column_QMARK_(m)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(is))))){
return (e.cljs$core$IFn$_invoke$arity$1 ? e.cljs$core$IFn$_invoke$arity$1((0)) : e.call(null,(0)));
} else {
return e;
}
});
/**
 * Returns true if `f` is true for some element of the matrix `m`, false
 *   otherwise. (Also works on arbitrary nested sequences.)
 */
sicmutils.matrix.some = (function sicmutils$matrix$some(f,m){
return cljs.core.some(f,cljs.core.flatten(m));
});
/**
 * Maps `f` over the elements of the matrix `m` returning a new matrix of the same
 *   dimensions as `m`.
 */
sicmutils.matrix.fmap = (function sicmutils$matrix$fmap(f,m){
return sicmutils.matrix.__GT_Matrix(sicmutils.matrix.num_rows(m),sicmutils.matrix.num_cols(m),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__87014_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(f,p1__87014_SHARP_);
}),m));
});
/**
 * Maps `f` over three arguments:
 * 
 *   - each element of the matrix `m`
 *   - its row `i`
 *   - its column `j`
 * 
 *   and returns a new matrix of the same dimensions as `m`. 
 */
sicmutils.matrix.fmap_indexed = (function sicmutils$matrix$fmap_indexed(f,m){
var process_row = (function sicmutils$matrix$fmap_indexed_$_process_row(i,row){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (j,elem){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(elem,i,j) : f.call(null,elem,i,j));
}),row));
});
var new_rows = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(process_row,m));
return sicmutils.matrix.__GT_Matrix(sicmutils.matrix.num_rows(m),sicmutils.matrix.num_cols(m),new_rows);
});
/**
 * Returns true if the supplied sequence contains only sequences of the same
 *   length (that could be transformed into columns of a matrix), false otherwise
 */
sicmutils.matrix.well_formed_QMARK_ = (function sicmutils$matrix$well_formed_QMARK_(vs){
if(cljs.core.seq(vs)){
} else {
throw (new Error("Assert failed: (seq vs)"));
}

if(cljs.core.every_QMARK_(cljs.core.seq,vs)){
} else {
throw (new Error("Assert failed: (every? seq vs)"));
}

var counts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,vs);
return cljs.core.every_QMARK_((function (p1__87015_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__87015_SHARP_,cljs.core.first(counts));
}),cljs.core.next(counts));
});
/**
 * Returns a matrix whose rows consist of the supplied sequence of `rows`. These
 *   all must be the same length.
 * 
 *   for a variadic equivalent, see [[by-rows]].
 */
sicmutils.matrix.by_rows_STAR_ = (function sicmutils$matrix$by_rows_STAR_(rows){
if(sicmutils.matrix.well_formed_QMARK_(rows)){
return sicmutils.matrix.__GT_Matrix(cljs.core.count(rows),cljs.core.count(cljs.core.first(rows)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,rows));
} else {
return sicmutils.util.illegal("malformed matrix");
}
});
/**
 * Returns a matrix whose rows consist of the supplied sequence of `rows`. These
 *   all must be the same length.
 * 
 *   Variadic equivalent to [[by-rows*]].
 */
sicmutils.matrix.by_rows = (function sicmutils$matrix$by_rows(var_args){
var args__4870__auto__ = [];
var len__4864__auto___87318 = arguments.length;
var i__4865__auto___87319 = (0);
while(true){
if((i__4865__auto___87319 < len__4864__auto___87318)){
args__4870__auto__.push((arguments[i__4865__auto___87319]));

var G__87320 = (i__4865__auto___87319 + (1));
i__4865__auto___87319 = G__87320;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sicmutils.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sicmutils.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic = (function (rows){
return sicmutils.matrix.by_rows_STAR_(rows);
}));

(sicmutils.matrix.by_rows.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.matrix.by_rows.cljs$lang$applyTo = (function (seq87016){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq87016));
}));

/**
 * Returns a matrix whose columns consist of the supplied sequence of `cols`.
 *   These all must be the same length.
 * 
 *   for a variadic equivalent, see [[by-cols]].
 */
sicmutils.matrix.by_cols_STAR_ = (function sicmutils$matrix$by_cols_STAR_(cols){
if(sicmutils.matrix.well_formed_QMARK_(cols)){
return sicmutils.matrix.__GT_Matrix(cljs.core.count(cljs.core.first(cols)),cljs.core.count(cols),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,cols));
} else {
return sicmutils.util.illegal("malformed matrix");
}
});
/**
 * Returns a matrix whose columns consist of the supplied sequence of `cols`.
 *   These all must be the same length.
 * 
 *   Variadic equivalent to [[by-cols*]].
 */
sicmutils.matrix.by_cols = (function sicmutils$matrix$by_cols(var_args){
var args__4870__auto__ = [];
var len__4864__auto___87321 = arguments.length;
var i__4865__auto___87322 = (0);
while(true){
if((i__4865__auto___87322 < len__4864__auto___87321)){
args__4870__auto__.push((arguments[i__4865__auto___87322]));

var G__87323 = (i__4865__auto___87322 + (1));
i__4865__auto___87322 = G__87323;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sicmutils.matrix.by_cols.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sicmutils.matrix.by_cols.cljs$core$IFn$_invoke$arity$variadic = (function (cols){
return sicmutils.matrix.by_cols_STAR_(cols);
}));

(sicmutils.matrix.by_cols.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.matrix.by_cols.cljs$lang$applyTo = (function (seq87017){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq87017));
}));

/**
 * Returns a row matrix populated by the supplied `xs`. For a variadic equivalent,
 *   see [[row]].
 */
sicmutils.matrix.row_STAR_ = (function sicmutils$matrix$row_STAR_(xs){
if(cljs.core.truth_(cljs.core.not_empty(xs))){
} else {
throw (new Error("Assert failed: (not-empty xs)"));
}

return sicmutils.matrix.__GT_Matrix((1),cljs.core.count(xs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(xs)], null));
});
/**
 * Returns a row matrix populated by the supplied `xs`. Variadic equivalent
 *   to [[row*]].
 */
sicmutils.matrix.row = (function sicmutils$matrix$row(var_args){
var args__4870__auto__ = [];
var len__4864__auto___87324 = arguments.length;
var i__4865__auto___87325 = (0);
while(true){
if((i__4865__auto___87325 < len__4864__auto___87324)){
args__4870__auto__.push((arguments[i__4865__auto___87325]));

var G__87326 = (i__4865__auto___87325 + (1));
i__4865__auto___87325 = G__87326;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sicmutils.matrix.row.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sicmutils.matrix.row.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return sicmutils.matrix.row_STAR_(xs);
}));

(sicmutils.matrix.row.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.matrix.row.cljs$lang$applyTo = (function (seq87019){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq87019));
}));

/**
 * Returns a column matrix populated by the supplied `xs`. For a variadic equivalent,
 *   see [[column]].
 */
sicmutils.matrix.column_STAR_ = (function sicmutils$matrix$column_STAR_(xs){
if(cljs.core.truth_(cljs.core.not_empty(xs))){
} else {
throw (new Error("Assert failed: (not-empty xs)"));
}

return sicmutils.matrix.__GT_Matrix(cljs.core.count(xs),(1),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,xs));
});
/**
 * Returns a column matrix populated by the supplied `xs`. Variadic equivalent
 *   to [[column*]].
 */
sicmutils.matrix.column = (function sicmutils$matrix$column(var_args){
var args__4870__auto__ = [];
var len__4864__auto___87329 = arguments.length;
var i__4865__auto___87330 = (0);
while(true){
if((i__4865__auto___87330 < len__4864__auto___87329)){
args__4870__auto__.push((arguments[i__4865__auto___87330]));

var G__87331 = (i__4865__auto___87330 + (1));
i__4865__auto___87330 = G__87331;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sicmutils.matrix.column.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sicmutils.matrix.column.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return sicmutils.matrix.column_STAR_(xs);
}));

(sicmutils.matrix.column.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.matrix.column.cljs$lang$applyTo = (function (seq87026){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq87026));
}));

/**
 * Returns the transpose of the matrix `m`. The transpose is the original matrix,
 *   with rows and columns swapped.
 */
sicmutils.matrix.transpose = (function sicmutils$matrix$transpose(m){
return sicmutils.matrix.generate.cljs$core$IFn$_invoke$arity$3(sicmutils.matrix.num_cols(m),sicmutils.matrix.num_rows(m),(function (p1__87028_SHARP_,p2__87027_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__87027_SHARP_,p1__87028_SHARP_], null));
}));
});
/**
 * Returns a structure generated by converting `m` into a nested structure with
 *   the supplied `outer-orientation` and `inner-orientation`.
 * 
 *   If `t?` is true, the columns of `m` will form the inner tuples. If `t?` is
 *   false, the rows of `m` will form the inner tuples.
 * 
 *   By default, if you supply a single argument (the matrix `m`), a matrix turns
 *   into a single outer `::s/down` of inner columns represented as `::up`
 *   structures.
 */
sicmutils.matrix.__GT_structure = (function sicmutils$matrix$__GT_structure(var_args){
var G__87031 = arguments.length;
switch (G__87031) {
case 1:
return sicmutils.matrix.__GT_structure.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return sicmutils.matrix.__GT_structure.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.matrix.__GT_structure.cljs$core$IFn$_invoke$arity$1 = (function (m){
return sicmutils.matrix.__GT_structure.cljs$core$IFn$_invoke$arity$4(m,new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939),true);
}));

(sicmutils.matrix.__GT_structure.cljs$core$IFn$_invoke$arity$4 = (function (m,outer_orientation,inner_orientation,t_QMARK_){
if(sicmutils.structure.valid_orientation_QMARK_(outer_orientation)){
} else {
throw (new Error("Assert failed: (s/valid-orientation? outer-orientation)"));
}

if(sicmutils.structure.valid_orientation_QMARK_(inner_orientation)){
} else {
throw (new Error("Assert failed: (s/valid-orientation? inner-orientation)"));
}

var m_SINGLEQUOTE_ = (cljs.core.truth_(t_QMARK_)?sicmutils.matrix.transpose(m):m);
return sicmutils.structure.make(outer_orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__87029_SHARP_){
return sicmutils.structure.make(inner_orientation,p1__87029_SHARP_);
}),m_SINGLEQUOTE_));
}));

(sicmutils.matrix.__GT_structure.cljs$lang$maxFixedArity = 4);

/**
 * Convert a sequence `xs` (typically, of function arguments) to an up-structure.
 * 
 *   Any matrix present in the argument list will be converted to row of columns
 *   via [[->structure]].
 */
sicmutils.matrix.seq__GT_ = (function sicmutils$matrix$seq__GT_(xs){
return sicmutils.structure.up_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
if(sicmutils.matrix.matrix_QMARK_(m)){
return sicmutils.matrix.__GT_structure.cljs$core$IFn$_invoke$arity$1(m);
} else {
return m;
}
}),xs));
});
/**
 * Returns the matrix product of `a` and `b`. Throws if `a` and `b` are
 *   incompatible for multiplication.
 */
sicmutils.matrix.mul = (function sicmutils$matrix$mul(a,b){
var ra = sicmutils.matrix.num_rows(a);
var rb = sicmutils.matrix.num_rows(b);
var ca = sicmutils.matrix.num_cols(a);
var cb = sicmutils.matrix.num_cols(b);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ca,rb)){
} else {
sicmutils.util.illegal("matrices incompatible for multiplication");
}

return sicmutils.matrix.generate.cljs$core$IFn$_invoke$arity$3(ra,cb,(function (p1__87033_SHARP_,p2__87034_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_,(function (){var iter__4652__auto__ = (function sicmutils$matrix$mul_$_iter__87036(s__87037){
return (new cljs.core.LazySeq(null,(function (){
var s__87037__$1 = s__87037;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__87037__$1);
if(temp__5753__auto__){
var s__87037__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__87037__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__87037__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__87039 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__87038 = (0);
while(true){
if((i__87038 < size__4651__auto__)){
var k = cljs.core._nth(c__4650__auto__,i__87038);
cljs.core.chunk_append(b__87039,sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__87033_SHARP_,k], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,p2__87034_SHARP_], null))));

var G__87345 = (i__87038 + (1));
i__87038 = G__87345;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__87039),sicmutils$matrix$mul_$_iter__87036(cljs.core.chunk_rest(s__87037__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__87039),null);
}
} else {
var k = cljs.core.first(s__87037__$2);
return cljs.core.cons(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__87033_SHARP_,k], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,p2__87034_SHARP_], null))),sicmutils$matrix$mul_$_iter__87036(cljs.core.rest(s__87037__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(ca));
})());
}));
});
/**
 * Returns a matrix of the same dimensions as matrix `m` with each entry
 *   multiplied (on the left) by the scalar quantity `c`.
 */
sicmutils.matrix.scalar_STAR_matrix = (function sicmutils$matrix$scalar_STAR_matrix(c,m){
return sicmutils.matrix.fmap((function (p1__87043_SHARP_){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(c,p1__87043_SHARP_);
}),m);
});
/**
 * Returns a matrix of the same dimensions as matrix `m` with each entry
 *   multiplied (on the right) by the scalar quantity `c`.
 */
sicmutils.matrix.matrix_STAR_scalar = (function sicmutils$matrix$matrix_STAR_scalar(m,c){
return sicmutils.matrix.fmap((function (p1__87052_SHARP_){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(p1__87052_SHARP_,c);
}),m);
});
/**
 * Applies `f` elementwise between the matrices `a` and `b`. Throws if `a` and `b`
 *   don't have the same dimensions.
 */
sicmutils.matrix.elementwise = (function sicmutils$matrix$elementwise(f,a,b){
var ra = sicmutils.matrix.num_rows(a);
var rb = sicmutils.matrix.num_rows(b);
var ca = sicmutils.matrix.num_cols(a);
var cb = sicmutils.matrix.num_cols(b);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ra,rb)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ca,cb)))){
sicmutils.util.illegal("matrices incompatible for operation");
} else {
}

return sicmutils.matrix.generate.cljs$core$IFn$_invoke$arity$3(ra,ca,(function (p1__87056_SHARP_,p2__87057_SHARP_){
var G__87065 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__87056_SHARP_,p2__87057_SHARP_], null));
var G__87066 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__87056_SHARP_,p2__87057_SHARP_], null));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__87065,G__87066) : f.call(null,G__87065,G__87066));
}));
});
/**
 * Converts the square structure `s` into a matrix, and calls the supplied
 *   continuation `cont` with
 * 
 *   - the generated matrix
 *   - a function which will restore a matrix to a structure with the same inner
 *  and outer orientations as s
 * 
 *   Returns the result of the continuation call.
 */
sicmutils.matrix.two_tensor__GT_ = (function sicmutils$matrix$two_tensor__GT_(s,cont){
var temp__5751__auto__ = sicmutils.structure.two_tensor_info(s);
if(cljs.core.truth_(temp__5751__auto__)){
var map__87072 = temp__5751__auto__;
var map__87072__$1 = cljs.core.__destructure_map(map__87072);
var inner_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87072__$1,new cljs.core.Keyword(null,"inner-size","inner-size",755766819));
var outer_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87072__$1,new cljs.core.Keyword(null,"outer-size","outer-size",705588000));
var inner_orientation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87072__$1,new cljs.core.Keyword(null,"inner-orientation","inner-orientation",-728775897));
var outer_orientation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87072__$1,new cljs.core.Keyword(null,"outer-orientation","outer-orientation",-985566313));
var transpose_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inner_orientation,new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939));
var vec__87073 = ((transpose_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inner_size,outer_size], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [outer_size,inner_size], null));
var major_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87073,(0),null);
var minor_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87073,(1),null);
var M = sicmutils.matrix.generate.cljs$core$IFn$_invoke$arity$3(major_size,minor_size,(function (i,j){
var path = ((transpose_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,path);
}));
var restore_fn = (function (m){
return sicmutils.matrix.__GT_structure.cljs$core$IFn$_invoke$arity$4(m,outer_orientation,inner_orientation,transpose_QMARK_);
});
return (cont.cljs$core$IFn$_invoke$arity$2 ? cont.cljs$core$IFn$_invoke$arity$2(M,restore_fn) : cont.call(null,M,restore_fn));
} else {
return sicmutils.util.illegal(["structure ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," is not a 2-tensor"].join(''));
}
});
/**
 * Applies matrix operation `f` to square structure `s` and returns a structure of
 *   the same type as the supplied structure.
 */
sicmutils.matrix.two_tensor_operation = (function sicmutils$matrix$two_tensor_operation(s,f){
return sicmutils.matrix.two_tensor__GT_(s,(function (m,__GT_s){
var G__87092 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null,m));
return (__GT_s.cljs$core$IFn$_invoke$arity$1 ? __GT_s.cljs$core$IFn$_invoke$arity$1(G__87092) : __GT_s.call(null,G__87092));
}));
});
/**
 * Given some 2-tensor-shaped structure `s`, returns the corresponding matrix.
 * 
 *   The outer orientation is ignored; If the inner structures are `up`, they're
 *   treated as columns. Inner `down` structures are treated as rows.
 */
sicmutils.matrix.structure__GT_matrix = (function sicmutils$matrix$structure__GT_matrix(s){
return sicmutils.matrix.two_tensor__GT_(s,(function (m,_){
return m;
}));
});
/**
 * Multiply a matrix by an up structure on the right. The return value is up.
 */
sicmutils.matrix.M_STAR_u = (function sicmutils$matrix$M_STAR_u(m,u){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.num_cols(m),cljs.core.count(u))){
sicmutils.util.illegal("matrix and tuple incompatible for multiplication");
} else {
}

return sicmutils.structure.up_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
var row_i = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,i);
var G__87107 = (function (k){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(row_i,k),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(u,k));
});
var G__87108 = (0);
var G__87109 = sicmutils.matrix.num_cols(m);
return (sicmutils.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3 ? sicmutils.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3(G__87107,G__87108,G__87109) : sicmutils.util.aggregate.generic_sum.call(null,G__87107,G__87108,G__87109));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(sicmutils.matrix.num_rows(m))));
});
/**
 * Multiply a matrix `m` by down tuple `d` on the left. The return value has
 *   orientation `down`.
 */
sicmutils.matrix.d_STAR_M = (function sicmutils$matrix$d_STAR_M(d,m){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(d),sicmutils.matrix.num_rows(m))){
sicmutils.util.illegal("matrix and tuple incompatible for multiplication");
} else {
}

return sicmutils.structure.down_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
var G__87113 = (function (k){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(d,k),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,i], null)));
});
var G__87114 = (0);
var G__87115 = sicmutils.matrix.num_rows(m);
return (sicmutils.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3 ? sicmutils.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3(G__87113,G__87114,G__87115) : sicmutils.util.aggregate.generic_sum.call(null,G__87113,G__87114,G__87115));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(sicmutils.matrix.num_cols(m))));
});
/**
 * Set this dynamic variable to `false` to allow [[s->m]] to operate
 *   on structures for which `(* ls ms rs)` does NOT yield a numerical value.
 */
sicmutils.matrix._STAR_careful_conversion_STAR_ = true;
/**
 * Convert the structure `ms`, which would be a scalar if the (compatible)
 *   multiplication `(* ls ms rs)` were performed, to a matrix.
 */
sicmutils.matrix.s__GT_m = (function sicmutils$matrix$s__GT_m(var_args){
var G__87117 = arguments.length;
switch (G__87117) {
case 2:
return sicmutils.matrix.s__GT_m.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.matrix.s__GT_m.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.matrix.s__GT_m.cljs$core$IFn$_invoke$arity$2 = (function (ms,rs){
var ls = sicmutils.structure.compatible_shape(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(ms,rs));
return sicmutils.matrix.s__GT_m.cljs$core$IFn$_invoke$arity$3(ls,ms,rs);
}));

(sicmutils.matrix.s__GT_m.cljs$core$IFn$_invoke$arity$3 = (function (ls,ms,rs){
if(cljs.core.truth_(sicmutils.matrix._STAR_careful_conversion_STAR_)){
if(sicmutils.value.numerical_QMARK_(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(ls,sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(ms,rs)))){
} else {
throw (new Error("Assert failed: (v/numerical? (g/* ls (g/* ms rs)))"));
}
} else {
}

var ndowns = sicmutils.structure.dimension(ls);
var nups = sicmutils.structure.dimension(rs);
return sicmutils.matrix.generate.cljs$core$IFn$_invoke$arity$3(ndowns,nups,(function (i,j){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.structure.unflatten.cljs$core$IFn$_invoke$arity$2(sicmutils.structure.basis_unit.cljs$core$IFn$_invoke$arity$2(ndowns,i),ls),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(ms,sicmutils.structure.unflatten.cljs$core$IFn$_invoke$arity$2(sicmutils.structure.basis_unit.cljs$core$IFn$_invoke$arity$2(nups,j),rs)));
}));
}));

(sicmutils.matrix.s__GT_m.cljs$lang$maxFixedArity = 3);

/**
 * Any one argument function of a structure can be seen as a matrix. This is only
 *   useful if the function has a linear multiplier (e.g. derivative)
 */
sicmutils.matrix.as_matrix = (function sicmutils$matrix$as_matrix(F){
return (function (s){
var v = (F.cljs$core$IFn$_invoke$arity$1 ? F.cljs$core$IFn$_invoke$arity$1(s) : F.call(null,s));
return sicmutils.matrix.s__GT_m.cljs$core$IFn$_invoke$arity$2(v,s);
});
});
/**
 * Returns the `n`-th row of the supplied matrix `m` as a `down` structure.
 */
sicmutils.matrix.nth_row = (function sicmutils$matrix$nth_row(m,n){
return sicmutils.structure.down_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,n));
});
/**
 * Returns the `n`-th column of the supplied matrix `m` as an `up` structure.
 */
sicmutils.matrix.nth_col = (function sicmutils$matrix$nth_col(m,n){
return sicmutils.structure.up_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__87124_SHARP_){
return (p1__87124_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__87124_SHARP_.cljs$core$IFn$_invoke$arity$1(n) : p1__87124_SHARP_.call(null,n));
}),m));
});
/**
 * Returns the diagonal of the supplied matrix `m` as an up structure. Errors if a
 *   type other than a diagonal matrix is supplied.
 */
sicmutils.matrix.diagonal = (function sicmutils$matrix$diagonal(m){
if(sicmutils.matrix.square_QMARK_(m)){
} else {
throw (new Error("Assert failed: (square? m)"));
}

var rows = sicmutils.matrix.num_rows(m);
return sicmutils.structure.up_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__87125_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__87125_SHARP_,p1__87125_SHARP_], null));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),rows)));
});
/**
 * Returns a column matrix with the contents of the supplied `up` structure.
 *   Errors if any other type is provided.
 */
sicmutils.matrix.up__GT_column_matrix = (function sicmutils$matrix$up__GT_column_matrix(v){
if(sicmutils.structure.up_QMARK_(v)){
} else {
throw (new Error("Assert failed: (s/up? v)"));
}

return sicmutils.matrix.column_STAR_(v);
});
/**
 * Returns the single column from the supplied column matrix as an `up`. Errors if
 *   some other type is supplied.
 */
sicmutils.matrix.column_matrix__GT_up = (function sicmutils$matrix$column_matrix__GT_up(m){
if(sicmutils.matrix.column_QMARK_(m)){
} else {
throw (new Error("Assert failed: (column? m)"));
}

return sicmutils.matrix.nth_col(m,(0));
});
/**
 * Returns the single column from the supplied column matrix as a vector. Errors
 *   if some other type is supplied.
 */
sicmutils.matrix.column_matrix__GT_vector = (function sicmutils$matrix$column_matrix__GT_vector(m){
if(sicmutils.matrix.column_QMARK_(m)){
} else {
throw (new Error("Assert failed: (column? m)"));
}

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,m);
});
/**
 * Returns a row matrix with the contents of the supplied `down` structure.
 *   Errors if any other type is provided.
 */
sicmutils.matrix.down__GT_row_matrix = (function sicmutils$matrix$down__GT_row_matrix(v){
if(sicmutils.structure.down_QMARK_(v)){
} else {
throw (new Error("Assert failed: (s/down? v)"));
}

return sicmutils.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.structure.structure__GT_vector(v)], 0));
});
/**
 * Returns the single row from the supplied row matrix as a `down`. Errors if some
 *   other type is supplied.
 */
sicmutils.matrix.row_matrix__GT_down = (function sicmutils$matrix$row_matrix__GT_down(m){
if(sicmutils.matrix.row_QMARK_(m)){
} else {
throw (new Error("Assert failed: (row? m)"));
}

return sicmutils.matrix.nth_row(m,(0));
});
/**
 * Returns the single row from the supplied row matrix as a vector. Errors if some
 *   other type is supplied.
 */
sicmutils.matrix.row_matrix__GT_vector = (function sicmutils$matrix$row_matrix__GT_vector(m){
if(sicmutils.matrix.row_QMARK_(m)){
} else {
throw (new Error("Assert failed: (row? m)"));
}

return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(0));
});
/**
 * Convert the matrix `m` into a structure `S`, guided by the requirement that `(*
 *   ls S rs)` should be a scalar.
 */
sicmutils.matrix.m__GT_s = (function sicmutils$matrix$m__GT_s(ls,m,rs){
var ncols = sicmutils.matrix.num_cols(m);
var col_shape = sicmutils.structure.compatible_shape(ls);
var ms = sicmutils.structure.unflatten.cljs$core$IFn$_invoke$arity$2((function (){var iter__4652__auto__ = (function sicmutils$matrix$m__GT_s_$_iter__87137(s__87138){
return (new cljs.core.LazySeq(null,(function (){
var s__87138__$1 = s__87138;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__87138__$1);
if(temp__5753__auto__){
var s__87138__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__87138__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__87138__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__87140 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__87139 = (0);
while(true){
if((i__87139 < size__4651__auto__)){
var j = cljs.core._nth(c__4650__auto__,i__87139);
cljs.core.chunk_append(b__87140,sicmutils.structure.unflatten.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.nth_col(m,j),col_shape));

var G__87357 = (i__87139 + (1));
i__87139 = G__87357;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__87140),sicmutils$matrix$m__GT_s_$_iter__87137(cljs.core.chunk_rest(s__87138__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__87140),null);
}
} else {
var j = cljs.core.first(s__87138__$2);
return cljs.core.cons(sicmutils.structure.unflatten.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.nth_col(m,j),col_shape),sicmutils$matrix$m__GT_s_$_iter__87137(cljs.core.rest(s__87138__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(ncols));
})(),sicmutils.structure.compatible_shape(rs));
if(cljs.core.truth_(sicmutils.matrix._STAR_careful_conversion_STAR_)){
if(sicmutils.value.numerical_QMARK_(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(ls,sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(ms,rs)))){
} else {
throw (new Error(["Assert failed: ",["product is not numerical: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ls),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ms),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rs)].join(''),"\n","(v/numerical? (g/* ls (g/* ms rs)))"].join('')));
}
} else {
}

return ms;
});
/**
 * Given structural inputs `ls` (optional), `ms` and `rs`, constrained such
 *   that `(* ls ms rs)` returns a numerical quantity, returns a result such that
 *   the following relationship remains true:
 * 
 *   ```clj
 *   (* <ls| (* ms |rs>)) = (* <rs| (* (s:transpose ms) |ls>))
 *   ```
 * 
 *   For example:
 * 
 *   ```clj
 *   (let [ls (s/up 1 2)
 *    ms (s/up (s/down 1 2) (s/down 3 4))
 *    rs (s/down 1 2)]
 *   (g/* ls (g/* ms rs))
 *   ;;=> 27
 * 
 *   (g/* rs (g/* (s:transpose ls ms rs) ls))
 *   ;;=> 27
 *   )
 *   ```
 * 
 *   `ls` is optional. If `ls` is not supplied, a compatible shape is generated
 *   internally.
 */
sicmutils.matrix.s_COLON_transpose = (function sicmutils$matrix$s_COLON_transpose(var_args){
var G__87160 = arguments.length;
switch (G__87160) {
case 2:
return sicmutils.matrix.s_COLON_transpose.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.matrix.s_COLON_transpose.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.matrix.s_COLON_transpose.cljs$core$IFn$_invoke$arity$2 = (function (ms,rs){
var ls = sicmutils.structure.compatible_shape(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(ms,rs));
return sicmutils.matrix.s_COLON_transpose.cljs$core$IFn$_invoke$arity$3(ls,ms,rs);
}));

(sicmutils.matrix.s_COLON_transpose.cljs$core$IFn$_invoke$arity$3 = (function (ls,ms,rs){
return sicmutils.matrix.m__GT_s(rs,sicmutils.matrix.transpose(sicmutils.matrix.s__GT_m.cljs$core$IFn$_invoke$arity$3(ls,ms,rs)),ls);
}));

(sicmutils.matrix.s_COLON_transpose.cljs$lang$maxFixedArity = 3);

/**
 * Given some 2 tensor `s`, returns a structure with elements 'transposed' by
 *   swapping the inner and outer orientations and dimensions, like a matrix
 *   transpose.
 * 
 *   Orientations are only flipped if they are different in the input. If the inner
 *   and outer orientations of `s` are the same, the returned structure has this
 *   identical orientation.
 * 
 *   For example:
 * 
 *   ```clj
 *   ;; opposite orientation gets flipped:
 *   (s:transpose-orientation (s/up (s/down 1 2 3) (s/down 4 5 6)))
 *   ;;=> (down (up 1 4) (up 2 5) (up 3 6))
 * 
 *   ;; same orientation stays the same:
 *   (s:transpose-orientation (s/down (s/down 1 2 3) (s/down 4 5 6)))
 *   ;;=> (down (down 1 4) (down 2 5) (down 3 6))
 *   ```
 * 
 *   See [[structure/two-tensor?]] for more detail on 2 tensors.
 * 
 *   NOTE: In scmutils, this function is called `s:transpose2`.
 */
sicmutils.matrix.s_COLON_transpose_orientation = (function sicmutils$matrix$s_COLON_transpose_orientation(s){
var ret = sicmutils.matrix.two_tensor_operation(s,sicmutils.matrix.transpose);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.structure.orientation(ret),sicmutils.structure.orientation(cljs.core.first(ret)))){
return ret;
} else {
return sicmutils.structure.transpose(ret);
}
});
/**
 * Given some 2-tensor `s` (a 'square' nested structure), returns a structure
 *   that represents the multiplicative inverse of the supplied structure. The
 *   inner and outer structure orientations of `(s:invert s)` are the SAME as `s`.
 * 
 *   If `s` is an up-of-downs or down-of-ups, `(g/* s (s:invert s))`
 *   and `(g/* (s:invert s) s)` will evaluate to an identity-matrix-shaped
 *   up-of-downs or down-of-ups.
 * 
 *   If `s` is an up-of-ups or down-of-downs, multiplying `s` `(s:invert s)` will
 *   result in a scalar, as both structures collapse.
 * 
 *   NOTE: I DO NOT yet understand the meaning of this scalar! If you do, please
 *   open a pull request and explain it here.
 */
sicmutils.matrix.s_COLON_invert = (function sicmutils$matrix$s_COLON_invert(s){
var ret = sicmutils.matrix.two_tensor_operation(s,sicmutils.matrix.invert);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.structure.orientation(ret),sicmutils.structure.orientation(cljs.core.first(ret)))){
return sicmutils.structure.transpose(ret);
} else {
return ret;
}
});
/**
 * Returns the vector formed by deleting the `i`'th element of the given vector
 *   `v`.
 */
sicmutils.matrix.delete$ = (function sicmutils$matrix$delete(v,i){
if(cljs.core.vector_QMARK_(v)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),i),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(i + (1))));
} else {
var G__87161 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,v);
var G__87162 = i;
return (sicmutils.matrix.delete$.cljs$core$IFn$_invoke$arity$2 ? sicmutils.matrix.delete$.cljs$core$IFn$_invoke$arity$2(G__87161,G__87162) : sicmutils.matrix.delete$.call(null,G__87161,G__87162));
}
});
/**
 * Returns a new matrix of identical shape to `m`, with the vector `v` substituted
 *   for the `i`th row.
 */
sicmutils.matrix.with_substituted_row = (function sicmutils$matrix$with_substituted_row(m,i,v){
if(sicmutils.matrix.matrix_QMARK_(m)){
} else {
throw (new Error("Assert failed: (matrix? m)"));
}

if(((0) <= i)){
} else {
throw (new Error("Assert failed: (<= 0 i)"));
}

if((i < sicmutils.matrix.num_rows(m))){
} else {
throw (new Error("Assert failed: (< i (num-rows m))"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.num_cols(m),cljs.core.count(v))){
} else {
throw (new Error("Assert failed: (= (num-cols m) (count v))"));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,i,v);
});
/**
 * Returns the submatrix of the matrix (or matrix-like structure) `s` generated by
 *   taking
 * 
 *   - rows    from `lowrow` -> `hirow` (inclusive)
 *   - columns from `lowcol` -> `hicol` (inclusive)
 */
sicmutils.matrix.submatrix = (function sicmutils$matrix$submatrix(x,lowrow,hirow,lowcol,hicol){
var m = ((sicmutils.structure.structure_QMARK_(x))?sicmutils.matrix.two_tensor__GT_(x,(function (m,_){
return m;
})):x);
return sicmutils.matrix.generate.cljs$core$IFn$_invoke$arity$3(((hirow - lowrow) + (1)),((hicol - lowcol) + (1)),(function (i,j){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + lowrow),(j + lowcol)], null));
}));
});
/**
 * Returns the matrix formed by deleting the `i`-th row and `j`-th column of the
 *   given matrix `m`.
 * 
 *   This is also called the 'minor' of m.
 */
sicmutils.matrix.without = (function sicmutils$matrix$without(m,i,j){
return sicmutils.matrix.__GT_Matrix((sicmutils.matrix.num_rows(m) - (1)),(sicmutils.matrix.num_cols(m) - (1)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__87163_SHARP_){
return sicmutils.matrix.delete$(p1__87163_SHARP_,j);
}),sicmutils.matrix.delete$(sicmutils.matrix.matrix__GT_vector(m),i)));
});
sicmutils.matrix.checkerboard_negate = (function sicmutils$matrix$checkerboard_negate(s,i,j){
if(cljs.core.even_QMARK_((i + j))){
return s;
} else {
return sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(s);
}
});
/**
 * Returns the 'dimension', ie, the number of rows & columns, of the supplied
 *   square matrix. Errors if some other type is supplied.
 */
sicmutils.matrix.dimension = (function sicmutils$matrix$dimension(m){
if(sicmutils.matrix.square_QMARK_(m)){
} else {
throw (new Error("Assert failed: (square? m)"));
}

return sicmutils.matrix.num_rows(m);
});
/**
 * Returns the trace (the sum of diagonal elements) of the square matrix `m`.
 * 
 *   Generic operations are used, so this works on symbolic square matrices.
 */
sicmutils.matrix.trace = (function sicmutils$matrix$trace(m){
if(sicmutils.matrix.square_QMARK_(m)){
} else {
throw (new Error("Assert failed: (square? m)"));
}

var rows = sicmutils.matrix.num_rows(m);
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__87164_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__87164_SHARP_,p1__87164_SHARP_], null));
})),sicmutils.generic._PLUS_,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),rows));
});
/**
 * Given coefficient procedures `add`, `sub`, `mul` and `zero?`, returns a
 *   procedure that efficiently computes the determinant of the supplied square
 *   matrix `m`.
 * 
 *   [[general-determinant]] is useful for generating fast type-specific
 *   determinant routines. See [[determinant]] for a default using generic
 *   arithmetic.
 */
sicmutils.matrix.general_determinant = (function sicmutils$matrix$general_determinant(add,sub,mul,zero_QMARK_){
var zero = (add.cljs$core$IFn$_invoke$arity$0 ? add.cljs$core$IFn$_invoke$arity$0() : add.call(null));
return (function (m){
if(sicmutils.matrix.square_QMARK_(m)){
} else {
throw (new Error("Assert failed: (square? m)"));
}

var c_det = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var c_det_STAR_ = (function sicmutils$matrix$general_determinant_$_c_det_STAR_(row,p__87174){
var vec__87175 = p__87174;
var seq__87176 = cljs.core.seq(vec__87175);
var first__87177 = cljs.core.first(seq__87176);
var seq__87176__$1 = cljs.core.next(seq__87176);
var col = first__87177;
var cols = seq__87176__$1;
var active_cols = vec__87175;
if(cljs.core.not(cols)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
} else {
var idx = (0);
var remaining_cols = active_cols;
var answer = zero;
while(true){
if(cljs.core.not(cljs.core.seq(remaining_cols))){
return answer;
} else {
var term = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,cljs.core.first(remaining_cols)], null));
if(cljs.core.truth_((zero_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zero_QMARK_.cljs$core$IFn$_invoke$arity$1(term) : zero_QMARK_.call(null,term)))){
var G__87371 = (idx + (1));
var G__87372 = cljs.core.rest(remaining_cols);
var G__87373 = answer;
idx = G__87371;
remaining_cols = G__87372;
answer = G__87373;
continue;
} else {
var without_i = sicmutils.matrix.delete$(active_cols,idx);
var delta = (function (){var G__87178 = term;
var G__87179 = (function (){var G__87181 = (row + (1));
var G__87182 = without_i;
var fexpr__87180 = cljs.core.deref(c_det);
return (fexpr__87180.cljs$core$IFn$_invoke$arity$2 ? fexpr__87180.cljs$core$IFn$_invoke$arity$2(G__87181,G__87182) : fexpr__87180.call(null,G__87181,G__87182));
})();
return (mul.cljs$core$IFn$_invoke$arity$2 ? mul.cljs$core$IFn$_invoke$arity$2(G__87178,G__87179) : mul.call(null,G__87178,G__87179));
})();
var G__87374 = (idx + (1));
var G__87375 = cljs.core.rest(remaining_cols);
var G__87376 = ((cljs.core.even_QMARK_(idx))?(add.cljs$core$IFn$_invoke$arity$2 ? add.cljs$core$IFn$_invoke$arity$2(answer,delta) : add.call(null,answer,delta)):(sub.cljs$core$IFn$_invoke$arity$2 ? sub.cljs$core$IFn$_invoke$arity$2(answer,delta) : sub.call(null,answer,delta)));
idx = G__87374;
remaining_cols = G__87375;
answer = G__87376;
continue;
}
}
break;
}
}
});
cljs.core.reset_BANG_(c_det,cljs.core.memoize(c_det_STAR_));

var G__87184 = (0);
var G__87185 = cljs.core.range.cljs$core$IFn$_invoke$arity$1(sicmutils.matrix.dimension(m));
var fexpr__87183 = cljs.core.deref(c_det);
return (fexpr__87183.cljs$core$IFn$_invoke$arity$2 ? fexpr__87183.cljs$core$IFn$_invoke$arity$2(G__87184,G__87185) : fexpr__87183.call(null,G__87184,G__87185));
});
});
/**
 * Returns the determinant of the supplied square matrix `m`.
 * 
 *   Generic operations are used, so this works on symbolic square matrices.
 */
sicmutils.matrix.determinant = sicmutils.matrix.general_determinant(sicmutils.generic._PLUS_,sicmutils.generic._,sicmutils.generic._STAR_,sicmutils.value.numeric_zero_QMARK_);
/**
 * Returns the matrix of cofactors of the supplied square matrix `m`.
 */
sicmutils.matrix.cofactors = (function sicmutils$matrix$cofactors(m){
if(sicmutils.matrix.square_QMARK_(m)){
} else {
throw (new Error("Assert failed: (square? m)"));
}

var r = sicmutils.matrix.num_rows(m);
if((r < (2))){
return m;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,(2))){
var vec__87186 = m;
var vec__87189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87186,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87189,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87189,(1),null);
var vec__87192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87186,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87192,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87192,(1),null);
return sicmutils.matrix.__GT_Matrix((2),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.generic.negate.cljs$core$IFn$_invoke$arity$1(b),a], null)], null));
} else {
return sicmutils.matrix.generate.cljs$core$IFn$_invoke$arity$3(r,r,(function (i,j){
return sicmutils.matrix.checkerboard_negate(sicmutils.matrix.determinant(sicmutils.matrix.without(m,i,j)),i,j);
}));

}
}
});
/**
 * Given coefficient procedures `add`, `sub`, `mul` and `zero?`, returns a
 *   procedure that efficiently computes the inverse of the supplied square
 *   matrix `m`.
 * 
 *   [[classical-adjoint-formula]] is useful for generating fast type-specific
 *   matrix inversion routines. See [[invert]] for a default using generic
 *   arithmetic.
 */
sicmutils.matrix.classical_adjoint_formula = (function sicmutils$matrix$classical_adjoint_formula(add,sub,mul,div,zero_QMARK_){
var det = sicmutils.matrix.general_determinant(add,sub,mul,zero_QMARK_);
return (function sicmutils$matrix$classical_adjoint_formula_$_inv(A){
var dim = sicmutils.matrix.dimension(A);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dim,(1))){
return sicmutils.matrix.__GT_Matrix((1),(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__87195 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(A,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
return (div.cljs$core$IFn$_invoke$arity$1 ? div.cljs$core$IFn$_invoke$arity$1(G__87195) : div.call(null,G__87195));
})()], null)], null));
} else {
var d = det(A);
var _d = (sub.cljs$core$IFn$_invoke$arity$1 ? sub.cljs$core$IFn$_invoke$arity$1(d) : sub.call(null,d));
return sicmutils.matrix.generate.cljs$core$IFn$_invoke$arity$3(dim,dim,(function (i,j){
var denom = ((cljs.core.even_QMARK_((i + j)))?d:_d);
var G__87196 = det(sicmutils.matrix.without(A,j,i));
var G__87197 = denom;
return (div.cljs$core$IFn$_invoke$arity$2 ? div.cljs$core$IFn$_invoke$arity$2(G__87196,G__87197) : div.call(null,G__87196,G__87197));
}));
}
});
});
/**
 * Returns the inverse of the supplied square matrix `m`.
 */
sicmutils.matrix.invert = sicmutils.matrix.classical_adjoint_formula(sicmutils.generic._PLUS_,sicmutils.generic._,sicmutils.generic._STAR_,sicmutils.generic._SLASH_,sicmutils.value.numeric_zero_QMARK_);
sicmutils.matrix.m_div_m = (function sicmutils$matrix$m_div_m(m1,m2){
return sicmutils.matrix.mul(m1,sicmutils.matrix.invert(m2));
});
/**
 * Returns the result of multiplying (on the right) the scalar `c` by the inverse
 *   of matrix `m`.
 */
sicmutils.matrix.m_div_c = (function sicmutils$matrix$m_div_c(m,c){
return sicmutils.matrix.matrix_STAR_scalar(m,sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(c));
});
/**
 * Returns the result of multiplying (on the left) the scalar `c` by the inverse
 *   of matrix `m`.
 */
sicmutils.matrix.c_div_m = (function sicmutils$matrix$c_div_m(c,m){
return sicmutils.matrix.scalar_STAR_matrix(c,sicmutils.matrix.invert(m));
});
sicmutils.matrix.s_COLON_inverse = (function sicmutils$matrix$s_COLON_inverse(var_args){
var G__87199 = arguments.length;
switch (G__87199) {
case 2:
return sicmutils.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$2 = (function (ms,rs){
var ls = sicmutils.structure.compatible_shape(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(ms,rs));
return sicmutils.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(ls,ms,rs);
}));

(sicmutils.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3 = (function (ls,ms,rs){
return sicmutils.matrix.m__GT_s(sicmutils.structure.compatible_shape(rs),sicmutils.matrix.invert(sicmutils.matrix.s__GT_m.cljs$core$IFn$_invoke$arity$3(ls,ms,rs)),sicmutils.structure.compatible_shape(ls));
}));

(sicmutils.matrix.s_COLON_inverse.cljs$lang$maxFixedArity = 3);

sicmutils.matrix.s_COLON_solve_linear_left = (function sicmutils$matrix$s_COLON_solve_linear_left(M,product){
var cp = sicmutils.structure.compatible_shape(product);
var cr = sicmutils.structure.compatible_shape(sicmutils.structure.s_COLON__STAR_(cp,M));
return sicmutils.structure.s_COLON__STAR_(sicmutils.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(cp,M,cr),product);
});
sicmutils.matrix.s_COLON_solve_linear_right = (function sicmutils$matrix$s_COLON_solve_linear_right(product,M){
var cp = sicmutils.structure.compatible_shape(product);
var cr = sicmutils.structure.compatible_shape(sicmutils.structure.s_COLON__STAR_(M,cp));
return sicmutils.structure.s_COLON__STAR_(product,sicmutils.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(cr,M,cp));
});
sicmutils.matrix.s_COLON_divide_by_structure = (function sicmutils$matrix$s_COLON_divide_by_structure(rv,s){
return sicmutils.matrix.s_COLON_solve_linear_left(s,rv);
});
/**
 * Return a zero-valued matrix of `m` rows and `n` columns (`nXn` if only `n` is
 *   supplied).
 */
sicmutils.matrix.make_zero = (function sicmutils$matrix$make_zero(var_args){
var G__87201 = arguments.length;
switch (G__87201) {
case 1:
return sicmutils.matrix.make_zero.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.matrix.make_zero.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.matrix.make_zero.cljs$core$IFn$_invoke$arity$1 = (function (n){
return sicmutils.matrix.make_zero.cljs$core$IFn$_invoke$arity$2(n,n);
}));

(sicmutils.matrix.make_zero.cljs$core$IFn$_invoke$arity$2 = (function (m,n){
return sicmutils.matrix.generate.cljs$core$IFn$_invoke$arity$3(m,n,cljs.core.constantly((0)));
}));

(sicmutils.matrix.make_zero.cljs$lang$maxFixedArity = 2);

/**
 * Return the identity matrix of order `n`.
 */
sicmutils.matrix.I = (function sicmutils$matrix$I(n){
return sicmutils.matrix.generate.cljs$core$IFn$_invoke$arity$3(n,n,sicmutils.structure.kronecker);
});
/**
 * Return an identity matrix whose ones and zeros match the types of the supplied
 *   square matrix `M`. Errors if a non-square matrix `M` is supplied.
 */
sicmutils.matrix.identity_like = (function sicmutils$matrix$identity_like(M){
if((!(sicmutils.matrix.square_QMARK_(M)))){
return sicmutils.util.illegal("identity-like on non-square");
} else {
return sicmutils.matrix.fmap_indexed((function (elem,i,j){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,j)){
return sicmutils.value.one_like(elem);
} else {
return sicmutils.value.zero_like(elem);
}
}),M);
}
});
/**
 * Returns true if the supplied matrix `m` is an identity matrix, false
 *   otherwise.
 */
sicmutils.matrix.identity_QMARK_ = (function sicmutils$matrix$identity_QMARK_(m){
var and__4251__auto__ = sicmutils.matrix.square_QMARK_(m);
if(and__4251__auto__){
var n = sicmutils.matrix.dimension(m);
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,(function (){var iter__4652__auto__ = (function sicmutils$matrix$identity_QMARK__$_iter__87202(s__87203){
return (new cljs.core.LazySeq(null,(function (){
var s__87203__$1 = s__87203;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__87203__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var i = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__87203__$1,i,xs__6308__auto__,temp__5753__auto__,n,and__4251__auto__){
return (function sicmutils$matrix$identity_QMARK__$_iter__87202_$_iter__87204(s__87205){
return (new cljs.core.LazySeq(null,((function (s__87203__$1,i,xs__6308__auto__,temp__5753__auto__,n,and__4251__auto__){
return (function (){
var s__87205__$1 = s__87205;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__87205__$1);
if(temp__5753__auto____$1){
var s__87205__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__87205__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__87205__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__87207 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__87206 = (0);
while(true){
if((i__87206 < size__4651__auto__)){
var j = cljs.core._nth(c__4650__auto__,i__87206);
var entry = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
cljs.core.chunk_append(b__87207,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,j))?sicmutils.value.one_QMARK_(entry):sicmutils.value.zero_QMARK_(entry)));

var G__87390 = (i__87206 + (1));
i__87206 = G__87390;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__87207),sicmutils$matrix$identity_QMARK__$_iter__87202_$_iter__87204(cljs.core.chunk_rest(s__87205__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__87207),null);
}
} else {
var j = cljs.core.first(s__87205__$2);
var entry = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,j))?sicmutils.value.one_QMARK_(entry):sicmutils.value.zero_QMARK_(entry)),sicmutils$matrix$identity_QMARK__$_iter__87202_$_iter__87204(cljs.core.rest(s__87205__$2)));
}
} else {
return null;
}
break;
}
});})(s__87203__$1,i,xs__6308__auto__,temp__5753__auto__,n,and__4251__auto__))
,null,null));
});})(s__87203__$1,i,xs__6308__auto__,temp__5753__auto__,n,and__4251__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,sicmutils$matrix$identity_QMARK__$_iter__87202(cljs.core.rest(s__87203__$1)));
} else {
var G__87391 = cljs.core.rest(s__87203__$1);
s__87203__$1 = G__87391;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
})());
} else {
return and__4251__auto__;
}
});
/**
 * Given a single (sequential) argument `v`, returns the diagonal matrix of
 *   order `(count v)` with the elements of the sequence `v` along the diagonal.
 * 
 *   Given two arguments `n` and some constant `x`, returns a diagonal `n` by `n`
 *   matrix with `x` in every entry of the diagonal.
 * 
 *   `(make-diagonal <n> 1)` is equivalent to `(I n)`.
 */
sicmutils.matrix.make_diagonal = (function sicmutils$matrix$make_diagonal(var_args){
var G__87211 = arguments.length;
switch (G__87211) {
case 1:
return sicmutils.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$1 = (function (v){
var v__$1 = cljs.core.vec(v);
var n = cljs.core.count(v__$1);
return sicmutils.matrix.generate.cljs$core$IFn$_invoke$arity$3(n,n,(function (i,j){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,j)){
return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i));
} else {
return (0);
}
}));
}));

(sicmutils.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$2 = (function (n,x){
return sicmutils.matrix.generate.cljs$core$IFn$_invoke$arity$3(n,n,(function (p1__87208_SHARP_,p2__87209_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__87208_SHARP_,p2__87209_SHARP_)){
return x;
} else {
return (0);
}
}));
}));

(sicmutils.matrix.make_diagonal.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if `m` is a diagonal matrix (ie, a square matrix where every
 *   non-diagonal element is zero), false otherwise.
 */
sicmutils.matrix.diagonal_QMARK_ = (function sicmutils$matrix$diagonal_QMARK_(m){
var and__4251__auto__ = sicmutils.matrix.square_QMARK_(m);
if(and__4251__auto__){
var n = sicmutils.matrix.dimension(m);
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,(function (){var iter__4652__auto__ = (function sicmutils$matrix$diagonal_QMARK__$_iter__87212(s__87213){
return (new cljs.core.LazySeq(null,(function (){
var s__87213__$1 = s__87213;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__87213__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var i = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__87213__$1,i,xs__6308__auto__,temp__5753__auto__,n,and__4251__auto__){
return (function sicmutils$matrix$diagonal_QMARK__$_iter__87212_$_iter__87214(s__87215){
return (new cljs.core.LazySeq(null,((function (s__87213__$1,i,xs__6308__auto__,temp__5753__auto__,n,and__4251__auto__){
return (function (){
var s__87215__$1 = s__87215;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__87215__$1);
if(temp__5753__auto____$1){
var s__87215__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__87215__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__87215__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__87217 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__87216 = (0);
while(true){
if((i__87216 < size__4651__auto__)){
var j = cljs.core._nth(c__4650__auto__,i__87216);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i,j)){
var entry = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
cljs.core.chunk_append(b__87217,sicmutils.value.zero_QMARK_(entry));

var G__87401 = (i__87216 + (1));
i__87216 = G__87401;
continue;
} else {
var G__87402 = (i__87216 + (1));
i__87216 = G__87402;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__87217),sicmutils$matrix$diagonal_QMARK__$_iter__87212_$_iter__87214(cljs.core.chunk_rest(s__87215__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__87217),null);
}
} else {
var j = cljs.core.first(s__87215__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i,j)){
var entry = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
return cljs.core.cons(sicmutils.value.zero_QMARK_(entry),sicmutils$matrix$diagonal_QMARK__$_iter__87212_$_iter__87214(cljs.core.rest(s__87215__$2)));
} else {
var G__87403 = cljs.core.rest(s__87215__$2);
s__87215__$1 = G__87403;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__87213__$1,i,xs__6308__auto__,temp__5753__auto__,n,and__4251__auto__))
,null,null));
});})(s__87213__$1,i,xs__6308__auto__,temp__5753__auto__,n,and__4251__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,sicmutils$matrix$diagonal_QMARK__$_iter__87212(cljs.core.rest(s__87213__$1)));
} else {
var G__87404 = cljs.core.rest(s__87213__$1);
s__87213__$1 = G__87404;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
})());
} else {
return and__4251__auto__;
}
});
/**
 * Returns true if the supplied matrix `M` is equal to its own transpose (ie,
 *   symmetric), false otherwise.
 */
sicmutils.matrix.symmetric_QMARK_ = (function sicmutils$matrix$symmetric_QMARK_(M){
return sicmutils.value.zero_QMARK_(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.sub.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.transpose(M),M)));
});
/**
 * Returns true if the supplied matrix `M` is equal to the negation of its own
 *   transpose (ie, antisymmetric), false otherwise.
 */
sicmutils.matrix.antisymmetric_QMARK_ = (function sicmutils$matrix$antisymmetric_QMARK_(M){
return sicmutils.value.zero_QMARK_(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(sicmutils.generic.add.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.transpose(M),M)));
});
/**
 * Returns the [characteristic
 *   polynomial](https://en.wikipedia.org/wiki/Characteristic_polynomial) of the
 *   square matrix `m`.
 * 
 *   If only `m` is supplied, returns a [[polynomial/Polynomial]] instance
 *   representing the matrix `m`'s characteristic polynomial.
 * 
 *   If `x` is supplied, returns the value of the characteristic polynomial of `m`
 *   evaluated at `x`.
 * 
 *   Typically `x` will be a symbolic variable, but if you wanted to get the value
 *   of the characteristic polynomial at some particular numerical point `x` you
 *   could pass that too.
 */
sicmutils.matrix.characteristic_polynomial = (function sicmutils$matrix$characteristic_polynomial(var_args){
var G__87219 = arguments.length;
switch (G__87219) {
case 1:
return sicmutils.matrix.characteristic_polynomial.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.matrix.characteristic_polynomial.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.matrix.characteristic_polynomial.cljs$core$IFn$_invoke$arity$1 = (function (m){
return sicmutils.matrix.characteristic_polynomial.cljs$core$IFn$_invoke$arity$2(m,sicmutils.polynomial.identity.cljs$core$IFn$_invoke$arity$0());
}));

(sicmutils.matrix.characteristic_polynomial.cljs$core$IFn$_invoke$arity$2 = (function (m,x){
var r = sicmutils.matrix.num_rows(m);
var c = sicmutils.matrix.num_cols(m);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,c)){
} else {
sicmutils.util.illegal("not square");
}

var Ix = sicmutils.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$2(r,x);
return sicmutils.matrix.determinant(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(Ix,m));
}));

(sicmutils.matrix.characteristic_polynomial.cljs$lang$maxFixedArity = 2);

/**
 * Given coefficient procedures `add`, `sub`, `mul`, `div` and `zero?`, returns a
 *   procedure that efficiently computes the solution to an inhomogeneous system of
 *   linear equations, `A*x=b`, where the matrix `A` and the column matrix `b` are
 *   given. The returned procedure returns the column matrix `x`.
 * 
 *   Unlike LU decomposition, Cramer's rule generalizes to symbolic solutions.
 * 
 *   [[cramers-rule]] is useful for generating fast type-specific linear equation
 *   solvers. See [[solve]] for a default using generic arithmetic.
 */
sicmutils.matrix.cramers_rule = (function sicmutils$matrix$cramers_rule(add,sub,mul,div,zero_QMARK_){
var det = sicmutils.matrix.general_determinant(add,sub,mul,zero_QMARK_);
return (function sicmutils$matrix$cramers_rule_$_solve(A,b){
if(sicmutils.matrix.square_QMARK_(A)){
} else {
throw (new Error("Assert failed: (square? A)"));
}

if(sicmutils.matrix.column_QMARK_(b)){
} else {
throw (new Error("Assert failed: (column? b)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.dimension(A),sicmutils.matrix.num_rows(b))){
} else {
throw (new Error("Assert failed: (= (dimension A) (num-rows b))"));
}

var bv = sicmutils.matrix.nth_col(b,(0));
var bn = sicmutils.matrix.num_rows(b);
var d = det(A);
var At = sicmutils.matrix.transpose(A);
return sicmutils.matrix.column_STAR_(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
var G__87220 = det(sicmutils.matrix.with_substituted_row(At,i,bv));
var G__87221 = d;
return (div.cljs$core$IFn$_invoke$arity$2 ? div.cljs$core$IFn$_invoke$arity$2(G__87220,G__87221) : div.call(null,G__87220,G__87221));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(bn)));
});
});
/**
 * Given a matrix `A` and a column matrix `b`, computes the solution
 *   to an inhomogeneous system of linear equations, `A*x=b`, where the matrix `A`
 *   and the column matrix `b` are given.
 * 
 *  Returns the column matrix `x`.
 * 
 *  Unlike LU decomposition, Cramer's rule generalizes to symbolic solutions.
 */
sicmutils.matrix.solve = sicmutils.matrix.cramers_rule(sicmutils.generic._PLUS_,sicmutils.generic._,sicmutils.generic._STAR_,sicmutils.generic._SLASH_,sicmutils.value.numeric_zero_QMARK_);
/**
 * Generalization of [[solve]] that can handle `up` and `down` structures, as well
 *   as `row` and `column` matrices.
 * 
 *   Given `row` or `down` values for `b`, `A` is appropriately transposed before
 *   solving.
 */
sicmutils.matrix.rsolve = (function sicmutils$matrix$rsolve(b,A){
if(sicmutils.structure.up_QMARK_(b)){
return sicmutils.matrix.column_matrix__GT_up(sicmutils.matrix.solve(A,sicmutils.matrix.up__GT_column_matrix(b)));
} else {
if(sicmutils.matrix.column_QMARK_(b)){
return sicmutils.matrix.solve(A,b);
} else {
if(sicmutils.structure.down_QMARK_(b)){
return sicmutils.matrix.row_matrix__GT_down(sicmutils.matrix.transpose(sicmutils.matrix.solve(sicmutils.matrix.transpose(A),sicmutils.matrix.transpose(sicmutils.matrix.down__GT_row_matrix(b)))));
} else {
if(sicmutils.matrix.row_QMARK_(b)){
return sicmutils.matrix.transpose(sicmutils.matrix.solve(sicmutils.matrix.transpose(A),sicmutils.matrix.transpose(b)));
} else {
return sicmutils.util.illegal(["I don't know how to solve:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),cljs.core.str.cljs$core$IFn$_invoke$arity$1(A)].join(''));

}
}
}
}
});
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310),new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310)], null),(function (a,b){
return sicmutils.matrix.m_COLON__EQ_(a,b);
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null),(function (m,c){
return sicmutils.matrix.matrix_EQ_scalar(m,c);
}));
sicmutils.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (c,m){
return sicmutils.matrix.scalar_EQ_matrix(c,m);
}));
sicmutils.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310)], null),(function (a){
return sicmutils.matrix.fmap(sicmutils.generic.negate,a);
}));
sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310),new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310)], null),(function (a,b){
return sicmutils.matrix.elementwise(sicmutils.generic._,a,b);
}));
sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null),(function (a,b){
return sicmutils.matrix.elementwise(sicmutils.generic._,a,sicmutils.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.num_rows(a),b));
}));
sicmutils.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (a,b){
return sicmutils.matrix.elementwise(sicmutils.generic._,sicmutils.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.num_rows(b),a),b);
}));
sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310),new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310)], null),(function (a,b){
return sicmutils.matrix.elementwise(sicmutils.generic._PLUS_,a,b);
}));
sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null),(function (a,b){
return sicmutils.matrix.elementwise(sicmutils.generic._PLUS_,a,sicmutils.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.num_rows(a),b));
}));
sicmutils.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (a,b){
return sicmutils.matrix.elementwise(sicmutils.generic._PLUS_,sicmutils.matrix.make_diagonal.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.num_rows(b),a),b);
}));
sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310),new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310)], null),(function (a,b){
return sicmutils.matrix.mul(a,b);
}));
sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310)], null),(function (n,a){
return sicmutils.matrix.scalar_STAR_matrix(n,a);
}));
sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null),(function (a,n){
return sicmutils.matrix.matrix_STAR_scalar(a,n);
}));
sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310),new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939)], null),(function (m,u){
return sicmutils.matrix.M_STAR_u(m,u);
}));
sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310)], null),(function (d,m){
return sicmutils.matrix.d_STAR_M(d,m);
}));
sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null),(function (m,c){
return sicmutils.matrix.m_div_c(m,c);
}));
sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (c,m){
return sicmutils.matrix.c_div_m(c,m);
}));
sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","column-matrix","sicmutils.matrix/column-matrix",-2071627511),new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (c,m){
return sicmutils.matrix.rsolve(c,m);
}));
sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","row-matrix","sicmutils.matrix/row-matrix",-491554895),new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (r,m){
return sicmutils.matrix.rsolve(r,m);
}));
sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939),new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (u,m){
return sicmutils.matrix.rsolve(u,m);
}));
sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (d,m){
return sicmutils.matrix.rsolve(d,m);
}));
sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310),new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (d,m){
return sicmutils.matrix.m_div_m(d,m);
}));
sicmutils.generic.exp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (m){
return (sicmutils.series.exp_series.cljs$core$IFn$_invoke$arity$1 ? sicmutils.series.exp_series.cljs$core$IFn$_invoke$arity$1(m) : sicmutils.series.exp_series.call(null,m));
}));
sicmutils.generic.cos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (m){
return (sicmutils.series.cos_series.cljs$core$IFn$_invoke$arity$1 ? sicmutils.series.cos_series.cljs$core$IFn$_invoke$arity$1(m) : sicmutils.series.cos_series.call(null,m));
}));
sicmutils.generic.sin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (m){
return (sicmutils.series.sin_series.cljs$core$IFn$_invoke$arity$1 ? sicmutils.series.sin_series.cljs$core$IFn$_invoke$arity$1(m) : sicmutils.series.sin_series.call(null,m));
}));
sicmutils.generic.tan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (m){
return (sicmutils.series.tan_series.cljs$core$IFn$_invoke$arity$1 ? sicmutils.series.tan_series.cljs$core$IFn$_invoke$arity$1(m) : sicmutils.series.tan_series.call(null,m));
}));
sicmutils.generic.sec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (m){
return (sicmutils.series.sec_series.cljs$core$IFn$_invoke$arity$1 ? sicmutils.series.sec_series.cljs$core$IFn$_invoke$arity$1(m) : sicmutils.series.sec_series.call(null,m));
}));
sicmutils.generic.acos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (m){
return (sicmutils.series.acos_series.cljs$core$IFn$_invoke$arity$1 ? sicmutils.series.acos_series.cljs$core$IFn$_invoke$arity$1(m) : sicmutils.series.acos_series.call(null,m));
}));
sicmutils.generic.asin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (m){
return (sicmutils.series.asin_series.cljs$core$IFn$_invoke$arity$1 ? sicmutils.series.asin_series.cljs$core$IFn$_invoke$arity$1(m) : sicmutils.series.asin_series.call(null,m));
}));
sicmutils.generic.atan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (m){
return (sicmutils.series.atan_series.cljs$core$IFn$_invoke$arity$1 ? sicmutils.series.atan_series.cljs$core$IFn$_invoke$arity$1(m) : sicmutils.series.atan_series.call(null,m));
}));
sicmutils.generic.acot.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (m){
return (sicmutils.series.acot_series.cljs$core$IFn$_invoke$arity$1 ? sicmutils.series.acot_series.cljs$core$IFn$_invoke$arity$1(m) : sicmutils.series.acot_series.call(null,m));
}));
sicmutils.generic.cosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (m){
return (sicmutils.series.cosh_series.cljs$core$IFn$_invoke$arity$1 ? sicmutils.series.cosh_series.cljs$core$IFn$_invoke$arity$1(m) : sicmutils.series.cosh_series.call(null,m));
}));
sicmutils.generic.sinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (m){
return (sicmutils.series.sinh_series.cljs$core$IFn$_invoke$arity$1 ? sicmutils.series.sinh_series.cljs$core$IFn$_invoke$arity$1(m) : sicmutils.series.sinh_series.call(null,m));
}));
sicmutils.generic.tanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (m){
return (sicmutils.series.tanh_series.cljs$core$IFn$_invoke$arity$1 ? sicmutils.series.tanh_series.cljs$core$IFn$_invoke$arity$1(m) : sicmutils.series.tanh_series.call(null,m));
}));
sicmutils.generic.asinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (m){
return (sicmutils.series.asinh_series.cljs$core$IFn$_invoke$arity$1 ? sicmutils.series.asinh_series.cljs$core$IFn$_invoke$arity$1(m) : sicmutils.series.asinh_series.call(null,m));
}));
sicmutils.generic.atanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (m){
return (sicmutils.series.atanh_series.cljs$core$IFn$_invoke$arity$1 ? sicmutils.series.atanh_series.cljs$core$IFn$_invoke$arity$1(m) : sicmutils.series.atanh_series.call(null,m));
}));
sicmutils.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310)], null),(function (m){
return sicmutils.matrix.fmap(sicmutils.generic.simplify,m);
}));
sicmutils.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310)], null),(function (m){
return sicmutils.matrix.invert(m);
}));
sicmutils.generic.make_rectangular.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310),new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310)], null),(function (a,b){
return sicmutils.matrix.elementwise(sicmutils.generic.make_rectangular,a,b);
}));
sicmutils.generic.make_polar.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310),new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310)], null),(function (a,b){
return sicmutils.matrix.elementwise(sicmutils.generic.make_polar,a,b);
}));
sicmutils.generic.real_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310)], null),(function (m){
return sicmutils.matrix.fmap(sicmutils.generic.real_part,m);
}));
sicmutils.generic.imag_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310)], null),(function (m){
return sicmutils.matrix.fmap(sicmutils.generic.imag_part,m);
}));
sicmutils.generic.conjugate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310)], null),(function (m){
return sicmutils.matrix.fmap(sicmutils.generic.conjugate,m);
}));
sicmutils.generic.transpose.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310)], null),(function (m){
return sicmutils.matrix.transpose(m);
}));
sicmutils.generic.determinant.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (m){
return sicmutils.matrix.determinant(m);
}));
sicmutils.generic.determinant.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675)], null),(function (s){
return sicmutils.matrix.two_tensor__GT_(s,(function (m,_){
return sicmutils.matrix.determinant(m);
}));
}));
sicmutils.generic.trace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (m){
return sicmutils.matrix.trace(m);
}));
sicmutils.generic.trace.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675)], null),(function (s){
return sicmutils.matrix.two_tensor__GT_(s,(function (m,_){
return sicmutils.matrix.trace(m);
}));
}));
sicmutils.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675)], null),(function (a){
return sicmutils.matrix.s_COLON_invert(a);
}));
sicmutils.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675),new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675)], null),(function (rv,s){
return sicmutils.matrix.s_COLON_divide_by_structure(rv,s);
}));
sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459),new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939)], null),(function (A,b){
return sicmutils.matrix.rsolve(b,A);
}));
sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459),new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924)], null),(function (A,b){
return sicmutils.matrix.rsolve(b,A);
}));
sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459),new cljs.core.Keyword("sicmutils.matrix","column-matrix","sicmutils.matrix/column-matrix",-2071627511)], null),(function (A,b){
return sicmutils.matrix.rsolve(b,A);
}));
sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459),new cljs.core.Keyword("sicmutils.matrix","row-matrix","sicmutils.matrix/row-matrix",-491554895)], null),(function (A,b){
return sicmutils.matrix.rsolve(b,A);
}));
sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675),new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675)], null),(function (s,product){
return sicmutils.matrix.s_COLON_solve_linear_left(s,product);
}));
sicmutils.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675),new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231)], null),(function (s,c){
return sicmutils.structure.structure_STAR_scalar(sicmutils.matrix.s_COLON_invert(s),c);
}));
sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","row-matrix","sicmutils.matrix/row-matrix",-491554895),new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (b,A){
return sicmutils.matrix.rsolve(b,A);
}));
sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","down","sicmutils.matrix/down",426045284),new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (b,A){
return sicmutils.matrix.rsolve(b,A);
}));
sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675),new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675)], null),(function (product,s){
return sicmutils.matrix.s_COLON_solve_linear_right(product,s);
}));
sicmutils.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","scalar","sicmutils.value/scalar",1616793231),new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675)], null),(function (c,s){
return sicmutils.structure.scalar_STAR_structure(c,sicmutils.matrix.s_COLON_invert(s));
}));
sicmutils.generic.dimension.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","square-matrix","sicmutils.matrix/square-matrix",1272830459)], null),(function (m){
return sicmutils.matrix.dimension(m);
}));
sicmutils.generic.dimension.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","column-matrix","sicmutils.matrix/column-matrix",-2071627511)], null),(function (m){
return sicmutils.matrix.num_rows(m);
}));
sicmutils.generic.dimension.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","row-matrix","sicmutils.matrix/row-matrix",-491554895)], null),(function (m){
return sicmutils.matrix.num_cols(m);
}));
sicmutils.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","row-matrix","sicmutils.matrix/row-matrix",-491554895),new cljs.core.Keyword("sicmutils.matrix","row-matrix","sicmutils.matrix/row-matrix",-491554895)], null),(function (a,b){
return sicmutils.generic.dot_product.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.row_matrix__GT_down(a),sicmutils.matrix.row_matrix__GT_down(b));
}));
sicmutils.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","column-matrix","sicmutils.matrix/column-matrix",-2071627511),new cljs.core.Keyword("sicmutils.matrix","column-matrix","sicmutils.matrix/column-matrix",-2071627511)], null),(function (a,b){
return sicmutils.generic.dot_product.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.column_matrix__GT_up(a),sicmutils.matrix.column_matrix__GT_up(b));
}));
sicmutils.generic.inner_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","row-matrix","sicmutils.matrix/row-matrix",-491554895),new cljs.core.Keyword("sicmutils.matrix","row-matrix","sicmutils.matrix/row-matrix",-491554895)], null),(function (a,b){
return sicmutils.generic.inner_product.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.row_matrix__GT_vector(a),sicmutils.matrix.row_matrix__GT_vector(b));
}));
sicmutils.generic.inner_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","column-matrix","sicmutils.matrix/column-matrix",-2071627511),new cljs.core.Keyword("sicmutils.matrix","column-matrix","sicmutils.matrix/column-matrix",-2071627511)], null),(function (a,b){
return sicmutils.generic.inner_product.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.column_matrix__GT_up(a),sicmutils.matrix.column_matrix__GT_up(b));
}));
sicmutils.generic.cross_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","row-matrix","sicmutils.matrix/row-matrix",-491554895),new cljs.core.Keyword("sicmutils.matrix","row-matrix","sicmutils.matrix/row-matrix",-491554895)], null),(function (a,b){
return sicmutils.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.structure.structure__GT_vector(sicmutils.generic.cross_product.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.row_matrix__GT_vector(a),sicmutils.matrix.row_matrix__GT_vector(b)))], 0));
}));
sicmutils.generic.cross_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","column-matrix","sicmutils.matrix/column-matrix",-2071627511),new cljs.core.Keyword("sicmutils.matrix","column-matrix","sicmutils.matrix/column-matrix",-2071627511)], null),(function (a,b){
return sicmutils.matrix.up__GT_column_matrix(sicmutils.generic.cross_product.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.column_matrix__GT_up(a),sicmutils.matrix.column_matrix__GT_up(b)));
}));
sicmutils.generic.outer_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","column-matrix","sicmutils.matrix/column-matrix",-2071627511),new cljs.core.Keyword("sicmutils.matrix","row-matrix","sicmutils.matrix/row-matrix",-491554895)], null),(function (a,b){
return sicmutils.matrix.mul(a,b);
}));
sicmutils.generic.partial_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.matrix","matrix","sicmutils.matrix/matrix",1944303310),sicmutils.value.seqtype], null),(function (M,selectors){
return sicmutils.matrix.fmap((function (p1__87234_SHARP_){
return sicmutils.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(p1__87234_SHARP_,selectors);
}),M);
}));

//# sourceMappingURL=sicmutils.matrix.js.map
