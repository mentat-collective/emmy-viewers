goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_81407 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_81407(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_81408 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_81408(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__80477 = coll;
var G__80478 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__80477,G__80478) : shadow.dom.lazy_native_coll_seq.call(null,G__80477,G__80478));
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
var G__80516 = arguments.length;
switch (G__80516) {
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
var G__80528 = arguments.length;
switch (G__80528) {
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
var G__80545 = arguments.length;
switch (G__80545) {
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
var G__80556 = arguments.length;
switch (G__80556) {
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
var G__80594 = arguments.length;
switch (G__80594) {
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
var G__80613 = arguments.length;
switch (G__80613) {
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
}catch (e80622){if((e80622 instanceof Object)){
var e = e80622;
return console.log("didnt support attachEvent",el,e);
} else {
throw e80622;

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
var seq__80636 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__80637 = null;
var count__80638 = (0);
var i__80639 = (0);
while(true){
if((i__80639 < count__80638)){
var el = chunk__80637.cljs$core$IIndexed$_nth$arity$2(null,i__80639);
var handler_81424__$1 = ((function (seq__80636,chunk__80637,count__80638,i__80639,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__80636,chunk__80637,count__80638,i__80639,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_81424__$1);


var G__81427 = seq__80636;
var G__81428 = chunk__80637;
var G__81429 = count__80638;
var G__81430 = (i__80639 + (1));
seq__80636 = G__81427;
chunk__80637 = G__81428;
count__80638 = G__81429;
i__80639 = G__81430;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__80636);
if(temp__5753__auto__){
var seq__80636__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__80636__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__80636__$1);
var G__81431 = cljs.core.chunk_rest(seq__80636__$1);
var G__81432 = c__4679__auto__;
var G__81433 = cljs.core.count(c__4679__auto__);
var G__81434 = (0);
seq__80636 = G__81431;
chunk__80637 = G__81432;
count__80638 = G__81433;
i__80639 = G__81434;
continue;
} else {
var el = cljs.core.first(seq__80636__$1);
var handler_81435__$1 = ((function (seq__80636,chunk__80637,count__80638,i__80639,el,seq__80636__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__80636,chunk__80637,count__80638,i__80639,el,seq__80636__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_81435__$1);


var G__81436 = cljs.core.next(seq__80636__$1);
var G__81437 = null;
var G__81438 = (0);
var G__81439 = (0);
seq__80636 = G__81436;
chunk__80637 = G__81437;
count__80638 = G__81438;
i__80639 = G__81439;
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
var G__80675 = arguments.length;
switch (G__80675) {
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
var seq__80691 = cljs.core.seq(events);
var chunk__80692 = null;
var count__80693 = (0);
var i__80694 = (0);
while(true){
if((i__80694 < count__80693)){
var vec__80713 = chunk__80692.cljs$core$IIndexed$_nth$arity$2(null,i__80694);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80713,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80713,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__81441 = seq__80691;
var G__81442 = chunk__80692;
var G__81443 = count__80693;
var G__81444 = (i__80694 + (1));
seq__80691 = G__81441;
chunk__80692 = G__81442;
count__80693 = G__81443;
i__80694 = G__81444;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__80691);
if(temp__5753__auto__){
var seq__80691__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__80691__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__80691__$1);
var G__81445 = cljs.core.chunk_rest(seq__80691__$1);
var G__81446 = c__4679__auto__;
var G__81447 = cljs.core.count(c__4679__auto__);
var G__81448 = (0);
seq__80691 = G__81445;
chunk__80692 = G__81446;
count__80693 = G__81447;
i__80694 = G__81448;
continue;
} else {
var vec__80719 = cljs.core.first(seq__80691__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80719,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80719,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__81449 = cljs.core.next(seq__80691__$1);
var G__81450 = null;
var G__81451 = (0);
var G__81452 = (0);
seq__80691 = G__81449;
chunk__80692 = G__81450;
count__80693 = G__81451;
i__80694 = G__81452;
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
var seq__80726 = cljs.core.seq(styles);
var chunk__80727 = null;
var count__80728 = (0);
var i__80729 = (0);
while(true){
if((i__80729 < count__80728)){
var vec__80742 = chunk__80727.cljs$core$IIndexed$_nth$arity$2(null,i__80729);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80742,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80742,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__81453 = seq__80726;
var G__81454 = chunk__80727;
var G__81455 = count__80728;
var G__81456 = (i__80729 + (1));
seq__80726 = G__81453;
chunk__80727 = G__81454;
count__80728 = G__81455;
i__80729 = G__81456;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__80726);
if(temp__5753__auto__){
var seq__80726__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__80726__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__80726__$1);
var G__81457 = cljs.core.chunk_rest(seq__80726__$1);
var G__81458 = c__4679__auto__;
var G__81459 = cljs.core.count(c__4679__auto__);
var G__81460 = (0);
seq__80726 = G__81457;
chunk__80727 = G__81458;
count__80728 = G__81459;
i__80729 = G__81460;
continue;
} else {
var vec__80750 = cljs.core.first(seq__80726__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80750,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80750,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__81461 = cljs.core.next(seq__80726__$1);
var G__81462 = null;
var G__81463 = (0);
var G__81464 = (0);
seq__80726 = G__81461;
chunk__80727 = G__81462;
count__80728 = G__81463;
i__80729 = G__81464;
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
var G__80755_81465 = key;
var G__80755_81466__$1 = (((G__80755_81465 instanceof cljs.core.Keyword))?G__80755_81465.fqn:null);
switch (G__80755_81466__$1) {
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
var ks_81471 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_81471,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_81471,"aria-");
}
})())){
el.setAttribute(ks_81471,value);
} else {
(el[ks_81471] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__80811){
var map__80812 = p__80811;
var map__80812__$1 = cljs.core.__destructure_map(map__80812);
var props = map__80812__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80812__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__80813 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80813,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80813,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80813,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__80816 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__80816,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__80816;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__80821 = arguments.length;
switch (G__80821) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__80834){
var vec__80836 = p__80834;
var seq__80837 = cljs.core.seq(vec__80836);
var first__80838 = cljs.core.first(seq__80837);
var seq__80837__$1 = cljs.core.next(seq__80837);
var nn = first__80838;
var first__80838__$1 = cljs.core.first(seq__80837__$1);
var seq__80837__$2 = cljs.core.next(seq__80837__$1);
var np = first__80838__$1;
var nc = seq__80837__$2;
var node = vec__80836;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__80843 = nn;
var G__80844 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__80843,G__80844) : create_fn.call(null,G__80843,G__80844));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__80846 = nn;
var G__80847 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__80846,G__80847) : create_fn.call(null,G__80846,G__80847));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__80851 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80851,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80851,(1),null);
var seq__80854_81505 = cljs.core.seq(node_children);
var chunk__80855_81506 = null;
var count__80856_81507 = (0);
var i__80857_81508 = (0);
while(true){
if((i__80857_81508 < count__80856_81507)){
var child_struct_81509 = chunk__80855_81506.cljs$core$IIndexed$_nth$arity$2(null,i__80857_81508);
var children_81510 = shadow.dom.dom_node(child_struct_81509);
if(cljs.core.seq_QMARK_(children_81510)){
var seq__80899_81511 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_81510));
var chunk__80901_81512 = null;
var count__80902_81513 = (0);
var i__80903_81514 = (0);
while(true){
if((i__80903_81514 < count__80902_81513)){
var child_81515 = chunk__80901_81512.cljs$core$IIndexed$_nth$arity$2(null,i__80903_81514);
if(cljs.core.truth_(child_81515)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_81515);


var G__81516 = seq__80899_81511;
var G__81517 = chunk__80901_81512;
var G__81518 = count__80902_81513;
var G__81519 = (i__80903_81514 + (1));
seq__80899_81511 = G__81516;
chunk__80901_81512 = G__81517;
count__80902_81513 = G__81518;
i__80903_81514 = G__81519;
continue;
} else {
var G__81520 = seq__80899_81511;
var G__81521 = chunk__80901_81512;
var G__81522 = count__80902_81513;
var G__81523 = (i__80903_81514 + (1));
seq__80899_81511 = G__81520;
chunk__80901_81512 = G__81521;
count__80902_81513 = G__81522;
i__80903_81514 = G__81523;
continue;
}
} else {
var temp__5753__auto___81524 = cljs.core.seq(seq__80899_81511);
if(temp__5753__auto___81524){
var seq__80899_81525__$1 = temp__5753__auto___81524;
if(cljs.core.chunked_seq_QMARK_(seq__80899_81525__$1)){
var c__4679__auto___81526 = cljs.core.chunk_first(seq__80899_81525__$1);
var G__81527 = cljs.core.chunk_rest(seq__80899_81525__$1);
var G__81528 = c__4679__auto___81526;
var G__81529 = cljs.core.count(c__4679__auto___81526);
var G__81530 = (0);
seq__80899_81511 = G__81527;
chunk__80901_81512 = G__81528;
count__80902_81513 = G__81529;
i__80903_81514 = G__81530;
continue;
} else {
var child_81531 = cljs.core.first(seq__80899_81525__$1);
if(cljs.core.truth_(child_81531)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_81531);


var G__81532 = cljs.core.next(seq__80899_81525__$1);
var G__81533 = null;
var G__81534 = (0);
var G__81535 = (0);
seq__80899_81511 = G__81532;
chunk__80901_81512 = G__81533;
count__80902_81513 = G__81534;
i__80903_81514 = G__81535;
continue;
} else {
var G__81536 = cljs.core.next(seq__80899_81525__$1);
var G__81537 = null;
var G__81538 = (0);
var G__81539 = (0);
seq__80899_81511 = G__81536;
chunk__80901_81512 = G__81537;
count__80902_81513 = G__81538;
i__80903_81514 = G__81539;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_81510);
}


var G__81540 = seq__80854_81505;
var G__81541 = chunk__80855_81506;
var G__81542 = count__80856_81507;
var G__81543 = (i__80857_81508 + (1));
seq__80854_81505 = G__81540;
chunk__80855_81506 = G__81541;
count__80856_81507 = G__81542;
i__80857_81508 = G__81543;
continue;
} else {
var temp__5753__auto___81544 = cljs.core.seq(seq__80854_81505);
if(temp__5753__auto___81544){
var seq__80854_81545__$1 = temp__5753__auto___81544;
if(cljs.core.chunked_seq_QMARK_(seq__80854_81545__$1)){
var c__4679__auto___81546 = cljs.core.chunk_first(seq__80854_81545__$1);
var G__81547 = cljs.core.chunk_rest(seq__80854_81545__$1);
var G__81548 = c__4679__auto___81546;
var G__81549 = cljs.core.count(c__4679__auto___81546);
var G__81550 = (0);
seq__80854_81505 = G__81547;
chunk__80855_81506 = G__81548;
count__80856_81507 = G__81549;
i__80857_81508 = G__81550;
continue;
} else {
var child_struct_81551 = cljs.core.first(seq__80854_81545__$1);
var children_81552 = shadow.dom.dom_node(child_struct_81551);
if(cljs.core.seq_QMARK_(children_81552)){
var seq__80919_81553 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_81552));
var chunk__80921_81554 = null;
var count__80922_81555 = (0);
var i__80923_81556 = (0);
while(true){
if((i__80923_81556 < count__80922_81555)){
var child_81557 = chunk__80921_81554.cljs$core$IIndexed$_nth$arity$2(null,i__80923_81556);
if(cljs.core.truth_(child_81557)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_81557);


var G__81558 = seq__80919_81553;
var G__81559 = chunk__80921_81554;
var G__81560 = count__80922_81555;
var G__81561 = (i__80923_81556 + (1));
seq__80919_81553 = G__81558;
chunk__80921_81554 = G__81559;
count__80922_81555 = G__81560;
i__80923_81556 = G__81561;
continue;
} else {
var G__81562 = seq__80919_81553;
var G__81563 = chunk__80921_81554;
var G__81564 = count__80922_81555;
var G__81565 = (i__80923_81556 + (1));
seq__80919_81553 = G__81562;
chunk__80921_81554 = G__81563;
count__80922_81555 = G__81564;
i__80923_81556 = G__81565;
continue;
}
} else {
var temp__5753__auto___81566__$1 = cljs.core.seq(seq__80919_81553);
if(temp__5753__auto___81566__$1){
var seq__80919_81568__$1 = temp__5753__auto___81566__$1;
if(cljs.core.chunked_seq_QMARK_(seq__80919_81568__$1)){
var c__4679__auto___81572 = cljs.core.chunk_first(seq__80919_81568__$1);
var G__81573 = cljs.core.chunk_rest(seq__80919_81568__$1);
var G__81574 = c__4679__auto___81572;
var G__81575 = cljs.core.count(c__4679__auto___81572);
var G__81576 = (0);
seq__80919_81553 = G__81573;
chunk__80921_81554 = G__81574;
count__80922_81555 = G__81575;
i__80923_81556 = G__81576;
continue;
} else {
var child_81577 = cljs.core.first(seq__80919_81568__$1);
if(cljs.core.truth_(child_81577)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_81577);


var G__81578 = cljs.core.next(seq__80919_81568__$1);
var G__81579 = null;
var G__81580 = (0);
var G__81581 = (0);
seq__80919_81553 = G__81578;
chunk__80921_81554 = G__81579;
count__80922_81555 = G__81580;
i__80923_81556 = G__81581;
continue;
} else {
var G__81582 = cljs.core.next(seq__80919_81568__$1);
var G__81583 = null;
var G__81584 = (0);
var G__81585 = (0);
seq__80919_81553 = G__81582;
chunk__80921_81554 = G__81583;
count__80922_81555 = G__81584;
i__80923_81556 = G__81585;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_81552);
}


var G__81586 = cljs.core.next(seq__80854_81545__$1);
var G__81587 = null;
var G__81588 = (0);
var G__81589 = (0);
seq__80854_81505 = G__81586;
chunk__80855_81506 = G__81587;
count__80856_81507 = G__81588;
i__80857_81508 = G__81589;
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
var seq__80974 = cljs.core.seq(node);
var chunk__80975 = null;
var count__80976 = (0);
var i__80977 = (0);
while(true){
if((i__80977 < count__80976)){
var n = chunk__80975.cljs$core$IIndexed$_nth$arity$2(null,i__80977);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__81590 = seq__80974;
var G__81591 = chunk__80975;
var G__81592 = count__80976;
var G__81593 = (i__80977 + (1));
seq__80974 = G__81590;
chunk__80975 = G__81591;
count__80976 = G__81592;
i__80977 = G__81593;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__80974);
if(temp__5753__auto__){
var seq__80974__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__80974__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__80974__$1);
var G__81594 = cljs.core.chunk_rest(seq__80974__$1);
var G__81595 = c__4679__auto__;
var G__81596 = cljs.core.count(c__4679__auto__);
var G__81597 = (0);
seq__80974 = G__81594;
chunk__80975 = G__81595;
count__80976 = G__81596;
i__80977 = G__81597;
continue;
} else {
var n = cljs.core.first(seq__80974__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__81598 = cljs.core.next(seq__80974__$1);
var G__81599 = null;
var G__81600 = (0);
var G__81601 = (0);
seq__80974 = G__81598;
chunk__80975 = G__81599;
count__80976 = G__81600;
i__80977 = G__81601;
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
var G__81002 = arguments.length;
switch (G__81002) {
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
var G__81015 = arguments.length;
switch (G__81015) {
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
var G__81043 = arguments.length;
switch (G__81043) {
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
var len__4864__auto___81611 = arguments.length;
var i__4865__auto___81612 = (0);
while(true){
if((i__4865__auto___81612 < len__4864__auto___81611)){
args__4870__auto__.push((arguments[i__4865__auto___81612]));

var G__81613 = (i__4865__auto___81612 + (1));
i__4865__auto___81612 = G__81613;
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
var seq__81086_81615 = cljs.core.seq(nodes);
var chunk__81087_81616 = null;
var count__81088_81617 = (0);
var i__81089_81618 = (0);
while(true){
if((i__81089_81618 < count__81088_81617)){
var node_81619 = chunk__81087_81616.cljs$core$IIndexed$_nth$arity$2(null,i__81089_81618);
fragment.appendChild(shadow.dom._to_dom(node_81619));


var G__81620 = seq__81086_81615;
var G__81621 = chunk__81087_81616;
var G__81622 = count__81088_81617;
var G__81623 = (i__81089_81618 + (1));
seq__81086_81615 = G__81620;
chunk__81087_81616 = G__81621;
count__81088_81617 = G__81622;
i__81089_81618 = G__81623;
continue;
} else {
var temp__5753__auto___81624 = cljs.core.seq(seq__81086_81615);
if(temp__5753__auto___81624){
var seq__81086_81625__$1 = temp__5753__auto___81624;
if(cljs.core.chunked_seq_QMARK_(seq__81086_81625__$1)){
var c__4679__auto___81626 = cljs.core.chunk_first(seq__81086_81625__$1);
var G__81627 = cljs.core.chunk_rest(seq__81086_81625__$1);
var G__81628 = c__4679__auto___81626;
var G__81629 = cljs.core.count(c__4679__auto___81626);
var G__81630 = (0);
seq__81086_81615 = G__81627;
chunk__81087_81616 = G__81628;
count__81088_81617 = G__81629;
i__81089_81618 = G__81630;
continue;
} else {
var node_81631 = cljs.core.first(seq__81086_81625__$1);
fragment.appendChild(shadow.dom._to_dom(node_81631));


var G__81632 = cljs.core.next(seq__81086_81625__$1);
var G__81633 = null;
var G__81634 = (0);
var G__81635 = (0);
seq__81086_81615 = G__81632;
chunk__81087_81616 = G__81633;
count__81088_81617 = G__81634;
i__81089_81618 = G__81635;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq81057){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq81057));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__81096_81637 = cljs.core.seq(scripts);
var chunk__81097_81638 = null;
var count__81098_81639 = (0);
var i__81099_81640 = (0);
while(true){
if((i__81099_81640 < count__81098_81639)){
var vec__81111_81641 = chunk__81097_81638.cljs$core$IIndexed$_nth$arity$2(null,i__81099_81640);
var script_tag_81642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81111_81641,(0),null);
var script_body_81643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81111_81641,(1),null);
eval(script_body_81643);


var G__81644 = seq__81096_81637;
var G__81645 = chunk__81097_81638;
var G__81646 = count__81098_81639;
var G__81647 = (i__81099_81640 + (1));
seq__81096_81637 = G__81644;
chunk__81097_81638 = G__81645;
count__81098_81639 = G__81646;
i__81099_81640 = G__81647;
continue;
} else {
var temp__5753__auto___81648 = cljs.core.seq(seq__81096_81637);
if(temp__5753__auto___81648){
var seq__81096_81649__$1 = temp__5753__auto___81648;
if(cljs.core.chunked_seq_QMARK_(seq__81096_81649__$1)){
var c__4679__auto___81650 = cljs.core.chunk_first(seq__81096_81649__$1);
var G__81651 = cljs.core.chunk_rest(seq__81096_81649__$1);
var G__81652 = c__4679__auto___81650;
var G__81653 = cljs.core.count(c__4679__auto___81650);
var G__81654 = (0);
seq__81096_81637 = G__81651;
chunk__81097_81638 = G__81652;
count__81098_81639 = G__81653;
i__81099_81640 = G__81654;
continue;
} else {
var vec__81117_81655 = cljs.core.first(seq__81096_81649__$1);
var script_tag_81656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81117_81655,(0),null);
var script_body_81657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81117_81655,(1),null);
eval(script_body_81657);


var G__81658 = cljs.core.next(seq__81096_81649__$1);
var G__81659 = null;
var G__81660 = (0);
var G__81661 = (0);
seq__81096_81637 = G__81658;
chunk__81097_81638 = G__81659;
count__81098_81639 = G__81660;
i__81099_81640 = G__81661;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__81125){
var vec__81126 = p__81125;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81126,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81126,(1),null);
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
var G__81164 = arguments.length;
switch (G__81164) {
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
var seq__81185 = cljs.core.seq(style_keys);
var chunk__81186 = null;
var count__81187 = (0);
var i__81188 = (0);
while(true){
if((i__81188 < count__81187)){
var it = chunk__81186.cljs$core$IIndexed$_nth$arity$2(null,i__81188);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__81663 = seq__81185;
var G__81664 = chunk__81186;
var G__81665 = count__81187;
var G__81666 = (i__81188 + (1));
seq__81185 = G__81663;
chunk__81186 = G__81664;
count__81187 = G__81665;
i__81188 = G__81666;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__81185);
if(temp__5753__auto__){
var seq__81185__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__81185__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__81185__$1);
var G__81667 = cljs.core.chunk_rest(seq__81185__$1);
var G__81668 = c__4679__auto__;
var G__81669 = cljs.core.count(c__4679__auto__);
var G__81670 = (0);
seq__81185 = G__81667;
chunk__81186 = G__81668;
count__81187 = G__81669;
i__81188 = G__81670;
continue;
} else {
var it = cljs.core.first(seq__81185__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__81671 = cljs.core.next(seq__81185__$1);
var G__81672 = null;
var G__81673 = (0);
var G__81674 = (0);
seq__81185 = G__81671;
chunk__81186 = G__81672;
count__81187 = G__81673;
i__81188 = G__81674;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k81192,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__81196 = k81192;
var G__81196__$1 = (((G__81196 instanceof cljs.core.Keyword))?G__81196.fqn:null);
switch (G__81196__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k81192,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__81197){
var vec__81198 = p__81197;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81198,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81198,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__81191){
var self__ = this;
var G__81191__$1 = this;
return (new cljs.core.RecordIter((0),G__81191__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this81193,other81194){
var self__ = this;
var this81193__$1 = this;
return (((!((other81194 == null)))) && ((((this81193__$1.constructor === other81194.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81193__$1.x,other81194.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81193__$1.y,other81194.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81193__$1.__extmap,other81194.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k81192){
var self__ = this;
var this__4509__auto____$1 = this;
var G__81201 = k81192;
var G__81201__$1 = (((G__81201 instanceof cljs.core.Keyword))?G__81201.fqn:null);
switch (G__81201__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k81192);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__81191){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__81202 = cljs.core.keyword_identical_QMARK_;
var expr__81203 = k__4511__auto__;
if(cljs.core.truth_((pred__81202.cljs$core$IFn$_invoke$arity$2 ? pred__81202.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__81203) : pred__81202.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__81203)))){
return (new shadow.dom.Coordinate(G__81191,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__81202.cljs$core$IFn$_invoke$arity$2 ? pred__81202.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__81203) : pred__81202.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__81203)))){
return (new shadow.dom.Coordinate(self__.x,G__81191,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__81191),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__81191){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__81191,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__81195){
var extmap__4542__auto__ = (function (){var G__81205 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__81195,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__81195)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__81205);
} else {
return G__81205;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__81195),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__81195),null,cljs.core.not_empty(extmap__4542__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k81207,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__81211 = k81207;
var G__81211__$1 = (((G__81211 instanceof cljs.core.Keyword))?G__81211.fqn:null);
switch (G__81211__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k81207,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__81212){
var vec__81213 = p__81212;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81213,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81213,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__81206){
var self__ = this;
var G__81206__$1 = this;
return (new cljs.core.RecordIter((0),G__81206__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this81208,other81209){
var self__ = this;
var this81208__$1 = this;
return (((!((other81209 == null)))) && ((((this81208__$1.constructor === other81209.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81208__$1.w,other81209.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81208__$1.h,other81209.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81208__$1.__extmap,other81209.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k81207){
var self__ = this;
var this__4509__auto____$1 = this;
var G__81216 = k81207;
var G__81216__$1 = (((G__81216 instanceof cljs.core.Keyword))?G__81216.fqn:null);
switch (G__81216__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k81207);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__81206){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__81217 = cljs.core.keyword_identical_QMARK_;
var expr__81218 = k__4511__auto__;
if(cljs.core.truth_((pred__81217.cljs$core$IFn$_invoke$arity$2 ? pred__81217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__81218) : pred__81217.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__81218)))){
return (new shadow.dom.Size(G__81206,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__81217.cljs$core$IFn$_invoke$arity$2 ? pred__81217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__81218) : pred__81217.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__81218)))){
return (new shadow.dom.Size(self__.w,G__81206,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__81206),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__81206){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__81206,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__81210){
var extmap__4542__auto__ = (function (){var G__81220 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__81210,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__81210)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__81220);
} else {
return G__81220;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__81210),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__81210),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var G__81688 = (i + (1));
var G__81689 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__81688;
ret = G__81689;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__81252){
var vec__81253 = p__81252;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81253,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81253,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__81261 = arguments.length;
switch (G__81261) {
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
var G__81691 = ps;
var G__81692 = (i + (1));
el__$1 = G__81691;
i = G__81692;
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
var vec__81283 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81283,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81283,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81283,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__81286_81693 = cljs.core.seq(props);
var chunk__81287_81694 = null;
var count__81288_81695 = (0);
var i__81289_81696 = (0);
while(true){
if((i__81289_81696 < count__81288_81695)){
var vec__81305_81697 = chunk__81287_81694.cljs$core$IIndexed$_nth$arity$2(null,i__81289_81696);
var k_81698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81305_81697,(0),null);
var v_81699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81305_81697,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_81698);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_81698),v_81699);


var G__81700 = seq__81286_81693;
var G__81701 = chunk__81287_81694;
var G__81702 = count__81288_81695;
var G__81703 = (i__81289_81696 + (1));
seq__81286_81693 = G__81700;
chunk__81287_81694 = G__81701;
count__81288_81695 = G__81702;
i__81289_81696 = G__81703;
continue;
} else {
var temp__5753__auto___81704 = cljs.core.seq(seq__81286_81693);
if(temp__5753__auto___81704){
var seq__81286_81705__$1 = temp__5753__auto___81704;
if(cljs.core.chunked_seq_QMARK_(seq__81286_81705__$1)){
var c__4679__auto___81706 = cljs.core.chunk_first(seq__81286_81705__$1);
var G__81707 = cljs.core.chunk_rest(seq__81286_81705__$1);
var G__81708 = c__4679__auto___81706;
var G__81709 = cljs.core.count(c__4679__auto___81706);
var G__81710 = (0);
seq__81286_81693 = G__81707;
chunk__81287_81694 = G__81708;
count__81288_81695 = G__81709;
i__81289_81696 = G__81710;
continue;
} else {
var vec__81312_81712 = cljs.core.first(seq__81286_81705__$1);
var k_81713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81312_81712,(0),null);
var v_81714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81312_81712,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_81713);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_81713),v_81714);


var G__81718 = cljs.core.next(seq__81286_81705__$1);
var G__81719 = null;
var G__81720 = (0);
var G__81721 = (0);
seq__81286_81693 = G__81718;
chunk__81287_81694 = G__81719;
count__81288_81695 = G__81720;
i__81289_81696 = G__81721;
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
var vec__81325 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81325,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81325,(1),null);
var seq__81328_81722 = cljs.core.seq(node_children);
var chunk__81330_81723 = null;
var count__81331_81724 = (0);
var i__81332_81725 = (0);
while(true){
if((i__81332_81725 < count__81331_81724)){
var child_struct_81726 = chunk__81330_81723.cljs$core$IIndexed$_nth$arity$2(null,i__81332_81725);
if((!((child_struct_81726 == null)))){
if(typeof child_struct_81726 === 'string'){
var text_81727 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_81727),child_struct_81726].join(''));
} else {
var children_81728 = shadow.dom.svg_node(child_struct_81726);
if(cljs.core.seq_QMARK_(children_81728)){
var seq__81370_81729 = cljs.core.seq(children_81728);
var chunk__81372_81730 = null;
var count__81373_81731 = (0);
var i__81374_81732 = (0);
while(true){
if((i__81374_81732 < count__81373_81731)){
var child_81733 = chunk__81372_81730.cljs$core$IIndexed$_nth$arity$2(null,i__81374_81732);
if(cljs.core.truth_(child_81733)){
node.appendChild(child_81733);


var G__81735 = seq__81370_81729;
var G__81736 = chunk__81372_81730;
var G__81737 = count__81373_81731;
var G__81738 = (i__81374_81732 + (1));
seq__81370_81729 = G__81735;
chunk__81372_81730 = G__81736;
count__81373_81731 = G__81737;
i__81374_81732 = G__81738;
continue;
} else {
var G__81739 = seq__81370_81729;
var G__81740 = chunk__81372_81730;
var G__81741 = count__81373_81731;
var G__81742 = (i__81374_81732 + (1));
seq__81370_81729 = G__81739;
chunk__81372_81730 = G__81740;
count__81373_81731 = G__81741;
i__81374_81732 = G__81742;
continue;
}
} else {
var temp__5753__auto___81743 = cljs.core.seq(seq__81370_81729);
if(temp__5753__auto___81743){
var seq__81370_81744__$1 = temp__5753__auto___81743;
if(cljs.core.chunked_seq_QMARK_(seq__81370_81744__$1)){
var c__4679__auto___81745 = cljs.core.chunk_first(seq__81370_81744__$1);
var G__81746 = cljs.core.chunk_rest(seq__81370_81744__$1);
var G__81747 = c__4679__auto___81745;
var G__81748 = cljs.core.count(c__4679__auto___81745);
var G__81749 = (0);
seq__81370_81729 = G__81746;
chunk__81372_81730 = G__81747;
count__81373_81731 = G__81748;
i__81374_81732 = G__81749;
continue;
} else {
var child_81750 = cljs.core.first(seq__81370_81744__$1);
if(cljs.core.truth_(child_81750)){
node.appendChild(child_81750);


var G__81751 = cljs.core.next(seq__81370_81744__$1);
var G__81752 = null;
var G__81753 = (0);
var G__81754 = (0);
seq__81370_81729 = G__81751;
chunk__81372_81730 = G__81752;
count__81373_81731 = G__81753;
i__81374_81732 = G__81754;
continue;
} else {
var G__81755 = cljs.core.next(seq__81370_81744__$1);
var G__81756 = null;
var G__81757 = (0);
var G__81758 = (0);
seq__81370_81729 = G__81755;
chunk__81372_81730 = G__81756;
count__81373_81731 = G__81757;
i__81374_81732 = G__81758;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_81728);
}
}


var G__81759 = seq__81328_81722;
var G__81760 = chunk__81330_81723;
var G__81761 = count__81331_81724;
var G__81762 = (i__81332_81725 + (1));
seq__81328_81722 = G__81759;
chunk__81330_81723 = G__81760;
count__81331_81724 = G__81761;
i__81332_81725 = G__81762;
continue;
} else {
var G__81763 = seq__81328_81722;
var G__81764 = chunk__81330_81723;
var G__81765 = count__81331_81724;
var G__81766 = (i__81332_81725 + (1));
seq__81328_81722 = G__81763;
chunk__81330_81723 = G__81764;
count__81331_81724 = G__81765;
i__81332_81725 = G__81766;
continue;
}
} else {
var temp__5753__auto___81767 = cljs.core.seq(seq__81328_81722);
if(temp__5753__auto___81767){
var seq__81328_81768__$1 = temp__5753__auto___81767;
if(cljs.core.chunked_seq_QMARK_(seq__81328_81768__$1)){
var c__4679__auto___81769 = cljs.core.chunk_first(seq__81328_81768__$1);
var G__81770 = cljs.core.chunk_rest(seq__81328_81768__$1);
var G__81771 = c__4679__auto___81769;
var G__81772 = cljs.core.count(c__4679__auto___81769);
var G__81773 = (0);
seq__81328_81722 = G__81770;
chunk__81330_81723 = G__81771;
count__81331_81724 = G__81772;
i__81332_81725 = G__81773;
continue;
} else {
var child_struct_81774 = cljs.core.first(seq__81328_81768__$1);
if((!((child_struct_81774 == null)))){
if(typeof child_struct_81774 === 'string'){
var text_81775 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_81775),child_struct_81774].join(''));
} else {
var children_81776 = shadow.dom.svg_node(child_struct_81774);
if(cljs.core.seq_QMARK_(children_81776)){
var seq__81377_81777 = cljs.core.seq(children_81776);
var chunk__81379_81778 = null;
var count__81380_81779 = (0);
var i__81381_81780 = (0);
while(true){
if((i__81381_81780 < count__81380_81779)){
var child_81781 = chunk__81379_81778.cljs$core$IIndexed$_nth$arity$2(null,i__81381_81780);
if(cljs.core.truth_(child_81781)){
node.appendChild(child_81781);


var G__81782 = seq__81377_81777;
var G__81783 = chunk__81379_81778;
var G__81784 = count__81380_81779;
var G__81785 = (i__81381_81780 + (1));
seq__81377_81777 = G__81782;
chunk__81379_81778 = G__81783;
count__81380_81779 = G__81784;
i__81381_81780 = G__81785;
continue;
} else {
var G__81786 = seq__81377_81777;
var G__81787 = chunk__81379_81778;
var G__81788 = count__81380_81779;
var G__81789 = (i__81381_81780 + (1));
seq__81377_81777 = G__81786;
chunk__81379_81778 = G__81787;
count__81380_81779 = G__81788;
i__81381_81780 = G__81789;
continue;
}
} else {
var temp__5753__auto___81791__$1 = cljs.core.seq(seq__81377_81777);
if(temp__5753__auto___81791__$1){
var seq__81377_81792__$1 = temp__5753__auto___81791__$1;
if(cljs.core.chunked_seq_QMARK_(seq__81377_81792__$1)){
var c__4679__auto___81793 = cljs.core.chunk_first(seq__81377_81792__$1);
var G__81794 = cljs.core.chunk_rest(seq__81377_81792__$1);
var G__81795 = c__4679__auto___81793;
var G__81796 = cljs.core.count(c__4679__auto___81793);
var G__81797 = (0);
seq__81377_81777 = G__81794;
chunk__81379_81778 = G__81795;
count__81380_81779 = G__81796;
i__81381_81780 = G__81797;
continue;
} else {
var child_81798 = cljs.core.first(seq__81377_81792__$1);
if(cljs.core.truth_(child_81798)){
node.appendChild(child_81798);


var G__81799 = cljs.core.next(seq__81377_81792__$1);
var G__81800 = null;
var G__81801 = (0);
var G__81802 = (0);
seq__81377_81777 = G__81799;
chunk__81379_81778 = G__81800;
count__81380_81779 = G__81801;
i__81381_81780 = G__81802;
continue;
} else {
var G__81803 = cljs.core.next(seq__81377_81792__$1);
var G__81804 = null;
var G__81805 = (0);
var G__81806 = (0);
seq__81377_81777 = G__81803;
chunk__81379_81778 = G__81804;
count__81380_81779 = G__81805;
i__81381_81780 = G__81806;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_81776);
}
}


var G__81807 = cljs.core.next(seq__81328_81768__$1);
var G__81808 = null;
var G__81809 = (0);
var G__81810 = (0);
seq__81328_81722 = G__81807;
chunk__81330_81723 = G__81808;
count__81331_81724 = G__81809;
i__81332_81725 = G__81810;
continue;
} else {
var G__81812 = cljs.core.next(seq__81328_81768__$1);
var G__81813 = null;
var G__81814 = (0);
var G__81815 = (0);
seq__81328_81722 = G__81812;
chunk__81330_81723 = G__81813;
count__81331_81724 = G__81814;
i__81332_81725 = G__81815;
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
var len__4864__auto___81816 = arguments.length;
var i__4865__auto___81817 = (0);
while(true){
if((i__4865__auto___81817 < len__4864__auto___81816)){
args__4870__auto__.push((arguments[i__4865__auto___81817]));

var G__81818 = (i__4865__auto___81817 + (1));
i__4865__auto___81817 = G__81818;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq81385){
var G__81386 = cljs.core.first(seq81385);
var seq81385__$1 = cljs.core.next(seq81385);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81386,seq81385__$1);
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
var G__81388 = arguments.length;
switch (G__81388) {
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
var c__77562__auto___81821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__77563__auto__ = (function (){var switch__77210__auto__ = (function (state_81393){
var state_val_81394 = (state_81393[(1)]);
if((state_val_81394 === (1))){
var state_81393__$1 = state_81393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_81393__$1,(2),once_or_cleanup);
} else {
if((state_val_81394 === (2))){
var inst_81390 = (state_81393[(2)]);
var inst_81391 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_81393__$1 = (function (){var statearr_81397 = state_81393;
(statearr_81397[(7)] = inst_81390);

return statearr_81397;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_81393__$1,inst_81391);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__77211__auto__ = null;
var shadow$dom$state_machine__77211__auto____0 = (function (){
var statearr_81398 = [null,null,null,null,null,null,null,null];
(statearr_81398[(0)] = shadow$dom$state_machine__77211__auto__);

(statearr_81398[(1)] = (1));

return statearr_81398;
});
var shadow$dom$state_machine__77211__auto____1 = (function (state_81393){
while(true){
var ret_value__77212__auto__ = (function (){try{while(true){
var result__77213__auto__ = switch__77210__auto__(state_81393);
if(cljs.core.keyword_identical_QMARK_(result__77213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__77213__auto__;
}
break;
}
}catch (e81399){var ex__77214__auto__ = e81399;
var statearr_81400_81822 = state_81393;
(statearr_81400_81822[(2)] = ex__77214__auto__);


if(cljs.core.seq((state_81393[(4)]))){
var statearr_81401_81823 = state_81393;
(statearr_81401_81823[(1)] = cljs.core.first((state_81393[(4)])));

} else {
throw ex__77214__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__77212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81824 = state_81393;
state_81393 = G__81824;
continue;
} else {
return ret_value__77212__auto__;
}
break;
}
});
shadow$dom$state_machine__77211__auto__ = function(state_81393){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__77211__auto____0.call(this);
case 1:
return shadow$dom$state_machine__77211__auto____1.call(this,state_81393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__77211__auto____0;
shadow$dom$state_machine__77211__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__77211__auto____1;
return shadow$dom$state_machine__77211__auto__;
})()
})();
var state__77564__auto__ = (function (){var statearr_81402 = f__77563__auto__();
(statearr_81402[(6)] = c__77562__auto___81821);

return statearr_81402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__77564__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
