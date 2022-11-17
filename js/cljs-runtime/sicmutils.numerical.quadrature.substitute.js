goog.provide('sicmutils.numerical.quadrature.substitute');
/**
 * Performs a variable substitution targeted at converting a single infinite
 *   endpoint of an improper integral evaluation into an (open) endpoint at 0 by
 *   applying the following substitution:
 * 
 *   $$u(t) = {1 \over t}$$ $$du = {-1 \over t^2}$$
 * 
 *   This works when the integrand `f` falls off at least as fast as $1 \over t^2$
 *   as it approaches the infinite limit.
 * 
 *   The returned function requires that `a` and `b` have the same sign, ie:
 * 
 *   $$ab > 0$$
 * 
 *   Transform the bounds with $u(t)$, and cancel the negative sign by changing
 *   their order:
 * 
 *   $$\int_{a}^{b} f(x) d x=\int_{1 / b}^{1 / a} \frac{1}{t^{2}} f\left(\frac{1}{t}\right) dt$$
 * 
 *   References:
 * 
 *   - Mathworld, ["Improper Integral"](https://mathworld.wolfram.com/ImproperIntegral.html)
 *   - Press, Numerical Recipes, [Section 4.4](http://phys.uri.edu/nigh/NumRec/bookfpdf/f4-4.pdf)
 */
