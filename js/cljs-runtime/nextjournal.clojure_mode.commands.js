goog.provide('nextjournal.clojure_mode.commands');
var module$node_modules$$codemirror$commands$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$commands$dist$index_cjs", {});
nextjournal.clojure_mode.commands.view_command = (function nextjournal$clojure_mode$commands$view_command(f){
return (function (p__89559){
var map__89560 = p__89559;
var map__89560__$1 = (((((!((map__89560 == null))))?(((((map__89560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89560):map__89560);
var state = (function (){var obj89570 = map__89560__$1;
if((!((obj89570 == null)))){
return (obj89570["state"]);
} else {
return undefined;
}
})();
var dispatch = (function (){var obj89571 = map__89560__$1;
if((!((obj89571 == null)))){
return (obj89571["dispatch"]);
} else {
return undefined;
}
})();
var G__89572_89711 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(state) : f.call(null,state));
if((G__89572_89711 == null)){
} else {
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__89572_89711) : dispatch.call(null,G__89572_89711));
}

return true;
});
});
nextjournal.clojure_mode.commands.unwrap_STAR_ = (function nextjournal$clojure_mode$commands$unwrap_STAR_(state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__89574){
var map__89578 = p__89574;
var map__89578__$1 = (((((!((map__89578 == null))))?(((((map__89578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89578):map__89578);
var range = map__89578__$1;
var from = (function (){var obj89580 = map__89578__$1;
if((!((obj89580 == null)))){
return (obj89580["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj89583 = map__89578__$1;
if((!((obj89583 == null)))){
return (obj89583["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj89585 = map__89578__$1;
if((!((obj89585 == null)))){
return (obj89585["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var temp__5753__auto__ = (function (){var G__89588 = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,from,(-1));
var G__89588__$1 = (((G__89588 == null))?null:nextjournal.clojure_mode.node.closest(G__89588,nextjournal.clojure_mode.node.coll_QMARK_));
if((G__89588__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__89588__$1,nextjournal.clojure_mode.node.balanced_QMARK_);
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
var focus_el = (function (){var obj89593 = document;
if((!((obj89593 == null)))){
return (obj89593["activeElement"]);
} else {
return undefined;
}
})();
var input_el = document.createElement("textarea");
input_el.setAttribute("class","clipboard-input");

var obj89595_89715 = input_el;
var obj89596_89716 = (((!((obj89595_89715 == null))))?obj89595_89715:({}));
(obj89596_89716["innerHTML"] = text);


document.body.appendChild(input_el);

input_el.focus(({"preventScroll": true}));

input_el.select();

document.execCommand("copy");

focus_el.focus(({"preventScroll": true}));

return document.body.removeChild(input_el);
});
nextjournal.clojure_mode.commands.kill_STAR_ = (function nextjournal$clojure_mode$commands$kill_STAR_(state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__89603){
var map__89604 = p__89603;
var map__89604__$1 = (((((!((map__89604 == null))))?(((((map__89604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89604):map__89604);
var range = map__89604__$1;
var from = (function (){var obj89606 = map__89604__$1;
if((!((obj89606 == null)))){
return (obj89606["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj89607 = map__89604__$1;
if((!((obj89607 == null)))){
return (obj89607["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj89608 = map__89604__$1;
if((!((obj89608 == null)))){
return (obj89608["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var node = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from);
var parent = nextjournal.clojure_mode.node.closest(node,(function (p1__89601_SHARP_){
var or__4253__auto__ = nextjournal.clojure_mode.node.coll_QMARK_(p1__89601_SHARP_);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((nextjournal.clojure_mode.node.string_QMARK_(p1__89601_SHARP_)) || (nextjournal.clojure_mode.node.top_QMARK_(p1__89601_SHARP_)));
}
}));
var line_end = state.doc.lineAt(from).to;
var next_children = (cljs.core.truth_(parent)?nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(parent,from,(1)):null);
var last_child_on_line = (cljs.core.truth_(parent)?(function (){var G__89609 = next_children;
var G__89609__$1 = (((G__89609 == null))?null:cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$1((function (p1__89602_SHARP_){
return (nextjournal.clojure_mode.node.start(p1__89602_SHARP_) <= line_end);
})),G__89609));
if((G__89609__$1 == null)){
return null;
} else {
return cljs.core.last(G__89609__$1);
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
})():(cljs.core.truth_(last_child_on_line)?((nextjournal.clojure_mode.node.end_edge_QMARK_(last_child_on_line))?nextjournal.clojure_mode.node.start(last_child_on_line):nextjournal.clojure_mode.node.end(last_child_on_line)):(cljs.core.truth_((function (){var G__89610 = cljs.core.first(next_children);
var G__89610__$1 = (((G__89610 == null))?null:nextjournal.clojure_mode.node.start(G__89610));
if((G__89610__$1 == null)){
return null;
} else {
return (G__89610__$1 > line_end);
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
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__89611){
var map__89612 = p__89611;
var map__89612__$1 = (((((!((map__89612 == null))))?(((((map__89612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89612):map__89612);
var range = map__89612__$1;
var from = (function (){var obj89614 = map__89612__$1;
if((!((obj89614 == null)))){
return (obj89614["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj89615 = map__89612__$1;
if((!((obj89615 == null)))){
return (obj89615["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj89616 = map__89612__$1;
if((!((obj89616 == null)))){
return (obj89616["empty"]);
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
var or__4253__auto__ = (function (){var G__89618 = nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),(function (p1__89617_SHARP_){
var or__4253__auto__ = nextjournal.clojure_mode.node.coll_QMARK_(p1__89617_SHARP_);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((nextjournal.clojure_mode.node.string_QMARK_(p1__89617_SHARP_)) || (nextjournal.clojure_mode.node.top_QMARK_(p1__89617_SHARP_)));
}
}));
var G__89618__$1 = (((G__89618 == null))?null:nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(G__89618,from,dir));
var G__89618__$2 = (((G__89618__$1 == null))?null:cljs.core.first(G__89618__$1));
if((G__89618__$2 == null)){
return null;
} else {
var obj89619 = G__89618__$2;
if((!((obj89619 == null)))){
return (obj89619[applied_science.js_interop.impl.wrap_key((function (){var G__89622 = dir;
switch (G__89622) {
case (-1):
return new cljs.core.Keyword(null,"from","from",1815293044);

break;
case (1):
return new cljs.core.Keyword(null,"to","to",192099007);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__89622)].join('')));

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
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__89624){
var map__89626 = p__89624;
var map__89626__$1 = (((((!((map__89626 == null))))?(((((map__89626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89626):map__89626);
var range = map__89626__$1;
var from = (function (){var obj89632 = map__89626__$1;
if((!((obj89632 == null)))){
return (obj89632["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj89633 = map__89626__$1;
if((!((obj89633 == null)))){
return (obj89633["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj89634 = map__89626__$1;
if((!((obj89634 == null)))){
return (obj89634["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),nextjournal.clojure_mode.commands.nav_position(state,from,dir)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(function (){var obj89635 = nextjournal.clojure_mode.util.from_to(from,to);
if((!((obj89635 == null)))){
return (obj89635[applied_science.js_interop.impl.wrap_key((function (){var G__89637 = dir;
switch (G__89637) {
case (-1):
return new cljs.core.Keyword(null,"from","from",1815293044);

break;
case (1):
return new cljs.core.Keyword(null,"to","to",192099007);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__89637)].join('')));

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
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__89638){
var map__89639 = p__89638;
var map__89639__$1 = (((((!((map__89639 == null))))?(((((map__89639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89639):map__89639);
var range = map__89639__$1;
var from = (function (){var obj89642 = map__89639__$1;
if((!((obj89642 == null)))){
return (obj89642["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj89643 = map__89639__$1;
if((!((obj89643 == null)))){
return (obj89643["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj89644 = map__89639__$1;
if((!((obj89644 == null)))){
return (obj89644["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,from,nextjournal.clojure_mode.commands.nav_position(state,from,dir))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),(function (){var map__89645 = nextjournal.clojure_mode.util.from_to(from,to);
var map__89645__$1 = (((((!((map__89645 == null))))?(((((map__89645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89645):map__89645);
var from__$1 = (function (){var obj89648 = map__89645__$1;
if((!((obj89648 == null)))){
return (obj89648["from"]);
} else {
return undefined;
}
})();
var to__$1 = (function (){var obj89649 = map__89645__$1;
if((!((obj89649 == null)))){
return (obj89649["to"]);
} else {
return undefined;
}
})();
var G__89650 = dir;
switch (G__89650) {
case (1):
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,from__$1,nextjournal.clojure_mode.commands.nav_position(state,to__$1,dir));

break;
case (-1):
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,nextjournal.clojure_mode.commands.nav_position(state,from__$1,dir),to__$1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__89650)].join('')));

}
})()], null);
}
}));
});
});
nextjournal.clojure_mode.commands.balance_ranges = (function nextjournal$clojure_mode$commands$balance_ranges(state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__89651){
var map__89652 = p__89651;
var map__89652__$1 = (((((!((map__89652 == null))))?(((((map__89652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89652):map__89652);
var from = (function (){var obj89654 = map__89652__$1;
if((!((obj89654 == null)))){
return (obj89654["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj89655 = map__89652__$1;
if((!((obj89655 == null)))){
return (obj89655["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj89656 = map__89652__$1;
if((!((obj89656 == null)))){
return (obj89656["empty"]);
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
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__89659){
var map__89660 = p__89659;
var map__89660__$1 = (((((!((map__89660 == null))))?(((((map__89660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89660):map__89660);
var range = map__89660__$1;
var from = (function (){var obj89664 = map__89660__$1;
if((!((obj89664 == null)))){
return (obj89664["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj89666 = map__89660__$1;
if((!((obj89666 == null)))){
return (obj89666["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj89667 = map__89660__$1;
if((!((obj89667 == null)))){
return (obj89667["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var temp__5753__auto__ = nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.coll_QMARK_,(function (p1__89657_SHARP_){
return cljs.core.not((function (){var G__89669 = direction;
switch (G__89669) {
case (1):
var G__89671 = p1__89657_SHARP_;
var G__89671__$1 = (((G__89671 == null))?null:nextjournal.clojure_mode.node.with_prefix(G__89671));
var G__89671__$2 = (((G__89671__$1 == null))?null:nextjournal.clojure_mode.node.right(G__89671__$1));
if((G__89671__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.end_edge_QMARK_(G__89671__$2);
}

break;
case (-1):
var G__89672 = p1__89657_SHARP_;
var G__89672__$1 = (((G__89672 == null))?null:nextjournal.clojure_mode.node.with_prefix(G__89672));
var G__89672__$2 = (((G__89672__$1 == null))?null:nextjournal.clojure_mode.node.left(G__89672__$1));
if((G__89672__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.start_edge_QMARK_(G__89672__$2);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__89669)].join('')));

}
})());
})));
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
var temp__5753__auto____$1 = (function (){var G__89674 = direction;
switch (G__89674) {
case (1):
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,nextjournal.clojure_mode.node.rights(nextjournal.clojure_mode.node.with_prefix(parent))));

break;
case (-1):
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,nextjournal.clojure_mode.node.lefts(nextjournal.clojure_mode.node.with_prefix(parent))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__89674)].join('')));

}
})();
if(cljs.core.truth_(temp__5753__auto____$1)){
var target = temp__5753__auto____$1;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cursor","mapped","cursor/mapped",1625530272),from,new cljs.core.Keyword(null,"changes","changes",1492088),(function (){var G__89675 = direction;
switch (G__89675) {
case (1):
var edge = nextjournal.clojure_mode.node.down_last(parent);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.end(target),new cljs.core.Keyword(null,"insert","insert",1286475395),nextjournal.clojure_mode.node.name(edge)], null),(function (){var obj89677 = nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1(edge);
var obj89678 = (((!((obj89677 == null))))?obj89677:({}));
(obj89678["insert"] = " ");

return obj89678;
})()], null);

break;
case (-1):
var edge = nextjournal.clojure_mode.node.left_edge_with_prefix(state,parent);
var start = nextjournal.clojure_mode.node.start(nextjournal.clojure_mode.node.with_prefix(parent));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),start,new cljs.core.Keyword(null,"to","to",192099007),(start + ((edge).length)),new cljs.core.Keyword(null,"insert","insert",1286475395)," "], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.start(target),new cljs.core.Keyword(null,"insert","insert",1286475395),edge], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__89675)].join('')));

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
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__89682){
var map__89683 = p__89682;
var map__89683__$1 = (((((!((map__89683 == null))))?(((((map__89683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89683):map__89683);
var range = map__89683__$1;
var from = (function (){var obj89685 = map__89683__$1;
if((!((obj89685 == null)))){
return (obj89685["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj89686 = map__89683__$1;
if((!((obj89686 == null)))){
return (obj89686["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj89687 = map__89683__$1;
if((!((obj89687 == null)))){
return (obj89687["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var temp__5753__auto__ = nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),nextjournal.clojure_mode.node.coll_QMARK_);
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
var G__89688 = direction;
switch (G__89688) {
case (1):
var temp__5753__auto____$1 = (function (){var G__89689 = nextjournal.clojure_mode.node.down_last(parent);
var G__89689__$1 = (((G__89689 == null))?null:nextjournal.clojure_mode.node.lefts(G__89689));
var G__89689__$2 = (((G__89689__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,G__89689__$1));
var G__89689__$3 = (((G__89689__$2 == null))?null:cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),G__89689__$2));
if((G__89689__$3 == null)){
return null;
} else {
return cljs.core.first(G__89689__$3);
}
})();
if(cljs.core.truth_(temp__5753__auto____$1)){
var target = temp__5753__auto____$1;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(function (){var x__4339__auto__ = nextjournal.clojure_mode.node.end(target);
var y__4340__auto__ = from;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})(),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.end(target),new cljs.core.Keyword(null,"insert","insert",1286475395),nextjournal.clojure_mode.node.name(nextjournal.clojure_mode.node.down_last(parent))], null),(function (){var obj89691 = nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.node.down_last(parent));
var obj89693 = (((!((obj89691 == null))))?obj89691:({}));
(obj89693["insert"] = " ");

return obj89693;
})()], null)], null);
} else {
return null;
}

break;
case (-1):
var temp__5753__auto____$1 = (function (){var G__89696 = nextjournal.clojure_mode.node.down(parent);
var G__89696__$1 = (((G__89696 == null))?null:nextjournal.clojure_mode.node.rights(G__89696));
var G__89696__$2 = (((G__89696__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,G__89696__$1));
var G__89696__$3 = (((G__89696__$2 == null))?null:cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),G__89696__$2));
if((G__89696__$3 == null)){
return null;
} else {
return cljs.core.first(G__89696__$3);
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__89688)].join('')));

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
nextjournal.clojure_mode.commands.reverse_index = cljs.core.reduce_kv((function (p1__89704_SHARP_,p2__89706_SHARP_,p3__89705_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__89704_SHARP_,p3__89705_SHARP_,p2__89706_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,nextjournal.clojure_mode.commands.index);

//# sourceMappingURL=nextjournal.clojure_mode.commands.js.map
