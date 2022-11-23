goog.provide('sicmutils.mechanics.routhian');
sicmutils.mechanics.routhian.Lagrangian__GT_Routhian = (function sicmutils$mechanics$routhian$Lagrangian__GT_Routhian(Lagrangian){
return (function (p__103670){
var vec__103671 = p__103670;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103671,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103671,(1),null);
var vec__103674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103671,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103674,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103674,(1),null);
var L = (function sicmutils$mechanics$routhian$Lagrangian__GT_Routhian_$_L(vy){
var G__103678 = sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
return (Lagrangian.cljs$core$IFn$_invoke$arity$1 ? Lagrangian.cljs$core$IFn$_invoke$arity$1(G__103678) : Lagrangian.call(null,G__103678));
});
var fexpr__103679 = sicmutils.mechanics.hamilton.Legendre_transform_procedure(L);
return (fexpr__103679.cljs$core$IFn$_invoke$arity$1 ? fexpr__103679.cljs$core$IFn$_invoke$arity$1(py) : fexpr__103679.call(null,py));
});
});
sicmutils.mechanics.routhian.Routh_equations = (function sicmutils$mechanics$routhian$Routh_equations(Routhian){
return (function (x,y,py){
return (function (t){
var L = (function sicmutils$mechanics$routhian$Routh_equations_$_L(p__103691){
var vec__103692 = p__103691;
var tau = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103692,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103692,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103692,(2),null);
var G__103695 = sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tau,sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q,(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tau) : y.call(null,tau))], 0)),sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v,(py.cljs$core$IFn$_invoke$arity$1 ? py.cljs$core$IFn$_invoke$arity$1(tau) : py.call(null,tau))], 0))], 0));
return (Routhian.cljs$core$IFn$_invoke$arity$1 ? Routhian.cljs$core$IFn$_invoke$arity$1(G__103695) : Routhian.call(null,G__103695));
});
var H = (function sicmutils$mechanics$routhian$Routh_equations_$_H(p__103696){
var vec__103697 = p__103696;
var tau = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103697,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103697,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103697,(2),null);
var G__103700 = sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tau,sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tau) : x.call(null,tau)),q], 0)),sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__103701 = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.calculus.derivative.D.call(null,x));
return (fexpr__103701.cljs$core$IFn$_invoke$arity$1 ? fexpr__103701.cljs$core$IFn$_invoke$arity$1(tau) : fexpr__103701.call(null,tau));
})(),p], 0))], 0));
return (Routhian.cljs$core$IFn$_invoke$arity$1 ? Routhian.cljs$core$IFn$_invoke$arity$1(G__103700) : Routhian.call(null,G__103700));
});
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__103703 = (function (){var fexpr__103704 = sicmutils.mechanics.lagrange.Lagrange_equations.cljs$core$IFn$_invoke$arity$1(L);
return (fexpr__103704.cljs$core$IFn$_invoke$arity$1 ? fexpr__103704.cljs$core$IFn$_invoke$arity$1(x) : fexpr__103704.call(null,x));
})();
return (fexpr__103703.cljs$core$IFn$_invoke$arity$1 ? fexpr__103703.cljs$core$IFn$_invoke$arity$1(t) : fexpr__103703.call(null,t));
})(),(function (){var fexpr__103705 = sicmutils.mechanics.hamilton.Hamilton_equations(H)(y,py);
return (fexpr__103705.cljs$core$IFn$_invoke$arity$1 ? fexpr__103705.cljs$core$IFn$_invoke$arity$1(t) : fexpr__103705.call(null,t));
})()], 0));
});
});
});
sicmutils.mechanics.routhian.Routhian__GT_acceleration = (function sicmutils$mechanics$routhian$Routhian__GT_acceleration(var_args){
var G__103707 = arguments.length;
switch (G__103707) {
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
return (function (p__103708){
var vec__103709 = p__103708;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103709,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103709,(1),null);
var vec__103712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103709,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103712,(0),null);
var s = vec__103709;
var minus_P = (function (){var fexpr__103718 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__103718.cljs$core$IFn$_invoke$arity$1 ? fexpr__103718.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103718.call(null,R));
})();
var minus_F = (function (){var fexpr__103720 = (function (){var fexpr__103721 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(0)], 0));
return (fexpr__103721.cljs$core$IFn$_invoke$arity$1 ? fexpr__103721.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103721.call(null,R));
})();
return (fexpr__103720.cljs$core$IFn$_invoke$arity$1 ? fexpr__103720.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103720.call(null,s));
})();
var vy = (function (){var fexpr__103723 = (function (){var fexpr__103724 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__103724.cljs$core$IFn$_invoke$arity$1 ? fexpr__103724.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103724.call(null,R));
})();
return (fexpr__103723.cljs$core$IFn$_invoke$arity$1 ? fexpr__103723.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103723.call(null,s));
})();
var pyd = (function (){var fexpr__103726 = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__103727 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(1)], 0));
return (fexpr__103727.cljs$core$IFn$_invoke$arity$1 ? fexpr__103727.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103727.call(null,R));
})());
return (fexpr__103726.cljs$core$IFn$_invoke$arity$1 ? fexpr__103726.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103726.call(null,s));
})();
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__103729 = (function (){var fexpr__103730 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__103730.cljs$core$IFn$_invoke$arity$1 ? fexpr__103730.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103730.call(null,minus_P));
})();
return (fexpr__103729.cljs$core$IFn$_invoke$arity$1 ? fexpr__103729.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103729.call(null,s));
})(),vx),sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__103732 = (function (){var fexpr__103733 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
return (fexpr__103733.cljs$core$IFn$_invoke$arity$1 ? fexpr__103733.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103733.call(null,minus_P));
})();
return (fexpr__103732.cljs$core$IFn$_invoke$arity$1 ? fexpr__103732.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103732.call(null,s));
})(),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103735 = (function (){var fexpr__103736 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(0)], 0));
return (fexpr__103736.cljs$core$IFn$_invoke$arity$1 ? fexpr__103736.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103736.call(null,minus_P));
})();
return (fexpr__103735.cljs$core$IFn$_invoke$arity$1 ? fexpr__103735.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103735.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103738 = (function (){var fexpr__103739 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(1)], 0));
return (fexpr__103739.cljs$core$IFn$_invoke$arity$1 ? fexpr__103739.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103739.call(null,minus_P));
})();
return (fexpr__103738.cljs$core$IFn$_invoke$arity$1 ? fexpr__103738.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103738.call(null,s));
})(),vy),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103741 = (function (){var fexpr__103742 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__103742.cljs$core$IFn$_invoke$arity$1 ? fexpr__103742.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103742.call(null,minus_P));
})();
return (fexpr__103741.cljs$core$IFn$_invoke$arity$1 ? fexpr__103741.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103741.call(null,s));
})(),pyd)], 0))));
});
}));

