goog.provide('sicmutils.numerical.quadrature.infinite');
/**
 * Populates the supplied `opts` dictionary with defaults required by
 *   `evaluate-infinite-integral`.
 */
sicmutils.numerical.quadrature.infinite.fill_defaults = (function sicmutils$numerical$quadrature$infinite$fill_defaults(opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"infinite-breakpoint","infinite-breakpoint",1403428770),(1)], null),opts], 0));
});
/**
 * Accepts:
 * 
 *   - An `integrator` (function of `f`, `a`, `b` and `opts`)
 *   - `a` and `b`, the endpoints of an integration interval, and
 *   - (optionally) `opts`, a dict of integrator-configuring options
 * 
 *   And returns a new integrator that's able to handle infinite endpoints. (If you
 *   don't specify `##-Inf` or `##Inf`, the returned integrator will fall through
 *   to the original `integrator` implementation.)
 * 
 *   All `opts` will be passed through to the supplied `integrator`.
 * 
 *   ## Optional arguments relevant to `improper`:
 * 
 *   `:infinite-breakpoint`: If either `a` or `b` is equal to `##Inf` or `##-Inf`,
 *   this function will internally perform a change of variables on the regions
 *   from:
 * 
 *   ```
 *   (:infinite-breakpoint opts) => ##Inf
 *   ```
 * 
 *   or
 * 
 *   ```
 *   ##-Inf => (- (:infinite-breakpoint opts))
 *   ```
 * 
 *   using $u(t) = {1 \over t}$, as described in the `infinitize` method of
 *   `substitute.cljc`. This has the effect of mapping the infinite endpoint to an
 *   open interval endpoint of 0.
 * 
 *   Where should you choose the breakpoint? According to Press in Numerical
 *   Recipes, section 4.4: "At a sufficiently large positive value so that the
 *   function funk is at least beginning to approach its asymptotic decrease to
 *   zero value at infinity."
 * 
 *   References:
 * 
 *   - Press, Numerical Recipes (p138), [Section 4.4](http://phys.uri.edu/nigh/NumRec/bookfpdf/f4-4.pdf)
 */
