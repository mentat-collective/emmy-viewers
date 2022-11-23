goog.provide('pattern.consequence');
/**
 * Wraps the argument `x` in a form that will always successfully return from a
 *   consequence function, whatever its value.
 * 
 *   Use [[succeed]] to return `nil` or `false` from a consequence function. For
 *   all other return values, returning `(succeed x)` is identical to returning
 *   `x`
 */
pattern.consequence.succeed = (function pattern$consequence$succeed(x){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pattern.consequence","succeed","pattern.consequence/succeed",86591961),x], null);
});
/**
 * Given a form returned by a consequence function, unwraps the top level
 *   `succeed` wrapper if present to return the final value.
 */
pattern.consequence.unwrap = (function pattern$consequence$unwrap(x){
if(cljs.core.map_QMARK_(x)){
return new cljs.core.Keyword("pattern.consequence","succeed","pattern.consequence/succeed",86591961).cljs$core$IFn$_invoke$arity$2(x,x);
} else {
return x;
}
});
/**
 * Given symbols `f` representing a function and `x` representing its argument,
 *   returns a form that represents function application.
 * 
 *   - Symbols are quoted
 *   - [[unquote?]] forms are included without quote
 *   - all other forms are left untouched.
 */
pattern.consequence.apply_form = (function pattern$consequence$apply_form(f,x){
var f__$1 = ((cljs.core.simple_symbol_QMARK_(f))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null))))):((pattern.syntax.unquote_QMARK_(f))?pattern.syntax.unquoted_form(f):f
));
return (new cljs.core.List(null,f__$1,(new cljs.core.List(null,x,null,(1),null)),(2),null));
});
/**
 * Takes:
 * 
 *   - a symbol `frame-sym` meant to reference a map of bindings
 *   - a skeleton expression `skel`
 * 
 *   and returns an unevaluated body that, when evaluated, will produce a form
 *   structure of identical shape to `skel`, with:
 * 
 *   - all variable binding forms replaced by forms that look up the binding in a
 *  map bound to `frame-sym`
 *   - same with any segment binding form, with the added note that these should
 *  be spliced in
 *   - any `unquote` or `unquote-splicing` forms respected.
 */
pattern.consequence.compile_skeleton = (function pattern$consequence$compile_skeleton(frame_sym,skel){
var compile_sequential = (function pattern$consequence$compile_skeleton_$_compile_sequential(xs){
var acc = pattern.syntax.splice_reduce(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(pattern.syntax.segment_QMARK_,pattern.syntax.reverse_segment_QMARK_,pattern.syntax.unquote_splice_QMARK_),compile,xs);
if(cljs.core.empty_QMARK_(acc)){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(acc))){
return cljs.core.first(acc);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),acc)));

}
}
});
var compile = (function pattern$consequence$compile_skeleton_$_compile(form){
if(cljs.core.truth_((function (){var or__4253__auto__ = pattern.syntax.binding_QMARK_(form);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pattern.syntax.segment_QMARK_(form);
}
})())){
var v = pattern.syntax.variable_name(form);
return pattern.consequence.apply_form(v,frame_sym);
} else {
if(cljs.core.truth_(pattern.syntax.reverse_segment_QMARK_(form))){
var v = pattern.syntax.reverse_segment_name(form);
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rseq","cljs.core/rseq",-238610347,null),(new cljs.core.List(null,pattern.consequence.apply_form(v,frame_sym),null,(1),null)),(2),null));
} else {
if((form instanceof cljs.core.Symbol)){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,form,null,(1),null)),(2),null));
} else {
if(pattern.syntax.unquote_QMARK_(form)){
return pattern.syntax.unquoted_form(form);
} else {
if(pattern.syntax.unquote_splice_QMARK_(form)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,pattern.syntax.unquoted_form(form));
} else {
if(cljs.core.map_QMARK_(form)){
return sicmutils.util.map_vals(pattern$consequence$compile_skeleton_$_compile,form);
} else {
if(cljs.core.vector_QMARK_(form)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vec","cljs.core/vec",307622519,null),null,(1),null)),(new cljs.core.List(null,compile_sequential(form),null,(1),null)))));
} else {
if(cljs.core.sequential_QMARK_(form)){
if(cljs.core.empty_QMARK_(form)){
return form;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,compile_sequential(form),null,(1),null)))));
}
} else {
return form;

}
}
}
}
}
}
}
}
});
if(cljs.core.truth_(skel)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"r__97697__auto__","r__97697__auto__",-414953775,null),null,(1),null)),(new cljs.core.List(null,compile(skel),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"r__97697__auto__","r__97697__auto__",-414953775,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("pattern.consequence","succeed","pattern.consequence/succeed",1727123488,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"r__97697__auto__","r__97697__auto__",-414953775,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("pattern.consequence","succeed","pattern.consequence/succeed",1727123488,null),null,(1),null)),(new cljs.core.List(null,skel,null,(1),null)))));
}
});

//# sourceMappingURL=pattern.consequence.js.map
