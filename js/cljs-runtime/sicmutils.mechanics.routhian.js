goog.provide('sicmutils.mechanics.routhian');
sicmutils.mechanics.routhian.Lagrangian__GT_Routhian = (function sicmutils$mechanics$routhian$Lagrangian__GT_Routhian(Lagrangian){
return (function (p__82778){
var vec__82779 = p__82778;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82779,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82779,(1),null);
var vec__82782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82779,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82782,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82782,(1),null);
var L = (function sicmutils$mechanics$routhian$Lagrangian__GT_Routhian_$_L(vy){
var G__82786 = sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
return (Lagrangian.cljs$core$IFn$_invoke$arity$1 ? Lagrangian.cljs$core$IFn$_invoke$arity$1(G__82786) : Lagrangian.call(null,G__82786));
});
var fexpr__82787 = sicmutils.mechanics.hamilton.Legendre_transform_procedure(L);
return (fexpr__82787.cljs$core$IFn$_invoke$arity$1 ? fexpr__82787.cljs$core$IFn$_invoke$arity$1(py) : fexpr__82787.call(null,py));
});
});
sicmutils.mechanics.routhian.Routh_equations = (function sicmutils$mechanics$routhian$Routh_equations(Routhian){
return (function (x,y,py){
return (function (t){
var L = (function sicmutils$mechanics$routhian$Routh_equations_$_L(p__82799){
var vec__82800 = p__82799;
var tau = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82800,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82800,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82800,(2),null);
var G__82803 = sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tau,sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q,(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tau) : y.call(null,tau))], 0)),sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v,(py.cljs$core$IFn$_invoke$arity$1 ? py.cljs$core$IFn$_invoke$arity$1(tau) : py.call(null,tau))], 0))], 0));
return (Routhian.cljs$core$IFn$_invoke$arity$1 ? Routhian.cljs$core$IFn$_invoke$arity$1(G__82803) : Routhian.call(null,G__82803));
});
var H = (function sicmutils$mechanics$routhian$Routh_equations_$_H(p__82804){
var vec__82805 = p__82804;
var tau = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82805,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82805,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82805,(2),null);
var G__82808 = sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tau,sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tau) : x.call(null,tau)),q], 0)),sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__82809 = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(x) : sicmutils.calculus.derivative.D.call(null,x));
return (fexpr__82809.cljs$core$IFn$_invoke$arity$1 ? fexpr__82809.cljs$core$IFn$_invoke$arity$1(tau) : fexpr__82809.call(null,tau));
})(),p], 0))], 0));
return (Routhian.cljs$core$IFn$_invoke$arity$1 ? Routhian.cljs$core$IFn$_invoke$arity$1(G__82808) : Routhian.call(null,G__82808));
});
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__82811 = (function (){var fexpr__82812 = sicmutils.mechanics.lagrange.Lagrange_equations.cljs$core$IFn$_invoke$arity$1(L);
return (fexpr__82812.cljs$core$IFn$_invoke$arity$1 ? fexpr__82812.cljs$core$IFn$_invoke$arity$1(x) : fexpr__82812.call(null,x));
})();
return (fexpr__82811.cljs$core$IFn$_invoke$arity$1 ? fexpr__82811.cljs$core$IFn$_invoke$arity$1(t) : fexpr__82811.call(null,t));
})(),(function (){var fexpr__82813 = sicmutils.mechanics.hamilton.Hamilton_equations(H)(y,py);
return (fexpr__82813.cljs$core$IFn$_invoke$arity$1 ? fexpr__82813.cljs$core$IFn$_invoke$arity$1(t) : fexpr__82813.call(null,t));
})()], 0));
});
});
});
sicmutils.mechanics.routhian.Routhian__GT_acceleration = (function sicmutils$mechanics$routhian$Routhian__GT_acceleration(var_args){
var G__82815 = arguments.length;
switch (G__82815) {
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
return (function (p__82816){
var vec__82817 = p__82816;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82817,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82817,(1),null);
var vec__82820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82817,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82820,(0),null);
var s = vec__82817;
var minus_P = (function (){var fexpr__82823 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__82823.cljs$core$IFn$_invoke$arity$1 ? fexpr__82823.cljs$core$IFn$_invoke$arity$1(R) : fexpr__82823.call(null,R));
})();
var minus_F = (function (){var fexpr__82825 = (function (){var fexpr__82826 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(0)], 0));
return (fexpr__82826.cljs$core$IFn$_invoke$arity$1 ? fexpr__82826.cljs$core$IFn$_invoke$arity$1(R) : fexpr__82826.call(null,R));
})();
return (fexpr__82825.cljs$core$IFn$_invoke$arity$1 ? fexpr__82825.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82825.call(null,s));
})();
var vy = (function (){var fexpr__82828 = (function (){var fexpr__82829 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__82829.cljs$core$IFn$_invoke$arity$1 ? fexpr__82829.cljs$core$IFn$_invoke$arity$1(R) : fexpr__82829.call(null,R));
})();
return (fexpr__82828.cljs$core$IFn$_invoke$arity$1 ? fexpr__82828.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82828.call(null,s));
})();
var pyd = (function (){var fexpr__82831 = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__82832 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(1)], 0));
return (fexpr__82832.cljs$core$IFn$_invoke$arity$1 ? fexpr__82832.cljs$core$IFn$_invoke$arity$1(R) : fexpr__82832.call(null,R));
})());
return (fexpr__82831.cljs$core$IFn$_invoke$arity$1 ? fexpr__82831.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82831.call(null,s));
})();
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__82834 = (function (){var fexpr__82835 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__82835.cljs$core$IFn$_invoke$arity$1 ? fexpr__82835.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__82835.call(null,minus_P));
})();
return (fexpr__82834.cljs$core$IFn$_invoke$arity$1 ? fexpr__82834.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82834.call(null,s));
})(),vx),sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__82837 = (function (){var fexpr__82838 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
return (fexpr__82838.cljs$core$IFn$_invoke$arity$1 ? fexpr__82838.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__82838.call(null,minus_P));
})();
return (fexpr__82837.cljs$core$IFn$_invoke$arity$1 ? fexpr__82837.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82837.call(null,s));
})(),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__82840 = (function (){var fexpr__82841 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(0)], 0));
return (fexpr__82841.cljs$core$IFn$_invoke$arity$1 ? fexpr__82841.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__82841.call(null,minus_P));
})();
return (fexpr__82840.cljs$core$IFn$_invoke$arity$1 ? fexpr__82840.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82840.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__82843 = (function (){var fexpr__82844 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(1)], 0));
return (fexpr__82844.cljs$core$IFn$_invoke$arity$1 ? fexpr__82844.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__82844.call(null,minus_P));
})();
return (fexpr__82843.cljs$core$IFn$_invoke$arity$1 ? fexpr__82843.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82843.call(null,s));
})(),vy),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__82846 = (function (){var fexpr__82847 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__82847.cljs$core$IFn$_invoke$arity$1 ? fexpr__82847.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__82847.call(null,minus_P));
})();
return (fexpr__82846.cljs$core$IFn$_invoke$arity$1 ? fexpr__82846.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82846.call(null,s));
})(),pyd)], 0))));
});
}));

