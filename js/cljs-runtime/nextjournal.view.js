goog.provide('nextjournal.view');
nextjournal.view.memoized_frame_fn = (function nextjournal$view$memoized_frame_fn(component,memo_key,ctx_function){
var val__83515__auto__ = (function (){var obj88645 = component;
if((!((obj88645 == null)))){
return (obj88645[memo_key]);
} else {
return undefined;
}
})();
if((void 0 === val__83515__auto__)){
var f = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ctx_function,(function (){var obj88646 = component;
if((!((obj88646 == null)))){
return (obj88646["context"]);
} else {
return undefined;
}
})());
var obj88647_88704 = component;
var obj88648_88705 = (((!((obj88647_88704 == null))))?obj88647_88704:({}));
(obj88648_88705[memo_key] = f);


return f;
} else {
return val__83515__auto__;
}
});
/**
 * Reads a key from `component`
 */
nextjournal.view.get_key = (function nextjournal$view$get_key(component,k,not_found){
var G__88652 = k;
var G__88652__$1 = (((G__88652 instanceof cljs.core.Keyword))?G__88652.fqn:null);
switch (G__88652__$1) {
case "nextjournal.view/props":
return reagent.core.props(component);

break;
case "nextjournal.view/state":
return reagent.core.state_atom(component);

break;
case "nextjournal.view/argv":
return reagent.core.argv(component);

break;
case "re-frame.context/frame":
var obj88654 = component;
if((!((obj88654 == null)))){
return (obj88654["context"]);
} else {
return undefined;
}

break;
case "re-frame.context/subscribe":
return nextjournal.view.memoized_frame_fn(component,"rf_subscribe",re_frame.frame.subscribe);

break;
case "re-frame.context/dispatch":
return nextjournal.view.memoized_frame_fn(component,"rf_dispatch",re_frame.frame.dispatch);

break;
case "re-frame.context/dispatch-sync":
return nextjournal.view.memoized_frame_fn(component,"rf_dispatch_sync",re_frame.frame.dispatch_sync);

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(reagent.core.props(component),k,not_found);

}
});
nextjournal.view.wrap_render = (function nextjournal$view$wrap_render(f){
return (function (c){
var argv = reagent.impl.component.get_argv(c);
var props_QMARK_ = (!((reagent.core.props(c) == null)));
var n = cljs.core.count(argv);
var first_child = ((props_QMARK_)?(2):(1));
var extra_children = ((props_QMARK_)?(n - (2)):(n - (1)));
var G__88656 = extra_children;
switch (G__88656) {
case (0):
return f.call(c,c);

break;
case (1):
return f.call(c,c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,first_child));

break;
case (2):
return f.call(c,c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,first_child),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,((1) + first_child)));

break;
case (3):
return f.call(c,c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,first_child),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,((1) + first_child)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,((2) + first_child)));

break;
case (4):
return f.call(c,c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,first_child),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,((1) + first_child)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,((2) + first_child)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,((3) + first_child)));

