goog.provide('sicmutils.calculus.derivative');
/**
 * Returns a new function that composes a 'tag extraction' step with `f`. The
 *   returned fn will
 * 
 *   - call the underlying `f`, producing `result`
 *   - return `(extract-tangent result tag)`
 * 
 *   If called within the scope of a function waiting for the same `tag`, the
 *   returned function will remap any instance of `tag` that appears in any
 *   differential argument passed to it to a private `fresh` tag, to prevent
 *   internal perturbation confusion. Any tangent components in the final result
 *   tagged with `fresh` will be remapped in the final result back to `tag`.
 * 
 *   If called _outside_ of a function waiting for `tag` no tag remapping will
 *   occur.
 */
sicmutils.calculus.derivative.extract_tangent_fn = (function sicmutils$calculus$derivative$extract_tangent_fn(f,tag){
return sicmutils.function$.with_arity.cljs$core$IFn$_invoke$arity$2((function() { 
var G__101179__delegate = function (args){
if(sicmutils.differential.tag_active_QMARK_(tag)){
var fresh = sicmutils.differential.fresh_tag();
return sicmutils.differential.replace_tag(sicmutils.differential.extract_tangent(sicmutils.differential.with_active_tag(tag,f,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__100983_SHARP_){
return sicmutils.differential.replace_tag(p1__100983_SHARP_,tag,fresh);
}),args)),tag),fresh,tag);
} else {
return sicmutils.differential.extract_tangent(sicmutils.differential.with_active_tag(tag,f,args),tag);
}
};
var G__101179 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__101180__i = 0, G__101180__a = new Array(arguments.length -  0);
while (G__101180__i < G__101180__a.length) {G__101180__a[G__101180__i] = arguments[G__101180__i + 0]; ++G__101180__i;}
  args = new cljs.core.IndexedSeq(G__101180__a,0,null);
} 
return G__101179__delegate.call(this,args);};
G__101179.cljs$lang$maxFixedArity = 0;
G__101179.cljs$lang$applyTo = (function (arglist__101181){
var args = cljs.core.seq(arglist__101181);
return G__101179__delegate(args);
});
G__101179.cljs$core$IFn$_invoke$arity$variadic = G__101179__delegate;
return G__101179;
})()
,sicmutils.function$.arity(f));
});
/**
 * Returns a new function that composes a 'tag replacement' step with `f`.
 * 
 *   If called within the scope of a function waiting for the same `tag`, the
 *   returned function will:
 * 
 *   - make a fresh tag, and replace all `old` tags with `fresh` in the inputs
 *   - call `f`, producing `result`
 *   - return `(replace-tag result old new)`
 *   - remap any tangent component in the result tagged with `fresh` back to `old`.
 * 
 *   If called _outside_ of a function waiting for `tag`, the returned function
 *   will apply `f` to its arguments and call `(replace-tag result old new)` with
 *   no tag-rerouting.
 */
sicmutils.calculus.derivative.replace_tag_fn = (function sicmutils$calculus$derivative$replace_tag_fn(f,old,new$){
return sicmutils.function$.with_arity.cljs$core$IFn$_invoke$arity$2((function() { 
var G__101182__delegate = function (args){
if(sicmutils.differential.tag_active_QMARK_(old)){
var fresh = sicmutils.differential.fresh_tag();
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__100984_SHARP_){
return sicmutils.differential.replace_tag(p1__100984_SHARP_,old,fresh);
}),args);
return sicmutils.differential.replace_tag(sicmutils.differential.replace_tag(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1),old,new$),fresh,old);
} else {
return sicmutils.differential.replace_tag(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args),old,new$);
}
};
var G__101182 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__101183__i = 0, G__101183__a = new Array(arguments.length -  0);
while (G__101183__i < G__101183__a.length) {G__101183__a[G__101183__i] = arguments[G__101183__i + 0]; ++G__101183__i;}
  args = new cljs.core.IndexedSeq(G__101183__a,0,null);
} 
return G__101182__delegate.call(this,args);};
G__101182.cljs$lang$maxFixedArity = 0;
G__101182.cljs$lang$applyTo = (function (arglist__101184){
var args = cljs.core.seq(arglist__101184);
return G__101182__delegate(args);
});
G__101182.cljs$core$IFn$_invoke$arity$variadic = G__101182__delegate;
return G__101182;
})()
,sicmutils.function$.arity(f));
});
(sicmutils.differential.IPerturbed["function"] = true);

