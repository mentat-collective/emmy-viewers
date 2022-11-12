goog.provide('sicmutils.abstract$.function$');

cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.abstract.function","function","sicmutils.abstract.function/function",-524182664),new cljs.core.Keyword("sicmutils.value","function","sicmutils.value/function",-1964931037));
/**
 * Convert a SICM-style set (e.g., Real or (UP Real Real)) to
 *   an exemplar (an instance of the relevant type).
 */
sicmutils.abstract$.function$.sicm_set__GT_exemplar = (function sicmutils$abstract$function$sicm_set__GT_exemplar(s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Symbol(null,"Real","Real",374292741,null))){
return (0);
} else {
if(cljs.core.sequential_QMARK_(s)){
var vec__87257 = s;
var seq__87258 = cljs.core.seq(vec__87257);
var first__87259 = cljs.core.first(seq__87258);
var seq__87258__$1 = cljs.core.next(seq__87258);
var constructor$ = first__87259;
var args = seq__87258__$1;
var G__87262 = constructor$;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"X","X",-948439456,null),G__87262)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sicmutils.abstract$.function$.sicm_set__GT_exemplar,args);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"UP","UP",-1898089532,null),G__87262)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.structure.up,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.abstract$.function$.sicm_set__GT_exemplar,args));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"DOWN","DOWN",-1166138822,null),G__87262)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.structure.down,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.abstract$.function$.sicm_set__GT_exemplar,args));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"UP*","UP*",294235991,null),G__87262)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.structure.up,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.second(args),(function (){var G__87265 = cljs.core.first(args);
return (sicmutils.abstract$.function$.sicm_set__GT_exemplar.cljs$core$IFn$_invoke$arity$1 ? sicmutils.abstract$.function$.sicm_set__GT_exemplar.cljs$core$IFn$_invoke$arity$1(G__87265) : sicmutils.abstract$.function$.sicm_set__GT_exemplar.call(null,G__87265));
})()));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"DOWN*","DOWN*",1300864675,null),G__87262)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.structure.down,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.second(args),(function (){var G__87269 = cljs.core.first(args);
return (sicmutils.abstract$.function$.sicm_set__GT_exemplar.cljs$core$IFn$_invoke$arity$1 ? sicmutils.abstract$.function$.sicm_set__GT_exemplar.cljs$core$IFn$_invoke$arity$1(G__87269) : sicmutils.abstract$.function$.sicm_set__GT_exemplar.call(null,G__87269));
})()));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"X*","X*",1047022815,null),G__87262)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.second(args),(function (){var G__87270 = cljs.core.first(args);
return (sicmutils.abstract$.function$.sicm_set__GT_exemplar.cljs$core$IFn$_invoke$arity$1 ? sicmutils.abstract$.function$.sicm_set__GT_exemplar.cljs$core$IFn$_invoke$arity$1(G__87270) : sicmutils.abstract$.function$.sicm_set__GT_exemplar.call(null,G__87270));
})()));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__87262)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
});
/**
 * Convert a SICM-style literal function signature (e.g.,
 *   '(-> Real (X Real Real)) ) to our 'exemplar' format.
 */
sicmutils.abstract$.function$.sicm_signature__GT_domain_range = (function sicmutils$abstract$function$sicm_signature__GT_domain_range(p__87275){
var vec__87276 = p__87275;
var arrow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87276,(0),null);
var domain = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87276,(1),null);
var range = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87276,(2),null);
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"->","->",-2139605430,null),arrow);
if(and__4251__auto__){
var and__4251__auto____$1 = domain;
if(cljs.core.truth_(and__4251__auto____$1)){
return range;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
} else {
sicmutils.util.illegal(["A SICM signature is of the form '(-> domain range), got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arrow),cljs.core.str.cljs$core$IFn$_invoke$arity$1(domain),cljs.core.str.cljs$core$IFn$_invoke$arity$1(range)].join(''));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var d = sicmutils.abstract$.function$.sicm_set__GT_exemplar(domain);
if(cljs.core.vector_QMARK_(d)){
return d;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d], null);
}
})(),sicmutils.abstract$.function$.sicm_set__GT_exemplar(range)], null);
});

