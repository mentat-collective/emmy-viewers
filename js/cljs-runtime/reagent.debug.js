goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__61722__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__61722 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61723__i = 0, G__61723__a = new Array(arguments.length -  0);
while (G__61723__i < G__61723__a.length) {G__61723__a[G__61723__i] = arguments[G__61723__i + 0]; ++G__61723__i;}
  args = new cljs.core.IndexedSeq(G__61723__a,0,null);
} 
return G__61722__delegate.call(this,args);};
G__61722.cljs$lang$maxFixedArity = 0;
G__61722.cljs$lang$applyTo = (function (arglist__61724){
var args = cljs.core.seq(arglist__61724);
return G__61722__delegate(args);
});
G__61722.cljs$core$IFn$_invoke$arity$variadic = G__61722__delegate;
return G__61722;
})()
);

(o.error = (function() { 
var G__61726__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__61726 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61727__i = 0, G__61727__a = new Array(arguments.length -  0);
while (G__61727__i < G__61727__a.length) {G__61727__a[G__61727__i] = arguments[G__61727__i + 0]; ++G__61727__i;}
  args = new cljs.core.IndexedSeq(G__61727__a,0,null);
} 
return G__61726__delegate.call(this,args);};
G__61726.cljs$lang$maxFixedArity = 0;
G__61726.cljs$lang$applyTo = (function (arglist__61728){
var args = cljs.core.seq(arglist__61728);
return G__61726__delegate(args);
});
G__61726.cljs$core$IFn$_invoke$arity$variadic = G__61726__delegate;
return G__61726;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
