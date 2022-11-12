goog.provide('nextjournal.viewer');
goog.scope(function(){
  nextjournal.viewer.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
nextjournal.viewer.edn_type = (function nextjournal$viewer$edn_type(tag,value){
var G__77388 = tag;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),G__77388)){
return new cljs.core.Keyword(null,"edn-var","edn-var",-1138947582);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"object","object",-1179821820,null),G__77388)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(value),new cljs.core.Symbol(null,"clojure.lang.Atom","clojure.lang.Atom",661742144,null))){
return new cljs.core.Keyword(null,"edn-atom","edn-atom",1506626965);
} else {
return new cljs.core.Keyword(null,"edn-object","edn-object",1123440659);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("nextjournal","empty","nextjournal/empty",2001390345,null),G__77388)){
return new cljs.core.Keyword(null,"edn-empty","edn-empty",-939905458);
} else {
return new cljs.core.Keyword(null,"edn-unknown-tag","edn-unknown-tag",2056867940);

}
}
}
});

/**
 * @interface
 */
nextjournal.viewer.ITypeKey = function(){};

var nextjournal$viewer$ITypeKey$_type_key$dyn_77516 = (function (x){
var x__4550__auto__ = (((x == null))?null:x);
var m__4551__auto__ = (nextjournal.viewer._type_key[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4551__auto__.call(null,x));
} else {
var m__4549__auto__ = (nextjournal.viewer._type_key["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4549__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("ITypeKey.-type-key",x);
}
}
});
/**
 * Returns type name as keyword
 */
nextjournal.viewer._type_key = (function nextjournal$viewer$_type_key(x){
if((((!((x == null)))) && ((!((x.nextjournal$viewer$ITypeKey$_type_key$arity$1 == null)))))){
return x.nextjournal$viewer$ITypeKey$_type_key$arity$1(x);
} else {
return nextjournal$viewer$ITypeKey$_type_key$dyn_77516(x);
}
});

nextjournal.viewer.value_type = (function nextjournal$viewer$value_type(value){
if((((typeof Element !== 'undefined')) && ((value instanceof Element)))){
return new cljs.core.Keyword(null,"element","element",1974019749);
} else {
if((((!((value == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === value.nextjournal$viewer$ITypeKey$))))?true:(((!value.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(nextjournal.viewer.ITypeKey,value):false)):cljs.core.native_satisfies_QMARK_(nextjournal.viewer.ITypeKey,value))){
return nextjournal.viewer._type_key(value);
} else {
if(cljs.core.var_QMARK_(value)){
return new cljs.core.Keyword(null,"var","var",-769682797);
} else {
if((((!((value == null))))?(((((value.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IDeref$))))?true:false):false)){
return new cljs.core.Keyword(null,"derefable","derefable",377265868);
} else {
if(cljs.core.map_QMARK_(value)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.array_QMARK_(value)){
return new cljs.core.Keyword(null,"array","array",-2080713842);
} else {
if(cljs.core.set_QMARK_(value)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if(cljs.core.vector_QMARK_(value)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.list_QMARK_(value)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.seq_QMARK_(value)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.fn_QMARK_(value)){
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
} else {
if(cljs.core.uuid_QMARK_(value)){
return new cljs.core.Keyword(null,"uuid","uuid",-2145095719);
} else {
if(typeof value === 'string'){
return new cljs.core.Keyword(null,"string","string",-1989541586);
} else {
if(((typeof value === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("bigint",goog.typeOf(value))))){
return new cljs.core.Keyword(null,"number","number",1570378438);
} else {
if((value instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"keyword","keyword",811389747);
} else {
if((value instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if((value == null)){
return new cljs.core.Keyword(null,"nil","nil",99600501);
} else {
if(cljs.core.boolean_QMARK_(value)){
return new cljs.core.Keyword(null,"boolean","boolean",-1919418404);
} else {
if(cljs.core.inst_QMARK_(value)){
return new cljs.core.Keyword(null,"inst","inst",645962501);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cognitect.transit.tagged_value_QMARK_(value);
if(cljs.core.truth_(and__4251__auto__)){
return (!(cljs.core.coll_QMARK_(value)));
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.Keyword(null,"transit-tagged-value","transit-tagged-value",-2070390989);
} else {
if(cljs.core.truth_(goog.isObject(value))){
return new cljs.core.Keyword(null,"object","object",1474613949);
} else {
return new cljs.core.Keyword(null,"untyped","untyped",-219541759);

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
nextjournal.viewer.obj__GT_clj = (function nextjournal$viewer$obj__GT_clj(obj){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,key){
var v = (obj[key]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("function",goog.typeOf(v))){
return result;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,key,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,nextjournal.viewer.goog$module$goog$object.getKeys(obj));
});
nextjournal.viewer.coll_decoration = (function nextjournal$viewer$coll_decoration(type){
var G__77392 = type;
var G__77392__$1 = (((G__77392 instanceof cljs.core.Keyword))?G__77392.fqn:null);
switch (G__77392__$1) {
case "vector":
case "array":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);

break;
case "set":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#{","}"], null);

break;
case "list":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);

break;
case "map":
case "object":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{","}"], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77392__$1)].join('')));

}
});
nextjournal.viewer.increase_items = (20);
nextjournal.viewer.color_classes = (function nextjournal$viewer$color_classes(selected_QMARK_){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value-color","value-color",-1448916937),(cljs.core.truth_(selected_QMARK_)?"white-90":"dark-green"),new cljs.core.Keyword(null,"symbol-color","symbol-color",-983152467),(cljs.core.truth_(selected_QMARK_)?"white-90":"dark-blue"),new cljs.core.Keyword(null,"prefix-color","prefix-color",-1936761188),(cljs.core.truth_(selected_QMARK_)?"white-50":"black-30"),new cljs.core.Keyword(null,"label-color","label-color",813573617),(cljs.core.truth_(selected_QMARK_)?"white-90":"black-60"),new cljs.core.Keyword(null,"badge-background-color","badge-background-color",1563868990),(cljs.core.truth_(selected_QMARK_)?"bg-white-20":"bg-black-10")], null);
});
nextjournal.viewer.count_badge = (function nextjournal$viewer$count_badge(selected_QMARK_,coll){
var map__77394 = nextjournal.viewer.color_classes(selected_QMARK_);
var map__77394__$1 = cljs.core.__destructure_map(map__77394);
var badge_background_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77394__$1,new cljs.core.Keyword(null,"badge-background-color","badge-background-color",1563868990));
var label_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77394__$1,new cljs.core.Keyword(null,"label-color","label-color",813573617));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-center.flex.items-center","span.text-center.flex.items-center",1287786510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(badge_background_color)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label_color)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"0.5em",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"0.5em",new cljs.core.Keyword(null,"height","height",1025178622),"1.1em",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(7)], null)], null),cljs.core.count(coll)], null);
});
nextjournal.viewer.more_button = (function nextjournal$viewer$more_button(visible_nb_items_ratom,p__77395){
var map__77396 = p__77395;
var map__77396__$1 = cljs.core.__destructure_map(map__77396);
var _opts = map__77396__$1;
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77396__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77396__$1,new cljs.core.Keyword(null,"count","count",2139924085));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"div.result-data-field","div.result-data-field",-311480386):new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(visible_nb_items_ratom,cljs.core._PLUS_,nextjournal.viewer.increase_items);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.monospace","span.monospace",2051170564),(cljs.core.truth_(expanded_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-1 mt-3 -ml-1 hover:bg-gray-200 rounded cursor-pointer",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pl-2 text-gray-500 inspected-value"], null)),(count - cljs.core.deref(visible_nb_items_ratom)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," more\u2026"], null)], null)], null);
});
nextjournal.viewer.browsify_button = (function nextjournal$viewer$browsify_button(path,p__77400,view){
var map__77401 = p__77400;
var map__77401__$1 = cljs.core.__destructure_map(map__77401);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77401__$1,new cljs.core.Keyword("nextjournal","dispatch","nextjournal/dispatch",-950337451));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.browsify-button","span.browsify-button",457611905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"hover:bg-gray-200 cursor-pointer rounded",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__77402 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"path","path",-188191168),path], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__77402) : dispatch.call(null,G__77402));
})], null),view], null);
});
/**
 * Check if we allow the key to be navibable based on the type.
 *   Currently we only support primitive types, except symbols.
 */
nextjournal.viewer.navigable_key_QMARK_ = (function nextjournal$viewer$navigable_key_QMARK_(item){
return ((typeof item === 'number') || (((typeof item === 'string') || ((item instanceof cljs.core.Keyword)))));
});
/**
 * Determines whether an item should be made clickable for datafy/nav. Is the view
 *   editable? The runtime active? Does the runtime support datafy/nav? Did the node
 *   execute since start of the runtime? ...
 */
nextjournal.viewer.navigable_item_QMARK_ = (function nextjournal$viewer$navigable_item_QMARK_(options,path,item){
var and__4251__auto__ = cljs.core.empty_QMARK_(path);
if(and__4251__auto__){
var and__4251__auto____$1 = new cljs.core.Keyword("nextjournal","navigable?","nextjournal/navigable?",-2104170780).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(and__4251__auto____$1)){
return nextjournal.viewer.navigable_key_QMARK_(item);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
});
nextjournal.viewer.inspect_coll = (function nextjournal$viewer$inspect_coll(_type,_options,_coll){
var visible_nb_items = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((20));
return (function (type,p__77403,coll){
var map__77405 = p__77403;
var map__77405__$1 = cljs.core.__destructure_map(map__77405);
var options = map__77405__$1;
var expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77405__$1,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77405__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var truncated_QMARK_ = new cljs.core.Keyword("nextjournal","truncated?","nextjournal/truncated?",-980673354).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(coll));
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(expanded),path);
var parent = cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(path));
var short_QMARK_ = ((cljs.core.seq(path)) && (cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(expanded),parent))));
var items = (function (){var G__77412 = coll;
if(cljs.core.object_QMARK_(coll)){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(G__77412);
} else {
return G__77412;
}
})();
var count = cljs.core.count(items);
var visible_items = cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(visible_nb_items),items);
var map_like_QMARK_ = (function (){var G__77413 = type;
var G__77413__$1 = (((G__77413 instanceof cljs.core.Keyword))?G__77413.fqn:null);
switch (G__77413__$1) {
case "map":
case "object":
return true;

break;
default:
return false;

}
})();
var vec__77407 = nextjournal.viewer.coll_decoration(type);
var open = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77407,(0),null);
var close = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77407,(1),null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(expanded_QMARK_)?"result-data-expanded":"result-data-collapsed")], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((short_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"pointer",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(expanded,cljs.core.update,path,cljs.core.not);

var temp__5753__auto__ = new cljs.core.Keyword(null,"on-expand","on-expand",-525903108).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5753__auto__)){
var on_expand = temp__5753__auto__;
return requestAnimationFrame(on_expand);
} else {
return null;
}
})], null)),((((cljs.core.empty_QMARK_(items)) || (short_QMARK_)))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.disclose","div.disclose",-1582817702),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(expanded_QMARK_)?null:"collapsed")], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),(function (){var G__77414 = type;
var G__77414__$1 = (((G__77414 instanceof cljs.core.Keyword))?G__77414.fqn:null);
switch (G__77414__$1) {
case "map":
return "Map";

break;
case "object":
return "Object";

break;
case "array":
return "Array";

break;
case "set":
return "Set";

break;
case "list":
return "List";

break;
case "vector":
return "Vector";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77414__$1)].join('')));

}
})()], null),(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.not(map_like_QMARK_);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return truncated_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),"(",count,(cljs.core.truth_(truncated_QMARK_)?"+":null),")"], null):null)], null),((short_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),open], null)),((((cljs.core.empty_QMARK_(items)) || (short_QMARK_)))?null:cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,item){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"div.result-data-field","div.result-data-field",-311480386):new cljs.core.Keyword(null,"span","span",1394872991)),(cljs.core.truth_((function (){var or__4253__auto__ = expanded_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return map_like_QMARK_;
}
})())?(function (){var item__$1 = (cljs.core.truth_((function (){var or__4253__auto__ = map_like_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.set_QMARK_(coll);
}
})())?item:i);
var G__77427 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(map_like_QMARK_)?"cmt-atom":"cmt-number")], null),(cljs.core.truth_(map_like_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,cljs.core.update.cljs$core$IFn$_invoke$arity$4(options,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj,i),item__$1], null):i),": "], null);
if(cljs.core.truth_(nextjournal.viewer.navigable_item_QMARK_(options,path,item__$1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.browsify_button,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nav","path","nav/path",-188053725).cljs$core$IFn$_invoke$arity$1(options),item__$1),options], null),G__77427);
} else {
return G__77427;
}
})():null),(function (){var item__$1 = ((cljs.core.map_QMARK_(coll))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,item):((cljs.core.object_QMARK_(coll))?nextjournal.viewer.goog$module$goog$object.get(coll,item):item
));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,cljs.core.update.cljs$core$IFn$_invoke$arity$4(options,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj,i),item__$1], null);
})(),(((((count > cljs.core.deref(visible_nb_items))) || ((i < (count - (1))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),", "], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),(cljs.core.truth_(map_like_QMARK_)?cljs.core.keys(visible_items):visible_items)))),(((((!(short_QMARK_))) && ((count > cljs.core.deref(visible_nb_items)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.more_button,visible_nb_items,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expanded_QMARK_,new cljs.core.Keyword(null,"count","count",2139924085),count], null)], null):null),((short_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),close], null))], null);
});
});
/**
 * Safe access to a value at key a js object.
 * 
 * Returns `'forbidden` if reading the property would result in a `SecurityError`.
 * https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy
 */
