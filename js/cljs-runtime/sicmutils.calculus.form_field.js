goog.provide('sicmutils.calculus.form_field');
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.calculus.form-field","oneform-field","sicmutils.calculus.form-field/oneform-field",-1295182602),new cljs.core.Keyword("sicmutils.calculus.form-field","form-field","sicmutils.calculus.form-field/form-field",-92868274));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sicmutils.calculus.form-field","form-field","sicmutils.calculus.form-field/form-field",-92868274),new cljs.core.Keyword("sicmutils.operator","operator","sicmutils.operator/operator",-1165539017));
/**
 * Returns a form field that returns, for any supplied vector field `vf`, a
 *   manifold function [[manifold/zero-manifold-function]] that maps every input
 *   manifold `point` to the scalar value 0.
 */
sicmutils.calculus.form_field.ff_COLON_zero = (function sicmutils$calculus$form_field$ff_COLON_zero(_){
return sicmutils.calculus.manifold.zero_manifold_function;
});
/**
 * Returns the rank of the supplied differential form `f`. Functions are treated
 *   as differential forms of rank 0.
 * 
 *   Throws for any non differential form supplied.
 */
sicmutils.calculus.form_field.get_rank = (function sicmutils$calculus$form_field$get_rank(f){
if(sicmutils.operator.operator_QMARK_(f)){
var or__4253__auto__ = new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(sicmutils.operator.context(f));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sicmutils.util.illegal(["operator, but not a differential form: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}
} else {
if(sicmutils.function$.function_QMARK_(f)){
return (0);
} else {
return sicmutils.util.illegal(["not a differential form: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

}
}
});
/**
 * Returns true if the supplied `f` is a form field operator, false otherwise.
 */
sicmutils.calculus.form_field.form_field_QMARK_ = (function sicmutils$calculus$form_field$form_field_QMARK_(ff){
var and__4251__auto__ = sicmutils.operator.operator_QMARK_(ff);
if(and__4251__auto__){
var subtype = new cljs.core.Keyword(null,"subtype","subtype",-2092672993).cljs$core$IFn$_invoke$arity$1(sicmutils.operator.context(ff));
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(subtype,new cljs.core.Keyword("sicmutils.calculus.form-field","form-field","sicmutils.calculus.form-field/form-field",-92868274));
} else {
return and__4251__auto__;
}
});
/**
 * Returns true if the supplied `f` is an [form field of rank
 *   n](https://en.wikipedia.org/wiki/Differential_form), false otherwise.
 * 
 *   A form-field of rank n is an operator that takes n vector fields to a
 *   real-valued function on the manifold.
 */
sicmutils.calculus.form_field.nform_field_QMARK_ = (function sicmutils$calculus$form_field$nform_field_QMARK_(f,n){
return ((sicmutils.calculus.form_field.form_field_QMARK_(f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,sicmutils.calculus.form_field.get_rank(f))));
});
/**
 * Returns true if the supplied `f` is
 *   a [One-form](https://en.wikipedia.org/wiki/One-form), false
 *   otherwise.
 * 
 *   A [One-form](https://en.wikipedia.org/wiki/One-form) takes a single vector
 *   field to a real-valued function on the manifold.
 */
sicmutils.calculus.form_field.oneform_field_QMARK_ = (function sicmutils$calculus$form_field$oneform_field_QMARK_(f){
return sicmutils.calculus.form_field.nform_field_QMARK_(f,(1));
});
/**
 * Given some form field `op`, returns a form field with the same context and
 *   its procedure replaced by `ff:zero`.
 * 
 *   The returned form field responds `true` to `v/zero?`.
 */
sicmutils.calculus.form_field.ff_COLON_zero_like = (function sicmutils$calculus$form_field$ff_COLON_zero_like(op){
if(sicmutils.calculus.form_field.form_field_QMARK_(op)){
} else {
throw (new Error("Assert failed: (form-field? op)"));
}

return sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$3(sicmutils.calculus.form_field.ff_COLON_zero,new cljs.core.Symbol(null,"ff:zero","ff:zero",628755951,null),sicmutils.operator.context(op));
});
/**
 * Returns true if the supplied form field `op` is a form field with a procedure
 *   equal to `ff:zero`, false otherwise.
 */
sicmutils.calculus.form_field.ff_COLON_zero_QMARK_ = (function sicmutils$calculus$form_field$ff_COLON_zero_QMARK_(op){
return ((sicmutils.calculus.form_field.form_field_QMARK_(op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sicmutils.operator.procedure(op),sicmutils.calculus.form_field.ff_COLON_zero)));
});
var one_like = (function sicmutils$calculus$form_field$one_like(_){
return sicmutils.util.unsupported("form fields don't have an identity.");
});
var id_like = (function sicmutils$calculus$form_field$id_like(_){
return sicmutils.util.unsupported("form fields don't have a multiplicative identity.");
});
var identity_QMARK_ = (function sicmutils$calculus$form_field$identity_QMARK_(_){
return false;
});
var defaults_87721 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"zero?","zero?",-1314772630),sicmutils.calculus.form_field.ff_COLON_zero_QMARK_,new cljs.core.Keyword(null,"zero-like","zero-like",1759410522),sicmutils.calculus.form_field.ff_COLON_zero_like,new cljs.core.Keyword(null,"one-like","one-like",887133720),one_like,new cljs.core.Keyword(null,"identity?","identity?",1589858878),identity_QMARK_,new cljs.core.Keyword(null,"identity-like","identity-like",-98546347),id_like], null);
sicmutils.calculus.form_field.ff_context = (function sicmutils$calculus$form_field$ff_context(m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults_87721,m], 0));
});
/**
 * Accepts a function `f` and an optional symbolic `name`, and returns an n-form
 *   field, ie, a subtype of [[sicmutils.operator/Operator]].
 * 
 *   `f` should be a function from n vector field arguments to a smooth real-valued
 *   function `g` of a manifold.
 * 
 *   If `n` is 0, the function will be called immediately and its return value
 *   returned.
 */
