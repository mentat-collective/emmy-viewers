goog.provide('sicmutils.mechanics.routhian');
sicmutils.mechanics.routhian.Lagrangian__GT_Routhian = (function sicmutils$mechanics$routhian$Lagrangian__GT_Routhian(Lagrangian){
return (function (p__103492){
var vec__103493 = p__103492;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103493,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103493,(1),null);
var vec__103496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103493,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103496,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103496,(1),null);
var L = (function sicmutils$mechanics$routhian$Lagrangian__GT_Routhian_$_L(vy){
var G__103500 = sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
return (Lagrangian.cljs$core$IFn$_invoke$arity$1 ? Lagrangian.cljs$core$IFn$_invoke$arity$1(G__103500) : Lagrangian.call(null,G__103500));
});
var fexpr__103503 = sicmutils.mechanics.hamilton.Legendre_transform_procedure(L);
return (fexpr__103503.cljs$core$IFn$_invoke$arity$1 ? fexpr__103503.cljs$core$IFn$_invoke$arity$1(py) : fexpr__103503.call(null,py));
});
});
sicmutils.mechanics.routhian.Routh_equations = (function sicmutils$mechanics$routhian$Routh_equations(Routhian){
return (function (x,y,py){
return (function (t){
var L = (function sicmutils$mechanics$routhian$Routh_equations_$_L(p__103523){
var vec__103525 = p__103523;
var tau = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103525,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103525,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103525,(2),null);
var G__103528 = sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tau,sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q,(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tau) : y.call(null,tau))], 0)),sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v,(py.cljs$core$IFn$_invoke$arity$1 ? py.cljs$core$IFn$_invoke$arity$1(tau) : py.call(null,tau))], 0))], 0));
return (Routhian.cljs$core$IFn$_invoke$arity$1 ? Routhian.cljs$core$IFn$_invoke$arity$1(G__103528) : Routhian.call(null,G__103528));
});
var H = (function sicmutils$mechanics$routhian$Routh_equations_$_H(p__103532){
var vec__103533 = p__103532;
var tau = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103533,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103533,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103533,(2),null);
var G__103536 = sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tau,sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tau) : x.call(null,tau)),q], 0)),sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__103540 = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.calculus.derivative.D.call(null,x));
return (fexpr__103540.cljs$core$IFn$_invoke$arity$1 ? fexpr__103540.cljs$core$IFn$_invoke$arity$1(tau) : fexpr__103540.call(null,tau));
})(),p], 0))], 0));
return (Routhian.cljs$core$IFn$_invoke$arity$1 ? Routhian.cljs$core$IFn$_invoke$arity$1(G__103536) : Routhian.call(null,G__103536));
});
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__103542 = (function (){var fexpr__103543 = sicmutils.mechanics.lagrange.Lagrange_equations.cljs$core$IFn$_invoke$arity$1(L);
return (fexpr__103543.cljs$core$IFn$_invoke$arity$1 ? fexpr__103543.cljs$core$IFn$_invoke$arity$1(x) : fexpr__103543.call(null,x));
})();
return (fexpr__103542.cljs$core$IFn$_invoke$arity$1 ? fexpr__103542.cljs$core$IFn$_invoke$arity$1(t) : fexpr__103542.call(null,t));
})(),(function (){var fexpr__103544 = sicmutils.mechanics.hamilton.Hamilton_equations(H)(y,py);
return (fexpr__103544.cljs$core$IFn$_invoke$arity$1 ? fexpr__103544.cljs$core$IFn$_invoke$arity$1(t) : fexpr__103544.call(null,t));
})()], 0));
});
});
});
sicmutils.mechanics.routhian.Routhian__GT_acceleration = (function sicmutils$mechanics$routhian$Routhian__GT_acceleration(var_args){
var G__103546 = arguments.length;
switch (G__103546) {
case 1:
return sicmutils.mechanics.routhian.Routhian__GT_acceleration.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.mechanics.routhian.Routhian__GT_acceleration.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.mechanics.routhian.Routhian__GT_acceleration.cljs$core$IFn$_invoke$arity$1 = (function (R){
return (function (p__103550){
var vec__103551 = p__103550;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103551,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103551,(1),null);
var vec__103554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103551,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103554,(0),null);
var s = vec__103551;
var minus_P = (function (){var fexpr__103557 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__103557.cljs$core$IFn$_invoke$arity$1 ? fexpr__103557.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103557.call(null,R));
})();
var minus_F = (function (){var fexpr__103559 = (function (){var fexpr__103560 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(0)], 0));
return (fexpr__103560.cljs$core$IFn$_invoke$arity$1 ? fexpr__103560.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103560.call(null,R));
})();
return (fexpr__103559.cljs$core$IFn$_invoke$arity$1 ? fexpr__103559.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103559.call(null,s));
})();
var vy = (function (){var fexpr__103562 = (function (){var fexpr__103563 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__103563.cljs$core$IFn$_invoke$arity$1 ? fexpr__103563.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103563.call(null,R));
})();
return (fexpr__103562.cljs$core$IFn$_invoke$arity$1 ? fexpr__103562.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103562.call(null,s));
})();
var pyd = (function (){var fexpr__103568 = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__103569 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(1)], 0));
return (fexpr__103569.cljs$core$IFn$_invoke$arity$1 ? fexpr__103569.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103569.call(null,R));
})());
return (fexpr__103568.cljs$core$IFn$_invoke$arity$1 ? fexpr__103568.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103568.call(null,s));
})();
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__103571 = (function (){var fexpr__103572 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__103572.cljs$core$IFn$_invoke$arity$1 ? fexpr__103572.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103572.call(null,minus_P));
})();
return (fexpr__103571.cljs$core$IFn$_invoke$arity$1 ? fexpr__103571.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103571.call(null,s));
})(),vx),sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__103574 = (function (){var fexpr__103575 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
return (fexpr__103575.cljs$core$IFn$_invoke$arity$1 ? fexpr__103575.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103575.call(null,minus_P));
})();
return (fexpr__103574.cljs$core$IFn$_invoke$arity$1 ? fexpr__103574.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103574.call(null,s));
})(),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103577 = (function (){var fexpr__103578 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(0)], 0));
return (fexpr__103578.cljs$core$IFn$_invoke$arity$1 ? fexpr__103578.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103578.call(null,minus_P));
})();
return (fexpr__103577.cljs$core$IFn$_invoke$arity$1 ? fexpr__103577.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103577.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103580 = (function (){var fexpr__103581 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(1)], 0));
return (fexpr__103581.cljs$core$IFn$_invoke$arity$1 ? fexpr__103581.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103581.call(null,minus_P));
})();
return (fexpr__103580.cljs$core$IFn$_invoke$arity$1 ? fexpr__103580.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103580.call(null,s));
})(),vy),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103586 = (function (){var fexpr__103587 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__103587.cljs$core$IFn$_invoke$arity$1 ? fexpr__103587.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103587.call(null,minus_P));
})();
return (fexpr__103586.cljs$core$IFn$_invoke$arity$1 ? fexpr__103586.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103586.call(null,s));
})(),pyd)], 0))));
});
}));

