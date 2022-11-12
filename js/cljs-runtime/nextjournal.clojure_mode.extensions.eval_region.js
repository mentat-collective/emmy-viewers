goog.provide('nextjournal.clojure_mode.extensions.eval_region');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$w3c_keyname$index_cjs=shadow.js.require("module$node_modules$w3c_keyname$index_cjs", {});
/**
 * Returns node or its highest ancestor that starts or ends at the cursor position.
 */
nextjournal.clojure_mode.extensions.eval_region.uppermost_edge_here = (function nextjournal$clojure_mode$extensions$eval_region$uppermost_edge_here(pos,node){
var or__4253__auto__ = cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(nextjournal.clojure_mode.node.top_QMARK_),(function (p1__66642_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pos,nextjournal.clojure_mode.node.end(p1__66642_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.end(node)], 0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pos,nextjournal.clojure_mode.node.start(p1__66642_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.start(node)], 0))));
})),cljs.core.iterate(nextjournal.clojure_mode.node.up,node)));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return node;
}
});
nextjournal.clojure_mode.extensions.eval_region.main_selection = (function nextjournal$clojure_mode$extensions$eval_region$main_selection(state){
var obj66685 = (function (){var obj66684 = (function (){var parent__60837__auto__ = (state["selection"]);
var f__60838__auto__ = (parent__60837__auto__["asSingle"]);
return f__60838__auto__.call(parent__60837__auto__);
})();
if((!((obj66684 == null)))){
return (obj66684["ranges"]);
} else {
return undefined;
}
})();
if((!((obj66685 == null)))){
return (obj66685[(0)]);
} else {
return undefined;
}
});
nextjournal.clojure_mode.extensions.eval_region.node_at_cursor = (function nextjournal$clojure_mode$extensions$eval_region$node_at_cursor(var_args){
var G__66702 = arguments.length;
switch (G__66702) {
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
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2(state,(function (){var obj66722 = nextjournal.clojure_mode.extensions.eval_region.main_selection(state);
if((!((obj66722 == null)))){
return (obj66722["from"]);
} else {
return undefined;
}
})());
}));

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2 = (function (state,from){
var G__66723 = nextjournal.clojure_mode.node.nearest_touching(state,from,(-1));
var G__66723__$1 = (((G__66723 == null))?null:(function (p1__66696_SHARP_){
if(((nextjournal.clojure_mode.node.terminal_type_QMARK_(nextjournal.clojure_mode.node.type(p1__66696_SHARP_))) || ((((nextjournal.clojure_mode.node.start(p1__66696_SHARP_) <= from)) || ((nextjournal.clojure_mode.node.end(p1__66696_SHARP_) <= from)))))){
var G__66733 = p1__66696_SHARP_;
if(((nextjournal.clojure_mode.node.top_QMARK_(p1__66696_SHARP_)) || ((((!(nextjournal.clojure_mode.node.terminal_type_QMARK_(nextjournal.clojure_mode.node.type(p1__66696_SHARP_))))) && ((((nextjournal.clojure_mode.node.start(p1__66696_SHARP_) < from)) && ((from < nextjournal.clojure_mode.node.end(p1__66696_SHARP_))))))))){
return cljs.core.first(nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(G__66733,from,(-1)));
} else {
return G__66733;
}
} else {
return null;
}
})(G__66723));
var G__66723__$2 = (((G__66723__$1 == null))?null:nextjournal.clojure_mode.extensions.eval_region.uppermost_edge_here(from,G__66723__$1));
if((G__66723__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$2(state,G__66723__$2);
}
}));

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$lang$maxFixedArity = 2);