sicmutils.calculus.form_field.procedure__GT_nform_field = (function sicmutils$calculus$form_field$procedure__GT_nform_field(var_args){
var G__87673 = arguments.length;
switch (G__87673) {
case 2:
return sicmutils.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$2 = (function (f,n){
return sicmutils.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3(f,n,new cljs.core.Symbol(null,"unnamed-nform-field","unnamed-nform-field",1835726242,null));
}));

(sicmutils.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3 = (function (f,n,name){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var args = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352)));
return sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$3(f,name,sicmutils.calculus.form_field.ff_context(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"subtype","subtype",-2092672993),new cljs.core.Keyword("sicmutils.calculus.form-field","form-field","sicmutils.calculus.form-field/form-field",-92868274),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),n], null),new cljs.core.Keyword(null,"rank","rank",-1706728502),n,new cljs.core.Keyword(null,"arguments","arguments",-1182834456),args], null)));
}
}));

(sicmutils.calculus.form_field.procedure__GT_nform_field.cljs$lang$maxFixedArity = 3);

/**
 * Accepts a function `f` and an optional symbolic `name`, and returns a one-form
 *   field, ie, a subtype of [[sicmutils.operator/Operator]].
 * 
 *   `f` should be a function from a vector field to a smooth real-valued function
 *   `g` of a manifold.
 */
sicmutils.calculus.form_field.procedure__GT_oneform_field = (function sicmutils$calculus$form_field$procedure__GT_oneform_field(var_args){
var G__87675 = arguments.length;
switch (G__87675) {
case 1:
return sicmutils.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$1 = (function (f){
var name = new cljs.core.Symbol(null,"unnamed-1form-field","unnamed-1form-field",-518922876,null);
return sicmutils.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$2(f,name);
}));

(sicmutils.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$2 = (function (f,name){
return sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$3(f,name,sicmutils.calculus.form_field.ff_context(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"subtype","subtype",-2092672993),new cljs.core.Keyword("sicmutils.calculus.form-field","oneform-field","sicmutils.calculus.form-field/oneform-field",-1295182602),new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.Keyword(null,"rank","rank",-1706728502),(1),new cljs.core.Keyword(null,"arguments","arguments",-1182834456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352)], null)], null)));
}));

(sicmutils.calculus.form_field.procedure__GT_oneform_field.cljs$lang$maxFixedArity = 2);

/**
 * Takes:
 * 
 *   - a `down` tuple of `components` of the one-form field relative to
 *  `coordinate-system`
 *   - the `coordinate-system`
 * 
 *   And returns a procedure (not yet an operator!) that takes a structure of vector fields
 *   and produces a new structure of functions of manifold points.
 */
sicmutils.calculus.form_field.oneform_field_procedure = (function sicmutils$calculus$form_field$oneform_field_procedure(components,coordinate_system){
return (function (vf_components){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (vf){
if(sicmutils.calculus.vector_field.vector_field_QMARK_(vf)){
} else {
throw (new Error("Assert failed: (vf/vector-field? vf)"));
}

return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(components,sicmutils.calculus.vector_field.vector_field__GT_components(vf,coordinate_system)),sicmutils.calculus.manifold.chart(coordinate_system)], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vf_components], 0));
});
});
/**
 * Takes:
 * 
 *   - a `down` tuple of `components` of the one-form field relative to
 *  `coordinate-system`
 *   - the `coordinate-system`
 * 
 *   And returns a full one-form field.
 * 
 *   A one-field field is an operator that takes a vector field to a real-valued
 *   function on the manifold.
 */
