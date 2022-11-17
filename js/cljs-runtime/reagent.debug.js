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
var G__84926__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__84926 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__84930__i = 0, G__84930__a = new Array(arguments.length -  0);
while (G__84930__i < G__84930__a.length) {G__84930__a[G__84930__i] = arguments[G__84930__i + 0]; ++G__84930__i;}
  args = new cljs.core.IndexedSeq(G__84930__a,0,null);
} 
return G__84926__delegate.call(this,args);};
G__84926.cljs$lang$maxFixedArity = 0;
G__84926.cljs$lang$applyTo = (function (arglist__84932){
var args = cljs.core.seq(arglist__84932);
return G__84926__delegate(args);
});
G__84926.cljs$core$IFn$_invoke$arity$variadic = G__84926__delegate;
return G__84926;
})()
);

(o.error = (function() { 
var G__84933__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__84933 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__84938__i = 0, G__84938__a = new Array(arguments.length -  0);
while (G__84938__i < G__84938__a.length) {G__84938__a[G__84938__i] = arguments[G__84938__i + 0]; ++G__84938__i;}
  args = new cljs.core.IndexedSeq(G__84938__a,0,null);
} 
return G__84933__delegate.call(this,args);};
G__84933.cljs$lang$maxFixedArity = 0;
G__84933.cljs$lang$applyTo = (function (arglist__84943){
var args = cljs.core.seq(arglist__84943);
return G__84933__delegate(args);
});
G__84933.cljs$core$IFn$_invoke$arity$variadic = G__84933__delegate;
return G__84933;
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
