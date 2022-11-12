goog.provide('sicmutils.polynomial.interpolate');
/**
 * Generates a lagrange interpolating polynomial that fits every point in the
 *   supplied sequence `points` (of form `[x (f x)]`) and returns the value of the
 *   polynomial evaluated at `x`.
 * 
 *   The Lagrange polynomial has this form:
 * 
 *   ```
 *   g(x) =  (f(a) * [(x-b)(x-c)...] / [(a-b)(a-c)...])
 *      + (f(b) * [(x-a)(x-c)...] / [(b-a)(b-c)...])
 *      + ...
 *   ```
 * 
 *   for points `[a f(a)], [b f(b)], [c f(c)]` etc.
 * 
 *   This particular method of interpolating `x` into the polynomial is
 *   inefficient; any new calculation requires fully recomputing. Takes `O(n^2)`
 *   operations in the number of points.
 *   
 */
sicmutils.polynomial.interpolate.lagrange = (function sicmutils$polynomial$interpolate$lagrange(points,x){
var points__$1 = cljs.core.vec(points);
var n = cljs.core.count(points__$1);
var build_term = (function (i,p__85480){
var vec__85482 = p__85480;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85482,(0),null);
var fa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85482,(1),null);
var others = (function (){var iter__4652__auto__ = (function sicmutils$polynomial$interpolate$lagrange_$_iter__85488(s__85489){
return (new cljs.core.LazySeq(null,(function (){
var s__85489__$1 = s__85489;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__85489__$1);
if(temp__5753__auto__){
var s__85489__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__85489__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__85489__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__85491 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__85490 = (0);
while(true){
if((i__85490 < size__4651__auto__)){
var j = cljs.core._nth(c__4650__auto__,i__85490);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i,j)){
cljs.core.chunk_append(b__85491,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(points__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(0)], null)));

var G__85674 = (i__85490 + (1));
i__85490 = G__85674;
continue;
} else {
var G__85675 = (i__85490 + (1));
i__85490 = G__85675;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__85491),sicmutils$polynomial$interpolate$lagrange_$_iter__85488(cljs.core.chunk_rest(s__85489__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__85491),null);
}
} else {
var j = cljs.core.first(s__85489__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i,j)){
return cljs.core.cons(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(points__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(0)], null)),sicmutils$polynomial$interpolate$lagrange_$_iter__85488(cljs.core.rest(s__85489__$2)));
} else {
var G__85676 = cljs.core.rest(s__85489__$2);
s__85489__$1 = G__85676;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
})();
var p = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__85476_SHARP_){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(x,p1__85476_SHARP_);
}),others));
var q = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__85477_SHARP_){
return sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(a,p1__85477_SHARP_);
}),others));
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic.invert.cljs$core$IFn$_invoke$arity$1(q),fa,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p], 0));
});
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(build_term),sicmutils.generic._PLUS_,points__$1);
});
/**
 * Top-down implementation of [Neville's
 *   algorithm]((https://en.wikipedia.org/wiki/Neville%27s_algorithm))
 * 
 *   Returns the value of `P(x)`, where `P` is a polynomial fit (using Neville's
 *   algorithm) to every point in the supplied sequence `points` (of form `[x (f
 *   x)]`)
 * 
 *   The efficiency and results should be identical to
 *   [[sicmutils.numerical.interpolate/lagrange]]. This function represents a step
 *   on the journey toward more incremental methods of polynomial interpolation.
 * 
 *   References:
 * 
 *   - Press's Numerical Recipes (p103), [chapter 3](http://phys.uri.edu/nigh/NumRec/bookfpdf/f3-1.pdf)
 *   - Wikipedia, [Neville's Algorithm](https://en.wikipedia.org/wiki/Neville%27s_algorithm)
 */
sicmutils.polynomial.interpolate.neville_recursive = (function sicmutils$polynomial$interpolate$neville_recursive(points,x){
var evaluate = (function sicmutils$polynomial$interpolate$neville_recursive_$_evaluate(points__$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(points__$1))){
var vec__85542 = points__$1;
var vec__85545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85542,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85545,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85545,(1),null);
return y;
} else {
var l_branch = cljs.core.pop(points__$1);
var r_branch = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(points__$1,(1));
var vec__85550 = cljs.core.first(points__$1);
var xl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85550,(0),null);
var vec__85553 = cljs.core.peek(points__$1);
var xr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85553,(0),null);
return sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(x,xr),sicmutils$polynomial$interpolate$neville_recursive_$_evaluate(l_branch)),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(xl,x),sicmutils$polynomial$interpolate$neville_recursive_$_evaluate(r_branch))),sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(xl,xr));
}
});
return evaluate(cljs.core.vec(points));
});
/**
 * Processes each point of the form `[x, (f x)]` into:
 * 
 *   ```
 *   $$[x_l, x_r, p]$$
 *   ```
 * 
 *   where $p$ is the polynomial that spans all points from $l$ to $r$. The
 *   recursion starts with $p = f(x)$.
 *   
 */
