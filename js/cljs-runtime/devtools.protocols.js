import "./cljs_env.js";
goog.provide('devtools.protocols');

/**
 * Marker protocol indicating a devtools template.
 * @interface
 */
devtools.protocols.ITemplate = function(){};


/**
 * Marker protocol indicating a devtools group.
 * @interface
 */
devtools.protocols.IGroup = function(){};


/**
 * Marker protocol indicating a devtools surrogate object.
 * @interface
 */
devtools.protocols.ISurrogate = function(){};


/**
 * @interface
 */
devtools.protocols.IFormat = function(){};

var devtools$protocols$IFormat$_header$dyn_62566 = (function (value){
var x__5393__auto__ = (((value == null))?null:value);
var m__5394__auto__ = (devtools.protocols._header[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5394__auto__.call(null,value));
} else {
var m__5392__auto__ = (devtools.protocols._header["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5392__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IFormat.-header",value);
}
}
});
devtools.protocols._header = (function devtools$protocols$_header(value){
if((((!((value == null)))) && ((!((value.devtools$protocols$IFormat$_header$arity$1 == null)))))){
return value.devtools$protocols$IFormat$_header$arity$1(value);
} else {
return devtools$protocols$IFormat$_header$dyn_62566(value);
}
});

var devtools$protocols$IFormat$_has_body$dyn_62573 = (function (value){
var x__5393__auto__ = (((value == null))?null:value);
var m__5394__auto__ = (devtools.protocols._has_body[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5394__auto__.call(null,value));
} else {
var m__5392__auto__ = (devtools.protocols._has_body["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5392__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IFormat.-has-body",value);
}
}
});
devtools.protocols._has_body = (function devtools$protocols$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$protocols$IFormat$_has_body$arity$1 == null)))))){
return value.devtools$protocols$IFormat$_has_body$arity$1(value);
} else {
return devtools$protocols$IFormat$_has_body$dyn_62573(value);
}
});

var devtools$protocols$IFormat$_body$dyn_62575 = (function (value){
var x__5393__auto__ = (((value == null))?null:value);
var m__5394__auto__ = (devtools.protocols._body[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5394__auto__.call(null,value));
} else {
var m__5392__auto__ = (devtools.protocols._body["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5392__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IFormat.-body",value);
}
}
});
devtools.protocols._body = (function devtools$protocols$_body(value){
if((((!((value == null)))) && ((!((value.devtools$protocols$IFormat$_body$arity$1 == null)))))){
return value.devtools$protocols$IFormat$_body$arity$1(value);
} else {
return devtools$protocols$IFormat$_body$dyn_62575(value);
}
});


//# sourceMappingURL=devtools.protocols.js.map