(sicmutils.mechanics.routhian.Routhian__GT_acceleration.cljs$core$IFn$_invoke$arity$2 = (function (R,dissipation_fn){
return (function (p__82848){
var vec__82849 = p__82848;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82849,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82849,(1),null);
var vec__82852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82849,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82852,(0),null);
var s = vec__82849;
var minus_P = (function (){var fexpr__82855 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__82855.cljs$core$IFn$_invoke$arity$1 ? fexpr__82855.cljs$core$IFn$_invoke$arity$1(R) : fexpr__82855.call(null,R));
})();
var minus_F = (function (){var fexpr__82857 = (function (){var fexpr__82858 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(0)], 0));
return (fexpr__82858.cljs$core$IFn$_invoke$arity$1 ? fexpr__82858.cljs$core$IFn$_invoke$arity$1(R) : fexpr__82858.call(null,R));
})();
return (fexpr__82857.cljs$core$IFn$_invoke$arity$1 ? fexpr__82857.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82857.call(null,s));
})();
var vy = (function (){var fexpr__82860 = (function (){var fexpr__82861 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__82861.cljs$core$IFn$_invoke$arity$1 ? fexpr__82861.cljs$core$IFn$_invoke$arity$1(R) : fexpr__82861.call(null,R));
})();
return (fexpr__82860.cljs$core$IFn$_invoke$arity$1 ? fexpr__82860.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82860.call(null,s));
})();
var L_state = sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
var minus_F0 = (function (){var fexpr__82863 = (function (){var fexpr__82864 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__82864.cljs$core$IFn$_invoke$arity$1 ? fexpr__82864.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__82864.call(null,dissipation_fn));
})();
return (fexpr__82863.cljs$core$IFn$_invoke$arity$1 ? fexpr__82863.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__82863.call(null,L_state));
})();
var minus_F1 = (function (){var fexpr__82866 = (function (){var fexpr__82867 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__82867.cljs$core$IFn$_invoke$arity$1 ? fexpr__82867.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__82867.call(null,dissipation_fn));
})();
return (fexpr__82866.cljs$core$IFn$_invoke$arity$1 ? fexpr__82866.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__82866.call(null,L_state));
})();
var pyd = sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__82869 = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__82870 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(1)], 0));
return (fexpr__82870.cljs$core$IFn$_invoke$arity$1 ? fexpr__82870.cljs$core$IFn$_invoke$arity$1(R) : fexpr__82870.call(null,R));
})());
return (fexpr__82869.cljs$core$IFn$_invoke$arity$1 ? fexpr__82869.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82869.call(null,s));
})(),minus_F1);
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__82872 = (function (){var fexpr__82873 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__82873.cljs$core$IFn$_invoke$arity$1 ? fexpr__82873.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__82873.call(null,minus_P));
})();
return (fexpr__82872.cljs$core$IFn$_invoke$arity$1 ? fexpr__82872.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82872.call(null,s));
})(),vx),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__82875 = (function (){var fexpr__82876 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
return (fexpr__82876.cljs$core$IFn$_invoke$arity$1 ? fexpr__82876.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__82876.call(null,minus_P));
})();
return (fexpr__82875.cljs$core$IFn$_invoke$arity$1 ? fexpr__82875.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82875.call(null,s));
})(),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__82878 = (function (){var fexpr__82879 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(0)], 0));
return (fexpr__82879.cljs$core$IFn$_invoke$arity$1 ? fexpr__82879.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__82879.call(null,minus_P));
})();
return (fexpr__82878.cljs$core$IFn$_invoke$arity$1 ? fexpr__82878.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82878.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__82881 = (function (){var fexpr__82882 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(1)], 0));
return (fexpr__82882.cljs$core$IFn$_invoke$arity$1 ? fexpr__82882.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__82882.call(null,minus_P));
})();
return (fexpr__82881.cljs$core$IFn$_invoke$arity$1 ? fexpr__82881.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82881.call(null,s));
})(),vy),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__82884 = (function (){var fexpr__82885 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__82885.cljs$core$IFn$_invoke$arity$1 ? fexpr__82885.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__82885.call(null,minus_P));
})();
return (fexpr__82884.cljs$core$IFn$_invoke$arity$1 ? fexpr__82884.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82884.call(null,s));
})(),pyd)], 0))),minus_F0));
});
}));