sicmutils.calculus.form_field.components__GT_oneform_field = (function sicmutils$calculus$form_field$components__GT_oneform_field(var_args){
var G__87678 = arguments.length;
switch (G__87678) {
case 2:
return sicmutils.calculus.form_field.components__GT_oneform_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.calculus.form_field.components__GT_oneform_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.calculus.form_field.components__GT_oneform_field.cljs$core$IFn$_invoke$arity$2 = (function (components,coordinate_system){
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"oneform-field","oneform-field",119367957,null),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(components),null,(1),null)))));
return sicmutils.calculus.form_field.components__GT_oneform_field.cljs$core$IFn$_invoke$arity$3(components,coordinate_system,name);
}));

(sicmutils.calculus.form_field.components__GT_oneform_field.cljs$core$IFn$_invoke$arity$3 = (function (components,coordinate_system,name){
return sicmutils.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$2(sicmutils.calculus.form_field.oneform_field_procedure(components,coordinate_system),name);
}));

(sicmutils.calculus.form_field.components__GT_oneform_field.cljs$lang$maxFixedArity = 3);

/**
 * Given a one-form field `form` and a `coordinate-system`, returns a function
 *   from the coordinate representation of a manifold point to a coordinate
 *   representation of the coordinatized components of the form field at that
 *   point.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (let-coordinates [[x y] R2-rect]
 *  (let [f (literal-oneform-field 'f R2-rect)]
 *    ((oneform-field->components f R2-rect)
 *     (up 'x0 'y0))))
 * 
 *   ;;=> (down (f_0 (up x0 y0))
 *   ;;         (f_1 (up x0 y0)))
 *   ```
 */
sicmutils.calculus.form_field.oneform_field__GT_components = (function sicmutils$calculus$form_field$oneform_field__GT_components(form,coordinate_system){
if(sicmutils.calculus.form_field.form_field_QMARK_(form)){
} else {
throw (new Error("Assert failed: (form-field? form)"));
}

var basis = sicmutils.calculus.vector_field.coordinate_system__GT_vector_basis(coordinate_system);
return sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(form.cljs$core$IFn$_invoke$arity$1 ? form.cljs$core$IFn$_invoke$arity$1(basis) : form.call(null,basis)),sicmutils.calculus.manifold.point(coordinate_system)], 0));
});
/**
 * Given a symbolic name `sym` and a `coordinate-system`, returns a one-form field
 *   consisting of literal real-valued functions from the coordinate system's
 *   dimension for each coordinate component.
 * 
 *   These functions are passed to [[components->oneform-field]], along with the
 *   supplied `coordinate-system` and symbolic name `sym`.
 * 
 *   For coordinate systems of dimension 1, `literal-form-field`'s component
 *   functions will accept a single non-structural argument.
 */
sicmutils.calculus.form_field.literal_oneform_field = (function sicmutils$calculus$form_field$literal_oneform_field(name,coordinate_system){
var n = new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(sicmutils.calculus.manifold.manifold(coordinate_system));
var domain = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1)))?(0):sicmutils.structure.up_STAR_(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0))));
var range = sicmutils.structure.down_STAR_(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0)));
return sicmutils.calculus.form_field.components__GT_oneform_field.cljs$core$IFn$_invoke$arity$3(sicmutils.abstract$.function$.literal_function.cljs$core$IFn$_invoke$arity$3(name,domain,range),coordinate_system,name);
});
sicmutils.calculus.form_field.coordinate_basis_oneform_field_procedure = (function sicmutils$calculus$form_field$coordinate_basis_oneform_field_procedure(var_args){
var args__4870__auto__ = [];
var len__4864__auto___87725 = arguments.length;
var i__4865__auto___87726 = (0);
while(true){
if((i__4865__auto___87726 < len__4864__auto___87725)){
args__4870__auto__.push((arguments[i__4865__auto___87726]));

var G__87727 = (i__4865__auto___87726 + (1));
i__4865__auto___87726 = G__87727;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sicmutils.calculus.form_field.coordinate_basis_oneform_field_procedure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sicmutils.calculus.form_field.coordinate_basis_oneform_field_procedure.cljs$core$IFn$_invoke$arity$variadic = (function (coordinate_system,indices){
return (function (vf_structure){
var internal = (function sicmutils$calculus$form_field$internal(vf){
if(sicmutils.calculus.vector_field.vector_field_QMARK_(vf)){
} else {
throw (new Error("Assert failed: (vf/vector-field? vf)"));
}

var G__87683 = sicmutils.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.structure.component,indices),sicmutils.calculus.manifold.chart(coordinate_system)], 0));
return (vf.cljs$core$IFn$_invoke$arity$1 ? vf.cljs$core$IFn$_invoke$arity$1(G__87683) : vf.call(null,G__87683));
});
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(internal,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vf_structure], 0));
});
}));