/**
* @constructor
 * @implements {sicmutils.function$.IArity}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IFn}
 * @implements {sicmutils.value.Value}
 * @implements {cljs.core.IPrintWithWriter}
*/
sicmutils.abstract$.function$.Function = (function (name,arity,domain,range){
this.name = name;
this.arity = arity;
this.domain = domain;
this.range = range;
this.cljs$lang$protocol_mask$partition0$ = 2149580801;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sicmutils.abstract$.function$.Function.prototype.sicmutils$value$Value$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.abstract$.function$.Function.prototype.sicmutils$value$Value$zero_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (function() { 
var G__87508__delegate = function (___$2){
return sicmutils.value.zero_like(self__.range);
};
var G__87508 = function (var_args){
var ___$2 = null;
if (arguments.length > 0) {
var G__87509__i = 0, G__87509__a = new Array(arguments.length -  0);
while (G__87509__i < G__87509__a.length) {G__87509__a[G__87509__i] = arguments[G__87509__i + 0]; ++G__87509__i;}
  ___$2 = new cljs.core.IndexedSeq(G__87509__a,0,null);
} 
return G__87508__delegate.call(this,___$2);};
G__87508.cljs$lang$maxFixedArity = 0;
G__87508.cljs$lang$applyTo = (function (arglist__87510){
var ___$2 = cljs.core.seq(arglist__87510);
return G__87508__delegate(___$2);
});
G__87508.cljs$core$IFn$_invoke$arity$variadic = G__87508__delegate;
return G__87508;
})()
;
}));

(sicmutils.abstract$.function$.Function.prototype.sicmutils$value$Value$identity_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(sicmutils.abstract$.function$.Function.prototype.sicmutils$value$Value$freeze$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sicmutils.value.freeze(self__.name);
}));

(sicmutils.abstract$.function$.Function.prototype.sicmutils$value$Value$zero_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(sicmutils.abstract$.function$.Function.prototype.sicmutils$value$Value$one_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(sicmutils.abstract$.function$.Function.prototype.sicmutils$value$Value$exact_QMARK_$arity$1 = (function (f){
var self__ = this;
var f__$1 = this;
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.value.exact_QMARK_,f__$1], 0));
}));

(sicmutils.abstract$.function$.Function.prototype.sicmutils$value$Value$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("sicmutils.abstract.function","function","sicmutils.abstract.function/function",-524182664);
}));

(sicmutils.abstract$.function$.Function.prototype.sicmutils$value$Value$identity_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var meta = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),self__.arity,new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"identity-like","identity-like",-98546347)], null);
return cljs.core.with_meta(cljs.core.identity,meta);
}));

(sicmutils.abstract$.function$.Function.prototype.sicmutils$value$Value$one_like$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (function() { 
var G__87511__delegate = function (___$2){
return sicmutils.value.one_like(self__.range);
};
var G__87511 = function (var_args){
var ___$2 = null;
if (arguments.length > 0) {
var G__87512__i = 0, G__87512__a = new Array(arguments.length -  0);
while (G__87512__i < G__87512__a.length) {G__87512__a[G__87512__i] = arguments[G__87512__i + 0]; ++G__87512__i;}
  ___$2 = new cljs.core.IndexedSeq(G__87512__a,0,null);
} 
return G__87511__delegate.call(this,___$2);};
G__87511.cljs$lang$maxFixedArity = 0;
G__87511.cljs$lang$applyTo = (function (arglist__87513){
var ___$2 = cljs.core.seq(arglist__87513);
return G__87511__delegate(___$2);
});
G__87511.cljs$core$IFn$_invoke$arity$variadic = G__87511__delegate;
return G__87511;
})()
;
}));

