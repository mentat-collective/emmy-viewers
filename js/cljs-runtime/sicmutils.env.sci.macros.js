goog.provide('sicmutils.env.sci.macros');
/**
 * Originally defined in `pattern.rule`.
 */
sicmutils.env.sci.macros.pattern = (function sicmutils$env$sci$macros$pattern(var_args){
var G__103933 = arguments.length;
switch (G__103933) {
case 3:
return sicmutils.env.sci.macros.pattern.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sicmutils.env.sci.macros.pattern.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.env.sci.macros.pattern.cljs$core$IFn$_invoke$arity$3 = (function (_,___$1,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("pattern.rule","pattern*","pattern.rule/pattern*",-1644401963,null),null,(1),null)),(new cljs.core.List(null,pattern.syntax.compile_pattern(form),null,(1),null)))));
}));

(sicmutils.env.sci.macros.pattern.cljs$core$IFn$_invoke$arity$4 = (function (_,___$1,form,pred){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("pattern.rule","pattern*","pattern.rule/pattern*",-1644401963,null),null,(1),null)),(new cljs.core.List(null,pattern.syntax.compile_pattern(form),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(pred)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred], null):null)], 0))));
}));

(sicmutils.env.sci.macros.pattern.cljs$lang$maxFixedArity = 4);

/**
 * Originally defined in `pattern.rule`.
 */
sicmutils.env.sci.macros.consequence = (function sicmutils$env$sci$macros$consequence(_,___$1,form){
var sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,sym,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,pattern.consequence.compile_skeleton(sym,form),null,(1),null))], 0))));
});
/**
 * Originally defined in `pattern.rule`.
 */
sicmutils.env.sci.macros.template = (function sicmutils$env$sci$macros$template(var_args){
var G__103935 = arguments.length;
switch (G__103935) {
case 3:
return sicmutils.env.sci.macros.template.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sicmutils.env.sci.macros.template.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.env.sci.macros.template.cljs$core$IFn$_invoke$arity$3 = (function (_,___$1,form){
return pattern.consequence.compile_skeleton(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),form);
}));

(sicmutils.env.sci.macros.template.cljs$core$IFn$_invoke$arity$4 = (function (_,___$1,m,form){
var sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,m,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,pattern.consequence.compile_skeleton(sym,form),null,(1),null))], 0))));
}));

(sicmutils.env.sci.macros.template.cljs$lang$maxFixedArity = 4);

sicmutils.env.sci.macros.rule = (function sicmutils$env$sci$macros$rule(var_args){
var G__103937 = arguments.length;
switch (G__103937) {
case 4:
return sicmutils.env.sci.macros.rule.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sicmutils.env.sci.macros.rule.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.env.sci.macros.rule.cljs$core$IFn$_invoke$arity$4 = (function (_,___$1,pattern__$1,consequent_fn){
return pattern.rule.compile_rule.cljs$core$IFn$_invoke$arity$2(pattern__$1,consequent_fn);
}));

(sicmutils.env.sci.macros.rule.cljs$core$IFn$_invoke$arity$5 = (function (_,___$1,pattern__$1,pred,skeleton){
return pattern.rule.compile_rule.cljs$core$IFn$_invoke$arity$3(pattern__$1,pred,skeleton);
}));

(sicmutils.env.sci.macros.rule.cljs$lang$maxFixedArity = 5);

/**
 * Originally defined in `pattern.rule`.
 */
sicmutils.env.sci.macros.ruleset = (function sicmutils$env$sci$macros$ruleset(var_args){
var args__4870__auto__ = [];
var len__4864__auto___103982 = arguments.length;
var i__4865__auto___103983 = (0);
while(true){
if((i__4865__auto___103983 < len__4864__auto___103982)){
args__4870__auto__.push((arguments[i__4865__auto___103983]));

var G__103984 = (i__4865__auto___103983 + (1));
i__4865__auto___103983 = G__103984;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sicmutils.env.sci.macros.ruleset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sicmutils.env.sci.macros.ruleset.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,patterns_and_consequences){
if(cljs.core.zero_QMARK_){
} else {
throw (new Error("Assert failed: zero?"));
}

if(cljs.core.truth_(cljs.core.mod(cljs.core.count(patterns_and_consequences),(3)))){
} else {
throw (new Error("Assert failed: (mod (count patterns-and-consequences) 3)"));
}

var inputs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),patterns_and_consequences);
var rules = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__103938_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pattern.rule.compile_rule,p1__103938_SHARP_);
}),inputs);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("pattern.rule","ruleset*","pattern.rule/ruleset*",222178895,null),null,(1),null)),rules)));
}));

