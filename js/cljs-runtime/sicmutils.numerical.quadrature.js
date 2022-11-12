goog.provide('sicmutils.numerical.quadrature');
sicmutils.numerical.quadrature.quadrature_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"simpson38","simpson38",-754529919),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"trapezoid","trapezoid",114840675),new cljs.core.Keyword(null,"lower-riemann","lower-riemann",-418483901),new cljs.core.Keyword(null,"closed-open","closed-open",-1821164567),new cljs.core.Keyword(null,"romberg","romberg",609723434),new cljs.core.Keyword(null,"simpson","simpson",-1546685398),new cljs.core.Keyword(null,"midpoint","midpoint",-36269525),new cljs.core.Keyword(null,"bulirsch-stoer-closed","bulirsch-stoer-closed",-1579787828),new cljs.core.Keyword(null,"romberg-open","romberg-open",-200805328),new cljs.core.Keyword(null,"right-riemann","right-riemann",1357460560),new cljs.core.Keyword(null,"left-riemann","left-riemann",-330641680),new cljs.core.Keyword(null,"boole","boole",-148416687),new cljs.core.Keyword(null,"open-closed","open-closed",-1293256622),new cljs.core.Keyword(null,"milne","milne",110782965),new cljs.core.Keyword(null,"bulirsch-stoer-open","bulirsch-stoer-open",-2130050405),new cljs.core.Keyword(null,"adaptive-bulirsch-stoer","adaptive-bulirsch-stoer",1102962876),new cljs.core.Keyword(null,"upper-riemann","upper-riemann",1525159164)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"adaptive-bulirsch-stoer","adaptive-bulirsch-stoer",1102962876),new cljs.core.Keyword(null,"interval","interval",1708495417),sicmutils.numerical.quadrature.common.open], null),sicmutils.numerical.quadrature.simpson38.integral,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"adaptive-bulirsch-stoer","adaptive-bulirsch-stoer",1102962876),new cljs.core.Keyword(null,"interval","interval",1708495417),sicmutils.numerical.quadrature.common.closed], null),sicmutils.numerical.quadrature.trapezoid.integral,sicmutils.numerical.quadrature.riemann.lower_integral,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"adaptive-bulirsch-stoer","adaptive-bulirsch-stoer",1102962876),new cljs.core.Keyword(null,"interval","interval",1708495417),sicmutils.numerical.quadrature.common.closed_open], null),sicmutils.numerical.quadrature.romberg.closed_integral,sicmutils.numerical.quadrature.simpson.integral,sicmutils.numerical.quadrature.midpoint.integral,sicmutils.numerical.quadrature.bulirsch_stoer.closed_integral,sicmutils.numerical.quadrature.romberg.open_integral,sicmutils.numerical.quadrature.riemann.right_integral,sicmutils.numerical.quadrature.riemann.left_integral,sicmutils.numerical.quadrature.boole.integral,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"adaptive-bulirsch-stoer","adaptive-bulirsch-stoer",1102962876),new cljs.core.Keyword(null,"interval","interval",1708495417),sicmutils.numerical.quadrature.common.open_closed], null),sicmutils.numerical.quadrature.milne.integral,sicmutils.numerical.quadrature.bulirsch_stoer.open_integral,sicmutils.numerical.quadrature.adaptive.adaptive.cljs$core$IFn$_invoke$arity$2(sicmutils.numerical.quadrature.bulirsch_stoer.open_integral,sicmutils.numerical.quadrature.bulirsch_stoer.closed_integral),sicmutils.numerical.quadrature.riemann.upper_integral]);
sicmutils.numerical.quadrature.available_methods = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(sicmutils.numerical.quadrature.quadrature_methods));
/**
 * Attempts to turn the supplied argument into an integration method; returns nil
 *   if method doesn't exist.
 */
sicmutils.numerical.quadrature.extract_method = (function sicmutils$numerical$quadrature$extract_method(method){
if(cljs.core.fn_QMARK_(method)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [method,cljs.core.PersistentArrayMap.EMPTY], null);
} else {
if((method instanceof cljs.core.Keyword)){
var G__82142 = (sicmutils.numerical.quadrature.quadrature_methods.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numerical.quadrature.quadrature_methods.cljs$core$IFn$_invoke$arity$1(method) : sicmutils.numerical.quadrature.quadrature_methods.call(null,method));
return (sicmutils.numerical.quadrature.extract_method.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numerical.quadrature.extract_method.cljs$core$IFn$_invoke$arity$1(G__82142) : sicmutils.numerical.quadrature.extract_method.call(null,G__82142));
} else {
if(cljs.core.map_QMARK_(method)){
var vec__82147 = (function (){var G__82150 = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(method);
return (sicmutils.numerical.quadrature.extract_method.cljs$core$IFn$_invoke$arity$1 ? sicmutils.numerical.quadrature.extract_method.cljs$core$IFn$_invoke$arity$1(G__82150) : sicmutils.numerical.quadrature.extract_method.call(null,G__82150));
})();
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82147,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82147,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(method,new cljs.core.Keyword(null,"method","method",55703592)),m], 0))], null);
} else {
return null;
}
}
}
});
/**
 * Takes:
 * 
 *   - An integration method, specified as either:
 *  - a keyword naming one of the available methods in `available-methods`
 *  - a function with the proper integrator signature
 *  - a dictionary of integrator options with a `:method` key
 * 
 *   - `a` and `b` integration endpoints
 *   - an optional dictionary of options `m`
 * 
 *   And returns a pair of an integrator function and a possibly-enhanced options
 *   dictionary.
 * 
 *   (Some integration functions require extra options, so the returned dictionary
 *   may have more entries than the `m` you pass in.)
 * 
 *   If either endpoint is infinite, the returned integrator is wrapped in
 *   `qi/improper` and able to handle infinite endpoints (as well as non-infinite
 *   endpoints by passing through directly to the underlying integrator).
 */
