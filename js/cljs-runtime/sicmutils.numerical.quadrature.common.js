goog.provide('sicmutils.numerical.quadrature.common');
sicmutils.numerical.quadrature.common._STAR_roundoff_cutoff_STAR_ = 1.0E-14;
sicmutils.numerical.quadrature.common.open = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.numerical.quadrature.common","open","sicmutils.numerical.quadrature.common/open",1425191844),new cljs.core.Keyword("sicmutils.numerical.quadrature.common","open","sicmutils.numerical.quadrature.common/open",1425191844)], null);
sicmutils.numerical.quadrature.common.closed = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.numerical.quadrature.common","closed","sicmutils.numerical.quadrature.common/closed",104591965),new cljs.core.Keyword("sicmutils.numerical.quadrature.common","closed","sicmutils.numerical.quadrature.common/closed",104591965)], null);
sicmutils.numerical.quadrature.common.open_closed = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.numerical.quadrature.common","open","sicmutils.numerical.quadrature.common/open",1425191844),new cljs.core.Keyword("sicmutils.numerical.quadrature.common","closed","sicmutils.numerical.quadrature.common/closed",104591965)], null);
sicmutils.numerical.quadrature.common.closed_open = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.numerical.quadrature.common","closed","sicmutils.numerical.quadrature.common/closed",104591965),new cljs.core.Keyword("sicmutils.numerical.quadrature.common","open","sicmutils.numerical.quadrature.common/open",1425191844)], null);
sicmutils.numerical.quadrature.common.infinities = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [Infinity,null,-Infinity,null], null), null);
/**
 * Returns true if the argument represents an explicit `closed` interval, false
 *   otherwise.
 */
sicmutils.numerical.quadrature.common.closed_QMARK_ = (function sicmutils$numerical$quadrature$common$closed_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,sicmutils.numerical.quadrature.common.closed);
});
sicmutils.numerical.quadrature.common.open_QMARK_ = cljs.core.complement(sicmutils.numerical.quadrature.common.closed_QMARK_);
sicmutils.numerical.quadrature.common.close_l = (function sicmutils$numerical$quadrature$common$close_l(p__102216){
var vec__102217 = p__102216;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102217,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102217,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.numerical.quadrature.common","closed","sicmutils.numerical.quadrature.common/closed",104591965),r], null);
});
sicmutils.numerical.quadrature.common.close_r = (function sicmutils$numerical$quadrature$common$close_r(p__102227){
var vec__102229 = p__102227;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102229,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102229,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,new cljs.core.Keyword("sicmutils.numerical.quadrature.common","closed","sicmutils.numerical.quadrature.common/closed",104591965)], null);
});
sicmutils.numerical.quadrature.common.open_l = (function sicmutils$numerical$quadrature$common$open_l(p__102236){
var vec__102241 = p__102236;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102241,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102241,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.numerical.quadrature.common","open","sicmutils.numerical.quadrature.common/open",1425191844),r], null);
});
sicmutils.numerical.quadrature.common.open_r = (function sicmutils$numerical$quadrature$common$open_r(p__102255){
var vec__102257 = p__102255;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102257,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102257,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,new cljs.core.Keyword("sicmutils.numerical.quadrature.common","open","sicmutils.numerical.quadrature.common/open",1425191844)], null);
});
sicmutils.numerical.quadrature.common.flip = (function sicmutils$numerical$quadrature$common$flip(p__102270){
var vec__102271 = p__102270;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102271,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102271,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,l], null);
});
/**
 * Extracts the interval (or `open` as a default) from the supplied integration
 *   options dict.
 */
sicmutils.numerical.quadrature.common.interval = (function sicmutils$numerical$quadrature$common$interval(opts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"interval","interval",1708495417),sicmutils.numerical.quadrature.common.open);
});
/**
 * Sets the specified interval to a key inside the suppled `opts` map of arbitrary
 *   integration options.
 */
sicmutils.numerical.quadrature.common.with_interval = (function sicmutils$numerical$quadrature$common$with_interval(opts,interval){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"interval","interval",1708495417),interval);
});
/**
 * Accepts:
 * 
 *   - a dictionary of arbitrary options
 *   - one of the 4 interval modification functions
 * 
 *   and returns a dict of options with `f` applied to the contained interval (or
 *   `open` if no interval is set).
 *   
 */
sicmutils.numerical.quadrature.common.update_interval = (function sicmutils$numerical$quadrature$common$update_interval(opts,f){
var k = new cljs.core.Keyword(null,"interval","interval",1708495417);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,k,(function (){var G__102311 = sicmutils.numerical.quadrature.common.interval(opts);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__102311) : f.call(null,G__102311));
})());
});
/**
 * Returns true if the range $[a, b]$ is strip narrow enough to pass the following
 *   test:
 * 
 *   |b - a| / |a| + |b| <= `cutoff`
 * 
 *   False otherwise. This inequality measures how close the two floating point
 *   values are, scaled by the sum of their magnitudes.
 */
sicmutils.numerical.quadrature.common.narrow_slice_QMARK_ = (function sicmutils$numerical$quadrature$common$narrow_slice_QMARK_(a,b,cutoff){
var sum = (Math.abs(a) + Math.abs(b));
return (((sum <= cutoff)) || ((Math.abs((b - a)) <= (cutoff * sum))));
});
/**
 * Generates an `integrator` function from two functions with the following
 *   signatures and descriptions:
 * 
 *   - `(area-fn f a b)` estimates the integral of `f` over the interval `(a, b)`
 *   with no subdivision, nothing clever at all.
 * 
 *   - `(seq-fn f a b opts)` returns a sequence of successively refined estimates
 *   of the integral of `f` over `(a, b)`. `opts` can contain kv pairs that
 *   configure the behavior of the sequence function (a sequence of the number of
 *   integration slices to use, for example.)
 * 
 *   The returned function has the signature:
 * 
 *   `(f a b opts)`
 * 
 *   All `opts` are passed on to `seq-fn`, /and/ to `us/seq-limit` internally,
 *   where the options configure the checks on sequence convergence.
 */