(sicmutils.differential.perturbed_QMARK_["function"] = (function (_){
return false;
}));

(sicmutils.differential.replace_tag["function"] = (function (f,old,new$){
return sicmutils.calculus.derivative.replace_tag_fn(f,old,new$);
}));

(sicmutils.differential.extract_tangent["function"] = (function (f,tag){
return sicmutils.calculus.derivative.extract_tangent_fn(f,tag);
}));

(cljs.core.MetaFn.prototype.sicmutils$differential$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MetaFn.prototype.sicmutils$differential$IPerturbed$perturbed_QMARK_$arity$1 = (function (f){
var f__$1 = this;
return new cljs.core.Keyword(null,"perturbed?","perturbed?",-1042723747).cljs$core$IFn$_invoke$arity$2(f__$1.meta,false);
}));

(cljs.core.MetaFn.prototype.sicmutils$differential$IPerturbed$replace_tag$arity$3 = (function (f,old,new$){
var f__$1 = this;
return sicmutils.calculus.derivative.replace_tag_fn(f__$1.afn,old,new$);
}));

(cljs.core.MetaFn.prototype.sicmutils$differential$IPerturbed$extract_tangent$arity$2 = (function (f,tag){
var f__$1 = this;
return sicmutils.calculus.derivative.extract_tangent_fn(f__$1.afn,tag);
}));

(cljs.core.MultiFn.prototype.sicmutils$differential$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MultiFn.prototype.sicmutils$differential$IPerturbed$perturbed_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return false;
}));

(cljs.core.MultiFn.prototype.sicmutils$differential$IPerturbed$replace_tag$arity$3 = (function (f,old,new$){
var f__$1 = this;
return sicmutils.calculus.derivative.replace_tag_fn(f__$1,old,new$);
}));

(cljs.core.MultiFn.prototype.sicmutils$differential$IPerturbed$extract_tangent$arity$2 = (function (f,tag){
var f__$1 = this;
return sicmutils.calculus.derivative.extract_tangent_fn(f__$1,tag);
}));
/**
 * Returns a single-argument function of that, when called with an argument `x`,
 *   returns the derivative of `f` at `x` using forward-mode automatic
 *   differentiation.
 * 
 *   For numerical differentiation,
 *   see [[sicmutils.numerical.derivative/D-numeric]].
 * 
 *   `f` must be built out of generic operations that know how to
 *   handle [[d/Differential]] inputs in addition to any types that a normal `(f
 *   x)` call would present. This restriction does _not_ apply to operations like
 *   putting `x` into a container or destructuring; just primitive function calls.
 */
sicmutils.calculus.derivative.derivative = (function sicmutils$calculus$derivative$derivative(f){
return (function (x){
var tag = sicmutils.differential.fresh_tag();
var lifted = sicmutils.differential.bundle_element.cljs$core$IFn$_invoke$arity$3(x,(1),tag);
return sicmutils.differential.extract_tangent(sicmutils.differential.with_active_tag(tag,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lifted], null)),tag);
});
});
/**
 * Returns the partial derivative of `f` with respect to the entry in `structure`
 *   at the location `path`.
 * 
 *   `entry` defaults to `(get-in structure path)`.
 */