(sicmutils.mechanics.routhian.Routhian__GT_acceleration.cljs$core$IFn$_invoke$arity$2 = (function (R,dissipation_fn){
return (function (p__103743){
var vec__103744 = p__103743;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103744,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103744,(1),null);
var vec__103747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103744,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103747,(0),null);
var s = vec__103744;
var minus_P = (function (){var fexpr__103750 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__103750.cljs$core$IFn$_invoke$arity$1 ? fexpr__103750.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103750.call(null,R));
})();
var minus_F = (function (){var fexpr__103752 = (function (){var fexpr__103753 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(0)], 0));
return (fexpr__103753.cljs$core$IFn$_invoke$arity$1 ? fexpr__103753.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103753.call(null,R));
})();
return (fexpr__103752.cljs$core$IFn$_invoke$arity$1 ? fexpr__103752.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103752.call(null,s));
})();
var vy = (function (){var fexpr__103755 = (function (){var fexpr__103756 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__103756.cljs$core$IFn$_invoke$arity$1 ? fexpr__103756.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103756.call(null,R));
})();
return (fexpr__103755.cljs$core$IFn$_invoke$arity$1 ? fexpr__103755.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103755.call(null,s));
})();
var L_state = sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
var minus_F0 = (function (){var fexpr__103758 = (function (){var fexpr__103759 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__103759.cljs$core$IFn$_invoke$arity$1 ? fexpr__103759.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__103759.call(null,dissipation_fn));
})();
return (fexpr__103758.cljs$core$IFn$_invoke$arity$1 ? fexpr__103758.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__103758.call(null,L_state));
})();
var minus_F1 = (function (){var fexpr__103761 = (function (){var fexpr__103762 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__103762.cljs$core$IFn$_invoke$arity$1 ? fexpr__103762.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__103762.call(null,dissipation_fn));
})();
return (fexpr__103761.cljs$core$IFn$_invoke$arity$1 ? fexpr__103761.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__103761.call(null,L_state));
})();
var pyd = sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103764 = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__103765 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(1)], 0));
return (fexpr__103765.cljs$core$IFn$_invoke$arity$1 ? fexpr__103765.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103765.call(null,R));
})());
return (fexpr__103764.cljs$core$IFn$_invoke$arity$1 ? fexpr__103764.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103764.call(null,s));
})(),minus_F1);
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__103767 = (function (){var fexpr__103768 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__103768.cljs$core$IFn$_invoke$arity$1 ? fexpr__103768.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103768.call(null,minus_P));
})();
return (fexpr__103767.cljs$core$IFn$_invoke$arity$1 ? fexpr__103767.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103767.call(null,s));
})(),vx),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__103770 = (function (){var fexpr__103771 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
return (fexpr__103771.cljs$core$IFn$_invoke$arity$1 ? fexpr__103771.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103771.call(null,minus_P));
})();
return (fexpr__103770.cljs$core$IFn$_invoke$arity$1 ? fexpr__103770.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103770.call(null,s));
})(),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103773 = (function (){var fexpr__103774 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(0)], 0));
return (fexpr__103774.cljs$core$IFn$_invoke$arity$1 ? fexpr__103774.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103774.call(null,minus_P));
})();
return (fexpr__103773.cljs$core$IFn$_invoke$arity$1 ? fexpr__103773.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103773.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103776 = (function (){var fexpr__103777 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(1)], 0));
return (fexpr__103777.cljs$core$IFn$_invoke$arity$1 ? fexpr__103777.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103777.call(null,minus_P));
})();
return (fexpr__103776.cljs$core$IFn$_invoke$arity$1 ? fexpr__103776.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103776.call(null,s));
})(),vy),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103779 = (function (){var fexpr__103780 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__103780.cljs$core$IFn$_invoke$arity$1 ? fexpr__103780.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103780.call(null,minus_P));
})();
return (fexpr__103779.cljs$core$IFn$_invoke$arity$1 ? fexpr__103779.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103779.call(null,s));
})(),pyd)], 0))),minus_F0));
});
}));

