goog.provide('sicmutils.env');
/**
 * A shim so that ref can act like nth in SICM contexts, as clojure core ref
 *   elsewhere.
 */
sicmutils.env.ref = (function sicmutils$env$ref(var_args){
var G__103880 = arguments.length;
switch (G__103880) {
case 1:
return sicmutils.env.ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___103965 = arguments.length;
var i__4865__auto___103966 = (0);
while(true){
if((i__4865__auto___103966 < len__4864__auto___103965)){
args_arr__4885__auto__.push((arguments[i__4865__auto___103966]));

var G__103967 = (i__4865__auto___103966 + (1));
i__4865__auto___103966 = G__103967;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((1)),(0),null));
return sicmutils.env.ref.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4886__auto__);

}
});

(sicmutils.env.ref.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(sicmutils.env.ref.cljs$core$IFn$_invoke$arity$variadic = (function (a,ks){
if(sicmutils.function$.function_QMARK_(a)){
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__103875_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sicmutils.env.ref,p1__103875_SHARP_,ks);
}),a], 0));
} else {
if(sicmutils.operator.operator_QMARK_(a)){
return sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$2(sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__103876_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sicmutils.env.ref,p1__103876_SHARP_,ks);
}),sicmutils.operator.procedure(a)], 0)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"compose","compose",1144740903,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"component","component",-1098498987,null),null,(1),null)),ks))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sicmutils.operator.name(a),null,(1),null))], 0)))));
} else {
if(((cljs.core.associative_QMARK_(a)) && (cljs.core.every_QMARK_(sicmutils.value.integral_QMARK_,ks)))){
if(sicmutils.matrix.matrix_QMARK_(a)){
return sicmutils.matrix.get_in(a,ks);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(a,ks);
}
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(a,ks);
}

}
}
}));

/** @this {Function} */
(sicmutils.env.ref.cljs$lang$applyTo = (function (seq103878){
var G__103879 = cljs.core.first(seq103878);
var seq103878__$1 = cljs.core.next(seq103878);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103879,seq103878__$1);
}));

(sicmutils.env.ref.cljs$lang$maxFixedArity = (1));

/**
 * Given a sequence of `selectors`, return a function that accepts some object `x`
 *   and returns:
 * 
 *   ```clojure
 *   (apply ref x selectors)
 *   ```
 *   
 */
sicmutils.env.component = (function sicmutils$env$component(var_args){
var args__4870__auto__ = [];
var len__4864__auto___103968 = arguments.length;
var i__4865__auto___103969 = (0);
while(true){
if((i__4865__auto___103969 < len__4864__auto___103968)){
args__4870__auto__.push((arguments[i__4865__auto___103969]));

var G__103970 = (i__4865__auto___103969 + (1));
i__4865__auto___103969 = G__103970;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sicmutils.env.component.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sicmutils.env.component.cljs$core$IFn$_invoke$arity$variadic = (function (selectors){
return (function (x){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sicmutils.env.ref,x,selectors);
});
}));

(sicmutils.env.component.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.env.component.cljs$lang$applyTo = (function (seq103886){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq103886));
}));

/**
 * A shim. Dispatches to [[d/partial]] when all the arguments are integers; falls
 *   back to [[clojure.core/partial]] (partial function application) otherwise.
 */
sicmutils.env.partial = (function sicmutils$env$partial(var_args){
var args__4870__auto__ = [];
var len__4864__auto___103971 = arguments.length;
var i__4865__auto___103972 = (0);
while(true){
if((i__4865__auto___103972 < len__4864__auto___103971)){
args__4870__auto__.push((arguments[i__4865__auto___103972]));

var G__103973 = (i__4865__auto___103972 + (1));
i__4865__auto___103972 = G__103973;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sicmutils.env.partial.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sicmutils.env.partial.cljs$core$IFn$_invoke$arity$variadic = (function (selectors){
if(cljs.core.every_QMARK_(cljs.core.integer_QMARK_,selectors)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.calculus.derivative.partial,selectors);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial,selectors);
}
}));

(sicmutils.env.partial.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.env.partial.cljs$lang$applyTo = (function (seq103891){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq103891));
}));

/**
 * The mathematical constant [Pi](https://en.wikipedia.org/wiki/Pi).
 */
sicmutils.env.pi = Math.PI;
/**
 * The negation of the mathematical
 * constant [Pi](https://en.wikipedia.org/wiki/Pi).
 */
sicmutils.env._pi = sicmutils.generic._.cljs$core$IFn$_invoke$arity$1(Math.PI);
/**
 * The mathematical
 *   constant [e](https://en.wikipedia.org/wiki/E_(mathematical_constant)),
 *   sometimes known as Euler's Number.
 */
sicmutils.env.euler = Math.E;
/**
 * The mathematical constant known as the [Euler–Mascheroni
 *   constant](https://en.wikipedia.org/wiki/Euler%E2%80%93Mascheroni_constant) and
 *   sometimes as Euler's constant.
 */
sicmutils.env.euler_gamma = 0.5772156649015329;
/**
 * The mathematical
 *   constant [𝜑](https://en.wikipedia.org/wiki/Golden_ratio), also known as the
 *   Golden Ratio.
 */
sicmutils.env.phi = (function (){var G__103899 = (Math.sqrt(5.0) + (1));
var G__103900 = 2.0;
return (sicmutils.generic.divide.cljs$core$IFn$_invoke$arity$2 ? sicmutils.generic.divide.cljs$core$IFn$_invoke$arity$2(G__103899,G__103900) : sicmutils.generic.divide.call(null,G__103899,G__103900));
})();
sicmutils.env.s_COLON_generate = sicmutils.structure.generate;
sicmutils.env.m_COLON_generate = sicmutils.matrix.generate;
sicmutils.env.v_COLON_make_basis_unit = sicmutils.structure.basis_unit;
sicmutils.env.matrix_by_rows = sicmutils.matrix.by_rows;
sicmutils.env.matrix_by_cols = sicmutils.matrix.by_cols;
sicmutils.env.row_matrix = sicmutils.matrix.row;
sicmutils.env.column_matrix = sicmutils.matrix.column;
sicmutils.env.principal_value = sicmutils.value.principal_value;
sicmutils.env.series = sicmutils.series.series;
sicmutils.env.power_series = sicmutils.series.power_series;
sicmutils.env.constant_series = sicmutils.series.constant;
sicmutils.env.series_COLON_sum = sicmutils.series.sum;
sicmutils.env.metric_COLON_invert = sicmutils.calculus.metric.invert;
sicmutils.env.seq_COLON_print = sicmutils.util.stream.seq_print;
sicmutils.env.seq_COLON_pprint = sicmutils.util.stream.pprint;
sicmutils.env.i_COLON_outer_product = sicmutils.calculus.indexed.outer_product;
sicmutils.env.i_COLON_contract = sicmutils.calculus.indexed.contract;
sicmutils.env.frame_params = sicmutils.calculus.frame.params;
/**
 * Returns a string containing a LaTeX representation of `expr`, wrapped in single
 *   `$` to mark the string as an inline LaTeX form.
 */
