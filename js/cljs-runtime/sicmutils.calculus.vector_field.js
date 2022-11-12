goog.provide('sicmutils.calculus.vector_field');
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352),new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017));

/**
 * Returns true if the supplied argument `vf` is a vector field operator, false
 *   otherwise.
 */
sicmutils.calculus.vector_field.vector_field_QMARK_ = (function sicmutils$calculus$vector_field$vector_field_QMARK_(vf){
return ((sicmutils.operator.operator_QMARK_(vf)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"subtype","subtype",-2092672993).cljs$core$IFn$_invoke$arity$1(sicmutils.operator.context(vf)),new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352))));
});
/**
 * Accepts a function `f` and an optional symbolic `name`, and returns a vector
 *   field, ie, a subtype of [[sicmutils.operator/Operator]].
 * 
 *   `f` should be a function from a smooth real-valued function `g` of a manifold
 *   to a new function on the manifold which computes the directional derivative of
 *   `g` at each point of the manifold.
 */
sicmutils.calculus.vector_field.procedure__GT_vector_field = (function sicmutils$calculus$vector_field$procedure__GT_vector_field(var_args){
var G__87630 = arguments.length;
switch (G__87630) {
case 1:
return sicmutils.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$1 = (function (f){
return sicmutils.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Symbol(null,"unnamed-vector-field","unnamed-vector-field",293891395,null));
}));

(sicmutils.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2 = (function (f,name){
var context = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"subtype","subtype",-2092672993),new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352),new cljs.core.Keyword(null,"zero?","zero?",-1314772630),sicmutils.calculus.vector_field.vf_COLON_zero_QMARK_,new cljs.core.Keyword(null,"zero-like","zero-like",1759410522),sicmutils.calculus.vector_field.vf_COLON_zero_like,new cljs.core.Keyword(null,"arguments","arguments",-1182834456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","function","sicmutils.value/function",-1964931037)], null)], null);
return sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$3(f,name,context);
}));

(sicmutils.calculus.vector_field.procedure__GT_vector_field.cljs$lang$maxFixedArity = 2);

/**
 * Takes:
 * 
 *   - an `up` tuple, `components`, of the functions that each return the
 *  corresponding component of the vector field relative to `coordinate-system`
 *   - the `coordinate-system`
 * 
 *   And returns a procedure (not yet an operator!) that takes a smooth real-valued
 *   function of manifold points and produces a NEW function that computes the
 *   directional derivative of the given function at each point of the manifold.
 */
sicmutils.calculus.vector_field.vector_field_procedure = (function sicmutils$calculus$vector_field$vector_field_procedure(component_fns,coordinate_system){
return (function (f){
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var G__87633 = sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f,sicmutils.calculus.manifold.point(coordinate_system)], 0));
return (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(G__87633) : sicmutils.calculus.derivative.D.call(null,G__87633));
})(),component_fns),sicmutils.calculus.manifold.chart(coordinate_system)], 0));
});
});
/**
 * Takes:
 * 
 *   - an `up` tuple of the functions that each return the corresponding component
 *   of the vector field relative `coordinate-system`
 *   - the `coordinate-system`
 *   - optionally, a symbolic name for the vector field operator
 * 
 *   And returns a vector field.
 * 
 *   A vector field is an operator that takes a smooth real-valued function of
 *   manifold points and produces a NEW function that computes the directional
 *   derivative of the given function at each point of the manifold.
 */
sicmutils.calculus.vector_field.components__GT_vector_field = (function sicmutils$calculus$vector_field$components__GT_vector_field(var_args){
var G__87635 = arguments.length;
switch (G__87635) {
case 2:
return sicmutils.calculus.vector_field.components__GT_vector_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.calculus.vector_field.components__GT_vector_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.calculus.vector_field.components__GT_vector_field.cljs$core$IFn$_invoke$arity$2 = (function (components,coordinate_system){
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"vector-field","vector-field",1291054264,null),null,(1),null)),(new cljs.core.List(null,components,null,(1),null)))));
return sicmutils.calculus.vector_field.components__GT_vector_field.cljs$core$IFn$_invoke$arity$3(components,coordinate_system,name);
}));

(sicmutils.calculus.vector_field.components__GT_vector_field.cljs$core$IFn$_invoke$arity$3 = (function (components,coordinate_system,name){
var vfp = sicmutils.calculus.vector_field.vector_field_procedure(components,coordinate_system);
return sicmutils.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2(sicmutils.function$.memoize(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sicmutils.function$.memoize,vfp)),name);
}));

(sicmutils.calculus.vector_field.components__GT_vector_field.cljs$lang$maxFixedArity = 3);

