goog.provide('nextjournal.clojure_mode.extensions.eval_region');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$w3c_keyname$index_cjs=shadow.js.require("module$node_modules$w3c_keyname$index_cjs", {});
/**
 * Returns node or its highest ancestor that starts or ends at the cursor position.
 */
nextjournal.clojure_mode.extensions.eval_region.uppermost_edge_here = (function nextjournal$clojure_mode$extensions$eval_region$uppermost_edge_here(pos,node){
var or__4253__auto__ = cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(nextjournal.clojure_mode.node.top_QMARK_),(function (p1__89337_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pos,nextjournal.clojure_mode.node.end(p1__89337_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.end(node)], 0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pos,nextjournal.clojure_mode.node.start(p1__89337_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.start(node)], 0))));
})),cljs.core.iterate(nextjournal.clojure_mode.node.up,node)));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return node;
}
});
nextjournal.clojure_mode.extensions.eval_region.main_selection = (function nextjournal$clojure_mode$extensions$eval_region$main_selection(state){
var obj89339 = (function (){var obj89338 = (function (){var parent__84053__auto__ = (state["selection"]);
var f__84054__auto__ = (parent__84053__auto__["asSingle"]);
return f__84054__auto__.call(parent__84053__auto__);
})();
if((!((obj89338 == null)))){
return (obj89338["ranges"]);
} else {
return undefined;
}
})();
if((!((obj89339 == null)))){
return (obj89339[(0)]);
} else {
return undefined;
}
});
nextjournal.clojure_mode.extensions.eval_region.node_at_cursor = (function nextjournal$clojure_mode$extensions$eval_region$node_at_cursor(var_args){
var G__89342 = arguments.length;
switch (G__89342) {
case 1:
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1 = (function (state){
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2(state,(function (){var obj89343 = nextjournal.clojure_mode.extensions.eval_region.main_selection(state);
if((!((obj89343 == null)))){
return (obj89343["from"]);
} else {
return undefined;
}
})());
}));

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2 = (function (state,from){
var G__89344 = nextjournal.clojure_mode.node.nearest_touching(state,from,(-1));
var G__89344__$1 = (((G__89344 == null))?null:(function (p1__89340_SHARP_){
if(((nextjournal.clojure_mode.node.terminal_type_QMARK_(nextjournal.clojure_mode.node.type(p1__89340_SHARP_))) || ((((nextjournal.clojure_mode.node.start(p1__89340_SHARP_) <= from)) || ((nextjournal.clojure_mode.node.end(p1__89340_SHARP_) <= from)))))){
var G__89345 = p1__89340_SHARP_;
if(((nextjournal.clojure_mode.node.top_QMARK_(p1__89340_SHARP_)) || ((((!(nextjournal.clojure_mode.node.terminal_type_QMARK_(nextjournal.clojure_mode.node.type(p1__89340_SHARP_))))) && ((((nextjournal.clojure_mode.node.start(p1__89340_SHARP_) < from)) && ((from < nextjournal.clojure_mode.node.end(p1__89340_SHARP_))))))))){
return cljs.core.first(nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(G__89345,from,(-1)));
} else {
return G__89345;
}
} else {
return null;
}
})(G__89344));
var G__89344__$2 = (((G__89344__$1 == null))?null:nextjournal.clojure_mode.extensions.eval_region.uppermost_edge_here(from,G__89344__$1));
if((G__89344__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$2(state,G__89344__$2);
}
}));

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$lang$maxFixedArity = 2);

nextjournal.clojure_mode.extensions.eval_region.top_level_node = (function nextjournal$clojure_mode$extensions$eval_region$top_level_node(state){
return cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.complement(nextjournal.clojure_mode.node.top_QMARK_)),cljs.core.iterate(nextjournal.clojure_mode.node.up,nextjournal.clojure_mode.node.nearest_touching(state,(function (){var obj89346 = nextjournal.clojure_mode.extensions.eval_region.main_selection(state);
if((!((obj89346 == null)))){
return (obj89346["from"]);
} else {
return undefined;
}
})(),(-1)))));
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.modifier_effect !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.modifier_effect = module$node_modules$$codemirror$state$dist$index_cjs.StateEffect.define();
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.modifier_field !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.modifier_field = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create":cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY),"update":(function (value,tr){
var or__4253__auto__ = (function (){var G__89357 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__89347_SHARP_){
return p1__89347_SHARP_.is(nextjournal.clojure_mode.extensions.eval_region.modifier_effect);
}),tr.effects));
if((G__89357 == null)){
return null;
} else {
var obj89368 = G__89357;
if((!((obj89368 == null)))){
return (obj89368["value"]);
} else {
return undefined;
}
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return value;
}
})}));
}
nextjournal.clojure_mode.extensions.eval_region.get_modifier_field = (function nextjournal$clojure_mode$extensions$eval_region$get_modifier_field(state){
return state.field(nextjournal.clojure_mode.extensions.eval_region.modifier_field);
});
nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_ = (function nextjournal$clojure_mode$extensions$eval_region$set_modifier_field_BANG_(p__89384,value){
var map__89393 = p__89384;
var map__89393__$1 = (((((!((map__89393 == null))))?(((((map__89393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89393):map__89393);
var view = map__89393__$1;
var dispatch = (function (){var obj89418 = map__89393__$1;
if((!((obj89418 == null)))){
return (obj89418["dispatch"]);
} else {
return undefined;
}
})();
var state = (function (){var obj89425 = map__89393__$1;
if((!((obj89425 == null)))){
return (obj89425["state"]);
} else {
return undefined;
}
})();
var G__89432 = ({"effects": nextjournal.clojure_mode.extensions.eval_region.modifier_effect.of(value)});
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__89432) : dispatch.call(null,G__89432));
});
nextjournal.clojure_mode.extensions.eval_region.mark = (function nextjournal$clojure_mode$extensions$eval_region$mark(spec,p__89439){
var map__89440 = p__89439;
var map__89440__$1 = (((((!((map__89440 == null))))?(((((map__89440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89440):map__89440);
var from = (function (){var obj89442 = map__89440__$1;
if((!((obj89442 == null)))){
return (obj89442["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj89445 = map__89440__$1;
if((!((obj89445 == null)))){
return (obj89445["to"]);
} else {
return undefined;
}
})();
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.mark(spec).range(from,to);
});
nextjournal.clojure_mode.extensions.eval_region.single_mark = (function nextjournal$clojure_mode$extensions$eval_region$single_mark(spec,range){
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.set([nextjournal.clojure_mode.extensions.eval_region.mark(spec,range)]);
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.mark_spec !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.mark_spec = ({"attributes":({"style":"background-color: rgba(0, 243, 255, 0.14);"})});
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight = ({"attributes":({"style":"background-color: rgba(0, 243, 255, 0.35);"})});
}
nextjournal.clojure_mode.extensions.eval_region.cursor_range = (function nextjournal$clojure_mode$extensions$eval_region$cursor_range(state){
if(cljs.core.truth_(state.selection.main.empty)){
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1(state);
} else {
return state.selection.main;
}
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.region_field !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.region_field = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create":cljs.core.constantly(module$node_modules$$codemirror$view$dist$index_cjs.Decoration.none),"update":(function (_value,p__89468){
var map__89469 = p__89468;
var map__89469__$1 = (((((!((map__89469 == null))))?(((((map__89469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89469):map__89469);
var state = (function (){var obj89475 = map__89469__$1;
if((!((obj89475 == null)))){
return (obj89475["state"]);
} else {
return undefined;
}
})();
var map__89485 = nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state);
var map__89485__$1 = cljs.core.__destructure_map(map__89485);
var Alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89485__$1,"Alt");
var Shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89485__$1,"Shift");
var Enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89485__$1,"Enter");
var spec = (cljs.core.truth_(Enter)?nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight:nextjournal.clojure_mode.extensions.eval_region.mark_spec);
var temp__5751__auto__ = (cljs.core.truth_((function (){var and__4251__auto__ = Alt;
if(cljs.core.truth_(and__4251__auto__)){
return Shift;
} else {
return and__4251__auto__;
}
})())?nextjournal.clojure_mode.extensions.eval_region.top_level_node(state):(cljs.core.truth_(Alt)?(function (){var or__4253__auto__ = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.eval_region.main_selection(state),(function (p1__89464_SHARP_){
return cljs.core.not((function (){var obj89528 = p1__89464_SHARP_;
if((!((obj89528 == null)))){
return (obj89528["empty"]);
} else {
return undefined;
}
})());
}));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return nextjournal.clojure_mode.extensions.eval_region.cursor_range(state);
}
})():null));
if(cljs.core.truth_(temp__5751__auto__)){
var range = temp__5751__auto__;
return nextjournal.clojure_mode.extensions.eval_region.single_mark(spec,range);
} else {
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.none;
}
})}));
}
nextjournal.clojure_mode.extensions.eval_region.get_region_field = (function nextjournal$clojure_mode$extensions$eval_region$get_region_field(state){
return state.field(nextjournal.clojure_mode.extensions.eval_region.region_field);
});
nextjournal.clojure_mode.extensions.eval_region.current_range = (function nextjournal$clojure_mode$extensions$eval_region$current_range(state){
var or__4253__auto__ = (function (){var G__89530 = nextjournal.clojure_mode.extensions.eval_region.get_region_field(state);
var G__89530__$1 = (((G__89530 == null))?null:(function (){var obj__84046__auto__ = G__89530;
var f__84047__auto__ = (obj__84046__auto__["iter"]);
return f__84047__auto__.call(obj__84046__auto__);
})());
if((G__89530__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__89530__$1,(function (p1__89529_SHARP_){
var obj89532 = p1__89529_SHARP_;
if((!((obj89532 == null)))){
return (obj89532["value"]);
} else {
return undefined;
}
}));
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return state.selection.main;
}
});
/**
 * Maintains modifier-state-field, containing a map of {<modifier> true}, including Enter.
 */
nextjournal.clojure_mode.extensions.eval_region.modifier_extension = (function nextjournal$clojure_mode$extensions$eval_region$modifier_extension(modifier){
var handle_enter = (function nextjournal$clojure_mode$extensions$eval_region$modifier_extension_$_handle_enter(p__89556){
var map__89557 = p__89556;
var map__89557__$1 = (((((!((map__89557 == null))))?(((((map__89557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89557):map__89557);
var view = map__89557__$1;
var state = (function (){var obj89569 = map__89557__$1;
if((!((obj89569 == null)))){
return (obj89569["state"]);
} else {
return undefined;
}
})();
nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_(view,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state),"Enter",true));

return null;
});
var handle_key_event = (function (p__89576,p__89577){
var map__89581 = p__89576;
var map__89581__$1 = (((((!((map__89581 == null))))?(((((map__89581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89581):map__89581);
var event = map__89581__$1;
var altKey = (function (){var obj89620 = map__89581__$1;
if((!((obj89620 == null)))){
return (obj89620["altKey"]);
} else {
return undefined;
}
})();
var shiftKey = (function (){var obj89623 = map__89581__$1;
if((!((obj89623 == null)))){
return (obj89623["shiftKey"]);
} else {
return undefined;
}
})();
var metaKey = (function (){var obj89625 = map__89581__$1;
if((!((obj89625 == null)))){
return (obj89625["metaKey"]);
} else {
return undefined;
}
})();
var controlKey = (function (){var obj89628 = map__89581__$1;
if((!((obj89628 == null)))){
return (obj89628["controlKey"]);
} else {
return undefined;
}
})();
var type = (function (){var obj89629 = map__89581__$1;
if((!((obj89629 == null)))){
return (obj89629["type"]);
} else {
return undefined;
}
})();
var map__89584 = p__89577;
var map__89584__$1 = (((((!((map__89584 == null))))?(((((map__89584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89584):map__89584);
var view = map__89584__$1;
var state = (function (){var obj89641 = map__89584__$1;
if((!((obj89641 == null)))){
return (obj89641["state"]);
} else {
return undefined;
}
})();
var prev = nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state);
var next = (function (){var G__89647 = cljs.core.PersistentArrayMap.EMPTY;
var G__89647__$1 = (cljs.core.truth_(altKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__89647,"Alt",true):G__89647);
var G__89647__$2 = (cljs.core.truth_(shiftKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__89647__$1,"Shift",true):G__89647__$1);
var G__89647__$3 = (cljs.core.truth_(metaKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__89647__$2,"Meta",true):G__89647__$2);
var G__89647__$4 = (cljs.core.truth_(controlKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__89647__$3,"Control",true):G__89647__$3);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",module$node_modules$w3c_keyname$index_cjs.keyName(event))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__89647__$4,"Enter",true);
} else {
return G__89647__$4;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev,next)){
return nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_(view,next);
} else {
return null;
}
});
var handle_backspace = (function (p__89658){
var map__89661 = p__89658;
var map__89661__$1 = (((((!((map__89661 == null))))?(((((map__89661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89661):map__89661);
var view = map__89661__$1;
var state = (function (){var obj89673 = map__89661__$1;
if((!((obj89673 == null)))){
return (obj89673["state"]);
} else {
return undefined;
}
})();
var dispatch = (function (){var obj89676 = map__89661__$1;
if((!((obj89676 == null)))){
return (obj89676["dispatch"]);
} else {
return undefined;
}
})();
var map__89690 = nextjournal.clojure_mode.extensions.eval_region.current_range(state);
var map__89690__$1 = (((((!((map__89690 == null))))?(((((map__89690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89690):map__89690);
var from = (function (){var obj89697 = map__89690__$1;
if((!((obj89697 == null)))){
return (obj89697["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj89698 = map__89690__$1;
if((!((obj89698 == null)))){
return (obj89698["to"]);
} else {
return undefined;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from,to)){
var G__89699_89735 = ({"changes":({"from":from,"to":to,"insert":""}),"annotations":nextjournal.clojure_mode.util.user_event_annotation("delete")});
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__89699_89735) : dispatch.call(null,G__89699_89735));
} else {
}

return true;
});
return [nextjournal.clojure_mode.extensions.eval_region.modifier_field,module$node_modules$$codemirror$view$dist$index_cjs.keymap.of([({"key":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Enter"].join(''),"shift":handle_enter,"run":handle_enter}),({"key":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Backspace"].join(''),"run":handle_backspace,"shift":handle_backspace})]),module$node_modules$$codemirror$view$dist$index_cjs.EditorView.domEventHandlers(({"keydown": handle_key_event, "keyup": handle_key_event}))];
});
nextjournal.clojure_mode.extensions.eval_region.extension = (function nextjournal$clojure_mode$extensions$eval_region$extension(p__89700){
var map__89701 = p__89700;
var map__89701__$1 = cljs.core.__destructure_map(map__89701);
var modifier = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__89701__$1,new cljs.core.Keyword(null,"modifier","modifier",1634442788),"Alt");
return [nextjournal.clojure_mode.extensions.eval_region.modifier_extension(modifier),nextjournal.clojure_mode.extensions.eval_region.region_field,module$node_modules$$codemirror$view$dist$index_cjs.EditorView.decorations.from(nextjournal.clojure_mode.extensions.eval_region.region_field)];
});
nextjournal.clojure_mode.extensions.eval_region.cursor_node_string = (function nextjournal$clojure_mode$extensions$eval_region$cursor_node_string(state){
return nextjournal.clojure_mode.util.guard((function (){var G__89702 = nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1(state);
if((G__89702 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.range_str(state,G__89702);
}
})(),cljs.core.complement(clojure.string.blank_QMARK_));
});
nextjournal.clojure_mode.extensions.eval_region.top_level_string = (function nextjournal$clojure_mode$extensions$eval_region$top_level_string(state){
return nextjournal.clojure_mode.util.guard((function (){var G__89703 = nextjournal.clojure_mode.extensions.eval_region.top_level_node(state);
if((G__89703 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.range_str(state,G__89703);
}
})(),cljs.core.complement(clojure.string.blank_QMARK_));
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.eval_region.js.map
