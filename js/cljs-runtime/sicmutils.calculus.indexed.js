goog.provide('sicmutils.calculus.indexed');
/**
 * Takes a function or operator `f` and a metadata (or context) key `k` and
 *   attempts to fetch it from the metadata (or context). Returns `default` if `k`
 *   has no entry.
 */
sicmutils.calculus.indexed.meta_k = (function sicmutils$calculus$indexed$meta_k(var_args){
var G__87767 = arguments.length;
switch (G__87767) {
case 2:
return sicmutils.calculus.indexed.meta_k.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.calculus.indexed.meta_k.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.calculus.indexed.meta_k.cljs$core$IFn$_invoke$arity$2 = (function (f,k){
return sicmutils.calculus.indexed.meta_k.cljs$core$IFn$_invoke$arity$3(f,k,null);
}));

(sicmutils.calculus.indexed.meta_k.cljs$core$IFn$_invoke$arity$3 = (function (f,k,default$){
if(sicmutils.operator.operator_QMARK_(f)){
var G__87768 = sicmutils.operator.context(f);
var G__87769 = default$;
return (k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(G__87768,G__87769) : k.call(null,G__87768,G__87769));
} else {
var G__87770 = cljs.core.meta(f);
var G__87771 = default$;
return (k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(G__87770,G__87771) : k.call(null,G__87770,G__87771));
}
}));

(sicmutils.calculus.indexed.meta_k.cljs$lang$maxFixedArity = 3);

/**
 * Returns a copy of `f` with the `k`, `v` pair added to its metadata (if a
 *   function) or context (if an operator).
 */
sicmutils.calculus.indexed.with_kvs = (function sicmutils$calculus$indexed$with_kvs(var_args){
var args__4870__auto__ = [];
var len__4864__auto___87819 = arguments.length;
var i__4865__auto___87820 = (0);
while(true){
if((i__4865__auto___87820 < len__4864__auto___87819)){
args__4870__auto__.push((arguments[i__4865__auto___87820]));

var G__87821 = (i__4865__auto___87820 + (1));
i__4865__auto___87820 = G__87821;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sicmutils.calculus.indexed.with_kvs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sicmutils.calculus.indexed.with_kvs.cljs$core$IFn$_invoke$arity$variadic = (function (f,kvs){
if(sicmutils.operator.operator_QMARK_(f)){
return sicmutils.operator.with_context(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,sicmutils.operator.context(f),kvs));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vary_meta,f,cljs.core.assoc,kvs);
}
}));

(sicmutils.calculus.indexed.with_kvs.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sicmutils.calculus.indexed.with_kvs.cljs$lang$applyTo = (function (seq87772){
var G__87773 = cljs.core.first(seq87772);
var seq87772__$1 = cljs.core.next(seq87772);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87773,seq87772__$1);
}));

/**
 * Given an operator or function `f`, returns its registered vector of argument
 *   types, or `[]` if none exist.
 * 
 *   argument types are, for example,
 * 
 *   ```clojure
 *   [::ff/oneform-field ::vf/vector-field ::vf/vector-field]
 *   ```
 * 
 *   for a `Christoffel-2`, which takes one oneform field and two vector fields.
 */
sicmutils.calculus.indexed.argument_types = (function sicmutils$calculus$indexed$argument_types(f){
return sicmutils.calculus.indexed.meta_k.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"arguments","arguments",-1182834456),cljs.core.PersistentVector.EMPTY);
});
/**
 * Returns true if `f` has any argument types registered, false otherwise.
 */
sicmutils.calculus.indexed.has_argument_types_QMARK_ = (function sicmutils$calculus$indexed$has_argument_types_QMARK_(f){
return cljs.core.boolean$(cljs.core.seq(sicmutils.calculus.indexed.argument_types(f)));
});
/**
 * Given some operator or function `f`, returns a copy of `f` with the supplied
 *   argument types `types` registered in its metadata (if a function) or
 *   context (if an operator).
 * 
 *   Retrieve these types with [[argument-types]].
 */