break;
default:
return f.apply(c,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(argv).slice((1)));

}
});
});
nextjournal.view.constructor_fn = (function nextjournal$view$constructor_fn(p__88660){
var map__88661 = p__88660;
var map__88661__$1 = cljs.core.__destructure_map(map__88661);
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88661__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88661__$1,new cljs.core.Keyword("nextjournal.view","initial-state","nextjournal.view/initial-state",534929643));
return (function (this$,p__88662){
var map__88667 = p__88662;
var map__88667__$1 = (((((!((map__88667 == null))))?(((((map__88667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88667):map__88667);
var props = map__88667__$1;
var argv = (function (){var obj88669 = map__88667__$1;
if((!((obj88669 == null)))){
return (obj88669[goog.reflect.objectProperty("argv",obj88669)]);
} else {
return undefined;
}
})();
var x88671_88708 = this$;
(x88671_88708.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL);

(x88671_88708.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var o__$1 = this;
return nextjournal.view.get_key(o__$1,k,null);
}));

(x88671_88708.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var o__$1 = this;
return nextjournal.view.get_key(o__$1,k,not_found);
}));


var temp__5757__auto___88709 = (function (){var or__4253__auto__ = (function (){var G__88673 = argv;
var G__88673__$1 = (((G__88673 == null))?null:reagent.impl.component.extract_props(G__88673));
if((G__88673__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("nextjournal.view","initial-state","nextjournal.view/initial-state",534929643).cljs$core$IFn$_invoke$arity$1(G__88673__$1);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return initial_state;
}
})();
if((temp__5757__auto___88709 == null)){
} else {
var initial_state_88710__$1 = temp__5757__auto___88709;
var state_88711 = ((cljs.core.fn_QMARK_(initial_state_88710__$1))?(initial_state_88710__$1.cljs$core$IFn$_invoke$arity$1 ? initial_state_88710__$1.cljs$core$IFn$_invoke$arity$1(this$) : initial_state_88710__$1.call(null,this$)):initial_state_88710__$1);
var state_atom_88712 = (function (){var G__88674 = state_88711;
if((!((state_88711 instanceof reagent.ratom.RAtom)))){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(G__88674);
} else {
return G__88674;
}
})();
(this$.cljsState = state_atom_88712);
}

if(cljs.core.truth_(constructor$)){
(constructor$.cljs$core$IFn$_invoke$arity$2 ? constructor$.cljs$core$IFn$_invoke$arity$2(this$,props) : constructor$.call(null,this$,props));
} else {
}

return this$;
});
});
nextjournal.view.wrap_methods = (function nextjournal$view$wrap_methods(m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),nextjournal.view.constructor_fn(m));
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.view !== 'undefined') && (typeof nextjournal.view._STAR_notify_watches_QMARK__STAR_ !== 'undefined')){
} else {
nextjournal.view._STAR_notify_watches_QMARK__STAR_ = (function (){
if((typeof window !== 'undefined')){
var obj88679_88713 = window;
var obj88679_88714__$1 = (((!((obj88679_88713 == null))))?obj88679_88713:({}));
var inner_obj__83626__auto___88715 = (function (){var child88684 = (function (){var child88683 = obj88679_88714__$1.reagent;
if((!((child88683 == null)))){
return child88683;
} else {
var new_child__83575__auto__ = ({});
var obj88689_88716 = obj88679_88714__$1;
(obj88689_88716.reagent = new_child__83575__auto__);


return new_child__83575__auto__;
}
})().ratom;
if((!((child88684 == null)))){
return child88684;
} else {
var new_child__83575__auto__ = ({});
var obj88692_88717 = (function (){var child88683 = obj88679_88714__$1.reagent;
if((!((child88683 == null)))){
return child88683;
} else {
var new_child__83575__auto____$1 = ({});
var obj88695_88718 = obj88679_88714__$1;
(obj88695_88718.reagent = new_child__83575__auto____$1);


return new_child__83575__auto____$1;
}
})();
(obj88692_88717.ratom = new_child__83575__auto__);


return new_child__83575__auto__;
}
})();
var o__83620__auto___88719 = inner_obj__83626__auto___88715;
var o__83614__auto___88720 = (((!((o__83620__auto___88719 == null))))?o__83620__auto___88719:({}));
var obj88698_88721 = o__83614__auto___88720;
(obj88698_88721.notify_w = (function (notify_w){
return (function (this$,old,new$){
if(nextjournal.view._STAR_notify_watches_QMARK__STAR_ === true){
return (notify_w.cljs$core$IFn$_invoke$arity$3 ? notify_w.cljs$core$IFn$_invoke$arity$3(this$,old,new$) : notify_w.call(null,this$,old,new$));
} else {
return null;
}
});
})(o__83614__auto___88720.notify_w));


} else {
}

return true;
})()
;
}
/**
 * Swap a reactive atom, without causing dependent components to re-render.
 */
nextjournal.view.swap_silently_BANG_ = (function nextjournal$view$swap_silently_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88722 = arguments.length;
var i__4865__auto___88723 = (0);
while(true){
if((i__4865__auto___88723 < len__4864__auto___88722)){
args__4870__auto__.push((arguments[i__4865__auto___88723]));

var G__88725 = (i__4865__auto___88723 + (1));
i__4865__auto___88723 = G__88725;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return nextjournal.view.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(nextjournal.view.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_notify_watches_QMARK__STAR__orig_val__88700 = nextjournal.view._STAR_notify_watches_QMARK__STAR_;
var _STAR_notify_watches_QMARK__STAR__temp_val__88701 = false;
(nextjournal.view._STAR_notify_watches_QMARK__STAR_ = _STAR_notify_watches_QMARK__STAR__temp_val__88701);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_,args);
}finally {(nextjournal.view._STAR_notify_watches_QMARK__STAR_ = _STAR_notify_watches_QMARK__STAR__orig_val__88700);
}}));

(nextjournal.view.swap_silently_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nextjournal.view.swap_silently_BANG_.cljs$lang$applyTo = (function (seq88699){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88699));
}));

nextjournal.view.reset_silently_BANG_ = (function nextjournal$view$reset_silently_BANG_(ratom,value){
var _STAR_notify_watches_QMARK__STAR__orig_val__88702 = nextjournal.view._STAR_notify_watches_QMARK__STAR_;
var _STAR_notify_watches_QMARK__STAR__temp_val__88703 = false;
(nextjournal.view._STAR_notify_watches_QMARK__STAR_ = _STAR_notify_watches_QMARK__STAR__temp_val__88703);

try{return cljs.core.reset_BANG_(ratom,value);
}finally {(nextjournal.view._STAR_notify_watches_QMARK__STAR_ = _STAR_notify_watches_QMARK__STAR__orig_val__88702);
}});

//# sourceMappingURL=nextjournal.view.js.map
