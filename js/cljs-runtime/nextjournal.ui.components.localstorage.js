goog.provide('nextjournal.ui.components.localstorage');
nextjournal.ui.components.localstorage.set_item_BANG_ = (function nextjournal$ui$components$localstorage$set_item_BANG_(key,val){
return window.localStorage.setItem(key,val);
});
nextjournal.ui.components.localstorage.get_item = (function nextjournal$ui$components$localstorage$get_item(key){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(window.localStorage.getItem(key));
});
/**
 * Remove the browser's localStorage value for the given `key`
 */
nextjournal.ui.components.localstorage.remove_item_BANG_ = (function nextjournal$ui$components$localstorage$remove_item_BANG_(key){
return window.localStorage.removeItem(key);
});

//# sourceMappingURL=nextjournal.ui.components.localstorage.js.map
