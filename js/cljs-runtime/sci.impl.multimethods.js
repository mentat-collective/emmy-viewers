goog.provide('sci.impl.multimethods');
/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
sci.impl.multimethods.check_valid_options = (function sci$impl$multimethods$check_valid_options(var_args){
var args__4870__auto__ = [];
var len__4864__auto___76609 = arguments.length;
var i__4865__auto___76610 = (0);
while(true){
if((i__4865__auto___76610 < len__4864__auto___76609)){
args__4870__auto__.push((arguments[i__4865__auto___76610]));

var G__76611 = (i__4865__auto___76610 + (1));
i__4865__auto___76610 = G__76611;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sci.impl.multimethods.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sci.impl.multimethods.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.keys(options)),valid_keys))){
var message = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"Only these options are valid: ",cljs.core.first(valid_keys),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__76570_SHARP_){
return [", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__76570_SHARP_)].join('');
}),cljs.core.rest(valid_keys)));
throw (new Error(message));
} else {
return null;
}
}));

(sci.impl.multimethods.check_valid_options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.multimethods.check_valid_options.cljs$lang$applyTo = (function (seq76571){
var G__76572 = cljs.core.first(seq76571);
var seq76571__$1 = cljs.core.next(seq76571);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76572,seq76571__$1);
}));

/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attr-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 * 
 *   :default
 * 
 *   The default dispatch value, defaults to :default
 * 
 *   :hierarchy
 * 
 *   The value used for hierarchical dispatch (e.g. ::square is-a ::shape)
 * 
 *   Hierarchies are type-like relationships that do not depend upon type
 *   inheritance. By default Clojure's multimethods dispatch off of a
 *   global hierarchy map.  However, a hierarchy relationship can be
 *   created with the derive function used to augment the root ancestor
 *   created with make-hierarchy.
 * 
 *   Multimethods expect the value of the hierarchy option to be supplied as
 *   a reference type e.g. a var (i.e. via the Var-quote dispatch macro #'
 *   or the var special form).
 */
sci.impl.multimethods.defmulti = (function sci$impl$multimethods$defmulti(var_args){
var args__4870__auto__ = [];
var len__4864__auto___76613 = arguments.length;
var i__4865__auto___76614 = (0);
while(true){
if((i__4865__auto___76614 < len__4864__auto___76613)){
args__4870__auto__.push((arguments[i__4865__auto___76614]));

var G__76615 = (i__4865__auto___76614 + (1));
i__4865__auto___76614 = G__76615;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((4) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((4)),(0),null)):null);
return sci.impl.multimethods.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4871__auto__);
});

(sci.impl.multimethods.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,mm_name,options){
var docstring = ((typeof cljs.core.first(options) === 'string')?cljs.core.first(options):null);
var options__$1 = ((typeof cljs.core.first(options) === 'string')?cljs.core.next(options):options);
var m = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.first(options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.next(options__$1):options__$1);
var dispatch_fn = cljs.core.first(options__$2);
var options__$3 = cljs.core.next(options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta(mm_name))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(mm_name),m__$1):m__$1);
var mm_name__$1 = cljs.core.with_meta(mm_name,m__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328));
var hierarchy = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options__$4,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),sci.impl.hierarchies.global_hierarchy(ctx));
sci.impl.multimethods.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(options__$4,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defonce","cljs.core/defonce",-1291833100,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(mm_name__$1,m__$2),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"method-table__76577__auto__","method-table__76577__auto__",-263675129,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"prefer-table__76578__auto__","prefer-table__76578__auto__",-1433895683,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method-cache__76579__auto__","method-cache__76579__auto__",-1740441417,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cached-hierarchy__76580__auto__","cached-hierarchy__76580__auto__",1706548355,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","multi-fn-impl","cljs.core/multi-fn-impl",1399453884,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(mm_name__$1)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,dispatch_fn,null,(1),null)),(new cljs.core.List(null,default$,null,(1),null)),(new cljs.core.List(null,hierarchy,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method-table__76577__auto__","method-table__76577__auto__",-263675129,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefer-table__76578__auto__","prefer-table__76578__auto__",-1433895683,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method-cache__76579__auto__","method-cache__76579__auto__",-1740441417,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cached-hierarchy__76580__auto__","cached-hierarchy__76580__auto__",1706548355,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.multimethods.defmulti.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.multimethods.defmulti.cljs$lang$applyTo = (function (seq76581){
var G__76582 = cljs.core.first(seq76581);
var seq76581__$1 = cljs.core.next(seq76581);
var G__76583 = cljs.core.first(seq76581__$1);
var seq76581__$2 = cljs.core.next(seq76581__$1);
var G__76584 = cljs.core.first(seq76581__$2);
var seq76581__$3 = cljs.core.next(seq76581__$2);
var G__76585 = cljs.core.first(seq76581__$3);
var seq76581__$4 = cljs.core.next(seq76581__$3);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76582,G__76583,G__76584,G__76585,seq76581__$4);
}));

sci.impl.multimethods.multi_fn_QMARK__impl = (function sci$impl$multimethods$multi_fn_QMARK__impl(x){
return (x instanceof cljs.core.MultiFn);
});
sci.impl.multimethods.multi_fn_impl = (function sci$impl$multimethods$multi_fn_impl(name,dispatch_fn,default$,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
return (new cljs.core.MultiFn(name,dispatch_fn,default$,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy));
});
sci.impl.multimethods.multi_fn_add_method_impl = (function sci$impl$multimethods$multi_fn_add_method_impl(multifn,dispatch_val,f){
return cljs.core._add_method(multifn,dispatch_val,f);
});
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
sci.impl.multimethods.defmethod = (function sci$impl$multimethods$defmethod(var_args){
var args__4870__auto__ = [];
var len__4864__auto___76618 = arguments.length;
var i__4865__auto___76619 = (0);
while(true){
if((i__4865__auto___76619 < len__4864__auto___76618)){
args__4870__auto__.push((arguments[i__4865__auto___76619]));

var G__76620 = (i__4865__auto___76619 + (1));
i__4865__auto___76619 = G__76620;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((4) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((4)),(0),null)):null);
return sci.impl.multimethods.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4871__auto__);
});

(sci.impl.multimethods.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_x,_y,multifn,dispatch_val,fn_tail){
return (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","multi-fn-add-method-impl","clojure.core/multi-fn-add-method-impl",-1293834231,null),(new cljs.core.List(null,multifn,(new cljs.core.List(null,dispatch_val,(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),fn_tail),null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(sci.impl.multimethods.defmethod.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.multimethods.defmethod.cljs$lang$applyTo = (function (seq76592){
var G__76593 = cljs.core.first(seq76592);
var seq76592__$1 = cljs.core.next(seq76592);
var G__76594 = cljs.core.first(seq76592__$1);
var seq76592__$2 = cljs.core.next(seq76592__$1);
var G__76595 = cljs.core.first(seq76592__$2);
var seq76592__$3 = cljs.core.next(seq76592__$2);
var G__76596 = cljs.core.first(seq76592__$3);
var seq76592__$4 = cljs.core.next(seq76592__$3);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76593,G__76594,G__76595,G__76596,seq76592__$4);
}));


//# sourceMappingURL=sci.impl.multimethods.js.map
