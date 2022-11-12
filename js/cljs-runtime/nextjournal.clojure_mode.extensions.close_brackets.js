goog.provide('nextjournal.clojure_mode.extensions.close_brackets');
var module$node_modules$w3c_keyname$index_cjs=shadow.js.require("module$node_modules$w3c_keyname$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.close_brackets.in_string_QMARK_ = (function nextjournal$clojure_mode$extensions$close_brackets$in_string_QMARK_(state,pos){
var G__66648 = nextjournal.clojure_mode.node.name(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,pos));
var fexpr__66647 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["StringContent",null,"String",null], null), null);
return (fexpr__66647.cljs$core$IFn$_invoke$arity$1 ? fexpr__66647.cljs$core$IFn$_invoke$arity$1(G__66648) : fexpr__66647.call(null,G__66648));
});
nextjournal.clojure_mode.extensions.close_brackets.escaped_QMARK_ = (function nextjournal$clojure_mode$extensions$close_brackets$escaped_QMARK_(state,pos){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",state.doc.slice((function (){var x__4336__auto__ = (0);
var y__4337__auto__ = (pos - (1));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})(),pos).toString());
});
nextjournal.clojure_mode.extensions.close_brackets.backspace_backoff = (function nextjournal$clojure_mode$extensions$close_brackets$backspace_backoff(state,from,to){
if(cljs.core.truth_((function (){var and__4251__auto__ = (function (){var G__66653 = nextjournal.clojure_mode.node.node_BAR_(state,(from - (1)));
if((G__66653 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__66653,nextjournal.clojure_mode.node.line_comment_QMARK_);
}
})();
if(cljs.core.truth_(and__4251__auto__)){
return (!(clojure.string.blank_QMARK_(nextjournal.clojure_mode.util.line_content_at(state,from))));
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from - (1))], null);
} else {
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2(from,to);
}
});
/**
 * - skips over closing brackets
 * - when deleting an opening bracket of an empty list, removes both brackets
 */
nextjournal.clojure_mode.extensions.close_brackets.handle_backspace = (function nextjournal$clojure_mode$extensions$close_brackets$handle_backspace(p__66661){
var map__66663 = p__66661;
var map__66663__$1 = (((((!((map__66663 == null))))?(((((map__66663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66663):map__66663);
var state = map__66663__$1;
var doc = (function (){var obj66669 = map__66663__$1;
if((!((obj66669 == null)))){
return (obj66669["doc"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),state.selection.ranges.length);
if(and__4251__auto__){
var range = (function (){var obj66672 = (function (){var obj66671 = (function (){var obj66670 = state;
if((!((obj66670 == null)))){
return (obj66670["selection"]);
} else {
return undefined;
}
})();
if((!((obj66671 == null)))){
return (obj66671["ranges"]);
} else {
return undefined;
}
})();
if((!((obj66672 == null)))){
return (obj66672[(0)]);
} else {
return undefined;
}
})();
var and__4251__auto____$1 = range.empty;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),range.from);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return null;
} else {
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.util.user_event_annotation("delete")}),(function (p__66673){
var map__66674 = p__66673;
var map__66674__$1 = (((((!((map__66674 == null))))?(((((map__66674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66674):map__66674);
var range = map__66674__$1;
var head = (function (){var obj66676 = map__66674__$1;
if((!((obj66676 == null)))){
return (obj66676["head"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj66677 = map__66674__$1;
if((!((obj66677 == null)))){
return (obj66677["empty"]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj66679 = map__66674__$1;
if((!((obj66679 == null)))){
return (obj66679["anchor"]);
} else {
return undefined;
}
})();
var map__66680 = nextjournal.clojure_mode.util.from_to(head,anchor);
var map__66680__$1 = (((((!((map__66680 == null))))?(((((map__66680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66680):map__66680);
var range__$1 = map__66680__$1;
var from = (function (){var obj66682 = map__66680__$1;
if((!((obj66682 == null)))){
return (obj66682["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj66683 = map__66680__$1;
if((!((obj66683 == null)))){
return (obj66683["to"]);
} else {
return undefined;
}
})();
var node_BAR_ = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state).resolve(from,(-1));
var parent = node_BAR_.parent;
if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.not(empty);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("StringContent",nextjournal.clojure_mode.node.name(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,from,(-1))));
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
var and__4251__auto__ = parent;
if(cljs.core.truth_(and__4251__auto__)){
return (((!(nextjournal.clojure_mode.node.balanced_QMARK_(parent)))) && (nextjournal.clojure_mode.node.left_edge_QMARK_(node_BAR_)));
} else {
return and__4251__auto__;
}
}
}
})())){
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2(from,to);
} else {
if(((nextjournal.clojure_mode.node.right_edge_QMARK_(node_BAR_)) && ((from === nextjournal.clojure_mode.node.end(parent))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from - (1))], null);
} else {
if(((((nextjournal.clojure_mode.node.start_edge_QMARK_(node_BAR_)) || (nextjournal.clojure_mode.node.same_edge_QMARK_(node_BAR_)))) && ((nextjournal.clojure_mode.node.start(node_BAR_) === nextjournal.clojure_mode.node.start(parent))))){
if(nextjournal.clojure_mode.node.empty_QMARK_(nextjournal.clojure_mode.node.up(node_BAR_))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),nextjournal.clojure_mode.node.start(parent),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clojure_mode.util.from_to(nextjournal.clojure_mode.node.start(parent),nextjournal.clojure_mode.node.end(parent))], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),from], null);
}
} else {
return nextjournal.clojure_mode.extensions.close_brackets.backspace_backoff(state,from,to);

}
}
}
}));
}
});
nextjournal.clojure_mode.extensions.close_brackets.coll_pairs = new cljs.core.PersistentArrayMap(null, 4, ["(",")","[","]","{","}","\"","\""], null);
nextjournal.clojure_mode.extensions.close_brackets.handle_open = (function nextjournal$clojure_mode$extensions$close_brackets$handle_open(state,open){
var close = (nextjournal.clojure_mode.extensions.close_brackets.coll_pairs.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clojure_mode.extensions.close_brackets.coll_pairs.cljs$core$IFn$_invoke$arity$1(open) : nextjournal.clojure_mode.extensions.close_brackets.coll_pairs.call(null,open));
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.util.user_event_annotation("input")}),(function (p__66686){
var map__66687 = p__66686;
var map__66687__$1 = (((((!((map__66687 == null))))?(((((map__66687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66687):map__66687);
var from = (function (){var obj66689 = map__66687__$1;
if((!((obj66689 == null)))){
return (obj66689["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj66690 = map__66687__$1;
if((!((obj66690 == null)))){
return (obj66690["to"]);
} else {
return undefined;
}
})();
var head = (function (){var obj66691 = map__66687__$1;
if((!((obj66691 == null)))){
return (obj66691["head"]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj66692 = map__66687__$1;
if((!((obj66692 == null)))){
return (obj66692["anchor"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj66693 = map__66687__$1;
if((!((obj66693 == null)))){
return (obj66693["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(nextjournal.clojure_mode.extensions.close_brackets.in_string_QMARK_(state,from))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(open,"\"")){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$2(head,"\\\"");
} else {
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,to,open);
}
} else {
if(nextjournal.clojure_mode.extensions.close_brackets.escaped_QMARK_(state,from)){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,to,open);
} else {
if(cljs.core.truth_(empty)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert","insert",1286475395),[open,close].join(''),new cljs.core.Keyword(null,"from","from",1815293044),head], null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(head + ((open).length))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert","insert",1286475395),open,new cljs.core.Keyword(null,"from","from",1815293044),from], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert","insert",1286475395),close,new cljs.core.Keyword(null,"from","from",1815293044),to], null)], null),new cljs.core.Keyword(null,"from-to","from-to",-640428401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(anchor + ((open).length)),(head + ((open).length))], null)], null);
}

}
}
}));
});
nextjournal.clojure_mode.extensions.close_brackets.handle_close = (function nextjournal$clojure_mode$extensions$close_brackets$handle_close(state,key_name){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.util.user_event_annotation("input")}),(function (p__66698){
var map__66699 = p__66698;
var map__66699__$1 = (((((!((map__66699 == null))))?(((((map__66699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66699):map__66699);
var range = map__66699__$1;
var empty = (function (){var obj66703 = map__66699__$1;
if((!((obj66703 == null)))){
return (obj66703["empty"]);
} else {
return undefined;
}
})();
var head = (function (){var obj66704 = map__66699__$1;
if((!((obj66704 == null)))){
return (obj66704["head"]);
} else {
return undefined;
}
})();
var from = (function (){var obj66705 = map__66699__$1;
if((!((obj66705 == null)))){
return (obj66705["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj66706 = map__66699__$1;
if((!((obj66706 == null)))){
return (obj66706["to"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var or__4253__auto__ = nextjournal.clojure_mode.extensions.close_brackets.in_string_QMARK_(state,from);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return nextjournal.clojure_mode.extensions.close_brackets.escaped_QMARK_(state,from);
}
})())){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,to,key_name);
} else {
if(cljs.core.truth_(empty)){
var or__4253__auto__ = (function (){var unbalanced = (function (){var G__66707 = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,head,(-1));
var G__66707__$1 = (((G__66707 == null))?null:nextjournal.clojure_mode.node.ancestors(G__66707));
var G__66707__$2 = (((G__66707__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.coll_QMARK_,cljs.core.complement(nextjournal.clojure_mode.node.balanced_QMARK_)),G__66707__$1));
if((G__66707__$2 == null)){
return null;
} else {
return cljs.core.first(G__66707__$2);
}
})();
var closing = (function (){var G__66708 = unbalanced;
var G__66708__$1 = (((G__66708 == null))?null:nextjournal.clojure_mode.node.down(G__66708));
if((G__66708__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.closed_by(G__66708__$1);
}
})();
var pos = (function (){var G__66709 = unbalanced;
if((G__66709 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.end(G__66709);
}
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = closing;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(closing,key_name);
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),pos,new cljs.core.Keyword(null,"insert","insert",1286475395),closing], null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(pos + (1))], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var temp__5753__auto__ = (function (){var temp__5753__auto__ = nextjournal.clojure_mode.node.terminal_cursor(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state),head,(1));
if(cljs.core.truth_(temp__5753__auto__)){
var cursor = temp__5753__auto__;
while(true){
if(nextjournal.clojure_mode.node.right_edge_type_QMARK_(cursor.type)){
return nextjournal.clojure_mode.node.end(cursor);
} else {
if(cljs.core.truth_(cursor.next())){
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var close_node_end = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),close_node_end], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),head], null);
}
}
} else {
return null;
}
}
}));
});
nextjournal.clojure_mode.extensions.close_brackets.handle_backspace_cmd = (function nextjournal$clojure_mode$extensions$close_brackets$handle_backspace_cmd(p__66711){
var map__66794 = p__66711;
var map__66794__$1 = (((((!((map__66794 == null))))?(((((map__66794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66794):map__66794);
var view = map__66794__$1;
var state = (function (){var obj66798 = map__66794__$1;
if((!((obj66798 == null)))){
return (obj66798["state"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_backspace(state));
});
nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd = (function nextjournal$clojure_mode$extensions$close_brackets$handle_open_cmd(key_name){
return (function (p__66806){
var map__66807 = p__66806;
var map__66807__$1 = (((((!((map__66807 == null))))?(((((map__66807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66807):map__66807);
var view = map__66807__$1;
var state = (function (){var obj66811 = map__66807__$1;
if((!((obj66811 == null)))){
return (obj66811["state"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_open(state,key_name));
});
});
nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd = (function nextjournal$clojure_mode$extensions$close_brackets$handle_close_cmd(key_name){
return (function (p__66815){
var map__66818 = p__66815;
var map__66818__$1 = (((((!((map__66818 == null))))?(((((map__66818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66818):map__66818);
var view = map__66818__$1;
var state = (function (){var obj66844 = map__66818__$1;
if((!((obj66844 == null)))){
return (obj66844["state"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_close(state,key_name));
});
});
nextjournal.clojure_mode.extensions.close_brackets.extension = (function nextjournal$clojure_mode$extensions$close_brackets$extension(){
return module$node_modules$$codemirror$view$dist$index_cjs.keymap.of([({"key":"Backspace","run":(function (p__66847){
var map__66848 = p__66847;
var map__66848__$1 = (((((!((map__66848 == null))))?(((((map__66848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66848):map__66848);
var view = map__66848__$1;
var state = (function (){var obj66850 = map__66848__$1;
if((!((obj66850 == null)))){
return (obj66850["state"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_backspace(state));
})}),({"key":"(","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("(")}),({"key":"[","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("[")}),({"key":"{","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("{")}),({"key":"\"","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("\"")}),({"key":")","run":nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd(")")}),({"key":"]","run":nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd("]")}),({"key":"}","run":nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd("}")})]);
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.close_brackets.js.map
