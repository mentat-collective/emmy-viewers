goog.provide('sicmutils.util.logic');
/**
 * If true, logs assumptions.
 */
sicmutils.util.logic._STAR_log_assumptions_QMARK__STAR_ = true;
/**
 * Log an assumption.
 * 
 *   NOTE that `if-false` is not used right now. Currently this always returns true.
 * 
 *   NOTE: what this WILL do is check if the assumption is correct, to the extent
 *   that this is possible, and fail if it's provably false.
 */
sicmutils.util.logic.assume_BANG_ = (function sicmutils$util$logic$assume_BANG_(var_args){
var G__82344 = arguments.length;
switch (G__82344) {
case 2:
return sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (assumption,context){
return sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$3(assumption,context,null);
}));

(sicmutils.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (assumption,context,_if_false){
if(cljs.core.truth_(sicmutils.util.logic._STAR_log_assumptions_QMARK__STAR_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"sicmutils.util.logic",null,23,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Assuming ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(assumption)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context)].join('')], null);
}),null)),null,-1707120564,null);
} else {
}

return true;
}));

(sicmutils.util.logic.assume_BANG_.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=sicmutils.util.logic.js.map