sicmutils.numerical.quadrature.get_integrator = (function sicmutils$numerical$quadrature$get_integrator(var_args){
var G__82156 = arguments.length;
switch (G__82156) {
case 3:
return sicmutils.numerical.quadrature.get_integrator.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sicmutils.numerical.quadrature.get_integrator.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.quadrature.get_integrator.cljs$core$IFn$_invoke$arity$3 = (function (method,a,b){
return sicmutils.numerical.quadrature.get_integrator.cljs$core$IFn$_invoke$arity$4(method,a,b,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.numerical.quadrature.get_integrator.cljs$core$IFn$_invoke$arity$4 = (function (method,a,b,m){
var temp__5753__auto__ = sicmutils.numerical.quadrature.extract_method(method);
if(cljs.core.truth_(temp__5753__auto__)){
var vec__82166 = temp__5753__auto__;
var integrate = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82166,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82166,(1),null);
var integrate__$1 = (cljs.core.truth_((function (){var or__4253__auto__ = sicmutils.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(a);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(b);
}
})())?sicmutils.numerical.quadrature.infinite.improper(integrate):integrate);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [integrate__$1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,m], 0)),new cljs.core.Keyword(null,"method","method",55703592))], null);
} else {
return null;
}
}));

(sicmutils.numerical.quadrature.get_integrator.cljs$lang$maxFixedArity = 4);

/**
 * Evaluates the definite integral of integrand `f` across the interval $a, b$.
 *   Optionally accepts a dictionary `opts` of customizing options; All `opts` will
 *   be passed through to the supplied `integrate` functions.
 * 
 *   If you'd like more control, or to retrieve the integration function directly
 *   without looking it up via `:method` each time, see `get-integrator`.
 * 
 *   All supplied options are passed through to the underlying integrator; see the
 *   specific integrator for information on what options are available.
 * 
 *   ## Keyword arguments:
 * 
 *   `:method`: Specifies the integration method used. Must be
 * 
 *   - a keyword naming one of the available methods in `available-methods`
 *   - a function with the proper integrator signature
 *   - a dictionary of integrator options with a `:method` key
 * 
 *   Defaults to `:open`, which specifies an adaptive bulirsch-stoer quadrature method.
 * 
 *   `:compile?` If true, the generic function will be simplified and compiled
 *   before execution.
 * 
 *   `:info?` If true, `definite-integral` will return a map of integration
 *   information returned by the underlying integrator. Else, returns an estimate
 *   of the definite integral.
 */
sicmutils.numerical.quadrature.definite_integral = (function sicmutils$numerical$quadrature$definite_integral(var_args){
var G__82185 = arguments.length;
switch (G__82185) {
case 3:
return sicmutils.numerical.quadrature.definite_integral.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sicmutils.numerical.quadrature.definite_integral.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.quadrature.definite_integral.cljs$core$IFn$_invoke$arity$3 = (function (f,a,b){
return sicmutils.numerical.quadrature.definite_integral.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.numerical.quadrature.definite_integral.cljs$core$IFn$_invoke$arity$4 = (function (f,a,b,p__82190){
var map__82191 = p__82190;
var map__82191__$1 = cljs.core.__destructure_map(map__82191);
var opts = map__82191__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82191__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"open","open",-1763596448));
var compile_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82191__$1,new cljs.core.Keyword(null,"compile?","compile?",-826687650),false);
var info_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82191__$1,new cljs.core.Keyword(null,"info?","info?",361925553),false);
var temp__5751__auto__ = sicmutils.numerical.quadrature.get_integrator.cljs$core$IFn$_invoke$arity$4(method,a,b,opts);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__82195 = temp__5751__auto__;
var integrate = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82195,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82195,(1),null);
var f__$1 = (cljs.core.truth_(compile_QMARK_)?sicmutils.expression.compile.compile_fn.cljs$core$IFn$_invoke$arity$2(f,(1)):cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sicmutils.util.double$,f));
var result = (integrate.cljs$core$IFn$_invoke$arity$4 ? integrate.cljs$core$IFn$_invoke$arity$4(f__$1,a,b,m) : integrate.call(null,f__$1,a,b,m));
if(cljs.core.truth_(info_QMARK_)){
return result;
} else {
return new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result);
}
} else {
return sicmutils.util.illegal(["Unknown method: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method),". Try one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.numerical.quadrature.available_methods)].join(''));
}
}));

(sicmutils.numerical.quadrature.definite_integral.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=sicmutils.numerical.quadrature.js.map