(sicmutils.mechanics.routhian.Routhian__GT_acceleration.cljs$lang$maxFixedArity = 2);

sicmutils.mechanics.routhian.Routhian__GT_state_derivative = (function sicmutils$mechanics$routhian$Routhian__GT_state_derivative(var_args){
var G__82887 = arguments.length;
switch (G__82887) {
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
return (function (p__82888){
var vec__82889 = p__82888;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82889,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82889,(1),null);
var vec__82892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82889,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82892,(0),null);
var s = vec__82889;
var minus_P = (function (){var fexpr__82895 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__82895.cljs$core$IFn$_invoke$arity$1 ? fexpr__82895.cljs$core$IFn$_invoke$arity$1(R) : fexpr__82895.call(null,R));
})();
var minus_F = (function (){var fexpr__82897 = (function (){var fexpr__82898 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(0)], 0));
return (fexpr__82898.cljs$core$IFn$_invoke$arity$1 ? fexpr__82898.cljs$core$IFn$_invoke$arity$1(R) : fexpr__82898.call(null,R));
})();
return (fexpr__82897.cljs$core$IFn$_invoke$arity$1 ? fexpr__82897.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82897.call(null,s));
})();
var vy = (function (){var fexpr__82900 = (function (){var fexpr__82901 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__82901.cljs$core$IFn$_invoke$arity$1 ? fexpr__82901.cljs$core$IFn$_invoke$arity$1(R) : fexpr__82901.call(null,R));
})();
return (fexpr__82900.cljs$core$IFn$_invoke$arity$1 ? fexpr__82900.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82900.call(null,s));
})();
var pyd = sicmutils.generic._.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__82903 = (function (){var fexpr__82904 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(1)], 0));
return (fexpr__82904.cljs$core$IFn$_invoke$arity$1 ? fexpr__82904.cljs$core$IFn$_invoke$arity$1(R) : fexpr__82904.call(null,R));
})();
return (fexpr__82903.cljs$core$IFn$_invoke$arity$1 ? fexpr__82903.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82903.call(null,s));
})());
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0)),sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__82906 = (function (){var fexpr__82907 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__82907.cljs$core$IFn$_invoke$arity$1 ? fexpr__82907.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__82907.call(null,minus_P));
})();
return (fexpr__82906.cljs$core$IFn$_invoke$arity$1 ? fexpr__82906.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82906.call(null,s));
})(),vx),sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__82909 = (function (){var fexpr__82910 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
return (fexpr__82910.cljs$core$IFn$_invoke$arity$1 ? fexpr__82910.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__82910.call(null,minus_P));
})();
return (fexpr__82909.cljs$core$IFn$_invoke$arity$1 ? fexpr__82909.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82909.call(null,s));
})(),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__82912 = (function (){var fexpr__82913 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(0)], 0));
return (fexpr__82913.cljs$core$IFn$_invoke$arity$1 ? fexpr__82913.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__82913.call(null,minus_P));
})();
return (fexpr__82912.cljs$core$IFn$_invoke$arity$1 ? fexpr__82912.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82912.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__82915 = (function (){var fexpr__82916 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(1)], 0));
return (fexpr__82916.cljs$core$IFn$_invoke$arity$1 ? fexpr__82916.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__82916.call(null,minus_P));
})();
return (fexpr__82915.cljs$core$IFn$_invoke$arity$1 ? fexpr__82915.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82915.call(null,s));
})(),vy),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__82918 = (function (){var fexpr__82919 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__82919.cljs$core$IFn$_invoke$arity$1 ? fexpr__82919.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__82919.call(null,minus_P));
})();
return (fexpr__82918.cljs$core$IFn$_invoke$arity$1 ? fexpr__82918.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82918.call(null,s));
})(),pyd)], 0)))),pyd], 0))], 0));
});
}));

