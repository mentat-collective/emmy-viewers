goog.provide('nextjournal.clojure_mode.extensions.formatting');
var module$node_modules$$codemirror$language$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$language$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$codemirror$commands$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$commands$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.formatting.spaces = (function nextjournal$clojure_mode$extensions$formatting$spaces(state,n){
return module$node_modules$$codemirror$language$dist$index_cjs.indentString(state,n);
});
nextjournal.clojure_mode.extensions.formatting.indent_node_props = (function nextjournal$clojure_mode$extensions$formatting$indent_node_props(p__89388){
var map__89397 = p__89388;
var map__89397__$1 = (((((!((map__89397 == null))))?(((((map__89397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89397):map__89397);
var type = map__89397__$1;
var type_name = (function (){var obj89419 = map__89397__$1;
if((!((obj89419 == null)))){
return (obj89419["name"]);
} else {
return undefined;
}
})();
return (function (p__89446){
var map__89449 = p__89446;
var map__89449__$1 = (((((!((map__89449 == null))))?(((((map__89449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89449):map__89449);
var context = map__89449__$1;
var pos = (function (){var obj89453 = map__89449__$1;
if((!((obj89453 == null)))){
return (obj89453["pos"]);
} else {
return undefined;
}
})();
var unit = (function (){var obj89456 = map__89449__$1;
if((!((obj89456 == null)))){
return (obj89456["unit"]);
} else {
return undefined;
}
})();
var node = (function (){var obj89458 = map__89449__$1;
if((!((obj89458 == null)))){
return (obj89458["node"]);
} else {
return undefined;
}
})();
var state = (function (){var obj89460 = map__89449__$1;
if((!((obj89460 == null)))){
return (obj89460["state"]);
} else {
return undefined;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Program",type_name)){
return (0);
} else {
if(cljs.core.truth_(nextjournal.clojure_mode.node.coll_type_QMARK_(type))){
var G__89463 = context.column(nextjournal.clojure_mode.node.end(nextjournal.clojure_mode.node.down(node)));
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("List",type_name);
if(and__4251__auto__){
var G__89466 = (function (){var G__89467 = node;
var G__89467__$1 = (((G__89467 == null))?null:nextjournal.clojure_mode.node.down(G__89467));
var G__89467__$2 = (((G__89467__$1 == null))?null:nextjournal.clojure_mode.node.right(G__89467__$1));
if((G__89467__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.name(G__89467__$2);
}
})();
var fexpr__89465 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["DefLike",null,"NS",null,"Operator",null], null), null);
return (fexpr__89465.cljs$core$IFn$_invoke$arity$1 ? fexpr__89465.cljs$core$IFn$_invoke$arity$1(G__89466) : fexpr__89465.call(null,G__89466));
} else {
return and__4251__auto__;
}
})())){
return (G__89463 + (1));
} else {
return G__89463;
}
} else {
return (-1);

}
}
});
});
nextjournal.clojure_mode.extensions.formatting.props = module$node_modules$$codemirror$language$dist$index_cjs.indentNodeProp.add(nextjournal.clojure_mode.extensions.formatting.indent_node_props);
nextjournal.clojure_mode.extensions.formatting.get_indentation = (function nextjournal$clojure_mode$extensions$formatting$get_indentation(context,pos){
return module$node_modules$$codemirror$language$dist$index_cjs.getIndentation(context.state,pos);
});
nextjournal.clojure_mode.extensions.formatting.make_indent_context = (function nextjournal$clojure_mode$extensions$formatting$make_indent_context(state){
return (new module$node_modules$$codemirror$language$dist$index_cjs.IndentContext(state));
});
nextjournal.clojure_mode.extensions.formatting.indent_all = (function nextjournal$clojure_mode$extensions$formatting$indent_all(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_lines(state,(function (from,content,line_num){
var current_indent = (/^\s*/.exec(content)[(0)]).length;
var indent = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.formatting.get_indentation(context,from),cljs.core.complement(cljs.core.neg_QMARK_));
if(cljs.core.truth_(indent)){
var G__89483 = cljs.core.compare(indent,current_indent);
switch (G__89483) {
case (0):
return null;

break;
case (1):
return ({"from": (from + current_indent), "insert": nextjournal.clojure_mode.extensions.formatting.spaces(state,(indent - current_indent))});

break;
case (-1):
return ({"from": (from + indent), "to": (from + current_indent)});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__89483)].join('')));

}
} else {
return null;
}
}));
});
nextjournal.clojure_mode.extensions.formatting.expected_space = (function nextjournal$clojure_mode$extensions$formatting$expected_space(n1,n2){
if(((nextjournal.clojure_mode.node.start_edge_type_QMARK_(n1)) || (((nextjournal.clojure_mode.node.prefix_edge_type_QMARK_(n1)) || (((nextjournal.clojure_mode.node.end_edge_type_QMARK_(n2)) || (nextjournal.clojure_mode.node.same_edge_type_QMARK_(n2)))))))){
return (0);
} else {
return (1);
}
});
nextjournal.clojure_mode.extensions.formatting.space_changes = (function nextjournal$clojure_mode$extensions$formatting$space_changes(state,from,to){
var nodes = cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__89486_SHARP_){
return (((((from <= nextjournal.clojure_mode.node.start(p1__89486_SHARP_))) && ((nextjournal.clojure_mode.node.start(p1__89486_SHARP_) <= to)))) || ((((from <= nextjournal.clojure_mode.node.end(p1__89486_SHARP_))) && ((nextjournal.clojure_mode.node.end(p1__89486_SHARP_) <= to)))));
}),nextjournal.clojure_mode.node.terminal_nodes(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state),from,to)));
var trim_QMARK_ = (function (){var G__89487 = cljs.core.first(nodes);
var G__89487__$1 = (((G__89487 == null))?null:nextjournal.clojure_mode.node.end(G__89487));
if((G__89487__$1 == null)){
return null;
} else {
return (G__89487__$1 < to);
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,p__89489){
var vec__89491 = p__89489;
var map__89495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89491,(0),null);
var map__89495__$1 = (((((!((map__89495 == null))))?(((((map__89495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89495):map__89495);
var n2 = (function (){var obj89498 = map__89495__$1;
if((!((obj89498 == null)))){
return (obj89498["type"]);
} else {
return undefined;
}
})();
var start2 = (function (){var obj89499 = map__89495__$1;
if((!((obj89499 == null)))){
return (obj89499["from"]);
} else {
return undefined;
}
})();
var end2 = (function (){var obj89500 = map__89495__$1;
if((!((obj89500 == null)))){
return (obj89500["to"]);
} else {
return undefined;
}
})();
var map__89496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89491,(1),null);
var map__89496__$1 = (((((!((map__89496 == null))))?(((((map__89496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89496):map__89496);
var n1 = (function (){var obj89502 = map__89496__$1;
if((!((obj89502 == null)))){
return (obj89502["type"]);
} else {
return undefined;
}
})();
var start1 = (function (){var obj89503 = map__89496__$1;
if((!((obj89503 == null)))){
return (obj89503["from"]);
} else {
return undefined;
}
})();
var end1 = (function (){var obj89504 = map__89496__$1;
if((!((obj89504 == null)))){
return (obj89504["to"]);
} else {
return undefined;
}
})();
var expected = nextjournal.clojure_mode.extensions.formatting.expected_space(n1,n2);
var actual = (start2 - end1);
var G__89505 = cljs.core.compare(actual,expected);
switch (G__89505) {
case (0):
return out;

break;
case (1):
var Array89506 = out;
Array89506.push(({"from": (((expected === (0)))?end1:(end1 + (1))), "to": start2}));

return Array89506;

break;
case (-1):
var Array89507 = out;
Array89507.push(({"from": end1, "insert": " "}));

return Array89507;

break;
default:
return out;

}
}),(cljs.core.truth_(trim_QMARK_)?[({"from":nextjournal.clojure_mode.node.end(cljs.core.first(nodes)),"to":to})]:[]),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),nodes));
});
nextjournal.clojure_mode.extensions.formatting.into_arr = (function nextjournal$clojure_mode$extensions$formatting$into_arr(arr,items){
var seq__89508_89534 = cljs.core.seq(items);
var chunk__89509_89535 = null;
var count__89510_89536 = (0);
var i__89511_89537 = (0);
while(true){
if((i__89511_89537 < count__89510_89536)){
var i_89538 = chunk__89509_89535.cljs$core$IIndexed$_nth$arity$2(null,i__89511_89537);
arr.push(i_89538);


var G__89539 = seq__89508_89534;
var G__89540 = chunk__89509_89535;
var G__89541 = count__89510_89536;
var G__89542 = (i__89511_89537 + (1));
seq__89508_89534 = G__89539;
chunk__89509_89535 = G__89540;
count__89510_89536 = G__89541;
i__89511_89537 = G__89542;
continue;
} else {
var temp__5753__auto___89543 = cljs.core.seq(seq__89508_89534);
if(temp__5753__auto___89543){
var seq__89508_89544__$1 = temp__5753__auto___89543;
if(cljs.core.chunked_seq_QMARK_(seq__89508_89544__$1)){
var c__4679__auto___89545 = cljs.core.chunk_first(seq__89508_89544__$1);
var G__89546 = cljs.core.chunk_rest(seq__89508_89544__$1);
var G__89547 = c__4679__auto___89545;
var G__89548 = cljs.core.count(c__4679__auto___89545);
var G__89549 = (0);
seq__89508_89534 = G__89546;
chunk__89509_89535 = G__89547;
count__89510_89536 = G__89548;
i__89511_89537 = G__89549;
continue;
} else {
var i_89550 = cljs.core.first(seq__89508_89544__$1);
arr.push(i_89550);


var G__89551 = cljs.core.next(seq__89508_89544__$1);
var G__89552 = null;
var G__89553 = (0);
var G__89554 = (0);
seq__89508_89534 = G__89551;
chunk__89509_89535 = G__89552;
count__89510_89536 = G__89553;
i__89511_89537 = G__89554;
continue;
}
} else {
}
}
break;
}

return arr;
});
/**
 * Returns mutated `changes` array
 */
nextjournal.clojure_mode.extensions.formatting.format_line = (function nextjournal$clojure_mode$extensions$formatting$format_line(state,indent_context,from,text,line_num,changes,format_spaces_QMARK_){
if((!((text == null)))){
} else {
throw (new Error("Assert failed: (some? text)"));
}

var current_indent = (/^\s*/.exec(text)[(0)]).length;
var indent = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.formatting.get_indentation(indent_context,from),cljs.core.complement(cljs.core.neg_QMARK_));
var indentation_change = (cljs.core.truth_(indent)?(function (){var G__89514 = cljs.core.compare(indent,current_indent);
switch (G__89514) {
case (0):
return null;

break;
case (1):
return ({"from": (from + current_indent), "insert": nextjournal.clojure_mode.extensions.formatting.spaces(state,(indent - current_indent))});

break;
case (-1):
return ({"from": (from + indent), "to": (from + current_indent)});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__89514)].join('')));

}
})():null);
var space_changes = (cljs.core.truth_(format_spaces_QMARK_)?nextjournal.clojure_mode.extensions.formatting.space_changes(state,(from + current_indent),(from + cljs.core.count(text))):null);
var G__89515 = changes;
var G__89515__$1 = (cljs.core.truth_(space_changes)?nextjournal.clojure_mode.extensions.formatting.into_arr(G__89515,space_changes):G__89515);
if(cljs.core.truth_(indentation_change)){
var Array89516 = G__89515__$1;
Array89516.push(indentation_change);

return Array89516;
} else {
return G__89515__$1;
}
});
nextjournal.clojure_mode.extensions.formatting.format_selection = (function nextjournal$clojure_mode$extensions$formatting$format_selection(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_selected_lines(state,(function (p__89517,changes,range){
var map__89518 = p__89517;
var map__89518__$1 = (((((!((map__89518 == null))))?(((((map__89518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89518):map__89518);
var line = map__89518__$1;
var from = (function (){var obj89520 = map__89518__$1;
if((!((obj89520 == null)))){
return (obj89520["from"]);
} else {
return undefined;
}
})();
var text = (function (){var obj89521 = map__89518__$1;
if((!((obj89521 == null)))){
return (obj89521["text"]);
} else {
return undefined;
}
})();
var number = (function (){var obj89522 = map__89518__$1;
if((!((obj89522 == null)))){
return (obj89522["number"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.extensions.formatting.format_line(state,context,from,text,number,changes,true);
}));
});
nextjournal.clojure_mode.extensions.formatting.format_all = (function nextjournal$clojure_mode$extensions$formatting$format_all(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_lines(state,(function (from,text,line_num){
return nextjournal.clojure_mode.extensions.formatting.format_line(state,context,from,text,line_num,[],true);
}));
});
nextjournal.clojure_mode.extensions.formatting.format_transaction = (function nextjournal$clojure_mode$extensions$formatting$format_transaction(tr){
var origin = nextjournal.clojure_mode.util.get_user_event_annotation(tr);
var temp__5751__auto__ = (function (){var G__89523 = origin;
switch (G__89523) {
case "input":
case "input.type":
case "delete":
case "keyboardselection":
case "pointerselection":
case "select.pointer":
case "cut":
case "noformat":
case "evalregion":
return null;

break;
case "format-selections":
return nextjournal.clojure_mode.extensions.formatting.format_selection(tr.state);

break;
default:
var state = tr.state;
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.iter_changed_lines(tr,(function (line,changes){
return nextjournal.clojure_mode.extensions.formatting.format_line(state,context,line.from,line.text,line.number,changes,true);
}));

}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var changes = temp__5751__auto__;
return tr.startState.update((function (){var obj89524 = changes;
var obj89525 = (((!((obj89524 == null))))?obj89524:({}));
(obj89525["filter"] = false);

return obj89525;
})());
} else {
return tr;
}
});
nextjournal.clojure_mode.extensions.formatting.format = (function nextjournal$clojure_mode$extensions$formatting$format(state){
if(nextjournal.clojure_mode.util.something_selected_QMARK_(state)){
return state.update(nextjournal.clojure_mode.extensions.formatting.format_selection(state));
} else {
return nextjournal.clojure_mode.extensions.formatting.format_all(state);
}
});
nextjournal.clojure_mode.extensions.formatting.prefix_all = (function nextjournal$clojure_mode$extensions$formatting$prefix_all(prefix,state){
return nextjournal.clojure_mode.util.update_lines(state,(function (from,_,___$1){
return ({"from": from, "insert": prefix});
}));
});
nextjournal.clojure_mode.extensions.formatting.ext_format_changed_lines = (function nextjournal$clojure_mode$extensions$formatting$ext_format_changed_lines(){
return module$node_modules$$codemirror$state$dist$index_cjs.EditorState.transactionFilter.of(nextjournal.clojure_mode.extensions.formatting.format_transaction);
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.formatting.js.map
