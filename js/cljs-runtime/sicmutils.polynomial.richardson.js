goog.provide('sicmutils.polynomial.richardson');
/**
 * `s` is the side length of an N-sided polygon inscribed in the unit circle. The
 *   return value is the side length of a 2N-sided polygon.
 */
sicmutils.polynomial.richardson.refine_by_doubling = (function sicmutils$polynomial$richardson$refine_by_doubling(s){
return (s / sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(((2) + sicmutils.generic.sqrt.cljs$core$IFn$_invoke$arity$1(((4) - sicmutils.generic.square.cljs$core$IFn$_invoke$arity$1(s))))));
});
/**
 * Returns the semi-perimeter length of an `n`-sided regular polygon with side
 *   length `side-len`.
 */
sicmutils.polynomial.richardson.semi_perimeter = (function sicmutils$polynomial$richardson$semi_perimeter(n,side_len){
return ((n / (2)) * side_len);
});
sicmutils.polynomial.richardson.side_lengths = cljs.core.iterate(sicmutils.polynomial.richardson.refine_by_doubling,Math.sqrt((2)));
sicmutils.polynomial.richardson.side_numbers = cljs.core.iterate((function (p1__102232_SHARP_){
return ((2) * p1__102232_SHARP_);
}),(4));
sicmutils.polynomial.richardson.archimedean_pi_sequence = cljs.core.map.cljs$core$IFn$_invoke$arity$3(sicmutils.polynomial.richardson.semi_perimeter,sicmutils.polynomial.richardson.side_numbers,sicmutils.polynomial.richardson.side_lengths);
/**
 * Generates a new sequence by combining each term in the input sequence `xs`
 *   pairwise according to the rules for richardson acceleration.
 * 
 *   `xs` is a sequence of evaluations of some function of $A$ with its argument
 *   smaller by a factor of `t` each time:
 * 
 *   $$A(h), A(h/t), \ldots$$
 * 
 *   `p` is the order of the dominant error term for the sequence.
 */
sicmutils.polynomial.richardson.accelerate_sequence = (function sicmutils$polynomial$richardson$accelerate_sequence(xs,t,p){
var t_STAR__STAR_p = Math.pow(t,p);
var t_STAR__STAR_p_1 = (t_STAR__STAR_p - (1));
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (ah,ah_over_t){
return (((t_STAR__STAR_p * ah_over_t) - ah) / t_STAR__STAR_p_1);
}),xs,cljs.core.rest(xs));
});
/**
 * Generates the 'tableau' of succesively accelerated Richardson interpolation
 *   columns.
 */
sicmutils.polynomial.richardson.make_tableau = (function sicmutils$polynomial$richardson$make_tableau(var_args){
var G__102253 = arguments.length;
switch (G__102253) {
case 2:
return sicmutils.polynomial.richardson.make_tableau.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.polynomial.richardson.make_tableau.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.polynomial.richardson.make_tableau.cljs$core$IFn$_invoke$arity$2 = (function (xs,t){
return sicmutils.polynomial.richardson.make_tableau.cljs$core$IFn$_invoke$arity$3(xs,t,cljs.core.iterate(cljs.core.inc,(1)));
}));

(sicmutils.polynomial.richardson.make_tableau.cljs$core$IFn$_invoke$arity$3 = (function (xs,t,ps){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.iterate((function (p__102260){
var vec__102261 = p__102260;
var xs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102261,(0),null);
var vec__102264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102261,(1),null);
var seq__102265 = cljs.core.seq(vec__102264);
var first__102266 = cljs.core.first(seq__102265);
var seq__102265__$1 = cljs.core.next(seq__102265);
var p = first__102266;
var ps__$1 = seq__102265__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicmutils.polynomial.richardson.accelerate_sequence(xs__$1,t,p),ps__$1], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs,ps], null))));
}));

(sicmutils.polynomial.richardson.make_tableau.cljs$lang$maxFixedArity = 3);