(sicmutils.mechanics.routhian.Routhian__GT_acceleration.cljs$lang$maxFixedArity = 2);

sicmutils.mechanics.routhian.Routhian__GT_state_derivative = (function sicmutils$mechanics$routhian$Routhian__GT_state_derivative(var_args){
var G__103782 = arguments.length;
switch (G__103782) {
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
return (function (p__103783){
var vec__103784 = p__103783;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103784,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103784,(1),null);
var vec__103787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103784,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103787,(0),null);
var s = vec__103784;
var minus_P = (function (){var fexpr__103790 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__103790.cljs$core$IFn$_invoke$arity$1 ? fexpr__103790.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103790.call(null,R));
})();
var minus_F = (function (){var fexpr__103792 = (function (){var fexpr__103793 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(0)], 0));
return (fexpr__103793.cljs$core$IFn$_invoke$arity$1 ? fexpr__103793.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103793.call(null,R));
})();
return (fexpr__103792.cljs$core$IFn$_invoke$arity$1 ? fexpr__103792.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103792.call(null,s));
})();
var vy = (function (){var fexpr__103795 = (function (){var fexpr__103796 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__103796.cljs$core$IFn$_invoke$arity$1 ? fexpr__103796.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103796.call(null,R));
})();
return (fexpr__103795.cljs$core$IFn$_invoke$arity$1 ? fexpr__103795.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103795.call(null,s));
})();
var pyd = sicmutils.generic._.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__103798 = (function (){var fexpr__103799 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(1)], 0));
return (fexpr__103799.cljs$core$IFn$_invoke$arity$1 ? fexpr__103799.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103799.call(null,R));
})();
return (fexpr__103798.cljs$core$IFn$_invoke$arity$1 ? fexpr__103798.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103798.call(null,s));
})());
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0)),sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__103801 = (function (){var fexpr__103802 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__103802.cljs$core$IFn$_invoke$arity$1 ? fexpr__103802.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103802.call(null,minus_P));
})();
return (fexpr__103801.cljs$core$IFn$_invoke$arity$1 ? fexpr__103801.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103801.call(null,s));
})(),vx),sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__103804 = (function (){var fexpr__103805 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
return (fexpr__103805.cljs$core$IFn$_invoke$arity$1 ? fexpr__103805.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103805.call(null,minus_P));
})();
return (fexpr__103804.cljs$core$IFn$_invoke$arity$1 ? fexpr__103804.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103804.call(null,s));
})(),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103807 = (function (){var fexpr__103808 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(0)], 0));
return (fexpr__103808.cljs$core$IFn$_invoke$arity$1 ? fexpr__103808.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103808.call(null,minus_P));
})();
return (fexpr__103807.cljs$core$IFn$_invoke$arity$1 ? fexpr__103807.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103807.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103810 = (function (){var fexpr__103811 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(1)], 0));
return (fexpr__103811.cljs$core$IFn$_invoke$arity$1 ? fexpr__103811.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103811.call(null,minus_P));
})();
return (fexpr__103810.cljs$core$IFn$_invoke$arity$1 ? fexpr__103810.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103810.call(null,s));
})(),vy),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103813 = (function (){var fexpr__103814 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__103814.cljs$core$IFn$_invoke$arity$1 ? fexpr__103814.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103814.call(null,minus_P));
})();
return (fexpr__103813.cljs$core$IFn$_invoke$arity$1 ? fexpr__103813.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103813.call(null,s));
})(),pyd)], 0)))),pyd], 0))], 0));
});
}));