(sicmutils.env.sci.macros.ruleset.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sicmutils.env.sci.macros.ruleset.cljs$lang$applyTo = (function (seq103939){
var G__103940 = cljs.core.first(seq103939);
var seq103939__$1 = cljs.core.next(seq103939);
var G__103941 = cljs.core.first(seq103939__$1);
var seq103939__$2 = cljs.core.next(seq103939__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103940,G__103941,seq103939__$2);
}));

/**
 * Originally defined in `sicmutils.algebra.fold`.
 */
sicmutils.env.sci.macros.kbk_n = (function sicmutils$env$sci$macros$kbk_n(_,___$1,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),sicmutils.algebra.fold.kbk_n_body(n))));
});
/**
 * Originally defined in `sicmutils.util.def`.
 */
sicmutils.env.sci.macros.fork = (function sicmutils$env$sci$macros$fork(var_args){
var args__4870__auto__ = [];
var len__4864__auto___103987 = arguments.length;
var i__4865__auto___103988 = (0);
while(true){
if((i__4865__auto___103988 < len__4864__auto___103987)){
args__4870__auto__.push((arguments[i__4865__auto___103988]));

var G__103989 = (i__4865__auto___103988 + (1));
i__4865__auto___103988 = G__103989;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sicmutils.env.sci.macros.fork.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sicmutils.env.sci.macros.fork.cljs$core$IFn$_invoke$arity$variadic = (function (_,__AMPERSAND_env,p__103945){
var map__103946 = p__103945;
var map__103946__$1 = cljs.core.__destructure_map(map__103946);
var cljs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103946__$1,new cljs.core.Keyword(null,"cljs","cljs",1492417629));
var clj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103946__$1,new cljs.core.Keyword(null,"clj","clj",-660495428));
if(cljs.core.contains_QMARK_(__AMPERSAND_env,new cljs.core.Symbol(null,"&env","&env",-919163083,null))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&env","&env",-919163083,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs__$1,null,(1),null)),(new cljs.core.List(null,clj,null,(1),null))], 0))));
} else {
return cljs__$1;

}
}));

(sicmutils.env.sci.macros.fork.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sicmutils.env.sci.macros.fork.cljs$lang$applyTo = (function (seq103942){
var G__103943 = cljs.core.first(seq103942);
var seq103942__$1 = cljs.core.next(seq103942);
var G__103944 = cljs.core.first(seq103942__$1);
var seq103942__$2 = cljs.core.next(seq103942__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103943,G__103944,seq103942__$2);
}));

/**
 * Originally defined in `sicmutils.env`.
 */
sicmutils.env.sci.macros.literal_function = (function sicmutils$env$sci$macros$literal_function(var_args){
var G__103948 = arguments.length;
switch (G__103948) {
case 3:
return sicmutils.env.sci.macros.literal_function.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sicmutils.env.sci.macros.literal_function.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sicmutils.env.sci.macros.literal_function.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.env.sci.macros.literal_function.cljs$core$IFn$_invoke$arity$3 = (function (_,___$1,f){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("sicmutils.abstract.function","literal-function","sicmutils.abstract.function/literal-function",-814351689,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)))));
}));

(sicmutils.env.sci.macros.literal_function.cljs$core$IFn$_invoke$arity$4 = (function (_,___$1,f,sicm_signature){
if(((cljs.core.list_QMARK_(sicm_signature)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.first(sicm_signature))))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("sicmutils.abstract.function","literal-function","sicmutils.abstract.function/literal-function",-814351689,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,sicm_signature,null,(1),null))))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("sicmutils.abstract.function","literal-function","sicmutils.abstract.function/literal-function",-814351689,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sicm_signature,null,(1),null))], 0))));
}
}));

(sicmutils.env.sci.macros.literal_function.cljs$core$IFn$_invoke$arity$5 = (function (_,___$1,f,domain,range){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("sicmutils.abstract.function","literal-function","sicmutils.abstract.function/literal-function",-814351689,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,domain,null,(1),null)),(new cljs.core.List(null,range,null,(1),null))], 0))));
}));