(sicmutils.mechanics.routhian.Routhian__GT_state_derivative.cljs$core$IFn$_invoke$arity$2 = (function (R,dissipation_fn){
return (function (p__82920){
var vec__82921 = p__82920;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82921,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82921,(1),null);
var vec__82924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82921,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82924,(0),null);
var s = vec__82921;
var minus_P = (function (){var fexpr__82927 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__82927.cljs$core$IFn$_invoke$arity$1 ? fexpr__82927.cljs$core$IFn$_invoke$arity$1(R) : fexpr__82927.call(null,R));
})();
var minus_F = (function (){var fexpr__82929 = (function (){var fexpr__82930 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(0)], 0));
return (fexpr__82930.cljs$core$IFn$_invoke$arity$1 ? fexpr__82930.cljs$core$IFn$_invoke$arity$1(R) : fexpr__82930.call(null,R));
})();
return (fexpr__82929.cljs$core$IFn$_invoke$arity$1 ? fexpr__82929.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82929.call(null,s));
})();
var vy = (function (){var fexpr__82932 = (function (){var fexpr__82933 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__82933.cljs$core$IFn$_invoke$arity$1 ? fexpr__82933.cljs$core$IFn$_invoke$arity$1(R) : fexpr__82933.call(null,R));
})();
return (fexpr__82932.cljs$core$IFn$_invoke$arity$1 ? fexpr__82932.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82932.call(null,s));
})();
var L_state = sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
var minus_F0 = (function (){var fexpr__82935 = (function (){var fexpr__82936 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__82936.cljs$core$IFn$_invoke$arity$1 ? fexpr__82936.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__82936.call(null,dissipation_fn));
})();
return (fexpr__82935.cljs$core$IFn$_invoke$arity$1 ? fexpr__82935.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__82935.call(null,L_state));
})();
var minus_F1 = (function (){var fexpr__82938 = (function (){var fexpr__82939 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__82939.cljs$core$IFn$_invoke$arity$1 ? fexpr__82939.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__82939.call(null,dissipation_fn));
})();
return (fexpr__82938.cljs$core$IFn$_invoke$arity$1 ? fexpr__82938.cljs$core$IFn$_invoke$arity$1(L_state) : fexpr__82938.call(null,L_state));
})();
var pyd = sicmutils.generic._.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__82941 = sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((-1),(function (){var fexpr__82942 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(1)], 0));
return (fexpr__82942.cljs$core$IFn$_invoke$arity$1 ? fexpr__82942.cljs$core$IFn$_invoke$arity$1(R) : fexpr__82942.call(null,R));
})());
return (fexpr__82941.cljs$core$IFn$_invoke$arity$1 ? fexpr__82941.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82941.call(null,s));
})(),minus_F1);
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0)),sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.matrix.s_COLON_inverse.cljs$core$IFn$_invoke$arity$3(vx,(function (){var fexpr__82944 = (function (){var fexpr__82945 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(0)], 0));
return (fexpr__82945.cljs$core$IFn$_invoke$arity$1 ? fexpr__82945.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__82945.call(null,minus_P));
})();
return (fexpr__82944.cljs$core$IFn$_invoke$arity$1 ? fexpr__82944.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82944.call(null,s));
})(),vx),sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(minus_F,sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__82947 = (function (){var fexpr__82948 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
return (fexpr__82948.cljs$core$IFn$_invoke$arity$1 ? fexpr__82948.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__82948.call(null,minus_P));
})();
return (fexpr__82947.cljs$core$IFn$_invoke$arity$1 ? fexpr__82947.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82947.call(null,s));
})(),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__82950 = (function (){var fexpr__82951 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(0)], 0));
return (fexpr__82951.cljs$core$IFn$_invoke$arity$1 ? fexpr__82951.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__82951.call(null,minus_P));
})();
return (fexpr__82950.cljs$core$IFn$_invoke$arity$1 ? fexpr__82950.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82950.call(null,s));
})(),vx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__82953 = (function (){var fexpr__82954 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),(1)], 0));
return (fexpr__82954.cljs$core$IFn$_invoke$arity$1 ? fexpr__82954.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__82954.call(null,minus_P));
})();
return (fexpr__82953.cljs$core$IFn$_invoke$arity$1 ? fexpr__82953.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82953.call(null,s));
})(),vy),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__82956 = (function (){var fexpr__82957 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),(1)], 0));
return (fexpr__82957.cljs$core$IFn$_invoke$arity$1 ? fexpr__82957.cljs$core$IFn$_invoke$arity$1(minus_P) : fexpr__82957.call(null,minus_P));
})();
return (fexpr__82956.cljs$core$IFn$_invoke$arity$1 ? fexpr__82956.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82956.call(null,s));
})(),pyd)], 0))),minus_F0)),pyd], 0))], 0));
});
}));

