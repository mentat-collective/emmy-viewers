goog.provide('nextjournal.clojure_mode.util');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
/**
 * @define {boolean}
 */
nextjournal.clojure_mode.util.node_js_QMARK_ = goog.define("nextjournal.clojure_mode.util.node_js_QMARK_",false);
nextjournal.clojure_mode.util.user_event_annotation = (function nextjournal$clojure_mode$util$user_event_annotation(event_name){
return module$node_modules$$codemirror$state$dist$index_cjs.Transaction.userEvent.of(event_name);
});
nextjournal.clojure_mode.util.get_user_event_annotation = (function nextjournal$clojure_mode$util$get_user_event_annotation(tr){
return tr.annotation(module$node_modules$$codemirror$state$dist$index_cjs.Transaction.userEvent);
});
nextjournal.clojure_mode.util.guard = (function nextjournal$clojure_mode$util$guard(x,f){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))){
return x;
} else {
return null;
}
});
nextjournal.clojure_mode.util.from_to = (function nextjournal$clojure_mode$util$from_to(p1,p2){
if((p1 > p2)){
return ({"from": p2, "to": p1});
} else {
return ({"from": p1, "to": p2});
}
});
/**
 * If passed a transaction, dispatch to view and return true to stop processing commands.
 */
nextjournal.clojure_mode.util.dispatch_some = (function nextjournal$clojure_mode$util$dispatch_some(view,tr){
if(cljs.core.truth_(tr)){
view.dispatch(tr);

return true;
} else {
return false;
}
});
/**
 * Returns a `change` that inserts string `s` at position `from` and moves cursor to end of insertion.
 */
nextjournal.clojure_mode.util.insertion = (function nextjournal$clojure_mode$util$insertion(var_args){
var G__88446 = arguments.length;
switch (G__88446) {
case 2:
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$2 = (function (from,s){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,from,s);
}));

(nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3 = (function (from,to,s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"insert","insert",1286475395),s,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to], null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from + ((s).length))], null);
}));

(nextjournal.clojure_mode.util.insertion.cljs$lang$maxFixedArity = 3);

nextjournal.clojure_mode.util.deletion = (function nextjournal$clojure_mode$util$deletion(var_args){
var G__88448 = arguments.length;
switch (G__88448) {
case 1:
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$1 = (function (from){
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2((function (){var x__4336__auto__ = (0);
var y__4337__auto__ = (from - (1));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})(),from);
}));

(nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
var from__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,to))?(function (){var x__4336__auto__ = (0);
var y__4337__auto__ = (from - (1));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})():from);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),from__$1,new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),from__$1,new cljs.core.Keyword(null,"to","to",192099007),to], null)], null);
}));

(nextjournal.clojure_mode.util.deletion.cljs$lang$maxFixedArity = 2);

nextjournal.clojure_mode.util.line_content_at = (function nextjournal$clojure_mode$util$line_content_at(state,from){
var obj__83643__auto__ = (function (){var parent__83650__auto__ = (state["doc"]);
var f__83651__auto__ = (parent__83650__auto__["lineAt"]);
return f__83651__auto__.call(parent__83650__auto__,from);
})();
var f__83644__auto__ = (obj__83643__auto__["slice"]);
return f__83644__auto__.call(obj__83643__auto__);
});
nextjournal.clojure_mode.util.map_cursor = (function nextjournal$clojure_mode$util$map_cursor(original_range,state,update_map){
if(cljs.core.map_QMARK_(update_map)){
} else {
throw (new Error("Assert failed: (map? update-map)"));
}

var map__88452 = nextjournal.clojure_mode.util.guard(update_map,cljs.core.map_QMARK_);
var map__88452__$1 = cljs.core.__destructure_map(map__88452);
var mapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88452__$1,new cljs.core.Keyword("cursor","mapped","cursor/mapped",1625530272));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88452__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var from_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88452__$1,new cljs.core.Keyword(null,"from-to","from-to",-640428401));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88452__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88452__$1,new cljs.core.Keyword(null,"changes","changes",1492088));
var change_desc = (cljs.core.truth_(changes)?state.changes(cljs.core.clj__GT_js(changes)):null);
var G__88453 = ({"range": (function (){var or__4253__auto__ = range;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (cljs.core.truth_(mapped)?nextjournal.clojure_mode.selections.cursor(change_desc.mapPos(mapped)):(cljs.core.truth_(cursor)?nextjournal.clojure_mode.selections.cursor(cursor):(cljs.core.truth_(from_to)?nextjournal.clojure_mode.selections.range.cljs$core$IFn$_invoke$arity$2((from_to.cljs$core$IFn$_invoke$arity$1 ? from_to.cljs$core$IFn$_invoke$arity$1((0)) : from_to.call(null,(0))),(from_to.cljs$core$IFn$_invoke$arity$1 ? from_to.cljs$core$IFn$_invoke$arity$1((1)) : from_to.call(null,(1)))):null)));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return original_range;
}
}
})()});
if(cljs.core.truth_(change_desc)){
var obj88454 = G__88453;
(obj88454["changes"] = change_desc);

return obj88454;
} else {
return G__88453;
}
});
/**
 * Applies `f` to each range in `state` (see `changeByRange`)
 */
