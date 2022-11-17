goog.provide('sicmutils.calculus.connection');
/**
 * Returns a data structure representing [Christoffel symbols of the first
 *   kind](https://en.wikipedia.org/wiki/Christoffel_symbols#Christoffel_symbols_of_the_first_kind).
 */
sicmutils.calculus.connection.make_Christoffel_1 = (function sicmutils$calculus$connection$make_Christoffel_1(symbols,basis){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("sicmutils.calculus.connection","Christoffel-1","sicmutils.calculus.connection/Christoffel-1",1368893673),new cljs.core.Keyword(null,"symbols","symbols",1211743),symbols,new cljs.core.Keyword(null,"basis","basis",1865819339),basis], null);
});
sicmutils.calculus.connection.metric__GT_Christoffel_1 = (function sicmutils$calculus$connection$metric__GT_Christoffel_1(metric,basis){
if(sicmutils.calculus.basis.coordinate_basis_QMARK_(basis)){
} else {
throw (new Error("Assert failed: (b/coordinate-basis? basis)"));
}

var vector_basis = sicmutils.calculus.basis.basis__GT_vector_basis(basis);
var half = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2));
return sicmutils.calculus.connection.make_Christoffel_1(sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e_k){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e_j){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e_i){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(half,sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__101902 = (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(e_i,e_j) : metric.call(null,e_i,e_j));
return (e_k.cljs$core$IFn$_invoke$arity$1 ? e_k.cljs$core$IFn$_invoke$arity$1(G__101902) : e_k.call(null,G__101902));
})(),(function (){var G__101906 = (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(e_i,e_k) : metric.call(null,e_i,e_k));
return (e_j.cljs$core$IFn$_invoke$arity$1 ? e_j.cljs$core$IFn$_invoke$arity$1(G__101906) : e_j.call(null,G__101906));
})()),(function (){var G__101907 = (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(e_j,e_k) : metric.call(null,e_j,e_k));
return (e_i.cljs$core$IFn$_invoke$arity$1 ? e_i.cljs$core$IFn$_invoke$arity$1(G__101907) : e_i.call(null,G__101907));
})()));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0)),basis);
});
sicmutils.calculus.connection.metric__GT_Christoffel_2 = (function sicmutils$calculus$connection$metric__GT_Christoffel_2(metric,basis){
if(sicmutils.calculus.basis.coordinate_basis_QMARK_(basis)){
} else {
throw (new Error("Assert failed: (b/coordinate-basis? basis)"));
}

var metric__$1 = sicmutils.function$.memoize(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sicmutils.function$.memoize,metric));
var gi = sicmutils.calculus.metric.invert(metric__$1,basis);
var vector_basis = sicmutils.calculus.basis.basis__GT_vector_basis(basis);
var oneform_basis = sicmutils.calculus.basis.basis__GT_oneform_basis(basis);
var half = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2));
return sicmutils.calculus.covariant.make_Christoffel(sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e_k){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e_j){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (w_i){
return sicmutils.calculus.basis.contract((function (e_m,w_m){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((gi.cljs$core$IFn$_invoke$arity$2 ? gi.cljs$core$IFn$_invoke$arity$2(w_i,w_m) : gi.call(null,w_i,w_m)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(half,sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__101954 = (metric__$1.cljs$core$IFn$_invoke$arity$2 ? metric__$1.cljs$core$IFn$_invoke$arity$2(e_m,e_j) : metric__$1.call(null,e_m,e_j));
return (e_k.cljs$core$IFn$_invoke$arity$1 ? e_k.cljs$core$IFn$_invoke$arity$1(G__101954) : e_k.call(null,G__101954));
})(),(function (){var G__101955 = (metric__$1.cljs$core$IFn$_invoke$arity$2 ? metric__$1.cljs$core$IFn$_invoke$arity$2(e_m,e_k) : metric__$1.call(null,e_m,e_k));
return (e_j.cljs$core$IFn$_invoke$arity$1 ? e_j.cljs$core$IFn$_invoke$arity$1(G__101955) : e_j.call(null,G__101955));
})()),(function (){var G__101956 = (metric__$1.cljs$core$IFn$_invoke$arity$2 ? metric__$1.cljs$core$IFn$_invoke$arity$2(e_j,e_k) : metric__$1.call(null,e_j,e_k));
return (e_m.cljs$core$IFn$_invoke$arity$1 ? e_m.cljs$core$IFn$_invoke$arity$1(G__101956) : e_m.call(null,G__101956));
})())));
}),basis);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([oneform_basis], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0)),basis);
});
sicmutils.calculus.connection.literal_Christoffel_names = (function sicmutils$calculus$connection$literal_Christoffel_names(name,p__101986,n){
var vec__101987 = p__101986;
var s0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101987,(0),null);
var s1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101987,(1),null);
var s2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101987,(2),null);
var scripts = vec__101987;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s0,s1)){
} else {
throw (new Error("Assert failed: (= s0 s1)"));
}