(sicmutils.mechanics.routhian.Routhian__GT_state_derivative.cljs$lang$maxFixedArity = 2);

sicmutils.mechanics.routhian.Lagrangian_state__GT_Routhian_state = (function sicmutils$mechanics$routhian$Lagrangian_state__GT_Routhian_state(L){
return (function (p__82958){
var vec__82959 = p__82958;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82959,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82959,(1),null);
var vec__82962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82959,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82962,(0),null);
var s = vec__82959;
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__82966 = (function (){var fexpr__82967 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__82967.cljs$core$IFn$_invoke$arity$1 ? fexpr__82967.cljs$core$IFn$_invoke$arity$1(L) : fexpr__82967.call(null,L));
})();
return (fexpr__82966.cljs$core$IFn$_invoke$arity$1 ? fexpr__82966.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82966.call(null,s));
})(),(1));
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,py], 0))], 0));
});
});
sicmutils.mechanics.routhian.Routhian_state__GT_Lagrangian_state = (function sicmutils$mechanics$routhian$Routhian_state__GT_Lagrangian_state(R){
return (function (p__82968){
var vec__82969 = p__82968;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82969,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82969,(1),null);
var vec__82972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82969,(2),null);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82972,(0),null);
var s = vec__82969;
var vy = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__82976 = (function (){var fexpr__82977 = sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
return (fexpr__82977.cljs$core$IFn$_invoke$arity$1 ? fexpr__82977.cljs$core$IFn$_invoke$arity$1(R) : fexpr__82977.call(null,R));
})();
return (fexpr__82976.cljs$core$IFn$_invoke$arity$1 ? fexpr__82976.cljs$core$IFn$_invoke$arity$1(s) : fexpr__82976.call(null,s));
})(),(1));
return sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,sicmutils.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vx,vy], 0))], 0));
});
});

//# sourceMappingURL=sicmutils.mechanics.routhian.js.map