nextjournal.clojure_mode.util.update_ranges = (function nextjournal$clojure_mode$util$update_ranges(var_args){
var G__88458 = arguments.length;
switch (G__88458) {
case 2:
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2 = (function (state,f){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,null,f);
}));

(nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3 = (function (state,tr_specs,f){
return state.update((function (p1__88455_SHARP_){
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(p1__88455_SHARP_,tr_specs);
})(state.changeByRange((function (range){
var or__4253__auto__ = (function (){var temp__5757__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(range) : f.call(null,range));
if((temp__5757__auto__ == null)){
return null;
} else {
var result = temp__5757__auto__;
return nextjournal.clojure_mode.util.map_cursor(range,state,result);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ({"range": range});
}
}))));
}));

(nextjournal.clojure_mode.util.update_ranges.cljs$lang$maxFixedArity = 3);

nextjournal.clojure_mode.util.dispatch_changes = (function nextjournal$clojure_mode$util$dispatch_changes(state,dispatch,changes){
if(cljs.core.truth_(changes.empty)){
return null;
} else {
var G__88461 = state.update(({"changes": changes}));
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__88461) : dispatch.call(null,G__88461));
}
});
nextjournal.clojure_mode.util.update_lines = (function nextjournal$clojure_mode$util$update_lines(var_args){
var args__4870__auto__ = [];
var len__4864__auto___88657 = arguments.length;
var i__4865__auto___88658 = (0);
while(true){
if((i__4865__auto___88658 < len__4864__auto___88657)){
args__4870__auto__.push((arguments[i__4865__auto___88658]));

var G__88659 = (i__4865__auto___88658 + (1));
i__4865__auto___88658 = G__88659;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic = (function (state,f,p__88466){
var vec__88467 = p__88466;
var map__88470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88467,(0),null);
var map__88470__$1 = cljs.core.__destructure_map(map__88470);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88470__$1,new cljs.core.Keyword(null,"from","from",1815293044),(0));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88470__$1,new cljs.core.Keyword(null,"to","to",192099007));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88470__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var iterator = state.doc.iter();
var result = iterator.next();
var changes = [];
var from_pos = from;
var line_num = (1);
while(true){
var map__88482 = result;
var map__88482__$1 = (((((!((map__88482 == null))))?(((((map__88482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88482):map__88482);
var done = (function (){var obj88484 = map__88482__$1;
if((!((obj88484 == null)))){
return (obj88484["done"]);
} else {
return undefined;
}
})();
var lineBreak = (function (){var obj88485 = map__88482__$1;
if((!((obj88485 == null)))){
return (obj88485["lineBreak"]);
} else {
return undefined;
}
})();
var value = (function (){var obj88486 = map__88482__$1;
if((!((obj88486 == null)))){
return (obj88486["value"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var or__4253__auto__ = done;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (from > to);
}
})())){
return state.update(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(({"changes": state.changes(changes)}),spec));
} else {
var G__88663 = iterator.next();
var G__88664 = (function (){var temp__5751__auto__ = (function (){var and__4251__auto__ = cljs.core.not(lineBreak);
if(and__4251__auto__){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(from_pos,value,line_num) : f.call(null,from_pos,value,line_num));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var change = temp__5751__auto__;
var Array88488 = changes;
Array88488.push(change);

return Array88488;
} else {
return changes;
}
})();
var G__88665 = (from_pos + ((value).length));
var G__88666 = (function (){var G__88489 = line_num;
if(cljs.core.truth_(lineBreak)){
return (G__88489 + (1));
} else {
return G__88489;
}
})();
result = G__88663;
changes = G__88664;
from_pos = G__88665;
line_num = G__88666;
continue;
}
break;
}
}));

(nextjournal.clojure_mode.util.update_lines.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nextjournal.clojure_mode.util.update_lines.cljs$lang$applyTo = (function (seq88462){
var G__88463 = cljs.core.first(seq88462);
var seq88462__$1 = cljs.core.next(seq88462);
var G__88464 = cljs.core.first(seq88462__$1);
var seq88462__$2 = cljs.core.next(seq88462__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__88463,G__88464,seq88462__$2);
}));

/**
 * `f` will be called for each selected line with args [line, changes-array, range]
 * and should *mutate* changes-array
 */
nextjournal.clojure_mode.util.update_selected_lines = (function nextjournal$clojure_mode$util$update_selected_lines(state,f){
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var doc = state.doc;
return state.changeByRange((function (p__88495){
var map__88497 = p__88495;
var map__88497__$1 = (((((!((map__88497 == null))))?(((((map__88497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88497):map__88497);
var range = map__88497__$1;
var from = (function (){var obj88501 = map__88497__$1;
if((!((obj88501 == null)))){
return (obj88501["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj88502 = map__88497__$1;
if((!((obj88502 == null)))){
return (obj88502["to"]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj88503 = map__88497__$1;
if((!((obj88503 == null)))){
return (obj88503["anchor"]);
} else {
return undefined;
}
})();
var head = (function (){var obj88504 = map__88497__$1;
if((!((obj88504 == null)))){
return (obj88504["head"]);
} else {
return undefined;
}
})();
var changes = [];
var line = doc.lineAt(from);
while(true){
var map__88511 = line;
var map__88511__$1 = (((((!((map__88511 == null))))?(((((map__88511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88511):map__88511);
var line_number = (function (){var obj88513 = map__88511__$1;
if((!((obj88513 == null)))){
return (obj88513["number"]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj88514 = map__88511__$1;
if((!((obj88514 == null)))){
return (obj88514["to"]);
} else {
return undefined;
}
})();
if((line.number > cljs.core.deref(at_line))){
cljs.core.reset_BANG_(at_line,line_number);

(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(line,changes,range) : f.call(null,line,changes,range));
} else {
}

var temp__5751__auto__ = (function (){var and__4251__auto__ = (to > line_to);
if(and__4251__auto__){
return nextjournal.clojure_mode.util.guard(doc.lineAt((line_to + (1))),((function (line,and__4251__auto__,map__88511,map__88511__$1,line_number,line_to,changes,map__88497,map__88497__$1,range,from,to,anchor,head,at_line,doc){
return (function (p1__88490_SHARP_){
return (p1__88490_SHARP_.number > line_number);
});})(line,and__4251__auto__,map__88511,map__88511__$1,line_number,line_to,changes,map__88497,map__88497__$1,range,from,to,anchor,head,at_line,doc))
);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var next_line = temp__5751__auto__;
var G__88672 = next_line;
line = G__88672;
continue;
} else {
var change_set = state.changes(changes);
return ({"changes": changes, "range": module$node_modules$$codemirror$state$dist$index_cjs.EditorSelection.range(change_set.mapPos(anchor,(1)),change_set.mapPos(head,(1)))});
}
break;
}
}));
});
/**
 * `f` will be called for each changed line with args [line, changes-array]
 * and should *mutate* changes-array. Selections will be mapped through the resulting changeset.
 */
nextjournal.clojure_mode.util.iter_changed_lines = (function nextjournal$clojure_mode$util$iter_changed_lines(p__88518,f){
var map__88530 = p__88518;
var map__88530__$1 = (((((!((map__88530 == null))))?(((((map__88530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88530):map__88530);
var tr = map__88530__$1;
var map__88531 = (function (){var obj88539 = map__88530__$1;
if((!((obj88539 == null)))){
return (obj88539["state"]);
} else {
return undefined;
}
})();
var map__88531__$1 = (((((!((map__88531 == null))))?(((((map__88531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88531):map__88531);
var state = map__88531__$1;
var doc = (function (){var obj88544 = map__88531__$1;
if((!((obj88544 == null)))){
return (obj88544["doc"]);
} else {
return undefined;
}
})();
var changes = (function (){var obj88545 = map__88530__$1;
if((!((obj88545 == null)))){
return (obj88545["changes"]);
} else {
return undefined;
}
})();
var effects = (function (){var obj88547 = map__88530__$1;
if((!((obj88547 == null)))){
return (obj88547["effects"]);
} else {
return undefined;
}
})();
var selection = (function (){var obj88550 = map__88530__$1;
if((!((obj88550 == null)))){
return (obj88550["selection"]);
} else {
return undefined;
}
})();
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var next_changes = [];
var _ = changes.iterChanges((function (from_a,to_a,from_b,to_b,inserted){
var map__88554 = doc.lineAt(from_b);
var map__88554__$1 = (((((!((map__88554 == null))))?(((((map__88554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88554):map__88554);
var line = map__88554__$1;
var line_number = (function (){var obj88559 = map__88554__$1;
if((!((obj88559 == null)))){
return (obj88559["number"]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj88563 = map__88554__$1;
if((!((obj88563 == null)))){
return (obj88563["to"]);
} else {
return undefined;
}
})();
var line__$1 = line;
while(true){
if((line_number > cljs.core.deref(at_line))){
cljs.core.reset_BANG_(at_line,line_number);

(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(line__$1,next_changes) : f.call(null,line__$1,next_changes));
} else {
}

if((to_b <= line_to)){
return null;
} else {
var next_line = doc.lineAt((line_to + (1)));
if(cljs.core.truth_((function (){var and__4251__auto__ = next_line;
if(cljs.core.truth_(and__4251__auto__)){
return (next_line.number > line__$1.number);
} else {
return and__4251__auto__;
}
})())){
var G__88675 = next_line;
line__$1 = G__88675;
continue;
} else {
return null;
}
}
break;
}
}));
var next_changeset = state.changes(next_changes);
if(cljs.core.seq(next_changes)){
var G__88575 = (function (){var obj88577 = (function (){var obj88581 = tr;
if((!((obj88581 == null)))){
var out88582 = ({});
var k__83550__auto___88676 = "annotations";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__83550__auto___88676,obj88581)){
var obj88596_88677 = out88582;
(obj88596_88677[k__83550__auto___88676] = (obj88581[k__83550__auto___88676]));

} else {
}

var k__83550__auto___88678 = "scrollIntoView";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__83550__auto___88678,obj88581)){
var obj88600_88680 = out88582;
(obj88600_88680[k__83550__auto___88678] = (obj88581[k__83550__auto___88678]));

} else {
}

var k__83550__auto___88681 = "reconfigure";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__83550__auto___88681,obj88581)){
var obj88601_88682 = out88582;
(obj88601_88682[k__83550__auto___88681] = (obj88581[k__83550__auto___88681]));

} else {
}

return out88582;
} else {
return ({});
}
})();
var obj88605 = (((!((obj88577 == null))))?obj88577:({}));
(obj88605["changes"] = changes.compose(next_changeset));

return obj88605;
})();
var G__88575__$1 = (cljs.core.truth_(selection)?(function (){var obj88611 = G__88575;
var obj88612 = (((!((obj88611 == null))))?obj88611:({}));
(obj88612["selection"] = state.selection.map(next_changeset));

return obj88612;
})():G__88575);
if(cljs.core.truth_(effects)){
var obj88615 = G__88575__$1;
var obj88616 = (((!((obj88615 == null))))?obj88615:({}));
(obj88616["effects"] = module$node_modules$$codemirror$state$dist$index_cjs.StateEffect.mapEffects(effects,next_changeset));

return obj88616;
} else {
return G__88575__$1;
}
} else {
return tr;
}
});
nextjournal.clojure_mode.util.something_selected_QMARK_ = (function nextjournal$clojure_mode$util$something_selected_QMARK_(p__88623){
var map__88625 = p__88623;
var map__88625__$1 = (((((!((map__88625 == null))))?(((((map__88625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88625):map__88625);
var map__88626 = (function (){var obj88628 = map__88625__$1;
if((!((obj88628 == null)))){
return (obj88628["selection"]);
} else {
return undefined;
}
})();
var map__88626__$1 = (((((!((map__88626 == null))))?(((((map__88626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88626):map__88626);
var ranges = (function (){var obj88631 = map__88626__$1;
if((!((obj88631 == null)))){
return (obj88631["ranges"]);
} else {
return undefined;
}
})();
return (!(cljs.core.every_QMARK_((function (p1__88622_SHARP_){
return p1__88622_SHARP_.empty;
}),ranges)));
});
nextjournal.clojure_mode.util.range_str = (function nextjournal$clojure_mode$util$range_str(state,p__88635){
var map__88636 = p__88635;
var map__88636__$1 = (((((!((map__88636 == null))))?(((((map__88636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88636):map__88636);
var selection = map__88636__$1;
var from = (function (){var obj88639 = map__88636__$1;
if((!((obj88639 == null)))){
return (obj88639["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj88642 = map__88636__$1;
if((!((obj88642 == null)))){
return (obj88642["to"]);
} else {
return undefined;
}
})();
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var parent__83650__auto__ = (state["doc"]);
var f__83651__auto__ = (parent__83650__auto__["slice"]);
return f__83651__auto__.call(parent__83650__auto__,from,to);
})());
});

//# sourceMappingURL=nextjournal.clojure_mode.util.js.map
