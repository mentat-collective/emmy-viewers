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
var G__88888 = arguments.length;
switch (G__88888) {
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
var G__88891 = arguments.length;
switch (G__88891) {
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
var obj__84046__auto__ = (function (){var parent__84053__auto__ = (state["doc"]);
var f__84054__auto__ = (parent__84053__auto__["lineAt"]);
return f__84054__auto__.call(parent__84053__auto__,from);
})();
var f__84047__auto__ = (obj__84046__auto__["slice"]);
return f__84047__auto__.call(obj__84046__auto__);
});
nextjournal.clojure_mode.util.map_cursor = (function nextjournal$clojure_mode$util$map_cursor(original_range,state,update_map){
if(cljs.core.map_QMARK_(update_map)){
} else {
throw (new Error("Assert failed: (map? update-map)"));
}

var map__88894 = nextjournal.clojure_mode.util.guard(update_map,cljs.core.map_QMARK_);
var map__88894__$1 = cljs.core.__destructure_map(map__88894);
var mapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88894__$1,new cljs.core.Keyword("cursor","mapped","cursor/mapped",1625530272));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88894__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var from_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88894__$1,new cljs.core.Keyword(null,"from-to","from-to",-640428401));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88894__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88894__$1,new cljs.core.Keyword(null,"changes","changes",1492088));
var change_desc = (cljs.core.truth_(changes)?state.changes(cljs.core.clj__GT_js(changes)):null);
var G__88895 = ({"range": (function (){var or__4253__auto__ = range;
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
var obj88897 = G__88895;
(obj88897["changes"] = change_desc);

return obj88897;
} else {
return G__88895;
}
});
/**
 * Applies `f` to each range in `state` (see `changeByRange`)
 */
nextjournal.clojure_mode.util.update_ranges = (function nextjournal$clojure_mode$util$update_ranges(var_args){
var G__88900 = arguments.length;
switch (G__88900) {
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
return state.update((function (p1__88898_SHARP_){
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(p1__88898_SHARP_,tr_specs);
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
var G__88904 = state.update(({"changes": changes}));
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__88904) : dispatch.call(null,G__88904));
}
});
nextjournal.clojure_mode.util.update_lines = (function nextjournal$clojure_mode$util$update_lines(var_args){
var args__4870__auto__ = [];
var len__4864__auto___89110 = arguments.length;
var i__4865__auto___89111 = (0);
while(true){
if((i__4865__auto___89111 < len__4864__auto___89110)){
args__4870__auto__.push((arguments[i__4865__auto___89111]));

var G__89113 = (i__4865__auto___89111 + (1));
i__4865__auto___89111 = G__89113;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic = (function (state,f,p__88909){
var vec__88910 = p__88909;
var map__88913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88910,(0),null);
var map__88913__$1 = cljs.core.__destructure_map(map__88913);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88913__$1,new cljs.core.Keyword(null,"from","from",1815293044),(0));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88913__$1,new cljs.core.Keyword(null,"to","to",192099007));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88913__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var iterator = state.doc.iter();
var result = iterator.next();
var changes = [];
var from_pos = from;
var line_num = (1);
while(true){
var map__88925 = result;
var map__88925__$1 = (((((!((map__88925 == null))))?(((((map__88925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88925):map__88925);
var done = (function (){var obj88927 = map__88925__$1;
if((!((obj88927 == null)))){
return (obj88927["done"]);
} else {
return undefined;
}
})();
var lineBreak = (function (){var obj88928 = map__88925__$1;
if((!((obj88928 == null)))){
return (obj88928["lineBreak"]);
} else {
return undefined;
}
})();
var value = (function (){var obj88929 = map__88925__$1;
if((!((obj88929 == null)))){
return (obj88929["value"]);
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
var G__89122 = iterator.next();
var G__89123 = (function (){var temp__5751__auto__ = (function (){var and__4251__auto__ = cljs.core.not(lineBreak);
if(and__4251__auto__){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(from_pos,value,line_num) : f.call(null,from_pos,value,line_num));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var change = temp__5751__auto__;
var Array88934 = changes;
Array88934.push(change);

return Array88934;
} else {
return changes;
}
})();
var G__89124 = (from_pos + ((value).length));
var G__89125 = (function (){var G__88935 = line_num;
if(cljs.core.truth_(lineBreak)){
return (G__88935 + (1));
} else {
return G__88935;
}
})();
result = G__89122;
changes = G__89123;
from_pos = G__89124;
line_num = G__89125;
continue;
}
break;
}
}));

(nextjournal.clojure_mode.util.update_lines.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nextjournal.clojure_mode.util.update_lines.cljs$lang$applyTo = (function (seq88905){
var G__88906 = cljs.core.first(seq88905);
var seq88905__$1 = cljs.core.next(seq88905);
var G__88907 = cljs.core.first(seq88905__$1);
var seq88905__$2 = cljs.core.next(seq88905__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__88906,G__88907,seq88905__$2);
}));

/**
 * `f` will be called for each selected line with args [line, changes-array, range]
 * and should *mutate* changes-array
 */
nextjournal.clojure_mode.util.update_selected_lines = (function nextjournal$clojure_mode$util$update_selected_lines(state,f){
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var doc = state.doc;
return state.changeByRange((function (p__88939){
var map__88943 = p__88939;
var map__88943__$1 = (((((!((map__88943 == null))))?(((((map__88943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88943):map__88943);
var range = map__88943__$1;
var from = (function (){var obj88945 = map__88943__$1;
if((!((obj88945 == null)))){
return (obj88945["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj88946 = map__88943__$1;
if((!((obj88946 == null)))){
return (obj88946["to"]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj88947 = map__88943__$1;
if((!((obj88947 == null)))){
return (obj88947["anchor"]);
} else {
return undefined;
}
})();
var head = (function (){var obj88948 = map__88943__$1;
if((!((obj88948 == null)))){
return (obj88948["head"]);
} else {
return undefined;
}
})();
var changes = [];
var line = doc.lineAt(from);
while(true){
var map__88956 = line;
var map__88956__$1 = (((((!((map__88956 == null))))?(((((map__88956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88956):map__88956);
var line_number = (function (){var obj88969 = map__88956__$1;
if((!((obj88969 == null)))){
return (obj88969["number"]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj88975 = map__88956__$1;
if((!((obj88975 == null)))){
return (obj88975["to"]);
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
return nextjournal.clojure_mode.util.guard(doc.lineAt((line_to + (1))),((function (line,and__4251__auto__,map__88956,map__88956__$1,line_number,line_to,changes,map__88943,map__88943__$1,range,from,to,anchor,head,at_line,doc){
return (function (p1__88936_SHARP_){
return (p1__88936_SHARP_.number > line_number);
});})(line,and__4251__auto__,map__88956,map__88956__$1,line_number,line_to,changes,map__88943,map__88943__$1,range,from,to,anchor,head,at_line,doc))
);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var next_line = temp__5751__auto__;
var G__89133 = next_line;
line = G__89133;
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
nextjournal.clojure_mode.util.iter_changed_lines = (function nextjournal$clojure_mode$util$iter_changed_lines(p__89001,f){
var map__89012 = p__89001;
var map__89012__$1 = (((((!((map__89012 == null))))?(((((map__89012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89012):map__89012);
var tr = map__89012__$1;
var map__89013 = (function (){var obj89024 = map__89012__$1;
if((!((obj89024 == null)))){
return (obj89024["state"]);
} else {
return undefined;
}
})();
var map__89013__$1 = (((((!((map__89013 == null))))?(((((map__89013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89013):map__89013);
var state = map__89013__$1;
var doc = (function (){var obj89027 = map__89013__$1;
if((!((obj89027 == null)))){
return (obj89027["doc"]);
} else {
return undefined;
}
})();
var changes = (function (){var obj89029 = map__89012__$1;
if((!((obj89029 == null)))){
return (obj89029["changes"]);
} else {
return undefined;
}
})();
var effects = (function (){var obj89031 = map__89012__$1;
if((!((obj89031 == null)))){
return (obj89031["effects"]);
} else {
return undefined;
}
})();
var selection = (function (){var obj89032 = map__89012__$1;
if((!((obj89032 == null)))){
return (obj89032["selection"]);
} else {
return undefined;
}
})();
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var next_changes = [];
var _ = changes.iterChanges((function (from_a,to_a,from_b,to_b,inserted){
var map__89035 = doc.lineAt(from_b);
var map__89035__$1 = (((((!((map__89035 == null))))?(((((map__89035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89035):map__89035);
var line = map__89035__$1;
var line_number = (function (){var obj89040 = map__89035__$1;
if((!((obj89040 == null)))){
return (obj89040["number"]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj89042 = map__89035__$1;
if((!((obj89042 == null)))){
return (obj89042["to"]);
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
var G__89136 = next_line;
line__$1 = G__89136;
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
var G__89045 = (function (){var obj89046 = (function (){var obj89049 = tr;
if((!((obj89049 == null)))){
var out89050 = ({});
var k__83941__auto___89137 = "annotations";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__83941__auto___89137,obj89049)){
var obj89056_89138 = out89050;
(obj89056_89138[k__83941__auto___89137] = (obj89049[k__83941__auto___89137]));

} else {
}

var k__83941__auto___89139 = "scrollIntoView";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__83941__auto___89139,obj89049)){
var obj89059_89140 = out89050;
(obj89059_89140[k__83941__auto___89139] = (obj89049[k__83941__auto___89139]));

} else {
}

var k__83941__auto___89141 = "reconfigure";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__83941__auto___89141,obj89049)){
var obj89060_89142 = out89050;
(obj89060_89142[k__83941__auto___89141] = (obj89049[k__83941__auto___89141]));

} else {
}

return out89050;
} else {
return ({});
}
})();
var obj89063 = (((!((obj89046 == null))))?obj89046:({}));
(obj89063["changes"] = changes.compose(next_changeset));

return obj89063;
})();
var G__89045__$1 = (cljs.core.truth_(selection)?(function (){var obj89066 = G__89045;
var obj89067 = (((!((obj89066 == null))))?obj89066:({}));
(obj89067["selection"] = state.selection.map(next_changeset));

return obj89067;
})():G__89045);
if(cljs.core.truth_(effects)){
var obj89070 = G__89045__$1;
var obj89071 = (((!((obj89070 == null))))?obj89070:({}));
(obj89071["effects"] = module$node_modules$$codemirror$state$dist$index_cjs.StateEffect.mapEffects(effects,next_changeset));

return obj89071;
} else {
return G__89045__$1;
}
} else {
return tr;
}
});
nextjournal.clojure_mode.util.something_selected_QMARK_ = (function nextjournal$clojure_mode$util$something_selected_QMARK_(p__89076){
var map__89080 = p__89076;
var map__89080__$1 = (((((!((map__89080 == null))))?(((((map__89080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89080):map__89080);
var map__89081 = (function (){var obj89085 = map__89080__$1;
if((!((obj89085 == null)))){
return (obj89085["selection"]);
} else {
return undefined;
}
})();
var map__89081__$1 = (((((!((map__89081 == null))))?(((((map__89081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89081):map__89081);
var ranges = (function (){var obj89088 = map__89081__$1;
if((!((obj89088 == null)))){
return (obj89088["ranges"]);
} else {
return undefined;
}
})();
return (!(cljs.core.every_QMARK_((function (p1__89075_SHARP_){
return p1__89075_SHARP_.empty;
}),ranges)));
});
nextjournal.clojure_mode.util.range_str = (function nextjournal$clojure_mode$util$range_str(state,p__89090){
var map__89091 = p__89090;
var map__89091__$1 = (((((!((map__89091 == null))))?(((((map__89091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89091):map__89091);
var selection = map__89091__$1;
var from = (function (){var obj89093 = map__89091__$1;
if((!((obj89093 == null)))){
return (obj89093["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj89095 = map__89091__$1;
if((!((obj89095 == null)))){
return (obj89095["to"]);
} else {
return undefined;
}
})();
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var parent__84053__auto__ = (state["doc"]);
var f__84054__auto__ = (parent__84053__auto__["slice"]);
return f__84054__auto__.call(parent__84053__auto__,from,to);
})());
});

//# sourceMappingURL=nextjournal.clojure_mode.util.js.map