nextjournal.viewer.value_of = (function nextjournal$viewer$value_of(obj,k){
try{var v = (function (){var obj77430 = obj;
if((!((obj77430 == null)))){
return (obj77430[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
v.constructor;

return v;
}catch (e77429){if((e77429 instanceof Error)){
var _ = e77429;
return new cljs.core.Symbol(null,"forbidden","forbidden",-338916619,null);
} else {
throw e77429;

}
}});
nextjournal.viewer.inspect_object = (function nextjournal$viewer$inspect_object(_inspect,_options,_obj){
var visible_nb_items = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((20));
return (function (inspect,p__77431,obj){
var map__77432 = p__77431;
var map__77432__$1 = cljs.core.__destructure_map(map__77432);
var options = map__77432__$1;
var expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77432__$1,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77432__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(expanded),path);
var parent = cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(path));
var short_QMARK_ = ((cljs.core.seq(path)) && (cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(expanded),parent))));
var empty_QMARK_ = nextjournal.viewer.goog$module$goog$object.isEmpty(obj);
var counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var t = cljs.core.type(obj);
var items = cljs.core.js_keys(obj);
var count = cljs.core.count(items);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(expanded_QMARK_)?"result-data-expanded":"result-data-collapsed")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),((short_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"pointer",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(expanded,cljs.core.update,path,cljs.core.not);

var temp__5753__auto__ = new cljs.core.Keyword(null,"on-expand","on-expand",-525903108).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5753__auto__)){
var on_expand = temp__5753__auto__;
return requestAnimationFrame(on_expand);
} else {
return null;
}
})], null)),(cljs.core.truth_((function (){var or__4253__auto__ = empty_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return short_QMARK_;
}
})())?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.disclose","div.disclose",-1582817702),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(expanded_QMARK_)?null:"collapsed")], null)], null)),(cljs.core.truth_(t)?t.name:"Object")], null),((short_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227)," {"], null)),(cljs.core.truth_((function (){var or__4253__auto__ = empty_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return short_QMARK_;
}
})())?null:(function (){var iter__4652__auto__ = (function nextjournal$viewer$inspect_object_$_iter__77441(s__77442){
return (new cljs.core.LazySeq(null,(function (){
var s__77442__$1 = s__77442;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__77442__$1);
if(temp__5753__auto__){
var s__77442__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77442__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__77442__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__77444 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__77443 = (0);
while(true){
if((i__77443 < size__4651__auto__)){
var k = cljs.core._nth(c__4650__auto__,i__77443);
if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.not(t);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return obj.hasOwnProperty(k);
}
})())){
var i = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.inc);
cljs.core.chunk_append(b__77444,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"div.result-data-field","div.result-data-field",-311480386):new cljs.core.Keyword(null,"span","span",1394872991)),((((cljs.core.not(expanded_QMARK_)) && (((0) < i))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),", "], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.cmt-atom","span.inspected-value.cmt-atom",817327266),k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-punctuation","span.cmt-punctuation",-1691691548),": "], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [inspect,cljs.core.update.cljs$core$IFn$_invoke$arity$4(options,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj,k),nextjournal.viewer.value_of(obj,k)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__77521 = (i__77443 + (1));
i__77443 = G__77521;
continue;
} else {
var G__77522 = (i__77443 + (1));
i__77443 = G__77522;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77444),nextjournal$viewer$inspect_object_$_iter__77441(cljs.core.chunk_rest(s__77442__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77444),null);
}
} else {
var k = cljs.core.first(s__77442__$2);
if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.not(t);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return obj.hasOwnProperty(k);
}
})())){
var i = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.inc);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"div.result-data-field","div.result-data-field",-311480386):new cljs.core.Keyword(null,"span","span",1394872991)),((((cljs.core.not(expanded_QMARK_)) && (((0) < i))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),", "], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.cmt-atom","span.inspected-value.cmt-atom",817327266),k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-punctuation","span.cmt-punctuation",-1691691548),": "], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [inspect,cljs.core.update.cljs$core$IFn$_invoke$arity$4(options,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj,k),nextjournal.viewer.value_of(obj,k)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),nextjournal$viewer$inspect_object_$_iter__77441(cljs.core.rest(s__77442__$2)));
} else {
var G__77523 = cljs.core.rest(s__77442__$2);
s__77442__$1 = G__77523;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(visible_nb_items),items));
})()),((((cljs.core.not((function (){var or__4253__auto__ = empty_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return short_QMARK_;
}
})())) && ((count > cljs.core.deref(visible_nb_items)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.more_button,visible_nb_items,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expanded_QMARK_,new cljs.core.Keyword(null,"count","count",2139924085),count], null)], null):null),((short_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),"}"], null))], null);
});
});
nextjournal.viewer.meta_QMARK_ = (function nextjournal$viewer$meta_QMARK_(x){
return cljs.core.contains_QMARK_(x,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947));
});
nextjournal.viewer.meta = (function nextjournal$viewer$meta(data){
if(nextjournal.viewer.meta_QMARK_(data)){
return data;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(data),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),(function (){var G__77458 = data;
if((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IWithMeta$))))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,data))){
return cljs.core.with_meta(G__77458,cljs.core.PersistentArrayMap.EMPTY);
} else {
return G__77458;
}
})());
}
});
nextjournal.viewer.with_meta = (function nextjournal$viewer$with_meta(data,m){
if(nextjournal.viewer.meta_QMARK_(data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947).cljs$core$IFn$_invoke$arity$1(data));
} else {
if((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IWithMeta$))))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,data))){
return cljs.core.with_meta(data,m);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),data);

}
}
});
nextjournal.viewer.vary_meta = (function nextjournal$viewer$vary_meta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___77524 = arguments.length;
var i__4865__auto___77525 = (0);
while(true){
if((i__4865__auto___77525 < len__4864__auto___77524)){
args__4870__auto__.push((arguments[i__4865__auto___77525]));

var G__77526 = (i__4865__auto___77525 + (1));
i__4865__auto___77525 = G__77526;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return nextjournal.viewer.vary_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(nextjournal.viewer.vary_meta.cljs$core$IFn$_invoke$arity$variadic = (function (data,f,args){
return nextjournal.viewer.with_meta(data,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,nextjournal.viewer.meta(data),args));
}));

(nextjournal.viewer.vary_meta.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nextjournal.viewer.vary_meta.cljs$lang$applyTo = (function (seq77461){
var G__77462 = cljs.core.first(seq77461);
var seq77461__$1 = cljs.core.next(seq77461);
var G__77463 = cljs.core.first(seq77461__$1);
var seq77461__$2 = cljs.core.next(seq77461__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77462,G__77463,seq77461__$2);
}));

/**
 * The given viewer will be used to display data
 */
nextjournal.viewer.with_viewer = (function nextjournal$viewer$with_viewer(data,viewer){
return nextjournal.viewer.vary_meta.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),viewer], 0));
});
/**
 * Binds viewers to types, eg {:boolean view-fn}
 */
