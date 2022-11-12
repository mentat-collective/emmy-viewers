goog.provide('re_frame.interop');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
re_frame.interop.next_tick = reagent.impl.batching.do_before_flush;
re_frame.interop.empty_queue = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY);
re_frame.interop.after_render = reagent.core.after_render;
/**
 * @define {boolean}
 */
re_frame.interop.debug_enabled_QMARK_ = goog.DEBUG;
re_frame.interop.ratom = (function re_frame$interop$ratom(x){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(x);
});
re_frame.interop.ratom_QMARK_ = (function re_frame$interop$ratom_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.reagent$ratom$IReactiveAtom$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,x);
}
});
re_frame.interop.deref_QMARK_ = (function re_frame$interop$deref_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});
re_frame.interop.make_reaction = (function re_frame$interop$make_reaction(f){
return reagent.ratom.make_reaction(f);
});
re_frame.interop.add_on_dispose_BANG_ = (function re_frame$interop$add_on_dispose_BANG_(a_ratom,f){
return reagent.ratom.add_on_dispose_BANG_(a_ratom,f);
});
re_frame.interop.dispose_BANG_ = (function re_frame$interop$dispose_BANG_(a_ratom){
return reagent.ratom.dispose_BANG_(a_ratom);
});
re_frame.interop.set_timeout_BANG_ = (function re_frame$interop$set_timeout_BANG_(f,ms){
return setTimeout(f,ms);
});
re_frame.interop.now = (function re_frame$interop$now(){
if((((typeof performance !== 'undefined')) && ((typeof performance !== 'undefined') && (typeof performance.now !== 'undefined')))){
return performance.now();
} else {
return Date.now();
}
});
/**
 * Produces an id for reactive Reagent values
 *   e.g. reactions, ratoms, cursors.
 */
re_frame.interop.reagent_id = (function re_frame$interop$reagent_id(reactive_val){
if((((!((reactive_val == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === reactive_val.reagent$ratom$IReactiveAtom$))))?true:false):false)){
return [(function (){var pred__63988 = cljs.core.instance_QMARK_;
var expr__63989 = reactive_val;
if(cljs.core.truth_((pred__63988.cljs$core$IFn$_invoke$arity$2 ? pred__63988.cljs$core$IFn$_invoke$arity$2(reagent.ratom.RAtom,expr__63989) : pred__63988.call(null,reagent.ratom.RAtom,expr__63989)))){
return "ra";
} else {
if(cljs.core.truth_((pred__63988.cljs$core$IFn$_invoke$arity$2 ? pred__63988.cljs$core$IFn$_invoke$arity$2(reagent.ratom.RCursor,expr__63989) : pred__63988.call(null,reagent.ratom.RCursor,expr__63989)))){
return "rc";
} else {
if(cljs.core.truth_((pred__63988.cljs$core$IFn$_invoke$arity$2 ? pred__63988.cljs$core$IFn$_invoke$arity$2(reagent.ratom.Reaction,expr__63989) : pred__63988.call(null,reagent.ratom.Reaction,expr__63989)))){
return "rx";
} else {
if(cljs.core.truth_((pred__63988.cljs$core$IFn$_invoke$arity$2 ? pred__63988.cljs$core$IFn$_invoke$arity$2(reagent.ratom.Track,expr__63989) : pred__63988.call(null,reagent.ratom.Track,expr__63989)))){
return "tr";
} else {
return "other";
}
}
}
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(reactive_val))].join('');
} else {
return null;
}
});
re_frame.interop._STAR_in_batch_QMARK__STAR_ = false;
re_frame.interop.batch_updates = (function re_frame$interop$batch_updates(f){
return module$node_modules$react_dom$index.unstable_batchedUpdates((function (){
var _STAR_in_batch_QMARK__STAR__orig_val__63994 = re_frame.interop._STAR_in_batch_QMARK__STAR_;
var _STAR_in_batch_QMARK__STAR__temp_val__63995 = true;
(re_frame.interop._STAR_in_batch_QMARK__STAR_ = _STAR_in_batch_QMARK__STAR__temp_val__63995);

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {(re_frame.interop._STAR_in_batch_QMARK__STAR_ = _STAR_in_batch_QMARK__STAR__orig_val__63994);
}}));
});
var flush_queues_64001 = reagent.impl.batching.render_queue.flush_queues.bind(reagent.impl.batching.render_queue);
(reagent.impl.batching.render_queue.flush_queues = (function (){
return re_frame.interop.batch_updates(flush_queues_64001);
}));
var queue_render_64002 = reagent.impl.batching.queue_render;
(reagent.impl.batching.queue_render = (function (c){
if(cljs.core.truth_(re_frame.interop._STAR_in_batch_QMARK__STAR_)){
return c.forceUpdate();
} else {
return (queue_render_64002.cljs$core$IFn$_invoke$arity$1 ? queue_render_64002.cljs$core$IFn$_invoke$arity$1(c) : queue_render_64002.call(null,c));
}
}));

//# sourceMappingURL=re_frame.interop.js.map