/**
 * Takes:
 * 
 *   - `xs`: a (potentially lazy) sequence of points representing function values
 *   generated by inputs continually decreasing by a factor of `t`. For example:
 *   `[f(x), f(x/t), f(x/t^2), ...]`
 *   - `t`: the ratio between successive inputs that generated `xs`.
 * 
 *   And returns a new (lazy) sequence of 'accelerated' using [Richardson
 *   extrapolation](https://en.wikipedia.org/wiki/Richardson_extrapolation) to
 *   cancel out error terms in the taylor series expansion of `f(x)` around the
 *   value the series to which the series is trying to converge.
 * 
 *   Each term in the returned sequence cancels one of the error terms through a
 *   linear combination of neighboring terms in the sequence.
 * 
 *   ### Custom P Sequence
 * 
 *   The three-arity version takes one more argument:
 * 
 *   - `p-sequence`: the orders of the error terms in the taylor series expansion
 *   of the function that `xs` is estimating. For example, if `xs` is generated
 *   from some `f(x)` trying to approximate `A`, then `[p_1, p_2...]` etc are the
 *   correction terms:
 * 
 *   ```
 *   $$f(x) = A + B x^{p_1} + C x^{p_2}...$$
 *   ```
 * 
 *   The two-arity version uses a default `p-sequence` of `[1, 2, 3, ...]`
 * 
 *   ### Arithmetic Progression
 * 
 *   The FOUR arity version takes `xs` and `t` as before, but instead of
 *   `p-sequence` makes the assumption that `p-sequence` is an arithmetic
 *   progression of the form `p + iq`, customized by:
 * 
 *   - `p`: the exponent on the highest-order error term
 *   - `q`: the step size on the error term exponent for each new seq element
 * 
 *   ## Notes
 * 
 *   Richardson extrapolation is a special case of polynomial extrapolation,
 *   implemented in `polynomial.cljc`.
 * 
 *   Instead of a sequence of `xs`, if you generate an explicit series of points of
 *   the form `[x (f x)]` with successively smaller `x` values and
 *   polynomial-extrapolate it forward to x == 0 (with,
 *   say, `(polynomial/modified-neville xs 0)`) you'll get the exact same result.
 * 
 *   Richardson extrapolation is more efficient since it can make assumptions about
 *   the spacing between points and pre-calculate a few quantities. See the
 *   namespace for more discussion.
 * 
 *   References:
 * 
 *   - Wikipedia, ["Richardson Extrapolation"](https://en.wikipedia.org/wiki/Richardson_extrapolation)
 *   - GJS, ['Abstraction in Numerical Methods'](https://dspace.mit.edu/bitstream/handle/1721.1/6060/AIM-997.pdf?sequence=2)
 */