nextjournal.viewer.with_viewers = (function nextjournal$viewer$with_viewers(data,viewers){
return nextjournal.viewer.vary_meta.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841),viewers], 0));
});
/**
 * Like `with-viewer` but takes viewer as 1st argument
 */
nextjournal.viewer.view_as = (function nextjournal$viewer$view_as(viewer,data){
return nextjournal.viewer.with_viewer(data,viewer);
});
nextjournal.viewer.html = (function nextjournal$viewer$html(v){
return nextjournal.viewer.with_viewer(v,((typeof v === 'string')?new cljs.core.Keyword(null,"html","html",-998796897):new cljs.core.Keyword(null,"hiccup","hiccup",1218876238)));
});
nextjournal.viewer._BANG_viewers = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"latex","latex",-1820161144),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"plotly","plotly",817625458),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"mathjax","mathjax",-1009833386),new cljs.core.Keyword(null,"reagent","reagent",2131627322),new cljs.core.Keyword(null,"flex-col","flex-col",1900872603),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"html","html",-998796897)],[nextjournal.viewer.markdown.viewer,(function (v){
if(cljs.core.truth_((function (){var obj77467 = v;
if((!((obj77467 == null)))){
return (obj77467["parentNode"]);
} else {
return undefined;
}
})())){
return "DOM Element";
} else {
return nextjournal.viewer.view_as(new cljs.core.Keyword(null,"reagent","reagent",2131627322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__77465_SHARP_){
if(cljs.core.truth_(p1__77465_SHARP_)){
var temp__5753__auto___77534 = p1__77465_SHARP_.firstChild;
if(cljs.core.truth_(temp__5753__auto___77534)){
var childElement_77535 = temp__5753__auto___77534;
p1__77465_SHARP_.removeChild(childElement_77535);
} else {
}

return p1__77465_SHARP_.appendChild(v);
} else {
return null;
}
})], null)], null));
}
}),(function (s){
return nextjournal.viewer.view_as(new cljs.core.Keyword(null,"html","html",-998796897),nextjournal.viewer.katex.to_html_string.cljs$core$IFn$_invoke$arity$1(s));
}),(function (p1__77464_SHARP_){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(p1__77464_SHARP_);
}),nextjournal.viewer.plotly.viewer,nextjournal.viewer.code.viewer,nextjournal.viewer.mathjax.viewer,(function (p1__77466_SHARP_){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1((function (){var G__77468 = p1__77466_SHARP_;
if(cljs.core.fn_QMARK_(p1__77466_SHARP_)){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__77468],null));
} else {
return G__77468;
}
})());
}),(function (xs){
return nextjournal.viewer.view_as(new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,x], null);
})),xs));
}),nextjournal.viewer.vega_lite.viewer,(function (html_str){
return nextjournal.viewer.view_as(new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),html_str], null)], null)], null));
})]));
/**
 * Registers a viewer function under a given name.
 */