(sicmutils.mechanics.routhian.Routhian__GT_state_derivative.cljs$core$IFn$_invoke$arity$2 = (function (R,dissipation_fn){
return (function (p__103815){
var vec__103816 = p__103815;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103816,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103816,(1),null);
var vec__103819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103816,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103819,(0),null);
var s = vec__103816;
var minus_P = (function (){var fexpr__103822 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__103822.cljs$core$IFn$_invoke$arity$1 ? fexpr__103822.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103822.call(null,R));
})();
var minus_F = (function (){var fexpr__103824 = (function (){var fexpr__103825 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(0)], 0));
return (fexpr__103825.cljs$core$IFn$_invoke$arity$1 ? fexpr__103825.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103825.call(null,R));
})();
return (fexpr__103824.cljs$core$IFn$_invoke$arity$1 ? fexpr__103824.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103824.call(null,s));
})();
var vy = (function (){var fexpr__103827 = (function (){var fexpr__103828 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__103828.cljs$core$IFn$_invoke$arity$1 ? fexpr__103828.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103828.call(null,R));
})();
return (fexpr__103827.cljs$core$IFn$_invoke$arity$1 ? fexpr__103827.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103827.call(null,s));
})();
var L_state = sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
var minus_F0 = (function (){var fexpr__103830 = (function (){var fexpr__103831 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__103831.cljs$core$IFn$_invoke$arity$1 ? fexpr__103831.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__103831.call(null,dissipation_fn));
})();
return (fexpr__103830.cljs$core$IFn$_invoke$arity$1 ? fexpr__103830.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__103830.call(null,L_state));
})();
var minus_F1 = (function (){var fexpr__103833 = (function (){var fexpr__103834 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__103834.cljs$core$IFn$_invoke$arity$1 ? fexpr__103834.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__103834.call(null,dissipation_fn));
})();
return (fexpr__103833.cljs$core$IFn$_invoke$arity$1 ? fexpr__103833.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__103833.call(null,L_state));
})();
var pyd = sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103836 = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__103837 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(1)], 0));
return (fexpr__103837.cljs$core$IFn$_invoke$arity$1 ? fexpr__103837.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103837.call(null,R));
})());
return (fexpr__103836.cljs$core$IFn$_invoke$arity$1 ? fexpr__103836.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103836.call(null,s));
})(),minus_F1);
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0)),sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__103839 = (function (){var fexpr__103840 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__103840.cljs$core$IFn$_invoke$arity$1 ? fexpr__103840.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103840.call(null,minus_P));
})();
return (fexpr__103839.cljs$core$IFn$_invoke$arity$1 ? fexpr__103839.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103839.call(null,s));
})(),vx),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__103842 = (function (){var fexpr__103843 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
return (fexpr__103843.cljs$core$IFn$_invoke$arity$1 ? fexpr__103843.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103843.call(null,minus_P));
})();
return (fexpr__103842.cljs$core$IFn$_invoke$arity$1 ? fexpr__103842.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103842.call(null,s));
})(),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103845 = (function (){var fexpr__103846 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(0)], 0));
return (fexpr__103846.cljs$core$IFn$_invoke$arity$1 ? fexpr__103846.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103846.call(null,minus_P));
})();
return (fexpr__103845.cljs$core$IFn$_invoke$arity$1 ? fexpr__103845.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103845.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103848 = (function (){var fexpr__103849 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(1)], 0));
return (fexpr__103849.cljs$core$IFn$_invoke$arity$1 ? fexpr__103849.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103849.call(null,minus_P));
})();
return (fexpr__103848.cljs$core$IFn$_invoke$arity$1 ? fexpr__103848.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103848.call(null,s));
})(),vy),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103851 = (function (){var fexpr__103852 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__103852.cljs$core$IFn$_invoke$arity$1 ? fexpr__103852.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__103852.call(null,minus_P));
})();
return (fexpr__103851.cljs$core$IFn$_invoke$arity$1 ? fexpr__103851.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103851.call(null,s));
})(),pyd)], 0))),minus_F0)),pyd], 0))], 0));
});
}));

