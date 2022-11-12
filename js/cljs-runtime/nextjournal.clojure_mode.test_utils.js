goog.provide('nextjournal.clojure_mode.test_utils');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
nextjournal.clojure_mode.test_utils.make_state = (function nextjournal$clojure_mode$test_utils$make_state(extensions,doc){
var vec__66870 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__66873,match){
var vec__66874 = p__66873;
var doc__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66874,(0),null);
var ranges = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66874,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(match,"|")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ranges,module$node_modules$$codemirror$state$dist$index_cjs.EditorSelection.cursor(((doc__$1).length)))], null);
} else {
if(clojure.string.starts_with_QMARK_(match,"<")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[doc__$1,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(match,(1),(cljs.core.count(match) - (1)))].join(''),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ranges,module$node_modules$$codemirror$state$dist$index_cjs.EditorSelection.range(((doc__$1).length),(((doc__$1).length) + (cljs.core.count(match) - (2)))))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[doc__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join(''),ranges], null);

}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentVector.EMPTY], null),cljs.core.re_seq(/\||<[^>]*?>|[^<>|]+/,doc));
var doc__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66870,(0),null);
var ranges = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66870,(1),null);
return module$node_modules$$codemirror$state$dist$index_cjs.EditorState.create(({"doc": doc__$1, "selection": ((cljs.core.seq(ranges))?module$node_modules$$codemirror$state$dist$index_cjs.EditorSelection.create(cljs.core.to_array(ranges)):undefined), "extensions": (function (){var G__66877 = [module$node_modules$$codemirror$state$dist$index_cjs.EditorState.allowMultipleSelections.of(true)];
if(cljs.core.truth_(extensions)){
var Array66878 = G__66877;
Array66878.push(extensions);

return Array66878;
} else {
return G__66877;
}
})()}));
});
nextjournal.clojure_mode.test_utils.state_str = (function nextjournal$clojure_mode$test_utils$state_str(state){
var doc = cljs.core.str.cljs$core$IFn$_invoke$arity$1(state.doc);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (doc__$1,p__66879){
var map__66880 = p__66879;
var map__66880__$1 = (((((!((map__66880 == null))))?(((((map__66880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66880):map__66880);
var empty = (function (){var obj66882 = map__66880__$1;
if((!((obj66882 == null)))){
return (obj66882["empty"]);
} else {
return undefined;
}
})();
var from = (function (){var obj66883 = map__66880__$1;
if((!((obj66883 == null)))){
return (obj66883["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj66884 = map__66880__$1;
if((!((obj66884 == null)))){
return (obj66884["to"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(doc__$1,(0),from),"|",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(doc__$1,from)].join('');
} else {
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(doc__$1,(0),from),"<",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(doc__$1,from,to),">",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(doc__$1,to)].join('');
}
}),doc,cljs.core.reverse(state.selection.ranges));
});
nextjournal.clojure_mode.test_utils.apply_cmd = (function nextjournal$clojure_mode$test_utils$apply_cmd(extensions,cmd,doc){
var state = nextjournal.clojure_mode.test_utils.make_state(extensions,doc);
var _BANG_tr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var _ = (function (){var G__66886 = ({"state": state, "dispatch": (function (p1__66885_SHARP_){
return cljs.core.reset_BANG_(_BANG_tr,p1__66885_SHARP_);
})});
return (cmd.cljs$core$IFn$_invoke$arity$1 ? cmd.cljs$core$IFn$_invoke$arity$1(G__66886) : cmd.call(null,G__66886));
})();
var tr = cljs.core.deref(_BANG_tr);
return nextjournal.clojure_mode.test_utils.state_str((function (){var obj66887 = tr;
if((!((obj66887 == null)))){
return (obj66887["state"]);
} else {
return undefined;
}
})());
});
nextjournal.clojure_mode.test_utils.apply_f = (function nextjournal$clojure_mode$test_utils$apply_f(extensions,cmd,doc){
if(cljs.core.array_QMARK_(extensions)){
} else {
throw (new Error("Assert failed: (array? extensions)"));
}

if(cljs.core.fn_QMARK_(cmd)){
} else {
throw (new Error("Assert failed: (fn? cmd)"));
}

if(typeof doc === 'string'){
} else {
throw (new Error("Assert failed: (string? doc)"));
}

var state = nextjournal.clojure_mode.test_utils.make_state(extensions,doc);
var tr = (cmd.cljs$core$IFn$_invoke$arity$1 ? cmd.cljs$core$IFn$_invoke$arity$1(state) : cmd.call(null,state));
return nextjournal.clojure_mode.test_utils.state_str((cljs.core.truth_(tr)?tr.state:state));
});

//# sourceMappingURL=nextjournal.clojure_mode.test_utils.js.map