nextjournal.viewer.register_viewer_BANG_ = (function nextjournal$viewer$register_viewer_BANG_(name,viewer){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nextjournal.viewer._BANG_viewers,cljs.core.assoc,name,viewer);
});
/**
 * Registers a viewers map.
 */
nextjournal.viewer.register_viewers_BANG_ = (function nextjournal$viewer$register_viewers_BANG_(viewers){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nextjournal.viewer._BANG_viewers,cljs.core.merge,viewers);
});
nextjournal.viewer._STAR_eval_form_STAR_ = null;
nextjournal.viewer.render_with_viewer = (function nextjournal$viewer$render_with_viewer(options,viewer,value){
var fexpr__77470 = (((viewer instanceof cljs.core.Keyword))?(function (){var or__4253__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841),viewer], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var fexpr__77471 = cljs.core.deref(nextjournal.viewer._BANG_viewers);
return (fexpr__77471.cljs$core$IFn$_invoke$arity$1 ? fexpr__77471.cljs$core$IFn$_invoke$arity$1(viewer) : fexpr__77471.call(null,viewer));
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"viewer-not-found","viewer-not-found",2084437371),viewer], 0));
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return nextjournal.viewer.inspect;
}
}
}
})():((cljs.core.fn_QMARK_(viewer))?viewer:((cljs.core.list_QMARK_(viewer))?((cljs.core.fn_QMARK_(nextjournal.viewer._STAR_eval_form_STAR_))?nextjournal.viewer._STAR_eval_form_STAR_.call(null,viewer):(function(){throw (new Error("Viewer is a list but `*eval-form*` is not bound to a function."))})()):(function(){throw (new Error(["Viewer is not a keyword or function or list: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(viewer)].join('')))})()
)));
return (fexpr__77470.cljs$core$IFn$_invoke$arity$2 ? fexpr__77470.cljs$core$IFn$_invoke$arity$2(value,options) : fexpr__77470.call(null,value,options));
});
nextjournal.viewer.inspect = (function nextjournal$viewer$inspect(var_args){
var G__77473 = arguments.length;
switch (G__77473) {
case 1:
return nextjournal.viewer.inspect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.viewer.inspect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('nextjournal.viewer.inspect', nextjournal.viewer.inspect);

(nextjournal.viewer.inspect.cljs$core$IFn$_invoke$arity$1 = (function (data){
return nextjournal.viewer.inspect.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,data);
}));

(nextjournal.viewer.inspect.cljs$core$IFn$_invoke$arity$2 = (function (options,data){
var map__77476 = (function (){var G__77478 = options;
if(cljs.core.not(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(options))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__77478,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"expanded","expanded",-3020742),reagent.core.state_atom(reagent.core.current_component())], null)], 0));
} else {
return G__77478;
}
})();
var map__77476__$1 = cljs.core.__destructure_map(map__77476);
var options__$1 = map__77476__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77476__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77476__$1,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
var map__77477 = nextjournal.viewer.meta(data);
var map__77477__$1 = cljs.core.__destructure_map(map__77477);
var value_meta = map__77477__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77477__$1,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77477__$1,new cljs.core.Keyword("nextjournal","tag","nextjournal/tag",1515661557));
var options__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(options__$1,new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841),cljs.core.merge,new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841).cljs$core$IFn$_invoke$arity$1(value_meta));
var type_key = (cljs.core.truth_(tag)?nextjournal.viewer.edn_type(tag,value):nextjournal.viewer.value_type(value));
var viewer_key = new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759).cljs$core$IFn$_invoke$arity$2(value_meta,type_key);
var viewer = (function (){var or__4253__auto__ = ((((cljs.core.fn_QMARK_(viewer_key)) || (cljs.core.list_QMARK_(viewer_key))))?viewer_key:null);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841),viewer_key], null));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var fexpr__77479 = cljs.core.deref(nextjournal.viewer._BANG_viewers);
return (fexpr__77479.cljs$core$IFn$_invoke$arity$1 ? fexpr__77479.cljs$core$IFn$_invoke$arity$1(viewer_key) : fexpr__77479.call(null,viewer_key));
}
}
})();
if(cljs.core.truth_(module$node_modules$react$index.isValidElement(data))){
return data;
} else {
if(cljs.core.truth_(viewer)){
return nextjournal.viewer.inspect.cljs$core$IFn$_invoke$arity$2(options__$2,nextjournal.viewer.render_with_viewer(options__$2,viewer,value));
} else {
var G__77480 = type_key;
var G__77480__$1 = (((G__77480 instanceof cljs.core.Keyword))?G__77480.fqn:null);
switch (G__77480__$1) {
case "edn-var":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),"#'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(value))," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,options__$2,cljs.core.second(value)], null)], null);

break;
case "edn-atom":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),new cljs.core.Symbol(null,"clojure.lang.Atom","clojure.lang.Atom",661742144,null)," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,options__$2,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(value,(2)))], null)], null);

break;
case "edn-object":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),"#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," "], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"[",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),cljs.core.first(value)], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"0x",cljs.core.second(value).toString((16))], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,options__$2,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value,(2))], null),"]"], null)], null);

break;
case "edn-empty":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),"#"], null)], null);

break;
case "edn-unknown-tag":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),"#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,options__$2,(function (){var m = cljs.core.select_keys(value_meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal","truncated?","nextjournal/truncated?",-980673354)], null));
var G__77481 = value;
if(cljs.core.seq(m)){
return nextjournal.viewer.vary_meta.cljs$core$IFn$_invoke$arity$variadic(G__77481,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
} else {
return G__77481;
}
})()], null)], null);

break;
case "var":
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),"#'",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,options__$2,data.sym], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,options__$2,cljs.core.deref(data)], null)], null);