(sicmutils.abstract$.function$.Function.prototype.sicmutils$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(sicmutils.abstract$.function$.Function.prototype.sicmutils$function$IArity$arity$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.arity;
}));

(sicmutils.abstract$.function$.Function.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name);
}));

(sicmutils.abstract$.function$.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (a,b){
var self__ = this;
var a__$1 = this;
return (sicmutils.abstract$.function$.f_COLON__EQ_.cljs$core$IFn$_invoke$arity$2 ? sicmutils.abstract$.function$.f_COLON__EQ_.cljs$core$IFn$_invoke$arity$2(a__$1,b) : sicmutils.abstract$.function$.f_COLON__EQ_.call(null,a__$1,b));
}));

(sicmutils.abstract$.function$.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var self__ = this;
var x__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1.toString()], 0));
}));

(sicmutils.abstract$.function$.Function.prototype.call = (function (unused__20572__auto__){
var self__ = this;
var self__ = this;
var G__87299 = (arguments.length - (1));
switch (G__87299) {
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

(sicmutils.abstract$.function$.Function.prototype.apply = (function (self__,args87287){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args87287)));
}));

(sicmutils.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
var G__87327 = this$;
var G__87328 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null);
return (sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__87327,G__87328) : sicmutils.abstract$.function$.literal_apply.call(null,G__87327,G__87328));
}));

(sicmutils.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
var G__87332 = this$;
var G__87333 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
return (sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__87332,G__87333) : sicmutils.abstract$.function$.literal_apply.call(null,G__87332,G__87333));
}));

(sicmutils.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
var G__87335 = this$;
var G__87336 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null);
return (sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__87335,G__87336) : sicmutils.abstract$.function$.literal_apply.call(null,G__87335,G__87336));
}));

(sicmutils.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
var G__87338 = this$;
var G__87339 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null);
return (sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__87338,G__87339) : sicmutils.abstract$.function$.literal_apply.call(null,G__87338,G__87339));
}));

(sicmutils.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
var G__87340 = this$;
var G__87341 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e], null);
return (sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__87340,G__87341) : sicmutils.abstract$.function$.literal_apply.call(null,G__87340,G__87341));
}));

(sicmutils.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var this$ = this;
var G__87343 = this$;
var G__87344 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null);
return (sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__87343,G__87344) : sicmutils.abstract$.function$.literal_apply.call(null,G__87343,G__87344));
}));

(sicmutils.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var this$ = this;
var G__87346 = this$;
var G__87347 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g], null);
return (sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__87346,G__87347) : sicmutils.abstract$.function$.literal_apply.call(null,G__87346,G__87347));
}));

(sicmutils.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var this$ = this;
var G__87348 = this$;
var G__87349 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null);
return (sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__87348,G__87349) : sicmutils.abstract$.function$.literal_apply.call(null,G__87348,G__87349));
}));

(sicmutils.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var this$ = this;
var G__87355 = this$;
var G__87356 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i], null);
return (sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__87355,G__87356) : sicmutils.abstract$.function$.literal_apply.call(null,G__87355,G__87356));
}));

(sicmutils.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var this$ = this;
var G__87358 = this$;
var G__87359 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j], null);
return (sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__87358,G__87359) : sicmutils.abstract$.function$.literal_apply.call(null,G__87358,G__87359));
}));

(sicmutils.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var this$ = this;
var G__87365 = this$;
var G__87366 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k], null);
return (sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__87365,G__87366) : sicmutils.abstract$.function$.literal_apply.call(null,G__87365,G__87366));
}));

(sicmutils.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
var G__87377 = this$;
var G__87378 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l], null);
return (sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__87377,G__87378) : sicmutils.abstract$.function$.literal_apply.call(null,G__87377,G__87378));
}));