(sicmutils.mechanics.routhian.Routhian__GT_acceleration.cljs$core$IFn$_invoke$arity$2 = (function (R,dissipation_fn){
return (function (p__103591){
var vec__103592 = p__103591;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103592,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103592,(1),null);
var vec__103595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103592,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103595,(0),null);
var s = vec__103592;
var minus_P = (function (){var fexpr__103598 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__103598.cljs$core$IFn$_invoke$arity$1 ? fexpr__103598.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103598.call(null,R));
})();
var minus_F = (function (){var fexpr__103603 = (function (){var fexpr__103604 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(0)], 0));
return (fexpr__103604.cljs$core$IFn$_invoke$arity$1 ? fexpr__103604.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103604.call(null,R));
})();
return (fexpr__103603.cljs$core$IFn$_invoke$arity$1 ? fexpr__103603.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103603.call(null,s));
})();
var vy = (function (){var fexpr__103609 = (function (){var fexpr__103610 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__103610.cljs$core$IFn$_invoke$arity$1 ? fexpr__103610.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103610.call(null,R));
})();
return (fexpr__103609.cljs$core$IFn$_invoke$arity$1 ? fexpr__103609.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103609.call(null,s));
})();
var L_state = sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
var minus_F0 = (function (){var fexpr__103612 = (function (){var fexpr__103613 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__103613.cljs$core$IFn$_invoke$arity$1 ? fexpr__103613.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__103613.call(null,dissipation_fn));
})();
return (fexpr__103612.cljs$core$IFn$_invoke$arity$1 ? fexpr__103612.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__103612.call(null,L_state));
})();
var minus_F1 = (function (){var fexpr__103615 = (function (){var fexpr__103616 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__103616.cljs$core$IFn$_invoke$arity$1 ? fexpr__103616.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__103616.call(null,dissipation_fn));
})();
return (fexpr__103615.cljs$core$IFn$_invoke$arity$1 ? fexpr__103615.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__103615.call(null,L_state));
})();
var pyd = sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103621 = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__103622 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(1)], 0));
return (fexpr__103622.cljs$core$IFn$_invoke$arity$1 ? fexpr__103622.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103622.call(null,R));
})());
return (fexpr__103621.cljs$core$IFn$_invoke$arity$1 ? fexpr__103621.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103621.call(null,s));
})(),minus_F1);
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__103627 = (function (){var fexpr__103628 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__103628.cljs$core$IFn$_invoke$arity$1 ? fexpr__103628.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103628.call(null,minus_P));
})();
return (fexpr__103627.cljs$core$IFn$_invoke$arity$1 ? fexpr__103627.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103627.call(null,s));
})(),vx),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__103634 = (function (){var fexpr__103635 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
return (fexpr__103635.cljs$core$IFn$_invoke$arity$1 ? fexpr__103635.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103635.call(null,minus_P));
})();
return (fexpr__103634.cljs$core$IFn$_invoke$arity$1 ? fexpr__103634.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103634.call(null,s));
})(),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103645 = (function (){var fexpr__103646 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(0)], 0));
return (fexpr__103646.cljs$core$IFn$_invoke$arity$1 ? fexpr__103646.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103646.call(null,minus_P));
})();
return (fexpr__103645.cljs$core$IFn$_invoke$arity$1 ? fexpr__103645.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103645.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103651 = (function (){var fexpr__103652 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(1)], 0));
return (fexpr__103652.cljs$core$IFn$_invoke$arity$1 ? fexpr__103652.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103652.call(null,minus_P));
})();
return (fexpr__103651.cljs$core$IFn$_invoke$arity$1 ? fexpr__103651.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103651.call(null,s));
})(),vy),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103658 = (function (){var fexpr__103659 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__103659.cljs$core$IFn$_invoke$arity$1 ? fexpr__103659.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103659.call(null,minus_P));
})();
return (fexpr__103658.cljs$core$IFn$_invoke$arity$1 ? fexpr__103658.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103658.call(null,s));
})(),pyd)], 0))),minus_F0));
});
}));