break;
case "derefable":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(data)], 0))," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,options__$2,cljs.core.deref(data)], null)], null);

break;
case "map":
case "array":
case "set":
case "list":
case "vector":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect_coll,type_key,options__$2,data], null);

break;
case "transit-tagged-value":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),"#",data.tag," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,options__$2,data.rep], null)], null);

break;
case "fn":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),"\u0192"], null),"()"], null);

break;
case "uuid":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),"#uuid "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,options__$2,cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)], null)], null);

break;
case "string":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-string.inspected-value","span.cmt-string.inspected-value",-610812505),"\"",data,"\""], null);

break;
case "number":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-number.inspected-value","span.cmt-number.inspected-value",1512437969),(cljs.core.truth_(Number.isNaN(data))?"NaN":cljs.core.str.cljs$core$IFn$_invoke$arity$1(data))], null);

break;
case "keyword":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-atom.inspected-value","span.cmt-atom.inspected-value",95454221),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)], null);

break;
case "symbol":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-keyword.inspected-value","span.cmt-keyword.inspected-value",-1622971182),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)], null);

break;
case "nil":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-atom.inspected-value","span.cmt-atom.inspected-value",95454221),"nil"], null);

break;
case "boolean":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-bool.inspected-value","span.cmt-bool.inspected-value",-117987200),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)], null);

break;
case "inst":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),"#inst "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,options__$2,data.toISOString()], null)], null);

break;
case "object":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect_object,nextjournal.viewer.inspect,options__$2,data], null);

break;
case "untyped":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-invalid.untyped-value.inspected-value","span.cmt-invalid.untyped-value.inspected-value",-47539899),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(data)),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data),"]"].join('')], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77480__$1)].join('')));

}

}
}
}));

(nextjournal.viewer.inspect.cljs$lang$maxFixedArity = 2);

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"Shows how to display a markdown document and viewers using the `:flex-col` viewer.",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.view_as(new cljs.core.Keyword(null,"markdown","markdown",1227225089),"# Hello Markdown\nLet's give *this* a try!"),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8),(9),(0),(1),(2),(3),(4),(5),(6),(7),(8),(9),(0),(1),(2),(3),(4),(5),(6),(7),(8),(9)], null)], null),nextjournal.viewer.view_as(new cljs.core.Keyword(null,"markdown","markdown",1227225089),"And some more [markdown](https://daringfireball.net/projects/markdown/).")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),new cljs.core.Keyword(null,"flex-col","flex-col",1900872603)], null))], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"markdown-doc"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","state","nextjournal.devcards/state",1376810469),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"a","a",-2123407586),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2),new cljs.core.Keyword(null,"c","c",-1763192079),(3),new cljs.core.Keyword(null,"d","d",1972142424),true,new cljs.core.Keyword(null,"e","e",1381269198),false], null)], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"Shows how to override how values are being displayed.",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),-1332388091,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.result-data","div.result-data",-1539734720),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,nextjournal.viewer.with_viewers(cljs.core.deref(state),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),(function (p1__77482_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2(p1__77482_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("*")));
}),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),(function (p1__77483_SHARP_){
return nextjournal.viewer.view_as(new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block","div.inline-block",-502349916),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(12),new cljs.core.Keyword(null,"height","height",1025178622),(12)], null),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(p1__77483_SHARP_)?"bg-red":"bg-green")], null)], null));
})], null))], null)], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"viewer-overlays"], 0)));

/**
 * Takes a data value with possibly metadata on it and returns a transducer
 *   that will calls `inspect` on every collection element. Use this in custom
 *   viewers for e.g. vectors to ensure custom viewers are passed down to the
 *   children.
 */
nextjournal.viewer.inspect_xf = (function nextjournal$viewer$inspect_xf(x){
return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (){var G__77484 = nextjournal.viewer.inspect;
if(cljs.core.seq(new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841).cljs$core$IFn$_invoke$arity$1(nextjournal.viewer.meta(x)))){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(G__77484,nextjournal.viewer.meta(x));
} else {
return G__77484;
}
})());
});
nextjournal.viewer.rule_30_state = (function (){var rule30 = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),(0)]);
var n = (33);
var g1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0))),((n - (1)) / (2)),(1));
var evolve = (function (p1__77485_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(rule30,cljs.core.partition.cljs$core$IFn$_invoke$arity$4((3),(1),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.cons((0),p1__77485_SHARP_)));
});
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((17),cljs.core.iterate(evolve,g1));
})();
nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","state","nextjournal.devcards/state",1376810469),nextjournal.viewer.rule_30_state], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"Rule 30 using viewers based on types. Also shows how to use a named viewer for a number.",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),1350723590,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.result-data","div.result-data",-1539734720),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,nextjournal.viewer.with_viewers(cljs.core.deref(state),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"cell","cell",764245084),(function (p1__77486_SHARP_){
return nextjournal.viewer.view_as(new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block","div.inline-block",-502349916),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(((p1__77486_SHARP_ === (0)))?"bg-white border-solid border-2 border-black":"bg-black"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16)], null)], null)], null));
}),new cljs.core.Keyword(null,"vector","vector",1902966158),(function (x,options){
return nextjournal.viewer.view_as(new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.inline-flex","div.flex.inline-flex",1792928195)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.viewer.inspect,options),x)));
}),new cljs.core.Keyword(null,"list","list",765357683),(function (x,options){
return nextjournal.viewer.view_as(new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.viewer.inspect,options),x)));
})], null))], null)], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"rule-30-types"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","state","nextjournal.devcards/state",1376810469),nextjournal.viewer.rule_30_state], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"Rule 30 using viewers based on viewer options (without overriding global types) and passing the viewer option down to child components.",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),1350723590,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.result-data","div.result-data",-1539734720),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,nextjournal.viewer.with_viewers(nextjournal.viewer.with_viewer(cljs.core.deref(state),new cljs.core.Keyword(null,"board","board",-1907017633)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cell","cell",764245084),(function (p1__77487_SHARP_){
return nextjournal.viewer.view_as(new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block","div.inline-block",-502349916),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(((p1__77487_SHARP_ === (0)))?"bg-white border-solid border-2 border-black":"bg-black"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16)], null)], null)], null));
}),new cljs.core.Keyword(null,"row","row",-570139521),(function (x,options){
return nextjournal.viewer.view_as(new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.inline-flex","div.flex.inline-flex",1792928195)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77488_SHARP_){
return nextjournal.viewer.inspect.cljs$core$IFn$_invoke$arity$2(options,nextjournal.viewer.view_as(new cljs.core.Keyword(null,"cell","cell",764245084),p1__77488_SHARP_));
}),x)));
}),new cljs.core.Keyword(null,"board","board",-1907017633),(function (x,options){
return nextjournal.viewer.view_as(new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77489_SHARP_){
return nextjournal.viewer.inspect.cljs$core$IFn$_invoke$arity$2(options,nextjournal.viewer.view_as(new cljs.core.Keyword(null,"row","row",-570139521),p1__77489_SHARP_));
}),x)));
})], null))], null)], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"rule-30-child-options"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","state","nextjournal.devcards/state",1376810469),nextjournal.viewer.rule_30_state], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"Rule 30 using viewers based on a single viewer rendering the board.",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),1350723590,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.result-data","div.result-data",-1539734720),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,nextjournal.viewer.with_viewer(cljs.core.deref(state),(function (board){
var cell = (function (p1__77490_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"div.inline-block","div.inline-block",-502349916),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(((p1__77490_SHARP_ === (0)))?"bg-white border-solid border-2 border-black":"bg-black"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16)], null)], null)],null));
});
var row = (function (p1__77491_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.inline-flex","div.flex.inline-flex",1792928195)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cell),p1__77491_SHARP_);
});
return nextjournal.viewer.html(cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(row),board));
}))], null)], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"rule-30-html"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"Rule 30 using viewers based on sci eval.",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,nextjournal.viewer.with_viewer(cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null)),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"board","board",-266486106,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cell","cell",-1890190685,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__77492#","p1__77492#",-1869265228,null)], null),cljs.core.list(new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Keyword(null,"div.inline-block","div.inline-block",-502349916),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"p1__77492#","p1__77492#",-1869265228,null)),"bg-white border-solid border-2 border-black","bg-black"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16)], null)], null))),new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__77493#","p1__77493#",1087513821,null)], null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.inline-flex","div.flex.inline-flex",1792928195)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"cell","cell",-1890190685,null)),new cljs.core.Symbol(null,"p1__77493#","p1__77493#",1087513821,null)))], null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"row","row",1070392006,null)),new cljs.core.Symbol(null,"board","board",-266486106,null))))))], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"rule-30-sci-eval"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__4652__auto__ = (function nextjournal$viewer$iter__77494(s__77495){
return (new cljs.core.LazySeq(null,(function (){
var s__77495__$1 = s__77495;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__77495__$1);
if(temp__5753__auto__){
var s__77495__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77495__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__77495__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__77497 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__77496 = (0);
while(true){
if((i__77496 < size__4651__auto__)){
var value = cljs.core._nth(c__4650__auto__,i__77496);
cljs.core.chunk_append(b__77497,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-3.result-viewer","div.mb-3.result-viewer",896613001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.inspected-value","code.inspected-value",521789178),(function (){var _STAR_print_meta_STAR__orig_val__77498 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_meta_STAR__temp_val__77499 = true;
(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__77499);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__77498);
}})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227)," => "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,cljs.core.PersistentArrayMap.EMPTY,value], null)], null));

