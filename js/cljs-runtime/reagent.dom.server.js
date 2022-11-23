goog.provide('reagent.dom.server');
var module$node_modules$react_dom$server_browser=shadow.js.require("module$node_modules$react_dom$server_browser", {});
/**
 * Turns a component into an HTML string.
 */
reagent.dom.server.render_to_string = (function reagent$dom$server$render_to_string(var_args){
var G__93150 = arguments.length;
switch (G__93150) {
case 1:
return reagent.dom.server.render_to_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.dom.server.render_to_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.server.render_to_string.cljs$core$IFn$_invoke$arity$1 = (function (component){
return reagent.dom.server.render_to_string.cljs$core$IFn$_invoke$arity$2(component,reagent.impl.template.default_compiler);
}));

(reagent.dom.server.render_to_string.cljs$core$IFn$_invoke$arity$2 = (function (component,compiler){
reagent.ratom.flush_BANG_();

var _STAR_non_reactive_STAR__orig_val__93155 = reagent.impl.util._STAR_non_reactive_STAR_;
var _STAR_non_reactive_STAR__temp_val__93156 = true;
(reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR__temp_val__93156);

try{return module$node_modules$react_dom$server_browser.renderToString(reagent.impl.protocols.as_element(compiler,component));
}finally {(reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR__orig_val__93155);
}}));

(reagent.dom.server.render_to_string.cljs$lang$maxFixedArity = 2);

/**
 * Turns a component into an HTML string, without data-react-id attributes, etc.
 */
reagent.dom.server.render_to_static_markup = (function reagent$dom$server$render_to_static_markup(var_args){
var G__93163 = arguments.length;
switch (G__93163) {
case 1:
return reagent.dom.server.render_to_static_markup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.dom.server.render_to_static_markup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.server.render_to_static_markup.cljs$core$IFn$_invoke$arity$1 = (function (component){
return reagent.dom.server.render_to_static_markup.cljs$core$IFn$_invoke$arity$2(component,reagent.impl.template.default_compiler);
}));

(reagent.dom.server.render_to_static_markup.cljs$core$IFn$_invoke$arity$2 = (function (component,compiler){
reagent.ratom.flush_BANG_();

var _STAR_non_reactive_STAR__orig_val__93166 = reagent.impl.util._STAR_non_reactive_STAR_;
var _STAR_non_reactive_STAR__temp_val__93167 = true;
(reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR__temp_val__93167);

try{return module$node_modules$react_dom$server_browser.renderToStaticMarkup(reagent.impl.protocols.as_element(compiler,component));
}finally {(reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR__orig_val__93166);
}}));

(reagent.dom.server.render_to_static_markup.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=reagent.dom.server.js.map