sicmutils.polynomial.interpolate.neville_prepare = (function sicmutils$polynomial$interpolate$neville_prepare(p__85566){
var vec__85568 = p__85566;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85568,(0),null);
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85568,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x,fx], null);
});
/**
 * Given some value $x$, returns a function that combines $l$ and $r$ entries in
 *   the tableau, arranged like this:
 * 
 *   ```
 *   l -- return
 *   /
 *  /
 * /
 *   r
 *   ```
 * 
 *   generates the `return` entry of the form
 * 
 *   $$[x_l, x_r, p]$$.
 */
sicmutils.polynomial.interpolate.neville_combine_fn = (function sicmutils$polynomial$interpolate$neville_combine_fn(x){
return (function (p__85574,p__85575){
var vec__85576 = p__85574;
var xl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85576,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85576,(1),null);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85576,(2),null);
var vec__85579 = p__85575;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85579,(0),null);
var xr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85579,(1),null);
var pr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85579,(2),null);
var plr = sicmutils.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(x,xr),pl),sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(xl,x),pr)),sicmutils.generic._.cljs$core$IFn$_invoke$arity$2(xl,xr));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xl,xr,plr], null);
});
});
/**
 * This function takes some point $x$, and returns a new function that takes some
 *   column in the tableau and generates the next column.
 */
sicmutils.polynomial.interpolate.neville_next_column = (function sicmutils$polynomial$interpolate$neville_next_column(x){
return (function (prev_column){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(sicmutils.polynomial.interpolate.neville_combine_fn(x),prev_column,cljs.core.rest(prev_column));
});
});
sicmutils.polynomial.interpolate.neville_tableau = (function sicmutils$polynomial$interpolate$neville_tableau(points,x){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.iterate(sicmutils.polynomial.interpolate.neville_next_column(x),cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.interpolate.neville_prepare,points)));
});
sicmutils.polynomial.interpolate.first_terms = (function sicmutils$polynomial$interpolate$first_terms(tableau){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,tableau);
});
sicmutils.polynomial.interpolate.neville_present = (function sicmutils$polynomial$interpolate$neville_present(row){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.peek,row);
});
/**
 * Takes a potentially lazy sequence of `points` and a point `x` and generates a
 *   lazy sequence of approximations of P(x).
 * 
 *   entry N in the returned sequence is the estimate using a polynomial generated
 *   from the first N points of the input sequence.
 */
sicmutils.polynomial.interpolate.neville_incremental = (function sicmutils$polynomial$interpolate$neville_incremental(points,x){
return sicmutils.polynomial.interpolate.neville_present(sicmutils.polynomial.interpolate.first_terms(sicmutils.polynomial.interpolate.neville_tableau(points,x)));
});
/**
 * Returns a Newton-style approximation tableau, given:
 * 
 *   - `prepare`: a fn that processes each element of the supplied `points` into
 *   the state necessary to calculate future tableau entries.
 * 
 *   - `merge`: a fn of `l`and `r` the tableau entries:
 * 
 *   ```
 *   l -- return
 *   /
 *  /
 * /
 *   r
 *   ```
 * 
 *   the inputs are of the same form returned by `prepare`. `merge` should return a
 *   new structure of the same form.
 * 
 *   - `points`: the (potentially lazy) sequence of points used to generate the
 *   first column of the tableau.
 *   
 */
sicmutils.polynomial.interpolate.tableau_fn = (function sicmutils$polynomial$interpolate$tableau_fn(prepare,merge,points){
var next_col = (function (previous_col){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(merge,previous_col,cljs.core.rest(previous_col));
});
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.iterate(next_col,cljs.core.map.cljs$core$IFn$_invoke$arity$2(prepare,points)));
});
/**
 * Returns a tableau merge function. Identical to [[neville-combine-fn]] but uses
 *   native operations instead of generic operations.
 */