/**
 * Given a vector field `vf` and a `coordinate-system`, returns a function from
 *   the coordinate representation of a manifold point to a coordinate
 *   representation of the coordinatized components of the vector field at that
 *   point.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (let-coordinates [[x y] R2-rect]
 *  (let [f (literal-vector-field 'f R2-rect)]
 *      ((vector-field->components f R2-rect)
 *       (up 'x0 'y0))))
 * 
 *   ;;=> (up (f↑0 (up x0 y0))
 *   ;;       (f↑1 (up x0 y0)))
 *   ```
 */
sicmutils.calculus.vector_field.vector_field__GT_components = (function sicmutils$calculus$vector_field$vector_field__GT_components(vf,coordinate_system){
if(sicmutils.calculus.vector_field.vector_field_QMARK_(vf)){
} else {
throw (new Error("Assert failed: (vector-field? vf)"));
}

return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__87637 = sicmutils.calculus.manifold.chart(coordinate_system);
return (vf.cljs$core$IFn$_invoke$arity$1 ? vf.cljs$core$IFn$_invoke$arity$1(G__87637) : vf.call(null,G__87637));
})(),sicmutils.calculus.manifold.point(coordinate_system)], 0));
});
/**
 * Returns a vector field that returns, for any supplied function `f`, a manifold
 *   function [[manifold/zero-manifold-function]] that maps every input manifold
 *   `point` to the scalar value 0.
 */
sicmutils.calculus.vector_field.vf_COLON_zero = (function sicmutils$calculus$vector_field$vf_COLON_zero(_){
return sicmutils.calculus.manifold.zero_manifold_function;
});
/**
 * Given some vector field `vf`, returns a vector field with the same context and
 *   its procedure replaced by `vf:zero`.
 * 
 *   The returned vector field responds `true` to `v/zero?`.
 */
sicmutils.calculus.vector_field.vf_COLON_zero_like = (function sicmutils$calculus$vector_field$vf_COLON_zero_like(vf){
if(sicmutils.calculus.vector_field.vector_field_QMARK_(vf)){
} else {
throw (new Error("Assert failed: (vector-field? vf)"));
}

return sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$3(sicmutils.calculus.vector_field.vf_COLON_zero,new cljs.core.Symbol(null,"vf:zero","vf:zero",-742903868,null),sicmutils.operator.context(vf));
});
/**
 * Returns true if the supplied vector field `vf` is a vector field with a
 *   procedure equal to `vf:zero`, false otherwise.
 */
sicmutils.calculus.vector_field.vf_COLON_zero_QMARK_ = (function sicmutils$calculus$vector_field$vf_COLON_zero_QMARK_(op){
return ((sicmutils.calculus.vector_field.vector_field_QMARK_(op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.operator.procedure(op),sicmutils.calculus.vector_field.vf_COLON_zero)));
});
/**
 * Given a symbolic name `sym` and a `coordinate-system`, returns a vector field
 *   consisting of literal real-valued functions from the coordinate system's
 *   dimension for each coordinate component.
 * 
 *   These functions are passed to [[components->vector-field]], along with the
 *   supplied `coordinate-system` and symbolic name `sym`.
 * 
 *   For coordinate systems of dimension 1, `literal-vector-field`'s component
 *   functions will accept a single non-structural argument.
 */
sicmutils.calculus.vector_field.literal_vector_field = (function sicmutils$calculus$vector_field$literal_vector_field(sym,coordinate_system){
var n = new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(sicmutils.calculus.manifold.manifold(coordinate_system));
var domain = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1)))?(0):sicmutils.structure.up_STAR_(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0))));
var range = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null):domain);
return sicmutils.calculus.vector_field.components__GT_vector_field.cljs$core$IFn$_invoke$arity$3(sicmutils.abstract$.function$.literal_function.cljs$core$IFn$_invoke$arity$3(sym,domain,range),coordinate_system,sym);
});
sicmutils.calculus.vector_field.coordinate_basis_vector_field_procedure = (function sicmutils$calculus$vector_field$coordinate_basis_vector_field_procedure(var_args){
var args__4870__auto__ = [];
var len__4864__auto___87663 = arguments.length;
var i__4865__auto___87664 = (0);
while(true){
if((i__4865__auto___87664 < len__4864__auto___87663)){
args__4870__auto__.push((arguments[i__4865__auto___87664]));

var G__87665 = (i__4865__auto___87664 + (1));
i__4865__auto___87664 = G__87665;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sicmutils.calculus.vector_field.coordinate_basis_vector_field_procedure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sicmutils.calculus.vector_field.coordinate_basis_vector_field_procedure.cljs$core$IFn$_invoke$arity$variadic = (function (coordinate_system,indices){
return (function (f){
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__87646 = sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f,sicmutils.calculus.manifold.point(coordinate_system)], 0));
var fexpr__87645 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.calculus.derivative.partial,indices);
return (fexpr__87645.cljs$core$IFn$_invoke$arity$1 ? fexpr__87645.cljs$core$IFn$_invoke$arity$1(G__87646) : fexpr__87645.call(null,G__87646));
})(),sicmutils.calculus.manifold.chart(coordinate_system)], 0));
});
}));