sicmutils.polynomial.richardson.richardson_sequence = (function sicmutils$polynomial$richardson$richardson_sequence(var_args){
var G__102269 = arguments.length;
switch (G__102269) {
case 2:
return sicmutils.polynomial.richardson.richardson_sequence.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.polynomial.richardson.richardson_sequence.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sicmutils.polynomial.richardson.richardson_sequence.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.polynomial.richardson.richardson_sequence.cljs$core$IFn$_invoke$arity$2 = (function (xs,t){
return sicmutils.polynomial.interpolate.first_terms(sicmutils.polynomial.richardson.make_tableau.cljs$core$IFn$_invoke$arity$2(xs,t));
}));

(sicmutils.polynomial.richardson.richardson_sequence.cljs$core$IFn$_invoke$arity$3 = (function (xs,t,p_sequence){
return sicmutils.polynomial.interpolate.first_terms(sicmutils.polynomial.richardson.make_tableau.cljs$core$IFn$_invoke$arity$3(xs,t,p_sequence));
}));

(sicmutils.polynomial.richardson.richardson_sequence.cljs$core$IFn$_invoke$arity$4 = (function (xs,t,p,q){
var arithmetic_p_q = cljs.core.iterate((function (p1__102267_SHARP_){
return (q + p1__102267_SHARP_);
}),p);
return sicmutils.polynomial.richardson.richardson_sequence.cljs$core$IFn$_invoke$arity$3(xs,t,arithmetic_p_q);
}));

(sicmutils.polynomial.richardson.richardson_sequence.cljs$lang$maxFixedArity = 4);

/**
 * Function with an identical interface to [[richardson-sequence]], except for an
 *   additional second argument `col`.
 * 
 *   `richardson-column` will return that _column_ offset the interpolation tableau
 *   instead of the first row. This will give you a sequence of nth-order
 *   Richardson accelerations taken between point `i` and the next `n` points.
 * 
 *   As a reminder, this is the shape of the Richardson tableau:
 * 
 *   ```
 *   p0 p01 p012 p0123 p01234
 *   p1 p12 p123 p1234 .
 *   p2 p23 p234 .     .
 *   p3 p34 .    .     .
 *   p4 .   .    .     .
 *   ```
 * 
 *   So supplying a `column` of `1` gives a single acceleration by combining points
 *   from column 0; `2` kills two terms from the error sequence, etc.
 * 
 *   NOTE Given a better interface for [[richardson-sequence]] this function could
 *   be merged with that function.
 */
sicmutils.polynomial.richardson.richardson_column = (function sicmutils$polynomial$richardson$richardson_column(var_args){
var G__102276 = arguments.length;
switch (G__102276) {
case 3:
return sicmutils.polynomial.richardson.richardson_column.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sicmutils.polynomial.richardson.richardson_column.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sicmutils.polynomial.richardson.richardson_column.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.polynomial.richardson.richardson_column.cljs$core$IFn$_invoke$arity$3 = (function (xs,col,t){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.richardson.make_tableau.cljs$core$IFn$_invoke$arity$2(xs,t),col);
}));

(sicmutils.polynomial.richardson.richardson_column.cljs$core$IFn$_invoke$arity$4 = (function (xs,col,t,p_seq){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.richardson.make_tableau.cljs$core$IFn$_invoke$arity$3(xs,t,p_seq),col);
}));

(sicmutils.polynomial.richardson.richardson_column.cljs$core$IFn$_invoke$arity$5 = (function (xs,col,t,p,q){
var arithmetic_p_q = cljs.core.iterate((function (p1__102274_SHARP_){
return (q + p1__102274_SHARP_);
}),p);
return sicmutils.polynomial.richardson.richardson_column.cljs$core$IFn$_invoke$arity$4(xs,col,t,arithmetic_p_q);
}));

(sicmutils.polynomial.richardson.richardson_column.cljs$lang$maxFixedArity = 5);

/**
 * Returns a fold expected to process the outputs of some function `A` for inputs
 *   of the form:
 * 
 *   $$A(h), A(h/t), A(h/t^2) \ldots$$
 * 
 *   and generate (when present is called) successively tighter estimates of A(0)
 *   using the algorithm described in [[richardson-sequence]].
 * 
 *   Takes as a required argument:
 * 
 *   - `t`: the ratio between the successive inputs that generated the
 *  data to be processed by this fold (see above)
 * 
 * 
 *   If `initial-p` and `next-p-fn` are not supplied, it's assumed that the order
 *   of the error terms in the taylor series expansion of `A` start at 1 and
 *   increase by 1 with each new term.
 * 
 *   You can tune this by supplying:
 * 
 *   - `initial-p`: The order of the first error term
 *   - `next-p-fn`: a function that will generate the next term given the previous
 *  term
 * 
 *   For the geometrically increasing error series `[2, 4, 6, 8]`, for example,
 *   try
 * 
 *   ```clj
 *   (richardson-fold <t> 2 #(+ % 2))
 *   ```
 */
sicmutils.polynomial.richardson.richardson_fold = (function sicmutils$polynomial$richardson$richardson_fold(var_args){
var G__102288 = arguments.length;
switch (G__102288) {
case 1:
return sicmutils.polynomial.richardson.richardson_fold.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return sicmutils.polynomial.richardson.richardson_fold.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.polynomial.richardson.richardson_fold.cljs$core$IFn$_invoke$arity$1 = (function (t){
return sicmutils.polynomial.richardson.richardson_fold.cljs$core$IFn$_invoke$arity$3(t,(1),cljs.core.inc);
}));

(sicmutils.polynomial.richardson.richardson_fold.cljs$core$IFn$_invoke$arity$3 = (function (t,initial_p,next_p_fn){
var prepare = (function sicmutils$polynomial$richardson$prepare(x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [initial_p,x], null);
});
var combine = (function sicmutils$polynomial$richardson$combine(p__102317,p__102318){
var vec__102319 = p__102317;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102319,(0),null);
var ah_over_t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102319,(1),null);
var vec__102322 = p__102318;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102322,(0),null);
var ah = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102322,(1),null);
var t_STAR__STAR_p = Math.pow(t,p);
var t_STAR__STAR_p_1 = (t_STAR__STAR_p - (1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(next_p_fn.cljs$core$IFn$_invoke$arity$1 ? next_p_fn.cljs$core$IFn$_invoke$arity$1(p) : next_p_fn.call(null,p)),(((t_STAR__STAR_p * ah_over_t) - ah) / t_STAR__STAR_p_1)], null);
});
var present = (function sicmutils$polynomial$richardson$present(row){
return cljs.core.peek(cljs.core.last(row));
});
return sicmutils.polynomial.interpolate.tableau_fold_fn(prepare,combine,present);
}));