(sicmutils.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var this$ = this;
var G__87384 = this$;
var G__87385 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m], null);
return (sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__87384,G__87385) : sicmutils.abstract$.function$.literal_apply.call(null,G__87384,G__87385));
}));

(sicmutils.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var this$ = this;
var G__87388 = this$;
var G__87389 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m,n], null);
return (sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__87388,G__87389) : sicmutils.abstract$.function$.literal_apply.call(null,G__87388,G__87389));
}));

(sicmutils.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var this$ = this;
var G__87397 = this$;
var G__87398 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], null);
return (sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__87397,G__87398) : sicmutils.abstract$.function$.literal_apply.call(null,G__87397,G__87398));
}));

(sicmutils.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var this$ = this;
var G__87408 = this$;
var G__87409 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], null);
return (sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__87408,G__87409) : sicmutils.abstract$.function$.literal_apply.call(null,G__87408,G__87409));
}));

(sicmutils.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var this$ = this;
var G__87411 = this$;
var G__87412 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], null);
return (sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__87411,G__87412) : sicmutils.abstract$.function$.literal_apply.call(null,G__87411,G__87412));
}));

(sicmutils.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var this$ = this;
var G__87414 = this$;
var G__87415 = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], null);
return (sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__87414,G__87415) : sicmutils.abstract$.function$.literal_apply.call(null,G__87414,G__87415));
}));

(sicmutils.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
var G__87418 = this$;
var G__87419 = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], null);
return (sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__87418,G__87419) : sicmutils.abstract$.function$.literal_apply.call(null,G__87418,G__87419));
}));

(sicmutils.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
var G__87441 = this$;
var G__87442 = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], null);
return (sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__87441,G__87442) : sicmutils.abstract$.function$.literal_apply.call(null,G__87441,G__87442));
}));

(sicmutils.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var this$ = this;
var G__87448 = this$;
var G__87449 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], null),rest);
return (sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__87448,G__87449) : sicmutils.abstract$.function$.literal_apply.call(null,G__87448,G__87449));
}));

(sicmutils.abstract$.function$.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"arity","arity",-168024608,null),new cljs.core.Symbol(null,"domain","domain",-807220832,null),new cljs.core.Symbol(null,"range","range",-1014743483,null)], null);
}));

(sicmutils.abstract$.function$.Function.cljs$lang$type = true);

(sicmutils.abstract$.function$.Function.cljs$lang$ctorStr = "sicmutils.abstract.function/Function");

(sicmutils.abstract$.function$.Function.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"sicmutils.abstract.function/Function");
}));

/**
 * Positional factory function for sicmutils.abstract.function/Function.
 */
sicmutils.abstract$.function$.__GT_Function = (function sicmutils$abstract$function$__GT_Function(name,arity,domain,range){
return (new sicmutils.abstract$.function$.Function(name,arity,domain,range));
});

/**
 * Returns true if the supplied object is an instance of [[Function]], false
 *   otherwise.
 */
sicmutils.abstract$.function$.literal_function_QMARK_ = (function sicmutils$abstract$function$literal_function_QMARK_(f){
return (f instanceof sicmutils.abstract$.function$.Function);
});
/**
 * Returns the `-name` field of the supplied [[Function]] object. Errors if any
 *   other type is supplied.
 */
sicmutils.abstract$.function$.name = (function sicmutils$abstract$function$name(f){
if(sicmutils.abstract$.function$.literal_function_QMARK_(f)){
} else {
throw (new Error("Assert failed: (literal-function? f)"));
}

return f.name;
});
/**
 * Returns the `-domain` field of the supplied [[Function]] object. Errors if any
 *   other type is supplied.
 */
sicmutils.abstract$.function$.domain_types = (function sicmutils$abstract$function$domain_types(f){
if(sicmutils.abstract$.function$.literal_function_QMARK_(f)){
} else {
throw (new Error("Assert failed: (literal-function? f)"));
}

return f.domain;
});
/**
 * Returns the `-range` field of the supplied [[Function]] object. Errors if any
 *   other type is supplied.
 */