(sicmutils.calculus.vector_field.coordinate_basis_vector_field_procedure.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sicmutils.calculus.vector_field.coordinate_basis_vector_field_procedure.cljs$lang$applyTo = (function (seq87643){
var G__87644 = cljs.core.first(seq87643);
var seq87643__$1 = cljs.core.next(seq87643);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87644,seq87643__$1);
}));

/**
 * Given some `coordinate-system`, a symbolic `name` and a sequence of indices
 *   into the structure of the coordinate system's representation,
 * 
 *   returns a vector field that takes a function and returns a new function that
 *   computes the partial derivative of that function with respect to the supplied
 *   `indices` into `coordinate-system`.
 * 
 *   To compute the full Jacobian, pass no indices.
 */
sicmutils.calculus.vector_field.coordinate_basis_vector_field = (function sicmutils$calculus$vector_field$coordinate_basis_vector_field(var_args){
var args__4870__auto__ = [];
var len__4864__auto___87666 = arguments.length;
var i__4865__auto___87667 = (0);
while(true){
if((i__4865__auto___87667 < len__4864__auto___87666)){
args__4870__auto__.push((arguments[i__4865__auto___87667]));

var G__87668 = (i__4865__auto___87667 + (1));
i__4865__auto___87667 = G__87668;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sicmutils.calculus.vector_field.coordinate_basis_vector_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sicmutils.calculus.vector_field.coordinate_basis_vector_field.cljs$core$IFn$_invoke$arity$variadic = (function (coordinate_system,name,indices){
var vfp = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sicmutils.calculus.vector_field.coordinate_basis_vector_field_procedure,coordinate_system,indices);
return sicmutils.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2(sicmutils.function$.memoize(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sicmutils.function$.memoize,vfp)),name);
}));

(sicmutils.calculus.vector_field.coordinate_basis_vector_field.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sicmutils.calculus.vector_field.coordinate_basis_vector_field.cljs$lang$applyTo = (function (seq87647){
var G__87648 = cljs.core.first(seq87647);
var seq87647__$1 = cljs.core.next(seq87647);
var G__87649 = cljs.core.first(seq87647__$1);
var seq87647__$2 = cljs.core.next(seq87647__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87648,G__87649,seq87647__$2);
}));

/**
 * From the name `n` of a coordinate, produce the name of the coordinate basis
 *   vector field (as a symbol)
 */
sicmutils.calculus.vector_field.coordinate_name__GT_vf_name = (function sicmutils$calculus$vector_field$coordinate_name__GT_vf_name(n){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["d:d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
});
/**
 * Given some `coordinate-system`, returns a structure of
 *   `coordinate-basis-vector-field` instances. The vector field at each structural
 *   spot takes a function and computes its directional derivative with respect to
 *   that coordinate.
 * 
 *   When applied as a function, the structure behaves equivalently to
 * 
 *   ```clojure
 *   (coordinate-basis-vector-field <coordinate-system> 'ignored-name)
 *   ```
 * 
 *   With no indices supplied.
 */
sicmutils.calculus.vector_field.coordinate_system__GT_vector_basis = (function sicmutils$calculus$vector_field$coordinate_system__GT_vector_basis(coordinate_system){
return sicmutils.structure.transpose(sicmutils.structure.map_chain((function (c_name,chain,_){
var vf_name = sicmutils.calculus.vector_field.coordinate_name__GT_vf_name(c_name);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sicmutils.calculus.vector_field.coordinate_basis_vector_field,coordinate_system,vf_name,chain);
}),sicmutils.calculus.manifold.coordinate_prototype(coordinate_system)));
});
/**
 * Given a structure of `components` and and a matching `vector-basis` (of
 *   identical structure with orientations flipped), returns a new vector field
 *   generated contracting by these two structures together.
 * 
 *   The returned vector field passes its input function to the operator generated
 *   by this contraction.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (let-coordinates [[x y] R2-rect]
 *  (basis-components->vector-field
 *   (up x y)
 *   (coordinate-system->vector-basis R2-rect)))
 *   ;; => (+ (* x d:dx) (* y d:dy))
 *   ```
 * 
 *   NOTE:
 *   - This is for any basis, not just a coordinate basis
 *   - The `components` are evaluated at a manifold point, not its coordinates
 *   - Given a dual basis, you can retrieve the original components
 *  with [[vector-field->basis-components]]
 */
sicmutils.calculus.vector_field.basis_components__GT_vector_field = (function sicmutils$calculus$vector_field$basis_components__GT_vector_field(components,vector_basis){
if(sicmutils.structure.compatible_for_contraction_QMARK_(components,vector_basis)){
} else {
throw (new Error("Assert failed: (s/compatible-for-contraction? components vector-basis)"));
}

var op = (function (f){
var applied = (vector_basis.cljs$core$IFn$_invoke$arity$1 ? vector_basis.cljs$core$IFn$_invoke$arity$1(f) : vector_basis.call(null,f));
return (function (point){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((applied.cljs$core$IFn$_invoke$arity$1 ? applied.cljs$core$IFn$_invoke$arity$1(point) : applied.call(null,point)),(components.cljs$core$IFn$_invoke$arity$1 ? components.cljs$core$IFn$_invoke$arity$1(point) : components.call(null,point)));
});
});
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (component,basis_element){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(component),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sicmutils.value.freeze(basis_element),null,(1),null))], 0))));
}),cljs.core.flatten(components),cljs.core.flatten(vector_basis)))));
return sicmutils.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2(op,name);
});
/**
 * Given a vector field `vf` generated from [[basis-components->vector-field]] and
 *   a dual basis, returns the original basis components.
 * 
 *   NOTE: You can generate a dual basis with [[basis/vector-basis->dual-basis]].
 * 
 *   Here's an example of how to use this function to round trip a structure of
 *   basis components:
 * 
 *   ```clojure
 *   (let [basis (coordinate-system->vector-basis coordsys)
 *      dual  (basis/vector-basis->dual basis coordsys)]
 *  (= basis-components
 *     (-> basis-components
 *         (basis-components->vector-field basis)
 *         (vector-field->basis-components dual))))
 *   ```
 */
