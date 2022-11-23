goog.provide('pattern.syntax');
/**
 * Returns true if `pattern` is a binding pattern with restriction predicates,
 *   false otherwise.
 */
pattern.syntax.restricted_QMARK_ = (function pattern$syntax$restricted_QMARK_(pattern__$1){
return ((cljs.core.sequential_QMARK_(pattern__$1)) && ((cljs.core.count(pattern__$1) > (2))));
});
/**
 * Returns true if `pattern` matches the wildcard character `_`, false otherwise.
 */
pattern.syntax.wildcard_QMARK_ = (function pattern$syntax$wildcard_QMARK_(pattern__$1){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pattern__$1,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
/**
 * Returns true if `pattern` is a binding variable reference, false otherwise.
 * 
 *   A binding variable is either:
 * 
 *   - A symbol starting with a single `?` character
 *   - A sequence of the form `(? <binding> ...)`.
 */
pattern.syntax.binding_QMARK_ = (function pattern$syntax$binding_QMARK_(pattern__$1){
var or__4253__auto__ = (function (){var and__4251__auto__ = cljs.core.simple_symbol_QMARK_(pattern__$1);
if(and__4251__auto__){
return sicmutils.util.re_matches_QMARK_(/^\?[^\?].*/,cljs.core.name(pattern__$1));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((cljs.core.sequential_QMARK_(pattern__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(pattern__$1),new cljs.core.Symbol(null,"?","?",-62633706,null))));
}
});
/**
 * Returns true if `pattern` is a segment variable reference, false otherwise.
 * 
 *   A segment binding variable is either:
 * 
 *   - A symbol starting with `??`
 *   - A sequence of the form `(?? <binding>)`.
 */
pattern.syntax.segment_QMARK_ = (function pattern$syntax$segment_QMARK_(pattern__$1){
var or__4253__auto__ = (function (){var and__4251__auto__ = cljs.core.simple_symbol_QMARK_(pattern__$1);
if(and__4251__auto__){
return sicmutils.util.re_matches_QMARK_(/^\?\?[^\?].*/,cljs.core.name(pattern__$1));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((cljs.core.sequential_QMARK_(pattern__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(pattern__$1),new cljs.core.Symbol(null,"??","??",-1097896773,null))));
}
});
/**
 * Returns true if `pattern` is a reversed-segment variable reference, false
 *   otherwise.
 * 
 *   A reverse-segment binding variable is either:
 * 
 *   - A symbol starting with `$$`
 *   - A sequence of the form `(:$$ <binding>)`.
 */
pattern.syntax.reverse_segment_QMARK_ = (function pattern$syntax$reverse_segment_QMARK_(pattern__$1){
var or__4253__auto__ = (function (){var and__4251__auto__ = cljs.core.simple_symbol_QMARK_(pattern__$1);
if(and__4251__auto__){
return sicmutils.util.re_matches_QMARK_(/^\$\$[^\$].*/,cljs.core.name(pattern__$1));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((cljs.core.sequential_QMARK_(pattern__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(pattern__$1),new cljs.core.Symbol(null,"$$","$$",-1388085599,null))));
}
});
/**
 * Given a variable or segment binding form, returns the binding variable.
 * 
 *   NOTE that [[variable-name]] will not guard against incorrect inputs.
 */
pattern.syntax.variable_name = (function pattern$syntax$variable_name(pattern__$1){
if(cljs.core.simple_symbol_QMARK_(pattern__$1)){
return pattern__$1;
} else {
return cljs.core.second(pattern__$1);
}
});
/**
 * Given a REVERSE-segment name, either extracts the symbol from a pattern
 *   like `(:$$ x)`, or transforms symbols like `$$x` into `??x`.
 */
pattern.syntax.reverse_segment_name = (function pattern$syntax$reverse_segment_name(pattern__$1){
if(cljs.core.simple_symbol_QMARK_(pattern__$1)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["??",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(pattern__$1),(2))].join(''));
} else {
return cljs.core.second(pattern__$1);
}
});
/**
 * If `pattern` is a variable binding form in a pattern with restriction predicates,
 *   returns a predicate that only returns true if all of the predicates pass for
 *   its input, false otherwise.
 * 
 *   If `pattern` has no restrictions or is some other input type, returns a
 *   predicate that will always return `true`.
 */
pattern.syntax.restriction = (function pattern$syntax$restriction(pattern__$1){
var no_constraint = (function (_){
return true;
});
if(cljs.core.simple_symbol_QMARK_(pattern__$1)){
return no_constraint;
} else {
var temp__5751__auto__ = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),pattern__$1));
if(temp__5751__auto__){
var fs = temp__5751__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred,fs);
} else {
return no_constraint;
}
}
});
/**
 * Returns true if `pattern` is a form that should be included with no quoting
 *   into the returned pattern, false otherwise.
 */
pattern.syntax.unquote_QMARK_ = (function pattern$syntax$unquote_QMARK_(pattern__$1){
return ((cljs.core.sequential_QMARK_(pattern__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(pattern__$1),new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null))));
});
/**
 * Returns true if `pattern` is a sequence form that should be spliced directly
 *   into the returned pattern, false otherwise.
 */
pattern.syntax.unquote_splice_QMARK_ = (function pattern$syntax$unquote_splice_QMARK_(pattern__$1){
return ((cljs.core.sequential_QMARK_(pattern__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(pattern__$1),new cljs.core.Symbol("clojure.core","unquote-splicing","clojure.core/unquote-splicing",-552003150,null))));
});
/**
 * Given a `pattern` that responds `true` to [[unquote?]] or [[unquote-splice?]],
 *   returns the form from that pattern.
 */
pattern.syntax.unquoted_form = (function pattern$syntax$unquoted_form(pattern__$1){
return cljs.core.second(pattern__$1);
});
/**
 * Helper function for reducing over a sequence that might contain forms that need
 *   to be spliced into the resulting sequence. This is a sort of helper for a
 *   guarded `mapcat`.
 * 
 *   Takes a sequence `xs` and mapping function `f` and returns a sequence of
 *   sequences that, if concatenated together, would be identical to
 * 
 *   ```clojure
 *   (map f xs)
 *   ```
 * 
 *   Where any `x` such that `(splice? x)` returns true would have its sequential
 *   value `(f x)` spliced into the result.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (let [f (fn [x] (if (odd? x)  [x x x] x))]
 *  (splice-reduce odd? f (range 5)))
 * 
 *   ;;=> [[0] [1 1 1] [2] [3 3 3] [4]]
 *   ```
 */
pattern.syntax.splice_reduce = (function pattern$syntax$splice_reduce(splice_QMARK_,f,xs){
var vec__97590 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__97593,x){
var vec__97594 = p__97593;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97594,(0),null);
var pending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97594,(1),null);
if(cljs.core.truth_((splice_QMARK_.cljs$core$IFn$_invoke$arity$1 ? splice_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : splice_QMARK_.call(null,x)))){
if(cljs.core.empty_QMARK_(pending)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x))),cljs.core.PersistentVector.EMPTY], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(acc,pending,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x))], 0)),cljs.core.PersistentVector.EMPTY], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pending,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),xs);
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97590,(0),null);
var pending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97590,(1),null);
if(cljs.core.empty_QMARK_(pending)){
return acc;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,pending);
}
});
/**
 * Given a pattern with unquoted binding forms and, potentially, `~` and `~@`
 *   entries, returns a pattern appropriately quoted such that it can be evaluated
 *   by the Clojure reader.
 * 
 *   Changes:
 * 
 *   - `(? x) => (list '? 'x)`
 *   - any bare symbol is quoted
 *   - Any form unquoted like `~x` is left UNquoted, even in the symbol spot of `(?
 *  ~sym ...)`
 *   - Any form marked `~@[1 2 3]` is spliced in directly, EVEN in the symbol spot
 *  of `(? ~@sym ...)`
 * 
 *   These rules proceed recursively down into map, vector and sequential data
 *   structures. (Recursion only pushes down into values for map-shaped patterns.)
 */