var G__77550 = (i__77496 + (1));
i__77496 = G__77550;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77497),nextjournal$viewer$iter__77494(cljs.core.chunk_rest(s__77495__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77497),null);
}
} else {
var value = cljs.core.first(s__77495__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-3.result-viewer","div.mb-3.result-viewer",896613001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.inspected-value","code.inspected-value",521789178),(function (){var _STAR_print_meta_STAR__orig_val__77500 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_meta_STAR__temp_val__77501 = true;
(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__77501);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__77500);
}})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227)," => "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,cljs.core.PersistentArrayMap.EMPTY,value], null)], null),nextjournal$viewer$iter__77494(cljs.core.rest(s__77495__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(123),NaN,new cljs.core.Symbol(null,"symbol","symbol",601958831,null),new cljs.core.Keyword("nextjournal.viewer","keyword","nextjournal.viewer/keyword",2010122455),"a string",null,true,false,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some","some",-1951079573),"map"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"of","of",-434882685,null),new cljs.core.Symbol(null,"symbols","symbols",1641743270,null)], null),cljs.core.list(new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"of","of",-2075414212),new cljs.core.Keyword(null,"keywords","keywords",1526959054)),({"js": "object"}),["array"],(new Date()),cljs.core.random_uuid(),(function nextjournal$viewer$a_function(foo){
return null;
}),cljs.core.atom.cljs$core$IFn$_invoke$arity$1("an atom"),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clojure.lang.Atom","clojure.lang.Atom",661742144,null),(742568993),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"ready","ready",1086465795),new cljs.core.Keyword(null,"val","val",128701612),(1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal","tag","nextjournal/tag",1515661557),new cljs.core.Symbol(null,"object","object",-1179821820,null)], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("user","a","user/a",-469962416,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"bar","bar",-1386246584)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal","tag","nextjournal/tag",1515661557),new cljs.core.Symbol(null,"var","var",870848730,null)], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clojure.lang.Ref","clojure.lang.Ref",-1151620253,null),(1940912369),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"ready","ready",1086465795),new cljs.core.Keyword(null,"val","val",128701612),(1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal","tag","nextjournal/tag",1515661557),new cljs.core.Symbol(null,"object","object",-1179821820,null)], null))], null));
})());
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"inspect-values"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","class","nextjournal.devcards/class",1598709868),"dark has-dark-mode bg-slate-900"], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),192540328,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-6","div.p-6",1412057822)], null),(function (){var iter__4652__auto__ = (function nextjournal$viewer$iter__77502(s__77503){
return (new cljs.core.LazySeq(null,(function (){
var s__77503__$1 = s__77503;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__77503__$1);
if(temp__5753__auto__){
var s__77503__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77503__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__77503__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__77505 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__77504 = (0);
while(true){
if((i__77504 < size__4651__auto__)){
var value = cljs.core._nth(c__4650__auto__,i__77504);
cljs.core.chunk_append(b__77505,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-3.result-viewer.dark:text-slate-300","div.mb-3.result-viewer.dark:text-slate-300",-1022028343),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.inspected-value.dark:bg-transparent.dark:text-slate-300","code.inspected-value.dark:bg-transparent.dark:text-slate-300",1787800450),(function (){var _STAR_print_meta_STAR__orig_val__77506 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_meta_STAR__temp_val__77507 = true;
(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__77507);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__77506);
}})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227)," => "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,cljs.core.PersistentArrayMap.EMPTY,value], null)], null));

var G__77553 = (i__77504 + (1));
i__77504 = G__77553;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77505),nextjournal$viewer$iter__77502(cljs.core.chunk_rest(s__77503__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77505),null);
}
} else {
var value = cljs.core.first(s__77503__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-3.result-viewer.dark:text-slate-300","div.mb-3.result-viewer.dark:text-slate-300",-1022028343),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.inspected-value.dark:bg-transparent.dark:text-slate-300","code.inspected-value.dark:bg-transparent.dark:text-slate-300",1787800450),(function (){var _STAR_print_meta_STAR__orig_val__77508 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_meta_STAR__temp_val__77509 = true;
(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__77509);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__77508);
}})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227)," => "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,cljs.core.PersistentArrayMap.EMPTY,value], null)], null),nextjournal$viewer$iter__77502(cljs.core.rest(s__77503__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(123),NaN,new cljs.core.Symbol(null,"symbol","symbol",601958831,null),new cljs.core.Keyword("nextjournal.viewer","keyword","nextjournal.viewer/keyword",2010122455),"a string",null,true,false,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some","some",-1951079573),"map"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"of","of",-434882685,null),new cljs.core.Symbol(null,"symbols","symbols",1641743270,null)], null),cljs.core.list(new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"of","of",-2075414212),new cljs.core.Keyword(null,"keywords","keywords",1526959054)),({"js": "object"}),["array"],(new Date()),cljs.core.random_uuid(),(function nextjournal$viewer$a_function(foo){
return null;
}),cljs.core.atom.cljs$core$IFn$_invoke$arity$1("an atom"),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clojure.lang.Atom","clojure.lang.Atom",661742144,null),(742568993),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"ready","ready",1086465795),new cljs.core.Keyword(null,"val","val",128701612),(1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal","tag","nextjournal/tag",1515661557),new cljs.core.Symbol(null,"object","object",-1179821820,null)], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("user","a","user/a",-469962416,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"bar","bar",-1386246584)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal","tag","nextjournal/tag",1515661557),new cljs.core.Symbol(null,"var","var",870848730,null)], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clojure.lang.Ref","clojure.lang.Ref",-1151620253,null),(1940912369),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"ready","ready",1086465795),new cljs.core.Keyword(null,"val","val",128701612),(1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal","tag","nextjournal/tag",1515661557),new cljs.core.Symbol(null,"object","object",-1179821820,null)], null))], null));
})());
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"inspect-values-dark"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nextjournal.devcards","class","nextjournal.devcards/class",1598709868),"p-0",new cljs.core.Keyword("nextjournal.devcards","state","nextjournal.devcards/state",1376810469),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(defn query-results\n  \"some docstring\"\n  []\n  (let [_run-at #_(java.util.Date.) #inst \"2021-05-20T08:28:29.445-00:00\"\n        ds (next.jdbc/get-datasource {:dbtype \"sqlite\" :dbname \"chinook.db\"})]\n    (with-open [conn (next.jdbc/get-connection ds)]\n      (clerk/table (next.jdbc/execute! conn [\"SELECT AlbumId, Bytes, Name, TrackID, UnitPrice FROM tracks\"])))))","(/ (+ (* 'A 'C 'gMR (expt (sin 'theta) 2) (cos 'theta))\n      (* (/ 1 2) 'A (expt 'p_psi 2) (expt (sin 'theta) 2))\n      (* (/ 1 2) 'C (expt 'p_psi 2) (expt (cos 'theta) 2))\n      (* (/ 1 2) 'C (expt 'p_theta 2) (expt (sin 'theta) 2))\n      (* -1 'C 'p_phi 'p_psi (cos 'theta))\n      (* (/ 1 2) 'C (expt 'p_phi 2)))\n   (* 'A 'C (expt (sin 'theta) 2)))","(def literal-viewer\n  {:pred e/literal?\n   :fetch-fn viewer/fetch-all\n   :transform-fn transform-literal\n   :render-fn '(fn [x]\n                 (v/html\n                  (reagent/with-let [!sel (reagent/atom (-> x first key))]\n                    [:<>\n                     (into [:div.flex.items-center.font-sans.text-xs.mb-3\n                            [:span.text-slate-500.mr-2 \"View-as:\"]]\n                           (map (fn [[l _]]\n                                  [:button.px-3.py-1.font-medium.hover:bg-indigo-50.rounded-full.hover:text-indigo-600.transition\n                                   {:class (if (= @!sel l) \"bg-indigo-100 text-indigo-600\" \"text-slate-500\")\n                                    :on-click #(reset! !sel l)}\n                                   l]) x))\n                     (get x @!sel)])))})","(ns multiviewer\n  \"This is a great multiviewer\"\n  (:require [nextjournal.clerk :as clerk]\n            [nextjournal.clerk.viewer :as viewer]\n            [sicmutils.value :as v]\n            [sicmutils.expression :as e]\n            [sicmutils.env :refer :all]))","{:verts\n [[-0.32999999999999996 -0.5]\n  [-0.3383203922298239 -0.44746711095625896]\n  [-0.36246711095625894 -0.40007650711027953]\n  [-0.40007650711027953 -0.36246711095625894]\n  [-0.4474671109562589 -0.3383203922298239]\n  [-0.5 -0.32999999999999996]\n  [-0.5525328890437411 -0.3383203922298239]\n  [-0.5999234928897205 -0.36246711095625894]\n  [-0.6375328890437411 -0.40007650711027953]\n  [-0.6616796077701761 -0.4474671109562589]\n  [-0.67 -0.5]\n  [-0.6616796077701761 -0.5525328890437411]\n  [-0.6375328890437411 -0.5999234928897205]\n  [-0.5999234928897205 -0.6375328890437411]\n  [-0.5525328890437411 -0.6616796077701761]\n  [-0.5 -0.67]\n  [-0.44746711095625896 -0.6616796077701761]\n  [-0.4000765071102796 -0.6375328890437411]\n  [-0.36246711095625894 -0.5999234928897205]\n  [-0.3383203922298239 -0.5525328890437411]],\n :invert? true}"], null)], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),1270617789,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (state){
var map__77511 = cljs.core.deref(state);
var map__77511__$1 = cljs.core.__destructure_map(map__77511);
var clj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77511__$1,new cljs.core.Keyword(null,"clj","clj",-660495428));
var clj_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77511__$1,new cljs.core.Keyword(null,"clj-map","clj-map",-730949109));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77511__$1,new cljs.core.Keyword(null,"js","js",1768080579));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.items-center.viewer-notebook","div.flex.flex-col.items-center.viewer-notebook",2117798621)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,example){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer.viewer-code.w-full.max-w-wide.not-prose","div.viewer.viewer-code.w-full.max-w-wide.not-prose",-2123092460),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.code.viewer,example], null)], null);
}),cljs.core.deref(state)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dark","div.dark",15949851),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dark:bg-gray-900","div.dark:bg-gray-900",1450544601),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.items-center.viewer-notebook","div.flex.flex-col.items-center.viewer-notebook",2117798621),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,example){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer.viewer-code.w-full.max-w-wide.not-prose","div.viewer.viewer-code.w-full.max-w-wide.not-prose",-2123092460),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.code.viewer,example], null)], null);
}),cljs.core.deref(state)))], null)], null)], null)], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"code-theme"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return (function (){
var gen_keyword = (function (){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
});
var generate_ds = (function (x,val_fun){
var x__$1 = x;
var res = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,(0))){
return res;
} else {
var G__77559 = (x__$1 - (1));
var G__77560 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,gen_keyword(),(val_fun.cljs$core$IFn$_invoke$arity$0 ? val_fun.cljs$core$IFn$_invoke$arity$0() : val_fun.call(null)));
x__$1 = G__77559;
res = G__77560;
continue;

}
break;
}
});
var value_1 = generate_ds((42),gen_keyword);
return generate_ds((42),(function (){
return cljs.core.clj__GT_js(value_1);
}));
});
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"Defcard for larger datastructures clj and json, we make use of the db viewer.",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),1833409129,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"inspect-large-values"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"Different datastructures that live in-process in the browser. More values can just be displayed without needing to fetch more data.",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,cljs.core.range.cljs$core$IFn$_invoke$arity$1((1000))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,cljs.core.vec(cljs.core.range.cljs$core$IFn$_invoke$arity$1((1000)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$1((1000)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((1000)))], null)], null)], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"inspect-in-process"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"world","world",-418292623)], null))], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"viewer-reagent-atom"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,window], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"viewer-js-window"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,nextjournal.viewer.view_as(new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),(650),new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"https://vega.github.io/vega-datasets/data/us-10m.json",new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"topojson",new cljs.core.Keyword(null,"feature","feature",27242652),"counties"], null)], null),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lookup","lookup",1225356838),"id",new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"https://vega.github.io/vega-datasets/data/unemployment.tsv"], null),new cljs.core.Keyword(null,"key","key",-1516042587),"id",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rate"], null)], null)], null)], null),new cljs.core.Keyword(null,"projection","projection",-412523042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"albersUsa"], null),new cljs.core.Keyword(null,"mark","mark",-373816345),"geoshape",new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"rate",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null)], null)], null))], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"viewer-vega-lite"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,nextjournal.viewer.view_as(new cljs.core.Keyword(null,"plotly","plotly",817625458),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.shuffle(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10))),new cljs.core.Keyword(null,"name","name",1843675177),"The Federation"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.shuffle(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10))),new cljs.core.Keyword(null,"name","name",1843675177),"The Empire"], null)], null)], null))], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"viewer-plolty"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,nextjournal.viewer.view_as(new cljs.core.Keyword(null,"latex","latex",-1820161144),"G_{\\mu\\nu}\\equiv R_{\\mu\\nu} - {\\textstyle 1 \\over 2}R\\,g_{\\mu\\nu} = {8 \\pi G \\over c^4} T_{\\mu\\nu}")], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"viewer-katex"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,nextjournal.viewer.view_as(new cljs.core.Keyword(null,"mathjax","mathjax",-1009833386),"G_{\\mu\\nu}\\equiv R_{\\mu\\nu} - {\\textstyle 1 \\over 2}R\\,g_{\\mu\\nu} = {8 \\pi G \\over c^4} T_{\\mu\\nu}")], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"viewer-mathjax"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-markdown","div.viewer-markdown",-559117844),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,nextjournal.viewer.view_as(new cljs.core.Keyword(null,"markdown","markdown",1227225089),"# Supported Markdown\n\n## Paragraphs\n\nTo create paragraphs, use a blank line to separate one or more lines of text.\n\nI really like using Markdown.\n\nI think I'll use it to format all of my documents from now on.\n\n## Headings\n\n```\n  # Heading level 1\n  ## Heading level 2\n  ### Heading level 3\n  #### Heading level 4\n  ##### Heading level 5\n  ###### Heading level 6\n```\n\n## Inlines\n\n- I just love **bold text**.\n- Italicized text is the *cat's meow*.\n- This text is ***really important***.\n- My favorite search engine is [Duck Duck Go](https://duckduckgo.com).\n- At the command prompt, type `acme`.\n- This was ~~entirely uninteresting.~~\n- The Dow Jones Industrial Average for February 7, 2006 ![Dow Jones Industrial Average for February 7, 2006](https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Sparkline_dowjones_new.svg/200px-Sparkline_dowjones_new.svg.png).\n\n## Lists\n\n### Ordered\n\n1. First item\n2. Second item\n3. Third item\n  1. Indented item\n  2. Indented item\n4. Fourth item\n\n### Unordered\n\n- First item\n- Second item\n- Third item\n  - Indented item\n  - Indented item\n- Fourth item\n\n### Todo\n\n- [x] First item\n- [x] Second item\n- [ ] Third item\n  - [x] Indented item\n  - [ ] Indented item\n- [ ] Fourth item\n\n## Code Blocks\n\n```json\n{\n  \"firstName\": \"Mecca\",\n  \"lastName\": \"Smith\",\n  \"age\": 25\n}\n```\n\n## Horizontal Rules\n\n---\n\n## Blockquotes\n\n> Dorothy followed her through many of the beautiful rooms in her castle.\n>\n>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.\n\n## Images\n\n![_An old rock in the desert_, Shiprock, New Mexico, by Beau Rogers](https://live.staticflickr.com/389/31833779864_38b5c9d52e_c_d.jpg)\n\n## Formulas\n\n$$\\int_{\\omega} \\phi d\\omega$$\n\n## Tables\n\nas building hiccup is recursive, we're using the specific viewers for values occurring at any level in the structure\n\n| Syntax |  JVM                     | JavaScript                                    |\n|--------|:------------------------:|----------------------------------------------:|\n|   foo  |  Loca _lDate_ ahoiii     | goog.date.Date                                |\n|   bar  |  java.time.LocalTime     | somethng else entirey                         |\n|   bag  |  java.time.LocalDateTime | $\\bigoplus_{\\alpha < \\omega}\\phi_\\alpha$ |\n\n")], null)], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"viewer-markdown"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,nextjournal.viewer.view_as(new cljs.core.Keyword(null,"code","code",1586293142),"(str (+ 1 2) \"some string\")")], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"viewer-code"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,nextjournal.viewer.view_as(new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello Hiccup \uD83D\uDC4B"], null))], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"viewer-hiccup"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"A simple counter component in reagent using `reagent.core/with-let`.",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,nextjournal.viewer.view_as(new cljs.core.Keyword(null,"reagent","reagent",2131627322),(function (){
var with_let77512 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77512","with-let77512",797033633));
var temp__5757__auto___77565 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___77565 == null)){
} else {
var c__62628__auto___77566 = temp__5757__auto___77565;
if((with_let77512.generation === c__62628__auto___77566.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77512.generation = c__62628__auto___77566.ratomGeneration);
}

var init77513 = (with_let77512.length === (0));
var c = ((((init77513) || (cljs.core.not(with_let77512.hasOwnProperty((0))))))?(with_let77512[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0))):(with_let77512[(0)]));
var res77514 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Count: ",cljs.core.deref(c)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.rounded.bg-blue-500.text-white.py-2.px-4.font-bold.mr-2","button.rounded.bg-blue-500.text-white.py-2.px-4.font-bold.mr-2",1953808527),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.inc);
})], null),"increment"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.rounded.bg-blue-500.text-white.py-2.px-4.font-bold","button.rounded.bg-blue-500.text-white.py-2.px-4.font-bold",896621627),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.dec);
})], null),"decrement"], null)], null);
return res77514;
}))], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"viewer-reagent-component"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"Show how to use a function as a viewer, supports both one and two artity versions.",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,nextjournal.viewer.with_viewer(0.33,(function (p1__77515_SHARP_){
return nextjournal.viewer.view_as(new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.pt-1","div.relative.pt-1",745660052),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-hidden.h-2.mb-4-text-xs.flex.rounded.bg-teal-200","div.overflow-hidden.h-2.mb-4-text-xs.flex.rounded.bg-teal-200",1875951175),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shadow-none.flex.flex-col.text-center.whitespace-nowrap.text-white.bg-teal-500","div.shadow-none.flex.flex-col.text-center.whitespace-nowrap.text-white.bg-teal-500",-209238872),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__4339__auto__ = (function (){var x__4336__auto__ = ((p1__77515_SHARP_ * (100)) | (0));
var y__4337__auto__ = (0);
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var y__4340__auto__ = (100);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})()),"%"].join('')], null)], null)], null)], null)], null));
}))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.inspect,nextjournal.viewer.with_viewer(0.35,(function (v,_opts){
return nextjournal.viewer.view_as(new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.pt-1","div.relative.pt-1",745660052),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-hidden.h-2.mb-4-text-xs.flex.rounded.bg-teal-200","div.overflow-hidden.h-2.mb-4-text-xs.flex.rounded.bg-teal-200",1875951175),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shadow-none.flex.flex-col.text-center.whitespace-nowrap.text-white.bg-teal-500","div.shadow-none.flex.flex-col.text-center.whitespace-nowrap.text-white.bg-teal-500",-209238872),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__4339__auto__ = (function (){var x__4336__auto__ = ((v * (100)) | (0));
var y__4337__auto__ = (0);
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var y__4340__auto__ = (100);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})()),"%"].join('')], null)], null)], null)], null)], null));
}))], null)], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"progress-bar"], 0)));


//# sourceMappingURL=nextjournal.viewer.js.map