(sicmutils.env.sci.macros.literal_function.cljs$lang$maxFixedArity = 5);

/**
 * Originally defined in `sicmutils.abstract.function`.
 */
sicmutils.env.sci.macros.with_literal_functions = (function sicmutils$env$sci$macros$with_literal_functions(var_args){
var args__4870__auto__ = [];
var len__4864__auto___104016 = arguments.length;
var i__4865__auto___104017 = (0);
while(true){
if((i__4865__auto___104017 < len__4864__auto___104016)){
args__4870__auto__.push((arguments[i__4865__auto___104017]));

var G__104018 = (i__4865__auto___104017 + (1));
i__4865__auto___104017 = G__104018;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return sicmutils.env.sci.macros.with_literal_functions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(sicmutils.env.sci.macros.with_literal_functions.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,litfns,body){
var pairs = sicmutils.abstract$.function$.binding_pairs(litfns);
var bindings = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,pairs);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(sicmutils.env.sci.macros.with_literal_functions.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sicmutils.env.sci.macros.with_literal_functions.cljs$lang$applyTo = (function (seq103949){
var G__103950 = cljs.core.first(seq103949);
var seq103949__$1 = cljs.core.next(seq103949);
var G__103951 = cljs.core.first(seq103949__$1);
var seq103949__$2 = cljs.core.next(seq103949__$1);
var G__103952 = cljs.core.first(seq103949__$2);
var seq103949__$3 = cljs.core.next(seq103949__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103950,G__103951,G__103952,seq103949__$3);
}));

/**
 * Originally defined in `sicmutils.calculus.coordinate`.
 */
sicmutils.env.sci.macros.let_coordinates = (function sicmutils$env$sci$macros$let_coordinates(var_args){
var args__4870__auto__ = [];
var len__4864__auto___104019 = arguments.length;
var i__4865__auto___104020 = (0);
while(true){
if((i__4865__auto___104020 < len__4864__auto___104019)){
args__4870__auto__.push((arguments[i__4865__auto___104020]));

var G__104021 = (i__4865__auto___104020 + (1));
i__4865__auto___104020 = G__104021;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return sicmutils.env.sci.macros.let_coordinates.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(sicmutils.env.sci.macros.let_coordinates.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,bindings,body){
if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
sicmutils.util.illegal("let-coordinates requires an even number of bindings");
}

var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
var prototypes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var c_systems = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
var system_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,cljs.core.name),c_systems);
var coordinate_names = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(sicmutils.calculus.coordinate.symbols_from_prototype,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prototypes], 0));
var coordinate_vector_field_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.calculus.vector_field.coordinate_name__GT_vf_name,coordinate_names);
var coordinate_form_field_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.calculus.form_field.coordinate_name__GT_ff_name,coordinate_names);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(system_names,(new cljs.core.List(null,new cljs.core.Keyword(null,"as","as",1148689641),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"c-systems__103953__auto__","c-systems__103953__auto__",-492383577,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","mapv","cljs.core/mapv",433728488,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("sicmutils.calculus.manifold","with-coordinate-prototype","sicmutils.calculus.manifold/with-coordinate-prototype",-1767714087,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,c_systems),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sicmutils.calculus.coordinate.quotify_coordinate_prototype,prototypes),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,coordinate_names),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","flatten","cljs.core/flatten",-237795822,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("sicmutils.calculus.coordinate","coordinate-functions","sicmutils.calculus.coordinate/coordinate-functions",1802102717,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"c-systems__103953__auto__","c-systems__103953__auto__",-492383577,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,coordinate_vector_field_names),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","flatten","cljs.core/flatten",-237795822,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("sicmutils.calculus.vector-field","coordinate-system->vector-basis","sicmutils.calculus.vector-field/coordinate-system->vector-basis",-1841791405,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"c-systems__103953__auto__","c-systems__103953__auto__",-492383577,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,coordinate_form_field_names),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","flatten","cljs.core/flatten",-237795822,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("sicmutils.calculus.form-field","coordinate-system->oneform-basis","sicmutils.calculus.form-field/coordinate-system->oneform-basis",-1600950979,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"c-systems__103953__auto__","c-systems__103953__auto__",-492383577,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(sicmutils.env.sci.macros.let_coordinates.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sicmutils.env.sci.macros.let_coordinates.cljs$lang$applyTo = (function (seq103954){
var G__103955 = cljs.core.first(seq103954);
var seq103954__$1 = cljs.core.next(seq103954);
var G__103956 = cljs.core.first(seq103954__$1);
var seq103954__$2 = cljs.core.next(seq103954__$1);
var G__103957 = cljs.core.first(seq103954__$2);
var seq103954__$3 = cljs.core.next(seq103954__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103955,G__103956,G__103957,seq103954__$3);
}));

/**
 * Originally defined in `sicmutils.calculus.coordinate`.
 */
sicmutils.env.sci.macros.using_coordinates = (function sicmutils$env$sci$macros$using_coordinates(var_args){
var args__4870__auto__ = [];
var len__4864__auto___104025 = arguments.length;
var i__4865__auto___104026 = (0);
while(true){
if((i__4865__auto___104026 < len__4864__auto___104025)){
args__4870__auto__.push((arguments[i__4865__auto___104026]));

var G__104027 = (i__4865__auto___104026 + (1));
i__4865__auto___104026 = G__104027;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((4) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((4)),(0),null)):null);
return sicmutils.env.sci.macros.using_coordinates.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4871__auto__);
});

(sicmutils.env.sci.macros.using_coordinates.cljs$core$IFn$_invoke$arity$variadic = (function (env,form,coordinate_prototype,coordinate_system,body){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(sicmutils.env.sci.macros.let_coordinates,env,form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coordinate_prototype,coordinate_system], null),body);
}));

(sicmutils.env.sci.macros.using_coordinates.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sicmutils.env.sci.macros.using_coordinates.cljs$lang$applyTo = (function (seq103958){
var G__103959 = cljs.core.first(seq103958);
var seq103958__$1 = cljs.core.next(seq103958);
var G__103960 = cljs.core.first(seq103958__$1);
var seq103958__$2 = cljs.core.next(seq103958__$1);
var G__103961 = cljs.core.first(seq103958__$2);
var seq103958__$3 = cljs.core.next(seq103958__$2);
var G__103962 = cljs.core.first(seq103958__$3);
var seq103958__$4 = cljs.core.next(seq103958__$3);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103959,G__103960,G__103961,G__103962,seq103958__$4);
}));

/**
 * Originally defined in `sicmutils.calculus.coordinate`.
 */
sicmutils.env.sci.macros.define_coordinates = (function sicmutils$env$sci$macros$define_coordinates(_,___$1,coordinate_prototype,coordinate_system){
var sys_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(coordinate_system));
var coord_names = sicmutils.calculus.coordinate.symbols_from_prototype(coordinate_prototype);
var vector_field_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.calculus.vector_field.coordinate_name__GT_vf_name,coord_names);
var form_field_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.calculus.form_field.coordinate_name__GT_ff_name,coord_names);
var sys_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var value_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var bind = (function (sym,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ns-unmap","cljs.core/ns-unmap",-1559056406,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","intern","cljs.core/intern",-1955259342,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0))));
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sys_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("sicmutils.calculus.manifold","with-coordinate-prototype","sicmutils.calculus.manifold/with-coordinate-prototype",-1767714087,null),null,(1),null)),(new cljs.core.List(null,coordinate_system,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sicmutils.calculus.coordinate.quotify_coordinate_prototype(coordinate_prototype),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,bind(sys_name,sys_sym),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,value_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","flatten","cljs.core/flatten",-237795822,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("sicmutils.calculus.coordinate","coordinate-functions","sicmutils.calculus.coordinate/coordinate-functions",1802102717,null),null,(1),null)),(new cljs.core.List(null,sys_sym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("sicmutils.calculus.vector-field","coordinate-system->vector-basis","sicmutils.calculus.vector-field/coordinate-system->vector-basis",-1841791405,null),null,(1),null)),(new cljs.core.List(null,sys_sym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("sicmutils.calculus.form-field","coordinate-system->oneform-basis","sicmutils.calculus.form-field/coordinate-system->oneform-basis",-1600950979,null),null,(1),null)),(new cljs.core.List(null,sys_sym,null,(1),null))))),null,(1),null))], 0))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,sym){
return bind(sym,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null),null,(1),null)),(new cljs.core.List(null,value_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,i,null,(1),null))], 0)))));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(coord_names,vector_field_names,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_field_names], 0)))], 0)))),null,(1),null))], 0))));
});
sicmutils.env.sci.macros.tag_as_macro = (function sicmutils$env$sci$macros$tag_as_macro(f){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),true);
});
sicmutils.env.sci.macros.all = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"kbk-n","kbk-n",-118508308,null),sicmutils.env.sci.macros.tag_as_macro(sicmutils.env.sci.macros.kbk_n),new cljs.core.Symbol(null,"literal-function","literal-function",-1466238050,null),sicmutils.env.sci.macros.tag_as_macro(sicmutils.env.sci.macros.literal_function),new cljs.core.Symbol(null,"with-literal-functions","with-literal-functions",-1921576455,null),sicmutils.env.sci.macros.tag_as_macro(sicmutils.env.sci.macros.with_literal_functions),new cljs.core.Symbol(null,"let-coordinates","let-coordinates",1678927597,null),sicmutils.env.sci.macros.tag_as_macro(sicmutils.env.sci.macros.let_coordinates),new cljs.core.Symbol(null,"using-coordinates","using-coordinates",672518652,null),sicmutils.env.sci.macros.tag_as_macro(sicmutils.env.sci.macros.using_coordinates),new cljs.core.Symbol(null,"define-coordinates","define-coordinates",785984378,null),sicmutils.env.sci.macros.tag_as_macro(sicmutils.env.sci.macros.define_coordinates),new cljs.core.Symbol(null,"fork","fork",-1591461534,null),sicmutils.env.sci.macros.tag_as_macro(sicmutils.env.sci.macros.fork)], null);
sicmutils.env.sci.macros.pattern_macros = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),sicmutils.env.sci.macros.tag_as_macro(sicmutils.env.sci.macros.pattern),new cljs.core.Symbol(null,"consequence","consequence",1638527189,null),sicmutils.env.sci.macros.tag_as_macro(sicmutils.env.sci.macros.consequence),new cljs.core.Symbol(null,"template","template",938125843,null),sicmutils.env.sci.macros.tag_as_macro(sicmutils.env.sci.macros.template),new cljs.core.Symbol(null,"rule","rule",-1924462512,null),sicmutils.env.sci.macros.tag_as_macro(sicmutils.env.sci.macros.rule),new cljs.core.Symbol(null,"ruleset","ruleset",-504741885,null),sicmutils.env.sci.macros.tag_as_macro(sicmutils.env.sci.macros.ruleset)], null);
sicmutils.env.sci.macros.ns_bindings = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"pattern.rule","pattern.rule",-918844174,null),sicmutils.env.sci.macros.pattern_macros,new cljs.core.Symbol(null,"sicmutils.env","sicmutils.env",-1316831725,null),sicmutils.env.sci.macros.all,new cljs.core.Symbol(null,"sicmutils.abstract.function","sicmutils.abstract.function",-1303788335,null),cljs.core.select_keys(sicmutils.env.sci.macros.all,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"with-literal-functions","with-literal-functions",-1921576455,null)], null)),new cljs.core.Symbol(null,"sicmutils.algebra.fold","sicmutils.algebra.fold",-72274112,null),cljs.core.select_keys(sicmutils.env.sci.macros.all,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kbk-n","kbk-n",-118508308,null)], null)),new cljs.core.Symbol(null,"sicmutils.calculus.coordinate","sicmutils.calculus.coordinate",1791156794,null),cljs.core.select_keys(sicmutils.env.sci.macros.all,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"let-coordinates","let-coordinates",1678927597,null),new cljs.core.Symbol(null,"using-coordinates","using-coordinates",672518652,null),new cljs.core.Symbol(null,"define-coordinates","define-coordinates",785984378,null)], null)),new cljs.core.Symbol(null,"sicmutils.util.def","sicmutils.util.def",-1731630303,null),cljs.core.select_keys(sicmutils.env.sci.macros.all,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fork","fork",-1591461534,null)], null))], null);

//# sourceMappingURL=sicmutils.env.sci.macros.js.map