(sicmutils.mechanics.routhian.Routhian__GT_acceleration.cljs$lang$maxFixedArity = 2);

sicmutils.mechanics.routhian.Routhian__GT_state_derivative = (function sicmutils$mechanics$routhian$Routhian__GT_state_derivative(var_args){
var G__103666 = arguments.length;
switch (G__103666) {
case 1:
return sicmutils.mechanics.routhian.Routhian__GT_state_derivative.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.mechanics.routhian.Routhian__GT_state_derivative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.mechanics.routhian.Routhian__GT_state_derivative.cljs$core$IFn$_invoke$arity$1 = (function (R){
return (function (p__103671){
var vec__103676 = p__103671;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103676,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103676,(1),null);
var vec__103679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103676,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103679,(0),null);
var s = vec__103676;
var minus_P = (function (){var fexpr__103683 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__103683.cljs$core$IFn$_invoke$arity$1 ? fexpr__103683.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103683.call(null,R));
})();
var minus_F = (function (){var fexpr__103686 = (function (){var fexpr__103687 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(0)], 0));
return (fexpr__103687.cljs$core$IFn$_invoke$arity$1 ? fexpr__103687.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103687.call(null,R));
})();
return (fexpr__103686.cljs$core$IFn$_invoke$arity$1 ? fexpr__103686.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103686.call(null,s));
})();
var vy = (function (){var fexpr__103689 = (function (){var fexpr__103690 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__103690.cljs$core$IFn$_invoke$arity$1 ? fexpr__103690.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103690.call(null,R));
})();
return (fexpr__103689.cljs$core$IFn$_invoke$arity$1 ? fexpr__103689.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103689.call(null,s));
})();
var pyd = sicmutils.generic._.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__103693 = (function (){var fexpr__103694 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(1)], 0));
return (fexpr__103694.cljs$core$IFn$_invoke$arity$1 ? fexpr__103694.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103694.call(null,R));
})();
return (fexpr__103693.cljs$core$IFn$_invoke$arity$1 ? fexpr__103693.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103693.call(null,s));
})());
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0)),sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__103704 = (function (){var fexpr__103705 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__103705.cljs$core$IFn$_invoke$arity$1 ? fexpr__103705.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103705.call(null,minus_P));
})();
return (fexpr__103704.cljs$core$IFn$_invoke$arity$1 ? fexpr__103704.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103704.call(null,s));
})(),vx),sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__103711 = (function (){var fexpr__103712 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
return (fexpr__103712.cljs$core$IFn$_invoke$arity$1 ? fexpr__103712.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103712.call(null,minus_P));
})();
return (fexpr__103711.cljs$core$IFn$_invoke$arity$1 ? fexpr__103711.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103711.call(null,s));
})(),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103715 = (function (){var fexpr__103719 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(0)], 0));
return (fexpr__103719.cljs$core$IFn$_invoke$arity$1 ? fexpr__103719.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103719.call(null,minus_P));
})();
return (fexpr__103715.cljs$core$IFn$_invoke$arity$1 ? fexpr__103715.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103715.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103721 = (function (){var fexpr__103723 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(1)], 0));
return (fexpr__103723.cljs$core$IFn$_invoke$arity$1 ? fexpr__103723.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103723.call(null,minus_P));
})();
return (fexpr__103721.cljs$core$IFn$_invoke$arity$1 ? fexpr__103721.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103721.call(null,s));
})(),vy),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103728 = (function (){var fexpr__103729 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__103729.cljs$core$IFn$_invoke$arity$1 ? fexpr__103729.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103729.call(null,minus_P));
})();
return (fexpr__103728.cljs$core$IFn$_invoke$arity$1 ? fexpr__103728.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103728.call(null,s));
})(),pyd)], 0)))),pyd], 0))], 0));
});
}));

