goog.provide('sci.impl.core_protocols');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._deref !== 'undefined')){
} else {
sci.impl.core_protocols._deref = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__90818 = cljs.core.get_global_hierarchy;
return (fexpr__90818.cljs$core$IFn$_invoke$arity$0 ? fexpr__90818.cljs$core$IFn$_invoke$arity$0() : fexpr__90818.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__90819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-deref","-deref",-283116853,null));
return (fexpr__90819.cljs$core$IFn$_invoke$arity$1 ? fexpr__90819.cljs$core$IFn$_invoke$arity$1(ref) : fexpr__90819.call(null,ref));
}));
sci.impl.core_protocols.ideref_default = sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref){
return cljs.core.deref(ref);
}));
sci.impl.core_protocols.deref_STAR_ = (function sci$impl$core_protocols$deref_STAR_(x){
return sci.impl.core_protocols._deref.cljs$core$IFn$_invoke$arity$1(x);
});
sci.impl.core_protocols.cljs_core_ns = sci.lang.__GT_Namespace(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null);
sci.impl.core_protocols.deref_protocol = sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IDeref","cljs.core.IDeref",-783543206,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IDeref,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._deref]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._swap_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._swap_BANG_ = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__90820 = cljs.core.get_global_hierarchy;
return (fexpr__90820.cljs$core$IFn$_invoke$arity$0 ? fexpr__90820.cljs$core$IFn$_invoke$arity$0() : fexpr__90820.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-swap!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._reset_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._reset_BANG_ = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__90821 = cljs.core.get_global_hierarchy;
return (fexpr__90821.cljs$core$IFn$_invoke$arity$0 ? fexpr__90821.cljs$core$IFn$_invoke$arity$0() : fexpr__90821.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function() {
var G__90835 = null;
var G__90835__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__90822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__90822.cljs$core$IFn$_invoke$arity$2 ? fexpr__90822.cljs$core$IFn$_invoke$arity$2(ref,f) : fexpr__90822.call(null,ref,f));
});
var G__90835__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__90823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__90823.cljs$core$IFn$_invoke$arity$3 ? fexpr__90823.cljs$core$IFn$_invoke$arity$3(ref,f,a1) : fexpr__90823.call(null,ref,f,a1));
});
var G__90835__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__90824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__90824.cljs$core$IFn$_invoke$arity$4 ? fexpr__90824.cljs$core$IFn$_invoke$arity$4(ref,f,a1,a2) : fexpr__90824.call(null,ref,f,a1,a2));
});
var G__90835__5 = (function() { 
var G__90836__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods(ref);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null)),ref,f,a1,a2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__90836 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__90837__i = 0, G__90837__a = new Array(arguments.length -  4);
while (G__90837__i < G__90837__a.length) {G__90837__a[G__90837__i] = arguments[G__90837__i + 4]; ++G__90837__i;}
  args = new cljs.core.IndexedSeq(G__90837__a,0,null);
} 
return G__90836__delegate.call(this,ref,f,a1,a2,args);};
G__90836.cljs$lang$maxFixedArity = 4;
G__90836.cljs$lang$applyTo = (function (arglist__90838){
var ref = cljs.core.first(arglist__90838);
arglist__90838 = cljs.core.next(arglist__90838);
var f = cljs.core.first(arglist__90838);
arglist__90838 = cljs.core.next(arglist__90838);
var a1 = cljs.core.first(arglist__90838);
arglist__90838 = cljs.core.next(arglist__90838);
var a2 = cljs.core.first(arglist__90838);
var args = cljs.core.rest(arglist__90838);
return G__90836__delegate(ref,f,a1,a2,args);
});
G__90836.cljs$core$IFn$_invoke$arity$variadic = G__90836__delegate;
return G__90836;
})()
;
G__90835 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__90835__2.call(this,ref,f);
case 3:
return G__90835__3.call(this,ref,f,a1);
case 4:
return G__90835__4.call(this,ref,f,a1,a2);
default:
var G__90840 = null;
if (arguments.length > 4) {
var G__90841__i = 0, G__90841__a = new Array(arguments.length -  4);
while (G__90841__i < G__90841__a.length) {G__90841__a[G__90841__i] = arguments[G__90841__i + 4]; ++G__90841__i;}
G__90840 = new cljs.core.IndexedSeq(G__90841__a,0,null);
}
return G__90835__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__90840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__90835.cljs$lang$maxFixedArity = 4;
G__90835.cljs$lang$applyTo = G__90835__5.cljs$lang$applyTo;
G__90835.cljs$core$IFn$_invoke$arity$2 = G__90835__2;
G__90835.cljs$core$IFn$_invoke$arity$3 = G__90835__3;
G__90835.cljs$core$IFn$_invoke$arity$4 = G__90835__4;
G__90835.cljs$core$IFn$_invoke$arity$variadic = G__90835__5.cljs$core$IFn$_invoke$arity$variadic;
return G__90835;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref,v){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__90827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-reset!","-reset!",1965723739,null));
return (fexpr__90827.cljs$core$IFn$_invoke$arity$2 ? fexpr__90827.cljs$core$IFn$_invoke$arity$2(ref,v) : fexpr__90827.call(null,ref,v));
}));
sci.impl.core_protocols.iatom_defaults = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__90847__delegate = function (ref,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
};
var G__90847 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__90848__i = 0, G__90848__a = new Array(arguments.length -  2);
while (G__90848__i < G__90848__a.length) {G__90848__a[G__90848__i] = arguments[G__90848__i + 2]; ++G__90848__i;}
  args = new cljs.core.IndexedSeq(G__90848__a,0,null);
} 
return G__90847__delegate.call(this,ref,f,args);};
G__90847.cljs$lang$maxFixedArity = 2;
G__90847.cljs$lang$applyTo = (function (arglist__90853){
var ref = cljs.core.first(arglist__90853);
arglist__90853 = cljs.core.next(arglist__90853);
var f = cljs.core.first(arglist__90853);
var args = cljs.core.rest(arglist__90853);
return G__90847__delegate(ref,f,args);
});
G__90847.cljs$core$IFn$_invoke$arity$variadic = G__90847__delegate;
return G__90847;
})()
),sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref,v){
return cljs.core.reset_BANG_(ref,v);
}))], null);
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___90854 = arguments.length;
var i__4865__auto___90855 = (0);
while(true){
if((i__4865__auto___90855 < len__4864__auto___90854)){
args__4870__auto__.push((arguments[i__4865__auto___90855]));

var G__90856 = (i__4865__auto___90855 + (1));
i__4865__auto___90855 = G__90856;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
if(cljs.core.truth_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.core_protocols._swap_BANG_,ref,f,args);
} else {
return sci.impl.core_protocols._swap_BANG_.cljs$core$IFn$_invoke$arity$2(ref,f);
}
}));

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq90828){
var G__90829 = cljs.core.first(seq90828);
var seq90828__$1 = cljs.core.next(seq90828);
var G__90830 = cljs.core.first(seq90828__$1);
var seq90828__$2 = cljs.core.next(seq90828__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__90829,G__90830,seq90828__$2);
}));

sci.impl.core_protocols.reset_BANG__STAR_ = (function sci$impl$core_protocols$reset_BANG__STAR_(ref,v){
return sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2(ref,v);
});
sci.impl.core_protocols.swap_protocol = sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.ISwap","cljs.core.ISwap",2045511362,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.ISwap,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._swap_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.reset_protocol = sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IReset","cljs.core.IReset",348905844,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IReset,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._reset_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.defaults = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sci.impl.core_protocols.iatom_defaults,sci.impl.core_protocols.ideref_default));

//# sourceMappingURL=sci.impl.core_protocols.js.map
