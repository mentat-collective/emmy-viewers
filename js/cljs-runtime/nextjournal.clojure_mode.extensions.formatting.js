goog.provide('nextjournal.clojure_mode.extensions.formatting');
var module$node_modules$$codemirror$language$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$language$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$codemirror$commands$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$commands$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.formatting.spaces = (function nextjournal$clojure_mode$extensions$formatting$spaces(state,n){
return module$node_modules$$codemirror$language$dist$index_cjs.indentString(state,n);
});
nextjournal.clojure_mode.extensions.formatting.indent_node_props = (function nextjournal$clojure_mode$extensions$formatting$indent_node_props(p__66649){
var map__66650 = p__66649;
var map__66650__$1 = (((((!((map__66650 == null))))?(((((map__66650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66650):map__66650);
var type = map__66650__$1;
var type_name = (function (){var obj66652 = map__66650__$1;
if((!((obj66652 == null)))){
return (obj66652["name"]);
} else {
return undefined;
}
})();
return (function (p__66654){
var map__66655 = p__66654;
var map__66655__$1 = (((((!((map__66655 == null))))?(((((map__66655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66655):map__66655);
var context = map__66655__$1;
var pos = (function (){var obj66657 = map__66655__$1;
if((!((obj66657 == null)))){
return (obj66657["pos"]);
} else {
return undefined;
}
})();
var unit = (function (){var obj66658 = map__66655__$1;
if((!((obj66658 == null)))){
return (obj66658["unit"]);
} else {
return undefined;
}
})();
var node = (function (){var obj66659 = map__66655__$1;
if((!((obj66659 == null)))){
return (obj66659["node"]);
} else {
return undefined;
}
})();
var state = (function (){var obj66660 = map__66655__$1;
if((!((obj66660 == null)))){
return (obj66660["state"]);
} else {
return undefined;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Program",type_name)){
return (0);
} else {
if(cljs.core.truth_(nextjournal.clojure_mode.node.coll_type_QMARK_(type))){
var G__66662 = context.column(nextjournal.clojure_mode.node.end(nextjournal.clojure_mode.node.down(node)));
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("List",type_name);
if(and__4251__auto__){
var G__66667 = (function (){var G__66668 = node;
var G__66668__$1 = (((G__66668 == null))?null:nextjournal.clojure_mode.node.down(G__66668));
var G__66668__$2 = (((G__66668__$1 == null))?null:nextjournal.clojure_mode.node.right(G__66668__$1));
if((G__66668__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.name(G__66668__$2);
}
})();
var fexpr__66666 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["DefLike",null,"NS",null,"Operator",null], null), null);
return (fexpr__66666.cljs$core$IFn$_invoke$arity$1 ? fexpr__66666.cljs$core$IFn$_invoke$arity$1(G__66667) : fexpr__66666.call(null,G__66667));
} else {
return and__4251__auto__;
}
})())){
return (G__66662 + (1));
} else {
return G__66662;
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
var G__66678 = cljs.core.compare(indent,current_indent);
switch (G__66678) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66678)].join('')));

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
var nodes = cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__66754_SHARP_){
return (((((from <= nextjournal.clojure_mode.node.start(p1__66754_SHARP_))) && ((nextjournal.clojure_mode.node.start(p1__66754_SHARP_) <= to)))) || ((((from <= nextjournal.clojure_mode.node.end(p1__66754_SHARP_))) && ((nextjournal.clojure_mode.node.end(p1__66754_SHARP_) <= to)))));
}),nextjournal.clojure_mode.node.terminal_nodes(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state),from,to)));
var trim_QMARK_ = (function (){var G__66760 = cljs.core.first(nodes);
var G__66760__$1 = (((G__66760 == null))?null:nextjournal.clojure_mode.node.end(G__66760));
if((G__66760__$1 == null)){
return null;
} else {
return (G__66760__$1 < to);
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,p__66761){
var vec__66762 = p__66761;
var map__66766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66762,(0),null);
var map__66766__$1 = (((((!((map__66766 == null))))?(((((map__66766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66766):map__66766);
var n2 = (function (){var obj66772 = map__66766__$1;
if((!((obj66772 == null)))){
return (obj66772["type"]);
} else {
return undefined;
}
})();
var start2 = (function (){var obj66773 = map__66766__$1;
if((!((obj66773 == null)))){
return (obj66773["from"]);
} else {
return undefined;
}
})();
var end2 = (function (){var obj66775 = map__66766__$1;
if((!((obj66775 == null)))){
return (obj66775["to"]);
} else {
return undefined;
}
})();
var map__66767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66762,(1),null);
var map__66767__$1 = (((((!((map__66767 == null))))?(((((map__66767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66767):map__66767);
var n1 = (function (){var obj66779 = map__66767__$1;
if((!((obj66779 == null)))){
return (obj66779["type"]);
} else {
return undefined;
}
})();
var start1 = (function (){var obj66781 = map__66767__$1;
if((!((obj66781 == null)))){
return (obj66781["from"]);
} else {
return undefined;
}
})();
var end1 = (function (){var obj66783 = map__66767__$1;
if((!((obj66783 == null)))){
return (obj66783["to"]);
} else {
return undefined;
}
})();
var expected = nextjournal.clojure_mode.extensions.formatting.expected_space(n1,n2);
var actual = (start2 - end1);
var G__66784 = cljs.core.compare(actual,expected);
switch (G__66784) {
case (0):
return out;

break;
case (1):
var Array66785 = out;
Array66785.push(({"from": (((expected === (0)))?end1:(end1 + (1))), "to": start2}));

return Array66785;

break;
case (-1):
var Array66786 = out;
Array66786.push(({"from": end1, "insert": " "}));

return Array66786;

break;
default:
return out;

}
}),(cljs.core.truth_(trim_QMARK_)?[({"from":nextjournal.clojure_mode.node.end(cljs.core.first(nodes)),"to":to})]:[]),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),nodes));
});
nextjournal.clojure_mode.extensions.formatting.into_arr = (function nextjournal$clojure_mode$extensions$formatting$into_arr(arr,items){
var seq__66788_66821 = cljs.core.seq(items);
var chunk__66789_66822 = null;
var count__66790_66823 = (0);
var i__66791_66824 = (0);
while(true){
if((i__66791_66824 < count__66790_66823)){
var i_66826 = chunk__66789_66822.cljs$core$IIndexed$_nth$arity$2(null,i__66791_66824);
arr.push(i_66826);


var G__66828 = seq__66788_66821;
var G__66829 = chunk__66789_66822;
var G__66830 = count__66790_66823;
var G__66831 = (i__66791_66824 + (1));
seq__66788_66821 = G__66828;
chunk__66789_66822 = G__66829;
count__66790_66823 = G__66830;
i__66791_66824 = G__66831;
continue;
} else {
var temp__5753__auto___66832 = cljs.core.seq(seq__66788_66821);
if(temp__5753__auto___66832){
var seq__66788_66833__$1 = temp__5753__auto___66832;
if(cljs.core.chunked_seq_QMARK_(seq__66788_66833__$1)){
var c__4679__auto___66834 = cljs.core.chunk_first(seq__66788_66833__$1);
var G__66835 = cljs.core.chunk_rest(seq__66788_66833__$1);
var G__66836 = c__4679__auto___66834;
var G__66837 = cljs.core.count(c__4679__auto___66834);
var G__66838 = (0);
seq__66788_66821 = G__66835;
chunk__66789_66822 = G__66836;
count__66790_66823 = G__66837;
i__66791_66824 = G__66838;
continue;
} else {
var i_66839 = cljs.core.first(seq__66788_66833__$1);
arr.push(i_66839);


var G__66840 = cljs.core.next(seq__66788_66833__$1);
var G__66841 = null;
var G__66842 = (0);
var G__66843 = (0);
seq__66788_66821 = G__66840;
chunk__66789_66822 = G__66841;
count__66790_66823 = G__66842;
i__66791_66824 = G__66843;
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
var indentation_change = (cljs.core.truth_(indent)?(function (){var G__66796 = cljs.core.compare(indent,current_indent);
switch (G__66796) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66796)].join('')));

}
})():null);
var space_changes = (cljs.core.truth_(format_spaces_QMARK_)?nextjournal.clojure_mode.extensions.formatting.space_changes(state,(from + current_indent),(from + cljs.core.count(text))):null);
var G__66797 = changes;
var G__66797__$1 = (cljs.core.truth_(space_changes)?nextjournal.clojure_mode.extensions.formatting.into_arr(G__66797,space_changes):G__66797);
if(cljs.core.truth_(indentation_change)){
var Array66799 = G__66797__$1;
Array66799.push(indentation_change);

return Array66799;
} else {
return G__66797__$1;
}
});
nextjournal.clojure_mode.extensions.formatting.format_selection = (function nextjournal$clojure_mode$extensions$formatting$format_selection(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_selected_lines(state,(function (p__66800,changes,range){
var map__66801 = p__66800;
var map__66801__$1 = (((((!((map__66801 == null))))?(((((map__66801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66801):map__66801);
var line = map__66801__$1;
var from = (function (){var obj66803 = map__66801__$1;
if((!((obj66803 == null)))){
return (obj66803["from"]);
} else {
return undefined;
}
})();
var text = (function (){var obj66804 = map__66801__$1;
if((!((obj66804 == null)))){
return (obj66804["text"]);
} else {
return undefined;
}
})();
var number = (function (){var obj66805 = map__66801__$1;
if((!((obj66805 == null)))){
return (obj66805["number"]);
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
var temp__5751__auto__ = (function (){var G__66809 = origin;
switch (G__66809) {
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
return tr.startState.update((function (){var obj66810 = changes;
var obj66812 = (((!((obj66810 == null))))?obj66810:({}));
(obj66812["filter"] = false);

return obj66812;
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
