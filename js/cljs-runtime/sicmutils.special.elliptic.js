goog.provide('sicmutils.special.elliptic');
/**
 * From W.H. Press, Numerical Recipes in C++, 2ed. NR::rf from section 6.11
 * 
 *   Here's the reference for what's going on here:
 *   http://phys.uri.edu/nigh/NumRec/bookfpdf/f6-11.pdf
 * 
 *   Comment from Press, page 257:
 * 
 *   'Computes Carlson’s elliptic integral of the first kind, RF (x, y, z). x, y,
 *   and z must be nonnegative, and at most one can be zero. TINY must be at least
 *   5 times the machine underflow limit, BIG at most one fifth the machine
 *   overflow limit.'
 * 
 *   A value of 0.08 for the error tolerance parameter is adequate for single
 *   precision (7 significant digits). Since the error scales as 6 n, we see that
 *   0.0025 will yield double precision (16 significant digits) and require at most
 *   two or three more iterations.'
 * 
 *   This is called `Carlson-elliptic-1` in scmutils.
 */
sicmutils.special.elliptic.carlson_rf = (function sicmutils$special$elliptic$carlson_rf(x,y,z){
var errtol = 0.0025;
var tiny = 1.5E-38;
var big = 3.0E37;
var third = (1.0 / 3.0);
var c1 = ((1) / 24.0);
var c2 = 0.1;
var c3 = (3.0 / 44.0);
var c4 = (1.0 / 14.0);
if(((((function (){var x__4339__auto__ = (function (){var x__4339__auto__ = x;
var y__4340__auto__ = y;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var y__4340__auto__ = z;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})() < (0))) || (((((function (){var x__4339__auto__ = (function (){var x__4339__auto__ = (x + y);
var y__4340__auto__ = (x + z);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var y__4340__auto__ = (y + z);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})() < tiny)) || (((function (){var x__4336__auto__ = (function (){var x__4336__auto__ = x;
var y__4337__auto__ = y;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var y__4337__auto__ = z;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})() > big)))))){
sicmutils.util.illegal("Carlson R_F");
} else {
}

var xt = x;
var yt = y;
var zt = z;
while(true){
var sqrtx = Math.sqrt(xt);
var sqrty = Math.sqrt(yt);
var sqrtz = Math.sqrt(zt);
var alamb = ((sqrtx * (sqrty + sqrtz)) + (sqrty * sqrtz));
var xt_SINGLEQUOTE_ = (0.25 * (xt + alamb));
var yt_SINGLEQUOTE_ = (0.25 * (yt + alamb));
var zt_SINGLEQUOTE_ = (0.25 * (zt + alamb));
var ave = (third * ((xt_SINGLEQUOTE_ + yt_SINGLEQUOTE_) + zt_SINGLEQUOTE_));
var delx = ((ave - xt_SINGLEQUOTE_) / ave);
var dely = ((ave - yt_SINGLEQUOTE_) / ave);
var delz = ((ave - zt_SINGLEQUOTE_) / ave);
if(((function (){var x__4336__auto__ = (function (){var x__4336__auto__ = Math.abs(delx);
var y__4337__auto__ = Math.abs(dely);
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var y__4337__auto__ = Math.abs(delz);
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})() > errtol)){
var G__103560 = xt_SINGLEQUOTE_;
var G__103561 = yt_SINGLEQUOTE_;
var G__103562 = zt_SINGLEQUOTE_;
xt = G__103560;
yt = G__103561;
zt = G__103562;
continue;
} else {
var e2 = ((delx * dely) - (delz * delz));
var e3 = ((delx * dely) * delz);
return (((1.0 + ((((c1 * e2) - c2) - (c3 * e3)) * e2)) + (c4 * e3)) / Math.sqrt(ave));
}
break;
}
});
/**
 * Comment from Press, section 6.11, page 257:
 * 
 *   'Computes Carlson’s elliptic integral of the second kind, RD(x, y, z). x and y must be
 *   nonnegative, and at most one can be zero. z must be positive. TINY must be at least twice
 *   the negative 2/3 power of the machine overflow limit. BIG must be at most 0.1 × ERRTOL
 *   times the negative 2/3 power of the machine underflow limit.'
 * 
 *   This is called `Carlson-elliptic-2` in scmutils.
 */
sicmutils.special.elliptic.carlson_rd = (function sicmutils$special$elliptic$carlson_rd(x,y,z){
var eps = 0.0015;
var tiny = 1.0E-25;
var big = 4.5E21;
var C1 = (3.0 / 14.0);
var C2 = (1.0 / 6.0);
var C3 = (9.0 / 22.0);
var C4 = (3.0 / 26.0);
var C5 = (0.25 * C3);
var C6 = (1.5 * C4);
if(((((function (){var x__4339__auto__ = x;
var y__4340__auto__ = y;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})() < (0))) || (((((function (){var x__4339__auto__ = (x + y);
var y__4340__auto__ = z;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})() < tiny)) || (((function (){var x__4336__auto__ = (function (){var x__4336__auto__ = x;
var y__4337__auto__ = y;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var y__4337__auto__ = z;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})() > big)))))){
sicmutils.util.illegal("Carlson R_D");
} else {
}

var x__$1 = x;
var y__$1 = y;
var z__$1 = z;
var sum = 0.0;
var fac = 1.0;
while(true){
var sqrtx = Math.sqrt(x__$1);
var sqrty = Math.sqrt(y__$1);
var sqrtz = Math.sqrt(z__$1);
var alamb = ((sqrtx * (sqrty + sqrtz)) + (sqrty * sqrtz));
var sump = (sum + (fac / (sqrtz * (z__$1 + alamb))));
var facp = (0.25 * fac);
var xp = (0.25 * (x__$1 + alamb));
var yp = (0.25 * (y__$1 + alamb));
var zp = (0.25 * (z__$1 + alamb));
var ave = (0.2 * ((xp + yp) + (3.0 * zp)));
var delx = ((ave - xp) / ave);
var dely = ((ave - yp) / ave);
var delz = ((ave - zp) / ave);
if(((function (){var x__4336__auto__ = (function (){var x__4336__auto__ = Math.abs(delx);
var y__4337__auto__ = Math.abs(dely);
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var y__4337__auto__ = Math.abs(delz);
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})() > eps)){
var G__103563 = xp;
var G__103564 = yp;
var G__103565 = zp;
var G__103566 = sump;
var G__103567 = facp;
x__$1 = G__103563;
y__$1 = G__103564;
z__$1 = G__103565;
sum = G__103566;
fac = G__103567;
continue;
} else {
var ea = (delx * dely);
var eb = (delz * delz);
var ec = (ea - eb);
var ed = (ea - (6.0 * eb));
var ee = ((ed + ec) + ec);
return ((3.0 * sump) + ((facp * ((1.0 + (ed * (((C5 * ed) - ((C6 * delz) * ee)) - C1))) + (delz * ((C2 * ee) + (delz * ((C3 * ec) - ((delz * C4) * ea))))))) / (ave * Math.sqrt(ave))));
}
break;
}
});
/**
 * Computes Carlson’s degenerate elliptic integral, $R_C(x, y)$. `x` must be
 *   nonnegative and `y` must be nonzero. If `y < 0`, the Cauchy principal value is
 *   returned.
 * 
 *   Internal details:
 * 
 *   - `tiny` must be at least 5 times the machine underflow limit
 *   - `big` at most one fifth the machine maximum overflow limit.
 */
sicmutils.special.elliptic.carlson_rc = (function sicmutils$special$elliptic$carlson_rc(x,y){
var errtol = 0.0012;
var tiny = 1.69E-38;
var sqrtny = 1.3E-19;
var big = 3.0E37;
var tnbg = (tiny * big);
var comp1 = (2.236 / sqrtny);
var comp2 = ((tnbg * tnbg) / (25));
var third = ((1) / 3.0);
var C1 = 0.3;
var C2 = (1.0 / 7.0);
var C3 = 0.375;
var C4 = (9.0 / 22.0);
if((((x < (0))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(0))) || (((((x + Math.abs(y)) < tiny)) || (((((x + Math.abs(y)) > big)) || ((((y < (- comp1))) && ((((x > (0))) && ((x < comp2)))))))))))))){
sicmutils.util.illegal("Carlson R_C");
} else {
}

var vec__103408 = (((y > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(1)], null):(function (){var xt = (x - y);
var yt = (- y);
var w = (Math.sqrt(x) / Math.sqrt(xt));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xt,yt,w], null);
})());
var xt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103408,(0),null);
var yt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103408,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103408,(2),null);
var xt__$1 = xt;
var yt__$1 = yt;
while(true){
var sqrtx = Math.sqrt(xt__$1);
var sqrty = Math.sqrt(yt__$1);
var alamb = ((((2) * sqrtx) * sqrty) + yt__$1);
var xp = (0.25 * (xt__$1 + alamb));
var yp = (0.25 * (yt__$1 + alamb));
var ave = (third * ((xp + yp) + yp));
var s = ((yp - ave) / ave);
if((Math.abs(s) > errtol)){
var G__103569 = xp;
var G__103570 = yp;
xt__$1 = G__103569;
yt__$1 = G__103570;
continue;
} else {
return (w * ((1.0 + ((s * s) * (C1 + (s * (C2 + (s * (C3 + (s * C4)))))))) / Math.sqrt(ave)));
}
break;
}
});
/**
 * Computes
 *   [Carlson’s elliptic
 *   integral](https://en.wikipedia.org/wiki/Carlson_symmetric_form) of the third
 *   kind, `RJ(x, y, z, p)`.
 * 
 *   `x`, `y`, and `z` must be nonnegative, and at most one can be zero. `p` must
 *   be nonzero.
 * 
 *   If `p < 0`, the Cauchy principal value is returned. `tiny` internally must be
 *   at least twice the cube root of the machine underflow limit, `big` at most one
 *   fifth the cube root of the machine overflow limit.
 */
sicmutils.special.elliptic.carlson_rj = (function sicmutils$special$elliptic$carlson_rj(x,y,z,p){
var errtol = 0.0015;
var tiny = 2.5E-13;
var big = 9.0E11;
var C1 = (3.0 / 14.0);
var C2 = (1.0 / 3.0);
var C3 = (3.0 / 22.0);
var C4 = (3.0 / 26.0);
var C5 = (0.75 * C3);
var C6 = (1.5 * C4);
var C7 = (0.5 * C2);
var C8 = (C3 + C3);
if(((((function (){var x__4339__auto__ = (function (){var x__4339__auto__ = x;
var y__4340__auto__ = y;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var y__4340__auto__ = z;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})() < (0))) || (((((function (){var x__4339__auto__ = (function (){var x__4339__auto__ = (function (){var x__4339__auto__ = (x + y);
var y__4340__auto__ = (x + z);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var y__4340__auto__ = (y + z);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var y__4340__auto__ = Math.abs(p);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})() < tiny)) || (((function (){var x__4336__auto__ = (function (){var x__4336__auto__ = (function (){var x__4336__auto__ = x;
var y__4337__auto__ = y;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var y__4337__auto__ = z;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var y__4337__auto__ = Math.abs(p);
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})() > big)))))){
sicmutils.util.illegal("Carlson R_J");
} else {
}

var vec__103416 = (((p > (0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z,p], null):(function (){var xt = (function (){var x__4339__auto__ = (function (){var x__4339__auto__ = x;
var y__4340__auto__ = y;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var y__4340__auto__ = z;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var zt = (function (){var x__4336__auto__ = (function (){var x__4336__auto__ = x;
var y__4337__auto__ = y;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var y__4337__auto__ = z;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var yt = ((((x + y) + z) - xt) - zt);
var a = (1.0 / (yt - p));
var b = ((a * (zt - yt)) * (yt - xt));
var pt = (yt + b);
var rho = ((xt * zt) / yt);
var tau = ((p * pt) / yt);
var rcx = sicmutils.special.elliptic.carlson_rc(rho,tau);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [xt,yt,zt,pt,a,b,rcx], null);
})());
var xt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103416,(0),null);
var yt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103416,(1),null);
var zt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103416,(2),null);
var pt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103416,(3),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103416,(4),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103416,(5),null);
var rcx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103416,(6),null);
var xt__$1 = xt;
var yt__$1 = yt;
var zt__$1 = zt;
var pt__$1 = pt;
var sum = 0.0;
var fac = 1.0;
while(true){
var sqrtx = Math.sqrt(xt__$1);
var sqrty = Math.sqrt(yt__$1);
var sqrtz = Math.sqrt(zt__$1);
var alamb = ((sqrtx * (sqrty + sqrtz)) + (sqrty * sqrtz));
var alpha = Math.pow(((pt__$1 * ((sqrtx + sqrty) + sqrtz)) + ((sqrtx * sqrty) * sqrtz)),(2));
var beta = (pt__$1 * Math.pow((pt__$1 + alamb),(2)));
var sump = (sum + (fac * sicmutils.special.elliptic.carlson_rc(alpha,beta)));
var facp = (0.25 * fac);
var xp = (0.25 * (xt__$1 + alamb));
var yp = (0.25 * (yt__$1 + alamb));
var zp = (0.25 * (zt__$1 + alamb));
var pp = (0.25 * (pt__$1 + alamb));
var ave = (0.2 * ((((xp + yp) + zp) + pp) + pp));
var delx = ((ave - xp) / ave);
var dely = ((ave - yp) / ave);
var delz = ((ave - zp) / ave);
var delp = ((ave - pp) / ave);
if(((function (){var x__4336__auto__ = (function (){var x__4336__auto__ = (function (){var x__4336__auto__ = Math.abs(delx);
var y__4337__auto__ = Math.abs(dely);
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var y__4337__auto__ = Math.abs(delz);
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var y__4337__auto__ = Math.abs(delp);
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})() > errtol)){
var G__103577 = xp;
var G__103578 = yp;
var G__103579 = zp;
var G__103580 = pp;
var G__103581 = sump;
var G__103582 = facp;
xt__$1 = G__103577;
yt__$1 = G__103578;
zt__$1 = G__103579;
pt__$1 = G__103580;
sum = G__103581;
fac = G__103582;
continue;
} else {
var ea = ((delx * (dely + delz)) + (dely * delz));
var eb = ((delx * dely) * delz);
var ec = (delp * delp);
var ed = (ea - (3.0 * ec));
var ee = (eb + ((2.0 * delp) * (ea - ec)));
var rj = ((3.0 * sump) + ((facp * ((((1.0 + (ed * (((C5 * ed) - (C6 * ee)) - C1))) + (eb * (C7 + (delp * ((delp * C4) - C8))))) + ((delp * ea) * (C2 - (delp * C3)))) + (- ((C2 * delp) * ec)))) / (ave * Math.sqrt(ave))));
if((p <= (0))){
return (a * ((b * rj) + (3.0 * (rcx - sicmutils.special.elliptic.carlson_rf(xp,yp,zp)))));
} else {
return rj;
}
}
break;
}
});
/**
 * Legendre elliptic integral of the first kind F(φ, k).
 * See W.H. Press, Numerical Recipes in C++, 2ed. eq. 6.11.19
 * 
 *   See [page 260](http://phys.uri.edu/nigh/NumRec/bookfpdf/f6-11.pdf).
 */
sicmutils.special.elliptic.elliptic_f = (function sicmutils$special$elliptic$elliptic_f(phi,k){
var s = Math.sin(phi);
var sk = (s * k);
return (s * sicmutils.special.elliptic.carlson_rf(Math.pow(Math.cos(phi),(2)),(((1) - sk) * ((1) + sk)),(1)));
});
/**
 * Complete elliptic integral of the first kind - see Press, 6.11.18.
 */
sicmutils.special.elliptic.elliptic_k = (function sicmutils$special$elliptic$elliptic_k(k){
return sicmutils.special.elliptic.elliptic_f((Math.PI / (2)),k);
});
/**
 * Passing `k` returns the complete elliptic integral of the second kind - see
 *   Press, 6.11.20.
 * 
 *   The two-arity version returns the Legendre elliptic integral of the second
 *   kind E(φ, k). See W.H. Press, Numerical Recipes in C++, 2ed. eq. 6.11.20.
 * 
 *   See [page 260](http://phys.uri.edu/nigh/NumRec/bookfpdf/f6-11.pdf).
 */
sicmutils.special.elliptic.elliptic_e = (function sicmutils$special$elliptic$elliptic_e(var_args){
var G__103422 = arguments.length;
switch (G__103422) {
case 1:
return sicmutils.special.elliptic.elliptic_e.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.special.elliptic.elliptic_e.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.special.elliptic.elliptic_e.cljs$core$IFn$_invoke$arity$1 = (function (k){
return sicmutils.special.elliptic.elliptic_e.cljs$core$IFn$_invoke$arity$2((Math.PI / (2)),k);
}));

(sicmutils.special.elliptic.elliptic_e.cljs$core$IFn$_invoke$arity$2 = (function (phi,k){
var s = Math.sin(phi);
var c = Math.cos(phi);
var cc = (c * c);
var sk = (s * k);
var q = (((1) - sk) * ((1) + sk));
return (s * (sicmutils.special.elliptic.carlson_rf(cc,q,1.0) - ((sk * sk) * (sicmutils.special.elliptic.carlson_rd(cc,q,1.0) / 3.0))));
}));

(sicmutils.special.elliptic.elliptic_e.cljs$lang$maxFixedArity = 2);

/**
 * Computes the first and second complete elliptic integrals at once, and passes
 *   them to the supplied continuation as args `K` and `E`.
 */
sicmutils.special.elliptic.elliptic_integrals = (function sicmutils$special$elliptic$elliptic_integrals(k,continue$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(1))){
return (continue$.cljs$core$IFn$_invoke$arity$2 ? continue$.cljs$core$IFn$_invoke$arity$2(Infinity,1.0) : continue$.call(null,Infinity,1.0));
} else {
var a = 1.0;
var b = Math.sqrt((1.0 - (k * k)));
var c = k;
var d = 0.0;
var powers_2 = 1.0;
while(true){
if((Math.abs(c) < sicmutils.value.machine_epsilon)){
var first_elliptic_integral = ((Math.PI / (2)) / a);
var G__103425 = first_elliptic_integral;
var G__103426 = (first_elliptic_integral * (1.0 - (d / 2.0)));
return (continue$.cljs$core$IFn$_invoke$arity$2 ? continue$.cljs$core$IFn$_invoke$arity$2(G__103425,G__103426) : continue$.call(null,G__103425,G__103426));
} else {
var G__103585 = ((a + b) / 2.0);
var G__103586 = Math.sqrt((a * b));
var G__103587 = ((a - b) / 2.0);
var G__103588 = (d + ((c * c) * powers_2));
var G__103589 = (powers_2 * 2.0);
a = G__103585;
b = G__103586;
c = G__103587;
d = G__103588;
powers_2 = G__103589;
continue;
}
break;
}
}
});
/**
 * Returns a pair of:
 * 
 *   - the elliptic integral of the first kind, `K`
 *   - the derivative `dK/dk`
 * 
 *   evaluated at `k`.
 */
sicmutils.special.elliptic.k_and_deriv = (function sicmutils$special$elliptic$k_and_deriv(k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,0.0)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(Math.PI / (2)),0.0], null);
} else {
var cont = (function sicmutils$special$elliptic$k_and_deriv_$_cont(Kk,Ek){
var DKk = (((Ek / ((1) - (k * k))) - Kk) / k);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Kk,DKk], null);
});
return sicmutils.special.elliptic.elliptic_integrals(k,cont);
}
});
/**
 * The two-arity call returns the complete elliptic integral of the third kind -
 *   see
 *   https://en.wikipedia.org/wiki/Carlson_symmetric_form#Complete_elliptic_integrals
 *   for reference.
 * 
 *   The three-arity call returns the Legendre elliptic integral of the third kind
 *   Π(φ, k). See W.H. Press, Numerical Recipes in C++, 2ed. eq. 6.11.21; Note that
 *   our sign convention for `n` is opposite theirs.
 * 
 *   See [page 260](http://phys.uri.edu/nigh/NumRec/bookfpdf/f6-11.pdf).
 */
sicmutils.special.elliptic.elliptic_pi = (function sicmutils$special$elliptic$elliptic_pi(var_args){
var G__103432 = arguments.length;
switch (G__103432) {
case 2:
return sicmutils.special.elliptic.elliptic_pi.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.special.elliptic.elliptic_pi.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.special.elliptic.elliptic_pi.cljs$core$IFn$_invoke$arity$2 = (function (n,k){
return sicmutils.special.elliptic.elliptic_pi.cljs$core$IFn$_invoke$arity$3((Math.PI / (2)),n,k);
}));

(sicmutils.special.elliptic.elliptic_pi.cljs$core$IFn$_invoke$arity$3 = (function (phi,n,k){
var s = Math.sin(phi);
var c = Math.cos(phi);
var nss = ((n * s) * s);
var cc = (c * c);
var sk = (s * k);
var q = (((1) - sk) * ((1) + sk));
return (s * (sicmutils.special.elliptic.carlson_rf(cc,q,1.0) + (nss * (sicmutils.special.elliptic.carlson_rj(cc,q,1.0,(1.0 - nss)) / 3.0))));
}));

(sicmutils.special.elliptic.elliptic_pi.cljs$lang$maxFixedArity = 3);

/**
 * Internal helper to set constants for [[Jacobi-elliptic-functions]].
 *   
 */
sicmutils.special.elliptic.emc_u_d = (function sicmutils$special$elliptic$emc_u_d(emc,u,d){
var bo = (emc < 0.0);
if(bo){
var d__$1 = (1.0 - emc);
var emc__$1 = (- (emc / d__$1));
var d__$2 = Math.sqrt(d__$1);
var u__$1 = (u * d__$2);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bo,emc__$1,u__$1,d__$2], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bo,emc,u,d], null);
}
});
/**
 * Direct Clojure translation (via the Scheme translation in scmutils) of W.H.
 *   Press, Numerical Recipes, subroutine `sncndn`.
 * 
 *   Calls the supplied continuation `cont` with `sn`, `cn` and `dn` as defined
 *   below.
 * 
 *   If no `cont` is supplied, returns a three-vector of `sn`, `cn` and `dn`.
 * 
 *   Comments from Press, page 261:
 * 
 *   The Jacobian elliptic function sn is defined as follows: instead of
 *   considering the elliptic integral
 * 
 *   $$u(y, k) \equiv u=F(\phi, k)$$
 * 
 *   Consider the _inverse_ function:
 * 
 *   ```
 *   $$y = \sin \phi = \mathrm{sn}(u, k)$$
 *   ```
 * 
 *   Equivalently,
 * 
 *   ```
 *   $$u=\int_{0}^{\mathrm{sn}} \frac{d y}{\sqrt{\left(1-y^{2}\right)\left(1-k^{2} y^{2}\right)}}$$
 *   ```
 * 
 *   When $k = 0$, $sn$ is just $\sin$. The functions $cn$ and $dn$ are defined by
 *   the relations
 * 
 *   ```
 *   $$\mathrm{sn}^{2}+\mathrm{cn}^{2}=1, \quad k^{2} \mathrm{sn}^{2}+\mathrm{dn}^{2}=1$$
 *   ```
 * 
 *   The function calls the continuation with all three functions $sn$, $cn$, and
 *   $dn$ since computing all three is no harder than computing any one of them.
 */
sicmutils.special.elliptic.jacobi_elliptic_functions = (function sicmutils$special$elliptic$jacobi_elliptic_functions(var_args){
var G__103442 = arguments.length;
switch (G__103442) {
case 2:
return sicmutils.special.elliptic.jacobi_elliptic_functions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.special.elliptic.jacobi_elliptic_functions.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.special.elliptic.jacobi_elliptic_functions.cljs$core$IFn$_invoke$arity$2 = (function (u,k){
return sicmutils.special.elliptic.jacobi_elliptic_functions.cljs$core$IFn$_invoke$arity$3(u,k,cljs.core.vector);
}));

(sicmutils.special.elliptic.jacobi_elliptic_functions.cljs$core$IFn$_invoke$arity$3 = (function (u,k,cont){
var eps = sicmutils.value.sqrt_machine_epsilon;
var emc = (1.0 - (k * k));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emc,0.0)){
var cn = (1.0 / Math.cosh(u));
var G__103449 = Math.tanh(u);
var G__103450 = cn;
var G__103451 = cn;
return (cont.cljs$core$IFn$_invoke$arity$3 ? cont.cljs$core$IFn$_invoke$arity$3(G__103449,G__103450,G__103451) : cont.call(null,G__103449,G__103450,G__103451));
} else {
var vec__103456 = sicmutils.special.elliptic.emc_u_d(emc,u,1.0);
var bo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103456,(0),null);
var emc__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103456,(1),null);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103456,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103456,(3),null);
var a = 1.0;
var emc__$2 = emc__$1;
var i = (1);
var em = cljs.core.PersistentVector.EMPTY;
var en = cljs.core.PersistentVector.EMPTY;
while(true){
var emc__$3 = Math.sqrt(emc__$2);
var c = (0.5 * (a + emc__$3));
if((((Math.abs((a - emc__$3)) > (eps * a))) && ((i < (13))))){
var G__103596 = c;
var G__103597 = (a * emc__$3);
var G__103602 = (i + (1));
var G__103603 = cljs.core.cons(a,em);
var G__103604 = cljs.core.cons(emc__$3,en);
a = G__103596;
emc__$2 = G__103597;
i = G__103602;
em = G__103603;
en = G__103604;
continue;
} else {
var u__$2 = (c * u__$1);
var sn = Math.sin(u__$2);
var cn = Math.cos(u__$2);
var vec__103532 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sn,0.0))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,sn,cn,1.0], null):(function (){var em__$1 = em;
var en__$1 = en;
var a__$1 = (cn / sn);
var c__$1 = (a__$1 * c);
var dn = 1.0;
while(true){
if(((cljs.core.seq(em__$1)) && (cljs.core.seq(en__$1)))){
var b = cljs.core.first(em__$1);
var vec__103541 = (function (){var a__$2 = (c__$1 * a__$1);
var c__$2 = (dn * c__$1);
var dn__$1 = ((cljs.core.first(en__$1) + a__$2) / (a__$2 + b));
var a__$3 = (c__$2 / b);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$3,c__$2,dn__$1], null);
})();
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103541,(0),null);
var c__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103541,(1),null);
var dn__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103541,(2),null);
var G__103623 = cljs.core.rest(em__$1);
var G__103624 = cljs.core.rest(en__$1);
var G__103625 = a__$2;
var G__103626 = c__$2;
var G__103627 = dn__$1;
em__$1 = G__103623;
en__$1 = G__103624;
a__$1 = G__103625;
c__$1 = G__103626;
dn = G__103627;
continue;
} else {
var a_SINGLEQUOTE_ = (1.0 / Math.sqrt((1.0 + (c__$1 * c__$1))));
var vec__103545 = (function (){var sn__$1 = (((sn < 0.0))?(- a_SINGLEQUOTE_):a_SINGLEQUOTE_);
var cn__$1 = (c__$1 * sn__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sn__$1,cn__$1], null);
})();
var sn__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103545,(0),null);
var cn__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103545,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,sn__$1,cn__$1,dn], null);
}
break;
}
})());
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103532,(0),null);
var sn__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103532,(1),null);
var cn__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103532,(2),null);
var dn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103532,(3),null);
if(cljs.core.truth_(bo)){
var G__103550 = (sn__$1 / d);
var G__103551 = a__$1;
var G__103552 = cn__$1;
return (cont.cljs$core$IFn$_invoke$arity$3 ? cont.cljs$core$IFn$_invoke$arity$3(G__103550,G__103551,G__103552) : cont.call(null,G__103550,G__103551,G__103552));
} else {
return (cont.cljs$core$IFn$_invoke$arity$3 ? cont.cljs$core$IFn$_invoke$arity$3(sn__$1,cn__$1,dn) : cont.call(null,sn__$1,cn__$1,dn));
}
}
break;
}
}
}));

(sicmutils.special.elliptic.jacobi_elliptic_functions.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=sicmutils.special.elliptic.js.map