(sicmutils.polynomial.richardson.richardson_fold.cljs$lang$maxFixedArity = 3);

/**
 * Returns a function that consumes an entire sequence `xs` of points of the form
 *   `A(h), A(h/t), A(h/t^2),...` (where `t` is the `t` argument supplied here) and
 *   returns the best approximation of `A(0)` using the algorithm described
 *   in [[richardson-sequence]].
 * 
 *   Equivalent to `(last ([[richardson-sequence]] t))`
 * 
 *   See [[richardson-fold]] for all supported arities; all arguments are passed
 *   through to [[richardson-fold]].
 */
sicmutils.polynomial.richardson.richardson_sum = (function sicmutils$polynomial$richardson$richardson_sum(var_args){
var args__4870__auto__ = [];
var len__4864__auto___102508 = arguments.length;
var i__4865__auto___102509 = (0);
while(true){
if((i__4865__auto___102509 < len__4864__auto___102508)){
args__4870__auto__.push((arguments[i__4865__auto___102509]));

var G__102510 = (i__4865__auto___102509 + (1));
i__4865__auto___102509 = G__102510;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sicmutils.polynomial.richardson.richardson_sum.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sicmutils.polynomial.richardson.richardson_sum.cljs$core$IFn$_invoke$arity$variadic = (function (t,opts){
return sicmutils.algebra.fold.fold__GT_sum_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sicmutils.polynomial.richardson.richardson_fold,t,opts));
}));

(sicmutils.polynomial.richardson.richardson_sum.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sicmutils.polynomial.richardson.richardson_sum.cljs$lang$applyTo = (function (seq102329){
var G__102330 = cljs.core.first(seq102329);
var seq102329__$1 = cljs.core.next(seq102329);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__102330,seq102329__$1);
}));

/**
 * Returns a function that consumes an entire sequence `xs` of points of the form
 *   `A(h), A(h/t), A(h/t^2),...` (where `t` is the `t` argument supplied here) and
 *   returns a lazy sequence of successive approximations `A(0)` using the
 *   algorithm described in [[richardson-sequence]].
 * 
 *   Equivalent to `([[richardson-sequence]] t)`.
 * 
 *   See [[richardson-fold]] for all supported arities; all arguments are passed
 *   through to [[richardson-fold]].
 */
sicmutils.polynomial.richardson.richardson_scan = (function sicmutils$polynomial$richardson$richardson_scan(var_args){
var args__4870__auto__ = [];
var len__4864__auto___102511 = arguments.length;
var i__4865__auto___102512 = (0);
while(true){
if((i__4865__auto___102512 < len__4864__auto___102511)){
args__4870__auto__.push((arguments[i__4865__auto___102512]));

var G__102513 = (i__4865__auto___102512 + (1));
i__4865__auto___102512 = G__102513;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sicmutils.polynomial.richardson.richardson_scan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sicmutils.polynomial.richardson.richardson_scan.cljs$core$IFn$_invoke$arity$variadic = (function (t,opts){
return sicmutils.algebra.fold.fold__GT_scan_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sicmutils.polynomial.richardson.richardson_fold,t,opts));
}));

(sicmutils.polynomial.richardson.richardson_scan.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sicmutils.polynomial.richardson.richardson_scan.cljs$lang$applyTo = (function (seq102359){
var G__102360 = cljs.core.first(seq102359);
var seq102359__$1 = cljs.core.next(seq102359);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__102360,seq102359__$1);
}));


//# sourceMappingURL=sicmutils.polynomial.richardson.js.map