var tex = (function sicmutils$calculus$connection$literal_Christoffel_names_$_tex(s){
var or__4253__auto__ = (sicmutils.structure.orientation__GT_separator.cljs$core$IFn$_invoke$arity$1 ? sicmutils.structure.orientation__GT_separator.cljs$core$IFn$_invoke$arity$1(s) : sicmutils.structure.orientation__GT_separator.call(null,s));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.util.illegal(["Bad scripts: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scripts)].join(''));
}
});
var Gijk = (function sicmutils$calculus$connection$literal_Christoffel_names_$_Gijk(i,j,k){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tex(s0)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(j),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tex(s2)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));
});
return sicmutils.structure.generate(n,s0,(function (i){
return sicmutils.structure.generate(n,s1,(function (j){
return sicmutils.structure.generate(n,s2,(function (k){
return Gijk(i,j,k);
}));
}));
}));
});
sicmutils.calculus.connection.literal_Christoffel_1 = (function sicmutils$calculus$connection$literal_Christoffel_1(name,coordsys){
var n = new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(sicmutils.calculus.manifold.manifold(coordsys));
return sicmutils.calculus.connection.make_Christoffel_1(sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (name__$1){
return sicmutils.calculus.manifold.literal_manifold_function(name__$1,coordsys);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.calculus.connection.literal_Christoffel_names(name,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924)], null),n)], 0)),sicmutils.calculus.basis.coordinate_system__GT_basis(coordsys));
});
sicmutils.calculus.connection.literal_Christoffel_2 = (function sicmutils$calculus$connection$literal_Christoffel_2(name,coordsys){
var n = new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(sicmutils.calculus.manifold.manifold(coordsys));
return sicmutils.calculus.covariant.make_Christoffel(sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (name__$1){
return sicmutils.calculus.manifold.literal_manifold_function(name__$1,coordsys);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.calculus.connection.literal_Christoffel_names(name,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),new cljs.core.Keyword("sicmutils.structure","down","sicmutils.structure/down",-1499865924),new cljs.core.Keyword("sicmutils.structure","up","sicmutils.structure/up",-2138938939)], null),n)], 0)),sicmutils.calculus.basis.coordinate_system__GT_basis(coordsys));
});
sicmutils.calculus.connection.literal_Cartan = (function sicmutils$calculus$connection$literal_Cartan(name,coordsys){
return sicmutils.calculus.covariant.Christoffel__GT_Cartan(sicmutils.calculus.connection.literal_Christoffel_2(name,coordsys));
});
sicmutils.calculus.connection.structure_constant = (function sicmutils$calculus$connection$structure_constant(e_i,e_j,e_k,basis,metric){
return sicmutils.calculus.basis.contract((function (e_l,w_l){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(e_k,e_l) : metric.call(null,e_k,e_l)),(function (){var G__102037 = sicmutils.operator.commutator(e_i,e_j);
return (w_l.cljs$core$IFn$_invoke$arity$1 ? w_l.cljs$core$IFn$_invoke$arity$1(G__102037) : w_l.call(null,G__102037));
})());
}),basis);
});
sicmutils.calculus.connection.metric__GT_connection_1 = (function sicmutils$calculus$connection$metric__GT_connection_1(metric,basis){
var vector_basis = sicmutils.calculus.basis.basis__GT_vector_basis(basis);
var half = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2));
return sicmutils.calculus.covariant.make_Christoffel(sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e_k){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e_j){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e_i){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(half,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__102091 = (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(e_i,e_j) : metric.call(null,e_i,e_j));
return (e_k.cljs$core$IFn$_invoke$arity$1 ? e_k.cljs$core$IFn$_invoke$arity$1(G__102091) : e_k.call(null,G__102091));
})(),(function (){var G__102093 = (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(e_i,e_k) : metric.call(null,e_i,e_k));
return (e_j.cljs$core$IFn$_invoke$arity$1 ? e_j.cljs$core$IFn$_invoke$arity$1(G__102093) : e_j.call(null,G__102093));
})()),(function (){var G__102104 = (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(e_j,e_k) : metric.call(null,e_j,e_k));
return (e_i.cljs$core$IFn$_invoke$arity$1 ? e_i.cljs$core$IFn$_invoke$arity$1(G__102104) : e_i.call(null,G__102104));
})()),sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.calculus.connection.structure_constant(e_i,e_j,e_k,basis,metric),sicmutils.calculus.connection.structure_constant(e_i,e_k,e_j,basis,metric)),sicmutils.calculus.connection.structure_constant(e_j,e_k,e_i,basis,metric))));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0)),basis);
});
sicmutils.calculus.connection.metric__GT_connection_2 = (function sicmutils$calculus$connection$metric__GT_connection_2(metric,basis){
var vector_basis = sicmutils.calculus.basis.basis__GT_vector_basis(basis);
var oneform_basis = sicmutils.calculus.basis.basis__GT_oneform_basis(basis);
var inverse_metric = sicmutils.calculus.metric.invert(metric,basis);
var half = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2));
return sicmutils.calculus.covariant.make_Christoffel(sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e_k){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e_j){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (w_i){
return sicmutils.calculus.basis.contract((function (e_m,w_m){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((inverse_metric.cljs$core$IFn$_invoke$arity$2 ? inverse_metric.cljs$core$IFn$_invoke$arity$2(w_i,w_m) : inverse_metric.call(null,w_i,w_m)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(half,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var G__102130 = (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(e_m,e_j) : metric.call(null,e_m,e_j));
return (e_k.cljs$core$IFn$_invoke$arity$1 ? e_k.cljs$core$IFn$_invoke$arity$1(G__102130) : e_k.call(null,G__102130));
})(),(function (){var G__102131 = (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(e_m,e_k) : metric.call(null,e_m,e_k));
return (e_j.cljs$core$IFn$_invoke$arity$1 ? e_j.cljs$core$IFn$_invoke$arity$1(G__102131) : e_j.call(null,G__102131));
})()),(function (){var G__102132 = (metric.cljs$core$IFn$_invoke$arity$2 ? metric.cljs$core$IFn$_invoke$arity$2(e_j,e_k) : metric.call(null,e_j,e_k));
return (e_m.cljs$core$IFn$_invoke$arity$1 ? e_m.cljs$core$IFn$_invoke$arity$1(G__102132) : e_m.call(null,G__102132));
})()),sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.calculus.connection.structure_constant(e_m,e_j,e_k,basis,metric),sicmutils.calculus.connection.structure_constant(e_m,e_k,e_j,basis,metric)),sicmutils.calculus.connection.structure_constant(e_j,e_k,e_m,basis,metric)))));
}),basis);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([oneform_basis], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0)),basis);
});

//# sourceMappingURL=sicmutils.calculus.connection.js.map
