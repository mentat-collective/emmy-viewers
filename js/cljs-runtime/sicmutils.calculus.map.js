goog.provide('sicmutils.calculus.map');
sicmutils.calculus.map.pullback_function = (function sicmutils$calculus$map$pullback_function(mu_COLON_N__GT_M){
return (function (f_on_M){
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f_on_M,mu_COLON_N__GT_M], 0));
});
});
sicmutils.calculus.map.pushforward_function = (function sicmutils$calculus$map$pushforward_function(mu_inverse_COLON_M__GT_N){
return (function (f_on_N){
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f_on_N,mu_inverse_COLON_M__GT_N], 0));
});
});
/**
 * Defined on FDG p.72.
 */
sicmutils.calculus.map.differential_of_map = (function sicmutils$calculus$map$differential_of_map(mu_COLON_N__GT_M){
return (function (v_on_N){
if(sicmutils.calculus.vector_field.vector_field_QMARK_(v_on_N)){
} else {
throw (new Error("Assert failed: (vf/vector-field? v-on-N)"));
}

var v_on_M = (function (g_on_M){
var G__101564 = sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([g_on_M,mu_COLON_N__GT_M], 0));
return (v_on_N.cljs$core$IFn$_invoke$arity$1 ? v_on_N.cljs$core$IFn$_invoke$arity$1(G__101564) : v_on_N.call(null,G__101564));
});
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"d","d",-682293345,null),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(mu_COLON_N__GT_M),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(v_on_N),null,(1),null)))));
return sicmutils.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2(v_on_M,name);
});
});
/**
 * Alias for [[differential-of-map]].
 */
sicmutils.calculus.map.differential = sicmutils.calculus.map.differential_of_map;
sicmutils.calculus.map.pushforward_vector = (function sicmutils$calculus$map$pushforward_vector(mu_COLON_N__GT_M,mu_inverse_COLON_M__GT_N){
return (function (v_on_N){
var op = (function (f){
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__101567 = sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f,mu_COLON_N__GT_M], 0));
return (v_on_N.cljs$core$IFn$_invoke$arity$1 ? v_on_N.cljs$core$IFn$_invoke$arity$1(G__101567) : v_on_N.call(null,G__101567));
})(),mu_inverse_COLON_M__GT_N], 0));
});
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"pushforward","pushforward",-683343030,null),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(mu_COLON_N__GT_M),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(v_on_N),null,(1),null)))));
return sicmutils.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2(op,name);
});
});
sicmutils.calculus.map.literal_manifold_map = (function sicmutils$calculus$map$literal_manifold_map(name,source,target){
var n = new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(sicmutils.calculus.manifold.manifold(source));
var m = new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(sicmutils.calculus.manifold.manifold(target));
var domain = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1)))?(0):sicmutils.structure.up_STAR_(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0))));
var range = sicmutils.structure.up_STAR_(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(m,(0)));
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.calculus.manifold.point(target),sicmutils.abstract$.function$.literal_function.cljs$core$IFn$_invoke$arity$3(name,domain,range),sicmutils.calculus.manifold.chart(source)], 0));
});
/**
 * Defined on FDG p.72.
 */