sicmutils.polynomial.interpolate.neville_merge = (function sicmutils$polynomial$interpolate$neville_merge(x){
return (function (p__85598,p__85599){
var vec__85600 = p__85598;
var xl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85600,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85600,(1),null);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85600,(2),null);
var vec__85603 = p__85599;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85603,(0),null);
var xr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85603,(1),null);
var pr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85603,(2),null);
var p = ((((x - xr) * pl) + ((xl - x) * pr)) / (xl - xr));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xl,xr,p], null);
});
});
/**
 * Takes:
 * 
 *   - a (potentially lazy) sequence of `points` of the form `[x (f x)]` and
 *   - a point `x` to interpolate
 * 
 *   and generates a lazy sequence of approximations of `P(x)`. Each entry in the
 *   return sequence incorporates one more point from `points` into the `P(x)`
 *   estimate.
 * 
 *   Said another way: the Nth in the returned sequence is the estimate using a
 *   polynomial generated from the first `N` points of the input sequence:
 * 
 *   ```
 *   p0 p01 p012 p0123 p01234
 *   ```
 * 
 *   This function generates each estimate using Neville's algorithm:
 * 
 *   ```
 *   $$P(x) = [(x - x_r) P_l(x) - (x - x_l) P_r(x)] / [x_l - x_r]$$
 *   ```
 * 
 *   ### Column
 * 
 *   If you supply an integer for the third `column` argument, `neville` will
 *   return that /column/ of the interpolation tableau instead of the first row.
 *   This will give you a sequence of nth-order polynomial approximations taken
 *   between point `i` and the next `n` points.
 * 
 *   As a reminder, this is the shape of the tableau:
 * 
 *   ```
 * p0 p01 p012 p0123 p01234
 * p1 p12 p123 p1234 .
 * p2 p23 p234 .     .
 * p3 p34 .    .     .
 * p4 .   .    .     .
 *   ```
 * 
 *   So supplying a `column` of `1` gives a sequence of linear approximations
 *   between pairs of points; `2` gives quadratic approximations between successive
 *   triplets, etc.
 * 
 *   References:
 * 
 *   - [Press's Numerical Recipes (p103), chapter 3](http://phys.uri.edu/nigh/NumRec/bookfpdf/f3-1.pdf)
 *   - Wikipedia, [Neville's Algorithm](https://en.wikipedia.org/wiki/Neville%27s_algorithm)
 */
sicmutils.polynomial.interpolate.neville = (function sicmutils$polynomial$interpolate$neville(var_args){
var G__85607 = arguments.length;
switch (G__85607) {
case 2:
return sicmutils.polynomial.interpolate.neville.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.polynomial.interpolate.neville.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.polynomial.interpolate.neville.cljs$core$IFn$_invoke$arity$2 = (function (points,x){
return sicmutils.polynomial.interpolate.neville_present(sicmutils.polynomial.interpolate.first_terms(sicmutils.polynomial.interpolate.tableau_fn(sicmutils.polynomial.interpolate.neville_prepare,sicmutils.polynomial.interpolate.neville_merge(x),points)));
}));

(sicmutils.polynomial.interpolate.neville.cljs$core$IFn$_invoke$arity$3 = (function (points,x,column){
return sicmutils.polynomial.interpolate.neville_present(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sicmutils.polynomial.interpolate.tableau_fn(sicmutils.polynomial.interpolate.neville_prepare,sicmutils.polynomial.interpolate.neville_merge(x),points),column));
}));

(sicmutils.polynomial.interpolate.neville.cljs$lang$maxFixedArity = 3);

/**
 * Processes an initial point [x (f x)] into the required state:
 * 
 *   [x_l, x_r, C, D]
 * 
 *   The recursion starts with $C = D = f(x)$.
 */
sicmutils.polynomial.interpolate.mn_prepare = (function sicmutils$polynomial$interpolate$mn_prepare(p__85608){
var vec__85609 = p__85608;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85609,(0),null);
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85609,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x,fx,fx], null);
});
/**
 * Implements the recursion rules described above to generate x_l, x_r, C and D
 *   for a tableau node, given the usual left and left-up tableau entries.
 */
sicmutils.polynomial.interpolate.mn_merge = (function sicmutils$polynomial$interpolate$mn_merge(x){
return (function (p__85615,p__85616){
var vec__85617 = p__85615;
var xl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85617,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85617,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85617,(2),null);
var dl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85617,(3),null);
var vec__85620 = p__85616;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85620,(0),null);
var xr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85620,(1),null);
var cr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85620,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85620,(3),null);
var diff = (cr - dl);
var den = (xl - xr);
var factor = (diff / den);
var c = (factor * (xl - x));
var d = (factor * (xr - x));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [xl,xr,c,d], null);
});
});
/**
 * Returns a (lazy) sequence of estimates by successively adding C values from the
 *   first entry of each tableau column. Each C value is the delta from the
 *   previous estimate.
 */