(sicmutils.mechanics.routhian.Routhian__GT_state_derivative.cljs$lang$maxFixedArity = 2);

sicmutils.mechanics.routhian.Lagrangian_state__GT_Routhian_state = (function sicmutils$mechanics$routhian$Lagrangian_state__GT_Routhian_state(L){
return (function (p__103853){
var vec__103854 = p__103853;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103854,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103854,(1),null);
var vec__103857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103854,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103857,(0),null);
var s = vec__103854;
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103861 = (function (){var fexpr__103862 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__103862.cljs$core$IFn$_invoke$arity$1 ? fexpr__103862.cljs$core$IFn$_invoke$arity$1(L) : fexpr__103862.call(null,L));
})();
return (fexpr__103861.cljs$core$IFn$_invoke$arity$1 ? fexpr__103861.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103861.call(null,s));
})(),(1));
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,py], 0))], 0));
});
});
sicmutils.mechanics.routhian.Routhian_state__GT_Lagrangian_state = (function sicmutils$mechanics$routhian$Routhian_state__GT_Lagrangian_state(R){
return (function (p__103863){
var vec__103864 = p__103863;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103864,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103864,(1),null);
var vec__103867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103864,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103867,(0),null);
var s = vec__103864;
var vy = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__103871 = (function (){var fexpr__103872 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__103872.cljs$core$IFn$_invoke$arity$1 ? fexpr__103872.cljs$core$IFn$_invoke$arity$1(R) : fexpr__103872.call(null,R));
})();
return (fexpr__103871.cljs$core$IFn$_invoke$arity$1 ? fexpr__103871.cljs$core$IFn$_invoke$arity$1(s) : fexpr__103871.call(null,s));
})(),(1));
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
});
});

//# sourceMappingURL=sicmutils.mechanics.routhian.js.map
