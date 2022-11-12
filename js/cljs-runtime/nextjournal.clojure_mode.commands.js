goog.provide('nextjournal.clojure_mode.commands');
var module$node_modules$$codemirror$commands$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$commands$dist$index_cjs", {});
nextjournal.clojure_mode.commands.view_command = (function nextjournal$clojure_mode$commands$view_command(f){
return (function (p__66860){
var map__66861 = p__66860;
var map__66861__$1 = (((((!((map__66861 == null))))?(((((map__66861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66861):map__66861);
var state = (function (){var obj66863 = map__66861__$1;
if((!((obj66863 == null)))){
return (obj66863["state"]);
} else {
return undefined;
}
})();
var dispatch = (function (){var obj66864 = map__66861__$1;
if((!((obj66864 == null)))){
return (obj66864["dispatch"]);
} else {
return undefined;
}
})();
var G__66865_67058 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(state) : f.call(null,state));
if((G__66865_67058 == null)){
} else {
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__66865_67058) : dispatch.call(null,G__66865_67058));
}

return true;
});
});
nextjournal.clojure_mode.commands.unwrap_STAR_ = (function nextjournal$clojure_mode$commands$unwrap_STAR_(state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__66866){
var map__66867 = p__66866;
var map__66867__$1 = (((((!((map__66867 == null))))?(((((map__66867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66867):map__66867);
var range = map__66867__$1;
var from = (function (){var obj66869 = map__66867__$1;
if((!((obj66869 == null)))){
return (obj66869["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj66888 = map__66867__$1;
if((!((obj66888 == null)))){
return (obj66888["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj66889 = map__66867__$1;
if((!((obj66889 == null)))){
return (obj66889["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var temp__5753__auto__ = (function (){var G__66891 = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,from,(-1));
var G__66891__$1 = (((G__66891 == null))?null:nextjournal.clojure_mode.node.closest(G__66891,nextjournal.clojure_mode.node.coll_QMARK_));
if((G__66891__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__66891__$1,nextjournal.clojure_mode.node.balanced_QMARK_);
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var nearest_balanced_coll = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from - (1)),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.node.down(nearest_balanced_coll)),nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.node.down_last(nearest_balanced_coll))], null)], null);
} else {
return null;
}
} else {
return null;
}
}));
});
nextjournal.clojure_mode.commands.copy_to_clipboard_BANG_ = (function nextjournal$clojure_mode$commands$copy_to_clipboard_BANG_(text){
var focus_el = (function (){var obj66895 = document;
if((!((obj66895 == null)))){
return (obj66895["activeElement"]);
} else {
return undefined;
}
})();
var input_el = document.createElement("textarea");
input_el.setAttribute("class","clipboard-input");

var obj66896_67061 = input_el;
var obj66897_67062 = (((!((obj66896_67061 == null))))?obj66896_67061:({}));
(obj66897_67062["innerHTML"] = text);


document.body.appendChild(input_el);

input_el.focus(({"preventScroll": true}));

input_el.select();

document.execCommand("copy");

focus_el.focus(({"preventScroll": true}));

return document.body.removeChild(input_el);
});
nextjournal.clojure_mode.commands.kill_STAR_ = (function nextjournal$clojure_mode$commands$kill_STAR_(state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__66902){
var map__66903 = p__66902;
var map__66903__$1 = (((((!((map__66903 == null))))?(((((map__66903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66903):map__66903);
var range = map__66903__$1;
var from = (function (){var obj66905 = map__66903__$1;
if((!((obj66905 == null)))){
return (obj66905["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj66906 = map__66903__$1;
if((!((obj66906 == null)))){
return (obj66906["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj66907 = map__66903__$1;
if((!((obj66907 == null)))){
return (obj66907["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var node = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from);
var parent = nextjournal.clojure_mode.node.closest(node,(function (p1__66900_SHARP_){
var or__4253__auto__ = nextjournal.clojure_mode.node.coll_QMARK_(p1__66900_SHARP_);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((nextjournal.clojure_mode.node.string_QMARK_(p1__66900_SHARP_)) || (nextjournal.clojure_mode.node.top_QMARK_(p1__66900_SHARP_)));
}
}));
var line_end = state.doc.lineAt(from).to;
var next_children = (cljs.core.truth_(parent)?nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(parent,from,(1)):null);
var last_child_on_line = (cljs.core.truth_(parent)?(function (){var G__66908 = next_children;
var G__66908__$1 = (((G__66908 == null))?null:cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$1((function (p1__66901_SHARP_){
return (nextjournal.clojure_mode.node.start(p1__66901_SHARP_) <= line_end);
})),G__66908));
if((G__66908__$1 == null)){
return null;
} else {
return cljs.core.last(G__66908__$1);
}
})():null);
var to__$1 = ((nextjournal.clojure_mode.node.string_QMARK_(parent))?(function (){var content = cljs.core.str.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$2(state,parent));
var content_from = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(content,(from - nextjournal.clojure_mode.node.start(parent)));
var next_newline = content_from.indexOf("\n");
if((next_newline < (0))){
return (nextjournal.clojure_mode.node.end(parent) - (1));
} else {
return ((from + next_newline) + (1));
}
})():(cljs.core.truth_(last_child_on_line)?((nextjournal.clojure_mode.node.end_edge_QMARK_(last_child_on_line))?nextjournal.clojure_mode.node.start(last_child_on_line):nextjournal.clojure_mode.node.end(last_child_on_line)):(cljs.core.truth_((function (){var G__66912 = cljs.core.first(next_children);
var G__66912__$1 = (((G__66912 == null))?null:nextjournal.clojure_mode.node.start(G__66912));
if((G__66912__$1 == null)){
return null;
} else {
return (G__66912__$1 > line_end);
}
})())?nextjournal.clojure_mode.node.start(cljs.core.first(next_children)):null)));
if(nextjournal.clojure_mode.util.node_js_QMARK_){
} else {
nextjournal.clojure_mode.commands.copy_to_clipboard_BANG_(nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$3(state,from,to__$1));
}

if(cljs.core.truth_(to__$1)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),from,new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to__$1], null)], null);
} else {
return null;
}
} else {
nextjournal.clojure_mode.commands.copy_to_clipboard_BANG_(nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$3(state,from,to));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),from,new cljs.core.Keyword(null,"changes","changes",1492088),nextjournal.clojure_mode.util.from_to(from,to)], null);
}
}));
});
nextjournal.clojure_mode.commands.enter_and_indent_STAR_ = (function nextjournal$clojure_mode$commands$enter_and_indent_STAR_(state){
var ctx = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__66913){
var map__66914 = p__66913;
var map__66914__$1 = (((((!((map__66914 == null))))?(((((map__66914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66914):map__66914);
var range = map__66914__$1;
var from = (function (){var obj66916 = map__66914__$1;
if((!((obj66916 == null)))){
return (obj66916["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj66917 = map__66914__$1;
if((!((obj66917 == null)))){
return (obj66917["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj66918 = map__66914__$1;
if((!((obj66918 == null)))){
return (obj66918["empty"]);
} else {
return undefined;
}
})();
var indent_at = nextjournal.clojure_mode.node.start(nextjournal.clojure_mode.node.inner_span(nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.coll_QMARK_,nextjournal.clojure_mode.node.top_QMARK_))));
var indent = nextjournal.clojure_mode.extensions.formatting.get_indentation(ctx,indent_at);
var insertion = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.extensions.formatting.spaces(state,indent))].join('');
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from + ((insertion).length)),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"insert","insert",1286475395),insertion], null)], null)], null);
}));
});
nextjournal.clojure_mode.commands.nav_position = (function nextjournal$clojure_mode$commands$nav_position(state,from,dir){
var or__4253__auto__ = (function (){var G__66924 = nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),(function (p1__66919_SHARP_){
var or__4253__auto__ = nextjournal.clojure_mode.node.coll_QMARK_(p1__66919_SHARP_);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((nextjournal.clojure_mode.node.string_QMARK_(p1__66919_SHARP_)) || (nextjournal.clojure_mode.node.top_QMARK_(p1__66919_SHARP_)));
}
}));
var G__66924__$1 = (((G__66924 == null))?null:nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(G__66924,from,dir));
var G__66924__$2 = (((G__66924__$1 == null))?null:cljs.core.first(G__66924__$1));
if((G__66924__$2 == null)){
return null;
} else {
var obj66925 = G__66924__$2;
if((!((obj66925 == null)))){
return (obj66925[applied_science.js_interop.impl.wrap_key((function (){var G__66927 = dir;
switch (G__66927) {
case (-1):
return new cljs.core.Keyword(null,"from","from",1815293044);

break;
case (1):
return new cljs.core.Keyword(null,"to","to",192099007);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66927)].join('')));

}
})())]);
} else {
return undefined;
}
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return nextjournal.clojure_mode.selections.constrain(state,(from + dir));
}
});
nextjournal.clojure_mode.commands.nav = (function nextjournal$clojure_mode$commands$nav(dir){
return (function (state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__66930){
var map__66931 = p__66930;
var map__66931__$1 = (((((!((map__66931 == null))))?(((((map__66931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66931):map__66931);
var range = map__66931__$1;
var from = (function (){var obj66936 = map__66931__$1;
if((!((obj66936 == null)))){
return (obj66936["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj66937 = map__66931__$1;
if((!((obj66937 == null)))){
return (obj66937["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj66938 = map__66931__$1;
if((!((obj66938 == null)))){
return (obj66938["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),nextjournal.clojure_mode.commands.nav_position(state,from,dir)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(function (){var obj66939 = nextjournal.clojure_mode.util.from_to(from,to);
if((!((obj66939 == null)))){
return (obj66939[applied_science.js_interop.impl.wrap_key((function (){var G__66941 = dir;
switch (G__66941) {
case (-1):
return new cljs.core.Keyword(null,"from","from",1815293044);

break;
case (1):
return new cljs.core.Keyword(null,"to","to",192099007);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66941)].join('')));

}
})())]);
} else {
return undefined;
}
})()], null);
}
}));
});
});
nextjournal.clojure_mode.commands.nav_select = (function nextjournal$clojure_mode$commands$nav_select(dir){
return (function (state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__66942){
var map__66943 = p__66942;
var map__66943__$1 = (((((!((map__66943 == null))))?(((((map__66943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66943):map__66943);
var range = map__66943__$1;
var from = (function (){var obj66954 = map__66943__$1;
if((!((obj66954 == null)))){
return (obj66954["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj66955 = map__66943__$1;
if((!((obj66955 == null)))){
return (obj66955["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj66956 = map__66943__$1;
if((!((obj66956 == null)))){
return (obj66956["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,from,nextjournal.clojure_mode.commands.nav_position(state,from,dir))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),(function (){var map__66960 = nextjournal.clojure_mode.util.from_to(from,to);
var map__66960__$1 = (((((!((map__66960 == null))))?(((((map__66960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66960):map__66960);
var from__$1 = (function (){var obj66967 = map__66960__$1;
if((!((obj66967 == null)))){
return (obj66967["from"]);
} else {
return undefined;
}
})();
var to__$1 = (function (){var obj66968 = map__66960__$1;
if((!((obj66968 == null)))){
return (obj66968["to"]);
} else {
return undefined;
}
})();
var G__66971 = dir;
switch (G__66971) {
case (1):
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,from__$1,nextjournal.clojure_mode.commands.nav_position(state,to__$1,dir));

break;
case (-1):
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,nextjournal.clojure_mode.commands.nav_position(state,from__$1,dir),to__$1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66971)].join('')));

}
})()], null);
}
}));
});
});
nextjournal.clojure_mode.commands.balance_ranges = (function nextjournal$clojure_mode$commands$balance_ranges(state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__66977){
var map__66978 = p__66977;
var map__66978__$1 = (((((!((map__66978 == null))))?(((((map__66978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66978):map__66978);
var from = (function (){var obj66980 = map__66978__$1;
if((!((obj66980 == null)))){
return (obj66980["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj66981 = map__66978__$1;
if((!((obj66981 == null)))){
return (obj66981["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj66982 = map__66978__$1;
if((!((obj66982 == null)))){
return (obj66982["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,from,to)], null);
}
}));
});
nextjournal.clojure_mode.commands.log = console.log;
nextjournal.clojure_mode.commands.slurp = (function nextjournal$clojure_mode$commands$slurp(direction){
return (function (state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__66985){
var map__66986 = p__66985;
var map__66986__$1 = (((((!((map__66986 == null))))?(((((map__66986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66986):map__66986);
var range = map__66986__$1;
var from = (function (){var obj66988 = map__66986__$1;
if((!((obj66988 == null)))){
return (obj66988["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj67025 = map__66986__$1;
if((!((obj67025 == null)))){
return (obj67025["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj67027 = map__66986__$1;
if((!((obj67027 == null)))){
return (obj67027["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var temp__5753__auto__ = nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.coll_QMARK_,(function (p1__66984_SHARP_){
return cljs.core.not((function (){var G__67029 = direction;
switch (G__67029) {
case (1):
var G__67030 = p1__66984_SHARP_;
var G__67030__$1 = (((G__67030 == null))?null:nextjournal.clojure_mode.node.with_prefix(G__67030));
var G__67030__$2 = (((G__67030__$1 == null))?null:nextjournal.clojure_mode.node.right(G__67030__$1));
if((G__67030__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.end_edge_QMARK_(G__67030__$2);
}

break;
case (-1):
var G__67031 = p1__66984_SHARP_;
var G__67031__$1 = (((G__67031 == null))?null:nextjournal.clojure_mode.node.with_prefix(G__67031));
var G__67031__$2 = (((G__67031__$1 == null))?null:nextjournal.clojure_mode.node.left(G__67031__$1));
if((G__67031__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.start_edge_QMARK_(G__67031__$2);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67029)].join('')));

}
})());
})));
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
var temp__5753__auto____$1 = (function (){var G__67032 = direction;
switch (G__67032) {
case (1):
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,nextjournal.clojure_mode.node.rights(nextjournal.clojure_mode.node.with_prefix(parent))));

break;
case (-1):
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,nextjournal.clojure_mode.node.lefts(nextjournal.clojure_mode.node.with_prefix(parent))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67032)].join('')));

}
})();
if(cljs.core.truth_(temp__5753__auto____$1)){
var target = temp__5753__auto____$1;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cursor","mapped","cursor/mapped",1625530272),from,new cljs.core.Keyword(null,"changes","changes",1492088),(function (){var G__67033 = direction;
switch (G__67033) {
case (1):
var edge = nextjournal.clojure_mode.node.down_last(parent);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.end(target),new cljs.core.Keyword(null,"insert","insert",1286475395),nextjournal.clojure_mode.node.name(edge)], null),(function (){var obj67034 = nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1(edge);
var obj67035 = (((!((obj67034 == null))))?obj67034:({}));
(obj67035["insert"] = " ");

return obj67035;
})()], null);

break;
case (-1):
var edge = nextjournal.clojure_mode.node.left_edge_with_prefix(state,parent);
var start = nextjournal.clojure_mode.node.start(nextjournal.clojure_mode.node.with_prefix(parent));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),start,new cljs.core.Keyword(null,"to","to",192099007),(start + ((edge).length)),new cljs.core.Keyword(null,"insert","insert",1286475395)," "], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.start(target),new cljs.core.Keyword(null,"insert","insert",1286475395),edge], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67033)].join('')));

}
})()], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));
});
});
nextjournal.clojure_mode.commands.barf = (function nextjournal$clojure_mode$commands$barf(direction){
return (function (state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__67038){
var map__67039 = p__67038;
var map__67039__$1 = (((((!((map__67039 == null))))?(((((map__67039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67039):map__67039);
var range = map__67039__$1;
var from = (function (){var obj67041 = map__67039__$1;
if((!((obj67041 == null)))){
return (obj67041["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj67042 = map__67039__$1;
if((!((obj67042 == null)))){
return (obj67042["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj67043 = map__67039__$1;
if((!((obj67043 == null)))){
return (obj67043["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var temp__5753__auto__ = nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),nextjournal.clojure_mode.node.coll_QMARK_);
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
var G__67044 = direction;
switch (G__67044) {
case (1):
var temp__5753__auto____$1 = (function (){var G__67046 = nextjournal.clojure_mode.node.down_last(parent);
var G__67046__$1 = (((G__67046 == null))?null:nextjournal.clojure_mode.node.lefts(G__67046));
var G__67046__$2 = (((G__67046__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,G__67046__$1));
var G__67046__$3 = (((G__67046__$2 == null))?null:cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),G__67046__$2));
if((G__67046__$3 == null)){
return null;
} else {
return cljs.core.first(G__67046__$3);
}
})();
if(cljs.core.truth_(temp__5753__auto____$1)){
var target = temp__5753__auto____$1;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(function (){var x__4339__auto__ = nextjournal.clojure_mode.node.end(target);
var y__4340__auto__ = from;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})(),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.end(target),new cljs.core.Keyword(null,"insert","insert",1286475395),nextjournal.clojure_mode.node.name(nextjournal.clojure_mode.node.down_last(parent))], null),(function (){var obj67049 = nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.node.down_last(parent));
var obj67050 = (((!((obj67049 == null))))?obj67049:({}));
(obj67050["insert"] = " ");

return obj67050;
})()], null)], null);
} else {
return null;
}

break;
case (-1):
var temp__5753__auto____$1 = (function (){var G__67053 = nextjournal.clojure_mode.node.down(parent);
var G__67053__$1 = (((G__67053 == null))?null:nextjournal.clojure_mode.node.rights(G__67053));
var G__67053__$2 = (((G__67053__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,G__67053__$1));
var G__67053__$3 = (((G__67053__$2 == null))?null:cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),G__67053__$2));
if((G__67053__$3 == null)){
return null;
} else {
return cljs.core.first(G__67053__$3);
}
})();
if(cljs.core.truth_(temp__5753__auto____$1)){
var next_first_child = temp__5753__auto____$1;
var left_edge = nextjournal.clojure_mode.node.left_edge_with_prefix(state,parent);
var left_start = nextjournal.clojure_mode.node.start(nextjournal.clojure_mode.node.with_prefix(parent));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(function (){var x__4336__auto__ = from;
var y__4337__auto__ = (nextjournal.clojure_mode.node.start(next_first_child) + (((left_edge).length) + (1)));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})(),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.start(next_first_child),new cljs.core.Keyword(null,"insert","insert",1286475395),[" ",left_edge].join('')], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),left_start,new cljs.core.Keyword(null,"to","to",192099007),(left_start + ((left_edge).length)),new cljs.core.Keyword(null,"insert","insert",1286475395),nextjournal.clojure_mode.extensions.formatting.spaces(state,((left_edge).length))], null)], null)], null);
} else {
return null;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67044)].join('')));

}
} else {
return null;
}
} else {
return null;
}
}));
});
});
/**
 * Subset of builtin commands that compliment paredit
 */
nextjournal.clojure_mode.commands.builtin_index = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"cursorLineStart","cursorLineStart",-1505072960),new cljs.core.Keyword(null,"cursorLineDown","cursorLineDown",180576864),new cljs.core.Keyword(null,"selectAll","selectAll",869127842),new cljs.core.Keyword(null,"selectLineUp","selectLineUp",-255594686),new cljs.core.Keyword(null,"cursorLineBoundaryForward","cursorLineBoundaryForward",-1283359997),new cljs.core.Keyword(null,"selectLineBoundaryBackward","selectLineBoundaryBackward",-1443564123),new cljs.core.Keyword(null,"deleteCharBackward","deleteCharBackward",-618312025),new cljs.core.Keyword(null,"insertNewlineAndIndent","insertNewlineAndIndent",-542382007),new cljs.core.Keyword(null,"cursorLineBoundaryBackward","cursorLineBoundaryBackward",1373049802),new cljs.core.Keyword(null,"selectCharRight","selectCharRight",1049825195),new cljs.core.Keyword(null,"selectPageUp","selectPageUp",152840428),new cljs.core.Keyword(null,"deleteCharForward","deleteCharForward",823474956),new cljs.core.Keyword(null,"cursorCharLeft","cursorCharLeft",-1572589780),new cljs.core.Keyword(null,"cursorGroupBackward","cursorGroupBackward",-1004717331),new cljs.core.Keyword(null,"selectDocStart","selectDocStart",-217268371),new cljs.core.Keyword(null,"selectGroupBackward","selectGroupBackward",1569543117),new cljs.core.Keyword(null,"cursorDocEnd","cursorDocEnd",-1298653903),new cljs.core.Keyword(null,"deleteGroupBackward","deleteGroupBackward",616768113),new cljs.core.Keyword(null,"selectLineStart","selectLineStart",1211557745),new cljs.core.Keyword(null,"deleteGroupForward","deleteGroupForward",596007091),new cljs.core.Keyword(null,"selectDocEnd","selectDocEnd",496449813),new cljs.core.Keyword(null,"selectPageDown","selectPageDown",226562613),new cljs.core.Keyword(null,"cursorPageDown","cursorPageDown",-1143253131),new cljs.core.Keyword(null,"cursorPageUp","cursorPageUp",-716828715),new cljs.core.Keyword(null,"selectLineBoundaryForward","selectLineBoundaryForward",904508598),new cljs.core.Keyword(null,"cursorLineEnd","cursorLineEnd",-234219178),new cljs.core.Keyword(null,"cursorGroupForward","cursorGroupForward",1231480632),new cljs.core.Keyword(null,"cursorCharRight","cursorCharRight",-739900583),new cljs.core.Keyword(null,"selectGroupForward","selectGroupForward",1344873433),new cljs.core.Keyword(null,"selectLineEnd","selectLineEnd",-1578526086),new cljs.core.Keyword(null,"selectCharLeft","selectCharLeft",1894248154),new cljs.core.Keyword(null,"splitLine","splitLine",-1338533189),new cljs.core.Keyword(null,"selectLineDown","selectLineDown",1741100604),new cljs.core.Keyword(null,"transposeChars","transposeChars",1566260285),new cljs.core.Keyword(null,"cursorLineUp","cursorLineUp",-1375841219),new cljs.core.Keyword(null,"cursorDocStart","cursorDocStart",2008312830)],[module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineStart,module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineDown,module$node_modules$$codemirror$commands$dist$index_cjs.selectAll,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineUp,module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineBoundaryForward,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineBoundaryBackward,module$node_modules$$codemirror$commands$dist$index_cjs.deleteCharBackward,module$node_modules$$codemirror$commands$dist$index_cjs.insertNewlineAndIndent,module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineBoundaryBackward,module$node_modules$$codemirror$commands$dist$index_cjs.selectCharRight,module$node_modules$$codemirror$commands$dist$index_cjs.selectPageUp,module$node_modules$$codemirror$commands$dist$index_cjs.deleteCharForward,module$node_modules$$codemirror$commands$dist$index_cjs.cursorCharLeft,module$node_modules$$codemirror$commands$dist$index_cjs.cursorGroupBackward,module$node_modules$$codemirror$commands$dist$index_cjs.selectDocStart,module$node_modules$$codemirror$commands$dist$index_cjs.selectGroupBackward,module$node_modules$$codemirror$commands$dist$index_cjs.cursorDocEnd,module$node_modules$$codemirror$commands$dist$index_cjs.deleteGroupBackward,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineStart,module$node_modules$$codemirror$commands$dist$index_cjs.deleteGroupForward,module$node_modules$$codemirror$commands$dist$index_cjs.selectDocEnd,module$node_modules$$codemirror$commands$dist$index_cjs.selectPageDown,module$node_modules$$codemirror$commands$dist$index_cjs.cursorPageDown,module$node_modules$$codemirror$commands$dist$index_cjs.cursorPageUp,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineBoundaryForward,module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineEnd,module$node_modules$$codemirror$commands$dist$index_cjs.cursorGroupForward,module$node_modules$$codemirror$commands$dist$index_cjs.cursorCharRight,module$node_modules$$codemirror$commands$dist$index_cjs.selectGroupForward,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineEnd,module$node_modules$$codemirror$commands$dist$index_cjs.selectCharLeft,module$node_modules$$codemirror$commands$dist$index_cjs.splitLine,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineDown,module$node_modules$$codemirror$commands$dist$index_cjs.transposeChars,module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineUp,module$node_modules$$codemirror$commands$dist$index_cjs.cursorDocStart]);
nextjournal.clojure_mode.commands.indent = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.extensions.formatting.format);
nextjournal.clojure_mode.commands.unwrap = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.unwrap_STAR_);
nextjournal.clojure_mode.commands.kill = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.kill_STAR_);
nextjournal.clojure_mode.commands.nav_right = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.nav((1)));
nextjournal.clojure_mode.commands.nav_left = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.nav((-1)));
nextjournal.clojure_mode.commands.nav_select_right = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.nav_select((1)));
nextjournal.clojure_mode.commands.nav_select_left = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.nav_select((-1)));
nextjournal.clojure_mode.commands.slurp_forward = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.slurp((1)));
nextjournal.clojure_mode.commands.slurp_backward = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.slurp((-1)));
nextjournal.clojure_mode.commands.barf_forward = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.barf((1)));
nextjournal.clojure_mode.commands.barf_backward = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.barf((-1)));
nextjournal.clojure_mode.commands.selection_grow = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.extensions.selection_history.selection_grow_STAR_);
nextjournal.clojure_mode.commands.selection_return = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.extensions.selection_history.selection_return_STAR_);
nextjournal.clojure_mode.commands.enter_and_indent = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.enter_and_indent_STAR_);
nextjournal.clojure_mode.commands.paredit_index = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"nav-left","nav-left",845947876),new cljs.core.Keyword(null,"enter-and-indent","enter-and-indent",-1825406873),new cljs.core.Keyword(null,"selection-grow","selection-grow",1627169352),new cljs.core.Keyword(null,"kill","kill",-12335575),new cljs.core.Keyword(null,"slurp-forward","slurp-forward",-866284566),new cljs.core.Keyword(null,"nav-select-right","nav-select-right",-455278613),new cljs.core.Keyword(null,"nav-select-left","nav-select-left",-1033285138),new cljs.core.Keyword(null,"barf-forward","barf-forward",1278612337),new cljs.core.Keyword(null,"barf-backward","barf-backward",434854195),new cljs.core.Keyword(null,"nav-right","nav-right",591041267),new cljs.core.Keyword(null,"slurp-backward","slurp-backward",-1615745159),new cljs.core.Keyword(null,"unwrap","unwrap",-1399175462),new cljs.core.Keyword(null,"selection-return","selection-return",267226206)],[nextjournal.clojure_mode.commands.indent,nextjournal.clojure_mode.commands.nav_left,nextjournal.clojure_mode.commands.enter_and_indent,nextjournal.clojure_mode.commands.selection_grow,nextjournal.clojure_mode.commands.kill,nextjournal.clojure_mode.commands.slurp_forward,nextjournal.clojure_mode.commands.nav_select_right,nextjournal.clojure_mode.commands.nav_select_left,nextjournal.clojure_mode.commands.barf_forward,nextjournal.clojure_mode.commands.barf_backward,nextjournal.clojure_mode.commands.nav_right,nextjournal.clojure_mode.commands.slurp_backward,nextjournal.clojure_mode.commands.unwrap,nextjournal.clojure_mode.commands.selection_return]);
/**
 * Mapping of keyword-id to command functions
 */
nextjournal.clojure_mode.commands.index = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.commands.builtin_index,nextjournal.clojure_mode.commands.paredit_index], 0));
/**
 * Lookup keyword-id by function
 */
nextjournal.clojure_mode.commands.reverse_index = cljs.core.reduce_kv((function (p1__67055_SHARP_,p2__67057_SHARP_,p3__67056_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__67055_SHARP_,p3__67056_SHARP_,p2__67057_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,nextjournal.clojure_mode.commands.index);

//# sourceMappingURL=nextjournal.clojure_mode.commands.js.map