(sicmutils.calculus.form_field.coordinate_basis_oneform_field_procedure.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sicmutils.calculus.form_field.coordinate_basis_oneform_field_procedure.cljs$lang$applyTo = (function (seq87680){
var G__87681 = cljs.core.first(seq87680);
var seq87680__$1 = cljs.core.next(seq87680);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87681,seq87680__$1);
}));

/**
 * Given some `coordinate-system`, a symbolic `name` and a sequence of indices
 *   into the structure of the coordinate system's representation, returns a
 *   one-form field.
 * 
 *   The returned one-form field at each structural spot takes a vector field and
 *   returns a function that takes the directional derivative in that coordinate's
 *   direction using the vector field.
 */
sicmutils.calculus.form_field.coordinate_basis_oneform_field = (function sicmutils$calculus$form_field$coordinate_basis_oneform_field(var_args){
var args__4870__auto__ = [];
var len__4864__auto___87728 = arguments.length;
var i__4865__auto___87729 = (0);
while(true){
if((i__4865__auto___87729 < len__4864__auto___87728)){
args__4870__auto__.push((arguments[i__4865__auto___87729]));

var G__87730 = (i__4865__auto___87729 + (1));
i__4865__auto___87729 = G__87730;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sicmutils.calculus.form_field.coordinate_basis_oneform_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sicmutils.calculus.form_field.coordinate_basis_oneform_field.cljs$core$IFn$_invoke$arity$variadic = (function (coordinate_system,name,indices){
var ofp = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sicmutils.calculus.form_field.coordinate_basis_oneform_field_procedure,coordinate_system,indices);
return sicmutils.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$2(sicmutils.function$.memoize(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sicmutils.function$.memoize,ofp)),name);
}));

(sicmutils.calculus.form_field.coordinate_basis_oneform_field.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sicmutils.calculus.form_field.coordinate_basis_oneform_field.cljs$lang$applyTo = (function (seq87684){
var G__87685 = cljs.core.first(seq87684);
var seq87684__$1 = cljs.core.next(seq87684);
var G__87686 = cljs.core.first(seq87684__$1);
var seq87684__$2 = cljs.core.next(seq87684__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87685,G__87686,seq87684__$2);
}));

/**
 * From the name of a coordinate, produce the name of the coordinate basis
 *   one-form field (as a symbol)
 */
sicmutils.calculus.form_field.coordinate_name__GT_ff_name = (function sicmutils$calculus$form_field$coordinate_name__GT_ff_name(n){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
});
/**
 * Given some `coordinate-system`, returns a structure of
 *   `coordinate-basis-oneform-field` instances.
 * 
 *   The one-form field at each structural spot takes a vector field and returns a
 *   function that takes the directional derivative in that coordinate's direction
 *   using the vector field.
 * 
 *   When applied as a function, the structure behaves equivalently to
 * 
 *   ```clojure
 *   (coordinate-basis-oneform-field <coordinate-system> 'ignored-name)
 *   ```
 * 
 *   With no indices supplied.
 */
sicmutils.calculus.form_field.coordinate_system__GT_oneform_basis = (function sicmutils$calculus$form_field$coordinate_system__GT_oneform_basis(coordinate_system){
return sicmutils.structure.map_chain((function (c_name,chain,_){
var ff_name = sicmutils.calculus.form_field.coordinate_name__GT_ff_name(c_name);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sicmutils.calculus.form_field.coordinate_basis_oneform_field,coordinate_system,ff_name,chain);
}),sicmutils.calculus.manifold.coordinate_prototype(coordinate_system));
});
/**
 * Given a structure of `components` functions defined on manifold points and and
 *   a matching `oneform-basis` (of identical structure),
 * 
 *   Returns a new one-form field that
 * 
 *   - passes its vector-field argument to `oneform-basis`, returning a new
 *  equivalent structure with each slot populated by functions from a manifold
 *  point to the directional derivative (using the vector field) in that
 *  coordinate direction
 * 
 *   - contracts the result of that operation with the result of applying each
 *  component in `components` to the manifold point.
 * 
 *   NOTE:
 *   - This is for any basis, not just a coordinate basis
 *   - The `components` are evaluated at a manifold point, not its coordinates
 *   - Given a dual basis, you can retrieve the original components
 *  with [[oneform-field->basis-components]]
 */