nextjournal.clojure_mode.extensions.eval_region.top_level_node = (function nextjournal$clojure_mode$extensions$eval_region$top_level_node(state){
return cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.complement(nextjournal.clojure_mode.node.top_QMARK_)),cljs.core.iterate(nextjournal.clojure_mode.node.up,nextjournal.clojure_mode.node.nearest_touching(state,(function (){var obj66735 = nextjournal.clojure_mode.extensions.eval_region.main_selection(state);
if((!((obj66735 == null)))){
return (obj66735["from"]);
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
var or__4253__auto__ = (function (){var G__66737 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__66736_SHARP_){
return p1__66736_SHARP_.is(nextjournal.clojure_mode.extensions.eval_region.modifier_effect);
}),tr.effects));
if((G__66737 == null)){
return null;
} else {
var obj66739 = G__66737;
if((!((obj66739 == null)))){
return (obj66739["value"]);
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
nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_ = (function nextjournal$clojure_mode$extensions$eval_region$set_modifier_field_BANG_(p__66740,value){
var map__66742 = p__66740;
var map__66742__$1 = (((((!((map__66742 == null))))?(((((map__66742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66742):map__66742);
var view = map__66742__$1;
var dispatch = (function (){var obj66793 = map__66742__$1;
if((!((obj66793 == null)))){
return (obj66793["dispatch"]);
} else {
return undefined;
}
})();
var state = (function (){var obj66851 = map__66742__$1;
if((!((obj66851 == null)))){
return (obj66851["state"]);
} else {
return undefined;
}
})();
var G__66852 = ({"effects": nextjournal.clojure_mode.extensions.eval_region.modifier_effect.of(value)});
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__66852) : dispatch.call(null,G__66852));
});
nextjournal.clojure_mode.extensions.eval_region.mark = (function nextjournal$clojure_mode$extensions$eval_region$mark(spec,p__66853){
var map__66854 = p__66853;
var map__66854__$1 = (((((!((map__66854 == null))))?(((((map__66854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66854):map__66854);
var from = (function (){var obj66856 = map__66854__$1;
if((!((obj66856 == null)))){
return (obj66856["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj66857 = map__66854__$1;
if((!((obj66857 == null)))){
return (obj66857["to"]);
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
nextjournal.clojure_mode.extensions.eval_region.region_field = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create":cljs.core.constantly(module$node_modules$$codemirror$view$dist$index_cjs.Decoration.none),"update":(function (_value,p__66859){
var map__67024 = p__66859;
var map__67024__$1 = (((((!((map__67024 == null))))?(((((map__67024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67024):map__67024);
var state = (function (){var obj67028 = map__67024__$1;
if((!((obj67028 == null)))){
return (obj67028["state"]);
} else {
return undefined;
}
})();
var map__67048 = nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state);
var map__67048__$1 = cljs.core.__destructure_map(map__67048);
var Alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67048__$1,"Alt");
var Shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67048__$1,"Shift");
var Enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67048__$1,"Enter");
var spec = (cljs.core.truth_(Enter)?nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight:nextjournal.clojure_mode.extensions.eval_region.mark_spec);
var temp__5751__auto__ = (cljs.core.truth_((function (){var and__4251__auto__ = Alt;
if(cljs.core.truth_(and__4251__auto__)){
return Shift;
} else {
return and__4251__auto__;
}
})())?nextjournal.clojure_mode.extensions.eval_region.top_level_node(state):(cljs.core.truth_(Alt)?(function (){var or__4253__auto__ = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.eval_region.main_selection(state),(function (p1__66858_SHARP_){
return cljs.core.not((function (){var obj67059 = p1__66858_SHARP_;
if((!((obj67059 == null)))){
return (obj67059["empty"]);
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
var or__4253__auto__ = (function (){var G__67063 = nextjournal.clojure_mode.extensions.eval_region.get_region_field(state);
var G__67063__$1 = (((G__67063 == null))?null:(function (){var obj__60830__auto__ = G__67063;
var f__60831__auto__ = (obj__60830__auto__["iter"]);
return f__60831__auto__.call(obj__60830__auto__);
})());
if((G__67063__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__67063__$1,(function (p1__67060_SHARP_){
var obj67064 = p1__67060_SHARP_;
if((!((obj67064 == null)))){
return (obj67064["value"]);
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
var handle_enter = (function nextjournal$clojure_mode$extensions$eval_region$modifier_extension_$_handle_enter(p__67065){
var map__67066 = p__67065;
var map__67066__$1 = (((((!((map__67066 == null))))?(((((map__67066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67066):map__67066);
var view = map__67066__$1;
var state = (function (){var obj67069 = map__67066__$1;
if((!((obj67069 == null)))){
return (obj67069["state"]);
} else {
return undefined;
}
})();
nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_(view,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state),"Enter",true));

return null;
});
var handle_key_event = (function (p__67070,p__67071){
var map__67072 = p__67070;
var map__67072__$1 = (((((!((map__67072 == null))))?(((((map__67072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67072):map__67072);
var event = map__67072__$1;
var altKey = (function (){var obj67075 = map__67072__$1;
if((!((obj67075 == null)))){
return (obj67075["altKey"]);
} else {
return undefined;
}
})();
var shiftKey = (function (){var obj67076 = map__67072__$1;
if((!((obj67076 == null)))){
return (obj67076["shiftKey"]);
} else {
return undefined;
}
})();
var metaKey = (function (){var obj67077 = map__67072__$1;
if((!((obj67077 == null)))){
return (obj67077["metaKey"]);
} else {
return undefined;
}
})();
var controlKey = (function (){var obj67078 = map__67072__$1;
if((!((obj67078 == null)))){
return (obj67078["controlKey"]);
} else {
return undefined;
}
})();
var type = (function (){var obj67079 = map__67072__$1;
if((!((obj67079 == null)))){
return (obj67079["type"]);
} else {
return undefined;
}
})();
var map__67073 = p__67071;
var map__67073__$1 = (((((!((map__67073 == null))))?(((((map__67073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67073):map__67073);
var view = map__67073__$1;
var state = (function (){var obj67081 = map__67073__$1;
if((!((obj67081 == null)))){
return (obj67081["state"]);
} else {
return undefined;
}
})();
var prev = nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state);
var next = (function (){var G__67084 = cljs.core.PersistentArrayMap.EMPTY;
var G__67084__$1 = (cljs.core.truth_(altKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67084,"Alt",true):G__67084);
var G__67084__$2 = (cljs.core.truth_(shiftKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67084__$1,"Shift",true):G__67084__$1);
var G__67084__$3 = (cljs.core.truth_(metaKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67084__$2,"Meta",true):G__67084__$2);
var G__67084__$4 = (cljs.core.truth_(controlKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67084__$3,"Control",true):G__67084__$3);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",module$node_modules$w3c_keyname$index_cjs.keyName(event))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67084__$4,"Enter",true);
} else {
return G__67084__$4;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev,next)){
return nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_(view,next);
} else {
return null;
}
});
var handle_backspace = (function (p__67087){
var map__67088 = p__67087;
var map__67088__$1 = (((((!((map__67088 == null))))?(((((map__67088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67088):map__67088);
var view = map__67088__$1;
var state = (function (){var obj67090 = map__67088__$1;
if((!((obj67090 == null)))){
return (obj67090["state"]);
} else {
return undefined;
}
})();
var dispatch = (function (){var obj67091 = map__67088__$1;
if((!((obj67091 == null)))){
return (obj67091["dispatch"]);
} else {
return undefined;
}
})();
var map__67107 = nextjournal.clojure_mode.extensions.eval_region.current_range(state);
var map__67107__$1 = (((((!((map__67107 == null))))?(((((map__67107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67107):map__67107);
var from = (function (){var obj67111 = map__67107__$1;
if((!((obj67111 == null)))){
return (obj67111["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj67112 = map__67107__$1;
if((!((obj67112 == null)))){
return (obj67112["to"]);
} else {
return undefined;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from,to)){
var G__67113_67149 = ({"changes":({"from":from,"to":to,"insert":""}),"annotations":nextjournal.clojure_mode.util.user_event_annotation("delete")});
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__67113_67149) : dispatch.call(null,G__67113_67149));
} else {
}

return true;
});
return [nextjournal.clojure_mode.extensions.eval_region.modifier_field,module$node_modules$$codemirror$view$dist$index_cjs.keymap.of([({"key":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Enter"].join(''),"shift":handle_enter,"run":handle_enter}),({"key":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Backspace"].join(''),"run":handle_backspace,"shift":handle_backspace})]),module$node_modules$$codemirror$view$dist$index_cjs.EditorView.domEventHandlers(({"keydown": handle_key_event, "keyup": handle_key_event}))];
});
nextjournal.clojure_mode.extensions.eval_region.extension = (function nextjournal$clojure_mode$extensions$eval_region$extension(p__67121){
var map__67124 = p__67121;
var map__67124__$1 = cljs.core.__destructure_map(map__67124);
var modifier = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67124__$1,new cljs.core.Keyword(null,"modifier","modifier",1634442788),"Alt");
return [nextjournal.clojure_mode.extensions.eval_region.modifier_extension(modifier),nextjournal.clojure_mode.extensions.eval_region.region_field,module$node_modules$$codemirror$view$dist$index_cjs.EditorView.decorations.from(nextjournal.clojure_mode.extensions.eval_region.region_field)];
});
nextjournal.clojure_mode.extensions.eval_region.cursor_node_string = (function nextjournal$clojure_mode$extensions$eval_region$cursor_node_string(state){
return nextjournal.clojure_mode.util.guard((function (){var G__67132 = nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1(state);
if((G__67132 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.range_str(state,G__67132);
}
})(),cljs.core.complement(clojure.string.blank_QMARK_));
});
nextjournal.clojure_mode.extensions.eval_region.top_level_string = (function nextjournal$clojure_mode$extensions$eval_region$top_level_string(state){
return nextjournal.clojure_mode.util.guard((function (){var G__67133 = nextjournal.clojure_mode.extensions.eval_region.top_level_node(state);
if((G__67133 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.range_str(state,G__67133);
}
})(),cljs.core.complement(clojure.string.blank_QMARK_));
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.eval_region.js.map