sicmutils.env.tex$ = (function sicmutils$env$tex$(expr){
return ["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.__GT_TeX(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(expr))),"$"].join('');
});
/**
 * Returns a string containing a LaTeX representation of `expr`, wrapped in double
 *   `$$` to mark the string as a block LaTeX form.
 */
sicmutils.env.tex$$ = (function sicmutils$env$tex$$(expr){
return ["$$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sicmutils.expression.render.__GT_TeX(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(expr))),"$$"].join('');
});
/**
 * Returns a string containing a LaTeX representation of `expr`, wrapped in an
 *   `equation` environment.
 * 
 *   Optionally supply a `:label` keyword argument to set a custom label.
 */
sicmutils.env.__GT_tex_equation = (function sicmutils$env$__GT_tex_equation(var_args){
var args__4870__auto__ = [];
var len__4864__auto___103975 = arguments.length;
var i__4865__auto___103976 = (0);
while(true){
if((i__4865__auto___103976 < len__4864__auto___103975)){
args__4870__auto__.push((arguments[i__4865__auto___103976]));

var G__103977 = (i__4865__auto___103976 + (1));
i__4865__auto___103976 = G__103977;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sicmutils.env.__GT_tex_equation.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sicmutils.env.__GT_tex_equation.cljs$core$IFn$_invoke$arity$variadic = (function (expr,p__103910){
var map__103911 = p__103910;
var map__103911__$1 = cljs.core.__destructure_map(map__103911);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103911__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return sicmutils.expression.render.__GT_TeX.cljs$core$IFn$_invoke$arity$variadic(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(expr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"equation","equation",-499527745),(function (){var or__4253__auto__ = label;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return true;
}
})()], 0));
}));

(sicmutils.env.__GT_tex_equation.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sicmutils.env.__GT_tex_equation.cljs$lang$applyTo = (function (seq103908){
var G__103909 = cljs.core.first(seq103908);
var seq103908__$1 = cljs.core.next(seq103908);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103909,seq103908__$1);
}));

sicmutils.env.literal_number = sicmutils.abstract$.number.literal_number;

sicmutils.env.complex = sicmutils.complex.complex;

sicmutils.env.complex_QMARK_ = sicmutils.complex.complex_QMARK_;

sicmutils.env.arity = sicmutils.function$.arity;

sicmutils.env.compose = sicmutils.function$.compose;

sicmutils.env.arg_shift = sicmutils.function$.arg_shift;

sicmutils.env.arg_scale = sicmutils.function$.arg_scale;

sicmutils.env.I = sicmutils.function$.I;

sicmutils.env.chinese_remainder = sicmutils.modint.chinese_remainder;

sicmutils.env.commutator = sicmutils.operator.commutator;

sicmutils.env.anticommutator = sicmutils.operator.anticommutator;

sicmutils.env.factor = sicmutils.polynomial.factor.factor;

sicmutils.env.numerator = sicmutils.ratio.numerator;

sicmutils.env.denominator = sicmutils.ratio.denominator;

sicmutils.env.ratio_QMARK_ = sicmutils.ratio.ratio_QMARK_;

sicmutils.env.rationalize = sicmutils.ratio.rationalize;

sicmutils.env.binomial_series = sicmutils.series.binomial_series;

sicmutils.env.partial_sums = sicmutils.series.partial_sums;

sicmutils.env.bigint_QMARK_ = sicmutils.util.bigint_QMARK_;

sicmutils.env.bigint = sicmutils.util.bigint;

sicmutils.env._STAR_ = sicmutils.generic._STAR_;

sicmutils.env._PLUS_ = sicmutils.generic._PLUS_;

sicmutils.env._ = sicmutils.generic._;

sicmutils.env._SLASH_ = sicmutils.generic._SLASH_;

sicmutils.env.divide = sicmutils.generic.divide;

sicmutils.env.negate = sicmutils.generic.negate;

sicmutils.env.negative_QMARK_ = sicmutils.generic.negative_QMARK_;

sicmutils.env.infinite_QMARK_ = sicmutils.generic.infinite_QMARK_;

sicmutils.env.invert = sicmutils.generic.invert;

sicmutils.env.abs = sicmutils.generic.abs;

sicmutils.env.sqrt = sicmutils.generic.sqrt;

sicmutils.env.quotient = sicmutils.generic.quotient;

sicmutils.env.remainder = sicmutils.generic.remainder;

sicmutils.env.modulo = sicmutils.generic.modulo;

sicmutils.env.floor = sicmutils.generic.floor;

sicmutils.env.ceiling = sicmutils.generic.ceiling;

sicmutils.env.integer_part = sicmutils.generic.integer_part;

sicmutils.env.fractional_part = sicmutils.generic.fractional_part;

sicmutils.env.expt = sicmutils.generic.expt;

sicmutils.env.exp = sicmutils.generic.exp;

sicmutils.env.exp2 = sicmutils.generic.exp2;

sicmutils.env.exp10 = sicmutils.generic.exp10;

sicmutils.env.log = sicmutils.generic.log;

sicmutils.env.log2 = sicmutils.generic.log2;

sicmutils.env.log10 = sicmutils.generic.log10;

sicmutils.env.gcd = sicmutils.generic.gcd;

sicmutils.env.lcm = sicmutils.generic.lcm;

sicmutils.env.exact_divide = sicmutils.generic.exact_divide;

sicmutils.env.square = sicmutils.generic.square;

sicmutils.env.cube = sicmutils.generic.cube;

sicmutils.env.cos = sicmutils.generic.cos;

sicmutils.env.sin = sicmutils.generic.sin;

sicmutils.env.tan = sicmutils.generic.tan;

sicmutils.env.cot = sicmutils.generic.cot;

sicmutils.env.sec = sicmutils.generic.sec;

sicmutils.env.csc = sicmutils.generic.csc;

sicmutils.env.atan = sicmutils.generic.atan;

sicmutils.env.acos = sicmutils.generic.acos;

sicmutils.env.asin = sicmutils.generic.asin;

sicmutils.env.acot = sicmutils.generic.acot;

sicmutils.env.asec = sicmutils.generic.asec;

sicmutils.env.acsc = sicmutils.generic.acsc;

sicmutils.env.cosh = sicmutils.generic.cosh;

sicmutils.env.sinh = sicmutils.generic.sinh;

sicmutils.env.tanh = sicmutils.generic.tanh;

sicmutils.env.coth = sicmutils.generic.coth;

sicmutils.env.sech = sicmutils.generic.sech;

sicmutils.env.csch = sicmutils.generic.csch;

sicmutils.env.acosh = sicmutils.generic.acosh;

sicmutils.env.asinh = sicmutils.generic.asinh;

sicmutils.env.atanh = sicmutils.generic.atanh;

sicmutils.env.acoth = sicmutils.generic.acoth;

sicmutils.env.asech = sicmutils.generic.asech;

sicmutils.env.acsch = sicmutils.generic.acsch;

sicmutils.env.sinc = sicmutils.generic.sinc;

sicmutils.env.tanc = sicmutils.generic.tanc;

sicmutils.env.sinhc = sicmutils.generic.sinhc;

sicmutils.env.tanhc = sicmutils.generic.tanhc;

sicmutils.env.make_rectangular = sicmutils.generic.make_rectangular;

sicmutils.env.make_polar = sicmutils.generic.make_polar;

sicmutils.env.real_part = sicmutils.generic.real_part;

sicmutils.env.imag_part = sicmutils.generic.imag_part;

sicmutils.env.magnitude = sicmutils.generic.magnitude;

sicmutils.env.angle = sicmutils.generic.angle;

sicmutils.env.conjugate = sicmutils.generic.conjugate;

sicmutils.env.transpose = sicmutils.generic.transpose;

sicmutils.env.trace = sicmutils.generic.trace;

sicmutils.env.determinant = sicmutils.generic.determinant;

sicmutils.env.dimension = sicmutils.generic.dimension;

sicmutils.env.dot_product = sicmutils.generic.dot_product;

sicmutils.env.inner_product = sicmutils.generic.inner_product;

sicmutils.env.outer_product = sicmutils.generic.outer_product;

sicmutils.env.cross_product = sicmutils.generic.cross_product;

sicmutils.env.partial_derivative = sicmutils.generic.partial_derivative;

sicmutils.env.Lie_derivative = sicmutils.generic.Lie_derivative;

sicmutils.env.solve_linear = sicmutils.generic.solve_linear;

sicmutils.env.solve_linear_left = sicmutils.generic.solve_linear_left;

sicmutils.env.solve_linear_right = sicmutils.generic.solve_linear_right;

sicmutils.env.simplify = sicmutils.generic.simplify;

sicmutils.env.compatible_shape = sicmutils.structure.compatible_shape;

sicmutils.env.compatible_zero = sicmutils.structure.compatible_zero;

sicmutils.env.dual_zero = sicmutils.structure.dual_zero;

sicmutils.env.down = sicmutils.structure.down;

sicmutils.env.mapr = sicmutils.structure.mapr;

sicmutils.env.sumr = sicmutils.structure.sumr;

sicmutils.env.orientation = sicmutils.structure.orientation;

sicmutils.env.structure__GT_vector = sicmutils.structure.structure__GT_vector;

sicmutils.env.structure_QMARK_ = sicmutils.structure.structure_QMARK_;

sicmutils.env.up = sicmutils.structure.up;

sicmutils.env.up_QMARK_ = sicmutils.structure.up_QMARK_;

sicmutils.env.vector__GT_down = sicmutils.structure.vector__GT_down;

sicmutils.env.vector__GT_up = sicmutils.structure.vector__GT_up;

sicmutils.env.literal_down = sicmutils.structure.literal_down;

sicmutils.env.literal_up = sicmutils.structure.literal_up;

sicmutils.env.expression_of = sicmutils.expression.expression_of;

sicmutils.env.expression__GT_stream = sicmutils.expression.expression__GT_stream;

sicmutils.env.expression__GT_string = sicmutils.expression.expression__GT_string;

sicmutils.env.print_expression = sicmutils.expression.print_expression;

sicmutils.env.pe = sicmutils.expression.pe;

sicmutils.env.__GT_infix = sicmutils.expression.render.__GT_infix;

sicmutils.env.__GT_TeX = sicmutils.expression.render.__GT_TeX;

sicmutils.env.__GT_JavaScript = sicmutils.expression.render.__GT_JavaScript;

sicmutils.env.basis_QMARK_ = sicmutils.calculus.basis.basis_QMARK_;

sicmutils.env.coordinate_basis_QMARK_ = sicmutils.calculus.basis.coordinate_basis_QMARK_;

sicmutils.env.make_basis = sicmutils.calculus.basis.make_basis;

sicmutils.env.coordinate_system__GT_basis = sicmutils.calculus.basis.coordinate_system__GT_basis;

sicmutils.env.basis__GT_coordinate_system = sicmutils.calculus.basis.basis__GT_coordinate_system;

sicmutils.env.basis__GT_oneform_basis = sicmutils.calculus.basis.basis__GT_oneform_basis;

sicmutils.env.basis__GT_vector_basis = sicmutils.calculus.basis.basis__GT_vector_basis;

sicmutils.env.basis__GT_dimension = sicmutils.calculus.basis.basis__GT_dimension;

sicmutils.env.contract = sicmutils.calculus.basis.contract;

sicmutils.env.vector_basis__GT_dual = sicmutils.calculus.basis.vector_basis__GT_dual;

sicmutils.env.make_constant_vector_field = sicmutils.calculus.basis.make_constant_vector_field;

sicmutils.env.Jacobian = sicmutils.calculus.basis.Jacobian;

sicmutils.env.make_Christoffel_1 = sicmutils.calculus.connection.make_Christoffel_1;

sicmutils.env.metric__GT_Christoffel_1 = sicmutils.calculus.connection.metric__GT_Christoffel_1;

sicmutils.env.metric__GT_Christoffel_2 = sicmutils.calculus.connection.metric__GT_Christoffel_2;

sicmutils.env.literal_Christoffel_1 = sicmutils.calculus.connection.literal_Christoffel_1;

sicmutils.env.literal_Christoffel_2 = sicmutils.calculus.connection.literal_Christoffel_2;

sicmutils.env.metric__GT_connection_1 = sicmutils.calculus.connection.metric__GT_connection_1;

sicmutils.env.metric__GT_connection_2 = sicmutils.calculus.connection.metric__GT_connection_2;

sicmutils.env.literal_Cartan = sicmutils.calculus.connection.literal_Cartan;

sicmutils.env.structure_constant = sicmutils.calculus.connection.structure_constant;

sicmutils.env.covariant_derivative = sicmutils.calculus.covariant.covariant_derivative;

sicmutils.env.covariant_differential = sicmutils.calculus.covariant.covariant_differential;

sicmutils.env.Lie_D = sicmutils.calculus.covariant.Lie_D;

sicmutils.env.interior_product = sicmutils.calculus.covariant.interior_product;

sicmutils.env.make_Cartan = sicmutils.calculus.covariant.make_Cartan;

sicmutils.env.Cartan_QMARK_ = sicmutils.calculus.covariant.Cartan_QMARK_;

sicmutils.env.Cartan__GT_forms = sicmutils.calculus.covariant.Cartan__GT_forms;

sicmutils.env.Cartan__GT_basis = sicmutils.calculus.covariant.Cartan__GT_basis;

sicmutils.env.make_Christoffel = sicmutils.calculus.covariant.make_Christoffel;

sicmutils.env.Christoffel_QMARK_ = sicmutils.calculus.covariant.Christoffel_QMARK_;

sicmutils.env.Christoffel__GT_symbols = sicmutils.calculus.covariant.Christoffel__GT_symbols;

sicmutils.env.Christoffel__GT_basis = sicmutils.calculus.covariant.Christoffel__GT_basis;

sicmutils.env.Cartan__GT_Christoffel = sicmutils.calculus.covariant.Cartan__GT_Christoffel;

sicmutils.env.Christoffel__GT_Cartan = sicmutils.calculus.covariant.Christoffel__GT_Cartan;

sicmutils.env.symmetrize_Christoffel = sicmutils.calculus.covariant.symmetrize_Christoffel;

sicmutils.env.symmetrize_Cartan = sicmutils.calculus.covariant.symmetrize_Cartan;

sicmutils.env.Cartan_transform = sicmutils.calculus.covariant.Cartan_transform;

sicmutils.env.Cartan__GT_Cartan_over_map = sicmutils.calculus.covariant.Cartan__GT_Cartan_over_map;

sicmutils.env.geodesic_equation = sicmutils.calculus.covariant.geodesic_equation;

sicmutils.env.parallel_transport_equation = sicmutils.calculus.covariant.parallel_transport_equation;

sicmutils.env.Riemann_curvature = sicmutils.calculus.curvature.Riemann_curvature;

sicmutils.env.Riemann = sicmutils.calculus.curvature.Riemann;

sicmutils.env.Ricci = sicmutils.calculus.curvature.Ricci;

sicmutils.env.torsion_vector = sicmutils.calculus.curvature.torsion_vector;

sicmutils.env.torsion = sicmutils.calculus.curvature.torsion;

sicmutils.env.curvature_components = sicmutils.calculus.curvature.curvature_components;

sicmutils.env.derivative = sicmutils.calculus.derivative.derivative;

sicmutils.env.D = sicmutils.calculus.derivative.D;

sicmutils.env.D_as_matrix = sicmutils.calculus.derivative.D_as_matrix;

sicmutils.env.taylor_series = sicmutils.calculus.derivative.taylor_series;

sicmutils.env.form_field_QMARK_ = sicmutils.calculus.form_field.form_field_QMARK_;

sicmutils.env.nform_field_QMARK_ = sicmutils.calculus.form_field.nform_field_QMARK_;

sicmutils.env.oneform_field_QMARK_ = sicmutils.calculus.form_field.oneform_field_QMARK_;

sicmutils.env.ff_COLON_zero = sicmutils.calculus.form_field.ff_COLON_zero;

sicmutils.env.components__GT_oneform_field = sicmutils.calculus.form_field.components__GT_oneform_field;

sicmutils.env.oneform_field__GT_components = sicmutils.calculus.form_field.oneform_field__GT_components;

sicmutils.env.literal_oneform_field = sicmutils.calculus.form_field.literal_oneform_field;

sicmutils.env.coordinate_basis_oneform_field = sicmutils.calculus.form_field.coordinate_basis_oneform_field;

sicmutils.env.coordinate_system__GT_oneform_basis = sicmutils.calculus.form_field.coordinate_system__GT_oneform_basis;

sicmutils.env.basis_components__GT_oneform_field = sicmutils.calculus.form_field.basis_components__GT_oneform_field;

sicmutils.env.oneform_field__GT_basis_components = sicmutils.calculus.form_field.oneform_field__GT_basis_components;

sicmutils.env.function__GT_oneform_field = sicmutils.calculus.form_field.function__GT_oneform_field;

sicmutils.env.wedge = sicmutils.calculus.form_field.wedge;

sicmutils.env.Alt = sicmutils.calculus.form_field.Alt;

sicmutils.env.alt_wedge = sicmutils.calculus.form_field.alt_wedge;

sicmutils.env.exterior_derivative = sicmutils.calculus.form_field.exterior_derivative;

sicmutils.env.d = sicmutils.calculus.form_field.d;

sicmutils.env.frame_QMARK_ = sicmutils.calculus.frame.frame_QMARK_;

sicmutils.env.make_event = sicmutils.calculus.frame.make_event;

sicmutils.env.event_QMARK_ = sicmutils.calculus.frame.event_QMARK_;

sicmutils.env.claim = sicmutils.calculus.frame.claim;

sicmutils.env.coords__GT_event = sicmutils.calculus.frame.coords__GT_event;

sicmutils.env.event__GT_coords = sicmutils.calculus.frame.event__GT_coords;

sicmutils.env.ancestor_frame = sicmutils.calculus.frame.ancestor_frame;

sicmutils.env.frame_name = sicmutils.calculus.frame.frame_name;

sicmutils.env.frame_owner = sicmutils.calculus.frame.frame_owner;

sicmutils.env.frame_maker = sicmutils.calculus.frame.frame_maker;

sicmutils.env.Gram_Schmidt = sicmutils.calculus.hodge_star.Gram_Schmidt;

sicmutils.env.orthonormalize = sicmutils.calculus.hodge_star.orthonormalize;

sicmutils.env.Hodge_star = sicmutils.calculus.hodge_star.Hodge_star;

sicmutils.env.argument_types = sicmutils.calculus.indexed.argument_types;

sicmutils.env.with_argument_types = sicmutils.calculus.indexed.with_argument_types;

sicmutils.env.index_types = sicmutils.calculus.indexed.index_types;

sicmutils.env.with_index_types = sicmutils.calculus.indexed.with_index_types;

sicmutils.env.typed__GT_indexed = sicmutils.calculus.indexed.typed__GT_indexed;

sicmutils.env.indexed__GT_typed = sicmutils.calculus.indexed.indexed__GT_typed;

sicmutils.env.typed__GT_structure = sicmutils.calculus.indexed.typed__GT_structure;

sicmutils.env.structure__GT_typed = sicmutils.calculus.indexed.structure__GT_typed;

sicmutils.env.make_manifold = sicmutils.calculus.manifold.make_manifold;

sicmutils.env.coordinate_system_at = sicmutils.calculus.manifold.coordinate_system_at;

sicmutils.env.manifold_type = sicmutils.calculus.manifold.manifold_type;

sicmutils.env.patch_names = sicmutils.calculus.manifold.patch_names;

sicmutils.env.coordinate_system_names = sicmutils.calculus.manifold.coordinate_system_names;

sicmutils.env.manifold_QMARK_ = sicmutils.calculus.manifold.manifold_QMARK_;

sicmutils.env.manifold_family_QMARK_ = sicmutils.calculus.manifold.manifold_family_QMARK_;

sicmutils.env.manifold_point_QMARK_ = sicmutils.calculus.manifold.manifold_point_QMARK_;

sicmutils.env.chart = sicmutils.calculus.manifold.chart;

sicmutils.env.point = sicmutils.calculus.manifold.point;

sicmutils.env.typical_coords = sicmutils.calculus.manifold.typical_coords;

sicmutils.env.typical_point = sicmutils.calculus.manifold.typical_point;

sicmutils.env.transfer_point = sicmutils.calculus.manifold.transfer_point;

sicmutils.env.corresponding_velocities = sicmutils.calculus.manifold.corresponding_velocities;

sicmutils.env.literal_manifold_function = sicmutils.calculus.manifold.literal_manifold_function;

sicmutils.env.zero_manifold_function = sicmutils.calculus.manifold.zero_manifold_function;

sicmutils.env.one_manifold_function = sicmutils.calculus.manifold.one_manifold_function;

sicmutils.env.constant_manifold_function = sicmutils.calculus.manifold.constant_manifold_function;

sicmutils.env.coordinate_system_QMARK_ = sicmutils.calculus.manifold.coordinate_system_QMARK_;

sicmutils.env.Rn = sicmutils.calculus.manifold.Rn;

sicmutils.env.R1 = sicmutils.calculus.manifold.R1;

sicmutils.env.R1_rect = sicmutils.calculus.manifold.R1_rect;

sicmutils.env.the_real_line = sicmutils.calculus.manifold.the_real_line;

sicmutils.env.R2 = sicmutils.calculus.manifold.R2;

sicmutils.env.R2_rect = sicmutils.calculus.manifold.R2_rect;

sicmutils.env.R2_polar = sicmutils.calculus.manifold.R2_polar;

sicmutils.env.R3 = sicmutils.calculus.manifold.R3;

sicmutils.env.R3_rect = sicmutils.calculus.manifold.R3_rect;

sicmutils.env.R3_cyl = sicmutils.calculus.manifold.R3_cyl;

sicmutils.env.R3_spherical = sicmutils.calculus.manifold.R3_spherical;

sicmutils.env.R4 = sicmutils.calculus.manifold.R4;

sicmutils.env.R4_rect = sicmutils.calculus.manifold.R4_rect;

sicmutils.env.R4_cyl = sicmutils.calculus.manifold.R4_cyl;

sicmutils.env.spacetime = sicmutils.calculus.manifold.spacetime;

sicmutils.env.spacetime_rect = sicmutils.calculus.manifold.spacetime_rect;

sicmutils.env.spacetime_sphere = sicmutils.calculus.manifold.spacetime_sphere;

sicmutils.env.Sn = sicmutils.calculus.manifold.Sn;

sicmutils.env.S1 = sicmutils.calculus.manifold.S1;

sicmutils.env.S1_circular = sicmutils.calculus.manifold.S1_circular;

sicmutils.env.S1_tilted = sicmutils.calculus.manifold.S1_tilted;

sicmutils.env.S1_slope = sicmutils.calculus.manifold.S1_slope;

sicmutils.env.S1_gnomonic = sicmutils.calculus.manifold.S1_gnomonic;

sicmutils.env.S2_type = sicmutils.calculus.manifold.S2_type;

sicmutils.env.S2 = sicmutils.calculus.manifold.S2;

sicmutils.env.S2_spherical = sicmutils.calculus.manifold.S2_spherical;

sicmutils.env.S2_tilted = sicmutils.calculus.manifold.S2_tilted;

sicmutils.env.S2_stereographic = sicmutils.calculus.manifold.S2_stereographic;

sicmutils.env.S2_Riemann = sicmutils.calculus.manifold.S2_Riemann;

sicmutils.env.S2_gnomonic = sicmutils.calculus.manifold.S2_gnomonic;

sicmutils.env.S2p = sicmutils.calculus.manifold.S2p;

sicmutils.env.S2p_spherical = sicmutils.calculus.manifold.S2p_spherical;

sicmutils.env.S2p_tilted = sicmutils.calculus.manifold.S2p_tilted;

sicmutils.env.S2p_stereographic = sicmutils.calculus.manifold.S2p_stereographic;

sicmutils.env.S2p_Riemann = sicmutils.calculus.manifold.S2p_Riemann;

sicmutils.env.S2p_gnomonic = sicmutils.calculus.manifold.S2p_gnomonic;

sicmutils.env.S3 = sicmutils.calculus.manifold.S3;

sicmutils.env.S3_spherical = sicmutils.calculus.manifold.S3_spherical;

sicmutils.env.S3_tilted = sicmutils.calculus.manifold.S3_tilted;

sicmutils.env.S3_stereographic = sicmutils.calculus.manifold.S3_stereographic;

sicmutils.env.S3_gnomonic = sicmutils.calculus.manifold.S3_gnomonic;

sicmutils.env.SO3_type = sicmutils.calculus.manifold.SO3_type;

sicmutils.env.SO3 = sicmutils.calculus.manifold.SO3;

sicmutils.env.Euler_angles = sicmutils.calculus.manifold.Euler_angles;

sicmutils.env.alternate_angles = sicmutils.calculus.manifold.alternate_angles;

sicmutils.env.coordinate_system__GT_metric_components = sicmutils.calculus.metric.coordinate_system__GT_metric_components;

sicmutils.env.coordinate_system__GT_metric = sicmutils.calculus.metric.coordinate_system__GT_metric;

sicmutils.env.coordinate_system__GT_inverse_metric = sicmutils.calculus.metric.coordinate_system__GT_inverse_metric;

sicmutils.env.literal_metric = sicmutils.calculus.metric.literal_metric;

sicmutils.env.components__GT_metric = sicmutils.calculus.metric.components__GT_metric;

sicmutils.env.metric__GT_components = sicmutils.calculus.metric.metric__GT_components;

sicmutils.env.metric__GT_inverse_components = sicmutils.calculus.metric.metric__GT_inverse_components;

sicmutils.env.metric_over_map = sicmutils.calculus.metric.metric_over_map;

sicmutils.env.lower = sicmutils.calculus.metric.lower;

sicmutils.env.vector_field__GT_oneform_field = sicmutils.calculus.metric.vector_field__GT_oneform_field;

sicmutils.env.drop1 = sicmutils.calculus.metric.drop1;

sicmutils.env.raise = sicmutils.calculus.metric.raise;

sicmutils.env.oneform_field__GT_vector_field = sicmutils.calculus.metric.oneform_field__GT_vector_field;

sicmutils.env.raise1 = sicmutils.calculus.metric.raise1;

sicmutils.env.drop2 = sicmutils.calculus.metric.drop2;

sicmutils.env.raise2 = sicmutils.calculus.metric.raise2;

sicmutils.env.trace2down = sicmutils.calculus.metric.trace2down;

sicmutils.env.trace2up = sicmutils.calculus.metric.trace2up;

sicmutils.env.sharpen = sicmutils.calculus.metric.sharpen;

sicmutils.env.S2_metric = sicmutils.calculus.metric.S2_metric;

sicmutils.env.pullback_function = sicmutils.calculus.map.pullback_function;

sicmutils.env.pushforward_function = sicmutils.calculus.map.pushforward_function;

sicmutils.env.differential_of_map = sicmutils.calculus.map.differential_of_map;

sicmutils.env.differential = sicmutils.calculus.map.differential;

sicmutils.env.pushforward_vector = sicmutils.calculus.map.pushforward_vector;

sicmutils.env.literal_manifold_map = sicmutils.calculus.map.literal_manifold_map;

sicmutils.env.vector_field__GT_vector_field_over_map = sicmutils.calculus.map.vector_field__GT_vector_field_over_map;

sicmutils.env.form_field__GT_form_field_over_map = sicmutils.calculus.map.form_field__GT_form_field_over_map;

sicmutils.env.basis__GT_basis_over_map = sicmutils.calculus.map.basis__GT_basis_over_map;

sicmutils.env.pullback_form = sicmutils.calculus.map.pullback_form;

sicmutils.env.pullback_vector_field = sicmutils.calculus.map.pullback_vector_field;

sicmutils.env.pullback = sicmutils.calculus.map.pullback;

sicmutils.env.Div = sicmutils.calculus.vector_calculus.Div;

sicmutils.env.Grad = sicmutils.calculus.vector_calculus.Grad;

sicmutils.env.Curl = sicmutils.calculus.vector_calculus.Curl;

sicmutils.env.Lap = sicmutils.calculus.vector_calculus.Lap;

sicmutils.env.divergence = sicmutils.calculus.vector_calculus.divergence;

sicmutils.env.curl = sicmutils.calculus.vector_calculus.curl;

sicmutils.env.gradient = sicmutils.calculus.vector_calculus.gradient;

sicmutils.env.Laplacian = sicmutils.calculus.vector_calculus.Laplacian;

sicmutils.env.vector_field_QMARK_ = sicmutils.calculus.vector_field.vector_field_QMARK_;

sicmutils.env.components__GT_vector_field = sicmutils.calculus.vector_field.components__GT_vector_field;

sicmutils.env.vector_field__GT_components = sicmutils.calculus.vector_field.vector_field__GT_components;

sicmutils.env.vf_COLON_zero = sicmutils.calculus.vector_field.vf_COLON_zero;

sicmutils.env.literal_vector_field = sicmutils.calculus.vector_field.literal_vector_field;

sicmutils.env.coordinate_basis_vector_field = sicmutils.calculus.vector_field.coordinate_basis_vector_field;

sicmutils.env.coordinate_system__GT_vector_basis = sicmutils.calculus.vector_field.coordinate_system__GT_vector_basis;

sicmutils.env.basis_components__GT_vector_field = sicmutils.calculus.vector_field.basis_components__GT_vector_field;

sicmutils.env.vector_field__GT_basis_components = sicmutils.calculus.vector_field.vector_field__GT_basis_components;

sicmutils.env.coordinatize = sicmutils.calculus.vector_field.coordinatize;

sicmutils.env.evolution = sicmutils.calculus.vector_field.evolution;

sicmutils.env.make_four_tuple = sicmutils.sr.boost.make_four_tuple;

sicmutils.env.four_tuple__GT_ct = sicmutils.sr.boost.four_tuple__GT_ct;

sicmutils.env.four_tuple__GT_space = sicmutils.sr.boost.four_tuple__GT_space;

sicmutils.env.proper_time_interval = sicmutils.sr.boost.proper_time_interval;

sicmutils.env.proper_space_interval = sicmutils.sr.boost.proper_space_interval;

sicmutils.env.general_boost = sicmutils.sr.boost.general_boost;

sicmutils.env.general_boost2 = sicmutils.sr.boost.general_boost2;

sicmutils.env.extended_rotation = sicmutils.sr.boost.extended_rotation;

sicmutils.env.make_SR_coordinates = sicmutils.sr.frames.make_SR_coordinates;

sicmutils.env.SR_coordinates_QMARK_ = sicmutils.sr.frames.SR_coordinates_QMARK_;

sicmutils.env.SR_name = sicmutils.sr.frames.SR_name;

sicmutils.env.make_SR_frame = sicmutils.sr.frames.make_SR_frame;

sicmutils.env.base_frame_maker = sicmutils.sr.frames.base_frame_maker;

sicmutils.env.the_ether = sicmutils.sr.frames.the_ether;

sicmutils.env.boost_direction = sicmutils.sr.frames.boost_direction;

sicmutils.env.v_COLON_c = sicmutils.sr.frames.v_COLON_c;

sicmutils.env.coordinate_origin = sicmutils.sr.frames.coordinate_origin;

sicmutils.env.add_v_COLON_cs = sicmutils.sr.frames.add_v_COLON_cs;

sicmutils.env.add_velocities = sicmutils.sr.frames.add_velocities;

sicmutils.env.__GT_L_state = sicmutils.mechanics.lagrange.__GT_L_state;

sicmutils.env.__GT_local = sicmutils.mechanics.lagrange.__GT_local;

sicmutils.env.__GT_state = sicmutils.mechanics.lagrange.__GT_state;

sicmutils.env.literal_Lagrangian_state = sicmutils.mechanics.lagrange.literal_Lagrangian_state;

sicmutils.env.Dt = sicmutils.mechanics.lagrange.Dt;

sicmutils.env.Euler_Lagrange_operator = sicmutils.mechanics.lagrange.Euler_Lagrange_operator;

sicmutils.env.F__GT_C = sicmutils.mechanics.lagrange.F__GT_C;

sicmutils.env.Gamma = sicmutils.mechanics.lagrange.Gamma;

sicmutils.env.Gamma_bar = sicmutils.mechanics.lagrange.Gamma_bar;

sicmutils.env.generalized_LE = sicmutils.mechanics.lagrange.generalized_LE;

sicmutils.env.Lagrange_equations = sicmutils.mechanics.lagrange.Lagrange_equations;

sicmutils.env.Lagrange_equations_first_order = sicmutils.mechanics.lagrange.Lagrange_equations_first_order;

sicmutils.env.Lagrange_interpolation_function = sicmutils.mechanics.lagrange.Lagrange_interpolation_function;

sicmutils.env.Lagrangian__GT_energy = sicmutils.mechanics.lagrange.Lagrangian__GT_energy;

sicmutils.env.Lagrangian__GT_power_loss = sicmutils.mechanics.lagrange.Lagrangian__GT_power_loss;

sicmutils.env.Lagrangian__GT_state_derivative = sicmutils.mechanics.lagrange.Lagrangian__GT_state_derivative;

sicmutils.env.Lagrangian_action = sicmutils.mechanics.lagrange.Lagrangian_action;

sicmutils.env.find_path = sicmutils.mechanics.lagrange.find_path;

sicmutils.env.linear_interpolants = sicmutils.mechanics.lagrange.linear_interpolants;

sicmutils.env.osculating_path = sicmutils.mechanics.lagrange.osculating_path;

sicmutils.env.r__GT_s = sicmutils.mechanics.lagrange.r__GT_s;

sicmutils.env.s__GT_r = sicmutils.mechanics.lagrange.s__GT_r;

sicmutils.env.p__GT_r = sicmutils.mechanics.lagrange.p__GT_r;

sicmutils.env.r__GT_p = sicmutils.mechanics.lagrange.r__GT_p;

sicmutils.env.state__GT_t = sicmutils.mechanics.lagrange.state__GT_t;

sicmutils.env.coordinate = sicmutils.mechanics.lagrange.coordinate;

sicmutils.env.velocity = sicmutils.mechanics.lagrange.velocity;

sicmutils.env.acceleration = sicmutils.mechanics.lagrange.acceleration;

sicmutils.env.coordinate_tuple = sicmutils.mechanics.lagrange.coordinate_tuple;

sicmutils.env.velocity_tuple = sicmutils.mechanics.lagrange.velocity_tuple;

sicmutils.env.acceleration_tuple = sicmutils.mechanics.lagrange.acceleration_tuple;

sicmutils.env.momentum_tuple = sicmutils.mechanics.lagrange.momentum_tuple;

sicmutils.env.s__GT_m = sicmutils.matrix.s__GT_m;

sicmutils.env.m__GT_s = sicmutils.matrix.m__GT_s;

sicmutils.env.literal_matrix = sicmutils.matrix.literal_matrix;

sicmutils.env.submatrix = sicmutils.matrix.submatrix;

sicmutils.env.up__GT_column_matrix = sicmutils.matrix.up__GT_column_matrix;

sicmutils.env.column_matrix__GT_up = sicmutils.matrix.column_matrix__GT_up;

sicmutils.env.column_matrix__GT_vector = sicmutils.matrix.column_matrix__GT_vector;

sicmutils.env.down__GT_row_matrix = sicmutils.matrix.down__GT_row_matrix;

sicmutils.env.row_matrix__GT_down = sicmutils.matrix.row_matrix__GT_down;

sicmutils.env.row_matrix__GT_vector = sicmutils.matrix.row_matrix__GT_vector;

sicmutils.env.__GT_H_state = sicmutils.mechanics.hamilton.__GT_H_state;

sicmutils.env.F__GT_CT = sicmutils.mechanics.hamilton.F__GT_CT;

sicmutils.env.Hamilton_equations = sicmutils.mechanics.hamilton.Hamilton_equations;

sicmutils.env.Hamiltonian = sicmutils.mechanics.hamilton.Hamiltonian;

sicmutils.env.Hamiltonian__GT_state_derivative = sicmutils.mechanics.hamilton.Hamiltonian__GT_state_derivative;

sicmutils.env.phase_space_derivative = sicmutils.mechanics.hamilton.phase_space_derivative;

sicmutils.env.Lagrangian__GT_Hamiltonian = sicmutils.mechanics.hamilton.Lagrangian__GT_Hamiltonian;

sicmutils.env.Legendre_transform = sicmutils.mechanics.hamilton.Legendre_transform;

sicmutils.env.Lie_transform = sicmutils.mechanics.hamilton.Lie_transform;

sicmutils.env.Poisson_bracket = sicmutils.mechanics.hamilton.Poisson_bracket;

sicmutils.env.compositional_canonical_QMARK_ = sicmutils.mechanics.hamilton.compositional_canonical_QMARK_;

sicmutils.env.iterated_map = sicmutils.mechanics.hamilton.iterated_map;

sicmutils.env.momentum = sicmutils.mechanics.hamilton.momentum;

sicmutils.env.polar_canonical = sicmutils.mechanics.hamilton.polar_canonical;

sicmutils.env.standard_map = sicmutils.mechanics.hamilton.standard_map;

sicmutils.env.qp_submatrix = sicmutils.mechanics.hamilton.qp_submatrix;

sicmutils.env.symplectic_transform_QMARK_ = sicmutils.mechanics.hamilton.symplectic_transform_QMARK_;

sicmutils.env.symplectic_unit = sicmutils.mechanics.hamilton.symplectic_unit;

sicmutils.env.time_independent_canonical_QMARK_ = sicmutils.mechanics.hamilton.time_independent_canonical_QMARK_;

sicmutils.env.rotate_x_matrix = sicmutils.mechanics.rotation.rotate_x_matrix;

sicmutils.env.rotate_y_matrix = sicmutils.mechanics.rotation.rotate_y_matrix;

sicmutils.env.rotate_z_matrix = sicmutils.mechanics.rotation.rotate_z_matrix;

sicmutils.env.angle_axis__GT_rotation_matrix = sicmutils.mechanics.rotation.angle_axis__GT_rotation_matrix;

sicmutils.env.rotate_x_tuple = sicmutils.mechanics.rotation.rotate_x_tuple;

sicmutils.env.rotate_y_tuple = sicmutils.mechanics.rotation.rotate_y_tuple;

sicmutils.env.rotate_z_tuple = sicmutils.mechanics.rotation.rotate_z_tuple;

sicmutils.env.Rx = sicmutils.mechanics.rotation.Rx;

sicmutils.env.Ry = sicmutils.mechanics.rotation.Ry;

sicmutils.env.Rz = sicmutils.mechanics.rotation.Rz;

sicmutils.env.rotate_x = sicmutils.mechanics.rotation.rotate_x;

sicmutils.env.rotate_y = sicmutils.mechanics.rotation.rotate_y;

sicmutils.env.rotate_z = sicmutils.mechanics.rotation.rotate_z;

sicmutils.env.Euler__GT_M = sicmutils.mechanics.rotation.Euler__GT_M;

sicmutils.env.wcross__GT_w = sicmutils.mechanics.rotation.wcross__GT_w;

sicmutils.env.evolve = sicmutils.numerical.ode.evolve;

sicmutils.env.integrate_state_derivative = sicmutils.numerical.ode.integrate_state_derivative;

sicmutils.env.state_advancer = sicmutils.numerical.ode.state_advancer;

sicmutils.env.D_numeric = sicmutils.numerical.derivative.D_numeric;

sicmutils.env.definite_integral = sicmutils.numerical.quadrature.definite_integral;

sicmutils.env.brent_min = sicmutils.numerical.unimin.brent.brent_min;

sicmutils.env.brent_max = sicmutils.numerical.unimin.brent.brent_max;

sicmutils.env.nelder_mead = sicmutils.numerical.multimin.nelder_mead.nelder_mead;

sicmutils.env.golden_section_min = sicmutils.numerical.unimin.golden.golden_section_min;

sicmutils.env.golden_section_max = sicmutils.numerical.unimin.golden.golden_section_max;

sicmutils.env.minimize = sicmutils.numerical.minimize.minimize;

sicmutils.env.multidimensional_minimize = sicmutils.numerical.minimize.multidimensional_minimize;

sicmutils.env.sum = sicmutils.util.aggregate.sum;

sicmutils.env.vector_COLON_generate = sicmutils.util.stream.vector_COLON_generate;

sicmutils.env.elliptic_f = sicmutils.special.elliptic.elliptic_f;

sicmutils.env.factorial = sicmutils.special.factorial.factorial;

sicmutils.env._EQ_ = sicmutils.value._EQ_;

sicmutils.env.compare = sicmutils.value.compare;

sicmutils.env.exact_QMARK_ = sicmutils.value.exact_QMARK_;

sicmutils.env.zero_QMARK_ = sicmutils.value.zero_QMARK_;

sicmutils.env.one_QMARK_ = sicmutils.value.one_QMARK_;

sicmutils.env.identity_QMARK_ = sicmutils.value.identity_QMARK_;

sicmutils.env.zero_like = sicmutils.value.zero_like;

sicmutils.env.one_like = sicmutils.value.one_like;

sicmutils.env.identity_like = sicmutils.value.identity_like;

sicmutils.env.numerical_QMARK_ = sicmutils.value.numerical_QMARK_;

sicmutils.env.freeze = sicmutils.value.freeze;

sicmutils.env.kind = sicmutils.value.kind;

sicmutils.env.kind_predicate = sicmutils.value.kind_predicate;

//# sourceMappingURL=sicmutils.env.js.map