sicmutils.calculus.form_field.basis_components__GT_oneform_field = (function sicmutils$calculus$form_field$basis_components__GT_oneform_field(components,oneform_basis){
return sicmutils.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$1((function (vf){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(components,(oneform_basis.cljs$core$IFn$_invoke$arity$1 ? oneform_basis.cljs$core$IFn$_invoke$arity$1(vf) : oneform_basis.call(null,vf)));
}));
});
/**
 * Given a structure `w` of and a vector field basis `vector-basis`, returns a new
 *   structure generated by applying the full vector basis to each element of `w`.
 * 
 *   Here's an example of how to use this function to round trip a structure of
 *   basis components:
 * 
 *   ```clojure
 *   (let [vb    (vf/coordinate-system->vector-basis coordsys)
 *      basis (coordinate-system->oneform-basis coordsys)
 *      components (down d:dx d:dy)]
 *  (= components
 *     (-> components
 *         (basis-components->oneform-field basis)
 *         (oneform-field->basis-components vb))))
 *   ```
 */
sicmutils.calculus.form_field.oneform_field__GT_basis_components = (function sicmutils$calculus$form_field$oneform_field__GT_basis_components(w,vector_basis){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
});
/**
 * One of the two incompatible definitions of differential.
 * 
 *   This differential is a special case of exterior derivative. The other one
 *   lives at [[map/differential]].
 */
sicmutils.calculus.form_field.function__GT_oneform_field = (function sicmutils$calculus$form_field$function__GT_oneform_field(f){
if(sicmutils.function$.function_QMARK_(f)){
} else {
throw (new Error("Assert failed: (f/function? f)"));
}

var op = (function (vf_structure){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (vf){
if(sicmutils.calculus.vector_field.vector_field_QMARK_(vf)){
} else {
throw (new Error("Assert failed: (vf/vector-field? vf)"));
}

return (function (m){
var fexpr__87687 = (vf.cljs$core$IFn$_invoke$arity$1 ? vf.cljs$core$IFn$_invoke$arity$1(f) : vf.call(null,f));
return (fexpr__87687.cljs$core$IFn$_invoke$arity$1 ? fexpr__87687.cljs$core$IFn$_invoke$arity$1(m) : fexpr__87687.call(null,m));
});
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vf_structure], 0));
});
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"d","d",-682293345,null),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(f),null,(1),null)))));
return sicmutils.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$2(op,name);
});
/**
 * Alias for [[function->oneform-field]].
 *   One of the two incompatible definitions of differential.
 * 
 *   This differential is a special case of exterior derivative. The other one
 *   lives at [[map/differential]].
 */
sicmutils.calculus.form_field.differential_of_function = sicmutils.calculus.form_field.function__GT_oneform_field;
/**
 * Binary and unary cases of the wedge product.
 */
sicmutils.calculus.form_field.wedge2 = (function sicmutils$calculus$form_field$wedge2(var_args){
var G__87689 = arguments.length;
switch (G__87689) {
case 1:
return sicmutils.calculus.form_field.wedge2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.calculus.form_field.wedge2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.calculus.form_field.wedge2.cljs$core$IFn$_invoke$arity$1 = (function (form1){
return form1;
}));

(sicmutils.calculus.form_field.wedge2.cljs$core$IFn$_invoke$arity$2 = (function (form1,form2){
var n1 = sicmutils.calculus.form_field.get_rank(form1);
var n2 = sicmutils.calculus.form_field.get_rank(form2);
if((((n1 === (0))) || ((n2 === (0))))){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(form1,form2);
} else {
var n = (n1 + n2);
var k = ((1) / (sicmutils.special.factorial.factorial(n1) * sicmutils.special.factorial.factorial(n2)));
var w = (function() { 
var G__87732__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),n)){
} else {
throw (new Error(["Assert failed: ",["Wrong number of args to wedge product: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))," vs required ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),"\n","(= (count args) n)"].join('')));
}

return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (permutation,parity){
var vec__87690 = cljs.core.split_at(n1,permutation);
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87690,(0),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87690,(1),null);
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(parity,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(form1,a1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(form2,a2)], 0));
}),sicmutils.util.permute.permutation_sequence(args),cljs.core.cycle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)))));
};
var G__87732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__87733__i = 0, G__87733__a = new Array(arguments.length -  0);
while (G__87733__i < G__87733__a.length) {G__87733__a[G__87733__i] = arguments[G__87733__i + 0]; ++G__87733__i;}
  args = new cljs.core.IndexedSeq(G__87733__a,0,null);
} 
return G__87732__delegate.call(this,args);};
G__87732.cljs$lang$maxFixedArity = 0;
G__87732.cljs$lang$applyTo = (function (arglist__87736){
var args = cljs.core.seq(arglist__87736);
return G__87732__delegate(args);
});
G__87732.cljs$core$IFn$_invoke$arity$variadic = G__87732__delegate;
return G__87732;
})()
;
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"wedge","wedge",868448626,null),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(form1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sicmutils.value.freeze(form2),null,(1),null))], 0))));
return sicmutils.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3(w,n,name);
}
}));