sicmutils.abstract$.function$.range_type = (function sicmutils$abstract$function$range_type(f){
if(sicmutils.abstract$.function$.literal_function_QMARK_(f)){
} else {
throw (new Error("Assert failed: (literal-function? f)"));
}

return f.range;
});
/**
 * Returns true if the function `a` equals `b`, false otherwise.
 */
sicmutils.abstract$.function$.f_COLON__EQ_ = (function sicmutils$abstract$function$f_COLON__EQ_(a,b){
return ((sicmutils.abstract$.function$.literal_function_QMARK_(b)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.abstract$.function$.name(a),sicmutils.abstract$.function$.name(b))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.abstract$.function$.domain_types(a),sicmutils.abstract$.function$.domain_types(b))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.abstract$.function$.range_type(a),sicmutils.abstract$.function$.range_type(b))))))));
});
sicmutils.abstract$.function$.literal_function = (function sicmutils$abstract$function$literal_function(var_args){
var G__87463 = arguments.length;
switch (G__87463) {
case 1:
return sicmutils.abstract$.function$.literal_function.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.abstract$.function$.literal_function.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.abstract$.function$.literal_function.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.abstract$.function$.literal_function.cljs$core$IFn$_invoke$arity$1 = (function (f){
return sicmutils.abstract$.function$.__GT_Function(f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),(0));
}));

(sicmutils.abstract$.function$.literal_function.cljs$core$IFn$_invoke$arity$2 = (function (f,signature){
var vec__87464 = sicmutils.abstract$.function$.sicm_signature__GT_domain_range(signature);
var domain = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87464,(0),null);
var range = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87464,(1),null);
return sicmutils.abstract$.function$.literal_function.cljs$core$IFn$_invoke$arity$3(f,domain,range);
}));

(sicmutils.abstract$.function$.literal_function.cljs$core$IFn$_invoke$arity$3 = (function (f,domain,range){
if(typeof range === 'number'){
var arity = ((cljs.core.vector_QMARK_(domain))?cljs.core.count(domain):(1));
return sicmutils.abstract$.function$.__GT_Function(f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),arity], null),((cljs.core.vector_QMARK_(domain))?domain:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [domain], null)),range);
} else {
if(sicmutils.structure.structure_QMARK_(range)){
var n = cljs.core.count(range);
var orientation = sicmutils.structure.orientation(range);
var template = sicmutils.structure.literal(f,n,orientation);
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (p1__87460_SHARP_,p2__87461_SHARP_){
return sicmutils.abstract$.function$.literal_function.cljs$core$IFn$_invoke$arity$3(p1__87460_SHARP_,domain,p2__87461_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([template,range], 0));
} else {
return sicmutils.util.illegal(["WTF range",cljs.core.str.cljs$core$IFn$_invoke$arity$1(range)].join(''));

}
}
}));

(sicmutils.abstract$.function$.literal_function.cljs$lang$maxFixedArity = 3);