pattern.syntax.compile_pattern = (function pattern$syntax$compile_pattern(pattern__$1){
var compile_sequential = (function pattern$syntax$compile_pattern_$_compile_sequential(xs){
var acc = pattern.syntax.splice_reduce(pattern.syntax.unquote_splice_QMARK_,pattern.syntax.compile_pattern,xs);
if(cljs.core.vector_QMARK_(xs)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,acc);
} else {
return cljs.core.cons(new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,acc));
}
});
if((pattern__$1 instanceof cljs.core.Symbol)){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,pattern__$1,null,(1),null)),(2),null));
} else {
if(((pattern.syntax.unquote_QMARK_(pattern__$1)) || (pattern.syntax.unquote_splice_QMARK_(pattern__$1)))){
return pattern.syntax.unquoted_form(pattern__$1);
} else {
if(cljs.core.sequential_QMARK_(pattern__$1)){
if(cljs.core.truth_((function (){var or__4253__auto__ = pattern.syntax.binding_QMARK_(pattern__$1);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = pattern.syntax.segment_QMARK_(pattern__$1);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return pattern.syntax.reverse_segment_QMARK_(pattern__$1);
}
}
})())){
var vec__97609 = pattern__$1;
var seq__97610 = cljs.core.seq(vec__97609);
var first__97611 = cljs.core.first(seq__97610);
var seq__97610__$1 = cljs.core.next(seq__97610);
var k = first__97611;
var first__97611__$1 = cljs.core.first(seq__97610__$1);
var seq__97610__$2 = cljs.core.next(seq__97610__$1);
var sym = first__97611__$1;
var preds = seq__97610__$2;
if(pattern.syntax.unquote_splice_QMARK_(sym)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list*","cljs.core/list*",357627358,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,pattern.syntax.unquoted_form(sym),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(preds)))),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
var sym__$1 = ((pattern.syntax.unquote_QMARK_(sym))?pattern.syntax.unquoted_form(sym):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sym__$1,null,(1),null)),preds], 0))));
}
} else {
return compile_sequential(pattern__$1);
}
} else {
if(cljs.core.map_QMARK_(pattern__$1)){
return sicmutils.util.map_vals(pattern.syntax.compile_pattern,pattern__$1);
} else {
return pattern__$1;

}
}
}
}
});

//# sourceMappingURL=pattern.syntax.js.map