sicmutils.calculus.derivative.deep_partial = (function sicmutils$calculus$derivative$deep_partial(var_args){
var G__101068 = arguments.length;
switch (G__101068) {
case 3:
return sicmutils.calculus.derivative.deep_partial.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sicmutils.calculus.derivative.deep_partial.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.calculus.derivative.deep_partial.cljs$core$IFn$_invoke$arity$3 = (function (f,structure,path){
var entry = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(structure,path);
return sicmutils.calculus.derivative.deep_partial.cljs$core$IFn$_invoke$arity$4(f,structure,path,entry);
}));

(sicmutils.calculus.derivative.deep_partial.cljs$core$IFn$_invoke$arity$4 = (function (f,structure,path,entry){
if(sicmutils.value.numerical_QMARK_(entry)){
var f_entry = (function sicmutils$calculus$derivative$f_entry(x){
var G__101073 = cljs.core.assoc_in(structure,path,x);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__101073) : f.call(null,G__101073));
});
return sicmutils.calculus.derivative.derivative(f_entry)(entry);
} else {
return sicmutils.util.illegal(["non-numerical entry ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(entry)," at path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," in input structure ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure)].join(''));
}
}));

(sicmutils.calculus.derivative.deep_partial.cljs$lang$maxFixedArity = 4);

/**
 * Takes:
 * 
 *   - some function `f` of a single [[sicmutils.structure/structure?]] argument
 *   - the unperturbed structural `input`
 *   - a `selectors` vector that can be empty or contain a valid path into the
 *  `input` structure
 * 
 *   and returns either:
 * 
 *   - The full [Jacobian](https://en.wikipedia.org/wiki/Jacobian_matrix_and_determinant)
 *  of `f` at `input`, if `selectors` is empty
 *   - the entry of the Jacobian at `selectors`
 * 
 *   The Jacobian has the same shape as `input` (or the entry at `selectors`) with
 *   all orientations flipped. Multiply this by an increment in the shape of
 *   `input` to produce an increment in the output of `f`.
 */
sicmutils.calculus.derivative.jacobian = (function sicmutils$calculus$derivative$jacobian(var_args){
var G__101087 = arguments.length;
switch (G__101087) {
case 2:
return sicmutils.calculus.derivative.jacobian.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.calculus.derivative.jacobian.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.calculus.derivative.jacobian.cljs$core$IFn$_invoke$arity$2 = (function (f,input){
return sicmutils.calculus.derivative.jacobian.cljs$core$IFn$_invoke$arity$3(f,input,cljs.core.PersistentVector.EMPTY);
}));

(sicmutils.calculus.derivative.jacobian.cljs$core$IFn$_invoke$arity$3 = (function (f,input,selectors){
var prefixed = (function sicmutils$calculus$derivative$prefixed(path){
if(cljs.core.empty_QMARK_(selectors)){
return path;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(selectors,path);
}
});
var temp__5751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(input,selectors);
if(cljs.core.truth_(temp__5751__auto__)){
var piece = temp__5751__auto__;
var frame = sicmutils.structure.transpose(piece);
return sicmutils.structure.map_chain((function (entry,path,_){
return sicmutils.calculus.derivative.deep_partial.cljs$core$IFn$_invoke$arity$4(f,input,prefixed(path),entry);
}),frame);
} else {
return sicmutils.util.illegal(["Bad selectors ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selectors)," for structure ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(input)].join(''));
}
}));

(sicmutils.calculus.derivative.jacobian.cljs$lang$maxFixedArity = 3);

/**
 * Slightly more general version of [[jacobian]] that can handle a single
 *   non-structural input; dispatches to either [[jacobian]] or [[derivative]]
 *   depending on the input type.
 * 
 *   If you pass non-empty `selectors`, the returned function will throw if it
 *   receives a non-structural, non-numerical argument.
 */
sicmutils.calculus.derivative.euclidean = (function sicmutils$calculus$derivative$euclidean(var_args){
var G__101095 = arguments.length;
switch (G__101095) {
case 1:
return sicmutils.calculus.derivative.euclidean.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.calculus.derivative.euclidean.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.calculus.derivative.euclidean.cljs$core$IFn$_invoke$arity$1 = (function (f){
return sicmutils.calculus.derivative.euclidean.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentVector.EMPTY);
}));

(sicmutils.calculus.derivative.euclidean.cljs$core$IFn$_invoke$arity$2 = (function (f,selectors){
var selectors__$1 = cljs.core.vec(selectors);
return (function (input){
if(sicmutils.structure.structure_QMARK_(input)){
return sicmutils.calculus.derivative.jacobian.cljs$core$IFn$_invoke$arity$3(f,input,selectors__$1);
} else {
if(cljs.core.empty_QMARK_(selectors__$1)){
return sicmutils.calculus.derivative.derivative(f)(input);
} else {
return sicmutils.util.illegal(["Selectors ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selectors__$1)," not allowed for non-structural input ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(input)].join(''));

}
}
});
}));

(sicmutils.calculus.derivative.euclidean.cljs$lang$maxFixedArity = 2);

/**
 * Slightly wider version of [[euclidean]]. Accepts:
 * 
 *   - some function `f` of potentially many arguments
 *   - optionally, a sequence of selectors meant to index into the structural
 *  argument, or argument vector, of `f`
 * 
 *   And returns a new function that computes either the
 *   full [Jacobian](https://en.wikipedia.org/wiki/Jacobian_matrix_and_determinant)
 *   or the entry at `selectors`.
 * 
 *   Any multivariable function will have its argument vector coerced into an `up`
 *   structure. Any [[matrix/Matrix]] in a multiple-arg function call will be
 *   converted into a `down` of `up`s (a row of columns).
 * 
 *   Single-argument functions don't transform their arguments.
 */
sicmutils.calculus.derivative.multivariate = (function sicmutils$calculus$derivative$multivariate(var_args){
var G__101100 = arguments.length;
switch (G__101100) {
case 1:
return sicmutils.calculus.derivative.multivariate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sicmutils.calculus.derivative.multivariate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.calculus.derivative.multivariate.cljs$core$IFn$_invoke$arity$1 = (function (f){
return sicmutils.calculus.derivative.multivariate.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentVector.EMPTY);
}));

(sicmutils.calculus.derivative.multivariate.cljs$core$IFn$_invoke$arity$2 = (function (f,selectors){
var d = (function (p1__101097_SHARP_){
return sicmutils.calculus.derivative.euclidean.cljs$core$IFn$_invoke$arity$2(p1__101097_SHARP_,selectors);
});
var df = d(f);
var df_STAR_ = d((function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}));
return sicmutils.function$.with_arity.cljs$core$IFn$_invoke$arity$3((function() {
var G__101197 = null;
var G__101197__0 = (function (){
return cljs.core.constantly((0));
});
var G__101197__1 = (function (x){
return df(x);
});
var G__101197__2 = (function() { 
var G__101198__delegate = function (x,more){
return df_STAR_(sicmutils.matrix.seq__GT_(cljs.core.cons(x,more)));
};
var G__101198 = function (x,var_args){
var more = null;
if (arguments.length > 1) {
var G__101199__i = 0, G__101199__a = new Array(arguments.length -  1);
while (G__101199__i < G__101199__a.length) {G__101199__a[G__101199__i] = arguments[G__101199__i + 1]; ++G__101199__i;}
  more = new cljs.core.IndexedSeq(G__101199__a,0,null);
} 
return G__101198__delegate.call(this,x,more);};
G__101198.cljs$lang$maxFixedArity = 1;
G__101198.cljs$lang$applyTo = (function (arglist__101200){
var x = cljs.core.first(arglist__101200);
var more = cljs.core.rest(arglist__101200);
return G__101198__delegate(x,more);
});
G__101198.cljs$core$IFn$_invoke$arity$variadic = G__101198__delegate;
return G__101198;
})()
;
G__101197 = function(x,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return G__101197__0.call(this);
case 1:
return G__101197__1.call(this,x);
default:
var G__101201 = null;
if (arguments.length > 1) {
var G__101202__i = 0, G__101202__a = new Array(arguments.length -  1);
while (G__101202__i < G__101202__a.length) {G__101202__a[G__101202__i] = arguments[G__101202__i + 1]; ++G__101202__i;}
G__101201 = new cljs.core.IndexedSeq(G__101202__a,0,null);
}
return G__101197__2.cljs$core$IFn$_invoke$arity$variadic(x, G__101201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__101197.cljs$lang$maxFixedArity = 1;
G__101197.cljs$lang$applyTo = G__101197__2.cljs$lang$applyTo;
G__101197.cljs$core$IFn$_invoke$arity$0 = G__101197__0;
G__101197.cljs$core$IFn$_invoke$arity$1 = G__101197__1;
G__101197.cljs$core$IFn$_invoke$arity$variadic = G__101197__2.cljs$core$IFn$_invoke$arity$variadic;
return G__101197;
})()
,sicmutils.function$.arity(f),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("sicmutils.calculus.derivative","multivariate","sicmutils.calculus.derivative/multivariate",1521285626)], null));
}));

(sicmutils.calculus.derivative.multivariate.cljs$lang$maxFixedArity = 2);

var seq__101103_101204 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sicmutils.value","function","sicmutils.value/function",-1964931037),new cljs.core.Keyword("sicmutils.structure","structure","sicmutils.structure/structure",-773828675)], null));
var chunk__101104_101205 = null;
var count__101105_101206 = (0);
var i__101106_101207 = (0);
while(true){
if((i__101106_101207 < count__101105_101206)){
var t_101208 = chunk__101104_101205.cljs$core$IIndexed$_nth$arity$2(null,i__101106_101207);
sicmutils.generic.partial_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_101208,sicmutils.value.seqtype], null),((function (seq__101103_101204,chunk__101104_101205,count__101105_101206,i__101106_101207,t_101208){
return (function (f,selectors){
return sicmutils.calculus.derivative.multivariate.cljs$core$IFn$_invoke$arity$2(f,selectors);
});})(seq__101103_101204,chunk__101104_101205,count__101105_101206,i__101106_101207,t_101208))
);

sicmutils.generic.partial_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_101208,null], null),((function (seq__101103_101204,chunk__101104_101205,count__101105_101206,i__101106_101207,t_101208){
return (function (f,_){
return sicmutils.calculus.derivative.multivariate.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentVector.EMPTY);
});})(seq__101103_101204,chunk__101104_101205,count__101105_101206,i__101106_101207,t_101208))
);