sicmutils.numerical.quadrature.infinite.improper = (function sicmutils$numerical$quadrature$infinite$improper(integrator){
return (function() {
var sicmutils$numerical$quadrature$infinite$improper_$_rec = null;
var sicmutils$numerical$quadrature$infinite$improper_$_rec__3 = (function (f,a,b){
return sicmutils$numerical$quadrature$infinite$improper_$_rec.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.PersistentArrayMap.EMPTY);
});
var sicmutils$numerical$quadrature$infinite$improper_$_rec__4 = (function (f,a,b,opts){
var map__90383 = sicmutils.numerical.quadrature.infinite.fill_defaults(opts);
var map__90383__$1 = cljs.core.__destructure_map(map__90383);
var opts__$1 = map__90383__$1;
var infinite_breakpoint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90383__$1,new cljs.core.Keyword(null,"infinite-breakpoint","infinite-breakpoint",1403428770));
var call = (function (integrate,l,r,interval){
var m = sicmutils.numerical.quadrature.common.with_interval(opts__$1,interval);
var result = (integrate.cljs$core$IFn$_invoke$arity$4 ? integrate.cljs$core$IFn$_invoke$arity$4(f,l,r,m) : integrate.call(null,f,l,r,m));
return new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result);
});
var ab_interval = sicmutils.numerical.quadrature.common.interval(opts__$1);
var integrate = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(call,integrator);
var inf_integrate = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(call,sicmutils.numerical.quadrature.substitute.infinitize(integrator));
var r_break = Math.abs(infinite_breakpoint);
var l_break = (- r_break);
var ocr_90387 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
try{if(((cljs.core.vector_QMARK_(ocr_90387)) && ((cljs.core.count(ocr_90387) === 2)))){
try{var ocr_90387_0__90394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_90387,(0));
if((ocr_90387_0__90394 === -Infinity)){
try{var ocr_90387_1__90395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_90387,(1));
if((ocr_90387_1__90395 === -Infinity)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),true,new cljs.core.Keyword(null,"terms-checked","terms-checked",1046419519),(0),new cljs.core.Keyword(null,"result","result",1415092211),0.0], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e90411){if((e90411 instanceof Error)){
var e__79159__auto__ = e90411;
if((e__79159__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__79159__auto__;
}
} else {
throw e90411;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e90397){if((e90397 instanceof Error)){
var e__79159__auto__ = e90397;
if((e__79159__auto__ === cljs.core.match.backtrack)){
try{var ocr_90387_0__90394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_90387,(0));
if((ocr_90387_0__90394 === Infinity)){
try{var ocr_90387_1__90395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_90387,(1));
if((ocr_90387_1__90395 === Infinity)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),true,new cljs.core.Keyword(null,"terms-checked","terms-checked",1046419519),(0),new cljs.core.Keyword(null,"result","result",1415092211),0.0], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e90409){if((e90409 instanceof Error)){
var e__79159__auto____$1 = e90409;
if((e__79159__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__79159__auto____$1;
}
} else {
throw e90409;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e90398){if((e90398 instanceof Error)){
var e__79159__auto____$1 = e90398;
if((e__79159__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_90387_0__90394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_90387,(0));
if((ocr_90387_0__90394 === -Infinity)){
try{var ocr_90387_1__90395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_90387,(1));
if((ocr_90387_1__90395 === -Infinity)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(sicmutils$numerical$quadrature$infinite$improper_$_rec.cljs$core$IFn$_invoke$arity$4(f,b,a,opts__$1),new cljs.core.Keyword(null,"result","result",1415092211),cljs.core._);
} else {
throw cljs.core.match.backtrack;

}
}catch (e90407){if((e90407 instanceof Error)){
var e__79159__auto____$2 = e90407;
if((e__79159__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__79159__auto____$2;
}
} else {
throw e90407;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e90399){if((e90399 instanceof Error)){
var e__79159__auto____$2 = e90399;
if((e__79159__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_90387_0__90394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_90387,(0));
if((ocr_90387_0__90394 === Infinity)){
try{var ocr_90387_1__90395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_90387,(1));
if((ocr_90387_1__90395 === Infinity)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(sicmutils$numerical$quadrature$infinite$improper_$_rec.cljs$core$IFn$_invoke$arity$4(f,b,a,opts__$1),new cljs.core.Keyword(null,"result","result",1415092211),cljs.core._);
} else {
throw cljs.core.match.backtrack;

}
}catch (e90405){if((e90405 instanceof Error)){
var e__79159__auto____$3 = e90405;
if((e__79159__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__79159__auto____$3;
}
} else {
throw e90405;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e90400){if((e90400 instanceof Error)){
var e__79159__auto____$3 = e90400;
if((e__79159__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_90387_0__90394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_90387,(0));
if((ocr_90387_0__90394 === -Infinity)){
try{var ocr_90387_1__90395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_90387,(1));
if((ocr_90387_1__90395 === Infinity)){
var _inf__GT_l = inf_integrate(a,l_break,sicmutils.numerical.quadrature.common.open_closed);
var l__GT_r = integrate(l_break,r_break,sicmutils.numerical.quadrature.common.closed);
var r__GT__PLUS_inf = inf_integrate(r_break,b,sicmutils.numerical.quadrature.common.closed_open);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),true,new cljs.core.Keyword(null,"result","result",1415092211),((_inf__GT_l + l__GT_r) + r__GT__PLUS_inf)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e90403){if((e90403 instanceof Error)){
var e__79159__auto____$4 = e90403;
if((e__79159__auto____$4 === cljs.core.match.backtrack)){
if((b <= l_break)){
return inf_integrate(a,b,ab_interval);
} else {
var _inf__GT_l = inf_integrate(a,l_break,sicmutils.numerical.quadrature.common.open_closed);
var l__GT_b = integrate(l_break,b,sicmutils.numerical.quadrature.common.close_l(ab_interval));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),true,new cljs.core.Keyword(null,"result","result",1415092211),(_inf__GT_l + l__GT_b)], null);
}
} else {
throw e__79159__auto____$4;
}
} else {
throw e90403;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e90401){if((e90401 instanceof Error)){
var e__79159__auto____$4 = e90401;
if((e__79159__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_90387_1__90395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_90387,(1));
if((ocr_90387_1__90395 === Infinity)){
if((a >= r_break)){
return inf_integrate(a,b,ab_interval);
} else {
var a__GT_r = integrate(a,r_break,sicmutils.numerical.quadrature.common.close_r(ab_interval));
var r__GT__PLUS_inf = inf_integrate(r_break,b,sicmutils.numerical.quadrature.common.closed_open);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),true,new cljs.core.Keyword(null,"result","result",1415092211),(a__GT_r + r__GT__PLUS_inf)], null);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e90402){if((e90402 instanceof Error)){
var e__79159__auto____$5 = e90402;
if((e__79159__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__79159__auto____$5;
}
} else {
throw e90402;

}
}} else {
throw e__79159__auto____$4;
}
} else {
throw e90401;

}
}} else {
throw e__79159__auto____$3;
}
} else {
throw e90400;

}
}} else {
throw e__79159__auto____$2;
}
} else {
throw e90399;

}
}} else {
throw e__79159__auto____$1;
}
} else {
throw e90398;

}
}} else {
throw e__79159__auto__;
}
} else {
throw e90397;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e90396){if((e90396 instanceof Error)){
var e__79159__auto__ = e90396;
if((e__79159__auto__ === cljs.core.match.backtrack)){
return (integrator.cljs$core$IFn$_invoke$arity$4 ? integrator.cljs$core$IFn$_invoke$arity$4(f,a,b,opts__$1) : integrator.call(null,f,a,b,opts__$1));
} else {
throw e__79159__auto__;
}
} else {
throw e90396;

}
}});
sicmutils$numerical$quadrature$infinite$improper_$_rec = function(f,a,b,opts){
switch(arguments.length){
case 3:
return sicmutils$numerical$quadrature$infinite$improper_$_rec__3.call(this,f,a,b);
case 4:
return sicmutils$numerical$quadrature$infinite$improper_$_rec__4.call(this,f,a,b,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sicmutils$numerical$quadrature$infinite$improper_$_rec.cljs$core$IFn$_invoke$arity$3 = sicmutils$numerical$quadrature$infinite$improper_$_rec__3;
sicmutils$numerical$quadrature$infinite$improper_$_rec.cljs$core$IFn$_invoke$arity$4 = sicmutils$numerical$quadrature$infinite$improper_$_rec__4;
return sicmutils$numerical$quadrature$infinite$improper_$_rec;
})()
});

//# sourceMappingURL=sicmutils.numerical.quadrature.infinite.js.map