sicmutils.calculus.indexed.with_argument_types = (function sicmutils$calculus$indexed$with_argument_types(f,types){
var args = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,types);
return sicmutils.calculus.indexed.with_kvs.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arguments","arguments",-1182834456),args,new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),cljs.core.count(args)], null)], 0));
});
/**
 * Given an operator or function `f`, returns its registered vector of index
 *   types, or `[]` if none exist.
 * 
 *   index types are, for example,
 * 
 *   ```clojure
 *   ['up 'down 'down]
 *   ```
 * 
 *   for a `Christoffel-2`, which takes one oneform field and two vector fields.
 */
sicmutils.calculus.indexed.index_types = (function sicmutils$calculus$indexed$index_types(f){
return sicmutils.calculus.indexed.meta_k.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"index-types","index-types",1378319778),cljs.core.PersistentVector.EMPTY);
});
/**
 * Returns true if `f` has any index types registered, false otherwise.
 */
sicmutils.calculus.indexed.has_index_types_QMARK_ = (function sicmutils$calculus$indexed$has_index_types_QMARK_(f){
return cljs.core.boolean$(cljs.core.seq(sicmutils.calculus.indexed.index_types(f)));
});
/**
 * Given some operator or function `f`, returns a copy of `f` with the supplied
 *   index types `types` registered in its metadata (if a function) or
 *   context (if an operator).
 * 
 *   Retrieve these types with [[index-types]].
 */
sicmutils.calculus.indexed.with_index_types = (function sicmutils$calculus$indexed$with_index_types(f,types){
var v = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,types);
return sicmutils.calculus.indexed.with_kvs.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"index-types","index-types",1378319778),v,new cljs.core.Keyword(null,"arity","arity",-1808556135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),cljs.core.count(v)], null)], 0));
});
/**
 * Returns true if `ts` is a well-formed-enough sequence of argument types to use
 *   for generating an indexed function via [[typed->indexed]], false otherwise.
 * 
 *   Validates that:
 * 
 *   - The sequence of types `ts` is not empty
 *   - every entry in `ts` derives from `::vf/vector-field` or `::ff/oneform-field`
 *   - form fields come before vector fields.
 */
sicmutils.calculus.indexed.valid_arg_types_QMARK_ = (function sicmutils$calculus$indexed$valid_arg_types_QMARK_(ts){
var one_ff_QMARK_ = (function sicmutils$calculus$indexed$valid_arg_types_QMARK__$_one_ff_QMARK_(t){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword("sicmutils.calculus.form-field","oneform-field","sicmutils.calculus.form-field/oneform-field",-1295182602));
});
var vf_QMARK_ = (function sicmutils$calculus$indexed$valid_arg_types_QMARK__$_vf_QMARK_(t){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352));
});
return ((cljs.core.seq(ts)) && (((cljs.core.every_QMARK_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(one_ff_QMARK_,vf_QMARK_),ts)) && (cljs.core.every_QMARK_(vf_QMARK_,cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(one_ff_QMARK_,ts))))));
});
sicmutils.calculus.indexed.typed__GT_indexed = (function sicmutils$calculus$indexed$typed__GT_indexed(f,basis){
var arg_types = sicmutils.calculus.indexed.argument_types(f);
if(cljs.core.truth_(sicmutils.calculus.indexed.valid_arg_types_QMARK_(arg_types))){
} else {
throw (new Error(["Assert failed: ",["Invalid arg types: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_types)].join(''),"\n","(valid-arg-types? arg-types)"].join('')));
}

var vector_basis = sicmutils.calculus.basis.basis__GT_vector_basis(basis);
var oneform_basis = sicmutils.calculus.basis.basis__GT_oneform_basis(basis);
var idx_types = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (t){
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352))){
return new cljs.core.Symbol(null,"down","down",-1089190199,null);
} else {
return new cljs.core.Symbol(null,"up","up",1370819414,null);
}
}),arg_types);
return sicmutils.calculus.indexed.with_index_types((function sicmutils$calculus$indexed$typed__GT_indexed_$_indexed(indices){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(indices),cljs.core.count(arg_types))){
} else {
throw (new Error(["Assert failed: ",["Indices count doesn't match expected argument types.","  Indices:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(indices),", arg-types: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_types)].join(''),"\n","(= (count indices) (count arg-types))"].join('')));
}

var args = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (t,idx){
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vector_basis,idx);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oneform_basis,idx);
}
}),arg_types,indices);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),idx_types);
});
/**
 * Returns true if `ts` is a well-formed-enough sequence of index types to use for
 *   generating a typed function via [[indexed->typed]], false otherwise.
 * 
 *   Validates that:
 * 
 *   - The sequence of types `ts` is not empty
 *   - every entry in `ts` is either the symbol `'up` or `'down`
 *   - all `'up` entries (corresponding to oneform fields) come before `'down`
 *  entries (corresponding to vector fields)
 */