var G__101209 = seq__101103_101204;
var G__101210 = chunk__101104_101205;
var G__101211 = count__101105_101206;
var G__101212 = (i__101106_101207 + (1));
seq__101103_101204 = G__101209;
chunk__101104_101205 = G__101210;
count__101105_101206 = G__101211;
i__101106_101207 = G__101212;
continue;
} else {
var temp__5753__auto___101213 = cljs.core.seq(seq__101103_101204);
if(temp__5753__auto___101213){
var seq__101103_101214__$1 = temp__5753__auto___101213;
if(cljs.core.chunked_seq_QMARK_(seq__101103_101214__$1)){
var c__4679__auto___101215 = cljs.core.chunk_first(seq__101103_101214__$1);
var G__101216 = cljs.core.chunk_rest(seq__101103_101214__$1);
var G__101217 = c__4679__auto___101215;
var G__101218 = cljs.core.count(c__4679__auto___101215);
var G__101219 = (0);
seq__101103_101204 = G__101216;
chunk__101104_101205 = G__101217;
count__101105_101206 = G__101218;
i__101106_101207 = G__101219;
continue;
} else {
var t_101220 = cljs.core.first(seq__101103_101214__$1);
sicmutils.generic.partial_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_101220,sicmutils.value.seqtype], null),((function (seq__101103_101204,chunk__101104_101205,count__101105_101206,i__101106_101207,t_101220,seq__101103_101214__$1,temp__5753__auto___101213){
return (function (f,selectors){
return sicmutils.calculus.derivative.multivariate.cljs$core$IFn$_invoke$arity$2(f,selectors);
});})(seq__101103_101204,chunk__101104_101205,count__101105_101206,i__101106_101207,t_101220,seq__101103_101214__$1,temp__5753__auto___101213))
);

