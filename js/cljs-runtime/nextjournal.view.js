goog.provide('nextjournal.view');
nextjournal.view.memoized_frame_fn = (function nextjournal$view$memoized_frame_fn(component,memo_key,ctx_function){
var val__83900__auto__ = (function (){var obj89074 = component;
if((!((obj89074 == null)))){
return (obj89074[memo_key]);
} else {
return undefined;
}
})();
if((void 0 === val__83900__auto__)){
var f = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ctx_function,(function (){var obj89077 = component;
if((!((obj89077 == null)))){
return (obj89077["context"]);
} else {
return undefined;
}
})());
var obj89078_89146 = component;
var obj89079_89147 = (((!((obj89078_89146 == null))))?obj89078_89146:({}));
(obj89079_89147[memo_key] = f);


return f;
} else {
return val__83900__auto__;
}
});
/**
 * Reads a key from `component`
 */
nextjournal.view.get_key = (function nextjournal$view$get_key(component,k,not_found){
var G__89086 = k;
var G__89086__$1 = (((G__89086 instanceof cljs.core.Keyword))?G__89086.fqn:null);
switch (G__89086__$1) {
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
var obj89089 = component;
if((!((obj89089 == null)))){
return (obj89089["context"]);
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
var G__89094 = extra_children;
switch (G__89094) {
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
nextjournal.view.constructor_fn = (function nextjournal$view$constructor_fn(p__89096){
var map__89097 = p__89096;
var map__89097__$1 = cljs.core.__destructure_map(map__89097);
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89097__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89097__$1,new cljs.core.Keyword("nextjournal.view","initial-state","nextjournal.view/initial-state",534929643));
return (function (this$,p__89098){
var map__89099 = p__89098;
var map__89099__$1 = (((((!((map__89099 == null))))?(((((map__89099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89099):map__89099);
var props = map__89099__$1;
var argv = (function (){var obj89101 = map__89099__$1;
if((!((obj89101 == null)))){
return (obj89101[goog.reflect.objectProperty("argv",obj89101)]);
} else {
return undefined;
}
})();
var x89103_89150 = this$;
(x89103_89150.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL);

(x89103_89150.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var o__$1 = this;
return nextjournal.view.get_key(o__$1,k,null);
}));

(x89103_89150.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var o__$1 = this;
return nextjournal.view.get_key(o__$1,k,not_found);
}));


var temp__5757__auto___89151 = (function (){var or__4253__auto__ = (function (){var G__89105 = argv;
var G__89105__$1 = (((G__89105 == null))?null:reagent.impl.component.extract_props(G__89105));
if((G__89105__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("nextjournal.view","initial-state","nextjournal.view/initial-state",534929643).cljs$core$IFn$_invoke$arity$1(G__89105__$1);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return initial_state;
}
})();
if((temp__5757__auto___89151 == null)){
} else {
var initial_state_89152__$1 = temp__5757__auto___89151;
var state_89153 = ((cljs.core.fn_QMARK_(initial_state_89152__$1))?(initial_state_89152__$1.cljs$core$IFn$_invoke$arity$1 ? initial_state_89152__$1.cljs$core$IFn$_invoke$arity$1(this$) : initial_state_89152__$1.call(null,this$)):initial_state_89152__$1);
var state_atom_89154 = (function (){var G__89106 = state_89153;
if((!((state_89153 instanceof reagent.ratom.RAtom)))){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(G__89106);
} else {
return G__89106;
}
})();
(this$.cljsState = state_atom_89154);
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
var obj89108_89161 = window;
var obj89108_89162__$1 = (((!((obj89108_89161 == null))))?obj89108_89161:({}));
var inner_obj__84026__auto___89163 = (function (){var child89112 = (function (){var child89109 = obj89108_89162__$1.reagent;
if((!((child89109 == null)))){
return child89109;
} else {
var new_child__83972__auto__ = ({});
var obj89118_89164 = obj89108_89162__$1;
(obj89118_89164.reagent = new_child__83972__auto__);


return new_child__83972__auto__;
}
})().ratom;
if((!((child89112 == null)))){
return child89112;
} else {
var new_child__83972__auto__ = ({});
var obj89121_89169 = (function (){var child89109 = obj89108_89162__$1.reagent;
if((!((child89109 == null)))){
return child89109;
} else {
var new_child__83972__auto____$1 = ({});
var obj89128_89171 = obj89108_89162__$1;
(obj89128_89171.reagent = new_child__83972__auto____$1);


return new_child__83972__auto____$1;
}
})();
(obj89121_89169.ratom = new_child__83972__auto__);


return new_child__83972__auto__;
}
})();
var o__84018__auto___89173 = inner_obj__84026__auto___89163;
var o__84012__auto___89174 = (((!((o__84018__auto___89173 == null))))?o__84018__auto___89173:({}));
var obj89131_89175 = o__84012__auto___89174;
(obj89131_89175.notify_w = (function (notify_w){
return (function (this$,old,new$){
if(nextjournal.view._STAR_notify_watches_QMARK__STAR_ === true){
return (notify_w.cljs$core$IFn$_invoke$arity$3 ? notify_w.cljs$core$IFn$_invoke$arity$3(this$,old,new$) : notify_w.call(null,this$,old,new$));
} else {
return null;
}
});
})(o__84012__auto___89174.notify_w));


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
var len__4864__auto___89181 = arguments.length;
var i__4865__auto___89182 = (0);
while(true){
if((i__4865__auto___89182 < len__4864__auto___89181)){
args__4870__auto__.push((arguments[i__4865__auto___89182]));

var G__89183 = (i__4865__auto___89182 + (1));
i__4865__auto___89182 = G__89183;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return nextjournal.view.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(nextjournal.view.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_notify_watches_QMARK__STAR__orig_val__89134 = nextjournal.view._STAR_notify_watches_QMARK__STAR_;
var _STAR_notify_watches_QMARK__STAR__temp_val__89135 = false;
(nextjournal.view._STAR_notify_watches_QMARK__STAR_ = _STAR_notify_watches_QMARK__STAR__temp_val__89135);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_,args);
}finally {(nextjournal.view._STAR_notify_watches_QMARK__STAR_ = _STAR_notify_watches_QMARK__STAR__orig_val__89134);
}}));

(nextjournal.view.swap_silently_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nextjournal.view.swap_silently_BANG_.cljs$lang$applyTo = (function (seq89132){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq89132));
}));

nextjournal.view.reset_silently_BANG_ = (function nextjournal$view$reset_silently_BANG_(ratom,value){
var _STAR_notify_watches_QMARK__STAR__orig_val__89143 = nextjournal.view._STAR_notify_watches_QMARK__STAR_;
var _STAR_notify_watches_QMARK__STAR__temp_val__89144 = false;
(nextjournal.view._STAR_notify_watches_QMARK__STAR_ = _STAR_notify_watches_QMARK__STAR__temp_val__89144);

try{return cljs.core.reset_BANG_(ratom,value);
}finally {(nextjournal.view._STAR_notify_watches_QMARK__STAR_ = _STAR_notify_watches_QMARK__STAR__orig_val__89143);
}});

//# sourceMappingURL=nextjournal.view.js.map