sicmutils.calculus.indexed.valid_index_types_QMARK_ = (function sicmutils$calculus$indexed$valid_index_types_QMARK_(ts){
return cljs.core.boolean$(((cljs.core.seq(ts)) && (((cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"up","up",1370819414,null),null,new cljs.core.Symbol(null,"down","down",-1089190199,null),null], null), null),ts)) && (cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"down","down",-1089190199,null),null], null), null),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"up","up",1370819414,null),null], null), null),ts)))))));
});
/**
 * Returns true if:
 * 
 *   - every argument in `args` has a corresponding index type in `index-types`
 *   - every `'up` in `index-types` is aligned with a [[form-field/oneform-field?]]
 *  argument in `args`
 *   - every `'down` in `index-types` is aligned with a [[vector-field/vector-field?]]
 *  argument in `args`
 * 
 *   false otherwise.
 * 
 *   `index-types` is assumed to have passed a [[valid-index-types?]] check.
 */
sicmutils.calculus.indexed.validate_typed_args_BANG_ = (function sicmutils$calculus$indexed$validate_typed_args_BANG_(index_types,args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(index_types),cljs.core.count(args))){
} else {
throw (new Error(["Assert failed: ",["The number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(index_types))," of index-types doesn't match the number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))," of arguments."].join(''),"\n","(= (count index-types) (count args))"].join('')));
}

if(cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (index_type,arg){
return ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index_type,new cljs.core.Symbol(null,"up","up",1370819414,null))) && (sicmutils.calculus.form_field.oneform_field_QMARK_(arg)))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index_type,new cljs.core.Symbol(null,"down","down",-1089190199,null))) && (sicmutils.calculus.vector_field.vector_field_QMARK_(arg)))));
}),index_types,args))){
return null;
} else {
throw (new Error(["Assert failed: ",["Args do not match index-types 'up must be paired with oneform-fields and 'down with vector fields."," Args:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0)),", indices: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([index_types], 0))].join(''),"\n","(every? true? (map (fn [index-type arg] (or (and (= index-type (quote up)) (ff/oneform-field? arg)) (and (= index-type (quote down)) (vf/vector-field? arg)))) index-types args))"].join('')));
}
});
sicmutils.calculus.indexed.indexed__GT_typed = (function sicmutils$calculus$indexed$indexed__GT_typed(indexed,basis){
var index_types = sicmutils.calculus.indexed.index_types(indexed);
if(sicmutils.calculus.indexed.valid_index_types_QMARK_(index_types)){
} else {
throw (new Error(["Assert failed: ",["Invalid index types: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index_types)].join(''),"\n","(valid-index-types? index-types)"].join('')));
}

var vector_basis = sicmutils.calculus.basis.basis__GT_vector_basis(basis);
var oneform_basis = sicmutils.calculus.basis.basis__GT_oneform_basis(basis);
var n = sicmutils.calculus.basis.basis__GT_dimension(basis);
var arg_types = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"up","up",1370819414,null),new cljs.core.Keyword("sicmutils.calculus.form-field","oneform-field","sicmutils.calculus.form-field/oneform-field",-1295182602),new cljs.core.Symbol(null,"down","down",-1089190199,null),new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352)], null),index_types);
return sicmutils.calculus.indexed.with_argument_types((function() { 
var sicmutils$calculus$indexed$indexed__GT_typed_$_typed__delegate = function (args){
sicmutils.calculus.indexed.validate_typed_args_BANG_(index_types,args);

var n_seq = cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
var combos = sicmutils.util.permute.cartesian_product((function (){var iter__4652__auto__ = (function sicmutils$calculus$indexed$indexed__GT_typed_$_typed_$_iter__87775(s__87776){
return (new cljs.core.LazySeq(null,(function (){
var s__87776__$1 = s__87776;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__87776__$1);
if(temp__5753__auto__){
var s__87776__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__87776__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__87776__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__87778 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__87777 = (0);
while(true){
if((i__87777 < size__4651__auto__)){
var x = cljs.core._nth(c__4650__auto__,i__87777);
cljs.core.chunk_append(b__87778,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (i__87777,x,c__4650__auto__,size__4651__auto__,b__87778,s__87776__$2,temp__5753__auto__,n_seq,vector_basis,oneform_basis,n,arg_types,index_types){
return (function (i,arg){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,((sicmutils.calculus.vector_field.vector_field_QMARK_(arg))?(function (){var fexpr__87780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oneform_basis,i);
return (fexpr__87780.cljs$core$IFn$_invoke$arity$1 ? fexpr__87780.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__87780.call(null,arg));
})():(function (){var G__87781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(vector_basis,i);
return (arg.cljs$core$IFn$_invoke$arity$1 ? arg.cljs$core$IFn$_invoke$arity$1(G__87781) : arg.call(null,G__87781));
})())], null);
});})(i__87777,x,c__4650__auto__,size__4651__auto__,b__87778,s__87776__$2,temp__5753__auto__,n_seq,vector_basis,oneform_basis,n,arg_types,index_types))
,n_seq,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(x)));

var G__87828 = (i__87777 + (1));
i__87777 = G__87828;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__87778),sicmutils$calculus$indexed$indexed__GT_typed_$_typed_$_iter__87775(cljs.core.chunk_rest(s__87776__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__87778),null);
}
} else {
var x = cljs.core.first(s__87776__$2);
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (x,s__87776__$2,temp__5753__auto__,n_seq,vector_basis,oneform_basis,n,arg_types,index_types){
return (function (i,arg){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,((sicmutils.calculus.vector_field.vector_field_QMARK_(arg))?(function (){var fexpr__87782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oneform_basis,i);
return (fexpr__87782.cljs$core$IFn$_invoke$arity$1 ? fexpr__87782.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__87782.call(null,arg));
})():(function (){var G__87783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(vector_basis,i);
return (arg.cljs$core$IFn$_invoke$arity$1 ? arg.cljs$core$IFn$_invoke$arity$1(G__87783) : arg.call(null,G__87783));
})())], null);
});})(x,s__87776__$2,temp__5753__auto__,n_seq,vector_basis,oneform_basis,n,arg_types,index_types))
,n_seq,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(x)),sicmutils$calculus$indexed$indexed__GT_typed_$_typed_$_iter__87775(cljs.core.rest(s__87776__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(args);
})());
var G__87784 = (function (){var iter__4652__auto__ = (function sicmutils$calculus$indexed$indexed__GT_typed_$_typed_$_iter__87785(s__87786){
return (new cljs.core.LazySeq(null,(function (){
var s__87786__$1 = s__87786;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__87786__$1);
if(temp__5753__auto__){
var s__87786__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__87786__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__87786__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__87788 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__87787 = (0);
while(true){
if((i__87787 < size__4651__auto__)){
var combo = cljs.core._nth(c__4650__auto__,i__87787);
var indices = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,combo);
var product_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.peek,combo);
cljs.core.chunk_append(b__87788,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sicmutils.generic._STAR_,(indexed.cljs$core$IFn$_invoke$arity$1 ? indexed.cljs$core$IFn$_invoke$arity$1(indices) : indexed.call(null,indices)),cljs.core.reverse(product_args)));

var G__87830 = (i__87787 + (1));
i__87787 = G__87830;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__87788),sicmutils$calculus$indexed$indexed__GT_typed_$_typed_$_iter__87785(cljs.core.chunk_rest(s__87786__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__87788),null);
}
} else {
var combo = cljs.core.first(s__87786__$2);
var indices = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,combo);
var product_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.peek,combo);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sicmutils.generic._STAR_,(indexed.cljs$core$IFn$_invoke$arity$1 ? indexed.cljs$core$IFn$_invoke$arity$1(indices) : indexed.call(null,indices)),cljs.core.reverse(product_args)),sicmutils$calculus$indexed$indexed__GT_typed_$_typed_$_iter__87785(cljs.core.rest(s__87786__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(combos);
})();
return (sicmutils.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$1 ? sicmutils.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$1(G__87784) : sicmutils.util.aggregate.generic_sum.call(null,G__87784));
};
var sicmutils$calculus$indexed$indexed__GT_typed_$_typed = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__87831__i = 0, G__87831__a = new Array(arguments.length -  0);
while (G__87831__i < G__87831__a.length) {G__87831__a[G__87831__i] = arguments[G__87831__i + 0]; ++G__87831__i;}
  args = new cljs.core.IndexedSeq(G__87831__a,0,null);
} 
return sicmutils$calculus$indexed$indexed__GT_typed_$_typed__delegate.call(this,args);};
sicmutils$calculus$indexed$indexed__GT_typed_$_typed.cljs$lang$maxFixedArity = 0;
sicmutils$calculus$indexed$indexed__GT_typed_$_typed.cljs$lang$applyTo = (function (arglist__87832){
var args = cljs.core.seq(arglist__87832);
return sicmutils$calculus$indexed$indexed__GT_typed_$_typed__delegate(args);
});
sicmutils$calculus$indexed$indexed__GT_typed_$_typed.cljs$core$IFn$_invoke$arity$variadic = sicmutils$calculus$indexed$indexed__GT_typed_$_typed__delegate;
return sicmutils$calculus$indexed$indexed__GT_typed_$_typed;
})()
,arg_types);
});
sicmutils.calculus.indexed.outer_product = (function sicmutils$calculus$indexed$outer_product(T1,T2){
var i1 = sicmutils.calculus.indexed.index_types(T1);
var i2 = sicmutils.calculus.indexed.index_types(T2);
if(cljs.core.seq(i1)){
} else {
throw (new Error(["Assert failed: ","No index types registered for T1!","\n","(seq i1)"].join('')));
}

if(cljs.core.seq(i2)){
} else {
throw (new Error(["Assert failed: ","No index types registered for T2!","\n","(seq i2)"].join('')));
}

var map__87789 = cljs.core.frequencies(i1);
var map__87789__$1 = cljs.core.__destructure_map(map__87789);
var nu1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87789__$1,new cljs.core.Symbol(null,"up","up",1370819414,null));
var nd1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87789__$1,new cljs.core.Symbol(null,"down","down",-1089190199,null));
var map__87790 = cljs.core.frequencies(i2);
var map__87790__$1 = cljs.core.__destructure_map(map__87790);
var nu2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87790__$1,new cljs.core.Symbol(null,"up","up",1370819414,null));
var nd2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87790__$1,new cljs.core.Symbol(null,"down","down",-1089190199,null));
var nup = sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var or__4253__auto__ = nu1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})(),(function (){var or__4253__auto__ = nu2;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})());
var ndp = sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var or__4253__auto__ = nd1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})(),(function (){var or__4253__auto__ = nd2;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})());
var np = sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(nup,ndp);
var n1 = sicmutils.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(nup,nd1);
var product = (function sicmutils$calculus$indexed$outer_product_$_product(args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),np)){
} else {
throw (new Error(["Assert failed: ",["Wrong number of args to outer-product: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args)),", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(np)].join(''),"\n","(= (count args) np)"].join('')));
}