(sicmutils.calculus.form_field.wedge2.cljs$lang$maxFixedArity = 2);

/**
 * Computes the wedge product of the sequence `fs` of one-forms.
 * 
 *   Higher rank forms can be constructed from one-forms by wedging them together.
 *   This antisymmetric tensor product is computed as a determinant. The purpose of
 *   this is to allow us to use the construction dx^dy to compute the area
 *   described by the vectors that are given to it.
 * 
 *   See Spivak p275 v1 of 'Differential Geometry' to see the correct definition.
 *   The key is that the wedge of the coordinate basis forms had better be the
 *   volume element.
 */
sicmutils.calculus.form_field.wedge = (function sicmutils$calculus$form_field$wedge(var_args){
var G__87696 = arguments.length;
switch (G__87696) {
case 0:
return sicmutils.calculus.form_field.wedge.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sicmutils.calculus.form_field.wedge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___87738 = arguments.length;
var i__4865__auto___87739 = (0);
while(true){
if((i__4865__auto___87739 < len__4864__auto___87738)){
args_arr__4885__auto__.push((arguments[i__4865__auto___87739]));

var G__87740 = (i__4865__auto___87739 + (1));
i__4865__auto___87739 = G__87740;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((1)),(0),null));
return sicmutils.calculus.form_field.wedge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4886__auto__);

}
});

(sicmutils.calculus.form_field.wedge.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.constantly((1));
}));

(sicmutils.calculus.form_field.wedge.cljs$core$IFn$_invoke$arity$1 = (function (f){
return f;
}));

(sicmutils.calculus.form_field.wedge.cljs$core$IFn$_invoke$arity$variadic = (function (f,fs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (r,l){
return sicmutils.calculus.form_field.wedge2.cljs$core$IFn$_invoke$arity$2(l,r);
}),cljs.core.reverse(cljs.core.cons(f,fs)));
}));

/** @this {Function} */
(sicmutils.calculus.form_field.wedge.cljs$lang$applyTo = (function (seq87694){
var G__87695 = cljs.core.first(seq87694);
var seq87694__$1 = cljs.core.next(seq87694);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87695,seq87694__$1);
}));

(sicmutils.calculus.form_field.wedge.cljs$lang$maxFixedArity = (1));

sicmutils.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.calculus.form-field","form-field","sicmutils.calculus.form-field/form-field",-92868274),new cljs.core.Keyword("sicmutils.calculus.form-field","form-field","sicmutils.calculus.form-field/form-field",-92868274)], null),(function (a,b){
return sicmutils.calculus.form_field.wedge2.cljs$core$IFn$_invoke$arity$2(a,b);
}));
/**
 * Returns the alternation of the supplied differential `form`.
 */