sicmutils.numerical.quadrature.substitute.infinitize = (function sicmutils$numerical$quadrature$substitute$infinitize(integrate){
return (function() {
var sicmutils$numerical$quadrature$substitute$infinitize_$_call = null;
var sicmutils$numerical$quadrature$substitute$infinitize_$_call__3 = (function (f,a,b){
return sicmutils$numerical$quadrature$substitute$infinitize_$_call.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.PersistentArrayMap.EMPTY);
});
var sicmutils$numerical$quadrature$substitute$infinitize_$_call__4 = (function (f,a,b,opts){
if(cljs.core.not((function (){var and__4251__auto__ = sicmutils.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(a);
if(cljs.core.truth_(and__4251__auto__)){
return sicmutils.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(b);
} else {
return and__4251__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (not (and (g/infinite? a) (g/infinite? b)))"));
}

var f_SINGLEQUOTE_ = (function (t){
return ((function (){var G__102735 = (1.0 / t);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__102735) : f.call(null,G__102735));
})() / (t * t));
});
var a_SINGLEQUOTE_ = (cljs.core.truth_(sicmutils.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(b))?0.0:(1.0 / b));
var b_SINGLEQUOTE_ = (cljs.core.truth_(sicmutils.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(a))?0.0:(1.0 / a));
var opts__$1 = sicmutils.numerical.quadrature.common.update_interval(opts,sicmutils.numerical.quadrature.common.flip);
return (integrate.cljs$core$IFn$_invoke$arity$4 ? integrate.cljs$core$IFn$_invoke$arity$4(f_SINGLEQUOTE_,a_SINGLEQUOTE_,b_SINGLEQUOTE_,opts__$1) : integrate.call(null,f_SINGLEQUOTE_,a_SINGLEQUOTE_,b_SINGLEQUOTE_,opts__$1));
});
sicmutils$numerical$quadrature$substitute$infinitize_$_call = function(f,a,b,opts){
switch(arguments.length){
case 3:
return sicmutils$numerical$quadrature$substitute$infinitize_$_call__3.call(this,f,a,b);
case 4:
return sicmutils$numerical$quadrature$substitute$infinitize_$_call__4.call(this,f,a,b,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sicmutils$numerical$quadrature$substitute$infinitize_$_call.cljs$core$IFn$_invoke$arity$3 = sicmutils$numerical$quadrature$substitute$infinitize_$_call__3;
sicmutils$numerical$quadrature$substitute$infinitize_$_call.cljs$core$IFn$_invoke$arity$4 = sicmutils$numerical$quadrature$substitute$infinitize_$_call__4;
return sicmutils$numerical$quadrature$substitute$infinitize_$_call;
})()
});
/**
 * Implements a change of variables to address a power law singularity at the
 *   lower or upper integration endpoint.
 * 
 *   An "inverse power law singularity" means that the integrand diverges as
 * 
 *   $$(x - a)^{-\gamma}$$
 * 
 *   near $x=a$. Passing true for `lower?` to specify a singularity at the lower
 *   endpoint, false to signal an upper-endpoint singularity.
 * 
 *   References:
 * 
 *   - Mathworld, ["Improper Integral"](https://mathworld.wolfram.com/ImproperIntegral.html)
 *   - Press, Numerical Recipes, [Section 4.4](http://phys.uri.edu/nigh/NumRec/bookfpdf/f4-4.pdf)
 *   - Wikipedia, ["Finite-time Singularity"](https://en.wikipedia.org/wiki/Singularity_(mathematics)#Finite-time_singularity)
 */
sicmutils.numerical.quadrature.substitute.inverse_power_law = (function sicmutils$numerical$quadrature$substitute$inverse_power_law(integrate,gamma,lower_QMARK_){
if(((((0) <= gamma)) && ((gamma <= (1))))){
} else {
throw (new Error("Assert failed: (<= 0 gamma 1)"));
}

return (function() {
var sicmutils$numerical$quadrature$substitute$inverse_power_law_$_call = null;
var sicmutils$numerical$quadrature$substitute$inverse_power_law_$_call__3 = (function (f,a,b){
return sicmutils$numerical$quadrature$substitute$inverse_power_law_$_call.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.PersistentArrayMap.EMPTY);
});
var sicmutils$numerical$quadrature$substitute$inverse_power_law_$_call__4 = (function (f,a,b,opts){
var inner_pow = ((1) / ((1) - gamma));
var gamma_pow = (gamma * inner_pow);
var a_SINGLEQUOTE_ = (0);
var b_SINGLEQUOTE_ = Math.pow((b - a),((1) - gamma));
var t__GT_t_SINGLEQUOTE_ = (cljs.core.truth_(lower_QMARK_)?(function (t){
return (a + Math.pow(t,inner_pow));
}):(function (t){
return (b - Math.pow(t,inner_pow));
}));
var f_SINGLEQUOTE_ = (function (t){
return (Math.pow(t,gamma_pow) * (function (){var G__102738 = t__GT_t_SINGLEQUOTE_(t);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__102738) : f.call(null,G__102738));
})());
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$3((integrate.cljs$core$IFn$_invoke$arity$4 ? integrate.cljs$core$IFn$_invoke$arity$4(f_SINGLEQUOTE_,a_SINGLEQUOTE_,b_SINGLEQUOTE_,opts) : integrate.call(null,f_SINGLEQUOTE_,a_SINGLEQUOTE_,b_SINGLEQUOTE_,opts)),new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,inner_pow));
});
sicmutils$numerical$quadrature$substitute$inverse_power_law_$_call = function(f,a,b,opts){
switch(arguments.length){
case 3:
return sicmutils$numerical$quadrature$substitute$inverse_power_law_$_call__3.call(this,f,a,b);
case 4:
return sicmutils$numerical$quadrature$substitute$inverse_power_law_$_call__4.call(this,f,a,b,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sicmutils$numerical$quadrature$substitute$inverse_power_law_$_call.cljs$core$IFn$_invoke$arity$3 = sicmutils$numerical$quadrature$substitute$inverse_power_law_$_call__3;
sicmutils$numerical$quadrature$substitute$inverse_power_law_$_call.cljs$core$IFn$_invoke$arity$4 = sicmutils$numerical$quadrature$substitute$inverse_power_law_$_call__4;
return sicmutils$numerical$quadrature$substitute$inverse_power_law_$_call;
})()
});
/**
 * Implements a change of variables to address a power law singularity at the
 *   lower integration endpoint.
 * 
 *   An "inverse power law singularity" means that the integrand diverges as
 * 
 *   $$(x - a)^{-\gamma}$$
 * 
 *   near $x=a$.
 * 
 *   References:
 * 
 *   - Mathworld, ["Improper Integral"](https://mathworld.wolfram.com/ImproperIntegral.html)
 *   - Press, Numerical Recipes, [Section 4.4](http://phys.uri.edu/nigh/NumRec/bookfpdf/f4-4.pdf)
 *   - Wikipedia, ["Finite-time Singularity"](https://en.wikipedia.org/wiki/Singularity_(mathematics)#Finite-time_singularity)
 */
sicmutils.numerical.quadrature.substitute.inverse_power_law_lower = (function sicmutils$numerical$quadrature$substitute$inverse_power_law_lower(integrate,gamma){
return sicmutils.numerical.quadrature.substitute.inverse_power_law(integrate,gamma,true);
});
/**
 * Implements a change of variables to address a power law singularity at the
 *   upper integration endpoint.
 * 
 *   An "inverse power law singularity" means that the integrand diverges as
 * 
 *   $$(x - a)^{-\gamma}$$
 * 
 *   near $x=a$.
 * 
 *   References:
 * 
 *   - Mathworld, ["Improper Integral"](https://mathworld.wolfram.com/ImproperIntegral.html)
 *   - Press, Numerical Recipes, [Section 4.4](http://phys.uri.edu/nigh/NumRec/bookfpdf/f4-4.pdf)
 *   - Wikipedia, ["Finite-time Singularity"](https://en.wikipedia.org/wiki/Singularity_(mathematics)#Finite-time_singularity)
 */
sicmutils.numerical.quadrature.substitute.inverse_power_law_upper = (function sicmutils$numerical$quadrature$substitute$inverse_power_law_upper(integrate,gamma){
return sicmutils.numerical.quadrature.substitute.inverse_power_law(integrate,gamma,false);
});
/**
 * Implements a change of variables to address an inverse square root singularity
 *   at the lower integration endpoint. Use this when the integrand diverges as
 * 
 *   $$1 \over {\sqrt{x - a}}$$
 * 
 *   near the lower endpoint $a$.
 */
sicmutils.numerical.quadrature.substitute.inverse_sqrt_lower = (function sicmutils$numerical$quadrature$substitute$inverse_sqrt_lower(integrate){
return (function() {
var sicmutils$numerical$quadrature$substitute$inverse_sqrt_lower_$_call = null;
var sicmutils$numerical$quadrature$substitute$inverse_sqrt_lower_$_call__3 = (function (f,a,b){
return sicmutils$numerical$quadrature$substitute$inverse_sqrt_lower_$_call.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.PersistentArrayMap.EMPTY);
});
var sicmutils$numerical$quadrature$substitute$inverse_sqrt_lower_$_call__4 = (function (f,a,b,opts){
var f_SINGLEQUOTE_ = (function (t){
return (t * (function (){var G__102740 = (a + (t * t));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__102740) : f.call(null,G__102740));
})());
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var G__102742 = f_SINGLEQUOTE_;
var G__102743 = (0);
var G__102744 = Math.sqrt((b - a));
var G__102745 = opts;
return (integrate.cljs$core$IFn$_invoke$arity$4 ? integrate.cljs$core$IFn$_invoke$arity$4(G__102742,G__102743,G__102744,G__102745) : integrate.call(null,G__102742,G__102743,G__102744,G__102745));
})(),new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,(2)));
});
sicmutils$numerical$quadrature$substitute$inverse_sqrt_lower_$_call = function(f,a,b,opts){
switch(arguments.length){
case 3:
return sicmutils$numerical$quadrature$substitute$inverse_sqrt_lower_$_call__3.call(this,f,a,b);
case 4:
return sicmutils$numerical$quadrature$substitute$inverse_sqrt_lower_$_call__4.call(this,f,a,b,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sicmutils$numerical$quadrature$substitute$inverse_sqrt_lower_$_call.cljs$core$IFn$_invoke$arity$3 = sicmutils$numerical$quadrature$substitute$inverse_sqrt_lower_$_call__3;
sicmutils$numerical$quadrature$substitute$inverse_sqrt_lower_$_call.cljs$core$IFn$_invoke$arity$4 = sicmutils$numerical$quadrature$substitute$inverse_sqrt_lower_$_call__4;
return sicmutils$numerical$quadrature$substitute$inverse_sqrt_lower_$_call;
})()
});
/**
 * Implements a change of variables to address an inverse square root singularity
 *   at the upper integration endpoint. Use this when the integrand diverges as
 * 
 *   $$1 \over {\sqrt{x - b}}$$
 * 
 *   near the upper endpoint $b$.
 */
sicmutils.numerical.quadrature.substitute.inverse_sqrt_upper = (function sicmutils$numerical$quadrature$substitute$inverse_sqrt_upper(integrate){
return (function() {
var sicmutils$numerical$quadrature$substitute$inverse_sqrt_upper_$_call = null;
var sicmutils$numerical$quadrature$substitute$inverse_sqrt_upper_$_call__3 = (function (f,a,b){
return sicmutils$numerical$quadrature$substitute$inverse_sqrt_upper_$_call.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.PersistentArrayMap.EMPTY);
});
var sicmutils$numerical$quadrature$substitute$inverse_sqrt_upper_$_call__4 = (function (f,a,b,opts){
var f_SINGLEQUOTE_ = (function (t){
return (t * (function (){var G__102752 = (b - (t * t));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__102752) : f.call(null,G__102752));
})());
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var G__102753 = f_SINGLEQUOTE_;
var G__102754 = (0);
var G__102755 = Math.sqrt((b - a));
var G__102756 = opts;
return (integrate.cljs$core$IFn$_invoke$arity$4 ? integrate.cljs$core$IFn$_invoke$arity$4(G__102753,G__102754,G__102755,G__102756) : integrate.call(null,G__102753,G__102754,G__102755,G__102756));
})(),new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,(2)));
});
sicmutils$numerical$quadrature$substitute$inverse_sqrt_upper_$_call = function(f,a,b,opts){
switch(arguments.length){
case 3:
return sicmutils$numerical$quadrature$substitute$inverse_sqrt_upper_$_call__3.call(this,f,a,b);
case 4:
return sicmutils$numerical$quadrature$substitute$inverse_sqrt_upper_$_call__4.call(this,f,a,b,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sicmutils$numerical$quadrature$substitute$inverse_sqrt_upper_$_call.cljs$core$IFn$_invoke$arity$3 = sicmutils$numerical$quadrature$substitute$inverse_sqrt_upper_$_call__3;
sicmutils$numerical$quadrature$substitute$inverse_sqrt_upper_$_call.cljs$core$IFn$_invoke$arity$4 = sicmutils$numerical$quadrature$substitute$inverse_sqrt_upper_$_call__4;
return sicmutils$numerical$quadrature$substitute$inverse_sqrt_upper_$_call;
})()
});
/**
 * Implements a change of variables to address an exponentially diverging upper
 *   integration endpoint. Use this when the integrand diverges as $\exp{x}$ near
 *   the upper endpoint $b$.
 */
sicmutils.numerical.quadrature.substitute.exponential_upper = (function sicmutils$numerical$quadrature$substitute$exponential_upper(integrate){
return (function() {
var sicmutils$numerical$quadrature$substitute$exponential_upper_$_call = null;
var sicmutils$numerical$quadrature$substitute$exponential_upper_$_call__3 = (function (f,a,b){
return sicmutils$numerical$quadrature$substitute$exponential_upper_$_call.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.PersistentArrayMap.EMPTY);
});
var sicmutils$numerical$quadrature$substitute$exponential_upper_$_call__4 = (function (f,a,b,opts){
if(cljs.core.truth_(sicmutils.generic.infinite_QMARK_.cljs$core$IFn$_invoke$arity$1(b))){
} else {
throw (new Error("Assert failed: (g/infinite? b)"));
}

var f_SINGLEQUOTE_ = (function (t){
return ((function (){var G__102786 = (- Math.log(t));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__102786) : f.call(null,G__102786));
})() * ((1) / t));
});
var opts__$1 = sicmutils.numerical.quadrature.common.update_interval(opts,sicmutils.numerical.quadrature.common.flip);
var G__102793 = f_SINGLEQUOTE_;
var G__102794 = (0);
var G__102795 = Math.exp((- a));
var G__102796 = opts__$1;
return (integrate.cljs$core$IFn$_invoke$arity$4 ? integrate.cljs$core$IFn$_invoke$arity$4(G__102793,G__102794,G__102795,G__102796) : integrate.call(null,G__102793,G__102794,G__102795,G__102796));
});
sicmutils$numerical$quadrature$substitute$exponential_upper_$_call = function(f,a,b,opts){
switch(arguments.length){
case 3:
return sicmutils$numerical$quadrature$substitute$exponential_upper_$_call__3.call(this,f,a,b);
case 4:
return sicmutils$numerical$quadrature$substitute$exponential_upper_$_call__4.call(this,f,a,b,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sicmutils$numerical$quadrature$substitute$exponential_upper_$_call.cljs$core$IFn$_invoke$arity$3 = sicmutils$numerical$quadrature$substitute$exponential_upper_$_call__3;
sicmutils$numerical$quadrature$substitute$exponential_upper_$_call.cljs$core$IFn$_invoke$arity$4 = sicmutils$numerical$quadrature$substitute$exponential_upper_$_call__4;
return sicmutils$numerical$quadrature$substitute$exponential_upper_$_call;
})()
});

//# sourceMappingURL=sicmutils.numerical.quadrature.substitute.js.map
