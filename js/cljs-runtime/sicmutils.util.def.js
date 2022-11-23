goog.provide('sicmutils.util.def');
sicmutils.util.def.lowercase_symbols = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.symbol,cljs.core.str,cljs.core.char$),cljs.core.range.cljs$core$IFn$_invoke$arity$2((97),(123)));
/**
 * returns a list of `:arglists` entries appropriate for a generic function with
 *   arities between `a` and `b` inclusive.
 */
sicmutils.util.def.arglists = (function sicmutils$util$def$arglists(a,b){
var arities = (cljs.core.truth_(b)?cljs.core.range.cljs$core$IFn$_invoke$arity$2(a,(b + (1))):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__95359_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(p1__95359_SHARP_),sicmutils.util.def.lowercase_symbols);
}),arities);
});
/**
 * Given some namespace `ns`, returns a function of some binding symbol and a form
 *   to bind. The function returns either
 * 
 *   - A form like `(def ~sym ~form)`, if `sym` is not currently bound into `ns`
 * 
 *   - If `sym` is bound already, returns a form that emits a warning and then
 *  uses `ns-unmap` and `intern` to reassign the binding.
 * 
 *   In Clojure, this behavior matches redefinitions of symbols bound in
 *   `clojure.core`. Symbols bound with `def` that are already imported from other
 *   namespaces cause an exception, hence this more careful workaround.
 * 
 *   (In Clojurescript, only forms like `(def ~sym ~form)` are emitted, since the
 *   compiler does not currently error in case 2 and already handles emitting the
 *   warning for us.)
 */
sicmutils.util.def.careful_def = (function sicmutils$util$def$careful_def(_){
return (function (sym,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0))));
});
});

//# sourceMappingURL=sicmutils.util.def.js.map