sicmutils.generic.partial_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_101220,null], null),((function (seq__101103_101204,chunk__101104_101205,count__101105_101206,i__101106_101207,t_101220,seq__101103_101214__$1,temp__5753__auto___101213){
return (function (f,_){
return sicmutils.calculus.derivative.multivariate.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentVector.EMPTY);
});})(seq__101103_101204,chunk__101104_101205,count__101105_101206,i__101106_101207,t_101220,seq__101103_101214__$1,temp__5753__auto___101213))
);


var G__101221 = cljs.core.next(seq__101103_101214__$1);
var G__101222 = null;
var G__101223 = (0);
var G__101224 = (0);
seq__101103_101204 = G__101221;
chunk__101104_101205 = G__101222;
count__101105_101206 = G__101223;
i__101106_101207 = G__101224;
continue;
}
} else {
}
}
break;
}
/**
 * Derivative operator. Takes some function `f` and returns a function
 *   whose value at some point can multiply an increment in the arguments, to
 *   produce the best linear estimate of the increment in the function value.
 * 
 *   For univariate functions, [[D]] computes a derivative. For vector-valued
 *   functions, [[D]] computes
 *   the [Jacobian](https://en.wikipedia.org/wiki/Jacobian_matrix_and_determinant)
 *   of `f`.
 * 
 *   The related [[Grad]] returns a function that produces a structure of the
 *   opposite orientation as [[D]]. Both of these functions use forward-mode
 *   automatic differentiation.
 */