sicmutils.polynomial.interpolate.mn_present = (function sicmutils$polynomial$interpolate$mn_present(row){
return sicmutils.util.aggregate.scan.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__85628){
var vec__85629 = p__85628;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85629,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85629,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85629,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85629,(3),null);
return c;
}),row));
});
/**
 * Similar to [[neville]] (the interface is identical) but slightly more efficient.
 *   Internally this builds up its estimates by tracking the delta from the
 *   previous estimate.
 * 
 *   This non-obvious change lets us swap an addition in for a multiplication,
 *   making the algorithm slightly more efficient.
 * 
 *   See [[neville]] for usage information, and info about the required structure
 *   of the arguments.
 * 
 *   The structure of the [[modified-neville]] algorithm makes it difficult to
 *   select a particular column. See [[neville]] if you'd like to generate
 *   polynomial approximations between successive sequences of points.
 * 
 *   References:
 * 
 *   - ["A comparison of algorithms for polynomial interpolation"](https://www.sciencedirect.com/science/article/pii/0771050X82900511), A. Macleod
 *   - [Press's Numerical Recipes (p103), chapter 3](http://phys.uri.edu/nigh/NumRec/bookfpdf/f3-1.pdf)
 */
sicmutils.polynomial.interpolate.modified_neville = (function sicmutils$polynomial$interpolate$modified_neville(points,x){
return sicmutils.polynomial.interpolate.mn_present(sicmutils.polynomial.interpolate.first_terms(sicmutils.polynomial.interpolate.tableau_fn(sicmutils.polynomial.interpolate.mn_prepare,sicmutils.polynomial.interpolate.mn_merge(x),points)));
});
/**
 * Given `prepare` and `merge` and `present` functions, returns a fold capable of
 *   aggregating a point of the form [x, f(x)] into an accumulating tableau
 *   row (generating the next tableau row).
 * 
 *   The 0-arity of the returned function returns an empty row, `[]`.
 * 
 *   The 1-arity calls the supplied `present` on the accumulated tableau row.
 * 
 *   The 2-arity scans the supplied `merge` across all entries in the accumulating
 *   row, producing a new row.
 * 
 *   ### More detail on the arguments:
 * 
 *   - `prepare`: a fn that processes each element of the supplied `points` into
 *   the state necessary to calculate future tableau entries.
 * 
 *   - `merge`: a fn of `l`and `r` the tableau entries:
 * 
 *   l -- return
 *   /
 *  /
 * /
 *   r
 * 
 *   the inputs are of the same form returned by `prepare`. `merge` should return a
 *   new structure of the same form.
 * 
 *   - `present`: Transforms a `tableau` row into an estimate at some value `x` of
 *   the polynomial interpolated to hit all supplied points.
 */
sicmutils.polynomial.interpolate.tableau_fold_fn = (function sicmutils$polynomial$interpolate$tableau_fold_fn(prepare,merge,present){
return (function() {
var G__85749 = null;
var G__85749__0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});
var G__85749__1 = (function (row){
return (present.cljs$core$IFn$_invoke$arity$1 ? present.cljs$core$IFn$_invoke$arity$1(row) : present.call(null,row));
});
var G__85749__2 = (function (prev_row,point){
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(merge,(prepare.cljs$core$IFn$_invoke$arity$1 ? prepare.cljs$core$IFn$_invoke$arity$1(point) : prepare.call(null,point)),prev_row);
});
G__85749 = function(prev_row,point){
switch(arguments.length){
case 0:
return G__85749__0.call(this);
case 1:
return G__85749__1.call(this,prev_row);
case 2:
return G__85749__2.call(this,prev_row,point);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__85749.cljs$core$IFn$_invoke$arity$0 = G__85749__0;
G__85749.cljs$core$IFn$_invoke$arity$1 = G__85749__1;
G__85749.cljs$core$IFn$_invoke$arity$2 = G__85749__2;
return G__85749;
})()
});
/**
 * Given some point `x`, returns a fold that accumulates rows of an interpolation
 *   tableau providing successively better estimates (at the value `x`) of a
 *   polynomial interpolated to all seen points.
 * 
 *   The 2-arity aggregation step takes:
 * 
 *   - `previous-row`: previous row of an interpolation tableau
 *   - a new point of the form `[x_new (f x_new)]`
 * 
 *  and returns the next row of the tableau using the algorithm described in
 *   [[neville]].
 */