sicmutils.calculus.form_field.Alt = (function sicmutils$calculus$form_field$Alt(form){
var n = sicmutils.calculus.form_field.get_rank(form);
if((n === (0))){
return form;
} else {
var alternation = (function() { 
var sicmutils$calculus$form_field$Alt_$_alternation__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),n)){
} else {
throw (new Error(["Assert failed: ","Wrong number of args to alternation","\n","(= (count args) n)"].join('')));
}

return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(((1) / sicmutils.special.factorial.factorial(n)),(function (){var G__87698 = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (permutation,parity){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(parity,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(form,permutation));
}),sicmutils.util.permute.permutation_sequence(args),cljs.core.cycle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)));
return (sicmutils.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$1 ? sicmutils.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$1(G__87698) : sicmutils.util.aggregate.generic_sum.call(null,G__87698));
})());
};
var sicmutils$calculus$form_field$Alt_$_alternation = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__87743__i = 0, G__87743__a = new Array(arguments.length -  0);
while (G__87743__i < G__87743__a.length) {G__87743__a[G__87743__i] = arguments[G__87743__i + 0]; ++G__87743__i;}
  args = new cljs.core.IndexedSeq(G__87743__a,0,null);
} 
return sicmutils$calculus$form_field$Alt_$_alternation__delegate.call(this,args);};
sicmutils$calculus$form_field$Alt_$_alternation.cljs$lang$maxFixedArity = 0;
sicmutils$calculus$form_field$Alt_$_alternation.cljs$lang$applyTo = (function (arglist__87744){
var args = cljs.core.seq(arglist__87744);
return sicmutils$calculus$form_field$Alt_$_alternation__delegate(args);
});
sicmutils$calculus$form_field$Alt_$_alternation.cljs$core$IFn$_invoke$arity$variadic = sicmutils$calculus$form_field$Alt_$_alternation__delegate;
return sicmutils$calculus$form_field$Alt_$_alternation;
})()
;
return sicmutils.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3(alternation,n,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"Alt","Alt",-1183702663,null),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(form),null,(1),null))))));
}
});
sicmutils.calculus.form_field.tensor_product2 = (function sicmutils$calculus$form_field$tensor_product2(var_args){
var G__87700 = arguments.length;
switch (G__87700) {
case 1:
return sicmutils.calculus.form_field.tensor_product2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.calculus.form_field.tensor_product2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.calculus.form_field.tensor_product2.cljs$core$IFn$_invoke$arity$1 = (function (t1){
return t1;
}));

(sicmutils.calculus.form_field.tensor_product2.cljs$core$IFn$_invoke$arity$2 = (function (t1,t2){
var n1 = sicmutils.calculus.form_field.get_rank(t1);
var n2 = sicmutils.calculus.form_field.get_rank(t2);
if((((n1 === (0))) || ((n2 === (0))))){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(t1,t2);
} else {
var n = (n1 + n2);
var tp = (function() { 
var G__87748__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),n)){
} else {
throw (new Error(["Assert failed: ","Wrong number of args to tensor product","\n","(= (count args) n)"].join('')));
}

var vec__87701 = cljs.core.split_at(n1,args);
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87701,(0),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87701,(1),null);
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(t1,a1),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(t2,a2));
};
var G__87748 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__87749__i = 0, G__87749__a = new Array(arguments.length -  0);
while (G__87749__i < G__87749__a.length) {G__87749__a[G__87749__i] = arguments[G__87749__i + 0]; ++G__87749__i;}
  args = new cljs.core.IndexedSeq(G__87749__a,0,null);
} 
return G__87748__delegate.call(this,args);};
G__87748.cljs$lang$maxFixedArity = 0;
G__87748.cljs$lang$applyTo = (function (arglist__87750){
var args = cljs.core.seq(arglist__87750);
return G__87748__delegate(args);
});
G__87748.cljs$core$IFn$_invoke$arity$variadic = G__87748__delegate;
return G__87748;
})()
;
return sicmutils.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3(tp,n,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"tensor-product","tensor-product",553408668,null),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(t1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sicmutils.value.freeze(t2),null,(1),null))], 0)))));
}
}));

(sicmutils.calculus.form_field.tensor_product2.cljs$lang$maxFixedArity = 2);

