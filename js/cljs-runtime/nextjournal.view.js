goog.provide('nextjournal.view');
nextjournal.view.memoized_frame_fn = (function nextjournal$view$memoized_frame_fn(component,memo_key,ctx_function){
var val__60701__auto__ = (function (){var obj66398 = component;
if((!((obj66398 == null)))){
return (obj66398[memo_key]);
} else {
return undefined;
}
})();
if((void 0 === val__60701__auto__)){
var f = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ctx_function,(function (){var obj66399 = component;
if((!((obj66399 == null)))){
return (obj66399["context"]);
} else {
return undefined;
}
})());
var obj66400_66457 = component;
var obj66401_66458 = (((!((obj66400_66457 == null))))?obj66400_66457:({}));
(obj66401_66458[memo_key] = f);


return f;
} else {
return val__60701__auto__;
}
});
/**
 * Reads a key from `component`
 */
nextjournal.view.get_key = (function nextjournal$view$get_key(component,k,not_found){
var G__66404 = k;
var G__66404__$1 = (((G__66404 instanceof cljs.core.Keyword))?G__66404.fqn:null);
switch (G__66404__$1) {
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
var obj66405 = component;
if((!((obj66405 == null)))){
return (obj66405["context"]);
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
var G__66409 = extra_children;
switch (G__66409) {
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
nextjournal.view.constructor_fn = (function nextjournal$view$constructor_fn(p__66410){
var map__66411 = p__66410;
var map__66411__$1 = cljs.core.__destructure_map(map__66411);
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66411__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66411__$1,new cljs.core.Keyword("nextjournal.view","initial-state","nextjournal.view/initial-state",534929643));
return (function (this$,p__66412){
var map__66413 = p__66412;
var map__66413__$1 = (((((!((map__66413 == null))))?(((((map__66413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66413):map__66413);
var props = map__66413__$1;
var argv = (function (){var obj66415 = map__66413__$1;
if((!((obj66415 == null)))){
return (obj66415[goog.reflect.objectProperty("argv",obj66415)]);
} else {
return undefined;
}
})();
var x66416_66465 = this$;
(x66416_66465.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL);

(x66416_66465.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var o__$1 = this;
return nextjournal.view.get_key(o__$1,k,null);
}));

(x66416_66465.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var o__$1 = this;
return nextjournal.view.get_key(o__$1,k,not_found);
}));


var temp__5757__auto___66466 = (function (){var or__4253__auto__ = (function (){var G__66418 = argv;
var G__66418__$1 = (((G__66418 == null))?null:reagent.impl.component.extract_props(G__66418));
if((G__66418__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("nextjournal.view","initial-state","nextjournal.view/initial-state",534929643).cljs$core$IFn$_invoke$arity$1(G__66418__$1);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return initial_state;
}
})();
if((temp__5757__auto___66466 == null)){
} else {
var initial_state_66467__$1 = temp__5757__auto___66466;
var state_66468 = ((cljs.core.fn_QMARK_(initial_state_66467__$1))?(initial_state_66467__$1.cljs$core$IFn$_invoke$arity$1 ? initial_state_66467__$1.cljs$core$IFn$_invoke$arity$1(this$) : initial_state_66467__$1.call(null,this$)):initial_state_66467__$1);
var state_atom_66469 = (function (){var G__66419 = state_66468;
if((!((state_66468 instanceof reagent.ratom.RAtom)))){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(G__66419);
} else {
return G__66419;
}
})();
(this$.cljsState = state_atom_66469);
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
var obj66420_66471 = window;
var obj66420_66472__$1 = (((!((obj66420_66471 == null))))?obj66420_66471:({}));
var inner_obj__60813__auto___66473 = (function (){var child66424 = (function (){var child66422 = obj66420_66472__$1.reagent;
if((!((child66422 == null)))){
return child66422;
} else {
var new_child__60762__auto__ = ({});
var obj66429_66475 = obj66420_66472__$1;
(obj66429_66475.reagent = new_child__60762__auto__);


return new_child__60762__auto__;
}
})().ratom;
if((!((child66424 == null)))){
return child66424;
} else {
var new_child__60762__auto__ = ({});
var obj66432_66477 = (function (){var child66422 = obj66420_66472__$1.reagent;
if((!((child66422 == null)))){
return child66422;
} else {
var new_child__60762__auto____$1 = ({});
var obj66436_66479 = obj66420_66472__$1;
(obj66436_66479.reagent = new_child__60762__auto____$1);


return new_child__60762__auto____$1;
}
})();
(obj66432_66477.ratom = new_child__60762__auto__);


return new_child__60762__auto__;
}
})();
var o__60807__auto___66480 = inner_obj__60813__auto___66473;
var o__60801__auto___66481 = (((!((o__60807__auto___66480 == null))))?o__60807__auto___66480:({}));
var obj66439_66482 = o__60801__auto___66481;
(obj66439_66482.notify_w = (function (notify_w){
return (function (this$,old,new$){
if(nextjournal.view._STAR_notify_watches_QMARK__STAR_ === true){
return (notify_w.cljs$core$IFn$_invoke$arity$3 ? notify_w.cljs$core$IFn$_invoke$arity$3(this$,old,new$) : notify_w.call(null,this$,old,new$));
} else {
return null;
}
});
})(o__60801__auto___66481.notify_w));


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
var len__4864__auto___66483 = arguments.length;
var i__4865__auto___66484 = (0);
while(true){
if((i__4865__auto___66484 < len__4864__auto___66483)){
args__4870__auto__.push((arguments[i__4865__auto___66484]));

var G__66485 = (i__4865__auto___66484 + (1));
i__4865__auto___66484 = G__66485;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return nextjournal.view.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(nextjournal.view.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_notify_watches_QMARK__STAR__orig_val__66445 = nextjournal.view._STAR_notify_watches_QMARK__STAR_;
var _STAR_notify_watches_QMARK__STAR__temp_val__66446 = false;
(nextjournal.view._STAR_notify_watches_QMARK__STAR_ = _STAR_notify_watches_QMARK__STAR__temp_val__66446);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_,args);
}finally {(nextjournal.view._STAR_notify_watches_QMARK__STAR_ = _STAR_notify_watches_QMARK__STAR__orig_val__66445);
}}));

(nextjournal.view.swap_silently_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nextjournal.view.swap_silently_BANG_.cljs$lang$applyTo = (function (seq66444){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66444));
}));

nextjournal.view.reset_silently_BANG_ = (function nextjournal$view$reset_silently_BANG_(ratom,value){
var _STAR_notify_watches_QMARK__STAR__orig_val__66448 = nextjournal.view._STAR_notify_watches_QMARK__STAR_;
var _STAR_notify_watches_QMARK__STAR__temp_val__66449 = false;
(nextjournal.view._STAR_notify_watches_QMARK__STAR_ = _STAR_notify_watches_QMARK__STAR__temp_val__66449);

try{return cljs.core.reset_BANG_(ratom,value);
}finally {(nextjournal.view._STAR_notify_watches_QMARK__STAR_ = _STAR_notify_watches_QMARK__STAR__orig_val__66448);
}});

//# sourceMappingURL=nextjournal.view.js.map