var argv = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,args);
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var G__87793 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(argv,(0),nu1),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(argv,nup,n1));
return (T1.cljs$core$IFn$_invoke$arity$1 ? T1.cljs$core$IFn$_invoke$arity$1(G__87793) : T1.call(null,G__87793));
})(),(function (){var G__87794 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(argv,nu1,nup),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(argv,n1,np));
return (T2.cljs$core$IFn$_invoke$arity$1 ? T2.cljs$core$IFn$_invoke$arity$1(G__87794) : T2.call(null,G__87794));
})());
});
return sicmutils.calculus.indexed.with_index_types(product,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(nup,new cljs.core.Symbol(null,"up","up",1370819414,null)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ndp,new cljs.core.Symbol(null,"down","down",-1089190199,null))));
});
var insertv = (function sicmutils$calculus$indexed$insertv(coll,i,v){
var l = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),i);
var r = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,i);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.conj,l,v,r);
});
sicmutils.calculus.indexed.contract = (function sicmutils$calculus$indexed$contract(T,u,d,n){
var i_types = sicmutils.calculus.indexed.index_types(T);
if(cljs.core.seq(i_types)){
} else {
throw (new Error(["Assert failed: ","No index types registered for T!","\n","(seq i-types)"].join('')));
}

var map__87795 = cljs.core.frequencies(i_types);
var map__87795__$1 = cljs.core.__destructure_map(map__87795);
var nu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87795__$1,new cljs.core.Symbol(null,"up","up",1370819414,null));
var nd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87795__$1,new cljs.core.Symbol(null,"down","down",-1089190199,null));
if(((((0) <= u)) && ((((u < nu)) && (((((0) <= d)) && ((d < nd)))))))){
} else {
throw (new Error(["Assert failed: ",["Contraction indices ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(u),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(d),"  not in the correct range. ","Each must be >= 0 and < the respective number of ","'up and 'down instances in the index types registered with T. ","These were ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nu)," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nd),"."].join(''),"\n","(and (<= 0 u) (< u nu) (<= 0 d) (< d nd))"].join('')));
}

var nuc = (nu - (1));
var ndc = (nd - (1));
return sicmutils.calculus.indexed.with_index_types((function sicmutils$calculus$indexed$contract_$_contraction(args){
var argv = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,args);
var G__87796 = (function (i){
var G__87799 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(insertv(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(argv,(0),nuc),u,i),insertv(cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(argv,nuc),d,i));
return (T.cljs$core$IFn$_invoke$arity$1 ? T.cljs$core$IFn$_invoke$arity$1(G__87799) : T.call(null,G__87799));
});
var G__87797 = (0);
var G__87798 = n;
return (sicmutils.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3 ? sicmutils.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3(G__87796,G__87797,G__87798) : sicmutils.util.aggregate.generic_sum.call(null,G__87796,G__87797,G__87798));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(nuc,new cljs.core.Symbol(null,"up","up",1370819414,null)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ndc,new cljs.core.Symbol(null,"down","down",-1089190199,null))));
});
sicmutils.calculus.indexed.typed__GT_structure = (function sicmutils$calculus$indexed$typed__GT_structure(T,basis){
var vector_basis = sicmutils.calculus.basis.basis__GT_vector_basis(basis);
var oneform_basis = sicmutils.calculus.basis.basis__GT_oneform_basis(basis);
var lp = (function sicmutils$calculus$indexed$typed__GT_structure_$_lp(arg_types,argv){
if(cljs.core.empty_QMARK_(arg_types)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(T,argv);
} else {
var vec__87804 = arg_types;
var seq__87805 = cljs.core.seq(vec__87804);
var first__87806 = cljs.core.first(seq__87805);
var seq__87805__$1 = cljs.core.next(seq__87805);
var t = first__87806;
var ts = seq__87805__$1;
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e){
return sicmutils$calculus$indexed$typed__GT_structure_$_lp(ts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(argv,e));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352)))?vector_basis:((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword("sicmutils.calculus.form-field","oneform-field","sicmutils.calculus.form-field/oneform-field",-1295182602)))?oneform_basis:sicmutils.util.illegal(["Invalid argument type: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t], 0)),". Every arg must be a vector field or oneform field."].join(''))
))], 0));
}
});
return lp(sicmutils.calculus.indexed.argument_types(T),cljs.core.PersistentVector.EMPTY);
});
sicmutils.calculus.indexed.structure__GT_typed = (function sicmutils$calculus$indexed$structure__GT_typed(coeff_functions,basis){
var vector_basis = sicmutils.calculus.basis.basis__GT_vector_basis(basis);
var oneform_basis = sicmutils.calculus.basis.basis__GT_oneform_basis(basis);
var arg_types = (function (){var cf = coeff_functions;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if((!(sicmutils.structure.structure_QMARK_(cf)))){
return acc;
} else {
var shape = (function (){var G__87811 = sicmutils.structure.orientation(cf);
return (sicmutils.structure.opposite_orientation.cljs$core$IFn$_invoke$arity$1 ? sicmutils.structure.opposite_orientation.cljs$core$IFn$_invoke$arity$1(G__87811) : sicmutils.structure.opposite_orientation.call(null,G__87811));
})();
var t = (function (){var G__87812 = shape;
var G__87812__$1 = (((G__87812 instanceof cljs.core.Keyword))?G__87812.fqn:null);
switch (G__87812__$1) {
case "sicmutils.structure/up":
return new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352);

break;
case "sicmutils.structure/down":
return new cljs.core.Keyword("sicmutils.calculus.form-field","oneform-field","sicmutils.calculus.form-field/oneform-field",-1295182602);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__87812__$1)].join('')));

}
})();
var G__87837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cf,(0));
var G__87838 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,t);
cf = G__87837;
acc = G__87838;
continue;
}
break;
}
})();
return sicmutils.calculus.indexed.with_argument_types((function() { 
var sicmutils$calculus$indexed$structure__GT_typed_$_indexed_fn__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),cljs.core.count(arg_types))){
} else {
throw (new Error(["Assert failed: ",["The number of args ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))," did not match the expected arity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(arg_types)),". ","Please supply args corresponding to the expected types ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_types),"."].join(''),"\n","(= (count args) (count arg-types))"].join('')));
}

if(cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (arg,arg_type){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(sicmutils.value.kind(arg),arg_type);
}),args,arg_types))){
} else {
throw (new Error(["Assert failed: ",["Invalid arguments: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(args),". ","Please supply args corresponding to the expected types ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_types),"."].join(''),"\n","(every? true? (map (fn [arg arg-type] (isa? (v/kind arg) arg-type)) args arg-types))"].join('')));
}