sicmutils.calculus.map.vector_field__GT_vector_field_over_map = (function sicmutils$calculus$map$vector_field__GT_vector_field_over_map(mu_COLON_N__GT_M){
return (function (v_on_M){
var op = (function (f_on_M){
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(v_on_M.cljs$core$IFn$_invoke$arity$1 ? v_on_M.cljs$core$IFn$_invoke$arity$1(f_on_M) : v_on_M.call(null,f_on_M)),mu_COLON_N__GT_M], 0));
});
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"vector-field->vector-field-over-map","vector-field->vector-field-over-map",969823025,null),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(mu_COLON_N__GT_M),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(v_on_M),null,(1),null)))));
return sicmutils.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2(op,name);
});
});
sicmutils.calculus.map.form_field__GT_form_field_over_map = (function sicmutils$calculus$map$form_field__GT_form_field_over_map(mu_COLON_N__GT_M){
return (function (w_on_M){
var make_fake_vector_field = (function sicmutils$calculus$map$form_field__GT_form_field_over_map_$_make_fake_vector_field(V_over_mu,n){
return sicmutils.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2((function (f){
return (function (_){
var fexpr__101577 = (V_over_mu.cljs$core$IFn$_invoke$arity$1 ? V_over_mu.cljs$core$IFn$_invoke$arity$1(f) : V_over_mu.call(null,f));
return (fexpr__101577.cljs$core$IFn$_invoke$arity$1 ? fexpr__101577.cljs$core$IFn$_invoke$arity$1(n) : fexpr__101577.call(null,n));
});
}),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"make-fake-vector-field","make-fake-vector-field",-1146565625,null),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(V_over_mu),null,(1),null))))));
});
var op = (function() { 
var sicmutils$calculus$map$form_field__GT_form_field_over_map_$_op__delegate = function (vectors_over_map){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(vectors_over_map),sicmutils.calculus.form_field.get_rank(w_on_M))){
} else {
throw (new Error("Assert failed: (= (count vectors-over-map) (ff/get-rank w-on-M))"));
}

return (function (n){
var G__101579 = (mu_COLON_N__GT_M.cljs$core$IFn$_invoke$arity$1 ? mu_COLON_N__GT_M.cljs$core$IFn$_invoke$arity$1(n) : mu_COLON_N__GT_M.call(null,n));
var fexpr__101578 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(w_on_M,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (V_over_mu){
return make_fake_vector_field(V_over_mu,n);
}),vectors_over_map));
return (fexpr__101578.cljs$core$IFn$_invoke$arity$1 ? fexpr__101578.cljs$core$IFn$_invoke$arity$1(G__101579) : fexpr__101578.call(null,G__101579));
});
};
var sicmutils$calculus$map$form_field__GT_form_field_over_map_$_op = function (var_args){
var vectors_over_map = null;
if (arguments.length > 0) {
var G__101582__i = 0, G__101582__a = new Array(arguments.length -  0);
while (G__101582__i < G__101582__a.length) {G__101582__a[G__101582__i] = arguments[G__101582__i + 0]; ++G__101582__i;}
  vectors_over_map = new cljs.core.IndexedSeq(G__101582__a,0,null);
} 
return sicmutils$calculus$map$form_field__GT_form_field_over_map_$_op__delegate.call(this,vectors_over_map);};
sicmutils$calculus$map$form_field__GT_form_field_over_map_$_op.cljs$lang$maxFixedArity = 0;
sicmutils$calculus$map$form_field__GT_form_field_over_map_$_op.cljs$lang$applyTo = (function (arglist__101583){
var vectors_over_map = cljs.core.seq(arglist__101583);
return sicmutils$calculus$map$form_field__GT_form_field_over_map_$_op__delegate(vectors_over_map);
});
sicmutils$calculus$map$form_field__GT_form_field_over_map_$_op.cljs$core$IFn$_invoke$arity$variadic = sicmutils$calculus$map$form_field__GT_form_field_over_map_$_op__delegate;
return sicmutils$calculus$map$form_field__GT_form_field_over_map_$_op;
})()
;
var rank = sicmutils.calculus.form_field.get_rank(w_on_M);
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"form-field->form-field-over-map","form-field->form-field-over-map",1700913758,null),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(mu_COLON_N__GT_M),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(w_on_M),null,(1),null)))));
return sicmutils.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3(op,rank,name);
});
});
sicmutils.calculus.map.basis__GT_basis_over_map = (function sicmutils$calculus$map$basis__GT_basis_over_map(mu_COLON_N__GT_M,basis_on_M){
var vector_basis_on_M = sicmutils.calculus.basis.basis__GT_vector_basis(basis_on_M);
var dual_basis_on_M = sicmutils.calculus.basis.basis__GT_oneform_basis(basis_on_M);
return sicmutils.calculus.basis.make_basis(sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(sicmutils.calculus.map.vector_field__GT_vector_field_over_map(mu_COLON_N__GT_M),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis_on_M], 0)),sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(sicmutils.calculus.map.form_field__GT_form_field_over_map(mu_COLON_N__GT_M),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dual_basis_on_M], 0)));
});
/**
 * Returns a function which will pull a form back across a map (without needing
 *   its inverse)
 */
