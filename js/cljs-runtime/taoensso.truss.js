goog.provide('taoensso.truss');
/**
 * Returns current value of dynamic assertion data.
 */
taoensso.truss.get_dynamic_assertion_data = (function taoensso$truss$get_dynamic_assertion_data(){
return taoensso.truss.impl._STAR__QMARK_data_STAR_;
});
taoensso.truss._error_fn = (function taoensso$truss$_error_fn(f){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword(null,"default","default",-1987822328))){
return taoensso.truss.impl.default_error_fn;
} else {
return f;
}
});
/**
 * Sets the root (fn [data-map-delay]) called on invariant violations.
 */
taoensso.truss.set_error_fn_BANG_ = (function taoensso$truss$set_error_fn_BANG_(f){
return (taoensso.truss.impl._STAR_error_fn_STAR_ = taoensso.truss._error_fn(f));
});

//# sourceMappingURL=taoensso.truss.js.map
