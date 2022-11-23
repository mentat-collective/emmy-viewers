goog.provide('mathlive.core');
goog.scope(function(){
  mathlive.core.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$$mentatcollective$mathlive$dist$mathlive_min=shadow.js.require("module$node_modules$$mentatcollective$mathlive$dist$mathlive_min", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * Given a `MathfieldElement` `mf` and either a
 * 
 *   - map of keyword-or-string => option
 *   - function from current options => new options
 * 
 *   Calls [`mf.setOptions`](https://cortexjs.io/docs/mathlive/#(Mathfield%3Ainterface).setOptions)
 *   with
 * 
 *   - `opts-or-f` (if a map) or
 *   - the result of `(opts-or-f (.getOptions mf))` if a function.
 */
mathlive.core.update_options_BANG_ = (function mathlive$core$update_options_BANG_(mf,opts_or_f){
var updated = ((cljs.core.fn_QMARK_(opts_or_f))?(function (){var G__103890 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(mf.getOptions(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return (opts_or_f.cljs$core$IFn$_invoke$arity$1 ? opts_or_f.cljs$core$IFn$_invoke$arity$1(G__103890) : opts_or_f.call(null,G__103890));
})():((cljs.core.map_QMARK_(opts_or_f))?opts_or_f:(function(){throw (new Error(["Invalid option for :options."," must be fn or map."].join('')))})()
));
mf.setOptions(cljs.core.clj__GT_js(updated));

return null;
});
/**
 * Currently loaded version of
 * the [mathlive](https://www.npmjs.com/package/mathlive) npm package. 
 */
mathlive.core.mathlive_version = "0.84.0";
/**
 * Location of the `sounds` directory in the CDN-served package
 *          of [mathlive](https://www.npmjs.com/package/mathlive).
 */
mathlive.core.cdn_sounds = ["https://unpkg.com/mathlive@",mathlive.core.mathlive_version,"/dist/sounds/"].join('');
/**
 * Location of the `fonts` directory in the CDN-served package
 *          of [mathlive](https://www.npmjs.com/package/mathlive).
 */
mathlive.core.cdn_fonts = ["https://unpkg.com/mathlive@",mathlive.core.mathlive_version,"/dist/fonts/"].join('');
/**
 * Given
 *   a [`MathfieldElement`](https://cortexjs.io/docs/mathlive/#(MathfieldElement%3Aclass))
 *   `mf`, returns a [MathJSON](https://cortexjs.io/math-json/)
 *   representation (parsed into Clojure) of the currently displayed expression.
 */
mathlive.core.__GT_math_json = (function mathlive$core$__GT_math_json(mf){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(mf.expression.json);
});
/**
 * Given
 *   a [`MathfieldElement`](https://cortexjs.io/docs/mathlive/#(MathfieldElement%3Aclass))
 *   `mf`, returns a map of (string) placeholder name => current value of the
 *   placeholder.
 */
mathlive.core.__GT_placeholders = (function mathlive$core$__GT_placeholders(var_args){
var G__103893 = arguments.length;
switch (G__103893) {
case 1:
return mathlive.core.__GT_placeholders.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mathlive.core.__GT_placeholders.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mathlive.core.__GT_placeholders.cljs$core$IFn$_invoke$arity$1 = (function (mf){
return mathlive.core.__GT_placeholders.cljs$core$IFn$_invoke$arity$2(mf,cljs.core.PersistentArrayMap.EMPTY);
}));

(mathlive.core.__GT_placeholders.cljs$core$IFn$_invoke$arity$2 = (function (mf,p__103894){
var map__103898 = p__103894;
var map__103898__$1 = cljs.core.__destructure_map(map__103898);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__103898__$1,new cljs.core.Keyword(null,"type","type",1174270348),"latex");
var m = mf.placeholders;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
var field = mathlive.core.goog$module$goog$object.get(m,k);
var v = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"math-json"))?mathlive.core.__GT_math_json(field):field.getValue(type));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.js_keys(m));
}));

(mathlive.core.__GT_placeholders.cljs$lang$maxFixedArity = 2);

/**
 * Given a Clojure data structure `expr` representing
 *   a [MathJSON](https://cortexjs.io/math-json/) expression, returns a string of
 *   LaTeX representing `expr`.
 */
mathlive.core.math_json__GT_tex = (function mathlive$core$math_json__GT_tex(expr){
return module$node_modules$$mentatcollective$mathlive$dist$mathlive_min.serializeMathJsonToLatex(cljs.core.clj__GT_js(expr));
});
/**
 * Given
 * 
 *   - a [`MathfieldElement`](https://cortexjs.io/docs/mathlive/#(MathfieldElement%3Aclass)) `mf` and
 *   - a Clojure data structure `expr` representing a [MathJSON](https://cortexjs.io/math-json/) expression,
 * 
 *   sets the value of `mf` to the TeX version of `expr`.
 * 
 *   Equivalent to `(.setValue mf (math-json->tex expr))`.
 */
mathlive.core.set_math_json_BANG_ = (function mathlive$core$set_math_json_BANG_(mf,expr){
return (mf.expression = cljs.core.clj__GT_js(expr));
});
/**
 * Docstring for the Mathfield.
 */
mathlive.core.Mathfield = reagent.core.adapt_react_class(module$node_modules$react$index.forwardRef((function (props,ref){
var vec__103904 = module$node_modules$react$index.useState(null);
var mf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103904,(0),null);
var set_mf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103904,(1),null);
var map__103907 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(props);
var map__103907__$1 = cljs.core.__destructure_map(map__103907);
var props__$1 = map__103907__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103907__$1,"children");
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103907__$1,"value");
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103907__$1,"options");
var defaultValue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103907__$1,"defaultValue");
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103907__$1,"onChange");
var soundsDirectory = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103907__$1,"soundsDirectory");
var fontsDirectory = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103907__$1,"fontsDirectory");
module$node_modules$react$index.useEffect((function mathlive$core$mount(){
if(cljs.core.truth_(children)){
console.error("don't set children!");
} else {
}

if(cljs.core.truth_((function (){var and__4251__auto__ = defaultValue;
if(cljs.core.truth_(and__4251__auto__)){
return value;
} else {
return and__4251__auto__;
}
})())){
return console.error("don't both value and defaultValue!");
} else {
return null;
}
}),[]);