sicmutils.calculus.derivative.D = sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$2((function (p1__101116_SHARP_){
return sicmutils.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(p1__101116_SHARP_,cljs.core.PersistentVector.EMPTY);
}),sicmutils.generic.derivative_symbol);
sicmutils.calculus.derivative.D_as_matrix = (function sicmutils$calculus$derivative$D_as_matrix(F){
return (function (s){
return sicmutils.matrix.s__GT_m.cljs$core$IFn$_invoke$arity$3(sicmutils.structure.compatible_shape((F.cljs$core$IFn$_invoke$arity$1 ? F.cljs$core$IFn$_invoke$arity$1(s) : F.call(null,s))),(function (){var fexpr__101161 = (sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? sicmutils.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(F) : sicmutils.calculus.derivative.D.call(null,F));
return (fexpr__101161.cljs$core$IFn$_invoke$arity$1 ? fexpr__101161.cljs$core$IFn$_invoke$arity$1(s) : fexpr__101161.call(null,s));
})(),s);
});
});
/**
 * Returns an operator that, when applied to a function `f`, produces a function
 *   that computes the partial derivative of `f` at the (zero-based) slot index
 *   provided via `selectors`.
 */
sicmutils.calculus.derivative.partial = (function sicmutils$calculus$derivative$partial(var_args){
var args__4870__auto__ = [];
var len__4864__auto___101225 = arguments.length;
var i__4865__auto___101226 = (0);
while(true){
if((i__4865__auto___101226 < len__4864__auto___101225)){
args__4870__auto__.push((arguments[i__4865__auto___101226]));

var G__101227 = (i__4865__auto___101226 + (1));
i__4865__auto___101226 = G__101227;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sicmutils.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$variadic = (function (selectors){
return sicmutils.operator.make_operator.cljs$core$IFn$_invoke$arity$2((function (p1__101162_SHARP_){
return sicmutils.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(p1__101162_SHARP_,selectors);
}),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),null,(1),null)),selectors))));
}));

(sicmutils.calculus.derivative.partial.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sicmutils.calculus.derivative.partial.cljs$lang$applyTo = (function (seq101163){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq101163));
}));

/**
 * Given a differentiable function `f` and any number of arguments `xs`, returns
 *   a [[sicmutils.series/PowerSeries]] representing the [Taylor
 *   series](https://en.wikipedia.org/wiki/Taylor_series) of the function `f`
 *   expanded at `xs`.
 * 
 *   Calling [[taylor-series]] with no arguments will return the [Maclaurin
 *   series](https://en.wikipedia.org/wiki/Taylor_series#List_of_Maclaurin_series_of_some_common_functions)
 *   of `f`, ie, the Taylor series expansion at `(= x 0)`.
 * 
 *   Calling the returned power series with incremental argument `dx` will produce
 *   a [[sicmutils.series/Series]] representing the terms of the Taylor series of
 *   `f` expanded at `x` and evaluated at `x+dx`.
 * 
 *   NOTE: Just like the [[D]] operator, functions `f` of multiple-arguments are
 *   treated as a function of a single structural argument. If you pass multiple
 *   arguments `xs`, you'll have to manually wrap your multiple-argument `dx` in
 *   a [[sicmutils.structure/up]] or a vector before passing it to the returned
 *   power series.
 * 
 *   NOTE: The typical definition of a Taylor series of `f` expanded around some
 *   point `x` is
 * 
 *   $$T(p) = f(x) + \frac{f'(x)}{1!}(p-x) + \frac{f''(x)}{2!} (p-x)^2 + \ldots,$$
 * 
 *   where `p` is the evaluation point. When `(= p x)`, all derivatives of the
 *   Taylor series expansion of `f` will exactly match the derivatives of `f`
 *   itself.
 * 
 *   The Taylor series returned here (call it $T'$) is actually a function of `dx`,
 *   where
 * 
 *   $$T'(dx) = T(x+dx) = f(x) + \frac{f'(x)}{1!}(dx) + \frac{f''(x)}{2!} (dx)^2 + \ldots.$$
 */
