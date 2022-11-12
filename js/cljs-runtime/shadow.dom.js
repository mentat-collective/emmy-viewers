goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_58738 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_58738(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_58739 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_58739(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__57825 = coll;
var G__57826 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__57825,G__57826) : shadow.dom.lazy_native_coll_seq.call(null,G__57825,G__57826));
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
var G__57849 = arguments.length;
switch (G__57849) {
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
var G__57854 = arguments.length;
switch (G__57854) {
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
var G__57856 = arguments.length;
switch (G__57856) {
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
var G__57858 = arguments.length;
switch (G__57858) {
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
var G__57877 = arguments.length;
switch (G__57877) {
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
var G__57907 = arguments.length;
switch (G__57907) {
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
}catch (e57941){if((e57941 instanceof Object)){
var e = e57941;
return console.log("didnt support attachEvent",el,e);
} else {
throw e57941;

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
var seq__57974 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__57975 = null;
var count__57976 = (0);
var i__57977 = (0);
while(true){
if((i__57977 < count__57976)){
var el = chunk__57975.cljs$core$IIndexed$_nth$arity$2(null,i__57977);
var handler_58746__$1 = ((function (seq__57974,chunk__57975,count__57976,i__57977,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57974,chunk__57975,count__57976,i__57977,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_58746__$1);


var G__58747 = seq__57974;
var G__58748 = chunk__57975;
var G__58749 = count__57976;
var G__58750 = (i__57977 + (1));
seq__57974 = G__58747;
chunk__57975 = G__58748;
count__57976 = G__58749;
i__57977 = G__58750;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57974);
if(temp__5753__auto__){
var seq__57974__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57974__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__57974__$1);
var G__58751 = cljs.core.chunk_rest(seq__57974__$1);
var G__58752 = c__4679__auto__;
var G__58753 = cljs.core.count(c__4679__auto__);
var G__58754 = (0);
seq__57974 = G__58751;
chunk__57975 = G__58752;
count__57976 = G__58753;
i__57977 = G__58754;
continue;
} else {
var el = cljs.core.first(seq__57974__$1);
var handler_58755__$1 = ((function (seq__57974,chunk__57975,count__57976,i__57977,el,seq__57974__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57974,chunk__57975,count__57976,i__57977,el,seq__57974__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_58755__$1);


var G__58756 = cljs.core.next(seq__57974__$1);
var G__58757 = null;
var G__58758 = (0);
var G__58759 = (0);
seq__57974 = G__58756;
chunk__57975 = G__58757;
count__57976 = G__58758;
i__57977 = G__58759;
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
var G__58004 = arguments.length;
switch (G__58004) {
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
var seq__58036 = cljs.core.seq(events);
var chunk__58037 = null;
var count__58038 = (0);
var i__58039 = (0);
while(true){
if((i__58039 < count__58038)){
var vec__58067 = chunk__58037.cljs$core$IIndexed$_nth$arity$2(null,i__58039);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58067,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58067,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58761 = seq__58036;
var G__58762 = chunk__58037;
var G__58763 = count__58038;
var G__58764 = (i__58039 + (1));
seq__58036 = G__58761;
chunk__58037 = G__58762;
count__58038 = G__58763;
i__58039 = G__58764;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58036);
if(temp__5753__auto__){
var seq__58036__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58036__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__58036__$1);
var G__58765 = cljs.core.chunk_rest(seq__58036__$1);
var G__58766 = c__4679__auto__;
var G__58767 = cljs.core.count(c__4679__auto__);
var G__58768 = (0);
seq__58036 = G__58765;
chunk__58037 = G__58766;
count__58038 = G__58767;
i__58039 = G__58768;
continue;
} else {
var vec__58076 = cljs.core.first(seq__58036__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58076,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58076,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58769 = cljs.core.next(seq__58036__$1);
var G__58770 = null;
var G__58771 = (0);
var G__58772 = (0);
seq__58036 = G__58769;
chunk__58037 = G__58770;
count__58038 = G__58771;
i__58039 = G__58772;
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
var seq__58080 = cljs.core.seq(styles);
var chunk__58081 = null;
var count__58082 = (0);
var i__58083 = (0);
while(true){
if((i__58083 < count__58082)){
var vec__58108 = chunk__58081.cljs$core$IIndexed$_nth$arity$2(null,i__58083);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58108,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58108,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__58773 = seq__58080;
var G__58774 = chunk__58081;
var G__58775 = count__58082;
var G__58776 = (i__58083 + (1));
seq__58080 = G__58773;
chunk__58081 = G__58774;
count__58082 = G__58775;
i__58083 = G__58776;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58080);
if(temp__5753__auto__){
var seq__58080__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58080__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__58080__$1);
var G__58777 = cljs.core.chunk_rest(seq__58080__$1);
var G__58778 = c__4679__auto__;
var G__58779 = cljs.core.count(c__4679__auto__);
var G__58780 = (0);
seq__58080 = G__58777;
chunk__58081 = G__58778;
count__58082 = G__58779;
i__58083 = G__58780;
continue;
} else {
var vec__58115 = cljs.core.first(seq__58080__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58115,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58115,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__58781 = cljs.core.next(seq__58080__$1);
var G__58782 = null;
var G__58783 = (0);
var G__58784 = (0);
seq__58080 = G__58781;
chunk__58081 = G__58782;
count__58082 = G__58783;
i__58083 = G__58784;
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
var G__58121_58785 = key;
var G__58121_58786__$1 = (((G__58121_58785 instanceof cljs.core.Keyword))?G__58121_58785.fqn:null);
switch (G__58121_58786__$1) {
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
var ks_58788 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_58788,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_58788,"aria-");
}
})())){
el.setAttribute(ks_58788,value);
} else {
(el[ks_58788] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__58160){
var map__58161 = p__58160;
var map__58161__$1 = cljs.core.__destructure_map(map__58161);
var props = map__58161__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58161__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__58162 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58162,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58162,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58162,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__58167 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__58167,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__58167;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__58169 = arguments.length;
switch (G__58169) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__58181){
var vec__58185 = p__58181;
var seq__58186 = cljs.core.seq(vec__58185);
var first__58187 = cljs.core.first(seq__58186);
var seq__58186__$1 = cljs.core.next(seq__58186);
var nn = first__58187;
var first__58187__$1 = cljs.core.first(seq__58186__$1);
var seq__58186__$2 = cljs.core.next(seq__58186__$1);
var np = first__58187__$1;
var nc = seq__58186__$2;
var node = vec__58185;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58194 = nn;
var G__58195 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__58194,G__58195) : create_fn.call(null,G__58194,G__58195));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58200 = nn;
var G__58201 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__58200,G__58201) : create_fn.call(null,G__58200,G__58201));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__58211 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58211,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58211,(1),null);
var seq__58215_58790 = cljs.core.seq(node_children);
var chunk__58216_58791 = null;
var count__58217_58792 = (0);
var i__58218_58793 = (0);
while(true){
if((i__58218_58793 < count__58217_58792)){
var child_struct_58794 = chunk__58216_58791.cljs$core$IIndexed$_nth$arity$2(null,i__58218_58793);
var children_58795 = shadow.dom.dom_node(child_struct_58794);
if(cljs.core.seq_QMARK_(children_58795)){
var seq__58243_58796 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58795));
var chunk__58245_58797 = null;
var count__58246_58798 = (0);
var i__58247_58799 = (0);
while(true){
if((i__58247_58799 < count__58246_58798)){
var child_58800 = chunk__58245_58797.cljs$core$IIndexed$_nth$arity$2(null,i__58247_58799);
if(cljs.core.truth_(child_58800)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58800);


var G__58802 = seq__58243_58796;
var G__58803 = chunk__58245_58797;
var G__58804 = count__58246_58798;
var G__58805 = (i__58247_58799 + (1));
seq__58243_58796 = G__58802;
chunk__58245_58797 = G__58803;
count__58246_58798 = G__58804;
i__58247_58799 = G__58805;
continue;
} else {
var G__58806 = seq__58243_58796;
var G__58807 = chunk__58245_58797;
var G__58808 = count__58246_58798;
var G__58809 = (i__58247_58799 + (1));
seq__58243_58796 = G__58806;
chunk__58245_58797 = G__58807;
count__58246_58798 = G__58808;
i__58247_58799 = G__58809;
continue;
}
} else {
var temp__5753__auto___58810 = cljs.core.seq(seq__58243_58796);
if(temp__5753__auto___58810){
var seq__58243_58811__$1 = temp__5753__auto___58810;
if(cljs.core.chunked_seq_QMARK_(seq__58243_58811__$1)){
var c__4679__auto___58812 = cljs.core.chunk_first(seq__58243_58811__$1);
var G__58813 = cljs.core.chunk_rest(seq__58243_58811__$1);
var G__58814 = c__4679__auto___58812;
var G__58815 = cljs.core.count(c__4679__auto___58812);
var G__58816 = (0);
seq__58243_58796 = G__58813;
chunk__58245_58797 = G__58814;
count__58246_58798 = G__58815;
i__58247_58799 = G__58816;
continue;
} else {
var child_58817 = cljs.core.first(seq__58243_58811__$1);
if(cljs.core.truth_(child_58817)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58817);


var G__58818 = cljs.core.next(seq__58243_58811__$1);
var G__58819 = null;
var G__58820 = (0);
var G__58821 = (0);
seq__58243_58796 = G__58818;
chunk__58245_58797 = G__58819;
count__58246_58798 = G__58820;
i__58247_58799 = G__58821;
continue;
} else {
var G__58822 = cljs.core.next(seq__58243_58811__$1);
var G__58823 = null;
var G__58824 = (0);
var G__58825 = (0);
seq__58243_58796 = G__58822;
chunk__58245_58797 = G__58823;
count__58246_58798 = G__58824;
i__58247_58799 = G__58825;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58795);
}


var G__58826 = seq__58215_58790;
var G__58827 = chunk__58216_58791;
var G__58828 = count__58217_58792;
var G__58829 = (i__58218_58793 + (1));
seq__58215_58790 = G__58826;
chunk__58216_58791 = G__58827;
count__58217_58792 = G__58828;
i__58218_58793 = G__58829;
continue;
} else {
var temp__5753__auto___58830 = cljs.core.seq(seq__58215_58790);
if(temp__5753__auto___58830){
var seq__58215_58831__$1 = temp__5753__auto___58830;
if(cljs.core.chunked_seq_QMARK_(seq__58215_58831__$1)){
var c__4679__auto___58832 = cljs.core.chunk_first(seq__58215_58831__$1);
var G__58833 = cljs.core.chunk_rest(seq__58215_58831__$1);
var G__58834 = c__4679__auto___58832;
var G__58835 = cljs.core.count(c__4679__auto___58832);
var G__58836 = (0);
seq__58215_58790 = G__58833;
chunk__58216_58791 = G__58834;
count__58217_58792 = G__58835;
i__58218_58793 = G__58836;
continue;
} else {
var child_struct_58837 = cljs.core.first(seq__58215_58831__$1);
var children_58838 = shadow.dom.dom_node(child_struct_58837);
if(cljs.core.seq_QMARK_(children_58838)){
var seq__58251_58839 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58838));
var chunk__58253_58840 = null;
var count__58254_58841 = (0);
var i__58255_58842 = (0);
while(true){
if((i__58255_58842 < count__58254_58841)){
var child_58843 = chunk__58253_58840.cljs$core$IIndexed$_nth$arity$2(null,i__58255_58842);
if(cljs.core.truth_(child_58843)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58843);


var G__58844 = seq__58251_58839;
var G__58845 = chunk__58253_58840;
var G__58846 = count__58254_58841;
var G__58847 = (i__58255_58842 + (1));
seq__58251_58839 = G__58844;
chunk__58253_58840 = G__58845;
count__58254_58841 = G__58846;
i__58255_58842 = G__58847;
continue;
} else {
var G__58848 = seq__58251_58839;
var G__58849 = chunk__58253_58840;
var G__58850 = count__58254_58841;
var G__58851 = (i__58255_58842 + (1));
seq__58251_58839 = G__58848;
chunk__58253_58840 = G__58849;
count__58254_58841 = G__58850;
i__58255_58842 = G__58851;
continue;
}
} else {
var temp__5753__auto___58852__$1 = cljs.core.seq(seq__58251_58839);
if(temp__5753__auto___58852__$1){
var seq__58251_58853__$1 = temp__5753__auto___58852__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58251_58853__$1)){
var c__4679__auto___58854 = cljs.core.chunk_first(seq__58251_58853__$1);
var G__58855 = cljs.core.chunk_rest(seq__58251_58853__$1);
var G__58856 = c__4679__auto___58854;
var G__58857 = cljs.core.count(c__4679__auto___58854);
var G__58858 = (0);
seq__58251_58839 = G__58855;
chunk__58253_58840 = G__58856;
count__58254_58841 = G__58857;
i__58255_58842 = G__58858;
continue;
} else {
var child_58859 = cljs.core.first(seq__58251_58853__$1);
if(cljs.core.truth_(child_58859)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58859);


var G__58860 = cljs.core.next(seq__58251_58853__$1);
var G__58861 = null;
var G__58862 = (0);
var G__58863 = (0);
seq__58251_58839 = G__58860;
chunk__58253_58840 = G__58861;
count__58254_58841 = G__58862;
i__58255_58842 = G__58863;
continue;
} else {
var G__58864 = cljs.core.next(seq__58251_58853__$1);
var G__58865 = null;
var G__58866 = (0);
var G__58867 = (0);
seq__58251_58839 = G__58864;
chunk__58253_58840 = G__58865;
count__58254_58841 = G__58866;
i__58255_58842 = G__58867;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58838);
}


var G__58868 = cljs.core.next(seq__58215_58831__$1);
var G__58869 = null;
var G__58870 = (0);
var G__58871 = (0);
seq__58215_58790 = G__58868;
chunk__58216_58791 = G__58869;
count__58217_58792 = G__58870;
i__58218_58793 = G__58871;
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
var seq__58276 = cljs.core.seq(node);
var chunk__58277 = null;
var count__58278 = (0);
var i__58279 = (0);
while(true){
if((i__58279 < count__58278)){
var n = chunk__58277.cljs$core$IIndexed$_nth$arity$2(null,i__58279);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58872 = seq__58276;
var G__58873 = chunk__58277;
var G__58874 = count__58278;
var G__58875 = (i__58279 + (1));
seq__58276 = G__58872;
chunk__58277 = G__58873;
count__58278 = G__58874;
i__58279 = G__58875;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58276);
if(temp__5753__auto__){
var seq__58276__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58276__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__58276__$1);
var G__58876 = cljs.core.chunk_rest(seq__58276__$1);
var G__58877 = c__4679__auto__;
var G__58878 = cljs.core.count(c__4679__auto__);
var G__58879 = (0);
seq__58276 = G__58876;
chunk__58277 = G__58877;
count__58278 = G__58878;
i__58279 = G__58879;
continue;
} else {
var n = cljs.core.first(seq__58276__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58880 = cljs.core.next(seq__58276__$1);
var G__58881 = null;
var G__58882 = (0);
var G__58883 = (0);
seq__58276 = G__58880;
chunk__58277 = G__58881;
count__58278 = G__58882;
i__58279 = G__58883;
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
var G__58288 = arguments.length;
switch (G__58288) {
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
var G__58315 = arguments.length;
switch (G__58315) {
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
var G__58331 = arguments.length;
switch (G__58331) {
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
var len__4864__auto___58901 = arguments.length;
var i__4865__auto___58902 = (0);
while(true){
if((i__4865__auto___58902 < len__4864__auto___58901)){
args__4870__auto__.push((arguments[i__4865__auto___58902]));

var G__58903 = (i__4865__auto___58902 + (1));
i__4865__auto___58902 = G__58903;
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
var seq__58345_58904 = cljs.core.seq(nodes);
var chunk__58346_58905 = null;
var count__58347_58906 = (0);
var i__58348_58907 = (0);
while(true){
if((i__58348_58907 < count__58347_58906)){
var node_58908 = chunk__58346_58905.cljs$core$IIndexed$_nth$arity$2(null,i__58348_58907);
fragment.appendChild(shadow.dom._to_dom(node_58908));


var G__58909 = seq__58345_58904;
var G__58910 = chunk__58346_58905;
var G__58911 = count__58347_58906;
var G__58912 = (i__58348_58907 + (1));
seq__58345_58904 = G__58909;
chunk__58346_58905 = G__58910;
count__58347_58906 = G__58911;
i__58348_58907 = G__58912;
continue;
} else {
var temp__5753__auto___58913 = cljs.core.seq(seq__58345_58904);
if(temp__5753__auto___58913){
var seq__58345_58914__$1 = temp__5753__auto___58913;
if(cljs.core.chunked_seq_QMARK_(seq__58345_58914__$1)){
var c__4679__auto___58915 = cljs.core.chunk_first(seq__58345_58914__$1);
var G__58916 = cljs.core.chunk_rest(seq__58345_58914__$1);
var G__58917 = c__4679__auto___58915;
var G__58918 = cljs.core.count(c__4679__auto___58915);
var G__58919 = (0);
seq__58345_58904 = G__58916;
chunk__58346_58905 = G__58917;
count__58347_58906 = G__58918;
i__58348_58907 = G__58919;
continue;
} else {
var node_58920 = cljs.core.first(seq__58345_58914__$1);
fragment.appendChild(shadow.dom._to_dom(node_58920));


var G__58921 = cljs.core.next(seq__58345_58914__$1);
var G__58922 = null;
var G__58923 = (0);
var G__58924 = (0);
seq__58345_58904 = G__58921;
chunk__58346_58905 = G__58922;
count__58347_58906 = G__58923;
i__58348_58907 = G__58924;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq58340){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58340));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__58373_58926 = cljs.core.seq(scripts);
var chunk__58374_58927 = null;
var count__58375_58928 = (0);
var i__58376_58929 = (0);
while(true){
if((i__58376_58929 < count__58375_58928)){
var vec__58390_58930 = chunk__58374_58927.cljs$core$IIndexed$_nth$arity$2(null,i__58376_58929);
var script_tag_58931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58390_58930,(0),null);
var script_body_58932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58390_58930,(1),null);
eval(script_body_58932);


var G__58933 = seq__58373_58926;
var G__58934 = chunk__58374_58927;
var G__58935 = count__58375_58928;
var G__58936 = (i__58376_58929 + (1));
seq__58373_58926 = G__58933;
chunk__58374_58927 = G__58934;
count__58375_58928 = G__58935;
i__58376_58929 = G__58936;
continue;
} else {
var temp__5753__auto___58937 = cljs.core.seq(seq__58373_58926);
if(temp__5753__auto___58937){
var seq__58373_58938__$1 = temp__5753__auto___58937;
if(cljs.core.chunked_seq_QMARK_(seq__58373_58938__$1)){
var c__4679__auto___58939 = cljs.core.chunk_first(seq__58373_58938__$1);
var G__58940 = cljs.core.chunk_rest(seq__58373_58938__$1);
var G__58941 = c__4679__auto___58939;
var G__58942 = cljs.core.count(c__4679__auto___58939);
var G__58943 = (0);
seq__58373_58926 = G__58940;
chunk__58374_58927 = G__58941;
count__58375_58928 = G__58942;
i__58376_58929 = G__58943;
continue;
} else {
var vec__58395_58944 = cljs.core.first(seq__58373_58938__$1);
var script_tag_58945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58395_58944,(0),null);
var script_body_58946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58395_58944,(1),null);
eval(script_body_58946);


var G__58948 = cljs.core.next(seq__58373_58938__$1);
var G__58949 = null;
var G__58950 = (0);
var G__58951 = (0);
seq__58373_58926 = G__58948;
chunk__58374_58927 = G__58949;
count__58375_58928 = G__58950;
i__58376_58929 = G__58951;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__58401){
var vec__58402 = p__58401;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58402,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58402,(1),null);
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
var G__58408 = arguments.length;
switch (G__58408) {
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
var seq__58426 = cljs.core.seq(style_keys);
var chunk__58427 = null;
var count__58428 = (0);
var i__58429 = (0);
while(true){
if((i__58429 < count__58428)){
var it = chunk__58427.cljs$core$IIndexed$_nth$arity$2(null,i__58429);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58956 = seq__58426;
var G__58957 = chunk__58427;
var G__58958 = count__58428;
var G__58959 = (i__58429 + (1));
seq__58426 = G__58956;
chunk__58427 = G__58957;
count__58428 = G__58958;
i__58429 = G__58959;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58426);
if(temp__5753__auto__){
var seq__58426__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58426__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__58426__$1);
var G__58960 = cljs.core.chunk_rest(seq__58426__$1);
var G__58961 = c__4679__auto__;
var G__58962 = cljs.core.count(c__4679__auto__);
var G__58963 = (0);
seq__58426 = G__58960;
chunk__58427 = G__58961;
count__58428 = G__58962;
i__58429 = G__58963;
continue;
} else {
var it = cljs.core.first(seq__58426__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58965 = cljs.core.next(seq__58426__$1);
var G__58966 = null;
var G__58967 = (0);
var G__58968 = (0);
seq__58426 = G__58965;
chunk__58427 = G__58966;
count__58428 = G__58967;
i__58429 = G__58968;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k58435,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__58444 = k58435;
var G__58444__$1 = (((G__58444 instanceof cljs.core.Keyword))?G__58444.fqn:null);
switch (G__58444__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58435,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__58445){
var vec__58446 = p__58445;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58446,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58446,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58434){
var self__ = this;
var G__58434__$1 = this;
return (new cljs.core.RecordIter((0),G__58434__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58436,other58437){
var self__ = this;
var this58436__$1 = this;
return (((!((other58437 == null)))) && ((((this58436__$1.constructor === other58437.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58436__$1.x,other58437.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58436__$1.y,other58437.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58436__$1.__extmap,other58437.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k58435){
var self__ = this;
var this__4509__auto____$1 = this;
var G__58459 = k58435;
var G__58459__$1 = (((G__58459 instanceof cljs.core.Keyword))?G__58459.fqn:null);
switch (G__58459__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k58435);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__58434){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__58463 = cljs.core.keyword_identical_QMARK_;
var expr__58464 = k__4511__auto__;
if(cljs.core.truth_((pred__58463.cljs$core$IFn$_invoke$arity$2 ? pred__58463.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__58464) : pred__58463.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__58464)))){
return (new shadow.dom.Coordinate(G__58434,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__58463.cljs$core$IFn$_invoke$arity$2 ? pred__58463.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__58464) : pred__58463.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__58464)))){
return (new shadow.dom.Coordinate(self__.x,G__58434,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__58434),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__58434){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__58434,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__58439){
var extmap__4542__auto__ = (function (){var G__58469 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58439,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__58439)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58469);
} else {
return G__58469;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__58439),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__58439),null,cljs.core.not_empty(extmap__4542__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k58477,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__58506 = k58477;
var G__58506__$1 = (((G__58506 instanceof cljs.core.Keyword))?G__58506.fqn:null);
switch (G__58506__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58477,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__58508){
var vec__58510 = p__58508;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58510,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58510,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58476){
var self__ = this;
var G__58476__$1 = this;
return (new cljs.core.RecordIter((0),G__58476__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58478,other58479){
var self__ = this;
var this58478__$1 = this;
return (((!((other58479 == null)))) && ((((this58478__$1.constructor === other58479.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58478__$1.w,other58479.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58478__$1.h,other58479.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58478__$1.__extmap,other58479.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k58477){
var self__ = this;
var this__4509__auto____$1 = this;
var G__58522 = k58477;
var G__58522__$1 = (((G__58522 instanceof cljs.core.Keyword))?G__58522.fqn:null);
switch (G__58522__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k58477);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__58476){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__58523 = cljs.core.keyword_identical_QMARK_;
var expr__58524 = k__4511__auto__;
if(cljs.core.truth_((pred__58523.cljs$core$IFn$_invoke$arity$2 ? pred__58523.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__58524) : pred__58523.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__58524)))){
return (new shadow.dom.Size(G__58476,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__58523.cljs$core$IFn$_invoke$arity$2 ? pred__58523.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__58524) : pred__58523.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__58524)))){
return (new shadow.dom.Size(self__.w,G__58476,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__58476),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__58476){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__58476,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__58486){
var extmap__4542__auto__ = (function (){var G__58537 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58486,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__58486)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58537);
} else {
return G__58537;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__58486),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__58486),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var G__59035 = (i + (1));
var G__59036 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__59035;
ret = G__59036;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58556){
var vec__58557 = p__58556;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58557,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58557,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__58561 = arguments.length;
switch (G__58561) {
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
var G__59038 = ps;
var G__59039 = (i + (1));
el__$1 = G__59038;
i = G__59039;
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
var vec__58562 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58562,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58562,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58562,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__58565_59040 = cljs.core.seq(props);
var chunk__58566_59041 = null;
var count__58567_59042 = (0);
var i__58568_59043 = (0);
while(true){
if((i__58568_59043 < count__58567_59042)){
var vec__58579_59044 = chunk__58566_59041.cljs$core$IIndexed$_nth$arity$2(null,i__58568_59043);
var k_59045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58579_59044,(0),null);
var v_59046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58579_59044,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_59045);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_59045),v_59046);


var G__59047 = seq__58565_59040;
var G__59048 = chunk__58566_59041;
var G__59049 = count__58567_59042;
var G__59050 = (i__58568_59043 + (1));
seq__58565_59040 = G__59047;
chunk__58566_59041 = G__59048;
count__58567_59042 = G__59049;
i__58568_59043 = G__59050;
continue;
} else {
var temp__5753__auto___59051 = cljs.core.seq(seq__58565_59040);
if(temp__5753__auto___59051){
var seq__58565_59052__$1 = temp__5753__auto___59051;
if(cljs.core.chunked_seq_QMARK_(seq__58565_59052__$1)){
var c__4679__auto___59053 = cljs.core.chunk_first(seq__58565_59052__$1);
var G__59054 = cljs.core.chunk_rest(seq__58565_59052__$1);
var G__59055 = c__4679__auto___59053;
var G__59056 = cljs.core.count(c__4679__auto___59053);
var G__59057 = (0);
seq__58565_59040 = G__59054;
chunk__58566_59041 = G__59055;
count__58567_59042 = G__59056;
i__58568_59043 = G__59057;
continue;
} else {
var vec__58589_59058 = cljs.core.first(seq__58565_59052__$1);
var k_59059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58589_59058,(0),null);
var v_59060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58589_59058,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_59059);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_59059),v_59060);


var G__59065 = cljs.core.next(seq__58565_59052__$1);
var G__59066 = null;
var G__59067 = (0);
var G__59068 = (0);
seq__58565_59040 = G__59065;
chunk__58566_59041 = G__59066;
count__58567_59042 = G__59067;
i__58568_59043 = G__59068;
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
var vec__58601 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58601,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58601,(1),null);
var seq__58604_59071 = cljs.core.seq(node_children);
var chunk__58606_59072 = null;
var count__58607_59073 = (0);
var i__58608_59074 = (0);
while(true){
if((i__58608_59074 < count__58607_59073)){
var child_struct_59075 = chunk__58606_59072.cljs$core$IIndexed$_nth$arity$2(null,i__58608_59074);
if((!((child_struct_59075 == null)))){
if(typeof child_struct_59075 === 'string'){
var text_59076 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_59076),child_struct_59075].join(''));
} else {
var children_59077 = shadow.dom.svg_node(child_struct_59075);
if(cljs.core.seq_QMARK_(children_59077)){
var seq__58656_59078 = cljs.core.seq(children_59077);
var chunk__58658_59079 = null;
var count__58659_59080 = (0);
var i__58660_59081 = (0);
while(true){
if((i__58660_59081 < count__58659_59080)){
var child_59082 = chunk__58658_59079.cljs$core$IIndexed$_nth$arity$2(null,i__58660_59081);
if(cljs.core.truth_(child_59082)){
node.appendChild(child_59082);


var G__59083 = seq__58656_59078;
var G__59084 = chunk__58658_59079;
var G__59085 = count__58659_59080;
var G__59086 = (i__58660_59081 + (1));
seq__58656_59078 = G__59083;
chunk__58658_59079 = G__59084;
count__58659_59080 = G__59085;
i__58660_59081 = G__59086;
continue;
} else {
var G__59087 = seq__58656_59078;
var G__59088 = chunk__58658_59079;
var G__59089 = count__58659_59080;
var G__59090 = (i__58660_59081 + (1));
seq__58656_59078 = G__59087;
chunk__58658_59079 = G__59088;
count__58659_59080 = G__59089;
i__58660_59081 = G__59090;
continue;
}
} else {
var temp__5753__auto___59091 = cljs.core.seq(seq__58656_59078);
if(temp__5753__auto___59091){
var seq__58656_59092__$1 = temp__5753__auto___59091;
if(cljs.core.chunked_seq_QMARK_(seq__58656_59092__$1)){
var c__4679__auto___59093 = cljs.core.chunk_first(seq__58656_59092__$1);
var G__59094 = cljs.core.chunk_rest(seq__58656_59092__$1);
var G__59095 = c__4679__auto___59093;
var G__59096 = cljs.core.count(c__4679__auto___59093);
var G__59097 = (0);
seq__58656_59078 = G__59094;
chunk__58658_59079 = G__59095;
count__58659_59080 = G__59096;
i__58660_59081 = G__59097;
continue;
} else {
var child_59098 = cljs.core.first(seq__58656_59092__$1);
if(cljs.core.truth_(child_59098)){
node.appendChild(child_59098);


var G__59099 = cljs.core.next(seq__58656_59092__$1);
var G__59100 = null;
var G__59101 = (0);
var G__59102 = (0);
seq__58656_59078 = G__59099;
chunk__58658_59079 = G__59100;
count__58659_59080 = G__59101;
i__58660_59081 = G__59102;
continue;
} else {
var G__59103 = cljs.core.next(seq__58656_59092__$1);
var G__59104 = null;
var G__59105 = (0);
var G__59106 = (0);
seq__58656_59078 = G__59103;
chunk__58658_59079 = G__59104;
count__58659_59080 = G__59105;
i__58660_59081 = G__59106;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_59077);
}
}


var G__59107 = seq__58604_59071;
var G__59108 = chunk__58606_59072;
var G__59109 = count__58607_59073;
var G__59110 = (i__58608_59074 + (1));
seq__58604_59071 = G__59107;
chunk__58606_59072 = G__59108;
count__58607_59073 = G__59109;
i__58608_59074 = G__59110;
continue;
} else {
var G__59111 = seq__58604_59071;
var G__59112 = chunk__58606_59072;
var G__59113 = count__58607_59073;
var G__59114 = (i__58608_59074 + (1));
seq__58604_59071 = G__59111;
chunk__58606_59072 = G__59112;
count__58607_59073 = G__59113;
i__58608_59074 = G__59114;
continue;
}
} else {
var temp__5753__auto___59115 = cljs.core.seq(seq__58604_59071);
if(temp__5753__auto___59115){
var seq__58604_59116__$1 = temp__5753__auto___59115;
if(cljs.core.chunked_seq_QMARK_(seq__58604_59116__$1)){
var c__4679__auto___59117 = cljs.core.chunk_first(seq__58604_59116__$1);
var G__59118 = cljs.core.chunk_rest(seq__58604_59116__$1);
var G__59119 = c__4679__auto___59117;
var G__59120 = cljs.core.count(c__4679__auto___59117);
var G__59121 = (0);
seq__58604_59071 = G__59118;
chunk__58606_59072 = G__59119;
count__58607_59073 = G__59120;
i__58608_59074 = G__59121;
continue;
} else {
var child_struct_59122 = cljs.core.first(seq__58604_59116__$1);
if((!((child_struct_59122 == null)))){
if(typeof child_struct_59122 === 'string'){
var text_59123 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_59123),child_struct_59122].join(''));
} else {
var children_59124 = shadow.dom.svg_node(child_struct_59122);
if(cljs.core.seq_QMARK_(children_59124)){
var seq__58670_59125 = cljs.core.seq(children_59124);
var chunk__58672_59126 = null;
var count__58673_59127 = (0);
var i__58674_59128 = (0);
while(true){
if((i__58674_59128 < count__58673_59127)){
var child_59129 = chunk__58672_59126.cljs$core$IIndexed$_nth$arity$2(null,i__58674_59128);
if(cljs.core.truth_(child_59129)){
node.appendChild(child_59129);


var G__59130 = seq__58670_59125;
var G__59131 = chunk__58672_59126;
var G__59132 = count__58673_59127;
var G__59133 = (i__58674_59128 + (1));
seq__58670_59125 = G__59130;
chunk__58672_59126 = G__59131;
count__58673_59127 = G__59132;
i__58674_59128 = G__59133;
continue;
} else {
var G__59134 = seq__58670_59125;
var G__59135 = chunk__58672_59126;
var G__59136 = count__58673_59127;
var G__59137 = (i__58674_59128 + (1));
seq__58670_59125 = G__59134;
chunk__58672_59126 = G__59135;
count__58673_59127 = G__59136;
i__58674_59128 = G__59137;
continue;
}
} else {
var temp__5753__auto___59138__$1 = cljs.core.seq(seq__58670_59125);
if(temp__5753__auto___59138__$1){
var seq__58670_59139__$1 = temp__5753__auto___59138__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58670_59139__$1)){
var c__4679__auto___59140 = cljs.core.chunk_first(seq__58670_59139__$1);
var G__59141 = cljs.core.chunk_rest(seq__58670_59139__$1);
var G__59142 = c__4679__auto___59140;
var G__59143 = cljs.core.count(c__4679__auto___59140);
var G__59144 = (0);
seq__58670_59125 = G__59141;
chunk__58672_59126 = G__59142;
count__58673_59127 = G__59143;
i__58674_59128 = G__59144;
continue;
} else {
var child_59145 = cljs.core.first(seq__58670_59139__$1);
if(cljs.core.truth_(child_59145)){
node.appendChild(child_59145);


var G__59146 = cljs.core.next(seq__58670_59139__$1);
var G__59147 = null;
var G__59148 = (0);
var G__59149 = (0);
seq__58670_59125 = G__59146;
chunk__58672_59126 = G__59147;
count__58673_59127 = G__59148;
i__58674_59128 = G__59149;
continue;
} else {
var G__59150 = cljs.core.next(seq__58670_59139__$1);
var G__59151 = null;
var G__59152 = (0);
var G__59153 = (0);
seq__58670_59125 = G__59150;
chunk__58672_59126 = G__59151;
count__58673_59127 = G__59152;
i__58674_59128 = G__59153;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_59124);
}
}


var G__59154 = cljs.core.next(seq__58604_59116__$1);
var G__59155 = null;
var G__59156 = (0);
var G__59157 = (0);
seq__58604_59071 = G__59154;
chunk__58606_59072 = G__59155;
count__58607_59073 = G__59156;
i__58608_59074 = G__59157;
continue;
} else {
var G__59158 = cljs.core.next(seq__58604_59116__$1);
var G__59159 = null;
var G__59160 = (0);
var G__59161 = (0);
seq__58604_59071 = G__59158;
chunk__58606_59072 = G__59159;
count__58607_59073 = G__59160;
i__58608_59074 = G__59161;
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
var len__4864__auto___59162 = arguments.length;
var i__4865__auto___59163 = (0);
while(true){
if((i__4865__auto___59163 < len__4864__auto___59162)){
args__4870__auto__.push((arguments[i__4865__auto___59163]));

var G__59164 = (i__4865__auto___59163 + (1));
i__4865__auto___59163 = G__59164;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq58676){
var G__58677 = cljs.core.first(seq58676);
var seq58676__$1 = cljs.core.next(seq58676);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58677,seq58676__$1);
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
var G__58713 = arguments.length;
switch (G__58713) {
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
var c__54840__auto___59169 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54841__auto__ = (function (){var switch__54589__auto__ = (function (state_58724){
var state_val_58725 = (state_58724[(1)]);
if((state_val_58725 === (1))){
var state_58724__$1 = state_58724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58724__$1,(2),once_or_cleanup);
} else {
if((state_val_58725 === (2))){
var inst_58721 = (state_58724[(2)]);
var inst_58722 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_58724__$1 = (function (){var statearr_58732 = state_58724;
(statearr_58732[(7)] = inst_58721);

return statearr_58732;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58724__$1,inst_58722);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__54593__auto__ = null;
var shadow$dom$state_machine__54593__auto____0 = (function (){
var statearr_58733 = [null,null,null,null,null,null,null,null];
(statearr_58733[(0)] = shadow$dom$state_machine__54593__auto__);

(statearr_58733[(1)] = (1));

return statearr_58733;
});
var shadow$dom$state_machine__54593__auto____1 = (function (state_58724){
while(true){
var ret_value__54594__auto__ = (function (){try{while(true){
var result__54595__auto__ = switch__54589__auto__(state_58724);
if(cljs.core.keyword_identical_QMARK_(result__54595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54595__auto__;
}
break;
}
}catch (e58734){var ex__54596__auto__ = e58734;
var statearr_58735_59170 = state_58724;
(statearr_58735_59170[(2)] = ex__54596__auto__);


if(cljs.core.seq((state_58724[(4)]))){
var statearr_58736_59171 = state_58724;
(statearr_58736_59171[(1)] = cljs.core.first((state_58724[(4)])));

} else {
throw ex__54596__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59172 = state_58724;
state_58724 = G__59172;
continue;
} else {
return ret_value__54594__auto__;
}
break;
}
});
shadow$dom$state_machine__54593__auto__ = function(state_58724){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__54593__auto____0.call(this);
case 1:
return shadow$dom$state_machine__54593__auto____1.call(this,state_58724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__54593__auto____0;
shadow$dom$state_machine__54593__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__54593__auto____1;
return shadow$dom$state_machine__54593__auto__;
})()
})();
var state__54842__auto__ = (function (){var statearr_58737 = f__54841__auto__();
(statearr_58737[(6)] = c__54840__auto___59169);

return statearr_58737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54842__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
