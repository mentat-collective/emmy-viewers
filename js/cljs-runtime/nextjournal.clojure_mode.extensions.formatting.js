goog.provide('nextjournal.clojure_mode.extensions.formatting');
var module$node_modules$$codemirror$language$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$language$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$codemirror$commands$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$commands$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.formatting.spaces = (function nextjournal$clojure_mode$extensions$formatting$spaces(state,n){
return module$node_modules$$codemirror$language$dist$index_cjs.indentString(state,n);
});
nextjournal.clojure_mode.extensions.formatting.indent_node_props = (function nextjournal$clojure_mode$extensions$formatting$indent_node_props(p__88862){
var map__88865 = p__88862;
var map__88865__$1 = (((((!((map__88865 == null))))?(((((map__88865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88865):map__88865);
var type = map__88865__$1;
var type_name = (function (){var obj88867 = map__88865__$1;
if((!((obj88867 == null)))){
return (obj88867["name"]);
} else {
return undefined;
}
})();
return (function (p__88868){
var map__88869 = p__88868;
var map__88869__$1 = (((((!((map__88869 == null))))?(((((map__88869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88869):map__88869);
var context = map__88869__$1;
var pos = (function (){var obj88871 = map__88869__$1;
if((!((obj88871 == null)))){
return (obj88871["pos"]);
} else {
return undefined;
}
})();
var unit = (function (){var obj88872 = map__88869__$1;
if((!((obj88872 == null)))){
return (obj88872["unit"]);
} else {
return undefined;
}
})();
var node = (function (){var obj88873 = map__88869__$1;
if((!((obj88873 == null)))){
return (obj88873["node"]);
} else {
return undefined;
}
})();
var state = (function (){var obj88874 = map__88869__$1;
if((!((obj88874 == null)))){
return (obj88874["state"]);
} else {
return undefined;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Program",type_name)){
return (0);
} else {
if(cljs.core.truth_(nextjournal.clojure_mode.node.coll_type_QMARK_(type))){
var G__88877 = context.column(nextjournal.clojure_mode.node.end(nextjournal.clojure_mode.node.down(node)));
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("List",type_name);
if(and__4251__auto__){
var G__88885 = (function (){var G__88886 = node;
var G__88886__$1 = (((G__88886 == null))?null:nextjournal.clojure_mode.node.down(G__88886));
var G__88886__$2 = (((G__88886__$1 == null))?null:nextjournal.clojure_mode.node.right(G__88886__$1));
if((G__88886__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.name(G__88886__$2);
}
})();
var fexpr__88884 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["DefLike",null,"NS",null,"Operator",null], null), null);
return (fexpr__88884.cljs$core$IFn$_invoke$arity$1 ? fexpr__88884.cljs$core$IFn$_invoke$arity$1(G__88885) : fexpr__88884.call(null,G__88885));
} else {
return and__4251__auto__;
}
})())){
return (G__88877 + (1));
} else {
return G__88877;
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
var G__88913 = cljs.core.compare(indent,current_indent);
switch (G__88913) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__88913)].join('')));

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
var nodes = cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__88918_SHARP_){
return (((((from <= nextjournal.clojure_mode.node.start(p1__88918_SHARP_))) && ((nextjournal.clojure_mode.node.start(p1__88918_SHARP_) <= to)))) || ((((from <= nextjournal.clojure_mode.node.end(p1__88918_SHARP_))) && ((nextjournal.clojure_mode.node.end(p1__88918_SHARP_) <= to)))));
}),nextjournal.clojure_mode.node.terminal_nodes(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state),from,to)));
var trim_QMARK_ = (function (){var G__88927 = cljs.core.first(nodes);
var G__88927__$1 = (((G__88927 == null))?null:nextjournal.clojure_mode.node.end(G__88927));
if((G__88927__$1 == null)){
return null;
} else {
return (G__88927__$1 < to);
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,p__88929){
var vec__88934 = p__88929;
var map__89005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88934,(0),null);
var map__89005__$1 = (((((!((map__89005 == null))))?(((((map__89005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89005):map__89005);
var n2 = (function (){var obj89011 = map__89005__$1;
if((!((obj89011 == null)))){
return (obj89011["type"]);
} else {
return undefined;
}
})();
var start2 = (function (){var obj89013 = map__89005__$1;
if((!((obj89013 == null)))){
return (obj89013["from"]);
} else {
return undefined;
}
})();
var end2 = (function (){var obj89015 = map__89005__$1;
if((!((obj89015 == null)))){
return (obj89015["to"]);
} else {
return undefined;
}
})();
var map__89006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88934,(1),null);
var map__89006__$1 = (((((!((map__89006 == null))))?(((((map__89006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89006):map__89006);
var n1 = (function (){var obj89022 = map__89006__$1;
if((!((obj89022 == null)))){
return (obj89022["type"]);
} else {
return undefined;
}
})();
var start1 = (function (){var obj89025 = map__89006__$1;
if((!((obj89025 == null)))){
return (obj89025["from"]);
} else {
return undefined;
}
})();
var end1 = (function (){var obj89026 = map__89006__$1;
if((!((obj89026 == null)))){
return (obj89026["to"]);
} else {
return undefined;
}
})();
var expected = nextjournal.clojure_mode.extensions.formatting.expected_space(n1,n2);
var actual = (start2 - end1);
var G__89031 = cljs.core.compare(actual,expected);
switch (G__89031) {
case (0):
return out;

break;
case (1):
var Array89035 = out;
Array89035.push(({"from": (((expected === (0)))?end1:(end1 + (1))), "to": start2}));

return Array89035;

break;
case (-1):
var Array89039 = out;
Array89039.push(({"from": end1, "insert": " "}));

return Array89039;

break;
default:
return out;

}
}),(cljs.core.truth_(trim_QMARK_)?[({"from":nextjournal.clojure_mode.node.end(cljs.core.first(nodes)),"to":to})]:[]),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),nodes));
});
nextjournal.clojure_mode.extensions.formatting.into_arr = (function nextjournal$clojure_mode$extensions$formatting$into_arr(arr,items){
var seq__89041_89106 = cljs.core.seq(items);
var chunk__89042_89107 = null;
var count__89043_89108 = (0);
var i__89044_89109 = (0);
while(true){
if((i__89044_89109 < count__89043_89108)){
var i_89111 = chunk__89042_89107.cljs$core$IIndexed$_nth$arity$2(null,i__89044_89109);
arr.push(i_89111);


var G__89112 = seq__89041_89106;
var G__89113 = chunk__89042_89107;
var G__89114 = count__89043_89108;
var G__89115 = (i__89044_89109 + (1));
seq__89041_89106 = G__89112;
chunk__89042_89107 = G__89113;
count__89043_89108 = G__89114;
i__89044_89109 = G__89115;
continue;
} else {
var temp__5753__auto___89116 = cljs.core.seq(seq__89041_89106);
if(temp__5753__auto___89116){
var seq__89041_89118__$1 = temp__5753__auto___89116;
if(cljs.core.chunked_seq_QMARK_(seq__89041_89118__$1)){
var c__4679__auto___89120 = cljs.core.chunk_first(seq__89041_89118__$1);
var G__89121 = cljs.core.chunk_rest(seq__89041_89118__$1);
var G__89122 = c__4679__auto___89120;
var G__89123 = cljs.core.count(c__4679__auto___89120);
var G__89124 = (0);
seq__89041_89106 = G__89121;
chunk__89042_89107 = G__89122;
count__89043_89108 = G__89123;
i__89044_89109 = G__89124;
continue;
} else {
var i_89125 = cljs.core.first(seq__89041_89118__$1);
arr.push(i_89125);


var G__89126 = cljs.core.next(seq__89041_89118__$1);
var G__89127 = null;
var G__89128 = (0);
var G__89129 = (0);
seq__89041_89106 = G__89126;
chunk__89042_89107 = G__89127;
count__89043_89108 = G__89128;
i__89044_89109 = G__89129;
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
var indentation_change = (cljs.core.truth_(indent)?(function (){var G__89065 = cljs.core.compare(indent,current_indent);
switch (G__89065) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__89065)].join('')));

}
})():null);
var space_changes = (cljs.core.truth_(format_spaces_QMARK_)?nextjournal.clojure_mode.extensions.formatting.space_changes(state,(from + current_indent),(from + cljs.core.count(text))):null);
var G__89067 = changes;
var G__89067__$1 = (cljs.core.truth_(space_changes)?nextjournal.clojure_mode.extensions.formatting.into_arr(G__89067,space_changes):G__89067);
if(cljs.core.truth_(indentation_change)){
var Array89068 = G__89067__$1;
Array89068.push(indentation_change);

return Array89068;
} else {
return G__89067__$1;
}
});
nextjournal.clojure_mode.extensions.formatting.format_selection = (function nextjournal$clojure_mode$extensions$formatting$format_selection(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_selected_lines(state,(function (p__89072,changes,range){
var map__89073 = p__89072;
var map__89073__$1 = (((((!((map__89073 == null))))?(((((map__89073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89073):map__89073);
var line = map__89073__$1;
var from = (function (){var obj89076 = map__89073__$1;
if((!((obj89076 == null)))){
return (obj89076["from"]);
} else {
return undefined;
}
})();
var text = (function (){var obj89079 = map__89073__$1;
if((!((obj89079 == null)))){
return (obj89079["text"]);
} else {
return undefined;
}
})();
var number = (function (){var obj89080 = map__89073__$1;
if((!((obj89080 == null)))){
return (obj89080["number"]);
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
var temp__5751__auto__ = (function (){var G__89084 = origin;
switch (G__89084) {
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
return tr.startState.update((function (){var obj89088 = changes;
var obj89090 = (((!((obj89088 == null))))?obj89088:({}));
(obj89090["filter"] = false);

return obj89090;
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