var lp = (function sicmutils$calculus$indexed$structure__GT_typed_$_indexed_fn_$_lp(args__$1,arg_types__$1){
if(cljs.core.empty_QMARK_(args__$1)){
return sicmutils.calculus.manifold.one_manifold_function;
} else {
var arg = cljs.core.first(args__$1);
var arg_type = cljs.core.first(arg_types__$1);
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(arg_type,new cljs.core.Keyword("sicmutils.calculus.vector-field","vector-field","sicmutils.calculus.vector-field/vector-field",-647012352))){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (etilde){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((etilde.cljs$core$IFn$_invoke$arity$1 ? etilde.cljs$core$IFn$_invoke$arity$1(arg) : etilde.call(null,arg)),sicmutils$calculus$indexed$structure__GT_typed_$_indexed_fn_$_lp(cljs.core.rest(args__$1),cljs.core.rest(arg_types__$1)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([oneform_basis], 0));
} else {
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(arg_type,new cljs.core.Keyword("sicmutils.calculus.form-field","oneform-field","sicmutils.calculus.form-field/oneform-field",-1295182602))){
return sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e){
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2((arg.cljs$core$IFn$_invoke$arity$1 ? arg.cljs$core$IFn$_invoke$arity$1(e) : arg.call(null,e)),sicmutils$calculus$indexed$structure__GT_typed_$_indexed_fn_$_lp(cljs.core.rest(args__$1),cljs.core.rest(arg_types__$1)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
} else {
return null;
}
}
}
});
return sicmutils.generic._STAR_.cljs$core$IFn$_invoke$arity$2(lp(args,arg_types),coeff_functions);
};
var sicmutils$calculus$indexed$structure__GT_typed_$_indexed_fn = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__87841__i = 0, G__87841__a = new Array(arguments.length -  0);
while (G__87841__i < G__87841__a.length) {G__87841__a[G__87841__i] = arguments[G__87841__i + 0]; ++G__87841__i;}
  args = new cljs.core.IndexedSeq(G__87841__a,0,null);
} 
return sicmutils$calculus$indexed$structure__GT_typed_$_indexed_fn__delegate.call(this,args);};
sicmutils$calculus$indexed$structure__GT_typed_$_indexed_fn.cljs$lang$maxFixedArity = 0;
sicmutils$calculus$indexed$structure__GT_typed_$_indexed_fn.cljs$lang$applyTo = (function (arglist__87842){
var args = cljs.core.seq(arglist__87842);
return sicmutils$calculus$indexed$structure__GT_typed_$_indexed_fn__delegate(args);
});
sicmutils$calculus$indexed$structure__GT_typed_$_indexed_fn.cljs$core$IFn$_invoke$arity$variadic = sicmutils$calculus$indexed$structure__GT_typed_$_indexed_fn__delegate;
return sicmutils$calculus$indexed$structure__GT_typed_$_indexed_fn;
})()
,arg_types);
});

//# sourceMappingURL=sicmutils.calculus.indexed.js.map