sicmutils.calculus.vector_field.vector_field__GT_basis_components = (function sicmutils$calculus$vector_field$vector_field__GT_basis_components(vf,dual_basis){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (w){
return (w.cljs$core$IFn$_invoke$arity$1 ? w.cljs$core$IFn$_invoke$arity$1(vf) : w.call(null,vf));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dual_basis], 0));
});
/**
 * Returns an operator that acts as a coordinate version of the supplied vector
 *   field `vf` with respect to `coordinate-system`.
 * 
 *   The returned operator takes a function and returns a new function that takes
 *   directional derivatives of coordinate representations of manifold points, with
 *   respect to `coordinate-system`.
 */
sicmutils.calculus.vector_field.coordinatize = (function sicmutils$calculus$vector_field$coordinatize(vf,coordinate_system){
var coordinatized_v = (function sicmutils$calculus$vector_field$coordinatize_$_coordinatized_v(f){
return (function (x){
var b = sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__87655 = sicmutils.calculus.manifold.chart(coordinate_system);
return (vf.cljs$core$IFn$_invoke$arity$1 ? vf.cljs$core$IFn$_invoke$arity$1(G__87655) : vf.call(null,G__87655));
})(),sicmutils.calculus.manifold.point(coordinate_system)], 0));
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__87656 = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(f) : sicmutils.calculus.derivative.D.call(null,f));
return (fexpr__87656.cljs$core$IFn$_invoke$arity$1 ? fexpr__87656.cljs$core$IFn$_invoke$arity$1(x) : fexpr__87656.call(null,x));
})(),(b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(x) : b.call(null,x)));
});
});
return sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$2(coordinatized_v,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"coordinatized","coordinatized",1447215710,null),null,(1),null)),(new cljs.core.List(null,sicmutils.operator.name(vf),null,(1),null))))));
});
/**
 * We can use the coordinatized vector field to build an evolution along an
 *   integral curve.
 * 
 *   NOTE: I don't see how this has anything to do with [[coordinatize]]!
 */
sicmutils.calculus.vector_field.evolution = (function sicmutils$calculus$vector_field$evolution(order){
return (function (delta_t,vector_field){
return (function (manifold_fn){
return (function (manifold_point){
return sicmutils.series.sum((function (){var fexpr__87658 = (function (){var fexpr__87659 = sicmutils.generic.exp.cljs$core$IFn$_invoke$arity$1(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(delta_t,vector_field));
return (fexpr__87659.cljs$core$IFn$_invoke$arity$1 ? fexpr__87659.cljs$core$IFn$_invoke$arity$1(manifold_fn) : fexpr__87659.call(null,manifold_fn));
})();
return (fexpr__87658.cljs$core$IFn$_invoke$arity$1 ? fexpr__87658.cljs$core$IFn$_invoke$arity$1(manifold_point) : fexpr__87658.call(null,manifold_point));
})(),order);
});
});
});
});

//# sourceMappingURL=sicmutils.calculus.vector_field.js.map