sicmutils.calculus.map.pullback_form = (function sicmutils$calculus$map$pullback_form(mu_COLON_N__GT_M){
return (function (omega_on_M){
var k = sicmutils.calculus.form_field.get_rank(omega_on_M);
if((k === (0))){
return sicmutils.calculus.map.pullback_function(mu_COLON_N__GT_M)(omega_on_M);
} else {
var op = (function() { 
var G__101584__delegate = function (vectors_on_N){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.calculus.map.form_field__GT_form_field_over_map(mu_COLON_N__GT_M)(omega_on_M),cljs.core.map.cljs$core$IFn$_invoke$arity$2((sicmutils.calculus.map.differential.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.map.differential.cljs$core$IFn$_invoke$arity$1(mu_COLON_N__GT_M) : sicmutils.calculus.map.differential.call(null,mu_COLON_N__GT_M)),vectors_on_N));
};
var G__101584 = function (var_args){
var vectors_on_N = null;
if (arguments.length > 0) {
var G__101585__i = 0, G__101585__a = new Array(arguments.length -  0);
while (G__101585__i < G__101585__a.length) {G__101585__a[G__101585__i] = arguments[G__101585__i + 0]; ++G__101585__i;}
  vectors_on_N = new cljs.core.IndexedSeq(G__101585__a,0,null);
} 
return G__101584__delegate.call(this,vectors_on_N);};
G__101584.cljs$lang$maxFixedArity = 0;
G__101584.cljs$lang$applyTo = (function (arglist__101586){
var vectors_on_N = cljs.core.seq(arglist__101586);
return G__101584__delegate(vectors_on_N);
});
G__101584.cljs$core$IFn$_invoke$arity$variadic = G__101584__delegate;
return G__101584;
})()
;
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"pullback","pullback",-1132207426,null),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(mu_COLON_N__GT_M),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(omega_on_M),null,(1),null)))));
return sicmutils.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3(op,k,name);
}
});
});
sicmutils.calculus.map.pullback_vector_field = (function sicmutils$calculus$map$pullback_vector_field(mu_COLON_N__GT_M,mu_inverse_COLON_M__GT_N){
return sicmutils.calculus.map.pushforward_vector(mu_inverse_COLON_M__GT_N,mu_COLON_N__GT_M);
});
sicmutils.calculus.map.pullback = (function sicmutils$calculus$map$pullback(var_args){
var G__101581 = arguments.length;
switch (G__101581) {
case 1:
return sicmutils.calculus.map.pullback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.calculus.map.pullback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.calculus.map.pullback.cljs$core$IFn$_invoke$arity$1 = (function (mu_COLON_N__GT_M){
return sicmutils.calculus.map.pullback.cljs$core$IFn$_invoke$arity$2(mu_COLON_N__GT_M,null);
}));

(sicmutils.calculus.map.pullback.cljs$core$IFn$_invoke$arity$2 = (function (mu_COLON_N__GT_M,mu_inverse_COLON_M__GT_N){
return (function (thing){
if(sicmutils.calculus.vector_field.vector_field_QMARK_(thing)){
if((mu_inverse_COLON_M__GT_N == null)){
return sicmutils.util.illegal("Pullback of a vector requires inverse map");
} else {
return sicmutils.calculus.map.pullback_vector_field(mu_COLON_N__GT_M,mu_inverse_COLON_M__GT_N)(thing);
}
} else {
return sicmutils.calculus.map.pullback_form(mu_COLON_N__GT_M)(thing);
}
});
}));

(sicmutils.calculus.map.pullback.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sicmutils.calculus.map.js.map