sicmutils.abstract$.function$.binding_pairs = (function sicmutils$abstract$function$binding_pairs(litfns){
var extract_sym = (function sicmutils$abstract$function$binding_pairs_$_extract_sym(entry){
if((entry instanceof cljs.core.Symbol)){
return entry;
} else {
return cljs.core.first(entry);
}
});
var entry__GT_fn = (function sicmutils$abstract$function$binding_pairs_$_entry__GT_fn(entry){
if((entry instanceof cljs.core.Symbol)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("sicmutils.abstract.function","literal-function","sicmutils.abstract.function/literal-function",-814351689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,entry,null,(1),null))))),null,(1),null)))));
} else {
if(((cljs.core.sequential_QMARK_(entry)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(entry),(3))))){
var vec__87470 = entry;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87470,(0),null);
var domain = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87470,(1),null);
var range = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87470,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("sicmutils.abstract.function","literal-function","sicmutils.abstract.function/literal-function",-814351689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,domain,null,(1),null)),(new cljs.core.List(null,range,null,(1),null))], 0))));
} else {
return sicmutils.util.illegal(["unknown literal function type",cljs.core.str.cljs$core$IFn$_invoke$arity$1(entry)].join(''));

}
}
});
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (entry){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [extract_sym(entry),entry__GT_fn(entry)], null);
}),litfns);
});
sicmutils.abstract$.function$.literal_partial = (function sicmutils$abstract$function$literal_partial(f,path){
var fexp = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.function$.arity(f),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null)))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(path),(0)))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(path),(1)))?sicmutils.numsymb.derivative(sicmutils.abstract$.function$.name(f)):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),null,(1),null)),cljs.core.next(path)))),null,(1),null)),(new cljs.core.List(null,sicmutils.abstract$.function$.name(f),null,(1),null)))))):sicmutils.util.illegal("wrong indices")):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),null,(1),null)),path))),null,(1),null)),(new cljs.core.List(null,sicmutils.abstract$.function$.name(f),null,(1),null))))));
return sicmutils.abstract$.function$.__GT_Function(fexp,sicmutils.function$.arity(f),sicmutils.abstract$.function$.domain_types(f),sicmutils.abstract$.function$.range_type(f));
});
/**
 * Takes a literal function `f` and a sequence of arguments `xs`, and generates an
 *   expanded `((D f) xs)` by applying the chain rule and summing the partial
 *   derivatives for each differential argument in the input structure.
 */
sicmutils.abstract$.function$.literal_derivative = (function sicmutils$abstract$function$literal_derivative(f,xs){
var v = sicmutils.matrix.seq__GT_(xs);
var flat_v = cljs.core.flatten(v);
var tag = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.differential.max_order_tag,flat_v);
var ve = sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (p1__87473_SHARP_){
return sicmutils.differential.primal_part.cljs$core$IFn$_invoke$arity$2(p1__87473_SHARP_,tag);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
var partials = sicmutils.structure.map_chain((function (x,path,_){
var dx = sicmutils.differential.tangent_part.cljs$core$IFn$_invoke$arity$2(x,tag);
if(sicmutils.value.zero_QMARK_(dx)){
return (0);
} else {
return sicmutils.differential.d_COLON__STAR_.cljs$core$IFn$_invoke$arity$2((function (){var G__87474 = sicmutils.abstract$.function$.literal_partial(f,path);
var G__87475 = ve;
return (sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? sicmutils.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__87474,G__87475) : sicmutils.abstract$.function$.literal_apply.call(null,G__87474,G__87475));
})(),dx);
}
}),v);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sicmutils.differential.d_COLON__PLUS_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,ve),cljs.core.flatten(partials));
});
/**
 * Check that the argument provided at index i has the same type as
 *   the exemplar expected.
 */