var opt_ref_103913 = module$node_modules$react$index.useRef(options);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(opt_ref_103913.current,options)){
(opt_ref_103913.current = options);
} else {
}

module$node_modules$react$index.useEffect((function mathlive$core$mount(){
if(cljs.core.truth_((function (){var and__4251__auto__ = mf;
if(cljs.core.truth_(and__4251__auto__)){
return options;
} else {
return and__4251__auto__;
}
})())){
return mathlive.core.update_options_BANG_(mf,options);
} else {
return null;
}
}),[opt_ref_103913.current,mf]);

module$node_modules$react$index.useEffect((function (){
if(cljs.core.truth_((function (){var and__4251__auto__ = mf;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = value;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(mf.getValue(),value);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return mf.setValue(value);
} else {
return null;
}
}),[mf,value]);

module$node_modules$react$index.useEffect((function (){
if(cljs.core.truth_((function (){var and__4251__auto__ = mf;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = mf.getValue().endsWith("?");
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),mf.position);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return mf.executeCommand("moveToPreviousWord");
} else {
return null;
}
}));

module$node_modules$react$index.useImperativeHandle(ref,(function (){
return mf;
}));

return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"math-field","math-field",1762395342),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props__$1,"onChange",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["defaultValue","value","options"], 0)),"children",(function (){var or__4253__auto__ = value;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = defaultValue;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return "";
}
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ref",set_mf,"onInput",onChange,"sounds-directory",(function (){var or__4253__auto__ = soundsDirectory;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return mathlive.core.cdn_sounds;
}
})(),"fonts-directory",(function (){var or__4253__auto__ = fontsDirectory;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return mathlive.core.cdn_fonts;
}
})()], 0))], null));
})));

//# sourceMappingURL=mathlive.core.js.map