sicmutils.calculus.form_field.w2 = (function sicmutils$calculus$form_field$w2(var_args){
var G__87705 = arguments.length;
switch (G__87705) {
case 1:
return sicmutils.calculus.form_field.w2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.calculus.form_field.w2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.calculus.form_field.w2.cljs$core$IFn$_invoke$arity$1 = (function (form1){
return form1;
}));

(sicmutils.calculus.form_field.w2.cljs$core$IFn$_invoke$arity$2 = (function (form1,form2){
var n1 = sicmutils.calculus.form_field.get_rank(form1);
var n2 = sicmutils.calculus.form_field.get_rank(form2);
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((sicmutils.special.factorial.factorial((n1 + n2)) / (sicmutils.special.factorial.factorial(n1) * sicmutils.special.factorial.factorial(n2))),sicmutils.calculus.form_field.Alt(sicmutils.calculus.form_field.tensor_product2.cljs$core$IFn$_invoke$arity$2(form1,form2)));
}));

(sicmutils.calculus.form_field.w2.cljs$lang$maxFixedArity = 2);

/**
 * Alternative definition of [[wedge]] in terms of alternation.
 */
sicmutils.calculus.form_field.alt_wedge = (function sicmutils$calculus$form_field$alt_wedge(var_args){
var args__4870__auto__ = [];
var len__4864__auto___87759 = arguments.length;
var i__4865__auto___87760 = (0);
while(true){
if((i__4865__auto___87760 < len__4864__auto___87759)){
args__4870__auto__.push((arguments[i__4865__auto___87760]));

var G__87761 = (i__4865__auto___87760 + (1));
i__4865__auto___87760 = G__87761;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sicmutils.calculus.form_field.alt_wedge.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sicmutils.calculus.form_field.alt_wedge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(sicmutils.calculus.form_field.w2,cljs.core.constantly((1)),args);
}));

(sicmutils.calculus.form_field.alt_wedge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.calculus.form_field.alt_wedge.cljs$lang$applyTo = (function (seq87706){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq87706));
}));

sicmutils.calculus.form_field.exterior_derivative_procedure = (function sicmutils$calculus$form_field$exterior_derivative_procedure(kform){
var k = sicmutils.calculus.form_field.get_rank(kform);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(0))){
return (sicmutils.calculus.form_field.differential_of_function.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.form_field.differential_of_function.cljs$core$IFn$_invoke$arity$1(kform) : sicmutils.calculus.form_field.differential_of_function.call(null,kform));
} else {
var without = (function (p1__87707_SHARP_,p2__87708_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(p1__87707_SHARP_,p2__87708_SHARP_),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((p1__87707_SHARP_ + (1)),p2__87708_SHARP_));
});
var k_PLUS_1form = (function() { 
var G__87762__delegate = function (vectors){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(vectors),(k + (1)))){
} else {
throw (new Error("Assert failed: (= (count vectors) (inc k))"));
}

return (function (point){
var n = new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(sicmutils.calculus.manifold.point__GT_manifold(point));
if((k < n)){
var G__87709 = (function (i){
var rest = without(i,vectors);
return sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(((cljs.core.even_QMARK_(i))?(1):(-1)),(function (){var fexpr__87714 = (function (){var G__87716 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(kform,rest);
var fexpr__87715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vectors,i);
return (fexpr__87715.cljs$core$IFn$_invoke$arity$1 ? fexpr__87715.cljs$core$IFn$_invoke$arity$1(G__87716) : fexpr__87715.call(null,G__87716));
})();
return (fexpr__87714.cljs$core$IFn$_invoke$arity$1 ? fexpr__87714.cljs$core$IFn$_invoke$arity$1(point) : fexpr__87714.call(null,point));
})()),(function (){var G__87717 = (function (j){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(((cljs.core.even_QMARK_((i + j)))?(1):(-1)),(function (){var fexpr__87720 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(kform,cljs.core.cons(sicmutils.operator.commutator(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vectors,i),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vectors,j)),without((j - (1)),rest)));
return (fexpr__87720.cljs$core$IFn$_invoke$arity$1 ? fexpr__87720.cljs$core$IFn$_invoke$arity$1(point) : fexpr__87720.call(null,point));
})());
});
var G__87718 = (i + (1));
var G__87719 = (k + (1));
return (sicmutils.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3 ? sicmutils.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3(G__87717,G__87718,G__87719) : sicmutils.util.aggregate.generic_sum.call(null,G__87717,G__87718,G__87719));
})());
});
var G__87710 = (0);
var G__87711 = (k + (1));
return (sicmutils.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3 ? sicmutils.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3(G__87709,G__87710,G__87711) : sicmutils.util.aggregate.generic_sum.call(null,G__87709,G__87710,G__87711));
} else {
return (0);
}
});
};
var G__87762 = function (var_args){
var vectors = null;
if (arguments.length > 0) {
var G__87764__i = 0, G__87764__a = new Array(arguments.length -  0);
while (G__87764__i < G__87764__a.length) {G__87764__a[G__87764__i] = arguments[G__87764__i + 0]; ++G__87764__i;}
  vectors = new cljs.core.IndexedSeq(G__87764__a,0,null);
} 
return G__87762__delegate.call(this,vectors);};
G__87762.cljs$lang$maxFixedArity = 0;
G__87762.cljs$lang$applyTo = (function (arglist__87765){
var vectors = cljs.core.seq(arglist__87765);
return G__87762__delegate(vectors);
});
G__87762.cljs$core$IFn$_invoke$arity$variadic = G__87762__delegate;
return G__87762;
})()
;
return sicmutils.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3(k_PLUS_1form,(k + (1)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"d","d",-682293345,null),null,(1),null)),(new cljs.core.List(null,sicmutils.value.freeze(kform),null,(1),null))))));
}
});
sicmutils.calculus.form_field.exterior_derivative = sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$2(sicmutils.calculus.form_field.exterior_derivative_procedure,new cljs.core.Symbol(null,"d","d",-682293345,null));
sicmutils.calculus.form_field.d = sicmutils.calculus.form_field.exterior_derivative;

//# sourceMappingURL=sicmutils.calculus.form_field.js.map
