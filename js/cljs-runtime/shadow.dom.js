goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_81741 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_81741(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_81742 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_81742(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__80828 = coll;
var G__80829 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__80828,G__80829) : shadow.dom.lazy_native_coll_seq.call(null,G__80828,G__80829));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__80864 = arguments.length;
switch (G__80864) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__80879 = arguments.length;
switch (G__80879) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__80888 = arguments.length;
switch (G__80888) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__80898 = arguments.length;
switch (G__80898) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__80946 = arguments.length;
switch (G__80946) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__80983 = arguments.length;
switch (G__80983) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e80989){if((e80989 instanceof Object)){
var e = e80989;
return console.log("didnt support attachEvent",el,e);
} else {
throw e80989;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__80993 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__80994 = null;
var count__80995 = (0);
var i__80996 = (0);
while(true){
if((i__80996 < count__80995)){
var el = chunk__80994.cljs$core$IIndexed$_nth$arity$2(null,i__80996);
var handler_81749__$1 = ((function (seq__80993,chunk__80994,count__80995,i__80996,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__80993,chunk__80994,count__80995,i__80996,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_81749__$1);


var G__81750 = seq__80993;
var G__81751 = chunk__80994;
var G__81752 = count__80995;
var G__81753 = (i__80996 + (1));
seq__80993 = G__81750;
chunk__80994 = G__81751;
count__80995 = G__81752;
i__80996 = G__81753;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__80993);
if(temp__5753__auto__){
var seq__80993__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__80993__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__80993__$1);
var G__81754 = cljs.core.chunk_rest(seq__80993__$1);
var G__81755 = c__4679__auto__;
var G__81756 = cljs.core.count(c__4679__auto__);
var G__81757 = (0);
seq__80993 = G__81754;
chunk__80994 = G__81755;
count__80995 = G__81756;
i__80996 = G__81757;
continue;
} else {
var el = cljs.core.first(seq__80993__$1);
var handler_81758__$1 = ((function (seq__80993,chunk__80994,count__80995,i__80996,el,seq__80993__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__80993,chunk__80994,count__80995,i__80996,el,seq__80993__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_81758__$1);


var G__81759 = cljs.core.next(seq__80993__$1);
var G__81760 = null;
var G__81761 = (0);
var G__81762 = (0);
seq__80993 = G__81759;
chunk__80994 = G__81760;
count__80995 = G__81761;
i__80996 = G__81762;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__81016 = arguments.length;
switch (G__81016) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__81026 = cljs.core.seq(events);
var chunk__81027 = null;
var count__81028 = (0);
var i__81029 = (0);
while(true){
if((i__81029 < count__81028)){
var vec__81036 = chunk__81027.cljs$core$IIndexed$_nth$arity$2(null,i__81029);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81036,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81036,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__81764 = seq__81026;
var G__81765 = chunk__81027;
var G__81766 = count__81028;
var G__81767 = (i__81029 + (1));
seq__81026 = G__81764;
chunk__81027 = G__81765;
count__81028 = G__81766;
i__81029 = G__81767;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__81026);
if(temp__5753__auto__){
var seq__81026__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__81026__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__81026__$1);
var G__81768 = cljs.core.chunk_rest(seq__81026__$1);
var G__81769 = c__4679__auto__;
var G__81770 = cljs.core.count(c__4679__auto__);
var G__81771 = (0);
seq__81026 = G__81768;
chunk__81027 = G__81769;
count__81028 = G__81770;
i__81029 = G__81771;
continue;
} else {
var vec__81044 = cljs.core.first(seq__81026__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81044,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81044,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__81772 = cljs.core.next(seq__81026__$1);
var G__81773 = null;
var G__81774 = (0);
var G__81775 = (0);
seq__81026 = G__81772;
chunk__81027 = G__81773;
count__81028 = G__81774;
i__81029 = G__81775;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__81048 = cljs.core.seq(styles);
var chunk__81049 = null;
var count__81050 = (0);
var i__81051 = (0);
while(true){
if((i__81051 < count__81050)){
var vec__81061 = chunk__81049.cljs$core$IIndexed$_nth$arity$2(null,i__81051);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81061,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81061,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__81776 = seq__81048;
var G__81777 = chunk__81049;
var G__81778 = count__81050;
var G__81779 = (i__81051 + (1));
seq__81048 = G__81776;
chunk__81049 = G__81777;
count__81050 = G__81778;
i__81051 = G__81779;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__81048);
if(temp__5753__auto__){
var seq__81048__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__81048__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__81048__$1);
var G__81780 = cljs.core.chunk_rest(seq__81048__$1);
var G__81781 = c__4679__auto__;
var G__81782 = cljs.core.count(c__4679__auto__);
var G__81783 = (0);
seq__81048 = G__81780;
chunk__81049 = G__81781;
count__81050 = G__81782;
i__81051 = G__81783;
continue;
} else {
var vec__81068 = cljs.core.first(seq__81048__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81068,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81068,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__81784 = cljs.core.next(seq__81048__$1);
var G__81785 = null;
var G__81786 = (0);
var G__81787 = (0);
seq__81048 = G__81784;
chunk__81049 = G__81785;
count__81050 = G__81786;
i__81051 = G__81787;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__81079_81788 = key;
var G__81079_81789__$1 = (((G__81079_81788 instanceof cljs.core.Keyword))?G__81079_81788.fqn:null);
switch (G__81079_81789__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_81791 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_81791,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_81791,"aria-");
}
})())){
el.setAttribute(ks_81791,value);
} else {
(el[ks_81791] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__81122){
var map__81123 = p__81122;
var map__81123__$1 = cljs.core.__destructure_map(map__81123);
var props = map__81123__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81123__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__81128 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81128,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81128,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81128,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__81141 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__81141,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__81141;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__81151 = arguments.length;
switch (G__81151) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__81155){
var vec__81156 = p__81155;
var seq__81157 = cljs.core.seq(vec__81156);
var first__81158 = cljs.core.first(seq__81157);
var seq__81157__$1 = cljs.core.next(seq__81157);
var nn = first__81158;
var first__81158__$1 = cljs.core.first(seq__81157__$1);
var seq__81157__$2 = cljs.core.next(seq__81157__$1);
var np = first__81158__$1;
var nc = seq__81157__$2;
var node = vec__81156;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__81161 = nn;
var G__81162 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__81161,G__81162) : create_fn.call(null,G__81161,G__81162));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__81163 = nn;
var G__81164 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__81163,G__81164) : create_fn.call(null,G__81163,G__81164));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__81165 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81165,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81165,(1),null);
var seq__81168_81793 = cljs.core.seq(node_children);
var chunk__81169_81794 = null;
var count__81170_81795 = (0);
var i__81171_81796 = (0);
while(true){
if((i__81171_81796 < count__81170_81795)){
var child_struct_81797 = chunk__81169_81794.cljs$core$IIndexed$_nth$arity$2(null,i__81171_81796);
var children_81798 = shadow.dom.dom_node(child_struct_81797);
if(cljs.core.seq_QMARK_(children_81798)){
var seq__81186_81799 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_81798));
var chunk__81188_81800 = null;
var count__81189_81801 = (0);
var i__81190_81802 = (0);
while(true){
if((i__81190_81802 < count__81189_81801)){
var child_81803 = chunk__81188_81800.cljs$core$IIndexed$_nth$arity$2(null,i__81190_81802);
if(cljs.core.truth_(child_81803)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_81803);


var G__81804 = seq__81186_81799;
var G__81805 = chunk__81188_81800;
var G__81806 = count__81189_81801;
var G__81807 = (i__81190_81802 + (1));
seq__81186_81799 = G__81804;
chunk__81188_81800 = G__81805;
count__81189_81801 = G__81806;
i__81190_81802 = G__81807;
continue;
} else {
var G__81808 = seq__81186_81799;
var G__81809 = chunk__81188_81800;
var G__81810 = count__81189_81801;
var G__81811 = (i__81190_81802 + (1));
seq__81186_81799 = G__81808;
chunk__81188_81800 = G__81809;
count__81189_81801 = G__81810;
i__81190_81802 = G__81811;
continue;
}
} else {
var temp__5753__auto___81812 = cljs.core.seq(seq__81186_81799);
if(temp__5753__auto___81812){
var seq__81186_81813__$1 = temp__5753__auto___81812;
if(cljs.core.chunked_seq_QMARK_(seq__81186_81813__$1)){
var c__4679__auto___81814 = cljs.core.chunk_first(seq__81186_81813__$1);
var G__81815 = cljs.core.chunk_rest(seq__81186_81813__$1);
var G__81816 = c__4679__auto___81814;
var G__81817 = cljs.core.count(c__4679__auto___81814);
var G__81818 = (0);
seq__81186_81799 = G__81815;
chunk__81188_81800 = G__81816;
count__81189_81801 = G__81817;
i__81190_81802 = G__81818;
continue;
} else {
var child_81819 = cljs.core.first(seq__81186_81813__$1);
if(cljs.core.truth_(child_81819)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_81819);


var G__81820 = cljs.core.next(seq__81186_81813__$1);
var G__81821 = null;
var G__81822 = (0);
var G__81823 = (0);
seq__81186_81799 = G__81820;
chunk__81188_81800 = G__81821;
count__81189_81801 = G__81822;
i__81190_81802 = G__81823;
continue;
} else {
var G__81824 = cljs.core.next(seq__81186_81813__$1);
var G__81825 = null;
var G__81826 = (0);
var G__81827 = (0);
seq__81186_81799 = G__81824;
chunk__81188_81800 = G__81825;
count__81189_81801 = G__81826;
i__81190_81802 = G__81827;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_81798);
}


var G__81828 = seq__81168_81793;
var G__81829 = chunk__81169_81794;
var G__81830 = count__81170_81795;
var G__81831 = (i__81171_81796 + (1));
seq__81168_81793 = G__81828;
chunk__81169_81794 = G__81829;
count__81170_81795 = G__81830;
i__81171_81796 = G__81831;
continue;
} else {
var temp__5753__auto___81832 = cljs.core.seq(seq__81168_81793);
if(temp__5753__auto___81832){
var seq__81168_81833__$1 = temp__5753__auto___81832;
if(cljs.core.chunked_seq_QMARK_(seq__81168_81833__$1)){
var c__4679__auto___81834 = cljs.core.chunk_first(seq__81168_81833__$1);
var G__81835 = cljs.core.chunk_rest(seq__81168_81833__$1);
var G__81836 = c__4679__auto___81834;
var G__81837 = cljs.core.count(c__4679__auto___81834);
var G__81838 = (0);
seq__81168_81793 = G__81835;
chunk__81169_81794 = G__81836;
count__81170_81795 = G__81837;
i__81171_81796 = G__81838;
continue;
} else {
var child_struct_81839 = cljs.core.first(seq__81168_81833__$1);
var children_81840 = shadow.dom.dom_node(child_struct_81839);
if(cljs.core.seq_QMARK_(children_81840)){
var seq__81201_81841 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_81840));
var chunk__81203_81842 = null;
var count__81204_81843 = (0);
var i__81205_81844 = (0);
while(true){
if((i__81205_81844 < count__81204_81843)){
var child_81845 = chunk__81203_81842.cljs$core$IIndexed$_nth$arity$2(null,i__81205_81844);
if(cljs.core.truth_(child_81845)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_81845);


var G__81846 = seq__81201_81841;
var G__81847 = chunk__81203_81842;
var G__81848 = count__81204_81843;
var G__81849 = (i__81205_81844 + (1));
seq__81201_81841 = G__81846;
chunk__81203_81842 = G__81847;
count__81204_81843 = G__81848;
i__81205_81844 = G__81849;
continue;
} else {
var G__81850 = seq__81201_81841;
var G__81851 = chunk__81203_81842;
var G__81852 = count__81204_81843;
var G__81853 = (i__81205_81844 + (1));
seq__81201_81841 = G__81850;
chunk__81203_81842 = G__81851;
count__81204_81843 = G__81852;
i__81205_81844 = G__81853;
continue;
}
} else {
var temp__5753__auto___81854__$1 = cljs.core.seq(seq__81201_81841);
if(temp__5753__auto___81854__$1){
var seq__81201_81855__$1 = temp__5753__auto___81854__$1;
if(cljs.core.chunked_seq_QMARK_(seq__81201_81855__$1)){
var c__4679__auto___81856 = cljs.core.chunk_first(seq__81201_81855__$1);
var G__81857 = cljs.core.chunk_rest(seq__81201_81855__$1);
var G__81858 = c__4679__auto___81856;
var G__81859 = cljs.core.count(c__4679__auto___81856);
var G__81860 = (0);
seq__81201_81841 = G__81857;
chunk__81203_81842 = G__81858;
count__81204_81843 = G__81859;
i__81205_81844 = G__81860;
continue;
} else {
var child_81861 = cljs.core.first(seq__81201_81855__$1);
if(cljs.core.truth_(child_81861)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_81861);


var G__81862 = cljs.core.next(seq__81201_81855__$1);
var G__81863 = null;
var G__81864 = (0);
var G__81865 = (0);
seq__81201_81841 = G__81862;
chunk__81203_81842 = G__81863;
count__81204_81843 = G__81864;
i__81205_81844 = G__81865;
continue;
} else {
var G__81866 = cljs.core.next(seq__81201_81855__$1);
var G__81867 = null;
var G__81868 = (0);
var G__81869 = (0);
seq__81201_81841 = G__81866;
chunk__81203_81842 = G__81867;
count__81204_81843 = G__81868;
i__81205_81844 = G__81869;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_81840);
}


var G__81870 = cljs.core.next(seq__81168_81833__$1);
var G__81871 = null;
var G__81872 = (0);
var G__81873 = (0);
seq__81168_81793 = G__81870;
chunk__81169_81794 = G__81871;
count__81170_81795 = G__81872;
i__81171_81796 = G__81873;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__81233 = cljs.core.seq(node);
var chunk__81234 = null;
var count__81235 = (0);
var i__81236 = (0);
while(true){
if((i__81236 < count__81235)){
var n = chunk__81234.cljs$core$IIndexed$_nth$arity$2(null,i__81236);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__81874 = seq__81233;
var G__81875 = chunk__81234;
var G__81876 = count__81235;
var G__81877 = (i__81236 + (1));
seq__81233 = G__81874;
chunk__81234 = G__81875;
count__81235 = G__81876;
i__81236 = G__81877;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__81233);
if(temp__5753__auto__){
var seq__81233__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__81233__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__81233__$1);
var G__81878 = cljs.core.chunk_rest(seq__81233__$1);
var G__81879 = c__4679__auto__;
var G__81880 = cljs.core.count(c__4679__auto__);
var G__81881 = (0);
seq__81233 = G__81878;
chunk__81234 = G__81879;
count__81235 = G__81880;
i__81236 = G__81881;
continue;
} else {
var n = cljs.core.first(seq__81233__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__81882 = cljs.core.next(seq__81233__$1);
var G__81883 = null;
var G__81884 = (0);
var G__81885 = (0);
seq__81233 = G__81882;
chunk__81234 = G__81883;
count__81235 = G__81884;
i__81236 = G__81885;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__81253 = arguments.length;
switch (G__81253) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__81267 = arguments.length;
switch (G__81267) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__81280 = arguments.length;
switch (G__81280) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___81889 = arguments.length;
var i__4865__auto___81890 = (0);
while(true){
if((i__4865__auto___81890 < len__4864__auto___81889)){
args__4870__auto__.push((arguments[i__4865__auto___81890]));

var G__81891 = (i__4865__auto___81890 + (1));
i__4865__auto___81890 = G__81891;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__81303_81892 = cljs.core.seq(nodes);
var chunk__81304_81893 = null;
var count__81305_81894 = (0);
var i__81306_81895 = (0);
while(true){
if((i__81306_81895 < count__81305_81894)){
var node_81896 = chunk__81304_81893.cljs$core$IIndexed$_nth$arity$2(null,i__81306_81895);
fragment.appendChild(shadow.dom._to_dom(node_81896));


var G__81897 = seq__81303_81892;
var G__81898 = chunk__81304_81893;
var G__81899 = count__81305_81894;
var G__81900 = (i__81306_81895 + (1));
seq__81303_81892 = G__81897;
chunk__81304_81893 = G__81898;
count__81305_81894 = G__81899;
i__81306_81895 = G__81900;
continue;
} else {
var temp__5753__auto___81901 = cljs.core.seq(seq__81303_81892);
if(temp__5753__auto___81901){
var seq__81303_81902__$1 = temp__5753__auto___81901;
if(cljs.core.chunked_seq_QMARK_(seq__81303_81902__$1)){
var c__4679__auto___81903 = cljs.core.chunk_first(seq__81303_81902__$1);
var G__81904 = cljs.core.chunk_rest(seq__81303_81902__$1);
var G__81905 = c__4679__auto___81903;
var G__81906 = cljs.core.count(c__4679__auto___81903);
var G__81907 = (0);
seq__81303_81892 = G__81904;
chunk__81304_81893 = G__81905;
count__81305_81894 = G__81906;
i__81306_81895 = G__81907;
continue;
} else {
var node_81908 = cljs.core.first(seq__81303_81902__$1);
fragment.appendChild(shadow.dom._to_dom(node_81908));


var G__81909 = cljs.core.next(seq__81303_81902__$1);
var G__81910 = null;
var G__81911 = (0);
var G__81912 = (0);
seq__81303_81892 = G__81909;
chunk__81304_81893 = G__81910;
count__81305_81894 = G__81911;
i__81306_81895 = G__81912;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq81299){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq81299));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__81307_81913 = cljs.core.seq(scripts);
var chunk__81308_81914 = null;
var count__81309_81915 = (0);
var i__81310_81916 = (0);
while(true){
if((i__81310_81916 < count__81309_81915)){
var vec__81317_81917 = chunk__81308_81914.cljs$core$IIndexed$_nth$arity$2(null,i__81310_81916);
var script_tag_81918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81317_81917,(0),null);
var script_body_81919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81317_81917,(1),null);
eval(script_body_81919);


var G__81920 = seq__81307_81913;
var G__81921 = chunk__81308_81914;
var G__81922 = count__81309_81915;
var G__81923 = (i__81310_81916 + (1));
seq__81307_81913 = G__81920;
chunk__81308_81914 = G__81921;
count__81309_81915 = G__81922;
i__81310_81916 = G__81923;
continue;
} else {
var temp__5753__auto___81924 = cljs.core.seq(seq__81307_81913);
if(temp__5753__auto___81924){
var seq__81307_81925__$1 = temp__5753__auto___81924;
if(cljs.core.chunked_seq_QMARK_(seq__81307_81925__$1)){
var c__4679__auto___81926 = cljs.core.chunk_first(seq__81307_81925__$1);
var G__81927 = cljs.core.chunk_rest(seq__81307_81925__$1);
var G__81928 = c__4679__auto___81926;
var G__81929 = cljs.core.count(c__4679__auto___81926);
var G__81930 = (0);
seq__81307_81913 = G__81927;
chunk__81308_81914 = G__81928;
count__81309_81915 = G__81929;
i__81310_81916 = G__81930;
continue;
} else {
var vec__81320_81931 = cljs.core.first(seq__81307_81925__$1);
var script_tag_81932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81320_81931,(0),null);
var script_body_81933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81320_81931,(1),null);
eval(script_body_81933);


var G__81934 = cljs.core.next(seq__81307_81925__$1);
var G__81935 = null;
var G__81936 = (0);
var G__81937 = (0);
seq__81307_81913 = G__81934;
chunk__81308_81914 = G__81935;
count__81309_81915 = G__81936;
i__81310_81916 = G__81937;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__81323){
var vec__81324 = p__81323;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81324,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81324,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__81329 = arguments.length;
switch (G__81329) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__81342 = cljs.core.seq(style_keys);
var chunk__81343 = null;
var count__81344 = (0);
var i__81345 = (0);
while(true){
if((i__81345 < count__81344)){
var it = chunk__81343.cljs$core$IIndexed$_nth$arity$2(null,i__81345);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__81939 = seq__81342;
var G__81940 = chunk__81343;
var G__81941 = count__81344;
var G__81942 = (i__81345 + (1));
seq__81342 = G__81939;
chunk__81343 = G__81940;
count__81344 = G__81941;
i__81345 = G__81942;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__81342);
if(temp__5753__auto__){
var seq__81342__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__81342__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__81342__$1);
var G__81943 = cljs.core.chunk_rest(seq__81342__$1);
var G__81944 = c__4679__auto__;
var G__81945 = cljs.core.count(c__4679__auto__);
var G__81946 = (0);
seq__81342 = G__81943;
chunk__81343 = G__81944;
count__81344 = G__81945;
i__81345 = G__81946;
continue;
} else {
var it = cljs.core.first(seq__81342__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__81947 = cljs.core.next(seq__81342__$1);
var G__81948 = null;
var G__81949 = (0);
var G__81950 = (0);
seq__81342 = G__81947;
chunk__81343 = G__81948;
count__81344 = G__81949;
i__81345 = G__81950;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k81350,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__81354 = k81350;
var G__81354__$1 = (((G__81354 instanceof cljs.core.Keyword))?G__81354.fqn:null);
switch (G__81354__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k81350,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__81356){
var vec__81357 = p__81356;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81357,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81357,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__81349){
var self__ = this;
var G__81349__$1 = this;
return (new cljs.core.RecordIter((0),G__81349__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this81351,other81352){
var self__ = this;
var this81351__$1 = this;
return (((!((other81352 == null)))) && ((((this81351__$1.constructor === other81352.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81351__$1.x,other81352.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81351__$1.y,other81352.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81351__$1.__extmap,other81352.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k81350){
var self__ = this;
var this__4509__auto____$1 = this;
var G__81366 = k81350;
var G__81366__$1 = (((G__81366 instanceof cljs.core.Keyword))?G__81366.fqn:null);
switch (G__81366__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k81350);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__81349){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__81367 = cljs.core.keyword_identical_QMARK_;
var expr__81368 = k__4511__auto__;
if(cljs.core.truth_((pred__81367.cljs$core$IFn$_invoke$arity$2 ? pred__81367.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__81368) : pred__81367.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__81368)))){
return (new shadow.dom.Coordinate(G__81349,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__81367.cljs$core$IFn$_invoke$arity$2 ? pred__81367.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__81368) : pred__81367.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__81368)))){
return (new shadow.dom.Coordinate(self__.x,G__81349,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__81349),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__81349){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__81349,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__81353){
var extmap__4542__auto__ = (function (){var G__81373 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__81353,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__81353)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__81373);
} else {
return G__81373;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__81353),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__81353),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k81376,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__81380 = k81376;
var G__81380__$1 = (((G__81380 instanceof cljs.core.Keyword))?G__81380.fqn:null);
switch (G__81380__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k81376,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__81381){
var vec__81382 = p__81381;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81382,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81382,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__81375){
var self__ = this;
var G__81375__$1 = this;
return (new cljs.core.RecordIter((0),G__81375__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this81377,other81378){
var self__ = this;
var this81377__$1 = this;
return (((!((other81378 == null)))) && ((((this81377__$1.constructor === other81378.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81377__$1.w,other81378.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81377__$1.h,other81378.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81377__$1.__extmap,other81378.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k81376){
var self__ = this;
var this__4509__auto____$1 = this;
var G__81388 = k81376;
var G__81388__$1 = (((G__81388 instanceof cljs.core.Keyword))?G__81388.fqn:null);
switch (G__81388__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k81376);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__81375){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__81390 = cljs.core.keyword_identical_QMARK_;
var expr__81391 = k__4511__auto__;
if(cljs.core.truth_((pred__81390.cljs$core$IFn$_invoke$arity$2 ? pred__81390.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__81391) : pred__81390.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__81391)))){
return (new shadow.dom.Size(G__81375,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__81390.cljs$core$IFn$_invoke$arity$2 ? pred__81390.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__81391) : pred__81390.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__81391)))){
return (new shadow.dom.Size(self__.w,G__81375,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__81375),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__81375){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__81375,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__81379){
var extmap__4542__auto__ = (function (){var G__81397 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__81379,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__81379)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__81397);
} else {
return G__81397;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__81379),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__81379),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__81955 = (i + (1));
var G__81956 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__81955;
ret = G__81956;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__81432){
var vec__81434 = p__81432;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81434,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81434,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__81451 = arguments.length;
switch (G__81451) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__81958 = ps;
var G__81959 = (i + (1));
el__$1 = G__81958;
i = G__81959;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__81513 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81513,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81513,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81513,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__81518_81960 = cljs.core.seq(props);
var chunk__81519_81961 = null;
var count__81520_81962 = (0);
var i__81521_81963 = (0);
while(true){
if((i__81521_81963 < count__81520_81962)){
var vec__81540_81964 = chunk__81519_81961.cljs$core$IIndexed$_nth$arity$2(null,i__81521_81963);
var k_81965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81540_81964,(0),null);
var v_81966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81540_81964,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_81965);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_81965),v_81966);


var G__81967 = seq__81518_81960;
var G__81968 = chunk__81519_81961;
var G__81969 = count__81520_81962;
var G__81970 = (i__81521_81963 + (1));
seq__81518_81960 = G__81967;
chunk__81519_81961 = G__81968;
count__81520_81962 = G__81969;
i__81521_81963 = G__81970;
continue;
} else {
var temp__5753__auto___81971 = cljs.core.seq(seq__81518_81960);
if(temp__5753__auto___81971){
var seq__81518_81972__$1 = temp__5753__auto___81971;
if(cljs.core.chunked_seq_QMARK_(seq__81518_81972__$1)){
var c__4679__auto___81973 = cljs.core.chunk_first(seq__81518_81972__$1);
var G__81974 = cljs.core.chunk_rest(seq__81518_81972__$1);
var G__81975 = c__4679__auto___81973;
var G__81976 = cljs.core.count(c__4679__auto___81973);
var G__81977 = (0);
seq__81518_81960 = G__81974;
chunk__81519_81961 = G__81975;
count__81520_81962 = G__81976;
i__81521_81963 = G__81977;
continue;
} else {
var vec__81547_81978 = cljs.core.first(seq__81518_81972__$1);
var k_81979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81547_81978,(0),null);
var v_81980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81547_81978,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_81979);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_81979),v_81980);


var G__81981 = cljs.core.next(seq__81518_81972__$1);
var G__81982 = null;
var G__81983 = (0);
var G__81984 = (0);
seq__81518_81960 = G__81981;
chunk__81519_81961 = G__81982;
count__81520_81962 = G__81983;
i__81521_81963 = G__81984;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__81562 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81562,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81562,(1),null);
var seq__81566_81985 = cljs.core.seq(node_children);
var chunk__81568_81986 = null;
var count__81569_81987 = (0);
var i__81570_81988 = (0);
while(true){
if((i__81570_81988 < count__81569_81987)){
var child_struct_81989 = chunk__81568_81986.cljs$core$IIndexed$_nth$arity$2(null,i__81570_81988);
if((!((child_struct_81989 == null)))){
if(typeof child_struct_81989 === 'string'){
var text_81990 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_81990),child_struct_81989].join(''));
} else {
var children_81991 = shadow.dom.svg_node(child_struct_81989);
if(cljs.core.seq_QMARK_(children_81991)){
var seq__81615_81992 = cljs.core.seq(children_81991);
var chunk__81617_81993 = null;
var count__81618_81994 = (0);
var i__81619_81995 = (0);
while(true){
if((i__81619_81995 < count__81618_81994)){
var child_81996 = chunk__81617_81993.cljs$core$IIndexed$_nth$arity$2(null,i__81619_81995);
if(cljs.core.truth_(child_81996)){
node.appendChild(child_81996);


var G__81997 = seq__81615_81992;
var G__81998 = chunk__81617_81993;
var G__81999 = count__81618_81994;
var G__82000 = (i__81619_81995 + (1));
seq__81615_81992 = G__81997;
chunk__81617_81993 = G__81998;
count__81618_81994 = G__81999;
i__81619_81995 = G__82000;
continue;
} else {
var G__82001 = seq__81615_81992;
var G__82002 = chunk__81617_81993;
var G__82003 = count__81618_81994;
var G__82004 = (i__81619_81995 + (1));
seq__81615_81992 = G__82001;
chunk__81617_81993 = G__82002;
count__81618_81994 = G__82003;
i__81619_81995 = G__82004;
continue;
}
} else {
var temp__5753__auto___82005 = cljs.core.seq(seq__81615_81992);
if(temp__5753__auto___82005){
var seq__81615_82006__$1 = temp__5753__auto___82005;
if(cljs.core.chunked_seq_QMARK_(seq__81615_82006__$1)){
var c__4679__auto___82007 = cljs.core.chunk_first(seq__81615_82006__$1);
var G__82008 = cljs.core.chunk_rest(seq__81615_82006__$1);
var G__82009 = c__4679__auto___82007;
var G__82010 = cljs.core.count(c__4679__auto___82007);
var G__82011 = (0);
seq__81615_81992 = G__82008;
chunk__81617_81993 = G__82009;
count__81618_81994 = G__82010;
i__81619_81995 = G__82011;
continue;
} else {
var child_82012 = cljs.core.first(seq__81615_82006__$1);
if(cljs.core.truth_(child_82012)){
node.appendChild(child_82012);


var G__82013 = cljs.core.next(seq__81615_82006__$1);
var G__82014 = null;
var G__82015 = (0);
var G__82016 = (0);
seq__81615_81992 = G__82013;
chunk__81617_81993 = G__82014;
count__81618_81994 = G__82015;
i__81619_81995 = G__82016;
continue;
} else {
var G__82017 = cljs.core.next(seq__81615_82006__$1);
var G__82018 = null;
var G__82019 = (0);
var G__82020 = (0);
seq__81615_81992 = G__82017;
chunk__81617_81993 = G__82018;
count__81618_81994 = G__82019;
i__81619_81995 = G__82020;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_81991);
}
}


var G__82021 = seq__81566_81985;
var G__82022 = chunk__81568_81986;
var G__82023 = count__81569_81987;
var G__82024 = (i__81570_81988 + (1));
seq__81566_81985 = G__82021;
chunk__81568_81986 = G__82022;
count__81569_81987 = G__82023;
i__81570_81988 = G__82024;
continue;
} else {
var G__82025 = seq__81566_81985;
var G__82026 = chunk__81568_81986;
var G__82027 = count__81569_81987;
var G__82028 = (i__81570_81988 + (1));
seq__81566_81985 = G__82025;
chunk__81568_81986 = G__82026;
count__81569_81987 = G__82027;
i__81570_81988 = G__82028;
continue;
}
} else {
var temp__5753__auto___82029 = cljs.core.seq(seq__81566_81985);
if(temp__5753__auto___82029){
var seq__81566_82030__$1 = temp__5753__auto___82029;
if(cljs.core.chunked_seq_QMARK_(seq__81566_82030__$1)){
var c__4679__auto___82031 = cljs.core.chunk_first(seq__81566_82030__$1);
var G__82032 = cljs.core.chunk_rest(seq__81566_82030__$1);
var G__82033 = c__4679__auto___82031;
var G__82034 = cljs.core.count(c__4679__auto___82031);
var G__82035 = (0);
seq__81566_81985 = G__82032;
chunk__81568_81986 = G__82033;
count__81569_81987 = G__82034;
i__81570_81988 = G__82035;
continue;
} else {
var child_struct_82036 = cljs.core.first(seq__81566_82030__$1);
if((!((child_struct_82036 == null)))){
if(typeof child_struct_82036 === 'string'){
var text_82037 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_82037),child_struct_82036].join(''));
} else {
var children_82038 = shadow.dom.svg_node(child_struct_82036);
if(cljs.core.seq_QMARK_(children_82038)){
var seq__81630_82039 = cljs.core.seq(children_82038);
var chunk__81632_82040 = null;
var count__81633_82041 = (0);
var i__81634_82042 = (0);
while(true){
if((i__81634_82042 < count__81633_82041)){
var child_82043 = chunk__81632_82040.cljs$core$IIndexed$_nth$arity$2(null,i__81634_82042);
if(cljs.core.truth_(child_82043)){
node.appendChild(child_82043);


var G__82044 = seq__81630_82039;
var G__82045 = chunk__81632_82040;
var G__82046 = count__81633_82041;
var G__82047 = (i__81634_82042 + (1));
seq__81630_82039 = G__82044;
chunk__81632_82040 = G__82045;
count__81633_82041 = G__82046;
i__81634_82042 = G__82047;
continue;
} else {
var G__82048 = seq__81630_82039;
var G__82049 = chunk__81632_82040;
var G__82050 = count__81633_82041;
var G__82051 = (i__81634_82042 + (1));
seq__81630_82039 = G__82048;
chunk__81632_82040 = G__82049;
count__81633_82041 = G__82050;
i__81634_82042 = G__82051;
continue;
}
} else {
var temp__5753__auto___82052__$1 = cljs.core.seq(seq__81630_82039);
if(temp__5753__auto___82052__$1){
var seq__81630_82053__$1 = temp__5753__auto___82052__$1;
if(cljs.core.chunked_seq_QMARK_(seq__81630_82053__$1)){
var c__4679__auto___82054 = cljs.core.chunk_first(seq__81630_82053__$1);
var G__82055 = cljs.core.chunk_rest(seq__81630_82053__$1);
var G__82056 = c__4679__auto___82054;
var G__82057 = cljs.core.count(c__4679__auto___82054);
var G__82058 = (0);
seq__81630_82039 = G__82055;
chunk__81632_82040 = G__82056;
count__81633_82041 = G__82057;
i__81634_82042 = G__82058;
continue;
} else {
var child_82059 = cljs.core.first(seq__81630_82053__$1);
if(cljs.core.truth_(child_82059)){
node.appendChild(child_82059);


var G__82060 = cljs.core.next(seq__81630_82053__$1);
var G__82061 = null;
var G__82062 = (0);
var G__82063 = (0);
seq__81630_82039 = G__82060;
chunk__81632_82040 = G__82061;
count__81633_82041 = G__82062;
i__81634_82042 = G__82063;
continue;
} else {
var G__82064 = cljs.core.next(seq__81630_82053__$1);
var G__82065 = null;
var G__82066 = (0);
var G__82067 = (0);
seq__81630_82039 = G__82064;
chunk__81632_82040 = G__82065;
count__81633_82041 = G__82066;
i__81634_82042 = G__82067;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_82038);
}
}


var G__82068 = cljs.core.next(seq__81566_82030__$1);
var G__82069 = null;
var G__82070 = (0);
var G__82071 = (0);
seq__81566_81985 = G__82068;
chunk__81568_81986 = G__82069;
count__81569_81987 = G__82070;
i__81570_81988 = G__82071;
continue;
} else {
var G__82072 = cljs.core.next(seq__81566_82030__$1);
var G__82073 = null;
var G__82074 = (0);
var G__82075 = (0);
seq__81566_81985 = G__82072;
chunk__81568_81986 = G__82073;
count__81569_81987 = G__82074;
i__81570_81988 = G__82075;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82076 = arguments.length;
var i__4865__auto___82077 = (0);
while(true){
if((i__4865__auto___82077 < len__4864__auto___82076)){
args__4870__auto__.push((arguments[i__4865__auto___82077]));

var G__82078 = (i__4865__auto___82077 + (1));
i__4865__auto___82077 = G__82078;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq81636){
var G__81637 = cljs.core.first(seq81636);
var seq81636__$1 = cljs.core.next(seq81636);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81637,seq81636__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__81682 = arguments.length;
switch (G__81682) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__77709__auto___82080 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77710__auto__ = (function (){var switch__77503__auto__ = (function (state_81697){
var state_val_81698 = (state_81697[(1)]);
if((state_val_81698 === (1))){
var state_81697__$1 = state_81697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_81697__$1,(2),once_or_cleanup);
} else {
if((state_val_81698 === (2))){
var inst_81694 = (state_81697[(2)]);
var inst_81695 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_81697__$1 = (function (){var statearr_81706 = state_81697;
(statearr_81706[(7)] = inst_81694);

return statearr_81706;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_81697__$1,inst_81695);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__77504__auto__ = null;
var shadow$dom$state_machine__77504__auto____0 = (function (){
var statearr_81708 = [null,null,null,null,null,null,null,null];
(statearr_81708[(0)] = shadow$dom$state_machine__77504__auto__);

(statearr_81708[(1)] = (1));

return statearr_81708;
});
var shadow$dom$state_machine__77504__auto____1 = (function (state_81697){
while(true){
var ret_value__77505__auto__ = (function (){try{while(true){
var result__77506__auto__ = switch__77503__auto__(state_81697);
if(cljs.core.keyword_identical_QMARK_(result__77506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77506__auto__;
}
break;
}
}catch (e81709){var ex__77507__auto__ = e81709;
var statearr_81712_82081 = state_81697;
(statearr_81712_82081[(2)] = ex__77507__auto__);


if(cljs.core.seq((state_81697[(4)]))){
var statearr_81715_82082 = state_81697;
(statearr_81715_82082[(1)] = cljs.core.first((state_81697[(4)])));

} else {
throw ex__77507__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82083 = state_81697;
state_81697 = G__82083;
continue;
} else {
return ret_value__77505__auto__;
}
break;
}
});
shadow$dom$state_machine__77504__auto__ = function(state_81697){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__77504__auto____0.call(this);
case 1:
return shadow$dom$state_machine__77504__auto____1.call(this,state_81697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__77504__auto____0;
shadow$dom$state_machine__77504__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__77504__auto____1;
return shadow$dom$state_machine__77504__auto__;
})()
})();
var state__77711__auto__ = (function (){var statearr_81717 = f__77710__auto__();
(statearr_81717[(6)] = c__77709__auto___82080);

return statearr_81717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77711__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
