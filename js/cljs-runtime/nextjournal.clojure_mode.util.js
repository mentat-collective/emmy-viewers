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
var G__66199 = arguments.length;
switch (G__66199) {
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
var G__66202 = arguments.length;
switch (G__66202) {
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
var obj__60830__auto__ = (function (){var parent__60837__auto__ = (state["doc"]);
var f__60838__auto__ = (parent__60837__auto__["lineAt"]);
return f__60838__auto__.call(parent__60837__auto__,from);
})();
var f__60831__auto__ = (obj__60830__auto__["slice"]);
return f__60831__auto__.call(obj__60830__auto__);
});
nextjournal.clojure_mode.util.map_cursor = (function nextjournal$clojure_mode$util$map_cursor(original_range,state,update_map){
if(cljs.core.map_QMARK_(update_map)){
} else {
throw (new Error("Assert failed: (map? update-map)"));
}

var map__66205 = nextjournal.clojure_mode.util.guard(update_map,cljs.core.map_QMARK_);
var map__66205__$1 = cljs.core.__destructure_map(map__66205);
var mapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66205__$1,new cljs.core.Keyword("cursor","mapped","cursor/mapped",1625530272));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66205__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var from_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66205__$1,new cljs.core.Keyword(null,"from-to","from-to",-640428401));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66205__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66205__$1,new cljs.core.Keyword(null,"changes","changes",1492088));
var change_desc = (cljs.core.truth_(changes)?state.changes(cljs.core.clj__GT_js(changes)):null);
var G__66206 = ({"range": (function (){var or__4253__auto__ = range;
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
var obj66207 = G__66206;
(obj66207["changes"] = change_desc);

return obj66207;
} else {
return G__66206;
}
});
/**
 * Applies `f` to each range in `state` (see `changeByRange`)
 */
nextjournal.clojure_mode.util.update_ranges = (function nextjournal$clojure_mode$util$update_ranges(var_args){
var G__66211 = arguments.length;
switch (G__66211) {
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
return state.update((function (p1__66209_SHARP_){
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(p1__66209_SHARP_,tr_specs);
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
var G__66213 = state.update(({"changes": changes}));
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__66213) : dispatch.call(null,G__66213));
}
});
nextjournal.clojure_mode.util.update_lines = (function nextjournal$clojure_mode$util$update_lines(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66421 = arguments.length;
var i__4865__auto___66423 = (0);
while(true){
if((i__4865__auto___66423 < len__4864__auto___66421)){
args__4870__auto__.push((arguments[i__4865__auto___66423]));

var G__66433 = (i__4865__auto___66423 + (1));
i__4865__auto___66423 = G__66433;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic = (function (state,f,p__66218){
var vec__66219 = p__66218;
var map__66222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66219,(0),null);
var map__66222__$1 = cljs.core.__destructure_map(map__66222);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66222__$1,new cljs.core.Keyword(null,"from","from",1815293044),(0));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66222__$1,new cljs.core.Keyword(null,"to","to",192099007));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66222__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var iterator = state.doc.iter();
var result = iterator.next();
var changes = [];
var from_pos = from;
var line_num = (1);
while(true){
var map__66234 = result;
var map__66234__$1 = (((((!((map__66234 == null))))?(((((map__66234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66234):map__66234);
var done = (function (){var obj66237 = map__66234__$1;
if((!((obj66237 == null)))){
return (obj66237["done"]);
} else {
return undefined;
}
})();
var lineBreak = (function (){var obj66238 = map__66234__$1;
if((!((obj66238 == null)))){
return (obj66238["lineBreak"]);
} else {
return undefined;
}
})();
var value = (function (){var obj66239 = map__66234__$1;
if((!((obj66239 == null)))){
return (obj66239["value"]);
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
var G__66440 = iterator.next();
var G__66441 = (function (){var temp__5751__auto__ = (function (){var and__4251__auto__ = cljs.core.not(lineBreak);
if(and__4251__auto__){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(from_pos,value,line_num) : f.call(null,from_pos,value,line_num));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var change = temp__5751__auto__;
var Array66240 = changes;
Array66240.push(change);

return Array66240;
} else {
return changes;
}
})();
var G__66442 = (from_pos + ((value).length));
var G__66443 = (function (){var G__66241 = line_num;
if(cljs.core.truth_(lineBreak)){
return (G__66241 + (1));
} else {
return G__66241;
}
})();
result = G__66440;
changes = G__66441;
from_pos = G__66442;
line_num = G__66443;
continue;
}
break;
}
}));

(nextjournal.clojure_mode.util.update_lines.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nextjournal.clojure_mode.util.update_lines.cljs$lang$applyTo = (function (seq66215){
var G__66216 = cljs.core.first(seq66215);
var seq66215__$1 = cljs.core.next(seq66215);
var G__66217 = cljs.core.first(seq66215__$1);
var seq66215__$2 = cljs.core.next(seq66215__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66216,G__66217,seq66215__$2);
}));

/**
 * `f` will be called for each selected line with args [line, changes-array, range]
 * and should *mutate* changes-array
 */
nextjournal.clojure_mode.util.update_selected_lines = (function nextjournal$clojure_mode$util$update_selected_lines(state,f){
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var doc = state.doc;
return state.changeByRange((function (p__66248){
var map__66249 = p__66248;
var map__66249__$1 = (((((!((map__66249 == null))))?(((((map__66249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66249):map__66249);
var range = map__66249__$1;
var from = (function (){var obj66252 = map__66249__$1;
if((!((obj66252 == null)))){
return (obj66252["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj66253 = map__66249__$1;
if((!((obj66253 == null)))){
return (obj66253["to"]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj66254 = map__66249__$1;
if((!((obj66254 == null)))){
return (obj66254["anchor"]);
} else {
return undefined;
}
})();
var head = (function (){var obj66255 = map__66249__$1;
if((!((obj66255 == null)))){
return (obj66255["head"]);
} else {
return undefined;
}
})();
var changes = [];
var line = doc.lineAt(from);
while(true){
var map__66262 = line;
var map__66262__$1 = (((((!((map__66262 == null))))?(((((map__66262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66262):map__66262);
var line_number = (function (){var obj66266 = map__66262__$1;
if((!((obj66266 == null)))){
return (obj66266["number"]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj66267 = map__66262__$1;
if((!((obj66267 == null)))){
return (obj66267["to"]);
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
return nextjournal.clojure_mode.util.guard(doc.lineAt((line_to + (1))),((function (line,and__4251__auto__,map__66262,map__66262__$1,line_number,line_to,changes,map__66249,map__66249__$1,range,from,to,anchor,head,at_line,doc){
return (function (p1__66243_SHARP_){
return (p1__66243_SHARP_.number > line_number);
});})(line,and__4251__auto__,map__66262,map__66262__$1,line_number,line_to,changes,map__66249,map__66249__$1,range,from,to,anchor,head,at_line,doc))
);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var next_line = temp__5751__auto__;
var G__66447 = next_line;
line = G__66447;
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
nextjournal.clojure_mode.util.iter_changed_lines = (function nextjournal$clojure_mode$util$iter_changed_lines(p__66268,f){
var map__66272 = p__66268;
var map__66272__$1 = (((((!((map__66272 == null))))?(((((map__66272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66272):map__66272);
var tr = map__66272__$1;
var map__66273 = (function (){var obj66280 = map__66272__$1;
if((!((obj66280 == null)))){
return (obj66280["state"]);
} else {
return undefined;
}
})();
var map__66273__$1 = (((((!((map__66273 == null))))?(((((map__66273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66273):map__66273);
var state = map__66273__$1;
var doc = (function (){var obj66282 = map__66273__$1;
if((!((obj66282 == null)))){
return (obj66282["doc"]);
} else {
return undefined;
}
})();
var changes = (function (){var obj66283 = map__66272__$1;
if((!((obj66283 == null)))){
return (obj66283["changes"]);
} else {
return undefined;
}
})();
var effects = (function (){var obj66284 = map__66272__$1;
if((!((obj66284 == null)))){
return (obj66284["effects"]);
} else {
return undefined;
}
})();
var selection = (function (){var obj66285 = map__66272__$1;
if((!((obj66285 == null)))){
return (obj66285["selection"]);
} else {
return undefined;
}
})();
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var next_changes = [];
var _ = changes.iterChanges((function (from_a,to_a,from_b,to_b,inserted){
var map__66286 = doc.lineAt(from_b);
var map__66286__$1 = (((((!((map__66286 == null))))?(((((map__66286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66286):map__66286);
var line = map__66286__$1;
var line_number = (function (){var obj66288 = map__66286__$1;
if((!((obj66288 == null)))){
return (obj66288["number"]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj66289 = map__66286__$1;
if((!((obj66289 == null)))){
return (obj66289["to"]);
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
var G__66450 = next_line;
line__$1 = G__66450;
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
var G__66304 = (function (){var obj66305 = (function (){var obj66306 = tr;
if((!((obj66306 == null)))){
var out66307 = ({});
var k__60734__auto___66451 = "annotations";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__60734__auto___66451,obj66306)){
var obj66320_66452 = out66307;
(obj66320_66452[k__60734__auto___66451] = (obj66306[k__60734__auto___66451]));

} else {
}

var k__60734__auto___66453 = "scrollIntoView";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__60734__auto___66453,obj66306)){
var obj66322_66454 = out66307;
(obj66322_66454[k__60734__auto___66453] = (obj66306[k__60734__auto___66453]));

} else {
}

var k__60734__auto___66455 = "reconfigure";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__60734__auto___66455,obj66306)){
var obj66326_66456 = out66307;
(obj66326_66456[k__60734__auto___66455] = (obj66306[k__60734__auto___66455]));

} else {
}

return out66307;
} else {
return ({});
}
})();
var obj66333 = (((!((obj66305 == null))))?obj66305:({}));
(obj66333["changes"] = changes.compose(next_changeset));

return obj66333;
})();
var G__66304__$1 = (cljs.core.truth_(selection)?(function (){var obj66338 = G__66304;
var obj66339 = (((!((obj66338 == null))))?obj66338:({}));
(obj66339["selection"] = state.selection.map(next_changeset));

return obj66339;
})():G__66304);
if(cljs.core.truth_(effects)){
var obj66345 = G__66304__$1;
var obj66346 = (((!((obj66345 == null))))?obj66345:({}));
(obj66346["effects"] = module$node_modules$$codemirror$state$dist$index_cjs.StateEffect.mapEffects(effects,next_changeset));

return obj66346;
} else {
return G__66304__$1;
}
} else {
return tr;
}
});
nextjournal.clojure_mode.util.something_selected_QMARK_ = (function nextjournal$clojure_mode$util$something_selected_QMARK_(p__66361){
var map__66364 = p__66361;
var map__66364__$1 = (((((!((map__66364 == null))))?(((((map__66364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66364):map__66364);
var map__66365 = (function (){var obj66370 = map__66364__$1;
if((!((obj66370 == null)))){
return (obj66370["selection"]);
} else {
return undefined;
}
})();
var map__66365__$1 = (((((!((map__66365 == null))))?(((((map__66365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66365):map__66365);
var ranges = (function (){var obj66378 = map__66365__$1;
if((!((obj66378 == null)))){
return (obj66378["ranges"]);
} else {
return undefined;
}
})();
return (!(cljs.core.every_QMARK_((function (p1__66358_SHARP_){
return p1__66358_SHARP_.empty;
}),ranges)));
});
nextjournal.clojure_mode.util.range_str = (function nextjournal$clojure_mode$util$range_str(state,p__66380){
var map__66387 = p__66380;
var map__66387__$1 = (((((!((map__66387 == null))))?(((((map__66387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66387):map__66387);
var selection = map__66387__$1;
var from = (function (){var obj66392 = map__66387__$1;
if((!((obj66392 == null)))){
return (obj66392["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj66393 = map__66387__$1;
if((!((obj66393 == null)))){
return (obj66393["to"]);
} else {
return undefined;
}
})();
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var parent__60837__auto__ = (state["doc"]);
var f__60838__auto__ = (parent__60837__auto__["slice"]);
return f__60838__auto__.call(parent__60837__auto__,from,to);
})());
});

//# sourceMappingURL=nextjournal.clojure_mode.util.js.map