sicmutils.abstract$.function$.check_argument_type = (function sicmutils$abstract$function$check_argument_type(f,provided,expected,indexes){
if(typeof expected === 'number'){
if(sicmutils.value.numerical_QMARK_(provided)){
return null;
} else {
return sicmutils.util.illegal(["expected numerical quantity in argument ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(indexes)," of function call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)," but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(provided)].join(''));
}
} else {
if(sicmutils.structure.structure_QMARK_(expected)){
if(((((sicmutils.structure.structure_QMARK_(provided)) || (cljs.core.sequential_QMARK_(provided)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.structure.orientation(provided),sicmutils.structure.orientation(expected))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(provided),cljs.core.count(expected))))))){
} else {
sicmutils.util.illegal(["expected structure matching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)," but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(provided)].join(''));
}

var seq__87476 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.list,provided,expected,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
var chunk__87477 = null;
var count__87478 = (0);
var i__87479 = (0);
while(true){
if((i__87479 < count__87478)){
var vec__87494 = chunk__87477.cljs$core$IIndexed$_nth$arity$2(null,i__87479);
var provided__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87494,(0),null);
var expected__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87494,(1),null);
var sub_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87494,(2),null);
var G__87497_87523 = f;
var G__87498_87524 = provided__$1;
var G__87499_87525 = expected__$1;
var G__87500_87526 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexes,sub_index);
(sicmutils.abstract$.function$.check_argument_type.cljs$core$IFn$_invoke$arity$4 ? sicmutils.abstract$.function$.check_argument_type.cljs$core$IFn$_invoke$arity$4(G__87497_87523,G__87498_87524,G__87499_87525,G__87500_87526) : sicmutils.abstract$.function$.check_argument_type.call(null,G__87497_87523,G__87498_87524,G__87499_87525,G__87500_87526));


var G__87527 = seq__87476;
var G__87528 = chunk__87477;
var G__87529 = count__87478;
var G__87530 = (i__87479 + (1));
seq__87476 = G__87527;
chunk__87477 = G__87528;
count__87478 = G__87529;
i__87479 = G__87530;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__87476);
if(temp__5753__auto__){
var seq__87476__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__87476__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__87476__$1);
var G__87531 = cljs.core.chunk_rest(seq__87476__$1);
var G__87532 = c__4679__auto__;
var G__87533 = cljs.core.count(c__4679__auto__);
var G__87534 = (0);
seq__87476 = G__87531;
chunk__87477 = G__87532;
count__87478 = G__87533;
i__87479 = G__87534;
continue;
} else {
var vec__87501 = cljs.core.first(seq__87476__$1);
var provided__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87501,(0),null);
var expected__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87501,(1),null);
var sub_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87501,(2),null);
var G__87504_87535 = f;
var G__87505_87536 = provided__$1;
var G__87506_87537 = expected__$1;
var G__87507_87538 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexes,sub_index);
(sicmutils.abstract$.function$.check_argument_type.cljs$core$IFn$_invoke$arity$4 ? sicmutils.abstract$.function$.check_argument_type.cljs$core$IFn$_invoke$arity$4(G__87504_87535,G__87505_87536,G__87506_87537,G__87507_87538) : sicmutils.abstract$.function$.check_argument_type.call(null,G__87504_87535,G__87505_87536,G__87506_87537,G__87507_87538));


var G__87539 = cljs.core.next(seq__87476__$1);
var G__87540 = null;
var G__87541 = (0);
var G__87542 = (0);
seq__87476 = G__87539;
chunk__87477 = G__87540;
count__87478 = G__87541;
i__87479 = G__87542;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((expected instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.value.kind(provided),expected)){
return null;
} else {
return sicmutils.util.illegal(["expected argument of type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)," but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.value.kind(provided))," in call to function ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}
} else {
return sicmutils.util.illegal(["unexpected argument example. got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(provided)," want ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)].join(''));

}
}
}
});
sicmutils.abstract$.function$.literal_apply = (function sicmutils$abstract$function$literal_apply(f,xs){
sicmutils.abstract$.function$.check_argument_type(f,xs,sicmutils.abstract$.function$.domain_types(f),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null));

if(cljs.core.truth_(cljs.core.some(sicmutils.differential.perturbed_QMARK_,xs))){
return sicmutils.abstract$.function$.literal_derivative(f,xs);
} else {
return sicmutils.abstract$.number.literal_number(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sicmutils.abstract$.function$.name(f),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.value.freeze,xs)))));
}
});
sicmutils.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.abstract.function","function","sicmutils.abstract.function/function",-524182664)], null),(function (f){
return sicmutils.abstract$.function$.__GT_Function(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(sicmutils.abstract$.function$.name(f)),sicmutils.function$.arity(f),sicmutils.abstract$.function$.domain_types(f),sicmutils.abstract$.function$.range_type(f));
}));

//# sourceMappingURL=sicmutils.abstract.function.js.map
