goog.provide('sicmutils.mechanics.noether');
sicmutils.mechanics.noether.Noether_integral = (function sicmutils$mechanics$noether$Noether_integral(L,F_tilde){
var min_arity = cljs.core.second(sicmutils.function$.arity(F_tilde));
var zeros = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(min_arity,(0));
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__102906 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__102906.cljs$core$IFn$_invoke$arity$1 ? fexpr__102906.cljs$core$IFn$_invoke$arity$1(L) : fexpr__102906.call(null,L));
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$2((sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(F_tilde) : sicmutils.calculus.derivative.D.call(null,F_tilde)),zeros));
});

//# sourceMappingURL=sicmutils.mechanics.noether.js.map