sicmutils.numerical.quadrature.common.make_integrator_fn = (function sicmutils$numerical$quadrature$common$make_integrator_fn(area_fn,seq_fn){
return (function() {
var sicmutils$numerical$quadrature$common$make_integrator_fn_$_call = null;
var sicmutils$numerical$quadrature$common$make_integrator_fn_$_call__3 = (function (f,a,b){
return sicmutils$numerical$quadrature$common$make_integrator_fn_$_call.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.PersistentArrayMap.EMPTY);
});
var sicmutils$numerical$quadrature$common$make_integrator_fn_$_call__4 = (function (f,a,b,p__102395){
var map__102396 = p__102395;
var map__102396__$1 = cljs.core.__destructure_map(map__102396);
var opts = map__102396__$1;
var roundoff_cutoff = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102396__$1,new cljs.core.Keyword(null,"roundoff-cutoff","roundoff-cutoff",1739938187),sicmutils.numerical.quadrature.common._STAR_roundoff_cutoff_STAR_);
if(sicmutils.numerical.quadrature.common.narrow_slice_QMARK_(a,b,roundoff_cutoff)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"sicmutils.numerical.quadrature.common",null,134,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Integrating narrow slice: ",a,b], null);
}),null)),null,1814927892,null);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),true,new cljs.core.Keyword(null,"terms-checked","terms-checked",1046419519),(1),new cljs.core.Keyword(null,"result","result",1415092211),(area_fn.cljs$core$IFn$_invoke$arity$3 ? area_fn.cljs$core$IFn$_invoke$arity$3(f,a,b) : area_fn.call(null,f,a,b))], null);
} else {
return sicmutils.util.stream.seq_limit.cljs$core$IFn$_invoke$arity$2((seq_fn.cljs$core$IFn$_invoke$arity$4 ? seq_fn.cljs$core$IFn$_invoke$arity$4(f,a,b,opts) : seq_fn.call(null,f,a,b,opts)),opts);
}
});
sicmutils$numerical$quadrature$common$make_integrator_fn_$_call = function(f,a,b,p__102395){
switch(arguments.length){
case 3:
return sicmutils$numerical$quadrature$common$make_integrator_fn_$_call__3.call(this,f,a,b);
case 4:
return sicmutils$numerical$quadrature$common$make_integrator_fn_$_call__4.call(this,f,a,b,p__102395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sicmutils$numerical$quadrature$common$make_integrator_fn_$_call.cljs$core$IFn$_invoke$arity$3 = sicmutils$numerical$quadrature$common$make_integrator_fn_$_call__3;
sicmutils$numerical$quadrature$common$make_integrator_fn_$_call.cljs$core$IFn$_invoke$arity$4 = sicmutils$numerical$quadrature$common$make_integrator_fn_$_call__4;
return sicmutils$numerical$quadrature$common$make_integrator_fn_$_call;
})()
});
/**
 * Taken from `clojure.tools.macro/name-with-attributes`.
 * 
 *   Handles optional docstrings and attribute maps for a name to be defined in a
 *   list of macro arguments. If the first macro argument is a string, it is added
 *   as a docstring to name and removed from the macro argument list. If afterwards
 *   the first macro argument is a map, its entries are added to the name's
 *   metadata map and the map is removed from the macro argument list. The return
 *   value is a vector containing the name with its extended metadata map and the
 *   list of unprocessed macro arguments.
 */
sicmutils.numerical.quadrature.common.name_with_attributes = (function sicmutils$numerical$quadrature$common$name_with_attributes(var_args){
var G__102413 = arguments.length;
switch (G__102413) {
case 2:
return sicmutils.numerical.quadrature.common.name_with_attributes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.numerical.quadrature.common.name_with_attributes.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.numerical.quadrature.common.name_with_attributes.cljs$core$IFn$_invoke$arity$2 = (function (name,body){
return sicmutils.numerical.quadrature.common.name_with_attributes.cljs$core$IFn$_invoke$arity$3(name,body,cljs.core.PersistentArrayMap.EMPTY);
}));

(sicmutils.numerical.quadrature.common.name_with_attributes.cljs$core$IFn$_invoke$arity$3 = (function (name,body,meta){
var vec__102418 = ((typeof cljs.core.first(body) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(body),cljs.core.next(body)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body], null));
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102418,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102418,(1),null);
var vec__102421 = ((cljs.core.map_QMARK_(cljs.core.first(body__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(body__$1),cljs.core.next(body__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,body__$1], null));
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102421,(0),null);
var body__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102421,(1),null);
var attr__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,attr], 0));
var attr__$2 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr__$1);
var attr__$3 = (cljs.core.truth_((meta.cljs$core$IFn$_invoke$arity$1 ? meta.cljs$core$IFn$_invoke$arity$1(name) : meta.call(null,name)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2((meta.cljs$core$IFn$_invoke$arity$1 ? meta.cljs$core$IFn$_invoke$arity$1(name) : meta.call(null,name)),attr__$2):attr__$2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(name,attr__$3),body__$2], null);
}));

(sicmutils.numerical.quadrature.common.name_with_attributes.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=sicmutils.numerical.quadrature.common.js.map