(sicmutils.mechanics.routhian.Routhian__GT_state_derivative.cljs$core$IFn$_invoke$arity$2 = (function (R,dissipation_fn){
return (function (p__103734){
var vec__103735 = p__103734;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103735,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103735,(1),null);
var vec__103738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103735,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103738,(0),null);
var s = vec__103735;
var minus_P = (function (){var fexpr__103766 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__103766.cljs$core$IFn$_invoke$arity$1 ? fexpr__103766.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103766.call(null,R));
})();
var minus_F = (function (){var fexpr__103768 = (function (){var fexpr__103769 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(0)], 0));
return (fexpr__103769.cljs$core$IFn$_invoke$arity$1 ? fexpr__103769.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103769.call(null,R));
})();
return (fexpr__103768.cljs$core$IFn$_invoke$arity$1 ? fexpr__103768.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103768.call(null,s));
})();
var vy = (function (){var fexpr__103771 = (function (){var fexpr__103772 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__103772.cljs$core$IFn$_invoke$arity$1 ? fexpr__103772.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103772.call(null,R));
})();
return (fexpr__103771.cljs$core$IFn$_invoke$arity$1 ? fexpr__103771.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103771.call(null,s));
})();
var L_state = sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
var minus_F0 = (function (){var fexpr__103774 = (function (){var fexpr__103775 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__103775.cljs$core$IFn$_invoke$arity$1 ? fexpr__103775.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__103775.call(null,dissipation_fn));
})();
return (fexpr__103774.cljs$core$IFn$_invoke$arity$1 ? fexpr__103774.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__103774.call(null,L_state));
})();
var minus_F1 = (function (){var fexpr__103777 = (function (){var fexpr__103778 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__103778.cljs$core$IFn$_invoke$arity$1 ? fexpr__103778.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__103778.call(null,dissipation_fn));
})();
return (fexpr__103777.cljs$core$IFn$_invoke$arity$1 ? fexpr__103777.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__103777.call(null,L_state));
})();
var pyd = sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103780 = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__103781 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(1)], 0));
return (fexpr__103781.cljs$core$IFn$_invoke$arity$1 ? fexpr__103781.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103781.call(null,R));
})());
return (fexpr__103780.cljs$core$IFn$_invoke$arity$1 ? fexpr__103780.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103780.call(null,s));
})(),minus_F1);
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0)),sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__103783 = (function (){var fexpr__103784 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__103784.cljs$core$IFn$_invoke$arity$1 ? fexpr__103784.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103784.call(null,minus_P));
})();
return (fexpr__103783.cljs$core$IFn$_invoke$arity$1 ? fexpr__103783.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103783.call(null,s));
})(),vx),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__103786 = (function (){var fexpr__103787 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
return (fexpr__103787.cljs$core$IFn$_invoke$arity$1 ? fexpr__103787.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103787.call(null,minus_P));
})();
return (fexpr__103786.cljs$core$IFn$_invoke$arity$1 ? fexpr__103786.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103786.call(null,s));
})(),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103789 = (function (){var fexpr__103790 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(0)], 0));
return (fexpr__103790.cljs$core$IFn$_invoke$arity$1 ? fexpr__103790.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103790.call(null,minus_P));
})();
return (fexpr__103789.cljs$core$IFn$_invoke$arity$1 ? fexpr__103789.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103789.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103792 = (function (){var fexpr__103793 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(1)], 0));
return (fexpr__103793.cljs$core$IFn$_invoke$arity$1 ? fexpr__103793.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103793.call(null,minus_P));
})();
return (fexpr__103792.cljs$core$IFn$_invoke$arity$1 ? fexpr__103792.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103792.call(null,s));
})(),vy),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103796 = (function (){var fexpr__103802 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__103802.cljs$core$IFn$_invoke$arity$1 ? fexpr__103802.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103802.call(null,minus_P));
})();
return (fexpr__103796.cljs$core$IFn$_invoke$arity$1 ? fexpr__103796.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103796.call(null,s));
})(),pyd)], 0))),minus_F0)),pyd], 0))], 0));
});
}));