sicmutils.calculus.derivative.taylor_series = (function sicmutils$calculus$derivative$taylor_series(var_args){
var G__101167 = arguments.length;
switch (G__101167) {
case 1:
return sicmutils.calculus.derivative.taylor_series.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___101230 = arguments.length;
var i__4865__auto___101231 = (0);
while(true){
if((i__4865__auto___101231 < len__4864__auto___101230)){
args_arr__4885__auto__.push((arguments[i__4865__auto___101231]));

var G__101232 = (i__4865__auto___101231 + (1));
i__4865__auto___101231 = G__101232;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((1)),(0),null));
return sicmutils.calculus.derivative.taylor_series.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4886__auto__);

}
});

(sicmutils.calculus.derivative.taylor_series.cljs$core$IFn$_invoke$arity$1 = (function (f){
return sicmutils.calculus.derivative.taylor_series.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
}));

(sicmutils.calculus.derivative.taylor_series.cljs$core$IFn$_invoke$arity$variadic = (function (f,xs){
return sicmutils.series.__GT_function(cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__101170 = sicmutils.generic.exp.cljs$core$IFn$_invoke$arity$1(sicmutils.calculus.derivative.D);
return (fexpr__101170.cljs$core$IFn$_invoke$arity$1 ? fexpr__101170.cljs$core$IFn$_invoke$arity$1(f) : fexpr__101170.call(null,f));
})(),xs));
}));

/** @this {Function} */
(sicmutils.calculus.derivative.taylor_series.cljs$lang$applyTo = (function (seq101165){
var G__101166 = cljs.core.first(seq101165);
var seq101165__$1 = cljs.core.next(seq101165);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101166,seq101165__$1);
}));

(sicmutils.calculus.derivative.taylor_series.cljs$lang$maxFixedArity = (1));

/**
 * Similar to [[taylor-series]], except `f` is evaluated with symbolic arguments,
 *   and these arguments are only replaced with the values `xs` after Taylor series
 *   expansion.
 * 
 *   Please see the docs for [[taylor-series]]!
 */
sicmutils.calculus.derivative.symbolic_taylor_series = (function sicmutils$calculus$derivative$symbolic_taylor_series(var_args){
var G__101174 = arguments.length;
switch (G__101174) {
case 1:
return sicmutils.calculus.derivative.symbolic_taylor_series.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___101234 = arguments.length;
var i__4865__auto___101235 = (0);
while(true){
if((i__4865__auto___101235 < len__4864__auto___101234)){
args_arr__4885__auto__.push((arguments[i__4865__auto___101235]));

var G__101236 = (i__4865__auto___101235 + (1));
i__4865__auto___101235 = G__101236;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((1)),(0),null));
return sicmutils.calculus.derivative.symbolic_taylor_series.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4886__auto__);

}
});

(sicmutils.calculus.derivative.symbolic_taylor_series.cljs$core$IFn$_invoke$arity$1 = (function (f){
return sicmutils.calculus.derivative.symbolic_taylor_series.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
}));

(sicmutils.calculus.derivative.symbolic_taylor_series.cljs$core$IFn$_invoke$arity$variadic = (function (f,xs){
var syms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(sicmutils.structure.typical_object,xs);
var replace_m = cljs.core.zipmap(cljs.core.flatten(syms),cljs.core.flatten(xs));
var series = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sicmutils.calculus.derivative.taylor_series,f,syms);
var process_term = (function sicmutils$calculus$derivative$process_term(term){
return sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(sicmutils.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function sicmutils$calculus$derivative$process_term_$_rec(x){
if(sicmutils.differential.differential_QMARK_(x)){
return sicmutils.differential.map_coefficients(sicmutils$calculus$derivative$process_term_$_rec,x);
} else {
return sicmutils.expression.substitute.cljs$core$IFn$_invoke$arity$2(sicmutils.generic.simplify.cljs$core$IFn$_invoke$arity$1(x),replace_m);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([term], 0)));
});
return sicmutils.series.fmap(process_term,series);
}));

/** @this {Function} */
(sicmutils.calculus.derivative.symbolic_taylor_series.cljs$lang$applyTo = (function (seq101172){
var G__101173 = cljs.core.first(seq101172);
var seq101172__$1 = cljs.core.next(seq101172);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101173,seq101172__$1);
}));

(sicmutils.calculus.derivative.symbolic_taylor_series.cljs$lang$maxFixedArity = (1));


//# sourceMappingURL=sicmutils.calculus.derivative.js.map