sicmutils.polynomial.interpolate.neville_fold = (function sicmutils$polynomial$interpolate$neville_fold(x){
return sicmutils.polynomial.interpolate.tableau_fold_fn(sicmutils.polynomial.interpolate.neville_prepare,sicmutils.polynomial.interpolate.neville_merge(x),(function (row){
return cljs.core.peek(cljs.core.last(row));
}));
});
/**
 * Aggregates intermediate deltas to produce an estimate for the final value in
 *   the supplied row.
 */
sicmutils.polynomial.interpolate.mn_present_final = (function sicmutils$polynomial$interpolate$mn_present_final(row){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__85644){
var vec__85645 = p__85644;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85645,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85645,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85645,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85645,(3),null);
return c;
})),sicmutils.util.aggregate._STAR_fold_STAR_,row);
});
/**
 * Given some point `x`, returns a fold that accumulates rows of an interpolation
 *   tableau providing successively better estimates (at the value `x`) of a
 *   polynomial interpolated to all seen points.
 * 
 *   The 2-arity aggregation step takes:
 * 
 *   - `previous-row`: previous row of an interpolation tableau
 *   - a new point of the form `[x_new (f x_new)]`
 * 
 *   and returns the next row of the tableau using the algorithm described in
 *   [[modified-neville]].
 */
sicmutils.polynomial.interpolate.modified_neville_fold = (function sicmutils$polynomial$interpolate$modified_neville_fold(x){
return sicmutils.polynomial.interpolate.tableau_fold_fn(sicmutils.polynomial.interpolate.mn_prepare,sicmutils.polynomial.interpolate.mn_merge(x),sicmutils.polynomial.interpolate.mn_present_final);
});
/**
 * Returns a function that consumes an entire sequence `xs` of points of the form
 *   `[x_i, f(x_i)]` and returns the best approximation of `x` using a polynomial
 *   fitted to all points in `xs` using the algorithm described in [[neville]].
 * 
 *   Faster than, but equivalent to, `(last ([[neville]] xs x))`
 */
sicmutils.polynomial.interpolate.neville_sum = (function sicmutils$polynomial$interpolate$neville_sum(x){
return sicmutils.algebra.fold.fold__GT_sum_fn.cljs$core$IFn$_invoke$arity$1(sicmutils.polynomial.interpolate.neville_fold(x));
});
/**
 * Returns a function that consumes an entire sequence `xs` of points of the form
 *   `[x_i, f(x_i)]` and returns a lazy sequence of successive approximations of
 *   `x` using polynomials fitted to the first point, then the first and second
 *   points, etc. using the algorithm described in [[neville]].
 * 
 *   Equivalent to `([[neville]] xs x)`.
 */
sicmutils.polynomial.interpolate.neville_scan = (function sicmutils$polynomial$interpolate$neville_scan(x){
return sicmutils.algebra.fold.fold__GT_scan_fn.cljs$core$IFn$_invoke$arity$1(sicmutils.polynomial.interpolate.neville_fold(x));
});
/**
 * Returns a function that consumes an entire sequence `xs` of points of the form
 *   `[x_i, f(x_i)]` and returns the best approximation of `x` using a polynomial
 *   fitted to all points in `xs` using the algorithm described
 *   in [[modified-neville]].
 * 
 *   Faster than, but equivalent to, `(last ([[modified-neville]] xs x))`
 */
sicmutils.polynomial.interpolate.modified_neville_sum = (function sicmutils$polynomial$interpolate$modified_neville_sum(x){
return sicmutils.algebra.fold.fold__GT_sum_fn.cljs$core$IFn$_invoke$arity$1(sicmutils.polynomial.interpolate.modified_neville_fold(x));
});
/**
 * Returns a function that consumes an entire sequence `xs` of points of the form
 *   `[x_i, f(x_i)]` and returns a lazy sequence of successive approximations of
 *   `x` using polynomials fitted to the first point, then the first and second
 *   points, etc. using the algorithm described in [[modified-neville]].
 * 
 *   Equivalent to `([[modified-neville]] xs x)`.
 */
sicmutils.polynomial.interpolate.modified_neville_scan = (function sicmutils$polynomial$interpolate$modified_neville_scan(x){
return sicmutils.algebra.fold.fold__GT_scan_fn.cljs$core$IFn$_invoke$arity$1(sicmutils.polynomial.interpolate.modified_neville_fold(x));
});

//# sourceMappingURL=sicmutils.polynomial.interpolate.js.map