(sicmutils.mechanics.routhian.Routhian__GT_state_derivative.cljs$lang$maxFixedArity = 2);

sicmutils.mechanics.routhian.Lagrangian_state__GT_Routhian_state = (function sicmutils$mechanics$routhian$Lagrangian_state__GT_Routhian_state(L){
return (function (p__103823){
var vec__103824 = p__103823;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103824,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103824,(1),null);
var vec__103827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103824,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103827,(0),null);
var s = vec__103824;
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103843 = (function (){var fexpr__103844 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__103844.cljs$core$IFn$_invoke$arity$1 ? fexpr__103844.cljs$core$IFn$_invoke$arity$1(L) : fexpr__103844.call(null,L));
})();
return (fexpr__103843.cljs$core$IFn$_invoke$arity$1 ? fexpr__103843.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103843.call(null,s));
})(),(1));
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,py], 0))], 0));
});
});
sicmutils.mechanics.routhian.Routhian_state__GT_Lagrangian_state = (function sicmutils$mechanics$routhian$Routhian_state__GT_Lagrangian_state(R){
return (function (p__103848){
var vec__103849 = p__103848;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103849,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103849,(1),null);
var vec__103852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103849,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103852,(0),null);
var s = vec__103849;
var vy = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103856 = (function (){var fexpr__103857 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__103857.cljs$core$IFn$_invoke$arity$1 ? fexpr__103857.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103857.call(null,R));
})();
return (fexpr__103856.cljs$core$IFn$_invoke$arity$1 ? fexpr__103856.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103856.call(null,s));
})(),(1));
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
});
});

//# sourceMappingURL=sicmutils.mechanics.routhian.js.map
